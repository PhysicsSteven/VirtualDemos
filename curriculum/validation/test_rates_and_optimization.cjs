'use strict';
// Related Rates and Optimization: every scene against its closed form. Related rates: the chain rule (dy/du)(du/dt) equals the
// rate measured from the motion, and the textbook values (the 3-4-5 ladder, the cone at h = 10 cm, the steady shadow). Optimization:
// the best choice is where the exact derivative is zero, the derivative matches a central difference, and the closed forms hold
// (box (a + b − √(a² − ab + b²))/6 and a/6 for a square, fence P/4 and P²/8, can h = 2r, Snell's law for the lifeguard and the light
// ray, 45° and v0²/g on level ground, tan θ = v0/√(v0² + 2gh) from a height).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('rates-and-optimization', 'SC,measured,coneV,coneH,sines,lightP,rangeOf,bestRange,bisect,G,RAD,N_AIR,N_WATER');
const { SC } = c;
let n = 0;
function group(name, f) { f(); n++; console.log('PASS', name); }
const near = (a, b, rel, msg) => assert(Math.abs(a - b) <= rel * Math.max(1, Math.abs(b)), `${msg}: ${a} vs ${b}`);

group('ladder: 3-4-5 values and the chain rule', () => {
  const p = { L: 5, v: 0.5 }, s = SC.ladder;
  near(s.u0(p), 1.4, 1e-15, 'starts at x = 1.4 m'); near(s.y(1.4, p), 4.8, 1e-15, 'y = 4.8 m');
  const t = (3 - s.u0(p)) / p.v; near(t, 3.2, 1e-14, 'x = 3 m at t = 3.2 s');
  near(s.y(3, p), 4, 1e-15, 'y = 4 m'); near(s.dydu(3, p) * p.v, -0.375, 1e-15, 'dy/dt = −0.375 m/s');
  near(s.dzdu(3, p) * p.v * c.RAD, -0.125, 1e-14, 'dθ/dt = −0.125 rad/s');
  near(s.y(s.u0(p) + p.v * s.T(p), p), 0.5, 1e-12, 'the run ends with the top 0.1 L up');
  const yAt = (tt) => s.y(s.u0(p) + p.v * tt, p);
  for (const tt of [0, 0.5, 2, 3.2, 5, 6.9, s.T(p)]) { const x = s.u0(p) + p.v * tt; near(c.measured(yAt, tt, 1e-4), s.dydu(x, p) * p.v, 1e-6, `measured dy/dt at ${tt}`); }
});

group('cone: dh/dt = (dV/dt)/(πr²) and 20/π cm/s at h = 10 cm', () => {
  const p = { Q: 0.5, R: 15, H: 30 }, s = SC.cone;
  near(c.coneV(30, 15, 30), Math.PI * 27000 / 12 / 1000, 1e-14, 'full cone 7.0686 L');
  near(c.coneH(c.coneV(10, 15, 30), 15, 30), 10, 1e-13, 'h(V(h)) = h');
  const V = c.coneV(10, 15, 30); near(s.dydu(V, p) * p.Q, 20 / Math.PI, 1e-13, 'dh/dt at 10 cm');
  near(s.dzdu(V, p) * p.Q, 10 / Math.PI, 1e-13, 'dr/dt = (R/H) dh/dt');
  const yAt = (tt) => s.y(s.u0(p) + p.Q * tt, p);
  for (const tt of [0, 0.2, 3, 8, s.T(p)]) { const v = s.u0(p) + p.Q * tt; near(c.measured(yAt, tt, 1e-4), s.dydu(v, p) * p.Q, 1e-6, `measured dh/dt at ${tt}`); }
  near(s.y(s.u0(p) + p.Q * s.T(p), p), 30, 1e-12, 'the run ends full');
});

group('shadow: a steady 0.6 m/s, tip 2.0 m/s', () => {
  const p = { H: 6, p: 1.8, v: 1.4 }, s = SC.shadow;
  for (const x of [1, 4, 11]) { near(s.dydu(x, p) * p.v, 0.6, 1e-14, 'ds/dt'); near(s.dzdu(x, p) * p.v, 2, 1e-14, 'tip speed'); near(s.z(x, p), x + s.y(x, p), 1e-14, 'ℓ = x + s'); }
});

