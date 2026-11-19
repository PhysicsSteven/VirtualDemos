# Gas in a Box: Pressure, Temperature and Speed
Student laboratory · Thermodynamics

Textbook: OpenStax *University Physics*, Vol. 2, §§2.1, 2.2 and 2.4. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/ideal-gas.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Relax to equilibrium; Hot vs cold; Compress; Dilute gas; Near absolute zero; Cold walls; Hot wall, cold wall.

**Using the demo.**

- The box holds argon atoms (mass $$6.63\times10^{-26}$$ kg) moving in two dimensions. It is 30 nm high, and its right wall is a piston you can drag to make it from 15 to 50 nm wide. You choose the number of atoms, from 20 to 400, and the temperature, from 0.01 K to 1000 K.
- The atoms are hard disks 0.5 nm across that bounce off each other and the walls without losing energy (the walls set to Insulated, as for this whole worksheet). Their size makes the pressure run a few percent above the ideal value, more when the box is crowded.
- In two dimensions pressure is force per unit length of wall, in N/m (the readout picks nN/m, µN/m or mN/m; the recorded column is always in mN/m), and the ideal gas law reads $$PA = NkT$$, with $$A$$ the box's area.
- The temperature is worked out from the atoms' kinetic energy, $$\langle \tfrac{1}{2}mv^2\rangle = kT$$ in two dimensions. The pressure is the momentum the atoms deliver to the walls per unit length per unit time, averaged over about a second on screen, so wait a few seconds after any change before recording.
- Moving the temperature slider rescales every speed at once. One second on screen is 80 ps of the atoms' time at Fixed rate. Slow motion follows T speeds the playback up for a cold gas (and slows it for a hot one), and the clock says by how much, so a cold gas only looks lively.
- Each wall can instead be held at a temperature of its own. An atom that hits such a wall trades energy with it (on the fraction of hits set by Hits that trade energy) and leaves as if from a gas at the wall's temperature, so the gas warms or cools toward it, and walls at different temperatures keep heat flowing through the gas. Q is the heat the walls have given the gas.
- Record reading stores the time, the number of atoms, the temperature, the box's area and width, the measured pressure, and the mean and rms speeds. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Test the ideal gas law for a gas of atoms you can watch, and connect the temperature to the atoms' speeds.

## Background

Pressure comes from molecules hitting the walls, and temperature measures their average kinetic energy (§2.2). In three dimensions $$PV = NkT$$ and $$\langle\tfrac12 mv^2\rangle = \tfrac32 kT$$. This box is two dimensional, where each atom has two directions to move in instead of three:

$$PA = NkT, \qquad \left\langle \tfrac{1}{2}mv^2 \right\rangle = kT, \qquad v_\mathrm{rms} = \sqrt{\frac{2kT}{m}}.$$

The atoms' speeds spread out into the Maxwell and Boltzmann distribution (§2.4), shown under the box.

## Before the lab

1. Predict the pressure, in mN/m, of 150 atoms at 300 K in a box 50 nm by 30 nm.
2. Predict the rms speed of argon atoms at 300 K in two dimensions. At 1200 K, four times as hot, would the rms speed be four times as large, twice as large, or about the same, and why?
3. If you halve the box's area at a fixed temperature, what happens to the pressure?
4. Why should the pressure double if the number of atoms doubles at fixed temperature and area?

## Safety

No hazards in the virtual lab.

## Procedure

**Pressure and temperature.** (1) Press the Relax to equilibrium setup (150 atoms, 300 K, box 50 nm wide, walls Insulated) and wait until the histogram under the box matches the curve. (2) Set the Temperature slider (it is logarithmic and sticks to round values) to 50, 100, 200, 400, 700 and 1000 K. (3) At each, wait a few seconds for P measured in the Measurements panel to settle, then press Record reading.

