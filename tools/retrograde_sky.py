#!/usr/bin/env python3
"""Writes the star data of the Retrograde Motion demo (demos/retrograde-motion.html, between /* ==SKY START== */ and
/* ==SKY END== */) from the d3-celestial data files (Olaf Frohn, BSD 3 clause; stars from the Hipparcos catalogue, ESA 1997;
constellation lines and IAU boundaries). Get them with `npm pack d3-celestial@0.7.35` and untar.

    python3 tools/retrograde_sky.py <path to the untarred package>

Stars: every star to magnitude 4.5, and to 5.2 within 32° of the ecliptic, turned from J2000 right ascension and declination
into J2000 ecliptic longitude and latitude (obliquity 23.4392911°, IAU 2006). Lines and boundaries: all 88 constellations'
lines (in ecliptic coordinates), the label place of each (the mean direction of its line ends), and the IAU boundaries (kept in
RA and Dec, where their edges are straight) of the constellations that come within 20° of the ecliptic."""
import json, math, re, sys
from pathlib import Path

D = Path(sys.argv[1]) / 'data'
DEMO = Path(__file__).resolve().parent.parent / 'demos' / 'retrograde-motion.html'
EPS = math.radians(23.4392911)

def ecl(ra, dec):
    a, d = math.radians(ra), math.radians(dec)
    x, y, z = math.cos(d) * math.cos(a), math.cos(d) * math.sin(a), math.sin(d)
    y2 = math.cos(EPS) * y + math.sin(EPS) * z
    z2 = -math.sin(EPS) * y + math.cos(EPS) * z
    return math.degrees(math.atan2(y2, x)) % 360, math.degrees(math.asin(max(-1, min(1, z2))))

stars = []
for f in json.load(open(D / 'stars.6.json'))['features']:
    m = f['properties']['mag']; ra, dec = f['geometry']['coordinates']; l, b = ecl(ra % 360, dec)
    if m <= 4.5 or (abs(b) <= 32 and m <= 5.2):
        bv = f['properties'].get('bv'); bv = float(bv) if bv not in (None, '') else 0.6
        stars += [round(l * 10), round(b * 10), round(m * 10), max(-4, min(20, round(bv * 10)))]
info = {c['id']: c['properties'] for c in json.load(open(D / 'constellations.json'))['features']}
lines, names = {}, {}
for c in json.load(open(D / 'constellations.lines.json'))['features']:
    segs, vx = [], [0, 0, 0]
    for s in c['geometry']['coordinates']:
        pts = [ecl(p[0] % 360, p[1]) for p in s]; seg = []
        for l, b in pts:
            seg += [round(l * 10), round(b * 10)]
            vx[0] += math.cos(math.radians(b)) * math.cos(math.radians(l)); vx[1] += math.cos(math.radians(b)) * math.sin(math.radians(l)); vx[2] += math.sin(math.radians(b))
        segs.append(seg)
    lines[c['id']] = segs
    n = math.sqrt(sum(v * v for v in vx)) or 1
    names[c['id']] = [info[c['id']]['name'], round(math.degrees(math.atan2(vx[1], vx[0])) % 360, 1), round(math.degrees(math.asin(vx[2] / n)), 1)]
bounds = {}
for c in json.load(open(D / 'constellations.bounds.json'))['features']:
    g = c['geometry']; polys = [g['coordinates']] if g['type'] == 'Polygon' else g['coordinates']
    ring = polys[0][0]
    if min(abs(ecl(p[0] % 360, p[1])[1]) for p in ring) > 20: continue
    out = []
    for poly in polys:
        r = poly[0]; base = r[0][0] % 360; flat = []
        for p in r:   # unwrap the right ascensions so a polygon never jumps by 360°
            a = p[0] % 360; a += 360 * round((base - a) / 360); base = a; flat += [round(a * 100), round(p[1] * 100)]
        out.append(flat)
    bounds[c['id']] = out
named = {'Hamal': 9884, 'Pleiades': 17702, 'Aldebaran': 21421, 'Betelgeuse': 27989, 'Castor': 36850, 'Pollux': 37826, 'Procyon': 37279,
         'Regulus': 49669, 'Spica': 65474, 'Antares': 80763, 'Fomalhaut': 113368}
NAMED = []
for f in json.load(open(D / 'stars.6.json'))['features']:
    for k, v in named.items():
        if f['id'] == v: l, b = ecl(f['geometry']['coordinates'][0] % 360, f['geometry']['coordinates'][1]); NAMED.append([k, round(l, 2), round(b, 2)])
js = ('/* ==SKY START== written by tools/retrograde_sky.py: Hipparcos stars and IAU constellations via d3-celestial (BSD 3 clause, '
      'Olaf Frohn); ecliptic of J2000 in tenths of a degree, magnitudes and B − V in tenths.\n'
      '     Data from d3-celestial: Copyright (c) 2015, Olaf Frohn. All rights reserved. Used under the three clause BSD license, whose\n'
      '     conditions and disclaimer are reproduced in full in THIRD_PARTY_NOTICES.md. */\n'
      f'  const SKY = {{ stars: {json.dumps(stars, separators=(",", ":"))},\n'
      f'    lines: {json.dumps(lines, separators=(",", ":"))},\n'
      f'    names: {json.dumps(names, separators=(",", ":"), ensure_ascii=False)},\n'
      f'    bounds: {json.dumps(bounds, separators=(",", ":"))},\n'
      f'    named: {json.dumps(NAMED, separators=(",", ":"))} }};\n  /* ==SKY END== */')
src = DEMO.read_text()
src2 = re.sub(r'/\* ==SKY START==.*?/\* ==SKY END== \*/', lambda m: js, src, flags=re.S)
if src2 == src and '==SKY START==' not in src: sys.exit('no SKY markers in the demo')
DEMO.write_text(src2)
print(f'{len(stars) // 4} stars, {len(lines)} constellation figures, {len(bounds)} boundaries, {len(js)} bytes')
