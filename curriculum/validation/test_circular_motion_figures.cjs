'use strict';
// Circular Motion: locks every figure quoted in notes/src/circular-motion.md, the TeacherKeys answers and the
// "Speed Limits on Curves and Loops" worksheet key to the CORE, plus the physics behind them (a = v²/r, force balances,
// energy on the loop, the grip budget when speeding up). g dependent figures are computed from the CORE's own G; the printed
// figures of the notes and keys (written for g = 9.81) are checked only when G has that value.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('circular-motion', 'G,accel,tension,flatMax,bank,loop,loopMin,speedState,slipTime');
const G = c.G;
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);
const printed = (x, d, s, w) => assert.strictEqual(x.toFixed(d), s, `${w || ''}: printed ${x.toFixed(d)}, quoted ${s}`);
const deg = Math.PI / 180;
function group(name, f) { f(); n++; console.log('PASS', name); }
const quotedG = Math.abs(G - 9.81) < 1e-12;
console.log(`CORE g = ${G} m/s²${quotedG ? '' : ' (not 9.81: the printed figures of the notes and keys are skipped)'}`);
// ordinary least squares y = a + b x with standard errors (n − 2 degrees of freedom), as the worksheet's fit reports it
function fit(xs, ys) {
  const N = xs.length, mx = xs.reduce((s, x) => s + x, 0) / N, my = ys.reduce((s, y) => s + y, 0) / N;
  let sxx = 0, sxy = 0; for (let i = 0; i < N; i++) { sxx += (xs[i] - mx) ** 2; sxy += (xs[i] - mx) * (ys[i] - my); }
  const b = sxy / sxx, a = my - b * mx; let ss = 0; for (let i = 0; i < N; i++) ss += (ys[i] - a - b * xs[i]) ** 2;
  const s2 = ss / (N - 2); return { a, b, sb: Math.sqrt(s2 / sxx), sa: Math.sqrt(s2 * (1 / N + mx * mx / sxx)) };
}
// the highest speed on the 0.5 m/s slider that is still below a limit (one step faster is over it), and the lowest at or above it
const stepBelow = (lim) => Math.floor(lim / 0.5 - 1e-9) * 0.5, stepAbove = (lim) => Math.ceil(lim / 0.5 + 1e-9) * 0.5;

group('Ball on a string (notes step 1, g independent): 0.5 kg at 3.0 m/s on 1.0 m gives a = 9.00 m/s², T = 4.50 N', () => {
  printed(c.accel(3, 1), 2, '9.00'); printed(c.tension(0.5, 3, 1), 2, '4.50');
  for (const [v, r] of [[2, 0.5], [7, 3], [0.3, 10]]) { near(c.accel(v, r), v * v / r, 1e-12); near(c.tension(2, v, r), 2 * v * v / r, 1e-12); }
  near(c.accel(6, 1), 4 * c.accel(3, 1), 1e-12, 'a ∝ v²'); near(c.accel(3, 2), c.accel(3, 1) / 2, 1e-12, 'a ∝ 1/r');
});

group('Car on a flat curve (notes step 2, key Q2): needs 5400 N, friction up to μs mg = 8240 N, top speed √(μs g r) = 18.5 m/s (67 km/h); 14.0 m/s wet', () => {
  printed(1200 * c.accel(15, 50), 0, '5400');
  const vmax = c.flatMax(0.7, 50); near(1200 * c.accel(vmax, 50), 0.7 * 1200 * G, 1e-9, 'needed = available at the limit');
  near(c.flatMax(0.7, 50), Math.sqrt(0.7 * G * 50), 1e-14); near(c.flatMax(0.4, 50), Math.sqrt(0.4 * G * 50), 1e-14);
  near(c.flatMax(0.7, 200), 2 * c.flatMax(0.7, 50), 1e-12, 'v ∝ √r');
  if (quotedG) {
    printed(0.7 * 1200 * G, 0, '8240', 'friction available'); printed(vmax, 1, '18.5'); printed(vmax * 3.6, 0, '67', 'km/h');
    printed(c.flatMax(0.4, 50), 1, '14.0', 'wet road');
  }
});

