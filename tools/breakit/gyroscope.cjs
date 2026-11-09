/* Known values for the break-it test (tools/breakit.cjs), gyroscope. The demo has no debug hook, so these read the Readouts list
   (#out, dt/dd pairs) and the sliders. With the wheel known (not Mystery, not Blind): I_s = k M R² (k = 1/2 disk, 0.905 rim,
   M = 0.5 kg, R = 0.06 m), the spin readout is rpm·2π/60, the predicted rate is Mgd/(I_s ω_s) and the predicted period is 2π/Ω,
   all from the slider settings. The torque readout is M g d sin θ with θ the readout tilt from the upward vertical. */
const rd = `const out = document.getElementById('out'); if (!out) return true;
  const row = {}; out.querySelectorAll('div').forEach((d) => { const t = d.querySelector('dt'), v = d.querySelector('dd'); if (t && v) row[t.textContent.trim()] = v.textContent.trim(); });
  const num = (s) => parseFloat(String(s).replace(/\\u2212/g, '-').replace(/\\s*×\\s*10/, 'e').replace(/[⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+/, (m) => { const D = '⁰¹²³⁴⁵⁶⁷⁸⁹'; return (m[0] === '⁻' ? '-' : '') + [...m].filter((c) => c !== '⁻').map((c) => D.indexOf(c)).join(''); }));
  const near = (a, b, tol) => Math.abs(a - b) <= tol * Math.max(Math.abs(b), 1e-12);
  const rpm = +document.getElementById('sW').value, d = +document.getElementById('sD').value;
  const known = !document.getElementById('mystery').checked && !document.querySelector('#labBlind')?.checked && row['I_s about the axle'];
  const kk = (document.querySelector('#wheelSeg [aria-pressed=true]') || {dataset:{}}).dataset.w === 'rim' ? 0.905 : 0.5;
`;
module.exports = {
  checks: [
    { name: "spin readout equals the slider rpm in rad/s", fn: `(() => { ${rd}
      const w = num(row['Spin ω_s']); if (!isFinite(w)) return true;
      return near(w, rpm * 2 * Math.PI / 60, 6e-3) || Math.abs(w - rpm * 2 * Math.PI / 60) < 0.06 ? true : 'spin readout ' + row['Spin ω_s'] + ' but the slider says ' + rpm + ' rpm'; })()` },
    { name: "I_s, predicted rate and period come from M, R, d and the spin", fn: `(() => { ${rd}
      if (!known) return true;
      const Is = kk * 0.5 * 0.06 ** 2, w = rpm * 2 * Math.PI / 60;
      if (!near(num(row['I_s about the axle']), Is, 3e-3)) return 'I_s shows ' + row['I_s about the axle'] + ', k M R² = ' + Is;
      if (rpm > 0) {
        const W = 0.5 * 9.81 * d / (Is * w);
        if (!near(num(row['Predicted Ω = Mgd/(I_s ω_s)']), W, 2e-3) && Math.abs(num(row['Predicted Ω = Mgd/(I_s ω_s)']) - W) > 6e-4) return 'predicted Ω shows ' + row['Predicted Ω = Mgd/(I_s ω_s)'] + ', Mgd/(I_s ω_s) = ' + W;
        if (!near(num(row['Predicted period 2π/Ω']), 2 * Math.PI / W, 2e-3) && Math.abs(num(row['Predicted period 2π/Ω']) - 2 * Math.PI / W) > 6e-3) return 'predicted period shows ' + row['Predicted period 2π/Ω'] + ', 2π/Ω = ' + 2 * Math.PI / W;
      }
      return true; })()` },
    { name: "torque readout is Mgd sin θ for the tilt shown", fn: `(() => { ${rd}
      const tq = num(row['Torque Mgd sin θ']), tilt = num(row['Axle tilt now']); if (!isFinite(tq) || !isFinite(tilt)) return true;
      const want = 0.5 * 9.81 * d * Math.cos(tilt * Math.PI / 180) * 1000;
      return Math.abs(tq - want) <= 0.06 + 2e-3 * Math.abs(want) + Math.abs(want) * 0.0175 * 0.005 * 0 ? true : 'torque ' + row['Torque Mgd sin θ'] + ' but at tilt ' + row['Axle tilt now'] + ' and d = ' + d + ' it is ' + want.toFixed(2) + ' mN·m'; })()` },
  ],
  steps: [
    { name: 'release, then change spin to 0 and 6000, d to extremes and mystery on and off while running', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#presets [data-p=fast]').click(); document.getElementById('go').click(); await pause(500);
      for (const [id, v] of [['sW', 0], ['sW', 6000], ['sD', 0.05], ['sD', 0.2], ['sW', 100], ['sB', 30], ['sB', -30], ['sF', 40]]) { set(id, v); await pause(400); }
      const m = document.getElementById('mystery'); m.click(); await pause(300); m.click(); await pause(300);
    })()` },
    { name: 'friction presets run to the end (axle stands up or falls), then another preset and Reset', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      for (const p of ['rise', 'sink', 'none', 'smooth', 'slow']) { document.querySelector('#presets [data-p=' + p + ']').click(); const g = document.getElementById('go'); if (g.getAttribute('aria-pressed') !== 'true') g.click(); await pause(1200); }
      const s = document.getElementById('slowmo'); if (s) s.click(); await pause(300); document.getElementById('back').click(); await pause(300);
    })()` },
  ],
};
