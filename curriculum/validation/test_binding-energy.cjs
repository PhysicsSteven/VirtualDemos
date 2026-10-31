'use strict';
// Nuclear Binding Energy, Build a nucleus (2026-10-31): what NUBASE2020 says about any number of protons and neutrons.
const assert = require('node:assert');
const vm = require('node:vm');
const { core, readLib } = require('./demo_source.cjs');
const c = core('binding-energy', 'useNubase,buildInfo,decayModes,decayChain,sepN,sepP,get,DH,DN');
{ const d = {}; vm.runInNewContext(readLib('nubase.js'), d, { timeout: 5000 }); c.useNubase(d.VDNUBASE); }
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('kinds: ¹²C stable, ¹⁴C β⁻ 5.70 kyr, ⁸Be α, ⁵He neutron emission, ³Li unbound, ²n unknown, nothing', () => {
  assert.equal(c.buildInfo(6, 6).kind, 'stable'); near(c.buildInfo(6, 6).abund, 98.94, 1e-9, 'C12 abundance');
  const c14 = c.buildInfo(6, 8); assert.equal(c14.main.code, 'B-'); assert.deepEqual(c14.next, { Z: 7, N: 7 }); near(Math.pow(10, c14.lg) / (365.2422 * 86400), 5700, 0.001, 'C14 5700 yr');
  assert.equal(c.buildInfo(4, 4).main.code, 'A'); assert.deepEqual(c.buildInfo(4, 4).next, { Z: 2, N: 2 });
  assert.equal(c.buildInfo(2, 3).main.code, 'n');
  assert.equal(c.buildInfo(3, 0).kind, 'unbound'); assert.equal(c.buildInfo(0, 2).kind, 'unknown'); assert.equal(c.buildInfo(0, 0).kind, 'none');
});
group('binding energies agree with the measured table of the other views wherever both exist (the table there rounds Δ to 1 eV)', () => {
  for (const [Z, A] of [[2, 4], [26, 56], [28, 62], [82, 208], [92, 235]]) near(c.buildInfo(Z, A - Z).B, c.get(Z, A).B, 1e-6, `${Z},${A}`);
});
group('separation energies: deuteron 2.2246 MeV; ²⁰⁸Pb S_n 7.368 MeV; a negative S_n beyond the drip line (⁵He)', () => {
  near(c.sepN(1, 1), 2.224566, 1e-5, 'deuteron'); near(c.sepP(1, 1), 2.224566, 1e-5, 'S_p of ²H is the same B');
  near(c.sepN(82, 126), 7.368, 0.001, 'Pb208 S_n'); assert(c.sepN(2, 3) < 0, 'He5');
});
group('decay chains along the main mode: ²³⁸U to ²⁰⁶Pb in 14 steps (8 α, 6 β⁻); ²³²Th to ²⁰⁸Pb; ¹¹C to ¹¹B', () => {
  const u = c.decayChain(92, 146), last = u[u.length - 1]; assert.deepEqual(last, { Z: 82, N: 124 }); assert.equal(u.length - 1, 14);
  let a = 0, b = 0; for (let i = 1; i < u.length; i++) { if (u[i].Z - u[i - 1].Z === -2) a++; else if (u[i].Z - u[i - 1].Z === 1) b++; } assert.equal(a, 8); assert.equal(b, 6);
  const th = c.decayChain(90, 142); assert.deepEqual(th[th.length - 1], { Z: 82, N: 126 });
  assert.deepEqual(c.decayChain(6, 5), [{ Z: 6, N: 5 }, { Z: 5, N: 6 }]);
});
group('modes sorted by share, unseen (?) modes left out; fission gives no single daughter', () => {
  const m = c.decayModes(98, 154); assert.equal(m[0].code, 'A'); assert.equal(m[1].code, 'SF'); near(m[0].pct + m[1].pct, 100, 1e-9, 'Cf252');
  assert(!c.decayModes(84, 132).some((q) => q.q === '?'), 'Po216 2B- marked ? is left out');
  const sf = c.buildInfo(100, 158); if (sf.main && sf.main.code === 'SF') assert.equal(sf.next, null);
});
console.log(`${n} groups passed`);
