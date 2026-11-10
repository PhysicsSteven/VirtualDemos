/* Known values for the break-it test (tools/breakit.cjs), e-over-m. Hook: window.__em (S, getTrace, meters, rowCalc, coilA, core).
   The beam is a circle of radius r = sqrt(2V/(e/m))/B (cos of the tube rotation for a helix) with B the Helmholtz center field
   B = (4/5)^1.5 mu0 N I / a: exact for the uniform field, within a few percent for the computed coil field; the 3D coil
   field equals the Helmholtz center value on the axis and a numerical Biot-Savart sum off it; the meters, B, and the table's e/m
   equal the physics of the settings; the presets sit at the settings their hints give (150 V, 1.5 A is about 3.7 cm). */
const pre = `const M = window.__em; if (!M || !M.core) return true; const S = M.S, C = M.core, rd = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-');
  const near = (a, b, t) => Math.abs(a - b) <= t * Math.max(Math.abs(b), 1e-300);
`;
module.exports = {
  checks: [
    { name: "beam radius r = sqrt(2V/(e/m))/B: exact for the uniform field, a few percent for the coil field, e/m recovered", fn: `(() => { ${pre}
      const t = M.getTrace(); if (!t.planar && !S.uniform) return true;
      if (t.hit || t.xR === null || t.xL === null || S.I === 0) return true;
      const B = Math.abs(C.bCenter(C.N_TURNS, S.I, C.A_TRUE) + (S.earth || 0) * 2e-5), th = S.tilt * Math.PI / 180;
      const rth = Math.cos(th) * C.radiusUniform(S.V, B), tol = S.uniform ? 2e-3 : 0.04;
      if (!near(t.xR, rth, tol)) return 'right edge at ' + (t.xR * 100).toFixed(3) + ' cm, r = ' + (rth * 100).toFixed(3) + ' cm (V ' + S.V + ', I ' + S.I + ', tilt ' + S.tilt + ')';
      if (S.uniform && !near(-t.xL, rth, tol)) return 'left edge at ' + (t.xL * 100).toFixed(3) + ' cm, r = ' + (rth * 100).toFixed(3) + ' cm';
      if (S.uniform && S.tilt === 0 && !near(C.emFrom(S.V, B, t.xR), C.EM, 4e-3)) return 'e/m from the beam is ' + C.emFrom(S.V, B, t.xR) + ', accepted ' + C.EM;
      return true; })()` },
    { name: "coil field: the Helmholtz center value, and the elliptic integral formula against a Biot-Savart sum", fn: `(() => { ${pre}
      if (window.__emField) return true; window.__emField = 1;
      const I = 1.7, a = C.A_TRUE, N = C.N_TURNS, c = C.coilField([0, 0, 0], I, a, N), want = C.bCenter(N, I, a);
      if (!near(c[1], -want, 1e-9) || Math.abs(c[0]) > 1e-12 * want || Math.abs(c[2]) > 1e-12 * want) return 'center field ' + c.join(',') + ', Helmholtz ' + want;
      for (const p of [[0.03, 0.02, -0.02], [0.05, -0.06, 0.01], [0, 0.04, 0.045], [0.01, 0, 0.1]]) {
        const f = C.coilField(p, I, a, N), g = C.coilFieldNumeric(p, I, a, N, 4000);
        for (let k = 0; k < 3; k++) if (Math.abs(f[k] - g[k]) > 2e-4 * Math.hypot(g[0], g[1], g[2])) return 'field at ' + p + ' is ' + f + ' but Biot-Savart gives ' + g; }
      return true; })()` },
    { name: "readouts: meters, B at the center, constants and the table's e/m equal the physics", fn: `(() => { ${pre}
      const [sv, si] = M.meters(), a = M.coilA();
      if (!(Math.abs(sv - S.V) <= 0.36) || !(Math.abs(si - S.I) <= 0.0035 + 1e-9)) return 'meters show ' + sv + ' V, ' + si + ' A for ' + S.V + ' V, ' + S.I + ' A';
      if (rd('vOut') !== S.V + ' V' || rd('iOut') !== S.I.toFixed(2) + ' A') return 'slider outputs ' + rd('vOut') + ', ' + rd('iOut');
      if (isFinite(a)) {
        if (rd('bOut') !== (C.bCenter(C.N_TURNS, si, a) * 1e3).toFixed(3) + ' mT') return 'B shows ' + rd('bOut') + ', physics ' + (C.bCenter(C.N_TURNS, si, a) * 1e3).toFixed(3);
        if (rd('aOut') !== (a * 100).toFixed(2) + ' cm') return 'a shows ' + rd('aOut');
        if (rd('kOut') !== (C.bCenter(C.N_TURNS, 1, a) * 1e4).toFixed(3) + '×10⁻⁴ T/A') return 'k shows ' + rd('kOut'); }
      if (Math.abs(C.EM - 1.75882000838e11) > 1 || Math.abs(C.speed(100) - Math.sqrt(2 * 1.75882000838e11 * 100)) > 1) return 'e/m constant';
      const cells = [...document.querySelectorAll('#tbl tbody tr')]; const rows = S.rows;
      for (let i = 0; i < rows.length && i < cells.length; i++) { const q = M.rowCalc(rows[i]), td = cells[i].querySelector('td.b'); if (!td) continue;
        const want = q.ok ? (q.em / 1e11).toFixed(3) : '—'; if (td.textContent !== want) return 'row ' + (i + 1) + ' e/m shows ' + td.textContent + ', physics ' + want; }
      return true; })()` },
    { name: "presets sit at their settings, and 150 V, 1.5 A closes into a circle about 3.7 cm in radius", fn: `(() => { ${pre}
      const want = { rest: [190, 0, 0], circle: [150, 1.5, 0], morev: [200, 1.5, 0], morei: [150, 2, 0], helix: [150, 1.5, 12], measure: [120, 1.4, 0] }[S.preset];
      if (!want || S.V !== want[0] || S.I !== want[1] || S.tilt !== want[2]) return true;
      if (S.preset === 'circle') { const r = C.radiusUniform(150, C.bCenter(C.N_TURNS, 1.5, C.A_TRUE)) * 100; if (r < 3.65 || r > 3.75) return 'r at 150 V, 1.5 A is ' + r.toFixed(3) + ' cm, the hint says about 3.7'; }
      if (S.preset === 'morev' && !near(C.radiusUniform(200, 1) / C.radiusUniform(150, 1), Math.sqrt(200 / 150), 1e-12)) return 'r does not grow as sqrt V';
      return true; })()` },
  ],
  steps: [
    { name: 'every preset, then V and I and the tube rotation to their limits and back, eye to the extremes, record readings', fn: `(async () => {
      const M = window.__em, pause = (ms) => new Promise((r) => setTimeout(r, ms));
      for (const p of ['rest', 'circle', 'morev', 'morei', 'helix', 'measure']) { M.applyPreset(p); await pause(150); }
      for (const [v, i, t] of [[100, 3.5, 30], [200, 3.5, -30], [100, 0, 0], [200, 0.01, 0], [200, 3.5, 0], [100, 0.05, 30]]) { M.setV(v); M.setI(i); M.setTilt(t); await pause(150); M.setEye(-8); M.setEye(8); M.capture(); }
      document.getElementById('capture').click(); document.getElementById('expTab').click();
      M.applyPreset('circle'); await pause(200);
    })()` },
    { name: 'uniform field, then Earth adding and opposing, coil diameters odd, a new seed, preset measure, clear table', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('change', { bubbles: true })); e.dispatchEvent(new Event('input', { bubbles: true })); };
      const cf = document.getElementById('coilField'); cf.click(); await pause(200);
      for (const v of ['1', '-1', '0']) { set('earth', v); await pause(200); }
      for (const [a, b] of [['0', '0'], ['abc', '30'], ['30.6', '1e9'], ['-5', '-5'], ['30.6', '32.6']]) { set('din', a); set('dout', b); await pause(120); }
      cf.click(); await pause(150); set('earth', '0');
      document.getElementById('newSeed').click(); await pause(150); window.__em.applyPreset('measure'); await pause(150);
      document.getElementById('clearTab').click(); await pause(150); window.__em.applyPreset('circle');
    })()` },
  ],
};
