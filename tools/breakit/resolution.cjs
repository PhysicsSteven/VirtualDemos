/* Known values for the break-it test (tools/breakit.cjs), resolution. Hook: window.__rs (S, Iexact, ring1, sepAngle, Dnow, ...).
   Far field setups: the readout I/I₀ at the cursor equals the sum of independent Airy patterns [2J₁(x)/x]² (J₁ from Bessel's integral,
   written here again); the first dark ring is the first zero of J₁ (x = 3.8317); the Rayleigh ratio, the verdict and the dip match the
   settings (the dip is 26.5 % at the Rayleigh limit); the eye, Hubble and camera readouts follow from 1.22 λ/D.
   Near field setups: N_F = D²/4λL, the zone count, the center intensity 4 sin²(πN_F/2) (hole) or 1 (disk, the Poisson spot). */
const pre = `const R = window.__rs; if (!R) return true; const S = R.S, c = S.cfg[S.setup]; if (!c) return true;
  const fr = S.setup === 'near' || S.setup === 'disk', isDisk = S.setup === 'disk', two = ['two','eye','telescope','camera'].includes(S.setup);
  const n = two ? c.n : 1, D = R.Dnow(), lam = c.lam * 1e-9, L = S.setup === 'camera' ? 0.050 : c.L, screen = ['pinhole','mystery','camera'].includes(S.setup);
  const rd = (p) => { const d = [...document.querySelectorAll('#out div')].find((x) => x.querySelector('dt').textContent.startsWith(p)); return d ? d.querySelector('dd').textContent.replace(/−/g, '-') : null; };
  const J1 = (x) => { const N = Math.ceil(Math.abs(x)) + 60, h = Math.PI / N; let s = 0.5 * (1 - 1); s = 0.5 * (Math.cos(0) + Math.cos(Math.PI)); for (let k = 1; k < N; k++) { const t = k * h; s += Math.cos(t - Math.abs(x) * Math.sin(t)); } return Math.sign(x || 1) * s * h / Math.PI; };
  const airy = (x) => { x = Math.abs(x); if (x < 1e-6) return 1; const v = 2 * J1(x) / x; return v * v; };
  const ang = (d) => (screen ? Math.atan2(Math.abs(d), L) : Math.abs(d));
  const X = (d) => Math.PI * D * Math.sin(ang(d)) / lam;
  const near = (a, b, t) => Math.abs(a - b) <= t * Math.max(Math.abs(b), 1e-12);
  const hide = (v) => v == null || /hidden|unknown/.test(v);
`;
module.exports = {
  checks: [
    { name: "far field: I/I₀ at the cursor is the sum of Airy patterns; the first dark ring is the first zero of J₁", fn: `(() => { ${pre}
      if (fr) return true;
      const cs = n === 2 ? [-1, 1].map((s) => s * (S.setup === 'camera' ? c.sepv * 1e-6 : R.sepAngle()) / 2) : [0];
      let want = 0; for (const o of cs) want += airy(X(c.cur - o));
      const got = parseFloat(rd('Intensity at the cursor')); if (Math.abs(got - want) > 6e-5) return 'cursor I/I₀ shows ' + got + ', Airy sum ' + want + ' (' + S.setup + ')';
      if (Math.abs(R.Iexact(c.cur) - want) > 1e-9) return 'Iexact ' + R.Iexact(c.cur) + ' vs ' + want;
      if (Math.abs(X(R.ring1()) - 3.8317059702) > 1e-6) return 'ring1 is at x = ' + X(R.ring1()) + ', not 3.8317';
      return true; })()` },
    { name: "far field: θ₁ = 1.22 λ/D, the ring on the screen, Airy disk 2.44 λN, Rayleigh ratio, verdict, dip", fn: `(() => { ${pre}
      if (fr) return true;
      const th1 = 1.22 * lam / D, t = rd('First dark ring θ₁');
      if (!hide(t) && !near(parseFloat(t), th1 * 1e6, 2e-3)) return 'θ₁ shows ' + t + ', 1.22 λ/D = ' + th1 * 1e6 + ' µrad';
      if (screen && S.setup !== 'camera') { const r = rd('First dark ring on the screen'); if (!hide(r) && !near(parseFloat(r), L * Math.tan(Math.asin(3.8317059702 / Math.PI * lam / D)) * 1e3, 2e-3)) return 'ring on screen shows ' + r; }
      if (S.setup === 'camera') { const a = rd('Airy disk diameter'); if (!hide(a) && !near(parseFloat(a), 2.44 * lam * c.N * 1e6, 2e-3)) return 'Airy disk ' + a + ', 2.44 λN = ' + 2.44 * lam * c.N * 1e6; }
      if (n !== 2 || S.blind) return true;
      const sep = R.sepAngle(), ratio = sep / th1, v = rd("Rayleigh's criterion");
      if (v == null) return 'no Rayleigh row';
      if (!near(parseFloat(v), ratio, 1.5e-3) && Math.abs(parseFloat(v) - ratio) > 6e-4) return 'ratio shows ' + v + ', sep/θ₁ = ' + ratio;
      const word = /not resolved/.test(v) ? 'no' : /just resolved/.test(v) ? 'just' : /resolved/.test(v) ? 'yes' : '?';
      if (Math.abs(ratio - 1) > 0.012 && word !== (ratio > 1 ? 'yes' : 'no')) return 'verdict "' + v + '" at ratio ' + ratio;
      if (S.setup === 'eye' && !hide(rd('Farthest distance'))) { const k = parseFloat(rd('Farthest distance')), want = 0.65 / Math.tan(th1 / 2) / 1000; if (!near(k, want, 6e-3)) return 'farthest distance ' + k + ' km, should be ' + want; }
      if (S.setup === 'telescope' && !hide(rd('Closest stars'))) { const k = parseFloat(rd('Closest stars')), want = th1 * 2.48e6; if (!near(k, want, 6e-3)) return 'closest stars ' + k + ' ly, should be ' + want; }
      return true; })()` },
    { name: "dip midway matches the Airy sum (26.5 % at the Rayleigh limit)", fn: `(() => { ${pre}
      if (fr || n !== 2 || S.blind || S.setup === 'mystery') return true;
      const dipT = rd('Dip midway'); if (hide(dipT)) return true;
      const sep = R.sepAngle(), A = (t) => airy(Math.PI * D * Math.sin(Math.abs(t)) / lam);
      const f = (t) => A(t - sep / 2) + A(t + sep / 2);
      let best = 0; for (let i = 0; i <= 600; i++) best = Math.max(best, f(sep * i / 600));
      const want = 100 * (1 - f(0) / best), got = parseFloat(dipT);
      return Math.abs(got - want) <= 0.06 ? true : 'dip shows ' + got + ' %, Airy sum gives ' + want.toFixed(2) + ' %'; })()` },
    { name: "near field: N_F = D²/4λL, zones, center intensity 4 sin²(πN_F/2) or the Poisson spot", fn: `(() => { ${pre}
      if (!fr) return true;
      const NF = D * D / (4 * lam * L), z = (Math.hypot(L, D / 2) - L) / (lam / 2);
      if (!near(parseFloat(rd('Fresnel number')), NF, 2e-3) && Math.abs(parseFloat(rd('Fresnel number')) - NF) > 6e-4) return 'N_F shows ' + rd('Fresnel number') + ', should be ' + NF;
      if (!S.blind) { const zt = rd('Fresnel zones'); if (!near(parseFloat(zt), z, 2e-3) && Math.abs(parseFloat(zt) - z) > 6e-4) return 'zones ' + zt + ', should be ' + z; }
      const full = parseFloat(rd('At the center, from the full calculation')), want = isDisk ? 1 : 4 * Math.sin(Math.PI * NF / 2) ** 2;
      if (Math.abs(full - want) > 4e-3) return 'center intensity ' + full + ', ' + (isDisk ? 'Poisson spot 1' : '4 sin²(πN_F/2)') + ' = ' + want + ' (D ' + D + ', L ' + L + ')';
      if (Math.abs(R.Iexact(0) - full) > 1e-3) return 'Iexact(0) = ' + R.Iexact(0) + ' but the readout says ' + full;
      return true; })()` },
  ],
  steps: [
    { name: 'every setup at its slider extremes with two sources, then Blind, then the mystery pinhole re-rolled', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      for (const p of ['two', 'eye', 'telescope', 'camera']) {
        document.querySelector('#presets [data-p=' + p + ']').click(); await pause(120);
        const D = document.getElementById('sD'), sp = document.getElementById('sSep');
        for (const [d, s] of [[D.min, sp.min], [D.max, sp.max], [D.min, sp.max], [D.max, sp.min]]) { set('sD', d); set('sSep', s); await pause(120); }
        document.querySelector('#zoomSeg [data-z="8"]')?.click(); await pause(100); set('sCur', document.getElementById('sCur').max); await pause(100);
      }
      document.getElementById('labBlind').click(); await pause(100); document.getElementById('labBlind').click();
      document.querySelector('#presets [data-p=mystery]').click(); await pause(100);
      for (let i = 0; i < 5; i++) { document.getElementById('newMystery').click(); await pause(80); }
      document.querySelector('#presets [data-p=pinhole]').click(); await pause(150);
    })()` },
    { name: 'near field: move the screen, change the hole size and wavelength mid sweep, leave for another setup and back', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      for (const p of ['near', 'disk']) {
        document.querySelector('#presets [data-p=' + p + ']').click(); await pause(100);
        document.getElementById('sweepBtn').click(); await pause(400);
        set('sD', document.getElementById('sD').min); await pause(200); set('sD', document.getElementById('sD').max); await pause(200);
        const sel = document.getElementById('selLam'); sel.value = sel.options[0].value; sel.dispatchEvent(new Event('change', { bubbles: true })); await pause(200);
        set('sL', document.getElementById('sL').min); await pause(200); set('sL', document.getElementById('sL').max); await pause(200);
        document.querySelector('#zoomSeg [data-z="8"]')?.click(); await pause(200);
      }
      document.getElementById('sweepBtn').click(); await pause(300); document.querySelector('#presets [data-p=pinhole]').click(); await pause(200);
    })()` },
    { name: 'drag the cursor to both edges, then change zoom and setup: the cursor must stay inside the view', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), R = window.__rs;
      for (const p of ['telescope', 'pinhole', 'camera', 'near']) {
        document.querySelector('#presets [data-p=' + p + ']').click(); await pause(100);
        for (const z of [1, 8, 2, 4]) { const b = document.querySelector('#zoomSeg [data-z="' + z + '"]'); if (b) { R.setCur(1e9); b.click(); await pause(100); R.setCur(-1e9); await pause(100); } }
      }
      document.querySelector('#presets [data-p=pinhole]').click(); await pause(100);
    })()` },
  ],
};
