'use strict';
// Giant Planets, Rings and Moons: NASA data consistency, Roche limits, Kepler's third law, the resonances, the Mimas 2:1 place, Io's tidal heating and the rubble pile moon.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('giant-planets', 'G,DAY,HOUR,PLANETS,GIANTS,MOONS,RING_MOONS,RINGS,ROCHE_FLUID,ROCHE_RIGID,rocheUnit,rocheLimit,rocheUnits,kepPeriod,gmFromOrbit,density,spinQ,uniformFlattening,ilr21,kepler21,moonAt,meanLon,laplaceAngle,IO_K2Q,tidalHeat,IO_FLUX_OBS,tideSwing,makePile,settlePile,pileAt,pileClone,pileStep,largestPiece,PILE_DT,PILE_N,PILE_SEED,GAL_GM,GAL_DT,galStart,galStep,galEcc,galEnergy,pSat,nh4shK,solarH2,CLOUD_PL,cloudAir,moleFractions,adiabatT,cloudModel,cloudHeights,meanMolar,cpH2,CLOUDS');

let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const P = c.PLANETS, sat = P.saturn, jup = P.jupiter;

group('NASA data agree with each other: GM = G M, density from M and the mean radius, flattening from the two radii', () => {
  for (const k of [...c.GIANTS, 'earth']) { const p = P[k];
    near(c.G * p.M / 1e9, p.GM, 2e-4, `${k} GM`);
    near(c.density(p.M, p.Rm), p.rho, 4e-3, `${k} density`);
    near(1 - p.Rpol / p.Req, p.f, 2e-3, `${k} flattening`); }
  assert(sat.rho < 1000 && c.GIANTS.every((k) => k === 'saturn' || P[k].rho > 1000), 'only Saturn is less dense than water');
  for (const k in c.MOONS) for (const m of c.MOONS[k]) if (m.rho) assert(m.rho > 500 && m.rho < 3600, `${m.name} density`);
});

group('Roche constants: fluid 2.455 (Chandrasekhar 0.09009), rigid 3^(1/3); the unit R(ρ_P/ρ)^(1/3) is the same from the mass', () => {
  near(c.ROCHE_FLUID, 2.4552, 1e-4, 'fluid'); near(c.ROCHE_RIGID, 1.44225, 1e-5, 'rigid');
  for (const k of c.GIANTS) { const p = P[k]; near(c.rocheUnit(p, 920), p.Rm * Math.cbrt(p.rho / 920), 4e-3, `${k} unit`); }
  near(c.rocheLimit(sat, 920) / sat.Req, 2.152, 2e-3, 'Saturn, solid ice'); near(c.rocheLimit(sat, 500) / sat.Req, 2.637, 2e-3, 'Saturn, porous ice');
  near(c.rocheLimit(sat, 3000) / sat.Req, 1.451, 2e-3, 'Saturn, rock');
  near(c.rocheLimit(sat, 3000) / c.rocheLimit(sat, 920), Math.cbrt(920 / 3000), 1e-12, 'scales as ρ^(−1/3)');
});

group('every main ring lies inside the porous ice Roche limit, every big moon outside its own', () => {
  for (const k of c.GIANTS) { const p = P[k], lim = c.rocheLimit(p, 500);
    for (const [name, , out] of c.RINGS[k]) if (!/^(E ring|G ring|μ ring|ν ring|Thebe|Amalthea)/.test(name)) assert(out < lim, `${k} ${name} ${out} < ${lim}`);
    for (const m of c.MOONS[k]) if (m.rho) assert(m.a > c.rocheLimit(p, m.rho), `${m.name} outside its limit`); }
  assert(136780 < c.rocheLimit(sat, 500) && 136780 > c.rocheLimit(sat, 920), 'A ring edge: inside the 0.5 limit, outside the solid ice one');
});

group('Kepler: each Galilean moon gives Jupiter\'s GM within 0.1 %; Saturn\'s regular moons within 0.3 %; ring periods', () => {
  for (const m of c.MOONS.jupiter) near(c.gmFromOrbit(m.a, m.P * c.DAY), jup.GM, 1e-3, m.name);
  for (const m of c.MOONS.saturn) if (m.name !== 'Hyperion') near(c.gmFromOrbit(m.a, m.P * c.DAY), sat.GM, 3e-3, m.name);
  near(c.kepPeriod(sat.GM, 66900) / c.HOUR, 4.90, 2e-3, 'D ring inner edge');
  near(c.kepPeriod(sat.GM, 74658) / c.HOUR, 5.78, 2e-3, 'C ring inner edge');
  near(c.kepPeriod(sat.GM, 136780) / c.HOUR, 14.34, 2e-3, 'A ring outer edge');
});

