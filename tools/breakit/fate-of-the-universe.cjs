/* Known values for the break-it test (tools/breakit.cjs), fate-of-the-universe. Hook: window.__fate (S, M(), X()).
   Every state: the model closes (Ω_r + Ω_m + Ω_k + Ω_DE = 1), and the total Ω readout is Ω_m + Ω_DE + Ω_r. Expansion: the Hubble
   time is 977.79/H₀ Gyr, the critical density 3H₀²/(8πG), H at time t is H₀E(a) from the Friedmann equation, the redshift of light
   sent then is 1/a − 1; Planck (67.4, 0.315, 0.685) is 13.79 Gyr old. Supernovae: the distance is D_L = (1 + z) D_M, the
   brightness ratio is the inverse square of the distance ratio, Planck χ² 678.4 and matter only χ² 1,326.6 at H₀ = 67.4.
   Shape of space: R = (c/H₀)/√|Ω_k| and each angle from cos A = cos k/(1 + cos k) (sphere) or cosh (saddle), k = side/R. */
const pre = `const E = window.__fate; if (!E) return true; const S = E.S, M = E.M(), X = E.X();
  const rd = () => { const o = {}; for (const d of document.querySelectorAll('#out > div')) o[d.querySelector('dt').textContent] = d.querySelector('dd').textContent; return o; };
  const SUP = { '⁰': 0, '¹': 1, '²': 2, '³': 3, '⁴': 4, '⁵': 5, '⁶': 6, '⁷': 7, '⁸': 8, '⁹': 9 };
  const num = (t) => { t = String(t).replace(/\\u2212/g, '-').replace(/,/g, ''); const m = t.match(/^\\+?(-?[\\d.]+)(?: × 10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+))?/); if (!m) return NaN; let v = parseFloat(m[1]);
    if (m[2]) { const neg = m[2][0] === '⁻'; let e = 0; for (const c of m[2]) if (c in SUP) e = e * 10 + SUP[c]; v *= Math.pow(10, neg ? -e : e); } return v; };
  const near = (got, want, tol) => Math.abs(got - want) <= tol * Math.max(Math.abs(want), 1e-300);
  const o = rd(); const E2 = (a) => M.Or / a ** 4 + M.Om / a ** 3 + M.Ok / a ** 2 + M.Ode * Math.pow(a, -3 * (1 + M.w));
`;
module.exports = {
  checks: [
    { name: 'every state: the model closes, the sliders show the state, the total Ω readout adds up, nothing is NaN', fn: `(() => { ${pre}
      if (Math.abs(M.Or + M.Om + M.Ok + M.Ode - 1) > 1e-12) return 'does not close';
      for (const k of ['Om', 'Ode', 'w', 'H0', 't', 'z', 'side']) if (!isFinite(S[k])) return k + ' is ' + S[k];
      if (M.Om !== S.Om || M.Ode !== S.Ode || M.w !== S.w || M.H0 !== S.H0) return 'model and state differ';
      const t = (id) => document.getElementById(id).textContent;
      if (Math.abs(num(t('oOm')) - S.Om) > 6e-4 || Math.abs(num(t('oOL')) - S.Ode) > 6e-4 || Math.abs(num(t('oW')) - S.w) > 6e-3 || Math.abs(num(t('oH0')) - S.H0) > 0.051) return 'a slider label is stale';
      const tot = o['Total Ω (with radiation)']; if (tot !== undefined && Math.abs(num(tot) - (S.Om + S.Ode + M.Or)) > 6e-5) return 'total Ω ' + tot;
      for (const k in o) if (/NaN|undefined/.test(o[k])) return k + ' shows ' + o[k];
      return true; })()` },
    { name: 'expansion: Hubble time 977.79/H₀, critical density 3H₀²/(8πG), H = H₀E(a), redshift 1/a − 1; Planck age 13.79 Gyr', fn: `(() => { ${pre}
      if (S.view !== 'ex' || S.run || S.blind || o['Hubble time 1/H0'] === undefined) return true;
      if (Math.abs(num(o['Hubble time 1/H0']) - 977.792 / S.H0) > 0.0051) return 'Hubble time ' + o['Hubble time 1/H0'];
      const rc = 3 * (S.H0 / 3.0856775814913673e19) ** 2 / (8 * Math.PI * 6.6743e-11); if (!near(num(o['Critical density today']), rc, 6e-3)) return 'ρ_c ' + o['Critical density today'] + ', want ' + rc;
      if (S.H0 === 67.4 && Math.abs(S.Om - 0.315) < 1e-9 && M.Ok === 0 && S.w === -1 && Math.abs(num(o['Age today']) - 13.79) > 0.0051) return 'Planck age ' + o['Age today'];
      const a = num(o['Size a']); if (!(a > 0.02) || !(a < 50)) return true;
      const H = num(o['Hubble parameter H']), want = S.H0 * Math.sqrt(E2(a)); if (isFinite(H) && !near(H, want, 2e-3)) return 'H shows ' + H + ', H₀E(a) = ' + want;
      if (a < 1 && Math.abs(num(o['Redshift of light sent then']) - (1 / a - 1)) > 2e-3 * (1 / a)) return 'z shows ' + o['Redshift of light sent then'];
      return true; })()` },
    { name: 'supernovae: D_L ratio and brightness ratio agree (inverse square); Planck χ² 678.4, matter only 1,326.6 at H₀ 67.4', fn: `(() => { ${pre}
      if (S.view !== 'sn' || S.blind || o['Redshift z'] === undefined) return true;
      const dY = num(o['Distance DL, your universe']), dM = num(o['Distance DL, matter only']);
      if (isFinite(dY)) { if (!near(num(o['Farther than matter only by']), dY / dM, 2e-3)) return 'ratio ' + o['Farther than matter only by'];
        if (Math.abs(num(o['Brightness against matter only']) - 100 * (dM / dY) ** 2) > 0.15) return 'brightness ' + o['Brightness against matter only']; }
      const zz = S.z; if (zz < 0.02 && isFinite(dM) && !near(dM, 299792.458 * zz / S.H0 * (1 + zz / 4 + 0) * 3.2615637771674333e-3, 0.02)) return 'low z distance ' + dM;
      if (S.H0 === 67.4) { if (Math.abs(num(o['χ² of Planck 2018']) - 678.4) > 0.06) return 'Planck χ² ' + o['χ² of Planck 2018']; if (Math.abs(num(o['χ² of matter only']) - 1326.6) > 0.06) return 'matter χ² ' + o['χ² of matter only']; }
      return true; })()` },
    { name: 'shape of space: R = (c/H₀)/√|Ω_k|, each angle from the spherical or hyperbolic law of cosines, sum = 3 × angle', fn: `(() => { ${pre}
      if (S.view !== 'geo' || S.blind || S.run || o['Each angle'] === undefined) return true;
      const sg = Math.abs(M.Ok) < 1e-6 ? 0 : M.Ok < 0 ? 1 : -1, R = sg ? 299792.458 / S.H0 / Math.sqrt(Math.abs(M.Ok)) * 3.2615637771674333e-3 : Infinity;
      if (sg && !near(num(o['Curvature radius R']), R, 6e-3)) return 'R shows ' + o['Curvature radius R'] + ', want ' + R;
      const k = S.side / R; let A = 60; if (sg > 0 && k <= 2 * Math.PI / 3) A = Math.acos(Math.cos(k) / (1 + Math.cos(k))) * 180 / Math.PI; else if (sg < 0) A = Math.acos(Math.cosh(k) / (1 + Math.cosh(k))) * 180 / Math.PI; else if (sg > 0) return true;
      if (Math.abs(num(o['Each angle']) - A) > 0.0051) return 'angle shows ' + o['Each angle'] + ', want ' + A;
      if (Math.abs(num(o['Angle sum']) - 3 * num(o['Each angle'])) > 0.016) return 'sum ' + o['Angle sum'];
      return true; })()` },
  ],
  steps: [
    { name: 'Every setup, then Play at 4× in every view, Reset, the time slider to its ends', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      for (const b of document.querySelectorAll('[data-p]')) { b.click(); await pause(150); }
      for (const v of ['ex', 'geo', 'sn', 'end']) { document.querySelector('#viewSeg [data-v=' + v + ']').click(); await pause(150);
        document.querySelector('#speedSeg [data-s="4"]').click(); const go = document.getElementById('go'); if (!go.hidden) { go.click(); await pause(800); go.click(); document.getElementById('restart').click(); } }
      document.querySelector('#viewSeg [data-v=ex]').click(); for (const t of ['-15', '60', '0']) { set('sT', t); await pause(80); }
    })()` },
    { name: 'Corners of the map: every slider to its extremes (crunch, bounce, rip, empty), with the 250 Gyr graph and Blind on and off', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#spanSeg [data-span="250"]').click();
      for (const [om, ol, w] of [['0', '0', '-1'], ['2', '-1', '-1'], ['0', '2.5', '-1'], ['2', '2.5', '-1.5'], ['0.315', '0.685', '-0.5'], ['1', '0', '-1'], ['0.315', '0.685', '-1']]) { set('sOm', om); set('sOL', ol); set('sW', w); await pause(120); }
      for (const h of ['50', '90', '67.4']) { set('sH0', h); await pause(80); }
      document.getElementById('labBlind').click(); await pause(100); document.getElementById('labBlind').click();
      document.querySelector('#viewSeg [data-v=sn]').click(); await pause(1800); for (const z of ['0.01', '2.3', '0.5']) { set('sZ', z); await pause(80); }
      document.querySelector('#viewSeg [data-v=geo]').click(); set('sOL', '1.5'); for (const s of ['0.5', '60', '20']) { set('sSide', s); await pause(80); }
      document.querySelector('#spanSeg [data-span="80"]').click(); document.querySelector('[data-p=ours]').click();
    })()` },
  ],
};
