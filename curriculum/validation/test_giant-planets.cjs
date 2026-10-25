'use strict';
// Giant Planets, Rings and Moons: NASA data consistency, Roche limits, Kepler's third law, the resonances, the Mimas 2:1 place, Io's tidal heating and the rubble pile moon.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('giant-planets', 'G,DAY,HOUR,PLANETS,GIANTS,MOONS,RING_MOONS,RINGS,ROCHE_FLUID,ROCHE_RIGID,rocheUnit,rocheLimit,rocheUnits,kepPeriod,gmFromOrbit,density,spinQ,uniformFlattening,ilr21,kepler21,moonAt,meanLon,laplaceAngle,IO_K2Q,tidalHeat,IO_FLUX_OBS,tideSwing,makePile,settlePile,pileAt,pileClone,pileStep,largestPiece,PILE_DT,PILE_N,PILE_SEED');

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

console.log(`giant-planets: ${n} groups passed`);
