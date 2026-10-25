#!/usr/bin/env python3
"""Build the symbol glossaries that the student handouts show when a student hovers over or taps a symbol in an equation.

    python3 tools/symbols.py              # write curriculum/labs/symbols/<handout>.json for every handout
    python3 tools/symbols.py --check      # exit 1 if any output is out of date or the glossary names a symbol a handout never uses
    python3 tools/symbols.py --missing    # list, per handout, the symbols in its equations that have no meaning yet
    python3 tools/symbols.py --occurrences  # JSON: every symbol of every equation and the meaning it shows (for tools/symcheck.cjs)
    python3 tools/symbols.py --meanings [a b]  # exit 1 if a tip disagrees with what its handout says (see meanings() below)
    python3 tools/symbols.py --context a b  # for writing the glossary: each symbol of handouts a, b with where it first appears

Every meaning is written by hand in curriculum/labs/symbols/glossary.txt, read from the handout itself (its definitions, its data
table headings and units), so a symbol means on hover exactly what it means on that handout. Nothing is guessed: a symbol with no
line in the glossary gets no hover. The file has one section per handout ("== pendulum ==") and a "== site ==" section for physical
constants whose symbol means one thing on every handout (values CODATA 2022). A handout's own line wins over the site line;
a line with the meaning "-" turns the site line off for that handout. Lines are

    key | meaning | unit | note
    key [spec] | meaning | unit | note

with unit and note optional ("L | Length, pivot to bob center | m"). Keys are what the page reads back from MathJax: the letter or
Greek name, then _ and the subscript as shown, then ' for a prime ("T", "theta_0", "I_rms", "rho_f", "k_B", "v_1'"); "ell" for ℓ;
an accented symbol with its accent ("hat n", "bar v", "tilde nu_0", "dot D_0", "ddot x", "bar KE"); a label the handout writes as
several capitals and keys as a whole ("FP", "KE"). \\varepsilon and \\epsilon are both "epsilon", \\varphi and \\phi both "phi",
\\vartheta and \\theta both "theta". Not keyed, so never hovered: a Delta or d that is an operator in front of a symbol (the d of
d sin θ is a symbol), pi, letters in \\text{} or \\rm (units, labels), and the limits of a sum or integral. A symbol under \\vec or
\\mathbf is keyed by its letter.

A symbol that means different things in different places on one handout gets a default line and "key [spec]" lines; the first
spec that holds where the symbol stands wins. A spec is conditions joined by &: TeX the equation contains (spaces ignored), =TeX
for the whole equation, ^ for a symbol carrying a power that is not a plain number (the e of e^(−E/kT), not of ke²), or ~words
for an equation written just after those words ("eccentricity $$e$$"). "Delta X" lines give the meaning of ΔX where it is not a
change in X.

Checks: --check and --missing above; tools/symcheck.cjs, which reads every tip back from the built pages and compares it with
--occurrences; and --meanings, which compares each tip with the handout's own words and units and with rules every meaning obeys.
A flag that is right as it stands goes in curriculum/labs/symbols/reviewed.txt with the reason.
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
         'varsigma tau upsilon phi varphi chi psi omega Gamma Delta Theta Lambda Xi Pi Sigma Upsilon Phi Psi Omega hbar ell').split()
SAME = {'varepsilon': 'epsilon', 'vartheta': 'theta', 'varphi': 'phi', 'varrho': 'rho', 'varpi': 'pi', 'varsigma': 'sigma'}
TEXTY = r'\\(?:text|mathrm|textrm|mathit|textit|operatorname|mbox|mathsf|textbf|textsf|texttt|mathtt|mathcal|mathbb|label|tag)'
ACCENT = r'\\(?P<acc>hat|bar|dot|ddot|tilde|overline|widehat|widetilde|check|breve)(?![A-Za-z])'
ACC_NAME = {'widehat': 'hat', 'overline': 'bar', 'widetilde': 'tilde'}
FUNCS = r'\\(?:sin|cos|tan|sinh|cosh|tanh|arcsin|arccos|arctan|sec|csc|cot|ln|log|lg|exp|det)(?![A-Za-z])'
OPS = re.compile(r'\\(?:frac|tfrac|dfrac|sqrt|left|right|cdot|times|div|quad|qquad|approx|propto|ln|log|lg|exp|sin|cos|tan|sinh|cosh|'
                 r'tanh|arcsin|arccos|arctan|sec|csc|cot|max|min|lim|sum|prod|int|iint|oint|partial|nabla|infty|pm|mp|le|ge|leq|geq|neq|'
                 r'to|gets|rightarrow|leftarrow|Rightarrow|leftrightarrow|longrightarrow|mapsto|langle|rangle|lvert|rvert|lVert|rVert|'
                 r'vert|Vert|mid|vec|mathbf|boldsymbol|bm|circ|degree|dots|ldots|cdots|vdots|big|Big|bigg|Bigg|bigl|bigr|'
                 r'Bigl|Bigr|displaystyle|textstyle|scriptstyle|not|equiv|sim|simeq|cong|gg|ll|cap|cup|in|notin|subset|forall|exists|'
                 r'over|atop|choose|binom|begin|end|odot|otimes|oplus|star|ast|bullet|angle|perp|parallel|triangle|square|checkmark|'
                 r'gathered|aligned|array|cases|matrix|pmatrix|bmatrix|substack|limits|nolimits|underbrace|overbrace|phantom|hspace|'
                 r'vphantom|hphantom|color|boxed|lfloor|rfloor|lceil|rceil|det|Re|Im|operatorname|hline|cancel|implies|iff|land|lor|'
                 r'neg|wedge|vee|sharp|flat|natural|dagger|ddagger|aleph|emptyset|varnothing|setminus|lesssim|gtrsim|ne|AA|S|P)'
                 r'(?![A-Za-z])')
WRAP = re.compile(r'\\(?:vec|mathbf|boldsymbol|bm|displaystyle|textstyle|scriptstyle|limits|nolimits|big|Big|bigg|Bigg|bigl|bigr|'
                  r'Bigl|Bigr|left|right|color|boxed|cancel|phantom|vphantom|hphantom|operatorname|begin|end|langle)')
LIMITS = re.compile(r'\\(?:sum|prod|int|iint|oint|lim)(?:\s*\\(?:no)?limits)?'
                    r'(?:\s*[_^]\s*(?:\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\}|\\[A-Za-z]+|[A-Za-z0-9])){0,2}')
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
    """TeX with what is never a symbol taken out: text and unit groups, operators and function names (a function name leaves a
    mark, so the d of d sin θ is a spacing, not a differential)"""
    t = tex
    for _ in range(3):
        t = re.sub(TEXTY + r'\s*\{(?:[^{}]|\{[^{}]*\})*\}', ' ', t)
    t = re.sub(r'\{\\rm\s[^{}]*\}|\\rm\s*[A-Za-z]+|' + TEXTY + r'\s*[A-Za-z]', ' ', t)
    t = re.sub(FUNCS, r' \\Fn ', t)
    return OPS.sub(lambda m: ' ' if WRAP.fullmatch(m.group(0)) else ' ; ', t)   # an operator or a space ends a Δ x or a d x


def letters(i):
    """0 -> "A", 25 -> "Z", 26 -> "BA": a token name made only of letters"""
    out = ''
    while True:
        out = chr(65 + i % 26) + out
        i //= 26
        if not i:
            return out


def keys_in(tex, deltas=None, compounds=(), marks=None):
    """every symbol key in one TeX expression, in order; a symbol after a Δ also goes into deltas as "Delta X". compounds are the
    handout's whole labels written as several letters (FP, the far point), read as one symbol. An accented symbol is keyed with
    its accent: "hat n", "bar v", "tilde nu_0", "dot D_0"."""
    subs, accs = [], []

    def keep(m):   # subscripts are read before text groups are taken out, so I_{\rm rms} keeps its "rms"
        before = re.search(r'\\([A-Za-z]+)\s*$', m.string[:m.start()])
        if before and before.group(1) not in GREEK and not re.fullmatch(r'cal[A-Z]', before.group(1)):
            return ' '   # the limits of a sum or the like: \sum_i, \max_x
        subs.append(norm_sub(m.group(1)))
        return '_{@%d@}' % (len(subs) - 1)

    def acc(m):
        accs.append(ACC_NAME.get(m.group('acc'), m.group('acc')) + ' ' + norm_sub(m.group('inner')))
        return ' \\AccQ' + letters(len(accs) - 1) + ' '
    t = re.sub(r'\\(?:begin|end)\s*\{[^{}]*\}|\\\\(?:\[[^\]]*\])?', ' ', tex)   # environments and line breaks (\\[4pt])
    t = LIMITS.sub(' ; ', t)   # an integral or sum with its limits, which are not symbols of the handout
    t = re.sub(r'\\mathcal\s*\{?\s*([A-Z])\s*\}?', r' \\cal\1', t)   # \mathcal E (an emf): its own symbol, "calE"
    t = re.sub(r'\\(?:vec|mathbf|boldsymbol|bm)\s*\{\s*(\\?[A-Za-z]+)\s*\}', r' \1', t)
    t = re.sub(r'\\(?:mu|Omega)\s*(?=\\(?:text|mathrm|rm|textrm)(?![A-Za-z]))', ' ', t)   # µs, µF: a unit prefix, not a symbol
    t = re.sub(r'((?:\d|\}|\\(?:text|mathrm|rm)\s*\{[^{}]*\})\s*(?:\\[ ,;:!]|~)?\s*)\\Omega(?![A-Za-z])', r'\1 ', t)   # 10 Ω, kΩ, 10⁻⁸ Ω·m: a unit
    t = re.sub(r'\\(?:vec|mathbf|boldsymbol|bm)\s+(\\?[A-Za-z]+)', r' \1', t)
    t = re.sub(r'_\s*(' + TEXTY + r'\s*\{[^{}]*\}|\\rm\s*[A-Za-z]+|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\}|\\[A-Za-z]+|[A-Za-z0-9+\-*])', keep, t)
    t = re.sub(ACCENT + r'\s*(?P<inner>\{(?:[^{}]|\{[^{}]*\})*\}|\\[A-Za-z]+|[A-Za-z])', acc, t)
    t = strip(t)
    for c in sorted(compounds, key=len, reverse=True):
        t = re.sub(r'(?<![A-Za-z\\])' + c + r'(?![A-Za-z])', r' \\Cmp' + c + ' ', t)
    out, after_delta = [], False
    ms = list(SYM.finditer(t))
    for i, m in enumerate(ms):
        base = m.group(1).lstrip('\\')
        if base.startswith('AccQ'):
            base = accs[sum((ord(ch) - 65) * 26 ** j for j, ch in enumerate(reversed(base[4:])))]
        elif base.startswith('Cmp') and base[3:] in compounds:
            base = base[3:]
        elif m.group(1).startswith('\\') and base not in GREEK and not re.fullmatch(r'cal[A-Z]', base):
            continue   # a command this file does not know, or a function name: not a symbol
        base = SAME.get(base, base)
        nxt = ms[i + 1] if i + 1 < len(ms) else None
        between = t[m.end():nxt.start()] if nxt else ''
        if (base in ('Delta', 'd', 'delta') and not m.group('sub') and not m.group('p1') and not m.group('p2') and nxt
                and nxt.group(1) != '\\Fn' and re.fullmatch(r'\s*', between)):
            after_delta = base == 'Delta'
            continue   # Δt, dx, δx: an operator, not a symbol
        if base == 'pi':
            continue
        primes = (m.group('p1') + m.group('p2')).count("'") + ('prime' in (m.group('p2') or ''))
        sub = m.group('sub')
        sub = subs[int(sub[2:-2])] if sub and sub.startswith('{@') else norm_sub(sub) if sub else ''
        out.append(base + ('_' + sub if sub else '') + "'" * primes)
        if after_delta and deltas is not None:
            deltas.add('Delta ' + out[-1])
        if marks is not None:   # per key: whether it follows a Δ, and whether it carries a power (e^x, not the e⁻ of an electron)
            rest = t[m.end():]
            pw = re.match(r'\s*\^\s*', rest)
            if pw:
                r, depth = rest[pw.end():], 0
                for j, ch in enumerate(r):   # the power: one token, or a group in braces however deep
                    depth += (ch == '{') - (ch == '}')
                    if depth == 0 and (ch != '\\' or j):
                        break
                pw = re.sub(r'\s+', '', r[:j + 1] if r[:1] != '\\' else re.match(r'\\[A-Za-z]+|\\.', r).group(0)).strip('{}')
            marks.append((after_delta, pw if pw and pw not in '+-−' else False))   # the power it carries, as TeX
        after_delta = False
    return out


def nospace(tex):
    return re.sub(r'\s+', '', tex)


def compounds_of(slug, gl):
    """a handout's labels written as several capital letters and read as one symbol (FP and NP on The Eye, KE)"""
    return tuple(k for k in gl.get(slug, {}) if re.fullmatch(r'[A-Z]{2,}', k))


