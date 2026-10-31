'use strict';
// Forces and Friction: Newton's second law on a ramp with Coulomb friction, a hanging mass, the timer and the μk fit.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('forces', 'G,LEN,GATE_D,FF_VERSION,forces,step,workStep,gateTime,slipAngle,fitLine,readingsCSV,C_WOOD,frictionPower,warmBound,heatPic,tackle,tackleSheaves');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const P = (o) => ({ m: 10, th: 0, F: 0, phi: 0, m2: 0, ms: 0.5, mk: 0.3, ...o });
group('level push: static friction matches the push up to μs N, then kinetic friction', () => {
  let r = c.forces(P({ F: 40 }), 0); assert.equal(r.kind, 'static'); near(r.f, -40, 1e-12); assert.equal(r.a, 0); near(r.N, 98.1, 1e-12);
  r = c.forces(P({ F: 49.05 }), 0); assert.equal(r.kind, 'static');
  r = c.forces(P({ F: 60 }), 0); assert.equal(r.kind, 'kinetic'); near(r.a, (60 - 0.3 * 98.1) / 10, 1e-12);
  r = c.forces(P({ F: 0 }), -2); near(r.f, 0.3 * 98.1, 1e-12, 'friction opposes the velocity'); near(r.a, 2.943, 1e-12);
});
group('ramp: N = mg cos θ, slips when tan θ > μs, slides with a = g(sin θ − μk cos θ)', () => {
  const th = 30 * Math.PI / 180, r = c.forces(P({ th: 30, ms: 0.5, mk: 0.35 }), 0);
  near(r.N, 98.1 * Math.cos(th), 1e-12); assert.equal(r.kind, 'kinetic'); near(r.a, -9.81 * (Math.sin(th) - 0.35 * Math.cos(th)), 1e-12);
  near(c.slipAngle(0.5), Math.atan(0.5) * 180 / Math.PI, 1e-12);
  assert.equal(c.forces(P({ th: 26.5 }), 0).kind, 'static'); assert.equal(c.forces(P({ th: 26.7 }), 0).kind, 'kinetic');
  for (const m of [1, 5, 20]) near(c.forces(P({ m, th: 40, mk: 0.2 }), -1).a, c.forces(P({ m: 3, th: 40, mk: 0.2 }), -1).a, 1e-12, 'mass cancels');
});
group('pull at an angle: N = mg − F sin φ; lift off flagged', () => {
  const r = c.forces(P({ F: 50, phi: 30, ms: 0.4, mk: 0.3 }), 0); near(r.N, 98.1 - 25, 1e-12);
  near(r.a, (50 * Math.cos(Math.PI / 6) - 0.3 * 73.1) / 10, 1e-12);
  assert(c.forces(P({ F: 150, phi: 60 }), 0).lift);
  near(c.forces(P({ F: 50, phi: -30 }), 0).N, 98.1 + 25, 1e-12, 'pushing down raises N');
});
group('hanging mass: a = (m2 g − μk m g)/(m + m2), T = m2(g − a); on the ramp friction can point either way', () => {
  const r = c.forces(P({ m: 4, m2: 2, ms: 0.3, mk: 0.2 }), 0); near(r.a, (2 * 9.81 - 0.2 * 4 * 9.81) / 6, 1e-12); near(r.T, 2 * (9.81 - r.a), 1e-12);
  near(4 * r.a, r.T - 0.2 * 4 * 9.81, 1e-12, 'Newton on the block alone');
  const q = c.forces(P({ m: 5, th: 30, m2: 2, ms: 0.2, mk: 0.15 }), 0); assert.equal(q.kind, 'static'); assert(q.f > 0, 'static friction up the ramp'); near(q.T, 2 * 9.81, 1e-12);
  const u = c.forces(P({ m: 5, th: 30, m2: 4, ms: 0.2, mk: 0.15 }), 0); assert(u.a > 0 && u.f < 0, 'moves up, friction down the ramp');
});
group('stepping: a block slowing by friction stops exactly and stays (static); the timer formula', () => {
  const p = P({ ms: 0.5, mk: 0.3 }); let s = 0, v = 1.5; const a = -0.3 * 9.81;
  for (let i = 0; i < 2000; i++) { const r = c.step(p, s, v, 0.001); s = r.s; v = r.v; }
  assert.equal(v, 0); near(s, 1.5 * 1.5 / (2 * -a), 1e-9, 'stopping distance v²/2μk g');
  const q = P({ th: 35, mk: 0.25 }); let s2 = 2.5, v2 = 0, t = 0; const a2 = c.forces(q, -1e-9).a;
  while (2.5 - s2 < 1) { const r = c.step(q, s2, v2, 1e-4); s2 = r.s; v2 = r.v; t += 1e-4; }
  near(t, c.gateTime(a2, 1), 2e-4, 'time to slide 1 m');
});
group('μk from the a/cos θ against tan θ line: slope g, intercept −μk g', () => {
  const xs = [], ys = [];
  for (const th of [30, 35, 40, 45, 50]) { const r = c.forces(P({ th, mk: 0.27 }), -1), t = Math.round(c.gateTime(r.a, 1) * 1000) / 1000, a = 2 / (t * t), rad = th * Math.PI / 180; xs.push(Math.tan(rad)); ys.push(a / Math.cos(rad)); }
  const F = c.fitLine(xs, ys); near(F.b, 9.81, 0.03); near(-F.a / F.b, 0.27, 0.005);
});
group('CSV: metadata, SI header, a from the row time', () => {
  const L = c.readingsCSV([{ th: '35.0', m: '5.0', m2: '0.0', F: '0', phi: '0', t: '0.800' }], { version: c.FF_VERSION, setup: 'x', surface: 'mystery' }).trim().split('\n');
  assert.match(L[0], /\(simulated data\)$/); assert.equal(L[1], `# demo version,${c.FF_VERSION}`);
  const h = L.indexOf('row,theta_deg,m_kg,m2_kg,F_N,phi_deg,t_gate_s,a_m_per_s2'); assert(h > 0); assert.equal(L[h + 1], '1,35.0,5.0,0.0,0,0,0.800,3.125');
});
group('work energy theorem: Σ W on the block = ΔK; friction work = −μk N × distance; N does no work', () => {
  for (const p of [P({ th: 35, mk: 0.25 }), P({ m: 4, m2: 2, ms: 0.3, mk: 0.2 }), P({ F: 80, phi: 20 }), P({ m: 5, th: 30, m2: 4, ms: 0.2, mk: 0.15 })]) {
    const W = { g: 0, F: 0, f: 0, T: 0 }; let s = 1.5, v = 0, path = 0;
    for (let i = 0; i < 400; i++) { const r = c.workStep(p, s, v, 0.002, W); path += Math.abs(r.s - s); s = r.s; v = r.v; }
    const sum = W.g + W.F + W.f + W.T, fz = c.forces(p, v || 1e-9);
    near(sum, 0.5 * p.m * v * v, 1e-9, 'ΣW = ΔK');
    near(W.f, -p.mk * fz.N * path, 1e-9, 'friction work');
  }
  const p = P({ ms: 0.5, mk: 0.3 }), W = { g: 0, F: 0, f: 0, T: 0 }; let s = 0, v = 2;
  for (let i = 0; i < 1000; i++) { const r = c.workStep(p, s, v, 0.001, W); s = r.s; v = r.v; }
  assert.equal(v, 0); near(W.f, -0.5 * 10 * 4, 1e-9, 'friction removes all of ½mv²');
});

