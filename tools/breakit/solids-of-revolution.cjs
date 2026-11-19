/* Known values for the break-it test (tools/breakit.cjs), Solids of Revolution. Whatever the zoom, pan, n, view or Play:
   - the integral shown for each setup with an exact value stays that value (8π, 16π/3, 16/3, 4π and so on);
   - the cone gives (3/10)MR² and the sphere (2/5)MR², the bowl 288π cm³;
   - the slice sum shown is the midpoint sum at the n shown, and a cone's frustum bands are exact for every n. */
const is = (k) => `(window.__sol && window.__sol.S.preset === '${k}')`;
module.exports = {
  checks: [
    { name: 'the integral shown equals the exact value of the setup', fn: `(() => {
      const I = window.__sol; if (!I || I.S.preset === 'custom') return true; const v = I.values(); if (!v) return true;
      const want = { diskSqrt: 8 * Math.PI, washer: 2 * Math.PI / 15, aroundLine: 13 * Math.PI / 15, shellsY: 8 * Math.PI / 3, shellsLine: 16 * Math.PI / 3,
        crossSq: 16 / 3, crossSemi: 2 * Math.PI / 3, crossTri: 4 * Math.sqrt(3) / 15, arc: 8 / 27 * (Math.pow(10, 1.5) - 1), coneSurf: Math.PI * Math.sqrt(5),
        sphereArea: 4 * Math.PI, catenary: 20 * Math.sinh(1), bowl: 288 * Math.PI, coneI: 0.006, coneShellI: 0.006, sphereI: 0.008 }[I.S.preset];
      if (want == null) return true;
      /* only while the setup's own method and quantity are showing */
      const m = { diskSqrt: 'disks', washer: 'disks', aroundLine: 'disks', shellsY: 'shells', shellsLine: 'shells', crossSq: 'cross', crossSemi: 'cross', crossTri: 'cross', arc: 'arc', coneSurf: 'surface',
        sphereArea: 'surface', catenary: 'arc', bowl: 'shells', coneI: 'disks', coneShellI: 'shells', sphereI: 'disks' }[I.S.preset];
      if (I.S.method !== m || (I.S.what === 'inertia') !== /I$/.test(I.S.preset)) return true;
      return Math.abs(v.exact - want) < 1e-9 * Math.max(1, want) ? true : I.S.preset + ' shows ' + v.exact;
    })()` },
    { name: 'I in units of MR²: the cone 3/10, the sphere 2/5', fn: `(() => {
      const I = window.__sol; if (!I) return true; const v = I.values(); if (!v || !v.R) return true;
      const r = v.exact / (I.S.mass * v.R * v.R);
      if (${is('coneI')} || ${is('coneShellI')}) return Math.abs(r - 0.3) < 1e-9 ? true : 'cone ' + r;
      if (${is('sphereI')}) return Math.abs(r - 0.4) < 1e-9 ? true : 'sphere ' + r;
      return true;
    })()` },
    { name: 'the sum shown is the slice sum at n; frustum bands on a cone are exact', fn: `(() => {
      const I = window.__sol; if (!I || !I.S.P) return true; const v = I.values(); if (!v || I.S.what === 'inertia') return true;
      const s = I.sliceSum(I.S.method, I.S.P, I.S.n);
      if (Math.abs(v.sum - s) > 1e-12 * Math.max(1, Math.abs(s))) return 'sum ' + v.sum + ' vs ' + s;
      if (${is('coneSurf')} && Math.abs(v.sum - Math.PI * Math.sqrt(5)) > 1e-12) return 'cone bands ' + v.sum;
      return true;
    })()` },
  ],
  steps: [
    { name: 'the 3D view', fn: `(() => { const b = document.querySelector('#dimSeg [data-dim="3d"]'); if (b) b.click(); })()` },
    { name: 'every method on the cone at 256 slices', fn: `(() => { const I = window.__sol; I.applyPreset('coneI'); I.setN(256); for (const m of ['shells', 'cross', 'arc', 'surface', 'disks']) document.querySelector('#methodSeg [data-m="' + m + '"]').click(); })()` },
    { name: 'the horn: surface area of 1/x', fn: `(() => { const I = window.__sol; I.applyPreset('horn'); I.setN(1); I.setN(256); })()` },
    { name: 'back to Flat', fn: `(() => { const b = document.querySelector('#dimSeg [data-dim="flat"]'); if (b) b.click(); })()` },
  ],
};