def equations(md):
    return [m.group(1) for m in MATH.finditer(md)]


def lead_text(text):
    """the words just before an equation, as the page script reads them: from the last equation or line start, lower case"""
    text = re.split(r'\$\$|\n', text)[-1]
    return ' '.join(re.sub(r'[*_`]', '', text).lower().split()).rstrip(' (,:')


def leads(md):
    """each equation with the words just before it: [(TeX, words)]"""
    return [(m.group(1), lead_text(md[:m.start()])) for m in MATH.finditer(md)]


def occurrences(md, compounds=()):
    """every symbol on the page, one by one: (equation TeX, key, whether a Δ is in front of it, the power it carries or False,
    the words just before the equation)"""
    out = []
    for tex, before in leads(md):
        marks = []
        for k, (d, pw) in zip(keys_in(tex, None, compounds, marks), marks):
            out.append((tex, k, d, pw, before))
    return out


def ctx_match(spec, tex, power, before=''):
    """a "key [spec]" line applies here: every condition of spec, joined by &, holds. A condition is TeX that the equation
    contains (spaces ignored), =TeX for the whole equation, ^ for a symbol that carries a power other than a plain number
    (the e of e^(−E/kT), not of ke²), or ~words for an equation
    written just after those words ("eccentricity $$e$$": e [~eccentricity])"""
    flat = nospace(tex)
    for c in spec.split('&'):
        if c.strip().startswith('~'):
            if not before.endswith(' '.join(c.strip()[1:].lower().split())):
                return False
            continue
        c = nospace(c)
        if not (bool(power) and not re.fullmatch(r'\d+', power) if c == '^' else flat == c[1:] if c.startswith('=') else c in flat):
            return False
    return True


