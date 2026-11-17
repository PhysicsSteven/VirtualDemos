---
title: Inside the Sun
level: Astronomy (the Sun and stars; Stars and Galaxies Unit 1, Days 3 and 4); pairs with Star Slice
time: 20 to 40 minutes
---
## What students should come away with

- The Sun is in balance: at every depth the pressure pushing out holds up the weight of the gas above (hydrostatic balance). It neither explodes nor collapses.
- The core is a thermostat. If fusion makes more energy than the surface sends out, the core expands and cools, and fusion slows; if it makes less, gravity squeezes the core, squeezing heats it, and fusion speeds back up. A star made of normal gas keeps its fusion rate equal to its light.
- Four hydrogen atoms weigh more than one helium atom: 0.712 % of the mass goes missing and comes out as E = mc², 26.73 MeV per helium. The Sun turns 4.26 billion kilograms of mass into energy each second and still lasts about 10 billion years.
- Heavier stars have more fuel but burn it far faster (L grows much faster than M), so they die young.
- Light leaves the core by a random walk: after N steps a walker is typically √N steps from the start, so the trip takes about (R/ℓ)² steps and tens of thousands of years or more. Neutrinos fly straight out in 2.3 s and reach Earth 8.3 minutes later, so they show the core today.
- The solar neutrino problem: the chlorine experiment caught about a third of the predicted neutrinos. SNO counted every type and found the full number: the core model was right, and neutrinos change type on the way.

## Before class

Four modes, chosen above the picture. The picture is the Sun cut open: the left half is the surface, the right half is a cut face colored by temperature from a MESA model of the Sun at 4.57 billion years (a heat ramp, not the color the gas would glow).

