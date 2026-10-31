'use strict';
// Projectile Range: the CORE physics and measurement helpers of demos/projectile-drag.html.
const assert = require('node:assert/strict');
const M = require('./demo_source.cjs').core('projectile-drag',
  'G,DEG,airDensity,isaPressure,kDrag,vTerm,simulate,vacuumShot,vacRange,vacOpt,sweep,sampleAt,roundTo,snapT,readAt,fitOrigin,fitQuad,csvText,PRESETS,mulberry32,gaussPair,rangeOf,manyShots,stats,histogram,spreadPredict');
let count = 0;
function test(name, f) { f(); count++; console.log('PASS', name); }
const near = (a, b, rel, msg) => assert(Math.abs(a - b) <= rel * Math.max(Math.abs(b), 1e-300), `${msg || ''} expected ${b}, got ${a} (relative ${Math.abs(a - b) / Math.abs(b)})`);
const G = M.G, DEG = M.DEG;
const ball = (o) => Object.assign({ v: 40, th: 45, h: 0, m: 0.145, d: 0.074, cd: 0.35, rho: 1.225, drag: true }, o);
const shot = (p) => M.simulate(p, p.th, 8000, true, 1e-3);   // the settings every launched shot uses

test('vacuum: R = v0² sin 2θ / g from the ground, and the general formula from a height', () => {
  for (const v of [5, 20, 40, 60]) for (const th of [10, 30, 45, 60, 80]) {
    const p = ball({ v, th, drag: false }), Rexact = v * v * Math.sin(2 * th * DEG) / G;
    near(M.simulate(p, th, 8000, false, 1e-3).range, Rexact, 1e-10, `RK4 v ${v} th ${th}`);
    near(M.vacuumShot(p, th).range, Rexact, 1e-12, 'parabola');
    near(M.simulate(p, th, 8000, false, 1e-3).T, 2 * v * Math.sin(th * DEG) / G, 1e-10, 'flight time');
    near(M.vacuumShot(p, th).ymax, (v * Math.sin(th * DEG)) ** 2 / (2 * G), 1e-12, 'max height');
  }
  const p = ball({ v: 14, h: 2, drag: false }), th = 40, c = Math.cos(th * DEG), s = Math.sin(th * DEG);
  near(M.simulate(p, th, 8000, false, 1e-3).range, 14 * c * (14 * s + Math.sqrt((14 * s) ** 2 + 2 * G * 2)) / G, 1e-10, 'from 2 m');
  // Air resistance Off and rho = 0 are the same vacuum
  near(M.simulate(ball({ rho: 0 }), 45, 8000, false, 1e-3).range, 1600 / G, 1e-10);
});

test('vacuum optimum: 45° from the ground, tan θ = v0/√(v0² + 2gh) from a height', () => {
  const sw = M.sweep(ball({ drag: false }));
  assert.equal(sw.opt, 45); near(sw.Ropt, 1600 / G, 1e-12);
  for (const [v, h] of [[14, 2], [10, 10], [40, 5]]) {
    const p = ball({ v, h, drag: false }), opt = M.vacOpt(p);
    let best = 0, Rb = -1;
    for (let a = opt - 1; a <= opt + 1; a += 1e-4) { const R = M.vacRange(p, a); if (R > Rb) { Rb = R; best = a; } }
    assert(Math.abs(best - opt) < 2e-4, `grid optimum ${best} vs formula ${opt}`);
    assert(opt < 45);
  }
  near(M.vacOpt(ball({ v: 14, h: 2 })), 42.4, 0.001, 'shot put vacuum optimum (notes: 42.4°)');
});

test('RK4 converges at fourth order and the shot step is converged', () => {
  for (const p of [ball({}), ball({ m: 0.0027, d: 0.04, cd: 0.47, v: 20 })]) {
    // steps above the roundoff floor but below the cap τ/100 (τ = 1/√(kg), 4.0 s baseball, 0.88 s ping pong)
    const tau = 1 / Math.sqrt(M.kDrag(p) * G), R = [1, 2, 4].map((f) => M.simulate(p, 45, 1, false, tau / 100 / f).range);
    const ratio = (R[0] - R[1]) / (R[1] - R[2]);
    assert(ratio > 13 && ratio < 19, `error ratio ${ratio} should be near 16`);
    console.log('  error ratio on halving dt from tau/100:', ratio.toFixed(2));
    const fine = M.simulate(p, 45, 8000, false, 5e-4).range, used = shot(p).range;
    const rel = Math.abs(used - fine) / fine;
    assert(rel < 1e-9, `halving the shot step changes the range by ${rel}`);
    console.log('  range', used.toFixed(6), 'm; relative change on halving the step', rel.toExponential(1));
  }
});

