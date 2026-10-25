'use strict';
// Radioactive Decay: Bateman chain with branching and elution (the ⁹⁹Mo → ⁹⁹ᵐTc generator, Medical Physics module, 2026-10-25).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
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
console.log(`${n} groups passed`);
