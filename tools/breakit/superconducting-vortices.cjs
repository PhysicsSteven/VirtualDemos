/* Known values for the break-it test (tools/breakit.cjs), superconducting-vortices. Hook: window.__vx (S, advance, profile, BU).
   Lengths in λ = 141.5 nm; the strip is 20 λ wide and 12 λ tall (the page's WX and LY). The flux quantum is h/2e = 2.067833848e-15 Wb
   and one vortex per λ² is BU = Φ0/λ² = 103.3 mT. From the live state: every free vortex lies inside the strip and is finite; vortices
   are conserved apart from those that entered or left through the faces (N − N0 = Δenter − Δleave); the density profile integrates to N;
   the readouts equal the physics of the state (N, N × Φ0, mean field N/(WX LY) · BU, applied field S.Ba · BU, lattice spacing
   √(2Φ0/(√3 B))); the applied field stays between 0 and the slider's maximum; a slab with no pins that has settled holds about the
   applied field, no more (the 2026-11-08 fix: it once overfilled by 7 %). */
const pre = `const X = window.__vx; if (!X || !X.S.st) return true;
  const S = X.S, st = S.st, WX = 20, LY = 12, PHI0 = 2.067833848e-15, LAM = 141.5e-9, BUm = PHI0 / (LAM * LAM) * 1000;
  const rd = {}; for (const d of document.querySelectorAll('#out > div')) { const t = d.querySelector('dt'), v = d.querySelector('dd'); if (t && v) rd[t.textContent.trim()] = v.textContent.replace(/\\u2212/g, '-'); }
`;
module.exports = {
  checks: [
    { name: "every free vortex is finite and inside the strip; the density profile integrates to N", fn: `(() => { ${pre}
      for (let i = 0; i < st.x.length; i++) if (!isFinite(st.x[i]) || !isFinite(st.y[i]) || st.x[i] <= 0 || st.x[i] >= WX || st.y[i] < 0 || st.y[i] >= LY) return 'vortex ' + i + ' at ' + st.x[i] + ', ' + st.y[i];
      const nb = 20, p = X.profile(st, nb); let s = 0; for (const v of p) s += v * (WX / nb) * LY;
      return Math.abs(s - st.x.length) < 1e-6 ? true : 'profile holds ' + s + ' vortices, there are ' + st.x.length; })()` },
    { name: "vortices are conserved: N − N0 = (entered − left) since this strip was first seen", fn: `(() => { ${pre}
      const W = (window.__vxN = window.__vxN || new WeakMap()), w = W.get(st);
      /* "Cool in the field now applied" refills the slab (fillInside) and starts a new history: a new baseline */
      if (!w || w.h !== S.hist) { W.set(st, { n: st.x.length, e: st.enter, l: st.leave, h: S.hist }); return true; }
      const want = w.n + (st.enter - w.e) - (st.leave - w.l);
      return st.x.length === want ? true : 'N = ' + st.x.length + ' but N0 + entered − left = ' + want; })()` },
    { name: "readouts equal the state: vortices, flux N Φ0, mean field N/(WX LY) BU, applied field, lattice spacing", fn: `(() => { ${pre}
      if (S.play && Math.abs(S.target * 1 - S.Ba * BUm) > 0.5) return true;      /* the page refreshes the readouts a frame behind a ramp */
      const N = st.x.length;
      if (+rd['Vortices in view'] !== N) return 'Vortices in view shows ' + rd['Vortices in view'] + ', N = ' + N;
      const fl = rd['Flux through the view'].match(/^(\\d+) × Φ0 = ([\\d.]+) × 10⁻¹⁵ Wb/); if (!fl) return 'odd flux text ' + rd['Flux through the view'];
      if (+fl[1] !== N || Math.abs(+fl[2] - N * PHI0 * 1e15) > 0.051) return 'flux ' + rd['Flux through the view'] + ', expect ' + N + ' × ' + (PHI0 * 1e15).toFixed(4);
      if (Math.abs(parseFloat(rd['Flux quantum h/2e']) - PHI0 * 1e15) > 5e-5) return 'flux quantum shows ' + rd['Flux quantum h/2e'];
      const bav = N / (WX * LY) * BUm; if (Math.abs(parseFloat(rd['Average field inside']) - bav) > 0.051) return 'average field shows ' + rd['Average field inside'] + ', N/(WX LY) BU = ' + bav;
      const ba = S.Ba * BUm; if (Math.abs(parseFloat(rd['Applied field']) - ba) > 0.051) return 'applied field shows ' + rd['Applied field'] + ', state ' + ba;
      const ls = rd['Lattice spacing at the applied field'];
      if (S.Ba > 1e-6) { const a = Math.sqrt(2 * PHI0 / (Math.sqrt(3) * S.Ba * BUm / 1000)) * 1e9; if (Math.abs(parseFloat(ls) - a) > 0.51) return 'lattice spacing shows ' + ls + ', physics gives ' + a.toFixed(2) + ' nm'; }
      return true; })()` },
    { name: "constants: Φ0 = h/2e, one vortex per λ² is 103.3 mT, the applied field stays within 0 to the slider maximum", fn: `(() => { ${pre}
      if (Math.abs(X.BU * 1000 - BUm) > 1e-9 * BUm) return 'BU = ' + X.BU + ' T, Φ0/λ² = ' + BUm / 1000;
      if (Math.abs(BUm - 103.28) > 0.05) return 'BU = ' + BUm + ' mT';
      const mx = +document.getElementById('sB').max; if (!(S.Ba >= -1e-12) || S.Ba * BUm > mx + 0.01 || !isFinite(S.Ba)) return 'applied field ' + S.Ba * BUm + ' mT, slider max ' + mx;
      return true; })()` },
    { name: "no pins, field settled: the slab holds about the applied field and no more (it once overfilled by 7 %)", fn: `(() => { ${pre}
      if (!(st.o.fp === 0) || Math.abs(S.target - S.Ba * BUm) > 1e-6 || S.Ba < 0.2) return true;
      const W = (window.__vxS = window.__vxS || { st: null, t0: 0 }); if (W.st !== st || W.b !== S.Ba) { W.st = st; W.b = S.Ba; W.t0 = st.t; return true; }
      if (st.t - W.t0 < 150) return true;            /* give it time to relax at this field */
      const bav = st.x.length / (WX * LY); return Math.abs(bav - S.Ba) <= 0.06 * S.Ba + 0.02 ? true : 'settled at ' + S.Ba * BUm + ' mT applied, but ' + bav * BUm + ' mT inside'; })()` },
  ],
  steps: [
    { name: 'every preset, target slider to 0 and max mid run, pin strength and density to the limits, run fast, pause, reset', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      for (const b of document.querySelectorAll('#presets button')) { b.click(); await pause(250);
        for (const id of ['sB', 'sFp', 'sNp']) { const e = $(id); const v = e.value; for (const x of [e.max, e.min, e.max, v]) { e.value = x; e.dispatchEvent(new Event('input', { bubbles: true })); await pause(120); } } }
      const sp = [...document.querySelectorAll('#spdSeg button')].pop(); if (sp) sp.click(); await pause(1200);
    })()` },
    { name: 'clean slab: raise to the maximum, wait, drop to 0 and back (hysteresis loop preset after)', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      document.querySelector('#presets [data-p=clean]').click(); await pause(200);
      const sp = [...document.querySelectorAll('#spdSeg button')].pop(); if (sp) sp.click();
      const e = $('sB'); for (const x of [e.max, '0', e.max, '1', '0']) { e.value = x; e.dispatchEvent(new Event('input', { bubbles: true })); await pause(1500); }
      document.querySelector('#presets [data-p=loop]').click(); await pause(1500);
    })()` },
  ],
};
