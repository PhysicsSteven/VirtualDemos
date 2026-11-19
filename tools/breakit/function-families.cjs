/* Known values for the break-it test (tools/breakit.cjs), Families of Functions. Whatever the zoom, pan, drag or Play:
   - the point P on the circle is (A cos θ, A sin θ) with θ = ωt + φ, so cos²θ + sin²θ = 1 and the arc is Aθ;
   - in Stretch and shift, the orange point of f lands on g: g(c + x/b) = a·f(x) + d;
   - in Inverse, when f is one to one, f⁻¹(f(x₀)) = x₀ and the slope of the inverse measured at Q is 1/f′(x₀);
   - the decay setup's half life is τ ln 2 = 1.386 s for b = −0.5. */
module.exports = {
  checks: [
    { name: 'P is on the circle and the arc is Aθ', fn: `(() => {
      const F = window.__ff; if (!F || F.S.mode !== 'circle') return true; const S = F.S, p = F.phasor(S.A, S.w, S.ph, S.t);
      if (Math.abs(p.x * p.x + p.y * p.y - S.A * S.A) > 1e-12 * S.A * S.A) return 'off the circle';
      return Math.abs(p.arc - S.A * (S.w * S.t + S.ph)) <= 1e-12 * (1 + Math.abs(p.arc)) ? true : 'arc ' + p.arc;
    })()` },
    { name: 'the point of f lands on g', fn: `(() => {
      const F = window.__ff; if (!F || F.S.mode !== 'transform' || !F.S.f || F.S.b === 0) return true; const S = F.S;
      const y = S.f(S.key); if (!isFinite(y)) return true; const [X, Y] = F.mapPoint(S.key, y, S.a, S.b, S.c, S.d), g = F.transformed(S.f, S.a, S.b, S.c, S.d)(X);
      return Math.abs(g - Y) <= 1e-9 * (1 + Math.abs(Y)) ? true : 'g(' + X + ') = ' + g + ', want ' + Y;
    })()` },
    { name: 'f⁻¹(f(x₀)) = x₀ and the inverse slope is 1/f′(x₀)', fn: `(() => {
      const F = window.__ff; if (!F || F.S.mode !== 'inverse' || !F.S.f || !F.S.df) return true; const S = F.S;
      const o = F.oneToOne(S.f, S.lo, S.hi, 4000); if (!o.ok) return true;
      const y = S.f(S.x0), back = F.inverseAt(S.f, y, S.lo, S.hi);
      if (Math.abs(back - S.x0) > 1e-9 * (1 + Math.abs(S.x0))) return 'f⁻¹(f(x₀)) = ' + back;
      const m = S.df(S.x0); if (!isFinite(m) || Math.abs(m) < 0.05 || Math.abs(m) > 20 || Math.abs(S.x0 - S.lo) < 0.01 * (S.hi - S.lo) || Math.abs(S.x0 - S.hi) < 0.01 * (S.hi - S.lo)) return true;
      const ms = F.inverseSlope(S.f, y, S.lo, S.hi, 1e-6 * Math.max(1, Math.abs(y)));
      return Math.abs(ms * m - 1) < 1e-5 ? true : 'measured ' + ms + ', 1/m = ' + 1 / m;
    })()` },
    { name: 'decay: half life τ ln 2', fn: `(() => {
      const F = window.__ff; if (!F) return true; const d = F.decay(-0.5);
      return Math.abs(d.half - 2 * Math.LN2) < 1e-15 ? true : 'half ' + d.half;
    })()` },
  ],
  steps: [
    { name: 'the phasor setup, played for a moment', fn: `(() => { const F = window.__ff; F.applyPreset('phasor'); F.setRun(true); })()` },
    { name: 'stretch and shift: sweep b', fn: `(() => { const F = window.__ff; F.applyPreset('sine'); F.setRun(true); })()` },
    { name: 'b = 0 and a = 0', fn: `(() => { const F = window.__ff; F.applyPreset('parab'); F.setParam('b', 0); F.setParam('a', 0); F.refresh(); })()` },
    { name: 'inverse: e^x and the failing x²', fn: `(() => { const F = window.__ff; F.applyPreset('explog'); F.setRun(true); setTimeout(() => F.applyPreset('fail'), 300); })()` },
  ],
};
