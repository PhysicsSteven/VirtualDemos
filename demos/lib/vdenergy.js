/* VirtualDemos energy bars and phase plot (demos/lib/vdenergy.js). © 2026 Steven Anderson. All rights reserved.
   vd.js loads this file the first time a demo calls VD.energy(o), once per page. Each call draws on its own canvases every
   frame while they are on show (a folded panel costs nothing), from getters the demo gives, so the demo keeps no extra state:
     el      the canvas for the energy bars (leave out el and terms for a phase plot alone)
     terms   () => [{ label, v, c }]: one bar per term, v in the unit below, c a CSS color or a token name such as '--c2'
             (default a site color by position); null when the current view has no energy to show
     total   label of a last bar that adds up the terms (default 'Total'; false for none)
     unit    'J', 'J/kg' or a function giving the unit
     run     () => a key for the current run (a number or string): when it changes the scales and the trail start again, so a
             new launch or setup gets bars sized to it. The scale only grows within a run, so a bar never jumps as it changes.
     hidden  () => true while Blind hides the energies (the bars are replaced by a note)
     phase   { el, get: () => [x, v] or null, x: 'x (m)', v: 'v (m/s)', n }: a phase plot of v against x on a second canvas,
             the last n points (default 900) as a trail and the state now as a dot
   The words on each canvas's aria-label follow the values about once a second. */
