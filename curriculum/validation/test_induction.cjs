'use strict';
// Charging by Induction: two conducting spheres and a point charge solved with Kelvin images.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('induction', 'EPS0,K,image,solve,sigma,potentialAt');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const A = { c: 0, r: 0.05 }, B = { c: 0.11, r: 0.05 }, nC = 1e-9;
const onSurface = (sol, S, th) => c.potentialAt(sol.charges, S.c + S.r * Math.cos(th) * (1 + 1e-7), S.r * Math.sin(th) * (1 + 1e-7));
group('single grounded sphere: induced charge −q r/d (B far away)', () => {
  const s = c.solve({ q0: 10 * nC, x0: -0.1, A, B: { c: 50, r: 0.05 }, QA: 0, QB: 0, wire: false, gA: true, gB: false });
  near(s.QA / nC, -5, 1e-6);
});
group('connected spheres are one equipotential with zero total; Gauss gives each net charge', () => {
  const s = c.solve({ q0: 10 * nC, x0: -0.1, A, B, QA: 0, QB: 0, wire: true, gA: false, gB: false });
  near(s.QA + s.QB, 0, 1e-20); assert(s.QA < 0);
  for (const th of [0, 1, 2, 3]) { near(onSurface(s, A, th), s.VA, 1e-3 * Math.abs(s.VA)); near(onSurface(s, B, th), s.VA, 1e-3 * Math.abs(s.VA)); }
  let tot = 0; const N = 3000; for (let i = 0; i < N; i++) { const th = Math.PI * (i + 0.5) / N; tot += c.sigma(s.charges, A, th) * 2 * Math.PI * A.r * A.r * Math.sin(th) * Math.PI / N; }
  near(tot / nC, s.QA / nC, 2e-3);
});
group('isolated spheres keep their totals; the charge left after induction survives removing the rod', () => {
  const s = c.solve({ q0: 10 * nC, x0: -0.1, A, B, QA: 0, QB: 0, wire: true, gA: false, gB: false });
  const far = { c: 0.3, r: 0.05 }, t = c.solve({ q0: 0, x0: null, A, B: far, QA: s.QA, QB: s.QB, wire: false, gA: false, gB: false });
  near(t.QA, s.QA, 1e-20); near(t.QB, s.QB, 1e-20); near(onSurface(t, A, 0.4), t.VA, 1e-3 * Math.abs(t.VA));
});
group('equal spheres in contact share charge equally; an isolated sphere alone has V = kQ/R', () => {
  const s = c.solve({ q0: 0, x0: null, A, B: { c: 0.1001, r: 0.05 }, QA: 10 * nC, QB: 0, wire: true, gA: false, gB: false });
  near(s.QA / nC, 5, 1e-6);
  const one = c.solve({ q0: 0, x0: null, A, B: { c: 1e3, r: 0.05 }, QA: 10 * nC, QB: 0, wire: false, gA: false, gB: false });
  near(one.VA, c.K * 10 * nC / 0.05, 1e-3 * one.VA);
});