group('box: best cut, square sheet a/6, derivative zero there', () => {
  const p = { a: 30, b: 20 }, s = SC.box, x = s.best(p);
  near(x, (50 - Math.sqrt(700)) / 6, 1e-15, 'x*'); near(x, 3.9237, 1e-4, 'x* = 3.924 cm'); near(s.q(x, p), 1056.3, 1e-4, 'V* = 1,056 cm³');
  assert(Math.abs(s.dq(x, p)) < 1e-10, 'dV/dx = 0');
  const sq = { a: 24, b: 24 }; near(s.best(sq), 4, 1e-15, 'square 24: x = 4'); near(s.q(4, sq), 2 * 24 ** 3 / 27, 1e-14, '2a³/27');
});

group('fence and can', () => {
  const pf = { P: 120 }; near(SC.fence.best(pf), 30, 0, 'x = P/4'); near(SC.fence.q(30, pf), 1800, 0, 'A = P²/8');
  const pc = { V: 355 }, r = SC.can.best(pc), h = pc.V / (Math.PI * r * r);
  near(r, 3.8372, 1e-4, 'r* = 3.837 cm'); near(h / r, 2, 1e-13, 'h = 2r'); assert(Math.abs(SC.can.dq(r, pc)) < 1e-11, 'dA/dr = 0');
  near(SC.can.q(r, pc), 6 * Math.PI * r * r, 1e-13, 'A* = 6πr²');
});

group('lifeguard: Snell at the best point; straight line when the speeds are equal', () => {
  const p = { a: 20, b: 30, D: 60, v1: 6, v2: 1.5 }, s = SC.guard, x = s.best(p), [s1, s2] = c.sines(x, p);
  near(s1 / p.v1, s2 / p.v2, 1e-12, 'sin θ1/v1 = sin θ2/v2');
  assert(s.q(x, p) < s.q(x - 1e-3, p) && s.q(x, p) < s.q(x + 1e-3, p), 'a minimum');
  const e = { a: 20, b: 30, D: 60, v1: 2, v2: 2 }; near(s.best(e), 60 * 20 / 50, 1e-12, 'equal speeds: x = Da/(a + b)');
  for (const xx of [5, 30, 55]) { const h = 1e-5, num = (s.q(xx + h, p) - s.q(xx - h, p)) / (2 * h); near(s.dq(xx, p), num, 1e-7, `dT/dx at ${xx}`); }
});

group('light: n1 sin θ1 = n2 sin θ2 (Fermat)', () => {
  const p = { n1: c.N_AIR, n2: c.N_WATER }, x = SC.light.best(p), [s1, s2] = c.sines(x, c.lightP(p));
  near(p.n1 * s1, p.n2 * s2, 1e-12, 'Snell'); assert(s1 > s2, 'bends toward the normal in water');
  const h = 1e-6, num = (SC.light.q(1 + h, p) - SC.light.q(1 - h, p)) / (2 * h); near(SC.light.dq(1, p), num, 1e-6, 'dT/dx in ns/m');
});

group('range: 45° and v0²/g on level ground, less than 45° from a height', () => {
  const p = { v0: 20, h: 0 }, s = SC.range;
  near(s.best(p), 45, 1e-13, '45°'); near(s.q(45, p), 400 / c.G, 1e-13, 'R = v0²/g'); near(c.bestRange(p), 400 / c.G, 1e-14, 'closed form');
  near(s.q(30, p), s.q(60, p), 1e-12, '30° and 60° land together'); assert(Math.abs(s.dq(45, p)) < 1e-12, 'dR/dθ = 0');
  const q = { v0: 14, h: 2 }, t = s.best(q);
  near(t, Math.atan(14 / Math.sqrt(196 + 4 * c.G)) / c.RAD, 1e-14, 'tan θ = v0/√(v0² + 2gh)'); near(t, 42.39, 1e-3, 'about 42.4°');
  near(s.q(t, q), c.bestRange(q), 1e-12, 'R(θ*) = (v0/g)√(v0² + 2gh)'); assert(Math.abs(s.dq(t, q)) < 1e-10, 'dR/dθ = 0 there');
  for (const th of [10, 35, 50, 80]) { const h = 1e-5, num = (s.q(th + h, q) - s.q(th - h, q)) / (2 * h); near(s.dq(th, q), num, 1e-7, `dR/dθ at ${th}`); }
  near(s.best({ v0: 14, h: 50 }), Math.atan(14 / Math.sqrt(196 + 100 * c.G)) / c.RAD, 1e-14, 'cliff');
});

console.log(`${n} groups passed`);
