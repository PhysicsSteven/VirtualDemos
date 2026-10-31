'use strict';
// Crystals, Bands and Semiconductors: Madelung constants and lattice energies, the tight binding chain, carriers in silicon, the pn junction.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('solids', 'KB,KE2,HC,KJMOL_PER_EV,SALTS,salt,erfc,madelungEwald,madelungCube,shellList,madelungShells,latticeU,pairU,r0FromDensity,BAND,hop,bandSet,chainLevels,fillChain,bandFill,GAPS,MATS,DONORS,ACCEPTORS,NcT,NvT,ni,carriers,region,diodeI,I0T,junction,LEDS,lambdaNm,HB2M,kpPiece,kpCell,kpF,kpBands,kpE,kpPsi,kpKext');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
const nearAbs = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b} ± ${tol}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('erfc matches tabulated values (Abramowitz and Stegun Table 7.1)', () => {
  near(c.erfc(0), 1, 1e-7); near(c.erfc(0.5), 0.4795001222, 1e-6); near(c.erfc(1), 0.1572992071, 1e-6); near(c.erfc(2), 0.004677734981, 1e-6); near(c.erfc(-1), 1.8427007929, 1e-6);
});
group('Madelung constants by Ewald: NaCl 1.747565, CsCl 1.762675 (§9.3 quotes 1.7476 and about 1.76)', () => {
  near(c.madelungEwald('rs'), 1.747565, 2e-6, 'NaCl'); near(c.madelungEwald('cs'), 1.762675, 2e-6, 'CsCl');
});
group("Evjen's neutral cubes settle on α; the first cube is 3 − 3/√2 + 1/√3", () => {
  near(c.madelungCube(1), 3 - 3 / Math.SQRT2 + 1 / Math.sqrt(3), 1e-12, 'm = 1');
  near(c.madelungCube(8), 1.747565, 2e-5, 'm = 8');
  for (let m = 2; m <= 8; m++) assert(Math.abs(c.madelungCube(m) - 1.747565) < 0.005, `m ${m}`);
});
group('shells: the book series 6 − 12/√2 + 8/√3 − 6/2 + 24/√5 ...; summed shell by shell it does not settle', () => {
  const sh = c.shellList('rs', 5); assert.equal(JSON.stringify(sh.map((e) => e.count)), JSON.stringify([6, 12, 8, 6, 24])); assert.equal(JSON.stringify(sh.map((e) => e.q)), "[-1,1,-1,1,-1]");
  near(c.madelungShells('rs', 3), 6 - 12 / Math.SQRT2 + 8 / Math.sqrt(3), 1e-12, 'three shells');
  const cs = c.shellList('cs', 2); assert.equal(JSON.stringify(cs.map((e) => e.count)), JSON.stringify([8, 6])); near(cs[1].d, 2 / Math.sqrt(3), 1e-12, 'CsCl second shell at a = 2r0/√3');
  let lo = Infinity, hi = -Infinity; for (let K = 20; K <= 40; K++) { const v = c.madelungShells('rs', K); lo = Math.min(lo, v); hi = Math.max(hi, v); }
  assert(hi - lo > 2, 'partial sums keep swinging');
});
group('Example 9.3: r0 from density 2.16 g/cm³ and M = 58.4 g/mol is 0.28 nm; U = 1.75 × 1.44/0.280 × 7/8 = 7.88 eV', () => {
  near(c.r0FromDensity(58.4, 2.16), 0.2815, 0.004, 'r0');
  near(1.75 * 1.44 / 0.280 * (1 - 1 / 8), 7.875, 1e-9);
  near(c.latticeU(1.75, 0.280, 8) * 1.44 / c.KE2, 7.875, 1e-9, 'latticeU with the book constants');
});
group('NaCl with Kittel r0 = 0.2820 nm, n = 8: 7.81 eV = 753 kJ/mol, 4 % below Table 9.2 (787); every salt within 7 % low', () => {
  const s = c.salt('NaCl'); assert.equal(s.n, 8); const U = c.latticeU(c.madelungEwald('rs'), s.r0, s.n);
  near(U, 7.808, 1e-3, 'U eV'); near(U * c.KJMOL_PER_EV, 753.4, 2e-3, 'kJ/mol');
  assert.equal(c.SALTS.length, 20);
  for (const t of c.SALTS) { const u = c.latticeU(c.madelungEwald(t.st), t.r0, t.n) * c.KJMOL_PER_EV, dev = u / t.U - 1; assert(dev < 0 && dev > -0.07, `${t.name}: ${(100 * dev).toFixed(1)} %`); }
  assert.equal(c.salt('CsI').n, 12); assert.equal(c.salt('LiF').n, 6);
});
group('pair energy: minimum −U at r0, zero slope there, repulsive inside', () => {
  const a = 1.747565, r0 = 0.282, nB = 8, U = c.latticeU(a, r0, nB), h = 1e-6;
  near(c.pairU(a, r0, nB, r0), -U, 1e-12); near((c.pairU(a, r0, nB, r0 + h) - c.pairU(a, r0, nB, r0 - h)) / (2 * h), 0, 1e-6, 'dU/dr');
  assert(c.pairU(a, r0, nB, 0.2) > 0);
});
group('tight binding chain: N levels per orbital, centred on the atomic level, inside E ± 2t; isolated atoms give degenerate levels', () => {
  for (const N of [1, 2, 6, 40]) { const L = c.chainLevels(N, 0.3), s = L.filter((l) => l.band === 's');
    assert.equal(s.length, N); assert.equal(L.length, 3 * N); near(s.reduce((a, l) => a + l.E, 0) / N, c.BAND.Es, 1e-12, 'centre');
    const t = c.hop(0.3).s; for (const l of s) assert(l.E > c.BAND.Es - 2 * t && l.E < c.BAND.Es + 2 * t); }
  const two = c.chainLevels(2, 0.3).filter((l) => l.band === 's'), t = c.hop(0.3).s; near(two[1].E - two[0].E, 2 * t, 1e-12, 'two atoms split by 2t');
  const far = c.chainLevels(10, 0.6).filter((l) => l.band === 's'); assert(far[9].E - far[0].E < 0.06, 'far apart: nearly degenerate');
  near(c.hop(c.BAND.d0).s, c.BAND.ts0, 1e-12); near(Math.log(c.hop(0.3).s / c.hop(0.4).s), 0.1 / c.BAND.ls, 1e-12, 'exponential fall off');
});
group('filling: Z = 1 half fills the s band (metal); Z = 2 fills it (gap) unless the bands overlap (metal); electrons are conserved', () => {
  const f1 = c.bandFill(0.3, 1); assert(f1.metal); near(f1.EF, c.BAND.Es, 1e-6, 'half filled at the centre');
  const f2 = c.bandFill(0.3, 2), B = c.bandSet(0.3); assert(!f2.metal); near(f2.gap, (B[1].c - 2 * B[1].t) - (B[0].c + 2 * B[0].t), 1e-9, 'gap');
  assert(c.bandFill(0.21, 2).metal, 'overlapping bands at small spacing');
  for (const [N, Z] of [[6, 2], [7, 3], [40, 1]]) { const F = c.fillChain(N, 0.3, Z); assert.equal(F.levels.reduce((a, l) => a + l.occ, 0), N * Z); }
  assert.equal(c.GAPS.find((g) => g[0] === "Si")[1], 1.14);
});
group('silicon (Sze and Ng): n_i at 300 K = √(Nc Nv) e^(−Eg/2kT) ≈ 1.07 × 10¹⁰ cm⁻³, within 15 % of the quoted 9.65 × 10⁹', () => {
  const v = c.ni('Si', 300); near(v, 1.066e10, 0.01, 'n_i'); assert(Math.abs(v / 9.65e9 - 1) < 0.15);
  near(c.NcT(c.MATS.Si, 600) / c.NcT(c.MATS.Si, 300), Math.pow(2, 1.5), 1e-12, 'T^(3/2)');
  /* the slope of ln(n_i / T^1.5) against 1/T is −Eg/2k */
  const g = (T) => Math.log(c.ni('Si', T) / Math.pow(T, 1.5)); near(-(g(500) - g(400)) / (1 / 500 - 1 / 400) * 2 * c.KB, 1.12, 1e-9, 'gap from the slope');
});
group('charge neutrality: pure sample n = p = n_i; doped sample n p = n_i²; n ≈ N_D at 300 K; freeze out and intrinsic limits', () => {
  for (const T of [200, 300, 600]) { const r = c.carriers('Si', T); near(r.n, r.ni, 1e-6, 'n'); near(r.p, r.ni, 1e-6, 'p'); near(r.EF, 0.56 + 0.5 * r.kT * Math.log(2.65 / 2.8), 1e-6, 'E_F mid gap'); }
  const r = c.carriers('Si', 300, 1e15, 0); near(r.n * r.p, r.ni * r.ni, 1e-6, 'mass action'); near(r.n, 1e15, 0.002, 'n ≈ N_D'); near(r.n, r.NDp + r.p, 1e-9, 'neutral');
  assert.equal(c.region(r, 1e15, 0), 'extrinsic'); assert.equal(c.region(c.carriers('Si', 40, 1e15, 0), 1e15, 0), 'freeze out'); assert.equal(c.region(c.carriers('Si', 700, 1e15, 0), 1e15, 0), 'intrinsic');
  const lo = c.carriers('Si', 30, 1e15, 0, 0.045); near(lo.n, Math.sqrt(lo.Nc * 1e15 / 2) * Math.exp(-0.045 / (2 * lo.kT)), 0.02, 'freeze out: n = √(Nc N_D/2) e^(−Ed/2kT)');
  const p = c.carriers('Si', 300, 0, 1e16, 0.045, 0.045); near(p.p, 1e16, 0.01, 'p ≈ N_A'); assert(p.EF < 0.3);
  const comp = c.carriers('Si', 300, 1e16, 4e15); near(comp.n, 6e15, 0.01, 'compensated: n ≈ N_D − N_A');
});
group('diode, Eq. 9.36: I = I0(e^(eV/kT) − 1); reverse → −I0; Example 9.6 gives eV/kT = ln(2.05 × 10⁷) = 16.8 and T = 83 K', () => {
  near(c.diodeI(0, 300, 1e-12), 0, 1e-30); near(c.diodeI(-1, 300, 1e-12), -1e-12, 1e-12, 'reverse'); near(c.diodeI(0.5, 300, 1e-12), 1e-12 * Math.expm1(0.5 / (c.KB * 300)), 1e-12);
  near(Math.log(c.diodeI(0.6, 300, 1e-12) / c.diodeI(0.5, 300, 1e-12)), 0.1 / (c.KB * 300), 1e-4, 'slope of ln I is e/kT');
  const x = Math.log(4.5e-1 / 2.2e-8 + 1); near(x, 16.83, 1e-3, 'ln'); near(0.12 / (c.KB * x), 82.7, 1e-3, 'T');
  near(c.I0T(1e-12, 300), 1e-12, 1e-12); assert(c.I0T(1e-12, 310) / 1e-12 > 2, 'I0 roughly doubles every 5 to 10 K');
});
group('abrupt junction: V_bi = (kT/e) ln(N_A N_D / n_i²); W ∝ √(V_bi − V); charge balance N_A x_p = N_D x_n', () => {
  const j = c.junction('Si', 300, 1e16, 1e16, 0); near(j.Vbi, c.KB * 300 * Math.log(1e32 / Math.pow(c.ni('Si', 300), 2)), 1e-12); near(j.Vbi, 0.711, 2e-3);
  near(j.W, 0.4325e-6, 2e-3, 'W'); const j2 = c.junction('Si', 300, 1e16, 1e16, -3); near(j2.W / j.W, Math.sqrt((j.Vbi + 3) / j.Vbi), 1e-9);
  const k = c.junction('Si', 300, 1e17, 1e15, -1); near(1e17 * k.xp, 1e15 * k.xn, 1e-9, 'charge balance');
});
group('LEDs: λ = hc/Eg; GaP 2.26 eV → 549 nm (green), GaAs 1.43 eV → 867 nm (infrared)', () => {
  near(c.lambdaNm(c.LEDS.GaP), 548.6, 1e-3); near(c.lambdaNm(c.LEDS.GaAs), 867.0, 1e-3); near(c.lambdaNm(c.LEDS.GaN), 361.5, 1e-3); near(c.HC, 1239.84, 1e-5);
});
group('Kronig–Penney: f(E) equals the textbook form below V₀; det M = 1; with V₀ = 0 the bands touch and follow the free electron E = ħ²k²/2m', () => {
  const V0 = 10, w = 0.25, b = 0.05;
  for (const E of [0.5, 2, 4.25, 7, 9.9]) { const al = Math.sqrt(E / c.HB2M), be = Math.sqrt((V0 - E) / c.HB2M);
    const ff = Math.cos(al * w) * Math.cosh(be * b) + (be * be - al * al) / (2 * al * be) * Math.sin(al * w) * Math.sinh(be * b);
    nearAbs(c.kpF(E, V0, w, b), ff, 1e-9 * Math.max(1, Math.abs(ff)), `f(${E})`);
    const M = c.kpCell(E, V0, w, b); nearAbs(M[0] * M[3] - M[1] * M[2], 1, 1e-9, 'det'); }
  for (const E of [12, 20]) { const al = Math.sqrt(E / c.HB2M), g = Math.sqrt((E - V0) / c.HB2M);
    nearAbs(c.kpF(E, V0, w, b), Math.cos(al * w) * Math.cos(g * b) - (al * al + g * g) / (2 * al * g) * Math.sin(al * w) * Math.sin(g * b), 1e-9, `f above V0 ${E}`); }
  const free = c.kpBands(0, w, b, 40); for (let i = 0; i < 3; i++) { nearAbs(free[i + 1][0], free[i][1], 1e-9, 'no gaps'); nearAbs(free[i][1], c.HB2M * ((i + 1) * Math.PI / (w + b)) ** 2, 1e-6, 'edge at nπ/a'); }
  for (const sv of [0.3, 0.8]) { nearAbs(c.kpE(free, 1, sv, 0, w, b), c.HB2M * (sv * Math.PI / (w + b)) ** 2, 1e-6, `free ${sv}`); nearAbs(c.kpE(free, 2, sv, 0, w, b), c.HB2M * c.kpKext(2, sv, w + b) ** 2, 1e-6, `free band 2 ${sv}`); }
  const tiny = c.kpBands(0.05, w, b, 40); assert(tiny[1][0] - tiny[0][1] > 0.01 && tiny[1][0] - tiny[0][1] < 0.05, 'a small gap for a small V0');
});
group('Kronig–Penney: bands and gaps (V₀ = 10 eV, w = 0.25, b = 0.05 nm): band 1 1.340 to 4.250 eV, gap 2.855 eV; |f| = 1 at every edge; deep wells narrow the band toward the single well level', () => {
  const V0 = 10, w = 0.25, b = 0.05, B = c.kpBands(V0, w, b, 40);
  nearAbs(B[0][0], 1.3397, 1e-4); nearAbs(B[0][1], 4.2496, 1e-4); nearAbs(B[1][0] - B[0][1], 2.8548, 1e-3);
  for (const [lo, hi] of B.slice(0, 3)) { nearAbs(Math.abs(c.kpF(lo, V0, w, b)), 1, 1e-9); nearAbs(Math.abs(c.kpF(hi, V0, w, b)), 1, 1e-9); }
  nearAbs(c.kpE(B, 1, 0, V0, w, b), B[0][0], 1e-9); nearAbs(c.kpE(B, 1, 1, V0, w, b), B[0][1], 1e-9); nearAbs(c.kpE(B, 2, 1, V0, w, b), B[1][0], 1e-9);
  const width = (bb) => { const q = c.kpBands(20, w, bb, 40)[0]; return q[1] - q[0]; }; assert(width(0.2) < width(0.1) && width(0.1) < width(0.05), 'thicker barriers, narrower band');
  /* single finite well of width w and depth 20 eV, even ground state: √E tan(αw/2) = √(V0 − E) */
  let lo = 0.01, hi = 5; const g = (E) => Math.sqrt(E) * Math.tan(Math.sqrt(E / c.HB2M) * w / 2) - Math.sqrt(20 - E); for (let i = 0; i < 100; i++) { const m = (lo + hi) / 2; if (g(m) < 0) lo = m; else hi = m; }
  const q = c.kpBands(20, w, 0.3, 40)[0]; assert(q[0] < lo && lo < q[1] && q[1] - q[0] < 0.02, `well level ${lo} inside the narrow band ${q}`);
});
group('Kronig–Penney: the Bloch state obeys ψ(x + a) = e^(ika) ψ(x) and the Schrödinger equation in each piece', () => {
  const V0 = 10, w = 0.25, b = 0.05, a = w + b, B = c.kpBands(V0, w, b, 40);
  for (const [n, sv] of [[1, 0.3], [2, 0.7], [3, 0.5]]) { const E = c.kpE(B, n, sv, V0, w, b), ps = c.kpPsi(E, sv, V0, w, b);
    for (const x of [0.05, 0.2, 0.27]) { const z0 = ps(x), z1 = ps(x + a), lr = Math.cos(Math.PI * sv), li = Math.sin(Math.PI * sv);
      nearAbs(z1[0], z0[0] * lr - z0[1] * li, 1e-9, 'Bloch re'); nearAbs(z1[1], z0[0] * li + z0[1] * lr, 1e-9, 'Bloch im'); }
    const h = 1e-4; for (const [x, V] of [[0.12, 0], [0.275, V0]]) { const d2 = (ps(x + h)[0] - 2 * ps(x)[0] + ps(x - h)[0]) / (h * h);
      nearAbs(-c.HB2M * d2 + V * ps(x)[0], E * ps(x)[0], 1e-4 * Math.max(1, Math.abs(E * ps(x)[0])), `Schrödinger at ${x}`); } }
  nearAbs(c.kpKext(1, 0.5, a), 0.5 * Math.PI / a, 1e-12); nearAbs(c.kpKext(2, 0.25, a), 1.75 * Math.PI / a, 1e-12);
});
console.log(`${n} groups passed`);
