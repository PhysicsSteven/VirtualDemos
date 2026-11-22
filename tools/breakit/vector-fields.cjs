/* Known values for the break-it test (tools/breakit.cjs). Whatever the view, zoom or theme: in Uniform gravity with A = (0, 0) and
   B = (3, 2) the work on every path is −19.62 J; the swirl gives 0, 6 and −6 J on the three paths and 2πR² around a circle; the
   long wire gives 2π around a circle about the origin. Each is computed fresh from the page's own field and path code. */
module.exports = {
  checks: [
    { name: 'gravity: −9.81 × (B.y − A.y) on the path shown', fn: `(() => {
      const D = window.__vf; if (!D || D.S.preset !== 'gravity' || !D.path || D.path.closed || document.getElementById('pIn').value !== '0') return true;
      const W = D.pre[D.pre.length - 1], want = -9.81 * (D.S.rev ? D.S.A[1] - D.S.B[1] : D.S.B[1] - D.S.A[1]);
      return Math.abs(W - want) <= 1e-8 * Math.max(1, Math.abs(want)) ? true : 'W = ' + W + ', want ' + want;
    })()` },
    { name: 'known integrals stay exact', fn: `(() => {
      const D = window.__vf; if (!D) return 'no __vf';
      const s = D.makeField('-y', 'x'), g = D.makeField('0', '-9.81'), w = D.makeField('-y/(x^2+y^2)', 'x/(x^2+y^2)');
      const bad = [];
      const G = D.greens(s, { pcs: [{ k: 'a', c: [1, 1], r: 1.5, t0: 0, t1: 2 * Math.PI }], closed: true, orient: 1, shape: 'circle', C: [1, 1], R: 1.5 });
      if (Math.abs(G.circ - 2 * Math.PI * 2.25) > 1e-8) bad.push('swirl circle ' + G.circ);
      if (Math.abs(G.curlSum - 2 * Math.PI * 2.25) > 1e-8) bad.push('swirl curl sum ' + G.curlSum);
      const Gw = D.greens(w, { pcs: [{ k: 'a', c: [0, 0], r: 1, t0: 0, t1: 2 * Math.PI }], closed: true, orient: 1, shape: 'circle', C: [0, 0], R: 1 });
      if (Math.abs(Gw.circ - 2 * Math.PI) > 1e-8) bad.push('wire ' + Gw.circ);
      if (Math.abs(D.boxFlux(D.makeField('x', 'y'), 0.3, -0.2, 0.4) - 2 * 0.16) > 1e-10) bad.push('box');
      if (Math.abs(D.potentialAt(g, [0, 0], 0, [1, 2]) + 19.62) > 1e-9) bad.push('potential');
      /* a loop around the point mass: div F = 1/r³ does not integrate, so ∬ div dA ends as undefined within a second, not a stalled page */
      const m = D.makeField('-x/(x^2+y^2)^(3/2)', '-y/(x^2+y^2)^(3/2)'), t0 = performance.now();
      const Gm = D.greens(m, { pcs: [{ k: 'a', c: [0, 0], r: 1.5, t0: 0, t1: 2 * Math.PI }], closed: true, orient: 1, shape: 'circle', C: [0, 0], R: 1.5 });
      if (performance.now() - t0 > 5000 || !Number.isNaN(Gm.divSum) || Math.abs(Gm.flux + 2 * Math.PI / 1.5) > 1e-8) bad.push('point mass loop ' + Gm.divSum + ' ' + Gm.flux);
      return bad.length ? bad.join('; ') : true;
    })()` },
    { name: 'readout matches the path total', fn: `(() => {
      const D = window.__vf; if (!D || !D.path || D.path.closed || D.S.blind) return true;
      const dd = document.querySelector('#out div dd'); if (!dd) return 'no readout'; if (/×/.test(dd.textContent)) return true;
      const got = parseFloat(dd.textContent.replace(/−/g, '-').replace(/,/g, '')), want = D.pre[D.pre.length - 1];
      return !isFinite(want) || Math.abs(got - want) <= 1e-3 * Math.max(1e-6, Math.abs(want)) + 1e-9 ? true : 'readout ' + got + ' vs ' + want;
    })()` },
  ],
};