group('resonances: Io:Europa 2.007, Europa:Ganymede 2.015, Enceladus:Dione 1.997; the Laplace angle stays at 180°', () => {
  const [I, E, Gm] = c.MOONS.jupiter, s = c.MOONS.saturn;
  near(E.P / I.P, 2.0073, 1e-4, 'Io:Europa'); near(Gm.P / E.P, 2.0147, 1e-4, 'Europa:Ganymede'); near(s[3].P / s[1].P, 1.9974, 1e-4, 'Enceladus:Dione');
  for (const t of [0, 100, 1000].map((d) => d * c.DAY)) { const L = c.laplaceAngle(c.meanLon(I, t), c.meanLon(E, t), c.meanLon(Gm, t));
    assert(Math.abs(L - 180) < 0.5, `Laplace angle ${L} at ${t / c.DAY} d`); }
});

group('Mimas 2:1: 117 528 km with J2, next to the B ring edge at 117 507 km; Kepler alone gives 116 870 km', () => {
  const mi = c.MOONS.saturn[0];
  near(c.ilr21(sat, mi.P), 117528, 3e-4, 'with J2'); near(c.kepler21(mi.a), 116870, 3e-4, 'Kepler');
  assert(Math.abs(c.ilr21(sat, mi.P) - 117507) < 200, 'beside the B ring edge');
});

group('moons on ellipses: periapsis a(1 − e), back after one period, Triton goes round backward', () => {
  const io = c.MOONS.jupiter[0], T = io.P * c.DAY;
  const r0 = c.moonAt(io, 0), r1 = c.moonAt(io, T); near(r1.x, r0.x, 1e-9, 'x after a period'); near(r1.y, r0.y, 1e-9, 'y after a period');
  let lo = Infinity, hi = 0; for (let k = 0; k < 2000; k++) { const r = c.moonAt(io, T * k / 2000).r; lo = Math.min(lo, r); hi = Math.max(hi, r); }
  near(lo, io.a * (1 - io.e), 1e-6, 'periapsis'); near(hi, io.a * (1 + io.e), 1e-6, 'apoapsis');
  const tr = c.MOONS.neptune[1], a0 = c.moonAt(tr, 0, 1), a1 = c.moonAt(tr, 0.01 * Math.abs(tr.P) * c.DAY, 1);
  assert(a0.x * a1.y - a0.y * a1.x < 0, 'Triton turns clockwise seen from the north');
  const ga = c.moonAt(c.MOONS.jupiter[2], 0); assert(ga.x * c.moonAt(c.MOONS.jupiter[2], 3600).y - ga.y * c.moonAt(c.MOONS.jupiter[2], 3600).x > 0, 'Ganymede counterclockwise');
});

group('Io\'s tidal heating: 8.9 × 10¹³ W at e = 0.004 (2.1 W/m²), as e²; the tide swings by ±3e', () => {
  const io = c.MOONS.jupiter[0], h = (e) => c.tidalHeat(c.IO_K2Q, jup.M, io.R, io.a, io.P, e), A = 4 * Math.PI * (io.R * 1e3) ** 2;
  near(h(0.004), 8.87e13, 5e-3, 'heat'); near(h(0.004) / A, 2.13, 5e-3, 'flux'); near(h(0.008) / h(0.004), 4, 1e-12, 'e²');
  assert(h(0) === 0, 'circle: no heating'); assert(h(0.004) / A < c.IO_FLUX_OBS && h(0.004) / A > 0.5 * c.IO_FLUX_OBS, 'same size as measured');
  near(c.tideSwing(0.004).stretch, 0.012, 1e-12, 'stretch'); near(c.tideSwing(0.004).sway, 0.4584, 1e-3, 'sway');
});

group('spin: a uniform planet would bulge more (5q/4) than each real giant does', () => {
  for (const k of c.GIANTS) { const p = P[k], q = c.spinQ(p); assert(c.uniformFlattening(q) > p.f, k); assert(p.f > 0.4 * q, `${k} f vs q`); }
  near(c.spinQ(sat), 0.1548, 3e-3, 'Saturn q');
});

group('rubble pile: breaks inside 1.66 Roche units within two orbits, holds at 2.4 (a rock moon at 1.4 Saturn radii) for two orbits', () => {
  const base = c.settlePile(c.makePile(c.PILE_N, c.PILE_SEED));
  near(c.rocheUnits(1.4 * sat.Req, sat, 3000), 2.368, 2e-3, 'rock at 1.4 R'); near(c.rocheUnits(1.4 * sat.Req, sat, 920), 1.597, 2e-3, 'ice at 1.4 R');
  const run = (d, orbits) => { const st = c.pileAt(c.pileClone(base), d), T = 2 * Math.PI / st.Om; while (st.t < orbits * T) c.pileStep(st, c.PILE_DT, 0); return c.largestPiece(st); };
  assert(run(1.6, 2) < 0.3, 'ice moon at 1.6 units comes apart');
  assert(run(2.37, 2) > 0.95, 'rock moon at 2.37 units holds');
});

