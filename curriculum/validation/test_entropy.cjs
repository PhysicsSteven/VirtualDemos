'use strict';
// Entropy and the Second Law: the free expansion gas, Einstein solid multiplicities and their random exchange, the second law checker.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('entropy', 'K_B,R,lnC,choose,gasMake,gasStep,leftCount,gasEnergy,shareExact,dSfree,dSfreeMol,lnOmega,solidMake,solidStep,solidDist,solidPeak,solidT,device,pair');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('counting: C(n, k) exact, ln C matches, shares C(N, n)/2^N add to 1', () => {
  assert.equal(c.choose(4, 2), 6); assert.equal(c.choose(10, 5), 252); near(c.choose(100, 50), 1.00891344545564193e29, 1e-14, "C(100, 50)"); assert.equal(c.choose(50, 25), 126410606437752);
  near(c.lnC(40, 13), Math.log(c.choose(40, 13)), 1e-12, 'lnC');
  for (const N of [2, 4, 10, 100]) { let s = 0; for (let k = 0; k <= N; k++) s += c.shareExact(N, k); near(s, 1, 1e-12, `N = ${N}`); }
  near(c.shareExact(4, 4), 1 / 16, 1e-12); near(c.shareExact(100, 100), Math.pow(2, -100), 1e-9);
});
group('Example 4.8: free expansion to twice the volume, ΔS = nR ln 2 = 5.76 J/K per mole; N k ln 2 per N molecules', () => {
  near(c.dSfreeMol(1), 5.763, 1e-3, 'R ln 2'); near(c.dSfree(6.02214076e23), c.dSfreeMol(1), 1e-12, 'N_A k = R');
});
group('gas: partition holds every molecule on the left; energy is conserved through collisions', () => {
  const g = c.gasMake(50, 7), e0 = c.gasEnergy(g);
  for (let i = 0; i < 5000; i++) c.gasStep(g, 0.004);
  assert.equal(c.leftCount(g), 50); near(c.gasEnergy(g), e0, 1e-9, 'energy');
  g.wall = false; for (let i = 0; i < 20000; i++) c.gasStep(g, 0.004);
  near(c.gasEnergy(g), e0, 1e-9, 'energy after opening'); near(g.tOpen, 80, 1e-9, 'clock');
});
group('gas: after opening, the share of time at each count tends to C(N, n)/2^N (N = 4 and 10)', () => {
  for (const [N, steps, tol] of [[4, 600000, 0.02], [10, 600000, 0.02]]) {
    const g = c.gasMake(N, 3); g.wall = false; for (let i = 0; i < steps; i++) c.gasStep(g, 0.004);
    for (let k = 0; k <= N; k++) { const got = g.hist[k] / g.tCount, want = c.shareExact(N, k); assert(Math.abs(got - want) < tol, `N ${N} n ${k}: ${got} vs ${want}`); }
  }
});
group('Einstein solid: Ω(N, q) = C(q + N − 1, q); Ω(3, 6) = 28; the pair sums to Ω(N_A + N_B, q); no energy means Ω = 1', () => {
  near(Math.exp(c.lnOmega(3, 6)), 28, 1e-12); near(Math.exp(c.lnOmega(6, 6)), 462, 1e-12); assert.equal(c.lnOmega(50, 0), 0); assert.equal(c.solidT(50, 0), 0);
  for (const [a, b, q] of [[3, 3, 6], [100, 200, 150]]) { const P = c.solidDist(a, b, q); near(P.reduce((s, v) => s + v, 0), 1, 1e-10, `sum ${a} ${b} ${q}`); }
});
group('Einstein solid: random exchange conserves q and visits q_A as often as its share of microstates', () => {
  const s = c.solidMake(3, 3, 6, 11, 'A'); c.solidStep(s, 2000000);
  let tot = 0; for (const v of s.n) tot += v; assert.equal(tot, 6); assert.equal(s.qA, s.n[0] + s.n[1] + s.n[2]);
  const P = c.solidDist(3, 3, 6); for (let a = 0; a <= 6; a++) assert(Math.abs(s.hist[a] / s.steps - P[a]) < 0.005, `q_A ${a}: ${s.hist[a] / s.steps} vs ${P[a]}`);
});
group('Einstein solid: heat flows from hot to cold; q_A settles near the peak where the temperatures match', () => {
  const NA = 100, NB = 200, q = 150, pk = c.solidPeak(NA, NB, q); assert.equal(pk, 50);
  const tA = c.solidT(NA, pk), tB = c.solidT(NB, q - pk); near(tA, tB, 0.02, 'temperatures match at the peak');
  assert(c.solidT(NA, 150) > c.solidT(NB, 0), 'A starts hotter');
  const s = c.solidMake(NA, NB, q, 5, 'A'); c.solidStep(s, 400000); let avg = 0; const s2 = c.solidMake(NA, NB, q, 6, 'A'); c.solidStep(s2, 200000);
  for (let i = 0; i < 2000; i++) { c.solidStep(s2, 100); avg += s2.qA; } avg /= 2000; assert(Math.abs(avg - 50) < 3, `average q_A ${avg}`);
  assert(Math.abs(s.qA - 50) < 25, `q_A after many exchanges ${s.qA}`);
});
group('second law: Carnot reversible (ΔS = 0); real engine allowed; better than Carnot forbidden', () => {
  const carnot = c.device({ mode: 'engine', Th: 600, Tc: 300, Q: 500, W: 250 }); assert.equal(carnot.verdict, 'reversible'); near(carnot.eff, carnot.carnotEff, 1e-12);
  const real = c.device({ mode: 'engine', Th: 600, Tc: 300, Q: 500, W: 150 }); assert.equal(real.verdict, 'allowed'); near(real.dS, -500 / 600 + 350 / 300, 1e-12, 'ΔS');
  const beat = c.device({ mode: 'engine', Th: 600, Tc: 300, Q: 500, W: 300 }); assert.equal(beat.verdict, 'beats'); assert(beat.dS < 0);
  const fr = c.device({ mode: 'fridge', Th: 300, Tc: 270, Q: 400, W: 50 }); near(fr.Qh, 450, 1e-12); near(fr.cop, 8, 1e-12); near(fr.carnotCop, 9, 1e-12); assert.equal(fr.verdict, 'allowed');
  const frc = c.device({ mode: 'fridge', Th: 300, Tc: 270, Q: 450, W: 50 }); assert.equal(frc.verdict, 'reversible');
});
group('Kelvin and Clausius statements; pairing with a Carnot device turns a better than Carnot device into a perfect one', () => {
  assert.equal(c.device({ mode: 'engine', Th: 600, Tc: 300, Q: 500, W: 500 }).verdict, 'kelvin');
  assert.equal(c.device({ mode: 'fridge', Th: 300, Tc: 270, Q: 400, W: 0 }).verdict, 'clausius');
  for (const W of [150, 250, 300]) { const r = c.device({ mode: 'engine', Th: 600, Tc: 300, Q: 500, W }), p = c.pair(r);
    near(p.Wnet, p.fromHot, 1e-9, 'first law for the pair'); near(p.Wnet, -r.Th * r.dS, 1e-9, 'net work = −T_h ΔS'); assert.equal(p.toCold, 0); }
  const p = c.pair(c.device({ mode: 'engine', Th: 600, Tc: 300, Q: 500, W: 300 })); near(p.Wnet, 100, 1e-9, 'perfect engine from the cheat: 500 J − 400 J back to hot');
  for (const Q of [400, 450, 500]) { const r = c.device({ mode: 'fridge', Th: 300, Tc: 270, Q, W: 50 }), q = c.pair(r);
    near(q.fromHot, q.toCold, 1e-9, 'no net work so heat in = heat out'); near(q.toCold, r.dS * r.Tc * r.Th / (r.Th - r.Tc), 1e-9, 'net heat to cold = ΔS/(1/T_c − 1/T_h)'); }
});
console.log(`${n} groups passed`);
