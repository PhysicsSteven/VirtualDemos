/* Known values for the break-it test (tools/breakit.cjs), resonances. Hook: window.__res (S, sys, kw, fit, NT, applyPreset, run, setScene, ...).
   Belt and Kuiper scenes: the resonance presets sit at the semimajor axes where P_planet/P is the stated ratio (Kepler's third law);
   the live "P_Jupiter / P now" and Distance a readouts equal the elements of the live state; the Set up note shows (aJ/a)^1.5 for
   the slider's a; the run's own bookkeeping agrees (Still in play + removed = N, the clock is the steps times dt, emax >= e now);
   the Hill radii quoted on the page. Finding Neptune: the preset claims (Le Verrier's planet within half a degree of Neptune's
   direction, the real Neptune leaves under 2 arcseconds, Uranus alone about 18 arcseconds). */
const hdr = `const R = window.__res; if (!R) return true; const S = R.S, sys = R.sys; const TAU = 2 * Math.PI;
  const rd = (lab) => { const d = [...document.querySelectorAll('#out div')].find((x) => x.querySelector('dt').textContent === lab); return d ? d.querySelector('dd').textContent.replace(/\\u2212/g, '-').replace(/,/g, '') : null; };
  const near = (g, w, t) => Math.abs(g - w) <= t * Math.max(Math.abs(w), 1e-12);
  const GMs = Math.pow(0.01720209895 * 365.25, 2);
`;
const PA = { r31: [3, 1], r52: [5, 2], r21: [2, 1], hilda: [3, 2] };   /* preset: [p, q] = p orbits of the body per q of the planet */
module.exports = {
  checks: [
    { name: "resonance presets sit at a = a_planet (q/p)^(2/3); the ratio note and readouts agree", fn: `(() => { ${hdr}
      if (S.scene === 'neptune' || !sys || sys.n !== 1 || sys.gone[0]) return true;
      const aP = sys.pl.a, el = (() => { const s = sys.s, x = s[0], y = s[1], vx = s[2], vy = s[3], r = Math.hypot(x, y), a = 1 / (2 / r - (vx * vx + vy * vy) / GMs); return { a, P: Math.pow(a, 1.5) * TAU / Math.sqrt(GMs) }; })();
      const PA = ${JSON.stringify(PA)}, pq = PA[S.preset];
      if (pq && S.scene === 'belt') { const want = aP * Math.pow(pq[1] / pq[0], 2 / 3); if (Math.abs(S.a - want) > 6e-4 * want) return 'preset ' + S.preset + ' starts at a = ' + S.a + ' AU, ' + pq[0] + ':' + pq[1] + ' is at ' + want; }
      if (S.blind || S.run) return true;   /* the readouts refresh every 200 ms while it runs */
      const Pp = TAU * Math.pow(aP, 1.5) / Math.sqrt(sys.mu), want = S.scene === 'belt' ? Pp / el.P : el.P / Pp;
      const got = parseFloat(rd(S.scene === 'belt' ? 'P_Jupiter / P now' : 'P / P_Neptune now'));
      if (!(Math.abs(got - want) <= 6e-4 * want + 1e-3)) return 'ratio readout ' + got + ', the live state gives ' + want;
      const ga = parseFloat(rd('Distance a now'));
      if (Math.abs(ga - el.a) > 0.006 * 1) return 'Distance a now shows ' + ga + ', live a = ' + el.a;
      return true; })()` },
    { name: "the ratio note for the slider's a is (a_planet/a)^1.5 (belt) or (a/a_Neptune)^1.5 (Kuiper)", fn: `(() => { ${hdr}
      if (S.scene === 'neptune' || S.blind || !sys || sys.n !== 1) return true;
      const note = document.getElementById('ratioNote').textContent, m = note.match(/([\\d.]+) times/); if (!m) return true;
      const want = S.scene === 'belt' ? Math.pow(5.20288700 / S.a, 1.5) : Math.pow(S.a / 30.06992276, 1.5);
      return Math.abs(parseFloat(m[1]) - want) <= 6e-4 * want + 6e-4 ? true : 'note says ' + m[1] + ', slider a = ' + S.a + ' gives ' + want; })()` },
    { name: "bookkeeping: in play + removed = N; clock = steps x dt; largest e >= e0; no NaN state", fn: `(() => { ${hdr}
      if (S.scene === 'neptune' || !sys) return true;
      const gone = sys.gone.filter(Boolean).length;
      { const m = (rd('Still in play') || '').match(/^(\\d+) of (\\d+)$/); if (m && (+m[1] !== sys.n - gone || +m[2] !== sys.n)) return 'Still in play shows ' + m[0] + ', N = ' + sys.n + ', removed ' + gone; }
      if (!sys.kw && Math.abs(sys.t - sys.steps * sys.dt) > 1e-6 * Math.max(1, sys.t)) return 'sys.t = ' + sys.t + ' but steps x dt = ' + sys.steps * sys.dt;
      for (let j = 0; j < sys.n; j++) { if (!(sys.emax[j] >= sys.e0[j] - 1e-12)) return 'emax < e0 for body ' + j; if (!sys.gone[j] && !(sys.s[4 * j] === sys.s[4 * j])) return 'NaN state, body ' + j; }
      return true; })()` },
    { name: "Hill radius quoted equals a(m/3M)^(1/3): 0.355 AU Jupiter, 0.776 AU Neptune", fn: `(() => { ${hdr}
      if (S.scene === 'neptune' || !sys || sys.kw) return true;
      const want = sys.key === 'jupiter' ? 0.355 : 0.776;
      return Math.abs(sys.rHill - want) < 6e-4 ? true : 'rHill = ' + sys.rHill + ', the page says ' + want; })()` },
    { name: "Finding Neptune: Le Verrier within 0.5° of Neptune's direction; the real Neptune leaves < 2″; Uranus alone has an rms of several ″", fn: `(() => { ${hdr}
      if (S.scene !== 'neptune' || !R.fit || !R.NT) return true;
      const dl = ((S.xl - R.NT.nepX.lon + 540) % 360) - 180;
      if (S.preset === 'leverrier' && Math.abs(dl) >= 0.5) return 'Le Verrier is ' + dl.toFixed(2) + '° from Neptune on 1846 Sep 23 (page says under half a degree)';
      if (S.preset === 'real' && R.fit.maxNew >= 2) return 'with the real Neptune the largest 1781 to 1845 leftover is ' + R.fit.maxNew.toFixed(2) + '″, page says under 2″';
      if (S.preset === 'alone' && !(R.fit.maxNew > 15 && R.fit.maxNew < 21)) return 'Uranus alone: largest leftover ' + R.fit.maxNew.toFixed(1) + '″, page says up to 18″';
      if (!isFinite(R.fit.rms)) return 'rms is not finite';
      return true; })()` },
  ],
  steps: [
    { name: 'preset switch mid run: 3:1 runs, then Kuiper, then Whole belt, Clearing the gaps, back to a single body; speeds 1 and 100', fn: `(async () => {
      const R = window.__res, pause = (ms) => new Promise((r) => setTimeout(r, ms)), play = document.getElementById('play'), sp = document.getElementById('selSpeed');
      const go = (id) => { const b = document.querySelector('#presets [data-p=' + id + ']'); if (b) b.click(); };
      go('r31'); play.click(); await pause(400); go('pluto'); play.click(); await pause(300); go('plutinos'); play.click(); await pause(400);
      sp.value = '100'; sp.dispatchEvent(new Event('change')); await pause(300);
      document.querySelector('#sceneSeg [data-scene=belt]').click(); await pause(100); go('clear'); play.click(); await pause(1200);
      go('r52'); await pause(200); R.run(2000); sp.value = '1'; sp.dispatchEvent(new Event('change')); play.click(); await pause(300);
      document.querySelector('#sceneSeg [data-scene=neptune]').click(); await pause(200); play.click(); await pause(300);
      go('real'); await pause(200); go('own'); await pause(200); go('alone'); await pause(200);
      document.querySelector('#sceneSeg [data-scene=kuiper]').click(); await pause(300);
    })()` },
    { name: 'Neptune sliders to every limit and back, with Old sightings on, then the 3D/Flat switch', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#sceneSeg [data-scene=neptune]').click(); await pause(200);
      const chk = document.getElementById('chkX'); if (!chk.checked) chk.click();
      const old = document.getElementById('chkOld'); if (!old.checked) old.click();
      for (const [id, lo, hi] of [['sXa', 20, 45], ['sXm', 1, 60], ['sXl', 0, 360], ['sXe', 0, 0.2], ['sXw', 0, 359.9]]) { set(id, lo); await pause(150); set(id, hi); await pause(150); }
      set('sXa', 36.154); set('sXm', 1); set('sXe', 0); await pause(200); set('sXm', 60); await pause(200);
      document.querySelector('#dimSeg [data-dim="flat"]').click(); await pause(100); document.querySelector('#dimSeg [data-dim="3d"]').click(); await pause(100);
    })()` },
    { name: 'belt extremes: a = 2 and 4.1, e = 0 and 0.35, every start angle; then click the histogram at both ends', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      const R = window.__res; document.querySelector('#sceneSeg [data-scene=belt]').click(); await pause(150);
      for (const [a, e, ph] of [[2, 0, 0], [4.1, 0.35, 359], [2.0, 0.35, 180], [5.2, 0, 0], [3.278, 0, 90]]) { set('sA', a); set('sE', e); set('sPh', ph); document.getElementById('play').click(); R.run(500); await pause(150); }
      const h = document.getElementById('hist'), r = h.getBoundingClientRect();
      for (const fx of [0.02, 0.5, 0.98]) h.dispatchEvent(new MouseEvent('click', { bubbles: true, clientX: r.left + r.width * fx, clientY: r.top + r.height / 2 }));
      await pause(150); R.run(300);
    })()` },
  ],
};
