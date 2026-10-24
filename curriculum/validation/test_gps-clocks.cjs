'use strict';
// GPS Clocks: gravitational and speed time dilation against the standard GPS numbers.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('gps-clocks', 'C,GM,RE,WE,rateM1,xGrav,xSpeed,orbitSpeed,clocks,crossover,schwarzschild');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
group('rate formula without cancellation matches √(1 − x) − 1', () => { for (const x of [1e-3, 1e-6]) near(c.rateM1(x), Math.sqrt(1 - x) - 1, 1e-9); near(c.rateM1(1e-12), -5e-13, 1e-9); });
group('GPS: gravity +45.7, speed −7.1 (against a turning ground clock), net +38.6 μs/day', () => {
  const k = c.clocks(2.656e7, 'orbit', true);
  near(k.grav * 86400e6, 45.72, 1e-3); near(k.speed * 86400e6, -7.11, 3e-3); near(k.perDay * 1e6, 38.61, 1e-3);
  // first order check: ΔΦ/c² − v²/(2c²)
  const fo = c.GM / (c.C ** 2) * (1 / c.RE - 1 / 2.656e7) - (c.GM / 2.656e7 - (c.WE * c.RE) ** 2) / (2 * c.C ** 2); near(k.total, fo, 1e-6);
});
group('space station clock loses (speed wins); the effects cancel at r = 3R/2 for a ground clock at rest', () => {
  assert(c.clocks(c.RE + 4e5, 'orbit', true).total < 0); near(c.crossover(false), 1.5 * c.RE, 1e-6);
});
group('Pound and Rebka: 22.5 m gives gh/c² = 2.46 × 10⁻¹⁵', () => { near(c.clocks(c.RE + 22.5, 'tower', false).total, 9.8202 * 22.5 / c.C ** 2, 1e-3); });
group('Schwarzschild radii: Earth 8.87 mm, Sun 2.95 km', () => { near(c.schwarzschild(c.GM), 8.870e-3, 1e-3); near(c.schwarzschild(1.32712440018e20), 2953.25, 1e-4); });
group('worksheet claims: against 1/r the speed part has half the gravity part\'s slope; speed part against v² has slope −day/(2c²)', () => {
  const at = (r) => c.clocks(r, 'orbit', true), u1 = 1 / 8e6, u2 = 1 / 4e7;
  const sg = (at(1 / u1).grav - at(1 / u2).grav) / (u1 - u2), ss = (at(1 / u1).speed - at(1 / u2).speed) / (u1 - u2);
  near(sg, -c.GM / c.C ** 2, 1e-8); near(ss / sg, 0.5, 1e-8);
  const v1 = at(1 / u1).v2, v2 = at(1 / u2).v2; near((at(1 / u1).speed - at(1 / u2).speed) / (v1 * v1 - v2 * v2), -1 / (2 * c.C ** 2), 1e-8);
  near((10.23 - 10.22999999543) / 10.23, at(2.656e7).total, 3e-3);
});
console.log(`${n} GPS clock test groups passed`);
