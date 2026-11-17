---
title: The Fate of the Universe
level: Astronomy (galaxies and cosmology; OpenStax Vol. 3 §§11.6 and 11.7)
time: 20 to 30 minutes
---
## What students should come away with

- How the universe expands is set by what it holds: matter slows the expansion, dark energy with w = −1 speeds it up, and the sum of all the Ω's sets the shape of space (flat at exactly 1, closed above, open below).
- Shape and fate are separate questions once there is dark energy: a closed universe can expand forever, and an open one could in principle recollapse if its dark energy were negative.
- Distant type Ia supernovae look fainter than they would in a universe of matter alone. Fainter means farther, farther means the light took longer, so the expansion was slower in the past: it is speeding up. That was the 1998 discovery; 1,473 supernovae now show it far more sharply.
- The supernovae say "speeding up"; the size of the hot and cold spots in the microwave background says "flat". Together they pin our universe near Ω_m = 0.3, Ω_Λ = 0.7.
- With w = −1 our universe ends in a Big Freeze, speeding up: galaxies drift out of reach, stars fade after about 10¹⁴ years, black holes evaporate last. A Big Crunch needs much more matter; a Big Rip needs w < −1.

## Before class

Students should know Hubble's law, redshift (1 + z = the factor by which space has stretched since the light left) and the inverse square law for brightness. The demo has four views on one universe, set by four sliders (matter Ω_m, dark energy Ω_Λ, its pressure w and H₀) or by dragging the dot on the map of matter against dark energy. **Expansion**: the size of the universe a against time, with today at t = 0 and dashed curves for Planck 2018 and for matter only; the map; and below, the matter and dark energy densities against time. **Supernovae**: the Pantheon+ supernovae (real data, grouped in redshift bins; Every supernova shows all 1,473) as brightness compared with an empty universe against redshift, and the regions of the map they allow. **Shape of space**: a triangle with three equal sides of light rays on a sphere, a plane and a saddle, with its angle sum, and the size of the microwave background spots. **Endings**: a timeline of the future on a log scale of years.

## Running it in class

1. **Our universe.** Press Play: the curve bends down for the first several billion years and then up. Read Age today, Speeding up began and Dark energy overtook matter (Q1).
2. **Just barely: matter only.** The same H₀ today, but a younger universe (Q2).
3. **Big Crunch.** Switch the graph to 250 Gyr and play it to the end. Read Largest size and Big Crunch at (Q3).
4. **Matter against dark energy at z = 2.** Read the two densities then; press −1 Gyr until a reaches 0.667 (Q4).
5. **1998: speeding up** and **Fainter means farther** (Supernovae view). Drag the dot to the matter only corner and back; watch the curve leave the points (Q5, Q6).
6. **Triangle on a globe**, then **Flat: the hot spots** (Q7).
7. **Big Rip**, then Endings (Q8). Finish on **How it ends**.

## Questions

**Q1.** In the Our universe setup, the Hubble time 1/H₀ is 14.51 Gyr. Is the age of the universe longer or shorter, and why? The speeding up began before dark energy overtook matter. Use the acceleration equation (pressure counts too) to explain why.

**Q2.** A universe of matter alone at exactly the critical density, with the same H₀, is how old? Some stars in the Milky Way are about 13 billion years old. What does that tell you about this universe?

**Q3.** In the Big Crunch setup (Ω_m = 2, no dark energy), find the age today, when the expansion stops, how big the universe is then, and when the crunch comes. Compare the time from the Big Bang to the turnaround with the time from the turnaround to the crunch.

**Q4.** Light we see at redshift z = 2 left when the universe was a third of today's size. How many times denser was matter then? Dark energy? Which one was ahead, and by how much? Repeat for z = 0.5.

**Q5.** A type Ia supernova at z = 0.5 looks 70% as bright in our universe as it would in a matter only universe. How many times farther away is it? Explain in one or two sentences why "farther" means "speeding up".

**Q6.** With all 1,473 supernovae, compare χ² for Planck 2018 and for matter only. Which fits, and how strongly? Where on the map are the universes the supernovae allow, and which line do they lie above?

