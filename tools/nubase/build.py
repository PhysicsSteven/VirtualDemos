#!/usr/bin/env python3
"""Build demos/lib/nubase.js (window.VDNUBASE; globalThis.VDNUBASE in Node) from the NUBASE2020 table.

Source: F. G. Kondev, M. Wang, W. J. Huang, S. Naimi and G. Audi, Chinese Physics C 45, 030001 (2021), file nubase_4.mas20.txt
(the copy shipped in the pynucastro 3.2.0 wheel, pynucastro/nucdata/AtomicMassEvaluation/, is byte for byte the AMDC file).
Ground states only (i = 0). Usage: python3 tools/nubase/build.py <path to nubase_4.mas20.txt>

Each row: [Z, A, mass excess in keV, 1 if the mass is from systematics (#) else 0, half life, modes, abundance]
  half life: log10 of T1/2 in seconds; "s" stable; "u" particle unstable (p-unst); null not known; a leading ">" or "<"
             in NUBASE (a limit) is kept as the string ">x" or "<x" with x the log10 value.
  modes: [[code, percent or null, qualifier], ...] in NUBASE order; qualifier "" (=), "~", "<", ">", "?".
  abundance: natural isotopic abundance in percent (IS=), or null.
Units: NUBASE2020 takes 1 y = 365.2422 d (its section 2.5); the same is used here.
"""
import json, math, re, sys

UNIT = {'ys': 1e-24, 'zs': 1e-21, 'as': 1e-18, 'fs': 1e-15, 'ps': 1e-12, 'ns': 1e-9, 'us': 1e-6, 'ms': 1e-3, 's': 1.0,
        'm': 60.0, 'h': 3600.0, 'd': 86400.0}
Y = 365.2422 * 86400.0
for k, f in {'y': 1, 'ky': 1e3, 'My': 1e6, 'Gy': 1e9, 'Ty': 1e12, 'Py': 1e15, 'Ey': 1e18, 'Zy': 1e21, 'Yy': 1e24}.items():
    UNIT[k] = f * Y
HBAR_LN2 = 6.582119569e-16 * math.log(2)   # eV s, for half lives given as a level width


def half_life(field, unit):
    f = field.strip().replace('#', '')
    if f.startswith('stbl'):
        return 's'
    if f.startswith('p-unst'):
        return 'u'
    if not f:
        return None
    lim = ''
    if f[0] in '<>~':
        lim, f = (f[0] if f[0] != '~' else ''), f[1:].strip()
    try:
        v = float(f)
    except ValueError:
        return None
    unit = unit.strip()
    if unit in UNIT:
        sec = v * UNIT[unit]
    elif unit in ('eV', 'keV', 'MeV'):
        sec = HBAR_LN2 / (v * {'eV': 1, 'keV': 1e3, 'MeV': 1e6}[unit])
    else:
        return None
    lg = round(math.log10(sec), 4)
    return lim + str(lg) if lim else lg


def modes(br):
    out, ab = [], None
    for tok in [t.strip() for t in br.split(';') if t.strip()]:
        m = re.match(r'^([A-Za-z0-9+\-]+)\s*([=~<>?]*)\s*([0-9.eE+\-]*)', tok)
        if not m:
            continue
        code, q, val = m.group(1), m.group(2), m.group(3)
        q = q.replace('=', '')[:1]
        try:
            v = float(val) if val else None
        except ValueError:
            v = None
        if code == 'IS':
            ab = v
            continue
        out.append([code, v, q])
    return out, ab


def main(path):
    rows = []
    for line in open(path, encoding='latin-1'):
        if line.startswith('#') or len(line) < 20 or line[7] != '0':
            continue
        A, Z = int(line[0:3]), int(line[4:7])
        ms = line[18:31]
        est = 1 if '#' in ms else 0
        dm = float(ms.replace('#', ''))
        T = half_life(line[69:78], line[78:80])
        md, ab = modes(line[119:209] if len(line) > 119 else '')
        rows.append([Z, A, round(dm, 4), est, T, md, ab])
    rows.sort(key=lambda r: (r[0], r[1]))
    head = ('/* © 2026 Steven Anderson. All rights reserved. Not licensed for copying or reuse; terms at '
            'https://physicssteven.github.io/VirtualDemos/LICENSE.html\n'
            '   NUBASE2020 ground states (F. G. Kondev et al., Chinese Physics C 45, 030001 (2021)), shared by the nuclear demos\n'
            '   (window.VDNUBASE; in Node, globalThis.VDNUBASE). Built by tools/nubase/build.py; see the notes there.\n'
            '   gs rows: [Z, A, mass excess keV, 1 if from systematics, log10 T½ in s | "s" stable | "u" particle unstable | null | ">x" "<x",\n'
            '             decay modes [[code, %, qualifier]], natural abundance %] */\n')
    body = json.dumps({'src': 'NUBASE2020', 'year_d': 365.2422, 'gs': rows}, separators=(',', ':'))
    body = body.replace('],[', '],\n[') if False else body
    js = head + '(function (g) { g.VDNUBASE = ' + body + '; })(typeof window !== "undefined" ? window : globalThis);\n'
    open(sys.argv[2] if len(sys.argv) > 2 else 'demos/lib/nubase.js', 'w').write(js)
    print(len(rows), 'ground states;', len(js), 'bytes')


if __name__ == '__main__':
    main(sys.argv[1])
