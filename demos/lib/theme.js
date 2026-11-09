/* Theme switch for the whole site: Day, Night or Browser default (follows prefers-color-scheme). The stored values stay
   'light' and 'dark' (Day is the light theme, Night the dark one), so every page's [data-theme] rules still apply.
   Load it first in <head>, as a plain blocking script, before any stylesheet or other script:
     <script src="lib/theme.js"></script>
   It reads the saved choice (localStorage 'vd-theme': 'light', 'dark' or 'auto' for Browser default; nothing saved
   means Night, the site default (Steve 2026-11-08: easier on the eyes; it was Day for part of 2026-11-08 and Dark from 2026-10-25) and sets
   data-theme on <html> before the page paints, so pages do not flash. Every page already styles itself from
   :root tokens with a dark @media block guarded by :not([data-theme="light"]) and a [data-theme="dark"] block.

   Scripts that ask matchMedia('(prefers-color-scheme: dark)') get an answer that follows the choice, and their
   'change' listeners run when the choice changes, so canvases and 3D scenes that already redraw on a system
   theme change redraw on a switch too. <picture> sources with a prefers-color-scheme media follow the choice.
   A 'vd-theme' event fires on window after each change (detail: { theme, dark }). Pages print light whatever the choice.

   The switch itself (a small select) is placed by this file: in a demo's header next to Projector (.bar-right),
   in the hero of the home and course pages, beside Print on teaching notes (top right of the notes index), and at
   the top of a handout. A page
   can place it elsewhere with an empty element <span data-vd-theme></span>.

   VDTheme.get()  ''|'light'|'dark'     VDTheme.set(v)     VDTheme.dark()  true when the page shows dark */
