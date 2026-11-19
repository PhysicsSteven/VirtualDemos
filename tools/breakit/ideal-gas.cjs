/* Known values for the break-it test (tools/breakit.cjs), ideal-gas. Hook: window.__ig (GS arrays, N, stats, two).
   One gas: every molecule stays inside the box and finite; with all walls mirrors and the piston at rest the total kinetic energy is
   constant (elastic collisions); the readouts equal the physics of the live state (N, A = width x 30 nm, P ideal = N k T / A, rms of
   a 3D gas = sqrt(3/2) x the 2D rms, the molecular mass); with the walls held at a temperature the energy change equals the heat Q
   when the piston is at rest; the setups open at their stated temperatures. Two gases: molecules stay in the box, and a closed divider
   keeps each side's molecules on their side. Molecule size (2026-11-15): every disk has the radius of the size switch (0.25 nm for
   All 0.50 nm and every setup but Real molecule sizes; σ/2 of the chosen gas, Svehla 1962, for Real sizes), and the size readouts
   equal their formulas at the live state (2D mean free path with Henderson's χ, the hard disk P excess, the 3D λ = kT/(√2 πσ²P) at
   1 atm, b = (2/3)πN_A σ³). */
const KB = 1.380649e-23;
const common = `const I = window.__ig; if (!I || !I.GS) return true; const G = I.GS, N = I.N;
  const rd = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-');
  const near = (got, want, tol) => Math.abs(got - want) <= tol * Math.max(Math.abs(want), 1e-300);
  const one = !I.two;
  const mirror = G.wallT.every((t) => t === 0);
  /* readouts refresh every 200 ms: compare them only when the state they show (N, width, T) has not changed for 300 ms */
  const settled = (key, sig) => { const W = (window.__bkr = window.__bkr || {}); if (W[key] !== sig) { W[key] = sig; W[key + 't'] = performance.now(); return false; } return performance.now() - W[key + 't'] > 300; };
`;
module.exports = {
  checks: [
    { name: "every molecule stays inside the box, with a finite position and velocity; a closed divider keeps the two sides apart", fn: `(() => { ${common}
      const r = G.r, e = 1e-6;
      for (let i = 0; i < N; i++) {
        if (![G.px[i], G.py[i], G.vx[i], G.vy[i]].every(Number.isFinite)) return 'molecule ' + i + ' has a non finite state';
        if (G.px[i] < r[i] - e || G.px[i] > G.wallX - r[i] + e || G.py[i] < r[i] - e || G.py[i] > 30 - r[i] + e)
          return 'molecule ' + i + ' at (' + G.px[i].toFixed(3) + ', ' + G.py[i].toFixed(3) + ') is outside the box 0..' + G.wallX.toFixed(2) + ' by 30 nm';
      }
      if (I.two && G.div === 1 && document.getElementById('play').textContent === 'Pause') for (let i = 0; i < N; i++) {
        const left = G.px[i] < 25;
        if ((G.side[i] === 0) !== left || Math.abs(G.px[i] - 25) < r[i] - e) return 'molecule ' + i + ' (side ' + G.side[i] + ') at x = ' + G.px[i].toFixed(3) + ' crossed or touches the closed divider';
      }
      return true; })()` },
    { name: "mirror walls and a resting piston: the total kinetic energy is constant (elastic collisions)", fn: `(() => { ${common}
      if (!one || !mirror) { window.__bke = null; return true; }
      let E = 0; for (let i = 0; i < N; i++) E += 0.5 * G.m[i] * (G.vx[i] ** 2 + G.vy[i] ** 2);
      if (G.big) E += 0.5 * G.big.m * (G.big.vx ** 2 + G.big.vy ** 2);   /* Brownian motion: the large disk's energy too */
      const sig = [N, G.wallX, G.wallTarget, document.getElementById('tIn').value, G.m[0], G.pistonMax, G.wallT.join()].join('|'), w = window.__bke;
      window.__bke = { sig, E, gen: G.gen };
      /* Reset (and a setup) draws a fresh gas at the set temperature and counts G.gen up: a new gas, not drift */
      if (!w || w.sig !== sig || w.gen !== G.gen || G.wallV !== 0 || G.wallX !== G.wallTarget) return true;
      if (!near(E, w.E, 1e-9)) return 'kinetic energy went from ' + w.E + ' to ' + E + ' J with mirror walls and a resting piston'; 
      return true; })()` },
    { name: "walls held at a temperature, piston at rest: the energy change of the gas equals the heat Q the walls gave", fn: `(() => { ${common}
      if (!one || mirror) { window.__bkq = null; return true; }
      let E = 0; for (let i = 0; i < N; i++) E += 0.5 * G.m[i] * (G.vx[i] ** 2 + G.vy[i] ** 2);
      if (G.big) E += 0.5 * G.big.m * (G.big.vx ** 2 + G.big.vy ** 2);   /* Brownian motion: the large disk's energy too */
      const Q = G.heat[0] + G.heat[1] + G.heat[2] + G.heat[3];
      const sig = [N, G.wallX, G.wallTarget, document.getElementById('tIn').value, G.m[0], G.pistonMax, G.wallT.join()].join('|'), w = window.__bkq;
      window.__bkq = { sig, E, Q, gen: G.gen };
      if (!w || w.sig !== sig || w.gen !== G.gen || G.wallV !== 0 || G.wallX !== G.wallTarget) return true;
      if (Math.abs((E - w.E) - (Q - w.Q)) > 1e-9 * E) return 'gas energy rose by ' + (E - w.E) + ' J but the walls gave ' + (Q - w.Q) + ' J';
      return true; })()` },
    { name: "readouts equal the live state: N, area, P ideal = N k T / A, 3D rms = sqrt(3/2) x 2D rms, mass", fn: `(() => { ${common}
      if (!one || document.getElementById('read1').hidden || document.body.classList.contains('blind')) return true;
      const T = I.stats.T, A = G.wallX * 30, bad = [];
      if (!settled('read', [N, G.wallX, T, G.m[0]].join('|'))) return true;
      if (rd('rN') !== String(N)) bad.push('rN shows ' + rd('rN') + ', N = ' + N);
      if (rd('rA') !== Math.round(A) + ' nm²') bad.push('rA shows ' + rd('rA') + ', width x 30 = ' + A);
      const pi = N * ${KB} * T / (A * 1e-18) * 1e3, u = rd('rPi'), f = /nN/.test(u) ? 1e-6 : /µN/.test(u) ? 1e-3 : 1;
      if (Math.abs(parseFloat(u) * f - pi) > 0.012 * pi + 0.006 * f) bad.push('P ideal shows ' + u + ', N k T / A = ' + pi + ' mN/m');
      const r2 = parseFloat(rd('rRms')), r3 = parseFloat(rd('rRms3')), tol = r2 >= 10 ? 0.003 : 0.01;
      if (!near(r3 / r2, Math.sqrt(1.5), tol)) bad.push('3D rms ' + rd('rRms3') + ' over 2D rms ' + rd('rRms') + ' is not sqrt(3/2)');
      if (!near(r2, Math.sqrt(2 * ${KB} * T / G.m[0]), 0.006) && Math.abs(r2 - Math.sqrt(2 * ${KB} * T / G.m[0])) > 0.006) bad.push('rms shows ' + rd('rRms') + ', sqrt(2kT/m) = ' + Math.sqrt(2 * ${KB} * T / G.m[0]));
      const want = { h2: 2.016, he: 4.0026, n2: 28.014, ar: 39.948, co2: 44.009 }, chip = document.querySelector('#gasChips [aria-pressed=true]');
      if (chip && !near(G.m[0] / 1.66053906892e-27, want[chip.dataset.gas], 1e-9)) bad.push('gas ' + chip.dataset.gas + ' has m = ' + G.m[0] / 1.66053906892e-27 + ' u');
      for (let i = 1; i < N; i++) if (G.m[i] !== G.m[0]) { bad.push('molecule ' + i + ' has a different mass'); break; }
      return bad.length ? bad.join('; ') : true; })()` },
    { name: "P measured / P ideal stays near one for a steady dilute gas", fn: `(() => { ${common}
      if (!one || !mirror || N < 100 || G.wallV !== 0 || G.wallX !== G.wallTarget || document.getElementById('read1').hidden) { window.__bkp = 0; return true; }
      const sig = [N, G.wallX, G.m[0], document.getElementById('tIn').value].join('|'), W = (window.__bkp = window.__bkp && window.__bkp.sig === sig ? window.__bkp : { sig, t0: performance.now() });
      if (performance.now() - W.t0 < 6000 || document.getElementById('play').textContent !== 'Pause') return true;
      const ratio = parseFloat(rd('rRatio')); if (!isFinite(ratio)) return true;
      const phi = N * Math.PI * G.r[0] ** 2 / (G.wallX * 30), hi = 1 / (1 - phi) ** 2 * 1.15 + 0.1;
      return ratio > 0.8 && ratio < hi ? true : 'P / P ideal = ' + ratio + ' (expected between 0.8 and ' + hi.toFixed(2) + ' at packing ' + phi.toFixed(3) + ')'; })()` },
    { name: "molecule size: every disk has the switch's radius, a setup other than Real molecule sizes gives 0.50 nm, and the size readouts equal their formulas", fn: `(() => { ${common}
      if (!one || document.getElementById('readSize').hidden || document.body.classList.contains('blind')) return true;
      const SIG = { h2: 0.2827, he: 0.2551, n2: 0.3798, ar: 0.3542, co2: 0.3941 }, chip = document.querySelector('#gasChips [aria-pressed=true]'), gas = chip ? chip.dataset.gas : 'ar';
      const real = document.querySelector('#sizeSeg [data-s=real]').getAttribute('aria-pressed') === 'true', r = real ? SIG[gas] / 2 : 0.25, bad = [];
      for (let i = 0; i < N; i++) if (G.r[i] !== r) { bad.push('molecule ' + i + ' has radius ' + G.r[i] + ', want ' + r); break; }
      const pre = document.querySelector('#presets [aria-pressed=true]');
      if (pre && pre.dataset.p !== 'real' && real) bad.push('setup ' + pre.dataset.p + ' is on Real sizes');
      if (pre && pre.dataset.p === 'real' && !real) bad.push('Real molecule sizes is on the model disk');
      const T = I.stats.T, d = 2 * r;
      if (!settled('size', [N, G.wallX, T, G.m[0], r].join('|'))) return bad.length ? bad.join('; ') : true;
      if (parseFloat(rd('rD')) !== +d.toFixed(real ? 3 : 2)) bad.push('d shows ' + rd('rD') + ', want ' + d);
      const Af = (G.wallX - d) * (30 - d), n = N / Af, eta = n * Math.PI * d * d / 4, chi = (1 - 7 * eta / 16) / (1 - eta) ** 2;
      const lam = 1 / (2 * Math.SQRT2 * n * d * chi), lamShown = parseFloat(rd('rL').split('·')[1]);
      if (!near(lamShown, lam, 0.006)) bad.push('2D mean free path shows ' + lamShown + ', formula ' + lam);
      const ex = (G.wallX * 30 / Af * (1 + eta * eta / 8) / (1 - eta) ** 2 * (G.wallX + 30 - 2 * d) / (G.wallX + 30) - 1) * 100, exShown = parseFloat(rd('rEx').split('·')[1]);
      if (Math.abs(exShown - ex) > 0.051) bad.push('hard disk excess shows ' + exShown + '%, formula ' + ex.toFixed(2) + '%');
      const Tb = { h2: 20.35, he: 4.216, n2: 77.36, ar: 87.45, co2: 194.65 }[gas], s = SIG[gas] * 1e-9;
      if (T >= Tb) { const l3 = ${KB} * T / (Math.SQRT2 * Math.PI * s * s * 101325) * 1e9, sh = parseFloat(rd('rL3')); if (!near(sh, l3, 0.006)) bad.push('3D mean free path shows ' + sh + ', formula ' + l3); }
      else if (!/condenses/.test(document.getElementById('rL3').textContent) && !/condensa/.test(document.getElementById('rL3').textContent)) bad.push('below the boiling point the 3D readings should be a dash');
      const b = 2 / 3 * Math.PI * 6.02214076e23 * s ** 3 * 1e3; if (!near(parseFloat(rd('rB')), b, 0.002)) bad.push('b shows ' + rd('rB') + ', (2/3)πN_A σ³ = ' + b);
      return bad.length ? bad.join('; ') : true; })()` },
    { name: "a setup opens at its stated temperature (before it has run)", fn: `(() => { ${common}
      const b = document.querySelector('#presets [aria-pressed=true]'); if (!one || !b || G.lt > 2000) return true;
      const want = { relax: 300, hotcold: 400, compress: 300, dilute: 300, cold: 0.01, walls: 300, flow: 250, real: 300, brown: 300 }[b.dataset.p];
      const tol = G.wallT.some((t) => t > 0) ? 0.03 : 1e-6;
      return near(I.stats.T, want, tol) || G.wallX !== 50 ? true : b.dataset.p + ' opens at T = ' + I.stats.T + ' K, stated ' + want + ' K'; })()` },
    { name: "Brownian motion: the large disk stays in the box and overlaps no molecule; k = γD/T and N_A = R/k as shown; the real case D = kT/(6πηa) = 0.429 µm²/s", fn: `(() => { ${common}
      const B = G.big; if (!I.brown) return B ? 'a large disk is left over outside Brownian motion' : true;
      if (!B) return 'Brownian motion has no large disk';
      if (![B.x, B.y, B.vx, B.vy, B.ux, B.uy].every(Number.isFinite)) return 'the large disk has a non finite state';
      if (B.x < B.r - 1e-6 || B.x > G.wallX - B.r + 1e-6 || B.y < B.r - 1e-6 || B.y > 30 - B.r + 1e-6) return 'the large disk at (' + B.x + ', ' + B.y + ') is outside the box';
      if (Math.abs(B.r - 2) > 1e-12 || Math.abs(B.m / 6.63352e-26 / 60 - 1) > 1e-4) return 'the large disk is not 4.0 nm across and 60 argon masses';
      for (let i = 0; i < N; i++) if (Math.hypot(G.px[i] - B.x, G.py[i] - B.y) < B.r + G.r[i] - 0.05) return 'molecule ' + i + ' sits inside the large disk';
      if (document.body.classList.contains('blind')) return true;
      const bad = [], F = I.BR.fit;
      if (rd('bDisk') !== '4.0 nm across, 2,397 u' && !rd('bDisk').startsWith('4.0 nm')) bad.push('disk shows ' + rd('bDisk'));
      if (!rd('bReal').includes('0.429 µm²/s') || !rd('bReal').includes('6.02 × 10²³')) bad.push('the real case reads ' + rd('bReal'));
      if (F && isFinite(F.D) && F.D > 0) {   /* the readouts are written the moment the fit is made, from it */
        const k = F.gamma * F.D * 1e-6 / I.BR.T, kS = rd('bK').match(/^([\\d.]+) × 10⁻([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/);
        const sup = (t) => +[...t].map((ch) => '⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(ch)).join('');
        if (!kS) bad.push('k shows ' + rd('bK'));
        else if (!near(+kS[1] * 10 ** -sup(kS[2]), k, 0.006)) bad.push('k shows ' + rd('bK') + ', γD/T = ' + k);
        const na = rd('bNA').match(/^([\\d.]+) × 10([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/);
        if (!na) bad.push('N_A shows ' + rd('bNA'));
        else if (!near(+na[1] * 10 ** sup(na[2]), 6.02214076e23 * ${KB} / k, 0.006)) bad.push('N_A shows ' + rd('bNA') + ', R/k = ' + 6.02214076e23 * ${KB} / k);
        if (k < ${KB} * 0.2 || k > ${KB} * 3) bad.push('k = ' + k + ' is far from the Boltzmann constant');
      }
      return bad.length ? bad.join('; ') : true; })()` },
  ],
  steps: [
    { name: 'Brownian motion: fast playback for a long run, then N, T, the gas and Reset mid run, Pause and Step, slow playback, then another setup and back', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      const set = (id, v) => { $(id).value = v; $(id).dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#presets [data-p=brown]').click(); await pause(300);
      if ($('play').textContent === 'Play') $('play').click();
      document.querySelector('#brownRate [data-r="2000"]').click(); await pause(9000);
      set('nIn', 400); await pause(1500); set('nIn', 20); await pause(1000); set('tIn', 1000); await pause(1000); set('tIn', 0); await pause(800);
      document.querySelector('#gasChips [data-gas=h2]').click(); await pause(1000); document.querySelector('#gasChips [data-gas=co2]').click(); await pause(800);
      $('reset').click(); await pause(1500); $('play').click(); await pause(300); $('play').click(); await pause(1500);
      document.querySelector('#brownRate [data-r="200"]').click(); await pause(1000);
      document.querySelector('#presets2 [data-p=mix]').click(); await pause(500); document.querySelector('#presets [data-p=brown]').click(); await pause(500);
      document.querySelector('#presets [data-p=relax]').click(); await pause(500);
    })()` },
    { name: 'molecule sizes: Real molecule sizes, every gas at real size, crowd to 400 and squeeze, cold and hot, back to All 0.50 nm, then a setup', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      const set = (id, v) => { $(id).value = v; $(id).dispatchEvent(new Event('input', { bubbles: true })); };
      if ($('play').textContent === 'Play') $('play').click();
      document.querySelector('#presets [data-p=real]').click(); await pause(600);
      for (const g of ['he', 'h2', 'n2', 'ar', 'co2']) { document.querySelector('#gasChips [data-gas=' + g + ']').click(); await pause(400); }
      set('nIn', 400); await pause(300); set('sIn', 1000); set('wIn', 15); await pause(800); set('tIn', 0); await pause(400); set('tIn', 1000); await pause(400);
      document.querySelector('#gasChips [data-gas=he]').click(); await pause(600);
      document.querySelector('#sizeSeg [data-s=model]').click(); await pause(400); document.querySelector('#sizeSeg [data-s=real]').click(); await pause(400);
      set('wIn', 50); await pause(600);
      document.querySelector('#presets [data-p=relax]').click(); await pause(600);
    })()` },
    { name: 'compress to 15 nm, add molecules to 400, switch gas and walls mid run, then back to 50 nm', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      const set = (id, v) => { $(id).value = v; $(id).dispatchEvent(new Event('input', { bubbles: true })); };
      if ($('play').textContent === 'Play') $('play').click();
      document.querySelector('#presets [data-p=compress]').click(); await pause(300);
      set('sIn', 1000); set('wIn', 15); await pause(500); set('nIn', 400); await pause(300);
      document.querySelector('#gasChips [data-gas=h2]').click(); await pause(300);
      set('tIn', 1000); await pause(200); set('sIn', 25); set('wIn', 50); await pause(400); set('wIn', 15); await pause(300);
      set('nIn', 20); await pause(200); set('nIn', 400); await pause(200); set('tIn', 0); await pause(300);
      document.querySelector('#wallPick [data-k="1"]').click(); document.querySelector('#wallSeg [data-w=held]').click(); set('wtIn', 1000); await pause(400);
      set('accIn', 0.05); await pause(300);
      set('sIn', 1000); set('wIn', 50); await pause(800);
      document.querySelector('#presets [data-p=relax]').click(); await pause(300);
    })()` },
    { name: 'hot wall, cold wall: every wall held in turn, wall pick changes, gas switched, piston pushed mid flow', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      const set = (id, v) => { $(id).value = v; $(id).dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#presets [data-p=flow]').click(); await pause(300);
      for (const k of ['2', '3', 'all', '0']) { document.querySelector('#wallPick [data-k="' + k + '"]').click(); document.querySelector('#wallSeg [data-w=held]').click(); set('wtIn', k === 'all' ? 1000 : 0); await pause(250); }
      document.querySelector('#gasChips [data-gas=co2]').click(); await pause(200); set('wIn', 15); await pause(500);
      document.querySelector('#wallSeg [data-w=insulated]')?.click(); await pause(300);
      document.querySelector('#presets [data-p=cold]').click(); await pause(500); set('wIn', 20); await pause(500);
    })()` },
    { name: 'two gases: every setup, divider closed, hole at its widest and narrowest, open, close again, masses and counts to the limits', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      const set = (id, v) => { $(id).value = v; $(id).dispatchEvent(new Event('input', { bubbles: true })); };
      if ($('play').textContent === 'Play') $('play').click();
      for (const p of ['effuse', 'lightheavy', 'hotcold2', 'mix']) {
        document.querySelector('#presets2 [data-p=' + p + ']').click(); await pause(250);
        for (const d of ['2', '1', '2', '1', '2']) { document.querySelector('#divSeg [data-div="' + d + '"]').click(); await pause(150); }
        set('hole', 1); await pause(150); set('hole', 6); await pause(150);
      }
      set('dA', 1); set('dB', 1); set('nA', 200); set('nB', 200); set('mA', 4); set('mB', 150); set('TA', 1000); set('TB', 50); await pause(500);
      document.querySelector('#divSeg [data-div="2"]').click(); await pause(600);
      set('nA', 0); set('nB', 0); await pause(300); set('nA', 200); await pause(300);
      document.querySelector('#presets [data-p=relax]').click(); await pause(400);
    })()` },
  ],
};
