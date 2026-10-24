"""Put a Reset all button into every demo's header, just before the Projector button.

Reset all puts every control, preset and the simulation back the way the page
opened, by loading the page again. The snapshot of the initial state is the page
itself, so no demo needs its own reset code. Kept across the reset: the address
(so a setup shared by URL comes back), Projector and Reduce motion (they live in
browser storage), and the scroll position.

Recorded readings are lost by a reset, so the button asks first when any table
on the page holds more data rows than it had just after the page opened (a
single cell row spanning several columns, such as "No readings yet", is not a
reading), or when a Capture, Record, Add point, Add to table, Keep trace or
Pin button was pressed since the last Clear (for demos that keep readings in a
list or a graph rather than a table). A demo can define
window.vdReadings = () => count, and the button uses that instead.

Before reloading, the button turns form restoration off on every control, so
Firefox does not refill the controls with the values they had.

The button and its script sit between <!-- vd-reset --> markers, the CSS
between /* vd-reset */ markers at the end of the first <style>. Running the
tool again replaces both, so it is safe to rerun after adding demos.

Usage:
    python3 tools/reset.py              # every demo
    python3 tools/reset.py doppler      # only these
    python3 tools/reset.py --check      # report demos without a current button

Star Slice is generated: the tool edits tools/star-slice/star-slice.template.html;
rebuild it afterwards with python3 tools/star-slice/build.py.
"""
import argparse
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TEMPLATES = {"star-slice": ROOT / "tools" / "star-slice" / "star-slice.template.html"}
SKIP = set()  # demos that need no Reset all (the old redirect pages were deleted on 2026-10-24)

CSS = """/* vd-reset */
.vd-reset { white-space: nowrap; }
/* /vd-reset */"""

JS = ("(function(b){var base=new WeakMap(),rec=false;"
      "function data(t){var n=0;Array.prototype.forEach.call(t.rows,function(r){"
      "if(r.parentNode.tagName==='THEAD'||r.parentNode.tagName==='TFOOT')return;"
      "if(r.cells.length>1||(r.cells.length===1&&r.cells[0].colSpan<2))n++;});return n;}"
      "function snap(){document.querySelectorAll('table').forEach(function(t){base.set(t,data(t));});}"
      "window.addEventListener('load',function(){setTimeout(snap,400);});"
      "document.addEventListener('click',function(e){var x=e.target.closest&&e.target.closest('button');if(!x||x===b)return;"
      "var s=x.textContent.trim();if(/^(capture|record|add to table|add point|keep trace|pin this)/i.test(s))rec=true;"
      "else if(/^clear/i.test(s))rec=false;},true);"
      "function lost(){if(typeof window.vdReadings==='function')return Number(window.vdReadings())||0;var n=0;"
      "document.querySelectorAll('table').forEach(function(t){n+=Math.max(0,data(t)-(base.has(t)?base.get(t):0));});return n||(rec?-1:0);}"
      "b.vdLost=lost;"
      "b.addEventListener('click',function(){var n=lost();"
      "if(n&&!window.confirm('Reset all clears '+(n>1?'the '+n+' readings':n===1?'the reading':'the readings')+' you recorded. '"
      "+'Export them first if you need them. Reset anyway?'))return;"
      "document.querySelectorAll('input,select,textarea,form').forEach(function(e){e.setAttribute('autocomplete','off');});"
      "location.reload();});})"
      "(document.currentScript.previousElementSibling);")

TITLE = "Put every control, preset and the simulation back the way the page opened"

HTML_RE = re.compile(r"\n?\s*<!-- vd-reset -->.*?<!-- /vd-reset -->", re.S)
CSS_RE = re.compile(r"\n?/\* vd-reset \*/.*?/\* /vd-reset \*/", re.S)


def block(cls, sep="", lib=False):
    return (f'<!-- vd-reset -->{sep}<button type="button" class="{cls}" id="vdReset" title="{TITLE}">Reset all</button>'
            f'{"" if lib else f"<script>{JS}</script>"}<!-- /vd-reset -->')


def apply(path):
    t = path.read_text(encoding="utf-8")
    t = HTML_RE.sub("", t)
    t = CSS_RE.sub("", t)
    lib = "lib/vd.js" in t  # a demo on the shared library: vd.js runs the button and vd.css styles it
    m = re.search(r'<button[^>]*id="proj"[^>]*>', t)
    if m:
        line = t.rfind("\n", 0, m.start()) + 1
        indent = t[line:m.start()]
        t = t[:m.start()] + block("proj vd-reset", lib=lib) + "\n" + indent + t[m.start():]
    else:
        m = re.search(r"</nav></header>", t)  # transient-circuits: no Projector button, links in the header
        if not m:
            raise RuntimeError("no Projector button and no header nav")
        t = t[:m.start()] + block("vd-reset", " · ", lib) + t[m.start():]
    if not lib:
        end = t.index("</style>")
        t = t[:end].rstrip("\n") + "\n" + CSS + "\n" + t[end:]
    path.write_text(t, encoding="utf-8")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("names", nargs="*")
    ap.add_argument("--check", action="store_true")
    a = ap.parse_args()
    demos = [d for d in sorted((ROOT / "demos").glob("*.html")) if d.stem not in SKIP]
    if a.names:
        demos = [d for d in demos if d.stem in a.names]
    bad = []
    for d in demos:
        src = TEMPLATES.get(d.stem, d)
        if a.check:
            t = src.read_text(encoding="utf-8")
            if JS not in t and not ("lib/vd.js" in t and 'id="vdReset"' in t):
                bad.append(d.stem)
            continue
        apply(src)
    if a.check:
        print("\n".join(bad) or "every demo has a current Reset all button")
        sys.exit(1 if bad else 0)


if __name__ == "__main__":
    main()
