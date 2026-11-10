/* Known values for the break-it test (tools/breakit.cjs), household-wiring. Hook: window.__hw (S, now, state, solveCircuit).
   Kirchhoff and energy conservation of the solved circuit: hot minus neutral equals the ground wire plus the body current, and the
   source power 120 V times the hot current equals the appliances, the wires, the faults and the body; the readouts equal the solve
   from the current settings (outlet voltage, wire resistance rho L / A, hot current); the protection obeys its rules (a
   GFCI sees more than 5 mA of imbalance, a breaker passes at most 10 times its rating); the wet skin preset gives about 12 mA. */
const pre = `const H = window.__hw; if (!H) return true;
  const S = H.S, st = H.state(), r = H.solveCircuit(st), n = H.now(), rd = (label) => { for (const d of document.querySelectorAll('#out > div')) if (d.querySelector('dt').textContent === label) return d.querySelector('dd').textContent.replace(/\\u2212/g, '-'); return null; };
  const amp = (t) => { const m = t && t.match(/^(-?[\\d.eE+-]+) (A|mA|µA)$/); return m ? +m[1] * ({ A: 1, mA: 1e-3, 'µA': 1e-6 }[m[2]]) : NaN; };
`;
module.exports = {
  checks: [
    { name: "KCL and energy: hot minus neutral = ground + body; 120 V x I_hot = appliances + wires + faults + body", fn: `(() => { ${pre}
      for (const k of ['Ihot', 'Ineu', 'Ignd', 'Ibody', 'leak', 'H', 'N', 'C']) if (!isFinite(r[k])) return k + ' is ' + r[k];
      const sc = Math.max(Math.abs(r.Ihot), 1e-9);
      if (Math.abs(r.leak - r.Ignd - r.Ibody) > 1e-9 * sc + 1e-12) return 'hot minus neutral ' + r.leak + ' but ground + body = ' + (r.Ignd + r.Ibody);
      let pl = 0; for (const k of st.loads) pl += r.loadP[k];
      const Hn = r.H - r.N, pf = (st.fault === 'short' ? Hn * Hn / 0.10 : 0) + (st.fault === 'case' ? (r.H - r.C) ** 2 / 0.10 : 0);
      const want = 120 * r.Ihot, got = pl + r.wireHeat + pf + r.C * r.Ibody;
      if (Math.abs(want - got) > 1e-9 * Math.max(want, 1)) return 'source gives ' + want + ' W but the circuit uses ' + got + ' W';
      return true; })()` },
    { name: "readouts equal the solve: outlet voltage, one way wire resistance, hot current", fn: `(() => { ${pre}
      const dia = { 14: 1.628, 12: 2.053 }[st.gauge], Rw = 1.68e-8 * st.len / (Math.PI * (dia / 2000) ** 2);
      if (Math.abs(r.Rw - Rw) > 1e-12) return 'solver Rw ' + r.Rw + ' vs rho L / A ' + Rw;
      const rm = rd('Wire resistance, one way'); if (rm === null) return true;
      if (Math.abs(parseFloat(rm) - Rw * 1000) > 0.051) return 'wire resistance shows ' + rm + ', rho L/A = ' + (Rw * 1000) + ' mΩ';
      const vo = rd('Voltage at the outlet'); if (!S.tripped && Math.abs(parseFloat(vo) - (r.H - r.N)) > 0.051) return 'outlet shows ' + vo + ', solve ' + (r.H - r.N);
      if (S.tripped && vo !== '0 V') return 'tripped but outlet shows ' + vo;
      const ih = rd('Current in the hot wire'); if (ih === null || /hidden/.test(ih)) return true;
      const tol = Math.abs(n.Ihot) < 1e-9 ? 1e-9 : 6e-3 * Math.abs(n.Ihot);
      return Math.abs(amp(ih) - n.Ihot) <= tol ? true : 'hot current shows ' + ih + ', solve ' + n.Ihot + ' A'; })()` },
    { name: "protection rules: a tripped GFCI saw > 5 mA, an untripped one never does; breaker passes at most 10 x rating", fn: `(() => { ${pre}
      if (!S.tripped) {
        if (S.gfci && Math.abs(r.leak) > 5e-3) return 'GFCI on, imbalance ' + (r.leak * 1e3) + ' mA, but nothing tripped';
        if (r.Ihot > 10 * S.rating) return 'hot current ' + r.Ihot + ' A (> 10 x ' + S.rating + ' A) but the breaker is closed';
        if (r.Ihot <= S.rating && S.over !== 0) return 'current ' + r.Ihot + ' A under the rating but the overload timer reads ' + S.over;
      } else {
        if (S.tripped === 'GFCI' && !(Math.abs(S.tripLeak) > 5e-3)) return 'GFCI tripped on ' + S.tripLeak + ' A';
        if (n.Ihot !== 0 || n.Ibody !== 0) return 'tripped but currents are not zero';
      }
      return true; })()` },
    { name: "known presets: lamp draws 100 W / 120 V; wet skin ground broken gives about 12 mA", fn: `(() => { ${pre}
      if (S.tripped) return true;
      if (S.preset === 'lamp' && st.len === 15 && st.gauge === 14) { if (Math.abs(r.Ihot - 100 / 120) > 5e-3) return 'lamp current ' + r.Ihot + ', P/V = ' + 100 / 120; }
      if (S.preset === 'wet' && (r.Ibody < 11.4e-3 || r.Ibody > 12.6e-3)) return 'wet preset body current ' + r.Ibody * 1e3 + ' mA, hint says 12 mA';
      return true; })()` },
  ],
  steps: [
    { name: 'every preset, every appliance on and off, gauge and breaker combinations, run length extremes, reset the breaker', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), q = (s) => [...document.querySelectorAll(s)];
      for (const p of q('#presets button')) { p.click(); await pause(150); q('#resetBtn')[0].click(); }
      for (const a of q('#apps button')) { a.click(); await pause(60); }
      for (const g of q('#gauge button')) for (const b of q('#breaker button')) { g.click(); b.click(); await pause(60); q('#resetBtn')[0].click(); }
      const s = document.getElementById('sLen'); for (const v of ['3', '30']) { s.value = v; s.dispatchEvent(new Event('input', { bubbles: true })); await pause(60); }
      for (const f of q('#fault button')) { f.click(); await pause(60); q('#resetBtn')[0].click(); }
      for (const id of ['touch', 'gfci', 'groundOk']) { document.getElementById(id).click(); await pause(60); document.getElementById(id).click(); }
      await pause(2600);
    })()` },
  ],
};
