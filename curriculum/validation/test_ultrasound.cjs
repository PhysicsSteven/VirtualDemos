'use strict';
// Ultrasound: pulse echo ranging (d = ct/2, reflection r = (Z2 − Z1)/(Z2 + Z1)) and Doppler flow (OpenStax College Physics §17.7; University Physics Vol 1 §17.2, §17.7).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('ultrasound', 'MEDIA,C_SCANNER,CYCLES,WINDOW_S,reflect,echoes,sigmaFor,signal,dopplerShift,dopplerShiftApprox,sinc2,spectrum,readingsCSV');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('media from the OpenStax table; fat to muscle sends back 1.4% of the intensity (the book’s example)', () => {
  assert.equal(c.MEDIA.muscle.c, 1590); assert.equal(c.MEDIA.fat.Z, 1.34e6); assert.equal(c.MEDIA.water.c, 1500); assert.equal(c.C_SCANNER, 1540);
  near(c.reflect(c.MEDIA.fat.Z, c.MEDIA.muscle.Z) ** 2, 0.014, 0.02);
  assert(c.reflect(c.MEDIA.water.Z, c.MEDIA.air.Z) < -0.999, 'water to air: almost total, inverted');
});
group('echo times t = Σ 2d/c and amplitudes r Π(1 − r²)', () => {
  const L = [{ m: 'fat', d: 0.015 }, { m: 'muscle', d: 0.03 }, { m: 'bone', d: 0.01 }, { m: 'muscle', d: 0.1 }], e = c.echoes(L);
  assert.equal(e.length, 3);
  near(e[0].t, 2 * 0.015 / 1450, 1e-12); near(e[1].t, 2 * 0.015 / 1450 + 2 * 0.03 / 1590, 1e-12); near(e[2].t, e[1].t + 2 * 0.01 / 4080, 1e-12);
  const r1 = c.reflect(1.34e6, 1.70e6), r2 = c.reflect(1.70e6, 7.8e6);
  near(e[0].a, r1, 1e-12); near(e[1].a, r2 * (1 - r1 * r1), 1e-12); near(e[2].a, -r2 * (1 - r1 * r1) * (1 - r2 * r2), 1e-12);
  near(e[1].depth, 0.045, 1e-12);
});
group('water tank: echo time against depth is a line through the origin with slope 2/c', () => {
  for (const d of [0.02, 0.05, 0.1, 0.15]) near(c.echoes([{ m: 'water', d }, { m: 'air', d: 0.04 }])[0].t, 2 * d / 1500, 1e-12);
});
group('pulse: three cycles at half height, the envelope peaks at the echo time', () => {
  for (const f0 of [2e6, 7.5e6]) { const sg = c.sigmaFor(f0), fwhm = 2 * Math.sqrt(2 * Math.LN2) * sg; near(fwhm, 3 / f0, 1e-12);
    const e = [{ t: 50e-6, a: 0.3 }], s = c.signal(e, f0, 50e-6); near(Math.hypot(...s), 0.3, 1e-12);
    const h = c.signal(e, f0, 50e-6 + fwhm / 2); near(Math.hypot(...h), 0.15, 1e-9); }
});
group('thin layer: 1 mm of fat is two separate echoes at 7.5 MHz but one at 2 MHz', () => {
  const e = c.echoes([{ m: 'muscle', d: 0.03 }, { m: 'fat', d: 0.001 }, { m: 'muscle', d: 0.1 }]), mid = (e[0].t + e[1].t) / 2;
  const env = (f0, t) => Math.hypot(...c.signal(e, f0, t));
  assert(env(7.5e6, mid) < 0.2 * env(7.5e6, e[0].t), 'resolved at 7.5 MHz');
  assert(env(2e6, mid) > 0.5 * env(2e6, e[0].t), 'merged at 2 MHz');
});
group('Doppler: f0(c + u)/(c − u) applied as moving observer then moving source; ≈ 2f0 v cos θ / c', () => {
  const f0 = 5e6, cb = 1570, v = 0.5, th = 60, u = v * 0.5;
  near(c.dopplerShift(f0, v, th, cb), f0 * (cb + u) / (cb - u) - f0, 1e-9);
  near(c.dopplerShift(f0, v, th, cb), 1592.6, 1e-4); near(c.dopplerShiftApprox(f0, v, th, cb), 1592.4, 1e-4);
  assert(Math.abs(c.dopplerShift(f0, v, 90, cb)) < 1e-6, 'no shift across the beam');
});
group('spectrum: plug flow peaks at the shift; laminar flow is flat from 0 to the shift of the fastest blood', () => {
  const f0 = 5e6, cb = 1570, fd = c.dopplerShift(f0, 0.5, 60, cb);
  near(c.spectrum(fd, f0, 0.5, 60, cb, false), 1, 1e-12);
  assert(c.spectrum(fd + 100, f0, 0.5, 60, cb, false) < 0.01, 'narrow line');
  const a = c.spectrum(0.3 * fd, f0, 0.5, 60, cb, true), b = c.spectrum(0.7 * fd, f0, 0.5, 60, cb, true);
  near(a, b, 0.02, 'flat'); assert(c.spectrum(fd + 200, f0, 0.5, 60, cb, true) < 0.02 * a, 'edge at the largest shift');
});
group('CSV header', () => {
  const lines = c.readingsCSV([{ mode: 'echo', setup: 'water tank', f0: '3.5', known: '8.0', t: '106.67', th: '', df: '', prof: '' }], { version: 'x' }).trim().split('\n');
  assert.equal(lines.find((l) => l[0] !== '#'), 'row,mode,setup,f0_MHz,known_depth_cm,cursor_time_us,angle_deg,cursor_shift_Hz,profile');
  assert.equal(lines[lines.length - 1], '1,echo,water tank,3.5,8.0,106.67,,,');
});
console.log(`${n} groups passed`);