def used(md, deltas=None, compounds=()):
    ks = []
    for tex in equations(md):
        for k in keys_in(tex, deltas, compounds):
            if k not in ks:
                ks.append(k)
    return ks


def read_glossary():
    """sections by handout, key -> [meaning, unit, note]; sections['@ctx'][handout][key] is the list of (TeX, entry) for lines
    "key [TeX] | ...", a meaning that applies only in the equations whose TeX contains that text (spaces ignored)"""
    sections, cur, name = {'@ctx': {}}, None, None
    for n, line in enumerate(GLOSSARY.read_text().split('\n'), 1):
        s = line.strip()
        if not s or s.startswith('//'):
            continue
        m = re.match(r'^==\s*([a-z0-9-]+)\s*==$', s)
        if m:
            name = m.group(1)
            cur = sections.setdefault(name, {})
            continue
        parts = [p.strip() for p in s.split('|')]
        if cur is None or len(parts) < 2 or len(parts) > 4 or not parts[0] or not parts[1]:
            sys.exit(f'glossary.txt line {n}: cannot read "{s}"')
        km = re.fullmatch(r'(.+?)\s*\[(.+)\]', parts[0])
        if km:
            sections['@ctx'].setdefault(name, {}).setdefault(km.group(1), []).append((km.group(2).strip(), parts[1:], n))
            continue
        if parts[0] in cur or (parts[0].startswith('@') and name != 'site'):
            sys.exit(f'glossary.txt line {n}: {parts[0]} twice in one section')
        cur[parts[0]] = parts[1:]
    for name, ks in sections['@ctx'].items():
        for k, lines in ks.items():
            if k not in sections.get(name, {}):
                sys.exit(f'glossary.txt line {lines[0][2]}: {name} gives {k} a meaning for some equations but no line for the rest')
    return sections


