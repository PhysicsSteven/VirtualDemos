/* Known values for the break-it test (tools/breakit.cjs), gravitational-waves. Hook: window.__gw (S, W(), now(), chirpMass, ...).
   Every state: no readout is NaN, the chirp mass readout is (m₁m₂)^(3/5)/(m₁ + m₂)^(1/5) of the sliders, and the wave frequency
   never falls. Inspiral: ΔL = hL with L = 3,994.5 m, the separation obeys Kepler's law a³ = GM/(πf)². Detector: the delay is
   (d/c) cos θ with d = 3,002 km, ΔL = hL cos 2ψ. Data: the source chirp mass is the detector one ÷ 1.09; the published masses give
   28.1 M☉. Race: 40 Mpc is 130 million years of travel, and 1.74 s over it is δ = 4.2 × 10⁻¹⁶. */
const pre = `const E = window.__gw; if (!E) return true; const S = E.S;
  const rd = () => { const o = {}; for (const d of document.querySelectorAll('#out > div')) o[d.querySelector('dt').textContent] = d.querySelector('dd').textContent; return o; };
  const SUP = { '⁰': 0, '¹': 1, '²': 2, '³': 3, '⁴': 4, '⁵': 5, '⁶': 6, '⁷': 7, '⁸': 8, '⁹': 9 };
  const num = (t) => { t = String(t).replace(/\\u2212/g, '-').replace(/,/g, ''); const m = t.match(/^\\+?(-?[\\d.]+)(?: × 10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+))?/); if (!m) return NaN; let v = parseFloat(m[1]);
    if (m[2]) { const neg = m[2][0] === '⁻'; let e = 0; for (const c of m[2]) if (c in SUP) e = e * 10 + SUP[c]; v *= Math.pow(10, neg ? -e : e); } return v; };
  const near = (got, want, tol) => Math.abs(got - want) <= tol * Math.max(Math.abs(want), 1e-300);
  const o = rd(); const L = 3994.5, D_HL = 3.002e6, C = 299792458, G = 6.6743e-11, MSUN = 1.3271244e20 / 6.6743e-11;
`;
module.exports = {
  checks: [
    { name: 'every state: nothing is NaN, the chirp mass readout matches the masses, the model wave frequency never falls', fn: `(() => { ${pre}
      for (const k in o) if (/NaN|undefined|Infinity/.test(o[k])) return k + ' shows ' + o[k];
      const mc = o['Chirp mass Mc']; const want = Math.pow(S.m1 * S.m2, 0.6) / Math.pow(S.m1 + S.m2, 0.2);
      if (mc !== undefined && Math.abs(num(mc) - want) > 6e-4) return 'chirp mass ' + mc + ', want ' + want;
      const W = E.W(); for (let i = 1; i < W.f.length; i++) if (!(W.f[i] >= W.f[i - 1] - 1e-9) || !isFinite(W.h[i])) return 'wave breaks at sample ' + i;
      return true; })()` },
    { name: 'inspiral: ΔL = hL (L = 3,994.5 m); separation from Kepler a³ = GM/(πf)² with f at the detector × (1 + z)', fn: `(() => { ${pre}
      if (S.view !== 'insp' || S.blind || o['Strain h (face on, overhead)'] === undefined) return true;
      const h = num(o['Strain h (face on, overhead)']), dl = num(o['ΔL in LIGO (hL)']); if (isFinite(h) && !near(dl, h * L, 6e-3)) return 'ΔL ' + dl + ' for h ' + h;
      const sep = o['Separation'], fr = num(o['Wave frequency f']); if (sep !== undefined && isFinite(fr) && fr > S.f0 + 0.5) { const z = num(o['Redshift z']), W = E.W();
        if (fr < W.fI - 0.5) { const a = Math.cbrt(G * (S.m1 + S.m2) * MSUN / Math.pow(Math.PI * fr * (1 + z), 2)) / 1e3; if (!near(num(sep), a, 6e-3)) return 'separation ' + sep + ', Kepler ' + a; } }
      return true; })()` },
    { name: 'detector: delay (d/c) cos θ, d = 3,002 km; ΔL = hL cos 2ψ; d/c = 10.01 ms', fn: `(() => { ${pre}
      if (S.view !== 'det' || o['Livingston ahead of Hanford by'] === undefined) return true;
      if (Math.abs(num(o['Livingston ahead of Hanford by']) - D_HL / C * Math.cos(S.theta * Math.PI / 180) * 1e3) > 0.0051) return 'delay ' + o['Livingston ahead of Hanford by'];
      if (Math.abs(num(o['Largest possible delay d/c']) - 10.01) > 0.0051) return 'd/c ' + o['Largest possible delay d/c'];
      if (Math.abs(num(o['Detector feels cos 2ψ']) - Math.cos(2 * S.psi * Math.PI / 180)) > 6e-4) return 'cos 2ψ ' + o['Detector feels cos 2ψ'];
      if (!S.blind) { const h = num(o['h at Hanford now']), dl = num(o['ΔL = hL cos 2ψ']), r = num(o['Detector feels cos 2ψ']); if (Math.abs(h * r) > 1e-30 && !near(dl, h * L * r, 6e-3)) return 'ΔL ' + dl; }
      return true; })()` },
    { name: 'data: source chirp mass = detector ÷ 1.09; the published masses 36 and 29 give 28.1 M☉ at the source and 30.6 at the detector', fn: `(() => { ${pre}
      if (S.view !== 'data') return true;
      const pub = o['From the published masses (36 and 29 M☉)']; if (pub === undefined || !/^28\\.1 M☉ at the source, 30\\.6 M☉/.test(pub)) return 'published ' + pub;
      const d = o['Chirp mass at the detector'], s = o['Chirp mass at the source, ÷ (1 + z), z = 0.09']; if (d !== undefined && !S.blind && Math.abs(num(s) - num(d) / 1.09) > 0.06) return 'source ' + s + ' detector ' + d;
      return true; })()` },
    { name: 'race: 40 Mpc is 130 million years (4.12 × 10¹⁵ s); 1.74 s over that is δ = 4.2 × 10⁻¹⁶; extra lag δD/c', fn: `(() => { ${pre}
      if (S.view !== 'race' || o['Travel time D/c'] === undefined) return true;
      if (!/^4\\.12 × 10¹⁵ s \\(130 million years\\)/.test(o['Travel time D/c'])) return 'travel ' + o['Travel time D/c'];
      if (!S.blind) { if (o['δ that the measured gap alone would allow'] !== '4.2 × 10⁻¹⁶') return 'δ ' + o['δ that the measured gap alone would allow'];
        const lag = o['Extra lag of the waves, δD/c'], want = Math.pow(10, S.logDelta) * 4.1234e15; const v = /years/.test(lag) ? num(lag) * 31557600 : num(lag); if (!near(v, want, 6e-3)) return 'lag ' + lag; }
      return true; })()` },
  ],
  steps: [
    { name: 'Every setup, then Play in every view at every speed, Reset, Hear it', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      for (const b of document.querySelectorAll('[data-p]')) { b.click(); await pause(150); }
      for (const v of ['insp', 'det', 'data', 'race']) { document.querySelector('#viewSeg [data-v=' + v + ']').click(); await pause(120);
        for (const s of ['0.02', '1']) { const sb = document.querySelector('#speedSeg [data-s="' + s + '"]'); if (sb) sb.click(); const go = document.getElementById('go'); if (!go.hidden) { go.click(); await pause(600); go.click(); } }
        document.getElementById('restart').click(); }
    })()` },
    { name: 'Corners: masses at both ends, nearest and farthest, lowest and highest f₀, every angle, fit window crossed, δ at both ends, Blind on and off', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#viewSeg [data-v=insp]').click();
      for (const [a, b] of [['0', '0'], ['2', '2'], ['0', '2'], ['0.15', '0.1']]) { set('sM1', a); set('sM2', b); await pause(120); }
      for (const d of ['1', '3.5', '2.6']) { set('sD', d); await pause(80); } for (const f0 of ['10', '150', '20']) { set('sF0', f0); await pause(120); }
      document.querySelector('#viewSeg [data-v=det]').click(); for (const [p, t] of [['0', '0'], ['45', '90'], ['90', '180'], ['20', '46']]) { set('sPsi', p); set('sTh', t); await pause(80); }
      document.querySelector('#viewSeg [data-v=data]').click(); for (const [lo, hi] of [['0.27', '0.445'], ['0.44', '0.28'], ['0.3', '0.42']]) { set('sLo', lo); set('sHi', hi); await pause(100); }
      document.querySelector('#viewSeg [data-v=race]').click(); for (const [d, e] of [['-18', '0'], ['-2', '4'], ['-15', '1.74']]) { set('sDel', d); set('sEmit', e); await pause(100); }
      document.getElementById('labBlind').click(); await pause(100); document.getElementById('labBlind').click();
      document.querySelector('[data-p=gw150914]').click();
    })()` },
  ],
};
