'use strict';
// The Sky and the Celestial Sphere: the calendar, ΔT, Vondrák long term precession, Earth rotation and sidereal time, the Sun
// (Meeus ch. 25) and the Moon (Meeus ch. 47, the coefficients of SOFA moon98), horizon coordinates, eclipses and the
// constellation lookup (Roman 1987), checked against ERFA (pyerfa 2.0) and astropy 8.0.2.
const assert = require('node:assert'), fs = require('node:fs'), path = require('node:path');
const { core } = require('./demo_source.cjs');
const c = core('celestial-sphere', 'jdFromCivil,civilFromJd,deltaT,precFrame,cio,era,sunLon,moonPos,eclDir,raDec,starDir,skyAt,altAz,topo,culminations,moonPhase,eclipses,constellation,angle,dot,cross,norm,J2000');
const root = path.resolve(__dirname, '../..'), D = Math.PI / 180;
require(path.join(root, 'demos/lib/sky-bsc.js')); const SKY = globalThis.VD_SKY;
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const unit = (raDeg, decDeg) => { const a = raDeg * D, d = decDeg * D; return [Math.cos(d) * Math.cos(a), Math.cos(d) * Math.sin(a), Math.sin(d)]; };

/* reference values from pyerfa: ltp (Vondrák et al. 2011), gmst06, moon98 (geocentric, AU) and epv00 (Earth heliocentric, AU),
   at UT1 dates jd and TT dates tt = jd + 69.2 s */
const REF = [{"y":2026,"m":10,"d":25,"h":3.0,"jd":2461338.625,"tt":2461338.625800926,"ltp":[[0.999978630014674,-0.00599604034792711,-0.00260518984387679],[0.00599604043488494,0.999982023557734,-7.77711658278732e-06],[0.00260518964373679,-7.84387325851678e-06,0.999996606456939]],"gmst06":1.37045552035577,"moon":[0.0023734444656948,0.000618168436968291,0.000451732653864313],"earthH":[0.849346364640035,0.474650419922301,0.205743743466259]},{"y":2024,"m":4,"d":8,"h":18.7,"jd":2460409.279166667,"tt":2460409.279967593,"ltp":[[0.999982493490792,-0.00542702381229443,-0.00235799161956672],[0.00542702388369148,0.999985273577172,-6.36821566924527e-06],[0.00235799145524319,-6.42877265291395e-06,0.999997219913619]],"gmst06":2.05973358431631,"moon":[0.00227037808897569,0.000722604022416995,0.000330148621821263],"earthH":[-0.946474749046899,-0.300422380961224,-0.130223237611184]},{"y":2025,"m":3,"d":14,"h":6.98,"jd":2460748.790833334,"tt":2460748.791634259,"ltp":[[0.999981126699188,-0.00563489803986336,-0.00244829930799052],[0.00563489811677325,0.999984123812005,-6.86661007678542e-06],[0.0024482991309781,-6.92943667870513e-06,0.999997002887183]],"gmst06":4.83199329535497,"moon":[-0.00266727821556572,0.000267502248314953,0.000132090759076704],"earthH":[-0.987996370263206,0.101700354543843,0.0440916496324775]},{"y":1950,"m":1,"d":1,"h":0,"jd":2433282.5,"tt":2433282.500800926,"ltp":[[0.999925717361321,0.0111782293188971,0.00485869825596032],[-0.0111782290218956,0.999937521275763,-2.72179573532652e-05],[-0.00485869893926072,-2.70957063218355e-05,0.999988196085554]],"gmst06":1.74665099984227,"moon":[0.00124637698243305,0.00209134437664609,0.0010990449409584],"earthH":[-0.182730891794374,0.886349838406538,0.384397426865073]},{"y":2100,"m":6,"d":21,"h":12,"jd":2488241.0,"tt":2488241.000800926,"ltp":[[0.999699893699909,-0.0224696300055955,-0.00975900936577475],[0.0224696310435656,0.999747519966614,-0.000109550764095181],[0.00975900697590032,-0.000109763452578963,0.999952373733284]],"gmst06":1.56689881234586,"moon":[-0.000365579535782357,-0.00213194141584154,-0.00115298816226678],"earthH":[-0.0202858488807436,-0.932169330966586,-0.403886925608824]},{"y":1000,"m":3,"d":1,"h":0,"jd":2086361.5,"tt":2086361.500800926,"ltp":[[0.970566397901621,0.220698397549913,0.0964006461761148],[-0.220700076476476,0.975282155644063,-0.0107792915141431],[-0.0963968023720166,-0.0108136118466368,0.995284241958688]]},{"y":-2599,"m":6,"d":1,"h":0,"jd":771945.5,"tt":771945.500800926,"ltp":[[0.444357325425776,0.818270530764563,0.364664099991666],[-0.818968365735913,0.536028707330193,-0.204851265170049],[-0.363094179606749,-0.207621201711684,0.908325962050793]]},{"y":14000,"m":1,"d":1,"h":0,"jd":6834454.5,"tt":6834454.500800926,"ltp":[[-0.987209632615973,-0.152003187094243,-0.048085053638619],[0.141478254495726,-0.696232102058204,-0.703736288369768],[0.0734918007336809,-0.701538232156172,0.708832183276207]]}];

