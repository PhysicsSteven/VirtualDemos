'use strict';
// Shielding Rooms: the CT room (NCRP 147), the linac vault and its maze door (NCRP 151) and the proton room, on the demo's core.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('shielding-rooms', 'RHO,CT_FIT,CT_EQUIV,CT_K,archerB,archerX,ctB,ctX,ctRoom,TVL,tvlX,tvlB,LEAK,IMRT_C,linacWall,linacRoom,MAZE,mazeDoor,PRO,QE,protonRoom,protonB');

let n = 0;
const within = (a, b, d, w) => assert(Math.abs(a - b) <= d, `${w || ''}: expected ${b} ± ${d}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const CT0 = { nBody: 150, nHead: 30, dlpBody: 550, dlpHead: 1200, contrast: 0.4, kv: 120, a: 3, T: 1, P: 0.02 };
const LIN0 = { mv: 6, bar: 'pri', W: 450, fI: 0, U: 0.25, a: 3, T: 1, P: 0.02 };

group('CT fits: NCRP 147 values, and the two numbers of the published CT example (1.54 mm lead for B = 3.87e-3, 53 mm concrete transmits 0.09)', () => {
  assert.deepEqual(c.CT_FIT, { 120: { lead: [2.246, 5.73, 0.547], concrete: [0.0383, 0.0142, 0.658] }, 140: { lead: [2.009, 3.99, 0.342], concrete: [0.0336, 0.0122, 0.519] } });
  within(c.archerX(c.CT_FIT[120].lead, 3.87e-3), 1.54, 0.005, 'lead');
  within(c.archerB(c.CT_FIT[120].concrete, 53), 0.09, 0.002, 'concrete');
});

group('Archer: B(0) = 1, falls with thickness, the inverse undoes it, and deep in the wall each HVL is ln 2/α', () => {
  for (const kv of [120, 140]) for (const m of ['lead', 'concrete']) { const p = c.CT_FIT[kv][m];
    within(c.archerB(p, 0), 1, 1e-12, 'B(0)'); let last = 1;
    for (let x = 0.1; x < 400; x *= 1.5) { const B = c.archerB(p, x); if (B < 1e-100) break; assert(B < last); last = B; within(c.archerX(p, B), x, 1e-6 * x + 1e-9, `${kv} ${m} inverse at ${x}`); }
    const x0 = 20 / p[0], h = Math.LN2 / p[0]; within(c.archerB(p, x0 + h) / c.archerB(p, x0), 0.5, 0.01, `${kv} ${m} HVL`); }
  assert.equal(c.archerX(c.CT_FIT[120].lead, 1), 0); assert.equal(c.archerX(c.CT_FIT[120].lead, 2), 0);
});

group('CT equivalents: steel is 8 times the lead, gypsum 3.2 times the concrete (NCRP 147 Table 4.8)', () => {
  for (const B of [0.3, 0.01, 1e-4]) for (const kv of [120, 140]) {
    within(c.ctX(kv, 'steel', B), 8 * c.ctX(kv, 'lead', B), 1e-9, 'steel'); within(c.ctX(kv, 'gypsum', B), 3.2 * c.ctX(kv, 'concrete', B), 1e-9, 'gypsum');
    within(c.ctB(kv, 'steel', c.ctX(kv, 'steel', B)), B, 1e-9 * B, 'steel round trip'); }
});

group('CT room: κ DLP with the body factor 1.2 and repeats for contrast; inverse square to 0.3 m past the wall; B = P/(T K)', () => {
  const r = c.ctRoom(CT0);
  within(r.Kbody, 1.4 * 150 * 1.2 * 3e-4 * 550, 1e-9, 'body'); within(r.Khead, 1.4 * 30 * 9e-5 * 1200, 1e-9, 'head');
  within(r.Kbody, 41.58, 1e-9, 'body matches the example\'s 41.6 mGy');
  within(r.d, 3.3, 1e-12, 'd'); within(r.K, r.K1 / 3.3 ** 2, 1e-12, 'K'); within(r.B, 0.02 / r.K, 1e-12, 'B');
  within(c.ctB(120, 'lead', r.x.lead), r.B, 1e-9, 'lead gives B'); within(r.x.lead, 1.457, 0.001, 'lead mm');
  const rc = c.ctRoom({ ...CT0, T: 0.2 }); within(rc.B, 5 * r.B, 1e-12, 'occupancy'); assert(rc.x.lead < r.x.lead);
  const r2 = c.ctRoom({ ...CT0, P: 0.1 }); within(r2.B, 5 * r.B, 1e-12, 'workers'); const r0 = c.ctRoom({ ...CT0, nBody: 0, nHead: 0 }); assert.equal(r0.x.lead, 0);
});

group('linac TVLs: NCRP 151 Tables B.2 and B.7 as tabulated; thickness = TVL1 + (n − 1) TVLe, and B(x) inverts it', () => {
  assert.deepEqual(c.TVL[6].pri.concrete, [37, 33]); assert.deepEqual(c.TVL[18].pri.concrete, [45, 43]); assert.deepEqual(c.TVL[6].sec.concrete, [34, 29]); assert.deepEqual(c.TVL[18].sec.concrete, [36, 34]);
  for (const mv of [6, 10, 15, 18]) assert.deepEqual(c.TVL[mv].pri.lead, [5.7, 5.7]);
  within(c.tvlX(0.1, 37, 33), 37, 1e-12, 'one TVL'); within(c.tvlX(1e-3, 37, 33), 37 + 2 * 33, 1e-9, 'three TVLs'); within(c.tvlX(10 ** -0.5, 37, 33), 18.5, 1e-9, 'half a TVL');
  for (const x of [0, 10, 37, 80, 200]) within(c.tvlX(c.tvlB(x, 37, 33), 37, 33), x, 1e-9, `round trip ${x}`);
});

group('primary barrier: B = P d²/(W U T) with d = 1 + a + x + 0.3 m, solved for its own thickness', () => {
  for (const m of ['concrete', 'steel', 'lead']) { const w = c.linacWall(LIN0, m);
    within(w.d, 1 + 3 + w.x / 100 + 0.3, 1e-6, `${m} d`); within(w.B, 0.02e-3 * w.d ** 2 / (450 * 0.25), 1e-15, `${m} B`); within(c.tvlB(w.x, ...c.TVL[6].pri[m]), w.B, 1e-9 * w.B, `${m} x`); }
  within(c.linacRoom(LIN0).x.concrete, 175.15, 0.01, '6 MV concrete'); within(c.linacRoom({ ...LIN0, mv: 18 }).x.concrete, 222.2, 0.05, '18 MV concrete');
  const r = c.linacRoom(LIN0); assert(r.x.lead < r.x.steel && r.x.steel < r.x.concrete);
});

group('per unit mass the megavoltage walls are alike (Compton), while at CT energies lead wins by far (photoelectric)', () => {
  const r = c.linacRoom(LIN0), kg = (m) => c.RHO[m] * r.x[m] * 10; const ks = ['concrete', 'steel', 'lead'].map(kg);
  assert(Math.max(...ks) / Math.min(...ks) < 1.3, `MV masses ${ks}`);
  const q = c.ctRoom(CT0), kl = c.RHO.lead * q.x.lead, kc = c.RHO.concrete * q.x.concrete; assert(kc / kl > 10, `CT: concrete ${kc}, lead ${kl} kg/m²`);
});

group('secondary wall: 0.1 % leakage, U = 1, the IMRT workload counted three times; thinner than the primary barrier', () => {
  const o = { ...LIN0, bar: 'sec', U: 1, fI: 0.8 }, w = c.linacWall(o, 'concrete');
  within(w.WL, 450 * (0.2 + 3 * 0.8), 1e-9, 'W_L'); within(w.d, 3 + w.x / 100 + 0.3, 1e-6, 'd'); within(w.B, 0.02e-3 * w.d ** 2 / (1e-3 * w.WL), 1e-15, 'B');
  assert(w.x < c.linacRoom(LIN0).x.concrete);
});

group('maze door: neutron fluence (NCRP 151 eq. 2.17), modified Kersey and capture gammas; the door\'s TVLs; a longer maze helps', () => {
  const o = { a: 3, d2: 8, W: 450, fI: 0, bpe: 0, pb: 0, T: 1, P: 0.02 }, r = c.mazeDoor(o), Q = 1.22e12, Sr = 8 * 9 + 8 * 3 * 3.5;
  within(r.Sr, Sr, 1e-9, 'S_r'); within(r.phi, Q / (4 * Math.PI * 9) + 6.7 * Q / (2 * Math.PI * Sr), 1, 'φ_A'); within(r.tvdN, 2.06 * Math.sqrt(6), 1e-12, 'TVD');
  within(r.Hn, 1000 * 450 * 2.4e-15 * r.phi * (1.64 * 10 ** (-8 / 1.9) + 10 ** (-8 / r.tvdN)), 1e-12, 'H_n'); within(r.Hg, 1000 * 450 * 6.9e-16 * r.phi * 10 ** (-8 / 5.4), 1e-12, 'H_cg');
  const d = c.mazeDoor({ ...o, bpe: 4.5, pb: 6.1 }); within(d.Hn1, r.Hn / 10, 1e-12, 'BPE TVL'); within(d.Hg1, r.Hg / 10, 1e-12, 'lead TVL');
  assert(c.mazeDoor({ ...o, d2: 4 }).Hn > 5 * r.Hn); assert(c.mazeDoor({ ...o, bpe: 10, pb: 7 }).ok); assert(!c.mazeDoor({ ...o, bpe: 10, pb: 3 }).ok);
});

group('proton room: λρ = 122 g/cm² (PTCOG Report 1 gives about 120); 0.49 nA; the wall gives exactly the goal; doubling adds less than λ ln 2', () => {
  within(c.PRO.lam * c.RHO.concrete, 122.2, 0.1, 'λρ'); within(c.PRO.I, 17.36e-9 - 16.87e-9, 1e-15, 'current');
  const o = { np: 30, tb: 1.5, U: 0.25, a: 4, T: 1, P: 0.02 }, r = c.protonRoom(o);
  within(r.N, 0.49e-9 * 30 * 1.5 * 60 * 5 / 1.602176634e-19, 1, 'protons'); within(r.r, 4 + r.x.concrete / 100 + 0.3, 1e-6, 'r');
  const H = 1000 * c.PRO.H0 * r.N * 0.25 * Math.exp(-r.x.concrete / 52) / r.r ** 2; within(H, 0.02, 1e-6, 'meets the goal exactly');
  const r2 = c.protonRoom({ ...o, np: 60 }), dx = r2.x.concrete - r.x.concrete; assert(dx < 52 * Math.LN2 && dx > 25, `doubling adds ${dx} cm`);
  within(c.protonB(52), Math.exp(-1), 1e-12, 'one λ');
});

console.log(`${n} groups passed`);
