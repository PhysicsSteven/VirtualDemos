#!/usr/bin/env python3
"""Build the symbol glossaries that the student handouts show when a student hovers over or taps a symbol in an equation.

    python3 tools/symbols.py              # write curriculum/labs/symbols/<handout>.json for every handout
    python3 tools/symbols.py --check      # exit 1 if any output is out of date or the glossary names a symbol a handout never uses
    python3 tools/symbols.py --missing    # list, per handout, the symbols in its equations that have no meaning yet
    python3 tools/symbols.py --context a b  # for writing the glossary: each symbol of handouts a, b with where it first appears

Every meaning is written by hand in curriculum/labs/symbols/glossary.txt, read from the handout itself (its definitions, its data
table headings and units), so a symbol means on hover exactly what it means on that handout. Nothing is guessed: a symbol with no
line in the glossary gets no hover. The file has one section per handout ("== pendulum ==") and a "== site ==" section for physical
constants whose symbol means one thing on every handout (values CODATA 2022). A handout's own line wins over the site line;
a line with the meaning "-" turns the site line off for that handout. Lines are

    key | meaning | unit | note

with unit and note optional ("L | Length, pivot to bob center | m"). Keys are what the page reads back from MathJax: the letter or
Greek name, then _ and the subscript as shown, then ' for a prime ("T", "theta_0", "I_rms", "rho_f", "k_B", "v_1'"). \\varepsilon and
\\epsilon are both "epsilon", \\varphi and \\phi both "phi", \\vartheta and \\theta both "theta". Not keyed, so never hovered: a Delta
or d that is an operator in front of a symbol, pi, letters in \\text{} or \\rm (units, labels), and symbols under a hat, bar, tilde or
dot. A symbol under \\vec or \\mathbf is keyed by its letter.
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
HANDOUTS = ROOT / 'curriculum' / 'labs' / 'students'
OUT = ROOT / 'curriculum' / 'labs' / 'symbols'
GLOSSARY = OUT / 'glossary.txt'

GREEK = ('alpha beta gamma delta epsilon varepsilon zeta eta theta vartheta iota kappa lambda mu nu xi pi varpi rho varrho sigma '
         'varsigma tau upsilon phi varphi chi psi omega Gamma Delta Theta Lambda Xi Pi Sigma Upsilon Phi Psi Omega hbar').split()
SAME = {'varepsilon': 'epsilon', 'vartheta': 'theta', 'varphi': 'phi', 'varrho': 'rho', 'varpi': 'pi', 'varsigma': 'sigma'}
TEXTY = r'\\(?:text|mathrm|textrm|mathit|textit|operatorname|mbox|mathsf|textbf|textsf|texttt|mathtt|mathcal|mathbb|label|tag)'
ACCENT = r'\\(?:hat|bar|dot|ddot|tilde|overline|widehat|widetilde|check|breve)'
OPS = re.compile(r'\\(?:frac|tfrac|dfrac|sqrt|left|right|cdot|times|div|quad|qquad|approx|propto|ln|log|lg|exp|sin|cos|tan|sinh|cosh|'
                 r'tanh|arcsin|arccos|arctan|sec|csc|cot|max|min|lim|sum|prod|int|iint|oint|partial|nabla|infty|pm|mp|le|ge|leq|geq|neq|'
                 r'to|gets|rightarrow|leftarrow|Rightarrow|leftrightarrow|longrightarrow|mapsto|langle|rangle|lvert|rvert|lVert|rVert|'
                 r'vert|Vert|mid|vec|mathbf|boldsymbol|bm|ell|circ|degree|dots|ldots|cdots|vdots|big|Big|bigg|Bigg|bigl|bigr|'
                 r'Bigl|Bigr|displaystyle|textstyle|scriptstyle|not|equiv|sim|simeq|cong|gg|ll|cap|cup|in|notin|subset|forall|exists|'
                 r'over|atop|choose|binom|begin|end|odot|otimes|oplus|star|ast|bullet|angle|perp|parallel|triangle|square|checkmark|'
                 r'gathered|aligned|array|cases|matrix|pmatrix|bmatrix|substack|limits|nolimits|underbrace|overbrace|phantom|hspace|'
                 r'vphantom|hphantom|color|boxed|lfloor|rfloor|lceil|rceil|det|Re|Im|operatorname|hline|cancel|implies|iff|land|lor|'
                 r'neg|wedge|vee|sharp|flat|natural|dagger|ddagger|aleph|emptyset|varnothing|setminus|lesssim|gtrsim|ne|AA|S|P)'
                 r'(?![A-Za-z])')
SYM = re.compile(r'(\\[A-Za-z]+|[A-Za-z])'
                 r"(?P<p1>(?:\s*')*)"
                 r'(?:\s*_\s*(?P<sub>\{@\d+@\}|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\}|\\[A-Za-z]+|[A-Za-z0-9]))?'
                 r"(?P<p2>\s*\^\s*\{?\s*\\prime\s*\}?|(?:\s*')*)")
MATH = re.compile(r'\$\$(.+?)\$\$', re.S)


def norm_sub(s):
    """subscript TeX -> the text MathJax shows: "{\\rm rms}" -> "rms", "{\\rm B}" -> "B", "{1,\\max}" -> "1max" """
    s = re.sub(r'(?:' + TEXTY + r'|\\rm|\\mathrm|\\it|\\bf|\\mathbf|\\boldsymbol)\s*', '', s)
    s = re.sub(r'\\([A-Za-z]+)', lambda m: SAME.get(m.group(1), m.group(1)), s)
    return re.sub(r'[{}\s~,_^]|\\[ ,;:!]', '', s).replace('*', 'ast')


def strip(tex):
    """TeX with what is never a symbol taken out: text and unit groups, accented symbols, operators and function names"""
    t = tex
    for _ in range(3):
        t = re.sub(TEXTY + r'\s*\{(?:[^{}]|\{[^{}]*\})*\}', ' ', t)
        t = re.sub(ACCENT + r'\s*(\{(?:[^{}]|\{[^{}]*\})*\}|\\[A-Za-z]+|[A-Za-z])(\s*_\s*(\{[^{}]*\}|\\[A-Za-z]+|[A-Za-z0-9]))?', ' ', t)
    t = re.sub(r'\{\\rm\s[^{}]*\}|\\rm\s*[A-Za-z]+|' + TEXTY + r'\s*[A-Za-z]', ' ', t)
    return OPS.sub(' ', t)


def keys_in(tex):
    """every symbol key in one TeX expression, in order"""
    subs = []

    def keep(m):   # subscripts are read before text groups are taken out, so I_{\rm rms} keeps its "rms"
        before = re.search(r'\\([A-Za-z]+)\s*$', m.string[:m.start()])
        if before and before.group(1) not in GREEK and not re.fullmatch(r'cal[A-Z]', before.group(1)):
            return ' '   # the limits of a sum or the like: \sum_i, \max_x
        subs.append(norm_sub(m.group(1)))
        return '_{@%d@}' % (len(subs) - 1)
    t = re.sub(r'\\(?:begin|end)\s*\{[^{}]*\}|\\\\(?:\[[^\]]*\])?', ' ', tex)   # environments and line breaks (\\[4pt])
    t = re.sub(r'\\mathcal\s*\{?\s*([A-Z])\s*\}?', r' \\cal\1', t)   # \mathcal E (an emf): its own symbol, "calE"
    t = re.sub(r'\\(?:vec|mathbf|boldsymbol|bm)\s*\{\s*(\\?[A-Za-z]+)\s*\}', r' \1', t)
    t = re.sub(r'\\(?:mu|Omega)\s*(?=\\(?:text|mathrm|rm|textrm)(?![A-Za-z]))', ' ', t)   # µs, µF: a unit prefix, not a symbol
    t = re.sub(r'(\d\s*(?:\\[ ,;:!]|~)?\s*)\\Omega(?![A-Za-z])', r'\1 ', t)   # 10 Ω: a unit
    t = re.sub(r'\\(?:vec|mathbf|boldsymbol|bm)\s+(\\?[A-Za-z]+)', r' \1', t)
    t = re.sub(r'_\s*(' + TEXTY + r'\s*\{[^{}]*\}|\\rm\s*[A-Za-z]+|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\}|\\[A-Za-z]+|[A-Za-z0-9+\-*])', keep, t)
    t, out = strip(t), []
    ms = list(SYM.finditer(t))
    for i, m in enumerate(ms):
        base = m.group(1).lstrip('\\')
        if m.group(1).startswith('\\') and base not in GREEK and not re.fullmatch(r'cal[A-Z]', base):
            continue   # a command this file does not know: not a symbol
        base = SAME.get(base, base)
        nxt = ms[i + 1] if i + 1 < len(ms) else None
        between = t[m.end():nxt.start()] if nxt else ''
        if base in ('Delta', 'd', 'delta') and not m.group('sub') and not m.group('p1') and not m.group('p2') and nxt and re.fullmatch(r'\s*', between):
            continue   # Δt, dx, δx: an operator, not a symbol
        if base == 'pi':
            continue
        primes = (m.group('p1') + m.group('p2')).count("'") + ('prime' in (m.group('p2') or ''))
        sub = m.group('sub')
        sub = subs[int(sub[2:-2])] if sub and sub.startswith('{@') else norm_sub(sub) if sub else ''
        out.append(base + ('_' + sub if sub else '') + "'" * primes)
    return out


def used(md):
    ks = []
    for m in MATH.finditer(md):
        for k in keys_in(m.group(1)):
            if k not in ks:
                ks.append(k)
    return ks


def read_glossary():
    sections, cur = {}, None
    for n, line in enumerate(GLOSSARY.read_text().split('\n'), 1):
        s = line.strip()
        if not s or s.startswith('//'):
            continue
        m = re.match(r'^==\s*([a-z0-9-]+)\s*==$', s)
        if m:
            cur = sections.setdefault(m.group(1), {})
            continue
        parts = [p.strip() for p in s.split('|')]
        if cur is None or len(parts) < 2 or len(parts) > 4 or not parts[0] or not parts[1]:
            sys.exit(f'glossary.txt line {n}: cannot read "{s}"')
        if parts[0] in cur or (parts[0].startswith('@') and cur is not sections.get('site')):
            sys.exit(f'glossary.txt line {n}: {parts[0]} twice in one section')
        cur[parts[0]] = parts[1:]
    return sections


def build(slug, keys, gl):
    own, site, out = gl.get(slug, {}), gl.get('site', {}), {}
    for k in keys:
        e = own.get(k) or site.get(k)
        if e and e[0].startswith('@'):   # "c | @" or "c | @c": a constant from the site section, used only where a handout asks
            ref = e[0] if len(e[0]) > 1 else '@' + k
            if ref not in site:
                sys.exit(f'glossary.txt: {slug} asks for {ref}, which the site section does not have')
            e = site[ref]
        if e and e[0] != '-':
            e = list(e) + [''] * (3 - len(e))
            while e and not e[-1]:
                e.pop()
            out[k] = e
    return out


def context(slug, md, n=2):
    """where each symbol first appears: up to n snippets of prose or table heading around it"""
    keys, spans = used(md), []
    lines = md.split('\n')
    for i, line in enumerate(lines):
        if line.startswith('|') and i + 1 < len(lines) and re.match(r'^\|\s*:?-{3,}', lines[i + 1]):
            spans.append(('H', line))
    for par in re.split(r'\n\s*\n', md):
        if not par.startswith('|'):
            spans.append(('', ' '.join(par.split())))
    out = []
    for k in keys:
        snips = []
        for kind, s in spans:
            for m in MATH.finditer(s):
                if k in keys_in(m.group(1)):
                    if kind == 'H':
                        cell = [c for c in s.split('|') if m.group(0) in c]
                        snips.append('HEAD: ' + (cell[0].strip() if cell else s))
                    else:
                        a, b = max(0, m.start() - 100), min(len(s), m.end() + 70)
                        snips.append(s[a:b])
                    break
            if len(snips) >= n:
                break
        out.append((k, snips))
    return out


def site_note(k, gl):
    e = gl.get('site', {}).get(k)
    return f'   [site: {e[0]}]' if e else ''


def main():
    args = sys.argv[1:]
    if args and args[0] == '--context':
        gl = read_glossary()
        for slug in args[1:]:
            print('==', slug, '==')
            for k, snips in context(slug, (HANDOUTS / (slug + '.md')).read_text(), 3):
                print('  ' + k + site_note(k, gl))
                for s in snips:
                    print('      ' + s)
        return
    gl = read_glossary()
    check, missing = '--check' in args, '--missing' in args
    stale, bad, slugs = [], [], set()
    for p in sorted(HANDOUTS.glob('*.md')):
        slug = p.stem
        slugs.add(slug)
        keys = used(p.read_text())
        for k in gl.get(slug, {}):
            if k not in keys:
                bad.append(f'{slug}: {k} is not in its equations')
        out = build(slug, keys, gl)
        if missing:
            left = [k for k in keys if k not in out]
            if left:
                print(f'{slug}: ' + ' '.join(left))
            continue
        text = json.dumps(out, ensure_ascii=False, separators=(',', ':'), sort_keys=True) + '\n'
        f = OUT / (slug + '.json')
        if not f.exists() or f.read_text() != text:
            stale.append(f.name)
            if not check:
                f.write_text(text)
    bad += [f'glossary section "{s}" has no handout' for s in gl if s != 'site' and s not in slugs]
    if missing:
        return
    for b in bad:
        print(b)
    if check and (stale or bad):
        print('out of date:', ', '.join(stale)) if stale else None
        sys.exit(1)


if __name__ == '__main__':
    main()
