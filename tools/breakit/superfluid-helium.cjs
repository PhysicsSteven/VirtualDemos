/* Known values for the break-it test (tools/breakit.cjs), superfluid-helium. Hook: window.__sf (S, vaporP, fountainHeight, period, meltP, tcHe3).
   Pump down: the vapor pressure curve gives 101325 Pa at the start temperature 4.2221 K and 5041.8 Pa at the lambda point, T stays in
   1.0..4.3 K and the liquid never grows or goes negative. Fountain: the column is h = (1/g) ∫ S dT (checked against S at the midpoint
   times dT/g) and the pressure readout is ρ g h. Film: transfer rate is 7.5e-5 cm³/s per cm of rim, the level never passes the bath.
   Torsion: the period readout is the model's, never below the bare 20.00 s, and (P/P0)² − 1 is the normal fraction times I_He/I_disks (within 1 %).
   Helium 3: the melting curve passes through the cited PLTS-2000 fixed points, solid fraction stays in 0..0.75, T in 1.0 mK..0.3 K. */
const pre = `const Q = window.__sf; if (!Q) return true;
  const S = Q.S, out = {}; for (const d of document.querySelectorAll('#out > div')) out[d.querySelector('dt').textContent] = d.querySelector('dd').textContent;
  const num = (t) => parseFloat(String(t).replace(/\\u2212/g, '-')), G = 9.81;
`;
module.exports = {
  checks: [
    { name: "pump: vapor pressure 101325 Pa at the start and 5041.8 Pa at the lambda point; T and liquid stay in range", fn: `(() => { ${pre}
      const p1 = Q.vaporP(4.2221), p2 = Q.vaporP(2.1768);
      if (Math.abs(p1 / 101325 - 1) > 2e-3) return 'vapor pressure at 4.2221 K is ' + p1.toFixed(0) + ' Pa, normal boiling point is at 101325';
      if (Math.abs(p2 / 5041.8 - 1) > 2e-3) return 'vapor pressure at the lambda point is ' + p2.toFixed(1) + ' Pa, not 5041.8';
      const P = S.pump; if (!isFinite(P.T) || !isFinite(P.n)) return 'pump state not finite';
      if (P.T < 1.0 - 1e-9 || P.T > 4.3) return 'T = ' + P.T;
      const n0 = P.M0 / 4.0026; if (P.n < 0 || P.n > n0 * (1 + 1e-9)) return 'liquid left ' + P.n + ' mol of ' + n0;
      if (S.x === 'pump' && !S.play) { if (Math.abs(num(out['Vapor pressure']) / Q.vaporP(P.T) - 1) > 1e-3) return 'Vapor pressure shows ' + out['Vapor pressure'] + ', curve ' + Q.vaporP(P.T);
        if (Math.abs(num(out['Temperature']) - P.T) > 5.1e-5) return 'Temperature shows ' + out['Temperature'] + ', state ' + P.T; }
      return true; })()` },
    { name: "fountain: column h = (1/g)∫S dT (midpoint check within 3 %), pressure = ρ g h", fn: `(() => { ${pre}
      if (S.x !== 'fountain') return true;
      const F = S.fountain, h = Q.fountainHeight(F.Tf, F.dT / 1000);
      if (!(h > 0) || !isFinite(h)) return 'column ' + h;
      /* S(T) by a second call of the same function: h(T, dT) - h(T, dT/2) is the upper half, so S at the midpoint ≈ G (upper half)/(dT/2) */
      const up = h - Q.fountainHeight(F.Tf, F.dT / 2000), lo = Q.fountainHeight(F.Tf, F.dT / 2000);
      if (!(up >= lo * (1 - 1e-9))) return 'entropy does not rise with T: upper half ' + up + ' < lower half ' + lo;
      if (!S.blind) { if (Math.abs(num(out['Column it holds']) - h * 100) > 0.0051 + 1e-9) return 'Column shows ' + out['Column it holds'] + ', ' + h * 100 + ' cm';
        const rho = Math.abs(num(out['Fountain pressure']) / (G * num(out['Column it holds']) / 100)); if (!(rho > 140 && rho < 150)) return 'pressure / (g h) = ' + rho + ' kg/m³, helium II is 145'; }
      const sf = num(out['Superfluid fraction']); if (!(sf >= 0 && sf <= 1)) return 'superfluid fraction ' + sf;
      return true; })()` },
    { name: "film: 7.5e-5 cm³/s per cm of rim; the level never goes past the bath", fn: `(() => { ${pre}
      const F = S.film; if (!isFinite(F.lev)) return 'level not finite';
      if (F.lev < Math.min(0, F.yb / 1000) - 1e-9) return 'inside level ' + F.lev + ' went below the bath and the beaker floor';
      if (S.x !== 'film') return true;
      const want = 7.5e-5 * (2 * Math.PI * F.rb / 10) * 1e3;
      if (Math.abs(num(out['Transfer rate']) - want) > 0.0051 + 1e-9) return 'transfer rate shows ' + out['Transfer rate'] + ', 7.5e-5 cm³/s per cm gives ' + want;
      const v = want / (Math.PI * F.rb * F.rb) * 1e3;      /* mm³/s over mm² = mm/s; shown in µm/s */
      if (Math.abs(num(out['Level speed']) - v) > 0.0051 + 1e-6 * v) return 'level speed shows ' + out['Level speed'] + ', ' + v + ' µm/s';
      return true; })()` },
    { name: "torsion: period ≥ 20 s and (P/P0)² − 1 = ρn/ρ · I_He/I_disks (within 1 %)", fn: `(() => { ${pre}
      if (S.x !== 'torsion' || S.blind) return true;
      const t = S.torsion, P = Q.period(t.Tt);
      if (Math.abs(num(out['Period']) - P) > 0.00051) return 'Period shows ' + out['Period'] + ', model ' + P;
      if (P < 20 - 1e-9) return 'period ' + P + ' below the bare disks';
      const rn = num(out['Normal fluid fraction (table)']), r = num(out['Helium between disks, I_He/I_disks']), lhs = (P / 20) ** 2 - 1;
      if (Math.abs(lhs - rn * r) > 0.01 * lhs + 2e-5) return '(P/P0)² − 1 = ' + lhs + ' but ρn/ρ × I_He/I = ' + rn * r;
      if (Q.period(1.0) >= Q.period(2.2)) return 'period at 1.0 K is not shorter than above the lambda point';
      return true; })()` },
    { name: "helium 3: melting curve through the cited fixed points; solid 0..0.75; T 1 mK..0.3 K", fn: `(() => { ${pre}
      for (const [T, P] of [[2.444e-3, 3.43407e6], [1.896e-3, 3.43609e6], [0.902e-3, 3.43934e6], [0.31524, 2.93113e6]]) if (Math.abs(Q.meltP(T) / P - 1) > 2e-4) return 'melting pressure at ' + T * 1e3 + ' mK is ' + Q.meltP(T) + ', cited ' + P;
      const H = S.he3; if (!isFinite(H.T) || !isFinite(H.x)) return 'he3 state not finite';
      if (H.T < 1.0e-3 - 1e-12 || H.T > 0.3 + 1e-12) return 'T = ' + H.T;
      if (H.x < -1e-12 || H.x > 0.75 + 1e-12) return 'solid fraction ' + H.x;
      if (S.x === 'he3' && !S.play && Math.abs(num(out['Pressure']) - Q.meltP(H.T) / 1e6) > 5.1e-6) return 'Pressure shows ' + out['Pressure'] + ', curve ' + Q.meltP(H.T) / 1e6;
      return true; })()` },
  ],
  steps: [
    { name: 'every experiment in turn at the fastest speed, run it, then back to pump down with Reset', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), Q = window.__sf;
      for (const p of ['pumpBig', 'fountainHigh', 'filmOut', 'filmIn', 'torsionHigh', 'he3Leak', 'he3', 'pump']) {
        Q.applyPreset(p); await pause(100);
        const sp = [...document.querySelectorAll('#spdSeg button')].pop(); if (sp) sp.click();
        await pause(500); const r = document.getElementById('restart'); if (r && r.offsetParent) { r.click(); await pause(100); }
      }
    })()` },
  ],
};
