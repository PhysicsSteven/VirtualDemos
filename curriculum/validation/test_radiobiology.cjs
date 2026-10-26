'use strict';
// Radiobiology: the linear quadratic curves and their OER limits (Wenzl and Wilkens 2011), the oxygen form, BED and EQD2 identities,
// the McNamara proton RBE and its limits, and the Poisson counting of the simulated clonogenic assay.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('radiobiology', 'CELLS,TISSUES,K_O2,P_AIR,MCN,survival,rr,lqAt,doseFor,oer,d10,bed,eqd2,dPerFraction,rbeMax,rbeMin,rbe,rngOf,poisson,mystery,lineParams,plate');

let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
const abs = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b} ± ${tol}, got ${a}`);
const same = (a, b) => assert.strictEqual(JSON.stringify(a), JSON.stringify(b)); /* the core runs in its own context */
function group(name, f) { f(); n++; console.log('PASS', name); }

group('cell lines: the Wenzl and Wilkens 2011 means, and OER tending to α_a/α_h at low dose and √(β_a/β_h) at high dose', () => {
  same(c.CELLS.v79.aer, { a: 0.135, b: 0.032 }); same(c.CELLS.v79.hyp, { a: 0.06, b: 0.003 });
  same(c.CELLS.t1.aer, { a: 0.10, b: 0.047 }); same(c.CELLS.t1.hyp, { a: 0.02, b: 0.009 });
  near(c.oer('v79', 1e-4), 2.25, 1e-3, 'V79 low dose'); near(c.oer('v79', 1e4), Math.sqrt(0.032 / 0.003), 2e-3, 'V79 high dose');
  near(c.oer('t1', 1e-4), 5.0, 1e-3, 'T1 low dose'); near(c.oer('t1', 1e4), Math.sqrt(0.047 / 0.009), 2e-3, 'T1 high dose');
  abs(c.survival(0.135, 0.032, 2), Math.exp(-0.27 - 0.128), 1e-15, 'SF2');
});

group('survival: doseFor inverts the LQ effect, D10 gives 10 %, the OER is the dose ratio at equal survival', () => {
  for (const [a, b] of [[0.135, 0.032], [0.06, 0.003], [0.3, 0], [0.02, 0.009]]) for (const E of [0.1, 1, 5, 12]) { const D = c.doseFor(a, b, E); abs(a * D + b * D * D, E, 1e-12, 'inverse'); }
  abs(c.survival(0.135, 0.032, c.d10(0.135, 0.032)), 0.1, 1e-12, 'D10');
  const A = c.CELLS.v79.aer, H = c.CELLS.v79.hyp, D = 4, Dh = c.oer('v79', D) * D;
  near(c.survival(H.a, H.b, Dh), c.survival(A.a, A.b, D), 1e-12, 'equal survival');
});

group('oxygen: 0 mmHg gives the hypoxic values, air the aerobic ones, half the effect near K, monotonic in between', () => {
  for (const k of ['v79', 't1']) { const C = c.CELLS[k], z = c.lqAt(k, 0), a = c.lqAt(k, c.P_AIR), just = c.lqAt(k, c.P_AIR - 1e-9);
    abs(z.a, C.hyp.a, 1e-15); abs(z.b, C.hyp.b, 1e-15); same(a, { a: C.aer.a, b: C.aer.b }); near(just.a, C.aer.a, 1e-9); near(just.b, C.aer.b, 1e-9);
    let prev = 0; for (let p = 0; p <= 160; p += 0.5) { const q = c.lqAt(k, p); assert(q.a >= prev - 1e-15, `${k} α rises with p`); prev = q.a; }
    const m = C.aer.a / C.hyp.a, half = (c.lqAt(k, c.K_O2).a / C.hyp.a - 1) / (m - 1); abs(half, 0.5 * (160 + c.K_O2) / 160, 1e-12, `${k} at K`); }
  assert.strictEqual(c.K_O2, 3.8); assert.strictEqual(c.P_AIR, 160);
});

group('fractionation: BED and EQD2 identities, 2 Gy fractions give EQD2 = total, dPerFraction inverts BED', () => {
  for (const ab of [1.5, 3, 10]) { abs(c.eqd2(30, 2, ab), 60, 1e-12, `60/30 at ${ab}`); abs(c.bed(1, 60, ab), 60 * (1 + 60 / ab), 1e-9); }
  abs(c.eqd2(1, 60, 3), 756, 1e-9, 'single 60 Gy, late'); abs(c.eqd2(1, 60, 10), 350, 1e-9, 'single 60 Gy, tumor');
  abs(c.eqd2(20, 3, 1.5), 540 / 7, 1e-9, 'CHHiP 60/20 at 1.5'); abs(c.eqd2(20, 3, 3), 72, 1e-9, 'CHHiP 60/20 at 3');
  for (const [B, k, ab] of [[100, 5, 3], [72, 30, 10], [180, 20, 1.5]]) { const d = c.dPerFraction(B, k, ab); abs(c.bed(k, d, ab), B, 1e-9, 'inverse'); }
  const d5 = c.dPerFraction(c.bed(30, 2, 3), 5, 3); abs(5 * d5, 31.95, 0.01, 'late isoeffect in 5'); abs(c.eqd2(5, d5, 10), 43.6, 0.05, 'tumor EQD2 then');
});

group('proton RBE: the McNamara 2015 parameters, RBE_max at zero dose, RBE_min at large dose, a low LET RBE near 1', () => {
  same(c.MCN, { p0: 0.99064, p1: 0.35605, p2: 1.1012, p3: -0.0038703 });
  for (const ab of [1, 2, 10]) for (const L of [0.5, 2, 8, 15]) { near(c.rbe(1e-9, L, ab), c.rbeMax(L, ab), 1e-6, 'low dose'); near(c.rbe(1e6, L, ab), c.rbeMin(L, ab), 1e-4, 'high dose');
    /* RBE is the photon dose for the same effect over the proton dose, with α_p = RBE_max α_x and √β_p = RBE_min √β_x */
    const ax = 0.1, bx = ax / ab, D = 2, E = ax * c.rbeMax(L, ab) * D + bx * (c.rbeMin(L, ab) * D) ** 2; near(c.doseFor(ax, bx, E) / D, c.rbe(D, L, ab), 1e-10, 'definition'); }
  abs(c.rbe(2, 2, 10), 1.066, 0.001); abs(c.rbe(2, 10, 2), 1.529, 0.001); abs(c.rbe(0.5, 8, 2), 1.844, 0.001);
  let prev = 0; for (let L = 0.5; L <= 15; L += 0.5) { const r = c.rbe(2, L, 2); assert(r > prev, 'rises with LET'); prev = r; }
});

group('the assay: reproducible counts, Poisson mean and variance, mystery lines inside their stated ranges', () => {
  const par = { a: 0.135, b: 0.032, pe: 0.7 }, a = c.plate(par, 2, 400, 3, 42), b = c.plate(par, 2, 400, 3, 42); same(a.counts, b.counts);
  abs(a.expected, 400 * 0.7 * c.survival(0.135, 0.032, 2), 1e-9);
  for (const lam of [3, 150, 1234]) { const r = c.rngOf(7), xs = Array.from({ length: 20000 }, () => c.poisson(lam, r)), m = xs.reduce((s, x) => s + x, 0) / xs.length, v = xs.reduce((s, x) => s + (x - m) ** 2, 0) / (xs.length - 1);
    abs(m, lam, 4 * Math.sqrt(lam / xs.length), `mean ${lam}`); near(v, lam, 0.05, `variance ${lam}`); }
  for (let k = 1; k <= 99; k++) { const q = c.mystery(k); assert(q.a >= 0.1 && q.a <= 0.4 && q.b >= 0.01 && q.b <= 0.06 && q.pe >= 0.5 && q.pe <= 0.8, `code ${k}`); }
  same(c.lineParams('v79'), { a: 0.135, b: 0.032, pe: 0.7 });
});

console.log(`${n} groups passed`);
