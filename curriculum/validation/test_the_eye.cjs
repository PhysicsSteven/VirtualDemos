'use strict';
// The Eye: accommodation, near and far points, and corrective lenses (OpenStax Vol 3 §2.5, Examples 2.7 to 2.9).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('the-eye', 'RETINA,GLASS_GAP,PUPIL,SHARP,EYES,eyeRange,nearPoint,farPoint,vergenceAtEye,accommodate,eyeImage,rxFar,rxNear');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('Example 2.7: an object 25 cm away images about 1.8 cm behind a 1.7 cm lens; the retina sits at 1.80 cm', () => {
  near(1 / (1 / 1.7 - 1 / 25), 1.824, 1e-3); near(c.RETINA, 0.018, 0); near(c.GLASS_GAP, 0.015, 0);
});
group('each eye: the range of power gives back its near and far points', () => {
  const N = c.eyeRange(c.EYES.normal); near(c.nearPoint(N), 0.25, 1e-12); near(N.Pmax, 4 + 1 / 0.018, 1e-12); near(N.Pmax - N.Pmin, 4, 1e-12); assert(c.farPoint(N) === Infinity);
  const M = c.eyeRange(c.EYES.myopia); near(c.farPoint(M), 0.30, 1e-12); near(c.nearPoint(M), 1 / (1 / 0.3 + 4), 1e-12);
  const H = c.eyeRange(c.EYES.hyper); near(c.nearPoint(H), 1.00, 1e-12); assert(c.farPoint(H) < 0, 'far point beyond infinity');
  const O = c.eyeRange(c.EYES.older); near(c.nearPoint(O), 2.00, 1e-12); near(O.Pmax - O.Pmin, 0.5, 1e-12);
});
group('accommodation: a sharp image wherever the eye can reach, blur outside, and the blur spot formula', () => {
  const N = c.eyeRange(c.EYES.normal);
  for (const d of [0.25, 0.5, 3, Infinity]) { const V = c.vergenceAtEye(d, null), P = c.accommodate(V, N), im = c.eyeImage(V, P); near(im.di, c.RETINA, 1e-12, `d = ${d}`); assert(im.blur < 1e-15); }
  const V = c.vergenceAtEye(0.10, null), P = c.accommodate(V, N); near(P, N.Pmax, 0); const im = c.eyeImage(V, P);
  assert(im.di > c.RETINA && im.blur > c.SHARP); near(im.blur, c.PUPIL * Math.abs(c.RETINA / im.di - 1) * 1, 1e-12, 'similar triangles: spot = pupil × |retina − image|/image');
  const M = c.eyeRange(c.EYES.myopia), Vf = c.vergenceAtEye(Infinity, null), imf = c.eyeImage(Vf, c.accommodate(Vf, M)); assert(imf.di < c.RETINA && imf.blur > c.SHARP, 'nearsighted: a distant image falls in front of the retina');
  const H = c.eyeRange(c.EYES.hyper), Vb = c.vergenceAtEye(0.25, null), imb = c.eyeImage(Vb, c.accommodate(Vb, H)); assert(imb.di > c.RETINA && imb.blur > c.SHARP, 'farsighted: a book at 25 cm images behind the retina');
});
group('Example 2.8: far point 30.0 cm, glasses 1.50 cm from the eye need −3.51 D; image 28.5 cm in front of the glasses', () => {
  const P = c.rxFar(0.30); near(P, -3.51, 0.001); near(P, -1 / 0.285, 1e-12); near(1 / P, -0.285, 1e-12);
  const V = c.vergenceAtEye(Infinity, P); near(V, -1 / 0.30, 1e-12, 'light reaches the eye as if from the far point');
  const M = c.eyeRange(c.EYES.myopia); assert(c.eyeImage(V, c.accommodate(V, M)).blur < 1e-15);
});
group('Example 2.9: near point 1.00 m, reading at 25 cm needs +3.24 D; image 98.5 cm in front of the glasses', () => {
  const P = c.rxNear(1.00, 0.25); near(P, 3.24, 0.001); near(1 / (P - 1 / 0.235), -0.985, 1e-12);
  const V = c.vergenceAtEye(0.25, P); near(V, -1 / 1.00, 1e-12, 'light reaches the eye as if from the near point');
  const H = c.eyeRange(c.EYES.hyper); assert(c.eyeImage(V, c.accommodate(V, H)).blur < 1e-15);
  const O = c.eyeRange(c.EYES.older), Po = c.rxNear(2.00, 0.25), Vo = c.vergenceAtEye(0.25, Po); near(Po, 1 / 0.235 - 1 / 1.985, 1e-12); assert(c.eyeImage(Vo, c.accommodate(Vo, O)).blur < 1e-15);
});
console.log(`${n} groups passed`);
