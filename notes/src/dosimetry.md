---
title: Dosimetry: Kerma, Equilibrium and the Ion Chamber
level: Upper level medical physics track (juniors in radiation physics, seniors before the proton center lab); calculus; Attix, Introduction to Radiological Physics and Radiation Dosimetry, chapters 2 to 4 and 12 to 14, and IAEA TRS-398
time: 20 to 60 minutes
---
## What students should come away with

- Kerma is energy handed to charged particles, dose is energy left behind. The electrons carry the energy forward, so near the surface the dose builds up from almost nothing while the collision kerma is already falling.
- Past the farthest electron range, dose and collision kerma fall together as e^(−μz) with a fixed ratio β = D/K_col slightly above 1: transient charged particle equilibrium. The depth of the dose maximum tracks the range of the fastest electrons, which is why megavoltage beams spare the skin.
- A Monte Carlo estimate carries a statistical uncertainty that shrinks as 1/√N; agreement with a model is judged against it.
- An ion chamber measures charge, not dose: D_air = (Q/m)(W_air/e), then Bragg–Gray gives D_w = D_air s_w,air p_Q. Recombination, polarity and air density all change the charge, and each has its correction.
- TRS-398 turns this into a recipe: D_w,Q = M k_TP k_pol k_s N_D,w,Q0 k_Q,Q0, where N_D,w comes from a ⁶⁰Co standards laboratory and k_Q carries the stopping power ratios and W_air from ⁶⁰Co to the user's beam.

## Before class

The strip switches between three views. **Kerma and dose** sends a broad beam of photons of one energy (0.2 to 4 MeV) into water: the picture shows interactions and the Compton electrons they start, to scale; the graph shows the collision kerma (NIST μ_en/ρ), the model's dose and Monte Carlo points with their uncertainties, and a depth probe. **Ion chamber** is a 0.6 cm³ Farmer chamber cut along its axis, with the saturation curve or the Jaffé plot (1/M against 1/V or 1/V²) for a pulsed proton beam or continuous ⁶⁰Co. **Calibration** is a water phantom with the chamber at the reference depth, an electrometer, a thermometer in the water and a barometer, for a scanned proton layer (70 to 225 MeV) or ⁶⁰Co at a standards laboratory, with the calibration steps and a Check for each factor in the sidebar. Mystery machine gives the proton beam a drifted output and a new room. Blind hides the model's dose, β, d_max, k_s and the checks.

## Running it in class

1. **⁶⁰Co buildup**: start it and let a million histories run. Ask Q1 while the Monte Carlo points fill in under the model curve.
2. **Equilibrium at depth**: ask Q2. Then **0.5 MeV: a thin buildup** and **4 MeV: a deep buildup** for Q3.
3. **Saturation curve, protons** and **High dose per pulse**: read the chamber at a few voltages and switch to the Jaffé plot. Ask Q4. **⁶⁰Co: hardly any recombination** shows the contrast.
4. **Where N_D,w comes from**, then **Calibrate a 150 MeV layer**: work down the steps together. Ask Q5 and Q6.
5. Turn on Mystery machine (a simulated output drift of 1 to 3 %, either way, and a new room) and let groups find the drift and decide whether it is significant.

## Questions

**Q1.** Why is the dose at the surface nearly zero when the photons' collision kerma is largest there? Where does the dose reach its maximum, and what sets that depth?

**Q2.** Past the buildup, D/K_col is constant and a little above 1. How can the dose exceed the collision kerma without creating energy?

**Q3.** For 0.5, 1.25 and 4 MeV the model's d_max is about 1.0, 4.5 and 19 mm. Relate each to the fastest Compton electron. Why do megavoltage beams spare the skin?

**Q4.** In a pulsed beam, 1/M is nearly a straight line in 1/V; in ⁶⁰Co the reading hardly changes from 50 V to 500 V. Why does a pulsed beam lose more ions to recombination than a continuous beam of the same average dose rate, and why does k_s grow with the dose per pulse?

**Q5.** At 150 MeV the PTW 30013 chamber's k_Q is 1.029. Where does each part of k_Q = (s_w,air W_air)_Q/((s_w,air W_air)_Co p_Co) come from, and which part makes it larger than 1?

**Q6.** The room is at 22.3 °C and 100.82 kPa. Compute k_TP. If the physicist forgot it, by how much would the beam be miscalibrated, and in which direction would every patient's dose then go?

## Common misconceptions

