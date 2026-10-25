'use strict';
// Kepler's Laws: locks every figure quoted in notes/src/kepler-orbits.md, the TeacherKeys answers and the "Measuring Orbits
// and Kepler's Third Law" worksheet key to the CORE (presets, readouts to their printed precision, the six arrow key presses,
// the 1.995 M☉ slider step), plus the laws themselves on the integrator: P ∝ a^1.5 exactly, energy and angular momentum kept,
// equal areas, Mercury's r_p v_p = r_a v_a. No g here: units are AU, yr and M☉ with GM = 4π² M.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const K = core('kepler-orbits', 'TAU,KMS,R_HIT,orbitElements,accelOf,specificEnergy,newBody,startWedgesOn,resetPeriodClock,advanceBody,launchState,num,fitOrigin,csvCell,buildCSV');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);
const sig = (x, d, s, w) => assert.strictEqual(x.toPrecision(d), s, `${w || ''}: printed ${x.toPrecision(d)}, quoted ${s}`);
const fixed = (x, d, s, w) => assert.strictEqual(x.toFixed(d), s, `${w || ''}: printed ${x.toFixed(d)}, quoted ${s}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const deg = Math.PI / 180;
const GM = (M) => K.TAU * K.TAU * M;                     // the page's mu(): 4π² M in AU³/yr²
// the presets as the page defines them (demos/kepler-orbits.html PRESETS)
const PRE = { earth: { a: 1.0, e: 0.0167, at: 'peri' }, mars: { a: 1.5237, e: 0.0934, at: 'peri' }, mercury: { a: 0.3871, e: 0.2056, at: 'peri' },
  halley: { a: 17.8, e: 0.967, at: 'aph' }, circular: { r: 1.0, f: 1 }, escape: { r: 1.0, f: 1.2 * Math.SQRT2 } };
const M2 = Math.pow(10, 0.3);                            // the mass slider shown as 2.00 M☉ (log10 M in steps of 0.005)
const el = (name, M = 1) => K.orbitElements(K.launchState(PRE[name], GM(M)), GM(M));
const run = (st, M, T, nW = 12) => { const m = GM(M), b = K.newBody(st, 0, m); K.startWedgesOn(b, m, nW); K.advanceBody(b, T, 2e8, m, nW); return b; };
// ordinary least squares with intercept, standard errors with n − 2 degrees of freedom, for the worksheet's intercept figures
function fit(xs, ys) {
  const N = xs.length, mx = xs.reduce((s, x) => s + x, 0) / N, my = ys.reduce((s, y) => s + y, 0) / N;
  let sxx = 0, sxy = 0; for (let i = 0; i < N; i++) { sxx += (xs[i] - mx) ** 2; sxy += (xs[i] - mx) * (ys[i] - my); }
  const b = sxy / sxx, a = my - b * mx; let ss = 0; for (let i = 0; i < N; i++) ss += (ys[i] - a - b * xs[i]) ** 2;
  const s2 = ss / (N - 2); return { a, b, sb: Math.sqrt(s2 / sxx), sa: Math.sqrt(s2 * (1 / N + mx * mx / sxx)) };
}

group('constants the notes quote: 1 AU/yr = 4.74 km/s, a hit within 0.005 AU, GM = 4π² M', () => {
  fixed(K.KMS, 2, '4.74'); fixed(K.KMS, 4, '4.7405'); assert.strictEqual(K.R_HIT, 0.005); near(K.TAU, 2 * Math.PI, 0);
  near(el('circular').vcirc, Math.sqrt(GM(1)), 1e-12); near(el('circular').P, 1, 1e-12, 'a year at 1 AU around 1 M☉');
});

group('presets (notes step 2): e = 0.017, 0.093, 0.206; Mercury 0.3075 to 0.4667 AU; 1 AU circular speed 29.8 km/s', () => {
  fixed(el('earth').e, 3, '0.017'); fixed(el('mars').e, 3, '0.093'); fixed(el('mercury').e, 3, '0.206');
  const me = el('mercury'); fixed(me.q, 4, '0.3075'); fixed(me.Q, 4, '0.4667');
  sig(el('circular').v * K.KMS, 3, '29.8'); sig(el('circular').vesc * K.KMS, 3, '42.1');
  for (const p of ['earth', 'mars', 'mercury', 'halley']) {
    const e = el(p); near(e.a, PRE[p].a, 1e-12); near(e.e, PRE[p].e, 1e-12); assert(e.bound && !e.parabolic && !e.radial);
    near(e.P * e.P / e.a ** 3, 1, 1e-12, 'P² = a³ for M = 1');
    near(e.P / Math.pow(e.a, 1.5), 1, 1e-12, 'third law exponent 1.5');
  }
});

group('key Q2 and worksheet analysis 3: Mercury v_p/v_a = r_a/r_p = (1 + e)/(1 − e) = 1.52; readouts 59.0 and 38.9 km/s; r_p v_p = r_a v_a', () => {
  const me = el('mercury'), vp = me.vp * K.KMS, va = me.va * K.KMS;
  sig(vp, 3, '59.0'); sig(va, 3, '38.9'); fixed(vp / va, 2, '1.52'); fixed(me.Q / me.q, 2, '1.52'); fixed((1 + me.e) / (1 - me.e), 2, '1.52');
  near(me.q * me.vp, me.Q * me.va, 1e-12, 'angular momentum'); near(me.q * me.vp, Math.abs(me.h), 1e-12);
  sig(me.q * vp, 4, '18.14', 'r_p v_p in AU km/s');          // the worksheet's 18.14 and 18.16 come from the rounded readouts
  fixed(0.3074 * 59.0, 2, '18.14'); fixed(0.4668 * 38.9, 2, '18.16');
  // vis viva as the key states it: v = 4.7405 × 2π √(2/r − 1/a)
  sig(K.KMS * K.TAU * Math.sqrt(2 / me.q - 1 / me.a), 3, '59.0'); sig(K.KMS * K.TAU * Math.sqrt(2 / me.Q - 1 / me.a), 3, '38.9');
  // Mercury preset launch as the existing suite quotes it: 0.3075 AU at 58.98 km/s
  const st = K.launchState(PRE.mercury, GM(1)); fixed(st.x, 4, '0.3075'); fixed(st.vy * K.KMS, 2, '58.98');
});

group('key Q3 (Halley, notes step 3): P = 75.1 yr (readout 75.10), aphelion 35.0 AU at 0.914 km/s, perihelion 0.59 AU at 54.5 km/s; 53.17 yr and 77.0 km/s at the 1.995 M☉ step', () => {
  const h = el('halley'); sig(h.P, 4, '75.10'); fixed(h.P, 1, '75.1'); sig(h.Q, 3, '35.0'); fixed(h.q, 2, '0.59');
  sig(h.va * K.KMS, 3, '0.914'); sig(h.vp * K.KMS, 3, '54.5');
  fixed(Math.pow(17.8, 1.5), 1, '75.1'); fixed(17.8 * 1.967, 1, '35.0');
  fixed(M2, 3, '1.995'); fixed(M2, 2, '2.00', 'the slider shows 2.00');
  // Keep the orbit's shape: speeds scale by √M, so a and e stay and P falls by √M
  const st = K.launchState(PRE.halley, GM(1)), f = Math.sqrt(M2), h2 = K.orbitElements({ x: st.x, y: st.y, vx: st.vx * f, vy: st.vy * f }, GM(M2));
  near(h2.a, h.a, 1e-9); near(h2.e, h.e, 1e-12); near(h2.P, h.P / f, 1e-9); sig(h2.P, 4, '53.17'); sig(h2.vp * K.KMS, 3, '77.0');
  fixed(75.1 / Math.SQRT2, 1, '53.1', 'key: P at exactly 2 M☉'); near(h2.P * h2.P * M2, h2.a ** 3, 1e-6, 'P² = a³/M');
  // Halley is launched at aphelion: the launch point is the far end of the major axis
  near(st.x, h.Q, 1e-12); near(st.vy, h.va, 1e-12);
});

group('key Q5 (Escape preset, notes step 5): v_esc = 42.1 km/s, launch 50.5 km/s, v∞ = 27.9 km/s, ε = 17.37 AU²/yr²; hyperbola, no period', () => {
  const es = el('escape'); assert(!es.bound && es.e > 1 && !es.parabolic); assert.strictEqual(es.P, Infinity); assert.strictEqual(es.a, Infinity);
  sig(es.vesc * K.KMS, 3, '42.1'); sig(es.v * K.KMS, 3, '50.5'); sig(es.vinf * K.KMS, 3, '27.9'); sig(es.eps, 4, '17.37');
  near(es.eps, GM(1) * (1.44 - 1), 1e-12, 'ε = (f² − 1) GM/r'); near(es.vinf, Math.sqrt(es.v ** 2 - es.vesc ** 2), 1e-12);
  fixed(42.1 * Math.sqrt(0.44), 1, '27.9'); fixed(Math.SQRT2 * 29.8, 1, '42.1');
  // the integrated planet keeps ε on the way out
  const b = run(K.launchState(PRE.escape, GM(1)), 1, 300); assert.strictEqual(b.done, 'far'); near(K.specificEnergy(b, GM(1)) / es.eps, 1, 1e-4);
  // escape at exactly √2 is parabolic: zero energy
  const par = K.orbitElements(K.launchState({ r: 1, f: Math.SQRT2 }, GM(1)), GM(1)); assert(par.parabolic); near(par.eps, 0, 1e-12);
});

group('key Q1 and worksheet "dragged orbit": six arrow presses (+3.0 km/s) give 32.8 km/s, a = 1.27 (1.268), e = 0.21 (0.212), P = 1.43 (1.428) yr', () => {
  const st = K.launchState(PRE.circular, GM(1)); st.vy += 6 * 0.5 / K.KMS;
  const d = K.orbitElements(st, GM(1));
  sig(d.v * K.KMS, 3, '32.8'); sig(d.a, 3, '1.27'); sig(d.a, 4, '1.268'); fixed(d.e, 2, '0.21'); fixed(d.e, 3, '0.212'); sig(d.P, 3, '1.43'); sig(d.P, 4, '1.428');
  fixed(2 * (+d.a.toPrecision(4)), 3, '2.536', 'ruler column: twice the four figure a'); near(d.q, 1, 1e-12, 'the push point becomes perihelion'); assert(d.P > 1, 'longer than a year');
  // the key's round numbers for exactly 1.1 × circular: a = 1/0.79 = 1.27, e = 0.21, P = 1.42, aphelion 1.53
  const k = K.orbitElements(K.launchState({ r: 1, f: 1.1 }, GM(1)), GM(1));
  near(k.a, 1 / 0.79, 1e-12); fixed(k.a, 2, '1.27'); fixed(k.e, 2, '0.21'); fixed(k.P, 2, '1.42'); fixed(k.Q, 2, '1.53');
  near(k.eps, -0.395 * GM(1), 1e-12);
});

group('key Q6: same speed, same point, different direction: same a and P; 34° outward gives e = 0.56 between 0.44 and 1.56 AU', () => {
  const v = Math.sqrt(GM(1)), al = 34 * deg, r = K.orbitElements({ x: 1, y: 0, vx: v * Math.sin(al), vy: v * Math.cos(al) }, GM(1));
  near(r.a, 1, 1e-12); near(r.P, 1, 1e-12); fixed(r.e, 2, '0.56'); fixed(r.q, 2, '0.44'); fixed(r.Q, 2, '1.56'); near(r.e, Math.sin(al), 1e-12);
  // both return to the start after exactly one year on the integrator
  const c = run({ x: 1, y: 0, vx: 0, vy: v }, 1, 1), s = run({ x: 1, y: 0, vx: v * Math.sin(al), vy: v * Math.cos(al) }, 1, 1);
  near(Math.hypot(c.x - 1, c.y), 0, 2e-4, 'circle back at the start'); near(Math.hypot(s.x - 1, s.y), 0, 2e-4, 'ellipse back at the start');
});

group('third law on the integrator: measured periods P ∝ a^1.5 (exponent 1.5 ± 1e-5) and ∝ M^−½', () => {
  const as = [0.4, 1, 3], Ps = as.map((a) => { const P = Math.pow(a, 1.5), b = run(K.launchState({ a, e: 0.3, at: 'peri' }, GM(1)), 1, 1.02 * P); assert.strictEqual(b.turns, 1); return b.Pm; });
  const slope = Math.log(Ps[2] / Ps[0]) / Math.log(as[2] / as[0]); near(slope, 1.5, 1e-5, 'exponent');
  near(Ps[1], 1, 2e-5);
  const b2 = run(K.launchState({ a: 1, e: 0.3, at: 'peri' }, GM(M2)), M2, 0.75); near(b2.Pm * Math.sqrt(M2), 1, 2e-5, 'P ∝ 1/√M at fixed a');
  // eccentricity does not change the period
  const Pe = [0, 0.5, 0.9].map((e) => run(K.launchState({ a: 1, e, at: 'peri' }, GM(1)), 1, 1.02).Pm); for (const P of Pe) near(P, 1, 3e-5, 'P independent of e');
});

group('conservation on the integrator: energy and angular momentum over 10 Mercury years; equal areas every wedge', () => {
  const m = GM(1), st = K.launchState(PRE.mercury, m), h0 = st.x * st.vy, b = run(st, 1, 10 * el('mercury').P, 12);
  near(K.specificEnergy(b, m) / b.E0, 1, 1e-6, 'energy'); near(b.x * b.vy - b.y * b.vx, h0, 1e-10, 'angular momentum');
  assert.strictEqual(b.wedges.length, 12); for (const w of b.wedges) near(w.area, 0.5 * h0 * b.dtW, 1e-8, 'wedge area ½ h Δt');
  near(12 * 0.5 * h0 * b.dtW, Math.PI * 0.3871 * 0.3871 * Math.sqrt(1 - 0.2056 ** 2), 1e-12, 'wedges tile the ellipse π a b');
});

group('worksheet key rows: a and T to four figures for Mercury, Earth, Mars, Halley at 1 M☉ and at the 1.995 M☉ step', () => {
  const rows1 = { mercury: ['0.3871', '0.2408', '0.058006', '0.057985'], earth: ['1.000', '1.000', '1', '1'], mars: ['1.524', '1.881', '3.5396', '3.5382'], halley: ['17.80', '75.10', '5639.8', '5640'] };
  const rows2 = { mercury: '0.1705', earth: '0.7079', mars: '1.332' };
  for (const p of Object.keys(rows1)) {
    const e = el(p), [a, T, a3, T2] = rows1[p]; sig(e.a, 4, a); sig(e.P, 4, T);
    const ad = +e.a.toPrecision(4), Td = +e.P.toPrecision(4);
    assert.strictEqual(String(+(ad ** 3).toPrecision(5)), a3, `a³ for ${p}`); assert.strictEqual(String(+(Td * Td).toPrecision(5)), T2, `T² for ${p}`);
    if (rows2[p]) sig(e.P / Math.sqrt(M2), 4, rows2[p], `T at 1.995 M☉ for ${p}`);
  }
  // the key's fits of the four figure readouts: slope 1.0000355 ± 0.0000002 (M = 1.0000), 0.9996 ± 0.0003 without Halley; 0.50125 ± 0.00004 at 1.995 M☉ (M = 1.9950)
  const names = ['mercury', 'earth', 'mars'], xs = [], ys = [];
  for (const p of [...names, 'dragged', 'halley']) {
    const e = p === 'dragged' ? K.orbitElements({ x: 1, y: 0, vx: 0, vy: Math.sqrt(GM(1)) + 3 / K.KMS }, GM(1)) : el(p);
    /* the table's a³ and T² columns: the four figure readouts cubed and squared, to five figures */
    xs.push(+((+e.a.toPrecision(4)) ** 3).toPrecision(5)); ys.push(+((+e.P.toPrecision(4)) ** 2).toPrecision(5));
  }
  const f = K.fitOrigin(xs, ys); fixed(f.b, 7, '1.0000355'); near(f.sb, 1.4e-7, 1e-8, 'key prints the slope error as 0.0000002 (it is 0.00000014)'); fixed(1 / f.b, 4, '1.0000');
  near(Math.max(...ys.map((y, i) => Math.abs(y - f.b * xs[i]))), 0.00153, 1e-5, 'largest residual (Mars); the key says at most 0.0012');
  /* without Halley: the key's 0.9996 ± 0.0003 (M = 1.0004) is the fit with an intercept; through the origin the CORE gives 0.9998 ± 0.0002 */
  const f4 = K.fitOrigin(xs.slice(0, 4), ys.slice(0, 4)); fixed(f4.b, 4, '0.9998'); fixed(f4.sb, 4, '0.0002'); fixed(1 / f4.b, 4, '1.0002');
  const F4 = fit(xs.slice(0, 4), ys.slice(0, 4)); fixed(F4.b, 4, '0.9996'); fixed(F4.sb, 4, '0.0003'); fixed(1 / F4.b, 4, '1.0004');
  const F = fit(xs, ys); fixed(F.a, 4, '-0.0003'); fixed(F.sa, 4, '0.0004'); fixed(F.b, 7, '1.0000355');
  const x2 = xs.slice(0, 3), y2 = names.map((p) => +((+(el(p).P / Math.sqrt(M2)).toPrecision(4)) ** 2).toPrecision(5));
  assert.deepStrictEqual(y2, [0.02907, 0.50112, 1.7742], 'T² column at 1.995 M☉');
  /* the key's 0.50125 ± 0.00004 and M = 1.9950 are the fit with an intercept; through the origin the CORE gives 0.50123 ± 0.00002 */
  const g = K.fitOrigin(x2, y2); fixed(g.b, 5, '0.50123'); fixed(g.sb, 5, '0.00002'); fixed(1 / g.b, 3, '1.995'); fixed(f.b / g.b, 3, '1.995');
  const G2 = fit(x2, y2); fixed(G2.a, 5, '-0.00006'); fixed(G2.sa, 5, '0.00008'); fixed(G2.b, 5, '0.50125'); fixed(G2.sb, 5, '0.00004'); fixed(1 / G2.b, 4, '1.9950');
});

group('CSV and number helpers used by Capture reading', () => {
  assert.strictEqual(K.csvCell('a,b'), '"a,b"'); assert.strictEqual(K.csvCell('plain'), 'plain'); assert.strictEqual(K.num('−0.5'), -0.5); assert(Number.isNaN(K.num('')));
  assert.strictEqual(K.buildCSV(['note'], ['a', 'b'], [[1, 2]]), '# note\na,b\n1,2\n');
});

console.log(`${n} kepler-orbits test groups passed`);
