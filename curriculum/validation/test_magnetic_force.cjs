'use strict';
// Node test of the magnetic-force CORE block: every check is against an analytic value or a conservation law.
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const M = core('magnetic-force', 'QE,ME,MP,U,PARTICLES,ISOTOPES,ionMass,radius,period,frequency,specRadius,specLanding,advance,fieldsFor,gyroCenter,makeTraj,freeModel,' +
  'selectorRun,selectorBand,selectorSpeed,driftVelocity,specRun,cycRun,cycModel,cyclotronFrequency,cyclotronGain,cyclotronKmax,niceStep,roundSig,rulerResolution,rulerReading,measuredPeriod,fitOrigin,fitLine,csvText');
let count = 0;
function test(name, f) { f(); count++; console.log('PASS', name); }
const rel = (a, b) => Math.abs(a - b) / Math.abs(b);
const near = (a, b, tol, what) => assert(rel(a, b) <= tol, `${what || ''} expected ${b}, got ${a}, relative error ${rel(a, b)}`);
const p = M.PARTICLES.p, e = M.PARTICLES.e;

test('r = mv/(|q|B) for the Circular motion preset, by hand and by formula', () => {
  // proton at 1.0e5 m/s in 0.10 T: r = 1.67262192595e-27 × 1e5 / (1.602176634e-19 × 0.1) = 1.04397 cm
  near(M.radius(p.m, 1e5, p.q, 0.1), 1.67262192595e-27 * 1e5 / (1.602176634e-19 * 0.1), 1e-15);
  near(M.radius(p.m, 1e5, p.q, 0.1), 0.010439684929, 1e-9, 'proton radius (Python by hand)');
  // sign of q and B does not change the size; r doubles with v and halves with B
  assert.equal(M.radius(e.m, 3e6, e.q, -0.01), M.radius(e.m, 3e6, -e.q, 0.01));
  near(M.radius(p.m, 2e5, p.q, 0.1), 2 * M.radius(p.m, 1e5, p.q, 0.1), 1e-15);
  near(M.radius(p.m, 1e5, p.q, 0.2), 0.5 * M.radius(p.m, 1e5, p.q, 0.1), 1e-15);
});

test('T = 2πm/(|q|B) does not depend on v: the integrated path closes after one period at every speed', () => {
  const T = M.period(p.m, p.q, 0.1);
  near(T, 6.5594475e-7, 1e-8, 'proton period (Python by hand)');            // 2π × 1.67262e-27 / 1.60218e-20
  near(M.frequency(p.m, p.q, 0.1), 1 / T, 1e-15);
  const mdl = M.freeModel({ Ex: 0, Ey: 0, Bz: -0.1 }, null, 0.05);
  for (const v of [1e3, 1e5, 3e6]) {
    const tr = M.makeTraj(mdl, p, { x: 0, y: 0, vx: v, vy: 0 }), r = M.radius(p.m, v, p.q, 0.1);
    const s = tr.at(T);
    assert(Math.hypot(s.x, s.y) < 1e-12 * r, `closes at v = ${v}: miss ${Math.hypot(s.x, s.y) / r} r`);
    const h = tr.at(T / 2);                                    // half a turn later it is a diameter away
    near(Math.hypot(h.x, h.y), 2 * r, 1e-12, `diameter at v = ${v}`);
  }
  // an electron goes round 1836.15 times for each proton turn (Electron vs proton)
  near(M.period(p.m, p.q, 1e-3) / M.period(e.m, e.q, 1e-3), 1836.152673426, 1e-9);
});

