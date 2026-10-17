#!/usr/bin/env python3
"""make_mass_grid.py -- set up MESA runs at several masses for the Star Slice mass slider.

Each run is a copy of a MESA test suite case that already goes from the pre main sequence to the end
of the star's life:

    1M_pre_ms_to_wd               1 Msun to a cooling white dwarf (helium flash, AGB, white dwarf)
    12M_pre_ms_to_core_collapse   12 and 15 Msun to iron core collapse
    20M_pre_ms_to_core_collapse   20 and 25 Msun to iron core collapse (its optional envelope
                                  removal stage is skipped, so the star keeps its hydrogen envelope)
    wd_cool_0.6M                  a 0.6 Msun C/O white dwarf cooling until its core freezes
                                  (Skye equation of state, phase separation on); --no-wd skips it

The 3.7 Msun life already in the demo came from your own mkwd_3.7 run and is not redone here.

Each copy gets:
  * every stage writing to its own log folder (LOGS_<stage>), so later stages do not overwrite
    the profiles of earlier ones;
  * a short profile_columns.list with only what the demo uses (keeps disk use down);
  * profile_interval and max_num_profile_models set so the whole life is sampled;
  * initial_mass changed where the run is not the suite's own mass;
  * a script rn_slice that runs every stage in order (./mk first).

Usage:
    python3 make_mass_grid.py [--masses 1 12 15 20 25] [--dest ~/runs] [--dry-run]

Then, for each run folder printed:
    cd ~/runs/slice_grid_12M && ./mk && ./rn_slice > run.log 2>&1
"""
import argparse, os, re, shutil, stat, sys

SUITES = {
    '1M_pre_ms_to_wd': {
        'stages': ['start', 'to_end_core_h_burn', 'to_start_he_core_flash', 'to_end_core_he_burn',
                   'to_end_agb', 'to_wd'],
        'models': ['start.mod', 'end_core_h_burn.mod', 'start_he_core_flash.mod', 'end_core_he_burn.mod',
                   'end_agb.mod', 'final.mod'],
        'mass_files': ['inlist_start', 'inlist_to_end_core_h_burn', 'inlist_to_start_he_core_flash',
                       'inlist_to_end_core_he_burn', 'inlist_to_end_agb', 'inlist_to_wd'],
        'isotopes': ['h1', 'he3', 'he4', 'c12', 'n14', 'o16', 'ne20', 'mg24'],   # basic.net
        'interval': 10,
    },
    '12M_pre_ms_to_core_collapse': {
        'stages': ['make_late_pre_zams', 'to_zams', 'to_end_core_he_burn', 'to_end_core_c_burn',
                   'to_lgTmax', 'to_cc'],
        'models': ['late_pre_zams.mod', 'zams.mod', 'after_core_he_burn.mod', 'after_core_c_burn.mod',
                   'lgTmax.mod', 'final.mod'],
        'mass_files': ['inlist_mass_Z_wind_rotation'],
        'isotopes': ['h1', 'he3', 'he4', 'c12', 'n14', 'o16', 'ne20', 'mg24', 'si28', 's32', 'ar36', 'ca40',
                     'ti44', 'cr48', 'cr60', 'fe52', 'fe54', 'fe56', 'co56', 'ni56', 'prot', 'neut'],
        'interval': 20,
    },
}
SUITES['20M_pre_ms_to_core_collapse'] = dict(SUITES['12M_pre_ms_to_core_collapse'])
# a 0.6 Msun C/O white dwarf cooling until it freezes (Skye EOS, phase separation on); it already lists
# every isotope (add_abundances), so its own column list is kept and the demo's columns are appended
SUITES['wd_cool_0.6M'] = {'stages': ['wd_cool_0.6M'], 'models': ['final.mod'], 'mass_files': [],
                          'isotopes': None, 'interval': 1}
WD_EXTRA = ['mass', 'logR', 'logT', 'logRho', 'mixing_type', 'log_conv_vel', 'eps_nuc', 'gam', 'eos_phase',
            'eps_phase_separation']

GRID = {1: ('1M_pre_ms_to_wd', 1.0), 12: ('12M_pre_ms_to_core_collapse', 12),
        15: ('12M_pre_ms_to_core_collapse', 12), 20: ('20M_pre_ms_to_core_collapse', 20),
        25: ('20M_pre_ms_to_core_collapse', 20)}

BASE_COLS = ['zone', 'mass', 'logR', 'radius', 'logT', 'logRho', 'logP', 'mixing_type', 'log_conv_vel',
             'eps_nuc', 'pp', 'cno', 'tri_alpha', 'c_alpha', 'o_alpha', 'ne_alpha', 'na_alpha', 'mg_alpha',
             'c12_c12', 'c12_o16', 'o16_o16', 'eta', 'gam', 'velocity']
