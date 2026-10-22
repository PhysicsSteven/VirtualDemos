'use strict';
// Springs and Oscillations: the CORE block against analytic results.
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const c = core('springs', 'G,homog,steady,makeSingle,singleState,coupledModes,makeCoupled,coupledState,segState,energy,powerIntegrals,upCrossings,phasor,SP_VERSION,periodOf,qualityOf,cellNum,rowPeriod,fitLine,kFromSlope,plotPoints,CSV_COLS,scaleStr,readingsCSV');
let n = 0;
const close = (a, b, rel = 1e-9, abs = 1e-12, msg = '') => assert(Math.abs(a - b) <= abs + rel * Math.abs(b), `${msg} expected ${b}, got ${a}`);
const test = (name, fn) => { fn(); n++; console.log('PASS', name); };
const TAU = 2 * Math.PI;
// x'' from a central difference of the exact solution
const accFD = (f, t, h) => (f(t + h) - 2 * f(t) + f(t - h)) / (h * h);

test('undamped period is 2π√(m/k) for any amplitude, from upward zero crossings', () => {
  for (const [m, k] of [[1, 40], [0.5, 20], [2.35, 7.5], [0.1, 100]]) {
    const T = c.periodOf(m, k);
    close(T, TAU * Math.sqrt(m / k), 1e-15);
    for (const [x0, v0] of [[0.15, 0], [0.02, 0], [0.25, 0.3], [-0.1, -0.5]]) {
      const g = c.makeSingle(0, x0, v0, 0, { m, k, b: 0 });
      const z = c.upCrossings(g, 0, 6.3 * T, 'x');
      assert(z.length >= 5);
      for (let i = 1; i < z.length; i++) close(z[i] - z[i - 1], T, 1e-11, 0, 'period');
    }
  }
});

test('free solution: initial conditions, equation of motion in all three regimes, smooth through ζ = 1', () => {
  const m = 1.3, k = 40;
  for (const zeta of [0, 0.05, 0.2, 0.999999, 1, 1.000001, 2.5, 30]) {
    const b = zeta * 2 * Math.sqrt(k * m), beta = b / (2 * m), w0sq = k / m;
    const [y0, u0] = [0.12, -0.4];
    const s0 = c.homog(y0, u0, beta, w0sq, 0); close(s0[0], y0, 1e-14); close(s0[1], u0, 1e-14);
    for (const s of [0.07, 0.6, 2.2]) {
      const f = (tt) => c.homog(y0, u0, beta, w0sq, tt)[0], h = 1e-4;
      const [x, v] = c.homog(y0, u0, beta, w0sq, s);
      close(v, (f(s + h) - f(s - h)) / (2 * h), 1e-6, 1e-9, `v at ζ=${zeta}`);
      close(m * accFD(f, s, h) + b * v + k * x, 0, 0, 2e-5 * Math.max(1, k * Math.abs(y0)), `EOM at ζ=${zeta}`);
    }
  }
  // the critically damped closed form and its neighbours agree
  const beta = Math.sqrt(40 / 1.3);
  for (const s of [0.1, 0.5, 1.5]) {
    const a = c.homog(0.12, -0.4, beta, 40 / 1.3, s), b1 = c.homog(0.12, -0.4, beta * (1 + 1e-7), 40 / 1.3, s), b2 = c.homog(0.12, -0.4, beta * (1 - 1e-7), 40 / 1.3, s);
    close(b1[0], a[0], 1e-5, 1e-9); close(b2[0], a[0], 1e-5, 1e-9);
  }
});

test('damping envelope: successive peaks shrink by e^(−bT_d/2m); damped period 2π/ω_d', () => {
  const m = 1, k = 40, zeta = 0.2, b = zeta * 2 * Math.sqrt(k * m), beta = b / (2 * m), wd = Math.sqrt(k / m - beta * beta), Td = TAU / wd;
  const g = c.makeSingle(0, 0.2, 0, 0, { m, k, b });
  const z = c.upCrossings(g, 0, 5 * Td, 'x');
  for (let i = 1; i < z.length; i++) close(z[i] - z[i - 1], Td, 1e-11);
  // peaks are where v = 0 going down: find them by bisection on v
  const peaks = [];
  for (let i = 0; i < 4; i++) {
    let lo = i * Td + 0.01, hi = lo + Td;
    // v changes from + to − once per period at a maximum
    const vs = (tt) => c.singleState(g, tt).v;
    let a = lo; const N = 400; let found = null;
    for (let j = 1; j <= N; j++) { const t1 = lo + (hi - lo) * j / N; if (vs(a) > 0 && vs(t1) <= 0) { found = [a, t1]; break; } a = t1; }
    let [p, q] = found; for (let it = 0; it < 80; it++) { const md = (p + q) / 2; if (vs(md) > 0) p = md; else q = md; }
    peaks.push(c.singleState(g, (p + q) / 2).x);
  }
  for (let i = 1; i < peaks.length; i++) close(peaks[i] / peaks[i - 1], Math.exp(-beta * Td), 1e-9);
  // the phasor radius is the envelope: x ≤ R e^(−βt) everywhere, touching it at the peaks
  const ph = c.phasor(g);
  for (let tt = 0; tt < 4 * Td; tt += Td / 37) assert(Math.abs(c.singleState(g, tt).x) <= ph.R * Math.exp(-beta * tt) * (1 + 1e-12));
  close(ph.wd, wd, 1e-14);
});

