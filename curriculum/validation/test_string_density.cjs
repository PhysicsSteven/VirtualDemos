'use strict';
// Linear Density of a String: driven string over a pulley, resonances fₙ = (n/2L)√(T/μ), T = mg, μ from the linearized fits (OpenStax Vol 1 §16.3, §16.6).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('string-density', 'G_LAB,HANGER_G,DRIVE_A,WIDTH_HZ,GAMMA,STRINGS,tension,waveSpeed,resonantFreq,resonantTension,kappa,shapeAt,maxAmplitude,loopsSeen,fitLine,muFromFn,muFromTn,readingsCSV');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const L = 1.2, mu = c.STRINGS.B.mu, T = c.tension(0.200);
/* frequency of the largest amplitude near f0, by a fine scan */
function peakF(f0, L, T, mu) {
  let best = 0, bf = 0; for (let f = f0 - 0.5; f <= f0 + 0.5; f += 0.01) { const a = c.maxAmplitude(f, L, T, mu); if (a > best) { best = a; bf = f; } }
  let lo = bf - 0.01, hi = bf + 0.01; for (let i = 0; i < 50; i++) { const a = hi - (hi - lo) * 0.618034, b = lo + (hi - lo) * 0.618034; if (c.maxAmplitude(a, L, T, mu) < c.maxAmplitude(b, L, T, mu)) lo = a; else hi = b; }
  bf = (lo + hi) / 2; return [bf, c.maxAmplitude(bf, L, T, mu)];
}