group('calendar: Julian dates of the proleptic Gregorian calendar (year 0 = 1 BC) and back', () => {
  near(c.jdFromCivil(2000, 1, 1, 12), 2451545, 1e-9, 'J2000'); near(c.jdFromCivil(1858, 11, 17, 0), 2400000.5, 1e-9, 'MJD 0');
  near(c.jdFromCivil(-4713, 11, 24, 12), 0, 1e-9, 'JD 0 (4714 BC, Gregorian)');
  for (const r of REF) { near(c.jdFromCivil(r.y, r.m, r.d, r.h), r.jd, 1e-8, `${r.y}-${r.m}-${r.d}`); const b = c.civilFromJd(r.jd); assert.deepEqual([b.y, b.m, b.d], [r.y, r.m, r.d]); near(b.h, r.h, 1e-6, 'hour'); }
});
group('ΔT: Espenak and Meeus (2006) within a few seconds of Stephenson, Morrison and Hohenkerk (2016) for 1900 to 2025, and the right size in antiquity', () => {
  const SMH = [[1900, -1.977], [1950, 28.932], [1990, 56.855], [2000, 63.829], [2010, 66.070], [2020, 69.361]];
  for (const [y, v] of SMH) near(c.deltaT(y), v, 6, `ΔT ${y}`);
  near(c.deltaT(-500), 17190, 300, 'ΔT 500 BC (E&M table 17190 s)'); near(c.deltaT(1000), 1574, 30, 'ΔT 1000 (E&M table 1574 s)');
});
group('precession: the Vondrák long term matrix equals ERFA ltp from 2600 BC to AD 14000; the obliquity is 23.4393° at J2000', () => {
  for (const r of REF) { const ep = 2000 + (r.jd - 2451545) / 365.25, P = c.precFrame(ep), M = [P.g, P.e, P.n]; let mx = 0;
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) mx = Math.max(mx, Math.abs(M[i][j] - r.ltp[i][j])); assert(mx < 1e-12, `ltp ${r.y}: ${mx}`); }
  near(c.precFrame(2000).eps / D, 23.43928, 1e-4, 'ε J2000');
});
group('sidereal time: Greenwich mean sidereal time within 0.05″ of ERFA gmst06 (IAU 2006) for 1950 to 2100', () => {
  for (const r of REF) { if (r.gmst06 == null) continue; const T = (r.tt - 2451545) / 36525, ep = 2000 + T * 100, P = c.precFrame(ep), s = c.cio(ep, P.n), th = c.era(r.jd), ne = c.cross(P.n, s);
    const tio = [0, 1, 2].map((i) => Math.cos(th) * s[i] + Math.sin(th) * ne[i]); let g = Math.atan2(c.dot(tio, P.e), c.dot(tio, P.g)); g = (g + 2 * Math.PI) % (2 * Math.PI);
    let d = (g - r.gmst06) / D * 3600; d -= 1296000 * Math.round(d / 1296000); near(d, 0, 0.05, `GMST ${r.y}`); }
});
group('Sun and Moon: the Moon equals moon98 to 0.1″ and 0.1 km; the Sun is within 30″ and 5 × 10⁻⁵ AU of epv00 (the demo includes the 20.5″ aberration)', () => {
  for (const r of REF) { if (!r.moon) continue; const T = (r.tt - 2451545) / 36525, P = c.precFrame(2000 + T * 100);
    const m = c.moonPos(T), mu = c.eclDir(P, m.lon, m.lat); near(c.angle(mu, c.norm(r.moon)) / D * 3600, 0, 0.1, `Moon ${r.y}`); near(m.km, Math.hypot(...r.moon) * 149597870.7, 0.1, 'Moon km');
    const s = c.sunLon(T), su = c.eclDir(P, s.lon, 0); near(c.angle(su, c.norm(r.earthH.map((x) => -x))) / D * 3600, 0, 30, `Sun ${r.y}`); near(s.R, Math.hypot(...r.earthH), 5e-5, 'Sun R (Meeus low accuracy, 0.005 %)'); }
});
group('the sky from Ruston: the north celestial pole stands at the latitude; Polaris circles it 0.63° away; a star crosses the meridian at 90° − |φ − δ|', () => {
  const S = c.skyAt(c.jdFromCivil(2026, 1, 16, 2), 32.52, -92.64), pole = c.altAz(S, S.P.n);
  near(pole.alt, 32.52, 1e-9, 'pole altitude'); near(Math.min(pole.az, 360 - pole.az), 0, 1e-6, 'due north');
  const pol = c.starDir(37.95456, 89.26411, 0.044, -0.012, S.ep); near(c.angle(pol, S.P.n) / D, 0.63, 0.01, 'Polaris from the pole');
  near(c.culminations(-16.7, 32.52).hi, 40.78, 1e-9, 'Sirius highest'); near(c.culminations(89.3, 32.52).lo, 31.82, 1e-9, 'Polaris lowest');
  const z = c.skyAt(c.jdFromCivil(2026, 6, 21, 0), 0, 0); near(c.altAz(z, z.P.n).alt, 0, 1e-9, 'equator: pole on the horizon');
});
group('solar eclipse of April 8, 2024 from Dallas: total from 18:40:43 to 18:44:35 UT (NASA, Espenak); the demo gives 18:41:05 to 18:45:10, within 40 s', () => {
  const at = (h) => c.eclipses(c.skyAt(c.jdFromCivil(2024, 4, 8, h), 32.7767, -96.797));
  const hms = (m, s) => 18 + m / 60 + s / 3600;
  assert.equal(at(hms(41, 0)).solar, 'partial'); assert.equal(at(hms(41, 10)).solar, 'total'); assert.equal(at(hms(45, 5)).solar, 'total'); assert.equal(at(hms(45, 15)).solar, 'partial');
  assert.equal(at(17.2).solar, 'none'); assert.equal(at(17.5).solar, 'partial'); near(at(18 + 25 / 60).cover, 0.8, 0.03, 'covered at 18:25');
});
group('lunar eclipse of March 14, 2025: penumbra from 03:57 UT, total from 06:26 to 07:31 UT (NASA, Espenak) within 3 minutes', () => {
  const at = (h) => c.eclipses(c.skyAt(c.jdFromCivil(2025, 3, 14, h), 32.52, -92.64)).lunar;
  assert.equal(at(3.9), 'none'); assert.equal(at(4.05), 'penumbral'); assert.equal(at(6.38), 'partial'); assert.equal(at(6.5), 'total');
  assert.equal(at(7.47), 'total'); assert.equal(at(7.57), 'partial');
  const S = c.skyAt(c.jdFromCivil(2025, 3, 14, 7), 32.52, -92.64); near(c.moonPhase(S).lit, 1, 1e-3, 'full');
});
group('pole stars: Thuban about 1° from the pole in 2600 BC (Polaris over 25° away); Vega within 7° in AD 14000', () => {
  const pole = (y) => c.precFrame(y).n, star = (hr) => { const i = SKY.hr.indexOf(hr), s = SKY.stars; return (ep) => c.starDir(s[6 * i] / 1e5, s[6 * i + 1] / 1e5, s[6 * i + 4], s[6 * i + 5], ep); };
  const thuban = star(5291), polaris = star(424), vega = star(7001);
  near(c.angle(thuban(-2599), pole(-2599)) / D, 1.1, 0.3, 'Thuban'); assert(c.angle(polaris(-2599), pole(-2599)) / D > 25, 'Polaris far');
  assert(c.angle(vega(14000), pole(14000)) / D < 7, 'Vega');
});
group('constellations: Roman (1987) boundary lookup agrees with astropy get_constellation for every catalog star but one', () => {
  const lines = fs.readFileSync(path.join(root, 'tools/sky-data/bsc5-v55.csv'), 'utf8').trim().split('\n').slice(1);
  const want = fs.readFileSync(path.join(root, 'tools/sky-data/astropy-constellations.txt'), 'utf8').trim().split(' ');
  assert.equal(lines.length, want.length); const off = [];
  lines.forEach((l, i) => { const f = l.split(','), got = c.constellation(unit(+f[2], +f[3]), SKY); if (got !== want[i]) off.push(`HR ${f[0]} ${got}/${want[i]}`); });
  /* HR 1533 sits 8″ inside the Perseus edge of the Auriga boundary; astropy adds the annual aberration (up to 20″), Roman's mean positions do not */
  assert.deepEqual(off, ['HR 1533 Per/Aur']);
});
group('catalog: 2,887 stars to V 5.5 from the Yale Bright Star Catalogue, brightest first; Sirius first', () => {
  assert.equal(SKY.n, 2887); assert.equal(SKY.stars.length, 6 * 2887); assert.equal(SKY.names[0], 'Sirius');
  for (let i = 1; i < SKY.n; i++) assert(SKY.stars[6 * i + 2] >= SKY.stars[6 * i - 4], 'sorted by V');
});
console.log(`${n} groups passed`);
