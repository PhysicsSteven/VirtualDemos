'use strict';
// Ripple Tank: the water's dispersion relation, the grid's corrected wavelengths, stability, beaches, walls, double slit and Snell's law.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('ripple-tank', 'PH,DX,NX,NY,BEACH,AMP,CFL,kOf,lambdaOf,speedOf,shallowSpeed,lapSym,coefFor,schemeK,makeTank,prepare,step,clearWater,sampleAt,ampAt,paint,segTest,slitTest,fringeAngles,slitMinima,orbitAt,particleAt,driftPer,floorLayer');

let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

/* the complex amplitude of the water along row j over whole periods, after the waves have settled */
function demodRow(T, j, periods) {
  const w = 2 * Math.PI * T.f, re = new Float64Array(T.nx), im = new Float64Array(T.nx), t0 = T.t;
  while (T.t < t0 + periods / T.f) { c.step(T); const tt = T.t; for (let i = 0; i < T.nx; i++) { const v = T.h[(j + 1) * T.W + i + 1]; re[i] += v * Math.cos(w * tt); im[i] -= v * Math.sin(w * tt); } }
  return { re, im };
}
/* least squares fit of A e^(−ikx) + B e^(ikx) over cells i0..i1: returns |B|/|A| */
function reflection(z, k, i0, i1) {
  let a12r = 0, a12i = 0, n0 = 0, b1r = 0, b1i = 0, b2r = 0, b2i = 0;
  for (let i = i0; i < i1; i++) { const x = (i + 0.5) * c.DX, er = Math.cos(k * x), ei = -Math.sin(k * x), zr = z.re[i], zi = z.im[i];
    n0++; a12r += Math.cos(2 * k * x); a12i += Math.sin(2 * k * x); b1r += er * zr + ei * zi; b1i += er * zi - ei * zr; b2r += er * zr - ei * zi; b2i += er * zi + ei * zr; }
  const det = n0 * n0 - (a12r * a12r + a12i * a12i);
  const Ar = (n0 * b1r - (a12r * b2r - a12i * b2i)) / det, Ai = (n0 * b1i - (a12r * b2i + a12i * b2r)) / det;
  const Br = (n0 * b2r - (a12r * b1r + a12i * b1i)) / det, Bi = (n0 * b2i - (a12r * b1i - a12i * b1r)) / det;
  return Math.hypot(Br, Bi) / Math.hypot(Ar, Ai);
}
/* a channel 10 cells wide with walls along it: the bar's plane waves stay exactly plane */
function channel(f, d, edges) {
  const T = c.makeTank(c.NX, 10); T.sides = [1, 1, 0, 0]; T.f = f; T.depth.fill(d); T.edges = edges || 'beach'; T.src = [{ kind: 'bar', x: 0.0625 }]; c.prepare(T);
  const lam = c.lambdaOf(f, d * 1e-3); while (T.t < 0.6 / (f * lam) + 4 / f) c.step(T);
  return { T, z: demodRow(T, 5, 6), k: 2 * Math.PI / lam, lam };
}

