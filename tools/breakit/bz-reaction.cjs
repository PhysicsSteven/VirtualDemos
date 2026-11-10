/* Known values for the break-it test (tools/breakit.cjs), bz-reaction. Hook: window.__bz (S, BK, DS, FL, HOPF, PAR, ...).
   Beaker (three variable Oregonator): the steady state obeys z = x, y = f x/(q + x) and −x² + (1 − q − f)x + q(1 + f) = 0 for the
   current f; the concentrations stay finite and not negative; the steady state is unstable exactly between the two Hopf points
   (the Hopf points shown are the ones in HOPF and the stability readout agrees with f); the f slider and the model agree.
   Dish (Tyson–Fife reduction): u stays above zero and finite in every cell inside the dish (the positivity claim of the stepper) and
   v finite; with a cited setup (Target waves, Spiral, Mosaic) the parameters are the cited ones (ε 0.02, q 0.002, f 1.4, φ 0.05, D 1,
   or 0.5 for Mosaic). Flow reactor: every concentration finite and not negative and k_f stays between 3 and 5 × 10⁻⁴ s⁻¹. */
module.exports = {
  checks: [
    { name: "beaker: the steady state satisfies z = x, y = f x/(q + x) and the quadratic, and the state stays finite and not negative", fn: `(() => {
      const B = window.__bz; if (!B || !B.BK || !B.BK.fixed) return true; const p = B.BK.p, [x, y, z] = B.BK.fixed;
      if (![x, y, z].every(Number.isFinite)) return 'steady state ' + B.BK.fixed;
      if (Math.abs(z - x) > 1e-12) return 'z* ≠ x*';
      if (Math.abs(y - p.f * x / (p.q + x)) > 1e-9 * Math.max(y, 1e-12)) return 'y* = ' + y + ', f x/(q + x) = ' + p.f * x / (p.q + x);
      const r = -x * x + (1 - p.q - p.f) * x + p.q * (1 + p.f); if (Math.abs(r) > 1e-9 * Math.max(1, x * x)) return 'the quadratic residual is ' + r + ' at f = ' + p.f;
      if (!(p.f >= 0.3 - 1e-9 && p.f <= 3 + 1e-9)) return 'f = ' + p.f + ' is outside the slider';
      if (!B.BK.y.every((v) => Number.isFinite(v) && v > -1e-9)) return 'beaker state ' + B.BK.y;
      return true; })()` },
    { name: "beaker: unstable exactly between the Hopf points, and the Hopf points are the cited ones", fn: `(() => {
      const B = window.__bz; if (!B || !B.BK || !B.BK.eig) return true; const f = B.BK.p.f, H = B.HOPF;
      if (!(H[0] > 0.3 && H[0] < 1 && H[1] > 1.5 && H[1] < 3)) return 'Hopf points ' + H;
      const mr = Math.max(...B.BK.eig.map((e) => e.re)), unstable = mr > 0;
      if (Math.abs(f - H[0]) > 2e-4 && Math.abs(f - H[1]) > 2e-4 && unstable !== (f > H[0] && f < H[1])) return 'f = ' + f + ': largest Re λ = ' + mr + ' but the Hopf points are ' + H;
      if (B.S.mode === 'beaker') { const t = document.getElementById('meas').textContent;
        if (t && /Hopf/.test(t) && !(t.includes(H[0].toFixed(4)) && t.includes(H[1].toFixed(4)))) return 'readout "' + t.replace(/\\s+/g, ' ').slice(0, 160) + '" lacks ' + H.map((v) => v.toFixed(4)); }
      return true; })()` },
    { name: "beaker: the steady state readout agrees with the model once the page has refreshed it", fn: `(() => {
      const B = window.__bz; if (!B || B.S.mode !== 'beaker' || B.S.playing) return true;
      const t = document.getElementById('meas').textContent.replace(/\\u2212/g, '-'), m = t.match(/largest Re λ = (-?[\\d.]+(?:e[+-]?\\d+)?)/i); if (!m) return true;
      const mr = Math.max(...B.BK.eig.map((e) => e.re)), got = parseFloat(m[1]);
      return Math.abs(got - mr) <= 6e-3 * Math.max(Math.abs(mr), 1e-9) + 1e-9 || Math.sign(got) === Math.sign(mr) && Math.abs(got - mr) < 0.01 * Math.abs(mr) + 1e-3 ? true : 'readout ' + got + ', model ' + mr; })()` },
    { name: "dish: u > 0 and finite inside the dish, v finite; cited parameters while a cited setup is on", fn: `(() => {
      const B = window.__bz; if (!B || B.S.mode !== 'dish' || !B.DS.st || !B.DS.dish || B.DS.medium !== 'excite') return true;
      const st = B.DS.st, cells = B.DS.dish.cells; let bad = -1;
      for (let k = 0; k < cells.length; k++) { const i = cells[k]; if (!(st.u[i] > 0) || !Number.isFinite(st.u[i]) || !Number.isFinite(st.v[i])) { bad = i; break; } }
      if (bad >= 0) return 'cell ' + bad + ': u = ' + st.u[bad] + ', v = ' + st.v[bad];
      const P = B.PAR.excite, want = { eps: 0.02, q: 0.002, f: 1.4, phi: 0.05, D: B.S.preset === 'mosaic' ? 0.5 : 1 };
      if (['target', 'spiral', 'mosaic'].includes(B.S.preset)) for (const k in want) if (Math.abs(P[k] - want[k]) > 1e-12) return 'cited ' + k + ' = ' + want[k] + ', page has ' + P[k];
      return true; })()` },
    { name: "flow reactor: concentrations finite and not negative, k_f between 3 and 5 × 10⁻⁴ s⁻¹ and equal to the slider", fn: `(() => {
      const B = window.__bz; if (!B || !B.FL || !B.FL.S) return true; const F = B.FL;
      if (!(F.kf >= 3e-4 - 1e-12 && F.kf <= 5e-4 + 1e-12)) return 'k_f = ' + F.kf;
      const y = F.S.y; for (let i = 0; i < 3; i++) if (!Number.isFinite(y[i]) || y[i] < -1e-6) return 'flow state ' + y.slice(0, 3);
      if (B.S.mode === 'flow' && !B.SC.on && Math.abs(+document.getElementById('sKf').value * 1e-4 - F.kf) > 1e-9) return 'slider ' + document.getElementById('sKf').value + ' but k_f = ' + F.kf;
      return true; })()` },
  ],
  steps: [
    { name: 'every preset and vessel, sweep f across both Hopf points, odd dish parameters, then back to the beaker', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const el = document.getElementById(id); if (el && el.offsetParent) { el.value = v; el.dispatchEvent(new Event('input', { bubbles: true })); } };
      const B = window.__bz;
      document.querySelector('#presets [data-p=osc]').click(); await pause(200);
      for (const f of [0.3, 0.5, 0.65, 0.8, 1, 2, 2.4, 2.5, 2.6, 3, 0.3, 3, 1]) { set('sF', f); await pause(120); }
      for (const p of ['target', 'spiral', 'mosaic', 'route', 'fly', 'osc']) { document.querySelector('#presets [data-p=' + p + ']').click(); await pause(400); }
      document.querySelector('#presets [data-p=target]').click(); await pause(200);
      for (const [id, v] of [['sPhi', 'max'], ['sPhi', 'min'], ['sEps', 'max'], ['sEps', 'min'], ['sFd', 'max'], ['sFd', 'min'], ['sQ', 'max'], ['sQ', 'min'], ['sD', 'max'], ['sD', 'min']]) {
        const el = document.getElementById(id); if (!el || !el.offsetParent) continue; set(id, v === 'max' ? el.max : el.min); await pause(250); }
      const c = document.getElementById('cited'); if (c) c.click(); await pause(200);
      document.querySelector('#presets [data-p=osc]').click(); await pause(200);
    })()` },
    { name: 'dish: every medium and colour, scatter, clear, half wave, then flow reactor k_f to both ends with the scan running', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const el = document.getElementById(id); if (el && el.offsetParent) { el.value = v; el.dispatchEvent(new Event('input', { bubbles: true })); } };
      document.querySelector('#presets [data-p=target]').click(); await pause(200);
      for (const b of document.querySelectorAll('#medSeg button')) { b.click(); await pause(350);
        for (const c of document.querySelectorAll('#colSeg button')) { c.click(); await pause(60); }
        for (const id of ['scatter', 'halfWave', 'clearDish', 'uniform']) { const e = document.getElementById(id); if (e && e.offsetParent) { e.click(); await pause(150); } } }
      document.querySelector('#modeSeg [data-m=flow]').click(); await pause(200);
      document.getElementById('scanAll').click(); await pause(300); for (const v of [3, 5, 3.1, 4.995]) { set('sKf', v); await pause(150); }
      document.getElementById('tFly').click(); set('sDel', -9); await pause(200); set('sDel', -1); await pause(200);
      document.querySelector('#presets [data-p=osc]').click(); await pause(200);
    })()` },
  ],
};