**Pressure and number.** Press Export to worksheet, then Clear. Set Temperature back to 300 K, leave Box width at 50 nm, and record a reading with the Molecules N slider at 50, 100, 150, 200, 300 and 400, waiting a few seconds after each change.

**Pressure and area.** Press Export to worksheet, then Clear. Set Molecules N to 150 and Temperature to 300 K. Set Box width under Piston to 50, 40, 30, 25, 20 and 15 nm. Moving the piston heats or cools the gas, so after the piston stops set Temperature back to 300 K, wait a few seconds, and press Record reading. Press Export to worksheet at the end.

The Data table's Pressure, Area and rms speed columns are the demo's P measured, Box area A and rms speed; work out the $$1/A$$, $$NkT/A$$ and $$v_\mathrm{rms}^2$$ columns yourself.

## Data

| Reading | Atoms $$N$$ | Temperature $$T$$ (K) | Area $$A$$ (nm²) | $$1/A$$ (1/nm²) | Pressure $$P$$ (mN/m) | $$NkT/A$$ (mN/m) | rms speed (m/s) | $$v_\mathrm{rms}^2$$ (m²/s²) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

## Analysis

1. Fit $$P$$ against $$T$$ for the first run. From the slope find Boltzmann's constant, $$k = \text{slope}\cdot A/N$$, and compare it with $$1.381\times10^{-23}$$ J/K.
2. Fit $$P$$ against $$N$$ for the second run and $$P$$ against $$1/A$$ for the third. Are the lines straight and through the origin?
3. For the second run (pressure and number), compare each measured pressure with $$NkT/A$$. When is the difference largest, and why?
4. Plot the rms speed squared against $$T$$. From the slope find the mass of an argon atom and compare it with $$6.63\times10^{-26}$$ kg.

## Uncertainty

The pressure is an average over about a second, so it scatters from reading to reading, more for few atoms. Record five readings at one setting a few seconds apart, find their mean and standard deviation, and use that as the uncertainty of a single pressure.

## Questions

1. Why do the atoms' speeds spread out even when they all start with the same speed?
2. Near absolute zero the atoms are slow but still moving. Do they still push on the walls?
3. Why does pushing the piston in quickly heat the gas?
4. Your first run has two temperatures four times apart, 50 K and 200 K, like 300 K and 1200 K in Before the lab 2. By what factor did the rms speed change between them, and was that your answer? Explain the factor from what the temperature of this gas measures.

## With calculus

For courses that use calculus. This section is not counted in the 75 minutes; do it when your instructor assigns it.

1. In two dimensions the fraction of atoms with speeds between $$v$$ and $$v + dv$$ is $$f(v)\,dv$$, with $$f(v) = \frac{mv}{kT}\,e^{-mv^2/2kT}$$, the curve under the box. Substitute $$u = mv^2/2kT$$ to show that $$\int_0^\infty f(v)\,dv = 1$$, and then integrate by parts to show that $$\langle v^2\rangle = \int_0^\infty v^2 f(v)\,dv = 2kT/m$$. Compare $$\sqrt{2kT/m}$$ with the rms speed you recorded at 300 K and at 1000 K ($$m = 6.6335\times10^{-26}$$ kg).
2. Squeezing the gas at constant temperature takes work $$W_\mathrm{on} = -\int P\,dA$$. For an ideal gas, integrate $$P = NkT/A$$ to find the work to take 150 atoms at 300 K from 1500 nm² to 450 nm². Then work out the same integral from your pressure and area run: add up trapezoids, each the mean of two neighboring pressures times the change in area between them, over all six readings. Give both in joules (1 mN/m times 1 nm² is $$10^{-21}$$ J). Which is larger, by how much, and why? To see how much of the gap comes from the trapezoids themselves, repeat the sum with the $$NkT/A$$ column.

## What to hand in

Prelab answers, the table copies with their graphs and fits, your values of $$k$$ and the atom's mass with uncertainties and comparisons, and answers to the questions (and to With calculus, if assigned). Identify simulated data.
