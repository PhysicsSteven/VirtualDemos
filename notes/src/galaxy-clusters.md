---
title: Galaxy Clusters and Dark Matter
level: Astronomy (galaxies and cosmology; OpenStax Astronomy 2e §§28.3 and 29.6)
time: 25 to 35 minutes
---
## What students should come away with

- A cluster of galaxies can be weighed three independent ways: from the speeds of its galaxies (Zwicky, 1933), from the temperature of its hot X-ray gas, and from how much it bends the light of galaxies behind it.
- All three agree, and all three find about seven times more mass than the stars and gas together, about fifty times the mass in stars. Most of the mass is dark matter.
- The stars and gas alone could not hold the galaxies or the hot gas in: both would fly apart in a billion years or so, yet clusters are billions of years old.
- In the Bullet Cluster, two clusters have just passed through each other. The galaxies passed through, the gas clouds collided and stalled, and the lensing mass sits with the galaxies, not with the gas that holds most of the ordinary mass. Dark matter passed through like the galaxies.

## Before class

Students should know M = v²r/G for a circular orbit, that the Doppler shift gives speed along the line of sight, Wien's law, and that mass bends light. The demo has four views of one simulated cluster, set by its mass inside 2,000 kpc. **Zwicky's speeds**: 1,000 galaxies colored by their speed toward or away from us, with a histogram of those speeds. **Hot gas**: a sample of the gas, its temperature and Wien peak, and the mass inside each radius from the gas, beside the mass of the gas and of the stars. **Lensing**: a ray traced picture of background galaxies bent by the cluster, with the Einstein ring and the mass inside it. **The Bullet Cluster**: a simple model of two clusters colliding, with galaxies, hot gas and the lensing mass map. "What pulls" lets only the stars, or the stars and gas, pull. Everything is simulated.

## Running it in class

1. **Zwicky's puzzle: only the stars.** Press Play and watch the middle empty out (Q1).
2. **Add the unseen mass** (Q2), then **Stars and gas are not enough**.
3. **The book's cluster: 800 km/s** (Q3).
4. **Gas at 100 million K**, then **Hot gas without dark matter** (Q4).
5. **Arcs from a background galaxy**: press Play. **An Einstein ring** (Q5), then **Lensing by the stars and gas alone** (Q6).
6. **Before the collision**: press Play and stop near 150 million years after the pass. **The Bullet Cluster today**, then **with no dark matter** (Q7).

## Questions

**Q1.** In Zwicky's puzzle, only the stars pull (2% of the mass). Press Play. What happens to the galaxies in the middle within a billion years? Why is that a puzzle for real clusters?

**Q2.** In Add the unseen mass (1.00 × 10¹⁵ M☉ inside 2,000 kpc), read the measured spread σ of the line of sight speeds. In this cluster the orbit speed is v = √2 σ. Find M = v²R/G for R = 2,000 kpc and compare it with the true mass and with the mass in stars. Why is the measured spread a little different every time you change the mass?

**Q3.** The book's cluster is 4,000 kpc across, with galaxies orbiting at 800 km/s. Find its mass. What line of sight spread σ should you measure?

**Q4.** In Gas at 100 million K, at what wavelength does the gas glow brightest, and in what band? What mass inside 2,000 kpc does the gas give? Compare with the mass of the gas itself and of the stars. What happens in Hot gas without dark matter?

**Q5.** In An Einstein ring (cluster at z = 0.296, background galaxy at z = 1), read the distances, the ring's radius in arcseconds and in kpc, and the mass inside the ring. Check the mass with M = (c²/4G)(D_l D_s/D_ls)θ². How does it compare with the stars and gas inside the ring?

**Q6.** In Lensing by the stars and gas alone, why is there no ring? By what factor is the bending weaker?

**Q7.** In The Bullet Cluster today, 150 million years after the pass: how fast is the small cluster moving through the big one, how far apart are the two clusters' galaxies, and how far is the small cluster's gas behind its galaxies? Where does the lensing mass map peak, with and without dark matter? What does the real Bullet Cluster's map show, and why is that evidence for dark matter rather than for a change in the law of gravity?

## Common misconceptions

- **"Dark matter is just gas and dust we have not seen yet."** The hot gas is seen, in X-rays, and counted; it is about 13% of the mass. Dust and cold gas are far less.
- **"The galaxies hold the cluster together."** Their stars are about 2% of the mass, far too little.
- **"Only the galaxy speeds point to dark matter."** Three methods with different physics (orbits, gas pressure, bending of light) agree.
- **"In a collision, dark matter would slow down like the gas."** Dark matter barely interacts except by gravity, so, like the galaxies, it passes through.

## Physics behind the demo

- **Cluster model.** A cored isothermal sphere: M(<r) = 2σ²r³/(G(r² + r_c²)), r_c = 50 kpc (a β model with β = 2/3). Stars 2% of the mass (Gonzalez et al. 2013), hot gas 13% (Vikhlinin et al. 2006), dark matter 85%, all spread like the total.
- **Galaxies.** 1,000 tracers with density ∝ 1/(r² + r_c²) out to 5,000 kpc and Maxwellian speeds of spread σ, which is a steady state of this sphere (galaxies near the 5,000 kpc edge slowly leak out). Leapfrog steps of 1 Myr. σ is measured from the galaxies seen inside 2,000 kpc; M = 2σ²R/G overestimates M(R) by R²/(R² + r_c²), 0.06% at 2,000 kpc.
- **Hot gas.** kT = μ m_p σ² with μ = 0.6; hydrostatic mass M(r) = 2kT r³/(Gμm_p(r² + r_c²)), exact for this model. Wien λ = b/T.
- **Lensing.** Projected mass π σ² R²/(G√(R² + r_c²)); lens equation β = θ − θ_E θ/√(θ² + θ_c²), θ_E = 4π(σ/c)² D_ls/D_s. Flat ΛCDM distances with H₀ = 67.4 km/s/Mpc and Ω_m = 0.315 (Planck 2018).
- **Bullet Cluster.** Two rigid Plummer halos (1.0 × 10¹⁵ and 1.0 × 10¹⁴ M☉, 300 and 150 kpc) falling from 2,000 kpc at 1,000 km/s; galaxies are test particles; each gas cloud has 13% of its cluster's mass and a ram pressure drag while the clouds overlap, with a strength chosen to resemble the real picture (Clowe et al. 2006). A simple model, not a hydrodynamic simulation.
