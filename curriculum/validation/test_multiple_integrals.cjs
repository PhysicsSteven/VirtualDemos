'use strict';
// Multiple Integrals (2026-11-19): double and triple integrals iterated by adaptive Gauss–Kronrod quadrature, against closed
// forms; both orders of a region in the plane; polar, cylindrical and spherical Jacobians; the Gaussian integral; Riemann
// sums over fitted cells converging; mass, center of mass and moment of inertia of a rod, plate, disk, sphere and cone with
// three densities, against their closed forms; and the Jacobian of a change of variables. The demo's core runs in the same
// context as the shared math library (demos/lib/vdmath.js).
const assert = require('node:assert');
const vm = require('node:vm');
const { readDemo, readLib } = require('./demo_source.cjs');
const ctx = {};
vm.runInNewContext(readLib('vdmath.js'), ctx, { timeout: 5000 });
const core = readDemo('multiple-integrals').match(/\/\/ ==CORE START==([\s\S]*?)\/\/ ==CORE END==/)[1];
vm.runInNewContext(core + '\nglobalThis.c = { quad, makeFn, makeRegion, integrate, cells, body, densityOf, massProps, closedI, closedCM, makeMap, mapIntegral, imageArea, gauss1, compareRegions, boundsBox, sliceAt, VARS };', ctx, { timeout: 60000 });
const c = ctx.c, M = ctx.VDMATH, PI = Math.PI;
let n = 0;
function group(name, f) { f(); n++; console.log('PASS', name); }
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
const I = (names, b, f) => { const r = c.integrate(c.makeRegion(names, b), f ? c.makeFn(f).f : () => 1); assert(r.ok, 'integral ok'); return r.v; };

group('Gauss–Kronrod: exact for polynomials to degree 22, smooth integrals to 1e-12', () => {
  for (const k of [0, 3, 10, 22]) near(c.quad((x) => Math.pow(x, k), -1, 1), k % 2 ? 0 : 2 / (k + 1), 1e-14, 'x^' + k);
  near(c.quad(Math.sin, 0, PI), 2, 1e-13, 'sin'); near(c.quad((x) => 1 / x, 1, Math.E), 1, 1e-13, '1/x');
  near(c.quad((x) => Math.sqrt(1 - x * x), -1, 1), PI / 2, 1e-9, 'half circle (root at the ends)');
});

group('double integrals over rectangles: 8/3 kg, the dome 48, the saddle 2', () => {
  near(I(['x', 'y'], [['0', '2'], ['0', '1']], '1 + x y^2'), 8 / 3, 1e-12, 'plate');
  near(I(['x', 'y'], [['0', '2'], ['0', '2']], '16 - x^2 - 2y^2'), 48, 1e-12, 'dome');
  near(I(['x', 'y'], [['0', '2'], ['0', '1']], 'x^2 - y^2'), 2, 1e-12, 'saddle');
});

group('both orders give the same answer: 3/20, (e − 1)/2, 2/3', () => {
  near(I(['x', 'y'], [['0', '1'], ['x^2', 'x']], 'x + y'), 3 / 20, 1e-12, 'dy dx'); near(I(['y', 'x'], [['0', '1'], ['y', 'sqrt(y)']], 'x + y'), 3 / 20, 1e-10, 'dx dy');
  near(I(['x', 'y'], [['0', '1'], ['x', '1']], 'e^(y^2)'), (Math.E - 1) / 2, 1e-12, 'e^y² dy dx'); near(I(['y', 'x'], [['0', '1'], ['0', 'y']], 'e^(y^2)'), (Math.E - 1) / 2, 1e-12, 'e^y² dx dy');
  near(I(['x', 'y'], [['-1', '1'], ['0', 'sqrt(1-x^2)']], 'y'), 2 / 3, 1e-10, 'half disk'); near(I(['y', 'x'], [['0', '1'], ['-sqrt(1-y^2)', 'sqrt(1-y^2)']], 'y'), 2 / 3, 1e-9, 'half disk reversed');
  const R1 = c.makeRegion(['x', 'y'], [['0', '1'], ['x^2', 'x']]), R2 = c.makeRegion(['y', 'x'], [['0', '1'], ['y', 'sqrt(y)']]), bad = c.makeRegion(['y', 'x'], [['0', '1'], ['y^2', '1']]);
  assert(c.compareRegions(R1, R2, [0, 1, 0, 1], 140).frac < 0.002, 'same region');
  assert(c.compareRegions(c.makeRegion(['x', 'y'], [['0', '1'], ['x^2', '1']]), bad, [0, 1, 0, 1], 140).frac > 0.3, 'a wrong reversal is caught');
  near(c.sliceAt(R1, c.makeFn('x + y').f, 0.5), 0.5 * 0.25 + (0.25 - 0.0625) / 2, 1e-12, 'A(1/2)');
});

