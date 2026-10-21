'use strict';
// Chladni Plates core: Bessel functions, the exact free circular plate, the Rayleigh–Ritz free square plate, the driven
// response and the sand model, checked against reference values and published tables.
const assert = require('node:assert/strict'), { core } = require('./demo_source.cjs');
let count = 0; const test = (name, fn) => { fn(); count++; console.log('PASS', name); };
function close(a, b, rel = 1e-10, abs = 0) { assert(Number.isFinite(a) && Math.abs(a - b) <= abs + rel * Math.abs(b), `expected ${b}, got ${a}`); }
const C = core('chladni', 'G0,PLATE,MATERIALS,SQ_P,LAM2_MAX,flexRigidity,fScale,plateMass,besselJ,besselI,besselJArr,circleEdge,circleModes,circleRadial,circlePhi,gaussLegendre,legendreRow,squareModes,squarePhi,modalAmps,rmsAccel,launchSpeed,sandStep,mulberry32,chladniFit,symEig,circleRoots,receptanceTail,pointReceptance,voiceCoilDrive,driveResonances,hopLength');

test('chladni: Bessel J_n and I_n against reference values', () => {
  // J0(1), J1(1), J0(10), I0(1), I1(1), I0(10) as tabulated in Abramowitz & Stegun (Tables 9.1, 9.8); the rest from SciPy 1.x
  const J = [[0, 1, 0.7651976865579666], [1, 1, 0.44005058574493355], [0, 10, -0.24593576445134832], [5, 10, -0.2340615281867936],
    [2, 0.5, 0.030604023458682638], [10, 3, 1.2928351645715883e-05], [20, 45, 0.004763343790031145], [30, 12, 2.5522590430344187e-10], [3, 44.7, -0.0036063487417484622]];
  const I = [[0, 1, 1.2660658777520084], [1, 1, 0.565159103992485], [0, 10, 2815.7166284662544], [5, 10, 777.1882864032599],
    [2, 0.5, 0.031906149177738256], [10, 3, 1.946439347061297e-05], [20, 45, 2.5039579987216524e16], [30, 12, 2.608985696224887e-09], [3, 44.7, 1.3987603702166433e18]];
  for (const [n, x, v] of J) close(C.besselJ(n, x), v, 1e-11, 1e-15);
  for (const [n, x, v] of I) close(C.besselI(n, x), v, 1e-11);
  // the recurrence identity J_{n−1} + J_{n+1} = (2n/x) J_n across all orders
  const a = C.besselJArr(40, 17.3);
  for (let n = 1; n < 40; n++) close(a[n - 1] + a[n + 1], 2 * n / 17.3 * a[n], 1e-9, 1e-15);
});

const circ33 = C.circleModes(0.33, C.LAM2_MAX.circle), circ30 = C.circleModes(0.30, C.LAM2_MAX.circle);
const find = (list, n, m) => list.find((md) => md.n === n && md.m === m);
test('chladni: free circular plate λ² against Leissa (1969, ν = 0.33) and an independent FEM table (ν = 0.3)', () => {
  // Leissa, Vibration of Plates, NASA SP-160 (1969), Table 2.4, completely free circular plate, ν = 0.33, λ² = ω a² √(ρh/D).
  // Leissa's table is compiled from older calculations to 3 or 4 figures; the exact roots agree within 0.4 %.
  const leissa = [[2, 0, 5.253], [0, 1, 9.084], [3, 0, 12.23], [1, 1, 20.52], [4, 0, 21.6], [5, 0, 33.1], [2, 1, 35.25], [0, 2, 38.55], [3, 1, 52.91], [1, 2, 59.86], [0, 3, 87.80]];
  let worst = 0;
  for (const [n, m, v] of leissa) { const md = find(circ33, n, m); assert(md, `(${n},${m}) missing`); const e = Math.abs(md.lam2 - v) / v; worst = Math.max(worst, e); assert(e < 0.004, `(${n},${m}): ${md.lam2} vs Leissa ${v}`); }
  console.log('   worst |λ² − Leissa| / Leissa =', (100 * worst).toFixed(2), '%');
  // ANSYS shell model, ν = 0.3, in "Numerical finite element determination on free, transverse vibrations of circular plates"
  // (Engineering and Technology Horizons, ph02.tci-thaijo.org, article 244797), Table 1, free column
  const fem = [[2, 0, 5.359], [0, 1, 9.005], [3, 0, 12.441], [1, 1, 20.489], [4, 0, 21.840], [5, 0, 33.511], [2, 1, 35.293], [0, 2, 38.505]];
  for (const [n, m, v] of fem) close(find(circ30, n, m).lam2, v, 0.002);
});

