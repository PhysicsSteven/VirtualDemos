"""Star colors for the Blackbody Radiation demo (U, B, V view), 2026-10-31.

Reads the Bessell (1990, PASP 102, 1181) U, B and V passbands (as shipped in the speclite 1.0.0 package, normalized to a peak of 1)
and the CALSPEC spectrum of Vega (alpha_lyr_stis_011, Bohlin, HST STIS; from the pyphot 2.1.1 package), and prints the lines the
demo's CORE holds: the three passbands and Vega's instrumental colors.

Integrals are energy integrals, I = ∫ f_λ S(λ) dλ: Bessell and Murphy (2012, PASP 124, 140) describe the 1990 passbands as energy
response curves and convert them to photon counting for their own use. Colors are Vega based (VEGAMAG): Vega's U − B and B − V are
zero by definition, so a star's color is −2.5 log10(I_B/I_V) minus the same for Vega.

    python3 tools/star-colors/build.py
"""
import json, math, pathlib
import numpy as np

HERE = pathlib.Path(__file__).parent


def band(b):
    rows = [l.split() for l in (HERE / f'bessell-{b}.ecsv').read_text().splitlines() if l and l[0].isdigit()]
    return np.array([[float(w) / 10, float(r)] for w, r in rows])   # nm, response


BANDS = {b: band(b) for b in 'UBV'}
vega = np.loadtxt(HERE / 'vega-calspec-stis011-290-1000nm.csv', delimiter=',')


def integral(lam, flux, b):
    t = BANDS[b]
    s = np.interp(lam, t[:, 0], t[:, 1], left=0, right=0)
    return np.trapezoid(flux * s, lam)


I = {b: integral(vega[:, 0], vega[:, 1], b) for b in 'UBV'}
vub = -2.5 * math.log10(I['U'] / I['B'])
vbv = -2.5 * math.log10(I['B'] / I['V'])


def planck(lam_nm, T):
    l = lam_nm * 1e-9
    return 1 / l ** 5 / np.expm1(0.014387768775039337 / (l * T))


def colors(T):
    lam = np.arange(290, 1000.0001, 0.5)
    f = planck(lam, T)
    J = {b: integral(lam, f, b) for b in 'UBV'}
    return -2.5 * math.log10(J['U'] / J['B']) - vub, -2.5 * math.log10(J['B'] / J['V']) - vbv


if __name__ == '__main__':
    tab = {b: [[round(w, 1), r] for w, r in BANDS[b].tolist()] for b in 'UBV'}
    print('  const UBV_BANDS = ' + json.dumps(tab, separators=(',', ':')) + ';')
    print(f'  const VEGA_UB = {vub:.5f}, VEGA_BV = {vbv:.5f};   /* Vega instrumental colors, from tools/star-colors/build.py */')
    for T in (3000, 3600, 4000, 5000, 5772, 6000, 8000, 9600, 10000, 12100, 20000, 30000, 1e6):
        ub, bv = colors(T)
        print(f'# T {T:>8.0f} K  U-B {ub:+.3f}  B-V {bv:+.3f}')
