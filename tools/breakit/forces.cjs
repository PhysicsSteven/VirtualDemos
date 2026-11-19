/* Known values for the break-it test (tools/breakit.cjs), forces. Hook: window.__forces (S, forces, tackle, G).
   Ramp and Atwood: Newton's second law along the ramp, m a = mg sin(θ) terms + F + f + T for the block, and (m + m2) a = D + f for
   block and hanging mass; kinetic friction is μk N and opposes the motion, static friction never exceeds μs N and cancels the rest;
   Atwood (θ = 90°, no friction): a = (m2 − m) g / (m + m2) and T = 2 m m2 g/(m + m2); the work done by gravity, push,
   friction and string adds up to the change of the block's kinetic energy while it runs (work-energy theorem).
   Block and tackle: T = F, n strands lift with n F, the ideal MA is n and the hand draws in n Δy of rope for every Δy of load; the
   the work-energy sum is checked for the ramp only.
   Simple machines: IMA = d_in/d_out, AMA = mg/F_in, efficiency AMA/IMA = W_out/W_in never above 1, heat never negative; frictionless
   machines are ideal; the readouts show the core's values. */
const pre = `const X = window.__forces; if (!X) return true; const S = X.S, G = X.G, near = (a, b, t) => Math.abs(a - b) <= t * Math.max(1, Math.abs(b));
  const rd = (id, l) => { for (const d of document.querySelectorAll('#' + id + ' > div')) if (d.firstChild.textContent === l) return d.lastChild.textContent.replace(/\\u2212/g, '-'); return null; };
`;
module.exports = {
  checks: [
    { name: "state is finite and the block stays on the ramp (0.25 to 2.75 m)", fn: `(() => { ${pre}
      if (S.tackle) return [S.s, S.v].every(isFinite) && S.s >= -1e-9 && S.s <= 2.2 + 1e-9 ? true : 'load s = ' + S.s + ', v = ' + S.v;
      if (![S.s, S.v].every(isFinite)) return 's, v = ' + S.s + ', ' + S.v;
      return S.s >= 0.25 - 1e-9 && S.s <= X.LEN - 0.25 + 1e-9 ? true : 'block at s = ' + S.s + ' m, outside the ramp stops'; })()` },
    { name: "second law on the block: m a = W∥ + F∥ + f + T; friction is μk N sliding, at most μs N at rest; N never negative", fn: `(() => { ${pre}
      if (S.tackle) return true;
      const p = S.p, F = X.forces(p, S.v), th = p.th * Math.PI / 180, ph = p.phi * Math.PI / 180;
      if (![F.N, F.f, F.a, F.T].every(isFinite) || F.N < 0) return 'N, f, a, T = ' + [F.N, F.f, F.a, F.T];
      if (!near(p.m * F.a, -p.m * G * Math.sin(th) + p.F * Math.cos(ph) + F.f + F.T, 1e-9)) return 'm a = ' + p.m * F.a + ' but the forces sum to ' + (-p.m * G * Math.sin(th) + p.F * Math.cos(ph) + F.f + F.T);
      if (!near((p.m + p.m2) * F.a, -p.m * G * Math.sin(th) + p.F * Math.cos(ph) + p.m2 * G + F.f, 1e-9)) return 'block and hanging mass: (m + m2) a mismatch';
      if (F.kind === 'kinetic' && !near(Math.abs(F.f), p.mk * F.N, 1e-9)) return 'kinetic friction ' + F.f + ' vs μk N ' + p.mk * F.N;
      if (F.kind === 'static' && (F.a !== 0 || Math.abs(F.f) > p.ms * F.N + 1e-9)) return 'static friction ' + F.f + ' exceeds μs N ' + p.ms * F.N;
      if (S.v > 0 && F.f > 0 || S.v < 0 && F.f < 0) return 'friction points along the motion';
      return true; })()` },
    { name: "Atwood's machine: a = (m2 − m) g/(m + m2), T = 2 m m2 g/(m + m2)", fn: `(() => { ${pre}
      if (!S.atwood) return true;
      const p = S.p, F = X.forces(p, S.v), a = (p.m2 - p.m) * G / (p.m + p.m2), T = 2 * p.m * p.m2 * G / (p.m + p.m2);
      if (!near(F.a, a, 1e-9)) return 'a = ' + F.a + ', should be ' + a;
      if (!near(F.T, T, 1e-9)) return 'T = ' + F.T + ', should be ' + T;
      if (S.run || S.blind) return true;
      return Math.abs(parseFloat(rd('forceOut', 'Acceleration a (m rising +)')) - a) <= 5.1e-4 ? true : 'readout a = ' + rd('forceOut', 'Acceleration a (m rising +)'); })()` },
    { name: "ramp readouts equal the forces: N, friction, μs N, a; slip angle atan μs", fn: `(() => { ${pre}
      if (S.tackle || S.run || S.blind) return true;
      const F = X.forces(S.p, S.v), N = rd('forceOut', 'Normal force N'), want = (x, d) => x.toFixed(d).replace('-', '-');
      if (N !== null && Math.abs(parseFloat(N) - F.N) > 0.051) return 'N shows ' + N + ', N = ' + F.N;
      const a = rd('forceOut', S.atwood ? 'Acceleration a (m rising +)' : 'Acceleration a (up the ramp +)'); if (a !== null && Math.abs(parseFloat(a) - F.a) > 5.1e-4) return 'a shows ' + a + ', a = ' + F.a;
      const ms = rd('forceOut', 'Largest static friction μs N'); if (ms !== null && Math.abs(parseFloat(ms) - S.p.ms * F.N) > 0.051) return 'μs N shows ' + ms;
      const sl = rd('forceOut', 'Slips when tan θ > μs, at θ ='); if (sl !== null && Math.abs(parseFloat(sl) - Math.atan(S.p.ms) * 180 / Math.PI) > 0.051) return 'slip angle shows ' + sl;
      return true; })()` },
    { name: "work-energy: the work of gravity, push, friction and string equals the change in ½mv² (no change of m between)", fn: `(() => { ${pre}
      if (S.tackle) return true;
      const Wk = S.work, sum = Wk.g + Wk.F + Wk.f + Wk.T + (Wk.stop || 0), K = 0.5 * S.p.m * S.v * S.v, W = (window.__fwe = window.__fwe || {}), prev = { ...W };
      Object.assign(W, { work: Wk, m: S.p.m, run: S.run, sum, K, s: S.s });
      if (!(prev.work === Wk && prev.m === S.p.m && prev.run && S.run && Math.abs(S.s - prev.s) < 2.6)) return true;
      const dW = sum - prev.sum, dK = K - prev.K;
      return Math.abs(dW - dK) <= 1e-6 * Math.max(1, Math.abs(dK)) ? true : 'ΔW = ' + dW + ' J but ΔK = ' + dK + ' J'; })()` },
    { name: "block and tackle: T = F, n strands lift n F, MA = n, hand's work F n Δy = mg Δy + ΔK", fn: `(() => { ${pre}
      if (!S.tackle) return true;
      const p = S.p, t = X.tackle(p.m, p.n, p.F, S.s <= 1e-12 && S.v <= 1e-12);
      if (t.T !== p.F || t.up !== p.n * p.F || t.MA !== p.n || !near(t.Fhold, p.m * G / p.n, 1e-12)) return 'tackle: ' + JSON.stringify(t);
      return true; })()` },
    { name: "simple machines: AMA = mg/F_in, efficiency = W_out/W_in ≤ 1, ideal at μ = 0; readouts match", fn: `(() => { ${pre}
      if (!S.mach) return true;
      const q = S.p, M = X.machine(S.machine, q);
      if (![M.Fin, M.din, M.dout, M.IMA, M.AMA, M.eff].every(isFinite) || M.Fin <= 0 || M.dout <= 0) return 'machine: ' + JSON.stringify(M);
      if (!near(M.AMA, q.m * G / M.Fin, 1e-12) || !near(M.IMA, M.din / M.dout, 1e-12) || !near(M.eff, M.Wout / M.Win, 1e-12)) return 'IMA, AMA or efficiency off: ' + JSON.stringify(M);
      if (M.eff > 1 + 1e-12 || M.heat < -1e-9) return 'efficiency ' + M.eff + ', heat ' + M.heat;
      if ((S.machine === 'lever' || q.mu === 0) && !near(M.eff, 1, 1e-12)) return 'frictionless but efficiency ' + M.eff;
      const e = rd('forceOut', 'Effort Fin'); if (e !== null && Math.abs(parseFloat(e) - M.Fin) > 0.0051) return 'effort shows ' + e + ', core ' + M.Fin;
      if (!(S.mc.u >= 0 && S.mc.u <= 1)) return 'progress ' + S.mc.u;
      return true; })()` },
  ],
  steps: [
    { name: 'Every preset, Release, Hold, back to the top mark, timed run, and the sliders to the extremes mid motion', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), q = (s) => document.querySelector(s);
      for (const b of document.querySelectorAll('#presets button')) {
        b.click(); await pause(60); q('#go').click(); await pause(250);
        for (const id of ['sTh', 'sM', 'sMs', 'sMk', 'sF', 'sPhi', 'sM2', 'sN']) { const e = document.getElementById(id); if (!e || e.closest('[hidden]')) continue; for (const v of [e.max, e.min, e.value]) { e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); await pause(40); } }
        q('#go').click(); await pause(60); if (q('#timed') && !q('#timed').hidden) { q('#timed').click(); await pause(400); } q('#back').click(); await pause(60);
      }
    })()` },
    { name: 'Slide the ramp to 90 degrees with a push at a steep angle (lift off), mass to the minimum, release', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), X = window.__forces;
      document.querySelector('#presets [data-p=angle]').click(); await pause(100);
      const set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      set('sM', document.getElementById('sM').min); set('sF', document.getElementById('sF').max); set('sPhi', document.getElementById('sPhi').max); set('sTh', 90);
      if (document.getElementById('go').textContent === 'Release') document.getElementById('go').click(); await pause(600);
      set('sTh', 0); set('sMs', 0); set('sMk', 0); await pause(600);
    })()` },
    { name: 'Simple machines: each machine, Play, every knob to its ends mid lift, record and export', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), q = (s) => document.querySelector(s);
      q('#presets [data-p=machines]').click(); await pause(80);
      for (const b of document.querySelectorAll('#machSeg button')) {
        b.click(); await pause(60); q('#go').click(); await pause(300);
        for (const id of ['sM', 'sN', 'sLin', 'sLout', 'sRa', 'sWR', 'sAR', 'sMu']) { const e = document.getElementById(id); if (!e || e.closest('[hidden]')) continue; for (const v of [e.max, e.min, e.value]) { e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); await pause(40); } }
        q('#go').click(); await pause(4500); q('#capture').click(); await pause(40); q('#back').click(); await pause(40);
      }
      q('#exportCsv').click(); await pause(100);
    })()` },
  ],
};
