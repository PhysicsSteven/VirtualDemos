'use strict';
// Shells, the Periodic Table and X Rays: Pauli capacities, the n + l rule and its exceptions, NIST data sanity, Duane–Hunt limit,
// K lines and Moseley's law, and the tube's half value layers against SpekPy and the Photon Interactions demo.
const assert = require('node:assert');
const vm = require('node:vm');
const { core, readLib } = require('./demo_source.cjs');
const c = core('shells-and-x-rays', 'ELEMENTS,XRAY,XR,SUB_ORDER,cap,ruleConfig,realConfig,configText,shellCounts,outerShell,boxes,lastElectron,zEff,RY,HC_EV_PM,lamPm,ePm,xrayLines,kramersE,moseleyE');
let n = 0;
const je = (a, b) => assert.equal(JSON.stringify(a), JSON.stringify(b));
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1e-300, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('118 elements in order; every configuration holds Z electrons; no subshell over 2(2l + 1) (Pauli)', () => {
  assert.equal(c.ELEMENTS.length, 118);
  c.ELEMENTS.forEach((e, i) => { assert.equal(e[0], i + 1); const o = c.realConfig(e[0]); assert.equal(Object.values(o).reduce((a, k) => a + k, 0), e[0], e[1]);
    for (const s in o) assert(o[s] <= c.cap(s), `${e[1]} ${s}`); });
  je(['1s', '2p', '3d', '4f'].map(c.cap), [2, 6, 10, 14]);
  for (let k = 1; k <= 4; k++) assert.equal(c.SUB_ORDER.filter((s) => +s[0] === k).reduce((a, s) => a + c.cap(s), 0), 2 * k * k, `2n² for n = ${k}`);
});
group('the n + l rule: shell closures at the noble gases; exactly 20 measured exceptions up to Lr, Cr and Cu among them', () => {
  for (const z of [2, 10, 18, 36, 54, 86]) assert.equal(c.ELEMENTS[z - 1][5], 'noble');
  assert.equal(c.configText(c.ruleConfig(18)), '1s2 2s2 2p6 3s2 3p6');
  assert.equal(c.configText(c.ruleConfig(24)), '1s2 2s2 2p6 3s2 3p6 3d4 4s2'); assert.equal(c.configText(c.realConfig(24)), '1s2 2s2 2p6 3s2 3p6 3d5 4s1');
  const ex = []; for (let z = 1; z <= 103; z++) if (c.configText(c.ruleConfig(z)) !== c.configText(c.realConfig(z))) ex.push(c.ELEMENTS[z - 1][1]);
  assert.equal(ex.join(' '), 'Cr Cu Nb Mo Ru Rh Pd Ag La Ce Gd Pt Au Ac Th Pa U Np Cm Lr');
  je(c.shellCounts(c.realConfig(29)).slice(0, 4), [2, 8, 18, 1]); je(c.outerShell(c.realConfig(11)), { n: 3, count: 1 });
});
group("Hund's rule boxes and the last electron's quantum numbers", () => {
  je(c.boxes('2p', 3).map((b) => [b.up, b.down]), [[true, false], [true, false], [true, false]]);
  je(c.boxes('2p', 4).map((b) => [b.up, b.down]), [[true, true], [true, false], [true, false]]);
  je(c.lastElectron(1), { n: 1, l: 0, sub: '1s', m: 0, ms: 0.5 }); je(c.lastElectron(10), { n: 2, l: 1, sub: '2p', m: -1, ms: -0.5 });
});
group('NIST ionization energies: H 13.598, He the largest, alkali metals the smallest in each period; Z_eff for Na', () => {
  near(c.ELEMENTS[0][7], 13.598434599702, 1e-12); const ie = c.ELEMENTS.slice(0, 103).map((e) => e[7]); assert.equal(Math.max(...ie), ie[1]);
  for (const [a, b] of [[3, 10], [11, 18], [19, 36], [37, 54], [55, 86]]) { const per = c.ELEMENTS.slice(a - 1, b); assert.equal(per.reduce((m, e) => (e[7] < m[7] ? e : m))[5], 'alkali', `period from ${a}`); }
  near(c.zEff(c.ELEMENTS[10][7], 3), 1.8438, 1e-4); assert.equal(c.ELEMENTS[103][7], null, 'none above 103');
});
group('X ray data: Kα₁ > Kα₂, Kβ₁ > Kα₁, K edge above Kβ₁ for every target; Cu Kα₁ = 154.059 pm', () => {
  for (const r of c.XRAY) { assert(r[1] > r[2] && r[3] > r[1] && r[4] > r[3], `Z = ${r[0]}`); }
  near(c.lamPm(c.XR[29].ka1), 154.0593, 1e-6); near(c.XR[42].kedge, 20000.351, 1e-9);
});
group('Duane–Hunt: λ_min = hc/eV (41.33 pm at 30 kV); the continuum ends there; K lines only above the K edge', () => {
  near(c.lamPm(30000), 41.3281, 1e-5); assert.equal(c.kramersE(29, 30, 30000), 0); assert(c.kramersE(29, 30, 29000) > 0);
  assert.equal(c.xrayLines(42, 19.9).length, 0); assert.equal(c.xrayLines(42, 20.1).length, 3); near(c.ePm(c.lamPm(8000)), 8000, 1e-12);
});
group("Moseley: √f against Z is a straight line with slope near √(3/4 · 13.6 eV / h) and intercept near Z = 1", () => {
  const H = 6.62607015e-34, eV = 1.602176634e-19, pts = c.XRAY.filter((r) => r[0] <= 40).map((r) => [r[0], Math.sqrt(r[1] * eV / H)]);
  const N = pts.length, sx = pts.reduce((a, q) => a + q[0], 0), sy = pts.reduce((a, q) => a + q[1], 0), sxx = pts.reduce((a, q) => a + q[0] * q[0], 0), sxy = pts.reduce((a, q) => a + q[0] * q[1], 0);
  const m = (N * sxy - sx * sy) / (N * sxx - sx * sx), b = (sy - m * sx) / N, pred = Math.sqrt(0.75 * c.RY * eV / H);
  near(m, pred, 0.03, 'slope within 3% of the Bohr model'); near(-b / m, 1, 0.5, 'intercept near Z = 1');
  near(c.moseleyE(29), 0.75 * 13.605693122994 * 784, 1e-12); near(c.moseleyE(29) / c.XR[29].ka1, 0.994, 0.01, 'Cu within 1%');
});
group('half value layers: SpekPy 2.5.4 within 0.3 %, and the same numbers as Photon Interactions in Matter (shared photondata.js)', () => {
  const dctx = {}; vm.runInNewContext(readLib('photondata.js'), dctx, { timeout: 5000 }); const D = dctx.VDPHOTON;
  const t = core('shells-and-x-rays', 'useData,beamOK,hvl,meanEnergy,airKerma'), p = core('photon-interactions', 'useData,tubeSpectrum,filtered,hvl,meanEnergy');
  t.useData(D); p.useData(D);
  /* SpekPy's own get_hvl1, get_hvl2, get_emean: tungsten, 12°, 0.8 mm Be, dk = 1 keV, then the filters */
  for (const [kV, al, cu, h1, h2, em] of [[30, 2.5, 0, 0.9606, 1.1033, 23.362], [50, 2.5, 0, 1.7548, 2.3238, 32.242], [60.5, 2.5, 0, 2.1039, 2.9288, 36.156],
    [80, 2.5, 0, 2.7426, 4.0944, 42.936], [80, 1, 0, 1.609, 2.8093, 38.967], [80, 2.5, 0.1, 4.411, 5.6881, 47.921], [100, 2.5, 0, 3.4702, 5.4125, 49.19]]) {
    const h = t.hvl(74, kV, al, cu); near(h.h1, h1, 0.003, `HVL1 ${kV} kV`); near(h.h2, h2, 0.003, `HVL2 ${kV} kV`); near(t.meanEnergy(74, kV, al, cu), em, 0.002, `mean E ${kV} kV`);
    if (kV % 10 === 0 && kV >= 50) { const s = p.filtered(p.tubeSpectrum(kV), [{ mat: 'al', mm: al }, { mat: 'cu', mm: cu }]), q = p.hvl(s, 'al');
      near(h.h1, q.hvl1, 1e-9, 'same HVL1 as Photon Interactions'); near(h.h2, q.hvl2, 1e-9, 'same HVL2'); near(t.meanEnergy(74, kV, al, cu), p.meanEnergy(s), 1e-12, 'same mean energy'); }
  }
  assert.equal(t.hvl(74, 80, 2.5, 0).h1.toFixed(2), '2.74');
  assert(!t.beamOK(74, 19.5) && t.beamOK(74, 20) && t.beamOK(74, 99.5) && !t.beamOK(29, 80) && !t.beamOK(74, 110), 'tungsten, 20 to 100 kV only');
  assert(t.hvl(74, 80, 2.5, 0).h2 > t.hvl(74, 80, 2.5, 0).h1, 'the beam hardens');
});

