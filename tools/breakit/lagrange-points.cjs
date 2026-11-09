/* Known values for the break-it test (tools/breakit.cjs), lagrange-points. Hook: window.__lp (S, L, CL, parts, sel, core).
   The five points are equilibria of the rotating frame (gradient of Omega is zero), L4 and L5 are equilateral with C = 3, and the
   stored C of each point is 2 Omega there; the L1 and L2 distances solve Szebehely's quintics; Routh's test and the readouts follow
   the live mass ratio; the Jacobi constant of every live particle stays at its launch value; the Jacobi slider and C agree;
   the real systems have the cited distances (Sun-Earth L1 and L2 about 1.5 million km, Earth-Moon L1 about 58,000 km from the Moon). */
const pre = `const P = window.__lp; if (!P || !P.L || !P.CL) return true;
  const S = P.S, mu = S.mu, near = (a, b, tol) => Math.abs(a - b) <= tol * Math.max(Math.abs(b), 1e-12);
  const om = (x, y) => { const r1 = Math.hypot(x + mu, y), r2 = Math.hypot(x - 1 + mu, y); return x * x + y * y + mu * (1 - mu) + 2 * (1 - mu) / r1 + 2 * mu / r2; };
  const grad = (x, y) => { const r1 = Math.hypot(x + mu, y), r2 = Math.hypot(x - 1 + mu, y);
    return [x - (1 - mu) * (x + mu) / r1 ** 3 - mu * (x - 1 + mu) / r2 ** 3, y - (1 - mu) * y / r1 ** 3 - mu * y / r2 ** 3]; };
`;
module.exports = {
  checks: [
    { name: "the five Lagrange points are equilibria, L4 and L5 equilateral, C(L4) = 3", fn: `(() => { ${pre}
      for (const k of ['L1', 'L2', 'L3', 'L4', 'L5']) {
        const p = P.L[k], g = grad(p.x, p.y), r1 = Math.hypot(p.x + mu, p.y), r2 = Math.hypot(p.x - 1 + mu, p.y);
        const scale = Math.max(1, Math.abs(p.x)) * (k === 'L3' || k === 'L4' || k === 'L5' ? 1 : 1 / Math.max(P.L.L2.g, P.L.L1.g, 1e-9) ** 2 * mu / 3);
        if (!isFinite(p.x) || !isFinite(p.y)) return k + ' is not finite at mu = ' + mu;
        if (Math.hypot(g[0], g[1]) > 1e-9 * Math.max(1, scale)) return k + ': gradient of Omega is ' + Math.hypot(g[0], g[1]) + ' at mu = ' + mu;
        if (!near(P.CL[k], om(p.x, p.y), 1e-12)) return k + ': stored C ' + P.CL[k] + ' but 2 Omega = ' + om(p.x, p.y);
        if ((k === 'L4' || k === 'L5') && (Math.abs(r1 - 1) > 1e-12 || Math.abs(r2 - 1) > 1e-12)) return k + ' is not 1 a from both masses';
      }
      if (Math.abs(P.CL.L4 - 3) > 1e-9) return 'C(L4) = ' + P.CL.L4 + ', should be 3';
      if (!(P.L.L1.x < 1 - mu && P.L.L1.x > -mu && P.L.L2.x > 1 - mu && P.L.L3.x < -mu)) return 'the collinear points are out of order';
      if (!(P.CL.L1 > P.CL.L2 - 1e-12 && P.CL.L2 > P.CL.L3 - 1e-9 && P.CL.L3 > 3 - 1e-12)) return 'C(L1) > C(L2) >= C(L3) > 3 broken: ' + [P.CL.L1, P.CL.L2, P.CL.L3];   /* at mu = 1/2 (the slider's end) L2 and L3 are mirror images, so C(L2) = C(L3) */
      return true; })()` },
    { name: "Routh's test, the system readouts and the points list follow the live mu", fn: `(() => { ${pre}
      if (S.blind) return true;
      const ROUTH = (1 - Math.sqrt(23 / 27)) / 2, txt = document.getElementById('rRouth').textContent;
      if ((mu < ROUTH) !== /^stable/.test(txt.trim())) return 'mu = ' + mu + ' but Routh readout says "' + txt + '"';
      if ((mu < ROUTH) !== !!P.L.L4.st.stable) return 'L4 stability flag disagrees with Routh at mu = ' + mu;
      if (!(mu > 0 && mu <= 0.5)) return 'mu out of range: ' + mu;
      const hill = document.getElementById('rHill').textContent;
      if (!/off/.test(hill)) return 'Hill readout broken: ' + hill;
      const lp = document.getElementById('lpts').textContent;
      if (lp.indexOf('L3') < 0 || /NaN|undefined/.test(lp)) return 'points list broken';
      return true; })()` },
    { name: "Jacobi constant of every live particle stays at its launch value", fn: `(() => { ${pre}
      for (const p of P.parts) {
        if (!p.alive || !p.s.every(isFinite)) continue;
        const C = om(p.s[0], p.s[1]) - (p.s[2] ** 2 + p.s[3] ** 2), r = Math.min(Math.hypot(p.s[0] + mu, p.s[1]), Math.hypot(p.s[0] - 1 + mu, p.s[1]));
        if (r < 0.01) continue;   /* a close pass: the next step may be coarse */
        if (Math.abs(C - p.C0) > (p.swarm ? 1e-6 : 1e-7) * Math.max(1, Math.abs(p.C0))) return 'C drifted from ' + p.C0 + ' to ' + C + (p.swarm ? ' (swarm)' : '') + ' at t = ' + P.t;
      }
      return true; })()` },
    { name: "C readouts: the newest particle's C, the slider and Follow agree", fn: `(() => { ${pre}
      if (S.blind) return true;
      const sel = P.sel; if (!sel) return true;
      const C = om(sel.s[0], sel.s[1]) - (sel.s[2] ** 2 + sel.s[3] ** 2), rc = document.getElementById('rC').textContent.replace(/−/g, '-').replace(/\\s+/g, '');
      let want;
      const m = rc.match(/^3([+-])([\\d.]+)(?:×10(.*))?$/);
      if (m) { const sup = { '⁻': '-', '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9' };
        const e = m[3] ? +m[3].split('').map((c) => sup[c] || c).join('') : 0; want = 3 + (m[1] === '-' ? -1 : 1) * (+m[2]) * Math.pow(10, e); }
      else want = parseFloat(rc);
      if (!isFinite(want)) return 'rC unreadable: ' + rc;
      if (Math.abs(want - C) > 1e-4 * Math.max(1, Math.abs(C)) && Math.abs(want - C) > 6e-5 * Math.abs(C - 3) + 1e-9) return 'rC shows ' + rc + ', C = ' + C;
      if (S.follow && Math.abs(S.C - sel.C0) > 1e-9 * Math.max(1, Math.abs(sel.C0))) return 'Follow is on but the curve C = ' + S.C + ' and the newest particle has C0 = ' + sel.C0;
      return true; })()` },
    { name: "Jacobi slider position matches the C of the curve (landmarks at 100 steps each)", fn: `(() => { ${pre}
      const cj = +document.getElementById('cj').value, m = [3 - 0.6 * Math.max(P.CL.L1 - 3, 1e-12), 3, P.CL.L3, P.CL.L2, P.CL.L1, P.CL.L1 + 0.8 * Math.max(P.CL.L1 - 3, 1e-12)];
      const k = Math.min(4, Math.floor(cj / 100)), want = m[k] + (m[k + 1] - m[k]) * (cj - 100 * k) / 100;
      const step = (m[k + 1] - m[k]) / 100;
      if (Math.abs(S.C - want) > 0.51 * Math.abs(step) + 1e-12 && !(S.follow && P.sel)) return 'slider at ' + cj + ' means C = ' + want + ' but the curve uses C = ' + S.C;
      return isFinite(S.C) ? true : 'C is not finite';
    })()` },
    { name: "real systems: L1 and L2 distances and mu match the cited values", fn: `(() => { ${pre}
      const want = { se: { mu: 3.04042e-6, L1: [1.48e9, 1.51e9], L2: [1.49e9, 1.52e9], a: 149597870.7 },
                     em: { mu: 0.0121506, L1: [5.7e7, 5.9e7], L2: [6.3e7, 6.6e7], a: 384400 } }[S.sys];
      if (S.sys === 'sj') { if (Math.abs(S.mu - 9.53875e-4) > 1e-9) return 'Sun-Jupiter mu = ' + S.mu; if (Math.abs(P.L.L4.x - (0.5 - S.mu)) > 1e-12) return 'L4 x wrong'; return true; }
      if (!want) return true;
      if (Math.abs(S.mu - want.mu) > 1e-12) return S.sys + ' mu = ' + S.mu + ', should be ' + want.mu;
      const a = want.a, g1 = P.L.L1.g * a, g2 = P.L.L2.g * a;
      if (S.sys === 'se') { if (g1 < 1.48e6 || g1 > 1.51e6 || g2 < 1.49e6 || g2 > 1.52e6) return 'Sun-Earth L1/L2 at ' + g1 + ', ' + g2 + ' km (about 1.5 million)'; }
      else { if (g1 < 5.7e4 || g1 > 5.9e4 || g2 < 6.3e4 || g2 > 6.6e4) return 'Earth-Moon L1/L2 from the Moon at ' + g1 + ', ' + g2 + ' km (58,000 and 64,500)'; }
      return true; })()` },
    { name: "frame transforms round trip (rotating to Sun centered and back)", fn: `(() => { ${pre}
      const c = P.core, s = [0.3, -0.4, 0.05, 0.2], t = 7.3, h = c.rotToSun(mu, s, t), b = c.sunToRot(mu, h, t);
      for (let i = 0; i < 4; i++) if (Math.abs(b[i] - s[i]) > 1e-12) return 'round trip component ' + i + ' off by ' + (b[i] - s[i]);
      return true; })()` },
  ],
  steps: [
    { name: 'every preset then system, μ slider to both ends and back mid run, Sun centered frame throughout', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), P = window.__lp;
      for (const b of document.querySelectorAll('#presets button')) { b.click(); await pause(350); if (b.dataset.p === 'comet') document.getElementById('fRot').click(); }
      document.getElementById('fIn').click(); await pause(200);
      const mu = document.getElementById('mu');
      for (const v of [mu.min, mu.max, '-3.02', '-1.2', '-1.414', mu.min]) { mu.value = v; mu.dispatchEvent(new Event('input', { bubbles: true })); await pause(250); }
      for (const b of document.querySelectorAll('#systems button')) { b.click(); await pause(250); }
      document.getElementById('fRot').click(); await pause(200);
      document.querySelector('#presets [data-p=trojans]').click(); await pause(300);
    })()` },
    { name: 'slowest and fastest time speed with a close pass (horseshoe, L1 saddle), Jacobi slider to ends, throw a particle at m₂', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (i) => document.getElementById(i), fire = (e, v) => { e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#presets [data-p=l1]').click(); await pause(200);
      for (const v of ['9', '0', '9']) { fire($('sp'), v); await pause(500); }
      for (const v of ['0', '500', '250']) { fire($('cj'), v); await pause(150); }
      const can = $('can'), r = can.getBoundingClientRect(), P = window.__lp, p2 = P.toPx(1 - P.S.mu, 0);
      const send = (type, x, y) => can.dispatchEvent(new PointerEvent(type, { clientX: r.left + x, clientY: r.top + y, pointerId: 1, bubbles: true, button: 0, buttons: type === 'pointerup' ? 0 : 1 }));
      const q = Array.isArray(p2) ? p2 : [p2.x, p2.y];
      send('pointerdown', q[0] - 40, q[1]); send('pointermove', q[0], q[1]); send('pointerup', q[0] + 3, q[1]); await pause(600);
      for (const v of ['0', '1000', '1', '0']) { fire($('vs'), v); await pause(200); }
      fire($('sp'), '5');
    })()` },
    { name: 'throw into each mass in the Sun centered frame with Circular orbit on, then switch frame and system while running', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (i) => document.getElementById(i);
      document.querySelector('#presets [data-p=comet]').click(); await pause(300);
      const can = $('can'), r = can.getBoundingClientRect();
      const send = (type, x, y) => can.dispatchEvent(new PointerEvent(type, { clientX: r.left + x, clientY: r.top + y, pointerId: 1, bubbles: true, button: 0, buttons: type === 'pointerup' ? 0 : 1 }));
      if (!$('circ').checked) $('circ').click();
      for (const [x, y] of [[r.width / 2 + 3, r.height / 2], [r.width / 2, r.height / 2 + 1], [5, 5], [r.width - 5, r.height - 5]]) { send('pointerdown', x, y); send('pointermove', x + 30, y + 30); send('pointerup', x + 30, y + 30); await pause(150); }
      $('fRot').click(); await pause(300); document.querySelector('#systems [data-s=em]').click(); await pause(300); $('fIn').click(); await pause(300);
      document.querySelector('#systems [data-s=x]').click(); await pause(300); $('circ').click(); await pause(100);
    })()` },
  ],
};
