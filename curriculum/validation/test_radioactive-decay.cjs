'use strict';
// Radioactive Decay: Bateman chain with branching and elution (the ⁹⁹Mo → ⁹⁹ᵐTc generator, Medical Physics module, 2026-10-25).
const assert = require('node:assert');
const { core, readLib, readDemo } = require('./demo_source.cjs');
const vm = require('node:vm');
const c = core('radioactive-decay', 'fractions,cumDecays,peakTime,makeSim,stepSim,elute,expected');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const L2 = Math.LN2, TMO = 65.924, TTC = 6.0072, BR = 0.886, lam = [L2 / TMO, L2 / TTC];

group('expected() with no branching and no elution is the Bateman solution', () => {
  for (const t of [0, 3, 22.85, 100, 500]) { const e = c.expected(lam, t, 1, []), f = c.fractions(lam, t, 0);
    near(e[0], f[0], 1e-12, 'P'); near(e[1] + 1e-300, f[1] + 1e-300, 1e-12, 'D'); assert(Math.abs(e[0] + e[1] + e[2] - 1) < 1e-12); }
});
group('generator: peak at 22.85 h, transient equilibrium ratio B λD/(λD − λP) = 0.9748', () => {
  near(c.peakTime(lam[0], lam[1]), 22.85, 0.001, 'peak');
  const t = 200, e = c.expected(lam, t, BR, []);
  near(lam[1] * e[1] / (lam[0] * e[0]), BR * lam[1] / (lam[1] - lam[0]), 1e-6, 'ratio'); near(BR * TMO / (TMO - TTC), 0.9748, 1e-4);
});
group('elution: daughter starts again from zero; parent untouched; shares add to 1', () => {
  const el = [24, 48], e1 = c.expected(lam, 48 + 1e-9, BR, el), e0 = c.expected(lam, 48 - 1e-9, BR, [24]);
  assert(e1[1] < 1e-9, 'daughter after elution'); near(e1[3] - c.expected(lam, 47.999, BR, [24])[3], e0[1], 1e-3, 'eluted = daughter just before');
  for (const t of [10, 30, 60, 150]) { const e = c.expected(lam, t, BR, el); near(e[0] + e[1] + e[2] + e[3], 1, 1e-12, 'sum'); near(e[0], Math.exp(-lam[0] * t), 1e-12, 'P'); }
  /* regrowth after an elution at te follows B N_P(te) λP/(λD − λP)(e^(−λP τ) − e^(−λD τ)) */
  const te = 24, tau = 6, e = c.expected(lam, te + tau, BR, [te]);
  near(e[1], BR * Math.exp(-lam[0] * te) * lam[0] / (lam[1] - lam[0]) * (Math.exp(-lam[0] * tau) - Math.exp(-lam[1] * tau)), 1e-10, 'regrowth');
});
group('simulation matches expected() within 4σ for 200,000 nuclei with branching and two elutions', () => {
  const N = 200000, dt = 0.5, s = c.makeSim(N, lam, dt, 2026, BR), el = [24, 48];
  let k = 0; const D1 = [0, 0];
  for (const te of [24, 48, 72]) { while (k * dt < te - 1e-9) { const r = c.stepSim(s); D1[0] += r.d0; D1[1] += r.d1; k++; } if (te < 72) c.elute(s); }
  const e = c.expected(lam, 72, BR, el);
  [[s.counts[0], e[0]], [s.counts[1], e[1]], [s.counts[2], e[2]], [s.counts[3], e[3]], [D1[0], e[4]], [D1[1], e[5]]].forEach(([got, f], i) => {
    const sg = Math.sqrt(N * f * (1 - f)); assert(Math.abs(got - N * f) < 4 * sg + 1, `species ${i}: ${got} against ${N * f} ± ${sg}`); });
  assert.equal(s.counts.reduce((a, b) => a + b, 0), N);
});
group('a single species decays as e^(−λt) and elute() does nothing', () => {
  const s = c.makeSim(1000, [L2 / 6], 1, 7); assert.equal(c.elute(s), 0); for (let i = 0; i < 6; i++) c.stepSim(s);
  assert(Math.abs(s.counts[0] - 500) < 4 * Math.sqrt(250));
});