test('chladni: circular modes satisfy the free edge conditions, and nodal counts and order are right', () => {
  // edge moment M_r ∝ R'' + ν(R' − n²R) and Kirchhoff shear V_r ∝ (∇²R)' − (1 − ν) n² (R' − R) vanish at r = 1 (finite differences)
  for (const md of circ33.filter((x) => !x.rigid).slice(0, 25)) {
    const nu = 0.33, n = md.n, h = 1e-3, R = (r) => C.circleRadial(md, r);
    const d1 = (r) => (R(r + h) - R(r - h)) / (2 * h), d2 = (r) => (R(r + h) - 2 * R(r) + R(r - h)) / (h * h);
    const lap = (r) => d2(r) + d1(r) / r - n * n * R(r) / (r * r);
    const scale = md.lam2 * Math.max(...Array.from({ length: 50 }, (_, i) => Math.abs(R(0.02 * (i + 1)))));
    const M = d2(1) + nu * (d1(1) - n * n * R(1)), V = (lap(1 + h) - lap(1 - h)) / (2 * h) - (1 - nu) * n * n * (d1(1) - R(1));
    assert(Math.abs(M) < 2e-4 * scale && Math.abs(V) < 2e-3 * scale * md.lam, `(${n},${md.m}): M = ${M}, V = ${V}`);
  }
  assert.equal(JSON.stringify(circ33.slice(2, 6).map((x) => [x.n, x.m])), "[[2,0],[0,1],[3,0],[1,1]]");
});

test('chladni: circular modes orthonormal in the mean over the disk', () => {
  const gq = C.gaussLegendre(160), modes = circ33.filter((x) => x.n === 0).slice(0, 6).concat(circ33.filter((x) => x.n === 3).slice(0, 4));
  for (const a of modes) for (const b of modes) {
    if (a.n !== b.n) continue;
    let s = 0; for (let i = 0; i < gq.x.length; i++) { const r = 0.5 * (gq.x[i] + 1); s += 0.5 * gq.w[i] * r * C.circlePhi(a, r, 0) * C.circlePhi(b, r, 0); }
    s *= (a.n === 0 ? 2 : 1);   // mean over the disk: (1/π) ∫∫ … r dr dθ, angular factor 2π (n = 0) or π
    close(s, a === b ? 1 : 0, 0, 1e-9);
  }
});

const sq = C.squareModes(0.3, C.SQ_P, C.LAM2_MAX.square);
const flex = sq.filter((m) => !m.rigid).map((m) => m.lam2);
test('chladni: free square plate converges with basis size and sits just below Leissa (1973)', () => {
  const conv = [8, 12, 16, 20, 30].map((P) => C.squareModes(0.3, P, 400).filter((m) => !m.rigid).slice(0, 10).map((m) => m.lam2));
  console.log('   λ² of the first 6 flexural modes vs Legendre degree P:');
  [8, 12, 16, 20, 30].forEach((P, i) => console.log(`     P = ${String(P).padStart(2)}: ${conv[i].slice(0, 6).map((v) => v.toFixed(5)).join('  ')}`));
  for (let k = 0; k < 10; k++) close(conv[3][k], conv[4][k], 1e-7);            // P = 20 and P = 30 agree to 1e−7
  // Ritz upper bounds: more terms never raise a frequency
  for (let k = 0; k < 10; k++) for (let i = 1; i < conv.length; i++) assert(conv[i][k] <= conv[i - 1][k] * (1 + 1e-12));
  // Leissa, "The free vibration of rectangular plates", J. Sound Vib. 31 (1973) 257, FFFF square, ν = 0.3 (beam function Ritz, upper bounds)
  const leissa = [13.489, 19.789, 24.432, 35.024, 35.024, 61.526];
  leissa.forEach((v, k) => { assert(flex[k] <= v, `mode ${k + 1}: ${flex[k]} above Leissa's upper bound ${v}`); close(flex[k], v, 0.011); });
  // the converged values quoted in the literature: 13.468, 19.596, 24.270, 34.801, 61.093, 63.686
  [13.468, 19.596, 24.270, 34.801, 34.801, 61.093, 61.093, 63.686].forEach((v, k) => close(flex[k], v, 6e-5));
});