**Q7.** In the Triangle on a globe setup, what is the curvature radius R, and what angles does the triangle have? What angle sum would a flat universe give, and an open one? Planck measured the hot spots to be 0.5965° across; what does the demo give for a flat universe, and for the closed one?

**Q8.** In the Big Rip setup (w = −1.5), when does the rip come? How long before it are the Milky Way, the solar system and the Earth torn apart? Check one of these with the formula t = P√(2|1 + 3w|)/(6π|1 + w|), where P is the orbital period.

## Common misconceptions

- **"A flat universe means it will expand forever, and a closed one must recollapse."** That is true only without dark energy. On the map, the shape line (flat) and the recollapse line are different lines.
- **"Dark energy is the energy of the expansion, so it thins out like matter."** With w = −1 its density stays the same as space grows; that is exactly why it takes over.
- **"The expansion speeding up means galaxies are flying apart through space."** Space between them stretches; bound systems such as galaxies and the solar system do not expand, unless w < −1 and a Big Rip comes.
- **"Fainter supernovae means they are smaller or dimmer."** Type Ia supernovae are standard candles after a correction for how fast they fade; fainter means farther.
- **"Total Ω above 1 always means closed and doomed."** Radiation counts too: Ω_m = 1 exactly with no dark energy is a tiny bit over the critical density (Ω_r = 9 × 10⁻⁵) and, very far in the future, recollapses. The Just barely setup uses Ω_m = 1 − Ω_r.

## Physics behind the demo

- **Expansion.** E² = (H/H₀)² = Ω_r a⁻⁴ + Ω_m a⁻³ + Ω_k a⁻² + Ω_DE a^(−3(1+w)) with Ω_k = 1 − Ω_r − Ω_m − Ω_DE, Ω_r from T₀ = 2.7255 K with N_eff = 3.046 (the same as The Big Bang and the Early Universe). a(t) by fourth order Runge–Kutta on ä = −H₀² a [Ω_r a⁻⁴ + Ω_m a⁻³/2 + (1 + 3w)/2 Ω_DE a^(−3(1+w))], with the radiation and matter solution in closed form below a = 10⁻³. The fate comes from the roots of E²: a root above today is a recollapse, a root below is a bounce; w < −1 with Ω_DE > 0 rips. A rip's last moments use the dark energy term alone.
- **Distances.** D_M = (c/H₀) S_k(∫dz/E), with sin or sinh for curved space, D_L = (1 + z) D_M, μ = 5 log₁₀(D_L/10 pc).
- **Supernovae.** Pantheon+ (Scolnic et al. 2022; Brout et al. 2022), the distance moduli calibrated with SH0ES, z > 0.01 (1,473 after merging duplicate entries of the same supernova by weighted mean), diagonal errors only. Each model is fitted with a free offset, which absorbs H₀ and the supernovae's absolute brightness, so the supernovae alone weigh only the shape of the curve. Regions: Δχ² = 2.30 and 6.18 on a 31 by 43 grid in Ω_m and Ω_DE for the w shown.
- **Shape of space.** Curvature radius R = (c/H₀)/√|Ω_k|. An equilateral triangle of side s has angles with cos A = cos k/(1 + cos k) on a sphere and cosh k/(1 + cosh k) on a saddle, k = s/R. The saddle and globe are drawings of two dimensional surfaces; the universe is curved in three. Spot size θ* = r*/D_M(z*), with Planck's sound horizon r* = 144.43 Mpc and z* = 1089.92; the skies are simulated, only their scale is computed.
- **Endings.** Timelines in years from now: the Milky Way and Andromeda (van der Marel et al. 2012), the last stars (Adams and Laughlin 1997), Hawking evaporation t = 5120πG²M³/(ħc⁴) (photons only), the Big Rip times for bound systems (Caldwell, Kamionkowski and Weinberg 2003).

## Going further

- Pair with **The Big Bang and the Early Universe** (the first minutes and the microwave background) and **Cosmic Distance Ladder** (how supernovae are calibrated).
- Homework: show that the speeding up begins when the matter density is twice the dark energy density (for w = −1), and find a then.
