'use strict';
// Double pendulum: the equations of motion against an independent Lagrangian solve, energy conservation of the
// Dormand–Prince integrator, the small angle normal modes, the exact large amplitude period of the simple pendulum
// (elliptic integral), and the finite time Lyapunov estimate shown in the page.
const assert = require('node:assert/strict'), { core } = require('./demo_source.cjs');
const m = core('pendulum', 'G0,wrapPi,ellipK,simpleK2,periodExact,simplePeriod,simpleDeriv,dpDeriv,dpEnergy,dpVsec,dpTop,normalModes,phaseDist,sectionStart,sectionEdge,makeInteg,integReset,integTo,herm,crossIn,angleCross,makeLyap,lyapRenorm');
let n = 0;
const close = (a, b, rel = 1e-9, abs = 0) => assert(Math.abs(a - b) <= abs + rel * Math.abs(b), `expected ${b}, got ${a}`);
const test = (name, f) => { f(); n++; console.log('PASS', name); };
const PI = Math.PI, DEG = PI / 180, TOL = 1e-11, CH = 1 / 120;
// run an integrator to time T, recording upward crossings of θ (component i) through 0 mod 2π
function crossings(I, T, i) { const up = []; m.integTo(I, T, (ta, ya, fa, tb, yb, fb, h) => m.angleCross(ta, ya, fa, yb, fb, h, i, (tc, dir) => { if (dir > 0) up.push(tc); })); return up; }

test('accelerations agree with an independent solve of the Euler–Lagrange equations', () => {
  const ps = [{ m1: 1, m2: 1, L1: 1, L2: 1, g: m.G0 }, { m1: 0.3, m2: 4, L1: 0.4, L2: 1.7, g: 3.7 }, { m1: 5, m2: 0.1, L1: 2, L2: 0.2, g: 24 }];
  for (const p of ps) for (const y of [[0.3, -1.2, 0.5, 2], [2.9, 3.1, -4, 1], [-1, 0.2, 0, 0], [1.3, -2.8, 7, -6]]) {
    const out = new Float64Array(4); m.dpDeriv(p)(y, out);
    const [t1, t2, w1, w2] = y, d = t1 - t2, M = p.m1 + p.m2;
    const a = M * p.L1 ** 2, b = p.m2 * p.L1 * p.L2 * Math.cos(d), c = p.m2 * p.L2 ** 2;
    const r1 = -p.m2 * p.L1 * p.L2 * w2 * w2 * Math.sin(d) - M * p.g * p.L1 * Math.sin(t1);
    const r2 = p.m2 * p.L1 * p.L2 * w1 * w1 * Math.sin(d) - p.m2 * p.g * p.L2 * Math.sin(t2);
    const det = a * c - b * b;
    close(out[0], w1, 0, 0); close(out[1], w2, 0, 0);
    close(out[2], (r1 * c - b * r2) / det, 1e-11, 1e-11); close(out[3], (a * r2 - b * r1) / det, 1e-11, 1e-11);
  }
});

test('Dormand–Prince at 10⁻¹¹ keeps the energy fixed, regular and chaotic starts', () => {
  const p = { m1: 1, m2: 1, L1: 1, L2: 1, g: m.G0 };
  for (const y0 of [[130 * DEG, 130 * DEG, 0, 0], [3, -3, 1, 2], [0.1, 0.14, 0, 0]]) {
    const I = m.makeInteg(4, m.dpDeriv(p), TOL); m.integReset(I, 0, y0);
    const E0 = m.dpEnergy(p, y0).E; let worst = 0;
    for (let k = 1; k <= 300; k++) { m.integTo(I, k * 0.1); worst = Math.max(worst, Math.abs(m.dpEnergy(p, I.y).E - E0) / E0); }
    assert(worst < 2e-8, `energy drift ${worst}`);
  }
  // the chaos preset: E = 48.3 J against 58.8 J for both rods straight up (notes)
  close(m.dpEnergy(p, [130 * DEG, 130 * DEG, 0, 0]).E, 48.3, 0, 0.05); close(m.dpTop(p), 58.8, 0, 0.05);
});

