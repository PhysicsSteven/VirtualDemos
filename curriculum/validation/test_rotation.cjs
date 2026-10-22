'use strict';
// Rotation: moments of inertia against direct integrals, torque and angular acceleration, the rolling race,
// angular momentum conservation for the spinner (checked against an independent Cartesian integration), and the seesaw.
const assert = require('node:assert/strict'), { core } = require('./demo_source.cjs');
const m = core('rotation', 'G,DEG,SHAPES,rodI,torqueOf,leverArm,doorTorque,swingRK4,makeSwing,rollAcc,rollTime,muMin,rollAt,spinI,spinWork,pullProfile,seesawMoment,seesawTorque,seesawI,balanceX,seesawTip');
let n = 0;
const close = (a, b, rel = 1e-9, abs = 0) => assert(Math.abs(a - b) <= abs + rel * Math.abs(b), `expected ${b}, got ${a}`);
const test = (name, f) => { f(); n++; console.log('PASS', name); };
const PI = Math.PI, DEG = PI / 180;

test('I/mR² for each shape and mL²/3 for the rod agree with direct integrals of r⊥² dm', () => {
  const N = 1200, R = 1;
  // solid sphere: ∫∫ s² dm over z and the cylindrical radius s, uniform density
  let I = 0, M = 0;
  for (let i = 0; i < N; i++) {
    const z = -R + (i + 0.5) * 2 * R / N, smax = Math.sqrt(R * R - z * z);
    for (let j = 0; j < 200; j++) { const s = (j + 0.5) * smax / 200, dm = 2 * PI * s * (smax / 200) * (2 * R / N); I += s * s * dm; M += dm; }
  }
  close(I / (M * R * R), m.SHAPES.sphere.k, 2e-5);
  // solid cylinder about its axis
  I = 0; M = 0; for (let j = 0; j < N; j++) { const s = (j + 0.5) / N, dm = 2 * PI * s / N; I += s * s * dm; M += dm; }
  close(I / M, m.SHAPES.disk.k, 1e-6);
  // thin spherical shell: dA = 2πR² sin θ dθ at distance R sin θ from the axis
  I = 0; M = 0; for (let j = 0; j < N; j++) { const t = (j + 0.5) * PI / N, dA = 2 * PI * Math.sin(t) * PI / N; I += Math.sin(t) ** 2 * dA; M += dA; }
  close(I / M, m.SHAPES.hsphere.k, 1e-6);
  close(m.SHAPES.hoop.k, 1, 0); close(m.SHAPES.block.k, 0, 0, 0);
  // thin rod about one end
  const L = 0.9, mass = 15; I = 0; for (let j = 0; j < N; j++) { const x = (j + 0.5) * L / N; I += x * x * mass / N; }
  close(m.rodI(mass, L), I, 1e-6);
});

test('torque is the z component of r × F, r⊥F in size; constant torque gives φ = ½αt²', () => {
  for (const th of [-150, -90, -20, 0, 35, 90, 170].map((d) => d * DEG)) {
    const r = 0.6, F = 25, rv = [r, 0], Fv = [F * Math.cos(th), F * Math.sin(th)];
    close(m.torqueOf(r, F, th), rv[0] * Fv[1] - rv[1] * Fv[0], 1e-12, 1e-12);
    close(Math.abs(m.torqueOf(r, F, th)), m.leverArm(r, th) * F, 1e-12, 1e-12);
  }
  const p = { L: 0.9, m: 15, F: 20, r: 0.85, th: PI / 2, mode: 'follow' }, I = m.rodI(p.m, p.L), a = p.r * p.F / I;
  const sw = m.makeSwing(p);
  close(sw.t90, Math.sqrt(PI / a), 1e-12); close(sw.w90, a * sw.t90, 1e-12); close(sw.at(0.3)[0], 0.5 * a * 0.09, 1e-12);
  // the RK4 path of the integrator agrees with the exact constant torque result
  const rk = m.makeSwing(p, true); close(rk.t90, sw.t90, 1e-8); close(rk.w90, sw.w90, 1e-8);
  // the notes: same 20 N at 0.15 m against 0.85 m
  close(m.makeSwing({ ...p, r: 0.15 }).t90, 2.06, 0, 0.005); close(sw.t90, 0.87, 0, 0.005);   // quoted to 2 decimals
  // no torque when F points through the pivot
  assert(m.makeSwing({ ...p, th: 0 }).none);
});

