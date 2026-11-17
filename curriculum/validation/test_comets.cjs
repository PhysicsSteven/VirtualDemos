'use strict';
/* Comets and Meteor Showers: Kepler orbits, the lesson's period examples, radiation pressure on dust, the ion tail direction, the
   dust integrator's energy, Earth's orbit and the calendar, and each shower's date, radiant and speed against the IMO values. */
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const C = core('comets', 'GMSUN,AU,DAY,LSUN,CLIGHT,GMEARTH,REARTH,MU,KMS,EPS,keplerE,fromQQ,periodDays,periodYears,planeState,eclState,visViva,beta,dustStep,ionTail,activity,earthState,jdOfSunLon,jdOfDate,dateOfJd,earthOrbitR,crossings,radiant,sep,COMETS,SHOWERS,showerCrossing');
const near = (a, b, rel, msg) => assert.ok(Math.abs(a - b) <= rel * Math.abs(b), `${msg}: ${a} against ${b} (allowed ${rel * 100}%)`);
let n = 0; const ok = (s) => { n++; console.log(`ok ${n} ${s}`); };

/* 1. constants equal demos/lib/constants.js */
{
  near(C.GMSUN, 1.3271244e20, 0, 'GMsun'); near(C.AU, 149597870700, 0, 'au'); near(C.LSUN, 3.828e26, 0, 'Lsun'); near(C.CLIGHT, 299792458, 0, 'c');
  near(C.GMEARTH, 3.986004e14, 0, 'GMearth'); near(C.REARTH, 6.3710088e6, 0, 'Earth mean radius');
  near(C.MU, 2.9591220e-4, 1e-6, 'μ in au³/day²'); near(C.KMS, 1731.456837, 1e-8, '1 au/day in km/s');
  near(C.EPS * 180 / Math.PI, 23 + 26 / 60 + 21.406 / 3600, 1e-8, 'obliquity of the ecliptic, IAU 2006');
  ok('constants match constants.js');
}

/* 2. Kepler: the equation is solved to round off for every e, and a circular orbit gives the year */
{
  for (const e of [0, 0.1, 0.5, 0.9, 0.967, 0.999]) for (const M of [0.001, 0.5, 2, 3.1, 5.5]) { const E = C.keplerE(M, e), d = E - e * Math.sin(E) - M; assert.ok(Math.abs(Math.atan2(Math.sin(d), Math.cos(d))) < 1e-11, `Kepler e ${e} M ${M}`); }   /* M is taken modulo 2π */
  near(C.periodYears(1), 365.2569 / 365.25, 1e-4, '1 au: one sidereal year');
  near(C.visViva(1, 1), 29.78, 1e-3, 'circular speed at 1 au');
  ok('Kepler equation solved to 1e-11; one year at 1 au; 29.78 km/s');
}

/* 3. the lesson's examples: q 1 au and Q 50 au give a = 25.5 au and P = 129 yr; an Oort comet with a = 50,000 au takes 1.1 × 10⁷ yr */
{
  const o = C.fromQQ(1, 50); near(o.a, 25.5, 1e-12, 'a = (q + Q)/2'); near(o.e, 49 / 51, 1e-12, 'e = (Q − q)/(Q + q)');
  const P = C.periodYears(o.a); near(P, 25.5 ** 1.5 * Math.sqrt(4 * Math.PI ** 2 * C.AU ** 3 / C.GMSUN) / 31557600 / 1.0000, 1e-9, 'period from Kepler III');
  assert.ok(Math.abs(P - 129) < 0.5, `P ${P} near 129 yr`);
  const Po = C.periodYears(50000); assert.ok(Math.abs(Po / 1.1e7 - 1) < 0.02, `Oort period ${Po}`);
  const h = C.COMETS.halley; near(C.periodYears(h.a), 75.3, 0.01, "Halley's period about 75 years");
  ok(`lesson periods: ${P.toFixed(2)} yr, Oort ${Po.toExponential(3)} yr; Halley ${C.periodYears(h.a).toFixed(2)} yr`);
}

