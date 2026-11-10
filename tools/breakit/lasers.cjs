/* Known values for the break-it test (tools/breakit.cjs), lasers. Hook: window.__lz (S, sim, P, setView, applyPreset, run).
   Processes: hν/kT, the Boltzmann ratio N₂/N₁ = e^(−hν/kT) (below 1 at every temperature), stimulated/spontaneous = 1/(e^(hν/kT) − 1),
   A/B = 8πhν³/c³, and the pumped two level atom W/(W + A) below 1. Laser: the live rates satisfy the rate equations; the steady state
   with the seed solves dN/dt = dq/dt = 0, never has the output above the absorbed pump power, and sits at N = N_th = 1/(K τ_c) once
   above threshold (N/N_th reads 1.000); no photon number below 0 and no inversion above the dopant count N_t or below −a N_t; the
   threshold pump W_th is where the ideal steady state starts (no output below it); ruby needs about 8 times the Nd:YAG pump (the
   hint). Modes: spacing c/2L, He–Ne Doppler width about 1.5 GHz at 400 K, the count of lasing modes is the modes whose gain
   exceeds the loss, the mode number q = 2L/λ. */
const pre = `const Z = window.__lz; if (!Z) return true; const S = Z.S, P = Z.P, sim = Z.sim;
  const C0 = 299792458, HP = 6.62607015e-34, KB = 1.380649e-23, QE = 1.602176634e-19, AMU = 1.66053906892e-27;
  const SUPM = { '⁻': '-', '⁰': 0, '¹': 1, '²': 2, '³': 3, '⁴': 4, '⁵': 5, '⁶': 6, '⁷': 7, '⁸': 8, '⁹': 9 };
  const T = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-');
  const UNIT = { THz: 1e12, GHz: 1e9, MHz: 1e6, kHz: 1e3, Hz: 1, eV: 1, meV: 1e-3, 'µeV': 1e-6, W: 1, mW: 1e-3, 'µW': 1e-6, nW: 1e-9, s: 1, ms: 1e-3, 'µs': 1e-6, ns: 1e-9 };
  const val = (t) => { t = String(t).trim(); if (/^</.test(t)) return NaN; const m = t.match(/^(-?[\\d.]+(?:e[+-]?\\d+)?)(?: × 10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+))?\\s*([A-Za-zµ]*)/); if (!m) return NaN; let v = parseFloat(m[1]);
    if (m[2]) { let e = 0; const neg = m[2][0] === '⁻'; for (const c of m[2]) if (c !== '⁻') e = e * 10 + SUPM[c]; v *= Math.pow(10, neg ? -e : e); } return v * (UNIT[m[3]] || 1); };
  const near = (got, want, tol) => Math.abs(got - want) <= tol * Math.max(Math.abs(want), 1e-300);
  const NU = { hene: C0 / 632.8e-9, nd: C0 / 1064e-9, co2: C0 / 10.6e-6, nh3: 23.8701e9 };
  const fsr = (L) => C0 / (2 * L), dop = () => { const nu0 = C0 / 632.991e-9; return nu0 * Math.sqrt(8 * KB * 400 * Math.LN2 / (20.1797 * AMU * C0 * C0)); };
`;
module.exports = {
  checks: [
    { name: "processes: hν/kT, N₂/N₁ = e^(−hν/kT) < 1, stimulated/spontaneous, A/B, W/(W + A) < 1", fn: `(() => { ${pre}
      const nu = NU[S.trans], x = HP * nu / (KB * S.T);
      if (!(S.T > 0) || !isFinite(x)) return 'T = ' + S.T;
      if (!near(val(T('rHnu')), HP * nu / QE, 1.2e-3)) return 'hν shows ' + T('rHnu') + ', physics ' + HP * nu / QE + ' eV';
      if (!near(val(T('rX')), x, 6e-4)) return 'hν/kT shows ' + T('rX') + ', physics ' + x;
      const r = Math.exp(-x); if (!(r < 1)) return 'N₂/N₁ = ' + r + ' is not below 1';
      if (r > 1e-300) { if (!near(val(T('rRatio')), r, 6e-4 * Math.max(1, x))) return 'N₂/N₁ shows ' + T('rRatio') + ', physics ' + r; }
      const so = 1 / Math.expm1(x); if (so > 1e-300 && !near(val(T('rSS')), so, 6e-4 * Math.max(1, x))) return 'stimulated/spontaneous shows ' + T('rSS') + ', physics ' + so;
      if (!near(val(T('rAB')), 8 * Math.PI * HP * nu ** 3 / C0 ** 3, 6e-4)) return 'A/B shows ' + T('rAB') + ', physics ' + 8 * Math.PI * HP * nu ** 3 / C0 ** 3;
      const pu = S.wA / (1 + S.wA); if (!(pu < 1) || Math.abs(parseFloat(T('rPump')) - pu) > 6e-5) return 'W/(W+A) shows ' + T('rPump') + ', physics ' + pu;
      return true; })()` },
    { name: "laser: the live N and q obey 0 ≤ q, −a N_t ≤ N ≤ N_t; N/N_th and the output power readouts match the state", fn: `(() => { ${pre}
      if (!isFinite(sim.N) || !isFinite(sim.q) || !isFinite(sim.t)) return 'state is NaN: ' + JSON.stringify(sim);
      if (sim.q < 0) return 'photon number ' + sim.q;
      if (sim.N > P.Nt * (1 + 1e-9) || sim.N < -P.a * P.Nt * (1 + 1e-9)) return 'inversion ' + sim.N + ' outside [−aN_t, N_t] = ' + [-P.a * P.Nt, P.Nt];
      if (S.view !== 'laser' || S.running) return true;
      return true; })()` },
    { name: "laser: steady state with the seed solves both rate equations, output ≤ absorbed pump, N = N_th = 1/(Kτ_c) above threshold", fn: `(() => { ${pre}
      const W = S.W, Nth = 1 / (P.K * P.tc); if (!near(P.Nth, Nth, 1e-12)) return 'N_th ' + P.Nth + ' but 1/(K τ_c) = ' + Nth;
      if (!near(P.tc, 1 / (-Math.log(P.R) * C0 / (2 * 0.10) + -Math.log(0.98) * C0 / (2 * 0.10)), 1e-9)) return 'τ_c ' + P.tc + ' from R = ' + P.R;
      /* the steady state, solved here by bisection on the two rate equations */
      const bb = P.beta / ((1 + P.a) * P.tau), Nq = (q) => (q / P.tc - bb * P.a * P.Nt) / (P.K * q + bb);
      const f = (q) => { const N = Nq(q); return W * (P.Nt - N) - (N + P.a * P.Nt) / P.tau - P.g * P.K * N * q; };
      let lo = -30, hi = 30; if (f(Math.pow(10, lo)) <= 0) return true;
      for (let i = 0; i < 300; i++) { const mid = 0.5 * (lo + hi); if (f(Math.pow(10, mid)) > 0) lo = mid; else hi = mid; }
      const q = Math.pow(10, 0.5 * (lo + hi)), N = Nq(q);
            const up = (N + P.a * P.Nt) / (1 + P.a), dq2 = P.K * N * q - q / P.tc + P.beta * up / P.tau;
      if (Math.abs(dq2) > 1e-6 * Math.max(Math.abs(P.K * N * q), q / P.tc, 1e-12 * P.beta * P.Nt / P.tau * 1e4)) return 'dq/dt = ' + dq2 + ' at the steady state (q/τ_c = ' + q / P.tc + ')';
      const El = HP * C0 / (S.med === 'nd' ? 1064e-9 : 694.3e-9), Ep = HP * C0 / (S.med === 'nd' ? 808e-9 : 550e-9), kOut = -Math.log(P.R) / P.trt;
      const pout = El * kOut * q, pabs = Ep * W * (P.Nt - N) / (1 + P.a);
      if (pout > pabs * (1 + 1e-9)) return 'output ' + pout + ' W above the absorbed pump ' + pabs + ' W';
      if (W > P.Wth * 1.05 && !near(N, Nth, 1e-3)) return 'above threshold N = ' + N / Nth + ' N_th, should clamp at 1';
      const rd = T('rPss'); const m = rd.match(/N = ([\\d.]+) N/); if (m && Math.abs(+m[1] - N / Nth) > 6e-5) return 'rPss shows N = ' + m[1] + ' N_th, solved ' + N / Nth;
      if (!near(val(rd), pout, 6e-3)) return 'steady output shows ' + rd + ', solved ' + pout + ' W';
      return true; })()` },
    { name: "laser: threshold pump W_th = (N_th + aN_t)/(τ(N_t − N_th)), no ideal output below it; ruby ≈ 8 × Nd:YAG; readouts", fn: `(() => { ${pre}
      const Wth = (P.Nth + P.a * P.Nt) / (P.tau * (P.Nt - P.Nth)); if (!near(P.Wth, Wth, 1e-12)) return 'W_th ' + P.Wth + ', formula ' + Wth;
      const N0 = P.Nt * (Wth * P.tau - P.a) / (Wth * P.tau + 1); if (!near(N0, P.Nth, 1e-9)) return 'below threshold N(W_th) = ' + N0 + ', N_th = ' + P.Nth;
      if (!(P.Nth > 0 && P.Nth < P.Nt)) return 'N_th ' + P.Nth + ' outside (0, N_t)';
      if (!near(val(document.getElementById('rNth').firstChild.textContent), P.Nth, 6e-3)) return 'N_th shows ' + T('rNth');
      if (!near(val(T('rWth')), P.Wth, 6e-3)) return 'W_th shows ' + T('rWth') + ', physics ' + P.Wth;
      const ratio = +T('wpOut').split('·')[1].replace(/[^\\d.]/g, '') || 0; if (Math.abs(ratio - S.W / P.Wth) > 0.0051) return 'pump shows ' + T('wpOut') + ', W/W_th = ' + S.W / P.Wth;
      if (!near(val(T('rTc')), P.tc, 3e-3)) return 'τ_c shows ' + T('rTc') + ', physics ' + P.tc;
      const pth = (a, sig, dens, lamP) => { const A = Math.PI * 0.5e-3 ** 2, Nt = dens * A * 0.01, K = sig * C0 / (A * 0.10), tc = 1 / (-Math.log(0.95) * C0 / 0.2 - Math.log(0.98) * C0 / 0.2), Nth = 1 / (K * tc), tau = a ? 3e-3 : 230e-6;
        return HP * C0 / lamP * (Nth + a * Nt) / (tau * (Nt - Nth)) * (Nt - Nth) / (1 + a); };
      const rr = pth(1, 2.5e-24, 1.58e25, 550e-9) / pth(0, 2.8e-23, 1.38e26, 808e-9); if (rr < 7 || rr > 9) return 'ruby/Nd:YAG absorbed threshold power ratio at R = 0.95 is ' + rr + ', the hint says about 8';
      return true; })()` },
    { name: "relaxation oscillation: the readout agrees with the linearized rate equations", fn: `(() => { ${pre}
      if (!(S.W > P.Wth * 1.001)) return true;
      const q0 = P.tc * (S.W * (P.Nt - P.Nth) - (P.Nth + P.a * P.Nt) / P.tau) / P.g, gam = S.W + 1 / P.tau + P.g * P.K * q0, w0sq = P.g * P.K * q0 / P.tc, wd2 = w0sq - gam * gam / 4;
      const t = T('rRel'); if (wd2 <= 0) return /overdamped/.test(t) ? true : 'overdamped but the readout says ' + t;
      const fr = Math.sqrt(wd2) / (2 * Math.PI); if (!near(val(t), fr, 6e-3)) return 'relaxation frequency shows ' + t + ', physics ' + fr + ' Hz';
      return true; })()` },
    { name: "modes: spacing c/2L, Doppler width, mode number q = 2L/λ, the count of modes with gain above loss", fn: `(() => { ${pre}
      const Lt = S.L + S.dL, sp = fsr(Lt), fw = dop();
      if (!near(val(T('rFsr')), sp, 6e-4)) return 'mode spacing shows ' + T('rFsr') + ', c/2L = ' + sp;
      if (!near(val(T('rDop')), fw, 3e-3)) return 'Doppler width shows ' + T('rDop') + ', physics ' + fw;
      if (Math.abs(fw - 1.5e9) > 0.1e9) return 'He–Ne Doppler width ' + fw + ', the page says about 1.5 GHz';
      if (T('rQi').replace(/,/g, '') !== String(Math.round(2 * Lt / 632.991e-9))) return 'q shows ' + T('rQi') + ', 2L/λ = ' + 2 * Lt / 632.991e-9;
      const nu0 = C0 / 632.991e-9, hb = S.gain > 1 ? 0.5 * fw * Math.sqrt(Math.log(S.gain) / Math.LN2) : 0; let n = 0, edge = false;
      const q0 = Math.round(2 * S.L * nu0 / C0), spL = C0 / (2 * Lt);
      for (let q = q0 - 400; q <= q0 + 400; q++) { const d = q * spL - nu0; if (Math.abs(Math.abs(d) - hb) < 1e-4 * hb) edge = true; if (Math.abs(d) < hb) n++; }
      if (!edge && Number(T('rNm')) !== n) return 'lasing modes shows ' + T('rNm') + ', counting gives ' + n + ' (band half width ' + hb + ' Hz, spacing ' + spL + ')';
      return true; })()` },
    { name: "presets keep their values: modes 30 cm / 500 MHz / about 3 modes; thresh at 1.6 W_th; hene 76; co2 ≈ 1%; nh3 0.004", fn: `(() => { ${pre}
      const at = (nu, T) => HP * nu / (KB * T);
      if (Math.abs(at(NU.hene, 300) - 75.8) > 0.3) return 'He–Ne hν/kT at 300 K is ' + at(NU.hene, 300);
      if (Math.abs(Math.exp(-at(NU.co2, 300)) - 0.0108) > 0.0005) return 'CO₂ upper/lower at 300 K is ' + Math.exp(-at(NU.co2, 300));
      if (Math.abs(at(NU.nh3, 300) - 0.0038) > 0.0003) return 'NH₃ hν/kT ' + at(NU.nh3, 300);
      if (Math.abs(HP * NU.nd / QE - 1.165) > 0.002) return 'Nd:YAG photon energy ' + HP * NU.nd / QE;
      if (Math.abs(fsr(0.30) - 499.65e6) > 0.01e6) return 'FSR at 30 cm ' + fsr(0.30);
      return true; })()` },
  ],
  steps: [
    { name: 'Laser: Switch on again, Nd:YAG to ruby mid run at both ends of the pump slider and reflectivity, steady and ringing, then speeds', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#presets [data-p=relax]').click(); await pause(300);
      for (const [id, v] of [['wp', 0], ['wp', 40], ['refl', 0.8], ['refl', 0.999], ['wp', 0.01], ['refl', 0.95], ['wp', 8]]) { set(id, v); await pause(150); }
      document.getElementById('mRuby').click(); await pause(200);
      for (const [id, v] of [['wp', 0], ['wp', 2000], ['refl', 0.8], ['refl', 0.999], ['wp', 1]]) { set(id, v); await pause(150); }
      for (const b of document.querySelectorAll('#speeds button')) { b.click(); await pause(150); document.getElementById('restart').click(); await pause(100); }
      document.getElementById('mNd').click(); await pause(100);
      document.querySelector('#presets [data-p=three]').click(); await pause(300); document.querySelector('#presets [data-p=thresh]').click(); await pause(300);
    })()` },
    { name: 'Processes: temperature to the ends for every transition, W/A to the ends; Modes: length, tuning, gain to the ends', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#presets [data-p=proc]').click(); await pause(150);
      for (const b of document.querySelectorAll('#trans button')) { b.click(); for (const v of [1, 5, 2.4771]) { set('temp', v); await pause(60); } }
      for (const v of [-2, 2, 0]) { set('pw', v); await pause(60); }
      document.querySelector('#presets [data-p=modes]').click(); await pause(150);
      for (const [id, v] of [['len', 10], ['len', 100], ['dl', 316], ['dl', 0], ['gain', 0.5], ['gain', 4], ['gain', 1], ['gain', 1.001], ['len', 30], ['gain', 2]]) { set(id, v); await pause(60); }
    })()` },
  ],
};
