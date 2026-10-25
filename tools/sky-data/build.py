#!/usr/bin/env python3
"""Build demos/lib/sky-bsc.js (window.VD_SKY) for the sky demos, from the files in this folder:

    bsc5-v55.csv   the Yale Bright Star Catalogue, 5th revised ed. (Hoffleit and Warren 1991, CDS V/50), stars to V = 5.5:
                   J2000 positions, V, B-V and the J2000 proper motions, unchanged from the catalog.
    roman87.dat    Roman (1987, PASP 99, 695; CDS VI/42): the IAU constellation boundaries (Delporte 1930) as boxes in B1875
                   coordinates, the table used to name the constellation that holds any point.
    names88.dat    the 88 IAU constellation abbreviations and names.

    python3 tools/sky-data/build.py      (needs pyerfa, only for the B1875 to J2000 precession of the boundary lines)

Star names are the IAU Working Group on Star Names list (IAU Catalog of Star Names) for the stars named on the demo. The
constellation figures are drawn here, star to star, as the traditional simple outlines; they are pictures, not IAU data.
The boundary lines are worked out exactly from Roman's boxes: every edge between two boxes that belong to different
constellations, densified every 2 degrees and precessed from B1875 to J2000 with the Vondrak et al. (2011) long term
precession (erfa.ltp), the same model the demo uses. B1875 is taken as the Julian epoch of Besselian 1875.0.
"""
import csv
import json
import math
import re
from pathlib import Path

import erfa
import numpy as np

HERE = Path(__file__).resolve().parent
OUT = HERE.parent.parent / 'demos' / 'lib' / 'sky-bsc.js'

GREEK = {'Alp': 'α', 'Bet': 'β', 'Gam': 'γ', 'Del': 'δ', 'Eps': 'ε', 'Zet': 'ζ', 'Eta': 'η', 'The': 'θ', 'Iot': 'ι', 'Kap': 'κ',
         'Lam': 'λ', 'Mu': 'μ', 'Nu': 'ν', 'Xi': 'ξ', 'Omi': 'ο', 'Pi': 'π', 'Rho': 'ρ', 'Sig': 'σ', 'Tau': 'τ', 'Ups': 'υ',
         'Phi': 'φ', 'Chi': 'χ', 'Psi': 'ψ', 'Ome': 'ω'}

# IAU WGSN names for the stars the demo labels (Bayer designation, constellation)
NAMES = {
    'Alp CMa': 'Sirius', 'Alp Car': 'Canopus', 'Alp Boo': 'Arcturus', 'Alp1Cen': 'Rigil Kentaurus', 'Alp Lyr': 'Vega',
    'Alp Aur': 'Capella', 'Bet Ori': 'Rigel', 'Alp CMi': 'Procyon', 'Alp Eri': 'Achernar', 'Alp Ori': 'Betelgeuse',
    'Bet Cen': 'Hadar', 'Alp Aql': 'Altair', 'Alp1Cru': 'Acrux', 'Alp Tau': 'Aldebaran', 'Alp Sco': 'Antares',
    'Alp Vir': 'Spica', 'Bet Gem': 'Pollux', 'Alp PsA': 'Fomalhaut', 'Alp Cyg': 'Deneb', 'Bet Cru': 'Mimosa',
    'Alp Leo': 'Regulus', 'Eps CMa': 'Adhara', 'Alp Gem': 'Castor', 'Lam Sco': 'Shaula', 'Gam Cru': 'Gacrux',
    'Gam Ori': 'Bellatrix', 'Bet Tau': 'Elnath', 'Eps Ori': 'Alnilam', 'Zet Ori': 'Alnitak', 'Del Ori': 'Mintaka',
    'Kap Ori': 'Saiph', 'Eps UMa': 'Alioth', 'Alp UMa': 'Dubhe', 'Bet UMa': 'Merak', 'Gam UMa': 'Phecda',
    'Del UMa': 'Megrez', 'Zet UMa': 'Mizar', 'Eta UMa': 'Alkaid', 'Alp UMi': 'Polaris', 'Bet UMi': 'Kochab',
    'Alp Dra': 'Thuban', 'Gam Dra': 'Eltanin', 'Alp Cas': 'Schedar', 'Bet Cas': 'Caph', 'Alp Per': 'Mirfak',
    'Bet Per': 'Algol', 'Alp And': 'Alpheratz', 'Alp Peg': 'Markab', 'Bet Peg': 'Scheat', 'Gam Peg': 'Algenib',
    'Alp Ari': 'Hamal', 'Bet Leo': 'Denebola', 'Alp Oph': 'Rasalhague', 'Sig Sgr': 'Nunki', 'Eps Sgr': 'Kaus Australis',
    'Eta Tau': 'Alcyone', 'Gam Cep': 'Errai', 'Alp Cep': 'Alderamin', 'Gam Cyg': 'Sadr', 'Bet1Cyg': 'Albireo',
    'Alp2Lib': 'Zubenelgenubi', 'Bet Lib': 'Zubeneschamali', 'Gam Leo': 'Algieba', 'Alp Hya': 'Alphard',
    'Alp Cet': 'Menkar', 'Bet Cet': 'Diphda', 'Alp Gru': 'Alnair', 'Del Sco': 'Dschubba', 'Bet And': 'Mirach',
    'Gam1And': 'Almach', 'Alp CrB': 'Alphecca', 'Bet Aur': 'Menkalinan', 'Alp Col': 'Phact', 'Alp Pav': 'Peacock',
    'Bet Car': 'Miaplacidus', 'Eps Car': 'Avior', 'Gam Vel': 'Regor', 'Alp TrA': 'Atria', 'Eps Peg': 'Enif',
    'Del Leo': 'Zosma', 'Eps Boo': 'Izar', 'Bet Dra': 'Rastaban', 'Bet Lyr': 'Sheliak', 'Gam Lyr': 'Sulafat',
    'Alp Cap': 'Algedi', 'Bet Aqr': 'Sadalsuud', 'Alp Aqr': 'Sadalmelik', 'Bet Ari': 'Sheratan', 'Del Cap': 'Deneb Algedi',
}

