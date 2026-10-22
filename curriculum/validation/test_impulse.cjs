'use strict';
// Impulse: the bumper force law, the cart's motion, impulse = momentum change, sampling.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('impulse', 'GAP,BUMPERS,IM_VERSION,contact,force,cartState,samples,trapezoid,runCSV,readingsCSV');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1e-12, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
group('∫F dt (exact, fine Simpson) = m(1 + e)v₀ for every bumper', () => {
  for (const b of Object.values(c.BUMPERS)) for (const [m, v] of [[0.5, 0.6], [1.5, 1.2], [0.25, 0.1]]) {
    const k = c.contact(m, v, b), N = 20000, h = k.tc / N; let s = c.force(k, 0) + c.force(k, k.tc);
    for (let i = 1; i < N; i++) s += (i % 2 ? 4 : 2) * c.force(k, i * h);
    near(s * h / 3, m * (1 + b.e) * v, 1e-6, b.name);
  }
});
group('cart: speed v₀ before, −e v₀ after, force = m × deceleration during contact, position continuous', () => {
  const b = c.BUMPERS.stiff, m = 0.5, v = 0.6, k = c.contact(m, v, b), tH = c.GAP / v;
  near(c.cartState(m, v, b, tH + k.tc + 0.1).v, -0.9 * v, 1e-12);
  for (const u of [0.3, 0.7, 0.9].map((q) => q * k.tc)) { const e = 1e-7, a = (c.cartState(m, v, b, tH + u + e).v - c.cartState(m, v, b, tH + u - e).v) / (2 * e); near(-m * a, c.force(k, u), 1e-5, `u=${u}`); }
  for (const t of [tH, tH + k.t1, tH + k.tc]) assert(Math.abs(c.cartState(m, v, b, t - 1e-12).x - c.cartState(m, v, b, t + 1e-12).x) < 1e-9, 'x continuous');
  near(k.tc, Math.PI / 2 * Math.sqrt(m / b.k) * (1 + b.e), 1e-12, 'contact time');
});
group('trapezoid of sampled readings approaches the impulse as the sample rate rises', () => {
  const b = c.BUMPERS.stiff, m = 0.5, v = 0.6, J = m * 1.9 * v;
  const e = (r) => Math.abs(c.trapezoid(c.samples(m, v, b, r)) - J) / J; assert(e(10000) < 2e-3); assert(e(1000) < 2e-2); assert(e(10000) <= e(200) + 1e-12);
  const soft = c.BUMPERS.soft; assert(Math.abs(c.trapezoid(c.samples(m, v, soft, 1000)) - J) / J < 3e-3);
});
group('soft vs stiff: same impulse, peak force lower by √(k_s/k_h), contact longer', () => {
  const a = c.contact(0.5, 0.6, c.BUMPERS.stiff), s = c.contact(0.5, 0.6, c.BUMPERS.soft); near(a.J, s.J, 1e-12); near(s.Fmax / a.Fmax, Math.sqrt(400 / 4000), 1e-12); near(s.tc / a.tc, Math.sqrt(10), 1e-12);
  const L = c.runCSV([[0.5, 1.234]], { version: c.IM_VERSION, bumper: 'Stiff spring', m: '0.50', v1: '0.600', v2: '-0.540', rate: 1000 }).trim().split('\n'); assert.equal(L[L.length - 1], '0.50000,1.23'); assert(L.includes('t_s,F_N'));
});
console.log(`${n} impulse test groups passed`);
