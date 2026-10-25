'use strict';
// Orbital Resonances: the Kepler drift, the resonance distances, the 3:1 asteroid crossing Mars's orbit, Pluto kept from Neptune,
// the real counts, and the Finding Neptune fits (Uranus alone, Le Verrier's planet, the real Neptune).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('resonances', 'GM,D2R,ME_SUN,PLANETS,MARS_Q,kepState,stateAt,elements,drift,resonanceA,makeSystem,stepSystem,neptuneTruth,fitUranus,planetX,LEVERRIER,BELT_HIST,KB_HIST');

let n = 0;
const abs = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b} ± ${tol}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
/* a body started as the demo's setup card starts it: a, e, the angle ahead of the planet at J2000, at perihelion */
function single(key, a, e, ph, removeMars, years, Mdeg = 0) {
  const pl = c.PLANETS[key], P0 = c.stateAt(pl, 0, c.GM * (1 + 1 / pl.mr)), L = Math.atan2(P0[1], P0[0]) + ph * c.D2R, M = Mdeg * c.D2R;
  const sys = c.makeSystem(key, [{ a, e, w: L - M, M }], key === 'jupiter' ? 0.1 : 0.5);
  while (sys.t < years - 1e-9 && !sys.gone[0]) c.stepSystem(sys, removeMars);
  return sys;
}

group('constants: Gauss k, IAU 2009 masses, Mars aphelion', () => {
  abs(c.GM, Math.pow(0.01720209895 * 365.25, 2), 1e-12, 'GM');
  abs(c.GM, 39.4769, 1e-4, 'GM value');
  assert.strictEqual(c.PLANETS.jupiter.mr, 1047.348644); assert.strictEqual(c.PLANETS.neptune.mr, 19412.26);
  abs(c.MARS_Q, 1.666, 0.0005, 'Mars aphelion');
  abs(1 / c.ME_SUN, 332946.0487, 1e-6, 'Sun/Earth mass ratio');
});

group('Kepler drift: exact over many orbits, elements recovered', () => {
  const s = new Float64Array(c.kepState(2.5, 0.2, 0.7, 1.1, c.GM)), P = 2 * Math.PI * Math.pow(2.5, 1.5) / Math.sqrt(c.GM), N = 400;
  for (let k = 0; k < 100 * N; k++) assert(c.drift(s, 0, c.GM, P / N));
  const s0 = c.kepState(2.5, 0.2, 0.7, 1.1, c.GM); for (let k = 0; k < 4; k++) abs(s[k], s0[k], 1e-9, 'state after 100 orbits');
  const el = c.elements(s[0], s[1], s[2], s[3], c.GM); abs(el.a, 2.5, 1e-11, 'a'); abs(el.e, 0.2, 1e-11, 'e'); abs(el.w, 0.7, 1e-11, 'w');
});

group('resonance distances from Kepler\'s third law', () => {
  const aJ = c.PLANETS.jupiter.a, aN = c.PLANETS.neptune.a;
  abs(c.resonanceA(aJ, 3, 1), 2.501, 0.001, '3:1'); abs(c.resonanceA(aJ, 5, 2), 2.825, 0.001, '5:2'); abs(c.resonanceA(aJ, 7, 3), 2.958, 0.001, '7:3');
  abs(c.resonanceA(aJ, 2, 1), 3.278, 0.001, '2:1'); abs(c.resonanceA(aJ, 3, 2), 3.970, 0.001, '3:2 (Hildas)');
  abs(c.resonanceA(aN, 2, 3), 39.40, 0.01, 'Neptune 3:2'); abs(c.resonanceA(aN, 1, 2), 47.73, 0.01, 'Neptune 2:1');
});

group('the 3:1 asteroid crosses Mars\'s orbit at 4,157 years; at 2.55 AU it stays calm', () => {
  const s = single('jupiter', 2.502, 0.15, 60, true, 30000);
  assert(s.gone[0] && s.gone[0].why === 'mars', 'removed at Mars'); abs(s.gone[0].t, 4157, 1, 'year');
  abs(s.emax[0], 0.333, 0.001, 'largest e');
  /* the passes fall at the same two places of the orbit: true anomalies within 15° of two values half a turn apart */
  const f = s.conj[0].slice(-10).map((x) => ((x.f / c.D2R) % 360 + 360) % 360), A = f.filter((x, i) => i % 2 === 0), B = f.filter((x, i) => i % 2 === 1);
  for (const g of [A, B]) assert(Math.max(...g) - Math.min(...g) < 15, `passes at one place: ${g}`);
  const q = single('jupiter', 2.55, 0.15, 60, true, 20000);
  assert(!q.gone[0], '2.55 AU not removed'); abs(q.emax[0], 0.192, 0.001, 'largest e at 2.55 AU');
});

