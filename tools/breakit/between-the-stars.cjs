/* Known values for the break-it test (tools/breakit.cjs), between-the-stars. Hook: window.__bt (S, applyPreset, letThrough, ...).
   Checked at every probe: in Dust the "Visible light let through" readout is 10^(−0.4 A_V), the 1/10 setup gives exactly 10% and a
   distance √10 = 3.16 times too big; blue is always let through less than red. In Nebulae the ionized radius is the Strömgren
   radius of the star's photons and the verdict follows it. In 21 cm the flips counted stay finite and the measured frequency is
   f₀/(1 + v/c). */
const base = `const X = window.__bt; if (!X || !X.S) return true; const S = X.S, near = (g, w, t) => Math.abs(g - w) <= t * Math.abs(w);
  const row = (re) => { const d = [...document.querySelectorAll('#out div')].find((x) => re.test(x.querySelector('dt').textContent)); return d ? d.querySelector('dd').textContent : null; };`;
module.exports = {
  checks: [
    { name: 'dust: let through = 10^(−0.4 A_V), 1/10 gives 3.16, blue below red', fn: `(() => { ${base}
      if (S.mode !== 'dust') return true;
      const AV = X.AVdust(), f = X.letThrough(X.LAM_V, AV, S.law);
      if (!near(f, Math.pow(10, -0.4 * AV), 1e-12)) return 'let through ' + f + ' for A_V ' + AV;
      if (!(X.letThrough(440, AV, S.law) <= X.letThrough(700, AV, S.law))) return 'blue let through more than red';
      if (S.preset === 'tenth' && S.u === 0) { if (!near(AV, 2.5, 1e-9)) return '1/10 setup A_V ' + AV; const t = row(/^Ignore the dust/); if (t && !S.blind && !/3\\.16/.test(t)) return 'distance error shows ' + t; }
      return true; })()` },
    { name: 'nebulae: the ionized radius is the Strömgren radius and the verdict follows it', fn: `(() => { ${base}
      if (S.mode !== 'neb') return true;
      if (!S.on) return X.nebKind() === 'dark' ? true : 'no star but ' + X.nebKind();
      const rs = X.stromgren(X.qIon(S.Tn, S.R * 6.957e8), S.nn) / X.LY;
      if (!near(X.nebRS(), rs, 1e-12)) return 'R_S ' + X.nebRS() + ' vs ' + rs;
      const k = X.nebKind(), q = rs / S.Rc, want = q >= 0.5 ? 'emission' : q >= 0.1 ? 'both' : 'reflection';
      return k === want ? true : 'verdict ' + k + ' for R_S/R_c ' + q; })()` },
    { name: '21 cm: finite counts, f = f₀/(1 + v/c)', fn: `(() => { ${base}
      if (S.mode !== 'hi') return true;
      if (!isFinite(S.flips) || S.flips < 0) return 'flips ' + S.flips;
      if (!near(X.fObs(S.v * 1000), X.FHI / (1 + S.v * 1000 / 299792458), 1e-15)) return 'Doppler';
      return true; })()` },
  ],
  steps: [
    { name: 'every mode and setup, each run a while, extremes, then back', fn: `(async () => {
      const X = window.__bt, pause = (ms) => new Promise((r) => setTimeout(r, ms)); if (!X) return;
      for (const k of ['lane', 'tenth', 'hundredth', 'center', 'sunset', 'hot', 'cool', 'dark', 'sunlike', 'one', 'many', 'away', 'warm', 'galaxy']) { X.applyPreset(k); await pause(150); document.getElementById('play').click(); await pause(900); document.getElementById('play').click(); }
      X.applyPreset('lane');
    })()` },
  ],
};
