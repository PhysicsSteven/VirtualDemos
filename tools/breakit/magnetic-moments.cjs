/* Known values for the break-it test (tools/breakit.cjs), magnetic-moments. Hook: window.__mm (S, zeeman, spotCentres, ...).
   Orbit view: n, l, m_l stay whole numbers with 0 <= l < n and |m_l| <= l; the slider ranges follow. Stern-Gerlach: a level of
   total J gives 2J+1 spots, symmetric about zero, each at z = -g m mu_B G L1 (L1/2 + L2)/(M v^2) with g from the Lande formula
   (silver g = 2.0023, two spots); the spot speed is the selected speed or sqrt(6kT/M). Zeeman: shifts are
   (g_u m_u - g_l m_l) mu_B B lambda^2/hc: cadmium is a normal triplet (0, +-1 unit), sodium D2 has components at +-1/3, +-1, +-5/3
   of mu_B B and D1 at +-2/3, +-4/3 (to 0.3 %: the code uses g_s = 2.0023, not 2), with one unit = lambda^2 mu_B B/(hc) (19.35 pm at 643.847 nm and 1 T). */
const pre = `const M = window.__mm; if (!M) return true; const S = M.S, MUB = 9.2740100657e-24, H = 6.62607015e-34, CL = 299792458, KB = 1.380649e-23, AMU = 1.66053906892e-27;`;
module.exports = {
  checks: [
    { name: "orbit quantum numbers: whole numbers, 0 <= l < n, |m_l| <= l, slider limits follow", fn: `(() => { ${pre}
      const o = S.orb; if (![o.n, o.l, o.m].every(Number.isInteger)) return 'non integer ' + [o.n, o.l, o.m];
      if (!(o.n >= 1 && o.n <= 6 && o.l >= 0 && o.l < o.n && Math.abs(o.m) <= o.l)) return 'illegal state n,l,m = ' + [o.n, o.l, o.m];
      if (!isFinite(o.B) || o.B < 0) return 'B = ' + o.B;
      return true; })()` },
    { name: "Stern-Gerlach spot centers equal -g m mu_B G L1 (L1/2 + L2) / (M v^2); 2J+1 spots", fn: `(() => { ${pre}
      const k = S.sg.atom === 'mystery' ? S.sg.mys : S.sg.atom, c = M.spotCentres(); if (k === 'classical') return true;
      const J = { Ag: 0.5, H: 0.5, Na: 0.5, K: 0.5, O: 2, Cr: 3, Fe: 4, noSpin: 1 }[k], mass = { Ag: 107.8682, H: 1.008, Na: 22.98976928, K: 39.0983, O: 15.999, Cr: 51.9961, Fe: 55.845, noSpin: 107.8682 }[k];
      const LS = { Ag: [0, 0.5], H: [0, 0.5], Na: [0, 0.5], K: [0, 0.5], O: [1, 1], Cr: [0, 3], Fe: [2, 2], noSpin: [1, 0] }[k];
      const gs = 2.00231930436092, g = J === 0 ? 0 : 1 + (gs - 1) * (J * (J + 1) + LS[1] * (LS[1] + 1) - LS[0] * (LS[0] + 1)) / (2 * J * (J + 1));
      if (c.list.length !== 2 * J + 1) return k + ' has ' + c.list.length + ' spots, expected ' + (2 * J + 1);
      const v = S.sg.sel ? S.sg.v : Math.sqrt(6 * KB * S.sg.T / (mass * AMU)); if (Math.abs(c.v - v) > 1e-9 * v) return 'speed ' + c.v + ' vs ' + v;
      let sum = 0;
      for (const q of c.list) { const want = -g * q.m * MUB * S.sg.G / (mass * AMU) * 0.035 * (0.0175 + S.sg.L2 / 100) / (v * v); sum += q.z;
        if (!isFinite(q.z) || Math.abs(q.z - want) > 1e-9 * Math.max(Math.abs(want), 1e-12)) return k + ' m = ' + q.m + ': z = ' + q.z + ', expected ' + want; }
      return Math.abs(sum) < 1e-12 ? true : 'spots do not sum to zero: ' + sum; })()` },
    { name: "Zeeman components: cadmium normal triplet, sodium D2 and D1 anomalous patterns, in units of lambda^2 mu_B B / hc", fn: `(() => { ${pre}
      const B = S.zee.B, ln = { cd: 643.847, h: 121.567, naD2: 588.995, naD1: 589.592 };
      const unit = (key) => (ln[key] * 1e-9) ** 2 * MUB * B / (H * CL) * 1e12;     /* pm */
      const want = { cd: [-1, 0, 1], h: [-1, 0, 1], naD2: [-5 / 3, -1, -1 / 3, 1 / 3, 1, 5 / 3], naD1: [-4 / 3, -2 / 3, 2 / 3, 4 / 3] };
      for (const key of Object.keys(want)) {
        const z = M.zeeman(key, B, 'across'), u = unit(key);
        const sh = [...new Set(z.comps.map((c) => Math.round(-c.shift_pm / u * 1e6) / 1e6))].sort((a, b) => a - b);
        if (B === 0) { if (z.comps.length !== 1 || Math.abs(z.comps[0].shift_pm) > 1e-9) return key + ' at B = 0 should be one unshifted line'; continue; }
        if (sh.length !== want[key].length || sh.some((v, i) => Math.abs(v - want[key][i]) > 3e-3)) return key + ' shifts in units ' + sh + ', expected ' + want[key];
      }
      if (S.zee.B === 1) { const z = M.zeeman('cd', 1, 'across'); if (Math.abs(Math.max(...z.comps.map((c) => c.shift_pm)) - 19.35) > 0.01) return 'cadmium at 1 T: ' + Math.max(...z.comps.map((c) => c.shift_pm)); }
      const a = M.zeeman('cd', B, 'along'); if (B > 0 && a.comps.length !== 2) return 'cadmium seen along the field should show two sigma lines, got ' + a.comps.length;
      return true; })()` },
  ],
  steps: [
    { name: 'every view and preset, sliders to both ends, mystery atom, selector on, run the beam', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      for (const b of document.querySelectorAll('#presets button')) { b.click(); await pause(250); }
      document.querySelector('#viewSeg [data-v=orbit]').click(); await pause(150);
      for (const [id, vs] of [['sN', ['6', '1', '6']], ['sL', ['5', '0', '5']], ['sM', ['-5', '5', '0']], ['sB', ['0', '5', '0']], ['sN', ['1', '3']]]) for (const v of vs) { set(id, v); await pause(100); }
      document.querySelector('#viewSeg [data-v=sg]').click(); await pause(200);
      const sel = document.getElementById('selAtom'); for (const o of [...sel.options]) { sel.value = o.value; sel.dispatchEvent(new Event('change', { bubbles: true })); await pause(150); }
      for (const [id, vs] of [['sG', ['0', '2000']], ['sT', ['300', '1800']], ['sD', ['0', '40']]]) for (const v of vs) { set(id, v); await pause(100); }
      const so = document.getElementById('selOn'); if (!so.checked) so.click(); await pause(100); set('sV', '1'); await pause(100);
      document.getElementById('go').click(); await pause(800); document.getElementById('go').click();
      document.querySelector('#viewSeg [data-v=zee]').click(); await pause(200);
      const sl = document.getElementById('selLine'); for (const o of [...sl.options]) { sl.value = o.value; sl.dispatchEvent(new Event('change', { bubbles: true })); await pause(150); for (const v of ['0', '2', '0.05']) { set('sBz', v); await pause(100); } }
      document.querySelector('#presets button').click(); await pause(300);
    })()` },
  ],
};
