'use strict';
// Curves and Motion (2026-11-19): velocity, acceleration, its tangential and normal parts, curvature, arc length, swept area
// and the orbit clock, each against a closed form: uniform and speeding up circular motion, the cycloid, a projectile, the
// helix of a proton in a magnetic field, the cardioid, a rose, the dipole pattern, Lissajous, and Kepler orbits (period,
// a = GM/r² toward the Sun, equal areas in equal times, PF/PD = e, escape speed on the parabola).
const assert = require('node:assert');
const vm = require('node:vm');
const { readDemo, readLib } = require('./demo_source.cjs');
const src = readDemo('curves-and-motion'), m = src.match(/\/\/ ==CORE START==([\s\S]*?)\/\/ ==CORE END==/);
const ctx = {};
vm.runInNewContext(readLib('vdmath.js'), ctx, { timeout: 5000 });
vm.runInNewContext(m[1] + '\nglobalThis.C = { cmCurve, cmRead, cmNumber, cmJet, cmMotion, cmArc, cmArea, cmTime, cmKeplerH, cmTicks, cmConic, cmPeriod, cmDot, cmCross, cmLen };', ctx, { timeout: 5000 });
const c = ctx.C;
/* the constants the page uses, from demos/lib/constants.js */
const K = (() => { const d = {}; vm.runInNewContext(readLib('constants.js'), d); return d.VDC; })();
const GM = K.GMsun * K.yr * K.yr / Math.pow(K.au, 3);
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const even = { kind: 'even' };

group('range boxes take constant expressions', () => {
  near(c.cmNumber('2pi'), 2 * Math.PI, 1e-15); near(c.cmNumber('40/9.81'), 40 / 9.81, 1e-15); near(c.cmNumber('sqrt(200pi)'), Math.sqrt(200 * Math.PI), 1e-15);
  assert.throws(() => c.cmNumber('t'));
});

group('uniform circular motion, r = 2 m, ω = 3 rad/s: v = 6 m/s, a = v²/r = 18 m/s² toward the center, a_T = 0, κ = 1/r', () => {
  const cv = c.cmRead('xy', { x: '2cos(3t)', y: '2sin(3t)' });
  for (const t of [0, 0.3, 1.1, 2]) {
    const M = c.cmMotion(cv, t, even);
    near(M.speed, 6, 1e-12, 'v'); near(M.acc, 18, 1e-12, 'a'); near(M.aT, 0, 1e-12, 'aT'); near(M.aN, 18, 1e-12, 'aN'); near(M.kappa, 0.5, 1e-12, 'κ');
    near(M.center[0], 0, 1e-12, 'center x'); near(M.center[1], 0, 1e-12, 'center y');
    near(c.cmDot(M.A, M.P), -18 * 2, 1e-12, 'a points at the center');
  }
  near(c.cmArc(cv, 0, 2 * Math.PI / 3), 4 * Math.PI, 1e-9, 'one lap 2πr'); near(c.cmArea(cv, 0, 2 * Math.PI / 3), 4 * Math.PI, 1e-9, 'area πr²');
});

group('a car speeding up on a 50 m track, angle 0.01t²: a_T = rα = 1 m/s², a_N = v²/r with v = t', () => {
  const cv = c.cmRead('xy', { x: '50cos(0.01t^2)', y: '50sin(0.01t^2)' });
  for (const t of [1, 5, 12, 25]) { const M = c.cmMotion(cv, t, even); near(M.speed, t, 1e-12, 'v'); near(M.aT, 1, 1e-10, 'aT'); near(M.aN, t * t / 50, 1e-10, 'aN'); near(M.kappa, 1 / 50, 1e-12, 'κ'); }
  near(c.cmArc(cv, 0, Math.sqrt(200 * Math.PI)), 100 * Math.PI, 1e-9, 'one lap');
});

