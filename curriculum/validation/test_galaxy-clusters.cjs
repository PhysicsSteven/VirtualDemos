'use strict';
// Galaxy Clusters and Dark Matter: the cored isothermal sphere, Zwicky's speeds (the swarm stays steady and the measured spread
// gives the mass), the hot gas mass from hydrostatic balance and Wien's law, lensing (distances, Einstein angle, ring mass), and
// the Bullet Cluster model (energy, momentum, the gas left behind).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const VDC = require('../../demos/lib/constants.js');
const c = core('galaxy-clusters', 'C,GSI,KB,MP,WIEN_B,PC,KPC,YR,MSUN,H0,OM,MU,G,KMS,GU,RC,RAP,RBIG,SHARE,PULL,sigmaFor,massInside,accel,zwicky,gasT,sigmaForT,hydroMass,wien,rng,sampleIso,stepIso,isoEnergy,losSpread,comoving,angDist,angDist12,ARC,ZL,thetaE,thetaC,projMass,ringRadius,lensMap,ringMass,BUL,plummerSample,bulletBuild,bulletStep,bulletPeri,haloSep,haloSpeed,gasLag,massMap,plSigma,gasSigma');
let n = 0;
const rel = (a, b, tol, w) => assert(Math.abs(a / b - 1) <= tol, `${w || ''}: expected ${b}, got ${a}`);
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('constants equal demos/lib/constants.js; G = 4.3009 × 10⁻⁶ kpc (km/s)²/M☉', () => {
  assert.equal(c.C, VDC.c); assert.equal(c.GSI, VDC.G); assert.equal(c.KB, VDC.kB); assert.equal(c.MP, VDC.mp); assert.equal(c.WIEN_B, VDC.wienB);
  assert.equal(c.H0, VDC.H0); assert.equal(c.OM, VDC.Om0); assert.equal(c.MU, VDC.muICM); rel(c.PC, VDC.pc, 1e-15); rel(c.MSUN, VDC.Msun, 1e-15); assert.equal(c.YR, VDC.yr);
  rel(c.G, 4.3009e-6, 1e-4); rel(c.KMS, 1.02271e-3, 1e-5); near(c.SHARE.stars + c.SHARE.gas, 0.15, 1e-15);
});
group("the sphere: 10¹⁵ M☉ inside 2,000 kpc needs σ = 1,037 km/s; M(r) and the pull agree (g = GM/r²); the book's cluster (Ex12): 800 km/s at 2,000 kpc is 2.98 × 10¹⁴ M☉", () => {
  const s = c.sigmaFor(1e15); near(s, 1037.26, 0.01, 'σ'); rel(c.massInside(2000, s), 1e15, 1e-12, 'M(2,000)');
  for (const r of [10, 50, 300, 2000, 4000]) rel(c.accel(r, s), c.G * c.massInside(r, s) / (r * r) * c.KMS * c.KMS, 1e-12, 'g at ' + r);
  rel(800 * 800 * 2000 / c.G, 2.976e14, 1e-3, 'Ex12'); near(c.sigmaFor(800 * 800 * 2000 / c.G), 565.86, 0.01, 'σ for Ex12');
  rel(c.zwicky(s, 2000), 1e15 * (1 + 50 * 50 / 2000 / 2000), 1e-12, 'v²R/G with v = √2σ is 0.06% above M(R)');
});
group("Zwicky's swarm is steady: 1,000 tracers keep their energies (leapfrog, 10⁻⁴ over 3 Gyr) and the core keeps its galaxies; only the stars: it spreads", () => {
  const s = c.sigmaFor(1e15), a = c.sampleIso(1000, s, 7), cnt = (ps, r) => ps.filter((p) => Math.hypot(p.x, p.y, p.z) < r).length;
  const e0 = a.map((p) => c.isoEnergy(p, s, 1)), n500 = cnt(a, 500), n2000 = cnt(a, 2000); for (let i = 0; i < 3000; i++) c.stepIso(a, s, 1, 1);
  let worst = 0; a.forEach((p, i) => { worst = Math.max(worst, Math.abs(c.isoEnergy(p, s, 1) / e0[i] - 1)); }); assert(worst < 1e-4, 'energy drift ' + worst);
  rel(cnt(a, 500), n500, 0.1, 'galaxies inside 500 kpc steady'); rel(cnt(a, 2000), n2000, 0.08, 'inside 2,000 kpc (a slow leak at the sample edge, 5,000 kpc)');
  const b = c.sampleIso(1000, s, 7); for (let i = 0; i < 1000; i++) c.stepIso(b, s, c.PULL.stars, 1); assert(cnt(b, 500) < n500 / 10, 'stars only: the core empties in 1 Gyr ' + cnt(b, 500));
  const m = c.losSpread(c.sampleIso(1000, s, 7), 2000); assert.equal(m.n, 507); near(m.sig, 1069.7, 0.1, 'measured σ for seed 7'); rel(c.zwicky(m.sig, 2000), 1.064e15, 1e-3, 'Zwicky mass');
  let tot = 0, k = 0; for (const seed of [1, 2, 3, 4, 5, 6, 7, 8]) { tot += c.losSpread(c.sampleIso(1000, s, seed), 2000).sig ** 2; k++; } rel(Math.sqrt(tot / k), s, 0.02, 'σ_los = σ on average');
});
group('the hot gas: kT = μ m_p σ²: 7.82 × 10⁷ K (6.74 keV) for 10¹⁵ M☉; its hydrostatic mass equals the true mass; Wien 0.029 nm at 10⁸ K (Ex13)', () => {
  const s = c.sigmaFor(1e15), T = c.gasT(s); rel(T, 7.821e7, 1e-3, 'T'); near(c.KB * T / 1.602176634e-16, 6.739, 0.001, 'keV');
  for (const r of [20, 200, 2000]) rel(c.hydroMass(r, T), c.massInside(r, s), 1e-12, 'hydrostatic = true at ' + r);
  near(c.wien(1e8) * 1e9, 0.02898, 1e-5, 'Wien'); rel(c.sigmaForT(c.gasT(900)), 900, 1e-12); rel(c.massInside(2000, c.sigmaForT(1e8)), 1.279e15, 1e-3, '10⁸ K preset');
});
group('distances (Planck 2018, flat): D_C(1) = 3,401 Mpc; D_l(0.296) = 942 Mpc; D_s(1) = 1,701 Mpc; D_ls = 1,090 Mpc; 1″ = 4.57 kpc', () => {
  near(c.comoving(1), 3401.3, 0.5, 'D_C(1)'); near(c.angDist(0.296), 942.3, 0.2, 'D_l'); near(c.angDist(1), 1700.6, 0.3, 'D_s'); near(c.angDist12(0.296, 1), 1090.0, 0.3, 'D_ls');
  near(c.angDist(0.296) * 1000 / c.ARC, 4.569, 0.002, 'kpc per arcsec'); near(c.comoving(0.01), 0.01 * c.C / 1000 / c.H0, 0.3, 'Hubble law nearby');
});
group('lensing: θ_E = 19.9″, θ_c = 10.9″, ring at 16.6″ (75.9 kpc), mass inside 4.98 × 10¹³ M☉ both from the ring formula and the model; lens map round trip', () => {
  const s = c.sigmaFor(1e15), tE = c.thetaE(s, c.ZL, 1), tC = c.thetaC(c.ZL), r = c.ringRadius(tE, tC);
  near(tE, 19.89, 0.01, 'θ_E'); near(tC, 10.94, 0.01, 'θ_c'); near(r, 16.61, 0.01, 'ring');
  const rk = r / c.ARC * c.angDist(c.ZL) * 1000; near(rk, 75.86, 0.05, 'kpc'); rel(c.ringMass(r, c.ZL, 1), c.projMass(rk, s), 1e-9, 'ring mass = projected mass'); rel(c.projMass(rk, s), 4.978e13, 1e-3);
  const [bx, by] = c.lensMap(r, 0, tE, tC); near(Math.hypot(bx, by), 0, 1e-12, 'the ring maps to the center');
  assert.equal(c.ringRadius(c.thetaE(s * Math.sqrt(c.PULL.seen), c.ZL, 1), tC), 0, 'no ring from stars and gas alone');
  rel(c.projMass(1e6, s) / 1e6, Math.PI * s * s / c.G, 1e-6, 'far out, projected mass grows as π σ² R/G');
});
group('the Bullet model: Plummer sample energy (virial 2K = −W within 5%); closest pass at 937 Myr; 150 Myr later 618 kpc apart at 3,129 km/s, the small cluster gas 208 kpc behind; momentum kept', () => {
  const P = c.plummerSample(4000, 1e15, 300, 3); let K = 0; for (const p of P) K += 0.5 * (p.vx ** 2 + p.vy ** 2 + p.vz ** 2) / P.length; rel(2 * K, 3 * Math.PI * c.GU * 1e15 / (32 * 300), 0.05, 'virial');
  const B = c.bulletBuild(); near(B.peri, 937, 2, 'pericenter time'); const px = () => B.h[0].M * B.h[0].vx + B.h[1].M * B.h[1].vx, gx = () => B.gas[0].m * B.gas[0].vx + B.gas[1].m * B.gas[1].vx;
  const p0 = px(); while (B.t < B.peri + 150) c.bulletStep(B, 1);
  near(px(), p0, 1e-9 * B.h[0].M, 'halo momentum'); near(c.haloSep(B), 618, 5, 'separation'); near(c.haloSpeed(B), 3129, 10, 'speed'); near(c.gasLag(B), 208, 5, 'gas lag');
  const sx = B.h[1].x + 0, onGal = c.massMap(B, B.h[1].x, B.h[1].y, true) > c.massMap(B, B.gas[1].x, B.gas[1].y, true), onGas = c.massMap(B, B.gas[1].x, B.gas[1].y, false) > c.massMap(B, B.h[1].x, B.h[1].y, false);
  assert(onGal, 'with dark matter the map is higher on the galaxies'); assert(onGas, 'without, higher on the gas'); void sx;
  let s = 0; const d = 5; for (let x = -3000; x <= 3000; x += d) for (let y = -3000; y <= 3000; y += d) s += c.plSigma(x * x + y * y, 1, 30) * d * d; rel(s, 1, 2e-3, 'Plummer Σ adds up to M');
});
console.log(`all ${n} groups passed`);
