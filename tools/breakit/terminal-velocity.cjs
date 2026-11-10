/* Known values for the break-it test (tools/breakit.cjs), terminal-velocity. Hook: window.__tv (S with S.f the fall and S.s the state;
   step, to). Quadratic drag D = (1/2) rho CA v^2, down positive:
   with a fixed drag area in uniform air (a filter, or a skydiver before any change of position or the pull) the fall from rest is
   exactly v = vT tanh(g t/vT) and y = (vT^2/g) ln cosh(g t/vT); the speed never exceeds vT there; the readouts a = g(1 - D/mg),
   D/mg, v, y, altitude, vT = sqrt(2mg/(rho CA)) equal the live state; mgy - mv^2/2 (the heat given to the air) never goes negative; v
   never goes negative; after landing y = the start height. The cited setups: 44.5 m/s (spread eagle, 85 kg), 98.2 (head first, 75 kg),
   4.65 under the canopy, 1.05 for one filter and about twice that for four, air at 10 km a third as dense, and in thin air the
   speed peaks above 70 m/s (checked by a separate integration). KNOWN, not fixed (cited text): the hints for Head first (98.2), Parachute
   (4.65) and Four filters (2.09) are the textbook's rho = 1.21 values; at the demo's 1.204 the readouts show 98.5, 4.66 and 2.10, so the
   tolerances here are loose (0.4 %) on purpose. */