group('Galilean moons pulling on each other: energy holds, periods match NASA, Europa pumps Io from a circle to e near 0.009 and back', () => {
  /* each moon's GM over Jupiter's agrees with the NASA masses to 0.1 % (Io 8.93e22 kg, Europa 4.80e22, Ganymede 1.48e23, Callisto 1.08e23) */
  [[0, 8.93e22], [1, 4.80e22], [2, 1.4819e23], [3, 1.0759e23]].forEach(([i, M]) => near(c.GAL_GM[i] * 1e9 / c.G, M, 2e-3, `GM ${i}`));
  const st = c.galStart(), E0 = c.galEnergy(st), e0 = c.galEcc(st, 0), DAY = c.DAY, eAll = [], th0 = Math.atan2(st.y[0], st.x[0]); let laps = 0, prev = th0, tLap = 0;
  while (st.t < 450 * DAY) { c.galStep(st); const th = Math.atan2(st.y[0], st.x[0]); if (prev < th0 && th >= th0 && st.t > DAY) { laps++; tLap = st.t; } prev = th;
    if (Math.round(st.t / c.GAL_DT) % 25 === 0) eAll.push([st.t / DAY, c.galEcc(st, 0)]); }
  near(c.galEnergy(st), E0, 1e-8, 'energy');
  /* Io's mean period from its laps (sidereal, within 0.1 % of NASA's 1.769138 d; Europa's pull and the bulge shift it a little) */
  near(tLap / laps / DAY, 1.769138, 1e-3, 'Io period');
  const emax = Math.max(...eAll.filter(([d]) => d < 300).map((q) => q[1])), tmax = eAll.find((q) => q[1] === emax)[0];
  assert(e0 < 1e-12, 'Io starts on a circle'); assert(emax > 0.0085 && emax < 0.0095, `Io's largest e ${emax}`); assert(tmax > 180 && tmax < 250, `at day ${tmax}`);
  const back = Math.min(...eAll.filter(([d]) => d > 380).map((q) => q[1])); assert(back < 0.0025, `Io's orbit rounds off again near day 440 (${back})`);
  const noE = c.galStart([1, 0, 1, 1]); let e2 = 0; while (noE.t < 300 * DAY) { c.galStep(noE); e2 = Math.max(e2, c.galEcc(noE, 0)); }
  assert(e2 < 0.001, `without Europa Io stays nearly round (${e2})`);
});

group('Clouds: vapor pressures hit their triple points and boiling point; the adiabat; NH4SH constant', () => {
  near(c.pSat('h2o', 273.16).p, 0.00611657, 1e-5, 'water triple point (both fits)'); near(c.pSat('h2o', 273.159).p, 0.00611657, 1e-4, 'ice side');
  near(c.pSat('h2o', 373.124).p, 1.01325, 1e-4, 'water boils at 1 atm (ITS-90 99.974 °C)');
  near(c.pSat('nh3', 195.41).p, 0.06091, 0.01, 'ammonia triple point 6.091 kPa'); near(c.pSat('ch4', 90.68).p, 0.11696, 0.02, 'methane triple point 11.696 kPa');
  near(c.pSat('h2s', 187.57).p, 0.2325, 0.01, 'hydrogen sulfide triple point 23.25 kPa');
  assert(!c.pSat('nh3', 200).ok && c.pSat('nh3', 200).p > c.pSat('nh3', 195.41).p, 'past the ice fit: flagged, still rising');
  near(c.nh4shK(250), Math.pow(10, 14.82 - 4705 / 250) * 1.01325 ** 2, 1e-12, 'Lewis 1969');
  near(c.cpH2(300), 3.4698, 1e-6, 'normal H2 cp/R at 300 K'); near(c.solarH2('o'), 2 * 4.898e-4, 1e-3, 'solar O/H2');
  /* Jupiter's adiabat from 165 K at 1 bar reaches about 425 K at 22 bar (the Galileo probe measured 427.7 K at 22 bar, Seiff et al. 1998) */
  const a = c.cloudAir('jupiter'), xHe = a.he / (1 + a.he); near(c.adiabatT(165, xHe, 22), 425, 0.01, 'Jupiter 22 bar');
  near(c.adiabatT(165, xHe, 1), 165, 1e-12, '1 bar');
  const x = c.moleFractions(a.he, a.r); near(Object.values(x).reduce((s, v) => s + v, 0), 1, 1e-12, 'fractions sum to 1'); near(x.h2o, 2.5e-3, 1e-9, 'Juno water');
});

