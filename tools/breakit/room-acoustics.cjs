/* Known values for the break-it test (tools/breakit.cjs), room-acoustics. Hook: window.__ra (S, model, measure, MATERIALS, ...).
   The readouts equal the room physics of the live settings: V = L W H and S = 2(LW + LH + WH) (less the wedge depth on every face),
   A = sum of S alpha from the table of coefficients, mean alpha = A/S, Sabine T = 0.161 V/A, Eyring T <= Sabine T. The panels all sit
   inside their walls and do not overlap, and the panel area is 0.72 m² each. The measured T and level are those of the live trace;
   the level at the microphone is never below the direct sound alone; the Schroeder decay starts at 0 dB and never rises; a
   room with little absorption measures a T near Eyring's. Presets keep the numbers the hints quote (189 m³, 14.4 m² = 6.5 %,
   free space 7.4 x 5.4 x 4.4 m, wedge cutoff 286 Hz, wavelength 2.75 m at 125 Hz). Every absorption coefficient lies in 0 to 1. */
const pre = `const R = window.__ra; if (!R) return true;
  const S = R.S, rd = (e) => e.textContent.replace(/\\u2212/g, '-'), num = (s) => parseFloat(String(s).replace(/\\u2212/g, '-'));
  const tab = () => { const m = {}; for (const d of document.querySelectorAll('#out dt')) m[d.textContent.trim()] = rd(d.nextElementSibling); return m; };
  const near = (a, b, tol) => Math.abs(a - b) <= tol * Math.max(Math.abs(b), 1e-300);
`;
module.exports = {
  checks: [
    { name: "readouts equal the room: V, S, A = Σ S α, mean α, Sabine and Eyring T", fn: `(() => { ${pre}
      const m = R.model(), d = S.walls === 'wedges' ? S.wedge : 0, L = S.L - 2 * d, W = S.W - 2 * d, H = S.H - 2 * d;
      if (!(L > 0 && W > 0 && H > 0)) return 'wedges fill the room: free space ' + [L, W, H];
      for (const k of ['V', 'S', 'A', 'abar']) if (!isFinite(m[k])) return k + ' is ' + m[k];
      if (!near(m.V, L * W * H, 1e-12) || !near(m.S, 2 * (L * W + L * H + W * H), 1e-12)) return 'V, S of the model: ' + m.V + ', ' + m.S;
      const bi = R.BANDS.indexOf(S.band), a = (k) => R.MATERIALS[k].a[bi];
      let A;
      if (S.walls === 'wedges') A = m.S * R.wedgeAlpha(S.band, S.wedge);
      else { const pk = S.panel === 'mystery' ? S.mysteryKey : S.panel, Sp = m.panels.length * 0.72;
        A = (m.S - L * W - Sp) * a('brick') + L * W * a(S.floor) + (S.walls === 'panels' ? Sp * a(pk) : 0); }
      if (!near(m.A, A, 1e-9)) return 'A = ' + m.A + ', sum of S alpha = ' + A;
      if (!near(m.abar, m.A / m.S, 1e-12) || !(m.abar > 0 && m.abar < 1)) return 'mean alpha ' + m.abar;
      const sab = R.sabineT(m.V, m.A), eyr = R.eyringT(m.V, m.S, m.abar);
      if (!near(sab, 0.161 * m.V / m.A, 3e-4)) return 'Sabine 24 ln10 V/(c A) = ' + sab + ' but 0.161 V/A = ' + 0.161 * m.V / m.A;
      if (eyr > sab * (1 + 1e-12)) return 'Eyring ' + eyr + ' > Sabine ' + sab;
      if (S.blind || (S.walls === 'panels' && S.panel === 'mystery')) return true;
      const t = tab(), g = (k) => { if (!(k in t)) throw new Error('missing readout ' + k + ' have ' + Object.keys(t)); return num(t[k]); };
      if (!near(g('Volume V'), m.V, 6e-4 + 0.05 / m.V) || Math.abs(g('Volume V') - m.V) > 0.051) return 'V shows ' + t['Volume V'] + ', ' + m.V;
      if (Math.abs(g('Surface S') - m.S) > 0.051) return 'S shows ' + t['Surface S'] + ', ' + m.S;
      if (Math.abs(g('Absorption A = ΣSα') - m.A) > 0.0051) return 'A shows ' + t['Absorption A = ΣSα'] + ', ' + m.A;
      if (Math.abs(g('Mean α (ᾱ = A/S)') - m.abar) > 0.00051) return 'mean alpha shows ' + t['Mean α (ᾱ = A/S)'] + ', ' + m.abar;
      if (Math.abs(g('Sabine T = 0.161 V/A') - sab) > 0.0051 || Math.abs(g('Eyring T') - eyr) > 0.0051) return 'Sabine / Eyring show ' + t['Sabine T = 0.161 V/A'] + ' / ' + t['Eyring T'] + ', ' + sab + ' / ' + eyr;
      if (S.mode === 'level') { const cd = Math.sqrt(m.A / (16 * Math.PI)); if (Math.abs(g('Critical distance √(A/16π)') - cd) > 0.0051) return 'critical distance shows ' + t['Critical distance √(A/16π)'] + ', ' + cd;
        const ff = R.splFromW(R.P_SRC * R.directDose(S.r)); if (Math.abs(g('Free field level, 1/r² alone') - ff) > 0.051) return 'free field level shows ' + t['Free field level, 1/r² alone'] + ', ' + ff; }
      if (S.walls === 'wedges') { if (Math.abs(g('Wedge cutoff f_c = c/4d') - 343.2 / (4 * S.wedge)) > 0.51) return 'cutoff shows ' + t['Wedge cutoff f_c = c/4d'];
        if (Math.abs(g('Wedge α at ' + S.band + ' Hz') - R.wedgeAlpha(S.band, S.wedge)) > 0.00051) return 'wedge alpha shows ' + t['Wedge α at ' + S.band + ' Hz']; }
      return true; })()` },
    { name: "panels: inside their walls, no overlaps, 0.72 m² each, never more than asked", fn: `(() => { ${pre}
      if (S.walls !== 'panels') return true;
      const m = R.model(), P = m.panels;
      if (P.length > S.nPanels) return P.length + ' panels placed for ' + S.nPanels;
      for (const p of P) { const len = p.wall % 2 === 0 ? m.L : m.W;
        if (!(p.u0 >= -1e-9 && p.u1 <= len + 1e-9 && p.z0 >= -1e-9 && p.z1 <= m.H + 1e-9)) return 'panel off its wall: ' + JSON.stringify(p) + ' wall length ' + len + ', H ' + m.H;
        if (Math.abs((p.u1 - p.u0) * (p.z1 - p.z0) - 0.72) > 1e-9) return 'panel is not 0.72 m²'; }
      for (let i = 0; i < P.length; i++) for (let j = i + 1; j < P.length; j++) { const a = P[i], b = P[j];
        if (a.wall === b.wall && a.u0 < b.u1 - 1e-9 && b.u0 < a.u1 - 1e-9 && a.z0 < b.z1 - 1e-9 && b.z0 < a.z1 - 1e-9) return 'panels overlap on wall ' + a.wall; }
      if (Math.abs(m.Sp - P.length * 0.72) > 1e-9) return 'Sp';
      return true; })()` },
    { name: "measurement: T and level readouts are the live trace; level >= direct sound; decay starts at 0 dB and falls; T near Eyring", fn: `(() => { ${pre}
      if (S.pending || !S.res || S.blind) return true;
      const r = S.res, m = r.m, db = r.sc.db;
      if (!(Math.abs(db[0]) < 1e-9)) return 'decay curve starts at ' + db[0] + ' dB';
      for (let i = 1; i < db.length; i++) if (db[i] > db[i - 1] + 1e-9) return 'Schroeder curve rises at bin ' + i;
      const ff = R.splFromW(R.P_SRC * R.directDose(S.r));
      if (!isFinite(r.Ldb) || r.Ldb < ff - 1e-9) return 'level ' + r.Ldb + ' dB is below the direct sound ' + ff;
      const t = tab(), txt = document.getElementById('out').textContent.replace(/\\u2212/g, '-');
      if (S.mode === 'level' && r.key.indexOf('|' + S.r.toFixed(2)) > 0 && Math.abs(num(txt.match(/Level at the microphone\\s*(-?[\\d.]+) dB/)[1]) - r.Ldb) > 0.051) return 'level readout vs trace ' + r.Ldb;
      if (S.mode === 'decay' && S.clapped && isFinite(r.dec.T)) { const mm = txt.match(/Measured T\\s*([\\d.]+) s/); if (!mm || Math.abs(+mm[1] - r.dec.T) > 0.0051) return 'T readout ' + (mm && mm[1]) + ', trace ' + r.dec.T; }
      const ey = R.eyringT(m.V, m.S, m.abar);
      if (S.walls !== 'wedges' && m.abar < 0.2 && ey > 0.4 && ey < 8 && isFinite(r.dec.T) && (r.dec.T < 0.6 * ey || r.dec.T > 1.6 * ey)) return 'measured T ' + r.dec.T.toFixed(2) + ' s but Eyring ' + ey.toFixed(2) + ' s (abar ' + m.abar.toFixed(3) + ')';
      if (S.walls === 'wedges' && m.abar > 0.99 && S.band >= 500 && Math.abs(r.Ldb - ff) > 1) return 'anechoic level ' + r.Ldb.toFixed(2) + ' dB, free field ' + ff.toFixed(2);
      return true; })()` },
    { name: "every absorption coefficient is in 0 to 1; presets keep the numbers their hints quote", fn: `(() => { ${pre}
      for (const [k, v] of Object.entries(R.MATERIALS)) if (v.a.length !== 6 || v.a.some((x) => !(x >= 0 && x <= 1))) return 'bad coefficients for ' + k;
      for (const d of [0.1, 0.3, 0.5, 1]) for (const f of R.BANDS) { const a = R.wedgeAlpha(f, d); if (!(a >= 0 && a <= 1)) return 'wedge alpha ' + a; }
      if (Math.abs(R.wedgeAlpha(343.2 / 1.2, 0.3) - 0.99) > 1e-12) return 'wedge alpha at the cutoff is not 0.99';
      const p = S.preset, m = R.model();
      const same = (o) => Object.entries(o).every(([k, v]) => S[k] === v);
      if (p === 'bare' && same({ L: 9, W: 7, H: 3, walls: 'hard' }) && !near(m.V, 189, 1e-12)) return 'bare room V = ' + m.V;
      if (p === 'panels' && same({ L: 9, W: 7, H: 3, nPanels: 20 })) { if (!near(m.Sp, 14.4, 1e-12) || Math.abs(100 * m.Sp / m.S - 6.5) > 0.05) return 'panels: ' + m.Sp + ' m², ' + 100 * m.Sp / m.S + ' %'; }
      if (p === 'anechoic' && same({ L: 8, W: 6, H: 5, wedge: 0.3 }) && (!near(m.L, 7.4, 1e-12) || !near(m.W, 5.4, 1e-12) || !near(m.H, 4.4, 1e-12))) return 'anechoic free space ' + [m.L, m.W, m.H];
      if (p === 'cutoff' && same({ wedge: 0.3, band: 125 })) { if (Math.abs(R.wedgeCutoff(0.3) - 286) > 0.5 || Math.abs(343.2 / 125 - 2.75) > 0.005) return 'cutoff ' + R.wedgeCutoff(0.3); }
      return true; })()` },
  ],
  steps: [
    { name: 'every preset: clap, change band and microphone distance, wedge depth to the limits, room size to the limits with panels and wedges on', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), q = (s) => document.querySelector(s);
      const set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      for (const b of document.querySelectorAll('#presets button')) { b.click(); await pause(300); const go = document.getElementById('go'); if (go) go.click(); await pause(250); }
      q('#wallSeg [data-w=wedges]').click(); await pause(200);
      for (const v of ['sD', 'sR']) { const e = document.getElementById(v); set(v, e.max); await pause(200); set(v, e.min); await pause(200); }
      for (const [id, val] of [['sL', 'min'], ['sW', 'min'], ['sH', 'min'], ['sL', 'max'], ['sW', 'max'], ['sH', 'max']]) { set(id, document.getElementById(id)[val]); await pause(150); }
      q('#wallSeg [data-w=panels]').click(); await pause(200); set('sN', 40); await pause(250); set('sH', 2); set('sL', 4); set('sW', 4); await pause(300);
      for (const b of document.querySelectorAll('#bandSeg button')) { b.click(); await pause(250); }
      q('#wallSeg [data-w=hard]').click(); await pause(200);
    })()` },
    { name: 'mystery preset: all four materials in every band, switch mode to level and back, then the first preset', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), q = (s) => document.querySelector(s);
      q('#presets [data-p=mystery]').click(); await pause(300);
      for (const b of document.querySelectorAll('#bandSeg button')) { b.click(); await pause(250); }
      for (const b of document.querySelectorAll('#modeSeg button')) { b.click(); await pause(300); }
      for (const b of document.querySelectorAll('#modeSeg button')) { b.click(); await pause(300); }
      q('#presets [data-p=bare]').click(); await pause(300);
    })()` },
  ],
};
