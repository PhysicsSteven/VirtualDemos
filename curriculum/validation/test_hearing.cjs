'use strict';
// Hearing and the Ear: the equal loudness contours of ISO 226:2003, Greenwood's place map of the cochlea, sones, and the
// simplified Hughson-Westlake search of the audiogram (OpenStax College Physics 2e, 17.6 and 17.7).
const assert = require('node:assert');
const VDC = require('../../demos/lib/constants.js');
const { core } = require('./demo_source.cjs');
const c = core('hearing', 'I_REF,V_SOUND,ISO_F,ISO_AF,ISO_LU,ISO_TF,isoParams,phonToSPL,splToPhon,threshold,sones,intensityOf,GW,greenwood,placeOf,travelingWave,AUD_F,AUDIOGRAMS,staircase,normalShape');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('constants equal demos/lib/constants.js', () => {
  assert.strictEqual(c.I_REF, VDC.Iref); assert.strictEqual(c.V_SOUND, VDC.sound20);
});
group('decibels: 0 dB is 10⁻¹² W/m², every 10 dB is ten times the intensity', () => {
  near(c.intensityOf(0), 1e-12, 1e-27); near(c.intensityOf(120) / 1, 1, 1e-12); near(c.intensityOf(70) / c.intensityOf(60), 10, 1e-12);
});
group('ISO 226 table: 29 frequencies, 20 Hz to 12.5 kHz, three parameters each; at its own frequencies the parameters are exact', () => {
  for (const a of [c.ISO_AF, c.ISO_LU, c.ISO_TF]) assert.strictEqual(a.length, 29);
  assert.strictEqual(c.ISO_F[0], 20); assert.strictEqual(c.ISO_F[28], 12500);
  c.ISO_F.forEach((f, i) => { const p = c.isoParams(f); near(p.af, c.ISO_AF[i], 1e-12); near(p.Lu, c.ISO_LU[i], 1e-12); near(p.Tf, c.ISO_TF[i], 1e-12); });
  /* between table frequencies: linear in log f */
  const p = c.isoParams(Math.sqrt(1000 * 1250)); near(p.Tf, (c.ISO_TF[17] + c.ISO_TF[18]) / 2, 1e-12);
});
group('ISO 226 at 1 kHz: phons equal decibels within 0.05 dB from 20 to 90 phons, both ways', () => {
  for (let P = 20; P <= 90; P += 10) { near(c.phonToSPL(P, 1000), P, 0.05, 'eq 1 at ' + P); near(c.splToPhon(P, 1000), P, 0.05, 'eq 2 at ' + P); }
});
group('equations (1) and (2) are near inverses at every frequency (within 0.2 phon, 20 to 90 phons)', () => {
  for (const f of c.ISO_F) for (let P = 20; P <= 90; P += 10) near(c.splToPhon(c.phonToSPL(P, f), f), P, 0.2, f + ' Hz ' + P);
});
group('OpenStax 17.6 examples with ISO 226: (a) 100 Hz, 80 dB is 62.0 phons; (b) 70 phons at 4 kHz is 68.0 dB; (c) 200 Hz, 60 dB is 47.9 phons and matches 8 kHz at 59.7 dB', () => {
  near(c.splToPhon(80, 100), 62.0, 0.05); near(c.phonToSPL(70, 4000), 68.0, 0.05);
  const P = c.splToPhon(60, 200); near(P, 47.9, 0.05); near(c.phonToSPL(P, 8000), 59.7, 0.05);
});
group('threshold of hearing: lowest near 3 to 4 kHz, below 0 dB there; 26.5 dB at 100 Hz', () => {
  near(c.threshold(100), 26.5, 1e-12); assert(c.threshold(3150) < 0 && c.threshold(4000) < 0);
  const fs = []; for (let f = 20; f <= 12500; f *= 1.01) fs.push(f); const best = fs.reduce((a, f) => (c.threshold(f) < c.threshold(a) ? f : a));
  assert(best > 3000 && best < 4000, 'minimum at ' + best);
});
group('sones: 1 sone at 40 phons, doubling every 10 phons', () => {
  near(c.sones(40), 1, 1e-15); near(c.sones(50), 2, 1e-12); near(c.sones(60), 4, 1e-12); near(c.sones(30), 0.5, 1e-12);
});
group('Greenwood: 20 Hz at the apex, about 20.7 kHz at the base; placeOf inverts greenwood', () => {
  near(c.greenwood(0), 165.4 * 0.12, 1e-12); near(c.greenwood(1), 165.4 * (Math.pow(10, 2.1) - 0.88), 1e-9);
  assert(Math.abs(c.greenwood(0) - 20) < 0.2 && Math.abs(c.greenwood(1) - 20677) < 1);
  for (const x of [0.05, 0.3, 0.5, 0.77, 0.99]) near(c.placeOf(c.greenwood(x)), x, 1e-12);
  /* 1 kHz peaks 21.0 mm from the base, 4 kHz 11.7 mm: about 5 mm an octave near the base */
  near((1 - c.placeOf(1000)) * c.GW.len, 21.0, 0.05); near((1 - c.placeOf(4000)) * c.GW.len, 11.7, 0.05);
});
group('the drawn traveling wave peaks at the Greenwood place and dies out within 3 mm past it', () => {
  for (const f of [100, 1000, 4000, 12000]) {
    let best = 0, bx = 0; for (let x = 0; x <= 35; x += 0.01) { const a = c.travelingWave(x, f).amp; if (a > best) { best = a; bx = x; } }
    const xc = (1 - c.placeOf(f)) * c.GW.len; near(bx, Math.min(35, xc), 0.011, f + ' Hz peak'); assert(c.travelingWave(xc + 3, f).amp < 0.01);
  }
});
group('staircase: down 10 after a response, up 5 after a miss; two responses on the way up at one level end it', () => {
  /* a listener who hears everything at or above 23 on the demo's scale */
  const hears = (L) => L >= 23; let st = { level: 40, min: 0, max: 80, rising: false, seen: {}, steps: 0 }, k = 0;
  while (!st.done && k++ < 50) st = c.staircase(st, hears(st.level));
  assert.strictEqual(st.result, 25); assert(k < 20, k + ' presentations');
  /* nothing heard up to the top: no threshold */
  st = { level: 40, min: 0, max: 80, rising: false, seen: {} }; k = 0; while (!st.done && k++ < 50) st = c.staircase(st, false);
  assert.strictEqual(st.result, null);
});
group('audiograms: the noise preset has its notch at 4 kHz and recovers at 8 kHz; the age preset gets worse all the way', () => {
  const N = c.AUDIOGRAMS.noise, A = c.AUDIOGRAMS.age, i4 = c.AUD_F.indexOf(4000);
  assert.strictEqual(Math.max(...N), N[i4]); assert(N[c.AUD_F.length - 1] < N[i4] - 20);
  for (let i = 1; i < A.length; i++) assert(A[i] >= A[i - 1]);
  near(c.normalShape(1000), 0, 1e-12); near(c.normalShape(4000), -7.8, 1e-9);
});
console.log(`\n${n} groups passed`);
