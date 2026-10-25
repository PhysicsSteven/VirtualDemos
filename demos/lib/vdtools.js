/* VirtualDemos measuring tools (demos/lib/vdtools.js). © 2026 Steven Anderson. All rights reserved.
   A stopwatch and a ruler a student drags over the picture, reached from a Tools button in the strip across the top of the
   picture. vd.js loads this file the first time a demo calls VD.tools(o), once per page:
     time        () => the demo's simulated time, or null when there is no running clock in the current view. The stopwatch
                 adds up only the time the demo's own clock advances, so it stops when the demo is paused, runs slow in
                 slow motion, and ignores the clock going back to zero on a reset. It reads the clock once a frame.
     timeUnit    the unit of time() (default 's', shown in ms, µs or ns below a second; also 'ms', 'µs', 'ns', 'ps', 'fs', 'min',
                 'h', 'day', 'yr', 'Myr', 'Gyr'), or a function giving it when it depends on the setup
     scale       () => meters per CSS pixel of the picture, or { el, m, area } when it depends on which picture shows, or null
                 when the view has no true length scale (3D, a graph, a picture not drawn to scale). Without scale the
                 page has no ruler, so it never shows a length the picture does not have.
     el          the picture the scale applies to (a canvas): the ruler is drawn over it and kept inside it. area = [x, y, w, h]
                 in CSS pixels of el keeps the ruler to the part drawn to scale, away from a graph or a timer beside it
     lengthUnit  'AU', 'ly', 'pc', 'light s' or 'km' (or unit in the scale object) to read the ruler in that unit; default SI meters with a prefix that fits
     strip       where the Tools button goes (default: the first .stage-ctl strip shown, else a corner of el)
     float       with no strip, CSS for where the button floats over the picture (default 'top: 8px; right: 8px')
     stage       what the stopwatch floats over and stays inside (default: the strip's parent)
   A demo with several scenes calls VD.tools once for each, each returning null while its scene is hidden; the first source
   that gives a value wins, and the button moves to the strip of the scene on show.
   Leave out time or scale on a demo that has no clock or no true length scale. Reset all reloads the page, which clears both. */