# simple stick figures, star to star (each list is one path)
FIGURES = {
    'UMa': [['Alp', 'Bet', 'Gam', 'Del', 'Alp'], ['Del', 'Eps', 'Zet', 'Eta']],
    'UMi': [['Alp', 'Del', 'Eps', 'Zet', 'Bet', 'Gam', 'Eta', 'Zet']],
    'Cas': [['Eps', 'Del', 'Gam', 'Alp', 'Bet']],
    'Cep': [['Alp', 'Bet', 'Gam', 'Iot', 'Zet', 'Alp'], ['Iot', 'Bet']],
    'Dra': [['Lam', 'Kap', 'Alp', 'Iot', 'The', 'Eta', 'Zet', 'Del', 'Xi', 'Gam', 'Bet', 'Nu2', 'Xi']],
    'Lyr': [['Alp', 'Zet1', 'Bet', 'Gam', 'Del2', 'Zet1']],
    'Cyg': [['Alp', 'Gam', 'Eta', 'Bet1'], ['Del', 'Gam', 'Eps']],
    'Aql': [['Gam', 'Alp', 'Bet'], ['Alp', 'Del', 'Lam'], ['Del', 'Zet']],
    'Ori': [['Alp', 'Lam', 'Gam'], ['Alp', 'Zet'], ['Gam', 'Del'], ['Del', 'Eps', 'Zet'], ['Zet', 'Kap'], ['Del', 'Bet']],
    'Tau': [['Bet', 'Eps', 'Del1', 'Gam', 'The2', 'Alp', 'Zet']],
    'Gem': [['Alp', 'Tau', 'Eps', 'Mu', 'Eta'], ['Bet', 'Del', 'Zet', 'Gam'], ['Tau', 'Del']],
    'Leo': [['Eps', 'Mu', 'Zet', 'Gam', 'Eta', 'Alp', 'The', 'Bet', 'Del', 'Gam']],
    'Boo': [['Alp', 'Eps', 'Del', 'Bet', 'Gam', 'Rho', 'Alp', 'Eta']],
    'Vir': [['Alp', 'Gam', 'Eps'], ['Gam', 'Del', 'Eps'], ['Gam', 'Eta', 'Bet']],
    'Sco': [['Bet1', 'Del', 'Pi'], ['Del', 'Sig', 'Alp', 'Tau', 'Eps', 'Mu1', 'Zet2', 'Eta', 'The', 'Iot1', 'Kap', 'Lam']],
    'Sgr': [['Gam2', 'Del', 'Eps', 'Gam2'], ['Del', 'Lam', 'Phi', 'Del'], ['Phi', 'Sig', 'Tau', 'Zet', 'Phi'], ['Zet', 'Eps']],
    'CMa': [['Bet', 'Alp', 'Del', 'Eps'], ['Del', 'Eta']],
    'CMi': [['Alp', 'Bet']],
    'Aur': [['Alp', 'Bet', 'The', 'Bet Tau', 'Iot', 'Alp']],
    'Per': [['Alp', 'Gam'], ['Alp', 'Del', 'Eps', 'Zet'], ['Alp', 'Bet']],
    'Peg': [['Alp', 'Bet', 'Alp And', 'Gam', 'Alp'], ['Alp', 'Zet', 'The', 'Eps']],
    'And': [['Alp', 'Del', 'Bet', 'Gam1']],
    'Cru': [['Alp1', 'Gam'], ['Bet', 'Del']],
    'Cen': [['Alp1', 'Bet']],
    'Ari': [['Alp', 'Bet', 'Gam2']],
    'Crv': [['Gam', 'Del', 'Bet', 'Eps', 'Gam']],
    'Lib': [['Alp2', 'Bet', 'Gam', 'Sig', 'Alp2']],
    'Oph': [['Alp', 'Kap', 'Del', 'Eps', 'Zet', 'Eta', 'Bet', 'Alp']],
    'Cap': [['Alp2', 'Bet', 'Psi', 'Ome', 'Zet', 'Del', 'Gam', 'The', 'Alp2']],
    'Aqr': [['Eps', 'Bet', 'Alp', 'Gam', 'Zet', 'Eta'], ['Alp', 'The', 'Lam', 'Del']],
    'Psc': [['Eta', 'Omi', 'Alp', 'Nu', 'Eps', 'Del', 'Ome', 'Iot', 'The', 'Gam', 'Kap', 'Lam', 'Iot']],
    'Cnc': [['Iot', 'Gam', 'Del', 'Bet'], ['Del', 'Alp']],
}


