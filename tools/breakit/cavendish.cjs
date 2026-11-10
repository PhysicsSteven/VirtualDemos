/* Known values for the break-it test (tools/breakit.cjs), cavendish. Hook: window.__cav (S, advance, toTurn, swingTo).
   The core functions live inside the page's closure, so the checks use the state S and the cited constants only.
   Cavendish's balance: κ = 4π² I / T0² with I = 2 m l² (m = 20.0 g, l = 50.0 mm, T0 = 360.0 s) = 1.5231e-8 N·m/rad, the spot is
   0.500 + L tan 2θ with L = 5.000 m, so the readouts equal the state; settled at A the spot rests at 52.83 cm, at B at 47.17 cm,
   with the large spheres Away at 50.00 cm (the torque vanishes by symmetry); the twist stays small and finite. */
const pre = `const C = window.__cav; if (!C) return true; const S = C.S, rd = (l) => { for (const d of document.querySelectorAll('#out > div')) if (d.firstChild.textContent === l) return d.lastChild.textContent.replace(/\\u2212/g, '-'); return null; };
  const swinging = S.t < S.ts + 5;
`;
module.exports = {
  checks: [
    { name: "state stays finite, the twist is small and the clock never runs backwards", fn: `(() => { ${pre}
      if (![S.t, S.th, S.w].every(isFinite)) return 'state is NaN: ' + [S.t, S.th, S.w];
      if (Math.abs(S.th) > 0.01) return 'twist ' + S.th + ' rad is far beyond the model range';
      if (S.t < 0) return 'clock ' + S.t;
      for (let i = 1; i < S.trace.length; i++) if (!(S.trace[i][0] >= S.trace[i - 1][0])) return 'trace time goes backwards at ' + i;
      return true; })()` },
    { name: "readouts equal the state: clock, spot = 0.5 + 5 tan 2θ, twist, κ = 4π²·2ml²/T0², period", fn: `(() => { ${pre}
      if (S.run || S.blind) return true;
      const mrad = parseFloat(rd('Twist θ')), spot = parseFloat(rd('Spot on the scale')), kap = parseFloat(rd('Torsion constant κ'));
      if (Math.abs(mrad - S.th * 1000) > 6e-5) return 'twist shows ' + rd('Twist θ') + ', θ = ' + S.th * 1000 + ' mrad';
      if (Math.abs(spot - (0.5 + 5 * Math.tan(2 * S.th)) * 100) > 0.051) return 'spot shows ' + rd('Spot on the scale') + ', physics ' + (0.5 + 5 * Math.tan(2 * S.th)) * 100;
      const k = 4 * Math.PI ** 2 * 2 * 0.02 * 0.05 ** 2 / 360 ** 2 * 1e8; if (Math.abs(kap - k) > 6e-5) return 'κ shows ' + rd('Torsion constant κ') + ', should be ' + k;
      if (parseFloat(rd('Undamped period')) !== 360) return 'period ' + rd('Undamped period');
      if (parseFloat(rd('Clock t')) !== Math.round(S.t)) return 'clock shows ' + rd('Clock t') + ', t = ' + S.t;
      return true; })()` },
    { name: "resting spot: A 52.83 cm, B 47.17 cm, Away 50.00 cm", fn: `(() => { ${pre}
      if (S.run || S.blind || swinging) return true;
      const want = { A: 52.83, B: 47.17, away: 50.00 }[S.pos], got = parseFloat(rd('Resting spot here'));
      return Math.abs(got - want) <= 0.0051 ? true : 'resting spot at ' + S.pos + ' shows ' + rd('Resting spot here') + ', should be ' + want; })()` },
    { name: "settled at A or B for a long time: the spot has come to the resting spot", fn: `(() => { ${pre}
      if (S.run || S.blind || swinging || S.t - S.ts < 5000) return true;
      const want = parseFloat(rd('Resting spot here')), spot = (0.5 + 5 * Math.tan(2 * S.th)) * 100;
      return Math.abs(spot - want) < 0.3 ? true : 'after ' + (S.t - S.ts).toFixed(0) + ' s the spot is ' + spot.toFixed(2) + ' but rests at ' + want; })()` },
  ],
  steps: [
    { name: 'Swing A, B, Away, A again mid swing at the top speed, run to a turning point, reset', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), q = (s) => document.querySelector(s);
      q('#spdSeg [data-s]:last-child').click(); if (document.getElementById('go').textContent === 'Run') document.getElementById('go').click();
      for (const p of ['B', 'away', 'A', 'B', 'A', 'away', 'B']) { q('#posSeg [data-q=' + p + ']').click(); await pause(60); }
      document.getElementById('turn').click(); await pause(400); document.getElementById('turn').click(); await pause(300);
      window.__cav.advance(5000); window.__cav.toTurn(); window.__cav.swingTo('A'); window.__cav.advance(3);
      document.getElementById('restart').click(); await pause(200);
    })()` },
    { name: 'Drag a large sphere to an odd angle and let go, drag outside the canvas, double drag', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), C = window.__cav, can = document.getElementById('can'), r = can.getBoundingClientRect();
      for (let k = 0; k < 3; k++) {
        const [cx, cy] = C.centre(); let hit = null;
        for (let a = 0; a < 360 && !hit; a += 6) for (let d = 30; d < 200; d += 10) { const x = cx + d * Math.cos(a * Math.PI / 180), y = cy + d * Math.sin(a * Math.PI / 180); if (C.pick(r.left + x, r.top + y) >= 0) { hit = [x, y]; break; } }
        if (!hit) break;
        const send = (type, x, y, id) => can.dispatchEvent(new PointerEvent(type, { clientX: r.left + x, clientY: r.top + y, pointerId: id || 1, bubbles: true, button: 0, buttons: type === 'pointerup' ? 0 : 1 }));
        send('pointerdown', hit[0], hit[1]); send('pointerdown', hit[0], hit[1], 2);
        for (const [dx, dy] of [[0, -150], [-300, 0], [5, 5], [999, 999], [-999, -999]]) { send('pointermove', cx + dx, cy + dy); await pause(60); }
        send('pointerup', cx, cy - 50); await pause(200); window.__cav.advance(6);
      }
    })()` },
  ],
};
