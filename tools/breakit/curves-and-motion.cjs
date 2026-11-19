/* Known values for the break-it test (tools/breakit.cjs), curves-and-motion. Hook: window.__cm (S, applyPreset, cmMotion, cmTicks, cmArea, GM_AU).
   Whatever is pressed, zoomed or typed: the readouts of speed and curvature equal those recomputed from the curve at the point;
   on Uniform circular motion with its boxes untouched, v = 6 m/s, a = v²/r = 18 m/s², a_T = 0 and κ = 0.5 per meter at every
   point; on an orbit, the acceleration is GM/r² toward the Sun and dA/dt is h/2. A step checks that the orbit's twelve equal
   time slices hold equal areas, πab/12 = 0.4712 au² for e = 0.6, q = 0.6 au. */
const pre = `const C = window.__cm; if (!C || !C.S.c) return true; const S = C.S;`;
const num = `(name) => { const row = [...document.querySelectorAll('#out div')].find((d) => d.querySelector('dt') && d.querySelector('dt').textContent.trim() === name);
  if (!row) return null; const t = row.querySelector('dd').textContent.replace(/−/g, '-').replace(/,/g, ''); const m = t.match(/(-?[0-9.]+)( × 10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+))?/); if (!m) return NaN;
  let v = parseFloat(m[1]); if (m[3]) { const e = parseInt(m[3].replace(/[⁻⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (c) => ({ '⁻': '-', '⁰': 0, '¹': 1, '²': 2, '³': 3, '⁴': 4, '⁵': 5, '⁶': 6, '⁷': 7, '⁸': 8, '⁹': 9 })[c]), 10); v *= Math.pow(10, e); } return v; }`;
module.exports = {
  checks: [
    { name: 'readouts of speed and curvature match the curve at the point', fn: `(() => { ${pre}
      if (S.run) return true; const M = C.cmMotion(S.c, S.u, S.tm); if (!M.ok) return true; const rd = ${num};
      const sp = rd('Speed |v|') ?? rd('Speed |dr/dθ|'); if (sp == null) return 'no speed readout';
      if (!(Math.abs(sp - M.speed) <= 1e-3 * Math.max(1e-9, Math.abs(M.speed)) + 1e-12)) return 'speed readout ' + sp + ', curve says ' + M.speed;
      if (!S.blind && !M.cusp) { const k = rd('Curvature κ'); if (k == null) return 'no curvature readout';
        if (!(Math.abs(k - M.kappa) <= 1e-3 * Math.abs(M.kappa) + 1e-12)) return 'κ readout ' + k + ', curve says ' + M.kappa; }
      return true; })()` },
    { name: 'uniform circular motion: v = 6, a = 18, a_T = 0, κ = 0.5 everywhere', fn: `(() => { ${pre}
      if (S.preset !== 'circle') return true; const M = C.cmMotion(S.c, S.u, S.tm);
      if (Math.abs(M.speed - 6) > 1e-9 || Math.abs(M.acc - 18) > 1e-9 || Math.abs(M.aT) > 1e-9 || Math.abs(M.kappa - 0.5) > 1e-12) return 'v ' + M.speed + ' a ' + M.acc + ' aT ' + M.aT + ' κ ' + M.kappa;
      return true; })()` },
    { name: 'orbits: a = GM/r² toward the Sun, dA/dt = h/2', fn: `(() => { ${pre}
      if (S.mode !== 'conic') return true; const M = C.cmMotion(S.c, S.u, S.tm), r = Math.hypot(M.P[0], M.P[1]);
      if (Math.abs(M.acc - C.GM_AU / (r * r)) > 1e-9 * M.acc) return '|a| ' + M.acc + ', GM/r² ' + C.GM_AU / (r * r);
      if (Math.abs(M.A[0] * M.P[1] - M.A[1] * M.P[0]) > 1e-9 * M.acc * r) return 'a not along r';
      if (Math.abs(0.5 * (M.P[0] * M.V[1] - M.P[1] * M.V[0]) - S.tm.h / 2) > 1e-9 * S.tm.h) return 'dA/dt not h/2';
      return true; })()` },
  ],
  steps: [
    { name: 'orbit e = 0.6, q = 0.6 au: twelve slices of equal time hold πab/12 each', fn: `(() => { const C = window.__cm; C.applyPreset('orbit'); const S = C.S;
      const tk = C.cmTicks(S.c, S.u0, S.u1, 12, S.tm), want = Math.PI * 1.5 * 1.2 / 12;
      for (let i = 0; i < 12; i++) { const a = C.cmArea(S.c, tk[i], tk[i + 1]); if (Math.abs(a - want) > 1e-7) throw new Error('slice ' + i + ' area ' + a + ', should be ' + want); }
      return true; })()` },
  ],
};
