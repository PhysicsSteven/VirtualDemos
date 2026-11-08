#!/usr/bin/env python3
"""Link the site skin (demos/lib/paper.css, the lab look) into every demo, last in <head> so its tokens win over the demo's own
<style>. The skin (parchment on 2026-11-08, then the lab look the same day, Steve's direction B) keeps every
canvas and 3D scene as it is: paper.css only restyles the page around the instrument (title, rail, buttons, the stage's
mount). The site pages get the file from tools/courses.py, the notes from tools/notes.py, the worksheets from
_includes/head-custom.html.

    python3 tools/paper.py            add the link where it is missing (demos and the demo templates)
    python3 tools/paper.py --check    list demos without it, exit 1 if any
"""
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TAG = '<link rel="stylesheet" id="vd-paper" href="{}lib/paper.css">\n'


def targets():
    for p in sorted((ROOT / 'demos').glob('*.html')):
        if '<link rel="stylesheet" href="lib/vd.css">' in p.read_text() or 'lib/vd.css' in p.read_text():
            yield p, ''
    yield ROOT / 'demos/lib/template.html', '../'
    yield ROOT / 'tools/star-slice/star-slice.template.html', ''


def main():
    check = '--check' in sys.argv
    missing = []
    for p, pre in targets():
        s = p.read_text()
        if 'id="vd-paper"' in s:
            continue
        if '</head>' not in s:
            continue
        missing.append(p)
        if not check:
            p.write_text(s.replace('</head>', TAG.format(pre) + '</head>', 1))
    if check:
        for p in missing:
            print(f'{p.relative_to(ROOT)}: no paper.css link (run python3 tools/paper.py)')
        sys.exit(1 if missing else 0)
    print(f'linked paper.css into {len(missing)} page(s)')


if __name__ == '__main__':
    main()
