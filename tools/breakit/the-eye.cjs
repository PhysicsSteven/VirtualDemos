/* Known values for the break-it test (tools/breakit.cjs), the-eye. Hook: window.__eye (S).
   Eye: near and far points of each eye (25.0 cm; 30.0 cm far point; 100.0 cm near point; 2.00 m near point), the range of power
   Pmax - Pmin = amplitude, the thin lens equation 1/d + 1/d_i = P at the retina (1.80 cm behind the lens), glasses 1.50 cm in front
   of the eye, and "Seen" sharp exactly when the eye can reach the power that focuses on the retina; the cited prescriptions
   (OpenStax Examples 2.8 and 2.9: -3.51 D and +3.24 D) make their objects sharp.
   Camera: the thin lens equation 1/d + 1/d_i = 1/f, the blur spot (f/N)|1 - d_s/d_i| in micrometers and pixels, and every distance
   inside the shown depth of field has a blur of at most 2 pixels (the edges are rounded as displayed). */
const pre = `const Y = window.__eye; if (!Y) return true;
  const S = Y.S, rd = (label) => { for (const d of document.querySelectorAll('#out > div')) if (d.querySelector('dt').textContent.indexOf(label) === 0) return d.querySelector('dd').textContent.replace(/\\u2212/g, '-'); return null; };
  const R = 0.0180, GAP = 0.0150, PUP = 0.0040, EYES = { normal: { NP: 0.25, amp: 4 }, myopia: { FP: 0.30, amp: 4 }, hyper: { NP: 1.0, amp: 4 }, older: { NP: 2.0, amp: 0.5 } };
  const CAMS = { slr: { f: 0.050, pix: 6.0e-6 }, phone: { f: 0.005, pix: 1.4e-6 } };
  const dMeters = (t) => { if (/far away|∞/.test(t)) return Infinity; const m = t.match(/^(-?[\\d.]+) (cm|m)$/); return m ? +m[1] * (m[2] === 'cm' ? 0.01 : 1) : NaN; };
`;
module.exports = {
  checks: [
    { name: "eye: near and far points, range of power, thin lens image and 'Seen' from the settings", fn: `(() => { ${pre}
      if (S.mode !== 'eye') return true;
      const e = EYES[S.eye], Pmax = e.NP ? 1 / e.NP + 1 / R : 1 / e.FP + 1 / R + e.amp, Pmin = Pmax - e.amp;
      const np = rd('Near point'), fp = rd('Far point'), rg = rd('Eye’s range');
      const NP = 1 / (Pmax - 1 / R), FPv = Pmin - 1 / R;
      if (Math.abs(parseFloat(np) - NP * 100) > 0.0501) return 'near point shows ' + np + ', ' + NP * 100 + ' cm';
      if (Math.abs(FPv) < 1e-9 ? fp !== 'infinity' : FPv < 0 ? fp !== 'beyond infinity' : Math.abs(dMeters(fp) - 1 / FPv) > 0.0051 * (/ cm/.test(fp) ? 1 : 100) * 1) return 'far point shows ' + fp + ', physics ' + (1 / FPv) + ' m';
      const m = rg.match(/^(-?[\\d.]+) to (-?[\\d.]+) D$/); if (!m || Math.abs(+m[1] - Pmin) > 0.0501 || Math.abs(+m[2] - Pmax) > 0.0501) return 'range shows ' + rg + ', ' + Pmin + ' to ' + Pmax;
      if (Math.abs(Pmax - Pmin - e.amp) > 1e-12) return 'amplitude';
      if (S.blind) return true;
      const Pg = S.wear ? S.Pg : null; let V;
      if (Pg === null) V = isFinite(S.d) ? -1 / S.d : 0; else { const V0 = isFinite(S.d) ? -1 / (S.d - GAP) : 0, V1 = V0 + Pg; V = V1 / (1 - GAP * V1); }
      const Pt = Math.min(Pmax, Math.max(Pmin, 1 / R - V)), Vi = V + Pt, blur = PUP * Math.abs(1 - R * Vi);
      if (Math.abs(parseFloat(rd('Power it uses now')) - Pt) > 0.00501) return 'power it uses shows ' + rd('Power it uses now') + ', ' + Pt;
      const seen = rd('Seen'), sharp = blur < 2e-5;
      if (sharp !== (seen === 'sharp')) return 'Seen says "' + seen + '", blur spot is ' + blur * 1000 + ' mm (sharp below 0.02 mm)';
      if (!sharp) { const b = seen.match(/spot ([\\d.]+) mm/); if (!b || Math.abs(+b[1] - blur * 1000) > 0.00501) return 'blur shows ' + seen + ', ' + blur * 1000 + ' mm'; }
      const im = rd('Image behind the lens');
      if (Math.abs(Vi) > 1e-9 && Vi > 0 && Math.abs(parseFloat(im) - 100 / Vi) > 0.00051 + 1e-9) return 'image distance shows ' + im + ', 1/(V + P) = ' + 100 / Vi + ' cm';
      if (Vi <= 0 && !/infinity|none/.test(im) && Math.abs(Vi) > 1e-9) return 'no real image expected but shows ' + im;
      if (e.NP && S.d >= e.NP + 1e-9 && !S.wear && !sharp) return 'object beyond the near point without glasses but blurred';
      return true; })()` },
    { name: "eye presets: Examples 2.8 and 2.9 glasses (-3.51 D, +3.24 D) put the object at the far or near point and it is sharp", fn: `(() => { ${pre}
      if (S.mode !== 'eye' || S.blind || !S.preset) return true;
      const seen = rd('Seen');
      if (S.preset === 'myopiaFix' && (S.Pg !== -3.51 || seen !== 'sharp')) return 'myopiaFix: Pg = ' + S.Pg + ', seen ' + seen;
      if (S.preset === 'hyperFix' && (S.Pg !== 3.24 || seen !== 'sharp')) return 'hyperFix: Pg = ' + S.Pg + ', seen ' + seen;
      if (S.preset === 'normal' && seen !== 'sharp') return 'normal eye at 25 cm should be sharp';
      if (['myopia', 'hyper', 'older'].includes(S.preset) && seen === 'sharp') return S.preset + ' preset should be blurred without glasses';
      if (S.preset === 'myopiaFix') { const dI = rd('The glasses’ image'); if (!/^30\\.0 cm|^28\\.5 cm|30\\.0 cm from the eye/.test(dI)) return 'glasses image shows ' + dI + ', should be 30.0 cm from the eye'; }
      if (S.preset === 'hyperFix') { const dI = rd('The glasses’ image'); if (!/^(1\\.00 m|100\\.0 cm) from the eye/.test(dI)) return 'glasses image shows ' + dI + ', should be 1.00 m from the eye'; }
      return true; })()` },
    { name: "camera: thin lens image distance, blur spot in µm and pixels, depth of field edges within 2 pixels", fn: `(() => { ${pre}
      if (S.mode !== 'camera') return true;
      const c = CAMS[S.cam], f = c.f, d = S.dc, N = S.N, ds = S.ds;
      if (!(ds >= f - 1e-12) || !isFinite(ds)) return 'lens to sensor distance ' + ds;
      const Vi = 1 / f - (isFinite(d) ? 1 / d : 0), blur = (f / N) * Math.abs(1 - ds * Vi), px = blur / c.pix;
      const b = rd('Blur spot').match(/^([\\d.]+) µm = ([\\d.]+) pixels/); if (!b) return 'odd blur text ' + rd('Blur spot');
      if (Math.abs(+b[1] - blur * 1e6) > 0.0501 || Math.abs(+b[2] - px) > 0.0501) return 'blur shows ' + rd('Blur spot') + ', physics ' + blur * 1e6 + ' µm = ' + px + ' px';
      if (S.blind) return true;
      const im = rd('Image distance'), di = Vi > 0 ? 1 / Vi : NaN;
      if (isFinite(di)) { if (Math.abs(parseFloat(im) - di * 1000) > 0.00051 * (S.cam === 'phone' ? 0.1 : 1) + 1e-9) return 'image distance shows ' + im + ', 1/(1/f − 1/d) = ' + di * 1000 + ' mm'; }
      const dof = rd('Sharp from'), m = dof.match(/^(.+) to (.+)$/);
      if (m) {
        const lim = 2 * c.pix, bl = (x) => (f / N) * Math.abs(1 - ds * (1 / f - (isFinite(x) ? 1 / x : 0))), half = (t) => (/ cm$/.test(t) ? 0.0005 : 0.005);
        const n0 = dMeters(m[1]), f0 = dMeters(m[2]);
        for (const [x, t] of [[n0, m[1]], [f0, m[2]]]) { if (!isFinite(x)) continue; const h = half(t), lo = Math.min(bl(x - h), bl(x + h)), hi = Math.max(bl(x - h), bl(x + h)); if (lim < lo * (1 - 1e-6) - 1e-12 || lim > hi * (1 + 1e-6) + 1e-12) return 'depth of field edge ' + t + ' has blur ' + bl(x) / c.pix + ' px, should be 2 px'; }
        if (n0 > f0) return 'near ' + n0 + ' beyond far ' + f0;
        const mid = isFinite(f0) ? Math.sqrt(n0 * f0) : n0 * 1.5; if (bl(mid) > lim * (1 + 1e-6)) return 'inside the depth of field (' + mid + ' m) the blur is ' + bl(mid) / c.pix + ' px';
      }
      return true; })()` },
  ],
  steps: [
    { name: 'camera: every camera and f-number, focus slider to both ends, autofocus at every distance, then back to the eye', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#modeSeg [data-m=camera]').click(); await pause(100);
      for (const cam of ['phone', 'slr']) { document.querySelector('#camSeg [data-c=' + cam + ']').click();
        for (const n of document.querySelectorAll('#nSeg button')) { n.click(); for (const v of ['0', '101', '50', '17']) { set('sDc', v); document.getElementById('af').click(); await pause(40); } }
        const ds = document.getElementById('sDs'); for (const v of [ds.min, ds.max, '1', ds.max]) { set('sDs', v); await pause(40); } }
      document.querySelector('#modeSeg [data-m=eye]').click(); await pause(100);
    })()` },
    { name: 'eye: every setup with glasses on and extreme powers, both prescribe buttons, object at every distance', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      for (const eye of document.querySelectorAll('#eyeSeg button')) { eye.click(); for (const v of ['0', '101', '37', '100']) { set('sD', v); await pause(30); }
        document.getElementById('rxFar').click(); await pause(30); document.getElementById('rxNear').click(); await pause(30);
        const g = document.getElementById('sPg'); for (const v of [g.min, g.max, '0']) { set('sPg', v); await pause(30); } }
    })()` },
  ],
};
