/* Known values for the break-it test (tools/breakit.cjs), hearing. Hook: window.__hear (S, applyPreset, answer, startTest, ownHL).
   Cochlea view: the place of the peak is Greenwood's map, 35 mm × (1 − log10(f/165.4 + 0.88)/2.1) from the base (Greenwood 1990).
   Loudness view: at 1 kHz the loudness level in phons equals the sound level in dB within 0.1 (ISO 226:2003, 20 to 90 phons),
   and the loudness in sones is 2^((P − 40)/10) of the phons shown. Steps: the OpenStax examples of College Physics 2e 17.6 read
   with ISO 226 (test_hearing.cjs), and a scripted listener taking the hearing test. */
const pre = `const N = window.__hear; if (!N) return true; const S = N.S;
  const rows = {}; for (const r of document.querySelectorAll('#out > div')) { const t = r.querySelector('dt'), d = r.querySelector('dd'); if (t && d) rows[t.textContent.trim()] = d.textContent.replace(/\\u2212/g, '-').replace(/,/g, ''); }
  const num = (t) => (t == null ? NaN : parseFloat(t));`;
module.exports = {
  checks: [
    { name: "cochlea view: the peak sits at Greenwood's place for the frequency", fn: `(() => { ${pre}
      if (S.view !== 'cochlea' || S.blind) return true; const g = num(rows['Place of the peak, from the base']); if (isNaN(g)) return 'no place readout';
      const want = 35 * (1 - Math.log10(S.f / 165.4 + 0.88) / 2.1); return Math.abs(g - want) <= 0.051 ? true : 'place ' + g + ' mm, Greenwood ' + want.toFixed(2); })()` },
    { name: 'loudness view: phons equal decibels at 1 kHz; sones follow from phons', fn: `(() => { ${pre}
      if (S.view !== 'loud' || S.blind) return true; const P = num(rows['Loudness level']); if (isNaN(P)) return true;
      if (S.lf === 1000 && S.L >= 20 && S.L <= 90 && Math.abs(P - S.L) > 0.1) return '1 kHz at ' + S.L + ' dB shows ' + P + ' phons';
      const Ns = num(rows['Loudness']), w = Math.pow(2, (P - 40) / 10); return Math.abs(Ns - w) <= 0.006 * w + 0.0006 ? true : 'sones ' + Ns + ' against ' + w; })()` },
  ],
  steps: [
    { name: 'OpenStax examples read with ISO 226', fn: `(async () => { const N = window.__hear;
      const ph = () => { for (const r of document.querySelectorAll('#out > div')) if (r.querySelector('dt').textContent.trim() === 'Loudness level') return parseFloat(r.querySelector('dd').textContent); return NaN; };
      N.applyPreset('exA'); if (Math.abs(ph() - 62.0) > 0.05) throw new Error('example (a) ' + ph());
      N.applyPreset('exC'); if (Math.abs(ph() - 47.9) > 0.05) throw new Error('example (c) ' + ph());
      N.applyPreset('exB'); if (Math.abs(ph() - 70) > 0.1) throw new Error('example (b) ' + ph()); })()` },
    { name: 'a listener who hears everything from 33 dB on the demo scale gives a flat audiogram less the normal shape', fn: `(async () => { const N = window.__hear;
      N.applyPreset('own'); document.getElementById('hp').checked = true; N.startTest(); let k = 0;
      while (N.S.test && k++ < 400) N.answer(N.S.test.st.level >= 33);
      if (N.S.test) throw new Error('test did not finish');
      const v4 = N.ownHL('R', 4000), v1 = N.ownHL('R', 1000); if (v1 !== 0 || Math.abs(v4 - 7.8) > 0.01) throw new Error('1 kHz ' + v1 + ', 4 kHz ' + v4);
      N.stopTest(); N.applyPreset('normal'); })()` },
  ],
};
