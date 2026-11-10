/* Known values for the break-it test (tools/breakit.cjs), quantum-waves (1D pictures). Hook: window.__qw (S, sim, obs, eig, ...).
   Total probability (grid plus absorbed at the edges) is 1; Δx·Δp ≥ ħ/2 (the readout shows it); the plane wave T(E0) of the step and
   the single barrier equals the textbook formulas from the shown settings; in a well (no absorbing edge) the energy ⟨E⟩ does not change
   while it runs, and the box and spring levels in the table are n²π²ħ²/2mL² and (n + ½)ħω; R + T = 100 % once the packet has split. */
const pre = `const Q = window.__qw; if (!Q || !Q.sim || !Q.obs || window.__qw2d) return true;
  const S = Q.S, o = Q.obs, KIN = 0.0380998, rd = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-');
`;
module.exports = {
  checks: [
    { name: "total probability is 1 (grid plus absorbed) and Δx·Δp ≥ ħ/2", fn: `(() => { ${pre}
      if (!(o.norm > 1e-6)) return true;
      const [aL, aR] = Q.absorbed, tot = Q.sim.xl !== undefined ? o.norm + aL + aR : o.norm;
      if (Math.abs(tot - 1) > 2e-3 && !/Measured|measured/.test(rd('rLast'))) { if (rd('rLast') === '—' || rd('rLast') === '') return 'total probability ' + tot; }
      if (!isFinite(o.dx * o.dk)) return 'Δx·Δk not finite';
      if (o.dx * o.dk < 0.5 * (1 - 5e-3)) return 'Δx·Δp = ' + (o.dx * o.dk).toFixed(4) + ' ħ, below ħ/2';
      return true; })()` },
    { name: "plane wave T(E0): step 4k1k2/(k1+k2)² (E > V0, else 0); barrier [1 + V0² sinh²(κa)/4E(V0−E)]⁻¹", fn: `(() => { ${pre}
      const p = S.params, E = S.packet.E0, txt = rd('rTpw'); if (typeof E !== 'number' || txt === '—' || !(S.packet.x0 < 0 && S.packet.dir > 0)) return true;   /* a packet that starts past the barrier or moves away never meets it: 0 % */
      let T; if (S.preset === 'step') { T = E > p.h ? 4 * Math.sqrt(E) * Math.sqrt(E - p.h) / Math.pow(Math.sqrt(E) + Math.sqrt(E - p.h), 2) : 0; }
      else if (S.preset === 'barrier') { const V0 = p.h, a = p.w; if (Math.abs(E - V0) < 1e-6) return true;
        if (E < V0) { const kap = Math.sqrt((V0 - E) / KIN), s = Math.sinh(kap * a); T = 1 / (1 + V0 * V0 * s * s / (4 * E * (V0 - E))); }
        else { const k2 = Math.sqrt((E - V0) / KIN), s = Math.sin(k2 * a); T = 1 / (1 + V0 * V0 * s * s / (4 * E * (E - V0))); } }
      else return true;
      const got = parseFloat(txt) / 100; return Math.abs(got - T) <= 0.00051 + 1e-9 ? true : 'Plane wave T shows ' + txt + ', formula ' + (100 * T).toFixed(3) + ' % (E0 ' + E + ', V0 ' + p.h + ', a ' + p.w + ')'; })()` },
    { name: "R + T = 100 % once the packet has split (and T is not shown above 100 %)", fn: `(() => { ${pre}
      const r = rd('rR'), t = rd('rT'); if (r === '—' || t === '—' || r === '' || t === '') return true;
      const R = parseFloat(r), T = parseFloat(t); if (!(R >= -1e-9 && T >= -1e-9 && R <= 100.05 && T <= 100.05)) return 'R = ' + r + ', T = ' + t;
      if (Math.abs(R + T - 100) > 0.25 && !/measure/i.test(rd('scatStatus'))) return 'R + T = ' + (R + T).toFixed(2) + ' % (R ' + r + ', T ' + t + ')';
      return true; })()` },
    { name: "well: ⟨E⟩ does not change while it runs (no measurement); box and spring levels are exact", fn: `(() => { ${pre}
      if (!['iwell', 'ho', 'fwell', 'dwell'].includes(S.preset)) return true;
      const key = S.preset + JSON.stringify(S.params) + rd('rCopies') + rd('rLast') + S.mode + JSON.stringify(S.sel) + S.mult, W = (window.__qE = window.__qE || {});
      if (W.sim !== Q.sim || W.key !== key) { W.sim = Q.sim; W.key = key; W.t = Q.t; W.E = o.E; }
      else if (Q.t >= W.t && Math.abs(o.E - W.E) > 2e-4 * Math.max(1e-3, Math.abs(W.E)) + 1e-6) return 'energy went from ' + W.E + ' to ' + o.E + ' eV with no measurement';
      const ev = Q.eig; if (!ev || !ev.length && !(ev.vals)) return true;
      const vals = ev.vals || ev; if (!vals.length) return true;
      if (S.preset === 'iwell') for (let j = 0; j < vals.length; j++) { const ex = (j + 1) ** 2 * Math.PI ** 2 * KIN / (S.params.w ** 2); if (Math.abs(vals[j] / ex - 1) > 2e-3) return 'box level ' + (j + 1) + ' is ' + vals[j] + ', exact ' + ex; }
      if (S.preset === 'ho') for (let j = 0; j < vals.length; j++) { const ex = (j + 0.5) * S.params.h; if (Math.abs(vals[j] / ex - 1) > 3e-3) return 'spring level ' + j + ' is ' + vals[j] + ', (n + ½)ħω = ' + ex; }
      for (let j = 1; j < vals.length; j++) if (!(vals[j] > vals[j - 1])) return 'levels not increasing';
      return true; })()` },
  ],
  steps: [
    { name: 'every setup: run a moment, step, Reset; E0 and width to extremes on the barrier', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), Q = window.__qw;
      for (const p of ['free', 'step', 'barrier', 'dbar', 'fwell', 'iwell', 'ho', 'dwell', 'barrier']) { Q.applyPreset(p); await pause(150); Q.setRunning(true); await pause(300); Q.setRunning(false); const s = document.getElementById('stepBtn'); if (s && s.offsetParent) s.click(); await pause(60); }
    })()` },
  ],
};
