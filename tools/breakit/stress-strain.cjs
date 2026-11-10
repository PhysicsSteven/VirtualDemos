/* Known values for the break-it test (tools/breakit.cjs), stress-strain. Hook: window.__ss (S, setTest, setForce, mat, now).
   Tension: the Load readout is m g (g = 9.81), stress is F/A with A = pi d^2/4, and strain and extension are the wire's own
   (the last path point is the live state; the dial is strain times L = 2.00 m); below the yield stress the wire is elastic, strain = stress/Y exactly, and every point on
   the unloading path lies on a line of slope Y (parallel to the elastic line); the stress never passes the tensile strength
   without the wire breaking. Shear and bulk: the readings follow the linear laws from the modulus the page shows
   (dx = F L/(S A), piston dx = h0 Delta p/B, gauge strain from V/V0 = 1 - Delta p/B), and the stress readouts are F/A. */
const pre = `const SS = window.__ss; if (!SS) return true; const S = SS.S;
  const txt = (k) => { for (const r of document.querySelectorAll('#out > div')) if (r.querySelector('dt').textContent.indexOf(k) === 0) return r.querySelector('dd').textContent.replace(/\\u2212/g, '-'); return null; };
`;
module.exports = {
  checks: [
    { name: "tension: F = mg, A = pi d²/4, stress = F/A, strain and extension agree (L = 2 m)", fn: `(() => { ${pre}
      if (S.test !== 'tension' || S.broke) return true;
      const A = Math.PI * (S.d / 1000) ** 2 / 4, F = S.m * 9.81;
      if (Math.abs(parseFloat(txt('Load F')) - F) > 0.0051) return 'load shows ' + txt('Load F') + ', mg = ' + F;
      if (Math.abs(parseFloat(txt('Area')) - A * 1e6) > 5.1e-5) return 'area shows ' + txt('Area') + ', physics ' + A * 1e6;
      const lp = S.path[S.path.length - 1], q = { e: lp[0], s: lp[1] }; if (Math.abs(q.s - F / A) > 1e-6 * Math.max(1, F / A)) return 'path stress ' + q.s + ' != F/A ' + F / A;
      const dL = parseFloat(txt('Extension')); if (Math.abs(dL - q.e * 2000) > 0.00051) return 'dial shows ' + txt('Extension') + ', strain ' + q.e + ' times 2 m is ' + q.e * 2000;
      const s = txt('Stress σ'); if (s !== null) {
        if (Math.abs(parseFloat(s) - q.s / 1e6) > 0.051) return 'stress readout ' + s + ', F/A ' + q.s / 1e6;
        if (Math.abs(parseFloat(txt('Strain ε')) - q.e * 100) > 0.00051) return 'strain readout ' + txt('Strain ε') + ', now ' + q.e * 100; }
      return true; })()` },
    { name: "tension: elastic below yield (strain = stress/Y); unloading parallel to the elastic line; stress below the strength unless broken", fn: `(() => { ${pre}
      if (S.test !== 'tension') return true;
      const Yt = txt('Young'); if (Yt === null) return true;   /* hidden: Mystery metal or Blind */
      const Y = parseFloat(Yt) * 1e9, sy = parseFloat(txt('Yield stress')) * 1e6, su = parseFloat(txt('Tensile strength')) * 1e6;
      if (!(Y > 0)) return 'Y readout ' + Yt;
      for (const [e, s] of S.path) { if (!isFinite(e) || !isFinite(s)) return 'path has a bad point ' + e + ', ' + s;
        if (e < s / Y - 1e-9) return 'a path point (' + e + ', ' + s + ') has less strain than elastic: below the elastic line';
        if (s > su * 1.0001 + 1) return 'path stress ' + s + ' above the strength ' + su; }
      if (S.ep === 0 && !S.broke) { const lp = S.path[S.path.length - 1], q = { e: lp[0], s: lp[1] }; if (Math.abs(q.e - q.s / Y) > 1e-9 * Math.max(1, q.e) + 1e-12 && q.s < sy * 0.99) return 'elastic wire: strain ' + q.e + ', stress/Y ' + q.s / Y; }
      if (S.ep > 0 && !S.broke) { const lp = S.path[S.path.length - 1], q = { e: lp[0], s: lp[1] }; if (Math.abs(q.e - S.ep - q.s / Y) > 1e-9 * Math.max(1, q.e)) return 'strain ' + q.e + ' is not the plastic strain ' + S.ep + ' plus the elastic part ' + q.s / Y; }
      return true; })()` },
    { name: "shear and bulk: readings follow the linear laws from the modulus shown; stress readouts are F/A", fn: `(() => { ${pre}
      if (S.test === 'tension') return true;
      const F = S.F, Fk = parseFloat(txt('Force F')); if (Math.abs(Fk - F / 1000) > 0.0051) return 'force shows ' + txt('Force F') + ', state ' + F / 1000 + ' kN';
      const shear = S.test === 'shear', Mt = txt(shear ? 'Shear modulus' : 'Bulk modulus'); if (Mt === null) return true;   /* hidden */
      const Mod = parseFloat(Mt) * 1e9, L = 0.05, A = 0.0025, CA = Math.PI * 0.04 * 0.04 / 4, H = 0.1;
      if (shear) { const want = F * L / (Mod * A) * 1e6, got = parseFloat(txt('Top plate')); if (Math.abs(got - want) > 0.0501 + 1e-9) return 'Δx shows ' + got + ' um, physics ' + want;
        if (Math.abs(parseFloat(txt('Shear stress')) - F / A / 1e6) > 0.00051) return 'shear stress shows ' + txt('Shear stress'); return true; }
      if (Math.abs(parseFloat(txt('Pressure rise')) - F / CA / 1e6) > 0.00051) return 'pressure rise shows ' + txt('Pressure rise') + ', F/A ' + F / CA / 1e6;
      const vs = -F / CA / Mod, pd = txt('Piston moves'), ge = txt('Strain gauge');
      if (pd !== null && Math.abs(parseFloat(pd) - (-H * vs * 1000)) > 0.00051) return 'piston shows ' + pd + ', physics ' + (-H * vs * 1000);
      if (ge !== null && Math.abs(parseFloat(ge) - (Math.cbrt(1 + vs) - 1) * 1e6) > 0.051) return 'gauge shows ' + ge + ', physics ' + (Math.cbrt(1 + vs) - 1) * 1e6;
      return true; })()` },
  ],
  steps: [
    { name: 'tension: every material loaded in 1 kg steps past yield, unloaded, loaded to the break, new wire; thin and thick wire', fn: `(async () => {
      const SS = window.__ss, pause = (ms) => new Promise((r) => setTimeout(r, ms)), click = (sel) => { const b = document.querySelector(sel); if (b) b.click(); };
      const can = document.getElementById('can'), key = (k, shift) => can.dispatchEvent(new KeyboardEvent('keydown', { key: k, shiftKey: !!shift, bubbles: true, cancelable: true }));
      SS.setTest('tension'); await pause(100);
      for (const m of ['steel', 'copper', 'aluminium', 'mystery']) { click('#mats [data-m=' + m + ']'); await pause(60);
        for (const d of ['0.2', '1.2', '0.5']) { const sd = document.getElementById('sD'); sd.value = d; sd.dispatchEvent(new Event('input', { bubbles: true }));
          for (let i = 0; i < 30; i++) { key('ArrowUp', true); } await pause(40);
          for (let i = 0; i < 6; i++) key('ArrowDown', true); await pause(40); click('#unload'); await pause(40); click('#fresh'); await pause(40); } }
      for (const t of ['shear', 'bulk']) { SS.setTest(t); await pause(80);
        const ks = t === 'shear' ? ['aluminium', 'brass', 'copper', 'steel', 'glass', 'granite', 'mystery'] : ['water', 'ethanol', 'acetone', 'glycerin', 'mercury', 'mysteryLiquid', 'aluminium', 'copper', 'steel', 'lead', 'glass', 'mystery'];
        for (const k of ks) { SS.mat(k); for (let i = 0; i < 12; i++) key('ArrowUp', true); await pause(30); for (let i = 0; i < 3; i++) key('ArrowDown'); SS.setForce(0); } }
      SS.setTest('tension'); await pause(100);
    })()` },
  ],
};
