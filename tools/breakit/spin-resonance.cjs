/* Known values for the break-it test (tools/breakit.cjs), spin-resonance. Hook: window.__sr (S, res, nu, BZ, osc, fits, meterValue ...).
   The resonance condition from the live settings: ESR h nu = g mu_B B (DPPH g = 2.0036), proton NMR nu = gamma B with the
   Zeeman field B20 (1 - 7.5e-4 (t - 20)) plus the scan field; the frequency meter reads the probe frequency to one count of
   jitter; the marginal oscillator is on exactly when SENS is below its threshold, and then gain >= 1 and the LED is between 0
   and 1; the recorded readings fit the least squares line (free intercept) the page shows, for slope and g. */
const pre = `const R = window.__sr; if (!R || !R.S) return true; const S = R.S;
  const H = 6.62607015e-34, MUB = 9.2740100657e-24, near = (a, b, t) => Math.abs(a - b) <= t * Math.max(Math.abs(a), Math.abs(b), 1e-300);
`;
module.exports = {
  checks: [
    { name: "resonance condition: h nu = g mu_B B for ESR, nu = gamma (B_Zeeman + B_scan) for NMR", fn: `(() => { ${pre}
      const nu = R.nu(), bz = R.BZ(); if (!isFinite(nu) || nu <= 0) return 'probe frequency ' + nu;
      if (S.cfg === 'psr') { const B20 = R.inst.B20, want = B20 * (1 - (S.temp - 20) * 7.5e-4); if (!near(bz, want, 1e-12)) return 'Zeeman field ' + bz + ', B20 (1 - 7.5e-4 (t - 20)) = ' + want; }
      for (const r of R.res()) {
        if (!(isFinite(r.B0) && r.fwhm > 0 && r.amp > 0)) return 'resonance with B0 ' + r.B0 + ', fwhm ' + r.fwhm;
        if (r.spin === 'e') { const B = H * nu / (2.0036 * MUB); if (!near(r.B0, B, 1e-12)) return 'ESR B0 ' + r.B0 + ', h nu/(g mu_B) = ' + B; if (S.range === 'MID' && Math.abs(nu - 60e6) < 2e6 && Math.abs(B - 2.14e-3) > 0.1e-3) return 'DPPH near 60 MHz resonates at ' + B; }
        else { const g = r.spin === 'F' ? 40.0776e6 : 42.577478e6; if (!near(r.B0 + bz, nu / g, 1e-12)) return 'NMR B0 + Bz ' + (r.B0 + bz) + ', nu/gamma = ' + nu / g; }
      }
      return true; })()` },
    { name: "frequency meter reads the probe frequency within one count of jitter", fn: `(() => { ${pre}
      const nu = R.nu(), w = window.__srPrev || (window.__srPrev = { nu: NaN, cfg: '' }), same = w.nu === nu && w.cfg === S.cfg; w.nu = nu; w.cfg = S.cfg;
      if (!same) return true;                 /* the console redraws on the next frame after a change */
      const d = S.cfg === 'esr' ? 2 : 3, txt = document.getElementById('meter').firstChild.textContent, got = parseFloat(txt);
      return Math.abs(got - nu / 1e6) <= 1.51 * 10 ** -d ? true : 'meter shows ' + txt + ' MHz-kHz units, probe ' + nu / 1e6; })()` },
    { name: "oscillator: on only below threshold, gain >= 1, LED 0..1, finite noise", fn: `(() => { ${pre}
      const o = R.osc(), thr = R.inst.thr[S.cfg][S.range], s = S.sens[S.cfg];
      if (o.on !== (s < thr)) return 'oscillator on = ' + o.on + ' but SENS ' + s + ', threshold ' + thr;
      if (o.on && !(o.gain >= 1 && o.led >= 0 && o.led <= 1 + 1e-12 && isFinite(o.noise) && o.noise > 0)) return 'gain ' + o.gain + ', led ' + o.led + ', noise ' + o.noise;
      if (!o.on && o.gain !== 0) return 'off but gain ' + o.gain;
      return true; })()` },
    { name: "recorded readings fit the least squares line the page shows", fn: `(() => { ${pre}
      const F = R.fits(), BM = { esr: 3.67e-3, psr: 3.2e-3 }; let msg = true;
      const tx = (id) => document.getElementById('fitOut') ? document.getElementById('fitOut').textContent : '';
      for (const k of Object.keys(F)) { const rows = F[k].rows, f = F[k].fit; if (rows.length < 2 || !f) continue;
        const x = [], y = [];
        for (const r of rows) { const v = parseFloat(r.reading), bm = BM[r.exp]; const sc = r.method === 'volt' ? v * bm : r.method === 'ruler' ? v / 25 * bm : v / 1000 / 0.040 * bm;
          x.push(parseFloat(r.meter) * 1e6); y.push(r.exp === 'psr' ? r.B20 * (1 - (r.temp - 20) * 7.5e-4) + sc : sc); }
        const n = x.length, mx = x.reduce((a, b) => a + b) / n, my = y.reduce((a, b) => a + b) / n; let sxx = 0, sxy = 0; for (let i = 0; i < n; i++) { sxx += (x[i] - mx) ** 2; sxy += (x[i] - mx) * (y[i] - my); }
        if (!(sxx > 0)) continue; const kk = sxy / sxx, c = my - kk * mx;
        if (!near(kk, f.k, 1e-9) || Math.abs(c - f.c) > 1e-9 * Math.max(Math.abs(my), 1e-9)) { msg = 'fit slope ' + f.k + ' intercept ' + f.c + ', independent ' + kk + ', ' + c; break; }
        if (k === 'e' && S.cfg === 'esr') { const g = H / (MUB * kk), m = tx().match(/g = h\\/\\(μBk\\)([\\d.]+)/); if (m && Math.abs(parseFloat(m[1]) - g) > 6e-5) { msg = 'g shows ' + m[1] + ', h/(mu_B k) = ' + g; break; } }
      }
      return msg; })()` },
  ],
  steps: [
    { name: 'record readings with odd values at every range, edit and delete rows, switch ESR and NMR with rows kept, SENS past threshold and to zero', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), R = window.__sr;
      const rec = document.getElementById('capture') || [...document.querySelectorAll('button')].find((b) => /record reading/i.test(b.textContent));
      for (const cfg of ['esr', 'psr', 'esr']) { R.setCfg(cfg); await pause(100);
        for (const rg of ['LO', 'MID', 'HI']) { R.setRange(rg); await pause(60); if (rec) { rec.click(); await pause(30); } }
        for (const v of [0, 99, 6.6, 0]) { R.setSens(v); await pause(60); } }
      const n = document.querySelectorAll('#tbl input[data-f=reading]').length;
      for (let k = 0; k < n; k++) { const inp = document.querySelectorAll('#tbl input[data-f=reading]')[k]; if (!inp) break; inp.value = ['', 'abc', '-5', '1e9', '0', '1'][k % 6]; inp.dispatchEvent(new Event('change', { bubbles: true })); await pause(30); }
      for (let k = 0; k < n; k += 2) { const inp = document.querySelectorAll('#tbl input[data-f=reading]')[k]; if (inp) { inp.value = '1'; inp.dispatchEvent(new Event('change', { bubbles: true })); await pause(20); } }
      let b; while ((b = document.querySelector('#tbl button[data-del]'))) { b.click(); await pause(10); }   /* leave no readings: Reset all would ask first */
    })()` },
    { name: 'dial to both ends and all ranges in NMR with the temperature changed, slow sweep run and abandoned', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), R = window.__sr;
      R.setCfg('psr'); await pause(100);
      for (const rg of ['LO', 'MID', 'HI']) { R.setRange(rg); for (const d of [0, 10, 5, -3, 13]) { R.setDial(d); await pause(40); } }
      R.setSweep('slow'); await pause(100); R.slowRun(); await pause(500); R.setSweep('fast'); await pause(100); R.setCfg('esr'); await pause(100);
    })()` },
  ],
};