test('chladni: square against Porter (2017), ν = 0.225, λ_b = ρhω²(L/2)⁴/D (his N = 48 Ritz values, upper bounds)', () => {
  // R. Porter, "Eigenfrequencies and eigenmodes for a thin rectangular elastic plate with free edges", Univ. of Bristol report (2017), Table 1
  const porter = { oo: [12.4552, 320.969, 375.420, 1526.65], ee: [25.9900, 35.6495, 269.437, 876.747], eo: [80.9341, 235.500, 730.513, 1104.26] };
  const m225 = C.squareModes(0.225, C.SQ_P, 1000).filter((m) => !m.rigid);
  for (const cls of ['oo', 'ee', 'eo']) {
    const ours = m225.filter((m) => m.cls === cls).map((m) => Math.pow(m.lam2 / 4, 2));
    porter[cls].forEach((v, k) => { assert(ours[k] <= v * (1 + 1e-6)); close(ours[k], v, 0.004); });
  }
});

test('chladni: square modes orthonormal (Gauss quadrature of the evaluated shapes); symmetry decides what a center drive excites', () => {
  const gq = C.gaussLegendre(48), pick = sq.filter((m) => !m.rigid).slice(0, 12);
  const vals = pick.map((md) => { const a = []; for (const x of gq.x) for (const y of gq.x) a.push(C.squarePhi(md, x, y)); return a; });
  for (let i = 0; i < pick.length; i++) for (let j = 0; j < pick.length; j++) {
    let s = 0, k = 0; for (let a = 0; a < gq.x.length; a++) for (let b = 0; b < gq.x.length; b++) s += gq.w[a] * gq.w[b] * vals[i][k] * vals[j][k++];
    close(s / 4, i === j ? 1 : 0, 0, 1e-9);
  }
  for (const md of sq) {
    const c = Math.abs(C.squarePhi(md, 0, 0));
    if (md.cls === 'ee' && md.swap > 0) continue;
    assert(c < 1e-10, `${md.cls}${md.swap} mode at λ² ${md.lam2} moves at the center: ${c}`);
  }
  const driven = sq.filter((m) => !m.rigid && Math.abs(C.squarePhi(m, 0, 0)) > 0.15).slice(0, 4).map((m) => +m.lam2.toFixed(3));
  assert.equal(JSON.stringify(driven), "[24.27,63.686,122.445,168.483]");
});

test('chladni: frequency scale f = λ² √(D/ρh)/(2π ℓ²) for 1 mm steel', () => {
  const st = C.MATERIALS.steel, D = C.flexRigidity(st.E, 1e-3, st.nu);
  close(D, 200e9 * 1e-9 / (12 * (1 - 0.09)));
  close(C.fScale('square', st, 1e-3), Math.sqrt(D / (st.rho * 1e-3)) / (2 * Math.PI * 0.24 * 0.24));
  close(C.fScale('square', st, 2e-3) / C.fScale('square', st, 1e-3), 2);
  close(C.fScale('circle', st, 1e-3) / C.fScale('square', st, 1e-3), 4);   // radius 12 cm against side 24 cm
});

test('chladni: driven response at resonance scales with Q; rigid modes give the free mass response', () => {
  const st = C.MATERIALS.steel, fs = C.fScale('square', st, 1e-3), M = C.plateMass('square', st, 1e-3);
  const lam2 = Float64Array.from(sq, (m) => m.lam2), phiP = Float64Array.from(sq, (m) => C.squarePhi(m, 0, 0));
  const k = sq.findIndex((m) => !m.rigid && Math.abs(phiP[sq.indexOf(m)]) > 0.15), f0 = lam2[k] * fs;
  const q1 = C.modalAmps(lam2, phiP, f0, fs, 100, 0.1, M), q2 = C.modalAmps(lam2, phiP, f0, fs, 200, 0.1, M);
  close(Math.hypot(q2.re[k], q2.im[k]) / Math.hypot(q1.re[k], q1.im[k]), 2, 1e-12);
  close(Math.abs(q1.im[k]), 0.1 * Math.abs(phiP[k]) * 100 / (M * Math.pow(2 * Math.PI * f0, 2)), 1e-12);   // |q| = F φ̂ Q / (M ω²)
  assert(Math.abs(q1.re[k]) < 1e-12 * Math.abs(q1.im[k]));                                                  // 90° behind the force
  const r1 = C.rmsAccel(lam2, phiP, f0, fs, 100, 0.1, M), r2 = C.rmsAccel(lam2, phiP, f0, fs, 200, 0.1, M);
  close(r2 / r1, 2, 0.01);                                                                                   // the resonant mode dominates
  // far below every flexural mode, a center force just shakes the whole plate: |a| → F/M (translation mode, φ̂ = 1)
  close(C.rmsAccel(lam2, phiP, 0.5, fs, 100, 0.1, M), 0.1 / M, 1e-3);
});