group('dispersion: ω² = (gk + σk³/ρ) tanh(kd) solved to 1e-12; λ(10 Hz, 10 mm) = 23.60 mm; c has its minimum 0.231 m/s near 13.5 Hz in deep water', () => {
  for (const [f, d] of [[6, 0.012], [10, 0.01], [20, 0.001], [13.5, 0.05]]) { const k = c.kOf(f, d), w2 = (2 * Math.PI * f) ** 2;
    near((c.PH.g * k + c.PH.sigma / c.PH.rho * k ** 3) * Math.tanh(k * d), w2, 1e-12, `relation at ${f} Hz, ${d} m`); }
  near(c.lambdaOf(10, 0.01), 0.023602, 1e-4, 'λ at 10 Hz, 10 mm');
  let best = 1, fb = 0; for (let f = 6; f <= 25; f += 0.05) { const s = c.speedOf(f, 0.05); if (s < best) { best = s; fb = f; } }
  near(best, Math.pow(4 * c.PH.g * c.PH.sigma / c.PH.rho, 0.25), 2e-3, 'minimum speed (4gσ/ρ)^(1/4)'); assert(fb > 13 && fb < 14, `minimum at ${fb} Hz`);
  /* long waves on shallow water go at √(gd) */
  near(c.speedOf(0.5, 0.003), c.shallowSpeed(0.003), 2e-2, 'long waves on 3 mm: √(gd)');
  assert(c.speedOf(8, 0.0015) < c.speedOf(8, 0.01), 'shallow water is slower');
});
group('grid: the corrected scheme gives the true wavenumber in every direction to 3e-4 for 7 or more cells a wavelength', () => {
  const dt = 2e-3;
  for (const cells of [7, 10, 20, 40]) { const k = 2 * Math.PI / (cells * c.DX), w = 2 * Math.PI * 10, C = c.coefFor(k, w, dt);
    for (const th of [0, Math.PI / 8, Math.PI / 4]) near(c.schemeK(C, w, dt, th), k, 3e-4, `${cells} cells at ${th}`); }
});
group('stability: every cell inside the limit c Δt/Δx < 0.6 √3/2 for the whole range of frequencies and depths', () => {
  for (const f of [6, 12, 20]) for (const d of [1, 3, 12]) { const T = c.makeTank(40, 30); T.f = f; T.depth.fill(d); c.prepare(T);
    let worst = 0; for (let q = 0; q < T.n; q++) worst = Math.max(worst, T.C[q]); assert(Math.sqrt(worst) <= c.CFL + 1e-12, `${f} Hz, ${d} mm: ${Math.sqrt(worst)}`); }
});
group('wavelength in the running tank: within 0.05 % of the dispersion relation (6 to 20 Hz, 1 to 12 mm)', () => {
  for (const [f, d] of [[6, 12], [10, 10], [15, 10], [20, 1], [8, 1.5]]) {
    const { z, k } = channel(f, d); let best = 0, bk = 0;
    for (let kk = k * 0.99; kk < k * 1.01; kk += k * 2e-5) { let sr = 0, si = 0; for (let i = 60; i < 300; i++) { const x = (i + 0.5) * c.DX; sr += z.re[i] * Math.cos(kk * x) - z.im[i] * Math.sin(kk * x); si += z.re[i] * Math.sin(kk * x) + z.im[i] * Math.cos(kk * x); } const m = Math.hypot(sr, si); if (m > best) { best = m; bk = kk; } }
    near(bk, k, 5e-4, `k at ${f} Hz, ${d} mm`);
  }
});
group('beaches: reflect less than 3 % of the amplitude from 6 to 20 Hz', () => {
  for (const [f, d] of [[6, 10], [10, 10], [20, 10], [8, 1.5]]) { const { z, k } = channel(f, d); const R = reflection(z, k, 60, 300); assert(R < 0.03, `beach at ${f} Hz, ${d} mm: R = ${R}`); }
});
group('walls: a wave packet comes back from a wall with all its energy, less only the viscous loss e^(−4νk²t)', () => {
  const T = c.makeTank(c.NX, 10); T.f = 10; T.depth.fill(10); T.edges = 'wall'; T.src = []; c.prepare(T);
  const k = c.kOf(10, 0.01), w = 2 * Math.PI * 10, x0 = 0.12, sg = 0.025, A = 1e-3, vg = 0.24;
  for (let j = 1; j <= T.ny; j++) for (let i = 1; i <= T.nx; i++) { const x = (i - 0.5) * c.DX, q = j * T.W + i;
    T.h[q] = A * Math.exp(-(((x - x0) / sg) ** 2)) * Math.cos(k * (x - x0)); T.hp[q] = A * Math.exp(-(((x - x0 + vg * T.dt) / sg) ** 2)) * Math.cos(k * (x - x0) + w * T.dt); }
  /* the packet's energy, Σh² averaged over a period, with the packet in the middle of the channel going right and again coming back */
  const energy = () => { let e = 0, m = 0; const t1 = T.t + 0.1; while (T.t < t1) { c.step(T); let s = 0; for (let q = 0; q < T.n; q++) s += T.h[q] * T.h[q]; e += s; m++; } return e / m; };
  const peak = () => { let b = 0, at = 0; for (let i = 1; i <= T.nx; i++) { const v = Math.abs(T.h[5 * T.W + i]); if (v > b) { b = v; at = i; } } return at * c.DX; };
  while (peak() < 0.2) c.step(T); const tA = T.t, E1 = energy();
  while (T.t < tA + 0.35) c.step(T); while (peak() > 0.2) c.step(T); const tB = T.t, E2 = energy();
  const loss = Math.exp(-4 * c.PH.nu * k * k * (tB - tA));
  near(E2 / E1, loss, 0.02, `energy after the wall (${(tB - tA).toFixed(2)} s)`);
});
group('double slit: quiet lines where the paths differ by (m + ½)λ, to 0.15°, and within 0.4° of d sin θ = (m + ½)λ at 150 mm (15 Hz, 10 mm deep, d = 45 mm, a = 8 mm)', () => {
  const T = c.makeTank(); T.f = 15; T.depth.fill(10); T.src = [{ kind: 'bar', x: 0.0625 }];
  const xb = 0.15, yc = 0.15, d = 0.045, R = 0.15; c.paint(T, 'wall', 1, c.slitTest(xb, 0.003, yc, 2, 0.008, d)); c.prepare(T);
  while (T.t < 3) c.step(T, 2 / T.f);
  const lam = c.lambdaOf(15, 0.01), pred = c.fringeAngles(lam, d).nod;
  near(pred[0], Math.asin(0.5 * lam / d) * 180 / Math.PI, 1e-12, 'formula');
  for (let m = 0; m < 2; m++) for (const sg of [1, -1]) {
    let best = 1, at = 0; for (let th = pred[m] - 4; th <= pred[m] + 4; th += 0.02) { const r = sg * th * Math.PI / 180, a = c.ampAt(T, xb + R * Math.cos(r), yc + R * Math.sin(r)); if (a < best) { best = a; at = th; } }
    /* the exact quiet line at distance R: r₂ − r₁ = (m + ½)λ, slits at y = ±d/2 */
    let lo = 0, hi = 89; for (let it = 0; it < 60; it++) { const md = (lo + hi) / 2, r = md * Math.PI / 180, X = R * Math.cos(r), Y = R * Math.sin(r);
      if (Math.hypot(X, Y + d / 2) - Math.hypot(X, Y - d / 2) < (m + 0.5) * lam) lo = md; else hi = md; }
    assert(Math.abs(at - lo) < 0.15, `m = ${m}, side ${sg}: ${at} against the exact ${lo}`);
    assert(Math.abs(at - pred[m]) < 0.4, `m = ${m}, side ${sg}: ${at} against d sin θ, ${pred[m]}`);
    assert(best < 0.1 * c.AMP, `quiet line is quiet: ${best}`);
  }
  const sm = c.slitMinima(0.015, 0.03); assert.strictEqual(sm.length, 1); near(sm[0], 30, 1e-12, 'a sin θ = λ');
});
group("refraction: past a plate edge turned 30°, the waves travel at the angle Snell's law gives, sin θ₁/sin θ₂ = λ₁/λ₂, to 0.5°", () => {
  const T = c.makeTank(); T.f = 8; T.depth.fill(10); T.src = [{ kind: 'bar', x: 0.0625 }];
  const e = 30 * Math.PI / 180, nx = Math.cos(e), ny = -Math.sin(e);
  c.paint(T, 'depth', 1.5, (x, y) => (x - 0.2) * nx + (y - 0.15) * ny > 0); c.prepare(T);
  while (T.t < 3.2) c.step(T);
  /* the phase of the water over a patch past the edge, from whole periods: its gradient is the wave vector there */
  const w = 2 * Math.PI * T.f, re = new Float64Array(T.n), im = new Float64Array(T.n), t0 = T.t;
  while (T.t < t0 + 4 / T.f) { c.step(T); for (let q = 0; q < T.n; q++) { re[q] += T.h[q] * Math.cos(w * T.t); im[q] -= T.h[q] * Math.sin(w * T.t); } }
  let gx = 0, gy = 0, m = 0;
  /* everywhere past the edge by 15 mm and out of the beaches: the local direction wanders by a degree or so where the beam's
     edges and the beaches' small reflections cross it, so the whole region is averaged */
  for (let j = 44; j < 196; j++) for (let i = 160; i < 316; i++) { const x = (i + 0.5) * c.DX, y = (j + 0.5) * c.DX; if ((x - 0.2) * nx + (y - 0.15) * ny < 0.015) continue; const q = (j + 1) * T.W + i + 1, z0 = [re[q], im[q]], zx = [re[q + 1], im[q + 1]], zy = [re[q + T.W], im[q + T.W]];
    const ang = (a, b) => Math.atan2(a[0] * b[1] - a[1] * b[0], a[0] * b[0] + a[1] * b[1]); gx += ang(z0, zx); gy += ang(z0, zy); m++; }
  const dir = Math.atan2(-gy, -gx);   /* the waves travel down the phase */
  const l1 = c.lambdaOf(8, 0.01), l2 = c.lambdaOf(8, 0.0015), th2 = Math.asin(Math.sin(e) * l2 / l1);
  /* incidence: along +x, angle e from the edge's normal (cos e, −sin e); after: θ₂ from that normal, turned toward it */
  const want = -(e - th2);
  assert(Math.abs(dir - want) * 180 / Math.PI < 0.5, `direction ${dir * 180 / Math.PI}° against ${want * 180 / Math.PI}°`);
  near(Math.hypot(gx, gy) / m / c.DX, 2 * Math.PI / l2, 5e-3, 'wavenumber past the edge');
});
group('bar: its plane waves are AMP high beside it (to 2.5 %), and fall with distance as the viscous damping does in the model, e^(−2νk²x/c) (to 4 %)', () => {
  for (const [f, d] of [[6, 10], [10, 10], [15, 10], [20, 10], [8, 1.5], [8, 3]]) {
    const T = c.makeTank(c.NX, 10); T.sides = [1, 1, 0, 0]; T.f = f; T.depth.fill(d); T.src = [{ kind: 'bar', x: 0.0625 }]; c.prepare(T);
    const lam = c.lambdaOf(f, d * 1e-3), k = 2 * Math.PI / lam, v = f * lam; while (T.t < 0.35 / v + 6 / f) c.step(T, 2 / f);
    const xb = Math.floor(0.0625 / c.DX) * c.DX + c.DX / 2, beta = 2 * c.PH.nu * k * k;
    near(c.ampAt(T, xb + 2.5e-3, 0.006), c.AMP * Math.exp(-beta * 2.5e-3 / v), 0.025, `${f} Hz, ${d} mm, beside the bar`);
    for (const x of [0.15, 0.25]) near(c.ampAt(T, x, 0.006), c.AMP * Math.exp(-beta * (x - xb) / v), 0.04, `${f} Hz, ${d} mm, at ${x} m`);
  }
});

