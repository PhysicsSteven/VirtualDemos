/* Theme switch for the whole site: Light, Dark or Browser default (follows prefers-color-scheme).
   Load it first in <head>, as a plain blocking script, before any stylesheet or other script:
     <script src="lib/theme.js"></script>
   It reads the saved choice (localStorage 'vd-theme': 'light', 'dark' or 'auto' for Browser default; nothing saved
   means Dark, the site default for a first visit, Steve 2026-10-25) and sets
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
    var is = function () { return want === 'dark' ? dark() : !dark(); };
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
  if (nativeMM) {
    window.matchMedia = function (q) {
      var m = typeof q === 'string' && Q.exec(q);
      return m ? fakeList(q, m[1].toLowerCase()) : nativeMM(q);
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

  var LABELS = [['', 'Browser default'], ['light', 'Light'], ['dark', 'Dark']];
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
  window.addEventListener('storage', function (e) { if (e.key === KEY || e.key === null) apply(read(), false); });

  /* the switch */
  var CSS = '.vd-theme{display:inline-flex;align-items:center;gap:5px;margin:0;font:inherit;font-size:.82rem;font-weight:700;color:var(--muted,#5a6575);white-space:nowrap}'
    + '.vd-theme svg{width:14px;height:14px;flex:none;fill:currentColor}'
    + '.vd-theme select{font:inherit;font-weight:700;color:inherit;background:var(--surface,#f8fafc);border:1px solid var(--line,#d3d9e2);border-radius:6px;padding:4px 6px;cursor:pointer;max-width:11em}'
    + '.vd-theme select:focus-visible{outline:2px solid var(--accent,#2b60b5);outline-offset:1px}'
    + '.vd-theme-hero{position:absolute;top:14px;right:0;z-index:2}'
    + '.vd-theme-doc{float:right;margin:0 8px 8px 12px}'
    + '@media (max-width:640px){.vd-theme select{min-height:36px}.vd-theme-hero{position:static;display:flex;justify-content:flex-end;margin:-20px 0 10px}.markdown-body>.vd-theme-doc{float:none;display:flex;justify-content:flex-end;margin:0 0 4px}}'
    + '@media print{.vd-theme{display:none!important}}';
  var ICON = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 1.5v11a5.5 5.5 0 0 1 0-11z"/></svg>';
  function make(cls) {
    var lab = document.createElement('label');
    lab.className = 'vd-theme' + (cls ? ' ' + cls : '');
    lab.title = 'Theme for every page of the site: Light, Dark, or whatever your browser or system is set to';
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
      it.insertBefore(make('vd-theme-doc'), it.firstChild);
    }
  }
  function ready() { fixSources(); place(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready); else ready();
  window.addEventListener('load', function () { if (mo) { mo.disconnect(); mo = null; } });

  /* printing: every page prints light (dark tokens print white text when the browser leaves backgrounds out); the
     choice comes back after. Not saved, so other tabs are not touched. */
  var beforePrint = null;
  window.addEventListener('beforeprint', function () { if (beforePrint === null && dark()) { beforePrint = mode; apply('light', false); } });
  window.addEventListener('afterprint', function () { if (beforePrint !== null) { var v = beforePrint; beforePrint = null; apply(v, false); } });

  window.VDTheme = { get: function () { return mode; }, set: function (v) { apply(v, true); }, dark: dark };
})();