group('tension and the standing wave formulas: 200 g gives 1.96 N, v = 40.41 m/s, f₁ = 16.84 Hz', () => {
  near(T, 0.2 * 9.8, 1e-12); near(c.waveSpeed(T, mu), Math.sqrt(1.96 / 1.2e-3), 1e-12); near(c.resonantFreq(1, L, T, mu), 40.4145 / 2.4, 1e-5);
  near(c.resonantFreq(3, L, T, mu), 3 * c.resonantFreq(1, L, T, mu), 1e-12);
  for (let k = 1; k <= 8; k++) near(c.resonantFreq(k, L, c.resonantTension(k, L, 60, mu), mu), 60, 1e-12, 'T for n loops gives back f');
  near(c.resonantTension(3, L, 60, mu) / c.G_LAB, 0.2821, 1e-3, '282 g for 3 loops at 60 Hz');
});
group('boundary conditions and the wave equation: Y(0) = a, Y(L) = 0, Y″ + κ²Y = 0', () => {
  for (const f of [10, 33.7, 61.3, 150]) {
    const y0 = c.shapeAt(0, f, L, T, mu), yL = c.shapeAt(L, f, L, T, mu);
    near(y0[0], c.DRIVE_A, 1e-9); assert(Math.abs(y0[1]) < 1e-12 && Math.hypot(...yL) < 1e-15);
    const k = c.kappa(f, T, mu), k2 = [k[0] * k[0] - k[1] * k[1], 2 * k[0] * k[1]], w = 2 * Math.PI * f;
    near(k2[0], w * w * mu / T, 1e-12); near(k2[1], -c.GAMMA * w * mu / T, 1e-9);
    const x = 0.37, h = 1e-4, yp = c.shapeAt(x + h, f, L, T, mu), ym = c.shapeAt(x - h, f, L, T, mu), y = c.shapeAt(x, f, L, T, mu);
    const d2 = [(yp[0] - 2 * y[0] + ym[0]) / h / h, (yp[1] - 2 * y[1] + ym[1]) / h / h], k2y = [k2[0] * y[0] - k2[1] * y[1], k2[0] * y[1] + k2[1] * y[0]];
    assert(Math.hypot(d2[0] + k2y[0], d2[1] + k2y[1]) < 1e-5 * Math.hypot(k2y[0], k2y[1]), `wave equation at ${f} Hz`);
  }
});
group('resonances sit at fₙ = n v/2L (damping lowers them by less than 0.05% above 10 Hz), n loops seen', () => {
  for (let k = 1; k <= 6; k++) {
    const fn = c.resonantFreq(k, L, T, mu), [bf] = peakF(fn, L, T, mu);
    assert(bf < fn && (fn - bf) / fn < 2e-4, `n = ${k}: peak ${bf} against ${fn}`);
    assert.equal(c.loopsSeen(fn, L, T, mu), k);
  }
  const g = c.GAMMA, w = 2 * Math.PI * 10; assert(g * g / (8 * w * w) < 5e-4, 'shift bound at 10 Hz');
});
group('peak amplitude a·2ω₁/(πγ) and half power width 0.60 Hz', () => {
  for (const k of [1, 3, 5]) {
    const fn = c.resonantFreq(k, L, T, mu), [bf, A] = peakF(fn, L, T, mu), pred = c.DRIVE_A * 2 * (2 * Math.PI * fn / k) / (Math.PI * c.GAMMA);
    near(A, pred, 2e-3, `peak at n = ${k}`);
    let lo = bf, hi = bf; while (c.maxAmplitude(lo, L, T, mu) ** 2 > A * A / 2) lo -= 1e-4; while (c.maxAmplitude(hi, L, T, mu) ** 2 > A * A / 2) hi += 1e-4;
    near(hi - lo, c.WIDTH_HZ, 0.01, `width at n = ${k}`);
  }
  assert(c.maxAmplitude(c.resonantFreq(2.5, L, T, mu), L, T, mu) < 0.15 * peakF(c.resonantFreq(2, L, T, mu), L, T, mu)[1], 'small between resonances');
  /* largest amplitude agrees with a dense scan of the shape */
  for (const f of [12, 40.2, 77.7]) { let m = 0; for (let i = 0; i <= 20000; i++) m = Math.max(m, Math.hypot(...c.shapeAt(L * i / 20000, f, L, T, mu))); near(c.maxAmplitude(f, L, T, mu), m, 1e-6, `max at ${f} Hz`); }
});
group('fits recover μ: f against n at one mass, T against 1/n² at one frequency', () => {
  const ns = [1, 2, 3, 4, 5], fs = ns.map((k) => c.resonantFreq(k, L, T, mu)), F1 = c.fitLine(ns, fs);
  near(c.muFromFn(F1.b, L, T), mu, 1e-12); assert(Math.abs(F1.a) < 1e-9);
  const ms = [2, 3, 4, 5, 6, 7], Ts = ms.map((k) => c.resonantTension(k, L, 60, mu)), F2 = c.fitLine(ms.map((k) => 1 / k / k), Ts);
  near(c.muFromTn(F2.b, L, 60), mu, 1e-12); assert(Math.abs(F2.a) < 1e-9);
  /* the resonances a student would find to 0.1 Hz still give μ within 0.2% */
  const fr = ns.map((k) => Math.round(peakF(c.resonantFreq(k, L, T, mu), L, T, mu)[0] * 10) / 10), F3 = c.fitLine(ns, fr); near(c.muFromFn(F3.b, L, T), mu, 2e-3);
});
group('readings CSV: header, columns and 1/n²', () => {
  const csv = c.readingsCSV([{ method: 'sweep f', L: '1.20', m: '0.200', T: '1.9600', f: '50.5', n: '3' }], { version: 'v', string: 'String B' });
  const lines = csv.trim().split('\n'), data = lines.filter((l) => l[0] !== '#');
  assert(lines[0].includes('simulated data')); assert(csv.includes('# g used for T = mg,9.80 m/s2'));
  assert.equal(data[0], 'row,method,L_m,m_kg,T_N,f_Hz,n,inv_n2'); assert.equal(data[1], '1,sweep f,1.20,0.200,1.9600,50.5,3,0.111111');
});
console.log(`${n} groups passed`);
