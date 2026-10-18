// Photopeak and total rates versus distance from the demo's Monte Carlo core; compare with the solid angle and 1/d^2.
const C = require('./load.cjs');
const N = +(process.argv[2] || 400000);
const E = +(process.argv[3] || 661.657);
const rnd = C.mulberry(777);
const ds = [1, 2, 3, 5, 7, 10, 15, 20, 30, 50];
function fit(xs, ys) { const n = xs.length, mx = xs.reduce((a, b) => a + b) / n, my = ys.reduce((a, b) => a + b) / n; let sxy = 0, sxx = 0; for (let i = 0; i < n; i++) { sxy += (xs[i] - mx) * (ys[i] - my); sxx += (xs[i] - mx) ** 2; } return sxy / sxx; }
for (const sz of ['s2', 's3']) {
  const { R, H } = C.SIZES[sz];
  console.log(`\n# ${C.SIZES[sz].label}, E = ${E} keV, N = ${N} per point`);
  console.log('d_cm,omega_frac,inter,peak,peak_rate_per_emitted,total_rate_per_emitted,ratio_to_10cm_peak,omega_ratio_to_10cm,invsq_ratio_to_10cm');
  const rows = [];
  for (const d of ds) { const r = C.respLine(E, R, H, d, N, rnd); const g = C.omegaFrac(d, R); rows.push({ d, g, inter: r.inter, peak: r.peak, pr: g * r.peak, tr: g * r.inter }); }
  const ref = rows.find((r) => r.d === 10);
  for (const r of rows) console.log([r.d, r.g.toExponential(4), r.inter.toFixed(4), r.peak.toFixed(4), r.pr.toExponential(4), r.tr.toExponential(4), (r.pr / ref.pr).toFixed(4), (r.g / ref.g).toFixed(4), (100 / r.d / r.d).toFixed(4)].join(','));
  // slope of log rate vs log d over 3 to 30 cm, and effective depth delta from the 10 to 20 cm ratio
  const sel = rows.filter((r) => r.d >= 3 && r.d <= 30);
  const sPeak = fit(sel.map((r) => Math.log(r.d)), sel.map((r) => Math.log(r.pr)));
  const sTot = fit(sel.map((r) => Math.log(r.d)), sel.map((r) => Math.log(r.tr)));
  const r10 = rows.find((r) => r.d === 10), r20 = rows.find((r) => r.d === 20);
  const q = r10.pr / r20.pr; // (20+δ)²/(10+δ)² = q → δ = (20 − 10√q)/(√q − 1)
  const sq = Math.sqrt(q), delta = (20 - 10 * sq) / (sq - 1);
  const qt = r10.tr / r20.tr, sqt = Math.sqrt(qt), deltaT = (20 - 10 * sqt) / (sqt - 1);
  // effective depth by fitting rate = k/(d+δ)^2 over 5..50 cm (grid search)
  let best = null; for (let dl = -2; dl <= 8; dl += 0.01) { const xs = rows.filter((r) => r.d >= 5).map((r) => -2 * Math.log(r.d + dl)), ys = rows.filter((r) => r.d >= 5).map((r) => Math.log(r.pr)); const my = ys.reduce((a, b) => a + b) / ys.length, mx = xs.reduce((a, b) => a + b) / xs.length; let ss = 0; for (let i = 0; i < xs.length; i++) ss += (ys[i] - my - (xs[i] - mx)) ** 2; if (!best || ss < best.ss) best = { dl, ss }; }
  console.log(`slope log(peak rate) vs log d, 3..30 cm: ${sPeak.toFixed(3)}; total: ${sTot.toFixed(3)}`);
  console.log(`peak rate drop 10->20 cm: ${q.toFixed(3)}  (solid angle alone ${(r10.g / r20.g).toFixed(3)}); effective depth delta from that pair: peak ${delta.toFixed(2)} cm, total ${deltaT.toFixed(2)} cm`);
  console.log(`best 1/(d+delta)^2 fit to peak rate over 5..50 cm: delta = ${best.dl.toFixed(2)} cm`);
}
