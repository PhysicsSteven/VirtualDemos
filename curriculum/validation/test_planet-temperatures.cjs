'use strict';
// Planet Temperatures and Habitable Zones: starlight at a distance, the energy balance against NASA's black body temperatures,
// the greenhouse factor and its layer models, the Kopparapu et al. 2014 zone edges, and the rule for keeping an atmosphere.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('planet-temperatures', 'SIGMA,LSUN,AU,KB,AMU,G,SPREAD,flux,tBare,tSurf,eFor,layers,seff,hzEdges,zoneOf,vrms,vEscape,keeps,youngSun,GHZ,ghzT,normCdf,snDose,feh,ghzFactors,ghzGrid');

let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
const abs = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b} ± ${tol}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('constants: IAU 2015 L☉, IAU 2012 au, CODATA 2022', () => {
  assert.strictEqual(c.LSUN, 3.828e26); assert.strictEqual(c.AU, 1.495978707e11);
  assert.strictEqual(c.SIGMA, 5.670374419e-8); assert.strictEqual(c.KB, 1.380649e-23); assert.strictEqual(c.AMU, 1.66053906892e-27);
  /* σ from its defining constants: 2π⁵k⁴/(15h³c²) */
  const h = 6.62607015e-34, cl = 299792458, k = 1.380649e-23; near(2 * Math.PI ** 5 * k ** 4 / (15 * h ** 3 * cl ** 2), c.SIGMA, 1e-9, 'σ');
});

group('starlight: 1361 W/m² at 1 AU (the fact sheets\' solar irradiance), inverse square', () => {
  abs(c.flux(1, 1), 1361.0, 0.5, 'S at 1 AU');
  near(c.flux(1, 2), c.flux(1, 1) / 4, 1e-12, 'twice as far'); near(c.flux(3, 1), 3 * c.flux(1, 1), 1e-12, 'three times as bright');
  /* NASA's irradiances: Venus 2601.3, Mars 586.2, Mercury 9082.7 W/m² at their semimajor axes */
  abs(c.flux(1, 108.210 / 149.598), 2601.3, 1.5, 'Venus'); abs(c.flux(1, 227.956 / 149.598), 586.2, 0.5, 'Mars'); abs(c.flux(1, 57.909 / 149.598), 9082.7, 5, 'Mercury');
});

group('energy balance against NASA\'s black body temperatures', () => {
  /* NASA: Venus 226.6 K (a 0.77), Mars 209.8 K (0.250), Moon 270.4 K (0.11), Mercury 439.6 K (0.068), Jupiter 109.9 K (0.343) */
  abs(c.tBare(1, 108.210 / 149.598, 0.77), 226.6, 0.2, 'Venus'); abs(c.tBare(1, 227.956 / 149.598, 0.25), 209.8, 0.2, 'Mars');
  abs(c.tBare(1, 1, 0.11), 270.4, 0.2, 'Moon'); abs(c.tBare(1, 57.909 / 149.598, 0.068), 439.6, 0.3, 'Mercury'); abs(c.tBare(1, 778.479 / 149.598, 0.343), 109.9, 0.2, 'Jupiter');
  /* Earth: the sheet's 254.0 K goes with its older albedo 0.306; with today's 0.294 the balance gives 255.1 K */
  abs(c.tBare(1, 1, 0.306), 254.0, 0.2, 'Earth, a = 0.306'); abs(c.tBare(1, 1, 0.294), 255.1, 0.1, 'Earth, a = 0.294');
  /* by hand: T⁴ = S(1 − a)/(4σ) */
  near(c.tBare(1, 1, 0.3) ** 4, c.flux(1, 1) * 0.7 / (4 * c.SIGMA), 1e-12, 'T⁴');
  /* heat shared over the day side: 2^¼ warmer; under the star: √2 warmer (the Moon at noon: 382 K against 390 K measured) */
  near(c.tBare(1, 1, 0.11, 'day') / c.tBare(1, 1, 0.11), 2 ** 0.25, 1e-12, 'day side'); near(c.tBare(1, 1, 0.11, 'sub') / c.tBare(1, 1, 0.11), Math.SQRT2, 1e-12, 'under the star');
  abs(c.tBare(1, 1, 0.11, 'sub'), 382.4, 0.2, 'Moon under the Sun'); abs(c.tBare(1, 57.909 / 149.598, 0.068, 'sub'), 621.7, 0.3, 'Mercury under the Sun');
  /* limits: a = 1 reflects everything; T ∝ d^(−½) and L^(¼) */
  assert.strictEqual(c.tBare(1, 1, 1), 0); near(c.tBare(1, 4, 0.3), c.tBare(1, 1, 0.3) / 2, 1e-12, 'd^(−½)'); near(c.tBare(16, 1, 0.3), 2 * c.tBare(1, 1, 0.3), 1e-12, 'L^¼');
});

