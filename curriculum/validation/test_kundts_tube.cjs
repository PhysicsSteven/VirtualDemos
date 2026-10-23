'use strict';
// Kundt's tube: a rod ringing at f = n v_rod/(2L), v_rod = √(E/ρ); a driven gas column S(x) = a sin(κ(ℓ − x))/sin(κℓ) whose nodes are
// λ/2 apart; v_gas = 2 d f and v_rod/v_gas = (L/n)/d (OpenStax Vol 1 §17.2, §17.4).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('kundts-tube', 'GASES,RODS,ALPHA,LIFT,gasSpeed,rodSpeed,rodFreq,ampRatio,gain,nodes,resonantL,fitLine,readingsCSV');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const steel = c.RODS.steel, vS = c.rodSpeed(steel), air = c.gasSpeed(c.GASES.air, 20);

group('rod: v = √(E/ρ), steel 5048 m/s; 1.00 m clamped at the middle rings at 2524 Hz, at L/4 at twice that', () => {
  near(vS, Math.sqrt(200e9 / 7850), 1e-12); near(vS, 5047.5, 1e-4); near(c.rodFreq(1, 1, vS), 2523.8, 1e-4); near(c.rodFreq(2, 1, vS), 2 * c.rodFreq(1, 1, vS), 1e-12);
  near(c.rodSpeed(c.RODS.brass), 3430.0, 1e-4); near(c.rodSpeed({ v: 4000 }), 4000, 0);
  near(air, 343.23, 1e-4);
});
group('gas column: S = a at the disc, 0 at the plunger, and |S| matches a sin(κ(ℓ − x))/sin(κℓ) with κ = ω/v − iα', () => {
  const f = c.rodFreq(1, 1, vS), l = 0.873;
  near(c.ampRatio(0, f, air, l), 1, 1e-12); assert(c.ampRatio(l, f, air, l) < 1e-12);
  /* |S|² = (sin²(ps) + sinh²(αs))/norm with s = ℓ − x: check against the complex form a sin(κs)/sin(κℓ) */
  const p = 2 * Math.PI * f / air, cs = (re, im) => [Math.sin(re) * Math.cosh(im), Math.cos(re) * Math.sinh(im)];
  for (const x of [0.1, 0.33, 0.6]) { const a = cs(p * (l - x), -c.ALPHA * (l - x)), b = cs(p * l, -c.ALPHA * l); near(c.ampRatio(x, f, air, l), Math.hypot(...a) / Math.hypot(...b), 1e-12); }
});
group('resonance: the plunger resonates just under ℓ = mλ/2, gain about 1/sinh(αℓ), and 1 cm off it the dust stays put', () => {
  const f = c.rodFreq(1, 1, vS), half = air / f / 2;
  for (const m of [5, 10, 15, 20]) {
    const l = c.resonantL(m, f, air); assert(l <= m * half && m * half - l < 1e-5, `m = ${m}`);
    const G = c.gain(f, air, l); near(G, Math.cosh(c.ALPHA * l) / Math.sinh(c.ALPHA * l), 2e-3, `gain at m = ${m}`);
    assert(c.gain(f, air, l + 0.01) < c.LIFT && c.gain(f, air, l - 0.01) < c.LIFT, `1 cm off at m = ${m}`);
  }
  /* gain agrees with a dense scan */
  for (const l of [0.5, 0.7777, 1.02]) { let m = 0; for (let i = 0; i <= 20000; i++) m = Math.max(m, c.ampRatio(l * i / 20000, f, air, l)); near(c.gain(f, air, l), m, 1e-6, `gain at ${l}`); }
});
group('nodes are λ/2 apart: steel in air 6.80 cm, in helium 19.96 cm; v_gas = 2 d f and v_rod/v_gas = L/(n d)', () => {
  const f = c.rodFreq(1, 1, vS);
  for (const [gas, d0] of [['air', 0.0680], ['helium', 0.1996], ['argon', 0.0632]]) {
    const v = c.gasSpeed(c.GASES[gas], 20), l = c.resonantL(Math.round(1 / (v / f / 2)), f, v), ns = c.nodes(f, v, l);
    for (let i = 1; i < ns.length; i++) near(ns[i] - ns[i - 1], v / f / 2, 1e-4, `${gas} spacing`);
    near(v / f / 2, d0, 2e-3, `${gas} λ/2`);
    const F = c.fitLine(ns.map((_, i) => i + 1), ns); near(2 * F.b * f, v, 1e-4); near(vS / v, 1 / F.b, 1e-4);
  }
});
group('CSV columns', () => {
  const csv = c.readingsCSV([{ j: '1', x: '6.8', rod: 'Steel', L: '1.00', n: '1', f: '2524', gas: 'Air (dry)', T: '20', l: '1.020' }], { version: 'x' }).split('\n');
  assert(csv.includes('row,pile,x_cm,rod,L_rod_m,n,f_Hz,gas,T_C,plunger_m') && csv.includes('1,1,6.8,Steel,1.00,1,2524,Air (dry),20,1.020'));
});
console.log(`${n} groups passed`);
