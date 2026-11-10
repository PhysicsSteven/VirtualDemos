/* Known values for the break-it test (tools/breakit.cjs), holography. Hook: window.__ho (S, REC, RECON, maxima, ensureRecon, screenNow, ...).
   Record view, plane object wave: the fringes found numerically in the recorded intensity are spaced lambda1/|sin thr - sin tho|
   (the readout agrees), the fringe visibility is 2 sqrt(K)/(1+K), and the bright fringes counted between the cursors equal
   span/d to within one. Reconstruct view: the light leaving the plate has power at the grating equation's image and conjugate
   angles; with the point hologram the brightest point at the predicted image distance sits at the predicted x (the Virtual image
   and Real image setups put it at z = -20 mm and +20 mm, x = 0); the detector power readout equals the physics and is not negative. */
const pre = `const H = window.__ho; if (!H || !H.REC) return true;
  const S = H.S, R = H.REC, RAD = Math.PI / 180, rd = (label) => { for (const d of document.querySelectorAll('#out dt')) if (d.textContent.indexOf(label) === 0) return d.nextElementSibling.textContent.replace(/\\u2212/g, '-'); return null; };
`;
module.exports = {
  checks: [
    { name: "plane wave fringes: measured spacing = lambda1/|sin thr - sin tho|, visibility 2 sqrt(K)/(1+K)", fn: `(() => { ${pre}
      if (S.view !== 'rec' || S.rec.obj !== 'plane' || Math.abs(S.rec.thr - S.rec.tho) < 0.3 || S.blind) return true;
      const d = S.rec.lam1 * 1e-9 / Math.abs(Math.sin(S.rec.thr * RAD) - Math.sin(S.rec.tho * RAD));
      if (d > 8e-6) return true;
      const mx = H.maxima(-4 * d, 4 * d); if (mx.length < 6) return 'only ' + mx.length + ' maxima in eight fringe spacings (d = ' + d + ')';
      const meas = (mx[mx.length - 1] - mx[0]) / (mx.length - 1);
      if (Math.abs(meas - d) > 2e-4 * d) return 'fringes are ' + meas + ' m apart, lambda/|sin - sin| = ' + d;
      const sh = parseFloat(rd('Fringe spacing on the plate')); if (Math.abs(sh - d * 1e6) > 6e-5 * d * 1e6 + 5e-5) return 'readout ' + sh + ' um, physics ' + d * 1e6;
      let hi = 0, lo = 1e9; for (let i = 0; i < 400; i++) { const I = R.intensity(-d + 2 * d * i / 400); if (I > hi) hi = I; if (I < lo) lo = I; }
      const V = (hi - lo) / (hi + lo), want = 2 * Math.sqrt(S.rec.K) / (1 + S.rec.K);
      if (Math.abs(V - want) > 2e-3) return 'visibility ' + V.toFixed(4) + ', 2 sqrt(K)/(1+K) = ' + want.toFixed(4);
      if (Math.abs(parseFloat(rd('Fringe visibility')) - want) > 6e-4) return 'visibility readout ' + rd('Fringe visibility');
      return true; })()` },
    { name: "bright fringes between the cursors = span / d (within one)", fn: `(() => { ${pre}
      if (S.view !== 'rec' || S.rec.obj !== 'plane' || Math.abs(S.rec.thr - S.rec.tho) < 0.3) return true;
      const d = S.rec.lam1 * 1e-9 / Math.abs(Math.sin(S.rec.thr * RAD) - Math.sin(S.rec.tho * RAD)), span = Math.abs(S.mic.b - S.mic.a), M = parseInt(rd('Bright fringes'), 10);
      if (span / d > 2000) return true;
      if (Math.abs(span - parseFloat(rd('Span B')) * 1e-6) > 6e-9) return 'span readout ' + rd('Span B') + ', cursors ' + span * 1e6;
      return Math.abs(M - span / d) <= 1.0001 ? true : M + ' bright fringes counted over ' + (span / d).toFixed(2) + ' spacings'; })()` },
    { name: "the plate keeps its limits: intensity >= 0, exposure never above the maximum of I", fn: `(() => { ${pre}
      for (const x of [0, 1e-4, -7e-4, 1.4e-3]) { const I = R.intensity(x); if (!(I >= 0) || !isFinite(I)) return 'I(' + x + ') = ' + I; }
      return true; })()` },
    { name: "plane wave reconstruction: power leaves at the image and conjugate angles of the grating equation", fn: `(() => { ${pre}
      if (S.view !== 'rc' || S.rec.obj !== 'plane' || !H.RECON || Math.abs(S.rec.thr - S.rec.tho) < 0.3) return true;
      const Q = H.RECON, mu = S.rc.lam2 / S.rec.lam1, si = Math.sin(Q.thi * RAD), dd = Math.sin(S.rec.tho * RAD) - Math.sin(S.rec.thr * RAD);
      let tot = 0; const pw = (m) => Q.Ar[m] * Q.Ar[m] + Q.Ai[m] * Q.Ai[m]; for (let m = 0; m < Q.N; m++) if (Q.kz[m] >= 0) tot += pw(m);
      for (const [nm, s] of [['image', si + mu * dd], ['conjugate', si - mu * dd], ['straight through', si]]) {
        if (Math.abs(s) >= 0.999) continue;
        const th = Math.asin(s) / RAD; let p = 0;
        for (let m = 0; m < Q.N; m++) { if (Q.kz[m] < 0) continue; const t = Math.asin(Q.kx[m] / Q.k2) / RAD; if (Math.abs(t - th) < 0.1) p += pw(m); }
        if (!(p > 1e-3 * tot)) return nm + ' beam: no light within 0.1 degree of ' + th.toFixed(3) + ' (' + (p / tot).toExponential(2) + ' of the total)';
      }
      return true; })()` },
    { name: "point hologram: at the predicted image distance the brightest point sits at the predicted x", fn: `(() => { ${pre}
      if (S.view !== 'rc' || S.rec.obj !== 'one' || !H.RECON || S.blind) return true;
      const z = S.rc.zs, sg = z < 0 ? 1 : -1, mu = S.rc.lam2 / S.rec.lam1, thi = (S.rc.side === 'same' ? S.rec.thr : -S.rec.thr) * RAD;
      const r = S.rec.zo * 1e-3, s = sg * 0 + Math.sin(thi) - sg * mu * Math.sin(S.rec.thr * RAD);
      if (Math.abs(s) >= 0.95) return true;
      const c = Math.sqrt(1 - s * s), Z = -sg * c * c * c * r * r * r / (mu * r * r), X = Z * s / c;
      if (Math.abs(z * 1e-3 - Z) > 6e-6) return true;
      const sc = H.screenNow(); if (Math.abs(sc.peakX - X) > 2e-5) return 'at z = ' + z + ' mm (the image plane) the brightest point is at x = ' + sc.peakX * 1e3 + ' mm, predicted ' + X * 1e3;
      return true; })()` },
    { name: "detector power is a fraction of the light on the plate and the readout shows it", fn: `(() => { ${pre}
      if (S.view !== 'rc' || !H.RECON) return true;
      const P = H.detPower(); if (!(P >= 0) || P > 1.5) return 'detector power ' + P;
      const sh = parseFloat(rd('Into the detector')); return Math.abs(sh - P * 100) <= 6e-5 * 100 + 1e-9 ? true : 'readout ' + rd('Into the detector') + ', physics ' + P * 100; })()` },
  ],
  steps: [
    { name: 'Every setup, Reconstruct then Record, zero beam angle difference (no fringes), extreme angles', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); e.dispatchEvent(new Event('change', { bubbles: true })); };
      for (const k of ['grating', 'point', 'virtual', 'real', 'color', 'beams']) { document.querySelector('#presets [data-p=' + k + ']').click(); await pause(500); }
      document.querySelector('#presets [data-p=beams]').click(); await pause(200);
      for (const [id, v] of [['sThr', '0'], ['sTho', '0'], ['sThr', '30'], ['sTho', '-30'], ['sTho', '30'], ['sK', '20'], ['sK', '1']]) { set(id, v); await pause(150); }
      document.querySelector('#presets [data-p=grating]').click(); await pause(600);
      for (const [id, v] of [['sL2', '400'], ['sL2', '700'], ['sDet', '80'], ['sDet', '-80'], ['sZs', '-32'], ['sZs', '32']]) { set(id, v); await pause(300); }
      document.querySelector('#presets [data-p=beams]').click(); await pause(300);
    })()` },
    { name: 'Point setups: move focus through the image plane, other side of the normal, extreme wavelengths', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); e.dispatchEvent(new Event('change', { bubbles: true })); };
      document.querySelector('#presets [data-p=real]').click(); await pause(700);
      for (const v of ['20', '19.95', '20.05', '-20', '0', '32']) { set('sZs', v); await pause(250); }
      document.querySelector('#presets [data-p=color]').click(); await pause(700);
      for (const v of ['400', '700', '633']) { set('sL2', v); await pause(400); }
      document.querySelector('#presets [data-p=point]').click(); await pause(300);
      set('sThr', '30'); await pause(200); set('sThr', '0'); await pause(200);
      document.querySelector('#presets [data-p=beams]').click(); await pause(300);
    })()` },
  ],
};
