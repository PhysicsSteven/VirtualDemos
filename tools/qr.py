#!/usr/bin/env python3
"""Put a QR code for each demo's own page into its header, shown only in projector mode.

Students scan it off the classroom screen to open the same demo on their phone.
The code is a static inline SVG (no library at run time), placed between
<!-- vd-qr --> markers after the Projector button, with its CSS between
/* vd-qr */ markers at the end of the first <style>. Running the tool again
replaces both, so it is safe to rerun after adding demos.

The code is shown only when the page is opened at that address, so a copy
opened from disk or uploaded elsewhere (for example to Canvas) shows no code.

Usage:
    python3 tools/qr.py                 # every demo
    python3 tools/qr.py --base https://example.edu/demos/   # after moving the site
    python3 tools/qr.py doppler lasers  # only these
    python3 tools/qr.py --check         # report demos without a current code

Needs: pip install qrcode
Star Slice is generated: the tool edits tools/star-slice/star-slice.template.html;
rebuild it afterwards with python3 tools/star-slice/build.py.
"""
import argparse
import re
import sys
from pathlib import Path

import qrcode

ROOT = Path(__file__).resolve().parent.parent
BASE = "https://physicssteven.github.io/VirtualDemos/demos/"
TEMPLATES = {"star-slice": ROOT / "tools" / "star-slice" / "star-slice.template.html"}

CSS = """/* vd-qr */
.vd-qr { display: none; }
@media (min-width: 821px) {
  :root[data-projector="on"] .vd-qr { display: block; margin: -8px 0; }
}
.vd-qr svg { width: 64px; height: 64px; display: block; border-radius: 3px; }
.vd-qr { padding: 0; border: 0; background: none; cursor: zoom-in; }
.vd-qr-big { position: fixed; inset: 0; z-index: 1000; display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 16px; background: rgba(0, 0, 0, 0.82); color: #fff; cursor: zoom-out; font: 600 1.4rem/1.3 system-ui, sans-serif; text-align: center; padding: 16px; }
.vd-qr-big svg { width: min(70vh, 86vw); height: min(70vh, 86vw); border-radius: 8px; }
.vd-qr-big small { font: 400 1rem/1.3 ui-monospace, monospace; opacity: 0.85; }
/* /vd-qr */"""

HTML_RE = re.compile(r"\n?\s*<!-- vd-qr -->.*?<!-- /vd-qr -->", re.S)
CSS_RE = re.compile(r"\n?/\* vd-qr \*/.*?/\* /vd-qr \*/", re.S)


def qr_svg(url):
    q = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, border=2)
    q.add_data(url)
    q.make(fit=True)
    m = q.get_matrix()  # includes the border
    n = len(m)
    # one path of unit squares, merged along rows
    d = []
    for y, row in enumerate(m):
        x = 0
        while x < n:
            if row[x]:
                x0 = x
                while x < n and row[x]:
                    x += 1
                d.append(f"M{x0} {y}h{x - x0}v1h{x0 - x}z")
            else:
                x += 1
    # always dark on white, also in the dark theme, so phones can read it
    return (f'<svg viewBox="0 0 {n} {n}" role="img" aria-label="QR code for {url}" shape-rendering="crispEdges">'
            f'<rect width="{n}" height="{n}" fill="#fff"/><path fill="#000" d="{"".join(d)}"/></svg>')


def block(name):
    url = BASE + name + ".html"
    # click shows it large for the back row; click again or Esc closes
    # The code is only shown on the hosted copy it points to: opened from a file,
    # Canvas or another host, the button removes itself instead of showing a link
    # that may not work there. Rerun with --base after moving the site.
    js = ("(function(b){var h=location.href.split(/[?#]/)[0].toLowerCase();"
          "if(h!==b.dataset.url.toLowerCase()){b.remove();return;}"
          "b.addEventListener('click',function(){var o=document.createElement('div');"
          "o.className='vd-qr-big';o.setAttribute('role','dialog');o.setAttribute('aria-label','QR code');"
          "o.innerHTML=b.innerHTML+'<div>Scan to open this demo on your phone</div><small>'+b.dataset.url+'</small>';"
          "function x(e){if(!e||e.type==='click'||e.key==='Escape'){o.remove();document.removeEventListener('keydown',x);b.focus();}}"
          "o.addEventListener('click',x);document.addEventListener('keydown',x);document.body.appendChild(o);});})"
          "(document.currentScript.previousElementSibling);")
    return (f'\n      <!-- vd-qr --><button type="button" class="vd-qr" data-url="{url}" '
            f'title="Show a large QR code to open this demo on a phone" aria-label="Show QR code for phones">'
            f'{qr_svg(url)}</button><script>{js}</script><!-- /vd-qr -->')


def apply(path, name):
    t = path.read_text(encoding="utf-8")
    t = HTML_RE.sub("", t)
    t = CSS_RE.sub("", t)
    m = re.search(r'<button[^>]*id="proj"[^>]*>.*?</button>', t, re.S)
    if not m:
        raise RuntimeError("no Projector button")
    t = t[:m.end()] + block(name) + t[m.end():]
    end = t.index("</style>")
    t = t[:end].rstrip("\n") + "\n" + CSS + "\n" + t[end:]
    path.write_text(t, encoding="utf-8")


def main():
    global BASE
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("names", nargs="*")
    ap.add_argument("--check", action="store_true")
    ap.add_argument("--base", help=f"site address the codes point to (default {BASE})")
    a = ap.parse_args()
    if a.base:
        BASE = a.base.rstrip("/") + "/"
    demos = sorted((ROOT / "demos").glob("*.html"))
    if a.names:
        demos = [d for d in demos if d.stem in a.names]
    bad = []
    for d in demos:
        src = TEMPLATES.get(d.stem, d)
        if a.check:
            t = src.read_text(encoding="utf-8")
            if block(d.stem).strip() not in t:
                bad.append(d.stem)
            continue
        apply(src, d.stem)
        print(("template " if src != d else "") + d.stem)
    if a.check:
        print("missing or stale:", " ".join(bad) if bad else "none")
        sys.exit(1 if bad else 0)


if __name__ == "__main__":
    main()