def bayer(name):
    """'21Alp And' -> ('Alp', 'And', 'Alp And'); 'Alp1Cen' -> 'Alp1Cen' key and short 'Alp1'."""
    m = re.match(r'^\s*\d*\s*([A-Z][a-z]{1,2}) ?(\d?)\s*([A-Z][A-Za-z]{2})$', name or '')
    if not m:
        return None
    g, n, c = m.groups()
    if g not in GREEK:
        return None
    return g, n, c


def main():
    stars = []
    with open(HERE / 'bsc5-v55.csv') as f:
        for r in csv.DictReader(f):
            stars.append(r)
    stars.sort(key=lambda r: float(r['V']))
    idx = {}            # 'Alp And', 'Alp1Cen' and 'Alp1 Cen' style keys -> star index (brightest wins)
    hr_of = []
    for i, r in enumerate(stars):
        b = bayer(r['Name'])
        hr_of.append(int(r['HR']))
        if not b:
            continue
        g, n, c = b
        for k in (f'{g}{n}{c}' if n else f'{g} {c}', f'{g}{n} {c}', f'{g} {c}'):
            idx.setdefault(k, i)
    names = {}
    for k, v in NAMES.items():
        if k not in idx:
            raise SystemExit(f'name {v}: {k} not in the catalog cut')
        names[idx[k]] = v
    figs = []
    for con, paths in FIGURES.items():
        for p in paths:
            ii = []
            for s in p:
                k = s if ' ' in s else f'{s} {con}'
                if k not in idx:
                    raise SystemExit(f'figure {con}: {k} not found')
                ii.append(idx[k])
            figs.append([con] + ii)
    # flat star table: ra, dec (1e-5 deg), V (0.01), B-V (0.01, 99 for none), pm (mas/yr)
    flat = []
    for r in stars:
        bv = r['B_V'].strip()
        flat += [round(float(r['RA_J2000_deg']) * 1e5), round(float(r['Dec_J2000_deg']) * 1e5), round(float(r['V']) * 100),
                 round(float(bv) * 100) if bv else 99, round(float(r['pmRA_arcsec_yr'] or 0) * 1000), round(float(r['pmDE_arcsec_yr'] or 0) * 1000)]
    bayer_lbl = []
    for i, r in enumerate(stars):
        b = bayer(r['Name'])
        if b:
            bayer_lbl.append(GREEK[b[0]] + (b[1] and '¹²³⁴⁵⁶⁷⁸⁹'[int(b[1]) - 1] or '') + ' ' + b[2])
        else:   # no Bayer letter: the Flamsteed number ('32 Cyg'), else nothing (the demo shows the HR number)
            f = re.match(r'^\s*(\d+)\s*([A-Z][A-Za-z]{2})$', r['Name'] or '')
            bayer_lbl.append(f'{int(f.group(1))} {f.group(2)}' if f else '')

    # Roman (1987) table and the 88 names
    rows = []
    for line in open(HERE / 'roman87.dat'):
        if line.startswith('#') or not line.strip():
            continue
        a, b2, d, c = line.split()
        rows.append((float(a), float(b2), float(d), c))
    con = {}
    for line in open(HERE / 'names88.dat'):
        if line.startswith('#') or not line.strip():
            continue
        a, rest = line.strip().split(' ', 1)
        con[a] = rest
    abbr = sorted(con)

    def which(ra_h, dec):
        for a, b2, d, c in rows:
            if dec >= d and a <= ra_h < b2:
                return c
        return None

    # exact boundary edges between Roman's boxes, in B1875
    ras = sorted({0.0, 24.0} | {r[0] for r in rows} | {r[1] for r in rows})
    decs = sorted({-90.0, 90.0} | {r[2] for r in rows if r[2] > -90})
    grid = [[which((ras[i] + ras[i + 1]) / 2, (decs[j] + decs[j + 1]) / 2) for j in range(len(decs) - 1)] for i in range(len(ras) - 1)]
    segs = []   # ((ra, dec), (ra, dec)) in B1875, ra in hours
    ni, nj = len(ras) - 1, len(decs) - 1
    for i in range(ni):
        for j in range(nj):
            here = grid[i][j]
            nxt = grid[(i + 1) % ni][j]
            if here != nxt:        # an edge at constant RA ras[i + 1]
                segs.append(((ras[i + 1] % 24, decs[j]), (ras[i + 1] % 24, decs[j + 1])))
            if j + 1 < nj and here != grid[i][j + 1]:   # an edge at constant Dec decs[j + 1]
                segs.append(((ras[i], decs[j + 1]), (ras[i + 1], decs[j + 1])))
    # chain collinear neighbours into longer lines
    def chain(segs, key, along):
        out = []
        groups = {}
        for s in segs:
            groups.setdefault(key(s), []).append(s)
        for k, g in groups.items():
            g.sort(key=lambda s: along(s[0]))
            cur = list(g[0])
            for s in g[1:]:
                if abs(along(s[0]) - along(cur[1])) < 1e-9:
                    cur[1] = s[1]
                else:
                    out.append(tuple(cur)); cur = list(s)
            out.append(tuple(cur))
        return out
    vert = [s for s in segs if s[0][0] == s[1][0]]
    hor = [s for s in segs if s[0][1] == s[1][1]]
    vert = chain(vert, lambda s: round(s[0][0], 6), lambda p: p[1])
    hor = chain(hor, lambda s: round(s[0][1], 6), lambda p: p[0])
    jd1, jd2 = erfa.epb2jd(1875.0)
    ep = erfa.epj(jd1, jd2)
    P = erfa.ltp(ep)              # J2000 -> mean of B1875
    lines = []
    for (a, b2) in vert + hor:
        n = max(1, math.ceil(max(abs(b2[0] - a[0]) * 15, abs(b2[1] - a[1])) / 2))
        pts = []
        for k in range(n + 1):
            t = k / n
            ra = math.radians((a[0] + (b2[0] - a[0]) * t) * 15)
            de = math.radians(a[1] + (b2[1] - a[1]) * t)
            v = np.array([math.cos(de) * math.cos(ra), math.cos(de) * math.sin(ra), math.sin(de)])
            w = P.T @ v
            pts += [round(math.degrees(math.atan2(w[1], w[0])) % 360 * 100), round(math.degrees(math.asin(max(-1, min(1, w[2])))) * 100)]
        lines.append(pts)
    roman = []
    for a, b2, d, c in rows:
        roman += [round(a * 1e4), round(b2 * 1e4), round(d * 1e4), abbr.index(c)]
    data = {
        'about': 'Yale Bright Star Catalogue 5th rev. ed. (Hoffleit and Warren 1991, CDS V/50), stars to V 5.5, J2000; '
                 'IAU constellation boundaries from Roman (1987, CDS VI/42); star names from the IAU WGSN list. Built by tools/sky-data/build.py.',
        'n': len(stars), 'stars': flat, 'hr': hr_of, 'bayer': bayer_lbl,
        'names': {str(k): v for k, v in sorted(names.items())},
        'figures': figs, 'abbr': abbr, 'conName': [con[a] for a in abbr], 'roman': roman, 'b1875': ep, 'bounds': lines,
    }
    js = ('/* VirtualDemos sky data (window.VD_SKY), written by tools/sky-data/build.py: do not edit by hand.\n   '
          + data['about'] + '\n   stars: per star ra, dec (1e-5 deg, J2000), V (0.01 mag), B-V (0.01 mag, 99 when none), proper motion in RA (times cos dec)'
          ' and in dec (mas/yr), sorted brightest first. roman: per row RA from and to (1e-4 h), dec low edge (1e-4 deg), index in abbr; B1875 coordinates.\n'
          '   bounds: boundary lines as ra, dec pairs (0.01 deg, J2000). figures: constellation, then star indexes along one path. */\n'
          '(typeof window !== "undefined" ? window : globalThis).VD_SKY = ' + json.dumps(data, ensure_ascii=False, separators=(',', ':')) + ';\n')
    OUT.write_text(js)
    print(OUT, len(js) // 1024, 'KB;', len(stars), 'stars,', len(names), 'names,', len(figs), 'figure paths,', len(lines), 'boundary lines')


if __name__ == '__main__':
    main()
