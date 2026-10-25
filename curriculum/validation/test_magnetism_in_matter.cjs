'use strict';
// Magnetism in Matter: B = (1 + χ)B0 in a long solenoid, levitation of diamagnets, Jiles and Atherton model of iron (OpenStax Vol 2 §12.7).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('magnetism-in-matter', 'MU0,MATS,solenoidB0,linearB,permeability,levitationBdB,IRON,ironNew,ironTo,ironB,ironMajorLoop');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('Table 12.2 values and the signs of para and diamagnets', () => {
  near(c.MATS.al.chi, 2.2e-5, 0); near(c.MATS.w.chi, 6.8e-5, 0); near(c.MATS.lox.chi, 3.5e-3, 0);
  near(c.MATS.cu.chi, -9.7e-6, 0); near(c.MATS.water.chi, -9.1e-6, 0); near(c.MATS.bi.chi, -1.7e-5, 0);
  for (const k in c.MATS) { const m = c.MATS[k]; if (m.kind === 'para') assert(m.chi > 0, k); if (m.kind === 'dia') assert(m.chi < 0, k); }
});
group('Example 12.10: B0 = μ0nI = 5.0 × 10⁻⁴ T; a linear core gives B = (1 + χ)B0 and μ = (1 + χ)μ0', () => {
  const B0 = c.solenoidB0(2000, 0.20); near(B0, 1.25663706127e-6 * 400, 1e-12); near(B0, 5.0e-4, 0.01);
  near(c.linearB(2.2e-5, B0) - B0, 2.2e-5 * B0, 1e-6); assert(c.linearB(-1.7e-5, B0) < B0); near(c.permeability(-9.1e-6), (1 - 9.1e-6) * c.MU0, 1e-15);
  /* the book's iron answer: χ = B/B0 − 1 with B = 1.4 T */
  near(1.4 / B0 - 1, 2.8e3, 0.01);
});
group('floating a diamagnet: B dB/dz = μ0ρg/|χ|, about 1350 T²/m for water', () => {
  near(c.levitationBdB(998.2, -9.1e-6), 1.25663706127e-6 * 998.2 * 9.81 / 9.1e-6, 1e-12); near(c.levitationBdB(998.2, -9.1e-6), 1352, 0.002);
  /* force balance: (|χ|/μ0) B dB/dz per volume equals ρg */
  const BdB = c.levitationBdB(9780, -1.7e-5); near(1.7e-5 / c.MU0 * BdB, 9780 * 9.81, 1e-12);
});
group('iron model: first magnetization curve near OpenStax Figure 12.25 and Example 12.10', () => {
  const s = c.ironNew(), at = (B0) => { c.ironTo(s, B0 / c.MU0); return c.ironB(s); };
  near(at(1e-4), 0.60, 0.08, 'B0 = 1.0e-4 T'); near(at(c.solenoidB0(2000, 0.20)), 1.4, 0.02, 'Example 12.10'); near(at(6e-4), 1.5, 0.02, 'B0 = 6.0e-4 T');
  /* B rises with H and |M| never exceeds Ms */
  let prev = -Infinity; const t = c.ironNew(); for (let H = 0; H <= 20000; H += 50) { c.ironTo(t, H); const B = c.ironB(t); assert(B >= prev - 1e-12); prev = B; assert(Math.abs(t.M) <= c.IRON.Ms); }
  near(t.M, c.IRON.Ms, 0.02, 'nearly saturated at 20 000 A/m'); near(c.IRON.Ms * c.MU0, 2.145, 0.001, 'μ0 Ms for iron');
});
group('hysteresis: remanence and coercive field, independent of the step size', () => {
  const a = c.ironMajorLoop(2000), b = c.ironMajorLoop(2000, 0.1);
  near(Math.abs(a.Br), Math.abs(b.Br), 0.002); near(a.Hc, b.Hc, 0.005); near(a.Bmax, b.Bmax, 0.001);
  assert(Math.abs(a.Br) > 1 && Math.abs(a.Br) < a.Bmax, 'iron stays magnetized at zero current'); assert(a.Hc > 100 && a.Hc < 400, 'a reverse field brings B to zero');
  /* the loop is symmetric: going down crosses B = 0 at −Hc, going up at +Hc */
  const s = c.ironNew(); c.ironTo(s, 2000); c.ironTo(s, -2000); const Br1 = s.Br, Hc1 = s.Hc; c.ironTo(s, 2000); near(-s.Br, Br1, 0.005); near(s.Hc, Hc1, 0.005);
});
group('demagnetizing with a shrinking alternating field leaves the iron nearly unmagnetized', () => {
  const s = c.ironNew(); c.ironTo(s, 2000); let amp = 2000;
  while (amp > 1) { c.ironTo(s, -amp); amp *= 0.8; c.ironTo(s, amp); amp *= 0.8; } c.ironTo(s, 0);
  assert(Math.abs(c.ironB(s)) < 0.1 * Math.abs(c.ironMajorLoop(2000).Br), `B left: ${c.ironB(s)}`);
});
console.log(`${n} groups passed`);
