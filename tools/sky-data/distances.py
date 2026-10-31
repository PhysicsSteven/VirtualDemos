#!/usr/bin/env python3
"""Build demos/lib/sky-dist.js (window.VD_SKYDIST): the distance of every star in demos/lib/sky-bsc.js, for the Real distances view
of The Sky and the Celestial Sphere.

    python3 tools/sky-data/distances.py [hyg_v38.csv.gz]

With the HYG file given, it first writes hyg-bsc-dist.csv here: for each Yale Bright Star Catalogue star (by HR number) the HYG v3.8
row's Hipparcos number and distance in parsecs. Without it, it builds from that CSV. The HYG database (D. Nash, astronexus,
CC BY-SA 4.0, https://codeberg.org/astronexus/hyg; the copy used is hyg/v3/hyg_v38.csv.gz from github.com/astronexus/HYG-Database)
takes its distances from the Hipparcos new reduction (van Leeuwen 2007, A&A 474, 653) as 1/parallax, and from the Gliese catalogue for
a few nearby stars. HYG writes 100000 pc where the parallax is zero or negative; those, and HR stars HYG does not list, get 0 here
(unknown). hyg-bsc-dist.csv and sky-dist.js are shared under the same CC BY-SA 4.0 license (THIRD_PARTY_NOTICES.md).
"""
import csv
import gzip
import io
import json
import re
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent.parent
SUB = HERE / 'hyg-bsc-dist.csv'
OUT = ROOT / 'demos' / 'lib' / 'sky-dist.js'


def sky_hr():
    src = (ROOT / 'demos' / 'lib' / 'sky-bsc.js').read_text()
    return json.loads(re.search(r'"hr":(\[[^\]]*\])', src).group(1))


def extract(hyg):
    want = set(sky_hr())
    rows = {}
    with gzip.open(hyg, 'rt', encoding='utf-8') as f:
        for r in csv.DictReader(f):
            if not r['hr']:
                continue
            hr = int(float(r['hr']))
            if hr in want and hr not in rows:
                rows[hr] = (r['hip'], float(r['dist']))
    with open(SUB, 'w', newline='') as f:
        w = csv.writer(f)
        w.writerow(['HR', 'HIP', 'dist_pc'])
        for hr in sorted(rows):
            hip, d = rows[hr]
            w.writerow([hr, hip, f'{d:.4f}'])
    print(f'wrote {SUB.name}: {len(rows)} of {len(want)} stars')


def build():
    dist = {}
    with open(SUB) as f:
        for r in csv.DictReader(f):
            d = float(r['dist_pc'])
            dist[int(r['HR'])] = d if 0 < d < 99999 else 0.0
    hr = sky_hr()
    pc = [round(dist.get(h, 0.0) * 100) for h in hr]   # 0.01 pc
    known = sum(1 for v in pc if v)
    head = ('/* VirtualDemos star distances (window.VD_SKYDIST), written by tools/sky-data/distances.py: do not edit by hand.\n'
            '   pc100: the distance of each star of VD_SKY (same order) in hundredths of a parsec, 0 when unknown. From the HYG database v3.8\n'
            '   (D. Nash, CC BY-SA 4.0), whose distances come from the Hipparcos new reduction (van Leeuwen 2007) and the Gliese catalogue.\n'
            '   This file is shared under CC BY-SA 4.0 (THIRD_PARTY_NOTICES.md). */\n')
    OUT.write_text(head + '(typeof window !== "undefined" ? window : globalThis).VD_SKYDIST = ' + json.dumps({'about': 'HYG v3.8 (CC BY-SA 4.0), Hipparcos new reduction distances', 'pc100': pc}, separators=(',', ':')) + ';\n')
    print(f'wrote {OUT.relative_to(ROOT)}: {known} of {len(hr)} distances')


if __name__ == '__main__':
    if len(sys.argv) > 1:
        extract(sys.argv[1])
    build()
