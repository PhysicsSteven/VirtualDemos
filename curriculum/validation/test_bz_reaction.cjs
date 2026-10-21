'use strict';
// Belousov–Zhabotinsky core: the Oregonator in a stirred beaker (fixed point, eigenvalues, Hopf points, Rosenbrock
// integrator, period), the two variable Oregonator with diffusion in the dish (conservation, stability, wave speed
// under grid refinement) and the Györgyi–Field flow reactor model (transcription against the elementary steps,
// period doubling, Lyapunov exponent). Reference numbers marked "numpy" or "scipy" were computed independently
// with numpy.linalg.eigvals and scipy.integrate.solve_ivp(method='Radau', rtol=1e-10, atol=1e-13).
// Set BZ_SLOW=1 to add the spiral period check against a 4x finer grid (a few minutes).
const assert = require('node:assert/strict'), { core } = require('./demo_source.cjs');
let count = 0; const test = (name, fn) => { fn(); count++; console.log('PASS', name); };
function close(a, b, rel = 1e-10, abs = 1e-15) { assert(Number.isFinite(a) && Math.abs(a - b) <= abs + rel * Math.abs(b), `expected ${b}, got ${a}`); }
const C = core('bz-reaction', 'ORE,oreRhs,oreJac,oreFixed,eig3,oreMaxRe,oreHopf,ros23Step,oreIntegrate,oreFixedStep,upCrossings,oreTauSeconds,' +
  'RD,rdReact,rdRest,rdJac,rdDish,rdSteps,rdDiffuse,rdSpeedAt,rdPlaneSpeed,GF,gfMake,gfY,gfRhs,gfStepper,gfAdvance,gfLyapunov');
const P = (f) => Object.assign({}, C.ORE, { f });

// ---------- stirred beaker ----------
test('oregonator: parameters are the Scholarpedia values; one τ is 50 s', () => {
  close(C.ORE.eps, 9.90e-3); close(C.ORE.epsp, 1.98e-5); close(C.ORE.q, 7.62e-5); close(C.oreTauSeconds(C.ORE), 50);
});

test('oregonator: steady state solves the rate equations and agrees with an independent Newton solve', () => {
  for (const f of [0.4, 1, 1.6, 2.6]) {
    const p = P(f), s = C.oreFixed(p), r = C.oreRhs(p, s, [0, 0, 0]);
    // residuals in the unscaled brackets (multiply back by eps and eps')
    assert(Math.abs(r[0] * p.eps) < 1e-15 && Math.abs(r[1] * p.epsp) < 1e-15 && Math.abs(r[2]) < 1e-15, `residual ${r}`);
    // Newton on g(x) = x(1 − x) + (q − x) f x/(q + x) from x = 0.5
    let x = 0.5;
    for (let i = 0; i < 60; i++) { const g = x * (1 - x) + (p.q - x) * f * x / (p.q + x), h = 1e-9, dg = ((x + h) * (1 - x - h) + (p.q - x - h) * f * (x + h) / (p.q + x + h) - g) / h; x -= g / dg; }
    close(s[0], x, 1e-9); close(s[2], x, 1e-9); close(s[1], f * x / (p.q + x), 1e-9);
  }
});

test('oregonator: eigenvalues at the steady state (f = 1) match numpy and the trace and determinant', () => {
  const p = P(1), J = C.oreJac(p, C.oreFixed(p)), e = C.eig3(J).map((z) => z.re).sort((a, b) => a - b);
  const ref = [-712.7669580419504, 0.02574927651792221, 84.46245737313379];   // numpy.linalg.eigvals
  e.forEach((v, i) => close(v, ref[i], 1e-9));
  const tr = J[0][0] + J[1][1] + J[2][2];
  close(e[0] + e[1] + e[2], tr, 1e-12);
  // Jacobian by central differences agrees with the analytic one
  const s = C.oreFixed(p);
  for (let j = 0; j < 3; j++) {
    const h = 1e-7 * Math.max(1e-6, Math.abs(s[j])), a = s.slice(), b = s.slice(); a[j] += h; b[j] -= h;
    const fa = C.oreRhs(p, a, [0, 0, 0]), fb = C.oreRhs(p, b, [0, 0, 0]);
    for (let i = 0; i < 3; i++) close((fa[i] - fb[i]) / (2 * h), J[i][j], 1e-6, 1e-6 * Math.abs(J[i][i]) + 1e-9);
  }
  // a complex pair: f = 2.6 (stable focus)
  const ec = C.eig3(C.oreJac(P(2.6), C.oreFixed(P(2.6))));
  assert(ec.some((z) => Math.abs(z.im) > 0.1), 'complex pair at f = 2.6');
  assert(Math.max(...ec.map((z) => z.re)) < 0, 'stable at f = 2.6');
});

