/* Known values for the break-it test (tools/breakit.cjs), star-slice. Hook: window.__ss (S, cur, disp, sci, grp, fmtRsun).
   Every saved MESA moment obeys the Stefan-Boltzmann law L = 4π R² σ Teff⁴, i.e. L/L☉ = (R/R☉)² (Teff/5772 K)⁴ (checked to 1 %; the
   data agree to 0.3 %); its zones run outward in mass and radius and end at the star's mass M (exact) and radius R (0.3 %);
   the readouts under the slice show the nearest saved moment (mass, radius, luminosity, Teff, model count) at any zoom, probe or
   playback state; the scrub position and the zoom stay in range. */
const pre = `const X = window.__ss; if (!X || !X.S.D) return true; const S = X.S, D = S.D, mo = X.cur(), $ = (id) => document.getElementById(id);
  const near = (a, b, t) => Math.abs(a - b) <= t * Math.abs(b);
`;
module.exports = {
  checks: [
    { name: "state is finite and in range: scrub index, zoom, speed", fn: `(() => { ${pre}
      if (!mo) return 'no current moment, idx ' + S.idx;
      if (!Number.isInteger(S.idx) || S.idx < 0 || S.idx >= D.N) return 'idx ' + S.idx + ' of ' + D.N;
      if (![S.zoomDec, S.speed].every(isFinite) || S.zoomDec < 0 || S.zoomDec > 7.0001) return 'zoomDec ' + S.zoomDec;
      return true; })()` },
    { name: "Stefan-Boltzmann for the current moment: L = R² (Teff/5772)⁴ in solar units (1 %)", fn: `(() => { ${pre}
      if (!(mo.L > 0 && mo.Teff > 0 && mo.R > 0)) return true;
      const q = mo.L / (mo.R ** 2 * (mo.Teff / 5772) ** 4);
      return Math.abs(q - 1) < 0.01 ? true : 'model ' + mo.model + ': L / (R² (Teff/5772)⁴) = ' + q.toFixed(4); })()` },
    { name: "zones run outward: mass and radius never decrease, last zone is M and R", fn: `(() => { ${pre}
      for (let i = 1; i < mo.n; i++) { if (!(mo.mass[i] >= mo.mass[i - 1])) return 'mass decreases at zone ' + i; if (!(mo.r[i] >= mo.r[i - 1])) return 'radius decreases at zone ' + i; }
      if (!near(mo.mass[mo.n - 1], mo.M, 1e-6)) return 'outer mass ' + mo.mass[mo.n - 1] + ' vs M ' + mo.M;
      if (!near(mo.r[mo.n - 1], mo.R, 3e-3)) return 'outer radius ' + mo.r[mo.n - 1] + ' vs R ' + mo.R;
      return true; })()` },
    { name: "readouts show the current saved moment: M, R, L, Teff, position in the run", fn: `(() => { ${pre}
      if (S.playing) return true;
      const t = (id) => $(id).textContent;
      if (t('oM') !== X.sci(mo.M, 4) + ' M☉') return 'M shows ' + t('oM') + ', ' + X.sci(mo.M, 4);
      if (t('oR') !== X.fmtRsun(mo.R)) return 'R shows ' + t('oR') + ', ' + X.fmtRsun(mo.R);
      if (mo.L != null && t('oL') !== X.sci(mo.L, 4) + ' L☉') return 'L shows ' + t('oL');
      if (mo.Teff != null && t('oTeff') !== X.grp(mo.Teff) + ' K') return 'Teff shows ' + t('oTeff') + ', ' + mo.Teff;
      if (t('tlPos') !== (S.idx + 1) + ' / ' + D.N) return 'position shows ' + t('tlPos') + ', idx ' + S.idx;
      if (mo.model != null && t('oModel') !== X.grp(mo.model)) return 'model number shows ' + t('oModel');
      return true; })()` },
  ],
  steps: [
    { name: 'Every mass run and every preset: scrub to both ends, zoom in to the maximum and out, Log radius, composition, back', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), vis = (b) => b.offsetParent !== null;
      const sc = document.getElementById('scrub'), set = (v) => { sc.value = v; sc.dispatchEvent(new Event('input', { bubbles: true })); };
      for (const b of [...document.querySelectorAll('.chips button, #datasets button')].filter(vis).slice(0, 12)) {
        if (/export|download|load|print/i.test(b.textContent)) continue;
        b.click(); await pause(500); set(sc.max); await pause(150); set(0); await pause(150); set(Math.floor(sc.max / 2)); await pause(150);
      }
    })()` },
    { name: 'Hold the cursor over the slice at odd points (probe), then play at the top speed through to the end and rewind', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), cv = document.getElementById('slice'), r = cv.getBoundingClientRect();
      for (const [x, y] of [[0.5, 0.5], [0, 0], [1, 1], [0.99, 0.01], [0.3, 0.9], [-0.5, 2]]) {
        for (const t of ['pointermove', 'pointerdown', 'pointerup']) cv.dispatchEvent(new PointerEvent(t, { clientX: r.left + x * r.width, clientY: r.top + y * r.height, pointerId: 1, bubbles: true, buttons: t === 'pointerup' ? 0 : 1 }));
        await pause(80);
      }
      const last = [...document.querySelectorAll('#speeds button')].pop(); if (last) last.click();
      const go = document.getElementById('play'); if (go && !window.__ss.S.playing) go.click(); await pause(2500);
      if (window.__ss.S.playing) go.click(); const rs = document.getElementById('restart'); if (rs) rs.click(); await pause(300);
    })()` },
  ],
};
