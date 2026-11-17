/* Known values for the break-it test (tools/breakit.cjs), comets. The checks recompute from first principles what the readouts show:
   Tails: the distance and speed from Kepler's equation and vis viva (μ = GMsun day²/au³ = 2.9591220e-4 au³/day², 1 au/day = 1731.4568 km/s),
   the period P = a^1.5 years in Kepler's units (a sidereal year at 1 au), q and Q from a and e, and the ion tail tilt atan of the
   comet's speed across the wind over the wind speed. Showers: the computed date's Sun longitude sits within 5° of the IMO peak, the
   radiant within 6°, and the entry speed is √(vg² + 11.19²). Everywhere: no NaN or Infinity in a readout. */
const MATH = `const MU = 1.3271244e20 * 86400 * 86400 / 149597870700 ** 3, KMS = 149597870700 / 86400 / 1000, D2R = Math.PI / 180;
  const num = (t) => { t = String(t).replace(/−/g, '-').replace(/,/g, ''); const m = t.match(/(-?[\\d.]+)(?:\\s*×\\s*10([⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+))?/); if (!m) return NaN; let x = parseFloat(m[1]); if (m[2]) x *= 10 ** parseInt(m[2].replace(/⁻/g, '-').replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (c) => '⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c)), 10); return x; };
  const dd = (label) => { for (const d of document.querySelectorAll('#out > div')) if (d.querySelector('dt').textContent.trim().startsWith(label)) return d.querySelector('dd').textContent; return null; };`;
