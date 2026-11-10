/* Known values for the break-it test (tools/breakit.cjs), shells-and-x-rays. Hook: window.__sx (S, xrayLines, lamPm, xZ).
   Shells view: the measured configuration and the n + l rule configuration both hold exactly Z electrons, the electrons per shell
   add to Z, the readouts (Z, outer shell, first ionization energy, Z_eff = n √(IE/13.606 eV)) equal the table.
   X-ray view: the cutoff λ_min = hc/eV (hc = 1239.84198 eV·nm), the K edge and each line wavelength = hc/E from the NIST table, the K
   lines exist only above the K edge, Kα₁ < Kβ₁ < edge in energy, the cursor λ and E agree (E λ = hc), the chamber reads exactly 1
   with no sheets, mean energy stays below the tube voltage, and the half value layers are positive. */
const pre = `const X = window.__sx; if (!X || !X.S) return true;
  const S = X.S, rd = (name) => { for (const d of document.querySelectorAll('#out > div')) { const t = d.querySelector('dt'); if (t && t.textContent.startsWith(name)) return d.querySelector('dd').textContent.replace(/\\u2212/g, '-'); } return null; };
  const HC = 1239841.98, SUP = { '⁰': 0, '¹': 1, '²': 2, '³': 3, '⁴': 4, '⁵': 5, '⁶': 6, '⁷': 7, '⁸': 8, '⁹': 9 };
  const count = (txt) => txt.split(' ').reduce((s, t) => s + (t.slice(2) ? +[...t.slice(2)].map((c) => SUP[c]).join('') : 0), 0);
`;
module.exports = {
  checks: [
    { name: "shells: the configurations and the electrons per shell hold exactly Z electrons", fn: `(() => { ${pre}
      if (S.view !== 'shells') return true;
      const Z = S.sh.Z, cfg = rd('Configuration (measured)'), rule = rd('By the n + l rule'), per = rd('Electrons per shell'), el = rd('Atomic number Z');
      if (cfg == null || rule == null || per == null) return 'a shells readout is missing';
      if (+el !== Z) return 'Atomic number Z shows ' + el + ', state ' + Z;
      if (count(cfg.replace(' (predicted)', '')) !== Z) return 'measured configuration "' + cfg + '" holds ' + count(cfg.replace(' (predicted)', '')) + ' electrons, Z = ' + Z;
      if (count(rule) !== Z) return 'n + l rule configuration "' + rule + '" holds ' + count(rule) + ' electrons, Z = ' + Z;
      const ps = per.split(', ').map(Number); if (ps.reduce((a, b) => a + b, 0) !== Z) return 'electrons per shell ' + per + ' add to ' + ps.reduce((a, b) => a + b, 0) + ', Z = ' + Z;
      for (let n = 0; n < ps.length; n++) if (ps[n] > 2 * (n + 1) ** 2) return 'shell ' + (n + 1) + ' holds ' + ps[n] + ' > 2n² (Pauli)';
      return true; })()` },
    { name: "shells: first ionization energy and Z_eff = n√(IE/13.606 eV) follow the shown values", fn: `(() => { ${pre}
      if (S.view !== 'shells' || S.blind) return true;
      const ie = rd('First ionization energy'), ze = rd('Z_eff'), os = /n = (\\d+)/.exec(rd('Outer shell') || '');
      if (ie == null || !os) return 'readout missing';
      if (/not measured/.test(ie)) return true;
      const IE = parseFloat(ie); if (!(IE > 3.5 && IE < 25)) return 'ionization energy ' + ie + ' outside 3.5 to 25 eV';
      const want = +os[1] * Math.sqrt(IE / 13.60569312299), got = parseFloat(ze);
      if (Math.abs(got - want) > 0.0006 + 5e-5 * want) return 'Z_eff shows ' + ze + ', n√(IE/13.606) = ' + want + ' from ' + ie;
      return true; })()` },
    { name: "x-ray: cutoff λ_min = hc/eV, line wavelengths and the K edge from the table", fn: `(() => { ${pre}
      if (S.view !== 'xray' || S.blind) return true;
      const Z = X.xZ(), kV = S.xr.kV, lmin = HC / (kV * 1000), got = parseFloat(rd('Cutoff')); if (!(kV > 0)) return 'kV ' + kV;
      if (Math.abs(got - lmin) > 0.00051) return 'cutoff shows ' + rd('Cutoff') + ', hc/eV = ' + lmin + ' pm at ' + kV + ' kV';
      const ln = X.xrayLines(Z, kV);
      if (S.xr.target === 'mystery') return true;
      const edge = parseFloat(rd('K edge')) * 1000, E0 = kV * 1000;
      if (ln.length) { if (!(E0 > edge - 0.06)) return 'K lines shown at ' + kV + ' kV, below the K edge ' + edge + ' eV';
        for (const l of ln) { const s = rd(l.name + ' line'); if (s == null) return l.name + ' line missing'; if (Math.abs(parseFloat(s) - HC / l.E) > 0.00051) return l.name + ' shows ' + s + ', hc/E = ' + HC / l.E; }
        if (!(ln[0].E > ln[1].E && ln[2].E > ln[0].E && edge > ln[2].E - 0.06)) return 'line energies out of order: Kα1 ' + ln[0].E + ', Kα2 ' + ln[1].E + ', Kβ1 ' + ln[2].E + ', edge ' + edge;
        if (!(HC / ln[0].E > lmin)) return 'a K line is shorter than the cutoff';
      } else if (E0 > edge + 0.06) return 'no K lines at ' + kV + ' kV, but the K edge is ' + edge + ' eV';
      return true; })()` },
    { name: "x-ray: cursor λ and E agree (E λ = hc) and equal the state", fn: `(() => { ${pre}
      if (S.view !== 'xray') return true;
      const x = S.xr, lam = x.axis === 'lam' ? x.cur : HC / x.cur, l = parseFloat(rd('Cursor λ')), e = parseFloat(rd('Cursor E'));
      if (!isFinite(lam) || lam <= 0) return 'cursor state ' + x.cur;
      if (Math.abs(l - lam) > 0.00501) return 'Cursor λ shows ' + rd('Cursor λ') + ', state ' + lam;
      if (Math.abs(e - HC / lam / 1000) > 0.000051) return 'Cursor E shows ' + rd('Cursor E') + ', hc/λ = ' + HC / lam / 1000;
      return true; })()` },
    { name: "x-ray: chamber reads 1 with no sheets; mean energy below the tube voltage; half value layers positive", fn: `(() => { ${pre}
      if (S.view !== 'xray') return true;
      const x = S.xr, ch = [...document.querySelectorAll('#out dt')].find((d) => /^Chamber reading/.test(d.textContent));
      if (!ch) return true;
      const v = parseFloat(ch.nextElementSibling.textContent); if (!isFinite(v) || v < 0 || v > 1 + 1e-9) return 'chamber reading ' + ch.nextElementSibling.textContent;
      if (x.abs === 0 && Math.abs(v - 1) > 1e-4) return 'chamber reads ' + v + ' with no sheets';
      const em = rd('Mean photon energy'); if (em != null && !(parseFloat(em) > 0 && parseFloat(em) < x.kV)) return 'mean photon energy ' + em + ' at ' + x.kV + ' kV';
      if (!S.blind) { const h1 = rd('First HVL'), h2 = rd('Second HVL'); if (h1 != null && !(parseFloat(h1) > 0 && parseFloat(h2) > 0)) return 'half value layers ' + h1 + ', ' + h2; }
      return true; })()` },
    { name: "x-ray: the preset targets are copper 30 kV, molybdenum 15 kV, tungsten 80 kV with 2.5 mm Al", fn: `(() => { ${pre}
      const want = { copper: ['29', 30], voltage: ['42', 15], hvl: ['74', 80] }[S.preset]; if (!want || S.view !== 'xray') return true;
      if (S.xr.target !== want[0] && S.xr.kV === want[1]) return true;
      if (S.xr.target === want[0] && S.xr.kV === want[1] && S.preset === 'hvl' && S.xr.al !== 2.5) return 'hvl preset has ' + S.xr.al + ' mm Al';
      return true; })()` },
  ],
  steps: [
    { name: 'walk Z from 1 to 118 with the arrow keys, both fills, then down to 1 and past the ends', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), c = document.getElementById('can');
      document.querySelector('#presets [data-p=neon]').click(); await pause(100); c.focus();
      for (const fill of ['rule', 'real']) { const b = document.querySelector('#fillSeg [data-f=' + fill + ']'); if (b) b.click();
        for (let i = 0; i < 125; i++) { document.getElementById('zUp').click(); }
        await pause(150); for (let i = 0; i < 125; i++) document.getElementById('zDown').click(); await pause(150); }
    })()` },
    { name: 'x-ray: every target at every voltage extreme, with filtration and sheets maxed, then the mystery target', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      const set = (id, v) => { $(id).value = v; $(id).dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#presets [data-p=hvl]').click(); await pause(100);
      for (const t of [...$('selTarget').options].map((o) => o.value)) { $('selTarget').value = t; $('selTarget').dispatchEvent(new Event('change', { bubbles: true }));
        for (const [kv, al, cu, ab] of [[5, 0, 0, 0], [100, 10, 0.5, 10], [20, 0.1, 0, 0.1], [20.5, 0, 0.01, 0]]) { set('sV', kv); set('sAl', al); set('sCu', cu); set('sAbs', ab); await pause(30); } }
      document.querySelector('#presets [data-p=mystery]').click(); await pause(100); for (let i = 0; i < 5; i++) { $('newTarget').click(); await pause(30); }
      document.querySelector('#axisSeg [data-a]:not([aria-pressed=true])').click(); await pause(100);
    })()` },
  ],
};
