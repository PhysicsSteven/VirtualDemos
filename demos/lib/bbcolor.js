/* © 2026 Steven Anderson. All rights reserved. Not licensed for copying or reuse; terms at https://physicssteven.github.io/VirtualDemos/LICENSE.html */
/* VDBB: the color of hot things, for the astronomy demos (Inside the Sun, The Sun: Surface and Cycle, Starlight, Spectral Classes;
   2026-11-17). Link it after vd.js: <script src="lib/bbcolor.js"></script>. Drawing only: no demo's physics depends on it.

   Planck's law B_λ(T) = 2hc²/λ⁵ / (e^(hc/λkT) − 1) (CODATA 2022 h, c, k), through the CIE 1931 2° color matching functions in the
   multi lobe Gaussian fit of Wyman, Sloan and Shirley (2013, JCGT 2(2), 1), the same fit Blackbody uses, into sRGB (IEC 61966-2-1,
   D65 white, so a 6500 K body is close to white). Integrals run from 360 to 830 nm in 2 nm steps.

     VDBB.planck(lnm, T)        B_λ in W/(m² sr m) at the wavelength lnm (nm)
     VDBB.cie(lnm)              [x̄, ȳ, z̄]
     VDBB.xyz(T)                [X, Y, Z] of a blackbody, absolute (∫ B_λ x̄ dλ ...), so Y grows with T like the eye's brightness
     VDBB.color(T)              [r, g, b] 0..255, the hue at full brightness (cached by T rounded to 10 K)
     VDBB.css(T, a)             'rgb(...)' or 'rgba(..., a)' of color(T)
     VDBB.exposed(T, Tref, k)   [r, g, b] as a camera set for a blackbody at Tref would record T: the color scaled by
                                Y(T)/Y(Tref) × k (k = 1 puts Tref at full brightness), clipped at white, so a cooler patch
                                next to a hotter one looks darker by the real ratio of brightness the eye sees
     VDBB.line(lnm)             [r, g, b] of a single wavelength (spectral color, desaturated into the sRGB gamut)
*/
(function (root) {
  'use strict';
  var H = 6.62607015e-34, C = 299792458, KB = 1.380649e-23;
  function planck(lnm, T) { var l = lnm * 1e-9, x = H * C / (l * KB * T); if (x > 700) return 0; return 2 * H * C * C / Math.pow(l, 5) / Math.expm1(x); }
  var gl = function (x, mu, s1, s2) { var t = (x - mu) / (x < mu ? s1 : s2); return Math.exp(-0.5 * t * t); };
  function cie(l) {
    return [
      1.056 * gl(l, 599.8, 37.9, 31.0) + 0.362 * gl(l, 442.0, 16.0, 26.7) - 0.065 * gl(l, 501.1, 20.4, 26.2),
      0.821 * gl(l, 568.8, 46.9, 40.5) + 0.286 * gl(l, 530.9, 16.3, 31.1),
      1.217 * gl(l, 437.0, 11.8, 36.0) + 0.681 * gl(l, 459.0, 26.0, 13.8)
    ];
  }
  var CMF = []; for (var l = 360; l <= 830; l += 2) CMF.push([l, cie(l)]);
  function xyz(T) {
    var X = 0, Y = 0, Z = 0;
    for (var i = 0; i < CMF.length; i++) { var b = planck(CMF[i][0], T), c = CMF[i][1]; X += b * c[0]; Y += b * c[1]; Z += b * c[2]; }
    return [X * 2e-9, Y * 2e-9, Z * 2e-9];
  }
  function lin(X, Y, Z) { return [3.2406 * X - 1.5372 * Y - 0.4986 * Z, -0.9689 * X + 1.8758 * Y + 0.0415 * Z, 0.0557 * X - 0.2040 * Y + 1.0570 * Z]; }
  function enc(v) { v = Math.max(0, Math.min(1, v)); v = v <= 0.0031308 ? 12.92 * v : 1.055 * Math.pow(v, 1 / 2.4) - 0.055; return Math.round(255 * v); }
  /* linear sRGB into the gamut by adding white, scaled so the largest channel is 1 */
  function hue(rgb) { var r = rgb[0], g = rgb[1], b = rgb[2], mn = Math.min(r, g, b); if (mn < 0) { r -= mn; g -= mn; b -= mn; } var mx = Math.max(r, g, b) || 1; return [r / mx, g / mx, b / mx]; }
  var cache = {};
  function color(T) {
    var k = Math.round(T / 10); if (cache[k]) return cache[k];
    var h = hue(lin.apply(null, xyz(Math.max(500, k * 10)))); return (cache[k] = [enc(h[0]), enc(h[1]), enc(h[2])]);
  }
  function css(T, a) { var c = color(T); return a == null ? 'rgb(' + c + ')' : 'rgba(' + c + ',' + a + ')'; }
  var ycache = {};
  function Yof(T) { var k = Math.round(T); return ycache[k] || (ycache[k] = xyz(k)[1]); }
  function exposed(T, Tref, k) {
    var p = xyz(T), s = (k == null ? 1 : k) / Yof(Tref), c = lin(p[0] * s, p[1] * s, p[2] * s), mn = Math.min(c[0], c[1], c[2]);
    if (mn < 0) { c = [c[0] - mn, c[1] - mn, c[2] - mn]; }
    var mx = Math.max(c[0], c[1], c[2]);
    if (mx > 1) { /* past white: keep the hue and blend toward white, as film or a sensor does */ var w = Math.min(1, (mx - 1) / mx); c = [c[0] / mx + w * (1 - c[0] / mx), c[1] / mx + w * (1 - c[1] / mx), c[2] / mx + w * (1 - c[2] / mx)]; }
    return [enc(c[0]), enc(c[1]), enc(c[2])];
  }
  function line(lnm) { var h = hue(lin.apply(null, cie(lnm))); return [enc(h[0]), enc(h[1]), enc(h[2])]; }
  root.VDBB = { planck: planck, cie: cie, xyz: xyz, color: color, css: css, exposed: exposed, line: line };
})(typeof window !== 'undefined' ? window : globalThis);
