/* Known values for the break-it test (tools/breakit.cjs), wire-force. Hook: window.__wireforce (S, forceOnWire, balanceReading, ...).
   Balance view: the Δm and predicted F readouts equal the physics of the sliders (F = I L B sin θ, Δm = −F/g, so Δm·g = −F),
   zero at I = 0 or θ = 0, |F| never above I L B; the slider outputs show the slider values; the Mystery magnet and Blind never
   show B or the predicted force. Loop view: moment μ = N|I|A with A = 4 cm squared, |τ| ≤ NIAB and the readout equals −μB sin θ,
   U = −μ B cos θ. Presets keep the cited setup (balance 2 A, 4 cm, 90°, 0.2 T gives F = 16 mN). */
const pre = `const W = window.__wireforce; if (!W) return true; const S = W.S, G = W.G;
  const rd = () => { const o = {}; for (const d of document.querySelectorAll('#out > div')) o[d.querySelector('dt').textContent] = d.querySelector('dd').textContent.replace(/\\u2212/g, '-'); return o; };
  const num = (t) => parseFloat(String(t).replace(/\\u2212/g, '-'));
  const B = S.mystery ? S.mystery : S.B, loop = S.preset === 'loop' || S.preset === 'motor', o = rd();
`;
module.exports = {
  checks: [
    { name: "balance: Δm and predicted F equal I L B sin θ and F/g from the sliders", fn: `(() => { ${pre}
      if (loop) return true;
      const F = S.I * (S.L / 100) * B * Math.sin(S.th * Math.PI / 180);
      const dm = num(o['Balance reading Δm']); if (Math.abs(dm + F / G * 1000) > 0.0051) return 'Δm shows ' + o['Balance reading Δm'] + ', physics gives ' + (-F / G * 1000).toFixed(3) + ' g';
      if (o['Predicted F = ILB sin θ'] !== undefined && Math.abs(num(o['Predicted F = ILB sin θ']) - F * 1000) > 0.0051) return 'F shows ' + o['Predicted F = ILB sin θ'] + ', physics gives ' + (F * 1000).toFixed(3) + ' mN';
      if (S.I === 0 || S.th === 0) { if (Math.abs(dm) > 0) return 'nonzero reading with I = 0 or θ = 0: ' + dm; }
      if (Math.abs(F) > Math.abs(S.I) * (S.L / 100) * B + 1e-15) return '|F| above I L B';
      if (/-0\\.00 g/.test(o['Balance reading Δm'])) return 'readout shows a minus sign on zero: ' + o['Balance reading Δm'];
      return true; })()` },
    { name: "slider outputs show the slider values (I, L, θ, N, B)", fn: `(() => { ${pre}
      const t = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-');
      if (Math.abs(num(t('oI')) - S.I) > 0.0501) return 'oI ' + t('oI') + ', I = ' + S.I;
      if (Math.abs(num(t('oL')) - S.L) > 0.0501) return 'oL ' + t('oL') + ', L = ' + S.L;
      if (num(t('oTh')) !== S.th) return 'oTh ' + t('oTh') + ', θ = ' + S.th;
      if (num(t('oN')) !== S.N) return 'oN ' + t('oN') + ', N = ' + S.N;
      if (!S.mystery && Math.abs(num(t('oB')) - S.B) > 0.00501) return 'oB ' + t('oB') + ', B = ' + S.B;
      for (const k of ['I', 'L', 'th', 'N', 'B']) if (!isFinite(S[k])) return k + ' is ' + S[k];
      return true; })()` },
    { name: "Mystery magnet and Blind never show B or the predicted force", fn: `(() => { ${pre}
      if (!S.mystery && !S.blind) return true;
      const txt = document.getElementById('out').textContent + document.getElementById('fitOut').textContent + document.getElementById('oB').textContent;
      if (/Predicted F|Largest torque|Moment μ/.test(txt)) return 'a predicted value is shown while hidden: ' + txt.slice(0, 120);
      if (S.mystery && (txt.includes(String(S.mystery)) || /\\d\\.\\d+ T\\b/.test(txt))) return 'B shown for the mystery magnet: ' + txt.slice(0, 120);
      return true; })()` },
    { name: "loop: μ = N|I|A, torque = −μ B sin θ, |τ| ≤ NIAB, U = −μ B cos θ", fn: `(() => { ${pre}
      if (!loop || S.mystery || S.blind) return true;
      const A = W.LOOP.a ** 2, th = S.loop.th, sgn = S.comm ? (Math.sin(th) >= 0 ? -1 : 1) : 1, mu = S.N * Math.abs(S.I) * A;
      const g = (k) => num(o[k]);
      if (Math.abs(g('Moment μ = NIA') - mu * 1000) > 0.0051) return 'μ shows ' + o['Moment μ = NIA'] + ', physics ' + (mu * 1000).toFixed(3) + ' mA·m²';
      const tau = -S.N * S.I * sgn * A * B * Math.sin(th);
      if (Math.abs(g('Torque now') - tau * 1000) > 0.00051) return 'τ shows ' + o['Torque now'] + ', physics ' + (tau * 1000).toFixed(4);
      if (Math.abs(tau) > mu * B + 1e-12) return '|τ| above NIAB';
      if (Math.abs(g('Largest torque NIAB') - mu * B * 1000) > 0.00051) return 'largest torque ' + o['Largest torque NIAB'];
      if (Math.abs(g('U = −μ·B now') + S.N * S.I * sgn * A * B * Math.cos(th) * 1000) > 0.00051) return 'U shows ' + o['U = −μ·B now'];
      if (!isFinite(S.loop.th) || !isFinite(S.loop.w)) return 'loop state NaN';
      return true; })()` },
    { name: "loop rotation: the energy ½Jω² + U never grows (only damping removes it)", fn: `(() => { ${pre}
      if (!loop || !S.loop.run) { window.__wfE = null; return true; }
      const E = 0.5 * W.loopJ() * S.loop.w ** 2 + W.energy(S.N, S.I, B, S.loop.th), key = [S.N, S.I, B, S.comm].join('|'), p = window.__wfE;
      window.__wfE = { E, key, scale: S.N * Math.abs(S.I) * W.LOOP.a ** 2 * B };
      if (S.comm || !p || p.key !== key) return true;
      return E - p.E > 0.12 * p.scale ? 'energy rose from ' + p.E + ' to ' + E + ' (scale ' + p.scale + ') with no motor' : true; })()` },
    { name: "presets: balance 2 A, 4 cm, 90°, 0.2 T gives F = 16 mN and Δm = −1.63 g; angle preset sin 30°", fn: `(() => { ${pre}
      const P = W.PRESETS, b = P.balance;
      if (b.I !== 2 || b.L !== 4 || b.th !== 90 || b.B !== 0.2) return 'balance preset changed';
      if (Math.abs(W.forceOnWire(b.I, b.L / 100, b.B, b.th) - 0.016) > 1e-12) return 'balance preset F';
      if (Math.abs(W.balanceReading(b.I, b.L / 100, b.B, b.th) * 1000 + 1.631) > 0.001) return 'balance preset Δm';
      if (Math.abs(W.forceOnWire(2, 0.04, 0.2, 30) - 0.008) > 1e-12 || Math.abs(W.forceOnWire(2, 0.04, 0.2, 0)) > 1e-15) return 'F(θ)';
      return true; })()` },
  ],
  steps: [
    { name: 'Loop preset, release, set I and B and N to extremes mid swing, motor with commutator, I through zero, back to balance', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#presets [data-p=loop]').click(); await pause(100); document.getElementById('spin').click(); await pause(300);
      for (const [id, v] of [['sI', 5], ['sB', 0.5], ['sN', 100], ['sI', -5], ['sI', 0], ['sN', 1], ['sI', 0.1]]) { set(id, v); await pause(150); }
      document.querySelector('#presets [data-p=motor]').click(); await pause(100); if (document.getElementById('spin').textContent !== 'Hold the loop') document.getElementById('spin').click();
      for (const [id, v] of [['sI', 5], ['sB', 0.5], ['sN', 100], ['sI', 0], ['sI', -1]]) { set(id, v); await pause(200); }
      document.getElementById('comm').click(); await pause(200);
      document.querySelector('#presets [data-p=balance]').click(); await pause(200);
    })()` },
    { name: 'Mystery magnet on, record readings at several currents, edit a cell to junk, then Blind, then mystery off, clear', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#presets [data-p=balance]').click(); await pause(100); document.getElementById('mystery').click(); await pause(100);
      for (const v of [-5, 0, 0.1, 5]) { set('sI', v); document.getElementById('capture').click(); await pause(60); }
      const c = document.querySelector('#rowsTbl input[data-f=dm]'); if (c) { c.value = 'abc'; c.dispatchEvent(new Event('change', { bubbles: true })); await pause(100); c.value = ''; c.dispatchEvent(new Event('change', { bubbles: true })); await pause(100); }
      set('sTh', 0); await pause(100); set('sTh', 90); const lb = document.getElementById('labBlind'); lb.click(); await pause(100); lb.click();
      document.getElementById('mystery').click(); await pause(100); document.getElementById('clearRows').click(); await pause(100);
    })()` },
  ],
};
