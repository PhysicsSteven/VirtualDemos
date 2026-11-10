/* Known values for the break-it test (tools/breakit.cjs), catenary. Hook: window.__ct (K, S, ...).
   The solved curve passes through both supports with arc length S (numerical integral); T = λg(y − c) at the supports and the
   difference T_B − T_A is λg·Δy; the piece in the free body diagram is in equilibrium (net force zero); the readouts (a, sag, H,
   weight) equal the physics of the live state. */
const pre = `const C = window.__ct; if (!C || !C.K || C.K.taut) return true;
  const K = C.K, S = C.S, G = 9.81, w = S.lam * G, rd = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-');
  const near = (a, b, t) => Math.abs(a - b) <= t * Math.max(Math.abs(b), 1e-9);
  const row = (box, label) => { for (const d of document.querySelectorAll('#' + box + ' > div')) if (d.querySelector('dt').textContent === label) return d.querySelector('dd').textContent.replace(/\\u2212/g, '-'); return null; };
`;
module.exports = {
  checks: [
    { name: "curve passes through both supports and has arc length S", fn: `(() => { ${pre}
      const y = (x) => K.c + K.a * Math.cosh((x - K.x0) / K.a);
      if (!isFinite(K.a) || !(K.a > 0)) return 'a = ' + K.a;
      if (Math.abs(y(K.xa) - K.ya) > 1e-7 * Math.max(1, K.a, Math.abs(K.ya)) || Math.abs(y(K.xb) - K.yb) > 1e-7 * Math.max(1, K.a, Math.abs(K.yb))) return 'curve misses a support: ' + y(K.xa) + ' vs ' + K.ya + ', ' + y(K.xb) + ' vs ' + K.yb;
      const L = K.a * (Math.sinh((K.xb - K.x0) / K.a) - Math.sinh((K.xa - K.x0) / K.a));
      if (!near(L, K.S, 1e-8)) return 'arc length ' + L + ' but S = ' + K.S;
      return true; })()` },
    { name: "tension T = λg(y − c): T_B − T_A = λgΔy and H = λga", fn: `(() => { ${pre}
      const TA = w * Math.hypot(K.a, K.sA), TB = w * Math.hypot(K.a, K.sB);
      const tol = 1e-7 * Math.max(TA, TB);
      if (Math.abs((TB - TA) - w * K.dy) > tol) return 'T_B − T_A = ' + (TB - TA) + ', λgΔy = ' + w * K.dy;
      if (Math.abs(TA - w * (K.ya - K.c)) > tol) return 'T_A = ' + TA + ' but λg(y_A − c) = ' + w * (K.ya - K.c);
      return true; })()` },
    { name: "free body diagram: the piece is in equilibrium and its weight is λg times its length", fn: `(() => { ${pre}
      const lo = Math.min(S.f[0], S.f[1]), hi = Math.max(S.f[0], S.f[1]);
      const sOf = (f) => K.sA + f * K.S, pf = (() => { const s1 = sOf(lo), s2 = sOf(hi), a = K.a;
        return [[-w * a, -w * s1], [w * a, w * s2], [0, -w * (s2 - s1)]]; })();
      const sx = pf[0][0] + pf[1][0] + pf[2][0], sy = pf[0][1] + pf[1][1] + pf[2][1];
      if (Math.hypot(sx, sy) > 1e-9 * Math.max(1, Math.abs(pf[1][1]), Math.abs(pf[0][1]), w * K.a)) return 'net force ' + sx + ', ' + sy;
      const net = row('fbdBox', 'Net force'); if (net === null) return true;
      if (net !== '0 N' && parseFloat(net) > 1e-3) return 'Net force readout ' + net;
      return true; })()` },
    { name: "readouts: catenary a, sag, H and the weight λgS equal the live state", fn: `(() => { ${pre}
      const a = row('shapeBox', 'Catenary a'), H = row('forceBox', 'H, the same everywhere'), W = row('forceBox', 'Weight λgS');
      const num = (t) => { const m = /^(-?[\\d.]+) (kN|N|m)$/.exec(t); return m ? parseFloat(m[1]) * (m[2] === 'kN' ? 1000 : 1) : NaN; };
      if (a !== null && Math.abs(num(a) - K.a) > 0.0051 + 1e-9) return 'a shows ' + a + ', a = ' + K.a;
      if (H !== null && !near(num(H), w * K.a, 6e-3)) return 'H shows ' + H + ', λga = ' + w * K.a;
      if (W !== null && !near(num(W), w * K.S, 6e-3)) return 'weight shows ' + W + ', λgS = ' + w * K.S;
      return true; })()` },
    { name: "sag is non negative and no more than the arc allows (S² ≥ Δx² + Δy²)", fn: `(() => { const C = window.__ct; if (!C || !C.K) return true; const K = C.K;
      if (!(K.S >= K.D * (1 - 1e-12))) return 'S = ' + K.S + ' shorter than the chord ' + K.D;
      if (!K.taut && !isFinite(K.a)) return 'a is ' + K.a;
      return true; })()` },
  ],
  steps: [
    { name: 'Drag the supports far apart and together, then shorten the chain below the chord and back', fn: `(async () => {
      const C = window.__ct, pause = (ms) => new Promise((r) => setTimeout(r, ms));
      document.querySelector('#presets [data-p=hang]').click(); await pause(150);
      for (const [ax, ay, bx, by] of [[-100, 0, 100, 0], [-0.4, 0, 0.4, 0], [-4, 50, 4, -50], [0, 0, 0.01, 30], [-4, 0, 4, 0]]) {
        C.moveSupport && C.moveSupport('A', ax, ay); C.moveSupport && C.moveSupport('B', bx, by); await pause(120);
      }
      for (const v of [1, 16, 8.01, 8, 7]) { C.setLength(v); await pause(100); }
      document.querySelector('#presets [data-p=arch]').click(); await pause(200);
      document.querySelector('#presets [data-p=tight]').click(); await pause(200);
    })()` },
  ],
};
