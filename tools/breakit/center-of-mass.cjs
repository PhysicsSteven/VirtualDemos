/* Known values for the break-it test (tools/breakit.cjs), center-of-mass. Hook: window.__cm (S, upd, FW).
   Plate: the shown center of mass is the mass weighted mean of the masses in the state, and every mass stays on the plate.
   Firework: the explosion gives zero net momentum change (front f, back 1 - f weights), so the center of the pieces is the
   unexploded path until a piece lands; every landing time is finite and positive. Boat: the center of mass of person and boat
   stays where it started (-m L/2/(m + M)) at every time, and the shown predicted shift is -mL/(m + M) with L = 4.0 m. */
const pre = `const C = window.__cm; if (!C) return true; const S = C.S, rd = (label) => { for (const d of document.querySelectorAll('#out > div')) { const t = d.querySelector('dt'); if (t && t.textContent === label) return d.querySelector('dd').textContent.replace(/\\u2212/g, '-'); } return null; };
  const nums = (s) => (s || '').match(/-?\\d+(\\.\\d+)?/g).map(Number);
`;
module.exports = {
  checks: [
    { name: "plate: shown center of mass is the mass weighted mean; masses stay on the 1.0 m x 0.6 m plate", fn: `(() => { ${pre}
      if (S.mode !== 'plate') return true;
      for (const a of S.ms) if (!(a.m > 0) || !(a.x >= 0 && a.x <= 1 && a.y >= 0 && a.y <= 0.6)) return 'mass off the plate or not positive: ' + JSON.stringify(a);
      if (S.blind) return true;
      const M = S.ms.reduce((q, a) => q + a.m, 0), x = S.ms.reduce((q, a) => q + a.m * a.x, 0) / M, y = S.ms.reduce((q, a) => q + a.m * a.y, 0) / M;
      const got = nums(rd('Center of mass')); if (Math.abs(got[0] - x) > 5.1e-4 || Math.abs(got[1] - y) > 5.1e-4) return 'shows ' + rd('Center of mass') + ', mean is (' + x + ', ' + y + ')';
      if (Math.abs(nums(rd('Total mass'))[0] - M) > 0.051) return 'total mass ' + rd('Total mass') + ', sum ' + M;
      return true; })()` },
    { name: "firework: pieces carry the unexploded momentum; their center follows the whole path until one lands", fn: `(() => { ${pre}
      if (S.mode !== 'fire') return true;
      const F = C.FW(), f = S.ratio;
      if (!(F.a.tLand > 0 && F.b.tLand > 0 && isFinite(F.a.tLand) && isFinite(F.b.tLand))) return 'landing times ' + F.a.tLand + ', ' + F.b.tLand;
      if (Math.abs(f * F.a.vx + (1 - f) * F.b.vx - F.vx) > 1e-9 || Math.abs(f * F.a.vy + (1 - f) * F.b.vy) > 1e-9) return 'momentum changed in the explosion';
      const s = S.t - F.tTop; if (S.blind || s <= 0 || s >= Math.min(F.a.tLand, F.b.tLand)) return true;
      const cm = nums(rd('Center of mass of the pieces')), wh = nums(rd('Unexploded firework would be at'));
      if (Math.abs(cm[0] - wh[0]) > 0.0101 || Math.abs(cm[1] - wh[1]) > 0.0101) return 'center of the pieces ' + rd('Center of mass of the pieces') + ' but the unexploded firework is at ' + rd('Unexploded firework would be at');
      return true; })()` },
    { name: "firework: the mass weighted landing point is on the unexploded range once both land with no kick", fn: `(() => { ${pre}
      if (S.mode !== 'fire' || S.kick !== 0 || S.blind) return true;
      const F = C.FW(), r = F.whole(F.tWhole).x;
      if (Math.abs(F.at(F.a, F.a.tLand).x - r) > 1e-9 || Math.abs(F.at(F.b, F.b.tLand).x - r) > 1e-9) return 'with no kick both pieces should land at ' + r;
      return true; })()` },
    { name: "boat: center of mass stays at its start; the boat ends moved by -mL/(m + M)", fn: `(() => { ${pre}
      if (S.mode !== 'boat' || S.blind) return true;
      const cm = nums(rd('Center of mass (person + boat)'))[0], cm0 = -S.pm * 2 / (S.pm + S.bm) /* person at the back end, 2.0 m behind the boat's center */; if (Math.abs(cm - cm0) > 5.1e-4) return 'center of mass moved to ' + rd('Center of mass (person + boat)') + ', it starts at ' + cm0;
      const want = -S.pm * 4 / (S.pm + S.bm), got = nums(rd('Predicted boat shift \\u2212mL/(m + M)'))[0] * (/-/.test(rd('Predicted boat shift \\u2212mL/(m + M)')) ? 1 : 1);
      if (Math.abs(got - want) > 5.1e-4) return 'predicted shift ' + rd('Predicted boat shift \\u2212mL/(m + M)') + ', physics ' + want;
      if (S.t >= 4.0 && Math.abs(nums(rd('Boat has moved'))[0] - want) > 5.1e-4) return 'boat moved ' + rd('Boat has moved') + ', want ' + want;
      return true; })()` },
    { name: "plate bounded by curves: the shown balance point is M_y/M, M_x/M of the plate; known semicircle, triangle and parabola values; the tilt stays within 30 degrees", fn: `(() => { ${pre}
      if (S.mode !== 'lamina') return true; const L = C.L, n = C.lamNow();
      if (!(L.th >= 0 && L.th <= Math.PI / 6 + 1e-9)) return 'tilt ' + L.th;
      if (!(n.E.A > 0)) return 'plate area ' + n.E.A;
      if (S.blind) return rd('Balance point from the strips') === null ? true : 'Blind shows the balance point';
      const t = rd('x̄ = My/M, ȳ = Mx/M'); if (!t) return 'no balance point readout'; const got = nums(t);
      if ( Math.abs(got[0] - n.E.xbar) > 6e-5 || Math.abs(got[1] - n.E.ybar) > 6e-5) return 'shows ' + JSON.stringify(got) + ', integrals give ' + n.E.xbar + ', ' + n.E.ybar;
      const known = { 'sqrt(0.09 - x^2)|0|-0.3|0.3': [0, 0.4 / Math.PI], '0.4(1 - x/0.6)|0|0|0.6': [0.2, 0.4 / 3], 'x|x^2|0|1': [0.5, 0.4] }[[L.fT, L.gT, L.aT, L.bT].join('|')];
      if (known && (Math.abs(n.E.xbar - known[0]) > 1e-9 || Math.abs(n.E.ybar - known[1]) > 1e-9)) return 'known balance point ' + known + ', got ' + n.E.xbar + ', ' + n.E.ybar;
      if (L.verdict === 'balances' && C.pinTip(L.px, L.py).d > 0.001 + 1e-12) return 'says it balances with the pin ' + C.pinTip(L.px, L.py).d + ' m away';
      return true; })()` },
  ],
  steps: [
    { name: 'firework: run to the end at extreme kick, then boat with extreme masses, then back to the plate with all four masses on one point', fn: `(async () => {
      const C = window.__cm, pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      const mode = (m) => document.querySelector('#modeSeg [data-m=' + m + ']').click();
      mode('fire'); set('sKick', 1e9); set('sAng', -90); set('sRatio', 0); await pause(100); document.getElementById('go').click(); await pause(600); set('sRatio', 1); set('sKick', 0); await pause(300);
      mode('boat'); set('sPm', 120); set('sBm', 20); document.getElementById('go').click(); await pause(1500); set('sPm', 20); set('sBm', 400); await pause(300);
      mode('plate'); for (let i = 0; i < 4; i++) document.getElementById('addM').click();
      for (const a of C.S.ms) { a.x = 0.5; a.y = 0.3; } C.upd(); await pause(200);
      for (let i = 0; i < 6; i++) document.getElementById('delM').click(); await pause(200);
      mode('fire');
    })()` },
    { name: 'plate bounded by curves: every shape, 1 and 60 strips, Pappus about both axes, nonsense typed, a far pin, release, balance', fn: `(async () => {
      const C = window.__cm, pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#modeSeg [data-m=lamina]').click(); await pause(150);
      for (const k of ['semi', 'tri', 'between']) { C.lamPreset(k); set('sStrips', 1); await pause(120); set('sStrips', 60); await pause(120); document.getElementById('lamPappus').click(); await pause(120);
        document.querySelector('#axisSeg [data-a=y]').click(); await pause(120); document.querySelector('#axisSeg [data-a=x]').click(); document.getElementById('lamPappus').click(); }
      set('lamF', 'sin(x'); set('lamF', ')x('); set('lamF', '1/x'); set('lamA', '-1'); set('lamB', '1'); set('lamF', '1e300 x'); set('lamB', 'abc'); set('lamF', 'exp(x)'); set('lamG', '-exp(x)'); set('lamA', '-2'); set('lamB', '2'); await pause(200);
      C.lamPinTo(1e9, -1e9); document.getElementById('go').click(); await pause(1500);
      C.lamPreset('between'); C.lamPinTo(0.5, 0.4); document.getElementById('go').click(); await pause(300);
      C.lamPreset('semi'); set('sStrips', 8);
    })()` },
  ],
};