group('greenhouse: e that matches Venus, Earth and Mars, and the layer models', () => {
  const tV = c.tBare(1, 108.210 / 149.598, 0.77), tE = c.tBare(1, 1, 0.294), tM = c.tBare(1, 227.956 / 149.598, 0.25);
  const eV = c.eFor(tV, 737), eE = c.eFor(tE, 288), eM = c.eFor(tM, 214);
  abs(c.tSurf(1, 108.210 / 149.598, 0.77, eV), 737, 1e-9, 'Venus matched'); abs(c.tSurf(1, 1, 0.294, eE), 288, 1e-9, 'Earth matched');
  abs(eV, 0.00894, 0.00002, 'Venus e'); abs(eE, 0.6156, 0.0005, 'Earth e'); abs(eM, 0.9237, 0.0008, 'Mars e');
  /* one layer: e = 1 − ε/2, so Earth's air absorbs ε = 2(1 − e) ≈ 77 %; Venus needs N = 1/e − 1 ≈ 111 opaque layers */
  abs(c.layers(eE).eps, 0.769, 0.001, 'Earth one layer'); abs(c.layers(eV).n, 110.9, 0.3, 'Venus layers');
  /* the layer models from their own energy balance: one gray layer at T_a with absorptivity ε, transparent to sunlight */
  for (const eps of [0.2, 0.5, 0.77, 1]) { const Ts4 = 1, Ta4 = Ts4 / 2, olr = (1 - eps) * Ts4 + eps * Ta4; near(1 - c.layers(olr).eps / 2, olr, 1e-12, `one layer ε = ${eps}`); near(c.layers(olr).eps, eps, 1e-12, `ε back, ${eps}`); }
  /* N opaque layers: layer k radiates σT_k⁴ = k σT_top⁴ counting down from the top, the ground (N + 1) σT_top⁴ */
  for (const N of [2, 5, 110]) near(c.layers(1 / (N + 1)).n, N, 1e-9, `N = ${N}`);
  /* the warming the greenhouse adds: Earth 33 K, Venus 510 K, Mars 4 K */
  abs(288 - tE, 32.9, 0.2, 'Earth warming'); abs(737 - tV, 510.4, 0.3, 'Venus warming'); abs(214 - tM, 4.2, 0.2, 'Mars warming');
});

group('habitable zone: Kopparapu et al. 2014 edges for the Sun', () => {
  /* the published S_eff at 5780 K and their distances for the Sun (their 2014 paper: 0.95, 1.67 AU conservative; 0.75, 1.77 AU optimistic) */
  near(c.seff('rg', 5780), 1.107, 1e-12, 'runaway'); near(c.seff('mg', 5780), 0.356, 1e-12, 'maximum greenhouse');
  const z = c.hzEdges(1, 5772);
  abs(z.rv, 0.750, 0.002, 'recent Venus'); abs(z.rg, 0.951, 0.002, 'runaway greenhouse'); abs(z.mg, 1.676, 0.003, 'maximum greenhouse'); abs(z.em, 1.768, 0.003, 'early Mars');
  /* edges scale as √L at a fixed star temperature */
  const z4 = c.hzEdges(4, 5772); near(z4.rg, 2 * z.rg, 1e-12, '√L');
  /* cooler stars: the inner edge needs less light (S_eff falls), outside the fit's range the temperature is held at 2600 or 7200 K */
  assert(c.seff('rg', 3000) < c.seff('rg', 5780)); assert.strictEqual(c.seff('rg', 2400), c.seff('rg', 2600)); assert.strictEqual(c.seff('mg', 9000), c.seff('mg', 7200));
  assert.strictEqual(c.zoneOf(1, z), 'cons'); assert.strictEqual(c.zoneOf(0.723, z), 'hot'); assert.strictEqual(c.zoneOf(1.524, z), 'cons'); assert.strictEqual(c.zoneOf(1.72, z), 'optOut'); assert.strictEqual(c.zoneOf(5.2, z), 'cold');
  /* Proxima b and TRAPPIST-1 e sit inside their stars' conservative zones */
  const zp = c.hzEdges(10 ** -2.82, 2900), zt = c.hzEdges(10 ** -3.26, 2566);
  assert.strictEqual(c.zoneOf(0.04848, zp), 'cons', 'Proxima b'); assert.strictEqual(c.zoneOf(0.02925, zt), 'cons', 'TRAPPIST-1 e');
});

