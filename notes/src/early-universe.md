---
title: The Big Bang and the Early Universe
level: Intro modern physics (cosmology, OpenStax Vol. 3 §§11.6 and 11.7)
time: 20 to 30 minutes
---
## What students should come away with

- Space itself stretches: every distance between galaxies grows by the same factor a(t), so every galaxy sees every other recede with v = H d. There is no center.
- The Hubble time 1/H₀ (14.5 Gyr for H₀ = 67.4 km/s/Mpc) sets the scale of the age, but the age depends on how the expansion has changed: 2/(3H₀) = 9.7 Gyr for matter alone, 13.8 Gyr for our universe, whose slowing down and later speeding up nearly cancel.
- The radiation cools as T = T₀(1 + z). Run backwards, the universe gets hot enough to make any particle with mc² below about kT; each kind stops being made as kT falls past its rest energy.
- Helium is a fossil of the first minutes: the neutron to proton ratio froze at about 1 to 5 when kT ≈ 0.8 MeV, neutrons decayed until deuterium could survive at about 3 minutes, and the rest went into helium, about a quarter of the mass.
- The microwave background is the glow of decoupling at about 3000 K stretched by a factor of 1090; a stretched blackbody is still a blackbody, which COBE FIRAS measured to a few parts in 10⁵.

## Before class

Students should have met Hubble's law and redshift (§11.6), kT as a typical thermal energy, rest energy mc², and blackbody radiation with Wien's law. The demo has four views. **Expansion**: galaxies at fixed comoving positions drawn to a fixed ruler, with distances to five marked galaxies A to E; four model universes (Planck 2018 ΛCDM, matter only, empty, de Sitter) with the same H₀ today, and a graph of a(t). **Thermal history**: T and kT against time on log scales from 10⁻⁴⁴ s to today, the book's eras, and lines at kT = mc²; below it g*, the number of kinds of particles sharing the energy. **Helium**: 2000 simulated nucleons through freeze out, neutron decay and helium formation, with kT_f, τ and t_D as settings. **Microwave background**: the blackbody at any redshift against today's, with the COBE FIRAS spectrum and its residuals.

## Running it in class

1. **Hubble's law today.** Read the distances to A to E, step +0.1 Gyr, and read them again. A grows by about 0.6 Mpc and E by about 2.6 Mpc: the same fraction, about 0.69% (Q1). Click another galaxy to make it home: everything recedes from it too (Q2).
2. **Matter only universe.** Same H₀ today, but the a(t) curve reaches zero only 9.67 Gyr ago, against 13.79 Gyr for Planck ΛCDM and 14.51 Gyr for the empty universe (Q3).
3. **Half the size.** 7.95 Gyr ago, a = 0.5 and H = 120.7 km/s/Mpc. Yet the speed of a galaxy now at a fixed comoving place, ȧ = aH, was 0.90 of today's value: the expansion has been speeding up (Q4).
4. **Proton pairs stop.** kT = 938 MeV at 1.09 × 10¹³ K, about 3 × 10⁻⁷ s. Slide on to the electron line (5.9 × 10⁹ K, about 3 s). Point out the bend in the curve and the drops in g* as each kind of particle disappears (Q5).
5. **Atoms form.** z = 1090, 2973 K, about 370 000 years; kT is only 0.26 eV (Q6).
6. **First three minutes.** Play it: the neutron share follows equilibrium until about 1 s, freezes near 0.166, decays slowly, and at 180 s the remaining 0.135 goes into helium, Y ≈ 0.27. Lower kT_f to 0.75 MeV to match the observed 0.245 (Q7).
7. **Glow at decoupling**, then Play: the spectrum slides down and to the left onto the FIRAS points of **Microwave sky today** (Q8).

## Questions

**Q1.** In the Hubble's law today setup, galaxy A is 86.57 Mpc away and E is 373.45 Mpc away. After 0.1 Gyr, A is 87.16 Mpc and E is 376.02 Mpc away. Find each galaxy's speed in km/s, and H₀ from each. (1 Mpc/Gyr = 977.8 km/s.)

**Q2.** Make another galaxy home. Do the galaxies still obey Hubble's law with the same H₀? What does that say about the center of the universe?

**Q3.** All four models have H₀ = 67.4 km/s/Mpc today. Why is the matter only universe 9.67 Gyr old, the empty one 14.51 Gyr and the Planck universe 13.79 Gyr?

**Q4.** When a = 0.5, H was 120.7 km/s/Mpc, larger than today. Was the expansion slowing down or speeding up between then and now?

**Q5.** At what temperature, and roughly when, did proton and antiproton pairs stop being made? Electron and positron pairs?

**Q6.** At decoupling T ≈ 2970 K and kT ≈ 0.26 eV, far below 13.6 eV. Why was hydrogen still ionized until then?

**Q7.** With kT_f = 0.8 MeV, τ = 878.4 s and t_D = 180 s, find n/p at freeze out, n/p at t_D, and the helium mass fraction Y.

**Q8.** The background was about 2973 K at z = 1090 and is 2.7255 K today. Find the peak frequency and the number of photons per cubic centimeter at both times, and explain why the spectrum is still a blackbody.

## Common misconceptions

- **"The Big Bang was an explosion at a point, and we are near the middle."** Space stretches everywhere at once; every observer sees the same Hubble law.
- **"Galaxies move through space faster than light beyond the Hubble distance, breaking relativity."** Recession speeds v = H d can exceed c; nothing outruns light locally.
- **"Everything expands, including atoms, people and the solar system."** Bound systems are held together and do not take part in the expansion.
- **"The age of the universe is simply 1/H₀."** That is only true for an empty universe; for ours it is a coincidence that the two are close.
- **"Helium was made in stars."** Most of it was made in the first minutes; stars have added only a few percent since.

## Physics behind the demo

- **Expansion.** H² = H₀²(Ω_r a⁻⁴ + Ω_m a⁻³ + Ω_k a⁻² + Ω_Λ), integrated on a grid of ln a (step 0.002, Simpson). Planck 2018: H₀ = 67.4, Ω_m = 0.315, Ω_r from T₀ = 2.7255 K and N_eff = 3.046 (massless neutrinos), Ω_Λ = 1 − Ω_m − Ω_r. Galaxies on a jittered comoving grid, 36 Mpc apart, with no peculiar velocities.
- **Thermal history.** Entropy conservation g*s T³ a³ = constant gives a(T); H from the energy density of every Standard Model species as an ideal Bose or Fermi gas (g* from 106.75 to 3.38), plus Planck matter and Λ. Quarks to hadrons as a sudden step at 156.5 MeV, only pions below; neutrinos decouple before e± annihilation; no inflation. Thresholds use kT = mc².
- **Helium.** n/p = e^(−1.293 MeV/kT) until a sudden freeze out at kT_f, then n ∝ e^(−t/τ) until t_D; Y = 2(n/p)/(1 + n/p). The sample draws one random number per nucleon for its equilibrium state and one for its decay time.
- **Microwave background.** Planck's law; T = T₀(1 + z); Wien peak 58.79 GHz/K; n = (2ζ(3)/π²)(kT/ħc)³. FIRAS monopole spectrum from Fixsen et al. (1996), Table 4.

## Going further

- Pair with **Cosmic Distance Ladder** (measuring H₀ from real galaxy redshifts and distances) and **Blackbody Radiation** (Wien's law and the Stefan–Boltzmann law at everyday temperatures).
- Homework: show that in a flat matter only universe a ∝ t^(2/3) and the age is 2/(3H₀).
