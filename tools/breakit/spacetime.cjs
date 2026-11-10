/* Known values for the break-it test (tools/breakit.cjs), spacetime. Hook: window.__st (S, applyPreset, select, ...).
   The Lorentz boost with c = 1 (the page has no core markers, so the checks recompute from S): γ and 1/γ and the axis tilt equal the
   physics of β (to the shown digits); for the selected event (ct, x) the shown (ct′, x′) is the boost and ct′² − x′² = ct² − x²
   (the invariant); for the selected pair, cΔt′² − Δx′² = cΔt² − Δx² (Δs²), the type (timelike, lightlike, spacelike) follows its
   sign, and a timelike pair's proper time is √Δs²; the clocks: Home T, Rocket and Twin T/γ; the rod is L0/γ in S, L0 in S′. */
const pre = `const T = window.__st; if (!T) return true; const S = T.S, b = S.beta, g = 1 / Math.sqrt(1 - b * b);
  const rd = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-');
  const nums = (s) => (s.match(/-?\\d+(?:\\.\\d+)?/g) || []).map(parseFloat);
  const near = (got, want, tol) => Math.abs(got - want) <= tol;
`;
module.exports = {
  checks: [
    { name: "γ, 1/γ and the axis tilt equal the physics of β", fn: `(() => { ${pre}
      if (!isFinite(b) || Math.abs(b) >= 1) return 'beta is ' + b;
      if (S.blind) return true;
      if (!near(parseFloat(rd('rBeta')), b, 0.0051)) return 'beta shows ' + rd('rBeta') + ', state ' + b;
      if (!near(parseFloat(rd('rGamma')), g, 5.1e-4)) return 'gamma shows ' + rd('rGamma') + ', physics ' + g;
      if (!near(parseFloat(rd('rInv')), 1 / g, 5.1e-4)) return '1/gamma shows ' + rd('rInv') + ', physics ' + 1 / g;
      if (!near(parseFloat(rd('rTilt')), Math.atan(Math.abs(b)) * 180 / Math.PI, 0.051)) return 'tilt shows ' + rd('rTilt');
      if (!near(g * g * (1 - b * b), 1, 1e-12)) return 'gamma² (1 − β²) != 1';
      return true; })()` },
    { name: "selected event: (ct′, x′) is the boost of (ct, x), and the interval ct² − x² is the same in S and S′", fn: `(() => { ${pre}
      const e = S.events.find((v) => v.id === S.sel[S.sel.length - 1]); if (!e) return true;
      const [a, c] = nums(rd('rEvP')), [t0, x0] = nums(rd('rEvS'));
      const tp = g * (e.t - b * e.x), xp = g * (e.x - b * e.t);
      if (!near(t0, e.t, 0.0051) || !near(x0, e.x, 0.0051)) return 'S coordinates show ' + rd('rEvS') + ', event (' + e.t + ', ' + e.x + ')';
      if (!near(a, tp, 0.0051) || !near(c, xp, 0.0051)) return 'S′ coordinates show ' + rd('rEvP') + ', boost gives (' + tp.toFixed(3) + ', ' + xp.toFixed(3) + ')';
      if (!near(tp * tp - xp * xp, e.t * e.t - e.x * e.x, 1e-9 * Math.max(1, e.t * e.t + e.x * e.x))) return 'interval not invariant';
      if (!S.blind) { const v = nums(rd('rEvS2')); if (v.length >= 2 && !near(v[0], v[1], 0.0101)) return 'invariant readout ' + rd('rEvS2'); }
      return true; })()` },
    { name: "selected pair: Δs² the same in both frames, the type follows its sign, proper time √Δs²", fn: `(() => { ${pre}
      const P = S.events.find((v) => v.id === S.sel[0]), Q = S.events.find((v) => v.id === S.sel[1]); if (!P || !Q) return true;
      const dt = Q.t - P.t, dx = Q.x - P.x, s2 = dt * dt - dx * dx, dtp = g * (dt - b * dx), dxp = g * (dx - b * dt);
      if (!near(dtp * dtp - dxp * dxp, s2, 1e-9 * Math.max(1, dt * dt + dx * dx))) return 'Δs² changed under the boost';
      const [d1, d2] = nums(rd('rDS')), [p1, p2] = nums(rd('rDP'));
      if (!near(d1, dt, 0.0051) || !near(d2, dx, 0.0051)) return 'S differences show ' + rd('rDS') + ', (' + dt + ', ' + dx + ')';
      if (!near(p1, dtp, 0.0051) || !near(p2, dxp, 0.0051)) return 'S′ differences show ' + rd('rDP') + ', boost gives (' + dtp.toFixed(3) + ', ' + dxp.toFixed(3) + ')';
      if (S.blind) return true;
      const tol = 1e-6 * (dt * dt + dx * dx) + 1e-9, type = rd('rType');
      const want = (Math.abs(dt) < 1e-9 && Math.abs(dx) < 1e-9) ? 'same event' : Math.abs(s2) <= tol ? 'lightlike' : s2 > 0 ? 'timelike' : 'spacelike';
      if (type !== want) return 'separation says ' + type + ', Δs² = ' + s2 + ' (' + want + ')';
      if (!near(parseFloat(rd('rDs2')), s2, 0.0051)) return 'Δs² shows ' + rd('rDs2') + ', physics ' + s2;
      if (want === 'timelike' && !near(parseFloat(rd('rExtra')), Math.sqrt(s2), 0.0051)) return 'proper time shows ' + rd('rExtra') + ', √Δs² = ' + Math.sqrt(s2);
      if (want === 'spacelike' && !near(parseFloat(rd('rExtra')), Math.sqrt(-s2), 0.0051)) return 'proper distance shows ' + rd('rExtra') + ', √(−Δs²) = ' + Math.sqrt(-s2);
      return true; })()` },
    { name: "clocks and rod: Home T, Rocket and Twin T/γ, rod L0/γ in S and L0 in S′", fn: `(() => { ${pre}
      if (S.blind) return true;
      const Tn = S.Tend, chk = (id, on, want) => on ? (near(parseFloat(rd(id)), want, 0.0051) ? true : id + ' shows ' + rd(id) + ', physics ' + want) : true;
      for (const r of [chk('rHome', S.wl.home, Tn), chk('rRocket', S.wl.rocket, Tn / g), chk('rTwin', S.wl.twin, Tn / g)]) if (r !== true) return r;
      if (S.wl.rod) { const [ls, lp] = nums(rd('rRod')); if (!near(ls, S.L0 / g, 0.0051) || !near(lp, S.L0, 0.0051)) return 'rod shows ' + rd('rRod') + ', physics ' + (S.L0 / g).toFixed(3) + ', ' + S.L0; }
      return true; })()` },
  ],
  steps: [
    { name: 'every preset with every layer on, β to both ends and across zero, then select and delete events', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      for (const b of [...document.querySelectorAll('#presets button')]) {
        b.click(); await pause(100);
        const s = $('beta'); for (const v of ['0.95', '-0.95', '0', '0.01', '-0.01']) { s.value = v; s.dispatchEvent(new Event('input', { bubbles: true })); await pause(60); }
      }
      for (let i = 0; i < 12; i++) { $('evAdd').click(); await pause(20); }
      const bs = [...document.querySelectorAll('#evList button')]; for (const x of bs.slice(0, 3)) { x.click(); await pause(30); }
      $('evDel').click(); await pause(50); $('evClear').click(); await pause(50);
    })()` },
    { name: 'twin trip: longest trip at the fastest speed, run the clocks, change the speed mid run, then Reset', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      const t = $('tend'); t.value = '20'; t.dispatchEvent(new Event('input', { bubbles: true }));
      const s = $('beta'); s.value = '0.95'; s.dispatchEvent(new Event('input', { bubbles: true }));
      const play = document.querySelector('[data-vd-key=play], #play'); if (play) play.click(); await pause(600);
      for (const v of ['-0.95', '0', '0.6']) { s.value = v; s.dispatchEvent(new Event('input', { bubbles: true })); await pause(150); }
      if (play) play.click(); $('reset').click(); await pause(200);
    })()` },
  ],
};
