/* Known values for the break-it test (tools/breakit.cjs), acoustic-levitation. Hook: window.__lev (S, PH, physics, C, ...).
   The readouts equal the physics of the current settings: wavelength 343.2 m/s / 40 kHz = 8.58 mm, ka = 2πa/λ, weight less
   buoyancy (ρp − ρ0)·(4/3)πa³·g, and the pressure amplitude scales with the drive voltage (0.300 Pa·m per volt). The radiation
   force is quadratic in the drive, so at the "Holds above" voltage F_max/W is exactly 1. Every trap and bead sits inside the computed
   axis. The checks allow the shown significant figures. */
const pre = `const L = window.__lev; if (!L || !L.PH) return true;
  const S = L.S, rd = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-'), near = (g, w, t) => Math.abs(g - w) <= t * Math.max(Math.abs(w), 1e-300);
  const num = (s) => { const m = s.match(/^(-?[\\d.]+(?:e[+-]?\\d+)?) (mN|µN|nN)/); return m ? parseFloat(m[1]) * { mN: 1e-3, 'µN': 1e-6, nN: 1e-9 }[m[2]] : NaN; };
`;
module.exports = {
  checks: [
    { name: "wavelength, ka and weight less buoyancy equal the physics of the settings", fn: `(() => { ${pre}
      const MATS = { eps: [30, 'foam'], water: [998, 'water'], steel: [7850, 'steel'] }, m = MATS[S.mat]; if (!m) return 'unknown material ' + S.mat;
      const C0 = 331.3 * Math.sqrt(1 + 20 / 273.15), lam = C0 / 40e3, a = S.a * 1e-3, rho0 = 101325 * 0.0289647 / (8.31446261815324 * 293.15);
      if (Math.abs(parseFloat(rd('rLam')) - lam * 1000) > 0.0051) return 'wavelength shows ' + rd('rLam') + ', ' + lam * 1000;
      if (Math.abs(parseFloat(rd('rKa')) - 2 * Math.PI * a / lam) > 0.0051) return 'ka shows ' + rd('rKa') + ', ' + 2 * Math.PI * a / lam;
      const W = (m[0] - rho0) * 4 / 3 * Math.PI * a ** 3 * 9.81, got = num(rd('rW'));
      if (!near(got, W, 6e-3)) return 'W shows ' + rd('rW') + ', physics gives ' + W + ' N';
      return true; })()` },
    { name: "pressure amplitude is 0.300 Pa·m per volt times the unit drive field (linear in V)", fn: `(() => { ${pre}
      const P = L.physics(); if (!(S.V > 0)) return P.pmax === 0 ? true : 'V = 0 but pmax = ' + P.pmax;
      const V0 = S.V; S.V = 2 * V0; const P2 = L.physics(); S.V = V0; L.physics();
      return near(P2.pmax, 2 * P.pmax, 1e-9) ? true : 'doubling the drive gave pmax ' + P.pmax + ' -> ' + P2.pmax; })()` },
    { name: "force is quadratic in the drive: at the Holds above voltage F_max/W = 1", fn: `(() => { ${pre}
      const P = L.physics(); if (!(S.V > 0) || P.need === null || !isFinite(P.need)) return true;
      const V0 = S.V; S.V = P.need; const Q = L.physics(); S.V = V0; L.physics();
      if (!near(Q.ratio, 1, 1e-6)) return 'at V = ' + P.need + ' the ratio F_max/W is ' + Q.ratio + ', not 1';
      if (!near(P.ratio, (V0 / P.need) ** 2, 1e-6)) return 'ratio ' + P.ratio + ' is not (V/V_need)² = ' + (V0 / P.need) ** 2;
      return true; })()` },
    { name: "readouts: Fmax/W and Holds above agree with the physics of the state", fn: `(() => { ${pre}
      const P = L.physics(), t = rd('rRatio'); if (!(S.V > 0)) return /falls/.test(t) ? true : 'V = 0 but "' + t + '"';
      if (!isFinite(P.ratio)) return true;
      const g = parseFloat(t); if (!near(g, P.ratio, 6e-3) && Math.abs(g - P.ratio) > 0.006) return 'ratio shows ' + t + ', physics ' + P.ratio;
      if (/holds/.test(t) !== (P.traps.length > 0)) return '"' + t + '" but there are ' + P.traps.length + ' traps';
      return true; })()` },
    { name: "every trap lies inside the computed axis and the beads stay on it", fn: `(() => { ${pre}
      const C = L.C; for (const t of L.PH.traps) if (!(t.z >= C.axis[0] && t.z <= C.axis[1]) || !isFinite(t.depth) || t.depth <= 0) return 'bad trap ' + JSON.stringify(t);
      for (const b of L.beads) if (!isFinite(b.z) || b.z < C.axis[0] - 1e-9 || b.z > C.axis[1] + 1e-9) return 'bead at z = ' + b.z;
      return true; })()` },
  ],
  steps: [
    { name: 'every preset, run, then max drive, zero drive, biggest and smallest bead, phase to both ends and back', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      for (const b of document.querySelectorAll('#presets [data-p]')) { b.click(); await pause(250); }
      document.querySelector('#presets [data-p=hold]').click(); await pause(200);
      for (const [id, vs] of [['drv', ['0', '20', '0.1', '20']], ['rad', ['0.2', '2.5', '0.75']], ['ph', ['-720', '720', '0']]]) for (const v of vs) { set(id, v); await pause(150); }
      for (const b of document.querySelectorAll('#mats button')) { b.click(); await pause(200); }
      document.querySelector('#presets [data-p=stack]').click(); await pause(300);
    })()` },
    { name: 'single emitter, drive to zero and back, switch to the levitator mid run', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#presets [data-p=single]').click(); await pause(300); set('drv', '0'); await pause(200); set('drv', '20'); await pause(300);
      document.querySelector('#presets [data-p=water]').click(); await pause(300);
    })()` },
  ],
};
