'use strict';
// Doppler Effect: the textbook factors, and the retarded time solver checked against an independent root finder
// and against the arrival rate of wavefronts (k = dt_e/dt), which is how the received frequency is defined.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('doppler', 'V_AIR,soundFactor,gammaOf,lightFactor,lineOfSight,coneHalfAngle,srcAt,retarded,received');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1e-300, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const v = c.V_AIR;

group('sound: source and observer on the line of sight (OpenStax Vol 1 §17.7)', () => {
  near(c.soundFactor(v, [1, 0], [30, 0], [0, 0]), v / (v - 30), 1e-15, 'source approaching');
  near(c.soundFactor(v, [1, 0], [-30, 0], [0, 0]), v / (v + 30), 1e-15, 'source receding');
  near(c.soundFactor(v, [1, 0], [0, 0], [-20, 0]), (v + 20) / v, 1e-15, 'observer approaching');
  near(c.soundFactor(v, [1, 0], [0, 0], [20, 0]), (v - 20) / v, 1e-15, 'observer receding');
  near(c.soundFactor(v, [1, 0], [0, 0], [0, 50]), 1, 1e-15, 'transverse observer: no shift');
  near(c.soundFactor(v, [1, 0], [25, 0], [25, 0]), 1, 1e-15, 'moving together: no shift');
});

group('light: line of sight factor √((1+β)/(1−β)), transverse redshift 1/γ, and the two are reciprocal', () => {
  for (const b of [0.01, 0.3, 0.6, 0.9]) {
    near(c.lightFactor(b, 1), c.lineOfSight(b), 1e-14, `cosθ = 1, β ${b}`);
    near(c.lightFactor(b, -1), c.lineOfSight(-b), 1e-14, `cosθ = −1, β ${b}`);
    near(c.lineOfSight(b) * c.lineOfSight(-b), 1, 1e-14, 'reciprocal');
    near(c.lightFactor(b, 0), 1 / c.gammaOf(b), 1e-14, 'transverse');
  }
  near(c.lineOfSight(1e-4), 1 + 1e-4, 1e-8, 'low speed: 1 + β');
});

group('Mach cone: sin θ = 1/M, none below Mach 1', () => {
  near(c.coneHalfAngle(2), Math.PI / 6, 1e-15); near(c.coneHalfAngle(1), Math.PI / 2, 1e-15);
  assert(Number.isNaN(c.coneHalfAngle(0.8)));
});

// one straight run along x through the origin at speed u; observer at (ox, oy)
const run = (u) => [{ t: -1e4, x: -1e4 * u, y: 0, vx: u, vy: 0 }];
// independent: emission times solve g(te) = v (t − te) − |r_o − r_s(te)| = 0, found by bisection on a fine scan
function rootsByScan(u, ox, oy, t, w) {
  const g = (te) => w * (t - te) - Math.hypot(ox - u * te, oy);
  const out = []; const T0 = t - 200, N = 200000, h = 200 / N;
  for (let i = 0; i < N; i++) {
    let a = T0 + i * h, b = a + h; if (g(a) * g(b) > 0) continue;
    for (let k = 0; k < 80; k++) { const m = (a + b) / 2; if (g(a) * g(m) <= 0) b = m; else a = m; }
    out.push((a + b) / 2);
  }
  return out.sort((p, q) => q - p);
}

group('retarded times match a brute force root finder, subsonic and supersonic', () => {
  for (const [u, ox, oy, t] of [[60, 30, 15, 0.4], [-200, -80, 40, 1.3], [500, -10, 20, 0.2], [700, -150, 60, 0.9]]) {
    const got = c.retarded(run(u), ox, oy, t, v).map((r) => r.te), ref = rootsByScan(u, ox, oy, t, v);
    assert.equal(got.length, ref.length, `number of arrivals u ${u}`);
    got.forEach((te, i) => assert(Math.abs(te - ref[i]) < 1e-9, `u ${u}: te ${te} vs ${ref[i]}`));
  }
  // supersonic source: nothing heard ahead of the cone, two wavefronts at once behind it
  assert.equal(c.retarded(run(686.4), 50, 10, 0, v).length, 0, 'ahead of the Mach 2 cone: silence');
  assert.equal(c.retarded(run(686.4), -100, 10, 0, v).length, 2, 'inside the cone: two arrivals');
});

group('received frequency equals the wavefront arrival rate dt_e/dt (sound, source moving)', () => {
  for (const [u, ox, oy, t] of [[60, 30, 15, 0.4], [-120, 10, 5, 0.05], [200, -40, 30, 0.7]]) {
    const H = run(u), dt = 1e-6;
    const r = c.received(H, ox, oy, t, v, [0, 0], false)[0];
    const te1 = c.retarded(H, ox, oy, t - dt, v)[0].te, te2 = c.retarded(H, ox, oy, t + dt, v)[0].te;
    near(r.k, (te2 - te1) / (2 * dt), 1e-6, `u ${u}`);
  }
});

group('light: received factor = (1/γ) dt_e/dt in the observer frame (time dilation of the source clock)', () => {
  const C = 1, beta = 0.6, H = run(beta * C);
  for (const [ox, oy, t] of [[3, 2, 0.5], [-4, 1, 1.0], [0.5, 3, 4]]) {
    const dt = 1e-6, r = c.received(H, ox, oy, t, C, [0, 0], true)[0];
    const te1 = c.retarded(H, ox, oy, t - dt, C)[0].te, te2 = c.retarded(H, ox, oy, t + dt, C)[0].te;
    near(r.k, (te2 - te1) / (2 * dt) / c.gammaOf(beta), 1e-6, `(${ox}, ${oy})`);
  }
});

group('a turn in the path: the source history picks the right straight piece', () => {
  const H = [{ t: 0, x: 0, y: 0, vx: 50, vy: 0 }, { t: 2, x: 100, y: 0, vx: 0, vy: 40 }];
  assert.deepEqual(c.srcAt(H, 1).slice(0, 2), [50, 0]); assert.deepEqual(c.srcAt(H, 3).slice(0, 2), [100, 40]);
  // at t = 3 an observer at the source's start hears the sound emitted at t_e where 343.2 (3 − t_e) = |r(t_e)|
  const r = c.retarded(H, 0, 0, 3, v)[0], p = c.srcAt(H, r.te);
  near(v * (3 - r.te), Math.hypot(p[0], p[1]), 1e-12, 'causality');
});

console.log(`${n} doppler test groups passed`);