// ---- Conductor shapes (2D cross-sections), boundary element solver ----
const d = core('induction', 'EPS0,TPE0,SHAPES,shapeCurves,cBuild,cSolve,cField,cPotential,cRegion,cNearest,cSurfaceCharge,cSamples,cylSigma');
const sys = {}; const build = (name, sc = 1) => (sys[name + sc] ||= d.cBuild(name, sc));
const E0 = 1000, s2 = 2 * d.EPS0 * E0, at = (S, j) => Math.atan2(S.my[j], S.mx[j]);
const maxOver = (S, fn) => { let m = 0; for (let j = 0; j < S.N; j++) m = Math.max(m, fn(j)); return m; };
group('2D: conducting cylinder in a uniform field: σ = 2ε0E0 cos θ, surface field 2E0 cos θ, E = 0 inside', () => {
  const S = build('circle'), sol = d.cSolve(S, { E0 });
  const err = maxOver(S, (j) => Math.abs(sol.sig[j] - s2 * Math.cos(at(S, j))));
  console.log('   circle: max |σ − 2ε0E0 cos θ| / 2ε0E0 =', (err / s2).toExponential(2));
  assert(err < 1e-4 * s2);
  for (const th of [0, 0.7, 2, 3]) {   /* outside: E_r = E0 (1 + a²/r²) cos θ, E_θ = −E0 (1 − a²/r²) sin θ; checked at r = 1.05 a (1 mm out) */
    const r = 0.02 * 1.05, e = d.cField(S, sol, r * Math.cos(th), r * Math.sin(th)), er = e[0] * Math.cos(th) + e[1] * Math.sin(th), et = -e[0] * Math.sin(th) + e[1] * Math.cos(th);
    near(er / E0, (1 + 1 / 1.05 ** 2) * Math.cos(th), 1e-3, 'E_r just outside'); near(et / E0, -(1 - 1 / 1.05 ** 2) * Math.sin(th), 1e-3, 'E_θ just outside');
  }
  const em = Math.max(...d.cSamples(S, 0.0015).metal.map((q) => Math.hypot(...d.cField(S, sol, q[0], q[1]))));
  console.log('   circle: largest |E| in the metal =', em.toExponential(2), 'N/C for E0 = 1000 N/C'); assert(em < 1e-3 * E0);
  near(d.cSurfaceCharge(S, sol).outer, 0, 1e-20, 'neutral');
});
group('2D: isolated cylinder near a line charge, with net charge: matches the image solution (−λ at a²/d, λ + λc at the centre)', () => {
  const S = build('circle');
  for (const src of [{ E0: 0, lam: 3, xq: -0.035, yq: 0, lamC: 0 }, { E0: 500, lam: -2, xq: -0.025, yq: 0, lamC: 4 }, { E0: 0, lam: 0, lamC: 5 }]) {
    const sol = d.cSolve(S, src), ref = maxOver(S, (j) => Math.abs(d.cylSigma(0.02, at(S, j), src)));
    const err = maxOver(S, (j) => Math.abs(sol.sig[j] - d.cylSigma(0.02, at(S, j), src)));
    console.log('   circle with', JSON.stringify(src), ': max σ error / max σ =', (err / ref).toExponential(2)); assert(err < 2e-3 * ref);
    near(d.cSurfaceCharge(S, sol).outer / 1e-9, src.lamC, 1e-9, 'net charge per length');
  }
});
group('2D: elliptic cylinder along the field: surface field at the tip = E0 (1 + a/b), σ = 3.5 ε0E0 for a/b = 2.5', () => {
  const S = build('ellipse'), sol = d.cSolve(S, { E0 }), m = Math.max(...sol.sig) / (d.EPS0 * E0);
  console.log('   ellipse: largest σ / ε0E0 =', m.toFixed(4), '(exact 3.5)'); near(m, 3.5, 2e-3);
});
group('2D: hollow ring = solid cylinder outside; the cavity walls carry no charge and E = 0 in the cavity, with a line charge too', () => {
  const S = build('ring');
  for (const src of [{ E0 }, { E0, lam: 4, xq: -0.035, yq: 0.005 }]) {
    const sol = d.cSolve(S, src); let eo = 0, ei = 0, ref = 0;
    for (let j = 0; j < S.N; j++) { const cav = S.curves[S.cid[j]].cavity; if (cav) ei = Math.max(ei, Math.abs(sol.sig[j])); else ref = Math.max(ref, Math.abs(sol.sig[j])); }
    if (!src.lam) { for (let j = 0; j < S.N; j++) if (!S.curves[S.cid[j]].cavity) eo = Math.max(eo, Math.abs(sol.sig[j] - d.cylSigma(0.025, at(S, j), src))); assert(eo < 1e-4 * s2); }
    const q = d.cSurfaceCharge(S, sol), cv = Math.max(...d.cSamples(S, 0.0015).cavity.map((p) => Math.hypot(...d.cField(S, sol, p[0], p[1]))));
    console.log('   ring', src.lam ? '+ line charge' : '', ': largest |σ| on cavity walls / largest outside =', (ei / ref).toExponential(2), ', cavity |E| max =', cv.toExponential(2), 'N/C, cavity wall charge =', q.inner.toExponential(1), 'C/m');
    assert(ei < 2e-4 * ref); assert(cv < 1e-4 * E0); assert(Math.abs(q.inner) < 1e-6 * ref * S.curves[1].perimeter);
  }
});
group('2D: every shape is an equipotential, has E ≈ 0 in the metal and the cavity, and σ = ε0 E⊥ just outside', () => {
  for (const name of d.SHAPES) {
    const S = build(name), src = { E0, lam: 2, xq: -0.06, yq: 0.01, lamC: 1 }, sol = d.cSolve(S, src), smp = d.cSamples(S, 0.0015);
    const sref = maxOver(S, (j) => Math.abs(sol.sig[j])), Eref = sref / d.EPS0;
    /* potential at panel ends (between the collocation points) */
    let dv = 0; for (const c of S.curves) for (const q of c.poly) { const r = Math.hypot(q[0], q[1]), u = 1 - 1e-4 / r; dv = Math.max(dv, Math.abs(d.cPotential(S, sol, q[0] * (c.cavity ? 1 / u : u), q[1] * (c.cavity ? 1 / u : u)) - sol.V)); }
    const em = Math.max(...smp.metal.map((p) => Math.hypot(...d.cField(S, sol, p[0], p[1]))));
    const ec = smp.cavity.length ? Math.max(...smp.cavity.map((p) => Math.hypot(...d.cField(S, sol, p[0], p[1])))) : 0;
    let jump = 0; for (let j = 0; j < S.N; j += 7) { const h = 1e-4 * S.ha[j], e = d.cField(S, sol, S.mx[j] + h * S.ty[j], S.my[j] - h * S.tx[j]); jump = Math.max(jump, Math.abs(d.EPS0 * (e[0] * S.ty[j] - e[1] * S.tx[j]) - sol.sig[j])); }
    const q = d.cSurfaceCharge(S, sol);
    console.log(`   ${name}: ${S.N} panels; potential spread on the surface ${(dv / Math.abs(Eref * 0.02)).toExponential(1)} of Emax·2cm; |E| metal ${(em / Eref).toExponential(1)}, cavity ${(ec / Eref).toExponential(1)} of the largest surface field; |σ − ε0E⊥| ${(jump / sref).toExponential(1)} of max σ`);
    assert(em < 1e-3 * Eref, 'metal'); assert(ec < 1e-4 * Eref, 'cavity'); assert(jump < 1e-2 * sref, 'σ = ε0 E⊥'); assert(dv < 2e-3 * Eref * 0.02, 'equipotential');
    near((q.outer + q.inner) / 1e-9, 1, 1e-9, 'net charge');
    if (smp.cavity.length) { console.log(`   ${name}: charge on the cavity walls ${(q.inner / 1e-9).toExponential(1)} nC/m (net 1 nC/m)`); assert(Math.abs(q.inner) < 1e-4 * 1e-9); }
    assert(d.cRegion(S, 0.0, 0.0) === (S.curves.length > 1 ? 2 : 1)); assert(d.cRegion(S, 0.05, 0.04) === 0);
  }
});
group('2D: the sharp point carries the largest σ, for an external field and for net charge alone', () => {
  const S = build('teardrop');
  for (const src of [{ E0 }, { lamC: 5 }]) {
    const sol = d.cSolve(S, src); let jm = 0; for (let j = 0; j < S.N; j++) if (sol.sig[j] > sol.sig[jm]) jm = j;
    let back = 0; for (let j = 0; j < S.N; j++) if (S.mx[j] < -0.02) back = Math.max(back, Math.abs(sol.sig[j]));
    console.log('   teardrop', JSON.stringify(src), ': largest σ at x =', (S.mx[jm] * 100).toFixed(2), 'cm; σ there / largest |σ| on the round end =', (sol.sig[jm] / back).toFixed(2));
    assert(S.mx[jm] > 0.022); assert(sol.sig[jm] > 2 * back);
  }
});
group('2D: convergence: doubling the panels changes the largest σ by < 0.1 %, and the circle error falls about 4× (second order)', () => {
  for (const name of d.SHAPES) {
    const a = d.cSolve(build(name, 1), { E0 }), b = d.cSolve(build(name, 2), { E0 }), ma = Math.max(...a.sig), mb = Math.max(...b.sig);
    console.log(`   ${name}: largest σ / ε0E0 = ${(ma / d.EPS0 / E0).toFixed(4)} (${build(name, 1).N} panels), ${(mb / d.EPS0 / E0).toFixed(4)} (${build(name, 2).N} panels): change ${(100 * Math.abs(ma - mb) / mb).toFixed(3)} %`);
    assert(Math.abs(ma - mb) < 1e-3 * mb);
  }
  const e = (sc) => { const S = build('circle', sc), sol = d.cSolve(S, { E0 }); return maxOver(S, (j) => Math.abs(sol.sig[j] - s2 * Math.cos(at(S, j)))); };
  const r = e(1) / e(2); console.log('   circle error ratio 240 → 480 panels:', r.toFixed(2)); assert(r > 3 && r < 5);
});
console.log(`${n} induction test groups passed`);
