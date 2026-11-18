/* Known values for the break-it test (tools/breakit.cjs), induction. Hooks: window.__ind (S, geom), window.__pol.
   Two sphere setups (not Shapes, Polarization or Rubbing): the exact image charge solution has each sphere an equipotential at the
   shown potential (checked from the image charges at points on both surfaces), VA = VB when joined by the wire, V = 0 on a grounded
   sphere, Gauss: the image charges inside a sphere add up to its net charge, the readouts equal the solution, the "air would spark"
   flag follows 3 MV/m. Rubbing: the charge on the rod and the cloth are equal and opposite, the electrons moved are Q/e, σ = Q/(2πRL),
   the field σ/ε0 never passes air's 3 MV/m. Polarization: the balance reads −(F − Tare)/g. */
const pre = `const I = window.__ind; if (!I) return true; const S = I.S;
  const K = 1 / (4 * Math.PI * 8.8541878188e-12), EPS0 = 8.8541878188e-12, NC = 1e-9;
  const SUP = { '⁰': 0, '¹': 1, '²': 2, '³': 3, '⁴': 4, '⁵': 5, '⁶': 6, '⁷': 7, '⁸': 8, '⁹': 9 };
  const rd = (label) => { for (const dt of document.querySelectorAll('#out dt')) if (dt.textContent === label) return dt.nextElementSibling.textContent.replace(/\\u2212/g, '-'); return null; };
  const num = (t) => (t == null ? NaN : parseFloat(t));
  const sph = S.preset !== 'shapes' && S.preset !== 'polar' && S.preset !== 'rub' && S.preset !== 'spark';
`;
module.exports = {
  checks: [
    { name: "spheres: each is an equipotential at the shown V; wire, ground and Gauss hold for the image charges", fn: `(() => { ${pre}
      if (!sph || !S.sol) return true;
      const sol = S.sol, g = I.geom(), V = [sol.VA, sol.VB];
      if (![sol.VA, sol.VB, sol.QA, sol.QB].every(isFinite)) return 'a potential or charge is not finite';
      const scale = Math.max(Math.abs(sol.VA), Math.abs(sol.VB), 1e-6);
      if (S.wire && Math.abs(sol.VA - sol.VB) > 1e-9 * scale) return 'joined by the wire but VA = ' + sol.VA + ', VB = ' + sol.VB;
      if (S.gA && sol.VA !== 0) return 'A is grounded but VA = ' + sol.VA;
      if (S.gB && sol.VB !== 0) return 'B is grounded but VB = ' + sol.VB;
      const Vat = (x, y) => { let v = 0; for (const c of sol.charges) v += K * c.q / Math.hypot(x - c.x, y - c.y); return v; };
      let err = null;
      [g.A, g.B].forEach((Sp, i) => { for (const th of [0.3, 1.4, 2.6, 3.9, 5.2]) { const v = Vat(Sp.c + Sp.r * Math.cos(th) * (1 + 1e-7), Sp.r * Math.sin(th) * (1 + 1e-7)); if (!err && Math.abs(v - V[i]) > 2e-3 * scale) err = (i ? 'B' : 'A') + ' surface potential ' + v + ' at angle ' + th + ', but V = ' + V[i]; } });
      if (err) return err;
      const inside = (id) => sol.charges.reduce((s, c) => s + (c.inside === id ? c.q : 0), 0), qs = Math.max(...sol.charges.map((c) => Math.abs(c.q)), 1e-15);
      if (Math.abs(inside('A') - sol.QA) > 1e-9 * qs || Math.abs(inside('B') - sol.QB) > 1e-9 * qs) return 'image charges inside A, B: ' + inside('A') + ', ' + inside('B') + ' but QA, QB = ' + sol.QA + ', ' + sol.QB;
      return true; })()` },
    { name: "spheres: the readouts equal the solution (Q, V, A + B, the spark flag at 3 MV/m)", fn: `(() => { ${pre}
      if (!sph || !S.sol || S.blind || I.moving()) return true;
      const sol = S.sol, nc = (v) => Math.round(v / NC * 1000) / 1000;
      const a = rd('Net charge on A'), b = rd('Net charge on B'), va = rd('Potential of A'), vb = rd('Potential of B'), t = rd('A + B');
      if (a == null) return true;
      if (Math.abs(num(a) - sol.QA / NC) > 0.0051 || Math.abs(num(b) - sol.QB / NC) > 0.0051) return 'charges show ' + a + ', ' + b + '; solution ' + sol.QA / NC + ', ' + sol.QB / NC + ' nC';
      if (Math.abs(num(va) - sol.VA) > 0.51 || Math.abs(num(vb) - sol.VB) > 0.51) return 'potentials show ' + va + ', ' + vb + '; solution ' + sol.VA + ', ' + sol.VB;
      if (Math.abs(num(t) - (sol.QA + sol.QB) / NC) > 0.0051) return 'A + B shows ' + t + ', solution ' + (sol.QA + sol.QB) / NC;
      for (const [lab, pk] of [["Largest field at A's surface", sol.peakA], ["Largest field at B's surface", sol.peakB]]) { const r = rd(lab); if (r == null) continue;
        const E = Math.abs(pk.sigma) / EPS0; if (Math.abs(num(r) - E / 1e6) > 0.0051) return lab + ' shows ' + r + ', σ/ε0 = ' + E / 1e6 + ' MV/m';
        if (/spark/.test(r) !== (E > 3e6)) return lab + ' says "' + r + '" at ' + E / 1e6 + ' MV/m'; }
      return true; })()` },
    { name: "rubbing: rod and cloth equal and opposite, electrons = Q/e, σ = Q/(2πRL), the field stays under 3 MV/m", fn: `(() => { ${pre}
      if (S.preset !== 'rub' || S.blind || S.rubAnim) return true;
      const Q = S.rubQ, E = 1.602176634e-19, A = 2 * Math.PI * 0.005 * 0.05, e = rd('Electrons moved'); if (e == null) return true;
      if (Math.abs(num(rd('Charge on the rod')) - Q / NC) > 0.0051 || Math.abs(num(rd('Charge on the cloth')) + Q / NC) > 0.0051) return 'rod ' + rd('Charge on the rod') + ', cloth ' + rd('Charge on the cloth') + ', Q = ' + Q / NC + ' nC';
      let n = 0; if (e !== '0') { const m = e.match(/^([\\d.]+) × 10(⁻?)([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/); if (!m) return 'electrons moved "' + e + '"'; let x = 0; for (const c of m[3]) x = x * 10 + SUP[c]; n = parseFloat(m[1]) * Math.pow(10, m[2] ? -x : x); }
      if (Math.abs(n - Math.abs(Q) / E) > 6e-3 * Math.abs(Q) / E) return 'electrons moved ' + e + ', |Q|/e = ' + Math.abs(Q) / E;
      const sg = num(rd('σ on the rubbed end')), fld = num(rd('Field just outside, σ/ε₀'));
      if (Math.abs(sg - Q / A * 1e6) > 0.0051) return 'σ shows ' + rd('σ on the rubbed end') + ', Q/A = ' + Q / A * 1e6 + ' µC/m²';
      if (Math.abs(fld - Math.abs(Q) / A / EPS0 / 1e6) > 0.0051) return 'field shows ' + rd('Field just outside, σ/ε₀') + ', σ/ε0 = ' + Math.abs(Q) / A / EPS0 / 1e6;
      if (fld > 3.0051) return 'the rubbed rod holds a field of ' + fld + ' MV/m, past the 3 MV/m of air breakdown';
      return true; })()` },
    { name: "build up and spark: A never holds more than the gap allows; readouts equal the solution; touching grounds A", fn: `(() => { ${pre}
      const P = window.__spark; if (S.preset !== 'spark' || !P) return true;
      const SP = P.SP, g = P.geom();
      if (![SP.QA, SP.sig, SP.gap].every(isFinite)) return 'a value is not finite';
      if (!g) return SP.QA === 0 ? true : 'B touches A but A holds ' + SP.QA;
      if (Math.abs(SP.QA) > g.Qs * (1 + 1e-9)) return 'A holds ' + SP.QA / NC + ' nC, past the spark charge ' + g.Qs / NC;
      if (SP.sig > 0) return 'Teflon rubbed with a cloth above it in the series turned positive';
      if (S.blind || SP.anim || SP.rubA) return true;
      const v = rd('Voltage of A'), q = rd('Charge on A'), sp = rd('This gap sparks at'); if (v == null) return true;
      if (Math.abs(num(v) - SP.QA * g.V1 / 1000) > 0.0051 + 0.002 * Math.abs(SP.QA * g.V1 / 1000)) return 'Voltage of A shows ' + v + ', Q V1 = ' + SP.QA * g.V1 / 1000;
      if (Math.abs(num(q) - SP.QA / NC) > 0.051 + 0.002 * Math.abs(SP.QA / NC)) return 'Charge on A shows ' + q + ', solution ' + SP.QA / NC;
      if (Math.abs(num(sp) - g.Vs / 1000) > 0.051) return 'spark voltage shows ' + sp + ', solution ' + g.Vs / 1000;
      return true; })()` },
    { name: "polarization: the balance reads −(F − Tare)/g (a pull up lightens the pan), the pull is toward the rod", fn: `(() => { ${pre}
      if (S.preset !== 'polar' || !S.pol) return true;
      const o = S.pol; if (![o.F, o.Fd, o.mg, o.D].every(isFinite)) return 'a polarization value is not finite';
      if (o.F < 0) return 'F = ' + o.F + ': the pull on a neutral ball must be toward the rod';
      if (Math.abs(o.mg + (o.F - S.tare) / 9.81 * 1e6) > 0.0051 + 1e-9) return 'balance reads ' + o.mg + ' mg, −(F − Tare)/g = ' + -(o.F - S.tare) / 9.81 * 1e6;
      return true; })()` },
  ],
  steps: [
    { name: 'induce, then ground, wire, remove the rod, ground off, pull B away, back to contact', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), c = (sel) => { const b = document.querySelector(sel); if (b) b.click(); }, I = window.__ind;
      const ev = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      const chk = (id, on) => { const e = document.getElementById(id); if (e && e.checked !== on) e.click(); };
      c('[data-p=induce]'); await pause(200); ev('sQ', 20); ev('sD', 1); await pause(200); chk('wire', true); chk('gA', true); await pause(300); chk('gA', false); chk('wire', false); await pause(200);
      c('#rodAway'); await pause(300); ev('sG', 0); await pause(200); ev('sG', 12); await pause(200); ev('sRB', 0.5); ev('sRB', 15); await pause(200);
      c('[data-p=ground]'); await pause(200); ev('sQ', -20); ev('sD', 1); chk('gB', true); chk('gA', true); chk('wire', true); await pause(300);
      c('[data-p=contact]'); await pause(300);
    })()` },
    { name: 'rub and take the rod to the spheres; polarization at the smallest gap with every ball', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), c = (sel) => { const b = document.querySelector(sel); if (b) b.click(); };
      const ev = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      c('[data-p=rub]'); await pause(200); for (let i = 0; i < 4; i++) { c('#rub10'); await pause(150); } await pause(2500); c('#rubTake'); await pause(400);
      c('[data-p=polar]'); await pause(200); const on = document.getElementById('rodP'); if (on && !on.checked) on.click(); ev('sS', 0); ev('sQp', 20);
      for (const b of document.querySelectorAll('#ballChips button')) { b.click(); await pause(150); } await pause(1500);
    })()` },
    { name: 'build up and spark: rub, pump while switching, gap and humidity to their ends, knuckle, ground, Blind, leave mid pump', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), c = (sel) => { const b = document.querySelector(sel); if (b) b.click(); };
      const ev = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      c('[data-p=spark]'); await pause(200); c('#spRub'); await pause(200); c('#spRub'); await pause(3500); c('#spPump10'); c('#spPump10'); await pause(2000);
      ev('spGap', 0.5); await pause(300); ev('spGap', 40); ev('spRH', 90); await pause(300); ev('spRH', 10); c('#spCloth [data-c=silk]'); c('#spB [data-b=knuckle]'); await pause(4000);
      c('#spUpC'); c('#spUpC'); c('#spUpG'); c('#labBlind'); await pause(300); c('#spGround'); await pause(3000); c('#labBlind'); c('#next'); c('#next'); c('#next'); await pause(800); c('#next'); await pause(2500);
      c('#spPump1'); await pause(500); c('[data-p=induce]'); await pause(400); c('[data-p=spark]'); await pause(300);
    })()` },
  ],
};
