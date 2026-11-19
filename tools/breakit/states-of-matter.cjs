/* Known values for the break-it test (tools/breakit.cjs), states-of-matter. Hook: window.__sm (S, mdStep, applyPreset, setView, fast).
   Atoms: the enthalpy H = KE + U + P A h + 1/2 M vh^2 changes only by the heat added (dH = dQ at constant pressure), checked from
   the first look at each sample and each piston pressure; every atom stays between the floor and the piston and inside the
   periodic box; the T and Q readouts equal the state. Beaker: the balance plus the vapor that left equals the sample mass, the
   temperature stays between the cited melting and boiling points once it reaches them, the heat in (P t) equals the heat the
   stages account for, the covered beaker keeps its whole mass, and the ice preset starts melting at m c dT / P = 16.72 s. */
const pre = `const M = window.__sm; if (!M) return true; const S = M.S, rd = (label) => { for (const d of document.querySelectorAll('#out > div')) { const t = d.querySelector('dt'); if (t && t.textContent === label) return d.querySelector('dd').textContent.replace(/\\u2212/g, '-'); } return null; };
`;
module.exports = {
  checks: [
    { name: "atoms: dH = dQ (enthalpy changes only by the heat added) and every atom is inside the box", fn: `(() => { ${pre}
      if (S.view !== 'atoms' || !S.md) return true;
      const md = S.md, N = md.N; let ke = 0;
      for (let i = 0; i < N; i++) {
        if (!isFinite(md.x[i] + md.y[i] + md.z[i] + md.vx[i] + md.vy[i] + md.vz[i])) return 'atom ' + i + ' is not finite';
        if (md.z[i] < -1e-9 || md.z[i] > md.h + 1e-9 || md.x[i] < 0 || md.x[i] > md.Lx || md.y[i] < 0 || md.y[i] > md.Ly) return 'atom ' + i + ' left the box: ' + [md.x[i], md.y[i], md.z[i]].join(', ') + ' h = ' + md.h;
        ke += md.vx[i] ** 2 + md.vy[i] ** 2 + md.vz[i] ** 2;
      }
      if (!(md.h > 0 && md.h <= md.Hmax + 1e-9)) return 'piston height ' + md.h;
      const H = ke / 2 + md.pe + md.P * md.Lx * md.Ly * md.h + 0.5 * md.M * md.vh * md.vh, W = (window.__smH = window.__smH || { md: null });
      if (W.md !== md || W.P !== md.P) { Object.assign(W, { md, P: md.P, H0: H, Q0: md.Q }); return true; }
      const err = Math.abs((H - W.H0) - (md.Q - W.Q0));
      if (err > 2e-3 * N) return 'H - H0 = ' + (H - W.H0).toFixed(3) + ' eps but the heat added is ' + (md.Q - W.Q0).toFixed(3) + ' eps (' + N + ' atoms)';
      return true; })()` },
    { name: "atoms: readouts show T and Q of the state", fn: `(() => { ${pre}
      if (S.view !== 'atoms' || !S.md) return true;
      const md = S.md, T = parseFloat(rd('Temperature T')), Q = parseFloat(rd('Heat added Q'));
      if (Math.abs(T - S.avg.T * 120) > 0.051) return 'T shows ' + rd('Temperature T') + ', state ' + S.avg.T * 120;
      const KJMOL = 120 * 1.380649e-23 * 6.02214076e23 / 1000;
      if (Math.abs(Q - md.Q / md.N * KJMOL) > 0.0051) return 'Q shows ' + rd('Heat added Q') + ', state ' + md.Q / md.N * KJMOL;
      if (!(S.avg.T > 0)) return 'temperature ' + S.avg.T;
      return true; })()` },
    { name: "beaker: balance + vapor = mass; T inside the cited limits; the stages account for the heat Pt (water)", fn: `(() => { ${pre}
      if (S.view !== 'beaker') return true;
      const b = S.bk, m = b.m / 1000, T = parseFloat(rd('Temperature T')), bal = parseFloat(rd('Balance')), Q = b.W * b.t;
      if (!(bal >= -0.05 && bal <= b.m + 0.05)) return 'balance ' + bal + ' g for a ' + b.m + ' g sample';
      const Tm = b.sub === 'water' ? 0 : -114, Tb = b.sub === 'water' ? 100 : 78.3;
      if (T > Tb + 0.051 || T < Math.min(b.T0, Tm) - 0.051) return 'T = ' + T + ' outside ' + Math.min(b.T0, Tm) + '..' + Tb;
      if (b.t > 0 && bal < b.m - 0.05 && Math.abs(T - Tb) > 0.051) return 'mass is leaving (' + bal + ' g) below the boiling point, T = ' + T;
      if (b.sub !== 'water') return true;
      const cS = 2090, cL = 4186, Lf = 334e3, Lv = 2256e3, mV = b.m - bal; let want;
      if (T < 0 && b.T0 < 0) want = m * cS * (T - b.T0);
      else if (T === 0 || Math.abs(T) < 0.051) want = (bal === b.m && b.T0 < 0 && Q <= m * cS * -b.T0 + 1) ? m * cS * -b.T0 : m * cS * -b.T0 + (b.m - bal > 0.05 ? 0 : 0);
      else want = null;
      if (T > 0.051 && T < 99.949) want = m * cS * -b.T0 + m * Lf + m * cL * T;
      if (want != null && Math.abs(Q - want) > 0.004 * Q + 0.06 * m * cL + 1) return 'heat in ' + Q + ' J but T = ' + T + ' accounts for ' + want;
      if (Math.abs(T - 100) <= 0.051 && mV > 0.05) { const w2 = m * cS * -b.T0 + m * Lf + m * cL * 100 + (mV / 1000) * Lv; if (Math.abs(Q - w2) > 0.004 * Q + 0.5 * m * cL + 1) return 'boiling: heat in ' + Q + ' J, mass boiled ' + mV + ' g accounts for ' + w2; }
      return true; })()` },
    { name: "beaker: covered beaker keeps its whole mass; the ice preset starts melting at 16.72 s", fn: `(() => { ${pre}
      if (S.view !== 'beaker') return true;
      const b = S.bk, cv = rd('Covered beaker');
      if (S.cover2 && cv && Math.abs(parseFloat(cv) - b.m) > 0.051) return 'covered beaker shows ' + cv + ' for ' + b.m + ' g';
      if (S.preset === 'ice' && b.sub === 'water' && b.m === 200 && b.W === 500 && b.T0 === -20) {
        const t0 = 0.2 * 2090 * 20 / 500; if (Math.abs(t0 - 16.72) > 1e-9) return 'melting starts at ' + t0;
        if (b.t > t0 + 1 && !/melting|warming|boiling/.test(rd('In the beaker') || '')) return 'odd state ' + rd('In the beaker');
        if (b.t > t0 + 1 && b.t < 400 && Math.abs(parseFloat(rd('Temperature T'))) > 0.051 && /melting/.test(rd('In the beaker'))) return 'melting but T = ' + rd('Temperature T');
      }
      return true; })()` },
    { name: "phase diagram: the dot stays on the axes, its phase and transitions follow the reference equations; water boils at 373.12 K at 1 atm, dry ice sublimes at 194.69 K", fn: `(() => { ${pre}
      if (S.view !== 'phase') return true;
      const ph = M.ph, P = M.PHASE[ph.sub];
      if (!(ph.T >= P.Tmin - 1e-9 && ph.T <= P.Tmax + 1e-9 && ph.P >= P.Pmin * (1 - 1e-9) && ph.P <= P.Pmax * (1 + 1e-9))) return 'dot off the diagram: ' + ph.T + ' K, ' + ph.P + ' Pa';
      const T = parseFloat(rd('Temperature T')); if (Math.abs(T - ph.T) > 0.0051) return 'T shows ' + rd('Temperature T') + ', state ' + ph.T;
      const tr = M.transitions(ph.sub, ph.P);
      for (const k of ['melt', 'boil', 'subl']) if (tr[k] != null) { const fn = { melt: P.melt, boil: P.sat, subl: P.sub }[k]; if (Math.abs(fn(tr[k]) / ph.P - 1) > 1e-6) return k + ' at ' + tr[k] + ' K is off its boundary'; }
      if (!ph.at && !/supercritical|solid|liquid|gas/.test(rd('Phase') || '')) return 'phase reads ' + rd('Phase');
      if (!ph.at) { const want = { solid: 'solid', liquid: 'liquid', gas: 'gas (vapor)', super: 'supercritical fluid' }[M.phaseAt(ph.sub, ph.T, ph.P)]; if (rd('Phase') !== want) return 'phase reads ' + rd('Phase') + ' but the diagram gives ' + want; }
      if (ph.sub === 'water' && Math.abs(M.transitions('water', 101325).boil - 373.124) > 0.002) return 'water boils at ' + M.transitions('water', 101325).boil + ' K at 1 atm';
      if (Math.abs(M.transitions('co2', 101325).subl - 194.686) > 0.005) return 'dry ice sublimes at ' + M.transitions('co2', 101325).subl;
      if (ph.at && Math.abs(ph.T - ph.at.T) > 1e-9) return 'holding at ' + ph.at.k + ' but T = ' + ph.T;
      return true; })()` },
    { name: "vapor: 0 <= p <= p_sat in the sealed jar (relative humidity at most 100 %), dew point below T, open pot boils at the outside pressure; 2.339 kPa saturated at 20 C", fn: `(() => { ${pre}
      if (S.view !== 'vapor') return true;
      const vp = M.vp, ps = M.psat(vp.T);
      if (!(vp.T > 272 && vp.T < 404)) return 'jar temperature ' + vp.T;
      if (Math.abs(M.psat(293.15) - 2339.19) > 0.05) return 'p_sat at 20 C = ' + M.psat(293.15);
      if (vp.jar === 'sealed') {
        if (!(vp.p >= 0 && vp.p <= ps * (1 + 1e-9))) return 'vapor pressure ' + vp.p + ' Pa with p_sat ' + ps;
        const rh = parseFloat(rd('Relative humidity p/p_sat')); if (isFinite(rh) && Math.abs(rh - 100 * vp.p / ps) > 0.051) return 'RH shows ' + rh + ', state ' + 100 * vp.p / ps;
        if (vp.p > 1 && M.dewPoint(vp.p) > vp.T + 1e-6) return 'dew point ' + M.dewPoint(vp.p) + ' above T ' + vp.T;
        if (vp.boil) return 'the sealed jar boils';
      } else {
        const Tb = M.boilingPoint(vp.Pout); if (vp.T > Tb + 1e-9) return 'open pot at ' + vp.T + ' K, above its boiling point ' + Tb;
        if (vp.boil && Math.abs(M.psat(vp.T) / vp.Pout - 1) > 1e-6) return 'boiling with vapor pressure ' + M.psat(vp.T) + ' and outside ' + vp.Pout;
      }
      return true; })()` },
  ],
  steps: [
    { name: 'phase diagram: drag the dot to every corner and the boundaries, heat and cool through every change, both substances, every pressure preset', fn: `(async () => {
      const M = window.__sm, pause = (ms) => new Promise((r) => setTimeout(r, ms)), can = document.getElementById('can');
      M.applyPreset('phase'); await pause(200);
      const r = can.getBoundingClientRect(), pt = (fx, fy, type) => can.dispatchEvent(new PointerEvent(type, { bubbles: true, pointerId: 1, clientX: r.left + fx * r.width, clientY: r.top + fy * r.height }));
      for (const [fx, fy] of [[0, 0], [1, 1], [0.02, 0.98], [0.99, 0.02], [0.5, 0.5], [-0.2, 1.3], [1.3, -0.2]]) { pt(fx, fy, 'pointerdown'); pt(fx * 0.9 + 0.05, fy, 'pointermove'); pt(fx, fy, 'pointerup'); await pause(80); }
      for (const sub of ['co2', 'water']) { document.querySelector('#phSub [data-sub=' + sub + ']').click(); await pause(100);
        for (const h of ['8849', '0', 'cooker']) { document.querySelector('#phP [data-h="' + h + '"]').click(); document.querySelector('#speedSeg [data-s="4"]').click(); M.setRun(true); await pause(900);
          document.querySelector('#phHeat [data-h="-1"]').click(); M.setRun(true); await pause(700); document.querySelector('#phHeat [data-h="1"]').click(); } }
      can.focus(); for (const k of ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']) for (let i = 0; i < 30; i++) can.dispatchEvent(new KeyboardEvent('keydown', { key: k, shiftKey: i % 2 === 0, bubbles: true }));
      M.applyPreset('phase'); M.setRun(false);
    })()` },
    { name: 'vapor: sealed jar saturates, cools past the dew point, heats to 130 C; open pot at every outside pressure and boils; switch jars mid run', fn: `(async () => {
      const M = window.__sm, pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      M.applyPreset('vpress'); document.querySelector('#speedSeg [data-s="4"]').click(); M.setRun(true); await pause(1500);
      set('sTset', 0); await pause(1500); set('sTset', 130); await pause(1500);
      document.querySelector('#vapJar [data-j=open]').click(); M.setRun(true);
      for (const h of ['8849', '1609', 'cooker', '0']) { document.querySelector('#vapP [data-h="' + h + '"]').click(); await pause(700); }
      set('sPout', 20); await pause(400); set('sPout', 220); await pause(400); set('sTset', 0); await pause(600);
      document.querySelector('#vapJar [data-j=sealed]').click(); M.setRun(true); await pause(400); document.getElementById('restart').click();
      M.applyPreset('vpress');
    })()` },
    { name: 'atoms: run the crystal hot, change pressure to 0 then 30 mid run, switch to vapor and back, other speeds', fn: `(async () => {
      const M = window.__sm, pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      M.applyPreset('crystal'); M.setRun(true); set('sPow', 8); await pause(800);
      for (const p of ['0', '30', '1', '30']) { set('sPres', p); await pause(500); }
      document.querySelector('#speedSeg [data-s="1"]').click(); await pause(300); document.querySelector('#speedSeg [data-s="4"]').click(); await pause(300);
      M.applyPreset('vapor'); M.setRun(true); set('sPres', 0); await pause(800); set('sPres', 30); await pause(800);
      M.applyPreset('cooker'); await pause(300); M.setRun(false);
    })()` },
    { name: 'beaker: run water to the end (all boiled away), restart, ethanol, extreme mass and power, change inputs while running', fn: `(async () => {
      const M = window.__sm, pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      M.applyPreset('ice'); set('sWatt', 1000); set('sMass', 50); document.querySelector('#speedSeg [data-s="4"]').click(); M.setRun(true); await pause(2500);
      document.getElementById('restart').click(); set('sMass', 400); set('sWatt', 100); M.setRun(true); await pause(600); set('sT0', -5); set('sWatt', 1000); await pause(400);
      document.querySelector('#subSeg [data-sub=ethanol]').click(); M.setRun(true); await pause(1200); set('sT0', 60); await pause(300);
      document.getElementById('cover2').click(); await pause(200); document.getElementById('cover2').click();
      M.applyPreset('ice');
    })()` },
  ],
};