group('polar: the Gaussian π(1 − e^(−R²)) and √π, the cardioid 3π/2, the disk charge 16π/3', () => {
  for (const R of [1, 3, 6]) near(I(['theta', 'r'], [['0', '2pi'], ['0', String(R)]], 'e^(-x^2 - y^2)'), PI * (1 - Math.exp(-R * R)), 1e-11, 'Gaussian R = ' + R);
  near(c.gauss1(6), Math.sqrt(PI), 1e-13, '∫ e^(−x²) dx'); near(c.gauss1(3) ** 2, I(['x', 'y'], [['-3', '3'], ['-3', '3']], 'e^(-x^2 - y^2)'), 1e-12, 'square = (1D)²');
  near(I(['theta', 'r'], [['0', '2pi'], ['0', '1 + cos θ']]), 1.5 * PI, 1e-12, 'cardioid');
  near(I(['theta', 'r'], [['0', '2pi'], ['0', '2']], 'r'), 16 * PI / 3, 1e-12, 'disk charge');
});

group('triple integrals: the ball 4π/3 three ways, the cone, the paraboloid 8π, the tetrahedron 1/6', () => {
  near(I(['theta', 'phi', 'rho'], [['0', '2pi'], ['0', 'pi'], ['0', '1']]), 4 * PI / 3, 1e-12, 'spherical');
  near(I(['theta', 'r', 'z'], [['0', '2pi'], ['0', '1'], ['-sqrt(1-r^2)', 'sqrt(1-r^2)']]), 4 * PI / 3, 1e-8, 'cylindrical');
  near(I(['x', 'y', 'z'], [['-1', '1'], ['-sqrt(1-x^2)', 'sqrt(1-x^2)'], ['-sqrt(1-x^2-y^2)', 'sqrt(1-x^2-y^2)']]), 4 * PI / 3, 1e-7, 'rectangular');
  near(I(['theta', 'phi', 'rho'], [['0', '2pi'], ['0', 'pi/4'], ['0', '1']]), 2 * PI / 3 * (1 - Math.SQRT1_2), 1e-12, 'ice cream');
  near(I(['theta', 'r', 'z'], [['0', '2pi'], ['0', 'sqrt(2)/2'], ['r', 'sqrt(1-r^2)']]), 2 * PI / 3 * (1 - Math.SQRT1_2), 1e-8, 'ice cream, cylindrical');
  near(I(['theta', 'r', 'z'], [['0', '2pi'], ['0', '2'], ['0', '4 - r^2']]), 8 * PI, 1e-12, 'paraboloid');
  near(I(['x', 'y', 'z'], [['0', '1'], ['0', '1 - x'], ['0', '1 - x - y']]), 1 / 6, 1e-12, 'tetrahedron');
  near(I(['x', 'y', 'z'], [['0', '1'], ['0', '1 - x'], ['0', '1 - x - y']], 'x') / (1 / 6), 1 / 4, 1e-12, 'its centroid');
  near(I(['theta', 'r', 'z'], [['0', '2pi'], ['0', '2'], ['0', '4 - r^2']], 'z') / (8 * PI), 4 / 3, 1e-12, 'paraboloid centroid');
});

group('Riemann sums over fitted cells approach the integral: midpoint error falls as 1/n²', () => {
  const R = c.makeRegion(['x', 'y'], [['0', '2'], ['0', '2']]), f = c.makeFn('16 - x^2 - 2y^2').f;
  const e = [4, 8, 16].map((k) => c.cells(R, k, 0.5, f).sum - 48);
  near(e[0] / e[1], 4, 1e-9, 'midpoint ratio'); near(c.cells(R, 4, 0.5, f).sum, 48.25, 1e-12, 'n = 4');
  assert(c.cells(R, 8, 1, f).sum < 48 && c.cells(R, 8, 0, f).sum > 48, 'high corner under, low corner over for a falling surface');
  const B = c.makeRegion(['theta', 'phi', 'rho'], [['0', '2pi'], ['0', 'pi'], ['0', '1']]);
  near(c.cells(B, 16, 0.5).vol, 4 * PI / 3, 5e-3, 'spherical cells fill the ball');
});