/* single nuclei (2026-10-31): Gamow's alpha model and the allowed beta spectrum, on NUBASE2020 */
const s1 = core('radioactive-decay', 'useNubase,alphaQ,gamow,alphaMeasured,gnX,ALPHA_SET,betaQ,betaTable,sampleBeta,fermiNR,BETA_SET');
{ const d = {}; vm.runInNewContext(readLib('nubase.js'), d, { timeout: 5000 }); s1.useNubase(d.VDNUBASE); }
group('alpha Q from the masses: ²¹²Po 8.954, ²³⁸U 4.270, ²²⁶Ra 4.871 MeV (AME2020)', () => {
  near(s1.alphaQ(84, 212), 8.9542, 1e-4, 'Po212'); near(s1.alphaQ(92, 238), 4.2698, 1e-4, 'U238'); near(s1.alphaQ(88, 226), 4.8707, 1e-4, 'Ra226');
  const g = s1.gamow(92, 238, 1.2); near(g.Ta, g.Q * (1 - 4.0026 / 238.05), 2e-4, 'alpha takes Q m_d/(m_d + m_α)');
});
group('Gamow: the exact Coulomb WKB integral matches a direct numerical one; P falls with b', () => {
  const g = s1.gamow(84, 212, 1.2), E2 = 7.2973525643e-3 * 197.3269804, k = Math.sqrt(2 * g.mu) / 197.3269804;
  let I = 0; const n = 200000; for (let i = 0; i < n; i++) { /* r = R + (b − R) sin²θ removes the square root end point */
    const th = (i + 0.5) / n * Math.PI / 2, r = g.R + (g.b - g.R) * Math.sin(th) ** 2, dr = (g.b - g.R) * 2 * Math.sin(th) * Math.cos(th) * Math.PI / 2 / n;
    I += Math.sqrt(Math.max(0, 2 * g.Zd * E2 / r - g.Q)) * dr; }
  near(k * I, g.G, 1e-6, 'G');
  assert(s1.gamow(92, 238, 1.2).lgP < g.lgP, 'lower Q, wider barrier, smaller P');
  assert(s1.gamow(84, 212, 1.4).lgT < g.lgT, 'a larger R shortens the half life');
});
group('Gamow with r₀ = 1.2 fm against NUBASE2020: 20 even–even emitters over 26 decades, rms under 0.6 decades', () => {
  let s2 = 0, lo = Infinity, hi = -Infinity;
  for (const [Z, A] of s1.ALPHA_SET) { const m = s1.alphaMeasured(Z, A), g = s1.gamow(Z, A, 1.2); s2 += (g.lgT - m.lgTa) ** 2; lo = Math.min(lo, m.lgTa); hi = Math.max(hi, m.lgTa); }
  const rms = Math.sqrt(s2 / s1.ALPHA_SET.length); assert(rms < 0.6, `rms ${rms}`); assert(hi - lo > 25, 'span');
  near(s1.alphaMeasured(84, 212).lgT, Math.log10(294.4e-9), 1e-4, 'Po212 294.4 ns');
  near(s1.alphaMeasured(98, 252).br, 0.968972, 1e-6, 'Cf252 alpha branch');
  /* Geiger–Nuttall: log T½ rises with Z_d/√Q, correlation 0.946, above 0.93 */
  const xs = s1.ALPHA_SET.map(([Z, A]) => s1.gnX(Z, A)), ys = s1.ALPHA_SET.map(([Z, A]) => s1.alphaMeasured(Z, A).lgTa), mx = xs.reduce((a, b) => a + b) / 20, my = ys.reduce((a, b) => a + b) / 20;
  let sxy = 0, sxx = 0, syy = 0; xs.forEach((x, i) => { sxy += (x - mx) * (ys[i] - my); sxx += (x - mx) ** 2; syy += (ys[i] - my) ** 2; });
  assert(sxy / Math.sqrt(sxx * syy) > 0.93, 'Geiger–Nuttall correlation');
});
group('beta Q from the masses: n 782.35, ³H 18.592, ¹⁴C 156.476, ³²P 1710.66, ¹⁸F (β⁺) 633.92 keV', () => {
  near(s1.betaQ(0, 1, false), 0.782347, 2e-6, 'n'); near(s1.betaQ(1, 3, false), 0.018592, 1e-4, 'H3'); near(s1.betaQ(6, 14, false), 0.156476, 1e-5, 'C14');
  near(s1.betaQ(15, 32, false), 1.710657, 1e-5, 'P32'); near(s1.betaQ(9, 18, true), 1.655918 - 2 * 0.51099895069, 1e-4, 'F18');
});
group('allowed spectra: normalized, means against evaluated values (³H 5.68, ¹⁴C 49.5, ³²P 695, ¹⁸F 249.8 keV)', () => {
  const mean = { '1,3': 5.68, '6,14': 49.5, '15,32': 695, '9,18': 249.8 };
  for (const b of s1.BETA_SET) {
    const Q = s1.betaQ(b.Z, b.A, b.plus), t = s1.betaTable(b.Z + (b.plus ? -1 : 1), Q, b.plus);
    near(t.cum[t.n], 1, 1e-12, 'cum'); let s = 0; for (let i = 0; i < t.n; i++) s += t.d[i] * t.h; near(s, 1, 1e-12, 'density');
    if (mean[`${b.Z},${b.A}`]) near(t.mean * 1000, mean[`${b.Z},${b.A}`], 0.02, `${b.Z},${b.A} mean`);
    /* inverse transform sampling reproduces the mean */
    let x = 12345, acc = 0; const N = 40000; for (let i = 0; i < N; i++) { x = (x * 16807) % 2147483647; acc += s1.sampleBeta(t, x / 2147483647); }
    near(acc / N, t.mean, 0.01, 'sampled mean');
  }
  assert(s1.fermiNR(7, 0.01, false) > 1 && s1.fermiNR(8, 0.01, true) < 1, 'Fermi function: e⁻ pulled back, e⁺ pushed away');
});
/* Counting (2026-11-19): a constant count rate gives Poisson counts and exponential waits; the χ² cells follow the book's rule */
const STc = (() => { const d = {}; vm.runInNewContext(readLib('vdstats.js') + ';globalThis.M = VDSTATS;', d, { timeout: 5000 }); return d.M; })();
const k = core('radioactive-decay', 'counterNew,counterRun,poissonCells,waitsAfter');
group('Counting: counts in Δt have mean and variance μ = RΔt; waits are exponential with mean 1/R and the same after any wait t₀ (memoryless)', () => {
  for (const [R, dt] of [[3, 1], [0.5, 2], [200, 2]]) {
    const c = k.counterNew(R, STc.rng(7)), out = { counts: [], waits: [], times: [] }; k.counterRun(c, 4000 * dt, dt, out);
    assert.strictEqual(out.counts.length, 4000); const m = STc.mean(out.counts), v = STc.variance(out.counts), mu = R * dt;
    near(m, mu, 6 * Math.sqrt(mu / 4000) / mu, `mean count at μ = ${mu}`); near(v / m, 1, 0.08, `variance/mean at μ = ${mu}`);
    assert.strictEqual(out.times.length, out.counts.reduce((a, b) => a + b, 0) + c.k, 'every count is in exactly one interval');
    assert.strictEqual(out.waits.length, out.times.length - 1); near(STc.mean(out.waits), 1 / R, 0.03, 'mean wait');
    if (R === 3) { const left = k.waitsAfter(out.waits, 0.5); near(STc.mean(left), 1 / R, 0.05, 'mean time left after 0.5 s');
      near(left.length / out.waits.length, Math.exp(-1.5), 0.05, 'share longer than 0.5 s, e^(−Rt₀)'); }
  }
  /* running in pieces gives the same counts as running at once (Play and Count 100 times draw the same stream) */
  const a = k.counterNew(3, STc.rng(5)), b = k.counterNew(3, STc.rng(5)), oa = { counts: [], waits: [], times: [] }, ob = { counts: [], waits: [], times: [] };
  k.counterRun(a, 100, 1, oa); for (let t = 0.037; t < 100; t += 0.037) k.counterRun(b, t, 1, ob); k.counterRun(b, 100, 1, ob);
  assert.deepStrictEqual(oa.counts, ob.counts);
});
group('Counting: χ² cells expect at least 5 each and add up to n; a true Poisson sample passes about 95 % of the time at α = 0.05', () => {
  const g = k.poissonCells([0, 1, 1, 2, 2, 2, 3, 3, 4, 5, 6, 2, 3, 1, 0, 2, 3, 4, 2, 1], 2.5, STc);
  near(g.cells.reduce((a, c) => a + c.e, 0), 20, 1e-9, 'expected add to n'); assert.strictEqual(g.cells.reduce((a, c) => a + c.o, 0), 20);
  for (const c of g.cells) assert(c.e >= 5 - 1e-9, 'cell expects ' + c.e); assert.strictEqual(g.df, g.cells.length - 1);
  assert.strictEqual(g.cells[g.cells.length - 1].hi, Infinity);
  /* hand check: μ = 2.5, n = 20: cells k ≤ 1 (e = 20 × 0.287297 = 5.746), k = 2 (5.130), k ≥ 3 (9.124) */
  near(g.cells[0].e, 20 * Math.exp(-2.5) * 3.5, 1e-9, 'k ≤ 1'); near(g.cells[1].e, 20 * Math.exp(-2.5) * 3.125, 1e-9, 'k = 2');
  let reject = 0; const T = 400;
  for (let s = 1; s <= T; s++) { const c = k.counterNew(4, STc.rng(1000 + s)), o = { counts: [] }; k.counterRun(c, 100, 1, o); if (k.poissonCells(o.counts, 4, STc).p < 0.05) reject++; }
  near(reject / T, 0.05, 0.6, 'type I rate');
});
/* Counting view wiring (Steve 2026-11-22): the draws depend only on the draw set, R and Δt, never on the slider path. This runs the
   page's own runSeed, start, restart, take, runTo, count100 and changed (outside the CORE) on the CORE counter and vdstats, with
   the DOM stubbed out; the slider and the Δt buttons do exactly what slide and pressDt do (set K.ri or K.dt, then changed()). */