/* Build an atom (2026-10-31) */
const b = core('shells-and-x-rays', 'useNubase,atomInfo,commonN,ionConfig,configText,realConfig');
{ const d = {}; vm.runInNewContext(readLib('nubase.js'), d, { timeout: 5000 }); b.useNubase(d.VDNUBASE); }
group('Build an atom: element from protons, charge p − e, A = p + n; isotopes from NUBASE2020; ¹²C weighs 12 u exactly', () => {
  const c12 = b.atomInfo(6, 6, 6); assert.equal(c12.el[1], 'C'); assert.equal(c12.charge, 0); assert.equal(c12.A, 12); assert.equal(c12.kind, 'stable'); assert.equal(c12.massU, 12);
  const na = b.atomInfo(11, 12, 10); assert.equal(na.charge, 1); near(na.massU, 22.98976928, 1e-9, 'Na23');
  const cl = b.atomInfo(17, 18, 18); assert.equal(cl.charge, -1);
  assert.equal(b.atomInfo(6, 8, 6).kind, 'radioactive'); assert.equal(b.atomInfo(0, 1, 0).kind, 'none'); assert.equal(b.atomInfo(1, 9, 1).kind, 'unknown');
  je([1, 6, 26, 43, 82, 92].map(b.commonN), [0, 6, 30, 54, 126, 146]);
});
group('ions: a cation loses its highest n, then highest l, first (Fe³⁺ [Ar] 3d⁵, Cu⁺ [Ar] 3d¹⁰); an anion is the next neutral atom', () => {
  const ar = '1s2 2s2 2p6 3s2 3p6';
  assert.equal(b.configText(b.ionConfig(26, 23)), ar + ' 3d5'); assert.equal(b.configText(b.ionConfig(29, 28)), ar + ' 3d10');
  assert.equal(b.configText(b.ionConfig(17, 18)), ar); assert.equal(b.configText(b.ionConfig(11, 10)), '1s2 2s2 2p6');
  assert.equal(b.configText(b.ionConfig(26, 26)), b.configText(b.realConfig(26))); assert.equal(b.configText(b.ionConfig(5, 0)), '');
});
console.log(`${n} groups passed`);