test('chladni: launch speed v_L = (g/ω)√(Γ² − 1): zero at the threshold, ∝ 1/f', () => {
  assert.equal(C.launchSpeed(1, 100), 0); assert.equal(C.launchSpeed(0.5, 100), 0);
  close(C.launchSpeed(2, 100), 9.80665 / (2 * Math.PI * 100) * Math.sqrt(3), 1e-14);
  close(C.launchSpeed(5, 1000) / C.launchSpeed(5, 100), 0.1, 1e-14);
  // the plate's velocity when its acceleration passes −g: A ω sin(ωt) with A ω² cos(ωt) = g, A ω² = Γ g
  const G = 7, w = 2 * Math.PI * 300, ct = 1 / G; close(C.launchSpeed(G, 300), G * 9.80665 / w * Math.sqrt(1 - ct * ct), 1e-13);
});

test('chladni: sand model leaves grains alone below g and moves them off the antinodes (statistical)', () => {
  // a test field: Γ = 6 |sin(πu) sin(πv)| on the square, nodal lines on u = 0, v = 0, edges
  const gamma = (u, v) => 6 * Math.abs(Math.sin(Math.PI * u) * Math.sin(Math.PI * v)), inside = (u, v) => Math.abs(u) <= 1 && Math.abs(v) <= 1;
  const N = 4000, rng = C.mulberry32(7), x = new Float64Array(N), y = new Float64Array(N), alive = new Uint8Array(N).fill(1);
  for (let i = 0; i < N; i++) { x[i] = 2 * rng() - 1; y[i] = 2 * rng() - 1; }
  const meanG = () => { let s = 0, n = 0; for (let i = 0; i < N; i++) if (alive[i]) { s += gamma(x[i], y[i]); n++; } return s / n; };
  const g0 = meanG(), still = []; for (let i = 0; i < N; i++) if (gamma(x[i], y[i]) <= 1) still.push([i, x[i], y[i]]);
  // the demo's hop: grain speed = launch speed v_L at f = 200 Hz, for 1/60 s, at most 3 mm, in plate half widths (12 cm)
  const hop = (g, u) => C.hopLength(g, 200, 1, 1 / 60, u) / 0.12;
  for (let t = 0; t < 600; t++) C.sandStep(x, y, alive, gamma, inside, rng, hop, 0.5);   // 10 s
  for (const [i, a, b] of still) { assert.equal(x[i], a); assert.equal(y[i], b); }
  const g1 = meanG(); let rest = 0, n = 0; for (let i = 0; i < N; i++) if (alive[i]) { n++; if (gamma(x[i], y[i]) <= 1) rest++; }
  console.log(`   mean Γ under the grains ${g0.toFixed(2)} → ${g1.toFixed(3)}; at rest ${(100 * rest / n).toFixed(0)} % of ${n} grains left on the plate`);
  assert(g0 > 2.2 && g1 < 0.9 && rest / n > 0.9);
  // with no drift the grains still leave the antinodes, but slowly: pure random hops, trapped where Γ < 1
  const x2 = new Float64Array(N), y2 = new Float64Array(N), al2 = new Uint8Array(N).fill(1), r2 = C.mulberry32(9);
  for (let i = 0; i < N; i++) { x2[i] = 2 * r2() - 1; y2[i] = 2 * r2() - 1; }
  for (let t = 0; t < 600; t++) C.sandStep(x2, y2, al2, gamma, inside, r2, hop, 0);
  let s = 0, m = 0; for (let i = 0; i < N; i++) if (al2[i]) { s += gamma(x2[i], y2[i]); m++; }
  assert(s / m < 0.97 * g0, `no drift: mean Γ ${s / m}`); console.log(`   without drift, 10 s: mean Γ ${g0.toFixed(2)} → ${(s / m).toFixed(2)}`);
});


