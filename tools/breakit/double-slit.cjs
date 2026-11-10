/* Known values for the break-it test (tools/breakit.cjs), double-slit. Hook: window.__ds (S, pat, pred, hits, ...).
   The wavelength readout equals h/p of the live source (photon, relativistic electron, C60 at m = 720 u); the momentum readout is
   h/λ; fringe spacing λL/d, envelope zero (sin θ = λ/a) and the number of bright fringes 2d/a − 1 equal the live settings; with both
   slits open the pattern at the center is exactly four times one slit's (equal amplitudes, no phase difference); every hit lies on
   the screen and is finite; the presets give the cited numbers (laser 2.6 mm fringes, nine bright, envelope 13 mm; 50 kV
   electrons 5.36 pm; C60 at 220 m/s 2.5 pm). */
const pre = `const D = window.__ds; if (!D || !D.pat || !D.pred) return true;
  const S = D.S, H = 6.62607015e-34, QE = 1.602176634e-19, ME = 9.1093837139e-31, C = 299792458, U = 1.66053906892e-27;
  const rd = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-');
  const lamOf = () => { if (S.kind === 'photon') return S.src * 1e-9;
    if (S.kind === 'electron') { const K = QE * Math.pow(10, S.src); return H / Math.sqrt(2 * ME * K * (1 + K / (2 * ME * C * C))); }
    return H / (720 * U * S.src); };
  const PF = { m: 1, mm: 1e-3, 'µm': 1e-6, nm: 1e-9, pm: 1e-12 };
  const len = (t) => { const m = t.match(/^(-?[\\d.]+) (mm|µm|nm|pm|m)/); return m ? parseFloat(m[1]) * PF[m[2]] : NaN; };
  const near = (g, w, tol) => Math.abs(g - w) <= tol * Math.abs(w);
`;
module.exports = {
  checks: [
    { name: "wavelength and momentum readouts equal h/p of the live source", fn: `(() => { ${pre}
      if (S.blind) return true;
      const lam = lamOf(); if (!(lam > 0)) return 'wavelength ' + lam;
      if (S.kind === 'photon') { if (Math.abs(parseFloat(rd('rLam')) - S.src) > 0.5) return 'rLam shows ' + rd('rLam'); }
      else if (!near(len(rd('rLam')), lam, 6e-3 * (S.kind === 'electron' ? 1 : 1))) return 'rLam shows ' + rd('rLam') + ', physics gives ' + lam;
      const m = rd('rP').match(/^([\\d.]+) × 10(-?\\d+|[⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+)/); if (!m) return 'odd momentum text ' + rd('rP');
      const sup = (s) => /^-?\\d+$/.test(s) ? +s : +s.replace(/⁻/g, '-').replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (c) => '⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c));
      if (!near(parseFloat(m[1]) * Math.pow(10, sup(m[2])), H / lam, 1.2e-3)) return 'p shows ' + rd('rP') + ', h/λ = ' + H / lam;
      return true; })()` },
    { name: "fringe spacing λL/d, envelope zero and bright fringe count follow the settings", fn: `(() => { ${pre}
      if (S.blind || S.meas) return true;
      const lam = lamOf(), dy = lam * S.L / S.d;
      if (!near(D.pred.dy, dy, 1e-12)) return 'pred.dy = ' + D.pred.dy + ', λL/d = ' + dy;
      if (!near(len(rd('rDy')), dy, 6e-3)) return 'Fringe spacing shows ' + rd('rDy') + ', λL/d = ' + dy;
      if (lam / S.a < 1) { const env = S.L * Math.tan(Math.asin(lam / S.a)); if (!near(len(rd('rEnv')), env, 6e-3)) return 'Envelope zero shows ' + rd('rEnv') + ', physics gives ' + env; }
      const nb = 2 * Math.ceil(S.d / S.a - 1e-9) - 1; if (rd('rNb') !== String(nb)) return 'bright fringes show ' + rd('rNb') + ', 2d/a − 1 gives ' + nb;
      return true; })()` },
    { name: "both slits open: the center is exactly four times one slit alone", fn: `(() => { ${pre}
      if (!S.open[0] || !S.open[1]) return true;
      const p = D.pat, j = Math.round(p.M / 2), m = p.y[j]; if (Math.abs(m) > p.h) return true;
      const r = p.I12[j] / p.I1[j]; return Math.abs(r - 4) < 1e-6 && Math.abs(p.I1[j] - p.I2[j]) < 1e-9 * p.I1[j] ? true : 'I12/I1 at y = 0 is ' + r + ' (should be 4)'; })()` },
    { name: "every hit lies on the screen and is finite", fn: `(() => { ${pre}
      const h = D.hits(); const Y = S.Y;
      for (let i = 0; i < Math.min(h.length, 5000); i++) if (!isFinite(h[i]) || Math.abs(h[i]) > Y * (1 + 1e-9)) return 'hit ' + i + ' at y = ' + h[i] + ' with the screen ±' + Y;
      return true; })()` },
    { name: "presets: the cited numbers (2.6 mm fringes, nine bright, 13 mm; 5.36 pm; 2.5 pm)", fn: `(() => { ${pre}
      const P = S.preset; if (!P) return true;
      const same = (a, b, t) => Math.abs(a - b) < t * Math.abs(b);
      if (P === 'laser' && S.kind === 'photon' && S.src === 650 && S.a === 0.05e-3 && S.d === 0.25e-3 && S.L === 1) {
        const dy = lamOf() * S.L / S.d, env = S.L * Math.tan(Math.asin(lamOf() / S.a));
        if (!same(dy, 2.6e-3, 1e-3) || !same(env, 13e-3, 3e-3) || D.pred.nBright !== 9) return 'laser preset: Δy ' + dy + ', envelope ' + env + ', bright ' + D.pred.nBright; }
      if (['electron', 'one', 'which'].includes(P) && S.kind === 'electron' && Math.abs(S.src - Math.log10(50000)) < 1e-12 && !same(lamOf(), 5.36e-12, 1e-3)) return '50 kV λ = ' + lamOf();
      if (P === 'c60' && S.kind === 'c60' && S.src === 220 && !same(lamOf(), 2.5e-12, 1e-2)) return 'C60 λ = ' + lamOf();
      return true; })()` },
  ],
  steps: [
    { name: 'every preset, then extreme electron voltage and slit widths through the page hook, then Fit', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), D = window.__ds;
      for (const b of document.querySelectorAll('#presets button, .presets button')) { b.click(); await pause(150); }
      D.applyPreset('electron'); D.set('src', 1); await pause(150); D.set('src', 5.30103); await pause(150);
      D.set('a', 0.05e-6); D.set('d', 4e-6); await pause(150); D.set('a', 1e-6); D.set('d', 0.2e-6); await pause(150);
      D.fit(); D.commitMany(500); await pause(300); D.applyPreset('laser'); await pause(200);
    })()` },
    { name: 'which slit detector on, close both slits, hit many, then reopen', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), D = window.__ds;
      D.applyPreset('which'); D.commitMany(300); await pause(200);
      for (const id of ['slit1', 'slit2']) { document.getElementById(id).click(); await pause(150); }
      D.commitMany(50); await pause(200);
      for (const id of ['slit1', 'slit2']) { document.getElementById(id).click(); await pause(150); }
      D.applyPreset('c60'); D.commitMany(200); await pause(200); D.applyPreset('electron');
    })()` },
  ],
};
