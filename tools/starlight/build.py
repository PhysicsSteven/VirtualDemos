#!/usr/bin/env python3
"""Build demos/starlight-data/stars.js for Starlight: Brightness, Luminosity and Magnitudes from the HYG database v3.8
(D. Nash, astronexus.com, CC BY-SA 4.0: Hipparcos, Yale Bright Star and Gliese catalogs combined).

    python3 -I tools/starlight/build.py <hyg_v38.csv.gz>

Writes: sky (every star to V 6.5, for the magnitude sky), counts (stars to each magnitude), near (every star within 10 pc,
for the census, with its spectral class and its V band luminosity 10^(-0.4 (M_V - 4.81))) and eye (spectral classes and luminosities of the naked eye stars, V <= 6).
Spectral class: the first letter of the HYG type; Gliese 'd' (dwarf) and 'sd' (subdwarf) prefixes are dropped, lower case
Gliese photometric classes (k, m) count as K and M, 'D' types are white dwarfs, and stars with no type (all fainter than
M_V = 10) count as M by their absolute magnitude (stated on the page)."""
import csv, gzip, json, math, sys, os

src = sys.argv[1]
rows = list(csv.DictReader(gzip.open(src, 'rt')))
f = lambda s, k: float(s[k]) if s[k] not in ('', None) else None

def cls(s):
    sp = (s['spect'] or '').strip()
    if sp.startswith('D'): return 'WD'
    if sp.startswith('sd'): sp = sp[2:]
    elif sp.startswith('d') or sp.startswith('k-'): sp = sp[1:] if sp.startswith('d') else 'm'
    c = sp[:1].upper()
    if c in 'OBAFGKM' and c: return c
    if c in ('C', 'S', 'N', 'R'): return 'M'   # carbon and S stars: cool giants, counted with M
    M = f(s, 'absmag')
    if M is not None and M > 10: return 'M'
    return '?'

MV_SUN = 4.81   # demos/lib/constants.js MVsun (Willmer 2018); HYG's own lum column uses 4.85, so it is not copied
lum = lambda s: 10 ** (-0.4 * (f(s, 'absmag') - MV_SUN)) if f(s, 'absmag') is not None else 0

sky, counts, near, eye = [], {}, [], {}
grid = [x / 2 for x in range(-4, 19)]   # -2 to 9 in steps of 0.5
for s in rows:
    if s['proper'] == 'Sol': continue
    V = f(s, 'mag'); d = f(s, 'dist')
    if V is None: continue
    for m in grid:
        if V <= m: counts[m] = counts.get(m, 0) + 1
    if V <= 6.5:
        ci = f(s, 'ci'); sky.append([round(f(s, 'ra') * 15 * 100), round(f(s, 'dec') * 100), round(V * 100), round(ci * 100) if ci is not None else 99])
    if V <= 6.0:
        c = cls(s); L = lum(s)
        e = eye.setdefault(c, [0, 0]); e[0] += 1; e[1] += 1 if L > 1 else 0
    if d is not None and 0 < d <= 10 and d < 100000:
        name = s['proper'] or (s['bayer'] and (s['bayer'] + ' ' + s['con'])) or s['gl'] or ('HIP ' + s['hip'] if s['hip'] else 'HD ' + s['hd'])
        near.append([name.strip(), round(f(s, 'x'), 3), round(f(s, 'y'), 3), round(f(s, 'z'), 3), V, round(f(s, 'absmag'), 2), cls(s), round(lum(s), 6)])
near.sort(key=lambda r: math.sqrt(r[1] ** 2 + r[2] ** 2 + r[3] ** 2))
sky.sort(key=lambda r: r[2])
out = {'about': 'HYG database v3.8 (D. Nash, astronexus.com, CC BY-SA 4.0), from Hipparcos, the Yale Bright Star Catalog and the Gliese catalog of nearby stars.',
       'sky': sky, 'counts': [[m, counts.get(m, 0)] for m in grid], 'near': near, 'eye': eye}
hdr = ('/* Stars for Starlight: Brightness, Luminosity and Magnitudes, written by tools/starlight/build.py: do not edit by hand.\n'
       '   HYG database v3.8 (David Nash, astronexus.com), CC BY-SA 4.0: Hipparcos, Yale Bright Star and Gliese catalogs.\n'
       '   sky: per star RA, dec (0.01 deg), V (0.01 mag), B-V (0.01 mag, 99 when none), to V 6.5, brightest first. counts: stars to each\n'
       '   V. near: every star within 10 pc: name, x, y, z (pc, equatorial), V, M_V, class, L (L_sun, from M_V). eye: per class, the\n'
       '   number of stars to V 6 and how many of them are more luminous than the Sun. */\n')
dst = os.path.join(os.path.dirname(__file__), '..', '..', 'demos', 'starlight-data', 'stars.js')
with open(dst, 'w') as fo:
    fo.write(hdr + '(typeof window !== "undefined" ? window : globalThis).VD_STARLIGHT = ' + json.dumps(out, separators=(',', ':'), ensure_ascii=False) + ';\n')
from collections import Counter
print(len(sky), 'sky', len(near), 'near', Counter(r[6] for r in near), eye, os.path.getsize(dst))
