"""Activity labels and Start here (Steve 2026-11-16, from an outside review: "make the collection easier to teach from").

Two sources, both read by tools/courses.py, which calls the functions here while it builds the site:

  curriculum/activity-labels.json   for every worksheet: student minutes (min), the math it needs (algebra or calculus), its level
                                    (intro or upper) and what a student should know first (needs, needs_es)
  curriculum/start-here.json        for the big demos with many modes: a 5 minute Start here (one question, one setup, one
                                    observation) and a 15 minute Explore further (up to three short follow ups in the richer modes)

Three lengths of activity, which the home and topic page filters use:
  start    Start here, about 5 minutes: a class demonstration or a student's first look. No math.
  explore  Start here plus Explore further, about 15 minutes. No math beyond reading a readout.
  sheet    a full worksheet, up to 75 minutes as homework (its own minutes, math and needs from activity-labels.json)

Written here: demos/lib/starthere.js (the Start here fold in a demo's sidebar; demos/lib/vd.js loads it on every demo).
English and Spanish both live in start-here.json and the script picks the page's language, so the fold is marked
data-i18n-skip and the harvest leaves it alone (the strings are not page text the catalogs could follow).
"""
import html
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LABELS = ROOT / 'curriculum' / 'activity-labels.json'
START = ROOT / 'curriculum' / 'start-here.json'
esc = html.escape


def labels():
    """{slug: {min, math, level, needs, needs_es}} for every worksheet that has a label."""
    if not LABELS.exists():
        return {}
    return json.loads(LABELS.read_text())['worksheets']


def start_here(path=None):
    """{demo: entry} from curriculum/start-here.json (or another file of the same shape, for tools/startcheck.cjs --data)."""
    f = Path(path) if path else START
    if not f.exists():
        return {}
    return json.loads(f.read_text())['demos']


def start_href(name, entry, extra=''):
    """The address that opens a demo with its Start here set up and the fold open (relative to the site root)."""
    q = '&'.join(x for x in [entry.get('setup', ''), 'start=1', extra] if x)
    return f'demos/{name}.html?{q}'


def sheet_meta(slug, lab=None):
    """The short label after a worksheet link: "70 min · algebra" ("calculus"), or '' with no label."""
    lab = lab if lab is not None else labels().get(slug)
    if not lab:
        return ''
    return f'{lab["min"]} min · {"calculus" if lab["math"] == "calculus" else "algebra"}'


def demo_kinds(demo, sheets, lab, sh):
    """The filter words a demo card carries (data-act): start and explore when it has a Start here, and for each worksheet
    sheet-algebra or sheet-calculus; plus math-none for a Start here (no math)."""
    out = []
    if demo in sh:
        out += ['start'] + (['explore'] if sh[demo].get('explore') else [])
    for h in sheets:
        x = lab.get(h)
        if x:
            out.append('sheet-' + x['math'])
    return ' '.join(dict.fromkeys(out))


# The filter bar on the home page (subject folds) and the topic pages (the demo list). It filters the cards that carry
# data-act (demo_kinds above). Kept in sessionStorage (vd-filter) so a teacher moving between topic pages keeps it.
FILTER_BAR = ('<div class="actfilter" role="group" aria-label="Filter by activity">'
              '<span class="afl">Activity</span>'
              '<button type="button" data-af="len:" aria-pressed="true">Any</button>'
              '<button type="button" data-af="len:start" aria-pressed="false">Start here, 5 min</button>'
              '<button type="button" data-af="len:explore" aria-pressed="false">Explore, 15 min</button>'
              '<button type="button" data-af="len:sheet" aria-pressed="false">Worksheet, up to 75 min</button>'
              '<span class="afl">Math</span>'
              '<button type="button" data-af="math:" aria-pressed="true">Any</button>'
              '<button type="button" data-af="math:algebra" aria-pressed="false">Algebra</button>'
              '<button type="button" data-af="math:calculus" aria-pressed="false">Calculus</button>'
              '<p class="afn" aria-live="polite"></p></div>')

