'use strict';
/* Life in the Universe: the lesson's clock and calendar times, habitable zones and lifetimes, the brightening Sun, the no greenhouse
   temperature, the Drake equation and spacing, and the simulated galaxy's mean count. */
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const C = core('life-in-the-universe', 'EVENTS,EONS,beforeEnd,onClock,HZ_IN,HZ_OUT,SSUN,SIGMA,ALBEDO,T0,hz,lumOfMass,lifeGyr,tempK,SUN_AGE,sunLum,sunLeavesZone,STARS,DISK_R,drake,spacing,galaxy,galaxyStep');
const near = (a, b, rel, msg) => assert.ok(Math.abs(a - b) <= rel * Math.abs(b), `${msg}: ${a} against ${b} (allowed ${rel * 100}%)`);
let n = 0; const ok = (s) => { n++; console.log(`ok ${n} ${s}`); };
const ev = (id) => C.EVENTS.find((e) => e.id === id).ago;

/* 1. the lesson's 75 minute class (Earth 4.6 billion years old): life at minute 17.9, oxygen 35.9, animals 66.2, dinosaurs 73.9,
   humans 0.29 s before the end; on a 365 day calendar the dinosaurs die on 26 December */
{
  const T = 4.6e9, Cm = 75;
  near(C.onClock(ev('life'), T, Cm), 17.93, 1e-3, 'life'); near(C.onClock(ev('oxygen'), T, Cm), 35.87, 1e-3, 'oxygen');
  near(C.onClock(ev('animals'), T, Cm), 66.22, 1e-3, 'animals'); near(C.onClock(ev('dinos'), T, Cm), 73.92, 1e-3, 'dinosaurs');
  near(C.beforeEnd(ev('humans'), T, Cm) * 60, 0.2935, 1e-3, 'humans, seconds before the end');
  const dinoDay = C.onClock(ev('dinos'), T, 365); assert.ok(dinoDay > 359 && dinoDay < 360, `dinosaurs on day ${dinoDay} (26 December)`);
  assert.equal(C.onClock(0, T, Cm), Cm); assert.equal(C.onClock(T, T, Cm), 0);
  for (let i = 1; i < C.EVENTS.length; i++) assert.ok(C.EVENTS[i].ago < C.EVENTS[i - 1].ago, 'events in order');
  for (let i = 1; i < C.EONS.length; i++) assert.equal(C.EONS[i][1], C.EONS[i - 1][2], 'eons meet');
  ok('class clock: life 17.9, oxygen 35.9, animals 66.2, dinosaurs 73.9 min; humans 0.29 s before the end');
}

/* 2. habitable zones: the Sun 0.95 to 1.4 au; L = 0.25 gives 0.48 to 0.70; L = 16 gives 3.8 to 5.6 (lesson); Proxima b inside its zone */
{
  assert.equal(JSON.stringify(C.hz(1)), "[0.95,1.4]");
  const a = C.hz(0.25), b = C.hz(16); near(a[0], 0.475, 1e-12, 'L 0.25 inner'); near(a[1], 0.70, 1e-12, 'L 0.25 outer'); near(b[0], 3.8, 1e-12, 'L 16 inner'); near(b[1], 5.6, 1e-12, 'L 16 outer');
  const P = C.STARS.proxima, z = C.hz(P.L); assert.ok(P.planets[0][1] > z[0] && P.planets[0][1] < z[1], `Proxima b ${P.planets[0][1]} in ${z}`);
  const Tz = C.hz(C.STARS.trappist.L), inside = C.STARS.trappist.planets.filter(([, d]) => d >= Tz[0] && d <= Tz[1]).map(([k]) => k).join('');
  assert.equal(inside, 'e', `TRAPPIST-1 planets in the zone by the √L rule (the page says air models add f and g): ${inside}`);
  ok(`zones: L 0.25 gives ${a.map((v) => v.toFixed(3))}, L 16 gives ${b}; Proxima b inside ${z.map((v) => v.toFixed(4))}; TRAPPIST-1 e inside by the √L rule`);
}