test('drag → 0 reduces to vacuum, and the range loss is first order in k', () => {
  const Rv = 1600 / G;
  near(M.simulate(ball({ cd: 1e-12 }), 45, 8000, false, 1e-3).range, Rv, 1e-9, 'tiny drag');
  const loss = (cd) => (Rv - M.simulate(ball({ cd }), 45, 8000, false, 1e-3).range) / Rv;
  const r = loss(2e-5) / loss(1e-5);
  near(r, 2, 1e-3, 'loss doubles when k doubles');
});

test('energy lost equals the work done by drag', () => {
  for (const p of [ball({}), ball({ m: 0.0027, d: 0.04, cd: 0.47, v: 20, th: 60 }), ball({ m: 0.43, d: 0.22, cd: 0.25, v: 25, h: 3, th: 30 })]) {
    const r = M.simulate(p, p.th, 2000, true), k = M.kDrag(p), pts = r.pts;   // 2000 steps, every step recorded
    const dE = 0.5 * (r.vImp ** 2 - p.v ** 2) - G * p.h;   // per unit mass; lands at y = 0
    // ∫ F·v dt / m = −∫ k |v|³ dt: Simpson's rule on the evenly spaced steps, trapezoid on the partial last step
    const f = (q) => -k * Math.hypot(q[3], q[4]) ** 3, n = pts.length - 2, h = pts[1][0];
    let W = 0, i = 0;
    for (; i + 2 <= n; i += 2) W += h / 3 * (f(pts[i]) + 4 * f(pts[i + 1]) + f(pts[i + 2]));
    for (; i < pts.length - 1; i++) W += 0.5 * (f(pts[i]) + f(pts[i + 1])) * (pts[i + 1][0] - pts[i][0]);
    near(W, dE, 1e-6, 'drag work');
    console.log('  energy lost per kg', (-dE).toFixed(4), 'J/kg; drag work', (-W).toFixed(4), 'J/kg');
    assert(dE < 0);
  }
});

test('terminal speed √(2mg/ρC_dA) and the exact fall from rest', () => {
  const p = ball({ m: 0.0027, d: 0.04, cd: 0.47, v: 0, th: 90 }), A = Math.PI * 0.04 ** 2 / 4;
  near(M.vTerm(p), Math.sqrt(2 * 0.0027 * G / (1.225 * 0.47 * A)), 1e-14);
  near(M.vTerm(ball({})), 39.28, 3e-4, 'baseball (notes: 39.3 m/s)');
  const vt = M.vTerm(p), k = M.kDrag(p);
  for (const h of [1, 5, 10, 100]) {
    const r = M.simulate(Object.assign({}, p, { h }), 90, 8000, false, 1e-3);
    near(r.vImp, vt * Math.sqrt(1 - Math.exp(-2 * k * h)), 1e-9, `impact speed from ${h} m`);
    near(r.T, Math.acosh(Math.exp(k * h)) / Math.sqrt(k * G), 1e-9, `fall time from ${h} m`);
  }
  assert(Math.abs(M.simulate(Object.assign({}, p, { h: 100 }), 90, 8000, false, 1e-3).vImp / vt - 1) < 1e-6);
  assert.equal(M.vTerm(ball({ drag: false })), Infinity);
});

test('with drag the best angle is below 45° (notes values)', () => {
  for (const k of ['baseball', 'pingpong', 'cannon', 'soccer']) {
    const s = M.sweep(Object.assign({ th: 45, rho: 1.225, drag: true }, M.PRESETS[k]));
    assert(s.opt < 45, `${k} optimum ${s.opt}`);
    console.log('  ', k, 'best angle', s.opt.toFixed(2), '°, range', s.Ropt.toFixed(2), 'm');
  }
  const b = ball({}), s = M.sweep(b), r = shot(b);
  assert.equal(+s.opt.toFixed(1), 40.9);
  assert.equal(+r.range.toFixed(1), 94.7); assert.equal(+r.vImp.toFixed(1), 25.3);
  assert.equal(+(1600 / G).toFixed(1), 163.1);
});

