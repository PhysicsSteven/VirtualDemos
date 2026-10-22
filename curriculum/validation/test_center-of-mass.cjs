'use strict';
// Center of Mass: weighted average, the exploding firework's CM parabola, the boat.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('center-of-mass', 'G,centre,firework,boatShift');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
group('centre of mass is the mass weighted average', () => {
  const C = c.centre([{ m: 2, x: 0.25, y: 0.3 }, { m: 1, x: 0.75, y: 0.45 }, { m: 1, x: 0.6, y: 0.12 }]); near(C.x, (0.5 + 0.75 + 0.6) / 4, 1e-15); near(C.y, (0.6 + 0.45 + 0.12) / 4, 1e-15); near(C.M, 4, 1e-15);
});
group('firework: CM of the pieces follows the unexploded parabola until the first piece lands', () => {
  for (const [fr, u, phi] of [[0.5, 8, 0], [0.3, 12, 0.6], [0.8, 20, -1.2], [0.5, 0, 0]]) {
    const F = c.firework(20, Math.PI / 3, fr, u, phi), tEnd = Math.min(F.a.tLand, F.b.tLand);
    for (const s of [0, 0.3, 0.7, 1].map((k) => k * tEnd)) { const a = F.at(F.a, s), b = F.at(F.b, s), w = F.whole(F.tTop + s); near(fr * a.x + (1 - fr) * b.x, w.x, 1e-12); near(fr * a.y + (1 - fr) * b.y, w.y, 1e-12); }
    near(F.at(F.a, F.a.tLand).y, 0, 1e-9); near(F.at(F.b, F.b.tLand).y, 0, 1e-9);
  }
  // horizontal split: both land together and the mass weighted landing point is the original range
  const F = c.firework(20, Math.PI / 3, 0.3, 10, 0); near(F.a.tLand, F.b.tLand, 1e-12); near(0.3 * F.at(F.a, F.a.tLand).x + 0.7 * F.at(F.b, F.b.tLand).x, F.whole(F.tWhole).x, 1e-12);
  near(F.whole(F.tWhole).x, 400 * Math.sin(2 * Math.PI / 3) / 9.81, 1e-12);
});
group('boat: the CM stays put; shift = −mL/(m + M)', () => {
  const m = 70, M = 150, L = 4, xb = c.boatShift(m, M, L), xp0 = -L / 2, xp1 = xb + L / 2; near(m * xp0 + M * 0, m * xp1 + M * xb, 1e-12); near(xb, -70 * 4 / 220, 1e-15);
});
console.log(`${n} centre of mass test groups passed`);
