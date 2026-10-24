# Franck–Hertz Experiment
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §6.4. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/franck-hertz.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Mercury tube at 180 °C; Measure the peak spacing; Too cold: few collisions; Too hot: weak current; Neon: glowing layers; Why the first peak is not at 4.9 V.

**Using the demo.**

- Electrons leave a hot cathode, are accelerated by the voltage $$U$$ between the cathode and the grid G2 through mercury vapor (or neon), and must then climb a small retarding voltage $$U_r$$ to reach the collector. The plot shows the collector current $$I$$ against $$U$$.
- The mercury tube sits in an oven, from 100 to 210 °C, which sets the vapor pressure (Huber, Laesecke and Friend, 2006). The neon tube is sealed at room temperature.
- Each electron is followed across the tube. Once it has more than the excitation energy it hits an atom after a random distance and loses exactly that energy (mercury: the 6s6p ³P₁ level, NIST). The curve is a fresh random sample every sweep, with 0.02 nA of amplifier noise, so two sweeps never match exactly.
- The electrons gain $$e(U - U_c)$$, not $$eU$$: the contact potential $$U_c$$ between the cathode and the grid metal shifts every peak.
- Mark peaks lets you click the maxima on the curve; with Snap on, a mark moves to the top of a parabola through the smoothed curve nearby. Record reading stores every marked peak, in order, with the gas, oven temperature, $$U_r$$ and $$U_c$$. Export to worksheet sends the readings to the Data table below; Clear (under Readings) starts a new series, which goes into a new copy of the table.
- Blind (in the Measure section) hides the spacings, the fitted energy, the intercept and the NIST value, and turns off the lines at $$n \cdot E_\mathrm{exc}/e$$.

</details>

## Goal

Measure the voltages of the repeated maxima in the collector current of a Franck–Hertz tube and find from their spacing the energy a mercury atom can take from an electron.

## Background

Bohr's model (§6.4) says an atom can only hold certain energies, so it can only absorb certain amounts of energy. Franck and Hertz tested this in 1914 with electrons in mercury vapor. An electron with less than the first excitation energy $$\Delta E$$ bounces off mercury atoms elastically and loses almost nothing (a mercury atom is about 366 000 times heavier than an electron). Once its kinetic energy passes $$\Delta E$$, it soon excites an atom and loses exactly $$\Delta E$$.

Just after such a collision the electron has too little energy left to climb the retarding voltage, so the current falls. Raising $$U$$ further lets the electron gain $$\Delta E$$ again before G2; the current rises until a second collision becomes possible, and so on. The maxima are therefore spaced by $$\Delta E/e$$:

$$U_n = U_0 + n\,\frac{\Delta E}{e},$$

where $$U_0$$ collects every shift common to all peaks (the contact potential, the electrons' starting energies, the retarding voltage). A graph of $$U_n$$ against $$n$$ is a straight line whose slope gives $$\Delta E$$. The excited atom gives the energy back as a photon of wavelength $$\lambda = hc/\Delta E$$, with $$hc = 1239.84$$ eV·nm.

## Before the lab

1. An electron starts from rest and is accelerated through 4.9 V. What is its kinetic energy in eV and in joules?
2. Why is the spacing between maxima a better measure of $$\Delta E$$ than the voltage of the first maximum?
3. What does the retarding voltage do? What would you expect the curve to look like with $$U_r = 0$$?
4. If $$\Delta E = 4.9$$ eV, what wavelength of light does the excited atom give off? Could you see it?

## Safety

None for the virtual apparatus. A real tube runs in an oven near 180 °C and holds mercury: do not touch the oven, and never open or repair a tube.

## Procedure

Turn Blind on before you start.

**Mercury at 180 °C.** Start with the Mercury tube at 180 °C setup and let the sweep finish. Mark every maximum you can find, in order from the lowest voltage, and record the peaks. Note $$U_r$$ and $$U_c$$.

**Contact potential.** Clear the readings, raise the contact potential by 1.0 V and sweep again. Mark and record the maxima. Send this run to a new copy of the table.

**Temperature.** Clear the readings, put the contact potential back, and set the oven to 120 °C. Sweep, mark and record the maxima, and send them to a third copy of the table. Write down how the dips compare with those at 180 °C.

**Retarding voltage.** At 180 °C, sweep once with the retarding voltage at zero. Write down what happens to the maxima; there is nothing to record.

**Neon (if time allows).** Switch to the neon tube, sweep to 80 V and mark the maxima. Watch where the glowing layers form.

## Data

| Reading | Gas and settings | Peak order $$n$$ | Peak voltage $$U_n$$ (V) | Spacing to the previous peak (V) |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

## Analysis

1. For the 180 °C run, find the spacings between neighbouring maxima and their mean.
2. Graph $$U_n$$ against $$n$$ and fit a straight line. From the slope find $$\Delta E$$ in eV, with its uncertainty. Find the wavelength of the light the atoms give off and compare with the mercury line at 253.7 nm (the 6s6p ³P₁ level at 4.887 eV).
3. Fit the run with the higher contact potential. Which changed, the slope or the intercept, and by how much?
4. Fit the 120 °C run. Compare its slope with the 180 °C one. Why are the dips shallower in the colder tube?
5. Repeat the 180 °C fit without the first peak. Does the slope change by more than its uncertainty?

## Uncertainty

Each peak is read from a noisy curve: estimate how far you could move a mark before the curve is clearly no longer at its maximum, and compare with the scatter of your points about the line. Neighbouring spacings share a peak, so the mean spacing is not more precise than the fit. Which uncertainty limits your $$\Delta E$$?

## Questions

1. Why does an inelastic collision lower the collector current even though the electron keeps moving towards G2?
2. Why did the maxima disappear with no retarding voltage?
3. A colder tube has fewer atoms in the way. How does that change how far past the threshold an electron travels before its collision, and so the spacing?
4. Is $$\Delta E$$ an excitation energy or the ionization energy (10.44 eV for mercury)? How do you know?
5. What does this experiment show that Bohr's model needs, and that a classical atom would not give?

## What to hand in

Prelab answers, the table copies with their graphs and fits, $$\Delta E$$ and the wavelength with uncertainties, the comparison of the three runs, your notes on $$U_r = 0$$ and on neon, and answers to the questions. Identify simulated data.