group('Banked curve (notes step 3, key Q3): ideal speed √(rg tan θ) = 15.1 m/s at 25°, allowed 8.5 to 20.9 m/s, at 20 m/s friction 3725 N of 4418 N', () => {
  const b = c.bank(1200, 20, 50, 25, 0.3), th = 25 * deg;
  near(b.vIdeal, Math.sqrt(50 * G * Math.tan(th)), 1e-13);
  near(b.N * Math.sin(th) + b.f * Math.cos(th), 1200 * 400 / 50, 1e-8, 'horizontal balance'); near(b.N * Math.cos(th) - b.f * Math.sin(th), 1200 * G, 1e-8, 'vertical balance');
  assert(b.f > 0, 'faster than ideal: friction down the slope'); assert(b.holds);
  assert(c.bank(1200, 10, 50, 25, 0.3).f < 0, 'slower than ideal: friction up the slope');
  near(c.bank(1200, b.vIdeal, 50, 25, 0.3).f, 0, 1e-9, 'no friction at the ideal speed');
  near(c.bank(1200, b.vmax, 50, 25, 0.3).f, 0.3 * c.bank(1200, b.vmax, 50, 25, 0.3).N, 1e-8); near(c.bank(1200, b.vmin, 50, 25, 0.3).f, -0.3 * c.bank(1200, b.vmin, 50, 25, 0.3).N, 1e-8);
  assert(!c.bank(1200, b.vmax + 0.01, 50, 25, 0.3).holds && !c.bank(1200, b.vmin - 0.01, 50, 25, 0.3).holds);
  if (quotedG) {
    printed(b.vIdeal, 1, '15.1'); printed(b.vmin, 1, '8.5'); printed(b.vmax, 1, '20.9');
    printed(b.f, 0, '3725', 'friction needed at 20 m/s'); printed(0.3 * b.N, 0, '4418', 'friction available');
    // worksheet prelab 3: the bank angle that needs no friction at 20 m/s on 50 m
    printed(400 / (50 * G), 4, '0.8155', 'tan θ'); printed(Math.atan(400 / (50 * G)) / deg, 1, '39.2');
    near(c.bank(1, 20, 50, Math.atan(400 / (50 * G)) / deg, 0).f, 0, 1e-9);
  }
  // the mass cancels in every speed
  const b2 = c.bank(500, 20, 50, 25, 0.3); near(b2.vIdeal, b.vIdeal, 0); near(b2.vmax, b.vmax, 0); near(b2.vmin, b.vmin, 0);
  near(c.flatMax(0.7, 50), c.flatMax(0.7, 50), 0);
});

group('Speeding up on a curve (notes step 4, key Q5, Q6): at 6 s v = 12.0, a_c = 2.40, |a| = 3.12 m/s² at 39.8°; slips at 9.93 s, 19.85 m/s, cruising 20.3 m/s', () => {
  const q = c.speedState(0, 2, 60, 6);
  printed(q.v, 1, '12.0'); printed(q.ac, 2, '2.40'); printed(q.a, 2, '3.12'); printed(q.ang / deg, 1, '39.8'); printed(q.ang / deg, 0, '40');
  near(q.a, Math.hypot(2, 144 / 60), 1e-12); near(q.s, 36, 1e-12); near(q.th, 0.6, 1e-12);
  const ts = c.slipTime(0, 2, 60, 0.7), st = c.speedState(0, 2, 60, ts);
  near(st.a, 0.7 * G, 1e-9, 'slips when |a| = μs g'); near(st.v * st.v, 60 * Math.sqrt((0.7 * G) ** 2 - 4), 1e-8, 'v² = r √((μs g)² − a_t²)');
  near(ts, st.v / 2, 1e-12); assert(st.v < c.flatMax(0.7, 60), 'below the cruising limit');
  if (quotedG) {
    printed(0.7 * G, 3, '6.867', 'μs g'); printed(st.v * st.v, 1, '394.2'); printed(st.v, 2, '19.85'); printed(st.v, 1, '19.9'); printed(ts, 2, '9.93');
    printed(c.flatMax(0.7, 60), 1, '20.3', 'cruising');
  }
  // braking: a car already near the cruising limit slides at once; braking never makes a slow car slip
  assert.strictEqual(c.slipTime(20.3, -2, 60, 0.7), 0); assert.strictEqual(c.slipTime(10, -2, 60, 0.7), null);
  assert.strictEqual(c.slipTime(0, 0.7 * G + 0.01, 60, 0.7), 0, 'a_t alone over the grip');
  const b = c.speedState(20, -4, 60, 10); near(b.v, 0, 1e-12); near(b.s, 50, 1e-12); near(b.a, 0, 1e-12, 'stopped: no acceleration');
});

