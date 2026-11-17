'use strict';
// Gravitational Waves: the leading order chirp (frequency, time to coalescence, strain), Kepler's law, the last stable orbit, the
// remnant and ringdown fits, ΔL = hL, the site delay, the GW150914 data and chirp mass fit, and the GW170817 speed of gravity bound.
const assert = require('node:assert');
const VDC = require('../../demos/lib/constants.js');
const { core } = require('./demo_source.cjs');
const c = core('gravitational-waves', 'C,G,GMSUN,MSUN,TSUN,PC,MPC,RP,LARM,DHL,YR_S,H0,OM0,GW150914,GW170817,chirpMass,etaOf,zOfDL,tauOfF,fOfTau,phaseOfTau,dfdt,hOfF,sepOfF,vRelOfF,rSchw,fISCO,remnant,qnm,wave,waveAt,deltaL,siteDelay,angleOfDelay,powerOfF,eISCO,H1_DATA,H1_NR,H1_T0,H1_NR_T0,H1_DT,zeroCross,halfCycles,chirpFit,travelTime');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
const rel = (a, b, tol, w) => assert(Math.abs(a / b - 1) <= tol, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('constants match demos/lib/constants.js (CODATA 2022, IAU 2015, LIGO, Planck 2018)', () => {
  assert.strictEqual(c.C, VDC.c); assert.strictEqual(c.G, VDC.G); assert.strictEqual(c.GMSUN, VDC.GMsun); assert.strictEqual(c.PC, VDC.pc);
  assert.strictEqual(c.RP, VDC.rp); assert.strictEqual(c.LARM, VDC.Larm); assert.strictEqual(c.DHL, VDC.dHL); assert.strictEqual(c.YR_S, VDC.yr);
  assert.strictEqual(c.H0, VDC.H0); assert.strictEqual(c.OM0, VDC.Om0); rel(c.MSUN, VDC.Msun, 1e-15, 'M☉');
  rel(c.TSUN, 4.925490947e-6, 1e-9, 'GM☉/c³');
});
group('chirp mass and η: equal masses M_c = M/2^(6/5), η = 1/4; GW150914 28.1 M☉ at the source', () => {
  rel(c.chirpMass(30, 30), 60 / Math.pow(2, 6 / 5), 1e-12, 'equal'); near(c.etaOf(30, 30), 0.25, 1e-15, 'η');
  near(c.chirpMass(36, 29), 28.096, 1e-4, 'GW150914'); near(c.chirpMass(c.GW170817.m1, c.GW170817.m2), 1.188, 1e-3, 'GW170817 chirp mass 1.188');
  assert(c.GW170817.m1 >= 1.36 && c.GW170817.m1 <= 1.60 && c.GW170817.m2 >= 1.17 && c.GW170817.m2 <= 1.36, 'inside the published low spin ranges');
});
group('redshift from distance: D_L = (1 + z)(c/H₀)∫dz/E; low z → H₀D/c; 410 Mpc → 0.087 (LIGO quoted 0.09)', () => {
  rel(c.zOfDL(1), 67.4 / 299792.458, 2e-3, 'Hubble law'); near(c.zOfDL(410), 0.0866, 0.002, '410 Mpc');
  const z = c.zOfDL(1000); assert(z < 1000 * 67.4 / 299792.458, 'D_L grows faster than cz/H₀');
});
group('leading order chirp: τ(f) and f(τ) invert; df/dt from the two agree; Φ slope = 2πf; τ from 35 Hz ≈ 0.17 s for GW150914', () => {
  const McS = c.chirpMass(36, 29) * 1.09 * c.TSUN;
  for (const fr of [20, 35, 100]) { rel(c.fOfTau(McS, c.tauOfF(McS, fr)), fr, 1e-12, 'round trip ' + fr);
    const tau = c.tauOfF(McS, fr), d = tau * 1e-6, num = (c.fOfTau(McS, tau - d) - c.fOfTau(McS, tau + d)) / (2 * d); rel(num, c.dfdt(McS, fr), 1e-6, 'df/dt');
    const dp = (c.phaseOfTau(McS, tau - d) - c.phaseOfTau(McS, tau + d)) / (2 * d); rel(dp, 2 * Math.PI * fr, 1e-6, 'dΦ/dt = 2πf'); }
  near(c.tauOfF(McS, 35), 0.165, 0.01, 'τ(35 Hz)');
});
group('strain: h = (4/d)(GM_c/c²)^(5/3)(πf/c)^(2/3); GW150914 face on overhead 2.4 × 10⁻²¹ at 150 Hz; h ∝ 1/d and f^(2/3)', () => {
  const McS = 30.5 * c.TSUN, d = 410 * c.MPC, GMc = c.G * 30.5 * c.MSUN / (c.C * c.C);
  rel(c.hOfF(McS, 150, d), 4 / d * Math.pow(GMc, 5 / 3) * Math.pow(Math.PI * 150 / c.C, 2 / 3), 1e-12, 'formula'); rel(c.hOfF(McS, 150, d), 2.44e-21, 0.01, 'size');
  rel(c.hOfF(McS, 150, 2 * d) * 2, c.hOfF(McS, 150, d), 1e-14, '1/d'); rel(c.hOfF(McS, 240, d) / c.hOfF(McS, 30, d), 4, 1e-12, 'f^(2/3)');
});
group('orbit: Kepler a³ = GM/ω², ω = πf; v/c at the last stable orbit is 1/√6 = 0.408; f_ISCO = 4.40 kHz/(M/M☉)', () => {
  const M = 65 * c.MSUN, a = c.sepOfF(M, 20); rel(a * a * a * Math.pow(Math.PI * 20, 2), c.G * M, 1e-12, 'Kepler');
  rel(c.fISCO(c.TSUN), 4397, 1e-3, 'f_ISCO for 1 M☉'); const fI = c.fISCO(65 * c.TSUN); near(c.vRelOfF(M, fI), 1 / Math.sqrt(6), 1e-12, 'v/c');
  rel(c.sepOfF(M, fI), 3 * c.rSchw(M), 1e-12, 'r_ISCO = 6GM/c² = 3 r_s'); rel(c.rSchw(c.MSUN), 2953.25, 1e-5, 'r_s of the Sun');
});
group('remnant and ringdown: equal masses χ = 0.687, M_f = 0.952 M; GW150914 rings at 250 Hz (fits), τ about 4 ms', () => {
  const R = c.remnant(30, 30); near(R.chi, 0.6869, 2e-3, 'χ'); near(R.Mf / 60, 0.95162, 1e-9, 'M_f');
  const W = c.wave({ m1: 36, m2: 29, dMpc: 410, z: 0.09, f0: 20 }); near(W.Q.f, 251, 0.02, 'ringdown f'); near(W.Q.tau * 1e3, 4.0, 0.05, 'τ ms');
  /* Schwarzschild limit of the Berti fit: 2πf GM/c³ = 0.3737 for χ = 0 */
  const q0 = c.qnm(c.TSUN, 0); near(2 * Math.PI * q0.f * c.TSUN, 0.3683, 1e-4, 'χ = 0: the fit gives 0.3683'); near(2 * Math.PI * q0.f * c.TSUN, 0.3737, 0.015, 'within 1.5% of the exact Schwarzschild 0.3737'); near(q0.Q, 2.1187, 1e-4, 'Q(0)');
});
group('the sampled wave: starts at f₀ (raised so at most 30 s is sampled), ends after the ringdown, never NaN; frequency rises monotonically; peak about 3.5 × 10⁻²¹', () => {
  const W = c.wave({ m1: 36, m2: 29, dMpc: 410, z: c.zOfDL(410), f0: 20 }); assert(W.t.length > 2000);
  near(W.f[0], 20, 1e-6, 'f₀'); for (let i = 1; i < W.f.length; i++) { assert(W.f[i] >= W.f[i - 1] - 1e-9, 'monotonic at ' + i); assert(isFinite(W.h[i])); }
  const pk = Math.max(...W.A); rel(pk, 3.46e-21, 0.02, 'peak'); const a = c.waveAt(W, -0.2); assert(a.on && a.f > 20 && a.f < W.fI);
  assert.strictEqual(c.waveAt(W, W.t[0] - 1).h, 0); const NS = c.wave({ m1: 1.48, m2: 1.26, dMpc: 40, z: 0.009, f0: 100 }); assert(NS.ns); near(NS.tEnd, -NS.tauI, 2e-3, 'neutron stars stop at f_ISCO');
  const L = c.wave({ m1: 1.4, m2: 1.3, dMpc: 40, z: 0.009, f0: 10 }); near(L.tau0 - L.tauI, 30, 1e-9, 'at most 30 s'); assert(L.f0used > 10 && Math.abs(L.f[0] - L.f0used) < 1e-6 && L.t.length < 2e5, 'start raised');
});
group('detector: ΔL = hL, 4.0 × 10⁻¹⁸ m for h = 10⁻²¹ (1/420 of a proton); Hanford–Livingston 10.01 ms; 6.9 ms → 46°', () => {
  near(c.deltaL(1e-21), 3.9945e-18, 1e-12, 'ΔL'); near(c.deltaL(1e-21) / (2 * c.RP), 1 / 421, 0.01, 'proton');
  near(c.siteDelay(0) * 1e3, 10.0136, 1e-4, 'd/c'); near(c.angleOfDelay(6.9e-3), 46.44, 0.001, 'angle'); near(c.siteDelay(c.angleOfDelay(6.9e-3)), 6.9e-3, 1e-12, 'round trip');
  near(c.siteDelay(90), 0, 1e-15, 'broadside');
});
group('GW150914 data: Fig. 1 sampled every 4th point, peak near 1.2 × 10⁻²¹ at 0.423 s; fit 0.30 to 0.42 s gives 30 to 37 M☉', () => {
  assert.strictEqual(c.H1_DATA.length, 861); assert.strictEqual(c.H1_NR.length, 860); near(c.H1_DT, 1 / 4096, 1e-15, 'dt');
  let mx = 0, at = 0; c.H1_NR.forEach((v, i) => { if (Math.abs(v) > mx) { mx = Math.abs(v); at = c.H1_NR_T0 + i * c.H1_DT; } }); near(mx, 1.23, 0.02, 'peak'); near(at, 0.4232, 0.002, 'peak time');
  const Z = c.zeroCross(c.H1_NR, c.H1_NR_T0, c.H1_DT), HC = c.halfCycles(Z); assert(Z.length > 20);
  const F = c.chirpFit(HC.filter((q) => q[0] >= 0.30 && q[0] <= 0.42)); assert(F.n >= 10); assert(F.Mc > 30 && F.Mc < 37, 'chirp mass ' + F.Mc); assert(F.tc > 0.42 && F.tc < 0.44, 't_c ' + F.tc);
  /* the fit recovers the chirp mass exactly from a perfect leading order chirp */
  const McS = 30 * c.TSUN, tc = 0.43, pts = []; for (let t = 0.30; t < 0.42; t += 0.005) pts.push([t, c.fOfTau(McS, tc - t)]); const P = c.chirpFit(pts); rel(P.Mc, 30, 1e-9, 'exact chirp'); near(P.tc, tc, 1e-9, 't_c');
});
group('energy: peak power 3.4 × 10⁴⁹ W at 150 Hz (LIGO: 3.6 × 10⁴⁹ W peak); a test body falling to ISCO gives 5.7% of μc²', () => {
  rel(c.powerOfF(30.5 * c.TSUN, 150), 3.4e49, 0.03, 'power'); near(c.eISCO(1, 1e-9) / 1e-9, 1 - Math.sqrt(8 / 9), 1e-6, '5.72%');
  rel(c.GW150914.peakL, 3.6e49, 1e-12, 'published peak');
});
group('GW170817: 40 Mpc is 1.30 × 10⁸ years of travel; 1.74 s over that is δ = 4.2 × 10⁻¹⁶; δ = 10⁻³ would be 130,000 years', () => {
  const D = c.travelTime(40); near(D / c.YR_S / 1e6, 130.46, 1e-3, 'Myr'); near(c.GW170817.dtGRB / D, 4.23e-16, 0.01, 'δ'); near(1e-3 * D / c.YR_S, 130463, 1e-3, '0.1% slower');
});
console.log(`${n} groups passed`);
