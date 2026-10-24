'use strict';
// Sound Waves and the Speed of Sound: v = √(γRT/M), s = s_max cos(kx − ωt), Δp = ρvω s_max sin(kx − ωt), time of flight between two
// microphones with a 48 kHz recorder (OpenStax Vol 1 §17.1, §17.2).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('sound-waves', 'R_GAS,T0K,P_ATM,GASES,FS,soundSpeed,gasDensity,wave,displacement,pressure,timerReading,clapSignal,fitLine,readingsCSV,LANE_W,SOURCES,MATERIALS,materialById,materialSpeed,raceFront');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('speed of sound: dry air 331.3 m/s at 0 °C and 343.2 m/s at 20 °C, v ∝ √T, helium and argon', () => {
  const air = c.GASES.air;
  near(c.soundSpeed(air, 0), 331.32, 1e-4); near(c.soundSpeed(air, 20), 343.23, 1e-4);
  near(c.soundSpeed(air, 20) / c.soundSpeed(air, 0), Math.sqrt(293.15 / 273.15), 1e-12);
  /* OpenStax's v = 331 m/s √(T/273 K) */
  near(c.soundSpeed(air, 30), 331 * Math.sqrt(303 / 273), 2e-3);
  near(c.soundSpeed(c.GASES.helium, 20), 1007.4, 1e-4); near(c.soundSpeed(c.GASES.argon, 20), 318.9, 1e-4);
  /* same γ: v scales as 1/√M */
  near(c.soundSpeed(c.GASES.helium, 20) / c.soundSpeed(c.GASES.argon, 20), Math.sqrt(39.948 / 4.002602), 1e-12);
  near(c.gasDensity(air, 20), 1.2041, 1e-4);
});
group('the wave: Δp = −B ∂s/∂x with B = ρv² = γP, Δp_max = ρvω s_max, 90° out of phase, intensity and level', () => {
  const air = c.GASES.air, W = c.wave(air, 20, 500, 1e-6);
  near(W.B, 1.4 * c.P_ATM, 1e-12, 'B = γP'); near(W.lambda, 343.235 / 500, 1e-5); near(W.k * W.lambda, 2 * Math.PI, 1e-12);
  for (const [x, t] of [[0.1, 0], [0.37, 1.3e-4], [1.9, 7e-4]]) {
    const h = 1e-6, ds = (c.displacement(W, 1e-6, x + h, t) - c.displacement(W, 1e-6, x - h, t)) / (2 * h);
    near(c.pressure(W, x, t), -W.B * ds, 1e-6, `Δp at x = ${x}`);
  }
  near(W.dpMax, 1.2984, 1e-4); near(W.I, W.dpMax ** 2 / (2 * W.rho * W.v), 1e-12); near(W.level, 93.10, 1e-4);
  /* where s is largest, Δp is zero, and where s = 0, |Δp| is largest */
  const x0 = 0.3, t0 = W.k * x0 / W.w; assert(Math.abs(c.pressure(W, x0, t0)) < 1e-9 && Math.abs(c.displacement(W, 1, x0, t0) - 1) < 1e-12);
  const x1 = x0 + W.lambda / 4; near(c.pressure(W, x1, t0), W.dpMax, 1e-9);
  /* the wave moves at v: the pattern at t + dt is the pattern at t shifted by v dt */
  near(c.displacement(W, 1, 0.5 + W.v * 3e-4, 3e-4), c.displacement(W, 1, 0.5, 0), 1e-9);
});
group('timer: Δt is a whole number of 48 kHz samples within one sample of d/v, and right on average over the clock phase', () => {
  const v = c.soundSpeed(c.GASES.air, 20);
  for (const d of [0.1, 0.5, 1.0, 1.37, 3.0]) {
    let sum = 0; const N = 2000;
    for (let i = 0; i < N; i++) { const R = c.timerReading(0.5, d, v, (i + 0.5) / N); assert(Number.isInteger(R.samples)); assert(Math.abs(R.dt - d / v) < 1 / c.FS + 1e-15); sum += R.dt; }
    near(sum / N, d / v, 1e-3 / d, `mean at d = ${d}`);
  }
  /* each channel's trigger sample is the first at or after the arrival */
  const R = c.timerReading(0.5, 1, v, 0.37); assert((R.nA + 0.37) / c.FS >= 0.5 / v && (R.nA - 1 + 0.37) / c.FS < 0.5 / v);
  assert.strictEqual(c.clapSignal(0.5 / v - 1e-9, 0.5, v), 0); assert(c.clapSignal(0.5 / v + 1e-4, 0.5, v) !== 0);
});
group('fit of Δt against d gives back v; CSV columns', () => {
  const v = c.soundSpeed(c.GASES.air, 20), ds = [0.5, 1, 1.5, 2, 2.5, 3], ts = ds.map((d) => c.timerReading(0.5, d, v, 0.5).dt * 1000), F = c.fitLine(ds, ts);
  near(1000 / F.b, v, 3e-3); assert(Math.abs(F.a) < 0.03);
  const csv = c.readingsCSV([{ gas: 'Air (dry)', T: '20', xA: '0.50', d: '1.00', dt: '2.9167', samples: '140' }], { version: 'x' }).split('\n');
  assert(csv.includes('row,gas,T_C,xA_m,d_m,dt_ms,samples') && csv.includes('1,Air (dry),20,0.50,1.00,2.9167,140'));
});
group('race: every material has a cited speed, the textbook values are kept, t = L/v', () => {
  const ids = new Set(); const OS = { co2: 259, oxygen: 316, hydrogen: 1290, ethanol: 1160, mercury: 1450, water: 1480, seawater: 1540 };
  for (const m of c.MATERIALS) {
    assert(!ids.has(m.id), 'duplicate ' + m.id); ids.add(m.id); assert(c.SOURCES[m.src], 'source for ' + m.id); assert(['gas', 'liquid', 'solid'].includes(m.phase));
    const v = c.materialSpeed(m, 20); assert(v > 200 && v < 20000, m.id);
    if (m.gas) assert.strictEqual(m.src, 'model'); else assert(Number.isInteger(m.v) && m.v > 0);
    if (OS[m.id]) { assert.strictEqual(m.v, OS[m.id], m.id); assert.strictEqual(m.src, 'OS'); }
  }
  assert.strictEqual(c.MATERIALS.length, 25);
  /* gases in the model follow the temperature; measured values do not */
  near(c.materialSpeed(c.materialById('air'), 20), 343.23, 1e-4); near(c.materialSpeed(c.materialById('air'), -10), 325.2, 1e-4);
  assert.strictEqual(c.materialSpeed(c.materialById('steel'), -10), c.materialSpeed(c.materialById('steel'), 40));
  /* bulk values: steel 5940, aluminum 6420 (not Table 17.1's thin rod 5120), bone and blood as in the Ultrasound demo */
  assert.strictEqual(c.materialById('steel').v, 5940); assert.strictEqual(c.materialById('aluminum').v, 6420);
  assert.strictEqual(c.materialById('bone').v, 4080); assert.strictEqual(c.materialById('blood').v, 1570);
  /* the front moves at v and stops at the end of the course */
  const v = c.materialById('diamond').v, L = 1000; near(c.raceFront(v, 0.02, L), 360, 1e-12); assert.strictEqual(c.raceFront(v, L / v + 0.1, L), L); assert.strictEqual(c.raceFront(v, -1, L), 0);
  /* the preset's numbers: steel over 1 km in 0.168 s, when air has gone 58 m; air takes 2.91 s, diamond 0.0556 s */
  const air = c.materialSpeed(c.materialById('air'), 20), tS = L / 5940; near(tS, 0.16835, 1e-4); near(air * tS, 57.8, 2e-3); near(L / air, 2.9135, 1e-4); near(L / v, 0.05556, 1e-3);
  assert.strictEqual(c.LANE_W, 3);
});
console.log(`${n} groups passed`);
