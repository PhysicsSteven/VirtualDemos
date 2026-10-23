'use strict';
// Units, Scales and Estimates: exact conversions, dimensional analysis, significant figures, Fermi products.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('units', 'SIZES,UNITS,convert,DIM,QUESTIONS,dimsOf,solveDims,sigInfo,roundSig,combine,formatKeep,FERMI,fermi');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
group('conversions use exact definitions', () => {
  near(c.convert(65, 'speed', 'mi/h', 'm/s'), 65 * 1609.344 / 3600, 1e-15); near(c.convert(1, 'length', 'mi', 'ft'), 5280, 1e-12); near(c.convert(1, 'energy', 'kWh', 'kcal'), 3.6e6 / 4184, 1e-15);
  near(c.convert(1, 'mass', 'lb', 'oz'), 16, 1e-12); near(c.convert(1, 'length', 'light year', 'm'), 299792458 * 31557600, 1e-15);
});
group('dimensional analysis recovers the known exponents and drops the irrelevant variables', () => {
  const want = { pendulum: [0.5, 0, -0.5], spring: [0.5, -0.5, 0], wave: [0.5, -0.5], orbit: [1.5, -0.5], fall: [0.5, -0.5, 0] };
  for (const [k, ex] of Object.entries(want)) { const Q = c.QUESTIONS[k]; assert.deepEqual(c.solveDims(Q.vars, Q.target), ex, k); assert.deepEqual(c.dimsOf(Q.vars, ex).map((x) => x + 0), Q.target, k); }
});
group('significant figures and decimal places from written numbers', () => {
  const t = (s, sig, dec, amb) => { const q = c.sigInfo(s); assert.equal(q.sig, sig, s); assert.equal(q.decimals, dec, s); assert.equal(q.ambiguous, !!amb, s); };
  t('12.07', 4, 2); t('0.0350', 3, 4); t('1500', 2, 0, true); t('1500.', 4, 0); t('3.50e-2', 3, 4); t('100.0', 4, 1); t('2', 1, 0); assert.equal(c.sigInfo('abc'), null);
  let r = c.combine('12.07', '0.0350', '*'); assert.equal(c.formatKeep(r.rounded, r), '0.422');
  r = c.combine('100.0', '2.351', '-'); assert.equal(c.formatKeep(r.rounded, r), '97.6');
  r = c.combine('1500', '3.2', '/'); assert.equal(c.formatKeep(r.rounded, r), '4.7 × 10^2');
});
group('Fermi: heartbeats in a lifetime are 2 to 5 billion', () => { const [lo, hi] = c.fermi(c.FERMI.beats.f); near(lo, 60 * 1440 * 365.25 * 70, 1e-12); near(hi, 100 * 1440 * 365.25 * 90, 1e-12); });
group('scale ruler: sizes in increasing order, light year from c × Julian year', () => { for (let i = 1; i < c.SIZES.length; i++) assert(c.SIZES[i][1] > c.SIZES[i - 1][1], c.SIZES[i][0]); near(c.SIZES.find((s) => s[0] === 'one light year')[1], 9.4607e15, 1e-4); });
console.log(`${n} units test groups passed`);