group('keeping an atmosphere: 6 v_rms against escape speed', () => {
  /* N₂ at 288 K: √(3kT/m) = 506.4 m/s by hand */
  abs(c.vrms(288, 28.014), 506.4, 0.2, 'N₂ at 288 K'); near(c.vrms(4 * 288, 28.014), 2 * c.vrms(288, 28.014), 1e-12, '√T');
  /* Titan's escape speed from the fact sheet's mass and radius: 2.64 km/s; Earth's from GM and radius: 11.19 km/s */
  abs(c.vEscape(1345.5e20, 2575e3), 2641, 2, 'Titan'); abs(Math.sqrt(2 * 0.39860e15 / 6371.0e3), 11186, 6, 'Earth');
  /* Earth at 288 K keeps N₂, O₂, H₂O and CO₂ and (just) loses H₂; the Moon at 390 K keeps nothing; Titan at 94 K keeps N₂ and CH₄ */
  for (const m of [28.014, 31.998, 18.015, 44.009, 4.0026]) assert(c.keeps(11186, 288, m), `Earth keeps ${m}`); assert(!c.keeps(11186, 288, 2.016), 'Earth loses H₂');
  for (const m of [2.016, 4.0026, 16.043, 18.015, 28.014, 31.998, 44.009]) assert(!c.keeps(2380, 390, m), `Moon loses ${m}`);
  assert(c.keeps(2641, 93.65, 28.014) && c.keeps(2641, 93.65, 16.043) && !c.keeps(2641, 93.65, 2.016), 'Titan');
});

group('the young Sun (Gough 1981)', () => {
  near(c.youngSun(4.57), 1, 1e-12, 'today'); abs(c.youngSun(0), 0.7143, 0.0001, 'at birth'); abs(c.youngSun(0.57), 0.7407, 0.0001, '4 billion years ago');
  /* Earth then, today's albedo and greenhouse: 288 × 0.7407^¼ = 267 K */
  abs(288 * c.youngSun(0.57) ** 0.25, 267.2, 0.1, 'faint young Earth');
});

group('galactic habitable zone: the simplified Lineweaver, Fenner and Gibson 2004 model', () => {
  const o = { g: -0.06, pE: 0.5, tLife: 4 };
  /* Φ against tabulated values */
  abs(c.normCdf(0), 0.5, 1e-7, 'Φ(0)'); abs(c.normCdf(1.959964), 0.975, 2e-7, 'Φ(1.96)'); abs(c.normCdf(-1), 0.1586553, 2e-7, 'Φ(−1)');
  /* the Sun: solar metals, Earth's own supernova dose, so P = (1 − 0.03)(0.5)Φ(0.57) */
  const s = c.ghzFactors(c.GHZ.R0, c.GHZ.tSun, o);
  abs(s.feh, 0, 1e-12, '[Fe/H] of the Sun'); abs(s.Nrel, 1, 1e-12, 'dose at the Sun'); abs(s.pm, 1, 1e-12, 'P metals');
  abs(s.pk, 0.97, 1e-12, 'P safe'); abs(s.ps, 0.5, 1e-12, 'P SN'); abs(s.p, 0.97 * 0.5 * c.normCdf(0.57), 1e-12, 'P of the Sun');
  /* limits: born too recently, no complex life yet; at the floor of metals, almost no planets; a stronger gradient makes the inside richer */
  assert(c.ghzFactors(8.2, 0.5, o).pt < 1e-3, 'too young'); abs(c.feh(30, 0.01, -0.06), -2, 1e-12, 'metal floor');
  assert(c.feh(4, c.ghzT(), -0.08) > c.feh(4, c.ghzT(), -0.04), 'gradient'); assert(c.ghzFactors(3, 6, o).ps < c.ghzFactors(12, 6, o).ps, 'more supernovae inward');
  /* P_SN is (1 − p_E)^N exactly */
  const q = c.ghzFactors(5, 7, o); abs(q.ps, Math.pow(1 - o.pE, q.Nrel), 1e-12, 'P SN power law');
  /* the grid: the 68% zone holds at least 68% of H and lies inside the 95% zone, around the Sun's radius */
  const G = c.ghzGrid(o); let all = 0, in68 = 0; for (let k = 0; k < G.H.length; k++) { all += G.H[k]; if (G.H[k] >= G.lev[0.68]) in68 += G.H[k]; }
  assert(in68 / all >= 0.68 && in68 / all < 0.70, `68% set holds ${in68 / all}`);
  assert(G.z95.R[0] <= G.z68.R[0] && G.z95.R[1] >= G.z68.R[1], '68 inside 95'); assert(G.z68.R[0] < 8.2 && G.z68.R[1] > 8.2, 'Sun inside the zone');
  assert(G.share > 0 && G.share < 0.2 && G.older > 0.5 && G.older < 1, `share ${G.share}, older ${G.older}`);
});

console.log(`${n} groups passed`);
