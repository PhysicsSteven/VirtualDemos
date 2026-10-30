"""Build demos/star-slice.html: embed every tools/star-slice/data/*.json.gz into the template.

Each dataset goes in its own script, demos/star-slice-data/<file>.js, as base64 of its gzipped bytes; the page
loads only the run it shows (efficiency pass 2026-10-30: the page was 6 MB to download with every run inside) and
unpacks it with DecompressionStream. A script, not a fetch, so the page still works opened from a file.
Embedded in the page go a few small fields the page needs before unpacking: the initial mass (for the mass
slider), the HR track (log Teff, log L per moment, for the faint tracks of the other masses) and the
index of the first main sequence moment (where the track is labeled).

    python3 build.py                                  # data/ -> ../../demos/star-slice.html
    python3 build.py --data /tmp/test --out /tmp/test/star-slice.html
"""
import argparse, base64, glob, gzip, json, math, os, re

HERE = os.path.dirname(os.path.abspath(__file__))
ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
ap.add_argument('--data', default=os.path.join(HERE, 'data'), help='folder of *.json.gz datasets (default: data/ here)')
ap.add_argument('--out', default=os.path.normpath(os.path.join(HERE, '..', '..', 'demos', 'star-slice.html')),
                help='output page (default: demos/star-slice.html)')
a = ap.parse_args()


def initial_mass(d, label):
    # a run that starts as a white dwarf (no hydrogen at the center) is not a life on the mass slider
    h0 = d['moments'][0].get('h', {}).get('center_h1')
    if h0 is None:
        h0 = (d['moments'][0].get('c', {}).get('h1') or [None])[0]
    if isinstance(h0, (int, float)) and h0 < 0.01:
        return None
    m = d['moments'][0].get('h', {}).get('star_mass')
    if isinstance(m, (int, float)) and m > 0:
        return float(m)
    hit = re.search(r'(\d+(?:\.\d+)?)\s*(?:M\b|Msun|M☉)', label) or re.search(r'(\d+(?:\.\d+)?)', label)
    return float(hit.group(1)) if hit else None


def track(d):
    """[log Teff, log L] per moment (null where missing) and the first main sequence index."""
    pts, ms = [], d['moments']
    for mo in ms:
        h = mo.get('h', {})
        L, T = h.get('photosphere_L'), h.get('Teff')
        pts.append([round(math.log10(T), 4), round(math.log10(L), 4)]
                   if isinstance(L, (int, float)) and isinstance(T, (int, float)) and L > 0 and T > 0 else None)
    def ch(mo):
        v = mo.get('h', {}).get('center_h1')
        if not isinstance(v, (int, float)):
            c = mo.get('c', {}).get('h1') or [None]
            v = c[0]
        return v if isinstance(v, (int, float)) else None
    h0 = ch(ms[0])
    zams = 0
    if h0 is not None:
        zams = next((i for i, mo in enumerate(ms) if ch(mo) is not None and ch(mo) < h0 - 0.005), 0)
    return pts, zams


datasets = []
data_dir = os.path.join(os.path.dirname(a.out) or '.', 'star-slice-data')
os.makedirs(data_dir, exist_ok=True)
for old in glob.glob(os.path.join(data_dir, '*.js')):
    os.remove(old)
for path in sorted(glob.glob(os.path.join(a.data, '*.json.gz'))):
    raw = open(path, 'rb').read()
    d = json.loads(gzip.decompress(raw))
    n = len(d.get('moments', []))
    if not n:
        print(f'skip {os.path.basename(path)}: no moments')
        continue
    label = d.get('label') or os.path.basename(path)
    pts, zams = track(d)
    datasets.append({'file': os.path.basename(path), 'label': label, 'mass': initial_mass(d, label),
                     'source': d.get('source') or [], 'track': pts, 'zams': zams})
    b64 = base64.b64encode(raw).decode('ascii')
    with open(os.path.join(data_dir, os.path.basename(path) + '.js'), 'w', encoding='ascii') as f:
        f.write('/* Star Slice data, made by tools/star-slice/build.py: base64 of %s */\n'
                '(window.STAR_SLICE_DATA = window.STAR_SLICE_DATA || {})[%s] = "%s";\n'
                % (os.path.basename(path), json.dumps(os.path.basename(path)), b64))
    print(f'{os.path.basename(path)}: "{label}", {datasets[-1]["mass"]} Msun, {n} moments, '
          f'{len(raw) / 1024:.0f} KB gz, {len(b64) / 1024:.0f} KB base64')

blob = json.dumps(datasets, separators=(',', ':'), ensure_ascii=False).replace('</', '<\\/')
tpl = open(os.path.join(HERE, 'star-slice.template.html'), encoding='utf-8').read()
assert '__DATASETS__' in tpl
html = tpl.replace('__DATASETS__', blob)
if os.path.dirname(a.out):
    os.makedirs(os.path.dirname(a.out), exist_ok=True)
open(a.out, 'w', encoding='utf-8').write(html)
print(f'{len(datasets)} dataset(s), page {len(html) / 1024:.0f} KB -> {a.out}')