test('integrator conserves |v| and K in pure B and stays on the analytic circle', () => {
  const B = -0.1, v = 1e5, mdl = M.freeModel({ Ex: 0, Ey: 0, Bz: B }, null, 0.05), tr = M.makeTraj(mdl, p, { x: 0, y: 0, vx: v, vy: 0 });
  const om = p.q * B / p.m, r = M.radius(p.m, v, p.q, B), T = M.period(p.m, p.q, B);
  // analytic: with w = vx + i vy and ω = qBz/m, w(t) = w₀e^(−iωt) and z(t) = z₀ + w₀(1 − e^(−iωt))/(iω).
  // B into the page (Bz < 0) gives ω < 0: a proton launched along +x turns counterclockwise about (0, +r).
  const g = M.gyroCenter({ x: 0, y: 0, vx: v, vy: 0 }, M.fieldsFor(p, { Ex: 0, Ey: 0, Bz: B }));
  near(g.r, r, 1e-14, 'gyroradius');
  assert(Math.abs(g.x) < 1e-18 && Math.abs(g.y - r) < 1e-15 * r * 10, `center ${g.x}, ${g.y}`);
  const K0 = 0.5 * p.m * v * v;
  let worst = 0, worstPos = 0;
  for (let k = 0; k <= 4000; k++) {
    const t = T * 1000 * k / 4000 + 0.123 * T * (k % 7) / 7, s = tr.at(t);
    worst = Math.max(worst, Math.abs(0.5 * p.m * (s.vx * s.vx + s.vy * s.vy) / K0 - 1));
    const th = om * t, ax = v * Math.sin(th) / om, ay = v * (Math.cos(th) - 1) / om;     // v(1 − e^(−iθ))/(iω), real and imaginary parts
    worstPos = Math.max(worstPos, Math.hypot(s.x - ax, s.y - ay) / r);
  }
  assert(worst < 1e-12, `kinetic energy drift ${worst}`);
  assert(worstPos < 1e-9, `distance from the analytic circle ${worstPos} r`);
  console.log('  1000 periods: max |ΔK/K| =', worst.toExponential(1), ', max position error =', worstPos.toExponential(1), 'r');
});

test('E × B drift: velocity E × B/B², cycloid from rest, independent of charge and mass', () => {
  // the E × B drift preset: E = 1.0e4 V/m pointing down the page (−y), B = 0.10 T into the page (−z)
  const F = { Ex: 0, Ey: -1e4, Bz: -0.1 }, vd = M.driftVelocity(F.Ex, F.Ey, F.Bz);
  near(vd.x, 1e5, 1e-15, 'drift x'); assert.equal(Math.abs(vd.y), 0);
  // E × B by components: (Ex, Ey, 0) × (0, 0, Bz) / Bz² = (Ey/Bz, −Ex/Bz)
  const v2 = M.driftVelocity(3e3, 4e3, 0.2); near(v2.x, 2e4, 1e-15); near(v2.y, -1.5e4, 1e-15);
  const mdl = M.freeModel(F, null, 0.05);
  for (const part of [p, e, M.PARTICLES.a]) {
    const tr = M.makeTraj(mdl, part, { x: 0, y: 0, vx: 0, vy: 0 }), T = M.period(part.m, part.q, F.Bz), om = part.q * F.Bz / part.m;
    for (const n of [1, 5, 40]) {
      const s = tr.at(n * T);
      near(s.x, 1e5 * n * T, 1e-10, `cusp ${n}`); assert(Math.abs(s.y) < 1e-10 * 1e5 * T && Math.hypot(s.vx, s.vy) < 1e-8 * 1e5, 'at rest on the axis at each cusp');
    }
    // cycloid: x = (E/B)(t − sin ωt/ω), y = −(E/B)(1 − cos ωt)/ω for this sign convention, checked at a quarter period
    const t = T / 4, s = tr.at(t), w = om;
    near(s.x, 1e5 * (t - Math.sin(w * t) / w), 1e-10, 'cycloid x');
    near(Math.abs(s.y), Math.abs(1e5 * (1 - Math.cos(w * t)) / w), 1e-10, 'cycloid |y|');
  }
});

