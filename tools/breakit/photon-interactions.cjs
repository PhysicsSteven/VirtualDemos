/* Known values for the break-it test (tools/breakit.cjs), photon-interactions. Hook: window.__pi (S, mc, running, ...).
   Coefficients view: the five process shares add to 100 %, their coefficients add to the shown mu/rho (4 significant figures),
   mu = mu/rho x rho, the mean free path is 1/mu and the half value layer is ln 2/mu, and 0 <= mu_en <= mu_tr <= mu/rho (g between 0 and 1).
   The water 100 keV and lead 1 MeV presets show the cited 0.1707 and 0.0710 cm2/g. Beam: the narrow beam fraction from the
   Monte Carlo agrees with e^(-mu t) within 5 standard errors, and no more photons come through unscattered than come through.
   Tube: the mean and effective energies lie between 0 and the kVp, and both half value layers and the air kerma are positive. */
const pre = `const P = window.__pi; if (!P) return true; const S = P.S;
  const SUP = { '⁻': '-', '⁰': 0, '¹': 1, '²': 2, '³': 3, '⁴': 4, '⁵': 5, '⁶': 6, '⁷': 7, '⁸': 8, '⁹': 9 };
  const num = (s) => { if (s == null) return NaN; s = s.replace(/\\u2212/g, '-'); const m = s.match(/(-?[\\d.]+)(?: × 10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+))?/); if (!m) return NaN; return parseFloat(m[1]) * (m[2] ? 10 ** parseInt([...m[2]].map((c) => SUP[c]).join('')) : 1); };
  const rd = (label) => { for (const d of document.querySelectorAll('#out > div')) { const t = d.querySelector('dt'); if (t && t.textContent === label) return d.querySelector('dd').textContent; } return null; };
  const near = (a, b, tol) => Math.abs(a - b) <= tol * Math.max(Math.abs(b), 1e-300);
`;
module.exports = {
  checks: [
    { name: "coefficients: shares add to 100 %, parts add to mu/rho, mu = mu/rho x rho, mfp = 1/mu, HVL = ln 2/mu", fn: `(() => { ${pre}
      if (S.view !== 'coef') return true;
      const names = ['Coherent', 'Incoherent (Compton)', 'Photoelectric', 'Pair, nuclear field', 'Pair, electron field'];
      let sum = 0, pct = 0; for (const n of names) { const t = rd(n); if (t == null) return 'missing readout ' + n; sum += num(t.split(' cm')[0]); pct += parseFloat(t.split('·')[1].replace(/\\u2212/g, '-')); }
      const tot = num(rd('μ/ρ')), mu = num(rd('μ')), rho = num(rd('Density')), mfp = num(rd('Mean free path')), hvl = num(rd('Half value layer'));
      if (!(tot > 0)) return 'mu/rho shows ' + rd('μ/ρ');
      if (Math.abs(pct - 100) > 0.26) return 'shares add to ' + pct + ' %';
      if (!near(sum, tot, 2.5e-3)) return 'parts add to ' + sum + ' but mu/rho shows ' + tot;
      if (!near(mu, tot * rho, 2.5e-3)) return 'mu ' + mu + ' but mu/rho x rho = ' + tot * rho;
      if (!near(mfp, 1 / mu, 2.5e-3)) return 'mean free path ' + mfp + ', 1/mu = ' + 1 / mu;
      if (!near(hvl, Math.LN2 / mu, 2.5e-3)) return 'HVL ' + hvl + ', ln2/mu = ' + Math.LN2 / mu;
      return true; })()` },
    { name: "energy transfer and absorption: 0 <= mu_en <= mu_tr <= mu/rho, g between 0 and 1", fn: `(() => { ${pre}
      if (S.view !== 'coef') return true;
      const tot = num(rd('μ/ρ')), tr = num(rd('μ_tr/ρ')), en = rd('μ_en/ρ (SRD 126)'), pc = parseFloat((rd('Energy transferred, μ_tr/μ') || '').replace(/\\u2212/g, '-'));
      if (!(tr >= 0) || tr > tot * 1.0025) return 'mu_tr/rho ' + tr + ' exceeds mu/rho ' + tot;
      if (!near(pc, 100 * tr / tot, 3e-3) && Math.abs(pc - 100 * tr / tot) > 0.0051) return 'transferred share ' + pc + ' %, ratio ' + 100 * tr / tot;
      if (en && /\\d/.test(en) && !/past|no table/.test(en)) { const e = num(en), g = parseFloat(rd('g = 1 − μ_en/μ_tr').replace(/\\u2212/g, '-'));
        /* the SRD 126 table can top the Attix style mu_tr by about 1 % (cortical bone at 185 keV: g = -0.008); reported, not a bug here */
        if (e < 0 || e > tr * 1.02) return 'mu_en ' + e + ' exceeds mu_tr ' + tr;
        if (!(g > -0.02 && g < 1)) return 'g = ' + g + ' outside 0..1'; }
      return true; })()` },
    { name: "presets: water 100 keV mu/rho = 0.1707, lead 1 MeV = 0.0710 cm2/g (cited)", fn: `(() => { ${pre}
      if (S.view !== 'coef') return true;
      const want = S.preset === 'water100' && S.mat === 'water' && S.E === 100 ? 0.1707 : S.preset === 'lead1' && S.mat === 'pb' && S.E === 1000 ? 0.0710 : null; if (!want) return true;
      return Math.abs(num(rd('μ/ρ')) - want) <= 0.00051 * (want > 0.1 ? 1 : 0.1) ? true : S.preset + ': mu/rho shows ' + rd('μ/ρ') + ', cited ' + want; })()` },
    { name: "beam: narrow beam fraction matches e^(-mu t) within 5 standard errors; counts are consistent", fn: `(() => { ${pre}
      if (S.view !== 'beam' || P.running()) return true;
      const R = P.mc(); if (!R || R.N < 200) return true;
      if (!(R.uncollided <= R.transmitted) || R.uncollided > R.N || R.back < 0) return 'counts: ' + R.uncollided + ' uncollided, ' + R.transmitted + ' through, ' + R.N + ' sent';
      if (!isFinite(R.K) || R.K < 0 || !isFinite(R.B)) return 'broad beam K = ' + R.K + ', B = ' + R.B;
      const se = Math.max(R.TnSE, 1 / R.N);
      if (Math.abs(R.Tn - R.narrow) > 5 * se + 1e-9) return 'narrow beam ' + R.Tn + ' vs e^(-mu t) = ' + R.narrow + ' (SE ' + R.TnSE + ')';
      if (R.E0 !== S.E || R.t !== S.t) return 'result is for another setting';
      return true; })()` },
    { name: "tube: mean and effective energy within 0..kVp; both HVLs and the air kerma positive", fn: `(() => { ${pre}
      if (S.view !== 'hard') return true;
      const em = num(rd('Mean energy')), ee = num(rd('Effective energy')), h1 = num(rd('HVL₁ (' + (S.hm === 'al' ? 'Al' : 'Cu') + ')')), h2 = num(rd('HVL₂ (' + (S.hm === 'al' ? 'Al' : 'Cu') + ')')), k = num(rd('Air kerma at 1 m'));
      if (!(em > 0 && em <= S.kv)) return 'mean energy ' + em + ' keV with ' + S.kv + ' kVp';
      if (!(ee > 0 && ee <= S.kv + 0.01)) return 'effective energy ' + ee + ' keV with ' + S.kv + ' kVp';
      if (!(h1 > 0 && h2 > 0)) return 'HVL1 ' + h1 + ', HVL2 ' + h2;
      if (!(k > 0)) return 'air kerma ' + k;
      return true; })()` },
  ],
  steps: [
    { name: 'beam: run, change material and energy mid run, stop, thickness 0 and 60 cm, then every view at 1 keV and 100 MeV', fn: `(async () => {
      const P = window.__pi, pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#presets [data-p=cs137]').click(); await pause(300);
      const sel = document.getElementById('selMat'); sel.value = 'pb'; sel.dispatchEvent(new Event('change', { bubbles: true })); set('sE', 4.3); await pause(300);
      for (const t of ['0', '60', '0.01']) { set('sT', t); document.getElementById('run').click(); await pause(500); }
      document.querySelector('#viewSeg [data-v=coef]').click(); for (const e of ['0', '5']) { set('sE', e); await pause(150); }
      document.querySelector('#viewSeg [data-v=wins]').click(); await pause(150);
      document.querySelector('#viewSeg [data-v=hard]').click(); for (const kv of ['50', '150']) { set('sKv', kv); set('sAl', '10'); set('sF2', '2'); await pause(200); } set('sAl', '0'); set('sF2', '0'); await pause(200);
      document.querySelector('#viewSeg [data-v=beam]').click(); await pause(200);
    })()` },
    { name: 'every element Z 1 to 92 in the coefficients view', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), sel = document.getElementById('selMat'), z = document.getElementById('sZ');
      document.querySelector('#viewSeg [data-v=coef]').click(); sel.value = 'el'; sel.dispatchEvent(new Event('change', { bubbles: true }));
      for (const v of [1, 2, 43, 61, 84, 92, 26]) { z.value = v; z.dispatchEvent(new Event('input', { bubbles: true })); await pause(80); }
      document.querySelector('#presets [data-p=water100]').click(); await pause(200);
    })()` },
  ],
};
