'use strict';
// Black Holes: Schwarzschild radius, clocks and redshift, tides, hovering, point lens images and magnification
// (Paczyński 1986; Witt and Mao 1994 for a finite source), the shadow size (EHT), and the null geodesic integrator against the
// weak field deflection 2r_s/b + (15π/16)(r_s/b)², the capture edge b = (√27/2) r_s, and the Einstein ring.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('black-holes', 'GM_SUN,C,PC,BC,rsOf,clockRate,onePlusZ,tidal,hoverAcc,thetaE,shadowDiam,images,mu,Apoint,Adisk,Asource,traceRay,critAlpha,ringAlpha,diskG,bbRGB');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(Math.abs(b), 1e-300), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const UAS = Math.PI / 180 / 3600 * 1e-6;

group('r_s = 2GM/c² = 2.953 km per solar mass; clocks, redshift, tides and hovering', () => {
  near(c.rsOf(1), 2953.25, 1e-5); near(c.rsOf(10) / c.rsOf(1), 10, 1e-15);
  for (const x of [1.01, 1.5, 3, 100]) near(c.clockRate(x) * c.onePlusZ(x), 1, 1e-15);
  near(c.onePlusZ(1.5), Math.sqrt(3), 1e-15, 'photon sphere: z = √3 − 1');
  const M = 10, rs = c.rsOf(M), r = 1e3 * rs;
  near(c.tidal(M, r, 2), 2 * c.GM_SUN * M * 2 / r ** 3, 1e-15);
  near(c.hoverAcc(M, 1e6 * rs), c.GM_SUN * M / (1e6 * rs) ** 2, 1e-6, 'Newtonian far away');
  assert(c.hoverAcc(M, 1.0001 * rs) > 50 * c.GM_SUN * M / rs ** 2, 'hovering needs unbounded thrust near the horizon');
});

group('shadow diameter √27 r_s/D: Sgr A* (4.3e6 M☉, 8.28 kpc) 53 µas; M87* (6.5e9 M☉, 16.8 Mpc) 40 µas (EHT 2019, 2022)', () => {
  near(c.BC, 2.598076211, 1e-9);
  near(c.shadowDiam(4.3e6, 8.28e3 * c.PC) / UAS, 53.3, 0.01); near(c.shadowDiam(6.5e9, 16.8e6 * c.PC) / UAS, 39.7, 0.01);
});

group('point lens: images solve β = θ − 1/θ, μ₊ − |μ₋| = 1, μ₊ + |μ₋| = (u² + 2)/(u√(u² + 4))', () => {
  for (const u of [0.05, 0.3, 1, 2.5]) {
    const [tp, tm] = c.images(u);
    near(tp - 1 / tp, u, 1e-13); near(tm - 1 / tm, u, 1e-12);
    near(c.mu(tp) - Math.abs(c.mu(tm)), 1, 1e-10); near(c.mu(tp) + Math.abs(c.mu(tm)), c.Apoint(u), 1e-10);
  }
  near(c.Apoint(1), 3 / Math.sqrt(5), 1e-15, 'source at θ_E: 1.34');
  // Einstein radius: θ_E² = 2 r_s (D_S − D_L)/(D_L D_S); 1 M☉ halfway to 8 kpc ≈ 1 mas
  near(c.thetaE(1, 4e3 * c.PC, 8e3 * c.PC) / (UAS * 1e3), 1.0089, 1e-3);
});

group('finite source: tiny disk → point value; centered disk √(1 + 4/ρ²) (Witt and Mao 1994); far off → 1; textured integral agrees', () => {
  for (const d of [0.2, 0.7, 2]) near(c.Adisk(d, 1e-3), c.Apoint(d), 1e-5, `d ${d}`);
  for (const rho of [0.1, 0.5, 2]) near(c.Adisk(0, rho), Math.sqrt(1 + 4 / (rho * rho)), 1e-6, `ρ ${rho}`);
  near(c.Adisk(200, 0.5), 1, 1e-4);
  const flat = (x, y) => (x * x + y * y <= 1 ? 1 : 0);
  near(c.Asource(0.6, 0.3, 0.4, flat, Math.PI, 400, 400), c.Adisk(Math.hypot(0.6, 0.3), 0.4), 3e-3, 'uniform source by polar sum');
});

