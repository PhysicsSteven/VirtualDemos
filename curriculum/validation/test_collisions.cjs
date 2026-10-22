'use strict';
// Collisions and Momentum: core physics, photogate timing, fit and CSV helpers (node curriculum/validation/test_collisions.cjs)
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const C = core('collisions', 'collide1D,keLoss,trackRun,collide2D,tableRun,explode,explodeRun,bumper,integrate,restitution,keLossFraction,cmFrame,GATE,gateIntervals,gateReading,fitLine,fitPoints,readingsCSV,cradleInit,cradleStep,cradleEnergy');
let count = 0;
function test(name, f) { f(); count++; console.log('PASS', name); }
const close = (a, b, tol, msg) => assert(Math.abs(a - b) <= tol, `${msg || ''} expected ${b}, got ${a} (tol ${tol})`);
// deterministic pseudo random numbers (mulberry32)
let seed = 12345;
const rnd = () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
const cases = Array.from({ length: 400 }, () => ({ m1: 0.2 + 4.8 * rnd(), m2: 0.2 + 4.8 * rnd(), u1: -2 + 4 * rnd(), u2: -2 + 4 * rnd(), e: rnd() }));
const K = (m1, m2, a, b) => 0.5 * m1 * a * a + 0.5 * m2 * b * b;

