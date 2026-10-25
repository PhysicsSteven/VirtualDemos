'use strict';
// Build a Microscope or Telescope: ideal thin lens ray tracing, the image chain, angular magnification, pupils and field
// (OpenStax University Physics Vol 3, §§2.4, 2.5, 2.7, 2.8).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('instrument-builder', 'NEAR_POINT,EYE_RET,EYE_AMP,CAM,thinLens,sysMatrix,imageChain,angularM,textbookM,traceRay,traceBack,pupils,eyeFocus,vergence,cameraFocus,passFraction,halfField');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1e-12, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const lens = (z, f, D) => ({ kind: 'lens', z, f, D });
const stop = (z, D) => ({ kind: 'stop', z, D });
const MOON = { kind: 'far', a: 1737.4 / 384400 };
let seed = 7; const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647 - 0.5; };

group('thin lens: 1/do + 1/di = 1/f, m = −di/do, a distant object images at F, a virtual object focuses inside f', () => {
  const t = c.thinLens(10, 30); near(t.dI, 15, 1e-12); near(t.m, -0.5, 1e-12);
  assert(c.thinLens(10, 10).dI === Infinity, 'object at F: image at infinity');
  near(c.thinLens(50, Infinity).dI, 50, 1e-12);
  near(c.thinLens(-10, 30).dI, -7.5, 1e-12);
  near(c.thinLens(5, -10).dI, 1 / (1 / 5 + 1 / 10), 1e-12, 'virtual object');
});
group('an ideal thin lens is a perfect imager: every traced skew ray from a point meets at the lens equation image', () => {
  const els = [lens(0, 8, 6)], dO = 20, dI = c.thinLens(8, dO).dI, h = 0.7, hx = -0.3;
  for (let k = 0; k < 200; k++) {
    const px = 2.9 * rnd(), py = 2.9 * rnd(), r = { x: hx, y: h, ux: (px - hx) / dO, uy: (py - h) / dO };
    const t = c.traceRay(els, -dO, r, dI); assert(t.stop === -1);
    near(t.x, -hx * dI / dO, 1e-9, 'x'); near(t.y, -h * dI / dO, 1e-9, 'y');
  }
});
group('tracing backward undoes tracing forward, through lenses and stops', () => {
  const els = [lens(0, 1.6, 0.8), stop(17.6, 1.8), lens(20.1, 2.5, 2.4)];
  for (let k = 0; k < 100; k++) {
    const r = { x: 0.02 * rnd(), y: 0.02 * rnd(), ux: 0.3 * rnd(), uy: 0.3 * rnd() }, f = c.traceRay(els, -1.76, r, 23);
    if (f.stop >= 0) continue;
    const b = c.traceBack(els, 23, { x: f.x, y: f.y, ux: f.ux, uy: f.uy }, -1.76);
    near(b.x, r.x, 1e-9); near(b.y, r.y, 1e-9); near(b.ux, r.ux, 1e-9); near(b.uy, r.uy, 1e-9);
  }
});

