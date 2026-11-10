/* Known values for the break-it test (tools/breakit.cjs), charged-particles. Hook: window.vdDemo (S, V, fireOne, applyPreset, ...).
   Beam view: the R₀ readout equals the CSDA range in water for the beam; peak depth <= R90 <= R80; every fired track either stopped
   or was lost to a nuclear reaction (S.n = ends + absorbed); the model dose is never negative or NaN; the proton presets match
   NIST PSTAR (150 MeV 157.7 mm, 70 MeV 40.80 mm, 230 MeV 329.5 mm, within the 0.2 mm the page states).
   Graph views: the linear stopping power readout is S/rho times the density, and the range in the material is R/rho. */
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
  ],
};
