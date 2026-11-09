/* Known values for the break-it test (tools/breakit.cjs), planet-temperatures. Hook: window.__pt (S, state, tBare, tSurf, hzEdges, flux, applyPreset).
   Star system view: the model readouts equal the energy balance e σ T⁴ = S (1 − a) / f from the live settings; the habitable zone edges
   are ordered and Kopparapu 2014's Sun values hold for the Sun; the preset planets come out at their cited temperatures while the setup is
   its own (Earth 288 K and 255 K bare, Venus 737 K, Mars 214 K, Mercury and the Moon with no air); the CO₂ forcing readout is
   5.35 ln(C / 420) and the warming is zero at 420 ppm. */
const base = `const P = window.__pt; if (!P || !P.S) return true; const S = P.S, B = S.blind, SIG = 5.670374419e-8;
  const rd = (lab) => { for (const d of document.querySelectorAll('#out > div')) { const t = d.querySelector('dt').textContent; if (t === lab || t.startsWith(lab)) return d.querySelector('dd').textContent.replace(/−/g, '-'); } return null; };
  const near = (g, w, tol) => Math.abs(g - w) <= tol * Math.max(Math.abs(w), 1e-12);
  const f = { whole: 4, day: 2, sub: 1 }[S.sp], e = S.gh ? S.e : 1;
`;
module.exports = {
  checks: [
    { name: "energy balance: e σ T⁴ = S (1 − a) / f and the readouts show it", fn: `(() => { ${base}
      if (!(S.L > 0 && S.d > 0 && S.e > 0)) return 'bad state ' + JSON.stringify({ L: S.L, d: S.d, e: S.e });
      const st = P.state(), Sx = S.L * 3.828e26 / (4 * Math.PI * (S.d * 1.495978707e11) ** 2);
      if (!near(st.Sx, Sx, 1e-9)) return 'flux ' + st.Sx + ' vs ' + Sx;
      if (!near(e * SIG * st.ts ** 4, Sx * (1 - S.a) / f, 1e-9)) return 'e σ T⁴ = ' + e * SIG * st.ts ** 4 + ' but S(1−a)/f = ' + Sx * (1 - S.a) / f;
      if (!near(SIG * st.tb ** 4, Sx * (1 - S.a) / f, 1e-9)) return 'bare temperature does not balance';
      if (S.gh && S.e < 1 && st.ts <= st.tb) return 'greenhouse did not warm';
      if (document.getElementById('sys').offsetParent === null) return true;
      const g = (lab) => parseFloat(rd(lab)); if (B) return true;
      if (!near(g('Surface temperature, model'), st.ts, 6e-4) && Math.abs(g('Surface temperature, model') - st.ts) > 0.06) return 'readout ' + rd('Surface temperature, model') + ', model ' + st.ts;
      if (Math.abs(g('Temperature, no greenhouse') - st.tb) > 0.06) return 'bare readout ' + rd('Temperature, no greenhouse') + ', model ' + st.tb;
      if (Math.abs(g('Greenhouse warming') - (st.ts - st.tb)) > 0.11) return 'warming readout ' + rd('Greenhouse warming') + ', model ' + (st.ts - st.tb);
      if (!near(g('compared with Earth'), st.rel, 6e-3)) return 'ratio readout ' + rd('compared with Earth') + ', model ' + st.rel;
      return true; })()` },
    { name: "habitable zone edges are ordered and the Sun's match Kopparapu 2014", fn: `(() => { ${base}
      const z = P.hzEdges(S.L, S.T);
      if (!(z.rv < z.rg && z.rg < z.mg && z.mg <= z.em)) return 'edges out of order ' + JSON.stringify(z);
      if (S.L === 1 && S.T === 5772) { const w = { rv: 0.75, rg: 0.95, mg: 1.68, em: 1.77 }; for (const k in w) if (Math.abs(z[k] - w[k]) > 0.015) return 'Sun edge ' + k + ' = ' + z[k] + ', published ' + w[k]; }
      if (!B && document.getElementById('sys').offsetParent !== null) { const r = rd('Habitable zone, conservative'); if (r && !/^[\\d.]+ to [\\d.]+ AU$/.test(r)) return 'zone readout "' + r + '"'; }
      return true; })()` },
    { name: "preset planets: the setup's own temperatures match the cited values", fn: `(() => { ${base}
      if (S.preset === 'custom' || !S.meas || Math.abs(S.L - 1) > 1e-9) return true;
      const st = P.state(), PR = P.PRESETS[S.preset]; if (!PR || Math.abs(S.d - PR.d) > 1e-6 || Math.abs(S.a - PR.a) > 1e-9 || S.sp !== PR.sp) return true;
      if (S.meas.v && S.gh && (S.preset !== 'earth' || S.co2 === 420) && Math.abs(st.ts - S.meas.v) > 0.01) return S.preset + ': model ' + st.ts + ' K, measured ' + S.meas.v;
      if (S.preset === 'earth' && S.co2 === 420 && (Math.abs(st.ts - 288) > 0.01 || Math.abs(st.tb - 255) > 0.5)) return 'Earth ' + st.ts + ' K, bare ' + st.tb;
      if (S.preset === 'mercury' && (Math.abs(st.ts - 622) > 2)) return 'Mercury sub-solar ' + st.ts;
      if (S.preset === 'moon' && (Math.abs(st.ts - 382) > 2)) return 'Moon sub-solar ' + st.ts;
      return true; })()` },
    { name: "CO₂: forcing readout is 5.35 ln(C/420), zero change at 420 ppm", fn: `(() => { ${base}
      if (S.body !== 'Earth' || !S.gh || !S.co2On || B || document.getElementById('sys').offsetParent === null) return true;
      const F = 5.35 * Math.log(S.co2 / 420), got = parseFloat(rd('Forcing against today')), dT = parseFloat(rd('Change, no feedbacks'));
      if (Math.abs(got - F) > 0.006) return 'forcing readout ' + rd('Forcing against today') + ', should be ' + F;
      const st = P.state(), E = P.PRESETS.earth, eE = Math.pow(P.tBare(E.L, E.d, E.a, E.sp) / 288, 4);
      if (Math.abs(P.S.e - (eE - F / (SIG * 288 ** 4))) > 1e-9 && S.L === 1 && S.d === 1 && S.a === 0.294) return 'e not from forcing: ' + S.e;
      if (S.co2 === 420 && Math.abs(dT) > 0.005) return 'change at 420 ppm is ' + rd('Change, no feedbacks');
      if (S.co2 > 420 && !(dT > 0) || S.co2 < 420 && !(dT < 0)) return 'warming has the wrong sign: ' + rd('Change, no feedbacks') + ' at ' + S.co2 + ' ppm';
      return true; })()` },
  ],
  steps: [
    { name: 'every preset, then slide the planet to the extremes with the keyboard and back, greenhouse off and on, spread modes', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), P = window.__pt;
      for (const b of document.querySelectorAll('#presets button')) { b.click(); await pause(150); }
      document.querySelector('#presets [data-p=earth]').click(); const c = document.getElementById('sys'); c.focus();
      for (const k of ['ArrowLeft', 'ArrowRight']) { for (let i = 0; i < 400; i++) c.dispatchEvent(new KeyboardEvent('keydown', { key: k, shiftKey: true, bubbles: true, cancelable: true })); await pause(200); }
      for (const sp of ['sub', 'day', 'whole']) { document.querySelector('#spreadSeg [data-sp=' + sp + ']').click(); await pause(100); }
      const gh = document.getElementById('chkGH'); gh.click(); await pause(100); gh.click(); await pause(100);
    })()` },
    { name: 'CO2 slider to 100 and 2000 ppm, then change albedo and distance, then the Earth preset again', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const s = document.getElementById(id); s.value = v; s.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#presets [data-p=earth]').click(); await pause(100);
      for (const v of [2, 3.301, 2.4, 2.623]) { set('sCO2', v); await pause(100); }
      set('sA', 0.95); await pause(100); set('sD', -2); await pause(100); set('sCO2', 3.301); await pause(100); set('sD', 1.7); await pause(100);
      document.querySelector('#presets [data-p=earth]').click(); await pause(200);
    })()` },
    { name: 'Galaxy view and back, chart tabs, Blind on and off mid change', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      document.querySelector('#scaleSeg [data-v=gal]').click(); await pause(300);
      for (const b of document.querySelectorAll('#galPresets button')) { b.click(); await pause(150); }
      document.querySelector('#scaleSeg [data-v=sys]').click(); await pause(300);
      for (const b of document.querySelectorAll('#chartSeg button')) { b.click(); await pause(150); }
      const bl = document.getElementById('labBlind'); bl.click(); document.querySelector('#presets [data-p=venus]').click(); await pause(150); bl.click(); await pause(150);
    })()` },
  ],
};
