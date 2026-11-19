'use strict';
// Gas in a Box: the hard disk gas and the two gas setups (masses, sizes, divider, hole, unfolded mean square displacement).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('ideal-gas', 'KB,M,U_KG,LX,LY,R,NMAX,DIV_X,HOLE_Y,makeGas,pair,step,wallEmit,wallHit,track,tempOf,mixStats,meanSpeed2D,effusionRate,meanFreePath2D,SIGMA,VDW,TBOIL,NA,ATM,meanFreePath3D,meanSpeed3D,bHardSphere,zVdw,hardDiskZ,hardDiskChi,boxCrowding,makeBig,bigCollide,bigGamma,msdLag,fitLine,stokesD,perrinNA,M');
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
group('a moving thermal wall: heat is the energy change in the wall frame, and heat plus the wall\'s work is the lab energy change', () => {
  /* GPT's 2026-10-26 case: argon like mass, 200 m/s into a wall moving at −100 m/s, wall at 300 K, full accommodation, rand 0.5 */
  const mi = 6.6421562664e-26, G = { vx: new Float64Array([200]), vy: new Float64Array([0]), m: new Float64Array([mi]), wallT: [0, 300, 0, 0], acc: [1, 1, 1, 1], heat: [0, 0, 0, 0], rand: () => 0.5 };
  const e0 = 0.5 * mi * 200 * 200, wv = -100, J = c.wallHit(G, 0, 1, 0, -1, wv), e1 = 0.5 * mi * (G.vx[0] * G.vx[0] + G.vy[0] * G.vy[0]);
  const [out, along] = c.wallEmit({ rand: () => 0.5 }, mi, 300), Qwall = 0.5 * mi * (out * out + along * along) - 0.5 * mi * (300 * 300);
  near(G.heat[1], Qwall, 1e-12, 'heat in the wall frame');
  near(e1 - e0, G.heat[1] + J * -wv, 1e-9, 'lab energy change = Q + work done by the wall');
  /* a wall at rest: no work, all of it heat, as before */
  const H = { vx: new Float64Array([200]), vy: new Float64Array([0]), m: new Float64Array([mi]), wallT: [0, 300, 0, 0], acc: [1, 1, 1, 1], heat: [0, 0, 0, 0], rand: () => 0.5 };
  c.wallHit(H, 0, 1, 0, -1, 0); near(H.heat[1], 0.5 * mi * (H.vx[0] ** 2 + H.vy[0] ** 2) - e0, 1e-12, 'wall at rest');
});

