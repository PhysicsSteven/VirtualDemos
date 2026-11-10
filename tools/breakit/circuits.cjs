/* Known values for the break-it test (tools/breakit.cjs), circuits. Hook: window.__circ (els, mode, run, preset, edited, volt, energyTotals, ...).
   DC: Kirchhoff's current law holds at every net that touches only resistors and bulbs (currents from Ohm's law and the shown node
   voltages); the unedited Series bulbs setup carries 12 V / 40 ohm = 0.300 A and the voltage divider reads 12 x 1000 / 3200 = 3.75 V.
   Time: the energy ledger closes (initial store + work by sources + meter work = stored + heat + spill); RC charging preset has tau = R C = 1.0 s (its ghost run, R1 = 33 kohm, 3.3 s).
   Reset all brings back the setup the page opened with (the page writes the setup into the address; see demos/circuits.html). */
const pre = `const C = window.__circ; if (!C) return true;
  const kp = (p) => p[0] + ',' + p[1], close = (a, b, r) => Math.abs(a - b) <= r * Math.max(Math.abs(b), 1e-12);
`;
module.exports = {
  checks: [
    { name: "DC: KCL at every net of resistors and bulbs (Ohm's law from the node voltages)", fn: `(() => { ${pre}
      if (C.mode !== 'dc' || !C.dc) return true;
      const els = C.els, par = new Map(), f = (k) => { while (par.get(k) !== k) k = par.get(k); return k; };
      const add = (k) => { if (!par.has(k)) par.set(k, k); };
      for (const e of els) for (const p of [e.a, e.b]) add(kp(p));
      for (const e of els) if (e.type === 'wire') par.set(f(kp(e.a)), f(kp(e.b)));
      const net = new Map(), bad = new Set();
      for (const e of els) {
        const A = f(kp(e.a)), B = f(kp(e.b));
        if (e.type === 'wire') continue;
        if (e.type !== 'res' && e.type !== 'bulb') { bad.add(A); bad.add(B); continue; }
        const I = (C.volt(e.a) - C.volt(e.b)) / e.R; if (!isFinite(I)) { bad.add(A); bad.add(B); continue; }
        net.set(A, (net.get(A) || 0) + I); net.set(B, (net.get(B) || 0) - I);
      }
      for (const [k, s] of net) if (!bad.has(k) && Math.abs(s) > 1e-9 * 12 / 1) return 'KCL fails at net ' + k + ': the currents sum to ' + s + ' A';
      return true; })()` },
    { name: "DC presets: Series bulbs 0.300 A, voltage divider reads 3.75 V", fn: `(() => { ${pre}
      if (C.mode !== 'dc' || !C.dc || C.edited) return true;
      if (C.preset === 'series') {
        const b = C.els.find((e) => e.type === 'bat'); if (!b || b.emf !== 12) return true;
        const r = C.els.filter((e) => e.type === 'bulb' || e.type === 'res'); if (!r.length) return true;
        const Rt = r.reduce((s, e) => s + e.R, 0), I = (C.volt(r[0].a) - C.volt(r[0].b)) / r[0].R;
        if (Rt === 40 && !close(Math.abs(I), 0.3, 1e-6)) return 'Series bulbs: I = ' + I + ', should be 0.3 A';
      }
      if (C.preset === 'divider') { const v = C.els.find((e) => e.type === 'vm'); if (v) { const d = C.volt(v.a) - C.volt(v.b); if (Number.isFinite(d) && !close(Math.abs(d), 3.75, 1e-6)) return 'divider voltmeter reads ' + d + ' V, should be 3.75'; } }
      return true; })()` },
    { name: "Time: the energy ledger closes; RC charging preset has tau = 1.0 s", fn: `(() => { ${pre}
      if (C.mode !== 'time' || !C.run) return true;
      if (C.preset === 'rc' && !C.edited) { const R = C.byName('R1'), K = C.byName('C1'); if (R && K && !close(R.R * K.C, 1, 1e-9)) return 'tau = ' + R.R * K.C + ' s'; }
      let o; try { o = C.energyTotals(); } catch (e) { return 'energyTotals threw ' + e.message; }
      const sc = Math.max(Math.abs(o.U0), Math.abs(o.W), o.H, o.UC, o.UL, o.Sp, 1e-12);
      if (!Number.isFinite(o.check)) return 'energy check is ' + o.check;
      return Math.abs(o.check) <= 1e-6 * sc + 1e-15 ? true : 'energy ledger is off by ' + o.check + ' J (scale ' + sc + ')'; })()` },
  ],
  steps: [
    { name: 'every setup in every mode, undo and redo, Clear all, undo, switch modes while running', fn: `(async () => {
      const C = window.__circ, pause = (ms) => new Promise((r) => setTimeout(r, ms));
      for (const m of ['dc', 'time', 'ac']) {
        C.setMode(m, true); await pause(150);
        for (const b of [...document.querySelectorAll('#presets button')]) { b.click(); await pause(120); }
      }
      for (let i = 0; i < 6; i++) { C.undo(); await pause(40); }
      for (let i = 0; i < 6; i++) { C.redo(); await pause(40); }
      document.getElementById('clearAll').click(); await pause(150); C.undo(); await pause(150);
      for (const m of ['time', 'ac', 'dc', 'ac', 'time']) { C.setMode(m, true); await pause(120); }
      C.applyPreset('series'); await pause(200);
    })()` },
  ],
};
