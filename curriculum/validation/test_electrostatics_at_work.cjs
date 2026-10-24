'use strict';
// Electrostatics at Work: Van de Graaff dome, ink jet deflection, precipitator drift and Deutsch efficiency.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('electrostatics-at-work', 'EPS0,KC,G,E_BREAK,sphereC,sphereV,sphereField,vMax,qMax,timeToSpark,WAND_A,vdgWand,lineField,normalField,INK,dropMass,inkjet,chargeFor,rayleighLimit,AIR,cunningham,chargeFactor,satCharge,driftSpeed,deutsch');
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
/* the grounded wand: a dome of radius R (isolated, charge Q) and the wand's ball of radius a (grounded), centres D apart */
const pot = (ch, s, rho) => ch.reduce((v, [q, si]) => v + c.KC * q / Math.hypot(s - si, rho), 0);
const CASES = [[0.05, 0.0005], [0.05, 0.1], [0.15, 0.0005], [0.15, 0.01], [0.15, 0.35], [0.30, 0.05], [0.50, 0.0005], [0.50, 0.6]];   /* [R, gap] */
group('wand: the dome is an equipotential at V = Q/C and the ball stays at 0 V (every image solution, 0.5 mm to 60 cm gaps)', () => {
  for (const [R, gap] of CASES) { const a = c.WAND_A, D = R + a + gap, w = c.vdgWand(R, D);
    for (let i = 0; i <= 24; i++) { const th = i / 24 * Math.PI;
      near(pot(w.ch, R * Math.cos(th), R * Math.sin(th)), w.V1, 1e-9, `dome at ${R} m, gap ${gap} m, θ = ${th.toFixed(2)}`);
      const vb = pot(w.ch, D - a * Math.cos(th), a * Math.sin(th)); assert(Math.abs(vb) < 1e-9 * w.V1, `ball at 0 V: ${vb} (R ${R}, gap ${gap})`); } }
});
group('wand: Gauss, the surface charge ε₀E·n adds up to Q on the dome and to the ball\'s charge on the ball', () => {
  for (const [R, gap] of CASES) { const a = c.WAND_A, D = R + a + gap, w = c.vdgWand(R, D), n = 4000;
    let qd = 0, qb = 0; for (let i = 0; i < n; i++) { const th = (i + 0.5) / n * Math.PI, dA = 2 * Math.PI * Math.sin(th) * Math.PI / n;
      qd += c.EPS0 * c.normalField(w.ch, 0, R, th) * R * R * dA; qb += c.EPS0 * c.normalField(w.ch, D, a, th, true) * a * a * dA; }
    near(qd, 1, gap < 0.001 ? 2e-3 : 2e-4, `dome total (R ${R}, gap ${gap})`); near(qb, w.qb1, gap < 0.001 ? 2e-3 : 2e-4, `ball total (R ${R}, gap ${gap})`);
    const sum = w.ch.reduce((t, [q]) => t + q, 0); near(sum - 1, w.qb1, 1e-9, 'image charges inside the ball add up to its charge'); assert(w.qb1 < 0 && w.qb1 > -1, 'the ball takes an opposite, smaller charge'); }
});
group('wand: far away it makes no difference (C → 4πε₀R, breakdown at Q_max, ball charge → −Qa/D)', () => {
  for (const R of [0.05, 0.15, 0.5]) { const D = 1000, w = c.vdgWand(R, D);
    near(w.C, c.sphereC(R), 1e-4, `C at ${R} m`); near(w.qSpark, c.qMax(R), 1e-3, `Q_spark at ${R} m`); near(w.qb1, -c.WAND_A / D, 1e-3, 'ball charge'); assert.strictEqual(w.sparkOn, 'dome'); }
});
group('wand: the largest field is at the facing points, and at Q_spark it is exactly E_b', () => {
  for (const [R, gap] of CASES) { const a = c.WAND_A, D = R + a + gap, w = c.vdgWand(R, D);
    assert(w.thDome < 1e-3 && w.thBall < 1e-3, `peaks face each other (R ${R}, gap ${gap}): ${w.thDome}, ${w.thBall}`);
    near(w.eDome1, Math.abs(c.lineField(w.ch, R, 0)[0]), 1e-9, 'dome peak on the line'); near(w.eBall1, Math.abs(c.lineField(w.ch, D - a, 0)[0]), 1e-9, 'ball peak on the line');
    near(w.qSpark * Math.max(w.eDome1, w.eBall1), c.E_BREAK, 1e-12, 'breakdown at Q_spark');
    for (let i = 1; i <= 60; i++) { const th = i / 60 * Math.PI; assert(Math.abs(c.normalField(w.ch, 0, R, th)) <= w.eDome1 * (1 + 1e-12)); assert(Math.abs(c.normalField(w.ch, D, a, th, true)) <= w.eBall1 * (1 + 1e-12)); } }
});
group('wand: agrees with the two sphere solver of Charging by Induction (to its 1.0001R sampling)', () => {
  const ind = core('induction', 'EPS0,K,solve,sigmaPeak');
  for (const [R, gap] of CASES) { const a = c.WAND_A, D = R + a + gap, w = c.vdgWand(R, D);
    const s = ind.solve({ q0: 0, x0: null, A: { c: 0, r: R }, B: { c: D, r: a }, QA: 1, QB: 0, wire: false, gA: false, gB: true });
    near(s.QB, w.qb1, 1e-6, `ball charge (R ${R}, gap ${gap})`); near(s.VA, w.V1, 1e-6, 'dome voltage');
    near(Math.abs(ind.sigmaPeak(s.charges, { c: D, r: a }).sigma) / ind.EPS0, w.eBall1 / 1.0001 ** 2, 2e-4, 'ball peak field'); }
});
group('wand: closer means an earlier spark, and the default reach (R = 15 cm, ball centre 35 cm from the dome surface, 50 cm between centres, 32 cm gap) breaks down at the ball', () => {
  let prev = Infinity; for (const gap of [0.6, 0.35, 0.2, 0.1, 0.05, 0.02, 0.01, 0.002]) { const w = c.vdgWand(0.15, 0.18 + gap); assert(w.qSpark < prev, `Q_spark falls as the gap closes (${gap})`); prev = w.qSpark; }
  const w = c.vdgWand(0.15, 0.15 + 0.35); assert.strictEqual(w.sparkOn, 'ball'); near(w.qSpark / c.qMax(0.15), 0.5545, 1e-3, 'about 55% of Q_max');
  near(w.qSpark * w.V1, 245.0e3, 1e-3, 'breakdown starts at about 245 kV');
});
console.log(`${n} electrostatics at work test groups passed`);
