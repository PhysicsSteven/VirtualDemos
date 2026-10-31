'use strict';
/* Timbre and Harmonics: the wave packet in a dispersive medium (plan #16) and the vowel source–filter setup (plan #19). */
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const T = core('timbre', 'TAU,NH,packetSeries,packetWidths,MEDIA,dispOmega,packetAt,FORMANT_BW,VOWELS,tractH,vowelSeries,seriesAt');
let pass = 0; const ok = (name, fn) => { fn(); pass++; console.log('ok', name); };
const { TAU, NH } = T;
const pk = T.packetSeries(8, 1.5, NH), k1 = 1;
const wrap = (d) => { d = ((d % TAU) + TAU) % TAU; return d > Math.PI ? d - TAU : d; };

ok('the scaling keeps the center: Ω(n̄) = n̄ and dΩ/dn = p there', () => {
  for (const m of T.MEDIA) {
    const nb = 7.3, h = 1e-5;
    assert(Math.abs(T.dispOmega(nb, nb, m.p) - nb) < 1e-12);
    const d = (T.dispOmega(nb + h, nb, m.p) - T.dispOmega(nb - h, nb, m.p)) / (2 * h);
    assert(Math.abs(d - m.p) < 1e-8, m.id);
  }
});
ok('air: the packet moves at v without changing shape', () => {
  const w0 = T.packetAt(pk.a, pk.ph, 1, 0, k1, 4096);
  for (const s of [0.3, 1, 2.5]) {
    const w = T.packetAt(pk.a, pk.ph, 1, s, k1, 4096);
    assert(Math.abs(w.dx - w0.dx) < 1e-9, 'width kept');
    assert(Math.abs(wrap(w.center - w0.center - s)) < 2e-3, 'moves θ = s');
  }
});
ok('starting packet: the same widths as the existing readout', () => {
  const a = T.packetWidths(pk.a, pk.ph.map((v) => -v), k1, 4096), b = T.packetWidths(pk.a, pk.ph, k1, 4096);
  assert(Math.abs(a.dx - b.dx) < 1e-12 && Math.abs(a.product - b.product) < 1e-12);
});
ok('ω ∝ k²: the energy center moves at exactly v_g = 2v (mean of dΩ/dn over aₙ² is 2 at n̄)', () => {
  const w0 = T.packetAt(pk.a, pk.ph, 2, 0, k1, 8192);
  for (const s of [0.05, 0.1, 0.2]) {
    const w = T.packetAt(pk.a, pk.ph, 2, s, k1, 8192);
    const v = wrap(w.center - w0.center) / s;
    assert(Math.abs(v - 2) < 5e-3, `v ${v}`);
  }
});
ok('deep water: envelope at about v/2, ripples at about 3v/2 (early, before the packet spreads)', () => {
  for (const [p, want] of [[0.5, 0.5], [1.5, 1.5]]) {
    const w0 = T.packetAt(pk.a, pk.ph, p, 0, k1, 8192), w = T.packetAt(pk.a, pk.ph, p, 0.3, k1, 8192);
    const v = wrap(w.center - w0.center) / 0.3;
    assert(Math.abs(v - want) < 0.02, `p ${p}: ${v}`);
  }
});
ok('dispersion spreads the packet, faster for larger |d²ω/dk²|', () => {
  const w0 = T.packetAt(pk.a, pk.ph, 1, 0, k1, 4096).dx;
  const g = (p) => T.packetAt(pk.a, pk.ph, p, 1, k1, 4096).dx;
  /* |Ω''(n̄)| = p|p − 1|/n̄: 0.25, 0.75, 2 for p = 1/2, 3/2, 2 */
  assert(g(0.5) > w0 * 1.0001 && g(1.5) > g(0.5) && g(2) > g(1.5));
});
ok('ω ∝ k²: width against the free Gaussian result early on', () => {
  /* for a Gaussian in |a|² with RMS spread Δn, quadratic dispersion Ω'' = 2/n̄ gives Δθ(s)² = Δθ₀² + (Ω'' Δn s)² exactly */
  const w0 = T.packetAt(pk.a, pk.ph, 2, 0, k1, 8192), s = 0.15, w = T.packetAt(pk.a, pk.ph, 2, s, k1, 8192);
  const want = Math.sqrt(w0.dth ** 2 + (2 / w0.nBar * w0.dn * s) ** 2);
  assert(Math.abs(w.dth / want - 1) < 0.03, `${w.dth} vs ${want}`);
});
ok('tract response: 1 at f = 0, |Hᵢ| = Fᵢ/Bᵢ at f = Fᵢ, phase −90° there', () => {
  const h0 = T.tractH(0, [500], [80]); assert(Math.abs(h0.mag - 1) < 1e-12 && Math.abs(h0.ph) < 1e-12);
  const h = T.tractH(500, [500], [80]); assert(Math.abs(h.mag - 500 / 80) < 1e-12 && Math.abs(h.ph + Math.PI / 2) < 1e-12);
  const c = T.tractH(1234, [500, 1500, 2500], [80, 100, 120]), p = [500, 1500, 2500].map((F, i) => T.tractH(1234, [F], [[80, 100, 120][i]]));
  assert(Math.abs(c.mag - p[0].mag * p[1].mag * p[2].mag) < 1e-9 * c.mag, 'cascade multiplies');
});
ok('vowel series: strongest harmonic 1, peaks of the spectrum near the formants', () => {
  for (const v of T.VOWELS) {
    const s = T.vowelSeries(v.F, 220, NH);
    assert(Math.abs(Math.max(...s.a) - 1) < 1e-12, v.word);
  }
  /* ah at 220 Hz: F1 850 between harmonics 3 (660) and 4 (880), F2 1220 near harmonic 5 or 6 */
  const ah = T.vowelSeries([850, 1220, 2810], 220, NH).a;
  assert(ah[4] > ah[2] && ah[4] > ah[8], 'F1 region');
  const ee = T.vowelSeries([310, 2790, 3310], 220, NH).a;
  assert(ee[1] > ee[4] && ee[13] > ee[8], 'ee: low F1, high F2 (2790 Hz near harmonic 13)');
});
ok('waveform from the series is a filtered sawtooth: harmonic sum equals Σ |H|/n sin(nθ + arg H)', () => {
  const F = [730, 1090, 2440], s = T.vowelSeries(F, 110, NH);
  for (const th of [0.3, 2.1, 4.4]) {
    let want = 0; for (let n = 1; n <= NH; n++) { const h = T.tractH(n * 110, F, T.FORMANT_BW); want += h.mag / n * Math.sin(n * th + h.ph); }
    assert(Math.abs(T.seriesAt(th, s.a, s.ph) * s.scale - want) < 1e-9);
  }
});
console.log(`${pass} passed`);
