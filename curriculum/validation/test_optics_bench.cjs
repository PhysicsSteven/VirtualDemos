'use strict';
// Optics Bench: single refracting surface (OpenStax Vol 3, 2.3), apparent depth, microscope and telescope (2.8).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('optics-bench', 'NEAR_POINT,thinLens,surfaceImage,apparentDepth,snell,sagAt,surfaceAxisCrossing,microscope,telescopeM,depthRatio');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('refracting surface: n1/do + n2/di = (n2 - n1)/R and m = -(n1 di)/(n2 do)', () => {
  for (const [n1, n2, R, dO] of [[1, 1.5, 4, 16], [1, 1.5, 5, 20], [1.33, 1, -10, 12], [1, 1.5, -8, 20], [1.5, 1, 6, 30], [1, 2.4, 3, 7]]) {
    const r = c.surfaceImage(n1, n2, R, dO);
    near(n1 / dO + n2 / r.dI, (n2 - n1) / R, 1e-12, 'surface equation');
    near(r.m, -(n1 * r.dI) / (n2 * dO), 1e-12, 'magnification');
  }
  // the rod preset: R = +4 cm, n = 1.50, object 16 cm away: real, inverted, same size
  const rod = c.surfaceImage(1, 1.5, 4, 16); near(rod.dI, 24, 1e-12); near(rod.m, -1, 1e-12);
  // object at the first focal point f1 = n1 R/(n2 - n1): image at infinity; parallel light focuses at f2 = n2 R/(n2 - n1)
  assert(!isFinite(c.surfaceImage(1, 1.5, 4, 8).dI), 'object at f1');
  near(c.surfaceImage(1, 1.5, 4, 1e12).dI, 12, 1e-9, 'f2');
  // n1 = n2: nothing happens, the image is the object (virtual, at the object), m = +1
  const same = c.surfaceImage(1.5, 1.5, 4, 10); near(same.dI, -10, 1e-12); near(same.m, 1, 1e-12);
  // reversibility: putting an object at the image sends the image back to the object
  const fw = c.surfaceImage(1, 1.5, 4, 16), bw = c.surfaceImage(1.5, 1, -4, fw.dI); near(bw.dI, 16, 1e-12, 'reversible');
});

group('apparent depth: flat surface gives di = -(n2/n1) do, and m = +1', () => {
  near(c.apparentDepth(1.33, 1, 12), -12 / 1.33, 1e-12);
  near(c.apparentDepth(1.33, 1, 12), -9.022556390977, 1e-10);
  for (const [n1, n2, dO] of [[1.33, 1, 12], [1.5, 1, 3], [1, 1.33, 5]]) {
    const r = c.surfaceImage(n1, n2, Infinity, dO);
    near(r.dI, c.apparentDepth(n1, n2, dO), 1e-12, 'flat = apparent depth'); near(r.m, 1, 1e-12, 'upright, same size');
  }
});

group("snell(): n1 sin θ1 = n2 sin θ2, unit length, total internal reflection past the critical angle", () => {
  const N = [-1, 0];
  for (const [n1, n2] of [[1, 1.5], [1.5, 1], [1.33, 1], [1, 2.4]]) {
    for (let th = 0; th < 89; th += 7) {
      const d = [Math.cos(th * Math.PI / 180), Math.sin(th * Math.PI / 180)], t = c.snell(d, N, n1, n2);
      if (n1 * Math.sin(th * Math.PI / 180) > n2) { assert.strictEqual(t, null, 'TIR'); continue; }
      near(Math.hypot(t[0], t[1]), 1, 1e-14, 'unit');
      near(n1 * d[1], n2 * t[1], 1e-12, 'Snell'); assert(t[0] > 0, 'goes on');
    }
  }
  near(Math.asin(1 / 1.5) * 180 / Math.PI, 41.8103148958, 1e-9, 'critical angle n = 1.5');
});

group('exact Snell rays converge to the paraxial image as the aperture h -> 0 (error ~ h^2)', () => {
  for (const [n1, n2, R, dO] of [[1, 1.5, 4, 16], [1, 1.5, 5, 20], [1.33, 1, Infinity, 12], [1.5, 1, 6, 30], [1, 1.5, -10, 12]]) {
    const par = c.surfaceImage(n1, n2, R, dO).dI;
    let prev = null;
    for (const h of [1, 0.5, 0.25, 0.125, 0.0625]) {
      const err = Math.abs(c.surfaceAxisCrossing(n1, n2, R, dO, h) - par);
      if (prev !== null) { const ratio = prev / err; assert(ratio > 3.6 && ratio < 4.4, `halving h quarters the error: ${ratio}`); }
      prev = err;
    }
    near(c.surfaceAxisCrossing(n1, n2, R, dO, 1e-4), par, 1e-6, 'h -> 0');
  }
  // spherical aberration: for a convex glass surface the edge rays cross short of the paraxial image
  assert(c.surfaceAxisCrossing(1, 1.5, 4, 16, 1.5) < 24 - 2, 'edge ray short');
  // apparent depth: rays seen at an angle make the fish look shallower than -(n2/n1) do
  assert(c.surfaceAxisCrossing(1.33, 1, Infinity, 12, 3) > c.apparentDepth(1.33, 1, 12), 'oblique view shallower');
  // aplanatic points of a sphere: object |R| n2/n1 from C images perfectly at every height
  for (const h of [0.5, 2, 4, 6]) near(c.surfaceAxisCrossing(1, 1.5, -8, 20, h), -40 / 3, 1e-12, 'aplanatic');
});

