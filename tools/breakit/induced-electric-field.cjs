/* Known values for the break-it test (tools/breakit.cjs), induced-electric-field. Hook: window.__ief (S, physics, Ephi, overlap, ...).
   Faraday's law holds for any path and any current: the added up circulation equals -dPhi/dt (also for a path partly over the
   solenoid, where the flux uses the overlap area); E grows as r inside and falls as 1/r outside and is continuous at r = R; the
   readouts (3 significant figures) equal the physics of the sliders; the sliders' outputs show the state; the first preset is
   OpenStax 13.8 (3.4 mV/m at t = 0); the AC preset is 60 Hz. */
const pre = `const I = window.__ief; if (!I) return true;
  const S = I.S, f = I.physics(), d = I.pathD();
  const rd = () => { const o = {}; for (const e of document.querySelectorAll('#out > div')) o[e.firstElementChild.textContent] = e.lastElementChild.textContent; return o; };
  const val = (s, unit) => { const m = String(s).replace(/\\u2212/g, '-').match(/^(-?[0-9.]+(?:e[-+]?[0-9]+)?) ([kmµnp]?)(.+)$/); if (!m || m[3] !== unit) return NaN; return +m[1] * ({ k: 1e3, m: 1e-3, 'µ': 1e-6, n: 1e-9, p: 1e-12, '': 1 })[m[2]]; };
  const close = (got, want) => Math.abs(got - want) <= 0.0051 * Math.abs(want) + 1e-30 || (want === 0 && got === 0);
`;
module.exports = {
  checks: [
    { name: "Faraday's law: circulation around the path = -dPhi/dt for every path, current and time", fn: `(() => { ${pre}
      for (const k of ['I', 'dI', 'B', 'dB', 'Phi', 'dPhi', 'circ']) if (!isFinite(f[k])) return k + ' is ' + f[k];
      const scale = Math.abs(f.dB) * Math.PI * Math.max(S.R, S.pa) ** 2 + 1e-30;
      /* the sum uses 720 pieces; where the path crosses the solenoid edge the field has a kink, so allow 0.1 % of the largest flux rate */
      return Math.abs(f.circ - (-f.dPhi)) <= 1e-3 * scale ? true : 'circulation ' + f.circ + ' but -dPhi/dt ' + (-f.dPhi) + ' (path r ' + S.pa + ', d ' + d + ', R ' + S.R + ')'; })()` },
    { name: "field shape: E = -(r/2) dB/dt inside, -(R^2/2r) dB/dt outside, continuous at R; flux = B times the overlap area", fn: `(() => { ${pre}
      const R = S.R, dB = f.dB, E = I.Ephi;
      for (const r of [R * 0.25, R * 0.5, R * 0.999999]) if (Math.abs(E(r, R, dB) + 0.5 * r * dB) > 1e-12 * (Math.abs(dB) + 1)) return 'inside E wrong at r = ' + r;
      if (Math.abs(E(R * 0.9999999, R, dB) - E(R * 1.0000001, R, dB)) > 1e-6 * (Math.abs(E(R, R, dB)) + 1e-12)) return 'E jumps at r = R';
      if (Math.abs(E(2 * R, R, dB) * 2 - E(R, R, dB)) > 1e-12 * (Math.abs(dB) + 1)) return 'E does not fall as 1/r outside';
      if (Math.abs(I.overlap(R, S.pa, 0) - Math.PI * Math.min(R, S.pa) ** 2) > 1e-15) return 'concentric overlap';
      if (I.overlap(R, S.pa, R + S.pa + 1e-9) !== 0) return 'separate circles overlap';
      const ov = I.overlap(R, S.pa, d); if (!(ov >= 0 && ov <= Math.PI * Math.min(R, S.pa) ** 2 + 1e-15)) return 'overlap ' + ov + ' out of range';
      if (Math.abs(f.Phi - f.B * ov) > 1e-15 * (1 + Math.abs(f.Phi))) return 'Phi != B x overlap'; return true; })()` },
    { name: "readouts equal the physics at 3 significant figures: I, B, dB/dt, flux, -dPhi/dt, circulation, E", fn: `(() => { ${pre}
      const o = rd(), mu = I.MU0, B = mu * S.n * f.I;
      const t = [['Current I', 'A', f.I], ['B inside, μ₀nI', 'T', B], ['dB/dt inside', 'T/s', f.dB], ['Flux through the path Φ', 'Wb', f.Phi], ['−dΦ/dt', 'V', -f.dPhi]];
      if (!S.blind) t.push(['∮E·dl around the path, added up', 'V', f.circ]);
      for (const [name, unit, want] of t) { const got = val(o[name], unit); if (!(close(got, want))) return name + ' shows ' + o[name] + ', physics gives ' + want; }
      if (!S.blind && d < 1e-9) { const e = I.Ephi(S.pa, S.R, f.dB), txt = o['E on the path'], got = val(txt.split(',')[0], 'V/m');
        if (!close(got, Math.abs(e))) return 'E on the path shows ' + txt + ', physics gives ' + e;
        if (e !== 0 && (e > 0) !== /counterclockwise/.test(txt)) return 'direction word wrong: ' + txt + ' for E = ' + e; }
      return true; })()` },
    { name: "slider outputs and sliders show the state; path center stays within the plate", fn: `(() => { ${pre}
      const t = (id) => document.getElementById(id).textContent;
      if (t('oPa') !== (S.pa * 100).toFixed(1) + ' cm') return 'path radius shows ' + t('oPa') + ', state ' + S.pa;
      if (t('oPd') !== (d * 100).toFixed(1) + ' cm') return 'distance shows ' + t('oPd') + ', state ' + d;
      if (t('oR') !== (S.R * 100).toFixed(1) + ' cm') return 'R shows ' + t('oR');
      if (t('oN') !== S.n + ' /m') return 'n shows ' + t('oN');
      if (!(S.t >= 0 && isFinite(S.t))) return 'S.t = ' + S.t;
      if (!(S.w.a > 0 && isFinite(S.w.a))) return 'rate ' + S.w.a; return true; })()` },
    { name: "presets: Example 13.8 gives 3.4 mV/m at t = 0; the AC preset is 60 Hz; steady gives no field", fn: `(() => { ${pre}
      const on = document.querySelector('#presets [aria-pressed=true]'); if (!on) return true; const k = on.dataset.p, P = I.PRESETS[k];
      if (S.t !== 0 || S.n !== 2000 || Math.abs(S.R - 0.02) > 1e-12) return true;
      if (k === 'outside') { const e = Math.abs(I.Ephi(S.pa, S.R, f.dB)); if (Math.abs(e - 3.4e-3) > 0.05e-3 || Math.abs(S.pa - 0.06) > 1e-12) return 'outside preset E = ' + e; }
      if (k === 'ac' && Math.abs(P.w.a / (2 * Math.PI) - 60) > 1e-9) return 'ac preset ' + P.w.a;
      if (k === 'steady' && (f.dB !== 0 || f.circ !== 0)) return 'steady has a field';
      if (k === 'aside' && Math.abs(f.circ) > 1e-12) return 'path beside the solenoid has circulation ' + f.circ;
      return true; })()` },
  ],
  steps: [
    { name: "drag the path far past the edge, shrink the solenoid below the path, switch to alternating and steady", fn: `(() => {
      const set = (id, v) => { const s = document.getElementById(id); s.value = v; s.dispatchEvent(new Event('input', { bubbles: true })); };
      set('sPd', 9); set('sPa', 9); set('sR', 1); set('sPd', 0); set('sPa', 0.5);
      document.querySelector('#wave [data-w=ac]').click(); set('sA', 3.3); set('sPa', 1);
      document.querySelector('#wave [data-w=steady]').click(); document.querySelector('#wave [data-w=ramp]').click(); set('sA', 1.3);
      const c = document.getElementById('can'); for (const k of ['ArrowRight', 'ArrowRight', 'ArrowUp', 'ArrowLeft']) c.dispatchEvent(new KeyboardEvent('keydown', { key: k, bubbles: true }));
    })()` },
    { name: "ring on, blind on, pause, preset aside then partial", fn: `(() => {
      const click = (s) => document.querySelector(s).click();
      document.getElementById('ring').click(); document.getElementById('labBlind').click(); click('#playBtn');
      click('#presets [data-p=aside]'); click('#presets [data-p=partial]'); document.getElementById('labBlind').click(); click('#restartBtn');
    })()` },
  ],
};
