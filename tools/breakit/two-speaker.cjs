/* Known values for the break-it test (tools/breakit.cjs), two-speaker. Hook: window.__ts (S, pressure, pressureN, level, ...).
   One speaker alone gives 80 dB at 1 m (and 80 - 20 log10 r anywhere, so the meter agrees with that when speaker 2 is off); the
   speed of sound is 343.2 m/s at 20 C (331.3 sqrt(1 + t/273.15)); the tape and meter readouts equal the geometry and physics
   of the live state (r1, r2, level to 0.1 dB, λ = v/f); in phase the level at r1 = r2 is 6.02 dB above one speaker's, wired
   backwards it is silent there; the path difference r2 - r1 along the walk line matches yForPathDiff; the Sandbox's pressureN
   with the two speakers at (0, ±d/2) equals pressure(); the microphone stays on the floor; the mystery frequency is 100 to 2000 Hz;
   the preset hints' numbers (λ = 0.500 m at 686 Hz and 20 C, 1.00 m and 0.40 m apart) match. */
const pre = `const T = window.__ts; if (!T) return true;
  const S = T.S, near = (g, w, t) => Math.abs(g - w) <= t * Math.max(Math.abs(w), 1e-300), f = T.fNow(), num = (s) => parseFloat(String(s).replace(/\\u2212/g, '-'));
  const tape = (re) => { const d = [...document.querySelectorAll('#tape dt')].find((x) => re.test(x.textContent.trim())); return d ? d.nextElementSibling.textContent.trim() : null; };
`;
module.exports = {
  checks: [
    { name: "one speaker gives 80 dB at 1 m and 80 - 20 log10 r; v = 343.2 m/s at 20 C", fn: `(() => { ${pre}
      /* speaker 1 sits at (0, d/2): a point at (x, d/2) is exactly x from it */
      for (const d of [0.1, 1, 3]) for (const x of [0.5, 1, 4]) { const got = T.level(T.pressure(x, d / 2, f, d, S.tC, 0, false)), want = 80 - 20 * Math.log10(x); if (Math.abs(got - want) > 1e-9) return 'one speaker at ' + x + ' m: ' + got + ' dB, want ' + want; }
      if (Math.abs(T.soundSpeed(20) - 343.2) > 0.05) return 'speed of sound at 20 C is ' + T.soundSpeed(20);
      if (!near(T.soundSpeed(S.tC), 331.3 * Math.sqrt(1 + S.tC / 273.15), 1e-12)) return 'speed of sound formula';
      return true; })()` },
    { name: "tape and meter readouts equal the geometry and physics", fn: `(() => { ${pre}
      if (S.sand) return true;
      const r1 = Math.hypot(S.mx, S.my - S.d / 2), r2 = Math.hypot(S.mx, S.my + S.d / 2);
      if (Math.abs(num(tape(/^r₁/)) - r1) > 0.00051) return 'r1 shows ' + tape(/^r₁/) + ', geometry ' + r1;
      if (Math.abs(num(tape(/^r₂/)) - r2) > 0.00051) return 'r2 shows ' + tape(/^r₂/) + ', geometry ' + r2;
      const lv = document.getElementById('oLevel').textContent.trim(), L = T.level(T.P(S.mx, S.my));
      if (L < -100) { if (lv !== 'silent') return 'level shows ' + lv + ' where the pressure cancels'; } else if (Math.abs(num(lv) - L) > 0.0501) return 'level shows ' + lv + ', physics ' + L;
      if (!S.on2) { const w = 80 - 20 * Math.log10(r1); if (Math.abs(L - w) > 1e-9) return 'speaker 2 off: level ' + L + ', one speaker gives ' + w; }
      if (!S.blind && !S.mystery) { const l = num(tape(/^wavelength/)); if (Math.abs(l - T.soundSpeed(S.tC) / S.f) > 0.00051) return 'λ shows ' + l + ', v/f = ' + T.soundSpeed(S.tC) / S.f; }
      if (!(S.mx > 0 && S.mx < 10 && Math.abs(S.my) < 4)) return 'the microphone left the floor: ' + S.mx + ', ' + S.my;
      return true; })()` },
    { name: "in phase: r1 = r2 is +6.02 dB over one speaker; wired backwards: silent; walk line hyperbola r2 - r1", fn: `(() => { ${pre}
      for (const [x, d] of [[2, 0.4], [4, 1], [7, 3]]) {
        const one = T.level(T.pressure(x, 0, f, d, S.tC, 0, false)), two = T.level(T.pressure(x, 0, f, d, S.tC, 0, true)), bk = T.level(T.pressure(x, 0, f, d, S.tC, Math.PI, true));
        if (Math.abs(two - one - 20 * Math.log10(2)) > 1e-9) return 'in phase on the axis: ' + (two - one) + ' dB over one speaker, want 6.0206';
        if (bk > -100) return 'wired backwards on the axis: ' + bk + ' dB, want silent'; }
      const d = Math.min(S.d, 3), lam = T.soundSpeed(S.tC) / f;
      for (const m of [0, 1, -1, 2]) { const D = (m + 0.5) * lam; if (Math.abs(D) >= d) continue; const y = T.yForPathDiff(S.X, d, D), r = [Math.hypot(S.X, y + d / 2), Math.hypot(S.X, y - d / 2)];
        if (Math.abs(r[0] - r[1] - D) > 1e-9) return 'yForPathDiff gives r2 - r1 = ' + (r[0] - r[1]) + ', want ' + D; }
      return true; })()` },
    { name: "Sandbox pressureN equals pressure() for two speakers at (0, ±d/2); mystery frequency in range; hint numbers", fn: `(() => { ${pre}
      for (const [x, y, d, ph] of [[3, 0.7, 1, 0], [5, -2, 0.4, Math.PI], [1, 1, 2.5, 0]]) { const a = T.pressure(x, y, f, d, S.tC, ph, true), b = T.pressureN(x, y, f, S.tC, [{ x: 0, y: d / 2, ph: 0 }, { x: 0, y: -d / 2, ph }]);
        if (Math.abs(a.re - b.re) > 1e-9 || Math.abs(a.im - b.im) > 1e-9) return 'pressureN differs from pressure at ' + x + ', ' + y; }
      if (S.mystery && !(S.mystery >= 100 && S.mystery <= 2000 && isFinite(S.mystery))) return 'mystery frequency ' + S.mystery;
      if (!isFinite(S.f) || S.f < 100 || S.f > 2000) return 'f = ' + S.f + ' outside 100 to 2000 Hz';
      const P = T.PRESETS; if (P.basic.f !== 686 || P.basic.d !== 1 || P.close.d !== 0.4 || P.close.f !== 686) return 'preset values changed';
      if (Math.abs(T.wavelength(686, 20) - 0.5) > 0.0005) return 'λ at 686 Hz and 20 C is ' + T.wavelength(686, 20) + ', the hint says 0.500 m';
      return true; })()` },
  ],
  steps: [
    { name: 'every preset: walk the microphone to the end, speaker 2 off and back, d and T to their limits, mic dragged to a corner, sandbox rigs', fn: `(async () => {
      const p = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      for (const k of ['basic', 'close', 'reverse', 'speed', 'mystery']) { document.querySelector('#presets [data-p=' + k + ']').click(); await p(150); document.getElementById('walk').click(); await p(500); document.getElementById('walk').click(); }
      document.querySelector('#presets [data-p=basic]').click(); const sp = document.getElementById('spk2'); sp.click(); await p(150); sp.click();
      for (const id of ['sD', 'sT', 'sX', 'sF']) { const e = document.getElementById(id); for (const v of [e.min, e.max]) { set(id, v); await p(120); } }
      const c = document.getElementById('can'), r = c.getBoundingClientRect();
      for (const [x, y] of [[2, 2], [r.width - 2, 2], [r.width - 2, r.height - 2], [2, r.height - 2]]) c.dispatchEvent(new MouseEvent('click', { clientX: r.left + x, clientY: r.top + y, bubbles: true })); await p(150);
      document.querySelector('#presets [data-p=sandbox]').click(); await p(200);
      for (const b of document.querySelectorAll('#sbsRigs button')) { b.click(); await p(200); }
      document.querySelector('#presets [data-p=basic]').click(); await p(200);
    })()` },
  ],
};