test('oregonator: Hopf points from bisection on the eigenvalues equal those from the Routh–Hurwitz condition', () => {
  // independent: λ³ + a2 λ² + a1 λ + a0 has a pure imaginary pair when a2 a1 = a0 (a1 > 0)
  const RH = (f) => {
    const p = P(f), J = C.oreJac(p, C.oreFixed(p));
    const a2 = -(J[0][0] + J[1][1] + J[2][2]);
    const a1 = J[0][0] * J[1][1] - J[0][1] * J[1][0] + J[0][0] * J[2][2] - J[0][2] * J[2][0] + J[1][1] * J[2][2] - J[1][2] * J[2][1];
    const det = J[0][0] * (J[1][1] * J[2][2] - J[1][2] * J[2][1]) - J[0][1] * (J[1][0] * J[2][2] - J[1][2] * J[2][0]) + J[0][2] * (J[1][0] * J[2][1] - J[1][1] * J[2][0]);
    return a2 * a1 - (-det);
  };
  const bis = (a, b) => { let ga = RH(a); for (let i = 0; i < 200; i++) { const m = (a + b) / 2, gm = RH(m); if (ga * gm <= 0) b = m; else { a = m; ga = gm; } } return (a + b) / 2; };
  const h1 = C.oreHopf(C.ORE, 0.3, 1.0), h2 = C.oreHopf(C.ORE, 1.5, 3.0);
  close(h1, bis(0.3, 1.0), 1e-9); close(h2, bis(1.5, 3.0), 1e-9);
  close(h1, 0.5051832866358794, 1e-9); close(h2, 2.3323633013368292, 1e-9);   // numpy eigenvalues + brentq
  for (const h of [h1, h2]) {
    const e = C.eig3(C.oreJac(P(h), C.oreFixed(P(h))));
    assert(e.some((z) => Math.abs(z.im) > 1e-3 && Math.abs(z.re) < 1e-6), `pure imaginary pair at f = ${h}`);
  }
  assert(C.oreMaxRe(P(0.45)) < 0 && C.oreMaxRe(P(1)) > 0 && C.oreMaxRe(P(2.5)) < 0);
  console.log(`   Hopf points f = ${h1.toFixed(10)}, ${h2.toFixed(10)}`);
});

test('oregonator: Rosenbrock (ode23s) converges at second order under step halving', () => {
  const p = P(1), T = 10, y0 = [1, 1, 1];
  const ref = C.oreIntegrate(p, y0, 0, T, 1e-11, 1e-12, 1e-9).y;
  const err = [16000, 32000, 64000, 128000].map((n) => { const y = C.oreFixedStep(p, y0, T, n); return Math.max(...[0, 1, 2].map((i) => Math.abs(y[i] - ref[i]) / Math.max(Math.abs(ref[i]), 1e-3))); });
  const ratios = err.slice(1).map((e, i) => err[i] / e);
  console.log('   relative errors', err.map((e) => e.toExponential(2)).join(' '), ' ratios', ratios.map((r) => r.toFixed(2)).join(' '));
  for (const r of ratios) assert(r > 3.2 && r < 5, `ratio ${r} is not near 4`);
});

test('oregonator: limit cycle period at f = 1 matches scipy Radau; stable f = 2.6 settles', () => {
  const p = P(1), ts = [], xs = [];
  C.oreIntegrate(p, [1, 1, 1], 0, 60, 1e-6, 1e-8, 1e-6, (t, y) => { ts.push(t); xs.push(y[0]); });
  const c = C.upCrossings(ts, xs, C.oreFixed(p)[0]), n = c.length, per = c[n - 1] - c[n - 2];
  close(per, 7.73652363, 2e-5);   // scipy Radau, rtol 1e-10
  close(c[n - 2] - c[n - 3], per, 1e-5);
  console.log(`   period ${per.toFixed(6)} τ = ${(per * 50 / 60).toFixed(3)} min`);
  const q = P(2.6), r = C.oreIntegrate(q, [1, 1, 1], 0, 60, 1e-6, 1e-8, 1e-6), s = C.oreFixed(q);
  for (let i = 0; i < 3; i++) close(r.y[i], s[i], 1e-5);
});

