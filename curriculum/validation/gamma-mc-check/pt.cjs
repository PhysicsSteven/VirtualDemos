// Peak to total and intrinsic efficiencies from the demo's own Monte Carlo core (unmodified, extracted from the demo file).
const C = require('./load.cjs');
const N = +(process.argv[2] || 200000);
const energies = [59.5, 81.0, 122.1, 279.2, 356.0, 511.0, 661.7, 834.8, 1173.2, 1274.5, 1332.5, 1836.1, 2614.5];
const geoms = [['point 10 cm', 10], ['point 5 cm', 5], ['point 1 cm', 1], ['parallel beam', C.FAR]];
const sizes = ['s2', 's3'];
const rnd = C.mulberry(20261018);
// smeared peak: Gaussian FWHM from the demo's resolution model (7.0 % at 662 keV), peak window ±1.5 FWHM around E,
// continuum under the peak estimated from the mean level in the band 1.5 to 3 FWHM below the window.
function smearedPeak(hist, E) {
  const BW = C.BW, fw = C.fwhmFrac(E, 0.07) * E, sig = fw / 2.35482;
  // smear histogram by Gaussian: evaluate expected content in the window directly
  const lo = E - 1.5 * fw, hi = E + 1.5 * fw, blo = E - 4.5 * fw, bhi = E - 1.5 * fw;
  let inWin = 0, inBand = 0;
  for (let k = 0; k < hist.length; k++) {
    const w = hist[k]; if (!(w > 0)) continue;
    const e = (k + 0.5) * BW;
    inWin += w * (C.Phi((hi - e) / sig) - C.Phi((lo - e) / sig));
    inBand += w * (C.Phi((bhi - e) / sig) - C.Phi((blo - e) / sig));
  }
  const cont = inBand / (bhi - blo) * (hi - lo);  // flat continuum extrapolated under the window
  return Math.max(0, inWin - cont);
}
const out = [];
console.log('size,geometry,d_cm,E_keV,N,inter,peak,PT_ideal,PT_smeared,peak_smeared,total_gt20keV,PT_smeared_gt20');
for (const sz of sizes) {
  const { R, H } = C.SIZES[sz];
  for (const [gname, d] of geoms) {
    for (const E of energies) {
      const r = C.respLine(E, R, H, d, N, rnd);
      let tot20 = 0; for (let k = 40; k < r.hist.length; k++) tot20 += r.hist[k];
      const ps = smearedPeak(r.hist, E);
      const row = { sz, gname, d, E, N, inter: r.inter, peak: r.peak, pt: r.peak / r.inter, pts: ps / r.inter, ps, tot20, pts20: ps / tot20 };
      out.push(row);
      console.log([sz, gname, d, E, N, r.inter.toFixed(4), r.peak.toFixed(4), (r.peak / r.inter).toFixed(4), (ps / r.inter).toFixed(4), ps.toFixed(4), tot20.toFixed(4), (ps / tot20).toFixed(4)].join(','));
    }
  }
}
require('fs').writeFileSync(__dirname + '/pt_results.json', JSON.stringify(out, null, 1));
