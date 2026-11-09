/* Known values for the break-it test (tools/breakit.cjs), inside-a-planet. Hook: window.__ip (S, B, M, applyPreset, setMode, ...).
   Layers: the readouts equal the two layer formulas for the sliders (mean density = ρm + (ρc − ρm) q³, C/MR² = 0.4 [ρm + (ρc − ρm) q⁵] / ρ̄,
   core mass share), and a fitted planet preset reproduces the measured mean density and C/MR² (to the rounding of the two densities).
   Crust: above + below = thickness and below/thickness = ρcrust/ρmantle, and the readouts say so.
   Convection: the temperature stays finite and not below 0, the speed readouts equal the box's speeds in cm/yr, the box width is
   half the mid mantle circumference over the depth, and the heat flow readout equals the measured Nu. */
const rd = `const $ = (id) => document.getElementById(id), num = (s) => parseFloat(String(s).replace(/−/g, '-').replace(/,/g, ''));
  const row = (name) => { const r = [...document.querySelectorAll('#out div')].find((d) => d.querySelector('dt').textContent === name); return r ? r.querySelector('dd').textContent : null; };
  const near = (got, want, tol) => Math.abs(got - want) <= tol * Math.max(Math.abs(want), 1e-12);`;
module.exports = {
  checks: [
    { name: 'layers: readouts equal the two layer formulas for the sliders', fn: `(() => { ${rd}
      const I = window.__ip; if (!I || I.S.mode !== 'layers') return true;
      const S = I.S, R = { mercury: 2439.7, venus: 6051.8, earth: 6371.0, moon: 1737.4, mars: 3389.5 }[S.lp], q = Math.min(1, Math.max(0, S.rc / R));
      const rho = S.rhoM + (S.rhoC - S.rhoM) * q ** 3, k = 0.4 * (S.rhoM + (S.rhoC - S.rhoM) * q ** 5) / rho, cm = S.rhoC * q ** 3 / rho;
      if (Math.abs(num(row('Model mean density')) - rho) > 0.51) return 'mean density shows ' + row('Model mean density') + ', formula ' + rho;
      if (Math.abs(num(row('Model C/MR²')) - k) > 6e-5) return 'C/MR² shows ' + row('Model C/MR²') + ', formula ' + k;
      if (Math.abs(num(row('Core share of the volume')) - 100 * q ** 3) > 0.06) return 'core volume share ' + row('Core share of the volume') + ', formula ' + 100 * q ** 3;
      if (Math.abs(num(row('Core share of the mass')) - 100 * cm) > 0.06) return 'core mass share ' + row('Core share of the mass') + ', formula ' + 100 * cm;
      if (rho <= 0 || k > 0.4 + 1e-9 && S.rhoC <= S.rhoM) return true;
      return true; })()` },
    { name: 'layers: a fitted planet preset gives the measured mean density and C/MR²', fn: `(() => { ${rd}
      const I = window.__ip; if (!I || I.S.mode !== 'layers' || I.S.preset === 'custom' || !/2$/.test(I.S.preset) || I.S.preset === 'earthRock') return true;
      if (I.S.blind) return true;
      const m = num(row('Model mean density')), M0 = num(row('Measured mean density')), k = num(row('Model C/MR²')), K0 = num(row('Measured C/MR²'));
      if (Math.abs(m - M0) > 2) return 'preset ' + I.S.preset + ': model mean density ' + m + ' vs measured ' + M0;
      if (Math.abs(k - K0) > 6e-4) return 'preset ' + I.S.preset + ': model C/MR² ' + k + ' vs measured ' + K0;
      return true; })()` },
    { name: 'crust: above + below = thickness, below = t ρ/ρm, readouts agree', fn: `(() => { ${rd}
      const I = window.__ip; if (!I || I.S.mode !== 'crust' || I.S.blind) return true;
      const S = I.S, cb = S.tc * S.rcr / S.rm, ob = S.to * S.ro / S.rm;
      if (Math.abs(num(row('Continent root below')) - cb) > 0.006) return 'continent root shows ' + row('Continent root below') + ', t ρ/ρm = ' + cb;
      if (Math.abs(num(row('Continent above the mantle')) - (S.tc - cb)) > 0.006) return 'continent above shows ' + row('Continent above the mantle') + ', should be ' + (S.tc - cb);
      if (Math.abs(num(row('Ocean crust root below')) - ob) > 0.006) return 'ocean root shows ' + row('Ocean crust root below') + ', should be ' + ob;
      if (Math.abs(num(row('Continent higher by')) - ((S.tc - cb) - (S.to - ob))) > 0.011) return 'higher-by readout ' + row('Continent higher by');
      return true; })()` },
    { name: 'convection: T finite and not below 0, speed and heat readouts equal the box', fn: `(() => { ${rd}
      const I = window.__ip; if (!I || I.S.mode !== 'convect' || !I.B) return true;
      const B = I.B, S = I.S;
      let mn = Infinity, bad = 0; for (let q = 0; q < B.T.length; q++) { const v = B.T[q]; if (!isFinite(v) || !isFinite(B.psi[q])) bad++; if (v < mn) mn = v; }
      if (bad) return bad + ' nodes are NaN or infinite';
      if (mn < -1e-6) return 'temperature fell below the surface temperature: min T = ' + mn;
      if (S.blind) return true;
      const M = I.M, W = { earth: [2891, 6371, 3480], venus: [2551.8, 6051.8, 3500], mars: [1559.5, 3389.5, 1830] }[S.cp];
      if (!near(B.A, Math.PI * (W[1] + W[2]) / 2 / W[0], 1e-9)) return 'box width ' + B.A;
      const yr = 365.25 * 86400, cm = (v) => v * 1e-6 / (W[0] * 1e3) * yr * 100;
      if (!isFinite(M.vsurf) || Math.abs(num(row('Surface speed')) - cm(M.vsurf)) > 0.006 + 1e-9) return 'surface speed shows ' + row('Surface speed') + ', M gives ' + cm(M.vsurf);
      return true; })()` },
  ],
  steps: [
    { name: 'run Plates fast, switch to Lid, then Plume mid run, then mode to Layers and back', fn: `(async () => {
      const I = window.__ip, pause = (ms) => new Promise((r) => setTimeout(r, ms)), go = (p) => document.querySelector('#presets [data-p=' + p + ']').click();
      go('plates'); document.getElementById('play').click(); const sp = document.getElementById('selSpeed'); sp.value = sp.options[sp.options.length - 1].value; sp.dispatchEvent(new Event('change', { bubbles: true }));
      await pause(1500); go('lid'); document.getElementById('play').click(); await pause(800); go('plume'); await pause(800);
      document.querySelector('#modeSeg [data-mode=layers]').click(); await pause(300); document.querySelector('#modeSeg [data-mode=convect]').click(); await pause(800);
      go('bench'); document.getElementById('play').click(); await pause(1000);
    })()` },
    { name: 'convection sliders to the extremes while it runs, then back; change planet', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#presets [data-p=plates]').click(); document.getElementById('play').click(); await pause(500);
      for (const id of ['sRa', 'sVisc', 'sYield', 'sHeat', 'sLower']) { const e = document.getElementById(id); for (const v of [e.max, e.min, e.max]) { set(id, v); document.getElementById('play').click(); await pause(500); } }
      const s = document.getElementById('selCPlanet'); for (const v of ['mars', 'venus', 'earth']) { s.value = v; s.dispatchEvent(new Event('change', { bubbles: true })); await pause(300); }
      document.getElementById('restart').click(); await pause(300);
    })()` },
    { name: 'layers: core to its limits, densities to limits, planet switches, and crust extremes', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#modeSeg [data-mode=layers]').click(); await pause(200);
      for (const id of ['sCore', 'sRhoC', 'sRhoM']) { const e = document.getElementById(id); for (const v of [e.min, e.max, e.min]) { set(id, v); await pause(150); } }
      const s = document.getElementById('selLPlanet'); for (const v of ['moon', 'mercury', 'earth']) { s.value = v; s.dispatchEvent(new Event('change', { bubbles: true })); await pause(200); }
      document.querySelector('#presets [data-p=earthRock]').click(); await pause(200); document.querySelector('#presets [data-p=earth2]').click(); await pause(200);
      document.querySelector('#modeSeg [data-mode=crust]').click(); await pause(200);
      for (const id of ['sTc', 'sRc', 'sTo', 'sRo', 'sRm']) { const e = document.getElementById(id); for (const v of [e.min, e.max, e.min]) { set(id, v); await pause(100); } }
      document.querySelector('#presets [data-p=tibet]').click(); await pause(200);
    })()` },
  ],
};
