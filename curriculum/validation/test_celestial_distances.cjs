'use strict';
// The Sky and the Celestial Sphere, Real distances view: light years per parsec from the IAU definitions, absolute magnitude and
// its inverse, visible light against the Sun's, the figure star lists, and the distances file against known Hipparcos values.
const assert = require('node:assert/strict');
const path = require('node:path');
const { core } = require('./demo_source.cjs');
const C = core('celestial-sphere', 'CS_LY_PER_PC,CS_MV_SUN,csAbsMag,csMagFrom,csLumV,csFigureStars');
globalThis.window = globalThis;
require(path.join(__dirname, '../../demos/lib/sky-bsc.js')); require(path.join(__dirname, '../../demos/lib/sky-dist.js'));
const SKY = globalThis.VD_SKY, PC = globalThis.VD_SKYDIST.pc100;
let n = 0;
const test = (name, fn) => { fn(); n++; console.log('PASS', name); };
const near = (a, b, tol, msg) => assert(Math.abs(a - b) <= tol, `${msg || ''} expected ${b}, got ${a}`);
const byName = (nm) => Object.keys(SKY.names).map(Number).find((i) => SKY.names[i] === nm);
const ly = (nm) => PC[byName(nm)] / 100 * C.CS_LY_PER_PC;

test('1 pc = 648000/π au, 1 au = 149 597 870 700 m, 1 ly = 9 460 730 472 580 800 m', () => {
  near(C.CS_LY_PER_PC, 149597870700 * 648000 / Math.PI / 9460730472580800, 1e-15);
});
test('absolute magnitude: equal to V at 10 pc, 5 magnitudes fainter for each factor of 10; csMagFrom undoes it', () => {
  near(C.csAbsMag(2, 10), 2, 1e-12); near(C.csAbsMag(2, 100), -3, 1e-12); near(C.csAbsMag(2, 1), 7, 1e-12);
  for (const [V, d] of [[0.12, 264.55], [-1.46, 2.64], [5.5, 1000]]) near(C.csMagFrom(C.csAbsMag(V, d), d), V, 1e-12);
  /* the Sun: V = −26.76 at 1 au (Willmer 2018) gives back its absolute magnitude 4.81 */
  near(C.csAbsMag(-26.76, 1 / (648000 / Math.PI)), C.CS_MV_SUN, 0.01);
});
test('visible light against the Sun: 1 at M = 4.81, 100 times for each 5 magnitudes brighter', () => {
  near(C.csLumV(4.81), 1, 1e-12); near(C.csLumV(-0.19), 100, 1e-9); near(C.csLumV(9.81), 0.01, 1e-12);
});
test('figure stars: each star once; the Big Dipper has its seven, Orion eight', () => {
  const u = C.csFigureStars(SKY.figures, 'UMa').map((i) => SKY.names[i]);
  assert.equal(u.slice().sort().join(','), 'Alioth,Alkaid,Dubhe,Megrez,Merak,Mizar,Phecda');
  assert.equal(new Set(C.csFigureStars(SKY.figures, 'Ori')).size, C.csFigureStars(SKY.figures, 'Ori').length);
  assert.equal(C.csFigureStars(SKY.figures, 'Ori').length, 8);
});
test('the distance file: one entry per catalog star, and known Hipparcos (van Leeuwen 2007) distances', () => {
  assert.equal(PC.length, SKY.n);
  assert(PC.filter((v) => v > 0).length > 2700);
  near(ly('Sirius'), 8.6, 0.1); near(ly('Vega'), 25.0, 0.2); near(ly('Polaris'), 433, 5); near(ly('Dubhe'), 123, 2); near(ly('Rigel'), 863, 10);
});
console.log(`${n} tests passed`);
