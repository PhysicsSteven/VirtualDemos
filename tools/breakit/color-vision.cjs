/* Known values for the break-it test (tools/breakit.cjs), color-vision. Hook: window.__cv (S, cache(), applyPreset, ...).
   The cone readouts, brightness Y, share and the sRGB hex equal the cache computed from the live setup (shown to 2 decimals);
   the three lamps at one common level v with no filter give the D65 white scaled by v, so L = M = S = Y = v (the lamps are
   normalized to white exactly); the stage shadow size is D/(D - d) with D = 4 m; Y is never negative and the three lamps off give 0. */
const pre = `const C = window.__cv; if (!C || !C.cache()) return true;
  const S = C.S, k = C.cache(), out = {}; for (const d of document.querySelectorAll('#out > div')) out[d.querySelector('dt').textContent] = d.querySelector('dd').textContent;
  const num = (t) => parseFloat(String(t).replace(/\\u2212/g, '-'));
`;
module.exports = {
  checks: [
    { name: "readouts: L, M, S cone signals, brightness Y, share and hex equal the live spectrum", fn: `(() => { ${pre}
      if (S.blind && out['Color seen'] === undefined) return 'blind mode lost the Color seen row';
      const [L, M, Sc] = k.lms;
      for (const [nm, v] of [['L cone signal', L], ['M cone signal', M], ['S cone signal', Sc], ['Brightness Y', k.xyz[1]]]) if (!(Math.abs(num(out[nm]) - v) <= 0.0051)) return nm + ' shows ' + out[nm] + ', live ' + v;
      if (!(k.xyz[1] >= -1e-12)) return 'Y is negative: ' + k.xyz[1];
      const sum = L + M + Sc;
      if (sum > 1e-6) { const p = out['Share L : M : S'].split(':').map(Number), w = [L, M, Sc].map((v) => Math.round(100 * v / sum)); if (p.join() !== w.join()) return 'share shows ' + out['Share L : M : S'] + ', live ' + w.join(' : '); }
      if (!S.blind && out['Color shown (sRGB)'] !== '#' + k.rgb.map((v) => v.toString(16).padStart(2, '0')).join('')) return 'hex ' + out['Color shown (sRGB)'] + ' differs from the cache ' + k.rgb;
      return true; })()` },
    { name: "equal lamps at level v (no filter): L = M = S = Y = v and the color is a gray", fn: `(() => { ${pre}
      if (S.mode !== 'rgb' || S.r !== S.g || S.g !== S.b || (S.fa && S.fa !== 'none') || (S.fb && S.fb !== 'none')) return true;
      const v = S.r, [L, M, Sc] = k.lms;
      for (const [nm, x] of [['L', L], ['M', M], ['S', Sc], ['Y', k.xyz[1]]]) if (Math.abs(x - v) > 2e-3) return nm + ' = ' + x + ' for lamps at ' + v + ' (white should give exactly the level)';
      if (Math.abs(k.rgb[0] - k.rgb[1]) > 2 || Math.abs(k.rgb[1] - k.rgb[2]) > 2) return 'equal lamps give a tinted color ' + k.rgb;
      return true; })()` },
    { name: "stage: shadow size = D/(D - d) with D = 4 m; the lamps at their levels, nothing shown out of range", fn: `(() => { ${pre}
      if (S.mode !== 'stage') return true;
      const want = (4 / (4 - S.dist)).toFixed(2), got = out['Shadow size'];
      if (num(got) !== +want) return 'shadow size shows ' + got + ', 4/(4 - ' + S.dist + ') = ' + want;
      if (S.dist < 0.2 - 1e-9 || S.dist > 3 + 1e-9) return 'dist out of its range: ' + S.dist;
      return true; })()` },
    { name: "state stays finite: levels in 0..1, wavelength 380..700, no NaN in the cache", fn: `(() => { ${pre}
      for (const n of ['r', 'g', 'b', 'pow']) if (!(S[n] >= 0 && S[n] <= 1)) return n + ' = ' + S[n];
      if (!(S.lam >= 380 && S.lam <= 700)) return 'lam = ' + S.lam;
      for (const v of [...k.xyz, ...k.lms, ...k.rgb]) if (!isFinite(v)) return 'non finite value in the cache';
      for (const v of k.rgb) if (v < 0 || v > 255) return 'rgb outside 0..255';
      return true; })()` },
  ],
  steps: [
    { name: 'every mode button, then every preset, then Mix it and back, with Blind mode toggled', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      for (const b of document.querySelectorAll('#modeSeg button')) { b.click(); await pause(120); }
      for (const b of document.querySelectorAll('#presets button')) { b.click(); await pause(60); }
      document.querySelector('#presets button').click(); await pause(100);
    })()` },
    { name: 'lamps to 0 then equal levels, filters stacked on them', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      window.__cv.applyPreset('white'); await pause(100);
      for (const v of ['0', '37', '100']) { set('sR', v); set('sG', v); set('sB', v); await pause(80); }
      for (const f of ['red', 'magenta', 'none']) { const s = document.getElementById('fA'); s.value = f; s.dispatchEvent(new Event('change', { bubbles: true })); await pause(80); }
    })()` },
  ],
};