def entry(e, slug, k, site):
    """an entry with its @ reference followed and empty fields dropped; None for a line turned off"""
    if e and e[0].startswith('@'):   # "c | @" or "c | @c": a constant from the site section, used only where a handout asks
        ref = e[0] if len(e[0]) > 1 else '@' + k
        e = site.get(ref) or site.get(ref[1:])
        if not e:
            sys.exit(f'glossary.txt: {slug} asks for {ref}, which the site section does not have')
    if not e or e[0] == '-':
        return None
    e = list(e) + [''] * (3 - len(e))
    while e and not e[-1]:
        e.pop()
    return e


def resolve(slug, gl, tex, key, after_delta, power, before=''):
    """what one symbol on the page shows: (key shown, entry), entry None when it has no meaning"""
    own, site = gl.get(slug, {}), gl.get('site', {})
    k = 'Delta ' + key if after_delta and 'Delta ' + key in own else key
    for ctx, e, _ in gl['@ctx'].get(slug, {}).get(k, []):
        if ctx_match(ctx, tex, power, before):
            return k, entry(e, slug, k, site)
    return k, entry(own.get(k) or site.get(k), slug, k, site)


def build(slug, keys, gl, deltas=()):
    """the handout's glossary; "Delta X" lines (a quantity written ΔX that is not a change in X, such as a tidal ΔA) apply
    where the page shows Δ in front of X, and X's own line everywhere else; "X [TeX]" lines apply in the equations with that TeX"""
    own, site, out, ctx = gl.get(slug, {}), gl.get('site', {}), {}, {}
    for k in list(keys) + sorted(d for d in deltas if d in own):
        e = entry(own.get(k) or site.get(k), slug, k, site)
        if e:
            out[k] = e
        for c, ce, _ in gl['@ctx'].get(slug, {}).get(k, []):
            ctx.setdefault(k, []).append([c] + (entry(ce, slug, k, site) or ['-']))
    if ctx:
        out['@ctx'] = ctx
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
                        a, b = max(0, m.start() - 90), min(len(s), m.end() + 60)
                        snips.append(s[a:b])
                    break
            if len(snips) >= n:
                break
        out.append((k, snips))
    return out


