'use strict';
// Charging by Induction: two conducting spheres and a point charge solved with Kelvin images.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('induction', 'EPS0,K,image,solve,sigma,sigma3,sigmaPeak,potentialAt,E_BREAK');
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

// ---- the rod's tip anywhere in the plane (the spheres worked by hand) ----
const tipAt = (D, ang, Sp = A) => [Sp.c + D * Math.cos(ang), D * Math.sin(ang)];
group('rod off the axis: a lone grounded sphere still carries −q R/D, whatever the direction', () => {
  for (const ang of [Math.PI, 2.2, 1.6, 0.9, -2.5]) {
    const [x0, y0] = tipAt(0.1, ang), s = c.solve({ q0: 10 * nC, x0, y0, A, B: { c: 50, r: 0.05 }, QA: 0, QB: 0, wire: false, gA: true, gB: false });
    near(s.QA / nC, -5, 1e-6, 'angle ' + ang);
  }
});
group('rod off the axis: joined spheres are one equipotential everywhere on both surfaces (3D points), and Gauss gives each charge', () => {
  const B2 = { c: 0.13, r: 0.03 }, [x0, y0] = tipAt(0.08, 2.0), s = c.solve({ q0: -12 * nC, x0, y0, A, B: B2, QA: 2 * nC, QB: 0, wire: true, gA: false, gB: false });
  near((s.QA + s.QB) / nC, 2, 1e-9, 'total kept');
  let worst = 0;
  for (const Sp of [A, B2]) for (const th of [0.3, 1.2, 2.5]) for (const ph of [0, 0.8, 1.5]) {
    const n = [Math.cos(th), Math.sin(th) * Math.cos(ph), Math.sin(th) * Math.sin(ph)], e = 1 + 1e-7;
    worst = Math.max(worst, Math.abs(c.potentialAt(s.charges, Sp.c + Sp.r * n[0] * e, Sp.r * n[1] * e, Sp.r * n[2] * e) - s.VA));
  }
  console.log('   largest departure from one potential on the surfaces:', worst.toExponential(2), 'V of', s.VA.toFixed(1), 'V');
  assert(worst < 1e-3 * Math.abs(s.VA));
  for (const [Sp, Q] of [[A, s.QA], [B2, s.QB]]) {
    let tot = 0; const N = 400, M = 400;
    for (let i = 0; i < N; i++) for (let j = 0; j < M; j++) { const th = Math.PI * (i + 0.5) / N, ph = 2 * Math.PI * (j + 0.5) / M; tot += c.sigma3(s.charges, Sp, Math.cos(th), Math.sin(th) * Math.cos(ph), Math.sin(th) * Math.sin(ph)) * Sp.r * Sp.r * Math.sin(th) * (Math.PI / N) * (2 * Math.PI / M); }
    near(tot / nC, Q / nC, 2e-3 * Math.max(1, Math.abs(Q / nC)), 'Gauss');
  }
});
group('rod off the axis: a rod above the line and its mirror image below give the same charges; σ is mirror symmetric', () => {
  const B2 = { c: 0.12, r: 0.05 }, st = (y) => ({ q0: 10 * nC, x0: 0.03, y0: y, A, B: B2, QA: 0, QB: 0, wire: false, gA: true, gB: false });
  const u = c.solve(st(0.09)), d = c.solve(st(-0.09)); near(u.QA, d.QA, 1e-20); near(u.QB, d.QB, 1e-20);
  near(c.sigma(u.charges, A, 1.1), c.sigma(d.charges, A, -1.1), 1e-15);
  near(c.sigma3(u.charges, B2, 0.3, 0.5, Math.sqrt(1 - 0.34)), c.sigma3(u.charges, B2, 0.3, 0.5, -Math.sqrt(1 - 0.34)), 1e-15);
});
group('the largest |σ| lies in the plane of the drawing: a search over the whole sphere finds nothing larger', () => {
  const B2 = { c: 0.1005, r: 0.05 };
  for (const [x0, y0, wire, gA] of [[-0.06, 0, true, false], [-0.02, 0.06, true, false], [0.05, 0.09, false, true], [0.02, -0.08, true, true]]) {
    const s = c.solve({ q0: 20 * nC, x0, y0, A, B: B2, QA: 0, QB: 0, wire, gA, gB: false });
    for (const Sp of [A, B2]) {
      const pk = Math.abs(c.sigmaPeak(s.charges, Sp).sigma); let m = 0;
      for (let i = 0; i <= 90; i++) for (let j = 0; j < 90; j++) { const th = Math.PI * i / 90, ph = 2 * Math.PI * j / 90; m = Math.max(m, Math.abs(c.sigma3(s.charges, Sp, Math.cos(th), Math.sin(th) * Math.cos(ph), Math.sin(th) * Math.sin(ph)))); }
      assert(m <= pk * (1 + 2e-4), `sphere at ${Sp.c}: whole sphere ${m}, plane ${pk}`);
    }
  }
});
group('touching, solved 0.5 mm apart and joined: within 2 % of true point contact for B = 1 cm, 0.25 % from 3 cm up', () => {
  /* the shared charge at true contact (gap → 0), from the image series run to 10⁻¹⁵ with no cap on its length */
  const contact = (a, b, g) => {
    const run = (rs, ro, dist) => { let q = rs, x = 0, inS = true; const o = { s: rs, o: 0 };
      for (let k = 0; k < 5e6 && Math.abs(q) >= 1e-15 * rs; k++) { if (inS) { const dd = dist - x; q = -q * ro / dd; x = dist - ro * ro / dd; o.o += q; } else { const dd = x; q = -q * rs / dd; x = rs * rs / dd; o.s += q; } inS = !inS; }
      return o; };
    const u = run(a, b, a + b + g), w = run(b, a, a + b + g); return (u.o + w.s) / (u.s + w.o + u.o + w.s);
  };
  for (const [rB, tol] of [[0.01, 0.02], [0.03, 2.5e-3], [0.05, 1e-9], [0.07, 2.5e-3], [0.1, 2.5e-3]]) {
    const demo = c.solve({ q0: 0, x0: null, A, B: { c: 0.05 + 5e-4 + rB, r: rB }, QA: 10 * nC, QB: 0, wire: true, gA: false, gB: false }).QB / nC;
    const same = 10 * contact(0.05, rB, 5e-4), point = 10 * contact(0.05, rB, 1e-8);
    console.log(`   rB = ${Math.round(rB * 100)} cm: B gets ${demo.toFixed(5)} nC (demo), ${point.toFixed(5)} nC at true contact: ${(100 * (demo - point) / point).toFixed(2)} %`);
    near(demo, same, 1e-6, 'series converged at 0.5 mm'); assert(Math.abs(demo - point) <= tol * point);
  }
});
group('field at the surface: σ/ε0 next to a 20 nC tip 1 cm away passes air breakdown; at 10 nC and 5 cm it does not', () => {
  const B2 = { c: 0.1005, r: 0.05 }, E = (q, d) => Math.abs(c.sigmaPeak(c.solve({ q0: q * nC, x0: -0.05 - d, y0: 0, A, B: B2, QA: 0, QB: 0, wire: true, gA: false, gB: false }).charges, A).sigma) / c.EPS0;
  const e1 = E(20, 0.01), e2 = E(10, 0.05); console.log('   20 nC at 1 cm:', (e1 / 1e6).toFixed(2), 'MV/m; 10 nC at 5 cm:', (e2 / 1e6).toFixed(3), 'MV/m');
  assert(e1 > c.E_BREAK && e2 < c.E_BREAK);
  /* a lone grounded sphere: σ at the near point is −q(D² − R²)/(4πR(D − R)³) */
  const D = 0.1, s = c.solve({ q0: 10 * nC, x0: -D, y0: 0, A, B: { c: 50, r: 0.05 }, QA: 0, QB: 0, wire: false, gA: true, gB: false });
  near(c.sigma(s.charges, A, Math.PI), -10 * nC * (D * D - 0.0025) / (4 * Math.PI * 0.05 * (D - 0.05) ** 3), 1e-3 * 9.5e-7);
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
// The neutral ball (dielectric or metal) near a point charge: exact Legendre series.
const di = core('induction', 'K,EPS0,diForce,diDipoleForce,diFieldIn,diSigma,diBalance,DI_MATS,DI_A');
group('neutral ball: metal limit equals the Kelvin image force; far away the dipole term (κ − 1)/(κ + 2) takes over; F ∝ q²', () => {
  const q = 20 * nC, a = di.DI_A;
  for (const D of [0.035, 0.05, 0.1]) {
    const qa = q * a / D, b = a * a / D, img = di.K * q * qa * (1 / (D - b) ** 2 - 1 / D ** 2);
    near(di.diForce(q, D, a, Infinity) / img, 1, 1e-12, 'metal ' + D);
  }
  for (const k of [2.1, 2.56, 5.6, 310]) {
    near(di.diForce(q, 5, a, k) / di.diDipoleForce(q, 5, a, k), 1, 1e-4, 'far ' + k);
    near(di.diDipoleForce(q, 5, a, k) / (2 * di.K * q * q * a ** 3 / 5 ** 5), (k - 1) / (k + 2), 1e-12);
  }
  near(di.diForce(2 * q, 0.05, a, 2.56) / di.diForce(q, 0.05, a, 2.56), 4, 1e-12, 'q²');
  near(di.diForce(-q, 0.05, a, 2.56), di.diForce(q, 0.05, a, 2.56), 0, 'sign');
  assert(di.diForce(q, 0.05, a, 310) < di.diForce(q, 0.05, a, Infinity));
});
group('neutral ball: bound charge sums to zero; metal σ matches the images; uniform field limit E_in = 3E₀/(κ + 2); balance rounds to 0.01 mg', () => {
  const q = 20 * nC, a = di.DI_A, D = 0.05;
  for (const k of [2.56, Infinity]) { let tot = 0; const N = 4000; for (let i = 0; i < N; i++) { const th = Math.PI * (i + 0.5) / N; tot += di.diSigma(q, D, a, k, th) * 2 * Math.PI * a * a * Math.sin(th) * Math.PI / N; } near(tot / nC, 0, 1e-6, 'total ' + k); }
  const qa = q * a / D, b = a * a / D;
  for (const th of [0, 0.7, 2, Math.PI]) {
    const px = a * Math.cos(th), py = a * Math.sin(th); let ex = 0, ey = 0;
    for (const [Q, x] of [[q, D], [-qa, b], [qa, 0]]) { const dx = px - x, r3 = (dx * dx + py * py) ** 1.5; ex += di.K * Q * dx / r3; ey += di.K * Q * py / r3; }
    near(di.diSigma(q, D, a, Infinity, th), di.EPS0 * (ex * Math.cos(th) + ey * Math.sin(th)), 1e-12);
  }
  /* a polystyrene ball's bound charge just inside the surface equals P·n = ε0(κ − 1)E_in·n */
  const th = 1.1, e = di.diFieldIn(q, D, a, 2.56, a * (1 - 1e-9), th); near(di.diSigma(q, D, a, 2.56, th), di.EPS0 * 1.56 * e[0], 1e-15);
  const Dfar = 50, E0 = di.K * q / Dfar ** 2; near(-di.diFieldIn(q, Dfar, a, 2.56, 0, 0)[0] / E0, 3 / 4.56, 1e-3);
  near(di.diBalance(84.676e-6), -8.63, 1e-9); near(di.diBalance(-1e-12), 0, 0);
});
group('charging by rubbing: series order, equal and opposite charges, and the air breakdown limit', () => {
  const r = core('induction', 'EPS0,E_BREAK,TRIBO,QE,rubLimit,rubSep,rubStroke');
  near(r.rubLimit(0.005, 0.05), 8.8541878188e-12 * 3e6 * 2 * Math.PI * 0.005 * 0.05, 1e-20); near(r.rubLimit(0.005, 0.05) * 1e9, 41.72, 0.01, '41.7 nC on the patch');
  near(r.EPS0 * r.E_BREAK * 1e6, 26.56, 0.01, 'σ max 26.6 µC/m²');
  assert(r.rubSep('glass', 'silk') > 0, 'glass rubbed with silk is left positive (OpenStax §5.1)');
  assert(r.rubSep('rubber', 'fur') < 0, 'hard rubber rubbed with fur is left negative');
  assert.equal(r.rubSep('glass', 'glass'), 0);
  const Qm = r.rubLimit(0.005, 0.05); let Q = 0, prev = 0;
  for (let i = 0; i < 400; i++) { const nq = r.rubStroke(Q, Qm, r.rubSep('glass', 'silk')); assert(nq > Q && nq < Qm, 'grows toward the limit, never past it'); assert(i === 0 || nq - Q <= prev + 1e-24, 'each stroke moves less'); prev = nq - Q; Q = nq; }
  near(Q / Qm, 1, 1e-6, 'saturates at the breakdown limit');
  let A = 0, B = 0; for (let i = 0; i < 10; i++) { A = r.rubStroke(A, Qm, r.rubSep('rubber', 'fur')); B = r.rubStroke(B, Qm, r.rubSep('glass', 'silk')); }
  assert(A < 0 && Math.abs(A) > B, 'rubber and fur, farther apart in the series, charge faster than glass and silk');
  near(r.rubStroke(5e-9, Qm, 0), 5e-9, 0, 'same material: no change'); assert.equal(r.QE, 1.602176634e-19);
});
console.log(`${n} induction test groups passed`);
