/* Known values for the break-it test (tools/breakit.cjs), Confidence Intervals. Whatever the setup or odd input:
   - the pendulum's true period is 2π√(L/g) with L = 1.000 m and g = 9.81 m/s²: 2.00607 s;
   - z at 95 % is 1.95996 and an interval with σ known is 2z σ/√n wide, the same for every sample;
   - z with s at n = 4 for a normal population catches 85.51 % (the t distribution with 3 degrees of freedom);
   - the plus four interval equals vdstats' plusFourInterval. */
module.exports = {
  checks: [
    { name: 'the pendulum period is 2π√(L/g)', fn: `(() => {
      const C = window.__ci; if (!C) return true; const p = C.population('pendulum', 0);
      return Math.abs(p.truth - 2 * Math.PI * Math.sqrt(1 / 9.81)) < 1e-12 ? true : 'truth ' + p.truth;
    })()` },
    { name: 'z intervals with σ known have width 2z σ/√n', fn: `(() => {
      const C = window.__ci; if (!C || !C.P || C.P.kind !== 'mean') return true; const S = C.S, cl = S.cl / 100;
      const w = C.knownWidth(C.P, S.n, cl);
      for (const smp of S.samples.slice(0, 50)) { const iv = C.interval(C.P, smp, 'z', cl); if (Math.abs(iv.hi - iv.lo - w) > 1e-12 * w) return 'width ' + (iv.hi - iv.lo) + ' not ' + w; }
      const w95 = C.knownWidth(C.P, 10, 0.95), want = 2 * 1.959963984540054 * C.P.sigma / Math.sqrt(10);
      return Math.abs(w95 - want) < 1e-9 * want ? true : 'z95 width ' + w95;
    })()` },
    { name: 'z with s at n = 4 catches 85.51 %', fn: `(() => {
      const C = window.__ci; if (!C) return true; const v = C.zsCoverage(4, 0.95);
      return Math.abs(v - 0.85513) < 5e-5 ? true : 'zsCoverage ' + v;
    })()` },
    { name: 'plus four equals vdstats', fn: `(() => {
      const C = window.__ci; if (!C || !window.VDSTATS || !VDSTATS.plusFourInterval) return true;
      const Pp = C.population('polar', 72), iv = C.interval(Pp, { x: 1, n: 15 }, 'plus4', 0.95), v = VDSTATS.plusFourInterval(1, 15, 0.95);
      const lo = v.lo != null ? v.lo : v[0], hi = v.hi != null ? v.hi : v[1];
      return Math.abs(iv.lo - lo) < 1e-12 && Math.abs(iv.hi - hi) < 1e-12 ? true : 'plus four ' + iv.lo + ' ' + iv.hi + ' vs ' + lo + ' ' + hi;
    })()` },
    { name: 'captured never more than drawn', fn: `(() => {
      const C = window.__ci; if (!C || !C.P || !C.S.samples.length) return true; const S = C.S, kind = (C.P.kind === 'prop') === (S.kind === 'prop' || S.kind === 'plus4') ? S.kind : null;
      if (!kind) return true; const c = C.coverage(C.P, S.samples, kind, S.cl / 100);
      return c.hit <= c.count && c.count === S.samples.length ? true : 'coverage ' + c.hit + '/' + c.count;
    })()` },
  ],
  steps: [
    { name: '1,000 intervals at n = 4, t and z with s', fn: `(() => { const C = window.__ci; C.applyPreset('tsmall'); C.draw(1000); })()` },
    { name: 'confidence level 50 and 99.9 on the same samples', fn: `(() => { const C = window.__ci; C.applyPreset('levels'); C.draw(100); C.setCl(50); C.redraw(); C.setCl(99.9); C.redraw(); })()` },
    { name: 'width against n from 2 to 400', fn: `(() => { const C = window.__ci; C.applyPreset('width'); for (const n of [2, 10, 40, 160, 400]) { C.setN(n); C.draw(100); } })()` },
    { name: 'photons at n = 1 and plus four', fn: `(() => { const C = window.__ci; C.applyPreset('plus4'); C.setN(1); C.draw(100); C.S.kind = 'plus4'; C.redraw(); })()` },
  ],
};