def site_note(k, gl):
    e = gl.get('site', {}).get(k)
    return f'   [site: {e[0]}]' if e else ''


# ---------- --meanings: does each tip agree with what the handout itself says the symbol is? ----------
REVIEWED = OUT / 'reviewed.txt'
STOP = set('the a an its their this that these those each every of to in on at by for from with and or nor as is are be was were '
           'it its our your any all both same than then when where which who whose per into onto over under between about'.split())
VERBS = set('measure measured measuring plot plotted record recorded find compute calculate use used using set vary varied change '
            'estimate compare increase decrease keep hold read take predict raise lower double doubles halve fit graph against '
            'versus vs give gives gave equals equal make makes write note check choose pick start stop run repeat try call called '
            'named labeled so how what why does do grows falls rises gets got new old whole only also just here there now has have '
            'had holds keeps reads forms shows comes goes lands measures sets passes turns tracks shifts stays moves drops sees '
            'smaller larger largest smallest higher lower highest lowest bigger biggest greater fixed same measured inside outside '
            'times divided multiplied plus minus over last next other small large very negative positive '
            'different single own mean accepted approximate fitted predicted inferred known right two maximum minimum '
            'expected tiny enormous most likely through along while but since after above below reaches ln sin cos tan log exp '
            'uses show needs changes halves shorten would can could you correct records brings work out read supplied point'.split())
DET = set('the a an its their this that each every'.split())
SUPER = str.maketrans({'²': '2', '³': '3', '¹': '1', '⁻': '-', '⁴': '4', '⁰': '0', '−': '-', 'μ': 'µ'})


def words(text):
    return [w for w in re.findall(r"[A-Za-z]+", text.lower()) if w not in STOP and w not in VERBS and len(w) > 1]


SYNONYMS = [set(g.split()) for g in ('dista spaci separ lengt gap width heigh depth thick sag radiu diame rim size', 'count numbe',
            'pull tensi force', 'shift posit displ offse', 'slope rate gradi',
            'fract share', 'volta poten')]


def stems(text):
    out = {w[:5] for w in words(text)}
    return out.union(*[g for g in SYNONYMS if g & out])


def unit_norm(u):
    u = u.translate(SUPER)
    u = re.sub(r'\\(?:text|mathrm|rm|textrm)\s*', '', u)
    u = u.replace('\\mu', 'µ').replace('\\Omega', 'Ω').replace('\\circ', '°').replace('\\degree', '°').replace('^\\circ', '°')
    u = re.sub(r'\\[ ,;:!]|\\cdot|·|[{}\s~^*$]', '', u)
    u = re.sub(r'^10[-\d]+', '', u)   # a column in 10¹⁴ Hz is in Hz
    return re.sub(r'^([A-Za-z]+)-1$', r'1/\1', u)


PREFIX = 'yzafpnµumcdhkMGTPE'


def unit_ok(said, tip, note=''):
    """the handout's unit is the tip's, or the same unit with an SI prefix (a table in mm, a tip in m), or one the tip's note
    names (a strain read in µε)"""
    said = re.split(r'(?<!\\),|\s+or\s+', said)[0]
    s = unit_norm(said)
    if s and s in unit_norm(note):
        return True
    if not re.search(r'[A-Za-zµΩ°%]', s) or '_' in s or 'frac' in s:
        return True
    alts = [unit_norm(a) for a in re.split(r'\s+or\s+|,|;|\(|\)', tip or '')]
    alts += [unit_norm(a.split()[0]) for a in re.split(r'\s+or\s+|,|;', tip or '') if a.split()]
    if s == '°':
        return any(a.startswith('°') for a in alts)
    strip1 = lambda u: u[1:] if len(u) > 1 and u[0] in PREFIX and not u.startswith(('mol', 'min', 'cd', 'h', 'da')) else u
    return s in alts or strip1(s) in alts or strip1(s) in map(strip1, alts)