test('velocity selector passes v = E/B straight through and blocks speeds 10% off', () => {
  const c = { E: 400 / 0.02, B: 0.1, L: 0.06, h: 0.01, xs: 0.07, xd: 0.095, w: 0.002, x0: -0.025 };
  near(M.selectorSpeed(c.E, c.B), 2e5, 1e-15, 'E/B');
  const run = M.selectorRun(c, p, 2e5);
  assert.equal(run.endTag, 'pass'); assert(Math.abs(run.endS.y) < 1e-12, `straight: y = ${run.endS.y}`); near(Math.hypot(run.endS.vx, run.endS.vy), 2e5, 1e-12);
  for (const v of [1.8e5, 2.2e5]) assert.notEqual(M.selectorRun(c, p, v).endTag, 'pass', `v = ${v}`);
  // an electron and an alpha particle at E/B also go straight: the condition has no q or m
  for (const part of [e, M.PARTICLES.a]) assert.equal(M.selectorRun(c, part, 2e5).endTag, 'pass');
  const band = M.selectorBand(c, p);
  assert(band[0] < 2e5 && band[1] > 2e5 && (band[1] - band[0]) / 2e5 < 0.1, `band ${band}`);
  console.log('  band of speeds through the 2 mm slit:', band.map((v) => v.toExponential(4)).join(' to '), 'm/s');
});

test('mass spectrometer separates the neon isotopes at 2r = (2/B)√(2mV/q)', () => {
  const c = { V: 1000, B: 0.2, d: 0.02, L: 0.05 }, land = {};
  for (const iso of M.ISOTOPES.ne) {
    const m = M.ionMass(iso), tr = M.specRun(c, { q: M.QE, m }, 0), x = tr.endS.x;
    near(m, iso.mu * M.U - M.ME, 1e-15);
    near(x, M.specLanding(m, c.V, M.QE, c.B), 1e-9, iso.name);
    near(x, 2 * Math.sqrt(2 * m * c.V / M.QE) / c.B, 1e-9, iso.name + ' by hand');
    land[iso.A] = x;
  }
  near(land[20], 0.2035688, 1e-6, '20Ne+ lands 20.36 cm out'); near(land[22], 0.2135036, 1e-6, '22Ne+ lands 21.35 cm out');
  near(land[22] - land[20], 0.0099348, 1e-4, 'separation');
  // at equal V the landing distance goes as √m
  near(land[22] / land[20], Math.sqrt(M.ionMass(M.ISOTOPES.ne[2]) / M.ionMass(M.ISOTOPES.ne[0])), 1e-9);
  console.log('  landing:', Object.entries(land).map(([A, x]) => `${A}Ne+ ${(x * 100).toFixed(3)} cm`).join(', '));
});

test('cyclotron: f_c = qB/2πm, qV per gap crossing in step, exit K within one crossing of (qBR)²/2m', () => {
  near(M.cyclotronFrequency(p.q, 1, p.m), 15.2451865e6, 1e-8, 'f_c for a proton in 1 T (Python by hand)');
  near(M.cyclotronFrequency(p.q, 1, p.m), 1 / M.period(p.m, p.q, 1), 1e-15);
  const cfg = { B: 1, V: 1e5, g: 0.01, R: 0.3, fc: M.cyclotronFrequency(p.q, 1, p.m) }; cfg.fRF = cfg.fc;
  const tr = M.cycRun(cfg, p), log = tr.log.filter((q) => !q.out), qV = M.cyclotronGain(p.q, cfg.V), Kmax = M.cyclotronKmax(p.q, cfg.B, cfg.R, p.m);
  near(qV / M.QE, 1e5, 1e-15);
  let worst = 0; for (let i = 1; i < log.length; i++) worst = Math.max(worst, Math.abs((log[i].K - log[i - 1].K) / qV - 1));
  assert(worst < 1e-6, `gain per crossing off qV by ${worst}`);
  // crossings come every half period of the gap voltage
  const dts = []; for (let i = 2; i < log.length; i++) dts.push(log[i].t - log[i - 2].t);
  const mean = dts.reduce((s, v) => s + v, 0) / dts.length;
  near(mean, 1 / cfg.fc, 2e-3, 'time per turn');
  const out = tr.log[tr.log.length - 1];
  // energy comes in steps of qV and the last orbit's center sits slightly off the dee center, so the exit energy
  // lies within one crossing of (qBR)²/2m, on either side
  assert(out.out && Math.abs(out.K - Kmax) < qV, `exit K ${out.K / M.QE} eV, K_max ${Kmax / M.QE} eV`);
  near(Kmax / M.QE / 1e6, 4.310475, 1e-6, 'K_max in MeV (Python by hand)');
  console.log('  turns:', (log.length / 2).toFixed(1), ', max |gain/qV − 1| =', worst.toExponential(1), ', exit K =', (out.K / M.QE / 1e6).toFixed(4), 'MeV of K_max', (Kmax / M.QE / 1e6).toFixed(4));
});

