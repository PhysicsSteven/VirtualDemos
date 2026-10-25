'use strict';
/* Inside a Planet: the convection solver against the community benchmark, its heat budget, the regimes the presets teach,
   the two layer planets, PREM, floating crust and the unit conversions. */
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const C = core('inside-a-planet', 'makeBox,seedBox,step,viscosity,stokes,heatStep,measure,plumes,at,twoLayer,fitTwoLayer,PLANETS,premRho,integrate,PREM,floatBlock,boxWidth,timeMyr,speedCmYr,MANTLE,KAPPA,YR');
const near = (a, b, rel, msg) => assert.ok(Math.abs(a - b) <= rel * Math.abs(b), `${msg}: ${a} against ${b} (allowed ${rel * 100}%)`);
let n = 0; const ok = (s) => { n++; console.log(`ok ${n} ${s}`); };

/* 1. Blankenbach et al. 1989 (Geophys. J. Int. 98, 23), case 1a: a square box, Ra = 10⁴, even viscosity, heated from below.
   Steady state Nu = 4.884409, Vrms = 42.864947. Started from T = 1 − z + 0.01 cos(πx) sin(πz), as in the benchmark. */
{
  const B = C.makeBox(1, 32);
  for (let i = 0; i < B.nx; i++) for (let j = 0; j < B.nz; j++) { const x = i * B.dx, z = j * B.dz; B.T[C.at(B, i, j)] = 1 - z + 0.01 * Math.cos(Math.PI * x) * Math.sin(Math.PI * z); }
  const o = { Ra: 1e4, gamma: 0, sy: Infinity, H: 0 };
  while (B.t < 0.25) C.step(B, o);
  const m = C.measure(B);
  near(m.Nu, 4.884409, 0.005, 'benchmark 1a Nusselt number');
  near(m.vrms, 42.864947, 0.003, 'benchmark 1a rms speed');
  near(m.qBottom, m.Nu, 1e-6, 'heat in at the bottom = heat out at the top at the steady state');
  ok(`benchmark 1a: Nu ${m.Nu.toFixed(4)} (4.8844), Vrms ${m.vrms.toFixed(3)} (42.865)`);
}

/* 2. The heat budget of one step is exact: the change of the heat in the box = (in at the bottom − out at the top + made inside) × dt,
   for a run with a stiff lid, a yield stress and radioactive heat */
{
  const B = C.makeBox(C.boxWidth('earth'), 32); C.seedBox(B, 0.8, 7);
  const o = { Ra: 1e6, gamma: 5 * Math.LN10, sy: 10 ** 3.5, H: 10 };
  for (let k = 0; k < 40; k++) C.step(B, o);
  const heat = () => { let s = 0; for (let i = 0; i < B.nx; i++) for (let j = 1; j < B.NZ; j++) s += (i === 0 || i === B.NX ? 0.5 : 1) * B.T[C.at(B, i, j)]; return s * B.dx * B.dz / B.A; };
  /* the interior nodes' heat; the half cells at the walls are counted in the fluxes, as in heatStep */
  const e0 = heat(); C.viscosity(B, o); C.stokes(B, o.Ra); const dt = C.heatStep(B, o.H); const e1 = heat();
  const budget = (B.qBot - B.qTop + o.H) * dt;
  near(e1 - e0, budget, 1e-9, 'heat budget of one step');
  ok(`one step's heat budget closes to 1e-9 (change ${(e1 - e0).toExponential(4)})`);
}