def evidence(md):
    r"""what the handout says each symbol is, where it says it: (line, inline TeX, words naming it, unit), from data table headings
    ("Period $$T$$ (s)"), from prose ("the bead volume $$V$$", "$$V$$, the volume", "where $$V$$ is the volume") and from values
    written with a unit ("$$L = 0.50$$ m")"""
    out, lines, fence = [], md.split('\n'), False
    for n, line in enumerate(lines, 1):
        if line.strip().startswith('```'):
            fence = not fence
        if fence or '$$' not in line:
            continue
        header = line.lstrip().startswith('|') and n < len(lines) and re.match(r'^\s*\|?\s*:?-{3,}', lines[n])
        if header:
            for cell in line.strip().strip('|').split('|'):
                ms = list(MATH.finditer(cell))
                for i, m in enumerate(ms):   # "Period $$T$$ (s)", "$$v$$ (m/s) or $$I$$ (A)"; "Perihelion ($$a$$)" is a unit
                    pre = cell[ms[i - 1].end() if i else 0:m.start()]
                    post = cell[m.end():ms[i + 1].start() if i + 1 < len(ms) else len(cell)]
                    if not bare(m.group(1)) or pre.rstrip().endswith('(') or re.search(r'\b(?:at|of|inside|in|per|from|to|with|against|versus|vs)\s*$', pre):
                        continue
                    u = re.match(r'\s*\(([^()]*)\)', post)
                    out.append((n, m.group(1), pre if i == 0 or re.search(r'[A-Za-z]{3}', pre) else '',
                                u.group(1) if u and not re.search(r'[A-Za-z]{4}', u.group(1).replace('$$', '')) else '',
                                lead_text(pre)))
            continue
        if line.lstrip().startswith('|'):
            continue
        for m in MATH.finditer(line):
            tex = m.group(1)
            lhs, unit = tex, ''
            v = re.match(r'^(.*?)=\s*[-−]?\s*[\d.]+(?:\s*(?:\\times|\\cdot)\s*10\^\{?[-−]?\d+\}?)?\s*(?:\\[ ,;:]|~|\s)*(.*)$', tex)
            if v:
                lhs, rest = v.group(1), v.group(2)
                piece = r'\\(?:text|mathrm|rm)\s*\{[^{}]*\}|\\rm\s+[A-Za-z]+|\\(?:Omega|mu|cdot|circ)(?![A-Za-z])|\^\s*(?:\{[^{}]*\}|\S)|[/\s~]|\\[ ,;]'
                u = re.match(r'(?:' + piece + r')+', rest)
                after = rest[u.end():] if u else rest
                unit = ''
                if u and re.search(r'\\(?:text|mathrm|rm|Omega|circ)', u.group(0)) and re.fullmatch(r'\s*(?:[,.;:]|\\quad|\\qquad|=|\().*|\s*', after, re.S):
                    unit = re.sub(r'\\(?:text|mathrm|rm)\s*\{([^{}]*)\}|\\rm\s+', r'\1', u.group(0)).strip()   # a unit is upright text
                if (not re.search(r'[A-Za-zµΩ°]', unit) or re.search(r'[A-Za-z]{5,}', unit) or re.search(r'\\(?!mu|Omega|circ|cdot|,|;)', unit)
                        or re.search(r'\^(?!\s*\{?\s*\\prime)', re.sub(r'_\{[^{}]*\}|_.', '', lhs))):
                    unit = ''   # not a plain value with a unit, or a power of the symbol (V² in V²)
            before = MATH.sub(' MATH ', line[:m.start()])
            before = re.split(r'[.;:!?()\[\],]|\*\*|MATH|\band\b|\bor\b', before.rstrip(' '))[-1]   # "the phase, $$Z$$": a list
            ws = re.findall(r"[A-Za-z]+(?:'s)?", before)
            phrase = []   # "the bead volume $$V$$", "that count $$k$$": words after a determiner that name the symbol
            for i in range(len(ws) - 1, max(len(ws) - 5, -1), -1):
                w = ws[i].lower()
                if w in DET or w.endswith("'s"):
                    phrase = ws[i + 1:]   # after "the" or after a possessive: "the bead's volume $$V$$" names V the volume
                    break
                if w in STOP or w in VERBS:
                    break
            seg = re.search(r'(\()\s*([A-Za-z ]+?)\s*,?\s*$', MATH.sub(' MATH ', line[:m.start()]))
            if not phrase and seg and 1 <= len(seg.group(2).split()) <= 3 and not any(
                    w.lower() in STOP or w.lower() in VERBS for w in seg.group(2).split()):
                phrase = seg.group(2).split()   # "(semimajor axis $$a$$", "(first order, $$m = 1$$)"
            phrase = [x for x in phrase if x != 'MATH']
            if len(phrase) > 3 or any("'" in x for x in phrase):
                phrase = []
            if phrase and (phrase[-1].lower() in VERBS or phrase[-1].lower() in STOP):
                phrase = []   # "very small $$h$$": the word before the symbol must name it
            phrase = [x for x in phrase if x.lower() not in VERBS]
            if not bare(lhs):
                continue
            after = re.match(r"^\s*(?:\(|is|stands for|denotes)\s*the\s+([A-Za-z' ]+)", MATH.sub(' MATH ', line[m.end():]))
            if not re.search(r'\b(?:where|with|here|and)\s*$', line[:m.start()]):
                after = None   # "where $$V$$ is the volume"; "$$x$$ is a straight line" says what a graph is, not what x is
            said = ' '.join(phrase) + (' ' + ' '.join(after.group(1).split()[:5]) if after else '')
            if said.strip() or unit:
                out.append((n, tex, said, unit, lead_text(line[:m.start()])))
    return out


