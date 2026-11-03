'use strict';
// Building a Solar System: the collapse (Ulrich infall), the disk's temperature and frost line, oligarchic growth and aluminum 26 melting.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('solar-system-formation', 'AU,GM,M_SUN,M_EARTH,R_STAR,orbitPeriod,omegaOf,diskRadius,spinUp,fallTime,makeCloud,stepCloud,parcel,cloudCounts,T1,CONDENSE,diskT,lineAt,frostLine,solidsAt,sigmaSolid,sigmaGas,diskMass,ICE_FACTOR,B_HILL,CORE_GAS,N_START,isoMass,growTime,hillGap,makeGrowth,growTo,growthSummary,MELT,heatLeft,hOfT,TofH,meltFrac,meltRun,STORY,settleRadius,ringRange,storyGrowth,storyBodies,impactState,finalOf,DISK_IN,DISK_OUT,omegaOf');

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

group('melting: aluminum 26 gives 9.79 MJ/kg from the start; a big body keeps all its heat (peak T from energy alone); the latest big body to grow a core forms at 1.56 Myr', () => {
  near(c.heatLeft(0) / 1e6, 3e-7 * (0.717 / Math.LN2) * 1e6 * 365.25 * 86400 / 1e6, 1e-12); near(c.heatLeft(0.717) / c.heatLeft(0), 0.5, 1e-12);
  for (const T of [180, 900, 1661, 1700, 1982, 1990]) near(c.TofH(c.hOfT(T)), T, 1e-12, `enthalpy round trip at ${T}`);
  const big = (tf) => c.meltRun(300, tf);
  near(big(2).peak, c.TofH(c.heatLeft(2)), 2e-3, 'no loss at 2 Myr'); near(big(1.5).peak, c.TofH(c.heatLeft(1.5)), 2e-3, 'no loss at 1.5 Myr');
  const tc = c.MELT.tau * Math.log(c.heatLeft(0) / c.hOfT(c.MELT.Tcore)); near(tc, 1.559, 2e-3, 'critical time');
  assert(big(tc - 0.05).core && !big(tc + 0.05).core, 'core just before, not just after');
  assert(!c.meltRun(2, 0).core && c.meltRun(2, 0).peak < 400, 'a 2 km body stays cool'); assert(c.meltRun(50, 0.5).core, '50 km at 0.5 Myr melts');
  const a = c.meltRun(20, 1.2), b = c.meltRun(20, 1.2, { n: 80 }); near(a.peak, b.peak, 0.005, 'grid convergence');
  assert(c.meltRun(300, 0).peak <= c.MELT.Tl + 1e-9, 'never above the liquidus');
});

group('the whole story: settling radius j_z²/GM; each body covers a run of starting planetesimals; the story\'s two disk runs; the timescale problem', () => {
  /* a parcel at the cloud's edge on its equator settles at the disk radius */
  near(c.settleRadius(5000, 4), c.diskRadius(5000, 4), 1e-12, 'edge parcel');
  /* the starting planetesimals' rings tile the disk from DISK_IN to DISK_OUT */
  near(c.ringRange(0, c.N_START - 1)[0], c.DISK_IN, 1e-12); near(c.ringRange(0, c.N_START - 1)[1], c.DISK_OUT, 1e-12);
  const G = c.storyGrowth(); c.growTo(G.inner, c.STORY.tGas); c.growTo(G.outer, c.STORY.tGas);
  const B = c.storyBodies(G), fl = c.frostLine(1);
  /* the inner run is exactly the minimum mass disk (the lab's Minimum mass disk setup), and the bodies' rings do not overlap */
  const M = c.makeGrowth(1, 1, 3, 2203); c.growTo(M, c.STORY.tGas);
  assert.deepEqual(B.filter((b) => b.a < fl).map((b) => b.m), M.B.filter((b) => b.a < fl).map((b) => b.m), 'inner run = minimum mass disk');
  for (const D of [G.inner, G.outer]) { let next = 0; for (const b of D.B) { assert.equal(b.lo, next, 'rings in order, none missing'); next = b.hi + 1; } assert.equal(next, c.N_START); }
  /* mass is kept within each run: the sum over a body's planetesimals */
  for (const D of [G.inner, G.outer]) { const F = c.makeGrowth(D.f, 1, 3, 2203, D.fOut); for (const b of D.B) { let m = 0; for (let i = b.lo; i <= b.hi; i++) m += F.B[i].m; near(b.m, m, 1e-9, 'body mass'); } }
  /* 22 rocky protoplanets when the gas goes; one giant beyond the frost line, none with the minimum mass there */
  assert.equal(B.filter((b) => b.a < fl).length, 22, 'rocky protoplanets');
  assert.equal(B.filter((b) => b.giant).length, 1, 'one giant in the story'); assert.equal(M.B.filter((b) => b.giant).length, 0, 'none in the minimum mass disk');
  /* the story cloud's parcels land where their spin says (the coarser steps of the story: within 1 %) */
  const C = c.makeCloud(200, 5000, 4, 77); C.eps = c.STORY.eps; const s0 = []; for (let i = 0; i < C.n; i++) s0.push(Math.hypot(C.p[3 * i], C.p[3 * i + 1]));
  const tf = c.fallTime(5000); while (C.t < 1.6 * tf) c.stepCloud(C, tf / 1500);
  let worst = 0, k = 0; for (let i = 0; i < C.n; i++) if (C.st[i] === 3) { worst = Math.max(worst, Math.abs(Math.hypot(C.p[3 * i], C.p[3 * i + 1]) / c.settleRadius(s0[i], 4) - 1)); k++; }
  assert(k > 120, `settled ${k}`); assert(worst < 0.01, `settled radius off by ${worst}`);
});

