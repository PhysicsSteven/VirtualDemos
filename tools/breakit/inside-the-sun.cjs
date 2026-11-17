/* Known values for the break-it test (tools/breakit.cjs), inside-the-sun. Hook: window.__its (S, fusionRatio, xEq, lifetime, ...).
   Thermostat: the readouts equal the model at the live state (T_c = 15.71 MK × θ, ρ_c = 162,200/x³, fusion = fusionRatio), x stays
   between 0.5 and 2, and without a lid θ = 1/x. Fuel: the deficit 0.0286967 u and 26.73 MeV, the Sun's lifetime 10.53 billion yr.
   Walk: the step count and √N agree. Neutrinos: 2.32 s and 499.0 s, and the chlorine tank never catches more than the heavy water tank. */
const pre = `const C = window.__its; if (!C) return true; const S = C.S;
  const num = (s) => parseFloat(String(s).replace(/\\u2212/g, '-').replace(/,/g, ''));
  const near = (a, b, t) => Math.abs(a - b) <= t * Math.max(Math.abs(b), 1e-12);
  const out = {}; for (const d of document.querySelectorAll('#out dt')) out[d.textContent.replace(/\\s+/g, ' ').trim()] = d.nextElementSibling.textContent.trim();
`;
module.exports = {
  checks: [
    { name: 'thermostat readouts equal the model at the live state', fn: `(() => { ${pre}
      if (S.mode !== 'thermo') return true;
      if (!(S.x > 0.5 && S.x < 2 && isFinite(S.th))) return 'core size out of range: ' + S.x;
      if (!S.lid && Math.abs(S.th * S.x - 1) > 1e-9) return 'without a lid θ must be 1/x: ' + S.th + ' ' + S.x;
      const T = num(out['Central temperature']), want = S.th * 15.71;
      if (!near(T, want, 6e-4)) return 'T_c shows ' + out['Central temperature'] + ', model ' + want;
      const L = num(out['Fusion power']); if (!near(L, C.fusionRatio(S.x, S.th, S.f), 2e-3)) return 'fusion shows ' + out['Fusion power'];
      const rho = num(out['Central density']); if (!near(rho, 162200 / Math.pow(S.x, 3), 1e-4)) return 'density shows ' + out['Central density'];
      if (!S.blind && !S.lid && out['Settles at R/R₀'] && !near(num(out['Settles at R/R₀']), C.xEq(S.f), 2e-4)) return 'equilibrium shows ' + out['Settles at R/R₀'];
      return true; })()` },
    { name: 'fuel: the deficit, the energy and the lifetime of the Sun are the cited values', fn: `(() => { ${pre}
      if (S.mode !== 'fuel') return true;
      if (out['Mass missing, each helium'] !== '0.0286967 u') return 'deficit ' + out['Mass missing, each helium'];
      if (out['Energy, each helium'] !== '26.73 MeV') return 'Q ' + out['Energy, each helium'];
      if (out['Lifetime, the Sun'] !== '10.53 billion yr') return 'Sun lifetime ' + out['Lifetime, the Sun'];
      const t = C.lifetime(S.M * 1.98840987e30, Math.pow(10, S.L) * 3.828e26) / 31557600;
      if (!(t > 1e6 && t < 1e13)) return 'lifetime out of range ' + t;
      return true; })()` },
    { name: 'walk: N and √N agree', fn: `(() => { ${pre}
      if (S.mode !== 'walk') return true;
      const N = num(out['Steps taken N']), r = num(out['√N']);
      if (N !== S.walkN) return 'N shows ' + N + ', state ' + S.walkN;
      if (Math.abs(r - Math.sqrt(N)) > 0.006) return '√N shows ' + r;
      return true; })()` },
    { name: 'neutrinos: 2.32 s and 499.0 s; the chlorine tank never catches more than the heavy water tank', fn: `(() => { ${pre}
      if (S.mode !== 'nu') return true;
      if (out['Neutrino to the surface'] !== '2.32 s') return 'surface ' + out['Neutrino to the surface'];
      if (!/^499\\.0 s/.test(out['Neutrino to Earth'])) return 'Earth ' + out['Neutrino to Earth'];
      const t = C.tank(); if (t.cl > t.sno || t.sno !== t.sent) return 'tanks ' + JSON.stringify(t);
      return true; })()` },
  ],
  steps: [
    { name: 'squeeze, play 3 s: the core grows back toward R0', fn: `(async () => { __its.applyPreset('squeeze'); document.getElementById('play').click(); await new Promise((r) => setTimeout(r, 3000)); const S = __its.S; document.getElementById('play').click(); return S.x > 0.975 && S.x < 1.0001 ? true : 'x after 3 s: ' + S.x; })()` },
    { name: 'lid: runs away and stops at 100 L☉', fn: `(async () => { __its.applyPreset('lid'); document.getElementById('play').click(); await new Promise((r) => setTimeout(r, 4000)); const S = __its.S; return __its.fusionRatio(S.x, S.th, S.f) > 1.2 ? true : 'no runaway: ' + __its.fusionRatio(S.x, S.th, S.f); })()` },
  ],
};