group('Pluto in the 3:2 never comes within 17 AU of Neptune; with bad timing it is thrown out', () => {
  /* as the Pluto setup starts it: Pluto's J2000 a and e (3 decimals), its mean longitude ahead of Neptune's, and its mean anomaly */
  const pl = c.PLANETS.pluto, nep = c.PLANETS.neptune, ph = ((pl.L - nep.L) % 360 + 360) % 360, M = pl.L - pl.w;
  abs(ph, 294, 1, 'Pluto ahead of Neptune at J2000');
  const s = single('neptune', +pl.a.toFixed(3), +pl.e.toFixed(3), Math.round(ph), false, 20000, M);
  assert(!s.gone[0]); abs(s.dmin[0], 17.57, 0.01, 'closest to Neptune');
  const b = single('neptune', +pl.a.toFixed(3), +pl.e.toFixed(3), (Math.round(ph) + 60) % 360, false, 20000, M);
  abs(b.gone[0] ? b.gone[0].t : 0, 3621, 1, 'bad timing thrown out');
  assert(b.gone[0] && b.gone[0].why === 'planet'); assert(b.dmin[0] < s.rHill + 1e-9 && b.dmin[0] > 0.5); abs(s.rHill, 0.776, 0.001, 'Hill radius');
});

group('the real counts add up to the queried totals', () => {
  for (const [H, total, bins] of [[c.BELT_HIST, 881333, 115], [c.KB_HIST, 6620, 52]]) {
    assert.strictEqual(H.n.length, bins); assert.strictEqual(H.n.reduce((x, y) => x + y, 0), total); assert.strictEqual(H.total, total);
  }
  /* the Kirkwood gaps: the bar at each resonance is far below its neighbors */
  const bar = (a) => c.BELT_HIST.n[Math.floor((a - c.BELT_HIST.from) / c.BELT_HIST.bin + 1e-9)];
  assert(bar(2.49) < 0.3 * bar(2.53)); assert(bar(2.83) < 0.3 * bar(2.79)); assert(bar(3.29) < 0.1 * bar(3.15));
});

group('Finding Neptune: Uranus alone, Le Verrier\'s planet, the real Neptune', () => {
  const NT = c.neptuneTruth();
  const alone = c.fitUranus(NT, null, false, null); abs(alone.rms, 7.34, 0.02, 'alone rms'); abs(alone.maxOld, 230.9, 0.5, 'old sightings');
  const L = c.LEVERRIER, X = (o) => ({ pos: c.planetX(o), m: o.m });
  abs(L.prec, 2.137, 0.001, 'precession 1847 to 2000');
  /* Le Verrier's own longitude for 1847 January 1, in the equinox of 1847: 326°32′ (Laskar 2017) */
  const sL = c.kepState(L.a, L.e, (L.w - L.prec) * c.D2R, (318 + 47 / 60 - 284.75) * c.D2R, c.GM * (1 + L.m));
  abs(((Math.atan2(sL[1], sL[0]) / c.D2R) % 360 + 360) % 360, 326 + 32 / 60, 0.05, 'Le Verrier 1847.0');
  const lv = c.fitUranus(NT, X({ a: L.a, e: L.e, w: L.w, lon: L.lon, m: L.m }), false, null); abs(lv.rms, 3.69, 0.02, 'Le Verrier rms');
  /* the model's Neptune on 1846 Sep 23 as osculating elements (what The real Neptune setup uses), 1/19412.26 of the Sun */
  const real = c.fitUranus(NT, X({ a: 30.1019, e: 0.008655, w: 45.797, lon: 328.4874, m: 1 / 19412.26 }), false, null);
  assert(real.rms < 0.2, `real Neptune rms ${real.rms}`);
  /* a planet X at 30 AU with 17 Earth masses: the drift is smallest near Neptune's direction */
  const at = (lon) => c.fitUranus(NT, X({ a: 30, e: 0, w: 0, lon, m: 17 * c.ME_SUN }), false, null).rms;
  const r = [270, 300, 315, 330, 345, 360].map(at); abs(r[3], 0.44, 0.02, '330°'); assert(r[3] < Math.min(...r.filter((_, i) => i !== 3)));
});

console.log(`${n} groups pass`);
