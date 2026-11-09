'use strict';
// Condensates: Interference and Vortices: the Fourier transform, the coupling constant against its formula, the oscillator
// ground state (E = ħω exactly in two dimensions), the Thomas–Fermi limit, conservation of atoms, energy and angular momentum,
// Kohn's theorem (sloshing at ω), breathing at exactly 2ω (Pitaevskii–Rosch), the fringe spacing of two expanding packets against
// the exact free particle result, and the vortex finder (winding, sign, position within a grid cell).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('condensate-waves', 'HBAR,M_RB87,A_RB87,oscLength,couplingG,tfMu,tfRadius,healing,fftPrep,fft,makeGrid,potential,step,normalize,norm,moments,energy,seed,imprint,findVortices,fringePeriod,absorber,stableDt');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const ground = (gr, V, G, k, h) => { for (let i = 0; i < k; i++) c.step(gr, V, G, h || 0.02, 'imag', 0, 0); };
/* the period of an oscillating signal from the times it crosses its middle value (linear interpolation), averaged */
function periodOf(ts, ys) { const lo = Math.min(...ys), hi = Math.max(...ys), m = (lo + hi) / 2, cr = [];
  for (let i = 1; i < ys.length; i++) if ((ys[i - 1] - m) * (ys[i] - m) < 0) cr.push(ts[i - 1] + (m - ys[i - 1]) / (ys[i] - ys[i - 1]) * (ts[i] - ts[i - 1]));
  return 2 * (cr[cr.length - 1] - cr[0]) / (cr.length - 1); }

