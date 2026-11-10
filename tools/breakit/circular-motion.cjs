/* Known values for the break-it test (tools/breakit.cjs), circular-motion. No debug hook: the checks recompute the physics from the
   sliders (#sV, #sR, #sM, #sMu, #sB) and compare the #out readouts, which refresh only on input, so they hold while it runs.
   String: a = v²/r, T = mv²/r, period 2πr/v. Flat curve: top speed √(μs g r), needed force mv²/r. Banked curve: N and friction from the
   two force balances, ideal speed √(rg tan θ); at the ideal speed no friction. Conical pendulum: r = L sin θ, h = L cos θ, T = mg/cos θ,
   a = g tan θ, period 2π√(h/g), v = ωr. Rotor: N = mv²/R, least speed √(gR/μs), at that speed μs N = mg. Loop: weight mg, √(5gr), √(gr). */
const pre = `const G = 9.81, $ = (i) => document.getElementById(i);
  const on = document.querySelector('#presets [aria-pressed=true]'); if (!on) return true; const P = on.dataset.p;
  const v = +$('sV').value, r = +$('sR').value, m = +$('sM').value, mu = +$('sMu').value, b = +$('sB').value;
  const rows = {}; for (const d of document.querySelectorAll('#out > div')) { const t = d.querySelector('dt'), e = d.querySelector('dd'); if (t && e) rows[t.textContent.trim()] = e.textContent.replace(/\\u2212/g, '-'); }
  const num = (k) => { const s = rows[k]; if (s === undefined) return NaN; const x = parseFloat(s); return x; };
  const dec = (k) => { const s = (rows[k] || '').match(/^-?\\d+(?:\\.(\\d+))?/); return s ? (s[1] ? s[1].length : 0) : 0; };
  const ok = (k, want) => { const got = num(k); if (!isFinite(want)) return true; const tol = 0.5 * 10 ** -dec(k) + 1e-9; return Math.abs(got - want) <= tol ? true : k + ' shows ' + rows[k] + ', physics gives ' + want; };
  if (document.getElementById('out').textContent.includes('hidden in Blind')) return true;
`;
module.exports = {
  checks: [
    { name: "string: a = v²/r, T = mv²/r, period 2πr/v", fn: `(() => { ${pre}
      if (P !== 'string') return true;
      return ok('a = v²/r', v * v / r) === true ? (ok('Tension T = mv²/r', m * v * v / r) === true ? ok('Period 2πr/v', 2 * Math.PI * r / v) : ok('Tension T = mv²/r', m * v * v / r)) : ok('a = v²/r', v * v / r); })()` },
    { name: "flat curve: top speed √(μs g r), needed force mv²/r, most friction μs mg", fn: `(() => { ${pre}
      if (P !== 'flat') return true;
      for (const [k, w] of [['Needed mv²/r', m * v * v / r], ['Most friction μs mg', mu * m * G], ['a = v²/r', v * v / r], ['Top speed √(μs g r)', Math.sqrt(mu * G * r)]]) { const o = ok(k, w); if (o !== true) return o; }
      return true; })()` },
    { name: "banked curve: force balances, ideal speed, no friction at the ideal speed", fn: `(() => { ${pre}
      if (P !== 'bank') return true;
      const th = b * Math.PI / 180, c = Math.cos(th), s = Math.sin(th), ac = v * v / r, N = m * (G * c + ac * s), f = m * (ac * c - G * s);
      for (const [k, w] of [['Needed mv²/r', m * ac], ['Normal force N', N], ['Friction needed', Math.abs(f)], ['Most friction μs N', mu * N], ['Ideal speed √(rg tan θ)', Math.sqrt(r * G * Math.tan(th))]]) { const o = ok(k, w); if (o !== true) return o; }
      if (Math.abs(N * c - f * s - m * G) > 1e-6 * m * G) return 'vertical balance fails';
      if (Math.abs(N * s + f * c - m * ac) > 1e-6 * m * G) return 'horizontal balance fails';
      const vmax = c - mu * s <= 0 ? Infinity : Math.sqrt(r * G * (s + mu * c) / (c - mu * s)), vmin = s <= mu * c ? 0 : Math.sqrt(r * G * (s - mu * c) / (c + mu * s));
      const al = rows['Allowed speeds'] || '', mm = al.match(/^(-?[\\d.]+) to (.+) m\\/s$/); if (!mm) return 'odd allowed speeds text ' + al;
      if (Math.abs(+mm[1] - vmin) > 0.051) return 'lowest allowed speed shows ' + mm[1] + ', physics ' + vmin;
      if (isFinite(vmax) ? Math.abs(parseFloat(mm[2]) - vmax) > 0.051 : !/∞/.test(mm[2])) return 'highest allowed speed shows ' + mm[2] + ', physics ' + vmax;
      return true; })()` },
    { name: "conical pendulum: r = L sin θ, h = L cos θ, T = mg/cos θ, a = g tan θ, period 2π√(h/g), v = ωr", fn: `(() => { ${pre}
      if (P !== 'cone') return true;
      const th = b * Math.PI / 180, h = r * Math.cos(th), rr = r * Math.sin(th), w = Math.sqrt(G / h);
      for (const [k, x] of [['Radius r = L sin θ', rr], ['Height h = L cos θ', h], ['Speed v', w * rr], ['a = v²/r = g tan θ', G * Math.tan(th)], ['Tension T = mg/cos θ', m * G / Math.cos(th)], ['Period 2π√(h/g)', 2 * Math.PI / w]]) { const o = ok(k, x); if (o !== true) return o; }
      if (Math.abs((w * rr) ** 2 / rr - G * Math.tan(th)) > 1e-9) return 'v²/r != g tan θ';
      return true; })()` },
    { name: "rotor: N = mv²/R, least speed √(gR/μs), at that speed friction equals the weight", fn: `(() => { ${pre}
      if (P !== 'rotor') return true;
      const N = m * v * v / r;
      for (const [k, x] of [['Wall push N = mv²/R', N], ['Most friction μs N', mu * N], ['Weight mg', m * G], ['a = v²/R', v * v / r]]) { const o = ok(k, x); if (o !== true) return o; }
      if (mu > 0) { const vm = Math.sqrt(G * r / mu), o = ok('Least wall speed √(gR/μs)', vm); if (o !== true) return o; if (Math.abs(mu * m * vm * vm / r - m * G) > 1e-9 * m * G) return 'at v_min friction is not mg'; }
      const hold = mu * N >= m * G - 1e-9, t = rows['When the floor drops'] || '';
      if (hold !== /stay up/.test(t)) return 'floor drops: ' + t + ' but μs N ' + (hold ? '>=' : '<') + ' mg';
      return true; })()` },
    { name: "loop: weight, least speed √(5gr) at the bottom and √(gr) at the top", fn: `(() => { ${pre}
      if (P !== 'loop') return true;
      for (const [k, x] of [['Weight mg', m * G], ['Least speed at the bottom √(5gr)', Math.sqrt(5 * G * r)], ['At the top, needs v ≥ √(gr)', Math.sqrt(G * r)]]) { const o = ok(k, x); if (o !== true) return o; }
      return true; })()` },
  ],
  steps: [
    { name: 'Every setup at its slider extremes, then Cut / Drop the floor, then switch setups mid release', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (i) => document.getElementById(i);
      const set = (id, val) => { const e = $(id); e.value = val; e.dispatchEvent(new Event('input', { bubbles: true })); };
      for (const p of ['bank', 'cone', 'rotor', 'speed', 'loop', 'flat', 'string']) {
        document.querySelector('#presets [data-p=' + p + ']').click(); await pause(150);
        for (const id of ['sV', 'sR', 'sM', 'sMu', 'sB', 'sAt']) { const e = $(id); for (const val of [e.max, e.min, e.max]) { set(id, val); await pause(50); } }
        if (!$('cut').hidden) { $('cut').click(); await pause(300); }
      }
      document.querySelector('#presets [data-p=rotor]').click(); await pause(100); $('cut').click(); await pause(300);
      document.querySelector('#presets [data-p=cone]').click(); await pause(100); $('cut').click(); await pause(200);
      document.querySelector('#presets [data-p=string]').click(); await pause(300);
    })()` },
  ],
};
