/* Known values for the break-it test (tools/breakit.cjs), timbre. Hook: window.__tb (S, D, f1, fOf, presetId, setSemi, applyPreset, ...).
   From the live state: f1 = 440 · 2^(semi/12) and partial 1 stays at f1 for any stiffness; the RMS the demo keeps equals the numeric
   RMS of the sum of sines (Parseval); the peak it keeps equals the numeric peak of the waveform (periodic, no stiffness or detune);
   the output gain keeps the sound under the cited limits (RMS target 0.08, peak 0.25 at full volume); a waveform with only harmonics
   of g f1 repeats every 1/(g f1); the square, sawtooth and triangle presets hold aₙ = 1/n (odd for the square), 1/n, 1/n² (odd)
   with the cited signs; the period readout is 1/f1. */
const pre = `const T = window.__tb; if (!T || !T.D || !T.S) return true;
  const S = T.S, D = T.D, TAU = 2 * Math.PI, NH = 16;
  const wave = (th, a, ph) => { let s = 0; for (let n = 1; n <= NH; n++) if (a[n]) s += a[n] * Math.sin(n * th + ph[n]); return s; };
  const eff = [0]; for (let n = 1; n <= NH; n++) eff.push(((n === 1 && S.mute1) || (n === 2 && S.mute2)) ? 0 : S.a[n]);
  const plain = S.B === 0 && !(S.df && eff[S.detN] > 1e-9);
`;
module.exports = {
  checks: [
    { name: "f1 = 440 · 2^(semi/12); partial 1 sits at f1 for any stiffness B", fn: `(() => { ${pre}
      const f = 440 * Math.pow(2, S.semi / 12); if (Math.abs(T.f1() - f) > 1e-9 * f) return 'f1 ' + T.f1() + ', ' + f;
      if (!isFinite(f) || !(f > 0)) return 'f1 = ' + f;
      if (S.detN !== 1 || !S.df) if (Math.abs(T.fOf(1) - f) > 1e-9 * f) return 'partial 1 at ' + T.fOf(1) + ', f1 = ' + f;
      for (let n = 2; n <= NH; n++) if (S.B >= 0 && T.fOf(n) < (n === S.detN ? 0 : (n - 0.5) * f) - 1e-9) return 'partial ' + n + ' at ' + T.fOf(n);
      return true; })()` },
    { name: "state is finite and the derived values follow it (effective amplitudes, RMS by Parseval)", fn: `(() => { ${pre}
      for (let n = 1; n <= NH; n++) { if (!isFinite(S.a[n]) || !isFinite(S.ph[n]) || S.a[n] < 0) return 'a' + n + ' = ' + S.a[n] + ', phase ' + S.ph[n]; if (D.a[n] !== eff[n]) return 'D.a[' + n + '] = ' + D.a[n] + ', state ' + eff[n]; }
      let s = 0; for (let n = 1; n <= NH; n++) s += eff[n] * eff[n] / 2;
      if (Math.abs(D.rms - Math.sqrt(s)) > 1e-12) return 'rms ' + D.rms + ' vs ' + Math.sqrt(s);
      if (!plain) return true;
      let q = 0, M = 20000; for (let i = 0; i < M; i++) { const y = wave((i + 0.5) / M * TAU, eff, S.ph); q += y * y; }
      const num = Math.sqrt(q / M); return Math.abs(num - D.rms) <= 1e-6 * Math.max(num, 1e-9) + 1e-12 ? true : 'numeric RMS ' + num + ', Parseval ' + D.rms; })()` },
    { name: "peak equals the numeric maximum of the waveform; peak ≥ RMS; the audio gain respects RMS 0.08 and peak 0.25", fn: `(() => { ${pre}
      if (!isFinite(D.peak) || !isFinite(D.norm) || D.norm < 0) return 'peak ' + D.peak + ', norm ' + D.norm;
      if (plain && D.info.kind === 'periodic') { let p = 0, M = 40000; for (let i = 0; i < M; i++) p = Math.max(p, Math.abs(wave(i / M * TAU, eff, S.ph)));
        if (p > D.peak * 1.001 + 1e-9 || D.peak > p * 1.001 + 1e-9) return 'numeric peak ' + p + ', D.peak ' + D.peak; }
      if (D.rms > 0) { if (D.norm * D.rms > 0.08 + 1e-9) return 'RMS after gain ' + D.norm * D.rms; if (D.norm * D.peakBound > 0.25 + 1e-9) return 'peak bound after gain ' + D.norm * D.peakBound; if (D.peakBound < D.peak * 0.999) return 'peak bound ' + D.peakBound + ' below the peak ' + D.peak; }
      else if (D.norm !== 0) return 'silent but gain ' + D.norm;
      return true; })()` },
    { name: "a waveform of harmonics of g f1 repeats after 2π/g; the period info agrees", fn: `(() => { ${pre}
      if (!plain || D.info.kind !== 'periodic' || !D.info.g || D.ns.length < 1) return true;
      const g = D.info.g; for (const n of D.ns) if (n % g) return 'harmonic ' + n + ' is not a multiple of g = ' + g;
      for (const th of [0.37, 1.9, 4.4]) { const d = Math.abs(wave(th, eff, S.ph) - wave(th + TAU / g, eff, S.ph)); if (d > 1e-9 * (1 + D.peak)) return 'wave(θ) != wave(θ + 2π/' + g + ') at ' + th + ': ' + d; }
      if (Math.abs(D.info.T * D.info.f - 1) > 1e-12) return 'T f != 1'; if (Math.abs(D.info.f - g * T.f1()) > 1e-9 * D.info.f) return 'repeat rate ' + D.info.f + ' != g f1';
      return true; })()` },
    { name: "square, sawtooth and triangle presets: a = 1/n (odd), 1/n, ±1/n² (odd) with the right signs", fn: `(() => { ${pre}
      const id = T.presetId; if (!['square', 'saw', 'triangle'].includes(id)) return true;
            /* only while the preset is still untouched: the amplitudes are exactly those of the series */
      for (let n = 1; n <= NH; n++) { const want = id === 'square' ? (n % 2 ? 1 / n : 0) : id === 'saw' ? 1 / n : (n % 2 ? 1 / (n * n) : 0);
        if (Math.abs(S.a[n] - want) > 1e-9) return true; }
      for (let n = 1; n <= NH; n++) { if (!S.a[n]) continue; const wantPh = id === 'triangle' && n % 4 === 3 ? Math.PI : 0; const d = Math.abs(((S.ph[n] - wantPh + 3 * Math.PI) % TAU) - Math.PI); if (d > 1e-9) return id + ': phase ' + n + ' is ' + S.ph[n]; }
      /* the sum of sines tracks the closed form of the series (square, saw: pointwise away from the jump; triangle everywhere) */
      const th = 1.234, cf = id === 'square' ? Math.PI / 4 : id === 'saw' ? (Math.PI - th) / 2 : Math.PI / 4 * th; let tr = 0; for (let n = 1; n <= NH; n++) tr += S.a[n] * Math.sin(n * th + S.ph[n]);
      return Math.abs(tr - cf) < (id === 'triangle' ? 5e-3 : 0.3) ? true : id + ': series gives ' + tr + ', closed form ' + cf; })()` },
    { name: "Period T₁ readout = 1/f1 (when it shows a number)", fn: `(() => { ${pre}
      const el = document.getElementById('rT1'); if (!el || el.offsetParent === null) return true;
      const m = el.textContent.replace(/\\u2212/g, '-').match(/^([\\d.]+)\\s*(ms|µs|s)/); if (!m) return true;
      const t = +m[1] * { ms: 1e-3, 'µs': 1e-6, s: 1 }[m[2]], want = 1 / T.f1(), digits = m[1].replace('.', '').replace(/^0+/, '').length;
      return Math.abs(t - want) <= 0.6 * want * Math.pow(10, 1 - digits) + 1e-12 ? true : 'T₁ shows ' + el.textContent + ', 1/f1 = ' + want; })()` },
  ],
  steps: [
    { name: 'every preset, then stiffness and detune to the limits with harmonic 1 and 2 muted, then back', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), T = window.__tb;
      for (const b of document.querySelectorAll('#presets button')) { b.click(); await pause(120); }
      for (const id of ['B', 'df', 'detN', 'semi', 'f1']) { const e = document.getElementById(id); if (!e || e.type !== 'range') continue; for (const v of [e.max, e.min, e.max, e.min, e.value]) { e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); await pause(80); } }
      T.S.mute1 = true; T.S.mute2 = true; T.recompute(); await pause(150); T.S.mute1 = false; T.S.mute2 = false; T.recompute(); await pause(150);
    })()` },
    { name: 'packet and vowel presets: widen and narrow every slider, then back to square', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      for (const p of ['packet', 'clarinet', 'flute', 'square']) { const b = document.querySelector('#presets [data-p=' + p + ']'); if (b) { b.click(); await pause(200);
        for (const e of document.querySelectorAll('input[type=range]')) { if (e.offsetParent === null) continue; const v = e.value; for (const x of [e.min, e.max]) { e.value = x; e.dispatchEvent(new Event('input', { bubbles: true })); await pause(30); } e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); } } }
    })()` },
  ],
};
