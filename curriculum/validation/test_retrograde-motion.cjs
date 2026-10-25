'use strict';
// Retrograde Motion and World Models: JPL orbits against an independent ephemeris, event dates against published ones, synodic
// periods, where retrograde motion happens, Copernicus's circles, the Ptolemy fit, the phases of Venus in both models, constellations.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('retrograde-motion', 'EL,PLANETS,PTOL,VALID,SUN_ER,elements,kepler,helio,circle,ptolemy,geo,sunGeo,look,lonlat,rate,sidereal,synodic,findEvent,toJD,fromJD,wrap,norm,meanL,constellationAt,raDec,SKY');

let n = 0;
function group(name, f) { f(); n++; console.log('PASS', name); }
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b} ± ${tol}, got ${a}`);
const at = (jd) => { const d = c.fromJD(jd); return `${d.y}-${String(d.m).padStart(2, '0')}-${String(d.d).padStart(2, '0')} ${d.h.toFixed(2)} h`; };
const hoursFrom = (jd, y, m, d, h) => (jd - (c.toJD(y, m, d) + h / 24)) * 24;

group('calendar: J2000.0 is 2000 Jan 1 12:00 (JD 2451545.0); dates round trip from 1800 to 2050', () => {
  assert.strictEqual(c.toJD(2000, 1, 1.5), 2451545.0);
  assert.strictEqual(c.toJD(1858, 11, 17), 2400000.5);   /* the start of Modified Julian Dates */
  for (let jd = c.VALID[0]; jd < c.VALID[1]; jd += 997.3) { const d = c.fromJD(jd); near(c.toJD(d.y, d.m, d.d + d.h / 24), jd, 1e-6, 'round trip'); }
});

group('Kepler\'s equation solved to 1e-12; the heliocentric distance is a(1 − e cos E); a planet returns after one sidereal period', () => {
  for (const e of [0, 0.0167, 0.0934, 0.2056]) for (let M = -3; M <= 3; M += 0.37) { const E = c.kepler(M, e); near(E - e * Math.sin(E), M, 1e-12, `e ${e}`); }
  for (const k of c.PLANETS) {
    const jd = c.toJD(2010, 3, 1), o = c.elements(k, jd), M = c.wrap(o.L - o.w) * Math.PI / 180, E = c.kepler(M, o.e), r = Math.hypot(...c.helio(k, jd));
    near(r, o.a * (1 - o.e * Math.cos(E)), 1e-12, `${k} r`);
    const P = c.sidereal(k), a1 = c.lonlat(c.helio(k, jd)).lam, a2 = c.lonlat(c.helio(k, jd + P)).lam;
    near(Math.abs(c.wrap(a2 - a1)), 0, 0.12, `${k} back after ${P.toFixed(1)} d`);   /* the perihelion moves a little in one period */
  }
});

group('geocentric positions match an independent ephemeris (astronomy-engine 2.1.19, VSOP87) to the table\'s accuracy', () => {
  /* [planet, date (0 h TT), λ, β] from astronomy-engine's GeoVector (light time included, no aberration), J2000 ecliptic */
  const REF = [['mercury', 1900, 3, 1, 356.892, 0.232], ['venus', 1950, 7, 1, 64.873, -1.73], ['mars', 2003, 8, 28, 335.169, -6.635], ['mars', 2025, 1, 16, 115.897, 4.284],
    ['jupiter', 1990, 1, 1, 95.347, -0.114], ['saturn', 2010, 6, 1, 177.681, 2.421], ['venus', 2025, 3, 23, 2.334, 8.414], ['mars', 1850, 1, 1, 83.524, 3.332], ['saturn', 2045, 1, 1, 246.476, 1.774]];
  const TOL = { mercury: 0.03, venus: 0.04, mars: 0.06, jupiter: 0.2, saturn: 0.25 };
  for (const [k, y, m, d, lam, beta] of REF) { const q = c.lonlat(c.geo('kepler', k, c.toJD(y, m, d))); near(c.wrap(q.lam - lam), 0, TOL[k], `${k} ${y} λ`); near(q.beta, beta, TOL[k] / 2, `${k} ${y} β`); }
});

group('events land on their published dates: Mars 2024 to 2025, the 2020 and 2003 oppositions, Venus 2025, Jupiter 2023, Saturn 2024', () => {
  const ev = (k, kind, y, m, d, dir) => c.findEvent('kepler', k, kind, c.toJD(y, m, d), dir || 1).jd;
  /* Mars: stationary 2024 Dec 7 and 2025 Feb 24, opposition 2025 Jan 16 02:32 UT (USNO and Sky & Telescope almanacs) */
  near(hoursFrom(ev('mars', 'station', 2024, 11, 1), 2024, 12, 7, 0), 0, 24, 'Mars station 1');
  near(hoursFrom(ev('mars', 'opposition', 2024, 11, 1), 2025, 1, 16, 2.53), 0, 1.5, 'Mars opposition 2025');
  near(hoursFrom(ev('mars', 'station', 2025, 1, 20), 2025, 2, 24, 0), 0, 24, 'Mars station 2');
  near(hoursFrom(ev('mars', 'opposition', 2020, 9, 1), 2020, 10, 13, 23.4), 0, 2, 'Mars opposition 2020');
  near(hoursFrom(ev('mars', 'opposition', 2003, 8, 1), 2003, 8, 28, 17.9), 0, 2, 'Mars opposition 2003');
  /* Venus: greatest eastern elongation 2025 Jan 10 (47.2°), inferior conjunction 2025 Mar 23 01 UT, superior conjunction 2026 Jan 6 */
  const ge = ev('venus', 'greatest', 2025, 1, 1); near(hoursFrom(ge, 2025, 1, 10, 0), 0, 24, 'Venus greatest elongation'); near(c.look('kepler', 'venus', ge).elong, 47.2, 0.1, 'its elongation');
  near(hoursFrom(ev('venus', 'inferior', 2025, 1, 1), 2025, 3, 23, 1), 0, 2, 'Venus inferior conjunction');
  near(hoursFrom(ev('venus', 'superior', 2025, 6, 1), 2026, 1, 6, 15), 0, 12, 'Venus superior conjunction');
  near(hoursFrom(ev('jupiter', 'opposition', 2023, 6, 1), 2023, 11, 3, 5), 0, 6, 'Jupiter opposition 2023');
  near(hoursFrom(ev('saturn', 'opposition', 2024, 6, 1), 2024, 9, 8, 4), 0, 6, 'Saturn opposition 2024');
  /* searching backward finds the same event */
  near(ev('mars', 'opposition', 2025, 3, 1, -1), ev('mars', 'opposition', 2024, 11, 1), 1e-3, 'backward search');
});

group('synodic periods: 1/S = 1/P − 1/P⊕ gives Mars 779.9 d, Venus 583.9 d, Jupiter 398.9 d; oppositions 1900 to 2050 average exactly that', () => {
  near(c.synodic('mars'), 779.94, 0.05, 'Mars'); near(c.synodic('venus'), 583.92, 0.05, 'Venus'); near(c.synodic('jupiter'), 398.88, 0.05, 'Jupiter');
  near(c.synodic('saturn'), 378.09, 0.05, 'Saturn'); near(c.synodic('mercury'), 115.88, 0.05, 'Mercury');
  near(c.sidereal('earth'), 365.256, 0.002, 'sidereal year'); near(c.sidereal('mars'), 686.98, 0.02, 'Mars sidereal');
  for (const [k, kind] of [['mars', 'opposition'], ['venus', 'inferior'], ['jupiter', 'opposition']]) {
    const ts = []; let t = c.toJD(1900, 1, 1), e; while ((e = c.findEvent('kepler', k, kind, t, 1)) && e.jd < c.toJD(2050, 1, 1)) { ts.push(e.jd); t = e.jd + 1; }
    const gaps = ts.slice(1).map((x, i) => x - ts[i]), mean = (ts[ts.length - 1] - ts[0]) / (ts.length - 1);
    near(mean, c.synodic(k), k === 'mars' ? 3 : 1, `${k}: ${ts.length} events, mean spacing`);
    /* Mars's elliptical orbit spreads single gaps from 764 to 811 days */
    if (k === 'mars') { near(Math.min(...gaps), 764, 3, 'shortest Mars gap'); near(Math.max(...gaps), 811, 3, 'longest Mars gap'); }
  }
});

group('retrograde motion happens only around opposition (superior planets) or inferior conjunction (Mercury, Venus)', () => {
  for (const k of c.PLANETS) {
    let retro = 0, bad = 0;
    for (let t = c.toJD(1990, 1, 1); t < c.toJD(2030, 1, 1); t += 1) {
      if (c.rate('kepler', k, t) >= 0) continue; retro++;
      const q = c.look('kepler', k, t);
      if (c.EL[k].inner ? Math.abs(q.elong) > 30 || q.d > 1 : Math.abs(q.elong) < 90) bad++;
    }
    assert(retro > 0 && bad === 0, `${k}: ${retro} retrograde days, ${bad} away from opposition or inferior conjunction`);
  }
  /* Mars's 2024 to 2025 loop: 79 days retrograde, centered near the opposition */
  const s1 = c.findEvent('kepler', 'mars', 'station', c.toJD(2024, 11, 1), 1).jd, s2 = c.findEvent('kepler', 'mars', 'station', s1 + 1, 1).jd, op = c.findEvent('kepler', 'mars', 'opposition', s1, 1).jd;
  near(s2 - s1, 79, 1.5, 'Mars retrograde length'); assert(op > s1 && op < s2, 'opposition inside the loop');
  near(Math.abs(c.wrap(c.look('kepler', 'mars', s1).lam - c.look('kepler', 'mars', s2).lam)), 19.2, 0.3, 'loop width in λ, station to station');
});

group('Copernicus\'s circles: loops at about the right times, but Mars lands up to 33° off near a close opposition', () => {
  let worst = 0; for (let t = c.toJD(1900, 1, 1); t < c.toJD(2050, 1, 1); t += 5) worst = Math.max(worst, Math.abs(c.wrap(c.lonlat(c.geo('copernicus', 'mars', t)).lam - c.lonlat(c.geo('kepler', 'mars', t)).lam)));
  near(worst, 33.2, 0.6, 'largest miss for Mars');
  const real = c.findEvent('kepler', 'mars', 'opposition', c.toJD(2020, 6, 1), 1).jd, cop = c.findEvent('copernicus', 'mars', 'opposition', c.toJD(2020, 6, 1), 1).jd;
  near(cop - real, -19, 2, 'circles put the 2020 opposition 19 days early');
  /* each body on its circle stays at distance a from the Sun */
  for (const k of [...c.PLANETS, 'earth']) near(Math.hypot(...c.circle(k, c.toJD(2031, 4, 4))), c.EL[k].a[0], 1e-12, `${k} on its circle`);
});

group('Ptolemy: the equant sweeps steadily, the epicycle stays parallel to the mean Sun, and the stored fit is the least squares best', () => {
  const t = c.toJD(2012, 5, 5);
  for (const k of c.PLANETS) {
    const p = c.ptolemy(k, t), inner = c.EL[k].inner, sunL = c.meanL('earth', t) + 180, E = [p.pos[0] - p.C[0], p.pos[1] - p.C[1], p.pos[2] - p.C[2]];
    near(Math.hypot(...E), c.PTOL[k].r, 1e-12, `${k} epicycle radius`);
    if (inner) {   /* the deferent lies in the ecliptic: C is on it, seen from the equant at the mean Sun's longitude */
      near(Math.hypot(p.C[0] - p.D[0], p.C[1] - p.D[1]), 1, 1e-12, `${k} on the deferent`);
      near(c.wrap(Math.atan2(p.C[1] - p.Q[1], p.C[0] - p.Q[0]) * 180 / Math.PI - sunL), 0, 1e-9, `${k} equant`);
    } else near(c.wrap(Math.atan2(E[1], E[0]) * 180 / Math.PI - sunL), 0, 1e-9, `${k} epicycle parallel to the mean Sun`);
  }
  const data = (k) => { const a = []; for (let tt = c.toJD(1900, 1, 1); tt <= c.toJD(2050, 1, 1); tt += 5) a.push([tt, c.lonlat(c.geo('kepler', k, tt)).lam]); return a; };
  const rms = (k, D, q) => { const P = { ...c.PTOL, [k]: { ...c.PTOL[k], ...q } }; let s = 0, mx = 0; for (const [tt, l] of D) { const d = c.wrap(c.lonlat(c.ptolemy(k, tt, P).pos).lam - l); s += d * d; mx = Math.max(mx, Math.abs(d)); } return [Math.sqrt(s / D.length), mx]; };
  const WANT = { mercury: [1.66, 3.4], venus: [0.12, 0.32], mars: [0.30, 1.4], jupiter: [0.071, 0.17], saturn: [0.051, 0.16] };
  for (const k of c.PLANETS) {
    const D = data(k), q0 = { e: c.PTOL[k].e, A: c.PTOL[k].A, r: c.PTOL[k].r }, [r0, m0] = rms(k, D, q0);
    assert(r0 <= WANT[k][0] + 0.005 && m0 <= WANT[k][1], `${k}: rms ${r0.toFixed(3)}°, max ${m0.toFixed(2)}°`);
    for (const [key, h] of [['e', 0.002], ['A', 1], ['r', 0.002]]) for (const s of [-1, 1]) {
      const [r1] = rms(k, D, { ...q0, [key]: q0[key] + s * h }); assert(r1 >= r0 - 1e-4, `${k}: moving ${key} by ${s * h} lowers the rms (${r1} < ${r0})`);
    }
  }
  /* Mars's fitted sizes are Ptolemy's own (Almagest X.7: eccentricity 6 and epicycle 39;30 parts of 60) */
  near(c.PTOL.mars.e, 6 / 60, 0.002, 'Mars e'); near(c.PTOL.mars.r, 39.5 / 60, 0.002, 'Mars r');
  /* the epicycle sizes are close to the Sun centered ratios: 1/a for the superior planets, a for the inferior */
  for (const k of c.PLANETS) { const a = c.EL[k].a[0]; near(c.PTOL[k].r, c.EL[k].inner ? a : 1 / a, 0.01, `${k} epicycle against the orbit ratio`); }
});

group('Galileo\'s test: in the real sky Venus goes from new to full and shrinks 6 times; in Ptolemy\'s it is never more than half lit', () => {
  let minK = 1, maxK = 0, minP = 1, maxP = 0, big = 0, small = 1e9, rmin = 1e9, rmax = 0;
  for (let t = c.toJD(1900, 1, 1); t < c.toJD(2050, 1, 1); t += 3) {
    const k = c.look('kepler', 'venus', t), p = c.look('ptolemy', 'venus', t);
    minK = Math.min(minK, k.lit); maxK = Math.max(maxK, k.lit); minP = Math.min(minP, p.lit); maxP = Math.max(maxP, p.lit);
    big = Math.max(big, k.size); small = Math.min(small, k.size); rmin = Math.min(rmin, p.rel); rmax = Math.max(rmax, p.rel);
  }
  assert(minK < 0.02 && maxK > 0.995, `real Venus lit from ${minK} to ${maxK}`);
  assert(maxP < 0.5, `Ptolemy's Venus at most ${maxP} lit`);
  near(big, 63, 1, 'largest Venus (″), 2R/0.264 AU'); near(small, 9.7, 0.2, 'smallest Venus (″), 2R/1.73 AU');
  assert(rmax / rmin > 5.5, `Ptolemy's Venus also changes size, ${(rmax / rmin).toFixed(1)} times`);
  /* lit fraction = (1 + cos α)/2, and at the 2025 inferior conjunction the real Venus is about 1 % lit, 60″ across */
  const ic = c.findEvent('kepler', 'venus', 'inferior', c.toJD(2025, 1, 1), 1).jd, q = c.look('kepler', 'venus', ic);
  near(q.lit, (1 + Math.cos(q.alpha * Math.PI / 180)) / 2, 1e-12, 'lit fraction'); near(q.lit * 100, 1, 0.6, 'lit %'); near(q.size, 59.4, 1, 'size');
  /* Mars is never less than 84 % lit */
  let mm = 1; for (let t = c.toJD(1990, 1, 1); t < c.toJD(2030, 1, 1); t += 2) mm = Math.min(mm, c.look('kepler', 'mars', t).lit); near(mm, 0.84, 0.01, 'Mars least lit');
});

