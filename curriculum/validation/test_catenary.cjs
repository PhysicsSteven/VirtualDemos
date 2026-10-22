'use strict';
// Catenary: the exact solve through two supports with a given length, tensions, the force balance on any piece,
// minimum potential energy against other curves of the same length, the parabola comparison, and the arch inversion.
const assert = require('node:assert/strict'), { core } = require('./demo_source.cjs');
const m = core('catenary', 'G,lnShc,dlnShc,solveCatenary,catY,arcOf,xOfArc,pointAt,tensionAt,pieceForces,sagOf,lowest,parabolaFor,parY,maxGap,lengthThroughMid,GW');
let n = 0;
const close = (a, b, rel = 1e-9, abs = 0) => assert(Math.abs(a - b) <= abs + rel * Math.abs(b), `expected ${b}, got ${a}`);
const test = (name, f) => { f(); n++; console.log('PASS', name); };
// arc length and mean height of a curve y(x) on [x0, x1] by Gauss–Legendre on many panels
const GL = [[-0.906179845938664, 0.236926885056189], [-0.538469310105683, 0.478628670499366], [0, 0.568888888888889], [0.538469310105683, 0.478628670499366], [0.906179845938664, 0.236926885056189]];
function lengthAndMoment(y, dy, x0, x1, N = 2000) {
  let L = 0, M = 0;
  for (let i = 0; i < N; i++) {
    const a = x0 + (x1 - x0) * i / N, b = a + (x1 - x0) / N;
    for (const [u, w] of GL) { const x = 0.5 * (a + b) + 0.5 * (b - a) * u, ds = Math.hypot(1, dy(x)) * w * 0.5 * (b - a); L += ds; M += y(x) * ds; }
  }
  return { L, ybar: M / L };
}
const CASES = [[-4, 0, 4, 0, 11], [-5, 0.8, 3.5, -2.2, 12], [-4, 0, 4, 0, 8.0001], [-1, 0, 1, 0, 16], [-6, -3, -5.5, 1, 4.2], [-3, 0.4, 5, -1.1, 9.5]];

test('the solve passes through both supports with exactly the requested length', () => {
  for (const [xa, ya, xb, yb, S] of CASES) {
    const k = m.solveCatenary(xa, ya, xb, yb, S);
    assert(!k.taut);
    close(m.catY(k, xa), ya, 0, 1e-11); close(m.catY(k, xb), yb, 0, 1e-11);
    close(k.sB - k.sA, S, 1e-12);
    const dy = (x) => Math.sinh((x - k.x0) / k.a);
    close(lengthAndMoment((x) => m.catY(k, x), dy, xa, xb).L, S, 1e-10);
    // pointAt and arc coordinates are consistent (the round trip through x loses a few digits when the vertex is far outside the span)
    for (const f of [0, 0.3, 1]) { const s = k.sA + f * S, p = m.pointAt(k, s); close(m.arcOf(k, p.x), s, 0, 1e-7 * S); close(p.y, m.catY(k, p.x), 0, 1e-12); }
  }
  // series and large argument branches of ln(sinh u / u) meet smoothly
  close(m.lnShc(0.5 - 1e-12), m.lnShc(0.5 + 1e-12), 1e-10); close(m.dlnShc(0.5 - 1e-12), m.dlnShc(0.5 + 1e-12), 1e-8);
  for (const u of [0.05, 0.3, 0.7, 2, 9]) { const h = 1e-6 * u; close(m.dlnShc(u), (m.lnShc(u + h) - m.lnShc(u - h)) / (2 * h), 1e-7); }
  assert(m.solveCatenary(-4, 0, 4, 0, 8).taut && m.solveCatenary(-4, 0, 4, 0, 7).taut);
});

