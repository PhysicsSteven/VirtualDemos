# Gas in a Box: Pressure, Temperature and Speed
Student laboratory · Thermodynamics

Textbook: OpenStax *University Physics*, Vol. 2, §§2.1, 2.2 and 2.4. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/ideal-gas.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Relax to equilibrium; Hot vs cold; Compress; Dilute gas; Near absolute zero.

**Using the demo.**

- The box holds argon atoms (mass $$6.63\times10^{-26}$$ kg) moving in two dimensions. It is 30 nm high, and its right wall is a piston you can drag to make it from 15 to 50 nm wide. You choose the number of atoms, from 20 to 400, and the temperature, from 0.01 K to 1000 K.
- The atoms are hard disks 0.5 nm across that bounce off each other and the walls without losing energy. Their size makes the pressure run a few percent above the ideal value, more when the box is crowded.
- In two dimensions pressure is force per unit length of wall, in N/m (shown in mN/m), and the ideal gas law reads $$PA = NkT$$, with $$A$$ the box's area.
- The temperature is worked out from the atoms' kinetic energy, $$\langle \tfrac{1}{2}mv^2\rangle = kT$$ in two dimensions. The pressure is the momentum the atoms deliver to the walls per unit length per unit time, averaged over about a second on screen, so wait a few seconds after any change before recording.
- Moving the temperature slider rescales every speed at once. One second on screen is 80 ps of the atoms' time.
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
2. Predict the rms speed of argon atoms at 300 K in two dimensions. How would it change at 1200 K?
3. If you halve the box's area at a fixed temperature, what happens to the pressure?
4. Why should the pressure double if the number of atoms doubles at fixed temperature and area?

## Safety

No hazards in the virtual lab.

## Procedure

**Pressure and temperature.** Pick Relax to equilibrium and wait until the histogram matches the curve. With 150 atoms and the box 50 nm wide, record a reading at about six temperatures from 50 K to 1000 K, waiting a few seconds at each.

**Pressure and number.** Clear the readings. At 300 K and 50 nm wide, record a reading for about six numbers of atoms from 50 to 400.

**Pressure and area.** Clear the readings. With 150 atoms, set the temperature to 300 K and record a reading for about six box widths from 50 nm to 15 nm, resetting the temperature to 300 K after each change of width.

## Data

| Reading | Atoms $$N$$ | Temperature $$T$$ (K) | Area $$A$$ (nm²) | $$1/A$$ (1/nm²) | Pressure $$P$$ (mN/m) | $$NkT/A$$ (mN/m) | rms speed (m/s) | $$v_\mathrm{rms}^2$$ (m²/s²) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

## Analysis

1. Fit $$P$$ against $$T$$ for the first run. From the slope find Boltzmann's constant, $$k = \text{slope}\cdot A/N$$, and compare it with $$1.381\times10^{-23}$$ J/K.
2. Fit $$P$$ against $$N$$ for the second run and $$P$$ against $$1/A$$ for the third. Are the lines straight and through the origin?
3. Compare each measured pressure with $$NkT/A$$. When is the difference largest, and why?
4. Plot the rms speed squared against $$T$$. From the slope find the mass of an argon atom and compare it with $$6.63\times10^{-26}$$ kg.

## Uncertainty

The pressure is an average over about a second, so it scatters from reading to reading, more for few atoms. Record five readings at one setting a few seconds apart, find their mean and standard deviation, and use that as the uncertainty of a single pressure.

## Questions

1. Where does the pressure on the walls come from?
2. Why do the atoms' speeds spread out even when they all start with the same speed?
3. Near absolute zero the atoms are slow but still moving. Do they still push on the walls?
4. Why does pushing the piston in quickly heat the gas?

## What to hand in

Prelab answers, the table copies with their graphs and fits, your values of $$k$$ and the atom's mass with uncertainties and comparisons, and answers to the questions. Identify simulated data.
