'use strict';
// Polarization: Malus's law, polarizer chains, wave plates, Stokes and Mueller consistency, and the Fresnel equations,
// each against the textbook closed form (OpenStax Vol 3 §1.8; Hecht, Optics, ch. 8 and 4).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('polarization', 'axis,jPolarizer,jRetarder,stokesOf,mueller,mApply,propagate,describe,nChain,fresnel,brewster,critical');
let n = 0;
const close = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const I = (out) => out[out.length - 1].S[0];
const pol = (ang) => ({ type: 'pol', ang }), qwp = (ang) => ({ type: 'qwp', ang }), hwp = (ang) => ({ type: 'hwp', ang });

group("Malus's law I = I₀ cos²θ, for linear input at every angle", () => {
  for (const th of [0, 10, 30, 45, 60, 89, 90, 135]) close(I(c.propagate({ kind: 'lin', ang: 0 }, [pol(th)])), Math.cos(th * Math.PI / 180) ** 2, 1e-14, `${th}°`);
});

group('unpolarized light: a polarizer passes half; crossed pair 0; 0°, 45°, 90° passes 1/8', () => {
  const un = { kind: 'unpol' };
  close(I(c.propagate(un, [pol(20)])), 0.5, 1e-15, 'one');
  close(I(c.propagate(un, [pol(0), pol(90)])), 0, 1e-15, 'crossed');
  close(I(c.propagate(un, [pol(0), pol(45), pol(90)])), 0.125, 1e-15, 'three');
  assert.equal(c.describe(c.propagate(un, [])[0].S).kind, 'unpol');
});

group('N polarizers turning 90° in all: cos^{2N}(π/2N), checked against a full propagation, → 1 as N grows', () => {
  for (const N of [1, 2, 3, 5, 10, 30]) {
    const els = [pol(0)]; for (let k = 1; k <= N; k++) els.push(pol(90 * k / N));
    close(I(c.propagate({ kind: 'lin', ang: 0 }, els)), c.nChain(N), 1e-12, `N ${N}`);
  }
  close(c.nChain(2), 0.25, 1e-15); assert(c.nChain(1000) > 0.997);
});

group('a half wave plate turns linear light by twice its axis angle; intensity unchanged', () => {
  for (const [a, th] of [[0, 20], [10, 30], [-15, 45]]) {
    const out = c.propagate({ kind: 'lin', ang: a }, [hwp(th)]), d = c.describe(out[1].S);
    assert.equal(d.kind, 'lin'); close(d.I, 1, 1e-14);
    const want = ((2 * th - a + 90) % 180 + 180) % 180 - 90;
    close(d.ang, want, 1e-9, `axis ${th}°, input ${a}°`);
  }
});

group('quarter wave plate at 45° to linear light makes circular light; the other 45° gives the other hand; two QWPs = one HWP', () => {
  const a = c.describe(c.propagate({ kind: 'lin', ang: 0 }, [qwp(45)])[1].S), b = c.describe(c.propagate({ kind: 'lin', ang: 0 }, [qwp(-45)])[1].S);
  assert.equal(a.kind, 'circ'); assert.equal(b.kind, 'circ'); assert.notEqual(a.hand, b.hand);
  const twoQ = c.propagate({ kind: 'lin', ang: 10 }, [qwp(30), qwp(30)])[2].S, oneH = c.propagate({ kind: 'lin', ang: 10 }, [hwp(30)])[1].S;
  twoQ.forEach((s, i) => close(s, oneH[i], 1e-14, `S${i}`));
  // QWP at 0° along linear light changes nothing; at 22.5° gives an ellipse with axis ratio tan 22.5°
  const e = c.describe(c.propagate({ kind: 'lin', ang: 0 }, [qwp(22.5)])[1].S);
  assert.equal(e.kind, 'ellip'); close(e.ratio, Math.tan(Math.PI / 8), 1e-12, 'ellipticity');
  // circular light through a polarizer at any angle: half
  for (const th of [0, 33, 90]) close(I(c.propagate({ kind: 'circ', hand: 'R' }, [pol(th)])), 0.5, 1e-14);
});

group('Stokes and Mueller agree with Jones: fully polarized light keeps S₀² = S₁² + S₂² + S₃², Mueller(J)·S(E) = S(J·E)', () => {
  const els = [qwp(17), pol(40), hwp(-25), qwp(70)];
  for (const s of c.propagate({ kind: 'lin', ang: 12 }, els)) {
    const [s0, s1, s2, s3] = s.S; close(s0 * s0, s1 * s1 + s2 * s2 + s3 * s3, 1e-13, 'pure');
    const sj = c.stokesOf(s.E); sj.forEach((x, i) => close(x, s.S[i], 1e-13, 'Jones vs Mueller'));
  }
  // textbook Mueller matrix of an ideal linear polarizer, axis horizontal (θ = 90° from vertical): ½[[1,1,0,0],[1,1,0,0],0,0]
  const M = c.mueller(c.jPolarizer(90)), want = [[0.5, 0.5, 0, 0], [0.5, 0.5, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
  M.forEach((r, i) => r.forEach((x, j) => close(x, want[i][j], 1e-15, `M${i}${j}`)));
});

group('Fresnel: R + T = 1 for s and p, Rp = 0 at Brewster, normal incidence ((n₁−n₂)/(n₁+n₂))², total reflection past critical', () => {
  for (const [n1, n2] of [[1, 1.5], [1.5, 1], [1.333, 1.0003], [1, 2.42]]) {
    for (let deg = 0; deg < 90; deg += 7) {
      const f = c.fresnel(n1, n2, deg * Math.PI / 180);
      if (f.tir) { close(f.Rs, 1, 0); continue; }
      close(f.Rs + f.Ts, 1, 1e-13, `s ${n1}→${n2} ${deg}°`); close(f.Rp + f.Tp, 1, 1e-13, `p ${n1}→${n2} ${deg}°`);
    }
    const f0 = c.fresnel(n1, n2, 0), r0 = ((n1 - n2) / (n1 + n2)) ** 2;
    close(f0.Rs, r0, 1e-15); close(f0.Rp, r0, 1e-15);
    close(c.fresnel(n1, n2, c.brewster(n1, n2)).Rp, 0, 1e-28, 'Brewster');
    close(c.brewster(n1, n2) + Math.asin(n1 / n2 * Math.sin(c.brewster(n1, n2))), Math.PI / 2, 1e-12, 'reflected ⟂ refracted at Brewster');
  }
  close(c.brewster(1, 1.5) * 180 / Math.PI, 56.3099, 1e-4); close(c.critical(1.5, 1) * 180 / Math.PI, 41.8103, 1e-4);
  assert(c.fresnel(1.5, 1, c.critical(1.5, 1) + 1e-6).tir); assert(!c.fresnel(1.5, 1, c.critical(1.5, 1) - 1e-6).tir);
  assert(Number.isNaN(c.critical(1, 1.5)));
});

console.log(`${n} polarization test groups passed`);
