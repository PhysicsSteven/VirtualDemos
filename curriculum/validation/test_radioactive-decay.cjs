'use strict';
// Radioactive Decay: Bateman chain with branching and elution (the ⁹⁹Mo → ⁹⁹ᵐTc generator, Medical Physics module, 2026-10-25).
const assert = require('node:assert');
const { core, readLib } = require('./demo_source.cjs');
const vm = require('node:vm');
const c = core('radioactive-decay', 'fractions,cumDecays,peakTime,makeSim,stepSim,elute,expected');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const L2 = Math.LN2, TMO = 65.924, TTC = 6.0072, BR = 0.886, lam = [L2 / TMO, L2 / TTC];

group('expected() with no branching and no elution is the Bateman solution', () => {
  for (const t of [0, 3, 22.85, 100, 500]) { const e = c.expected(lam, t, 1, []), f = c.fractions(lam, t, 0);
    near(e[0], f[0], 1e-12, 'P'); near(e[1] + 1e-300, f[1] + 1e-300, 1e-12, 'D'); assert(Math.abs(e[0] + e[1] + e[2] - 1) < 1e-12); }
});
group('generator: peak at 22.85 h, transient equilibrium ratio B λD/(λD − λP) = 0.9748', () => {
  near(c.peakTime(lam[0], lam[1]), 22.85, 0.001, 'peak');
  const t = 200, e = c.expected(lam, t, BR, []);
  near(lam[1] * e[1] / (lam[0] * e[0]), BR * lam[1] / (lam[1] - lam[0]), 1e-6, 'ratio'); near(BR * TMO / (TMO - TTC), 0.9748, 1e-4);
});
group('elution: daughter starts again from zero; parent untouched; shares add to 1', () => {
  const el = [24, 48], e1 = c.expected(lam, 48 + 1e-9, BR, el), e0 = c.expected(lam, 48 - 1e-9, BR, [24]);
  assert(e1[1] < 1e-9, 'daughter after elution'); near(e1[3] - c.expected(lam, 47.999, BR, [24])[3], e0[1], 1e-3, 'eluted = daughter just before');
  for (const t of [10, 30, 60, 150]) { const e = c.expected(lam, t, BR, el); near(e[0] + e[1] + e[2] + e[3], 1, 1e-12, 'sum'); near(e[0], Math.exp(-lam[0] * t), 1e-12, 'P'); }
  /* regrowth after an elution at te follows B N_P(te) λP/(λD − λP)(e^(−λP τ) − e^(−λD τ)) */
  const te = 24, tau = 6, e = c.expected(lam, te + tau, BR, [te]);
  near(e[1], BR * Math.exp(-lam[0] * te) * lam[0] / (lam[1] - lam[0]) * (Math.exp(-lam[0] * tau) - Math.exp(-lam[1] * tau)), 1e-10, 'regrowth');
});
group('simulation matches expected() within 4σ for 200,000 nuclei with branching and two elutions', () => {
  const N = 200000, dt = 0.5, s = c.makeSim(N, lam, dt, 2026, BR), el = [24, 48];
  let k = 0; const D1 = [0, 0];
  for (const te of [24, 48, 72]) { while (k * dt < te - 1e-9) { const r = c.stepSim(s); D1[0] += r.d0; D1[1] += r.d1; k++; } if (te < 72) c.elute(s); }
  const e = c.expected(lam, 72, BR, el);
  [[s.counts[0], e[0]], [s.counts[1], e[1]], [s.counts[2], e[2]], [s.counts[3], e[3]], [D1[0], e[4]], [D1[1], e[5]]].forEach(([got, f], i) => {
    const sg = Math.sqrt(N * f * (1 - f)); assert(Math.abs(got - N * f) < 4 * sg + 1, `species ${i}: ${got} against ${N * f} ± ${sg}`); });
  assert.equal(s.counts.reduce((a, b) => a + b, 0), N);
});
group('a single species decays as e^(−λt) and elute() does nothing', () => {
  const s = c.makeSim(1000, [L2 / 6], 1, 7); assert.equal(c.elute(s), 0); for (let i = 0; i < 6; i++) c.stepSim(s);
  assert(Math.abs(s.counts[0] - 500) < 4 * Math.sqrt(250));
});

