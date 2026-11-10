/* Known values for the break-it test (tools/breakit.cjs), equilibrium. Hook: window.__eq (S, SBE, ...). The physics functions are
   inside the page's closure, so each check solves the setup again from S.v (g = 9.81) and compares with the readouts (0.1 N,
   0.1 N·m, 0.1 degree, 0.01 m): seesaw net torque and pivot force; plank F1 + F2 = W with the torque about the right support
   zero; sign cable tension from the torque about the hinge, and the hinge forces; ladder normal force, wall push equal to the
   friction needed (torque about the foot), the critical angle where friction just holds; Sandbox weight, center of mass,
   support forces from the two equations, and that the support force never reads negative. */
const pre = `const E = window.__eq; if (!E || E.S.blind) return true;
  const S = E.S, v = S.v, G = 9.81, rd = () => { const m = {}; for (const d of document.querySelectorAll('#out > div')) { const t = d.querySelector('dt'), x = d.querySelector('dd'); if (t && x) m[t.textContent] = x.textContent.replace(/\\u2212/g, '-'); } return m; };
  const R = rd(), num = (k) => { const key = Object.keys(R).find((q) => q.startsWith(k)); return key === undefined ? NaN : parseFloat(R[key]); };
  const bad = (k, want, tol) => { const got = num(k); return !(Math.abs(got - want) <= tol) ? k + ' shows ' + got + ', physics gives ' + want : null; };
  const D = Math.PI / 180;
  for (const k of Object.keys(v)) if (!isFinite(v[k])) return 'S.v.' + k + ' = ' + v[k];
`;
module.exports = {
  checks: [
    { name: "seesaw: net torque, pivot force and the balance point from the masses and positions", fn: `(() => { ${pre}
      if (S.preset !== 'seesaw') return true;
      const tau = -G * (v.m1 * v.x1 + v.m2 * v.x2), P = G * (v.mb + v.m1 + v.m2);
      return bad('Net torque', tau, 0.0501) || bad('Pivot force', P, 0.0501) || bad('Balance point', -v.m1 * v.x1 / v.m2, 0.00501) || true; })()` },
    { name: "plank: F1 + F2 = W and torque about the right support is zero", fn: `(() => { ${pre}
      if (S.preset !== 'plank') return true;
      const W = G * (v.mb + v.m1), F1 = (G * v.mb * (v.b - v.L / 2) + G * v.m1 * (v.b - v.x1)) / (v.b - v.a), F2 = W - F1;
      return bad('Left support', F1, 0.0501) || bad('Right support', F2, 0.0501) || bad('Total weight', W, 0.0501) || true; })()` },
    { name: "sign: cable tension from the torque about the hinge, hinge forces balance", fn: `(() => { ${pre}
      if (S.preset !== 'sign') return true;
      const th = Math.atan2(v.h, v.L), T = G * (v.ms * v.L / 2 + v.m1 * v.x1) / (v.L * Math.sin(th)), Hx = T * Math.cos(th), Hy = G * (v.ms + v.m1) - T * Math.sin(th);
      if (Math.abs(Hx - T * Math.cos(th)) > 1e-9) return 'Hx';
      return bad('Cable angle', th / D, 0.0501) || bad('Tension', T, 0.0501) || bad('Hinge, horizontal', Hx, 0.0501) || bad('Hinge, vertical', Hy, 0.0501) || true; })()` },
    { name: "ladder: N = total weight, wall push = friction needed, critical angle where friction just holds", fn: `(() => { ${pre}
      if (S.preset !== 'ladder') return true;
      const th = v.th * D, N = G * (v.mb + v.m1), Nw = G * Math.cos(th) * (v.mb * v.L / 2 + v.m1 * v.f * v.L) / (v.L * Math.sin(th));
      const thMin = Math.atan((v.mb / 2 + v.m1 * v.f) / (v.mu * (v.mb + v.m1))) / D;
      const tauMin = (a) => { const t = a * D; return G * Math.cos(t) * (v.mb / 2 + v.m1 * v.f) / Math.sin(t) - v.mu * N; };
      if (Math.abs(tauMin(thMin)) > 1e-6 * N) return 'friction at the critical angle ' + thMin + ' is not the limit: ' + tauMin(thMin);
      return bad('Floor normal', N, 0.0501) || bad('Wall push', Nw, 0.0501) || bad('Friction needed', Nw, 0.0501) || bad('Most friction', v.mu * N, 0.0501) || bad('Slips below', thMin, 0.0501) || true; })()` },
    { name: "Sandbox: weight, center of mass, support forces (sum = W, torque 0), never negative", fn: `(() => { ${pre}
      if (S.preset !== 'sandbox') return true;
      const loads = E.SBE.loads, sup = E.SBE.sup.map((q) => q.x).sort((a, b) => a - b);
      const M = v.mb + loads.reduce((s, l) => s + l.m, 0), xc = (v.mb * v.L / 2 + loads.reduce((s, l) => s + l.m * l.x, 0)) / M, W = M * G;
      let m = bad('Total weight', W, 0.0501) || bad('Center of mass', xc, 0.00501); if (m) return m;
      if (sup.length >= 2) { const a = sup[0], b = sup[sup.length - 1], F2 = W * (xc - a) / (b - a), F1 = W - F2;
        if (F1 >= -1e-9 && F2 >= -1e-9) { m = bad('Left support', F1, 0.0501) || bad('Right support', F2, 0.0501); if (m) return m; if (/−|-/.test(R[Object.keys(R).find((q) => q.startsWith('Left support'))] || '') && F1 > 0.06) return 'negative support force shown'; } }
      return true; })()` },
  ],
  steps: [
    { name: 'Sandbox: every rig, add the heaviest mass again and again, add supports past two, delete everything, let go', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      document.querySelector('#presets [data-p=sandbox]').click(); await pause(200);
      for (const b of document.querySelectorAll('#sbeRigs button')) { b.click(); await pause(100); }
      const add = (a) => document.querySelector('#sbeAdd [data-add="' + a + '"]'), go = document.getElementById('sbeGo');
      for (let i = 0; i < 20; i++) { add('50').click(); await pause(20); }
      for (let i = 0; i < 4; i++) { add('sup').click(); await pause(20); }
      go.click(); await pause(400); go.click(); await pause(200);
      for (let i = 0; i < 40; i++) { add('del').click(); await pause(10); }
      go.click(); await pause(300);
      document.querySelector('#presets [data-p=ladder]').click(); await pause(200);
    })()` },
    { name: 'ladder to the steepest and flattest angle and the smallest friction, plank supports together, sign cable almost flat', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      const set = (e, v) => { e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      for (const p of ['ladder', 'plank', 'sign', 'seesaw']) { document.querySelector('#presets [data-p=' + p + ']').click(); await pause(150);
        for (const e of document.querySelectorAll('#ctl input[type=range]')) for (const w of [e.min, e.max, e.min]) { set(e, w); await pause(30); } }
    })()` },
  ],
};
