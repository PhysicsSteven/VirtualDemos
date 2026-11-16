/* Known values for the break-it test (tools/breakit.cjs), numerical-methods. Hook: window.__nm (S, R, SYS, applyPreset, plusPeriod).
   Whatever is pressed: the period is exact (spring 1 s, pendulum 4√(L/g) K(sin(θ₀/2)), orbit 1 yr), h = T/N, every live run sits
   on the same whole step n h of the clock, and its error and energy error readouts are recomputed from its state against the
   exact motion. After the Spring, 50 steps a period setup and one press of +1 period, Euler's energy is (1 + (2π/50)²)⁵⁰ − 1
   above the start and the other three are within 0.1 %. */
const pre = `const M = window.__nm; if (!M) return true; const S = M.S, R = M.R, Y = M.SYS; if (!Y) return true;`;
module.exports = {
  checks: [
    { name: 'period exact and h = T/N', fn: `(() => { ${pre}
      let T = 1; if (Y.name === 'pendulum') { const m = Math.sin(Y.th0 / 2) ** 2; let a = 1, b = Math.sqrt(1 - m); for (let i = 0; i < 40; i++) { const t = (a + b) / 2; b = Math.sqrt(a * b); a = t; } T = 4 * Math.PI / (2 * a) / Math.sqrt(9.81); }
      if (Math.abs(Y.T - T) > 1e-12 * T) return 'period ' + Y.T + ', should be ' + T;
      if (!(S.N >= 4 && S.N <= 1000)) return 'N out of range ' + S.N;
      return true; })()` },
    { name: 'every live run is on the clock step and its readouts match its state', fn: `(() => { ${pre}
      const h = Y.T / S.N, n = Math.floor(S.t / h + 1e-9);
      for (const k of ['eu', 'se', 'vv', 'rk']) { const r = R[k]; if (r.failed) continue;
        if (r.n !== n && !S.run) return k + ' is at step ' + r.n + ', the clock at ' + n;
        const e = Y.exact(r.n * h), err = Y.err(r.s.p, r.s.v, e), dE = (Y.energy(r.s.p, r.s.v) - r.E0) / Math.abs(r.E0);
        if (!(Math.abs(err - r.err) <= 1e-12 * (1 + err))) return k + ' error ' + r.err + ', recomputed ' + err;
        if (!(Math.abs(dE - r.dE) <= 1e-12 * (1 + Math.abs(dE)))) return k + ' energy error ' + r.dE + ', recomputed ' + dE;
        if (r.mx < err - 1e-15) return k + ' largest error ' + r.mx + ' below the error now ' + err; }
      return true; })()` },
  ],
  steps: [
    { name: 'spring 50 steps, one period: Euler energy (1 + (2π/50)²)^50 − 1, others within 0.1 %', fn: `(() => { const M = window.__nm; M.applyPreset('spring'); M.plusPeriod();
      const R = M.R, want = Math.pow(1 + Math.pow(2 * Math.PI / 50, 2), 50) - 1;
      if (Math.abs(R.eu.dE - want) > 1e-9 * want) throw new Error('Euler energy error ' + R.eu.dE + ', should be ' + want);
      for (const k of ['se', 'vv', 'rk']) if (Math.abs(R[k].dE) > 1e-3) throw new Error(k + ' energy error ' + R[k].dE);
      return true; })()` },
  ],
};