FILTER_CSS = '''
/* activity filter and labels (tools/activities.py) */
.actfilter { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 6px; margin: 14px 0 4px; }
.actfilter .afl { font-family: var(--font-mono); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.04em; color: var(--muted); margin: 0 2px 0 6px; }
.actfilter .afl:first-child { margin-left: 0; }
.actfilter button { min-height: 34px; padding: 4px 11px; font: inherit; font-size: 0.86rem; color: var(--ink); background: var(--surface); border: 1px solid var(--line); border-radius: 999px; cursor: pointer; }
.actfilter button:hover { border-color: var(--accent); }
.actfilter button[aria-pressed="true"] { color: var(--canvas); background: var(--accent); border-color: var(--accent); font-weight: 700; }
.actfilter button:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
.actfilter .afn { flex: 1 1 100%; margin: 2px 0 0; font-size: 0.85rem; color: var(--muted); min-height: 1.2em; }
[data-act].af-hide { display: none !important; }
.find .actfilter + .allnote { margin: 10px 0 22px; }
.fam.af-hide { display: none; }
.sh-tag { display: inline-block; margin-right: 6px; padding: 1px 7px; font-size: 0.74rem; font-weight: 700; border-radius: 999px; color: var(--accent); border: 1px solid color-mix(in srgb, var(--accent) 55%, transparent); }
.links .wsm { display: inline-block; text-decoration: none; font-size: 0.78rem; color: var(--muted); font-weight: 400; margin-left: 5px; }
.used.needs { font-size: 0.85rem; }
.used.needs b { font-weight: 700; }
@media (max-width: 520px) { .actfilter .afl { flex: 1 1 100%; margin-left: 0; } }
'''

# Filters cards with data-act. On the home page the subject folds that hold a match open (as search does); with nothing chosen
# they go back to how the visitor left them.
FILTER_JS = r'''<script>/* activity filter (tools/activities.py) */ (function () {
  var bar = document.querySelector('.actfilter'); if (!bar) return;
  var st = { len: '', math: '' }, KEY = 'vd-filter', note = bar.querySelector('.afn');
  try { var s = JSON.parse(sessionStorage.getItem(KEY) || '{}'); if (s && typeof s === 'object') { st.len = s.len || ''; st.math = s.math || ''; } } catch (_) {}
  var cards = [].slice.call(document.querySelectorAll('[data-act]'));
  var fams = [].slice.call(document.querySelectorAll('section.fam'));
  var match = function (a) {
    var k = (a || '').split(' ');
    var sheetOk = function () { return st.math ? k.indexOf('sheet-' + st.math) >= 0 : k.some(function (x) { return x.indexOf('sheet-') === 0; }); };
    if (st.len === 'start') return k.indexOf('start') >= 0 && st.math !== 'calculus';
    if (st.len === 'explore') return k.indexOf('explore') >= 0 && st.math !== 'calculus';
    if (st.len === 'sheet') return sheetOk();
    if (!st.math) return true;
    return sheetOk() || (st.math === 'algebra' && k.indexOf('start') >= 0);
  };
  var apply = function () {
    [].forEach.call(bar.querySelectorAll('button'), function (b) { var p = b.getAttribute('data-af').split(':'); b.setAttribute('aria-pressed', String(st[p[0]] === p[1])); });
    var on = !!(st.len || st.math), n = 0;
    cards.forEach(function (c) { var ok = !on || match(c.getAttribute('data-act')); c.classList.toggle('af-hide', !ok); if (ok) n++; });
    fams.forEach(function (f) {
      var any = [].some.call(f.querySelectorAll('[data-act]'), function (c) { return !c.classList.contains('af-hide'); });
      f.classList.toggle('af-hide', on && !any);
      var d = f.querySelector('details.famd');
      if (d) { if (on && any && !d.open) { d.dataset.af = '1'; d.open = true; } else if (!on && d.dataset.af) { delete d.dataset.af; d.open = false; } }
    });
    var VDI18N = window.VDI18N && window.VDI18N.t ? window.VDI18N : { t: function (x, v) { return x.replace('{n}', v ? v.n : ''); } };   /* the literals go into the site catalog */
    note.textContent = on ? (n === 1 ? VDI18N.t('One demo has an activity like that.') : n ? VDI18N.t('{n} demos have an activity like that.', { n: n })
      : VDI18N.t('No demo has that combination. A Start here needs no math; try Any.')) : '';
    try { sessionStorage.setItem(KEY, JSON.stringify(st)); } catch (_) {}
  };
  bar.addEventListener('click', function (e) {
    var b = e.target.closest('button[data-af]'); if (!b) return;
    var p = b.getAttribute('data-af').split(':'); st[p[0]] = p[1]; apply();
  });
  apply();
})();</script>'''