test('driven steady state: amplitude and phase formulas, A(ω₀) = (F₀/k)Q, δ(ω₀) = 90°, and x_p solves the equation', () => {
  const m = 1, k = 40, F0 = 0.5, w0 = Math.sqrt(k / m);
  for (const zeta of [0.01, 0.05, 0.2, 0.7]) {
    const b = zeta * 2 * Math.sqrt(k * m), Q = c.qualityOf(m, k, b);
    close(Q, 1 / (2 * zeta), 1e-12);
    const st = c.steady(m, k, b, F0, w0);
    close(st.A, F0 / (b * w0), 1e-12); close(st.A, (F0 / k) * Q, 1e-12); close(st.delta, Math.PI / 2, 1e-12);
    for (const w of [0.3 * w0, 0.9 * w0, 1.7 * w0]) {
      const s = c.steady(m, k, b, F0, w);
      close(s.A, (F0 / m) / Math.hypot(w0 * w0 - w * w, b * w / m), 1e-12);
      // A cos(ωt − δ) in the equation of motion
      for (const tt of [0.1, 0.77, 2.3]) {
        const x = s.A * Math.cos(w * tt - s.delta), v = -s.A * w * Math.sin(w * tt - s.delta), a = -w * w * x;
        close(m * a + b * v + k * x, F0 * Math.cos(w * tt), 1e-10, 1e-13);
      }
    }
  }
  // the amplitude at resonance is proportional to Q: halving b doubles it
  const A1 = c.steady(1, 40, 0.4, 0.5, w0).A, A2 = c.steady(1, 40, 0.2, 0.5, w0).A; close(A2 / A1, 2, 1e-12);
  // the peak of A(ω) sits at ω_r = √(ω₀² − b²/2m²)
  const b = 1.5, wr = Math.sqrt(w0 * w0 - b * b / 2), A = (w) => c.steady(1, 40, b, 0.5, w).A, h = 1e-5;
  close((A(wr + h) - A(wr - h)) / (2 * h), 0, 0, 1e-8); assert(A(wr) > A(wr * 1.01) && A(wr) > A(wr * 0.99));
});

test('driven run: the full solution solves the equation, the transient dies, the undamped resonance grows linearly', () => {
  const p = { m: 1, k: 40, b: 0.632, F0: 0.5, w: 5, drive: true };
  const g = c.makeSingle(0, 0, 0, 0, p), st0 = c.singleState(g, 0);
  close(st0.x, 0, 0, 1e-15); close(st0.v, 0, 0, 1e-15);
  for (const tt of [0.3, 4, 11]) {
    const s = c.singleState(g, tt), f = (q) => c.singleState(g, q).x, h = 1e-4;
    close(p.m * accFD(f, tt, h) + p.b * s.v + p.k * s.x, p.F0 * Math.cos(p.w * tt), 1e-6, 2e-6);
    close(s.a, (s.F - p.b * s.v - p.k * s.x) / p.m, 1e-12, 1e-14);
  }
  const ss = c.steady(1, 40, 0.632, 0.5, 5), late = 60 / (0.632 / 2);   // 60 decay times
  let mx = 0; for (let j = 0; j < 20000; j++) mx = Math.max(mx, Math.abs(c.singleState(g, late + j * (TAU / 5) / 20000).x));
  close(mx, ss.A, 1e-7);   // sampled peak: low by at most (π/20000)²/2
  // b = 0 exactly at ω₀: x_p = (F₀/2mω₀) t sin ω₀t
  const w0 = Math.sqrt(40), r = c.makeSingle(0, 0, 0, 0, { m: 1, k: 40, b: 0, F0: 0.5, w: w0, drive: true });
  assert(r.res);
  for (const tt of [1, 5, 20]) {
    const f = (q) => c.singleState(r, q).x, h = 1e-4;
    close(accFD(f, tt, h) + 40 * f(tt), 0.5 * Math.cos(w0 * tt), 1e-6, 3e-6);
  }
  close(c.singleState(r, 20 + (Math.PI / 2) / w0 - ((20 * w0) % TAU) / w0).x, 0.5 / (2 * w0) * (20 + (Math.PI / 2) / w0 - ((20 * w0) % TAU) / w0), 1e-9);
});

