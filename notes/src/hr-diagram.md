---
title: Stellar Evolution
level: Intro astronomy (non-majors and majors)
time: 20 to 30 minutes
---
## What students should come away with

- The Hertzsprung Russell diagram plots luminosity against surface temperature, hot on the left. Since L = 4πR²σT⁴, lines of constant radius run diagonally: giants are at the top right, white dwarfs at the bottom left.
- A star's mass sets where it sits on the main sequence and how long it stays there. Luminosity rises steeply with mass (about M⁴), so the lifetime falls as about 10¹⁰ yr × M⁻²·⁵.
- Stars spend most of their lives on the main sequence, which is why most stars we see are there. The later stages are short.
- A star like the Sun becomes a red giant, sheds a planetary nebula and leaves a white dwarf about the size of Earth, which cools at constant radius. Stars above about 8 M☉ end as supernovae.
- In a cluster all stars are born together, so the mass at the main sequence turnoff gives the cluster's age.

## Before class

Students should have seen the blackbody ideas: hotter means bluer, and luminosity depends on size and temperature (the **Blackbody Radiation** demo is a good lead in). The demo opens on **The Sun** with the background stars, radius lines and main sequence band shown. The **Life stage** slider and **Play** stretch the short late phases so they can be seen; the **Age** readout always gives the real age. Turn on **Projector** for a large room.

## Running it in class

1. **Read the axes first.** With **The Sun** selected, point out that temperature increases to the left and luminosity is logarithmic. Ask Q1, then show the radius lines.
2. **The Sun**, then **Play.** The Sun leaves the main sequence, climbs the red giant branch, has its helium flash, settles on the horizontal branch, climbs the asymptotic giant branch, sheds a planetary nebula and drops to the white dwarf line. Pause near the top of the red giant branch and read the **Radius** (Q3). Point at the **Share of the life** bar: the main sequence takes 85% of the time.
3. **Red dwarf.** At 13.8 Gyr it has barely moved. Its main sequence lifetime by this scaling is 203 Gyr.
4. **Massive star**, then **Play.** A 15 M☉ star lives about 11.5 Myr, crosses to a red supergiant and leaves the diagram as a supernova. Compare the three lifetimes (Q2).
5. **Sirius A**, then **White dwarf cooling.** Ask Q4 about Sirius B. The white dwarf slides down a line of constant radius; drag the **Initial mass** slider and watch heavier stars leave smaller white dwarfs (Q6).
6. **Cluster.** Drag the **Cluster age** slider. The turnoff slides down the main sequence and the white dwarf count grows (Q5). Tap a star to read its mass and phase.

## Questions

**Q1.** Predict: two stars have the same surface temperature, but one is 100 times as luminous as the other. Which one is larger, and by what factor? Check with the radius lines on the diagram.

**Q2.** The demo uses t ≈ 10¹⁰ yr × M⁻²·⁵ for the main sequence lifetime, with M in solar masses. Find the lifetime of stars of 0.3, 2 and 15 M☉ and compare with the readouts. Why does a star with more fuel run out sooner?

**Q3.** Near the top of its red giant branch the Sun reaches about 2500 L☉ at 3150 K. Use L = 4πR²σT⁴ in solar units, L/L☉ = (R/R☉)²(T/T☉)⁴ with T☉ = 5772 K, to find its radius. Compare with the radius of Earth's orbit, 1 AU = 215 R☉. Check with the **Radius** readout.

**Q4.** Sirius A, about 2 M☉, is still on the main sequence. Its companion Sirius B is a white dwarf of about 1 M☉. The two formed at the same time. How can the less massive star of the pair be the one that has already died?

**Q5.** In the **Cluster** preset at 600 Myr the turnoff mass is about 3.1 M☉. Use the lifetime formula of Q2 to find the cluster ages at which the turnoff is at 2 M☉ and at 1 M☉. Check by dragging the **Cluster age** slider. Why do astronomers date clusters this way rather than single stars?

**Q6.** The Sun's white dwarf in the demo has 0.57 M☉ and a radius of 0.0128 R☉ (1.4 Earth radii). Find its surface temperature when it has cooled to 10⁻³ L☉. Then drag along the white dwarf track to check, and read the cooling age. Why does a white dwarf cool along a line of constant radius?

## Common misconceptions

- **"Stars move along the main sequence as they age."** A star stays near the same spot for its whole main sequence life; here it brightens by about a factor of 2. Its place on the main sequence is set by its mass.
- **"The HR diagram is a map of where stars are in the sky."** It is a graph of two physical properties. Two stars next to each other on it can be far apart in space.
- **"Bright stars must be hot."** Red giants are cool but huge. Luminosity depends on R² as well as T⁴.
- **"Massive stars live longer because they have more fuel."** They burn it far faster: a 15 M☉ star lives nearly a thousand times shorter than the Sun.
- **"The Sun will explode as a supernova."** Stars below about 8 M☉ end as white dwarfs. The Sun will become a red giant and then a white dwarf.

## Physics behind the demo

- Main sequence fits: L ≈ 0.23 M²·³ below 0.43 M☉, M⁴ from 0.43 to 2 M☉ and 1.4 M³·⁵ above; R ≈ M⁰·⁸ below 1 M☉ and M⁰·⁵⁷ above; t ≈ 10¹⁰ yr × M⁻²·⁵. These describe a star midway through its main sequence, and T comes from L = 4πR²σT⁴.
- Everything after the main sequence is a schematic track. The shapes are right; the numbers are approximate, and durations are set as fractions of the main sequence lifetime. Real tracks depend on composition, rotation, binaries and mass loss. The background stars are generated to follow the real distribution of nearby stars, not taken from a catalog. The split between neutron stars and black holes near 20 M☉ is uncertain.
- White dwarfs: mass from M_WD ≈ 0.08 M_i + 0.49 M☉; radius from a fit to the Chandrasekhar relation, R ≈ 0.0126 R☉ (M/M☉)^(−1/3) [1 − (M/1.44 M☉)^(4/3)]^(1/2); cooling from Mestel's law, L ≈ 10⁻³ L☉ (M/0.6 M☉)(t/1 Gyr)^(−7/5). Real white dwarfs cool faster at first through neutrino emission and are slowed for a while by the latent heat of core crystallization; the demo does not model either.
- Cluster: 1000 stars of 0.4 to 25 M☉ drawn from a Salpeter mass function, all born together with solar composition, single stars only. The turnoff mass shown is the mass whose main sequence lifetime equals the cluster age.

## Going further

- Homework: the main sequence lifetime scales as fuel over burning rate, t ∝ M/L. Show that L ∝ M³·⁵ gives t ∝ M⁻²·⁵.
- Research connection: white dwarf cooling and crystallization are used to date the oldest stars in the Galaxy; ask students why a clock that only runs down is useful.
