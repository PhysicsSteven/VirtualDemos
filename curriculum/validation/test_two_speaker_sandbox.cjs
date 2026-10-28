'use strict';
// Two Speaker Sandbox: any number of point sources, each a e^{−i(kr + φ)}/r, summed.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('two-speaker', 'pressure,pressureN,level,soundSpeed,wavelength');
let n = 0;
function group(name, f) { f(); n++; console.log('PASS', name); }
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
group('two speakers at (0, ±d/2) give exactly the two speaker pressure, in phase and wired backwards', () => {
  for (const [x, y, ph] of [[4, 0.3, 0], [2.5, -1.7, Math.PI], [7, 3.9, 0]]) {
    const a = c.pressure(x, y, 686, 1.2, 20, ph, true), b = c.pressureN(x, y, 686, 20, [{ x: 0, y: 0.6, ph: 0 }, { x: 0, y: -0.6, ph }]);
    near(b.re, a.re, 1e-12); near(b.im, a.im, 1e-12); near(b.r1, a.r1, 1e-15); near(b.r2, a.r2, 1e-15);
  }
});
group('three in a row in phase: straight ahead the level is that of one speaker plus 20 log10 3 (far away)', () => {
  const one = c.level(c.pressureN(1000, 0, 686, 20, [{ x: 0, y: 0, ph: 0 }])), three = c.level(c.pressureN(1000, 0, 686, 20, [0.5, 0, -0.5].map((y) => ({ x: 0, y, ph: 0 }))));
  near(three - one, 20 * Math.log10(3), 1e-5);
});
group('two speakers facing each other: quiet spots between them half a wavelength apart', () => {
  const f = 686, lam = c.wavelength(f, 20), spk = [{ x: 0, y: 0, ph: 0 }, { x: 10, y: 0, ph: 0 }], L = (x) => c.level(c.pressureN(x, 0, f, 20, spk));
  const mins = []; for (let x = 4; x <= 6; x += 0.0005) if (L(x) < L(x - 0.0005) && L(x) < L(x + 0.0005)) mins.push(x);
  assert(mins.length >= 6); for (let i = 1; i < mins.length; i++) near(mins[i] - mins[i - 1], lam / 2, 3e-3, 'spacing');
});
group('no speakers: no sound', () => { const p = c.pressureN(3, 1, 500, 20, []); assert.equal(p.re, 0); assert.equal(p.im, 0); });
console.log(`${n} two speaker sandbox test groups passed`);
