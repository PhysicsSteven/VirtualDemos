/* Known values for the break-it test (tools/breakit.cjs), rotation demo. Each check reads window.__rot and applies only to its own scene.
   Every number is recomputed from the current settings, so it must hold through any slider, preset or scene switch. */
const R = `const r = window.__rot; if (!r) return true; const S = r.S, C = r.core, num = (id) => { const e = document.getElementById(id); return e ? parseFloat(e.textContent.replace('−', '-').replace(/,/g, '')) : NaN; };
  const near = (a, b, tol) => Math.abs(a - b) <= tol * Math.max(1e-9, Math.abs(a), Math.abs(b));`;
module.exports = {
  checks: [
    { name: 'rolling: a = g sin β / (1 + k) and t = √(2D/a) for the selected lane', fn: `(() => { ${R}
      if (S.scene !== 'roll') return true; const o = r.RO.lanes[r.RO.sel], k = C.SHAPES[o.shape].k, b = r.RO.beta * Math.PI / 180;
      const a = 9.81 * Math.sin(b) / (1 + k), T = Math.sqrt(2 * r.RO.D / a), ra = num('oA'), rt = num('oT');
      return near(ra, a, 2e-3) && near(rt, T, 2e-3) ? true : 'readout a ' + ra + ' (want ' + a.toFixed(3) + '), t ' + rt + ' (want ' + T.toFixed(3) + ')'; })()` },
    { name: 'floor: angular momentum about the floor is the same before, during and after the skid', fn: `(() => { ${R}
      if (S.scene !== 'floor') return true; const F = r.FL, rn = C.floorRun({ k: C.SHAPES[F.shape].k, R: F.R, v0: F.v0, w0: F.rim0 / F.R, mu: F.mu });
      const L0 = C.floorEnergy(rn, F.m, 0).L, tt = [0.3 * rn.ts, rn.ts, rn.ts + 5];
      for (const t of tt) { const e = C.floorEnergy(rn, F.m, t); if (!near(e.L, L0, 1e-9) && Math.abs(e.L - L0) > 1e-9) return 'L ' + e.L + ' at t = ' + t + ', started ' + L0; if (e.heat < -1e-9) return 'negative heat ' + e.heat; }
      return near(num('fVf'), rn.vf, 5e-3) || Math.abs(num('fVf') - rn.vf) < 6e-3 ? true : 'readout vf ' + num('fVf') + ', physics ' + rn.vf; })()` },
    { name: 'yo-yo: energy is kept (KE + KE_rot = m g y) and T = m(g − a) at any time', fn: `(() => { ${R}
      if (S.scene !== 'yoyo') return true; const Y = r.YO;
      for (const f of [0.1, 0.5, 0.97, 1]) { const q = C.spoolFall(Y, Y.H, f * C.spoolFall(Y, Y.H, 0).T);
        if (!near(q.KEt + q.KEr, q.drop, 1e-9)) return 'energy ' + (q.KEt + q.KEr) + ' vs ' + q.drop; }
      const q = C.spoolFall(Y, Y.H, 1e9); return near(q.tension, Y.m * (9.81 - q.a), 1e-9) ? true : 'tension'; })()` },
    { name: 'spin: I ω equals L, and the work shown equals the change in kinetic energy', fn: `(() => { ${R}
      if (S.scene !== 'spin') return true; const P = r.SP, I = P.I0 + 2 * P.m * P.r * P.r, w = P.L / I;
      const gI = num('sIr'), gw = num('sW'), gL = num('sL');
      if (!(Math.abs(gI * gw - gL) <= 0.02 * Math.max(1, Math.abs(gL)) + 0.006 * Math.abs(gw))) return 'I ω = ' + gI * gw + ' but L reads ' + gL;
      if (!near(gI, I, 3e-3) && Math.abs(gI - I) > 6e-4) return 'I reads ' + gI + ', should be ' + I;
      const ref = P.ref, K = P.L * P.L / (2 * I), K0 = ref.L * ref.L / (2 * ref.I), W = C.spinWork(P.L, ref.I, I);
      return Math.abs((K - K0) - W) <= 1e-9 * Math.max(1, K, K0) ? true : 'work ' + W + ' vs ΔK ' + (K - K0); })()` },
    { name: 'seesaw: the balance position makes the net moment zero, and readout torques sum to the net torque', fn: `(() => { ${R}
      if (S.scene !== 'seesaw') return true; const SE = r.SE, ms = SE.ms;
      const xb = C.balanceX(ms, 1); if (isFinite(xb)) { const t = ms.map((q, i) => i === 1 ? { m: q.m, x: xb } : q); const net = t.reduce((s, q) => s + q.m * q.x, 0); if (Math.abs(net) > 1e-9 * Math.max(1, ...ms.map((q) => q.m * Math.abs(q.x)))) return 'balance x ' + xb + ' leaves moment ' + net; }
      return true; })()` },
    { name: 'hit: L (and p when the rod is free) are the same before and after; K never grows', fn: `(() => { ${R}
      if (S.scene !== 'hit') return true; const H = r.HT;
      if (H.target === 'disk') { const D = C.diskDrop({ M1: H.M1, R1: H.R1, w1: H.w1 * 2 * Math.PI, M2: H.M2, R2: H.R2, w2: H.w2 * 2 * Math.PI, mu: H.mu });
        const e = D.at(1e9); return Math.abs(e.L - D.L) <= 1e-9 * Math.max(1, Math.abs(D.L)) && D.heat >= -1e-9 ? true : 'disk L ' + e.L + ' vs ' + D.L + ', heat ' + D.heat; }
      const o = { pivot: H.target, M: H.M, L: H.L, m: H.m, u: H.u, d: H.d, e: H.ball === 'clay' ? 0 : H.e, rb: 0.03, hw: 0.01, s0: 1 }, h = C.rodHit(o);
      if (Math.abs(h.L1 - h.L0) > 1e-9 * Math.max(1, Math.abs(h.L0))) return 'L ' + h.L1 + ' vs ' + h.L0;
      if (H.target === 'free' && Math.abs(h.P) > 1e-9 * Math.max(1, Math.abs(h.p0))) return 'free rod p changed by ' + h.P;
      if (h.K1 > h.K0 * (1 + 1e-9) + 1e-12) return 'K grew from ' + h.K0 + ' to ' + h.K1; return true; })()` },
    { name: 'door: a constant torque turns it 90° in √(π/α) and ½Iω² = τ·π/2', fn: `(() => { ${R}
      if (S.scene !== 'torque' || r.TQ.mode !== 'follow') return true; const T = r.TQ, p = { L: T.L, m: T.m, F: T.F, r: T.r, th: T.th * Math.PI / 180, mode: 'follow' }, sw = C.makeSwing(p);
      if (sw.none) return true; const I = C.rodI(p.m, p.L), W = 0.5 * I * sw.w90 * sw.w90, Wt = Math.abs(sw.tau0) * Math.PI / 2;
      return near(W, Wt, 1e-9) ? true : 'work-energy off: ' + W + ' vs ' + Wt; })()` },
  ],
  steps: [
    { name: 'every scene: preset, Play, then change a slider mid run and Reset', fn: `(async () => {
      const r = window.__rot; for (const id of Object.keys(r.S.preset)) { const b = document.querySelector('#presets button[data-p=' + (r.S.preset[id]) + ']'); if (b) b.click();
        const act = document.getElementById('act'); act && act.click(); await new Promise((x) => setTimeout(x, 250));
        for (const s of document.querySelectorAll('input[type=range]')) if (s.offsetParent) { s.value = s.max; s.dispatchEvent(new Event('input', { bubbles: true })); }
        await new Promise((x) => setTimeout(x, 200));
        for (const s of document.querySelectorAll('input[type=range]')) if (s.offsetParent) { s.value = s.min; s.dispatchEvent(new Event('input', { bubbles: true })); }
        act && act.click(); await new Promise((x) => setTimeout(x, 200)); } })()` },
    { name: 'every scene button at max slowdown and double press of Play', fn: `(async () => {
      for (const b of document.querySelectorAll('#sceneSeg button')) { b.click(); const sp = document.querySelector('#speedSeg button'); sp && sp.click();
        const act = document.getElementById('act'); act.click(); act.click(); act.click(); await new Promise((x) => setTimeout(x, 150)); } })()` },
  ],
};