const pre = `const T = window.__tv; if (!T) return true; const S = T.S; if (!S.f || !S.s) return true;
  const G = 9.81, f = S.f, s = S.s;
  const rd = (label) => { for (const d of document.querySelectorAll('#out dt')) if (d.textContent.indexOf(label) === 0) return d.nextElementSibling.textContent.replace(/\\u2212/g, '-'); return null; };
  const ISA = { T0: 288.15, P0: 101325, L: 0.0065, M: 0.0289644, R: 8.31432, g0: 9.80665 };
  const rhoAt = (z) => { const Tz = ISA.T0 - ISA.L * Math.min(z, 11000), p = ISA.P0 * Math.pow(Tz / ISA.T0, ISA.g0 * ISA.M / (ISA.R * ISA.L)); return p * ISA.M / (ISA.R * Tz); };
  const CAof = (k) => ({ spread: 1.0 * 0.70, head: 0.70 * 0.18, upright: 0.70 * 0.18 })[k];
  const FCA = 0.71 * Math.PI * 0.151 * 0.151 / 4, CCA = 0.81 * Math.PI * 100 / 4;
  const vT = (m, CA, rho) => Math.sqrt(2 * m * G / (rho * CA));
`;
module.exports = {
  checks: [
    { name: "fixed drag area, uniform air: v = vT tanh(gt/vT), y = (vT^2/g) ln cosh(gt/vT), and v <= vT", fn: `(() => { ${pre}
      const fixed = f.kind === 'filter' || (f.air === 'text' && !f.moves.length && f.pull == null);
      if (!fixed || s.t <= 0 || s.t > 400) return true;
      const CA = f.kind === 'filter' ? FCA : CAof(f.pos0), v = vT(f.m, CA, 1.204), x = G * s.t / v;
      const lc = x + Math.log1p(Math.exp(-2 * x)) - Math.LN2, ve = v * Math.tanh(x), ye = v * v / G * lc;
      if (Math.abs(s.v - ve) > 2e-5 * v) return 'v = ' + s.v + ' at t = ' + s.t + ', exact ' + ve;
      if (Math.abs(s.y - ye) > 2e-5 * Math.max(ye, 1e-3) + 1e-9) return 'y = ' + s.y + ' at t = ' + s.t + ', exact ' + ye;
      if (s.v > v * (1 + 1e-9)) return 'v ' + s.v + ' above vT ' + v;
      return true; })()` },
    { name: "readouts equal the live state: v, a, y, altitude, vT, D/mg, ρ", fn: `(() => { ${pre}
      if (S.blind && false) return true;
      const sky = f.kind === 'sky', t = s.t;
      const CA = sky ? (() => { const open = f.pull != null ? f.pull + 1 : Infinity; return null; })() : null;
      const v = parseFloat(rd('Speed v')), y = parseFloat(rd('Fallen y')), a = parseFloat(rd('Acceleration a')), ck = parseFloat(rd('Clock t'));
      if (Math.abs(v - s.v) > 0.0051 || Math.abs(y - s.y) > 0.0051 || Math.abs(ck - t) > 0.0051) return 'readouts v, y, t = ' + rd('Speed v') + ', ' + rd('Fallen y') + ', ' + rd('Clock t') + '; state ' + s.v + ', ' + s.y + ', ' + t;
      if (sky && Math.abs(parseFloat(rd('Altitude')) - (f.h0 - s.y)) > 0.051) return 'altitude shows ' + rd('Altitude') + ', h0 - y = ' + (f.h0 - s.y);
      if (S.blind) return true;
      const rho = f.air === 'isa' ? rhoAt(f.h0 - s.y) : 1.204; if (Math.abs(parseFloat(rd('Air density')) - rho) > 0.00051) return 'air density shows ' + rd('Air density') + ', physics ' + rho;
      const dmg = parseFloat(rd('D/mg')), vt = parseFloat(rd('Terminal speed here')), CAs = parseFloat(rd('Drag area'));
      if (Math.abs(vt - vT(f.m, CAs, rho)) > 0.006 * vt + 0.0051 && Math.abs(CAs) > 0) { const lo = vT(f.m, CAs * (1 + 5e-3), rho), hi = vT(f.m, CAs * (1 - 5e-3), rho); if (!(vt >= lo - 0.0051 && vt <= hi + 0.0051)) return 'vT shows ' + vt + ' but sqrt(2mg/(rho CA)) with the shown CA ' + CAs + ' is ' + vT(f.m, CAs, rho); }
      const want = G * (1 - dmg); if (Math.abs(a - want) > 0.0006 * G + 0.0051) return 'a shows ' + rd('Acceleration a') + ' but g(1 - D/mg) = ' + want.toFixed(3) + ' with D/mg ' + dmg;
      const Dm = 0.5 * rho * CAs * s.v * s.v / (f.m * G); if (Math.abs(Dm - dmg) > 0.0006 + 0.006 * Dm * 0.1 + (CAs > 1 ? 0.006 * Dm : 0.0006 * Dm)) return 'D/mg shows ' + dmg + ', rho CA v^2/(2mg) from the shown values = ' + Dm.toFixed(4);
      return true; })()` },
    { name: "limits: v >= 0, y within 0..h0, mgy - mv^2/2 >= 0 (drag only takes energy), landed means y = h0", fn: `(() => { ${pre}
      if (!(s.v >= 0) || !isFinite(s.v)) return 'v = ' + s.v;
      if (!(s.y >= 0) || s.y > f.h0 + 1e-9) return 'y = ' + s.y + ' outside 0..' + f.h0;
      if (f.air === 'text' || true) { const lost = f.m * G * s.y - 0.5 * f.m * s.v * s.v; if (lost < -1e-6 * f.m * G * Math.max(s.y, 1)) return 'kinetic + the work against drag exceeds the work by gravity (energy created): ' + lost; }
      if (S.landed && s.y !== f.h0) return 'landed but y = ' + s.y + ', h0 = ' + f.h0;
      return true; })()` },
    { name: "cited setups: vT 44.5 and 98.2 m/s, 4.65 under canopy, 1.05 and about 2.1 for filters, ISA air at 10 km a third, thin air peak > 70 m/s", fn: `(() => { ${pre}
      const p = S.preset; if (window.__tvc && window.__tvc === p) return true; window.__tvc = p;
      let m = null; const chk = (v, w, t, what) => { if (!m && Math.abs(v - w) > t) m = what + ' = ' + v.toFixed(4) + ', cited ' + w; };
      if (p === 'spread') chk(vT(85, CAof('spread'), 1.204), 44.5, 0.05, 'spread eagle vT');
      if (p === 'head') chk(vT(75, CAof('head'), 1.204), 98.2, 0.4, 'head first vT');
      if (p === 'canopy') chk(vT(85, CAof('upright') + CCA, 1.204), 4.65, 0.02, 'under canopy vT');
      if (p === 'filter1') { chk(vT(0.86e-3, FCA, 1.204), 1.05, 0.005, 'one filter vT'); const v = vT(0.86e-3, FCA, 1.204), x = 0.22 * G / (v * v); chk(Math.acosh(Math.exp(x)) > 0 ? Math.tanh(Math.acosh(Math.exp(x))) : 0, 0.99, 0.01, 'speed after 22 cm over vT'); }
      if (p === 'filter4') chk(vT(4 * 0.86e-3, FCA, 1.204), 2.09, 0.015, 'four filters vT');
      if (p === 'thin') {
        chk(rhoAt(10000) / rhoAt(0), 1 / 3, 0.02, 'air at 10 km over sea level');
        let t = 0, y = 0, v = 0, pk = 0; const h = 0.002; const acc = (y2, v2) => G - 0.5 * rhoAt(10000 - y2) * CAof('spread') * v2 * v2 / 85;
        while (y < 9000) { const k1 = acc(y, v), k2 = acc(y + v * h / 2, v + k1 * h / 2); y += (v + k2 * h / 2) * h; v += k2 * h; t += h; if (v > pk) pk = v; if (t > 400) break; }
        if (!m && !(pk > 70)) m = 'thin air peak speed ' + pk.toFixed(1) + ', cited above 70 m/s';
      }
      return m || true; })()` },
  ],
  steps: [
    { name: 'Jump, change position mid fall many times, pull, land; then every body, air and playback speed, then Restart', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), click = (q) => { const e = document.querySelector(q); if (e && !e.disabled) e.click(); };
      for (const p of ['spread', 'head', 'canopy', 'thin']) {
        click('#presets [data-p=' + p + ']'); await pause(200); click('#spdSeg [data-s="2"]'); click('#go'); await pause(300);
        for (const pos of ['head', 'spread', 'head', 'spread']) { click('#posSeg [data-pos=' + pos + ']'); await pause(80); }
        click('#pull'); click('#pull'); await pause(500); click('#step'); click('#step'); click('#go'); click('#go'); await pause(600);
      }
      click('#presets [data-p=filter4]'); click('#go'); await pause(1200); click('#restart'); click('#presets [data-p=spread]'); await pause(300);
    })()` },
    { name: 'Sliders to their extremes mid fall (mass, exit and pull altitude, air, filters stacked), Jump after landing', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); if (!e || e.offsetParent === null) return; e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); e.dispatchEvent(new Event('change', { bubbles: true })); };
      document.querySelector('#presets [data-p=spread]').click(); await pause(200);
      document.querySelector('#spdSeg [data-s="2"]').click(); document.getElementById('go').click(); await pause(300);
      for (const [id, v] of [['sM', '40'], ['sM', '130'], ['sH', '11000'], ['sH', '1000'], ['sP', '3000'], ['sP', '500']]) { set(id, v); await pause(150); }
      const isa = document.querySelector('#airSeg [data-air=isa]'); if (isa) { isa.click(); await pause(300); }
      await pause(1500);
      document.querySelector('#presets [data-p=filter1]').click(); await pause(200);
      for (const [id, v] of [['sN', '8'], ['sN', '1'], ['sD', '0.5'], ['sD', '3']]) { set(id, v); await pause(150); }
      document.getElementById('go').click(); await pause(1500); document.getElementById('go').click(); await pause(200);
      document.querySelector('#presets [data-p=spread]').click(); await pause(300);
    })()` },
  ],
};
