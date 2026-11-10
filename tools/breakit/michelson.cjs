/* Known values for the break-it test (tools/breakit.cjs), michelson. Hook: window.__mi (S, update, zeroCounter, centreOrder, lamInRoom, nm1Air).
   Moving a mirror by d changes the path by 2d, so N = 2d/lambda fringes pass (lambda in the room's air); pumping the 5.00 cm cell
   from the room's 101.325 kPa to vacuum passes N = 2 L (n - 1)/lambda fringes (OpenStax Vol 3 section 3.5; Ciddor 1996 for n); the
   readouts equal the state (micrometer, counter, zero point, cell pressure, n - 1, wavelength in the room's air) and the room's
   air is 20 C and 101.325 kPa. The two probe tests move the mirror and the cell pressure, then put the state back exactly. */
const pre = `const M = window.__mi; if (!M) return true;
  const S = M.S, rd = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-'), dd = {};
  for (const d of document.querySelectorAll('#out > div')) dd[d.querySelector('dt').textContent] = d.querySelector('dd').textContent;
  const lam0 = () => (S.src === 'mystery' ? S.mysLam : S.src === 'white' ? NaN : M.SOURCES[S.src].lines[0].lam);
`;
module.exports = {
  checks: [
    { name: "readouts equal the state: micrometer, counter, zero point, cell pressure, n - 1, wavelength in the room's air", fn: `(() => { ${pre}
      if (![S.m, S.P, S.N, S.zeroAt, S.tx, S.ty].every(isFinite)) return 'state is not finite: ' + [S.m, S.P, S.N, S.zeroAt, S.tx, S.ty];
      if (S.P < 0.002 - 1e-12 || S.P > M.ROOM.P + 1e-9) return 'cell pressure ' + S.P + ' kPa is outside 0.002 to 101.325';
      if (M.ROOM.P !== 101.325 || M.ROOM.T !== 20) return 'room air is ' + M.ROOM.T + ' C, ' + M.ROOM.P + ' kPa';
      if (Math.abs(parseFloat(dd['Micrometer'].replace(/\\u2212/g, '-')) - S.m) > 0.051) return 'Micrometer shows ' + dd['Micrometer'] + ', state ' + S.m;
      if (S.src !== 'white' && dd['Fringes counted'] !== String(S.N)) return 'Fringes counted shows ' + dd['Fringes counted'] + ', state ' + S.N;
      if (Math.abs(parseFloat(dd['Counter zeroed at'].replace(/\\u2212/g, '-')) - S.zeroAt) > 0.051) return 'zero point shows ' + dd['Counter zeroed at'];
      if (rd('oP') !== (S.P.toFixed(1)).replace('-', '\\u2212') + ' kPa' && rd('oP') !== S.P.toFixed(1) + ' kPa') return 'oP shows ' + rd('oP') + ', P = ' + S.P;
      if (S.cell && !S.blind && S.src !== 'mystery' && S.src !== 'white') { const want = M.nm1Air(lam0(), S.P, 20) * 1e4, got = parseFloat(dd['n − 1 of the air in the cell']); if (Math.abs(got - want) > 6e-5) return 'n - 1 shows ' + got + ', physics ' + want; }
      if (!S.blind && S.src !== 'mystery' && S.src !== 'white') { const got = parseFloat(dd["Wavelength in the room's air"]); if (Math.abs(got - M.lamInRoom(lam0())) > 6e-4) return 'wavelength shows ' + got + ', physics ' + M.lamInRoom(lam0()); }
      return true; })()` },
    { name: "moving the mirror 50 um passes 2d/lambda fringes (untilted, one line); put back exactly", fn: `(() => { ${pre}
      const W = (window.__mbCount = (window.__mbCount || 0) + 1); if (W % 4 !== 1) return true;
      if (S.src === 'white' || S.tx !== 0 || S.ty !== 0 || S.src === 'na') return true;
      const keep = { m: S.m, N: S.N, ord: S.ord, zeroAt: S.zeroAt }, lam = M.lamInRoom(lam0());
      M.zeroCounter(); M.update(() => { S.m = keep.m + 50; });
      const got = S.N, want = 2 * 50e3 / lam;
      Object.assign(S, keep); M.update(() => {}, true); S.N = keep.N; S.ord = keep.ord; S.zeroAt = keep.zeroAt; M.redraw();
      return Math.abs(got - want) <= 1.01 ? true : 'moving 50 um passed ' + got + ' fringes, 2d/lambda = ' + want.toFixed(2); })()` },
    { name: "pumping the cell from 101.325 kPa to vacuum passes 2L(n - 1)/lambda fringes; put back exactly", fn: `(() => { ${pre}
      const W = (window.__mcCount = (window.__mcCount || 0) + 1); if (W % 4 !== 2) return true;
      if (S.src === 'white' || S.src === 'na' || S.tx !== 0 || S.ty !== 0 || !S.cell) return true;
      const keep = { m: S.m, N: S.N, ord: S.ord, zeroAt: S.zeroAt, P: S.P }, l0 = lam0();
      M.update(() => { S.P = M.ROOM.P; }, true); M.zeroCounter();
      for (let i = 1; i <= 20; i++) { const P = M.ROOM.P * (1 - i / 20); M.update(() => { S.P = Math.max(0.002, P); }); }
      const got = S.N, want = 2 * 0.05 * (M.nm1Air(l0, M.ROOM.P, 20) - M.nm1Air(l0, 0.002, 20)) / (M.lamInRoom(l0) * 1e-9);
      Object.assign(S, keep); M.update(() => {}, true); S.N = keep.N; S.ord = keep.ord; S.zeroAt = keep.zeroAt; S.P = keep.P; M.sync(); M.redraw();
      return Math.abs(got - want) <= 1.51 ? true : 'pumping the cell passed ' + got + ' fringes, 2L(n-1)/lambda = ' + want.toFixed(2); })()` },
  ],
  steps: [
    { name: 'Cell in, pump down and vent while the mirror moves, change source mid pump, tilt, zero the counter', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), M = window.__mi, q = (s) => document.querySelector(s);
      M.applyPreset('hene'); await pause(100);
      const cell = document.getElementById('cellIn'); if (cell && !M.S.cell) cell.click();
      q('#valveSeg [data-v=pump]').click(); await pause(900); M.setMic(300); await pause(300);
      for (const b of document.querySelectorAll('#presets button')) { b.click(); await pause(250); }
      const c2 = document.getElementById('cellIn'); if (!M.S.cell) c2.click(); q('#valveSeg [data-v=vent]').click();
      await pause(600); M.zeroCounter(); await pause(100); M.setP(0); M.setP(101.325); await pause(200);
    })()` },
  ],
};
