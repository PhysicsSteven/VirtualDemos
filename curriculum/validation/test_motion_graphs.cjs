'use strict';
// Motion Graphs: exact piecewise constant acceleration kinematics, the motion detector estimates, the parabola fit and the CSV.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('motion-graphs', 'MG_VERSION,buildRun,stateAt,targetAt,targetSlope,sensorV,sensorA,quadFit,readingsCSV');
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

group('CSV: comment lines, version, SI snake case header, rows as typed', () => {
  const L = c.readingsCSV([{ t: '1.00', x: '-2.50' }, { t: '2.00', x: 'about 1' }], { version: c.MG_VERSION, setup: 'Speeding up', settings: 'x0 -8 m, a 1 m/s2' }).trim().split('\n');
  assert.match(L[0], /\(simulated data\)$/); assert.equal(L[1], `# demo version,${c.MG_VERSION}`); assert.match(c.MG_VERSION, /^motion-graphs@\d{4}-\d{2}-\d{2}/);
  const h = L.indexOf('row,t_s,x_m'); assert(h > 0); assert.equal(L[h + 1], '1,1.00,-2.50'); assert.equal(L[h + 2], '2,2.00,about 1');
});

console.log(`${n} motion-graphs test groups passed`);
