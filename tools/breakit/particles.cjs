/* Known values for the break-it test (tools/breakit.cjs), particles. Hook: window.__pq (S, D, rxCheck, dtMeasure, makeEvent, ...).
   Reactions: an allowed verdict means every conserved number matches before and after; W is at least the rest energy needed
   for an allowed reaction, the energy to spare is W minus the rest energy after, and the W readout equals the check.
   Quark builder: the Q and B readouts equal the sums over the quarks on the slots (anti quarks count with a minus sign).
   Detector: p = 2.99792458 B r (MeV/c, B in T, r in cm); an event is the same every time it is made again (seeded); the true
   Lambda and K0 short in each V have the invariant mass of the parent. */
const pre = `const Q = window.__pq; if (!Q) return true; const S = Q.S;
  const rd = (label) => { for (const d of document.querySelectorAll('#out > div')) { if (d.firstElementChild.textContent.trim() === label) return d.lastElementChild.textContent.replace(/\\u2212/g, '-'); } return null; };
  const num = (t) => { if (t == null) return NaN; const m = String(t).match(/^([+-]?)(\\d+)(?:\\/(\\d+))?/); if (!m) return t === '0' ? 0 : NaN; const v = m[3] ? +m[2] / +m[3] : +m[2]; return m[1] === '-' ? -v : v; };
`;
module.exports = {
  checks: [
    { name: "reactions: allowed means conserved; W, energy to spare and verdict agree with the check", fn: `(() => { ${pre}
      if (S.view !== 'rx' || !(S.rx.a.length && S.rx.b.length)) return true;
      const c = Q.rxCheck();
      if (![c.W, c.need, c.spare].every(Number.isFinite) && !(c.threshold === Infinity)) return 'W, need or spare is not finite: ' + [c.W, c.need, c.spare];
      if (c.ok) { for (const k of ['Q', 'B', 'Le', 'Lm', 'Lt']) if (Math.abs(c.ta[k] - c.tb[k]) > 1e-9) return 'allowed but ' + k + ' goes ' + c.ta[k] + ' -> ' + c.tb[k];
        if (c.spare < -1e-6 && !c.res) return 'allowed with W below the rest energy: ' + c.spare; }
      if (Math.abs(c.spare - (c.W - c.need)) > 1e-9) return 'spare != W - need';
      if (S.blind) return true;
      const w = rd('W (MeV)'); if (w !== null && Math.abs(parseFloat(w) - c.W) > 0.0051 + 1e-9 * Math.abs(c.W)) return 'W shows ' + w + ', check gives ' + c.W;
      const sp = rd('Energy to spare (MeV)'); if (sp !== null && Math.abs(parseFloat(sp) - c.spare) > 0.0051 + 1e-9 * Math.abs(c.spare)) return 'spare shows ' + sp + ', check gives ' + c.spare;
      const v = rd('Verdict'); if (v !== null && (c.ok !== /^allowed/.test(v))) return 'verdict shows "' + v + '", check ok = ' + c.ok;
      return true; })()` },
    { name: "reactions: at the threshold beam energy W equals the rest energy after", fn: `(() => { ${pre}
      if (S.view !== 'rx' || S.rx.a.length !== 2 || !S.rx.b.length) return true;
      const c = Q.rxCheck(); if (!isFinite(c.threshold)) return true;
      const save = S.rx.en; S.rx.en = c.threshold; const t = Q.rxCheck(); S.rx.en = 0; const z = Q.rxCheck(); S.rx.en = save;
      if (z.W >= z.need - 1e-9) return true;      /* the beam can be at zero and still have enough: the threshold is clipped */
      return Math.abs(t.W - t.need) <= 1e-6 * t.need + 1e-6 ? true : 'at the threshold W = ' + t.W + ', rest energy after = ' + t.need; })()` },
    { name: "quark builder: Q and B readouts equal the sums over the quarks", fn: `(() => { ${pre}
      if (S.view !== 'qk' || S.blind) return true;
      const q = { u: 2 / 3, d: -1 / 3, s: -1 / 3, c: 2 / 3, b: -1 / 3, t: 2 / 3 }; let Qs = 0, nq = 0;
      for (const s of S.qk.slots) if (s && s.f) { const sg = s.anti ? -1 : 1; Qs += sg * q[s.f]; nq += sg; }
      const qr = rd('Charge Q'), br = rd('Baryon number B'); if (qr === null) return true;
      const qq = num(qr.replace(/ e$/, '')), bb = num(br);
      if (Math.abs(qq - Qs) > 1e-9) return 'Charge readout ' + qr + ', sum of quark charges ' + Qs;
      if (Math.abs(bb - nq / 3) > 1e-9) return 'Baryon number readout ' + br + ', quarks give ' + nq / 3;
      return true; })()` },
    { name: "detector: p = 2.99792458 B r from the fitted circle", fn: `(() => { ${pre}
      if (S.view !== 'dt') return true;
      const m = Q.dtMeasure(), B = Q.D.B;
      for (const [fit, p] of [[m.fp, m.pp], [m.fm, m.pm]]) { if (!fit) continue;
        if (!Number.isFinite(fit.r) || !Number.isFinite(p)) return 'fit radius or momentum is ' + fit.r + ', ' + p;
        if (Math.abs(p - 2.99792458 * B * fit.r) > 1e-9 * Math.abs(p) + 1e-12) return 'p = ' + p + ', 2.998 B r = ' + 2.99792458 * B * fit.r; }
      return true; })()` },
    { name: "detector: the same event again is identical; each true V has its parent's mass", fn: `(() => { ${pre}
      if (S.view !== 'dt') return true; const D = Q.D; if (!D.ev) return 'no event';
      const again = Q.makeEvent(D.n, D.B, D.pb, D.sig);
      if (JSON.stringify(again) !== JSON.stringify(D.ev)) return 'event ' + D.n + ' is not the same when made again';
      const M = (a, b, th, m1, m2) => { const E1 = Math.hypot(m1, a), E2 = Math.hypot(m2, b); return Math.sqrt(m1 * m1 + m2 * m2 + 2 * (E1 * E2 - a * b * Math.cos(th))); };
      for (const v of D.ev.vees || []) { if (!v.plus || !v.minus || !(v.theta > 0)) continue;
        const mm = v.parent === 'Lambda' ? M(v.plus.p, v.minus.p, v.theta, 938.27208943, 139.57039) : M(v.plus.p, v.minus.p, v.theta, 139.57039, 139.57039), want = v.parent === 'Lambda' ? 1115.683 : 497.611;
        if (Math.abs(mm - want) > 0.5) return v.parent + ' V: invariant mass of its true tracks ' + mm.toFixed(2) + ', should be ' + want; }
      return true; })()` },
  ],
  steps: [
    { name: 'every view: build reactions with 1, 2 and 3 particles, collider and fixed target, threshold button, odd energies', fn: `(async () => {
      const Q = window.__pq, pause = (ms) => new Promise((r) => setTimeout(r, ms));
      for (const k of ['beta', 'assoc', 'upsilon', 'beta']) { Q.applyPreset(k); await pause(150); }
      const en = document.getElementById('nE');
      for (const v of ['0', '1e9', '-5', '0.0001']) { if (en) { en.value = v; en.dispatchEvent(new Event('input', { bubbles: true })); en.dispatchEvent(new Event('change', { bubbles: true })); } await pause(100); }
      for (const b of document.querySelectorAll('#modeSeg button, #thrBtn')) { b.click(); await pause(100); }
      Q.applyPreset('proton'); await pause(150);
    })()` },
    { name: 'detector: fit points anywhere (3 on one spot, collinear), measure the angle, step events to 1 and 9999, zoom out and in', fn: `(async () => {
      const Q = window.__pq, pause = (ms) => new Promise((r) => setTimeout(r, ms));
      Q.applyPreset('mystery'); await pause(150);
      for (const w of [[0, 0], [0, 0], [0, 0], [5, 5], [10, 10], [15, 15], [20, 20]]) Q.placePoint(w);
      document.querySelector('#toolSeg [data-t]:not([aria-pressed=true])').click(); await pause(50);
      for (const w of [[0, 0], [0, 0], [0, 0]]) Q.placePoint(w);
      for (const n of [1, 0, 9999, 10000, 5]) { Q.goEvent(n); await pause(80); }
      document.querySelector('#signSeg [data-s]:not([aria-pressed=true])').click(); await pause(50);
      for (const w of [[1, 1], [2, 2], [3, 3.0000001]]) Q.placePoint(w);
      await pause(100);
    })()` },
  ],
};
