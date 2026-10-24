'use strict';
// The Cavendish experiment: a torsion balance measures G (OpenStax Vol 1 §13.1).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('cavendish', 'G_CODATA,CAV,sphereR,inertia,kappa,gamma,frameAngle,largeSpheres,torque,accel,rk4,restAngle,spot,textbookG,beta,restFromTurns');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const C = c.CAV, G = c.G_CODATA;

group('lead spheres of 20.0 g and 1.500 kg have radii 7.50 mm and 31.6 mm; the large spheres clear the small ones', () => {
  near(c.sphereR(C.m), 7.50e-3, 2e-3); near(c.sphereR(C.M), 31.6e-3, 2e-3);
  assert(C.r > c.sphereR(C.m) + c.sphereR(C.M) + 0.005, 'a gap of more than 5 mm between surfaces');
  near(c.inertia(), 2 * C.m * C.l ** 2, 1e-14); near(2 * Math.PI * Math.sqrt(c.inertia() / c.kappa()), C.T0, 1e-12);
});
group('frame positions: in A and B each large sphere is r from the nearer small sphere, square to the untwisted beam', () => {
  for (const q of ['A', 'B']) { const big = c.largeSpheres(c.frameAngle(q)); for (const [X, Y] of big) { near(Math.abs(X), C.l, 1e-12); near(Math.abs(Y), C.r, 1e-12); } }
  assert(Math.abs(c.torque(0, c.frameAngle("away"))) < 1e-25);
});
group('torque at θ = 0: 2GMml/r² from the near pairs, less the fraction β from the far pairs', () => {
  const t0 = 2 * G * C.M * C.m * C.l / C.r ** 2;
  near(c.torque(0, c.frameAngle('A')), t0 * (1 - c.beta()), 1e-12); near(c.torque(0, c.frameAngle('B')), -t0 * (1 - c.beta()), 1e-12);
  near(c.beta(), C.r ** 3 / Math.hypot(C.r, 2 * C.l) ** 3, 1e-12); assert(c.beta() > 0.07 && c.beta() < 0.08);
});
group('resting angles: κθ = τ(θ), equal and opposite in A and B, a few thousandths of a radian', () => {
  const a = c.restAngle(c.frameAngle('A')), b = c.restAngle(c.frameAngle('B'));
  near(c.kappa() * a, c.torque(a, c.frameAngle('A')), 1e-10); near(b, -a, 1e-10); assert(a > 1e-4 && a < 5e-3);
});
group("the textbook's G from ΔS and T, corrected by 1/(1 − β), gives back G to the small angle terms", () => {
  const a = c.restAngle(c.frameAngle('A')), b = c.restAngle(c.frameAngle('B')), dS = c.spot(a) - c.spot(b);
  const Gt = c.textbookG(dS, C.T0) / (1 - c.beta()); near(Gt, G, 0.02);
  const lin = c.textbookG(4 * C.L * c.torque(0, c.frameAngle('A')) / c.kappa(), C.T0) / (1 - c.beta()); near(lin, G, 1e-12, 'linear model exact');
});
group('the resting spot from three turning points is exact for a geometric decay', () => {
  const E = 0.47, A = 0.05, q = 0.6, x = [0, 1, 2].map((k) => E + A * (-q) ** k); near(c.restFromTurns(...x), E, 1e-12);
});
group('free swing (G = 0): half period π/√(ω₀² − γ²) and the amplitude falls by e^(−γt)', () => {
  const w0 = 2 * Math.PI / C.T0, g = c.gamma(), Td = 2 * Math.PI / Math.sqrt(w0 * w0 - g * g);
  let st = { t: 0, th: 1e-3, w: -g * 1e-3 }; const turns = [];
  while (st.t < 3 * Td) { const nx = c.rk4(st, 0.25, () => Math.PI / 2, 0); if (st.w * nx.w < 0) turns.push(st.t + 0.25 * st.w / (st.w - nx.w)); st = nx; }
  assert(turns.length >= 5);
  // with θ(0) = θ₀, θ'(0) = −γθ₀ the motion is θ₀e^(−γt)cos(ω_d t): turning points every Td/2 after the first
  for (let k = 1; k < turns.length; k++) near(turns[k] - turns[k - 1], Td / 2, 2e-3);
  let s2 = { t: 0, th: 1e-3, w: -g * 1e-3 }; while (s2.t < Td - 1e-9) s2 = c.rk4(s2, Td / 2000, () => Math.PI / 2, 0);
  near(s2.th, 1e-3 * Math.exp(-g * Td), 1e-6);
});
group('the pull growing as the beam turns: a larger twist and a slower swing by the same factor, which cancel in κ_eff θ', () => {
  const a = c.frameAngle('B'), th = c.restAngle(a), h = 1e-7, tp = (c.torque(th + h, a) - c.torque(th - h, a)) / (2 * h), k = c.kappa(), keff = k - tp, lin = c.torque(0, a) / k;
  near(th / lin, k / keff, 1e-4); near(keff * th, k * lin, 1e-4); assert(th / lin > 1.005 && th / lin < 1.01);
});
console.log(`${n} groups passed`);
