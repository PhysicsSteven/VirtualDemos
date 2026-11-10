/* Known values for the break-it test (tools/breakit.cjs), doppler. Hook: window.__dop (S, roots, run, applyPreset, ...).
   Every arriving wave (roots) obeys the wave equation v (t - t_e) = distance and its frequency ratio equals the textbook formula
   from the source and observer velocities (sound: (v - n.vo)/(v - n.vs); light: sqrt(1-b^2)/(1 - b cos th)); a source at 90 degrees
   to the line of sight in light gives exactly 1/gamma; the readouts (when paused) equal the roots, gamma, wavelength and Mach cone
   angle asin(1/M); the presets hold their stated numbers (ambulance 30 m/s, jet Mach 2 and 30 deg cone, transverse 500 -> 625 nm). */
const pre = `const D = window.__dop; if (!D) return true;
  const S = D.S, light = S.mode === 'light', V = light ? 1 : 343.2, RAD = Math.PI / 180;
  const playing = document.getElementById('play').textContent === 'Pause';
  const rd = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-');
  const near = (a, b, tol) => Math.abs(a - b) <= tol * Math.max(Math.abs(b), 1e-12);
`;
module.exports = {
  checks: [
    { name: "each arriving wave: v (t - te) = distance, and f'/f equals the textbook Doppler formula", fn: `(async () => { ${pre}
      if (playing) await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));   /* the roots are refreshed once a frame */
      const vo = light ? [0, 0] : [S.Mo * V * Math.cos(S.odir * RAD), S.Mo * V * Math.sin(S.odir * RAD)];
      for (const r of D.roots) {
        if (!isFinite(r.k) || !isFinite(r.te) || !isFinite(r.R)) return 'non finite root ' + JSON.stringify(r);
        if (r.te > S.t + 1e-9) return 'emitted in the future: te = ' + r.te + ', t = ' + S.t;
        if (Math.abs(V * (S.t - r.te) - r.R) > 1e-6 * Math.max(1, r.R)) return 'v (t - te) = ' + V * (S.t - r.te) + ' but distance ' + r.R;
        const sp = Math.hypot(r.vx, r.vy);
        let want;
        if (light) { const b = sp / V; want = Math.sqrt(1 - b * b) / (1 - b * r.cosTh); }
        else want = (V - (r.n[0] * vo[0] + r.n[1] * vo[1])) / (V - (r.n[0] * r.vx + r.n[1] * r.vy));
        if (!near(r.k, want, 1e-9)) return 'f over f0 = ' + r.k + ', formula gives ' + want;
        if (light && sp > 0 && Math.abs(r.cosTh) < 1e-9 && !near(r.k, Math.sqrt(1 - (sp / V) ** 2), 1e-9)) return 'transverse light is not 1/gamma';
      }
      return true; })()` },
    { name: "readouts equal the live roots (paused): ratio, formula frequency, gamma, wavelength, Mach cone", fn: `(() => { ${pre}
      if (playing || S.t < 0) return true;
      D.run(0);
      if (light) {
        const g = 1 / Math.sqrt(1 - S.M * S.M);
        if (S.M < 0.99 + 1e-9 && rd('lGam') !== g.toFixed(4)) return 'gamma shows ' + rd('lGam') + ', should be ' + g.toFixed(4);
        if (!D.roots.length) return true;
        const r = D.roots[0];
        if (rd('lRel') !== r.k.toFixed(4)) return 'f over f0 shows ' + rd('lRel') + ', root gives ' + r.k.toFixed(4);
        if (rd('lLam') !== (S.lam / r.k).toFixed(1) + ' nm') return 'lambda shows ' + rd('lLam') + ', should be ' + (S.lam / r.k).toFixed(1);
        const z = S.lam / r.k / S.lam - 1; if (Math.abs(parseFloat(rd('lZ')) - z) > 6e-5) return 'z shows ' + rd('lZ') + ', should be ' + z;
        return true;
      }
      if (S.M > 1.0005 && Math.abs(parseFloat(rd('rCone')) - Math.asin(1 / S.M) / RAD) > 0.051) return 'cone shows ' + rd('rCone') + ', asin(1/M) = ' + Math.asin(1 / S.M) / RAD;
      if (!D.roots.length) return true;
      if (rd('rRatio') !== D.roots.map((q) => q.k.toFixed(3)).join(', ')) return 'ratio shows ' + rd('rRatio') + ', roots give ' + D.roots.map((q) => q.k.toFixed(3));
      return true; })()` },
    { name: "presets hold their numbers", fn: `(() => { ${pre}
      const on = document.querySelector('#presets [aria-pressed=true]'); if (!on || !D.S.preset) return true;
      const p = D.S.preset;
      if (p === 'ambulance' && Math.abs(S.M * 343.2 - 30) > 1e-9 && S.preset === 'ambulance' && S.t === 0) return 'ambulance speed ' + S.M * 343.2;
      const want = { ambulance: [30 / 343.2], jet: [2], mach1: [1], redshift: [0.2], transverse: [0.6] }[p];
      if (want && S.t === 0 && !near(S.M, want[0], 1e-9)) return p + ': M = ' + S.M + ', should be ' + want[0];
      if (p === 'transverse' && !near(S.lam / (Math.sqrt(1 - 0.36)), 625, 1e-12)) return 'transverse preset: 500 nm does not give 625 nm';
      if (p === 'jet' && S.t === 0 && Math.abs(Math.asin(1 / S.M) / RAD - 30) > 1e-9) return 'jet cone is not 30 deg';
      return true; })()` },
  ],
  steps: [
    { name: 'pause, then change observer speed and direction, source speed and direction, and the mode while paused', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), q = (s) => document.querySelector(s);
      const set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      q('#presets [data-p=observer]').click(); await pause(1200);
      const pb = document.getElementById('play'); if (pb.textContent === 'Pause') pb.click(); await pause(200);
      set('ospd', 0.6); await pause(300); set('odir', 90); await pause(300); set('spd', 0.5); await pause(300); set('dir', 45); await pause(300);
      q('#mLight').click(); await pause(300); set('spd', 0.7); await pause(300); q('#mSound').click(); await pause(300);
      if (pb.textContent === 'Play') pb.click(); await pause(300);
    })()` },
    { name: 'every preset, switch Sound/Light mid run, speed to Mach 2.5 / 0.99 c and back, observer speed up, restart', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), q = (s) => document.querySelector(s);
      const set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      for (const b of document.querySelectorAll('#presets button')) { b.click(); await pause(250); }
      q('#mSound').click(); await pause(150); set('spd', 2.5); await pause(200); set('ospd', 2.5); set('odir', 180); await pause(300);
      q('#mLight').click(); await pause(200); set('spd', 0.99); await pause(300); set('spd', 0); await pause(200); set('spd', 0.999);
      q('#mSound').click(); await pause(200); set('spd', 1); await pause(300);
      document.getElementById('restart').click(); await pause(300);
      q('#presets button').click(); await pause(200);
    })()` },
    { name: 'drag the observer onto the source path and exactly onto the source, then run', fn: `(async () => {
      const D = window.__dop, pause = (ms) => new Promise((r) => setTimeout(r, ms));
      document.querySelector('#presets [data-p=jet]').click(); await pause(200);
      const c = document.querySelector('canvas'); if (!c) return;
      const r = c.getBoundingClientRect(), h = D.handles(); if (!h.length) return;
      const fire = (t, x, y) => c.dispatchEvent(new PointerEvent(t, { clientX: r.left + x, clientY: r.top + y, pointerId: 2, bubbles: true, button: 0, buttons: t === 'pointerup' ? 0 : 1 }));
      for (const pts of [[0.5, 0.5], [0.5, 0.5], [0.99, 0.01], [0.01, 0.99]]) { fire('pointerdown', r.width * 0.5, r.height * 0.5); fire('pointermove', r.width * pts[0], r.height * pts[1]); await pause(150); fire('pointerup', 0, 0); }
      await pause(400);
    })()` },
  ],
};
