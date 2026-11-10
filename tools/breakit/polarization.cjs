/* Known values for the break-it test (tools/breakit.cjs), polarization. Hook: window.__pol (S, states, applyPreset).
   Bench: light never gains intensity through a polarizer or a plate (plates are lossless: S0 unchanged), the Stokes vector is
   physical (S0 >= |S|), the "Intensity after the last element" readout is I/I0 of the live chain, and the presets give their
   cited values (Malus: second polarizer at 40 deg passes cos^2 40; crossed 0; three polarizers 1/8).
   Reflection: Rs + Ts = 1 and Rp + Tp = 1 at every angle below the critical angle, total internal reflection gives R = 1,
   Rp = 0 at the Brewster angle atan(n2/n1), and the readouts equal the Fresnel equations of the live n1, n2, angle. */
const pre = `const P = window.__pol; if (!P) return true; const S = P.S, states = P.states;
  const rd = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-');
`;
module.exports = {
  checks: [
    { name: "bench: no gain through any element, plates lossless, Stokes vector physical", fn: `(() => { ${pre}
      if (!states || !states.length) return true;
      for (let i = 0; i < states.length; i++) { const s = states[i].S; if (!s.every(isFinite)) return 'Stokes vector ' + i + ' has a bad value ' + s;
        if (Math.hypot(s[1], s[2], s[3]) > s[0] * (1 + 1e-9) + 1e-12) return 'stage ' + i + ' is not physical: |S| ' + Math.hypot(s[1], s[2], s[3]) + ' > S0 ' + s[0];
        if (i) { const prev = states[i - 1].S[0], el = S.els[i - 1], gain = s[0] - prev;
          if (gain > 1e-9 * Math.max(1, prev)) return 'element ' + i + ' gained intensity ' + prev + ' -> ' + s[0];
          if (el.type !== 'pol' && Math.abs(gain) > 1e-9 * Math.max(1, prev)) return 'plate ' + i + ' (' + el.type + ') changed the intensity ' + prev + ' -> ' + s[0]; } }
      return true; })()` },
    { name: "bench: the intensity readouts equal I/I0 of the live chain", fn: `(() => { ${pre}
      if (!states || !states.length || S.view !== 'bench') return true;
      const I0 = states[0].S[0], last = states[states.length - 1].S[0] / I0, m = rd('rOut').match(/^I\\/I₀ = ([\\d.]+)/);
      if (!m) return 'odd readout ' + rd('rOut');
      if (Math.abs(+m[1] - last) > 5.1e-4) return 'readout says ' + m[1] + ', chain gives ' + last;
      const each = rd('rEach'); if (S.els.length) { const v = each.split(' · ').map((t) => +t.split(': ')[1]); for (let i = 0; i < v.length; i++) if (Math.abs(v[i] - states[i + 1].S[0] / I0) > 5.1e-4) return 'after element ' + (i + 1) + ' shows ' + v[i]; }
      return true; })()` },
    { name: "bench presets: Malus cos^2 40 deg, crossed 0, three polarizers 1/8", fn: `(() => { ${pre}
      if (S.view !== 'bench' || !states || !states.length) return true;
      const on = document.querySelector('#presets [aria-pressed=true]'); if (!on) return true;
      const p = on.dataset.p, cfg = S.els.map((e) => e.type + e.ang).join(','), I = states[states.length - 1].S[0] / states[0].S[0];
      const want = { malus: ['pol0,pol40', 0.5 * Math.cos(40 * Math.PI / 180) ** 2], crossed: ['pol0,pol90', 0], three: ['pol0,pol45,pol90', 0.125] }[p];
      if (!want || cfg !== want[0] || S.input.kind !== 'unpol') return true;
      return Math.abs(I - want[1]) < 1e-9 ? true : p + ': I/I0 = ' + I + ', should be ' + want[1]; })()` },
    { name: "reflection: Rs + Ts = 1, Rp + Tp = 1, TIR gives R = 1, Rp = 0 at Brewster, readouts equal the Fresnel equations", fn: `(() => { ${pre}
      const n1 = S.n1, n2 = S.n2, ti = S.thi * Math.PI / 180, ci = Math.cos(ti), st = n1 / n2 * Math.sin(ti);
      if (st >= 1) { if (S.view === 'refl' && rd('rRs') !== '1.0000') return 'TIR but Rs shows ' + rd('rRs'); return true; }
      const ct = Math.sqrt(1 - st * st), rs = (n1 * ci - n2 * ct) / (n1 * ci + n2 * ct), rp = (n2 * ci - n1 * ct) / (n2 * ci + n1 * ct), f = n2 * ct / (n1 * ci);
      const Ts = f * (2 * n1 * ci / (n1 * ci + n2 * ct)) ** 2, Tp = f * (2 * n1 * ci / (n2 * ci + n1 * ct)) ** 2;
      if (Math.abs(rs * rs + Ts - 1) > 1e-9 || Math.abs(rp * rp + Tp - 1) > 1e-9) return 'energy not conserved at the surface: ' + (rs * rs + Ts) + ', ' + (rp * rp + Tp);
      const tB = Math.atan(n2 / n1), cB = Math.cos(tB), tB2 = Math.asin(n1 / n2 * Math.sin(tB)), rpB = (n2 * cB - n1 * Math.cos(tB2)) / (n2 * cB + n1 * Math.cos(tB2));
      if (Math.abs(rpB) > 1e-12) return 'Rp at Brewster is ' + rpB;
      if (Math.abs(parseFloat(rd('rThB')) - tB * 180 / Math.PI) > 0.0051) return 'Brewster readout ' + rd('rThB') + ', physics ' + tB * 180 / Math.PI;
      if (Math.abs(+rd('rRs') - rs * rs) > 5.1e-5 || Math.abs(+rd('rRp') - rp * rp) > 5.1e-5) return 'Rs/Rp readouts ' + rd('rRs') + ' ' + rd('rRp') + ', physics ' + rs * rs + ' ' + rp * rp;
      if (Math.abs(+rd('rTs') - Ts) > 5.1e-5 || Math.abs(+rd('rTp') - Tp) > 5.1e-5) return 'Ts/Tp readouts ' + rd('rTs') + ' ' + rd('rTp');
      if (n2 < n1 && Math.abs(parseFloat(rd('rThC')) - Math.asin(n2 / n1) * 180 / Math.PI) > 0.0051) return 'critical angle readout ' + rd('rThC');
      return true; })()` },
  ],
  steps: [
    { name: 'add all four elements, drag every angle to its extremes, change the input kind, then Brewster with a glass to air ray past the critical angle', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const el = document.getElementById(id); el.value = v; el.dispatchEvent(new Event('input', { bubbles: true })); };
      const P = window.__pol; P.applyPreset('three'); await pause(200);
      for (let i = 0; i < 3; i++) { document.getElementById('addEl').click(); await pause(60); }
      for (let i = 0; i < 4; i++) for (const v of ['-90', '90', '45', '0']) { if (document.getElementById('ea' + i)) set('ea' + i, v); await pause(30); }
      for (const v of ['-90', '90', '0']) { set('inAng', v); await pause(60); }
      P.applyPreset('brewster'); await pause(200);
      set('n1', '2.4'); set('n2', '1'); set('thi', '89.5'); await pause(150); set('thi', '0'); await pause(100); set('n1', '1'); set('n2', '1'); set('thi', '45'); await pause(150);
      set('n2', '2.4'); set('thi', '89.5'); await pause(150); P.applyPreset('malus'); await pause(150);
    })()` },
  ],
};