test('normal modes: eigen equations, orthonormal shapes, symmetric limits; the coupled solution obeys Newton', () => {
  for (const [m, k1, k2, kc] of [[0.5, 20, 20, 10], [0.5, 20, 20, 2], [1, 30, 12, 5], [0.7, 8, 45, 0.5], [1, 20, 20, 0], [1, 10, 25, 0]]) {
    const M = c.coupledModes(m, k1, k2, kc);
    const K = [[(k1 + kc) / m, -kc / m], [-kc / m, (k2 + kc) / m]];
    for (const [w2, e] of [[M.w1sq, M.e1], [M.w2sq, M.e2]]) {
      close(K[0][0] * e[0] + K[0][1] * e[1], w2 * e[0], 1e-12, 1e-12);
      close(K[1][0] * e[0] + K[1][1] * e[1], w2 * e[1], 1e-12, 1e-12);
      close(Math.hypot(e[0], e[1]), 1, 1e-14);
    }
    close(M.e1[0] * M.e2[0] + M.e1[1] * M.e2[1], 0, 0, 1e-14);
    assert(M.w1sq <= M.w2sq);
    close(M.w1sq + M.w2sq, K[0][0] + K[1][1], 1e-12);              // trace
    close(M.w1sq * M.w2sq, K[0][0] * K[1][1] - K[0][1] * K[1][0], 1e-12);   // determinant
    if (k1 === k2) { close(M.w1sq, k1 / m, 1e-12); close(M.w2sq, (k1 + 2 * kc) / m, 1e-12); close(Math.abs(M.e1[0]), Math.SQRT1_2, 1e-12); }
    const g = c.makeCoupled(0, 0.1, 0.05, -0.03, 0, { m, k: k1, k2, kc, b: 0.1 });
    for (const tt of [0, 0.4, 3.1]) {
      const s = c.coupledState(g, tt), h = 1e-4, f1 = (q) => c.coupledState(g, q).x1, f2 = (q) => c.coupledState(g, q).x2;
      if (tt === 0) { close(s.x1, 0.1, 1e-14, 1e-15); close(s.v1, 0.05, 1e-14, 1e-15); close(s.x2, -0.03, 1e-14, 1e-15); close(s.v2, 0, 0, 1e-15); continue; }
      close(m * accFD(f1, tt, h), -k1 * s.x1 - kc * (s.x1 - s.x2) - 0.1 * s.v1, 1e-6, 2e-6);
      close(m * accFD(f2, tt, h), -k2 * s.x2 - kc * (s.x2 - s.x1) - 0.1 * s.v2, 1e-6, 2e-6);
    }
  }
  // a pure mode keeps its shape and its frequency
  const M = c.coupledModes(0.5, 20, 20, 10), g = c.makeCoupled(0, 0.1 * M.e2[0], 0, 0.1 * M.e2[1], 0, { m: 0.5, k: 20, k2: 20, kc: 10, b: 0 });
  const z = c.upCrossings(g, 0, 5, 'x1');
  for (let i = 1; i < z.length; i++) close(z[i] - z[i - 1], TAU / Math.sqrt(M.w2sq), 1e-10);
  for (const tt of [0.3, 1.7]) { const s = c.coupledState(g, tt); close(s.q1, 0, 0, 1e-15); }
});