group('single slit in the demo\'s own tank: the first quiet lines 150 mm from the slit within 0.6° of the Kirchhoff integral (15 Hz, a = 50, 30 mm); the bar lets the waves the barrier sends back pass, so the tank does not ring', () => {
  const lam = c.lambdaOf(15, 0.01), k = 2 * Math.PI / lam, R = 0.15, xb = 0.15, yc = 0.15;
  for (const a of [0.05, 0.03]) {
    const T = c.makeTank(); T.f = 15; T.depth.fill(10); T.src = [{ kind: 'bar', x: 0.0625 }];
    c.paint(T, 'wall', 1, c.slitTest(xb, 0.003, yc, 1, a, 0)); c.prepare(T);
    while (T.t < 5) c.step(T, 2 / T.f);
    /* Kirchhoff: a uniform plane wave across the opening, each point a 2D source e^(ikρ)/√ρ; the first minimum along the arc */
    const kirch = (th) => { let re = 0, im = 0; const X = R * Math.cos(th), Y = R * Math.sin(th);
      for (let i = 0; i <= 2000; i++) { const ys = -a / 2 + a * i / 2000, rho = Math.hypot(X, Y - ys), wgt = (i === 0 || i === 2000 ? 0.5 : 1) / Math.sqrt(rho); re += wgt * Math.cos(k * rho); im += wgt * Math.sin(k * rho); }
      return Math.hypot(re, im); };
    const firstMin = (fn) => { let prev = fn(0), th = 0; for (;;) { th += 0.05; const v = fn(th * Math.PI / 180); if (v > prev && th > 1) return th - 0.05; prev = v; } };
    /* the demo's amplitude along the arc, averaged over ±0.5° against the small ripple from the beaches */
    const sm = (th) => { let s = 0; for (let t = -0.5; t <= 0.5001; t += 0.1) for (const sg of [1, -1]) { const r = sg * (th * 180 / Math.PI + t) * Math.PI / 180; s += c.ampAt(T, xb + R * Math.cos(r), yc + R * Math.sin(r)); } return s; };
    const want = firstMin(kirch), got = firstMin(sm);
    assert(Math.abs(got - want) < 0.6, `a = ${a * 1000} mm: ${got}° against the Kirchhoff ${want}°`);
  }
});

