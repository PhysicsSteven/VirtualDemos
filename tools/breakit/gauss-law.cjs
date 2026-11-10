/* Known values for the break-it test (tools/breakit.cjs), gauss-law. Hook: window.__gl (F, sym, num, enclosed, symE, computeNum, mode).
   Any surface: the numerical flux through the closed surface equals Q_enc/ε0 (the flux the demo is about) when the quadrature
   converged and no charge is on the surface, and its outward and inward parts add up to the total; the exact position boxes
   #qX and #qY show the selected charge (to 0.01 cm) whenever they are not being typed in. Symmetry: the field laws behind the
   plots, from the live state: point charge kQ/r², shell 0 inside, ball kQr/R³ inside and kQ/r² outside, line λ/(2πε0 r),
   plane σ/(2ε0), and the field times the Gaussian area equals Q_enc/ε0. */
const pre = `const G = window.__gl; if (!G) return true;
  const EPS0 = 8.8541878188e-12, KC = 1 / (4 * Math.PI * EPS0), NC = 1e-9, CM = 1e-2, near = (a, b, t) => Math.abs(a - b) <= t * Math.abs(b) + 1e-300;
`;
module.exports = {
  checks: [
    { name: "any surface: numerical flux = Q_enc/ε0, outward + inward = total", fn: `(() => { ${pre}
      if (G.mode !== 'flux' || G.numMs > 150) return true;      /* a slow quadrature (a big freeform) is not recomputed at every probe */
      G.computeNum(); const n = G.num, enc = G.enclosed(); if (!n) return true;
      const want = enc.Q * NC / EPS0, scale = Math.max(enc.scale, 1e-30);
      if (!isFinite(n.total) || !isFinite(n.out) || !isFinite(n.inw)) return 'non finite flux ' + JSON.stringify([n.total, n.out, n.inw]);
      if (n.converged && Math.abs(n.total - want) > 1e-6 * scale) return 'numerical flux ' + n.total + ' but Q_enc/ε0 = ' + want + ' (scale ' + scale + ')';
      if (Math.abs(n.out + n.inw - n.total) > 1e-6 * scale) return 'out + in = ' + (n.out + n.inw) + ' but total ' + n.total;
      return true; })()` },
    { name: "the x and y boxes show the selected charge (0.01 cm) when not being typed in", fn: `(() => { ${pre}
      if (G.mode !== 'flux' || (G.running && G.F.motion)) return true;      /* a wandering charge: the boxes refresh on a timer */
      const c = G.F.sel && G.F.sel.kind === 'q' && G.F.charges.find((q) => q.id === G.F.sel.id), x = document.getElementById('qX'), y = document.getElementById('qY');
      if (document.activeElement === x || document.activeElement === y) return true;
      if (!c) return x.value === '' && y.value === '' && x.disabled && y.disabled ? true : 'no charge selected but x/y boxes show "' + x.value + '", "' + y.value + '"';
      if (Math.abs(parseFloat(x.value) - c.x) > 0.0051 || Math.abs(parseFloat(y.value) - c.y) > 0.0051) return 'x/y boxes show ' + x.value + ', ' + y.value + ' but the charge is at ' + c.x + ', ' + c.y;
      return true; })()` },
    { name: "symmetry: field laws (point, shell, ball, line, plane) and E times the Gaussian area = Q_enc/ε0", fn: `(() => { ${pre}
      if (G.mode !== 'sym') return true;
      const S = G.sym, k = S.kind;
      if (k === 'sphere') {
        const Q = S.Q * NC, R = S.R, sk = S.sk;
        for (const r of [0.5, 1.7, R * 0.5, R * 1.5, R * 3, 14]) {
          if (r <= 0) continue;
          let want; if (sk === 'point') want = KC * Q / (r * CM) ** 2; else if (sk === 'shell') want = r < R ? 0 : KC * Q / (r * CM) ** 2; else want = r < R ? KC * Q * (r * CM) / (R * CM) ** 3 : KC * Q / (r * CM) ** 2;
          const got = G.symE(r); if (!isFinite(got)) return 'E(' + r + ') = ' + got;
          if (Math.abs(got - want) > 1e-9 * Math.max(Math.abs(want), 1e-6 * Math.abs(KC * Q / (R * CM) ** 2))) return sk + ': E(' + r + ' cm) = ' + got + ', should be ' + want;
          const qenc = sk === 'point' || r >= R ? Q : sk === 'shell' ? 0 : Q * (r / R) ** 3;
          if (!near(got * 4 * Math.PI * (r * CM) ** 2, qenc / EPS0, 1e-9) && Math.abs(got * 4 * Math.PI * (r * CM) ** 2 - qenc / EPS0) > 1e-9 * Math.abs(Q / EPS0)) return sk + ': E·4πr² at ' + r + ' cm is not Q_enc/ε0';
        }
      } else if (k === 'line') {
        const lam = S.lam * NC; for (const r of [0.5, 2, 9]) { const want = lam / (2 * Math.PI * EPS0 * r * CM), got = G.symE(r); if (!near(got, want, 1e-9)) return 'line E(' + r + ') = ' + got + ', should be ' + want; }
      } else {
        const sig = S.sig * NC; for (const h of [0.5, 3, 9]) { const got = G.symE(h), want = sig / (2 * EPS0); if (!near(got, want, 1e-9)) return 'plane E(' + h + ') = ' + got + ', should be ' + want; }
      }
      return true; })()` },
  ],
  steps: [
    { name: 'Select a charge and type odd x and y, then Reset all state check, add and remove charges until empty, switch surfaces and setups', fn: `(async () => {
      const G = window.__gl, pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      const type = (id, v) => { const e = $(id); e.value = v; e.dispatchEvent(new Event('change', { bubbles: true })); };
      G.applyPreset('dipole'); await pause(200);
      for (const v of ['1e9', '-1e9', 'abc', '', '0', '0.004', '-0.006', '3.14159']) { type('qX', v); await pause(60); type('qY', v); await pause(60); }
      for (let i = 0; i < 12; i++) { $(i % 2 ? 'addNeg' : 'addPos').click(); await pause(40); }
      for (let i = 0; i < 20; i++) { $('delQ').click(); await pause(30); }
      type('qX', '2'); await pause(60);
      for (const s of ['box', 'cyl', 'free', 'sphere']) { document.querySelector('#surfSeg [data-s=' + s + ']').click(); await pause(150); }
      G.applyPreset('inside'); await pause(200);
    })()` },
    { name: 'Symmetry: every kind and every sphere type, Gaussian radius pushed to the ends, then back to Any surface', fn: `(async () => {
      const G = window.__gl, pause = (ms) => new Promise((r) => setTimeout(r, ms));
      document.querySelector('#modeSeg [data-m=sym]').click(); await pause(200);
      for (const k of ['sphere', 'line', 'plane']) { document.querySelector('#symSeg [data-k=' + k + ']').click(); await pause(150);
        if (k === 'sphere') for (const v of ['point', 'shell', 'ball']) { document.querySelector('#sphSeg [data-v=' + v + ']').click(); await pause(150); } }
      for (const p of ['ball', 'line', 'plane']) { G.applyPreset(p); await pause(150); }
      document.querySelector('#modeSeg [data-m=flux]').click(); await pause(200);
    })()` },
  ],
};
