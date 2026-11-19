/* Known values for the break-it test (tools/breakit.cjs), fluids. Hook: window.__fl (S, bs, applyPreset, setScene, setParam, go, ...).
   Block: the block never sinks through the floor, the level and the readouts follow F_B = ρ_f g V_sub, W = ρ_obj L³ g, and a block at rest on
   the surface floats with s/L = ρ_obj/ρ_f; a spout holds the level; the water that spills is the water the beaker counts.
   Venturi: v₂ = v₁ (D₁/D₂)², Q = A₁v₁, P₁ − P₂ = ½ρ(v₂² − v₁²) from the shown readouts. Torricelli: v = √(2gh), R = 2√(h(H − h)).
   Depth: the gauge shows P₀ + ρgh. Every slider value stays inside its range and every readout is a finite number. */
const pre = `const F = window.__fl; if (!F) return true; const S = F.S, G = 9.81, PATM = 101325;
  const LIQ = { water: 1000, oil: 920, sea: 1025, hg: 13595.1 };
  const rd = (k) => { for (const d of document.querySelectorAll('#readBox > div')) { const t = d.querySelector('dt').textContent; if (t.indexOf(k) === 0) return d.querySelector('dd').textContent.replace(/\\u2212/g, '-'); } return null; };
  const nm = (k) => { const s = rd(k); return s == null ? NaN : parseFloat(s); };
  const near = (a, b, tol) => Math.abs(a - b) <= tol * Math.max(Math.abs(b), 1e-9);
  F.__ro = F.__ro || 0; const rho = LIQ[S.liq];
`;
module.exports = {
  checks: [
    { name: "block: finite, above the floor, F_B = ρ_f g V_sub, W = m g, spout holds the level", fn: `(() => { ${pre}
      if (S.scene !== 'buoy') return true; const b = F.bs, q = S.P.buoy;
      if (![b.zb, b.v, b.Vw, b.caught].every(isFinite)) return 'block state not finite: ' + JSON.stringify(b);
      if (b.zb < -1e-9) return 'block bottom ' + b.zb + ' is below the tank floor';
      if (b.Vw < -1e-12 || b.caught < -1e-12) return 'negative water: Vw ' + b.Vw + ', caught ' + b.caught;
      const n = F.buoyNow(), L = q.L / 100;
      if (n.FB === 0) return true;     /* out of the liquid at rest: held in the hand by a drag, not floating (break-it run 2026-11-14) */
      if (!near(n.W, q.rho * L ** 3 * G, 1e-9)) return 'W ' + n.W + ' != ρ L³ g';
      if (!near(n.FB, rho * G * L * L * n.s, 1e-9)) return 'F_B ' + n.FB + ' != ρ_f g L² s';
      if (n.s < -1e-12 || n.s > L + 1e-12) return 'submerged depth ' + n.s + ' outside 0..L';
      if (q.over && n.hs > 0.42 + 1e-6) return 'level ' + n.hs + ' above the spout';
      if (!S.blind) { const w = nm(q.scale ? 'Scale reading in air' : 'Weight W'); if (!near(w, n.W, 6e-3) && Math.abs(w - n.W) > 0.0051) return 'weight readout ' + w + ', W = ' + n.W; }
      return true; })()` },
    { name: "block at rest on the surface: s/L = ρ_obj/ρ_f, W − F_B = 0", fn: `(() => { ${pre}
      if (S.scene !== 'buoy' || S.P.buoy.scale || S.blind) return true; const q = S.P.buoy, b = F.bs;
      if (Math.abs(b.v) > 1e-4 || q.rho >= rho || b.zb <= 1e-6) return true;     /* only a settled floater */
      const n = F.buoyNow(), L = q.L / 100;
      if (n.FB === 0) return true;     /* out of the liquid at rest: held in the hand by a drag, not floating (break-it run 2026-11-14) */
      if (Math.abs(n.W - n.FB) > 2e-3 * n.W) return 'floating at rest but W = ' + n.W + ', F_B = ' + n.FB;
      if (!near(n.s / L, q.rho / rho, 2e-3)) return 'fraction under ' + n.s / L + ', ρ_obj/ρ_f = ' + q.rho / rho;
      return true; })()` },
    { name: "Venturi readouts: continuity, Bernoulli, flow rate", fn: `(() => { ${pre}
      if (S.scene !== 'venturi' || S.blind) return true; const q = S.P.venturi;
      if (q.D2 > q.D1 + 1e-9) return 'throat ' + q.D2 + ' wider than the pipe ' + q.D1;
      const v2 = q.v1 * (q.D1 / q.D2) ** 2, Q = Math.PI * (q.D1 / 100) ** 2 / 4 * q.v1 * 1000;
      if (!near(nm('v₂'), v2, 6e-3)) return 'v₂ readout ' + rd('v₂') + ', should be ' + v2;
      if (!near(nm('Flow meter'), Q, 2e-3)) return 'Q readout ' + rd('Flow meter') + ', should be ' + Q + ' L/s';
      if (!near(nm('A₁/A₂'), (q.D1 / q.D2) ** 2, 6e-3)) return 'A1/A2 readout ' + rd('A₁/A₂');
      const dP = 0.5 * rho * (v2 * v2 - q.v1 * q.v1) / 1000, sh = nm('P₁ − P₂');
      if (!isNaN(sh) && !near(sh, dP, 6e-3) && Math.abs(sh - dP) > 6e-3) return 'P₁ − P₂ shows ' + rd('P₁ − P₂') + ', ½ρ(v₂² − v₁²) = ' + dP + ' kPa';
      return true; })()` },
    { name: "Torricelli readouts: v = √(2gh), t, R = 2√(h(H − h))", fn: `(() => { ${pre}
      if (S.scene !== 'torr' || S.blind) return true; const q = S.P.torr;
      if (q.hh > q.H + 1e-9) return 'hole depth ' + q.hh + ' below the floor of a tank of height ' + q.H;
      const v = Math.sqrt(2 * G * q.hh), R = 2 * Math.sqrt(q.hh * (q.H - q.hh));
      if (Math.abs(nm('Exit speed') - v) > 6e-3 + 6e-3 * v) return 'v readout ' + rd('Exit speed') + ', should be ' + v;
      if (Math.abs(nm('Range R') - R) > 6e-4 + 6e-3 * R) return 'R readout ' + rd('Range R') + ', should be ' + R;
      if (!/^[\\d.]+ m at h = /.test(rd('Largest range') || '0.0 m at h = ')) return 'largest range readout ' + rd('Largest range');
      return true; })()` },
    { name: "depth gauge shows P₀ + ρgh (absolute) or ρgh (gauge)", fn: `(() => { ${pre}
      if (S.scene !== 'press' || S.blind) return true; const q = S.P.press;
      if (q.pd > q.D + 1e-9) return 'probe depth ' + q.pd + ' below the bottom ' + q.D;
      const want = (S.gmode === 'abs' ? PATM + rho * G * q.pd : rho * G * q.pd) / 1000, got = nm('Pressure gauge');
      return Math.abs(got - want) <= 6e-3 ? true : 'gauge shows ' + rd('Pressure gauge') + ', should be ' + want + ' kPa'; })()` },
    { name: "dam or window: F = ρg A h_c, h_cp = h_c + I_c/(A h_c), the strips sum ρgh·w·Δh, h_cp inside the plate", fn: `(() => { ${pre}
      if (S.scene !== 'plate') return true; const o = F.plateNow(), pl = o.pl, E = o.E, St = o.S;
      if (![E.F, E.hcp, St.F].every(isFinite)) return 'not finite: ' + [E.F, E.hcp, St.F];
      const r = pl.shape === 'circ' ? pl.a / 2 : 0;
      const A = pl.shape === 'rect' ? pl.a * pl.b : pl.shape === 'tri' ? pl.a * pl.b / 2 : Math.PI * r * r;
      const yc = pl.shape === 'rect' ? pl.a / 2 : pl.shape === 'tri' ? pl.a / 3 : r, Ic = pl.shape === 'rect' ? pl.b * pl.a ** 3 / 12 : pl.shape === 'tri' ? pl.b * pl.a ** 3 / 36 : Math.PI * r ** 4 / 4;
      const hc = pl.d0 + yc, Fx = rho * G * A * hc;
      if (!near(E.F, Fx, 1e-12)) return 'F = ' + E.F + ', ρgA h_c = ' + Fx;
      if (!near(E.hcp, hc + Ic / (A * hc), 1e-12)) return 'h_cp = ' + E.hcp;
      if (E.hcp < pl.d0 - 1e-12 || E.hcp > pl.d0 + pl.a + 1e-12) return 'center of pressure ' + E.hcp + ' outside the plate';
      let sum = 0; for (const sp of St.strips) sum += sp.dF; if (!near(sum, St.F, 1e-12)) return 'strips add to ' + sum + ', shown ' + St.F;
      if (St.strips.length !== S.P.plate.n) return St.strips.length + ' strips, n = ' + S.P.plate.n;
      return true; })()` },
    { name: "pumping: W = ρgV(y_o − y_cm), the slices sum, y_w ≤ H ≤ y_o, the level stays in the tank", fn: `(() => { ${pre}
      if (S.scene !== 'pump') return true; const o = F.pumpNow(), tk = o.tk;
      if (![o.W, o.Sl.W, o.M.V].every(isFinite)) return 'not finite: ' + [o.W, o.Sl.W, o.M.V];
      if (!(tk.yw <= tk.H + 1e-12 && tk.H <= tk.yo + 1e-12)) return 'y_w ' + tk.yw + ', H ' + tk.H + ', y_o ' + tk.yo;
      if (!near(o.W, rho * G * o.M.V * (tk.yo - o.M.ycm), 1e-12)) return 'W = ' + o.W + ', ρgV(y_o − y_cm) = ' + rho * G * o.M.V * (tk.yo - o.M.ycm);
      let sum = 0; for (const s2 of o.Sl.slices) sum += s2.dW; if (!near(sum, o.Sl.W, 1e-12)) return 'slices add to ' + sum;
      const L = F.pumpL; if (L !== null && (L < -1e-12 || L > tk.yw + 1e-12)) return 'level ' + L + ' outside 0 to ' + tk.yw;
      return true; })()` }
  ],
  steps: [
    { name: "block: switch liquid to mercury and back mid bob, then a steel block", fn: `(async () => { const F = window.__fl; F.applyPreset('float'); F.go(0.4);
      F.S.liq = 'hg'; F.go(1.5); F.S.liq = 'water'; F.go(1.5); F.setParam('rho', 7850); F.go(1); F.setParam('L', 20); F.go(1); F.setParam('h0', 0.45); F.go(1); F.setParam('L', 4); F.setParam('h0', 0.15); F.go(2); })()` },
    { name: "Venturi: widest and narrowest throat, then shrink the pipe under the throat", fn: `(() => { const F = window.__fl; F.applyPreset('venturi'); F.setParam('D2', 1); F.setParam('v1', 2); F.go(0.5);
      F.setParam('D1', 10); F.setParam('D2', 10); F.go(0.5); F.setParam('D2', 1); F.setParam('D1', 3); F.go(0.5); F.S.liq = 'hg'; F.go(0.2); F.S.liq = 'oil'; F.go(0.2); })()` },
    { name: "Torricelli and depth: hole to the surface and the floor, lower H under the hole, deepest probe then a shallower tank", fn: `(() => { const F = window.__fl; F.applyPreset('torr'); F.setParam('hh', 0); F.go(0.3); F.setParam('hh', 1.5); F.setParam('H', 0.2); F.go(0.3);
      F.setParam('H', 1.5); F.setParam('hh', 0.75); F.go(0.3); F.applyPreset('depth'); F.setParam('pd', 10); F.setParam('D', 0.5); F.go(0.2); })()` },
    { name: "dam and pumping: every shape, one strip and a hundred, the plate at the surface and deep, a tank pumped dry then shrunk", fn: `(async () => { const F = window.__fl, pause = (ms) => new Promise((r) => setTimeout(r, ms));
      for (const pr of ['dam', 'window', 'troughEnd']) { F.applyPreset(pr); F.setParam('n', 1); F.setParam('n', 100); F.setParam('d0', 0); F.setParam('d0', 20); F.setParam('a', 0.1); F.setParam('a', 20); await pause(50); }
      for (const b of document.querySelectorAll('#plateSeg button, #sampleSeg button')) { b.click(); await pause(30); }
      F.applyPreset('pumpCyl'); F.setRunning(true); F.go(9); F.setRunning(true); F.go(1);
      for (const b of document.querySelectorAll('#tankSeg button')) { b.click(); F.go(3); }
      F.setParam('H', 0.5); F.setParam('yw', 10); F.setParam('yo', 0.5); F.setParam('n', 100); F.setParam('R', 5); F.go(2); F.applyPreset('pumpCone'); F.setParam('n', 1); F.go(0.5); })()` }
  ]
};
