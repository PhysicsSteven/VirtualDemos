#!/usr/bin/env python3
"""make_slice_runs.py -- set up copies of MESA runs that save enough profiles for the Star Slice demo.

The original run folders are never modified. Each copy gets:
  * every stage writing its logs to its own folder (LOGS_<stage>), so later stages no longer overwrite
    the profiles of earlier ones (a multi-stage run that shares one LOGS/ keeps only its last stage);
  * profile_interval and max_num_profile_models set so the whole run is sampled;
  * the profile columns the demo needs, checked against $MESA_DIR/star/defaults/profile_columns.list.

Usage:
    python3 make_slice_runs.py --progenitor ~/runs/mkwd_3.7 --wd ~/runs/wd_M0.669_B [--dry-run]

Then run each copy the way you run the originals (./mk once, then ./rn), and afterwards:
    python3 extract_profiles.py --report ~/runs/slice_mkwd_3.7/LOGS_zams ~/runs/slice_mkwd_3.7/LOGS_to_end_he_core_burn ...
"""
import argparse, os, re, shutil, sys

STAGES = ['zams', 'to_end_he_core_burn', 'co_core', 'remove_env', 'settle']   # time order
PROG_INTERVAL, WD_INTERVAL, MAX_PROFILES = 10, 10, 5000
WANT_COLS = ['mass', 'logR', 'logT', 'logRho', 'h1', 'he4', 'c12', 'o16', 'ne20', 'ne22',
             'mixing_type', 'log_conv_vel', 'eps_nuc', 'pp', 'cno', 'tri_alpha', 'eta', 'phase', 'gam', 'gamma']
SKIP = {'LOGS', 'photos', 'png', 'run.log', 'mk.log'}

def copy_run(src, dst, dry):
    if os.path.exists(dst):
        sys.exit('%s already exists; remove it or pick another name' % dst)
    print('copy %s -> %s' % (src, dst))
    if not dry:
        shutil.copytree(src, dst, symlinks=True,
                        ignore=lambda d, names: [n for n in names if n in SKIP or n.startswith('LOGS')])

def set_controls(text, settings):
    """Inside the &controls namelist: comment out existing assignments of these keys, then add ours."""
    m = re.search(r'&controls\b.*?\n\s*/', text, flags=re.S | re.I)
    if not m:
        raise ValueError('no &controls block')
    block = m.group(0)
    for k in settings:
        block = re.sub(r'(?im)^(\s*)(%s\s*=)' % re.escape(k), r'\1! (star slice) \2', block)
    add = ''.join('\n      %s = %s   ! added by make_slice_runs.py' % (k, v) for k, v in settings.items())
    block = re.sub(r'(&controls\b[^\n]*)', lambda mm: mm.group(1) + add, block, count=1, flags=re.I)
    return text[:m.start()] + block + text[m.end():]

def edit(path, settings, dry):
    t = open(path).read()
    new = set_controls(t, settings)
    print('  %-34s %s' % (os.path.basename(path), ', '.join('%s=%s' % kv for kv in settings.items())))
    if not dry:
        open(path, 'w').write(new)

def valid_profile_columns():
    md = os.environ.get('MESA_DIR')
    p = os.path.join(md, 'star', 'defaults', 'profile_columns.list') if md else None
    if not p or not os.path.exists(p):
        return None
    names = set()
    for l in open(p, errors='replace'):
        s = l.strip().lstrip('!').strip()
        tok = s.split()[0] if s.split() else ''
        if re.fullmatch(r'[A-Za-z_][A-Za-z0-9_]*', tok):
            names.add(tok)
    return names

def ensure_columns(run, dry):
    p = os.path.join(run, 'profile_columns.list')
    md = os.environ.get('MESA_DIR')
    if not os.path.exists(p):
        src = os.path.join(md, 'star', 'defaults', 'profile_columns.list') if md else None
        if src and os.path.exists(src):
            print('  no profile_columns.list in the run: starting from MESA defaults')
            if not dry: shutil.copy(src, p)
            text = open(src).read() if dry else open(p).read()
        else:
            print('  no profile_columns.list and $MESA_DIR not set: creating a minimal one')
            text = ''
    else:
        text = open(p).read()
    active = {l.split('!')[0].split()[0] for l in text.splitlines() if l.split('!')[0].split()}
    valid = valid_profile_columns()
    add, bad = [], []
    for c in WANT_COLS:
        if c in active: continue
        if valid is not None and c not in valid:
            bad.append(c); continue
        add.append(c)
    if valid is None:
        print('  $MESA_DIR not set, so column names are not checked against MESA (unknown names stop MESA at startup)')
    if bad:
        print('  not in this MESA install\'s profile column list, skipped: %s' % ' '.join(bad))
    if add:
        print('  adding columns: %s' % ' '.join(add))
        if not dry:
            with open(p, 'a') as f:
                f.write('\n! added by make_slice_runs.py for the Star Slice demo\n' + ''.join('   %s\n' % c for c in add))
    else:
        print('  all wanted columns already listed')

def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('--progenitor')
    ap.add_argument('--wd')
    ap.add_argument('--dry-run', action='store_true')
    a = ap.parse_args()
    if not (a.progenitor or a.wd):
        ap.error('give --progenitor and/or --wd')
    if a.progenitor:
        src = os.path.expanduser(a.progenitor).rstrip('/')
        dst = os.path.join(os.path.dirname(src), 'slice_' + os.path.basename(src))
        copy_run(src, dst, a.dry_run)
        base = src if a.dry_run else dst
        for st in STAGES:
            f = os.path.join(base, 'inlist_' + st)
            if not os.path.exists(f):
                print('  (no inlist_%s, skipped)' % st); continue
            if a.dry_run:
                set_controls(open(f).read(), {})          # just check it parses
                print('  %-34s log_directory=LOGS_%s, profile_interval=%d' % ('inlist_' + st, st, PROG_INTERVAL))
            else:
                edit(f, {'log_directory': "'LOGS_%s'" % st, 'profile_interval': PROG_INTERVAL,
                         'max_num_profile_models': MAX_PROFILES}, False)
        ensure_columns(base if not a.dry_run else src, a.dry_run)
        print('  logs will be in: ' + ' '.join('%s/LOGS_%s' % (dst, st) for st in STAGES))
    if a.wd:
        src = os.path.expanduser(a.wd).rstrip('/')
        dst = os.path.join(os.path.dirname(src), 'slice_' + os.path.basename(src))
        copy_run(src, dst, a.dry_run)
        base = src if a.dry_run else dst
        cool = [f for f in os.listdir(base) if f.startswith('inlist_wd_cool') and not f.endswith('_header')]
        for f in cool:
            path = os.path.join(base, f)
            if a.dry_run:
                set_controls(open(path).read(), {})
                print('  %-34s profile_interval=%d, max_num_profile_models=%d' % (f, WD_INTERVAL, MAX_PROFILES))
            else:
                edit(path, {'profile_interval': WD_INTERVAL, 'max_num_profile_models': MAX_PROFILES}, False)
        ensure_columns(base, a.dry_run)
        print('  logs will be in: %s/LOGS' % dst)
    if a.dry_run:
        print('\ndry run: nothing was copied or changed')

if __name__ == '__main__':
    main()
