/* Known values for the break-it test (tools/breakit.cjs). While the function is sin θ about a = 0 (the opening setup):
   the order 1 polynomial is θ and is within 1% out to 0.24410 rad; the order 3 one out to 1.00779 rad. At any zoom or pan,
   the T_n readout equals the polynomial at the probe, and the Lagrange bound is at least the error. 1/(1 + x²) about 0 has R = 1. */
module.exports = {
  checks: [
    { name: 'sin θ: 1% edges 0.24410 (n = 1) and 1.00779 (n = 3) rad', fn: `(() => {
      const ty = window.__ty, S = ty && ty.S; if (!S || S.mode !== 'expand' || S.src.replace(/\\s/g, '') !== 'sin(θ)' || S.a !== 0 || document.getElementById('tolSel').value !== '0.01') return true;
      const n = S.c.length - 1, g = ty.good(), want = n <= 2 && n >= 1 ? 0.244097 : n <= 4 && n >= 3 ? 1.007793 : null;
      if (want === null || g.hi === null || g.hi > S.x1) return true;
      return Math.abs(g.hi - want) < 2e-5 ? true : 'edge ' + g.hi + ' at n = ' + n;
    })()` },
    { name: 'Lagrange bound covers the error at the probe', fn: `(() => {
      const ty = window.__ty, S = ty && ty.S; if (!S || !S.T || S.mode !== 'expand') return true;
      const x = S.px, fx = S.f(x), n = S.c.length - 1; let t = 0; for (let k = n; k >= 0; k--) t = t * (x - S.a) + S.c[k];
      const B = ty.lagrange(x); if (!isFinite(B) || !isFinite(fx)) return true;
      return Math.abs(fx - t) <= B * (1 + 1e-9) + 1e-12 * (1 + Math.abs(fx)) ? true : 'error ' + Math.abs(fx - t) + ' above bound ' + B;
    })()` },
    { name: '1/(1 + x²) about 0 has R = 1', fn: `(() => {
      const ty = window.__ty, S = ty && ty.S; if (!S || S.mode !== 'expand' || S.src.replace(/\\s/g, '') !== '1/(1+x^2)' || S.a !== 0 || (S.sing && S.sing.rough)) return true;
      const R = ty.radius(); return Math.abs(R - 1) < 1e-9 ? true : 'R = ' + R;
    })()` },
  ],
  steps: [
    { name: 'poles setup, order 20, center typed as 1', fn: `(() => { const ty = window.__ty; ty.applyPreset('poles'); ty.setN(20); const a = document.getElementById('aIn'); a.value = '1'; a.dispatchEvent(new Event('change')); return Math.abs(ty.radius() - Math.SQRT2) < 1e-9 ? true : 'R at a = 1 is ' + ty.radius(); })()` },
  ],
};
