'use strict';
// Kepler's Laws Sandbox, rendezvous: burns, the lead angle, the Hohmann transfer, time to the apsides, and the closest approach forecast.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const K = core('kepler-orbits', 'TAU,KMS,nbAdvance,nbCircular,nbHost,nbElements,nbTotals,rvBurn,rvLead,hohmann,rvApsisTime,rvPredict');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const GM = K.TAU ** 2, ms = 2e4 / 1.98841e30;
const mk = (id, m, x, y, vx, vy) => ({ id, name: id, m, x, y, vx, vy, R: 1e-12 });
function circ(id, r, deg, sun) { const a = deg * Math.PI / 180, b = mk(id, ms, r * Math.cos(a), r * Math.sin(a), 0, 0); Object.assign(b, K.nbCircular(sun, ms, b.x, b.y)); return b; }
const setup = (r2, lead) => { const sun = mk('S', 1, 0, 0, 0, 0); return [sun, circ('ship', 1, 0, sun), circ('tgt', r2, lead, sun)]; };
const run = (bs, T) => { const st = { t: 0, bs }; while (st.t < T - 1e-12) K.nbAdvance(st, T, 1e7); return st; };

group('Hohmann transfer from 1 AU to 1.52368 AU (Mars): 2.945 and 2.649 km/s, 258.9 days, target 44.3° ahead (by hand)', () => {
  const h = K.hohmann(1, 1.52368, GM), at = 1.26184, v1 = 2 * Math.PI, v2 = 2 * Math.PI / Math.sqrt(1.52368);
  near(h.at, at, 1e-12, 'a'); near(h.dv1, v1 * (Math.sqrt(2 * 1.52368 / 2.52368) - 1), 1e-12, 'dv1'); near(h.dv2, v2 * (1 - Math.sqrt(2 / 2.52368)), 1e-12, 'dv2');
  near(h.dv1 * K.KMS, 2.945, 5e-4, 'dv1 km/s'); near(h.dv2 * K.KMS, 2.649, 5e-4, 'dv2 km/s'); near(h.t * 365.25, 258.86, 0.01, 'days');
  near(h.lead, 180 - 360 * h.t / Math.pow(1.52368, 1.5), 1e-9, 'lead'); near(h.lead, 44.34, 0.005, 'lead value');
  const d = K.hohmann(1.52368, 1, GM); assert(d.dv1 < 0 && d.dv2 < 0, 'inward: both burns backward'); near(d.t, h.t, 1e-12, 'same half ellipse');
});
group('a burn changes only the velocity, by Δv in the chosen direction; forward and backward are along the motion, outward along r', () => {
  const [sun, s] = setup(1, 30), dv = 0.5 / K.KMS, v0 = [s.vx, s.vy], x0 = [s.x, s.y];
  K.rvBurn(s, sun, 'fwd', dv); near(Math.hypot(s.vx, s.vy), Math.hypot(...v0) + dv, 1e-12, 'forward adds to the speed'); assert(s.x === x0[0] && s.y === x0[1]);
  K.rvBurn(s, sun, 'back', dv); near(s.vx, v0[0], 1e-12); near(s.vy, v0[1], 1e-12);
  K.rvBurn(s, sun, 'out', dv); near(s.vx - v0[0], dv, 1e-12, 'outward at (1, 0) is +x'); K.rvBurn(s, sun, 'in', dv); near(s.vx, v0[0], 1e-12);
});
group('speeding up drops you behind: after a 0.9 km/s forward burn the ship\'s period is longer and a year later the target is further ahead', () => {
  const bs = setup(1, 30); K.rvBurn(bs[1], bs[0], 'fwd', 0.9 / K.KMS);
  const el = K.nbElements(bs[1], bs[0]); assert(el.P > 1.09 && el.a > 1.06, `P ${el.P}`);
  const st = run(bs, 1); const lead = K.rvLead(st.bs[1], st.bs[2], st.bs[0]); assert(lead > 60, `lead after a year ${lead}`);
});
group('catching a target 30° ahead: 0.903 km/s backward gives P = 11/12 yr; one lap later the ship is within 10⁻⁴ AU and a matching burn leaves under 0.01 km/s', () => {
  const aC = Math.pow(11 / 12, 2 / 3), dvx = 2 * Math.PI - Math.sqrt(GM * (2 - 1 / aC)); near(dvx * K.KMS, 0.9031, 1e-4, 'needed Δv');
  const bs = setup(1, 30); K.rvBurn(bs[1], bs[0], 'back', 0.903 / K.KMS);
  near(K.nbElements(bs[1], bs[0]).P, 11 / 12, 2e-4, 'period'); near(K.rvLead(bs[1], bs[2], bs[0]), 30, 1e-9, 'lead now');
  const ta = K.rvApsisTime(bs[1], bs[0], 'apo'); near(ta, K.nbElements(bs[1], bs[0]).P, 1e-9, 'at the farthest point now, so the next is one period on');
  const st = run(bs, ta), s = st.bs[1], g = st.bs[2]; K.rvBurn(s, st.bs[0], 'fwd', 0.903 / K.KMS);
  assert(Math.hypot(g.x - s.x, g.y - s.y) < 1e-4, 'close'); assert(Math.hypot(g.vx - s.vx, g.vy - s.vy) * K.KMS < 0.01, 'matched');
});
group('the Mars transfer flown with the n body steps: arrival within 0.005 AU, and the second burn leaves under 0.1 km/s (alongside)', () => {
  const h = K.hohmann(1, 1.52368, GM), bs = setup(1.52368, h.lead); near(K.rvLead(bs[1], bs[2], bs[0]), h.lead, 1e-9, 'lead');
  K.rvBurn(bs[1], bs[0], 'fwd', 2.94 / K.KMS);
  const ta = K.rvApsisTime(bs[1], bs[0], 'apo'); near(ta, h.t, 0.002, 'coast time to the farthest point ≈ the half ellipse');
  const pr = K.rvPredict(bs, 'ship', 'tgt', 2); assert(pr.d < 0.005, `forecast miss ${pr.d}`); near(pr.t, ta, 0.01, 'forecast time');
  const st = run(bs, ta), s = st.bs[1], g = st.bs[2]; K.rvBurn(s, st.bs[0], 'fwd', 2.65 / K.KMS);
  assert(Math.hypot(g.x - s.x, g.y - s.y) < 0.005); assert(Math.hypot(g.vx - s.vx, g.vy - s.vy) * K.KMS < 0.1);
  near(K.nbElements(s, st.bs[0]).e, 0, 0.002, 'circular after the second burn');
});
group('time to the apsides follows Kepler\'s equation: from perihelion the farthest point is half a period on, and the nearest a full period', () => {
  const sun = mk('S', 1, 0, 0, 0, 0), a = 2, e = 0.5, q = a * (1 - e), b = mk('P', ms, q, 0, 0, Math.sqrt(GM * (1 + e) / q)), P = Math.sqrt(a ** 3);
  near(K.rvApsisTime(b, sun, 'apo'), P / 2, 1e-9); near(K.rvApsisTime(b, sun, 'peri'), P, 1e-9);
  const st = run([sun, b], 0.3 * P), t = K.rvApsisTime(st.bs[1], st.bs[0], 'apo'); near(t, 0.2 * P, 2e-5, 'after 0.3 P (integration error)');
  const st2 = run(st.bs, t), r = Math.hypot(st2.bs[1].x, st2.bs[1].y); near(r, a * (1 + e), 1e-5, 'and it is then at Q');
  assert(K.rvApsisTime(circ('c', 1, 0, sun), sun, 'apo') === null, 'a circle has no apsides');
});
console.log(`${n} groups passed`);
