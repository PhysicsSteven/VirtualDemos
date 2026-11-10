/* Known values for the break-it test (tools/breakit.cjs), relativistic-motion. Hook: window.__rm (S, ...).
   Every view, from the displayed settings and independent physics (c = 299792458 m/s, CODATA 2022 rest energies):
   adding velocities: a light pulse crosses the 3.000 light second gap in exactly 3.0000 s whatever the rocket speed, the relativistic
   ground speed (v + u')/(1 + v u'/c^2) never reaches c and the probe time equals 3/u;
   steady force: p = F t, gamma^2 = 1 + (p/mc)^2, v = pc^2/E, F x = (gamma - 1) m c^2 (work is the kinetic energy), v < c;
   electron flight: K = qV, E^2 = (pc)^2 + (mc^2)^2, t = 8.400 m / v, r = p/(qeB), and the rest energies are the CODATA values. */
const pre = `const R = window.__rm; if (!R) return true;
  const S = R.S, C = 299792458, MC2 = { Electron: 0.51099895069, Muon: 105.6583755, Proton: 938.27208943, Deuteron: 1875.612945, 'Alpha particle': 3727.3794118 }, Q = { 'Alpha particle': 2 };
  const rd = (label) => { for (const d of document.querySelectorAll('#out > div')) if (d.querySelector('dt').textContent.indexOf(label) === 0) return d.querySelector('dd').textContent.replace(/\\u2212/g, '-'); return null; };
  const num = (t) => { if (t === null) return NaN; const m = t.match(/(-?[\\d.]+)(?: × 10(⁻?)([⁰¹²³⁴⁵⁶⁷⁸⁹]+))?/); if (!m) return NaN; let v = parseFloat(m[1]); if (m[3]) { const e = +[...m[3]].map((c) => '⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c)).join(''); v *= Math.pow(10, m[2] ? -e : e); } return v; };
  const dec = (t) => { const m = t.match(/\\.(\\d+)/); return m ? m[1].length : 0; };
  const near = (got, want, t) => { const d = dec(t); return Math.abs(got - want) <= 0.50001 * Math.pow(10, -d) + 1e-12 * Math.abs(want); };
`;
module.exports = {
  checks: [
    { name: "adding velocities: light crosses in 3.0000 s for any rocket speed; ground speed < c; probe time = 3/u", fn: `(() => { ${pre}
      if (S.view !== 'vel') return true;
      const h = S.vel, v = h.mystery ? h.mv : h.v, u1 = h.light ? 1 : h.u;
      if (!(v >= 0 && v < 1)) return 'rocket speed ' + v;
      const u = (v + u1) / (1 + v * u1);
      if (!(u <= 1 + 1e-15)) return 'ground speed ' + u + ' exceeds c';
      if (h.light && Math.abs(u - 1) > 1e-15) return 'light at ' + u + ' c for v = ' + v;
      const t = rd(h.light ? 'Light pulse, A to B' : 'Probe, A to B'); if (t === null || t === '—') return true;
      return Math.abs(parseFloat(t) - 3 / u) <= 5.1e-5 ? true : 'timer shows ' + t + ', 3/u = ' + 3 / u + ' for v = ' + v + ', u′ = ' + u1; })()` },
    { name: "adding velocities readouts: relativistic and Galilean sums from v and u′ (when shown)", fn: `(() => { ${pre}
      if (S.view !== 'vel' || S.vel.mystery || S.blind) return true;
      const h = S.vel, v = h.v, u1 = h.light ? 1 : h.u, rel = rd('Relativistic ground speed'), gal = rd('Galilean sum');
      if (rel === null || /hidden/.test(rel)) return true;
      if (Math.abs(parseFloat(rel) - (v + u1) / (1 + v * u1)) > 5.1e-5) return 'relativistic sum shows ' + rel + ' for v = ' + v + ', u′ = ' + u1;
      if (Math.abs(parseFloat(gal) - (v + u1)) > 5.1e-5) return 'Galilean sum shows ' + gal + ' for v = ' + v + ', u′ = ' + u1;
      return true; })()` },
    { name: "steady force: p = Ft, gamma^2 = 1 + (p/mc)^2, F x = (gamma - 1) mc^2, v < c", fn: `(() => { ${pre}
      if (S.view !== 'mom') return true;
      const pn = rd('Particle'), name = pn.split(',')[0], mc2 = MC2[name]; if (!mc2) return 'unknown particle ' + pn;
      if (Math.abs(num(pn.split('=')[1]) - mc2) > 6e-6 * mc2) return 'rest energy shown ' + pn + ', CODATA ' + mc2 + ' MeV';
      const q = Q[name] || 1, E = num(rd('Field E')), tNs = num(rd('Time t')), k = q * E * C / mc2, kt = k * tNs * 1e-9, g = Math.sqrt(1 + kt * kt), beta = kt / g;
      const F = q * 1.602176634e-19 * E * 1e6, tol = 6e-4;
      if (Math.abs(num(rd('Force F')) / F - 1) > tol) return 'F shows ' + rd('Force F') + ', qE = ' + F;
      const vt = rd('Speed v'); if (!(num(vt) < 1)) return 'speed shows ' + vt + ' (not below c)';
      if (!near(num(vt), beta, vt.replace('c', ''))) return 'speed shows ' + vt + ', p/(γm) = ' + beta;
      const xm = num(rd('Distance x')), x = mc2 * 1e6 * 1.602176634e-19 / F * (g - 1);
      if (Math.abs(xm - x) > 6e-5 * Math.max(x, 1e-12)) return 'distance shows ' + xm + ', (mc²/F)(γ − 1) = ' + x;
      if (S.blind) return true;
      const p = rd('Momentum p = Ft'), gm = rd('γ'), nw = rd("Newton's speed");
      if (Math.abs(num(p) - kt * mc2) > 6e-5 * Math.max(kt * mc2, 1e-9)) return 'p shows ' + p + ', Ft = ' + kt * mc2 + ' MeV/c';
      if (!near(num(gm), g, gm)) return 'γ shows ' + gm + ', sqrt(1 + (p/mc)²) = ' + g;
      if (!near(num(nw), kt, nw.replace('c', ''))) return "Newton's speed shows " + nw + ', Ft/m = ' + kt;
      if (Math.abs(F * xm / (mc2 * 1e6 * 1.602176634e-19) - (g - 1)) > 2e-4 * Math.max(g - 1, 1e-6)) return 'work F x is not the kinetic energy (γ − 1) mc²';
      return true; })()` },
    { name: "electron flight: K = qV, E² = (pc)² + (mc²)², t = 8.400 m / v, r = p/(qeB)", fn: `(() => { ${pre}
      if (S.view !== 'en' || S.blind || S.en.mystery) return true;
      const pn = rd('Particle'), name = pn.split(',')[0], mc2 = MC2[name]; if (!mc2) return 'unknown particle ' + pn;
      if (Math.abs(num(pn.split('=')[1]) - mc2) > 6e-6 * mc2) return 'rest energy shown ' + pn + ', CODATA ' + mc2 + ' MeV';
      const q = Q[name] || 1, V = num(rd('Accelerating voltage V')), K = q * V, g = 1 + K / mc2, beta = Math.sqrt(1 - 1 / (g * g)), pc = Math.sqrt(K * K + 2 * K * mc2);
      if (Math.abs(pc * pc + mc2 * mc2 - (K + mc2) ** 2) > 1e-9 * (K + mc2) ** 2) return 'energy momentum relation fails in my check';
      const kt = rd('Kinetic energy K = qV'); if (Math.abs(num(kt) - K) > 6e-5 * Math.max(K, 1e-9)) return 'K shows ' + kt + ', qV = ' + K;
      const bs = rd('Speed v'); if (!(num(bs) < 1)) return 'speed ' + bs + ' not below c';
      if (!near(num(bs), beta, bs.replace('c', ''))) return 'speed shows ' + bs + ', physics ' + beta;
      const gm = rd('γ'); if (!near(num(gm), g, gm)) return 'γ shows ' + gm + ', 1 + K/mc² = ' + g;
      const pcs = rd('Momentum pc'); if (Math.abs(num(pcs) - pc) > 6e-5 * pc) return 'pc shows ' + pcs + ', ' + pc;
      const tt = rd('Time of flight'); if (tt !== null && tt !== '—') { const want = 8.4 / (beta * C) * 1e9; if (Math.abs(num(tt) - want) > 0.00501 + 1e-9 * want) return 'time of flight shows ' + tt + ', 8.4 m / v = ' + want + ' ns'; }
      const rr = rd('Bend radius'); if (rr !== null && rr !== '—') { const B = parseFloat(document.querySelector('#out > div:nth-child(4) dt').textContent.match(/in ([\\d.]+) T/)[1]), want = pc * 1e6 / (q * C * B) * 100; if (Math.abs(num(rr) - want) > 0.00501 + 1e-9 * want) return 'bend radius shows ' + rr + ', p/(qeB) = ' + want + ' cm'; }
      return true; })()` },
  ],
  steps: [
    { name: 'every setup, extreme sliders, run each view to the end, step the force view many times', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      for (const b of document.querySelectorAll('#presets button')) { b.click(); await pause(200); }
      document.querySelector('#presets button').click(); await pause(150);
      for (const id of ['sV', 'sU']) { const e = document.getElementById(id); for (const v of [e.max, e.min, e.max]) { set(id, v); await pause(80); } }
      window.__rm.setView('mom'); await pause(200);
      const sel = document.getElementById('selPm'); for (const o of [...sel.options]) { sel.value = o.value; sel.dispatchEvent(new Event('change', { bubbles: true })); for (const v of [document.getElementById('sE').min, document.getElementById('sE').max]) { set('sE', v); await pause(60); for (let i = 0; i < 12; i++) { document.getElementById('step').click(); } await pause(60); } }
      window.__rm.setView('en'); await pause(200);
      const se = document.getElementById('selPe'); for (const o of [...se.options]) { se.value = o.value; se.dispatchEvent(new Event('change', { bubbles: true })); for (const v of [document.getElementById('sAcc').min, document.getElementById('sAcc').max]) { set('sAcc', v); await pause(60); } window.__rm.fire && window.__rm.fire(); await pause(150); }
      for (const v of [document.getElementById('sB').min, document.getElementById('sB').max]) { set('sB', v); await pause(80); }
      document.getElementById('go').click(); await pause(1500); document.querySelector('#presets button').click(); await pause(200);
    })()` },
  ],
};
