/* Known values for the break-it test (tools/breakit.cjs), force-lab. Hook: window.__fl (S, F, applyPreset, drawAll).
   The force readout equals the law from the live masses or charges and distance (G m1 m2 / r², k q1 q2 / r²); gravity always
   attracts and like charges repel; doubling the distance divides F by 4; the distance readout is the gap between the bodies;
   the lead spheres never overlap; the presets give the numbers in their hints (1.85e-6 N, 22.5 N, 8.24e-8 N). */
const pre = `const L = window.__fl; if (!L) return true;
  const S = L.S, rd = (t) => t.replace(/\\u2212/g, '-'), dd = (label) => { for (const d of document.querySelectorAll('#out > div')) if (d.querySelector('dt').textContent === label) return d.querySelector('dd').textContent; return null; };
  const sciv = (t) => { const SUP = '⁻⁰¹²³⁴⁵⁶⁷⁸⁹', m = /^([\\d.]+)(?: × 10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+))? N$/.exec(rd(t)); if (!m) return NaN; return parseFloat(m[1]) * (m[2] ? Math.pow(10, parseInt([...m[2]].map((c) => c === '⁻' ? '-' : SUP.indexOf(c) - 1).join(''), 10)) : 1); };
  const G = 6.67430e-11, k = 8.9875517862e9, E = 1.602176634e-19, Q = { grav: 1, coul: 1e-6, atom: E }, X = { grav: 1, coul: 0.01, atom: 1e-12 };
`;
module.exports = {
  checks: [
    { name: "force readout equals the inverse square law from the live state", fn: `(() => { ${pre}
      if (S.blind) return true;
      const r = (S.x2 - S.x1) * X[S.mode], F = S.mode === 'grav' ? -G * S.a * S.b / (r * r) : k * S.a * S.b * Q[S.mode] * Q[S.mode] / (r * r);
      if (!isFinite(F)) return 'F = ' + F;
      if (Math.abs(L.F() - F) > 1e-12 * Math.abs(F)) return 'F() = ' + L.F() + ', law gives ' + F;
      const got = sciv(dd('Force on each |F|') || ''); if (!isFinite(got)) return 'odd force readout ' + dd('Force on each |F|');
      if (Math.abs(got - Math.abs(F)) > 6e-3 * Math.abs(F) + 1e-300) return 'readout ' + dd('Force on each |F|') + ', law ' + F;
      const kind = dd('Each body'), want = F < 0 ? 'attract' : F > 0 ? 'repel' : 'no force';
      if (kind !== want) return 'Each body says ' + kind + ', sign of F says ' + want;
      return true; })()` },
    { name: "gravity attracts, unlike charges attract, like charges repel; doubling r divides F by 4", fn: `(() => { ${pre}
      if (S.mode === 'grav' && !(L.F() < 0)) return 'gravity does not attract: F = ' + L.F();
      if (S.mode !== 'grav') { const s = Math.sign(S.a) * Math.sign(S.b); if (s !== 0 && Math.sign(L.F()) !== s) return 'charges ' + S.a + ', ' + S.b + ' but F = ' + L.F(); }
      const r = S.x2 - S.x1, f1 = L.F(); S.x2 += r; const f2 = L.F(); S.x2 -= r;
      if (f1 !== 0 && Math.abs(f2 * 4 - f1) > 1e-9 * Math.abs(f1)) return 'F(2r) × 4 = ' + f2 * 4 + ', F(r) = ' + f1;
      return true; })()` },
    { name: "distance readout equals the gap, and the bodies stay on the ruler without overlapping", fn: `(() => { ${pre}
      const r = S.x2 - S.x1, m = { grav: 10, coul: 10, atom: 1000 }[S.mode], got = parseFloat(dd('Distance r'));
      if (!(S.x1 >= 0 && S.x2 <= m + 1e-9)) return 'a body is off the ruler: ' + S.x1 + ', ' + S.x2;
      if (!(r > 0)) return 'r = ' + r;
      if (Math.abs(got - r) > 0.0501) return 'Distance shows ' + dd('Distance r') + ', r = ' + r;
      if (S.mode === 'grav') { const rad = (mm) => Math.cbrt(3 * mm / (4 * Math.PI * 11340)); const need = rad(S.same ? 1000 : S.a) + rad(S.same ? 1000 : S.b); if (r < need - 1e-9) return 'spheres overlap: r = ' + r + ' < R1 + R2 = ' + need; }
      return true; })()` },
    { name: "presets: Gm²/r² = 1.85e-6 N (500 kg, 3 m), k q²/r² = 22.5 N (2 μC, 4 cm), ke²/a0² = 8.24e-8 N", fn: `(() => { ${pre}
      const p = document.querySelector('#presets [aria-pressed=true]'); if (!p || S.preset !== p.dataset.p) return true;
      const want = { g1: [1.85e-6, 3], g2: [3.71e-6, 3], c1: [22.5, 3], c2: [22.5, 3], a1: [8.24e-8, 3] }[S.preset]; if (!want) return true;
      if (S.same) return true;
      const f = Math.abs(L.F()); if (S.preset === 'g1' || S.preset === 'g2' || S.preset === 'c1' || S.preset === 'c2' || S.preset === 'a1') {
        if (S.x2 - S.x1 !== { g1: 3, g2: 3, c1: 4, c2: 4, a1: 52.9 }[S.preset] && Math.abs(S.x2 - S.x1 - { g1: 3, g2: 3, c1: 4, c2: 4, a1: 52.9 }[S.preset]) > 1e-9) return true; }
      return Math.abs(f - want[0]) <= 6e-3 * want[0] ? true : S.preset + ': F = ' + f + ', hint says ' + want[0]; })()` },
    { name: "recorded table: every row is |F| at its r for the bodies it was taken with", fn: `(() => { ${pre}
      for (const mode of ['grav', 'coul', 'atom']) for (const q of S.rec[mode]) {
        const r = q[0] * X[mode], F = mode === 'grav' ? G * q[2] * q[3] / (r * r) : Math.abs(k * q[2] * q[3] * Q[mode] * Q[mode] / (r * r));
        if (Math.abs(Math.abs(q[1]) - F) > 1e-9 * F) return mode + ' row r = ' + q[0] + ' has |F| = ' + q[1] + ', law ' + F;
      }
      return true; })()` },
  ],
  steps: [
    { name: 'Record several points, change a body, record again (refused), switch mode and back, clear', fn: `(async () => {
      const L = window.__fl, pause = (ms) => new Promise((r) => setTimeout(r, ms)), rec = document.getElementById('record');
      L.applyPreset('g1'); rec.click(); L.S.x2 = 7; L.drawAll(); rec.click(); L.S.x2 = 9.9; L.drawAll(); rec.click(); await pause(100);
      const a = document.getElementById('sA'); a.value = '1000'; a.dispatchEvent(new Event('input', { bubbles: true })); rec.click(); await pause(100);
      L.applyPreset('a1'); rec.click(); L.applyPreset('c2'); rec.click(); L.applyPreset('g1'); await pause(100);
      document.getElementById('clear').click(); for (const m of ['atom', 'coul']) { document.querySelector('#modeSeg [data-m=' + m + ']').click(); document.getElementById('clear').click(); }
      document.querySelector('#modeSeg [data-m=grav]').click(); await pause(100);   /* Reset all asks first while readings remain */
    })()` },
    { name: 'Gravity at 1000 kg Same size, push both bodies together and to the ends, set a charge to 0', fn: `(async () => {
      const L = window.__fl, pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      L.applyPreset('g2'); set('sA', '1000'); set('sB', '1000'); document.getElementById('cSize').click(); await pause(100);
      const c = document.getElementById('can'); c.focus();
      for (let i = 0; i < 40; i++) c.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true, cancelable: true }));
      for (let i = 0; i < 40; i++) c.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', shiftKey: true, bubbles: true, cancelable: true }));
      document.querySelector('#modeSeg [data-m=coul]').click(); set('sA', '0'); await pause(100); set('sB', '-10'); set('sA', '10'); await pause(100);
      document.querySelector('#modeSeg [data-m=atom]').click(); set('sA', '-10'); set('sB', '-10'); await pause(100);
    })()` },
  ],
};