// ---------- petri dish ----------
const par = Object.assign({}, C.RD);
test('dish: parameters as cited; rest state stable for φ from 0.02 to 0.08, unstable (pacemaker) at φ = 0', () => {
  close(par.eps, 0.02); close(par.q, 0.002); close(par.f, 1.4); close(par.phi, 0.05);
  for (let phi = 0.02; phi <= 0.0801; phi += 0.005) {
    const u = C.rdRest(par, phi); assert(Math.abs(C.rdReact(par, u, u, phi)) < 1e-9, `rest state residual at φ = ${phi}`);
    const J = C.rdJac(par, u, u, phi), tr = J[0][0] + J[1][1], det = J[0][0] * J[1][1] - J[0][1] * J[1][0];
    assert(tr < 0 && det > 0, `rest state stable at φ = ${phi}`);
  }
  const u0 = C.rdRest(par, 0), J = C.rdJac(par, u0, u0, 0);
  assert(J[0][0] + J[1][1] > 0, 'unstable at φ = 0');
});

test('dish: diffusion alone conserves Σu exactly and is stable at D Δt/Δx² = 0.08, unstable above 1/4', () => {
  const n = 96, d = C.rdDish(n, true), N = n * n;
  const u = new Float64Array(N), u2 = new Float64Array(N);
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (const i of d.cells) u[i] = rnd();
  const sum = (a) => { let s = 0; for (const i of d.cells) s += a[i]; return s; };
  const s0 = sum(u), mx0 = Math.max(...Array.from(d.cells, (i) => u[i])), mn0 = Math.min(...Array.from(d.cells, (i) => u[i]));
  const a = C.rdDiffuse(d, u.slice(), u2.slice(), 1, 0.25, 0.005, 2000);
  close(sum(a), s0, 1e-12);
  const mx = Math.max(...Array.from(d.cells, (i) => a[i])), mn = Math.min(...Array.from(d.cells, (i) => a[i]));
  assert(mx <= mx0 + 1e-12 && mn >= mn0 - 1e-12, 'maximum principle holds');
  // the same field at D Δt/Δx² = 0.3 blows up (checkerboard mode grows)
  const b = C.rdDiffuse(d, u.slice(), u2.slice(), 1, 0.25, 0.3 * 0.0625, 400);
  const mxb = Math.max(...Array.from(d.cells, (i) => Math.abs(b[i])));
  assert(mxb > 1e3, `expected growth above 1/4, got max ${mxb}`);
});

test('dish: front speed from arrival times, c = 1/|∇T|, is exact for a plane arrival field', () => {
  const n = 64, d = C.rdDish(n, false), T = new Float64Array(n * n), c = 5.3, th = 0.7, dx = 0.25;
  for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) T[j * n + i] = (i * Math.cos(th) + j * Math.sin(th)) * dx / c;
  close(C.rdSpeedAt(d, T, 32 * n + 32, dx, 2, 10), c, 1e-12);
});

test('dish: plane wave speed converges under grid refinement; the demo grid is within 1 %', () => {
  const grid = [[0.5, 0.01], [0.25, 0.005], [0.125, 0.00125], [0.0625, 0.0003125], [0.03125, 0.000078125]];
  const cs = grid.map(([dx, dt]) => C.rdPlaneSpeed(par, dx, dt, 40));
  console.log('   c(Δx, Δt):', grid.map((g, i) => `${g[0]}/${g[1]}: ${cs[i].toFixed(4)}`).join(', '));
  const diffs = cs.slice(1).map((c, i) => Math.abs(c - cs[i]));
  for (let i = 2; i < diffs.length; i++) assert(diffs[i] < diffs[i - 1], `successive differences shrink: ${diffs}`);
  const best = cs[cs.length - 1];
  assert(Math.abs(cs[1] - best) / best < 0.01, `demo grid ${cs[1]} vs finest ${best}`);
  // halving Δt alone at the demo Δx: first order in Δt
  const c1 = C.rdPlaneSpeed(par, 0.0625, 0.0005, 40), c2 = C.rdPlaneSpeed(par, 0.0625, 0.00025, 40), c3 = C.rdPlaneSpeed(par, 0.0625, 0.000125, 40);
  const r = (c1 - c2) / (c2 - c3); assert(r > 1.6 && r < 2.5, `Δt order ratio ${r}`);
});

