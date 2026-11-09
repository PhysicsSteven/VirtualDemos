/* Known values for the break-it test (tools/breakit.cjs), distance-ladder. Hook: window.__dl (S, HUB, hubFit, core, ...).
   Parallax: the readouts are p = 1/d, d = 1/p in pc and ly, shift 2p. Hubble: the shown fit equals an independent free intercept
   least squares fit of the same points, and the Hubble time is 977.79 Gyr / H0. Cepheid and supernova: the distance modulus and distance
   readouts follow m − M and d = 10^(μ/5 + 1) from the live settings. Calibration: the Cepheid zero point scales the distances by
   10^(−0.2 ΔA) exactly. Main sequence fitting: the distance readout is the modulus slider; exact constants (AU per pc, Leavitt at P = 10 d). */
const pre = `const D = window.__dl; if (!D) return true;
  const S = D.S, tx = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-').replace(/,/g, '');
  const near = (g, w, tol) => Math.abs(g - w) <= tol * Math.max(Math.abs(w), 1e-300);
  const pc = (t) => { const m = t.match(/^(-?[\\d.eE+-]+) (pc|kpc|Mpc|Gpc)/); return m ? parseFloat(m[1]) * { pc: 1, kpc: 1e3, Mpc: 1e6, Gpc: 1e9 }[m[2]] : NaN; };
  const ang = (t) => { const m = t.match(/^(-?[\\d.eE+-]+)\\s*(″|mas|µas)/); return m ? parseFloat(m[1]) * { '″': 1, mas: 1e-3, 'µas': 1e-6 }[m[2]] : NaN; };
`;
module.exports = {
  checks: [
    { name: "exact constants and identities: AU per pc, modulus round trip, Leavitt at P = 10 d, LMC modulus", fn: `(() => { ${pre}
      const c = D.core;
      if (!near(c.apparentOffset(1, Math.PI / 2) * Math.PI / 648000, Math.atan2(-Math.cos(Math.PI / 2), 648000 / Math.PI - 1), 1e-12)) return 'apparentOffset formula';
      for (const d of [1, 3.7, 118, 5e5, 4e8]) if (!near(c.distFromModulus(c.distModulus(d)), d, 1e-12)) return 'modulus round trip at ' + d;
      if (!near(c.distFromModulus(0), 10, 1e-12)) return 'mu = 0 is not 10 pc';
      if (!near(c.leavitt(10), -4.05, 1e-12)) return 'Leavitt(10 d) = ' + c.leavitt(10);
      if (!near(c.distFromModulus(18.48), 49660, 2e-3)) return 'LMC 18.48 gives ' + c.distFromModulus(18.48) + ' pc, expected 49.6 kpc (Pietrzynski 2019)';
      return true; })()` },
    { name: "parallax readouts equal 1/d, d in pc and ly, shift 2p", fn: `(() => { ${pre}
      if (S.tab !== 'par' && S.tab !== 'all') return true;
      const d = S.par.d; if (!(d > 0) || !isFinite(d)) return 'S.par.d = ' + d;
      const p = ang(tx('pP')), want = 1 / d;
      if (!near(p, want, 6e-3)) return 'pP shows ' + tx('pP') + ', 1/d = ' + want;
      if (!near(pc(tx('pD')), d, 6e-3)) return 'pD shows ' + tx('pD') + ', d = ' + d;
      const ly = parseFloat(tx('pD').split('=')[1]); if (!near(ly, d * 3.261563777, 6e-3)) return 'light years ' + tx('pD');
      if (!near(ang(tx('pShift')), 2 * want, 6e-3)) return 'shift ' + tx('pShift') + ', 2p = ' + 2 * want;
      return true; })()` },
    { name: "Hubble fit readouts equal an independent free intercept fit; Hubble time = 977.79 Gyr / H0", fn: `(() => { ${pre}
      if (S.tab !== 'hub' && S.tab !== 'all') return true;
      const f = D.hubFit(); if (!isFinite(f.H)) return tx('hH') === '—' ? true : 'fit NaN but readout ' + tx('hH');
      const xs = [], ys = [];
      D.HUB.forEach((p, i) => { if (S.hub.set === 'both' || S.hub.set === p.grp) { const k = p.grp === 'cep' ? Math.pow(10, -0.2 * (S.calA + 4.05)) : Math.pow(10, -0.2 * (S.snM + 19.3));
        xs.push((S.hub.over[i] !== undefined ? S.hub.over[i] : p.dObs) * k / 1e0); ys.push(299792.458 * p.z); } });
      const n = xs.length, mx = xs.reduce((a, b) => a + b, 0) / n, my = ys.reduce((a, b) => a + b, 0) / n;
      let sxx = 0, sxy = 0; for (let i = 0; i < n; i++) { sxx += (xs[i] - mx) ** 2; sxy += (xs[i] - mx) * (ys[i] - my); }
      const H = sxy / sxx; if (!near(f.H, H, 1e-9)) return 'hubFit H = ' + f.H + ', independent ' + H;
      if (!near(parseFloat(tx('hH')), H, 6e-3) && Math.abs(parseFloat(tx('hH')) - H) > 0.06) return 'hH shows ' + tx('hH') + ', fit ' + H;
      if (String(n) !== tx('hN')) return 'hN shows ' + tx('hN') + ', n = ' + n;
      if (!near(parseFloat(tx('hT')), 977.79 / H, 6e-3) && Math.abs(parseFloat(tx('hT')) - 977.79 / H) > 0.06) return 'Hubble time ' + tx('hT') + ', 977.79/H = ' + 977.79 / H;
      return true; })()` },
    { name: "Cepheid rung: m − M = m − M(P) and d = 10^(μ/5+1) from the live readings", fn: `(() => { ${pre}
      if (S.tab !== 'cep' && S.tab !== 'all') return true;
      const m = D.cepMeasure(); if (!m) return true;
      if (!near(m.P, m.dt / S.cep.n, 1e-12)) return 'P != dt/n';
      if (!near(m.mu, m.m - (-2.43 * (Math.log10(m.P) - 1) + S.calA), 1e-9)) return 'mu = ' + m.mu;
      if (!near(m.d, Math.pow(10, m.mu / 5 + 1), 1e-12)) return 'd off';
      if (tx('cD') !== '—' && !near(pc(tx('cD')), m.d, 6e-3)) return 'cD shows ' + tx('cD') + ', d = ' + m.d;
      if (tx('cMu') !== '—' && Math.abs(parseFloat(tx('cMu')) - m.mu) > 6e-3) return 'cMu shows ' + tx('cMu') + ', mu = ' + m.mu;
      return true; })()` },
    { name: "supernova rung and calibration: d follows the peak and M; zero point scales distances by 10^(-0.2 dA)", fn: `(() => { ${pre}
      if (S.tab === 'sn' || S.tab === 'all') { const m = D.snMeasure();
        if (m && tx('sD') !== '—' && !near(pc(tx('sD')), Math.pow(10, (m.m - S.snM) / 5 + 1), 6e-3)) return 'sD shows ' + tx('sD') + ' for peak ' + m.m + ', M ' + S.snM; }
      if (S.link && S.tab === 'hub' && Math.abs((S.snM + 19.3) - (S.calA + 4.05)) > 1e-9 && S.calA >= -4.35 && S.calA <= -3.75) return 'link is on but snM − M0 = ' + (S.snM + 19.3) + ' differs from calA − A0 = ' + (S.calA + 4.05);
      return true; })()` },
    { name: "main sequence fitting: distance readout equals the modulus slider", fn: `(() => { ${pre}
      if (S.tab !== 'ms') return true;
      if (!near(pc(tx('msD')), Math.pow(10, S.ms.mu / 5 + 1), 6e-3)) return 'msD ' + tx('msD') + ' for shift ' + S.ms.mu;
      const o = D.core.clusterOffset(D.CL[S.ms.k === 'X' ? 'A' : S.ms.k].stars, S.ms.mu); if (S.ms.k !== 'X' && !(Math.abs(o.rms * o.rms - o.ms) < 1e-9)) return 'rms';
      return true; })()` },
  ],
  steps: [
    { name: 'parallax extremes: slowest to farthest, each instrument, custom star, then back', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), d = document.getElementById('dist');
      document.querySelector('#presets [data-p=par]').click(); await pause(200);
      for (const inst of document.querySelectorAll('#instSeg button')) { inst.click(); await pause(150);
        for (const v of ['4.5', '0', '2.2', '4.5', '0.11']) { d.value = v; d.dispatchEvent(new Event('input', { bubbles: true })); await pause(120); } }
      for (const b of document.querySelectorAll('#starChips button')) { b.click(); await pause(120); }
    })()` },
    { name: 'calibration to both ends with link on and off, then Hubble source toggles, switching rungs mid run', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#presets [data-p=hub]').click(); await pause(200);
      for (const lk of [true, false]) { const l = document.getElementById('link'); if (l.checked !== lk) l.click();
        for (const v of ['-4.35', '-3.75', '-4.05']) { set('calA2', v); await pause(100); }
        for (const v of ['-19.8', '-18.8', '-19.3']) { set('snM2', v); await pause(100); } }
      for (const t of ['cep', 'sn', 'all', 'par', 'sp', 'ms', 'phot', 'hub']) { document.querySelector('#presets [data-p=' + t + ']').click(); await pause(150); }
    })()` },
    { name: 'main sequence slider to its ends in every cluster; photometry night and aperture extremes', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#presets [data-p=ms]').click(); await pause(200);
      for (const v of ['2', '15', '4']) { set('msMu', v); await pause(100); }
      document.querySelector('#presets [data-p=phot]').click(); await pause(200);
      for (const v of ['2', '9', '2', '6']) { set('phR', v); await pause(100); }
      for (const v of ['30', '0', '15']) { set('phNight', v); await pause(150); }
    })()` },
  ],
};