MAX_PROFILES = 5000

def set_namelist(text, name, settings, tag='make_mass_grid.py'):
    """Inside &name: comment out existing assignments of these keys, then add ours at the top."""
    m = re.search(r'&%s\b.*?\n\s*/' % name, text, flags=re.S | re.I)
    if not m:
        raise ValueError('no &%s block' % name)
    block = m.group(0)
    for k in settings:
        block = re.sub(r'(?im)^(\s*)(%s\s*=)' % re.escape(k), r'\1! (star slice) \2', block)
    add = ''.join('\n      %s = %s   ! added by %s' % (k, v, tag) for k, v in settings.items())
    block = re.sub(r'(&%s\b[^\n]*)' % name, lambda mm: mm.group(1) + add, block, count=1, flags=re.I)
    return text[:m.start()] + block + text[m.end():]

def valid_profile_columns(mesa_dir):
    p = os.path.join(mesa_dir, 'star', 'defaults', 'profile_columns.list')
    names = set()
    for l in open(p, errors='replace'):
        s = l.strip().lstrip('!').strip()
        tok = s.split()[0] if s.split() else ''
        if re.fullmatch(r'[A-Za-z_][A-Za-z0-9_]*', tok):
            names.add(tok)
    return names

def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('--masses', nargs='+', type=float, default=[1, 12, 15, 20, 25])
    ap.add_argument('--no-wd', action='store_true', help='skip the cooling white dwarf run (wd_cool_0.6M)')
    ap.add_argument('--dest', default='~/runs')
    ap.add_argument('--dry-run', action='store_true')
    a = ap.parse_args()
    mesa_dir = os.environ.get('MESA_DIR')
    if not mesa_dir or not os.path.isdir(os.path.join(mesa_dir, 'star', 'test_suite')):
        sys.exit('set MESA_DIR to your MESA install first (e.g. export MESA_DIR=~/mesa-26.04.1)')
    valid = valid_profile_columns(mesa_dir)
    base_cols = [c for c in BASE_COLS if c in valid]
    dropped = [c for c in BASE_COLS if c not in valid]
    if dropped:
        print('not in this MESA install\'s profile column list, left out: ' + ' '.join(dropped))
    dest = os.path.expanduser(a.dest)
    made = []
    for M in list(a.masses) + ([] if a.no_wd else ['wd']):
        if M == 'wd':
            suite, suite_mass, cfg = 'wd_cool_0.6M', 'wd', SUITES['wd_cool_0.6M']
            src = os.path.join(mesa_dir, 'star', 'test_suite', suite)
            dst = os.path.join(dest, 'slice_grid_wd_0.6M')
            print('\ncooling white dwarf: %s -> %s' % (suite, dst))
            if not os.path.isdir(src):
                print('  no %s in this MESA install, skipped' % suite); continue
            if os.path.exists(dst):
                print('  %s already exists, skipped (remove it to start over)' % dst); continue
            if not a.dry_run:
                shutil.copytree(src, dst, symlinks=True,
                                ignore=lambda d, names: [n for n in names if n.startswith('LOGS') or n in ('photos', 'png')])
            work = src if a.dry_run else dst
            f = os.path.join(work, 'inlist_wd_cool_0.6M')
            new = set_namelist(open(f).read(), 'controls', {'log_directory': "'LOGS_wd_cool'", 'profile_interval': 1, 'history_interval': 1,
                                                              'max_num_profile_models': MAX_PROFILES})
            new = set_namelist(new, 'star_job', {'pgstar_flag': '.false.'})
            print('  inlist_wd_cool_0.6M                 log_directory=LOGS_wd_cool, profile_interval=1, history_interval=1')
            pc = open(os.path.join(work, 'profile_columns.list')).read()
            active = {l.split('!')[0].split()[0] for l in pc.splitlines() if l.split('!')[0].split()}
            add = [c for c in WD_EXTRA if c in valid and c not in active]
            print('  profile_columns.list: suite list kept, adding %s' % ' '.join(add))
            if not a.dry_run:
                open(f, 'w').write(new)
                with open(os.path.join(dst, 'profile_columns.list'), 'a') as fh:
                    fh.write('\n! added by make_mass_grid.py for the Star Slice demo\n' + ''.join('   %s\n' % c for c in add))
                p = os.path.join(dst, 'rn_slice')
                open(p, 'w').write('#!/usr/bin/env bash\nsource "${MESA_DIR}/star/test_suite/test_suite_helpers"\n'
                                   'date\ndo_one inlist_wd_cool_0.6M_header final.mod\ndate\necho finished\n')
                os.chmod(p, os.stat(p).st_mode | stat.S_IXUSR | stat.S_IXGRP | stat.S_IXOTH)
            made.append(('wd_0.6', dst, ['wd_cool']))
            continue
        key = int(M) if M == int(M) else M
        if key not in GRID:
            print('no suite set up for %g Msun (choose from %s), skipped' % (M, ' '.join(map(str, GRID)))); continue
        suite, suite_mass = GRID[key]
        cfg = SUITES[suite]
        src = os.path.join(mesa_dir, 'star', 'test_suite', suite)
        dst = os.path.join(dest, 'slice_grid_%gM' % M)
        print('\n%g Msun: %s -> %s' % (M, suite, dst))
        if os.path.exists(dst):
            print('  %s already exists, skipped (remove it to start over)' % dst); continue
        if not a.dry_run:
            shutil.copytree(src, dst, symlinks=True,
                            ignore=lambda d, names: [n for n in names if n.startswith('LOGS') or n in ('photos', 'png')])
        work = src if a.dry_run else dst
        for st in cfg['stages']:
            f = os.path.join(work, 'inlist_' + st)
            new = set_namelist(open(f).read(), 'controls',
                               {'log_directory': "'LOGS_%s'" % st, 'profile_interval': cfg['interval'],
                                'history_interval': 1,   # MESA only writes a profile on a step that also logs history
                                'max_num_profile_models': MAX_PROFILES})
            new = set_namelist(new, 'star_job', {'pgstar_flag': '.false.'})
            print('  inlist_%-28s log_directory=LOGS_%s, profile_interval=%d' % (st, st, cfg['interval']))
            if not a.dry_run:
                open(f, 'w').write(new)
        if M != suite_mass:
            for fn in cfg['mass_files']:
                f = os.path.join(work, fn)
                t = open(f).read()
                if not re.search(r'(?im)^\s*initial_mass\s*=', t):
                    continue
                new = set_namelist(t, 'controls', {'initial_mass': '%g' % M})
                print('  %-35s initial_mass=%g (suite default %g)' % (fn, M, suite_mass))
                if not a.dry_run:
                    open(f, 'w').write(new)
        cols = base_cols + cfg['isotopes']
        print('  profile_columns.list: %d columns (%s ...)' % (len(cols), ' '.join(cols[:6])))
        lines = ['! written by make_mass_grid.py for the Star Slice demo: only the columns the demo reads', '']
        lines += ['   %s' % c for c in cols]
        rn = ['#!/usr/bin/env bash', '# written by make_mass_grid.py: every stage in order, each with its own LOGS_<stage>',
              'source "${MESA_DIR}/star/test_suite/test_suite_helpers"', 'date "+DATE: %Y-%m-%d%nTIME: %H:%M:%S"']
        rn += ['do_one inlist_%s_header %s' % (st, mod) for st, mod in zip(cfg['stages'], cfg['models'])]
        rn += ['date "+DATE: %Y-%m-%d%nTIME: %H:%M:%S"', "echo 'finished'"]
        if not a.dry_run:
            open(os.path.join(dst, 'profile_columns.list'), 'w').write('\n'.join(lines) + '\n')
            p = os.path.join(dst, 'rn_slice')
            open(p, 'w').write('\n'.join(rn) + '\n')
            os.chmod(p, os.stat(p).st_mode | stat.S_IXUSR | stat.S_IXGRP | stat.S_IXOTH)
        made.append((M, dst, cfg['stages']))
    if not made:
        return
    print('\nNext, one run per terminal (each takes hours; the massive ones the longest):')
    for M, dst, _ in made:
        print('  cd %s && ./mk && ./rn_slice > run.log 2>&1' % dst)
    print('\nWhen a run prints "finished" at the end of run.log, pack it for the demo:')
    for M, dst, stages in made:
        if M == 'wd_0.6':
            print('  python3 extract_profiles.py -o data/wd_cool_0.6M.json.gz --label "0.6 Msun white dwarf cooling" %s/LOGS_wd_cool' % dst)
            continue
        print('  python3 extract_profiles.py -o data/life_%gM.json.gz --label "%g Msun" %s' %
              (M, M, ' '.join('%s/LOGS_%s' % (dst, s) for s in stages)))
    if a.dry_run:
        print('\ndry run: nothing was copied or changed')

if __name__ == '__main__':
    main()
