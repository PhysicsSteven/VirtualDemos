/* Known values for the break-it test (tools/breakit.cjs), energy-track. Hook: window.__et (S, P, step, energies, etGeom, ...).
   Energy conservation: K + g·y + thermal equals the total the skater started with (st.e0) at every step, on the track, in the air
   and on the ground; K and thermal are never negative; the skater stays between the walls (0 to 12 m); the Total bar is
   m·e0 − m·g·yRef (moving the U = 0 line shifts all of U and the total, never the motion); the Kinetic, Potential, Thermal and Height readouts equal the state (when paused). */
const pre = `const E = window.__et; if (!E || !E.S.st) return true; const S = E.S, st = S.st, G = { earth: 9.81, moon: 1.62, mars: 3.71, jupiter: 24.79 }[S.g], p = E.P();
  const pos = st.mode === 'track' ? E.etGeom(S.tr, st.u) : { x: st.x, y: st.y };
  const v2 = st.mode === 'air' ? st.vx * st.vx + st.vy * st.vy : st.v * st.v;
`;
module.exports = {
  checks: [
    { name: "K + g·y + thermal = the starting total at every step; K, thermal >= 0", fn: `(() => { ${pre}
      if (![st.e0, st.th, st.v, st.t].every(isFinite) || ![pos.x, pos.y].every(isFinite)) return 'non finite state ' + JSON.stringify({ e0: st.e0, th: st.th, v: st.v, x: pos.x, y: pos.y, mode: st.mode });
      const tot = 0.5 * v2 + G * pos.y + st.th;
      if (Math.abs(tot - st.e0) > 1e-9 * Math.max(1, Math.abs(st.e0))) return 'K + gy + th = ' + tot + ' per kg, but the total was ' + st.e0 + ' (' + st.mode + ')';
      if (st.th < -1e-9) return 'thermal energy is negative: ' + st.th;
      return true; })()` },
    { name: "the skater stays between the walls and above the ground (track points are above 0)", fn: `(() => { ${pre}
      if (pos.x < -1e-6 || pos.x > 12 + 1e-6) return 'x = ' + pos.x + ' is outside the walls (0 to 12 m)';
      if (st.mode !== 'track' && pos.y < -1e-6) return 'y = ' + pos.y + ' is below the ground in ' + st.mode;
      return true; })()` },
    { name: "energy bars: m·(K, U, thermal) and the total m·e0 − m·g·yRef", fn: `(() => { ${pre}
      const e = E.energies(), m = S.m;
      if (Math.abs(e.K - m * 0.5 * v2) > 1e-9 * Math.max(1, e.K)) return 'K bar ' + e.K;
      if (Math.abs(e.U - m * G * (pos.y - S.yRef)) > 1e-9 * Math.max(1, Math.abs(e.U))) return 'U bar ' + e.U + ' for y = ' + pos.y + ', yRef ' + S.yRef;
      const tot = e.K + e.U + e.Th, want = m * st.e0 - m * G * S.yRef;
      if (Math.abs(tot - want) > 1e-9 * Math.max(1, Math.abs(want))) return 'bars add to ' + tot + ', should be ' + want;
      return true; })()` },
    { name: "readouts equal the state: Height, Kinetic, Potential, Thermal (paused)", fn: `(() => { ${pre}
      if (S.run || S.blind) return true;
      const dds = {}; for (const d of document.querySelectorAll('#out > div')) dds[d.querySelector('dt').textContent.trim()] = d.querySelector('dd').textContent.replace(/\\u2212/g, '-');
      const J = (s) => { const m = (s || '').match(/^(-?[\\d.]+) (k?)J$/); return m ? [parseFloat(m[1]) * (m[2] ? 1000 : 1), m[2] ? 51 : /\\./.test(m[1]) ? 0.051 : 0.51] : null; };
      const e = E.energies();
      const h = parseFloat(dds['Height y']); if (isFinite(h) && Math.abs(h - pos.y) > 0.0051) return 'Height shows ' + dds['Height y'] + ', y = ' + pos.y;
      for (const [k, v] of [['Kinetic K', e.K], ['Potential U', e.U], ['Thermal Eth', e.Th]]) { const key = Object.keys(dds).find((x) => x.replace(/\\s/g, '') === k.replace(/\\s/g, '')); if (!key) continue; const r = J(dds[key]); if (r && Math.abs(r[0] - v) > r[1]) return key + ' shows ' + dds[key] + ', state ' + v; }
      return true; })()` },
  ],
  steps: [
    { name: 'every setup, run 12 s each at 4x on every planet and with friction 0.5; check the energy at every half second', fn: `(async () => {
      const E = window.__et, pause = (ms) => new Promise((r) => setTimeout(r, ms));
      const bad = (where) => { const S = E.S, st = S.st, G = { earth: 9.81, moon: 1.62, mars: 3.71, jupiter: 24.79 }[S.g], pos = st.mode === 'track' ? E.etGeom(S.tr, st.u) : { x: st.x, y: st.y };
        const v2 = st.mode === 'air' ? st.vx * st.vx + st.vy * st.vy : st.v * st.v, d = 0.5 * v2 + G * pos.y + st.th - st.e0;
        if (!(Math.abs(d) < 1e-9 * Math.max(1, Math.abs(st.e0))) || st.th < -1e-9 || !isFinite(pos.x)) throw new Error(where + ': energy off by ' + d + ' (' + st.mode + ', th ' + st.th + ')'); };
      for (const b of [...document.querySelectorAll('#presets button')]) {
        b.click(); await pause(50);
        for (const g of ['earth', 'jupiter', 'moon']) for (const mu of [0, 0.5]) {
          document.querySelector('#gSeg [data-g=' + g + ']').click(); const m = document.getElementById('sMu'); m.value = String(mu); m.dispatchEvent(new Event('input', { bubbles: true }));
          for (let i = 0; i < 24; i++) { E.step(0.5); bad(b.dataset.p + ' ' + g + ' mu ' + mu + ' t ' + E.S.st.t.toFixed(1)); }
        }
      }
      document.querySelector('#presets button').click(); await pause(100);
    })()` },
    { name: 'drag the U = 0 line up and down mid run, change the mass, return the skater', fn: `(async () => {
      const E = window.__et, pause = (ms) => new Promise((r) => setTimeout(r, ms));
      document.querySelector('#presets [data-p=loop]').click(); await pause(100); document.getElementById('play').click(); await pause(400);
      for (const y of [0, 8, 4.1, 0]) { E.S.yRef = y; E.S.runKey++; E.S.hist = []; await pause(150); }
      const m = document.getElementById('sM'); for (const v of ['20', '120', '60']) { m.value = v; m.dispatchEvent(new Event('input', { bubbles: true })); await pause(150); }
      document.getElementById('restart').click(); await pause(200);
    })()` },
  ],
};
