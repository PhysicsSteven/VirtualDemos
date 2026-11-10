/* Known values for the break-it test (tools/breakit.cjs), relativity-em. Hook: window.__relem (S, wp, core, applyPreset, ...).
   Wire: the lab wire is neutral (net lambda 0); the transverse force on the charge transforms as F(f) = F(lab) / (gamma_f (1 - f u))
   in any frame f (lab, the charge's frame, 0.9c either way); the net line density from the closed form equals the sum of the two
   lines and the current from the closed form equals that of the two moving lines; the shown forces equal the physics of the
   current settings. Moving charge: E ahead = kq(1 - b^2)/r^2, E sideways = gamma kq/r^2, cB = b x E. Fields: E.cB and
   E^2 - c^2B^2 do not change under a boost. Magnet and loop: EMF'/EMF shown equals gamma (1 within 1e-6 for the slow scale). */
const pre = `const R = window.__relem; if (!R || !R.core) return true; const S = R.S, C = R.core, C0 = 299792458;
  const near = (a, b, t, s) => Math.abs(a - b) <= t * Math.max(Math.abs(b), s || 0);
  const rd = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-');
  const SI = { G: 1e9, M: 1e6, k: 1e3, '': 1, m: 1e-3, 'μ': 1e-6, n: 1e-9, p: 1e-12 };
  const val = (t, unit) => { const m = t.match(new RegExp('^([+-]?[\\\\d.]+) ?([GMkmμnp]?)' + unit)); return m ? parseFloat(m[1]) * SI[m[2]] : NaN; };
`;
module.exports = {
  checks: [
    { name: "wire: lab wire neutral; F transforms as F/(gamma_f (1 - f u)); closed forms equal the sums", fn: `(() => { ${pre}
      if (S.view !== 'wire') return true;
      const P = R.wp(), L = C.wireForce(P.lam0, P.v, P.u, P.q, P.r, 0);
      if (Math.abs(L.lamNet) > 1e-12 * P.lam0 || Math.abs(L.lamSum) > 1e-12 * P.lam0) return 'lab wire not neutral: ' + L.lamNet + ', ' + L.lamSum;
      if (L.FE !== 0 && Math.abs(L.FE) > 1e-12 * Math.abs(L.FM)) return 'electric force in the lab: ' + L.FE;
      for (const f of [P.u, 0.9, -0.9, 0.3, -P.u]) { if (!(Math.abs(f) < 1)) continue;
        const W = C.wireForce(P.lam0, P.v, P.u, P.q, P.r, f), gf = 1 / Math.sqrt(1 - f * f), want = L.F / (gf * (1 - f * P.u));
        if (!isFinite(W.F)) return 'F is ' + W.F + ' in frame ' + f;
        if (!near(W.F, want, 1e-6)) return 'in frame f = ' + f + ' F = ' + W.F + ', but F_lab/(gamma(1 - f u)) = ' + want;
        if (P.v > 1e-3 && Math.abs(W.f) < 0.999 && !near(W.lamSum, W.lamNet, 1e-5, P.lam0 * 1e-9)) return 'net lambda ' + W.lamNet + ' vs sum ' + W.lamSum + ' at f = ' + f;
        if (P.v > 1e-3 && !near(W.Isum, W.I, 1e-5, 1e-9 * Math.abs(P.lam0 * C0))) return 'current ' + W.I + ' vs ' + W.Isum + ' at f = ' + f; }
      return true; })()` },
    { name: "wire: shown F (lab) and F' (charge frame) equal the physics of the settings", fn: `(() => { ${pre}
      if (S.view !== 'wire' || R.boosting()) return true;
      const P = R.wp(), L = C.wireForce(P.lam0, P.v, P.u, P.q, P.r, 0), Q = C.wireForce(P.lam0, P.v, P.u, P.q, P.r, P.u);
      const a = val(rd('rF'), 'N'), b = val(rd('rFp'), 'N');
      if (isFinite(a) && !near(a, L.F, 6e-4)) return 'F shows ' + rd('rF') + ', physics ' + L.F;
      if (isFinite(b) && !near(b, Q.F, 6e-4)) return "F' shows " + rd('rFp') + ', physics ' + Q.F;
      return true; })()` },
    { name: "moving charge: E ahead (1 - b^2) kq/r^2, sideways gamma kq/r^2, cB = b x E", fn: `(() => { ${pre}
      for (const b of [S.bp, 0, 0.5, 0.99, 0.999999, -0.8]) { if (!(Math.abs(b) < 1)) continue;
        const q = 1e-9, KC = 1 / (4 * Math.PI * 8.8541878188e-12), g = 1 / Math.sqrt(1 - b * b), a = C.movingCharge(q, b, 1, 0, 0), s = C.movingCharge(q, b, 0, 1, 0);
        if (!near(a.E[0], KC * q * (1 - b * b), 1e-9)) return 'E ahead at b = ' + b + ': ' + a.E[0];
        if (!near(s.E[1], g * KC * q, 1e-9)) return 'E sideways at b = ' + b + ': ' + s.E[1];
        if (!near(s.cB[2], b * s.E[1], 1e-9) || Math.abs(a.cB[1]) + Math.abs(a.cB[2]) > 1e-12 * KC * q) return 'cB is not b x E at b = ' + b; }
      return true; })()` },
    { name: "fields: E.cB and E^2 - c^2B^2 are invariants of a boost", fn: `(() => { ${pre}
      const inv = (E, B) => [E[0] * B[0] + E[1] * B[1] + E[2] * B[2], E[0] ** 2 + E[1] ** 2 + E[2] ** 2 - B[0] ** 2 - B[1] ** 2 - B[2] ** 2];
      const cases = [[[1, 2, 3], [4, -5, 6]], S.xE && S.xB ? [S.xE, S.xB.map((x) => x * 1e-3 * C0 / 1e3)] : [[0, 0, 0], [0, 0, 1]]];
      for (const [E, B] of cases) for (const b of [S.xb || 0.6, 0.1, -0.7, 0.99, 0.9999]) { if (!(Math.abs(b) < 1)) continue;
        const o = C.boostFields(E, B, b), a = inv(E, B), c = inv(o[0], o[1]), sc = E.concat(B).reduce((s, x) => s + x * x, 0) * (1 / (1 - b * b));
        if (Math.abs(a[0] - c[0]) > 1e-9 * sc || Math.abs(a[1] - c[1]) > 1e-9 * sc) return 'invariants changed at b = ' + b + ': ' + a + ' -> ' + c; }
      return true; })()` },
    { name: "magnet and loop: EMF'/EMF shown equals gamma (slow scale: 1)", fn: `(() => { ${pre}
      if (S.view !== 'magnet' || R.boosting() || document.getElementById('mRatio').closest('[hidden]')) return true;
      const t = rd('mRatio'), g = rd('mG'); if (t === '—') return true;
      const r = parseFloat(t); if (!isFinite(r)) return 'ratio shows ' + t;
      if (S.mscale === 'slow') return Math.abs(r - 1) < 1e-6 ? true : 'slow scale: EMF\\'/EMF = ' + t;
      const gm = parseFloat(g); return Math.abs(r - gm) < 2e-5 * gm ? true : 'EMF\\'/EMF = ' + t + ' but gamma = ' + g; })()` },
  ],
  steps: [
    { name: 'every preset, both scales, current and radius to their limits, a frame switch in the middle of the boost, back to the lab', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); if (!e) return; e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      for (const b of document.querySelectorAll('#presets button')) { b.click(); await pause(250); }
      document.querySelector('#presets [data-p=fast]').click(); await pause(150);
      const rng = [...document.querySelectorAll('input[type=range]')].filter((e) => e.offsetParent);
      for (const e of rng) for (const v of [e.max, e.min, e.max]) { e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); await pause(40); }
      const fr = [...document.querySelectorAll('button')].filter((b) => b.offsetParent && /frame|charge|loop|S′|S'/i.test(b.textContent) && !/reset|export|print/i.test(b.textContent));
      for (let i = 0; i < 6; i++) for (const b of fr.slice(0, 3)) { b.click(); await pause(30); }
      document.querySelector('#presets [data-p=lab]').click(); await pause(200);
    })()` },
    { name: 'real scale then fast scale then magnet at the relativistic scale and back, with Play on and off', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), pl = document.getElementById('play');
      document.querySelector('#presets [data-p=real]').click(); await pause(200); pl.click(); await pause(200);
      document.querySelector('#presets [data-p=magnet]').click(); await pause(200);
      for (const b of document.querySelectorAll('button[data-mscale], #mscale button, [data-ms]')) { b.click(); await pause(150); }
      pl.click(); await pause(200);
      document.querySelector('#presets [data-p=xform]').click(); await pause(150);
      document.querySelector('#presets [data-p=lab]').click(); await pause(200);
    })()` },
  ],
};
