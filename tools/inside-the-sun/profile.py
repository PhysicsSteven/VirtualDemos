#!/usr/bin/env python3
"""The Sun's inside for Inside the Sun (demos/inside-the-sun.html), 2026-11-17.

Takes the MESA 1 Msun run that Star Slice plays (tools/star-slice/data/life_1M.json.gz, MESA r26.4.1 test suite case
1M_pre_ms_to_wd), the two moments on either side of the Sun's age, 4.57 Gyr (4.01 and 5.19 Gyr), puts both on the same 41
radii from the center to the surface (r/R from 0 to 1) and interpolates between them linearly in age. Prints the JS block the
demo holds between /* SUNPROFILE START */ and /* SUNPROFILE END */: r/R, log10 T (K), log10 rho (g/cm3), hydrogen mass
fraction X, and the share of the fusion power made inside r (from eps_nuc); and SUNCZ, the radius of the base of the outer convection zone.

    python3 tools/inside-the-sun/profile.py
"""
import gzip, json, math, pathlib, bisect

HERE = pathlib.Path(__file__).resolve().parent
D = json.load(gzip.open(HERE.parent / 'star-slice' / 'data' / 'life_1M.json.gz'))
AGE = 4.57e9
mo = D['moments']
i = max(k for k, m in enumerate(mo) if m['h']['star_age'] <= AGE)
a, b = mo[i], mo[i + 1]
w = (AGE - a['h']['star_age']) / (b['h']['star_age'] - a['h']['star_age'])
MSUN = 1.98841e30


def prof(m):
    c = m['c']
    R = 10 ** c['logR'][-1]
    r = [10 ** x / R for x in c['logR']]
    # cumulative fusion power from the center (eps_nuc erg/g/s times dm)
    L = [0.0]
    for k in range(1, len(r)):
        L.append(L[-1] + 0.5 * (c['eps_nuc'][k] + c['eps_nuc'][k - 1]) * (c['mass'][k] - c['mass'][k - 1]))
    L = [x / L[-1] for x in L]
    return r, c, L, R


def at(p, x, key):
    r, c, L, R = p
    j = min(max(bisect.bisect_left(r, x), 1), len(r) - 1)
    u = (x - r[j - 1]) / (r[j] - r[j - 1]) if r[j] > r[j - 1] else 0
    if key == 'L':
        arr = L
    elif key == 'mix':
        return 1 if c['mixing_type'][j] == 1 else 0
    else:
        arr = c[key]
    return arr[j - 1] + u * (arr[j] - arr[j - 1])


pa, pb = prof(a), prof(b)
rows = []
for k in range(41):
    x = k / 40
    row = [x]
    for key in ('logT', 'logRho', 'h1', 'L'):
        row.append((1 - w) * at(pa, x, key) + w * at(pb, x, key))
    rows.append(row)


def czbase(p):
    r, c, L, R = p
    mt = c['mixing_type']
    k = len(r) - 1
    while k > 0 and mt[k] != 1:      # skip the thin radiative skin at the very top
        k -= 1
    while k > 0 and mt[k - 1] == 1:
        k -= 1
    return r[k]


cz = (1 - w) * czbase(pa) + w * czbase(pb)
print('/* SUNPROFILE START */')
print(f"  /* MESA r26.4.1, 1 Msun (tools/star-slice/data/life_1M.json.gz), moments at {a['h']['star_age']/1e9:.2f} and {b['h']['star_age']/1e9:.2f} Gyr")
print(f"     interpolated to 4.57 Gyr (weight {w:.3f}); written by tools/inside-the-sun/profile.py. Columns: r/R, log10 T (K), log10 rho (g/cm3), X, L(r)/L */")
print('  const SUNPROF = [')
for r in rows:
    print(f"    [{r[0]:.3f}, {r[1]:.4f}, {r[2]:.4f}, {r[3]:.4f}, {max(0.0, r[4]):.5f}],")
print('  ];')
print(f'  const SUNCZ = {cz:.4f};   /* r/R of the base of the convection zone in this model (helioseismology: 0.713, Christensen-Dalsgaard, Gough and Thompson 1991) */')
print('/* SUNPROFILE END */')