test('energy: conserved when undamped (horizontal, hanging, two blocks); E₀ − E = ∫bv² dt − ∫Fv dt otherwise', () => {
  const cases = [
    { g: c.makeSingle(0, 0.15, 0.2, 0, { m: 1, k: 40, b: 0 }), vert: false },
    { g: c.makeSingle(0, 0.1, 0, 0, { m: 0.5, k: 20, b: 0 }), vert: true },
    { g: c.makeCoupled(0, 0.12, 0, 0, 0.1, { m: 0.5, k: 20, k2: 33, kc: 2, b: 0 }), vert: false }
  ];
  for (const { g, vert } of cases) {
    const E0 = c.energy(g, c.segState(g, 0), vert).total;
    for (let tt = 0.37; tt < 200; tt *= 1.9) close(c.energy(g, c.segState(g, tt), vert).total, E0, 1e-11);
  }
  // hanging: spring + gravity, with x from the new equilibrium, equals ½kx² + constant
  { const g = cases[1].g, d = 0.5 * c.G / 20;
    for (const tt of [0.2, 0.9]) { const s = c.segState(g, tt), e = c.energy(g, s, true); close(e.Us + e.Ug, 0.5 * 20 * s.x * s.x + 0.5 * 20 * d * d, 1e-12); } }
  // damped and driven bookkeeping over a long stretch
  for (const p of [{ m: 1, k: 40, b: 1.26 }, { m: 1, k: 40, b: 0.632, F0: 0.5, w: 5.5, drive: true }]) {
    const g = c.makeSingle(0, 0.2, 0, 0, p), E0 = c.energy(g, c.segState(g, 0), false).total;
    let D = 0, W = 0, ta = 0;
    for (const tb of [0.5, 1.7, 4, 9.3, 15]) { const pi = c.powerIntegrals(g, ta, tb); D += pi.D; W += pi.W; ta = tb; }
    close(E0 + W - D, c.energy(g, c.segState(g, 15), false).total, 1e-9, 1e-12);
  }
  { const g = c.makeCoupled(0, 0.1, 0, 0, 0, { m: 0.5, k: 20, k2: 20, kc: 2, b: 0.4 }), E0 = c.energy(g, c.segState(g, 0), false).total;
    close(E0 - c.powerIntegrals(g, 0, 12).D, c.energy(g, c.segState(g, 12), false).total, 1e-9, 1e-12); }
});

test('a change of setting continues the motion: the new segment starts from the old state', () => {
  const g = c.makeSingle(0, 0.15, 0, 0, { m: 1, k: 40, b: 0.3, F0: 0.4, w: 5, drive: true }), s = c.singleState(g, 2.345);
  const ng = c.makeSingle(2.345, s.x, s.v, s.th, { m: 1.5, k: 40, b: 0.3, F0: 0.4, w: 5, drive: true }), s2 = c.singleState(ng, 2.345);
  close(s2.x, s.x, 1e-14, 1e-16); close(s2.v, s.v, 1e-14, 1e-16); close(s2.th, s.th, 1e-15);
});

test('lab fit: T² against m gives k = 4π²/slope; standard errors match the textbook formulas', () => {
  // exact model rows give the slope 4π²/k and zero intercept
  const k = 40, ms = [0.25, 0.5, 1, 1.5, 2, 3];
  const f = c.fitLine(ms, ms.map((m) => c.periodOf(m, k) ** 2));
  close(f.b, 4 * Math.PI * Math.PI / k, 1e-12); close(f.a, 0, 0, 1e-12); close(c.kFromSlope(f.b, f.seB).k, k, 1e-12);
  // a known scatter: y = 2 + 3x with residuals ±0.1
  const xs = [1, 2, 3, 4], ys = [5.1, 7.9, 11.1, 13.9], g = c.fitLine(xs, ys);
  close(g.b, 14.8 / 5, 1e-12); close(g.a, 9.5 - 2.5 * 14.8 / 5, 1e-12);   // Sxy = 14.8, Sxx = 5
  const res = ys.map((y, i) => y - g.a - g.b * xs[i]), s2 = res.reduce((s, r) => s + r * r, 0) / 2, sxx = 5;
  close(g.seB, Math.sqrt(s2 / sxx), 1e-12); close(g.seA, Math.sqrt(s2 * (1 / 4 + 2.5 * 2.5 / sxx)), 1e-12);
  close(c.kFromSlope(2, 0.1).se, 4 * Math.PI * Math.PI * 0.1 / 4, 1e-12);
  assert.equal(c.fitLine([1], [2]), null); assert.equal(c.fitLine([1, 1], [2, 3]), null);
  // a massive spring (m_s/3 added) shows up as the intercept
  const ms3 = 0.06, h = c.fitLine(ms, ms.map((m) => 4 * Math.PI * Math.PI * (m + ms3) / k));
  close(h.a, 4 * Math.PI * Math.PI * ms3 / k, 1e-10); close(h.b, 4 * Math.PI * Math.PI / k, 1e-12);
});

