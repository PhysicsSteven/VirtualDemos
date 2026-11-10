/* Known values for the break-it test (tools/breakit.cjs), proton-qa. The page has no debug hook, so every check reads the readouts (#out)
   and the sliders. Daily view (while a result is shown and not "measuring"): each pass or fail equals the tolerance test on the shown number
   (TG-224: output ±3 %, range ±1 mm, spots ±2 mm and ±1 mm relative, size ±10 %); the shown R90 minus the baseline R90 is the shown ΔR90;
   the readings follow the faults set on the sliders to within the stated reading noise (output 0.2 %, spot centroid 0.1 mm, size 1 %);
   the baseline spot size is the Langner et al. 2017 table (5.75 × 6.15, 4.37 × 4.27, 3.61 × 3.86 mm at 70, 160, 245 MeV, interpolated);
   an energy error moves R90 by the range-energy relation of VDStop. Patient view: the passing rate at the chosen criterion is the one in
   the list; stricter criteria never pass more points; a perfect delivery passes (gamma, noise 0.3 %). Drift view: the day counter matches. */
const pre = `const out = document.getElementById('out'); if (!out) return true;
  const row = {}; for (const d of out.querySelectorAll(':scope > div')) { const t = d.querySelector('dt'), v = d.querySelector('dd'); if (t && v) row[t.textContent.trim()] = v; }
  const txt = (e) => e.textContent.replace(/\\u2212/g, '-'), num = (s) => parseFloat(String(s).replace(/\\u2212/g, '-'));
  const view = (document.querySelector('#viewSeg [aria-pressed=true]') || { dataset: {} }).dataset.view;
  const val = (id) => +document.getElementById(id).value;
  const key = (re) => Object.keys(row).find((k) => re.test(k));
  const verdict = (e) => { const s = e.querySelector('span'); return s ? s.className === 'pass' : null; };
  const busy = Object.values(row).some((e) => /measuring/.test(e.textContent));
`;
module.exports = {
  checks: [
    { name: "daily: pass and fail equal the tolerance test on the shown numbers (output 3 %, range 1 mm, spots 2 and 1 mm, size 10 %)", fn: `(() => { ${pre}
      if (view === 'patient' || busy) return true;
      const ko = key(/^Output at 2 cm/), kr = key(/^R90/), kp = key(/^Largest spot/), ks = key(/^Spot size, 1σ/); if (!ko || !kr || !kp || !ks) return true;
      const edge = (v, lim, d) => Math.abs(Math.abs(v) - lim) < 0.5 * Math.pow(10, -d) + 1e-9;      /* the shown number is rounded: skip a call right at the limit */
      const o = num(txt(row[ko])) - 100, rm = txt(row[kr]).match(/, ([+-]?[\\d.]+) mm/), pm = txt(row[kp]).match(/^([\\d.]+) mm, ([\\d.]+) mm/), sm = txt(row[ks]).match(/, ([+-]?[\\d.]+) %/);
      if (!rm || !pm || !sm) return 'odd readout text: ' + txt(row[kr]) + ' | ' + txt(row[kp]) + ' | ' + txt(row[ks]);
      if (!edge(o, 3, 1) && (Math.abs(o) <= 3) !== verdict(row[ko])) return 'output ' + (o + 100) + ' % is shown ' + (verdict(row[ko]) ? 'pass' : 'fail');
      if (!edge(+rm[1], 1, 2) && (Math.abs(+rm[1]) <= 1) !== verdict(row[kr])) return 'ΔR90 ' + rm[1] + ' mm is shown ' + (verdict(row[kr]) ? 'pass' : 'fail');
      const ok = (+pm[1] <= 2 && +pm[2] <= 1); if (!edge(+pm[1], 2, 2) && !edge(+pm[2], 1, 2) && ok !== verdict(row[kp])) return 'spots ' + pm[1] + ', ' + pm[2] + ' mm shown ' + (verdict(row[kp]) ? 'pass' : 'fail');
      if (!edge(+sm[1], 10, 1) && (Math.abs(+sm[1]) <= 10) !== verdict(row[ks])) return 'size ' + sm[1] + ' % is shown ' + (verdict(row[ks]) ? 'pass' : 'fail');
      return true; })()` },
    { name: "daily: R90 − baseline R90 = ΔR90, and the baseline spot size is the cited table", fn: `(() => { ${pre}
      if (view !== 'daily' || busy) return true;
      const kr = key(/^R90/), ks = key(/^Spot size, 1σ/); if (!kr || !ks) return true;
      const b = kr.match(/baseline ([\\d.]+) cm/), r = txt(row[kr]).match(/^([\\d.]+) cm, ([+-]?[\\d.]+) mm/); if (!b || !r) return 'odd R90 text ' + kr + ' | ' + txt(row[kr]);
      if (Math.abs((+r[1] - +b[1]) * 10 - +r[2]) > 0.11) return 'R90 ' + r[1] + ' − baseline ' + b[1] + ' cm is ' + (+r[1] - +b[1]) * 10 + ' mm but ΔR90 shows ' + r[2];
      const E = val('sE'), T = { E: [70, 160, 245], x: [5.75, 4.37, 3.61], y: [6.15, 4.27, 3.86] }, i = E <= 160 ? 0 : 1, u = (E - T.E[i]) / (T.E[i + 1] - T.E[i]);
      const wx = T.x[i] + u * (T.x[i + 1] - T.x[i]), wy = T.y[i] + u * (T.y[i + 1] - T.y[i]), s = ks.match(/baseline ([\\d.]+) × ([\\d.]+) mm/);
      if (!s) return 'odd size label ' + ks; if (Math.abs(+s[1] - wx) > 0.0051 || Math.abs(+s[2] - wy) > 0.0051) return 'baseline spot size ' + s[1] + ' × ' + s[2] + ', table gives ' + wx.toFixed(3) + ' × ' + wy.toFixed(3);
      return true; })()` },
    { name: "daily: the readings follow the faults on the sliders (output, size, spot position, energy to range) within the noise", fn: `(() => { ${pre}
      if (view !== 'daily' || busy) return true;
      const ko = key(/^Output at 2 cm/), kr = key(/^R90/), kp = key(/^Largest spot/), ks = key(/^Spot size, 1σ/); if (!ko || !kr || !kp || !ks) return true;
      const fo = val('sFo'), fe = val('sFe'), fx = val('sFx'), fy = val('sFy'), fg = val('sFg'), fs = val('sFs'), E = val('sE');
      const o = num(txt(row[ko])), want = 100 * (1 + fo / 100);
      if (Math.abs(o - want) > 1.4) return 'output reads ' + o + ' % with a ' + fo + ' % error, expect ' + want.toFixed(2) + ' ± 1.2';
      const sm = txt(row[ks]).match(/^([\\d.]+) × ([\\d.]+) mm, ([+-]?[\\d.]+) %/), b = ks.match(/baseline ([\\d.]+) × ([\\d.]+)/);
      if (sm && b) { const k = 1 + fs / 100; if (Math.abs(+sm[1] - +b[1] * k) > 0.025 * +b[1] * k + 0.006 || Math.abs(+sm[2] - +b[2] * k) > 0.025 * +b[2] * k + 0.006) return 'spot size ' + sm[1] + ' × ' + sm[2] + ' with ' + fs + ' % error, baseline ' + b[1] + ' × ' + b[2];
        if (Math.abs(+sm[3] - fs) > 3) return 'size error shows ' + sm[3] + ' % but the slider says ' + fs; }
      const pm = txt(row[kp]).match(/^([\\d.]+) mm, ([\\d.]+) mm/);
      if (pm) { const lo = Math.max(Math.abs(fx), Math.abs(fy)) - 0.8, hi = Math.hypot(0, 80 * Math.abs(fg) / 100) + Math.max(Math.abs(fx), Math.abs(fy)) + 0.8; if (+pm[1] < lo - 1e-9 || +pm[1] > hi + 1e-9) return 'largest spot error ' + pm[1] + ' mm, with offsets ' + fx + ', ' + fy + ' mm and gain ' + fg + ' % expect between ' + lo.toFixed(2) + ' and ' + hi.toFixed(2);
        if (fg === 0 && +pm[2] > 0.8) return 'relative spot error ' + pm[2] + ' mm with no gain error'; }
      const V = window.VDStop; const dR = txt(row[kr]).match(/, ([+-]?[\\d.]+) mm/);
      if (V && dR && V.range) { const want = 10 * (V.range(E * (1 + fe / 100), 'water') - V.range(E, 'water')); if (Math.abs(+dR[1] - want) > 0.35) return 'ΔR90 shows ' + dR[1] + ' mm, the range energy relation for ' + fe + ' % at ' + E + ' MeV gives ' + want.toFixed(2); }
      return true; })()` },
    { name: "patient: the passing rate at the chosen criterion is the listed one; stricter criteria never pass more; no errors passes", fn: `(() => { ${pre}
      if (view !== 'patient' || busy) return true;
      const kl = key(/^3 %\\/3 mm, 3 %\\/2 mm/), kc = key(/^Passing at/), kn = key(/^Points above/); if (!kl || !kc || !kn) return true;
      const L = txt(row[kl]).split(',').map((s) => parseFloat(s)), crit = (document.querySelector('#critSeg [aria-pressed=true]') || { dataset: {} }).dataset.crit;
      const at = txt(row[kc]).match(/^([\\d.]+) %/); if (L.length !== 3 || L.some((v) => !(v >= 0 && v <= 100)) || !at) return 'odd readout ' + txt(row[kl]) + ' | ' + txt(row[kc]);
      if (Math.abs(+at[1] - L[['3/3', '3/2', '2/2'].indexOf(crit)]) > 0.0501) return 'passing at ' + crit + ' shows ' + at[1] + ' but the list says ' + L;
      if (!(L[0] >= L[1] - 0.0501 && L[1] >= L[2] - 0.0501)) return 'a stricter criterion passes more: ' + L;
      if (!(+txt(row[kn]) > 0)) return 'no points above 10 %';
      if (val('sPx') === 0 && val('sPo') === 0 && val('sPs') === 0 && val('sPr') === 0 && L[0] < 99) return 'no delivery error but 3 %/3 mm passes only ' + L[0] + ' %';
      return true; })()` },
    { name: "drift: the day counter and the mornings run agree", fn: `(() => { ${pre}
      if (view !== 'drift') return true;
      const c = document.getElementById('count').textContent.match(/^day (\\d+)$/), k = key(/^Mornings run/); if (!c || !k) return true;
      return +txt(row[k]).match(/^\\d+/)[0] === +c[1] ? true : 'counter says day ' + c[1] + ', readout ' + txt(row[k]); })()` },
  ],
  steps: [
    { name: 'Daily: every fault slider to its limits, run QA each time, then the three views and a New mystery', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      $('viewSeg').querySelector('[data-view=daily]').click(); await pause(200);
      for (const id of ['sFe', 'sFo', 'sFx', 'sFy', 'sFg', 'sFs', 'sE']) { const e = $(id); for (const v of [e.min, e.max, e.min, '0'.length ? (id === 'sE' ? '150' : '0') : '0']) { e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); $('play').click(); await pause(1700); } }
    })()` },
    { name: 'Patient: every shape, depth and error to the limits, run, mid run change the criteria; then drift: 10 days a few times, reveal', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      document.querySelector('#presets [data-p=pqa]').click(); await pause(300); $('play').click();
      for (const s of [...$('selShape').options].map((o) => o.value)) { $('selShape').value = s; $('selShape').dispatchEvent(new Event('change', { bubbles: true })); await pause(600); }
      for (const id of ['sZm', 'sPx', 'sPo', 'sPs', 'sPr']) { const e = $(id); for (const v of [e.min, e.max, '0'.length ? (id === 'sZm' ? '11' : '0') : '0']) { e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); await pause(700); } }
      for (const b of document.querySelectorAll('#critSeg button')) { b.click(); await pause(150); }
      document.querySelector('#presets [data-p=drMyst]').click(); await pause(300);
      for (let i = 0; i < 4; i++) { $('bTen').click(); await pause(300); } $('bReveal').click(); await pause(200); $('bNew').click(); await pause(300);
    })()` },
  ],
};
