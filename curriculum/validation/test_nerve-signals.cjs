'use strict';
// Nerve Signals and the ECG: Nernst and Goldman potentials, the Hodgkin-Huxley cable (bare and myelinated), and the heart dipole
// with Einthoven's triangle (OpenStax College Physics 2e, 20.7).
const assert = require('node:assert');
const VDC = require('../../demos/lib/constants.js');
const { core } = require('./demo_source.cjs');
const c = core('nerve-signals', 'KB,QE,T0,thermalMV,nernst,ghk,IONS,P_REST,P_PEAK,MEMBRANE,HH,REST,lambdaBare,MY,internode,lamellae,viewLength,makeAxon,stepAxon,stimulate,vAt,DT,measureSpeed,powerFit,FIBERS,WAVES,dipole,leads,axisFrom,qrsNet,qrsAreaAxis,QRS_TURN');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1e-300, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('constants equal demos/lib/constants.js', () => {
  assert.strictEqual(c.KB, VDC.kB); assert.strictEqual(c.QE, VDC.e); assert.strictEqual(c.T0, VDC.T0);
});
group('Nernst: kT/e = 26.73 mV at 37 °C; a tenfold ratio gives 61.5 mV; human E_K near −89 mV (OpenStax: about −90 mV)', () => {
  near(c.thermalMV(37), 1000 * VDC.kB * 310.15 / VDC.e, 1e-12); near(c.thermalMV(37), 26.727, 1e-4);
  near(c.nernst(1, 10, 1, 37), c.thermalMV(37) * Math.log(10), 1e-12); near(c.nernst(1, 10, 1, 37), 61.54, 1e-3);
  const H = c.IONS.human.c; near(c.nernst(1, H.K[0], H.K[1], 37), -89.06, 1e-3); near(c.nernst(1, H.Na[0], H.Na[1], 37), 66.56, 1e-3);
  near(c.nernst(-1, H.Cl[0], H.Cl[1], 37), -64.09, 1e-3);
  assert(Math.abs(c.nernst(2, 2, 1e-4, 37) - c.thermalMV(37) / 2 * Math.log(2e4)) < 1e-9, 'z = 2 halves the potential');
});
group('Goldman: with only K⁺ permeable it equals E_K; the human rest is −67.3 mV; at the peak it nears E_Na', () => {
  const H = c.IONS.human.c;
  near(c.ghk({ K: 1, Na: 0, Cl: 0 }, H, 37), c.nernst(1, H.K[0], H.K[1], 37), 1e-12);
  near(c.ghk({ K: 0, Na: 1, Cl: 0 }, H, 37), c.nernst(1, H.Na[0], H.Na[1], 37), 1e-12);
  near(c.ghk({ K: 0, Na: 0, Cl: 1 }, H, 37), c.nernst(-1, H.Cl[0], H.Cl[1], 37), 1e-12);
  near(c.ghk(c.P_REST, H, 37), -67.29, 1e-3); near(c.ghk(c.P_PEAK, H, 37), 51.1, 2e-3);
  /* doubling K⁺ outside raises E_K by (kT/e) ln 2 */
  near(c.nernst(1, 10, H.K[1], 37) - c.nernst(1, 5, H.K[1], 37), c.thermalMV(37) * Math.log(2), 1e-12);
  /* OpenStax: 90 mV across 8 nm is about 11 MV/m */
  near(0.090 / c.MEMBRANE, 1.125e7, 1e-12);
});
group('Hodgkin-Huxley membrane: rests at −65 mV, resting conductance 0.677 mS/cm²', () => {
  near(c.REST.g, 0.6773, 1e-3);
  const ax = c.makeAxon({ d: 10e-4, myelin: false }); for (let i = 0; i < 2000; i++) c.stepAxon(ax, c.DT(ax));
  for (let i = 0; i < ax.n; i++) assert(Math.abs(ax.V[i] - c.HH.Vr) < 0.01, 'rest stays at rest');
});
group('Squid giant axon, 476 µm, 18.5 °C: 18.6 m/s (Hodgkin and Huxley computed 18.8 m/s, measured 21.2)', () => {
  const v = c.measureSpeed({ d: 0.0476, myelin: false }); near(v, 18.8, 0.015, 'squid');
});
group('Bare axons: v ∝ √d (fit exponent 0.50), and the demo’s formula 0.854 √d is within 1 %', () => {
  const ds = [1, 4, 16], vs = ds.map((d) => c.measureSpeed({ d: d * 1e-4, myelin: false }));
  ds.forEach((d, i) => near(vs[i], 0.854 * Math.sqrt(d), 0.01, d + ' µm'));
  near(c.powerFit(ds, vs).n, 0.5, 0.01);
});
group('Myelinated axons: v ∝ d (fit exponent 1.00), formula 3.64 d within 1 %, far faster than bare', () => {
  const ds = [2, 5, 10, 20], vs = ds.map((d) => c.measureSpeed({ d: d * 1e-4, myelin: true }));
  ds.forEach((d, i) => near(vs[i], 3.64 * d, 0.01, d + ' µm'));
  near(c.powerFit(ds, vs).n, 1, 0.01);
  assert(vs[2] > 10 * 0.854 * Math.sqrt(10), 'myelin makes a 10 µm axon more than ten times faster');
  near(c.internode(10e-4), 100 * 10e-4 / 0.7, 1e-12); near(c.lamellae(10e-4), (10 / 0.7 - 10) / 2 / 0.016, 1e-9);
});
group('the time steps are converged: halving them moves the speed under 0.5 %', () => {
  for (const my of [false, true]) { const o = { d: 10e-4, myelin: my }, a = c.measureSpeed(o), b = c.measureSpeed({ ...o, dt: (my ? 0.001 : 0.004) / 2 }); near(a, b, 0.005, my ? 'myelinated' : 'bare'); }
});
group('threshold: below it the kick dies out, above it an impulse arrives; all or none', () => {
  const fire = (dV) => { const ax = c.makeAxon({ d: 10e-4, myelin: false }); c.stimulate(ax, dV); let mx = -99; while (ax.t < 12) { c.stepAxon(ax, c.DT(ax)); mx = Math.max(mx, c.vAt(ax, 0.3 * ax.L)); } return mx; };
  const lo = fire(10), hi = fire(16), big = fire(50);
  assert(lo < -60, 'a 10 mV kick dies out (' + lo + ')'); assert(hi > 20, 'a 16 mV kick fires (' + hi + ')'); near(big, hi, 0.02, 'same height');
});
group('myelin damage: thinned myelin slows the impulse, lost myelin blocks it', () => {
  const healthy = c.measureSpeed({ d: 10e-4, myelin: true }, 0.3, 0.6), thin = c.measureSpeed({ d: 10e-4, myelin: true, damage: 'thin' }, 0.3, 0.6);
  assert(thin < 0.5 * healthy, 'thinned: ' + thin + ' against ' + healthy);
  assert.strictEqual(c.measureSpeed({ d: 10e-4, myelin: true, damage: 'lost' }, 0.3, 0.6), null);
});
group('typical fibers: the myelinated classes fall near Hursh’s 6 m/s per µm of fiber diameter', () => {
  for (const F of c.FIBERS.filter((f) => f.myelin)) { const r = (F.v[0] + F.v[1]) / (F.d[0] + F.d[1]); assert(r > 4 && r < 8, F.name + ': ' + r); }
});
group('Einthoven: II = I + III at every instant; aVR + aVL + aVF = 0', () => {
  for (let t = 0; t < 2.5; t += 0.013) { const L = c.leads(c.dipole(t, 72, 60)); assert(Math.abs(L.II - L.I - L.III) < 1e-12); assert(Math.abs(L.aVR + L.aVL + L.aVF) < 1e-12); }
});
group('the QRS area points along the axis set; leads I and aVF give it back to within 5°', () => {
  for (const ax of [-45, 0, 60, 120]) { near(c.qrsAreaAxis(72, ax) - ax + 1000, 1000, 1e-4, 'area ' + ax);
    assert(Math.abs(c.axisFrom(c.qrsNet(72, ax, 'I'), c.qrsNet(72, ax, 'aVF')) - ax) < 5, 'net ' + ax); }
  assert(c.qrsNet(72, 60, 'II') > c.qrsNet(72, 60, 'I') && c.qrsNet(72, 60, 'II') > c.qrsNet(72, 60, 'III'), 'axis +60°: lead II tallest');
  assert(c.qrsNet(72, 120, 'I') < 0, 'right axis: lead I negative');
});
group('the beat repeats every 60/rate seconds', () => {
  for (const rate of [45, 72, 150]) { const rr = 60 / rate; for (const t of [1.1, 1.23, 1.37]) { const a = c.dipole(t + 2 * rr, rate, 60), b = c.dipole(t + 3 * rr, rate, 60); assert(Math.abs(a[0] - b[0]) < 1e-9 && Math.abs(a[1] - b[1]) < 1e-9); } }
});
console.log(`\n${n} groups passed`);
