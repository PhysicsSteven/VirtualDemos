"""Put a large "Handout and worksheet" button at the top of a demo's sidebar (the handout and its interactive worksheet are one page).

    python3 tools/handout_button.py <demo> [<demo> ...]     (or --all for every demo with a handout)

The handouts come from the demo's "handouts" list in curriculum/textbook-map.json (only those with a students/<h>.md). One handout gives
one button; several give the same button opening a drop-down, labelled as on the course pages ("Worksheet 1: Kirchhoff's Rules").
The link opens the window named <handout>-worksheet, the same one Export to worksheet's "Open the worksheet" uses.
Running it again replaces the button, so it is safe to rerun after the handouts change."""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / 'tools'))
from courses import handout_label  # noqa: E402

ICON = ('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" '
        'aria-hidden="true"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/></svg>')
CSS = """/* vd-handout: the handout and worksheet button at the top of the sidebar (tools/handout_button.py) */
.handout, .handout-menu > summary { position: sticky; top: 0; z-index: 2; display: flex; align-items: center; justify-content: center; gap: 8px; margin: 0; padding: 12px 14px; font-weight: 700; font-size: 0.98rem; color: var(--canvas); background: var(--accent); border-radius: 9px 9px 0 0; text-decoration: none; cursor: pointer; }
.handout-menu { position: sticky; top: 0; z-index: 2; }
.handout-menu > summary { position: static; list-style: none; }
.handout-menu > summary::-webkit-details-marker { display: none; }
.handout-menu > summary::after { content: "▾"; font-size: 0.9rem; }
.handout-menu[open] > summary::after { content: "▴"; }
.handout-menu ul { list-style: none; margin: 0; padding: 6px; display: flex; flex-direction: column; gap: 2px; background: var(--surface); border-bottom: 1px solid var(--line); }
.handout-menu li a { display: block; padding: 8px 10px; border-radius: 6px; color: var(--accent); font-weight: 600; text-decoration: none; }
.handout-menu li a:hover { background: color-mix(in srgb, var(--accent) 12%, transparent); }
.handout:hover, .handout-menu > summary:hover { filter: brightness(1.08); }
.handout:focus-visible, .handout-menu > summary:focus-visible, .handout-menu li a:focus-visible { outline: 3px solid var(--ink); outline-offset: -3px; }
.handout svg, .handout-menu svg { width: 18px; height: 18px; flex: none; }
/* /vd-handout */
"""


def handouts():
    m = json.loads((ROOT / 'curriculum' / 'textbook-map.json').read_text())
    return {d['demo']: [h for h in d.get('handouts') or [] if (ROOT / 'curriculum' / 'labs' / 'students' / f'{h}.md').exists()]
            for d in m['demos']}


def markup(hs):
    url = lambda h: f'../curriculum/labs/students/{h}.html'
    if len(hs) == 1:
        h = hs[0]
        return f'<a class="handout" href="{url(h)}" target="{h}-worksheet">{ICON}Handout and worksheet</a>'
    items = ''.join(f'<li><a href="{url(h)}" target="{h}-worksheet">{handout_label(h, i)}</a></li>' for i, h in enumerate(hs, 1))
    return f'<details class="handout-menu"><summary>{ICON}Handouts and worksheets</summary><ul>{items}</ul></details>'


def apply(demo, hs):
    p = ROOT / 'demos' / f'{demo}.html'
    s = p.read_text()
    s = re.sub(r'\n *<!-- vd-handout -->.*?<!-- /vd-handout -->', '', s, flags=re.S)
    s = re.sub(r'\n?/\* vd-handout:.*?/\* /vd-handout \*/\n', '\n', s, flags=re.S)
    if hs:
        m = re.search(r'<aside class="rail"[^>]*>', s)
        if not m:
            raise SystemExit(f'{demo}: no <aside class="rail">')
        s = s[:m.end()] + f'\n      <!-- vd-handout -->{markup(hs)}<!-- /vd-handout -->' + s[m.end():]
        i = s.index('</style>')
        s = s[:i] + CSS + s[i:]
    p.write_text(s)
    return hs


if __name__ == '__main__':
    H = handouts()
    names = [d for d, hs in H.items() if hs] if sys.argv[1:] == ['--all'] else sys.argv[1:]
    for d in names:
        print(d, apply(d, H.get(d, [])))
