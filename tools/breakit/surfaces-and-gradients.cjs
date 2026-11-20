/* Known values for the break-it test (tools/breakit.cjs). Whatever the view, zoom or theme, computed fresh from the page's own
   code: x³ − 3x + y³ − 3y has a pit at (1, 1) with f = −4 and D = 36, a peak at (−1, −1) and two saddles; xy on x + y = 4 is
   largest at (2, 2) with λ = 2; xy/(x² + y²) is m/(1 + m²) along y = mx; xy along (t, t²) has dz/dt = 3t² by the chain rule; and the readout of f at the point matches f. */
module.exports = {
  checks: [
    { name: 'critical points and Lagrange multipliers stay exact', fn: `(() => {
      const D = window.__sg; if (!D) return 'no __sg';
      const bad = [], s = D.sgRead('x^3 - 3x + y^3 - 3y'), cr = D.sgCritical(s, [-2.3, 2.3, -2.3, 2.3]);
      const pit = cr.find((q) => q.x === 1 && q.y === 1);
      if (cr.length !== 4 || !pit || pit.kind !== 'min' || Math.abs(pit.f + 4) > 1e-12 || Math.abs(pit.D - 36) > 1e-10) bad.push('peaks ' + JSON.stringify(cr.map((q) => [q.x, q.y, q.kind])));
      const r = D.sgLagrange(D.sgRead('x y'), D.sgRead('x + y'), 4, 0.8, 3.2);
      if (!r || Math.abs(r.x - 2) > 1e-10 || Math.abs(r.lam - 2) > 1e-10) bad.push('fence ' + JSON.stringify(r));
      const q = D.sgRead('x y/(x^2 + y^2)'), p = D.sgPath('line', 0, 0, 2)(1e-6);
      if (Math.abs(q.f(p[0], p[1]) - 0.4) > 1e-12) bad.push('limit ' + q.f(p[0], p[1]));
      const ch = D.sgChain(D.sgRead('x y'), D.sgPathRead('t', 't^2'), 1.5, 1e-4);
      if (Math.abs(ch.dzdt - 6.75) > 1e-12 || Math.abs(ch.tx - 2.25) > 1e-12) bad.push('chain ' + JSON.stringify(ch));
      return bad.length ? bad.join('; ') : true;
    })()` },
    { name: 'readout of f matches f at the point', fn: `(() => {
      const D = window.__sg; if (!D || !D.S.s) return true;
      const dd = document.querySelectorAll('#out div dd')[1]; if (!dd) return 'no readout'; if (/×|—|undefined|\\?/.test(dd.textContent) || !isFinite(D.S.s.f(D.S.P[0], D.S.P[1]))) return true;
      const got = parseFloat(dd.textContent.replace(/−/g, '-').replace(/,/g, '')), want = D.S.s.f(D.S.P[0], D.S.P[1]);
      return Math.abs(got - want) <= 1e-4 * Math.max(1e-6, Math.abs(want)) + 1e-9 ? true : 'readout ' + got + ' vs ' + want;
    })()` },
  ],
};
