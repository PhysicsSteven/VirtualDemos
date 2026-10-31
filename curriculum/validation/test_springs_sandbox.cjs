'use strict';
// Springs and Oscillations, Sandbox: hanging arrangements against hand results (series, parallel, two blocks, energy, holding),
// and blocks on a level track between two walls.
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const c = core('springs', 'G,SB_L0,SB_H,sbSolveLin,sbExpm,sbModel,sbStep,sbTensions,sbEnergy,sbHeld,sbAttached,sbAbove,sbJacobi,sbModes,sbModeShares,chainOmega,gridOmega,gridShape,gridProject,gridCompose,gridAccel,gridAt,gridEnergy,gridModeE');
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
test('oil on one block only: per block b; a lone block decays as the damped oscillator', () => {
  const m = 0.25, k = 16, b = 0.8, w0 = Math.sqrt(k / m), be = b / (2 * m), wd = Math.sqrt(w0 * w0 - be * be);
  const rig = { nodes: [ceil, { id: 1, m, b }], springs: [{ id: 1, a: 0, b: 1, k }] };
  const md = c.sbModel(rig, g, 0);
  for (const t of [0.2, 1.3, 4.4]) close(c.sbStep(md, [0.03, 0], t)[0], 0.03 * Math.exp(-be * t) * (Math.cos(wd * t) + be / wd * Math.sin(wd * t)), 1e-10, 1e-14);
  const r2 = { nodes: [ceil, { id: 1, m: 0.3, b: 0.5 }, { id: 2, m: 0.3 }], springs: [{ id: 1, a: 0, b: 1, k: 20 }, { id: 2, a: 1, b: 2, k: 20 }] };
  const m2 = c.sbModel(r2, g, 0); assert.equal(JSON.stringify(m2.bs), '[0.5,0]');
});

test('shaken ceiling: steady amplitude kA/√((k − mω²)² + (bω)²), phase from rest; massless hooks follow', () => {
  const m = 0.2, k = 20, b = 0.4, A = 0.01, w = 7;
  const rig = { nodes: [ceil, { id: 1, m, b }], springs: [{ id: 1, a: 0, b: 1, k }] };
  const md = c.sbModel(rig, g, 0, { A, w });
  close(md.Fe[0], k, 1e-14);
  // from the steady state itself: u = Re(U e^{iωt}), U = kA/(k − mω² + ibω)
  const re = k - m * w * w, im = b * w, D = re * re + im * im, Ur = k * A * re / D, Ui = -k * A * im / D;
  const z0 = [Ur, -w * Ui, 1, 0];
  for (const t of [0.15, 2.7, 9.9]) close(c.sbStep(md, z0, t)[0], Ur * Math.cos(w * t) - Ui * Math.sin(w * t), 1e-9, 1e-13);
  close(Math.hypot(Ur, Ui), k * A / Math.sqrt(D), 1e-14);
  // series through a hook: the same block sees k_eff, and the hook sits between ceiling and block
  const rs = { nodes: [ceil, { id: 1, m: 0 }, { id: 2, m, b }], springs: [{ id: 1, a: 0, b: 1, k: 40 }, { id: 2, a: 1, b: 2, k: 40 }] };
  const ms = c.sbModel(rs, g, 0, { A, w }); close(ms.Fe[0], 20, 1e-12); close(ms.Ke[0][0], 20, 1e-12);
  const y = ms.allY([ms.yEq[0] + 0.02], A); close(y.get(1), (A + ms.yEq[0] + 0.02) / 2, 1e-12, 1e-15, 'equal springs: the hook halfway');
  close(y.get(0), A, 0);
});

