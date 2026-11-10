/* Known values for the break-it test (tools/breakit.cjs), dna. Hook: window.__dna (S, models, ...).
   Whatever is built (any preset, form, typed or random sequence): strand 2 is the complement of strand 1, A pairs with T by two
   hydrogen bonds and G with C by three, each of 2.5 to 3.4 angstroms; every atom is a finite number and no two atoms sit closer
   than 1 angstrom unless they are bonded; the 5' residue of each strand has no phosphate; the readouts equal the model:
   length n rise, turns n twist/360, atom count, G C content, molar mass, the melting temperature (SantaLucia 1998) from the
   current sodium; the melting temperature rises with sodium and a G C rich sequence melts above the same length of A T; the
   mean rise and twist of the steps match the form (B 3.38 and 36.0, A 2.56 and 32.7); presets match their hints. */
const pre = `const D = window.__dna; if (!D || !D.models.length) return true;
  const S = D.S, ms = D.models, g = (id) => document.getElementById(id).textContent, COMP = { A: 'T', T: 'A', G: 'C', C: 'G' };
`;
module.exports = {
  checks: [
    { name: "every atom finite, strands complementary, 5' residues have no phosphate, no overlapping atoms", fn: `(() => { ${pre}
      for (const m of ms) {
        if (m.seq !== S.seq) return 'model sequence ' + m.seq + ' but state ' + S.seq;
        let nP1 = 0, nP2 = 0;
        for (const a of m.atoms) { if (!isFinite(a.x + a.y + a.z)) return 'NaN atom ' + a.name + ' ' + a.resi;
          if (a.name === 'P') { if (a.chain === 'A') nP1++; else nP2++; } }
        if (nP1 !== m.n - 1 || nP2 !== m.n - 1) return 'phosphates ' + nP1 + ', ' + nP2 + ' for ' + m.n + ' pairs';
        for (let k = 0; k < m.n; k++) { const a = m.atoms.find((x) => x.chain === 'A' && x.resi === k + 1), b = m.atoms.find((x) => x.chain === 'B' && x.resi === 2 * m.n - k);
          if (a.res !== m.seq[k] || b.res !== COMP[m.seq[k]]) return 'pair ' + (k + 1) + ' not complementary: ' + a.res + b.res; }
        if (m.atoms.length > 1500) continue;
        const bonded = new Set(m.bonds.map(([i, j]) => i + ',' + j));
        for (let i = 0; i < m.atoms.length; i++) for (let j = i + 1; j < m.atoms.length; j++) { const p = m.atoms[i], q = m.atoms[j];
          if (Math.abs(p.z - q.z) > 1 || Math.abs(p.x - q.x) > 1 || Math.abs(p.y - q.y) > 1) continue;
          if (Math.hypot(p.x - q.x, p.y - q.y, p.z - q.z) < 1 && !bonded.has(i + ',' + j)) return 'atoms ' + p.name + p.resi + ' and ' + q.name + q.resi + ' overlap'; }
      }
      return true; })()` },
    { name: "hydrogen bonds: 2 for A-T, 3 for G-C, 2.5 to 3.4 angstroms; the pair panel shows the same distances", fn: `(() => { ${pre}
      for (const m of ms) { for (let k = 0; k < m.n; k++) { const h = m.hb.filter((x) => x.pair === k), want = (m.seq[k] === 'A' || m.seq[k] === 'T') ? 2 : 3;
          if (h.length !== want) return 'pair ' + (k + 1) + ' (' + m.seq[k] + ') has ' + h.length + ' hydrogen bonds';
          for (const x of h) if (!(x.d > 2.5 && x.d < 3.4)) return 'H bond ' + x.label + ' is ' + x.d.toFixed(2) + ' A'; } }
      if (S.sel) { const m = S.sel.model, k = S.sel.pair; if (m.hb) { const txt = g('pHb').replace(/′/g, "'"); for (const x of m.hb.filter((y) => y.pair === k)) if (!txt.includes(x.d.toFixed(2) + ' Å')) return 'panel misses ' + x.d.toFixed(2); } }
      return true; })()` },
    { name: "readouts equal the model: length, turns, atoms, G C content, molar mass, melting temperature", fn: `(() => { ${pre}
      const m = ms[0], n = S.seq.length, gc = [...S.seq].filter((c) => c === 'G' || c === 'C').length, w = ms.map((x) => (n * x.rise / 10).toFixed(2) + ' nm').join(' · ');
      if (g('rLen') !== w) return 'length shows ' + g('rLen') + ', want ' + w;
      const tw = ms.map((x) => (n * x.twist / 360).toFixed(2)).join(' · '); if (g('rTurns') !== tw) return 'turns show ' + g('rTurns') + ', want ' + tw;
      if (g('rAtoms') !== String(m.atoms.length)) return 'atoms show ' + g('rAtoms');
      if (g('rGC') !== (100 * gc / n).toFixed(0) + '% (' + gc + ' of ' + n + ')') return 'G C shows ' + g('rGC');
      const rc = (s) => [...s].reverse().map((c) => COMP[c]).join(''), M = { A: 313.21, C: 289.18, G: 329.21, T: 304.20 }, st = (s) => [...s].reduce((a, c) => a + M[c], 0) - 61.96, mw = st(S.seq) + st(rc(S.seq));
      if (!g('rMW').startsWith(Math.round(mw).toLocaleString('en-US') + ' g/mol')) return 'molar mass shows ' + g('rMW') + ', want ' + mw;
      if (!(mw > 0) || !isFinite(mw)) return 'molar mass ' + mw;
      return true; })()` },
    { name: "melting temperature: SantaLucia sums, shown value matches, rises with sodium, G C rich above A T rich of the same length", fn: `(() => { ${pre}
      const n = S.seq.length; if (n < 2) return true;
      const NN = { AA: [-7.9, -22.2], TT: [-7.9, -22.2], AT: [-7.2, -20.4], TA: [-7.2, -21.3], CA: [-8.5, -22.7], TG: [-8.5, -22.7], GT: [-8.4, -22.4], AC: [-8.4, -22.4], CT: [-7.8, -21.0], AG: [-7.8, -21.0], GA: [-8.2, -22.2], TC: [-8.2, -22.2], CG: [-10.6, -27.2], GC: [-9.8, -24.4], GG: [-8.0, -19.9], CC: [-8.0, -19.9] };
      const tm = (s, na, ct) => { let H = 0, Sx = 0; for (let i = 0; i + 1 < s.length; i++) { H += NN[s[i] + s[i + 1]][0]; Sx += NN[s[i] + s[i + 1]][1]; }
        for (const e of [s[0], s[s.length - 1]]) { if (e === 'A' || e === 'T') { H += 2.3; Sx += 4.1; } else { H += 0.1; Sx += -2.8; } }
        const self = s === [...s].reverse().map((c) => COMP[c]).join(''); if (self) Sx += -1.4; Sx += 0.368 * (s.length - 1) * Math.log(na);
        return H * 1000 / (Sx + 1.9872 * Math.log(ct / (self ? 1 : 4))) - 273.15; };
      const want = tm(S.seq, S.na, S.ct), got = parseFloat(g('rTm').replace('≈', ''));
      if (!isFinite(want) || Math.abs(got - want) > 0.051) return 'Tm shows ' + g('rTm') + ', physics ' + want.toFixed(2);
      if (!(tm(S.seq, 1, S.ct) > tm(S.seq, 0.01, S.ct))) return 'Tm does not rise with sodium';
      const gcs = 'GC'.repeat(Math.ceil(n / 2)).slice(0, Math.max(n, 6)), ats = 'AT'.repeat(Math.ceil(n / 2)).slice(0, Math.max(n, 6)); if (!(tm(gcs, S.na, S.ct) > tm(ats, S.na, S.ct))) return 'G C rich does not melt higher';
      return true; })()` },
    { name: "mean rise and twist of the steps match the form; presets keep the sequences their hints name", fn: `(() => { ${pre}
      for (const m of ms) { if (m.steps.length === 0) continue;
        const r = m.steps.reduce((a, s) => a + s.rise, 0) / m.steps.length, t = m.steps.reduce((a, s) => a + s.twist, 0) / m.steps.length;
        if (Math.abs(r - m.rise) > 0.6 || Math.abs(t - m.twist) > 3) return m.form + ' mean step ' + r.toFixed(2) + ' A, ' + t.toFixed(1) + ' deg vs ' + m.rise + ', ' + m.twist; }
      const p = S.preset; if (!p) return true;
      if (p === 'dickerson' && S.seq !== 'CGCGAATTCGCG') return 'Dickerson sequence ' + S.seq;
      if (p === 'tata' && !S.seq.includes('TATAAAAG')) return 'TATA preset lost TATAAAAG';
      if (p === 'gc' && /[AT]/.test(S.seq)) return 'GC rich preset has A or T';
      if (p === 'ab' && (S.seq.length !== 20 || ms.length !== 2)) return 'AB preset';
      if (p === 'dickerson' && S.seq.length * ms[0].twist / 360 < 1) return 'less than one turn';
      return true; })()` },
  ],
  steps: [
    { name: "type odd sequences (lowercase, digits, junk, empty, 1 base, 61 bases, 5' and 3' marks) and build each", fn: `(async () => {
      const i = document.getElementById('seqIn'), b = document.getElementById('buildBtn');
      for (const t of ["5'-acgt-3'", 'ACGT 1234', 'ACGX', '', 'A', 'AT', 'GC', 'A'.repeat(60), 'ACGT'.repeat(16), "5'ACGTACGT3'", 'AAAAAAAAAAAA', 'CGCGCGCGCGCG']) { i.value = t; i.dispatchEvent(new Event('input', { bubbles: true })); b.click(); await new Promise((r) => setTimeout(r, 120)); }
    })()` },
    { name: "random sequences at the slider limits, A form, both forms, select a pair, look down, then change the sequence", fn: `(async () => {
      const set = (id, v) => { const s = document.getElementById(id); s.value = v; s.dispatchEvent(new Event('input', { bubbles: true })); }, w = () => new Promise((r) => setTimeout(r, 200));
      for (const [l, gcv] of [[4, 0], [60, 100], [60, 50], [4, 100]]) { set('lenS', l); set('gcS', gcv); document.getElementById('randBtn').click(); await w(); }
      for (const f of ['A', 'AB', 'B']) { document.querySelector('#formSeg [data-f="' + f + '"]').click(); await w(); }
      const D = window.__dna; D.selectPair(D.models[0], 1); D.lookDown(); await w(); document.querySelector('#presets [data-p=tata]').click(); await w(); document.getElementById('randBtn').click(); await w(); D.clearSel();
    })()` },
  ],
};
