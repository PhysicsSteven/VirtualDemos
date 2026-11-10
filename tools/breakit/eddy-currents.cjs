/* Known values for the break-it test (tools/breakit.cjs), eddy-currents. Hook: window.__ed (S, tFall, readouts).
   The rail readouts (not in Blind) equal the physics worked out again from the three sliders: conductivity σ(T) of copper and aluminum
   (59.6 and 37.7 MS/m at 20 °C, ρ up 7.2 and 8 times at −196 °C), drag constant k = 45 μ0² m² σ w / (1024 a⁴) with a = 9.5 mm + w/2,
   terminal speed v_T = M g / k, predicted time to fall 1 m; the plastic pipe is free fall (σ = 0, k = 0, t = √(2L/g), no heat).
   The measured fall time solves y(t) = 1 m exactly, is longer than free fall for a metal, and the heat is M g L − ½ M v² ≥ 0. */
const pre = `const E = window.__ed; if (!E) return true;
  const S = E.S, G = 9.81, MU0 = 1.25663706127e-6, M = 0.0122, L = 1.0;
  const cells = [...document.querySelectorAll('#out .dd')].map((d) => d.textContent.replace(/\\u2212/g, '-'));
  const rowOf = (i) => cells.slice(3 * i, 3 * i + 3);
  const sig = (id, T) => { const s20 = id === 'cu' ? 5.96e7 : 3.77e7, al = id === 'cu' ? 0.00393 : 0.00429, lin = (t) => s20 / (1 + al * (t - 20));
    if (T >= -50) return lin(T); const cold = s20 * (id === 'cu' ? 7.2 : 8), f = (T + 196) / 146, r50 = 1 / lin(-50), rc = 1 / cold; return 1 / (rc + (r50 - rc) * f); };
  const a = 0.0095 + S.w / 2000, kOf = (s) => 45 * MU0 * MU0 * S.m * S.m * s * (S.w / 1000) / (1024 * a ** 4);
  const sigs = [sig('cu', S.T), sig('al', S.T), 0], ks = sigs.map(kOf);
  const tOf = (k) => { if (k <= 0) return Math.sqrt(2 * L / G); const tau = M / k, vT = G * tau; let lo = 0, hi = 1e4; for (let i = 0; i < 200; i++) { const m = (lo + hi) / 2; if (vT * (m - tau * (1 - Math.exp(-m / tau))) < L) lo = m; else hi = m; } return (lo + hi) / 2; };
`;
module.exports = {
  checks: [
    { name: "readouts: σ, k, v_T and predicted time equal the physics of the three sliders", fn: `(() => { ${pre}
      if (S.blind) return true;
      if (cells.length < 18) return 'only ' + cells.length + ' readout cells';
      const sg = rowOf(0), kk = rowOf(2), vt = rowOf(3), pt = rowOf(4), names = ['copper', 'aluminum', 'plastic'];
      for (let i = 0; i < 3; i++) {
        if (Math.abs(parseFloat(sg[i]) - sigs[i] / 1e6) > 0.0501) return names[i] + ' σ shows ' + sg[i] + ', physics ' + sigs[i] / 1e6;
        if (Math.abs(parseFloat(kk[i]) - ks[i]) > 0.00051) return names[i] + ' k shows ' + kk[i] + ', physics ' + ks[i];
        if (ks[i] > 0 && Math.abs(parseFloat(vt[i]) - M * G / ks[i] * 100) > 0.0501) return names[i] + ' v_T shows ' + vt[i] + ' cm/s, physics ' + M * G / ks[i] * 100;
        if (ks[i] === 0 && vt[i] !== '∞') return 'plastic v_T shows ' + vt[i];
        if (Math.abs(parseFloat(pt[i]) - tOf(ks[i])) > 0.00501) return names[i] + ' predicted time shows ' + pt[i] + ', physics ' + tOf(ks[i]);
      }
      return true; })()` },
    { name: "plastic pipe is free fall: σ = 0, t = √(2L/g) = 0.45 s, no heat; metals are slower", fn: `(() => { ${pre}
      const tf = E.tFall(), free = Math.sqrt(2 * L / G);
      if (!isFinite(tf[0]) || !isFinite(tf[1]) || !isFinite(tf[2])) return 'a fall time is ' + tf;
      if (Math.abs(tf[2] - free) > 1e-12) return 'plastic fall time ' + tf[2] + ', free fall ' + free;
      for (let i = 0; i < 3; i++) if (Math.abs(tf[i] - tOf(ks[i])) > 1e-9) return 'tFall[' + i + '] = ' + tf[i] + ', physics ' + tOf(ks[i]);
      if (tf[0] < free || tf[1] < free) return 'a metal pipe falls faster than free fall';
      if (S.blind) return true;
      const heat = rowOf(5); if (Math.abs(parseFloat(heat[2])) > 1e-9) return 'plastic heat shows ' + heat[2];
      for (let i = 0; i < 2; i++) { const tau = M / ks[i], v = G * tau * (1 - Math.exp(-tf[i] / tau)), Q = (M * G * L - 0.5 * M * v * v) * 1000;
        if (Q < 0 || Math.abs(parseFloat(heat[i]) - Q) > 0.0501) return 'heat shows ' + heat[i] + ' mJ, M g L − ½Mv² = ' + Q; }
      return true; })()` },
    { name: "conductivity limits: copper 59.6 and aluminum 37.7 MS/m at 20 °C; colder is more conductive", fn: `(() => { ${pre}
      if (Math.abs(sig('cu', 20) - 5.96e7) > 1 || Math.abs(sig('al', 20) - 3.77e7) > 1) return 'σ(20 °C) off';
      if (Math.abs(sig('cu', -196) / 5.96e7 - 7.2) > 1e-9 || Math.abs(sig('al', -196) / 3.77e7 - 8) > 1e-9) return 'σ(−196 °C) ratio off';
      if (!(sigs[0] > 0 && sigs[1] > 0)) return 'non positive σ';
      if (S.blind) return true;
      const sg = rowOf(0); if (S.T === 20 && (sg[0] !== '59.6' || sg[1] !== '37.7' || sg[2] !== '0.0')) return 'σ at 20 °C shows ' + sg; 
      return true; })()` },
    { name: "the clock equals the simulated time; the sliders and their outputs equal the state", fn: `(() => { ${pre}
      const clk = document.getElementById('clock').textContent.replace(/\\u2212/g, '-');
      if (!/^t = [\\d.]+ s$/.test(clk)) return 'clock reads ' + clk;
      if (!S.run && Math.abs(parseFloat(clk.slice(4)) - S.t) > 0.0051) return 'clock ' + clk + ', S.t = ' + S.t;
      const o = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-');
      if (!isFinite(S.m + S.w + S.T + S.t)) return 'NaN in state';
      if (Math.abs(parseFloat(o('oM')) - S.m) > 0.0051 || Math.abs(parseFloat(o('oW')) - S.w) > 0.051 || parseFloat(o('oT')) !== S.T) return 'slider outputs ' + o('oM') + ' ' + o('oW') + ' ' + o('oT') + ' vs state ' + S.m + ' ' + S.w + ' ' + S.T;
      return true; })()` },
  ],
  steps: [
    { name: 'drop, change every slider mid fall, finish, drop again, reset mid fall', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      const set = (id, v) => { $(id).value = v; $(id).dispatchEvent(new Event('input', { bubbles: true })); };
      $('drop').click(); await pause(200); set('sT', -196); set('sM', 2); set('sW', 3); $('drop').click(); await pause(1500);
      set('sM', 0.2); set('sW', 0.5); set('sT', 100); $('drop').click(); await pause(2500); $('drop').click(); await pause(300);
      $('drop').click(); await pause(300); $('again').click(); await pause(200);
    })()` },
  ],
};
