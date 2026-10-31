'use strict';
// Node test of the fluids demo's CORE block against analytic results:
// hydrostatics, Pascal's vessels, buoyancy with partial submersion (Archimedes), the overflow can,
// the bobbing block, continuity and Bernoulli in the Venturi tube with the cavitation flag, Torricelli,
// and the helpers behind Capture, the fit and the CSV.
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const F = core('fluids', 'G,PATM,PVAP,LIQ,twoLiquids,clamp,hydro,columnHeight,vesselR,vesselVolume,submerged,kEff,blockMass,dragB,buoyForces,floatEq,bobStep,bobRun,hangState,venturi,torricelli,num,fitLine,fitOrigin,shiftDec,csvCell,buildCSV');
let n = 0;
const close = (a, b, rel = 1e-12, abs = 1e-12, msg = '') => assert(Math.abs(a - b) <= abs + rel * Math.abs(b), `${msg} expected ${b}, got ${a}`);
const test = (name, fn) => { fn(); n++; console.log('PASS', name); };
const g = 9.81;

test('standard gravity and standard atmosphere', () => {
  assert.equal(F.G, 9.81); assert.equal(F.PATM, 101325);
});

test('hydrostatic pressure P = P0 + rho g h, and column heights', () => {
  for (const k of Object.keys(F.LIQ)) for (const d of [0, 0.5, 1.2, 10]) {
    const rho = F.LIQ[k].rho;
    close(F.hydro(rho, d), 101325 + rho * g * d);
    close(F.hydro(rho, d, 0), rho * g * d);
    close(F.columnHeight(rho * g * d, rho), d);
  }
  // 1 atm of mercury at 0 °C is 760 mm by the definition of the mmHg (13595.1 kg/m³ and standard gravity 9.80665); with g = 9.81 the column is 759.7 mm
  close(F.columnHeight(101325, F.LIQ.hg.rho), 0.7597, 2e-4);
  // 1 atm of fresh water is 10.33 m (10.329 m with g = 9.81)
  close(F.columnHeight(101325, 1000), 10.3287, 1e-4);
});

test("Pascal's vessels: volumes of the cylinder, the frusta and the slanted tube", () => {
  const cyl = { r0: 0.04, rt: 0.04, H: 0.5 }, fl = { r0: 0.04, rt: 0.17, H: 0.5 }, nar = { r0: 0.04, rt: 0.012, H: 0.5 };
  for (const h of [0.05, 0.32, 0.48]) {
    close(F.vesselVolume(cyl, h), Math.PI * 0.04 * 0.04 * h);
    for (const v of [fl, nar]) {               // independent: midpoint sum of thin discs
      let V = 0; const N = 20000;
      for (let i = 0; i < N; i++) { const r = F.vesselR(v, (i + 0.5) * h / N); V += Math.PI * r * r * h / N; }
      close(F.vesselVolume(v, h), V, 1e-8);
    }
  }
  // the gauge pressure at the base, and so the force on every base, is rho g h whatever the shape
  close(1000 * g * 0.32 * Math.PI * 0.04 * 0.04, 15.779, 2e-4);
});

const tank = (L, rhoO, rhoF, spout) => ({ L, rhoO, rhoF, A: 0.15, zeta: 0.12, spout: spout === undefined ? null : spout });
test('buoyancy: level rise, partial submersion and F_B = rho_f V_sub g (Archimedes)', () => {
  for (const L of [0.04, 0.1, 0.2]) {
    const p = tank(L, 2700, 1000), a = L * L, Vw = 0.15 * 0.3;
    for (const zb of [0.35, 0.3, 0.28, 0.25, 0.2, 0.1, 0]) {
      const s = F.submerged(p, zb, Vw);
      // the surface sits at the starting level plus V_sub/A, and the submerged height is the part of the block below it
      close(s.hs, Vw / 0.15 + a * s.s / 0.15);
      close(s.s, F.clamp(s.hs - zb, 0, L));
      const f = F.buoyForces(p, zb, 0, Vw);
      close(f.FB, 1000 * g * a * s.s);       // weight of the liquid displaced
      close(f.W, 2700 * L ** 3 * g);
    }
  }
  // F_B against V_sub is a straight line through the origin with slope rho_f g, for every liquid
  for (const k of Object.keys(F.LIQ)) {
    const rho = F.LIQ[k].rho, p = tank(0.1, 20000, rho), xs = [], ys = [];
    for (const zb of [0.33, 0.31, 0.29, 0.27, 0.25]) { const f = F.buoyForces(p, zb, 0, 0.045); xs.push(0.01 * f.s); ys.push(f.FB); }
    const fit = F.fitLine(xs, ys);
    close(fit.b, rho * g, 1e-10); close(fit.a, 0, 0, 1e-9);
  }
});

