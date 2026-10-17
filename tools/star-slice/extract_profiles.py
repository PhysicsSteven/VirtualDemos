#!/usr/bin/env python3
"""extract_profiles.py -- pack MESA profiles into one small file for the Star Slice demo.

Run this on the machine that holds the MESA run folders. It reads each run's LOGS/profiles.index and
LOGS/profile<N>.data(.gz), picks a thinned set of moments spread through the run, keeps about 200 real
zones per moment (no interpolation), and writes one gzipped JSON file plus a report.

Usage:
    python3 extract_profiles.py --report RUN_DIR [RUN_DIR ...]          # look only, write nothing
    python3 extract_profiles.py -o life.json.gz  STAGE_DIR [STAGE_DIR ...]
    python3 extract_profiles.py -o wd_B.json.gz  ~/runs/wd_M0.669_B

A RUN_DIR is a folder with a LOGS/ subfolder. Give the stages of one star in time order
(for a progenitor whose stages share one folder, one RUN_DIR is enough).

Options:
    --moments N    moments to keep (default 150)
    --zones N      zones per moment, at most (default 200)
    --label TEXT   name shown in the demo (default: the run folder names)
"""
import argparse, gzip, json, math, os, re, sys

# column name -> list of MESA spellings to look for, first match wins
WANT = {
    'mass':        ['mass'],                       # Msun, enclosed
    'logR':        ['logR', 'log_R'],              # log10(r / Rsun)
    'radius':      ['radius'],                     # r / Rsun (used if logR is absent)
    'logT':        ['logT'],
    'logRho':      ['logRho'],
    'h1':          ['h1', 'x_mass_fraction_H'],
    'he4':         ['he4', 'y_mass_fraction_He'],
    'c12':         ['c12'],
    'o16':         ['o16'],
    'ne20':        ['ne20'],
    'ne22':        ['ne22'],
    'mixing_type': ['mixing_type'],
    'conv_vel':    ['conv_vel', 'log_conv_vel'],
    'eps_nuc':     ['eps_nuc', 'log_eps_nuc'],
    'pp':          ['pp'],
    'cno':         ['cno'],
    'tri_alpha':   ['tri_alpha', 'tri_alfa'],
    'phase':       ['phase'],
    'gamma':       ['gamma', 'gam', 'log_gamma'],
    'eta':         ['eta'],
    'zbar_div_abar': ['zbar_div_abar'],
}
NEEDED = ['mass', 'logT', 'logRho', 'h1', 'he4', 'c12', 'o16']        # demo cannot run without these
GOOD = ['mixing_type', 'eps_nuc', 'conv_vel', 'ne22', 'phase', 'gamma']  # demo is much better with these
HEADER_WANT = ['model_number', 'star_age', 'star_mass', 'photosphere_L', 'Teff', 'photosphere_r',
               'log_center_T', 'log_center_Rho', 'center_h1', 'center_he4', 'center_c12', 'center_o16',
               'version_number', 'num_zones']
CATEGORICAL = {'mixing_type'}

def opener(path):
    return gzip.open(path, 'rt', errors='replace') if path.endswith('.gz') else open(path, errors='replace')

def num(s):
    s = s.strip().strip('"').replace('D', 'E').replace('d', 'e')
    try:
        return float(s)
    except ValueError:
        return s

def read_profile(path):
    with opener(path) as f:
        lines = f.read().replace('\0', '').splitlines()
    hnames, hvals = lines[1].split(), lines[2].split()
    header = {k: num(v) for k, v in zip(hnames, hvals)}
    names = lines[5].split()
    rows = []
    for l in lines[6:]:
        p = l.split()
        if len(p) == len(names):
            rows.append([num(x) for x in p])
    return header, names, rows

