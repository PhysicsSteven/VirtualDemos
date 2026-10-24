#!/usr/bin/env python3
"""Build the printable teaching notes (and, separately, the answer keys).

Each demo's notes are written once, in notes/src/<demo>.md:

    ---
    title: Rutherford Scattering
    level: PHYS 202, modern physics
    time: 15 to 25 minutes
    ---
    ## Learning goals
    - ...
    ## Questions
    **Q1.** Predict: ...
    **Q2.** ...
    ## (any other sections)

The questions are numbered **Q1.**, **Q2.**, ... at the start of a line.

Answers are NOT kept in this public repo. They live in a separate folder
(a private repo or a local copy) as answers/<demo>.md, one block per question:

    **Q1.** The answer ...
    **Q2.** ...

Usage:
    python3 tools/notes.py                    # build notes/<demo>.html and notes/index.html
    python3 tools/notes.py rutherford         # only these demos (index is rebuilt too)
    python3 tools/notes.py --keys ../keys     # also build ../keys/key/<demo>.html from
                                              # ../keys/answers/<demo>.md (written there, never here)
    python3 tools/notes.py --check            # list demos without notes, and question/answer mismatches

notes/index.html lists only notes whose source is committed; build again after committing new ones.

Needs: pip install markdown
"""
import argparse
import html
import re
import sys
from pathlib import Path

import markdown

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "notes" / "src"
OUT = ROOT / "notes"
DEMOS = ROOT / "demos"
INDEX = ROOT / "index.html"

Q_RE = re.compile(r"^\*\*Q(\d+)(?: \([^)]*\))?\.\*\*", re.M)   # **Qn.** or **Qn (lab).**

CSS = r"""
:root {
  --bg: #ffffff; --surface: #f6f8fb; --ink: #17202b; --muted: #5a6575; --line: #d3d9e2;
  --accent: #2b60b5; --pos: #c23f2c; --equi: #a7740b; --tag: #e9eef6;
  --sans: "Atkinson Hyperlegible", system-ui, -apple-system, "Segoe UI", sans-serif;
  --mono: "JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, monospace;
  color-scheme: light;
}
@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) {
  --bg: #0f141b; --surface: #161d27; --ink: #e6ebf1; --muted: #9aa6b5; --line: #2a3442;
  --accent: #7aa7f0; --pos: #f08a77; --equi: #e0b452; --tag: #1d2633; color-scheme: dark; } }
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--ink); font: 16px/1.55 var(--sans); }
main { max-width: 760px; margin: 0 auto; padding: 28px 20px 56px; }
a { color: var(--accent); }
header { border-bottom: 2px solid var(--ink); padding-bottom: 12px; margin-bottom: 18px; }
.kicker { font: 600 0.78rem/1.2 var(--mono); letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); margin: 0 0 6px; }
h1 { font-size: 1.9rem; line-height: 1.15; margin: 0 0 8px; letter-spacing: -0.01em; }
.meta { display: flex; flex-wrap: wrap; gap: 6px 10px; margin: 8px 0 0; padding: 0; list-style: none; font-size: 0.9rem; }
.meta li { background: var(--tag); border-radius: 999px; padding: 2px 10px; }
.meta a { font-weight: 700; }
h2 { font-size: 1.15rem; margin: 26px 0 8px; padding-top: 4px; border-top: 1px solid var(--line); }
h2:first-of-type { border-top: 0; }
h3 { font-size: 1rem; margin: 16px 0 4px; }
p, ul, ol { margin: 6px 0 10px; }
li { margin: 3px 0; }
code { font: 0.9em var(--mono); background: var(--surface); padding: 0 4px; border-radius: 4px; }
em.preset, .preset { font-style: normal; font-weight: 700; }
.q { margin: 10px 0 14px; padding: 8px 12px; border-left: 3px solid var(--accent); background: var(--surface); border-radius: 0 6px 6px 0; break-inside: avoid; }
.q > p:first-child { margin-top: 0; } .q > :last-child { margin-bottom: 0; }
.q strong:first-child { color: var(--accent); }
.a { margin: 6px 0 0; padding: 8px 12px; border-left: 3px solid var(--equi); background: var(--bg); border-radius: 0 6px 6px 0; }
.a > :first-child { margin-top: 0; } .a > :last-child { margin-bottom: 0; }
.a .lbl { font: 700 0.75rem/1 var(--mono); letter-spacing: 0.05em; text-transform: uppercase; color: var(--equi); display: block; margin-bottom: 4px; }
.keynote { border: 2px solid var(--pos); color: var(--pos); border-radius: 8px; padding: 6px 10px; font-weight: 700; margin: 0 0 14px; }
footer { margin-top: 36px; padding-top: 10px; border-top: 1px solid var(--line); color: var(--muted); font-size: 0.85rem; }
.toc { columns: 2 260px; padding-left: 0; list-style: none; }
.toc li { break-inside: avoid; margin: 2px 0; }
.toc h3 { break-after: avoid; }
.missing { color: var(--muted); }
.print { float: right; font: inherit; font-size: 0.85rem; padding: 4px 12px; border: 1px solid var(--line); border-radius: 6px; background: var(--surface); color: var(--ink); cursor: pointer; }
@media print {
  :root { --bg: #fff; --surface: #f3f5f8; --ink: #000; --muted: #444; --line: #bbb; --tag: #eef1f5; color-scheme: light; }
  body { font-size: 11pt; } main { max-width: none; padding: 0; }
  .print { display: none; } a { color: inherit; text-decoration: none; }
  h2 { break-after: avoid; } .q { break-inside: avoid; }
  @page { margin: 16mm 16mm 18mm; }
}
@media (max-width: 480px) { main { padding: 18px 16px 40px; } h1 { font-size: 1.5rem; } }
"""

