---
title: White Dwarf Cooling
level: Intro astronomy; upper level astrophysics (stellar remnants, plasma physics)
time: 15 to 25 minutes
---
## What students should come away with

- A white dwarf has no fuel. It shines by leaking heat stored in its ions; the degenerate electrons store almost none.
- The thin envelope is the insulation and sets L ∝ M T_c^3.5. With U = (3/2)NkT_c this gives Mestel's law, t ≈ (2/5)U/L and L ∝ t^(−7/5): fast fading while hot, ever slower later.
- The ions freeze where the coupling Γ = (Ze)²/(4πε₀ a kT) passes about 175. Γ grows as ρ^(1/3)/T, so freezing starts at the dense center, and heavier (denser) white dwarfs freeze first, while still bright.
- Freezing releases latent heat (0.77 kT per ion), so crystallization slows the fading.
- This page is a textbook model. Its envelope makes a 0.6 M☉ white dwarf start to crystallize later and fainter (T_eff about 3900 K) than detailed models (about 6000 K), so read its trends, not its exact numbers.

## Before class

Students need L = 4πR²σT_eff⁴ and (3/2)kT per particle. Three panels: luminosity (or **Core T**) against cooling age, a slice through the star with its Γ profile, and a schematic Gaia HR diagram. Drag the age line, the dot on the HR diagram, or the handle on the star's surface (mass); the **Mass M** and **Cooling age t** sliders do the same. Checkboxes under **Crystallization** turn freezing and latent heat on and off; **Liquid ions** switches between **Ideal gas** and **Coulomb liquid**. Turn on **Projector** for the room.

## Running it in class

1. **Hot young white dwarf.** A 0.6 M☉ carbon/oxygen dwarf 20,000 years old: about 3 L☉, T_eff ≈ 67,500 K. Let it play and watch the dot slide down its HR track. Ask the class where its light comes from.
2. **Mestel cooling law.** Ideal gas ions, no freezing. At 100 Myr the curve has joined the dashed L ∝ t^(−7/5) line (slope −1.38). Work Q2 with the rail's numbers, then switch to **Coulomb liquid**: the curve moves right, because the liquid stores more heat per ion.
3. **Crystallization begins.** A 0.8 M☉ dwarf at 6.31 Gyr: 24% of its mass is solid, but the front is only at 0.34 R. The Γ panel shows Γ = 214 at the center. Point at the dotted curve (no latent heat) and the **Delay from latent heat** readout (+712 Myr); ask Q5.
4. **Heavier dwarfs crystallize first.** Ask Q1 before you press it. The 1.0 M☉ onset is at 1.28 Gyr and M_G ≈ 13.0, where Gaia found the Q branch pile up. Drag the mass handle and watch **Crystallization begins** and **Center freezes at** move (Q4).
5. **Helium vs carbon/oxygen.** 3.4 times as many ions in the same mass: brighter at the same age, and Γ is about 8 times smaller, so it does not freeze within the age of the universe (Q6).
6. **Cosmic clock.** A simulated disk 9 Gyr old. Drag the gold line and the faint end of the counts (**Faintest 1%**) moves with it. Finish with Q7: this 0.6 M☉ dwarf starts freezing at T_eff 3,887 K (**Crystallization begins**), where detailed models give about 6000 K.

## Questions

**Q1.** Predict: two carbon/oxygen white dwarfs form at the same time, one of 0.6 M☉ and one of 1.0 M☉. Which starts to crystallize first, and is it brighter or fainter than the other at that moment? Then check with **Heavier dwarfs crystallize first**.

**Q2.** In the **Mestel cooling law** preset at a cooling age of 100 Myr, the rail shows 5.2 × 10⁵⁵ ions, a core temperature T_c = 1.68 × 10⁷ K and L = 6.0 × 10⁻³ L☉ (L☉ = 3.83 × 10²⁶ W). Find the stored heat U = (3/2)NkT_c and Mestel's age t = (2/5)U/L, and compare with the age. (k = 1.381 × 10⁻²³ J/K, 1 yr = 3.156 × 10⁷ s.)

**Q3.** In Mestel's model L ∝ T_c^3.5 and U ∝ T_c. Show that late in life L ∝ t^(−7/5). If a white dwarf takes 1 Gyr to fade to some luminosity, how old is it when ten times fainter? Check the slope readout.

**Q4.** Γ ∝ ρ^(1/3)/T, and freezing starts when the center reaches Γ = 175. The rail gives central densities of 3.2 × 10⁶ g/cm³ for 0.6 M☉ and 2.8 × 10⁷ g/cm³ for 1.0 M☉. By what factor is the 1.0 M☉ dwarf's freezing temperature higher? Check with **Center freezes at** for both masses.

**Q5.** Latent heat makes the white dwarf take longer to fade, yet at any given core temperature it is exactly as bright as without latent heat. Explain both facts.

**Q6.** A 0.6 M☉ helium white dwarf fades more slowly than a carbon/oxygen one of the same mass and radius, and does not crystallize within the age of the universe. Explain both, using the number of ions and Γ ∝ Z²/a.

**Q7.** With the 0.6 M☉ carbon/oxygen dwarf selected, the rail says crystallization begins at L = 3.3 × 10⁻⁵ L☉, and the radius is 8,841 km. Use L = 4πR²σT_eff⁴ to find T_eff at onset (σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴). Detailed models give about 6000 K. Which way does this page's envelope err, and why does that make the onset later and fainter?

## Common misconceptions

- **"A white dwarf is still burning something."** There is no fusion; it shines only because its ions are hot.
- **"It cools at a steady rate."** The hotter it is, the faster it loses heat (L ∝ T_c^3.5), so most of its life is spent faint.
- **"The electrons hold the heat, since they hold the star up."** Degenerate electrons can hardly absorb heat; the ions store it.
- **"It freezes from the surface in, like a pond."** The core is at one temperature, so Γ is largest where the density is: the center.

## Physics behind the demo

- **Structure:** a zero temperature Chandrasekhar white dwarf (μ_e = 2), held fixed as it cools. C/O is 50:50 by mass (mean A = 13.7).
- **Envelope:** the textbook Kramers opacity relation L ∝ M T_c^3.5 (Shapiro and Teukolsky) with X = 0, Y = 0.9, Z = 0.1. Real envelopes are hydrogen or helium and brighter at a given T_c. This largest simplification puts the 0.6 M☉ onset of crystallization at T_eff ≈ 3900 K instead of about 6000 K, and makes every age here only indicative.
- **Cooling:** isothermal core, dU/dt = −L from T_c = 10⁸ K down. Neutrino cooling (dominant above about 25,000 K) is left out.
- **Heat and freezing:** ions only: ideal gas (3/2 k per ion) or a Coulomb liquid fit; solid 3k per ion; Debye cooling marked but not modeled. One melting value Γ_m = 175 (one component plasma), applied to C/O with ⟨Z^(5/3)⟩; latent heat 0.77 kT per ion. Carbon/oxygen phase separation and ²²Ne settling, which release extra energy, are left out.
- **HR diagram:** schematic blackbody colors; the population dots are simulated, not Gaia data.

## Going further

- Compare with **Star Slice**, which plays back a detailed model of a 0.6 M☉ white dwarf as it freezes: what does it include that this page leaves out?