group('Clouds: Jupiter\'s three decks (Weidenschilling and Lewis style models: NH3 ~0.8, NH4SH ~2.3, H2O ~6 bar), Saturn deeper, the ice giants swap ammonia for H2S', () => {
  const run = (k, cm) => { const a = c.cloudAir(k); if (cm) for (const g in cm) a.r[g] = cm[g] * c.solarH2({ h2o: 'o', h2s: 's', nh3: 'n', ch4: 'c' }[g]); const d = c.CLOUD_PL[k]; return c.cloudModel(d.T1, a, d.bottom, 0.3, 800); };
  const base = (m, k) => (m.bases.find((b) => b.k === k) || {}).P;
  const J = run('jupiter');
  assert.strictEqual(J.bases.map((b) => b.k).join(), 'h2o,nh4sh,nh3', 'Jupiter: water, NH4SH, ammonia');
  near(base(J, 'nh3'), 0.83, 0.03, 'NH3'); near(base(J, 'nh4sh'), 2.46, 0.03, 'NH4SH'); near(base(J, 'h2o'), 5.8, 0.03, 'H2O');
  /* Wong et al. 2015's equilibrium model with the probe gases: NH4SH 2.32 bar, water 5.96 bar; Li et al. 2018 (moist adiabat): NH3 0.83 bar */
  near(base(J, 'nh4sh'), 2.32, 0.08, 'vs Wong 2015'); near(base(J, 'h2o'), 5.96, 0.05, 'vs Wong 2015'); near(base(J, 'nh3'), 0.83, 0.02, 'vs Li 2018');
  /* above a base the gas follows its vapor pressure; NH4SH takes one of each; mass is conserved */
  for (const l of J.lev) { assert(l.x.nh3 <= J.lev[0].x.nh3 + 1e-15 && l.x.h2s <= J.lev[0].x.h2s + 1e-15, 'gases only decrease going up'); }
  const top = J.lev[J.lev.length - 1]; assert(top.x.h2s < 1e-3 * J.lev[0].x.h2s, 'Jupiter\'s H2S is used up by NH4SH');
  const dry = run('jupiter', { h2o: 0.5 }), wet = run('jupiter', { h2o: 10 });
  assert(base(dry, 'h2o') < base(J, 'h2o') && base(wet, 'h2o') > base(J, 'h2o'), 'more water, deeper base'); near(base(dry, 'h2o'), 4.18, 0.03, 'probe'); near(base(wet, 'h2o'), 7.65, 0.03, 'wet');
  near(base(wet, 'nh3'), base(J, 'nh3'), 0.01, 'ammonia deck barely moves');
  const Sa = run('saturn'); assert(base(Sa, 'nh3') > base(J, 'nh3') && base(Sa, 'h2o') > base(J, 'h2o'), 'Saturn deeper');
  near(base(Sa, 'nh3'), 1.58, 0.03, 'Saturn NH3'); near(base(Sa, 'nh4sh'), 5.37, 0.03, 'Saturn NH4SH'); near(base(Sa, 'h2o'), 16.1, 0.03, 'Saturn water');
  for (const k of ['uranus', 'neptune']) { const U = run(k); assert(!base(U, 'nh3') && base(U, 'h2s') && base(U, 'ch4'), `${k}: H2S ice and methane, no ammonia cloud`); }
  near(base(run('uranus'), 'ch4'), 1.18, 0.03, 'Uranus methane (observed near 1.2 bar)'); near(base(run('neptune'), 'ch4'), 1.27, 0.03, 'Neptune methane');
  near(base(run('uranus'), 'h2s'), 5.77, 0.03, 'Uranus H2S'); near(base(run('neptune'), 'h2s'), 6.24, 0.03, 'Neptune H2S');
  /* heights: hydrostatic, dz = (R T / μ g) d ln P; from 1 bar to 0.5 bar on Jupiter it is H ln 2 with H at the mean temperature (about 14 km) */
  const a = c.cloudAir('jupiter'), mu = c.meanMolar(c.moleFractions(a.he, a.r)), m = c.cloudModel(165, a, 1, 0.5, 400), z = c.cloudHeights(m.lev, 24.79, mu);
  const Tm = m.lev.reduce((s, l) => s + l.T, 0) / m.lev.length; near(z[z.length - 1], 8.31446261815324 * Tm / (mu * 1e-3 * 24.79) * Math.log(2) / 1e3, 3e-3, 'Jupiter 1 to 0.5 bar');
  assert(z[z.length - 1] > 13 && z[z.length - 1] < 16, `about 14 km (${z[z.length - 1]})`);
});

console.log(`giant-planets: ${n} groups passed`);
