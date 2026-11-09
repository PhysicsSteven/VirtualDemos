/* Known values for the break-it test (tools/breakit.cjs). While the function is x³ − 3x:
   the f′ curve is drawn through (0, −3) at any zoom or pan, and the readout's f′ equals 3x² − 3 at the point's x. */
const cubic = `document.getElementById('fx').value.replace(/\\s/g, '') === 'x^3-3x'`;
module.exports = {
  checks: [
    { name: "f′(0) of x³ − 3x is drawn at −3", fn: `(() => {
      const S = window.__fg && window.__fg.S, can = document.getElementById('can');
      if (!S || !(${cubic}) || !document.getElementById('showD1').checked || document.getElementById('ownScale')?.checked || S.blind) return true;
      const W = can.clientWidth, H = can.clientHeight, k = can.width / W;
      if (!(S.x0 < 0 && S.x1 > 0 && S.y0 < -3 && S.y1 > -3)) return true;
      const u = (0 - S.x0) / (S.x1 - S.x0) * W, v = H - (-3 - S.y0) / (S.y1 - S.y0) * H;
      if (u < 8 || u > W - 8 || v < 8 || v > H - 8) return true;
      /* f(0) = 0 and f″(0) = 0 are drawn at y = 0: when that is within 5 px of y = −3 the curves overlap, so f′ may be covered */
      if (Math.abs((H - (0 - S.y0) / (S.y1 - S.y0) * H) - v) < 5) return true;
      const t = document.createElement('canvas').getContext('2d'); t.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--fg-d1').trim();
      t.fillRect(0, 0, 1, 1); const [r, g, b] = t.getImageData(0, 0, 1, 1).data;
      const box = can.getContext('2d').getImageData(Math.round((u - 4) * k), Math.round((v - 4) * k), Math.round(9 * k), Math.round(9 * k)).data;
      for (let i = 0; i < box.length; i += 4) if (Math.abs(box[i] - r) + Math.abs(box[i + 1] - g) + Math.abs(box[i + 2] - b) < 60) return true;
      return 'no f′ colored pixel within 4 px of (0, −3); view x ' + S.x0.toPrecision(3) + ' to ' + S.x1.toPrecision(3) + ', y ' + S.y0.toPrecision(3) + ' to ' + S.y1.toPrecision(3);
    })()` },
    { name: 'readout f′ equals 3x² − 3', fn: `(() => {
      const S = window.__fg && window.__fg.S; if (!S || !(${cubic}) || S.blind) return true;
      const want = 3 * S.px * S.px - 3, row = [...document.querySelectorAll('#out div')].find((d) => /^f′\\(/.test(d.querySelector('dt').textContent));
      if (!row) return 'no f′ readout';
      const got = parseFloat(row.querySelector('dd').textContent.replace('−', '-').replace(/,/g, ''));
      return Math.abs(got - want) <= 1e-3 * Math.max(1, Math.abs(want)) ? true : 'readout says ' + got + ' at x = ' + S.px + ', should be ' + want;
    })()` },
  ],
};
