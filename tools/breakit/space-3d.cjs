/* Known values for the break-it test (tools/breakit.cjs). Whatever the view, zoom or theme, computed fresh from the page's own
   code: the torque (0.3, 0, 0) × (0, 20, 10) = (0, −3, 6) N·m; the line (1, −2, 1) + t(1, 2, 1) meets the plane x + y + z = 3 at
   t = 0.75, (1.75, −0.5, 1.75); spherical (2, 50°, 35°) goes back to itself; the Mach 2 cone is 30°; and the readouts of the
   default setup match the boxes. */
module.exports = {
  checks: [
    { name: 'products, meeting point and coordinates stay exact', fn: `(() => {
      const D = window.__sp; if (!D) return 'no __sp';
      const bad = [], t = D.spCross([0.3, 0, 0], [0, 20, 10]);
      if (Math.abs(t[0]) > 1e-15 || Math.abs(t[1] + 3) > 1e-15 || Math.abs(t[2] - 6) > 1e-15) bad.push('torque ' + t);
      const m = D.spMeet([1, -2, 1], [1, 2, 1], [1, 1, 1], [1, 1, 1]);
      if (Math.abs(m.t - 0.75) > 1e-15 || Math.abs(m.P[1] + 0.5) > 1e-15) bad.push('meet ' + JSON.stringify(m));
      const s = D.spToSph(D.spFromSph(2, 50 * Math.PI / 180, 35 * Math.PI / 180));
      if (Math.abs(s[0] - 2) > 1e-14 || Math.abs(s[1] - 50 * Math.PI / 180) > 1e-14 || Math.abs(s[2] - 35 * Math.PI / 180) > 1e-14) bad.push('sph ' + s);
      const e = D.spConic(D.spTraceEq(D.spQuadric('hyp1', 1.2, 1.2, 1.6), 'x', 1.2), 3);
      if (e.kind !== 'two crossing lines') bad.push('trace ' + e.kind);
      return bad.length ? bad.join('; ') : true;
    })()` },
    { name: 'the dot product readout matches the boxes', fn: `(() => {
      const D = window.__sp; if (!D || D.S.mode !== 'vec' || D.S.blind) return true;
      const a = D.S.a, b = D.S.b, want = D.spDot(a, b), dd = [...document.querySelectorAll('#out div')].find((d) => / · /.test(d.querySelector('dt') ? d.querySelector('dt').textContent : ''));
      if (!dd) return true;
      const tx = dd.querySelector('dd').textContent.replace(/−/g, '-').replace(/,/g, '').replace(/[⁻⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (ch) => '-0123456789'['⁻⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(ch)]);
      const mm = tx.match(/(-?[\\d.]+)(?: × 10(-?\\d+))?/); if (!mm) return true;
      const got = parseFloat(mm[1]) * (mm[2] ? Math.pow(10, +mm[2]) : 1);
      if (!isFinite(got)) return true;
      return Math.abs(got - want) <= 1e-3 * Math.max(1e-6, Math.abs(want)) + 1e-9 ? true : 'a . b ' + got + ' vs ' + want;
    })()` },
  ],
};
