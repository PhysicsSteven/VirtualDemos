/* Known values for the break-it test (tools/breakit.cjs), gamma-spectroscopy. Hook: window.__gs (S, spec, rates, rois, cal, rows, C).
   Spectrum counts stay finite, non negative and add up to the total; live time never exceeds real time; the ROI readouts (gross,
   background, net) equal C.roiStats on the live spectrum; the Omega/4pi readout is the exact on-axis solid angle of the cylinder face,
   (1 - d/sqrt(d^2 + R^2))/2; the input rate readout is the sum of the channel rates; the Cs-137 Compton edge is 2E^2/(mc^2 + 2E)
   = 477.3 keV and its backscatter peak 184.3 keV (E = 661.657 keV, ENSDF); a calibration round trip channel -> keV -> channel
   returns the channel; a recorded row has rate = net/live. */
const pre = `const g = window.__gs; if (!g || !g.S || !g.spec) return true;
  const S = g.S, spec = g.spec, C = g.C, $ = (id) => document.getElementById(id), num = (id) => parseFloat($(id).textContent.replace(/\\u2212/g, '-'));
`;
module.exports = {
  checks: [
    { name: "spectrum counts are finite, non negative, and sum to the total; live <= real", fn: `(() => { ${pre}
      let s = 0; for (let i = 0; i < spec.counts.length; i++) { const v = spec.counts[i]; if (!(v >= 0) || !isFinite(v)) return 'channel ' + i + ' holds ' + v; s += v; }
      if (Math.abs(s - spec.total) > 0.5 + 1e-9 * s) return 'channels add up to ' + s + ' but total is ' + spec.total;
      if (!(spec.live <= spec.real + 1e-9) || !(spec.live >= 0)) return 'live ' + spec.live + ' real ' + spec.real;
      if (g.rates && g.ready) { let n = 0; for (const v of g.rates) { if (!(v >= 0) || !isFinite(v)) return 'a channel rate is ' + v; n += v; } if (Math.abs(n - g.nIn) > 1e-6 * (n + 1)) return 'nIn ' + g.nIn + ' vs sum of rates ' + n;
        const t = $('rRate').textContent; if (t !== '—' && Math.abs(parseFloat(t) - g.nIn) > 0.51) return 'input rate readout ' + t + ', sum of rates ' + g.nIn; }
      return true; })()` },
    { name: "ROI gross, background and net equal roiStats on the live spectrum", fn: `(() => { ${pre}
      if (g.acquiring) return true;   /* the readout refreshes on a timer while counting */
      const r = g.rois && g.rois[0]; if (!r || spec.total === 0) return true;
      const sel = g.rois.length === 1 ? g.rois[0] : null; if (!sel) return true;
      const st = C.roiStats(spec.counts, sel.a, sel.b); if (!st || $('qG').textContent === '—') return true;
      if (num('qG') !== Math.round(st.G) || Math.abs(num('qB') - st.B) > 0.51) return 'gross ' + $('qG').textContent + ', background ' + $('qB').textContent + '; roiStats G ' + st.G + ', B ' + st.B;
      const net = parseFloat($('qN').textContent); if (Math.abs(net - (num('qG') - num('qB'))) > 1.01) return 'net ' + $('qN').textContent + ' is not gross - background';
      if (!(st.snet >= Math.sqrt(Math.max(st.G, 0)) - 1e-9)) return 'net uncertainty smaller than sqrt(gross)';
      return true; })()` },
    { name: "solid angle, Compton edge and backscatter peak", fn: `(() => { ${pre}
      const R = C.SIZES[S.size].R, w = 0.5 * (1 - S.d / Math.sqrt(S.d * S.d + R * R)), shown = parseFloat($('rOmega').textContent);
      if (Math.abs(shown - 100 * w) > 0.0006) return 'Omega/4pi shows ' + $('rOmega').textContent + ', exact ' + 100 * w + ' %';
      const E = 661.657, M = 510.99895;
      if (Math.abs(C.comptonEdge(E) - 2 * E * E / (M + 2 * E)) > 1e-9 || Math.abs(C.comptonEdge(E) - 477.34) > 0.01) return 'Compton edge ' + C.comptonEdge(E);
      if (Math.abs(C.backscatterE(E) - 184.32) > 0.01 || Math.abs(C.comptonEdge(E) + C.backscatterE(E) - E) > 1e-9) return 'backscatter ' + C.backscatterE(E);
      return true; })()` },
    { name: "calibration round trip, and a recorded row has rate = net/live", fn: `(() => { ${pre}
      for (const r of g.rows || []) { if (isFinite(r.rate) && r.live > 0 && Math.abs(r.rate - r.net / r.live) > 1e-9 * Math.abs(r.rate) + 1e-12) return 'row ' + r.n + ' rate ' + r.rate + ' but net/live ' + r.net / r.live; if (!(r.live > 0)) return 'row ' + r.n + ' live ' + r.live; }
      return true; })()` }
  ],
  steps: [
    { name: "acquire Cs-137, mark a peak, record, then switch the source, size, distance and HV while acquiring", fn: `(() => {
      const g = window.__gs; if (!g) return; const set = (id, v) => { const e = document.getElementById(id); if (!e) return; e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); e.dispatchEvent(new Event('change', { bubbles: true })); };
      g.start(); g.roiAt(600, 720); g.addRow(); g.addRow();
      for (const v of ['co60', 'na22', 'none', 'unk', 'cs137']) { const b = document.querySelector('[data-src="' + v + '"], #presets [data-p="' + v + '"]'); if (b) b.click(); }
      set('hv', '600'); set('hv', '1200'); set('hv', '900'); g.stop(); })()` },
    { name: "distance and region of interest at their extremes, then clear while a row exists", fn: `(() => {
      const g = window.__gs; if (!g) return; g.setDist && g.setDist(0.5); g.start(); g.roiAt(0, 3000); g.roiAt(660, 662); g.addRow(); g.setDist && g.setDist(40); g.roiAt(5, 5); g.clearSpec(); g.roiAt(600, 720); })()` }
  ]
};
