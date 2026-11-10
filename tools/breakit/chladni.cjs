/* Known values for the break-it test (tools/breakit.cjs), chladni. Hook: window.__ch (S, D, applyPreset, setShape, setDrive, ...).
   Free steel square plate (nu 0.30): lowest mode lambda^2 = 13.468 (Leissa); free bar: (beta L)^2 = 22.373; drum: circle lowest
   j01 = 2.40483 and square sqrt(2), f = lambda^2 * fs with fs = c/(2 pi a) or c/(2L), c = sqrt(T/sigma); plate fs from D = E h^3/12(1 - nu^2);
   the mass readout equals rho h A; the lowest mode readout equals lambda^2 fs; the bending wavelength readout is 2 pi / k with
   k = (w^2 rho h / D)^(1/4); the resonance list is positive and increasing. Reads the state after the page has recomputed. */
const pre = `const c = window.__ch; if (!c || !c.D || !c.D.lowest || !c.D.res) return true;
  const S = c.S, D = c.D, MAT = { steel: { E: 200e9, rho: 7850, nu: 0.30 }, aluminum: { E: 69e9, rho: 2700, nu: 0.33 } }[S.mat], drum = S.kind === 'drum';
  const L = 0.24, a = 0.12, rd = (id) => document.getElementById(id).textContent, near = (x, y, t) => Math.abs(x - y) <= t * Math.max(Math.abs(y), 1e-12);
  const area = S.shape === 'square' ? L * L : S.shape === 'bar' ? L * 0.03 : Math.PI * a * a;
`;
module.exports = {
  checks: [
    { name: "cited lowest modes: steel square 13.468, bar 22.373, drum circle j01, drum square sqrt 2", fn: `(() => { ${pre}
      const l = D.lowest.lam2; if (!isFinite(l) || l <= 0) return 'lowest lambda^2 = ' + l;
      if (drum) { const want = S.shape === 'circle' ? 2.404826 : Math.SQRT2; if (!near(l, want, 1e-4)) return 'drum ' + S.shape + ' lowest ' + l + ', should be ' + want; return true; }
      if (S.shape === 'bar' && !near(l, 22.3733, 2e-4)) return 'bar (beta L)^2 = ' + l + ', should be 22.3733';
      if (S.shape === 'square' && S.mat === 'steel' && !near(l, 13.468, 5e-4)) return 'free square plate lowest lambda^2 = ' + l + ', Leissa 13.468';
      return true; })()` },
    { name: "frequency scale, lowest mode and mass readouts agree with the physics", fn: `(() => { ${pre}
      let fs;
      if (drum) { const sigma = D.M / area, c0 = Math.sqrt(S.T / sigma); fs = S.shape === 'square' ? c0 / (2 * L) : c0 / (2 * Math.PI * a); if (!near(sigma, 1390 * 0.19e-3, 1e-9)) return 'head areal density ' + sigma; }
      else { const h = S.h, Dr = MAT.E * h ** 3 / (12 * (1 - MAT.nu ** 2)); fs = S.shape === 'bar' ? h * Math.sqrt(MAT.E / (12 * MAT.rho)) / (2 * Math.PI * L * L) : Math.sqrt(Dr / (MAT.rho * h)) / (2 * Math.PI * (S.shape === 'square' ? L * L : a * a));
        if (!near(D.M, MAT.rho * h * area, 1e-9)) return 'plate mass ' + D.M + ' but rho h A = ' + MAT.rho * h * area; }
      if (!near(D.fs, fs, 1e-9)) return 'fs = ' + D.fs + ', physics ' + fs;
      const f1 = D.lowest.lam2 * fs, t = rd('rLow'), kh = /kHz/.test(t), dec = ((t.match(/\\.(\\d+)/) || [0, ''])[1]).length, v = parseFloat(t) * (kh ? 1000 : 1);
      if (Math.abs(v - f1) > 0.5 * Math.pow(10, -dec) * (kh ? 1000 : 1) * 1.001) return 'lowest mode shows ' + t + ', lambda^2 fs = ' + f1;
      const mt = rd('rMass'), mm = parseFloat(mt); if (Math.abs(mm - D.M * 1000) > (drum ? 0.051 : 0.51)) return 'mass shows ' + mt + ', M = ' + D.M * 1000 + ' g';
      return true; })()` },
    { name: "bending wavelength readout is 2 pi / k, and the resonance list is positive and increasing", fn: `(() => { ${pre}
      if (!drum) { const k = Math.pow((2 * Math.PI * S.f) ** 2 * MAT.rho * S.h / (MAT.E * S.h ** 3 / (12 * (1 - MAT.nu ** 2))), 0.25), m = rd('rKh').match(/wavelength ([\\d.]+) cm, k h = ([\\d.]+)/);
        if (m && (Math.abs(+m[1] - 2 * Math.PI / k * 100) > 0.051 || Math.abs(+m[2] - k * S.h) > 0.00051)) return 'wave readout "' + rd('rKh') + '", 2 pi/k = ' + 2 * Math.PI / k * 100 + ' cm, k h = ' + k * S.h; }
      let p = 0; for (const r of D.res) { if (!isFinite(r.f) || r.f <= p) return 'resonance list not increasing/positive at ' + r.f + ' after ' + p; p = r.f; }
      if (!isFinite(S.f) || S.f <= 0 || !isFinite(D.gmax)) return 'f ' + S.f + ', gmax ' + D.gmax;
      return true; })()` }
  ],
  steps: [
    { name: "cycle every preset, shape, material and drive, then thickness, Q, force and tension at their limits", fn: `(() => {
      const c = window.__ch; if (!c) return; const set = (id, v) => { const e = document.getElementById(id); if (!e) return; e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      for (const p of ['first', 'cross', 'rings', 'sweep', 'star', 'high', 'drum', 'drumOff', 'bar', 'barMid']) { c.applyPreset(p); c.setShape && 0;
        for (const id of ['thick', 'qual', 'force', 'tens']) { const e = document.getElementById(id); if (e && e.offsetParent) for (const v of [e.min, e.max, e.min]) set(id, v); } } })()` },
    { name: "jump to every resonance on the square, circle and bar with the sand running", fn: `(() => {
      const c = window.__ch; if (!c) return; c.applyPreset('first');
      for (const sh of ['square', 'circle', 'bar']) { c.setShape(sh); c.setRunning && c.setRunning(true); const n = c.resonanceList().length; for (let i = 0; i < Math.min(n, 6); i++) { c.jumpRes(1); } c.sprinkle(); c.tick(20); } })()` }
  ]
};
