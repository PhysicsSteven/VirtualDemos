/* VirtualDemos shared script (demos/lib/vd.js). © 2026 Steven Anderson. All rights reserved.
   Loaded in the head of every moved demo, before the demo's own script. It defines window.VD and, once the page has
   loaded, wires up the pieces every demo shares, exactly as the blocks that tools/qr.py, tools/reset.py and the plot
   fold script used to paste into each file:
     .vd-qr          the QR button: large on click, removes itself when the page is not the hosted copy it points to
     #vdReset        Reset all: reloads the page, asking first when readings would be lost
     details.plotfold  a plot folded in the sidebar is drawn when it opens (its size is zero while folded)
   Helpers a demo calls itself: VD.projector, VD.setupCard. See demos/lib/README.md. Never change what an existing helper does:
   add an option or a new helper instead, and rerun tools/vdcheck.cjs on every moved demo after any edit here. */
(function () {
  'use strict';
  var VD = window.VD = window.VD || {};

  /* the QR button (markup from tools/qr.py): only shown on the hosted copy it points to; opened from a file, Canvas or
     another host it removes itself instead of showing a link that may not work there. Click shows it large; click or Esc closes */
  VD.qr = function (b) {
    var h = location.href.split(/[?#]/)[0].toLowerCase();
    if (h !== b.dataset.url.toLowerCase()) { b.remove(); return; }
    b.addEventListener('click', function () {
      var o = document.createElement('div'); o.className = 'vd-qr-big'; o.setAttribute('role', 'dialog'); o.setAttribute('aria-label', 'QR code');
      o.innerHTML = b.innerHTML + '<div>Scan to open this demo on your phone</div><small>' + b.dataset.url + '</small>';
      function x(e) { if (!e || e.type === 'click' || e.key === 'Escape') { o.remove(); document.removeEventListener('keydown', x); b.focus(); } }
      o.addEventListener('click', x); document.addEventListener('keydown', x); document.body.appendChild(o);
    });
  };

  /* Reset all (markup from tools/reset.py): reloads the page, so every control, preset and the simulation are as the page
     opened (the address, Projector and Reduce motion survive). Asks first when a table holds more data rows than it had
     just after load, or a Capture, Record, Add point, Add to table, Keep trace or Pin button was pressed since the last
     Clear. A demo can define window.vdReadings = () => count instead. b.vdLost() is there for tests */
  VD.reset = function (b) {
    var base = new WeakMap(), rec = false;
    function data(t) { var n = 0; Array.prototype.forEach.call(t.rows, function (r) {
      if (r.parentNode.tagName === 'THEAD' || r.parentNode.tagName === 'TFOOT') return;
      if (r.cells.length > 1 || (r.cells.length === 1 && r.cells[0].colSpan < 2)) n++; }); return n; }
    function snap() { document.querySelectorAll('table').forEach(function (t) { base.set(t, data(t)); }); }
    if (document.readyState === 'complete') setTimeout(snap, 400); else window.addEventListener('load', function () { setTimeout(snap, 400); });
    document.addEventListener('click', function (e) { var x = e.target.closest && e.target.closest('button'); if (!x || x === b) return;
      var s = x.textContent.trim(); if (/^(capture|record|add to table|add point|keep trace|pin this)/i.test(s)) rec = true;
      else if (/^clear/i.test(s)) rec = false; }, true);
    function lost() { if (typeof window.vdReadings === 'function') return Number(window.vdReadings()) || 0; var n = 0;
      document.querySelectorAll('table').forEach(function (t) { n += Math.max(0, data(t) - (base.has(t) ? base.get(t) : 0)); }); return n || (rec ? -1 : 0); }
    b.vdLost = lost;
    b.addEventListener('click', function () { var n = lost();
      if (n && !window.confirm('Reset all clears ' + (n > 1 ? 'the ' + n + ' readings' : n === 1 ? 'the reading' : 'the readings') + ' you recorded. '
        + 'Export them first if you need them. Reset anyway?')) return;
      document.querySelectorAll('input,select,textarea,form').forEach(function (e) { e.setAttribute('autocomplete', 'off'); });
      location.reload(); });
  };

  /* a plot folded in the sidebar is drawn when it opens: press its pressed plot button again, or send a resize */
  VD.plotfold = function (d) {
    d.addEventListener('toggle', function () { if (!d.open) return; var b = d.querySelector('[data-plot][aria-pressed="true"]'); if (b) b.click(); else window.dispatchEvent(new Event('resize')); });
  };

  /* Projector: larger type and lines for the back row, remembered across demos in localStorage (vd-projector).
     VD.projector({ button, onChange }) wires the button (default #proj), restores the saved choice, and returns set(on).
     onChange runs on the next animation frame after each change, usually the demo's resize or draw. */
  VD.projector = function (o) {
    o = o || {}; var btn = typeof o.button === 'string' ? document.querySelector(o.button) : o.button || document.getElementById('proj');
    function set(on) { document.documentElement.setAttribute('data-projector', on ? 'on' : 'off'); btn.setAttribute('aria-pressed', String(on));
      try { localStorage.setItem('vd-projector', on ? 'on' : 'off'); } catch (_) {} if (o.onChange) requestAnimationFrame(o.onChange); }
    btn.addEventListener('click', function () { set(btn.getAttribute('aria-pressed') !== 'true'); });
    try { if (localStorage.getItem('vd-projector') === 'on') set(true); } catch (_) {}
    return set;
  };

  /* The Set up card: controls on the picture that are set before a run. VD.setupCard(card, { grip, within }) returns
     { away(on), ghost(on) }:
       away(true)   the card fades away and goes inert while the apparatus runs; away(false) brings it back (call it on Pause)
       ghost(true)  the card turns see through and lets the pointer pass while something under it is dragged
     Where the card floats over the picture (position absolute), its grip (default: its first child) drags it anywhere over
     the picture, the arrow keys on the grip move it 10 px (Shift: 40 px), and a double click puts it back. The move is a
     CSS translate on top of wherever the demo places the card, and it stays inside the picture: the card's offsetParent,
     or the element (or selector) given as within, for a card placed on the bench over a stage beside the sidebar. On phones, where the
     card sits under the picture, it does not move. */
  VD.setupCard = function (card, o) {
    o = o || {};
    var grip = typeof o.grip === 'string' ? card.querySelector(o.grip) : o.grip || card.firstElementChild, dx = 0, dy = 0;
    var box = function () { return (typeof o.within === 'string' ? document.querySelector(o.within) : o.within) || card.offsetParent || card.parentElement; };
    var floating = function () { return getComputedStyle(card).position === 'absolute'; };
    function place(x, y) {
      card.style.translate = '';
      var p = box().getBoundingClientRect(), r = card.getBoundingClientRect();
      x = Math.max(p.left - r.left, Math.min(p.right - r.right, x)); y = Math.max(p.top - r.top, Math.min(p.bottom - r.bottom, y));
      dx = Math.round(x); dy = Math.round(y); card.style.translate = dx || dy ? dx + 'px ' + dy + 'px' : '';
    }
    function mark() { card.classList.toggle('vd-movable', floating()); if (!floating() && (dx || dy)) { dx = dy = 0; card.style.translate = ''; } }
    if (grip) {
      grip.classList.add('vd-grip'); grip.setAttribute('tabindex', '0'); grip.setAttribute('role', 'button');
      grip.setAttribute('aria-label', (grip.textContent.trim() ? grip.textContent.trim() + '. ' : '') + 'Drag, or use the arrow keys, to move this card; double click to put it back');
      var sx = 0, sy = 0, ox = 0, oy = 0, on = false;
      grip.addEventListener('pointerdown', function (e) { if (!floating() || e.button) return; on = true; sx = e.clientX; sy = e.clientY; ox = dx; oy = dy; grip.setPointerCapture(e.pointerId); card.classList.add('vd-dragging'); e.preventDefault(); });
      grip.addEventListener('pointermove', function (e) { if (on) place(ox + e.clientX - sx, oy + e.clientY - sy); });
      var end = function () { on = false; card.classList.remove('vd-dragging'); };
      grip.addEventListener('pointerup', end); grip.addEventListener('pointercancel', end);
      grip.addEventListener('dblclick', function () { place(0, 0); });
      grip.addEventListener('keydown', function (e) {
        var k = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[e.key]; if (!k || !floating()) return;
        var s = e.shiftKey ? 40 : 10; place(dx + k[0] * s, dy + k[1] * s); e.preventDefault(); e.stopPropagation(); });
      mark(); window.addEventListener('resize', function () { mark(); if (dx || dy) place(dx, dy); });
    }
    return {
      away: function (on) { card.classList.toggle('away', !!on); card.inert = !!on; },
      ghost: function (on) { card.classList.toggle('ghost', !!on); },
      reset: function () { place(0, 0); },
    };
  };

  function wire() {
    document.querySelectorAll('.vd-qr[data-url]').forEach(VD.qr);
    var r = document.getElementById('vdReset'); if (r) VD.reset(r);
    document.querySelectorAll('details.plotfold').forEach(VD.plotfold);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wire); else wire();
})();
