/* Known values for the break-it test (tools/breakit.cjs), Limits. Whatever the zoom, pan, ε or Play:
   - sin x / x → 1 at 0, and the falling ball's average velocity → 2g × 1 s = 19.62 m/s (g from constants.js);
   - for 2x + 1 at a = 1 the largest δ is exactly ε/2, and for the hole (x² − 1)/(x − 1) at 1 it is ε (up to the view's span);
   - for (3x² + 1)/(x² − 4) → 3 as x → ∞ the N is √(4 + 13/ε);
   - any δ the demo shows is honest: points inside it land inside the band. */
module.exports = {
  checks: [
    { name: 'known limits stay exact', fn: `(() => {
      const F = window.__lim; if (!F || !F.S.f) return true; const S = F.S; F.work(); const lim = S.lim;
      const want = { sinc: 1, line: 3, hole: 2, lhop: 0.5, cosq: 0.5, avgvel: 2 * VDC.g, infty: 3, squeeze: 0, xlnx: 0, terminal: 50 }[S.preset];
      if (want === undefined || S.preset === 'custom') return true;
      if (lim.kind !== 'value') return S.preset + ': ' + lim.kind;
      return Math.abs(lim.L - want) <= 1e-6 * (1 + Math.abs(want)) ? true : S.preset + ': L = ' + lim.L + ', want ' + want;
    })()` },
    { name: 'δ = ε/2 for 2x + 1, δ = ε for the hole, N = √(4 + 13/ε)', fn: `(() => {
      const F = window.__lim; if (!F || !F.S.f) return true; const S = F.S; F.work(); const d = S.del; if (!d) return true;
      if (S.preset === 'line' && S.side === 'both' && !d.capped) return Math.abs(d.delta - S.eps / 2) <= 1e-9 * (1 + S.eps) ? true : 'δ ' + d.delta;
      if (S.preset === 'hole' && S.side === 'both' && !d.capped) return Math.abs(d.delta - S.eps) <= 1e-9 * (1 + S.eps) ? true : 'δ ' + d.delta;
      if (S.preset === 'infty') { const N = Math.sqrt(4 + 13 / S.eps); return Math.abs(d.N - N) <= 1e-9 * N ? true : 'N ' + d.N + ', want ' + N; }
      return true;
    })()` },
    { name: 'points inside δ land inside the band', fn: `(() => {
      const F = window.__lim; if (!F || !F.S.f) return true; const S = F.S; F.work(); const d = S.del;
      if (!d || !isFinite(S.a) || !(d.delta > 0) || d.floor) return true;
      const sides = S.side === 'left' ? [-1] : S.side === 'right' ? [1] : [-1, 1];
      for (const s of sides) for (let j = 1; j <= 200; j++) { const x = S.a + s * d.delta * j / 201, y = S.f(x);
        if (!(Math.abs(y - S.lim.L) < S.eps)) return 'f(' + x + ') = ' + y + ' outside L ± ε'; }
      return true;
    })()` },
    { name: 'no limit where the values swing: sin(1/x), sin(π/x) at 0 (halving h hits only zeros of sin(π/x); 2026-11-22)', fn: `(() => {
      const F = window.__lim; if (!F || !F.S.f) return true; const S = F.S; F.work();
      const t = VDMATH.text(S.node); if (S.a !== 0 || (S.preset !== 'osc' && t !== 'sin(π/x)')) return true;
      return S.lim.kind !== 'value' ? true : t + ': shows L = ' + S.lim.L;
    })()` },
  ],
  steps: [
    { name: 'sin(π/x) typed at a = 0', fn: `(() => { const F = window.__lim; F.applyPreset('osc'); const b = document.getElementById('fx'); b.value = 'sin(pi/x)'; b.dispatchEvent(new Event('input')); })()` },
    { name: 'sin x / x, Play zooms in', fn: `(() => { const F = window.__lim; F.applyPreset('sinc'); F.setRun(true); })()` },
    { name: 'the line, then a tiny ε', fn: `(() => { const F = window.__lim; F.setRun(false); F.applyPreset('line'); F.S.eps = 1e-4; F.S.del = null; F.refresh(); })()` },
    { name: 'the hole and the jump', fn: `(() => { const F = window.__lim; F.applyPreset('hole'); setTimeout(() => F.applyPreset('jump'), 300); })()` },
    { name: 'toward infinity, Play zooms out', fn: `(() => { const F = window.__lim; F.applyPreset('infty'); F.setRun(true); })()` },
    { name: 'average velocity and the pendulum, zoomed far in', fn: `(() => { const F = window.__lim; F.setRun(false); F.applyPreset('avgvel'); for (let i = 0; i < 12; i++) F.zoom(0.25); F.refresh(); setTimeout(() => { F.applyPreset('cosq'); for (let i = 0; i < 12; i++) F.zoom(0.25); F.refresh(); }, 300); })()` },
  ],
};