def find_profiles(run_dir):
    # accept a run folder (with LOGS/ inside) or a log folder itself (e.g. LOGS_zams from make_slice_runs.py)
    logs = run_dir if os.path.exists(os.path.join(run_dir, 'profiles.index')) else os.path.join(run_dir, 'LOGS')
    idx = os.path.join(logs, 'profiles.index')
    out = []
    if os.path.exists(idx):
        for l in open(idx).read().splitlines()[1:]:
            p = l.split()
            if len(p) >= 3:
                model, n = int(p[0]), int(p[2])
                for cand in ('profile%d.data' % n, 'profile%d.data.gz' % n):
                    fp = os.path.join(logs, cand)
                    if os.path.exists(fp):
                        out.append((model, fp)); break
    else:   # no index: take whatever profile files exist
        for fn in os.listdir(logs) if os.path.isdir(logs) else []:
            m = re.match(r'profile(\d+)\.data(\.gz)?$', fn)
            if m:
                out.append((None, os.path.join(logs, fn)))
    return out

def pick_evenly(items, n):
    if len(items) <= n:
        return items
    step = (len(items) - 1) / (n - 1)
    return [items[round(i * step)] for i in range(n)]

def choose_zones(mass, logr, n):
    """Indices of real zones spread evenly in enclosed mass AND in log radius, so both the core and the
    envelope keep detail. Returns sorted unique indices, always including the center and the surface."""
    nz = len(mass)
    if nz <= n:
        return list(range(nz))
    half = n // 2
    M, r0, r1 = max(mass), min(logr), max(logr)
    targets_m = [M * i / (half - 1) for i in range(half)]
    targets_r = [r0 + (r1 - r0) * i / (n - half - 1) for i in range(n - half)]
    keep = {0, nz - 1}
    order_m = sorted(range(nz), key=lambda k: mass[k])
    order_r = sorted(range(nz), key=lambda k: logr[k])
    def nearest(order, vals, t):
        lo, hi = 0, len(order) - 1
        while lo < hi:
            mid = (lo + hi) // 2
            if vals[order[mid]] < t: lo = mid + 1
            else: hi = mid
        best = order[lo]
        if lo > 0 and abs(vals[order[lo - 1]] - t) < abs(vals[best] - t):
            best = order[lo - 1]
        return best
    for t in targets_m: keep.add(nearest(order_m, mass, t))
    for t in targets_r: keep.add(nearest(order_r, logr, t))
    return sorted(keep)

def sig(x, digits=4):
    if not isinstance(x, float) or x == 0 or math.isnan(x) or math.isinf(x):
        return x if not (isinstance(x, float) and (math.isnan(x) or math.isinf(x))) else None
    return float('%.*g' % (digits, x))