group('the cycloid, R = 0.35 m, one turn a second: arch 8R long, κ = 1/(4R) at the top, a = Rω² toward the hub, a cusp at the bottom', () => {
  const R = 0.35, w = 2 * Math.PI, cv = c.cmRead('xy', { x: '0.35(2pi t - sin(2pi t))', y: '0.35(1 - cos(2pi t))' });
  near(c.cmArc(cv, 0, 1), 8 * R, 1e-9, 'arch'); near(c.cmArc(cv, 0, 2), 16 * R, 1e-9, 'two arches');
  const top = c.cmMotion(cv, 0.5, even); near(top.kappa, 1 / (4 * R), 1e-12, 'κ top'); near(top.speed, 2 * R * w, 1e-12, 'top speed 2v');
  for (const t of [0.1, 0.37, 0.5, 0.9]) {
    const M = c.cmMotion(cv, t, even), hub = [R * w * t, R];
    near(M.acc, R * w * w, 1e-12, 'a = Rω²');
    const toHub = [hub[0] - M.P[0], hub[1] - M.P[1]], L = Math.hypot(...toHub);
    near((M.A[0] * toHub[0] + M.A[1] * toHub[1]) / L, R * w * w, 1e-12, 'a toward the hub');
  }
  const cusp = c.cmMotion(cv, 1, even); assert(cusp.cusp, 'cusp at t = 1'); near(cusp.speed, 0, 1e-12); near(cusp.A[1], R * w * w, 1e-12, 'a straight up at the cusp'); assert.equal(cusp.T, null);
  near(c.cmArea(cv, 0, 1) * 0 + c.cmJet(cv, 1).p[0], 2 * Math.PI * R, 1e-12, 'hub moves 2πR a turn');
});

group('a projectile, 15 m/s across and 20 m/s up, g = 9.81: a = −g, a_T = 0 and κ = g/vx² at the top, range and arc length', () => {
  const g = K.g, cv = c.cmRead('xy', { x: '15t', y: '20t - 4.905t^2' }), tTop = 20 / g, tEnd = 40 / g;
  for (const t of [0, 1, tTop, 3.5]) { const M = c.cmMotion(cv, t, even); near(M.A[0], 0, 1e-12); near(M.A[1], -g, 1e-12, 'a = −g'); }
  const top = c.cmMotion(cv, tTop, even); near(top.aT, 0, 1e-12, 'aT top'); near(top.aN, g, 1e-12, 'aN top'); near(1 / top.kappa, 225 / g, 1e-12, 'ρ top 22.9 m');
  near(c.cmMotion(cv, 0, even).aT, -g * 20 / 25, 1e-12, 'aT at launch'); near(c.cmMotion(cv, tEnd, even).aT, g * 20 / 25, 1e-12, 'aT at landing');
  near(c.cmJet(cv, tEnd).p[0], 600 / g, 1e-12, 'range'); near(c.cmJet(cv, tEnd).p[1], 0, 1e-12, 'lands');
  near(c.cmArc(cv, 0, tEnd), (500 + 225 * Math.log(3)) / g, 1e-9, 'arc length closed form');
});

group('the helix of a proton in B along +z: |v| constant, a_T = 0, κ = R/(R² + c²), a turn is 2π√(R² + c²) long, clockwise seen from above', () => {
  const R = 10.44, w = 0.9579, vz = 3, cc = vz / w, cv = c.cmRead('xyz', { x: `${R}cos(${w}t)`, y: `-${R}sin(${w}t)`, z: `${vz}t` });
  for (const t of [0, 1.3, 5]) {
    const M = c.cmMotion(cv, t, even); near(M.speed, Math.hypot(R * w, vz), 1e-12, 'v'); near(M.aT, 0, 1e-12, 'aT'); near(M.kappa, R / (R * R + cc * cc), 1e-12, 'κ');
    near(M.acc, R * w * w, 1e-12, 'a = v⊥²/R'); near(M.A[2], 0, 1e-12, 'a ⊥ B'); near(c.cmLen(M.B), 1, 1e-12, 'B unit');
    assert(c.cmCross(M.P, M.V)[2] < 0, 'clockwise seen from +z, as a positive charge turns');
  }
  near(c.cmArc(cv, 0, 2 * Math.PI / w), 2 * Math.PI * Math.hypot(R, cc), 1e-9, 'one turn');
  /* the page's rounded numbers come from CODATA 2022: R = m v⊥/(qB), ω = qB/m */
  near(K.mp * 1e5 / (K.e * 0.010) * 100, 10.44, 5e-4, 'R in cm'); near(K.e * 0.010 / K.mp * 1e-6, 0.9579, 5e-4, 'ω per μs');
});

