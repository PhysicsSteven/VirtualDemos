'use strict';
// Terminal velocity: falling with quadratic air drag (OpenStax Vol 1 §6.4).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('terminal-velocity', 'G,RHO_TEXT,isaRho,BODY,CANOPY,FILTER,SWITCH,bodyCA,canopyCA,filterCA,vTerm,vExact,yExact,dragParts,dragArea,accel,rk4,advance,roundTo');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const sky = (o = {}) => Object.assign({ kind: 'sky', m: 85, h0: 4000, air: 'text', pos0: 'spread', moves: [], pull: null }, o);

group("the textbook's two skydivers: 44 m/s spread eagle (Example 6.17) and 98 m/s head first; 34 m/s for 50 kg", () => {
  near(c.vTerm(85, c.bodyCA('spread'), 1.21), Math.sqrt(2 * 85 * 9.81 / (1.21 * 1.0 * 0.70)), 1e-12);
  assert.strictEqual(Math.round(c.vTerm(85, c.bodyCA('spread'), c.RHO_TEXT)), 44);
  assert.strictEqual(Math.round(c.vTerm(75, c.bodyCA('head'), c.RHO_TEXT)), 98);
  assert.strictEqual(Math.round(c.vTerm(50, c.bodyCA('spread'), c.RHO_TEXT)), 34);
});
group('the standard atmosphere: 1.225 kg/m³ at the ground, 0.819 at 4 km, 0.4135 at 10 km', () => {
  near(c.isaRho(0), 1.2250, 2e-4); near(c.isaRho(4000), 0.8194, 1e-3); near(c.isaRho(10000), 0.4135, 2e-3);
});
group('from rest in uniform air the integration matches v = v_T tanh(gt/v_T) and y = (v_T²/g) ln cosh(gt/v_T)', () => {
  const f = sky(), vt = c.vTerm(85, 0.70, 1.21);
  for (const T of [1, 4.5, 12, 30]) { const s = { t: 0, y: 0, v: 0 }; c.advance(f, s, T); near(s.v, c.vExact(vt, T), 1e-9, `v(${T})`); near(s.y, c.yExact(vt, T), 1e-9, `y(${T})`); }
  // at t = v_T/g the speed is tanh 1 = 76.2% of v_T
  near(c.vExact(vt, vt / c.G) / vt, Math.tanh(1), 1e-12);
});
group('at terminal speed the drag equals the weight, and the acceleration is g at rest', () => {
  const f = sky(), vt = c.vTerm(85, 0.70, 1.21);
  near(c.accel(f, 0, 0, 0), c.G, 1e-12); assert(Math.abs(c.accel(f, 0, 0, vt)) < 1e-12);
});
group('a change of position moves the drag area at a steady rate over 1.0 s', () => {
  const f = sky({ moves: [[10, 'head']] });
  near(c.dragArea(f, 10), 0.70, 1e-12); near(c.dragArea(f, 10.5), (0.70 + 0.126) / 2, 1e-12); near(c.dragArea(f, 11), 0.126, 1e-12); near(c.dragArea(f, 50), 0.126, 1e-12);
  const g = sky({ moves: [[10, 'head'], [10.5, 'spread']] });   // turned back halfway: from the halfway value back to 0.70 in 1 s
  near(c.dragArea(g, 10.5), 0.413, 1e-12); near(c.dragArea(g, 11.5), 0.70, 1e-12);
});
group('the canopy: no extra drag while the lines stretch, then CA grows in proportion to time to 63.6 m² plus the upright body', () => {
  near(c.canopyCA(), 0.81 * Math.PI * 25, 1e-12);
  const f = sky({ pull: 20 });
  near(c.dragArea(f, 20.9), 0.70, 1e-12); const p = c.dragParts(f, 22.5); near(p.fill, 0.5, 1e-12); near(p.canopy, c.canopyCA() / 2, 1e-12);
  near(c.dragArea(f, 30), c.canopyCA() + 0.126, 1e-12);
  near(c.vTerm(85, c.canopyCA() + 0.126, 1.21), 4.648, 1e-3);
});
group('a parachute pulled at terminal speed: about 5 g at most while it fills, then down to 4.65 m/s', () => {
  const f = sky({ h0: 2000 }), s = { t: 0, y: 0, v: 0 }; let peak = 0;
  while (!c.advance(f, s, 0.01, (q) => { if (f.pull == null && f.h0 - q.y <= 1500) f.pull = q.t; })) { const a = c.accel(f, s.t, s.y, s.v); if (-a > peak) peak = -a; }
  assert(peak / c.G > 4.5 && peak / c.G < 5.5, `peak ${peak / c.G} g`); near(s.v, 4.648, 1e-3); assert.strictEqual(s.y, 2000);
});
group('thin air: from 10 km the speed peaks where v = v_T(ρ) and then falls as the air thickens', () => {
  const f = sky({ h0: 10000, air: 'isa' }), s = { t: 0, y: 0, v: 0 }; let vmax = 0, at = null;
  while (s.y < 8000) { c.advance(f, s, 0.05); if (s.v > vmax) { vmax = s.v; at = { ...s }; } }
  near(vmax, c.vTerm(85, 0.70, c.isaRho(10000 - at.y)), 2e-3); assert(vmax > 70 && vmax < 73); assert(s.v < vmax - 10);
});
group('coffee filters: one filter 1.05 m/s; n stacked fall √n times faster; a 2 m drop lands at v_T', () => {
  near(c.vTerm(c.FILTER.m, c.filterCA(), 1.21), 1.047, 1e-3);
  for (const k of [2, 4, 8]) near(c.vTerm(k * c.FILTER.m, c.filterCA(), 1.21) / c.vTerm(c.FILTER.m, c.filterCA(), 1.21), Math.sqrt(k), 1e-12);
  for (const k of [1, 6]) { const f = { kind: 'filter', m: k * c.FILTER.m, h0: 2.0, air: 'text', pos0: 'spread', moves: [], pull: null }, s = { t: 0, y: 0, v: 0 };
    assert(c.advance(f, s, 10)); near(s.y, 2.0, 1e-12); near(s.v, c.vTerm(f.m, c.filterCA(), 1.21), 2e-3, `landing ${k}`); }
});
group('landing is found within the step: y = h0 exactly and the time agrees with the exact solution', () => {
  const f = sky({ h0: 300 }), s = { t: 0, y: 0, v: 0 }, vt = c.vTerm(85, 0.70, 1.21);
  assert(c.advance(f, s, 100)); near(c.yExact(vt, s.t), 300, 1e-8); near(s.v, c.vExact(vt, s.t), 1e-8);
});
console.log(`${n} groups passed`);