/* Real molecule sizes (chemistry item 6) */
group('real sizes: the model disk of the setups stays 0.50 nm; σ from Svehla 1962 in nm, helium smallest and CO₂ largest', () => {
  assert.strictEqual(c.R, 0.25);
  assert.deepStrictEqual(JSON.parse(JSON.stringify(c.SIGMA)), { h2: 0.2827, he: 0.2551, n2: 0.3798, ar: 0.3542, co2: 0.3941 });
  const v = Object.values(c.SIGMA); assert(Math.min(...v) === c.SIGMA.he && Math.max(...v) === c.SIGMA.co2);
});
group('van der Waals b of the CRC table is RTc/8Pc (critical points from Wolfram ChemicalData), within 1%', () => {
  const R = c.NA * c.KB, crit = { h2: [32.97, 1.293e6], he: [5.19, 0.227e6], n2: [126.21, 3.39e6], ar: [150.87, 4.898e6], co2: [304.12, 7.39e6] };
  for (const k in crit) near(c.VDW[k][1], R * crit[k][0] / (8 * crit[k][1]) * 1e3, 0.01, k);
  /* and RTc a = 27/64 R²Tc²/Pc, the other van der Waals critical relation, within 2% */
  for (const k in crit) near(c.VDW[k][0], 27 / 64 * R * R * crit[k][0] ** 2 / crit[k][1] * 10, 0.02, k + ' a');
});
group('3D hard spheres: λ = kT/(√2 πd²P), b = (2/3)πN_A d³; argon at 300 K and 1 atm 73.4 nm, b 0.0560 L/mol (measured 0.0320)', () => {
  near(c.meanFreePath3D(300, 0.3542, c.ATM), 73.40, 1e-3, 'λ argon');
  near(c.meanFreePath3D(600, 0.3542, c.ATM), 2 * c.meanFreePath3D(300, 0.3542, c.ATM), 1e-12, 'λ ∝ T');
  near(c.meanFreePath3D(300, 0.3542, 2 * c.ATM), c.meanFreePath3D(300, 0.3542, c.ATM) / 2, 1e-12, 'λ ∝ 1/P');
  near(c.meanFreePath3D(300, 0.2551, c.ATM) / c.meanFreePath3D(300, 0.3941, c.ATM), (0.3941 / 0.2551) ** 2, 1e-12, 'λ ∝ 1/d²');
  near(c.bHardSphere(0.3542), 0.05605, 1e-3, 'b argon');
  near(c.meanSpeed3D(300, 39.948 * c.U_KG), 398.8, 1e-3, 'mean speed argon');
  /* hard sphere b is 4 times the volume of a mole of molecules */
  near(c.bHardSphere(0.3), 4 * c.NA * Math.PI / 6 * (0.3e-9) ** 3 * 1e3, 1e-12, '4 × molecular volume');
});
group('van der Waals PV/NkT: 1 as P → 0 and at the Boyle temperature a/Rb; above 1 for He, H₂ and below for N₂, Ar, CO₂ at 300 K, 1 atm', () => {
  const R = c.NA * c.KB;
  for (const k in c.VDW) {
    near(c.zVdw(k, 300, 1e-6), 1, 1e-10, k + ' P → 0');
    const TB = c.VDW[k][0] * 0.1 / (R * c.VDW[k][1] * 1e-3); near(c.zVdw(k, TB, c.ATM), 1, 1e-12, k + ' Boyle');
  }
  for (const k of ['he', 'h2']) assert(c.zVdw(k, 300, c.ATM) > 1, k);
  for (const k of ['n2', 'ar', 'co2']) assert(c.zVdw(k, 300, c.ATM) < 1, k);
  near(c.zVdw('co2', 300, c.ATM), 0.99578, 1e-4, 'CO₂');
  assert(c.TBOIL.he < c.TBOIL.h2 && c.TBOIL.h2 < c.TBOIL.n2 && c.TBOIL.n2 < c.TBOIL.ar && c.TBOIL.ar < c.TBOIL.co2);
});
group('hard disk equation of state: Z → 1 + 2η (the exact 2D second virial coefficient πd²/2), χ → 1 + 25η/16; the box formula without walls is Z', () => {
  const e = 1e-6; near((c.hardDiskZ(e) - 1) / e, 2, 1e-5, 'dZ/dη'); near((c.hardDiskChi(e) - 1) / e, 25 / 16, 1e-5, 'dχ/dη');
  const big = c.boxCrowding(4e6, 0.5, 1e5, 1e5);
  near(big.pRatio, c.hardDiskZ(4e6 * Math.PI * 0.25 / 4 / 1e10), 1e-4, 'large box');
  near(c.boxCrowding(1, 0.5, 50, 30).mfpThin, c.meanFreePath2D(1 / (49.5 * 29.5), 0.5), 1e-12, 'thin limit');
});
/* one gas of N disks of diameter d at 300 K from a grid, run for t ps after 200 ps to settle */
function sizeRun(N, d, mu, t, s0) {
  seed = s0; const G = c.makeGas(), m = mu * c.U_KG; G.r.fill(d / 2); G.m.fill(m);
  const sg = Math.sqrt(c.KB * 300 / m), cols = Math.ceil(Math.sqrt(N * 50 / 30)), rows = Math.ceil(N / cols);
  for (let i = 0; i < N; i++) { G.px[i] = 50 / cols * (i % cols + 0.5); G.py[i] = 30 / rows * (Math.floor(i / cols) + 0.5); G.vx[i] = sg * gauss(); G.vy[i] = sg * gauss(); }
  const dt = 0.4 * (d / 2) / (2.5 * sg) * 1e3;
  for (let x = 0; x < 200; x += dt) c.step(G, N, dt);
  G.imp = 0; G.lt = 0; G.coll = 0; G.path = 0; G.tc = 0;
  for (let x = 0; x < t; x += dt) c.step(G, N, dt);
  const T = c.tempOf(G, N);
  return { ratio: G.imp / (G.lt * 1e-21) / (N * c.KB * T / 1500e-18), mfp: G.path / (2 * G.coll), z: 2 * G.coll / (N * G.tc), v: G.path / (N * G.tc), b: c.boxCrowding(N, d, 50, 30) };
}
group('the box: P / (NkT/A) within 1.5% of the hard disk formula, mean free path 0 to 5% longer than 1/(2√2 n d χ) (crowded 0.50 nm disks; CO₂ and helium at real size)', () => {
  /* 2026-11-15 runs of 3000 ps: P 0.3 to 0.7% under the formula, mean free path 1.9 to 2.5% longer */
  for (const [N, d, mu] of [[400, 0.5, 39.948], [300, 0.3941, 44.009], [300, 0.2551, 4.0026]]) {
    const r = sizeRun(N, d, mu, 500, 4242);
    near(r.ratio, r.b.pRatio, 0.015, `P ratio N ${N} d ${d}`);
    assert(r.mfp > r.b.mfp && r.mfp < 1.05 * r.b.mfp, `mean free path ${r.mfp} against ${r.b.mfp}`);
    near(r.z * r.mfp, r.v, 1e-12, 'collision rate × mean free path = mean speed');
  }
});

