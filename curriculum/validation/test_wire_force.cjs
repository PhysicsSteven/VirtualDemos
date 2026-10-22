'use strict';
// Force on a Current: F = ILB sin θ, the balance reading, loop torque and energy, the commutated motor.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('wire-force', 'G,WF_VERSION,forceOnWire,balanceReading,LOOP,loopJ,moment,torque,energy,loopStep,fitLine,readingsCSV');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1e-12, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
group('F = ILB sin θ; zero along B; the balance reads F_z/g with the right sign', () => {
  near(c.forceOnWire(2, 0.04, 0.2, 90), 0.016, 1e-12); near(c.forceOnWire(2, 0.04, 0.2, 30), 0.008, 1e-12); assert.equal(c.forceOnWire(2, 0.04, 0.2, 0), 0);
  near(c.balanceReading(2, 0.04, 0.2, 90), -0.016 / c.G, 1e-12); near(c.balanceReading(-2, 0.04, 0.2, 90), 0.016 / c.G, 1e-12);
});
group('loop: |τ| = NIAB sin θ, τ = −dU/dθ, U = −μB cos θ', () => {
  const N = 20, I = 1, B = 0.2, mu = c.moment(N, I); near(mu, 20 * 0.0016, 1e-12);
  for (const th of [0.3, 1.2, 2.5]) { near(Math.abs(c.torque(N, I, B, th)), mu * B * Math.sin(th), 1e-12); const h = 1e-6; near(c.torque(N, I, B, th), -(c.energy(N, I, B, th + h) - c.energy(N, I, B, th - h)) / (2 * h), 1e-6); }
  near(c.loopJ(), 0.02 * 0.04 ** 2 / 6, 1e-12);
});
group('released loop settles with μ along B; small swings at ω0 = √(μB/J)', () => {
  const p = { N: 20, I: 1, B: 0.2, comm: false }; let st = { th: 0.05, w: 0 }, t = 0, last = 0.05, cross = [];
  while (t < 0.5) { const nx = c.loopStep(st, p, 1e-4); if (st.th > 0 && nx.th <= 0) cross.push(t); st = nx; t += 1e-4; }
  const T = cross[1] - cross[0], w0 = Math.sqrt(c.moment(20, 1) * 0.2 / c.loopJ()); near(T, 2 * Math.PI / w0, 0.02);
  let s2 = { th: 2.2, w: 0 }; for (let i = 0; i < 40000; i++) s2 = c.loopStep(s2, p, 1e-4); assert(Math.abs(Math.sin(s2.th)) < 0.02 && Math.cos(s2.th) > 0.99);
});
group('commutator: the loop keeps turning one way; terminal speed where average torque 2μB/π = friction', () => {
  const p = { N: 20, I: 1, B: 0.2, comm: true }; let st = { th: 2.2, w: 0 };
  for (let i = 0; i < 30000; i++) st = c.loopStep(st, p, 1e-4);
  const wT = 2 * c.moment(20, 1) * 0.2 / Math.PI / c.LOOP.damp; near(Math.abs(st.w), wT, 0.03); assert(st.w > 0);
});
group('fit of F against I gives B; CSV', () => {
  const xs = [-3, -1, 1, 2, 3], ys = xs.map((I) => +(c.balanceReading(I, 0.04, 0.27, 90) * 1000).toFixed(2) * c.G / 1000);
  near(Math.abs(c.fitLine(xs, ys).b) / 0.04, 0.27, 2e-3);
  const L = c.readingsCSV([{ I: '2.0', L: '4.0', th: '90', dm: '-1.63' }], { version: c.WF_VERSION, magnet: 'B 0.2 T' }).trim().split('\n');
  const h = L.indexOf('row,I_A,L_cm,theta_deg,dm_g,F_N'); assert.equal(L[h + 1], '1,2.0,4.0,90,-1.63,-0.0159903');
});
console.log(`${n} wire-force test groups passed`);
