'use strict';
// Pendulums, Pendulum wave: lengths from the exact period, the exact motion (Jacobi elliptic functions), the pattern returning at Γ
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const c = core('pendulum', 'ellipK,periodExact,rk4,pwPeriod,pwLength,jacobi,pwAngle,pwSwings,pwPattern');
let n = 0;
const close = (a, b, rel = 1e-9, abs = 1e-12, msg = '') => assert(Math.abs(a - b) <= abs + rel * Math.abs(b), `${msg} expected ${b}, got ${a}`);
const test = (name, fn) => { fn(); n++; console.log('PASS', name); };
const g = 9.81, D = Math.PI / 180;

test('Jacobi functions: sn² + cn² = 1, dn² + m sn² = 1, the limits m = 0 and m → 1, and sn against a numerical inversion of the integral', () => {
  for (const m of [0.1, 0.5, 0.9, 0.999]) for (const u of [0.1, 0.7, 1.9, 3.3]) { const J = c.jacobi(u, m); close(J.sn ** 2 + J.cn ** 2, 1, 0, 1e-14); close(J.dn ** 2 + m * J.sn ** 2, 1, 0, 1e-14); }
  const J0 = c.jacobi(1.2, 1e-320); close(J0.sn, Math.sin(1.2), 1e-15);
  const J1 = c.jacobi(1.2, 1 - 1e-15); close(J1.sn, Math.tanh(1.2), 1e-6);
  close(c.jacobi(c.ellipK(Math.sqrt(0.5)), 0.5).sn, 1, 0, 1e-14, 'sn(K) = 1');
  /* sn(u | m) by direct numerical inversion of u = ∫ dφ/√(1 − m sin²φ) (Simpson, 2000 panels) */
  for (const [m, phi] of [[0.3, 0.8], [0.81, 1.3]]) { let u = 0; const N = 2000, h = phi / N, f = (q) => 1 / Math.sqrt(1 - m * Math.sin(q) ** 2);
    for (let i = 0; i < N; i++) u += h / 6 * (f(i * h) + 4 * f((i + 0.5) * h) + f((i + 1) * h)); close(c.jacobi(u, m).sn, Math.sin(phi), 1e-12); }
});

test('the exact swing obeys θ″ = −(g/L) sin θ, starts at θ₀ at rest and repeats in 4√(L/g)K', () => {
  for (const th0 of [8 * D, 40 * D, 150 * D]) {
    const L = 0.3, T = c.periodExact(L, g, th0), h = 1e-4;
    close(c.pwAngle(0, L, g, th0), th0, 1e-14);
    close(c.pwAngle(T, L, g, th0), th0, 1e-10, 1e-12, 'one period');
    close(c.pwAngle(T / 2, L, g, th0), -th0, 1e-10, 1e-12, 'half a period');
    close(c.pwAngle(T / 4, L, g, th0), 0, 0, 1e-12, 'quarter period at the bottom');
    for (const t of [0.137, 0.71, 5.3]) { const a = (c.pwAngle(t + h, L, g, th0) - 2 * c.pwAngle(t, L, g, th0) + c.pwAngle(t - h, L, g, th0)) / (h * h);
      close(a, -g / L * Math.sin(c.pwAngle(t, L, g, th0)), 2e-5, 1e-6, `θ″ at ${t} s, θ₀ ${th0 / D}°`); }
  }
});

test('the exact swing agrees with RK4 integration (the photogate lab\'s own stepper, no drag) over 60 s', () => {
  const L = 0.2117, th0 = 12 * D; let s = { th: th0, w: 0 }; const h = 1e-4;
  for (let i = 0; i < 600000; i++) s = c.rk4(s, g / L, 0, h);
  close(c.pwAngle(60, L, g, th0), s.th, 0, 1e-8);
});

test('Harvard pendulum wave: 15 pendulums, 51 to 65 swings in 60 s; lengths, and every bob back at θ₀ at t = Γ', () => {
  const Gam = 60, N0 = 51, th0 = 8 * D, Ls = [];
  for (let k = 0; k < 15; k++) { const T = c.pwPeriod(k, Gam, N0); Ls.push(c.pwLength(T, g, th0)); close(c.periodExact(Ls[k], g, th0), T, 1e-13); close(c.pwSwings(Ls[k], g, th0, Gam), N0 + k, 1e-12); }
  close(c.pwLength(60 / 51, g, 0, true), g * (60 / 51 / (2 * Math.PI)) ** 2, 1e-15, 0, 'small swing length');
  console.log(`  longest ${(Ls[0] * 100).toFixed(2)} cm (small swing formula ${(c.pwLength(60 / 51, g, 0, true) * 100).toFixed(2)} cm), shortest ${(Ls[14] * 100).toFixed(2)} cm`);
  c.pwPattern(Ls, g, th0, Gam).forEach((p, k) => close(p.th, th0, 0, 1e-9, `pendulum ${k + 1} at Γ`));
  /* at Γ/2 the odd and even pendulums are on opposite sides: two rows */
  c.pwPattern(Ls, g, th0, Gam / 2).forEach((p, k) => close(p.th, (k % 2 ? 1 : -1) * th0, 0, 1e-9, `pendulum ${k + 1} at Γ/2`));
  /* small swing lengths at 8°: each swing a little slow, so the pattern has not come back at Γ */
  const Lsmall = Ls.map((_, k) => c.pwLength(c.pwPeriod(k, Gam, N0), g, th0, true));
  const lag = c.pwSwings(Lsmall[0], g, th0, Gam); assert(lag < 51 && lag > 50.8, `longest makes ${lag} swings`);
  console.log(`  with small swing lengths at 8°, the longest makes ${lag.toFixed(4)} swings in 60 s`);
});
console.log(`${n} tests passed`);
