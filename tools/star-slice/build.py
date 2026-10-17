"""Build demos/star-slice.html: embed every tools/star-slice/data/*.json.gz into the template.

Each dataset is embedded as base64 of its gzipped bytes; the page unpacks it with DecompressionStream.
"""
import base64, glob, gzip, json, os

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.normpath(os.path.join(HERE, '..', '..', 'demos', 'star-slice.html'))

datasets = []
for path in sorted(glob.glob(os.path.join(HERE, 'data', '*.json.gz'))):
    raw = open(path, 'rb').read()
    d = json.loads(gzip.decompress(raw))
    n = len(d.get('moments', []))
    if not n:
        print(f'skip {os.path.basename(path)}: no moments')
        continue
    label = d.get('label') or os.path.basename(path)
    datasets.append({'file': os.path.basename(path), 'label': label, 'b64': base64.b64encode(raw).decode('ascii')})
    print(f'{os.path.basename(path)}: "{label}", {n} moments, {len(raw) / 1024:.0f} KB gz, {len(datasets[-1]["b64"]) / 1024:.0f} KB base64')

blob = json.dumps(datasets, separators=(',', ':')).replace('</', '<\\/')
tpl = open(os.path.join(HERE, 'star-slice.template.html'), encoding='utf-8').read()
assert '__DATASETS__' in tpl
html = tpl.replace('__DATASETS__', blob)
open(OUT, 'w', encoding='utf-8').write(html)
print(f'{len(datasets)} dataset(s), page {len(html) / 1024:.0f} KB -> {OUT}')