FONTS = ('<link rel="preconnect" href="https://fonts.googleapis.com">\n'
         '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
         '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700'
         '&family=JetBrains+Mono:wght@400;600&display=swap">')


def page(title, body, robots=""):
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
{robots}<title>{html.escape(title)}</title>
{FONTS}
{MATHJAX if robots else ""}<style>{CSS}</style>
</head>
<body>
<main>
{body}
</main>
</body>
</html>
"""


def parse(path):
    t = path.read_text(encoding="utf-8")
    meta = {}
    m = re.match(r"---\n(.*?)\n---\n", t, re.S)
    if m:
        for line in m.group(1).splitlines():
            if ":" in line:
                k, v = line.split(":", 1)
                v = v.strip()
                if len(v) >= 2 and v[0] == v[-1] and v[0] in "'\"":
                    v = v[1:-1]   # a quoted YAML value, such as a title with a colon
                meta[k.strip()] = v
        t = t[m.end():]
    return meta, t


def split_q(text):
    """Return {n: markdown} for **Qn.** blocks (each runs to the next block, heading or end)."""
    out = {}
    ms = list(Q_RE.finditer(text))
    for i, m in enumerate(ms):
        end = ms[i + 1].start() if i + 1 < len(ms) else len(text)
        h = re.search(r"^#{1,3} ", text[m.end():end], re.M)
        if h:
            end = m.end() + h.start()
        out[int(m.group(1))] = text[m.start():end].strip()
    return out


MATH_DISPLAY = re.compile(r"\$\$.*?\$\$", re.S)
MATH_INLINE = re.compile(r"(?<![\\$])\$(?![\s$])[^$\n]+?(?<![\s\\])\$(?!\$)")


def md(text):
    """Markdown to HTML. LaTeX in $...$ (inline) and $$...$$ (display), as in the TeacherKeys answers, is kept away from the
    Markdown converter (which would turn _ and * into emphasis) and typeset by MathJax on the page."""
    store = []

    def keep(m):
        store.append(m.group(0))
        return f"@@MATH{len(store) - 1}@@"
    text = MATH_INLINE.sub(keep, MATH_DISPLAY.sub(keep, text))
    out = markdown.markdown(text, extensions=["tables", "sane_lists"])
    return re.sub(r"@@MATH(\d+)@@", lambda m: html.escape(store[int(m.group(1))], quote=False), out)


MATHJAX = ('<script>window.MathJax = { tex: { inlineMath: [["$", "$"]], displayMath: [["$$", "$$"]] } };</script>\n'
           '<script defer src="https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-mml-chtml.js"></script>\n'
           '<style>mjx-container[display="true"] { overflow-x: auto; overflow-y: hidden; max-width: 100%; }</style>\n')


def render_body(text, answers=None):
    """Markdown to HTML, with each **Qn.** block boxed (and its answer under it on a key)."""
    qs = split_q(text)
    parts, pos = [], 0
    for m in Q_RE.finditer(text):
        n = int(m.group(1))
        block = qs[n]
        start = m.start()
        parts.append(md(text[pos:start]))
        inner = md(block)
        if answers is not None:
            a = answers.get(n)
            a_html = md(Q_RE.sub("", a, count=1).strip()) if a else "<p><em>No answer written yet.</em></p>"
            inner += f'<div class="a"><span class="lbl">Answer</span>{a_html}</div>'
        parts.append(f'<div class="q">{inner}</div>')
        pos = start + len(block)
    parts.append(md(text[pos:]))
    return "\n".join(parts)


def demo_title(name):
    p = DEMOS / f"{name}.html"
    if not p.exists():
        return None
    m = re.search(r"<title>(.*?)</title>", p.read_text(encoding="utf-8"), re.S)
    return html.unescape(m.group(1).strip()) if m else name


def header(meta, name, key=False):
    title = meta.get("title") or demo_title(name) or name
    items = []
    if not key:
        items.append(f'<li><a href="../demos/{name}.html">Open the demo</a></li>')
    for k in ("level", "time"):
        if meta.get(k):
            items.append(f"<li>{html.escape(meta[k])}</li>")
    kick = "Answer key · instructor only" if key else "Teaching notes · Virtual Physics Demos"
    btn = '<button class="print" type="button" onclick="print()">Print</button>'
    return (f'<header>{btn}<p class="kicker">{kick}</p><h1>{html.escape(title)}</h1>'
            f'<ul class="meta">{"".join(items)}</ul></header>'), title


def build_notes(name):
    meta, text = parse(SRC / f"{name}.md")
    head, title = header(meta, name)
    foot = ('<footer>Part of <a href="index.html">the teaching notes</a> for '
            '<a href="../index.html">Virtual Physics Demos</a>. © 2026 Steven Anderson. All rights reserved; see the '
            '<a href="../LICENSE.html">terms of use</a>.</footer>')
    (OUT / f"{name}.html").write_text(page(f"{title}: teaching notes", head + render_body(text) + foot), encoding="utf-8")


def build_key(name, keys):
    meta, text = parse(SRC / f"{name}.md")
    ap = keys / "answers" / f"{name}.md"
    answers = split_q(ap.read_text(encoding="utf-8")) if ap.exists() else {}
    head, title = header(meta, name, key=True)
    # only the questions, each with its answer
    qs = split_q(text)
    body = "".join(render_body(qs[n], answers) for n in sorted(qs))
    warn = '<p class="keynote">Answer key: keep this out of the public repo.</p>'
    out = keys / "key"
    out.mkdir(parents=True, exist_ok=True)
    (out / f"{name}.html").write_text(page(f"{title}: answer key", head + warn + body,
                                           '<meta name="robots" content="noindex">\n'), encoding="utf-8")


def sections_from_index():
    """[(subject, [(name, title)])] in the order of curriculum/catalog.json."""
    import json
    cat = json.loads((ROOT / "curriculum" / "catalog.json").read_text(encoding="utf-8"))
    return [(sub["title"], [(d["demo"], demo_title(d["demo"]) or d["demo"]) for d in sub["demos"]]) for sub in cat["subjects"]]


def committed_sources():
    """Notes sources that git already tracks, so drafts in progress stay off the index."""
    import subprocess
    try:
        out = subprocess.run(["git", "ls-files", "notes/src"], cwd=ROOT, capture_output=True, text=True, check=True).stdout
        return {Path(f).stem for f in out.split()}
    except (OSError, subprocess.CalledProcessError):
        return {p.stem for p in SRC.glob("*.md")}


def build_index():
    rows = []
    done = committed_sources()
    for subj, items in sections_from_index():
        lis = []
        for n, title in items:
            if n in done:
                lis.append(f'<li><a href="{n}.html">{html.escape(title)}</a></li>')
            else:
                lis.append(f'<li class="missing">{html.escape(title)} (notes to come)</li>')
        rows.append(f"<h2>{html.escape(subj)}</h2><ul class=\"toc\">{''.join(lis)}</ul>")
    head = ('<header><p class="kicker">Virtual Physics Demos</p><h1>Teaching notes</h1>'
            '<p>One printable page per demo: what it shows, a way to run it in class, questions to ask, '
            'common misconceptions and the physics behind it. <a href="../index.html">Back to the demos</a>.</p></header>')
    (OUT / "index.html").write_text(page("Teaching notes", head + "".join(rows)), encoding="utf-8")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("names", nargs="*")
    ap.add_argument("--keys", type=Path, help="folder holding answers/<demo>.md; keys are written to its key/ folder")
    ap.add_argument("--check", action="store_true")
    a = ap.parse_args()
    names = sorted(p.stem for p in SRC.glob("*.md"))
    if a.check:
        demos = sorted(p.stem for p in DEMOS.glob("*.html"))
        moved = {n for n in demos if 'http-equiv="refresh"' in (DEMOS / f"{n}.html").read_text()}   # a page that only redirects to a merged demo
        print("demos without notes:", " ".join(n for n in demos if n not in names and n not in moved) or "none")
        for n in names:
            qs = split_q(parse(SRC / f"{n}.md")[1])
            if sorted(qs) != list(range(1, len(qs) + 1)):
                print(f"{n}: questions not numbered 1..{len(qs)}")
            if a.keys:
                ap_ = a.keys / "answers" / f"{n}.md"
                got = split_q(ap_.read_text(encoding="utf-8")) if ap_.exists() else {}
                if sorted(got) != sorted(qs):
                    print(f"{n}: questions {sorted(qs)} but answers {sorted(got)}")
        return
    if a.keys and a.keys.resolve().is_relative_to(ROOT):
        sys.exit("refusing to write answer keys inside the public repo")
    if a.names:
        names = [n for n in names if n in a.names]
    for n in names:
        build_notes(n)
        if a.keys:
            build_key(n, a.keys)
        print(n)
    build_index()


if __name__ == "__main__":
    main()