- **"Kerma and dose are the same thing."** They are equal only under charged particle equilibrium (and without radiative losses). In the buildup the dose is lower; past it, slightly higher.
- **"The dose maximum is where most photons interact."** Most interactions are at the surface. The maximum is where electrons from upstream have built up.
- **"An ion chamber measures dose directly."** It measures charge in a small mass of air; dose to water needs W_air, a stopping power ratio and several corrections.
- **"A higher voltage always gives a bigger reading."** Only until saturation; past that the reading is flat (and at very high voltage charge multiplication would start, which the demo does not model).
- **"The calibration coefficient is a property of the beam."** N_D,w belongs to the chamber, measured in ⁶⁰Co. k_Q moves it to the user's beam.

## Physics behind the demo

- Collision kerma of primary photons: K_col = Φ hν (μ_en/ρ) e^(−μz) with NIST liquid water μ/ρ and μ_en/ρ (Hubbell and Seltzer), log–log interpolated; broad parallel beam, primary photons only.
- Absorbed dose: D(z) = ∫ K_col(z − x) G(x) dx. G comes from the Klein–Nishina electron spectrum (dσ/dT, Attix eq. 7.13 form) and electron angle (cot θ_e = (1 + k) tan(θ/2)); each electron goes straight for its ESTAR CSDA range in water and leaves its ESTAR collision stopping power along the path; G is normalized to 1 so the collision kerma is conserved. Compton μ_C with ESTAR collision losses reproduces NIST μ_en/ρ within 0.1 % at 1.25 MeV. No multiple scattering, so the shape of the buildup is a sketch (⁶⁰Co: model d_max 4.5 mm, β 1.011).
- Monte Carlo: the same physics sampled per photon (depth from e^(−μz), a Compton event with probability μ_C/μ, electron energy by inverting the Klein–Nishina distribution), batches of 4000 histories, uncertainty = standard deviation of the batch means/√n_batch; the probe readout is linear between the two nearest bin centers, so it compares with the model at the same depth.
- Chamber: a Farmer type cavity of 0.6 cm³ (PTW 30013), radius 3.05 mm, central electrode radius 0.55 mm (typical), Boag's equivalent gap 2.78 mm. Air density from the ideal gas law (dry air, 28.9644 g/mol). Recombination: pulsed f = ln(1 + u)/u, u = α n₀ d²/((k₁ + k₂)V), and continuous f = 1/(1 + m² d⁴ q/(6V²)) (Boag 1950), with α = 1.3 × 10⁻¹² m³/s, k₁ = 1.87 × 10⁻⁴, k₂ = 2.09 × 10⁻⁴ m²/(V s) (Fenwick and Kumar 2023). Initial recombination and charge multiplication are left out. The polarity effect (+0.10 % in protons, +0.05 % in ⁶⁰Co) and the reading noise (0.05 %) are simulated.
- TRS-398 (2000) key data: proton s_w,air = 1.137 − 4.3 × 10⁻⁵ R_res + 1.84 × 10⁻³/R_res, W_air = 34.23 eV for protons and 33.97 eV for ⁶⁰Co, s_w,air(⁶⁰Co) = 1.133, p_Q = 1 in protons, p_Co = 0.982 (PTW 30013), 0.973 (NE 2571), 0.972 (FC65-G) (as tabulated by Burigo and Greilich 2019); two voltage coefficients for pulsed radiation. ICRU 90 W_air = 34.44 eV for protons is a Lab option. Reference depth for scanned layers from TRS-398 Rev. 1 Table 36 (2 g/cm² when R_res ≥ 5 g/cm², else 1 g/cm²); R_p is the PSTAR CSDA range, a stated simplification.
- The simulated chamber is built from the same formulas, so the protocol closes: with exact Boag k_s the calculated dose equals the delivered dose to 1 part in 10⁵; with the TRS-398 two voltage polynomial, to about 0.03 % at 1 mGy per pulse. N_D,w (simulated certificate) = s_w,air p_Co W_air/(ρ_air V), 5.23 × 10⁷ Gy/C (19.1 nC/Gy) for the PTW 30013 against PTW's nominal 20 nC/Gy.
- The demo is a teaching version, not a calibration protocol: a real calibration uses the chamber's certificate and the TRS-398 Rev. 1 (2024) tables, whose k_Q values were recalculated with ICRU 90 key data and Monte Carlo chamber factors.

## Going further

- Pair with **Compton Scattering** for the Klein–Nishina cross section, **Gamma Spectroscopy** for attenuation and detectors, and **Nuclear Reactions** (Dose view) for point source dose rates and Gy against Sv.
- AAPM TG-51 does the same job for photon and electron beams with k_Q against %dd(10)_x; compare its formalism with TRS-398's.
- At the proton center, ask which chamber and electrometer the physicists use for the annual calibration, what their k_s and k_pol are, and how the daily output check is tied to it.
