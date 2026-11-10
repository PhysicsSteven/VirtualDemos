/* Known values for the break-it test (tools/breakit.cjs), springs. Hook: window.__sp (S, segs, crossings, book, state()).
   One block or two (not the Sandbox, not while a block is held): the energy bookkeeping closes, E0 + (drive work) - E - (heat in
   the oil) = 0, whatever was changed along the way; the period between upward zero crossings is 2π/ω_d for an underdamped block
   (2π√(m/k) with no damping), and for two blocks the normal mode frequencies are √(k/m) and √((k + 2k_c)/m) when the two
   springs are equal. */
const pre = `const P = window.__sp; if (!P || !P.S || P.S.sys === 'sandbox' || P.held) return true; const S = P.S;
  if (!P.segs || !P.segs.length || !P.book) return true;
  const near = (a, b, rel, abs) => Math.abs(a - b) <= rel * Math.max(Math.abs(a), Math.abs(b)) + (abs || 0);
`;
module.exports = {
  checks: [
    { name: "energy bookkeeping closes: E0 + drive work - E - heat = 0", fn: `(() => { ${pre}
      const s = P.state(), b = s.book, E = s.en.total;
      if (![E, b.E0, b.D, b.W].every(Number.isFinite)) return 'energy bookkeeping has a non finite number: ' + [E, b.E0, b.D, b.W];
      if (b.D < -1e-12) return 'heat is negative: ' + b.D;
      const bal = b.E0 + b.W - E - b.D, sc = Math.max(Math.abs(b.E0), Math.abs(E), b.D, Math.abs(b.W), 1e-9);
      return Math.abs(bal) <= 1e-6 * sc + 1e-12 ? true : 'E0 ' + b.E0 + ' + W ' + b.W + ' - E ' + E + ' - heat ' + b.D + ' = ' + bal; })()` },
    { name: "undamped: kinetic + spring + gravity energy is constant", fn: `(() => { ${pre}
      if (S.p.b !== 0 || S.sys === 'driven') return true;
      const s = P.state(), E = s.en.total, W = (window.__spE = window.__spE || { g: null, E: 0 });
      const g = P.segs[P.segs.length - 1], key = g;
      if (W.g !== key) { W.g = key; W.E = E; return true; }
      return Math.abs(E - W.E) <= 1e-7 * Math.max(Math.abs(W.E), 1e-9) + 1e-12 ? true : 'energy went from ' + W.E + ' to ' + E + ' with no damping'; })()` },
    { name: "period between upward zero crossings = 2π/ω_d (one block), 2π/ω of mode 1 or 2 for two blocks", fn: `(() => { ${pre}
      const g = P.segs[P.segs.length - 1], c = P.crossings; if (c.length < 2 || c[c.length - 2] < g.t0 + 1e-9) return true;
      const T = c[c.length - 1] - c[c.length - 2];
      if (g.sys === 'single') { if (g.drive) return true; const q = g.w0sq - g.beta * g.beta; if (!(q > 0)) return true;
        return near(T, 2 * Math.PI / Math.sqrt(q), 1e-6) ? true : 'period ' + T + ', 2π/ω_d = ' + 2 * Math.PI / Math.sqrt(q); }
      return true; })()` },
    { name: "two blocks, equal springs: mode frequencies √(k/m) and √((k + 2 kc)/m)", fn: `(() => { ${pre}
      const g = P.segs[P.segs.length - 1]; if (g.sys !== 'coupled' || g.k1 !== g.k2) return true;
      if (!near(g.w1sq, g.k1 / g.m, 1e-9) || !near(g.w2sq, (g.k1 + 2 * g.kc) / g.m, 1e-9)) return 'ω₁² = ' + g.w1sq + ', ω₂² = ' + g.w2sq + '; expected ' + g.k1 / g.m + ' and ' + (g.k1 + 2 * g.kc) / g.m;
      return true; })()` },
    { name: "state is finite (x, v, a)", fn: `(() => { ${pre}
      const s = P.state().st; for (const k of Object.keys(s)) if (!Number.isFinite(s[k])) return k + ' = ' + s[k]; return true; })()` },
  ],
  steps: [
    { name: 'every preset, run, then extreme mass and spring and damping, then drive at resonance and back', fn: `(async () => {
      const P = window.__sp, pause = (ms) => new Promise((r) => setTimeout(r, ms));
      for (const b of [...document.querySelectorAll('#presets button')].slice(0, 30)) { b.click(); await pause(120); }
      for (const [k, v] of [['m', 0.05], ['k', 1], ['b', 0], ['m', 20], ['k', 400], ['m', 0.05], ['k', 400]]) { try { P.setParam(k, v); } catch (e) { throw new Error(k + '=' + v + ': ' + e.message); } await pause(100); }
      P.go(5); await pause(100);
      document.querySelector('#presets button').click(); await pause(100);
    })()` },
    { name: 'driven: sweep ω through resonance with no damping, change m and k while it runs, then kill b', fn: `(async () => {
      const P = window.__sp, pause = (ms) => new Promise((r) => setTimeout(r, ms));
      const b = [...document.querySelectorAll('#presets button')].find((x) => /driv|reson/i.test(x.textContent + x.dataset.p)); if (b) b.click(); await pause(150);
      P.setParam('b', 0); P.setParam('w', Math.sqrt(P.S.p.k / P.S.p.m)); P.go(3); await pause(100);
      P.setParam('m', P.S.p.m * 2); P.go(1); P.setParam('k', P.S.p.k / 3); P.go(1); P.setParam('w', 0.1); P.go(1); P.setParam('F0', 0); P.go(1); await pause(100);
    })()` },
  ],
};