group('side view: the water under a plane wave. Surface particles ride the surface, floor particles only slide, b/a = tanh k(d − s), circles A e^(−ks) in deep water, flat equal ellipses in shallow, no squeezing of the water', () => {
  const A = c.AMP;
  for (const [f, d] of [[6, 3e-3], [6, 12e-3], [10, 6e-3], [16, 12e-3], [20, 3e-3]]) {
    const k = c.kOf(f, d), w = 2 * Math.PI * f;
    /* the surface particle's height is the surface's height η = A cos(kx − ωt) */
    for (const [x, t] of [[0.003, 0.01], [0.017, 0.123]]) near(c.particleAt(f, d, x, 0, t, A).z, A * Math.cos(k * x - w * t), 1e-12, 'surface');
    const o0 = c.orbitAt(f, d, 0, A), oF = c.orbitAt(f, d, d, A);
    near(o0.b, A, 1e-12, 'b at the surface'); assert(Math.abs(oF.b) < 1e-15, 'b at the floor'); near(oF.a, A / Math.sinh(k * d), 1e-12, 'a at the floor');
    for (const s of [0, d / 3, d / 2, d]) { const o = c.orbitAt(f, d, s, A); if (s < d) near(o.b / o.a, Math.tanh(k * (d - s)), 1e-12, 'b/a');
      /* the path is that ellipse: ((x − x₀)/a)² + ((z + s)/b)² = 1 at any time */
      if (s < d) for (const t of [0, 0.011, 0.07]) { const q = c.particleAt(f, d, 0.01, s, t, A); near(((q.x - 0.01) / o.a) ** 2 + ((q.z + s) / o.b) ** 2, 1, 1e-9, 'ellipse'); } }
    /* no squeezing: ∂ξ/∂x + ∂ζ/∂z = 0 (the water is incompressible), by central differences */
    const h = 1e-6, x = 0.008, s = d / 2, t = 0.02, xi = (x, s) => c.particleAt(f, d, x, s, t, A).x - x, ze = (x, s) => c.particleAt(f, d, x, s, t, A).z + s;
    const div = (xi(x + h, s) - xi(x - h, s)) / (2 * h) - (ze(x, s + h) - ze(x, s - h)) / (2 * h);
    assert(Math.abs(div) < 1e-7 * k * A + 1e-12, `divergence ${div}`);
    /* under a crest the water moves forward (the way the wave goes) */
    const t0 = 0, xc = 0, dt = 1e-5; assert(c.particleAt(f, d, xc, 0, t0 + dt, A).x > c.particleAt(f, d, xc, 0, t0 - dt, A).x, 'forward under a crest');
  }
  /* deep water: circles of radius A e^(−ks), to within the floor's share, about 2e^(−2k(d − s)) (16 Hz, 12 mm: kd above 4) */
  { const f = 16, d = 12e-3, k = c.kOf(f, d); assert(k * d > 4);
    for (const s of [0, 2e-3, 5e-3]) { const o = c.orbitAt(f, d, s, A); const tol = 2.05 * Math.exp(-2 * k * (d - s)); /* the floor's share, about 2e^(−2k(d − s)) */ near(o.a, A * Math.exp(-k * s), tol, 'deep a'); near(o.b, A * Math.exp(-k * s), tol, 'deep b'); } }
  /* shallow water: a ≈ A/(kd) at every depth, to within (kd)²/2; b falls in a straight line */
  { const f = 6, d = 1e-3, k = c.kOf(f, d), kd = k * d; assert(kd < 0.4, `kd ${kd}`);
    for (const s of [0, d / 2, d]) { const o = c.orbitAt(f, d, s, A); near(o.a, A / kd, kd * kd / 2 + 1e-3, 'shallow a'); near(o.b, A * (1 - s / d), kd * kd / 2 + 1e-3, 'shallow b'); } }
  /* Stokes drift: deep water limit 2πkA² per period at the surface; the floor layer √(2ν/ω) */
  { const f = 20, d = 12e-3, k = c.kOf(f, d); near(c.driftPer(f, d, 0, A), 2 * Math.PI * k * A * A, 2e-3, 'deep Stokes drift'); near(c.floorLayer(f), Math.sqrt(2 * 1.0016e-3 / 998.2 / (40 * Math.PI)), 1e-12, 'floor layer'); }
});

console.log(`${n} groups passed`);
