'use strict';
// Rotation Curves: modified Bessel functions against mpmath, the exponential disk (Freeman 1970) peak at 2.15 R_d and its
// Keplerian tail, enclosed masses against the densities (dM/dr = 4πr²ρ), the halo limits, the NFW peak at 2.163 r_s,
// unit conversions, the terminal velocity method, and the planets (Kepler's third law).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('rotation-curves', 'G,MYR,G_AU,besselI,besselK,diskF,vDisk2,mDisk,vHern2,mHern,mIso,mNfw,vIso2,vNfw2,rhoIso,rhoNfw,rhoHern,DISK_YPK,NFW_XPK,vTotal,mDyn,periodMyr,vKepler,isoAsym,dopplerNm,terminalV,vPlanet,periodYr,PLANETS');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(Math.abs(b), 1e-300), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('I₀, I₁, K₀, K₁ against mpmath to 1e-12', () => {
  const ref = { 0.3: [1.0226268793516, 0.151693840003593, 1.3724600605443, 3.05599203345733], 1: [1.26606587775201, 0.565159103992485, 0.421024438240708, 0.601907230197235],
    2.5: [3.28983914405012, 2.5167162452887, 0.0623475532003662, 0.0738908163477471], 7: [168.59390851029, 156.039092869955, 0.000424795741869232, 0.000454182486884897],
    30: [781672297823.978, 768532038938.957, 2.13247749646306e-14, 2.16773200189155e-14] };
  for (const [x, v] of Object.entries(ref)) {
    near(c.besselI(0, +x), v[0], 1e-12, `I0(${x})`); near(c.besselI(1, +x), v[1], 1e-12, `I1(${x})`);
    near(c.besselK(0, +x), v[2], 1e-12, `K0(${x})`); near(c.besselK(1, +x), v[3], 1e-12, `K1(${x})`);
  }
});

group('exponential disk: the curve peaks at R = 2.150 R_d with y²(I₀K₀ − I₁K₁) = 0.19352, and falls to Keplerian far out', () => {
  near(2 * c.DISK_YPK, 2.15005354513951, 1e-7); near(c.diskF(c.DISK_YPK), 0.193522701487953, 1e-10);
  const M = 5e10, Rd = 3;
  near(c.vDisk2(60 * Rd, M, Rd), c.G * M / (60 * Rd), 2e-3, 'Keplerian at 60 R_d');
  near(c.mDisk(1e3, M, Rd), M, 1e-12); near(c.mDisk(Rd, M, Rd), M * (1 - 2 / Math.E), 1e-14, 'M(<R_d) = 26.4%');
  // a disk spins faster at its peak than a sphere of the same enclosed mass would (Binney and Tremaine §2.6)
  const Rp = 2 * c.DISK_YPK * Rd; assert(c.vDisk2(Rp, M, Rd) > c.G * c.mDisk(Rp, M, Rd) / Rp);
});

group('spherical parts: v² = G M(<r)/r and dM/dr = 4πr²ρ (Hernquist, isothermal core, NFW), checked by differencing', () => {
  const cases = [['Hernquist', (r) => c.mHern(r, 1e10, 0.7), (r) => c.rhoHern(r, 1e10, 0.7), (r) => c.vHern2(r, 1e10, 0.7)],
    ['isothermal', (r) => c.mIso(r, 3e7, 4), (r) => c.rhoIso(r, 3e7, 4), (r) => c.vIso2(r, 3e7, 4)],
    ['NFW', (r) => c.mNfw(r, 8e6, 20), (r) => c.rhoNfw(r, 8e6, 20), (r) => c.vNfw2(r, 8e6, 20)]];
  for (const [name, M, rho, v2] of cases) for (const r of [0.05, 0.5, 3, 15, 60]) {
    const h = r * 1e-5; near((M(r + h) - M(r - h)) / (2 * h), 4 * Math.PI * r * r * rho(r), 1e-7, `${name} dM/dr at ${r}`);
    near(v2(r), c.G * M(r) / r, 1e-14, `${name} v²`);
  }
  near(c.mHern(1e7, 1e10, 0.7), 1e10, 1e-6, 'Hernquist total mass');
  // small radius series branches join the closed forms
  near(c.mIso(4e-3 * 0.999, 3e7, 4), c.mIso(4e-3 * 1.001, 3e7, 4) * Math.pow(0.999 / 1.001, 3), 1e-5, 'iso series');
  near(c.mNfw(20e-4 * 0.999, 8e6, 20), c.mNfw(20e-4 * 1.001, 8e6, 20) * Math.pow(0.999 / 1.001, 2), 1e-3, 'NFW series');
});

group('halos: the isothermal curve flattens to √(4πGρ₀) r_c, the NFW curve peaks at 2.163 r_s', () => {
  near(Math.sqrt(c.vIso2(4e4, 3e7, 4)), c.isoAsym(3e7, 4), 1e-3); near(c.NFW_XPK, 2.16258158706461, 1e-7);
});

group('units: G in kpc (km/s)²/M☉ from GM☉ and the parsec, 977.8 Myr per kpc/(km/s), Earth at 29.78 km/s, Kepler’s third law', () => {
  near(c.G, 1.32712440018e20 / 3.0856775814913673e19 / 1e6, 1e-5); near(c.MYR, 977.79, 1e-5);
  near(c.vPlanet(1), 29.78, 1e-3); near(c.vKepler(8, 1e11), Math.sqrt(c.G * 1e11 / 8), 0);
  // a 1 AU orbit takes the Gaussian year, 365.2569 days
  near(c.periodYr(1) * 365.25, 365.2568983, 1e-7);
  for (const [, a] of c.PLANETS) near(c.periodYr(a), Math.pow(a, 1.5) * c.periodYr(1), 1e-12, 'T ∝ a^{3/2}');
  near(c.periodMyr(8.2, 230), 2 * Math.PI * 8.2 * 3.0856775814913673e16 / 230 / 3.15576e13, 1e-12, 'Sun’s galactic year ≈ 219 Myr');
  near(c.mDyn(230, 8.2), 230 * 230 * 8.2 / c.G, 0); near(c.dopplerNm(200, 656.28), 656.28 * 200 / 299792.458, 1e-15);
});

group('terminal velocity method: a flat curve gives v₀ at every slit position; a rising curve gives v(x) at the tangent point', () => {
  for (const x of [1, 4, 9]) near(c.terminalV(() => 220, x, 15), 220, 1e-9, `flat, x ${x}`);
  // solid body: v = Ωr, line of sight speed Ω x everywhere along the sightline
  near(c.terminalV((R) => 20 * R, 5, 15), 100, 1e-9, 'solid body');
  // general monotonically rising curve: the maximum is at the tangent point R = x
  near(c.terminalV((R) => 200 * R / (R + 2), 6, 20), 200 * 6 / 8, 1e-9);
  assert(Number.isNaN(c.terminalV(() => 220, 16, 15)));
});

group('model sum: the total curve adds the parts in quadrature', () => {
  const P = { b: { on: true, M: 1e10, a: 0.7 }, d: { on: true, M: 5e10, R: 3 }, g: { on: true, M: 1e10, R: 6 }, h: { on: true, type: 'nfw', rho: 8e6, r: 20 } };
  const r = 8; near(c.vTotal(P, r) ** 2, c.vHern2(r, 1e10, 0.7) + c.vDisk2(r, 5e10, 3) + c.vDisk2(r, 1e10, 6) + c.vNfw2(r, 8e6, 20), 1e-14);
});

console.log(`${n} rotation curves test groups passed`);