test('normal modes: ω² = (g/L)(2 ∓ √2) for equal rods; eigenvectors; a small mode keeps its frequency and shape', () => {
  const p = { m1: 1, m2: 1, L1: 1, L2: 1, g: m.G0 }, nm = m.normalModes(p);
  close(nm.w1 ** 2, m.G0 * (2 - Math.SQRT2), 1e-12); close(nm.w2 ** 2, m.G0 * (2 + Math.SQRT2), 1e-12);
  close(nm.r1, Math.SQRT2, 1e-12); close(nm.r2, -Math.SQRT2, 1e-12);
  close(2 * PI / nm.w1, 2.622, 0, 5e-4); close(2 * PI / nm.w2, 1.086, 0, 5e-4); close(nm.w1, 2.397, 0, 5e-4);   // notes
  for (const q of [{ m1: 0.3, m2: 4, L1: 0.4, L2: 1.7, g: 3.7 }, { m1: 5, m2: 0.1, L1: 2, L2: 0.2, g: 24 }]) {
    const r = m.normalModes(q), M = q.m1 + q.m2;
    for (const [w, sh] of [[r.w1, r.r1], [r.w2, r.r2]]) {
      // (K − ω²M) v = 0 with K = diag(M g L₁, m₂ g L₂), M = [[M L₁², m₂L₁L₂], [m₂L₁L₂, m₂L₂²]], v = (1, shape)
      const w2 = w * w;
      close(M * q.g * q.L1 - w2 * M * q.L1 ** 2 - w2 * q.m2 * q.L1 * q.L2 * sh, 0, 0, 1e-9 * M * q.g * q.L1);
      close(-w2 * q.m2 * q.L1 * q.L2 + (q.m2 * q.g * q.L2 - w2 * q.m2 * q.L2 ** 2) * sh, 0, 0, 1e-9 * M * q.g * q.L1);
    }
  }
  // integrate the full nonlinear equations from a 0.05° mode start: period and shape match the linear modes
  for (const [w, sh] of [[nm.w1, nm.r1], [nm.w2, nm.r2]]) {
    const a = 0.05 * DEG, I = m.makeInteg(4, m.dpDeriv(p), TOL); m.integReset(I, 0, [a, a * sh, 0, 0]);
    const up = crossings(I, 12 * 2 * PI / w, 0), T = (up[up.length - 1] - up[0]) / (up.length - 1);
    close(T, 2 * PI / w, 2e-6);
    m.integReset(I, 0, [a, a * sh, 0, 0]); let worst = 0;
    for (let k = 1; k <= 200; k++) { m.integTo(I, k * 0.05); if (Math.abs(I.y[0]) > 0.3 * a) worst = Math.max(worst, Math.abs(I.y[1] / I.y[0] - sh)); }
    assert(worst < 1e-5, `shape drift ${worst}`);
  }
});