test('floating: V_sub/V = rho_obj/rho_fluid; sinking blocks rest on the floor', () => {
  for (const [rhoO, rhoF] of [[500, 1000], [917, 1025], [240, 920], [7850, 13595.1]]) {
    const p = tank(0.1, rhoO, rhoF), eq = F.floatEq(p, 0.045);
    assert.ok(eq.floats);
    close(eq.s, rhoO / rhoF * 0.1);
    const f = F.buoyForces(p, eq.zb, 0, 0.045);
    close(f.FB, f.W, 1e-12);                  // equilibrium
  }
  assert.equal(F.floatEq(tank(0.1, 2700, 1000), 0.045).floats, false);
  // a damped bobbing block settles to the floating level
  const p = tank(0.1, 500, 1000), st = F.bobRun({ zb: 0.4, v: 0, Vw: 0.045, caught: 0, t: 0 }, p, 30, 5e-4);
  close(st.zb, F.floatEq(p, 0.045).zb, 0, 2e-6); close(st.v, 0, 0, 1e-5);
});

test('small bobs: period 2 pi sqrt(m/k) / sqrt(1 - zeta^2) with k = rho_f g a / (1 - a/A)', () => {
  const p = { ...tank(0.1, 500, 1000), zeta: 0.05 }, eq = F.floatEq(p, 0.045);
  let st = { zb: eq.zb + 0.002, v: 0, Vw: 0.045, caught: 0, t: 0 }, prev = st.zb - eq.zb, ups = [];
  for (let i = 0; i < 40000 && ups.length < 4; i++) {
    const nx = F.bobStep(st, p, 1e-4), x = nx.zb - eq.zb;
    if (prev < 0 && x >= 0) ups.push(st.t + 1e-4 * (-prev) / (x - prev));
    prev = x; st = nx;
  }
  const T = (ups[3] - ups[0]) / 3, k = F.kEff(p), m = F.blockMass(p);
  close(k, 1000 * g * 0.01 / (1 - 0.01 / 0.15));
  close(T, 2 * Math.PI * Math.sqrt(m / k) / Math.sqrt(1 - 0.05 ** 2), 1e-4);
});

test('spring scale and overflow can: T = W - F_B, and the beaker catches exactly the displaced volume', () => {
  const p = tank(0.1, 2700, 1000, 0.42), Vw0 = 0.15 * 0.42, a = 0.01;
  // lower the hanging block into the full can, as the demo does, spilling at each position
  let Vw = Vw0, caught = 0;
  for (const zTaut of [0.5, 0.44, 0.40, 0.37, 0.34, 0.30]) {
    const h = F.hangState(p, zTaut, Vw), s = F.submerged(p, h.zb, Vw);
    if (s.spill > 0) { Vw -= s.spill; caught += s.spill; }
    const f = F.buoyForces(p, h.zb, 0, Vw);
    close(h.T, f.W - f.FB, 1e-12);
    // the surface stays at the spout once water runs over, so what is caught equals the volume displaced
    close(caught, a * f.s, 1e-12, 1e-15);
    close(1000 * g * caught, f.FB, 1e-12, 1e-12);
  }
  // fully under: 1 L of water, weight 9.81 N
  close(1000 * g * caught, 9.81, 1e-12);
  // a floater on a slack string reads zero
  const cork = F.hangState(tank(0.1, 240, 1000), 0.2, 0.045);
  assert.equal(cork.T, 0); assert.ok(cork.slack);
});

