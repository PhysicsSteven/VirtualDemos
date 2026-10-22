'use strict';
// Node test of the Kepler's Laws demo's CORE block against analytic two body results:
// orbital elements from initial conditions, the period from Kepler's third law, conservation of energy and
// angular momentum by the integrator, equal areas in equal times, open orbits, and the fit and CSV helpers.
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const K = core('kepler-orbits', 'TAU,KMS,R_HIT,orbitElements,accelOf,specificEnergy,newBody,startWedgesOn,resetPeriodClock,advanceBody,launchState,num,fitOrigin,csvCell,buildCSV');
let n = 0;
const close = (a, b, rel = 1e-12, abs = 1e-12, msg = '') => assert(Math.abs(a - b) <= abs + rel * Math.abs(b), `${msg} expected ${b}, got ${a}`);
const test = (name, fn) => { fn(); n++; console.log('PASS', name); };
const GM = (M) => 4 * Math.PI * Math.PI * M;      // AU³/yr² for M in solar masses
const run = (st, M, T, nW) => { const m = GM(M), b = K.newBody(st, 0, m); K.startWedgesOn(b, m, nW || 12); K.advanceBody(b, T, 1e8, m, nW || 12); return b; };

test('elements from initial conditions: circle, ellipse at perihelion and at aphelion', () => {
  const c = K.orbitElements({ x: 1, y: 0, vx: 0, vy: 2 * Math.PI }, GM(1));
  close(c.a, 1); close(c.e, 0, 0, 1e-12); close(c.P, 1); close(c.vcirc, 2 * Math.PI); close(c.vesc, 2 * Math.SQRT2 * Math.PI);
  for (const M of [0.3, 1, 2.5]) for (const [a, e] of [[0.3871, 0.2056], [1.5237, 0.0934], [17.8, 0.967]]) for (const at of ['peri', 'aph']) {
    const el = K.orbitElements(K.launchState({ a, e, at }, GM(M)), GM(M));
    close(el.a, a, 1e-12); close(el.e, e, 1e-11); close(el.q, a * (1 - e), 1e-12); close(el.Q, a * (1 + e), 1e-12);
    close(el.P * el.P, a ** 3 / M, 1e-12);                                // P² = a³/M in AU, yr, M_sun
    close(el.vp / el.va, (1 + e) / (1 - e), 1e-11);                       // second law: r_p v_p = r_a v_a
    close(el.eps, -GM(M) / (2 * a), 1e-12);                               // vis viva energy
  }
  // Mercury from the preset: 0.3075 AU at 58.98 km/s
  const me = K.launchState({ a: 0.3871, e: 0.2056, at: 'peri' }, GM(1));
  close(me.x, 0.30751, 1e-4); close(me.vy * K.KMS, 58.98, 1e-4);
});

test('third law: the integrated period matches 2 pi sqrt(a³/GM) for several masses, sizes and shapes', () => {
  let worst = 0;
  for (const M of [0.5, 1, 2]) for (const a of [0.4, 1, 5.2]) for (const e of [0, 0.2, 0.6]) {
    const P = 2 * Math.PI * Math.sqrt(a ** 3 / GM(M)), b = run(K.launchState({ a, e, at: 'peri' }, GM(M)), M, 2.05 * P);
    assert.equal(b.turns, 2);
    worst = Math.max(worst, Math.abs(b.Pm / P - 1));
  }
  assert.ok(worst < 2e-5, `worst period error ${worst}`);
  console.log(`   worst relative period error over 27 orbits: ${worst.toExponential(2)}`);
});

test('energy and angular momentum over many orbits (Halley, e = 0.967, 20 orbits)', () => {
  const M = 1, m = GM(M), st = K.launchState({ a: 17.8, e: 0.967, at: 'aph' }, m), P = 2 * Math.PI * Math.sqrt(17.8 ** 3 / m);
  const b = run(st, M, 20 * P), h0 = st.x * st.vy - st.y * st.vx;
  const dE = Math.abs(K.specificEnergy(b, m) - b.E0) / Math.abs(b.E0);
  assert.ok(dE < 1e-4, `energy drift ${dE}`);
  close(b.x * b.vy - b.y * b.vx, h0, 1e-11);                              // kicks are central, drifts keep r × v
  // the orbit closes: back at aphelion after a whole number of periods
  close(Math.hypot(b.x, b.y), 17.8 * 1.967, 1e-4);
  console.log(`   Halley energy drift after 20 orbits: ${dE.toExponential(2)}`);
});

