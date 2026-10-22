'use strict';
// Resistivity of a Wire: R = ρL/A, ρ(T), the fits for ρ and α, the CSV.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('resistivity', 'RS_VERSION,MATS,GAUGES,rhoAt,area,resistance,sig,fitLine,readingsCSV');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
group('R = ρL/A: proportional to L, inverse to d²', () => {
  const M = c.MATS.nichrome, R1 = c.resistance(M, 0.5, 0.405, 20);
  near(R1, 1.1e-6 * 0.5 / (Math.PI * 0.405e-3 ** 2 / 4), 1e-12);
  near(c.resistance(M, 1, 0.405, 20), 2 * R1, 1e-12); near(c.resistance(M, 0.5, 0.81, 20), R1 / 4, 1e-12);
});
group('ρ(T) = ρ20[1 + α(T − 20)]; copper rises about 0.39% per kelvin', () => {
  const M = c.MATS.copper; near(c.rhoAt(M, 120), 1.68e-8 * (1 + 0.393), 1e-12); near(c.rhoAt(c.MATS.constantan, 200) / c.rhoAt(c.MATS.constantan, 20), 1.0018, 1e-9);
});
group('fits recover ρ from R against L and α from R against T, with readings rounded like the meters', () => {
  const M = c.MATS.mystery, d = 0.255, A = c.area(d), I = 0.2;
  const xs = [0.2, 0.4, 0.6, 0.8, 1], ys = xs.map((L) => +c.sig(I * c.resistance(M, L, d, 20), 4) / I);
  near(c.fitLine(xs, ys).b * A, M.rho, 1e-3);
  const ts = [0, 50, 100, 150, 200], rs = ts.map((T) => +c.sig(I * c.resistance(M, 1, d, T), 4) / I), F = c.fitLine(ts, rs);
  near(F.b / (F.a + 20 * F.b), M.alpha, 1e-2);
});
group('CSV: header and R from the row', () => {
  const L = c.readingsCSV([{ mat: 'Nichrome', d: '0.405', T: '20', L: '0.500', I: '0.2', V: '1.708' }], { version: c.RS_VERSION, material: 'Nichrome' }).trim().split('\n');
  const h = L.indexOf('row,material,d_mm,T_C,L_m,I_A,V_V,R_ohm'); assert(h > 0); assert.equal(L[h + 1], '1,Nichrome,0.405,20,0.500,0.2,1.708,8.54');
});
console.log(`${n} resistivity test groups passed`);
