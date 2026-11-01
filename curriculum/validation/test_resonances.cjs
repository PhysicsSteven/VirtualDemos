'use strict';
// Orbital Resonances: the Kepler drift, the resonance distances, the 3:1 asteroid crossing Mars's orbit, Pluto kept from Neptune,
// the real counts, the Finding Neptune fits (Uranus alone, Le Verrier's planet, the real Neptune), and Clearing the gaps (the worker
// text, the 3:1 and the inner edge emptying, and Jupiter and Saturn integrated together: conservation, great inequality, secular changes).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('resonances', 'kwCore,KW_CONST,GM,D2R,ME_SUN,PLANETS,MARS_Q,kepState,stateAt,elements,drift,resonanceA,makeSystem,stepSystem,neptuneTruth,fitUranus,planetX,LEVERRIER,BELT_HIST,KB_HIST');

let n = 0;
const abs = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b} ± ${tol}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
/* a body started as the demo's setup card starts it: a, e, the angle ahead of the planet at J2000, at perihelion */
function single(key, a, e, ph, removeMars, years, Mdeg = 0) {
  const pl = c.PLANETS[key], P0 = c.stateAt(pl, 0, c.GM * (1 + 1 / pl.mr)), L = Math.atan2(P0[1], P0[0]) + ph * c.D2R, M = Mdeg * c.D2R;
  const sys = c.makeSystem(key, [{ a, e, w: L - M, M }], key === 'jupiter' ? 0.1 : 0.5);
  while (sys.t < years - 1e-9 && !sys.gone[0]) c.stepSystem(sys, removeMars);
  return sys;
}

group('constants: Gauss k, IAU 2009 masses, Mars aphelion', () => {
  abs(c.GM, Math.pow(0.01720209895 * 365.25, 2), 1e-12, 'GM');
  abs(c.GM, 39.4769, 1e-4, 'GM value');
  assert.strictEqual(c.PLANETS.jupiter.mr, 1047.348644); assert.strictEqual(c.PLANETS.neptune.mr, 19412.26);
  abs(c.MARS_Q, 1.666, 0.0005, 'Mars aphelion');
  abs(1 / c.ME_SUN, 332946.0487, 1e-6, 'Sun/Earth mass ratio');
});

group('Kepler drift: exact over many orbits, elements recovered', () => {
  const s = new Float64Array(c.kepState(2.5, 0.2, 0.7, 1.1, c.GM)), P = 2 * Math.PI * Math.pow(2.5, 1.5) / Math.sqrt(c.GM), N = 400;
  for (let k = 0; k < 100 * N; k++) assert(c.drift(s, 0, c.GM, P / N));
  const s0 = c.kepState(2.5, 0.2, 0.7, 1.1, c.GM); for (let k = 0; k < 4; k++) abs(s[k], s0[k], 1e-9, 'state after 100 orbits');
  const el = c.elements(s[0], s[1], s[2], s[3], c.GM); abs(el.a, 2.5, 1e-11, 'a'); abs(el.e, 0.2, 1e-11, 'e'); abs(el.w, 0.7, 1e-11, 'w');
});

group('resonance distances from Kepler\'s third law', () => {
  const aJ = c.PLANETS.jupiter.a, aN = c.PLANETS.neptune.a;
  abs(c.resonanceA(aJ, 3, 1), 2.501, 0.001, '3:1'); abs(c.resonanceA(aJ, 5, 2), 2.825, 0.001, '5:2'); abs(c.resonanceA(aJ, 7, 3), 2.958, 0.001, '7:3');
  abs(c.resonanceA(aJ, 2, 1), 3.278, 0.001, '2:1'); abs(c.resonanceA(aJ, 3, 2), 3.970, 0.001, '3:2 (Hildas)');
  abs(c.resonanceA(aN, 2, 3), 39.40, 0.01, 'Neptune 3:2'); abs(c.resonanceA(aN, 1, 2), 47.73, 0.01, 'Neptune 2:1');
});

