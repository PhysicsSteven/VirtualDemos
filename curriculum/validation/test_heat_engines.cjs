'use strict';
// Heat Engines: the five standard ideal gas cycles against their textbook efficiencies (OpenStax Vol 2 ch. 4), with work
// checked by integrating P dV numerically along each leg and heat by integrating T dS, independent of the closed forms in the demo.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('heat-engines', 'R,corners,temp,entropy,legEnergy,summary,build');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(Math.abs(b), 1e-30), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const G = 1.4, nmol = 1;

// Each leg is a straight line in (ln V, ln P). Walk it in M Simpson steps and integrate P dV and T dS.
function integrateLeg(A, B, g, M = 2000) {
  const x0 = Math.log(A.V), y0 = Math.log(A.P), x1 = Math.log(B.V), y1 = Math.log(B.P);
  const at = (s) => { const V = Math.exp(x0 + (x1 - x0) * s), P = Math.exp(y0 + (y1 - y0) * s); return { V, P, T: P * V / (nmol * c.R) }; };
  const cv = c.R / (g - 1); let W = 0, Q = 0;
  for (let i = 0; i <= M; i++) {
    const s = i / M, w = i === 0 || i === M ? 1 : i % 2 ? 4 : 2, p = at(s);
    const dVds = p.V * (x1 - x0);                                     // dV/ds
    const dSds = nmol * cv * ((x1 - x0) + (y1 - y0)) + nmol * c.R * (x1 - x0);   // dS/ds, using d ln T = d ln P + d ln V
    W += w * p.P * dVds; Q += w * p.T * dSds;
  }
  return { W: W / (3 * M), Q: Q / (3 * M) };
}
function run(name, p) {
  const E = c.build(name, p, nmol, G), vs = c.corners(E, G); assert(vs, `${name}: corners`);
  return { E, vs, s: c.summary(E, vs, G, nmol, 1, null) };
}

const CASES = [
  ['carnot', { Th: 600, Tc: 300, ratio: 2 }, (p) => 1 - p.Tc / p.Th],
  ['otto', { r: 8, T3: 1800 }, (p) => 1 - Math.pow(p.r, 1 - G)],
  ['diesel', { r: 18, rc: 2 }, (p) => 1 - Math.pow(p.r, 1 - G) * (Math.pow(p.rc, G) - 1) / (G * (p.rc - 1))],
  ['brayton', { rp: 10, T3: 1400 }, (p) => 1 - Math.pow(p.rp, (1 - G) / G)],
  ['stirling', { Th: 700, Tc: 300, r: 3 }, (p) => (p.Th - p.Tc) * Math.log(p.r) / (p.Th * Math.log(p.r) + (p.Th - p.Tc) / (G - 1))],
];

group('each standard cycle: efficiency W/Q_in equals the textbook closed form', () => {
  for (const [name, p, eta] of CASES) { const { s } = run(name, p); assert(s.engine, name); near(s.Wnet / s.Qin, eta(p), 1e-12, name); }
  near(1 - Math.pow(8, -0.4), 0.5647, 1e-4, 'Otto r = 8 is 56.5%');
});

group('around every cycle ΔU = 0 and ΔS = 0 (state functions), each leg obeys ΔU = Q − W, and W_net = Q_in − Q_out', () => {
  for (const [name, p] of CASES) {
    const { s } = run(name, p);
    assert(Math.abs(s.dU) < 1e-9 * s.scale, `${name} ΔU`); assert(Math.abs(s.dS) < 1e-12 * s.scale, `${name} ΔS`);
    assert(s.mism < 1e-9 * s.scale, `${name} first law`); near(s.Wnet, s.Qin - s.Qout, 1e-12, `${name} balance`);
  }
});

group('every leg: W and Q agree with ∫P dV and ∫T dS integrated numerically along the path', () => {
  for (const [name, p] of CASES.concat([['rect', { Ph: 3e5, Pl: 1e5, Va: 0.01, Vb: 0.03 }, null], ['own', {}, null]])) {
    const { s } = run(name, p);
    for (const L of s.legs) {
      const r = integrateLeg(L.a, L.b, G);
      assert(Math.abs(r.W - L.W) <= 1e-8 * s.scale, `${name} leg ${L.k} (${L.t}) W ${L.W} vs ${r.W}`);
      assert(Math.abs(r.Q - L.Q) <= 1e-8 * s.scale, `${name} leg ${L.k} (${L.t}) Q ${L.Q} vs ${r.Q}`);
    }
  }
});

group('corners land on the process lines: isotherms keep T, adiabats keep PV^γ, isochores keep V, isobars keep P', () => {
  for (const [name, p] of CASES) {
    const { s } = run(name, p);
    for (const L of s.legs) {
      if (L.t === 'T') near(L.T2, L.T1, 1e-12, `${name} isotherm`);
      if (L.t === 'S') near(L.b.P * L.b.V ** G, L.a.P * L.a.V ** G, 1e-12, `${name} adiabat`);
      if (L.t === 'V') near(L.b.V, L.a.V, 1e-12, `${name} isochore`);
      if (L.t === 'P') near(L.b.P, L.a.P, 1e-12, `${name} isobar`);
    }
  }
  const { s } = run('carnot', { Th: 600, Tc: 300, ratio: 2 });
  near(s.Tmax, 600, 1e-12); near(s.Tmin, 300, 1e-12);
  // state 1 of Otto is 300 K and 100 kPa; state 2 after compression r = 8 is 300 · 8^0.4 K
  const o = run('otto', { r: 8, T3: 1800 }); near(c.temp(o.vs[1].P, o.vs[1].V, 1), 300 * Math.pow(8, 0.4), 1e-12);
});

group('run backward, a cycle is a refrigerator: same |W|, heat flows reversed, Carnot COP = T_c/(T_h − T_c)', () => {
  const p = { Th: 600, Tc: 300, ratio: 2 }, E = c.build('carnot', p, 1, G), vs = c.corners(E, G);
  const f = c.summary(E, vs, G, 1, 1, null), b = c.summary(E, vs, G, 1, -1, null);
  assert(!b.engine); near(b.Wnet, -f.Wnet, 1e-12);
  near(b.Qin / -b.Wnet, p.Tc / (p.Th - p.Tc), 1e-12, 'COP');
});

group('entropy of an ideal gas: ΔS = n c_v ln(T₂/T₁) + n R ln(V₂/V₁)', () => {
  const cv = c.R / (G - 1);
  near(c.entropy(600, 0.05, 1, G) - c.entropy(300, 0.02, 1, G), cv * Math.log(2) + c.R * Math.log(2.5), 1e-12);
  // free expansion into double the volume: ΔS = nR ln 2 (Vol 2 §4.7)
  near(c.entropy(300, 0.04, 2, G) - c.entropy(300, 0.02, 2, G), 2 * c.R * Math.log(2), 1e-12);
});

console.log(`${n} heat engines test groups passed`);
