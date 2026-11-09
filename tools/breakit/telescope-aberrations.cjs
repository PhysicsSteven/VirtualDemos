/* Known values for the break-it test (tools/breakit.cjs), telescope-aberrations. Hook: window.__ta (S, R, eff, image, recompute, wait).
   The checks use the finished image R and the effective setup R.E, and skip while a long exposure is still building or the image
   is older than the controls. Held at every probe: the Strehl ratio never exceeds 1 (the aberrated peak cannot beat the perfect one,
   outside the ray picture); the readouts equal the physics of the current settings (Strehl, 1.22 λ/D, r0 at the wavelength, focal
   length); a perfect parabola on axis at the paraxial focus (and Hubble after the 1993 fix) has Strehl 1 and a half light diameter of
   1.03 λ/D (Airy pattern); Marechal: Strehl = exp(−(2π σ)²) for a small rms wavefront error σ; a sphere on axis at the paraxial focus has
   rms wavefront error 0.298 W040 with W040 = D/(512 N³); defocus alone has rms dz/(16 √3 N²). */
const cur = `const T = window.__ta; if (!T || !T.R || !T.R.done) return true; const R = T.R, E = R.E; if (!E) return true;
  const S = T.S, now = T.eff(), keys = ['scope','K','lens','hfix','D','N','pinch','corr','focus','th','iris','filter','air','r0','ao','expo'];
  for (const k of keys) if (E[k] !== now[k]) return true;      /* the image is older than the controls: the next recompute will catch up */
  const ARC = Math.PI / 648000, near = (a, b, t) => Math.abs(a - b) <= t * Math.max(Math.abs(b), 1e-12);
  const rd = (name) => { for (const d of document.querySelectorAll('#out div')) { const k = d.querySelector('dt'); if (k && k.textContent === name) return d.querySelector('dd').textContent.replace(/−/g, '-'); } return null; };
  const lamC = E.filter === 'white' ? 550e-9 : { F: 486.1327, g550: 550, d: 587.5618, C: 656.2725, K: 2200 }[E.filter] * 1e-9;
  const Du = E.D * E.iris / 100, pa = 550e-9 * 128 / (512 * E.D);
  const clean = E.scope === 'mirror' && E.K === -1 && E.th === 0 && E.focus === 0 && !E.pinch && E.air !== 'ground' && E.filter !== 'white' && E.iris === 100;
`;
module.exports = {
  checks: [
    { name: "Strehl ratio never above 1 (outside the ray picture) and never negative", fn: `(() => { ${cur}
      if (!isFinite(R.strehl) || R.strehl < 0) return 'Strehl = ' + R.strehl;
      if (!R.rays && R.strehl > 1.0005) return 'Strehl = ' + R.strehl + ' > 1';
      return true; })()` },
    { name: "readouts equal the live state: Strehl, 1.22 λ/D, r0 at the wavelength, focal length", fn: `(() => { ${cur}
      if (S.blind) return true;
      const sh = rd('Strehl ratio'); if (sh !== null && Math.abs(parseFloat(sh) - R.strehl) > 0.0051) return 'Strehl shows ' + sh + ', R.strehl = ' + R.strehl;
      const dl = rd('Diffraction limit 1.22 λ/D'), want = 1.22 * lamC / Du / ARC;
      if (dl !== null && !near(parseFloat(dl), want, 6e-3)) return 'diffraction limit shows ' + dl + ', 1.22 λ/D = ' + want;
      if (E.air === 'ground' && !S.mys) { const r = rd('r₀ at this wavelength'), w = E.r0 * Math.pow(lamC / 500e-9, 1.2);
        if (r !== null && !near(parseFloat(r), w, 6e-3)) return 'r0 shows ' + r + ', should be ' + w + ' cm'; }
      if (!S.mys && E.scope !== 'hubble') { const f = rd('Focal length'); if (f !== null && !near(parseFloat(f), E.N * E.D, 6e-3)) return 'focal length shows ' + f + ', N D = ' + E.N * E.D; }
      return true; })()` },
    { name: "perfect parabola on axis (and Hubble after 1993): Strehl 1, half light diameter 1.03 λ/D", fn: `(() => { ${cur}
      const hub = E.scope === 'hubble' && E.hfix === 1 && E.focus === 0 && E.th === 0 && E.filter !== 'white';
      if (!(clean || hub) || S.mys) return true;
      if (R.rays || R.strehl < 0.995) return 'Strehl of a perfect pupil is ' + R.strehl;
      if (clean && !near(R.hpd * pa, 1.03 * lamC / Du, 0.05)) return 'half light diameter ' + R.hpd * pa / ARC + '", 1.03 λ/D = ' + 1.03 * lamC / Du / ARC + '"';
      return true; })()` },
    { name: "Maréchal: Strehl = exp(−(2π σ)²) for a small rms wavefront error", fn: `(() => { ${cur}
      if (E.scope !== 'mirror' || E.air === 'ground' || E.filter === 'white' || E.iris !== 100 || R.rays || E.corr) return true;
      const s = R.rmsW; if (!(s < 0.07)) return true;
      const want = Math.exp(-Math.pow(2 * Math.PI * s, 2));
      return near(R.strehl, want, 0.06) ? true : 'rms ' + s + ' λ gives Strehl ' + want + ' but the image has ' + R.strehl; })()` },
    { name: "sphere on axis at the paraxial focus: rms wavefront error 0.298·D/(512 N³)", fn: `(() => { ${cur}
      if (!(E.scope === 'mirror' && E.K === 0 && E.th === 0 && E.focus === 0 && !E.pinch && !E.corr && E.air !== 'ground' && E.filter !== 'white' && E.iris === 100)) return true;
      const w040 = E.D / (512 * Math.pow(E.N, 3)), want = Math.sqrt(4 / 45) * w040 / lamC;
      return near(R.rmsW, want, 0.1) ? true : 'rms ' + R.rmsW + ' λ, Seidel ' + want + ' λ (W040 = ' + w040 + ' m)'; })()` },
    { name: "defocus alone: rms wavefront error dz/(16 √3 N²)", fn: `(() => { ${cur}
      if (!(clean === false && E.scope === 'mirror' && E.K === -1 && E.th === 0 && E.focus !== 0 && !E.pinch && E.air !== 'ground' && E.filter !== 'white' && E.iris === 100) || E.N < 4 || S.mys) return true;
      const want = Math.abs(E.focus) / 1000 / (16 * Math.sqrt(3) * E.N * E.N) / lamC;
      return near(R.rmsW, want, 0.05) ? true : 'rms ' + R.rmsW + ' λ, dz/(16√3 N²) = ' + want + ' λ'; })()` },
  ],
  steps: [
    { name: 'sphere: sweep the camera focus through the best focus, then a perfect parabola at the extremes of aperture and f ratio', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#presets [data-p=sphere]').click(); await pause(500);
      for (const v of ['-2', '-0.3', '0', '0.3', '2', '0']) { set('sFocus', v); await pause(300); }
      document.querySelector('#presets [data-p=perfect]').click(); await pause(400);
      for (const [d, n] of [['4', '3'], ['0.05', '20'], ['4', '20'], ['0.05', '3']]) { set('sD', d); set('sN', n); await pause(500); }
      set('sD', '0.2'); set('sN', '8'); await pause(400);
    })()` },
    { name: 'mid run: long exposure, change the telescope while it builds, star test on, switch preset, back', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#presets [data-p=ao]').click(); await pause(150);
      const t = document.getElementById('starTest'); if (!t.checked) t.click();
      set('sD', '4'); await pause(100); set('sR0', '2'); await pause(100); set('sIris', '10'); await pause(100);
      document.querySelector('#presets [data-p=hubble90]').click(); await pause(300);
      set('sIris', '100'); set('sFocus', '-40'); await pause(400); set('sFocus', '40'); await pause(400);
      document.querySelector('#presets [data-p=seeing]').click(); await pause(100);
      document.getElementById('play').click(); await pause(1500); document.getElementById('play').click();
      if (t.checked) t.click(); document.querySelector('#presets [data-p=perfect]').click(); await pause(300);
    })()` },
    { name: 'mystery telescope: mask to the minimum, focus to the extremes, new mystery each time', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      for (let i = 0; i < 4; i++) { document.querySelector('#presets [data-p=mystery]').click(); await pause(500);
        set('sIris', document.getElementById('sIris').min); await pause(300); set('sFocus', document.getElementById('sFocus').max); await pause(300); set('sTh', document.getElementById('sTh').max); await pause(400); }
      document.querySelector('#presets [data-p=perfect]').click(); await pause(300);
    })()` },
  ],
};
