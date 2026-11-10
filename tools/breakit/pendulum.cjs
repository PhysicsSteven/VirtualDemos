/* Known values for the break-it test (tools/breakit.cjs), pendulum. Hooks: window.__dp (the Exact period and Double pendulum scenes:
   S, R, Rs, energyDrift) and window.__pend (setScene, scene, pw: the Pendulum wave).
   Photogate lab: T0 = 2π√(ℓ/g) with ℓ = L or 2L/3 (rod), the exact period is T0 · 2K(sin(θ0/2))/π and the "longer by" percentage follows.
   Exact period scene: the Period T readout is 4√(L/g)K(sin(θ0/2)) from an independent AGM; the energy drift stays tiny.
   Double pendulum: the two normal mode frequencies are the roots of det(K − ω²M) = 0 for the live masses and lengths; energy is conserved.
   Pendulum wave: pendulum n has period Γ/(N0 + n) at the release angle (exact K period), the longest makes N0 swings in Γ,
   lengths fall along the row, and at t = Γ every bob is back at θ0. */
const pre = `const P = window.__pend, D = window.__dp; if (!P) return true;
  const rd = (t) => (t || '').replace(/\\u2212/g, '-'), num = (t) => parseFloat(rd(t)),
    row = (box, label, nth) => { let k = 0; for (const d of document.querySelectorAll('#' + box + ' > div')) if (d.querySelector('dt').textContent === label && k++ === (nth || 0)) return d.querySelector('dd').textContent; return null; };
  const K = (k) => { let a = 1, b = Math.sqrt((1 - k) * (1 + k)); for (let i = 0; i < 60; i++) { const an = (a + b) / 2; b = Math.sqrt(a * b); a = an; } return Math.PI / (2 * a); };
  const near = (a, b, t) => Math.abs(a - b) <= t * Math.max(Math.abs(b), 1e-12);
`;
module.exports = {
  checks: [
    { name: "Photogate lab: T0 = 2π√(ℓ/g), exact = T0 · 2K/π, and the 'longer by' percentage", fn: `(() => { ${pre}
      if (P.scene !== 'lab') return true;
      const t0 = row('out', 'T₀ = 2π√(ℓ/g)'); if (t0 === null) return true;
      const g = num(row('out', 'g')), T0 = num(t0), A = +document.getElementById('sA').value, L = +document.getElementById('sL').value;
      if (!(g > 0) || !(T0 > 0)) return 'g = ' + row('out', 'g') + ', T0 = ' + t0;
      const l = g * Math.pow(T0 / (2 * Math.PI), 2);
      if (!near(l, L, 6e-3) && !near(l, 2 * L / 3, 6e-3)) return 'ℓ from T0 = ' + l.toFixed(4) + ' m, but L = ' + L + ' (rod: ' + (2 * L / 3).toFixed(4) + ')';
      const ex = num(row('out', 'Exact period at θ₀ = ' + A + '°')); if (!isFinite(ex)) return 'no exact period row for θ0 = ' + A;
      const want = T0 * 2 / Math.PI * K(Math.sin(A * Math.PI / 360));
      if (Math.abs(ex - want) > 0.0006 + 0.0005 * want / T0) return 'exact period shows ' + ex + ', T0 · 2K/π = ' + want;
      const pc = num(row('out', 'Longer than T₀ by')), wpc = (ex / T0 - 1) * 100;
      if (Math.abs(pc - wpc) > 0.2 + 0.01 * wpc) return 'longer by ' + pc + ' %, ratio gives ' + wpc.toFixed(2);
      return true; })()` },
    { name: "Exact period scene: Period T = 4√(L/g)K(sin(θ0/2)) from an independent AGM; energy kept", fn: `(() => { ${pre}
      if (!D || P.scene !== 'phase' || !D.Rs) return true;
      const r = D.Rs, p = r.p; if (D.energyDrift() > 1e-6) return 'energy drift ' + D.energyDrift();
      const th = r.y0[0], om = r.y0[1], w0 = Math.sqrt(p.g / p.L), k2 = om * om / (4 * w0 * w0) + Math.sin(th / 2) ** 2;
      const t = row('measBox', 'Period T, exact'); if (t === null || k2 >= 1) return true;
      const want = 4 * K(Math.sqrt(k2)) / w0;
      return near(num(t), want, 2e-5) ? true : 'Period T shows ' + t + ', independent AGM gives ' + want;
    })()` },
    { name: "Double pendulum: normal mode frequencies are the roots of det(K − ω²M) = 0; energy is conserved", fn: `(() => { ${pre}
      if (!D || P.scene !== 'double' || !D.R) return true;
      const p = D.R.p, M = p.m1 + p.m2, a = p.m1 * p.L1 * p.L2, b = M * p.g * (p.L1 + p.L2), c = M * p.g * p.g;
      const x1 = (b - Math.sqrt(b * b - 4 * a * c)) / (2 * a), x2 = (b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
      /* det [[M g L1 − ω² M L1², −ω² m2 L1 L2], [−ω² m2 L1 L2, m2 g L2 − ω² m2 L2²]] = 0 for each root */
      for (const x of [x1, x2]) { const d = (M * p.g * p.L1 - x * M * p.L1 * p.L1) * (p.m2 * p.g * p.L2 - x * p.m2 * p.L2 * p.L2) - x * x * p.m2 * p.m2 * p.L1 * p.L1 * p.L2 * p.L2;
        if (Math.abs(d) > 1e-9 * M * M * p.g * p.g * p.L1 * p.L2 * Math.max(p.L1, p.L2) ** 2) return 'root ' + x + ' does not satisfy det = 0 (' + d + ')'; }
      const w1 = num(row('modeBox', 'Mode 1, ω₁')), w2 = num(row('modeBox', 'Mode 2, ω₂'));
      if (!near(w1, Math.sqrt(x1), 2e-4) || !near(w2, Math.sqrt(x2), 2e-4)) return 'modes show ' + w1 + ', ' + w2 + ' rad/s; roots give ' + Math.sqrt(x1) + ', ' + Math.sqrt(x2);
      if (!near(num(row('modeBox', 'Period 2π/ω₁')), 2 * Math.PI / Math.sqrt(x1), 2e-4)) return 'mode 1 period readout';
      if (D.R.E0 > 0 && D.energyDrift() > 1e-6) return 'energy drift ' + D.energyDrift();
      return true; })()` },
    { name: "Pendulum wave: Tₙ = Γ/(N0 + n), the longest makes N0 swings in Γ, lengths fall along the row, all back at t = Γ", fn: `(() => { ${pre}
      const S = P.pw.S, G = 9.81, d = Math.PI / 180, th0 = S.A * d; if (!S.Ls.length) return true;
      const per = (L) => 4 * Math.sqrt(L / G) * K(Math.sin(th0 / 2));
      for (let n = 0; n < S.N; n++) {
        const L = S.Ls[n], want = S.Gam / (S.N0 + n), T = S.small ? 2 * Math.PI * Math.sqrt(L / G) : per(L);
        if (!(L > 0) || !isFinite(L)) return 'pendulum ' + n + ' has L = ' + L;
        if (!near(T, want, 1e-9)) return 'pendulum ' + (n + 1) + ': period ' + T + ' but Γ/(N0 + n) = ' + want;
        if (n && !(L < S.Ls[n - 1])) return 'lengths do not fall along the row at ' + n;
      }
      if (P.scene !== 'wave') return true;
      if (!S.small) {
        const sw = num(row('pwOut', 'Swings of the longest in Γ')); if (Math.abs(sw - S.N0) > 5e-5) return 'longest makes ' + sw + ' swings in Γ, should be ' + S.N0;
        const miss = num(row('pwOut', 'Largest miss from θ₀ at t = Γ')); if (!(Math.abs(miss) < 2e-3)) return 'at t = Γ the bobs miss θ0 by ' + miss + ' degrees';
      }
      return true; })()` },
  ],
  steps: [
    { name: 'Wave: each setup, scrub the time to 0 and Γ, extreme N, N0, Γ and angle; back to the lab', fn: `(async () => {
      const P = window.__pend, pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      P.setScene('wave'); await pause(300);
      for (const k of ['quick', 'many', 'smallLen', 'harvard']) { P.pw.applyPreset(k); await pause(100); P.pw.setT(P.pw.S.Gam); await pause(100); P.pw.setT(0); }
      for (const [id, vs] of [['pwN', ['2', '1', '40']], ['pwN0', ['1', '200']], ['pwG', ['1', '600']], ['pwA', ['1', '90', '170']]]) for (const v of vs) { set(id, v); await pause(100); }
      set('pwT', '1'); await pause(100); P.pw.play(); await pause(500); P.pw.applyPreset('harvard'); P.setScene('lab'); await pause(200);
    })()` },
    { name: 'Double pendulum: run chaos, drag lengths and masses to the limits mid run, switch scenes while running', fn: `(async () => {
      const P = window.__pend, D = window.__dp, pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      P.setScene('double'); await pause(200); D.setRunning(true); await pause(500);
      for (const id of ['sM1', 'sM2', 'sL1', 'sL2', 'sG']) { const e = document.getElementById(id); for (const v of [e.min, e.max, e.min]) { set(id, v); await pause(80); } }
      P.setScene('phase'); await pause(300); set('dsA', '170'); await pause(100); set('dsA', '1'); await pause(200);
      P.setScene('lab'); await pause(200); P.setScene('double'); await pause(200); D.setRunning(false); D.applyPreset('chaos'); P.setScene('lab'); await pause(200);
    })()` },
  ],
};