test('dish: u stays positive and bounded through a front', () => {
  const n = 64, d = C.rdDish(n, false), N = n * n, ur = C.rdRest(par, par.phi);
  const st = { u: new Float32Array(N).fill(ur), v: new Float32Array(N).fill(ur), u2: new Float32Array(N), v2: new Float32Array(N), phi: new Float32Array(N).fill(par.phi), T: new Float64Array(N).fill(-1e308), t: 0 };
  for (let j = 0; j < n; j++) for (let i = 1; i < 5; i++) st.u[j * n + i] = 0.8;
  let lo = 1, hi = 0;
  for (let k = 0; k < 400; k++) { C.rdSteps(par, d, st, 0.25, 0.005, 5); for (const i of d.cells) { lo = Math.min(lo, st.u[i]); hi = Math.max(hi, st.u[i]); } }
  assert(lo > 0 && hi < 1, `u in (${lo}, ${hi})`);
});

if (process.env.BZ_SLOW) test('dish (slow): spiral period on the demo grid within 3 % of a 4x finer grid', () => {
  const run = (n, dx, dt) => {
    const d = C.rdDish(n, true), N = n * n, ur = C.rdRest(par, par.phi);
    const st = { u: new Float64Array(N).fill(ur), v: new Float64Array(N).fill(ur), u2: new Float64Array(N), v2: new Float64Array(N), phi: new Float64Array(N).fill(par.phi), T: new Float64Array(N).fill(-1e308), t: 0 };
    for (let j = 0; j < n / 2; j++) for (let i = 0; i < n; i++) { const X = (i - n / 2) * dx, k = j * n + i; if (X > -1 && X <= 0) st.u[k] = 0.8; if (X > -4 && X <= -1) st.v[k] = 0.3; }
    const pr = Math.round(n * 0.8) * n + Math.round(n * 0.5), arr = []; let last = -1e308;
    while (st.t < 30) { C.rdSteps(par, d, st, dx, dt, Math.round(0.05 / dt)); if (st.T[pr] !== last) { last = st.T[pr]; arr.push(last); } }
    const per = arr.slice(-5).map((a, i, A) => i ? a - A[i - 1] : 0).slice(1);
    return per.reduce((a, b) => a + b) / per.length;
  };
  const a = run(128, 0.25, 0.005), b = run(512, 0.0625, 0.0005);
  console.log(`   spiral period: demo grid ${a.toFixed(3)}, 4x finer ${b.toFixed(3)}`);
  assert(Math.abs(a - b) / b < 0.03);
});

// ---------- flow reactor ----------
test('Györgyi–Field: scaled equations equal the seven elementary steps with [Br⁻] in steady state', () => {
  const g = C.GF, kf = 3.5e-4, c = C.gfMake(kf);
  const A = g.A, H = g.H, M = g.M, Ct = g.C;
  close(c.T0, 1 / (10 * g.k2 * A * H * Ct)); close(c.T0, 2308.6157539939054, 1e-12);
  for (const s of [[0.045, 0.9, 0.85], [0.3, 1.7, 0.849], [0.012, 0.62, 0.8462]]) {
    const X = s[0] * c.X0, Z = s[1] * c.Z0, V = s[2] * c.V0;
    const Y = g.alpha * g.k6 * Z * V / (g.k1 * H * X + g.k2 * A * H * H + kf);
    const R1 = g.k1 * H * X * Y, R2 = g.k2 * A * H * H * Y, R3 = g.k3 * X * X, R4 = g.k4 * Math.sqrt(A) * Math.pow(H, 1.5) * (Ct - Z) * Math.sqrt(X),
      R5 = g.k5 * X * Z, R6 = g.alpha * g.k6 * Z * V, R7 = g.beta * g.k7 * M * Z;
    const dX = -R1 + R2 - 2 * R3 + 0.5 * R4 - 0.5 * R5 - kf * X, dZ = R4 - R5 - R6 - R7 - kf * Z, dV = 2 * R1 + R2 + R3 - R6 - kf * V;
    const dY = -R1 - R2 + R6 - kf * Y;
    close(dY, 0, 0, 1e-12 * R6);
    const o = C.gfRhs(c, s, [0, 0, 0]);
    close(o[0] * c.X0 / c.T0, dX, 1e-10, 1e-20); close(o[1] * c.Z0 / c.T0, dZ, 1e-10, 1e-20); close(o[2] * c.V0 / c.T0, dV, 1e-10, 1e-20);
    close(C.gfY(c, s) * c.Y0, Y, 1e-12);
  }
});

