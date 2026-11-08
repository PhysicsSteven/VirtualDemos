'use strict';
// Lasers: Einstein A and B coefficients against the Planck law, the two level atom, the cavity rate equations (steady state,
// threshold, slope, relaxation oscillations checked against an independent RK4 integration), and the He–Ne longitudinal modes.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('lasers', 'C0,HP,KB,boltz,AoverB,stimOverSpont,pumped2,MEDIA,laserParams,upper,derivs,steadyIdeal,steadySeed,pOut,pAbs,relax,advance,step,offState,fsr,doppler,gainRel,bandHalf,modeList,HENE');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(Math.abs(b), 1e-300), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('Einstein coefficients: A/B = 8πhν³/c³ and stimulated/spontaneous = 1/(e^{hν/kT} − 1), from the Planck law', () => {
  for (const [lam, T] of [[632.8e-9, 300], [10.6e-6, 300], [1e-3, 3], [500e-9, 6000]]) {
    const nu = c.C0 / lam, rho = 8 * Math.PI * c.HP * nu ** 3 / c.C0 ** 3 / Math.expm1(c.HP * nu / (c.KB * T));
    near(rho / c.AoverB(nu), c.stimOverSpont(nu, T), 1e-12, `${lam} m, ${T} K`);
  }
  // visible light at room temperature: spontaneous wins by about e^{76}; microwave at 3 K: stimulated wins
  assert(c.stimOverSpont(c.C0 / 632.8e-9, 300) < 1e-32); assert(c.stimOverSpont(c.C0 / 1e-2, 3) > 1);
});

group('two level atom: thermal N₂/N₁ = e^{−hν/kT} < 1, and steady pumping never inverts it', () => {
  const nu = c.C0 / 694.3e-9;
  near(c.boltz(nu, 300), Math.exp(-c.HP * nu / (c.KB * 300)), 1e-15); assert(c.boltz(nu, 1e9) < 1 && c.boltz(nu, 1e9) > 0.9999);
  for (const wA of [0.1, 1, 10, 1e6]) assert(c.pumped2(wA) < 1);
  near(c.pumped2(1), 0.5, 1e-15);
});

