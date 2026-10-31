'use strict';
// Springs and Oscillations, Sandbox: the falling slinky (a hanging chain let go at the top, coils that touch collide inelastically)
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const c = core('springs', 'G,SB_L0,SB_H,sbModel,slkA,slkStart,slkAdvance,slkEnergy,slkCM,slkGap,slkSmooth');
let n = 0;
const close = (a, b, rel = 1e-9, abs = 1e-12, msg = '') => assert(Math.abs(a - b) <= abs + rel * Math.abs(b), `${msg} expected ${b}, got ${a}`);
const test = (name, fn) => { fn(); n++; console.log('PASS', name); };
const g = c.G, L0 = c.SB_L0, H = c.SB_H;
/* the Falling slinky rig: N blocks of m on springs of k, hung from the ceiling; the rest positions from the Sandbox model */
function hung(N, m, k) {
  const nodes = [{ id: 0, m: 0, fixed: true }], springs = [];
  for (let j = 1; j <= N; j++) { nodes.push({ id: j, m }); springs.push({ id: 100 + j, a: j - 1, b: j, k }); }
  return c.sbModel({ nodes, springs }, g, 0).yEq;
}
function fall(N, m, k, tEnd) {
  const st = c.slkStart(new Array(N).fill(m), new Array(N - 1).fill(k), hung(N, m, k));
  const log = [];
  while (st.t < tEnd - 1e-12) { c.slkAdvance(st, Math.min(1e-3, tEnd - st.t)); log.push({ t: st.t, y: st.y.slice(), first: st.first.slice() }); }
  return { st, log };
}

test('one block let go falls freely: y = y0 + ½gt², v = gt', () => {
  const st = c.slkStart([0.3], [], [0.25]);
  c.slkAdvance(st, 0.4321);
  close(st.y[0], 0.25 + 0.5 * g * 0.4321 ** 2, 1e-13); close(st.v[0], g * 0.4321, 1e-13);
});

test('two blocks: the gap closes as e₀ cos ωt, collides at π/2ω, loses ½ke₀², then both fall at g touching', () => {
  const m1 = 0.2, m2 = 0.5, k = 30, e0 = 0.08, mu = m1 * m2 / (m1 + m2), w = Math.sqrt(k / mu);
  const st = c.slkStart([m1, m2], [k], [0.1, 0.1 + H + L0 + e0]);
  c.slkAdvance(st, 0.5 * Math.PI / w - 1e-3);
  close(c.slkGap(st.y, 0), e0 * Math.cos(w * st.t), 1e-11, 1e-14, 'gap before the collision');
  c.slkAdvance(st, 0.2);
  close(st.first[0], 0.5 * Math.PI / w, 0, 1e-12, 'collision time');
  assert.equal(st.hits, 1);
  close(st.lost, 0.5 * k * e0 * e0, 1e-10, 0, 'energy lost');
  close(st.v[0], st.v[1], 0, 1e-12, 'one speed after');
  close(st.v[0], g * st.t, 1e-12, 0, 'momentum: all of it from gravity');
  assert(Math.abs(c.slkGap(st.y, 0)) < 1e-12, 'still touching');
});

test('chain of ten let go: only the top block accelerates at first (10g), every other block is held by its springs', () => {
  const N = 10, m = 0.1, k = 50, y = hung(N, m, k), A = c.slkA(new Array(N).fill(m), new Array(N - 1).fill(k)), z = [...y, ...new Array(N).fill(0), 1];
  const acc = A.slice(N, 2 * N).map((r) => r.reduce((s, a, j) => s + a * z[j], 0));
  close(acc[0], g + (N - 1) * g, 1e-12, 0, 'top block');
  for (let i = 1; i < N; i++) close(acc[i], 0, 0, 1e-12, `block ${i + 1}`);
});

test('chain of ten: center of mass ½gt², energy kept apart from the collisions, coils never overlap, collapse top to bottom, bottom still', () => {
  const N = 10, m = 0.1, k = 50, { st, log } = fall(N, m, k, 0.4);
  close(c.slkCM(st) - st.cm0, 0.5 * g * st.t ** 2, 1e-11, 0, 'center of mass');
  const E = c.slkEnergy(st); close(E.total + st.lost, st.E0, 0, 1e-11, 'energy');
  for (const q of log) for (let i = 0; i < N - 1; i++) assert(c.slkGap(q.y, i) > -1e-9, `gap ${i} at ${q.t}`);
  for (let i = 1; i < N - 1; i++) assert(st.first[i] > st.first[i - 1], 'coils close in order from the top');
  const tf = st.first[N - 2], before = log.filter((q) => q.t <= tf - 0.01).pop();
  assert(before.y[N - 1] - st.y0[N - 1] < 1e-4, 'the bottom has moved less than 0.1 mm 10 ms before the collapse reaches it');
  const at21 = log.find((q) => q.t >= 0.2 - 1e-9); assert(at21.y[N - 1] - st.y0[N - 1] < 1e-6, 'and less than 1 µm at 0.2 s');
  close(tf, 0.25692, 0, 5e-5, 'collapse reaches the bottom');
  console.log(`  ten blocks: collapse reaches the bottom at ${tf.toFixed(5)} s, ${st.hits} coil collisions by 0.4 s`);
});

test('finer chains approach the smooth slinky, √(M/3K) (Cross and Wheatland 2012, eq. 18)', () => {
  const M = 1, K = 50 / 9, tc = c.slkSmooth(M, K), t = {};
  for (const N of [10, 20]) { const { st } = fall(N, M / N, K * (N - 1), 0.3); t[N] = st.first[N - 2]; }
  close(tc, Math.sqrt(0.06), 1e-14);
  assert(Math.abs(t[20] - tc) < Math.abs(t[10] - tc), 'closer with more blocks');
  close(2 * t[20] - t[10], tc, 2e-3, 0, 'Richardson: the 1/N error removed');
  console.log(`  √(M/3K) = ${tc.toFixed(5)} s; N = 10: ${t[10].toFixed(5)}, N = 20: ${t[20].toFixed(5)}, 2t₂₀ − t₁₀ = ${(2 * t[20] - t[10]).toFixed(5)}`);
});
console.log(`${n} tests passed`);