group('FFT: forward then inverse returns the input (times n); a single wave lands in one bin', () => {
  const N = 64; c.fftPrep(N); const re = new Float64Array(N), im = new Float64Array(N);
  for (let i = 0; i < N; i++) re[i] = Math.cos(2 * Math.PI * 5 * i / N);
  c.fft(re, im, 0, 1, N, -1); near(re[5], N / 2, 1e-12, 'bin 5'); near(re[N - 5], N / 2, 1e-12, 'bin −5'); assert(Math.abs(re[4]) < 1e-9);
  c.fft(re, im, 0, 1, N, 1); for (let i = 0; i < N; i++) assert(Math.abs(re[i] / N - Math.cos(2 * Math.PI * 5 * i / N)) < 1e-12);
});
group('Units: a⊥ = 2.411 µm for rubidium 87 at 20 Hz; a_z = 0.341 µm at 1 kHz; 5,000 atoms give g₂N = 385 ħω a⊥²', () => {
  near(c.oscLength(c.M_RB87, 2 * Math.PI * 20), 2.4114e-6, 1e-4); near(c.oscLength(c.M_RB87, 2 * Math.PI * 1000), 3.4102e-7, 1e-4);
  const a = 98.98 * 5.29177210544e-11; near(c.A_RB87, a, 1e-12);
  near(c.couplingG(5000, c.A_RB87, c.M_RB87, 2 * Math.PI * 1000), Math.sqrt(8 * Math.PI) * 5000 * a / 3.4102e-7, 1e-4); near(c.couplingG(5000, c.A_RB87, c.M_RB87, 2 * Math.PI * 1000), 385.0, 2e-3);
});
group('Ground states: without interactions E = ħω exactly (two dimensions); with G = 400 the chemical potential and ⟨r²⟩ approach Thomas–Fermi', () => {
  let gr = c.makeGrid(64, 8), V = c.potential(gr, {}); c.seed(gr, 0, 0, 0); ground(gr, V, 0, 300); near(c.energy(gr, V, 0).total, 1, 1e-6, 'E0');
  gr = c.makeGrid(64, 7); V = c.potential(gr, {}); c.seed(gr, 400, 0, 0); ground(gr, V, 400, 600); const e = c.energy(gr, V, 400);
  near(e.total + e.int, c.tfMu(400), 0.01, 'μ (TF leaves out the kinetic energy of the edge, 0.6 %)'); near(c.moments(gr).r2, c.tfRadius(400) ** 2 / 3, 0.02, '⟨r²⟩ = R²/3 (1.5 %)');
  near(c.healing(400), 1 / Math.sqrt(2 * Math.sqrt(400 / Math.PI)), 1e-12);
});
group('Real time: atoms, energy and angular momentum are conserved in a round trap; the time step is inside the stability limit', () => {
  const gr = c.makeGrid(64, 8), V = c.potential(gr, {}), G = 200; c.seed(gr, G, 0, 0); ground(gr, V, G, 300); c.imprint(gr, [[1.1, 0.07, 1]]);
  const dt = c.stableDt(gr); assert(dt * (Math.PI / gr.dx) ** 2 / 2 < Math.PI / 2, 'dt k²max/2 < π/2');
  const E0 = c.energy(gr, V, G).total, L0 = c.moments(gr).lz;
  for (let i = 0; i < 400; i++) c.step(gr, V, G, dt, 'real', 0, 0);
  near(c.norm(gr), 1, 1e-12, 'norm'); near(c.energy(gr, V, G).total, E0, 1e-5, 'energy'); near(c.moments(gr).lz, L0, 0.02, 'Lz (finite differences)');
});
group('Kohn: a displaced condensate sloshes at exactly ω, with or without interactions (period 2π within 0.5 %)', () => {
  for (const G of [0, 300]) {
    const gr = c.makeGrid(64, 9), V = c.potential(gr, {}), PV = c.potential(gr, { x0: 1.2 }); c.seed(gr, G, 1.2, 0); ground(gr, PV, G, 300);
    const dt = c.stableDt(gr), ts = [], ys = []; for (let i = 0; i < Math.ceil(7 / dt); i++) { c.step(gr, V, G, dt, 'real', 0, 0); if (i % 3 === 0) { ts.push((i + 1) * dt); ys.push(c.moments(gr).mx); } }
    near(periodOf(ts, ys), 2 * Math.PI, 5e-3, `G = ${G}`);
  }
});
group('Breathing: after the trap frequency jumps, ⟨r²⟩ oscillates at exactly 2ω for any coupling (period π within 0.5 %)', () => {
  for (const G of [0, 300]) {
    const gr = c.makeGrid(64, 9), V = c.potential(gr, {}), PV = c.potential(gr, { ex: 0.64, ey: 0.64 }); c.seed(gr, G, 0, 0); ground(gr, PV, G, 300);
    const dt = c.stableDt(gr), ts = [], ys = []; for (let i = 0; i < Math.ceil(7 / dt); i++) { c.step(gr, V, G, dt, 'real', 0, 0); if (i % 3 === 0) { ts.push((i + 1) * dt); ys.push(c.moments(gr).r2); } }
    near(periodOf(ts, ys), Math.PI, 5e-3, `G = ${G}`);
  }
});
group('Interference: two free Gaussian packets d apart make stripes 2π(1 + t²)/(dt) apart (exact for e^(−x²/2) packets); the far field limit is ht/(md)', () => {
  const gr = c.makeGrid(128, 16), V = c.potential(gr, { off: true }), d = 6, { n: N, x } = gr;
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) { const q = j * N + i; gr.re[q] = Math.exp(-((x[i] - d / 2) ** 2 + x[j] ** 2) / 2) + Math.exp(-((x[i] + d / 2) ** 2 + x[j] ** 2) / 2); gr.im[q] = 0; }
  c.normalize(gr); const dt = c.stableDt(gr); let t = 0; while (t < 3 - 1e-9) { c.step(gr, V, 0, dt, 'real', 0, 0); t += dt; }
  near(c.fringePeriod(gr, 0.5), 2 * Math.PI * (1 + t * t) / (d * t), 0.02, `t = ${t}`);
});
group('Vortices: an imprinted winding is found with its sign and to within a tenth of a cell; a centered one carries ⟨L_z⟩ = ħ', () => {
  const gr = c.makeGrid(64, 8), V = c.potential(gr, {}), G = 300; c.seed(gr, G, 0, 0); ground(gr, V, G, 200);
  for (let i = 0; i < 200; i++) { c.imprint(gr, [[0.03, 0.05, 1]]); c.step(gr, V, G, 0.005, 'imag', 0, 0); } c.imprint(gr, [[0.03, 0.05, 1]]);
  near(c.moments(gr).lz, 1, 0.01, 'Lz'); let v = c.findVortices(gr, 0.05); assert.strictEqual(v.length, 1); assert.strictEqual(v[0].s, 1); assert(Math.hypot(v[0].x - 0.03, v[0].y - 0.05) < 0.1 * gr.dx, 'position');
  c.imprint(gr, [[1.5, 0.3, -1], [-1.5, -0.3, 1]]); v = c.findVortices(gr, 0.05).sort((a, b) => a.x - b.x); assert.strictEqual(JSON.stringify(v.map((q) => q.s)), '[1,-1]', 'imprint sets the whole phase: the centered winding is replaced');
});
group('Absorbing edge: the mask is 1 inside 85 % of the half width and falls toward the edge', () => {
  const gr = c.makeGrid(64, 10), m = c.absorber(gr, 0.01, 40); assert.strictEqual(m[32 * 64 + 32], 1); assert(m[32 * 64 + 0] < 1 && m[32 * 64 + 0] > 0.6);
});
console.log(`${n} groups passed`);
