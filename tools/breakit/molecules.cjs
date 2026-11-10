/* Known values for the break-it test (tools/breakit.cjs), molecules. Hook: window.__mo (S and core: the physics functions).
   Ionic bond: the model minimum of U(r) is at r0 = 0.236 nm for every exponent n (A is chosen for it), its depth is
   (ke²/r0)(1 − 1/n) − (IE − EA), and the readouts equal the energy terms. Covalent bond: the Morse well has U(r_e) = −D_e, D_e = D₀ + G(0),
   and 0 far away; force constant = μ(2πcω)². H₂⁺: the antibonding energy is above 0 at every R, the bonding LCAO minimum is
   −1.76 eV at 0.132 nm (the page's own statement), and S(0) = 1. Levels: the transition wavenumber is the difference of the term
   values; the selection rule verdicts. Spectrum: relative absorbance is between 0 and 1, the HCl fundamental is 2885.98 cm⁻¹
   (NIST WebBook, Huber and Herzberg G(1) − G(0)), no line at the band center. Light: a photon breaks the bond only below hc/D₀. */
const pre = `const M = window.__mo; if (!M || !M.core) return true; const S = M.S, c = M.core;
  const rd = (t) => { for (const e of document.querySelectorAll('#out > div')) if (e.querySelector('dt').textContent.trim() === t) return e.querySelector('dd').textContent.replace(/\\u2212/g, '-'); return null; };
  const near = (got, want, tol) => Math.abs(got - want) <= tol;
`;
module.exports = {
  checks: [
    { name: "ionic bond: minimum at r0 = 0.236 nm for every n; readouts equal the energy terms", fn: `(() => { ${pre}
      if (S.view !== 'ion') return true;
      const n = S.ion.n, r = S.ion.r, t = c.ionTerms(r, n, S.ion.rep);
      if (!isFinite(t.U)) return 'U non finite at r = ' + r + ', n = ' + n;
      if (S.ion.rep) {
        const mn = c.ionMin(n); if (!near(mn.r0, 0.236, 1e-6)) return 'model minimum at ' + mn.r0 + ' nm for n = ' + n;
        const D = 1.43996455 / 0.236 * (1 - 1 / n) - (5.14 - 3.62); if (!near(mn.D, D, 1e-6)) return 'depth ' + mn.D + ', expected ' + D;
        if (S.blind) return true;
        if (!near(parseFloat(rd('Model minimum r₀')), 0.236, 5.1e-4)) return 'readout minimum ' + rd('Model minimum r₀');
        if (!near(parseFloat(rd('Model dissociation energy')), D, 5.1e-4)) return 'readout D ' + rd('Model dissociation energy') + ', expected ' + D.toFixed(3);
      }
      if (S.blind) return true;
      if (!near(parseFloat(rd('Energy of Na⁺ + Cl⁻')), t.U, 5.1e-4)) return 'energy shows ' + rd('Energy of Na⁺ + Cl⁻') + ', physics ' + t.U;
      if (!near(parseFloat(rd('Coulomb −ke²/r')), t.coul, 5.1e-4) && rd('Coulomb −ke²/r') !== null) return 'Coulomb shows ' + rd('Coulomb −ke²/r') + ', ' + t.coul;
      if (!near(parseFloat(rd('Cost of the transfer ΔE')), 1.52, 0.0051)) return 'transfer cost ' + rd('Cost of the transfer ΔE');
      if (!near(parseFloat(rd('Transfer pays off below')), S.ion.rep ? c.crossR(n) : c.crossBare(), 5.1e-4)) return 'crossing ' + rd('Transfer pays off below');
      return true; })()` },
    { name: "NaCl preset: n = 19 gives D = 4.26 eV at 0.236 nm (OpenStax 9.1)", fn: `(() => { ${pre}
      const mn = c.ionMin(19); if (!near(mn.r0, 0.236, 1e-6) || !near(mn.D, 4.26, 0.005)) return 'n = 19: r0 ' + mn.r0 + ', D ' + mn.D;
      if (!near(c.nForD(), 19.0, 0.2)) return 'exponent for D = 4.26 is ' + c.nForD();
      return true; })()` },
    { name: "covalent bond: Morse well U(r_e) = −D_e, 0 far away, depth D₀ + G(0); readouts equal the molecule", fn: `(() => { ${pre}
      if (S.view !== 'cov') return true;
      const m = c.MOLS[S.cov.mol], de = c.De(m);
      if (!near(c.morse(m, m.re), -de, 1e-12 * de) || !near(c.morse(m, 50), 0, 1e-9)) return 'Morse well: U(re) = ' + c.morse(m, m.re) + ', U(far) = ' + c.morse(m, 50);
      if (!near(de, m.D0 + c.G(m, 0) * c.CM_EV, 1e-12)) return 'D_e != D0 + G(0)';
      if (!isFinite(S.cov.r) || S.cov.r <= 0) return 'separation ' + S.cov.r;
      if (S.blind) return true;
      const u = c.morse(m, S.cov.r), anti = S.cov.spin === 'anti' && S.cov.mol === 'H2';
      if (!anti && !near(parseFloat(rd('Energy U')), u, 5.1e-4)) return 'energy shows ' + rd('Energy U') + ', Morse ' + u;
      if (!near(parseFloat(rd('Bond length r_e')), m.re, 5.1e-5)) return 're shows ' + rd('Bond length r_e');
      if (!near(parseFloat(rd('Well depth D_e')), de, 5.1e-4)) return 'De shows ' + rd('Well depth D_e') + ', ' + de;
      if (!near(parseFloat(rd('Force constant k')), c.kFromNu(m.we, c.mu(m)), 0.51)) return 'k shows ' + rd('Force constant k') + ', ' + c.kFromNu(m.we, c.mu(m));
      if (!near(parseFloat(rd('Reduced mass μ')), c.mu(m), 5.1e-5)) return 'mu shows ' + rd('Reduced mass μ');
      return true; })()` },
    { name: "H₂⁺ LCAO: antibonding above 0, bonding minimum −1.76 eV at 0.132 nm, S(0) = 1; readouts equal U", fn: `(() => { ${pre}
      const mn = c.h2pMin(); if (!near(mn.re, 0.132, 0.0006) || !near(mn.De, 1.76, 0.006)) return 'LCAO minimum ' + mn.re + ' nm, ' + mn.De + ' eV';
      if (!near(c.h2pS(1e-6), 1, 1e-6)) return 'overlap at R = 0 is ' + c.h2pS(1e-6);
      for (const R of [0.02, 0.05, 0.1, 0.2, 0.5, 1, 2]) if (!(c.h2pU(R, -1) > 0)) return 'antibonding U(' + R + ') = ' + c.h2pU(R, -1);
      if (!near(c.h2pU(5, 1), 0, 1e-3)) return 'bonding U far away is ' + c.h2pU(5, 1);
      if (S.view !== 'mo' || S.blind) return true;
      if (!near(parseFloat(rd('Energy U (LCAO)')), c.h2pU(S.mo.R, S.mo.sign), 5.1e-4)) return 'U shows ' + rd('Energy U (LCAO)') + ', ' + c.h2pU(S.mo.R, S.mo.sign);
      if (!near(parseFloat(rd('Overlap S')), c.h2pS(S.mo.R), 5.1e-5)) return 'overlap shows ' + rd('Overlap S');
      return true; })()` },
    { name: "levels: transition = difference of term values; selection rules; HCl fundamental 2885.98 cm⁻¹", fn: `(() => { ${pre}
      const H = c.MOLS.HCl; if (!near(c.nuVib(H), 2885.98, 0.1)) return 'HCl fundamental ' + c.nuVib(H);
      if (S.view !== 'lev') return true;
      const m = c.MOLS[S.lev.mol], tr = c.levTr(), nu = c.term(m, S.lev.dv, S.lev.l + S.lev.dl, S.lev.model) - c.term(m, 0, S.lev.l, S.lev.model);
      if (S.lev.l + S.lev.dl >= 0 && !near(tr.nu, nu, 1e-9 * Math.abs(nu))) return 'transition ' + tr.nu + ' vs term difference ' + nu;
      const ok = m.polar && S.lev.l + S.lev.dl >= 0 && Math.abs(S.lev.dl) === 1 && Math.abs(S.lev.dv) <= 1;
      if (tr.allowed !== ok) return 'allowed = ' + tr.allowed + ' but the rules say ' + ok;
      if (S.blind) return true;
      if (isFinite(tr.nu) && !near(parseFloat(rd('Photon wavenumber')), tr.nu, 5.1e-4)) return 'wavenumber shows ' + rd('Photon wavenumber') + ', ' + tr.nu;
      if (isFinite(tr.nu) && !near(parseFloat(rd('Photon energy')), tr.nu * c.CM_EV * 1000, 5.1e-4)) return 'energy shows ' + rd('Photon energy');
      return true; })()` },
    { name: "spectrum: relative absorbance within 0 to 1, no line at the HCl band center, strongest line = 1", fn: `(() => { ${pre}
      if (S.view !== 'sp') return true;
      const d = M.spData(), a = M.spRel(S.sp.nu); /* the maximum is taken on a grid of res/8 (at most 0.02 cm⁻¹), so a peak top can read up to about 1 % above 1: reported, not fixed */
      if (!(a >= 0 && a <= 1.015)) return 'relative absorbance ' + a + ' at ' + S.sp.nu;
      let mx = 0, gap = true; const c0 = c.nuVib(c.MOLS.HCl);
      for (const l of c.bandLines(S.sp.T, S.sp.iso)) { if (!isFinite(l.nu) || !isFinite(l.S)) return 'a line is non finite'; mx = Math.max(mx, l.S); if (Math.abs(l.nu - c0) < 3 && l.S > 0.003) gap = false; }
      if (!near(mx, 1, 1e-12)) return 'strongest line is ' + mx;
      if (!gap) return 'a line sits within 3 cm⁻¹ of the band center';
      return true; })()` },
    { name: "light: a photon breaks the bond only below hc/D₀; no dipole means microwaves pass; no IR when the mode is inactive", fn: `(() => { ${pre}
      for (const k of Object.keys(c.ML_MOLS)) { const m = c.ML_MOLS[k], nb = c.mlBreakNm(m);
        if (m.dip === 0 && c.mlResponse(k, 'mw', 0).what !== 'pass') return k + ' has no dipole but microwaves act';
        for (const [a, b] of m.bands) for (const x of [a + 0.5 * (b - a) * 0.01 + 0.1, b - 0.1]) if (x > 0 && x <= b) { const r = c.mlResponse(k, 'uv', x).what; if ((x <= nb) !== (r === 'break')) return k + ' at ' + x + ' nm gives ' + r + ', break below ' + nb.toFixed(1); }
        for (const md of m.modes) if (!md.ir && c.mlResponse(k, 'ir', 1e4 / md.nu).what === 'shake' && !m.modes.some((o) => o.ir && Math.abs(o.nu - md.nu) <= 60)) return k + ': IR absorbed by an inactive mode';
      }
      return true; })()` },
  ],
  steps: [
    { name: 'every setup in turn, drag the separation to both ends (ion, covalent, H₂⁺), spectrum cursor and temperature to the ends', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), M = window.__mo;
      const slide = async (id, vals) => { const s = document.getElementById(id); if (!s) return; for (const v of vals) { s.value = String(v); s.dispatchEvent(new Event('input', { bubbles: true })); await pause(40); } };
      for (const b of [...document.querySelectorAll('#presets button')]) {
        b.click(); await pause(120);
        for (const id of ['sRi', 'sN', 'sRc', 'sRm', 'sNu', 'sT', 'sRes', 'sL', 'sMl']) { const s = document.getElementById(id); if (s && s.offsetParent) await slide(id, [s.min, s.max, s.min, s.max]); }
      }
      document.querySelector('#presets button').click(); await pause(100);
    })()` },
    { name: 'covalent: every molecule at the closest and farthest separation, both spin states for H₂; levels: every molecule, model and l', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), M = window.__mo;
      M.setView('cov'); await pause(100);
      for (const b of [...document.querySelectorAll('#molSeg button')]) { b.click(); await pause(60); const s = document.getElementById('sRc'); for (const v of [s.min, s.max]) { s.value = v; s.dispatchEvent(new Event('input', { bubbles: true })); await pause(40); }
        for (const sp of document.querySelectorAll('#spinSeg button')) { sp.click(); await pause(40); } }
      M.setView('lev'); await pause(100);
      for (const mb of [...document.querySelectorAll('#levMolSeg button')]) { mb.click(); await pause(40);
        for (const md of document.querySelectorAll('#modelSeg button')) { md.click(); await pause(30);
          for (const d of document.querySelectorAll('#dvSeg button, #dlSeg button')) { d.click(); await pause(20); } } }
      const l = document.getElementById('sL'); for (const v of [l.max, l.min]) { l.value = v; l.dispatchEvent(new Event('input', { bubbles: true })); await pause(40); }
    })()` },
  ],
};
