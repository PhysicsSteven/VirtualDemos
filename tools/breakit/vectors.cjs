/* Known values for the break-it test (tools/breakit.cjs), vectors. Hooks: window.__v3.S (preset, A, B, river), window.__ft (FT, ftRes, ftRest).
   Components, add, subtract and product views: the readouts equal the vector algebra of the live tips (|A| = sqrt(Ax^2 + Ay^2),
   R = A + B, A - B, A.B = |A||B| cos phi, |A x B| = |A||B| sin phi). River: time to cross, drift, speed and angle follow from
   v_boat,shore = v_boat,water + v_water; aiming at asin(u/v_b) upstream lands straight across. Force table: the F = m g rows,
   the net force and its direction come from the strings; the equilibrant of strings 1..n-1 plus those strings sums to zero; the
   ring rests inside the table (pin in: within the play of the pin, pin out: inside 0.8 R) and, clear of the pin with no friction,
   at a place where the pulls cancel. */
const pre = `const V = window.__v3, F = window.__ft; if (!V || !F) return true;
  const S = V.S, FT = F.FT, RAD = Math.PI / 180, rd = (e) => e.textContent.replace(/\\u2212/g, '-');
  const num = (s) => parseFloat(String(s).replace(/\\u2212/g, '-'));
  const tab = (root) => { const m = {}; for (const d of document.querySelectorAll(root + ' dt')) m[d.textContent.trim()] = rd(d.nextElementSibling); return m; };
  const near = (a, b, tol) => Math.abs(a - b) <= tol;
  const mag = (a) => Math.hypot(a[0], a[1]);
`;
module.exports = {
  checks: [
    { name: "components, add, subtract, product: readouts equal the vector algebra of the tips", fn: `(() => { ${pre}
      if (S.blind || S.preset === 'table' || S.preset === 'river' || !S.A) return true;
      const m = tab('#vecOut'), A = S.A, B = S.B, p = S.preset;
      const need = (k) => (k in m ? true : 'missing readout ' + k + ' (have ' + Object.keys(m).join(' | ') + ')');
      if (p === 'comp') {
        if (!near(num(m['A_x = |A| cos θ']), A[0], 0.006) || !near(num(m['A_y = |A| sin θ']), A[1], 0.006)) return 'components show ' + m['A_x = |A| cos θ'] + ', ' + m['A_y = |A| sin θ'] + ' for tip ' + A;
        if (!near(num(m['|A| = √(A_x² + A_y²)']), mag(A), 0.0006)) return '|A| shows ' + m['|A| = √(A_x² + A_y²)'] + ', hypot ' + mag(A);
        let th = Math.atan2(A[1], A[0]) / RAD; if (th < 0) th += 360;
        const g = num(m['θ from +x']); if (mag(A) > 1e-9 && Math.abs(((g - th + 540) % 360) - 180) > 0.051) return 'theta shows ' + m['θ from +x'] + ', atan2 gives ' + th;
        return true;
      }
      if (!B) return true;
      const pair = (s) => s.match(/-?[\\d.]+/g).map(Number);
      if (p === 'add') {
        const R = [A[0] + B[0], A[1] + B[1]], r = pair(m['R = A + B']);
        if (!near(r[0], R[0], 0.051) || !near(r[1], R[1], 0.051)) return 'R shows ' + m['R = A + B'] + ', A + B = ' + R;
        if (!near(num(m['|R|']), mag(R), 0.0006)) return '|R| shows ' + m['|R|'] + ', ' + mag(R);
        if (!near(num(m['|A| + |B|']), mag(A) + mag(B), 0.0006) || mag(R) > mag(A) + mag(B) + 1e-9) return 'triangle inequality or |A|+|B| readout';
      } else if (p === 'sub') {
        const D = [A[0] - B[0], A[1] - B[1]], r = pair(m['A − B'.replace('−', '-')] || m['A − B']);
        if (!near(r[0], D[0], 0.051) || !near(r[1], D[1], 0.051)) return 'A − B shows ' + m['A − B'] + ', ' + D;
        if (!near(num(m['|A − B|']), mag(D), 0.0006)) return '|A − B| shows ' + m['|A − B|'] + ', ' + mag(D);
      } else if (p === 'prod') {
        const d = A[0] * B[0] + A[1] * B[1], c = A[0] * B[1] - A[1] * B[0];
        if (!near(num(m['A · B']), d, 0.0051)) return 'A·B shows ' + m['A · B'] + ', ' + d;
        if (!near(num(m['A × B (z)']), c, 0.0051)) return 'AxB shows ' + m['A × B (z)'] + ', ' + c;
        if (mag(A) > 1e-9 && mag(B) > 1e-9) {
          const phi = Math.acos(Math.max(-1, Math.min(1, d / (mag(A) * mag(B))))), want = mag(A) * mag(B) * Math.sin(phi);
          if (!near(num(m['Angle φ between them']), phi / RAD, 0.051)) return 'phi shows ' + m['Angle φ between them'] + ', ' + phi / RAD;
          if (!near(Math.abs(c), want, 1e-9 * (1 + want))) return '|AxB| != |A||B| sin phi';
          if (!near(num(m['|A||B| cos φ']), d, 0.0151) || !near(num(m['|A||B| sin φ']), want, 0.0151)) return 'cos / sin readouts: ' + m['|A||B| cos φ'] + ', ' + m['|A||B| sin φ'];
        }
      }
      return true; })()` },
    { name: "river: speed, angle, crossing time and drift follow from the vector sum; aiming at asin(u/v_b) lands straight across", fn: `(() => { ${pre}
      if (S.blind || S.preset !== 'river') return true;
      const R = S.river, m = tab('#riverOut'), th = R.th * RAD, vbw = [-R.vb * Math.sin(th), R.vb * Math.cos(th)], banks = R.profile === 'banks';
      const ub = banks ? 2 * R.u / 3 : R.u, t = vbw[1] > 1e-9 ? 60 / vbw[1] : Infinity;
      if (!banks) {
        const vbs = [vbw[0] + R.u, vbw[1]];
        if (!near(num(m['Boat rel. shore']), Math.hypot(vbs[0], vbs[1]), 0.0051)) return 'boat speed rel. shore shows ' + m['Boat rel. shore'] + ', ' + Math.hypot(vbs[0], vbs[1]);
        const ang = Math.atan2(vbs[0], vbs[1]) / RAD, got = num(m['Its angle from straight across']);
        if (!near(Math.abs(got), Math.abs(ang), 0.051)) return 'angle shows ' + m['Its angle from straight across'] + ', ' + ang;
        if (isFinite(t)) { if (!near(num(m['Time to cross = 60 m / v_y']), t, 0.051)) return 'time shows ' + m['Time to cross = 60 m / v_y'] + ', ' + t;
          if (!near(num(m['Lands downstream by']), vbs[0] * t, 0.051 + 1e-6 * Math.abs(vbs[0] * t))) return 'drift shows ' + m['Lands downstream by'] + ', ' + vbs[0] * t; }
      }
      if (ub <= R.vb) {
        const sa = Math.asin(ub / R.vb) / RAD, shown = num(m['Heading to land straight across']);
        if (!near(shown, sa, 0.051)) return 'straight across heading shows ' + m['Heading to land straight across'] + ', ' + sa;
        const t2 = sa * RAD, drift = (-R.vb * Math.sin(t2) + ub) * 60 / (R.vb * Math.cos(t2));
        if (Math.abs(drift) > 1e-7 * 60) return 'at the straight across heading the average drift is ' + drift + ' m';
      } else if (!/impossible/.test(m['Heading to land straight across'] || '')) return 'current faster than the boat but heading says ' + m['Heading to land straight across'];
      return true; })()` },
    { name: "force table: rows are m g, net is the sum, the equilibrant cancels strings 1..n-1, the ring rests inside its limits", fn: `(() => { ${pre}
      if (S.preset !== 'table') return true;
      const n = FT.n, st = FT.s.slice(0, n), g = 9.81, res = F.ftRes();
      let sx = 0, sy = 0; st.forEach((q) => { sx += q.g / 1000 * g * Math.cos(q.a * RAD); sy += q.g / 1000 * g * Math.sin(q.a * RAD); });
      if (!near(res.S[0], sx, 1e-9) || !near(res.S[1], sy, 1e-9)) return 'net force ' + res.S + ' but sum of m g is ' + [sx, sy];
      const E = res.E, S1 = st.slice(0, n - 1).reduce((a, q) => [a[0] + q.g / 1000 * g * Math.cos(q.a * RAD), a[1] + q.g / 1000 * g * Math.sin(q.a * RAD)], [0, 0]);
      if (!near(E[0] + S1[0], 0, 1e-9) || !near(E[1] + S1[1], 0, 1e-9)) return 'equilibrant does not cancel strings 1 to n-1';
      if (S.blind) return true;
      const rows = [...document.querySelectorAll('#ftOut .fttbl tbody tr')];
      if (rows.length !== n + 1) return 'table has ' + rows.length + ' rows for ' + n + ' strings';
      for (let i = 0; i < n; i++) { const c = [...rows[i].children].map((e) => num(rd(e))).slice(1), w = st[i].g / 1000 * g, a = st[i].a * RAD;
        if (!near(c[0], w, 0.00051) || !near(c[1], w * Math.cos(a), 0.00051) || !near(c[2], w * Math.sin(a), 0.00051)) return 'row ' + (i + 1) + ' shows ' + c + ' for ' + st[i].g + ' g at ' + st[i].a; }
      const net = [...rows[n].children].map((e) => num(rd(e))).slice(1);
      if (!near(net[1], sx, 0.0016) || !near(net[2], sy, 0.0016) || !near(net[0], Math.hypot(sx, sy), 0.0016)) return 'net row shows ' + net + ', sum ' + [Math.hypot(sx, sy), sx, sy];
      const rest = FT.rest; if (!rest) return true;
      const R = 0.20, lim = FT.pinOut ? 0.8 * R : 0.02 - 0.0015 - 0.004;
      if (!(mag(rest.x) <= lim + 1e-9)) return 'ring rests ' + mag(rest.x) + ' m from the center, beyond ' + lim;
      if (rest.x.some((v) => !isFinite(v))) return 'rest position is not finite';
      if (rest.held && !rest.onPin && FT.fric === 0 && !res.centered) { const T = rest.S; if (mag(T) > 1e-4 * st.reduce((a, q) => a + q.g / 1000 * g, 0)) return 'held with no friction clear of the pin but net pull is ' + mag(T) + ' N'; }
      return true; })()` },
  ],
  steps: [
    { name: 'force table: pull the pin, every friction and mass limit, 2 to 4 strings, all strings at one angle, then back', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), q = (s) => document.querySelector(s), F = window.__ft;
      const set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      q('#presets [data-p=table]').click(); await pause(300);
      for (const k of [4, 2, 3]) { document.getElementById('ftN' + k).click(); await pause(100); }
      document.getElementById('ftN4').click();
      for (const a of [0, 90, 180, 270]) { for (let i = 1; i <= 4; i++) set('ftA' + i, a === 90 ? 90 : a); await pause(100); }
      for (const v of [10, 500]) for (let i = 1; i <= 4; i++) set('ftM' + i, v);
      await pause(100);
      for (const fr of [0, 5, 0]) { set('ftFric', fr); await pause(100); document.getElementById('ftPin').click(); await pause(150); }
      for (let i = 1; i <= 4; i++) { set('ftM' + i, 500); set('ftA' + i, 40 * i); }
      await pause(150); document.getElementById('ftSolve').click(); await pause(200);
      q('#presets [data-p=comp]').click(); await pause(200);
    })()` },
    { name: 'river: water faster than the boat, heading to the limits, banks profile, run, then product with parallel and zero vectors', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), q = (s) => document.querySelector(s);
      const set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      q('#presets [data-p=river]').click(); await pause(300);
      set('sU', 4); set('sVb', 0.5); await pause(150);
      for (const th of [-80, 80, 0, 30]) { set('sTh', th); await pause(100); }
      set('sU', 0); await pause(100); set('sU', 1.5); set('sVb', 2.5);
      const go = document.getElementById('go'); go.click(); await pause(600); go.click(); await pause(100);
      const bk = document.getElementById('banks'); bk.click(); await pause(200); set('sTh', 20); await pause(200); bk.click(); await pause(150);
      q('#presets [data-p=prod]').click(); await pause(200);
      const k = (key) => document.getElementById('can').dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true }));
      document.getElementById('can').focus(); for (let i = 0; i < 30; i++) k('ArrowLeft'); for (let i = 0; i < 30; i++) k('ArrowDown'); k('2'); for (let i = 0; i < 60; i++) k('ArrowRight');
      await pause(200);
    })()` },
  ],
};
