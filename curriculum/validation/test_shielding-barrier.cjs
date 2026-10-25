'use strict';
// Nuclear Reactions, Dose view: broad beam transmission at 511 keV (AAPM TG-108 fits) and a PET uptake room barrier (Medical Physics, 2026-10-25).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('nuclear-reactions', 'archerT,archerX,shieldWall,doseRate,muLin,SHIELDS,doseOver,SOURCES,hasBroad,NCRP_P,OCCUPANCY,BODY_511');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
group('Archer form: T(0) = 1, inverse recovers x, initial slope −(α + β)', () => {
  for (const sh of ['lead', 'concrete']) { near(c.archerT(sh, 0), 1, 1e-12); for (const x of [0.3, 2, 9]) near(c.archerX(sh, c.archerT(sh, x)), x, 1e-9, sh); }
  const h = 1e-6; near((1 - c.archerT('lead', h)) / h, 1.543 - 0.4408, 1e-4, 'lead slope');
});
group('tenth value layers from the fits: lead 15.9 mm (quoted 16 to 17), concrete 19.4 cm at 2.25 g/cm³ (Ionactive)', () => {
  near(c.archerX('lead', 0.1) * 10, 15.94, 0.002);
  const keep = c.SHIELDS.concrete.rho; c.SHIELDS.concrete.rho = 2.25; near(c.archerX('concrete', 0.1), 19.4, 0.005); c.SHIELDS.concrete.rho = keep;
});
group('buildup factor B = T_broad/e^(−μx) is above 1 and grows with thickness', () => {
  let last = 1; for (const x of [0.5, 1, 2, 4]) { const B = c.archerT('lead', x) / Math.exp(-c.muLin('lead', 0.511) * x); assert(B > last); last = B; }
  assert(c.hasBroad('f18', 'lead') && !c.hasBroad('cs137', 'lead') && !c.hasBroad('f18', 'water'));
});
group('¹⁸F dose rate at 1 m within 4% of TG-108’s 0.143 µSv m²/(MBq h)', () => near(c.doseRate('f18', 1e6, 1, 'none', 0) * 1e6, 0.143, 0.04));
group('barrier: weekly dose follows TG-108’s 0.092 A t R_t N/d² (0.092 = 0.64 × 0.143) to 4%; thickness meets B exactly', () => {
  const q = c.shieldWall(5.55e8, 2, 40, 1, 1, 'uncontrolled', true), Th = 109.77 / 60, Rt = 1.443 * Th * (1 - Math.exp(-0.693 / Th));
  near(q.week, 0.143e-3 * 555 * 1 * Rt * 0.64 * 40 / 4, 0.04, 'weekly dose');
  near(q.B, 0.02 / q.week, 1e-12); near(c.archerT('lead', q.leadBroad), q.B, 1e-9); near(Math.exp(-c.muLin('lead', 0.511) * q.leadNarrow), q.B, 1e-9);
  assert(q.leadBroad > q.leadNarrow && q.concBroad > q.concNarrow, 'narrow beam underestimates');
  assert(!c.shieldWall(5.55e8, 10, 1, 0.25, 1 / 40, 'controlled', true).need, 'far, rare, occupied little: no barrier');
});
group('NCRP 147 design goals and occupancy factors', () => { assert.equal(c.NCRP_P.controlled, 0.1); assert.equal(c.NCRP_P.uncontrolled, 0.02); assert.deepEqual(c.OCCUPANCY.map((o) => o[0]), [1, 1 / 2, 1 / 5, 1 / 8, 1 / 20, 1 / 40]); assert.equal(c.BODY_511, 0.64); });
console.log(`${n} groups passed`);
