'use strict';
// Pendulums, Spherical pendulum (2026-11-16): the fourth order RATTLE integration against the exact orbit from E and L_z,
// conical pendulum period, Airy's precession for small swings, plane swing limit.
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const c = core('pendulum', 'spStep,spStart,spEnergy,spLz,spOrbit,spUeff,spConeSpeed,periodExact');
let n = 0;
const close = (a, b, rel, msg = '') => assert(Math.abs(a - b) <= rel * Math.abs(b) + 1e-12, `${msg} expected ${b}, got ${a}`);
const test = (name, fn) => { fn(); n++; console.log('PASS', name); };
const g = 9.81, D = Math.PI / 180, L = 1;
/* run and measure: widest points (θ maxima, the apsides), their spacing in time and in φ, the narrowest and widest θ */
function run(th0, k, T, h = 1e-3) {
  let s = c.spStart(L, g, th0 * D, k), t = 0, ph = 0, pu = Math.atan2(s.r[1], s.r[0]), lo = 9, hi = -9, zPrev = s.r[2], dzPrev = 0, Emax = 0, LzMax = 0;
  const E0 = c.spEnergy(s, g), L0 = c.spLz(s), aps = [];
  while (t < T) {
    const s2 = c.spStep(s, g, L, h); t += h;
    const a = Math.atan2(s2.r[1], s2.r[0]); let d = a - pu; d -= 2 * Math.PI * Math.round(d / (2 * Math.PI)); ph += d; pu = a;
    const th = Math.acos(-s2.r[2] / L); lo = Math.min(lo, th); hi = Math.max(hi, th);
    const dz = s2.r[2] - zPrev; if (dzPrev > 0 && dz <= 0) aps.push([t, ph]); dzPrev = dz; zPrev = s2.r[2];
    Emax = Math.max(Emax, Math.abs(c.spEnergy(s2, g) - E0)); LzMax = Math.max(LzMax, Math.abs(c.spLz(s2) - L0)); s = s2;
  }
  const o = c.spOrbit(L, g, E0, L0), m = aps.length - 1;
  return { o, lo, hi, aps, Tm: (aps[m][0] - aps[0][0]) / (m), dphm: (aps[m][1] - aps[0][1]) / m, Emax, LzMax, E0, L0 };
}
test('conical pendulum: push 1 keeps θ fixed, one turn takes 2π√(L cos θ/g)', () => {
  for (const th of [10, 30, 60, 80]) {
    const s0 = c.spStart(L, g, th * D, 1), R = run(th, 1, 6);
    assert(Math.abs(R.hi - th * D) < 1e-7 && Math.abs(R.lo - th * D) < 1e-7, `circle at ${th}°: ${R.lo / D} to ${R.hi / D}`);
    close(2 * Math.PI * L * Math.sin(th * D) / Math.hypot(...s0.v), 2 * Math.PI * Math.sqrt(L * Math.cos(th * D) / g), 1e-12, 'turn time');
  }
});
test('L_z fixed to rounding, E within 1e-7 of g L over 60 s; exact limits, period and turn per swing match the run', () => {
  for (const [th0, k] of [[10, 0.5], [45, 0.4], [30, 0.1], [60, 1.6], [70, 0.7], [80, 2]]) {
    const R = run(th0, k, 30);
    assert(R.LzMax < 1e-11 * Math.max(1, Math.abs(R.L0)), `L_z drift ${R.LzMax}`); assert(R.Emax < 1e-7 * g * L, `E wobble ${R.Emax}`);
    close(R.hi, R.o.thMax, 1e-6, 'θ max'); close(R.lo, R.o.thMin, 1e-6, 'θ min');
    close(R.Tm, R.o.T, 2e-5, 'time per swing'); close(R.dphm, R.o.dphi, 2e-5, 'turn per swing');
    console.log(`   θ₀ ${th0}°, push ${k}: θ ${(R.o.thMin / D).toFixed(3)}° to ${(R.o.thMax / D).toFixed(3)}°, T ${R.o.T.toFixed(5)} s, Δφ ${(R.o.dphi / D).toFixed(4)}°, apsides turn ${((R.o.dphi - Math.PI) / D).toFixed(4)}° a swing`);
  }
});
test('Airy: small swings turn at (3/8) a b √(g/L); plane swing: Δφ = π and the half period of the plane pendulum', () => {
  for (const [th0, k] of [[1, 0.5], [2, 0.5], [5, 0.3], [5, 0.8]]) { const s0 = c.spStart(L, g, th0 * D, k), o = c.spOrbit(L, g, c.spEnergy(s0, g), c.spLz(s0)); console.log(`   Airy at ${th0}°, push ${k}: exact/Airy = ${(o.prec / o.airy).toFixed(5)}`); close(o.prec, o.airy, 0.002 * th0 * th0, `Airy at ${th0}°`); }
  const s = c.spStart(L, g, 30 * D, 0), o = c.spOrbit(L, g, c.spEnergy(s, g), c.spLz(s));
  close(o.dphi, Math.PI, 1e-12); close(o.T, c.periodExact(L, g, 30 * D) / 2, 1e-9, 'half the plane period'); assert(o.thMin < 1e-6, 'through the bottom');
  /* turning points are where U_eff = E */
  const s2 = c.spStart(L, g, 50 * D, 0.6), E = c.spEnergy(s2, g), Lz = c.spLz(s2), o2 = c.spOrbit(L, g, E, Lz);
  close(c.spUeff(L, g, Lz, o2.thMax), E, 1e-9); close(c.spUeff(L, g, Lz, o2.thMin), E, 1e-9);
});
console.log(`${n} spherical pendulum test groups passed`);
