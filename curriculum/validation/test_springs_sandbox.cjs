'use strict';
// Springs and Oscillations, Sandbox: hanging arrangements against hand results (series, parallel, two blocks, energy, holding).
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const c = core('springs', 'G,SB_L0,SB_H,sbSolveLin,sbExpm,sbModel,sbStep,sbTensions,sbEnergy,sbHeld,sbAttached,sbAbove');
let n = 0;
const close = (a, b, rel = 1e-9, abs = 1e-12, msg = '') => assert(Math.abs(a - b) <= abs + rel * Math.abs(b), `${msg} expected ${b}, got ${a}`);
const test = (name, fn) => { fn(); n++; console.log('PASS', name); };
const ceil = { id: 0, m: 0, fixed: true };
const L0 = c.SB_L0, H = c.SB_H, g = c.G;

test('one spring: rest at L0 + mg/k, ω = √(k/m), tension mg', () => {
  const rig = { nodes: [ceil, { id: 1, m: 0.2 }], springs: [{ id: 1, a: 0, b: 1, k: 20 }] };
  const md = c.sbModel(rig, g, 0);
  close(md.yEq[0], L0 + 0.2 * g / 20, 1e-14);
  close(c.sbTensions(rig, md, md.yEq)[0].T, 0.2 * g, 1e-13);
  // exact propagator: u(t) = u0 cos ωt
  const w = Math.sqrt(20 / 0.2);
  for (const t of [0.01, 0.37, 1.9, 7.3]) { const z = c.sbStep(md, [0.05, 0], t); close(z[0], 0.05 * Math.cos(w * t), 1e-11, 1e-14); close(z[1], -0.05 * w * Math.sin(w * t), 1e-11, 1e-13); }
});

test('two springs in series through a massless hook: 1/k = 1/k1 + 1/k2, same tension in both', () => {
  const rig = { nodes: [ceil, { id: 1, m: 0 }, { id: 2, m: 0.3 }], springs: [{ id: 1, a: 0, b: 1, k: 20 }, { id: 2, a: 1, b: 2, k: 30 }] };
  const md = c.sbModel(rig, g, 0), ke = 1 / (1 / 20 + 1 / 30);
  assert.equal(md.n, 1); close(md.Ke[0][0], ke, 1e-13);
  close(md.yEq[0], 2 * L0 + 0.3 * g / ke, 1e-13);
  const T = c.sbTensions(rig, md, md.yEq); close(T[0].T, 0.3 * g, 1e-12); close(T[1].T, 0.3 * g, 1e-12);
  // displaced, the hook stays where the forces balance: both tensions still equal
  const T2 = c.sbTensions(rig, md, [md.yEq[0] + 0.04]); close(T2[0].T, T2[1].T, 1e-12);
});

test('two springs in parallel on a massless bar: k = k1 + k2, tensions split as k1 : k2', () => {
  const rig = { nodes: [ceil, { id: 1, m: 0 }, { id: 2, m: 0.5 }], springs: [{ id: 1, a: 0, b: 1, k: 15 }, { id: 2, a: 0, b: 1, k: 25 }, { id: 3, a: 1, b: 2, k: 1e3 }] };
  const md = c.sbModel(rig, g, 0), ke = 1 / (1 / 40 + 1 / 1e3);
  close(md.Ke[0][0], ke, 1e-12);
  const T = c.sbTensions(rig, md, md.yEq); close(T[0].T / T[1].T, 15 / 25, 1e-12); close(T[0].T + T[1].T, 0.5 * g, 1e-12);
  // a block hung straight on both springs: no hook
  const r2 = { nodes: [ceil, { id: 1, m: 0.5 }], springs: [{ id: 1, a: 0, b: 1, k: 15 }, { id: 2, a: 0, b: 1, k: 25 }] };
  const m2 = c.sbModel(r2, g, 0); close(m2.Ke[0][0], 40, 1e-14); close(m2.yEq[0], L0 + 0.5 * g / 40, 1e-14);
});

