/* Known values for the break-it test (tools/breakit.cjs), rainbows. Hook: window.__rb (S, ...). The physics is recomputed here
   from the water formula (Sellmeier, Daimon and Masumura 2007) and Snell's law, independent of the demo's core:
   Drop view: i and r obey sin i = n sin r; D = 2(i - r) + k(180 - 2r); the least deviation sits where dD/db = 0 and equals Descartes'
   cos^2 i = (n^2 - 1)/(k^2 + 2k); the bow angle is 180 - acos(cos D) at that ray (k = 3 shown from the Sun); the share of light on the
   ray is the average of (1-R)^2 R^k over the two polarizations; the cited setups (bow ray 137.97 and 42.03 deg, white light red 42.4 and
   violet 40.6, secondary 51 deg, third order 138.4 deg) hold. Sky view: the bow radii are the least deviation angles of 400, 589 and
   700 nm, the top of a bow stands (radius - Sun elevation) above the horizon, the dark band is red to red. */
const pre = `const R = window.__rb; if (!R) return true; const S = R.S, DEG = Math.PI / 180;
  const rd = (label) => { for (const d of document.querySelectorAll('#out dt')) if (d.textContent.indexOf(label) === 0) return d.nextElementSibling.textContent.replace(/\\u2212/g, '-'); return null; };
  const B = [5.684027565e-1, 1.726177391e-1, 2.086189578e-2, 1.130748688e-1], C = [5.101829712e-3, 1.821153936e-2, 2.620722293e-2, 1.069792721e1];
  const nOf = (nm) => { const L = (nm / 1000) ** 2; let s = 1; for (let j = 0; j < 4; j++) s += B[j] * L / (L - C[j]); return Math.sqrt(s); };
  const ang = (b, n) => { const i = Math.asin(Math.min(1, Math.abs(b))); return [i, Math.asin(Math.sin(i) / n)]; };
  const dev = (b, n, k) => { const [i, r] = ang(b, n); return 2 * (i - r) + k * (Math.PI - 2 * r); };
  const sky = (D) => 180 - Math.acos(Math.cos(D)) / DEG;
  /* the least deviation by Descartes, and checked as a stationary point of D(b) */
  const bow = (n, k) => { const i = Math.acos(Math.sqrt((n * n - 1) / (k * k + 2 * k))), b = Math.sin(i); return { i, b, D: dev(b, n, k), th: sky(dev(b, n, k)) }; };
  const shares = (b, n, k) => { const i = ang(b, n)[0], r = Math.asin(Math.sin(i) / n), ci = Math.cos(i), cr = Math.cos(r), rs = ((ci - n * cr) / (ci + n * cr)) ** 2, rp = ((n * ci - cr) / (n * ci + cr)) ** 2;
    const f = (x) => k < 0 ? x : (1 - x) ** 2 * x ** k; return [f(rs), f(rp)]; };
`;
module.exports = {
  checks: [
    { name: "drop: i, r, D and the share of light follow Snell's law, D = 2(i-r) + k(180-2r) and the Fresnel equations", fn: `(() => { ${pre}
      if (S.view !== 'drop' || !isFinite(S.b)) return true;
      const lam = S.white ? 589 : S.lam, n = nOf(lam), b = S.b, k = S.k, [i, r] = ang(b, n);
      if (!/n = /.test(rd(S.white ? 'Numbers for' : 'Wavelength'))) return 'no n readout';
      if (Math.abs(parseFloat(rd(S.white ? 'Numbers for' : 'Wavelength').split('n = ')[1]) - n) > 6e-5) return 'n shows ' + rd('Wavelength') + ', Sellmeier ' + n;
      const ir = rd('Incidence').split(',').map(parseFloat);
      if (Math.abs(ir[0] - i / DEG) > 0.0051 || Math.abs(ir[1] - r / DEG) > 0.0051) return 'i, r show ' + rd('Incidence') + ', physics ' + (i / DEG).toFixed(3) + ', ' + (r / DEG).toFixed(3);
      if (Math.abs(Math.sin(i) - n * Math.sin(r)) > 1e-12) return 'Snell';
      const D = dev(b, n, k) / DEG; if (Math.abs(parseFloat(rd('Deviation D')) - D) > 0.0051) return 'D shows ' + rd('Deviation D') + ', physics ' + D.toFixed(3);
      const th = sky(dev(b, n, k)), want = k >= 3 ? 180 - th : th, got = parseFloat(rd('Leaves at'));
      if (Math.abs(got - want) > 0.0051) return 'leaves at ' + rd('Leaves at') + ', physics ' + want.toFixed(3);
      const [ss, sp] = shares(b, n, k), m = rd('Light on this ray').match(/^([\\d.]+)% \\(([\\d.]+)%, ([\\d.]+)%\\)$/);
      if (!m) return 'odd share text ' + rd('Light on this ray');
      if (Math.abs(+m[1] - 50 * (ss + sp) * 1) > 0.0051 * 1 || Math.abs(+m[2] - 100 * ss) > 0.0051 || Math.abs(+m[3] - 100 * sp) > 0.00051) return 'share shows ' + rd('Light on this ray') + ', physics ' + (50 * (ss + sp)).toFixed(3) + '% (' + (100 * ss).toFixed(3) + '%, ' + (100 * sp).toFixed(4) + '%)';
      if (!(ss >= 0 && ss <= 1 && sp >= 0 && sp <= 1)) return 'a share outside 0..1';
      return true; })()` },
    { name: "drop: the least deviation is a stationary point of D(b) at Descartes' angle, and the Bow readout is its sky angle", fn: `(() => { ${pre}
      if (S.view !== 'drop' || S.blind) return true;
      const lam = S.white ? 589 : S.lam, n = nOf(lam), k = S.k, bw = bow(n, k), h = 1e-5;
      const dD = (dev(Math.min(1, bw.b + h), n, k) - dev(bw.b - h, n, k)) / (2 * h);
      if (Math.abs(dD) > 1e-6) return 'D is not stationary at the Descartes ray: dD/db = ' + dD;
      const ir = rd('Least deviation at'); if (ir === null) return true;
      if (Math.abs(parseFloat(ir.replace('i = ', '')) - bw.i / DEG) > 0.0051) return 'least deviation incidence shows ' + ir + ', physics ' + (bw.i / DEG).toFixed(3);
      if (Math.abs(parseFloat(ir.split('b = ')[1]) - bw.b) > 0.00051) return 'least deviation b shows ' + ir + ', physics ' + bw.b.toFixed(4);
      if (Math.abs(parseFloat(rd('Least deviation D')) - bw.D / DEG) > 0.0051) return 'least D shows ' + rd('Least deviation D') + ', physics ' + (bw.D / DEG).toFixed(3);
      const want = k >= 3 ? 180 - bw.th : bw.th; if (Math.abs(parseFloat(rd(k >= 3 ? 'Bow, from the Sun' : 'Bow at')) - want) > 0.0051) return 'bow shows ' + rd('Bow') + ', physics ' + want.toFixed(3);
      for (const bb of [bw.b - 0.01, bw.b + 0.01]) if (k === 1 && dev(bb, n, k) < bw.D - 1e-12) return 'D lower than the least deviation at b = ' + bb;
      if (S.white) { const m = rd('Bow: 400 nm').split(',').map(parseFloat), a = bow(nOf(400), k).th, c = bow(nOf(700), k).th, f = (v) => (k >= 3 ? 180 - v : v);
        if (Math.abs(m[0] - f(a)) > 0.0051 || Math.abs(m[1] - f(c)) > 0.0051) return 'colored bows show ' + rd('Bow: 400 nm') + ', physics ' + f(a).toFixed(3) + ', ' + f(c).toFixed(3); }
      return true; })()` },
    { name: "cited setups: bow ray 137.97 and 42.03 deg, white light red 42.4 and violet 40.6, secondary 51 deg (53.6 and 50.2), third order 138.4", fn: `(() => { ${pre}
      const p = S.preset, ok = (v, w, t, what) => Math.abs(v - w) <= t ? null : what + ' is ' + v.toFixed(3) + ', cited ' + w;
      let m = null;
      if (Math.abs(nOf(400) - 1.3436) > 5e-5 || Math.abs(nOf(700) - 1.3305) > 5e-5) m = 'n at 400 and 700 nm: ' + nOf(400) + ', ' + nOf(700);
      if (p === 'bowray') { const b = bow(nOf(589), 1); m = m || ok(b.D / DEG, 137.97, 0.01, 'least deviation at 589 nm') || ok(b.th, 42.03, 0.01, 'bow angle') || ok(b.b, 0.861, 5e-4, 'b') || ok(b.i / DEG, 59.4, 0.05, 'i'); }
      if (p === 'white') m = m || ok(bow(nOf(700), 1).th, 42.4, 0.05, 'red bow') || ok(bow(nOf(400), 1).th, 40.6, 0.05, 'violet bow');
      if (p === 'second') m = m || ok(bow(nOf(589), 2).th, 51, 0.5, 'secondary bow') || ok(bow(nOf(400), 2).th, 53.6, 0.05, 'violet secondary') || ok(bow(nOf(700), 2).th, 50.2, 0.05, 'red secondary') || ok(bow(nOf(589), 2).D / DEG, 231, 0.6, 'secondary D');
      if (p === 'third') m = m || ok(180 - bow(nOf(589), 3).th, 41.6, 0.1, 'third order from the Sun') || ok(bow(nOf(589), 3).th, 138.4, 0.1, 'third order bow') || ok(bow(nOf(589), 3).D / DEG, 318, 0.6, 'third D');
      return m || true; })()` },
    { name: "sky: bow radii are the least deviation angles, tops stand (radius - Sun elevation) up, the dark band runs red to red", fn: `(() => { ${pre}
      if (S.view !== 'sky' || S.blind) return true;
      const t = (nm, k) => bow(nOf(nm), k).th, h = S.h, p1 = [t(400, 1), t(589, 1), t(700, 1)], p2 = [t(700, 2), t(400, 2)];
      const g = (s) => s.match(/-?[\\d.]+/g).map(parseFloat);
      const a = g(rd('Primary bow radius')), b = g(rd('Secondary bow radius')), band = g(rd('Dark band'));
      if (Math.abs(a[0] - p1[0]) > 0.0051 || Math.abs(a[1] - p1[2]) > 0.0051) return 'primary radius ' + rd('Primary bow radius') + ', physics ' + p1[0].toFixed(3) + ' to ' + p1[2].toFixed(3);
      if (Math.abs(b[0] - p2[0]) > 0.0051 || Math.abs(b[1] - p2[1]) > 0.0051) return 'secondary radius ' + rd('Secondary bow radius') + ', physics ' + p2[0].toFixed(3) + ' to ' + p2[1].toFixed(3);
      if (Math.abs(band[2] - (p2[0] - p1[2])) > 0.0101) return 'dark band ' + rd('Dark band') + ', physics width ' + (p2[0] - p1[2]).toFixed(3);
      const t1 = p1[1] - h, tx = rd('Top of the primary'), t2 = t(589, 2) - h, ty = rd('Top of the secondary');
      if (t1 > 0 ? Math.abs(parseFloat(tx) - t1) > 0.0051 : !/below/.test(tx)) return 'top of the primary shows ' + tx + ', physics ' + t1.toFixed(3);
      if (t2 > 0 ? Math.abs(parseFloat(ty) - t2) > 0.0051 : !/below/.test(ty)) return 'top of the secondary shows ' + ty + ', physics ' + t2.toFixed(3);
      if (Math.abs(parseFloat(rd('Sun above')) - h) > 0.051) return 'Sun above the horizon shows ' + rd('Sun above');
      return true; })()` },
  ],
  steps: [
    { name: 'Sweep the ray to the edge and past, all reflection counts, white light, many rays, the lost rays; b slider to both ends', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); e.dispatchEvent(new Event('change', { bubbles: true })); };
      document.querySelector('#presets [data-p=one]').click(); await pause(200);
      for (const k of ['3', '2', '1']) { const b = document.querySelector('#kSeg [data-k="' + k + '"]'); if (b) { b.click(); await pause(200); } }
      for (const c of ['cWhite', 'cMany', 'cLost']) { document.getElementById(c).click(); await pause(150); }
      for (const v of ['0', '1', '0.999', '0.5', '0.861']) { set('sB', v); await pause(150); }
      for (const v of ['380', '700', '589']) { set('sL', v); await pause(150); }
      document.getElementById('play').click(); await pause(2500); document.getElementById('play').click(); await pause(200);
      for (const c of ['cWhite', 'cMany', 'cLost']) { document.getElementById(c).click(); await pause(100); }
      document.querySelector('#presets [data-p=one]').click(); await pause(200);
    })()` },
    { name: 'Sky: Sun from 0 to 90 degrees, Lower the sun to the horizon and past, 3D walk to the ends, every setup', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); e.dispatchEvent(new Event('change', { bubbles: true })); };
      for (const p of ['evening', 'sunset', 'high', 'band', 'cone']) { document.querySelector('#presets [data-p=' + p + ']').click(); await pause(400); }
      for (const v of ['0', '90', '41.9', '42.1', '10']) { set('sH', v); await pause(200); }
      for (const v of ['-50', '50', '0']) { const w = document.getElementById('sW'); if (w && w.offsetParent) { set('sW', v); await pause(200); } }
      document.querySelector('#presets [data-p=band]').click(); await pause(300);
      document.getElementById('play').click(); await pause(3000); document.getElementById('play').click(); await pause(200);
      document.querySelector('#presets [data-p=one]').click(); await pause(300);
    })()` },
  ],
};