def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('runs', nargs='+')
    ap.add_argument('-o', '--out')
    ap.add_argument('--report', action='store_true')
    ap.add_argument('--moments', type=int, default=150)
    ap.add_argument('--zones', type=int, default=200)
    ap.add_argument('--label')
    a = ap.parse_args()
    if not a.report and not a.out:
        ap.error('give -o OUTPUT.json.gz, or --report to only look')

    all_profiles = []
    for d in a.runs:
        found = find_profiles(os.path.expanduser(d))
        print('%s: %d profiles' % (d, len(found)))
        all_profiles += [(d, m, fp) for m, fp in found]
    if not all_profiles:
        sys.exit('no profiles found (looked for LOGS/profiles.index and LOGS/profile*.data)')

    # read every header once for ages, so the report can show coverage and the pick can be made
    heads = []
    for d, m, fp in all_profiles:
        with opener(fp) as f:
            f.readline(); hn = f.readline().split(); hv = f.readline().split(); f.readline(); f.readline()
            cn = f.readline().split()
        h = {k: num(v) for k, v in zip(hn, hv)}
        heads.append((d, fp, h, cn))
    heads.sort(key=lambda t: (a.runs.index(t[0]), t[2].get('model_number', 0)))

    cols0 = heads[0][3]
    have = {k: next((s for s in spell if s in cols0), None) for k, spell in WANT.items()}
    ages = [h.get('star_age') for _, _, h, _ in heads if isinstance(h.get('star_age'), float)]
    print('\nmoments available: %d   age %.3g to %.3g yr' % (len(heads), min(ages), max(ages)) if ages else '')
    for k in WANT:
        mark = 'ok ' if have[k] else ('MISSING (needed)' if k in NEEDED else 'missing (recommended)' if k in GOOD else 'missing')
        print('  %-14s %-18s %s' % (k, have[k] or '', mark))
    if not have['logR'] and not have['radius']:
        print('  logR / radius   MISSING (needed)')
    missing_needed = [k for k in NEEDED if not have[k]] + ([] if (have['logR'] or have['radius']) else ['logR'])
    missing_good = [k for k in GOOD if not have[k]]
    if missing_needed or missing_good:
        print('\nTo record these in a rerun, add to the run\'s profile_columns.list:')
        add = {'logR': 'logR', 'mixing_type': 'mixing_type', 'conv_vel': 'conv_vel', 'eps_nuc': 'eps_nuc',
               'phase': 'phase', 'gamma': 'gamma', 'ne22': 'ne22', 'h1': 'h1', 'he4': 'he4', 'c12': 'c12', 'o16': 'o16',
               'mass': 'mass', 'logT': 'logT', 'logRho': 'logRho'}
        for k in missing_needed + missing_good:
            print('    ' + add.get(k, k))
    if len(heads) < 60:
        print('\nOnly %d moments: for a smooth life story set profile_interval smaller and max_num_profile_models'
              ' larger in the controls, e.g.  profile_interval = 10   max_num_profile_models = 2000' % len(heads))
    if a.report:
        return
    if missing_needed:
        sys.exit('\nstopping: columns the demo needs are missing (see above)')

    chosen = pick_evenly(heads, a.moments)
    keep_cols = [k for k in WANT if have[k]]
    moments = []
    for d, fp, h, _ in chosen:
        header, names, rows = read_profile(fp)
        ci = {k: names.index(have[k]) for k in keep_cols if have[k] in names}
        rows.sort(key=lambda r: r[ci['mass']])                       # center first
        mass = [r[ci['mass']] for r in rows]
        if 'logR' in ci:
            logr = [r[ci['logR']] for r in rows]
        else:
            logr = [math.log10(max(r[ci['radius']], 1e-30)) for r in rows]
        idx = choose_zones(mass, logr, a.zones)
        col = {}
        for k, j in ci.items():
            if k == 'radius':
                continue
            v = [rows[i][j] for i in idx]
            col[k] = [int(x) if k in CATEGORICAL and isinstance(x, float) else sig(x) for x in v]
        if 'logR' not in col:
            col['logR'] = [sig(logr[i]) for i in idx]
        moments.append({'run': os.path.basename(os.path.normpath(d)),
                        'h': {k: sig(header[k]) if isinstance(header.get(k), float) else header.get(k)
                              for k in HEADER_WANT if k in header},
                        'c': col})
        print('  model %-7s age %-10.4g zones %d -> %d' % (header.get('model_number'), header.get('star_age', float('nan')),
                                                       len(rows), len(idx)))
    out = {'label': a.label or ' + '.join(os.path.basename(os.path.normpath(d)) for d in a.runs),
           'source': [os.path.basename(os.path.normpath(d)) for d in a.runs],
           'mesa_columns': {k: have[k] for k in keep_cols},
           'moments': moments}
    if os.path.dirname(a.out):
        os.makedirs(os.path.dirname(a.out), exist_ok=True)
    with gzip.open(a.out, 'wt') as f:
        json.dump(out, f, separators=(',', ':'))
    print('\nwrote %s  (%d moments, %.1f MB)' % (a.out, len(moments), os.path.getsize(a.out) / 1e6))

if __name__ == '__main__':
    main()