group('the giant impacts: the run starts from the story\'s 22 protoplanets; mass is kept through every impact; every starting body ends somewhere', () => {
  global.window = global.window || {}; require('../../demos/solar-system-formation-data/impacts.js'); const D = global.window.VD_SSF_IMPACTS;
  const G = c.storyGrowth(); c.growTo(G.inner, c.STORY.tGas); const fl = c.frostLine(1), P = G.inner.B.filter((b) => b.a < fl);
  /* the run's first snapshot: bodies 1 to 22 have the protoplanets' masses (to the 4 figures kept), plus Jupiter and Saturn */
  const S0 = c.impactState(D, D.t0); assert.equal(S0.filter((b) => !b.giant).length, 22);
  for (const b of S0) if (!b.giant) near(b.m, P[b.id - 1].m, 6e-4, `body ${b.id} mass`);
  assert.equal(D.t0, c.STORY.tGas, 'the run starts when the gas is gone');
  /* total rocky mass: the start's, less what was thrown out or fell into the Sun, at every snapshot and at times between */
  const tot = (B) => B.filter((b) => !b.giant).reduce((m, b) => m + b.m, 0), M0 = tot(S0);
  for (const t of D.snaps.map((q) => q[0]).concat(D.events.map((e) => e[0] + 1))) { const lost = D.gone.filter((g) => g[0] <= t).reduce((m, g) => m + g[2], 0); near(tot(c.impactState(D, t)) + lost, M0, 2e-3, `mass at ${t}`); }
  /* events in time order, each target there before its impact; the impactor gone after */
  let t0 = 0; for (const e of D.events) { assert(e[0] >= t0, 'time order'); t0 = e[0]; const before = c.impactState(D, e[0] - 1e-3), after = c.impactState(D, e[0]);
    assert(before.some((b) => b.id === e[1]) && before.some((b) => b.id === e[2]), 'both bodies before'); assert(!after.some((b) => b.id === e[2]), 'impactor merged'); }
  /* every starting protoplanet ends in exactly one body, or was lost */
  /* the page's hint for Follow Earth: the run shown ends with three rocky planets, and the one nearest 1 AU is built from nine protoplanets */
  const fin = c.impactState(D, D.tEnd).filter((b) => !b.giant); assert.equal(fin.length, 3, 'three rocky planets');
  const earth = fin.reduce((e, b) => (Math.abs(Math.log(b.a)) < Math.abs(Math.log(e.a)) ? b : e)); assert.equal(D.of[earth.id].length, 9, 'Earth from nine protoplanets');
  assert(Math.abs(D.tEnd - 153e6) < 1, 'the run reaches 150 million years after the gas');
  const f = c.finalOf(D), lost = new Set(D.gone.map((g) => g[1])); for (let id = 1; id <= 22; id++) assert(f[id] != null || lost.has(id) || D.events.some((e) => e[2] === id && lost.has(f[e[1]])), `body ${id} ends somewhere`);
});

group('the Moon-forming impact: the classification of planet, disk and escaping material; the Ida, Canup and Stewart moon mass; the saved run', () => {
  const { classify } = require('../../tools/solar-system-formation/moon.cjs');
  /* a planet of 1000 particles packed at the center, one particle on a circular orbit at 3 Earth radii (disk), one on a radial
     plunge from there (planet: its orbit dips inside), one faster than escape (escaping) */
  const n = 1003, f = { n, x: new Float64Array(3 * n), v: new Float64Array(3 * n), mat: new Int32Array(n) }, ME = 5.9722e24, m = ME / 1000, G = 6.6743e-11;
  let s = 7; const R = () => { s = (s * 16807) % 2147483647; return s / 2147483647 - 0.5; };
  for (let i = 0; i < 1000; i++) for (let q = 0; q < 3; q++) f.x[3 * i + q] = 4e6 * R();
  const r = 3 * 6.371e6, vc = Math.sqrt(G * 1000 * m / r);
  f.x[3000] = r; f.v[3001] = vc; f.x[3003] = r; f.v[3003] = -0.1 * vc; f.x[3006] = -r; f.v[3007] = 1.6 * vc; f.mat[1000] = 1; f.mat[1001] = 1; f.mat[1002] = 1;
  const c = classify(f, m); assert.deepEqual([c.cls[1000], c.cls[1001], c.cls[1002]], [1, 0, 2], 'disk, planet, escaping');
  /* the moon formula: M = 1.9 L/√(G M a_R) − 1.1 M_D with a_R = 2.9 R_p, for this one particle disk */
  near(c.Mmoon, 1.9 * c.LD / Math.sqrt(G * c.Mp * 2.9 * c.Rp) - 1.1 * c.MD, 1e-12);
  near(c.LD, m * r * vc, 1e-2, 'disk angular momentum about the planet');
  /* the saved run: Earth and Theia in the right proportion, frames in time order from before contact to a day after */
  global.window = global.window || {}; require('../../demos/solar-system-formation-data/moon.js'); const D = global.window.VD_SSF_MOON;
  near((D.n - D.nt) / D.n, D.setup.Mi / (D.setup.Mt + D.setup.Mi), 2 / D.n, 'Theia share of the particles');
  assert(D.frames[0][0] < 0 && D.frames[D.frames.length - 1][0] >= 23.9 * 3600, 'from before contact to a day after');
  for (let k = 1; k < D.frames.length; k++) assert(D.frames[k][0] > D.frames[k - 1][0], 'time order');
  assert(D.summary.disk > 0 && D.summary.moon > 0, 'a disk and a moon');
});

console.log(`${n} groups passed`);
