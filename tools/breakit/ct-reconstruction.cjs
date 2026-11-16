/* Known values for the break-it test (tools/breakit.cjs), ct-reconstruction. Hook: window.vdDemo (S, G, Q, stats, view, ...).
   Whatever the zoom, pan or view shown: the grid's geometry matches the controls (views, bins, angle step); a finished noise free
   filtered scan of the head reads the brain at +20 HU within 3 HU when the views meet the sampling rule over 180°; the wire's FWHM
   is 1.12 bins (ramp, 180°, at least 360 views, no noise) within 3 %; the view shown stays inside the scan; the image's field of view
   stays inside the 25.6 cm field. */
const pre = `const D = window.vdDemo; if (!D) return true; const S = D.S, G = D.G, near = (a, b, t) => Math.abs(a - b) <= t;`;
module.exports = {
  checks: [
    { name: 'the scan geometry matches the controls', fn: `(() => { ${pre} if (!G) return 'no geometry';
      if (S.run) return true;
      if (G.K !== S.K) return 'geometry has ' + G.K + ' views, the control ' + S.K;
      if (!near(G.dth, S.R * Math.PI / 180 / S.K, 1e-12)) return 'angle step ' + G.dth;
      if (G.M % 2 !== 1 || !near(G.ds * 10, S.D, 1e-12)) return 'bins ' + G.M + ' of ' + G.ds;
      if (S.show < 0 || S.show >= S.K) return 'view shown ' + S.show + ' of ' + S.K;
      const v = D.view(); if (v.x0 < -12.8 - 1e-9 || v.y0 < -12.8 - 1e-9 || v.x0 + v.w > 12.8 + 1e-9 || v.y0 + v.w > 12.8 + 1e-9) return 'view outside the field: ' + JSON.stringify(v);
      return true; })()` },
    { name: 'noise free head: brain +20 HU when sampled well', fn: `(() => { ${pre}
      if (S.run || S.done !== S.K || S.ph !== 'head' || S.m !== 'fbp' || S.noise || S.R !== 180 || S.K < 300 || S.roi !== 0 || !D.stats) return true;
      const h = D.hu(D.stats.mean); return near(h, 20, 3) ? true : 'brain reads ' + h + ' HU'; })()` },
    { name: 'wire FWHM = 1.12 bins with the ramp', fn: `(() => { ${pre}
      if (S.run || S.done !== S.K || S.ph !== 'wire' || S.m !== 'fbp' || S.f !== 'ramp' || S.noise || S.R !== 180 || S.K < 360 || !D.stats) return true;
      const r = D.stats.fw / S.D; return near(r, 1.118, 0.035) ? true : 'FWHM ' + D.stats.fw + ' mm with ' + S.D + ' mm bins'; })()` },
  ],
};