(function () {
  'use strict';
  var VD = window.VD = window.VD || {};
  var $el = function (x) { return typeof x === 'string' ? document.querySelector(x) : x || null; };
  var mk = function (tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; };
  var NS = 'http://www.w3.org/2000/svg', sv = function (tag, at) { var e = document.createElementNS(NS, tag); for (var k in at) e.setAttribute(k, at[k]); return e; };

  var CSS = [
    '.vdt-menu{position:absolute;z-index:1000;display:flex;flex-direction:column;gap:4px;padding:6px;background:var(--surface);border:1px solid var(--line);border-radius:8px;box-shadow:0 6px 20px rgba(0,0,0,.18);font:600 .86rem/1.2 var(--font-ui)}',
    '.vdt-menu button{font:inherit;text-align:left;color:var(--ink);background:none;border:0;border-radius:6px;padding:8px 10px;min-height:36px;cursor:pointer;display:flex;align-items:center;gap:8px;white-space:nowrap}',
    '.vdt-menu button:hover{background:color-mix(in srgb,var(--accent) 12%,transparent)}',
    '.vdt-menu button[aria-pressed="true"]{color:var(--accent)}',
    '.vdt-menu button::before{content:"";width:14px;height:14px;border:2px solid currentColor;border-radius:4px;flex:none;box-sizing:border-box}',
    '.vdt-menu button[aria-pressed="true"]::before{background:currentColor;box-shadow:inset 0 0 0 2px var(--surface)}',
    '.vdt-menu button:disabled{color:var(--muted);cursor:default;background:none}',
    '.vdt-menu small{display:block;font-weight:400;color:var(--muted)}',
    '.vdt-btn[aria-expanded="true"]{border-color:var(--accent);color:var(--accent)}',
    '.vdt-float{position:absolute;z-index:6;top:8px;right:8px}',
    '.vdt-watch{position:absolute;z-index:50;display:flex;flex-direction:column;gap:6px;padding:8px 10px 10px;min-width:178px;background:color-mix(in srgb,var(--surface) 94%,transparent);border:1px solid var(--line);border-radius:10px;box-shadow:0 6px 18px rgba(0,0,0,.18);font:600 .8rem/1.2 var(--font-ui);color:var(--ink);touch-action:none;user-select:none;-webkit-user-select:none}',
    '.vdt-head{display:flex;align-items:center;justify-content:space-between;gap:8px;cursor:grab;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;font-size:.68rem}',
    '.vdt-head::before{content:"⠿";font-size:.9rem;letter-spacing:0}',
    '.vdt-head span{flex:1}',
    '.vdt-x{font:inherit;font-size:1rem;line-height:1;color:var(--muted);background:none;border:0;padding:2px 4px;cursor:pointer;min-width:28px;min-height:28px}',
    '.vdt-read{font:700 1.7rem/1.1 var(--font-mono);font-variant-numeric:tabular-nums;text-align:right;letter-spacing:-.01em}',
    '.vdt-sub{display:flex;justify-content:space-between;gap:8px;font:400 .74rem/1.2 var(--font-mono);color:var(--muted)}',
    '.vdt-row{display:flex;gap:6px}',
    '.vdt-row button{flex:1;font:700 .82rem/1 var(--font-ui);color:var(--ink);background:var(--canvas);border:1px solid var(--line);border-radius:6px;padding:7px 6px;min-height:34px;cursor:pointer}',
    '.vdt-row button.go{background:var(--ink);color:var(--canvas);border-color:var(--ink)}',
    '.vdt-row button:disabled{opacity:.45;cursor:default}',
    '.vdt-laps{margin:0;padding:0;list-style:none;font:400 .74rem/1.35 var(--font-mono);color:var(--muted);max-height:5.6em;overflow:auto}',
    '.vdt-laps li{display:flex;justify-content:space-between;gap:10px}',
    '.vdt-layer{position:absolute;z-index:45;overflow:hidden;pointer-events:none}',
    '.vdt-layer svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}',
    '.vdt-tape{pointer-events:auto;cursor:move;touch-action:none}',
    '.vdt-end{pointer-events:auto;cursor:grab;touch-action:none}',
    '.vdt-end:focus{outline:none}',
    '.vdt-end:focus-visible .vdt-ring{stroke:var(--accent);stroke-width:3}',
    '.vdt-len{position:absolute;pointer-events:none;transform:translate(-50%,-50%);padding:3px 8px;border-radius:999px;background:var(--ink);color:var(--canvas);font:700 .82rem/1.2 var(--font-mono);white-space:nowrap}',
    '[data-projector="on"] .vdt-read{font-size:2.2rem}',
    '[data-projector="on"] .vdt-len{font-size:1rem}',
    '@media (max-width:520px){.vdt-watch{min-width:150px;padding:6px 8px 8px}.vdt-read{font-size:1.35rem}}',
  ].join('\n');

  /* time units: seconds in one unit; a Julian year of 365.25 days */
  var TU = { s: 1, ms: 1e-3, 'µs': 1e-6, ns: 1e-9, ps: 1e-12, fs: 1e-15, min: 60, h: 3600, day: 86400, yr: 31557600, Myr: 31557600e6, Gyr: 31557600e9 };
  /* length units in meters: the light second from c, the au exactly (IAU 2012), the light year from c and the Julian year, the parsec from the au (IAU 2015) */
  var LU = { km: 1e3, 'light s': 299792458, AU: 149597870700, ly: 9460730472580800, pc: 149597870700 * 648000 / Math.PI };
  var PRE = [[1e3, 'km'], [1, 'm'], [1e-2, 'cm'], [1e-3, 'mm'], [1e-6, 'µm'], [1e-9, 'nm'], [1e-12, 'pm'], [1e-15, 'fm']];
  var minus = function (s) { return String(s).replace('-', '−'); };

  /* the unit a length of about x meters reads in, as [meters per unit, name] */
  function lunit(x, fixed) {
    if (fixed) return [LU[fixed], fixed === 'AU' ? 'au' : fixed];
    for (var i = 0; i < PRE.length; i++) if (x >= PRE[i][0] * 0.999) return PRE[i];
    return PRE[PRE.length - 1];
  }
  /* a nice step (1, 2 or 5 times a power of ten) of at least x */
  function nice(x) { var p = Math.pow(10, Math.floor(Math.log10(x))), r = x / p; return (r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * p; }
  var dec = function (step) { return Math.max(0, Math.min(8, Math.ceil(-Math.log10(step) - 1e-9))); };

  var srcs = [];
  /* the first source with a clock (or a scale) in the current view wins, so each scene of a demo can register its own */
  function timeOf() { for (var i = 0; i < srcs.length; i++) { var o = srcs[i]; if (!o.time) continue; var t = o.time(); if (t != null && isFinite(t)) return { t: +t, u: (typeof o.timeUnit === 'function' ? o.timeUnit() : o.timeUnit) || 's', o: o }; } return null; }
  function scaleOf() {
    for (var i = 0; i < srcs.length; i++) {
      var o = srcs[i]; if (!o.scale) continue; var s = o.scale(); if (s == null || s === false) continue;
      var r = typeof s === 'number' ? { el: $el(o.el), m: s } : { el: $el(s.el) || $el(o.el), m: +s.m, area: s.area, unit: s.unit };
      if (r.el && r.m > 0 && isFinite(r.m) && r.el.getClientRects().length) { r.unit = r.unit || o.lengthUnit; return r; }
    }
    return null;
  }
  var hasTime = function () { return srcs.some(function (o) { return !!o.time; }); }, hasScale = function () { return srcs.some(function (o) { return !!o.scale; }); };
  function tools(o) {
    srcs.push(o); if (tools.done) return; tools.done = true;
    var st = mk('style'); st.id = 'vdt-style'; st.textContent = CSS; document.head.appendChild(st);
    var shown = function (e) { return !!e && e.getClientRects().length > 0; };
    var btn = mk('button', 'btn vdt-btn', 'Tools'); btn.type = 'button'; btn.id = 'vdTools';
    btn.setAttribute('aria-haspopup', 'true'); btn.setAttribute('aria-expanded', 'false');
    btn.title = 'Measuring tools to drag over the picture';
    /* the button sits in the strip of the scene on show: the first source's strip that is shown, else the first .stage-ctl
       shown, else floating in a corner of the first picture shown */
    var strip = null;
    function home() {
      var s = null, i;
      /* no clock and no scale in the view on show, and no tool open: no button */
      btn.hidden = !watch && !ruler && !timeOf() && !scaleOf(); if (btn.hidden && menu) closeMenu();
      for (i = 0; i < srcs.length && !s; i++) if (shown($el(srcs[i].strip))) s = $el(srcs[i].strip);
      if (!s) s = Array.prototype.find.call(document.querySelectorAll('.stage-ctl'), shown) || null;
      if (s) { strip = s; if (btn.parentElement !== s) { btn.classList.remove('vdt-float'); btn.style.cssText = ''; s.appendChild(btn); } return; }
      strip = null;
      for (i = 0; i < srcs.length; i++) { var e = $el(srcs[i].el); if (shown(e)) { if (btn.parentElement !== e.parentElement) { btn.classList.add('vdt-float'); btn.style.cssText = srcs[i].float || ''; e.parentElement.appendChild(btn); } return; } }
    }
    home();
    var stage = function () { for (var i = 0; i < srcs.length; i++) { var e = $el(srcs[i].stage); if (shown(e)) return e; } return strip ? strip.parentElement : btn.parentElement; };
    var pageBox = function (e) { var r = e.getBoundingClientRect(); return { l: r.left + scrollX, t: r.top + scrollY, w: r.width, h: r.height }; };
    /* the part of the picture that is drawn to scale: all of it, or area = [x, y, w, h] in CSS pixels of the picture */
    var areaBox = function (e, a) { var b = pageBox(e); if (!a) return b; var x = Math.max(0, a[0]), y = Math.max(0, a[1]); return { l: b.l + x, t: b.t + y, w: Math.max(40, Math.min(b.w - x, a[2])), h: Math.max(40, Math.min(b.h - y, a[3])) }; };

    /* ---- the menu ---- */
    var menu = null;
    function closeMenu() { if (!menu) return; menu.remove(); menu = null; btn.setAttribute('aria-expanded', 'false'); document.removeEventListener('pointerdown', away, true); document.removeEventListener('keydown', esc, true); }
    function away(e) { if (menu && !menu.contains(e.target) && e.target !== btn) closeMenu(); }
    function esc(e) { if (e.key === 'Escape') { closeMenu(); btn.focus(); e.stopPropagation(); } }
    function item(name, on, can, why, fn) {
      var b = mk('button'); b.type = 'button'; b.setAttribute('aria-pressed', String(on)); b.disabled = !can;
      var t = mk('span', '', name); b.appendChild(t); if (!can && why) t.appendChild(mk('small', '', why));
      b.addEventListener('click', function () { fn(); closeMenu(); btn.focus(); }); menu.appendChild(b); return b;
    }
    btn.addEventListener('click', function () {
      if (menu) { closeMenu(); return; }
      menu = mk('div', 'vdt-menu'); menu.setAttribute('role', 'group'); menu.setAttribute('aria-label', 'Measuring tools');
      if (hasTime()) item('Stopwatch', !!watch, !!timeOf() || !!watch, 'No clock in this view', function () { watch ? watch.close() : openWatch(); });
      if (hasScale()) item('Ruler', !!ruler, !!scaleOf() || !!ruler, 'No true length scale in this view', function () { ruler ? ruler.close() : openRuler(); });
      document.body.appendChild(menu);
      var b = pageBox(btn), w = menu.offsetWidth;
      menu.style.left = Math.max(scrollX + 4, Math.min(scrollX + innerWidth - w - 4, b.l + b.w - w)) + 'px'; menu.style.top = (b.t + b.h + 4) + 'px';
      btn.setAttribute('aria-expanded', 'true');
      document.addEventListener('pointerdown', away, true); document.addEventListener('keydown', esc, true);
      var f = menu.querySelector('button:not(:disabled)'); if (f) f.focus();
    });

    /* a box placed at an offset from the stage's top left corner, kept inside the stage; the head drags it */
    function floater(box, head, at) {
      var ox = at[0], oy = at[1], sx = 0, sy = 0, bx = 0, by = 0, on = false;
      function place() {
        var s = pageBox(stage()), w = box.offsetWidth, h = box.offsetHeight;
        if (ox == null) ox = s.w - w - 10;
        ox = Math.max(0, Math.min(s.w - w, ox)); oy = Math.max(0, Math.min(Math.max(0, s.h - h), oy));
        box.style.left = (s.l + ox) + 'px'; box.style.top = (s.t + oy) + 'px';
      }
      head.addEventListener('pointerdown', function (e) { if (e.button || e.target.closest('button')) return; on = true; sx = e.clientX; sy = e.clientY; bx = ox; by = oy; head.setPointerCapture(e.pointerId); head.style.cursor = 'grabbing'; e.preventDefault(); });
      head.addEventListener('pointermove', function (e) { if (!on) return; ox = bx + e.clientX - sx; oy = by + e.clientY - sy; place(); });
      var end = function () { on = false; head.style.cursor = ''; }; head.addEventListener('pointerup', end); head.addEventListener('pointercancel', end);
      head.tabIndex = 0; head.setAttribute('role', 'button'); head.setAttribute('aria-label', 'Move: drag, or use the arrow keys');
      head.addEventListener('keydown', function (e) { var k = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[e.key]; if (!k) return; var s = e.shiftKey ? 40 : 10; ox += k[0] * s; oy += k[1] * s; place(); e.preventDefault(); e.stopPropagation(); });
      return place;
    }

    /* ---- the stopwatch: adds up the advance of the demo's own clock while it runs ---- */
    var watch = null;
    function openWatch() {
      var u = 's', box = mk('div', 'vdt-watch'), head = mk('div', 'vdt-head'), x = mk('button', 'vdt-x', '×');
      box.setAttribute('role', 'group'); box.setAttribute('aria-label', 'Stopwatch, timing the demo\'s simulated time');
      head.appendChild(mk('span', '', 'Stopwatch')); x.type = 'button'; x.setAttribute('aria-label', 'Close the stopwatch'); head.appendChild(x);
      var read = mk('div', 'vdt-read'), sub = mk('div', 'vdt-sub'), row = mk('div', 'vdt-row'), laps = mk('ol', 'vdt-laps');
      read.setAttribute('aria-live', 'off'); read.setAttribute('role', 'timer');
      var go = mk('button', 'go', 'Start'), lap = mk('button', '', 'Lap'), clr = mk('button', '', 'Reset');
      [go, lap, clr].forEach(function (b) { b.type = 'button'; row.appendChild(b); });
      var note = mk('span', ''), sum = mk('span', ''); sub.appendChild(note); sub.appendChild(sum);
      box.appendChild(head); box.appendChild(read); box.appendChild(row); box.appendChild(sub); box.appendChild(laps);
      document.body.appendChild(box);
      var run = false, acc = 0, last = null, lapAt = 0, n = 0, still = 0, prevNow = performance.now();
      var fmt = function (v) {
        var z = function (x) { return (x < 10 ? '0' : '') + x; };
        if (u === 's' && v >= 3600) { var hh = Math.floor(v / 3600), mm = Math.floor((v - 3600 * hh) / 60); return hh + ':' + z(mm) + ':' + z(Math.floor(v - 3600 * hh - 60 * mm)); }
        if (u === 's' && v >= 60) { var m = Math.floor(v / 60), s = v - 60 * m; return m + ':' + (s < 10 ? '0' : '') + s.toFixed(2); }
        if (u === 's' && v > 0 && v < 0.995) { var k = v >= 9.995e-4 ? [1e3, 'ms'] : v >= 9.995e-7 ? [1e6, 'µs'] : [1e9, 'ns'], x = v * k[0]; return x.toFixed(x >= 100 ? 1 : 2) + ' ' + k[1]; }
        return v.toFixed(v >= 1000 ? 0 : 2) + ' ' + u;
      };
      function show() { read.textContent = fmt(acc); go.textContent = run ? 'Stop' : acc > 0 ? 'Resume' : 'Start'; go.classList.toggle('go', !run); lap.disabled = !run; clr.disabled = run || (acc === 0 && !n); }
      var src = null;
      go.addEventListener('click', function () { run = !run; var T = timeOf(); last = T ? T.t : null; still = 0; show(); });
      lap.addEventListener('click', function () { n++; var li = mk('li'); li.appendChild(mk('span', '', 'Lap ' + n)); li.appendChild(mk('span', '', fmt(acc - lapAt))); laps.insertBefore(li, laps.firstChild); lapAt = acc; sum.textContent = n + (n === 1 ? ' lap' : ' laps'); });
      clr.addEventListener('click', function () { acc = 0; lapAt = 0; n = 0; laps.textContent = ''; sum.textContent = ''; show(); });
      x.addEventListener('click', function () { watch.close(); btn.focus(); });
      var bb = btn.getBoundingClientRect(), sb = stage().getBoundingClientRect(), place = floater(box, head, [null, Math.max(10, bb.bottom - sb.top + 8)]);
      watch = {
        tick: function (now) {
          var T = timeOf(), t = T ? T.t : null;
          if (T && (T.o !== src || T.u !== u)) { src = T.o; last = null; if (T.u !== u) { u = T.u; acc = 0; lapAt = 0; n = 0; laps.textContent = ''; sum.textContent = ''; } }
          var d = t != null && last != null ? t - last : 0;
          if (run && d > 0) { acc += d; still = 0; } else if (run) still += now - prevNow;
          prevNow = now; last = t;
          note.textContent = t == null ? 'no clock in this view' : run && still > 400 ? 'demo paused' : '';
          sub.hidden = !note.textContent && !sum.textContent; laps.hidden = !n;
          show(); place();
        },
        close: function () { box.remove(); watch = null; },
      };
      show(); place();
    }

    /* ---- the ruler: two ends dragged over the picture; it reads the picture's own scale, to the nearest pixel ---- */
    var ruler = null;
    function openRuler() {
      var layer = mk('div', 'vdt-layer'), svg = sv('svg', {}), tape = sv('g', { class: 'vdt-tape' }), len = mk('div', 'vdt-len');
      var body = sv('polygon', { fill: '#f2c94c', 'fill-opacity': '0.88', stroke: '#8a6a12', 'stroke-width': '1' }), ticks = sv('path', { stroke: '#3a2c05', 'stroke-width': '1', fill: 'none' }), labs = sv('g', { fill: '#3a2c05', 'font-size': '10', 'font-family': 'ui-monospace, monospace' });
      tape.appendChild(body); tape.appendChild(ticks); tape.appendChild(labs); svg.appendChild(tape);
      var ends = [0, 1].map(function (i) {
        var g = sv('g', { class: 'vdt-end', tabindex: '0', role: 'slider', 'aria-label': (i ? 'Right' : 'Left') + ' end of the ruler: drag it, or use the arrow keys (Shift for 10 pixels)' });
        g.appendChild(sv('circle', { r: '18', fill: 'transparent' }));
        g.appendChild(sv('circle', { class: 'vdt-ring', r: '8', fill: 'var(--surface)', stroke: '#8a6a12', 'stroke-width': '2' }));
        g.appendChild(sv('circle', { r: '2', fill: '#8a6a12' }));
        svg.appendChild(g); return g;
      });
      layer.appendChild(svg); layer.appendChild(len); document.body.appendChild(layer);
      var sc = scaleOf(), el = sc.el, area = sc.area, unit = sc.unit, box = areaBox(el, area);
      /* the ends as fractions of the picture, so the ruler keeps its place when the picture is resized */
      var P = [[0.1, 0.8], [0.5, 0.8]], W = 32, lastM = sc.m;
      function px(i) { return [P[i][0] * box.w, P[i][1] * box.h]; }
      function draw() {
        var a = px(0), b = px(1), dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy), m = lastM;
        var ux = L ? dx / L : 1, uy = L ? dy / L : 0, nx = -uy, ny = ux;
        var c = function (s, h) { return (a[0] + ux * s + nx * h).toFixed(1) + ',' + (a[1] + uy * s + ny * h).toFixed(1); };
        body.setAttribute('points', [c(-6, 0), c(L + 6, 0), c(L + 6, W), c(-6, W)].join(' '));
        /* ticks every nice step of at least 6 px; a longer tick and a number every fifth or tenth one, at least 56 px apart */
        var un = lunit(56 * m, unit), mu = m / un[0], minor = nice(6 * mu) * un[0], major = nice(56 * mu) * un[0], per = Math.round(major / minor), d = '', i, s;
        if (!unit) un = lunit(major, null);
        labs.textContent = '';
        var count = Math.floor(L * m / minor + 1e-6);
        for (i = 0; i <= count && i < 2000; i++) {
          s = i * minor / m; var big = i % per === 0, mid = !big && per % 2 === 0 && i % (per / 2) === 0;
          d += 'M' + c(s, 0) + 'L' + c(s, big ? 14 : mid ? 10 : 6);
          if (big && i > 0) {
            var p = c(s, 24).split(','), tx = sv('text', { x: p[0], y: p[1], 'text-anchor': 'middle', 'dominant-baseline': 'middle' });
            var ang = Math.atan2(uy, ux) * 180 / Math.PI; if (ang > 90 || ang < -90) ang += 180;
            tx.setAttribute('transform', 'rotate(' + ang.toFixed(1) + ' ' + p[0] + ' ' + p[1] + ')');
            tx.textContent = minus(+(i * minor / un[0]).toFixed(dec(major / un[0]) + 1)) + (i === per ? ' ' + un[1] : ''); labs.appendChild(tx);
          }
        }
        ticks.setAttribute('d', d);
        ends.forEach(function (g, j) { var q = j ? b : a; g.setAttribute('transform', 'translate(' + q[0].toFixed(1) + ' ' + q[1].toFixed(1) + ')'); });
        /* the reading: to the nearest pixel, so its last digit is about one pixel of the picture */
        var Lm = L * m, lu = lunit(Math.max(Lm, m), unit), res = m / lu[0];
        len.textContent = minus((Lm / lu[0]).toFixed(dec(nice(res)))) + ' ' + lu[1];
        var mx = (a[0] + b[0]) / 2 + nx * (W + 16), my = (a[1] + b[1]) / 2 + ny * (W + 16);
        if (my > box.h - 14 || mx < 30 || mx > box.w - 30) { mx = (a[0] + b[0]) / 2 - nx * 18; my = (a[1] + b[1]) / 2 - ny * 18; }
        len.style.left = mx + 'px'; len.style.top = my + 'px';
        ends[0].setAttribute('aria-valuetext', len.textContent); ends[1].setAttribute('aria-valuetext', len.textContent);
      }
      function clampP(q) { return [Math.max(0, Math.min(1, q[0])), Math.max(0, Math.min(1, q[1]))]; }
      function drag(g, which) {
        var on = false, sx, sy, s0;
        g.addEventListener('pointerdown', function (e) { if (e.button) return; on = true; sx = e.clientX; sy = e.clientY; s0 = [P[0].slice(), P[1].slice()]; g.setPointerCapture(e.pointerId); e.preventDefault(); e.stopPropagation(); });
        g.addEventListener('pointermove', function (e) {
          if (!on) return; var fx = (e.clientX - sx) / box.w, fy = (e.clientY - sy) / box.h;
          if (which < 2) P[which] = clampP([s0[which][0] + fx, s0[which][1] + fy]);
          else { /* the whole ruler: keep both ends inside the picture */
            fx = Math.max(-Math.min(s0[0][0], s0[1][0]), Math.min(1 - Math.max(s0[0][0], s0[1][0]), fx));
            fy = Math.max(-Math.min(s0[0][1], s0[1][1]), Math.min(1 - Math.max(s0[0][1], s0[1][1]), fy));
            P = [[s0[0][0] + fx, s0[0][1] + fy], [s0[1][0] + fx, s0[1][1] + fy]];
          }
          draw();
        });
        var end = function () { on = false; }; g.addEventListener('pointerup', end); g.addEventListener('pointercancel', end);
        ['click', 'dblclick', 'wheel'].forEach(function (t) { g.addEventListener(t, function (e) { e.stopPropagation(); }); });
      }
      drag(ends[0], 0); drag(ends[1], 1); drag(tape, 2);
      ends.forEach(function (g, j) {
        g.addEventListener('keydown', function (e) {
          var k = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[e.key]; if (!k) return;
          var s = e.shiftKey ? 10 : 1; P[j] = clampP([P[j][0] + k[0] * s / box.w, P[j][1] + k[1] * s / box.h]); draw(); e.preventDefault(); e.stopPropagation();
        });
      });
      ruler = {
        tick: function () {
          var s = scaleOf();
          if (!s) { layer.style.display = 'none'; return; }
          layer.style.display = '';
          if (s.el !== el) { el = s.el; P = [[0.1, 0.8], [0.5, 0.8]]; }
          area = s.area; unit = s.unit;
          var b = areaBox(el, area), moved = b.l !== box.l || b.t !== box.t || b.w !== box.w || b.h !== box.h;
          if (moved) { box = b; layer.style.left = b.l + 'px'; layer.style.top = b.t + 'px'; layer.style.width = b.w + 'px'; layer.style.height = b.h + 'px'; }
          if (moved || s.m !== lastM) { lastM = s.m; draw(); }
        },
        close: function () { layer.remove(); ruler = null; },
      };
      layer.style.left = box.l + 'px'; layer.style.top = box.t + 'px'; layer.style.width = box.w + 'px'; layer.style.height = box.h + 'px';
      draw();
    }

    (function loop(now) { if (watch) watch.tick(now); if (ruler) ruler.tick(); home(); if (menu && !btn.isConnected) closeMenu(); requestAnimationFrame(loop); })(performance.now());
  }
  VD.tools = tools;
  (VD.toolsQueue || []).forEach(tools); VD.toolsQueue = [];
})();
