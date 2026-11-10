/* Known values for the break-it test (tools/breakit.cjs), wave-power. No page hook: everything is read from the readouts and the
   sliders, and checked against formulas written here. T = mg with g = 9.81 and the 50 g hanger; v = √(T/μ) (strings A, B, C are
   0.40, 1.20 and 3.60 g/m); λ = v/f; waves in L = Lf/v; predicted P = ½ μ A² ω² v; energy per meter ½ μ A² ω² = P/v;
   matched: the power meter reads exactly P and the largest slope is kA; mismatched: the meter reads
   P (1 − r²)/(1 + 2r cos 2kL + r²) with r = ±0.5 for Too soft and Too stiff (energy in = energy absorbed); the pulse readouts are
   v/f long and carry ½π²ZA²f; the presets match their hints (200 g, 20 Hz; 50 g only; pulse 0.40 m). */
const pre = `const out = document.getElementById('out'); if (!out) return true;
  const row = (label) => { for (const d of out.querySelectorAll('dt')) if (d.textContent.startsWith(label)) return d.nextElementSibling.textContent.replace(/\\u2212/g, '-'); return null; };
  const num = (t) => (t == null ? NaN : parseFloat(t)), hidden = (t) => t == null || /hidden/.test(t);
  const on = (id) => { const b = document.querySelector('#' + id + ' [aria-pressed=true]'); return b ? (b.dataset.s || b.dataset.a || b.dataset.p) : null; };
  const near = (g, w, tol) => Math.abs(g - w) <= tol * Math.abs(w);
  const G = 9.81, MU = { A: 0.40e-3, B: 1.20e-3, C: 3.60e-3 };
  const str = on('strings'), ab = on('absorber'), f = +document.getElementById('sF').value, A = +document.getElementById('sA').value / 1000, L = +document.getElementById('sL').value;
  const m = num(row('Hanging mass')) / 1000, T = m * G, w = 2 * Math.PI * f;
`;
module.exports = {
  checks: [
    { name: "T = mg, v = √(T/μ), λ = v/f, waves in L, predicted P and energy per meter", fn: `(() => { ${pre}
      if (!(m >= 0.05)) return 'hanging mass ' + row('Hanging mass');
      if (Math.abs(num(row('Tension')) - T) > 6e-5) return 'T shows ' + row('Tension') + ', mg = ' + T;
      if (Math.abs(num(row('Driver frequency')) - f) > 0.051 || Math.abs(num(row('Vibrator amplitude')) - A * 1000) > 0.0051) return 'f or A readout differs from the sliders: ' + row('Driver frequency') + ', ' + row('Vibrator amplitude') + ' vs ' + f + ', ' + A * 1000;
      const mu = MU[str]; if (!mu) return true;
      const v = Math.sqrt(T / mu), P = 0.5 * mu * A * A * w * w * v;
      if (!hidden(row('Linear density')) && Math.abs(num(row('Linear density')) - mu * 1000) > 0.0051) return 'μ shows ' + row('Linear density');
      if (!hidden(row('Wave speed')) && Math.abs(num(row('Wave speed')) - v) > 0.0051) return 'v shows ' + row('Wave speed') + ', √(T/μ) = ' + v;
      if (!hidden(row('Wavelength')) && Math.abs(num(row('Wavelength')) - v / f) > 0.00051) return 'λ shows ' + row('Wavelength') + ', v/f = ' + v / f;
      if (!hidden(row('Waves that fit')) && Math.abs(num(row('Waves that fit')) - L * f / v) > 0.0051) return 'waves in L show ' + row('Waves that fit') + ', Lf/v = ' + L * f / v;
      if (!hidden(row('Predicted P')) && !near(num(row('Predicted P')), P * 1000, 1.2e-3)) return 'predicted P shows ' + row('Predicted P') + ', ½μA²ω²v = ' + P * 1000 + ' mW';
      if (!hidden(row('Average energy')) && !near(num(row('Average energy')), P / v * 1000, 1.2e-3)) return 'energy per meter shows ' + row('Average energy') + ', P/v = ' + P / v * 1000 + ' mJ/m';
      return true; })()` },
    { name: "power meter: matched reads exactly P; mismatched reads P(1 − r²)/(1 + 2r cos 2kL + r²)", fn: `(() => { ${pre}
      const mu = MU[str]; if (!mu || !(m >= 0.05)) return true;
      const mt = row('Power meter'); if (/stopped/.test(mt) || !/mW/.test(mt)) return true;
      const v = Math.sqrt(T / mu), P = 0.5 * mu * A * A * w * w * v * 1000, k = w / v, r = { matched: 0, soft: 0.5, stiff: -0.5 }[ab];
      if (r === undefined) return true;
      const want = P * (1 - r * r) / (1 + 2 * r * Math.cos(2 * k * L) + r * r);
      if (!near(num(mt), want, 1.2e-3 + 1e-9)) return ab + ': meter shows ' + mt + ', expected ' + want + ' mW (P = ' + P + ')';
      const bk = row('Part of each wave'); if (ab === 'matched' ? bk !== 'none' : bk !== 'amplitude 0.50, power 0.25') return 'sent back: "' + bk + '" for ' + ab;
      return true; })()` },
    { name: "largest slope: kA when matched; one pulse is v/f long and carries ½π²ZA²f", fn: `(() => { ${pre}
      const mu = MU[str]; if (!mu || !(m >= 0.05)) return true;
      const v = Math.sqrt(T / mu), ks = row('Largest slope');
      if (ab === 'matched' && Math.abs(num(ks) - w / v * A) > 0.00051) return 'largest slope shows ' + ks + ', kA = ' + w / v * A;
      const pl = row('Pulse length'); if (pl !== null) {
        if (!hidden(pl) && Math.abs(num(pl) - v / f) > 0.00051) return 'pulse length ' + pl + ', v/f = ' + v / f;
        const e = row('Energy in the pulse'); if (!hidden(e) && !near(num(e), 0.5 * Math.PI ** 2 * Math.sqrt(T * mu) * A * A * f * 1e6, 5e-3)) return 'pulse energy ' + e + ', ½π²ZA²f = ' + 0.5 * Math.PI ** 2 * Math.sqrt(T * mu) * A * A * f * 1e6 + ' µJ';
        const rt = row('One pulse'), r = { matched: 'r = 0: nothing comes back', soft: 'r = +0.50: comes back upright, 0.50 as tall', stiff: 'r = −0.50: comes back upside down, 0.50 as tall'.replace('−', '-'), free: 'r = +1.00: comes back upright', fixed: 'r = -1.00: comes back upside down' }[ab];
        if (rt !== r) return 'pulse end reads "' + rt + '" for ' + ab + ', expected "' + r + '"';
      }
      return true; })()` },
  ],
  steps: [
    { name: 'preset hints: amp 200 g at 20 Hz, tension 50 g only, pulse 0.40 m long and half as tall from soft and stiff ends', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      const rd = (label) => { for (const d of $('out').querySelectorAll('dt')) if (d.textContent.startsWith(label)) return d.nextElementSibling.textContent; return ''; };
      const go = async (p) => { document.querySelector('#presets [data-p=' + p + ']').click(); await pause(150); };
      await go('amp'); if (rd('Hanging mass') !== '200 g' || rd('Driver frequency') !== '20.0 Hz') throw new Error('amp preset: ' + rd('Hanging mass') + ', ' + rd('Driver frequency') + ' (hint: 200 g, 20 Hz)');
      await go('tension'); if (rd('Hanging mass') !== '50 g') throw new Error('tension preset: ' + rd('Hanging mass') + ' (hint: only the 50 g hanger)');
      await go('pulse'); if (rd('Pulse length') !== '0.404 m') throw new Error('pulse preset length ' + rd('Pulse length') + ' (hint: 0.40 m)');
      for (const a of ['soft', 'stiff', 'free', 'fixed', 'matched']) { document.querySelector('#absorber [data-a=' + a + ']').click(); await pause(120); }
      $('pulse').click(); await pause(500); $('pulse').click(); await pause(100);
      await go('amp');
    })()` },
    { name: 'run the vibrator, then mismatched absorber with L, f and A swept through resonance, pulse started mid run', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      const set = (id, v) => { $(id).value = v; $(id).dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#presets [data-p=mismatch]').click(); await pause(100);
      if ($('play').textContent.startsWith('Start')) $('play').click(); await pause(300);
      for (const L of ['0.5', '0.93', '1.2', '2']) { set('sL', L); await pause(120); }
      for (const f of ['5', '37.3', '100']) { set('sF', f); await pause(120); }
      for (const A of ['0.1', '5']) { set('sA', A); await pause(120); }
      document.querySelector('#absorber [data-a=stiff]').click(); await pause(120); $('pulse').click(); await pause(300);
      document.querySelector('#presets [data-p=amp]').click(); await pause(200); if ($('play').textContent.startsWith('Stop')) $('play').click(); await pause(100);
    })()` },
  ],
};