STARTHERE_JS = r'''/* Start here (demos/lib/starthere.js). Generated by tools/activities.py (through tools/courses.py) from curriculum/start-here.json:
   edit the data, not this file. demos/lib/vd.js loads it on every demo; it does nothing on a demo with no entry.
   A fold in the sidebar under the worksheet and How this works buttons: Start here, about 5 minutes (one question, a Set it up
   link that reopens the demo in that setup, what to do, and What you should see, closed so a student predicts first), then
   Explore further, about 15 minutes (up to three short follow ups, each with its own setup). ?start=1 in the address opens it.
   Set it up keeps ?course=, ?topic= and ?lang= and replaces every other setting (set= is the demo's own Copy link format).
   English and Spanish are both here; the fold is data-i18n-skip so the page translation leaves it alone. */
(() => {
  const DATA = __DATA__;
  const UI = __UI__;
  const here = location.pathname.split('/').pop().replace(/\.html$/, '');
  const e = DATA[here];
  if (!e) return;
  const run = () => {
    const rail = document.querySelector('.rail');
    if (!rail || document.getElementById('vdStart')) return;
    const L = (window.VDI18N && VDI18N.lang === 'es') ? 'es' : 'en';
    const T = (o, k) => (L === 'es' && o[k + '_es']) || o[k];
    const u = UI[L];
    const P = new URLSearchParams(location.search);
    const go = (setup, step) => {
      const q = new URLSearchParams(setup || '');
      for (const k of ['course', 'topic', 'lang']) if (P.get(k)) q.set(k, P.get(k));
      q.set('start', step || '1');
      return here + '.html?' + q.toString();
    };
    const step = P.get('start');
    const d = document.createElement('details');
    d.className = 'vd-start'; d.id = 'vdStart'; d.setAttribute('data-i18n-skip', ''); d.setAttribute('data-vd-noshare', '');
    if (step) d.open = true;
    const ex = (e.explore || []).map((x, i) => `<li${step === 'e' + (i + 1) ? ' class="on"' : ''}><p>${T(x, 'do')} <a class="vd-start-go sm" href="${go(x.setup, 'e' + (i + 1))}">${u.setup}</a></p>`
      + `<details><summary>${u.see}</summary><p>${T(x, 'see')}</p></details></li>`).join('');
    d.innerHTML = `<summary><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4l14 8-14 8z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>${u.title}<span class="vd-start-min">${u.five}</span></summary>`
      + `<div class="vd-start-body"><p class="vd-start-q">${T(e, 'q')}</p>`
      + `<p><a class="vd-start-go" href="${go(e.setup, '1')}">${u.setup}</a> <span class="vd-start-hint">${u.hint}</span></p>`
      + `<p>${T(e, 'do')}</p>`
      + `<details class="vd-start-see"><summary>${u.see}</summary><p>${T(e, 'see')}</p></details>`
      + (ex ? `<h3>${u.explore}<span class="vd-start-min">${u.fifteen}</span></h3><ol>${ex}</ol>` : '')
      + `</div>`;
    const css = document.createElement('style');
    css.textContent = `.vd-start{margin:10px 14px 0;border:1.5px solid var(--accent);border-radius:9px;background:color-mix(in srgb,var(--accent) 6%,var(--surface))}
.vd-start>summary{display:flex;align-items:center;gap:8px;padding:9px 12px;font-weight:700;font-size:.95rem;color:var(--accent);cursor:pointer;list-style:none}
.vd-start>summary::-webkit-details-marker{display:none}
.vd-start>summary svg{width:18px;height:18px;flex:none}
.vd-start>summary::after{content:"▾";margin-left:auto;font-size:.85rem}.vd-start[open]>summary::after{content:"▴"}
.vd-start>summary:focus-visible,.vd-start a:focus-visible,.vd-start summary:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.vd-start-min{font-weight:400;font-size:.78rem;color:var(--muted);margin-left:4px}
.vd-start-body{padding:0 12px 10px;font-size:.9rem;line-height:1.45;color:var(--ink)}
.vd-start-body p{margin:6px 0}.vd-start-q{font-weight:700;font-size:.97rem}
.vd-start-go{display:inline-block;padding:4px 10px;border-radius:7px;background:var(--accent);color:var(--canvas);font-weight:700;text-decoration:none;font-size:.86rem}
.vd-start-go.sm{padding:1px 8px;font-size:.8rem}
.vd-start-hint{font-size:.78rem;color:var(--muted)}
.vd-start details summary{cursor:pointer;color:var(--accent);font-weight:600;font-size:.86rem}
.vd-start h3{margin:12px 0 4px;font-size:.88rem;font-family:var(--font-mono,monospace);text-transform:uppercase;letter-spacing:.03em;color:var(--muted)}
.vd-start ol{margin:0;padding-left:20px}.vd-start li{margin:0 0 8px}.vd-start li.on>p{font-weight:600}
@media print{.vd-start{display:none}}`;
    document.head.appendChild(css);
    const after = rail.querySelector('#vdHowTo') || rail.querySelector('.handout-menu, .handout');
    if (after) after.insertAdjacentElement('afterend', d); else rail.insertBefore(d, rail.firstChild);
    if (step && step !== '1') { const li = d.querySelector('li.on'); if (li) li.scrollIntoView({ block: 'nearest' }); }
    window.dispatchEvent(new Event('resize'));
  };
  /* after the demo has built its sidebar and How this works button */
  if (document.readyState === 'complete') setTimeout(run, 0); else window.addEventListener('load', () => setTimeout(run, 0));
})();
'''