test('equal areas in equal times: every wedge equals ½·h·Δt', () => {
  for (const e of [0.0167, 0.2056, 0.6, 0.9]) for (const nW of [8, 12, 16]) {
    const m = GM(1), st = K.launchState({ a: 1, e, at: 'peri' }, m), b = run(st, 1, 1.5, nW), h = st.x * st.vy - st.y * st.vx;
    assert.equal(b.wedges.length, nW);
    for (const w of b.wedges) close(w.area, 0.5 * h * b.dtW, 1e-9);
    // the wedges of one period tile the ellipse: n·(½ h Δt) = π a b
    close(nW * 0.5 * h * b.dtW, Math.PI * Math.sqrt(1 - e * e), 1e-12);
  }
});

test('open orbits: parabola at escape speed, hyperbola above it with v∞² = v0² − 2GM/r0', () => {
  const m = GM(1), par = K.orbitElements(K.launchState({ r: 1, f: Math.SQRT2 }, m), m);
  assert.ok(par.parabolic && !par.bound); close(par.eps, 0, 0, 1e-12);
  const st = K.launchState({ r: 1, f: 1.2 * Math.SQRT2 }, m), hy = K.orbitElements(st, m);
  assert.ok(!hy.bound && hy.e > 1); close(hy.vinf ** 2, st.vy ** 2 - 2 * m, 1e-12);
  assert.equal(hy.P, Infinity); assert.equal(hy.a, Infinity);
  // the integrated planet keeps its energy on the way out and leaves the field
  const b = run(st, 1, 400);
  assert.equal(b.done, 'far'); close(K.specificEnergy(b, m), hy.eps, 1e-4);
  console.log(`   hyperbola energy drift out to 1000 AU: ${(Math.abs(K.specificEnergy(b, m) / hy.eps - 1)).toExponential(2)}`);
});

test('a planet dropped from rest falls into the star', () => {
  const m = GM(1), b = K.newBody({ x: 1, y: 0, vx: 0, vy: 0 }, 0, m);
  K.advanceBody(b, 1, 1e7, m, 12);
  assert.equal(b.done, 'hit'); assert.ok(Math.hypot(b.x, b.y) < K.R_HIT);
  // free fall time from rest at r is (π/2)·sqrt(r³/(2GM)); the hit comes just before it
  assert.ok(b.t < Math.PI / 2 * Math.sqrt(1 / (2 * m)) && b.t > 0.17);
});

test('the fit of readings recovers 4 pi²/GM = 1/M from timer and ruler values as displayed', () => {
  for (const M of [0.5, 1, 2]) {
    const xs = [], ys = [];
    for (const a of [0.3871, 0.7233, 1, 1.5237, 5.2029]) {
      const T = +(2 * Math.PI * Math.sqrt(a ** 3 / GM(M))).toPrecision(5), ad = +((2 * a).toPrecision(4)) / 2;   // timer 5 figures, ruler 4
      xs.push(ad ** 3); ys.push(T * T);
    }
    const f = K.fitOrigin(xs, ys);
    close(f.b, 1 / M, 2e-3); assert.ok(f.sb < 1e-3);
  }
  const exact = K.fitOrigin([1, 8, 27], [1, 8, 27]);
  close(exact.b, 1); close(exact.sb, 0);
});

test('CSV helpers', () => {
  assert.equal(K.buildCSV(['T (simulated data)', ['demo version', 'kepler-orbits@x']], ['a_AU', 'T_yr'], [[0.3871, 0.24084], ["Halley's comet", '']]),
    "# T (simulated data)\n# demo version,kepler-orbits@x\na_AU,T_yr\n0.3871,0.24084\nHalley's comet,\n");
  assert.equal(K.csvCell('a,b'), '"a,b"'); assert.equal(K.num('−2'), -2);
});

console.log(`${n} kepler-orbits test groups passed`);