test('chladni: hop rule: ballistic flight time, mean speed v_L at any frequency', () => {
  const tick = 1 / 60;
  // high frequency: flight shorter than a tick, a step every tick
  const vH = C.launchSpeed(3, 1000); assert(2 * vH / 9.80665 < tick); close(C.hopLength(3, 1000, 1, tick, 0.99), vH * tick, 1e-14);
  // low frequency: one long hop per flight, landing on a fraction tick/t_f of ticks; the average over u is still v_L × tick
  for (const [G, f] of [[3, 30], [8, 20], [5, 50]]) {
    const v = C.launchSpeed(G, f), tf = 2 * v / 9.80665; assert(tf > tick);
    close(C.hopLength(G, f, 1, tick, 0), v * tf, 1e-14); assert.equal(C.hopLength(G, f, 1, tick, 0.999), 0);
    let m = 0; const n = 200000; for (let i = 0; i < n; i++) m += C.hopLength(G, f, 1, tick, (i + 0.5) / n);
    close(m / n, v * tick, 2e-4);
  }
  assert.equal(C.hopLength(0.9, 50, 1, tick, 0), 0);
});

// ---- the wave driver ----
const st = C.MATERIALS.steel, h = 1e-3, Msq = C.plateMass('square', st, h), fsq = C.fScale('square', st, h);
const sqL = Float64Array.from(sq, (m) => m.lam2), sqP = Float64Array.from(sq, (m) => C.squarePhi(m, 0, 0)), wAsq = 1 / (4 * Math.PI);
const Gphys = (f, Q, Lc) => { const g = C.pointReceptance(sqL, sqP, f / fsq, Q, Lc, wAsq), n = Msq * Math.pow(2 * Math.PI * fsq, 2); return { re: g.re / n, im: g.im / n }; };


test('chladni: drift weight: none where the plate moves nearly as a whole, full near a node', () => {
  const N = 200000, inside = () => true, hop = () => 0.01;
  const run = (gamma, x0) => { const rng = C.mulberry32(3), x = new Float64Array(N).fill(x0), y = new Float64Array(N), al = new Uint8Array(N).fill(1);
    C.sandStep(x, y, al, gamma, inside, rng, hop, 0.5, 4); let m = 0; for (let i = 0; i < N; i++) m += x[i] - x0; return m / N / 0.01; };
  // Γ = 2 + 0.2u: relative slope 0.1 per half width, weight 0.1/4 → drift 0.5 × 0.025 = 0.0125 of a hop
  close(run((u) => 2 + 0.2 * u, 0), -0.5 * (0.1 / 4), 0, 0.006);   // statistical: σ ≈ 0.002
  // near a node, Γ = 30|u|: relative slope 1/|u| = 10 at u = 0.1 → full drift, half a hop toward the node
  close(run((u) => 30 * Math.abs(u), 0.1), -0.5, 0, 0.01);
});

test('chladni: high mode tail of the point receptance (Weyl mode density) against a sum over many more modes (circle, center)', () => {
  // the center of the circle couples only to n = 0 (and the bouncing mode); exact roots up to λ² = 20000
  const nu = 0.3, roots = C.circleRoots(0, nu, Math.sqrt(20000)), gq = C.gaussLegendre(400);
  const L = [0], P = [1];
  for (const lam of roots) {
    const e = C.circleEdge(lam, 0, nu), md = { n: 0, lam, c: -e.MJ / e.MI, iEdge: C.besselI(0, lam) * Math.exp(-lam) };
    let s2 = 0; for (let i = 0; i < gq.x.length; i++) { const r = 0.5 * (gq.x[i] + 1), R = C.circleRadial(md, r); s2 += 0.5 * gq.w[i] * R * R * r; }
    L.push(lam * lam); P.push(C.circleRadial(md, 0) / Math.sqrt(2 * s2));
  }
  const cut = (Lc) => { const k = L.filter((v) => v < Lc).length; return [Float64Array.from(L.slice(0, k)), Float64Array.from(P.slice(0, k))]; };
  const [L1, P1] = cut(1300), [L2, P2] = cut(20000);
  let worstNo = 0, worstTail = 0;
  for (const x of [3, 20, 60, 150, 300, 500, 800, 1000]) {
    const ref = C.pointReceptance(L2, P2, x, Infinity, 20000, 0.25).re;
    const a = C.pointReceptance(L1, P1, x, Infinity, 0, 0.25).re, b = C.pointReceptance(L1, P1, x, Infinity, 1300, 0.25).re;
    worstNo = Math.max(worstNo, Math.abs(a - ref) / Math.abs(ref)); worstTail = Math.max(worstTail, Math.abs(b - ref) / Math.abs(ref));
  }
  console.log(`   G(c,c) with modes below λ² = 1300 against λ² = 20000: ${(100 * worstNo).toFixed(1)} % off without the tail, ${(100 * worstTail).toFixed(2)} % with it`);
  assert(worstTail < 0.01 && worstTail < worstNo / 5);
});

