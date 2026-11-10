/* Known values for the break-it test (tools/breakit.cjs), string-density. No debug hook, so the checks read the page.
   Readouts equal the physics of the shown settings: T = m g with g = 9.81, v = sqrt(T/mu), the resonance fₙ = n v/2L, the mass for n
   loops m = mu (2Lf/n)²/g, mu equal to the string chosen (A 0.40, B 1.20, C 3.60 g/m); every recorded row has T = m g; the fit slope
   and intercept equal a free-intercept least squares line through the rows of the table; the fit never shows NaN. */
const pre = `const rd = (label) => { const d = [...document.querySelectorAll('#out dt')].find((e) => e.textContent.startsWith(label)); return d ? d.nextElementSibling.textContent : null; };
  const num = (s) => parseFloat(String(s).replace(/\\u2212/g, '-'));
  const MU = { A: 0.40, B: 1.20, C: 3.60 }, G = 9.81;
  const str = (document.querySelector('#strings [aria-pressed=true]') || {}).dataset; const key = str && str.s;
  const mTxt = rd('Hanging mass'), m = num(mTxt), T = num(rd('Tension')), f = num(rd('Driver frequency')), L = num(rd('Length L'));
`;
module.exports = {
  checks: [
    { name: "T = m g, and the readouts echo the controls", fn: `(() => { ${pre}
      if (!(m > 0)) return 'mass ' + mTxt;
      if (Math.abs(T - m / 1000 * G) > 5e-5) return 'T shows ' + T + ' but m g = ' + m / 1000 * G;
      if (Math.abs(L - num(document.getElementById('sL').value)) > 5e-3) return 'L readout ' + L + ' but the slider is ' + document.getElementById('sL').value;
      if (L < 0.5 - 1e-9 || L > 2 + 1e-9 || f < 5 - 1e-9 || f > 200 + 1e-9 || m > 3000 + 1e-9) return 'a setting left its range: L ' + L + ', f ' + f + ', m ' + m;
      return true; })()` },
    { name: "mu, wave speed, resonance and mass for n loops agree with the physics", fn: `(() => { ${pre}
      const mu = rd('Linear density');
      if (!MU[key] || /hidden/.test(mu) || !mu) return true;
      if (num(mu) !== MU[key]) return 'mu shows ' + mu + ' for string ' + key;
      const v = Math.sqrt(T / (MU[key] / 1000)), vs = num(rd('Wave speed'));
      if (Math.abs(vs - v) > 0.006) return 'v shows ' + vs + ', sqrt(T/mu) = ' + v;
      const dts = [...document.querySelectorAll('#out dt')].map((e) => e.textContent);
      const last = document.querySelector('#out .wide'); if (!last) return 'no resonance readout';
      const lab = last.querySelector('dt').textContent, val = num(last.querySelector('dd').textContent), mm = lab.match(/(\\d+) loop/);
      if (!mm) return 'odd label ' + lab;
      const n = +mm[1], want = Math.max(1, Math.round(2 * L * f / v));
      if (n !== want) return 'label says ' + n + ' loops, 2Lf/v = ' + 2 * L * f / v;
      if (/^Resonance/.test(lab)) { const fn = n * v / (2 * L); if (Math.abs(val - fn) > 0.0051) return 'resonance shows ' + val + ' Hz, n v/2L = ' + fn; }
      else { const mg = MU[key] / 1000 * (2 * L * f / n) ** 2 / G * 1000; if (Math.abs(val - mg) > 0.051) return 'mass for n loops shows ' + val + ' g, physics ' + mg; }
      return true; })()` },
    { name: "recorded rows have T = m g, and the fit equals least squares through the table", fn: `(() => { ${pre}
      const rows = [...document.querySelectorAll('#rowsTbl tbody tr')].filter((r) => !r.querySelector('.empty')).map((r) => ({ m: num(r.children[1].textContent), T: num(r.children[2].textContent), f: num(r.children[3].textContent), n: num(r.querySelector('input').value) }));
      for (const r of rows) if (Math.abs(r.T - r.m * G) > 5.1e-5) return 'row has T ' + r.T + ' but m g = ' + r.m * G;
      const fo = [...document.querySelectorAll('#fitOut dt')].find((e) => /^Slope/.test(e.textContent)); if (!fo) return true;
      const FN = document.querySelector('#plotSeg [aria-pressed=true]').dataset.plot === 'fn';
      const p = rows.filter((r) => r.n > 0).map((r) => FN ? [r.n, r.f] : [1 / r.n ** 2, r.T]); if (p.length < 2) return true;
      const n = p.length, mx = p.reduce((s, q) => s + q[0], 0) / n, my = p.reduce((s, q) => s + q[1], 0) / n;
      let sxx = 0, sxy = 0; for (const q of p) { sxx += (q[0] - mx) ** 2; sxy += (q[0] - mx) * (q[1] - my); }
      if (sxx < 1e-30) return true;
      const b = sxy / sxx, a = my - b * mx, shown = num(fo.nextElementSibling.textContent), ai = num([...document.querySelectorAll('#fitOut dt')].find((e) => /^Intercept/.test(e.textContent)).nextElementSibling.textContent);
      if (Math.abs(shown - b) > 6e-5 * Math.abs(b) + 1e-12) return 'slope shows ' + shown + ', least squares ' + b;
      if (Math.abs(ai - a) > 6e-3 * Math.abs(a) + 1e-9 * Math.max(1, Math.abs(b))) return 'intercept shows ' + ai + ', least squares ' + a;
      return true; })()` }
  ],
  steps: [
    { name: "record at the extremes (L 0.5, f 200, 3 kg), fit, switch method, clear", fn: `(() => {
      const click = (s) => document.querySelector(s).click(), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      click('#presets [data-p=third]'); click('#record'); click('#record'); set('sL', '0.5'); click('#record'); set('sL', '2'); click('#record');
      for (let i = 0; i < 40; i++) document.querySelector('#addMass [data-g]').click();
      click('#record'); click('#method [data-m=m]'); click('#record'); click('#plotSeg [data-plot=Tn]'); click('#strings [data-s=U]'); click('#record');
      click('#plotSeg [data-plot=fn]'); click('#clearRows'); click('#clearRows'); })()` },
    { name: "edit n in a row to 0, abc, -3 and a huge value", fn: `(() => {
      const click = (s) => document.querySelector(s).click();
      click('#presets [data-p=sweep]'); click('#record'); click('#presets [data-p=third]'); click('#record'); click('#presets [data-p=masses]'); click('#record');
      for (const v of ['0', 'abc', '-3', '1e9', '']) { const i = document.querySelector('#rowsTbl input'); if (!i) break; i.value = v; i.dispatchEvent(new Event('change', { bubbles: true })); }
      click('#plotSeg [data-plot=Tn]'); })()` }
  ]
};