group('Lissajous 3 : 2: a = (−9x, −4y), closes after 2π', () => {
  const cv = c.cmRead('xy', { x: 'sin(3t)', y: 'sin(2t)' });
  for (const t of [0.2, 1, 2.7]) { const M = c.cmMotion(cv, t, even); near(M.A[0], -9 * M.P[0], 1e-12); near(M.A[1], -4 * M.P[1], 1e-12); }
  const a = c.cmJet(cv, 0).p, b = c.cmJet(cv, 2 * Math.PI).p; near(a[0], b[0], 1e-12); near(a[1], b[1], 1e-12);
});

group('polar curves: cardioid area 3π/2, length 8, κ = 3/(4 cos(θ/2)); rose 2 sin 2θ area 2π; dipole sin²θ area 3π/8', () => {
  const card = c.cmRead('polar', { r: '1 + cos(θ)' });
  near(c.cmArea(card, 0, 2 * Math.PI), 1.5 * Math.PI, 1e-9, 'cardioid area'); near(c.cmArc(card, 0, 2 * Math.PI), 8, 1e-8, 'cardioid length');
  for (const th of [0, 0.7, 2]) near(c.cmMotion(card, th, even).kappa, 3 / (4 * Math.cos(th / 2)), 1e-10, 'cardioid κ');
  near(c.cmMotion(card, 0.4, even).speed, Math.sqrt(Math.pow(1 + Math.cos(0.4), 2) + Math.pow(Math.sin(0.4), 2)), 1e-12, '|dr/dθ| = √(r² + r′²)');
  near(c.cmArea(c.cmRead('polar', { r: '2sin(2θ)' }), 0, 2 * Math.PI), 2 * Math.PI, 1e-9, 'rose');
  near(c.cmArea(c.cmRead('polar', { r: '2sin(2θ)' }), 0, Math.PI / 2), Math.PI / 2, 1e-9, 'one petal');
  near(c.cmArea(c.cmRead('polar', { r: 'sin(θ)^2' }), 0, 2 * Math.PI), 3 * Math.PI / 8, 1e-9, 'dipole');
  /* area from a polar curve equals ½∫(x y′ − y x′) of the same curve written in x and y */
  near(c.cmArea(c.cmRead('xy', { x: '(1 + cos(t))cos(t)', y: '(1 + cos(t))sin(t)' }), 0, 2 * Math.PI), 1.5 * Math.PI, 1e-9, 'same area in x, y');
});

