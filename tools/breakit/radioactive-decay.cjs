/* Known values for the break-it test (tools/breakit.cjs), radioactive-decay. Hooks: window.__rd (sim, ...), window.__rd1 (O, AL, BE), RD1 (core).
   Many nuclei: the species counts always add up to N0 and match the nuclei themselves; every rate is λ = ln 2 / T½ of the cited preset
   half life (a changed slider says so in the note); the parent count stays within 6σ of N0 e^(−λt); the readouts agree with each other;
   the generator preset has the cited branching 0.886. Single nuclei: Q values from the mass table (neutron 782 keV, tritium 18.59 keV,
   ²¹²Po 8.95 MeV), an electron plus its neutrino carry exactly Q, the spectrum mean lies inside (0, Q), and Gamow's model stays within
   its stated half decade rms of the twenty measured half lives. */
const pre = `const R = window.__rd; if (!R || !R.sim) return true; const sim = R.sim, n = sim.n, t = sim.step * R.dt;
  const pressed = document.querySelector('#presets button[aria-pressed=true]'), P = pressed && pressed.dataset.p;
  const CITED = { coin: [1], c14: [5700], i131: [8.0252], bi210: [5.012, 138.376], te132: [76.896, 2.295], tc99m: [6.0072], f18: [109.77], ir192: [73.829], co60: [5.2711], mo99: [65.924, 6.0072], k40: [1.248], al26: [0.717] };
`;
module.exports = {
  checks: [
    { name: "species counts add up to N0 and match the nuclei", fn: `(() => { ${pre}
      let tot = 0; for (let i = 0; i < sim.counts.length; i++) { if (!(sim.counts[i] >= 0)) return 'count ' + i + ' is ' + sim.counts[i]; tot += sim.counts[i]; }
      if (tot !== sim.N0) return 'counts add to ' + tot + ', N0 = ' + sim.N0;
      const h = new Array(sim.counts.length).fill(0); for (let i = 0; i < sim.sp.length; i++) h[sim.sp[i]]++;
      for (let i = 0; i < h.length; i++) if (h[i] !== sim.counts[i]) return 'species ' + i + ': ' + h[i] + ' nuclei but the count says ' + sim.counts[i];
      for (let i = 0; i <= n; i++) if (R.H[i][sim.step] !== sim.counts[i]) return 'plot history of species ' + i + ' differs from the count at step ' + sim.step;
      if (n === 1 && sim.counts[2] !== 0) return 'a one step chain has eluted nuclei';
      return true; })()` },
    { name: "λ = ln 2 / T½ at the cited half life, and a slider change is labeled", fn: `(() => { ${pre}
      const T = CITED[P]; if (!T || P === 'coin') return true;   /* the coin's T½ is a free choice: never labeled changed */
      if (sim.lam.length !== T.length) return 'preset ' + P + ' has ' + sim.lam.length + ' unstable species';
      if (R.dt <= 0 || !isFinite(R.dt)) return 'dt = ' + R.dt;
      let same = true; for (let i = 0; i < T.length; i++) { const T2 = Math.LN2 / sim.lam[i]; if (Math.abs(T2 - T[i]) > 1e-9 * T[i]) same = false; }
      const note = document.getElementById('hlNote').textContent, labeled = /^Half life changed/.test(note);
      if (n === 1) { const want = Math.pow(2, -R.dt / (Math.LN2 / sim.lam[0])); if (Math.abs(sim.rows[0][0] - want) > 1e-12) return 'survive chance per step ' + sim.rows[0][0] + ', 2^(−dt/T½) = ' + want; }
      if (same && labeled) return 'cited half lives but the note says they were changed';
      if (!same && !labeled) return 'half life differs from the cited value (' + sim.lam.map((l) => (Math.LN2 / l)).join(', ') + ') and the note does not say so';
      if (P === 'mo99' && !labeled && Math.abs(sim.br - 0.886) > 1e-12) return 'generator branching ' + sim.br + ', cited 0.886';
      return true; })()` },
    { name: "parent count within 6σ of N0 e^(−λt); the transition chances sum to 1", fn: `(() => { ${pre}
      const f = Math.exp(-sim.lam[0] * t), sig = Math.sqrt(sim.N0 * f * (1 - f)), d = sim.counts[0] - sim.N0 * f;
      if (Math.abs(d) > 6 * sig + 1) return 'parents ' + sim.counts[0] + ' but expected ' + (sim.N0 * f).toFixed(1) + ' ± ' + sig.toFixed(1) + ' at t = ' + t + ' (' + (d / sig).toFixed(1) + ' σ)';
      for (const r of sim.rows) { const s = r.reduce((a, b) => a + b, 0); if (Math.abs(s - 1) > 1e-9 || r.some((x) => x < -1e-12 || x > 1 + 1e-12)) return 'a transition row adds to ' + s + ': ' + r.join(', '); }
      return true; })()` },
    { name: "readouts agree: N/N₀, expected fraction, half lives elapsed, set speeds", fn: `(() => { ${pre}
      if (document.body.classList.contains('blind') || document.querySelector('.stage.one')) return true;
      const g = (id) => document.getElementById(id).textContent, re = parseFloat(g('rExp')), hl = parseFloat(g('rHL'));
      if (![re, hl].every(isFinite)) return 'a readout is not a number: ' + [g('rExp'), g('rHL')];
      const tol = (hl >= 10 ? 0.05 : 0.005) * Math.LN2 * Math.exp(-Math.LN2 * hl) + 6e-4;
      if (Math.abs(re - Math.exp(-Math.LN2 * hl)) > tol) return 'expected ' + re + ' but 2^(−' + hl + ') = ' + Math.exp(-Math.LN2 * hl);
      return true; })()` },
    { name: "single nuclei: Q values, energy sharing, Gamow within half a decade rms", fn: `(() => { const Q = window.RD1, X = window.__rd1; if (!Q || !X || !window.VDNUBASE) return true;
      if (!window.__gam) { Q.useNubase && Q.useNubase(window.VDNUBASE); let s = 0, k = 0; for (const [Z, A] of Q.ALPHA_SET) { const g = Q.gamow(Z, A, 1.2), m = Q.alphaMeasured(Z, A); if (!isFinite(g.lgT)) return 'Gamow T for ' + Z + ',' + A + ' is not finite'; const d = g.lgT - m.lgTa; s += d * d; k++; } window.__gam = Math.sqrt(s / k); }
      if (window.__gam > 0.7) return 'Gamow rms ' + window.__gam.toFixed(2) + ' decades (the page says about half a decade)';
      const nb = (Z, A) => Q.betaQ(Z, A, false);
      if (Math.abs(Q.betaQ(0, 1, false) - 0.782) > 0.001) return 'neutron Q = ' + Q.betaQ(0, 1, false) + ' MeV, cited 0.782';
      if (Math.abs(Q.betaQ(1, 3, false) - 0.01859) > 0.00002) return 'tritium Q = ' + Q.betaQ(1, 3, false) + ' MeV, cited 18.59 keV';
      if (Math.abs(Q.betaQ(6, 14, false) - 0.1565) > 0.001) return 'carbon 14 Q = ' + Q.betaQ(6, 14, false);
      if (Math.abs(Q.alphaQ(84, 212) - 8.954) > 0.005) return 'polonium 212 Q = ' + Q.alphaQ(84, 212) + ', cited 8.954 MeV';
      const B = X.BE; if (X.O.view === 'beta' && B.tab) { const s = Q.BETA_SET[X.O.b], q = Q.betaQ(s.Z, s.A, s.plus);
        if (!(B.tab.mean > 0 && B.tab.mean < q) || Math.abs(B.tab.Q - q) > 1e-12) return 'beta spectrum mean ' + B.tab.mean + ' not inside (0, Q = ' + q + ')';
        if (B.last && !X.O.noNu && Math.abs(B.last.Te + B.last.Ev - q) > 1e-9) return 'electron ' + B.last.Te + ' + neutrino ' + B.last.Ev + ' is not Q = ' + q;
        if (B.last && X.O.noNu && Math.abs(B.last.Te - q) > 1e-9) return 'no neutrino: electron should take all of Q'; }
      return true; })()` },
  ],
  steps: [
    { name: "generator: run, elute, change the daughter half life and N mid run, elute again, switch preset and back", fn: `(async () => {
      const w = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (i) => document.getElementById(i), R = window.__rd;
      document.querySelector('#presets [data-p=mo99]').click(); await w(300); R.run(40); $('eluteBtn').click(); R.run(30);
      const s = $('hl1'); s.value = s.max; s.dispatchEvent(new Event('input', { bubbles: true })); await w(100); R.run(20); $('eluteBtn').click(); $('eluteBtn').click();
      s.value = s.min; s.dispatchEvent(new Event('input', { bubbles: true })); R.run(200); $('eluteBtn').click();
      document.querySelector('#nSeg button:last-child').click(); await w(100); R.run(300); $('eluteAuto').click(); await w(800);
      document.querySelector('#presets [data-p=bi210]').click(); await w(200); R.run(50); document.querySelector('#presets [data-p=mo99]').click(); await w(200); R.run(25); })()` },
    { name: "every preset run to the end at the fastest speed, half life sliders to both ends, then a flip back to the coin", fn: `(async () => {
      const w = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (i) => document.getElementById(i), R = window.__rd;
      const sp = [...document.querySelectorAll('#speedSeg button')]; sp[sp.length - 1].click();
      for (const b of document.querySelectorAll('#presets button')) { b.click(); await w(150);
        for (const id of ['hl0', 'hl1']) { const s = $(id); if (!s) continue; for (const v of [s.max, s.min, s.max]) { s.value = v; s.dispatchEvent(new Event('input', { bubbles: true })); await w(60); R.run(5000); } }
        R.run(100000); await w(150); }
      sp[0].click(); document.querySelector('#presets [data-p=coin]').click(); await w(300); R.run(3); })()` },
    { name: "single nuclei: every alpha and beta nucleus, decay many times, back to many nuclei while it runs", fn: `(async () => {
      const w = (ms) => new Promise((r) => setTimeout(r, ms)), X = window.__rd1;
      for (const v of ['alpha', 'beta']) { document.querySelector('#viewSeg [data-v=' + v + ']').click(); await w(150);
        for (const b of document.querySelectorAll('#oneNuc button')) { b.click(); await w(40); if (v === 'beta') { for (let i = 0; i < 40; i++) X.betaOne(true); } } }
      document.getElementById('oneNoNu').click(); X.betaOne(true); document.getElementById('oneNoNu').click(); X.betaOne(true);
      document.querySelector('#viewSeg [data-v=many]').click(); await w(300); document.getElementById('play').click(); await w(400); })()` },
  ],
};