test('ruler, timer and rounding helpers', () => {
  assert.equal(M.niceStep(1e-4), 1e-4); assert.equal(M.niceStep(2.4e-6), 2e-6); assert.equal(M.niceStep(4.1), 5);
  near(M.rulerResolution(10000), 1e-4, 1e-12); near(M.rulerResolution(3000), 5e-4, 1e-12);
  assert.equal(M.rulerReading(0.0208764, 1e-4), 0.0209); assert.equal(M.rulerReading(0.0208764, 5e-4), 0.021); assert.equal(M.rulerReading(3.37e-2, 2e-5), 0.0337);
  assert.equal(M.measuredPeriod(3.28e-6, 5), 3.28e-6 / 5);
  assert.equal(M.roundSig(6.559417e-7, 3), 6.56e-7); assert.equal(M.roundSig(0, 3), 0);
});

test('least squares fits recover exact lines and match the hand formulas', () => {
  const xs = [1, 2, 3, 4, 5];
  const f = M.fitOrigin(xs, xs.map((x) => 3 * x)); near(f.k, 3, 1e-15); assert(f.se < 1e-15);
  // y = kx with residuals: k = Σxy/Σx² and se = √(Σr²/(n−1)/Σx²)
  const ys = [2.1, 3.9, 6.2, 7.8, 10.1], sxx = 55, k = (2.1 + 7.8 + 18.6 + 31.2 + 50.5) / sxx, g = M.fitOrigin(xs, ys);
  near(g.k, k, 1e-14); near(g.se, Math.sqrt(ys.reduce((s, y, i) => s + (y - k * xs[i]) ** 2, 0) / 4 / sxx), 1e-12);
  const h = M.fitLine(xs, xs.map((x) => 6.56e-7 + 0 * x)); near(h.a, 6.56e-7, 1e-12); assert(Math.abs(h.b) < 1e-20);
  const l = M.fitLine([1, 2, 3, 4], [3.1, 4.9, 7.2, 8.8]);       // b = 1.94, a = 1.15 by hand
  near(l.b, 1.94, 1e-12); near(l.a, 1.15, 1e-12); assert(l.sb > 0 && l.sa > 0);
  assert.equal(M.fitOrigin([], []), null); assert.equal(M.fitLine([1], [1]), null);
});

test('CSV text: comment lines, one header, quoted cells', () => {
  const t = M.csvText(['Charges in Magnetic Fields (simulated data)', 'demo version,magnetic-force@x'], ['row', 'particle', 'r_measured_m'], [[1, 'Proton', '0.0104'], [2, 'Custom, q = 2e', '']]);
  const L = t.trim().split('\n');
  assert.equal(L[0], '# Charges in Magnetic Fields (simulated data)'); assert.equal(L[1], '# demo version,magnetic-force@x');
  assert.equal(L[2], 'row,particle,r_measured_m'); assert.equal(L[3], '1,Proton,0.0104'); assert.equal(L[4], '2,"Custom, q = 2e",');
});