group('Vertical loop (notes step 5, key Q4): needs √(5gr) = 8.58 m/s at the bottom for r = 1.5 m; energy sets v; N = m(v²/r + g cos φ)', () => {
  const r = 1.5, v0 = c.loopMin(r); near(v0, Math.sqrt(5 * G * r), 1e-14);
  if (quotedG) printed(v0, 2, '8.58');
  const top = c.loop(0.5, v0, r, 180); near(top.v * top.v, G * r, 1e-9, 'v² = gr at the top'); near(top.N, 0, 1e-9, 'just keeps contact');
  for (const ph of [0, 45, 90, 135, 180]) {
    const q = c.loop(0.5, 9, r, ph); near(0.5 * q.v * q.v + G * r * (1 - Math.cos(ph * deg)), 0.5 * 81, 1e-9, 'energy conserved');
    near(q.N, 0.5 * (q.v * q.v / r + G * Math.cos(ph * deg)), 1e-12); assert(!q.stalls);
  }
  assert(c.loop(0.5, 8, r, 180).N < 0, 'notes: 8 m/s leaves the track before the top');
  // worksheet: 5.0 m/s stops and slides back (never past the centre level), 5.5 m/s leaves the track; √(2gr) = 5.42 lies between
  assert(c.loop(0.5, 5, r, 90).stalls); near(c.loop(0.5, Math.sqrt(2 * G * r), r, 90).v, 0, 1e-6, 'v = 0 at the centre level for v₀ = √(2gr)');
  if (quotedG) printed(Math.sqrt(2 * G * r), 2, '5.42');
  let leaves = false; for (let ph = 90; ph <= 180; ph += 0.5) { const q = c.loop(0.5, 5.5, r, ph); if (q.stalls) break; if (q.N < 0) { leaves = true; break; } }
  assert(leaves && !c.loop(0.5, 5.5, r, 90).stalls, '5.5 m/s passes the centre level and leaves the track');
  // key questions-3: it leaves where cos φ = (2gr − v₀²)/(3gr)
  const v5 = 6, phL = Math.acos((2 * G * r - v5 * v5) / (3 * G * r)) / deg; near(c.loop(0.5, v5, r, phL).N, 0, 1e-9);
});

group('worksheet key, Part 1: predicted limits 11.72, 16.57, 20.30, 23.44, 26.20 m/s; recorded 11.5 ... 26.0; fit slope 6.72 ± 0.09, intercept −1.4 ± 6.3; wet 15.34', () => {
  const rs = [20, 40, 60, 80, 100], lim = ['11.72', '16.57', '20.30', '23.44', '26.20'], rec = [11.5, 16.5, 20, 23, 26];
  const vs = rs.map((r) => c.flatMax(0.7, r));
  if (quotedG) {
    vs.forEach((v, i) => { printed(v, 2, lim[i], `limit at r = ${rs[i]}`); near(stepBelow(v), rec[i], 0, `recorded speed at r = ${rs[i]}`); });
    const F = fit(rs, rec.map((v) => v * v));
    printed(F.b, 2, '6.72'); printed(F.sb, 2, '0.09'); printed(F.a, 1, '-1.4'); printed(F.sa, 1, '6.3');
    printed(0.7 * G, 3, '6.867'); printed(100 * (1 - F.b / (0.7 * G)), 1, '2.1', 'per cent low');
    const Fm = fit(rs, rec.map((v) => (v + 0.25) ** 2)); printed(Fm.b, 2, '6.81'); near(Fm.sb, 0.095, 5e-4, 'key prints the midpoint fit error as 0.10; it is 0.0950, on the rounding boundary'); printed(100 * (1 - Fm.b / (0.7 * G)), 1, '0.8');
    printed(c.flatMax(0.4, 60), 2, '15.34', 'wet road'); near(stepBelow(c.flatMax(0.4, 60)), 15, 0);
    near(stepBelow(c.flatMax(0.7, 60)), 20, 0); assert(c.flatMax(0.7, 60) < 20.5, 'slides at 20.5');
  }
  for (const m of [500, 1200, 2000]) assert(m * c.accel(20, 60) <= 0.7 * m * G && m * c.accel(20.5, 60) > 0.7 * m * G, `holds at 20, slides at 20.5 for ${m} kg`);
});

