'use strict';
// Motion Graphs: exact piecewise constant acceleration kinematics, the motion detector estimates, the parabola fit and the CSV.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('motion-graphs', 'MG_VERSION,buildRun,stateAt,meetTimes,rampRun,targetAt,targetSlope,sensorV,sensorA,quadFit,readingsCSV');
let n = 0;
const near = (a, b, tol, what) => assert(Math.abs(a - b) <= tol, `${what || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('one stage: x = x0 + v0 t + a t²/2, v = v0 + a t; turning point where v = 0', () => {
  const r = c.buildRun(-6, 4, [{ a: -1, T: 8 }]);
  for (const t of [0, 1.3, 3, 4, 7.9, 8]) { const s = c.stateAt(r, t); near(s.x, -6 + 4 * t - 0.5 * t * t, 1e-12, 'x'); near(s.v, 4 - t, 1e-12, 'v'); assert.equal(s.a, -1); }
  near(c.stateAt(r, 4).v, 0, 1e-12); near(c.stateAt(r, 4).x, 2, 1e-12, 'top of the parabola');
  near(c.stateAt(r, 20).x, c.stateAt(r, 8).x, 0, 'clamped after the end');
});

group('stages join continuously in x and v; skipped stages ignored; total time adds', () => {
  const r = c.buildRun(-8, 0, [{ a: 2, T: 2 }, { a: 0, T: 3 }, { a: 0, T: 0 }, { a: -2, T: 2 }]);
  assert.equal(r.stages.length, 3); near(r.T, 7, 1e-12);
  for (const tb of [2, 5]) { const a = c.stateAt(r, tb - 1e-9), b = c.stateAt(r, tb + 1e-9); near(a.x, b.x, 1e-7); near(a.v, b.v, 1e-7); }
  near(c.stateAt(r, 7).v, 0, 1e-12, 'stops'); near(c.stateAt(r, 7).x, -8 + 4 + 12 + 4, 1e-12, 'area under the trapezoid');
});

group('slope and area: dx/dt = v and dv/dt = a numerically; ∫v dt = Δx, ∫a dt = Δv', () => {
  const r = c.buildRun(1, -2, [{ a: 1.5, T: 3 }, { a: -0.5, T: 4 }]);
  for (const t of [0.7, 2.2, 4.1, 6.5]) {
    const h = 1e-5, d = (k) => (c.stateAt(r, t + h)[k] - c.stateAt(r, t - h)[k]) / (2 * h);
    near(d('x'), c.stateAt(r, t).v, 1e-6, 'slope of x'); near(d('v'), c.stateAt(r, t).a, 1e-6, 'slope of v');
  }
  const N = 70000, t1 = 7; let ix = 0, iv = 0;
  for (let i = 0; i < N; i++) { const t = (i + 0.5) * t1 / N; ix += c.stateAt(r, t).v * t1 / N; iv += c.stateAt(r, t).a * t1 / N; }
  near(ix, c.stateAt(r, t1).x - 1, 1e-6, 'area under v'); near(iv, c.stateAt(r, t1).v + 2, 1e-6, 'area under a');
});

group('motion detector: exact for straight and parabolic samples away from the ends', () => {
  const dt = 0.02, xs = Array.from({ length: 501 }, (_, i) => 3 - 1.2 * (i * dt) + 0.4 * (i * dt) ** 2);
  for (const i of [50, 200, 450]) { near(c.sensorV(xs, dt, i, 10), -1.2 + 0.8 * i * dt, 1e-9, 'v'); near(c.sensorA(xs, dt, i, 15), 0.8, 1e-8, 'a'); }
  assert.equal(c.sensorA(xs, dt, 0, 15), 0);
  const pts = [[0, 1], [4, 3], [10, -2]];
  near(c.targetAt(pts, 2), 2, 1e-12); near(c.targetAt(pts, 7), 0.5, 1e-12); near(c.targetSlope(pts, 5), -5 / 6, 1e-12); near(c.targetAt(pts, 11), -2, 0);
});

group('parabola fit recovers x0, v0 and a/2; standard errors vanish for exact data', () => {
  const ts = [0, 0.5, 1, 1.5, 2, 3], xs = ts.map((t) => -6 + 4 * t - 0.5 * t * t);
  const F = c.quadFit(ts, xs); near(F.c[0], -6, 1e-9); near(F.c[1], 4, 1e-9); near(2 * F.c[2], -1, 1e-9);
  for (const e of F.se) assert(e < 1e-6);
  const G = c.quadFit([0, 1, 2, 3, 4], [0.01, 1.02, 3.97, 9.03, 15.98]); assert(G.se[2] > 0 && Math.abs(G.c[2] - 1) < 0.05);
  assert.equal(c.quadFit([1, 2], [1, 2]), null); assert.equal(c.quadFit([1, 1, 1], [1, 2, 3]), null);
});

group('free fall: a stays negative through the apex; height and speed agree with energy until return', () => {
  const g = 9.81, v0 = 12, r = c.buildRun(0, v0, [{ a: -g, T: 2 * v0 / g }]);
  const top = c.stateAt(r, v0 / g);
  near(top.v, 0, 1e-12); near(top.x, v0 * v0 / (2 * g), 1e-12); near(top.a, -g, 1e-12);
  for (const t of [0, 0.3, 0.9, 1.4, 2.2]) {
    const q = c.stateAt(r, t);
    near(q.a, -g, 1e-12); near(q.v * q.v + 2 * g * q.x, v0 * v0, 1e-10, 'energy per unit mass');
  }
  const landed = c.stateAt(r, 2 * v0 / g);
  near(landed.x, 0, 1e-12); near(landed.v, -v0, 1e-12);
  // stateAt clamps to the terminal flight state; it does not model the impact.
});

group('CSV: comment lines, version, SI snake case header, rows as typed', () => {
  const L = c.readingsCSV([{ t: '1.00', x: '-2.50' }, { t: '2.00', x: 'about 1' }], { version: c.MG_VERSION, setup: 'Speeding up', settings: 'x0 -8 m, a 1 m/s2' }).trim().split('\n');
  assert.match(L[0], /\(simulated data\)$/); assert.equal(L[1], `# demo version,${c.MG_VERSION}`); assert.match(c.MG_VERSION, /^motion-graphs@\d{4}-\d{2}-\d{2}/);
  const h = L.indexOf('row,t_s,x_m'); assert(h > 0); assert.equal(L[h + 1], '1,1.00,-2.50'); assert.equal(L[h + 2], '2,2.00,about 1');
});

