/* VirtualDemos shared 3D helpers (window.VD3), for a demo that adds a three.js view beside its flat one.
   three.js r128 is loaded from cdnjs the first time a 3D view opens, so a page that never opens one never downloads it.
   Never change what an existing helper does: add an option or a new helper instead (see demos/lib/README.md).

   VD3.load(cb)                      loads three.js once; cb(true) when window.THREE is ready, cb(false) if it cannot load
   VD3.renderer({ max })             a WebGLRenderer with its pixel ratio capped (default 2, 1.5 on a phone), or null without WebGL
   VD3.lowPower()                    true when the browser asks to save data or has two cores or fewer: open the flat view first
   VD3.dark()                        true when the page shows its dark theme (data-theme, else the system setting)
   VD3.orbit(el, o, onChange, opt)   drag to turn, wheel or pinch to zoom, double click to reset, on the canvas el. o is
                                     { th, ph, zoom } (azimuth, polar angle from straight up, zoom factor) and is changed in
                                     place; onChange() is called after each change. opt: { phMin, phMax, zMin, zMax, keys }
                                     (keys: comma and period turn, minus and equals zoom, when el has focus). opt.grab(e)
                                     may return true to take a pointer for the demo instead (a drag on the apparatus).
                                     Returns { reset() }.
   VD3.place(cam, o, target, r)      puts a z up camera at distance r / o.zoom from target, at the angles in o */
(function () {
  'use strict';
  var VD3 = window.VD3 = window.VD3 || {};
  var URL3 = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js', wait = null;
  VD3.load = function (cb) {
    if (window.THREE) { cb(true); return; }
    if (wait) { wait.push(cb); return; }
    wait = [cb];
    var sc = document.createElement('script'); sc.src = URL3;
    var done = function (ok) { var w = wait; wait = null; w.forEach(function (f) { f(ok && !!window.THREE); }); };
    sc.onload = function () { done(true); }; sc.onerror = function () { done(false); };
    document.head.appendChild(sc);
  };
  VD3.lowPower = function () {
    var c = navigator.connection; return !!(c && c.saveData) || (navigator.hardwareConcurrency || 4) <= 2;
  };
  VD3.dark = function () {
    var t = document.documentElement.getAttribute('data-theme'); if (t) return t === 'dark';
    try { return matchMedia('(prefers-color-scheme: dark)').matches; } catch (_) { return false; }
  };
  VD3.renderer = function (opt) {
    opt = opt || {};
    if (!window.THREE) return null;
    var r; try { r = new THREE.WebGLRenderer({ antialias: true, alpha: !!opt.alpha }); } catch (_) { return null; }
    if (!r || !r.getContext()) return null;
    var phone = Math.min(screen.width || 9999, screen.height || 9999) < 500;
    r.setPixelRatio(Math.min(window.devicePixelRatio || 1, opt.max || (phone ? 1.5 : 2)));
    return r;
  };
  VD3.place = function (cam, o, t, r) {
    var d = r / o.zoom, s = Math.sin(o.ph);
    cam.position.set(t.x + d * s * Math.cos(o.th), t.y + d * s * Math.sin(o.th), t.z + d * Math.cos(o.ph));
    cam.up.set(0, 0, 1); cam.lookAt(t.x, t.y, t.z);
  };
  VD3.orbit = function (el, o, onChange, opt) {
    opt = opt || {};
    var phMin = opt.phMin == null ? 0.12 : opt.phMin, phMax = opt.phMax == null ? 1.45 : opt.phMax;
    var zMin = opt.zMin || 0.5, zMax = opt.zMax || 2.5, home = { th: o.th, ph: o.ph, zoom: o.zoom };
    var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
    var pts = new Map(), mode = null;
    var gap = function () { var p = Array.from(pts.values()); return Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y) || 1; };
    el.style.touchAction = 'none'; el.style.cursor = 'grab';
    el.addEventListener('pointerdown', function (e) {
      if (opt.grab && pts.size === 0 && opt.grab(e)) return;
      el.setPointerCapture(e.pointerId); pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      mode = pts.size === 2 ? { pinch: true, d0: gap(), z0: o.zoom } : { lx: e.clientX, ly: e.clientY };
      el.style.cursor = 'grabbing';
    });
    el.addEventListener('pointermove', function (e) {
      if (!pts.has(e.pointerId)) return; pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (mode && mode.pinch && pts.size === 2) { o.zoom = clamp(mode.z0 * gap() / mode.d0, zMin, zMax); onChange(); return; }
      if (!mode || mode.pinch) return;
      o.th -= (e.clientX - mode.lx) * 0.008; o.ph = clamp(o.ph - (e.clientY - mode.ly) * 0.006, phMin, phMax);
      mode.lx = e.clientX; mode.ly = e.clientY; onChange();
    });
    var up = function (e) { pts.delete(e.pointerId); if (!pts.size) mode = null; el.style.cursor = 'grab'; };
    el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up);
    el.addEventListener('wheel', function (e) { e.preventDefault(); o.zoom = clamp(o.zoom / Math.exp(e.deltaY * 0.0012), zMin, zMax); onChange(); }, { passive: false });
    var reset = function () { o.th = home.th; o.ph = home.ph; o.zoom = home.zoom; onChange(); };
    el.addEventListener('dblclick', reset);
    if (opt.keys !== false) el.addEventListener('keydown', function (e) {
      if (e.key === ',' || e.key === '.') o.th += e.key === ',' ? 0.12 : -0.12;
      else if (e.key === '-' || e.key === '=' || e.key === '+') o.zoom = clamp(o.zoom * (e.key === '-' ? 0.9 : 1.1), zMin, zMax);
      else return;
      e.preventDefault(); onChange();
    });
    return { reset: reset };
  };
})();
