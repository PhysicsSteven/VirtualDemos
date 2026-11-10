/* Known values for the break-it test (tools/breakit.cjs), rotational-dynamics. Hook: window.__rd (S, mot, Itot, Iobj, tf, fromRow).
   Newton's second law for the table and the falling mass: a = (m g r - tau_f) r/(I + m r^2), alpha = a/r, T = m(g - a),
   T r - tau_f = I alpha, t = sqrt(2 h/a) with h = 0.500 m; energy: m g y = 1/2 m v^2 + 1/2 I w^2 + tau_f theta at every moment;
   the moments of inertia of the loads (disk 1/2 M R^2 = 5.00e-3, ring 1/2 M (R1^2 + R2^2), two masses by the parallel axis theorem,
   table 2.0e-3 kg m^2); the readouts equal these to their shown digits; the fit of tau against alpha recovers I and the friction. */
const pre = `const K = window.__rd; if (!K) return true; const S = K.S, M = K.mot(), G = 9.81, H = 0.5, I0 = 2.0e-3;
  const sup = { '⁻': '-', '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9' };
  const num = (t) => { if (t == null) return NaN; t = t.replace(/\\u2212/g, '-'); const m = t.match(/^(-?[\\d.]+) × 10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)/); if (m) return parseFloat(m[1]) * Math.pow(10, parseInt([...m[2]].map((c) => sup[c]).join(''), 10)); return parseFloat(t); };
  const dd = (name) => { for (const d of document.querySelectorAll('#out dt')) if (d.textContent.indexOf(name) === 0) return d.nextElementSibling.textContent; return null; };
  const near = (a, b, t) => Math.abs(a - b) <= t * Math.max(Math.abs(b), 1e-300);
`;
module.exports = {
  checks: [
    { name: "falling mass and table: a, alpha, T, torque, timer, energy follow the laws", fn: `(() => { ${pre}
      const m = S.m, r = S.r, I = K.Itot(), tf = K.tf();
      if (!(m >= 0.005 - 1e-12 && m <= 0.2 + 1e-9) || ![0.01, 0.02, 0.03].includes(r)) return 'm ' + m + ' kg, r ' + r;
      if (Math.abs(m - Math.round(m * 1000) / 1000) > 1e-9) return 'mass ' + m + ' is not a whole number of grams';
      if (!M.moves) { if (m * G * r > tf) return 'it should turn: m g r = ' + m * G * r + ' > friction ' + tf; return true; }
      if (m * G * r <= tf) return 'it turns although m g r = ' + m * G * r + ' <= friction ' + tf;
      const a = (m * G * r - tf) * r / (I + m * r * r);
      if (!near(M.a, a, 1e-12) || !near(M.alpha, a / r, 1e-12) || !near(M.T, m * (G - a), 1e-12) || !near(M.t, Math.sqrt(2 * H / a), 1e-12)) return 'motion() gives a ' + M.a + ', alpha ' + M.alpha + ', T ' + M.T + ', t ' + M.t + '; the laws give a ' + a;
      if (!(M.a > 0 && M.a < G) || !(M.T > 0 && M.T < m * G)) return 'a ' + M.a + ' or T ' + M.T + ' outside its limits';
      if (!near(M.T * r - tf, I * M.alpha, 1e-9)) return 'T r - friction ' + (M.T * r - tf) + ' is not I alpha ' + I * M.alpha;
      for (const f of [0.25, 0.5, 1]) { const t = M.t * f, y = 0.5 * M.a * t * t, v = M.a * t, w = M.alpha * t;
        if (!near(m * G * y, 0.5 * m * v * v + 0.5 * I * w * w + tf * y / r, 1e-9)) return 'energy at t = ' + t + ': m g y = ' + m * G * y + ', right side ' + (0.5 * m * v * v + 0.5 * I * w * w + tf * y / r); }
      if (!near(0.5 * M.a * M.t * M.t, H, 1e-12)) return 'it does not fall 0.500 m in the timer time';
      const q = K.fromRow(m, r, M.t); if (!near(q.alpha, M.alpha, 1e-12) || !near(q.tau, M.T * r, 1e-9)) return 'fromRow disagrees with the motion';
      return true; })()` },
    { name: "moments of inertia: table 2.0e-3, disk 1/2 M R^2, ring, two masses by the parallel axis theorem, mystery 7.3e-3", fn: `(() => { ${pre}
      const d = S.d, want = { none: 0, disk: 0.5 * 0.1 * 0.1, ring: 0.5 * (0.09 * 0.09 + 0.1 * 0.1), pair: 2 * (0.2 * d * d + 0.5 * 0.2 * 0.015 * 0.015), mystery: 7.3e-3 }[S.obj];
      if (want === undefined) return 'unknown load ' + S.obj;
      if (!near(K.Iobj(), want, 1e-12) && !(want === 0 && K.Iobj() === 0)) return S.obj + ': I = ' + K.Iobj() + ', should be ' + want;
      if (!near(K.Itot(), I0 + want, 1e-12)) return 'I of table + load ' + K.Itot();
      if (S.obj === 'ring' && !(K.Iobj() > 5e-3 && K.Iobj() < 1e-2)) return 'ring I ' + K.Iobj() + ' not between the disk and M R^2';
      if (S.obj === 'pair' && !(d >= 0 && d <= 0.12 + 1e-9)) return 'd ' + d;
      return true; })()` },
    { name: "readouts equal the physics to their shown digits (a, alpha, T, torque, I, mass; energy lines agree)", fn: `(() => { ${pre}
      if (S.blind || S.obj === 'mystery') return true;
      const m = dd('Mass m'); if (m !== Math.round(S.m * 1000) + ' g') return 'mass shows ' + m;
      const chk = (name, got, want, tol) => (Math.abs(got - want) > tol * Math.max(Math.abs(want), 1e-300) + 1e-300 ? name + ' shows ' + dd(name) + ', physics gives ' + want : true);
      let r;
      if ((r = chk('I of the table + load', num(dd('I of the table + load')), K.Itot(), 5.5e-3)) !== true) return r;
      if (K.Iobj() > 0 && (r = chk('I of the load alone', num(dd('I of the load alone')), K.Iobj(), 5.5e-3)) !== true) return r;
      if (Math.abs(num(dd('a of the mass')) - M.a) > 6e-5 || Math.abs(num(dd('α of the table')) - M.alpha) > 6e-4 || Math.abs(num(dd('Tension T')) - M.T) > 6e-5) return 'a ' + dd('a of the mass') + ', alpha ' + dd('α of the table') + ', T ' + dd('Tension T') + ' for ' + M.a + ', ' + M.alpha + ', ' + M.T;
      if (M.moves && (r = chk('Torque Tr', num(dd('Torque Tr')), M.T * S.r, 5.5e-3)) !== true) return r;
      const g = parseFloat(dd('Lost by gravity')), k = parseFloat(dd('½mv²')); if (Math.abs(g - k) > 0.101) return 'energy: lost by gravity ' + dd('Lost by gravity') + ' but kinetic + friction ' + dd('½mv²');
      return true; })()` },
    { name: "timer shows the drop time once it has fallen (2h/a)", fn: `(() => { ${pre}
      if (!S.done) return true;
      const t = document.querySelector('#out dd'); return t.textContent === M.t.toFixed(3) + ' s' ? true : 'timer shows ' + t.textContent + ', t = ' + M.t; })()` },
  ],
  steps: [
    { name: 'friction on: every load, spool and slotted mass dropped, rows captured; the fit of tau against alpha gives I and the friction torque', fn: `(async () => {
      const K = window.__rd, pause = (ms) => new Promise((r) => setTimeout(r, ms)), click = (sel) => document.querySelector(sel).click();
      const rm = document.getElementById('rmToggle'), rm0 = rm.checked; if (!rm0) rm.click();
      click('#clearRows'); if (!document.getElementById('fric').checked) document.getElementById('fric').click();
      click('#objSeg [data-o=disk]'); click('#takeAll'); await pause(100);
      for (const r of [0.01, 0.02, 0.03]) for (const g of [20, 50, 100]) { click('#rSeg [data-r="' + r + '"]'); click('#takeAll'); click('#addMass [data-g="' + g + '"]'); click('#go'); await pause(30); click('#capture'); }
      await pause(200);
      const dds = [...document.querySelectorAll('#fitOut dd')].map((e) => e.textContent), sup = { '⁻': '-', '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9' };
      const num = (t) => { const m = t.replace(/\\u2212/g, '-').match(/^(-?[\\d.]+) × 10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)/); return m ? parseFloat(m[1]) * Math.pow(10, parseInt([...m[2]].map((c) => sup[c]).join(''), 10)) : parseFloat(t); };
      if (dds.length < 2) throw new Error('no fit after nine captured drops: ' + dds.join(' | '));
      const icpt = num(dds[0]), slope = num(dds[1]);
      if (Math.abs(icpt - 4e-4) > 0.15 * 4e-4) throw new Error('fit intercept ' + dds[0] + ', friction torque 4.0e-4');
      if (Math.abs(slope - K.Itot()) > 0.02 * K.Itot()) throw new Error('fit slope ' + dds[1] + ', I = ' + K.Itot());
      click('#clearRows'); if (!rm0) rm.click(); document.getElementById('fric').click(); click('#takeAll');
    })()` },
    { name: 'release, pause mid drop, change the load, spool, mass and friction while it runs, then release again and let it finish', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), click = (sel) => document.querySelector(sel).click();
      click('#objSeg [data-o=pair]'); click('#addMass [data-g="5"]'); click('#go'); await pause(400); click('#go'); await pause(100);
      click('#objSeg [data-o=ring]'); click('#rSeg [data-r="0.03"]'); click('#addMass [data-g="100"]'); click('#addMass [data-g="100"]'); click('#go'); await pause(200);
      document.getElementById('fric').click(); await pause(200); click('#go'); await pause(100); click('#go'); await pause(100);
      click('#objSeg [data-o=mystery]'); click('#takeAll'); click('#rSeg [data-r="0.01"]'); document.getElementById('fric').click(); click('#go'); await pause(300);
      click('#wind'); document.getElementById('fric').click(); click('#objSeg [data-o=none]'); await pause(100);
    })()` },
  ],
};