group('worksheet key, Part 2: ideal speeds 9.30, 11.46, 13.36, 15.12, 16.83, 18.53 m/s; recorded 9.0 ... 18.5; slope 498 ± 10, intercept −10 ± 4; rg = 490.5', () => {
  const ths = [10, 15, 20, 25, 30, 35], ideal = ['9.30', '11.46', '13.36', '15.12', '16.83', '18.53'], rec = [9, 11, 13, 15, 16.5, 18.5];
  const tans = ['0.176327', '0.267949', '0.36397', '0.466308', '0.57735', '0.700208'];
  ths.forEach((th, i) => {
    const v = c.bank(1200, 10, 50, th, 0.3).vIdeal; near(v, Math.sqrt(50 * G * Math.tan(th * deg)), 1e-12);
    assert.strictEqual(String(+Math.tan(th * deg).toPrecision(6)), tans[i]);
    if (quotedG) { printed(v, 2, ideal[i], `ideal at ${th}°`); near(stepBelow(v), rec[i], 0, `recorded at ${th}°`); }
    assert(c.bank(1200, rec[i], 50, th, 0.3).f < 0 && c.bank(1200, rec[i] + 0.5, 50, th, 0.3).f > 0, 'friction flips between the step and the next');
  });
  if (quotedG) {
    const F = fit(ths.map((th) => Math.tan(th * deg)), rec.map((v) => v * v));
    printed(F.b, 0, '498'); printed(F.sb, 0, '10'); printed(F.a, 0, '-10'); printed(F.sa, 0, '4'); printed(50 * G, 1, '490.5');
  }
});

group('worksheet key, Part 3: √(5gr) = 4.95, 7.00, 8.58, 9.90, 11.07, 12.13 m/s; recorded 5.0 ... 12.5; slope 51.6 ± 1.6, intercept 1.5 ± 3.1; 5g = 49.05', () => {
  const rs = [0.5, 1, 1.5, 2, 2.5, 3], lim = ['4.95', '7.00', '8.58', '9.90', '11.07', '12.13'], rec = [5, 7.5, 9, 10, 11.5, 12.5];
  rs.forEach((r, i) => {
    const v = c.loopMin(r);
    if (quotedG) { printed(v, 2, lim[i], `limit at r = ${r}`); near(stepAbove(v), rec[i], 0, `recorded at r = ${r}`); }
    assert(c.loop(0.5, rec[i], r, 180).N >= 0 && c.loop(0.5, rec[i] - 0.5, r, 180).N < 0, 'goes round at the step, leaves one step slower');
  });
  if (quotedG) {
    const F = fit(rs, rec.map((v) => v * v));
    printed(F.b, 1, '51.6'); printed(F.sb, 1, '1.6'); printed(F.a, 1, '1.5'); printed(F.sa, 1, '3.1'); printed(5 * G, 2, '49.05');
    const Fm = fit(rs, rec.map((v) => (v - 0.25) ** 2)); printed(Fm.b, 1, '50.2'); printed(Fm.sb, 1, '1.5');
  }
});

console.log(`${n} circular-motion test groups passed`);
