/* © 2026 Steven Anderson. All rights reserved. Not licensed for copying or reuse; terms at https://physicssteven.github.io/VirtualDemos/LICENSE.html */
/* VirtualDemos stopping power core (window.VDStop; in Node, require() it and read globalThis.VDStop), 2026-10-25.
   Shared by the Medical Physics demos (charged-particles, proton-qa, and the dosimetry demos after them) so each uses the same
   numbers. Units: kinetic energy T in MeV (the whole particle), depth and range in g/cm² (divide by the density for cm),
   mass stopping power in MeV cm²/g.

   Electronic stopping: the Bethe formula with the full maximum energy transfer,
     S/ρ = K z² (Z/A) (1/β²) [ ½ ln(2 mₑc² β²γ² W_max / I²) − β² ],  K = 4π N_A rₑ² mₑc² = 0.307075 MeV cm²/mol,
   with no shell, Barkas, Bloch or density corrections. Against NIST PSTAR for protons in water (I = 75.0 eV) it gives CSDA ranges
   within 0.2 mm from 10 to 250 MeV (test_vdstop.cjs), and stopping powers within about 0.6 % above 10 MeV; at 1 MeV the missing shell
   correction makes it about 3 % high, and it is not used below 1 MeV per nucleon: the last 1 MeV per nucleon is put down where the
   particle stops (in water a proton's last 1 MeV takes less than 0.04 mm). Materials are PSTAR's (density, I value, composition).
   Nuclear stopping is left out (below 0.1 % above 1 MeV).

   Range straggling: Bohr's energy straggling with the relativistic factor (1 − β²/2)/(1 − β²),
     dσ_E²/dx = K mₑc² z² (Z/A) ρ (1 − β²/2)/(1 − β²),  σ_R² = ∫ (dσ_E²/dx) / (dE/dx)³ dE.
   Nuclear interactions (protons): Bortfeld 1997 (Med. Phys. 24, 2024): primary fluence falls linearly with depth,
   Φ = Φ₀ [1 + β(R₀ − w)]/(1 + βR₀) with β = 0.012 per cm of water, and γ = 0.6 of the energy those protons
   carry is put down locally; the rest leaves (neutrons, gammas). Ions: left out.
   Multiple scattering: Highland's formula (PDG) for a slab; for the spread with depth, Fermi–Eyges moments with the scattering
   power T = (13.6 MeV / pv)² / X₀ times Highland's log factor at the depth reached (stated approximation).

   API (all pure, no DOM):
     MATS, PARTS, mat(id), part(id)
     S(T, m, p)            electronic mass stopping power (MeV cm²/g); Se(T, m) an electron's collision stopping power (ICRU 37)
     range(T, m, p)        CSDA range (g/cm²); energy(R, m, p) the energy whose CSDA range is R; after(T, x, m, p) energy left after x g/cm²
     wet(t, m, T, p)       water equivalent thickness (cm) of t cm of m for a particle of energy T going in (range difference in water)
     rsp(m, T, p)          stopping power relative to water (per cm)
     sigmaR(T, m, p)       range straggling (g/cm²)
     bk(Es, Rs)            Bragg–Kleeman fit R = α E^p by least squares in log–log: { alpha, p }
     dose(o)               depth dose curve: o = { T, p, layers: [{ m, t (cm) }], spread (fraction, 1σ), nuclear, dz (cm), zmax (cm) }
                           returns { z: [], d: [], e: [], phi: [] } (cm, MeV cm²/g per primary as dose shape, mean energy, primary fluence)
     distal(z, d, f)       depth on the far side of the peak where the dose falls to f of the peak (linear interpolation)
     theta0(x, m, T, p)    Highland rms projected angle after x g/cm² (rad)
     sigmaX(o, z)          rms lateral spread (cm) at depth z of a pencil beam with no initial spread (Fermi–Eyges)
     track(o, rng)         one Monte Carlo history: { pts: [[z, x, E]], end, absorbed } in cm, for drawing and for range histograms */