test('force fixed in the room: work-energy ½Iω² = ∫τ dφ = rF(sin θ − cos θ) at 90°', () => {
  for (const thd of [100, 120, 150]) {
    const p = { L: 0.9, m: 15, F: 20, r: 0.6, th: thd * DEG, mode: 'room' }, I = m.rodI(p.m, p.L);
    const sw = m.makeSwing(p), W = p.r * p.F * (Math.sin(p.th) - Math.cos(p.th));
    assert(sw.t90 > 0); close(0.5 * I * sw.w90 * sw.w90, W, 1e-8);
    close(m.doorTorque(p, 0.3), p.r * p.F * Math.sin(p.th - 0.3), 1e-12);
  }
});

test('rolling without slipping: a = g sin β/(1 + I/mR²), energy shared between moving and spinning', () => {
  const b = 10 * DEG, D = 2;
  for (const key of Object.keys(m.SHAPES)) {
    const k = m.SHAPES[key].k, a = m.rollAcc(k, b);
    // Newton for the center and for rotation about it: mg sin β − f = ma, fR = I a/R
    const mass = 1.7, R = 0.08, I = k * mass * R * R, aN = mass * m.G * Math.sin(b) / (mass + I / (R * R)), f = I * aN / (R * R);
    close(a, aN, 1e-12);
    close(m.muMin(k, b), f / (mass * m.G * Math.cos(b)), 1e-12, 1e-15);
    close(m.rollTime(k, b, D), Math.sqrt(2 * D / a), 1e-12);
    for (const t of [0.2, 0.7, 5]) {
      const st = m.rollAt({ shape: key, m: mass, R }, b, D, t);
      close(st.KEt + st.KEr, st.drop, 1e-12, 1e-15);
      if (m.SHAPES[key].rolls) close(st.w, st.v / R, 1e-12);
    }
    // speed at the bottom from energy: v² = 2gD sin β/(1 + k), whatever m and R
    for (const [mm, RR] of [[8, 0.15], [0.5, 0.03]]) close(m.rollAt({ shape: key, m: mm, R: RR }, b, D, 1e9).v, Math.sqrt(2 * m.G * D * Math.sin(b) / (1 + k)), 1e-12);
  }
  const order = ['block', 'sphere', 'disk', 'hsphere', 'hoop'].map((s) => m.rollTime(m.SHAPES[s].k, b, D));
  for (let i = 1; i < order.length; i++) assert(order[i] > order[i - 1]);
});

