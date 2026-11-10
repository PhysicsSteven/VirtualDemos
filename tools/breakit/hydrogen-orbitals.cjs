/* Known values for the break-it test (tools/breakit.cjs), hydrogen-orbitals. Hook: window.__ho (S, stA, stB, dip).
   For the chosen state (n, l, m): E = -13.598 / n² eV; n - l - 1 radial nodes found; <r> = (3n² - l(l+1))/2 a0 (readout and the
   numerical integral of P(r) agree); P(r) is normalized to 1; the most probable radius of a circular state (l = n - 1) is n² a0;
   L = sqrt(l(l+1)) hbar; Lz readout follows m. Superposition: beat period h/|ΔE|, wavelength hc/|ΔE|, and the dipole is zero
   unless the l differ by 1 (selection rule); the mix preset is 1s + 2pz: ΔE = 10.199 eV, 0.41 fs, 121.6 nm (Lyman alpha). */
const pre = `const H = window.__ho; if (!H || !H.stA) return true;
  const S = H.S, st = H.stA, RY = 13.598, HC = 1239.842, HP = 4.135668, rd = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-');
  const near = (a, b, t) => Math.abs(a - b) <= t * Math.max(Math.abs(b), 1e-12);
`;
module.exports = {
  checks: [
    { name: "energy -13.598/n² eV, quantum numbers, node count and L readouts equal the state", fn: `(() => { ${pre}
      if (Math.abs(parseFloat(rd('rE')) - (-RY / (S.n * S.n))) > 5.1e-4) return 'E shows ' + rd('rE') + ', should be ' + (-RY / (S.n * S.n)).toFixed(3);
      if (rd('rQ') !== S.n + ', ' + S.l + ', ' + S.m) return 'quantum numbers show ' + rd('rQ');
      if (S.l >= S.n || Math.abs(S.m) > S.l || S.l < 0 || S.n < 1) return 'illegal state n=' + S.n + ' l=' + S.l + ' m=' + S.m;
      if (rd('rRad') !== String(S.n - S.l - 1)) return 'radial nodes show "' + rd('rRad') + '", should be ' + (S.n - S.l - 1) + ' (found ' + st.nodes.length + ')';
      if (rd('rAng') !== String(S.l)) return 'angular nodes show ' + rd('rAng');
      if (S.l && Math.abs(parseFloat(rd('rL').split('=')[1]) - Math.sqrt(S.l * (S.l + 1))) > 5.1e-4) return 'L shows ' + rd('rL');
      return true; })()` },
    { name: "mean radius (3n² - l(l+1))/2, normalization 1, most probable radius of a circular state n²", fn: `(() => { ${pre}
      const want = 0.5 * (3 * S.n * S.n - S.l * (S.l + 1));
      if (Math.abs(parseFloat(rd('rMean')) - want) > 0.051) return '<r> shows ' + rd('rMean') + ', should be ' + want;
      if (!near(st.rMean, want, 1e-3)) return 'integral of r P(r) = ' + st.rMean + ', exact ' + want;
      if (Math.abs(st.norm - 1) > 1e-4) return 'P(r) integrates to ' + st.norm;
      if (S.l === S.n - 1 && Math.abs(st.rMP - S.n * S.n) > 0.01) return 'circular state most probable radius ' + st.rMP + ', should be ' + S.n * S.n;
      if (Math.abs(parseFloat(rd('rMP')) - st.rMP) > 0.0051) return 'rMP readout ' + rd('rMP');
      return true; })()` },
    { name: "superposition: beat h/ΔE, wavelength hc/ΔE, dipole zero unless Δl = ±1", fn: `(() => { ${pre}
      const B = H.stB; if (!B) return true;
      const dE = B.E - st.E, T = HP / Math.abs(dE);
      if (Math.abs(dE) > 1e-9 && Math.abs(parseFloat(rd('rBeat')) - T) > 5.1e-4) return 'beat shows ' + rd('rBeat') + ', h/ΔE = ' + T;
      if (Math.abs(dE) > 1e-9) { const lam = HC / Math.abs(dE), t = rd('rLam'), v = parseFloat(t) * (/[µμ]m/.test(t) ? 1000 : / mm$/.test(t) ? 1e6 : 1);
        if (!near(v, lam, 0.006)) return 'wavelength shows ' + t + ', hc/ΔE = ' + lam + ' nm'; }
      const dl = Math.abs(S.l - S.B.l);
      if (H.dip && dl !== 1 && H.dip.amp > 1e-3) return 'Δl = ' + dl + ' but the dipole amplitude is ' + H.dip.amp;
      if (H.dip && dl === 1 && S.l === 0 && S.B.l === 1 && S.n === 1 && S.B.n === 2 && S.B.m === 0 && S.m === 0) { if (Math.abs(H.dip.amp - 0.745) > 0.01) return '1s to 2pz dipole amplitude ' + H.dip.amp + ' (expected 0.745 a0 = 128 sqrt(2)/243 times the 1/sqrt(2) mix)'; }
      return true; })()` },
    { name: "mix preset: 1s + 2pz, ΔE 10.199 eV, beat 0.41 fs, Lyman α 121.6 nm", fn: `(() => { ${pre}
      if (S.preset !== 'mix' || !H.stB) return true;
      const dE = H.stB.E - st.E; if (Math.abs(dE - 10.199) > 5e-4) return 'ΔE = ' + dE;
      if (Math.abs(HP / dE - 0.4055) > 5e-4 || Math.abs(HC / dE - 121.57) > 0.01) return 'beat or wavelength off: ' + HP / dE + ', ' + HC / dE;
      return true; })()` },
  ],
  steps: [
    { name: 'every preset, then each n up to the maximum with l and m to their extremes, complex and real, with a second state', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      for (const b of document.querySelectorAll('#presets button')) { b.click(); await pause(250); }
      for (const sh of [...document.querySelectorAll('#shells button')]) { sh.click(); await pause(120);
        for (const mb of [...document.querySelectorAll('#mChips button')]) { mb.click(); await pause(60); } }
      for (const bb of document.querySelectorAll('#basisSeg button')) { bb.click(); await pause(150); }
      const mx = document.getElementById('mixOn'); if (!mx.checked) mx.click(); await pause(200);
      const sel = document.getElementById('mixSel'); for (const o of [...sel.options].map((x) => x.value)) { sel.value = o; sel.dispatchEvent(new Event('change', { bubbles: true })); await pause(150); }
      document.querySelector('#presets button').click(); await pause(300);
    })()` },
  ],
};
