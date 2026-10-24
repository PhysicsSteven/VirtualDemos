'use strict';
// Electron Diffraction demo, X ray mode: Bragg angles of the Cu and Mo K lines on NaCl and LiF, and that the count rate peaks there.
// (The electron tube itself is tested in test_modern_benches.cjs.)
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const x = core('electron-diffraction', 'HC_EV_NM,XTUBE,XTAL,XRAY,lambdaMin,braggTheta,xrayRate');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('line wavelengths λ = hc/E: Cu Kα1 0.15406 nm, Cu Kβ1 0.13923 nm, Mo Kα1 0.07093 nm, Mo Kβ1 0.06323 nm; hc = 1239.842 eV nm', () => {
  near(x.HC_EV_NM, 6.62607015e-34 * 299792458 / 1.602176634e-19 * 1e9, 1e-6, 'hc');
  near(x.XTUBE.Cu.Ka, 0.15406, 5e-6, 'Cu Ka'); near(x.XTUBE.Cu.Kb, 0.139225, 5e-6, 'Cu Kb');
  near(x.XTUBE.Mo.Ka, 0.070932, 5e-6, 'Mo Ka'); near(x.XTUBE.Mo.Kb, 0.063230, 5e-6, 'Mo Kb');
  near(x.lambdaMin(35), 0.035424, 1e-6, 'Duane-Hunt limit at 35 kV');
});
group('Bragg angles 2d sin θ = mλ: Cu Kα on NaCl (2d = 0.5640 nm) at 15.852°, 33.114°, 55.032°; no fourth order', () => {
  const d = x.XTAL.NaCl.d;
  [15.852, 33.114, 55.032].forEach((t, i) => near(x.braggTheta(x.XTUBE.Cu.Ka, d, i + 1), t, 2e-3, `m = ${i + 1}`));
  for (let m = 1; m <= 3; m++) near(2 * d * Math.sin(x.braggTheta(x.XTUBE.Cu.Ka, d, m) * Math.PI / 180), m * x.XTUBE.Cu.Ka, 1e-12, 'Bragg law');
  assert(Number.isNaN(x.braggTheta(x.XTUBE.Cu.Ka, d, 4)));
  near(x.braggTheta(x.XTUBE.Cu.Ka, x.XTAL.LiF.d, 1), 22.493, 2e-3, 'LiF');
});
group('the count rate peaks at every Kα and Kβ Bragg angle below 65° (to the 0.05° step), on each tube and crystal', () => {
  for (const tube of ['Cu', 'Mo']) for (const xt of ['NaCl', 'LiF']) {
    const d = x.XTAL[xt].d;
    for (let m = 1; m <= 8; m++) for (const k of ['Ka', 'Kb']) {
      const tb = x.braggTheta(x.XTUBE[tube][k], d, m); if (!(tb < 64.9)) continue;
      let best = -1, at = 0; for (let t = tb - 0.5; t <= tb + 0.5; t += 0.01) { const r = x.xrayRate(t, tube, xt); if (r > best) { best = r; at = t; } }
      near(at, tb, 0.03, `${tube} ${k} m ${m} on ${xt}`);
    }
  }
});
group('Kα first order is the strongest line; nothing below the Duane-Hunt angle but the steady background', () => {
  const t1 = x.braggTheta(x.XTUBE.Cu.Ka, x.XTAL.NaCl.d, 1);
  for (let t = 2; t < 65; t += 0.05) assert(x.xrayRate(t, 'Cu', 'NaCl') <= x.xrayRate(t1, 'Cu', 'NaCl') + 1e-9);
  const tmin = Math.asin(x.lambdaMin(35) / (2 * x.XTAL.NaCl.d)) * 180 / Math.PI;
  near(x.xrayRate(tmin - 0.6, 'Cu', 'NaCl'), x.XRAY.bg, 1e-6, 'below the short wavelength limit');
});
console.log(`Completed ${n} X ray groups.`);
