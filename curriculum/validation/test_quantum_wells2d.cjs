'use strict';
// Quantum Wave Packets, 2D wells (2026-10-31): exact states of a rectangular box, a round box, a 2D oscillator and a separable lattice,
// their dipole matrix elements, and light driving a transition (Rabi oscillation).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const C = core('quantum-waves', 'KIN,HBAR,besselJ,besselZeros,hermiteFns,oscLen,boxX,oscX,chain1D,wells2d,phi2d,phi1d,V2d,driveStep,dipoleMean,matEl');
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
let n = 0; function group(name, f) { f(); n++; console.log('PASS', name); }

// ⟨a|op|b⟩ by quadrature on a grid over [−ext, ext]², with each state sampled once
function sampler(w, ext, G, k) {
  const h = 2 * ext / G, g = [];
  for (let a = 0; a < k; a++) { const re = new Float64Array(G * G), im = new Float64Array(G * G);
    for (let i = 0; i < G; i++) for (let j = 0; j < G; j++) { const [r, m] = C.phi2d(w, w.states[a], -ext + (i + 0.5) * h, -ext + (j + 0.5) * h); re[i * G + j] = r; im[i * G + j] = m; }
    g.push([re, im]); }
  return (a, b, op) => { let re = 0, im = 0; const [ar, ai] = g[a], [br, bi] = g[b];
    for (let i = 0; i < G; i++) for (let j = 0; j < G; j++) { const q = i * G + j, f = op ? op(-ext + (i + 0.5) * h, -ext + (j + 0.5) * h) : 1;
      re += (ar[q] * br[q] + ai[q] * bi[q]) * f; im += (ar[q] * bi[q] - ai[q] * br[q]) * f; }
    return [re * h * h, im * h * h]; };
}

