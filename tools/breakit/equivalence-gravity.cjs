/* Known values for the break-it test (tools/breakit.cjs), equivalence-gravity. Hook: window.__eq (S, rooms(), SUN, RSUN_AS, ...).
   Every state: nothing is NaN, and the sliders show the state. Room: each time to fall is √(2h/a), each scale reads m·a newtons and
   m·a/g kilograms, the tide is w·h/R with R = 6,371.0088 km, g at 3 m up is 9.4 × 10⁻⁷ less. Light: L/c = 10.007 ns, drop ½a(L/c)²,
   tilt aL/c², 4.91 × 10⁻¹⁶ m at g. Eclipse: 1.751″ at the edge (4GM/(c²R☉)), Newton half; the Sun 15.77′ in radius at 1.0139 au.
   Mercury: 0.1035″ an orbit, 42.98″ a century, planets 531.50″, observed − planets 42.60″. */
const pre = `const E = window.__eq; if (!E) return true; const S = E.S;
  const rd = () => { const o = {}; for (const d of document.querySelectorAll('#out > div')) o[d.querySelector('dt').textContent] = d.querySelector('dd').textContent; return o; };
  const SUP = { '⁰': 0, '¹': 1, '²': 2, '³': 3, '⁴': 4, '⁵': 5, '⁶': 6, '⁷': 7, '⁸': 8, '⁹': 9 };
  const num = (t) => { t = String(t).replace(/\\u2212/g, '-').replace(/,/g, ''); const m = t.match(/^\\+?(-?[\\d.]+)(?: × 10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+))?/); if (!m) return NaN; let v = parseFloat(m[1]);
    if (m[2]) { const neg = m[2][0] === '⁻'; let e = 0; for (const c of m[2]) if (c in SUP) e = e * 10 + SUP[c]; v *= Math.pow(10, neg ? -e : e); } return v; };
  const near = (got, want, tol) => Math.abs(got - want) <= tol * Math.max(Math.abs(want), 1e-300);
  const o = rd(), G = 9.81, R = 6.3710088e6, C = 299792458;
  const lenOf = (t) => { const v = num(t); return /km/.test(t) ? v * 1000 : /µm/.test(t) ? v * 1e-6 : /cm/.test(t) ? v / 100 : /mm/.test(t) ? v / 1000 : v; };
`;
module.exports = {
  checks: [
    { name: 'every state: nothing is NaN, the sliders show the state', fn: `(() => { ${pre}
      for (const k in o) if (/NaN|undefined/.test(o[k])) return k + ' shows ' + o[k];
      for (const k of ['aRocket', 'mass', 'h', 'width', 'logA', 'mag', 'gamma', 'logX', 't', 'orbits']) if (!isFinite(S[k])) return k + ' is ' + S[k];
      const t = (id) => document.getElementById(id).textContent;
      if (Math.abs(num(t('oA')) - S.aRocket) > 0.006 || Math.abs(num(t('oMass')) - S.mass) > 0.6 || Math.abs(num(t('oH')) - S.h) > 0.006) return 'a room slider label is stale';
      if (Math.abs(num(t('oGam')) - S.gamma) > 0.006) return 'γ label ' + t('oGam');
      return true; })()` },
    { name: 'room: time to fall √(2h/a), scale m·a (and m·a/g kg), tide w·h/R, g at 3 m up 9.4 × 10⁻⁷ less', fn: `(() => { ${pre}
      if (S.view !== 'room' || o['Room A: ball falls at'] === undefined) return true;
      for (const r of ['A', 'B']) { const a = num(o['Room ' + r + ': ball falls at']), tf = o['Room ' + r + ': time to fall'];
        if (a > 0 && Math.abs(num(tf) - Math.sqrt(2 * S.h / a)) > 0.0006 + 0.001 * Math.sqrt(2 * S.h / a)) return 'room ' + r + ' fall time ' + tf;
        if (a === 0 && !/never/.test(tf)) return 'room ' + r + ' floats but shows ' + tf;
        if (S.blind) continue; const sc = o['Room ' + r + ': scale reads'], kg = parseFloat(sc.split('(')[1]); if (Math.abs(num(sc) - S.mass * a) > 0.6 + 0.005 * S.mass * a || Math.abs(kg - S.mass * a / G) > 0.06 + 5e-4 * S.mass * a / G) return 'room ' + r + ' scale ' + sc; }
      if (!S.blind) { const tc = o['On Earth the two balls end closer by']; if (!S.earthFall && !near(lenOf(tc), S.width * S.h / R, 0.03)) return 'tide ' + tc + ', want ' + S.width * S.h / R;
        if (o['g at the ceiling against the floor (3 m up)'] !== '9.4 × 10⁻⁷ less') return 'g gradient ' + o['g at the ceiling against the floor (3 m up)']; }
      return true; })()` },
    { name: 'light: L/c = 10.007 ns for 3 m; drop ½a(L/c)²; tilt aL/c² = 2 × drop/L; 4.91 × 10⁻¹⁶ m at g', fn: `(() => { ${pre}
      if (S.view !== 'light' || o['Crossing time L/c'] === undefined) return true;
      if (o['Crossing time L/c'] !== '10.007 ns') return 'crossing ' + o['Crossing time L/c']; if (o['Drop at a = g'] !== '4.91 × 10⁻¹⁶ m') return 'drop at g ' + o['Drop at a = g'];
      const a = G * Math.pow(10, S.logA); if (!S.blind) { if (!near(num(o['Drop ½a(L/c)²']), 0.5 * a * (3 / C) ** 2, 3e-3)) return 'drop ' + o['Drop ½a(L/c)²'];
        if (!near(num(o['Tilt at the far wall aL/c²']), a * 3 / C / C, 3e-3)) return 'tilt ' + o['Tilt at the far wall aL/c²']; }
      return true; })()` },
    { name: 'eclipse: 1.751″ at the edge, Newton 0.876″; the Sun 15.77′ at 1.0139 au; nearest star 1.13° and 0.408″', fn: `(() => { ${pre}
      if (S.view !== 'eclipse' || o['Sun\\'s radius on the sky'] === undefined) return true;
      if (o['Sun\\'s radius on the sky'] !== '15.77′ (1.0139 au away)') return 'Sun ' + o['Sun\\'s radius on the sky'];
      if (!S.blind && (o['Einstein at the edge, 4GM/(c²R☉)'] !== '1.751″' || o['Newton at the edge, half'] !== '0.876″')) return 'limb values';
      if (!/^1\\.13° from the center/.test(o['Nearest star on the picture'])) return 'nearest ' + o['Nearest star on the picture'];
      if (!S.blind && o['Its shift (Einstein)'] !== '0.408″') return 'shift ' + o['Its shift (Einstein)'];
      return true; })()` },
    { name: 'Mercury: 0.1035″ an orbit, 42.98″ a century, planets 531.50″, observed − planets 42.60″, 3.02 million years a turn', fn: `(() => { ${pre}
      if (S.view !== 'merc' || o['Observed'] === undefined) return true;
      if (o['All planets (Clemence 1947)'] !== '531.50″' || o['Observed'] !== '574.10 ± 0.65″') return 'tables';
      if (!S.blind) { if (o['Relativity per orbit, 6πGM/(c²a(1−e²))'] !== '0.1035″' || o['Relativity per century'] !== '42.98″' || o['Observed − planets'] !== '42.60″') return 'relativity values';
        if (o['Years for relativity alone to turn it all the way round'] !== '3.02 million') return 'turn ' + o['Years for relativity alone to turn it all the way round']; }
      return true; })()` },
  ],
  steps: [
    { name: 'Every setup, then Play in every view at both speeds, Reset, Swap', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      for (const b of document.querySelectorAll('[data-p]')) { b.click(); await pause(150); }
      for (const v of ['room', 'light', 'eclipse', 'merc']) { document.querySelector('#viewSeg [data-v=' + v + ']').click(); await pause(120);
        for (const s of ['1', '0.25']) { const sb = document.querySelector('#speedSeg [data-s="' + s + '"]'); if (sb && !document.getElementById('speedSeg').hidden) sb.click(); const go = document.getElementById('go'); if (!go.hidden) { go.click(); await pause(700); go.click(); } }
        if (!document.getElementById('restart').hidden) document.getElementById('restart').click(); }
      document.querySelector('#viewSeg [data-v=room]').click(); document.getElementById('swapBtn').click(); await pause(100); document.getElementById('swapBtn').click();
    })()` },
    { name: 'Corners: rocket off and at 2 g, light mass, tall drop, 1 m to 1,000 km rooms, free fall, 10¹⁶ g, every theory and γ, all magnifications, Mercury without planets or relativity, Blind', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      const chk = (id) => { const e = document.getElementById(id); e.checked = !e.checked; e.dispatchEvent(new Event('change', { bubbles: true })); };
      document.querySelector('#viewSeg [data-v=room]').click();
      for (const [a, m, h, w] of [['0', '20', '0.5', '0'], ['20', '120', '2.5', '6'], ['9.81', '70', '1.5', '3']]) { set('sA', a); set('sMass', m); set('sH', h); set('sW', w); await pause(120); }
      chk('fallChk'); document.getElementById('go').click(); await pause(500); document.getElementById('go').click(); chk('fallChk'); chk('outChk'); await pause(80); chk('outChk');
      document.querySelector('#viewSeg [data-v=light]').click(); for (const a of ['0', '16', '8']) { set('sLogA', a); await pause(80); }
      document.querySelector('#viewSeg [data-v=eclipse]').click(); for (const th of ['none', 'newton', 'gr']) { document.querySelector('#theorySeg [data-th=' + th + ']').click(); await pause(80); }
      for (const [g, m] of [['0', '2'], ['1.2', '3.5'], ['1', '2.7']]) { set('sGam', g); set('sMag', m); await pause(80); }
      document.querySelector('#viewSeg [data-v=merc]').click(); chk('plChk'); await pause(80); chk('grChk'); await pause(80); chk('plChk'); chk('grChk'); for (const x of ['3', '7', '5']) { set('sX', x); await pause(80); }
      document.getElementById('labBlind').click(); await pause(100); document.getElementById('labBlind').click();
      document.querySelector('[data-p=same]').click();
    })()` },
  ],
};
