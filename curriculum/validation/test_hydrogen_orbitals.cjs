'use strict';
// Hydrogen Orbitals: radial functions against the closed forms in OpenStax Vol 3 §8.1 and Griffiths Table 4.7, normalization,
// ⟨r⟩, the most probable radius, node positions, spherical harmonics, the 1s–2p dipole matrix element, selection rules,
// the Balmer line, and the sampler's statistics.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('hydrogen-orbitals', 'RY,HC,radialR,assocP,ylmNorm,angular,psiAt,makeState,samplePoint,dipole');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(Math.abs(b), 1e-30), `${w || ''}: expected ${b}, got ${a}`);
const close = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('radial functions equal the closed forms (r in a₀)', () => {
  const ref = {
    '1,0': (r) => 2 * Math.exp(-r),
    '2,0': (r) => Math.SQRT1_2 * (1 - r / 2) * Math.exp(-r / 2),
    '2,1': (r) => r * Math.exp(-r / 2) / Math.sqrt(24),
    '3,0': (r) => 2 / (3 * Math.sqrt(3)) * (1 - 2 * r / 3 + 2 * r * r / 27) * Math.exp(-r / 3),
    '3,1': (r) => 8 / (27 * Math.sqrt(6)) * r * (1 - r / 6) * Math.exp(-r / 3),
    '3,2': (r) => 4 / (81 * Math.sqrt(30)) * r * r * Math.exp(-r / 3),
  };
  for (const [k, f] of Object.entries(ref)) { const [nn, l] = k.split(',').map(Number); for (const r of [0.1, 0.7, 2, 5.3, 12]) close(c.radialR(nn, l, r), f(r), 1e-14, `R${nn}${l}(${r})`); }
});

group('normalization ∫r²R² dr = 1; ⟨r⟩ = (3n² − l(l+1))/2; peak at n² when l = n − 1; n − l − 1 radial nodes at the right radii', () => {
  for (let nn = 1; nn <= 5; nn++) for (let l = 0; l < nn; l++) {
    const st = c.makeState(nn, l, 0, false);
    close(st.norm, 1, 2e-6, `norm ${nn}${l}`);
    near(st.rMean, 0.5 * (3 * nn * nn - l * (l + 1)), 2e-5, `⟨r⟩ ${nn}${l}`);
    assert.equal(st.nodes.length, nn - l - 1, `nodes ${nn}${l}`);
    if (l === nn - 1) near(st.rMP, nn * nn, 1e-4, `most probable r ${nn}${l}`);
  }
  close(c.makeState(2, 0, 0).nodes[0], 2, 1e-9, '2s node');
  const n3 = c.makeState(3, 0, 0).nodes; close(n3[0], (9 - 3 * Math.sqrt(3)) / 2, 1e-9); close(n3[1], (9 + 3 * Math.sqrt(3)) / 2, 1e-9);
  close(c.makeState(3, 1, 0).nodes[0], 6, 1e-9, '3p node');
  near(c.makeState(1, 0, 0).rMP, 1, 1e-4, '1s peak at a₀');
});

