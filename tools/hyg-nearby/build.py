#!/usr/bin/env python3
"""Nearby star data for the Cosmic Distance Ladder's main sequence fitting and spectroscopic parallax rungs, from HYG v3.8.

    python3 tools/hyg-nearby/build.py [hyg_v38.csv.gz]

Without an argument it downloads https://raw.githubusercontent.com/astronexus/HYG-Database/main/hyg/v3/hyg_v38.csv.gz.
HYG (David Nash, astronexus) is CC BY-SA 4.0; these subsets are shared under the same license (THIRD_PARTY_NOTICES.md).
Distances of Hipparcos stars in HYG are 1/parallax from the new reduction (van Leeuwen 2007, A&A 474, 653); mag is V and
ci is B − V.

Writes, in this folder:
    near25.csv    every Hipparcos star of HYG within 25 pc with a V magnitude and a B − V color (the calibration stars)
    targets.csv   the spectroscopic parallax targets
and the data block between /* HYG25 START */ and /* HYG25 END */ in demos/distance-ladder.html.

Rules (fixed here, so nothing is picked by hand):
  calibrators  luminosity class written as exactly V after the spectral type (types like G2V, K1.5V; not V:, IV-V or Ve),
               in bins of half a spectral class (F5 to F9, G0 to G4, ...)
  targets      Hipparcos stars 40 to 100 pc away with a class V type in the bins F5 to K9, not marked variable in HYG,
               two drawn per bin with Python's random.Random(2026) from the stars sorted by HIP number
"""
import csv
import gzip
import io
import json
import random
import re
import sys
import urllib.request
from pathlib import Path

HERE = Path(__file__).resolve().parent
DEMO = HERE.parent.parent / 'demos' / 'distance-ladder.html'
URL = 'https://raw.githubusercontent.com/astronexus/HYG-Database/main/hyg/v3/hyg_v38.csv.gz'
TYPE = re.compile(r'^([OBAFGKM])(\d)(\.\d+)?\s*V$')
GREEK = {'Alp': 'α', 'Bet': 'β', 'Gam': 'γ', 'Del': 'δ', 'Eps': 'ε', 'Zet': 'ζ', 'Eta': 'η', 'The': 'θ', 'Iot': 'ι', 'Kap': 'κ',
         'Lam': 'λ', 'Mu': 'μ', 'Nu': 'ν', 'Xi': 'ξ', 'Omi': 'ο', 'Pi': 'π', 'Rho': 'ρ', 'Sig': 'σ', 'Tau': 'τ', 'Ups': 'υ',
         'Phi': 'φ', 'Chi': 'χ', 'Psi': 'ψ', 'Ome': 'ω'}
BINS = ['F5', 'G0', 'G5', 'K0', 'K5']


def spbin(spect):
    m = TYPE.match(spect)
    if not m:
        return None
    return m.group(1) + ('0' if int(m.group(2)) < 5 else '5')


def name(r):
    if r['proper']:
        return r['proper']
    b = r['bayer']
    if b:
        g, _, k = b.partition('-')
        return f"{GREEK.get(g, g)}{''.join('⁰¹²³⁴⁵⁶⁷⁸⁹'[int(c)] for c in k)} {r['con']}"
    if r['flam']:
        return f"{r['flam']} {r['con']}"
    return f"HIP {r['hip']}"


def main():
    src = sys.argv[1] if len(sys.argv) > 1 else None
    raw = open(src, 'rb').read() if src else urllib.request.urlopen(URL).read()
    rows = list(csv.DictReader(io.TextIOWrapper(gzip.GzipFile(fileobj=io.BytesIO(raw)), encoding='utf-8')))
    near = [r for r in rows if r['hip'] and r['dist'] and 0 < float(r['dist']) <= 25 and r['ci'] and r['mag']]
    near.sort(key=lambda r: int(r['hip']))
    with open(HERE / 'near25.csv', 'w', newline='') as f:
        w = csv.writer(f)
        w.writerow(['hip', 'name', 'dist_pc', 'V', 'M_V', 'B_V', 'spect', 'class_V_bin'])
        for r in near:
            w.writerow([r['hip'], name(r), r['dist'], r['mag'], round(float(r['absmag']), 3), r['ci'], r['spect'], spbin(r['spect']) or ''])
    pool = {b: [] for b in BINS}
    for r in sorted(rows, key=lambda r: int(r['hip']) if r['hip'] else 0):
        if not (r['hip'] and r['dist'] and r['ci'] and r['mag']) or r['var']:
            continue
        b = spbin(r['spect'])
        if b in pool and 40 <= float(r['dist']) <= 100:
            pool[b].append(r)
    rng = random.Random(2026)
    targets = []
    for b in BINS:
        targets += rng.sample(pool[b], 2)
    with open(HERE / 'targets.csv', 'w', newline='') as f:
        w = csv.writer(f)
        w.writerow(['hip', 'name', 'dist_pc', 'V', 'B_V', 'spect', 'bin', 'pool_size'])
        for r in targets:
            b = spbin(r['spect'])
            w.writerow([r['hip'], name(r), r['dist'], r['mag'], r['ci'], r['spect'], b, len(pool[b])])
    # compact data for the demo: nearby stars as [B−V × 1000, M_V × 100, bin index or −1]; targets in full
    bi = {b: i for i, b in enumerate(['A0', 'A5', 'F0', 'F5', 'G0', 'G5', 'K0', 'K5', 'M0', 'M5'])}
    pts = [[round(float(r['ci']) * 1000), round(float(r['absmag']) * 100), bi.get(spbin(r['spect']), -1)] for r in near]
    tg = [{'hip': int(r['hip']), 'name': name(r), 'spect': r['spect'].replace('V', ' V'), 'bin': spbin(r['spect']),
           'V': float(r['mag']), 'bv': float(r['ci']), 'd': round(float(r['dist']), 2)} for r in targets]
    block = ('/* HYG25 START */ /* written by tools/hyg-nearby/build.py from HYG v3.8 (CC BY-SA 4.0): Hipparcos stars within 25 pc as\n'
             '     [B − V × 1000, M_V × 100, half class bin of a class V star (A0, A5, F0 ... M5) or −1], and the spectroscopic parallax targets */\n'
             f"  const HYG_BINS = {json.dumps(list(bi))};\n"
             f"  const HYG25 = {json.dumps(pts, separators=(',', ':'))};\n"
             f"  const SP_TARGETS = {json.dumps(tg, ensure_ascii=False, separators=(',', ':'))};\n"
             '  /* HYG25 END */')
    html = DEMO.read_text()
    new, n = re.subn(r'/\* HYG25 START \*/.*?/\* HYG25 END \*/', lambda m: block, html, flags=re.S)
    if n != 1:
        sys.exit('no HYG25 block in the demo')
    DEMO.write_text(new)
    print(f'{len(near)} stars within 25 pc, {sum(1 for p in pts if p[2] >= 0)} class V calibrators; targets:')
    for t in tg:
        print(' ', t)


if __name__ == '__main__':
    main()
