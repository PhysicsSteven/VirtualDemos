'use strict';
// Building a Solar System: the collapse (Ulrich infall), the disk's temperature and frost line, oligarchic growth and aluminum 26 melting.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('solar-system-formation', 'AU,GM,M_SUN,M_EARTH,R_STAR,orbitPeriod,omegaOf,diskRadius,spinUp,fallTime,makeCloud,stepCloud,parcel,cloudCounts,T1,CONDENSE,diskT,lineAt,frostLine,solidsAt,sigmaSolid,sigmaGas,diskMass,ICE_FACTOR,B_HILL,CORE_GAS,N_START,isoMass,growTime,hillGap,makeGrowth,growTo,growthSummary,MELT,heatLeft,hOfT,TofH,meltFrac,meltRun');

let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('units: GM of the Sun is 4π² AU³/yr² to 0.01 %; a 1 AU orbit takes one Julian year (to 0.01 %)', () => {
  near(c.GM, 4 * Math.PI ** 2, 1e-4, 'GM'); near(c.orbitPeriod(1), 1, 1e-4, 'period at 1 AU');
  near(c.M_SUN, 1.98841e30, 1e-4, 'M_sun from GM/G');
});

group('collapse formulas: R_d = Ω₀²r₀⁴/GM = 39.06 AU for 5000 AU and 4 Myr; spin up (r₀/R_d)²; radial infall time π√(r₀³/8GM)', () => {
  const w = 2 * Math.PI / 4e6; near(c.diskRadius(5000, 4), w * w * 5000 ** 4 / c.GM, 1e-12, 'formula'); near(c.diskRadius(5000, 4), 39.064, 1e-4, 'value');
  near(c.diskRadius(5000, 16), c.diskRadius(5000, 4) / 16, 1e-12, 'four times slower spin, 16 times smaller');
  near(c.spinUp(5000, 4), (5000 / c.diskRadius(5000, 4)) ** 2, 1e-12, 'spin up');
  /* the spin up equals the ratio of the cloud's period to the disk edge's orbital period */
  near(c.spinUp(5000, 4), 4e6 / c.orbitPeriod(c.diskRadius(5000, 4)), 1e-9, 'spin up as a ratio of periods');
  /* straight infall from rest: integrate dr/dt = −√(2GM(1/r − 1/r₀)) numerically */
  const r0 = 5000; let t = 0; const N = 200000; for (let i = 0; i < N; i++) { const u = (i + 0.5) / N * Math.PI / 2, r = r0 * Math.cos(u) ** 2; t += (Math.PI / 2 / N) * 2 * r0 * Math.cos(u) * Math.sin(u) / Math.sqrt(2 * c.GM * (1 / r - 1 / r0)); }
  near(c.fallTime(r0), t, 1e-6, 'infall time');
});

group('collapse run: each parcel reaches the midplane at the semi latus rectum of its orbit, j²/GM (Ulrich 1976), and settles at j_z²/GM', () => {
  const r0 = 5000, P0 = 4, C = c.makeCloud(300, r0, P0, 7), w = c.omegaOf(P0), N = C.n;
  const s0 = [], rs0 = []; for (let i = 0; i < N; i++) { const k = 3 * i; s0.push(Math.hypot(C.p[k], C.p[k + 1])); rs0.push(Math.hypot(C.p[k], C.p[k + 1], C.p[k + 2])); }
  const landR = new Array(N).fill(null), tf = c.fallTime(r0); let worstLand = 0, checked = 0;
  while (C.t < 1.6 * tf) {
    c.stepCloud(C, tf / 2000);
    for (let i = 0; i < N; i++) if (landR[i] == null && C.st[i] !== 0) { landR[i] = C.st[i] === 2 ? -1 : 0;
      if (C.st[i] !== 2) { const r = C.land[i], p = (w * s0[i] * rs0[i]) ** 2 / c.GM; if (p > 0.5) { worstLand = Math.max(worstLand, Math.abs(r / p - 1)); checked++; } } }
  }
  assert(checked > 150, `parcels checked at landing: ${checked}`); assert(worstLand < 0.03, `landing radius off by ${worstLand}`);
  let worst = 0, settled = 0; for (let i = 0; i < N; i++) { if (C.st[i] !== 3) continue; settled++; const k = 3 * i, s = Math.hypot(C.p[k], C.p[k + 1]), pred = (w * s0[i] * s0[i]) ** 2 / c.GM; worst = Math.max(worst, Math.abs(s / pred - 1)); }
  assert(settled > 200, `settled ${settled}`); assert(worst < 2e-4, `settled radius off by ${worst}`);
  const q = c.parcel(C); assert(q.settled, 'tracked parcel settled'); near(q.s, c.diskRadius(r0, P0), 1e-3, 'tracked parcel at the disk edge'); near(q.period, c.orbitPeriod(c.diskRadius(r0, P0)), 2e-3, 'its period');
  const cnt = c.cloudCounts(C); assert.equal(cnt.fall, 0); assert(cnt.sun > 0 && cnt.sun < N / 4, `on the Sun ${cnt.sun}`);
});