test('Hall effect strip: V_H = IB/(nqt), sign from the carriers, balance of forces', () => {
  const H = core('magnetic-force', 'QE,HALL,hallVoltage,hallDrift,hallCoefficient');
  const e = H.QE, w = H.HALL.w;
  // copper: one conduction electron per atom from density and molar mass
  const nCu = 8.96e3 / 63.546e-3 * 6.02214076e23; assert(Math.abs(nCu / H.HALL.cu.n - 1) < 2e-3);
  // holes, B into the page (Bz < 0): positive charge piles on the top edge, V_top − V_bottom > 0
  const Vp = H.hallVoltage(0.02, -0.3, 1e21, e, 1e-3); assert(Vp > 0); near(Vp, 0.02 * 0.3 / (1e21 * e * 1e-3), 1e-12);
  // electrons in the same setup: opposite sign, same size
  near(H.hallVoltage(0.02, -0.3, 1e21, -e, 1e-3), -Vp, 1e-12);
  // reversing B reverses V_H; linear in I and B, inverse in t
  near(H.hallVoltage(0.02, 0.3, 1e21, e, 1e-3), -Vp, 1e-12);
  near(H.hallVoltage(0.04, -0.3, 1e21, e, 2e-3), Vp, 1e-12);
  // steady state: qE_H balances q v_d B, with E_H = |V_H|/w
  const vd = H.hallDrift(0.02, 1e21, e, w, 1e-3); near(Math.abs(Vp) / w, vd * 0.3, 1e-12);
  near(vd, 0.02 / (1e21 * e * w * 1e-3), 1e-12);
  // R_H = 1/(nq): V_H = R_H I B / t; copper free electron value about −7.4e-11 m³/C
  near(H.hallCoefficient(1e21, e) * 0.02 * 0.3 / 1e-3, Vp, 1e-12);
  const RCu = H.hallCoefficient(H.HALL.cu.n, -e); assert(RCu < 0 && Math.abs(RCu + 7.35e-11) < 0.05e-11);
  assert(H.HALL.nge.q === -1 && H.HALL.pge.q === 1 && H.HALL.cu.q === -1);
});

// ---- magnetic bottle ----
const MB = core('magnetic-force', 'MU0,PARTICLES,QE,ellipKE,ringBrz,bottleB,bottleAxisB,bottleNI,bottleLine,bottleMirror,borisStep,bottleRun,magMoment,bottleLaunch');

test('one ring: the elliptic integral field matches the axis formula, the far dipole field and a direct Biot–Savart sum', () => {
  const a = 0.06, I = 1000;
  for (const z of [0, 0.03, 0.1]) near(MB.ringBrz(a, I, 0, z)[1], MB.MU0 * I * a * a / (2 * Math.pow(a * a + z * z, 1.5)), 1e-12, 'axis');
  // just off the axis the series branch and the elliptic branch agree
  const s1 = MB.ringBrz(a, I, 1e-9, 0.04), s2 = MB.ringBrz(a, I, 2e-3, 0.04);
  near(s1[1], MB.MU0 * I * a * a / (2 * Math.pow(a * a + 0.0016, 1.5)), 1e-9);
  // direct sum of Idl × r̂/r² over 20,000 pieces of the ring at a general point
  const bs = (r, z) => { let bx = 0, bz = 0; const n = 20000; for (let k = 0; k < n; k++) { const ph = 2 * Math.PI * (k + 0.5) / n, dl = 2 * Math.PI * a / n;
    const lx = -Math.sin(ph) * dl, ly = Math.cos(ph) * dl, Rx = r - a * Math.cos(ph), Ry = -a * Math.sin(ph), Rz = z, R3 = Math.pow(Rx * Rx + Ry * Ry + Rz * Rz, 1.5);
    bx += (ly * Rz - 0) / R3; bz += (lx * Ry - ly * Rx) / R3; } return [MB.MU0 * I / (4 * Math.PI) * bx, MB.MU0 * I / (4 * Math.PI) * bz]; };
  for (const [r, z] of [[0.02, 0.03], [0.05, -0.01], [0.09, 0.07]]) { const e1 = MB.ringBrz(a, I, r, z), e2 = bs(r, z); near(e1[0], e2[0], 1e-6, 'Br'); near(e1[1], e2[1], 1e-6, 'Bz'); }
  // far away it is a dipole, Bz = μ₀m/(2πz³) on the axis with m = Iπa²
  near(MB.ringBrz(a, I, 0, 5)[1], MB.MU0 * I * Math.PI * a * a / (2 * Math.PI * 125), 3e-4);   /* (1 + a²/z²)^(−3/2) = 1 − 2.2 × 10⁻⁴ */
});

