/* Known values for the break-it test (tools/breakit.cjs), quantum-coin. Hook: window.__qc (S, applyPreset, measure).
   Worked again here, a different route from the page's functions: the readouts equal the physics of the live setup (expected
   heads fraction cos^2(theta/2) = (1 + cos theta)/2 and independent of the phase; gamma and cos^2(gamma/2) = (1 + cos gamma)/2 for
   the state and axis; the expected up and down fractions of a row of Stern-Gerlach magnets from a probability tree, with
   up + down + blocked = 1); the counts add up to N, the shown fractions equal counts / N, and the measured fractions sit within
   5.5 standard errors of the expected ones. The presets say what their hints say (3/4 for 60 degrees, 1/8 at each counter for z, x, z). */
const pre = `const Q = window.__qc; if (!Q) return true;
  const S = Q.S, D = Math.PI / 180, rd = (a) => { for (const d of document.querySelectorAll('#out > div')) if (d.querySelector('dt').textContent === a) return d.querySelector('dd').textContent.replace(/\\u2212/g, '-'); return null; };
  const vec = (t, f) => [Math.sin(t * D) * Math.cos(f * D), Math.sin(t * D) * Math.sin(f * D), Math.cos(t * D)];
  const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  /* a probability tree: the beam is unpolarized, so it starts as two equal branches along +n1 and -n1 */
  const tree = (mags) => {
    let br = [[0.5, vec(mags[0].a, 0)], [0.5, vec(mags[0].a, 0).map((c) => -c)]], blocked = 0, up = 0, down = 0;
    for (let i = 0; i < mags.length; i++) {
      const n = vec(mags[i].a, 0), mn = n.map((c) => -c), last = i === mags.length - 1;
      if (i === 0) { if (last) { up = 0.5; down = 0.5; } else { const k = mags[0].keep; br = k === 'up' ? [br[0]] : k === 'down' ? [br[1]] : br; blocked += k === 'up' ? 0.5 : k === 'down' ? 0.5 : 0; } continue; }
      const nb = []; let nu = 0, nd = 0;
      for (const [w, s] of br) { const p = (1 + dot(s, n)) / 2; nu += w * p; nd += w * (1 - p); }
      if (last) { up = nu; down = nd; break; }
      const k = mags[i].keep;
      if (k !== 'down') nb.push([nu, n]); else blocked += nu;
      if (k !== 'up') nb.push([nd, mn]); else blocked += nd;
      br = nb;
    }
    return { up, down, blocked };
  };
  const sigma = (N, p) => Math.sqrt(Math.max(p * (1 - p), 1e-12) / N);
`;
module.exports = {
  checks: [
    { name: "coins: expected heads (1 + cos theta)/2 does not depend on the phase; counts add up; fractions equal counts / N", fn: `(() => { ${pre}
      if (S.mode !== 'coin') return true;
      const pq = (1 + Math.cos(S.tq * D)) / 2, Nc = S.cc[0] + S.cc[1], Nq = S.qc[0] + S.qc[1];
      if (!S.blind && Math.abs(parseFloat(rd('Expected |a|²')) - pq) > 0.00051) return 'Expected |a|² shows ' + rd('Expected |a|²') + ', cos²(θ/2) = ' + pq;
      if (!S.blind && Math.abs(parseFloat(rd('Expected')) - S.pc) > 0.00051) return 'Expected (ordinary) shows ' + rd('Expected') + ', chance of heads ' + S.pc;
      if (Nc !== Nq && S.cc.concat(S.qc).some((v) => v < 0)) return 'negative count';
      if (Nc && Math.abs(parseFloat(rd('Ordinary: heads fraction')) - S.cc[0] / Nc) > 0.00051) return 'ordinary fraction shows ' + rd('Ordinary: heads fraction');
      if (Nq && Math.abs(parseFloat(rd('Quantum: heads fraction')) - S.qc[0] / Nq) > 0.00051) return 'quantum fraction shows ' + rd('Quantum: heads fraction');
      if (Nq >= 200) { const z = Math.abs(S.qc[0] / Nq - pq) / sigma(Nq, pq); if (z > 5.5) return 'quantum heads fraction ' + S.qc[0] / Nq + ' is ' + z.toFixed(1) + ' sigma from ' + pq; }
      if (Nc >= 200) { const z = Math.abs(S.cc[0] / Nc - S.pc) / sigma(Nc, S.pc); if (z > 5.5) return 'ordinary heads fraction is ' + z.toFixed(1) + ' sigma from ' + S.pc; }
      return true; })()` },
    { name: "spin: gamma = angle between state and axis, expected up fraction cos^2(gamma/2); counts agree", fn: `(() => { ${pre}
      if (S.mode !== 'spin') return true;
      const s = vec(S.ts, S.fs), n = vec(S.ta, S.fa), c = Math.max(-1, Math.min(1, dot(s, n))), g = Math.acos(c) / D, pu = (1 + c) / 2, N = S.sp[0] + S.sp[1];
      if (Math.abs(parseFloat(rd('Angle γ between state and axis')) - g) > 0.0501) return 'gamma shows ' + rd('Angle γ between state and axis') + ', angle ' + g;
      if (!S.blind && Math.abs(parseFloat(rd('Expected cos²(γ/2)')) - pu) > 0.00051) return 'expected shows ' + rd('Expected cos²(γ/2)') + ', cos²(γ/2) = ' + pu;
      if (String(N) !== rd('Measurements N')) return 'N shows ' + rd('Measurements N') + ', counts add to ' + N;
      if (S.fresh && N >= 200) { const z = Math.abs(S.sp[0] / N - pu) / sigma(N, pu); if (z > 5.5) return 'up fraction ' + S.sp[0] / N + ' is ' + z.toFixed(1) + ' sigma from ' + pu; }
      return true; })()` },
    { name: "magnets in a row: expected up and down fractions from a probability tree; up + down + blocked = 1; measured fractions agree", fn: `(() => { ${pre}
      if (S.mode !== 'sg') return true;
      const m = S.mags.slice(0, S.n), e = tree(m), N = S.sgc.N;
      if (Math.abs(e.up + e.down + e.blocked - 1) > 1e-12) return 'tree does not add to 1: ' + JSON.stringify(e);
      if (!S.blind) {
        const ups = [...document.querySelectorAll('#out > div')].filter((d) => d.querySelector('dt').textContent === 'Expected').map((d) => parseFloat(d.querySelector('dd').textContent));
        if (Math.abs(ups[0] - e.up) > 0.00051 || Math.abs(ups[1] - e.down) > 0.00051) return 'Expected shows ' + ups + ', probability tree gives ' + [e.up, e.down];
      }
      if (S.sgc.up + S.sgc.down + S.sgc.blocked !== N) return 'counts ' + [S.sgc.up, S.sgc.down, S.sgc.blocked] + ' do not add to N = ' + N;
      if (N && Math.abs(parseFloat(rd('Blocked')) - S.sgc.blocked / N) > 0.00051) return 'Blocked shows ' + rd('Blocked');
      if (N >= 200) for (const [k, p] of [['up', e.up], ['down', e.down], ['blocked', e.blocked]]) { const z = Math.abs(S.sgc[k] / N - p) / sigma(N, p); if (z > 5.5) return k + ' fraction ' + S.sgc[k] / N + ' is ' + z.toFixed(1) + ' sigma from ' + p; }
      return true; })()` },
    { name: "presets: 60 degrees gives 0.75; z, x, z gives 1/8 up, 1/8 down, 3/4 blocked; z then z gives all up", fn: `(() => { ${pre}
      if (S.mode === 'coin' && S.preset === 'bias' && Math.abs((1 + Math.cos(S.tq * D)) / 2 - 0.75) > 1e-12) return 'bias preset is not 3/4';
      if (S.mode === 'spin' && S.preset === 's60' && Math.abs((1 + dot(vec(S.ts, S.fs), vec(S.ta, S.fa))) / 2 - 0.75) > 1e-12) return 's60 preset is not 3/4';
      if (S.mode === 'sg') {
        const e = tree(S.mags.slice(0, S.n));
        if (S.preset === 'zxz' && (Math.abs(e.up - 0.125) > 1e-12 || Math.abs(e.down - 0.125) > 1e-12 || Math.abs(e.blocked - 0.75) > 1e-12)) return 'zxz preset gives ' + JSON.stringify(e);
        if (S.preset === 'zz' && (Math.abs(e.up - 0.5) > 1e-12 || e.down > 1e-12 || Math.abs(e.blocked - 0.5) > 1e-12)) return 'zz preset gives ' + JSON.stringify(e);
        if (S.preset === 'zx' && (Math.abs(e.up - 0.25) > 1e-12 || Math.abs(e.down - 0.25) > 1e-12)) return 'zx preset gives ' + JSON.stringify(e);
      }
      return true; })()` },
  ],
  steps: [
    { name: 'every preset, measure 1000, change every slider and button, measure again (the counts must clear on a change)', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      for (const b of document.querySelectorAll('#presets button')) { b.click(); await pause(100); $('go1000').click(); await pause(100); }
      for (const m of ['coin', 'spin', 'sg']) {
        document.querySelector('#modeSeg [data-m=' + m + ']').click(); await pause(100); $('go1000').click(); $('go1000').click(); await pause(100);
        for (const s of document.querySelectorAll('#setupCard input[type=range]')) {
          if (!s.offsetParent) continue;
          for (const v of [s.min, s.max, s.min]) { s.value = v; s.dispatchEvent(new Event('input', { bubbles: true })); await pause(20); $('go100').click(); }
        }
        for (const k of document.querySelectorAll('#sgBox [data-k], #nSeg button')) { if (k.offsetParent) { k.click(); await pause(20); $('go1000').click(); } }
      }
      $('reset').click(); await pause(100);
    })()` },
  ],
};