**Thermostat**: a slider squeezes or stretches the core (or drag its edge in the picture), a second slider multiplies the fusion rate, and a checkbox puts a lid on the core. Play runs the model at 1 s = 1 Myr; the bars compare the energy made by fusion with the light leaving, and the loop of arrows lights up the step that is happening. The graph is central temperature with fusion ÷ L☉ in purple. Setups: Squeeze the core (the opening state, 3 % smaller), Puff it up, Fusion runs fast, Fusion runs slow, Lid on: a runaway. **Fuel**: the pp I chain step by step, then a balance with four ¹H against one ⁴He; sliders for a star's mass and luminosity give its lifetime, and the graph compares the Sun burning coal, shrinking (Kelvin's idea), and fusing. Setups: The Sun, 2 M☉ at 16 L☉ (the lesson's exercise), Sirius A, A red dwarf. **Light's long walk**: 160 simulated walkers in a box with the √N circle; a step length slider for the Sun gives the number of steps and the time. Setups: Leaving a concert (the lesson's 100 steps), The Sun with 0.5 mm steps, The real core. **Neutrinos**: a neutrino and a photon leave the core together; two tanks catch neutrinos (simulated counts), and the graph compares the predictions with the measurements. Setups: The race out, The solar neutrino problem, If neutrinos never changed.

## Running it in class

1. **Squeeze the core.** Before Play, ask Q1. Play and watch the loop: fusion is too fast, the core expands and cools, fusion settles back to 1 L☉ in a few million years.
2. **Lid on: a runaway.** Ask Q2.
3. **Fuel, The Sun.** Weigh four hydrogens against a helium. Ask Q3, then Q4 with the 2 M☉ setup.
4. **Light's long walk, Leaving a concert**, then **The Sun, 0.5 mm steps.** Ask Q5.
5. **Neutrinos, The race out**, then **The solar neutrino problem.** Ask Q6.

## Questions

**Q1.** The core starts 3 % smaller than today. Predict: does it stay small, shrink further, or grow back? What does fusion do right after the squeeze, and why does the core end where it started?

**Q2.** With the lid on, the core cannot expand. Why does the extra heat now make things worse instead of better? Where in a real star does something like the lid happen?

**Q3.** Four ¹H atoms weigh 4.0313000 u and one ⁴He atom 4.0026033 u. What fraction of the mass is lost, and how much energy is that per helium in MeV (1 u c² = 931.494 MeV)?

**Q4.** A star of 2 M☉ shines at 16 L☉. Using the same rule as the Sun (10 % of the mass fused, 0.7 % of that turned to energy), how long does it last compared with the Sun's 10.5 billion years?

**Q5.** A photon in the Sun's core goes 0.5 mm between absorptions. About how many steps does it take to travel 7.0 × 10⁸ m, and how long does that take at the speed of light? Why is the real trip time uncertain by a large factor?

**Q6.** Homestake measured 2.56 SNU where 8.1 SNU were predicted. SNO found electron neutrinos 1.76 against 5.09 for every type (in units of 10⁶ per cm² per s). What do the two experiments together say about the Sun's core and about neutrinos?

## Common misconceptions

- **"The Sun is burning."** Burning is chemistry: a Sun made of coal would last only about 5,000 years. The Sun runs on nuclear fusion, which releases millions of times more energy per kilogram.
- **"The Sun will run out of hydrogen soon," or "fusion uses up all the hydrogen."** Only the core fuses, about a tenth of the mass, and the Sun is about halfway through its 10 billion years.
- **"Hotter fusion makes the Sun blow up."** In normal gas a hotter core expands and cools: the thermostat. A runaway needs a core whose pressure does not depend on temperature (a degenerate core, the helium flash).
- **"Light from the core reaches us in 8 minutes."** The 8.3 minutes is from the surface. Energy made in the core today takes tens of thousands of years or more to reach the surface; neutrinos made today arrive in 8.3 minutes.
- **"Bigger stars live longer because they have more fuel."** They burn it much faster: 2 M☉ at 16 L☉ lasts an eighth as long as the Sun.

## Physics behind the demo

- Thermostat: the whole Sun is treated as an n = 3 polytrope that keeps its shape as it grows or shrinks (homologous), so E = −(3/4)GM²/R (virial theorem, ideal monatomic gas), T_c ∝ 1/R and ρ_c ∝ 1/R³. Pressure balances gravity at every moment; only the energy changes, dE/dt = L_fusion − L☉, with the light leaving held at L☉. Fusion follows the pp rate for two protons, ρT^(−2/3)e^(−τ) with τ = 3(E_G/4kT)^(1/3), E_G = 493 keV (Clayton), about T^3.8 at 15.7 MK. A 3 % squeeze gives 1.23 L☉; the small squeeze relaxation time is |E|/((3 + ν)L☉) = 3.4 Myr, against Kelvin's GM²/(RL) = 31.4 Myr. Today's central values 15.71 MK and 162,200 kg/m³ are from the NASA Sun Fact Sheet. Core changes are drawn 5 times larger than they are.
- Fuel: AME2020 atomic masses, Δm = 0.0286967 u = 0.712 %, Q = 26.73 MeV, of which the two pp neutrinos carry off about 0.53 MeV (mean 0.265 MeV each, Bahcall 1989). Lifetime t = 0.1 × 0.00712 × Mc²/L (the round rule of OpenStax Astronomy 2e), 10.53 billion years for the Sun. Sirius A: 2.063 M☉, 25.4 L☉ (Bond and others 2017). Coal: 29.3076 MJ/kg.
- Random walk: the walkers in the box are simulated in 2D, where the mean square distance after N steps is exactly N. For the Sun, t = R²/(ℓc) with one ℓ everywhere; the mean first arrival in 3D is R²/(2ℓc). Electron scattering alone on the MESA model gives about 3,900 years to the base of the convection zone (the shortest possible); with the real opacity Mitalas and Sills (1992) found about 170,000 years.
- Neutrinos: R☉/c = 2.32 s, 1 au/c = 499.0 s, flux 6.5 × 10¹⁴ per m² per s at Earth (two neutrinos per 26.2 MeV of light). SNO 2002: CC 1.76, NC 5.09 (10⁶ cm⁻² s⁻¹). Homestake 2.56 SNU (Cleveland and others 1998) against 8.1 predicted (Bahcall, Serenelli and Basu 2005). Tank counts are simulated with the measured electron neutrino share 0.346.

## Going further

- **Star Slice** shows the same MESA Sun, its layers and how they change over its life; **The Sun: Surface and Cycle** picks up where the energy reaches the surface.
- **Spectra** and **Spectral Classes** for how we read the surface temperature.