test('preset balls lie inside the official ranges', () => {
  const OZ = 0.028349523125, IN = 0.0254, P = M.PRESETS;
  assert(P.baseball.m >= 5 * OZ && P.baseball.m <= 5.25 * OZ, 'baseball mass, OBR 3.01');
  assert(P.baseball.d >= 9 * IN / Math.PI && P.baseball.d <= 9.25 * IN / Math.PI, 'baseball diameter, OBR 3.01');
  assert.equal(P.pingpong.m, 0.0027); assert.equal(P.pingpong.d, 0.040);
  assert.equal(P.shotput.m, 7.26); assert(P.shotput.d >= 0.110 && P.shotput.d <= 0.130);
  assert(P.soccer.m >= 0.410 && P.soccer.m <= 0.450); assert(P.soccer.d >= 0.68 / Math.PI && P.soccer.d <= 0.70 / Math.PI);
});

test('air density: ideal gas and the standard atmosphere', () => {
  near(M.airDensity(101325, 288.15), 1.2250, 5e-5, 'ISA sea level');
  near(M.isaPressure(1609), 83430, 2e-4, 'ISA pressure at 1609 m (Denver)');
  near(M.airDensity(M.isaPressure(2000), 288.15 - 13), 1.0066, 2e-4, 'ISA 2000 m');
  near(M.airDensity(M.isaPressure(1609), 290.15), 1.0, 0.01, 'Denver button 1.0 kg/m³ at about 17 °C');
});

test('strobe cursor: times on the grid, readings to 1 cm', () => {
  near(M.snapT(0.437, 0.1, 5), 0.4, 1e-12); near(M.snapT(4.98, 0.1, 4.95), 4.9, 1e-12); assert.equal(M.snapT(-1, 0.05, 3), 0);
  assert.equal(M.roundTo(11.3149, 0.01), 11.31); assert.equal(M.roundTo(0.30000000000000004, 0.001), 0.3);
  const p = ball({ drag: false }), r = shot(p), vx = 40 * Math.cos(45 * DEG), vy = 40 * Math.sin(45 * DEG);
  for (let t = 0; t < r.T; t += 0.1) {
    const q = M.sampleAt(r.pts, t);
    assert(Math.abs(q[1] - vx * t) < 1e-9 && Math.abs(q[2] - (vy * t - 0.5 * G * t * t)) < 1e-4, `interpolated sample at ${t}`);
    const rd = M.readAt(r.pts, t);
    assert(Math.abs(rd.y - (vy * t - 0.5 * G * t * t)) <= 0.005 + 1e-4);
  }
});

test('fits recover g from readings rounded as displayed', () => {
  const qf = M.fitQuad([0, 1, 2, 3], [1, 3, 9, 19]); near(qf.a, 1, 1e-12); assert(Math.abs(qf.b) < 1e-9); near(qf.c, 2, 1e-12);
  assert.equal(M.fitQuad([1, 2], [1, 2]), null);
  // y against t at 0.1 s strobe dots, vacuum baseball shot: g = −2c
  const p = ball({ drag: false }), r = shot(p), ts = [], ys = [];
  for (let n = 0; n * 0.1 <= r.T; n++) { const rd = M.readAt(r.pts, M.snapT(n * 0.1, 0.1, r.T)); ts.push(rd.t); ys.push(rd.y); }
  const f = M.fitQuad(ts, ys), g = -2 * f.c, sg = 2 * f.sc;
  assert(Math.abs(g - G) < 3 * sg && Math.abs(g - G) < 0.002, `g from y(t) ${g} ± ${sg}`);
  console.log('  g from y against t,', ts.length, 'dots:', g.toFixed(5), '±', sg.toFixed(5), 'm/s²');
  // with drag (ping pong ball) the quadratic misses: the fitted g is far from 9.81 and the residuals are not random
  const pp = Object.assign({ th: 45, rho: 1.225, drag: true }, M.PRESETS.pingpong), rp = shot(pp), t2 = [], y2 = [];
  for (let n = 0; n * 0.05 <= rp.T; n++) { const rd = M.readAt(rp.pts, n * 0.05); t2.push(rd.t); y2.push(rd.y); }
  const fp = M.fitQuad(t2, y2), rms = Math.sqrt(fp.res.reduce((a, b) => a + b * b, 0) / fp.n);
  console.log('  ping pong ball with drag: quadratic fit gives', (-2 * fp.c).toFixed(3), 'm/s², rms residual', rms.toFixed(4), 'm');
  assert(rms > 50 * 0.01 / Math.sqrt(12), 'the residuals, not the fitted g, show that drag makes y(t) not a parabola');
  // range against sin 2θ through the origin: slope v0²/g
  const xs = [], Rs = [];
  for (const th of [15, 25, 35, 45, 55, 70]) { xs.push(Math.sin(2 * th * DEG)); Rs.push(M.roundTo(shot(ball({ th, drag: false })).range, 0.01)); }
  const fo = M.fitOrigin(xs, Rs), gR = 1600 / fo.k;
  assert(Math.abs(gR - G) < 1e-3, `g from R against sin 2θ ${gR}`);
  const l = M.fitOrigin([1, 2, 3], [2, 4, 6]); near(l.k, 2, 1e-15); assert(l.se < 1e-15); assert.equal(M.fitOrigin([], []), null);
});

