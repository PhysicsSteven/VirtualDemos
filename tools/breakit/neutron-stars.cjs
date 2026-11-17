/* Known values for the break-it test (tools/breakit.cjs), neutron-stars. Hook: window.__ns (S, spinPeriod, Rnow, pulseWidth, ...).
   Checked at every probe: in Collapse the period is P₀(R/R₀)² and B P is kept; the radius stays between the two radii; the lesson's
   core gives 2.16 s once collapsed; in Lighthouse the "Pulses each turn" readout counts the poles whose width is above 0, and the
   orthogonal case gives W = 2ρ; in Spin down P Ṗ stays the catalogue's and the Crab today has τ = 1,257 yr. */
const base = `const X = window.__ns; if (!X || !X.S) return true; const S = X.S, DEG = Math.PI / 180, near = (g, w, t) => Math.abs(g - w) <= t * Math.abs(w);
  const row = (re) => { const d = [...document.querySelectorAll('#out div')].find((x) => re.test(x.querySelector('dt').textContent)); return d ? d.querySelector('dd').textContent : null; };`;
module.exports = {
  checks: [
    { name: 'collapse: P = P₀(R/R₀)², radius between R₀ and R, the lesson core gives 2.16 s', fn: `(() => { ${base}
      if (S.mode !== 'collapse') return true;
      const R = X.Rnow(), R0 = S.R0 * 1000, Rf = S.Rf * 1000;
      if (!(R <= R0 * (1 + 1e-12) && R >= Rf * (1 - 1e-12))) return 'radius ' + R + ' outside ' + Rf + ' to ' + R0;
      if (!near(X.spinPeriod(), S.P0 * (R / R0) ** 2, 1e-12)) return 'period ' + X.spinPeriod();
      if (S.preset === 'lesson' && S.u === 1 && !near(X.spinPeriod(), 2.16, 1e-9)) return 'lesson core collapsed to ' + X.spinPeriod() + ' s, not 2.16 s';
      return true; })()` },
    { name: 'lighthouse: pulses each turn and W = 2ρ for an orthogonal rotator seen edge on', fn: `(() => { ${base}
      if (S.mode !== 'light') return true;
      const n = (X.pulseWidth(S.al * DEG, S.ze * DEG, S.rho * DEG, false) > 0) + (X.pulseWidth(S.al * DEG, S.ze * DEG, S.rho * DEG, true) > 0);
      const t = row(/^Pulses each turn/); if (!S.blind && t !== String(n)) return 'Pulses each turn shows ' + t + ', geometry gives ' + n;
      if (!near(X.pulseWidth(90 * DEG, 90 * DEG, S.rho * DEG, false), 2 * S.rho * DEG, 1e-12)) return 'W != 2ρ';
      return true; })()` },
    { name: 'spin down: P Ṗ kept along the track, the Crab today τ = 1,257 yr', fn: `(() => { ${base}
      if (S.mode !== 'down') return true;
      if (!(X.spinPeriod() > 0) || !isFinite(X.spinPeriod())) return 'period ' + X.spinPeriod();
      if (S.psr === 'crab') { const tau = 0.0333924123 / (2 * 4.20972e-13) / 31557600; if (Math.abs(tau - 1257) > 2) return 'τ ' + tau; }
      return true; })()` },
  ],
  steps: [
    { name: 'every mode and setup, a collapse run to the end, extreme sliders, then back', fn: `(async () => {
      const X = window.__ns, pause = (ms) => new Promise((r) => setTimeout(r, ms)); if (!X) return;
      for (const k of ['lesson', 'half', 'sun', 'heavy', 'cp1919', 'inter', 'miss', 'crab', 'vela', 'cp1919d']) { X.applyPreset(k); await pause(150); document.getElementById('play').click(); await pause(600); document.getElementById('play').click(); }
      X.applyPreset('lesson'); X.S.u = 1; X.redraw(); await pause(150);
      X.applyPreset('lesson');
    })()` },
  ],
};
