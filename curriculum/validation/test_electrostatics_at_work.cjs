'use strict';
// Electrostatics at Work: Van de Graaff dome, ink jet deflection, precipitator drift and Deutsch efficiency.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('electrostatics-at-work', 'EPS0,KC,G,E_BREAK,sphereC,sphereV,sphereField,vMax,qMax,timeToSpark,INK,dropMass,inkjet,chargeFor,rayleighLimit,AIR,cunningham,chargeFactor,satCharge,driftSpeed,deutsch');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('dome: C = 4πε₀R, V = kQ/R, surface field V/R, zero inside', () => {
  near(c.sphereC(0.15), 1.6690e-11, 1e-4, 'C of a 15 cm sphere is 16.7 pF');
  const Q = 1e-6, R = 0.15; near(c.sphereV(Q, R), 8.98755e9 * Q / R, 1e-5);
  near(c.sphereField(Q, R, R), c.sphereV(Q, R) / R, 1e-12, 'surface field = V/R'); assert.strictEqual(c.sphereField(Q, R, 0.1), 0);
  near(c.sphereField(Q, R, 0.3), c.sphereField(Q, R, R) / 4, 1e-12, 'inverse square outside');
  near(c.sphereV(c.qMax(R), R) / R, c.E_BREAK, 1e-12, 'at Qmax the surface field is exactly Eb');
});
group('breakdown: Vmax = Eb R (450 kV for 15 cm), Qmax = 4πε₀R²Eb, time = Qmax/I', () => {
  near(c.vMax(0.15), 4.5e5, 1e-12); near(c.qMax(0.15), 7.5107e-6, 1e-4); near(c.timeToSpark(0.15, 2e-6), 3.7553, 1e-4);
  near(c.vMax(0.30) / c.vMax(0.15), 2, 1e-12, 'Vmax ∝ R'); near(c.timeToSpark(0.30, 2e-6) / c.timeToSpark(0.15, 2e-6), 4, 1e-12, 'charging time ∝ R²');
});
group('ink jet: hand calculation for the defaults (60 µm, 0.15 pC, 20 m/s, 3000 V)', () => {
  const d = 60e-6, q = 0.15e-12, v = 20, V = 3000, r = c.inkjet(d, q, v, V);
  const m = 1000 * Math.PI * d ** 3 / 6; near(r.m, m, 1e-12); near(r.m, 1.1310e-10, 1e-4, 'mass 113 ng');
  const E = 3000 / 0.002, a = q * E / m, t1 = 0.01 / 20, t2 = 0.015 / 20;
  near(r.yExit, 0.5 * a * t1 * t1 - 0.5 * 9.81 * t1 * t1, 1e-12, 'exit height');
  near(r.yPaper, 0.5 * a * t1 * t1 + a * t1 * t2 - 0.5 * 9.81 * (t1 + t2) ** 2, 1e-12, 'paper height');
  near(r.yElec, 0.9947e-3, 1e-3, 'electric deflection about 0.99 mm'); near(r.yGrav, -7.664e-6, 1e-3, 'gravity 7.7 µm');
  assert(!r.hitsPlate && !r.inGutter);
});
group('ink jet: deflection ∝ qV/(m v²); the inverse gives back the charge', () => {
  const base = c.inkjet(60e-6, 0.1e-12, 20, 3000).yElec;
  near(c.inkjet(60e-6, 0.2e-12, 20, 3000).yElec, 2 * base, 1e-12); near(c.inkjet(60e-6, 0.1e-12, 20, 1500).yElec, base / 2, 1e-12);
  near(c.inkjet(60e-6, 0.1e-12, 40, 3000).yElec, base / 4, 1e-12); near(c.inkjet(120e-6, 0.1e-12, 20, 3000).yElec, base / 8, 1e-12);
  for (const y of [0.0004, 0.001, 0.0016]) near(c.inkjet(60e-6, c.chargeFor(y, 60e-6, 20, 3000), 20, 3000).yPaper, y, 1e-9, `inverse at ${y}`);
});
group('ink jet: uncharged drops go into the gutter, large charges hit the plate', () => {
  assert(c.inkjet(60e-6, 0, 20, 3000).inGutter, 'q = 0 is caught');
  const r = c.inkjet(60e-6, 0.5e-12, 10, 4000); assert(r.hitsPlate, 'strong deflection hits the plate');
  for (let k = 0; k < 7; k++) { const y = 0.0004 + 0.0002 * k, rr = c.inkjet(60e-6, c.chargeFor(y, 60e-6, 20, 3000), 20, 3000); assert(!rr.hitsPlate && !rr.inGutter, `print level ${k} reaches the paper`); }
  near(c.rayleighLimit(60e-6), 3.30e-12, 5e-3, 'Rayleigh limit of a 60 µm water drop about 3.3 pC'); assert(c.rayleighLimit(20e-6) > 0.5e-12, 'slider stays below the Rayleigh limit even for 20 µm');
});
group('precipitator: Cunningham, saturation charge, drift speed, Deutsch', () => {
  near(c.cunningham(1e-6), 1 + 0.132 * (1.257 + 0.4 * Math.exp(-1.1 / 0.132)), 1e-12); near(c.cunningham(1e-6), 1.166, 1e-3, 'Cc(1 µm) ≈ 1.17');
  near(c.cunningham(30e-6), 1.0056, 1e-3, 'Cc → 1 for large particles');
  near(c.chargeFactor(Infinity), 3, 0); near(c.chargeFactor(4), 2, 1e-12);
  const dp = 1e-6, E = 3e5, q = c.satCharge(dp, E); near(q, 12 * Math.PI * c.EPS0 * (dp / 2) ** 2 * E, 1e-12, 'q = 12πε₀a²E');
  near(q / 1.602176634e-19, 156.3, 2e-3, 'about 156 electrons');
  near(c.driftSpeed(dp, E), q * E * c.cunningham(dp) / (6 * Math.PI * 1.81e-5 * dp / 2), 1e-12, 'Stokes 6πηa');
  near(c.driftSpeed(dp, E), 0.0513, 3e-3, 'w ≈ 5.1 cm/s');
  const eta = c.deutsch(c.driftSpeed(dp, E), 5, 1, 0.125); near(eta, 1 - Math.exp(-0.0513 * 40), 3e-3, 'η ≈ 87%');
  assert(c.deutsch(c.driftSpeed(10e-6, E), 5, 1, 0.125) > 0.9999, 'large particles: over 99.99%');
  assert(c.deutsch(0, 5, 1, 0.125) === 0); near(1 - c.deutsch(0.1, 10, 1, 0.125), (1 - c.deutsch(0.1, 5, 1, 0.125)) ** 2, 1e-12, 'doubling L squares the penetration');
});
console.log(`${n} electrostatics at work test groups passed`);