test('chladni: plate pinned at the post: zeros of G(c,c) against an independent constrained Ritz solve (square, center)', () => {
  const pinned = C.driveResonances(sqL, sqP, C.LAM2_MAX.square, wAsq, 0, 260);
  // Ritz with the constraint w(0, 0) = 0, built in the even/even basis directly (Householder reflection removes the constraint)
  const P = 40, gq = C.gaussLegendre(P + 4), N1 = P + 1, rows = Array.from(gq.x, (x) => C.legendreRow(P, x)), nu = 0.3;
  const mat = () => Array.from({ length: N1 }, () => new Float64Array(N1)), A0 = mat(), A1 = mat(), A2 = mat(), Cm = mat();
  for (let q = 0; q < gq.x.length; q++) { const r = rows[q], w = gq.w[q]; for (let i = 0; i < N1; i++) for (let k = 0; k < N1; k++) { A0[i][k] += w * r.p[i] * r.p[k]; A1[i][k] += w * r.d[i] * r.d[k]; A2[i][k] += w * r.dd[i] * r.dd[k]; Cm[i][k] += w * r.dd[i] * r.p[k]; } }
  const idx = []; for (let i = 0; i <= P; i += 2) for (let j = 0; j <= P; j += 2) idx.push([i, j]);
  const n = idx.length, p0 = C.legendreRow(P, 0).p, b = idx.map(([i, j]) => p0[i] * p0[j]), bn = Math.hypot(...b);
  const v = b.map((x) => x / bn); v[0] += Math.sign(v[0]); const vn = v.reduce((a, x) => a + x * x, 0);
  const H = (x) => { const d = 2 * v.reduce((a, vi, i) => a + vi * x[i], 0) / vn; return x.map((xi, i) => xi - d * v[i]); };
  const K = idx.map(([i, j]) => idx.map(([k, l]) => (A2[i][k] * A0[j][l] + A0[i][k] * A2[j][l] + nu * (Cm[i][k] * Cm[l][j] + Cm[k][i] * Cm[j][l]) + 2 * (1 - nu) * A1[i][k] * A1[j][l]) / 4));
  const HK = K.map((row) => H(row)), HKH = Array.from({ length: n }, (_, a) => H(HK.map((r) => r[a])));
  const sub = HKH.slice(1).map((r) => r.slice(1));
  const ritz = Array.from(C.symEig(sub).values).map((mu) => 4 * Math.sqrt(Math.max(mu, 0))).sort((x, y) => x - y);
  // the constrained spectrum also holds the modes that already have a node at the center (unchanged); match each zero to the nearest
  console.log('   pinned λ²:', pinned.map((x) => x.toFixed(2)).join(' '));
  for (const z of pinned) {
    const r = ritz.reduce((a, x) => (Math.abs(x - z) < Math.abs(a - z) ? x : a));
    assert(r >= z * (1 - 1e-6) && (r - z) / z < 0.004, `zero ${z}: Ritz ${r}`);
  }
  close(pinned[0], 11.23, 2e-3); close(pinned[1], 46.02, 2e-3); close(pinned[2], 88.00, 2e-3);
  // m_d → 0 gives back the free modes that move at the center (poles of G)
  const free = C.driveResonances(sqL, sqP, C.LAM2_MAX.square, wAsq, 1e7, 130);
  [24.2702, 63.6861, 122.445].forEach((v, i) => close(free[i], v, 1e-3));
});

