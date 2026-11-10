/* Known values for the break-it test (tools/breakit.cjs), rotating-frames. Hook: window.__rf (S, ballAt, fou, turnedNow, ...).
   Table view: the ball's speed in the room never changes (no horizontal force, or friction at right angles to the velocity); the
   distance out is the same in both frames; the readouts equal the state (Coriolis 2Ω|v′|, centrifugal Ω²|r′|, the room and table
   speeds); the cited presets (rider 2.72 m/s, 42.7 degrees, 1.19 m; let go 1.57 m/s; fast 1.67 turns; roll circle once in 10.5 s).
   Foucault view: the Coriolis force does no work, so the swing's energy ½v² + ½ω0²r² is constant; the period readout is 2π√(L/g);
   the plane turns 15.04° sin λ an hour (once in T_star over sin λ, T_star = 86 164.1 s) and the measured turn is Ω sin λ·t to within half a swing;
   Paris 11.3°/h and 31.8 h, Sydney 42.9 h, the North Pole 23.93 h, the equator not at all. */
const pre = `const R = window.__rf; if (!R) return true; const S = R.S, DEG = Math.PI / 180;
  const rd = (label) => { for (const dt of document.querySelectorAll('#out dt')) if (dt.textContent === label) return dt.nextElementSibling.textContent.replace(/\\u2212/g, '-'); return null; };
  const num = (t) => (t == null ? NaN : parseFloat(t));
  const mg = (v) => Math.hypot(v[0], v[1]);
`;
module.exports = {
  checks: [
    { name: "table: the speed in the room is constant, the distance out is the same in both frames, the readouts equal the state", fn: `(() => { ${pre}
      if (S.view !== 'table') return true;
      const a = R.ballAt(S.t), z = R.ballAt(0), Om = S.om * 2 * Math.PI / 60;
      if (Math.abs(mg(a.v) - mg(z.v)) > 1e-9 * Math.max(1, mg(z.v))) return 'room speed went from ' + mg(z.v) + ' to ' + mg(a.v);
      if (Math.abs(mg(a.r) - mg(a.rp)) > 1e-9 * Math.max(1, mg(a.r))) return '|r| in the room ' + mg(a.r) + ' but on the table ' + mg(a.rp);
      /* the table frame velocity from the room one: v' = R(-Ωt)(v - Ω z × r) has |v'|² = v² - 2Ω (z × r)·v + Ω² r² */
      const zr = [-a.r[1], a.r[0]], vp2 = mg(a.v) ** 2 - 2 * Om * (zr[0] * a.v[0] + zr[1] * a.v[1]) + Om * Om * mg(a.r) ** 2;
      if (Math.abs(Math.sqrt(Math.max(0, vp2)) - mg(a.vp)) > 1e-9 * Math.max(1, mg(a.vp))) return 'table speed ' + mg(a.vp) + ' but v² − 2Ω(ẑ×r)·v + Ω²r² gives ' + Math.sqrt(vp2);
      if (S.play) return true;
      const tg = document.querySelectorAll('#out dt').length; if (!tg) return 'no readouts';
      const cor = num(rd('Coriolis, 2Ωv′ (per kg)')), cen = num(rd('Centrifugal, Ω²r′ (per kg)')), sr = rd('From the room: speed, distance out'), st = rd('On the table: speed, distance out');
      if (Math.abs(cor - 2 * Math.abs(Om) * mg(a.vp)) > 0.0051) return 'Coriolis shows ' + cor + ', 2Ω|v′| = ' + 2 * Math.abs(Om) * mg(a.vp);
      if (Math.abs(cen - Om * Om * mg(a.rp)) > 0.0051) return 'centrifugal shows ' + cen + ', Ω²r′ = ' + Om * Om * mg(a.rp);
      const [rs, rr] = sr.split(',').map(parseFloat), [ts, tr] = st.split(',').map(parseFloat);
      if (Math.abs(rs - mg(a.v)) > 0.0051 || Math.abs(rr - mg(a.r)) > 0.0051) return 'room readout ' + sr + ', state ' + mg(a.v) + ' m/s, ' + mg(a.r) + ' m';
      if (Math.abs(ts - mg(a.vp)) > 0.0051 || Math.abs(tr - mg(a.rp)) > 0.0051) return 'table readout ' + st + ', state ' + mg(a.vp) + ' m/s, ' + mg(a.rp) + ' m';
      if (mg(a.r) > 2 + 1e-9) return 'the ball is ' + mg(a.r) + ' m out, past the 2 m edge';
      return true; })()` },
    { name: "table: the cited presets (rider 2.72 m/s and 1.19 m, let go 1.57 m/s, fast 1.67 turns, roll circle once in 10.5 s)", fn: `(() => { ${pre}
      if (S.view !== 'table') return true;
      const z = R.ballAt(0), end = R.ballAt(1e9), Om = S.om * 2 * Math.PI / 60;
      if (S.preset === 'rider') { const p0 = [0, -0.88 * 2], miss = Math.abs(p0[0] * z.v[1] - p0[1] * z.v[0]) / mg(z.v);
        if (Math.abs(mg(z.v) - 2.72) > 0.005 || Math.abs(Math.atan2(z.v[0], z.v[1]) / DEG - 42.7) > 0.05 || Math.abs(miss - 1.19) > 0.005) return 'rider: ' + mg(z.v) + ' m/s, ' + Math.atan2(z.v[0], z.v[1]) / DEG + ' deg, misses by ' + miss + ' m'; }
      if (S.preset === 'letgo' && Math.abs(mg(z.v) - 1.57) > 0.005) return 'let go speed ' + mg(z.v);
      if (S.preset === 'fast' && Math.abs(Math.abs(end.phi) / (2 * Math.PI) - 1.67) > 0.005) return 'fast: ' + Math.abs(end.phi) / (2 * Math.PI) + ' turns to the edge, hint says 1.67';
      if (S.preset === 'roll' && (Math.abs(2 * Math.PI / (2 * Om / 7) - 10.5) > 0.03 || Math.abs(2 * Math.PI / Om - 3) > 0.005)) return 'roll circle every ' + 2 * Math.PI / (2 * Om / 7) + ' s';
      return true; })()` },
    { name: "foucault: energy is constant, period 2π√(L/g), the plane turns 15.04° sin λ per hour", fn: `(() => { ${pre}
      if (S.view !== 'foucault') return true;
      const Fo = R.fou(), E = (t) => { const s = Fo.at(t); return 0.5 * (s.vx * s.vx + s.vy * s.vy) + 0.5 * Fo.w0 * Fo.w0 * (s.x * s.x + s.y * s.y); };
      const E0 = E(0); for (const t of [S.t, S.t + 0.37 * Fo.period, 5 * Fo.period, 123.4]) if (Math.abs(E(t) - E0) > 1e-9 * Math.max(E0, 1e-12)) return 'energy ' + E0 + ' at 0 but ' + E(t) + ' at t = ' + t;
      const lat = S.lat * DEG, sp = S.spin ? 1000 : 1, OM = 2 * Math.PI * 1.00273781191135448 / 86400, Tst = 2 * Math.PI / OM;
      if (Math.abs(Tst - 86164.0905) > 0.01) return 'sidereal day ' + Tst + ' s';
      if (Math.abs(Fo.period - 2 * Math.PI * Math.sqrt(S.L / 9.81)) > 1e-9) return 'period ' + Fo.period;
      if (Math.abs(Fo.Oz - sp * OM * Math.sin(lat)) > 1e-15) return 'Ω sin λ = ' + Fo.Oz;
      if (S.play) return true;
      if (Math.abs(num(rd('Swing period 2π√(L/g)')) - Fo.period) > 0.0051) return 'period readout ' + rd('Swing period 2π√(L/g)');
      if (!S.blind) {
        const t = rd('The plane turns'), deg = 360 / (Tst / 3600) * Math.sin(lat) * sp, once = rd('Once round in');
        if (Math.abs(Math.sin(lat)) < 1e-9) { if (t !== 'not at all' || once !== 'never') return 'equator-like latitude but the plane "' + t + '", "' + once + '"'; }
        else { if (Math.abs(num(t) - Math.abs(deg)) > 0.0051) return 'plane turns "' + t + '", should be ' + Math.abs(deg) + '° per hour';
          if (!new RegExp(deg > 0 ? 'clockwise' : 'counterclockwise').test(t) || (deg > 0 && /counter/.test(t))) return 'turning direction wrong: "' + t + '" at latitude ' + S.lat;
          const h = Tst / Math.abs(Math.sin(lat) * sp) / 3600, m = once.match(/\\(([\\d.]+) h\\)/); if (!m || Math.abs(parseFloat(m[1]) - h) > 0.0051) return 'once round in "' + once + '", T*/sin λ = ' + h + ' h'; }
        const turned = R.turnedNow(), exp = Fo.Oz * S.t;
        if (S.start === 'edge' && Math.abs(turned - exp) > Math.abs(Fo.Oz) * Math.PI / Fo.w + 1e-9) return 'measured turn ' + turned + ' rad, Ω sin λ t = ' + exp;
        if (Math.abs(num(rd('Plane turned, measured')) - Math.abs(turned) / DEG) > 0.0051) return 'measured turn readout ' + rd('Plane turned, measured');
      }
      return true; })()` },
    { name: "foucault: the cited presets (Paris 11.3°/h and 31.8 h, Sydney 42.9 h, North Pole 23.93 h, equator none)", fn: `(() => { ${pre}
      if (S.view !== 'foucault' || S.blind || S.play) return true;
      const t = rd('The plane turns'), once = rd('Once round in'), h = num((once.match(/\\(([\\d.]+) h\\)/) || [])[1]);
      if (S.preset === 'paris' && (Math.abs(num(t) - 11.3) > 0.05 || Math.abs(h - 31.8) > 0.05)) return 'Paris: ' + t + ', ' + once;
      if (S.preset === 'south' && (Math.abs(h - 42.9) > 0.05 || /^\\d+(\\.\\d+)?° per hour, clockwise/.test(t))) return 'Sydney: ' + t + ', ' + once;
      if (S.preset === 'pole' && Math.abs(h - 23.93) > 0.006) return 'North Pole: ' + once;
      if (S.preset === 'equator' && t !== 'not at all') return 'equator: ' + t;
      if (S.preset === 'paris' && Math.abs(num(rd('Swing period 2π√(L/g)')) - 16.4) > 0.05) return 'Paris period ' + rd('Swing period 2π√(L/g)');
      if (S.preset === 'short' && Math.abs(num(rd('Swing period 2π√(L/g)')) - 4.5) > 0.05) return 'short period ' + rd('Swing period 2π√(L/g)');
      return true; })()` },
  ],
  steps: [
    { name: 'every preset: roll or release, run, change the turntable rate and latitude mid run, back again', fn: `(async () => {
      const R = window.__rf, pause = (ms) => new Promise((r) => setTimeout(r, ms)), ev = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      for (const p of ['across', 'rider', 'out', 'letgo', 'fast', 'reverse', 'roll', 'paris', 'pole', 'equator', 'south', 'star', 'rosette', 'short']) {
        R.applyPreset(p); R.setPlay(true); await pause(250); R.run(37); R.run(5000); R.setPlay(false);
      }
      R.applyPreset('across'); R.setPlay(true); await pause(200); ev('sOm', 0); await pause(150); ev('sOm', -30); await pause(150); ev('sV', 0); await pause(150); ev('sOm', 30); await pause(300);
      R.applyPreset('paris'); R.setPlay(true); await pause(200); ev('sLat', 0); await pause(150); ev('sLat', -90); await pause(150); ev('sLen', 2); await pause(150); ev('sAmp', 0.5); await pause(300);
      R.applyPreset('across');
    })()` },
  ],
};