group('the 3:1 asteroid crosses Mars\'s orbit at 4,157 years; at 2.55 AU it stays calm', () => {
  const s = single('jupiter', 2.502, 0.15, 60, true, 30000);
  assert(s.gone[0] && s.gone[0].why === 'mars', 'removed at Mars'); abs(s.gone[0].t, 4157, 1, 'year');
  abs(s.emax[0], 0.333, 0.001, 'largest e');
  /* the passes fall at the same two places of the orbit: true anomalies within 15° of two values half a turn apart */
  const f = s.conj[0].slice(-10).map((x) => ((x.f / c.D2R) % 360 + 360) % 360), A = f.filter((x, i) => i % 2 === 0), B = f.filter((x, i) => i % 2 === 1);
  for (const g of [A, B]) assert(Math.max(...g) - Math.min(...g) < 15, `passes at one place: ${g}`);
  const q = single('jupiter', 2.55, 0.15, 60, true, 20000);
  assert(!q.gone[0], '2.55 AU not removed'); abs(q.emax[0], 0.192, 0.001, 'largest e at 2.55 AU');
});

group('Pluto in the 3:2 never comes within 17 AU of Neptune; with bad timing it is thrown out', () => {
  /* as the Pluto setup starts it: Pluto's J2000 a and e (3 decimals), its mean longitude ahead of Neptune's, and its mean anomaly */
  const pl = c.PLANETS.pluto, nep = c.PLANETS.neptune, ph = ((pl.L - nep.L) % 360 + 360) % 360, M = pl.L - pl.w;
  abs(ph, 294, 1, 'Pluto ahead of Neptune at J2000');
  const s = single('neptune', +pl.a.toFixed(3), +pl.e.toFixed(3), Math.round(ph), false, 20000, M);
  assert(!s.gone[0]); abs(s.dmin[0], 17.57, 0.01, 'closest to Neptune');
  const b = single('neptune', +pl.a.toFixed(3), +pl.e.toFixed(3), (Math.round(ph) + 60) % 360, false, 20000, M);
  abs(b.gone[0] ? b.gone[0].t : 0, 3621, 1, 'bad timing thrown out');
  assert(b.gone[0] && b.gone[0].why === 'planet'); assert(b.dmin[0] < s.rHill + 1e-9 && b.dmin[0] > 0.5); abs(s.rHill, 0.776, 0.001, 'Hill radius');
});

group('the real counts add up to the queried totals', () => {
  for (const [H, total, bins] of [[c.BELT_HIST, 881333, 115], [c.KB_HIST, 6620, 52]]) {
    assert.strictEqual(H.n.length, bins); assert.strictEqual(H.n.reduce((x, y) => x + y, 0), total); assert.strictEqual(H.total, total);
  }
  /* the Kirkwood gaps: the bar at each resonance is far below its neighbors */
  const bar = (a) => c.BELT_HIST.n[Math.floor((a - c.BELT_HIST.from) / c.BELT_HIST.bin + 1e-9)];
  assert(bar(2.49) < 0.3 * bar(2.53)); assert(bar(2.83) < 0.3 * bar(2.79)); assert(bar(3.29) < 0.1 * bar(3.15));
});

