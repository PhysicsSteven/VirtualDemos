/* Known values for the break-it test (tools/breakit.cjs), photoelectric. Hook: window.__pe (S, points, METALS, HC, EFF, current, ...).
   Einstein's equation from the live settings: photon energy hf = 1239.84/λ, K_max = max(0, hf − φ), stopping voltage V0 = K_max / e,
   threshold λ0 = 1239.84/φ; the readouts equal them; the current is zero when K_max <= 0, the saturation current pow/hf nA
   (0.1 % efficiency) for V >= 0, falls linearly to zero at V = −K_max and is never negative; every recorded point's meter reading equals the physics at that setting; the fit's h from the slope equals a least squares fit of the points;
   preset metals match the cited work functions; the preset descriptions' numbers. */
const pre = `const P = window.__pe; if (!P) return true; const S = P.S, $ = (id) => document.getElementById(id), rd = (id) => $(id).textContent.replace(/\\u2212/g, '-');
  const phi = P.METALS.find((m) => m[0] === S.metal)[2], E = P.HC / S.lam, K = Math.max(0, E - phi);
`;
module.exports = {
  checks: [
    { name: "state is finite and inside the slider ranges", fn: `(() => { ${pre}
      if (![S.lam, S.pow, S.V].every(isFinite)) return 'S = ' + JSON.stringify(S);
      if (S.lam < 100 || S.lam > 800 || S.pow < 0 || S.pow > 100 || S.V < -6 || S.V > 4) return 'out of range: ' + JSON.stringify(S);
      for (const e of P.electrons) if (![e.s, e.v, e.k].every(isFinite) || e.s < 0 || e.s >= 1) return 'electron ' + JSON.stringify(e);
      return true; })()` },
    { name: "readouts: hf = 1239.84/λ, f = c/λ, φ, K_max = hf − φ, V0 = K_max, λ0 = 1239.84/φ", fn: `(() => { ${pre}
      if (!P.layers.theory) return true;
      if (rd('rE') !== E.toFixed(2) + ' eV') return 'hf shows ' + rd('rE') + ', ' + E.toFixed(4);
      const f = 2.99792458e8 / (S.lam * 1e-9), m = rd('rF').match(/^([\\d.]+) × 10(.+) Hz$/); if (!m) return 'odd f text ' + rd('rF');
      const sup = '⁰¹²³⁴⁵⁶⁷⁸⁹', e = parseInt(m[2].replace('⁻', '-').split('').map((c) => (sup.indexOf(c) >= 0 ? sup.indexOf(c) : c)).join(''), 10);
      if (Math.abs(parseFloat(m[1]) * 10 ** e / f - 1) > 6e-3) return 'f shows ' + rd('rF') + ', f = ' + f;
      if (rd('rPhi') !== phi.toFixed(2) + ' eV') return 'φ shows ' + rd('rPhi');
      if (rd('rK') !== K.toFixed(2) + ' eV') return 'K_max shows ' + rd('rK') + ', physics ' + K;
      if (rd('rV0') !== (K > 0 ? K.toFixed(2) + ' V' : 'none')) return 'V0 shows ' + rd('rV0') + ', K_max ' + K;
      if (rd('rL0') !== Math.round(P.HC / phi) + ' nm') return 'λ0 shows ' + rd('rL0');
      return true; })()` },
    { name: "current: 0 below threshold, pow/hf nA at V >= 0, linear to 0 at −K_max, never negative; the meter shows it", fn: `(() => { ${pre}
      const I = (V) => P.current(V) * 1e9;
      if (K <= 0) { for (const V of [-6, -1, 0, 4]) if (I(V) !== 0) return 'current ' + I(V) + ' nA with hf <= φ'; }
      else {
        const Is = S.pow / E;   /* 0.1 % efficiency: I = 0.001 · P(µW)·1e-6 / hf(eV) A = pow/hf nA */
        for (const V of [0, 1, 4]) if (Math.abs(I(V) - Is) > 1e-9 * Math.max(1, Is)) return 'saturation current ' + I(V) + ' nA, should be ' + Is;
        if (Math.abs(I(-K / 2) - Is / 2) > 1e-9 * Math.max(1, Is)) return 'current at −K/2 is ' + I(-K / 2) + ', should be ' + Is / 2;
        if (I(-K) !== 0 || I(-K - 1e-3) !== 0 || I(-6) < 0) return 'current at the stopping voltage ' + I(-K);
      }
      const want = (nA) => nA === 0 ? '0 nA' : (nA >= 100 ? nA.toFixed(0) : nA >= 10 ? nA.toFixed(1) : nA.toFixed(2)) + ' nA';
      if (rd('rI') !== want(I(S.V))) return 'meter shows ' + rd('rI') + ', current(V) = ' + I(S.V) + ' nA';
      return true; })()` },
    { name: "recorded points: the stored meter reading is the physics at that setting, and a zero reading is never below K_max; the fit h is the least squares slope", fn: `(() => { ${pre}
      const pts = P.points;
      for (const p of pts) {
        const ph = P.METALS.find((m) => m[0] === p.metal)[2], Ep = P.HC / p.lam, k = Math.max(0, Ep - ph), want = k > 0 ? Math.max(0, 1 - p.k / k) * p.pow / Ep : 0;
        if (Math.abs(p.I - want) > 1e-9 * Math.max(1, want)) return 'point at ' + p.lam + ' nm, ' + p.metal + ': meter ' + p.I + ' nA, physics ' + want;
        if (p.I < 0.005 && k > 0 && p.k < k * (1 - 0.005 / (p.pow / Ep)) - 1e-9) return 'zero reading at V0 = ' + p.k + ' below K_max = ' + k;
      }
      if (pts.length < 2 || !P.layers.theory) return true;
      const n = pts.length; let sx = 0, sy = 0, sxx = 0, sxy = 0; for (const p of pts) { sx += p.f; sy += p.k; sxx += p.f * p.f; sxy += p.f * p.k; }
      const den = n * sxx - sx * sx; if (Math.abs(den) < 1e-9) return true;
      const m = (n * sxy - sx * sy) / den, h = m * 1.602176634e-19 / 1e14, txt = rd('rH');
      if (!/×/.test(txt)) return true;
      const g = txt.match(/^([\\d.]+) × 10(.+) J·s$/), sup = '⁰¹²³⁴⁵⁶⁷⁸⁹', e = parseInt(g[2].replace('⁻', '-').split('').map((c) => (sup.indexOf(c) >= 0 ? sup.indexOf(c) : c)).join(''), 10);
      return Math.abs(parseFloat(g[1]) * 10 ** e / h - 1) < 6e-3 ? true : 'h shows ' + txt + ', fit gives ' + h; })()` },
    { name: "Measure h preset: six points, slope within 3 % of h and intercept near 2.28 eV; metal work functions as cited", fn: `(() => { ${pre}
      const want = { Cs: 2.14, K: 2.30, Na: 2.28, Ca: 2.87, Zn: 4.33, Cu: 4.70, Pt: 5.65 };
      for (const m of P.METALS) if (want[m[0]] !== m[2]) return 'work function of ' + m[0] + ' is ' + m[2];
      if (Math.abs(P.HC - 6.62607015e-34 * 2.99792458e8 / 1.602176634e-19 * 1e9) > 2e-3) return 'hc = ' + P.HC;
      const on = document.querySelector('#presets [aria-pressed=true]'); if (!on || on.dataset.p !== 'planck' || P.points.length !== 6 || S.metal !== 'Na') return true;
      const pts = P.points, n = 6; let sx = 0, sy = 0, sxx = 0, sxy = 0; for (const p of pts) { sx += p.f; sy += p.k; sxx += p.f * p.f; sxy += p.f * p.k; }
      const m = (n * sxy - sx * sy) / (n * sxx - sx * sx), h = m * 1.602176634e-19 / 1e14, b = (sy - m * sx) / n;
      if (pts.some((p) => p.metal !== 'Na')) return true;
      if (Math.abs(h / 6.62607015e-34 - 1) > 0.03) return 'preset h = ' + h; if (Math.abs(-b - 2.28) > 0.03) return 'preset φ = ' + -b;
      return true; })()` },
  ],
  steps: [
    { name: 'Every preset, every metal and mercury line, wavelength to the extremes, voltage to the extremes, Record V₀ many times, Clear', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      for (const b of document.querySelectorAll('#presets button')) { b.click(); await pause(100); }
      for (const m of document.querySelectorAll('#metals button')) { m.click(); for (const l of ['100', '800', '365', '577']) { set('lam', l); set('volt', '-6'); document.getElementById('record').click(); set('volt', '0.01'); document.getElementById('record').click(); await pause(40); } }
      for (const b of document.querySelectorAll('#hg button')) { b.click(); set('volt', '-1'); document.getElementById('record').click(); await pause(40); }
      set('pow', '0'); document.getElementById('record').click(); await pause(100); set('pow', '100'); await pause(300);
      document.getElementById('clear').click(); await pause(100);
      document.querySelector('#presets [data-p=planck]').click(); await pause(200);
    })()` },
    { name: 'Run light, flip the collector voltage across zero fast, change metal in flight', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#presets [data-p=red]').click(); set('lam', '300'); set('pow', '100');
      for (let i = 0; i < 12; i++) { set('volt', i % 2 ? '-6' : '4'); await pause(120); document.querySelectorAll('#metals button')[i % 7].click(); }
      await pause(400);
    })()` },
  ],
};