/* 3. lifetimes: L = M⁴ and t = 10 Gyr × M/L = 10/M³: 2 solar masses 1.25 Gyr, 1.5 gives 2.96, 0.8 gives 19.5 */
{
  near(C.lifeGyr(2, C.lumOfMass(2)), 1.25, 1e-12, '2 Msun'); near(C.lifeGyr(1.5, C.lumOfMass(1.5)), 2.963, 1e-3, '1.5 Msun'); near(C.lifeGyr(0.8, C.lumOfMass(0.8)), 19.53, 1e-3, '0.8 Msun');
  near(C.lifeGyr(1, 1), 10, 0, 'the Sun');
  ok('lifetimes 1.25, 2.96, 19.5 Gyr');
}

/* 4. the brightening Sun (Gough 1981): 1 now, 1/1.4 = 0.714 at birth; it pushes the inner edge past 1 au after 5.68 Gyr */
{
  near(C.sunLum(C.SUN_AGE), 1, 1e-12, 'now'); near(C.sunLum(0), 1 / 1.4, 1e-12, 'at birth');
  const t = C.sunLeavesZone(1); near(C.hz(C.sunLum(t))[0], 1, 1e-9, 'inner edge at 1 au then'); near(t, 5.684, 1e-3, 'age then');
  ok(`Sun 71.4 % as bright at birth; Earth leaves the zone at an age of ${t.toFixed(2)} Gyr, ${(t - C.SUN_AGE).toFixed(2)} Gyr from now`);
}

/* 5. no greenhouse: T0 = (S(1 − A)/4σ)^¼ = 254.6 K with S and σ from constants.js; T ∝ L^¼/√d */
{
  near(C.SSUN, 1361, 0, 'S'); near(C.SIGMA, 5.670374419e-8, 0, 'σ');
  near(C.T0, 254.58, 1e-4, 'T0'); near(C.tempK(16, 4), C.T0 * 2 / 2, 1e-12, 'L 16 at 4 au = Earth'); near(C.tempK(1, 0.25), 2 * C.T0, 1e-12, 'quarter distance: twice T');
  ok(`no greenhouse T0 = ${C.T0.toFixed(2)} K`);
}

/* 6. Drake (lesson): R* fp ne fl fi fc = 3 × 1 × 0.1 × 1 × 0.01 × 0.5 = 0.0015; N = 1.5 for L = 1,000 and 1,500 for 10⁶;
   spacing over a disk of radius 50,000 ly: √(π 50,000² / N), 72,000 ly for N = 1.5 and 2,300 ly for 1,500; the lesson's 8,900 and 890 ly for N = 100 and 10,000 */
{
  const f = { R: 3, fp: 1, ne: 0.1, fl: 1, fi: 0.01, fc: 0.5, L: 1000 };
  near(C.drake(f), 1.5, 1e-12, 'N for L 1,000'); near(C.drake({ ...f, L: 1e6 }), 1500, 1e-12, 'N for L 10⁶');
  near(C.spacing(1.5), Math.sqrt(Math.PI * 50000 ** 2 / 1.5), 1e-12, 'spacing formula');
  near(C.spacing(1500) / C.spacing(1.5), 1 / Math.sqrt(1000), 1e-12, 'a thousand times N: √1000 closer');
  near(C.spacing(100), 8900, 0.005, 'lesson example 13: N = 100 gives about 8,900 ly'); near(C.spacing(10000), 890, 0.005, 'N = 10,000 gives about 890 ly');
  ok(`Drake: N 1.5 and 1,500; spacing ${C.spacing(1.5).toFixed(0)} and ${C.spacing(1500).toFixed(0)} ly`);
}

/* 7. the simulated galaxy: births are a Poisson process, so the long run mean count is N = rate × L */
{
  for (const [L, tol] of [[1000, 0.15], [1e6, 0.03]]) {
    const f = { R: 3, fp: 1, ne: 0.1, fl: 1, fi: 0.01, fc: 0.5, L }, G = C.galaxy(7), dt = L / 50;
    for (let k = 0; k < 200; k++) C.galaxyStep(G, f, dt);
    let s = 0, m = 0; for (let k = 0; k < 4000; k++) { s += C.galaxyStep(G, f, dt); m++; }
    const mean = s / m; near(mean, C.drake(f), tol, `mean count for L ${L}`);
    for (const c of G.civ) assert.ok(Math.hypot(c.x, c.y) <= C.DISK_R && G.t - c.b < L, 'inside the disk and alive');
  }
  ok('simulated galaxy: mean count equals N for L = 1,000 and 10⁶');
}
console.log(`${n} groups passed`);
