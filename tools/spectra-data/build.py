import json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import validate

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, '..', '..', 'demos', 'spectra.html')

data = validate.load()
compact = {}
for el, rows in data.items():
    out = []
    for inten, wl, ion in rows:
        n = validate.num(inten)
        out.append([wl, int(n) if n is not None else 0, {'I': 1, 'II': 2}.get(ion, 0), 1 if re.search(r'\bP\b', inten) else 0])
    compact[el] = out

blob = json.dumps(compact, separators=(',', ':'))
tpl = open(os.path.join(HERE, 'spectra.template.html'), encoding='utf-8').read()
assert '__LINE_DATA__' in tpl
html = tpl.replace('__LINE_DATA__', blob)
open(OUT, 'w', encoding='utf-8').write(html)
print(f'{len(compact)} elements, {sum(len(v) for v in compact.values())} lines, page {len(html)//1024} KB -> {OUT}')