group('a Kepler orbit, e = 0.6, q = 0.6 au: period 2π√(a³/GM), a = GM/r² toward the Sun, equal areas in equal times, PF/PD = e', () => {
  const k = c.cmConic(0.6, 0.6, 4.8), cv = c.cmRead('polar', { r: k.src }), tm = { kind: 'kepler', h: Math.sqrt(GM * k.p) };
  near(k.p, 0.96, 1e-12, 'p'); near(k.a, 1.5, 1e-12, 'a'); near(k.d, 1.6, 1e-12, 'directrix');
  near(c.cmTime(cv, k.u0, k.u1, tm), c.cmPeriod(1.5, GM), 1e-9, 'period'); near(c.cmPeriod(1, GM), 2 * Math.PI / Math.sqrt(GM), 1e-15);
  near(c.cmPeriod(1, GM), 1, 1e-4, 'one au takes about one year');
  for (const th of [-3, -1, 0, 0.5, 2.5]) {
    const M = c.cmMotion(cv, th, tm), r = c.cmLen(M.P);
    near(M.acc, GM / (r * r), 1e-10, 'a = GM/r²'); near(c.cmCross(M.A, M.P)[2], 0, 1e-10, 'a along r'); assert(c.cmDot(M.A, M.P) < 0, 'toward the Sun');
    near(0.5 * c.cmCross(M.P, M.V)[2], tm.h / 2, 1e-12, 'dA/dt = h/2');
    near(r / Math.abs(k.d - M.P[0]), 0.6, 1e-12, 'PF/PD = e');
    near(0.5 * c.cmDot(M.V, M.V) - GM / r, -GM / 3, 1e-10, 'energy −GM/2a');
  }
  const tk = c.cmTicks(cv, k.u0, k.u1, 12, tm), ab = Math.PI * 1.5 * 1.5 * 0.8;
  for (let i = 0; i < 12; i++) near(c.cmArea(cv, tk[i], tk[i + 1]), ab / 12, 1e-8, `slice ${i}`);
  near(c.cmMotion(cv, 0, tm).speed / c.cmMotion(cv, Math.PI - 1e-12, tm).speed, 1.6 / 0.4, 1e-6, 'speed ratio (1+e)/(1−e)');
});

group('escape and flyby: the parabola at its closest moves at √(2GM/q), the hyperbola faster; both keep PF/PD = e', () => {
  const k = c.cmConic(1, 1, 8), cv = c.cmRead('polar', { r: k.src }), tm = { kind: 'kepler', h: Math.sqrt(GM * k.p) };
  near(c.cmMotion(cv, 0, tm).speed, Math.sqrt(2 * GM), 1e-12, 'escape speed'); near(c.cmMotion(cv, 0, tm).speed * K.au / K.yr / 1000, 42.1, 2e-3, 'km/s');
  near(c.cmJet(cv, k.u1).r, 8, 1e-9, 'range ends at rmax');
  for (const th of [-1, 0.3, 1.5]) { const P = c.cmJet(cv, th).p; near(Math.hypot(P[0], P[1]) / Math.abs(k.d - P[0]), 1, 1e-12, 'PF = PD'); near(0.5 * c.cmDot(c.cmMotion(cv, th, tm).V, c.cmMotion(cv, th, tm).V) - GM / c.cmLen(P), 0, 1e-10, 'energy zero'); }
  const h = c.cmConic(1.5, 1, 8), hv = c.cmRead('polar', { r: h.src }), ht = { kind: 'kepler', h: Math.sqrt(GM * h.p) };
  near(c.cmMotion(hv, 0, ht).speed, Math.sqrt(GM * 2.5), 1e-12, 'v² = GM(1 + e)/q'); assert(h.u1 < Math.acos(-1 / 1.5));
  const P = c.cmJet(hv, 1).p; near(Math.hypot(P[0], P[1]) / Math.abs(h.d - P[0]), 1.5, 1e-12, 'PF/PD = 1.5');
  const circ = c.cmConic(0, 1, 8); assert.equal(circ.d, Infinity); near(c.cmJet(c.cmRead('polar', { r: circ.src }), 1).r, 1, 1e-15);
});

group('a typed polar curve moving with equal areas: the force has no part across the radius', () => {
  const cv = c.cmRead('polar', { r: '1 + cos(θ)/2' }), h = c.cmKeplerH(cv, 0, 2 * Math.PI), tm = { kind: 'kepler', h };
  near(c.cmTime(cv, 0, 2 * Math.PI, tm), 2 * Math.PI, 1e-9, 'whole range in the same time');
  for (const th of [0.3, 2, 4]) { const M = c.cmMotion(cv, th, tm); near(c.cmCross(M.A, M.P)[2], 0, 1e-9, 'central'); }
});

console.log(`${n} groups passed`);