// total sweep angle for a ray leaving a distant observer and escaping, in flat space: π − α
group('null geodesics: deflection matches the weak field series; rays with b < (√27/2) r_s are captured', () => {
  const ro = 1e6;
  for (const b of [200, 1000, 5000]) {
    const f = Math.sqrt(1 - 1 / ro), a = Math.asin(b * f / ro), phi = c.traceRay(ro, a, null, 0.0005).phi;
    const defl = phi - (Math.PI - a), want = 2 / b + 15 * Math.PI / 16 / (b * b);
    near(defl, want, 2e-3, `b ${b}`);
  }
  for (const ro of [50, 10, 3, 1.2]) {
    const ac = c.critAlpha(ro);
    assert(!c.traceRay(ro, ac * (1 + 1e-4)).cap, `just outside the edge escapes, r_o ${ro}`);
    assert(c.traceRay(ro, ac * (1 - 1e-4)).cap, `just inside the edge is captured, r_o ${ro}`);
  }
  // seen from far away the shadow edge sits at b = √27/2: sin α_c = b_c √(1 − 1/r_o)/r_o
  near(Math.sin(c.critAlpha(1e5)) * 1e5 / Math.sqrt(1 - 1e-5), c.BC, 1e-12);
  near(c.critAlpha(1.5), Math.PI / 2, 1e-12, 'at the photon sphere the edge is the horizon direction 90°');
});

group('Einstein ring for a source far behind: α ≈ √(2 r_s/r_o), with the second order term', () => {
  for (const ro of [1e4, 1e3]) {
    // solve α = δ(b), b = r_o sin α/√(1 − 1/r_o), by bisection
    const f = Math.sqrt(1 - 1 / ro), g = (a) => { const b = ro * Math.sin(a) / f; return a - (2 / b + 15 * Math.PI / 16 / (b * b)); };
    let lo = 0.5 * Math.sqrt(2 / ro), hi = 2 * Math.sqrt(2 / ro);
    for (let i = 0; i < 80; i++) { const m = 0.5 * (lo + hi); if (g(m) < 0) lo = m; else hi = m; }
    near(c.ringAlpha(ro), 0.5 * (lo + hi), 1e-3, `r_o ${ro} (third order and finite r_o terms are 0.04% at r_o = 1000)`);
  }
});

group('disk light: g = √(1 − 3GM/rc²) for light leaving across the orbit; blackbody tints run red to blue', () => {
  for (const r of [3, 6, 20]) near(c.diskG(r, 4, 0), Math.sqrt(1 - 1.5 / r), 1e-15);
  // photon angular momentum λ = ±b: g = √(1 − 1.5/r)/(1 − Ωλ), Ω = √(GM/r³) with GM = ½ (one side blue, the other red)
  const Om = Math.sqrt(0.5 / 216);
  near(c.diskG(6, 5, -1), Math.sqrt(0.75) / (1 - 5 * Om), 1e-15, 'approaching side'); near(c.diskG(6, 5, 1), Math.sqrt(0.75) / (1 + 5 * Om), 1e-15, 'receding side');
  const t3 = c.bbRGB(3000), t6 = c.bbRGB(6500), t20 = c.bbRGB(20000);
  assert(t3[0] > t3[1] && t3[1] > t3[2], '3000 K reddish'); assert(t20[2] > t20[0], '20000 K bluish');
  assert(Math.min(...t6) > 0.85, '6500 K close to white');
});

console.log(`${n} black holes test groups passed`);
