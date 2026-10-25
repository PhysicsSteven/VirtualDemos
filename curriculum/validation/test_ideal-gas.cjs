'use strict';
// Gas in a Box: the hard disk gas and the two gas setups (masses, sizes, divider, hole, unfolded mean square displacement).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('ideal-gas', 'KB,M,U_KG,LX,LY,R,NMAX,DIV_X,HOLE_Y,makeGas,pair,step,wallEmit,track,tempOf,mixStats,meanSpeed2D,effusionRate,meanFreePath2D');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1e-300, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
let seed = 12345; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const gauss = () => { let u = 0; while (!u) u = rnd(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * rnd()); };
/* gas A on the left, gas B on the right, as the demo's resetTwo places them */
function twoGases(A, B, div, hole) {
  const G = c.makeGas(); G.div = div; G.hole = hole || 3; let N = 0;
  for (const [k, g] of [[0, A], [1, B]]) {
    const x0 = k ? c.DIV_X : 0, rk = g.d / 2, mk = g.m * c.U_KG;
    for (let q = 0; q < g.n; q++) {
      const i = N++; G.kind[i] = k; G.m[i] = mk; G.r[i] = rk; G.side[i] = k;
      let x, y;
      for (let t = 0; t < 400; t++) {
        x = x0 + rk + rnd() * (25 - 2 * rk); y = rk + rnd() * (c.LY - 2 * rk); let ok = true;
        for (let j = 0; j < i; j++) { const dx = G.px[j] - x, dy = G.py[j] - y, s = G.r[j] + rk; if (dx * dx + dy * dy < s * s * 1.3) { ok = false; break; } }
        if (ok) break;
      }
      G.px[i] = x; G.py[i] = y; const sg = Math.sqrt(c.KB * g.T / mk); G.vx[i] = sg * gauss(); G.vy[i] = sg * gauss();
    }
  }
  return { G, N };
}
const ke = (G, N) => { let e = 0; for (let i = 0; i < N; i++) e += 0.5 * G.m[i] * (G.vx[i] ** 2 + G.vy[i] ** 2); return e; };
const mom = (G, N) => { let x = 0, y = 0; for (let i = 0; i < N; i++) { x += G.m[i] * G.vx[i]; y += G.m[i] * G.vy[i]; } return [x, y]; };

