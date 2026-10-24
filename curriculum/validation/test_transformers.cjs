'use strict';
// Transformers: ideal transformer relations (OpenStax Vol. 2 §15.6), the coupled coil model and its ideal limit, and the power line.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('transformers', 'MU0,RHO_CU,RHO_AL,CORES,windingL,windingR,solve,inst,cabs,carg,line,V_GEN,V_HOUSE,PAIR_OHM_PER_KM');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)) || Math.abs(a - b) <= 1e-12, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const base = { Vp: 120, f: 60, Np: 400, Ns: 40, RL: 10, model: 'ideal', k: 1, core: 'bench' };

group('ideal: V_S/V_P = N_S/N_P (Eq. 15.21), I_S/I_P = N_P/N_S (Eq. 15.23), power in = power out, load seen as (N_P/N_S)²R', () => {
  for (const [Np, Ns, RL] of [[400, 40, 10], [50, 500, 1000], [550, 45, 18], [2500, 50, 2.4], [100, 100, 7]]) {
    const r = c.solve({ ...base, Np, Ns, RL });
    near(c.cabs(r.Vs) / c.cabs(r.Vp), Ns / Np, 1e-14, 'voltage ratio'); near(c.cabs(r.Is) / c.cabs(r.Ip), Np / Ns, 1e-14, 'current ratio');
    near(r.Pin, r.Pout, 1e-13, 'power'); near(r.Zin, (Np / Ns) ** 2 * RL, 1e-13, 'reflected load'); near(r.eff, 1, 1e-14, 'efficiency');
    near(c.carg(r.Vs), 0, 1e-15, 'v_S in phase with v_P');
  }
  const o = c.solve({ ...base, RL: Infinity }); near(c.cabs(o.Ip), 0, 0, 'no load, no current'); near(c.cabs(o.Vs), 12, 1e-14, 'open circuit voltage');
});
group('OpenStax Example 15.6: 12 kV to 240 V is 1/50; 2.0 A in gives 100 A out; line loss (2.0 A)²(200 Ω) = 800 W, and 2 MW at 240 V', () => {
  const r = c.solve({ ...base, Vp: 12000, Np: 2500, Ns: 50, RL: 2.4, core: 'pole' });
  near(c.cabs(r.Vs), 240, 1e-14, 'V_S'); near(c.cabs(r.Ip), 2.0, 1e-14, 'I_P'); near(c.cabs(r.Is), 100, 1e-14, 'I_S');
  const L = c.line(24000, 12000, 200); near(L.I, 2.0, 1e-15, 'line current'); near(L.loss, 800, 1e-13, 'loss'); assert(L.ok);
  const L2 = c.line(24000, 240, 200); near(L2.I, 100, 1e-15); near(L2.loss, 2e6, 1e-13); assert(!L2.ok, 'cannot deliver at 240 V');
});
group('OpenStax Check Your Understanding 15.9: 110 V to 9.0 V at 0.50 A; N_P/N_S = 12.2, I_P = 0.0409 A, source sees 2.69 kΩ', () => {
  const r = c.solve({ ...base, Vp: 110, Np: 550, Ns: 45, RL: 18 });
  near(c.cabs(r.Vs), 9, 1e-14); near(c.cabs(r.Is), 0.5, 1e-14); near(550 / 45, 12.22, 1e-3); near(c.cabs(r.Ip), 0.0409, 1e-3); near(r.Zin, 2689, 1e-3);
});
group('core field: B_peak = √2 V_P/(ω N_P A), the same in both models with no load and coupling 1 when R_P is small', () => {
  const r = c.solve(base), A = c.CORES.bench.A; near(r.Bpk, Math.SQRT2 * 120 / (2 * Math.PI * 60 * 400 * A), 1e-13, 'ideal');
  near(r.Bpk, 0.7035, 1e-3, 'bench preset about 0.70 T');
  const q = c.solve({ ...base, model: 'real', RL: Infinity, k: 1 }); near(q.Bpk, r.Bpk, 2e-3, 'real, no load');
});
group('windings: L = μr μ0 N²A/l, R = ρ N² turn/Acu (copper, Table 9.1); R_P/R_S = (N_P/N_S)²', () => {
  const k = c.CORES.bench; near(c.windingL(k, 400), 4000 * c.MU0 * 160000 * 16e-4 / 0.36, 1e-15); near(c.windingR(k, 400), 1.68e-8 * 160000 * 0.22 / 3e-4, 1e-15);
  near(c.windingR(k, 400) / c.windingR(k, 40), 100, 1e-14); near(c.RHO_CU, 1.68e-8, 0); near(c.RHO_AL, 2.65e-8, 0);
});
group('real model: energy is conserved (P_in = P_out + copper loss), and it tends to the ideal one as k → 1, R → 0, μr → ∞', () => {
  for (const RL of [1, 10, 100, Infinity]) for (const k of [0.9, 0.98, 1]) {
    const r = c.solve({ ...base, model: 'real', RL, k }); near(r.Pin, r.Pout + r.Pcu, 1e-12, `energy RL ${RL} k ${k}`); assert(r.Pin >= 0);
    if (isFinite(RL)) assert(r.eff < 1 && r.eff > 0.5, 'efficiency below 1');
  }
  const save = { ...c.CORES.bench }; c.CORES.bench.mur = 4e9; c.CORES.bench.Acu = 3e6;
  const r = c.solve({ ...base, model: 'real', k: 1 }), i = c.solve(base);
  near(c.cabs(r.Vs), c.cabs(i.Vs), 1e-6, 'V_S'); near(c.cabs(r.Ip), c.cabs(i.Ip), 1e-6, 'I_P'); near(c.cabs(r.Is), c.cabs(i.Is), 1e-6, 'I_S'); near(c.carg(r.Ip), 0, 1e-6, 'in phase');
  Object.assign(c.CORES.bench, save);
});
group('real model, no load: the magnetizing current V_P/(R_P + jωL_P) lags the voltage by nearly 90° and takes only R_P I²', () => {
  const r = c.solve({ ...base, model: 'real', RL: Infinity, k: 0.98 }), L = c.windingL(c.CORES.bench, 400), R = c.windingR(c.CORES.bench, 400), w = 2 * Math.PI * 60;
  near(c.cabs(r.Ip), 120 / Math.hypot(R, w * L), 1e-13, 'I_mag'); assert(c.carg(r.Ip) < -Math.PI / 2 + 0.01, 'lags by almost 90°');
  near(r.Pin, c.cabs(r.Ip) ** 2 * R, 1e-12, 'power'); near(c.cabs(r.Vs), 0.98 * 12 * w * L / Math.hypot(R, w * L), 1e-12, 'V_S = k (N_S/N_P) jωL_P I_P');
});
group('a weaker coupling lowers V_S under load; a heavier load lowers it more (leakage and winding resistance)', () => {
  const v = (k, RL) => c.cabs(c.solve({ ...base, model: 'real', k, RL }).Vs);
  assert(v(0.95, 10) < v(0.99, 10)); assert(v(0.99, 2) < v(0.99, 10)); assert(v(0.99, 10) < 12);
});
group('waveform: inst(X, ω, t) = √2|X|cos(ωt + arg X), so its rms over a cycle is |X|', () => {
  const X = { re: 3, im: -4 }, w = 2 * Math.PI * 50; let s = 0; const N = 2000; for (let i = 0; i < N; i++) s += c.inst(X, w, i / N / 50) ** 2;
  near(Math.sqrt(s / N), 5, 1e-12);
});
group('power line: loss = P²R/V² exactly (linear in 1/V²); delivered = P − loss; house voltage 240(1 − PR/V²); length readout', () => {
  for (const V of [69e3, 115e3, 345e3, 765e3]) { const L = c.line(1e7, V, 10); near(L.loss, 1e14 * 10 / (V * V), 1e-13); near(L.delivered + L.loss, 1e7, 1e-15); near(L.Vhouse, 240 * (1 - 1e8 / (V * V)), 1e-13); }
  near(c.line(1e7, 345e3, 10).loss * (345e3 / 115e3) ** 2, c.line(1e7, 115e3, 10).loss, 1e-13, 'three times the voltage, a ninth of the loss');
  near(c.line(1e6, 12e3, 1).Igen, 1e6 / 12e3, 1e-15); near(c.PAIR_OHM_PER_KM, 2 * 2.65e-8 * 1000 / (Math.PI * 1e-4), 1e-15); near(c.PAIR_OHM_PER_KM, 0.1687, 1e-3);
});
console.log(`${n} groups passed`);
