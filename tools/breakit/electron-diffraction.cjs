/* Known values for the break-it test (tools/breakit.cjs), electron-diffraction. Hook: window.__ed (S, delta, trueD, markD, ...).
   The voltage knob, the slider and its readout agree and stay in 2 to 5 kV; the true ring diameters equal an independent
   evaluation of de Broglie (relativistic) plus Bragg 2d sin(theta) = lambda plus the bulb geometry (graphite 0.213 and 0.123 nm,
   tube L = 125 mm, R = 65 mm), for the arc and the chord tool; the ratio of the ring sines is exactly 0.213/0.123; rings
   shrink as the voltage rises; the ruler and caliper readings are finite. */
const pre = `const E = window.__ed; if (!E) return true; const S = E.S;
  const ring = (V, d, tool, dl) => {
    const h = 6.62607015e-34, q = 1.602176634e-19, m = 9.1093837139e-31, c = 299792458, en = q * V;
    const lam = h / Math.sqrt(2 * m * en * (1 + en / (2 * m * c * c))), s = lam / (2 * d), tt = 2 * Math.asin(s), L = 125, R = 65, g = R - L;
    const al = [dl - tt, dl + tt].map((phi) => { const cp = Math.cos(phi), sp = Math.sin(phi), b = g * cp, t = -b + Math.sqrt(b * b - (g * g - R * R)); return Math.atan2(t * sp, g + t * cp); });
    return tool === 'arc' ? R * (al[1] - al[0]) : R * (Math.sin(al[1]) - Math.sin(al[0]));
  };
`;
module.exports = {
  checks: [
    { name: "voltage knob, slider and readout agree and stay between 2 and 5 kV", fn: `(() => { ${pre}
      if (!(S.V >= 2 && S.V <= 5)) return 'V = ' + S.V;
      const sl = document.getElementById('volt'); if (Math.abs(+sl.value - S.V) > 1e-9) return 'slider ' + sl.value + ', state ' + S.V;
      const t = document.getElementById('voltOut').textContent; if (t !== S.V.toFixed(2) + ' kV set') return 'readout "' + t + '", state ' + S.V;
      return true; })()` },
    { name: "true ring diameters equal de Broglie + Bragg + bulb geometry (arc and chord), ring 2 outside ring 1", fn: `(() => { ${pre}
      const dl = E.delta();
      for (const tool of ['arc', 'chord']) for (const [i, d] of [[0, 0.213e-9], [1, 0.123e-9]]) {
        const want = ring(S.V * 1000, d, tool, dl), got = E.trueD(i, tool);
        if (!isFinite(got) || Math.abs(got - want) > 1e-9 * Math.max(1, Math.abs(want))) return tool + ' D' + (i + 1) + ' = ' + got + ', independent value ' + want + ' mm at ' + S.V + ' kV';
      }
      return E.trueD(1, 'arc') > E.trueD(0, 'arc') ? true : 'outer ring is not wider than the inner';
    })()` },
    { name: "rings shrink as the voltage rises (centered beam, no magnet)", fn: `(() => { ${pre}
      let prev = Infinity; for (const kv of [2, 2.5, 3, 4, 5]) { const D = ring(kv * 1000, 0.213e-9, 'arc', 0); if (!(D < prev)) return 'D1 not decreasing at ' + kv + ' kV'; prev = D; }
      /* small angle: D is nearly proportional to lambda, so D(2 kV)/D(5 kV) is close to sqrt(5/2) = 1.58 */
      const r = ring(2000, 0.213e-9, 'arc', 0) / ring(5000, 0.213e-9, 'arc', 0); return Math.abs(r - Math.sqrt(2.5)) < 0.08 ? true : 'D(2 kV)/D(5 kV) = ' + r;
    })()` },
    { name: "your marked diameters are finite and the capture table has finite rows", fn: `(() => { ${pre}
      for (const tool of ['arc', 'chord']) for (const r of [1, 2]) { const v = E.markD(tool, r); if (!isFinite(v)) return 'markD ' + tool + ' ring ' + r + ' = ' + v; }
      for (const r of S.rows) if (![r.V, r.D1, r.D2].every((x) => isFinite(+x))) return 'row ' + JSON.stringify(r);
      return true; })()` },
  ],
  steps: [
    { name: 'presets (no sweep: the voltage stays where it is set), magnet to the neck and back with both poles, voltage to both ends', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      for (const b of document.querySelectorAll('#presets button')) { b.click(); await pause(250); }
      document.querySelector('#presets [data-p=magnet]').click(); await pause(200);
      for (const v of ['25', '26', '120', '60']) { set('mag', v); await pause(120); }
      for (const id of ['polS', 'polN']) { document.getElementById(id).click(); await pause(150); }
      for (const v of ['2', '5', '2', '3.5']) { set('volt', v); await pause(120); }
      if (document.getElementById('sweep')) return 'the Sweep V button is back (Steve 2026-11-10: no sweep)';
      document.querySelector('#presets [data-p=raise]').click(); await pause(1500);
      if (+document.getElementById('volt').value !== 3.5) return 'Raise the voltage: the knob moved by itself to ' + document.getElementById('volt').value + ' kV';
    })()` },
  ],
};