/* 4. dust: β for a 1 μm grain of 1000 kg/m³ is 0.574, and β ∝ 1/s; the Verlet step keeps a grain's energy */
{
  near(C.beta(1e-6, 1000), 3 * 3.828e26 / (16 * Math.PI * 1.3271244e20 * 299792458 * 1000 * 1e-6), 1e-12, 'β formula');
  near(C.beta(1e-6, 1000), 0.5742, 1e-3, 'β 1 μm'); near(C.beta(1e-5, 1000), C.beta(1e-6, 1000) / 10, 1e-12, 'β ∝ 1/s');
  const g = { x: 0.6, y: 0, vx: 0, vy: Math.sqrt(C.MU / 0.6) * 1.3, b: 0.3, age: 0 }, mu = C.MU * (1 - g.b);
  const En = () => 0.5 * (g.vx ** 2 + g.vy ** 2) - mu / Math.hypot(g.x, g.y), E0 = En();
  for (let k = 0; k < 4000; k++) C.dustStep([g], 0.25);
  near(En(), E0, 1e-4, 'dust grain energy over 1,000 days');
  ok('β(1 μm) = 0.574, β ∝ 1/s, grain energy kept to 1e-4');
}

/* 5. the ion tail: straight back from the Sun for a comet at rest; tilted by atan(v/v_wind) for a comet moving across the wind */
{
  const t0 = C.ionTail(1, 0, 0, 0, 400); near(t0.dx, 1, 1e-12, 'radial tail'); near(t0.tilt + 1, 1, 1e-9, 'no tilt');
  const v = 30 / C.KMS, t = C.ionTail(1, 0, 0, v, 400); near(t.tilt, Math.atan(30 / 400) * 180 / Math.PI, 1e-9, 'aberration angle');
  assert.ok(t.dy < 0, 'the tail leans back from the motion');
  assert.equal(C.activity(3.5), 0); near(C.activity(1), 1, 0); near(C.activity(0.5), 4, 1e-12);
  ok(`ion tail: radial at rest, tilted ${t.tilt.toFixed(2)}° at 30 km/s in a 400 km/s wind`);
}

/* 6. Earth's orbit and the calendar: Meeus Julian dates, the Sun at 0° on the March equinox and 90° on the June solstice */
{
  near(C.jdOfDate(2000, 1, 1.5), 2451545.0, 0, 'J2000'); near(C.jdOfDate(1987, 4, 10), 2446895.5, 0, 'Meeus example 7.a');
  const d = C.dateOfJd(2446895.5); assert.deepEqual([d.y, d.m, d.d], [1987, 4, 10], 'date back from the Julian date');
  const eq = C.jdOfSunLon(0, 2026); assert.ok(Math.abs(eq - C.jdOfDate(2026, 3, 20.6)) < 0.6, `March equinox 2026 (20 March 14:46 UT) ${eq}`);
  const so = C.jdOfSunLon(90, 2026); assert.ok(Math.abs(so - C.jdOfDate(2026, 6, 21.35)) < 0.6, `June solstice 2026 ${so}`);
  near(C.earthOrbitR(102.94719), 1.00000261 * (1 - 0.01671123), 1e-6, 'perihelion distance');
  ok('Julian dates, equinox and solstice within half a day');
}

/* 7. showers: the date, radiant and speed from the parent's orbit against the IMO list */
{
  const want = { perseids: [2, 3, 3], geminids: [2, 4, 2], leonids: [2, 3, 2], orionids: [5, 6, 2], etaaq: [2, 4, 3], draconids: [2, 4, 5] };
  const rows = [];
  for (const k in C.SHOWERS) {
    const s = C.SHOWERS[k], r = C.showerCrossing(k, 2026); assert.ok(r, `${k}: a crossing`);
    let dl = Math.abs(r.lamSun - s.lam); dl = Math.min(dl, 360 - dl);
    const sp = C.sep(r.ra, r.dec, s.ra, s.dec);
    assert.ok(dl < want[k][0], `${k}: Sun longitude ${r.lamSun} against ${s.lam}`);
    assert.ok(sp < want[k][1], `${k}: radiant ${sp}° from the observed`);
    assert.ok(Math.abs(r.vinf - s.v) < want[k][2] + 0.01, `${k}: entry speed ${r.vinf} against ${s.v}`);
    near(r.vinf, Math.sqrt(r.vg ** 2 + r.vesc ** 2), 1e-12, 'v∞² = vg² + vesc²');
    rows.push(`${k} λ☉ ${r.lamSun.toFixed(1)} (${s.lam}), radiant off ${sp.toFixed(1)}°, ${r.vinf.toFixed(1)} km/s (${s.v})`);
  }
  near(C.sep(10, 20, 10, 20) + 1, 1, 1e-12, 'sep of a point with itself');
  ok(`showers:\n   ${rows.join('\n   ')}`);
}
console.log(`${n} groups passed`);