test('readings: T = t/N, plot points, CSV header, SI columns and cells exported as typed', () => {
  const rows = [
    { preset: 'Simple harmonic motion', sys: 'free', ori: 'horizontal', m: '1.00', k: '40.0', k2: '', kc: '', b: '0', F0: '', w: '', N: '10', t: '9.93', Tzc: '0.9935', A: '15.0', Asrc: 'ruler peak since Reset peak' },
    { preset: 'Simple harmonic motion', sys: 'free', ori: 'horizontal', m: '2.00', k: '40.0', k2: '', kc: '', b: '0', F0: '', w: '', N: '10', t: '14.06', Tzc: '1.4050', A: '15.0', Asrc: 'ruler peak since Reset peak' },
    { preset: 'Resonance', sys: 'driven', ori: 'horizontal', m: '1.00', k: '40.0', k2: '', kc: '', b: '0.632', F0: '0.50', w: '6.32', N: '', t: '', Tzc: '0.9942', A: '12.51', Asrc: 'largest |x| over the last drive cycle' },
    { preset: 'x', sys: 'free', ori: 'horizontal', m: 'about 1', k: '40.0', k2: '', kc: '', b: '0', F0: '', w: '', N: '0', t: '3', Tzc: '', A: 'n/a, "edge"', Asrc: 'ruler peak since Reset peak' }
  ];
  close(c.rowPeriod(rows[0]), 0.993, 1e-15); assert(Number.isNaN(c.rowPeriod(rows[2]))); assert(Number.isNaN(c.rowPeriod(rows[3])));
  assert.equal(c.cellNum('−0.5'), -0.5); assert(Number.isNaN(c.cellNum(' ')));
  const P = c.plotPoints(rows, 'T2m'); assert.deepEqual([...P.row], [0, 1]); close(P.y[1], 1.406 * 1.406, 1e-14);
  const A = c.plotPoints(rows, 'Aw'); assert.deepEqual([...A.row], [2]); close(A.y[0], 0.1251, 1e-14); close(A.x[0], 6.32, 1e-15);   // only driven rows have ω
  assert.equal(c.scaleStr('12.51', 0.01), '0.1251'); assert.equal(c.scaleStr('15.0', 0.01), '0.15'); assert.equal(c.scaleStr('abc', 0.01), 'abc'); assert.equal(c.scaleStr('9.93', 1), '9.93');
  const csv = c.readingsCSV(rows, { version: c.SP_VERSION, setup: 'Simple harmonic motion', blind: false }).trim().split('\n');
  assert.match(csv[0], /^# Springs and Oscillations .*\(simulated data\)$/);
  assert.equal(csv[1], `# demo version,${c.SP_VERSION}`); assert.match(c.SP_VERSION, /^springs@\d{4}-\d{2}-\d{2}/);
  assert(csv.some((l) => l.startsWith('# model,')) && csv.some((l) => l.startsWith('# rounding,')) && csv.some((l) => l === `# g_m_per_s2,${c.G}`));
  const head = csv.find((l) => l.startsWith('row,')).split(',');
  assert.deepEqual(head, ['row', ...c.CSV_COLS.map((x) => x[0])]);
  for (const h of head) assert.match(h, /^[a-z0-9A-Z_]+$/, 'snake case header');
  const body = csv.slice(csv.indexOf(csv.find((l) => l.startsWith('row,'))) + 1);
  assert.equal(body.length, 4);
  const r0 = body[0].split(','), col = (name) => head.indexOf(name);
  assert.equal(r0[col('m_kg')], '1.00'); assert.equal(r0[col('t_stopwatch_s')], '9.93'); assert.equal(r0[col('T_stopwatch_s')], '0.993');
  assert.equal(r0[col('T_squared_s2')], '0.986049'); assert.equal(r0[col('A_m')], '0.15'); assert.equal(r0[col('T_zero_crossings_s')], '0.9935');
  const r2 = body[2].split(','); assert.equal(r2[col('A_m')], '0.1251'); assert.equal(r2[col('omega_drive_rad_per_s')], '6.32'); assert.equal(r2[col('T_stopwatch_s')], '');
  assert(body[3].includes('"n/a, ""edge"""') && body[3].includes('about 1'));
  const blind = c.readingsCSV(rows, { version: c.SP_VERSION, setup: 'x', blind: true });
  assert(!/2 pi sqrt/.test(blind) && /blind on at export/.test(blind));
  // the ideal stopwatch: the T² fit of exact periods recovers k
  const exact = [0.4, 0.8, 1.2, 1.6].map((m) => ({ m: String(m), N: '10', t: String(10 * c.periodOf(m, 25)) }));
  const Q = c.plotPoints(exact, 'T2m'), f = c.fitLine(Q.x, Q.y); close(c.kFromSlope(f.b, f.seB).k, 25, 1e-10);
});

console.log(`${n} springs test groups passed`);
