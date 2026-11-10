/* Known values for the break-it test (tools/breakit.cjs), thin-films. Hook: window.__tf (S, film, quarterR, lensT, ...).
   At every state: reflected + transmitted = 1 (lossless films; total internal reflection gives R = 1 and T = 0) for s, p and
   unpolarized light, and the shown R + T is 1.000000; at normal incidence the film's R equals the Airy formula
   (a^2 + b^2 + 2ab cos d)/(1 + a^2 b^2 + 2ab cos d) with d = 4 pi nf t / lambda; a quarter wave coating gives
   ((n1 n2 - nf^2)/(n1 n2 + nf^2))^2; p light has no reflection from the top surface at Brewster's angle atan(nf/n1);
   the shown R equals the physics of the settings; Newton's rings: the m-th dark ring is at r = sqrt(m lambda R); wedge: t = x h / L. */
const pre = `const T = window.__tf; if (!T || !T.film) return true; const S = T.S, near = (a, b, t, s) => Math.abs(a - b) <= t * Math.max(Math.abs(b), s || 0);
  const rd = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-');
`;
module.exports = {
  checks: [
    { name: "R + T = 1 for s, p and unpolarized light, at the current settings and at 0 to 89 degrees", fn: `(() => { ${pre}
      for (const pol of ['s', 'p', 'u']) for (const th of [S.th, 0, 30, 60, 85, 89]) for (const lam of [S.lam, 380, 780]) {
        const f = T.film(S.n1, S.nf, S.n2, S.t, lam, th, pol);
        if (!isFinite(f.R) || !isFinite(f.T) || f.R < -1e-12 || f.R > 1 + 1e-9) return 'R = ' + f.R + ' (' + pol + ', ' + th + ' deg, ' + lam + ' nm, t = ' + S.t + ')';
        if (Math.abs(f.R + f.T - 1) > 1e-9) return 'R + T = ' + (f.R + f.T) + ' (' + pol + ', ' + th + ' deg, ' + lam + ' nm, t = ' + S.t + ', n = ' + S.n1 + ',' + S.nf + ',' + S.n2 + ')'; }
      const t = rd('rRT'); if (t !== '—' && !/^[\\d.]+$/.test(t)) return 'R + T readout ' + t; if (/^[\\d.]+$/.test(t) && Math.abs(parseFloat(t) - 1) > 2e-6) return 'R + T readout shows ' + t;
      return true; })()` },
    { name: "normal incidence: R equals the Airy formula; quarter wave R = ((n1 n2 - nf^2)/(n1 n2 + nf^2))^2", fn: `(() => { ${pre}
      const a = (S.n1 - S.nf) / (S.n1 + S.nf), b = (S.nf - S.n2) / (S.nf + S.n2);
      for (const t of [0, 10, 55.5, S.t, 335, 1234.5, 5000]) for (const lam of [S.lam, 450, 700]) {
        const d = 4 * Math.PI * S.nf * t / lam, want = (a * a + b * b + 2 * a * b * Math.cos(d)) / (1 + a * a * b * b + 2 * a * b * Math.cos(d)), got = T.film(S.n1, S.nf, S.n2, t, lam, 0, 'u').R;
        if (Math.abs(got - want) > 1e-9) return 'normal incidence t = ' + t + ', ' + lam + ' nm: film R = ' + got + ', Airy ' + want; }
      const lam = S.lam, tq = lam / (4 * S.nf), got = T.film(S.n1, S.nf, S.n2, tq, lam, 0, 'u').R, want = T.quarterR(S.n1, S.nf, S.n2);
      if (Math.abs(got - want) > 1e-9) return 'quarter wave: R = ' + got + ', formula ' + want;
      if (S.preset === 'ar' && Math.abs(T.film(S.n1, S.nf, S.n2, S.t, S.lam, S.th, 'u').R - want) > 1e-3) return 'anti reflection preset R is not near the quarter wave value';
      return true; })()` },
    { name: "Brewster: no p reflection from the top surface at atan(nf/n1); r_s there is not 0", fn: `(() => { ${pre}
      const th = Math.atan(S.nf / S.n1) * 180 / Math.PI, p = T.film(S.n1, S.nf, S.n2, S.t, S.lam, th, 'p'), s = T.film(S.n1, S.nf, S.n2, S.t, S.lam, th, 's');
      if (Math.hypot(p.r12[0], p.r12[1]) > 1e-9) return 'p reflection from the top surface at Brewster angle ' + th + ': ' + Math.hypot(p.r12[0], p.r12[1]);
      if (S.nf !== S.n1 && !(Math.hypot(s.r12[0], s.r12[1]) > 1e-6)) return 's reflection vanished at Brewster angle';
      return true; })()` },
    { name: "the shown R, R2 and T equal the physics of the settings (rays view)", fn: `(() => { ${pre}
      if (S.view !== 'rays') return true;
      const fu = T.film(S.n1, S.nf, S.n2, S.t, S.lam, S.th, S.pol), pc = (id) => { const t = rd(id), m = t.match(/^([\\d.]+)%/); return m ? [parseFloat(m[1]), t.split('.')[1].length - 1] : null; };
      for (const [id, v] of [['rR', fu.R], ['rR2', fu.R2], ['rT', fu.T]]) { const g = pc(id); if (!g) return id + ' shows ' + rd(id); if (Math.abs(g[0] - 100 * v) > 0.5001 * 10 ** -g[1] + 1e-9) {
        /* the readouts refresh at most every 120 ms: only a mismatch that is still there 250 ms later counts */
        const w = window.__tfmis, now = performance.now(), key = id + rd(id) + S.t + S.th + S.lam;
        if (!w || w.key !== key) { window.__tfmis = { key, at: now }; return true; }
        if (now - w.at > 250) return id + ' shows ' + rd(id) + ', physics ' + 100 * v + ' %'; return true; } }
      window.__tfmis = null; return true; })()` },
    { name: "Newton's rings dark ring m at r = sqrt(m lambda R); wedge thickness x h / L", fn: `(() => { ${pre}
      for (const R of [0.5, 1, 5]) for (const m of [1, 2, 7]) { const lam = 550e-9, r = Math.sqrt(m * lam * R), t = T.lensT(r, R); if (Math.abs(t - m * 275) > 1e-4 * m * 275) return 'ring ' + m + ' at R = ' + R + ': gap ' + t + ' nm, should be ' + m * 275; if (Math.abs(T.lensR(t, R) - r) > 1e-9 * r) return 'lensR is not the inverse of lensT'; }
      if (T.lensT(0, 1) !== 0 || T.wedgeT(0, 10, 7) !== 0 || Math.abs(T.wedgeT(10, 10, 7) - 7) > 1e-12 || Math.abs(T.wedgeT(5, 10, 7) - 3.5) > 1e-12) return 'wedge or lens thickness';
      return true; })()` },
  ],
  steps: [
    { name: 'every preset and view, every angle 0 to 89 and both polarizations, extreme indices, back to Two reflections', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (e, v) => { e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); e.dispatchEvent(new Event('change', { bubbles: true })); };
      for (const b of document.querySelectorAll('#presets button')) { b.click(); await pause(200);
        for (const e of [...document.querySelectorAll('input[type=range]')].filter((x) => x.offsetParent)) for (const v of [e.min, e.max, e.min]) { set(e, v); await pause(25); } }
      document.querySelector('#presets [data-p=two]').click(); await pause(200);
    })()` },
    { name: 'index of the film below both outer indices, TIR angles, p then s then unpolarized', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), T = window.__tf, set = (e, v) => { e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); e.dispatchEvent(new Event('change', { bubbles: true })); };
      document.querySelector('#presets [data-p=oil]').click(); await pause(150);
      for (const e of ['n1', 'nf', 'n2', 'th', 't'].map((i) => document.getElementById(i))) {
        for (const v of [e.min, e.max, '89', e.min, e.max]) { set(e, v); await pause(25); } }
      for (const q of ['p', 's', 'u']) { const b = document.querySelector('#pols [data-q="' + q + '"]'); if (b) { b.click(); await pause(60); } }
      document.querySelector('#presets [data-p=two]').click(); await pause(200);
    })()` },
  ],
};
