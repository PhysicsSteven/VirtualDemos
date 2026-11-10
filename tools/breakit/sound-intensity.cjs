/* Known values for the break-it test (tools/breakit.cjs), sound-intensity. No debug hook, so the checks read the controls and the readouts.
   Free field point sources, I = P/(4 pi r^2); independent sources and the background add as intensities; level = 10 log10(I/1e-12).
   The meter, the total intensity, the pressure amplitude (I = dp^2/(2 rho v), rho 1.204, v 343.2) and each source's level agree with
   the controls; two equal sources are 3.01 dB above one; one doubling of r costs 6.02 dB; the meter stays on the tape (0.5 m to its end). */
const pre = `const rd = (t) => t.replace(/\\u2212/g, '-'), dd = {};
  for (const d of document.querySelectorAll('#out > div')) dd[d.querySelector('dt').textContent] = d.querySelector('dd').textContent;
  const sciv = (t) => { const m = rd(t).match(/([\\d.]+) × 10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)/); if (!m) return NaN; return parseFloat(m[1]) * 10 ** parseInt(m[2].replace('⁻', '-').replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (c) => '⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c)), 10); };
  const pwv = (t) => { const m = t.match(/^([\\d.]+) (W|mW|µW)$/); return m ? parseFloat(m[1]) * { W: 1, mW: 1e-3, 'µW': 1e-6 }[m[2]] : NaN; };
  const r = parseFloat(rd(document.getElementById('oR').textContent)), mystery = document.getElementById('sPA').disabled;
  const PA = pwv(document.getElementById('oPA').textContent), on = document.getElementById('bOn').checked, PB = on ? pwv(document.getElementById('oPB').textContent) : 0;
  const bgb = document.querySelector('#bgSeg [aria-pressed=true]'), bg = bgb ? +bgb.dataset.bg : 0, I0 = 1e-12;
  const I = (P) => P / (4 * Math.PI * r * r), lev = (x) => 10 * Math.log10(x / I0);
`;
module.exports = {
  checks: [
    { name: "meter, total intensity, pressure amplitude and each source's level agree with the controls", fn: `(() => { ${pre}
      if (!isFinite(r) || r < 0.5 - 1e-9) return 'r = ' + r;
      if (mystery || !isFinite(PA)) return true;
      const lv = document.querySelector('#out > div dd'), tot = I(PA) + I(PB) + (bg ? I0 * 10 ** (bg / 10) : 0), L = parseFloat(rd(lv.textContent));
      if (Math.abs(L - lev(tot)) > 0.0501) return 'meter shows ' + lv.textContent + ', physics gives ' + lev(tot);
      if (dd['Total intensity I'] === undefined) return true;          /* Blind */
      if (Math.abs(sciv(dd['Total intensity I']) / tot - 1) > 6e-3) return 'I shows ' + dd['Total intensity I'] + ', physics ' + tot;
      const dp = Math.sqrt(2 * 1.204 * 343.2 * tot); if (Math.abs(sciv(dd['Pressure amplitude Δp']) / dp - 1) > 6e-3) return 'dp shows ' + dd['Pressure amplitude Δp'] + ', physics ' + dp;
      const a = dd['Source A alone']; if (a && Math.abs(parseFloat(rd(a.split(', ')[1])) - lev(I(PA))) > 0.0051) return 'source A level ' + a + ', physics ' + lev(I(PA));
      const b = dd['Source B alone']; if (on && b && Math.abs(parseFloat(rd(b.split(', ')[1])) - lev(I(PB))) > 0.0051) return 'source B level ' + b + ', physics ' + lev(I(PB));
      return true; })()` },
    { name: "two equal sources are 3.01 dB above one; a doubling of r costs 6.02 dB; 10 mW at 1 m is 89.0 dB", fn: `(() => { ${pre}
      const one = (P, rr) => lev(P / (4 * Math.PI * rr * rr));
      if (Math.abs(lev(2 * I(0.01)) - lev(I(0.01)) - 3.0103) > 1e-3) return 'two sources';
      if (Math.abs(one(0.01, 1) - one(0.01, 2) - 6.0206) > 1e-3) return 'doubling';
      if (Math.abs(one(0.01, 1) - 89.0) > 0.05) return '10 mW at 1 m gives ' + one(0.01, 1);
      if (document.getElementById('sPA').disabled) return true;
      const on1 = document.querySelector('#presets [aria-pressed=true]'); if (!on1 || on1.dataset.p !== 'inverse' || r !== 1) return true;
      return document.querySelector('#out > div dd').textContent.replace(/\\u2212/g, '-') === '89.0 dB' ? true : 'inverse-square preset shows ' + document.querySelector('#out > div dd').textContent; })()` },
    { name: "the fit slope is -6.02 dB per doubling when the recorded readings come from one source", fn: `(() => { ${pre}
      const rows = document.querySelectorAll('#rowsTbl tbody tr:not(:has(.empty))'), sl = document.querySelector('#fitOut dt');
      if (!sl || !/Slope/.test(sl.textContent) || bg) return true;
      const m = rd(document.querySelector('#fitOut dd').textContent).match(/^(-?[\\d.]+)/); if (!m) return 'odd slope text';
      return Math.abs(parseFloat(m[1]) + 6.02) <= 0.06 ? true : 'slope ' + m[0] + ' with no background (rows ' + rows.length + ')'; })()` },
  ],
  steps: [
    { name: 'Record readings at 0.5, 1, 2, 4 m on the inverse-square preset, then change source power mid series, then re-roll the mystery', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), click = (s) => document.querySelector(s).click();
      click('#presets [data-p=inverse]'); await pause(100); click('#clearRows');
      for (let i = 0; i < 4; i++) { click('#capture'); click('[data-step=double]'); await pause(60); }
      const p = document.getElementById('sPA'); p.value = '15'; p.dispatchEvent(new Event('input', { bubbles: true })); await pause(100); click('#capture');
      click('#presets [data-p=mystery]'); await pause(100); click('#capture'); click('[data-step=double]'); click('#capture');
      click('#presets [data-p=mystery]'); await pause(100); click('#capture'); click('[data-step=half]'); click('#capture'); await pause(200);
      click('#viewSeg [data-v="4"]'); await pause(100); click('#viewSeg [data-v="32"]'); click('#clearRows'); await pause(100);
    })()` },
  ],
};
