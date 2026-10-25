---
title: States of Matter
level: Thermodynamics; intro physics (heat, phase changes, latent heat)
time: 15 to 30 minutes
---
## What students should come away with

- Temperature measures the average kinetic energy of the particles. During a phase change the temperature holds still, so the heat must go somewhere else: into the bonds (potential energy) and into pushing back the surroundings.
- Melting loosens the bonds; boiling breaks nearly all of them. That is why the latent heat of vaporization is several times the latent heat of fusion.
- At constant pressure the heat added equals ΔKE + ΔU + PΔV: the first law, which the demo's *Where the heat went* panel adds up live.
- With a steady heater, Q = Pt, so a heating curve of temperature against time is also a curve against heat. Slopes give specific heats (dT/dt = P/mc); plateau lengths give latent heats (Q = mL).
- A higher pressure raises the boiling temperature.

## Before class

Students should know Q = mcΔT and the idea of temperature as average kinetic energy. The demo has two views. **Atoms** is a molecular dynamics simulation of 432 argon atoms under a piston with a heater in the floor; **Beaker** is an ideal heating curve for water or ethanol on a hot plate and a balance. Setups: **Heat a crystal**, **Higher pressure**, **Cool a vapor** (Atoms) and **Ice to steam**, **Boil ethanol** (Beaker). On a slow computer choose **Flat** instead of **3D**. For a lab style run, tick **Blind** to hide the heating curve and the energy split.

## Running it in class

1. **Ice to steam** (Beaker). Ask Q1, then press **Start** at the fastest speed. Point to the thermometer stuck at 0 °C while the cubes shrink, and the balance falling only once it boils. Then compare the two balances once it boils: the open beaker's reading falls, the covered one's stays at 200 g (Q7).
2. Read the curve. Ask Q2 about the two slopes and Q3 about the plateau lengths, then check with the timer.
3. **Heat a crystal** (Atoms). Leave **Show bonds** on and color the atoms by **Phase**. Start it and let the class watch the crystal pattern break up while the temperature holds near 66 K. Ask Q4.
4. Keep going to boiling. Watch *Where the heat went*: on the plateaus the bond energy bar grows and the kinetic energy bar does not. Ask Q5. The sample may overheat briefly before the first vapor forms, then settle back: a real effect (superheating).
5. **Higher pressure** (28 atm): the boiling plateau moves up (Q6).
6. **Cool a vapor** shows condensation on the cold floor, with the temperature holding while bonds form.

## Questions

**Q1.** Predict: 200 g of ice at −20 °C sits on a 500 W hot plate. Sketch the temperature against time until it has all boiled away, and say which stage lasts longest.

**Q2.** In the same run, which sloping part is steeper, the ice warming or the water warming, and by what factor? Use c_ice = 2090 and c_water = 4186 J/(kg·°C).

**Q3.** How long does each stage of the Ice to steam run last? Use L_f = 334 kJ/kg and L_v = 2256 kJ/kg. Check with the timer.

**Q4.** While the crystal melts, the temperature holds still but the heater keeps adding heat. Where does the heat go? Use the bond energy readout and the bonds on screen.

**Q5.** In the Atoms view, boiling takes about four times the heat per mole of melting. Explain why, using the number of neighbors an atom has in the solid, the liquid and the vapor. What else does the heat do while the sample boils?

**Q6.** Why does the boiling temperature go up at 28 atm, while the melting temperature hardly changes?

**Q7.** Predict: when the open beaker has boiled half away, what does the covered beaker's balance read? Where did the open beaker's missing mass go?

## Common misconceptions

- **"Heat and temperature are the same thing."** On a plateau heat goes in and the temperature does not change.
- **"Boiling water gets hotter if you turn the heat up."** At a fixed pressure it boils faster at the same temperature.
- **"Particles stop moving in a solid."** They vibrate, and at the melting point they move as fast on average as in the liquid at that temperature.
- **"Bonds store energy that is released when they break."** Breaking bonds takes energy; forming them releases it (condensing steam burns).

## Physics behind the demo

Atoms: 432 atoms with the Lennard-Jones potential and argon's parameters, ε/k = 120 K, σ = 0.34 nm, m = 39.948 u (Rahman 1964), cut off and shifted at 2.5σ = 0.85 nm; velocity Verlet, time step 0.005τ ≈ 11 fs (τ = 2.15 ps). Periodic sideways, a 9-3 attractive floor (strength 2ε) and a free piston at constant pressure; the heater rescales the motion of atoms within 2.5σ of the floor. Enthalpy H = KE + U + PV changes only by the heat added (checked in curriculum/validation/test_states-of-matter.cjs). Phases from neighbor counts and the q6 bond order (ten Wolde, Ruiz-Montero and Frenkel 1996). The thin film and the cutoff hold the sample together less firmly than real argon, so it melts at about 66 K (argon 83.8 K) with smaller latent heats; it boils at about 112 to 115 K because the piston is at 17 atm (chosen so the vapor fits in the column), not 1 atm, where argon boils at 87.3 K; readouts average over 0.02 ns. The piston is idealized: it pushes with exactly the set pressure (0 to 30 atm) without weights, and above 4 nm the picture squeezes heights (marked) so the piston stays in view; Column height is the true height, and the column stops at 680 nm. Beaker: an exact piecewise heating curve at constant power with no heat losses and no evaporation below the boiling point, using the textbook's c and L values (OpenStax University Physics Vol. 2, Tables 1.3 and 1.4); the vapor leaves the open beaker. The covered beaker is the same until it boils; then its vapor condenses on the lid and runs back, so its balance keeps the whole mass, and the lid's loss of heat to the room is not modeled. Run speeds are faster than real time; the timer shows experiment time.
