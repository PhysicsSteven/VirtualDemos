#!/usr/bin/env python3
"""Move a demo onto the shared library (demos/lib/vd.css and vd.js), phase one: shared styles and the stamped blocks.

    python3 tools/vdlib.py pendulum string-density     move these demos
    python3 tools/vdlib.py --report pendulum           list what would be removed, change nothing

What it does to demos/<demo>.html:
  - lists, in <html data-vd-off="...">, every named rule in vd.css that the demo never had, so it stays off there;
  - links lib/vd.css and lib/vd.js just before the first <style> (relative links, so file:// and thumbs.py still work);
  - removes from the demo's own <style> blocks every rule that is word for word in vd.css, unless an earlier rule the
    demo keeps can match the same elements (same selectors once states and attributes are set aside, in any @media), or when vd.css has two such
    rules in the other order (moving the rule ahead of it could change which one wins);
    an @media block left empty goes too;
  - removes the inline scripts of the QR button, Reset all and the plot fold, which vd.js now runs (markup stays);
  - replaces the usual Projector code (the button, setProjector and the saved choice) with VD.projector, when the demo
    has it word for word and uses setProjector nowhere else;
  - removes the marker comments of the CSS blocks that the tools used to stamp (vd-qr, vd-reset, vd-handout, vd-trim).
Physics (CORE), markup, ids and control names are not touched. Then run tools/vdcheck.cjs on the demo: it must pass.
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LINKS = '<link rel="stylesheet" href="lib/vd.css">\n<script src="lib/vd.js"></script>\n'


def norm(s):
    return re.sub(r'\s+', ' ', s).strip()


def rules(css, start=0, end=None, ctx=''):
    """(ctx, selector, declarations, rule_start, rule_end, kind) for each rule; kind is 'rule' or 'media'.
    Positions are in css; comments are skipped when looking for braces."""
    end = len(css) if end is None else end
    out, i, sel_start = [], start, start
    while i < end:
        if css.startswith('/*', i):
            j = css.find('*/', i + 2); i = end if j < 0 else j + 2
            if not norm(re.sub(r'/\*.*?\*/', '', css[sel_start:i], flags=re.S)): sel_start = i
            continue
        c = css[i]
        if c == '{':
            depth, k = 1, i + 1
            while depth and k < end:
                if css.startswith('/*', k): k = css.find('*/', k + 2) + 2; continue
                depth += {'{': 1, '}': -1}.get(css[k], 0); k += 1
            sel = norm(re.sub(r'/\*.*?\*/', '', css[sel_start:i], flags=re.S))
            if sel.startswith('@media') or sel.startswith('@supports'):
                inner = rules(css, i + 1, k - 1, norm(ctx + ' ' + sel))
                out.append((ctx, sel, None, sel_start, k, 'media', inner))
            else:
                body = norm(re.sub(r'/\*.*?\*/', '', css[i + 1:k - 1], flags=re.S)).rstrip(';').strip()
                out.append((ctx, sel, body, sel_start, k, 'rule', None))
            i = sel_start = k
            continue
        if c == '}' or (c == ';' and not norm(css[sel_start:i]).startswith('@')):
            i += 1; continue
        i += 1
    return out


GATE = re.compile(r':where\(:root:not\(\[data-vd-off~="[^"]+"\]\)\) |:where\(:not\(\[data-vd-off~="[^"]+"\]\)\)')


def lib_rules():
    """{(ctx, selector as the demos write it, declarations): name or None} for every rule in vd.css"""
    css = (ROOT / 'demos' / 'lib' / 'vd.css').read_text()
    got = {}
    def walk(rs):
        for r in rs:
            if r[5] == 'media': walk(r[6]); continue
            m = re.search(r'data-vd-off~="([^"]+)"', r[1])
            got[(r[0], GATE.sub('', r[1]), r[2])] = m.group(1) if m else None
    walk(rules(css))
    return got


def demo_rules(s):
    got = set()
    def walk(rs):
        for r in rs:
            if r[5] == 'media': walk(r[6])
            else: got.add((r[0], r[1], r[2]))
    for m in re.finditer(r'<style[^>]*>(.*?)</style>', s, flags=re.S): walk(rules(m.group(1)))
    return got


def base_parts(sel):
    """the selectors of a rule without states and attributes: '.chips button:hover' and '.chips button[aria-pressed="true"]'
    are both '.chips button', since they can match the same element"""
    out = set()
    for p in re.split(r',(?![^(]*\))', sel):
        p = re.sub(r'::?[a-z-]+(\([^)]*\))?|\[[^\]]*\]', '', p)
        out.add(re.sub(r'\s+', ' ', p).strip())
    return out


def strip_css(css, lib, removed, kept_sel, gone):
    """remove lib rules from one style block; returns the new text"""
    cuts = []
    def walk(rs, media_span=None):
        n_kept = 0
        for r in rs:
            ctx, sel, body, a, b, kind, inner = r
            if kind == 'media':
                k = walk(inner, (a, b))
                if k == 0: cuts.append((a, b)); [cuts.remove(c) for c in list(cuts) if a <= c[0] and c[1] <= b and c != (a, b)]
                else: n_kept += 1
                continue
            parts = base_parts(sel)
            idx = order.get((ctx, sel, body))
            if idx is not None and not parts & kept_sel and not any(parts & q and i > idx for q, i in gone):
                gone.append((parts, idx))
                cuts.append((a, b)); removed.append(f'{ctx} {sel}'.strip())
            else:
                kept_sel.update(parts); n_kept += 1
        return n_kept
    order = {k: i for i, k in enumerate(lib)}
    walk(rules(css))
    for a, b in sorted(cuts, reverse=True):
        # take the line with it when the rule stood on its own lines
        la = css.rfind('\n', 0, a) + 1
        if not css[la:a].strip():
            a = la
            if b < len(css) and css[b] == '\n': b += 1
            elif css[b:].lstrip(' ').startswith('\n'): b = css.index('\n', b) + 1
        css = css[:a] + css[b:]
    css = re.sub(r'/\* /?vd-(qr|reset|trim|handout)\b[^*]*\*/\n?', '', css)
    return css


SCRIPTS = [
    re.compile(r'<script>\(function\(b\)\{var h=location\.href\.split.*?</script>', re.S),        # QR
    re.compile(r'<script>\(function\(b\)\{var base=new WeakMap\(\).*?</script>', re.S),           # Reset all
    re.compile(r'<script>/\* vd-plotfold:.*?</script>\n?', re.S),                                  # plot fold
]


PROJECTOR = re.compile(
    r"const projBtn = \$\('proj'\);\n(\s*)function setProjector\(on\) \{ document\.documentElement\.setAttribute\('data-projector', on \? 'on' : 'off'\); "
    r"projBtn\.setAttribute\('aria-pressed', String\(on\)\); try \{ localStorage\.setItem\('vd-projector', on \? 'on' : 'off'\); \} catch \(_\) \{\} "
    r"requestAnimationFrame\((\w+)\); \}\n\s*projBtn\.addEventListener\('click', \(\) => setProjector\(projBtn\.getAttribute\('aria-pressed'\) !== 'true'\)\);\n"
    r"\s*try \{ if \(localStorage\.getItem\('vd-projector'\) === 'on'\) setProjector\(true\); \} catch \(_\) \{\}")


def move(demo, report=False):
    p = ROOT / 'demos' / f'{demo}.html'
    s = p.read_text()
    if 'lib/vd.css' in s:
        print(f'{demo}: already on the library'); return
    lib, removed, kept, gone = lib_rules(), [], set(), []
    mine = demo_rules(s)
    off = [n for r, n in lib.items() if n and r not in mine]
    out, pos = [], 0
    for m in re.finditer(r'(<style[^>]*>)(.*?)(</style>)', s, flags=re.S):
        out.append(s[pos:m.start(2)]); out.append(strip_css(m.group(2), lib, removed, kept, gone)); pos = m.end(2)
    out.append(s[pos:]); t = ''.join(out)
    t = re.sub(r'<style[^>]*>\s*</style>\n?', '', t)
    for rx in SCRIPTS: t = rx.sub('', t)
    proj = PROJECTOR.search(t)
    if proj and t.count('setProjector') == 3 and t.count('projBtn') == 4:
        t = t[:proj.start()] + f'VD.projector({{ onChange: {proj.group(2)} }});' + t[proj.end():]
    i = t.index('<style') if '<style' in t else t.index('</head>')
    t = t[:i] + LINKS + t[i:]
    if off: t = re.sub(r'<html\b', '<html data-vd-off="' + ' '.join(off) + '"', t, count=1)
    print(f'{demo}: {len(removed)} rules now come from vd.css, {len(off)} shared rules switched off, {len(s) - len(t)} characters shorter')
    if report: print('\n'.join('  ' + r for r in removed)); return
    p.write_text(t)


if __name__ == '__main__':
    args = sys.argv[1:]
    rep = '--report' in args
    for d in [a for a in args if not a.startswith('--')]: move(d, rep)