group('Finding Neptune: Uranus alone, Le Verrier\'s planet, the real Neptune', () => {
  const NT = c.neptuneTruth();
  const alone = c.fitUranus(NT, null, false, null); abs(alone.rms, 7.34, 0.02, 'alone rms'); abs(alone.maxOld, 230.9, 0.5, 'old sightings');
  const L = c.LEVERRIER, X = (o) => ({ pos: c.planetX(o), m: o.m });
  abs(L.prec, 2.137, 0.001, 'precession 1847 to 2000');
  /* Le Verrier's own longitude for 1847 January 1, in the equinox of 1847: 326°32′ (Laskar 2017) */
  const sL = c.kepState(L.a, L.e, (L.w - L.prec) * c.D2R, (318 + 47 / 60 - 284.75) * c.D2R, c.GM * (1 + L.m));
  abs(((Math.atan2(sL[1], sL[0]) / c.D2R) % 360 + 360) % 360, 326 + 32 / 60, 0.05, 'Le Verrier 1847.0');
  const lv = c.fitUranus(NT, X({ a: L.a, e: L.e, w: L.w, lon: L.lon, m: L.m }), false, null); abs(lv.rms, 3.69, 0.02, 'Le Verrier rms');
  /* the model's Neptune on 1846 Sep 23 as osculating elements (what The real Neptune setup uses), 1/19412.26 of the Sun */
  const real = c.fitUranus(NT, X({ a: 30.1019, e: 0.008655, w: 45.797, lon: 328.4874, m: 1 / 19412.26 }), false, null);
  assert(real.rms < 0.2, `real Neptune rms ${real.rms}`);
  /* a planet X at 30 AU with 17 Earth masses: the drift is smallest near Neptune's direction */
  const at = (lon) => c.fitUranus(NT, X({ a: 30, e: 0, w: 0, lon, m: 17 * c.ME_SUN }), false, null).rms;
  const r = [270, 300, 315, 330, 345, 360].map(at); abs(r[3], 0.44, 0.02, '330°'); assert(r[3] < Math.min(...r.filter((_, i) => i !== 3)));
});

/* Clearing the gaps runs kwCore in a Web Worker from its source text; here it is rebuilt from that text in this context too
   (a vm context runs it about 20 times slower) */
const kwFrom = () => new Function('return ' + c.kwCore.toString())()(JSON.parse(JSON.stringify(c.KW_CONST)));
group('Clearing the gaps: the worker text builds and steps exactly as the page does; the step is fine enough', () => {
  const A = kwFrom(), B = kwFrom(), sa = A.make(40, 11), sb = B.make(40, 11);
  for (let k = 0; k < 10; k++) { A.step(sa, 20); B.step(sb, 7); B.step(sb, 13); }
  for (let i = 0; i < sa.s.length; i++) abs(sa.s[i], sb.s[i], 1e-9, 'batches of different length agree');
  assert.strictEqual(sa.t, 50); assert.strictEqual(A.DT, 0.25);
  /* the same asteroids between the gaps (2.6 to 2.7 AU) with steps of 0.25 and 0.125 yr for 2,000 years: a agrees to 0.002 AU */
  const s1 = A.make(20, 5, { from: 2.6, to: 2.7 }), s2 = A.make(20, 5, { from: 2.6, to: 2.7 }); s2.dt = 0.125;
  while (s1.t < 2000) A.step(s1, 100); while (s2.t < 2000) A.step(s2, 200);
  for (let j = 0; j < 20; j++) { assert(!s1.gone[j] && !s2.gone[j]); abs(A.ae(s1, j)[0], A.ae(s2, j)[0], 0.002, 'a with half the step'); }
  /* the start: spread evenly, e from 0 to 0.3, no Mars crosser */
  const s0 = A.make(1500, 2203), h = A.hist(s0, 2.04, 0.04, 36);
  assert(h.live.every((v) => Math.abs(v - 1500 / 36) <= 1.5), "one per slice, so each 0.04 AU starts with 41 to 43");
  for (let j = 0; j < 1500; j++) { const [a, e] = A.ae(s0, j); assert(e < 0.3 + 1e-9 && a * (1 - e) >= 1.8 - 1e-9); }
});
group('Clearing the gaps: Jupiter and Saturn empty the 3:1 within 25,000 years and leave its neighbors (seed 2203)', () => {
  const A = kwFrom(), st = A.make(300, 2203, { from: 2.40, to: 2.60 }), a31 = c.resonanceA(c.PLANETS.jupiter.a, 3, 1);
  while (st.t < 25000) A.step(st, 400);
  /* measured: 39 of 60 left in the window, 22 removed within 0.04 AU of the 3:1, the other 15 all started with perihelia inside
     1.95 AU (little room to spare as the planets' orbits change), and all 117 rounder neighbors kept */
  const w = A.inWindow(st, a31, 0.02); let near = 0, farRound = 0, sideS = 0, sideN = 0;
  for (let j = 0; j < st.n; j++) {
    const round = st.a0[j] * (1 - st.e0[j]) >= 1.95;
    if (st.gone[j]) { assert.strictEqual(st.gone[j], 1, 'removed by crossing Mars\'s orbit'); if (Math.abs(st.a0[j] - a31) < 0.04) near++; else if (round) farRound++; }
    if (Math.abs(st.a0[j] - a31) > 0.05 && round) { sideS++; if (!st.gone[j]) sideN++; }
  }
  assert(w.now <= 0.7 * w.start, `3:1 window ${w.now} of ${w.start}`);
  assert(near >= 18, `removed near the 3:1 ${near}`); assert(farRound === 0, `rounder orbits removed away from the 3:1: ${farRound}`);
  assert(sideN >= 0.97 * sideS, `neighbors kept ${sideN} of ${sideS}`);
});