test('undamped drive exactly at resonance grows as (kA/2mω) t sin ωt', () => {
  const m = 0.5, k = 18, w = Math.sqrt(k / m), A = 0.004;
  const md = c.sbModel({ nodes: [ceil, { id: 1, m }], springs: [{ id: 1, a: 0, b: 1, k }] }, g, 0, { A, w });
  for (const t of [1, 5.5, 12]) close(c.sbStep(md, [0, 0, 1, 0], t)[0], k * A / (2 * m * w) * t * Math.sin(w * t), 1e-9, 1e-13);
});
// between two walls (g = 0): the left wall is node 0 (driven), the right wall a still fixed node at the gap D
const wallsAt = (D) => [ceil, { id: 1, m: 0, fixed: true, still: true, y0: D }];
test('between two walls: rest where the two springs balance, ω² = (k1 + k2)/m, no gravity', () => {
  const D = 0.34, k1 = 20, k2 = 30, m = 0.2;
  const rig = { hz: true, nodes: [...wallsAt(D), { id: 2, m }], springs: [{ id: 3, a: 0, b: 2, k: k1 }, { id: 4, a: 2, b: 1, k: k2 }] };
  const md = c.sbModel(rig, 0, 0);
  // k1 (x − L0) = k2 (D − x − H − L0)
  const x = (k1 * L0 + k2 * (D - H - L0)) / (k1 + k2);
  close(md.yEq[0], x, 1e-13); close(md.Ke[0][0], k1 + k2, 1e-13);
  const T = c.sbTensions(rig, md, md.yEq); close(T[0].T, T[1].T, 1e-12, 1e-14, 'equal tension in both');
  close(T[0].T, k1 * (x - L0), 1e-12);
  const y = md.allY(md.yEq); close(y.get(1), D, 0); close(y.get(0), 0, 0);
  const E = c.sbEnergy(rig, md, [0.02, 0]); close(E.Ug, 0, 0);
  // held: a still wall stays put; the other block follows
  const r2 = { hz: true, nodes: [...wallsAt(0.44), { id: 2, m: 0.2 }, { id: 3, m: 0.2 }], springs: [{ id: 4, a: 0, b: 2, k: 20 }, { id: 5, a: 2, b: 3, k: 20 }, { id: 6, a: 3, b: 1, k: 20 }] };
  const h = c.sbHeld(r2, 2, 0.12, 0); close(h.get(1), 0.44, 0);
  close(h.get(3), (0.12 + H + L0 + 0.44 - H - L0) / 2, 1e-12, 1e-15, 'free block midway between the held one and the wall');
});
test('two blocks between walls: normal modes ω² = k/m and 3k/m', () => {
  const k = 20, m = 0.2, rig = { hz: true, nodes: [...wallsAt(0.44), { id: 2, m }, { id: 3, m }], springs: [{ id: 4, a: 0, b: 2, k }, { id: 5, a: 2, b: 3, k }, { id: 6, a: 3, b: 1, k }] };
  const md = c.sbModel(rig, 0, 0), w1 = Math.sqrt(k / m), w2 = Math.sqrt(3 * k / m);
  for (const t of [0.3, 2.2]) {
    close(c.sbStep(md, [0.02, 0.02, 0, 0], t)[0], 0.02 * Math.cos(w1 * t), 1e-10, 1e-14);
    close(c.sbStep(md, [0.02, -0.02, 0, 0], t)[1], -0.02 * Math.cos(w2 * t), 1e-10, 1e-14);
  }
});
test('shaken left wall, still right wall: steady amplitude k1 A/√((k1 + k2 − mω²)² + (bω)²)', () => {
  const k1 = 20, k2 = 30, m = 0.2, b = 0.3, A = 0.005, w = 9;
  const rig = { hz: true, nodes: [...wallsAt(0.34), { id: 2, m, b }], springs: [{ id: 3, a: 0, b: 2, k: k1 }, { id: 4, a: 2, b: 1, k: k2 }] };
  const md = c.sbModel(rig, 0, 0, { A, w });
  close(md.Fe[0], k1, 1e-14);
  const re = k1 + k2 - m * w * w, im = b * w, D = re * re + im * im, Ur = k1 * A * re / D, Ui = -k1 * A * im / D;
  for (const t of [0.4, 3.1]) close(c.sbStep(md, [Ur, -w * Ui, 1, 0], t)[0], Ur * Math.cos(w * t) - Ui * Math.sin(w * t), 1e-9, 1e-13);
  const y = md.allY(md.yEq, A); close(y.get(0), A, 0); close(y.get(1), 0.34, 0);
});
test('normal modes: a chain of ten between walls gives ωₙ = 2√(k/m) sin(nπ/22) and sine shapes', () => {
  const N = 10, k = 20, m = 0.1, nodes = [ceil, { id: 1, m: 0, fixed: true, still: true, y0: 1.6 }], springs = [];
  for (let j = 0; j < N; j++) nodes.push({ id: 2 + j, m });
  for (let j = 0; j <= N; j++) springs.push({ id: 20 + j, a: j ? 1 + j : 0, b: j === N ? 1 : 2 + j, k, x: 0 });
  const md = c.sbModel({ hz: true, nodes, springs }, 0, 0), modes = c.sbModes(md);
  assert.equal(modes.length, N);
  modes.forEach((mo, i) => {
    const n1 = i + 1; close(mo.w, 2 * Math.sqrt(k / m) * Math.sin(n1 * Math.PI / 22), 1e-12); close(mo.w, c.chainOmega(n1, N, k, m), 1e-12);
    const big = Math.max(...Array.from({ length: N }, (_, j) => Math.abs(Math.sin((j + 1) * n1 * Math.PI / (N + 1)))));
    mo.phi.forEach((p, j) => close(Math.abs(p), Math.abs(Math.sin((j + 1) * n1 * Math.PI / (N + 1))) / big, 1e-10, 1e-12, `mode ${n1} block ${j + 1}`));
  });
  /* a start in one mode stays in it: the exact propagator moves every block as cos ωt */
  const z0 = [...modes[3].phi.map((p) => 0.03 * p), ...new Array(N).fill(0)], t = 1.234, z = c.sbStep(md, z0, t);
  z0.slice(0, N).forEach((u, j) => close(z[j], u * Math.cos(modes[3].w * t), 1e-9, 1e-13));
  const sh = c.sbModeShares(md, modes, z);
  sh.forEach((q, i) => (i === 3 ? close(q.amp, 0.03, 1e-9) : assert(q.amp < 1e-10)));
  /* any start: the shares add up to the energy, ½Σmv² + ½Σk e² above rest */
  const zr = [0.01, -0.02, 0.005, 0, 0.03, 0, -0.01, 0.02, 0, 0.004, 0.1, 0, -0.2, 0.05, 0, 0, 0.3, 0, 0, -0.1], E = c.sbEnergy({ hz: true, nodes, springs }, md, zr), E0 = c.sbEnergy({ hz: true, nodes, springs }, md, zr.map(() => 0));
  close(c.sbModeShares(md, modes, zr).reduce((s, q) => s + q.E, 0), E.total - E0.total, 1e-10);
});
test('normal modes: two unequal blocks hanging, against the 2 × 2 hand result', () => {
  const rig = { nodes: [ceil, { id: 1, m: 0.2 }, { id: 2, m: 0.1 }], springs: [{ id: 1, a: 0, b: 1, k: 30 }, { id: 2, a: 1, b: 2, k: 10 }] };
  const md = c.sbModel(rig, g, 0), modes = c.sbModes(md);
  /* det(K − ω²M) = 0: m₁m₂ω⁴ − (m₁k₂ + m₂(k₁ + k₂))ω² + k₁k₂ = 0 */
  const a = 0.02, b = -(0.2 * 10 + 0.1 * 40), cc = 300, r = Math.sqrt(b * b - 4 * a * cc);
  close(modes[0].w ** 2, (-b - r) / (2 * a), 1e-10); close(modes[1].w ** 2, (-b + r) / (2 * a), 1e-10);
});
test('grid of pucks: each mode shape is an exact eigenvector, ü = −ω²u, for N = 2 to 6', () => {
  const k = 20, m = 0.1;
  for (let N = 2; N <= 6; N++) for (let q = 1; q <= N; q++) for (let p = 1; p <= N; p++) {
    const phi = []; for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) phi.push(c.gridShape(p, q, i, j, N));
    const a = c.gridAccel(phi, N, k, m), w2 = c.gridOmega(p, q, N, k, m) ** 2;
    phi.forEach((v, i) => close(a[i], -w2 * v, 1e-12, 1e-12, `N ${N} mode ${p},${q}`));
  }
  close(c.gridOmega(1, 1, 3, 20, 0.1) / (2 * Math.PI), 2.436238396, 1e-9, 0, 'f11 of the 3 by 3 grid');
});
test('grid of pucks: the modes agree with the Jacobi eigenvalues of the stiffness matrix built puck by puck', () => {
  const N = 4, k = 20, m = 0.1, n2 = N * N, K = [];
  for (let a = 0; a < n2; a++) { const e = new Array(n2).fill(0); e[a] = 1; K.push(c.gridAccel(e, N, k, m).map((v) => -v)); }   /* K/m, symmetric */
  const { vals } = c.sbJacobi(K), mine = []; for (let q = 1; q <= N; q++) for (let p = 1; p <= N; p++) mine.push(c.gridOmega(p, q, N, k, m) ** 2);
  vals.slice().sort((x, y) => x - y).forEach((v, i) => close(v, mine.sort((x, y) => x - y)[i], 1e-9, 1e-9));
});
test('grid of pucks: projecting and composing give back any start; gridAt obeys the equations of motion and keeps the energy', () => {
  const N = 5, k = 20, m = 0.1, n2 = N * N; let seed = 7; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647 - 0.5) * 0.04;
  const u0 = Array.from({ length: n2 }, rnd), v0 = Array.from({ length: n2 }, rnd);
  c.gridCompose(c.gridProject(u0, N), N).forEach((v, i) => close(v, u0[i], 1e-10, 1e-14));
  const c0 = c.gridProject(u0, N), cv0 = c.gridProject(v0, N), at = (tt) => c.gridAt(c0, cv0, N, k, m, tt);
  at(0).u.forEach((v, i) => close(v, u0[i], 1e-10, 1e-14)); at(0).v.forEach((v, i) => close(v, v0[i], 1e-10, 1e-14));
  const t1 = 1.37, h = 1e-4, a = c.gridAccel(at(t1).u, N, k, m), fd = at(t1 + h).u.map((v, i) => (v - 2 * at(t1).u[i] + at(t1 - h).u[i]) / (h * h));
  fd.forEach((v, i) => close(v, a[i], 1e-4, 1e-6, 'second derivative'));
  at(t1).v.forEach((v, i) => close(v, (at(t1 + h).u[i] - at(t1 - h).u[i]) / (2 * h), 1e-4, 1e-7, 'velocity'));
  const E0 = c.gridEnergy(u0, v0, N, k, m).total;
  for (const tt of [0.5, 3, 17.2]) { const s = at(tt); close(c.gridEnergy(s.u, s.v, N, k, m).total, E0, 1e-10, 0, `energy at ${tt} s`);
    close(c.gridModeE(s.c, s.cv, N, k, m).reduce((x, y) => x + y, 0), E0, 1e-10, 0, 'the mode energies add up to the total'); }
});
console.log(`${n} tests passed`);
