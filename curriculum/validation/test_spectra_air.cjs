'use strict';
// Spectra Explorer: the page's wavelength convention (2026-11-01). Every wavelength is in air from 200 nm up, as NIST lists them,
// and in vacuum below; hydrogen's lines from the Rydberg formula are converted with Birch and Downs (1994) as given by Morton (2000).
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const C = core('spectra', 'airFromVac,amLine,AM_RH');
let n = 0;
const test = (name, fn) => { fn(); n++; console.log('PASS', name); };
const near = (a, b, tol, msg) => assert(Math.abs(a - b) <= tol, `${msg || ''} expected ${b}, got ${a}`);

test('R_H = R∞/(1 + m_e/m_p) = 10 967 758.34 m⁻¹ (CODATA 2022)', () => near(C.AM_RH, 10967758.34, 0.01));
test('Balmer lines from the Rydberg formula, vacuum then air: Hα 656.470 → 656.288, Hβ 486.274 → 486.138 nm', () => {
  near(C.amLine(3, 2).nm, 656.4696, 5e-4); near(C.airFromVac(C.amLine(3, 2).nm), 656.2883, 5e-4);
  near(C.amLine(4, 2).nm, 486.2738, 5e-4); near(C.airFromVac(C.amLine(4, 2).nm), 486.1380, 5e-4);
});
test('the Bohr Hα in air is within 0.01 nm of NIST\'s measured 656.279 nm (fine structure left out)', () => near(C.airFromVac(C.amLine(3, 2).nm), 656.279, 0.01));
test('air shortens visible light by about 0.028 % (n − 1 = 2.77e-4 at 550 nm, Morton 2000)', () => near(550 / C.airFromVac(550) - 1, 2.77e-4, 3e-6));
test('below 200 nm the wavelength stays in vacuum: Lyman α 121.568 nm', () => { const l = C.amLine(2, 1).nm; near(l, 121.5684, 5e-4); assert.equal(C.airFromVac(l), l); });
console.log(`${n} tests passed`);
