/* Known values for the break-it test (tools/breakit.cjs). Whatever the view, zoom, theme or odd input: the core's integrals give
   the plate's 8/3 kg, the ball's 4π/3 in spherical coordinates, √π from the Gaussian and ½MR² for a disk; and when the opening
   setup is showing, its readout is the same integral. Each is computed fresh from the page's own code. */
module.exports = {
  checks: [
    { name: 'known integrals stay exact', fn: `(() => {
      const D = window.__mi; if (!D) return 'no __mi';
      const bad = [], I = (names, b, f) => D.integrate(D.makeRegion(names, b), f ? D.makeFn(f).f : () => 1).v;
      const plate = I(['x', 'y'], [['0', '2'], ['0', '1']], '1 + x y^2'); if (Math.abs(plate - 8 / 3) > 1e-12) bad.push('plate ' + plate);
      const ball = I(['theta', 'phi', 'rho'], [['0', '2pi'], ['0', 'pi'], ['0', '1']]); if (Math.abs(ball - 4 * Math.PI / 3) > 1e-11) bad.push('ball ' + ball);
      if (Math.abs(D.gauss1(6) - Math.sqrt(Math.PI)) > 1e-13) bad.push('gauss');
      const B = D.body('disk', { R: 0.5 }), p = D.massProps(B, () => 1, 'perp', 2); if (Math.abs(p.I - 0.25) > 1e-12) bad.push('disk I ' + p.I);
      return bad.length ? bad.join('; ') : true;
    })()` },
    { name: 'the opening setup reads 8/3 kg', fn: `(() => {
      const D = window.__mi; if (!D || D.S.preset !== 'plate' || !D.res || D.S.blind) return true;
      const dd = [...document.querySelectorAll('#out dt')].find((e) => e.textContent === '∬ f dA'); if (!dd) return 'no readout';
      const got = parseFloat(dd.nextElementSibling.textContent.replace(/−/g, '-'));
      return Math.abs(got - 8 / 3) < 1e-8 ? true : 'readout ' + got;
    })()` },
  ],
};
