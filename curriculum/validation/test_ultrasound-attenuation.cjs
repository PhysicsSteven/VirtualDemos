'use strict';
// Ultrasound: absorption in tissue in dB/(cm·MHz) (Culjat et al. 2010) and time gain compensation (Medical Physics module, 2026-10-25).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('ultrasound', 'echoes,alphaDb,tgcGain,ATTEN,MEDIA,reflect,C_SCANNER');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const L = (d) => [{ m: 'muscle', d: d / 100 }, { m: 'bone', d: 0.03 }], dB = (e) => 20 * Math.log10(Math.abs(e.a));
group('Culjat et al. 2010 values; tissue ∝ f, water ∝ f²', () => {
  assert.equal(c.ATTEN.muscle, 1.09); assert.equal(c.ATTEN.fat, 0.48); assert.equal(c.ATTEN.water, 0.0022);
  near(c.alphaDb('muscle', 5), 5.45, 1e-12); near(c.alphaDb('water', 5), 0.055, 1e-12);
});
group('without a frequency the echoes are unchanged (absorption off)', () => { const a = c.echoes(L(4)), b = c.echoes(L(4), 0); assert.equal(a[0].a, b[0].a); near(a[0].a, c.reflect(c.MEDIA.muscle.Z, c.MEDIA.bone.Z), 1e-12); });
group('echo level falls 2αf dB per cm of depth, starting from 20 log r', () => {
  for (const f of [2, 3.5, 5, 7.5]) { const s = (dB(c.echoes(L(8), f)[0]) - dB(c.echoes(L(2), f)[0])) / 6; near(s, -2 * 1.09 * f, 1e-9, `${f} MHz`); }
  near(dB(c.echoes(L(1e-9), 2)[0]), 20 * Math.log10(c.reflect(c.MEDIA.muscle.Z, c.MEDIA.bone.Z)), 1e-6);
});
group('layers add: fat then muscle', () => { const e = c.echoes([{ m: 'fat', d: 0.01 }, { m: 'muscle', d: 0.02 }, { m: 'bone', d: 0.01 }], 3)[1]; near(e.lossDb, 2 * (0.48 * 3 * 1 + 1.09 * 3 * 2), 1e-9); });
group('time gain compensation undoes its own α at the scanner depth', () => { const t = 2 * 0.05 / c.C_SCANNER; near(20 * Math.log10(c.tgcGain(1.09, 3.5, t)), 2 * 1.09 * 3.5 * 5, 1e-9); });
console.log(`${n} groups passed`);
