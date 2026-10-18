---
title: Star Slice
level: Intro astronomy; upper level astrophysics (stellar structure and evolution)
time: 20 to 30 minutes
---
## What students should come away with

- A star burns only where it is hot enough: in the core, and later in thin shells around a core of ash. Most of the star is never burned.
- When a core runs out of fuel it contracts and heats, the next fuel ignites in a shell around it, and the envelope swells: a giant has a tiny dense core inside an enormous, thin envelope.
- Heavier stars burn faster and go further. A 1 M☉ star stops with a carbon/oxygen core that becomes a white dwarf; stars of 12 M☉ and up build an onion of shells, each the ash of the stage before, ending in an iron core that collapses.
- Each new fuel needs a higher temperature because heavier nuclei repel more strongly (Coulomb barrier ∝ Z₁Z₂). Fusion stops paying at iron, where the binding energy per nucleon peaks.
- A cooling white dwarf freezes from the center out, because the ions' coupling Γ ∝ Z²n^(1/3)/T is largest where the density is largest.

## Before class

Students should know that pressure holds a star up against gravity, and the basics of fusion. The demo plays back saved moments of MESA stellar evolution models. **Star mass** picks a run (1, 3.7, 12, 15, 20 and 25 M☉); **0.6 Msun white dwarf cooling** is a separate run. **Moments to look at** are found in each run's data. Color the slice by **Glow**, **Elements**, **Temperature**, **Density**, **Burning**, **Gamma** (and **Phase** for the white dwarf). **Log radius** shows every layer but is not to scale. Hover or tap a layer to read it in **Probe**. Turn on **Projector** for the room.

## Running it in class

1. **1 M☉, from the start.** The first moment is a large, cool protostar that is nearly all convective (**Deepest convective envelope** jumps here). Press **Play** and watch it shrink onto the main sequence, then switch to **Burning**: hydrogen burns only at the very center.
2. **Largest radius** (1 M☉). Ask Q1 first. The star is now 194 R☉, but the feature list puts the hydrogen burning shell at 0.027 R☉. Turn on **Log radius** to see the helium core, and switch the profiles to **vs log r**.
3. **Strongest burning** (1 M☉). The stage label reads **Helium flash**: helium ignites in a shell off center, not at the center. Look at the temperature profile and ask Q6.
4. **Hot white dwarf** (1 M☉). The envelope is gone: a carbon/oxygen core about five Earth radii in radius, still shrinking, with no burning.
5. **12 M☉: Onion shells, then Core collapse.** Read the layers from the center out (**Log radius** is on), then ask Q3. **Core collapse**, the last saved moment, shows an iron group core of about 1.5 M☉ and 1,500 km radius, already falling inward.
6. **0.6 Msun white dwarf cooling: Crystallization starts, then Front halfway.** Use **Phase**, then **Gamma**. The solid first appears at the center; at **Front halfway** half the mass is solid while the front is at about half the radius (Q7).

## Questions

**Q1.** Predict: at **Largest radius** the 1 M☉ star has swollen to 194 R☉. What fraction of its radius do you think holds more than half of its mass? Check with **Log radius**, the feature list and the profiles.

**Q2.** The Sun's mean density is 1.41 g/cm³. Find the mean density of a giant of 0.78 M☉ and 194 R☉, and of a white dwarf of 0.61 M☉ and 0.0123 R☉. By what factor do they differ? (Mean density scales as M/R³.)

**Q3.** In **Onion shells** the layers run, from the center out, roughly silicon (and heavier), oxygen, neon, carbon, helium, hydrogen. Explain why each heavier fuel burns closer to the center, and why the sequence ends with an iron core rather than going on to heavier elements.

**Q4.** A rough rule for the main sequence life is t ≈ 10 Gyr (M/M☉)^(−2.5) (t ∝ M/L, L ∝ M^3.5). Estimate t for 3.7, 12 and 25 M☉, and compare with each run's age when the stage label first reads **Hydrogen shell burning**. Where does the rule work, and why might it fail for the heaviest stars?

**Q5.** Step through the 1 M☉ run from **Core hydrogen burning** to **Largest radius**, watching the center mass fractions, **Burning** and the radius. Where does hydrogen burn before and after the center runs out? What happens to the radius and luminosity while the core is contracting?

**Q6.** At **Strongest burning** in the 1 M☉ run, helium ignites in a shell at about 0.16 M☉, not at the center. Use the temperature profile to explain why it lights there. Why is the ignition so violent (the peak ε_nuc is enormous) in a core supported by degenerate electrons?

**Q7.** In the white dwarf run, use **Phase** and **Gamma** to say where the solid first appears and why there. At **Front halfway** half the mass is solid, but the front is only about halfway out in radius. Why does the inner half of the radius hold half of the mass, when a uniform ball would hold only one eighth there?

## Common misconceptions

- **"The whole star burns, like a fire."** Burning happens only where the temperature is high enough: in the core or in thin shells. In **Burning** mode most of the star never glows.
- **"A red giant is a bigger, heavier star."** It has the same mass or less; its core has shrunk while its envelope swelled.
- **"Every star makes elements up to iron."** The 1 M☉ and 3.7 M☉ runs stop with carbon and oxygen; only the massive runs build the full onion.
- **"A white dwarf freezes from the outside in, like a pond."** It freezes from the dense center outward.

## Physics behind the demo

- Every number and layer color comes from saved MESA profiles (composition, temperature, density, mixing, burning), with about 100 to 200 real zones per moment and no interpolation. **Data notes** list each run's source and columns.
- Stage labels are inferred from the data, and say so. The 12 to 25 M☉ runs are MESA test suite models (about solar metallicity, no mass loss) that stop as the iron core collapses.
- **Glow** uses the blackbody color of the local temperature. The burning glow marks zones above 10 erg g⁻¹ s⁻¹ (and 10⁻⁴ of the peak); a 1 M☉ main sequence core barely exceeds that, so it shows as a tiny spot.
- Illustrative only: the convective roll pattern (its extent and relative speed come from MESA), textures, granulation, sparkle and glow pulse.
- In the white dwarf run, **Phase** marks zones MESA's equation of state calls solid (eos_phase ≥ 0.5) and **Gamma** shows the plasma coupling Γ.

## Going further

- ε_nuc of 10 erg g⁻¹ s⁻¹ is 1 mW per kg, less than a resting human body makes per kilogram. Ask how the Sun can still be so luminous.
- Compare with **White Dwarf Cooling**, a textbook model of the same freezing.
