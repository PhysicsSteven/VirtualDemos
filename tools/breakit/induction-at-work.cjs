/* Known values for the break-it test (tools/breakit.cjs), induction-at-work. Hook: window.__iw (S, FL, TB, CARD and the core functions).
   Flashlight: energy bookkeeping (the work your hand does = heat + diodes + capacitor + light; the capacitor's stored energy is
   exactly C V^2 / 2), the EMF now is -dPhi/dz v with the flux derivative equal to a numerical derivative of the flux, the magnet
   moment is B_r V / mu0 = 1.63 A m^2, the coil resistance is 1000 turns of 0.20 mm copper. Tablet: the wire EMF is Phi'(u) v, and the
   least squares fit puts a moving pen back within a micrometer of where it is, anywhere on the tablet. Card: the bits and the number
   on the stripe have odd parity and the right length; a finished swipe reads back the number that was written, at any speed. */
const pre = `const I = window.__iw; if (!I) return true;
  const S = I.S, near = (a, b, tol) => Math.abs(a - b) <= tol * Math.max(Math.abs(b), 1e-300);
`;
module.exports = {
  checks: [
    { name: "flashlight energy: the capacitor holds C V²/2 and the work of the hand equals heat + diodes + capacitor + light", fn: `(() => { ${pre}
      const F = S.fl, st = F.st, C = F.C, W = (window.__iwb = window.__iwb || new WeakMap());
      for (const k of ['Vc', 'Ehand', 'Eheat', 'Ediode', 'Eled', 'Ecap', 'z', 'v', 't']) if (!isFinite(st[k])) return k + ' is ' + st[k];
      if (st.Vc < -1e-9) return 'capacitor voltage is negative: ' + st.Vc;
      if (st.Ehand < -1e-15 || st.Eheat < 0 || st.Ediode < 0 || st.Eled < 0) return 'a cumulative energy went negative';
      const i1 = st.Ecap - 0.5 * C * st.Vc * st.Vc, i2 = st.Ehand - (st.Eheat + st.Ediode + st.Ecap + st.Eled), w = W.get(st);
      if (!w) { W.set(st, { i1, i2 }); return true; }
      if (Math.abs(i1 - w.i1) > 1e-9 + 1e-6 * Math.abs(st.Ecap)) return 'stored energy ' + st.Ecap + ' J is not C V²/2 = ' + 0.5 * C * st.Vc ** 2 + ' (offset changed by ' + (i1 - w.i1) + ')';
      if (Math.abs(i2 - w.i2) > 1e-9 + 3e-3 * (st.Ehand + st.Eheat + st.Ediode + st.Eled)) return 'energy not conserved: hand ' + st.Ehand + ' J, heat + diodes + capacitor + light = ' + (st.Eheat + st.Ediode + st.Ecap + st.Eled);
      return true; })()` },
    { name: "flux model: dΦ/dz equals the numerical derivative; magnet moment 1.63 A·m², coil resistance and the dipole constants", fn: `(() => { ${pre}
      const FL = I.FL, TB = I.TB;
      if (!near(I.MU0, 1.25663706127e-6, 1e-15)) return 'mu0 = ' + I.MU0;
      if (!near(FL.m, 1.3 * Math.PI * 0.005 ** 2 * 0.02 / I.MU0, 1e-12) || Math.abs(FL.m - 1.63) > 0.005) return 'flashlight moment ' + FL.m + ' A m² (page says 1.63)';
      if (Math.abs(TB.m - 0.0163) > 5e-5) return 'pen moment ' + TB.m + ' (page says 0.0163)';
      if (!near(FL.R, 1.68e-8 * 1000 * 2 * Math.PI * 0.012 / (Math.PI * (0.1e-3) ** 2), 1e-12)) return 'coil resistance ' + FL.R;
      for (const z of [-0.03, -0.012, -0.004, 0, 0.0007, 0.005, 0.011, 0.03]) {
        const h = 1e-7, num = (I.coilFlux(z + h) - I.coilFlux(z - h)) / (2 * h), an = I.coilFluxDz(z);
        if (Math.abs(num - an) > 1e-6 * Math.max(Math.abs(an), 1e-9) + 1e-12) return 'coil dPhi/dz at ' + z + ': ' + an + ' vs numerical ' + num;
        if (z === 0 && Math.abs(an) > 1e-12) return 'flux not symmetric: dPhi/dz at the center is ' + an;
        if (!(I.coilFlux(z) > 0)) return 'flux not positive at ' + z;
      }
      for (const u of [-0.02, -0.005, -0.001, 0, 0.0013, 0.005, 0.02]) {
        const h = 1e-8, num = (I.wireFlux(u + h) - I.wireFlux(u - h)) / (2 * h), an = I.wireFluxDu(u);
        if (Math.abs(num - an) > 1e-5 * Math.abs(an) + 1e-12) return 'wire dPhi/du at ' + u + ': ' + an + ' vs ' + num;
      }
      return true; })()` },
    { name: "flashlight: the EMF now is −(dΦ/dz) v from the live magnet position and speed", fn: `(() => { ${pre}
      const F = S.fl, st = F.st; if (S.machine !== 'flash' || !F.now || F.shaking && F.ph === undefined) return true;
      const w = -I.coilFluxDz(st.z) * st.v;
      return Math.abs(F.now.eps - w) <= 1e-9 * Math.max(1, Math.abs(w)) + 1e-12 || 'EMF ' + F.now.eps + ' V, −dΦ/dz·v = ' + w; })()` },
    { name: "tablet: wire EMF is Φ′(u) v and the fit finds the pen to a micrometer anywhere on the tablet", fn: `(() => { ${pre}
      const TB = I.TB, XS = I.XS;
      for (let x = 0; x <= 0.1 + 1e-12; x += 0.0037) {
        const e = I.wireEmfs(XS, x, 1), est = I.locate(XS, e);
        if (est === null || Math.abs(est - x) > 2e-6) return 'pen at ' + x + ' m located at ' + est;
        const e2 = I.wireEmfs(XS, x, -0.7); if (e2.some((v, i) => Math.abs(v + 0.7 * e[i]) > 1e-15)) return 'EMF is not linear in the speed';
      }
      if (I.locate(XS, I.wireEmfs(XS, 0.05, 0)) !== null) return 'a pen at rest was located';
      if (S.machine === 'tablet' && !S.blind) { const B = S.tb; if (B.estPt && B.estPt[0] !== null && B.estPt[1] !== null && B.circle && Math.hypot(B.vx, B.vy) > 0.01 && Math.hypot(B.estPt[0] - B.x, B.estPt[1] - B.y) > 5e-4) return 'tablet puts the pen at ' + B.estPt + ' but it is at ' + [B.x, B.y]; }
      return true; })()` },
    { name: "card: the stripe has odd parity and the right length, and a finished swipe reads the number written", fn: `(() => { ${pre}
      const bits = I.track2Bits('0123456789'); if (bits.length !== 2 * I.CARD.lead + 5 * 12) return 'stripe length ' + bits.length;
      const r = S.cd.run; if (!r) return true;
      if (r.bits.length !== 2 * I.CARD.lead + 5 * (r.digits.length + 2)) return 'bits ' + r.bits.length + ' for ' + r.digits;
      if (!r.done) return true;
      if (r.peaks.length !== r.tr.length) return 'found ' + r.peaks.length + ' pulses but the stripe has ' + r.tr.length + ' flips (v = ' + S.cd.v + ')';
      if (!r.read.ok || r.read.digits !== r.digits || !r.read.parity) return 'swiped ' + r.digits + ' at ' + S.cd.v + ' m/s' + (S.cd.uneven ? ' uneven' : '') + ' but read ' + JSON.stringify(r.read);
      return true; })()` },
  ],
  steps: [
    { name: 'card: swipe every speed and every length of number, uneven on and off, typing odd characters; then the other devices', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), q = (s) => document.querySelector(s), I = window.__iw;
      const set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      q('#presets [data-p=card]').click(); await pause(200);
      for (const d of ['0', '12', '9999', '123456', 'abc', '-1e9', '']) for (const v of [0.1, 1.5, 0.5]) { set('digits', d); set('sV', v);
        document.getElementById('swipeBtn').click(); for (let i = 0; i < 30 && !(I.S.cd.run && I.S.cd.run.done); i++) await pause(300); }
      document.getElementById('uneven').click(); document.getElementById('swipeBtn').click(); await pause(800); document.getElementById('swipeBtn').click(); await pause(300);
      q('#presets [data-p=tablet]').click(); await pause(200); document.getElementById('circleBtn').click(); await pause(800);
      q('#presets [data-p=still]').click(); await pause(300);
      q('#presets [data-p=flashled]').click(); await pause(300);
    })()` },
    { name: 'flashlight: shake at the extremes with fast forward, change the capacitor mid run, empty it, LED on and off', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), q = (s) => document.querySelector(s);
      const set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      q('#presets [data-p=flash]').click(); await pause(200);
      set('sF', 6); set('sA', 5); document.getElementById('ff').click(); document.getElementById('ledOn').click(); await pause(1200);
      for (const b of document.querySelectorAll('#capSeg button')) { b.click(); await pause(300); }
      document.getElementById('emptyBtn').click(); await pause(300); set('sF', 1); set('sA', 1); await pause(400);
      document.getElementById('shakeBtn').click(); await pause(200); document.getElementById('shakeBtn').click(); await pause(300);
      document.getElementById('ff').click(); document.getElementById('ledOn').click();
    })()` },
  ],
};