(function (g) {
  'use strict';
  const K = 0.307075, ME = 0.51099895, MU = 931.49410372;
  /* NIST PSTAR/ESTAR material data: density (g/cm³), I (eV), and Z/A worked out from the composition by weight with the standard
     atomic weights; X0 radiation length (g/cm²): the PDG value for water, air, PMMA and the elements, and for the tissues
     the elements' PDG values combined by weight (1/X₀ = Σ wᵢ/X₀ᵢ) */
  const MATS = {
    water: { name: 'Water', rho: 1.0, I: 75.0, ZA: 0.55509, X0: 36.08 },
    pmma: { name: 'PMMA (acrylic)', rho: 1.19, I: 74.0, ZA: 0.53937, X0: 40.55 },
    muscle: { name: 'Muscle (ICRP)', rho: 1.04, I: 75.3, ZA: 0.54938, X0: 36.55 },
    adipose: { name: 'Adipose tissue (ICRP)', rho: 0.92, I: 63.2, ZA: 0.55847, X0: 41.73 },
    lung: { name: 'Lung tissue (ICRP)', rho: 1.05, I: 75.3, ZA: 0.54965, X0: 36.50 },
    bone: { name: 'Compact bone (ICRU)', rho: 1.85, I: 91.9, ZA: 0.53010, X0: 30.49 },
    air: { name: 'Air (dry)', rho: 1.20479e-3, I: 85.7, ZA: 0.49919, X0: 36.62 },
    graphite: { name: 'Graphite', rho: 1.70, I: 78.0, ZA: 0.49954, X0: 42.70 },
    beryllium: { name: 'Beryllium', rho: 1.848, I: 63.7, ZA: 0.44384, X0: 65.19 },
    aluminum: { name: 'Aluminum', rho: 2.6989, I: 166.0, ZA: 0.48181, X0: 24.01 },
    copper: { name: 'Copper', rho: 8.96, I: 322.0, ZA: 0.45636, X0: 12.86 },
    lead: { name: 'Lead', rho: 11.35, I: 823.0, ZA: 0.39575, X0: 6.37 },
  };
  /* rest energies from CODATA 2022 (proton; 1 u = 931.49410372 MeV) and the AME 2020 atomic masses less the electrons (alpha, carbon 12) */
  const PARTS = {
    proton: { name: 'Proton', z: 1, A: 1, M: 938.27208943 },
    alpha: { name: 'Alpha particle', z: 2, A: 4, M: 3727.3794118 },
    carbon: { name: 'Carbon 12 ion', z: 6, A: 12, M: 12 * MU - 6 * ME },
  };
  const mat = (m) => (typeof m === 'string' ? MATS[m] : m) || MATS.water;
  const part = (p) => (typeof p === 'string' ? PARTS[p] : p) || PARTS.proton;
  const kin = (T, P) => { const gm = 1 + T / P.M, b2 = 1 - 1 / (gm * gm); return { gm, b2, bg2: b2 * gm * gm }; };

  function S(T, m, p) {
    const M = mat(m), P = part(p), k = kin(T, P), r = ME / P.M;
    const Wmax = 2 * ME * k.bg2 / (1 + 2 * k.gm * r + r * r), I = M.I * 1e-6;
    return K * P.z * P.z * M.ZA / k.b2 * (0.5 * Math.log(2 * ME * k.bg2 * Wmax / (I * I)) - k.b2);
  }
  /* electrons, collision stopping only: the ICRU 37 formula (Rohrlich and Carlson),
     S_col/ρ = (K/2)(Z/A)(1/β²)[ ln(τ²(τ + 2)/(2 (I/mₑc²)²)) + 1 − β² + (τ²/8 − (2τ + 1) ln 2)/(τ + 1)² − δ ], τ = T/mₑc²,
     with Sternheimer's density effect δ for water (−C = 3.5017, X₀ = 0.2400, X₁ = 2.8004, a = 0.09116, m = 3.4773; Sternheimer,
     Berger and Seltzer 1984) and none for other materials */
  function Se(T, m) {
    const M = mat(m), tau = T / ME, gm = 1 + tau, b2 = 1 - 1 / (gm * gm), I = M.I * 1e-6 / ME;
    let d = 0;
    if (M === MATS.water) { const X = Math.log10(Math.sqrt(b2) * gm); d = X >= 2.8004 ? 4.6052 * X - 3.5017 : X > 0.24 ? 4.6052 * X + 0.09116 * Math.pow(2.8004 - X, 3.4773) - 3.5017 : 0; }
    return K / 2 * M.ZA / b2 * (Math.log(tau * tau * (tau + 2) / (2 * I * I)) + 1 - b2 + (tau * tau / 8 - (2 * tau + 1) * Math.LN2) / (gm * gm) - d);
  }
  /* range tables: 1 MeV per nucleon up to 500 MeV per nucleon on a log grid, Simpson's rule in ln T, cached per material and particle */
  const N = 600, cache = {};
  function table(m, p) {
    const M = mat(m), P = part(p), key = (M.name) + '|' + P.name;
    if (cache[key]) return cache[key];
    const T0 = P.A * 1, T1 = P.A * 500, lt = new Float64Array(N + 1), R = new Float64Array(N + 1), st = new Float64Array(N + 1);
    const h = Math.log(T1 / T0) / N;
    for (let i = 0; i <= N; i++) { lt[i] = Math.log(T0) + i * h; st[i] = S(Math.exp(lt[i]), M, P); }
    R[0] = 0;
    for (let i = 1; i <= N; i++) {
      const a = Math.exp(lt[i - 1]), b = Math.exp(lt[i]), c = Math.exp(lt[i - 1] + h / 2);
      R[i] = R[i - 1] + h / 6 * (a / st[i - 1] + 4 * c / S(c, M, P) + b / st[i]);
    }
    return (cache[key] = { lt, R, st, h, T0, T1, M, P });
  }
  function range(T, m, p) {
    const t = table(m, p); if (!(T > t.T0)) return 0;
    const x = (Math.log(T) - t.lt[0]) / t.h, i = Math.min(N - 1, Math.floor(x)), f = x - i;
    if (x >= N) return t.R[N];
    /* within a step, integrate exactly enough: interpolate R in ln T with the local derivative T/S at both ends (cubic Hermite) */
    const d0 = Math.exp(t.lt[i]) / t.st[i] * t.h, d1 = Math.exp(t.lt[i + 1]) / t.st[i + 1] * t.h, r0 = t.R[i], r1 = t.R[i + 1];
    const f2 = f * f, f3 = f2 * f;
    return (2 * f3 - 3 * f2 + 1) * r0 + (f3 - 2 * f2 + f) * d0 + (-2 * f3 + 3 * f2) * r1 + (f3 - f2) * d1;
  }
  function energy(R, m, p) {
    const t = table(m, p); if (!(R > 0)) return t.T0 * 0;
    if (R >= t.R[N]) return t.T1;
    let lo = 0, hi = N; while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (t.R[mid] < R) lo = mid; else hi = mid; }
    let a = Math.exp(t.lt[lo]), b = Math.exp(t.lt[hi]);
    for (let k = 0; k < 40; k++) { const c = Math.sqrt(a * b); if (range(c, m, p) < R) a = c; else b = c; }
    return Math.sqrt(a * b);
  }
  const after = (T, x, m, p) => { const r = range(T, m, p) - x; return r > 0 ? energy(r, m, p) : 0; };
  /* a slab of t cm of m: the water depth that takes away the same energy, for a particle of energy T going in */
  function wet(t, m, T, p) {
    const M = mat(m), out = after(T, t * M.rho, M, p);
    return range(T, 'water', p) - (out > 0 ? range(out, 'water', p) : 0);
  }
  const rsp = (m, T, p) => mat(m).rho * S(T, m, p) / S(T, 'water', p);

  function sigmaR(T, m, p) {
    const M = mat(m), P = part(p), n = 400, lo = P.A, hi = T; if (!(hi > lo)) return 0;
    let s = 0; const h = Math.log(hi / lo) / n;
    for (let i = 0; i < n; i++) {
      const e = Math.exp(Math.log(lo) + (i + 0.5) * h), k = kin(e, P), st = S(e, M, P);
      s += h * e * K * ME * P.z * P.z * M.ZA * (1 - k.b2 / 2) / (1 - k.b2) / (st * st * st);
    }
    return Math.sqrt(s);
  }
  function bk(Es, Rs) {
    let n = 0, sx = 0, sy = 0, sxx = 0, sxy = 0;
    for (let i = 0; i < Es.length; i++) { if (!(Es[i] > 0 && Rs[i] > 0)) continue; const x = Math.log(Es[i]), y = Math.log(Rs[i]); n++; sx += x; sy += y; sxx += x * x; sxy += x * y; }
    const pp = (n * sxy - sx * sy) / (n * sxx - sx * sx);
    return { p: pp, alpha: Math.exp((sy - pp * sx) / n) };
  }

  /* depth dose of a broad beam along the layers then water, per primary per cm² (MeV cm²/g, the dose to the medium for a unit
     fluence). Depth is turned into water equivalent depth w layer by layer (each layer's stopping power ratio taken at the energy
     the beam has there). The primaries' end points spread as a Gaussian of σ = √(σ_R² + (spread · T / S)²) about the CSDA range R₀
     (range straggling and the beam's energy spread), and at w the electronic dose is ∫ p(w + r) S(r) dr over the residual range r,
     with S(r) the stopping power of a proton with CSDA range r (r = s² keeps the integrand smooth at the end). The range table starts at
     1 MeV per nucleon, so that last energy, A × 1 MeV, is put down where each particle stops: A p(w) per unit depth (unsmeared, in the
     step where w passes R₀), which keeps ∫ d dw = T without nuclear losses. Protons (Bortfeld 1997):
     primaries fall as Φ = Φ₀ [1 + β(R₀ − w)]/(1 + βR₀), and the energy taken by nuclear reactions, β Φ₀/(1 + βR₀) times the mean
     energy, is put down with the fraction γ. Doses in a layer are scaled by its mass stopping power ratio to water. */
  const BETA = 0.012, GAMMA = 0.6;
  const SQ2 = Math.SQRT2, erfc = (x) => { const t = 1 / (1 + 0.5 * Math.abs(x)), y = t * Math.exp(-x * x - 1.26551223 + t * (1.00002368 + t * (0.37409196 + t * (0.09678418 + t * (-0.18628806 + t * (0.27886807 + t * (-1.13520398 + t * (1.48851587 + t * (-0.82215223 + t * 0.17087277))))))))); return x >= 0 ? y : 2 - y; };
  /* stopping power and energy as functions of the residual range in water, from the range table */
  function resid(r, P) {
    const t = table('water', P); if (!(r > 0)) return { S: t.st[0], E: t.T0 };
    if (r >= t.R[N]) return { S: t.st[N], E: t.T1 };
    let lo = 0, hi = N; while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (t.R[mid] < r) lo = mid; else hi = mid; }
    const f = (r - t.R[lo]) / (t.R[hi] - t.R[lo]);
    return { S: t.st[lo] + f * (t.st[hi] - t.st[lo]), E: Math.exp(t.lt[lo] + f * t.h) };
  }
  function wetDepth(layers, P, T) {
    /* returns w(z) for z in cm: water equivalent depth (g/cm²), and the layer's mass stopping power ratio to water there */
    const segs = []; let z0 = 0, w0 = 0, E = T;
    for (const l of layers) {
      const M = mat(l.m), Eout = after(E, l.t * M.rho, M, P), wl = range(E, 'water', P) - (Eout > 0 ? range(Eout, 'water', P) : 0);
      /* a layer thicker than the range (a whole tissue medium): the segment ends where the particle stops */
      const tl = Eout > 0 ? l.t : range(E, M, P) / M.rho;
      segs.push({ z0, z1: z0 + tl, w0, w1: w0 + wl, ratio: S(Math.max(P.A * 2, (E + Math.max(Eout, P.A)) / 2), M, P) / S(Math.max(P.A * 2, (E + Math.max(Eout, P.A)) / 2), 'water', P) });
      z0 += tl; w0 += wl; E = Eout; if (!(E > 0)) break;
    }
    return (z) => { for (const s of segs) if (z < s.z1) return { w: s.w0 + (z - s.z0) / (s.z1 - s.z0) * (s.w1 - s.w0), ratio: s.ratio }; return { w: w0 + (z - z0), ratio: 1 }; };
  }
  function dose(o) {
    const P = part(o.p), dz = o.dz || 0.02, zmax = o.zmax || 40, layers = (o.layers || []).filter((l) => l.t > 0);
    const nz = Math.round(zmax / dz), z = new Float64Array(nz + 1), d = new Float64Array(nz + 1), e = new Float64Array(nz + 1), phi = new Float64Array(nz + 1);
    const wAt = wetDepth(layers, P, o.T);
    const R0 = range(o.T, 'water', P), sStr = o.straggle === false ? 0 : sigmaR(o.T, 'water', P), sE = (o.spread || 0) * o.T / S(o.T, 'water', P);
    const sig = Math.max(1e-4, Math.sqrt(sStr * sStr + sE * sE)), nuc = o.nuclear !== false && P.z === 1, ns = o.ns || 160;
    const pdf = (R) => Math.exp(-0.5 * Math.pow((R - R0) / sig, 2)) / (sig * Math.sqrt(2 * Math.PI));
    let wPrev = -Infinity;
    for (let i = 0; i <= nz; i++) {
      const zz = i * dz, at = wAt(zz), w = at.w, top = R0 + 6 * sig - w;
      let el = 0, en = 0;
      if (o.straggle === false && !(o.spread > 0)) { const r = R0 - w; if (r > 0) { const q = resid(r, P); el = q.S; en = q.E; } else if (wPrev < R0) el = P.A / (w - wPrev > 0 && isFinite(wPrev) ? w - wPrev : dz); }
      else if (top > 0) {
        /* only residual ranges within 6σ of R₀ − w count; near r = 0 the stopping power diverges, so there the variable is s = √r */
        const lo = Math.max(0, R0 - 6 * sig - w);
        if (lo > 0) { const hr = (top - lo) / ns; for (let k = 0; k < ns; k++) { const r = lo + (k + 0.5) * hr, q = resid(r, P), wt = hr * pdf(w + r); el += wt * q.S; en += wt * q.E; } }
        else { const smax = Math.sqrt(top), hs = smax / ns; for (let k = 0; k < ns; k++) { const s = (k + 0.5) * hs, r = s * s, q = resid(r, P), wt = 2 * s * hs * pdf(w + r); el += wt * q.S; en += wt * q.E; } }
        el += P.A * pdf(w);   /* the last A × 1 MeV, put down where the particles stop */
      }
      wPrev = w;
      const live = o.straggle === false && !(o.spread > 0) ? (w < R0 ? 1 : 0) : 0.5 * erfc((w - R0) / (sig * SQ2)), surv = nuc ? (1 + BETA * Math.max(0, R0 - w)) / (1 + BETA * R0) : 1;
      z[i] = zz; phi[i] = live * surv; e[i] = live > 1e-9 ? en / live : 0;
      d[i] = at.ratio * (el * surv + (nuc ? GAMMA * BETA / (1 + BETA * R0) * en : 0));
    }
    return { z, d, e, phi, R0, sigma: sig };
  }
  function distal(z, d, f) {
    let im = 0; for (let i = 1; i < d.length; i++) if (d[i] > d[im]) im = i;
    const lev = f * d[im];
    for (let i = im; i < d.length - 1; i++) if (d[i] >= lev && d[i + 1] < lev) return z[i] + (z[i + 1] - z[i]) * (d[i] - lev) / (d[i] - d[i + 1]);
    return NaN;
  }
  function theta0(x, m, T, p) {
    const M = mat(m), P = part(p), k = kin(T, P), pv = T * (T + 2 * P.M) / (T + P.M), t = x / M.X0;
    if (!(t > 0)) return 0;
    return 13.6 / pv * P.z * Math.sqrt(t) * (1 + 0.038 * Math.log(t * P.z * P.z / k.b2));
  }
  /* Fermi–Eyges: σ_x²(z) = ∫₀ᶻ (z − z')² T(z') dz' in water, with T from the Highland angle over the whole depth reached */
  function sigmaX(o, zz) {
    const P = part(o.p), n = 200, R0 = range(o.T, 'water', P); let s = 0;
    const zend = Math.min(zz, R0 * 0.999); if (!(zend > 0)) return 0;
    const t = zend / MATS.water.X0, k1 = kin(o.T, P), lg = 1 + 0.038 * Math.log(t * P.z * P.z / k1.b2), h = zend / n;
    for (let i = 0; i < n; i++) {
      const zp = (i + 0.5) * h, E = after(o.T, zp, 'water', P), k = kin(E, P), pv = E * (E + 2 * P.M) / (E + P.M);
      const Tsc = Math.pow(13.6 * P.z / pv * lg, 2) / MATS.water.X0;
      s += h * (zz - zp) * (zz - zp) * Tsc;
    }
    void k1; return Math.sqrt(s);
  }
  /* one Monte Carlo history in the layers then water: steps of o.step cm (0.5 mm) or a fifth of the residual range, whichever is
     shorter; mean loss from S at the middle of the step, Bohr straggling (Gaussian) per step, Highland scattering per step, and
     (protons) removal by a nuclear reaction with probability β dw/(1 + β r) over a step of dw cm of water equivalent, r the residual
     range in water, which is Bortfeld's linear fluence law: a proton survives to residual range r with probability
     (1 + β r)/(1 + β R₀), as in dose(). It stops at 1 MeV per nucleon. */
  function track(o, rng) {
    const P = part(o.p), layers = (o.layers || []).filter((l) => l.t > 0), step = o.step || 0.05, zmax = o.zmax || 40;
    const gauss = () => { let u = 0; while (!u) u = rng(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * rng()); };
    let E = o.T * (1 + (o.spread || 0) * gauss()), zz = 0, x = (o.x0 || 0) * gauss(), ang = (o.a0 || 0) * gauss(), absorbed = false;
    const pts = [[0, x, E]], nuc = o.nuclear !== false && P.z === 1, Emin = P.A;
    const matAt = (q) => { let acc = 0; for (const l of layers) { acc += l.t; if (q < acc) return mat(l.m); } return MATS.water; };
    while (zz < zmax && E > Emin) {
      const M = matAt(zz), rr = range(E, M, P) / M.rho, dl = Math.min(step, Math.max(rr / 5, 2e-4)), dx = dl * M.rho;
      const Em = E - S(E, M, P) * dx / 2, st = S(Math.max(Em, Emin), M, P), k = kin(Math.max(Em, Emin), P);
      const sE = Math.sqrt(K * ME * P.z * P.z * M.ZA * (1 - k.b2 / 2) / (1 - k.b2) * dx), th = theta0(dx, M, Math.max(Em, Emin), P);
      if (nuc && rng() < BETA * dx * rsp(M, Math.max(Em, Emin), P) / M.rho / (1 + BETA * range(Math.max(Em, Emin), 'water', P))) { absorbed = true; break; }
      E -= Math.max(0, st * dx + sE * gauss());
      ang += th * gauss(); x += dl * Math.sin(ang); zz += dl * Math.cos(ang);
      pts.push([zz, x, Math.max(0, E)]);
    }
    return { pts, end: zz, absorbed };
  }
  const api = { MATS, PARTS, mat, part, S, Se, range, energy, after, wet, rsp, sigmaR, bk, dose, resid, wetDepth, erfc, distal, theta0, sigmaX, track, BETA, GAMMA, K, ME };
  g.VDStop = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