UI = {
    'en': {'title': 'Start here', 'five': 'about 5 min', 'fifteen': 'about 15 min', 'setup': 'Set it up',
           'hint': 'reopens the demo ready', 'see': 'What you should see', 'explore': 'Explore further'},
    'es': {'title': 'Empieza aquí', 'five': 'unos 5 min', 'fifteen': 'unos 15 min', 'setup': 'Prepáralo',
           'hint': 'vuelve a abrir la demostración lista', 'see': 'Lo que deberías ver', 'explore': 'Explora más'},
}


def starthere_js(path=None):
    dump = lambda x: json.dumps(x, ensure_ascii=False, separators=(',', ':'))
    keep = ('q', 'q_es', 'setup', 'do', 'do_es', 'see', 'see_es', 'explore')
    data = {}
    for n, e in sorted(start_here(path).items()):
        x = {k: e[k] for k in keep if k in e}
        if 'explore' in x:
            x['explore'] = [{k: y[k] for k in ('setup', 'do', 'do_es', 'see', 'see_es') if k in y} for y in x['explore']]
        data[n] = x
    return STARTHERE_JS.replace('__DATA__', dump(data)).replace('__UI__', dump(UI))


if __name__ == '__main__':   # python3 tools/activities.py --js <data.json>: the starthere.js that data would give (tools/startcheck.cjs --data)
    import sys
    if sys.argv[1:2] == ['--js']:
        sys.stdout.write(starthere_js(sys.argv[2]))
