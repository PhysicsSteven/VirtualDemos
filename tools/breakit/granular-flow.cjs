/* Known values for the break-it test (tools/breakit.cjs), granular-flow. Hook: window.__gf (S, applyPreset, build, ...).
   Drum: the Froude number readout is ω²R/g from the turning rate and the critical rate readout is the rate where it equals 1 (the
   readout of the rate in rpm, rounded, put back in gives Fr within the rounding); shaker: A = Γ g/(2πf)²; shear: shear rate U/h from
   the shown layer thickness; Frame: a settling speed never exceeds the Stokes speed (ρp − ρf) g d²/(18 μ) and is positive.
   Every free bead has a finite place and speed, the Beads readout equals the beads still in the run, and no speed is wild (< 60 m/s). */
const pre = `const G = window.__gf; if (!G || !G.S.set) return true;
  const S = G.S, s = S.set.s, o = S.set.o, out = {}; for (const d of document.querySelectorAll('#out > div')) out[d.querySelector('dt').textContent] = d.querySelector('dd').textContent;
  const num = (t) => parseFloat(String(t).replace(/\\u2212/g, '-')), g = 9.81;
`;
module.exports = {
  checks: [
    { name: "free beads stay finite and sane; the Beads readout equals the beads left in the run", fn: `(() => { ${pre}
      let free = 0;
      for (let i = 0; i < s.n; i++) { if (!isFinite(s.x[i] + s.y[i] + s.vx[i] + s.vy[i] + s.w[i])) return 'bead ' + i + ' has a non finite state'; if (s.wall[i] === 0) { free++; if (Math.hypot(s.vx[i], s.vy[i]) > 60) return 'bead ' + i + ' at ' + Math.hypot(s.vx[i], s.vy[i]).toFixed(1) + ' m/s'; } }
      if (!isFinite(s.t) || s.t < 0) return 't = ' + s.t;
      const want = s.placed.reduce((a, b) => a + b, 0) - s.lost;
      if (free !== want) return 'free beads ' + free + ', placed minus lost ' + want;
      if (!S.run && num(out['Beads']) !== want) return 'Beads readout ' + out['Beads'] + ', should be ' + want;
      return true; })()` },
    { name: "drum: Froude number = ω²R/g, critical rate √(g/R) makes it 1", fn: `(() => { ${pre}
      if (S.mode !== 'drum') return true;
      const w = 2 * Math.PI * S.rpm / 60, Fr = w * w * o.R / g;
      if (Math.abs(num(out['Froude number ω²R/g']) - Fr) > 0.0006 + 1e-9) return 'Froude shows ' + out['Froude number ω²R/g'] + ', ω²R/g = ' + Fr;
      if (S.blind) return true;
      const rc = 60 / (2 * Math.PI) * Math.sqrt(g / o.R), shown = num(out['Critical rate √(g/R)']);
      if (Math.abs(shown - rc) > 0.5001) return 'critical rate shows ' + out['Critical rate √(g/R)'] + ', √(g/R) = ' + rc;
      const wc = 2 * Math.PI * rc / 60; if (Math.abs(wc * wc * o.R / g - 1) > 1e-9) return 'Fr at the critical rate is not 1';
      return true; })()` },
    { name: "shaker: amplitude A = Γ g / (2πf)²", fn: `(() => { ${pre}
      if (S.mode !== 'shaker') return true;
      const A = S.Gamma * g / Math.pow(2 * Math.PI * S.f, 2) * 1000;
      return Math.abs(num(out['Amplitude A']) - A) <= 0.0051 ? true : 'A shows ' + out['Amplitude A'] + ', physics ' + A; })()` },
    { name: "shear: shear rate = U/h from the shown thickness; the lid stays above the beads' floor", fn: `(() => { ${pre}
      if (S.mode !== 'shear' || S.run) return true;
      const h = num(out['Layer thickness h']) / 1000, rate = num(out['Shear rate U/h']);
      if (!(h > 0)) return 'layer thickness ' + out['Layer thickness h'];
      if (Math.abs(rate - S.U / h) > 0.051 + 0.002 * S.U / h) return 'shear rate shows ' + rate + ', U/h from the shown h = ' + S.U / h;
      return true; })()` },
    { name: "frame: settling speeds are positive and below the Stokes speed (ρp − ρf) g d² / 18 μ", fn: `(() => { ${pre}
      if (S.mode !== 'frame' || S.blind) return true;
      const liq = { water: [998.2, 0.001002], g50: [1126.3, 0.006], g75: [1195.5, 0.0355], g90: [1234.7, 0.219], g100: [1261.3, 1.412] }[S.liquid];
      for (const [dt, dd] of Object.entries(out)) { if (!/^Settling speed/.test(dt)) continue;
        const v = num(dd.replace(/^rises at /, '')); if (!(v >= 0)) return dt + ' shows ' + dd;
        if (/^rises/.test(dd)) continue;
        const k = S.kinds.find((q) => dt.indexOf(' ' + q.d.toFixed(1) + ' mm') > 0); if (!k) continue;
        const rho = { glass: 2500, sand: 2650, steel: 7850, acrylic: 1180 }[k.mat]; if (!rho) continue;
        const vs = (rho - liq[0]) * g * Math.pow(k.d / 1000, 2) / (18 * liq[1]) * 1000;
        if (v > vs * 1.0001 + 0.051) return dt + ' = ' + v + ' mm/s exceeds Stokes ' + vs.toFixed(2); }
      return true; })()` },
  ],
  steps: [
    { name: 'every preset in turn, run each a moment, Reset, with the rate at its extremes', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      for (const b of document.querySelectorAll('#presets button')) { b.click(); await pause(150); const go = document.getElementById('go'); if (go) go.click(); await pause(350); document.getElementById('reset').click(); await pause(100); }
      window.__gf.applyPreset('drum2'); await pause(200);
    })()` },
  ],
};