const MIC_DO = 1 / (1 / 1.6 - 1 / 17.6), mic = [lens(0, 1.6, 0.8), stop(17.6, 1.8), lens(20.1, 2.5, 2.4)], slide = { kind: 'near', z: -MIC_DO, h: 0.05 };
group('compound microscope (§2.8): m_obj = −10, M_net = m_obj × 25 cm/f_eye = −100, and the traced rays agree', () => {
  const ch = c.imageChain(mic, slide);
  near(ch[0].dI, 17.6, 1e-12); near(ch[0].m, -10, 1e-12); near(ch[0].h, -0.5, 1e-12, 'image height from the ray matrix = m h');
  assert(ch[1].dI === Infinity, 'intermediate image at the eyepiece focal point: final image at infinity');
  near(c.textbookM(ch, slide), -100, 1e-12);
  for (const zE of [21, 22.96, 25]) near(c.angularM(mic, slide, zE), -100, 1e-9, `eye at ${zE}`);
  near(-16 * 25 / (1.6 * 2.5), -100, 1e-12, 'the textbook −(16 cm)(25 cm)/(f_obj f_eye) is exact here, with L = 16 cm');
});
group('microscope pupils and field: the objective is the stop; exit pupil 2.855 cm behind the eyepiece, 1.14 mm; field 1.8 mm', () => {
  const pu = c.pupils(mic, slide); near(pu.stop.f, 1.6, 0); near(pu.ex.z - 20.1, 1 / (1 / 2.5 - 1 / 20.1), 1e-9);
  near(pu.ex.D, 0.8 * (1 / (1 / 2.5 - 1 / 20.1)) / 20.1, 1e-9); near(pu.ratio, 0.4 / MIC_DO, 1e-9, 'marginal ray slope');
  const hf = c.halfField(mic, slide, pu.ex.z, 0.4); near(hf.field, 0.9 / 10, 1e-6, 'field stop radius / |m_obj|');
});
const kep = [lens(0, 50, 5), lens(55, 5, 2.5)];
group('Keplerian telescope (§2.8): lenses f₁ + f₂ apart, M = −f₁/f₂ = −10 wherever the eye is, light leaves parallel', () => {
  near(c.textbookM(c.imageChain(kep, MOON), MOON), -10, 1e-12);
  for (const zE of [56, 60.5, 70]) near(c.angularM(kep, MOON, zE), -10, 1e-9);
  const M = c.sysMatrix(kep, -1, 55); assert(Math.abs(M[2]) < 1e-15, 'afocal: C = 0');
  const t1 = c.traceRay(kep, -1, { x: 0, y: 1, ux: 0, uy: -0.004 }, 60), t2 = c.traceRay(kep, -1, { x: 0, y: -1.5, ux: 0, uy: -0.004 }, 60);
  near(t1.uy, t2.uy, 1e-12, 'one direction out'); near(t1.uy / -0.004, -10, 1e-9);
});
group('Keplerian pupils: exit pupil 5.0 mm = D/|M|, 5.5 cm behind the eyepiece; field half angle where the eyepiece rim cuts the beam', () => {
  const pu = c.pupils(kep, MOON); near(pu.stop.z, 0, 0); near(pu.ex.D, 0.5, 1e-9); near(pu.ex.z, 60.5, 1e-9); near(pu.en.D, 5, 1e-9);
  const hf = c.halfField(kep, MOON, 60.5, 0.4); near(hf.field, 1.25 / 55, 0.01, 'chief ray reaches the eyepiece rim');
  near(c.passFraction(kep, MOON, 0, 60.5, 0.4, 60), 0.4 * 0.4 / 0.25, 0.02, 'a 4 mm eye pupil takes (4/5)² of the 5 mm exit pupil');
});
group('Galilean telescope: M = −f₁/f₂ = +5, upright; its exit pupil is virtual, inside the tube', () => {
  const gal = [lens(0, 50, 5), lens(40, -10, 2)];
  near(c.angularM(gal, MOON, 41), 5, 1e-9); near(c.textbookM(c.imageChain(gal, MOON), MOON), 5, 1e-12);
  const pu = c.pupils(gal, MOON); assert(pu.ex.z < 40, 'virtual exit pupil'); near(pu.ex.z, 40 - 8, 1e-9); near(pu.ex.D, 1.0, 1e-9);
});
group('terrestrial telescope: an erecting lens at 2f (m₂ = −1) makes M = +10, upright', () => {
  const ter = [lens(0, 50, 5), lens(60, 5, 3), lens(75, 5, 2.5)], ch = c.imageChain(ter, MOON);
  near(ch[1].m, -1, 1e-12); near(ch[1].z, 70, 1e-12); near(c.textbookM(ch, MOON), 10, 1e-12); near(c.angularM(ter, MOON, 85.5), 10, 1e-9);
  near(ch[0].h, -50 * MOON.a, 1e-12, 'first image: −f θ'); near(ch[1].h, 50 * MOON.a, 1e-12);
});
group('simple magnifier (§2.7): object at F gives M = 25/f for any eye position; image at 25 cm, eye at the lens, gives 1 + 25/f', () => {
  const mag = [lens(0, 5, 4)];
  for (const zE of [0.5, 2, 5]) near(c.angularM(mag, { kind: 'near', z: -5, h: 0.5 }, zE), 5, 1e-9);
  const dO = 1 / (1 / 5 + 1 / 25); near(c.angularM(mag, { kind: 'near', z: -dO, h: 0.5 }, 1e-9), 6, 1e-6);
});
group('reduced eye: relaxed for parallel light, accommodates down to 25 cm, blurred nearer or for converging light', () => {
  near(c.EYE_RET, 1.80, 0); near(c.eyeFocus(0).P, 1 / 1.8, 1e-12); assert(c.eyeFocus(0).sharp);
  const e25 = c.eyeFocus(c.vergence(0, 25)); assert(e25.sharp); near(e25.P, 1 / 1.8 + 0.04, 1e-12);
  assert(!c.eyeFocus(c.vergence(0, 15)).sharp, 'closer than the near point'); assert(!c.eyeFocus(c.vergence(30, 25)).sharp, 'converging');
  assert(c.vergence(-Infinity, 10) === 0 && c.vergence(Infinity, 10) === 0);
});
group('camera: 50 mm lens focuses from infinity (d_s = f) to 45 cm', () => {
  near(c.cameraFocus(0).ds, 5, 1e-12); near(c.cameraFocus(-1 / 45).ds, 1 / (1 / 5 - 1 / 45), 1e-12); assert(c.cameraFocus(-1 / 45).sharp);
  assert(!c.cameraFocus(-1 / 20).sharp); assert(!c.cameraFocus(0.1).sharp);
});
group('light from a star (Astro 2203): (D_en/d)² with the eye pupil as a stop; equals the traced share of the objective times (D/d)²', () => {
  const kep = [lens(0, 50, 5), lens(55, 5, 2.5)], zE = c.pupils(kep, MOON).ex.z;
  const gather = (els, d) => Math.pow(c.pupils(els.concat([stop(zE, d)]), MOON).en.D / d, 2);
  near(gather(kep, 0.7), Math.pow(5 / 0.7, 2), 1e-9, '7 mm pupil, exit pupil 5 mm: the whole objective');
  near(gather(kep, 0.4), 100, 1e-9, '4 mm pupil, exit pupil 5 mm: the eye pupil limits it to M² = 100');
  /* the traced rays agree: the share of rays through the objective that reach the 4 mm pupil is (4/5)² */
  near(c.passFraction(kep, MOON, 0, zE, 0.4, 120) * Math.pow(5 / 0.4, 2), 100, 0.01, 'traced');
  for (const D of [2, 3, 4, 6, 7]) near(gather([lens(0, 50, D), lens(55, 5, 2.5)], 0.7), Math.pow(D / 0.7, 2), 1e-9, 'D ' + D);
});
console.log(`${n} groups passed`);