test('simple pendulum: T = 4√(L/g)K(sin(θ₀/2)) at any amplitude; over the top 2K(1/k)/(kω₀)', () => {
  close(m.ellipK(0), PI / 2, 1e-15); close(m.ellipK(Math.SQRT1_2), 1.8540746773013719, 1e-14); close(m.ellipK(0.99), 3.3566005233611923, 1e-13);
  for (const [L, g] of [[1, m.G0], [0.3, 3.7], [2.5, 24]]) {
    const p = { L, g };
    for (const th0d of [1, 10, 90, 150, 179]) {
      const th0 = th0d * DEG, I = m.makeInteg(2, m.simpleDeriv(p), TOL); m.integReset(I, 0, [th0, 0]);
      const Tx = m.periodExact(L, g, th0), up = crossings(I, 6.2 * Tx, 0), T = (up[up.length - 1] - up[0]) / (up.length - 1);
      close(T, Tx, th0d > 170 ? 1e-7 : 1e-8);   // near 180° the period is very sensitive to the start
      close(m.simplePeriod(L, g, th0, 0).T, Tx, 1e-14);
    }
    // small angle limit and the series 1 + θ₀²/16 + 11θ₀⁴/3072
    close(m.periodExact(L, g, 1e-4), 2 * PI * Math.sqrt(L / g), 1e-9);
    const t = 0.3; close(m.periodExact(L, g, t) / (2 * PI * Math.sqrt(L / g)), 1 + t * t / 16 + 11 * t ** 4 / 3072, 1e-5);
    // going round: time between successive passes straight down in the same direction
    const w0 = Math.sqrt(g / L), om = 2.2 * w0, I = m.makeInteg(2, m.simpleDeriv(p), TOL); m.integReset(I, 0, [0.1, om]);
    const pk = m.simplePeriod(L, g, 0.1, om); assert(pk.rot);
    const up = crossings(I, 5.3 * pk.T, 0); close((up[up.length - 1] - up[0]) / (up.length - 1), pk.T, 1e-8);
  }
  // the Big swings preset in the notes: L = 1 m from 150°: T = 3.536 s, T₀ = 2.006 s, ratio 1.762
  close(m.periodExact(1, m.G0, 150 * DEG), 3.536, 0, 5e-4); close(2 * PI / Math.sqrt(m.G0), 2.006, 0, 5e-4);
  close(m.periodExact(1, m.G0, 150 * DEG) / (2 * PI / Math.sqrt(m.G0)), 1.762, 0, 5e-4);
});

test('sensitivity: chaotic starts separate exponentially, the Lyapunov estimate is positive; small swings do not', () => {
  const p = { m1: 1, m2: 1, L1: 1, L2: 1, g: m.G0 }, f = m.dpDeriv(p);
  // the page's procedure: nearby orbit at 10⁻⁸, pulled back every 12 samples of 1/120 s
  function lyap(y0, Tend) {
    const I = m.makeInteg(4, f, TOL); m.integReset(I, 0, y0);
    const Ly = m.makeLyap(p, f, TOL, y0, 1e-8);
    for (let k = 1; k * CH <= Tend + 1e-12; k++) { const T = k * CH; m.integTo(I, T); m.integTo(Ly.sh, T); if (k % 12 === 0) m.lyapRenorm(Ly, p, I.y, T); }
    return Ly.lam;
  }
  const lamChaos = lyap([130 * DEG, 130 * DEG, 0, 0], 30), lamReg = lyap([4.2 * DEG, 6 * DEG, 0, 0], 30);
  assert(lamChaos > 1 && lamChaos < 2.5, `chaos λ ${lamChaos}`);     // the notes: settles near 1.5 s⁻¹
  assert(Math.abs(lamReg) < 0.15, `regular λ ${lamReg}`);
  // two copies 10⁻⁶ rad apart: chaotic pair grows by many orders of magnitude, the regular pair stays close
  const sep = (y0, T) => { const A = m.makeInteg(4, f, TOL), B = m.makeInteg(4, f, TOL); m.integReset(A, 0, y0); m.integReset(B, 0, [y0[0] + 1e-6, y0[1], y0[2], y0[3]]); m.integTo(A, T); m.integTo(B, T); return m.phaseDist(p, A.y, B.y); };
  assert(sep([130 * DEG, 130 * DEG, 0, 0], 12) > 1e-2);
  assert(sep([4.2 * DEG, 6 * DEG, 0, 0], 12) < 1e-4);
});

test('Poincaré section starts: energy E, θ₂ = 0, ω₂ > 0; the edge is where the start stops existing', () => {
  const p = { m1: 1, m2: 1, L1: 1, L2: 1, g: m.G0 };
  for (const E of [5, 15, 40]) for (const th of [-0.6, 0, 0.9]) {
    const e = m.sectionEdge(p, E, th); if (!isFinite(e)) continue;
    for (const fr of [-0.9, 0, 0.5]) { const y = m.sectionStart(p, E, th, fr * e); assert(y && y[1] === 0 && y[3] > 0); close(m.dpEnergy(p, y).E, E, 1e-12); }
    assert(m.sectionStart(p, E, th, 1.0001 * e) === null);
  }
});

console.log(`${n} double-pendulum test groups passed`);
