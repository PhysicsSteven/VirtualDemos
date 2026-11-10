/* Known values for the break-it test (tools/breakit.cjs), impulse. Hook: window.__imp (S, stats, contact, force, cartState, ...).
   The area under F(t) is the impulse J = m(1 + e) v0 = m (v1 - v2): checked on the exact force curve for every mass, speed and
   bumper, and on the sampled trapezoid sum at 1 kHz and faster; the cart's position and velocity are continuous at the start of
   contact, at maximum compression and at separation, and it leaves with speed e v0 (kinetic energy ratio e²); the sensor's
   peak is at most k x_max and (at 1 kHz and faster) within 3 % of it; the bumper presets are the cited k and e; once the run is
   over the readouts equal the state: v1, v2 = -e v1, momentum change m(v2 - v1), contact time, average force J/tc. */
const pre = `const I = window.__imp; if (!I) return true;
  const S = I.S, near = (g, w, t) => Math.abs(g - w) <= t * Math.max(Math.abs(w), 1e-300);
  const num = (s) => parseFloat(String(s).replace(/\\u2212/g, '-'));
  const row = (label) => { const d = [...document.querySelectorAll('#out dt')].find((x) => x.textContent.trim().startsWith(label)); return d ? d.nextElementSibling.textContent.trim() : null; };
`;
module.exports = {
  checks: [
    { name: "bumper presets: stiff 4000 N/m e 0.90, soft 400 N/m e 0.90, clay 1500 N/m e 0.10", fn: `(() => { ${pre}
      const B = I.BUMPERS; if (B.stiff.k !== 4000 || B.stiff.e !== 0.9 || B.soft.k !== 400 || B.soft.e !== 0.9 || B.clay.k !== 1500 || B.clay.e !== 0.1) return 'bumper table changed: ' + JSON.stringify(B);
      return true; })()` },
    { name: "impulse: ∫F dt = m(1+e)v0 on the exact curve; sampled area within 3% at 1 kHz and up; peak ≤ k x_max", fn: `(() => { ${pre}
      const b = I.BUMPERS[S.bump], c = I.contact(S.m, S.v0, b); if (!isFinite(c.J) || !isFinite(c.tc) || !(c.tc > 0)) return 'non finite contact ' + JSON.stringify(c);
      let a = 0; const N = 20000, dt = c.tc / N; for (let i = 0; i < N; i++) a += I.force(c, (i + 0.5) * dt) * dt;
      if (!near(a, c.J, 1e-4)) return '∫F dt = ' + a + ', m(1+e)v0 = ' + c.J;
      if (!near(c.J, S.m * (S.v0 - c.vOut), 1e-12)) return 'J is not m (v1 - v2)';
      if (!near(c.Fmax, b.k * c.xmax, 1e-12) || !near(c.xmax, S.v0 * Math.sqrt(S.m / b.k), 1e-12)) return 'Fmax or xmax wrong';
      const st = I.stats(); if (!st.peak || st.peak > c.Fmax + 0.0051) return 'sensor peak ' + st.peak + ' exceeds k x_max = ' + c.Fmax;
      if (S.rate >= 1000) { if (!near(st.area, c.J, 0.03)) return 'sampled area ' + st.area + ' vs J = ' + c.J + ' at ' + S.rate + ' Hz'; if (st.peak < 0.97 * c.Fmax - 0.01) return 'sensor peak ' + st.peak + ' far below ' + c.Fmax; }
      return true; })()` },
    { name: "cart state continuous through the bounce, leaves at e v0 (energy e²)", fn: `(() => { ${pre}
      const b = I.BUMPERS[S.bump], c = I.contact(S.m, S.v0, b), th = I.tHit(), e = 1e-9, cs = (u) => I.cartState(S.m, S.v0, b, th + u);
      for (const u of [0, c.t1, c.tc]) { const p = cs(u - e), q = cs(u + e); if (Math.abs(p.x - q.x) > 1e-6 || Math.abs(p.v - q.v) > 1e-5 * S.v0 + 1e-6) return 'jump at u = ' + u + ': ' + JSON.stringify(p) + ' vs ' + JSON.stringify(q); }
      const out = cs(c.tc + 0.1); if (!near(out.v, -b.e * S.v0, 1e-9) || !near(out.v * out.v, b.e * b.e * S.v0 * S.v0, 1e-9)) return 'leaves at ' + out.v;
      if (!near(cs(c.t1).x, c.xmax, 1e-9)) return 'max compression ' + cs(c.t1).x + ' vs ' + c.xmax;
      return true; })()` },
    { name: "readouts after the run equal the state (v1, v2 = -e v1, m Δv, contact time, J/tc)", fn: `(() => { ${pre}
      if (!S.done || S.run) return true;
      const b = I.BUMPERS[S.bump], c = I.contact(S.m, S.v0, b), v1 = num(row('Velocity before')), v2 = num(row('Velocity after'));
      if (Math.abs(v1 - S.v0) > 0.00051) return 'v1 shows ' + v1 + ', v0 ' + S.v0;
      if (Math.abs(v2 + b.e * S.v0) > 0.00051) return 'v2 shows ' + v2 + ', -e v0 = ' + (-b.e * S.v0);
      const tc = num(row('Contact time')); if (Math.abs(tc - c.tc * 1000) > 0.051) return 'contact time shows ' + tc + ' ms, ' + c.tc * 1000;
      if (S.blind) return true;
      const dp = num(row('Cart momentum')), want = S.m * (v2 - v1); if (Math.abs(dp - want) > 0.00006) return 'momentum change shows ' + dp + ', m(v2 - v1) = ' + want;
      const avg = num(row('Average force')); if (Math.abs(avg - c.J / c.tc) > 0.0051 + 1e-12) return 'average force ' + avg + ', J/tc = ' + c.J / c.tc;
      const ar = num(row('Area under')); if (S.rate >= 1000 && !near(ar, -dp, 0.03)) return 'area shows ' + ar + ' N·s, momentum change ' + dp;
      return true; })()` },
  ],
  steps: [
    { name: 'each bumper at extreme mass and speed: launch, finish, record, change a slider after the run, rate 100 Hz and back', fn: `(async () => {
      const p = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      for (const b of ['clay', 'soft', 'stiff']) {
        document.querySelector('#bumpSeg [data-b=' + b + ']').click();
        for (const [m, v] of [[document.getElementById('sM').min, document.getElementById('sV').max], [document.getElementById('sM').max, document.getElementById('sV').min]]) {
          set('sM', m); set('sV', v); document.querySelector('#speedSeg button:last-child').click(); document.getElementById('go').click();
          const t0 = Date.now(); while (!window.__imp.S.done && Date.now() - t0 < 15000) await p(200);
          document.getElementById('capture').click(); document.querySelector('#rateSeg button').click(); await p(150); document.querySelector('#rateSeg button:last-child').click();
          set('sM', '0.5'); await p(100);
        }
      }
      document.getElementById('go').click(); document.getElementById('go').click(); await p(200);
    })()` },
  ],
};