/* single nuclei (2026-10-31): Gamow's alpha model and the allowed beta spectrum, on NUBASE2020 */
const s1 = core('radioactive-decay', 'useNubase,alphaQ,gamow,alphaMeasured,gnX,ALPHA_SET,betaQ,betaTable,sampleBeta,fermiNR,BETA_SET');
{ const d = {}; vm.runInNewContext(readLib('nubase.js'), d, { timeout: 5000 }); s1.useNubase(d.VDNUBASE); }
group('alpha Q from the masses: ²¹²Po 8.954, ²³⁸U 4.270, ²²⁶Ra 4.871 MeV (AME2020)', () => {
  near(s1.alphaQ(84, 212), 8.9542, 1e-4, 'Po212'); near(s1.alphaQ(92, 238), 4.2698, 1e-4, 'U238'); near(s1.alphaQ(88, 226), 4.8707, 1e-4, 'Ra226');
  const g = s1.gamow(92, 238, 1.2); near(g.Ta, g.Q * (1 - 4.0026 / 238.05), 2e-4, 'alpha takes Q m_d/(m_d + m_α)');
});
group('Gamow: the exact Coulomb WKB integral matches a direct numerical one; P falls with b', () => {
  const g = s1.gamow(84, 212, 1.2), E2 = 7.2973525643e-3 * 197.3269804, k = Math.sqrt(2 * g.mu) / 197.3269804;
  let I = 0; const n = 200000; for (let i = 0; i < n; i++) { /* r = R + (b − R) sin²θ removes the square root end point */
    const th = (i + 0.5) / n * Math.PI / 2, r = g.R + (g.b - g.R) * Math.sin(th) ** 2, dr = (g.b - g.R) * 2 * Math.sin(th) * Math.cos(th) * Math.PI / 2 / n;
    I += Math.sqrt(Math.max(0, 2 * g.Zd * E2 / r - g.Q)) * dr; }
  near(k * I, g.G, 1e-6, 'G');
  assert(s1.gamow(92, 238, 1.2).lgP < g.lgP, 'lower Q, wider barrier, smaller P');
  assert(s1.gamow(84, 212, 1.4).lgT < g.lgT, 'a larger R shortens the half life');
});
group('Gamow with r₀ = 1.2 fm against NUBASE2020: 20 even–even emitters over 26 decades, rms under 0.6 decades', () => {
  let s2 = 0, lo = Infinity, hi = -Infinity;
  for (const [Z, A] of s1.ALPHA_SET) { const m = s1.alphaMeasured(Z, A), g = s1.gamow(Z, A, 1.2); s2 += (g.lgT - m.lgTa) ** 2; lo = Math.min(lo, m.lgTa); hi = Math.max(hi, m.lgTa); }
  const rms = Math.sqrt(s2 / s1.ALPHA_SET.length); assert(rms < 0.6, `rms ${rms}`); assert(hi - lo > 25, 'span');
  near(s1.alphaMeasured(84, 212).lgT, Math.log10(294.4e-9), 1e-4, 'Po212 294.4 ns');
  near(s1.alphaMeasured(98, 252).br, 0.968972, 1e-6, 'Cf252 alpha branch');
  /* Geiger–Nuttall: log T½ rises with Z_d/√Q, correlation 0.946, above 0.93 */
  const xs = s1.ALPHA_SET.map(([Z, A]) => s1.gnX(Z, A)), ys = s1.ALPHA_SET.map(([Z, A]) => s1.alphaMeasured(Z, A).lgTa), mx = xs.reduce((a, b) => a + b) / 20, my = ys.reduce((a, b) => a + b) / 20;
  let sxy = 0, sxx = 0, syy = 0; xs.forEach((x, i) => { sxy += (x - mx) * (ys[i] - my); sxx += (x - mx) ** 2; syy += (ys[i] - my) ** 2; });
  assert(sxy / Math.sqrt(sxx * syy) > 0.93, 'Geiger–Nuttall correlation');
});
group('beta Q from the masses: n 782.35, ³H 18.592, ¹⁴C 156.476, ³²P 1710.66, ¹⁸F (β⁺) 633.92 keV', () => {
  near(s1.betaQ(0, 1, false), 0.782347, 2e-6, 'n'); near(s1.betaQ(1, 3, false), 0.018592, 1e-4, 'H3'); near(s1.betaQ(6, 14, false), 0.156476, 1e-5, 'C14');
  near(s1.betaQ(15, 32, false), 1.710657, 1e-5, 'P32'); near(s1.betaQ(9, 18, true), 1.655918 - 2 * 0.51099895069, 1e-4, 'F18');
});
group('allowed spectra: normalized, means against evaluated values (³H 5.68, ¹⁴C 49.5, ³²P 695, ¹⁸F 249.8 keV)', () => {
  const mean = { '1,3': 5.68, '6,14': 49.5, '15,32': 695, '9,18': 249.8 };
  for (const b of s1.BETA_SET) {
    const Q = s1.betaQ(b.Z, b.A, b.plus), t = s1.betaTable(b.Z + (b.plus ? -1 : 1), Q, b.plus);
    near(t.cum[t.n], 1, 1e-12, 'cum'); let s = 0; for (let i = 0; i < t.n; i++) s += t.d[i] * t.h; near(s, 1, 1e-12, 'density');
    if (mean[`${b.Z},${b.A}`]) near(t.mean * 1000, mean[`${b.Z},${b.A}`], 0.02, `${b.Z},${b.A} mean`);
    /* inverse transform sampling reproduces the mean */
    let x = 12345, acc = 0; const N = 40000; for (let i = 0; i < N; i++) { x = (x * 16807) % 2147483647; acc += s1.sampleBeta(t, x / 2147483647); }
    near(acc / N, t.mean, 0.01, 'sampled mean');
  }
  assert(s1.fermiNR(7, 0.01, false) > 1 && s1.fermiNR(8, 0.01, true) < 1, 'Fermi function: e⁻ pulled back, e⁺ pushed away');
});
console.log(`${n} groups passed`);
