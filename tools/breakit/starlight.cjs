/* Known values for the break-it test (tools/breakit.cjs), starlight. Hook: window.__sl (S, brightRatio, appMag, ...).
   Inverse square: the squares and the light on each are d² and 1/d². Two stars: b_A/b_B = (L_A/L_B)(d_B/d_A)² at the live state.
   Magnitudes: 5,070 stars to 6 and the ratio 3.10. Absolute magnitude: m = M + 5 log10(d/10). Census: 324 stars within 10 pc. */
const pre = `const C = window.__sl; if (!C) return true; const S = C.S;
  const num = (s) => parseFloat(String(s).replace(/\\u2212/g, '-').replace(/,/g, '').replace(/ × 10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)/, (m, e) => 'e' + e.replace(/⁻/g, '-').replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (q) => '⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(q))));
  const near = (a, b, t) => Math.abs(a - b) <= t * Math.max(Math.abs(b), 1e-12);
  const out = {}; for (const d of document.querySelectorAll('#out dt')) out[d.textContent.replace(/\\s+/g, ' ').trim()] = d.nextElementSibling.textContent.trim();
`;
module.exports = {
  checks: [
    { name: 'inverse square: d² squares, 1/d² on each', fn: `(() => { ${pre}
      if (S.mode !== 'square' || S.blind) return true;
      if (!(S.d >= 1 && S.d <= 6)) return 'distance ' + S.d;
      if (!near(num(out['Squares the light covers']), S.d * S.d, 3e-3)) return 'squares ' + out['Squares the light covers'];
      if (!near(num(out['Light on each square']), 1 / (S.d * S.d), 2e-3)) return 'each ' + out['Light on each square'];
      return true; })()` },
    { name: 'two stars: the brightness ratio is the inverse square law at the live state', fn: `(() => { ${pre}
      if (S.mode !== 'two' || S.blind) return true;
      const want = (S.LA / S.LB) * Math.pow(S.dB / S.dA, 2), got = num(out['bA ÷ bB']);
      if (!near(got, want, 6e-3)) return 'ratio shows ' + out['bA ÷ bB'] + ' want ' + want;
      if (Math.abs(num(out['mA − mB']) + 2.5 * Math.log10(want)) > 0.006) return 'dm ' + out['mA − mB'];
      return true; })()` },
    { name: 'magnitudes: 5,070 stars to 6 in the whole sky, three times as many as to 5', fn: `(() => { ${pre}
      if (S.mode !== 'mag') return true;
      if (C.allCount(6) !== 5070) return 'count ' + C.allCount(6);
      if (out['Stars to 6 ÷ stars to 5'] !== '3.10') return 'ratio ' + out['Stars to 6 ÷ stars to 5'];
      if (!(S.lim >= 0 && S.lim <= 6.5)) return 'limit ' + S.lim;
      return true; })()` },
    { name: 'absolute magnitude: m = M + 5 log10(d/10 pc)', fn: `(() => { ${pre}
      if (S.mode !== 'abs') return true;
      const st = C.STARS[S.star], m = st.M + 5 * Math.log10(S.dist / 10);
      if (Math.abs(num(out['Apparent magnitude m']) - m) > 0.0051) return 'm shows ' + out['Apparent magnitude m'] + ' want ' + m;
      if (S.star === 'sun' && Math.abs(S.dist - C.STARS.sun.d) < 1e-12 && out['Apparent magnitude m'] !== '−26.76') return 'Sun ' + out['Apparent magnitude m'];
      return true; })()` },
    { name: 'census: 324 stars within 10 pc, 50 visible to the eye', fn: `(() => { ${pre}
      if (S.mode !== 'census') return true;
      if (out['Within 10 pc, visible to the eye'] !== '50 of 324') return 'visible ' + out['Within 10 pc, visible to the eye'];
      if (!(S.r >= 0.5 && S.r <= 10)) return 'radius ' + S.r;
      return true; })()` },
  ],
  steps: [
    { name: 'absolute magnitude, play: the Sun reaches 10 pc and magnitude 4.81', fn: `(async () => { __sl.applyPreset('sun'); document.getElementById('play').click(); await new Promise((r) => setTimeout(r, 6500)); const S = __sl.S; return Math.abs(S.dist - 10) < 1e-6 && Math.abs(__sl.appMag(__sl.STARS.sun.M, S.dist) - 4.81) < 1e-9 ? true : 'distance ' + S.dist; })()` },
    { name: 'magnitudes, play 3 s: the limit rises from 0', fn: `(async () => { __sl.applyPreset('dusk'); document.getElementById('play').click(); await new Promise((r) => setTimeout(r, 3000)); document.getElementById('play').click(); return __sl.S.lim > 1 ? true : 'limit ' + __sl.S.lim; })()` },
  ],
};