test('Venturi: continuity, Bernoulli and the standpipe drop', () => {
  for (const [D1, D2, v1, h1] of [[0.06, 0.03, 0.8, 0.8], [0.1, 0.05, 1.2, 1], [0.05, 0.045, 0.3, 0.2]]) for (const rho of [1000, 920]) {
    const r = F.venturi({ D1, D2, v1, h1, rho });
    close(Math.PI * D1 * D1 / 4 * v1, Math.PI * D2 * D2 / 4 * r.v2);     // A1 v1 = A2 v2
    close(r.P1 + 0.5 * rho * v1 * v1, r.P2 + 0.5 * rho * r.v2 * r.v2, 1e-12);
    close(r.P1, rho * g * h1);
    close(r.dh, h1 - r.h2, 1e-12);                                        // the drop between the standpipes
    close(r.dh, (r.v2 ** 2 - v1 ** 2) / (2 * g), 1e-12);
    close(r.Q, Math.PI * D1 * D1 / 4 * v1);
  }
  // preset: 6 cm to 3 cm at 0.8 m/s: 4 times faster, 48.9 cm drop
  const r = F.venturi({ D1: 0.06, D2: 0.03, v1: 0.8, h1: 0.8, rho: 1000 });
  close(r.v2, 3.2); close(r.dh, 0.4893, 1e-4);
});

test('Venturi cavitation flag: P_atm + P2 below the vapor pressure', () => {
  // the extreme corner of the sliders gives an absolute pressure of about -20 MPa: flagged, never shown as a value
  const x = F.venturi({ D1: 0.1, D2: 0.01, v1: 2, h1: 0.2, rho: 1000, pv: F.LIQ.water.pv });
  assert.ok(x.cav); assert.ok(x.P2abs < -1e7);
  assert.equal(F.venturi({ D1: 0.06, D2: 0.03, v1: 0.8, h1: 0.8, rho: 1000 }).cav, false);
  // the switch sits exactly where P_atm + P2 = p_v: solve for v1 and step either side
  for (const [k, pv] of [['water', 2339], ['sea', 2300], ['hg', 0.16], ['oil', 0]]) {
    const rho = F.LIQ[k].rho, D1 = 0.08, D2 = 0.02, h1 = 0.5, r4 = (D1 / D2) ** 4;
    const v1 = Math.sqrt((101325 + rho * g * h1 - pv) / (0.5 * rho * (r4 - 1)));
    assert.equal(F.LIQ[k].pv, pv);
    assert.equal(F.venturi({ D1, D2, v1: v1 * 0.999, h1, rho, pv }).cav, false);
    assert.equal(F.venturi({ D1, D2, v1: v1 * 1.001, h1, rho, pv }).cav, true);
  }
  // without pv the water value is used
  assert.equal(F.PVAP, 2339);
});

test('Torricelli: v = sqrt(2gh), R = 2 sqrt(h(H - h)), largest R = H at h = H/2', () => {
  for (const H of [0.2, 1, 1.5]) {
    for (const f of [0.1, 0.25, 0.5, 0.8]) {
      const h = f * H, t = F.torricelli(H, h);
      close(t.v, Math.sqrt(2 * g * h)); close(t.R, 2 * Math.sqrt(h * (H - h)), 1e-12);
      close(F.torricelli(H, H - h).R, t.R, 1e-12);          // holes h and H - h land together
    }
    close(F.torricelli(H, H / 2).R, H, 1e-12);
  }
  close(F.torricelli(1, 0.3).v, 2.4261, 1e-4); close(F.torricelli(1, 0.3).R, 0.9165, 1e-4);
});