test('the bottle: ampere turns give the chosen B at the center, the field is symmetric, and the mirror ratio follows the axis', () => {
  const a = 0.06, s = 0.2, NI = MB.bottleNI(a, s, 0.1), c = { a, s, NI };
  near(MB.bottleB(c, 0, 0, 0)[2], 0.1, 1e-12);
  near(MB.bottleAxisB(c, 0.1) / MB.bottleAxisB(c, 0), 3.7577, 1e-3, 'axis mirror ratio');   /* (1/a + a²/(a²+s²)^1.5)/(2a²/(a²+s²/4)^1.5) worked by hand */
  const b1 = MB.bottleB(c, 0.02, 0.01, 0.05), b2 = MB.bottleB(c, 0.02, 0.01, -0.05);
  near(b1[2], b2[2], 1e-12); near(b1[0], -b2[0], 1e-12);
  const m = MB.bottleMirror(c, 0, 0, Math.PI / 4);
  near(m.ratio, MB.bottleAxisB(c, 0.1) / 0.1, 2e-3, 'line on the axis');
  near(Math.sin(m.lossCone) ** 2, 1 / m.ratio, 1e-12);
});

test('Boris steps keep the speed exactly and close a circle in a uniform field after one period', () => {
  const p = MB.PARTICLES.p, st = { x: 0, y: 0, z: 0, vx: 1e5, vy: 0, vz: 2e4 }, B = [0, 0, 0.1], w = p.q * 0.1 / p.m, n = 2000, dt = 2 * Math.PI / w / n;
  /* the Boris rotation angle is 2 atan(ω dt/2), so it closes after n steps at the angle-corrected period */
  const dtc = 2 * Math.tan(Math.PI / n) / w;
  for (let i = 0; i < n; i++) MB.borisStep(st, p.q / p.m, dtc, B);
  near(Math.hypot(st.vx, st.vy, st.vz), Math.hypot(1e5, 2e4), 1e-13, 'speed');
  near(st.vx, 1e5, 1e-9); assert(Math.abs(st.vy) < 1e-6 * 1e5);
  assert(Math.abs(st.x) < 1e-6 * 0.0104 && Math.abs(st.y) < 1e-6 * 0.0104, `closes: ${st.x}, ${st.y}`);
  near(st.z, 2e4 * n * dtc, 1e-12);
  void dt;
});