test('a block below a block: the lower spring hangs from the upper block\'s bottom face; two normal modes', () => {
  const m = 0.4, k = 25;
  const rig = { nodes: [ceil, { id: 1, m }, { id: 2, m }], springs: [{ id: 1, a: 0, b: 1, k }, { id: 2, a: 1, b: 2, k }] };
  const md = c.sbModel(rig, g, 0);
  close(md.yEq[0], L0 + 2 * m * g / k, 1e-13); close(md.yEq[1], md.yEq[0] + H + L0 + m * g / k, 1e-13);
  // ω² = (k/m)(3 ∓ √5)/2; the mode shape (1, (1+√5)/2) oscillates at the lower one alone
  const w1 = Math.sqrt(k / m * (3 - Math.sqrt(5)) / 2), r = (1 + Math.sqrt(5)) / 2;
  for (const t of [0.3, 2.2, 9.1]) { const z = c.sbStep(md, [0.02, 0.02 * r, 0, 0], t); close(z[0], 0.02 * Math.cos(w1 * t), 1e-10, 1e-13); close(z[1], 0.02 * r * Math.cos(w1 * t), 1e-10, 1e-13); }
});

test('energy: conserved without damping, steps compose, damping only removes energy', () => {
  const rig = { nodes: [ceil, { id: 1, m: 0 }, { id: 2, m: 0.2 }, { id: 3, m: 0.5 }],
    springs: [{ id: 1, a: 0, b: 1, k: 12 }, { id: 2, a: 0, b: 1, k: 18 }, { id: 3, a: 1, b: 2, k: 40 }, { id: 4, a: 2, b: 3, k: 9 }] };
  const md = c.sbModel(rig, g, 0), z0 = [0.03, -0.05, 0.1, 0], E0 = c.sbEnergy(rig, md, z0).total;
  let z = z0.slice(); for (let i = 0; i < 400; i++) z = c.sbStep(md, z, 0.0173);
  close(c.sbEnergy(rig, md, z).total, E0, 1e-9);
  close(c.sbStep(md, z0, 400 * 0.0173)[0], z[0], 1e-8, 1e-12, 'one long step = many short');
  // at rest the energy measured from rest is zero, and the spring energy agrees with ½Σk e² minus its value at rest plus gravity
  close(c.sbEnergy(rig, md, [0, 0, 0, 0]).total, c.sbEnergy(rig, md, [0, 0, 0, 0]).Us, 1e-12);
  const mdb = c.sbModel(rig, g, 0.6); let zb = z0.slice(), last = c.sbEnergy(rig, mdb, zb).total;
  for (let i = 0; i < 200; i++) { zb = c.sbStep(mdb, zb, 0.02); const E = c.sbEnergy(rig, mdb, zb).total; assert(E <= last + 1e-12); last = E; }
});

test('holding a block: the rest find their balance; held at its rest position gives the rest positions', () => {
  const rig = { nodes: [ceil, { id: 1, m: 0.3 }, { id: 2, m: 0 }, { id: 3, m: 0.2 }], springs: [{ id: 1, a: 0, b: 1, k: 20 }, { id: 2, a: 1, b: 2, k: 30 }, { id: 3, a: 2, b: 3, k: 30 }] };
  const md = c.sbModel(rig, g, 0), yr = md.allY(md.yEq);
  const y = c.sbHeld(rig, 3, yr.get(3), g);
  for (const id of [1, 2, 3]) close(y.get(id), yr.get(id), 1e-12, 1e-14);
  const y2 = c.sbHeld(rig, 3, yr.get(3) + 0.05, g); assert(y2.get(1) > yr.get(1));
});

test('joining and removing: loops are refused, loose pieces found', () => {
  const rig = { nodes: [ceil, { id: 1, m: 0 }, { id: 2, m: 0 }, { id: 3, m: 0 }], springs: [{ id: 1, a: 0, b: 1, k: 10 }, { id: 2, a: 1, b: 2, k: 10 }, { id: 3, a: 0, b: 3, k: 10 }] };
  assert(c.sbAbove(rig, 1, 2)); assert(!c.sbAbove(rig, 2, 1)); assert(!c.sbAbove(rig, 3, 2));
  const cut = { nodes: rig.nodes, springs: rig.springs.filter((s) => s.id !== 1) };
  assert.deepEqual([...c.sbAttached(cut)].sort(), [0, 3]);
});

test('matrix exponential of a rotation', () => {
  const E = c.sbExpm([[0, 1], [-1, 0]], 13.7);
  close(E[0][0], Math.cos(13.7), 1e-12, 1e-14); close(E[0][1], Math.sin(13.7), 1e-12, 1e-14);
});
console.log(`${n} tests passed`);
