/* Known values for the break-it test (tools/breakit.cjs), resonators. Hook: window.__rs (S = settings, D = derived).
   Every check recomputes the physics from the settings alone (c = 331.3 sqrt(1 + t/273.15) m/s, so 343.2 m/s at 20 C):
   resonance tube resonances L = (2k - 1) c/4f - 0.6133a and the lambda/2 spacing readout; the level is 0 dB at the first
   resonance and equals 20 log10 of the Q response; pipe frequencies n c / 2(L + 2*0.6133a) (open) and n c / 4(L + 0.6133a)
   (closed, n odd) and the readout ladder; string f1 = sqrt(T/mu)/2L and the wave speed; Helmholtz f = (c/2pi) sqrt(A/(V Leff)),
   Leff = L + 1.4349a, V of the air left; presets: guitar E4 329.6 Hz, low E 82.4, violin A 440, cello C 65.4, bottle about 110 Hz. */
const pre = `const R = window.__rs; if (!R || !R.D) return true;
  const S = R.S, TAU = 2 * Math.PI, rd = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-');
  const c = 331.3 * Math.sqrt(1 + S.tc / 273.15), EO = 0.6133, EF = 0.8216;
  const hz = (id) => { const t = rd(id), v = parseFloat(t), k = /kHz/.test(t); return { v: k ? v * 1000 : v, tol: (k ? 5.1 : (v < 100 ? 0.0051 : 0.051)) }; };
  const chk = (id, want, what) => { const g = hz(id); return Math.abs(g.v - want) <= g.tol + 1e-9 ? null : what + ' shows ' + rd(id) + ', physics gives ' + want.toFixed(3) + ' Hz'; };
  const cm = (id) => parseFloat(rd(id)) / 100;
`;
module.exports = {
  checks: [
    { name: "speed of sound c = 331.3 √(1 + t/273.15), wavelength readout c/f", fn: `(() => { ${pre}
      if (Math.abs(parseFloat(rd('rC')) - c) > 0.051) return 'c shows ' + rd('rC') + ', should be ' + c.toFixed(2);
      if (S.tc === 20 && Math.abs(c - 343.2) > 0.05) return 'c at 20 C = ' + c;
      const f = S.view === 'pipe' ? (S.pm === 'tube' ? S.fork : R.D.pf) : S.view === 'string' ? R.D.f1 : R.D.fH;
      if (!(f > 0)) return 'frequency ' + f;
      const lam = parseFloat(rd('rLam')); if (Math.abs(lam - c / f * 100) > 0.051 + 1e-3 * lam) return 'wavelength shows ' + rd('rLam') + ', c/f = ' + (c / f * 100).toFixed(2) + ' cm';
      return true; })()` },
    { name: "resonance tube: resonances at (2k-1)λ/4 - 0.6133a, spacing λ/2, 0 dB at the first resonance", fn: `(() => { ${pre}
      const a = S.tdia / 2, f = S.fork, res = R.D.res;
      let want = []; for (let k = 1; k < 60; k++) { const L = (2 * k - 1) * c / (4 * f) - EO * a; if (L > 1.0) break; if (L > 0) want.push(L); }
      if (res.length !== want.length) return 'tube lists ' + res.length + ' resonances, physics gives ' + want.length;
      for (let i = 0; i < want.length; i++) if (Math.abs(res[i].L - want[i]) > 1e-9) return 'resonance ' + (i + 1) + ' at ' + res[i].L + ', want ' + want[i];
      if (!S.blind && Math.abs(cm('rHalf') - c / f / 2) > 5.1e-4) return 'lambda/2 shows ' + rd('rHalf') + ', want ' + (c / f / 50).toFixed(2) + ' cm';
      if (Math.abs(cm('rEnd') - EO * a) > 5.1e-5) return 'end correction shows ' + rd('rEnd') + ', 0.6133a = ' + (EO * a * 100).toFixed(3);
      const z = (L) => TAU * f / c * (L + EO * a), y = (L) => z(L) / (2 * S.Q), rel = (L) => Math.sqrt(1 / (Math.cos(z(L)) ** 2 + Math.sinh(y(L)) ** 2)) * Math.sinh(Math.PI / (4 * S.Q));
      const want1 = Math.max(-40, 20 * Math.log10(Math.max(1e-6, rel(S.water))));
      if (Math.abs(parseFloat(rd('rLevel')) - want1) > 0.051) return 'level shows ' + rd('rLevel') + ', physics gives ' + want1.toFixed(2) + ' dB';
      if (Math.abs(rel(want[0] ? want[0] : 0) - 1) > 0.02 && want.length) return 'level at the first resonance is not 0 dB: ' + rel(want[0]);
      return true; })()` },
    { name: "pipes: open n c / 2(L + 2·0.6133a), closed n c / 4(L + 0.6133a) with n odd; readout ladder", fn: `(() => { ${pre}
      const a = S.pdia / 2, kind = S.pm === 'closed' ? 'closed' : 'open';
      const fr = (kd, k) => kd === 'open' ? k * c / (2 * (S.L + 2 * EO * a)) : (2 * k - 1) * c / (4 * (S.L + EO * a));
      if (Math.abs(R.D.pf - fr(kind, S.k)) > 1e-9 * R.D.pf) return 'mode ' + S.k + ' is ' + R.D.pf + ', physics ' + fr(kind, S.k);
      let e = chk('rPf', fr(kind, S.k), 'this mode'); if (e) return e;
      const leff = kind === 'open' ? S.L + 2 * EO * a : S.L + EO * a; if (Math.abs(cm('rPleff') - leff) > 5.1e-4) return 'effective length ' + rd('rPleff') + ', want ' + (leff * 100).toFixed(2);
      for (const [id, kd] of [['rPopen', 'open'], ['rPclosed', 'closed']]) {
        const got = rd(id).replace(' Hz', '').split(', ').map(Number); for (let k = 1; k <= 4; k++) if (Math.abs(got[k - 1] - fr(kd, k)) > 0.51) return id + ' k = ' + k + ' shows ' + got[k - 1] + ', physics ' + fr(kd, k).toFixed(1);
      }
      if (S.L > 0.1 && fr('closed', 1) > fr('open', 1)) return 'closed pipe above the open one';
      return true; })()` },
    { name: "string: f1 = √(T/μ)/2L, wave speed readout, the four presets (E4 329.6, E2 82.4, A4 440, C2 65.4 Hz)", fn: `(() => { ${pre}
      const f1 = Math.sqrt(S.sT / S.mu) / (2 * S.sL);
      if (Math.abs(R.D.f1 - f1) > 1e-9 * f1) return 'D.f1 = ' + R.D.f1 + ', want ' + f1;
      let e = chk('rSf1', f1, 'f1'); if (e) return e;
      if (Math.abs(parseFloat(rd('rSv')) - Math.sqrt(S.sT / S.mu)) > 0.51) return 'wave speed shows ' + rd('rSv') + ', want ' + Math.sqrt(S.sT / S.mu).toFixed(1);
      const want = { gE4: [0.648, 329.63], gE2: [0.648, 82.41], vA: [0.328, 440], cC: [0.690, 65.41] }[S.sPreset];
      if (want && Math.abs(S.sL - want[0]) < 1e-9 && Math.abs(f1 - want[1]) > 0.25 && Math.abs(S.sT - { gE4: 72.6, gE2: 77.8, vA: 50, cC: 130 }[S.sPreset]) < 1e-9) return S.sPreset + ': f1 = ' + f1.toFixed(2) + ', cited ' + want[1];
      return true; })()` },
    { name: "bottle: Helmholtz f = (c/2π)√(A/(V·Leff)), Leff = L + 1.43a, V of the air left; bottle preset about 110 Hz", fn: `(() => { ${pre}
      const a = S.bdia / 2, A = Math.PI * a * a, V = S.vb * (1 - S.fill / 100), Le = S.neck + (EO + EF) * a, f = c / TAU * Math.sqrt(A / (V * Le));
      if (Math.abs(R.D.fH - f) > 1e-9 * f) return 'D.fH = ' + R.D.fH + ', want ' + f;
      let e = chk('rBf', f, 'Helmholtz f'); if (e) return e;
      if (Math.abs(parseFloat(rd('rBV')) - V * 1e6) > 0.51) return 'air volume shows ' + rd('rBV') + ', want ' + (V * 1e6).toFixed(1);
      if (Math.abs(cm('rBL') - Le) > 5.1e-5) return 'Leff shows ' + rd('rBL') + ', want ' + (Le * 100).toFixed(2);
      if (R.presetId === 'bottle' && S.fill === 0 && (f < 105 || f > 115)) return 'bottle preset f = ' + f + ' Hz, hint says about 110';
      if (R.presetId === 'bottle' && S.fill === 0 && Math.abs(R.D.fP / f - 3) > 0.15) return 'bottle preset pipe / Helmholtz = ' + R.D.fP / f + ', hint says about three';
      return true; })()` },
  ],
  steps: [
    { name: 'every preset, every view, Open/Closed pipe, temperature and every slider to its extremes, blind mode, then capture many readings', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      for (const b of document.querySelectorAll('#presets button')) { b.click(); await pause(200); }
      for (const id of ['temp', 'water', 'tq', 'tdia', 'fork', 'plen', 'pdia', 'pk', 'sLen', 'sTen', 'sMu', 'bVol', 'bFill', 'bNeck', 'bDia']) {
        const e = document.getElementById(id); if (!e) continue;
        for (const v of [e.min, e.max, e.min]) { e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); await pause(40); }
      }
      document.querySelector('#presets button').click(); await pause(300);
    })()` },
  ],
};
