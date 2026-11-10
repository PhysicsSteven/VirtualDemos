/* Known values for the break-it test (tools/breakit.cjs), speed-of-light. Hook: window.__sol (S, shiftMM, spotTrue, fits, ...).
   Foucault's rotating mirror: the flight time is 2D/c (c = 299 792 458 m/s), the mirror turns Δθ = ωΔt, and with the focus condition
   1/f2 = 1/A + 1/(D + B) the image shifts by Δs′ = 4AD²ω/(c(D + B)); the shift is odd in the direction, zero at rest and linear in
   the speed; the readouts show those values (Blind hides them); the focus readout is the focus condition; A stays inside the
   sliders' range at every D and B; the speed meter reads the motor to its jitter; with the simulated table of the Measure preset the
   fitted slope is the true one and c comes out within 5 % of the accepted value. */
const rd = `const X = window.__sol; if (!X) return true; const S = X.S, C = 299792458, F2 = 0.252;
  const txt = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-');
  const near = (got, want, tol) => Math.abs(got - want) <= tol * Math.max(Math.abs(want), 1e-12);
  const dd = (name) => { for (const d of document.querySelectorAll('#truth > div')) { const t = d.querySelector('dt'); if (t && t.textContent.trim().startsWith(name)) return d.querySelector('dd').textContent.replace(/\\u2212/g, '-'); } return null; };
`;
module.exports = {
  checks: [
    { name: "image shift: Δs′ = 4AD²ω/(c(D + B)) in focus; odd in direction; zero at rest; linear in the speed", fn: `(() => { ${rd}
      const w = 2 * Math.PI * S.dir * S.revs, af = 1 / (1 / F2 - 1 / (S.D + S.B));
      if (!(S.D >= 3 && S.D <= 20 && S.B >= 0.3 && S.B <= 0.9)) return 'D = ' + S.D + ', B = ' + S.B + ' outside the sliders';
      if (!(S.A >= 0.23 && S.A <= 0.29)) return 'A = ' + S.A + ' outside the slider range';
      if (!isFinite(X.shiftMM())) return 'shift is ' + X.shiftMM();
      if (Math.abs(S.A - af) < 1e-9) { const want = 4 * S.A * S.D * S.D * w / (C * (S.D + S.B)) * 1e3;
        if (!near(X.shiftMM(), want, 1e-9) && Math.abs(X.shiftMM() - want) > 1e-12) return 'shift ' + X.shiftMM() + ' mm, formula ' + want; }
      if (S.revs === 0 && X.shiftMM() !== 0) return 'at rest the shift is ' + X.shiftMM();
      if (!near(X.shiftMM(-500), -X.shiftMM(500), 1e-12)) return 'shift is not odd in the direction';
      if (!near(X.shiftMM(1000), 2 * X.shiftMM(500), 1e-12)) return 'shift is not linear in the speed';
      if (!near(X.spotTrue(), X.inst.rest + X.shiftMM(), 1e-12)) return 'spot is not rest + shift';
      return true; })()` },
    { name: "readouts: Δt = 2D/c, Δθ = ωΔt, the true shift, and the focus condition for A", fn: `(() => { ${rd}
      if (S.blind) return true;
      const t = 2 * S.D / C, th = 2 * Math.PI * S.revs * t, af = 1 / (1 / F2 - 1 / (S.D + S.B));
      const dtShown = dd('Δt'), thShown = dd('Δθ'), shShown = dd('True image shift');
      if (dtShown === null) return true;
      if (Math.abs(parseFloat(dtShown) - t * 1e9) > 0.0051) return 'Δt shows ' + dtShown + ', 2D/c = ' + t * 1e9 + ' ns';
      if (Math.abs(parseFloat(thShown) - th * 1e6) > 0.51) return 'Δθ shows ' + thShown + ', ωΔt = ' + th * 1e6 + ' µrad';
      if (Math.abs(parseFloat(shShown) - X.shiftMM()) > 5.1e-5) return 'true shift shows ' + shShown + ', model ' + X.shiftMM() + ' mm';
      if (Math.abs(parseFloat(txt('aFocus')) - af) > 5.1e-5) return 'focus readout ' + txt('aFocus') + ', 1/f₂ = 1/A + 1/(D + B) gives ' + af;
      if (Math.abs(parseFloat(txt('l12Out')) - (S.A + 0.048)) > 5.1e-5) return 'L1 to L2 ' + txt('l12Out') + ', A + f₁ = ' + (S.A + 0.048);
      if (Math.abs(parseFloat(txt('aOut')) - S.A) > 5.1e-5 || Math.abs(parseFloat(txt('dOut')) - S.D) > 5.1e-3 || Math.abs(parseFloat(txt('bOut')) - S.B) > 5.1e-4) return 'slider readouts ' + txt('dOut') + ', ' + txt('bOut') + ', ' + txt('aOut');
      return true; })()` },
    { name: "speed meter reads the motor to its jitter (±0.5 % and one count); zero at rest", fn: `(() => { ${rd}
      const m = parseFloat(document.getElementById('tach').firstChild.textContent);
      if (!isFinite(m)) return 'meter shows ' + document.getElementById('tach').firstChild.textContent;
      if (S.revs === 0) return m === 0 ? true : 'meter shows ' + m + ' at rest';
      return Math.abs(m - S.revs) <= Math.max(1, 0.006 * S.revs) ? true : 'meter ' + m + ', motor ' + S.revs; })()` },
    { name: "Measure preset: the fit slope is the true slope, and c is within 5 % of the accepted value", fn: `(() => { ${rd}
      if (S.preset !== 'measure' || S.rows.length !== 7 || S.rows.some((r) => !r.sim)) return true;
      if (S.rows.some((r) => Math.abs(r.D - 12) > 1e-9 || Math.abs(r.B - 0.5) > 1e-9)) return true;
      const F = X.fits(); if (!F.fit) return 'no fit from the simulated table';
      const af = 1 / (1 / F2 - 1 / 12.5), kTrue = 4 * af * 144 * 2 * Math.PI / (C * 12.5) * 1e3 * 1e3;   /* µm per rev/s */
      const kUm = F.fit.k * 1e3; if (!near(kUm, kTrue, 0.03)) return 'slope ' + kUm + ' µm per rev/s, true ' + kTrue;
      if (isFinite(F.c) && !near(F.c, C, 0.05)) return 'c from the table ' + F.c + ', accepted ' + C;
      return true; })()` },
  ],
  steps: [
    { name: 'every preset, both directions, sliders to both ends mid run, slow motion view, replay, then back', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const el = document.getElementById(id); el.value = v; el.dispatchEvent(new Event('input', { bubbles: true })); };
      for (const p of ['rest', 'spin', 'slow', 'cwccw', 'long', 'measure']) {
        document.querySelector('#presets [data-p=' + p + ']').click(); await pause(150);
        for (const id of ['speed', 'dD', 'dB', 'dA']) { const el = document.getElementById(id); for (const v of [el.max, el.min]) { set(id, v); await pause(60); } }
        document.getElementById('dCCW').click(); await pause(60); document.getElementById('dCW').click();
        document.getElementById('capture').click(); await pause(60); }
      document.getElementById('vSlow').click(); await pause(300); set('speed', 1); await pause(200); set('speed', 0); await pause(200); set('speed', 1000);
      set('dD', 3); await pause(200); set('dD', 20); await pause(200); document.getElementById('replay').click(); await pause(300);
      document.getElementById('vNormal').click();
      document.querySelector('#presets [data-p=spin]').click(); await pause(200);
    })()` },
    { name: 'odd readings table: edit cells to junk and negatives, delete rows, enter D B A as zero or text, capture at another bench', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const el = document.getElementById(id); el.value = v; el.dispatchEvent(new Event('change', { bubbles: true })); };
      document.querySelector('#presets [data-p=measure]').click(); await pause(150);
      for (const v of ['abc', '-1', '0', '1e9', '']) for (const id of ['eD', 'eB', 'eA']) { set(id, v); await pause(20); }
      for (const inp of [...document.querySelectorAll('#tbl input')].slice(0, 6)) { inp.value = 'x'; inp.dispatchEvent(new Event('change', { bubbles: true })); }
      for (let i = 0; i < 4; i++) { const b = document.querySelector('#tbl button[data-del]'); if (b) b.click(); }
      document.getElementById('capture').click(); document.getElementById('capture').click(); await pause(100);
      for (const id of ['eD', 'eB', 'eA']) set(id, '1');
      document.getElementById('clearTab').click(); await pause(100);
      document.querySelector('#presets [data-p=spin]').click(); await pause(150);
    })()` },
  ],
};
