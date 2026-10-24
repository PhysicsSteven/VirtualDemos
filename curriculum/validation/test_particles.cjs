'use strict';
// Particles, Quarks and Conservation Laws: the particle data, the reaction checker, the quark builder and the bubble chamber.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('particles', 'HBAR,HBARC,PBR_GEV,PBR_MEV_CM,QUARKS,P,BY,qn,totals,cmEnergy,threshold,check,EXAMPLES,forceRange,build,multiplet,I3of,DET,p2,boost,decay2,invMass4,invMass,radiusCm,momentumMeV,arcPoint,trace,makeEvent,fitCircle,angleAt,chargeOf');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const ex = (k) => c.check(c.EXAMPLES.find((e) => e.k === k));

group('particle data: PDG 2024 values, antiparticles mirror every additive number, quark content gives the charge', () => {
  near(c.BY.p.m, 938.27208816, 1e-12); near(c.BY.n.m, 939.56542052, 1e-12); near(c.BY['e-'].m, 0.51099895, 1e-12); near(c.BY.Lambda.m, 1115.683, 1e-12);
  near(c.BY.n.tau, 878.4, 1e-9); near(c.BY['mu-'].tau, 2.1969811e-6, 1e-9); near(c.BY['pi+'].tau, 2.6033e-8, 1e-9);
  for (const p of c.P) {
    if (p.self) assert.equal(p.anti, p.id, p.id); else { const a = c.BY[p.anti]; assert(a, `antiparticle of ${p.id}`); assert.equal(a.anti, p.id);
      for (const k of ['Q', 'B', 'Le', 'Lm', 'Lt']) assert.equal(a[k], -p[k] || 0, `${p.id} ${k}`); assert.equal(a.m, p.m); assert.equal(a.spin, p.spin); }
    /* hadrons: charge from the net quark content (flavourless mesons have none and are neutral) */
    if (p.cls === 'meson' || p.cls === 'baryon') near(c.chargeOf(p.n), p.Q, 1e-12, `charge of ${p.id}`);
    if (p.cls === 'baryon') assert.equal(Math.abs(p.B), 1, p.id);
    if (p.cls === 'lepton' || p.cls === 'baryon') assert.equal(p.spin % 1, 0.5, `${p.id} is a fermion`);
  }
});
group('Table 11.2: lepton numbers, baryon number and strangeness as the book lists them', () => {
  const T = { 'e-': [1, 0, 0, 0, 0], nue: [1, 0, 0, 0, 0], 'mu-': [0, 1, 0, 0, 0], numu: [0, 1, 0, 0, 0], 'tau-': [0, 0, 1, 0, 0], nutau: [0, 0, 1, 0, 0],
    'pi+': [0, 0, 0, 0, 0], 'K+': [0, 0, 0, 0, 1], 'K-': [0, 0, 0, 0, -1], p: [0, 0, 0, 1, 0], n: [0, 0, 0, 1, 0], Lambda: [0, 0, 0, 1, -1], 'Sigma+': [0, 0, 0, 1, -1],
    'Sigma-': [0, 0, 0, 1, -1], Xi0: [0, 0, 0, 1, -2], 'Xi-': [0, 0, 0, 1, -2], 'Omega-': [0, 0, 0, 1, -3] };
  for (const id in T) { const q = c.qn(c.BY[id]); assert.deepEqual([q.Le, q.Lm, q.Lt, q.B, q.S], T[id], id); }
});
group('Examples 11.1 to 11.3: the book\'s verdicts', () => {
  assert.ok(ex('ex111a').ok); assert.equal(ex('ex111a').ta.B, 1); assert.equal(ex('ex111a').tb.B, 1);
  const b = ex('ex111b'); assert.ok(!b.ok); assert(b.reasons.some((r) => /baryon/.test(r)));
  const a2 = ex('ex112a'); assert.ok(a2.ok); assert.equal(a2.force, 'weak'); assert.equal(a2.tb.Le, 0);
  const b2 = ex('ex112b'); assert.ok(!b2.ok); assert(b2.reasons.some((r) => /muon lepton/.test(r))); assert.equal(b2.tb.Lm, 1);
  const a3 = ex('ex113a'); assert.ok(a3.ok); assert.equal(a3.force, 'strong'); assert.equal(a3.tb.S, 0);
  const b3 = ex('ex113b'); assert.ok(b3.ok); assert.equal(b3.force, 'weak'); assert.equal(b3.ta.S, 1); assert.equal(b3.tb.S, 0);
});
group('classification: strong, electromagnetic and weak; forbidden by energy, lepton number, baryon number, one product, ΔS = 2', () => {
  const v = (k) => { const r = ex(k); return r.ok ? r.force : 'forbidden'; };
  assert.equal(v('pi0'), 'electromagnetic'); assert.equal(v('sigma0'), 'electromagnetic'); assert.equal(v('eemumu'), 'electromagnetic');
  assert.equal(v('delta'), 'strong'); assert.equal(v('assoc'), 'strong'); assert.equal(v('lambda'), 'weak'); assert.equal(v('omega'), 'weak');
  assert.equal(v('pidecay'), 'weak'); assert.equal(v('mudecay'), 'weak'); assert.equal(v('zee'), 'weak'); assert.equal(v('nuscat'), 'weak');
  assert.equal(v('mueg'), 'forbidden'); assert.equal(v('xin'), 'forbidden'); assert.equal(v('pdecay'), 'forbidden');
  assert(ex('pfree').reasons.some((r) => /energy/.test(r))); assert(ex('nw').reasons.some((r) => /energy/.test(r)));
  assert.ok(!c.check({ a: ['pi0'], b: ['gamma'] }).ok, 'one photon from a decay at rest');
  assert.ok(!c.check({ a: ['n'], b: ['p', 'e-'] }).ok, 'no antineutrino');
});
group('energy: centre of mass energy (Eq. 11.3) and thresholds, 6mc² for antiprotons, 2m_π + m_π²/2m_p for π⁰, Example 11.7', () => {
  const mp = c.BY.p.m, mpi0 = c.BY.pi0.m;
  near(c.threshold(['p', 'p'], 4 * mp, 'fixed'), 6 * mp, 1e-12, 'antiproton threshold');
  near(c.threshold(['p', 'p'], 2 * mp + mpi0, 'fixed'), 2 * mpi0 + mpi0 * mpi0 / (2 * mp), 1e-12, 'π⁰ threshold');
  near(c.cmEnergy(['p', 'p'], 'fixed', 6 * mp), 4 * mp, 1e-12, 'W at threshold');
  near(c.cmEnergy(['p', 'p'], 'collider', 7e6), 1.4e7, 1e-6, 'LHC: W = 2E');
  /* Example 11.7: e⁺e⁻ → ϒ(4S) needs about 5.29 GeV per beam */
  const u = ex('ex117'); assert.ok(u.ok); near(u.en, 10579.4 / 2, 1e-4, 'beam energy'); near(u.en / 1000, 5.29, 0.001);
  /* Eq. 11.3 against the invariant directly: E₁ = 3 GeV pions head on with 1 GeV protons */
  const E = 3000, m1 = c.BY['pi-'].m, m2 = mp, p1 = Math.sqrt(E * E - m1 * m1), p2 = Math.sqrt(E * E - m2 * m2);
  near(c.cmEnergy(['pi-', 'p'], 'collider', E), Math.sqrt((2 * E) ** 2 - (p1 - p2) ** 2), 1e-12, 'Eq. 11.3');
  const k = c.threshold(['pi-', 'p'], c.BY.K0.m + c.BY.Lambda.m, 'fixed'); near(c.cmEnergy(['pi-', 'p'], 'fixed', k), c.BY.K0.m + c.BY.Lambda.m, 1e-12);
  assert(k > 760 && k < 775, `associated production threshold ${k}`);
});
group('§11.4 and §11.5 numbers: p = 0.3Br (Example 11.6), range of the weak force ħc/(m_W c²) ≈ 2 × 10⁻¹⁸ m', () => {
  near(c.PBR_GEV * 1.5 * 1.2, 0.5396, 1e-4, 'Example 11.6: 0.54 GeV/c'); near(c.momentumMeV(120, 1.5), c.PBR_GEV * 1.5 * 1.2 * 1000, 1e-12);
  near(c.radiusCm(c.momentumMeV(37.5, 2.2), 2.2), 37.5, 1e-12);
  const d = c.forceRange(c.BY['W+'].m); assert(d > 2.4e-18 && d < 2.5e-18, `${d}`); assert.equal(c.forceRange(0), Infinity);
  near(c.forceRange(c.BY['pi+'].m) * 1e15, 1.414, 1e-3, 'Yukawa pion range 1.41 fm');
});
group('quark builder: uud = p, udd = n, uds = Λ or Σ⁰, sss = Ω⁻, ud̄ = π⁺; Example 11.4 (Ξ⁰ = uss: Q 0, S −2, J ½)', () => {
  const B = (spec) => c.build(spec.map((x, i) => Object.assign({ col: 'rgb'[i], up: i !== 2 }, x)));
  assert.deepEqual(B([{ f: 'u' }, { f: 'u' }, { f: 'd' }]).matches, ['p']); assert.deepEqual(B([{ f: 'u' }, { f: 'd' }, { f: 'd' }]).matches, ['n']);
  assert.deepEqual(B([{ f: 'u' }, { f: 'd' }, { f: 's' }]).matches.sort(), ['Lambda', 'Sigma0']);
  const om = c.build([{ f: 's', col: 'r', up: true }, { f: 's', col: 'g', up: true }, { f: 's', col: 'b', up: true }]); assert.deepEqual(om.matches, ['Omega-']); assert.equal(om.S, -3); assert.equal(om.J, 1.5);
  const xi = B([{ f: 's' }, { f: 'u' }, { f: 's' }]); assert.equal(xi.Q, 0); assert.equal(xi.S, -2); assert.equal(xi.J, 0.5); assert.deepEqual(xi.matches, ['Xi0']);
  const pip = c.build([{ f: 'u', col: 'r', up: true }, { f: 'd', anti: true, col: 'r', up: false }]); assert.deepEqual(pip.matches, ['pi+']); assert.equal(pip.Q, 1); assert.equal(pip.B, 0);
  const rho = c.build([{ f: 'u', col: 'g', up: true }, { f: 'd', anti: true, col: 'g', up: true }]); assert.deepEqual(rho.matches, ['rho+']);
  const kp = c.build([{ f: 'u', col: 'b', up: true }, { f: 's', anti: true, col: 'b', up: false }]); assert.deepEqual(kp.matches, ['K+']); assert.equal(kp.S, 1);
  const pbar = c.build([{ f: 'u', anti: true, col: 'r', up: true }, { f: 'u', anti: true, col: 'g', up: true }, { f: 'd', anti: true, col: 'b', up: false }]); assert.deepEqual(pbar.matches, ['pbar']); assert.equal(pbar.B, -1);
  const jpsi = c.build([{ f: 'c', col: 'r', up: true }, { f: 'c', anti: true, col: 'r', up: true }]); assert.deepEqual(jpsi.matches, ['Jpsi']);
  const ups = c.build([{ f: 'b', col: 'r', up: true }, { f: 'b', anti: true, col: 'r', up: true }]); assert.deepEqual(ups.matches, ['Ups']);
  const d0 = c.build([{ f: 'c', col: 'r', up: true }, { f: 'u', anti: true, col: 'r', up: false }]); assert.deepEqual(d0.matches, ['D0']);
  const lc = B([{ f: 'u' }, { f: 'd' }, { f: 'c' }]); assert.deepEqual(lc.matches, ['Lc+']); assert.equal(lc.Q, 1);
});
group('quark builder: colour neutrality, the exclusion principle for uuu, confinement, no top hadrons', () => {
  assert.equal(c.build([{ f: 'u', col: 'r' }, { f: 'u', col: 'r', up: true }, { f: 'd', col: 'b' }]).neutral, false);
  assert.equal(c.build([{ f: 'u', col: 'r' }, { f: 'd', anti: true, col: 'g' }]).neutral, false);
  const uuu = c.build([{ f: 'u', col: 'r', up: true }, { f: 'u', col: 'g', up: true }, { f: 'u', col: 'b', up: false }]); assert.ok(uuu.pauli); assert.equal(uuu.matches.length, 0);
  assert.deepEqual(c.build([{ f: 'u', col: 'r', up: true }, { f: 'u', col: 'g', up: true }, { f: 'u', col: 'b', up: true }]).matches, ['Delta++']);
  assert.equal(c.build([{ f: 'u', col: 'r' }]).kind, 'none'); assert.equal(c.build([{ f: 'u', col: 'r' }, { f: 'd', col: 'g' }]).kind, 'none');
  assert.ok(c.build([{ f: 't', col: 'r' }, { f: 'u', anti: true, col: 'r' }]).top);
  /* Gell-Mann–Nishijima, Q = I₃ + (B + S)/2, for every light hadron in the diagrams */
  for (const [k, J] of [['baryon', 0.5], ['baryon', 1.5], ['meson', 0], ['meson', 1]]) for (const id of c.multiplet(k, J)) { const p = c.BY[id], q = c.qn(p); near(c.I3of(p) + (q.B + q.S) / 2, q.Q, 1e-12, id); }
});
group('decuplet masses: nearly equal steps per strange quark (Gell-Mann\'s Ω⁻ prediction)', () => {
  const m = [c.BY['Delta+'].m, c.BY.Sigst0.m, c.BY.Xist0.m, c.BY['Omega-'].m], d = [m[1] - m[0], m[2] - m[1], m[3] - m[2]];
  for (const x of d) assert(x > 135 && x < 155, `step ${x}`);
});
group('two body decays: p* for Λ → pπ⁻ = 101 MeV/c and K⁰ → π⁺π⁻ = 206 MeV/c; boosts keep the invariant mass', () => {
  near(c.p2(c.DET.mL, c.DET.mp, c.DET.mpi), 101.0, 0.005, 'Λ'); near(c.p2(c.DET.mK, c.DET.mpi, c.DET.mpi), 206.0, 0.005, 'K⁰_S');
  for (const [M, m1, m2] of [[c.DET.mL, c.DET.mp, c.DET.mpi], [c.DET.mK, c.DET.mpi, c.DET.mpi]]) for (const P of [0, 200, 900, 3000]) for (const phi of [0, 1, 2.5, 4]) {
    const [a, b] = c.decay2(M, P * 0.6, P * 0.8, m1, m2, phi); near(c.invMass4(a, b), M, 1e-9, 'invariant mass'); near(a[1] + b[1], P * 0.6, 1e-9); near(a[2] + b[2], P * 0.8, 1e-9);
    near(Math.sqrt(a[0] ** 2 - a[1] ** 2 - a[2] ** 2), m1, 1e-6, 'daughter mass'); }
});
group('bubble chamber: every event reconstructs to its parent mass; circles fit exact tracks; the field bends + anticlockwise', () => {
  let nL = 0, nK = 0;
  for (let s = 1; s <= 300; s++) {
    const ev = c.makeEvent(s, 1.5, 1200, 0); assert(ev, `event ${s}`);
    for (const v of ev.vees) {
      const M = v.parent === 'KS' ? c.DET.mK : c.DET.mL; v.parent === 'KS' ? nK++ : nL++;
      near(v.M, M, 1e-9); near(c.invMass(v.plus.p, v.minus.p, v.theta, v.plus.m, v.minus.m), M, 1e-9, 'from |p| and θ');
      const fp = c.fitCircle(v.plus.pts), fm = c.fitCircle(v.minus.pts); near(fp.r, v.plus.r, 1e-6); near(fm.r, v.minus.r, 1e-6);
      near(c.momentumMeV(fp.r, 1.5), v.plus.p, 1e-6);
      /* the positive track's centre is on its left (anticlockwise), the negative's on its right */
      const [x0, y0] = v.plus.pts[0], [x1, y1] = v.plus.pts[5], cross = (x1 - x0) * (fp.cy - y0) - (y1 - y0) * (fp.cx - x0); assert(cross > 0, 'positive turns left');
      const [u0, w0] = v.minus.pts[0], [u1, w1] = v.minus.pts[5], cr2 = (u1 - u0) * (fm.cy - w0) - (w1 - w0) * (fm.cx - u0); assert(cr2 < 0, 'negative turns right');
      for (const t of [v.plus, v.minus]) for (const [x, y] of t.pts) assert(x * x + y * y <= c.DET.R * c.DET.R + 1e-9, 'inside the window');
    }
  }
  assert(nL > 50 && nK > 50, `both kinds appear: Λ ${nL}, K⁰_S ${nK}`);
  /* the same event comes back for the same number; the scatter changes only the bubbles */
  const a = c.makeEvent(7, 1.5, 1200, 0), b = c.makeEvent(7, 1.5, 1200, 0.03); near(a.vees[0].M, b.vees[0].M, 1e-12); near(a.vees[0].theta, b.vees[0].theta, 1e-12);
  const fb = c.fitCircle(b.vees[0].plus.pts); assert(Math.abs(fb.r - a.vees[0].plus.r) / a.vees[0].plus.r < 0.05, 'scattered fit within 5%');
  near(c.angleAt([0, 0], [1, 0], [0, 2]), Math.PI / 2, 1e-12);
});
group('bubble chamber: decay lengths follow the mean lives (cτ = 7.85 cm for Λ, 2.68 cm for K⁰_S)', () => {
  near(c.DET.ctauL, 7.846, 1e-3); near(c.DET.ctauKS, 2.684, 1e-3);
  let sum = 0, k = 0; for (let s = 1; s <= 3000; s++) { const ev = c.makeEvent(s, 1.5, 1200, 0); for (const nt of ev.neutrals) if (nt.who === 'Lambda') { sum += nt.L / (nt.p / c.DET.mL); k++; } }
  /* events are chosen for a visible V, which favours short flights, so allow a wide band */
  const mean = sum / k; assert(mean > 4 && mean < 9, `mean proper decay length ${mean}`);
});
console.log(`${n} groups passed`);
