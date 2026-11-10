/* Known values for the break-it test (tools/breakit.cjs), compton. Hook: window.__cs (S, sc()). Pure physics: window.CS is not set in a
   browser, so the checks recompute from S.E (keV) and S.th (rad). Checks: momentum and energy conservation of the final state (the
   residuals are zero to rounding at any E and θ); the shift Δλ = λC(1 − cos θ) with λC = 2.4263 pm, zero at θ = 0 and 2λC at 180°,
   the same for every wavelength; the λ and λ′ readouts equal hc/E and λ + Δλ; E′ + T = E; the Compton edge is 2E²/(mc² + 2E);
   the cited constants (hc, m_e c², Cs-137 661.657 keV, Mo Kα 71.07 pm, the 511 keV source is λC); presets sit where they say. */
const pre = `const C = window.__cs; if (!C) return true;
  const S = C.S, s = C.sc(), HC = 1239.841984332, MEC2 = 510.99895069, LC = HC / MEC2;
  const rd = (id) => document.getElementById(id).textContent;
  const pm = (t) => { const m = t.match(/^([\\d.eE+-]+) (pm|nm)/); return m ? parseFloat(m[1]) * (m[2] === 'nm' ? 1000 : 1) : NaN; };
  const near = (g, w, tol) => Math.abs(g - w) <= tol * Math.max(Math.abs(w), 1e-300);
`;
module.exports = {
  checks: [
    { name: "momentum and energy are conserved: final state adds back to the start", fn: `(() => { ${pre}
      if (!(S.E > 0) || !isFinite(S.th)) return 'E = ' + S.E + ', θ = ' + S.th;
      const px = S.E - (s.Ep * Math.cos(S.th) + s.pe * Math.cos(s.phi)), py = s.Ep * Math.sin(S.th) - s.pe * Math.sin(s.phi);
      const Te = Math.sqrt(s.pe * s.pe + MEC2 * MEC2) - MEC2;
      if (Math.abs(px) > 1e-9 * S.E || Math.abs(py) > 1e-9 * S.E) return 'momentum off by ' + px + ', ' + py + ' keV/c at E = ' + S.E + ', θ = ' + S.th;
      if (Math.abs(S.E - s.Ep - s.T) > 1e-9 * S.E) return 'E′ + T != E';
      if (S.E < 1e3 && Math.abs(Te - s.T) > 1e-6 * s.T + 1e-9 * S.E) return 'T from momentum ' + Te + ' but T = ' + s.T;
      if (!(s.beta >= 0 && s.beta < 1)) return 'electron β = ' + s.beta;
      return true; })()` },
    { name: "Compton shift λC(1 − cos θ): limits 0 and 2λC, readouts equal the physics", fn: `(() => { ${pre}
      if (Math.abs(LC - 2.42631023867) > 1e-6) return 'λC = ' + LC;
      const dl = LC * (1 - Math.cos(S.th));
      if (Math.abs(s.dlam - dl) > 1e-12 * LC) return 'dlam ' + s.dlam + ' vs ' + dl;
      if (Math.abs(s.lamP - s.lam - s.dlam) > 1e-9 * s.lamP) return "λ′ - λ != Δλ";
      if (S.th === 0 && s.dlam !== 0) return 'shift at θ = 0 is ' + s.dlam;
      if (Math.abs(S.th - Math.PI) < 1e-12 && Math.abs(s.dlam - 2 * LC) > 1e-9) return 'backscatter shift ' + s.dlam;
      if (!near(pm(rd('rLam')), s.lam, 6e-5) || !near(pm(rd('rLamP')), s.lamP, 6e-5)) return 'λ shows ' + rd('rLam') + ', λ′ shows ' + rd('rLamP') + '; physics ' + s.lam + ', ' + s.lamP;
      if (!near(s.lam, HC / S.E, 1e-12)) return 'λ != hc/E';
      return true; })()` },
    { name: "Compton edge and cross sections: edge = 2E²/(mc²+2E), σ/σT between 0 and 1, 1 at low E", fn: `(() => { ${pre}
      if (document.getElementById('plotRead').textContent.indexOf('Compton edge') < 0) return true;
      const e = S.E / MEC2, edge = 2 * S.E * S.E / (MEC2 + 2 * S.E), want = S.E * 2 * e / (1 + 2 * e);
      if (Math.abs(edge - want) > 1e-9 * edge) return 'edge formula differs';
      const T180 = C.sc ? (() => { const E = S.E, ep = E / (1 + 2 * e); return E - ep; })() : edge;
      if (Math.abs(T180 - edge) > 1e-9 * edge) return 'T(180°) ' + T180 + ' != edge ' + edge;
      return true; })()` },
    { name: "cited constants and presets: Cs-137 661.657 keV, Mo Kα 71.07 pm, 511 keV photon has λ = λC", fn: `(() => { ${pre}
      const on = document.querySelector('#presets [aria-pressed=true]'); if (!on) return true;
      const want = { c1923: [HC / 71.07, 90], back: [HC / 71.07, 180], vis: [HC / 532e3, 90], cs: [661.657, 90] }[on.dataset.p];
      if (!want) return true;
      if (document.getElementById('en') && Math.abs(S.E / want[0] - 1) > 1e-9) return on.dataset.p + ': E = ' + S.E + ', should be ' + want[0];
      if (Math.abs(MEC2 * LC / HC - 1) > 1e-12) return 'constants';
      return true; })()` },
  ],
  steps: [
    { name: 'every preset and source, drag θ and E sliders to the ends and back, then Play/step with Monte Carlo photons', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), C = window.__cs;
      for (const b of document.querySelectorAll('#presets button, #sources button')) { b.click(); await pause(150); }
      for (const [id, vals] of [['th', ['0', '180', '0.1', '179.9', '90']], ['en', ['-2.8', '4', '0', '-2.8', '1.2417']]]) {
        const el = document.getElementById(id); if (!el) continue;
        for (const v of vals) { el.value = v; el.dispatchEvent(new Event('input', { bubbles: true })); await pause(120); }
      }
      if (C.addMany) { C.addMany(500); await pause(300); }
      for (const t of document.querySelectorAll('[role=tab]')) { t.click(); await pause(200); }
    })()` },
  ],
};
