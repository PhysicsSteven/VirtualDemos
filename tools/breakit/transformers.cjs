/* Known values for the break-it test (tools/breakit.cjs), transformers. Hook: window.__tf (S, solve, line, trNow, lnNow).
   Recomputed here from the settings alone, then compared with the readouts at their shown digits:
   ideal model: V_S/V_P = N_S/N_P, I_S = V_S/R_L, I_P/I_S = N_S/N_P, power in = power out (efficiency 100%), and the peak core
   field B = sqrt2 V_P / (2 pi f N_P A); real model: power in = power out + copper loss, efficiency <= 1, V_S <= k V_P N_S/N_P with
   no load; power line: I = P/V, loss = I²R, delivered = P - loss, house voltage 240 (V - IR)/V; the cited presets (OpenStax 15.6:
   120 V to 12 V at 10 ohms 1.2 A; doorbell 110 to 9.0 V and 0.50 A; pole 12 kV to 240 V, 100 A, 24 kW; line 24 kW at 12 kV, 2.0 A,
   800 W lost, and 100 A with 2 MW at 240 V). */
const pre = `const T = window.__tf; if (!T) return true;
  const S = T.S, tr = S.tr, ln = S.ln, P = { G: 1e9, M: 1e6, k: 1e3, '': 1, m: 1e-3, 'µ': 1e-6, 'μ': 1e-6, n: 1e-9, p: 1e-12 };
  const dds = {}; for (const d of document.querySelectorAll('#out > div')) { const t = d.querySelector('dt'), v = d.querySelector('dd'); if (t && v) dds[t.textContent.trim()] = v.textContent.replace(/\\u2212/g, '-').trim(); }
  /* parse "12.34 kV": value and the half unit of its last shown digit */
  const num = (key) => { const s = dds[key]; if (s === undefined) return null; const m = s.match(/^(-?[\\d.]+(?:e[+-]?\\d+)?)\\s*([GMkmµμnp]?)(V|A|W|Ω|T|H|%)?/); if (!m) return { bad: s };
    const dec = (m[1].split('.')[1] || '').replace(/e.*/, '').length; return { v: parseFloat(m[1]) * P[m[2]], tol: 0.5 * Math.pow(10, -dec) * P[m[2]] * 1.0001 + 1e-15 }; };
  const eq = (key, want, name) => { const g = num(key); if (!g) return null; if (g.bad) return key + ' shows "' + g.bad + '"'; return Math.abs(g.v - want) <= g.tol + 1e-12 * Math.abs(want) ? null : key + ' shows ' + dds[key] + ', physics gives ' + want; };
  const A_CORE = { bench: 16e-4, pole: 225e-4 }[tr.core];
`;
module.exports = {
  checks: [
    { name: "ideal transformer: V_S/V_P = N_S/N_P, I_S = V_S/R, I_P N_P = I_S N_S, power in = out, B_pk = √2 V_P/(2πf N_P A)", fn: `(() => { ${pre}
      if (S.view !== 'tr' || tr.model !== 'ideal') return true;
      const n = tr.Ns / tr.Np, Vs = n * tr.Vp, Is = isFinite(tr.RL) ? Vs / tr.RL : 0, Ip = n * Is, B = Math.SQRT2 * tr.Vp / (2 * Math.PI * tr.f * tr.Np) / A_CORE;
      for (const e of [eq('VP (source)', tr.Vp), eq('VS (secondary)', Vs), eq('IP', Ip), eq('IS', Is), eq('Power in', tr.Vp * Ip), eq('Power out', Vs * Is), eq('Peak field in the core', B)]) if (e) return e;
      if (!S.blind && isFinite(tr.RL) && dds['Efficiency'] !== '100.00%') return 'ideal efficiency shows ' + dds['Efficiency'];
      const r = T.trNow(); if (Math.abs(r.Pin - r.Pout) > 1e-9 * Math.max(1, r.Pin)) return 'ideal Pin ' + r.Pin + ' != Pout ' + r.Pout;
      return true; })()` },
    { name: "real transformer: power in = power out + copper loss, efficiency <= 1, open circuit V_S <= k V_P N_S/N_P", fn: `(() => { ${pre}
      if (S.view !== 'tr' || tr.model !== 'real') return true;
      const r = T.trNow(); if (![r.Pin, r.Pout, r.Pcu, r.Bpk].every(isFinite)) return 'NaN or Infinity in the real model: ' + [r.Pin, r.Pout, r.Pcu, r.Bpk];
      if (Math.abs(r.Pin - r.Pout - r.Pcu) > 1e-9 * Math.max(1e-12, Math.abs(r.Pin))) return 'Pin ' + r.Pin + ' != Pout + Pcu ' + (r.Pout + r.Pcu);
      if (r.Pin < -1e-9 || r.Pout > r.Pin * (1 + 1e-9) + 1e-12) return 'power out ' + r.Pout + ' above power in ' + r.Pin;
      const vs = Math.hypot(r.Vs.re, r.Vs.im), lim = tr.k * tr.Vp * tr.Ns / tr.Np;
      if (vs > lim * (1 + 1e-9)) return 'V_S ' + vs + ' above k V_P N_S/N_P = ' + lim;
      if (!isFinite(tr.RL) && r.Pout !== 0) return 'no load but power out ' + r.Pout;
      for (const e of [eq('VP (source)', tr.Vp), eq('VS (secondary)', vs), eq('Power in', r.Pin), eq('Power out', r.Pout)]) if (e) return e;
      return true; })()` },
    { name: "power line: I = P/V, loss = I²R, delivered = P - loss, house voltage 240(V - IR)/V", fn: `(() => { ${pre}
      if (S.view !== 'line') return true;
      const I = ln.P / ln.VT, loss = I * I * ln.R;
      let e = eq('Line current I = P/V', I) || eq('Generator current (12 kV)', ln.P / 12000); if (e) return e;
      if (loss < ln.P && !S.blind) { e = eq('Line loss I²R', loss) || eq('Delivered', ln.P - loss) || eq('Voltage in the houses', 240 * (ln.VT - I * ln.R) / ln.VT); if (e) return e;
        const sh = parseFloat(dds['Share lost']); if (Math.abs(sh - 100 * loss / ln.P) > 0.0051 * Math.max(1, sh / 10) + 1e-9 * sh) return 'share lost shows ' + dds['Share lost'] + ', ' + 100 * loss / ln.P; }
      else if (loss >= ln.P && !S.blind && !/cannot/.test(document.getElementById('out').textContent)) return 'loss ' + loss + ' W reaches P = ' + ln.P + ' W but the page does not say the line cannot carry it';
      return true; })()` },
    { name: "cited presets: stepdown 120→12 V, 1.2 A; doorbell 9.0 V, 0.50 A; pole 240 V, 100 A, 24 kW; line 2.0 A, 800 W", fn: `(() => { ${pre}
      const p = S.preset, near = (a, b) => Math.abs(a - b) <= 1e-9 * Math.max(1, Math.abs(b));
      if (p === 'stepdown' && S.view === 'tr' && tr.model === 'ideal' && tr.Vp === 120 && tr.Np === 400 && tr.Ns === 40 && tr.RL === 10) { const r = T.trNow(); if (!near(Math.hypot(r.Vs.re, r.Vs.im), 12) || !near(Math.hypot(r.Is.re, r.Is.im), 1.2) || !near(Math.hypot(r.Ip.re, r.Ip.im), 0.12)) return 'stepdown: ' + JSON.stringify([r.Vs, r.Is, r.Ip]); }
      if (p === 'doorbell' && tr.Vp === 110 && tr.Np === 550 && tr.Ns === 45 && tr.RL === 18) { const r = T.trNow(); if (!near(Math.hypot(r.Vs.re, r.Vs.im), 9) || !near(Math.hypot(r.Is.re, r.Is.im), 0.5)) return 'doorbell gives ' + Math.hypot(r.Vs.re, r.Vs.im) + ' V, ' + Math.hypot(r.Is.re, r.Is.im) + ' A (OpenStax: 9.0 V, 0.50 A)'; }
      if (p === 'pole' && tr.Vp === 12000 && tr.Np === 2500 && tr.Ns === 50 && tr.RL === 2.4) { const r = T.trNow(); if (!near(Math.hypot(r.Vs.re, r.Vs.im), 240) || !near(Math.hypot(r.Is.re, r.Is.im), 100) || !near(r.Pout, 24000)) return 'pole gives ' + Math.hypot(r.Vs.re, r.Vs.im) + ' V, ' + Math.hypot(r.Is.re, r.Is.im) + ' A, ' + r.Pout + ' W'; }
      if (p === 'line' && ln.P === 24000 && ln.VT === 12000 && ln.R === 200) { const L = T.lnNow(); if (!near(L.I, 2) || !near(L.loss, 800)) return 'line gives ' + L.I + ' A, ' + L.loss + ' W'; const L2 = T.line(24000, 240, 200); if (!near(L2.I, 100) || !near(L2.loss, 2e6) || L2.ok) return '240 V line: ' + L2.I + ' A, ' + L2.loss + ' W, ok ' + L2.ok; }
      return true; })()` },
  ],
  steps: [
    { name: 'every preset, every stepped slider to its ends (RL open, Ns >> Np, f extremes), real model with k at 0 and 1, both cores, line view and back', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), T = window.__tf;
      for (const b of document.querySelectorAll('#presets button')) { b.click(); await pause(120); }
      document.querySelector('#modelSeg [data-m=real]').click(); await pause(100);
      for (const id of ['sVp', 'sF', 'sNp', 'sNs', 'sRL', 'sK']) { const e = document.getElementById(id); for (const v of [e.min, e.max, e.min]) { e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); await pause(60);
        for (const c of ['pole', 'bench']) { document.querySelector('#coreSeg [data-c=' + c + ']').click(); await pause(30); } } }
      document.querySelector('#viewSeg [data-v=line]').click(); await pause(100);
      for (const id of ['sP', 'sVT', 'sRline']) { const e = document.getElementById(id); for (const v of [e.min, e.max, e.min]) { e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); await pause(60); } }
      document.querySelector('#presets [data-p=stepdown]').click(); await pause(200);
    })()` },
  ],
};
