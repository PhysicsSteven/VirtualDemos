'use strict';
// Energy and Power of a Wave: a driven string ending in a dashpot absorber, P = ½ μ A² ω² v when matched (OpenStax Vol 1 §16.4).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('wave-power', 'G_LAB,STRINGS,ABSORBERS,tension,waveSpeed,impedance,travelingPower,energyPerMetre,reflection,field,Yat,dYat,powerAt,absorberPower,energyAt,maxSlope,readingsCSV');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const mu = c.STRINGS.B.mu, T = c.tension(0.200), L = 1.2;

group('textbook power: String B, 200 g, 20 Hz, 1 mm gives ½ μ A² ω² v = 0.3829 mW', () => {
  const v = Math.sqrt(1.96 / 1.2e-3), w = 2 * Math.PI * 20;
  near(c.travelingPower(20, 1e-3, T, mu), 0.5 * 1.2e-3 * 1e-6 * w * w * v, 1e-12);
  near(c.travelingPower(20, 1e-3, T, mu) * 1000, 0.38292, 1e-4);
  near(c.travelingPower(20, 1e-3, T, mu), c.energyPerMetre(20, 1e-3, mu) * v, 1e-12, 'P = (E/L) v');
});
group('matched absorber: no reflection, meter = textbook power at every L, and P scales as A²f²', () => {
  assert.equal(c.reflection(1), 0);
  for (const Lx of [0.5, 0.87, 1.2, 2]) for (const f of [5, 13.3, 40, 100]) for (const A of [1e-4, 1e-3, 5e-3]) {
    const F = c.field(f, A, Lx, T, mu, 1);
    near(c.absorberPower(F, Lx), c.travelingPower(f, A, T, mu), 1e-10, `L ${Lx} f ${f} A ${A}`);
  }
  const P0 = c.absorberPower(c.field(20, 1e-3, L, T, mu, 1), L);
  near(c.absorberPower(c.field(20, 2e-3, L, T, mu, 1), L) / P0, 4, 1e-12, 'double A');
  near(c.absorberPower(c.field(40, 1e-3, L, T, mu, 1), L) / P0, 4, 1e-12, 'double f');
  near(c.absorberPower(c.field(20, 1e-3, L, 4 * T, mu, 1), L) / P0, 2, 1e-12, 'four times T: v doubles');
});
group('energy is conserved: the power is the same at every point and equals what the absorber takes', () => {
  for (const rel of [1, 1 / 3, 3]) for (const f of [7.7, 20, 61]) {
    const F = c.field(f, 1e-3, L, T, mu, rel), Pa = c.absorberPower(F, L);
    for (const x of [0, 0.3, 0.71, L]) near(c.powerAt(F, x), Pa, 1e-9, `rel ${rel} f ${f} x ${x}`);
  }
});
group('boundary conditions: Y(0) = A, T Y′(L) + iωb Y(L) = 0, and Y″ + k²Y = 0', () => {
  for (const rel of [1, 1 / 3, 3]) {
    const F = c.field(23.4, 2e-3, L, T, mu, rel), y0 = c.Yat(F, 0), YL = c.Yat(F, L), DL = c.dYat(F, L);
    near(y0[0], 2e-3, 1e-12); assert(Math.abs(y0[1]) < 1e-15);
    const bc = [T * DL[0] - F.w * F.b * YL[1], T * DL[1] + F.w * F.b * YL[0]];
    assert(Math.hypot(...bc) < 1e-12 * T * F.k * 2e-3, `end condition at b = ${rel} Z`);
    const x = 0.53, h = 1e-4, yp = c.Yat(F, x + h), ym = c.Yat(F, x - h), y = c.Yat(F, x);
    for (const j of [0, 1]) { const d2 = (yp[j] - 2 * y[j] + ym[j]) / h / h; assert(Math.abs(d2 + F.k * F.k * y[j]) < 1e-4 * F.k * F.k * 2e-3); }
    const dn = (c.Yat(F, x + h)[0] - c.Yat(F, x - h)[0]) / (2 * h); near(c.dYat(F, x)[0], dn, 1e-6, 'derivative');
  }
});
group('mismatched ends send back a quarter of the power; the absorbed power swings with L', () => {
  near(c.reflection(1 / 3), 0.5, 1e-12); near(c.reflection(3), -0.5, 1e-12);
  const ps = []; for (let Lx = 0.5; Lx <= 2.0; Lx += 0.001) ps.push(c.absorberPower(c.field(20, 1e-3, Lx, T, mu, 1 / 3), Lx));
  const P = c.travelingPower(20, 1e-3, T, mu), hi = Math.max(...ps), lo = Math.min(...ps);
  /* the vibrator is a displacement source: the incident amplitude A/|1 + r e^{−2ikL}| lies between A/1.5 and A/0.5, and the absorber takes (1 − r²) of it */
  near(hi, 0.75 * 4 * P, 1e-4, 'largest, 3 P'); near(lo, 0.75 / 2.25 * P, 1e-4, 'smallest, P/3');
});
group('energy density averages to ½ μ A² ω², the slope check is small at the presets', () => {
  const F = c.field(20, 1e-3, L, T, mu, 1); let s = 0; const K = 360; for (let i = 0; i < K; i++) s += c.energyAt(F, 0.4, 2 * Math.PI * i / K, mu);
  near(s / K, c.energyPerMetre(20, 1e-3, mu), 1e-9);
  near(c.maxSlope(F, L), F.k * 1e-3, 1e-9, 'kA for a travelling wave');
  assert(c.maxSlope(c.field(20, 5e-3, L, T, mu, 1), L) < 0.2, 'largest preset amplitude stays linear');
});
group('CSV: header, comment lines and squared columns', () => {
  const csv = c.readingsCSV([{ string: 'String B', absorber: 'matched', L: '1.20', m: '0.200', T: '1.9600', f: '20.0', A: '1.50', P: '0.8616' }], { version: 'x', string: 'String B' });
  const lines = csv.trim().split('\n'), head = lines.find((l) => l[0] !== '#');
  assert.equal(head, 'row,string,absorber,L_m,m_kg,T_N,f_Hz,A_mm,P_mW,A2_mm2,f2_Hz2');
  assert.equal(lines[lines.length - 1], '1,String B,matched,1.20,0.200,1.9600,20.0,1.50,0.8616,2.25,400');
});
console.log(`${n} groups passed`);