test('least squares helpers: exact lines, standard errors, through the origin', () => {
  const f = F.fitLine([0, 1, 2, 3], [1, 3, 5, 7]);
  close(f.b, 2); close(f.a, 1); close(f.sb, 0); close(f.sa, 0);
  // standard errors for y = [1, 2, 2, 4] at x = [0, 1, 2, 3], worked out directly from the residuals
  const x = [0, 1, 2, 3], y = [1, 2, 2, 4], g2 = F.fitLine(x, y);
  close(g2.b, 0.9); close(g2.a, 0.9);
  const ss = y.reduce((s, yi, i) => s + (yi - 0.9 - 0.9 * x[i]) ** 2, 0), s2 = ss / 2, sxx = 5;
  close(g2.sb, Math.sqrt(s2 / sxx)); close(g2.sa, Math.sqrt(s2 * (1 / 4 + 1.5 * 1.5 / sxx)));
  const o = F.fitOrigin([1, 2, 3], [2, 4.2, 5.8]);
  close(o.b, (2 + 8.4 + 17.4) / 14);
  assert.equal(F.fitLine([1], [2]), null); assert.equal(F.fitLine([1, 1], [2, 3]), null);
});

test('readings as displayed recover rho g: a depth series rounded like the gauge and the ruler', () => {
  for (const k of Object.keys(F.LIQ)) {
    const rho = F.LIQ[k].rho, xs = [], ys = [];
    for (const d of [0.2, 0.5, 0.9, 1.4, 1.95]) { const h = +d.toFixed(2); xs.push(h); ys.push(+(F.hydro(rho, h) / 1000).toFixed(2)); }
    const fit = F.fitLine(xs, ys);
    close(fit.b, rho * g / 1000, 2e-3); close(fit.a, 101.325, 0, 0.01);
  }
  // spring scale 0.01 N and ruler 0.1 cm: rho_f from the slope of F_B = W - T against V_sub = L² d
  const p = tank(0.1, 2700, 1000), Wd = +F.buoyForces(p, 0.4, 0, 0.045).W.toFixed(2), xs = [], ys = [];
  for (const zb of [0.3, 0.28, 0.26, 0.24, 0.22]) {
    const s = F.submerged(p, zb, 0.045), d = +((s.hs - zb) * 100).toFixed(1), T = +(F.buoyForces(p, zb, 0, 0.045).W - F.buoyForces(p, zb, 0, 0.045).FB).toFixed(2);
    xs.push(100 * Math.min(d, 10)); ys.push(Wd - T);
  }
  const fb = F.fitLine(xs, ys);
  close(fb.b * 1e6 / g, 1000, 5e-3);
});

test('CSV helpers: exact unit shifts of typed digits, quoting', () => {
  const S = F.shiftDec;
  assert.equal(S('113.09', 3), '113090'); assert.equal(S('9.0', -2), '0.090'); assert.equal(S('12', -2), '0.12');
  assert.equal(S('0.5', -6), '0.0000005'); assert.equal(S('−3.5', -2), '-0.035'); assert.equal(S('1.234', 3), '1234');
  assert.equal(S('0.123', 1), '1.23'); assert.equal(S('', 3), ''); assert.equal(S('abc', 3), 'abc'); assert.equal(S('1e3', 2), '1e3');
  assert.equal(F.num('−1.5'), -1.5); assert.ok(Number.isNaN(F.num('')));
  const csv = F.buildCSV(['Title (simulated data)', ['demo version', 'fluids@x']], ['a_m', 'note'], [[1, 'x, "y"'], [2, '']]);
  assert.equal(csv, '# Title (simulated data)\n# demo version,fluids@x\na_m,note\n1,"x, ""y"""\n2,\n');
});

test('two liquids in a U tube: equal pressure at the interface level, volume of the denser liquid kept', () => {
  for (const [rB, rP, h] of [[1000, 920, 0.2], [1000, 700, 0.3], [13595.1, 1000, 0.25], [13595.1, 920, 0.02]]) {
    const t = F.twoLiquids(rB, rP, h);
    close(F.PATM + rP * F.G * (t.zP - t.zI), F.PATM + rB * F.G * (t.zB - t.zI), 0, 1e-9, 'pressures at the interface level');
    close(t.zB + t.zI, 0, 0, 1e-15, 'one side rises as much as the other falls');
    close(t.zP - t.zI, h, 0, 1e-15); close(t.rhoFromHeights(h, t.hB), rP, 0, 1e-9, 'density back from the two heights');
    assert(t.gap > 0, 'the lighter liquid stands taller');
  }
});

console.log(`${n} fluids test groups passed`);
