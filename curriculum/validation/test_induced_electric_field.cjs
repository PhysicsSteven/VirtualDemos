'use strict';
// Induced Electric Fields: the field around a long solenoid with a changing current, and Faraday's law ∮E·dl = −dΦ/dt (OpenStax Vol 2 §13.4).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('induced-electric-field', 'MU0,current,Ephi,Evec,overlap,circulation,fluxThrough');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const R = 0.02, nT = 2000, w = { kind: 'decay', I0: 2, a: 200 };

group('Example 13.8: E = αμ0nI0R²e^(−αt)/(2r) outside and αμ0nI0 r e^(−αt)/2 inside', () => {
  for (const t of [0, 3e-3, 1e-2]) { const dB = c.MU0 * nT * c.current(w, t).dI, e = Math.exp(-200 * t);
    near(c.Ephi(0.06, R, dB), 200 * c.MU0 * nT * 2 * R * R * e / (2 * 0.06), 1e-12, 'outside'); near(c.Ephi(0.01, R, dB), 200 * c.MU0 * nT * 2 * 0.01 * e / 2, 1e-12, 'inside'); }
  near(c.Ephi(0.06, R, c.MU0 * nT * c.current(w, 0).dI), 3.35e-3, 0.001, 'R = 2.0 cm, n = 2000/m, I0 = 2.0 A, α = 200/s, r = 6.0 cm');
  /* continuous at r = R, largest there; positive (counterclockwise) when B out of the page is falling */
  const dB = -1; near(c.Ephi(R * (1 - 1e-9), R, dB), c.Ephi(R * (1 + 1e-9), R, dB), 1e-6); assert(c.Ephi(R, R, dB) > 0); assert(c.Ephi(R, R, dB) >= c.Ephi(1.5 * R, R, dB) && c.Ephi(R, R, dB) >= c.Ephi(0.5 * R, R, dB));
});
group('current waveforms and their derivatives', () => {
  for (const kind of ['decay', 'ramp', 'ac', 'steady']) { const ww = { kind, I0: 2, a: 300 };
    for (const t of [0.0011, 0.0023, 0.0040, 0.0071]) { const h = 1e-8, num = (c.current(ww, t + h).I - c.current(ww, t - h).I) / (2 * h); near(c.current(ww, t).dI || 1e-30, num || 1e-30, 1e-5, kind); } }
  assert.equal(c.current({ kind: 'steady', I0: 2, a: 300 }, 0.01).dI, 0); assert.equal(c.current({ kind: 'ramp', I0: 2, a: 300 }, 1).I, 2);
});
group('overlap of two circles: limits and a numerical check', () => {
  near(c.overlap(0.02, 0.06, 0), Math.PI * 0.02 ** 2, 1e-12); near(c.overlap(0.02, 0.01, 0.005), Math.PI * 0.01 ** 2, 1e-12); assert.equal(c.overlap(0.02, 0.02, 0.06), 0);
  /* Monte Carlo free grid count for a partial overlap */
  const a = 0.02, d = 0.025; let inBoth = 0, N = 2000; for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) { const x = d - a + 2 * a * (i + 0.5) / N, y = -a + 2 * a * (j + 0.5) / N; if ((x - d) ** 2 + y * y <= a * a && x * x + y * y <= R * R) inBoth++; }
  near(c.overlap(R, a, d), inBoth * (2 * a / N) ** 2, 2e-3);
});
group('Faraday: ∮E·dl added up around any circle equals −dΦ/dt', () => {
  const dB = c.MU0 * nT * c.current(w, 0).dI;
  for (const [a, cx, cy] of [[0.06, 0, 0], [0.01, 0, 0], [0.02, 0.025, 0], [0.03, 0.01, 0.012], [0.015, -0.01, 0.02]]) near(c.circulation(cx, cy, a, R, dB), -c.fluxThrough(dB, R, a, Math.hypot(cx, cy)), 1e-5, `a ${a} at (${cx}, ${cy})`);
});
group('nonconservative inside, conservative where no flux is enclosed', () => {
  const dB = -0.5; assert(Math.abs(c.circulation(0.06, 0, 0.02, R, dB)) < 1e-15, 'path off to the side');
  /* the field is not zero on that path */
  const [ex, ey] = c.Evec(0.04, 0, R, dB); assert(Math.hypot(ex, ey) > 0);
  /* a path around the solenoid: the same ∮E·dl for every radius outside */
  near(c.circulation(0, 0, 0.03, R, dB), c.circulation(0, 0, 0.09, R, dB), 1e-9);
});
console.log(`${n} groups passed`);