group('Clearing the gaps: the turning planet orbits sweep the inner edge of the belt (seed 2203)', () => {
  /* 40 asteroids from 2.04 to 2.10 AU, where an asteroid's perihelion turns at about Saturn's rate (the nu6 secular resonance):
     measured 1, 10, 20 and 34 removed by 50,000, 100,000, 150,000 and 200,000 years (none with the planets on fixed ellipses) */
  const A = kwFrom(), st = A.make(40, 2203, { from: 2.04, to: 2.10 });
  while (st.t < 200000) A.step(st, 400);
  let out = 0; for (let j = 0; j < st.n; j++) if (st.gone[j]) { out++; assert.strictEqual(st.gone[j], 1, 'by crossing Mars\'s orbit'); }
  assert(out >= 30, `inner edge removed ${out} of 40`);
});

/* the planet system alone (no asteroids), sampled every 2 years */
function planetRun(A, T, dt) {
  const st = A.make(0, 1); if (dt) st.dt = dt; const D = 180 / Math.PI, t = [], lam = [[], []], w = [[], []], e = [[], []]; let dE = 0, dL = 0;
  const unwrap = (arr, v) => { if (arr.length) { const p = arr[arr.length - 1]; v = p + (((v - p + Math.PI) % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) - Math.PI; } arr.push(v); };
  while (st.t < T - 1e-9) {
    A.step(st, 8); const en = A.energy(st); dE = Math.max(dE, Math.abs(en.E / st.E0 - 1)); dL = Math.max(dL, Math.abs(en.L / st.L0 - 1)); t.push(st.t);
    for (const k of [0, 1]) { const p = A.pel(st, k); unwrap(lam[k], p.lam); unwrap(w[k], p.w); e[k].push(p.e); }
  }
  /* least squares line through y up to time lim (slope in degrees a year), and the strongest sine wave left after taking the line away
     with a period from P0 to P1 (its amplitude in the units of y) */
  const fit = (y, lim) => { let n = 0, s1 = 0, sy = 0, s2 = 0, sty = 0; for (let i = 0; i < t.length && t[i] <= lim; i++) { n++; s1 += t[i]; sy += y[i]; s2 += t[i] * t[i]; sty += t[i] * y[i]; }
    const b = (n * sty - s1 * sy) / (n * s2 - s1 * s1); return { b: b * D, c: (sy - b * s1) / n, n }; };
  const wobble = (y, lim, P0, P1) => { const f = fit(y, lim), r = []; for (let i = 0; i < f.n; i++) r.push(y[i] - f.c - f.b / D * t[i]);
    let best = { P: 0, A: 0 };
    for (let P = P0; P <= P1; P *= 1.002) { const om = 2 * Math.PI / P; let cc = 0, ss = 0, c2 = 0, s2 = 0; for (let i = 0; i < f.n; i++) { const C = Math.cos(om * t[i]), S = Math.sin(om * t[i]); cc += r[i] * C; ss += r[i] * S; c2 += C * C; s2 += S * S; }
      const amp = Math.hypot(cc / c2, ss / s2); if (amp > best.A) best = { P, A: amp }; }
    return best; };
  return { t, lam, w, e, dE, dL, fit, wobble };
}
group('Clearing the gaps: Jupiter and Saturn pull on each other: energy and angular momentum kept, the great inequality, the turning perihelia', () => {
  const A = kwFrom(), R = planetRun(A, 300000), D = 180 / Math.PI;
  /* Wisdom–Holman keeps the energy error bounded (measured 4.2e-7 over 300,000 years) and the angular momentum to rounding */
  assert(R.dE < 1e-6, `energy ${R.dE}`); assert(R.dL < 1e-11, `angular momentum ${R.dL}`);
  /* mean motions over the first 20,000 years: the long term ones of Simon et al. 1994 (30.34906 and 12.22114 degrees a year) */
  const nJ = R.fit(R.lam[0], 20000).b, nS = R.fit(R.lam[1], 20000).b;
  abs(nJ, 30.34906, 3e-4, 'Jupiter mean motion'); abs(nS, 12.22114, 3e-4, 'Saturn mean motion');
  /* the great inequality: 5 lambda_S - 2 lambda_J goes round once in 883 years (measured 883.4 and 887.4 over 20,000 and 100,000
     years); the wobble it causes in both longitudes peaks at 942 years, the period of 5 lambda_S - 2 lambda_J - 3 varpi_S, which
     the turning perihelia lengthen. Amplitudes over 100,000 years: Jupiter 21.3', Saturn 52.4'. */
  abs(360 / (5 * nS - 2 * nJ), 883, 10, 'great inequality period from the mean motions');
  const phi = R.lam[1].map((v, i) => 5 * v - 2 * R.lam[0][i]); abs(360 / R.fit(phi, 100000).b, 887, 10, '5 lambda_S - 2 lambda_J');
  const wJ = R.wobble(R.lam[0], 100000, 600, 1500), wS = R.wobble(R.lam[1], 100000, 600, 1500);
  abs(wJ.P, 942, 15, 'Jupiter wobble period'); abs(wS.P, 942, 15, 'Saturn wobble period');
  abs(wJ.A * D * 60, 21.3, 1.5, 'Jupiter wobble, arcminutes'); abs(wS.A * D * 60, 52.4, 3, 'Saturn wobble, arcminutes');
  /* the perihelia turn (300,000 years; the real g5 and g6 are 4.26 and 28.25 arcseconds a year) and Jupiter's e swings from
     0.026 to 0.060 and back every 53,450 years (the real one about every 54,000) */
  abs(R.fit(R.w[0], 300000).b * 3600, 4.07, 0.15, 'Jupiter perihelion, arcsec a year'); abs(R.fit(R.w[1], 300000).b * 3600, 28.38, 0.3, 'Saturn perihelion, arcsec a year');
  let lo = 1, hi = 0; for (let i = 0; i < R.t.length && R.t[i] <= 120000; i++) { lo = Math.min(lo, R.e[0][i]); hi = Math.max(hi, R.e[0][i]); }
  abs(lo, 0.0258, 0.001, 'Jupiter e, lowest'); abs(hi, 0.0600, 0.001, 'Jupiter e, highest');
  abs(R.wobble(R.e[0], 300000, 20000, 100000).P, 53450, 1500, 'Jupiter e period');
  /* halving the step changes the great inequality period by less than a year (measured 0.3 yr) */
  const H = planetRun(A, 20000, 0.125), gi = (Q) => 360 / (5 * Q.fit(Q.lam[1], 20000).b - 2 * Q.fit(Q.lam[0], 20000).b);
  abs(gi(H), gi(R), 1, 'great inequality with half the step');
});

console.log(`${n} groups pass`);
