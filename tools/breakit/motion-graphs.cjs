/* Known values for the break-it test (tools/breakit.cjs), motion-graphs. Hook: window.__mg (S, run, runB, stateAt, ...).
   The motion is exact kinematics for constant acceleration stages: x and v are continuous from stage to stage, v is the slope of x
   and a the slope of v (central differences), the distance traveled is the integral of |v|, a ball rolling on the ramps keeps
   v²/2 + (5/7) g h (rolling solid ball, no losses), the two cars' side by side times are the real crossings of x_A and x_B,
   the stopping distances are v tr + v²/2b with the braking distance growing as v², the readouts show the live state, and the
   presets with a cited answer give it: Two cars meet at t = 2 + √8 s, x = 3.66 m; the toss lands at 2 v0/g = 2.45 s; Turning around
   stops at t = 4 s. */
const rd = `const M = window.__mg; if (!M) return true; const S = M.S, run = M.run, sa = M.stateAt;
  const val = (name) => { for (const d of document.querySelectorAll('#readout > div')) { const t = d.querySelector('dt'); if (t && t.textContent.trim() === name) return parseFloat(d.querySelector('dd').textContent.replace(/\\u2212/g, '-')); } return null; };
`;
module.exports = {
  checks: [
    { name: "stages join: x and v continuous, run length is the sum of the stage times, the clock stays inside the run", fn: `(() => { ${rd}
      let t = 0, x = run.x0, v = run.v0;
      for (const s of run.stages) {
        if (Math.abs(s.t0 - t) > 1e-9) return 'stage starts at ' + s.t0 + ', previous ended at ' + t;
        if (Math.abs(s.x0 - x) > 1e-7 * Math.max(1, Math.abs(x)) || Math.abs(s.v0 - v) > 1e-7 * Math.max(1, Math.abs(v))) return 'jump at t = ' + t + ': x ' + x + ' to ' + s.x0 + ', v ' + v + ' to ' + s.v0;
        if (!isFinite(s.a) || !(s.T > 0)) return 'bad stage ' + JSON.stringify(s);
        x = s.x0 + s.v0 * s.T + 0.5 * s.a * s.T * s.T; v = s.v0 + s.a * s.T; t += s.T; }
      if (Math.abs(t - run.T) > 1e-9) return 'run.T ' + run.T + ' but stages add to ' + t;
      if (!(S.t >= 0 && S.t <= M.tMax() + 1e-9)) return 'clock ' + S.t + ' is outside 0 to ' + M.tMax();
      return true; })()` },
    { name: "v is the slope of x, a is the slope of v (within a stage), Δx is the area under v", fn: `(() => { ${rd}
      if (S.preset === 'walk') return true;
      for (const R of [run, M.runB]) { if (!R) continue;
        for (const s of R.stages) { if (s.T < 1e-4) continue; const u = s.T / 2, h = Math.min(1e-4, s.T / 4), t = s.t0 + u;
          const dx = (sa(R, t + h).x - sa(R, t - h).x) / (2 * h), dv = (sa(R, t + h).v - sa(R, t - h).v) / (2 * h), c = sa(R, t);
          if (Math.abs(dx - c.v) > 1e-5 * Math.max(1, Math.abs(c.v))) return 'dx/dt = ' + dx + ' but v = ' + c.v + ' at t = ' + t;
          if (Math.abs(dv - c.a) > 1e-4 * Math.max(1, Math.abs(c.a))) return 'dv/dt = ' + dv + ' but a = ' + c.a + ' at t = ' + t; }
        let area = 0; const n = 4000, T = R.T; for (let i = 0; i < n; i++) area += 0.5 * (sa(R, T * i / n).v + sa(R, T * (i + 1) / n).v) * T / n;
        const end = sa(R, T); if (Math.abs(area - (end.x - R.x0)) > 2e-4 * Math.max(1, Math.abs(end.x - R.x0), T * Math.max(...R.stages.map((s) => Math.abs(s.v0)), 1))) return 'area under v ' + area + ', Δx ' + (end.x - R.x0); }
      return true; })()` },
    { name: "readouts equal the live state (x, v, a, speed, Δx, Δv, distance traveled)", fn: `(() => { ${rd}
      if (S.blind || window.__mg_playing || document.getElementById('play').textContent === 'Pause') return true;
      const q = M.st(S.t), tol = 0.0051, name = S.vert ? 'Height y' : 'Position x', t = val('Time t');
      if (Math.abs(t - S.t) > 0.0051) return 'Time t shows ' + t + ', clock ' + S.t;
      if (Math.abs(val(name) - q.x) > tol) return name + ' shows ' + val(name) + ', state ' + q.x;
      if (Math.abs(val('Velocity v') - q.v) > tol) return 'v shows ' + val('Velocity v') + ', state ' + q.v;
      if (Math.abs(val('Acceleration a') - q.a) > tol) return 'a shows ' + val('Acceleration a') + ', state ' + q.a;
      if (S.preset === 'walk') return true;
      if (Math.abs(val('Speed |v|') - Math.abs(q.v)) > tol) return 'speed shows ' + val('Speed |v|');
      if (Math.abs(val('Displacement Δx = x − x₀ = area under v') - (q.x - run.x0)) > tol) return 'Δx shows ' + val('Displacement Δx = x − x₀ = area under v') + ', state ' + (q.x - run.x0);
      if (Math.abs(val('Change in velocity Δv = v − v₀ = area under a') - (q.v - run.v0)) > tol) return 'Δv readout ' + val('Change in velocity Δv = v − v₀ = area under a');
      const d = M.distance(S.t); if (Math.abs(val('Distance traveled') - d) > tol) return 'distance shows ' + val('Distance traveled') + ', integral of |v| is ' + d;
      if (d < Math.abs(q.x - run.x0) - 1e-9) return 'distance traveled ' + d + ' is less than |Δx|';
      return true; })()` },
    { name: "distance traveled is the integral of |v|", fn: `(() => { ${rd}
      if (S.preset === 'walk') return true; const t = S.t; if (t <= 0) return true; let d = 0; const n = 20000;
      for (let i = 0; i < n; i++) d += 0.5 * (Math.abs(sa(run, t * i / n).v) + Math.abs(sa(run, t * (i + 1) / n).v)) * t / n;
      return Math.abs(d - M.distance(t)) < 1e-4 * Math.max(1, d) ? true : 'integral of |v| is ' + d + ', distance() ' + M.distance(t); })()` },
    { name: "ramps: v²/2 + (5/7) g h stays at its start value, and the stops catch the ball at the ends", fn: `(() => { ${rd}
      if (!S.ramps) return true; const L = M.RAMP_L, ang = S.rp.ang, g = M.G;
      const h = (x) => { let y = 0, s = Math.max(0, Math.min(3 * L, x)); for (let k = 0; k < 3; k++) { const len = Math.min(L, Math.max(0, s - k * L)); y += len * Math.sin(ang[k] * Math.PI / 180); } return y; };
      const E = (t) => { const q = sa(run, t); return q.v * q.v / 2 + 5 / 7 * g * h(q.x); }, E0 = E(0);
      for (const t of [S.t, run.T, run.T / 2, run.T / 3]) if (Math.abs(E(t) - E0) > 1e-6 * Math.max(1, Math.abs(E0))) return 'energy at t = ' + t + ' is ' + E(t) + ', start ' + E0;
      for (const s of run.stages) { if (s.x0 < -1e-9 || s.x0 > 3 * L + 1e-9) return 'ball off the track: x = ' + s.x0; }
      const e = sa(run, run.T); if (e.x < -1e-6 || e.x > 3 * L + 1e-6) return 'ball ends off the track at x = ' + e.x;
      return true; })()` },
    { name: "two cars: every meeting is a real crossing of x_A and x_B, and no sign change of the gap is missed", fn: `(() => { ${rd}
      if (!M.runB || S.stop) return true; const T = M.tMax(), m = M.meetTimes(M.run, M.runB, T);
      for (const t of m.t) if (Math.abs(sa(M.run, t).x - sa(M.runB, t).x) > 1e-6) return 'at the reported meeting t = ' + t + ' the gap is ' + (sa(M.run, t).x - sa(M.runB, t).x);
      if (m.same) { for (let i = 0; i <= 50; i++) if (Math.abs(sa(M.run, T * i / 50).x - sa(M.runB, T * i / 50).x) > 1e-9) return 'reported the same motion but they differ'; return true; }
      const n = 4000; let prev = sa(M.run, 0).x - sa(M.runB, 0).x;
      for (let i = 1; i <= n; i++) { const t0 = T * (i - 1) / n, t1 = T * i / n, g = sa(M.run, t1).x - sa(M.runB, t1).x;
        if (prev * g < 0 && !m.t.some((u) => u >= t0 - 1e-9 && u <= t1 + 1e-9)) return 'the gap changes sign between t = ' + t0 + ' and ' + t1 + ' but no meeting is reported'; prev = g; }
      return true; })()` },
    { name: "stopping distance: v tr + v²/2b, braking distance goes as v², the run stops exactly there", fn: `(() => { ${rd}
      if (!S.stop) return true; const A = M.stopDist(S.sd.vA, S.sd.tr, S.sd.b), B = M.stopDist(S.sd.vB, S.sd.tr, S.sd.b);
      for (const [R, d, v] of [[M.run, A, S.sd.vA], [M.runB, B, S.sd.vB]]) { const e = sa(R, R.T);
        if (Math.abs(e.x - d.total) > 1e-9 * Math.max(1, d.total) || Math.abs(e.v) > 1e-9) return 'run ends at x = ' + e.x + ', v = ' + e.v + ', stopping distance ' + d.total;
        if (Math.abs(d.total - (v * S.sd.tr + v * v / (2 * S.sd.b))) > 1e-9 * Math.max(1, d.total)) return 'stopping distance formula'; }
      if (S.sd.vA > 0 && Math.abs(B.brake / A.brake - (S.sd.vB / S.sd.vA) ** 2) > 1e-9 * (S.sd.vB / S.sd.vA) ** 2) return 'braking ratio ' + B.brake / A.brake;
      if (M.run.T < Math.max(A.tStop, B.tStop) - 1e-9) return 'the run ends before the slower car stops';
      return true; })()` },
    { name: "cited presets: Turning around, Two cars, Free fall", fn: `(() => { ${rd}
      if (S.preset === 'turn') { if (Math.abs(sa(run, 4).v) > 1e-12 || Math.abs(sa(run, 4).x - 2) > 1e-12) return 'turn: v(4) = ' + sa(run, 4).v + ', x(4) = ' + sa(run, 4).x; }
      if (S.preset === 'two') { const m = M.meetTimes(run, M.runB, M.tMax()); const want = 2 + Math.sqrt(8); const t = m.t.find((u) => Math.abs(u - want) < 1e-6); if (t === undefined) return 'two cars: meetings ' + m.t + ', expected ' + want;
        if (Math.abs(sa(run, t).x - 3.6568542494923806) > 1e-6) return 'x at the meeting ' + sa(run, t).x;
        const g = sa(run, 2).v - sa(M.runB, 2).v; if (Math.abs(g) > 1e-12) return 'v_A − v_B at 2 s is ' + g; }
      if (S.preset === 'toss') { const T = 2 * 12 / 9.81; if (Math.abs(run.T - T) > 1e-9 || Math.abs(sa(run, T).x) > 1e-9 || Math.abs(sa(run, T).v + 12) > 1e-9) return 'toss: T = ' + run.T + ', x(T) = ' + sa(run, T).x; }
      if (S.preset === 'stopgo') { const e = sa(run, 7); if (Math.abs(e.v) > 1e-12) return 'stop and go: v at the end ' + e.v; }
      return true; })()` },
  ],
  steps: [
    { name: 'every preset, play, drag the clock and change sliders mid run, in Blind, then back', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const el = document.getElementById(id); if (el && el.offsetParent) { el.value = v; el.dispatchEvent(new Event('input', { bubbles: true })); } };
      for (const b of document.querySelectorAll('#presets button')) { b.click(); await pause(120);
        document.getElementById('play').click(); await pause(250);
        for (const id of ['sa0', 'sT0', 'sa1', 'sT1', 'sa2', 'sT2', 'sx0', 'sv0', 'sr0', 'sr1', 'sr2', 'srv', 'ssa', 'ssb', 'str', 'sbr', 'sbx0', 'sbv0', 'sba']) {
          const el = document.getElementById(id); if (!el || !el.offsetParent) continue; for (const v of [el.max, el.min]) { set(id, v); await pause(40); } }
        document.getElementById('play').click(); await pause(80); }
      document.querySelector('#presets button').click(); await pause(150);
    })()` },
    { name: 'Draw a graph: draw wildly, smooth, switch v and a, play to the end, reset; Match a graph on the ramps', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      document.querySelector('#presets [data-p=draw]').click(); await pause(150);
      const c = document.getElementById('can'), r = c.getBoundingClientRect();
      const send = (type, x, y) => c.dispatchEvent(new PointerEvent(type, { clientX: r.left + x, clientY: r.top + y, pointerId: 1, bubbles: true, button: 0, buttons: type === 'pointerup' ? 0 : 1 }));
      for (const y0 of [0.4, 0.55, 0.7]) { send('pointerdown', r.width * 0.2, r.height * y0);
        for (let i = 0; i < 30; i++) { send('pointermove', r.width * (0.2 + 0.7 * i / 29), r.height * (y0 + 0.25 * Math.sin(i * 1.7) )); }
        send('pointermove', r.width + 50, -50); send('pointermove', -50, r.height + 50); send('pointerup', 5, 5); await pause(80); }
      document.getElementById('drawSmooth').click(); document.querySelector('#drawSeg [data-k=a]').click(); await pause(100);
      for (const s of document.querySelectorAll('#drawShapes button')) { s.click(); await pause(60); }
      document.getElementById('play').click(); await pause(800); document.getElementById('reset').click();
      document.querySelector('#presets [data-p=ramps]').click(); await pause(150);
      for (let i = 0; i < 5; i++) { document.getElementById('rampTarget').click(); await pause(60); }
      document.getElementById('play').click(); await pause(700);
      document.getElementById('rampTargetOff').click(); document.querySelector('#presets [data-p=const]').click(); await pause(150);
    })()` },
    { name: 'Walk the graph: start a run, press New target mid run, Run again, switch to v target', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      document.querySelector('#presets [data-p=walk]').click(); await pause(150);
      document.getElementById('walkGo').click(); await pause(300); document.getElementById('walkNew').click(); await pause(100);
      const v = document.getElementById('walkVel'); v.click(); document.getElementById('walkGo').click(); await pause(500); document.getElementById('walkGo').click(); await pause(300); v.click();
      document.querySelector('#presets [data-p=turn]').click(); await pause(150);
    })()` },
  ],
};