(function () {
  'use strict';
  if (window.VDTheme) return;
  var KEY = 'vd-theme', root = document.documentElement;
  var read = function () { var v = null; try { v = localStorage.getItem(KEY); } catch (_) {} return v === 'light' || v === 'dark' ? v : v === 'auto' ? '' : 'dark'; };
  var mode = read();
  if (mode) root.setAttribute('data-theme', mode);

  var nativeMM = window.matchMedia ? window.matchMedia.bind(window) : null;
  var sys = null;
  try { sys = nativeMM && nativeMM('(prefers-color-scheme: dark)'); } catch (_) {}
  var sysDark = function () { return !!(sys && sys.matches); };
  var dark = function () { return mode ? mode === 'dark' : sysDark(); };

  /* matchMedia('(prefers-color-scheme: dark|light)') answers for the page's theme, not only the system's */
  var Q = /^\s*\(\s*prefers-color-scheme\s*:\s*(dark|light)\s*\)\s*$/i, lists = [];
  function fakeList(q, want) {
    var t = new EventTarget();
    var is = typeof want === 'function' ? want : function () { return want === 'dark' ? dark() : !dark(); };
    var on = false;
    var join = function () { if (!on) { on = true; lists.push(t); } };
    Object.defineProperty(t, 'matches', { get: is });
    Object.defineProperty(t, 'media', { value: q });
    t.onchange = null;
    Object.defineProperty(t, 'onchange', { get: function () { return t._on || null; }, set: function (f) { t._on = f; join(); } });
    var addE = t.addEventListener.bind(t);
    t.addEventListener = function (type, fn, o) { if (type === 'change') join(); addE(type, fn, o); };
    t.addListener = function (fn) { join(); addE('change', fn); };
    t.removeListener = function (fn) { t.removeEventListener('change', fn); };
    t._last = is();
    t._fire = function () {
      var now = is(); if (now === t._last) return; t._last = now;
      var e = new Event('change');
      Object.defineProperty(e, 'matches', { value: now }); Object.defineProperty(e, 'media', { value: q });
      if (typeof t._on === 'function') { try { t._on.call(t, e); } catch (err) { setTimeout(function () { throw err; }); } }
      t.dispatchEvent(e);
    };
    return t;
  }
  /* Reduce motion and Larger text, chosen in Preferences (demos/lib/vd.js) and saved for the whole site in localStorage
     'vd-motion' ('reduce') and 'vd-text' ('large'). matchMedia('(prefers-reduced-motion: reduce)') answers true when either
     the device or the site setting asks for less motion, so every demo that reads it (128 do) starts still, and its 'change'
     listeners run when the setting changes. data-vd-motion and data-vd-text on <html> carry the choices for styles. */
  var MQ = /^\s*\(\s*prefers-reduced-motion\s*:\s*(reduce|no-preference)\s*\)\s*$/i;
  var sysMotion = null;
  try { sysMotion = nativeMM && nativeMM('(prefers-reduced-motion: reduce)'); } catch (_) {}
  var pref = function (k, v) { var x = null; try { x = localStorage.getItem(k); } catch (_) {} return x === v; };
  var siteStill = pref('vd-motion', 'reduce'), bigText = pref('vd-text', 'large');
  /* Look, chosen in Preferences (2026-11-08): 'warm' (Warm lab, the default, nothing saved) or 'lab' (Cool lab, the cool palette; it was called Lab until 2026-11-09, which collided with the Lab fold inside demos),
     saved in localStorage 'vd-look'. data-vd-look="lab" on <html> switches demos/lib/paper.css to its Cool lab blocks. It changes
     the page around each demo only, so canvases are not redrawn. */
  var look = pref('vd-look', 'lab') ? 'lab' : 'warm';
  var still = function () { return siteStill || !!(sysMotion && sysMotion.matches); };
  function markPrefs() {
    if (siteStill) root.setAttribute('data-vd-motion', 'reduce'); else root.removeAttribute('data-vd-motion');
    if (bigText) root.setAttribute('data-vd-text', 'large'); else root.removeAttribute('data-vd-text');
    if (look === 'lab') root.setAttribute('data-vd-look', 'lab'); else root.removeAttribute('data-vd-look');
  }
  markPrefs();
  var PCSS = ''
  /* Larger text: rem sizes grow by 12.5 %, and so does the body text of pages that set it in px (measured in sizeBody) */
  + ':root[data-vd-text="large"]{font-size:112.5%}:root[data-vd-text="large"][data-projector="on"]{font-size:140.625%}'
  + ':root[data-vd-text="large"][data-vd-bodypx]:not([data-projector="on"]) body{font-size:var(--vd-body-large)}'
  + ':root[data-vd-text="large"] .markdown-body{font-size:18px}'
  /* Reduce motion: page transitions and animations finish at once */
  + ':root[data-vd-motion="reduce"] *,:root[data-vd-motion="reduce"] ::before,:root[data-vd-motion="reduce"] ::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}';
  try { var pst = document.createElement('style'); pst.id = 'vd-prefs-css'; pst.textContent = PCSS; (document.head || root).appendChild(pst); } catch (_) {}
  if (sysMotion) { var onMotion = function () { changed(); }; if (sysMotion.addEventListener) sysMotion.addEventListener('change', onMotion); else if (sysMotion.addListener) sysMotion.addListener(onMotion); }
  if (nativeMM) {
    window.matchMedia = function (q) {
      var m = typeof q === 'string' && Q.exec(q);
      if (m) return fakeList(q, m[1].toLowerCase());
      m = typeof q === 'string' && MQ.exec(q);
      if (m) return fakeList(q, m[1].toLowerCase() === 'reduce' ? still : function () { return !still(); });
      return nativeMM(q);
    };
  }

  /* <picture><source media="(prefers-color-scheme: dark)"> follows the choice */
  function fixSource(s) {
    var orig = s.getAttribute('data-vd-media');
    if (orig == null) { orig = s.getAttribute('media') || ''; var m = Q.exec(orig); if (!m) return; s.setAttribute('data-vd-media', orig); }
    var want = Q.exec(orig)[1].toLowerCase(), media = orig;
    if (mode) media = (want === 'dark') === (mode === 'dark') ? 'all' : 'not all';
    if (s.getAttribute('media') !== media) s.setAttribute('media', media);
  }
  function fixSources(node) {
    var list = (node || document).querySelectorAll ? (node || document).querySelectorAll('source[media*="prefers-color-scheme"], source[data-vd-media]') : [];
    for (var i = 0; i < list.length; i++) fixSource(list[i]);
  }
  /* while the page is parsed, so thumbnails load in the chosen theme the first time */
  var mo = null;
  if (window.MutationObserver) {
    mo = new MutationObserver(function (recs) {
      if (!mode) return;
      for (var i = 0; i < recs.length; i++) for (var j = 0; j < recs[i].addedNodes.length; j++) {
        var n = recs[i].addedNodes[j];
        if (n.nodeType !== 1) continue;
        if (n.tagName === 'SOURCE') fixSource(n); else if (n.firstElementChild) fixSources(n);
      }
    });
    mo.observe(root, { childList: true, subtree: true });
  }

  var LABELS = [['', 'Browser default'], ['light', 'Day'], ['dark', 'Night']];
  var selects = [];
  function apply(v, save) {
    v = v === 'light' || v === 'dark' ? v : '';
    var was = dark();
    mode = v;
    if (v) root.setAttribute('data-theme', v); else root.removeAttribute('data-theme');
    if (save) { try { localStorage.setItem(KEY, v || 'auto'); } catch (_) {} }
    fixSources();
    for (var i = 0; i < selects.length; i++) if (selects[i].value !== v) selects[i].value = v;
    if (dark() !== was) changed();
    try { window.dispatchEvent(new CustomEvent('vd-theme', { detail: { theme: v, dark: dark() } })); } catch (_) {}
  }
  function changed() { lists.slice().forEach(function (t) { try { t._fire(); } catch (_) {} }); }
  if (sys) {
    var onSys = function () { if (!mode) changed(); };
    if (sys.addEventListener) sys.addEventListener('change', onSys); else if (sys.addListener) sys.addListener(onSys);
  }
  function setPrefs(o, save) {
    var was = still(), wasBig = bigText, wasLook = look;
    if ('reduceMotion' in o) siteStill = !!o.reduceMotion;
    if ('largeText' in o) bigText = !!o.largeText;
    if ('look' in o) look = o.look === 'lab' ? 'lab' : 'warm';
    markPrefs();
    if (save) { try {
      if ('reduceMotion' in o) { if (siteStill) localStorage.setItem('vd-motion', 'reduce'); else localStorage.removeItem('vd-motion'); }
      if ('largeText' in o) { if (bigText) localStorage.setItem('vd-text', 'large'); else localStorage.removeItem('vd-text'); }
      if ('look' in o) { if (look === 'lab') localStorage.setItem('vd-look', 'lab'); else localStorage.removeItem('vd-look'); }
    } catch (_) {} }
    if (still() !== was) changed();
    if (still() !== was || bigText !== wasBig || look !== wasLook) { try { window.dispatchEvent(new CustomEvent('vd-prefs', { detail: { reduceMotion: siteStill, largeText: bigText, look: look } })); } catch (_) {} }
  }
  window.addEventListener('storage', function (e) {
    if (e.key === KEY || e.key === null) apply(read(), false);
    if (e.key === 'vd-motion' || e.key === 'vd-text' || e.key === 'vd-look' || e.key === null) setPrefs({ reduceMotion: pref('vd-motion', 'reduce'), largeText: pref('vd-text', 'large'), look: pref('vd-look', 'lab') ? 'lab' : 'warm' }, false);
  });

  /* the switch */
  var CSS = '.vd-theme{display:inline-flex;align-items:center;gap:5px;margin:0;font:inherit;font-size:.82rem;font-weight:700;color:var(--muted,#73695c);white-space:nowrap}'
    + '.vd-theme svg{width:14px;height:14px;flex:none;fill:currentColor}'
    + '.vd-theme select{font:inherit;font-weight:700;color:inherit;background:var(--surface,#fcfaf8);border:1px solid var(--line,#e1dbd4);border-radius:6px;padding:4px 6px;cursor:pointer;max-width:11em}'
    + '.vd-theme select:focus-visible{outline:2px solid var(--accent,#c4811c);outline-offset:1px}'
    + '.vd-theme-hero{position:absolute;top:14px;right:0;z-index:2}'
    + '.vd-theme-doc{float:right;margin:0 8px 8px 12px}'
    + '@media (max-width:640px){.vd-theme select{min-height:36px}.vd-theme-hero{position:static;display:flex;justify-content:flex-end;margin:-20px 0 10px}.markdown-body>.vd-theme-doc{float:none;display:flex;justify-content:flex-end;margin:0 0 4px}}'
    + '@media print{.vd-theme{display:none!important}}';
  /* Larger text for a body sized in px: its size with Larger text and Projector off, times 1.125. A body sized in rem or %
     grows with the root by itself, so it is left alone (measured both ways to tell). */
  function sizeBody() {
    var b = document.body; if (!b || root.hasAttribute('data-vd-bodypx')) return;
    var t = root.getAttribute('data-vd-text'), p = root.getAttribute('data-projector');
    root.removeAttribute('data-projector');
    root.removeAttribute('data-vd-text'); var a = parseFloat(getComputedStyle(b).fontSize);
    root.setAttribute('data-vd-text', 'large'); var g = parseFloat(getComputedStyle(b).fontSize);
    if (t === null) root.removeAttribute('data-vd-text'); if (p !== null) root.setAttribute('data-projector', p);
    if (a > 0 && g < a * 1.05) { root.style.setProperty('--vd-body-large', (a * 1.125).toFixed(2) + 'px'); root.setAttribute('data-vd-bodypx', ''); }
  }
  var ICON = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 1.5v11a5.5 5.5 0 0 1 0-11z"/></svg>';
  function make(cls) {
    var lab = document.createElement('label');
    lab.className = 'vd-theme' + (cls ? ' ' + cls : '');
    lab.title = 'Theme for every page of the site: Day, Night, or whatever your browser or system is set to';
    lab.innerHTML = ICON;
    var sel = document.createElement('select');
    sel.setAttribute('aria-label', 'Theme');
    LABELS.forEach(function (o) { var op = document.createElement('option'); op.value = o[0]; op.textContent = o[1]; sel.appendChild(op); });
    sel.value = mode;
    sel.addEventListener('change', function () { apply(sel.value, true); });
    lab.appendChild(sel);
    selects.push(sel);
    return lab;
  }
  function place() {
    if (document.querySelector('.vd-theme')) return;
    var st = document.createElement('style'); st.id = 'vd-theme-css'; st.textContent = CSS; document.head.appendChild(st);
    var slot = document.querySelector('[data-vd-theme]'), it;
    if (slot) { slot.appendChild(make('')); return; }
    if ((it = document.querySelector('.bar-right'))) {
      var before = it.querySelector('#vdReset, #proj, .proj');
      it.insertBefore(make(''), before || null);
    } else if ((it = document.querySelector('header.hero .wrap'))) {
      it.insertBefore(make('vd-theme-hero'), it.firstChild);
    } else if ((it = document.querySelector('header button.print'))) {
      it.parentNode.insertBefore(make('vd-theme-doc'), it.nextSibling);
    } else if ((it = document.querySelector('main > header'))) {
      it.insertBefore(make('vd-theme-doc'), it.firstChild);
    } else if ((it = document.querySelector('.markdown-body'))) {
      /* after the Primer theme's site title (an h1 holding a link), which the handouts hide as .markdown-body > h1:first-child */
      var h = it.firstElementChild, site = h && h.tagName === 'H1' && h.children.length === 1 && h.firstElementChild.tagName === 'A';
      it.insertBefore(make('vd-theme-doc'), site ? h.nextSibling : it.firstChild);
    }
  }
  function ready() { fixSources(); place(); sizeBody(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready); else ready();
  window.addEventListener('load', function () { if (mo) { mo.disconnect(); mo = null; } });

  /* printing: every page prints light (dark tokens print white text when the browser leaves backgrounds out); the
     choice comes back after. Not saved, so other tabs are not touched. */
  var beforePrint = null;
  window.addEventListener('beforeprint', function () { if (beforePrint === null && dark()) { beforePrint = mode; apply('light', false); } });
  window.addEventListener('afterprint', function () { if (beforePrint !== null) { var v = beforePrint; beforePrint = null; apply(v, false); } });

  window.VDTheme = { get: function () { return mode; }, set: function (v) { apply(v, true); }, dark: dark };
  /* VDPrefs.get() { reduceMotion, largeText, look } (the site settings; the device's own Reduce motion is VDPrefs.still())
     VDPrefs.set({ reduceMotion?, largeText?, look? }) saves them (look is 'warm' or 'lab'); a 'vd-prefs' event fires on window after a change */
  window.VDPrefs = { get: function () { return { reduceMotion: siteStill, largeText: bigText, look: look }; }, set: function (o) { setPrefs(o || {}, true); },
    still: still, device: function () { return !!(sysMotion && sysMotion.matches); } };
})();

/* Languages (demos/lib/i18n.js, 2026-11-01): loaded here, right after the theme, so every page that has the theme switch gets it
   without another tag. In English it changes nothing on the page. */
(function () {
  var me = document.currentScript;
  if (window.VDI18N || !me || !me.src || document.readyState !== 'loading') return;
  document.write('<script src="' + me.src.replace(/theme\.js(\?.*)?$/, 'i18n.js') + '"><\/script>');
})();
