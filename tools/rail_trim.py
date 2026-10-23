"""Trim a demo's sidebar: fixed hint and formula text folds behind one line per section, and the setup description behind
"About this setup".

    python3 tools/rail_trim.py <demo> [<demo> ...]

In each rail section, every <p class="hint"> or <p class="formula"> without an id (fixed text, not a live readout) that is not already
inside a <details> moves into one <details class="more"> where the last of them stood. Its line reads "The model and its formulas"
when the text holds the model or a formula (the house rule keeps approximations on the page), otherwise "More about this".
The preset description (<p class="hint" id="presetHint">) folds behind "About this setup". Nothing is deleted and no id changes.
Running it again does nothing new."""
import re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CSS = """/* vd-trim: folded sidebar text (tools/rail_trim.py) */
.rail details.more > summary { cursor: pointer; font-size: 0.8rem; color: var(--muted); width: fit-content; }
.rail details.more > summary:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
.rail details.more[open] > summary { margin-bottom: 4px; }
.rail details.more > p + p { margin-top: 6px; }
/* /vd-trim */
"""
TEXT = re.compile(r'[ \t]*<p class="(?:hint|formula)"(?![^>]*\bid=)[^>]*>.*?</p>\n?', re.S)


def spans(s, tag):
    """Start and end of every <details ...> ... </details>, nesting counted."""
    out, stack = [], []
    for m in re.finditer(r'<details\b[^>]*>|</details>', s):
        if m.group(0).startswith('<details'):
            stack.append(m.start())
        elif stack:
            out.append((stack.pop(), m.end()))
    return out


def trim_section(sec):
    inside = spans(sec, 'details')
    hits = [m for m in TEXT.finditer(sec) if not any(a <= m.start() < b for a, b in inside)]
    if not hits:
        return sec
    body = '\n'.join(' ' * 10 + m.group(0).strip() for m in hits)
    model = any(re.search(r'>\s*Model\b|class="formula"|Approximation|approximation', m.group(0)) for m in hits)
    label = 'The model and its formulas' if model else 'More about this'
    last = hits[-1]
    block = f'        <details class="more"><summary>{label}</summary>\n{body}\n        </details>\n'
    out = sec[:last.start()] + block + sec[last.end():]
    for m in reversed(hits[:-1]):
        out = out[:m.start()] + out[m.end():]
    return out


def trim(demo):
    p = ROOT / 'demos' / f'{demo}.html'
    s = p.read_text()
    a = s.index('<aside class="rail"'); b = s.index('</aside>', a)
    rail = s[a:b]
    rail = re.sub(r'<section\b.*?</section>', lambda m: trim_section(m.group(0)), rail, flags=re.S)
    rail = re.sub(r'(?<!<summary>About this setup</summary>)(<p class="hint" id="presetHint"[^>]*>.*?</p>)',
                  r'<details class="more"><summary>About this setup</summary>\1</details>', rail, count=1, flags=re.S)
    s = s[:a] + rail + s[b:]
    if '/* vd-trim:' not in s and 'details.more > summary' not in s and 'lib/vd.css' not in s:  # vd.css has it
        i = s.index('</style>'); s = s[:i] + CSS + s[i:]
    p.write_text(s)


if __name__ == '__main__':
    for d in sys.argv[1:]:
        trim(d); print(d)
