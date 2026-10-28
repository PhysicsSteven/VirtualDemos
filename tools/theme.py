#!/usr/bin/env python3
"""Link the site theme switch (demos/lib/theme.js) at the top of <head> on every hand written or generated page.

    python3 tools/theme.py            add it where it is missing (demos, notes, home and course pages, templates)
    python3 tools/theme.py --check    list pages without it, exit 1 if any

The script goes right after the viewport meta, before any stylesheet or script, so data-theme is set before the
page paints and before a demo's own scripts call matchMedia. tools/courses.py and tools/notes.py write it into
the pages they generate; the handouts get it from _includes/head-custom.html.
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TAG = '<script src="{}lib/theme.js"></script>'


def targets():
    for p in sorted((ROOT / 'demos').glob('*.html')):
        yield p, ''
    for p in sorted((ROOT / 'notes').glob('*.html')):
        yield p, '../demos/'
    for p in sorted(ROOT.glob('*.html')):
        yield p, 'demos/'
    for p in sorted((ROOT / 'topics').glob('*.html')):   # topic pages set <base href="../">, so they link from the site root
        yield p, 'demos/'
    yield ROOT / 'demos/lib/template.html', '../'
    yield ROOT / 'tools/star-slice/star-slice.template.html', ''


def main():
    check = '--check' in sys.argv
    missing = []
    for p, pre in targets():
        s = p.read_text(encoding='utf-8')
        if 'lib/theme.js"' in s or 'http-equiv="refresh"' in s:   # a redirect page shows nothing to theme
            continue
        m = re.search(r'<meta name="viewport"[^>]*>\n', s) or re.search(r'<meta charset="utf-8">\n', s)
        if not m:
            print('no place for the theme script:', p.relative_to(ROOT))
            missing.append(p)
            continue
        if check:
            missing.append(p)
            print('missing:', p.relative_to(ROOT))
            continue
        p.write_text(s[:m.end()] + TAG.format(pre) + '\n' + s[m.end():], encoding='utf-8')
        print('linked', p.relative_to(ROOT))
    if check and missing:
        sys.exit(1)


if __name__ == '__main__':
    main()