def bare(tex):
    """the TeX is one symbol by itself (T, v_1', \\lvert a\\rvert, \\vec F), not an expression such as 1/d or T^2"""
    t = re.sub(r'_\s*(?:\{(?:[^{}]|\{[^{}]*\})*\}|\\[A-Za-z]+|.)', '', tex)
    t = re.sub(r"\^\s*\{?\s*\\prime\s*\}?|'", '', t)
    return not re.search(r'[/^+\-*=()<>\d]|\\(?:frac|sqrt|cdot|times|ln|log|sin|cos|tan|exp|sum|int|propto|approx)(?![A-Za-z])', t)


def read_reviewed():
    out = {}
    if REVIEWED.exists():
        for n, line in enumerate(REVIEWED.read_text().split('\n'), 1):
            s = line.strip()
            if s and not s.startswith('//'):
                p = [x.strip() for x in s.split('|')]
                if len(p) != 4 or not p[3]:
                    sys.exit(f'reviewed.txt line {n}: want "handout | key | what the handout says | why the tip is right"')
                out[(p[0], p[1], ' '.join(p[2].lower().split()))] = n
    return out


def meanings(gl, only=()):
    """every place a handout names a symbol, compared with the tip shown there, and every symbol checked against rules a meaning
    must obey. Reported unless reviewed.txt accepts it:
      words    the handout's words for the symbol ("the bead volume $$V$$") share no word with the tip's meaning
      unit     the handout gives a unit (a table heading, a value) that is not the tip's, even allowing an SI prefix
      euler    e carrying a power that is not a plain number is Euler's number, and e with no power is not
      kelvin   a temperature in T⁴, T³, RT, kT or σT is absolute, so its tip is not in °C
      label    capitals written alone ($$FP$$) or that the prose also writes as a word (KE) are one label, keyed as a whole"""
    rev, used_rev, flags = read_reviewed(), set(), []
    # the words that name quantities anywhere in the glossary: handout words with none of them ("inferred", "keeping") name nothing
    vocab = set().union(*[stems(' '.join(e[:1])) for sec, ks in gl.items() if sec != '@ctx' for e in ks.values()])

    def flag(slug, n, k, what, msg, e):
        key = (slug, k, ' '.join(what.lower().split()))
        if key in rev:
            used_rev.add(key)
            return
        flags.append(f'{slug}.md:{n} {k}: {msg}; the tip says "{e[0]}"' + (f' ({e[1]})' if len(e) > 1 and e[1] else ''))

    for p in sorted(HANDOUTS.glob('*.md')):
        slug = p.stem
        if only and slug not in only:
            continue
        md, comp = p.read_text(), compounds_of(slug, gl)
        for n, tex, said, unit, before in evidence(md):
            marks = []
            ks = keys_in(tex.split('=')[0], None, comp, marks)   # the symbol named; its tip is the one shown in the whole TeX
            if len(ks) != 1:
                continue
            k, e = resolve(slug, gl, tex, ks[0], *marks[0], before)
            if not e:
                continue
            tip = e[0] + ' ' + (e[2] if len(e) > 2 else '')
            if stems(said) & vocab and not stems(said) & stems(tip):
                flag(slug, n, k, said, f'handout says "{said.strip()}"', e)
            if unit and not unit_ok(unit, e[1] if len(e) > 1 else '', e[2] if len(e) > 2 else ''):
                flag(slug, n, k, unit, f'handout gives the unit "{unit}"', e)
        prose = ' '.join(MATH.sub(' ', l) for l in md.split('\n') if not l.lstrip().startswith('|'))
        for m in MATH.finditer(md):
            tex, n, before = m.group(1), md.count('\n', 0, m.start()) + 1, lead_text(md[:m.start()])
            marks = []
            ks = keys_in(tex, None, comp, marks)
            for key, (d, pw) in zip(ks, marks):
                k, e = resolve(slug, gl, tex, key, d, pw, before)
                if not e:
                    continue
                if key == 'e':
                    exp = (bool(pw) and not re.fullmatch(r'\d+', pw)) or bool(re.search(r'(?<![A-Za-z\\])e\s*(?:=|\\approx)\s*2\.71', tex))
                    if exp != e[0].startswith('Euler'):
                        flag(slug, n, k, 'euler ' + nospace(tex), f'e {"with the power " + pw if pw else "with no power"} in $${tex}$$', e)
                if re.fullmatch(r'T(_.*)?', key) and ('°C' in (e[1] if len(e) > 1 else '') or 'Celsius' in e[0]):
                    pat = re.escape(key[0]) + (r'_\{?\s*(?:\\(?:mathrm|rm|text)\s*\{?)?\s*' + re.escape(key[2:]) if '_' in key else '')
                    if (pw in ('3', '4') or re.search(r'(?:[kR]|k_\{?B\}?|\\sigma)\s*' + pat, tex)):
                        flag(slug, n, k, 'kelvin ' + nospace(tex), f'an absolute temperature in $${tex}$$', e)
            t = re.sub(r'_\s*(?:\{(?:[^{}]|\{[^{}]*\})*\}|\\[A-Za-z]+|.)', ' ', strip(tex))
            for run in re.finditer(r'(?<![\\A-Za-z])[A-Z]{2,}(?![A-Za-z])', t):
                lab = run.group(0)
                if lab not in comp and (re.search(r'(?<![A-Za-z])' + lab + r'(?![A-Za-z])', prose) or nospace(tex) == lab):
                    flag(slug, n, lab, 'label ' + lab, f'the handout writes {lab} as a word, but $${tex}$$ is read letter by letter', ['-'])
    if not only:
        flags += [f'reviewed.txt line {n}: no longer needed ({" | ".join(k)})' for k, n in rev.items() if k not in used_rev]
    return flags


