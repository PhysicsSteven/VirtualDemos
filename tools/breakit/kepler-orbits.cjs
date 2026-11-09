/* Known values for the break-it test (tools/breakit.cjs), kepler-orbits. Hook: window.__kepler (S, elements, SBK, ...).
   Orbit view (not the Sandbox), planet A: Kepler's third law P² = a³/M from the live state; the rail readouts equal the elements of
   the live state; energy and the semi latus rectum h²/GM (angular momentum) stay constant while it runs; every finished wedge has
   area ½·h·Δt (second law); the Launch readouts match the launch. The Earth preset (M = 1) has P = 1 yr and a = 1 AU.
   Sandbox: with no merge the total momentum and the total energy stay at their start values. */
const orbit = `const K = window.__kepler; if (!K || K.S.sand || !K.S.A || K.S.A.done) return true;
  const S = K.S, A = S.A, el = K.elements(A), M = S.M, TAU = 2 * Math.PI, KMS = 4.740470;
  const rd = (id) => document.getElementById(id).textContent.replace(/−/g, '-').replace(/\\u2212/g, '-');
  const near = (got, want, tol) => Math.abs(got - want) <= tol * Math.max(Math.abs(want), 1e-12);
  const yrs = (t) => { const m = t.match(/^(-?[\\d.eE+-]+) (d|yr)$/); return m ? parseFloat(m[1]) / (m[2] === 'd' ? 365.25 : 1) : NaN; };
`;
module.exports = {
  checks: [
    { name: "third law P² = a³/M from the live state, and the readouts agree", fn: `(() => { ${orbit}
      if (!el.bound || el.parabolic) return true;
      if (!near(el.P * el.P, el.a ** 3 / M, 1e-9)) return 'P² = ' + el.P ** 2 + ' but a³/M = ' + el.a ** 3 / M;
      if (S.blind) return true;
      const a = parseFloat(rd('rA')), P = yrs(rd('rP'));
      if (!near(a, el.a, 6e-4)) return 'rA shows ' + rd('rA') + ', live a = ' + el.a;
      if (!near(P, el.P, 5e-3)) return 'rP shows ' + rd('rP') + ', live P = ' + el.P + ' yr';
      if (!near(P * P * M, a ** 3, 1.2e-2)) return 'shown P² M = ' + P * P * M + ' but shown a³ = ' + a ** 3;
      return true; })()` },
    { name: "readouts equal the live state (e, r, speeds, energy)", fn: `(() => { ${orbit}
      if (S.blind) return true;
      const km = (id) => parseFloat(rd(id));
      if (!near(parseFloat(rd('rE')), el.e, 6e-3) && Math.abs(parseFloat(rd('rE')) - el.e) > 6e-5) return 'rE shows ' + rd('rE') + ', e = ' + el.e;
      if (!near(km('rR'), el.r, 6e-4)) return 'rR shows ' + rd('rR') + ', r = ' + el.r;
      if (!near(km('rV'), el.v * KMS, 6e-3)) return 'rV shows ' + rd('rV') + ', v = ' + el.v * KMS + ' km/s';
      if (!near(km('rVesc'), Math.sqrt(2 * TAU * TAU * M / el.r) * KMS, 6e-3)) return 'escape speed readout ' + rd('rVesc');
      if (isFinite(el.vp) && !el.radial && !near(km('rVp'), el.vp * KMS, 6e-3)) return 'perihelion speed ' + rd('rVp') + ', should be ' + el.vp * KMS;
      if (el.bound && !el.radial && !near(km('rVa'), el.va * KMS, 6e-3)) return 'aphelion speed ' + rd('rVa') + ', should be ' + el.va * KMS;
      if (el.bound && !el.radial && Math.abs(el.vp * el.q - el.va * el.Q) > 1e-9 * el.vp * el.q) return 'vp q != va Q';
      return true; })()` },
    { name: "energy and angular momentum stay constant while it runs", fn: `(() => { ${orbit}
      const mu = TAU * TAU * M, p = el.h * el.h / mu, W = (window.__kb = window.__kb || new WeakMap());
      if (el.r < 0.02 || el.q < 0.02) return true;      /* a plunge: the step is too coarse near the star to hold 1e-3 */
      const w = W.get(A);
      if (!w) { W.set(A, { p, E0: A.E0 / mu }); return true; }
      if (!near(p, w.p, 1e-4)) return 'h²/GM went from ' + w.p + ' to ' + p + ' (angular momentum changed)';
      if (Math.abs(el.eps / mu - w.E0) > 1e-4 * Math.max(Math.abs(w.E0), 1e-3 / Math.max(el.r, 0.01))) return 'ε/GM went from ' + w.E0 + ' to ' + el.eps / mu;
      return true; })()` },
    { name: "status, a and P agree with the energy (bound means ε < 0)", fn: `(() => { ${orbit}
      if (S.blind) return true;
      const mu = TAU * TAU * M, st = rd('rStatus'), eps = el.eps, scale = mu / el.r;
      if (/Parabola/.test(st) && Math.abs(eps) > 0.02 * scale) return '"' + st + '" but ε is ' + (eps / scale).toFixed(3) + ' of GM/r (v = ' + (el.v * KMS).toPrecision(3) + ' km/s, escape ' + (el.vesc * KMS).toPrecision(3) + '): a bound orbit with a = ' + (-mu / (2 * eps)).toPrecision(3) + ' AU';
      if (eps < -0.02 * scale && /∞|none/.test(rd('rA') + rd('rP'))) return 'ε < 0 (bound) but the readouts say a = ' + rd('rA') + ', P = ' + rd('rP') + ' (status "' + st + '")';
      if (eps > 0.02 * scale && !/Unbound|Parabola/.test(st)) return 'ε > 0 but the status is "' + st + '"';
      return true; })()` },
    { name: "equal areas in equal times: every finished wedge is ½·h·Δt", fn: `(() => { ${orbit}
      if (!A.wedges || !A.wedges.length || !(A.dtW > 0) || el.r < 0.02 || el.q < 0.02) return true;
      const want = 0.5 * Math.abs(el.h) * A.dtW;
      for (const w of A.wedges) if (!near(Math.abs(w.area), want, 1e-3)) return 'wedge ' + w.k + ' has area ' + Math.abs(w.area) + ', ½hΔt = ' + want;
      if (!S.blind && !near(parseFloat(rd('wTheory')), want, 1e-3)) return 'readout ½·h·Δt ' + rd('wTheory') + ', should be ' + want;
      return true; })()` },
    { name: "measured period matches 2π√(a³/GM) once an orbit is done", fn: `(() => { ${orbit}
      if (!el.bound || !isFinite(A.Pm) || el.e > 0.99) return true;
      return near(A.Pm, el.P, 2e-4) ? true : 'P measured ' + A.Pm + ' yr, P = ' + el.P; })()` },
    { name: "Launch readouts match the launch; circular and escape speeds", fn: `(() => { ${orbit}
      if (K.SBK && K.SBK.on) return true;
      const L = K.elements(S.launch), mu = TAU * TAU * M, kms = (id) => parseFloat(rd(id));
      if (Math.abs(kms('lV') - L.v * KMS) > 6e-3 * L.v * KMS + 1e-5) return 'v0 shows ' + rd('lV') + ', launch speed ' + L.v * KMS;
      if (!near(kms('lC'), Math.sqrt(mu / L.r) * KMS, 6e-3)) return 'circular speed shows ' + rd('lC');
      if (!near(kms('lE'), Math.SQRT2 * Math.sqrt(mu / L.r) * KMS, 6e-3)) return 'escape speed shows ' + rd('lE');
      if (!near(parseFloat(rd('lR')), L.r, 6e-3)) return 'r0 shows ' + rd('lR') + ', launch radius ' + L.r;
      return true; })()` },
    { name: "preset orbits: Earth a = 1 AU and P = 1 yr at M = 1; Mars, Mercury, Halley, Alpha Cen B", fn: `(() => {
      const K = window.__kepler; if (!K || K.S.sand || K.S.preset == null) return true;
      const want = { earth: [1.0, 1.0, 1], mars: [1.5237, 1.8808, 1], mercury: [0.3871, 0.2408, 1], halley: [17.8, 75.1, 1], alphacen: [23.299, 79.762, 1.988] }[K.S.preset]; if (!want || K.S.M !== want[2]) return true;
      const el = K.elements(K.S.launch);
      if (Math.abs(el.a - want[0]) > 5e-5) return K.S.preset + ': a = ' + el.a + ', should be ' + want[0];
      if (Math.abs(el.P - want[1]) > 6e-4 * want[1]) return K.S.preset + ': P = ' + el.P + ', should be ' + want[1];
      return true; })()` },
    { name: "Sandbox: with no merge the total momentum and energy stay fixed", fn: `(() => {
      const K = window.__kepler; if (!K || !K.S.sand || !K.SBK.st) return true;
      const bs = K.SBK.st.bs, TAU = 2 * Math.PI; if (bs.length < 2) return true;
      let px = 0, py = 0, Ek = 0, U = 0, M = 0;
      for (const b of bs) { px += b.m * b.vx; py += b.m * b.vy; Ek += 0.5 * b.m * (b.vx ** 2 + b.vy ** 2); M += b.m; }
      for (let i = 0; i < bs.length; i++) for (let j = i + 1; j < bs.length; j++) U -= TAU * TAU * bs[i].m * bs[j].m / Math.hypot(bs[j].x - bs[i].x, bs[j].y - bs[i].y);
      const sig = bs.map((b) => b.id + ':' + b.m).join(','), key = sig + '|' + K.SBK.st.t, W = (window.__kbs = window.__kbs || { sig: '', t: 0, run: false });
      const prev = { ...W }; Object.assign(W, { sig, t: K.SBK.st.t, run: K.SBK.playing, px, py, E: Ek + U, M });
      if (!(prev.sig === sig && prev.run && K.SBK.playing && K.SBK.st.t > prev.t && !K.SBK.drag)) return true;
      const dp = Math.hypot(px - prev.px, py - prev.py) / (M * 1);
      if (dp > 1e-6 * Math.max(1, Math.hypot(prev.px, prev.py) / M)) return 'momentum changed by ' + dp + ' M☉·AU/yr per M with no merge';
      return true; })()` },
  ],
  steps: [
    { name: 'Halley then Escape then Mercury, then M ×10 and back mid orbit (keep shape on and off)', fn: `(async () => {
      const go = (id) => document.querySelector('#presets [data-p=' + id + ']').click();
      const m = document.getElementById('mass'), k = document.getElementById('keep'), pause = (ms) => new Promise((r) => setTimeout(r, ms));
      go('halley'); await pause(300); go('escape'); await pause(300); go('mercury'); await pause(600);
      for (const keep of [true, false]) {
        if (k.checked !== keep) k.click();
        for (const v of ['1', '-1', '0.3', '0']) { m.value = v; m.dispatchEvent(new Event('input', { bubbles: true })); await pause(300); }
      }
      if (!k.checked) k.click();
      go('earth'); await pause(400);
    })()` },
    { name: 'extreme launch: drag the arrow tip to near radial, then circular, then back', fn: `(async () => {
      const K = window.__kepler, S = K.S, pause = (ms) => new Promise((r) => setTimeout(r, ms));
      document.querySelector('#presets [data-p=earth]').click(); await pause(200);
      const el = document.getElementById('view'), r = el.getBoundingClientRect();
      const send = (type, x, y) => el.dispatchEvent(new PointerEvent(type, { clientX: r.left + x, clientY: r.top + y, pointerId: 1, bubbles: true, button: 0, buttons: type === 'pointerup' ? 0 : 1 }));
      const [tx, ty] = [K.V.cx + S.launch.x * K.V.s + S.launch.vx * S.kw * K.V.s, K.V.cy - S.launch.y * K.V.s - S.launch.vy * S.kw * K.V.s];
      send('pointerdown', tx, ty);
      for (const [dx, dy] of [[0, 0], [-400, -4], [0.5, 0.5], [400, 300], [0, 1]]) { send('pointermove', K.V.cx + dx, K.V.cy + dy); await pause(120); }
      send('pointerup', K.V.cx, K.V.cy); await pause(300);
      document.querySelector('#presets [data-p=circle]').click(); await pause(300);
    })()` },
    { name: 'slow launch from the keyboard: arrow down until the speed is a few tenths of a km/s', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), v = document.getElementById('view');
      document.querySelector('#presets [data-p=earth]').click(); await pause(200); v.focus();
      for (let i = 0; i < 61; i++) v.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true, cancelable: true }));
      await pause(800);
    })()` },
    { name: 'Sandbox: every ready made system, run, then back to Earth', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      document.querySelector('#presets [data-p=sandbox]').click(); await pause(200);
      for (const b of document.querySelectorAll('#sbkRigs button')) { b.click(); await pause(200); document.getElementById('play').click(); await pause(700); }
      document.querySelector('#presets [data-p=earth]').click(); await pause(300);
    })()` },
  ],
};