group('mass, center of mass and moment of inertia against closed forms', () => {
  const D = { rod: [{ L: 1.2 }, ['end', 'center']], plate: [{ a: 0.8, b: 0.5 }, ['perp', 'edge']], disk: [{ R: 0.5 }, ['perp', 'diameter', 'rim']], sphere: [{ R: 0.3 }, ['diameter', 'tangent']], cone: [{ R: 0.4, h: 1 }, ['axis', 'base']] };
  let k = 0;
  for (const [shape, [d, axes]] of Object.entries(D)) for (const dens of ['uniform', 'edge', 'center']) for (const ax of axes) {
    const B = c.body(shape, d), p = c.massProps(B, c.densityOf(B, dens), ax, 2), cl = c.closedI(shape, dens, ax, d, 2), cm = c.closedCM(shape, dens, d);
    assert(p.ok); near(p.M, 2, 1e-12, 'M');
    if (cl) { near(p.I, cl.I, 1e-9, `${shape} ${dens} ${ax}`); k++; }
    for (let i = 0; i < 3; i++) near(p.cm[i], cm[i], 1e-9, `${shape} ${dens} cm`);
  }
  assert.strictEqual(k, 31, 'every listed closed form checked');
  const disk = c.body('disk', { R: 0.5 }); near(c.massProps(disk, () => 1, 'perp', 2).I, 0.5 * 2 * 0.25, 1e-12, '½MR²');
  near(c.massProps(c.body('sphere', { R: 0.3 }), () => 1, 'diameter', 2).I, 0.4 * 2 * 0.09, 1e-12, '⅖MR²');
  near(c.massProps(c.body('rod', { L: 1.2 }), () => 1, 'end', 0.5).I, 0.5 * 1.44 / 3, 1e-12, '⅓ML²');
  near(c.massProps(c.body('cone', { R: 0.4, h: 1 }), () => 1, 'axis', 3).cm[2], 0.25, 1e-12, 'cone h/4');
  assert.strictEqual(c.closedI('cone', 'edge', 'base', { R: 1, h: 1 }, 1), null);
});

group('change of variables: exact Jacobians, πab, 8/3, and a small cell\'s image ≈ |J| Δu Δv', () => {
  const pol = c.makeMap('u cos(v)', 'u sin(v)');
  assert.strictEqual(M.text(pol.tree.J), 'u·cos(v)² + u·sin(v)²'); near(pol.J(2, 1), 2, 1e-15, 'J = u');
  near(c.mapIntegral(pol, () => 1, 0, 2, 0, PI).v, 2 * PI, 1e-12, 'half disk');
  const el = c.makeMap('3u cos(v)', '2u sin(v)'); near(el.J(0.5, 1), 3, 1e-14, 'J = 6u'); near(c.mapIntegral(el, () => 1, 0, 1, 0, 2 * PI).v, 6 * PI, 1e-12, 'ellipse');
  const sq = c.makeMap('u^2 - v^2', '2u v'); near(sq.J(0.3, 0.4), 4 * 0.25, 1e-14, 'J = 4(u² + v²)'); near(c.mapIntegral(sq, () => 1, 0, 1, 0, 1).v, 8 / 3, 1e-12, 'square map');
  const lin = c.makeMap('2u + v', 'u - v'); assert.strictEqual(M.text(lin.tree.J), '−3'); near(c.mapIntegral(lin, c.makeFn('x', ['x', 'y']).f, 0, 1, 0, 1).v, 4.5, 1e-12, '∬ x dA');
  const a = c.imageArea(sq, 0.5, 0.51, 0.3, 0.31, 32), J = sq.J(0.505, 0.305); near(a / (J * 1e-4), 1, 1e-4, 'image of a small cell');
});

group('typing: names allowed per bound, ρ and θ, errors and the evaluation budget', () => {
  assert.throws(() => c.makeRegion(['x', 'y'], [['0', 'y'], ['0', '1']]), (e) => e.level === 0 && e.side === 1, 'outer bound cannot use y');
  assert.throws(() => c.makeFn('alert(1)'));
  near(I(['theta', 'phi', 'rho'], [['0', '2π'], ['0', 'π'], ['0', '1']], 'ρ^2'), 4 * PI / 5, 1e-12, 'ρ typed');
  const r = c.integrate(c.makeRegion(['x', 'y'], [['0', '1'], ['0', '1']]), c.makeFn('1/(x - 0.5)').f);
  assert(!r.ok, 'a pole inside is not a number');
  const t0 = Date.now(), w = c.integrate(c.makeRegion(['x', 'y', 'z'], [['-1e9', '1e9'], ['-1e9', '1e9'], ['-1e9', '1e9']]), c.makeFn('sin(x y z)').f);
  assert(Date.now() - t0 < 20000 && (w.ok || w.why === 'costly'), 'a wild input ends');
});

console.log(`multiple-integrals: ${n} groups passed`);