test('a proton outside the loss cone is trapped and keeps μ; inside it escapes; with too weak a field μ breaks down', () => {
  const p = MB.PARTICLES.p, a = 0.06, s = 0.2, mk = (B0) => ({ a, s, NI: MB.bottleNI(a, s, B0) }), c = mk(0.2);
  const lc = MB.bottleMirror(c, 0, 0, 1).lossCone;
  near(lc * 180 / Math.PI, 31.1, 0.01, 'loss cone on the axis');
  const v = 1e5, muRange = (R, cc) => { let lo = Infinity, hi = 0; for (let i = 0; i < R.P.length; i += 5) { const q = R.P[i], B = MB.bottleB(cc, q[0], q[1], q[2]), mu = MB.magMoment(p.m, { vx: q[3], vy: q[4], vz: q[5] }, B) / R.mu0; lo = Math.min(lo, mu); hi = Math.max(hi, mu); } return [lo, hi]; };
  // the Bottle preset: 0.2 T, 50°: Larmor radius 4 mm against a 6 cm coil
  const R1 = MB.bottleRun(c, p, MB.bottleLaunch(c, 0, v, 50 * Math.PI / 180), 400000); R1.extend(40e-6);
  assert(!R1.ended, 'trapped run ended: ' + R1.endTag); assert(R1.turns.length >= 15, 'bounces ' + R1.turns.length);
  let vmax = 0, vmin = Infinity; for (const q of R1.P) { const sp = Math.hypot(q[3], q[4], q[5]); vmax = Math.max(vmax, sp); vmin = Math.min(vmin, sp); }
  assert((vmax - vmin) / v < 1e-12, 'speed kept');
  const [lo, hi] = muRange(R1, c); assert(lo > 0.97 && hi < 1.03, `μ kept within 3 %: ${lo} to ${hi}`);
  // the turning points sit at the mirror points of the field line, where B = B0/sin²α
  const mm = MB.bottleMirror(c, 0, 0, 50 * Math.PI / 180);
  for (const tp of R1.turns.slice(0, 8)) near(Math.abs(tp.z), mm.zm[1], 0.015, 'mirror point');
  // inside the loss cone it leaves through a coil
  const R2 = MB.bottleRun(c, p, MB.bottleLaunch(c, 0, v, 20 * Math.PI / 180), 400000); R2.extend(40e-6);
  assert(R2.ended && R2.endTag === 'escaped', 'inside the loss cone: ' + R2.endTag);
  // at 0.05 T the orbit is 1.6 cm across against a 6 cm coil: μ is not kept, and the same 50° proton leaks out
  const c3 = mk(0.05), R3 = MB.bottleRun(c3, p, MB.bottleLaunch(c3, 0, v, 50 * Math.PI / 180), 400000); R3.extend(40e-6);
  assert(MB.bottleMirror(c3, 0, 0, 50 * Math.PI / 180).trapped, 'mirror theory says trapped');
  assert(R3.ended && R3.endTag === 'escaped', 'nonadiabatic leak: ' + R3.endTag);
});

test('Hall build up: relaxation time ε/σ, Hall angle μB, sideways velocity vanishes in the steady state', () => {
  const H = core('magnetic-force', 'QE,EPS0,HALL,hallSigma,hallTau,hallBuild,hallAngle,hallCarrierVel,hallVoltage');
  // copper: σ = 1/ρ, so μ = 1/(ρne) = 4.38 × 10⁻³ m²/V·s
  near(H.hallSigma(H.HALL.cu), 1 / 1.678e-8, 1e-12); near(H.HALL.cu.mu, 4.3816e-3, 1e-4);
  // n-type germanium: σ = 10²¹ × e × 0.39 = 62.48 S/m, τ = 16 ε₀/σ = 2.267 ps
  near(H.hallSigma(H.HALL.nge), 62.4849, 1e-5); near(H.hallTau(H.HALL.nge), 2.2672e-12, 1e-4);
  near(H.hallAngle(0.39, 0.3) * 180 / Math.PI, 6.67327, 1e-5);   /* atan(0.117) */
  near(H.hallBuild(1), 1 - Math.exp(-1), 1e-15);
  for (const k of ['cu', 'nge', 'pge']) {
    const M = H.HALL[k], I = 0.02, Bz = -0.3, t = 1e-3, v0 = H.hallCarrierVel(M, I, Bz, t, 0), v1 = H.hallCarrierVel(M, I, Bz, t, 1);
    assert(Math.abs(v1[1]) < 1e-12 * Math.abs(v1[0]), 'no sideways drift in the steady state');
    near(Math.abs(v0[1] / v0[0]), Math.tan(H.hallAngle(M.mu, Bz)), 1e-12, 'Hall angle at the start');
    // the final field E_y = v_d B_z gives the Hall voltage V_top − V_bottom = −E_y w
    near(-(v1[0] * Bz) * H.HALL.w, H.hallVoltage(I, Bz, M.n, M.q * H.QE, t), 1e-12);
    // carriers are pushed toward the edge that ends up charged with their own sign: v_y and the final E_y force q E_y oppose
    assert(Math.sign(v0[1]) === -Math.sign(M.q * v1[0] * Bz) || M.q * v1[0] * Bz === 0);
  }
});

console.log(`${count} magnetic-force test groups passed`);
