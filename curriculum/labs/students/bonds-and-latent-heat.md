# Bonds, Temperature and Latent Heat
Student laboratory · Thermodynamics

Textbook: OpenStax *University Physics*, Vol. 2, §1.5, with §§2.2–2.3 for temperature and heat capacity. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/states-of-matter.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Heat a crystal; Higher pressure; Cool a vapor (Atoms view, this worksheet); Ice to steam; Boil ethanol (Beaker view, the first worksheet).

**Using the demo.**

- The Atoms view is a simulation of 432 argon atoms. Each pair attracts at a distance and repels when the atoms touch (the Lennard-Jones potential, with argon's bond strength and size). Newton's second law moves every atom in steps of about 11 fs, so a whole run lasts a few nanoseconds.
- The atoms sit in a column under a free piston that presses down with a fixed pressure (17 atm unless you change it, anywhere from 0 to 30 atm). The piston is idealized: it pushes with exactly the pressure set on its gauge, without weights. The heater in the floor adds energy to the atoms touching it, so heat flows up through the sample as it does in a pot on a stove. The floor attracts the atoms weakly, like a real metal surface.
- The sample repeats sideways: an atom leaving one side comes back in at the other, as if the column were part of a wide sheet.
- **Temperature** comes from the average kinetic energy of the atoms. **Bond energy U** is their potential energy, which is negative because bound atoms have less energy than separated ones. Both are averages over the last 0.02 ns. **Heat added Q** counts every joule the heater has delivered. All three are per mole of atoms.
- The panel *Where the heat went* splits the heat added since the start into the kinetic energy of the atoms, their bond energy and the work done lifting the piston, $$P\,\Delta V$$.
- The phase shares sort the atoms by their surroundings: an atom with three neighbors or fewer counts as vapor, an atom whose neighbors sit in the same ordered pattern as its own counts as solid, and the rest as liquid.
- Color atoms by Speed shows each atom's speed; by Phase shows the solid, liquid and vapor atoms. Show bonds draws a line between atoms closer than 0.51 nm. The flat view shows a slice 0.5 nm thick through the middle of the sample; the 3D view shows every atom and can be turned and zoomed.
- The heater power slider sets how fast heat goes in. A slower heater gives flatter plateaus but a longer run. Cool takes heat out instead.
- Real argon melts at 83.8 K and boils at 87.3 K at 1 atm. The setups use 17 atm so that the vapor stays near the sample (at 1 atm it would need more than ten times the room), and a liquid boils hotter at a higher pressure, so the sample boils well above 87.3 K. At lower pressures the picture squeezes heights above 4 nm, marked by a dashed line, so the piston stays in view; Column height gives the true height. The sample is also only a few nanometers thick, and each atom feels only the atoms within 0.85 nm of it, so it is held together less firmly than a flask of argon: it melts below 83.8 K and its latent heats are smaller. A small sample can also overheat for a moment before the first vapor forms, then settle back; real liquids do this too (superheating).
- Capture reading stores the readings shown. Export to worksheet sends them to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides the heating curve and the energy split.

</details>

## Goal

Follow a crystal of argon atoms from solid to vapor, find where the heat goes while it melts and boils, and measure the melting and boiling temperatures, the latent heats and the heat capacity of the solid.

## Background

The temperature of a sample measures the average kinetic energy of its atoms (§2.2). For atoms moving in three dimensions,

$$\overline{KE} = \tfrac32 kT \;\text{per atom} = \tfrac32 RT \;\text{per mole}.$$

The atoms also have potential energy $$U$$ from the bonds between them. At constant pressure the heat added goes into both, and into the work done pushing back the surroundings (the first law):

$$Q = \Delta KE + \Delta U + P\,\Delta V.$$

The molar heat capacity is $$C = dQ/dT$$. For a classical solid, each atom vibrating in three directions, it is close to $$3R = 24.9$$ J/(mol·K) (§2.3). The latent heat per mole is the heat taken while the temperature holds still during a phase change (§1.5).

## Before the lab

1. If the temperature stays the same while a solid melts, what happens to the average kinetic energy of its atoms? Where must the heat go?
2. Predict whether the bond energy $$U$$ rises or falls as the sample melts, and as it boils.
3. Which do you expect to need more heat per mole, melting or boiling? Think about how many bonds each atom has in a solid, a liquid and a vapor.
4. Why does boiling at constant pressure also do work on the piston, when melting does almost none?

## Procedure

**Crystal to vapor.** Start with the Heat a crystal setup and run it until the sample is all vapor. Capture a reading about every 0.2 kJ/mol of heat added, and more often while the temperature holds still. You may pause to capture. Watch the bonds and the phase shares as you go, and note what the atoms look like on each part of the curve.

**Higher pressure.** Repeat with the Higher pressure setup (28 atm). Capture readings across the boiling plateau, and send them to the worksheet as a second copy of the table.

**Cooling.** Run Cool a vapor and watch the vapor condense on the cold floor. Note the temperature while it condenses, and whether the liquid freezes.

## Data

| Reading | Heat added $$Q$$ (kJ/mol) | Temperature $$T$$ (K) | Bond energy $$U$$ (kJ/mol) | Solid (%) | Liquid (%) | Vapor (%) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Record the piston pressure and heater power for each copy of the table.

## Analysis

1. Graph $$T$$ against $$Q$$ for the crystal to vapor run. Mark the two plateaus and say what the phase shares show on each.
2. Find the melting temperature and the boiling temperature at 17 atm as the average temperature on each plateau.
3. Find the latent heat of fusion and the latent heat of vaporization per mole from the heat added between the start and end of each plateau. Use the phase shares to decide where each plateau starts and ends.
4. Fit $$T$$ against $$Q$$ for the solid before it starts to melt. Find its molar heat capacity, $$C = 1/\text{slope}$$, and compare it with $$3R$$.
5. Graph $$U$$ against $$Q$$. Compare its slope on the plateaus with its slope where the solid and the liquid warm up. What fraction of the heat goes into the bonds on each part?
6. Compare the boiling temperature at 28 atm with the one at 17 atm.
7. Real argon melts at 83.8 K and boils at 87.3 K at 1 atm, with latent heats of 1.18 kJ/mol and 6.53 kJ/mol. Compare your values with these, and give two reasons this small simulated sample differs.

## Uncertainty

The sample has only 432 atoms, so its temperature and bond energy wander by a few percent even with the averaging; the plateaus are noisy, not perfectly flat. Estimate the spread of the temperature readings on each plateau and use it as the uncertainty of the melting and boiling temperatures. The start and end of each plateau are uncertain by about the spacing of your readings, which limits the latent heats. A slower heater gives flatter plateaus; say whether that changes your values.

## Questions

1. Explain, atom by atom, why the temperature stops rising while the crystal melts.
2. Boiling took several times more heat per mole than melting. Use the bonds per atom in the solid, the liquid and the vapor to explain why.
3. Why does a higher pressure raise the boiling temperature? Think about what the vapor has to do to lift the piston.
4. When the vapor condenses on the cold floor, the temperature again holds still. Where does the heat that the floor takes out come from?
5. At the same temperature, do the atoms in the liquid move faster, slower or at the same average speed as the atoms in the vapor? Use the speed colors to check.

## What to hand in

Prelab answers, both table copies with their graphs, the melting and boiling temperatures, latent heats and heat capacity with uncertainties, the comparison with real argon, and answers to the questions. Identify simulated data.
