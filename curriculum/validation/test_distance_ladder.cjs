'use strict';
/* Cosmic Distance Ladder: the star rungs added 2026-10-31 (main sequence fitting, spectroscopic parallax, Cepheid photometry) */
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const c = core('distance-ladder', 'MSF,ridge,spCal,makeCluster,CLUSTERS,clusterOffset,ccdFrame,ccdField,aperture,centroid,instMag,makeCepheids,cepMag,COMPS,CEP_XY,HYG25,HYG_BINS,SP_TARGETS,distModulus,distFromModulus,MS_LO,MS_HI,CCD_W,CCD_H');
const near = (a, b, tol, msg) => assert.ok(Math.abs(a - b) <= tol, `${msg}: ${a} against ${b}`);

// the HYG subset: 1516 Hipparcos stars within 25 pc, ten targets 40 to 100 pc away with class V types
assert.equal(c.HYG25.length, 1516);
assert.equal(c.SP_TARGETS.length, 10);
for (const t of c.SP_TARGETS) { assert.ok(t.d >= 40 && t.d <= 100, t.name); assert.ok(/ V$/.test(t.spect), t.spect); }

// the ridge line: a quadratic least squares fit with 3σ clipping, the same numbers numpy gives (np.polyfit on the kept stars)
assert.equal(c.MSF.nAll, 530); assert.equal(c.MSF.n, 511);
near(c.ridge(0.3), 2.54, 0.01, 'ridge at 0.3'); near(c.ridge(0.9), 6.14, 0.01, 'ridge at 0.9'); near(c.ridge(1.5), 8.91, 0.01, 'ridge at 1.5');
// the clipping has converged: every kept star is within 3σ of the line, every dropped one outside
{
  const pts = c.HYG25.filter((p) => p[2] >= 0 && p[0] / 1000 >= c.MS_LO && p[0] / 1000 <= c.MS_HI);
  const inside = pts.filter((p) => Math.abs(p[1] / 100 - c.ridge(p[0] / 1000)) < 3 * c.MSF.s).length;
  assert.equal(inside, c.MSF.n);
}

// spectroscopic parallax calibration: mean and spread of M_V in a half class bin
{
  const k = c.HYG_BINS.indexOf('G0'), M = c.HYG25.filter((p) => p[2] === k).map((p) => p[1] / 100);
  const mean = M.reduce((a, v) => a + v, 0) / M.length, s = c.spCal('G0');
  assert.equal(s.n, M.length); near(s.mean, mean, 1e-12, 'G0 mean'); near(s.mean, 4.55, 0.01, 'G0 mean value');
}
// distance modulus round trip
near(c.distFromModulus(c.distModulus(640)), 640, 1e-9, 'modulus round trip');

// main sequence fitting: the mean square offset is a parabola in the shift with its lowest point at the mean offset
{
  const q = c.CLUSTERS.B, cl = c.makeCluster(q.d, q.blue, q.n, q.seed);
  const o0 = c.clusterOffset(cl.stars, 0), best = o0.mean;
  for (const s of [best - 0.5, best, best + 0.7]) near(c.clusterOffset(cl.stars, s).ms, o0.ms - 2 * s * o0.mean + s * s, 1e-9, 'parabola');
  // without spread or pairs the best shift is the true modulus: binaries pull it brighter (smaller), so it lies a little below
  assert.ok(best < cl.mu && best > cl.mu - 0.3, `best ${best} against true ${cl.mu}`);
  assert.ok(cl.stars.every(([, V]) => V <= 19));
}

// Cepheid photometry: differential photometry recovers the simulated magnitude to within its stated uncertainty, whatever the clouds
{
  const cep = c.makeCepheids('lmc')[2], field = c.ccdField(502);
  let chi2 = 0, n = 0;
  for (let night = 0; night < 12; night++) {
    const F = c.ccdFrame(cep, night, field, 9001 + 97 * 2 + night);
    near(F.Vc, c.cepMag(cep.obs[night][0], cep), 1e-12, 'frame magnitude');
    const a = c.aperture(F.img, c.CEP_XY[0], c.CEP_XY[1], 6), b = c.aperture(F.img, c.COMPS[0].x, c.COMPS[0].y, 6);
    const V = c.COMPS[0].V - 2.5 * Math.log10(a.net / b.net), sig = 1.0857 * Math.hypot(a.sig / a.net, b.sig / b.net);
    chi2 += ((V - F.Vc) / sig) ** 2; n++;
  }
  assert.ok(chi2 / n < 3, `reduced chi square ${chi2 / n}`);
  // a noiseless frame: one star alone, a big aperture gets all its counts back
  const img = new Float64Array(c.CCD_W * c.CCD_H).fill(100); const N = 1e5, sg = 1.3;
  let sum = 0; const w = [];
  for (let y = 40; y < 60; y++) for (let x = 54; x < 74; x++) { const v = Math.exp(-((x + 0.5 - 64) ** 2 + (y + 0.5 - 50) ** 2) / (2 * sg * sg)); w.push([x, y, v]); sum += v; }
  for (const [x, y, v] of w) img[y * c.CCD_W + x] += N * v / sum;
  near(c.aperture(img, 64, 50, 7).net, N, 1, 'aperture total');
  const ce = c.centroid(img, 62.5, 51.2, 4); near(ce[0], 64, 0.35, 'centroid x'); near(ce[1], 50, 0.35, 'centroid y');
  near(c.instMag(1), 25, 1e-12, 'zero point');
}
console.log('distance ladder star rungs: all checks passed');