group('Counting view: the same draw set, R and Δt reached by different slider paths give the same counts and waits', () => {
  const src = readDemo('radioactive-decay'), coreSrc = src.match(/\/\/ ==CORE START==([\s\S]*?)\/\/ ==CORE END==/)[1];
  const fnSrc = (name) => {
    const f = src.search(new RegExp(`^[ \\t]*function ${name}\\(`, 'm')); assert(f >= 0, 'no function ' + name);
    let i = src.indexOf('{', f), depth = 0; for (; i < src.length; i++) { const ch = src[i]; if (ch === '{') depth++; else if (ch === '}' && --depth === 0) break; }
    return src.slice(f, i + 1);
  };
  const rates = src.match(/const RATES = (\[[^\]]+\]);/)[1];
  const body = `${readLib('vdstats.js')}\n${coreSrc}\nconst C = { counterNew, counterRun }, ST = VDSTATS, RATES = ${rates};
    const K = { run: false, ri: 4, dt: 1, seed: 1, rng: null, c: null, counts: [], waits: [], recent: [], flashes: [], tSim: 0 };
    const MAXW = 500000, R = () => RATES[K.ri], setRun = (on) => { K.run = on; }, refresh = () => {}, live = () => {};
    ${['runSeed', 'start', 'restart', 'take', 'runTo', 'count100', 'changed'].map(fnSrc).join('\n')}
    globalThis.P = { K, restart, count100, changed };`;
  const page = () => { const d = {}; vm.runInNewContext(body, d, { timeout: 10000 }); d.P.restart(); return d.P; };
  const slide = (P, ri) => { P.K.ri = ri; P.changed(); }, pressDt = (P, dt) => { P.K.dt = dt; P.changed(); };
  const snap = (P) => JSON.stringify({ counts: P.K.counts, waits: P.K.waits.slice(0, 50).map((w) => w.toFixed(12)) });
  /* each setting two ways: straight to it; or Δt 10 first, the slider dragged down through every rate and back up with Count 100
     times at each stop, Δt 5, then Δt and R last */
  for (const [ri, dt] of [[2, 1], [4, 1], [6, 2], [10, 5], [11, 10], [0, 1]]) {
    const A = page(); slide(A, ri); pressDt(A, dt); A.count100(); A.count100();
    const B = page(); pressDt(B, 10); B.count100(); for (let r = 11; r >= 0; r--) { slide(B, r); B.count100(); }
    for (let r = 0; r <= ri; r++) slide(B, r); pressDt(B, 5); B.count100(); pressDt(B, dt); slide(B, ri); B.count100(); B.count100();
    assert.strictEqual(A.K.counts.length, 200); assert.strictEqual(snap(A), snap(B), `R index ${ri}, Δt ${dt}: the two paths differ`);
  }
  /* back to draw set 1 after draw set 2 and a slider detour gives the opening counts again; draw set 2 differs */
  const A = page(); A.count100(); const first = snap(A);
  A.K.seed = 2; A.restart(); A.count100(); assert.notStrictEqual(snap(A), first, 'draw set 2 differs from draw set 1');
  A.K.seed = 1; A.restart(); slide(A, 7); slide(A, 4); A.count100(); assert.strictEqual(snap(A), first, 'back to draw set 1');
  /* every (R, Δt) pair has its own stream: the first uniform draw differs for all 48 */
  const P = page(), seen = new Set(); for (let r = 0; r < 12; r++) for (const dt of [1, 2, 5, 10]) { slide(P, r); pressDt(P, dt); seen.add(P.K.rng()); }
  assert.strictEqual(seen.size, 48, 'every (R, Δt) pair has its own stream');
});
console.log(`${n} groups passed`);
