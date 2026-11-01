/* Languages for the whole site (Steve, 2026-11-01). How to add strings and languages: demos/lib/i18n.md.

   Loaded by theme.js on every page, as a blocking script, before anything else runs. In English (the default, and whenever a page
   has no catalog for the chosen language) it changes nothing on the page: it only defines VDI18N, and places the language switch
   beside the theme switch on a page that has a translation (or when a language other than English was chosen).

   How text is translated: the English text on the page is the key. After the page has built itself (DOMContentLoaded, after
   deferred scripts such as worksheet.js), the page is walked once and every piece of text that has a translation in the catalogs
   is replaced in place: a text node's data is changed, never the node, so a demo's references to its elements stay good. A run of
   text with inline formatting (<b>, <i>, <sub>, ...) is one key, written with bare tag names ("<b>Mass</b> of the bob"); the
   translation keeps the same tags in the same order. Text a demo writes later (status lines, button labels, readouts) is
   translated as it is written (MutationObserver), and so is canvas text (fillText, strokeText, measureText). A string with
   numbers in it is looked up first as it is, then as a pattern with each number written {#} ("Settling {#} grains: {#} %");
   the translation puts the numbers back in order, or by position with {#1}, {#2}. Numbers are written with the language's
   decimal mark. Code can also ask directly: VDI18N.t('English', { n: 3 }) gives the translation or the English, with {n} filled.

   Catalogs: demos/lib/i18n/<lang>/common.js (shared words: the framework, theme, nav, worksheet tools), site.js (home, course,
   topic and OpenStax pages), demo/<demo>.js, ws/<worksheet>.js, notes/<demo>.js. Each calls VDI18N.add(lang, page, { en: tr }).
   demos/lib/i18n/en/ holds the English strings harvested from each page (tools/i18n.cjs harvest), which is what a translator
   works from and what the test language uses.

   Choosing: ?lang=es in the address (saved for the next pages), or the switch (saved in localStorage 'vd-lang'). Two languages
   are for checking only and never in the switch: ?lang=qps (pseudo: every harvested string is shown accented and 40 % longer
   inside ⟦ ⟧, so English that is still showing was never harvested, and long labels show where they would overflow) and
   ?i18n=collect (records every string the page shows in window.__vdI18nSeen, for the harvest tool).

   VDI18N.lang   'en' or the language in use on this page
   VDI18N.t(s, vars)   translation of s (or s), with {name} filled from vars
   VDI18N.num(x, digits)   x.toFixed(digits) with the language's decimal mark
   VDI18N.done   a promise, resolved after the first pass (MathJax on the handouts waits for it)
   VDI18N.set(lang)   choose a language and reload */
