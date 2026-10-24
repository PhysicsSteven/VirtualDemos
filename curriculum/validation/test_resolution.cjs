'use strict';
// Circular Apertures and Resolution: J1 and the Airy pattern, the 1.22 factor, Rayleigh's criterion, the textbook's numbers (OpenStax Vol. 3 §4.5).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('resolution', 'besselJ1,J1_ZEROS,RING_FACTOR,airy,airyX,airyAt,firstDark,rayleigh,pair,dip,screenAngle,LY,HUBBLE_D,ANDROMEDA_LY,PUPIL_D,HEADLIGHTS,LAMBDA_AVG,CAMERA_F,F_STOPS,headlightAngle,headlightRange');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
/* bisection for a zero of J1 between a and b */
function zero(a, b) { let fa = c.besselJ1(a); for (let i = 0; i < 200; i++) { const m = (a + b) / 2, fm = c.besselJ1(m); if (fa * fm <= 0) b = m; else { a = m; fa = fm; } } return (a + b) / 2; }

group('J1 against tabulated values (Abramowitz and Stegun Table 9.1): J1(1) = 0.4400505857, J1(2) = 0.5767248078, J1(5) = −0.3275791376, J1(10) = 0.0434727462', () => {
  near(c.besselJ1(1), 0.4400505857449335, 1e-12, 'J1(1)'); near(c.besselJ1(2), 0.5767248077568734, 1e-12, 'J1(2)');
  near(c.besselJ1(5), -0.3275791375914652, 1e-12, 'J1(5)'); near(c.besselJ1(10), 0.04347274616886144, 1e-12, 'J1(10)');
  near(c.besselJ1(50), -0.09751182812517113, 1e-11, 'J1(50)'); near(c.besselJ1(-2), -c.besselJ1(2), 1e-15, 'odd');
  near(c.besselJ1(1e-3), 1e-3 / 2 - 1e-9 / 16, 1e-14, 'small x: x/2 − x³/16');
});
group('J1 zeros: bisection finds 3.8317, 7.0156, 10.1735 (tabulated j1,1 j1,2 j1,3)', () => {
  near(zero(3, 4.5), 3.831705970207512, 1e-11, 'first'); near(zero(6.5, 7.5), 7.015586669815619, 1e-11, 'second'); near(zero(9.8, 10.6), 10.17346813506272, 1e-11, 'third');
  near(c.J1_ZEROS[0], 3.831705970207512, 1e-15); near(c.J1_ZEROS[1], 7.015586669815619, 1e-15); near(c.J1_ZEROS[2], 10.173468135062722, 1e-15);
  for (const z of c.J1_ZEROS) assert(Math.abs(c.besselJ1(z)) < 1e-12, `J1(${z}) = ${c.besselJ1(z)}`);
});
group('the 1.22 factor: the first dark ring is at sin θ = (3.8317/π) λ/D = 1.2197 λ/D', () => {
  near(c.RING_FACTOR, 1.2196698912665045, 1e-12); assert.strictEqual(+c.RING_FACTOR.toFixed(2), 1.22);
  near(Math.sin(c.firstDark(1e-3, 550e-9)), 1.21967 * 550e-9 / 1e-3, 1e-5, 'sin θ1');
  near(c.airyAt(200e-6, 632.8e-9, c.firstDark(200e-6, 632.8e-9)), 0, 1e-12, 'dark at the first ring');
  near(c.rayleigh(2.4, 550e-9), 1.22 * 550e-9 / 2.4, 1e-15);
});
group('Airy pattern: I(0) = 1, first bright ring 1.75% at x = 5.1356, second 0.42% at x = 8.4172; 83.8% of the power inside the first dark ring', () => {
  near(c.airy(0), 1, 1e-15); near(c.airy(1e-6), 1, 1e-12);
  let best = 0, bx = 0; for (let x = 4; x < 7; x += 1e-4) { const v = c.airy(x); if (v > best) { best = v; bx = x; } }
  near(bx, 5.1356, 2e-4, 'first ring x'); near(best, 0.01750, 2e-3, 'first ring height');
  best = 0; for (let x = 7.5; x < 10; x += 1e-4) { const v = c.airy(x); if (v > best) { best = v; bx = x; } }
  near(bx, 8.4172, 2e-4, 'second ring x'); near(best, 0.00416, 3e-3, 'second ring height');
  /* encircled power ∫ I x dx: fraction inside the first zero is 1 − J0²(z) − J1²(z) = 1 − J0(3.8317)² = 0.8378 */
  const integ = (a, b) => { const N = 20000, h = (b - a) / N; let s = 0; for (let i = 0; i <= N; i++) { const x = a + i * h, w = i === 0 || i === N ? 0.5 : 1; s += w * c.airy(x) * x; } return s * h; };
  near(integ(0, c.J1_ZEROS[0]) / 2, 0.8378, 2e-4, 'encircled'); /* the whole pattern integrates to 2: ∫ 4J1²(x)/x dx = 2 */
});
group('Rayleigh criterion: at Δθ = θ1 the peak of one pattern sits on the zero of the other and the midpoint dips to 73.5%', () => {
  const D = 5e-3, lam = 550e-9, s = c.firstDark(D, lam);
  near(c.pair(D, lam, s, s / 2), 1, 1e-12, 'peak value = 1 + 0');
  near(c.dip(D, lam, s), 0.7346, 2e-3, 'dip'); assert(c.dip(D, lam, 0.7 * s) > 0.99, 'merged well below the limit');
  near(c.pair(D, lam, 0, 0), 2, 1e-15, 'on top of each other');
});
group('textbook numbers: Hubble 2.40 m at 550 nm resolves 2.80e-7 rad, 0.56 ly at 2.0 million ly; a 3.00 mm pupil 2.24e-4 rad, headlights 1.30 m apart to 5.81 km', () => {
  const th = c.rayleigh(c.HUBBLE_D, c.LAMBDA_AVG); near(th, 2.80e-7, 2e-3, 'Hubble angle'); near(th * c.ANDROMEDA_LY, 0.559, 2e-3, 'ly');
  near(th * c.ANDROMEDA_LY * c.LY, 5.3e15, 1e-2, 'metres');
  const te = c.rayleigh(c.PUPIL_D, c.LAMBDA_AVG); near(te, 2.24e-4, 2e-3, 'eye angle'); near(c.headlightRange(te), 5.81e3, 2e-3, 'km');
  near(c.headlightAngle(c.headlightRange(te)), te, 1e-12, 'inverse');
});
group('camera: D = f/N; the Airy disk diameter on the sensor is 2.44 λN (21.5 µm at f/16, 550 nm)', () => {
  const N = 16, D = c.CAMERA_F / N, r = c.CAMERA_F * Math.tan(c.firstDark(D, 550e-9));
  near(2 * r, 2 * 1.21967 * 550e-9 * 16, 1e-5, 'diameter'); near(2 * r * 1e6, 21.47, 1e-3, 'µm');
  assert.strictEqual(JSON.stringify(c.F_STOPS), "[1.4,2,2.8,4,5.6,8,11,16,22]");
});
group('screen: angle from position, ring radius L tan θ1 (He-Ne 632.8 nm, 200 µm, 2.00 m: 7.72 mm)', () => {
  near(c.screenAngle(0.01, 2), Math.atan(0.005), 1e-15); near(2 * Math.tan(c.firstDark(200e-6, 632.8e-9)) * 1e3, 7.718, 1e-3, 'r1');
});
console.log(`${n} groups passed`);