test('tension: H = λga everywhere, V = λgs, T = λg(y − c); local balance d(T t̂)/ds = λg ŷ', () => {
  const lam = 2, w = lam * m.G;
  for (const [xa, ya, xb, yb, S] of CASES) {
    const k = m.solveCatenary(xa, ya, xb, yb, S);
    for (const f of [0, 0.25, 0.6, 1]) {
      const s = k.sA + f * S, t = m.tensionAt(k, s, lam), p = m.pointAt(k, s);
      close(t.H, w * k.a, 1e-12); close(t.V, w * s, 1e-12, 1e-12); close(t.T, w * (p.y - k.c), 1e-10);
      // T t̂ = (H, V), and its rate of change along the chain balances the weight per length
      const e = 1e-5 * S, q1 = m.pointAt(k, s - e), q2 = m.pointAt(k, s + e), t1 = m.tensionAt(k, s - e, lam), t2 = m.tensionAt(k, s + e, lam);
      close((t2.T * q2.tx - t1.T * q1.tx) / (2 * e), 0, 0, 1e-6 * w);
      close((t2.T * q2.ty - t1.T * q1.ty) / (2 * e), w, 1e-6);
    }
    // the supports together hold up the whole weight: V_B − V_A = λgS
    close(m.tensionAt(k, k.sB, lam).V - m.tensionAt(k, k.sA, lam).V, w * S, 1e-12);
  }
});

test('any piece: two end pulls plus its weight sum to zero, weight acts at the true center of mass', () => {
  const k = m.solveCatenary(-5, 0.8, 3.5, -2.2, 12), lam = 3;
  for (const [f1, f2] of [[0.1, 0.4], [0.2, 0.95], [0.5, 0.51]]) {
    const s1 = k.sA + f1 * k.S, s2 = k.sA + f2 * k.S, pf = m.pieceForces(k, s1, s2, lam);
    close(pf.sum[0], 0, 0, 1e-12 * lam * m.G * k.S); close(pf.sum[1], 0, 0, 1e-10 * lam * m.G * k.S);
    let L = 0, X = 0, Y = 0; const N = 20000;
    for (let i = 0; i < N; i++) { const p = m.pointAt(k, s1 + (i + 0.5) * (s2 - s1) / N), ds = (s2 - s1) / N; L += ds; X += p.x * ds; Y += p.y * ds; }
    close(pf.xc, X / L, 1e-8, 1e-9); close(pf.yc, Y / L, 1e-8, 1e-9); close(pf.len, s2 - s1, 1e-12);
  }
});

test('minimum potential energy: the catenary hangs lower than a parabola or circular arc of the same length', () => {
  for (const [half, S] of [[4, 8.4], [4, 11], [5, 12], [1, 6]]) {
    const k = m.solveCatenary(-half, 0, half, 0, S);
    const cat = lengthAndMoment((x) => m.catY(k, x), (x) => Math.sinh((x - k.x0) / k.a), -half, half);
    close(cat.L, S, 1e-10);
    // parabola y = q(x² − half²) through the supports with the same length (bisection on q)
    const parLen = (q) => lengthAndMoment((x) => q * (x * x - half * half), (x) => 2 * q * x, -half, half, 400).L;
    let lo = 0, hi = 50; for (let i = 0; i < 80; i++) { const md = 0.5 * (lo + hi); if (parLen(md) < S) lo = md; else hi = md; }
    const q = 0.5 * (lo + hi), par = lengthAndMoment((x) => q * (x * x - half * half), (x) => 2 * q * x, -half, half);
    close(par.L, S, 1e-9);
    assert(cat.ybar < par.ybar, `parabola: ${cat.ybar} vs ${par.ybar}`);
    // circular arc below the chord with the same length (only while it stays a function of x: S < π·half)
    if (S < Math.PI * half) {
      let a = 1e-6, b = Math.PI / 2; for (let i = 0; i < 100; i++) { const md = 0.5 * (a + b); if (2 * half / Math.sin(md) * md < S) a = md; else b = md; }
      const th = 0.5 * (a + b), R = half / Math.sin(th), yc = R * Math.cos(th);
      const arc = lengthAndMoment((x) => yc - Math.sqrt(R * R - x * x), (x) => x / Math.sqrt(R * R - x * x), -half, half);
      close(arc.L, S, 1e-8);
      assert(cat.ybar < arc.ybar, `arc: ${cat.ybar} vs ${arc.ybar}`);
    }
  }
});

