'use strict';
// The Sun: Surface and Cycle: blackbody spots, the Zeeman shift, differential rotation, the sunspot record and CME travel times.
// Known values from the lesson plan (Stars and Galaxies, Unit 1, Day 2), the sources cited in the demo and the data files.
const assert = require('node:assert');
const path = require('node:path');
const { core } = require('./demo_source.cjs');
const VDC = require('../../demos/lib/constants.js');
const c = core('sun-surface', 'SIGMA,WIEN,E_CH,M_E,C_LIGHT,T_SUN,R_SUN,AU,PC,MV_SUN,MV_MOON,fluxRatio,wienPeak,sunMag,spotMag,zeeman,FE6302,ROT,omega,period,synodic,turns,minima,lightTime,cmeTime');
require(path.join(__dirname, '../../demos/sun-surface-data/cycle.js'));
const D = globalThis.VD_SUNCYCLE;

let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('constants equal demos/lib/constants.js', () => {
  for (const [k, v] of [['SIGMA', 'sigma'], ['WIEN', 'wienB'], ['E_CH', 'e'], ['M_E', 'me'], ['C_LIGHT', 'c'], ['T_SUN', 'Tsun'], ['R_SUN', 'Rsun'], ['AU', 'au'], ['MV_SUN', 'MVsun'], ['MV_MOON', 'mVmoon']]) assert.strictEqual(c[k], VDC[v], k);
  near(c.PC, VDC.pc, 1e-12, 'pc');
});

group('spots: (T/5772)⁴; lesson 4,500 K gives 0.37 (about a third), 4,000 K gives 0.23; Wien peaks 502 and 724 nm', () => {
  near(c.fluxRatio(4500), 0.3695, 1e-3, '4,500 K'); near(c.fluxRatio(4000), 0.2306, 1e-3, '4,000 K'); assert.strictEqual(c.fluxRatio(5772), 1);
  near(c.wienPeak(5772), 502.04, 1e-4, 'surface'); near(c.wienPeak(4000), 724.44, 1e-4, 'spot');
  near(c.SIGMA * Math.pow(c.T_SUN, 4) * 4 * Math.PI * c.R_SUN * c.R_SUN, VDC.Lsun, 2e-3, 'σT⁴ · 4πR² = L☉');
});

group('a spot alone: the Sun is V = −26.76 (Willmer 2018); a 12,000 km, 4,000 K umbra is about −14.8, brighter than the full Moon', () => {
  near(c.sunMag(), -26.76, 2e-4, 'Sun');
  const m = c.spotMag(4000, 12e6); near(m, -14.85, 2e-3, 'spot'); assert(m < c.MV_MOON, 'brighter than the Moon');
  near(Math.pow(10, -0.4 * (m - c.MV_MOON)), 6.98, 0.01, 'about 7 full Moons');
});

group('Zeeman: Δλ = 4.6686 × 10⁻¹³ g λ²(Å) B(G) Å (the textbook coefficient); 3,000 G on Fe I 630.25 nm (g = 2.5) gives 13.9 pm', () => {
  const dl = c.zeeman(c.FE6302[0], c.FE6302[1], 3000); near(dl * 10, 4.6686e-13 * 2.5 * Math.pow(6302.494, 2) * 3000, 1e-4, 'coefficient');
  near(dl * 1000, 13.91, 2e-3, '13.9 pm'); near(c.zeeman(630.25, 2.5, 6000) / c.zeeman(630.25, 2.5, 3000), 2, 1e-12, 'linear in B');
});

group('rotation (Snodgrass and Ulrich 1990): 24.47 d at the equator, 30.22 d at 60°; seen from Earth 26.22 and 32.95 d', () => {
  near(c.period(0), 24.468, 1e-4, 'equator'); near(c.period(60), 30.22, 5e-4, '60°'); near(c.period(90), 360 / (14.713 - 2.396 - 1.787), 1e-12, 'pole');
  near(c.synodic(0), 26.22, 5e-4, 'synodic equator'); near(c.synodic(60), 32.95, 5e-4, 'synodic 60°');
  const d = 1 / (1 / c.period(0) - 1 / c.period(60)); near(c.turns(0, d) - c.turns(60, d), 1, 1e-12, 'one lap gained');
  near(d, 128.47, 1e-3, 'the equator laps 60° in about 128 days');
});

group('the sunspot record: monthly and smoothed SILSO v2.0 from 1749; minima Dec 2008 and Dec 2019; cycle 19 peak 285 in 1958', () => {
  near(D.snStart, 1749 + 0.5 / 12, 1e-6, 'January 1749, mid month'); assert(D.sn.length > 3300 && D.sm.length === D.sn.length);
  const sm = D.sm.map((v) => (v >= 0 ? v / 10 : -1)), mins = c.minima(sm, D.snStart);
  const last = mins.filter((t) => t > 2000); near(last[0], 2008.96, 1e-4, 'cycle 24 minimum'); near(last[1], 2019.96, 1e-4, 'cycle 25 minimum');
  const from1755 = mins.filter((t) => t >= 1755); assert.strictEqual(from1755.length, 25, 'minima from 1755: cycles 1 to 25 begin');
  let best = 0, at = 0; sm.forEach((v, i) => { if (v > best) { best = v; at = D.snStart + i / 12; } });
  near(best, 285.0, 2e-3, 'largest smoothed number'); assert(at > 1957.9 && at < 1958.4, 'in early 1958: ' + at);
  const len = from1755.slice(1).map((t, i) => t - from1755[i]); near(len.reduce((a, b) => a + b) / len.length, 11.0, 0.01, 'mean cycle 11 years');
});

group('the butterfly (RGO and USAF/NOAA): spots start near 30° and end near the equator (Spörer), both hemispheres', () => {
  const dt = D.rot / 365.2425, mean = (t0, t1) => { let s = 0, w = 0; D.bfly.forEach((row, i) => { const t = D.rotStart + i * dt; if (t < t0 || t > t1) return; for (let b = 0; b < row.length; b++) { const lv = +row[b]; if (!lv) continue; const lat = Math.abs(D.lat0 + 2 * b + 1), a = Math.pow(10, (lv - 1) / 2); s += lat * a; w += a; } }); return s / w; };
  const early = mean(1954.5, 1956.5), late = mean(1962, 1964);
  assert(early > 20 && early < 30, 'early cycle 19 mean latitude ' + early); assert(late > 5 && late < 13, 'late cycle 19 ' + late);
  assert(D.bfly.length > 1850 && D.bfly.every((r) => r.length === 50), 'rows');
});

group('space weather: light 499.0 s (8.3 min); a 1,000 km/s CME takes 41.6 h (lesson: about 1.7 days); Carrington 17.6 h is 2,360 km/s', () => {
  near(c.lightTime(), 499.005, 1e-5); near(c.cmeTime(1000) / 3600, 41.555, 1e-4, '1,000 km/s'); near(c.cmeTime(1000) / 86400, 1.73, 2e-3, 'days');
  near(c.AU / 1e3 / (17.6 * 3600), 2361, 1e-3, 'Carrington'); near(c.cmeTime(500) / c.cmeTime(1000), 2, 1e-12, 'half speed, twice the time');
});

console.log(`${n} groups passed`);
