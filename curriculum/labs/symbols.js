/* Symbol hover on the student handouts: hover over a symbol in an equation, or tap it, to see what it stands for on this handout
   and its unit. The meanings are written for each handout in curriculum/labs/symbols/glossary.txt and built into
   curriculum/labs/symbols/<handout>.json by tools/symbols.py; a symbol with no meaning there gets no hover. The page's MathJax
   output is read back into the same keys tools/symbols.py makes from the TeX: "T", "theta_0", "I_rms", "k_B", "v_1'". */
(function () {
  'use strict';
  const m = location.pathname.match(/^(.*)\/curriculum\/labs\/students\/([a-z0-9-]+?)(?:\.html)?$/);
  if (!m) return;
  const SLUG = m[2], BASE = m[1];
  let G = null, tip = null, pinned = null, shown = null;

  /* ---------- reading MathJax's CHTML output back into keys ---------- */
  const GREEK = 'alpha beta gamma delta epsilon zeta eta theta iota kappa lambda mu nu xi omicron pi rho sigma sigma tau upsilon phi chi psi omega'.split(' ');
  const UPPER = { 0x393: 'Gamma', 0x394: 'Delta', 0x398: 'Theta', 0x39B: 'Lambda', 0x39E: 'Xi', 0x3A0: 'Pi', 0x3A3: 'Sigma', 0x3A5: 'Upsilon', 0x3A6: 'Phi', 0x3A8: 'Psi', 0x3A9: 'Omega' };
  const OTHER = { 0x1D715: 'partial', 0x1D716: 'epsilon', 0x1D717: 'theta', 0x1D718: 'kappa', 0x1D719: 'phi', 0x1D71A: 'rho', 0x1D71B: 'pi',
    0x3B5: 'epsilon', 0x3F5: 'epsilon', 0x3D1: 'theta', 0x3D5: 'phi', 0x3C6: 'phi', 0x210F: 'hbar', 0x210E: 'h',
    0x22A5: 'perp', 0x2225: 'parallel', 0x221E: 'infty', 0x2299: 'odot', 0x2295: 'oplus', 0x2113: 'ell', 0x2217: 'ast', 0x22C6: 'star', 0x2212: '-' };
  const cps = (node) => Array.from(node.querySelectorAll('mjx-c')).map((c) => {
    const k = Array.from(c.classList).find((x) => /^mjx-c[0-9A-F]+$/.test(x));
    return k ? parseInt(k.slice(5), 16) : -1;
  });
  /* one code point -> its name in a key: a Latin letter in any math style, a Greek letter, a digit; null if none */
  function name(cp) {
    if (OTHER[cp]) return OTHER[cp];
    if (UPPER[cp]) return UPPER[cp];
    if (cp >= 0x3B1 && cp <= 0x3C9) return GREEK[cp - 0x3B1];
    for (const start of [0x1D400, 0x1D434, 0x1D468, 0x1D5A0, 0x1D5D4]) {   /* bold, italic, bold italic, sans, sans bold */
      if (cp >= start && cp < start + 52) { const i = cp - start; return String.fromCharCode(i < 26 ? 65 + i : 97 + i - 26); }
    }
    if (cp >= 0x1D6FC && cp <= 0x1D714) return GREEK[cp - 0x1D6FC];   /* italic small Greek */
    if (cp >= 0x1D6E2 && cp <= 0x1D6FA) { const u = UPPER[cp - 0x1D6E2 + 0x391]; return u || null; }   /* italic capital Greek */
    if ((cp >= 48 && cp <= 57) || (cp >= 65 && cp <= 90) || (cp >= 97 && cp <= 122)) return String.fromCharCode(cp);
    return null;
  }
  const PRIME = new Set([0x2032, 0x2033, 0x27]);
  /* text of a subscript as tools/symbols.py writes it: letters and digits run together, Greek by name, commas and spaces dropped */
  const subText = (node) => cps(node).map((cp) => (cp === 0x2C ? '' : cp === 0x2F ? '/' : cp === 0x2B ? '+' : name(cp))).join('');
  /* the base symbol of an mi: a single italic or bold letter, a Greek letter or ħ; an upright Latin letter is text or a unit */
  function baseName(mi) {
    const c = cps(mi);
    if (c.length !== 1) return null;
    const cp = c[0], cls = mi.querySelector('mjx-c').className;
    if (cp >= 65 && cp <= 122) return /TEX-C\b/.test(cls) ? 'cal' + String.fromCharCode(cp) : /TEX-(I|B|BI)\b/.test(cls) ? String.fromCharCode(cp) : null;
    if (cp === 0x210F) return 'hbar';
    if (cp === 0x210E) return 'h';
    if (cp < 0x1D400 && !UPPER[cp]) return null;   /* upright lowercase Greek is text (\mathrm{\mu}); other signs are not symbols */
    const n = name(cp);
    return n && (n.length === 1 || GREEK.includes(n) || Object.values(UPPER).includes(n)) ? n : null;
  }
  /* the nearest sibling that is not a space */
  const step = (e, dir) => {
    let x = e[dir];
    while (x && (x.tagName === 'MJX-MSPACE' || (x.tagName === 'MJX-MTEXT' && cps(x).every((cp) => cp === 0x20 || cp === 0xA0)))) x = x[dir];
    return x;
  };
  const upright = (e) => { const c = e && /^MJX-(MI|TEXATOM|MTEXT)$/.test(e.tagName) ? cps(e) : [];
    return c.length > 0 && ((c[0] >= 65 && c[0] <= 90) || (c[0] >= 97 && c[0] <= 122)) && !e.querySelector('mjx-c.TEX-I'); };
  const kids = (e) => Array.from(e.children).filter((k) => k.tagName !== 'MJX-SPACER');
  const isScript = (e) => /^MJX-(MSUB|MSUP|MSUBSUP)$/.test(e.tagName);
  const ARROW = new Set([0x2192, 0x20D7]);
  /* the mi at the core of a base: itself, or inside a TeXAtom, or under a \vec arrow (any other accent: none) */
  function coreMi(e) {
    while (e && e.tagName === 'MJX-TEXATOM' && kids(e).length === 1) e = kids(e)[0];
    if (!e) return null;
    if (e.tagName === 'MJX-MI') return e;
    if (e.tagName === 'MJX-MOVER') {
      const over = e.querySelector(':scope > mjx-over'), base = e.querySelector(':scope > mjx-base');
      if (over && base && cps(over).every((cp) => ARROW.has(cp))) return coreMi(kids(base)[0]);
    }
    return null;
  }
  const climb = (e) => { while (e && e.tagName === 'MJX-TEXATOM' && kids(e).length === 1) e = e.parentElement; return e; };
  const allPrimes = (e) => { const c = cps(e); return c.length > 0 && c.every((cp) => PRIME.has(cp)); };
  /* a symbol with a subscript or prime: the whole of it is one key; with a power (T²) the key is the base's */
  function holderKey(holder) {
    const base = coreMi(kids(holder)[0]);
    if (!base) return null;
    const b = baseName(base);
    if (!b || b === 'pi') return null;
    const script = holder.querySelector(':scope > mjx-script'), parts = script ? kids(script) : [];
    let sub = '', primes = 0;
    if (holder.tagName === 'MJX-MSUB') sub = subText(script);
    else if (parts.length) {
      if (allPrimes(parts[0])) primes = cps(parts[0]).reduce((n, cp) => n + (cp === 0x2033 ? 2 : 1), 0);
      if (holder.tagName === 'MJX-MSUBSUP') sub = subText(parts[parts.length - 1]);
    }
    const key = b + (sub ? '_' + sub : '') + "'".repeat(primes);
    return [sub || primes ? holder : base, key];
  }
  /* the element a pointer is over -> [element to highlight, key], or null */
  function keyAt(node) {
    if (!node || !node.closest || !node.closest('mjx-container')) return null;
    /* in a subscript, or on a prime: the hover belongs to the symbol they are attached to */
    let s = node.closest('mjx-script');
    while (s && isScript(s.parentElement)) {
      const holder = s.parentElement, parts = kids(s);
      const inSup = holder.tagName === 'MJX-MSUP' || (holder.tagName === 'MJX-MSUBSUP' && parts[0] && parts[0].contains(node));
      if (!inSup || allPrimes(parts[0])) { const r = holderKey(holder); return r && G && G[r[1]] ? r : null; }
      break;   /* in a power: the symbols there are symbols in their own right (e^(−t/τ)) */
    }
    const mi = node.closest('mjx-mi');
    if (!mi) return null;
    let up = climb(mi.parentElement);
    if (up && up.tagName === 'MJX-BASE') up = climb(up.parentElement && up.parentElement.parentElement);
    if (up && isScript(up) && coreMi(kids(up)[0]) === mi) { const r = holderKey(up); return r && G && G[r[1]] ? r : null; }
    const lim = mi.closest('mjx-script');   /* the i under a sum, set inline or below */
    if (mi.closest('mjx-under, mjx-over') || (lim && /^MJX-(MUNDER|MOVER|MUNDEROVER)$/.test(lim.parentElement.tagName))) return null;
    const mo = mi.closest('mjx-mover');   /* under a hat, bar, tilde or dot: not keyed; under a \vec arrow: keyed by its letter */
    if (mo) {
      const over = mo.querySelector(':scope > mjx-over'), base = mo.querySelector(':scope > mjx-base');
      if (!over || !base || !cps(over).every((cp) => ARROW.has(cp)) || coreMi(kids(base)[0]) !== mi) return null;
    }
    const b = baseName(mi);
    if (!b || b === 'pi') return null;
    /* µF, 10 Ω: a unit prefix or unit, not a symbol */
    if ((b === 'mu' || b === 'Omega') && upright(step(mi, 'nextElementSibling'))) return null;
    if (b === 'Omega') { const pv = step(mi, 'previousElementSibling'); if (pv && pv.tagName === 'MJX-MN') return null; }
    /* Δt, dx, δx: an operator in front of a symbol */
    if (b === 'Delta' || b === 'd' || b === 'delta') {
      const nx = mi.nextElementSibling;
      if (nx && (/^MJX-(MI|MSUB|MSUP|MSUBSUP|TEXATOM|MOVER)$/.test(nx.tagName) || (nx.tagName === 'MJX-MO' && cps(nx)[0] === 0x27E8))) return null;
    }
    return G && G[b] ? [mi, b] : null;
  }

  /* ---------- the tip ---------- */
  function css() {
    const st = document.createElement('style');
    st.textContent = `
.sym-tip { position: absolute; z-index: 50; max-width: min(22em, calc(100vw - 24px)); box-sizing: border-box; padding: 8px 11px; border-radius: 8px;
  background: var(--sym-bg, #fff); color: var(--sym-fg, #1f2328); border: 1px solid var(--sym-line, #8c959f); box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
  font-size: 14px; line-height: 1.4; pointer-events: none; }
.sym-tip.sym-pinned { pointer-events: auto; }
.sym-tip .sym-head { display: flex; align-items: baseline; gap: 8px; }
.sym-tip .sym-math { font-size: 1.15em; }
.sym-tip .sym-name { font-weight: 600; }
.sym-tip .sym-unit, .sym-tip .sym-note { color: var(--sym-dim, #57606a); margin-top: 2px; }
mjx-container .sym-on { cursor: help; background: var(--sym-hi, rgba(9, 105, 218, 0.14)); border-radius: 3px; }
.sym-hint { font-size: 0.9em; color: var(--sym-dim, #57606a); }
.sym-tip.sym-dark { --sym-bg: #161b22; --sym-fg: #e6edf3; --sym-line: #6e7681; --sym-dim: #9da7b3; }
@media print { .sym-tip, .sym-hint { display: none !important; } mjx-container .sym-on { background: none; } }`;
    document.head.appendChild(st);
  }
  /* the tip matches the page under it, whichever way the page sets its theme */
  function darkPage() {
    for (let e = document.querySelector('.markdown-body') || document.body; e; e = e.parentElement) {
      const c = getComputedStyle(e).backgroundColor.match(/[\d.]+/g);
      if (c && (c.length < 4 || +c[3] > 0)) return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2] < 128;
    }
    return false;
  }
  function hide() {
    if (shown) shown.classList.remove('sym-on');
    shown = null; pinned = null;
    if (tip) { tip.hidden = true; tip.classList.remove('sym-pinned'); }
  }
  function show(target, key, pin) {
    const e = G[key];
    if (!tip) {
      tip = document.createElement('div');
      tip.className = 'sym-tip tex2jax_ignore';
      tip.setAttribute('role', 'tooltip');
      tip.id = 'sym-tip';
      document.body.appendChild(tip);
    }
    if (shown && shown !== target) shown.classList.remove('sym-on');
    shown = target; target.classList.add('sym-on');
    tip.textContent = '';
    const head = document.createElement('div'); head.className = 'sym-head';
    /* the symbol as it looks in the equation: a copy of its MathJax output */
    const box = document.createElement('mjx-container');
    box.className = 'MathJax sym-math'; box.setAttribute('jax', 'CHTML');
    const mm = document.createElement('mjx-math'); mm.className = 'MJX-TEX';
    const copy = target.cloneNode(true); copy.classList.remove('sym-on');
    mm.appendChild(copy); box.appendChild(mm); head.appendChild(box);
    const nm = document.createElement('span'); nm.className = 'sym-name'; nm.textContent = e[0]; head.appendChild(nm);
    tip.appendChild(head);
    if (e[1]) { const u = document.createElement('div'); u.className = 'sym-unit'; u.textContent = 'Unit: ' + e[1]; tip.appendChild(u); }
    if (e[2]) { const n = document.createElement('div'); n.className = 'sym-note'; n.textContent = e[2]; tip.appendChild(n); }
    tip.hidden = false;
    tip.classList.toggle('sym-pinned', !!pin);
    tip.classList.toggle('sym-dark', darkPage());
    pinned = pin ? target : null;
    const r = target.getBoundingClientRect(), w = tip.offsetWidth, h = tip.offsetHeight;
    let x = r.left + window.scrollX + r.width / 2 - w / 2;
    x = Math.max(window.scrollX + 12, Math.min(x, window.scrollX + document.documentElement.clientWidth - w - 12));
    let y = r.bottom + window.scrollY + 8;
    if (r.bottom + h + 16 > window.innerHeight && r.top - h - 8 > 0) y = r.top + window.scrollY - h - 8;
    tip.style.left = x + 'px'; tip.style.top = y + 'px';
  }

  function start() {
    css();
    document.addEventListener('mouseover', (ev) => {
      if (pinned) return;
      const k = keyAt(ev.target);
      if (k) show(k[0], k[1], false); else if (shown) hide();
    });
    document.addEventListener('click', (ev) => {
      if (tip && tip.contains(ev.target)) return;
      const k = keyAt(ev.target);
      if (k && pinned !== k[0]) { show(k[0], k[1], true); return; }
      if (pinned || shown) hide();
    });
    document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') hide(); });
    window.addEventListener('resize', () => { if (!pinned) hide(); });
    /* one line telling students the symbols explain themselves, under the link to the demo */
    const link = document.querySelector('.markdown-body a[href*="/demos/"]');
    const p = link && link.closest('p');
    if (p) {
      const hint = document.createElement('p');
      hint.className = 'sym-hint';
      hint.textContent = 'Hover over a symbol in an equation, or tap it, to see what it stands for.';
      p.after(hint);
    }
  }

  fetch(BASE + '/curriculum/labs/symbols/' + SLUG + '.json').then((r) => (r.ok ? r.json() : null)).then((g) => {
    if (!g || !Object.keys(g).length) return;
    G = g;
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
  }).catch(() => {});
  /* for tools: every key this page's equations show, to compare with tools/symbols.py */
  window.vdSymbolKeys = () => {
    const out = new Set(), keep = G; G = new Proxy({}, { get: () => true });
    document.querySelectorAll('.markdown-body mjx-container mjx-c').forEach((c) => { const k = keyAt(c); if (k) out.add(k[1]); });
    G = keep;
    return Array.from(out);
  };
})();