test('chain against parabola: same supports and lowest point, gap → d³/(12L²) when shallow', () => {
  for (const S of [8.02, 8.1, 8.3]) {
    const k = m.solveCatenary(-4, 0, 4, 0, S), P = m.parabolaFor(k), lo = m.lowest(k), d = m.sagOf(k).d;
    close(m.parY(P, -4), 0, 0, 1e-12); close(m.parY(P, 4), 0, 0, 1e-12); close(P.yv, lo.y, 1e-12);
    const g = m.maxGap(k, P).gap, est = d ** 3 / (12 * 16);
    close(g, est, 3 * (d / 4) ** 2);     // relative error of the shallow estimate is O((d/L)²)
  }
  // the taut limit: H grows like λgΔx²/(8d)
  const k = m.solveCatenary(-4, 0, 4, 0, 8 + 1e-7), d = m.sagOf(k).d;
  close(m.tensionAt(k, 0, 1).H, m.G * 64 / (8 * d), 1e-5);
});

test('arch: flip the chain upside down and reverse every force, and each piece is still in equilibrium in compression', () => {
  const k = m.solveCatenary(-3, 0, 3, 0, 9), lam = 2;
  for (const [f1, f2] of [[0.1, 0.5], [0.3, 0.9]]) {
    const s1 = k.sA + f1 * k.S, s2 = k.sA + f2 * k.S, pf = m.pieceForces(k, s1, s2, lam);
    // mirror y → −y, then negate the end forces (pulls become pushes); weight stays down
    const A1 = [-pf.F1[0], pf.F1[1]], A2 = [-pf.F2[0], pf.F2[1]];
    close(A1[0] + A2[0], 0, 0, 1e-10); close(A1[1] + A2[1] + pf.W[1], 0, 0, 1e-9);
    // each push points into the piece along the arch's tangent (arch tangent = mirrored chain tangent)
    for (const [F, s, inward] of [[A1, s1, 1], [A2, s2, -1]]) {
      const p = m.pointAt(k, s), t = [p.tx, -p.ty], c = (F[0] * t[0] + F[1] * t[1]) / Math.hypot(...F);
      close(c * inward, 1, 1e-12);
    }
  }
});

test('length for a given midpoint height, the Gateway Arch formula, and the numbers in the notes', () => {
  for (const [xa, ya, xb, yb, yt] of [[-3, 0, 3, 0, -4], [-5, 0.8, 3.5, -2.2, -3], [-2, 0, 2, 0, -0.05]]) {
    const S = m.lengthThroughMid(xa, ya, xb, yb, yt), k = m.solveCatenary(xa, ya, xb, yb, S);
    close(m.catY(k, 0.5 * (xa + xb)), yt, 0, 1e-9);
  }
  close(m.GW.fc, 625.0925, 0, 1e-4); close(m.GW.y(m.GW.L), 0, 0, 0.05);
  const w = 2 * m.G, round3 = (v) => +v.toPrecision(3);
  // Hanging chain: H = 55.0 N, T = 121 N at the supports, 108 N + 108 N, weight 216 N
  let k = m.solveCatenary(-4, 0, 4, 0, 11);
  assert.equal(round3(w * k.a), 55.0); assert.equal(round3(w * Math.hypot(k.a, k.sB)), 121); assert.equal(round3(w * k.sB), 108); assert.equal(round3(w * 11), 216);
  // Tension along the chain: a = 2.34 m; Uneven supports: A carries 151 N, B 84.5 N
  k = m.solveCatenary(-4, 0, 4, 0, 12.5); assert.equal(round3(k.a), 2.34);
  k = m.solveCatenary(-5, 0.8, 3.5, -2.2, 12); assert.equal(round3(-w * k.sA), 151); assert.equal(round3(w * k.sB), 84.5);
  // Pull it tight: sag 1.25 m, H = 129 N, weight 167 N
  k = m.solveCatenary(-4, 0, 4, 0, 8.5); assert.equal(round3(m.sagOf(k).d), 1.25); assert.equal(round3(w * k.a), 129); assert.equal(round3(w * 8.5), 167);
  // Chain against parabola: gap 6.65 cm on a sag of 2.92 m
  k = m.solveCatenary(-5, 0, 5, 0, 12); assert.equal(round3(m.maxGap(k, m.parabolaFor(k)).gap * 100), 6.65); assert.equal(round3(m.sagOf(k).d), 2.92);
});

console.log(`${n} catenary test groups passed`);