def main():
    args = sys.argv[1:]
    if args and args[0] == '--context':
        gl = read_glossary()
        for slug in args[1:]:
            print('==', slug, '==')
            for k, snips in context(slug, (HANDOUTS / (slug + ".md")).read_text(), 2):
                print('  ' + k + site_note(k, gl))
                for s in snips:
                    print('      ' + s)
        return
    gl = read_glossary()
    if args and args[0] == '--occurrences':   # for tools/symcheck.cjs: every symbol of every equation with the meaning it shows
        out = {}
        for p in sorted(HANDOUTS.glob('*.md')):
            slug, md = p.stem, p.read_text()
            comp, eqs = compounds_of(slug, gl), []
            for tex, before in leads(md):
                marks, occ = [], []
                for key, (d, pw) in zip(keys_in(tex, None, comp, marks), marks):
                    k, e = resolve(slug, gl, tex, key, d, pw, before)
                    occ.append([k, e[0] if e else None, (e[1] if len(e) > 1 else '') if e else None])
                eqs.append({'tex': tex, 'before': before, 'occ': occ})
            out[slug] = eqs
        json.dump(out, sys.stdout, ensure_ascii=False)
        return
    if args and args[0] == '--meanings':
        flags = meanings(gl, args[1:])
        for f in flags:
            print(f)
        print(f'{len(flags)} to look at')
        sys.exit(1 if flags else 0)
    check, missing = '--check' in args, '--missing' in args
    stale, bad, slugs = [], [], set()
    for p in sorted(HANDOUTS.glob('*.md')):
        slug = p.stem
        slugs.add(slug)
        deltas, md = set(), p.read_text()
        comp = compounds_of(slug, gl)
        keys = used(md, deltas, comp)
        for k in gl.get(slug, {}):
            if k not in keys and k not in deltas:
                bad.append(f'{slug}: {k} is not in its equations')
        occ = occurrences(md, comp)
        for k, lines in gl['@ctx'].get(slug, {}).items():
            for c, _, n in lines:
                if not any(resolve(slug, gl, tex, key, d, pw, b)[0] == k and ctx_match(c, tex, pw, b) for tex, key, d, pw, b in occ):
                    bad.append(f'glossary.txt line {n}: {slug} has no equation with {k} and "{c}"')
        out = build(slug, keys, gl, deltas)
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
    bad += [f'glossary section "{s}" has no handout' for s in gl if s not in ('site', '@ctx') and s not in slugs]
    if missing:
        return
    for b in bad:
        print(b)
    if check and (stale or bad):
        print('out of date:', ', '.join(stale)) if stale else None
        sys.exit(1)


if __name__ == '__main__':
    main()