/* 3. The regimes the presets teach (the same settings as the demo's setups, seeded the same way) */
{
  const run = (planet, o, tEnd) => { const B = C.makeBox(C.boxWidth(planet), 32); C.seedBox(B, 0.8, 2026); while (B.t < tEnd) C.step(B, o); return { B, m: C.measure(B) }; };
  const plates = run('earth', { Ra: 1e6, gamma: 5 * Math.LN10, sy: 10 ** 3.5, H: 10 }, 0.016);
  assert.ok(plates.m.mobility > 0.6, `Earth plates: the lid moves with the flow (mobility ${plates.m.mobility})`);
  const lid = run('venus', { Ra: 10 ** 5.8, gamma: 5 * Math.LN10, sy: Infinity, H: 5 }, 0.02);
  assert.ok(lid.m.mobility < 0.05, `Venus lid: the lid stands still (mobility ${lid.m.mobility})`);
  assert.ok(lid.m.Tmean > plates.m.Tmean, 'the mantle under a stagnant lid is hotter');
  const mars = run('mars', { Ra: 1e7, gamma: 5 * Math.LN10, sy: Infinity, H: 0, lower: 10 ** 1.5, lowerDepth: 0.5 }, 0.03);
  assert.ok(mars.m.mobility < 0.05 && C.plumes(mars.B) >= 1, `Mars: plumes under a still lid (mobility ${mars.m.mobility}, plumes ${C.plumes(mars.B)})`);
  ok(`regimes: plates mobility ${plates.m.mobility.toFixed(2)}, Venus lid ${lid.m.mobility.toFixed(3)} (mantle ${lid.m.Tmean.toFixed(2)} against ${plates.m.Tmean.toFixed(2)}), Mars ${C.plumes(mars.B)} plumes`);
}

/* 4. Two layer planets */
{
  const u = C.twoLayer(6371, 3000, 4000, 4000);
  near(u.k, 0.4, 1e-12, 'one density all through: C/MR² = 0.4'); near(u.rho, 4000, 1e-12, 'one density: mean density');
  for (const [k, P] of Object.entries(C.PLANETS)) {
    const f = C.fitTwoLayer(P.R, P.rc, P.rho, P.k), t = C.twoLayer(P.R, P.rc, f.rhoC, f.rhoM);
    near(t.rho, P.rho, 1e-12, `${k}: fitted mean density`); near(t.k, P.k, 1e-12, `${k}: fitted C/MR²`);
    assert.ok(f.rhoC > f.rhoM && f.rhoM > 2900, `${k}: a core denser than a rock mantle`);
  }
  const q = C.twoLayer(3389.5, 1000, 6580, 3440); near(q.rho, 3440 + (6580 - 3440) * (1000 / 3389.5) ** 3, 1e-12, 'mean density is linear in the core volume share');
  ok('two layers: C/MR² = 0.4 for one density; each planet\'s fit returns its measured mean density and C/MR²');
}

/* 5. PREM gives Earth's mass (GM = 398600.4418 km³/s², IERS 2010, over G = 6.67430e-11, CODATA 2022) and C/MR² 0.3307 */
{
  const { M, I } = C.integrate(C.premRho, C.PREM.map((p) => p[0]));
  near(M, 398600.4418e9 / 6.67430e-11, 0.001, 'PREM mass'); near(I / (M * 6371e3 ** 2), 0.3307, 0.001, 'PREM C/MR²');
  near(C.premRho(0), 13088.5, 1e-9, 'PREM center density'); near(C.premRho(6371), 1020, 1e-9, 'PREM ocean');
  ok(`PREM: M = ${M.toExponential(5)} kg, C/MR² = ${(I / (M * 6371e3 ** 2)).toFixed(4)}`);
}

/* 6. Floating crust and units */
{
  const b = C.floatBlock(34.4, 2835, 3378);
  near(b.above + b.below, 34.4, 1e-12, 'a block is its root plus what stands up'); near(b.below / 34.4, 2835 / 3378, 1e-12, 'fraction below = density ratio');
  near(C.floatBlock(70, 2835, 3378).above, 2 * C.floatBlock(35, 2835, 3378).above, 1e-12, 'twice as thick stands twice as high');
  near(C.timeMyr('earth', 1), (2891e3 ** 2 / 1e-6) / (365.25 * 86400) / 1e6, 1e-12, 'time unit d²/κ');
  near(C.speedCmYr('earth', 1), 1e-6 / 2891e3 * 365.25 * 86400 * 100, 1e-12, 'speed unit κ/d');
  near(C.boxWidth('earth'), Math.PI * (6371 + 3480) / 2 / 2891, 1e-12, 'box width: half the mid mantle circumference');
  ok(`floating crust: continent ${b.above.toFixed(2)} km up, root ${b.below.toFixed(2)} km; units checked`);
}
console.log(`${n} groups passed`);