group("Atwood's machine: the ramp upright gives a = (m2 − m) g/(m + m2), T = 2 m m2 g/(m + m2), no normal force or friction", () => {
  for (const [m, m2] of [[2, 2.5], [5, 1], [3, 3], [1, 10]]) {
    const r = c.forces({ th: 90, m, F: 0, phi: 0, m2, ms: 0.5, mk: 0.3 }, 0);
    near(r.N, 0, 1e-12); near(r.f, 0, 1e-9); near(r.a, (m2 - m) * c.G / (m + m2), 1e-12, 'a'); near(r.T, 2 * m * m2 * c.G / (m + m2), 1e-9, 'T');
  }
  near(c.gateTime(c.forces({ th: 90, m: 2, F: 0, phi: 0, m2: 2.5, ms: 0, mk: 0 }, 0).a, c.GATE_D), Math.sqrt(2 * 4.5 / (0.5 * c.G)), 1e-12, 'time for 1 m');
  near(c.forces({ th: 90, m: 2, F: 0, phi: 0, m2: 0, ms: 0, mk: 0 }, 0).a, -c.G, 1e-12, 'nothing on the other side: free fall');
});

group('friction up close: heating rate μk N v, its integral is the thermal energy, the warming bound, the picture filter', () => {
  const p = P({ F: 60 });
  assert.equal(c.frictionPower(P({ F: 40 }), 0), 0, 'static friction does no work');
  near(c.frictionPower(p, 2), 0.3 * 98.1 * 2, 1e-12, 'μk N v');
  near(c.frictionPower(p, -2), 0.3 * 98.1 * 2, 1e-12, 'either direction');
  // sum of μk N v dt over a run from rest equals −W_f from workStep
  let s = 0.4, v = 0, Q = 0; const Wk = { g: 0, F: 0, f: 0, T: 0 }, dt = 1e-4;
  for (let i = 0; i < 8000; i++) { const v0 = v, r = c.workStep(p, s, v, dt, Wk); Q += c.frictionPower(p, (v0 + r.v) / 2) * dt; s = r.s; v = r.v; }
  near(Q, -Wk.f, 1e-9 * Math.abs(Wk.f) + 1e-9, 'heat made = −W_f');
  near(-Wk.f, 0.3 * 98.1 * (s - 0.4), 1e-9, 'μk N times the distance slid');
  assert.equal(c.C_WOOD, 1700);
  near(c.warmBound(1700, 10), 0.1, 1e-15, 'ΔT = E/(m c)');
  // exact for constant P: from 0, H → P τ; halving per τ ln 2 when P = 0
  near(c.heatPic(0, 50, 1e6, 1.5), 75, 1e-9); near(c.heatPic(80, 0, 1.5 * Math.log(2), 1.5), 40, 1e-12);
  let H = 0; for (let i = 0; i < 300; i++) H = c.heatPic(H, 50, 0.01, 1.5); near(H, c.heatPic(0, 50, 3, 1.5), 1e-9, 'steps compose');
});