group('two cars: meeting times solve x_A = x_B exactly, across stage changes', () => {
  const A = c.buildRun(-8, 0, [{ a: 1, T: 8 }]), B = c.buildRun(-6, 2, [{ a: 0, T: 8 }]);
  const M = c.meetTimes(A, B, 8); assert.equal(M.same, false); assert.equal(M.t.length, 1);
  near(M.t[0], 2 + Math.sqrt(8), 1e-12, 'the opening Two cars setup'); near(c.stateAt(A, M.t[0]).x, c.stateAt(B, M.t[0]).x, 1e-12);
  near(c.stateAt(A, M.t[0]).x, 3.6568542494923806, 1e-12);
  // two crossings: B ahead and slowing, A behind and steady
  const A2 = c.buildRun(0, 3, [{ a: 0, T: 10 }]), B2 = c.buildRun(2, 6, [{ a: -2, T: 10 }]);
  const M2 = c.meetTimes(A2, B2, 10); assert.equal(M2.t.length, 1, 'B starts ahead, so only one crossing after t = 0');
  near(M2.t[0], (3 + Math.sqrt(9 + 8)) / 2, 1e-12);
  // A in three stages against a steady B: brute force sign changes match
  const A3 = c.buildRun(-8, 0, [{ a: 2, T: 2 }, { a: 0, T: 3 }, { a: -3, T: 3 }]), B3 = c.buildRun(-2, 1.5, [{ a: 0, T: 8 }]);
  const M3 = c.meetTimes(A3, B3, 8), N = 79999;   /* odd grid, so no sample lands on the crossing at t = 4 */ let flips = 0;
  for (let i = 0; i < N; i++) { const d0 = c.stateAt(A3, i * 8 / N).x - c.stateAt(B3, i * 8 / N).x, d1 = c.stateAt(A3, (i + 1) * 8 / N).x - c.stateAt(B3, (i + 1) * 8 / N).x; if (d0 * d1 < 0) flips++; }
  assert.equal(M3.t.length, flips, 'one root per crossing'); for (const t of M3.t) near(c.stateAt(A3, t).x, c.stateAt(B3, t).x, 1e-9);
  assert.equal(c.meetTimes(A, c.buildRun(-8, 0, [{ a: 1, T: 8 }]), 8).same, true);
  assert.deepEqual(c.meetTimes(A, c.buildRun(20, 5, [{ a: 0, T: 8 }]), 8).t, []);
});

group('ball on ramps: a = −(5/7) g sin θ per piece, energy conserved through the bends, stops at the ends', () => {
  const g = 9.81, L = 3, ang = [-20, 0, 30], r = c.rampRun(ang, L, 0, 12, g);
  near(r.stages[0].a, (5 / 7) * g * Math.sin(20 * Math.PI / 180), 1e-12, 'down piece 1');
  near(r.stages[1].a, 0, 1e-12, 'flat'); near(r.stages[2].a, -(5 / 7) * g * Math.sin(30 * Math.PI / 180), 1e-12, 'up piece 3');
  // height along the track and rolling energy: (7/10) v² + g h is constant
  const h = (x) => { let y = 0, s = x; for (const d of ang) { const u = Math.min(Math.max(s, 0), L); y += u * Math.sin(d * Math.PI / 180); s -= L; } return y; };
  for (let t = 0; t <= 12; t += 0.37) { const q = c.stateAt(r, t); near(0.7 * q.v * q.v + g * h(q.x), 0, 1e-9, `energy at t = ${t}`); assert(q.x >= -1e-9 && q.x <= 3 * L + 1e-9); }
  near(r.stages[1].v0, Math.sqrt(2 * (5 / 7) * g * L * Math.sin(20 * Math.PI / 180)), 1e-12, 'speed at the first bend');
  assert.equal(r.why, 'time'); near(r.T, 12, 1e-12);
  // runs off the right end: caught there with the speed energy gives
  const r2 = c.rampRun([-20, 0, 15], L, 0, 12, g), e = c.stateAt(r2, r2.T);
  assert.equal(r2.why, 'right'); near(e.x, 9, 1e-12); near(0.7 * e.v * e.v, -g * (L * Math.sin(-20 * Math.PI / 180) + L * Math.sin(15 * Math.PI / 180)), 1e-9);
  // a valley from rest: nothing happens; a ball started up a hill comes back and is caught at the left end
  assert.equal(c.rampRun([10, 0, -10], L, 0, 12, g).why, 'rest');
  const r3 = c.rampRun([20, 20, 20], L, 2, 12, g); assert.equal(r3.why, 'left'); near(c.stateAt(r3, r3.T).v, -2, 1e-9);
  near(r3.T, 2 * 2 / ((5 / 7) * g * Math.sin(20 * Math.PI / 180)), 1e-9, 'up and back down the first piece');
});

console.log(`${n} motion-graphs test groups passed`);
