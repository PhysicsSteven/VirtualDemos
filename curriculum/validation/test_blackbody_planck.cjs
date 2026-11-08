'use strict';
// Blackbody Radiation, spectrum view: the Planck law's constants from h, c and k; Wien's peak b = hc/(4.965114 k);
// the area under B(λ) equal to σT⁴/π; the Rayleigh–Jeans and Wien limits; and the visible and ultraviolet shares
// against the exact series for the fraction of σT⁴ below a wavelength (a sum over n of e^{−nx} terms, x = hc/λkT).
// The spectrum code sits outside the core markers, so pick() takes it by name.
const assert = require('node:assert');
const { pick } = require('./demo_source.cjs');
const c = pick('blackbody', 'C1,C2,BW,SIG,KB,CL,planck,logPlanck,rayleighJeans,wien,visibleFraction,uvFraction,curvePeak,curveFlux');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(Math.abs(b), 1e-300), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const H = 6.62607015e-34, K = 1.380649e-23, CC = 299792458;

group('constants from the exact SI h, c and k: C₁ = 2hc², C₂ = hc/k, σ = 2π⁵k⁴/(15c²h³), b = hc/(x k) with 5(1 − e^{−x}) = x', () => {
  near(c.C1, 2 * H * CC * CC, 1e-9); near(c.C2, H * CC / K, 1e-9); near(c.SIG, 2 * Math.PI ** 5 * K ** 4 / (15 * CC * CC * H ** 3), 1e-9);
  let x = 5; for (let i = 0; i < 60; i++) x = 5 * (1 - Math.exp(-x)); near(x, 4.965114231744276, 1e-14);
  near(c.BW, H * CC / (x * K), 1e-9);
});

group('the peak of B(λ) sits at b/T and the area under it is σT⁴/π, from 300 K to 50,000 K', () => {
  for (const T of [300, 3000, 5772, 10000, 50000]) {
    near(c.curvePeak(T), c.wien(T), 1e-6, `peak ${T} K`); near(c.curveFlux(T), c.SIG * T ** 4, 1e-6, `area ${T} K`);
    // B is smaller a little to either side of the peak
    const p = c.wien(T); assert(c.planck(p * 1.01, T) < c.planck(p, T) && c.planck(p * 0.99, T) < c.planck(p, T));
  }
  near(c.wien(5772) * 1e9, 502.04, 1e-4, 'the Sun peaks near 502 nm');
});

group('limits: Rayleigh–Jeans 2ckT/λ⁴ at long wavelengths, Wien C₁λ⁻⁵e^{−x} at short; ln B matches B everywhere', () => {
  near(c.planck(1, 300), c.rayleighJeans(1, 300), 1e-4, '1 m at 300 K'); near(c.planck(1e-3, 5772), c.rayleighJeans(1e-3, 5772), 2e-3, '1 mm');
  near(c.planck(100e-9, 3000), c.C1 / 1e-35 * Math.exp(-c.C2 / (100e-9 * 3000)), 1e-13, 'Wien tail');
  for (const [l, T] of [[500e-9, 5772], [10e-6, 300], [50e-9, 1000]]) near(c.logPlanck(l, T), Math.log(c.planck(l, T)), 1e-12, `${l} ${T}`);
  // deep in the Wien tail ln B still works where B underflows
  assert(Number.isFinite(c.logPlanck(100e-9, 300)) && c.logPlanck(100e-9, 300) < -400);
  // the ultraviolet catastrophe: at the peak of any blackbody RJ is (e^x − 1)/x = 28.7 times Planck, x = 4.965
  near(c.rayleighJeans(c.wien(5772), 5772) / c.planck(c.wien(5772), 5772), Math.expm1(4.965114231744276) / 4.965114231744276, 1e-8);
});

// fraction of σT⁴ emitted at wavelengths below λ: F = (15/π⁴) Σ e^{−nx}(x³/n + 3x²/n² + 6x/n³ + 6/n⁴), x = C₂/(λT)
function below(lam, T) { const x = H * CC / (K * lam * T); let s = 0; for (let k = 1; k < 400; k++) s += Math.exp(-k * x) * (x ** 3 / k + 3 * x * x / k ** 2 + 6 * x / k ** 3 + 6 / k ** 4); return 15 / Math.PI ** 4 * s; }

group('visible (380 to 750 nm) and ultraviolet shares agree with the exact series; the Sun gives about 40% visible', () => {
  for (const T of [2000, 3000, 5772, 10000, 30000]) {
    near(c.visibleFraction(T), below(750e-9, T) - below(380e-9, T), 1e-6, `visible ${T} K`);
    near(c.uvFraction(T), below(380e-9, T), 1e-5, `UV ${T} K`);
  }
  const vis = c.visibleFraction(5772); assert(vis > 0.38 && vis < 0.45, `${vis}`);
  near(below(c.wien(5772), 5772), 0.25, 0.001, 'a quarter of the power comes out below the peak (0.2501)');
});

console.log(`${n} blackbody spectrum test groups passed`);
