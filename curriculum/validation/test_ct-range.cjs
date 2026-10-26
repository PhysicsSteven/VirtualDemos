'use strict';
// CT Numbers and Proton Range: the scanner's CT numbers from XCOM and SpekPy, the Schneider 1996 fit, the two calibration curves,
// the range shift of a slab against VDStop, and the plan's range error, split into its parts, on the shared core.
const assert = require('node:assert'), path = require('node:path'), vm = require('node:vm');
const { core, readLib } = require('./demo_source.cjs');
const V = require(path.join(__dirname, '../../demos/lib/vdstop.js'));
const c = core('ct-range', 'MATS,INSERTS,TISSUES,MYSTERY,useData,mat,za,rhoE,mu,NOISE,ROI_N,spectrum,meanE,muEff,huTrue,terms,fitSchneider,huModel,rsp,plfit,KNOTS,SUB_KNOTS,curveStoich,curveSubs,scan,roi,wetShift,rspMat,SITES,path,wetAt,zAtWet,plan,T_RSP,WET_NOISE_MM');
const dctx = {}; vm.runInNewContext(readLib('photondata.js'), dctx, { timeout: 5000 }); c.useData(dctx.VDPHOTON);

let n = 0;
const within = (a, b, d, w) => assert(Math.abs(a - b) <= d, `${w || ''}: expected ${b} ± ${d}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const pct = (a, b) => 100 * (a / b - 1);

group('materials: every composition sums to 1 by weight, mixtures keep their mass, water has ρₑ = 1', () => {
  for (const k of [...Object.keys(c.MATS), 'b10', 'b50', 'b90', 'spongy', 'marbled', 'femur']) { const m = c.mat(k);
    within(Object.values(m.w).reduce((a, b) => a + b, 0), 1, 2e-5, k); assert(m.I > 0 && m.rho > 0, k); }
  const b50 = c.mat('b50'); within(b50.rho, (1.85 + 1.0) / 2, 1e-12, 'half cortical bone, half soft tissue by volume');
  assert(b50.I > c.MATS.soft.I && b50.I < c.MATS.cort.I, 'Bragg rule I between the two');
  within(c.rhoE('water'), 1, 1e-12, 'water'); within(c.rhoE('cort'), 1.85 * 0.52130 / 0.55508, 0.002, 'cortical bone ρₑ from NIST\'s Z/A');
});

group('scanner: water reads 0 HU and air about −1000 at every kV; calcium lifts bone as the kV drops', () => {
  for (const kv of [80, 100, 120, 140]) { within(c.huTrue('water', kv), 0, 1e-9, `water ${kv}`); within(c.huTrue('air', kv), -999, 1, `air ${kv}`);
    assert(c.meanE(kv) > 40 && c.meanE(kv) < 90, `mean detected energy ${c.meanE(kv)} keV`); }
  assert(c.meanE(80) < c.meanE(120) && c.meanE(120) < c.meanE(140));
  assert(c.huTrue('b100', 80) > c.huTrue('b100', 120) + 200, 'B-100 much brighter at 80 kV');
  assert(c.huTrue('pe', 120) < 1000 * (c.rhoE('pe') - 1), 'hydrogen rich polyethylene falls below the ρₑ line');
  assert(c.huTrue('b100', 120) > 1000 * (c.rhoE('b100') - 1) + 300, 'B-100 far above it');
  const a = c.scan(120, 3), b = c.scan(120, 3); assert.deepEqual(a, b, 'a seed repeats');
  const sds = []; for (let s = 1; s < 300; s++) sds.push(c.scan(120, s).find((q) => q.key === 'water').hu);
  const m = sds.reduce((x, y) => x + y, 0) / sds.length, sd = Math.sqrt(sds.reduce((x, y) => x + (y - m) ** 2, 0) / (sds.length - 1));
  within(sd, c.NOISE[120] / Math.sqrt(c.ROI_N), 0.1, 'ROI mean scatters by σ/√N');
});

group('Schneider fit: on noiseless inserts it gives every insert within 3 HU, and every tissue within 4 HU at 120 kV', () => {
  for (const kv of [80, 120]) { const F = c.fitSchneider(c.INSERTS.map((k) => ({ key: k, hu: c.huTrue(k, kv) })));
    assert(F.kc > 0 && F.kp > 0, 'positive constants'); for (const k of c.INSERTS) within(c.huModel(k, F), c.huTrue(k, kv), 3, `${k} ${kv}`);
    for (const k of c.TISSUES) within(c.huModel(k, F), c.huTrue(k, kv), kv === 120 ? 4 : 7, `${k} ${kv}`); }
  const F = c.fitSchneider(c.scan(120, 1)); within(F.kc, 1.39e-3, 0.03e-3, 'k_coh'); within(F.kp, 3.81e-5, 0.05e-5, 'k_ph');
});

group('stopping power: water 1 at 150 MeV; d ln S / d ln I = −1/L, about −0.12', () => {
  within(c.rsp(V, 'water'), 1, 1e-4, 'water'); assert.equal(c.T_RSP, 150);
  for (const k of ['soft', 'cort', 'lung']) { const L = Math.log(c.rsp(V, k, 1.01) / c.rsp(V, k, 0.99)) / Math.log(1.01 / 0.99); within(L, -0.124, 0.006, k); }
  within(c.rsp(V, 'cort'), 1.66, 0.03, 'cortical bone');
});

group('curves: the stoichiometric curve meets the reference tissues within 2 % (skin, at −3.5 %, excepted), the substitute curve misses bone by over 15 %', () => {
  const m = c.scan(120, 1), cs = c.curveStoich(V, c.fitSchneider(m)), cu = c.curveSubs(V, m);
  for (const k of c.TISSUES) { const e = pct(cs.at(c.huTrue(k, 120)), c.rsp(V, k)); within(e, 0, k === 'skin' ? 4 : 2, k); }
  assert(pct(cu.at(c.huTrue('cort', 120)), c.rsp(V, 'cort')) > 15, 'substitutes on cortical bone');
  const noT = c.curveSubs(V, m.filter((q) => q.key !== 'teflon'));
  assert(Math.abs(pct(noT.at(c.huTrue('cort', 120)), c.rsp(V, 'cort'))) < Math.abs(pct(cu.at(c.huTrue('cort', 120)), c.rsp(V, 'cort'))), 'Teflon makes it worse');
  within(pct(cs.at(c.huTrue('bonec', 120)), c.rsp(V, 'bonec')), -9.5, 1.5, 'ICRU compact bone, a different bone, is off the curve');
  for (const k of ['muscleS', 'soft4', 'spongy', 'marbled']) within(pct(cs.at(c.huTrue(k, 120)), c.rsp(V, k)), 0, 2.5, k);
});

group('slab range shift: VDStop\'s water equivalent thickness plus 0.1 mm reading noise; water gives its own thickness', () => {
  for (const [k, t] of [['cort', 3], ['lung', 6], ['muscle', 5]]) { const w = c.wetShift(V, k, t, 1); within(w.truth, 10 * V.wet(t, c.rspMat(k), 150), 1e-9, k);
    within(w.truth / (10 * t), c.rsp(V, k), 0.01, `${k}: WET/t near the RSP`); }
  within(c.wetShift(V, 'water', 4, 1).truth, 40, 0.05, 'water');
  const e = []; for (let s = 1; s < 500; s++) { const w = c.wetShift(V, 'cort', 3, s); e.push(w.mm - w.truth); }
  const m = e.reduce((a, b) => a + b, 0) / e.length; within(Math.sqrt(e.reduce((a, b) => a + (b - m) ** 2, 0) / (e.length - 1)), c.WET_NOISE_MM, 0.015, 'noise');
});

group('plans: margin arithmetic, the error split into curve, CT number and I value parts, and their signs', () => {
  const cs = c.curveStoich(V, c.fitSchneider(c.scan(120, 1)));
  for (const site of ['brain', 'prostate', 'lung']) {
    const P0 = c.plan(V, site, { curve: cs, kv: 120 }); within(P0.err, 0, 1, `${site}: no added error`); within(P0.parts.hu, 0, 1e-9); within(P0.parts.iv, 0, 1e-9);
    within(P0.R, P0.wP, 1e-12, 'no margin: aim at the far edge'); within(P0.margin, 0, 1e-6, 'no margin');
    const P = c.plan(V, site, { curve: cs, kv: 120, a: 3.5, b: 1 }); within(P.R, P.wP * 1.035 + 0.1, 1e-12, `${site}: R = WET(1 + 3.5 %) + 1 mm`);
    within(P.over, P.margin + P.err, 1e-9, 'past the edge = margin + error'); assert(P.covered);
    const H = c.plan(V, site, { curve: cs, kv: 120, dHU: 20 }); assert(H.parts.hu > 0, `${site}: CT numbers high, plan too long, reaches deeper`);
    within(H.parts.curve + H.parts.hu + H.parts.iv, H.err, site === 'lung' ? 0.4 : 0.02, `${site}: parts add up`);
    const I = c.plan(V, site, { curve: cs, kv: 120, iErr: -10 }); assert(I.parts.iv < 0, `${site}: lower I, more stopping, falls short`);
    within(I.parts.curve + I.parts.hu + I.parts.iv, I.err, 0.02, `${site}: parts add up`); }
  const L = c.plan(V, 'lung', { curve: cs, kv: 120, dHU: 20 }); assert(L.err > 7, 'lung: 20 HU sends the beam about 8 mm deeper');
  const B = c.plan(V, 'brain', { curve: cs, kv: 120, a: 3.5, b: 1 }); within(B.margin, 4.27, 0.05, 'brain margin'); within(B.E, 116.7, 0.3, 'brain energy');
});

console.log(`ct-range: ${n} groups passed`);
