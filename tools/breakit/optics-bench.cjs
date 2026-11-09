/* Known values for the break-it test (tools/breakit.cjs), optics-bench. Hook: window.__ob (items, preset, fermat).
   The readouts agree with the closed form physics from their own shown numbers: the lens and mirror equation (d_i and m from d_o
   and f), the refracting surface equation (from n1, n2, R), the microscope (M_eye = 25 cm / f_eye, M_net = m_obj M_eye) and the
   telescope (M = -f_obj / f_eye), the critical angle asin(1/n), and Fermat's least time (t never below the quickest path, and the
   shown n1 sin(theta1), n2 sin(theta2) follow the angles). The ready made benches have their cited geometry: the converging
   lens and the camera put the image on the screen. Values are read back from the shown text only to compare with the physics. */
const rd = `const $ = (id) => document.getElementById(id), shown = (id) => { const e = $(id); return e && e.offsetParent !== null ? e.textContent : null; };
  const num = (t) => t == null ? NaN : /∞/.test(t) ? Infinity : parseFloat(t.replace(/[−\\u2212]/g, '-').replace(/[^0-9eE+.-]/g, ' ').trim().split(/\\s+/)[0]);
  const nums = (t) => (t || '').replace(/[−\\u2212]/g, '-').match(/-?\\d+\\.?\\d*/g).map(Number);
  const close = (got, want, abs, rel) => (!isFinite(want) || !isFinite(got)) ? (got === want || (!isFinite(got) && !isFinite(want))) : Math.abs(got - want) <= abs + rel * Math.abs(want);
`;
module.exports = {
  checks: [
    { name: "lens, mirror and surface readouts obey the image equation and m = -di/do", fn: `(() => { ${rd}
      if (!window.__ob || window.__ob.fermat()) return true; const img = $('imgDl'); if (!img || img.hidden || img.offsetParent === null) return true;
      const dO = num(shown('rDo')), dEq = num(shown('rDiEq')), mEq = num(shown('rMEq')), tr = shown('rDi'), f = shown('rF');
      let want;
      if (shown('sN')) { const [n1, n2] = nums(shown('sN')), R = /∞/.test(shown('sR')) ? Infinity : num(shown('sR')); const P = isFinite(R) ? (n2 - n1) / R : 0, inv = (P - n1 / dO) / n2;
        want = Math.abs(inv) < 1e-9 ? Infinity : 1 / inv;
        if (!close(dEq, want, 0.06, 0.01)) return 'surface: d_i shows ' + shown('rDiEq') + ', equation gives ' + want + ' (n1 ' + n1 + ', n2 ' + n2 + ', R ' + R + ', d_o ' + dO + ')';
        if (isFinite(want) && !close(mEq, -(n1 * want) / (n2 * dO), 0.011, 0.01)) return 'surface m shows ' + shown('rMEq'); }
      else { const F = /∞/.test(f) ? Infinity : num(f); if (!isFinite(F) || F === 0) return true; const inv = 1 / F - 1 / dO; want = Math.abs(inv) < 1e-9 ? Infinity : 1 / inv;
        if (!close(dEq, want, 0.06, 0.01)) return 'd_i from the equation shows ' + shown('rDiEq') + ', 1/f - 1/d_o gives ' + want + ' (f ' + F + ', d_o ' + dO + ')';
        if (isFinite(want) && !close(mEq, -want / dO, 0.011, 0.01)) return 'm shows ' + shown('rMEq') + ', -d_i/d_o = ' + (-want / dO); }
      if (!shown('sN') && isFinite(want) && !/∞/.test(tr) && !close(num(tr), want, 0.35, 0.03)) return 'traced d_i ' + tr + ' disagrees with the equation ' + want;
      return true; })()` },
    { name: "microscope and telescope readouts: M_eye = 25/f_eye, M_net = m_obj M_eye, M = -f_obj/f_eye", fn: `(() => { ${rd}
      if (!window.__ob || window.__ob.fermat() || !$('instSec') || $('instSec').hidden || $('instSec').offsetParent === null) return true;
      if ($('micDl') && !$('micDl').hidden && $('micDl').offsetParent !== null) {
        const [fO, fE] = nums(shown('mF')), Me = num(shown('mEye')), dO = num(shown('mDo')), dI = num(shown('mDiEq')), mo = num(shown('mObjEq'));
        if (!close(Me, 25 / fE, 0.011, 0.005)) return 'M_eye shows ' + shown('mEye') + ', 25/f_eye = ' + 25 / fE;
        if (isFinite(dI) && !close(mo, -dI / dO, 0.011, 0.01)) return 'm_obj shows ' + shown('mObjEq') + ', -d_i/d_o = ' + (-dI / dO);
        const net = shown('mNet'); if (net && /\\d/.test(net) && !close(num(net), mo * Me, 0.05, 0.015)) return 'M_net shows ' + net + ', m_obj M_eye = ' + mo * Me;
      }
      if ($('telDl') && !$('telDl').hidden && $('telDl').offsetParent !== null) {
        const [fO, fE] = nums(shown('tF')), M = num(shown('tMEq'));
        if (fE && !close(M, -fO / fE, 0.011, 0.005)) return 'telescope M shows ' + shown('tMEq') + ', -f_obj/f_eye = ' + -fO / fE;
        const [sep, sum] = nums(shown('tSep')); if (!close(sum, fO + fE, 0.11, 0)) return 'f_obj + f_eye shown as ' + sum + ', f values ' + fO + ', ' + fE;
      }
      return true; })()` },
    { name: "critical angle = asin(1/n) for the glass shown", fn: `(() => { ${rd}
      const s = $('refSec'); if (!s || s.hidden || s.offsetParent === null) return true;
      const n = num(shown('rN')), c = shown('rCrit'); if (!(n > 0)) return 'n shows ' + shown('rN');
      if (n > 1) { const want = Math.asin(1 / n) * 180 / Math.PI; return close(num(c), want, 0.06, 0) ? true : 'critical angle shows ' + c + ', asin(1/' + n + ') = ' + want; }
      return /none/.test(c) ? true : 'n <= 1 but critical angle shows ' + c; })()` },
    { name: "Fermat: no path beats the quickest; shown sines and times follow the geometry", fn: `(() => { ${rd}
      const F = window.__ob && window.__ob.fermat(); if (!F) return true;
      if (F.t < F.tb - 1e-9) return 'time on this path ' + F.t + ' ns is less than the quickest path ' + F.tb + ' ns';
      const dl = $('fmDl'); if (!dl || dl.offsetParent === null) return true;
      const rows = [...dl.querySelectorAll('div')].map((d) => [d.querySelector('dt').textContent, d.querySelector('dd').textContent]);
      const get = (re) => (rows.find((r) => re.test(r[0])) || [])[1];
      const t = num(get(/Time on this path/)); if (!close(t, F.t, 6e-5, 0)) return 'time readout ' + t + ' but t = ' + F.t;
      const sines = get(/n₁ sin/); if (sines) { const [a, b] = nums(sines), r = Math.PI / 180;
        if (!close(a, F.n1 * Math.sin(F.ang[0] * r), 6e-5, 0) || !close(b, F.n2 * Math.sin(F.ang[1] * r), 6e-5, 0)) return 'sines shown ' + sines + ' but angles ' + F.ang; }
      /* at the quickest path n1 sin(theta1) = n2 sin(theta2) (Snell), or theta1 = theta2 for the mirror */
      const r = Math.PI / 180, d = F.n1 * Math.sin(F.angB[0] * r) - F.n2 * Math.sin(F.angB[1] * r);
      if (Math.abs(d) > 1e-6 && Math.abs(F.xb) < 1e6) return 'at the quickest path n1 sin t1 - n2 sin t2 = ' + d + ' (not Snell)';
      return true; })()` },
  ],
  steps: [
    { name: 'every ready made bench in turn: image equation holds, then drag the lens through the object and back', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      for (const b of document.querySelectorAll('#presets [data-p]')) { b.click(); await pause(250); }
      document.querySelector('#presets [data-p=converging]').click(); await pause(200);
      const ob = window.__ob; ob.select(ob.items[1]); await pause(100);
      const cv = document.getElementById('view');
      const send = (type, p) => cv.dispatchEvent(new PointerEvent(type, { clientX: p[0], clientY: p[1], pointerId: 1, bubbles: true, button: 0, buttons: type === 'pointerup' ? 0 : 1 }));
      const a = ob.px(8, 0); send('pointerdown', a);
      for (const x of [-22, -22.0001, 0, 8, 12, 10, 8]) { send('pointermove', ob.px(x, 0)); await pause(120); }
      send('pointerup', ob.px(8, 0)); await pause(200);
    })()` },
    { name: 'Fermat: switch mirror and refraction, every medium pair (n1 = n2 included), nudge P to the ends', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      document.querySelector('#presets [data-p=fermat]').click(); await pause(200);
      const best = document.getElementById('fmBest'); if (!best.checked) best.click();
      for (const path of ['refl', 'refr', 'refl']) { document.querySelector('#fmPath [data-fm=' + path + ']').click(); await pause(100);
        for (const a of document.querySelectorAll('#fmN1 button')) { a.click(); for (const b of document.querySelectorAll('#fmN2 button')) { b.click(); await pause(40); } } }
      const x = document.getElementById('fmX'); for (const v of [x.min, x.max, 0, x.min]) { x.value = v; x.dispatchEvent(new Event('input', { bubbles: true })); await pause(80); }
      const cv = document.getElementById('view'); cv.focus();
      for (let i = 0; i < 80; i++) cv.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', shiftKey: i % 2 === 0, bubbles: true, cancelable: true }));
      await pause(200);
    })()` },
    { name: 'microscope: eyepiece f to the extremes while running, then edit the objective to a diverging lens', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      document.querySelector('#presets [data-p=microscope]').click(); await pause(250);
      const ob = window.__ob; for (const i of [2, 1]) { ob.select(ob.items[i]); await pause(150);
        for (const inp of document.querySelectorAll('#selFields input[type=range], #selFields input[type=number]')) for (const v of [inp.max, inp.min, inp.value]) { inp.value = v; inp.dispatchEvent(new Event('input', { bubbles: true })); await pause(30); } }
      ob.select(ob.items[1]); await pause(100);
      const div = document.querySelector('#selFields [data-v=div], #selFields button[data-v=div]'); if (div) div.click(); await pause(250);
      document.querySelector('#presets [data-p=telescope]').click(); await pause(250);
    })()` },
  ],
};
