'use strict';
// Craters, Cooling and Surface Ages: crater scaling (Collins, Melosh and Marcus 2005), the lunar and Martian crater clocks
// (Neukum, Ivanov and Hartmann 2001; Ivanov 2001; Hartmann and Neukum 2001), the simulated surfaces and the cooling model.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('craters', 'BODIES,transitionD,peakRingD,transientD,crater,craterHeight,craterAt,pfRatio,N1,density,ageFrom,surface,countIn,heatAt,heatFlux,cooling,PLANETS,MANTLE');

let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('transient crater: the Collins et al. formula term by term, and its powers of L, v, g and the densities', () => {
  const D = c.transientD(1000, 2e4, 3000, 2700, 9.81, 45);
  const byHand = 1.161 * Math.cbrt(3000 / 2700) * Math.pow(1000, 0.78) * Math.pow(2e4, 0.44) * Math.pow(9.81, -0.22) * Math.cbrt(Math.sin(Math.PI / 4));
  near(D, byHand, 1e-12, 'formula');
  near(c.transientD(2000, 2e4, 3000, 2700, 9.81, 45) / D, Math.pow(2, 0.78), 1e-12, 'L^0.78');
  near(c.transientD(1000, 4e4, 3000, 2700, 9.81, 45) / D, Math.pow(2, 0.44), 1e-12, 'v^0.44');
  near(c.transientD(1000, 2e4, 3000, 2700, 9.81 / 6, 45) / D, Math.pow(6, 0.22), 1e-12, 'g^−0.22');
  near(c.transientD(1000, 2e4, 3000, 2700, 9.81, 90) / D, Math.cbrt(1 / Math.sin(Math.PI / 4)), 1e-12, 'sin^(1/3)');
});

group('final crater: simple 1.25 D_tc below D_c with d/D near 0.21 (Collins breccia lens), complex 1.17 D_tc^1.13/D_c^0.13 above', () => {
  const s = c.crater(100, 2e4, 3000, 'earth', 45);
  assert.equal(s.form, 'simple'); near(s.D, 1.25 * s.Dtc, 1e-12, 'simple D'); near(s.d / s.D, 0.2128, 2e-3, 'simple depth/diameter');
  const k = c.crater(1000, 2e4, 3000, 'earth', 45);
  assert.equal(k.form, 'complex'); near(k.D, 1.17 * Math.pow(k.Dtc, 1.13) / Math.pow(3200, 0.13), 1e-12, 'complex D');
  near(k.d, 400 * Math.pow(k.D / 1000, 0.3), 1e-12, 'Earth complex depth 0.4 D^0.3');
  const m = c.crater(5000, 1.8e4, 3000, 'moon', 45);
  near(m.d, 1044 * Math.pow(m.D / 1000, 0.3), 2e-3, 'Moon complex depth ≈ Pike 1.044 D^0.301 (at D ≈ 100 km)');
  near(m.Mt, 0.5 * 3000 * Math.PI * 5000 ** 3 / 6 * 1.8e4 ** 2 / 4.184e15, 1e-12, 'energy in Mt of TNT');
});

group('transitions scale as 1/g: 3.2 km on Earth, 19.4 km on the Moon, about 8.5 km on Mars; peak rings from 200 km on the Moon', () => {
  near(c.transitionD(9.81), 3200, 1e-12); near(c.transitionD(1.62), 19378, 1e-3); near(c.transitionD(3.71), 8461, 1e-3);
  near(c.peakRingD(1.62), 200e3, 1e-12); near(c.peakRingD(3.71), 87.3e3, 1e-3, 'Mars, against the smallest peak ring basin seen, 101 km');
});

group('presets land near the real craters: Meteor Crater 1.2 km, Tycho 85, Copernicus 93, Chicxulub 180, Mead 270 km', () => {
  for (const [L, v, r, b, th, want, tol] of [[40, 1.2e4, 8000, 'earth', 45, 1.2e3, 0.05], [6000, 1.8e4, 3000, 'moon', 45, 85e3, 0.05], [6500, 1.8e4, 3000, 'moon', 45, 93e3, 0.05],
    [15000, 2e4, 3000, 'earth', 60, 180e3, 0.05], [26000, 2e4, 3000, 'venus', 45, 270e3, 0.05]]) near(c.crater(L, v, r, b, th).D, want, tol, `${b} ${L} m`);
  assert.equal(c.crater(15000, 2e4, 3000, 'earth', 60).form, 'ring');
});

group('crater shapes: rim at the edge, floor at rim − depth, ejecta falling as r^−3, and the impact ends on the final shape', () => {
  for (const cr of [c.crater(100, 2e4, 3000, 'moon', 45), c.crater(5000, 2e4, 3000, 'moon', 45), c.crater(40000, 2e4, 3000, 'moon', 45)]) {
    near(c.craterHeight(cr, cr.D / 2), cr.h, 1e-9, 'rim'); near(c.craterHeight(cr, cr.D), cr.h / 8, 1e-9, 'ejecta at 2R');
    if (cr.form !== 'complex') near(c.craterHeight(cr, cr.form === 'simple' ? 0 : cr.D * 0.1), cr.h - cr.d, 1e-6, 'floor');
    for (const r of [0, cr.D * 0.2, cr.D * 0.7]) near(c.craterAt(cr, 1, r) + 1e-9, c.craterHeight(cr, r) + 1e-9, 1e-9, 'end of the impact');
  }
});