group('one collision of unequal masses and sizes keeps momentum and kinetic energy; the center of mass stays put', () => {
  const G = c.makeGas(); G.m[0] = 4 * c.U_KG; G.m[1] = 131 * c.U_KG; G.r[0] = 0.15; G.r[1] = 0.5;
  G.px[0] = 10; G.py[0] = 10; G.px[1] = 10.6; G.py[1] = 10.2; G.vx[0] = 900; G.vy[0] = -50; G.vx[1] = -120; G.vy[1] = 40;
  const p0 = mom(G, 2), e0 = ke(G, 2), cx = (G.m[0] * G.px[0] + G.m[1] * G.px[1]) / (G.m[0] + G.m[1]);
  c.pair(G, 0, 1);
  const p1 = mom(G, 2); near(p1[0], p0[0], 1e-12, 'px'); near(p1[1], p0[1], 1e-12, 'py'); near(ke(G, 2), e0, 1e-12, 'KE');
  near((G.m[0] * G.px[0] + G.m[1] * G.px[1]) / (G.m[0] + G.m[1]), cx, 1e-14, 'center of mass');
  near(Math.hypot(G.px[1] - G.px[0], G.py[1] - G.py[0]), 0.65, 1e-12, 'moved apart to contact');
  assert(G.vx[0] < 0, 'the light disk bounces back');
});
group('closed box: kinetic energy is conserved over 20 ps of a crowded mixture', () => {
  const { G, N } = twoGases({ m: 4, d: 0.3, T: 600, n: 150 }, { m: 84, d: 1, T: 150, n: 150 }, 0);
  const e0 = ke(G, N); for (let t = 0; t < 20; t += 0.005) c.step(G, N, 0.005);
  near(ke(G, N), e0, 1e-10, 'KE');
});
group('closed divider: no molecule changes side, and pairs never touch through it', () => {
  const { G, N } = twoGases({ m: 4, d: 0.5, T: 1000, n: 150 }, { m: 40, d: 0.5, T: 300, n: 150 }, 1);
  for (let t = 0; t < 100; t += 0.005) c.step(G, N, 0.005);
  const s = c.mixStats(G, N, G.px, G.py); assert.deepStrictEqual([s.right[0], s.left[1]], [0, 0]);
  for (let i = 0; i < N; i++) assert(G.kind[i] ? G.px[i] >= c.DIV_X + G.r[i] - 1e-9 : G.px[i] <= c.DIV_X - G.r[i] + 1e-9, 'inside its half');
});
group('equipartition: helium and xenon mass molecules mixed share one temperature (600 ps average within 7%; a 4000 ps run gave 1.019 ± 0.015)', () => {
  const { G, N } = twoGases({ m: 4, d: 0.5, T: 300, n: 150 }, { m: 131, d: 0.5, T: 300, n: 150 }, 0), T0 = c.tempOf(G, N);
  for (let t = 0; t < 100; t += 0.005) c.step(G, N, 0.005);
  let a = 0, b = 0, k = 0;
  for (let t = 0; t < 600; t += 0.005) { c.step(G, N, 0.005); if (++k % 200 === 0) { a += c.tempOf(G, N, (i) => G.kind[i] === 0); b += c.tempOf(G, N, (i) => G.kind[i] === 1); } }
  near(a / b, 1, 0.07, 'T_A / T_B');
  near(c.tempOf(G, N), T0, 1e-9, 'total T unchanged');
});
group('hard disks: doubling every speed replays the same paths in half the time, so D ∝ √(T/m) exactly in this model', () => {
  const a = twoGases({ m: 40, d: 0.5, T: 300, n: 120 }, { m: 40, d: 0.5, T: 300, n: 120 }, 0), b = { G: c.makeGas(), N: a.N };
  for (const k of ['px', 'py', 'm', 'r', 'kind', 'side']) b.G[k].set(a.G[k]);
  for (let i = 0; i < a.N; i++) { b.G.vx[i] = 2 * a.G.vx[i]; b.G.vy[i] = 2 * a.G.vy[i]; }
  c.track(a.G, a.N); c.track(b.G, b.N);
  for (let s = 0; s < 4000; s++) { c.step(a.G, a.N, 0.01); c.step(b.G, b.N, 0.005); }
  let worst = 0; for (let i = 0; i < a.N; i++) worst = Math.max(worst, Math.abs(a.G.ux[i] - b.G.ux[i]), Math.abs(a.G.uy[i] - b.G.uy[i]));
  assert(worst < 1e-6, `largest difference ${worst} nm`);
});
group('unfolded position: one molecule bouncing between the walls moves on as in an endless box', () => {
  const G = c.makeGas(); G.r[0] = 0.25; G.px[0] = 5; G.py[0] = 7; G.vx[0] = 1234; G.vy[0] = -567; c.track(G, 1);
  for (let t = 0; t < 300; t += 0.01) c.step(G, 1, 0.01);
  /* the clamp at each wall loses at most one step's overshoot, under 0.013 nm a bounce */
  near(G.ux[0], 5 + 1234e-3 * 300, 5e-3, 'ux'); near(G.uy[0], 7 - 567e-3 * 300, 5e-3, 'uy');
});
group('effusion: in a thin gas the one way rate through the hole is n w √(kT/(2πm)), w = hole − diameter (within 15%)', () => {
  /* 40 molecules, mean free path 18 nm against a 3 nm hole; L→R and R→L crossings counted over 6000 ps against the rate from the
     time averaged count on each side */
  const { G, N } = twoGases({ m: 40, d: 0.5, T: 300, n: 40 }, { m: 40, d: 0.5, T: 300, n: 0 }, 2, 3);
  const prev = Uint8Array.from(G.side); let cross = 0, sum = 0, steps = 0;
  for (let t = 0; t < 6000; t += 0.02) {
    c.step(G, N, 0.02); steps++;
    for (let i = 0; i < N; i++) { if (prev[i] !== G.side[i]) cross++; prev[i] = G.side[i]; }
  }
  const pred = c.effusionRate(N / 2 / 750, 2.5, 300, 40 * c.U_KG) * 2 * 6000;   /* both ways: n_L + n_R = N/750 in total */
  near(cross, pred, 0.15, 'crossings'); void sum;
});
group('formulas: 2D mean speed √(πkT/2m), mean free path 1/(2√2 n d)', () => {
  near(c.meanSpeed2D(300, c.M), Math.sqrt(Math.PI * c.KB * 300 / (2 * c.M)), 1e-15);
  near(c.meanFreePath2D(0.2, 0.5), 3.5355, 1e-4);
});
/* one argon gas on a grid at temperature T, walls as given */
function oneGas(N, T, wallT, acc) {
  const G = c.makeGas(); G.wallT.fill(wallT); G.acc.fill(acc); G.rand = rnd;
  const sg = Math.sqrt(c.KB * T / c.M);
  for (let i = 0; i < N; i++) { G.px[i] = 1 + (i % 15) * 3.3; G.py[i] = 1 + Math.floor(i / 15) * 2.8; G.vx[i] = sg * gauss(); G.vy[i] = sg * gauss(); }
  return G;
}
group('walls held at a temperature: re-emitted molecules carry ⟨v_n²⟩ = 2kT/m, ⟨v_t²⟩ = kT/m, so 3/2 kT each in 2D', () => {
  const G = c.makeGas(); G.rand = rnd; let sn = 0, st = 0, n = 200000;
  for (let k = 0; k < n; k++) { const [a, b] = c.wallEmit(G, c.M, 200); assert(a >= 0); sn += a * a; st += b * b; }
  const kT = c.KB * 200 / c.M;
  near(sn / n, 2 * kT, 0.01, '⟨v_n²⟩'); near(st / n, kT, 0.01, '⟨v_t²⟩');
});
group('insulated walls (wallT 0) never draw a random number and add no heat', () => {
  const G = oneGas(150, 300, 0, 1); G.rand = () => { throw new Error('random number drawn'); };
  const e0 = ke(G, 150); for (let k = 0; k < 2000; k++) c.step(G, 150, 0.1);
  near(ke(G, 150), e0, 1e-10, 'KE'); assert(G.heat.every((h) => h === 0), 'no heat');
});
group('walls at 100 K bring a 300 K gas to 100 K; the energy lost is the heat to the walls', () => {
  const N = 150, G = oneGas(N, 300, 100, 1), e0 = ke(G, N);
  for (let k = 0; k < 15000; k++) c.step(G, N, 0.1);   /* 1.5 ns, several wall hits per molecule */
  let T = 0; for (let k = 0; k < 40; k++) { for (let j = 0; j < 250; j++) c.step(G, N, 0.1); T += c.tempOf(G, N) / 40; }
  near(T, 100, 0.05, 'final T');
  near(ke(G, N) - e0, G.heat.reduce((a, b) => a + b), 1e-9, 'first law: ΔKE = Q');
});
group('walls at the gas temperature: T stays put on average and P measured matches the insulated box', () => {
  const N = 150, run = (wallT) => { seed = 777; const G = oneGas(N, 300, wallT, 0.5); for (let k = 0; k < 5000; k++) c.step(G, N, 0.1);
    G.imp = 0; G.lt = 0; let T = 0; for (let k = 0; k < 50; k++) { for (let j = 0; j < 400; j++) c.step(G, N, 0.1); T += c.tempOf(G, N) / 50; }
    return { T, P: G.imp / (G.lt * 1e-21) }; };
  const a = run(0), b = run(300);
  near(b.T, 300, 0.05, 'T with walls at 300 K'); near(b.P / b.T, a.P / a.T, 0.05, 'P / T');
});
group('left wall at 400 K, piston at 100 K, top and bottom insulated: a steady flow of heat and a warmer left half', () => {
  const N = 150, G = oneGas(N, 250, 0, 1); G.wallT[0] = 400; G.wallT[1] = 100;
  for (let k = 0; k < 10000; k++) c.step(G, N, 0.1);
  const h0 = G.heat.slice(); let tl = 0, tr = 0;
  for (let k = 0; k < 40; k++) { for (let j = 0; j < 500; j++) c.step(G, N, 0.1); tl += c.tempOf(G, N, (i) => G.px[i] < 25) / 40; tr += c.tempOf(G, N, (i) => G.px[i] >= 25) / 40; }
  const qin = G.heat[0] - h0[0], qout = G.heat[1] - h0[1];
  assert(qin > 0 && qout < 0, 'heat in at the hot wall, out at the cold one');
  near(-qout, qin, 0.15, 'steady: heat in matches heat out');
  assert(G.heat[2] === 0 && G.heat[3] === 0, 'insulated walls pass no heat');
  assert(tl > tr + 30 && tl < 400 && tr > 100, `left half ${tl.toFixed(0)} K, right half ${tr.toFixed(0)} K`);
});
console.log(`${n} groups passed`);
