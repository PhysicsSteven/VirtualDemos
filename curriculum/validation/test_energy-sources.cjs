'use strict';
// Sources of Energy: energy densities and the masses, volumes and areas needed.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('energy-sources', 'KWH,uranium,SOURCES,massNeeded,hydroPerKg,windPerKg,solarArea');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
group('uranium: 200 MeV per fission gives 8.2 × 10¹³ J/kg, three million times coal', () => { near(c.uranium, 8.21e13, 2e-3); near(c.uranium / 27e6, 3.04e6, 5e-3); });
group('masses: 1 kWh of heat is 78 g of gasoline; as electricity at 35% it takes 224 g', () => {
  near(c.massNeeded(c.KWH, 46e6, 'heat', false, 0.35), 0.07826, 1e-3); near(c.massNeeded(c.KWH, 46e6, 'heat', true, 0.35), 0.2236, 1e-3); near(c.massNeeded(c.KWH, 0.7e6, 'elec', true, 0.35), 5.143, 1e-3);
});
group('hydro, wind, solar', () => { near(c.hydroPerKg(100), 882.9, 1e-12); near(c.windPerKg(10), 50 * 16 / 27, 1e-12); near(c.solarArea(30 * c.KWH, 200), 30 * c.KWH / (40 * 86400), 1e-12); });
console.log(`${n} energy sources test groups passed`);
