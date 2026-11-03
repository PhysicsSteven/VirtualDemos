/* Builds demos/solar-system-formation-data/impacts.js, the giant impact chapter's data, from one nbody run.
   Usage: node playback.cjs run.jsonl seed runs > ../../demos/solar-system-formation-data/impacts.js
   run.jsonl is nbody's output (snapshots every 0.1 Myr, then events), seed the run's seed in startBodies, runs how many runs were
   made in all (the page says the run shown is one of them). The page keeps every event and the snapshots every 0.2 Myr up to
   23 Myr, then every million years: a, e and i of each body, rounded for the picture. Speeds go from AU/yr to km/s
   (1 AU and a Julian year, as in demos/lib/constants.js). The orbits' turning angles are left out: the page turns them slowly
   for the picture, as it says. */
const fs = require('fs');
const [file, seed, runs] = process.argv.slice(2);
if (!file) { console.error('usage: node playback.cjs run.jsonl seed runs'); process.exit(1); }
const AU = 1.495978707e11, YR = 31557600, KMS = AU / YR / 1000;
const r = (v, n) => +Number(v).toPrecision(n), d = (v, k) => +Number(v).toFixed(k);
const snaps = [], ev = [], gone = [];
for (const L of fs.readFileSync(file, 'utf8').split('\n')) {
  if (!L.trim()) continue; let o; try { o = JSON.parse(L); } catch (_) { continue; }
  if ('snap' in o) snaps.push(o);
  else if (o.event === 'merge') ev.push([d(o.t, 0), o.target, o.impactor, r(o.mT, 4), r(o.mI, 4), r(o.vImp * KMS, 3), r(o.vImp / o.vEsc, 3), Math.round(o.angle), r(o.a, 3)]);
  else if (o.event === 'ejected' || o.event === 'sun') gone.push([d(o.t, 0), o.id, r(o.m, 4), o.event]);
}
snaps.sort((a, b) => a.snap - b.snap);
const keep = snaps.filter((s, i) => i === 0 || i === snaps.length - 1 || (s.snap <= 23e6 + 1 ? Math.round(s.snap / 1e5) % 2 === 1 : Math.round(s.snap / 1e5) % 10 === 0));
const S = keep.map((s) => [d(s.snap, 0), s.b.map((b) => [b.id, r(b.m, 4), r(b.a, 4), d(b.e, 3), d(b.i, 3)])]);
const last = snaps[snaps.length - 1];
const out = { seed: +seed, runs: +runs, t0: snaps[0].snap, tEnd: last.snap, events: ev, gone, snaps: S,
  /* each body still there at the end and the starting protoplanets it is made of */
  of: Object.fromEntries(last.b.map((b) => [b.id, b.of])) };
process.stdout.write('/* Building a Solar System, chapter 4: one giant impact run (tools/solar-system-formation/nbody.c, made into this file by\n'
  + '   playback.cjs). Simulated data: snapshots [t (yr), bodies [id, m (Earth masses), a (AU), e, i (rad)]], events [t, target, impactor,\n'
  + '   target mass, impactor mass, impact speed (km/s), speed over the escape speed, angle from head on (°), a (AU)]. */\n'
  + 'window.VD_SSF_IMPACTS = ' + JSON.stringify(out) + ';\n');
