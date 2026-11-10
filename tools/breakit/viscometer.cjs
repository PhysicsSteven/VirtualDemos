/* Known values for the break-it test (tools/breakit.cjs), viscometer. Hook: window.__vi (now, P, valve, collectFor, setExp).
   Falling ball (read from the page: the shown liquid, ball, d and tube): the liquids and balls keep their cited densities and
   viscosities; Stokes' law alone is (ρ_b − ρ_f) g d²/(18η); drag only adds to Stokes' drag, so v_t is below it and v_t × wall factor
   × drag correction equals it; N_R = ρ v_t d/η; the ball never moves faster than v_t; the timer A to B is at least 0.20 m / v_t.
   Pipe: continuity v = Q/A; N_R = ρvD/η; in laminar flow ΔP is exactly Poiseuille's; ΔP is f (L/D) ρv²/2; the regime follows N_R
   (laminar to 2000, turbulent from 3000); the cylinder volume is Q times the stopwatch time for the flow that filled it. */
const pre = `const V = window.__vi; if (!V) return true; const G = 9.81;
  const rd = (label) => { for (const dt of document.querySelectorAll('#out dt')) if (dt.textContent === label) return dt.nextElementSibling.textContent.replace(/\\u2212/g, '-'); return null; };
  const num = (t) => (t == null ? NaN : parseFloat(t));
  const near = (got, want, tol) => Math.abs(got - want) <= tol * Math.max(Math.abs(want), 1e-300);
  const pipe = !document.getElementById('collect').hidden;
  const dragCorr = (Re) => { if (Re <= 0.01) return 1 + 3 * Re / 16; const w = Math.log10(Math.min(Re, 1.2e4));
    if (Re <= 20) return 1 + 0.1315 * Re ** (0.82 - 0.05 * w); if (Re <= 260) return 1 + 0.1935 * Re ** 0.6305;
    const lcd = Re <= 1500 ? 1.6435 - 1.1242 * w + 0.1558 * w * w : -2.4571 + 2.5558 * w - 0.9295 * w * w + 0.1049 * w ** 3; return 10 ** lcd * Re / 24; };
`;
module.exports = {
  checks: [
    { name: "ball: cited liquid and ball densities and viscosities", fn: `(() => { ${pre}
      if (pipe) return true;
      const fl = document.querySelector('#fluidSeg [aria-pressed=true]'); if (!fl) return true;
      const want = { glycerol: [1261, 1.41], castor: [961, 0.986], oil: [875, 0.29], water: [998, 0.001002] }[fl.dataset.f];
      const rho = num(rd('Liquid density')); if (rho !== want[0]) return fl.dataset.f + ' density shows ' + rd('Liquid density') + ', cited ' + want[0];
      const bd = { steel: 7800, glass: 2500, nylon: 1140 }[document.querySelector('#ballSeg [aria-pressed=true]').dataset.b];
      if (num(rd('Ball density')) !== bd) return 'ball density shows ' + rd('Ball density') + ', should be ' + bd;
      const e = rd('Viscosity η'); if (e) { const eta = /mPa/.test(e) ? num(e) / 1000 : num(e); if (Math.abs(eta - want[1]) > (/mPa/.test(e) ? 5.1e-6 : 5.1e-4)) return 'viscosity shows ' + e + ', cited ' + want[1] + ' Pa·s'; }
      return true; })()` },
    { name: "ball: Stokes' law alone, v_t below it, v_t × wall factor × drag correction = Stokes, N_R = ρ v_t d/η", fn: `(() => { ${pre}
      if (pipe || rd('Terminal speed v_t') == null) return true;
      const d = parseFloat(document.getElementById('ballNow').textContent.match(/d = ([\\d.]+) mm/)[1]) / 1000;
      const rhoF = num(rd('Liquid density')), rhoB = num(rd('Ball density')), e = rd('Viscosity η'), eta = /mPa/.test(e) ? num(e) / 1000 : num(e);
      const vs = num(rd("Stokes' law alone")) / 1000, vt = num(rd('Terminal speed v_t')) / 1000, Re = num(rd('Reynolds number N_R at v_t')), K = num(rd('Wall factor on the drag at v_t'));
      const want = Math.abs(rhoB - rhoF) * G * d * d / (18 * eta);
      if (!near(vs, want, 6e-3)) return "Stokes' law alone shows " + vs * 1000 + ' mm/s, (ρb − ρf) g d²/18η = ' + want * 1000;
      if (vt > vs * 1.006) return 'terminal speed ' + vt * 1000 + ' mm/s is above Stokes alone ' + vs * 1000 + ': drag only adds';
      if (!near(Re, rhoF * vt * d / eta, 8e-3) && Math.abs(Re - rhoF * vt * d / eta) > 6e-4) return 'N_R shows ' + Re + ', ρ v_t d/η = ' + rhoF * vt * d / eta;
      if (!(K >= 1)) return 'wall factor ' + K + ' is below 1';
      if (!near(vt * K * dragCorr(Re), vs, 1.5e-2)) return 'v_t × K × C = ' + vt * K * dragCorr(Re) + ' but Stokes alone is ' + vs;
      return true; })()` },
    { name: "ball: the ball never passes its terminal speed; the timed fall takes at least 0.20 m / v_t", fn: `(() => { ${pre}
      if (pipe || rd('Terminal speed v_t') == null) return true;
      const vt = num(rd('Terminal speed v_t')), sp = num(rd('Speed now')), tm = rd('Timer A to B');
      if (document.getElementById('go').textContent === 'Pause') return true;   /* readouts refresh with the frames while it runs */
      if (sp > vt * 1.012 + 0.0051) return 'speed now ' + sp + ' mm/s is above v_t = ' + vt;
      if (tm !== '—') { const t = num(tm), tmin = 0.2 / (vt / 1000); if (t < tmin - 0.0051 - 1e-3 * tmin) return 'timer A to B ' + tm + ' but 0.20 m at v_t takes ' + tmin + ' s'; }
      return true; })()` },
    { name: "pipe: continuity, N_R, regime, Poiseuille in laminar flow, Darcy–Weisbach, cited liquids", fn: `(() => { ${pre}
      if (!pipe) return true;
      const q = V.now(), P = V.P, A = Math.PI * P.D * P.D / 4, QMAX = { 0.006: 60e-6, 0.01: 100e-6 }[P.D];
      if (!near(q.Q, QMAX * P.valve / 100, 1e-12)) return 'Q = ' + q.Q + ' at valve ' + P.valve + '%';
      if (!near(q.v, q.Q / A, 1e-12)) return 'v = ' + q.v + ' but Q/A = ' + q.Q / A;
      if (q.Q > 0) {
        if (!near(q.Re, q.liq.rho * q.v * P.D / q.liq.eta, 1e-12)) return 'Re = ' + q.Re;
        if ((q.Re <= 2000) !== (q.reg === 'laminar') || (q.Re >= 3000) !== (q.reg === 'turbulent')) return 'Re ' + q.Re + ' called ' + q.reg;
        const pois = 8 * q.liq.eta * 0.5 * q.Q / (Math.PI * (P.D / 2) ** 4);
        if (q.Re <= 2000 && !near(q.dP, pois, 1e-9)) return 'laminar ΔP ' + q.dP + ' is not Poiseuille ' + pois;
        if (q.dP < pois * (1 - 1e-9)) return 'ΔP ' + q.dP + ' is below Poiseuille ' + pois + ' at Re ' + q.Re;
        if (!near(q.dP, q.f * 0.5 / P.D * q.liq.rho * q.v * q.v / 2, 1e-9)) return 'ΔP is not f (L/D) ρ v²/2';
      } else if (q.dP !== 0) return 'no flow but ΔP = ' + q.dP;
      if (P.liq !== 'mystery') { const w = { water20: [998.2, 1.002], water40: [992.2, 0.653] }[P.liq]; if (q.liq.rho !== w[0] || Math.abs(q.liq.eta * 1000 - w[1]) > 1e-9) return P.liq + ' has rho ' + q.liq.rho + ', eta ' + q.liq.eta; }
      if (S_blind()) return true;
      function S_blind() { return rd('Flow rate Q') == null; }
      if (Math.abs(num(rd('Flow rate Q')) - q.Q * 1e6) > 0.0051) return 'Q readout ' + rd('Flow rate Q');
      if (Math.abs(num(rd('Mean speed v')) - q.v * 100) > 0.0051) return 'v readout ' + rd('Mean speed v');
      if (q.Q > 0 && Math.abs(num(rd('Reynolds number N_R = ρvD/η')) - q.Re) > 0.5001) return 'N_R readout ' + rd('Reynolds number N_R = ρvD/η') + ', Re = ' + q.Re;
      if (Math.abs(num(rd('Pressure drop ΔP')) - q.dP) > 0.0501) return 'ΔP readout ' + rd('Pressure drop ΔP') + ', ΔP = ' + q.dP;
      return true; })()` },
    { name: "pipe: the cylinder volume is the flow that filled it times the stopwatch time; every captured row agrees with its valve", fn: `(() => { ${pre}
      if (!pipe) return true;
      const P = V.P, QMAX = (D) => ({ 0.006: 60e-6, 0.01: 100e-6 })[D];
      if (!P.coll.on && P.coll.t > 0 && P.coll.q != null && Math.abs(P.coll.V - P.coll.q * P.coll.t) > 1e-9 * Math.max(1e-6, P.coll.V) + 1e-12) return 'the cylinder holds ' + Math.round(P.coll.V * 1e6) + ' mL after ' + P.coll.t.toFixed(2) + ' s: that is not the flow ' + (P.coll.q * 1e6).toFixed(2) + ' mL/s that filled it';
      for (const r of P.rows) { const Q = QMAX(+r.D / 1000) * (+r.valve) / 100 * 1e6, V = +r.V, t = +r.t; if (!(Q > 0) || !(t > 0)) continue;
        if (Math.abs(V / t - Q) > Q * (0.5 / V + 0.005 / t) + 1e-9) return 'a captured row has ' + r.V + ' mL in ' + r.t + ' s = ' + (V / t).toFixed(2) + ' mL/s, but valve ' + r.valve + '% in the ' + r.D + ' mm pipe gives ' + Q.toFixed(2) + ' mL/s'; }
      return true; })()` },
  ],
  steps: [
    { name: 'fall in every liquid with every ball, drop and pause, then another liquid mid fall', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), c = (sel) => { const b = document.querySelector(sel); if (b) b.click(); };
      for (const f of ['glycerol', 'castor', 'oil', 'water']) for (const b of ['steel', 'glass', 'nylon']) {
        c('#fluidSeg [data-f=' + f + ']'); c('#ballSeg [data-b=' + b + ']'); c('#go'); await pause(120); c('#go'); await pause(60);
      }
      c('#fluidSeg [data-f=glycerol]'); c('#ballSeg [data-b=steel]'); c('#tubeSeg [data-t="0.04"]'); c('#go'); await pause(200); c('#fluidSeg [data-f=oil]'); await pause(200); c('#back'); await pause(100);
      c('#tubeSeg [data-t="0.1"]'); c('#ballBox [data-d="10"]'); c('#go'); await pause(300);
    })()` },
    { name: 'pipe: collect at 20 %, open the valve to 80 % while collecting, stop (the cylinder must still be a true reading)', fn: `(async () => {
      const V = window.__vi, pause = (ms) => new Promise((r) => setTimeout(r, ms)), c = (sel) => { const b = document.querySelector(sel); if (b) b.click(); };
      V.setExp('pipe'); await pause(200); V.valve(20); c('#empty'); c('#collect'); await pause(500); V.valve(80); await pause(200); c('#collect'); await pause(200); c('#capture'); await pause(100);
    })()` },
    { name: 'pipe: every valve setting, both pipes, both liquids, collect for a while, capture', fn: `(async () => {
      const V = window.__vi, pause = (ms) => new Promise((r) => setTimeout(r, ms)), c = (sel) => { const b = document.querySelector(sel); if (b) b.click(); };
      for (const l of ['water20', 'water40']) for (const d of ['0.006', '0.01']) { c('#pliqSeg [data-l=' + l + ']'); c('#pipeSeg [data-d="' + d + '"]'); for (const u of [0, 1, 20, 33, 59, 60, 61, 100]) { V.valve(u); await pause(40); } c('#empty'); V.collectFor(1.5); c('#capture'); }
      V.valve(100); c('#empty'); c('#collect'); await pause(300); c('#collect'); V.valve(0); await pause(200);
    })()` },
    { name: 'back to the falling ball', fn: `(async () => { window.__vi.setExp('ball'); await new Promise((r) => setTimeout(r, 300)); })()` },
  ],
};