(function () {
  'use strict';
  var VD = window.VD = window.VD || {};
  var ALL = [];

  function tok(name) { return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); }
  function col(c, i) { if (!c) c = '--c' + (i % 8 + 1); return c.slice(0, 2) === '--' ? tok(c) || tok('--accent') : c; }
  function shown(el) { return el && el.getClientRects().length > 0 && !el.closest('[hidden]'); }
  function fmt(v) { var a = Math.abs(v); if (a === 0) return '0'; if (a >= 1e5 || a < 1e-3) return v.toExponential(2).replace('e', '×10^').replace('+', '').replace(/^-/, '−'); return String(+v.toPrecision(3)).replace('-', '−'); }
  function sup(s) { return s.replace(/\^(-?\d+)/, function (_, d) { return d.split('').map(function (ch) { return '⁻⁰¹²³⁴⁵⁶⁷⁸⁹'['-0123456789'.indexOf(ch)]; }).join(''); }); }
  function fit(cv) {
    var r = cv.getBoundingClientRect(), d = window.devicePixelRatio || 1, w = Math.max(1, Math.round(r.width * d)), h = Math.max(1, Math.round(r.height * d));
    if (cv.width !== w || cv.height !== h) { cv.width = w; cv.height = h; }
    var c = cv.getContext('2d'); c.setTransform(d, 0, 0, d, 0, 0); return { c: c, w: r.width, h: r.height };
  }
  function ps() { return document.documentElement.getAttribute('data-projector') === 'on' ? 1.25 : 1; }
  function font(px, b) { return (b ? '600 ' : '') + px * ps() + 'px ' + (tok('--font-mono') || 'ui-monospace, monospace'); }

  function bars(P, now) {
    var o = P.o, g = fit(o.el), c = g.c, W = g.w, H = g.h, ink = tok('--ink'), mut = tok('--muted'), line = tok('--line');
    c.clearRect(0, 0, W, H);
    var t = o.terms(), unit = typeof o.unit === 'function' ? o.unit() : o.unit || 'J';
    if (!t || !t.length) { P.say = 'No energy to show in this view.'; return; }
    if (o.hidden && o.hidden()) { c.fillStyle = mut; c.font = font(11); c.textAlign = 'center'; c.fillText('Energies hidden in Blind', W / 2, H / 2); P.say = 'Energies hidden in Blind.'; return; }
    var list = t.map(function (x, i) { return { label: x.label, v: x.v, c: col(x.c, i) }; });
    if (o.total !== false) list.push({ label: o.total || 'Total', v: t.reduce(function (s, x) { return s + x.v; }, 0), c: ink, tot: true });
    list.forEach(function (x) { if (x.v > P.hi) P.hi = x.v; if (x.v < P.lo) P.lo = x.v; });
    var hi = P.hi, lo = P.lo, span = (hi - lo) || 1, top = 30 * ps(), bot = H - 22 * ps(), z = top + (bot - top) * hi / span;
    var n = list.length, gap = 10 * ps(), bw = Math.min(46 * ps(), (W - gap * (n + 1)) / n), x0 = (W - (n * bw + (n - 1) * gap)) / 2;
    c.strokeStyle = line; c.lineWidth = 1; c.beginPath(); c.moveTo(4, z); c.lineTo(W - 4, z); c.stroke();
    c.fillStyle = mut; c.font = font(9); c.textAlign = 'left'; c.fillText('0', 4, z + (z > bot - 12 ? -3 : 11 * ps()));
    list.forEach(function (x, i) {
      var bx = x0 + i * (bw + gap), y = top + (bot - top) * (hi - x.v) / span, y1 = Math.min(y, z), h = Math.abs(z - y);
      c.fillStyle = x.c;
      if (x.tot) { c.globalAlpha = 0.18; c.fillRect(bx, y1, bw, h); c.globalAlpha = 1; c.strokeStyle = x.c; c.lineWidth = 1.5 * ps(); c.strokeRect(bx + 0.75, y1, bw - 1.5, Math.max(h, 1)); }
      else c.fillRect(bx, y1, bw, Math.max(h, 1));
      c.fillStyle = ink; c.textAlign = 'center'; c.font = font(10, 1);
      c.fillText(sup(fmt(x.v)), bx + bw / 2, x.v >= 0 ? Math.max(11 * ps(), y1 - 4) : Math.min(bot + 1, y1 + h + 11 * ps()));
      c.fillStyle = mut; c.font = font(10); c.fillText(x.label, bx + bw / 2, H - 6 * ps());
    });
    c.fillStyle = mut; c.font = font(10); c.textAlign = 'left'; c.fillText('Energy (' + unit + ')', 4, 11 * ps());
    P.say = 'Energy bars, in ' + unit + ': ' + list.map(function (x) { return x.label + ' ' + fmt(x.v); }).join(', ') + '.';
  }

  function phase(P) {
    var q = P.o.phase, g = fit(q.el), c = g.c, W = g.w, H = g.h, ink = tok('--ink'), mut = tok('--muted'), line = tok('--line'), acc = tok('--accent');
    c.clearRect(0, 0, W, H);
    var s = q.get();
    if (s && isFinite(s[0]) && isFinite(s[1])) {
      var tr = P.tr, l = tr.length ? tr[tr.length - 1] : null;
      if (!l || l[0] !== s[0] || l[1] !== s[1]) { tr.push([s[0], s[1]]); if (tr.length > (q.n || 900)) tr.shift(); }
      P.xm = Math.max(P.xm, Math.abs(s[0])); P.vm = Math.max(P.vm, Math.abs(s[1]));
    }
    if (P.o.hidden && P.o.hidden()) { c.fillStyle = mut; c.font = font(11); c.textAlign = 'center'; c.fillText('Hidden in Blind', W / 2, H / 2); P.sayP = 'Phase plot hidden in Blind.'; return; }
    var L = 26 * ps(), R = W - 8, T = 10, B = H - 22 * ps(), cx = (L + R) / 2, cy = (T + B) / 2;
    var xs = (R - L) / 2 / ((P.xm || 1) * 1.1), vs = (B - T) / 2 / ((P.vm || 1) * 1.1);
    c.strokeStyle = line; c.lineWidth = 1; c.beginPath(); c.moveTo(L, cy); c.lineTo(R, cy); c.moveTo(cx, T); c.lineTo(cx, B); c.stroke();
    c.fillStyle = mut; c.font = font(10); c.textAlign = 'right'; c.fillText(q.x || 'x', R, B + 15 * ps());
    c.save(); c.translate(11 * ps(), (T + B) / 2); c.rotate(-Math.PI / 2); c.textAlign = 'center'; c.fillText(q.v || 'v', 0, 0); c.restore();
    c.textAlign = 'right'; c.font = font(9); c.fillText(sup(fmt(P.xm * 1.1)), R - 2, cy + 12 * ps()); c.fillText(sup(fmt(P.vm * 1.1)), cx - 4, T + 9 * ps());
    var tr2 = P.tr;
    if (tr2.length > 1) {
      c.strokeStyle = acc; c.lineWidth = 1.4 * ps();
      for (var i = 1; i < tr2.length; i++) {
        c.globalAlpha = 0.15 + 0.85 * i / tr2.length; c.beginPath();
        c.moveTo(cx + tr2[i - 1][0] * xs, cy - tr2[i - 1][1] * vs); c.lineTo(cx + tr2[i][0] * xs, cy - tr2[i][1] * vs); c.stroke();
      }
      c.globalAlpha = 1;
    }
    if (s) { c.fillStyle = ink; c.beginPath(); c.arc(cx + s[0] * xs, cy - s[1] * vs, 3.5 * ps(), 0, 7); c.fill(); }
    P.sayP = s ? 'Phase plot of ' + (q.v || 'v') + ' against ' + (q.x || 'x') + '. Now ' + fmt(s[0]) + ', ' + fmt(s[1]) + '.' : 'Phase plot.';
  }

  function frame(now) {
    ALL.forEach(function (P) {
      var o = P.o, key = o.run ? String(o.run()) : '';
      if (key !== P.key) { P.key = key; P.hi = 0; P.lo = 0; P.tr = []; P.xm = 0; P.vm = 0; }
      var b = !!(o.terms && shown(o.el)), f = !!(o.phase && shown(o.phase.el));
      if (b) bars(P, now);
      if (o.phase && (f || b)) { if (f) phase(P); else { var s = o.phase.get(); if (s) { P.tr.push([s[0], s[1]]); if (P.tr.length > (o.phase.n || 900)) P.tr.shift(); P.xm = Math.max(P.xm, Math.abs(s[0])); P.vm = Math.max(P.vm, Math.abs(s[1])); } } }
      if (now - P.said > 1000) { P.said = now; if (b && P.say) o.el.setAttribute('aria-label', P.say); if (f && P.sayP) o.phase.el.setAttribute('aria-label', P.sayP); }
    });
    requestAnimationFrame(frame);
  }

  function add(o) {
    if (!o || !(o.el && o.terms) && !(o.phase && o.phase.el)) return;
    if (o.el) o.el.setAttribute('role', 'img'); if (o.phase && o.phase.el) o.phase.el.setAttribute('role', 'img');
    ALL.push({ o: o, key: null, hi: 0, lo: 0, tr: [], xm: 0, vm: 0, said: 0, say: '', sayP: '' });
  }
  VD.energy = add;
  (VD.energyQueue || []).forEach(add); VD.energyQueue = [];
  requestAnimationFrame(frame);
})();