/* Brownian motion: one large disk among the molecules */
function brownGas(N, T, mult, Rb) {
  const G = c.makeGas(); G.big = c.makeBig(25, 15, Rb, mult * c.M);
  for (let i = 0; i < N; i++) {
    let x, y; do { x = 0.3 + rnd() * 49.4; y = 0.3 + rnd() * 29.4; } while (Math.hypot(x - 25, y - 15) < Rb + 0.4);
    G.px[i] = x; G.py[i] = y; const s = Math.sqrt(c.KB * T / c.M); G.vx[i] = s * gauss(); G.vy[i] = s * gauss();
  }
  return G;
}
const keB = (G, N) => ke(G, N) + 0.5 * G.big.m * (G.big.vx ** 2 + G.big.vy ** 2);
group('Brownian motion: a kick on the large disk keeps momentum and kinetic energy exactly', () => {
  const G = c.makeGas(); G.big = c.makeBig(20, 15, 2, 60 * c.M); G.big.vx = 30; G.big.vy = -10;
  G.px[0] = 22.2; G.py[0] = 15.3; G.vx[0] = -400; G.vy[0] = 120;
  const p0 = [c.M * G.vx[0] + G.big.m * G.big.vx, c.M * G.vy[0] + G.big.m * G.big.vy], e0 = keB(G, 1);
  G.big.vx0 = G.big.vx; G.big.vy0 = G.big.vy; G.big.ox = G.big.x; G.big.oy = G.big.y;
  c.bigCollide(G, 1, 0.01);
  near(c.M * G.vx[0] + G.big.m * G.big.vx, p0[0], 1e-12, 'px'); near(c.M * G.vy[0] + G.big.m * G.big.vy, p0[1], 1e-12, 'py');
  near(keB(G, 1), e0, 1e-12, 'KE'); assert.strictEqual(G.big.kicks, 1);
  near(Math.hypot(G.px[0] - G.big.x, G.py[0] - G.big.y), 2 + c.R, 1e-12, 'moved apart to contact');
});
group('Brownian motion: energy is conserved over 500 ps with the large disk, and its unfolded path follows its folded one', () => {
  const G = brownGas(150, 300, 60, 2), e0 = keB(G, 150);
  for (let k = 0; k < 10000; k++) c.step(G, 150, 0.05);
  near(keB(G, 150), e0, 1e-9, 'KE'); assert(G.big.kicks > 50, 'the disk is kicked');
  const B = G.big; const fx = (u) => { const L = 50 - 2 * B.r, w = ((u - B.r) % (2 * L) + 2 * L) % (2 * L); return B.r + (w <= L ? w : 2 * L - w); };
  near(fx(B.ux), B.x, 1e-6, 'unfolded x folds back to x');
});
group('Brownian motion: msdLag averages over every start; fitLine has a free intercept', () => {
  const xs = [0, 1, 3, 6], ys = [0, 0, 0, 0];
  near(c.msdLag(xs, ys, 4, 1), (1 + 4 + 9) / 3 / 2, 1e-15, 'lag 1'); near(c.msdLag(xs, ys, 4, 3), 36 / 2, 1e-15, 'lag 3');
  const F = c.fitLine([1, 2, 3, 4], [5, 7, 9, 11]); near(F.b, 2, 1e-14, 'slope'); near(F.a, 3, 1e-14, 'intercept');
});
group('Brownian motion: the drag γ from the kicks and the Einstein relation D = kT/γ hold in the simulation (one 20 ns run, within 50%; seven 40 ns runs averaged 0.98, spread 0.23)', () => {
  const G = brownGas(150, 300, 60, 2), xs = [], ys = [];
  for (let k = 0; k < 400000; k++) { c.step(G, 150, 0.05); if (k % 40 === 0) { xs.push(G.big.ux); ys.push(G.big.uy); } }
  const g = c.bigGamma(G.big), tau = 60 * c.M / g * 1e12, n = xs.length, lx = [], ly = [];
  assert(tau > 100 && tau < 400, 'the drag from the kicks gives m/γ of a few hundred ps: ' + tau);
  for (let k = 1; k <= Math.floor((n - 1) / 8); k = Math.max(k + 1, Math.round(k * 1.12))) { const l = 2 * k; if (l >= 3 * tau && l <= (n - 1) * 2 / 10) { lx.push(l); ly.push(c.msdLag(xs, ys, n, k)); } }
  let e = 0; for (let i = 0; i < 150; i++) e += 0.5 * c.M * (G.vx[i] ** 2 + G.vy[i] ** 2); const T = e / (150 * c.KB);
  const D = c.fitLine(lx, ly).b / 2, Dk = c.KB * T / g * 1e6;   /* nm²/ps */
  near(D, Dk, 0.5, 'D fit against kT/γ');
});
group('Brownian motion, the real case: Stokes D = kT/(6πηa) and Perrin N_A = RTt/(3πηa⟨x²⟩) undo each other', () => {
  const D = c.stokesD(293.15, 1.002e-3, 0.5e-6); near(D, 4.2858e-13, 1e-4, 'D for a 1.0 µm grain in water at 20 °C');
  const R = c.NA * c.KB; near(c.perrinNA(293.15, 1.002e-3, 0.5e-6, 2 * D * 30, 30, R), c.NA, 1e-12, 'N_A');
});

console.log(`${n} groups passed`);
