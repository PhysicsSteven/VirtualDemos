'use strict';
// Molecules: Bonds and Spectra, Molecules and light view (PhET Molecules and Light): which photons each molecule takes, and what follows.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const C = core('molecules', 'ML_MOLS,mlResponse,mlBreakNm,HC_EVNM');
let n = 0; function group(name, f) { f(); n++; console.log('PASS', name); }
const R = (k, l, x) => C.mlResponse(k, l, x).what;

group('microwave turns only the molecules with a permanent dipole', () => {
  for (const k of ['CO', 'H2O', 'NO2', 'O3']) assert.strictEqual(R(k, 'mw'), 'turn', k);
  for (const k of ['N2', 'O2', 'CO2']) assert.strictEqual(R(k, 'mw'), 'pass', k);
});
group('infrared: CO₂ takes 15 μm (bend, 667 cm⁻¹) and 4.26 μm (asymmetric stretch), not its symmetric stretch at 1333 cm⁻¹; N₂ and O₂ take none', () => {
  const b = C.mlResponse('CO2', 'ir', 15.0); assert(b.what === 'shake' && b.mode.kind === 'bend');
  assert.strictEqual(C.mlResponse('CO2', 'ir', 1e4 / 2349).mode.kind, 'asym');
  const s = C.mlResponse('CO2', 'ir', 1e4 / 1333); assert(s.what === 'pass' && /dipole/.test(s.why));
  for (const x of [1e4 / 2330, 1e4 / 1556, 4.3, 15]) { assert.strictEqual(R('N2', 'ir', x), 'pass'); assert.strictEqual(R('O2', 'ir', x), 'pass'); }
  assert.strictEqual(C.mlResponse('O3', 'ir', 9.6).mode.nu, 1042);
  assert.strictEqual(C.mlResponse('H2O', 'ir', 1e4 / 1595).mode.kind, 'bend');
  assert.strictEqual(R('CO', 'ir', 1e4 / 2143), 'shake'); assert.strictEqual(R('CO', 'ir', 10), 'pass');
});
group('dissociation thresholds hc/D₀: NO₂ 398 nm, O₂ 242 nm, O₃ 1178 nm, H₂O 243 nm', () => {
  const t = (k) => C.mlBreakNm(C.ML_MOLS[k]);
  assert(Math.abs(t('NO2') - 398.0) < 0.5 && Math.abs(t('O2') - 242.4) < 0.5 && Math.abs(t('O3') - 1178.6) < 1 && Math.abs(t('H2O') - 243.2) < 0.5);
});
group('visible and UV: O₃ breaks at 254 and at 600 nm, passes at 385; NO₂ glows at 450 and breaks at 350; O₂ passes at 254, breaks at 200; N₂ passes all', () => {
  assert.strictEqual(R('O3', 'uv', 254), 'break'); assert.strictEqual(R('O3', 'vis', 600), 'break'); assert.strictEqual(R('O3', 'uv', 385), 'pass');
  assert.strictEqual(R('NO2', 'vis', 450), 'glow'); assert.strictEqual(R('NO2', 'uv', 350), 'break');
  assert.strictEqual(R('O2', 'uv', 254), 'pass'); assert.strictEqual(R('O2', 'uv', 200), 'break');
  assert.strictEqual(R('CO', 'uv', 140), 'glow');   /* inside its band but above hc/D₀ = 112 nm */
  for (const x of [120, 200, 300, 400]) assert.strictEqual(R('N2', 'uv', x), 'pass');
  for (const k of ['N2', 'O2', 'CO', 'CO2', 'H2O']) assert.strictEqual(R(k, 'vis', 550), 'pass', k);
});
console.log(`${n} groups passed`);
