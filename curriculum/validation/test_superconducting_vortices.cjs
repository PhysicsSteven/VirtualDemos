'use strict';
// Vortices in a Superconductor: Bessel functions against tabulated values, the flux quantum, the Abrikosov lattice with no pinning
// (density equal to the applied field, spacing from one flux quantum per vortex), Bean slopes that grow with pin strength, and
// trapped flux when the field is removed.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('superconducting-vortices', 'besselK0,besselK1,makeStrip,setField,fillInside,stepV,profile,PHI0,MU0,LAMBDA,BU,latticeSpacing,beanSlope');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const run = (o, ramp) => { const st = c.makeStrip(Object.assign({ Wx: 20, Ly: 12, np: 1.5, rp: 0.2, fp: 1, seed: 11 }, o)); let B = 0;
  for (const [to, steps] of ramp) { const from = B; for (let k = 1; k <= steps; k++) { B = from + (to - from) * k / steps; c.setField(st, B); c.stepV(st, 0.05); } } return st; };

group('Modified Bessel functions match tabulated values to 1e-7 (Abramowitz and Stegun Table 9.8)', () => {
  near(c.besselK0(1), 0.4210244382, 1e-7, 'K0(1)'); near(c.besselK1(1), 0.6019072302, 1e-7, 'K1(1)');
  near(c.besselK0(0.5), 0.9244190712, 1e-7, 'K0(0.5)'); near(c.besselK1(3), 0.04015643113, 1e-7, 'K1(3)'); near(c.besselK0(5), 0.003691098334, 1e-6, 'K0(5)');
});
group('Flux quantum h/2e = 2.0678338e-15 Wb; field unit Φ0/λ² and lattice spacing a = √(2Φ0/(√3 B))', () => {
  near(c.PHI0, 2.067833848e-15, 1e-9, 'Φ0'); near(c.BU, c.PHI0 / c.LAMBDA ** 2, 1e-12);
  const a = c.latticeSpacing(0.1); near(Math.sqrt(3) / 2 * a * a * 0.1, c.PHI0, 1e-12, 'one flux quantum per lattice cell');
});
group('No pins: vortices fill the slab to the applied density (within 10 %; the repeating view holds a whole number of rows), evenly (each half within 10 % of the other)', () => {
  const st = run({ fp: 0, np: 0 }, [[0.8, 2000], [0.8, 2000]]), N = st.x.length, dens = N / (20 * 12);
  near(dens, 0.8, 0.1, 'density'); const p = c.profile(st, 2); near(p[0], p[1], 0.1, 'halves');
});
group('No pins: the vortices form a triangular lattice, most with six neighbors at the spacing for their density', () => {
  const st = run({ fp: 0, np: 0 }, [[0.8, 2000], [0.8, 4000]]), N = st.x.length, a = Math.sqrt(2 / (Math.sqrt(3) * N / 240));
  let six = 0, inner = 0;
  for (let i = 0; i < N; i++) { if (st.x[i] < 2 || st.x[i] > 18) continue; inner++; let k = 0;
    for (let j = 0; j < N; j++) { if (j === i) continue; const dx = st.x[i] - st.x[j]; let dy = st.y[i] - st.y[j]; dy -= 12 * Math.round(dy / 12); if (Math.hypot(dx, dy) < 1.25 * a) k++; } if (k === 6) six++; }
  assert(six / inner > 0.7, `six neighbors: ${six} of ${inner}`);
});
group('Pins: the field falls off from the faces (Bean profile), and stronger pins give steeper slopes', () => {
  const st1 = run({ fp: 1 }, [[0.9, 2000], [0.9, 800]]), st3 = run({ fp: 3 }, [[0.9, 2000], [0.9, 800]]);
  const p1 = c.profile(st1, 10), s1 = c.beanSlope(p1, 2), s3 = c.beanSlope(c.profile(st3, 10), 2);
  assert(p1[0] > p1[4] && p1[9] > p1[5], `edges above middle: ${Array.from(p1)}`);
  assert(s1[0] > 0 && s1[1] > 0, `slopes ${s1}`); assert((s3[0] + s3[1]) > 1.5 * (s1[0] + s1[1]), `stronger pins steeper: ${s1} vs ${s3}`);
});
group('Raised and lowered back to zero: without pins most flux leaves; with pins flux is trapped, lower at the faces than inside', () => {
  /* without pins the flux leaves until the vortices are more than about 4λ apart, where they no longer push each other (the model
     leaves out the image force that would draw the last ones to the faces) */
  const free = run({ fp: 0, np: 0 }, [[0.9, 2000], [0, 2000], [0, 1500]]); assert(free.x.length < 0.2 * 0.9 * 240, `left without pins: ${free.x.length}`);
  const pin = run({ fp: 1 }, [[0.9, 2000], [0, 2000], [0, 800]]), p = c.profile(pin, 10); assert(pin.x.length > 1.5 * free.x.length, `trapped ${pin.x.length} vs ${free.x.length}`);
  /* the field never reached the middle on the way up, so the trapped flux peaks part way in from each face (an M shape) */
  const mx = Math.max(...p); assert(p[0] < mx && p[9] < mx, `faces below the peak ${Array.from(p)}`);
});
group('Field cooled, then the field removed: vortices leave only near the faces, so most of the flux stays, highest in the middle (a roof)', () => {
  const st = c.makeStrip({ Wx: 20, Ly: 12, np: 1.5, rp: 0.2, fp: 1, seed: 11 }); c.setField(st, 0.8); c.fillInside(st, 0.8); const N0 = st.x.length;
  for (let k = 1; k <= 2000; k++) { c.setField(st, 0.8 * (1 - k / 2000)); c.stepV(st, 0.05); } for (let k = 0; k < 600; k++) c.stepV(st, 0.05);
  assert(st.x.length > 0.4 * N0 && st.x.length < N0, `${st.x.length} of ${N0}`);
  const p = c.profile(st, 10); assert(p[0] < p[4] && p[9] < p[5], `roof: highest in the middle ${Array.from(p)}`);
});
console.log(`superconducting-vortices: ${n} groups passed`);
