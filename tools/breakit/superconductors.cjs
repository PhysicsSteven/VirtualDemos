/* Known values for the break-it test (tools/breakit.cjs), superconductors. Hook: window.__sc (S, now, METALS, ...).
   Worked again here from the live temperature, field and metal (not through the page's sample()): the critical field is
   Bc(0)[1 - (T/Tc)^2] below Tc and zero above (Eq. 9.39); the phase follows Ba against (2/3)Bc and Bc; a Meissner sphere has
   B_in = 0, moment m = -2 pi R^3 Ba / mu0 and a Hall probe at the equator reading (3/2)Ba; the intermediate state holds the
   equator at Bc with B_in = 3Ba - 2Bc; above Tc or above Bc the sphere is normal with moment 0; a perfect conductor keeps the
   field it had when cooled through Tc (frozen is set whenever it is cold, and cleared when warm). The readouts match the state,
   and the table values shown are the ones in METALS. */
const pre = `const K = window.__sc; if (!K) return true;
  const S = K.S, M = S.m === 'mystery' ? S.mys : S.m, mt = K.METALS[M], MU0 = 1.25663706127e-6, R = 5e-3;
  const rd = (a) => { for (const d of document.querySelectorAll('#out > div')) if (d.querySelector('dt').textContent === a) return d.querySelector('dd').textContent.replace(/\\u2212/g, '-'); return null; };
  const cold = S.T < mt.Tc, Bc = cold ? mt.Bc0 * (1 - (S.T / mt.Tc) ** 2) : 0;
`;
module.exports = {
  checks: [
    { name: "critical field Bc(0)[1 - (T/Tc)^2] below Tc, zero above, and the readout shows it", fn: `(() => { ${pre}
      if (!(Bc >= 0) || !isFinite(Bc)) return 'Bc is ' + Bc;
      const st = K.now(); if (Math.abs(st.Bc - Bc) > 1e-9 * Math.max(1, mt.Bc0)) return 'now().Bc = ' + st.Bc + ', Eq. 9.39 gives ' + Bc;
      if (Math.abs(K.bc(M, 0.3) - mt.Bc0 * (1 - (0.3 / mt.Tc) ** 2)) > 1e-12) return 'bc at 0.3 K';
      if (!S.blind && S.m !== 'mystery' && Math.abs(parseFloat(rd('Critical field at this T')) - Bc) > 0.00501) return 'critical field shows ' + rd('Critical field at this T') + ', Eq. 9.39 gives ' + Bc;
      if (S.m !== 'mystery' && rd('Table 9.5: Tc, Bc(0)') !== null) return true;
      return true; })()` },
    { name: "phase and field inside: Meissner, intermediate, normal; the moment and the Hall probe follow", fn: `(() => { ${pre}
      if (S.model !== 'sc') return true;
      const Ba = S.B, st = K.now();
      let Bin, phase;
      if (!cold) { Bin = Ba; phase = 'normal'; } else if (Ba <= 2 / 3 * Bc) { Bin = 0; phase = 'meissner'; } else if (Ba < Bc) { Bin = 3 * Ba - 2 * Bc; phase = 'intermediate'; } else { Bin = Ba; phase = 'normal'; }
      if (st.phase !== phase) return 'phase ' + st.phase + ', expected ' + phase + ' (T = ' + S.T + ', B = ' + Ba + ', Bc = ' + Bc + ')';
      if (Math.abs(st.Bin - Bin) > 1e-9 * Math.max(1, Math.abs(Bin))) return 'B_in = ' + st.Bin + ', expected ' + Bin;
      const m = 4 / 3 * Math.PI * R ** 3 * (1.5 * (Bin - Ba) * 1e-3) / MU0, Beq = phase === 'meissner' ? 1.5 * Ba : phase === 'intermediate' ? Bc : Ba;
      if (phase === 'meissner' && Math.abs(m + 2 * Math.PI * R ** 3 * Ba * 1e-3 / MU0) > 1e-12) return 'Meissner moment is not -2 pi R^3 Ba / mu0';
      if (phase === 'normal' && m !== 0) return 'normal metal has a moment ' + m;
      if (Math.abs(st.moment - m) > 1e-9 * Math.max(1e-6, Math.abs(m))) return 'moment ' + st.moment + ', expected ' + m;
      if (Math.abs(st.Beq - Beq) > 1e-9 * Math.max(1, Math.abs(Beq))) return 'equator field ' + st.Beq + ', expected ' + Beq;
      const got = parseFloat(rd('Magnetometer: moment m')), hall = parseFloat(rd('Hall probe at the equator'));
      if (Math.abs(got - m * 1e3) > 0.00051) return 'magnetometer shows ' + rd('Magnetometer: moment m') + ', expected ' + (m * 1e3).toFixed(4) + ' mA·m²';
      if (Math.abs(hall - Beq) > 0.00501) return 'Hall probe shows ' + rd('Hall probe at the equator') + ', expected ' + Beq;
      if (!S.blind && Math.abs(parseFloat(rd('Field inside, average')) - Bin) > 0.00501) return 'field inside shows ' + rd('Field inside, average') + ', expected ' + Bin;
      if (S.preset === 'meissner' && S.T === 4.2 && S.B === 20 && Math.abs(got + 12.5) > 0.06) return "lead at 4.2 K in 20 mT: moment " + got + ", expected -12.5";;
      return true; })()` },
    { name: "perfect conductor: the trapped field is set whenever it is cold, cleared when warm, and the field inside ignores the applied field", fn: `(() => { ${pre}
      if (S.model !== 'pc') return true;
      const st = K.now();
      if (cold && !(typeof S.frozen === 'number' && isFinite(S.frozen))) return 'cold perfect conductor with no trapped field value: ' + S.frozen;
      if (!cold && S.frozen != null) return 'above Tc but a field is still trapped: ' + S.frozen;
      if (cold && Math.abs(st.Bin - S.frozen) > 1e-12) return 'B_in = ' + st.Bin + ' but trapped ' + S.frozen;
      if (!cold && Math.abs(st.Bin - S.B) > 1e-12) return 'warm: B_in ' + st.Bin + ', applied ' + S.B;
      return true; })()` },
    { name: "state stays finite and inside its limits: |moment| <= 2 pi R^3 Ba / mu0 for a superconductor; B and T within 0..100 mT, 0.3..10 K", fn: `(() => { ${pre}
      const st = K.now();
      if (![st.Bin, st.moment, st.Beq, st.Bc].every(isFinite)) return 'non finite state ' + JSON.stringify(st);
      if (!(S.B >= 0 && S.B <= 100) || !(S.T >= 0.3 && S.T <= 10)) return 'out of range T = ' + S.T + ', B = ' + S.B;
      if (S.model === 'sc' && Math.abs(st.moment) > 2 * Math.PI * R ** 3 * S.B * 1e-3 / MU0 * (1 + 1e-9) + 1e-15) return 'moment larger than the Meissner limit: ' + st.moment;
      if (S.model === 'sc' && st.Bin < -1e-12) return 'negative field inside a superconductor ' + st.Bin;
      return true; })()` },
  ],
  steps: [
    { name: 'perfect conductor: cool in 20 mT, lower the field to 0, warm, cool again; then the same with the superconductor', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), K = window.__sc, $ = (id) => document.getElementById(id);
      const set = (id, v) => { $(id).value = v; $(id).dispatchEvent(new Event(id[0] === 'n' ? 'change' : 'input', { bubbles: true })); };
      K.applyPreset('perfect'); await pause(100);
      set('sT', '4'); await pause(100);
      if (Math.abs(K.now().Bin - 20) > 1e-9) throw new Error('perfect conductor cooled in 20 mT: B_in = ' + K.now().Bin);
      set('sB', '0'); await pause(100);
      if (Math.abs(K.now().Bin - 20) > 1e-9 || K.now().moment <= 0) throw new Error('field lowered to 0: B_in = ' + K.now().Bin + ', moment ' + K.now().moment);
      set('sT', '9'); await pause(100); set('sT', '4'); await pause(100);
      if (Math.abs(K.now().Bin) > 1e-9) throw new Error('re-cooled in 0 field: B_in = ' + K.now().Bin);
      $('selModel').value = 'sc'; $('selModel').dispatchEvent(new Event('change', { bubbles: true })); await pause(100);
      for (const v of ['0', '100', '50', '0']) { set('nB', v); await pause(60); }
      set('nT', '0.3'); await pause(60); set('nT', '10'); await pause(60); set('nT', '7.2'); await pause(60); set('nT', '7.19'); await pause(60);
    })()` },
    { name: 'every metal and the mystery metal at the field edges: B just under and over Bc at several T', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), K = window.__sc, $ = (id) => document.getElementById(id);
      for (const m of ['Pb', 'Sn', 'In', 'Hg', 'Al', 'mystery']) {
        $('selM').value = m; $('selM').dispatchEvent(new Event('change', { bubbles: true })); await pause(60);
        for (const T of [0.3, 1, 3, 7]) { K.setT(T); for (const f of [0, 0.6666, 0.6667, 0.9999, 1.0001, 2]) { K.setB(f * K.bc(K.S.m === 'mystery' ? K.S.mys : K.S.m, K.S.T)); K.sync(); K.redraw(); await pause(15); } }
      }
      K.applyPreset('meissner'); await pause(100);
    })()` },
  ],
};
