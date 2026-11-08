'use strict';
// Standing Waves: string and pipe harmonics, the plucked string's Fourier series and its energy, the driven damped string
// (resonance at ω_n, half power width γ, the exact transient step against RK4) and two traveling waves. The pipe and
// levitation models live in Resonators and Acoustic Levitation (test_acoustic_labs.cjs); their old copies here were removed.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('standing-waves', 'TAU,waveSpeed,stringFreq,soundSpeed,pluckCoeffs,triangle,sineSeries,modalEnergy,fieldEnergy,makeDriven,steadyG,setOmega,drivenQ,restDriven,stepDriven,steadyAmp,waveSum,waveEnvelope,beatEnvelope');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(Math.abs(b), 1e-300), `${w || ''}: expected ${b}, got ${a}`);
const close = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('harmonics: string f_n = (n/2L)√(T/μ); sound 343.2 m/s at 20 °C', () => {
  near(c.waveSpeed(80, 0.002), 200, 1e-15); near(c.stringFreq(3, 0.65, 80, 0.002), 3 * 200 / 1.3, 1e-15);
  near(c.soundSpeed(20), 343.2, 2e-4); near(c.soundSpeed(0), 331.3, 0);
});

group('plucked string: the Fourier series rebuilds the triangle; its energy equals ½T∫y_x² = ½T h²(1/d + 1/(L − d)) and stays put as it vibrates', () => {
  const L = 0.65, h = 0.01, d = 0.2, N = 200, T = 80, mu = 0.002, b = c.pluckCoeffs(h, d, L, N);
  for (const x of [0.05, 0.2, 0.33, 0.6]) close(c.sineSeries(b, N, Math.PI * x / L), c.triangle(x, h, d, L), x === d ? 3e-5 : 2e-6, `x ${x}`);   /* the series converges as 1/N at the kink */
  const E0 = 0.5 * T * h * h * (1 / d + 1 / (L - d));
  near(c.modalEnergy(b, N, L, T, mu), E0, 3e-3, 'modal sum (200 modes)');
  for (const t of [0, 1e-4, 7.3e-4, 3e-3]) near(c.fieldEnergy(b, N, L, T, mu, t, 4000), c.modalEnergy(b, N, L, T, mu), 1e-6, `field energy t ${t}`);
  // plucked at the middle: no even harmonics
  const bm = c.pluckCoeffs(h, L / 2, L, 10); for (const k of [2, 4, 6]) close(bm[k], 0, 1e-17); near(bm[1], 8 * h / Math.PI ** 2, 1e-14);
});

group('driven damped string: |G_n| peaks at Ω = ω_n with half power at ω_n ± γ/2; the exact step matches RK4 on each mode', () => {
  const D = c.makeDriven(1, 50, 0.005, 60, 10), w1 = D.w1, g = D.gam;
  const amp = (Om) => Math.hypot(...c.steadyG(D, Om, 1));
  near(amp(w1) / amp(w1 * 1.01), Math.hypot(w1 * w1 - (1.01 * w1) ** 2, g * 1.01 * w1) / (g * w1), 1e-12, 'Lorentzian shape');
  // half power: the absorbed power ∝ Ω²|G|² falls to half where (ω² − Ω²)² = (γΩ)², Ω = √(ω² + γ²/4) ∓ γ/2, a full width of γ
  const lo = Math.sqrt(w1 * w1 + g * g / 4) - g / 2, hi = Math.sqrt(w1 * w1 + g * g / 4) + g / 2, P = (Om) => (Om * amp(Om)) ** 2;
  near(P(lo), P(w1) / 2, 1e-12, 'lower half power'); near(P(hi), P(w1) / 2, 1e-12, 'upper half power'); near(hi - lo, g, 1e-12);
  near(D.w1 / D.gam, 60, 1e-12, 'Q of the first mode');
  // transient: from rest, compare the exact free damped step with RK4 on q'' + γq' + ω²q = F cos Ωt
  c.setOmega(D, 1.3 * w1); D.phi = 0; c.restDriven(D);
  const k = 3, F = D.Fn[k], w = D.wn[k], Om = D.Om; let q = 0, v = 0, t = 0; const h = 1e-5;
  const acc = (q, v, t) => F * Math.cos(Om * t) - g * v - w * w * q;
  for (let i = 0; i < 4000; i++) {
    const k1q = v, k1v = acc(q, v, t), k2q = v + h / 2 * k1v, k2v = acc(q + h / 2 * k1q, v + h / 2 * k1v, t + h / 2);
    const k3q = v + h / 2 * k2v, k3v = acc(q + h / 2 * k2q, v + h / 2 * k2v, t + h / 2), k4q = v + h * k3v, k4v = acc(q + h * k3q, v + h * k3v, t + h);
    q += h / 6 * (k1q + 2 * k2q + 2 * k3q + k4q); v += h / 6 * (k1v + 2 * k2v + 2 * k3v + k4v); t += h;
    c.stepDriven(D, h);
  }
  const [qd, vd] = c.drivenQ(D, k); close(qd, q, 1e-9 * Math.abs(F / (w * w)) + 1e-12, 'q'); close(vd, v, 1e-8 * Math.abs(F / w) + 1e-12, 'q′');
  // steady amplitude for one mode equals the antinode amplitude
  near(c.steadyAmp(D, w1), Math.hypot(...c.steadyG(D, w1, 1)), 0.02, 'near resonance mode 1 dominates');
});

group('two traveling waves: equal frequencies make nodes λ/2 apart; the envelope bounds the sum; beats at f₂ − f₁', () => {
  const v = 2, f = 0.5, lam = v / f;
  for (let x = 0; x <= 4; x += 0.5) {
    const env = c.waveEnvelope(x, 0, 1, 1, f, f, v), node = Math.abs(Math.sin(2 * Math.PI * x / lam));
    close(env, 2 * node, 1e-12, 'standing wave envelope 2A|sin kx|');
    for (const t of [0.1, 0.37, 1.2]) assert(Math.abs(c.waveSum(x, t, 1, 1, f, f, v)) <= env + 1e-12);
  }
  near(c.beatEnvelope(0, 1, 0.6, 2, 2.5), 1.6, 1e-15); near(c.beatEnvelope(1, 1, 0.6, 2, 2.5), 0.4, 1e-12, 'half a beat period later');
});

console.log(`${n} standing waves modes test groups passed`);
