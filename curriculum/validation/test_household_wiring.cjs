'use strict';
// Household Wiring: branch circuit by nodal analysis, breaker and GFCI rules, shock effects (OpenStax Vol 2 §10.6).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('household-wiring', 'V_RMS,RHO_CU,GAUGE_MM,wirePerMetre,APPS,appR,R_FAULT,R_BODY,GFCI_TRIP,solveCircuit,solve3,breakerAction,gfciTrips,shockEffect');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const base = { gauge: 14, len: 15, loads: ['lamp'], fault: 'none', ground: true, touch: false, skin: 'dry' };

group('wires: 14 gauge copper is 8.07 mΩ/m; appliance resistances from the ratings', () => {
  near(c.wirePerMetre(1.628), 1.68e-8 / (Math.PI * 0.000814 ** 2), 1e-12); near(c.wirePerMetre(1.628), 8.071e-3, 1e-3); near(c.wirePerMetre(2.053), 5.075e-3, 1e-3);
  near(c.appR(100), 144, 1e-12); near(c.appR(1500), 9.6, 1e-12);
});
group('series hand check: one lamp through 2 × 15 m of 14 gauge', () => {
  const Rw = c.wirePerMetre(1.628) * 15, I = 120 / (144 + 2 * Rw), r = c.solveCircuit(base);
  near(r.Ihot, I, 1e-12); near(r.Ineu, I, 1e-12); assert(Math.abs(r.Ignd) < 1e-15); near(r.Vout, 144 * I, 1e-12); near(r.loadP.lamp, 144 * I * I, 1e-12);
});
group('parallel loads: toaster and kettle draw about 22 A, more than a 15 A breaker allows', () => {
  const Rw = c.wirePerMetre(1.628) * 15, Rp = 1 / (1 / 12 + 1 / 9.6), r = c.solveCircuit({ ...base, loads: ['toaster', 'kettle'] });
  near(r.Ihot, 120 / (Rp + 2 * Rw), 1e-12); assert(r.Ihot > 21 && r.Ihot < 22.5); assert.equal(c.breakerAction(r.Ihot, 15), 'delay'); assert.equal(c.breakerAction(r.Ihot, 30), 'hold');
  near(r.heatPerMetre, r.Ihot ** 2 * c.wirePerMetre(1.628), 1e-12);
});
group('short circuit: hundreds of amperes, magnetic trip', () => {
  const Rw = c.wirePerMetre(1.628) * 15, r = c.solveCircuit({ ...base, fault: 'short' });
  const Rpar = 1 / (1 / 144 + 1 / c.R_FAULT); near(r.Ihot, 120 / (Rpar + 2 * Rw), 1e-12); assert(r.Ihot > 300); assert.equal(c.breakerAction(r.Ihot, 15), 'instant');
});
group('worn cord, grounded case: the ground wire carries the fault current, the person almost none', () => {
  const r = c.solveCircuit({ ...base, loads: ['toaster'], fault: 'case', touch: true });
  assert(r.Ignd > 300); assert.equal(c.breakerAction(r.Ihot, 15), 'instant'); assert(r.Ibody < 1e-3);
  near(r.Ihot, r.Ineu + r.Ignd + r.Ibody, 1e-12, 'Kirchhoff current law at the outlet');
  near(r.Ibody / r.Ignd, c.wirePerMetre(1.628) * 15 / 200e3, 1e-9, 'parallel paths divide inversely to resistance');
});
group('no ground: OpenStax 0.6 mA dry and 12 mA wet; the breaker never sees it, a GFCI does', () => {
  const dry = c.solveCircuit({ ...base, loads: ['toaster'], fault: 'case', touch: true, ground: false }), wet = c.solveCircuit({ ...base, loads: ['toaster'], fault: 'case', touch: true, ground: false, skin: 'wet' });
  near(dry.Ibody, 0.6e-3, 0.02); near(wet.Ibody, 12e-3, 0.02); near(dry.leak, dry.Ibody, 1e-9); near(wet.leak, wet.Ibody, 1e-9);
  assert.equal(c.breakerAction(wet.Ihot, 15), 'hold'); assert(!c.gfciTrips(dry.leak)); assert(c.gfciTrips(wet.leak));
  assert(/harmless/.test(c.shockEffect(dry.Ibody)) === false && /sensation/.test(c.shockEffect(dry.Ibody)), '0.6 mA is below sensation');
  assert(/let go/.test(c.shockEffect(wet.Ibody)));
  assert(/death/.test(c.shockEffect(0.31))); assert(/harmless/.test(c.shockEffect(3e-3)));
  const none = c.solveCircuit({ ...base, loads: ['toaster'], fault: 'case', touch: false, ground: false }); assert(Math.abs(none.leak) < 1e-12, 'no path: no leak');
});
console.log(`${n} household wiring test groups passed`);
