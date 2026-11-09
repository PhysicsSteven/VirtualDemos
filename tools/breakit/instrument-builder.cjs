/* Known values for the break-it test (tools/breakit.cjs), instrument-builder. Hooks: window.__ib (S, addPart, applyPreset, changed)
   and window.vdModel() (the live model: chain, M, Mt, pu, hf, vo, bright). Checks: every link of the image chain obeys the thin
   lens equation and m = -d_i/d_o; with the final image at infinity the traced M equals the textbook formula; a telescope (far
   object, afocal) has exit pupil = entrance pupil/|M| (Lagrange); the ready made setups keep their cited values (magnifier 5,
   microscope -100, Kepler -10 with a 5.00 mm exit pupil, Galileo +5, terrestrial +10); the readouts show the model's numbers;
   brightness never exceeds 100 % and the field readouts are positive. */
const head = `const IB = window.__ib, m = window.vdModel && window.vdModel(); if (!IB || !m) return true;
  const rd = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-');
  const near = (a, b, tol) => Math.abs(a - b) <= tol * Math.max(Math.abs(b), 1e-12);
`;
module.exports = {
  checks: [
    { name: "thin lens equation 1/d_o + 1/d_i = 1/f and m = -d_i/d_o in every link of the chain", fn: `(() => { ${head}
      for (const c of m.chain) {
        if (!isFinite(c.dO) || !isFinite(c.dI)) continue;
        if (Math.abs(c.dO) < 1e-6 || Math.abs(c.dI) < 1e-6) continue;
        const e = Math.abs(1 / c.dO + 1 / c.dI - 1 / c.lens.f);
        if (e > 1e-7 * Math.max(1, Math.abs(1 / c.lens.f))) return 'lens ' + c.lens.name + ': 1/do + 1/di = ' + (1 / c.dO + 1 / c.dI) + ', 1/f = ' + 1 / c.lens.f;
        if (!near(c.m, -c.dI / c.dO, 1e-9)) return 'm = ' + c.m + ', -di/do = ' + -c.dI / c.dO;
      }
      return true; })()` },
    { name: "final image at infinity: traced M equals the textbook formula, and the readouts show the model", fn: `(() => { ${head}
      if (IB.S.blind) return true;
      if (m.chain.length && !isFinite(m.zF) && isFinite(m.M) && isFinite(m.Mt) && !near(m.M, m.Mt, 1e-6)) return 'afocal: traced M = ' + m.M + ', formula ' + m.Mt;
      if (isFinite(m.M)) { const shown = parseFloat(rd('qM')); const tol = Math.max(6e-3 * Math.abs(m.M), 6e-3);
        if (!(Math.abs(shown - m.M) <= tol || Math.abs(shown) >= 1e5)) return 'qM shows ' + rd('qM') + ', model M = ' + m.M;
        if (rd('qM') !== rd('rM')) return 'two M readouts differ: ' + rd('qM') + ' and ' + rd('rM'); }
      return true; })()` },
    { name: "afocal telescope: exit pupil D = entrance pupil D / |M|", fn: `(() => { ${head}
      if (m.obj.kind !== 'far' || !m.pu || m.chain.length < 2 || isFinite(m.zF)) return true;
      if (!isFinite(m.pu.en.D) || !isFinite(m.pu.ex.D) || !isFinite(m.M) || Math.abs(m.M) < 1e-9) return true;
      return near(m.pu.ex.D, m.pu.en.D / Math.abs(m.M), 1e-6) ? true : 'exit pupil ' + m.pu.ex.D + ' cm, entrance ' + m.pu.en.D + ' / |M| ' + Math.abs(m.M) + ' = ' + m.pu.en.D / Math.abs(m.M); })()` },
    { name: "ready made setups keep their cited M: magnifier 5, microscope -100, Kepler -10 (exit pupil 5 mm), Galileo +5, terrestrial +10", fn: `(() => { ${head}
      const want = { magnifier: 5, microscope: -100, kepler: -10, galileo: 5, terrestrial: 10 }[IB.S.preset];
      if (want == null || IB.S.blind || IB.S.viewer !== 'eye') return true;
      if (!near(m.M, want, 1e-6)) return IB.S.preset + ': M = ' + m.M + ', should be ' + want;
      if (IB.S.preset === 'kepler' && m.pu && !near(m.pu.ex.D, 0.5, 1e-6)) return 'Kepler exit pupil ' + m.pu.ex.D + ' cm, should be 0.5';
      return true; })()` },
    { name: "brightness within 0..100 %, fields positive, no negative or NaN sizes", fn: `(() => { ${head}
      if (!(m.bright >= 0 && m.bright <= 1 + 1e-9)) return 'brightness fraction ' + m.bright;
      if (m.hf && !(m.hf.field > 0)) return 'field ' + m.hf.field;
      if (m.pu && (m.pu.en.D < 0 || m.pu.ex.D < 0)) return 'negative pupil';
      if (m.gather != null && !(m.gather >= 0)) return 'gather ' + m.gather;
      return true; })()` },
  ],
  steps: [
    { name: 'every preset in turn, then shrink all lenses to the minimum and push the eye and object to the rail ends', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      for (const p of ['magnifier', 'microscope', 'kepler', 'galileo', 'terrestrial', 'scratch']) {
        document.querySelector('#presets [data-p=' + p + ']').click(); await pause(200);
        for (const b of document.querySelectorAll('#elist button')) {
          b.click(); await pause(60);
          for (const [id, ext] of [['sZ', 0], ['sZ', 1], ['sF', 0], ['sF', 1], ['sD', 0], ['sD', 1], ['sH', 0], ['sH', 1]]) {
            const e = document.getElementById(id); if (e && e.offsetParent) { set(id, ext ? e.max : e.min); await pause(40); }
          }
        }
        for (const [id, ext] of [['sE', 0], ['sE', 1], ['sP', 0], ['sP', 1]]) { const e = document.getElementById(id); if (e && e.offsetParent) { set(id, ext ? e.max : e.min); await pause(40); } }
      }
      document.querySelector('#presets [data-p=microscope]').click(); await pause(300);
    })()` },
    { name: 'camera: every f-number, a lens put on the object and one on the eye, add parts up to the limit, then remove them all', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      document.querySelector('#presets [data-p=kepler]').click(); await pause(200);
      document.querySelector('#viewerSeg [data-v=camera]').click(); await pause(200);
      const n = document.getElementById('sN');
      for (let v = Number(n.min); v <= Number(n.max); v++) { n.value = v; n.dispatchEvent(new Event('input', { bubbles: true })); await pause(80); }
      for (let i = 0; i < 9; i++) { document.getElementById(i % 2 ? 'addStop' : 'addLens').click(); await pause(60); }
      for (let i = 0; i < 12; i++) { const r = document.getElementById('remove'); if (r.offsetParent) r.click(); await pause(40); const b = document.querySelector('#elist button'); if (b) b.click(); await pause(40); }
      document.querySelector('#viewerSeg [data-v=eye]').click(); await pause(200);
      document.querySelector('#presets [data-p=galileo]').click(); await pause(300);
    })()` },
    { name: 'far object to near object and back with parts behind the object (usable parts change), then Moon and sign', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      document.querySelector('#presets [data-p=terrestrial]').click(); await pause(200);
      for (const b of document.querySelectorAll('#objSeg button')) { b.click(); await pause(200); }
      for (const b of [...document.querySelectorAll('#objSeg button')].reverse()) { b.click(); await pause(200); }
      document.getElementById('toPupil').click(); await pause(200);
      document.querySelector('#presets [data-p=microscope]').click(); await pause(300);
    })()` },
  ],
};
