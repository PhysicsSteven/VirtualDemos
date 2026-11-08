'use strict';
// Star Slice plays back MESA profiles, so its physics is the data. These checks keep the packed data honest:
// the page carries exactly the files in tools/star-slice/data, every moment obeys L = 4πR²σT_eff⁴ and mass continuity
// dm = 4πr²ρ dr, mass fractions add to at most 1, and the main sequence lifetimes come out near the textbook scale
// t ≈ 10 Gyr (M/M☉)^−2.5 (OpenStax Astronomy §22.1).
const assert = require('node:assert'), fs = require('node:fs'), path = require('node:path'), zlib = require('node:zlib');
const root = path.resolve(__dirname, '../..'), dataDir = path.join(root, 'tools/star-slice/data'), pageDir = path.join(root, 'demos/star-slice-data');
const SIGMA = 5.670374419e-8, RSUN = 6.957e8, LSUN = 3.828e26, MSUN = 1.98841e30;   // as in demos/lib/constants.js
let n = 0;
function group(name, f) { f(); n++; console.log('PASS', name); }
const files = fs.readdirSync(dataDir).filter((f) => f.endsWith('.json.gz')).sort();
const load = (f) => JSON.parse(zlib.gunzipSync(fs.readFileSync(path.join(dataDir, f))));

group('the page embeds exactly the packed MESA files, byte for byte', () => {
  assert(files.length >= 7);
  for (const f of files) {
    const js = fs.readFileSync(path.join(pageDir, f + '.js'), 'utf8'), m = js.match(/= "([A-Za-z0-9+/=]+)";/);
    assert(m, `${f}: no base64 payload`); assert(Buffer.from(m[1], 'base64').equals(fs.readFileSync(path.join(dataDir, f))), `${f} differs`);
  }
});

group('every moment: L = 4πR²σT⁴ to the four figures MESA’s header is stored with (0.3%)', () => {
  for (const f of files) for (const m of load(f).moments) {
    const h = m.h, L = 4 * Math.PI * (h.photosphere_r * RSUN) ** 2 * SIGMA * h.Teff ** 4 / LSUN;
    assert(Math.abs(L / h.photosphere_L - 1) < 3e-3, `${f} model ${h.model_number}: ${L} vs ${h.photosphere_L}`);
  }
});

group('mass continuity: ∫4πr²ρ dr over the stored zones gives the mass column to 5% (about 200 of MESA’s zones are kept)', () => {
  for (const f of files) for (const m of load(f).moments) {
    const c = m.c, k = c.mass.length, r = c.logR.map((v) => 10 ** v * RSUN), rho = c.logRho.map((v) => 10 ** v * 1e3);
    let dm = 0; for (let i = 1; i < k; i++) dm += 0.5 * (4 * Math.PI * r[i - 1] ** 3 * rho[i - 1] + 4 * Math.PI * r[i] ** 3 * rho[i]) * Math.log(r[i] / r[i - 1]);
    const want = (c.mass[k - 1] - c.mass[0]) * MSUN;
    assert(Math.abs(dm / want - 1) < 0.05, `${f} model ${m.h.model_number}: ${dm / want}`);
    /* stored to four figures, so neighbors can tie */
    for (let i = 1; i < k; i++) { assert(c.mass[i] >= c.mass[i - 1], 'mass never falls outward'); assert(c.logR[i] >= c.logR[i - 1], 'radius never falls outward'); }
  }
});

group('composition: H, He, C, O, Ne and Mg fractions are each in [0, 1] and add to at most 1 (to rounding)', () => {
  for (const f of files) for (const m of load(f).moments) {
    const c = m.c;
    for (let i = 0; i < c.mass.length; i++) {
      let s = 0; for (const el of ['h1', 'he4', 'c12', 'o16', 'ne20', 'mg24']) if (c[el]) { assert(c[el][i] >= 0 && c[el][i] <= 1 + 1e-4); s += c[el][i]; }
      assert(s <= 1 + 3e-4, `${f} zone ${i}: ${s}`);
    }
  }
});

group('core hydrogen runs out after about 10 Gyr (M/M☉)^−2.5: within a factor of two for 1 to 25 M☉', () => {
  for (const [f, M] of [['life_1M.json.gz', 1], ['life_3.7.json.gz', 3.7], ['life_12M.json.gz', 12], ['life_25M.json.gz', 25]]) {
    const end = load(f).moments.find((m) => m.h.center_h1 < 0.01 && m.h.star_age > 1e5); assert(end, f);
    const ratio = end.h.star_age / (1e10 * Math.pow(M, -2.5));
    assert(ratio > 0.5 && ratio < 2.5, `${f}: ${end.h.star_age} yr is ${ratio.toFixed(2)} × the scaling`);
  }
});

console.log(`${n} star slice test groups passed`);