(function () {
  'use strict';
  if (window.VDI18N) return;

  /* ==LANGS START== (written by tools/i18n.cjs index: the languages and the pages each one covers) */
  var LANGS = {};
  /* ==LANGS END== */

  var KEY = 'vd-lang', root = document.documentElement;
  var me = document.currentScript, LIB = me && me.src ? me.src.replace(/[^/]*$/, '') : '';
  var q = {}; try { location.search.replace(/^\?/, '').split('&').forEach(function (p) { var kv = p.split('='); if (kv[0]) q[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1] || ''); }); } catch (_) {}
  var COLLECT = q.i18n === 'collect', PSEUDO = q.lang === 'qps';

  function page() {
    var p = location.pathname, m;
    if ((m = p.match(/\/demos\/([a-z0-9-]+)\.html$/))) return 'demo/' + m[1];
    if ((m = p.match(/\/curriculum\/labs\/students\/([a-z0-9-]+?)(?:\.html)?$/))) return 'ws/' + m[1];
    if ((m = p.match(/\/notes\/([a-z0-9-]+)\.html$/)) && m[1] !== 'index') return 'notes/' + m[1];
    if (/\/demos\/lib\//.test(p)) return '';
    return 'site';
  }
  var PAGE = page();

  var saved = 'en'; try { saved = localStorage.getItem(KEY) || 'en'; } catch (_) {}
  if (q.lang && q.lang !== 'qps') { saved = LANGS[q.lang] || q.lang === 'en' ? q.lang : saved; try { localStorage.setItem(KEY, saved); } catch (_) {} }
  var has = function (l) { return !!(LANGS[l] && PAGE && LANGS[l].pages.indexOf(PAGE) >= 0); };
  var lang = PSEUDO ? 'qps' : has(saved) ? saved : 'en';
  var info = LANGS[lang] || { name: 'English', dir: 'ltr', decimal: '.' };
  var active = lang !== 'en' && !!PAGE;

  var cats = {}, enSet = null;   /* cats[page] = { en: tr }; enSet: the harvested English (pseudo only) */
  var I = window.VDI18N = {
    lang: active ? lang : 'en', page: PAGE, langs: LANGS, chosen: saved, LIB: LIB, decimal: info.decimal || '.',
    add: function (l, pg, map) {
      if (l === 'en') { if (PSEUDO) { enSet = enSet || Object.create(null); (Array.isArray(map) ? map : Object.keys(map)).forEach(function (k) { enSet[k] = 1; }); } return; }
      if (l !== lang) return;
      var c = cats[pg] = cats[pg] || Object.create(null);
      for (var k in map) if (map[k]) c[k] = map[k];
    },
    set: function (l) { try { localStorage.setItem(KEY, l); } catch (_) {} var u = location.href.replace(/([?&])lang=[^&#]*&?/, '$1').replace(/[?&](#|$)/, '$1'); location.href = u; }
  };

  /* ---------- lookups ---------- */
  var NUM = /(^|[^A-Za-z0-9_.{#])(\d+(?:\.\d+)?(?:[eE][-+]?\d+)?)(?![A-Za-z0-9])/g;
  var LETTER = /[A-Za-zÀ-ɏͰ-ϿЀ-ӿ]/;
  /* numbers become {#}, except inside math (\( \), \[ \], $$ $$), which is kept as written */
  var MATH = /(\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]|\$\$[\s\S]*?\$\$)/;
  function skeleton(s) {
    var nums = [], parts = s.split(MATH);
    for (var i = 0; i < parts.length; i += 2) parts[i] = parts[i].replace(NUM, function (all, pre, n) { nums.push(n); return pre + '{#}'; });
    return { k: parts.join(''), nums: nums };
  }
  function fmtNum(n) { return I.decimal === '.' ? n : n.replace('.', I.decimal); }
  function fill(tr, nums) {
    var i = 0;
    return tr.replace(/\{#(\d*)\}/g, function (all, d) { var n = d ? nums[+d - 1] : nums[i++]; return n == null ? '' : fmtNum(n); });
  }
  function raw(k) {
    if (PSEUDO) return enSet && enSet[k] ? pseudo(k) : null;
    var c = cats[PAGE]; if (c && c[k] != null) return c[k];
    c = cats.common; if (c && c[k] != null) return c[k];
    c = cats.site; if (PAGE !== 'site' && c && c[k] != null) return c[k];
    return null;
  }
  /* the translation of key k (already normalized), or null */
  function look(k) {
    if (!LETTER.test(k)) return null;
    if (COLLECT) { seen(k); return null; }
    var t = raw(k); if (t != null) return t;
    var sk = skeleton(k);
    t = sk.nums.length ? raw(sk.k) : null; if (t != null) return fill(t, sk.nums);
    if (MISS) MISS[sk.nums.length ? sk.k : k] = (MISS[sk.nums.length ? sk.k : k] || 0) + 1;
    return null;
  }
  var SEEN = null;
  function seen(k) { if (!SEEN) return; var sk = skeleton(k), key = sk.nums.length ? sk.k : k; SEEN[key] = (SEEN[key] || 0) + 1; }
  if (COLLECT) SEEN = window.__vdI18nSeen = Object.create(null);
  /* in the test language: every string looked up with no translation (what the harvest missed) */
  var MISS = PSEUDO ? window.__vdI18nMiss = Object.create(null) : null;

  /* pseudo text: letters accented, 40 % longer, inside ⟦ ⟧; tags and {#} kept */
  var PS = { a: 'á', b: 'ƀ', c: 'ç', d: 'ď', e: 'é', f: 'ƒ', g: 'ĝ', h: 'ĥ', i: 'í', j: 'ĵ', k: 'ķ', l: 'ľ', m: 'ɱ', n: 'ñ', o: 'ö', p: 'þ', q: 'ʠ', r: 'ŕ', s: 'š', t: 'ţ', u: 'ú', v: 'ṽ', w: 'ŵ', x: 'ẋ', y: 'ý', z: 'ž',
    A: 'Á', B: 'Ɓ', C: 'Ç', D: 'Ď', E: 'É', F: 'Ƒ', G: 'Ĝ', H: 'Ĥ', I: 'Í', J: 'Ĵ', K: 'Ķ', L: 'Ľ', M: 'Ṁ', N: 'Ñ', O: 'Ö', P: 'Þ', Q: 'Ǫ', R: 'Ŕ', S: 'Š', T: 'Ţ', U: 'Ú', V: 'Ṽ', W: 'Ŵ', X: 'Ẋ', Y: 'Ý', Z: 'Ž' };
  function pseudo(k) {
    var n = 0, out = k.split(MATH).map(function (part, i) { return i % 2 ? part : part.replace(/(<[^>]*>|\{#\d*\}|\{[A-Za-z_]\w*\}|&[a-z]+;)|([A-Za-z])/g, function (all, keep, ch) { if (keep) return keep; n++; return PS[ch] || ch; }); }).join('');
    var pad = ''; for (var i = 0; i < Math.ceil(n * 0.4); i++) pad += i % 5 === 4 ? ' ' : '·';
    return '⟦' + out + (pad ? ' ' + pad : '') + '⟧';
  }

  I.t = function (s, vars) {
    var str = String(s == null ? '' : s), k = str.replace(/\s+/g, ' ').trim();
    var tr = active || COLLECT ? look(k) : null;
    var out = tr == null ? str : tr;
    if (vars) out = out.replace(/\{([A-Za-z_]\w*)\}/g, function (all, n) { return vars[n] == null ? all : String(vars[n]); });
    return out;
  };
  I.num = function (x, d) { var s = (+x).toFixed(d == null ? 0 : d); return fmtNum(s); };

  /* ---------- loading the catalogs ---------- */
  var load = function (src) { document.write('<script src="' + src + '"><\/script>'); };
  if ((active || COLLECT) && document.readyState === 'loading') {
    if (PSEUDO) { load(LIB + 'i18n/en/common.js'); if (PAGE !== 'site') load(LIB + 'i18n/en/site.js'); load(LIB + 'i18n/en/' + PAGE + '.js'); }
    else if (active) { load(LIB + 'i18n/' + lang + '/common.js'); if (PAGE !== 'site' && LANGS[lang].pages.indexOf('site') >= 0) load(LIB + 'i18n/' + lang + '/site.js'); load(LIB + 'i18n/' + lang + '/' + PAGE + '.js'); }
  }
  if (active) {
    root.setAttribute('lang', lang === 'qps' ? 'qps-ploc' : lang);
    /* for the rare style a longer language needs: :root[data-vd-lang] .x { } (never applies in English) */
    root.setAttribute('data-vd-lang', lang);
    if (info.dir === 'rtl') root.setAttribute('dir', 'rtl');
    /* hidden until the first pass, so English does not flash (at most 2.5 s) */
    root.classList.add('vd-i18n-wait');
    document.write('<style id="vd-i18n-wait">html.vd-i18n-wait body{visibility:hidden}</style>');
    setTimeout(function () { root.classList.remove('vd-i18n-wait'); }, 2500);
  }

  var resolveDone; I.done = typeof Promise === 'function' ? new Promise(function (r) { resolveDone = r; }) : null;
  if (!active && !COLLECT) { if (resolveDone) resolveDone(); }

  /* ---------- the page ---------- */
  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1, TEMPLATE: 1, CODE: 1, PRE: 1, SAMP: 1, KBD: 1 };
  var INLINE = { a: 1, abbr: 1, b: 1, bdi: 1, br: 1, cite: 1, dfn: 1, em: 1, i: 1, mark: 1, q: 1, s: 1, small: 1, span: 1, strong: 1, sub: 1, sup: 1, time: 1, u: 1, var: 1, wbr: 1, tspan: 1 };
  var ATTRS = ['title', 'aria-label', 'placeholder', 'alt', 'aria-description', 'label', 'aria-roledescription', 'aria-valuetext'];
  var done = new WeakMap(), orig = new WeakMap(), busy = false;
  var tagOf = function (n) { return (n.localName || '').toLowerCase(); };
  function skipEl(e) {
    if (SKIP[e.tagName] || /^MJX-/.test(e.tagName) || e.isContentEditable) return true;
    if (e.getAttribute('translate') === 'no' || e.hasAttribute('data-i18n-skip') || (e.classList && (e.classList.contains('notranslate') || e.classList.contains('vd-lang') || e.classList.contains('anchorjs-link')))) return true;
    return false;
  }
  /* an inline element that can be part of a run: formatting only (no id, nothing interactive inside) */
  function plainInline(e) {
    if (!INLINE[tagOf(e)] || e.id || skipEl(e)) return false;
    if (e.querySelectorAll && e.querySelectorAll('a').length > 1) return false;   /* a group of links (the previous and next demo) */
    for (var c = e.firstChild; c; c = c.nextSibling) if (c.nodeType === 1 && !plainInline(c)) return false;
    return true;
  }
  var esc = function (s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); };
  var unesc = function (s) { return s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&'); };
  var cur = function (t) { return done.get(t) === t.data && orig.has(t) ? orig.get(t) : t.data; };   /* the English of a text node we translated */
  /* a run: a list of sibling nodes (text and plain inline elements). Its key, and its text slots between tags. */
  function flat(nodes, slots, tags) {
    var cell = { nodes: [] }; slots.push(cell);
    (function walk(list) {
      for (var i = 0; i < list.length; i++) {
        var n = list[i];
        if (n.nodeType === 3) slots[slots.length - 1].nodes.push(n);
        else if (n.nodeType === 1) {
          var t = tagOf(n); tags.push('<' + t + '>');
          if (t === 'br' || t === 'wbr') { slots.push({ nodes: [], after: n }); continue; }
          slots.push({ nodes: [], before: n, open: true });
          walk(n.childNodes); tags.push('</' + t + '>'); slots.push({ nodes: [], after: n });
        }
      }
    })(nodes);
  }
  function runKey(slots, tags) {
    var s = '';
    for (var i = 0; i < slots.length; i++) { if (i) s += tags[i - 1]; for (var j = 0; j < slots[i].nodes.length; j++) s += esc(cur(slots[i].nodes[j])); }
    return s.replace(/\s+/g, ' ').trim();
  }
  function setText(t, v) { if (!orig.has(t) || done.get(t) !== t.data) orig.set(t, t.data); t.data = v; done.set(t, v); }
  function doRun(nodes) {
    if (nodes.length === 1 && nodes[0].nodeType === 3) {
      var t = nodes[0], en = cur(t), k = en.replace(/\s+/g, ' ').trim();
      if (!k) return;
      var tr = look(k);
      if (tr != null) { var lead = en.match(/^\s*/)[0], trail = k ? en.match(/\s*$/)[0] : ''; setText(t, lead + unesc(tr) + trail); }
      else if (done.get(t) === t.data && orig.has(t) && t.data !== orig.get(t)) { /* keep */ }
      return;
    }
    var slots = [], tags = []; flat(nodes, slots, tags);
    var key = runKey(slots, tags);
    if (!key) return;
    if (COLLECT) { look(key); return; }
    var tr2 = look(key);
    if (tr2 != null) {
      var parts = tr2.split(/<\/?[a-z0-9]+[^>]*>/i), ttags = tr2.match(/<\/?[a-z0-9]+[^>]*>/ig) || [];
      var same = parts.length === slots.length && ttags.every(function (x, i) { return x.replace(/\s[^>]*/, '').toLowerCase() === tags[i]; });
      if (same) {
        var all = ''; for (var a = 0; a < slots.length; a++) for (var b = 0; b < slots[a].nodes.length; b++) all += cur(slots[a].nodes[b]);
        parts[0] = all.match(/^\s*/)[0] + parts[0].replace(/^\s+/, '');
        parts[parts.length - 1] = parts[parts.length - 1].replace(/\s+$/, '') + all.match(/\s*$/)[0];
        for (var i = 0; i < slots.length; i++) {
          var v = unesc(parts[i]), sl = slots[i];
          if (sl.nodes.length) { setText(sl.nodes[0], v); for (var j = 1; j < sl.nodes.length; j++) setText(sl.nodes[j], ''); }
          else if (v) {
            var tn = document.createTextNode(v); done.set(tn, v); orig.set(tn, '');
            if (sl.open) sl.before.insertBefore(tn, sl.before.firstChild);
            else if (sl.after) sl.after.parentNode.insertBefore(tn, sl.after.nextSibling);
            else nodes[0].parentNode.insertBefore(tn, nodes[0]);
          }
        }
        return;
      }
    }
    /* no translation for the whole run: its pieces one by one */
    for (var s = 0; s < slots.length; s++) for (var n = 0; n < slots[s].nodes.length; n++) doRun([slots[s].nodes[n]]);
  }
  function attrs(e) {
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i], v = e.getAttribute(a); if (!v) continue;
      var o = e['__i18n_' + a];
      var en = o && o.tr === v ? o.en : v, tr = look(en.replace(/\s+/g, ' ').trim());
      if (tr != null && tr !== v) { e.setAttribute(a, unesc(tr)); e['__i18n_' + a] = { en: en, tr: unesc(tr) }; }
    }
    if (e.tagName === 'INPUT' && /^(button|submit|reset)$/i.test(e.type) && e.value) { var tv = look(e.value.trim()); if (tv != null) e.value = unesc(tv); }
  }
  function walk(e) {
    if (e.nodeType !== 1 || skipEl(e)) return;
    attrs(e);
    /* text already typeset by MathJax was translated before it; its pieces are not keys */
    var typeset = false; for (var m = e.firstElementChild; m; m = m.nextElementSibling) if (/^MJX-/.test(m.tagName)) typeset = true;
    if (typeset) { for (var k = e.firstElementChild; k; k = k.nextElementSibling) if (!/^MJX-/.test(k.tagName) && !INLINE[tagOf(k)]) walk(k); return; }
    var run = [];
    var flush = function () { if (run.length) { var r = run; run = []; var any = false; for (var i = 0; i < r.length; i++) if (r[i].nodeType === 1 || /\S/.test(r[i].data)) any = true; if (any) doRun(r); } };
    for (var c = e.firstChild; c; c = c.nextSibling) {
      if (c.nodeType === 3) run.push(c);
      else if (c.nodeType === 1 && plainInline(c)) run.push(c);
      else { flush(); if (c.nodeType === 1) walk(c); }
    }
    flush();
    if (e.shadowRoot) walk(e.shadowRoot);
  }
  /* the block that holds node n (the run it belongs to is re-done as a whole) */
  function holder(n) {
    var e = n.nodeType === 1 ? n : n.parentNode;
    while (e && e.nodeType === 1 && e.parentNode && e.parentNode.nodeType === 1 && plainInline(e)) e = e.parentNode;
    return e;
  }
  function inSkip(e) { for (; e && e.nodeType === 1; e = e.parentNode) if (skipEl(e)) return true; return false; }

  var mo = null;
  function pass() {
    busy = true;
    try {
      if (document.title) { var tt = look(document.title.replace(/\s+/g, ' ').trim()); if (tt != null) document.title = unesc(tt); }
      walk(document.body);
    } catch (err) { setTimeout(function () { throw err; }); }
    busy = false;
    if (mo) mo.takeRecords();
  }
  function mathJax(r) {
    var t = r.target, l = r.addedNodes.length ? r.addedNodes : r.removedNodes, text = true;
    for (var i = 0; i < l.length; i++) { if (l[i].nodeType === 1 && /^MJX-/.test(l[i].tagName)) return true; if (l[i].nodeType === 1) text = false; }
    if (t.nodeType !== 1) return false;
    if (t.closest && t.closest('mjx-container')) return true;
    if (text) for (var c = t.firstElementChild; c; c = c.nextElementSibling) if (/^MJX-/.test(c.tagName)) return true;
    return false;
  }
  function onMut(recs) {
    if (busy) return;
    var todo = [];
    for (var i = 0; i < recs.length; i++) {
      var r = recs[i];
      if (r.type === 'childList' && mathJax(r)) continue;   /* MathJax typesetting text that is already translated */
      var n = r.type === 'attributes' ? r.target : holder(r.target);
      if (r.type === 'characterData' && done.get(r.target) === r.target.data) continue;
      if (n && todo.indexOf(n) < 0) todo.push(n);
    }
    if (!todo.length) return;
    busy = true;
    try {
      for (var j = 0; j < todo.length; j++) {
        var t = todo[j];
        if (!t.isConnected || inSkip(t)) continue;
        if (t.nodeType === 1 && !t.closest) continue;
        walk(t);
      }
    } catch (err) { setTimeout(function () { throw err; }); }
    busy = false;
    mo.takeRecords();
  }

  /* measureText looks up but never records (word wrapping measures every growing prefix of a line) */
  function quiet(k) { if (COLLECT) return null; var m = MISS; MISS = null; try { return look(k); } finally { MISS = m; } }
  /* VDI18N.raw(fn): canvas text drawn inside fn is drawn as given, neither looked up nor recorded. For text a demo has already
     translated whole with VDI18N.t and then split into lines itself. */
  var RAW = 0;
  I.raw = function (fn) { RAW++; try { return fn(); } finally { RAW--; } };
  /* canvas text, alert and confirm */
  function patchCanvas() {
    var P = window.CanvasRenderingContext2D && CanvasRenderingContext2D.prototype; if (!P) return;
    ['fillText', 'strokeText', 'measureText'].forEach(function (f) {
      var o = P[f]; if (!o) return;
      var measure = f === 'measureText';
      P[f] = function (s) {
        if (!RAW && typeof s === 'string' && LETTER.test(s)) { var tr = measure ? quiet(s.replace(/\s+/g, ' ').trim()) : look(s.replace(/\s+/g, ' ').trim()); if (tr != null) { var a = Array.prototype.slice.call(arguments); a[0] = unesc(tr); return o.apply(this, a); } }
        return o.apply(this, arguments);
      };
    });
    ['alert', 'confirm', 'prompt'].forEach(function (f) {
      var o = window[f]; if (!o) return;
      window[f] = function (s) { var a = Array.prototype.slice.call(arguments); if (typeof s === 'string') a[0] = I.t(s); return o.apply(window, a); };
    });
  }
  if (active || COLLECT) patchCanvas();

  function start() {
    if (active || COLLECT) {
      pass();
      if (window.MutationObserver) {
        mo = new MutationObserver(onMut);
        mo.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS.concat(['value']) });
      }
      root.classList.remove('vd-i18n-wait');
      if (resolveDone) resolveDone();
    }
    placeSwitch();
  }
  /* after other DOMContentLoaded work (the page's own scripts build their text first) */
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { setTimeout(start, 0); });
  else setTimeout(start, 0);

  /* ---------- the switch, beside the theme switch ---------- */
  var SW_CSS = '.vd-lang{display:inline-flex;align-items:center;gap:5px;margin:0;font:inherit;font-size:.82rem;font-weight:700;color:var(--muted,#5a6575);white-space:nowrap}'
    + '.vd-lang svg{width:14px;height:14px;flex:none;fill:none;stroke:currentColor;stroke-width:1.3}'
    + '.vd-lang select{font:inherit;font-weight:700;color:inherit;background:var(--surface,#f8fafc);border:1px solid var(--line,#d3d9e2);border-radius:6px;padding:4px 6px;cursor:pointer;max-width:11em}'
    + '.vd-lang select:focus-visible{outline:2px solid var(--accent,#2b60b5);outline-offset:1px}'
    + '.vd-lang .vd-lang-draft{font-size:.7rem;font-weight:700;padding:1px 5px;border-radius:4px;border:1px solid currentColor}'
    + '.vd-theme-hero+.vd-lang{position:absolute;top:14px;right:var(--vd-lang-right,0);z-index:2}'
    + '.vd-theme-doc+.vd-lang{float:right;margin:0 0 8px 12px}'
    + '@media (max-width:640px){.vd-lang select{min-height:36px}.vd-theme-hero+.vd-lang{position:static;display:flex;justify-content:flex-end;margin:-6px 0 10px}}'
    + '@media print{.vd-lang{display:none!important}}';
  var GLOBE = '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.3"/><path d="M1.7 8h12.6M8 1.7c-2.2 2.4-2.2 10.2 0 12.6M8 1.7c2.2 2.4 2.2 10.2 0 12.6"/></svg>';
  function placeSwitch() {
    if (!PAGE || document.querySelector('.vd-lang')) return;
    var any = false; for (var l in LANGS) if (has(l)) any = true;
    if (!any && saved === 'en' && !PSEUDO) return;
    var th = document.querySelector('.vd-theme'); if (!th) return;
    var st = document.createElement('style'); st.textContent = SW_CSS; document.head.appendChild(st);
    var lab = document.createElement('label'); lab.className = 'vd-lang';
    lab.innerHTML = GLOBE;
    var sel = document.createElement('select'); sel.setAttribute('aria-label', 'Language');
    var opt = function (v, text) { var o = document.createElement('option'); o.value = v; o.textContent = text; sel.appendChild(o); return o; };
    opt('en', 'English');
    for (var k in LANGS) { var o = opt(k, LANGS[k].name); if (!has(k)) { o.textContent = LANGS[k].name + ' (' + (LANGS[k].missing || 'not on this page yet') + ')'; } }
    if (PSEUDO) opt('qps', 'Pseudo (check)');
    sel.value = lang;
    lab.title = active && info.note ? info.note : 'Language of the site';
    sel.addEventListener('change', function () { I.set(sel.value); });
    lab.appendChild(sel);
    if (active && info.draft) { var d = document.createElement('span'); d.className = 'vd-lang-draft'; d.textContent = info.draft; d.title = info.note || ''; lab.appendChild(d); }
    th.parentNode.insertBefore(lab, th.nextSibling);
    if (th.classList.contains('vd-theme-hero')) { lab.style.setProperty('--vd-lang-right', (th.offsetWidth + 10) + 'px'); }
  }
})();