for (const key of ['nd', 'ruby']) {
  const p = c.laserParams(c.MEDIA[key], 0.95);
  group(`${key}: threshold, steady state and slope agree with the rate equations`, () => {
    // at threshold the round trip gain equals the loss: K N_th τ_c = 1, and the ideal steady state there has q = 0
    near(p.K * p.Nth * p.tc, 1, 1e-14, 'gain = loss'); near(p.tc, 1 / (p.kOut + p.kInt), 1e-15);
    near(c.steadyIdeal(p, p.Wth).N, p.Nth, 1e-9, 'N at threshold');
    for (const r of [1.5, 3, 10]) {
      const W = r * p.Wth, s = c.steadyIdeal(p, W), d = c.derivs(Object.assign({}, p, { beta: 0 }), W, s.N, s.q);
      assert(Math.abs(d[0]) < 1e-9 * W * p.Nt && Math.abs(d[1]) < 1e-9 * s.q / p.tc, `ideal steady ${r}× threshold`);
      const ss = c.steadySeed(p, W), ds = c.derivs(p, W, ss.N, ss.q);
      assert(Math.abs(ds[0]) < 1e-9 * W * p.Nt && Math.abs(ds[1]) < 1e-6 * ss.q / p.tc, `seeded steady ${r}×`);
      near(ss.q, s.q, 1e-5, 'the seed barely matters well above threshold');
    }
    // output power rises linearly with pump above threshold (the slope efficiency is constant)
    const P = (r) => c.pOut(p, c.steadyIdeal(p, r * p.Wth).q);
    near(P(3) - P(2), 2 * (P(2) - P(1.5)), 1e-9, 'linear above threshold');
    assert.equal(c.steadyIdeal(p, 0.5 * p.Wth).q, 0);
    // below threshold the seeded laser glows weakly, and inversion stays below threshold
    const lo = c.steadySeed(p, 0.8 * p.Wth); assert(lo.N < p.Nth && lo.q > 0 && lo.q < 1e-4 * c.steadyIdeal(p, 2 * p.Wth).q);
    // energy: output power never exceeds absorbed pump power times the quantum efficiency λ_p/λ
    for (const r of [1.5, 5]) { const W = r * p.Wth, s = c.steadyIdeal(p, W); assert(c.pOut(p, s.q) < c.pAbs(p, W, s.N) * p.El / p.Ep); }
  });

  group(`${key}: relaxation oscillations — the linearized frequency and damping match an independent RK4 run of the rate equations`, () => {
    const W = 3 * p.Wth, ss = c.steadySeed(p, W), rl = c.relax(p, W);
    const rk = (N, q, h) => {
      const f = (N, q) => c.derivs(p, W, N, q);
      const k1 = f(N, q), k2 = f(N + h / 2 * k1[0], q + h / 2 * k1[1]), k3 = f(N + h / 2 * k2[0], q + h / 2 * k2[1]), k4 = f(N + h * k3[0], q + h * k3[1]);
      return [N + h / 6 * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]), q + h / 6 * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1])];
    };
    const h = 0.2e-9, T = 4 / rl.f; let N = ss.N * 1.002, q = ss.q, t = 0, prev = 0, peak = 0; const ups = [], peaks = [];
    while (t < T) {
      [N, q] = rk(N, q, h); t += h; const d = q - ss.q; peak = Math.max(peak, d);
      if (prev < 0 && d >= 0) { ups.push(t); if (ups.length > 1) peaks.push(peak); peak = 0; } prev = d;
    }
    const period = (ups[ups.length - 1] - ups[0]) / (ups.length - 1);
    near(1 / period, rl.f, 0.01, 'relaxation frequency');
    // successive peaks shrink by e^{−γT/2}
    near(peaks[peaks.length - 1] / peaks[0], Math.exp(-rl.gamma / 2 * period * (peaks.length - 1)), 0.03, 'damping');
    // the demo's own integrator (exact exponential splitting) follows the same oscillation
    const s = { N: ss.N * 1.002, q: ss.q, t: 0 }; let pv = 0; const ups2 = [];
    c.advance(p, W, s, T, (st) => { const d = st.q - ss.q; if (pv < 0 && d >= 0) ups2.push(st.t); pv = d; });
    near((ups2[ups2.length - 1] - ups2[0]) / (ups2.length - 1), period, 0.01, 'demo integrator period');
  });
}

group('Nd:YAG from the pump turned on: the demo integrator settles to the steady state', () => {
  const p = c.laserParams(c.MEDIA.nd, 0.95), W = 2 * p.Wth, s = c.offState(p);
  c.advance(p, W, s, 3e-3); const ss = c.steadySeed(p, W);
  near(s.N, ss.N, 1e-3, 'inversion'); near(s.q, ss.q, 0.02, 'photons');
});

group('He–Ne modes: spacing c/2L, Doppler width ν₀√(8kT ln2/Mc²) ≈ 1.5 GHz, lasing band where gain = loss', () => {
  const nu0 = c.C0 / c.HENE.lamVac;
  near(c.fsr(0.15), 999308193, 1e-9, '15 cm → 0.999 GHz');
  const fw = c.doppler(nu0, c.HENE.T, c.HENE.M), vth = Math.sqrt(2 * c.KB * c.HENE.T / c.HENE.M);
  near(fw, 2 * Math.sqrt(Math.LN2) * nu0 * vth / c.C0, 1e-12); assert(fw > 1.4e9 && fw < 1.7e9, `FWHM ${fw}`);
  for (const ratio of [1.2, 2, 5]) near(c.gainRel(ratio, c.bandHalf(ratio, fw), fw), 1, 1e-12, `edge of band, ratio ${ratio}`);
  assert.equal(c.bandHalf(0.9, fw), 0);
  const L = 0.3, dL = 120e-9, list = c.modeList(L, dL, nu0, 2e9), sp = c.C0 / (2 * (L + dL));
  assert(list.length >= 7);
  for (let i = 1; i < list.length; i++) { assert.equal(list[i].q, list[i - 1].q + 1); near(list[i].d - list[i - 1].d, sp, 1e-6); }
  for (const m of list) { assert(Math.abs(m.d) <= 2e9); near(m.d + nu0, m.q * sp, 1e-15, 'ν_q = q c/2L'); }
});

console.log(`${n} lasers test groups passed`);
