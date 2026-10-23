#!/usr/bin/env python3
"""Put the shared module look into demos, before </head>: tools/look/look.css as <style id="vd-look"> and
tools/look/gear.js (window.VDGear, canvas drawing for lab equipment: bench, rods, boxes, LCDs, pulleys, speakers,
quiet labels) as <script id="vd-gear">.

The look adds depth, quieter secondary text and one instrument finish (function generators, knobs, LCDs) without
touching sizes the layout depends on. Demos keep their own tokens; the block only reads them. Running the tool again
replaces the block, so edit tools/look/look.css and rerun.

Usage:
    python3 tools/look.py                # the Acoustics module (the demos linked from acoustics.html)
    python3 tools/look.py doppler chladni
    python3 tools/look.py --check        # report demos whose block is missing or stale
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CSS = (ROOT / "tools" / "look" / "look.css").read_text()
GEAR = (ROOT / "tools" / "look" / "gear.js").read_text()
BLOCK = ('<style id="vd-look">\n/* vd-look */\n' + CSS.rstrip() + '\n/* /vd-look */\n</style>\n'
         '<script id="vd-gear">\n' + GEAR.rstrip() + '\n</script>\n')
RE = re.compile(r'<style id="vd-look">.*?</style>\n(<script id="vd-gear">.*?</script>\n)?', re.S)


def module_demos():
    page = (ROOT / "acoustics.html").read_text()
    return sorted(set(re.findall(r'demos/([a-z0-9-]+)\.html', page)))


def main(argv):
    check = "--check" in argv
    names = [a for a in argv if not a.startswith("--")] or module_demos()
    stale = []
    for n in names:
        p = ROOT / "demos" / f"{n}.html"
        s = p.read_text()
        if RE.search(s):
            new = RE.sub(lambda m: BLOCK, s, count=1)
        else:
            new = s.replace("</head>", BLOCK + "</head>", 1)
        if new != s:
            stale.append(n)
            if not check:
                p.write_text(new)
    if check:
        print("stale or missing:", " ".join(stale) or "none")
        return 1 if stale else 0
    print("updated:", " ".join(stale) or "none")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
