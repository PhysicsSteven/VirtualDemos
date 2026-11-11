'use strict';
// Node test of the Kepler's Laws demo's CORE block against analytic two body results:
// orbital elements from initial conditions, the period from Kepler's third law, conservation of energy and
// angular momentum by the integrator, equal areas in equal times, open orbits, and the fit and CSV helpers.
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const K = core('kepler-orbits', 'TAU,KMS,R_HIT,orbitElements,accelOf,specificEnergy,newBody,startWedgesOn,resetPeriodClock,advanceBody,launchState,energyParts,launchAtFraction,num,fitOrigin,csvCell,buildCSV');
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

test('a very slow launch is a bound ellipse, not a parabola; a launch at escape speed is', () => {
  const m = GM(1);
  for (const kms of [0.2, 0.5, 1.0, 1.3]) {               /* tangential at 1 AU: e = 1 - v²r/m, just under 1 */
    const el = K.orbitElements({ x: 1, y: 0, vx: 0, vy: kms / K.KMS }, m);
    assert.ok(el.e > 0.997 && el.eps < 0, 'e ' + el.e);
    assert.equal(el.parabolic, false); assert.equal(el.bound, true);
    close(el.a, -m / (2 * el.eps), 1e-12); close(el.P * el.P, el.a ** 3, 1e-12);
  }
  const esc = K.orbitElements({ x: 1, y: 0, vx: 0, vy: Math.sqrt(2 * m) }, m);
  assert.equal(esc.parabolic, true); assert.equal(esc.bound, false);
  const fast = K.orbitElements({ x: 1, y: 0, vx: 0, vy: 1.01 * Math.sqrt(2 * m) }, m);
  assert.equal(fast.parabolic, false); assert.equal(fast.bound, false);
});

test('CSV helpers', () => {
  assert.equal(K.buildCSV(['T (simulated data)', ['demo version', 'kepler-orbits@x']], ['a_AU', 'T_yr'], [[0.3871, 0.24084], ["Halley's comet", '']]),
    "# T (simulated data)\n# demo version,kepler-orbits@x\na_AU,T_yr\n0.3871,0.24084\nHalley's comet,\n");
  assert.equal(K.csvCell('a,b'), '"a,b"'); assert.equal(K.num('−2'), -2);
});

test('bound and unbound: the sign of E from v0/v_esc, e = |2f² − 1| sideways, and K + U conserved on every shape', () => {
  for (const M of [0.5, 1, 2]) for (const r of [0.4, 1, 3]) {
    const m = GM(M), base = { x: r * Math.cos(0.7), y: r * Math.sin(0.7), vx: 0, vy: 0 };
    for (const f of [0.1, 0.3, Math.SQRT1_2, 0.85, 1, 1.2, 1.6]) {
      const st = K.launchAtFraction(base, m, f, true), el = K.orbitElements(st, m), E = K.energyParts(st, m);
      close(Math.hypot(st.vx, st.vy), f * Math.sqrt(2 * m / r), 1e-12);
      close(st.x * st.vx + st.y * st.vy, 0, 0, 1e-12 * m);                       // sideways: v perpendicular to r
      close(E.E, E.K + E.U, 1e-15); close(E.U, -m / r, 1e-14); close(E.E, el.eps, 1e-12, 1e-12);
      close(E.E, (f * f - 1) * m / r, 1e-12, 1e-12);                             // E = (f² − 1) GM/r
      close(el.e, Math.abs(2 * f * f - 1), 1e-9, 1e-9);
      if (f < 1) assert.ok(el.bound && E.E < 0); else if (f === 1) assert.ok(el.parabolic); else assert.ok(!el.bound && E.E > 0);
      if (f === Math.SQRT1_2) assert.ok(el.e < 1e-9, 'circle at v = √(GM/r)');
    }
    // keeping the direction: the speed changes, the direction does not
    const tilt = { x: r, y: 0, vx: 1, vy: 2 }, t2 = K.launchAtFraction(tilt, m, 1.2, false);
    close(Math.atan2(t2.vy, t2.vx), Math.atan2(2, 1), 1e-12); close(Math.hypot(t2.vx, t2.vy), 1.2 * Math.sqrt(2 * m / r), 1e-12);
  }
  // integrated: K and U trade, K + U stays put (ellipse launched at aphelion, parabola, hyperbola)
  for (const f of [0.4, 0.85, 1, 1.2]) {
    const m = GM(1), st = K.launchAtFraction({ x: 1, y: 0, vx: 0, vy: 1 }, m, f, true), E0 = K.energyParts(st, m);
    const b = run(st, 1, 3), E1 = K.energyParts(b, m), scale = m / Math.min(1, K.orbitElements(st, m).q);
    assert.ok(Math.abs(E1.E - E0.E) < 2e-6 * scale, `f = ${f}: E drifted ${E1.E - E0.E}`);
    assert.ok(Math.abs(E1.K - E0.K) > 0.05 * scale || f === 0.4, 'kinetic energy changed along the path');
  }
});

console.log(`${n} kepler-orbits test groups passed`);