group('block and tackle: n strands at tension F lift n F; mg/n holds it; work in equals work out', () => {
  // the opening setup: 12 kg on four strands, 32 N pull
  let t = c.tackle(12, 4, 32, true);
  near(t.W, 117.72, 1e-12); near(t.up, 128, 0); near(t.Fhold, 29.43, 1e-12); near(t.a, (128 - 117.72) / 12, 1e-12); near(t.aHand, 4 * t.a, 1e-12); assert.equal(t.MA, 4);
  // too weak a pull: the load stays on the floor, which carries the rest
  t = c.tackle(12, 2, 40, true); assert.equal(t.a, 0); near(t.N, 117.72 - 80, 1e-12);
  // the same pull in mid air: the load falls
  t = c.tackle(12, 2, 40, false); near(t.a, (80 - 117.72) / 12, 1e-12); assert.equal(t.N, 0);
  // the least pull that lifts a load for n = 1 to 6 falls as 1/n
  for (let n = 1; n <= 6; n++) near(c.tackle(20, n, 0, true).Fhold * n, 20 * c.G, 1e-12);
  // work: rope in n Δy at force F, from rest; the load's kinetic energy afterwards is F n Δy − mg Δy
  const m = 12, n = 4, F = 32, a = c.tackle(m, n, F, true).a, dy = 1.5, v2 = 2 * a * dy;
  near(F * n * dy - m * c.G * dy, 0.5 * m * v2, 1e-12, 'work energy');
  // rope layout: n sheaves in all, the far end on the upper block for even n, the lower for odd
  for (let k = 1; k <= 6; k++) { const s = c.tackleSheaves(k); assert.equal(s.up.length + s.lo.length, k); assert.equal(s.tied, k % 2 ? 'lower' : 'upper'); }
  assert.deepEqual(c.tackleSheaves(4), { up: [[0, 1], [2, 3]], lo: [[1, 2], [3, 4]], tied: 'upper' });
  assert.deepEqual(c.tackleSheaves(1), { up: [[0, 1]], lo: [], tied: 'lower' });
});

console.log(`${n} forces test groups passed`);
