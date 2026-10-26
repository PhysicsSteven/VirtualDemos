'use strict';
// Proton Therapy QA: the morning checks against their tolerances, the range fit, the drifting machine, and patient QA gamma, on the shared core.
const assert = require('node:assert');
const path = require('node:path');
const { core } = require('./demo_source.cjs');
const V = require(path.join(__dirname, '../../demos/lib/vdstop.js'));
const c = core('proton-qa', 'SIG_AIR,sigmaAir,TOL,NOISE,rng32,pristine,r90,mlic,fitShift,SPOTS,dailyQA,scenario,dayFaults,driftDay,sobp,sigmaAt,planSpots,patientQA,gamma,readAt,CH');

let n = 0;
const within = (a, b, d, w) => assert(Math.abs(a - b) <= d, `${w || ''}: expected ${b} ± ${d}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const sd = (a) => { const m = a.reduce((s, v) => s + v, 0) / a.length; return Math.sqrt(a.reduce((s, v) => s + (v - m) ** 2, 0) / (a.length - 1)); };

group('spot sizes in air: Langner et al. 2017 at 70, 160 and 245 MeV, linear between', () => {
  assert.deepEqual(c.SIG_AIR, { E: [70, 160, 245], x: [5.75, 4.37, 3.61], y: [6.15, 4.27, 3.86] });
  c.SIG_AIR.E.forEach((E, i) => { const s = c.sigmaAir(E); within(s.x, c.SIG_AIR.x[i], 1e-12, 'x'); within(s.y, c.SIG_AIR.y[i], 1e-12, 'y'); });
  within(c.sigmaAir(115).x, (5.75 + 4.37) / 2, 1e-12, 'midpoint');
  assert.deepEqual(c.TOL, { out: 3, range: 1, pos: 2, rel: 1, size: 10 });
});

group('baseline: every check passes with no faults; R90 just short of the CSDA range, as it is on the distal edge', () => {
  for (const E of [70, 100, 150, 200, 226.7]) { const q = c.dailyQA(V, E, {}, null); assert(q.ok, `${E} MeV passes`); within(q.dR, 0, 0.005, 'no shift');
    const R = V.range(E, 'water'); assert(q.R90b < R && q.R90b > R - 0.12, `${E} MeV: R90 ${q.R90b} against CSDA ${R}`); within(q.out, 100, 1e-9, 'output'); within(q.err, 0, 1e-9, 'spots'); }
});

group('range: the fit to the commissioning curve recovers an energy error\'s shift within 0.02 mm, and ΔR/R = p ΔE/E with p near 1.77', () => {
  for (const E of [70, 100, 150, 200, 226.7]) for (const fe of [0.5, -1]) {
    const B = c.pristine(V, E), T = c.pristine(V, E * (1 + fe / 100)), truth = 10 * (c.r90(T.z, T.d) - c.r90(B.z, B.d)), q = c.dailyQA(V, E, { fe }, null);
    within(q.dR, truth, 0.02, `${E} MeV, ${fe} %`);
    const p = (q.dR / 10) / q.R90b / (fe / 100); assert(p > 1.65 && p < 1.85, `${E} MeV: p = ${p}`); }
  assert(!c.dailyQA(V, 150, { fe: 0.5 }, null).pass.range && c.dailyQA(V, 100, { fe: 0.5 }, null).pass.range, '0.5 % fails at 150 MeV, passes at 100 MeV');
});

group('faults: each shows in its own checks', () => {
  const o = c.dailyQA(V, 150, { fo: 4 }, null); assert(!o.pass.out && o.pass.range && o.pass.pos && o.pass.size); within(o.out, 104, 1e-9, 'output');
  const g = c.dailyQA(V, 150, { fg: 3 }, null); within(g.err, 2.4, 1e-9, 'gain: corner spots 80 mm × 3 %'); assert(!g.pass.pos);
  const centre = g.spots.find((s) => s.xn === 0 && s.yn === 0); within(Math.hypot(centre.x, centre.y), 0, 1e-12, 'central spot in place');
  const g2 = c.dailyQA(V, 150, { fg: 2 }, null); within(g2.err, 1.6, 1e-9, 'gain 2 %'); within(g2.rel, 1.6, 1e-9, 'gain 2 %, relative (TG-224 ±1 mm)'); assert(!g2.pass.pos);
  const st = c.dailyQA(V, 150, { fx: 2.5 }, null); within(st.err, 2.5, 1e-9, 'steering'); within(st.rel, 0, 1e-9, 'steering keeps the relative places'); assert(!st.pass.pos && st.pass.size);
  const sz = c.dailyQA(V, 150, { fs: 15 }, null); within(sz.ds, 15, 1e-9, 'spot size'); assert(!sz.pass.size && sz.pass.pos);
});

group('reading noise: 200 healthy runs scatter by the stated noise and all pass', () => {
  const r = c.rng32(5), runs = []; for (let i = 0; i < 200; i++) runs.push(c.dailyQA(V, 150, {}, r));
  within(sd(runs.map((q) => q.out)), 0.2, 0.04, 'output SD (%)'); assert(runs.every((q) => q.ok), 'all pass');
  within(sd(runs.map((q) => q.dR)), 0.05, 0.05, 'R90 SD (mm), small'); assert(Math.max(...runs.map((q) => q.err)) < 0.6, 'spot errors small');
});

group('drift: a steady machine stays in tolerance for 120 mornings; a drift is recovered by a straight line fit; runs repeat', () => {
  const st = c.scenario('steady', 4); for (let d = 1; d <= 120; d++) assert(c.driftDay(V, st, d, 150).ok, `steady day ${d}`);
  const sc = c.scenario('output', 3), xs = [], ys = []; for (let d = 1; d <= 60; d++) { xs.push(d); ys.push(c.driftDay(V, sc, d, 150).out); }
  const mx = xs.reduce((a, b) => a + b) / 60, my = ys.reduce((a, b) => a + b) / 60, b = xs.reduce((s, x, i) => s + (x - mx) * (ys[i] - my), 0) / xs.reduce((s, x) => s + (x - mx) ** 2, 0);
  within(b, sc.rate, 0.2 * sc.rate, 'fitted drift rate (%/day)');
  assert.deepEqual(c.driftDay(V, sc, 17, 150).out, c.driftDay(V, sc, 17, 150).out, 'same seed, same morning');
  const step = c.scenario('step', 9); within(c.dayFaults(step, step.d0).fo - c.dayFaults({ ...step, kind: 'steady' }, step.d0).fo, step.rate, 1e-12, 'step size');
  for (let s = 1; s < 40; s++) assert(['steady', 'output', 'energy', 'steering', 'size', 'step'].includes(c.scenario('mystery', s).kind));
});

group('patient QA: a flat spread out peak, spots that grow with depth, and gamma that sees lateral errors but not range errors mid target', () => {
  const P = c.sobp(V, 8, 14); let mn = Infinity, mx = 0; for (let i = 0; i < P.z.length; i++) if (P.z[i] >= 8 && P.z[i] <= 14) { mn = Math.min(mn, P.d[i]); mx = Math.max(mx, P.d[i]); }
  assert(mn > 0.975 && mx < 1.025, `flat: ${mn} to ${mx}`);
  const s2 = c.sigmaAt(V, P, 2, 1), s11 = c.sigmaAt(V, P, 11, 1); assert(s11.x > s2.x && s2.x > c.sigmaAir(141).x, 'spots grow with depth');
  assert.equal(c.CH.length, 1024); within(c.CH[1][0] - c.CH[0][0], 7.62, 1e-9, 'pitch');
  const pass = (e, z, dd, dta) => c.gamma(c.patientQA(V, P, 'square', z, e, 77), dd, dta, 10).pass;
  assert(pass({}, 11, 2, 2) >= 99, 'clean delivery passes at 2 %/2 mm');
  assert(pass({ px: 2 }, 11, 3, 3) >= 95 && pass({ px: 2 }, 11, 3, 2) < 95, '2 mm shift: passes 3/3, fails 3/2');
  for (let x = 0; x < 3; x += 0.5) assert(pass({ px: x + 0.5 }, 11, 3, 2) <= pass({ px: x }, 11, 3, 2) + 1e-9, 'passing falls as the shift grows');
  assert(pass({ px: 3 }, 11, 3, 3) < pass({ px: 1 }, 11, 3, 3), 'larger shift, fewer pass');
  assert(pass({ pr: 3 }, 11, 3, 3) >= 99.5 && pass({ pr: 3 }, 14.2, 3, 3) < 50, 'range error: invisible mid target, plain on the distal edge');
  const Q = c.patientQA(V, P, 'square', 11, {}, 77); Q.meas = c.CH.map(([x, y]) => { const i = Math.round(x + 130), j = Math.round(y + 130); return Q.plan[j * 261 + i]; });
  const g = c.gamma(Q, 3, 3, 10); assert(g.g.every((v) => !isFinite(v) || v < 0.35), 'a measurement equal to the plan at grid points has Γ near 0');
});

console.log(`${n} groups passed`);
