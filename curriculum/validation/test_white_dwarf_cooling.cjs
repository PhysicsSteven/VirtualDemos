'use strict';
// White Dwarf Cooling: the degenerate electron gas, the zero temperature structure against both limits (the n = 3/2
// polytrope for low mass and the Chandrasekhar mass for high central density), Coulomb coupling and melting at Γ = 175,
// the cooling track against Mestel's law worked out here from N, k and the envelope constant, and the effect of
// crystallization and latent heat (they slow the cooling, never speed it).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('white-dwarf-cooling', 'G,CL,H,ME,MU,KB,KE,MSUN,RSUN,LSUN,YR,T0,C_ENV,lumOf,tcOfL,COMPS,compInfo,pressure,dPdx,rhoOfX,integrateStar,structure,gammaOf,gammaIon,tMelt,rhoMelt,GAMMA_M,cex,coolTrack,stateAtT,teffOf,eggleton');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(Math.abs(b), 1e-300), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const HB = c.H / (2 * Math.PI);

group('degenerate electrons: P(x) → (1/5)(3/8π)^{2/3}(h²/m_e)n^{5/3} slow, (1/4)(3/8π)^{1/3}hc n^{4/3} fast; dP/dx is the derivative', () => {
  const ne = (x) => c.rhoOfX(x) / (2 * c.MU);
  for (const x of [0.01, 0.03]) near(c.pressure(x), 0.2 * Math.pow(3 / (8 * Math.PI), 2 / 3) * c.H * c.H / c.ME * Math.pow(ne(x), 5 / 3), 1e-3, `nonrelativistic x ${x}`);
  for (const x of [1e3, 1e4]) near(c.pressure(x), 0.25 * Math.pow(3 / (8 * Math.PI), 1 / 3) * c.H * c.CL * Math.pow(ne(x), 4 / 3), 1e-5, `ultrarelativistic x ${x}`);
  for (const x of [0.3, 1, 4]) near(c.dPdx(x), (c.pressure(x * (1 + 1e-6)) - c.pressure(x * (1 - 1e-6))) / (2e-6 * x), 1e-7, `dP/dx ${x}`);
  // ρ = μe m_u n_e and n_e = (8π/3)(p_F/h)³
  near(ne(1), 8 * Math.PI / 3 * Math.pow(c.ME * c.CL / c.H, 3), 1e-14);
});

group('low mass white dwarfs are n = 3/2 polytropes: M and R from the Lane–Emden constants ξ₁ = 3.65375, ξ₁²|θ′(ξ₁)| = 2.71406', () => {
  const xc = 0.02, s = c.integrateStar(xc, false), rc = c.rhoOfX(xc);
  const K = Math.pow(3 / Math.PI, 2 / 3) * c.H * c.H / (20 * c.ME * Math.pow(2 * c.MU, 5 / 3));
  const a = Math.sqrt(2.5 * K * Math.pow(rc, -1 / 3) / (4 * Math.PI * c.G));
  near(s.R, 3.65375 * a, 0.01, 'radius'); near(s.M, 4 * Math.PI * 2.71406 * a ** 3 * rc, 0.005, 'mass');
  // R ∝ M^{−1/3} in this limit
  const s2 = c.integrateStar(0.01, false); near(s2.R / s.R, Math.pow(s.M / s2.M, 1 / 3), 0.01, 'R ∝ M^{−1/3}');
});

group('the mass rises toward the Chandrasekhar mass (√(3π)/2) ω₃ (ħc/G)^{3/2}/(μe m_u)² = 1.456 M☉ for μe = 2 as the center becomes relativistic', () => {
  const MCh = Math.sqrt(3 * Math.PI) / 2 * 2.01824 * Math.pow(HB * c.CL / c.G, 1.5) / Math.pow(2 * c.MU, 2) / c.MSUN;
  near(MCh, 1.4563, 2e-4, 'with m_u per nucleon');
  let prev = 0; for (const xc of [0.5, 1, 3, 10, 30, 60]) { const M = c.integrateStar(xc, false).M / c.MSUN; assert(M > prev && M < MCh, `xc ${xc}: ${M}`); prev = M; }
  near(prev, MCh, 0.005, 'x_c = 60 is within 0.5% of the limit');
  // a 0.6 M☉ star: radius near Eggleton's fit (Verbunt and Rappaport 1988) and about an Earth radius
  const s = c.structure(0.6); near(s.M / c.MSUN, 0.6, 1e-6); near(s.R / c.RSUN, c.eggleton(0.6), 0.03, 'radius vs Eggleton');
});

