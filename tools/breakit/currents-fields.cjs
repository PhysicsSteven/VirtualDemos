/* Known values for the break-it test (tools/breakit.cjs), currents-fields. Hook: window.__cf (S, amp, ...).
   Straight wires scene: Ampère's law, the numeric circulation of B round the Amperian loop equals μ0 times the enclosed current
   (to the quadrature tolerance), unless the loop passes through a wire; Newton's third law, the magnetic forces per length on all
   the wires add to zero; two wires obey F/L = μ0 I1 I2/(2πd) (checked from the live state, independent of the readout). */
const pre = `const C = window.__cf; if (!C || C.S.scene !== 'wires') return true;
  const S = C.S, MU0 = 4e-7 * Math.PI, W = S.wires;
  const B = (x, y, skip) => { let bx = 0, by = 0; for (const w of W) { if (w === skip || !w.I) continue; const dx = (x - w.x) * 0.01, dy = (y - w.y) * 0.01, r2 = dx * dx + dy * dy; if (!r2) continue; const f = MU0 * w.I / (2 * Math.PI * r2); bx -= f * dy; by += f * dx; } return [bx, by]; };
`;
module.exports = {
  checks: [
    { name: "Ampère's law: numeric ∮B·dl = μ0 I_enclosed (loop not on a wire)", fn: `(() => { ${pre}
      if (!S.amp) return true;
      const A = C.amp; if (A.on || !A.num) return true;
      const tol = 1e-8 * MU0 * Math.max(A.sumI, 1e-12);
      return Math.abs(A.num.v - MU0 * A.Ienc) <= tol ? true : 'circulation ' + A.num.v + ' but μ0 I_enc = ' + MU0 * A.Ienc + ' (Ienc ' + A.Ienc + ' A)'; })()` },
    { name: "Newton's third law: the forces per length on all wires add to zero", fn: `(() => { ${pre}
      let fx = 0, fy = 0, mag = 0;
      for (const w of W) { const b = B(w.x, w.y, w); fx += -w.I * b[1]; fy += w.I * b[0]; mag += Math.hypot(w.I * b[0], w.I * b[1]); }
      if (!isFinite(fx + fy)) return 'force is ' + fx + ',' + fy;
      return Math.hypot(fx, fy) <= 1e-9 * mag + 1e-18 ? true : 'net force ' + Math.hypot(fx, fy) + ' N/m'; })()` },
    { name: "two wires: F/L = μ0 I1 I2/(2πd) from the live positions, attract when the currents agree", fn: `(() => { ${pre}
      if (W.length !== 2 || !W[0].I || !W[1].I) return true;
      const d = Math.hypot(W[0].x - W[1].x, W[0].y - W[1].y) * 0.01; if (d < 1e-6) return true;
      const f = MU0 * W[0].I * W[1].I / (2 * Math.PI * d), b = B(W[1].x, W[1].y, W[1]);
      const fy = W[1].I * b[0], fx = -W[1].I * b[1], toward = (W[0].x - W[1].x) * fx + (W[0].y - W[1].y) * fy;
      if (Math.abs(Math.hypot(fx, fy) - Math.abs(f)) > 1e-9 * Math.abs(f)) return '|F/L| = ' + Math.hypot(fx, fy) + ', formula ' + Math.abs(f);
      return (toward > 0) === (f > 0) ? true : 'direction of the force disagrees with the sign of I1 I2'; })()` },
  ],
  steps: [
    { name: 'Straight wires: Amperian loop on, drag the loop and wires through each other, flip every current, then max currents', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), C = window.__cf;
      const a = document.getElementById('ampBtn'); if (a && !C.S.amp) a.click();
      await pause(200);
      for (const w of C.S.wires) { w.x = C.S.loop.x + C.S.loop.r; w.y = C.S.loop.y; await pause(100); }
      for (const w of C.S.wires) { w.x = C.S.loop.x; w.y = C.S.loop.y; await pause(100); }
      const fl = document.getElementById('flipW'); if (fl) for (let i = 0; i < 4; i++) { fl.click(); await pause(60); }
      await pause(200);
    })()` },
  ],
};
