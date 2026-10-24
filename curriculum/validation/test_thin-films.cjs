'use strict';
// Thin Film Interference: the exact single layer (Airy) reflectance, the conditions of OpenStax Vol. 3 §3.4 and the pattern geometry.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('thin-films', 'film,prep,Rfast,quarterR,wedgeT,lensT,lensR,soapT,soapY,cosIn');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const R = (n1, nf, n2, t, lam, th = 0, pol = 'u') => c.film(n1, nf, n2, t, lam, th, pol).R;

group('no film (t = 0) reflects as the bare boundary, ((n1 − n2)/(n1 + n2))²; R + T = 1 with no absorption', () => {
  near(R(1, 1.38, 1.52, 0, 550), ((1 - 1.52) / 2.52) ** 2, 1e-12, 'bare glass');
  for (const t of [0, 50, 123.4, 800]) for (const th of [0, 30, 60]) for (const pol of ['s', 'p', 'u']) {
    const f = c.film(1, 1.47, 1.33, t, 520, th, pol); near(f.R + f.T, 1, 1e-12, `R + T at t ${t}, ${th}°, ${pol}`);
  }
});
group('soap film in air (one flip): dark at 2 n t = m λ (R = 0 exactly), brightest at 2 n t = (m + ½) λ', () => {
  for (const lam of [400, 450, 500, 550, 600, 650, 700]) {
    const nf = 1.33;
    for (const m of [1, 2, 3]) near(R(1, nf, 1, m * lam / (2 * nf), lam), 0, 1e-12, `dark m ${m} at ${lam}`);
    const tq = lam / (4 * nf), Rq = R(1, nf, 1, tq, lam), F = 4 * ((0.33 / 2.33) ** 2) / (1 - (0.33 / 2.33) ** 2) ** 2;
    near(Rq, F / (1 + F), 1e-12, `quarter wave maximum at ${lam}`);
    for (const d of [-0.5, 0.5]) assert(R(1, nf, 1, tq + d, lam) < Rq, `maximum at ${lam}`);
  }
  // the minimum bright thickness is λ/(4n): 550 nm in water needs 103.4 nm
  near(550 / (4 * 1.33), 103.383, 1e-5);
});
group('oblique incidence: extremes move to 2 n t cos θt; at 30° the 335 nm soap film is bright at 550 nm (preset Two reflections)', () => {
  const ct = Math.sqrt(1 - (Math.sin(30 * Math.PI / 180) / 1.33) ** 2), tDark = 550 / (2 * 1.33 * ct);
  near(R(1, 1.33, 1, tDark, 550, 30, 's'), 0, 1e-12, 'dark at oblique incidence');
  const P = 2 * 1.33 * 335 * ct; near(P / 550, 1.5, 0.01, 'extra path 1.5 λ');
});
group('coating (two flips): the quarter wave of MgF₂ on glass gives ((n1 n2 − nf²)/(n1 n2 + nf²))² = 1.26%, at λ/(4 nf) = 99.6 nm for 550 nm', () => {
  const tq = 550 / (4 * 1.38), Rq = R(1, 1.38, 1.52, tq, 550);
  near(Rq, c.quarterR(1, 1.38, 1.52), 1e-12, 'formula'); near(Rq, 0.012588, 1e-3, 'value'); near(tq, 99.64, 1e-3, 'thickness');
  for (const d of [-0.5, 0.5]) assert(R(1, 1.38, 1.52, tq + d, 550) > Rq, 'minimum');
  near(R(1, Math.sqrt(1.52), 1.52, 550 / (4 * Math.sqrt(1.52)), 550), 0, 1e-12, 'ideal coating reflects nothing');
});
group('fast spectrum (Rfast) agrees with the full calculation', () => {
  const lams = [380, 450, 551, 700, 780], P = c.prep(1, 1.47, 1.33, 25, 'u', lams);
  lams.forEach((l, i) => near(c.Rfast(P, i, 437.2), R(1, 1.47, 1.33, 437.2, l, 25, 'u'), 1e-12, `λ ${l}`));
});
group('air wedge: t = x h/L; dark fringes every λ/2 of gap, Δx = λL/(2h) = 1.4725 mm for 589 nm, h = 10 µm, L = 50 mm; the edge is dark', () => {
  const h = 10000, L = 50, lam = 589, dx = lam * L / (2 * h);
  near(dx, 1.4725, 1e-12);
  for (let m = 0; m <= 8; m++) near(R(1.52, 1, 1.52, c.wedgeT(m * dx, L, h), lam), 0, 1e-12, `dark fringe ${m}`);
  near(R(1.52, 1, 1.52, c.wedgeT(0.5 * dx, L, h), lam), R(1.52, 1, 1.52, lam / 4, lam), 1e-12, 'bright between');
});
group("Newton's rings: gap r²/2R (exact R − √(R² − r²)); dark rings at r = √(m λ R) in air", () => {
  const Rl = 1, lam = 589e-9;
  for (const m of [1, 2, 3]) { const r = Math.sqrt(m * lam * Rl), t = c.lensT(r, Rl); near(t, m * 589 / 2, 1e-6, `gap at ring ${m}`); near(c.lensR(t, Rl), r, 1e-9, 'inverse'); }
  near(c.soapY(c.soapT(0.37, 10, 1000, 0.5), 10, 1000, 0.5), 0.37, 1e-12, 'soap profile inverse');
});
console.log(`Completed ${n} thin film groups.`);