group('associated Legendre and spherical harmonics: closed forms, ∫|Y|² dΩ = 1 and orthogonality', () => {
  const x = 0.37, s = Math.sqrt(1 - x * x);
  close(c.assocP(1, 1, x), -s, 1e-15); close(c.assocP(2, 0, x), 0.5 * (3 * x * x - 1), 1e-15);
  close(c.assocP(2, 1, x), -3 * x * s, 1e-15); close(c.assocP(2, 2, x), 3 * s * s, 1e-15);
  close(c.assocP(3, 0, x), 0.5 * (5 * x ** 3 - 3 * x), 1e-15);
  const integ = (A, B) => {
    const nu = 300, nf = 120, oa = [0, 0], ob = [0, 0]; let re = 0, im = 0;
    for (let i = 0; i < nu; i++) { const u = -1 + (i + 0.5) * 2 / nu, PA = c.assocP(A.l, A.am, u), PB = c.assocP(B.l, B.am, u);
      for (let j = 0; j < nf; j++) { const ph = (j + 0.5) * 2 * Math.PI / nf; c.angular(A, PA, ph, oa); c.angular(B, PB, ph, ob);
        re += oa[0] * ob[0] + oa[1] * ob[1]; im += oa[0] * ob[1] - oa[1] * ob[0]; } }
    const w = (2 / nu) * (2 * Math.PI / nf); return [re * w, im * w];
  };
  const S = (l, m, real) => ({ l, m, am: Math.abs(m), real, Nlm: c.ylmNorm(l, Math.abs(m)) });
  for (const real of [false, true]) for (const [l, m] of [[0, 0], [1, 1], [1, -1], [2, 0], [2, -2], [3, 1]]) close(integ(S(l, m, real), S(l, m, real))[0], 1, 1e-4, `|Y${l}${m}|² ${real}`);
  for (const [a, b] of [[[1, 0], [2, 0]], [[1, 1], [1, -1]], [[2, 1], [3, 1]], [[2, 2], [2, -2]]]) { const v = integ(S(...a, false), S(...b, false)); close(Math.hypot(v[0], v[1]), 0, 1e-6, `⟨${a}|${b}⟩`); }
  // real p_x points along +x, p_y along +y
  const o = [0, 0]; c.psiAt(Object.assign(c.makeState(2, 1, 1, true)), 1, 0, 0, o); assert(o[0] > 0, 'p_x > 0 on +x');
  c.psiAt(c.makeState(2, 1, -1, true), 0, 1, 0, o); assert(o[0] > 0, 'p_y > 0 on +y');
});

group('dipole ⟨1s|z|2p₀⟩ = 128√2/243 a₀; Δl = ±1 selection rule; Δm = ±1 gives a circular path in the xy plane', () => {
  const s1 = c.makeState(1, 0, 0, false), p0 = c.makeState(2, 1, 0, false);
  const d = c.dipole(s1, p0); near(Math.abs(d.d[2][0]), 128 * Math.SQRT2 / 243, 3e-5, 'z element (the demo integrates the angles on a 240 by 240 midpoint grid, 0.002%)'); close(d.minor, 0, 1e-9);
  close(c.dipole(s1, c.makeState(2, 0, 0, false)).amp, 0, 1e-7, '1s–2s forbidden');
  close(c.dipole(s1, c.makeState(3, 2, 0, false)).amp, 0, 1e-7, '1s–3d forbidden');
  const dp = c.dipole(s1, c.makeState(2, 1, 1, false)); close(dp.minor / dp.amp, 1, 1e-6, 'm = 1: circle');
  close(Math.abs(dp.d[2][0]) + Math.abs(dp.d[2][1]), 0, 1e-9, 'no z part');
  near(dp.amp, 128 / 243, 3e-5, '|d| for m = 1 is 128/243 a₀');
});

group('energies E = −13.598 eV/n² and the Balmer Hα line', () => {
  near(c.makeState(1, 0, 0).E, -c.RY, 0); near(c.makeState(3, 2, 0).E, -c.RY / 9, 1e-15);
  near(c.HC / (c.RY * (1 / 4 - 1 / 9)), 656.47, 1e-4, 'Hα vacuum wavelength nm (NIST 656.46)');
});

group('the sampler draws from |ψ|²: mean r and ⟨cos²θ⟩ match the exact values', () => {
  let seed = 12345; const rnd = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);
  for (const [nn, l, m, cos2] of [[1, 0, 0, 1 / 3], [2, 1, 0, 3 / 5], [3, 2, 0, 11 / 21], [2, 1, 1, 1 / 5]]) {
    const st = c.makeState(nn, l, m, false), p = [0, 0, 0], N = 40000; let sr = 0, sc = 0;
    for (let i = 0; i < N; i++) { c.samplePoint(st, rnd, p); const r = Math.hypot(...p); sr += r; sc += (p[2] / r) ** 2; }
    near(sr / N, st.rMeanExact, 0.02, `⟨r⟩ ${nn}${l}${m}`); close(sc / N, cos2, 0.01, `⟨cos²θ⟩ ${nn}${l}${m}`);
  }
});

console.log(`${n} hydrogen orbitals test groups passed`);