group('collapse without spin: every parcel falls onto the young Sun', () => {
  const C = c.makeCloud(200, 3000, 0, 3); const tf = c.fallTime(3000); while (C.t < 1.2 * tf) c.stepCloud(C, tf / 300);
  const cnt = c.cloudCounts(C); assert.equal(cnt.sun, C.n, `${JSON.stringify(cnt)}`); assert(c.parcel(C).gone);
});

group('disk: T = 280 K (r/AU)^(−1/2) (L/L☉)^(1/4) (Hayashi 1981); frost line at 182 K is 2.367 AU, twice as far for a Sun 4 times as bright', () => {
  near(c.diskT(1, 1), 280, 1e-12); near(c.diskT(4, 1), 140, 1e-12, 'four times farther, half as hot'); near(c.diskT(1, 16), 560, 1e-12, 'sixteen times brighter, twice as hot');
  near(c.frostLine(1), (280 / 182) ** 2, 1e-12); near(c.frostLine(1), 2.3669, 1e-4); near(c.frostLine(4), 2 * c.frostLine(1), 1e-12);
  near(c.diskT(c.frostLine(2.5), 2.5), 182, 1e-12, 'T at the frost line');
  const names = (r) => c.solidsAt(r, 1).map((x) => x.k).join(',');
  assert.equal(names(1), 'cai,rock,metal,fes'); assert.equal(names(4), 'cai,rock,metal,fes,water'); assert.equal(names(0.02), ''); assert.equal(names(0.03), 'cai');
  assert.equal(names(60), 'cai,rock,metal,fes,water,nh3,ch4');
  /* Lodders (2003) 50 % condensation temperatures at 1e-4 bar, as used */
  assert.equal(c.CONDENSE.map((x) => x.T).join(','), '1653,1336,1334,664,182,123,40');
});

group('minimum mass nebula: solids 7.1 and 30 g/cm² at 1 AU inside and beyond the frost line (ratio 4.2), gas 1700; gas mass 0.0130 solar masses from 0.35 to 36 AU', () => {
  near(c.sigmaSolid(1, 1, 1), 7.1, 1e-12); near(c.sigmaSolid(4, 1, 1), 30 / 8, 1e-12); near(c.ICE_FACTOR, 4.225, 1e-3); near(c.sigmaGas(2, 3), 3 * 1700 / Math.pow(2, 1.5), 1e-12);
  near(c.diskMass(1), 0.0130, 3e-3, 'disk mass'); near(c.diskMass(3), 3 * c.diskMass(1), 1e-12);
});

group('isolation mass 0.16 Earth masses at 1 AU for Σ = 10 g/cm² and b = 10 (Kokubo and Ida 2002); M_iso ∝ Σ^(3/2) a^(3/4) for Σ ∝ a^(−3/2)', () => {
  near(c.isoMass(1, 10), 0.161, 0.01, 'Kokubo and Ida value');
  near(c.isoMass(1, 20) / c.isoMass(1, 10), Math.pow(2, 1.5), 1e-12);
  near(c.isoMass(16, c.sigmaSolid(16, 1, 1)) / c.isoMass(4, c.sigmaSolid(4, 1, 1)), Math.pow(4, 0.75), 1e-9);
  /* its definition: a ring b mutual Hill radii wide holds exactly M_iso */
  const a = 5.2, sig = c.sigmaSolid(a, 1, 1), M = c.isoMass(a, sig), rH = a * c.AU * Math.cbrt(2 * M * c.M_EARTH / (3 * c.M_SUN));
  near(2 * Math.PI * a * c.AU * c.B_HILL * rH * sig * 10 / c.M_EARTH, M, 1e-9, 'ring mass');
  /* growth time: 1.7e5 yr for 1e26 g at 1 AU with Σ₁ = 10 g/cm², ∝ M^(1/3) a² */
  near(c.growTime(1e23 / c.M_EARTH, 1, 10), 1.7e5, 1e-9); near(c.growTime(8e23 / c.M_EARTH, 2, 10 * Math.pow(2, -1.5)), 1.7e5 * 2 * 4, 1e-9);
});

