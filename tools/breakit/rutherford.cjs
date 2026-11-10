/* Known values for the break-it test (tools/breakit.cjs), rutherford. Hook: window.__rs (S, core: the physics functions, bins, fired).
   Single particle (nuclear atom): θ = 2 arctan(|D|/2b) with D = zZe²/4πε₀K (29.6 fm for 7.69 MeV on gold) and the 61 degrees of the
   first preset; the readouts (D, v/c, θ, r_min, the center of mass K) equal the physics of the controls; r_min = (D/2)(1/sin(θ/2) ± 1)
   (+ repulsion, − attraction); the exact orbit agrees with an independent RK4 integration of the Coulomb force (angle and r_min), with
   energy and angular momentum conserved along it (v² = 1 − D/r, v r_perp = b); a head on alpha stops at D; b = D/2 turns it through 90.
   The Rutherford cross section integrates to the beam fractions (π(b₁² − b₂²) = ∫ dσ/dΩ dΩ). Beam: the counts are consistent
   (past 90 degrees ≤ fired, bins sum to ≤ fired) and the fraction past 90 degrees is (D/2b_max)². Plum pudding: no atom turns an alpha by more than D/2R. */
const pre = `const R = window.__rs; if (!R) return true; const S = R.S, C = R.core;
  const T = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-'), first = (id) => document.getElementById(id).firstChild.textContent.replace(/\\u2212/g, '-');
  const near = (got, want, tol) => Math.abs(got - want) <= tol * Math.max(Math.abs(want), 1e-300);
  const deg = 180 / Math.PI;
`;
module.exports = {
  checks: [
    { name: "single particle: D, v/c, θ, r_min and the center of mass K equal the physics of the controls", fn: `(() => { ${pre}
      const D = C.Dnow(), Ds = C.Ds(), t = C.tgt(); if (!isFinite(D) || !(D > 0)) return 'D = ' + D;
      if (S.blind) return true;
      if (!near(parseFloat(T('rD')), D, 5.1e-3)) return 'D shows ' + T('rD') + ', zZe²/4πε₀K = ' + D;
      if (!near(D, 2 * Math.abs(Ds) / 2, 1e-12) || !near(D, 2 * t.Z * 1.439964 / S.K, 1e-9)) return 'D formula: ' + D;
      const v = Math.sqrt(2 * S.K / 3727.379); if (Math.abs(parseFloat(T('rV')) - v) > 5.1e-5) return 'v shows ' + T('rV') + ', physics ' + v + ' c';
      if (S.model !== 'nuc' || S.mode !== 'single') return true;
      const b = Math.abs(S.b), th = C.deflect(b, Ds) * deg;
      if (Math.abs(parseFloat(T('rTh')) - th) > 0.0051) return 'θ shows ' + T('rTh') + ', 2 arctan(D/2b) = ' + th;
      if (Math.abs(th - 2 * Math.atan2(D, 2 * b) * deg) > 1e-9) return 'deflect() disagrees with 2 arctan(D/2b)';
      const rm = C.rMin(b, Ds); if (!near(parseFloat(first('rRm')), rm, 6e-4)) return 'r_min shows ' + first('rRm') + ', physics ' + rm;
      const want = Ds > 0 ? D / 2 * (1 / Math.sin(C.deflect(b, Ds) / 2) + 1) : D / 2 * (1 / Math.sin(C.deflect(b, Ds) / 2) - 1);
      if (b > 0 && !near(rm, want, 1e-9)) return 'r_min ' + rm + ' but (D/2)(1/sin(θ/2) ± 1) = ' + want;
      if (b === 0 && Ds > 0 && !near(rm, D, 1e-12)) return 'head on r_min ' + rm + ', D = ' + D;
      const M = t.A * 931.494, kcm = S.K * M / (M + 3727.379), m = T('rRec').match(/frame ([\\d.]+) MeV/);
      if (!m || Math.abs(+m[1] - kcm) > 0.0051) return 'center of mass K shows ' + (m && m[1]) + ', physics ' + kcm;
      return true; })()` },
    { name: "the exact orbit matches an RK4 integration (angle, closest approach) and conserves energy and angular momentum", fn: `(() => { ${pre}
      const Ds = C.Ds(), b = Math.abs(S.b), key = Ds + '|' + b, W = (window.__rsOrb = window.__rsOrb || {});
      if (!(b > 1e-3 * Math.abs(Ds)) || b > 1e3 * Math.abs(Ds)) return true;
      const o = C.orbit(b, Ds);
      if (W.key !== key) {
        const I = C.integrate(b, Ds, { eps: 1e-3 }); W.key = key; W.I = I;
        if (Math.abs(Math.abs(I.theta) - o.theta) > 2e-3 * Math.max(o.theta, 0.05) + 2e-3) W.bad = 'RK4 angle ' + Math.abs(I.theta) * deg + ' vs exact ' + o.theta * deg;
        else if (!near(I.rmin, C.rMin(b, Ds), 2e-3)) W.bad = 'RK4 r_min ' + I.rmin + ' vs exact ' + C.rMin(b, Ds);
        else W.bad = null;
        for (const w of [-3, -1, -0.2, 0, 0.3, 1.5, 4]) {
          const r = o.r(w), p = o.pos(w), dw = 1e-5, p1 = o.pos(w + dw), p0 = o.pos(w - dw), dt = o.t(w + dw) - o.t(w - dw);
          const vx = (p1[0] - p0[0]) / dt, vy = (p1[1] - p0[1]) / dt, v2 = vx * vx + vy * vy;
          if (!near(Math.hypot(p[0], p[1]), r, 1e-9)) { W.bad = 'orbit radius at w = ' + w; break; }
          if (!near(v2, 1 - Ds / r, 2e-5) && Math.abs(v2 - (1 - Ds / r)) > 2e-5) { W.bad = 'energy: v² = ' + v2 + ', 1 − D/r = ' + (1 - Ds / r) + ' at w = ' + w; break; }
          if (!near(Math.abs(p[0] * vy - p[1] * vx), b, 5e-5)) { W.bad = 'angular momentum ' + Math.abs(p[0] * vy - p[1] * vx) + ' vs b = ' + b + ' at w = ' + w; break; }
        }
      }
      return W.bad || true; })()` },
    { name: "Rutherford cross section integrates to the beam fractions; b(θ) inverts deflect; b = D/2 turns 90°; head on stops at D", fn: `(() => { ${pre}
      const D = 29.58;
      for (const [t1, t2] of [[0.2, 0.9], [0.9, 2.5], [2.5, Math.PI]]) {
        let I = 0; const n = 4000; for (let i = 0; i < n; i++) { const th = t1 + (t2 - t1) * (i + 0.5) / n; I += C.dsdo(th, D) * 2 * Math.PI * Math.sin(th) * (t2 - t1) / n; }
        const b1 = C.bOf(t1, D), b2 = C.bOf(t2, D), want = Math.PI * (b1 * b1 - b2 * b2); if (!near(I, want, 2e-5)) return 'σ integral ' + I + ' vs π(b₁² − b₂²) = ' + want;
      }
      for (const b of [0.5, 5, 14.79, 40, 300]) if (!near(C.bOf(C.deflect(b, D), D), b, 1e-9)) return 'bOf(deflect(b)) != b at ' + b;
      if (Math.abs(C.deflect(D / 2, D) - Math.PI / 2) > 1e-12) return 'b = D/2 does not give 90 degrees';
      if (Math.abs(C.deflect(0, D) - Math.PI) > 1e-12 || !near(C.rMin(0, D), D, 1e-12)) return 'head on';
      if (Math.abs(C.deflect(25, 2 * 79 * 1.439964 / 7.69) * deg - 61.2) > 0.1) return 'first preset: 7.69 MeV on gold at b = 25 fm should give 61 degrees, got ' + C.deflect(25, 2 * 79 * 1.439964 / 7.69) * deg;
      if (Math.abs(2 * 79 * 1.439964 / 7.69 - 29.6) > 0.05) return 'D for 7.69 MeV on gold ' + 2 * 79 * 1.439964 / 7.69;
      const Rt = 8; if (!near(C.rMin(C.bTouch(5, Rt), 5), Rt, 1e-9)) return 'bTouch'; if (C.bTouch(30, 8) !== 0) return 'bTouch beyond D';
      return true; })()` },
    { name: "beam: counts are consistent and the fraction past 90 degrees is (D/2b_max)²; chi² per bin stays near 1", fn: `(() => { ${pre}
      const nf = R.fired, p90 = R.past90, bins = R.bins; if (!bins) return true;
      let s = 0; for (const v of bins) { if (!(v >= 0) || !isFinite(v)) return 'bin count ' + v; s += v; }
      if (s > nf + 1e-9) return 'bins hold ' + s + ' counts but only ' + nf + ' were fired';
      if (p90 > nf || p90 < 0) return 'past 90: ' + p90 + ' of ' + nf;
      if (S.mode !== 'beam' || S.model !== 'nuc' || nf < 500) return true;
      const p = (C.Dnow() / 2 / C.bmax()) ** 2, sd = Math.sqrt(nf * p * (1 - p)); if (Math.abs(p90 - nf * p) > 5 * sd + 3) return p90 + ' past 90° of ' + nf + ', expected ' + (nf * p).toFixed(1) + ' ± ' + sd.toFixed(1);
      if (!S.blind && !near(parseFloat(T('rBexp')), 100 * p, 6e-3)) return 'expected fraction shows ' + T('rBexp') + ', physics ' + 100 * p;
      const m = document.getElementById('rChi').textContent.match(/^([\\d.]+) /); if (m && +m[1] > 8) return 'chi² per bin ' + m[1] + ' with ' + nf + ' alphas';
      return true; })()` },
    { name: "plum pudding: no atom turns an alpha by more than D/2R; the exact motion is below the small angle kick", fn: `(() => { ${pre}
      const D = C.Dnow(), Rr = C.atomR(), Ds = C.Ds(); if (!(Rr > 0)) return 'atom radius ' + Rr;
      let worst = 0; for (const s of [0.05, 0.2, 0.5, 0.7071, 0.9, 0.999]) { const th = Math.abs(C.plumExact(s * Rr, Ds, Rr)); if (!isFinite(th)) return 'plumExact NaN at s = ' + s; worst = Math.max(worst, th);
        if (th > C.plumKick(s, Ds, Rr) * (1 + 1e-3) + 1e-15 && th > 1e-6) return 'exact turn ' + th + ' above the impulse estimate ' + C.plumKick(s, Ds, Rr) + ' at s = ' + s; }
      if (worst > D / (2 * Rr) * (1 + 1e-3)) return 'one atom turned the alpha by ' + worst + ' rad, above D/2R = ' + D / (2 * Rr);
      if (C.plumExact(1.5 * Rr, Ds, Rr) !== 0) return 'a ray outside the atom was turned';
      return true; })()` },
  ],
  steps: [
    { name: 'Antialpha and alpha, every target and custom Z to the ends, energy 1 and 10 MeV, b slider 0 to max, in single and beam, then plum pudding', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#presets [data-p=head]').click(); await pause(150);
      for (const q of ['qNeg', 'qPos', 'qNeg']) { document.getElementById(q).click(); await pause(100); for (const v of [0, 1, 0.5]) { set('bb', v); await pause(60); } }
      for (const v of [1, 10, 1.5]) { set('ke', v); await pause(60); }
      for (const b of document.querySelectorAll('#targets button')) { b.click(); await pause(60); if (b.dataset.t === 'custom') for (const z of [1, 100, 29]) { set('zc', z); await pause(60); } }
      document.getElementById('qPos').click(); document.getElementById('mBeam').click(); await pause(200);
      document.getElementById('fire').click(); await pause(100); window.__rs.fireMany(3000); await pause(200);
      for (const [id, v] of [['bm', -0.301], ['bm', 1.477], ['ft', -1], ['ft', 1], ['rate', 0], ['rate', 10]]) { set(id, v); await pause(80); }
      document.getElementById('qNeg').click(); await pause(100); window.__rs.fireMany(1000); await pause(100); document.getElementById('qPos').click();
      document.getElementById('aPlum').click(); await pause(150); window.__rs.fireMany(1000); for (const v of [1, -1]) { set('ft', v); await pause(80); }
      document.getElementById('clear').click(); await pause(100);
    })()` },
  ],
};
