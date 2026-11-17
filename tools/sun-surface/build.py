#!/usr/bin/env python3
"""Sunspot data for The Sun: Surface and Cycle (demos/sun-surface.html), 2026-11-17.

    python3 tools/sun-surface/build.py <folder with g1874.txt ... g2013.txt> <SN_m_tot_V2.0.csv> <SN_ms_tot_V2.0.csv>

Inputs (not kept in the repo):
  g<year>.txt   the Royal Greenwich Observatory (1874 to 1976) and USAF/NOAA (1977 to 2013) sunspot group records compiled by
                D. Hathaway at NASA Marshall (solarscience.msfc.nasa.gov/greenwch.shtml; US government work, public domain), one line
                per group per day: date, group, observed and corrected umbral and whole spot areas (millionths of a hemisphere),
                distance from disk center, position angle, Carrington longitude, latitude, central meridian distance. Fetched
                2026-11-17 from the copy in github.com/demichieldewilde/CME_distribution (RGO_NOAA1874_2013).
  SN_m_tot_V2.0.csv, SN_ms_tot_V2.0.csv   monthly mean and 13 month smoothed total sunspot number, version 2.0, WDC-SILSO, Royal
                Observatory of Belgium, Brussels (CC BY-NC 4.0), as of the August 2026 release (copy in
                github.com/yjzhu-solar/spear_butterfly_diagram).

Writes demos/sun-surface-data/cycle.js (window.VD_SUNCYCLE):
  sn:    monthly mean sunspot number × 10 from January 1749, one per month (−1 where none)
  sm:    the 13 month smoothed number × 10, the same months (−1 where none)
  bfly:  the butterfly diagram: one string per 27.2753 days (one Carrington rotation), counted from 1 January 1874; each
         character is one 2° latitude band from 50° S to 50° N (50 bands): '0' no spots, otherwise '1' to '9' for the band's mean
         corrected spot area per observed day, A in millionths of a hemisphere, level = 1 + floor(2 log10 A) kept to 1..9
         (so '1' is under 3, '9' is 10,000 or more). A space marks a rotation with no observed day.
"""
import csv, glob, json, math, os, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
gdir, snm, sns = sys.argv[1], sys.argv[2], sys.argv[3]
ROT = 27.2753
NB, LAT0 = 50, -50.0


def jd(y, m, d):  # days from 1874-01-01, proleptic Gregorian, fractional
    import datetime
    return (datetime.date(y, m, 1) - datetime.date(1874, 1, 1)).days + d - 1


rows = {}
days = {}
for f in sorted(glob.glob(os.path.join(gdir, 'g*.txt'))):
    for line in open(f):
        if len(line) < 20:
            continue
        y, mo, d = int(line[0:4]), int(line[4:6]), float(line[6:12])
        t = jd(y, mo, d)
        r = int(t // ROT)
        days.setdefault(r, set()).add(int(t))
        tok = line[12:].split()
        if len(tok) < 9:
            continue
        area, lat = float(tok[-6]), float(tok[-2])
        if area <= 0 or abs(lat) >= 50:
            continue
        b = int((lat - LAT0) // 2)
        rows.setdefault(r, [0.0] * NB)[b] += area
r0, r1 = min(days), max(days)
out = []
for r in range(r0, r1 + 1):
    n = len(days.get(r, ()))
    if not n:
        out.append(' ' * NB)
        continue
    a = rows.get(r, [0.0] * NB)
    s = ''
    for v in a:
        A = v / n
        s += '0' if A <= 0 else str(max(1, min(9, 1 + int(math.floor(2 * math.log10(max(A, 1e-9)))))))
    out.append(s)


def sn(path):
    v = []
    for row in csv.reader(open(path), delimiter=';'):
        x = float(row[3])
        v.append(-1 if x < 0 else round(x * 10))
    return v, float(open(path).readline().split(';')[2])


a, t0 = sn(snm)
b, _ = sn(sns)
data = {'about': 'Monthly and 13 month smoothed total sunspot number v2.0, WDC-SILSO, Royal Observatory of Belgium (CC BY-NC 4.0); sunspot group areas and latitudes, Royal Greenwich Observatory and USAF/NOAA, compiled by D. Hathaway, NASA MSFC (public domain). Built by tools/sun-surface/build.py.',
        'snStart': t0, 'sn': a, 'sm': b, 'rot': ROT, 'rotStart': 1874 + r0 * ROT / 365.2425, 'latStep': 2, 'lat0': LAT0, 'bfly': out}
dest = ROOT / 'demos' / 'sun-surface-data' / 'cycle.js'
dest.write_text('/* Sunspot numbers and the butterfly diagram for The Sun: Surface and Cycle, written by tools/sun-surface/build.py: do not edit by hand.\n'
                '   Sunspot number: WDC-SILSO, Royal Observatory of Belgium, Brussels, version 2.0 (CC BY-NC 4.0). Spot areas and latitudes:\n'
                '   Royal Greenwich Observatory (1874 to 1976) and USAF/NOAA (1977 to 2013), compiled by D. Hathaway, NASA MSFC. */\n'
                '(typeof window !== "undefined" ? window : globalThis).VD_SUNCYCLE = ' + json.dumps(data, separators=(',', ':')) + ';\n')
print(dest, dest.stat().st_size, 'bytes,', len(out), 'rotations,', len(a), 'months from', t0)
