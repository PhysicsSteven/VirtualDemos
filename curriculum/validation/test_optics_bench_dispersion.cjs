'use strict';
// Optics Bench: dispersion of real materials by Sellmeier formulas (OpenStax Vol 3 §1.5).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('optics-bench', 'GLASSES,sellmeier,minDeviation');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('catalog indices at the d (587.6 nm), F (486.1 nm) and C (656.3 nm) lines', () => {
  /* Schott: N-BK7 n_d 1.5168, n_F 1.5224, n_C 1.5143; F2 n_d 1.6200; fused silica n_d 1.4585 */
  near(c.sellmeier(c.GLASSES.bk7, 587.56), 1.5168, 2e-4, 'BK7 d'); near(c.sellmeier(c.GLASSES.bk7, 486.13), 1.5224, 2e-4, 'BK7 F'); near(c.sellmeier(c.GLASSES.bk7, 656.27), 1.5143, 2e-4, 'BK7 C');
  near(c.sellmeier(c.GLASSES.f2, 587.56), 1.6200, 2e-4, 'F2 d'); near(c.sellmeier(c.GLASSES.silica, 587.56), 1.4585, 2e-4, 'silica d');
  /* OpenStax Table 1.1 at 589 nm: water 1.333, diamond 2.419 */
  near(c.sellmeier(c.GLASSES.water, 589.3), 1.333, 1e-3, 'water'); near(c.sellmeier(c.GLASSES.diamond, 589.3), 2.419, 2e-3, 'diamond');
});
group('normal dispersion: n falls from violet to red for every material, more in flint than crown', () => {
  for (const k in c.GLASSES) { let prev = Infinity; for (let l = 400; l <= 700; l += 10) { const v = c.sellmeier(c.GLASSES[k], l); assert(v < prev, k); prev = v; } }
  const dn = (k) => c.sellmeier(c.GLASSES[k], 400) - c.sellmeier(c.GLASSES[k], 700); assert(dn('f2') > dn('bk7')); assert(dn('diamond') > dn('f2'));
});
group('minimum deviation of a 60° prism: n sin(A/2) = sin((A + δ)/2)', () => {
  const A = Math.PI / 3, d = c.minDeviation(1.5, A); near(Math.sin((A + d) / 2), 1.5 * 0.5, 1e-12); near(d * 180 / Math.PI, 37.18, 0.01);
  const spread = c.minDeviation(c.sellmeier(c.GLASSES.bk7, 400), A) - c.minDeviation(c.sellmeier(c.GLASSES.bk7, 700), A); assert(spread > 0); const n4 = c.sellmeier(c.GLASSES.bk7, 400), n7 = c.sellmeier(c.GLASSES.bk7, 700); near(spread, 2 * Math.asin(n4 / 2) - 2 * Math.asin(n7 / 2), 1e-12); near(spread * 180 / Math.PI, 1.57, 0.01);
});
console.log(`${n} groups passed`);
