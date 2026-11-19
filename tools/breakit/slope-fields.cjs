/* Known values for the break-it test (tools/breakit.cjs), while the equation is Newton's cooling −0.1(y − 20) from (0, 90):
   the accurate curve is drawn through (10, 20 + 70/e) = (10, 45.7516) at any zoom or pan; with h = 5 to t = 30 the Euler readout is
   20 + 70·0.5⁶ = 21.0938 and the accurate one 23.4851; the equilibrium is 20, stable, whatever the view (when 20 is in it). */
const cool = `(() => { const S = window.__sf && window.__sf.S; if (!S) return false; const c = S.curves[S.curves.length - 1];
  return document.getElementById('fy').value.replace(/\\s/g, '') === '-0.1(y-20)' && c && c.t0 === 0 && c.y0 === 90; })()`;
module.exports = {
  checks: [
    { name: 'accurate curve drawn through (10, 45.7516)', fn: `(() => {
      const F = window.__sf, S = F && F.S, can = document.getElementById('can');
      if (!S || !(${cool}) || !document.getElementById('showExact').checked || S.blind) return true;
      const W = can.clientWidth, H = can.clientHeight, k = can.width / W, y = 20 + 70 * Math.exp(-1);
      const u = F.X(10), v = F.Y(y);
      if (!(u > 8 && v > 8 && v < H - 8) || u > W - 80) return true;
      const t = document.createElement('canvas').getContext('2d'); t.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--sf-exact').trim();
      t.fillRect(0, 0, 1, 1); const [r, g, b] = t.getImageData(0, 0, 1, 1).data;
      const box = can.getContext('2d').getImageData(Math.round((u - 4) * k), Math.round((v - 4) * k), Math.round(9 * k), Math.round(9 * k)).data;
      for (let i = 0; i < box.length; i += 4) if (Math.abs(box[i] - r) + Math.abs(box[i + 1] - g) + Math.abs(box[i + 2] - b) < 60) return true;
      return 'no accurate curve pixel within 4 px of (10, 45.75); view t ' + S.V.t0.toPrecision(3) + ' to ' + S.V.t1.toPrecision(3) + ', y ' + S.V.y0.toPrecision(3) + ' to ' + S.V.y1.toPrecision(3);
    })()` },
    { name: 'Euler 21.0938 and accurate 23.4851 at t = 30 with h = 5', fn: `(() => {
      const S = window.__sf && window.__sf.S; if (!S || !(${cool}) || S.h !== 5 || S.tEnd !== 30) return true;
      const R = window.__sf.run(); if (!R || R.n !== 6) return 'expected 6 steps, got ' + (R && R.n);
      if (Math.abs(R.y[6] - 21.09375) > 1e-12) return 'Euler end ' + R.y[6];
      if (Math.abs(R.exact[6] - (20 + 70 * Math.exp(-3))) > 1e-7) return 'accurate end ' + R.exact[6];
      const row = [...document.querySelectorAll('#out div')].find((d) => /Euler y there/.test(d.querySelector('dt').textContent));
      if (row && !/21\\.0938/.test(row.querySelector('dd').textContent)) return 'readout says ' + row.querySelector('dd').textContent;
      return true;
    })()` },
    { name: 'equilibrium of cooling is 20, stable', fn: `(() => {
      const S = window.__sf && window.__sf.S; if (!S || !(${cool}) || !(S.V.y0 < 20 && S.V.y1 > 20)) return true;
      const r = window.__sf.equilibriaNow(); if (!r) return 'no equilibria';
      const q = r.list.find((x) => Math.abs(x.y - 20) < 1e-9 * Math.max(1, S.V.y1 - S.V.y0));
      return q && q.kind === 'stable' ? true : 'equilibria ' + JSON.stringify(r.list);
    })()` },
  ],
};
