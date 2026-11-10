/* Known values for the break-it test (tools/breakit.cjs), bose-einstein. Hook: window.__bec (S, O, lvl, occupations, ...).
   The occupations always add up to N (levels + the Weyl tail above the cutoff); the ground state holds between 0 and N atoms and
   its share is n0/N; the chemical potential stays below the ground state (x > 0); the readouts (N0, overlap N lambda^2/L^2,
   temperature) equal the physics of the current state; in the box the packets touch (N lambda_T^2/L^2 = 1) at the marked
   temperature; at 1 nK the "Almost all condensed" gas holds about 98 of 100 atoms in the ground state (the preset text). */
const pre = `const B = window.__bec; if (!B || !B.O) return true; const S = B.S, O = B.O;
  const rd = (lab) => { for (const d of document.querySelectorAll('#out > div')) if (d.querySelector('dt').textContent.trim().startsWith(lab)) return d.querySelector('dd').textContent.replace(/\\u2212/g, '-'); return null; };
  const stale = O.N !== S.N;   /* between an input and a change event on the N slider S.N runs ahead of the computed gas */
`;
module.exports = {
  checks: [
    { name: 'occupations add up to N, n0 within 0..N, mu below the ground state', fn: `(() => { ${pre}
      if (![O.x, O.n0, O.frac, O.inLevels, O.a].every(isFinite)) return 'non finite: x ' + O.x + ' n0 ' + O.n0 + ' frac ' + O.frac;
      if (!(O.x > 0)) return 'chemical potential not below the ground state, x = ' + O.x;
      if (Math.abs(O.inLevels + O.above - O.N) > 2e-4 * O.N + 1e-6) return 'levels hold ' + (O.inLevels + O.above) + ' of N = ' + O.N + ' (T = ' + O.T + ')';
      if (O.n0 < 0 || O.n0 > O.N * (1 + 1e-9)) return 'ground state holds ' + O.n0 + ' of ' + O.N;
      if (Math.abs(O.frac - O.n0 / O.N) > 1e-12) return 'frac is not n0/N';
      if (O.T !== S.T) return 'O.T ' + O.T + ' differs from S.T ' + S.T;
      return true; })()` },
    { name: 'readouts: N0 of N and its percent, temperature, overlap equal the state', fn: `(() => { ${pre}
      if (S.run || stale || S.blind) return true;
      const g = rd('In the ground state'); if (g === null) return 'no N0 readout';
      const m = g.match(/^([\\d.]+) of (\\d+) \\(([\\d.]+) %\\)$/); if (!m) return 'odd N0 text ' + g;
      if (Math.abs(+m[1] - O.n0) > (O.n0 < 10 ? 0.0051 : 0.051)) return 'N0 shows ' + m[1] + ', state ' + O.n0;
      if (+m[2] !== S.N) return 'N shows ' + m[2] + ', state ' + S.N;
      if (Math.abs(+m[3] - 100 * O.frac) > 0.051) return 'percent shows ' + m[3] + ', state ' + 100 * O.frac;
      if (!S.trap) { const ov = rd('Overlap'); if (ov !== null && Math.abs(+ov - O.nLambda2) > Math.max(0.0051, 0.00051 * (O.nLambda2 < 0.1 ? 1 : 0)) + 0.0005 * (O.nLambda2 < 0.1 ? 0 : 1)) return 'overlap shows ' + ov + ', state ' + O.nLambda2;
        const want = S.N * B.lambdaT(({rb87: 86.909181, na23: 22.989769, li7: 7.0160034, h1: 1.0078250, he4: 4.0026033})[S.atom] * 1.66053906892e-27, S.T) ** 2 / ((S.L * 1e-6) ** 2);
        if (Math.abs(want / O.nLambda2 - 1) > 1e-9) return 'N lambda^2/L^2 is ' + O.nLambda2 + ', direct ' + want; }
      return true; })()` },
    { name: 'box: packets touch (N lambda^2/L^2 = 1) at the marked temperature; hot gas condenses less than cold', fn: `(() => { ${pre}
      if (S.trap || stale) return true;
      const mu = ({rb87: 86.909181, na23: 22.989769, li7: 7.0160034, h1: 1.0078250, he4: 4.0026033})[S.atom] * 1.66053906892e-27, Td = B.degeneracyT(S.N, S.L * 1e-6, mu);
      const ov = S.N * B.lambdaT(mu, Td) ** 2 / (S.L * 1e-6) ** 2;
      if (Math.abs(ov - 1) > 1e-9) return 'N lambda^2/L^2 at the marked temperature is ' + ov;
      const hot = B.occupations(S.N, mu, S.L * 1e-6, 1e-6).frac, cold = B.occupations(S.N, mu, S.L * 1e-6, 1e-9).frac;
      if (!(cold >= hot - 1e-12)) return 'colder gas has smaller condensate share: ' + cold + ' vs ' + hot;
      return true; })()` },
    { name: 'preset "Almost all condensed": about 98 of 100 atoms in the ground state', fn: `(() => { ${pre}
      if (S.preset !== 'cold' || S.N !== 100 || S.T !== 1e-9 || stale) return true;
      return Math.abs(O.n0 - 98) < 1 ? true : 'N0 is ' + O.n0 + ', the preset text says about 98'; })()` },
  ],
  steps: [
    { name: 'trap then box then trap, N and f at extremes, run cooling in each', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), B = window.__bec;
      const set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); e.dispatchEvent(new Event('change', { bubbles: true })); };
      document.querySelector('#presets [data-p=trapvel]').click(); await pause(200);
      for (const f of ['10', '200']) { set('sF', f); await pause(200); }
      for (const n of ['10', '400']) { set('sN', n); await pause(200); }
      document.getElementById('play').click(); await pause(1500);
      document.querySelector('#contSeg [data-cont=box]').click(); await pause(500);
      for (const l of ['2', '20']) { set('sL', l); await pause(300); }
      document.getElementById('play').click(); await pause(800);
      document.querySelector('#contSeg [data-cont=trap]').click(); await pause(500);
      document.querySelector('#presets [data-p=cool]').click(); await pause(300);
    })()` },
    { name: 'run Warm up to 1 microkelvin and Cool down to 1 nK at 8x, each atom type', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), sel = document.getElementById('selAtom');
      document.querySelector('#presets [data-p=cold]').click(); await pause(200);
      const sp = document.querySelector('#speed [data-sp]:last-child'); if (sp) sp.click();
      for (const a of [...sel.options].map((o) => o.value)) { sel.value = a; sel.dispatchEvent(new Event('change', { bubbles: true })); document.getElementById('warm').click(); document.getElementById('play').click(); await pause(1200); document.getElementById('play').click(); await pause(100); }
      document.querySelector('#presets [data-p=cool]').click(); await pause(300);
    })()` },
  ],
};
