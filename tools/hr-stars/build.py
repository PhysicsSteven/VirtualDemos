"""Nearest and brightest stars for the Stellar Evolution demo's "Nearest and brightest" view, 2026-10-31.

From the HYG database v3.8 (astronexus, CC BY-SA 4.0; distances from Hipparcos, van Leeuwen 2007, and the Gliese catalog), take
  nearest:   every star HYG puts within 10 pc of the Sun (the Sun left out),
  brightest: the 100 stars with the smallest apparent V magnitude (the Sun left out),
with M_V = V − 5 log10(d / 10 pc) from HYG's V and distance (HYG's own absmag column disagrees by 0.3 for one star,
GJ 3192), and write hr-stars.csv (the subset, kept here) and print the JS array the demo holds. Stars with no B − V in HYG are kept in the
CSV and counted by the demo, but cannot be plotted.

    curl -sSLO https://raw.githubusercontent.com/astronexus/HYG-Database/main/hyg/v3/hyg_v38.csv.gz
    python3 tools/hr-stars/build.py hyg_v38.csv.gz
"""
import csv, gzip, json, math, pathlib, sys

HERE = pathlib.Path(__file__).parent
GREEK = {'Alp': 'α', 'Bet': 'β', 'Gam': 'γ', 'Del': 'δ', 'Eps': 'ε', 'Zet': 'ζ', 'Eta': 'η', 'The': 'θ', 'Iot': 'ι', 'Kap': 'κ', 'Lam': 'λ',
         'Mu': 'μ', 'Nu': 'ν', 'Xi': 'ξ', 'Omi': 'ο', 'Pi': 'π', 'Rho': 'ρ', 'Sig': 'σ', 'Tau': 'τ', 'Ups': 'υ', 'Phi': 'φ', 'Chi': 'χ', 'Psi': 'ψ', 'Ome': 'ω'}


def name(r):
    if r['proper']:
        return r['proper']
    if r['bayer']:
        b = r['bayer'].split('-')
        return GREEK.get(b[0], b[0]) + (b[1] if len(b) > 1 else '') + ' ' + r['con']
    if r['flam']:
        return f"{r['flam']} {r['con']}"
    if r['gl']:
        return r['gl'].replace('Gl ', 'Gliese ').replace('GJ ', 'GJ ')
    if r['hip']:
        return 'HIP ' + r['hip']
    return 'HYG ' + r['id']


def main(src):
    rows = [r for r in csv.DictReader(gzip.open(src, 'rt')) if r['id'] != '0']
    near = {r['id'] for r in rows if float(r['dist']) < 10}
    bright = {r['id'] for r in sorted(rows, key=lambda r: float(r['mag']))[:100]}
    keep = [r for r in rows if r['id'] in near or r['id'] in bright]
    keep.sort(key=lambda r: float(r['dist']))
    names = {r['id']: name(r) for r in keep}
    seen = {}
    for v in names.values():
        seen[v] = seen.get(v, 0) + 1
    for r in keep:   # two stars with one name (the components of 61 Cyg, ...): add the Gliese component letter, or the HIP number
        if seen[names[r['id']]] > 1:
            g = r['gl'].strip()
            names[r['id']] += ' ' + (g[-1] if g and g[-1] in 'ABCD' else f"(HIP {r['hip']})" if r['hip'] else f"(HYG {r['id']})")
    out = []
    with open(HERE / 'hr-stars.csv', 'w', newline='') as f:
        w = csv.writer(f)
        f.write('# Subset of HYG v3.8 (astronexus/HYG-Database, CC BY-SA 4.0): stars within 10 pc and the 100 brightest, built by tools/hr-stars/build.py\n')
        w.writerow(['hyg_id', 'name', 'spect', 'V', 'M_V', 'B_V', 'dist_pc', 'nearest', 'brightest'])
        for r in keep:
            row = [int(r['id']), names[r['id']], r['spect'], float(r['mag']), round(float(r['mag']) - 5 * math.log10(float(r['dist']) / 10), 2), float(r['ci']) if r['ci'] else None,
                   round(float(r['dist']), 3), int(r['id'] in near), int(r['id'] in bright)]
            w.writerow(['' if v is None else v for v in row])
            out.append(row[1:])
    print(f'nearest {len(near)}, brightest {len(bright)}, both {len(near & bright)}, rows {len(out)}', file=sys.stderr)
    print('  const REAL_STARS = ' + json.dumps(out, ensure_ascii=False, separators=(',', ':')) + ';')


if __name__ == '__main__':
    main(sys.argv[1])