group('growth model: joins in time order, so the result does not depend on how the run is stepped; mass kept; inner oligarchs end between 1 and 2.2 times the isolation mass; giants only in a heavy disk whose gas lasts', () => {
  const run = (f, gas) => { const D = c.makeGrowth(f, 1, gas, 2203), m0 = D.B.reduce((s, b) => s + b.m, 0); for (let k = 0; k <= 250; k++) c.growTo(D, 1e3 * Math.pow(1e5, k / 250)); return { D, m0, s: c.growthSummary(D) }; };
  const A = run(1, 3); near(A.D.B.reduce((s, b) => s + b.m, 0), A.m0, 1e-12, 'mass kept');
  let L = 0; for (let i = 1; i < A.D.B.length; i++) { assert(A.D.B[i].a > A.D.B[i - 1].a, 'order kept'); }
  for (const b of A.D.B) if (b.a > 0.5 && b.a < 2) { const r = b.m / c.isoMass(b.a, c.sigmaSolid(b.a, 1, 1)); assert(r >= 1 && r < 2.2, `at ${b.a} AU: ${r}`); L++; }
  assert(L >= 10, `inner oligarchs ${L}`);
  for (let i = 1; i < A.D.B.length; i++) { const p = A.D.B[i - 1], q = A.D.B[i]; if (q.a < 2) assert(c.hillGap(p.m, q.m, p.a, q.a) >= c.B_HILL, 'spacing at least 10 mutual Hill radii'); }
  assert.equal(A.s.giants, 0, 'minimum mass: no giant'); assert(A.s.rock.m < 0.5, `minimum mass: largest rocky ${A.s.rock.m}`);
  const B = run(3, 3); assert(B.s.giants >= 1, 'three times heavier: a giant'); assert(B.D.B.filter((b) => b.giant).every((b) => b.ice && b.tGiant <= 3e6), 'giants beyond the frost line, before the gas goes');
  const E = run(3, 1); assert.equal(E.s.giants, 0, 'gas gone at 1 Myr: no giant');
  /* one jump to 100 Myr, or 4000 small steps, gives the same bodies as the 250 steps above */
  const sig = (D) => D.B.map((b) => b.m.toPrecision(12) + '@' + b.a.toPrecision(12) + (b.giant ? 'g' : '')).join(',');
  const J = c.makeGrowth(3, 1, 3, 2203); c.growTo(J, 1e8); assert.equal(sig(J), sig(B.D), 'one jump');
  const F = c.makeGrowth(3, 1, 3, 2203); for (let k = 0; k <= 4000; k++) c.growTo(F, 1e3 * Math.pow(1e5, k / 4000)); assert.equal(sig(F), sig(B.D), 'fine steps');
});

group('melting: aluminum 26 gives 9.94 MJ/kg from the start; a big body keeps all its heat (peak T from energy alone); the latest big body to grow a core forms at 1.60 Myr', () => {
  near(c.heatLeft(0) / 1e6, 3e-7 * 1.05 * 1e6 * 365.25 * 86400 / 1e6, 1e-12); near(c.heatLeft(1.05) / c.heatLeft(0), Math.exp(-1), 1e-12);
  for (const T of [180, 900, 1661, 1700, 1982, 1990]) near(c.TofH(c.hOfT(T)), T, 1e-12, `enthalpy round trip at ${T}`);
  const big = (tf) => c.meltRun(300, tf);
  near(big(2).peak, c.TofH(c.heatLeft(2)), 2e-3, 'no loss at 2 Myr'); near(big(1.5).peak, c.TofH(c.heatLeft(1.5)), 2e-3, 'no loss at 1.5 Myr');
  const tc = c.MELT.tau * Math.log(c.heatLeft(0) / c.hOfT(c.MELT.Tcore)); near(tc, 1.598, 2e-3, 'critical time');
  assert(big(tc - 0.05).core && !big(tc + 0.05).core, 'core just before, not just after');
  assert(!c.meltRun(2, 0).core && c.meltRun(2, 0).peak < 400, 'a 2 km body stays cool'); assert(c.meltRun(50, 0.5).core, '50 km at 0.5 Myr melts');
  const a = c.meltRun(20, 1.2), b = c.meltRun(20, 1.2, { n: 80 }); near(a.peak, b.peak, 0.005, 'grid convergence');
  assert(c.meltRun(300, 0).peak <= c.MELT.Tl + 1e-9, 'never above the liquidus');
});

console.log(`${n} groups passed`);
