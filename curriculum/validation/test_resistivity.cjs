'use strict';
// Resistivity of a Wire: R = ρL/A, ρ(T), the fits for ρ and α, the CSV.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('resistivity', 'RS_VERSION,MATS,GAUGES,rhoAt,area,resistance,sig,fitLine,readingsCSV,QE,ME,FREE,nFromAlloy,driftSpeed,currentDensity,fermiSpeed,collisionTime,transitTime,electronRate,netCrossings,BOX,slabCount,DRIFT_SLOW,RANDOM_SLOW,bgJ5,bgShape,COLD,T_MIN,T_ROOM,rhoCold,MAG,MAG_LEN,DOT_E,magDots,dotRate,WIRE_A,WIRE_B,potential');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
group('R = ρL/A: proportional to L, inverse to d²', () => {
  const M = c.MATS.nichrome, R1 = c.resistance(M, 0.5, 0.405, 20);
  near(R1, 1.1e-6 * 0.5 / (Math.PI * 0.405e-3 ** 2 / 4), 1e-12);
  near(c.resistance(M, 1, 0.405, 20), 2 * R1, 1e-12); near(c.resistance(M, 0.5, 0.81, 20), R1 / 4, 1e-12);
});
group('ρ(T) = ρ20[1 + α(T − 20)]; copper rises about 0.39% per kelvin', () => {
  const M = c.MATS.copper; near(c.rhoAt(M, 120), 1.68e-8 * (1 + 0.393), 1e-12); near(c.rhoAt(c.MATS.constantan, 200) / c.rhoAt(c.MATS.constantan, 20), 1.0018, 1e-9);
});
group('fits recover ρ from R against L and α from R against T, with readings rounded like the meters', () => {
  const M = c.MATS.mystery, d = 0.255, A = c.area(d), I = 0.2;
  const xs = [0.2, 0.4, 0.6, 0.8, 1], ys = xs.map((L) => +c.sig(I * c.resistance(M, L, d, 20), 4) / I);
  near(c.fitLine(xs, ys).b * A, M.rho, 1e-3);
  const ts = [0, 50, 100, 150, 200], rs = ts.map((T) => +c.sig(I * c.resistance(M, 1, d, T), 4) / I), F = c.fitLine(ts, rs);
  near(F.b / (F.a + 20 * F.b), M.alpha, 1e-2);
});
group('CSV: header and R from the row', () => {
  const L = c.readingsCSV([{ mat: 'Nichrome', d: '0.405', T: '20', L: '0.500', I: '0.2', V: '1.708' }], { version: c.RS_VERSION, material: 'Nichrome' }).trim().split('\n');
  const h = L.indexOf('row,material,d_mm,T_C,L_m,I_A,V_V,R_ohm'); assert(h > 0); assert.equal(L[h + 1], '1,Nichrome,0.405,20,0.500,0.2,1.708,8.54');
});
group('drift speed: OpenStax Example 9.3, 12-gauge copper (2.053 mm) at 20.0 A', () => {
  const A = Math.PI * (2.053e-3) ** 2 / 4;
  near(A, 3.310e-6, 1e-3);
  /* the textbook's n = 8.34e28 /m³ (from its density 8.80 g/cm³) gives 4.54e-4 m/s with A rounded to 3.30e-6 m² */
  near(c.driftSpeed(20, 8.34e28, 3.30e-6), 4.54e-4, 2e-3);
  near(c.driftSpeed(20, 8.34e28, A), 20 / (8.34e28 * 1.602176634e-19 * A), 1e-12);
  /* with the demo's cited copper n = 8.47e28 /m³ */
  near(c.driftSpeed(20, c.FREE.copper.n, A), 4.452e-4, 1e-3);
  /* the textbook's n from its own numbers: 1 e per atom, 63.54 g/mol, 8.80 g/cm³ */
  near(8.80e3 / 63.54e-3 * 6.02214076e23, 8.34e28, 1e-3);
  /* Check Your Understanding 9.3: 14 gauge (1.628 mm) at 20 A is faster by (2.053/1.628)² */
  near(c.driftSpeed(20, 8.47e28, c.area(1.628)) / c.driftSpeed(20, 8.47e28, c.area(2.053)), (2.053 / 1.628) ** 2, 1e-12);
});
group('drift speed and J in the demo: units, I = nqAv_d, J = nqv_d, scaling with I and A', () => {
  const n = c.FREE.copper.n, A = c.area(0.405);
  near(A, 1.2882e-7, 1e-4);   /* mm → m: 0.405 mm → 1.288e-7 m² */
  const vd = c.driftSpeed(0.2, n, A); near(vd, 1.144e-4, 1e-3);
  near(n * c.QE * A * vd, 0.2, 1e-12); near(c.currentDensity(0.2, A), n * c.QE * vd, 1e-12); near(c.currentDensity(0.2, A), 1.5525e6, 1e-3);
  near(c.driftSpeed(0.4, n, A), 2 * vd, 1e-12); near(c.driftSpeed(0.2, n, c.area(0.81)), vd / 4, 1e-12);
  near(c.driftSpeed(0.2, 2 * n, A), vd / 2, 1e-12); near(c.driftSpeed(0.2, n, A, 2 * c.QE), vd / 2, 1e-12);
  near(c.electronRate(1), 6.2415e18, 1e-4);
  /* the full range of the controls stays slow: under about 4 mm/s */
  let hi = 0, lo = Infinity; for (const k in c.FREE) for (const [, dm] of c.GAUGES) for (const I of [0.05, 1]) { const v = c.driftSpeed(I, c.FREE[k].n, c.area(dm)); hi = Math.max(hi, v); lo = Math.min(lo, v); }
  assert(hi < 4e-3 && lo > 1e-5, `range ${lo} to ${hi}`);
});
group('transit time L/v_d is minutes to hours; signals are not carried by drift', () => {
  const vd = c.driftSpeed(0.2, c.FREE.copper.n, c.area(0.405)); near(c.transitTime(0.5, vd), 0.5 / vd, 1e-12); near(c.transitTime(0.5, vd) / 60, 72.84, 1e-3);
  near(c.transitTime(1, vd), 2 * c.transitTime(0.5, vd), 1e-12); assert(c.transitTime(0.05, c.driftSpeed(1, c.FREE.nichrome.n, c.area(0.16))) > 10);
});
group('free electron densities: copper cited; alloys from density, composition and one electron per atom', () => {
  near(c.FREE.copper.n, 8.47e28, 1e-12);
  near(c.nFromAlloy(8.96, { Cu: 1 }, 1), 8.49e28, 2e-3);   /* pure copper from 8.96 g/cm³ agrees with the cited value to 0.3% */
  near(c.FREE.nichrome.n, 8.40e6 / (1 / (0.8 / 58.693 + 0.2 / 51.996)) * 6.02214076e23, 1e-12); near(c.FREE.nichrome.n, 8.84e28, 1e-3);
  near(c.FREE.constantan.n, 8.75e28, 1e-3); near(c.nFromAlloy(8.4, { Ni: 0.8, Cr: 0.2 }, 2), 2 * c.FREE.nichrome.n, 1e-12);
});
group('Fermi speed and Drude collision time: copper 1.57e6 m/s, τ 2.5e-14 s, mean free path 39 nm', () => {
  const n = c.FREE.copper.n, vF = c.fermiSpeed(n), tau = c.collisionTime(n, c.MATS.copper.rho);
  near(vF, 1.57e6, 3e-3); near(tau, 2.49e-14, 3e-3); near(vF * tau, 3.92e-8, 5e-3);
  near(c.fermiSpeed(8 * n), 2 * vF, 1e-12);   /* v_F ∝ n^(1/3) */
  near(n * c.QE ** 2 * tau / c.ME, 1 / c.MATS.copper.rho, 1e-12);   /* σ = ne²τ/m */
  assert(c.collisionTime(c.FREE.nichrome.n, c.MATS.nichrome.rho) < tau / 50);
});
group('plane counter: net crossings equal n v_d t × (area of the region), and I/e when scaled to the wire', () => {
  const N = c.slabCount(c.FREE.copper.n); assert.equal(N, Math.round(8.47e28 * 4e-9 * 2e-9 * 0.3e-9)); assert.equal(N, 203);
  const w = c.BOX.w * 1e9, us = Array.from({ length: N }, (_, i) => (i + 0.5) * w / N);
  assert.equal(c.netCrossings(us, 0, -w, w / 2, w), N);   /* a full box width: every electron crosses once */
  assert.equal(c.netCrossings(us, 0, -3 * w, w / 2, w), 3 * N); assert.equal(c.netCrossings(us, 0, w, w / 2, w), -N); assert.equal(c.netCrossings(us, -1.3, -1.3, w / 2, w), 0);
  let total = 0, s = 0; for (let k = 0; k < 1000; k++) { total += c.netCrossings(us, s, s - 0.0123, w / 2, w); s -= 0.0123; }
  assert(Math.abs(total - N * 12.3 / w) <= 1, `${total}`);
  /* scaled: (count / t) × A/(h × depth) = n v_d A = I/e */
  const I = 0.2, A = c.area(0.405), vd = c.driftSpeed(I, c.FREE.copper.n, A), t = 1e-5, count = c.FREE.copper.n * vd * t * c.BOX.h * c.BOX.depth;
  near(count / t * A / (c.BOX.h * c.BOX.depth), c.electronRate(I), 1e-12);
  assert.equal(c.DRIFT_SLOW, 1e6); assert.equal(c.RANDOM_SLOW, 1e15);
});
group('cold stage (9.6): Bloch–Grüneisen, Matthiessen, critical temperatures', () => {
  near(c.bgJ5(1e4), 120 * 1.0369277551433699, 1e-7, 'J5(∞) = 5! ζ(5)');
  near(c.bgJ5(0.01), 0.01 ** 4 / 4, 1e-3, 'small z: ∫x³ = z⁴/4');
  near(c.bgShape(1000, 100) / c.bgShape(500, 100), 2, 2e-3, 'high T: linear in T');
  near(c.bgShape(2, 300) / c.bgShape(1, 300), 32, 1e-4, 'low T: T⁵');
  for (const k of ['copper', 'aluminum', 'tin', 'lead']) { near(c.rhoCold(k, 293, 100), c.COLD[k].rho293, 1e-12, `${k} at 293 K`); near(c.rhoCold(k, k === 'copper' ? 1 : c.COLD[k].tc + 1e-6, 100), c.COLD[k].rho293 / 100, 0.05, `${k} residual`); }
  near(c.rhoCold('copper', 77, 1e9) / 1.68e-8, 0.111, 0.03, 'copper at 77 K: about a ninth of room temperature');
  assert.equal(c.rhoCold('lead', 7.18, 100), 0); assert(c.rhoCold('lead', 7.20, 100) > 0); assert.equal(c.rhoCold('ybco', 91.9, 1), 0); near(c.rhoCold('ybco', 300, 1), 2.5e-6, 1e-12);
  assert(c.rhoCold('copper', c.T_MIN, 30) > 0, 'copper never superconducts');
  assert.equal(c.COLD.lead.tc, 7.19); assert.equal(c.COLD.tin.tc, 3.72); assert.equal(c.COLD.aluminum.tc, 1.20);
});
group('wire view: dots in the magnified piece, their rate through the ring, the potential along the wire', () => {
  /* dots = n A × 2.5 mm / 1e17: copper 0.644 mm about 690, nichrome 0.160 mm about 44; four times the area, four times the dots */
  assert.equal(c.magDots(c.FREE.copper.n, 0.644), Math.round(8.47e28 * c.area(0.644) * 2.5e-3 / 1e17)); assert.equal(c.magDots(c.FREE.copper.n, 0.644), 690);
  assert.equal(c.magDots(c.FREE.nichrome.n, 0.16), 44);
  near(c.magDots(c.FREE.copper.n, 0.644) / c.magDots(c.FREE.copper.n, 0.322), 4, 5e-3);
  /* whole dots: the counted rate, magDots × v_d / MAG_LEN, is within 1.2% of I/(e × 1e17) for every metal and gauge */
  for (const k in c.FREE) for (const [, dm] of c.GAUGES) near(c.magDots(c.FREE[k].n, dm) * c.driftSpeed(0.2, c.FREE[k].n, c.area(dm)) / c.MAG_LEN, c.dotRate(0.2), 0.012, `whole dots ${k} ${dm}`);
  /* the rate through the ring is (dots per volume) × A × v_d, the same for every gauge and metal: I/(e × 1e17) */
  for (const k in c.FREE) for (const [, dm] of c.GAUGES) { const A = c.area(dm), dens = c.FREE[k].n / c.DOT_E; near(dens * A * c.driftSpeed(0.2, c.FREE[k].n, A), c.dotRate(0.2), 1e-12, `${k} ${dm}`); }
  near(c.dotRate(0.2), 12.48, 1e-3);
  /* the counter: carrying evenly spaced dots one full piece length moves every dot across the ring once */
  const us = Array.from({ length: 50 }, (_, i) => (i + 0.5) * c.MAG_LEN / 50); assert.equal(c.netCrossings(us, 0, -c.MAG_LEN, c.MAG_LEN / 2, c.MAG_LEN), 50);
  /* in real time the magnified dots move at MAG v_d: nichrome 0.405 mm at 0.2 A, about 2.2 cm/s on the magnified scale */
  near(c.MAG * c.driftSpeed(0.2, c.FREE.nichrome.n, c.area(0.405)), 0.02194, 2e-3);
  /* V(x) falls evenly to zero at the far end, and the drop between the clips is I R(L) */
  const M = c.MATS.nichrome; assert.equal(c.potential(M, c.WIRE_B, 0.405, 20, 0.2), 0);
  near(c.potential(M, 0, 0.405, 20, 0.2) - c.potential(M, 0.5, 0.405, 20, 0.2), 0.2 * c.resistance(M, 0.5, 0.405, 20), 1e-12);
  near((c.potential(M, 0, 0.405, 20, 0.2) - c.potential(M, 0.3, 0.405, 20, 0.2)) / 0.3, 0.2 * M.rho / c.area(0.405), 1e-12, 'slope E = ρI/A');
});
group('current in a sheet: Kirchhoff on a grid of squares, R = R_s L/W for bars, current conserved, linear in V, symmetric', () => {
  const S = core('resistivity', 'sheetSolve,sheetFace');
  const nx = 40, ny = 24, N = nx * ny, I = (x, y) => y * nx + x;
  let k = new Float64Array(N).fill(1), fix = new Int8Array(N);
  for (let y = 0; y < ny; y++) { fix[I(0, y)] = 1; fix[I(nx - 1, y)] = 2; }
  let r = S.sheetSolve(nx, ny, k, fix, 10);
  near(r.G, ny / (nx - 2), 1e-9, 'two full width bars: L = 38 squares long, 24 wide');
  for (let x = 1; x < nx - 1; x++) near(r.V[I(x, 5)], 10 * (1 - (x - 0.5) / (nx - 2)), 1e-8, 'V falls evenly between bars');
  /* two round electrodes: current out of + equals current into ground, and doubling V doubles every V and the current */
  fix = new Int8Array(N); for (let y = 0; y < ny; y++) for (let x = 0; x < nx; x++) { const a = (x - 10) ** 2 + (y - 12) ** 2, b = (x - 29) ** 2 + (y - 12) ** 2; if (a <= 4) fix[I(x, y)] = 1; if (b <= 4) fix[I(x, y)] = 2; }
  r = S.sheetSolve(nx, ny, k, fix, 10); near(r.G, r.Gin, 1e-8, 'current conserved');
  const r2 = S.sheetSolve(nx, ny, k, fix, 20); near(r2.G, r.G, 1e-9, 'G does not depend on V'); near(r2.V[I(15, 7)], 2 * r.V[I(15, 7)], 1e-7);
  near(r.V[I(19, 3)] + r.V[I(20, 3)], 10, 1e-7, 'mirror symmetry: V and 10 − V');
  /* every free cell obeys Kirchhoff's current rule */
  let worst = 0; for (let y = 0; y < ny; y++) for (let x = 0; x < nx; x++) { const i = I(x, y); if (fix[i]) continue; let s = 0;
    for (const [X, Y] of [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]]) { if (X < 0 || Y < 0 || X >= nx || Y >= ny) continue; const j = I(X, Y); s += S.sheetFace(k, fix, i, j) * (r.V[j] - r.V[i]); } worst = Math.max(worst, Math.abs(s)); }
  assert(worst < 1e-7, `Kirchhoff residual ${worst}`);
  /* a cut right across leaves no path; a cut piece joined to no electrode has no potential */
  const k2 = Float64Array.from(k); for (let y = 0; y < ny; y++) k2[I(20, y)] = 0;
  r = S.sheetSolve(nx, ny, k2, fix, 10); near(r.G, 0, 1e-12, 'no path'); assert(isNaN(r.V[I(20, 3)]));
  /* silver paint lowers R; series of two sheets of different conductance */
  const k3 = new Float64Array(N).fill(1); const f2 = new Int8Array(N); for (let y = 0; y < ny; y++) { f2[I(0, y)] = 1; f2[I(nx - 1, y)] = 2; for (let x = 20; x < nx - 1; x++) k3[I(x, y)] = 3; }
  r = S.sheetSolve(nx, ny, k3, f2, 10);
  /* 19 squares of 1, then 19 of 3 per row: half cells at the bars and the series face 2·1·3/4 = 1.5 between them */
  const Rrow = 0.5 + 18 + 1 / 1.5 + 18 / 3 + 0.5 / 3; near(r.G, ny / Rrow, 1e-9, 'two sheets in series');
});
group('Current in a sheet, Strip L by W: R = R_s L/W exactly, V falls evenly along the strip, the CSV', () => {
  const S = core('resistivity', 'sheetSolve,sheetStrip,sheetCSV,RS_VERSION');
  for (const [L, W] of [[12, 8], [22, 16], [4, 2], [6, 12], [20, 3]]) {
    const st = S.sheetStrip(96, 64, L, W), r = S.sheetSolve(96, 64, st.c, st.fix, 10);
    near(1 / r.G, L / W, 1e-8, `strip ${L} by ${W}`); near(r.Gin, r.G, 1e-8, 'current conserved');
    /* the cell 1 cm past the + electrode's edge (center 1.125 cm in) on the middle row */
    const xa = 48 - 2 * L, V = r.V[32 * 96 + xa + 4]; near(V, 10 * (1 - 1.125 / L), 1e-8, 'linear potential');
    assert.equal(st.bars[0].y1 - st.bars[0].y0 + 1, 4 * W); assert.equal(st.bars[1].x0 - st.bars[0].x1 - 1, 4 * L);
  }
  const csv = S.sheetCSV([{ layout: 'strip', V0: 10, Rs: 1000, L: 12, W: 8, x: '12.00', y: '8.00', Vp: '5.000', E: '83.33', I: '0.006667' }], S.RS_VERSION).trim().split('\n');
  const h = csv.indexOf('row,layout,V_battery_V,Rs_ohm_per_sq,L_cm,W_cm,x_cm,y_cm,V_probe_V,E_V_per_m,I_A'); assert(h > 0); assert.equal(csv[h + 1], '1,strip,10,1000,12,8,12.00,8.00,5.000,83.33,0.006667');
});
console.log(`${n} resistivity test groups passed`);
