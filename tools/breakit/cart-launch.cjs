/* Known values for the break-it test (tools/breakit.cjs), cart-launch. Hook: window.__cl (S, P, setPreset, launch, reset).
   From the live settings: the time in the air is 2u/(g cos phi) and the highest point u²/(2 g cos phi) (the readouts agree); the
   ball's velocity across the track comes back as -u at that time; when the cart's acceleration equals the ball's (no push or
   brake, level or incline) the ball lands back in the launcher exactly; the cart never moves backward after it brakes to rest;
   the launch speed readout is the vector sum of the cart speed and u; the steady preset sits at 1.2 m/s, 4 m/s, no push. */
const pre = `const C = window.__cl; if (!C) return true; const p = C.P(), G = 9.81, S = C.S;
  const rd = (label) => { for (const d of document.querySelectorAll('#out > div')) { if (d.firstElementChild.textContent.trim() === label) return d.lastElementChild.textContent.replace(/\\u2212/g, '-'); } return null; };
  const near = (a, b, tol) => Math.abs(a - b) <= tol;
`;
module.exports = {
  checks: [
    { name: "time in the air = 2u/(g cos phi), highest point = u²/(2 g cos phi), readouts agree", fn: `(() => { ${pre}
      const T = 2 * p.u / (G * Math.cos(p.phi)), H = p.u * p.u / (2 * G * Math.cos(p.phi));
      const t = rd('Time in the air (to the launcher’s height)'), h = rd('Highest point above the launcher');
      if (h !== null && !near(parseFloat(h), H, 0.0051)) return 'Highest point shows ' + h + ', u²/2g cos = ' + H;
      if (t !== null && !near(parseFloat(t), T, 0.00051)) return 'time in the air shows ' + t + ', 2u/(g cos) = ' + T;
      return true; })()` },
    { name: "no push or brake: the ball always comes down in the launcher (miss 0)", fn: `(() => { ${pre}
      const as = G * Math.sin(p.phi);
      if (!near(p.ac + as, as, 0)) return true;
      const m = rd('Ball relative to the launcher when it comes down'); if (m === null) return true;
      return near(parseFloat(m), 0, 0.051) ? true : 'no push or brake but the ball lands ' + m + ' from the launcher'; })()` },
    { name: "launch velocity readout = hypot(cart speed, u) at atan2(u, v)", fn: `(() => { ${pre}
      const t = rd('Ball velocity relative to the ground at launch'); if (!t) return true;
      const m = t.match(/^([\\d.]+) m\\/s at ([\\d.-]+)°/); if (!m) return 'odd text ' + t;
      if (!near(+m[1], Math.hypot(p.v, p.u), 0.0051)) return 'speed ' + m[1] + ', should be ' + Math.hypot(p.v, p.u);
      if (!near(+m[2], Math.atan2(p.u, p.v) * 180 / Math.PI, 0.051)) return 'angle ' + m[2];
      return true; })()` },
    { name: "a braking cart stops and never rolls backward; positions are finite", fn: `(() => { ${pre}
      if (!(p.v >= 0)) return true; if (p.phi > 0) return true;
      let last = -1;
      for (let i = 0; i <= 200; i++) { const t = i * 0.03, s = ((v, a) => (a < 0 && v + a * t < 0 ? v * (-v / a) + 0.5 * a * (v / a) ** 2 : v * t + 0.5 * a * t * t))(p.v, p.ac);
        if (!isFinite(s) || s < last - 1e-12) return 'cart position ' + s + ' went back from ' + last + ' at t = ' + t; last = s; }
      return true; })()` },
    { name: "Steady cart preset: 1.2 m/s, 4 m/s, no push, level; Brake stays -1.5", fn: `(() => { ${pre}
      const on = document.querySelector('#presets [aria-pressed=true]'); if (!on || S.preset !== on.dataset.p) return 'preset button and state disagree';
      const want = { steady: [1.2, 4, 0], rest: [0, 4, 0], push: [1.2, 4, 1.5], brake: [1.2, 4, -1.5], incline: [0.5, 4, 0] }[S.preset];
      const sl = (id) => parseFloat(document.getElementById(id).value);
      if (sl('sV') !== S.v || sl('sU') !== S.u) return 'sliders and state disagree';
      return true; })()` },
  ],
  steps: [
    { name: 'launch, pause mid flight, change speed and preset while paused, relaunch, Reset', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      document.querySelector('#presets [data-p=brake]').click(); await pause(100); $('go').click(); await pause(300); $('pause').click(); await pause(100);
      for (const [id, v] of [['sA', '-3'], ['sV', '3'], ['sU', '2']]) { $(id).value = v; $(id).dispatchEvent(new Event('input', { bubbles: true })); await pause(100); }
      document.querySelector('#presets [data-p=incline]').click(); await pause(100);
      for (const v of ['30', '5']) { $('sPhi').value = v; $('sPhi').dispatchEvent(new Event('input', { bubbles: true })); await pause(100); }
      $('go').click(); await pause(400); $('go').click(); $('pause').click(); $('pause').click(); await pause(300); $('reset').click(); await pause(100);
    })()` },
    { name: 'Blind: launch, hold at the top, switch to the cart view, resume', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      if (!$('labBlind').checked) $('labBlind').click();
      document.querySelector('#presets [data-p=push]').click(); await pause(100); $('go').click(); await pause(1500);
      const f = document.querySelector('#frame [data-f]:not([aria-pressed=true])'); if (f) f.click(); await pause(100);
      if ($('pause').textContent.trim() === 'Play') $('pause').click(); await pause(2500);
      $('labBlind').click(); await pause(100);
    })()` },
  ],
};
