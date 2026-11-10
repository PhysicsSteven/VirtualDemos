/* Known values for the break-it test (tools/breakit.cjs), bragg-peak. Hook: window.vdDemo (S, V, photonPDD, sobpFacts, pristineFacts, W3).
   One energy: the dose curve peaks at exactly 1 (100 % of the peak), R20 > R80 > peak depth, the range readout is the shared core's CSDA
   range, and the detector readout is the curve read at the detector. The 6 MV photon fit passes through the five cited points
   (surface 50.7, d_max 100, d80 6.6 cm, D10 66.8, d50 15.2 cm). Spread out peak: every weight is >= 0 and the mean dose over the target is
   1 (100 % of the target's mean). Reference ranges in water: 70 MeV 4.080 cm and 150 MeV 15.77 cm (NIST PSTAR CSDA). */
const pre = `const D = window.vdDemo; if (!D) return true; const S = D.S, V = D.V;
  const rd = (t) => { for (const e of document.querySelectorAll('#out > div')) if (e.querySelector('dt').textContent.trim() === t) return e.querySelector('dd').textContent.replace(/\\u2212/g, '-'); return null; };
  const fin = (a) => { for (let i = 0; i < a.length; i++) if (!isFinite(a[i])) return false; return true; };
`;
module.exports = {
  checks: [
    { name: "one energy: curve peaks at 1, R20 > R80 > peak depth, range and detector readouts equal the physics", fn: `(() => { ${pre}
      if (S.view !== 'pristine' || !S.D) return true;
      if (!fin(S.D.n)) return 'dose curve has a non finite value';
      let mx = 0; for (const v of S.D.n) mx = Math.max(mx, v); if (Math.abs(mx - 1) > 1e-12) return 'peak of the normalized curve is ' + mx;
      const q = D.pristineFacts(); if (!(q.R20 > q.R80 && q.R80 > q.peak)) return 'R20 ' + q.R20 + ', R80 ' + q.R80 + ', peak ' + q.peak;
      const Mm = V.mat(S.m), R = V.range(S.e, S.m) / Mm.rho;
      if (Math.abs(R - q.R80) > 0.03 * R + 0.05) return 'CSDA range ' + R + ' vs R80 ' + q.R80;
      if (S.blind) return true;
      const got = rd('CSDA range'), want = R >= 1 ? R.toFixed(2) + ' cm' : (R * 10).toFixed(2) + ' mm';
      if (got !== want) return 'CSDA range shows ' + got + ', physics gives ' + want;
      const dz = S.D.z[1] - S.D.z[0], i = Math.min(S.D.n.length - 2, Math.floor(S.z / dz)), want2 = 100 * (S.D.n[i] + (S.z / dz - i) * (S.D.n[i + 1] - S.D.n[i]));
      const g = parseFloat((rd('At the detector') || '').replace(/^-/, '-')); if (Math.abs(g - want2) > 0.051 && S.z <= S.zmax) return 'detector shows ' + rd('At the detector') + ', curve gives ' + want2.toFixed(2);
      return true; })()` },
    { name: "reference CSDA ranges in water: 70 MeV 4.08 cm, 150 MeV 15.77 cm (PSTAR)", fn: `(() => { ${pre}
      const r70 = V.range(70, 'water'), r150 = V.range(150, 'water');
      if (Math.abs(r70 - 4.080) > 0.02) return '70 MeV range ' + r70; if (Math.abs(r150 - 15.77) > 0.05) return '150 MeV range ' + r150;
      return true; })()` },
    { name: "6 MV photon fit passes through the cited points (50.7, 100, 80, 66.8, 50 %)", fn: `(() => { ${pre}
      for (const [d, v] of [[0, 50.7], [1.5, 100], [6.6, 80], [10, 66.8], [15.2, 50]]) { const g = D.photonPDD(d); if (Math.abs(g - v) > 0.35) return 'PDD(' + d + ' cm) = ' + g + ', cited ' + v; }
      for (let d = 0; d <= 40; d += 0.5) if (!isFinite(D.photonPDD(d)) || D.photonPDD(d) < 0) return 'PDD(' + d + ') = ' + D.photonPDD(d);
      return true; })()` },
    { name: "spread out peak: weights >= 0, mean dose over the target is 1, curves finite", fn: `(() => { ${pre}
      if (S.view !== 'sobp' && S.view !== 'compare') return true;
      if (!S.L.length || !fin(S.D.n)) return 'no layers or a non finite curve';
      for (const l of S.L) if (!(l.w >= 0) || !isFinite(l.w)) return 'layer weight ' + l.w;
      const z = S.D.z, n = S.D.n; let s = 0, c = 0; for (let i = 0; i < z.length; i++) if (z[i] >= S.zp && z[i] <= S.zd) { s += n[i]; c++; }
      if (c && Math.abs(s / c - 1) > 0.03) return 'mean over the target is ' + s / c;
      if (S.view === 'compare' && !fin(S.P.n)) return 'photon curve non finite';
      return true; })()` },
    { name: "Why it peaks: speed, gamma and reach b_max agree with the energy; the kick scales as 1/v", fn: `(() => { ${pre}
      if (S.view !== 'why' || !D.W3 || !D.W3.st || !D.W3.st.w) return true;
      const w = D.W3.st.w; if (!fin([w.beta, w.gamma, w.bmax, w.bmin])) return 'non finite: ' + JSON.stringify(w);
      if (Math.abs(w.beta * w.beta - (1 - 1 / (w.gamma * w.gamma))) > 1e-12) return 'beta and gamma disagree';
      if (!(w.beta > 0 && w.beta < 1)) return 'beta ' + w.beta;
      if (!S.run && !S.blind) { const g = rd('Speed v/c'); if (g !== null && Math.abs(parseFloat(g) - w.beta) > (w.beta < 0.1 ? 6e-5 : 6e-4)) return 'v/c shows ' + g + ', state ' + w.beta; }
      return true; })()` },
  ],
  steps: [
    { name: 'Walk every setup, scrub the detector to both ends, Why view run to the end, then back to One energy at 70 and 230 MeV', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      for (const b of [...document.querySelectorAll('#presets button')]) { b.click(); await pause(120); const z = document.getElementById('sZ'); for (const v of [z.max, '0']) { z.value = v; z.dispatchEvent(new Event('input', { bubbles: true })); await pause(30); } }
      document.querySelector('#presets [data-p=whyEnd]').click(); await pause(200);
      const w = document.getElementById('sWu'); for (const v of ['1000', '900', '901', '0', '999']) { w.value = v; w.dispatchEvent(new Event('input', { bubbles: true })); await pause(60); }
      document.querySelector('#presets [data-p=p70]').click(); await pause(200);
      document.querySelector('#presets [data-p=p230]').click(); await pause(200);
    })()` },
  ],
};