group('Coulomb coupling: Γ = Z²e²/(4πε₀ a k T); melting at Γ = 175; ρ_melt and T_melt invert each other', () => {
  const rho = 3e9, T = 5e6;   // SI: 3×10⁶ g/cm³
  near(c.gammaOf(Math.pow(6, 5 / 3), rho, T), c.gammaIon(6, 12, rho, T), 1e-12, 'carbon: electron sphere form = ion sphere form');
  near(c.gammaIon(6, 12, rho, T), 36 * c.KE / (Math.cbrt(3 * 12 * c.MU / (4 * Math.PI * rho)) * c.KB * T), 1e-15);
  const ci = c.compInfo(c.COMPS.co); near(ci.mue, 2, 1e-15); near(ci.A, 1 / (0.5 / 12 + 0.5 / 16), 1e-15);
  const Tm = c.tMelt(ci.Z53, rho); near(c.gammaOf(ci.Z53, rho, Tm), c.GAMMA_M, 1e-12); near(c.rhoMelt(ci.Z53, Tm), rho, 1e-12);
  // the liquid's excess heat capacity is continuous at Γ = 1 and goes to zero in the weak coupling limit
  near(c.cex(1 - 1e-9), c.cex(1 + 1e-9), 1e-6); assert(Math.abs(c.cex(1e-4)) < 1e-5);
});

group('envelope: L = 5.7×10⁵ (μ/μe²) M T_c^{3.5}/(Z(1+X)) erg/s (Shapiro and Teukolsky eq. 4.1.12), and T_c(L) inverts it', () => {
  const mu = 1 / (0.75 * 0.9 + 0.5 * 0.1);
  near(c.C_ENV * c.LSUN * 1e7, 5.7e5 * mu / 4 / 0.1, 1e-14);
  near(c.tcOfL(0.6, c.lumOf(0.6, 2e7)), 2e7, 1e-12);
  // Teff from L = 4πR²σT⁴: the Sun's own L and R give 5772 K
  near(c.teffOf(1, c.RSUN), 5772, 1e-3);
});

group('cooling with ideal ions and no crystallization follows Mestel: t = (3/5) N k (T^{−5/2} − T₀^{−5/2}) / (C M), to 0.005% (the demo sums steps of 0.002 in log T_c)', () => {
  for (const [M, comp] of [[0.6, 'co'], [1.0, 'co'], [0.4, 'he']]) {
    const tr = c.coolTrack(M, comp, { liquid: 'ideal', cryst: false, latent: false }), ci = c.compInfo(c.COMPS[comp]);
    const N = tr.s.M / (ci.A * c.MU), Cw = c.C_ENV * c.LSUN * M;
    for (const T of [3e7, 1e7, 3e6, 1e6]) {
      const want = 0.6 * N * c.KB / Cw * (Math.pow(T, -2.5) - Math.pow(c.T0, -2.5)) / c.YR;
      near(c.stateAtT(tr.lT, tr.t, Math.log10(T)), want, 5e-5, `${M} M☉ ${comp} at ${T} K`);
    }
  }
  // 0.6 M☉ C/O reaches 10⁻⁴ L☉ after a few Gyr, the age scale of the disk white dwarfs
  const tr = c.coolTrack(0.6, 'co', { liquid: 'ideal', cryst: false, latent: false });
  const t4 = c.stateAtT(tr.lT, tr.t, Math.log10(c.tcOfL(0.6, 1e-4))); assert(t4 > 1e9 && t4 < 2e10, `${t4}`);
});

group('crystallization: the solid holds 3k per ion (more than an ideal liquid’s 3k/2, a little less than the Coulomb liquid’s 3.4k near Γ = 175); latent heat slows the cooling; freezing starts at T_melt(ρ_c)', () => {
  const T = Math.log10(2e6), base = c.coolTrack(0.6, 'co', { liquid: 'coulomb', cryst: false, latent: false });
  const cr = c.coolTrack(0.6, 'co', { liquid: 'coulomb', cryst: true, latent: false }), lat = c.coolTrack(0.6, 'co', { liquid: 'coulomb', cryst: true, latent: true });
  const tb = c.stateAtT(base.lT, base.t, T), tc = c.stateAtT(cr.lT, cr.t, T), tl = c.stateAtT(lat.lT, lat.t, T);
  assert(tl > tc && tl > tb, `latent heat: ${tl} vs ${tc}, ${tb}`);
  const ideal = c.coolTrack(0.6, 'co', { liquid: 'ideal', cryst: false, latent: false }), id = c.stateAtT(ideal.lT, ideal.t, T);
  assert(tb > id && tc > id, 'both Coulomb runs hold more heat than ideal ions');
  near(c.cex(175) + 1.5, 3.39, 0.01, 'Coulomb liquid heat capacity at melting, per ion in k (DeWitt, Slattery and Stringfellow)');
  assert(lat.latentE > 0); for (let i = 1; i < cr.n; i++) assert(cr.fs[i] >= cr.fs[i - 1] - 1e-12, 'the solid only grows');
  const ci = c.compInfo(c.COMPS.co); near(cr.Tm0, c.tMelt(ci.Z53, cr.rhoC), 1e-15);
  // above T_melt(ρ_c) nothing is solid
  const above = cr.lT.findIndex((lt) => lt < Math.log10(cr.Tm0)); assert(cr.fs[Math.max(0, above - 2)] === 0);
});

console.log(`${n} white dwarf cooling test groups passed`);
