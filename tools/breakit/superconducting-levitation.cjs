/* Known values for the break-it test (tools/breakit.cjs), superconducting-levitation. Hook: window.__lev (S, MD, force, gap, massOf, ...).
   The critical state model: every ring current stays at or below Ic (the critical current of a ring); the flux through every ring,
   sum over q of L[p][q] I[q] + the magnet's flux, equals the stored flux Phi[p] (zero resistance, flux moves only where a ring is at Ic);
   the energy lost in the puck never decreases while the setup is unchanged; a warm puck carries no current and gives no force; the
   magnet never goes below the puck face; the weight readout is m g with m = 7500 kg/m3 times the magnet volume; the field cooled
   setups sit where the puck pushes with no force at all. */
const pre = `const L = window.__lev; if (!L || !L.MD) return true; const S = L.S, MD = L.MD, G = 9.81, n = MD.n;
  const rd = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-');
`;
module.exports = {
  checks: [
    { name: "finite state; magnet never below the puck face; ring currents never above Ic; a warm puck gives no force", fn: `(() => { ${pre}
      if (![S.z, S.v, S.t, MD.loss].every(Number.isFinite)) return 'non finite state: z ' + S.z + ' v ' + S.v + ' loss ' + MD.loss;
      if (S.z - MD.o.l / 2 < -1e-9 && !S.fell) return 'magnet is inside the puck: gap ' + (S.z - MD.o.l / 2);
      const F = L.force(); if (!Number.isFinite(F)) return 'force is ' + F;
      if (!MD.sc) { if (F !== 0) return 'warm puck but force ' + F; if (Array.from(MD.I).some((v) => v !== 0)) return 'warm puck but ring currents are not zero'; return true; }
      let imax = 0; for (let p = 0; p < n; p++) { if (!Number.isFinite(MD.I[p])) return 'ring ' + p + ' current is ' + MD.I[p]; imax = Math.max(imax, Math.abs(MD.I[p])); }
      if (imax > MD.Ic * (1 + 1e-6)) return 'a ring carries ' + imax + ' A but Ic = ' + MD.Ic;
      return true; })()` },
    { name: "flux through every ring = stored flux (L I + magnet flux = Phi); energy lost never decreases", fn: `(() => { ${pre}
      if (!MD.sc) return true;
      let sc = 0; for (let p = 0; p < n; p++) sc = Math.max(sc, Math.abs(MD.Phi[p]), Math.abs(MD.pm[p]));
      for (let p = 0; p < n; p += 1) { let v = MD.pm[p]; for (let q = 0; q < n; q++) v += MD.L[p * n + q] * MD.I[q];
        if (Math.abs(v - MD.Phi[p]) > 1e-5 * sc + 1e-15) return 'ring ' + p + ': L I + magnet flux = ' + v + ' but stored flux ' + MD.Phi[p]; }
      const W = (window.__bkl = window.__bkl || { MD: null, loss: 0 });
      if (W.MD === MD && MD.loss < W.loss - 1e-12) return 'energy lost went down: ' + W.loss + ' to ' + MD.loss;
      W.MD = MD; W.loss = MD.loss;
      return true; })()` },
    { name: "weight readout is m g with m = 7500 kg/m3 x magnet volume; field cooled setups push with no force where they were cooled", fn: `(() => { ${pre}
      const m = 7500 * Math.PI * (S.dia / 2000) ** 2 * S.len / 1000; if (Math.abs(L.massOf() - m) > 1e-15) return 'mass ' + L.massOf() + ', should be ' + m;
      const w = document.getElementById('out'); if (w && !S.blind) for (const d of w.querySelectorAll('div')) if (d.querySelector('dt').textContent === 'Weight mg') {
        const got = parseFloat(d.querySelector('dd').textContent.replace(/\\u2212/g, '-')); if (Math.abs(got - m * G * 1000) > 0.0051 + 1e-9 && Math.abs(got - m * G * 1000) > 0.0051) { const W = (window.__bkw = window.__bkw || { s: '', t: 0 }), sg = [S.dia, S.len].join(); if (W.s !== sg) { W.s = sg; W.t = performance.now(); } else if (performance.now() - W.t > 500) return 'Weight shows ' + got + ' mN, m g = ' + m * G * 1000; } }
      if (MD.sc && (S.preset === 'fc' || S.preset === 'hang') && S.held && S.t === 0 && Math.abs(L.gap() * 1000 - 5) < 1e-9) { const F = L.force(); if (Math.abs(F) > 1e-9) return 'field cooled at 5 mm but the force there is ' + F + ' N'; }
      return true; })()` },
  ],
  steps: [
    { name: 'every preset, let go and run; warm and cool; hand slider to its ends; magnet and puck sliders to extremes; flip the side', fn: `(async () => {
      const L = window.__lev, pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      const set = (id, v) => { const e = $(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); e.dispatchEvent(new Event('change', { bubbles: true })); };
      for (const b of document.querySelectorAll('#presets button')) { b.click(); await pause(150); if ($('go').textContent === 'Let go') $('go').click(); await pause(600); }
      L.applyPreset('push'); await pause(100); for (const v of ['0', '40', '0', '25']) { set('sHand', v); await pause(400); }
      L.applyPreset('fc'); await pause(100); $('go').click(); await pause(300); $('temp').click(); await pause(600); $('temp').click(); await pause(300);
      for (const [id, v] of [['sJc', '6'], ['sJc', '9'], ['sBr', '0.2'], ['sBr', '1.5'], ['sDia', '3'], ['sDia', '30'], ['sLen', '1'], ['sLen', '15'], ['sPD', '10'], ['sPD', '60'], ['sPH', '2'], ['sPH', '30']]) { set(id, v); await pause(250); }
      document.querySelector('#sideSeg [data-side=below]').click(); await pause(300); $('go').click(); await pause(600);
      document.querySelector('#sideSeg [data-side=above]').click(); await pause(300);
      L.applyPreset('drop'); await pause(200);
    })()` },
  ],
};
