'use strict';
// Quantum Coin Toss: Born probabilities on the Bloch sphere, collapse, and Stern–Gerlach magnets in a row against simulation.
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const C = core('quantum-coin', 'qcVec,qcAmps,qcPUp,qcMeasure,qcRandomDir,qcRng,qcChain,qcChainExpect');
let n = 0;
const test = (name, fn) => { fn(); n++; console.log('PASS', name); };
const near = (a, b, tol, msg) => assert(Math.abs(a - b) <= tol, `${msg || ''} expected ${b}, got ${a}`);

test('amplitudes: |a|² + |b|² = 1; P(heads) = cos²(θ/2), 0.75 at θ = 60°; the phase does not change it', () => {
  for (const th of [0, 30, 60, 90, 137, 180]) for (const ph of [0, 90, 215]) { const A = C.qcAmps(th, ph); near(A.a ** 2 + A.b[0] ** 2 + A.b[1] ** 2, 1, 1e-15); near(A.a ** 2, Math.cos(th * Math.PI / 360) ** 2, 1e-15); }
  near(C.qcAmps(60, 0).a ** 2, 0.75, 1e-15); near(C.qcAmps(90, 0).a ** 2, C.qcAmps(90, 90).a ** 2, 0);
});
test('Bloch sphere: P(up along n) = (1 + s·n)/2 = cos²(γ/2), and the same |a|² as the coin for n = z', () => {
  for (const th of [0, 45, 90, 120, 180]) near(C.qcPUp(C.qcVec(th, 33), [0, 0, 1]), C.qcAmps(th, 33).a ** 2, 1e-15);
  near(C.qcPUp([0, 0, 1], C.qcVec(60, 0)), 0.75, 1e-15); near(C.qcPUp(C.qcVec(90, 0), [1, 0, 0]), 1, 1e-15); near(C.qcPUp(C.qcVec(90, 0), [0, 0, 1]), 0.5, 1e-15);
  near(C.qcPUp(C.qcVec(90, 90), C.qcVec(90, 0)), 0.5, 1e-15);   /* phase 90°: +y, measured along x */
});
test('collapse: after a measurement the state is ±n, so measuring again along n always agrees', () => {
  const r = C.qcRng(5); let s = C.qcVec(90, 0); const nz = [0, 0, 1], m1 = C.qcMeasure(s, nz, r);
  for (let i = 0; i < 200; i++) { const m = C.qcMeasure(m1.s, nz, r); assert.equal(m.up, m1.up); }
});
test('100 000 measurements at θ = 60° give 0.75 up within 5σ; the oven direction is uniform (mean of z near 0, of z² near 1/3)', () => {
  const r = C.qcRng(9), N = 100000; let up = 0; for (let i = 0; i < N; i++) if (C.qcMeasure([0, 0, 1], C.qcVec(60, 0), r).up) up++;
  near(up / N, 0.75, 5 * Math.sqrt(0.75 * 0.25 / N)); let z = 0, z2 = 0; for (let i = 0; i < N; i++) { const d = C.qcRandomDir(r); z += d[2]; z2 += d[2] ** 2; near(Math.hypot(...d), 1, 1e-12); }
  near(z / N, 0, 0.01); near(z2 / N, 1 / 3, 0.005);
});
const M = (a0, k0, a1, k1, a2) => [{ a: a0, keep: k0 }, { a: a1, keep: k1 || 'both' }, { a: a2 || 0, keep: 'both' }];
test('magnets, expected: one magnet 1/2 and 1/2; z then z 1/2 up, 0 down; z then x 1/4 each; z, x, z 1/8 each with 3/4 blocked; z then 60° 3/8 and 1/8', () => {
  const e1 = C.qcChainExpect([{ a: 0, keep: 'both' }]); near(e1.up, 0.5, 1e-15); near(e1.down, 0.5, 1e-15);
  const zz = C.qcChainExpect(M(0, 'up', 0).slice(0, 2)); near(zz.up, 0.5, 1e-15); near(zz.down, 0, 1e-15); near(zz.blocked, 0.5, 1e-15);
  const zx = C.qcChainExpect(M(0, 'up', 90).slice(0, 2)); near(zx.up, 0.25, 1e-15); near(zx.down, 0.25, 1e-15);
  const zxz = C.qcChainExpect(M(0, 'up', 90, 'up', 0)); near(zxz.up, 0.125, 1e-15); near(zxz.down, 0.125, 1e-15); near(zxz.blocked, 0.75, 1e-15);
  const z60 = C.qcChainExpect(M(0, 'up', 60).slice(0, 2)); near(z60.up, 0.375, 1e-15); near(z60.down, 0.125, 1e-15);
  const both = C.qcChainExpect(M(0, 'both', 90, 'both', 0)); near(both.up + both.down, 1, 1e-15); near(both.blocked, 0, 0);
});
test('magnets, simulated: 100 000 atoms through every chain match the expected fractions within 5σ', () => {
  const r = C.qcRng(77), N = 100000;
  for (const m of [M(0, 'up', 90, 'up', 0), M(0, 'down', 45, 'up', 135), M(30, 'both', 90, 'down', 10), M(0, 'up', 60).slice(0, 2)]) {
    const e = C.qcChainExpect(m), c = { up: 0, down: 0, blocked: 0 };
    for (let i = 0; i < N; i++) { const res = C.qcChain(m, r); if (res.stop >= 0) c.blocked++; else c[res.out[res.out.length - 1] ? 'up' : 'down']++; }
    for (const k of ['up', 'down', 'blocked']) near(c[k] / N, e[k], 5 * Math.sqrt(Math.max(e[k] * (1 - e[k]), 1e-9) / N) + 1e-12, JSON.stringify(m) + ' ' + k);
  }
});
console.log(`${n} tests passed`);
