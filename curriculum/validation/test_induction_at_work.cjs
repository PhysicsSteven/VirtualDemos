'use strict';
// Induction at Work: shake flashlight, graphics tablet, magnetic stripe reader (OpenStax Vol 2 §13.7).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('induction-at-work', 'MU0,magnetMoment,coilResistance,loopFlux,loopFluxDz,FL,coilFlux,coilFluxDz,flashStep,flashState,TB,wireFlux,wireFluxDu,wireEmfs,locate,CARD,track2Bits,f2fTransitions,headEmf,findPeaks,f2fDecode,decodeTrack2');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('magnet and coil: m = BrV/μ0, wire resistance, on axis dipole flux and its derivative', () => {
  near(c.FL.m, 1.3 * Math.PI * 0.005 ** 2 * 0.02 / c.MU0, 1e-12); near(c.FL.m, 1.625, 1e-3); near(c.FL.R, 1.68e-8 * 1000 * 2 * Math.PI * 0.012 / (Math.PI * 1e-4 ** 2), 1e-12); near(c.FL.R, 40.32, 1e-3);
  near(c.loopFlux(1, 0.01, 0), c.MU0 / (2 * 0.01) * 1, 1e-12, 'dipole in the plane of the loop: μ0m/2a');
  for (const z of [-0.03, -0.004, 0.002, 0.02]) { const h = 1e-7; near(c.loopFluxDz(1.6, 0.012, z), (c.loopFlux(1.6, 0.012, z + h) - c.loopFlux(1.6, 0.012, z - h)) / (2 * h), 1e-6); near(c.coilFluxDz(z), (c.coilFlux(z + h) - c.coilFlux(z - h)) / (2 * h), 1e-6); }
  /* far away the coil flux falls as 1/z³ (dipole) */
  near(c.coilFlux(0.5) / c.coilFlux(1.0), 8, 0.01);
});
group('flashlight: energy from the hand = coil heat + diode loss + light + stored energy', () => {
  const s = c.flashState(), A = 0.03, f = 3, C = 0.1, dt = 2e-4; let peak = 0;
  for (let k = 0; k < 20 / dt; k++) { s.t += dt; s.z = A * Math.sin(2 * Math.PI * f * s.t); s.v = A * 2 * Math.PI * f * Math.cos(2 * Math.PI * f * s.t); const r = c.flashStep(s, dt, C, s.t > 10); peak = Math.max(peak, Math.abs(r.eps)); }
  near(s.Ehand, s.Eheat + s.Ediode + s.Eled + s.Ecap, 1e-4, 'energy balance, to the time step'); near(s.Ecap, 0.5 * C * s.Vc ** 2, 1e-9, 'stored energy');
  assert(s.Vc > 0.5 && s.Vc < peak - 2 * c.FL.VD, `Vc ${s.Vc} below the peak EMF less two diode drops`);
  /* EMF is proportional to the speed: twice the shaking rate, twice the peak */
  const pk = (ff) => { let m = 0; for (let t = 0; t < 1; t += 1e-4) { const z = A * Math.sin(2 * Math.PI * ff * t), v = A * 2 * Math.PI * ff * Math.cos(2 * Math.PI * ff * t); m = Math.max(m, Math.abs(c.coilFluxDz(z) * v)); } return m; };
  near(pk(6), 2 * pk(3), 0.01);
});
group('flashlight: the light alone drains the capacitor; no motion, no EMF', () => {
  const s = { ...c.flashState(), Vc: 3.0 }; for (let k = 0; k < 10000; k++) { s.t += 1e-4; const r = c.flashStep(s, 1e-4, 0.1, true); assert.equal(r.eps, 0); assert.equal(r.i, 0); }
  const tau = c.FL.RLED * 0.1, expect = c.FL.VLED + 0.4 * Math.exp(-1 / tau); near(s.Vc, expect, 1e-3, 'Vc − V_LED decays with time constant R_LED C');
  near(s.Eled, -s.Ecap, 1e-4);
});
group('tablet: half plane flux, EMF only while moving, and the fit finds the pen', () => {
  near(c.TB.m, 1.3 * Math.PI * 0.001 ** 2 * 0.005 / c.MU0, 1e-12);
  for (const u of [-0.01, -0.002, 0.003, 0.02]) { const h = 1e-8; near(c.wireFluxDu(u), (c.wireFlux(u + h) - c.wireFlux(u - h)) / (2 * h), 1e-6); }
  /* numerical check of the half plane flux: integrate Bz of the dipole over u < x < u + 0.5 m, all y (y = s tan θ), against Φ(u) − Φ(u + 0.5 m) */
  const m = c.TB.m, hh = c.TB.h, u = 0.004, Lx = 0.5, NX = 20000, NT = 2000; let sum = 0;
  for (let i = 0; i < NX; i++) { const x = u + (i + 0.5) * Lx / NX, s2 = x * x + hh * hh, sq = Math.sqrt(s2); let row = 0;
    for (let j = 0; j < NT; j++) { const th = -Math.PI / 2 + (j + 0.5) * Math.PI / NT, y = sq * Math.tan(th), r2 = s2 + y * y; row += (3 * hh * hh - r2) / r2 ** 2.5 * sq / Math.cos(th) ** 2; }
    sum += row * (Math.PI / NT) * (Lx / NX); }
  near(sum * c.MU0 * m / (4 * Math.PI), c.wireFlux(u) - c.wireFlux(u + Lx), 1e-4, 'half plane flux');
  const xs = Array.from({ length: 21 }, (_, i) => i * 0.005);
  assert(c.wireEmfs(xs, 0.05, 0).every((e) => e === 0)); assert.equal(c.locate(xs, c.wireEmfs(xs, 0.05, 0)), null);
  for (const xp of [0.011, 0.0437, 0.05, 0.0675, 0.089]) for (const v of [0.05, -0.2]) near(c.locate(xs, c.wireEmfs(xs, xp, v)), xp, 1e-6, `pen at ${xp}`);
});
group('card: track 2 encoding, F2F flips, pulses read back to the same number', () => {
  const bits = c.track2Bits('2026');
  assert.equal(bits.length, 10 + 5 * 6 + 10); assert.deepEqual(bits.slice(10, 15), [1, 1, 0, 1, 0], 'start sentinel'); assert.deepEqual(bits.slice(35, 40), [1, 1, 1, 1, 1], 'end sentinel');
  for (let k = 10; k < 40; k += 5) assert.equal(bits.slice(k, k + 5).reduce((a, x) => a + x, 0) % 2, 1, 'odd parity');
  near(c.CARD.bitLen, 0.0254 / 75, 1e-12); const tr = c.f2fTransitions(bits); assert.equal(tr.length, bits.length + 1 + bits.reduce((a, x) => a + x, 0));
  for (const [v0, wob] of [[0.2, 0], [1.2, 0], [0.5, 0.4]]) {
    const L = bits.length * c.CARD.bitLen, ts = [], ys = []; let x = -5e-4, t = 0;
    while (x < L + 5e-4) { const v = v0 * (1 + wob * Math.sin(2 * Math.PI * x / L)), dt = c.CARD.g / 4 / v; ts.push(t); ys.push(c.headEmf(x, v, tr)); x += v * dt; t += dt; }
    const mx = Math.max(...ys.map(Math.abs)), pk = c.findPeaks(ts, ys, 0.3 * mx), got = c.decodeTrack2(c.f2fDecode(pk));
    assert.equal(pk.length, tr.length); assert.deepEqual(c.f2fDecode(pk), bits); assert(got.ok && got.parity); assert.equal(got.digits, '2026');
    if (!wob) near(mx, v0, 0.05, 'pulse height grows with speed');
  }
});
console.log(`${n} groups passed`);
