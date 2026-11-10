/* Known values for the break-it test (tools/breakit.cjs), standing-waves. Hook: window.__sw (S, D, setView, applyPreset, ...).
   Two waves: λ = v/f with v = 2 m/s, node spacing v/(f1 + f2), node drift, the standing and traveling parts of the amplitudes.
   String: v = √(T/μ), f1 = v/2L and the harmonic readout n f1, λn = 2L/n; the plucked string's energy from 200 modes equals the
   triangle's energy; the driven string's steady amplitude equals an independent sum over modes and the damping time is 2Q/ω1.
   Beats: f2 = f1 + Δf and the beat frequency |f1 − f2|. The Harmonics preset is the low E string, f1 = 82.4 Hz. */
const pre = `const W = window.__sw; if (!W) return true;
  const S = W.S, rd = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-'), num = (id) => parseFloat(rd(id));
  const near = (a, b, t) => Math.abs(a - b) <= t * Math.max(Math.abs(b), 1e-12), TAU = 2 * Math.PI, v0 = 2;
`;
module.exports = {
  checks: [
    { name: "two waves: λ = v/f, node spacing v/(f1 + f2), drift speed, standing / traveling parts", fn: `(() => { ${pre}
      const w = S.w; if (![w.f1, w.f2, w.A1, w.A2].every(isFinite) || !(w.f1 > 0 && w.f2 > 0)) return 'wave state ' + JSON.stringify(w);
      if (Math.abs(num('rwL1') - v0 / w.f1) > 0.0051 || Math.abs(num('rwL2') - v0 / w.f2) > 0.0051) return 'λ readouts ' + rd('rwL1') + ', ' + rd('rwL2') + ' for f ' + w.f1 + ', ' + w.f2;
      if (Math.abs(num('rwNode') - v0 / (w.f1 + w.f2)) > 0.0051) return 'node spacing ' + rd('rwNode') + ', v/(f1 + f2) = ' + v0 / (w.f1 + w.f2);
      const dr = v0 * (w.f2 - w.f1) / (w.f1 + w.f2), t = rd('rwDrift');
      if (Math.abs(dr) < 1e-9 ? t !== '0 (fixed)' : Math.abs(num('rwDrift') - Math.abs(dr)) > 0.00051) return 'drift ' + t + ', |v(f2 − f1)/(f1 + f2)| = ' + Math.abs(dr);
      const mn = 2 * Math.min(w.A1, w.A2), df = Math.abs(w.A1 - w.A2), parts = rd('rwParts').split(' / ');
      if (Math.abs(parseFloat(parts[0]) - mn) > 0.0051 || Math.abs(parseFloat(parts[1]) - df) > 0.0051) return 'standing / traveling ' + rd('rwParts') + ', want ' + mn + ' / ' + df;
      return true; })()` },
    { name: "string: v = √(T/μ), f1 = v/2L, harmonic readout n f1 and λ = 2L/n; table agrees; Harmonics preset f1 = 82.4 Hz", fn: `(() => { ${pre}
      const s = S.s, v = Math.sqrt(s.T / (s.mu * 1e-3)), f1 = v / (2 * s.L);
      if (!isFinite(f1) || !(f1 > 0)) return 'f1 = ' + f1;
      if (Math.abs(num('rsV') - v) > 0.0501) return 'v shows ' + rd('rsV') + ', √(T/μ) = ' + v;
      if (Math.abs(num('rsF1') - f1) > 0.0501) return 'f1 shows ' + rd('rsF1') + ', v/2L = ' + f1;
      if (s.mode === 'harm') { const t = rd('rsExtra').match(/^([\\d.]+) Hz, λ = ([\\d.]+) m$/); if (!t) return 'odd harmonic readout ' + rd('rsExtra');
        if (Math.abs(+t[1] - s.n * f1) > 0.0501 || Math.abs(+t[2] - 2 * s.L / s.n) > 0.00051) return 'harmonic ' + s.n + ' shows ' + rd('rsExtra') + ', want ' + (s.n * f1).toFixed(2) + ' Hz, ' + (2 * s.L / s.n).toFixed(3) + ' m'; }
      const rows = document.querySelectorAll('#sTab tr'); for (let n = 1; n < rows.length; n++) { const c = rows[n].children;
        if (Math.abs(parseFloat(c[1].textContent) - n * f1) > 0.0501 || Math.abs(parseFloat(c[2].textContent) - 2 * s.L / n) > 0.00051) return 'table row ' + n + ' shows ' + c[1].textContent + ', ' + c[2].textContent; }
      if (W.S.view === 'string' && s.L === 0.648 && s.T === 70 && s.mu === 6.14 && Math.abs(f1 - 82.4) > 0.05) return 'the low E string should be 82.4 Hz, got ' + f1;
      return true; })()` },
    { name: "plucked string: energy of the 200 modes equals the triangle's energy (conserved)", fn: `(() => { ${pre}
      const s = S.s; if (s.mode !== 'pluck') return true;
      const m = rd('rsExtra').match(/^([\\d.]+) \\/ ([\\d.]+) mJ$/); if (!m) return 'odd energy readout ' + rd('rsExtra');
      const d = s.d * s.L, h = s.h * 1e-3, Ex = 0.5 * s.T * h * h * s.L / (d * (s.L - d)) * 1e3;
      if (Math.abs(+m[2] - Ex) > 0.0051 + 1e-3 * Ex) return 'triangle energy shows ' + m[2] + ' mJ, ½T h² L/(d(L−d)) = ' + Ex;
      if (Math.abs(+m[1] - +m[2]) > 0.0051 + 0.02 * +m[2]) return 'modes carry ' + m[1] + ' mJ but the triangle has ' + m[2] + ' mJ (pluck at ' + s.d + ' L)';
      return true; })()` },
    { name: "driven string: steady amplitude equals an independent sum over modes; damping γ = ω1/Q", fn: `(() => { ${pre}
      const s = S.s; if (s.mode !== 'drive' || !W.D) return true;
      const mu = s.mu * 1e-3, v = Math.sqrt(s.T / mu), w1 = Math.PI * v / s.L, gam = w1 / s.Q, Om = TAU * s.f;
      if (!near(W.D.gam, gam, 1e-9) || !near(W.D.w1, w1, 1e-9)) return 'D.gam = ' + W.D.gam + ', ω1/Q = ' + gam;
      let sum = 0; for (let n = 1; n <= 40; n++) { const Fn = 2 * 0.25 * Math.sin(n * Math.PI * 0.05) / (mu * s.L), a = (n * w1) ** 2 - Om * Om, b = gam * Om; sum += Fn * Fn / (a * a + b * b); }
      const A = Math.sqrt(sum), t = rd('rsExtra'), m = t.match(/^([\\d.]+) (mm|µm)$/); if (!m) return 'odd amplitude readout ' + t;
      const got = +m[1] * (m[2] === 'mm' ? 1e-3 : 1e-6);
      if (Math.abs(got - A) > 0.51 * (m[2] === 'mm' ? (+m[1] >= 1 ? 1e-5 : 1e-6) : 1e-7) + 1e-9 * A) return 'steady amplitude shows ' + t + ', independent sum ' + (A * 1e3) + ' mm';
      const dt = rd('rsExtraLab').match(/= (\\d+) ms/); if (dt && Math.abs(+dt[1] - 2 / gam * 1e3) > 0.51) return 'damping time ' + dt[1] + ' ms, 2/γ = ' + 2 / gam * 1e3;
      return true; })()` },
    { name: "beats: f2 = f1 + Δf, beat frequency |f1 − f2|, pitch (f1 + f2)/2", fn: `(() => { ${pre}
      const b = S.b; if (b.myst !== null) return true;
      const f2 = b.f1 + b.df;
      if (Math.abs(num('rbF2') - f2) > 0.0501) return 'f2 shows ' + rd('rbF2') + ', f1 + Δf = ' + f2;
      if (Math.abs(num('rbFm') - (b.f1 + f2) / 2) > 0.00501) return 'pitch shows ' + rd('rbFm');
      if (Math.abs(num('rbFb') - Math.abs(b.df)) > 0.0501) return 'beat frequency shows ' + rd('rbFb') + ', |Δf| = ' + Math.abs(b.df);
      return true; })()` },
  ],
  steps: [
    { name: 'String: every mode, drag the pluck point and bridge to the ends, sweep the drive across all resonances, Q and T to limits', fn: `(async () => {
      const W = window.__sw, pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); if (!e) return; e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      W.applyPreset('pluck'); await pause(200);
      for (const id of Object.keys(document.querySelectorAll('#secString input[type=range], #driveBlock input[type=range]')).length ? [...document.querySelectorAll('#secString input[type=range], #driveBlock input[type=range]')].map((e) => e.id) : []) {
        const e = document.getElementById(id); if (!e) continue; for (const v of [e.min, e.max, e.min]) { set(id, v); await pause(60); } }
      W.applyPreset('resonance'); await pause(200);
      const f = document.getElementById('sf') || document.querySelector('#driveBlock input[type=range]');
      if (f) for (let x = +f.min; x <= +f.max; x += (f.max - f.min) / 25) { set(f.id, String(x)); await pause(40); }
      W.setRunning(true); await pause(500); W.applyPreset('harmonics'); await pause(200);
    })()` },
    { name: 'Beats to Δf = 0 and the extremes, mystery tone on and off, then Two waves with unequal amplitudes and frequencies', fn: `(async () => {
      const W = window.__sw, pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); if (!e) return; e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      W.applyPreset('beats'); await pause(200);
      for (const e of [...document.querySelectorAll('#secBeats input[type=range]')]) for (const v of [e.min, e.max, '0', e.min]) { set(e.id, v); await pause(60); }
      W.setMyst(true); await pause(150); W.setMyst(false); await pause(150);
      W.applyPreset('pulses'); await pause(200); W.applyPreset('standing'); await pause(200);
      for (const e of [...document.querySelectorAll('#secWaves input[type=range]')]) for (const v of [e.min, e.max, e.min]) { set(e.id, v); await pause(60); }
    })()` },
  ],
};