group('constellations from the IAU boundaries: Regulus in Leo, Spica in Virgo, Mars at its 2025 opposition in Gemini, the solstice point in Taurus', () => {
  const named = Object.fromEntries(c.SKY.named.map(([nm, l, b]) => [nm, [l, b]]));
  assert.strictEqual(c.constellationAt(...named.Regulus), 'Leo'); assert.strictEqual(c.constellationAt(...named.Spica), 'Virgo');
  assert.strictEqual(c.constellationAt(...named.Antares), 'Scorpius'); assert.strictEqual(c.constellationAt(...named.Aldebaran), 'Taurus');
  const q = c.look('kepler', 'mars', c.toJD(2025, 1, 16)); assert.strictEqual(c.constellationAt(q.lam, q.beta), 'Gemini');
  assert.strictEqual(c.constellationAt(90, 0), 'Taurus'); assert.strictEqual(c.constellationAt(0, 0), 'Pisces');
  /* every point of the ecliptic is in one of the 13 constellations it crosses */
  const seen = new Set(); for (let l = 0; l < 360; l += 0.5) seen.add(c.constellationAt(l, 0));
  assert.deepStrictEqual([...seen].sort(), ['Aquarius', 'Aries', 'Cancer', 'Capricornus', 'Gemini', 'Leo', 'Libra', 'Ophiuchus', 'Pisces', 'Sagittarius', 'Scorpius', 'Taurus', 'Virgo']);
  /* the ecliptic pole is at RA 18 h, Dec 66.56° */
  const [ra, dec] = c.raDec(0, 90); near(ra, 270, 1e-6, 'pole RA'); near(dec, 66.5607, 1e-3, 'pole Dec');
});

console.log(`${n} groups passed`);