const peaks = (kf, Ttr, Trec, tol) => {
  const S = C.gfStepper(kf, [0.045, 0.9, 0.85], tol || 1e-9, 1);
  C.gfAdvance(S, Ttr); const m = []; C.gfAdvance(S, Trec, (t, v, k) => { if (k === 0) m.push([t, v]); });
  return m;
};
const distinct = (m, tol) => { const v = m.map((a) => a[1]).sort((a, b) => a - b); let n = 1; for (let i = 1; i < v.length; i++) if (v[i] - v[i - 1] > tol) n++; return n; };

test('Györgyi–Field: DP5(4) converges (tolerance 1e-8 vs 1e-11 over one T0 on the period one cycle)', () => {
  const a = C.gfStepper(3.0e-4, [0.045, 0.9, 0.85], 1e-8, 1), b = C.gfStepper(3.0e-4, [0.045, 0.9, 0.85], 1e-11, 1);
  C.gfAdvance(a, 1); C.gfAdvance(b, 1);
  const e = Math.max(...[0, 1, 2].map((i) => Math.abs(a.y[i] - b.y[i])));
  console.log(`   max difference ${e.toExponential(2)} after ${a.steps} and ${b.steps} steps`);
  assert(e < 1e-4);
});

test('Györgyi–Field: period doubling cascade in the peaks of z, then chaos (Buchlovská Nagyová et al. 2020)', () => {
  // published: periodic for k_f in (3, 3.24) × 10⁻⁴ s⁻¹ with period doubling, chaos at 3.5 × 10⁻⁴ s⁻¹
  const want = [[3.10, 1], [3.20, 2], [3.23, 4], [3.24, 8], [3.30, 3]];
  const got = [];
  for (const [k, n] of want) { const m = peaks(k * 1e-4, 4, 2); const d = distinct(m, 5e-4); got.push(`${k}: ${d}`); assert.equal(d, n, `k_f = ${k}: ${d} peak heights, expected ${n}`); }
  const mc = peaks(3.5e-4, 4, 2), dc = distinct(mc, 5e-4);
  got.push(`3.5: ${dc} of ${mc.length}`);
  assert(dc > 0.8 * mc.length, 'no repeat at 3.5');
  console.log('   distinct peak heights:', got.join(', '));
});

test('Györgyi–Field: largest Lyapunov exponent positive at 3.5 × 10⁻⁴ s⁻¹, near zero on the period one cycle', () => {
  const T0 = C.gfMake(3.5e-4).T0;
  const lc = C.gfLyapunov(3.5e-4, [0.045, 0.9, 0.85], 2, 20, 0.005, 1e-7, 1e-9);
  const lp = C.gfLyapunov(3.0e-4, [0.045, 0.9, 0.85], 2, 20, 0.005, 1e-7, 1e-9);
  console.log(`   λ(3.5) = ${lc.toFixed(2)} per T0 = ${(lc / T0).toExponential(3)} s⁻¹; λ(3.0) = ${lp.toFixed(3)} per T0`);
  assert(lc > 15 && lc < 40, `λ(3.5) = ${lc}`);
  assert(Math.abs(lp) < 0.02 * lc, `λ(3.0) = ${lp}`);
});

test('Györgyi–Field: two runs 1e-6 apart separate at 3.5 but not at 3.0 × 10⁻⁴ s⁻¹', () => {
  const sep = (kf) => {
    const S = C.gfStepper(kf, [0.045, 0.9, 0.85, 0.045 + 1e-6, 0.9, 0.85], 1e-9, 1); C.gfAdvance(S, 1.5);
    const y = S.y; return Math.hypot(y[3] - y[0], y[4] - y[1], y[5] - y[2]);
  };
  const a = sep(3.5e-4), b = sep(3.0e-4);
  console.log(`   distance after 1.5 T0: ${a.toExponential(2)} (3.5), ${b.toExponential(2)} (3.0)`);
  assert(a > 0.05 && b < 1e-4);
});

console.log(`${count} tests passed`);