module.exports = {
  checks: [
    { name: 'Tails: r, speed, q, Q, a and P agree with Kepler and vis viva for the comet on screen', fn: `(() => { ${MATH}
      const H = window.__cm; if (!H || H.S.mode !== 'tails' || !H.EL || H.S.run) return true;   /* while it runs the readouts refresh four times a second */
      const el = H.EL, s = H.planeState(el.a, el.e, H.S.t), r = Math.hypot(s.x, s.y), v = Math.sqrt(MU * (2 / r - 1 / el.a)) * KMS;
      const rr = num(dd('Distance from the Sun')), vv = num(dd('Speed')), q = num(dd('Closest q')), Q = num(dd('Farthest Q')), a = num(dd('Average distance'));
      if (Math.abs(rr - r) > 0.0006 + 1e-3 * r) return 'r reads ' + rr + ', should be ' + r;
      if (Math.abs(vv - v) > 0.06 + 1e-3 * v) return 'speed reads ' + vv + ', should be ' + v;
      if (Math.abs(q - el.a * (1 - el.e)) > 0.0006) return 'q reads ' + q;
      if (Math.abs(Q - el.a * (1 + el.e)) > 6e-4 * Q) return 'Q reads ' + Q;
      if (Math.abs(a - (q + Q) / 2) > 1e-3 * a) return 'a is not (q + Q)/2';
      const P = dd('Period'); if (P && !/hidden/.test(P)) { const p = num(P), want = 2 * Math.PI * Math.sqrt(el.a ** 3 / MU) / 365.25; if (Math.abs(p - want) > 0.006 * want) return 'P reads ' + p + ', should be ' + want; }
      return true; })()` },
    { name: 'Tails: the ion tail is tilted from straight out by atan(v across the wind / v wind)', fn: `(() => { ${MATH}
      const H = window.__cm; if (!H || H.S.mode !== 'tails' || !H.EL || H.S.run) return true;   /* while it runs the readouts refresh four times a second */
      const el = H.EL, s = H.planeState(el.a, el.e, H.S.t), r = Math.hypot(s.x, s.y), vw = H.S.wind / KMS;
      const vr = (s.x * s.vx + s.y * s.vy) / r, vt = Math.abs(s.x * s.vy - s.y * s.vx) / r, want = Math.atan2(vt, vw - vr) / D2R, got = num(dd('Ion tail from straight out'));
      return Math.abs(got - want) <= 0.06 ? true : 'tilt reads ' + got + '°, should be ' + want + '°'; })()` },
    { name: 'Showers: computed peak within 5° of Sun longitude of the IMO peak, entry speed √(vg² + vesc²) with vesc 11.19 km/s', fn: `(() => { ${MATH}
      const H = window.__cm; if (!H || H.S.mode !== 'shower' || !H.SH || !H.SH.c || H.S.blind || H.S.run) return true;
      const c = H.SH.c, ob = H.SH.s; let dl = Math.abs(c.lamSun - ob.lam); dl = Math.min(dl, 360 - dl); if (dl > 5) return 'peak ' + dl + '° from the observed';
      const vesc = Math.sqrt(2 * 3.986004e14 / 6.3710088e6) / 1000; if (Math.abs(c.vinf - Math.hypot(c.vg, vesc)) > 1e-9) return 'v∞ is not √(vg² + vesc²)';
      const shown = num(dd('Speed into the air (computed)')); if (Math.abs(shown - c.vinf) > 0.051) return 'speed reads ' + shown + ', should be ' + c.vinf;
      const cr = Math.sin(c.dec * D2R) * Math.sin(ob.dec * D2R) + Math.cos(c.dec * D2R) * Math.cos(ob.dec * D2R) * Math.cos((c.ra - ob.ra) * D2R), sp = Math.acos(Math.min(1, cr)) / D2R;
      return sp < 6 ? true : 'radiant ' + sp + '° from the observed'; })()` },
    { name: 'No NaN, Infinity or undefined in a readout', fn: `(() => { const t = document.getElementById('out').textContent; return /NaN|Infinity|undefined/.test(t) ? 'readout shows: ' + t.slice(0, 200) : true; })()` },
  ],
  steps: [
    { name: 'Tails: every setup, run each a while at the fastest time, then the slowest; Reset', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), H = window.__cm;
      H.setMode('tails'); for (const k of Object.keys(H.TPRE)) { H.applyPreset(k); H.setRun(true); for (let i = 0; i < 60; i++) H.stepTails(2); H.redraw(); await pause(40); H.setRun(false); }
      const sel = document.getElementById('selSpeed'); if (sel) for (const o of sel.options) { sel.value = o.value; sel.dispatchEvent(new Event('change', { bubbles: true })); await pause(30); }
      document.getElementById('restart').click(); H.redraw(); await pause(100); })()` },
    { name: 'Tails: wind speed and grain size to their limits while running', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), H = window.__cm; H.setMode('tails'); H.applyPreset('halley'); H.setRun(true);
      for (const el of document.querySelectorAll('#setupCard input[type=range]')) { for (const v of [el.min, el.max, el.min, (+el.min + +el.max) / 2]) { el.value = v; el.dispatchEvent(new Event('input', { bubbles: true })); for (let i = 0; i < 10; i++) H.stepTails(1); H.redraw(); await pause(20); } }
      H.setRun(false); await pause(60); })()` },
    { name: 'Showers: every setup, run through a year, drag to turn the view, then zoom in and out', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), H = window.__cm; H.setMode('shower');
      for (const k of Object.keys(H.SPRE)) { H.applyPreset(k); for (let i = 0; i < 80; i++) H.stepShower(5); H.redraw(); await pause(40); }
      const can = document.querySelector('canvas'), r = can.getBoundingClientRect();
      can.dispatchEvent(new PointerEvent('pointerdown', { clientX: r.left + r.width / 2, clientY: r.top + r.height / 2, bubbles: true, pointerId: 1 }));
      for (let i = 0; i < 10; i++) { can.dispatchEvent(new PointerEvent('pointermove', { clientX: r.left + r.width / 2 + i * 15, clientY: r.top + r.height / 2 + i * 6, bubbles: true, pointerId: 1, buttons: 1 })); await pause(15); }
      can.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, pointerId: 1 }));
      for (const id of ['zIn', 'zIn', 'zIn', 'zOut', 'zOut', 'zOut', 'zOut']) { const b = document.getElementById(id); if (b) { b.click(); await pause(30); } }
      H.applyPreset('perseids'); await pause(100); })()` },
  ],
};
