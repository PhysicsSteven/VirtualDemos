/* Known values for the break-it test (tools/breakit.cjs), ripple-tank. Hook: window.__rt (S, T, lam, lineInfo, orbitAt, PRESETS, ...).
   The wavelength satisfies the water's dispersion relation ω² = (g k + σ k³/ρ) tanh(k d) for the shown f and depth, with the cited
   g, σ, ρ; the readouts (period, λ, c = fλ, line length and angle, quiet-line angles, Snell angle) equal the physics of the live
   state (skipped while it runs: readouts refresh on a timer); the water height stays finite and under 5 mm (the waves are 0.5 mm);
   the side view's orbit ellipses have b/a = tanh k(d - s) and the surface half width and height are A; the deep water preset
   really has d > λ/2 and the shallow one d/λ near 0.1, as their hints say; the preset hints' numbers (spacing, slit width) match. */
const pre = `const R = window.__rt; if (!R) return true;
  const S = R.S, T = R.T, near = (g, w, t) => Math.abs(g - w) <= t * Math.max(Math.abs(w), 1e-300);
  const num = (s) => parseFloat(String(s).replace(/\\u2212/g, '-'));
  const row = (re) => { const d = [...document.querySelectorAll('#out dt')].find((x) => re.test(x.textContent.trim())); return d ? d.nextElementSibling.textContent.trim().replace(/\\u2212/g, '-') : null; };
`;
module.exports = {
  checks: [
    { name: "dispersion relation: ω² = (g k + σ k³/ρ) tanh(k d) for the shown λ (g 9.81, σ 72.74 mN/m, ρ 998.2)", fn: `(() => { ${pre}
      for (const d of [S.deep, S.plate]) { if (!(d > 0)) continue; const l = R.lam(d) * 1e-3, k = 2 * Math.PI / l, w = 2 * Math.PI * S.f;
        const rhs = (9.81 * k + 0.07274 / 998.2 * k ** 3) * Math.tanh(k * d * 1e-3); if (!isFinite(l) || !near(w * w, rhs, 1e-9)) return 'f = ' + S.f + ' Hz, d = ' + d + ' mm: ω² = ' + w * w + ' but the dispersion relation gives ' + rhs; }
      if (S.plate < S.deep && !(R.lam(S.plate) < R.lam(S.deep))) return 'shallower water should have the shorter wavelength';
      return true; })()` },
    { name: "readouts: f, period, λ, c = fλ, line length and angle equal the state", fn: `(() => { ${pre}
      if (S.run || S.blind) return true;
      if (Math.abs(num(row(/^Frequency/)) - S.f) > 0.051) return 'frequency readout ' + row(/^Frequency/);
      if (S.look === 'side') { const l = num(row(/^Wavelength/)); return Math.abs(l - R.lam(S.deep)) <= 0.0051 ? true : 'side view λ shows ' + l + ', ' + R.lam(S.deep); }
      if (Math.abs(num(row(/^Period/)) - 1000 / S.f) > 0.051) return 'period shows ' + row(/^Period/) + ', 1000/f = ' + 1000 / S.f;
      const lw = num(row(/^Water [\\d.]+ mm deep: λ/)), c = num(row(/^wave speed/));
      if (Math.abs(lw - R.lam(S.deep)) > 0.0051) return 'λ shows ' + lw + ', dispersion relation ' + R.lam(S.deep);
      if (Math.abs(c - S.f * R.lam(S.deep) / 1000) > 0.00051) return 'c shows ' + c + ', fλ = ' + S.f * R.lam(S.deep) / 1000;
      const ln = R.lineInfo(); if (Math.abs(num(row(/^Line A to B/)) - ln.L) > 0.051) return 'length shows ' + row(/^Line A to B/) + ', ' + ln.L;
      if (Math.abs(num(row(/^angle θ/)) - ln.th) > 0.051 && Math.abs(Math.abs(num(row(/^angle θ/)) - ln.th) - 360) > 0.051) return 'angle shows ' + row(/^angle θ/) + ', ' + ln.th;
      return true; })()` },
    { name: "quiet lines d sin θ = (m + ½)λ and the Snell angle equal the readouts", fn: `(() => { ${pre}
      if (S.run || S.blind || S.look === 'side') return true;
      const lw = R.lam(S.deep), lp = R.lam(S.plate), g = S.geo, fa = (lam, d) => { const o = []; for (let m = 0; (m + 0.5) * lam < d; m++) o.push(+(Math.asin((m + 0.5) * lam / d) * 180 / Math.PI).toFixed(1)); return o; };
      let d = null; if (S.src === 'two' && !g) d = S.sep; if (g && g.kind === 'slits' && g.n === 2) d = S.d;
      if (d != null) { const t = row(/^Quiet lines, d sin/); if (t == null) return 'no quiet line readout'; const got = t === 'none' ? [] : t.split(',').map((x) => Math.abs(num(x.replace('±', '')))), want = fa(lw, d);
        if (got.length !== want.length || got.some((v, i) => Math.abs(v - want[i]) > 0.051)) return 'quiet lines show "' + t + '", d sin θ = (m+½)λ gives ' + want.join(', '); }
      if (g && g.kind === 'edge' && S.edge > 0) { const t = row(/^Snell/); if (t == null) return true; const want = Math.asin(Math.sin(S.edge * Math.PI / 180) * lp / lw) * 180 / Math.PI;
        if (Math.abs(num(t) - want) > 0.051) return 'Snell angle shows ' + t + ', sin θ2 = sin θ1 λ2/λ1 gives ' + want; if (!(want < S.edge)) return 'refracted angle should be below the incident angle'; }
      return true; })()` },
    { name: "water height finite and under 5 mm; 0.5 mm waves stay small", fn: `(() => { ${pre}
      const h = T.h; let m = 0; for (let i = 0; i < h.length; i++) { const v = h[i]; if (!isFinite(v)) return 'water height is ' + v + ' at cell ' + i; if (Math.abs(v) > m) m = Math.abs(v); }
      return m < 5e-3 ? true : 'the water height reached ' + m * 1000 + ' mm (the waves are 0.5 mm): the scheme blew up'; })()` },
    { name: "side view orbits: b/a = tanh k(d - s); surface half width and height are the wave height; preset hints match", fn: `(() => { ${pre}
      const MM = 1e-3, A = 0.5e-3, d = S.deep * MM;
      for (const s of [0, 0.3 * d, 0.7 * d, d]) { const o = R.orbitAt(S.f, d, s, A); if (!near(o.b / o.a, Math.tanh(o.k * (d - s)), 1e-9) && !(o.a === 0)) return 'b/a at s = ' + s + ' is ' + o.b / o.a + ', tanh k(d-s) = ' + Math.tanh(o.k * (d - s)); }
      const o0 = R.orbitAt(S.f, d, 0, A);
      if (!near(o0.b, A, 1e-9)) return 'surface half height ' + o0.b + ' is not A';
      const P = R.PRESETS, lamOf = (f, dd) => 2 * Math.PI / (function (f, dd) { const w2 = (2 * Math.PI * f) ** 2; let k = w2 / 9.81; for (let i = 0; i < 100; i++) { const th = Math.tanh(k * dd), F = (9.81 * k + 0.07274 / 998.2 * k ** 3) * th - w2, dF = (9.81 + 3 * 0.07274 / 998.2 * k * k) * th + (9.81 * k + 0.07274 / 998.2 * k ** 3) * dd * (1 - th * th); k -= F / dF; } return k; })(f, dd);
      const sd = P.sideDeep, ss = P.sideShallow; if (sd.f !== 16 || sd.deep !== 12 || ss.f !== 6 || ss.deep !== 3) return 'side presets changed';
      if (!(sd.deep * MM > lamOf(16, 12 * MM) / 2)) return 'sideDeep is not deep water (d > λ/2)';
      const r = ss.deep * MM / lamOf(6, 3 * MM); if (Math.abs(r - 0.1) > 0.02) return 'sideShallow d/λ = ' + r + ', its hint says a tenth of a wavelength';
      if (P.two.sep !== 40 || P.single.a !== 30 || P.double.a !== 8 || P.double.d !== 45) return 'preset spacings no longer match their hints';
      return true; })()` },
  ],
  steps: [
    { name: 'every preset, run a moment, change f and depth mid run, slits to their limits, then side view and back', fn: `(async () => {
      const R = window.__rt, p = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      for (const k of Object.keys(R.PRESETS)) { const b = document.querySelector('#presets [data-p=' + k + ']'); if (b) { b.click(); R.setRun(true); await p(250); } }
      document.querySelector('#presets [data-p=double]').click(); R.setRun(true);
      for (const [id, v] of [['sF', '20'], ['sDeep', '3'], ['sPlate', '1'], ['sA', '4'], ['sD', '90'], ['sF', '6'], ['sDeep', '12'], ['sA', '60'], ['sD', '20']]) { set(id, v); await p(200); }
      for (const k of ['sideDeep', 'sideShallow', 'plane']) { const b = document.querySelector('#presets [data-p=' + k + ']'); if (b) { b.click(); await p(300); } }
      R.setRun(false);
    })()` },
  ],
};