test('chladni: voice coil drive: identities, rigid translation at low frequency, stroke limit', () => {
  const md = 0.05, w = (f) => 2 * Math.PI * f;
  // F_p = x / G exactly, and the coil force is x (1/G − m_d ω²)
  for (const f of [40, 333, 1500]) {
    const G = Gphys(f, 50, C.LAM2_MAX.square), d = C.voiceCoilDrive(G.re, G.im, w(f), 5, md, 1);
    close(d.xr, d.Fr * G.re - d.Fi * G.im, 1e-10, 1e-18); close(d.xi, d.Fr * G.im + d.Fi * G.re, 1e-10, 1e-18);
    const g2 = G.re * G.re + G.im * G.im, Zr = G.re / g2 - md * w(f) ** 2, Zi = -G.im / g2;
    close(Math.hypot(d.xr * Zr - d.xi * Zi, d.xr * Zi + d.xi * Zr), 5, 1e-10); assert(!d.lim);
  }
  // with no tail the modal sum gives back the post motion: Σ q_k φ̂_k(c) = x
  { const f = 700, G = Gphys(f, 50, 0), d = C.voiceCoilDrive(G.re, G.im, w(f), 5, md, 1), q = C.modalAmps(sqL, sqP, f, fsq, 50, 1, Msq);
    let re = 0, im = 0; for (let k = 0; k < sqL.length; k++) { const a = q.re[k] * d.Fr - q.im[k] * d.Fi, b = q.re[k] * d.Fi + q.im[k] * d.Fr; re += a * sqP[k]; im += b * sqP[k]; }
    close(re, d.xr, 1e-9, 1e-15); close(im, d.xi, 1e-9, 1e-15); }
  // low frequency: the plate and the driver mass move together, x = −F_c / ((M + m_d) ω²), the same at the corner as at the post
  { const f = 2, G = Gphys(f, 50, C.LAM2_MAX.square), d = C.voiceCoilDrive(G.re, G.im, w(f), 5, md, 1);
    close(d.xr, -5 / ((Msq + md) * w(f) ** 2), 2e-3); assert(Math.abs(d.xi) < 1e-3 * Math.abs(d.xr));
    const q = C.modalAmps(sqL, sqP, f, fsq, 50, 1, Msq); let corner = 0;
    for (let k = 0; k < sq.length; k++) corner += (q.re[k] * d.Fr - q.im[k] * d.Fi) * C.squarePhi(sq[k], 1, 1);
    close(corner, d.xr, 0.01); }
  // stroke limit: the post never moves more than x_max, and the coil force is turned down to match
  for (const f of [3, 10, 25]) {
    const G = Gphys(f, 50, C.LAM2_MAX.square), d = C.voiceCoilDrive(G.re, G.im, w(f), 17, md, 0.0035);
    assert(Math.hypot(d.xr, d.xi) <= 0.0035 * (1 + 1e-12) && d.coil <= 17);
    if (d.lim) close(Math.hypot(d.xr, d.xi), 0.0035, 1e-12);
  }
  const G3 = Gphys(3, 50, C.LAM2_MAX.square); assert(C.voiceCoilDrive(G3.re, G3.im, w(3), 17, md, 0.0035).lim);
});

test('chladni: Chladni’s law fit recovers C and p from exact power law data, and gives p near 2 for the plate', () => {
  const pts = []; for (let n = 0; n < 6; n++) for (let m = 0; m < 4; m++) pts.push({ n, m, f: 40 * Math.pow(n + 2 * m, 1.9) });
  const fit = C.chladniFit(pts); close(fit.C, 40, 1e-10); close(fit.p, 1.9, 1e-10);
  const fs = C.fScale('circle', C.MATERIALS.steel, 1e-3);
  const real = C.chladniFit(circ30.filter((x) => !x.rigid && x.lam2 * fs < 8000).map((x) => ({ n: x.n, m: x.m, f: x.lam2 * fs })));
  console.log(`   steel 1 mm circle below 8 kHz: f ≈ ${real.C.toFixed(1)} Hz × (n + 2m)^${real.p.toFixed(3)} over ${real.count} modes`);
  assert(real.p > 1.8 && real.p < 2.05);
});

console.log(`${count} chladni tests passed`);
