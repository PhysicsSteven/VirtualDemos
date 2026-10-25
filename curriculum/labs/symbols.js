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
    for (const start of [0x1D6C2, 0x1D6FC, 0x1D736]) if (cp >= start && cp <= start + 24) return GREEK[cp - start];   /* bold, italic, bold italic small Greek */
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
    if (cp === 0x2113) return 'ell';
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
  /* text in a unit: \text{...}, or one upright letter (\mathrm k); a function name such as ln is not */
  const upright = (e) => { const c = e && (/^MJX-(TEXATOM|MTEXT)$/.test(e.tagName) || (e.tagName === 'MJX-MI' && cps(e).length === 1)) ? cps(e) : [];
    return c.length > 0 && ((c[0] >= 65 && c[0] <= 90) || (c[0] >= 97 && c[0] <= 122)) && !e.querySelector('mjx-c.TEX-I'); };
  const kids = (e) => Array.from(e.children).filter((k) => k.tagName !== 'MJX-SPACER');
  const isScript = (e) => /^MJX-(MSUB|MSUP|MSUBSUP)$/.test(e.tagName);
  const ARROW = new Set([0x2192, 0x20D7]);
  /* the accent over a symbol, by its code point, named as tools/symbols.py names it ("hat n", "bar v", "tilde nu_0") */
  const ACCENT = { 0x2C6: 'hat', 0x5E: 'hat', 0x302: 'hat', 0xAF: 'bar', 0x2C9: 'bar', 0x304: 'bar', 0x305: 'bar', 0x2015: 'bar', 0x2014: 'bar', 0x2013: 'bar', 0x203E: 'bar',
    0x2DC: 'tilde', 0x7E: 'tilde', 0x303: 'tilde', 0x2D9: 'dot', 0x307: 'dot', 0xA8: 'ddot', 0x308: 'ddot', 0x2C7: 'check', 0x2D8: 'breve' };
  const FUNCS = new Set('sin cos tan sinh cosh tanh arcsin arccos arctan sec csc cot ln log lg exp det'.split(' '));
  const unwrap = (e) => { while (e && e.tagName === 'MJX-TEXATOM' && kids(e).length === 1) e = kids(e)[0]; return e; };
  const climb = (e) => { while (e && e.tagName === 'MJX-TEXATOM' && kids(e).length === 1) e = e.parentElement; return e; };
  const allPrimes = (e) => { const c = cps(e); return c.length > 0 && c.every((cp) => PRIME.has(cp)); };
  const isSign = (e) => { const c = cps(e); return c.length === 1 && (c[0] === 0x2B || c[0] === 0x2D || c[0] === 0x2212); };
  /* an accent over a symbol: its name, or '' for a \vec arrow (keyed by its letter), or null for anything else */
  function accentOf(mo) {
    const over = mo.querySelector(':scope > mjx-over'), base = mo.querySelector(':scope > mjx-base');
    if (!over || !base) return null;
    /* a wide accent is drawn stretched (\overline): its code point is on the mjx-stretchy-h, its pieces carry none */
    const st = over.querySelector('mjx-stretchy-h'), sk = st && Array.from(st.classList).find((x) => /^mjx-c[0-9A-F]+$/.test(x));
    const c = sk ? [parseInt(sk.slice(5), 16)] : cps(over).filter((cp) => cp >= 0);
    if (c.length && c.every((cp) => ARROW.has(cp))) return '';
    const names = new Set(c.map((cp) => ACCENT[cp]));
    return names.size === 1 && !names.has(undefined) ? [...names][0] : null;
  }
  /* a base -> [element, key]: a letter, a letter under a \vec arrow (keyed by the letter), or an accented symbol ("hat n") */
  function baseKey(e) {
    e = unwrap(e);
    if (!e) return null;
    if (e.tagName === 'MJX-MI') { const b = baseName(e); return b && b !== 'pi' ? [e, b] : null; }
    if (e.tagName === 'MJX-MOVER') {
      const acc = accentOf(e), base = e.querySelector(':scope > mjx-base');
      if (acc === '') return baseKey(kids(base)[0]);
      if (acc) { const inner = cps(base).map(name).join(''); return inner ? [e, acc + ' ' + inner] : null; }
    }
    return null;
  }
  /* a symbol with a subscript or prime: the whole of it is one key; with a power (T²) the key is the base's */
  function holderKey(holder) {
    const bk = baseKey(kids(holder)[0]);
    if (!bk) return null;
    const script = holder.querySelector(':scope > mjx-script'), parts = script ? kids(script) : [];
    let sub = '', primes = 0, power = false;
    if (holder.tagName === 'MJX-MSUB') sub = subText(script);
    else if (parts.length) {
      if (allPrimes(parts[0])) primes = cps(parts[0]).reduce((n, cp) => n + (cp === 0x2033 ? 2 : 1), 0);
      else if (!isSign(parts[0])) power = cps(parts[0]).every((cp) => cp >= 48 && cp <= 57) ? 'number' : true;
      if (holder.tagName === 'MJX-MSUBSUP') sub = subText(parts[parts.length - 1]);
    }
    return { el: sub || primes ? holder : bk[0], key: bk[1] + (sub ? '_' + sub : '') + "'".repeat(primes), power };
  }
  /* a symbol written after a Δ operator: "Delta X" when the handout gives ΔX a meaning of its own, else X */
  function delta(r) {
    if (!r) return null;
    const pv = r.el.previousElementSibling;
    if (G && pv && pv.tagName === 'MJX-MI' && baseName(pv) === 'Delta' && G['Delta ' + r.key]) r.key = 'Delta ' + r.key;
    return r;
  }
  /* a whole label written as several letters (FP, the far point): the letters next to this one spell a label the handout has */
  function compound(mi, b) {
    for (const c of Object.keys(G || {})) {
      if (!/^[A-Z]{2,}$/.test(c)) continue;
      for (let i = c.indexOf(b); i >= 0; i = c.indexOf(b, i + 1)) {
        const els = [mi];
        let ok = true, e = mi;
        for (let j = i - 1; ok && j >= 0; j--) { e = e.previousElementSibling; ok = !!e && e.tagName === 'MJX-MI' && baseName(e) === c[j]; if (ok) els.unshift(e); }
        e = mi;
        for (let j = i + 1; ok && j < c.length; j++) { e = e.nextElementSibling; ok = !!e && e.tagName === 'MJX-MI' && baseName(e) === c[j]; if (ok) els.push(e); }
        if (ok) return { el: els[0], els, key: c, power: false };
      }
    }
    return null;
  }
  /* the element a pointer is over -> { el (to highlight), els, key, power }, or null; the key may have no meaning here */
  function keyOf(node) {
    if (!node || !node.closest || !node.closest('mjx-container')) return null;
    /* in a subscript, or on a prime: the hover belongs to the symbol they are attached to */
    /* a subscript of a subscript (E with n_f) belongs to the outer symbol; the limits of an integral or a sum to no symbol */
    let s = node.closest('mjx-script'), hit = null;
    while (s && isScript(s.parentElement)) {
      const holder = s.parentElement, parts = kids(s);
      const inSup = holder.tagName === 'MJX-MSUP' || (holder.tagName === 'MJX-MSUBSUP' && parts[0] && parts[0].contains(node));
      const op = unwrap(kids(holder)[0]);
      if (op && op.tagName === 'MJX-MO' && /^MJX-MSUB/.test(holder.tagName)) return null;
      if (inSup && !allPrimes(parts[0])) break;   /* in a power: the symbols there are symbols in their own right (e^(−t/τ)) */
      hit = holder;
      s = holder.parentElement && holder.parentElement.closest('mjx-script');
    }
    if (hit) return delta(holderKey(hit));
    const mi = node.closest('mjx-mi');
    if (!mi) return null;
    const lim = mi.closest('mjx-script');   /* the i under a sum, set inline or below */
    if (mi.closest('mjx-under') || (lim && /^MJX-(MUNDER|MOVER|MUNDEROVER)$/.test(lim.parentElement.tagName))) return null;
    if (mi.closest('mjx-over')) return null;
    /* the element that stands for the symbol: the mi, or the accent over it (a \vec arrow leaves it the letter's) */
    let E = mi;
    const mo = mi.closest('mjx-mover');
    if (mo && mo.querySelector(':scope > mjx-base') && mo.querySelector(':scope > mjx-base').contains(mi)) {
      const acc = accentOf(mo);
      if (acc === null) return null;
      if (acc) E = mo; else if (unwrap(kids(mo.querySelector(':scope > mjx-base'))[0]) !== mi) return null;
    }
    let up = climb(E === mi ? mi.parentElement : mo.parentElement);
    if (E === mi && up && up.tagName === 'MJX-BASE') up = climb(up.parentElement && up.parentElement.parentElement);
    if (up && isScript(up)) { const bk = baseKey(kids(up)[0]); if (bk && (bk[0] === E || bk[0] === mi)) return delta(holderKey(up)); }
    if (E !== mi) { const bk = baseKey(E); return bk ? delta({ el: E, key: bk[1], power: false }) : null; }
    const b = baseName(mi);
    if (!b || b === 'pi') return null;
    /* µF, 10 Ω: a unit prefix or unit, not a symbol */
    const nx = step(mi, 'nextElementSibling');
    if ((b === 'mu' || b === 'Omega') && upright(nx)) return null;
    if (b === 'mu' && nx && nx.tagName === 'MJX-MI' && nx.classList.contains('mjx-n')) return null;   /* \mathrm{\mu Pa} */
    if (b === 'Omega') { const pv = step(mi, 'previousElementSibling'); if (pv && (pv.tagName === 'MJX-MN' || upright(pv) || (pv.tagName === 'MJX-MSUP' && kids(pv)[0] && kids(pv)[0].tagName === 'MJX-MN'))) return null; }
    /* Δt, dx, δx: an operator in front of a symbol (but the d of d sin θ is a spacing) */
    if (b === 'Delta' || b === 'd' || b === 'delta') {
      const n2 = mi.nextElementSibling;
      const fn = n2 && n2.tagName === 'MJX-MI' && FUNCS.has(cps(n2).map((cp) => String.fromCharCode(cp)).join(''));
      /* what follows is a symbol: a letter, one with a script or accent, a group holding a letter (not the / of d/v), or ⟨ */
      const sym = n2 && (n2.tagName === 'MJX-MI' || n2.tagName === 'MJX-MOVER' || (n2.tagName === 'MJX-TEXATOM' && n2.querySelector('mjx-mi'))
        || (isScript(n2) && baseKey(kids(n2)[0])) || (n2.tagName === 'MJX-MO' && cps(n2)[0] === 0x27E8));
      if (!fn && sym) return null;
    }
    return compound(mi, b) || delta({ el: mi, key: b, power: false });
  }

  /* what a symbol means where it stands: a "key [TeX]" line of the handout when its condition holds in this equation */
  const TEX = new WeakMap();
  function texOf(c) {
    if (!TEX.has(c) && window.MathJax && MathJax.startup && MathJax.startup.document) {
      for (const it of MathJax.startup.document.math) if (it.typesetRoot) TEX.set(it.typesetRoot, it.math);
    }
    return TEX.get(c) || '';
  }
  const nospace = (x) => x.replace(/\s+/g, '');
  const words = (x) => x.replace(/[*_`]/g, '').toLowerCase().split(/\s+/).filter(Boolean).join(' ');
  /* the words just before an equation, back to the previous equation or the start of its block ("eccentricity" for e) */
  function leadOf(c) {
    let t = '';
    for (let n = c.previousSibling; n; n = n.previousSibling) {
      if (n.nodeType === 1 && (n.matches('mjx-container, br') || n.querySelector('mjx-container'))) break;
      t = n.textContent + t;
    }
    return words(t.split('\n').pop()).replace(/[ (,:]+$/, '');
  }
  function ctxMatch(spec, tex, power, before) {
    const flat = nospace(tex);
    return spec.split('&').every((c) => {
      if (c.trim()[0] === '~') return before.endsWith(words(c.trim().slice(1)));
      c = nospace(c);
      return c === '^' ? power === true : c[0] === '=' ? flat === c.slice(1) : flat.includes(c);
    });
  }
  function entryOf(r) {
    const lines = G && G['@ctx'] && G['@ctx'][r.key];
    if (lines) {
      const c = r.el.closest('mjx-container'), tex = texOf(c), before = leadOf(c);
      for (const l of lines) if (ctxMatch(l[0], tex, r.power, before)) return l[1] === '-' ? null : l.slice(1);
    }
    return (G && G[r.key]) || null;
  }
  function keyAt(node) {
    const r = keyOf(node);
    if (!r) return null;
    r.entry = entryOf(r);
    return r.entry ? r : null;
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
.sym-hint { font-size: 0.9em; color: var(--sym-dim, var(--hd-muted, #57606a)); }
.sym-tip.sym-dark { --sym-bg: #161b22; --sym-fg: #e6edf3; --sym-line: #6e7681; --sym-dim: #9da7b3; }
@media screen and (prefers-color-scheme: dark) { :root:not([data-theme="light"]) mjx-container .sym-on { --sym-hi: rgba(105, 160, 255, 0.32); } }
:root[data-theme="dark"] mjx-container .sym-on { --sym-hi: rgba(105, 160, 255, 0.32); }
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
    if (shown) shown.forEach((x) => x.classList.remove('sym-on'));
    shown = null; pinned = null;
    if (tip) { tip.hidden = true; tip.classList.remove('sym-pinned'); }
  }
  /* r: what keyAt found, { el, els (a label of several letters), key, entry } */
  function show(r, pin) {
    const e = r.entry, els = r.els || [r.el];
    if (!tip) {
      tip = document.createElement('div');
      tip.className = 'sym-tip tex2jax_ignore';
      tip.setAttribute('role', 'tooltip');
      tip.id = 'sym-tip';
      document.body.appendChild(tip);
    }
    if (shown) shown.forEach((x) => x.classList.remove('sym-on'));
    shown = els; els.forEach((x) => x.classList.add('sym-on'));
    tip.textContent = '';
    const head = document.createElement('div'); head.className = 'sym-head';
    /* the symbol as it looks in the equation: a copy of its MathJax output */
    const box = document.createElement('mjx-container');
    box.className = 'MathJax sym-math'; box.setAttribute('jax', 'CHTML');
    const mm = document.createElement('mjx-math'); mm.className = 'MJX-TEX';
    els.forEach((x) => { const copy = x.cloneNode(true); copy.classList.remove('sym-on'); mm.appendChild(copy); });
    box.appendChild(mm); head.appendChild(box);
    const nm = document.createElement('span'); nm.className = 'sym-name'; nm.textContent = e[0]; head.appendChild(nm);
    tip.appendChild(head);
    if (e[1]) { const u = document.createElement('div'); u.className = 'sym-unit'; u.textContent = 'Unit: ' + e[1]; tip.appendChild(u); }
    if (e[2]) { const n = document.createElement('div'); n.className = 'sym-note'; n.textContent = e[2]; tip.appendChild(n); }
    tip.hidden = false;
    tip.classList.toggle('sym-pinned', !!pin);
    tip.classList.toggle('sym-dark', darkPage());
    pinned = pin ? r.el : null;
    const a = els[0].getBoundingClientRect(), b = els[els.length - 1].getBoundingClientRect();
    const box2 = { left: a.left, right: b.right, top: Math.min(a.top, b.top), bottom: Math.max(a.bottom, b.bottom) };
    const w = tip.offsetWidth, h = tip.offsetHeight;
    let x = (box2.left + box2.right) / 2 + window.scrollX - w / 2;
    x = Math.max(window.scrollX + 12, Math.min(x, window.scrollX + document.documentElement.clientWidth - w - 12));
    let y = box2.bottom + window.scrollY + 8;
    if (box2.bottom + h + 16 > window.innerHeight && box2.top - h - 8 > 0) y = box2.top + window.scrollY - h - 8;
    tip.style.left = x + 'px'; tip.style.top = y + 'px';
  }

  function start() {
    css();
    document.addEventListener('mouseover', (ev) => {
      if (pinned) return;
      const r = keyAt(ev.target);
      if (r) show(r, false); else if (shown) hide();
    });
    document.addEventListener('click', (ev) => {
      if (tip && tip.contains(ev.target)) return;
      const r = keyAt(ev.target);
      if (r && pinned !== r.el) { show(r, true); return; }
      if (pinned || shown) hide();
    });
    document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') hide(); });
    window.addEventListener('resize', () => { if (!pinned) hide(); });
    /* the site theme switch (demos/lib/theme.js): a tip on show takes the new colors */
    window.addEventListener('vd-theme', () => requestAnimationFrame(() => { if (tip && !tip.hidden) tip.classList.toggle('sym-dark', darkPage()); }));
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
  /* for tools: every symbol this page's equations show, equation by equation, with the meaning its tip gives (tools/symcheck.cjs
     compares them with what tools/symbols.py makes from the handout's TeX) */
  window.vdSymbolOccurrences = () => Array.from(document.querySelectorAll('.markdown-body mjx-container')).map((c) => {
    const seen = new Set(), occ = [];
    c.querySelectorAll('mjx-c').forEach((x) => {
      const r = keyOf(x);
      if (!r || seen.has(r.el)) return;
      seen.add(r.el);
      const e = entryOf(r);
      occ.push([r.key, e ? e[0] : null, e ? e[1] || '' : null]);
    });
    return { tex: texOf(c), before: leadOf(c), occ };
  });
  window.vdSymbolKeys = () => Array.from(new Set([].concat(...window.vdSymbolOccurrences().map((q) => q.occ.map((o) => o[0])))));
})();