test('spinner: L conserved under a radial pull (independent Cartesian check), work = ΔKE', () => {
  // one of the two masses, alone (I₀ = 0), pulled in by a central force that makes r follow the page's smooth profile
  const mass = 3, r1 = 0.8, r2 = 0.2, Tm = 0.8, w0 = 2 * PI;
  const Lsys = m.spinI(0, mass, r1) * w0;            // both masses
  let x = r1, y = 0, vx = 0, vy = r1 * w0, t = 0, W = 0;
  const h = 1e-5;
  const acc = (x, y, vx, vy, t) => {
    const r = Math.hypot(x, y), [, , rdd] = m.pullProfile(r1, r2, Tm, Math.min(Tm - 1e-12, Math.max(1e-12, t))), wsq = ((x * vy - y * vx) / (r * r)) ** 2;
    const Fr = mass * (rdd - r * wsq);                  // radial force needed, positive outward
    return [Fr * x / (r * mass), Fr * y / (r * mass), Fr];
  };
  // the profile's acceleration jumps at t = 0 and t = Tm, so the steps line up with both ends
  for (let i = 0, N = Math.round(Tm / h); i < N; i++) {
    t = i * h;
    const s = (X, Y, VX, VY, T) => { const a = acc(X, Y, VX, VY, T); return [VX, VY, a[0], a[1], a[2]]; };
    const k1 = s(x, y, vx, vy, t), k2 = s(x + h / 2 * k1[0], y + h / 2 * k1[1], vx + h / 2 * k1[2], vy + h / 2 * k1[3], t + h / 2);
    const k3 = s(x + h / 2 * k2[0], y + h / 2 * k2[1], vx + h / 2 * k2[2], vy + h / 2 * k2[3], t + h / 2), k4 = s(x + h * k3[0], y + h * k3[1], vx + h * k3[2], vy + h * k3[3], t + h);
    const rd = (X, Y, VX, VY) => (X * VX + Y * VY) / Math.hypot(X, Y);
    // work of the pull on this mass, Simpson in time: F_r ṙ
    W += h / 6 * (k1[4] * rd(x, y, vx, vy) + 2 * k2[4] * rd(x + h / 2 * k1[0], y + h / 2 * k1[1], vx + h / 2 * k1[2], vy + h / 2 * k1[3]) + 2 * k3[4] * rd(x + h / 2 * k2[0], y + h / 2 * k2[1], vx + h / 2 * k2[2], vy + h / 2 * k2[3]) + k4[4] * rd(x + h * k3[0], y + h * k3[1], vx + h * k3[2], vy + h * k3[3]));
    x += h / 6 * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]); y += h / 6 * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1]);
    vx += h / 6 * (k1[2] + 2 * k2[2] + 2 * k3[2] + k4[2]); vy += h / 6 * (k1[3] + 2 * k2[3] + 2 * k3[3] + k4[3]);
  }
  const r = Math.hypot(x, y), Lone = mass * (x * vy - y * vx);
  close(r, r2, 1e-6);
  close(2 * Lone, Lsys, 1e-8);                                        // L unchanged
  close(Lone / (mass * r * r), Lsys / m.spinI(0, mass, r2), 1e-6);    // ω = L/I with the page's I
  close(2 * W, m.spinWork(Lsys, m.spinI(0, mass, r1), m.spinI(0, mass, r2)), 1e-6);
  // pullProfile: rate and acceleration are the derivatives of the position
  for (const tt of [0.1, 0.4, 0.7]) {
    const e = 1e-6, p = m.pullProfile(r1, r2, Tm, tt), pp = m.pullProfile(r1, r2, Tm, tt + e), pm = m.pullProfile(r1, r2, Tm, tt - e);
    close(p[1], (pp[0] - pm[0]) / (2 * e), 1e-7, 1e-8); close(p[2], (pp[1] - pm[1]) / (2 * e), 1e-6, 1e-6);
  }
  // skater numbers in the notes: I 4.64 → 1.04 kg·m², 1.00 → 4.46 rev/s, L = 29.2 kg·m²/s
  const Ia = m.spinI(0.8, 3, 0.8), Ib = m.spinI(0.8, 3, 0.2), L = Ia * 2 * PI;
  close(Ia, 4.64, 1e-12); close(Ib, 1.04, 1e-12); close(L / Ib / (2 * PI), 4.46, 1e-3); close(L, 29.2, 2e-3);
});

test('seesaw: torque −Σmgx cos φ, balance point, I with the beam, and energy at touch down', () => {
  const ms = [{ m: 4, x: -1 }, { m: 2, x: 1.5 }], Mb = 10, Lb = 4;
  close(m.seesawTorque(ms, 0), m.G * 1, 1e-12);                    // net +9.81 N·m: counterclockwise, left end down
  close(m.seesawI(ms, Mb, Lb), 4 + 2 * 2.25 + Mb * Lb * Lb / 12, 1e-12);
  const xb = m.balanceX(ms, 1); close(xb, 2, 1e-12);
  close(m.seesawMoment([ms[0], { m: 2, x: xb }]), 0, 0, 1e-12);
  const stop = Math.asin(0.5 / 2), tip = m.seesawTip(ms, Mb, Lb, stop), I = m.seesawI(ms, Mb, Lb);
  assert(tip.tHit > 0); close(tip.at(tip.tHit)[0], stop, 1e-9);     // positive: counterclockwise
  // ½Iω² equals the drop in potential energy, U(φ) = g Σ m x sin φ
  close(0.5 * I * tip.vHit * tip.vHit, -m.G * m.seesawMoment(ms) * Math.sin(stop), 1e-8);
  assert(m.seesawTip([{ m: 4, x: -1 }, { m: 2, x: 2 }], Mb, Lb, stop).none);
});

console.log(`${n} rotation test groups passed`);
