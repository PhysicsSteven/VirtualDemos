/* Known values for the break-it test (tools/breakit.cjs), projectile-drag. Hooks: window.__projectile (state, shots, simulate, ...),
   window.__newtonCannon (NC). Flat ground: the prediction readouts equal the physics of the current settings (vacuum range
   v cos(th) (v sin(th) + sqrt(v^2 sin^2(th) + 2 g h)) / g, vacuum best angle, terminal speed sqrt(2 m g / (rho Cd A)) and v0 / vt);
   drag can only shorten the shot and slow the ball (range, height and impact speed never exceed the vacuum values; with drag off they
   equal them); along every recorded shot the mechanical energy never rises with drag and stays constant without it.
   Newton's cannon: every flown shot keeps its energy (the symplectic step), a closed orbit ends where it began. */
const pre = `const Q = window.__projectile; if (!Q) return true; const st = Q.state(), P = st.P, G = 9.81, DEG = Math.PI / 180;
  const NCo = window.__newtonCannon; if (NCo && NCo.NC.on) return true;
  const rd = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-');
  const parse = (id) => { const t = rd(id), m = t.match(/-?\\d+(?:\\.(\\d+))?/); return m ? { v: parseFloat(m[0]), tol: 0.5 * Math.pow(10, -(m[1] ? m[1].length : 0)) + 1e-9 } : null; };
  const sig = [P.v, P.th, P.h, P.m, P.d, P.cd, P.rho, P.drag].join('|'), W = (window.__bkp = window.__bkp || { sig: '', t: 0 });
  if (W.sig !== sig) { W.sig = sig; W.t = performance.now(); }
  const settled = performance.now() - W.t > 400;
`;
module.exports = {
  checks: [
    { name: "prediction readouts: vacuum range, drag never beats vacuum, terminal speed sqrt(2mg / rho Cd A), v0 / vt", fn: `(() => { ${pre}
      if (!settled) return true;
      const th = P.th * DEG, vy = P.v * Math.sin(th), Rv = P.v * Math.cos(th) * (vy + Math.sqrt(vy * vy + 2 * G * P.h)) / G, Hv = P.h + vy * vy / (2 * G);
      const rRv = parse('rRv'), rR = parse('rR'), rH = parse('rH'), rV = parse('rV');
      if (!rRv || !rR) return true;
      if (Math.abs(rRv.v - Rv) > rRv.tol) return 'Range, vacuum shows ' + rd('rRv') + ', physics gives ' + Rv;
      if (rR.v > Rv + rR.tol + rRv.tol) return 'Range with drag ' + rd('rR') + ' exceeds the vacuum range ' + Rv;
      if (rH.v > Hv + rH.tol) return 'Max height ' + rd('rH') + ' exceeds the vacuum height ' + Hv;
      if (rV.v > Math.sqrt(P.v * P.v + 2 * G * P.h) + rV.tol) return 'Impact speed ' + rd('rV') + ' exceeds the vacuum impact speed';
      if (!P.drag && (Math.abs(rR.v - Rv) > rR.tol + rRv.tol)) return 'drag off but Range ' + rd('rR') + ' differs from the vacuum range ' + Rv;
      if (P.drag && P.rho > 0 && P.cd > 0) {
        const vt = Math.sqrt(2 * P.m * G / (P.rho * P.cd * Math.PI * P.d * P.d / 4)), rVt = parse('rVt'), rat = parse('rRatio');
        if (rVt && Math.abs(rVt.v - vt) > rVt.tol) return 'terminal speed shows ' + rd('rVt') + ', physics gives ' + vt;
        if (rat && Math.abs(rat.v - P.v / vt) > rat.tol) return 'v0 / vt shows ' + rd('rRatio') + ', physics gives ' + P.v / vt;
      }
      return true; })()` },
    { name: "recorded shots: range and impact speed within vacuum limits; energy never rises with drag, constant without", fn: `(() => { ${pre}
      const C = (window.__bkps = window.__bkps || new Map());
      for (const s of Q.shots()) {
        if (C.has(s.id + ':' + s.key)) continue; C.set(s.id + ':' + s.key, 1);
        const p = s.p, th = p.th * DEG, vy = p.v * Math.sin(th), Rv = p.v * Math.cos(th) * (vy + Math.sqrt(vy * vy + 2 * G * p.h)) / G;
        if (![s.range, s.T, s.ymax, s.vImp].every(Number.isFinite)) return 'shot ' + s.n + ' has a non finite result';
        if (s.range > Rv + 1e-6 * Math.max(1, Rv)) return 'shot ' + s.n + ': range ' + s.range + ' exceeds vacuum ' + Rv;
        if (s.vImp > Math.sqrt(p.v * p.v + 2 * G * p.h) + 1e-6) return 'shot ' + s.n + ': impact speed above the vacuum value';
        let prev = null;
        for (const q of s.pts) {
          const E = 0.5 * (q[3] * q[3] + q[4] * q[4]) + G * q[2];   /* per unit mass */
          if (prev !== null) {
            const sc = Math.max(1, Math.abs(prev));
            if (s.k > 0 ? E > prev + 1e-7 * sc : Math.abs(E - prev) > 1e-7 * sc) return 'shot ' + s.n + ': energy per kg went from ' + prev + ' to ' + E + ' at t = ' + q[0];
          }
          prev = E;
        }
      }
      return true; })()` },
    { name: "Newton's cannon: every flown shot conserves energy and a closed orbit closes", fn: `(() => {
      const N = window.__newtonCannon; if (!N || !N.NC.on) return true;
      for (const s of N.NC.shots) {
        const f = s.f; if (!f) continue;
        if (!Number.isFinite(f.dE) || Math.abs(f.dE) > 1e-6) return 'shot ' + s.n + ': energy changed by a fraction ' + f.dE;
        if (f.end === 'orbits' && f.close != null && f.close > 1e-3 * (6371008.8 + s.h)) return 'shot ' + s.n + ': orbit misses its start by ' + f.close + ' m';
      }
      return true; })()` },
  ],
  steps: [
    { name: 'Flat ground: every preset, Launch and Compare sets, drag off and on, Moon air, extreme sliders, Many launches', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      const set = (id, v) => { const e = $(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#modeSeg [data-mode=flat]').click(); await pause(300);   /* the generic pass may have left Newton's cannon on */
      for (const b of document.querySelectorAll('#presets button')) { b.click(); await pause(150); $('launch').click(); await pause(150); }
      for (const b of document.querySelectorAll('#compare button')) { b.click(); await pause(250); }
      for (const [id, v] of [['speed', '60'], ['angle', '90'], ['angle', '0'], ['height', '10'], ['cd', '0'], ['cd', '1.2'], ['rho', '0'], ['rho', '1.4'], ['mass', '0'], ['diam', '1']]) { set(id, v); await pause(120); $('launch').click(); await pause(120); }
      for (const b of document.querySelectorAll('#dragSw button, #airs button')) { b.click(); await pause(150); $('launch').click(); await pause(100); }
      for (const id of ['many10', 'many100', 'manyClear']) { $(id).click(); await pause(200); }
      $('clear').click(); await pause(150);
    })()` },
    { name: "Newton's cannon: every setup, a fired series, extreme speed, height and angle", fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      const set = (id, v) => { const e = $(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#modeSeg [data-mode=cannon]').click(); await pause(300);
      for (const b of document.querySelectorAll('#ncPresets button')) { b.click(); await pause(150); $('ncFire').click(); await pause(150); }
      $('ncSeries').click(); await pause(400);
      for (const [id, v] of [['ncV', '12'], ['ncV', '0.5'], ['ncH', '1000'], ['ncH', '10'], ['ncTh', '60'], ['ncTh', '0']]) { set(id, v); await pause(120); $('ncFire').click(); await pause(200); }
      $('ncReset').click(); await pause(200);
      document.querySelector('#modeSeg [data-mode=flat]').click(); await pause(300);
    })()` },
  ],
};
