/* Known values for the break-it test (tools/breakit.cjs), solar-system-formation. Hook: window.__ss (S, CL, GR, ML, ...).
   Collapse: the tracked parcel keeps its angular momentum about the axis (j_z = Ω₀ r₀² at the start, whatever the stage of its fall and
   the settling), and while it is still falling (before the midplane) its energy is constant; the Predicted disk radius readout is
   Ω₀²r₀⁴/GM. Disk: the temperature readout is 280 K (L)^(1/4) / √r, the frost line (T = 182 K) is where the probe's T reads 182 K, and
   the isolation mass readout matches the formula and the cited 0.16 Earth masses at 1 AU for Σ = 10 g/cm².
   Planets: joining planetesimals keeps the total mass and the total angular momentum (Σ m√a); each body is a contiguous run of the
   900 starting planetesimals. Melting: the center temperature stays between the surface temperature and the fully molten 1982 K,
   the hottest so far is at least the current one, the molten percent follows T, and the heat readout is H₀ τ e^(−t_f/τ). */
const pre = `const SS = window.__ss; if (!SS) return true;
  const S = SS.S, $ = (id) => document.getElementById(id), near = (a, b, tol) => Math.abs(a - b) <= tol * Math.max(Math.abs(b), 1e-300);
  const AU = 1.495978707e11, GMSI = 1.3271244e20, YR = 365.25 * 86400, GM = GMSI * YR * YR / (AU * AU * AU);
  const rdOut = (label) => { for (const d of document.querySelectorAll('#out > div')) { const t = d.querySelector('dt'); if (t && t.textContent.indexOf(label) === 0) return d.querySelector('dd').textContent; } return null; };
  const num = (s) => parseFloat(String(s).replace(/−/g, '-').replace(/[,\\u202f\\u00a0 ]/g, '').replace(/×10\\^?/, 'e'));
`;
module.exports = {
  checks: [
    { name: "collapse: tracked parcel keeps j_z = Ω₀ r₀² (falling and settling); falling energy is constant", fn: `(() => { ${pre}
      if (S.st !== 'collapse' || !SS.CL.C) return true;
      const C = SS.CL.C, W = (window.__ssw = window.__ssw || new WeakMap());
      if (C.st[0] === 2) return true;
      const w = C.P0 > 0 ? 2 * Math.PI / (C.P0 * 1e6) : 0, jz = C.p[0] * C.v[1] - C.p[1] * C.v[0], j0 = w * C.r0 * C.r0;
      if (!(Math.abs(jz - j0) <= 1e-6 * Math.max(j0, 1e-30) + 1e-12 * 0)) return 'j_z = ' + jz + ' but Ω₀ r₀² = ' + j0 + ' (state ' + C.st[0] + ', t = ' + C.t + ' yr)';
      if (C.st[0] === 0) { const r = Math.hypot(C.p[0], C.p[1], C.p[2]), E = 0.5 * (C.v[0] ** 2 + C.v[1] ** 2 + C.v[2] ** 2) - GM / r, E0 = 0.5 * (w * C.r0) ** 2 - GM / Math.hypot(C.r0, 0, 0.004 * C.r0);
        if (Math.abs(E - E0) > 2e-3 * GM / C.r0 * 2) return 'energy of the falling parcel went from ' + E0 + ' to ' + E; }
      return true; })()` },
    { name: "collapse: Predicted disk radius readout = Ω₀² r₀⁴ / GM; the settled parcel lies at that radius (equator)", fn: `(() => { ${pre}
      if (S.st !== 'collapse' || S.blind || !S.spin) return true;
      const w = 2 * Math.PI / (S.P0 * 1e6), Rd = w * w * S.r0 ** 4 / GM, t = rdOut('Predicted disk radius');
      if (t == null) return 'no Predicted disk radius readout';
      const v = num(t); if (/AU/.test(t) && !/×|e/.test(t) && !near(v, Rd, 2e-2) && Rd < 1e5) return 'readout "' + t + '" but Ω₀²r₀⁴/GM = ' + Rd + ' AU';
      const C = SS.CL.C; if (C.st[0] === 3) { const s = Math.hypot(C.p[0], C.p[1]); if (!near(s, Rd, 3e-2)) return 'settled parcel at ' + s + ' AU, predicted disk radius ' + Rd; }
      return true; })()` },
    { name: "disk: temperature readout = 280 K L^¼ / √r; the frost line is where T = 182 K; isolation mass formula", fn: `(() => { ${pre}
      if (S.st !== 'disk' && S.st !== 'planets') return true;
      const T = (r) => 280 * Math.pow(S.L, 0.25) / Math.sqrt(r), frost = Math.pow(280 * Math.pow(S.L, 0.25) / 182, 2);
      if (Math.abs(T(frost) - 182) > 1e-9) return 'T at the frost line is ' + T(frost);
      if (!S.blind) { const f = rdOut('Frost line'); if (f != null && !/hidden/.test(f) && !near(num(f), frost, 6e-3)) return 'frost line readout "' + f + '" but 280 L^¼/182)² = ' + frost; }
      if (S.st === 'disk') { const t = rdOut('Temperature there'); if (t != null && !near(num(t), T(S.r), 6e-3)) return 'T readout "' + t + '" but 280 L^¼/√r = ' + T(S.r) + ' at r = ' + S.r; }
      if (S.st === 'planets' && !S.blind) { const t = rdOut('Isolation mass'); if (t != null && !/hidden/.test(t)) {
        const Ms = GMSI / 6.6743e-11, iso = (a, sig) => Math.pow(2 * Math.PI * (a * AU) ** 2 * 10 * sig * 10, 1.5) * Math.sqrt(2 / (3 * Ms)) / 5.9722e24;
        const sg = (a) => S.f * (a < frost ? 7.1 : 30) * Math.pow(a, -1.5), m = t.match(/([\\d.e+-]+), ([\\d.e+-]+)/);
        if (!m || !near(+m[1], iso(1, sg(1)), 0.03) || !near(+m[2], iso(5.2, sg(5.2)), 0.03)) return 'isolation mass readout "' + t + '", expected ' + iso(1, sg(1)) + ', ' + iso(5.2, sg(5.2));
        if (!near(iso(1, 10), 0.16, 2e-2)) return 'isolation mass at 1 AU, Σ = 10 g/cm² is ' + iso(1, 10) + ', the page cites 0.16'; } }
      return true; })()` },
    { name: "planets: joining keeps total mass and angular momentum Σ m√a; each body is a contiguous run of the 900 starters", fn: `(() => { ${pre}
      const D = SS.GR.D; if (!D || !D.B.length) return true;
      const B = D.B, W = (window.__ssg = window.__ssg || new WeakMap());
      if (B[0].lo !== 0 || B[B.length - 1].hi !== 899) return 'bodies cover starters ' + B[0].lo + ' to ' + B[B.length - 1].hi + ', not 0 to 899';
      for (let i = 0; i + 1 < B.length; i++) { if (B[i].hi + 1 !== B[i + 1].lo) return 'bodies ' + i + ' and ' + (i + 1) + ' are not contiguous (' + B[i].hi + ', ' + B[i + 1].lo + ')'; if (!(B[i].a < B[i + 1].a)) return 'bodies out of order in a at ' + i; }
      let m = 0, j = 0; for (const b of B) { m += b.m; j += b.m * Math.sqrt(b.a); if (!(b.m > 0) || !isFinite(b.a)) return 'bad body ' + JSON.stringify(b); }
      const w = W.get(D); if (!w) { if (D.merges === 0) W.set(D, { m, j }); return true; }
      if (!near(m, w.m, 1e-9)) return 'total solid mass went from ' + w.m + ' to ' + m + ' Earth masses';
      if (!near(j, w.j, 1e-9)) return 'Σ m√a went from ' + w.j + ' to ' + j;
      return true; })()` },
    { name: "melt: 180 K ≤ T_center ≤ 1982 K, hottest ≥ now, molten % follows T, heat readout = H₀ τ e^(−t_f/τ)", fn: `(() => { ${pre}
      if (S.st !== 'melt' || !SS.ML.run) return true;
      const run = SS.ML.run;
      for (const T of run.Tc) if (!(T >= 180 - 1e-6 && T <= 1982 + 1e-6)) return 'center temperature ' + T + ' K outside 180 to 1982 K';
      if (run.peak > 1982 + 1e-6) return 'peak ' + run.peak;
      if (run.core !== run.Tc.some((T) => T >= 1821.5)) return 'core flag ' + run.core + ' disagrees with the center temperatures';
      const tau = 0.717 / Math.LN2, want = 3e-7 * tau * 1e6 * YR * Math.exp(-S.tf / tau) / 1e6, h = rdOut('Aluminum 26 heat');
      if (h != null && !near(num(h), want, 6e-3)) return 'heat readout "' + h + '" but H₀ τ e^(-tf/τ) = ' + want + ' MJ/kg';
      return true; })()` },
  ],
  steps: [
    { name: 'every preset in turn run to the end (To the end), then back to the story', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      for (const b of document.querySelectorAll('#presets button')) { b.click(); await pause(150); const s = document.getElementById('skip'); if (s && !s.hidden) s.click(); await pause(200); }
      document.querySelector('#presets [data-p=story]').click(); await pause(300);
    })()` },
    { name: 'collapse: change spin and radius to extremes mid run, no spin on and off, speed to the fastest', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      const SS = window.__ss; document.querySelector('#presets [data-p=nebula]').click(); await pause(500);
      const sp = document.getElementById('selSpeed'); sp.value = sp.options[sp.options.length - 1].value; sp.dispatchEvent(new Event('change', { bubbles: true }));
      for (const [id, a, b] of [['sP0', 'max', 'min'], ['sR0', 'max', 'min']]) { const e = document.getElementById(id); for (const v of [e.max, e.min, e.max]) { set(id, v); document.getElementById('play').click(); await pause(500); } }
      const ns = document.getElementById('chkNoSpin'); ns.click(); await pause(300); document.getElementById('skip').click(); await pause(200); ns.click(); await pause(200);
      document.getElementById('skip').click(); await pause(300);
      document.querySelector('#presets [data-p=fast]').click(); await pause(300);
    })()` },
    { name: 'planets and melt: extremes of disk mass, gas time, radius, formation time, then To the end and Restart', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      for (const [p, ids] of [['heavy', ['sF', 'sGas', 'sL']], ['vesta', ['sRad', 'sTf']]]) {
        document.querySelector('#presets [data-p=' + p + ']').click(); await pause(300);
        for (const id of ids) { const e = document.getElementById(id); for (const v of [e.min, e.max, e.min]) { set(id, v); document.getElementById('skip').click(); await pause(250); document.getElementById('restart').click(); await pause(100); } }
      }
      document.querySelector('#presets [data-p=story]').click(); await pause(300);
    })()` },
  ],
};
