'use strict';
// Temperature and Heat: equilibrium of two bodies joined by a bar, the gas thermometer, expansion, conduction through layers.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('temperature', 'C0,cToF,fToC,cToK,kToC,SPECIFIC,CONDUCT,BAR_A,eqState,BATHS,gasP,gasT,follow,EXPAND,LIQUIDS,waterRho,rodDL,liquidVol,capH,CAP_A,FILMS,wallState');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)) || Math.abs(a - b) <= 1e-9, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('scales: 25 °C = 77 °F = 298.15 K; −40 is the same on both; 0 K = −273.15 °C (OpenStax §1.2)', () => {
  near(c.cToF(25), 77, 1e-12); near(c.cToK(25), 298.15, 1e-12); near(c.cToF(-40), -40, 1e-12); near(c.fToC(212), 100, 1e-12); near(c.kToC(0), -273.15, 1e-12);
});
group('equilibrium: OpenStax Example 1.7 numbers (0.250 kg water at 20 °C, 0.500 kg aluminum at 150 °C) end at 59.1 °C', () => {
  const p = { mA: 0.5, cA: 900, mB: 0.25, cB: 4186, TA0: 150, TB0: 20, k: 390, L: 0.1 }, s = c.eqState(p, 1e6);
  near(s.Tf, 59.1, 2e-3, 'Tf'); near(s.TA, s.Tf, 1e-9, 'TA at the end'); near(s.TB, s.Tf, 1e-9, 'TB at the end');
});
group('equilibrium: heat lost by A equals heat gained by B at every time; ΔT decays with 1/τ = (kA/L)(1/CA + 1/CB)', () => {
  const p = { mA: 0.5, cA: 900, mB: 0.25, cB: 4186, TA0: 90, TB0: 20, k: 390, L: 0.1 };
  for (const t of [0, 10, 100, 500]) { const s = c.eqState(p, t); near(s.CA * (p.TA0 - s.TA), s.CB * (s.TB - p.TB0), 1e-9, `energy at ${t} s`);
    const G = 390 * c.BAR_A / 0.1, tau = 1 / (G * (1 / 450 + 1 / 1046.5)); near(s.tau, tau, 1e-12, 'tau'); near(s.TA - s.TB, 70 * Math.exp(-t / tau), 1e-9, 'difference'); }
  const a = c.eqState(p, 0), b = c.eqState(p, 1e-3); near((b.TB - a.TB) * a.CB / 1e-3, a.P, 1e-4, 'P = C_B dT_B/dt');
});
group('gas thermometer: P ∝ absolute temperature, zero at −273.15 °C; fixed points; reading back gives the bath', () => {
  const n = 0.02, P0 = c.gasP(n, 0), P100 = c.gasP(n, 99.974);
  near(P0, 0.02 * 8.314462618 * 273.15 / 1e-3, 1e-12, 'P at ice point');
  const slope = (P100 - P0) / 99.974; near(-P0 / slope, -273.15, 1e-9, 'extrapolated zero');
  near(c.gasT(c.gasP(n, 37.2), n), 37.2, 1e-12, 'inverse'); near(c.BATHS.ln2.T, -195.795, 1e-9, 'LN2');
  near(c.follow(20, 0, 12), 20 * Math.exp(-1), 1e-12, 'time constant 12 s');
});
group('rod: OpenStax Example 1.2 steel, 1275 m over 55 °C grows 0.84 m (ΔL = αLΔT); 1 m of aluminum over 80 °C grows 2.000 mm', () => {
  near(c.EXPAND.steel.a * 1275 * 55, 0.8415, 1e-9); near(c.rodDL('aluminum', 100), 2.0, 1e-12); near(c.rodDL('invar', 20), 0, 1e-12);
});
group('water: densest near 3.98 °C (999.975 kg/m³), 998.207 at 20 °C, 992.2 at 40 °C (Tanaka 2001)', () => {
  let best = 0, bt = 0; for (let t = 0; t <= 10; t += 0.001) { const r = c.waterRho(t); if (r > best) { best = r; bt = t; } }
  near(bt, 3.983, 2e-3, 'T of max'); near(best, 999.97495, 1e-8, 'max density'); near(c.waterRho(20), 998.2067, 1e-6, '20 °C'); near(c.waterRho(40), 992.2152, 1e-5, '40 °C');
});
group('flask: zero at 20 °C; ethanol 1100e-6 from 20 to 30 °C rises 5000(0.011 − 0.00009)/0.7854 mm; water\'s level is lowest at 4.55 °C, a little above its density maximum, because the Pyrex flask grows too', () => {
  near(c.capH('water', 20), 0, 1e-9, 'zero'); near(c.capH('ethanol', 30), 5000 * (0.011 - 9e-5) / (Math.PI / 4), 1e-12, 'ethanol');
  let lo = Infinity, lt = 0; for (let t = 0; t <= 10; t += 0.01) { const h = c.capH('water', t); if (h < lo) { lo = h; lt = t; } }
  assert(lt > 4.45 && lt < 4.65, `water minimum level at ${lt}`);
});
group('conduction: OpenStax Example 1.10 icebox (46.6 W) and Example 1.11 rods in series (41.3 °C joint, 1.47 W)', () => {
  const ice = c.wallState({ A: 0.95, Tin: 35, Tout: 0, Rin: 0, Rout: 0, layers: [{ mat: 'foam', d: 0.025 }] }); near(ice.P, 46.55, 1e-9, 'icebox');
  const rods = c.wallState({ A: Math.PI * 0.005 * 0.005, Tin: 100, Tout: 20, Rin: 0, Rout: 0, layers: [{ mat: 'steel', d: 0.25 }, { mat: 'aluminum', d: 0.25 }] });
  near(rods.T[2], 41.33, 1e-3, 'joint'); near(rods.P, 1.4745, 1e-3, 'power'); near(rods.at(0.25), rods.T[2], 1e-12, 'probe at the joint');
});
group('conduction: series resistances add; films; the temperature is continuous and drops in proportion to each R', () => {
  const w = { A: 1, Tin: 20, Tout: -5, Rin: 0.12, Rout: 0.03, layers: [{ mat: 'plaster', d: 0.013 }, { mat: 'glasswool', d: 0.09 }, { mat: 'brick', d: 0.1 }] }, s = c.wallState(w);
  const R = 0.12 + 0.013 / 0.16 + 0.09 / 0.042 + 0.1 / 0.84 + 0.03; near(s.R, R, 1e-12, 'R'); near(s.P, 25 / R, 1e-12, 'P');
  near(s.Ts_in, 20 - 25 * 0.12 / R, 1e-12, 'inside surface'); near(s.T[s.T.length - 1], -5, 1e-12, 'outside air');
  near(s.at(0.013 + 0.045), (s.T[2] + s.T[3]) / 2, 1e-12, 'linear in a layer'); near(s.thick, 0.203, 1e-12, 'thickness');
  const win = c.wallState({ A: 1, Tin: 20, Tout: -5, Rin: 0.12, Rout: 0.03, layers: [{ mat: 'glass', d: 0.004 }] }); assert(win.Ts_in < 1, `window inside surface ${win.Ts_in}`);
});
console.log(`${n} groups passed`);
