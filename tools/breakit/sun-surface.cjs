/* Known values for the break-it test (tools/breakit.cjs), sun-surface. Hook: window.__ss (S, fluxRatio, zeeman, period, ...).
   Spots: the readouts equal (T/5772)⁴, b/T and the Zeeman shift at the live state. Rotation: 24.47 d at the equator, the period
   at the chosen latitude, and the equator never falls behind. Cycle: the cycle number and the 25 minima. Space weather: 499.0 s
   and 1 au / v. */
const pre = `const C = window.__ss; if (!C) return true; const S = C.S;
  const num = (s) => parseFloat(String(s).replace(/\\u2212/g, '-').replace(/,/g, ''));
  const near = (a, b, t) => Math.abs(a - b) <= t * Math.max(Math.abs(b), 1e-12);
  const out = {}; for (const d of document.querySelectorAll('#out dt')) out[d.textContent.replace(/\\s+/g, ' ').trim()] = d.nextElementSibling.textContent.trim();
`;
module.exports = {
  checks: [
    { name: 'spots: light ratio, peak wavelength and Zeeman shift equal the model', fn: `(() => { ${pre}
      if (S.mode !== 'surface' || S.blind) return true;
      if (!(S.Ts >= 3000 && S.Ts <= 5772)) return 'spot temperature out of range ' + S.Ts;
      if (!near(num(out['Light per m², spot ÷ surface']), C.fluxRatio(S.Ts), 3e-3)) return 'ratio ' + out['Light per m², spot ÷ surface'];
      if (!near(num(out['Peak wavelength, spot']), C.wienPeak(S.Ts), 2e-3)) return 'peak ' + out['Peak wavelength, spot'];
      if (Math.abs(num(out['Zeeman shift, each side']) - 1000 * C.zeeman(630.2494, 2.5, S.B)) > 0.051) return 'Zeeman ' + out['Zeeman shift, each side'];
      if (out['Peak wavelength, surface'] !== '502 nm') return 'surface peak ' + out['Peak wavelength, surface'];
      return true; })()` },
    { name: 'rotation: 24.47 d at the equator, the chosen latitude matches, the equator is never behind', fn: `(() => { ${pre}
      if (S.mode !== 'rotation' || S.blind) return true;
      if (out['One turn at the equator'] !== '24.47 d') return 'equator ' + out['One turn at the equator'];
      const want = S.solid ? C.period(0) : C.period(S.lat), got = num(out['One turn at ' + S.lat + '°']);
      if (Math.abs(got - want) > 0.0051) return 'period at ' + S.lat + ': ' + got + ' want ' + want;
      if (num(out['The equator is ahead by']) < -0.005) return 'equator behind';
      return true; })()` },
    { name: 'cycle: the date is in the record, 25 minima, the cycle number counts minima since 1755', fn: `(() => { ${pre}
      if (S.mode !== 'cycle') return true;
      if (!(S.year >= 1749 && S.year <= 2027)) return 'year ' + S.year;
      if (out['Minima in the record'] !== '25') return 'minima ' + out['Minima in the record'];
      const n = C.MINS.filter((m) => m >= 1755 && m <= S.year).length; if (n && out['Cycle'] !== String(n)) return 'cycle ' + out['Cycle'] + ' want ' + n;
      if (out['Last minimum'] !== 'December 2019') return 'last minimum ' + out['Last minimum'];
      return true; })()` },
    { name: 'space weather: light 499.0 s and the CME takes 1 au / v', fn: `(() => { ${pre}
      if (S.mode !== 'storm') return true;
      if (!/^499\\.0 s/.test(out['Light from the flare'])) return 'light ' + out['Light from the flare'];
      if (S.blind) return true;
      if (!near(num(out['CME travel time']), C.cmeTime(S.v) / 3600, 2e-3)) return 'travel ' + out['CME travel time'];
      return true; })()` },
  ],
  steps: [
    { name: 'rotation, play 3 s: the equator gets ahead of 60°', fn: `(async () => { __ss.applyPreset('equator'); document.getElementById('play').click(); await new Promise((r) => setTimeout(r, 3000)); document.getElementById('play').click(); const S = __ss.S; return __ss.turns(0, S.rotT) - S.rotT / __ss.period(60) > 0.05 ? true : 'not ahead after ' + S.rotT + ' d'; })()` },
    { name: 'cycle, play 2 s: the date moves forward', fn: `(async () => { __ss.applyPreset('c24'); const y0 = __ss.S.year; document.getElementById('play').click(); await new Promise((r) => setTimeout(r, 2000)); document.getElementById('play').click(); return __ss.S.year > y0 + 1 ? true : 'year ' + __ss.S.year; })()` },
  ],
};
