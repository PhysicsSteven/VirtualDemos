'use strict';
// Spectra Explorer: Bohr orbits with the de Broglie wave fitted around them (OpenStax Vol. 3 §6.4 and §6.6).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const C = core('spectra', 'HS_H,HS_ME,HS_EV,BOHR_A0,BOHR_ALPHA,BOHR_C,BOHR_HBAR,bohrOrbit');
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
let n = 0; function group(name, f) { f(); n++; console.log('PASS', name); }

group('a₀ = ħ/(m_e c α) from CODATA 2022 matches the stored 0.0529177210544 nm', () => {
  near(C.BOHR_HBAR / (C.HS_ME * C.BOHR_C * C.BOHR_ALPHA) * 1e9, C.BOHR_A0, 1e-9);
});
group('orbit n: r = n²a₀, v = αc/n (2187.69 km/s for n = 1), λ = 2πa₀ n, n wavelengths around, L = nħ', () => {
  near(C.bohrOrbit(1).v, 2187691.26, 1e-8);
  for (const k of [1, 2, 3, 6]) { const o = C.bohrOrbit(k); near(o.r, k * k * 0.0529177210544, 1e-12, 'r'); near(o.lam, 2 * Math.PI * C.BOHR_A0 * k, 1e-9, 'λ');
    near(o.waves, k, 1e-9, 'waves'); near(o.L, k, 1e-9, 'L'); }
  near(C.bohrOrbit(3).lam, 0.99744, 1e-4, 'λ for n = 3');
});
group('between orbits: ν = 2.5 holds 2.5 wavelengths (does not close), and the Coulomb speed still satisfies m v²/r = ke²/r²', () => {
  const o = C.bohrOrbit(2.5); near(o.waves, 2.5, 1e-9); near(o.L, 2.5, 1e-9);
  const ke2 = 8.9875517862e9 * 1.602176634e-19 ** 2; near(C.HS_ME * o.v * o.v / (o.r * 1e-9), ke2 / (o.r * 1e-9) ** 2, 1e-8, 'force balance');
});
console.log(`${n} groups passed`);