group('microscope: M = m_obj M_eye = -(di/do)(25 cm/f_eye); 16 cm tube length estimate', () => {
  // the preset: f_obj = 2 cm, f_eye = 5 cm, object 2.25 cm from the objective: di = 18 cm, L = 16 cm
  const m = c.microscope(2, 5, 2.25);
  near(m.dI, 18, 1e-12); near(m.mObj, -8, 1e-12); near(m.Meye, 5, 1e-12); near(m.M, -40, 1e-12);
  near(m.M, -(m.dI / 2.25) * (25 / 5), 1e-12, 'textbook form'); near(m.L, 16, 1e-12); near(m.M16, -40, 1e-12, '16 cm estimate');
  near(c.NEAR_POINT, 25, 0);
  // m_obj = -(di - f)/f exactly, so -L(25 cm)/(f_obj f_eye) is the same number for any object distance
  for (const [fo, fe, dO] of [[0.5, 2.5, 0.52], [1, 4, 1.1], [2, 5, 3], [0.4, 1.6, 0.41]]) {
    const r = c.microscope(fo, fe, dO); near(r.Mtube, r.M, 1e-12, 'tube form');
  }
  // the textbook's d_i ~ L, d_o ~ f_obj shortcut: -(di/f_obj)(25/f_eye) is off by one part in L/f_obj
  const r = c.microscope(0.5, 2.5, 1 / (1 / 0.5 - 1 / 16.5));
  near(r.M, -16 / 0.5 * 25 / 2.5, 1e-9); near(-(r.dI / 0.5) * (25 / 2.5) / r.M, 1 + 0.5 / 16, 1e-9, 'd_i ~ L error');
  // ray transfer check, independent of the formulas: an object point h above the axis, eyepiece at di + f_eye
  const fo = 2, fe = 5, dO = 2.25, h = 0.5, dI = 18, sep = dI + fe;
  for (const s0 of [-0.3, -0.1, 0.05, 0.2]) {                 // any ray from the tip
    let y = h + s0 * dO, s = s0 - y / fo;                        // at the objective
    y += s * sep; s -= y / fe;                                   // at the eyepiece
    near(-s / (h / 25), m.M, 1e-12, 'traced angular magnification');
  }
});

group('telescope: M = -f_obj/f_eye; afocal ray transfer gives the same ratio of angles', () => {
  near(c.telescopeM(16, 5), -3.2, 1e-15);
  for (const [fo, fe] of [[16, 5], [100, 2.5], [30, 10]]) {
    for (const [y0, s0] of [[0, 0.05], [2, 0.0524], [-3, -0.1]]) {
      let y = y0, s = s0 - y / fo; y += s * (fo + fe); s -= y / fe;
      near(s / s0, c.telescopeM(fo, fe), 1e-12, 'slope ratio');
    }
  }
  // the preset: 3 degrees in, out at atan(3.2 tan 3 deg) = 9.5 degrees on the other side
  near(Math.atan(3.2 * Math.tan(3 * Math.PI / 180)) * 180 / Math.PI, 9.52, 1e-3);
});

group('thin lens and limits used by the readouts', () => {
  const r = c.thinLens(10, 30); near(r.dI, 15, 1e-12); near(r.m, -0.5, 1e-12);
  assert(!isFinite(c.thinLens(10, 10).dI));
  near(c.sagAt(5, 3), 1, 1e-12); near(c.sagAt(-5, 3), -1, 1e-12); near(c.sagAt(Infinity, 3), 0, 0);
});

group('depth of an image: the image depth over the object depth is m1 m2 for a lens or mirror, (n2/n1) m1 m2 for a surface, m^2 in the limit', () => {
  for (const [f, d1, d2] of [[8, 15.8, 18.2], [10, 4.3, 5.5], [-6, 5, 9], [12, 30, 31]]) {
    const a = c.thinLens(f, d1), b = c.thinLens(f, d2);
    near(Math.abs(b.dI - a.dI) / (d2 - d1), c.depthRatio(a.m, b.m), 1e-12, `lens f ${f}`);
  }
  near(c.depthRatio(c.thinLens(8, 15.8).m, c.thinLens(8, 18.2).m), 0.804, 5e-4, 'Shape preset');
  near(c.depthRatio(c.thinLens(10, 4.3).m, c.thinLens(10, 5.5).m), 3.898, 5e-4, 'magnifier preset');
  const m = c.thinLens(8, 20).m, e = 1e-5; near(c.depthRatio(c.thinLens(8, 20).m, c.thinLens(8, 20 + e).m), m * m, 1e-5, 'thin slice: m^2');
  for (const [n1, n2, R, d1, d2] of [[1, 1.5, 4, 16, 18], [1.33, 1, Infinity, 3, 5]]) {
    const a = c.surfaceImage(n1, n2, R, d1), b = c.surfaceImage(n1, n2, R, d2);
    near(Math.abs(b.dI - a.dI) / (d2 - d1), c.depthRatio(a.m, b.m, n1, n2), 1e-12, 'surface');
  }
});

console.log(`${n} groups passed`);