test('momentum is conserved for every e', () => {
  for (const c of cases) for (const e of [0, 0.25, c.e, 0.9, 1]) {
    const [v1, v2] = C.collide1D(c.m1, c.m2, c.u1, c.u2, e);
    close(c.m1 * v1 + c.m2 * v2, c.m1 * c.u1 + c.m2 * c.u2, 1e-12, 'p');
  }
});
test('kinetic energy is conserved at e = 1 and lost as ½μ(1 − e²)v_rel² otherwise', () => {
  for (const c of cases) {
    const [a, b] = C.collide1D(c.m1, c.m2, c.u1, c.u2, 1);
    close(K(c.m1, c.m2, a, b), K(c.m1, c.m2, c.u1, c.u2), 1e-12, 'K at e = 1');
    const [v1, v2] = C.collide1D(c.m1, c.m2, c.u1, c.u2, c.e);
    const lost = K(c.m1, c.m2, c.u1, c.u2) - K(c.m1, c.m2, v1, v2), mu = c.m1 * c.m2 / (c.m1 + c.m2);
    close(lost, C.keLoss(c.m1, c.m2, c.u1, c.u2, c.e), 1e-12, 'loss');
    close(lost, 0.5 * mu * (1 - c.e * c.e) * (c.u1 - c.u2) ** 2, 1e-12, 'loss formula');
    assert(lost >= -1e-12);
  }
});
test('loss fraction formula, and (1 − e²)m₂/(m₁ + m₂) for a target at rest', () => {
  for (const c of cases) {
    const [v1, v2] = C.collide1D(c.m1, c.m2, c.u1, c.u2, c.e), K0 = K(c.m1, c.m2, c.u1, c.u2);
    close(C.keLossFraction(c.m1, c.m2, c.u1, c.u2, c.e), (K0 - K(c.m1, c.m2, v1, v2)) / K0, 1e-10, 'fraction');
    close(C.keLossFraction(c.m1, c.m2, c.u1, 0, c.e), (1 - c.e * c.e) * c.m2 / (c.m1 + c.m2), 1e-12, 'target at rest');
  }
  close(C.keLossFraction(1, 1, 1, 0, 0), 0.5, 1e-15, 'equal masses stick: half lost');
  close(C.keLossFraction(1, 3, 1, 0, 0), 0.75, 1e-15, 'Q2 of the notes: 3/4 lost');
  assert.equal(C.keLossFraction(1, 1, 0, 0, 0.5), 0);
});
test('e is recovered from relative velocities; e = 0 sticks at the center of mass velocity', () => {
  for (const c of cases) {
    if (Math.abs(c.u1 - c.u2) < 1e-3) continue;
    const [v1, v2] = C.collide1D(c.m1, c.m2, c.u1, c.u2, c.e);
    close(C.restitution(c.u1, c.u2, v1, v2), c.e, 1e-9, 'e');
    const [s1, s2] = C.collide1D(c.m1, c.m2, c.u1, c.u2, 0), V = C.cmFrame(c.m1, c.m2, c.u1, c.u2).V;
    close(s1, V, 1e-12); close(s2, V, 1e-12);
  }
  // textbook limits: equal masses, elastic, target at rest swap velocities; heavy on light at rest gives v₂′ = 2m₁u₁/(m₁ + m₂)
  const [a, b] = C.collide1D(1, 1, 1, 0, 1); close(a, 0, 1e-15); close(b, 1, 1e-15);
  const [h1, h2] = C.collide1D(4, 0.5, 0.8, 0, 1); close(h2, 2 * 4 * 0.8 / 4.5, 1e-15); close(h1, 0.8 * 3.5 / 4.5, 1e-15);
});
test('center of mass frame: equal and opposite momenta, each velocity reversed and scaled by e', () => {
  for (const c of cases) {
    const f = C.cmFrame(c.m1, c.m2, c.u1, c.u2), [v1, v2] = C.collide1D(c.m1, c.m2, c.u1, c.u2, c.e);
    close(c.m1 * f.u1 + c.m2 * f.u2, 0, 1e-12, 'total p in CM');
    close(v1 - f.V, -c.e * f.u1, 1e-12, 'u1* -> -e u1*'); close(v2 - f.V, -c.e * f.u2, 1e-12, 'u2* -> -e u2*');
    // the lost energy is (1 − e²) of the energy of motion relative to the center of mass
    close(C.keLoss(c.m1, c.m2, c.u1, c.u2, c.e), (1 - c.e * c.e) * K(c.m1, c.m2, f.u1, f.u2), 1e-12, 'K_rel');
  }
});
test('2D smooth discs: momentum vector conserved, tangential velocity unchanged, equal mass elastic gives 90°', () => {
  for (let k = 0; k < 300; k++) {
    const R1 = 0.06, R2 = 0.06, D = R1 + R2, b = (rnd() * 2 - 1) * 0.999 * D, sp = 0.2 + 1.8 * rnd();
    const p = { m1: 1, m2: 1, e: 1, R1, R2, r1: [-0.7, 0], v1: [sp, 0], r2: [0, b], v2: [0, 0] };
    const c = C.collide2D(p);
    assert(isFinite(c.tc), 'they hit');
    close(c.u1[0] + c.u2[0], sp, 1e-12); close(c.u1[1] + c.u2[1], 0, 1e-12);
    close(c.u1[0] ** 2 + c.u1[1] ** 2 + c.u2[0] ** 2 + c.u2[1] ** 2, sp * sp, 1e-12, 'K');
    if (Math.abs(b) > 1e-6 * D) close(c.u1[0] * c.u2[0] + c.u1[1] * c.u2[1], 0, 1e-12, 'perpendicular');
    const t = [-c.n[1], c.n[0]];
    close(c.u1[0] * t[0] + c.u1[1] * t[1], p.v1[0] * t[0], 1e-12, 'tangential 1');
    // e < 1: the angle closes up (dot product > 0) unless head on
    const q = C.collide2D({ ...p, e: 0.5 });
    if (Math.abs(b) > 1e-3 && Math.abs(b) < 0.999 * D) assert(q.u1[0] * q.u2[0] + q.u1[1] * q.u2[1] > 0, 'angle below 90° for e < 1');
    // unequal masses and moving target: momentum and the normal restitution law
    const m = { m1: 0.2 + 4.8 * rnd(), m2: 0.2 + 4.8 * rnd(), e: rnd(), R1, R2, r1: [-0.7, -0.05], v1: [1.2, 0.1], r2: [0, 0.02], v2: [-0.3, 0.05] };
    const z = C.collide2D(m);
    if (isFinite(z.tc)) {
      for (const ax of [0, 1]) close(m.m1 * z.u1[ax] + m.m2 * z.u2[ax], m.m1 * m.v1[ax] + m.m2 * m.v2[ax], 1e-12);
      const vn = (u, w) => (u[0] - w[0]) * z.n[0] + (u[1] - w[1]) * z.n[1];
      close(vn(z.u2, z.u1), m.e * vn(m.v1, m.v2), 1e-12, 'normal restitution');
    }
  }
  assert.equal(C.collide2D({ m1: 1, m2: 1, e: 1, R1: 0.06, R2: 0.06, r1: [-0.7, 0], v1: [1, 0], r2: [0, 0.13], v2: [0, 0] }).tc, Infinity, 'miss');
});
test('track run: contact when the faces touch; explosion: momentum M V and kinetic energy gain E', () => {
  const tr = C.trackRun({ m1: 1, m2: 1, v1: 1, v2: 0, x1: -0.6, x2: 0.1, L1: 0.19, L2: 0.19, e: 1 });
  close(tr.bodies[1].pos(tr.tc)[0] - tr.bodies[0].pos(tr.tc)[0], 0.19, 1e-12); close(tr.tc, 0.51, 1e-12);
  for (const [m1, m2, E, V] of [[2, 1, 1, 0], [5, 0.2, 2, 0], [1, 1, 0.5, 0.4], [0.3, 4, 3, -0.7]]) {
    const [v1, v2] = C.explode(m1, m2, E, V);
    close(m1 * v1 + m2 * v2, (m1 + m2) * V, 1e-12); close(K(m1, m2, v1, v2) - 0.5 * (m1 + m2) * V * V, E, 1e-12);
    const r = C.explodeRun({ m1, m2, E, V, x0: 0, L1: 0.2, L2: 0.2, comp: 0.05, Ls: 0.1, ts: 0.6 });
    const tEnd = r.tc + r.tq + 0.2;
    close(r.bodies[0].vel(tEnd)[0], v1, 1e-12); close(r.bodies[1].vel(tEnd)[0], v2, 1e-12);
    // the spring force is internal: the momentum is M V at every moment of the push
    for (let k = 0; k <= 10; k++) { const tt = r.tc + r.tq * k / 10; close(m1 * r.bodies[0].vel(tt)[0] + m2 * r.bodies[1].vel(tt)[0], (m1 + m2) * V, 1e-12); }
  }
});
test('bumper: rebound e as set, impulse m(1 + e)v₀ = ∫F dt', () => {
  for (const [m, k, e, v0] of [[0.5, 2000, 0.6, 1], [0.5, 60, 0.6, 1], [1.2, 300, 0.95, 0.4], [0.2, 4000, 0.3, 2]]) {
    const b = C.bumper(m, k, e, v0);
    close(b.eCheck, e, 1e-9, 'e'); close(C.integrate(b.F, 0, b.ts, 64), m * (1 + e) * v0, 1e-9 * m * v0, 'impulse');
  }
});
test('photogate: blocked time = flag length / speed, edges found to 1e-9 s, open passages marked', () => {
  const Lf = C.GATE.flag;
  for (const v of [0.05, 0.3, 1, -1.4, 2, 6]) {
    const x = (t) => -0.5 * Math.sign(v) + v * t, xg = 0.1 * Math.sign(v), T = (Math.abs(xg + 0.5 * Math.sign(v)) + 0.2) / Math.abs(v);
    const iv = C.gateIntervals(x, xg, Lf, T, 1e-3);
    assert.equal(iv.length, 1); assert.equal(iv[0].open, false);
    close(iv[0].tb - iv[0].ta, Lf / Math.abs(v), 2e-9, `Δt at v = ${v}`);
    close(iv[0].ta, (Math.abs(xg + 0.5 * Math.sign(v)) - Lf / 2) / Math.abs(v), 2e-9, 'entry time');
  }
  // starting in the beam, or still in it at the end
  assert.equal(C.gateIntervals((t) => 0.01 + t, 0, Lf, 1, 1e-3)[0].open, true);
  assert.equal(C.gateIntervals((t) => -0.2 + t, 0, Lf, 0.2, 1e-3)[0].open, true);
  // a cart that stops in the beam and one that comes back: two passages
  assert.equal(C.gateIntervals((t) => (t < 1 ? -0.5 + t : 0.5 - (t - 1)), 0, Lf, 2, 1e-3).length, 2);
});
test('photogate reading: Δt rounded to the 0.1 ms tick, speed to the digits of Δt', () => {
  let r = C.gateReading(0.05, 0.05); assert.equal(r.msStr, '50.0'); assert.equal(r.speedStr, '1.00'); assert.equal(r.sf, 3);
  r = C.gateReading(0.05 / 0.58, 0.05); assert.equal(r.msStr, '86.2'); assert.equal(r.speedStr, (0.05 / 0.0862).toPrecision(3));
  r = C.gateReading(0.05 / 0.0623, 0.05); assert.equal(r.msStr, '802.6'); assert.equal(r.speedStr, (0.05 / 0.8026).toPrecision(4));
  r = C.gateReading(3.2, 0.05); assert.equal(r.msStr, '3200.0'); assert.equal(r.sf, 4);
  for (let k = 0; k < 200; k++) { const dt = 0.01 + 2 * rnd(), q = C.gateReading(dt, 0.05); assert(Math.abs(q.dt - dt) <= 0.5e-4 + 1e-15); close(q.speed, 0.05 / q.dt, 1e-15); }
});
test('gate readings of a simulated run recover e and conserve momentum to the timer resolution', () => {
  for (const c of cases.slice(0, 60)) {
    const u1 = 0.3 + 1.2 * rnd(), u2 = -0.2 * rnd(), [v1, v2] = C.collide1D(c.m1, c.m2, u1, u2, c.e);
    const speed = (v) => C.gateReading(C.GATE.flag / Math.abs(v), C.GATE.flag).speed * Math.sign(v);
    const s = [u1, u2, v1, v2].map((v) => (Math.abs(v) < 1e-12 ? 0 : speed(v)));
    // each speed carries a relative error of at most tick/(2Δt)
    [u1, u2, v1, v2].forEach((v, i) => { if (v) close(s[i], v, Math.abs(v) * (0.5e-4 / (C.GATE.flag / Math.abs(v))) * 1.0001); });
    const rel = (v) => (v ? 0.5e-4 / (C.GATE.flag / Math.abs(v)) : 0), bound = c.m1 * Math.abs(u1) * rel(u1) + c.m2 * Math.abs(u2) * rel(u2) + c.m1 * Math.abs(v1) * rel(v1) + c.m2 * Math.abs(v2) * rel(v2);
    assert(Math.abs(c.m1 * s[2] + c.m2 * s[3] - c.m1 * s[0] - c.m2 * s[1]) <= bound * 1.0001 + 1e-15, 'momentum within the timer rounding');
    const de = Math.abs(C.restitution(s[0], s[1], s[2], s[3]) - c.e);
    assert(de < 2e-2 * (1 + c.e), `e error ${de}`);
  }
});
test('least squares fit: exact lines, standard errors, and the three plots of the captured rows', () => {
  const f = C.fitLine([0, 1, 2, 3], [1, 3, 5, 7]); close(f.a, 1, 1e-14); close(f.b, 2, 1e-14); close(f.seB, 0, 1e-14);
  const g = C.fitLine([1, 2, 3, 4, 5], [1.1, 1.9, 3.2, 3.9, 5.1]);   // reference from numpy.polyfit and the n − 2 standard errors
  close(g.b, 1.0, 1e-12); close(g.a, 0.04, 1e-12); close(g.seB, 0.048989794855663564, 1e-12); close(g.seA, 0.16248076809271922, 1e-12);
  assert.equal(C.fitLine([1], [2]), null); assert.equal(C.fitLine([1, 1], [2, 3]), null);
  // rows as strings, a typed minus sign, one blank cell (left out)
  const mk = (m1, m2, u1, u2, e) => { const [a, b] = C.collide1D(m1, m2, u1, u2, e); return { m1: String(m1), m2: String(m2), u1: String(u1), u2: String(u2).replace('-', '−'), v1: String(a), v2: String(b) }; };
  const rows = [mk(1, 1, 1, 0, 0.7), mk(2, 1, 0.8, -0.3, 0.7), mk(0.5, 3, 1.5, 0.2, 0.7), mk(1.3, 1.3, 0.6, -0.6, 0.7), { m1: '1', m2: '1', u1: '1', u2: '', v1: '0', v2: '1' }];
  const p = C.fitPoints(rows, 'p'); assert.equal(p.x.length, 4); const fp = C.fitLine(p.x, p.y); close(fp.b, 1, 1e-12); close(fp.a, 0, 1e-12);
  const e = C.fitPoints(rows, 'e'), fe = C.fitLine(e.x, e.y); close(fe.b, 0.7, 1e-12); close(fe.a, 0, 1e-12);
  const k = C.fitPoints(rows, 'K'), fk = C.fitLine(k.x, k.y); close(fk.b, 1 - 0.49, 1e-12); close(fk.a, 0, 1e-12);
});
test('CSV: comment lines, one SI header row, cells as displayed or typed, quoting', () => {
  const rows = [{ scene: '1D track', preset: 'Elastic, equal masses', bumper: '', e: '1.00', m1: '1.0', m2: '1.0', Lf: '0.05', gA: '-0.35', gB: '0.45', du1: '0.0500', du2: '', dv1: '', dv2: '0.0500', u1: '1.00', u2: '0', v1: '0', v2: '1.00', notes: 'u2 at rest; v1′ at rest' },
    { scene: 'explosion', preset: 'custom', bumper: 'B', e: '', m1: '2.0', m2: '1.0', Lf: '0.05', gA: '-0.40', gB: '0.40', du1: '', du2: '', dv1: '0.0866', dv2: '0.0433', u1: '0', u2: '0', v1: '-0.577', v2: 'typed "1.15"', notes: '' }];
  const csv = C.readingsCSV(rows, { version: 'collisions@2026-10-22', setup: 'Elastic, equal masses', blind: true }), L = csv.trim().split('\n');
  assert.equal(L[0], '# Collisions and Momentum: photogate readings (simulated data)');
  assert.equal(L[1], '# demo version,collisions@2026-10-22');
  assert.equal(L[2], '# setup at export,"Elastic, equal masses"');
  assert(L.some((l) => l === `# flag_length_m,${C.GATE.flag}`)); assert(L.some((l) => l.startsWith('# timer_tick_s,0.0001')));
  assert(L.some((l) => l.startsWith('# model,'))); assert(L.some((l) => l.startsWith('# rounding,'))); assert(L.some((l) => l.startsWith('# blind,"on at export')));
  const hi = L.findIndex((l) => !l.startsWith('#')), head = L[hi].split(',');
  assert.equal(head[0], 'row'); for (const h of head) assert.match(h, /^[a-z0-9_A-Z]+$/);
  assert.deepEqual(head.slice(-5), ['u1_m_per_s', 'u2_m_per_s', 'v1_after_m_per_s', 'v2_after_m_per_s', 'notes']);
  assert.equal(L.length, hi + 3);
  assert(L[hi + 1].startsWith('1,1D track,"Elastic, equal masses",,1.00,1.0,1.0,0.05,-0.35,0.45,0.0500,,,0.0500,1.00,0,0,1.00,'));
  assert(L[hi + 2].includes(',-0.577,"typed ""1.15""",'));
});
test('Newton\'s cradle keeps its energy over a few swings', () => {
  let st = C.cradleInit(5, 1, 20 * Math.PI / 180); const E0 = C.cradleEnergy(st, 0.25, 0.3);
  st = C.cradleStep(st, 2, 0.3, 0.025); close(C.cradleEnergy(st, 0.25, 0.3), E0, 1e-6 * E0);
  assert(st.hits > 0);
});
console.log(`${count} collisions test groups passed`);
