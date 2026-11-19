/* Known values for the break-it test (tools/breakit.cjs), nerve-signals. Hook: window.__ns (S, laneSpeed, restNow, vModel).
   Resting view: the readouts E_K, E_Na, E_Cl equal the Nernst potentials (kT/e) ln(c_out/c_in) from the cited concentrations
   (Purves et al. 2018) with k_B and e exact. Heart view: Einthoven's law, I + III − II = 0 in the readouts at every moment.
   Axon view: once both electrodes have timed the impulse on a healthy axon, with the electrodes at least a fifth of the axon
   apart and away from the stimulus, the measured speed is within 3 % of the model's scaling, 0.854 √d bare and 3.64 d
   myelinated (d in µm, test_nerve-signals.cjs checks the scaling against full runs). */
const pre = `const N = window.__ns; if (!N) return true; const S = N.S;
  const rows = {}; for (const r of document.querySelectorAll('#out > div')) { const t = r.querySelector('dt'), d = r.querySelector('dd'); if (t && d) rows[t.textContent.trim()] = d.textContent.replace(/\\u2212/g, '-').replace(/,/g, ''); }
  const num = (t) => (t == null ? NaN : parseFloat(t));`;
module.exports = {
  checks: [
    { name: 'resting view: E_K, E_Na, E_Cl are the Nernst potentials of the cited concentrations', fn: `(() => { ${pre}
      if (S.view !== 'rest') return true;
      const kT = 1000 * 1.380649e-23 * (S.T + 273.15) / 1.602176634e-19, C = { human: { Na: [145, 12], Cl: [110, 10], K: 140 }, squid: { Na: [440, 50], Cl: [560, 40], K: 400 } }[S.cell];
      const want = { E_K: kT * Math.log(S.Kout / C.K), E_Na: kT * Math.log(C.Na[0] / C.Na[1]), E_Cl: -kT * Math.log(C.Cl[0] / C.Cl[1]) };
      for (const k in want) { const g = num(rows[k]); if (!(Math.abs(g - want[k]) <= 0.051)) return k + ' shows ' + rows[k] + ', physics ' + want[k].toFixed(2); }
      return true; })()` },
    { name: "heart view: Einthoven's law I + III − II = 0", fn: `(() => { ${pre}
      if (S.view !== 'ecg') return true; const g = num(rows['I + III − II']); return Math.abs(g) < 0.0011 ? true : 'I + III − II shows ' + rows['I + III − II']; })()` },
    { name: 'axon view: a timed speed on a healthy axon matches the model within 3 %', fn: `(() => { ${pre}
      if (S.view !== 'axon' || !S.lanes) return true;
      const lo = Math.min(S.ea, S.eb), hi = Math.max(S.ea, S.eb); if (lo < 0.15 || hi - lo < 0.2 || S.sched.length > 1) return true;
      for (const ln of S.lanes) { if (ln.my && S.damage !== 'none') continue; const v = N.laneSpeed(ln); if (v === null) continue;
        const w = N.vModel(S.d, ln.my); if (Math.abs(Math.abs(v) - w) > 0.03 * w) return (ln.my ? 'myelinated' : 'bare') + ' speed ' + v + ', model ' + w; }
      return true; })()` },
  ],
  steps: [
    { name: 'run the race to the end and record a reading', fn: `(async () => { const N = window.__ns; N.applyPreset('race'); N.advance(2.5); N.draw();
      document.querySelector('.vd-rec').click(); const v = N.laneSpeed(N.S.lanes[0]); if (!(v > 30 && v < 40)) throw new Error('race speed ' + v); })()` },
    { name: 'squid axon gives about 18.7 m/s', fn: `(async () => { const N = window.__ns; N.applyPreset('squid'); N.advance(22); const v = N.laneSpeed(N.S.lanes[0]); if (!(Math.abs(v - 18.7) < 0.4)) throw new Error('squid ' + v); })()` },
  ],
};
