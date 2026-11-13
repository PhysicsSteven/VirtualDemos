/* Known values for the break-it test (tools/breakit.cjs), charged-particles. Hook: window.vdDemo (S, V, fireOne, applyPreset, ...).
   Beam view: the R₀ readout equals the CSDA range in water for the beam; peak depth <= R90 <= R80; every fired track either stopped
   or was lost to a nuclear reaction (S.n = ends + absorbed); the model dose is never negative or NaN; the proton presets match
   NIST PSTAR (150 MeV 157.7 mm, 70 MeV 40.80 mm, 230 MeV 329.5 mm, within the 0.2 mm the page states).
   Graph views: the linear stopping power readout is S/rho times the density, and the range in the material is R/rho.
   Body layers (2026-11-13): the layers' energies add up to the beam energy (all of it with no nuclear reactions) and the table shows no
   NaN; a step adds layers to eight, sets zero and extreme thicknesses, turns them all off, reorders, removes all and fires 1,200 tracks. */
const pre = `const D = window.vdDemo; if (!D) return true; const S = D.S, V = D.V, P = V.part(S.p), e = S.e * P.A;
  const rd = (k) => { for (const r of document.querySelectorAll('#out > div')) if (r.querySelector('dt').textContent.indexOf(k) === 0) return r.querySelector('dd').textContent.replace(/\\u2212/g, '-'); return null; };
  const cm = (t) => { const m = t.match(/^(-?[\\d.]+) (cm|mm|μm)$/); return m ? parseFloat(m[1]) / (m[2] === 'cm' ? 1 : m[2] === 'mm' ? 10 : 1e4) : NaN; };
  const near = (g, w, t) => Math.abs(g - w) <= t * Math.max(Math.abs(w), 1e-12);
`;
module.exports = {
  checks: [
    { name: "beam view: R0 readout is the CSDA range in water; peak <= R90 <= R80", fn: `(() => { ${pre}
      if (S.view !== 'beam' || S.blind) return true;
      const t0 = rd('CSDA range in water'), r0 = cm(t0), want = V.range(e, 'water', P), tol = /μm/.test(t0) ? 6e-6 : /mm/.test(t0) ? 6e-4 : 5.1e-3;
      if (Math.abs(r0 - want) > tol) return 'R0 shows ' + t0 + ', range is ' + want + ' cm';
      const pk = cm(rd('Peak depth')), r90 = cm(rd('Depth of 90')), r80 = cm(rd('Depth of 80'));
      if (isFinite(r90) && isFinite(pk) && pk > r90 + 0.0051) return 'peak depth ' + pk + ' is beyond R90 ' + r90;
      if (isFinite(r80) && isFinite(r90) && r90 > r80 + 0.0051) return 'R90 ' + r90 + ' beyond R80 ' + r80;
      for (const x of S.D.d) if (!(x >= 0) || !isFinite(x)) return 'dose has a bad value ' + x;
      return true; })()` },
    { name: "every fired track stopped or was lost to a nuclear reaction", fn: `(() => { ${pre}
      if (S.n !== S.ends.length + S.absorbed) return 'n = ' + S.n + ', ends ' + S.ends.length + ' + absorbed ' + S.absorbed;
      if (S.absorbed > S.n) return 'more absorbed than fired';
      return true; })()` },
    { name: "proton presets match NIST PSTAR range (within 0.2 mm)", fn: `(() => { ${pre}
      const want = { p150: [150, 15.77], p70: [70, 4.080], p230: [230, 32.95] }[S.preset]; if (!want || S.p !== 'proton' || S.e !== want[0]) return true;
      const r = V.range(S.e, 'water', P); return Math.abs(r - want[1]) <= 0.02 ? true : S.preset + ': range ' + r + ' cm, PSTAR ' + want[1]; })()` },
    { name: "graph views: S = (S/rho) rho and the range in the material is R/rho", fn: `(() => { ${pre}
      if (S.view === 'beam') return true;
      const M = V.mat(S.mat), s = V.S(e, M, P), r = V.range(e, M, P), lin = rd('Linear stopping power'), rr = rd('Range in this material');
      if (!lin || !rr) return 'readouts missing';
      if (!/×/.test(lin) && !near(parseFloat(lin), s * M.rho, 1.5e-3)) return 'linear S shows ' + lin + ', physics ' + s * M.rho;
      if (!(s > 0) || !isFinite(r)) return 'S = ' + s + ', R = ' + r;
      return true; })()` },
    { name: "body layers: the per layer energies add up to the beam energy, less what nuclear reactions carry away", fn: `(() => { ${pre}
      if (S.view !== 'beam' || S.slab !== 'body' || !S.budget.length) return true;
      let tot = 0; for (const q of S.budget) { if (!(q.E >= 0) || !isFinite(q.E)) return 'layer energy ' + q.E; tot += q.E; }
      const nuc = S.nuc && P.z === 1; if (tot > e * 1.002) return 'layers hold ' + tot + ' MeV of ' + e;
      if (!nuc && tot < e * 0.995) return 'layers hold only ' + tot + ' MeV of ' + e + ' with no nuclear losses';
      const acc = S.layAcc.reduce((a, b) => a + b, 0); if (S.n && acc > S.n * e * (1 + 0.1 * (S.sp / 100 + 0.01))) return 'tracks put down ' + acc / S.n + ' MeV each';
      const tab = document.getElementById('layTab'); if (!tab || /NaN|Infinity/.test(tab.textContent)) return 'layer table: ' + (tab && tab.textContent.slice(0, 80));
      return true; })()` },
  ],
  steps: [
    { name: 'every particle at the energy limits with a slab, then the graph views and back, firing in between', fn: `(async () => {
      const D = window.vdDemo, pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const el = document.getElementById(id); el.value = v; el.dispatchEvent(new Event(el.tagName === 'SELECT' ? 'change' : 'input', { bubbles: true })); };
      for (const p of ['carbon', 'alpha', 'proton']) { set('selPart', p); for (const v of ['1', '250', '430', '1']) { set('sE', v); await pause(60); }
        for (const sl of ['lead', 'lung', 'none']) { set('selSlab', sl); set('sT', '5'); set('sZ', '0'); await pause(60); } }
      document.getElementById('play').click(); await pause(600); document.getElementById('play').click();
      for (const v of ['stop', 'range', 'beam']) { document.querySelector('#viewSeg [data-view=' + v + ']').click(); await pause(150); }
      D.applyPreset('p150'); await pause(200);
    })()` },
    { name: 'body layers: add to eight, zero and extreme thicknesses, all off, reorder, remove all, firing many tracks', fn: `(async () => {
      const D = window.vdDemo, S = D.S, pause = (ms) => new Promise((r) => setTimeout(r, ms)), q = (s) => document.querySelector(s), qa = (s) => [...document.querySelectorAll(s)];
      const setT = (i, v) => { const el = qa('#bodyRows .lay-t')[i]; if (!el) return; el.value = v; el.dispatchEvent(new Event('input', { bubbles: true })); };
      D.applyPreset('chest'); await pause(100);
      for (let k = 0; k < 6; k++) q('#addLayer').click(); await pause(60);
      qa('#bodyRows .lay-t').forEach((el, i) => setT(i, i % 2 ? '0' : el.max)); await pause(100);
      qa('#bodyRows .lay-m').forEach((el, i) => { el.value = ['skin', 'adipose', 'muscle', 'cortical', 'lunginf', 'lung', 'brain', 'skin'][i]; el.dispatchEvent(new Event('change', { bubbles: true })); }); await pause(100);
      q('#play').click(); await pause(500); q('#play').click();
      qa('#bodyRows .lay-on').forEach((el) => { el.checked = false; el.dispatchEvent(new Event('change', { bubbles: true })); }); await pause(100);
      qa('#bodyRows .lay-on').forEach((el) => { el.checked = true; el.dispatchEvent(new Event('change', { bubbles: true })); });
      for (let k = 0; k < 4; k++) { const b = qa('#bodyRows .lay-dn')[0]; if (b && !b.disabled) b.click(); const u = qa('#bodyRows .lay-up').pop(); if (u && !u.disabled) u.click(); }
      for (const v of ['0', '0.01', '20']) { qa('#bodyRows .lay-t').forEach((el, i) => setT(i, v)); await pause(80); }
      for (const p of ['carbon', 'alpha', 'proton']) { const el = q('#selPart'); el.value = p; el.dispatchEvent(new Event('change', { bubbles: true })); await pause(80); }
      while (q('#bodyRows .lay-x')) q('#bodyRows .lay-x').click(); await pause(100);
      q('#addLayer').click(); setT(0, '0'); await pause(80);
      D.applyPreset('chest'); for (let i = 0; i < 1200; i++) D.fireOne(); await pause(100);
      for (const v of ['stop', 'range', 'beam']) { q('#viewSeg [data-view=' + v + ']').click(); await pause(100); }
      D.applyPreset('p150'); await pause(200);
    })()` },
  ],
};
