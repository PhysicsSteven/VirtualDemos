'use strict';
// Rotational Dynamics: moments of inertia, the falling-mass motion, energy, the τ against α fit.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('rotational-dynamics', 'G,H,I0,TAU_F,IOBJ,RD_VERSION,motion,fitLine,fromRow,readingsCSV');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
group('moments of inertia: disk ½MR², ring ½M(R₁²+R₂²), pair parallel axis', () => {
  near(c.IOBJ.disk(), 5e-3, 1e-12); near(c.IOBJ.ring(), 9.05e-3, 1e-12);
  near(c.IOBJ.pair(0.1), 2 * (0.2 * 0.01 + 0.5 * 0.2 * 0.015 ** 2), 1e-12);
  assert(c.IOBJ.ring() > 1.8 * c.IOBJ.disk());
});
group('Newton for both bodies holds: mg − T = ma, Tr − τf = Iα, a = αr', () => {
  for (const [m, r, I, tf] of [[0.05, 0.02, 2e-3, 0], [0.1, 0.03, 7e-3, 4e-4], [0.02, 0.01, 1.1e-2, 4e-4]]) {
    const M = c.motion(m, r, I, tf); assert(M.moves);
    near(m * c.G - M.T, m * M.a, 1e-12, 'mass'); near(M.T * r - tf, I * M.alpha, 1e-12, 'table'); near(M.a, M.alpha * r, 1e-12);
    near(0.5 * M.a * M.t ** 2, c.H, 1e-12, 'drop');
  }
  assert(!c.motion(0.005, 0.01, 2e-3, 4e-4 * 1.5).moves);
});
group('energy: mgh = ½mv² + ½Iω² + τf θ at the end of the drop', () => {
  const m = 0.08, r = 0.02, I = 9.05e-3 + 2e-3, tf = 4e-4, M = c.motion(m, r, I, tf), v = M.a * M.t, w = M.alpha * M.t;
  near(0.5 * m * v * v + 0.5 * I * w * w + tf * c.H / r, m * c.G * c.H, 1e-12);
});
group('τ against α from rounded timings returns I (slope) and the friction torque (intercept)', () => {
  const I = c.I0 + c.IOBJ.disk(), xs = [], ys = [];
  for (const [m, r] of [[0.03, 0.02], [0.06, 0.02], [0.09, 0.02], [0.05, 0.03], [0.12, 0.03]]) {
    const t = +c.motion(m, r, I, c.TAU_F).t.toFixed(3), q = c.fromRow(m, r, t); xs.push(q.alpha); ys.push(q.tau);
  }
  const F = c.fitLine(xs, ys); near(F.b, I, 2e-3, 'I'); near(F.a, c.TAU_F, 2e-2, 'τf');
  const L = c.readingsCSV([{ load: 'disk', m: '0.050', r: '0.02', t: '5.973' }], { version: c.RD_VERSION, friction: 'none' }).trim().split('\n');
  const h = L.indexOf('row,load,m_kg,r_m,t_s,a_m_per_s2,alpha_rad_per_s2,tau_N_m'); assert(h > 0); assert(L[h + 1].startsWith('1,disk,0.050,0.02,5.973,'));
});
console.log(`${n} rotational dynamics test groups passed`);
