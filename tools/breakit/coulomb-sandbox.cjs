/* Known values for the break-it test (tools/breakit.cjs), coulomb-sandbox. Hook: window.__cs (charges, probe, potentialAt, fieldAt, potentialEnergy).
   With point charges only (no rod, ring, disk or arc): the probe readouts V and |E| and the direction equal an independent sum of
   k q/r and k q r_hat/r² (k = 8.9875517862e9, CODATA 2022) rounded as displayed (outside the 1.2 mm ball); E = -grad V by central
   difference at any probe position (any charges, also bodies); the energy readout equals the sum over pairs k q_i q_j / r_ij;
   a charge pair at large separation gives V = k q / r to the shown figures. */
const pre = `const C = window.__cs; if (!C || !C.probe) return true;
  const K = 8.9875517862e9, ch = C.charges, P = C.probe, rd = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-');
  const pts = ch.filter((c) => c.q && !c.kind), allPts = !ch.some((c) => c.kind);
  const nearCore = ch.some((c) => c.q && Math.hypot(P.x - c.x, P.y - c.y) < 0.2);
`;
module.exports = {
  checks: [
    { name: "V and |E| readouts equal the independent point charge sums (rounded as displayed)", fn: `(() => { ${pre}
      if (!allPts || !pts.length || nearCore) return true;
      let V = 0, ex = 0, ey = 0;
      for (const c of pts) { const dx = (P.x - c.x) / 100, dy = (P.y - c.y) / 100, r = Math.hypot(dx, dy), q = c.q * 1e-9; V += K * q / r; ex += K * q * dx / r ** 3; ey += K * q * dy / r ** 3; }
      const E = Math.hypot(ex, ey), t = rd('rV'), m = t.match(/^(-?[\\d.]+) (kV|V)$/);
      if (!m) return 'odd V text ' + t;
      const gv = +m[1] * (m[2] === 'kV' ? 1000 : 1), tv = Math.abs(V) >= 1000 ? 5.01 : 0.51;
      if (Math.abs(gv - V) > tv) return 'V shows ' + t + ', sum of kq/r = ' + V;
      const te = rd('rE'), n = te.match(/^([\\d.]+) (MV\\/m|kV\\/m|V\\/m)$/);
      if (!n) return 'odd E text ' + te;
      const ge = +n[1] * ({ 'MV/m': 1e6, 'kV/m': 1e3, 'V/m': 1 }[n[2]]), tol = E >= 1e6 ? 5.01e3 : E >= 1e5 ? 500.1 : E >= 1e3 ? 50.1 : 0.51;
      if (Math.abs(ge - E) > tol) return '|E| shows ' + te + ', vector sum = ' + E;
      if (E > 1e-3) { const d = rd('rDir').match(/^(\\d+)°/); if (d) { let w = Math.atan2(ey, ex) * 180 / Math.PI; if (w < 0) w += 360; if (Math.abs(((+d[1] - w + 540) % 360) - 180) > 0.5001 && E > 1) return 'direction shows ' + rd('rDir') + ', physics ' + w.toFixed(2); } }
      return true; })()` },
    { name: "E = -grad V by central difference at the probe (every charge kind)", fn: `(() => { ${pre}
      if (!ch.some((c) => c.q) || nearCore || ch.some((c) => c.kind && Math.hypot(P.x - c.x, P.y - c.y) < 0.5)) return true;
      const h = 1e-3, [ex, ey] = C.fieldAt(ch, P.x, P.y), E = Math.hypot(ex, ey);
      const gx = -(C.potentialAt(ch, P.x + h, P.y) - C.potentialAt(ch, P.x - h, P.y)) / (2 * h / 100), gy = -(C.potentialAt(ch, P.x, P.y + h) - C.potentialAt(ch, P.x, P.y - h)) / (2 * h / 100);
      if (!isFinite(E) || !isFinite(gx)) return 'non finite field ' + ex + ',' + ey;
      if (Math.hypot(gx - ex, gy - ey) > 1e-4 * Math.max(E, 1) + 1e-3) return 'E = (' + ex + ', ' + ey + ') but -grad V = (' + gx + ', ' + gy + ')';
      return true; })()` },
    { name: "energy readout equals the sum over pairs k q_i q_j / r_ij", fn: `(() => { ${pre}
      if (!allPts || !document.getElementById('blindTag').hidden) return true;
      let U = 0; for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) U += K * pts[i].q * 1e-9 * pts[j].q * 1e-9 / (Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y) / 100);
      const t = rd('rU'); if (pts.length < 2) return /no pairs/.test(t) || /^0 /.test(t) ? true : 'one charge but U shows ' + t;
      const m = t.match(/^(-?[\\d.eE+-]+) μJ$/); if (!m) return 'odd U text ' + t;
      return Math.abs(+m[1] - U * 1e6) <= 6e-4 * Math.abs(U * 1e6) + 1e-9 ? true : 'U shows ' + t + ', pair sum ' + (U * 1e6) + ' μJ'; })()` },
    { name: "work to bring +1 nC from far away equals the V readout (W = q V)", fn: `(() => { ${pre}
      if (!document.getElementById('blindTag').hidden || !pts.length || !allPts || nearCore) return true;
      const w = rd('rW').match(/^(-?[\\d.eE+-]+) μJ$/); if (!w) return true;
      const V = C.potentialAt(ch, P.x, P.y);
      return Math.abs(+w[1] - V * 1e-3) <= 6e-4 * Math.abs(V * 1e-3) + 1e-3 ? true : 'W shows ' + rd('rW') + ', 1 nC × V = ' + (V * 1e-3) + ' μJ'; })()` },
  ],
  steps: [
    { name: 'every preset, then drag the probe onto a charge, far away and back', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      for (const b of document.querySelectorAll('#presets button')) { b.click(); await pause(150); }
      const C = window.__cs, st = document.getElementById('stage') || document.querySelector('canvas'), r = st.getBoundingClientRect();
      const send = (type, x, y) => st.dispatchEvent(new PointerEvent(type, { clientX: r.left + x, clientY: r.top + y, pointerId: 1, bubbles: true, button: 0, buttons: type === 'pointerup' ? 0 : 1 }));
      for (const [x, y] of [[r.width / 2, r.height / 2], [5, 5], [r.width - 2, r.height - 2], [r.width / 2 + 0.3, r.height / 2]]) { send('pointerdown', x, y); send('pointermove', x + 1, y + 1); send('pointerup', x + 1, y + 1); await pause(120); }
    })()` },
  ],
};
