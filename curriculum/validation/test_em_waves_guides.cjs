'use strict';
// Electromagnetic Waves, Guides and cavities: rectangular waveguide modes and cutoffs, and rectangular cavity resonances.
// Checks: the WR-90 cutoffs, Maxwell's four equations by finite differences for every kind of mode (travelling, dying away, and
// standing in the cavity), the boundary conditions on every wall, the speeds (v_p v_g = c², v_g = dω/dβ), the mode lists.
const assert = require('node:assert/strict'), { core } = require('./demo_source.cjs');
let count = 0; const test = (name, fn) => { fn(); count++; console.log('PASS', name); };
const R = core('em-waves', 'C,guideKc,guideCutoff,guideModeOK,cavityModeOK,cavityRes,guideList,cavityList,guideWave,guideField,cavityField');
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1e-300, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
const close = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a} (tolerance ${tol})`);
const a = 22.86e-3, b = 10.16e-3;   /* WR-90 (X band) inside dimensions, EIA standard */

test('WR-90 cutoffs: TE10 6.557 GHz, TE20 13.11, TE01 14.75, TE11 and TM11 16.15 GHz; λ_g at 10 GHz 39.7 mm', () => {
  near(R.guideCutoff(1, 0, a, b) / 1e9, 6.5571, 1e-4, 'TE10'); near(R.guideCutoff(2, 0, a, b) / 1e9, 13.1142, 1e-4, 'TE20');
  near(R.guideCutoff(0, 1, a, b) / 1e9, 14.7533, 1e-4, 'TE01'); near(R.guideCutoff(1, 1, a, b) / 1e9, 16.1451, 1e-4, 'TE11');
  const L = R.guideList(a, b, 17e9); assert.equal(L.map((u) => u.type + u.m + u.n).join(' '), 'TE10 TE20 TE01 TE11 TM11');
  const g = R.guideWave(10e9, R.guideCutoff(1, 0, a, b)); near(g.lamg * 1e3, 39.71, 1e-3, 'λ_g'); assert(g.travels);
  assert(!R.guideModeOK('TE', 0, 0) && !R.guideModeOK('TM', 1, 0) && R.guideModeOK('TM', 1, 1) && R.guideModeOK('TE', 0, 1));
});
test('speeds: v_p v_g = c², v_g = dω/dβ, λ_g = λ/√(1 − (f_c/f)²); below cutoff κ = √(k_c² − k²)', () => {
  const fc = R.guideCutoff(1, 0, a, b);
  for (const f of [7e9, 10e9, 12e9]) { const g = R.guideWave(f, fc); near(g.vp * g.vg, R.C * R.C, 1e-12); near(g.lamg, R.C / f / Math.sqrt(1 - (fc / f) ** 2), 1e-12);
    const h = 1e3, g2 = R.guideWave(f + h, fc), g1 = R.guideWave(f - h, fc); near(2 * Math.PI * 2 * h / (g2.beta - g1.beta), g.vg, 1e-6, 'dω/dβ'); }
  const g = R.guideWave(5e9, fc); assert(!g.travels); near(g.kappa ** 2, (2 * Math.PI * fc / R.C) ** 2 - (2 * Math.PI * 5e9 / R.C) ** 2, 1e-12);
});
/* Maxwell by central differences; units: E and cB, so ∇×E = −(1/c)∂(cB)/∂t and ∇×(cB) = (1/c)∂E/∂t; t = wt/ω */
function maxwell(F, w, pts, L) {
  const h = L * 1e-5, ht = 1e-5;
  let worst = 0, scale = 0;
  for (const [x, y, z, wt] of pts) {
    const f0 = F(x, y, z, wt); scale = Math.max(scale, Math.hypot(...f0.E), Math.hypot(...f0.cB));
    const d = (k, comp, i) => { const p = [x, y, z]; p[i] += h; const u = F(...p, wt)[k][comp]; p[i] -= 2 * h; return (u - F(...p, wt)[k][comp]) / (2 * h); };
    const dt = (k, comp) => (F(x, y, z, wt + ht)[k][comp] - F(x, y, z, wt - ht)[k][comp]) / (2 * ht) * w;   /* ∂/∂t */
    const divE = d('E', 0, 0) + d('E', 1, 1) + d('E', 2, 2), divB = d('cB', 0, 0) + d('cB', 1, 1) + d('cB', 2, 2);
    const curl = (k) => [d(k, 2, 1) - d(k, 1, 2), d(k, 0, 2) - d(k, 2, 0), d(k, 1, 0) - d(k, 0, 1)];
    const cE = curl('E'), cB = curl('cB'), kk = w / R.C;
    for (let i = 0; i < 3; i++) { worst = Math.max(worst, Math.abs(cE[i] + dt('cB', i) / R.C) / kk, Math.abs(cB[i] - dt('E', i) / R.C) / kk); }
    worst = Math.max(worst, Math.abs(divE) / kk, Math.abs(divB) / kk);
  }
  return worst / scale;
}
const rnd = (() => { let s = 7; return () => (s = (s * 16807) % 2147483647) / 2147483647; })();
test('guide modes obey all four of Maxwell\'s equations (to 1e−6 of the fields), travelling and dying away, TE and TM', () => {
  for (const [type, m, n, f] of [['TE', 1, 0, 10e9], ['TE', 2, 1, 25e9], ['TM', 1, 1, 20e9], ['TM', 2, 1, 30e9], ['TE', 1, 0, 5e9], ['TM', 1, 1, 12e9], ['TE', 0, 1, 16e9]]) {
    const pts = []; for (let i = 0; i < 6; i++) pts.push([a * rnd(), b * rnd(), 0.03 * rnd(), 6.28 * rnd()]);
    const e = maxwell((x, y, z, wt) => R.guideField(type, m, n, a, b, f, x, y, z, wt), 2 * Math.PI * f, pts, a);
    assert(e < 1e-6, `${type}${m}${n} at ${f / 1e9} GHz: ${e}`);
  }
});
test('cavity modes obey Maxwell\'s equations at their resonance; TE101 of a 22.86 × 10.16 × 25.00 mm box rings at 8.885 GHz', () => {
  const d = 25e-3; near(R.cavityRes(1, 0, 1, a, b, d) / 1e9, 8.88516, 2e-6, 'TE101');
  for (const [type, m, n, p] of [['TE', 1, 0, 1], ['TE', 1, 1, 2], ['TE', 0, 1, 1], ['TM', 1, 1, 0], ['TM', 2, 1, 1]]) {
    const pts = []; for (let i = 0; i < 6; i++) pts.push([a * rnd(), b * rnd(), d * rnd(), 6.28 * rnd()]);
    const e = maxwell((x, y, z, wt) => R.cavityField(type, m, n, p, a, b, d, x, y, z, wt), 2 * Math.PI * R.cavityRes(m, n, p, a, b, d), pts, a);
    assert(e < 1e-6, `${type}${m}${n}${p}: ${e}`);
  }
  const L = R.cavityList(a, b, d, 16e9); assert.equal(L[0].type + L[0].m + L[0].n + L[0].p, 'TE101');
  assert(L.every((u, i) => !i || u.f >= L[i - 1].f));
});
test('walls: E along every wall and B across it are zero (guide and cavity, TE and TM)', () => {
  const d = 25e-3;
  const cases = [(x, y, z, wt) => R.guideField('TE', 2, 1, a, b, 25e9, x, y, z, wt), (x, y, z, wt) => R.guideField('TM', 1, 2, a, b, 30e9, x, y, z, wt),
    (x, y, z, wt) => R.cavityField('TE', 1, 1, 2, a, b, d, x, y, z, wt), (x, y, z, wt) => R.cavityField('TM', 2, 1, 1, a, b, d, x, y, z, wt)];
  cases.forEach((F, ci) => {
    for (let i = 0; i < 20; i++) {
      const u = rnd(), v = rnd(), wt = 6.28 * rnd(), zz = 0.02 * rnd();
      let q = F(0, b * u, zz, wt); close(q.E[1], 0, 1e-12, 'x = 0 Ey'); close(q.E[2], 0, 1e-12, 'x = 0 Ez'); close(q.cB[0], 0, 1e-12, 'x = 0 Bx');
      q = F(a, b * u, zz, wt); close(q.E[1], 0, 1e-9, 'x = a Ey'); close(q.E[2], 0, 1e-9, 'x = a Ez'); close(q.cB[0], 0, 1e-9, 'x = a Bx');
      q = F(a * u, 0, zz, wt); close(q.E[0], 0, 1e-12, 'y = 0 Ex'); close(q.E[2], 0, 1e-12, 'y = 0 Ez'); close(q.cB[1], 0, 1e-12, 'y = 0 By');
      q = F(a * u, b, zz, wt); close(q.E[0], 0, 1e-9, 'y = b Ex'); close(q.E[2], 0, 1e-9, 'y = b Ez'); close(q.cB[1], 0, 1e-9, 'y = b By');
      if (ci >= 2) for (const z of [0, d]) { q = F(a * u, b * v, z, wt); close(q.E[0], 0, 1e-9, 'end Ex'); close(q.E[1], 0, 1e-9, 'end Ey'); close(q.cB[2], 0, 1e-9, 'end Bz'); }
    }
  });
});
test('cavity: E and B a quarter period apart, so the total energy stays the same while it moves between them', () => {
  const d = 25e-3, N = 14, en = (wt) => { let uE = 0, uB = 0; for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) for (let k = 0; k < N; k++) {
    const q = R.cavityField('TE', 1, 0, 1, a, b, d, (i + 0.5) * a / N, (j + 0.5) * b / N, (k + 0.5) * d / N, wt); uE += q.E[0] ** 2 + q.E[1] ** 2 + q.E[2] ** 2; uB += q.cB[0] ** 2 + q.cB[1] ** 2 + q.cB[2] ** 2; } return [uE, uB]; };
  const [e0, b0] = en(0), [e1, b1] = en(Math.PI / 2), [e2, b2] = en(0.7);
  close(e0, 0, 1e-12 * b0, 'no E at ωt = 0'); close(b1, 0, 1e-12 * e1, 'no B at ωt = π/2'); near(e1, b0, 1e-9, 'equal peaks'); near(e2 + b2, b0, 1e-9, 'total');
});
test('guide: the energy flows along +z at the group speed, ⟨S_z⟩/⟨u⟩ = v_g (TE10, 10 GHz, averaged over the cross section and a period)', () => {
  const f = 10e9, N = 24, M = 16; let S = 0, U = 0;
  for (let t = 0; t < M; t++) for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
    const q = R.guideField('TE', 1, 0, a, b, f, (i + 0.5) * a / N, (j + 0.5) * b / N, 0.004, 2 * Math.PI * t / M);
    S += q.E[0] * q.cB[1] - q.E[1] * q.cB[0];   /* (E × cB)_z: S_z times μ₀c */
    U += (q.E[0] ** 2 + q.E[1] ** 2 + q.E[2] ** 2 + q.cB[0] ** 2 + q.cB[1] ** 2 + q.cB[2] ** 2) / 2;   /* u over ε₀; with S over 1/(μ₀c), S/u = c × S/U */
  }
  near(R.C * S / U, R.guideWave(f, R.guideCutoff(1, 0, a, b)).vg, 1e-9, 'v_g');
});
console.log(`${count} guide and cavity tests passed`);
