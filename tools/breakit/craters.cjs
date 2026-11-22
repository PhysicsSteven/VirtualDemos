/* Known values for the break-it test (tools/breakit.cjs), craters. Hook: window.__cr (S, crater, density, ageFrom, at, trueCount, PRESETS).
   Impact: the readouts equal the Collins, Melosh and Marcus law recomputed here from the live settings (D_tc, D, depth, form, mass, energy,
   D ÷ L), and the shape follows the transition diameters (3.2 km on Earth, scaled by 1/g). A finished impact is never smaller than D_tc.
   Presets: the cited sizes (Meteor Crater 1.2 km, Tycho 85, Copernicus 93, Chicxulub 180, Mead 270, Caloris 1550, Hellas 2300 km) within 10 %.
   Count: the density readout is marked ÷ area, the age readout inverts the Neukum or Ivanov clock, the right count equals an independent count.
   Count zoom: the wheel zooms about the middle of the view, never the pointer, from 1x to 6x; a click on a crater marks it at any zoom and pan.
   Cooling: every table row equals the model rows at the clock time; the lid is k ΔT / q; the clock row at t = 4.5 Gyr is the last row. */
const pre = `const C = window.__cr; if (!C) return true; const S = C.S;
  const num = (s) => parseFloat(String(s).replace(/\\u2212/g, '-').replace(/,/g, ''));
  const near = (a, b, t) => Math.abs(a - b) <= t * Math.max(Math.abs(b), 1e-12);
  const out = {}; for (const d of document.querySelectorAll('#out dt')) out[d.textContent.replace(/\\s+/g, ' ').trim()] = d.nextElementSibling.textContent.trim();
  const kmv = (t) => { const m = String(t).match(/^([\\d.,]+) (km|m)$/); return m ? num(m[1]) * (m[2] === 'km' ? 1000 : 1) : NaN; };
`;
module.exports = {
  checks: [
    { name: "impact readouts equal the scaling law recomputed from the live settings", fn: `(() => { ${pre}
      if (S.mode !== 'impact' || S.anim < 1 || S.blind) return true;
      const B = { moon: [1.62, 2550], mercury: [3.70, 2700], venus: [8.87, 2700], earth: [9.81, 2700], mars: [3.71, 2700] }[S.body], g = B[0], rt = B[1];
      const Dtc = 1.161 * Math.cbrt(S.rho / rt) * Math.pow(S.L, 0.78) * Math.pow(S.v * 1000, 0.44) * Math.pow(g, -0.22) * Math.cbrt(Math.sin(S.th * Math.PI / 180));
      const Dc = 3200 * 9.81 / g, simple = 1.25 * Dtc <= Dc, D = simple ? 1.25 * Dtc : 1.17 * Math.pow(Dtc, 1.13) / Math.pow(Dc, 0.13);
      const want = { form: simple ? 'simple bowl' : D >= 200e3 * 1.62 / g ? 'basin with a ring of peaks' : 'complex: flat floor, terraces, central peak' };
      const rD = kmv(out['Final crater D']), rT = kmv(out['Transient crater Dtc']);
      if (!near(rD, D, 8e-3)) return 'Final crater D shows ' + out['Final crater D'] + ', law gives ' + D + ' m';
      if (!near(rT, Dtc, 8e-3)) return 'Dtc shows ' + out['Transient crater Dtc'] + ', law gives ' + Dtc + ' m';
      if (out['Shape'] !== want.form) return 'Shape "' + out['Shape'] + '" but D = ' + D + ' m, Dc = ' + Dc + ' m gives "' + want.form + '"';
      if (Math.abs(num(out['D ÷ L']) - D / S.L) > 0.06 + 1e-3 * D / S.L) return 'D ÷ L shows ' + out['D ÷ L'] + ', D/L = ' + D / S.L;
      const m = S.rho * Math.PI * S.L ** 3 / 6, E = 0.5 * m * (S.v * 1000) ** 2, Mt = E / 4.184e15;
      const mm = out['Energy'].match(/= ([\\d.]+)( × 10\\^?(−?\\d+))? Mt/);
      if (mm) { const got = parseFloat(mm[1]) * Math.pow(10, mm[3] ? num(mm[3]) : 0); if (!near(got, Mt, 6e-3)) return 'Energy shows ' + out['Energy'] + ', E = ' + Mt + ' Mt'; }
      if (!(D >= Dtc)) return 'final crater D ' + D + ' smaller than the transient crater ' + Dtc;
      return true; })()` },
    { name: "impact: the crater() in the page agrees with a window recompute and has a positive depth and rim", fn: `(() => { ${pre}
      if (S.mode !== 'impact') return true;
      const c = C.crater(S.L, S.v * 1000, S.rho, S.body, S.th);
      if (!(c.D > 0 && isFinite(c.D) && c.d > 0 && isFinite(c.d) && c.h >= 0 && isFinite(c.h))) return 'bad crater ' + JSON.stringify({ D: c.D, d: c.d, h: c.h });
      if (c.d > c.D) return 'depth ' + c.d + ' exceeds the width ' + c.D;
      return true; })()` },
    { name: "impact presets show the cited crater sizes (within 10 %) and the right shape", fn: `(() => { ${pre}
      if (S.mode !== 'impact' || S.anim < 1) return true;
      const want = { small: [null, 'simple'], meteor: [1200, 'simple'], tycho: [85e3, 'complex'], copernicus: [93e3, 'complex'], chicxulub: [180e3, 'ring'], mead: [270e3, 'ring'], caloris: [1550e3, 'ring'], hellas: [2300e3, 'ring'] }[S.preset];
      const P = C.PRESETS[S.preset]; if (!want || !P || P.body !== S.body || P.L !== S.L || P.v !== S.v || P.th !== S.th || P.rho !== S.rho) return true;
      const c = C.crater(S.L, S.v * 1000, S.rho, S.body, S.th);
      if (want[0] && Math.abs(c.D - want[0]) > 0.10 * want[0]) return S.preset + ': D = ' + c.D + ' m, cited ' + want[0];
      if (c.form !== want[1]) return S.preset + ': form ' + c.form + ', expected ' + want[1];
      return true; })()` },
    { name: "count: per km², age and the right count agree with the clock and an independent count", fn: `(() => { ${pre}
      if (S.mode !== 'count' || !S.surf) return true;
      const n = S.marks.size, A = S.surf.L * S.surf.L;
      if (n && !S.blind) {
        const dens = n / A, a = C.ageFrom(S.cBody, S.Dc, dens);
        if (a != null) { if (!near(C.density(S.cBody, S.Dc, a), dens, 1e-6)) return 'clock inversion: density(age) = ' + C.density(S.cBody, S.Dc, a) + ', count density ' + dens;
          const shown = num(out['Age from your count']); if (Math.abs(shown - a) > 0.006) return 'Age from your count shows ' + out['Age from your count'] + ', clock gives ' + a; }
        else if (!/older than 4.5/.test(out['Age from your count'])) return 'age is null but the readout says ' + out['Age from your count'];
        if (num(out['Craters you marked']) !== n) return 'marked readout ' + out['Craters you marked'] + ' vs ' + n;
      }
      let t = 0; for (const c of S.surf.list) if (!c.gone && c.D >= S.Dc && c.x >= 0 && c.x < S.surf.L && c.y >= 0 && c.y < S.surf.L) t++;
      if (t !== C.trueCount()) return 'trueCount ' + C.trueCount() + ' vs independent ' + t;
      if (S.show && !S.blind && num(out['Right count']) !== t) return 'Right count shows ' + out['Right count'] + ', should be ' + t;
      if (!S.blind && S.surf.T > 0 && !(S.sKey === 'mystery' && !S.show)) { const sa = num(out['Set age of this surface']); if (Math.abs(sa - S.surf.T) > 0.006) return 'Set age shows ' + out['Set age of this surface'] + ', surface T = ' + S.surf.T; }
      return true; })()` },
    { name: "cooling: table rows equal the model at the clock time, lid = kΔT/q, and heat out is never negative", fn: `(() => { ${pre}
      if (S.mode !== 'cool') return true;
      const rows = [...document.querySelectorAll('#out .cooltab tbody tr')]; if (rows.length !== 3) return 'cooling table has ' + rows.length + ' rows';
      const ks = ['moon', 'mars', 'earth'], Ts = { moon: 250, mars: 210, earth: 288 };
      for (let i = 0; i < 3; i++) { const r = C.at(ks[i], S.t), td = [...rows[i].querySelectorAll('td')].map((x) => num(x.textContent));
        if (!isFinite(r.T) || r.T < Ts[ks[i]] || r.q < 0 || r.lid <= 0) return ks[i] + ' bad row ' + JSON.stringify(r);
        if (td[2] !== Math.round(r.T)) return ks[i] + ' inside K shows ' + td[2] + ', model ' + r.T;
        if (Math.abs(td[3] - r.q * 1000) > 0.06) return ks[i] + ' heat flow shows ' + td[3] + ', model ' + r.q * 1000;
        if (td[4] !== Math.round(r.lid / 1000)) return ks[i] + ' lid shows ' + td[4] + ', model ' + r.lid / 1000;
        if (!near(r.lid, 4 * (r.T - Ts[ks[i]]) / r.q, 1e-9)) return ks[i] + ' lid != kΔT/q'; }
      if (num(out['Time since the planets formed']) !== Math.round(S.t * 100) / 100 && Math.abs(num(out['Time since the planets formed']) - S.t) > 0.006) return 'clock shows ' + out['Time since the planets formed'] + ', t = ' + S.t;
      return true; })()` },
    { name: "after a mode switch the picture state is consistent: the Play label matches S.run and an impact is never stuck mid fall", fn: `(() => { ${pre}
      const p = document.getElementById('play').textContent;
      if (S.mode === 'impact' && !S.run && S.anim < 1) return 'impact stuck at anim ' + S.anim + ' with the clock stopped (Play says "' + p + '")';
      if (S.mode === 'impact' && S.run && !/Falling/.test(p)) return 'running but Play says ' + p;
      if (S.mode === 'impact' && !S.run && /Falling/.test(p)) return 'not running but Play says ' + p;
      return true; })()` },
  ],
  steps: [
    { name: 'mid fall: switch mode and back, change the target, then Drop again', fn: `(async () => {
      const C = window.__cr, pause = (ms) => new Promise((r) => setTimeout(r, ms)), q = (s) => document.querySelector(s);
      q('#presets [data-p=tycho]').click(); await pause(100); q('#play').click(); await pause(300);
      const b = q('#selBody'); b.value = 'venus'; b.dispatchEvent(new Event('change', { bubbles: true })); await pause(300);
      q('#play').click(); await pause(1500); q('#presets [data-p=tycho]').click(); await pause(100); q('#play').click(); await pause(300);
      q('#modeSeg [data-mode=cool]').click(); await pause(200); q('#modeSeg [data-mode=impact]').click(); await pause(1500);   /* left stuck mid fall: the probe after the step sees it */
    })()` },
    { name: 'extremes: smallest and largest asteroid on every body and rock, then a mixed preset', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), q = (s) => document.querySelector(s);
      q('#presets [data-p=small]').click(); await pause(100);
      const set = (id, v, ev) => { const e = q(id); e.value = v; e.dispatchEvent(new Event(ev || 'input', { bubbles: true })); };
      for (const b of ['moon', 'mercury', 'venus', 'earth', 'mars']) for (const r of ['1000', '8000']) for (const L of ['0', '1000']) for (const th of ['1', '90']) {
        set('#selBody', b, 'change'); set('#selRock', r, 'change'); set('#sL', L); set('#sTh', th); set('#sV', '72'); await pause(15); }
      set('#sV', '1'); set('#sL', '0'); set('#sTh', '1'); await pause(100); q('#play').click(); await pause(600); q('#presets [data-p=hellas]').click(); await pause(200);
    })()` },
    { name: 'count and cooling: mark every crater, change the size cut, new surfaces, run the clock to the end and run again', fn: `(async () => {
      const C = window.__cr, pause = (ms) => new Promise((r) => setTimeout(r, ms)), q = (s) => document.querySelector(s);
      q('#presets [data-p=highlands]').click(); await pause(300); C.markAll(); await pause(100);
      const d = q('#selDc'); for (const o of [...d.options]) { d.value = o.value; d.dispatchEvent(new Event('change', { bubbles: true })); C.markAll(); await pause(60); }
      q('#presets [data-p=mystery]').click(); await pause(300); q('#newSurf').click(); await pause(300); q('#showCount').click(); await pause(100);
      q('#presets [data-p=tychofloor]').click(); await pause(300); C.markAll(); await pause(100);
      q('#modeSeg [data-mode=cool]').click(); await pause(200); q('#play').click(); await pause(1200); q('#play').click(); await pause(100);
      const s = q('#sT'); s.value = '4.5'; s.dispatchEvent(new Event('input', { bubbles: true })); await pause(100); q('#play').click(); await pause(600);
      const t = q('#selStart'); for (const o of [...t.options]) { t.value = o.value; t.dispatchEvent(new Event('change', { bubbles: true })); await pause(80); }
      q('#presets [data-p=small]').click(); await pause(300);
    })()` },
    { name: 'count zoom: wheel off center, + and pan, mark a crater by a click on it, zoom far out and back (2026-11-22)', fn: `(async () => {
      const C = window.__cr, S = C.S, pause = (ms) => new Promise((r) => setTimeout(r, ms)), q = (s) => document.querySelector(s), can = q('#can');
      q('#presets [data-p=copfloor]').click(); await pause(300); const b = can.getBoundingClientRect(), f0 = C.field(), mid = () => { const f = C.field(), z = C.zoom(); return [f.x + z.cx * f.s - f.box.x - f.box.side / 2, f.y + z.cy * f.s - f.box.y - f.box.side / 2]; };
      if (S.mode !== 'count' || !f0.box) throw new Error('no flat count view');
      for (let i = 0; i < 4; i++) can.dispatchEvent(new WheelEvent('wheel', { bubbles: true, cancelable: true, clientX: b.left + f0.box.x + 10, clientY: b.top + f0.box.y + 10, deltaY: -100 }));
      let z = C.zoom(); if (!(z.k > 1.5) || Math.abs(z.cx - S.surf.L / 2) > 1e-9 || Math.abs(z.cy - S.surf.L / 2) > 1e-9) throw new Error('wheel at a corner did not zoom about the middle: ' + JSON.stringify(z));
      q('#zIn').click(); q('#zIn').click(); q('#zIn').click(); z = C.zoom(); if (Math.abs(z.k - 6) > 1e-9) throw new Error('zoom limit is not 6: ' + z.k);
      can.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true })); can.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
      const m = mid(); if (Math.hypot(m[0], m[1]) > 0.5) throw new Error('the view middle is off its center by ' + m);
      const f = C.field(), inView = S.surf.list.filter((c) => !c.gone && c.D >= S.Dc && c.x >= 0 && c.y >= 0 && c.x < S.surf.L && c.y < S.surf.L && f.x + c.x * f.s > f.box.x + 4 && f.x + c.x * f.s < f.box.x + f.box.side - 4 && f.y + c.y * f.s > f.box.y + 4 && f.y + c.y * f.s < f.box.y + f.box.side - 4);
      S.marks = new Set(); for (const c of inView) { const [x, y] = C.px(c.x, c.y); can.dispatchEvent(new MouseEvent('click', { bubbles: true, clientX: x, clientY: y })); if (!S.marks.has(c)) throw new Error('a click on the crater at ' + c.x + ', ' + c.y + ' km (D ' + c.D + ') did not mark it at zoom ' + C.zoom().k); }
      if (S.marks.size !== inView.length) throw new Error('marked ' + S.marks.size + ', clicked ' + inView.length);
      for (let i = 0; i < 12; i++) q('#zOut').click(); for (let i = 0; i < 12; i++) if (!q('#zIn').disabled) q('#zIn').click(); await pause(50);
      if (Math.abs(C.zoom().k - 6) > 1e-9) throw new Error('zoom out far and back in by as many steps gave ' + C.zoom().k);
      can.dispatchEvent(new MouseEvent('dblclick', { bubbles: true })); if (C.zoom().k !== 1) throw new Error('double click did not show the whole field');
      const g = C.field(); if (Math.abs(g.x - g.box.x) > 1e-9 || Math.abs(g.s * S.surf.L - g.box.side) > 1e-9) throw new Error('the whole field is not back in its square');
      C.markAll(); await pause(100);
    })()` },
  ],
};
