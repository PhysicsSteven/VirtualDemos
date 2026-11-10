/* Known values for the break-it test (tools/breakit.cjs), dosimetry. Hook: window.__dos (S, probeK, chamberTrue, calAnswers, ...).
   Kerma view: the K_col readout is Φ·E·(μ_en/ρ)·e^(−μz) in Gy from the shown NIST values; the dose is 0 at the surface; past the
   buildup D/K_col is constant and equals the shown β (TCPE); d_max sits inside the electron range; the mean Compton electron
   energy is below the most energetic one, which is below hν. Chamber view: k_s = 1/f and f is in (0, 1] and rises with the voltage;
   the 1 Gy/min Co-60 preset reads k_s = 1.00001. Calibration view: noise free readings analyzed the careful way give back the dose
   the machine delivered (D_w within 0.5 %), the Co-60 laboratory N_D,w equals the certificate. */
const pre = `const D = window.__dos; if (!D) return true; const S = D.S;
  const SUP = { '⁰': 0, '¹': 1, '²': 2, '³': 3, '⁴': 4, '⁵': 5, '⁶': 6, '⁷': 7, '⁸': 8, '⁹': 9 };
  const num = (t) => { t = t.replace(/\\u2212/g, '-').replace(/\\s*(Gy|MeV|cm²\\/g|nC|mm|cm|MV\\/m).*$/, '');
    const m = t.match(/^(-?[\\d.]+)(?: × 10(⁻?)([⁰¹²³⁴⁵⁶⁷⁸⁹]+))?/); if (!m) return NaN;
    let v = parseFloat(m[1]); if (m[3]) { let e = 0; for (const c of m[3]) e = e * 10 + SUP[c]; v *= Math.pow(10, m[2] ? -e : e); } return v; };
  const rd = (label) => { for (const dt of document.querySelectorAll('#out dt')) if (dt.textContent === label) return dt.nextElementSibling.textContent; return null; };
  const val = (label) => { const t = rd(label); return t == null ? NaN : num(t); };
  const near = (got, want, tol) => Math.abs(got - want) <= tol * Math.max(Math.abs(want), 1e-300);
`;
module.exports = {
  checks: [
    { name: "kerma: K_col = Φ·hν·(μ_en/ρ)·e^(−μz), D = 0 at the surface, D/K_col readout is D over K", fn: `(() => { ${pre}
      if (S.view !== 'kerma' || S.deliver) return true;
      const mu = val('μ/ρ (NIST)'), men = val('μ_en/ρ (NIST)'), kc = val('Collision kerma K_col');
      if (!isFinite(mu) || !isFinite(men) || !isFinite(kc)) return 'a kerma readout is not a number: ' + rd('Collision kerma K_col');
      const want = S.phi * S.E * men * Math.exp(-mu * S.z) * 1.602176634e-10;
      if (!near(kc, want, 4e-3)) return 'K_col shows ' + rd('Collision kerma K_col') + ', physics gives ' + want + ' Gy';
      const z0 = S.z; S.z = 0; const p0 = D.probeK(); S.z = z0;
      if (p0.d !== 0) return 'dose at the surface is ' + p0.d + ', should be 0';
      const pr = D.probeK(); if (!(pr.d >= 0) || !(pr.kc > 0)) return 'D = ' + pr.d + ', K_col = ' + pr.kc;
      if (!S.blind) { if (Math.abs(val('D/K_col') - pr.r) > 6e-5) return 'D/K_col shows ' + rd('D/K_col') + ', D/K = ' + pr.r;
        if (!near(val('Absorbed dose D'), pr.d, 2e-3)) return 'D shows ' + rd('Absorbed dose D') + ', model ' + pr.d; }
      return true; })()` },
    { name: "kerma: past the buildup D/K_col is constant and equals β (TCPE); d_max is inside the electron range", fn: `(() => { ${pre}
      if (S.view !== 'kerma' || S.blind || S.deliver) return true;
      const Rmax = val('Its CSDA range (ESTAR)') / 10, beta = val('β past the buildup'), dm = val('d_max (model)') / 10;
      if (!(Rmax > 0)) return 'electron range ' + rd('Its CSDA range (ESTAR)');
      if (dm > Rmax * 1.002 + 0.00101 || dm < 0.8 * Rmax - 0.00101) return 'd_max ' + dm + ' cm is not between 0.8 and 1.0 of the electron range ' + Rmax + ' cm';
      const z0 = S.z; let r1, r2; try { S.z = 1.2 * Rmax * 1.02; r1 = D.probeK().r; S.z = 3 * Rmax; r2 = D.probeK().r; } finally { S.z = z0; }
      if (!near(r1, beta, 2.5e-3) || !near(r2, beta, 2.5e-3)) return 'past the buildup D/K_col = ' + r1 + ' and ' + r2 + ' but β shows ' + beta;
      if (!(beta > 1)) return 'β = ' + beta + ' is not above 1';
      return true; })()` },
    { name: "kerma: mean Compton electron energy < most energetic electron < hν", fn: `(() => { ${pre}
      if (S.view !== 'kerma' || S.deliver) return true;
      const mean = val('Mean Compton electron energy'), mx = val('Most energetic electron');
      if (!(mean > 0 && mean < mx && mx < S.E)) return 'T_mean ' + mean + ', T_max ' + mx + ', hν ' + S.E;
      return true; })()` },
    { name: "chamber: k_s = 1/f, f in (0, 1], f rises with voltage; Co-60 at 1 Gy/min reads k_s = 1.00001", fn: `(() => { ${pre}
      if (S.view !== 'chamber') return true;
      const r = D.chamberTrue(S.V, S.pol);
      if (!(r.f > 0 && r.f <= 1)) return 'f = ' + r.f;
      let last = 0; for (let V = 25; V <= 500; V += 25) { const f = D.chamberTrue(V, S.pol).f; if (!(f >= last - 1e-12 && f <= 1)) return 'f(' + V + ' V) = ' + f + ' after ' + last; last = f; }
      if (S.blind) return true;
      if (Math.abs(val('Collection efficiency f') - r.f) > 6e-6) return 'f shows ' + rd('Collection efficiency f') + ', f = ' + r.f;
      if (Math.abs(val('k_s = 1/f') - 1 / r.f) > 6e-6) return 'k_s shows ' + rd('k_s = 1/f') + ', 1/f = ' + 1 / r.f;
      if (Math.abs(val('All the charge Q_sat') - r.Qsat * 1e9) > 6e-4 * Math.max(1, r.Qsat * 1e9)) return 'Q_sat shows ' + rd('All the charge Q_sat') + ', ' + r.Qsat * 1e9;
      if (S.preset === 'cochamber' && S.beamC === 'co60' && S.rate === 1 && S.V === 400 && Math.abs(1 / r.f - 1.00001) > 1e-5) return 'Co-60 1 Gy/min k_s = ' + 1 / r.f + ', preset says 1.00001';
      return true; })()` },
    { name: "calibration: noise free readings give back the delivered dose; the laboratory N_D,w is the certificate", fn: `(() => { ${pre}
      if (S.view !== 'cal') return true;
      const a = D.calAnswers(); if (![a.ktp, a.kp, a.ks, a.kq, a.Dw, a.N].every(isFinite)) return 'a calibration answer is not finite: ' + JSON.stringify(a);
      if (!near(a.Dw, a.true, 5e-3)) return 'D_w from noise free readings = ' + a.Dw + ' Gy but the machine delivered ' + a.true + ' Gy';
      if (S.beam === 'co60') { const m = (rd('N_D,w certificate (simulated)') || '').match(/= ([\\d.]+) Gy\\/nC/); if (!m) return 'no certificate readout';
        if (!near(a.N * 1e-9, parseFloat(m[1]), 3e-3)) return 'N_D,w from noise free readings = ' + a.N * 1e-9 + ' Gy/nC, certificate shows ' + m[1]; }
      return true; })()` },
  ],
  steps: [
    { name: 'every view and preset, run the Monte Carlo, then drag the energy to its ends and the depth to the back', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      for (const p of ['co60', 'high', 'low', 'deep', 'sat', 'hot', 'cochamber', 'cal', 'cal70', 'lab']) {
        const b = document.querySelector('[data-p=' + p + ']'); if (b) { b.click(); await pause(250); }
        if (p === 'co60' || p === 'high') { const mc = document.getElementById('chkMC'); if (mc && !mc.checked) mc.click(); await pause(600); }
      }
      document.querySelector('[data-p=co60]').click(); await pause(300);
      for (const [id, v] of [['sE', 0], ['sE', 1], ['sZ', 0], ['sZ', 1]]) { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); await pause(200); }
    })()` },
  ],
};
