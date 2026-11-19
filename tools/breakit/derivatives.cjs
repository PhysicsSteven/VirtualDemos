/* Known values for the break-it test (tools/breakit.cjs). While the function is x³ − 3x:
   the f′ curve is drawn through (0, −3) at any zoom or pan, and the readout's f′ equals 3x² − 3 at the point's x. In Secant to
   tangent the secant slope readout is [f(x + h) − f(x)]/h; in Newton's method every step is x − f(x)/f′(x), and a settled root
   has f = 0 to rounding. Steps: √2 from 1, −4π from 1.5 for sin x, the cycle of x³ − 2x + 2 from 0, the MVT points ±2/√3, and the rows Record reading
   gives for the worksheet derivatives-reading-graphs (the dropped ball, the damped oscillation, the average velocity). */
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
    { name: 'secant slope readout is the difference quotient', fn: `(() => {
      const F = window.__fg, S = F && F.S; if (!S || S.mode !== 'secant' || S.blind || !S.fns) return true;
      const want = F.diffQuot(S.fns.f, S.px, S.h); if (!isFinite(want)) return true;
      const row = [...document.querySelectorAll('#toolOut div')][2]; if (!row) return 'no secant slope readout';
      const got = parseFloat(row.querySelector('dd').textContent.replace(/−/g, '-').replace(/,/g, ''));
      return Math.abs(got - want) <= 1e-3 * Math.max(1, Math.abs(want)) ? true : 'readout ' + got + ', [f(x + h) − f(x)]/h = ' + want;
    })()` },
    { name: "every Newton step is x − f/f′, and a settled root has f = 0", fn: `(() => {
      const F = window.__fg, S = F && F.S; if (!S || S.mode !== 'newton' || !S.fns) return true;
      const f = S.fns.f, d = S.fns.d1, xs = F.nwRun().xs;
      for (let k = 1; k < xs.length; k++) { const w = xs[k - 1] - f(xs[k - 1]) / d(xs[k - 1]); if (w !== xs[k]) return 'step ' + k + ' is ' + xs[k] + ', should be ' + w; }
      const r = F.newtonRoot(f, d, S.px); if (!isFinite(r)) return true;
      const sc = Math.abs(d(r)) * Math.max(1, Math.abs(r)) * 1e-13 + 1e-300;
      return Math.abs(f(r)) <= Math.max(sc, 1e-12) ? true : 'root ' + r + ' has f = ' + f(r);
    })()` },
  ],
  steps: [
    { name: 'Newton from 1 on x² − 2 settles on √2', fn: `(() => { const F = window.__fg; F.applyPreset('nwSqrt'); let k = 0; while (F.nwStep() && k < 50) k++; F.nwStep(); const xs = F.nwRun().xs, x = xs[xs.length - 1]; return Math.abs(x - Math.SQRT2) <= 2 * Number.EPSILON ? true : 'ended at ' + x; })()` },
    { name: 'Newton from 1.5 on sin x jumps to −4π', fn: `(() => { const F = window.__fg; F.applyPreset('nwJump'); const S = F.S, r = F.newtonRoot(S.fns.f, S.fns.d1, S.px); return Math.abs(r + 4 * Math.PI) < 1e-12 ? true : 'root ' + r; })()` },
    { name: 'Newton from 0 on x³ − 2x + 2 cycles', fn: `(() => { const F = window.__fg; F.applyPreset('nwCycle'); for (let k = 0; k < 10; k++) F.nwStep(); const r = F.nwRun(); return r.stop === 'cycle' ? true : 'stop ' + r.stop + ' after ' + r.xs.join(', '); })()` },
    { name: 'MVT on x³ − 3x from −2 to 2: c = ±2/√3', fn: `(() => { const F = window.__fg; F.applyPreset('mvt'); const S = F.S, m = F.diffQuot(S.fns.f, S.px, S.h), c = F.mvtPoints(S.fns.d1, S.px, S.px + S.h, m); return c.length === 2 && Math.abs(c[0] + 2 / Math.sqrt(3)) < 1e-12 && Math.abs(c[1] - 2 / Math.sqrt(3)) < 1e-12 ? true : 'c = ' + c.join(', '); })()` },
    { name: 'Record reading: the dropped ball at t = 1.5 s and the damped oscillation obey a = −9.81 and f″ = −16.09f − 0.6f′', fn: `(() => {
      const F = window.__fg, S = F.S; F.setMode('graph'); F.applyPreset('drop'); S.px = 1.5; let r = window.vdReadingRow();
      if (r.f !== 8.96375 || r.d1 !== -14.715 || r.d2 !== -9.81) return 'drop row ' + JSON.stringify(r);
      F.applyPreset('damped'); for (const t of [0, 0.4, 1.2]) { S.px = t; r = window.vdReadingRow(); const res = r.d2 + 16.09 * r.f + 0.6 * r.d1;
        if (Math.abs(res) > 1e-5) return 'damped row at t = ' + t + ': f″ + 16.09f + 0.6f′ = ' + res; }
      F.applyPreset('dropAvg'); r = window.vdReadingRow(); return r.secant === -12.2625 && r.tangent === -9.81 ? true : 'secant row ' + JSON.stringify(r); })()` },
  ],
};
