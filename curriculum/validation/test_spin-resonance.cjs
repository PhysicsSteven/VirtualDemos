'use strict';
// Spin Resonance: hν = gμ_B B (DPPH), ν = (γ/2π)B for ¹H and ¹⁹F, the scan ramp and the field read from time or voltage,
// the Zeeman magnet's temperature law, and the fits that turn a table of (ν, B) into g or γ/2π.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('spin-resonance', 'H_PLANCK,MU_B,MU_N,G_DPPH,GAMMA_H,GAMMA_F,BMAX,FAST,SLOW,TEMPCO,esrField,nmrField,zeemanField,resonances,rampFast,rampSlow,fieldFromTime,fieldFromVoltage,lorentz,fitOrigin,fitLine,gFromSlope,gammaFromSlope,gNuclearFromSlope,instrument,psrFreq,psrDial');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1e-300, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('constants: CODATA 2022 μ_B, μ_N and the proton γ/2π; ¹⁹F from IUPAC 2001; DPPH g = 2.0036', () => {
  near(c.MU_B, 9.2740100657e-24, 1e-12); near(c.MU_N, 5.0507837393e-27, 1e-12); near(c.GAMMA_H, 2.6752218708e8 / (2 * Math.PI), 1e-7, 'proton γ/2π');
  near(c.GAMMA_F, 25.18148e7 / (2 * Math.PI), 1e-6, '¹⁹F γ/2π'); near(c.G_DPPH, 2.0036, 1e-12);
  near(c.H_PLANCK * c.GAMMA_H / c.MU_N, 5.5856946893, 1e-7, 'proton g factor');
});
group('resonance fields: DPPH at 60 MHz needs 2.14 mT, a proton 658 times more; ¹⁹F 6% less than ¹H', () => {
  near(c.esrField(60e6), 6.62607015e-34 * 60e6 / (2.0036 * 9.2740100657e-24), 1e-12); near(c.esrField(60e6) * 1e3, 2.1396, 1e-4);
  near(c.nmrField(60e6, c.GAMMA_H) / c.esrField(60e6), 658.3, 1e-3); near(c.GAMMA_F / c.GAMMA_H, 0.94129, 1e-4);
  const r = c.resonances('psr', 'gly', 12.8e6, 0.2985); near(r[0].B0, 12.8e6 / c.GAMMA_H - 0.2985, 1e-9, 'scan field = total − magnet');
  assert.equal(c.resonances('esr', 'black', 60e6, 0).length, 0, 'the empty phial has no line');
});
group('the scan: linear 40 ms ramp to B_max, 1 V at full scale, field from time or voltage agree; SLOW 25 s', () => {
  near(c.rampFast(0.020, c.BMAX.esr).B, c.BMAX.esr / 2, 1e-12); assert(c.rampFast(0.045, c.BMAX.esr).B === 0 && !c.rampFast(0.045, c.BMAX.esr).ramp);
  near(c.fieldFromTime(0.02385, c.FAST.ramp, c.BMAX.esr) * 1e3, 2.1882, 1e-4); near(c.fieldFromVoltage(0.595, c.BMAX.esr) * 1e3, 2.1837, 1e-4);
  near(c.fieldFromTime(14.88, c.SLOW.ramp, c.BMAX.esr) * 1e3, 2.1844, 1e-4); near(c.rampSlow(12.5, 3.2e-3), 1.6e-3, 1e-12);
  near(c.lorentz(1.125e-3, 1e-3, 0.25e-3), 0.5, 1e-12, 'half height at the half width');
});
group('Zeeman magnet: B_Z = B₂₀[1 − 7.5e-4 (t − 20)]', () => {
  near(c.zeemanField(0.29858, 21), 0.298356065, 1e-9); near(c.zeemanField(0.3, 20), 0.3, 1e-15); near(c.TEMPCO, 7.5e-4, 1e-12);
});
group('fits: a clean (ν, B) table returns g and γ/2π; the free intercept fit has n − 2 degrees of freedom', () => {
  const nus = [43.76e6, 61.27e6, 76.25e6], Bs = nus.map((v) => c.esrField(v));
  near(c.gFromSlope(c.fitOrigin(nus, Bs).k), 2.0036, 1e-9); const L = c.fitLine(nus, Bs); near(c.gFromSlope(L.k), 2.0036, 1e-9); assert(Math.abs(L.c) < 1e-12);
  const nuH = [12.72e6, 12.77e6, 12.82e6], BH = nuH.map((v) => c.nmrField(v, c.GAMMA_H)); near(c.gammaFromSlope(c.fitOrigin(nuH, BH).k), c.GAMMA_H, 1e-9);
  near(c.gNuclearFromSlope(c.fitOrigin(nuH, BH).k), 5.5856946893, 1e-7);
  const x = [1, 2, 3, 4], y = [1.1, 1.9, 3.2, 3.8], F = c.fitLine(x, y), mx = 2.5, sxx = 5, k = (1.1 * -1.5 + 1.9 * -0.5 + 3.2 * 0.5 + 3.8 * 1.5) / sxx, cc = 2.5 - k * mx;
  const ss = x.reduce((s, xi, i) => s + (y[i] - cc - k * xi) ** 2, 0); near(F.k, k, 1e-12); near(F.c, cc, 1e-12); near(F.se, Math.sqrt(ss / 2 / sxx), 1e-12, 'slope SE, n − 2');
});
group('instrument: a seed gives ESR frequencies within 3% of 45, 60 and 75 MHz, B₂₀ within 1% of 300 mT, and the PSR dial maps back', () => {
  for (const seed of [1, 4127, 99999]) { const I = c.instrument(seed); for (const [k, v] of [['LO', 45e6], ['MID', 60e6], ['HI', 75e6]]) assert(Math.abs(I.esrNu[k] / v - 1) <= 0.03, `${seed} ${k}`);
    assert(Math.abs(I.B20 - 0.3) <= 0.003); near(c.psrDial('MID', c.psrFreq('MID', 4.2, I), I), 4.2, 1e-9); }
  near(c.instrument(4127).B20, 0.29857695152191444, 1e-12, 'seed 4127 as in the key');
});
console.log(`${n} groups passed`);
