'use strict';
// Kepler's Laws Sandbox: bodies that all pull on one another (G = 4π² AU³/(M☉·yr²)), velocity Verlet with a shared step, merging on contact.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const K = core('kepler-orbits', 'TAU,SBK_ETA,nbAccel,nbDt,nbAdvance,nbMergeOnce,nbTotals,nbHost,nbElements,nbCircular,orbitElements,assistStart');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
const rel = (a, b) => Math.abs(a - b) / Math.abs(b);
function group(name, f) { f(); n++; console.log('PASS', name); }
const body = (id, m, x, y, vx, vy, R = 1e-6) => ({ id, name: id, m, x, y, vx, vy, R });
const run = (bs, T) => { const st = { t: 0, bs }; while (st.t < T - 1e-12) K.nbAdvance(st, T, 1e7); return st; };
group('Sun and Earth: Earth comes back after one sidereal period of the pair, energy and momentum kept', () => {
  const me = 3.0035e-6, sun = body('S', 1, 0, 0, 0, 0), earth = body('E', me, 1, 0, 0, 0); Object.assign(earth, K.nbCircular(sun, me, 1, 0));
  const t0 = K.nbTotals([sun, earth]), P = 1 / Math.sqrt(1 + me), st = run([sun, earth], P), t1 = K.nbTotals(st.bs);
  const rx = st.bs[1].x - st.bs[0].x, ry = st.bs[1].y - st.bs[0].y; assert(Math.hypot(rx - 1, ry) < 1e-4, `back to the start: ${rx}, ${ry}`);
  assert(rel(t1.E, t0.E) < 1e-8, 'energy'); near(t1.px, t0.px, 1e-15); near(t1.Lz, t0.Lz, 1e-12);
});
group('an eccentric orbit keeps Kepler\'s third law with both masses: P² = a³/(M + m)', () => {
  const m = 0.1, a = 2, e = 0.6, q = a * (1 - e), v = Math.sqrt(K.TAU ** 2 * (1 + m) * (1 + e) / q);
  const bs = [body('S', 1, 0, 0, 0, 0), body('P', m, q, 0, 0, v)];
  const el = K.nbElements(bs[1], bs[0]); near(el.a, a, 1e-12); near(el.e, e, 1e-12); near(el.P, Math.sqrt(a ** 3 / (1 + m)), 1e-12);
  const t0 = K.nbTotals(bs), st = run(bs, 3 * el.P), r = K.nbElements(st.bs[1], st.bs[0]);
  assert(Math.hypot(st.bs[1].x - st.bs[0].x - q, st.bs[1].y - st.bs[0].y) < 2e-3 * a, 'back at perihelion after three periods');
  assert(rel(K.nbTotals(st.bs).E, t0.E) < 1e-6, 'energy'); near(r.a, a, 1e-5);
});
group('two equal stars circle their center of mass with P = √(d³/(M₁ + M₂))', () => {
  const d = 2, v = Math.PI;   /* relative speed √(G·2/d) = 2π, each star half of it */
  const bs = [body('A', 1, -1, 0, 0, -v), body('B', 1, 1, 0, 0, v)], P = Math.sqrt(d ** 3 / 2);
  const st = run(bs, P); assert(Math.hypot(st.bs[0].x + 1, st.bs[0].y) < 1e-4 && Math.hypot(st.bs[1].x - 1, st.bs[1].y) < 1e-4);
  const t = K.nbTotals(st.bs); near(t.X, 0, 1e-12); near(t.Y, 0, 1e-12);
});
group('the figure eight of three equal masses (Chenciner and Montgomery 2000) closes after one period', () => {
  const s = K.TAU, x1 = 0.97000436, y1 = -0.24308753, v3x = -0.93240737, v3y = -0.86473146;
  const bs = [body('1', 1, x1, y1, -v3x / 2 * s, -v3y / 2 * s), body('2', 1, -x1, -y1, -v3x / 2 * s, -v3y / 2 * s), body('3', 1, 0, 0, v3x * s, v3y * s)];
  const T = 6.32591398 / s, t0 = K.nbTotals(bs), st = run(bs, T);
  const start = [[x1, y1], [-x1, -y1], [0, 0]]; st.bs.forEach((b, i) => assert(Math.hypot(b.x - start[i][0], b.y - start[i][1]) < 2e-3, `body ${i + 1} back: ${b.x}, ${b.y}`));
  assert(rel(K.nbTotals(st.bs).E, t0.E) < 1e-6, 'energy'); near(K.nbTotals(st.bs).px, 0, 1e-9);
});
group('momentum and angular momentum stay fixed in a five body tangle; the step shrinks in close passes', () => {
  const bs = [body('S', 1, 0, 0, 0, 0), body('J', 0.001, 5.2, 0, 0, 2.76), body('E', 3e-6, 1, 0, 0, 6.28), body('X', 0.3, -3, 1, 1, -2), body('M', 4e-8, 1.002, 0, 0, 6.5)];
  const t0 = K.nbTotals(bs), st = run(bs, 5), t1 = K.nbTotals(st.bs);
  near(t1.px, t0.px, 1e-12); near(t1.py, t0.py, 1e-12); near(t1.Lz, t0.Lz, 1e-10);
  assert(K.nbDt([body('a', 1, 0, 0, 0, 0), body('b', 1, 0.01, 0, 0, 0)]) < K.nbDt([body('a', 1, 0, 0, 0, 0), body('b', 1, 1, 0, 0, 0)]) / 900);
});
group('bodies that touch merge, keeping mass and momentum', () => {
  const bs = [body('A', 1, -0.05, 0, 3, 0, 0.005), body('B', 0.5, 0.05, 0, -1, 0.2, 0.004)], p0 = K.nbTotals(bs);
  const st = run(bs, 0.1); assert.equal(st.bs.length, 1); const c = st.bs[0];
  near(c.m, 1.5, 1e-15); near(c.m * c.vx, p0.px, 1e-12); near(c.m * c.vy, p0.py, 1e-12); assert.equal(c.name, 'A'); near(c.R, Math.cbrt(0.005 ** 3 + 0.004 ** 3), 1e-12);
});
group('the host is the heavier body that pulls hardest; a circular launch gives e = 0', () => {
  const sun = body('S', 1, 0, 0, 0, 0), jup = body('J', 0.001, 1, 0, 0, 6.28), moon = body('M', 4e-8, 1.01, 0, 0, 0);
  assert.equal(K.nbHost([sun, jup, moon], moon), jup); assert.equal(K.nbHost([sun, jup, moon], jup), sun); assert.equal(K.nbHost([sun, jup], sun), null);
  Object.assign(moon, K.nbCircular(jup, moon.m, moon.x, moon.y)); near(K.nbElements(moon, jup).e, 0, 1e-9);
});
group('Gravity assist past Jupiter: bound before, unbound after; the same speed relative to Jupiter in and out; total energy kept', () => {
  const AU_KM = 1.495978707e8, mJ = 1 / 1047.35, G = 4 * Math.PI ** 2, KMS = 4.740470, J = KMS * KMS;
  const q = K.assistStart({ mJ, aJ: 5.2029, q0: 1, Q0: 9, rp: 0.003, tBack: 1, mP: 2e4 / 1.98841e30, RS: 695700 / AU_KM, RJ: 71492 / AU_KM, RP: 0.01 / AU_KM });
  const st = { t: 0, bs: q.map((b, i) => Object.assign({ id: i, name: 'b' + i }, b)) }, E0 = K.nbTotals(st.bs).E;
  const eps = () => K.nbElements(st.bs[2], st.bs[0]).eps * J;
  const e0 = eps(); let dmin = Infinity, tmin = 0, prev = null; const cross = [];
  for (let t = 0.0005; t <= 2.5 + 1e-9; t += 0.0005) {
    K.nbAdvance(st, t, 1e7); assert.equal(st.bs.length, 3, 'no merge');
    const [, j, p] = st.bs, d = Math.hypot(p.x - j.x, p.y - j.y);
    if (d < dmin) { dmin = d; tmin = t; }
    if (prev != null && (prev - 0.1) * (d - 0.1) < 0) cross.push(Math.hypot(p.vx - j.vx, p.vy - j.vy) * KMS);
    prev = d;
  }
  const e1 = eps();
  near(dmin * AU_KM, 0.003 * AU_KM, 0.01, 'closest approach (km)'); near(tmin, 1, 0.002, 'flyby one year in');
  assert(e0 < -80 && e0 > -100, `bound before: ε = ${e0}`); assert(e1 > 100 && e1 < 120, `unbound after: ε = ${e1}`);
  assert.equal(cross.length, 2); assert(rel(cross[1], cross[0]) < 0.01, `u at 0.1 AU in ${cross[0]}, out ${cross[1]}`);
  assert(rel(K.nbTotals(st.bs).E, E0) < 1e-9, 'total energy of the system');
  console.log(`   probe ε around the Sun ${e0.toFixed(1)} → ${e1.toFixed(1)} MJ/kg; u at 0.1 AU from Jupiter ${cross[0].toFixed(2)} in, ${cross[1].toFixed(2)} out km/s`);
});
console.log(`${n} kepler sandbox test groups passed`);
