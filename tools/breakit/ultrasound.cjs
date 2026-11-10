/* Known values for the break-it test (tools/breakit.cjs), ultrasound. Hook: window.__us (S, layers, echoesNow, shiftNow, ...).
   Echoes: one per boundary at t = sum 2d/c with the media's own speeds, r = (Z2 - Z1)/(Z2 + Z1) (opposite sign the other way,
   |r| < 1, the intensity returned plus transmitted adds to 1), each echo no louder than the pulse sent; absorption loses
   2 alpha f d dB per layer, round trip, and none when switched off; the Doppler shift is 2 f0 v cos(theta)/(c - v cos theta) with
   c = 1570 m/s in blood, equal to the readout, the small angle form is within 1 % for these speeds, and the sinc^2 spectrum
   peaks at that shift; the readouts equal these values; cursor, water depth and angle stay in their limits; the presets keep
   their cited numbers (water 1500 m/s, scanner 1540 m/s, flow 0.50 m/s at 60 degrees and 5 MHz, thin layer 1.0 mm). */
const pre = `const U = window.__us; if (!U) return true;
  const S = U.S, L = U.layers(), ech = U.echoesNow(), M = U.MEDIA, rd = () => { const o = {}; for (const e of document.querySelectorAll('#out > div')) o[e.firstElementChild.textContent] = e.lastElementChild.innerHTML; return o; };
  const strip = (h) => h.replace(/<br>/g, '|').replace(/<[^>]+>/g, '');
`;
module.exports = {
  checks: [
    { name: "echoes: time = sum 2d/c, depth = sum d, r = (Z2 - Z1)/(Z2 + Z1), |r| < 1, no echo louder than the pulse", fn: `(() => { ${pre}
      if (ech.length !== L.length - 1) return 'echo count ' + ech.length + ' for ' + L.length + ' layers';
      let t = 0, dep = 0, thru = 1;
      for (let i = 0; i < ech.length; i++) {
        t += 2 * L[i].d / M[L[i].m].c; dep += L[i].d; const r = (M[L[i + 1].m].Z - M[L[i].m].Z) / (M[L[i + 1].m].Z + M[L[i].m].Z);
        if (!isFinite(ech[i].t) || !(L[i].d > 0)) return 'bad layer ' + i + ' ' + L[i].d;
        if (Math.abs(ech[i].t - t) > 1e-12 || Math.abs(ech[i].depth - dep) > 1e-12) return 'echo ' + i + ' at ' + ech[i].t + ', depth ' + ech[i].depth + ', physics ' + t + ', ' + dep;
        if (Math.abs(ech[i].r - r) > 1e-12 || Math.abs(r) >= 1) return 'r ' + ech[i].r + ' vs ' + r;
        if (Math.abs(U.reflect(M[L[i + 1].m].Z, M[L[i].m].Z) + r) > 1e-12) return 'r does not flip sign the other way';
        const T = r * r + (1 - r * r); if (Math.abs(T - 1) > 1e-12) return 'energy';
        if (Math.abs(ech[i].a) > thru + 1e-12 || !isFinite(ech[i].a)) return 'echo ' + i + ' amplitude ' + ech[i].a;
        thru *= 1 - r * r; }
      return true; })()` },
    { name: "absorption: round trip 2 alpha f d dB in the layers above, none when off", fn: `(() => { ${pre}
      const off = U.echoes(U.layers(), 0), on = U.echoes(U.layers(), S.f0);
      if (off.some((e) => e.lossDb !== 0)) return 'loss with absorption off';
      let dB = 0; for (let i = 0; i < on.length; i++) { const l = L[i]; dB += 2 * U.ATTEN[l.m] * (l.m === 'water' || l.m === 'air' ? S.f0 * S.f0 : S.f0) * l.d * 100;
        if (Math.abs(on[i].lossDb - dB) > 1e-9) return 'loss ' + on[i].lossDb + ' vs ' + dB;
        if (Math.abs(Math.abs(on[i].a) - Math.abs(off[i].a) * Math.pow(10, -dB / 20)) > 1e-12) return 'amplitude does not lose ' + dB + ' dB'; }
      const o = rd(), key = 'Absorption, round trip, at each boundary';
      if (S.absorb && S.preset !== 'cyst' && !S.blind) { const want = ech.map((e) => (e.depth * 100).toFixed(1) + ' cm: ' + e.lossDb.toFixed(1) + ' dB').join(', '); if (strip(o[key]) !== want) return 'absorption readout ' + strip(o[key]) + ' vs ' + want; }
      return true; })()` },
    { name: "Doppler: shift = 2 f0 v cos(theta)/(c - v cos theta), c = 1570 m/s, readout equal, small angle form within 1 %, spectrum peaks there", fn: `(() => { ${pre}
      if (S.mode !== 'flow') return true;
      const v = U.vNow(), f0 = S.f0 * 1e6, u = v * Math.cos(S.theta * Math.PI / 180), want = f0 * 2 * u / (1570 - u), got = U.shiftNow();
      if (M.blood.c !== 1570) return 'blood speed ' + M.blood.c;
      if (!isFinite(got) || Math.abs(got - want) > 1e-6) return 'shift ' + got + ' vs ' + want;
      if (Math.abs(f0 * 2 * u / 1570 - got) > 0.01 * Math.abs(got) + 1e-9) return 'small angle form off by more than 1 %';
      if (!(got >= 0)) return 'negative shift for flow toward the transducer: ' + got;
      if (Math.abs(U.spectrum(got, f0, v, S.theta, 1570, false) - 1) > 1e-9) return 'plug spectrum does not peak at the shift';
      if (!(U.spectrum(got * 1.5 + 500, f0, v, S.theta, 1570, true) < 0.2)) return 'laminar spectrum has power above the fastest blood';
      const o = rd(); if (!S.mysteryV && !S.blind) { const t = strip(o[S.prof === 'lam' ? 'Shift of the fastest blood' : 'Doppler shift']); if (!t.startsWith(got.toFixed(1) + ' Hz')) return 'shift readout ' + t + ', physics ' + got; }
      return true; })()` },
    { name: "limits: cursor in 0..200 us or 0..range Hz, water depth 2..15 cm, angle 20..85, speeds and times finite", fn: `(() => { ${pre}
      if (!(S.curT >= 0 && S.curT <= 200) || !(S.curF >= 0 && S.curF <= S.range)) return 'cursor out of range: ' + S.curT + ' us, ' + S.curF + ' Hz (range ' + S.range + ')';
      if (!(S.water >= 2 && S.water <= 15) || !(S.theta >= 20 && S.theta <= 85)) return 'water ' + S.water + ' or angle ' + S.theta + ' out of limits';
      if (!(S.v >= 0 && S.v <= 2) || !isFinite(U.vNow())) return 'speed ' + S.v;
      if (S.mode === 'echo' && S.absorb) { const l = U.levelDb(); if (Number.isNaN(l) || l > 1e-9) return 'echo level ' + l; }
      const o = rd(); if (document.getElementById('oCur').textContent !== (S.mode === 'echo' ? S.curT.toFixed(2) + ' μs' : Math.round(S.curF) + ' Hz')) return 'cursor output shows ' + document.getElementById('oCur').textContent;
      if (S.mode === 'echo' && S.preset !== 'cyst' && !S.blind) { const want = ech.map((e) => M[e.from].name + ' to ' + M[e.to].name + ': ' + (e.depth * 100).toFixed(2) + ' cm, ' + (e.t * 1e6).toFixed(2) + ' μs, r = ' + e.r.toFixed(3)).join('|'), k = Object.keys(o).find((x) => x.startsWith('Echoes:')); if (strip(o[k]) !== want) return 'echo readout ' + strip(o[k]) + ' vs ' + want; }
      return true; })()` },
    { name: "presets keep their numbers: water 1500 m/s and scanner 1540 m/s, bone Z 7.8e6, flow 0.50 m/s at 60 deg and 5 MHz, thin layer 1.0 mm", fn: `(() => { ${pre}
      if (M.water.c !== 1500 || U.C_SCANNER !== 1540 || M.bone.Z !== 7.8e6 || M.muscle.c !== 1590 || M.fat.c !== 1450) return 'a medium constant changed';
      const k = S.preset; if (!k || !document.querySelector('#presets [aria-pressed=true]')) return true;
      if (k === 'flow' && S.mode === 'flow' && S.v === 0.5 && S.theta === 60 && S.f0 === 5 && Math.abs(U.shiftNow() - 5e6 * 2 * 0.25 / (1570 - 0.25)) > 1e-6) return 'flow preset shift ' + U.shiftNow();
      if (k === 'thin') { const f = L.find((l) => l.m === 'fat'); if (!f || Math.abs(f.d - 0.001) > 1e-12) return 'thin layer ' + (f && f.d); }
      if (k === 'water') { const t = U.echoesNow()[0].t; if (Math.abs(t - 2 * S.water / 100 / 1500) > 1e-12) return 'water echo time ' + t; }
      if (k === 'cyst' && S.cyst >= 3 && !(S.cyst <= 9)) return 'cyst depth ' + S.cyst;
      return true; })()` },
  ],
  steps: [
    { name: "run the scanner in Doppler, switch to laminar, listen, shrink the range, change the angle to the limits", fn: `(async () => {
      const click = (s) => { const e = document.querySelector(s); if (e) e.click(); }, set = (id, v) => { const s = document.getElementById(id); s.value = v; s.dispatchEvent(new Event('input', { bubbles: true })); };
      click('#presets [data-p=flow]'); click('#run'); click('#profSeg [data-pr=lam]'); click('#listen'); set('sCur', 4800); click('#rangeSeg button'); set('sTh', 85); set('sV', 2); set('sTh', 20);
      click('#presets [data-p=mystery]'); click('#newFlow'); click('#listen'); click('#run');
    })()` },
    { name: "echo: water at the deepest, absorption and TGC on, cursor to the ends, then the hidden cyst", fn: `(async () => {
      const click = (s) => { const e = document.querySelector(s); if (e) e.click(); }, set = (id, v) => { const s = document.getElementById(id); s.value = v; s.dispatchEvent(new Event('input', { bubbles: true })); };
      click('#presets [data-p=atten]'); click('#run'); set('sW', 15); click('#f0s [data-f0="7.5"]'); set('sCur', 200); set('sCur', 0); click('#record');
      click('#presets [data-p=water]'); set('sW', 15); set('sCur', 200); click('#presets [data-p=cyst]'); click('#newCyst'); click('#newCyst'); click('#run');
    })()` },
  ],
};