group('Bessel functions and zeros against tables (Abramowitz and Stegun 9.5)', () => {
  near(C.besselJ(0, 1), 0.7651976865579666, 1e-13, 'J0(1)'); near(C.besselJ(1, 2.5), 0.4970941024642741, 1e-13, 'J1(2.5)'); near(C.besselJ(3, 10), 0.05837937930518666, 1e-12, 'J3(10)');
  const z0 = C.besselZeros(0, 3), z1 = C.besselZeros(1, 2), z2 = C.besselZeros(2, 1);
  near(z0[0], 2.404825557695773, 1e-12); near(z0[1], 5.520078110286311, 1e-12); near(z0[2], 8.653727912911012, 1e-12);
  near(z1[0], 3.831705970207512, 1e-12); near(z1[1], 7.015586669815619, 1e-12); near(z2[0], 5.135622301840683, 1e-12);
});
group('box: E = (ħ²π²/2m)(nx²/Lx² + ny²/Ly²); (1,2) and (2,1) degenerate in a square; ⟨1|x|2⟩ = −16L/9π²', () => {
  const w = C.wells2d('box', { Lx: 2, Ly: 2 }, 36), E11 = C.KIN * Math.PI ** 2 * 2 / 4;
  near(w.states[0].E, E11, 1e-12, 'E11'); near(E11, 0.18801, 1e-4, 'E11 in eV');
  assert.strictEqual(w.states[1].E, w.states[2].E); near(w.states[1].E / E11, 2.5, 1e-12);
  near(C.boxX(1, 2, 2), -16 * 2 / (9 * Math.PI ** 2), 1e-12); assert.strictEqual(C.boxX(1, 3, 2), 0);
  const r = C.wells2d('box', { Lx: 2.4, Ly: 1.5 }, 36); assert(Math.abs(r.states[1].E - r.states[2].E) > 0.1, 'rectangle splits the pair');
});
group('every well: states orthonormal and the stored ⟨m|x|n⟩, ⟨m|y|n⟩ match a 2D quadrature', () => {
  for (const [kind, p, ext, G, tol] of [['box', { Lx: 2, Ly: 1.5 }, 1, 200, 1e-6], ['circle', { R: 1.2 }, 1.2, 200, 2e-4], ['osc', { hx: 0.2, hy: 0.3 }, 4, 200, 1e-6], ['lattice', { nw: 3, a: 1, g: 0.4, V0: 0.8 }, 2.2, 220, 3e-3]]) {
    const w = C.wells2d(kind, p, 20), ov = sampler(w, ext, G, 6);
    for (let a = 0; a < 6; a++) for (let b = 0; b < 6; b++) {
      const [o, oi] = ov(a, b); near(o, a === b ? 1 : 0, tol, `${kind} ⟨${a}|${b}⟩`); near(oi, 0, tol);
      const ex = w.X.find((e) => e[0] === a && e[1] === b) || [0, 0, 0, 0], ey = w.Y.find((e) => e[0] === a && e[1] === b) || [0, 0, 0, 0];
      const [xr, xi] = ov(a, b, (x) => x), [yr, yi] = ov(a, b, (x, y) => y);
      near(xr, ex[2], tol, `${kind} x ${a}${b}`); near(xi, ex[3], tol); near(yr, ey[2], tol, `${kind} y ${a}${b}`); near(yi, ey[3], tol);
    }
  }
});
group('round box: E = ħ²j²/2mR², m and −m degenerate, φ = 0 on the wall', () => {
  const w = C.wells2d('circle', { R: 1.2 }, 36);
  near(w.states[0].E, C.KIN * 2.404825557695773 ** 2 / 1.44, 1e-12); assert.strictEqual(w.states[1].E, w.states[2].E); assert.strictEqual(Math.abs(w.states[1].m), 1);
  for (const s of w.states.slice(0, 10)) near(Math.hypot(...C.phi2d(w, s, 1.2 * (1 - 1e-9), 0)), 0, 1e-6, 'wall');
});
group('oscillator: E = ħωx(nx + ½) + ħωy(ny + ½); level n holds n + 1 states when ωx = ωy; ⟨n+1|x|n⟩ = b√((n+1)/2), b = √(ħ/mω)', () => {
  const w = C.wells2d('osc', { hx: 0.2, hy: 0.2 }, 36);
  const count = {}; for (const s of w.states) { const k = Math.round(s.E / 0.2 - 1); count[k] = (count[k] || 0) + 1; }
  for (let k = 0; k <= 6; k++) assert.strictEqual(count[k], k + 1, 'degeneracy of level ' + k);
  near(C.oscLen(0.2), Math.sqrt(2 * C.KIN / 0.2), 1e-12); near(C.oscLen(0.2), 0.61725, 1e-4, 'b in nm');
  near(C.oscX(3, 2, 0.6), 0.6 * Math.sqrt(1.5), 1e-12); assert.strictEqual(C.oscX(4, 2, 0.6), 0);
  // V at the classical turning point of the ground state equals E
  const b = C.oscLen(0.2); near(C.V2d(w, b, 0), 0.1, 1e-12);
});
group('lattice: states are products of the 1D row; the lowest band holds nw² states, below the gap', () => {
  const w = C.wells2d('lattice', { nw: 3, a: 1, g: 0.5, V0: 0.8 }, 36), c = w.p.chain;
  near(w.states[0].E, 2 * c.vals[0], 1e-12); near(c.L, 3 + 4 * 0.5, 1e-12);
  const band = w.states.slice(0, 9).map((s) => s.E), next = w.states[9].E;
  assert(next - band[8] > 3 * (band[8] - band[0]), 'gap wider than the band');
});
group('light on resonance: (1,1) → (2,1) in a 2 nm box, Rabi period h/(eℰ|⟨2,1|x|1,1⟩|), norm kept', () => {
  const w = C.wells2d('box', { Lx: 2, Ly: 2 }, 36), N = w.states.length, cr = new Float64Array(N), ci = new Float64Array(N); cr[0] = 1;
  const f = w.states.findIndex((s) => s.nx === 2 && s.ny === 1), x = C.matEl(w.X, f, 0), F = 0.03, hw = w.states[f].E - w.states[0].E;
  near(x, 16 * 2 / (9 * Math.PI ** 2), 1e-12);
  const Tr = 2 * Math.PI * C.HBAR / (F * x); near(Tr, 382.66, 1e-3, 'Rabi period fs');
  let t = 0, tmp = null, best = 0, tb = 0; const dt = 0.05 * C.HBAR / w.states[N - 1].E;
  while (t < 0.7 * Tr) { tmp = C.driveStep(w, cr, ci, t, dt, F, hw, 'x', tmp); t += dt; const P = cr[f] ** 2 + ci[f] ** 2; if (P > best) { best = P; tb = t; } }
  let nrm = 0; for (let i = 0; i < N; i++) nrm += cr[i] ** 2 + ci[i] ** 2;
  near(nrm, 1, 1e-6, 'norm'); assert(best > 0.99, 'full transfer ' + best); near(tb, Tr / 2, 0.02, 'half period');
  // y polarized light does not touch (2,1) from (1,1)
  const c2 = new Float64Array(N), d2 = new Float64Array(N); c2[0] = 1; t = 0; tmp = null;
  while (t < 0.5 * Tr) { tmp = C.driveStep(w, c2, d2, t, dt, F, hw, 'y', tmp); t += dt; }
  assert(c2[f] ** 2 + d2[f] ** 2 < 1e-8, 'y light leaves (2,1) empty');
});
group('selection rule: oscillator at 2ħω from the ground state stays put; ⟨x⟩ = c†Xc is real', () => {
  const w = C.wells2d('osc', { hx: 0.2, hy: 0.2 }, 36), N = w.states.length, cr = new Float64Array(N), ci = new Float64Array(N); cr[0] = 1;
  let t = 0, tmp = null, worst = 0; const dt = 0.05 * C.HBAR / w.states[N - 1].E;
  while (t < 300) { tmp = C.driveStep(w, cr, ci, t, dt, 0.03, 0.4, 'x', tmp); t += dt; worst = Math.max(worst, 1 - cr[0] ** 2 - ci[0] ** 2); }
  assert(worst < 0.01, 'ground state keeps ' + (1 - worst));
  assert(Number.isFinite(C.dipoleMean(w.X, cr, ci)));
});
console.log(`${n} groups passed`);
