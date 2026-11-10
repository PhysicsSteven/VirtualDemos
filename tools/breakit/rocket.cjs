/* Known values for the break-it test (tools/breakit.cjs), rocket. Hook: window.__rocket (S, fly, P, PRESETS, ...).
   The flight obeys the rocket equation (no gravity: burnout speed = u ln(m0/m_dry); with gravity: minus g times the time in the
   air), velocity is the slope of height and acceleration the slope of velocity (finite differences), the speed is continuous at
   stage separation, the mass falls at the burn rate, the readouts (thrust, weight, burn time, rocket equation) equal the physics of
   the current sliders (mass, speed, height only when paused: they refresh while it runs), and the presets match the numbers in
   their hints (Delta v = 2.30 u, 500 kN against 98 kN, 175 kN against 186 kN, 5276 and 4262 m/s, 45 s and 150 s). */
const pre = `const R = window.__rocket; if (!R) return true;
  const S = R.S, P = R.P(), F = R.fly(), rd = () => { const o = {}; for (const d of document.querySelectorAll('#out > div')) o[d.firstElementChild.textContent] = d.lastElementChild.textContent; return o; };
  const num = (s) => parseFloat(String(s).replace(/,/g, '').replace(/\\u2212/g, '-'));
`;
module.exports = {
  checks: [
    { name: "rocket equation: burnout speed = u ln(m0/m_dry) in deep space, minus g (time in the air) with gravity", fn: `(() => { ${pre}
      if (S.p.two) return true; if (!(P.mf > 0)) return true;
      const ideal = P.u * Math.log((P.md + P.mf) / P.md);
      if (Math.abs(F.dvIdeal - ideal) > 1e-9 * ideal) return 'dvIdeal ' + F.dvIdeal + ' vs ' + ideal;
      if (!isFinite(F.vBurnout)) return 'vBurnout ' + F.vBurnout;
      const air = F.lifts ? F.tb - F.t0 : 0;
      if (!F.lifts) return Math.abs(F.vBurnout) < 1e-9 ? true : 'never lifts but burnout speed ' + F.vBurnout;
      /* waiting on the pad burns fuel: the rocket starts at m1 = m0 - b t0 */
      const m1 = F.m0 - P.b * F.t0, v = P.u * Math.log(m1 / P.md) - P.g * air;
      return Math.abs(F.vBurnout - v) <= 1e-7 * Math.max(1, Math.abs(v)) ? true : 'burnout speed ' + F.vBurnout + ', physics gives ' + v; })()` },
    { name: "kinematics: v = dy/dt, a = dv/dt, mass falls at the burn rate, nothing is NaN, height never negative", fn: `(() => { ${pre}
      const T = [0.1, 0.37, 0.5, 0.8, 0.99, 1.0, 1.01, 1.3].map((x) => x * Math.max(1, F.tb) * 1);
      const eps = 1e-4 * Math.max(1, F.tb);
      for (const t of T) {
        const q = F.at(t); for (const k of ['m', 'v', 'y', 'a']) if (!isFinite(q[k])) return k + ' is ' + q[k] + ' at t = ' + t;
        if (q.y < 0) return 'y < 0 at t = ' + t;
        const q1 = F.at(t - eps), q2 = F.at(t + eps);
        if (q1.landed || q2.landed || q.landed || q1.onPad || q2.onPad) continue;
        if (Math.abs(F.tb - t) < 2 * eps || (S.p.two && Math.abs(F.t1 - t) < 2 * eps)) continue;
        const vd = (q2.y - q1.y) / (2 * eps), ad = (q2.v - q1.v) / (2 * eps), tol = (x) => 1e-3 * Math.max(1, Math.abs(x)) + 1e-3;
        if (Math.abs(vd - q.v) > tol(q.v)) return 'dy/dt ' + vd + ' != v ' + q.v + ' at t = ' + t;
        if (Math.abs(ad - q.a) > tol(q.a)) return 'dv/dt ' + ad + ' != a ' + q.a + ' at t = ' + t;
        if (!S.p.two && q.burning) { const md = (q2.m - q1.m) / (2 * eps); if (Math.abs(md + P.b) > 1e-6 * P.b) return 'dm/dt ' + md + ' != -b'; }
      }
      return true; })()` },
    { name: "two stages: speed and height continuous at separation, dv adds, casing coasts", fn: `(() => { ${pre}
      if (!S.p.two) return true;
      const t1 = F.t1, e = 1e-7, a = F.at(t1 - e), b = F.at(t1 + e);
      if (Math.abs(a.v - b.v) > 1e-3 + 1e-6 * Math.abs(a.v) || Math.abs(a.y - b.y) > 1e-2 + 1e-6 * Math.abs(a.y)) return 'jump at separation: v ' + a.v + ' -> ' + b.v + ', y ' + a.y + ' -> ' + b.y;
      if (Math.abs(F.dvIdeal - (F.dv1 + F.dv2)) > 1e-9) return 'dv1 + dv2 != dvIdeal';
      const m0 = P.md + P.mf + P.mc + P.mf1;
      if (Math.abs(F.dv1 - P.u * Math.log(m0 / (m0 - P.mf1))) > 1e-9 || Math.abs(F.dv2 - P.u * Math.log((P.md + P.mf) / P.md)) > 1e-9) return 'stage dv wrong';
      if (P.g === 0 && P.mf1 > 0 && P.mf > 0 && Math.abs(F.vBurnout - F.dvIdeal) > 1e-6 * F.dvIdeal) return 'deep space burnout ' + F.vBurnout + ' != ' + F.dvIdeal;
      const q = F.at(F.tb + 1000); if (!isFinite(q.y) || q.y < 0) return 'late state ' + q.y;
      return true; })()` },
    { name: "readouts equal the physics: thrust, weight, burn time, rocket equation; mass, speed, height when paused", fn: `(() => { ${pre}
      const o = rd(), W = R.n0;
      if (o['Thrust u × burn rate'] !== W(F.thrust / 1000, 0) + ' kN') return 'thrust shows ' + o['Thrust u × burn rate'] + ', ' + F.thrust;
      if (o['Burn time'] !== W(F.tb, 1) + ' s') return 'burn time shows ' + o['Burn time'] + ', ' + F.tb;
      if (S.p.g && o['Weight at launch m₀g'] !== W(F.m0 * R.G / 1000, 0) + ' kN') return 'weight shows ' + o['Weight at launch m₀g'];
      if (S.p.g === 0 && !String(o['Weight at launch m₀g']).startsWith('0')) return 'weight in deep space: ' + o['Weight at launch m₀g'];
      const ideal = o['Rocket equation u ln(m₀/m_dry)'] ?? o['Rocket equation, both stages'];
      if (ideal !== undefined && ideal !== W(F.dvIdeal) + ' m/s') return 'rocket equation shows ' + ideal + ', ' + F.dvIdeal;
      if (S.run) return true;
      const q = F.at(S.t);
      if (o['Mass now'] !== W(q.m) + ' kg') return 'mass now shows ' + o['Mass now'] + ', ' + q.m;
      if (o['Speed now'] !== W(q.v, 0) + ' m/s') return 'speed now shows ' + o['Speed now'] + ', ' + q.v;
      const h = q.y >= 1000 ? W(q.y / 1000, 2) + ' km' : W(q.y) + ' m'; if (o['Height now'] !== h) return 'height now shows ' + o['Height now'] + ', ' + q.y;
      return true; })()` },
    { name: "presets match their hints: 2.30 u, 500 kN vs 98 kN, 175 kN vs 186 kN, 5276 and 4262 m/s, 45 s and 150 s", fn: `(() => { ${pre}
      const on = document.querySelector('#presets [aria-pressed=true]'); if (!on) return true;
      const p = R.PRESETS[on.dataset.p]; if (S.p.md !== p.md || S.p.mf !== p.mf || S.p.u !== p.u || S.p.b !== p.b || !!S.p.g !== !!p.g) return true;
      const k = on.dataset.p, G = R.G;
      if (k === 'space' && (Math.abs(F.dvIdeal / P.u - 2.30) > 0.005)) return 'space: dv/u = ' + F.dvIdeal / P.u;
      if (k === 'earth' && (Math.round(F.thrust / 1000) !== 500 || Math.round(F.m0 * G / 1000) !== 98 || Math.abs(F.tb - 45) > 1e-9)) return 'earth numbers off';
      if (k === 'heavy' && (Math.round(F.thrust / 1000) !== 175 || Math.round(F.m0 * G / 1000) !== 186 || !(F.t0 > 0))) return 'heavy numbers off, t0 = ' + F.t0;
      if (k === 'slow' && Math.abs(F.tb - 150) > 1e-9) return 'slow burn time ' + F.tb;
      if (k === 'two' && (Math.round(F.dvIdeal) !== 5276 || Math.round(F.dvSingle) !== 4262 || P.md + P.mf + P.mc + P.mf1 !== 11000 || P.md + P.mf !== 3000)) return 'two: ' + F.dvIdeal + ' ' + F.dvSingle;
      return true; })()` },
  ],
  steps: [
    { name: "launch, let it run into the end, change settings mid flight, launch again", fn: `(async () => {
      const R = window.__rocket; if (!R) return;
      document.querySelector('#presets [data-p=two]').click(); document.getElementById('go').click();
      await new Promise((r) => setTimeout(r, 700));
      const s = document.getElementById('sMf1'); s.value = 0; s.dispatchEvent(new Event('input', { bubbles: true }));
      document.getElementById('go').click(); await new Promise((r) => setTimeout(r, 300));
      const f = document.getElementById('sMf'); f.value = 0; f.dispatchEvent(new Event('input', { bubbles: true }));
      document.getElementById('go').click(); await new Promise((r) => setTimeout(r, 300)); document.getElementById('go').click();
    })()` },
    { name: "no fuel anywhere, heavy rocket on gravity, then the fastest burn", fn: `(async () => {
      const set = (id, v) => { const s = document.getElementById(id); s.value = v; s.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#presets [data-p=heavy]').click(); document.getElementById('go').click(); await new Promise((r) => setTimeout(r, 500));
      set('sMf', 0); set('sB', 500); document.getElementById('go').click(); await new Promise((r) => setTimeout(r, 300));
      set('sMf', 20000); set('sM0', 5000); set('sU', 500); document.getElementById('go').click(); await new Promise((r) => setTimeout(r, 500));
    })()` },
  ],
};
