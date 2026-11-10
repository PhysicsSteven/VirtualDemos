/* Known values for the break-it test (tools/breakit.cjs), ct-range. Hook: window.vdDemo (S, plan, huTrue, huModel, rsp, ...).
   Water reads 0 HU and air about -1000 at every tube voltage, water's stopping power ratio is 1 and the fitted model gives water 0;
   the plan's numbers agree with each other (real range error = overshoot - margin, covered means the real R90 reaches the far
   edge, the CT number part of the error is 0 with no CT error and the I part 0 with no I error, planned range from the water
   equivalent depth and the margin recipe); both calibration curves are finite, nonnegative and rise with CT number; the measured
   slab shift is within 0.6 mm (6 sigma of the stated 0.1 mm reading noise) of the truth, and within 3 % of thickness x RSP. */
const pre = `const D = window.vdDemo; if (!D || !D.S.meas || D.S.busy > performance.now()) return true;
  const S = D.S, near = (a, b, t) => Math.abs(a - b) <= t;
`;
module.exports = {
  checks: [
    { name: "water reads 0 HU, air about -1000, water RSP 1, fitted model gives water 0 (every kV)", fn: `(() => { ${pre}
      for (const kv of [80, 100, 120, 140]) { if (!near(D.huTrue('water', kv), 0, 1e-9)) return 'water at ' + kv + ' kV reads ' + D.huTrue('water', kv); if (!near(D.huTrue('air', kv), -999, 1.5)) return 'air at ' + kv + ' kV reads ' + D.huTrue('air', kv); }
      if (!near(D.rsp(D.V, 'water'), 1, 1e-4)) return 'RSP of water = ' + D.rsp(D.V, 'water');
      if (!S.fit || !isFinite(S.fit.kc) || !isFinite(S.fit.kp)) return 'fit constants ' + (S.fit && S.fit.kc) + ', ' + (S.fit && S.fit.kp);
      if (!near(D.huModel('water', S.fit), 0, 1e-9)) return 'model water = ' + D.huModel('water', S.fit);
      const w = S.meas.find((q) => q.key === 'water'); if (w && Math.abs(w.hu) > 6 * 16 / Math.sqrt(490)) return 'water ROI mean ' + w.hu + ' HU, more than 6 sigma from 0';
      return true; })()` },
    { name: "the plan agrees with itself: error = past target - margin, covered, CT and I parts, planned range", fn: `(() => { ${pre}
      const P = S.P; if (!P) return 'no plan';
      for (const k of ['err', 'over', 'margin', 'wT', 'wP', 'R', 'E', 'sigma']) if (!isFinite(P[k])) return k + ' is ' + P[k];
      if (!near(P.err, P.over - P.margin, 1e-9)) return 'err ' + P.err + ' != over - margin ' + (P.over - P.margin);
      if (P.covered !== (P.over >= 0)) return 'covered is ' + P.covered + ' with over = ' + P.over;
      if (S.dHU === 0 && Math.abs(P.parts.hu) > 1e-9) return 'CT number part ' + P.parts.hu + ' with no CT number error';
      if (S.iErr === 0 && Math.abs(P.parts.iv) > 1e-9) return 'I part ' + P.parts.iv + ' with no I error';
      if (!near(P.R, P.wP * (1 + S.a / 100) + S.b / 10, 1e-9)) return 'R = ' + P.R + ' but wP (1+a) + b = ' + (P.wP * (1 + S.a / 100) + S.b / 10);
      if (S.a === 0 && S.b === 0 && !near(P.R, P.wP, 1e-9)) return 'no margin but R != wP';
      if (S.a === 0 && S.b === 0 && !near(P.margin, 0, 1e-9 + 10 * 0)) { /* margin is the planned distal edge minus the far edge: 0 with no margin */ return 'no margin recipe but margin = ' + P.margin + ' mm'; }
      if (S.view === 'range' && !document.getElementById('out').hidden && !S.busy) {
        const t = document.getElementById('out').textContent.replace(/\\u2212/g, '-'), m = t.match(/Margin beyond the target\\s*(-?[\\d.]+) mm/);
        if (m && !near(parseFloat(m[1]), P.margin, 0.051)) return 'margin readout ' + m[1] + ', plan ' + P.margin;
        const e = t.match(/Real R90 against planned\\s*([+-]?[\\d.]+) mm/); if (e && !near(parseFloat(e[1]), P.err, 0.0051)) return 'error readout ' + e[1] + ', plan ' + P.err;
      }
      return true; })()` },
    { name: "both calibration curves are finite, nonnegative and rise with CT number", fn: `(() => { ${pre}
      for (const [nm, c] of [['stoichiometric', S.cS], ['substitute', S.cU]]) { if (!c) return nm + ' curve missing'; let prev = -1;
        for (let h = -1000; h <= 3000; h += 25) { const y = c.at(h); if (!isFinite(y) || y < 0) return nm + ' curve at ' + h + ' HU is ' + y; if (y < prev - 1e-9) return nm + ' curve falls at ' + h + ' HU: ' + prev + ' -> ' + y; prev = y; } }
      return true; })()` },
    { name: "slab range shift: within 0.6 mm of the truth and within 3 % of thickness x RSP", fn: `(() => { ${pre}
      const w = S.wet; if (!w || S.view !== 'curve') return true;
      if (!isFinite(w.mm) || !isFinite(w.truth)) return 'shift ' + w.mm;
      if (!near(w.mm, w.truth, 0.6)) return 'measured shift ' + w.mm + ' mm, truth ' + w.truth;
      const r = D.rsp(D.V, w.key); if (!near(w.truth / 10 / w.t, r, 0.03 * r + 1e-4)) return w.key + ': truth/t = ' + w.truth / 10 / w.t + ', RSP ' + r;
      return true; })()` },
  ],
  steps: [
    { name: 'every kV, every view and preset, extreme sliders, Teflon off, mystery tissues cycled', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), D = window.vdDemo, set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      for (const p of Object.keys(document.querySelectorAll('#presets button')).map((i) => document.querySelectorAll('#presets button')[i].dataset.p)) {
        document.querySelector('#presets [data-p=' + p + ']').click(); await pause(150);
        for (const kv of [80, 140, 100]) { document.querySelector('#kvSeg [data-kv="' + kv + '"]').click(); await pause(60); }
        document.getElementById('play').click(); await pause(120);
      }
      document.querySelector('#presets [data-p=lungHU]').click(); await pause(100);
      for (const [id, v] of [['sHU', -30], ['sHU', 30], ['sI', -15], ['sI', 15], ['sA', 0], ['sA', 6], ['sB', 0], ['sB', 5]]) { set(id, v); await pause(60); }
      document.querySelector('#planSeg [data-plan=subs]').click(); await pause(60);
      const tef = document.getElementById('chkTef'); tef.click(); await pause(60); tef.click(); await pause(60);
      document.querySelector('#presets [data-p=mystery]').click(); await pause(100);
      for (let i = 0; i < 8; i++) { document.getElementById('bNew').click(); await pause(40); document.getElementById('play').click(); await pause(60); }
      set('sT', 1); await pause(60); set('sT', 6); await pause(60); document.getElementById('bReveal').click(); await pause(60);
      document.querySelector('#presets [data-p=scan120]').click(); await pause(200);
    })()` },
    { name: 'press Scan and switch view/preset in the middle of the animation', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      document.querySelector('#presets [data-p=scan80]').click(); await pause(100);
      for (let i = 0; i < 6; i++) { document.getElementById('play').click(); await pause(50); document.querySelector('#viewSeg [data-view=' + ['range', 'curve', 'scan'][i % 3] + ']').click(); await pause(50); }
      document.querySelector('#presets [data-p=scan120]').click(); await pause(200);
    })()` },
  ],
};