test('CSV text: comment lines, header, quoting', () => {
  const t = M.csvText(['Projectile Range (simulated data)', 'demo version,projectile-drag@x'], ['row', 'preset', 'range_m'], [[1, 'Baseball', 94.74], [2, 'Custom, light', '']]);
  const L = t.trim().split('\n');
  assert.equal(L[0], '# Projectile Range (simulated data)'); assert.equal(L[1], '# demo version,projectile-drag@x');
  assert.equal(L[2], 'row,preset,range_m'); assert.equal(L[3], '1,Baseball,94.74'); assert.equal(L[4], '2,"Custom, light",');
});

test('many launches: the random numbers, the statistics, and the spread against error propagation', () => {
  // the 1500 step ranges used for many launches agree with the shot settings to 1e-7
  for (const p of [ball({}), ball({ th: 30, v: 25 }), ball({ m: 0.0027, d: 0.04, cd: 0.5 })]) near(M.rangeOf(p, p.th), shot(p).range, 1e-7, 'range at N = 1500');
  near(M.rangeOf(ball({ drag: false }), 45), 40 * 40 / G, 1e-12, 'no drag: v²/g at 45°');
  // Box–Muller normals: mean 0, variance 1, and about 68.3% within one σ, for 200 000 values
  const r = M.mulberry32(12345); let s1 = 0, s2 = 0, in1 = 0; const N = 100000;
  for (let i = 0; i < N; i++) for (const z of M.gaussPair(r)) { s1 += z; s2 += z * z; if (Math.abs(z) < 1) in1++; }
  assert(Math.abs(s1 / (2 * N)) < 0.01); assert(Math.abs(s2 / (2 * N) - 1) < 0.01); assert(Math.abs(in1 / (2 * N) - 0.6827) < 0.005);
  // the same seed gives the same launches
  const a = M.manyShots(ball({}), 5, 1, 0.01, M.mulberry32(7)), b = M.manyShots(ball({}), 5, 1, 0.01, M.mulberry32(7));
  assert.equal(JSON.stringify(a), JSON.stringify(b));
  // statistics on known numbers
  const st = M.stats([2, 4, 4, 4, 5, 5, 7, 9]);
  near(st.mean, 5, 1e-15); near(st.sd, Math.sqrt(32 / 7), 1e-15); near(st.sem, Math.sqrt(32 / 7) / Math.sqrt(8), 1e-15); assert.equal(st.median, 4.5); assert.equal(st.min, 2); assert.equal(st.max, 9);
  assert.equal(M.histogram([0, 0.5, 0.99, 1, 2.5, 3], 0, 1, 3).join(), '3,1,2', 'bins [0,1) [1,2) [2,3], the top edge in the last');
  // no drag, speed spread only: R = v² sin 2θ/g, so σ_R/R = 2 σ_v/v to first order; the simulated σ agrees within sampling error
  const p = ball({ drag: false, th: 30 }), pr = M.spreadPredict(p, 0, 0.01);
  near(pr.sd, 2 * 0.01 * pr.R0, 1e-6, 'first order speed spread'); near(pr.dRdV, 2 * pr.R0 / 40, 1e-6);
  const sim = M.stats(M.manyShots(p, 4000, 0, 0.01, M.mulberry32(99)).map((q) => q.R));
  assert(Math.abs(sim.sd / pr.sd - 1) < 0.05, `σ simulated ${sim.sd} against ${pr.sd}`);
  // at 45° with no drag, ∂R/∂θ = 0: the first order angle spread vanishes, and the mean falls below R0 (second order: −2 R0 σθ²)
  const q45 = ball({ drag: false }), p45 = M.spreadPredict(q45, 2, 0);
  assert(p45.sd < 1e-6 * p45.R0, 'no first order angle spread at the best angle');
  const s45 = M.stats(M.manyShots(q45, 20000, 2, 0, M.mulberry32(5)).map((q) => q.R));
  near(s45.mean, p45.R0 * (1 - 2 * (2 * DEG) ** 2), 2e-4, 'mean pulled down by the curvature');
});

console.log(`${count} projectile-drag test groups passed`);