group('crater clocks: N(1) as published; the production functions give N(1)/N(1) = 1, and the Mars a₀ equals the clock\'s linear term', () => {
  near(c.N1('moon', 1), 5.44e-14 * (Math.exp(6.93) - 1) + 8.38e-4, 1e-12); near(c.N1('mars', 3.5), 2.68e-14 * (Math.exp(6.93 * 3.5) - 1) + 4.13e-4 * 3.5, 1e-12);
  near(c.pfRatio('moon', 1), 1, 1e-12); near(c.pfRatio('mars', 1), 1, 1e-12);
  near(Math.pow(10, -3.384), 4.13e-4, 1e-3, 'Ivanov a₀'); near(2.68e-14 / 5.44e-14, 4.13e-4 / 8.38e-4, 2e-3, 'Mars clock = Moon clock scaled');
  near(c.pfRatio('moon', 10), Math.pow(10, -2.260026), 1e-5, 'lunar N(10)/N(1)');
  for (const T of [0.1, 1, 3.5, 4.2]) near(c.ageFrom('moon', 2, c.density('moon', 2, T)), T, 1e-9, `age back from density at ${T}`);
  assert.equal(c.ageFrom('moon', 1, 100), null);
});

group('simulated surfaces: the count matches the clock within 3√N on young surfaces; old highlands fall short (saturation)', () => {
  for (const [b, T, L, Dmin, Dc] of [['moon', 3.7, 60, 0.5, 1], ['moon', 0.8, 20, 0.1, 0.25], ['mars', 3.5, 150, 0.5, 1], ['mars', 0.15, 12, 0.05, 0.1]]) {
    let tot = 0, want = 0; for (let seed = 1; seed <= 8; seed++) { const s = c.surface(b, T, L, Dmin, L / 2, seed); tot += c.countIn(s, Dc); want += c.density(b, Dc, T) * L * L; }
    assert(Math.abs(tot - want) < 3 * Math.sqrt(want) + 0.04 * want, `${b} ${T} Gyr: ${tot} against ${want.toFixed(1)}`);
  }
  const s = c.surface('moon', 4.3, 200, 2, 100, 1), got = c.countIn(s, 8), prod = c.density('moon', 8, 4.3) * 200 * 200;
  assert(got < 0.7 * prod, `highlands saturate: ${got} against ${prod.toFixed(0)}`);
  const a = c.surface('moon', 3.7, 60, 0.5, 30, 5), b2 = c.surface('moon', 3.7, 60, 0.5, 30, 5);
  assert.deepStrictEqual(a.list.map((q) => q.D), b2.list.map((q) => q.D), 'same seed, same surface');
});

group('radioactive heat: 4.92 pW/kg today (bulk silicate Earth, about 20 TW in Earth\'s mantle), 4.8 times more 4.5 Gyr ago', () => {
  near(c.heatAt(0), 4.921e-12, 1e-3); near(c.heatAt(4.5e9) / c.heatAt(0), 4.766, 1e-2);
  const P = c.PLANETS.earth, M = P.rho * 4 / 3 * Math.PI * (P.R ** 3 - P.Rc ** 3); near(c.heatAt(0) * M / 1e12, 20.1, 0.02, 'TW');
});

group('cooling: energy is conserved step by step, and the small world ends cooler with the thicker lid: Moon > Mars > Earth', () => {
  const rows = { moon: c.cooling('moon', 2000, 5), mars: c.cooling('mars', 2000, 5), earth: c.cooling('earth', 2000, 5) };
  for (const k in rows) { const P = c.PLANETS[k], M = P.rho * 4 / 3 * Math.PI * (P.R ** 3 - P.Rc ** 3), r = rows[k], dt = 5e6 * 3.15576e7;
    let e = 0; for (let i = 0; i < r.length - 1; i++) e += (r[i].made - r[i].lost + r[i + 1].made - r[i + 1].lost) / 2 * dt;
    near(M * c.MANTLE.c * (r[r.length - 1].T - 2000), e, 2e-3, `${k} energy`); }
  const now = (k) => rows[k][rows[k].length - 1];
  assert(now('moon').lid > now('mars').lid && now('mars').lid > now('earth').lid, 'lids');
  assert(now('moon').T < now('mars').T && now('mars').T < now('earth').T, 'temperatures');
  assert(now('moon').q > 0.008 && now('moon').q < 0.025, `Moon today ${now('moon').q} W/m² (Apollo: 0.014 to 0.021)`);
  near(now('earth').lid, c.MANTLE.k * (now('earth').T - 288) / now('earth').q, 1e-12, 'lid = kΔT/q');
});

console.log(`${n} groups passed`);
