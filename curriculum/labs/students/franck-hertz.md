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
- Mark peaks lets you click the maxima on the curve; with Snap on, a mark moves to the top of a parabola through the smoothed curve nearby.
- Record reading stores the current at the present $$U$$ or, once peaks are marked, every marked peak in order; Record the curve stores the recorded current every 0.5 V (1 V for neon). Each reading carries the gas, oven temperature, $$U_r$$ and $$U_c$$. Export to worksheet sends the readings below: points on the curve go to the first Data table, peaks to the second. Clear (under Readings) starts a new series, which goes into a new copy of the table; a series holds either points on the curve or peaks.
- Blind (in the Measure section) hides the spacings, the fitted energy, the intercept and the NIST value, and turns off the lines at $$n \cdot E_\mathrm{exc}/e$$.

</details>

## Goal

Record the collector current of a Franck–Hertz tube against the accelerating voltage, and find from the spacing of its repeated maxima the energy a mercury atom can take from an electron.

## Background

Bohr's model (§6.4) says an atom can only hold certain energies, so it can only absorb certain amounts of energy. Franck and Hertz tested this in 1914 with electrons in mercury vapor. An electron with less than the first excitation energy $$\Delta E$$ bounces off mercury atoms elastically and loses almost nothing (a mercury atom is about 366 000 times heavier than an electron). Once its kinetic energy passes $$\Delta E$$, it soon excites an atom and loses exactly $$\Delta E$$.

Just after such a collision the electron has too little energy left to climb the retarding voltage, so the current falls. Raising $$U$$ further lets the electron gain $$\Delta E$$ again before G2; the current rises until a second collision becomes possible, and so on. The maxima are therefore spaced by $$\Delta E/e$$:

$$U_n = U_0 + n\,\frac{\Delta E}{e},$$

where $$U_0$$ collects every shift common to all peaks (the contact potential, the electrons' starting energies, the retarding voltage). A graph of $$U_n$$ against $$n$$ is a straight line whose slope gives $$\Delta E$$. The excited atom gives the energy back as a photon of wavelength $$\lambda = hc/\Delta E$$, with $$hc = 1239.84$$ eV·nm.

## Before the lab

1. An electron starts from rest and is accelerated through 4.9 V. What is its kinetic energy in eV and in joules?
2. Why is the spacing between maxima a better measure of $$\Delta E$$ than the voltage of the first maximum?
3. What does the retarding voltage do? Before you open the demo, decide what the curve looks like with $$U_r = 0$$: maxima at the same voltages as before, maxima that are weaker but still there, or a current that rises with no maxima at all. Give your reason.
4. If $$\Delta E = 4.9$$ eV, what wavelength of light does the excited atom give off? Could you see it?

## Safety

None for the virtual apparatus. A real tube runs in an oven near 180 °C and holds mercury: do not touch the oven, and never open or repair a tube.

## Procedure

Tick Blind (in the Measure section) before you start. Press Export to worksheet for each set of readings before you press Clear (under Readings). Changing any slider wipes the curve: press New sweep after it and let the sweep reach the end (Sweep speed Fast is four times quicker).

**Mercury at 180 °C: the current curve.** Press the Mercury tube at 180 °C setup and let the sweep reach 35 V. Press Record the curve: it stores the collector current $$I$$ every 0.5 V from 0 to 35 V. Export it. Write down Retarding voltage $$U_r$$ and Contact potential $$U_c$$ (under Voltages).

**Mercury at 180 °C: the peaks.** Press Clear. On the same curve, press Mark peaks and click every maximum you can find, in order from the lowest voltage, then press Record reading: it records every marked peak. Export them; they go to the peak table.

**Contact potential.** Press Clear, raise Contact potential $$U_c$$ by 1.0 V and press New sweep. Mark and record the maxima, and export them to a new copy of the peak table.

**Temperature.** Press Clear, put Contact potential $$U_c$$ back, set Oven temperature (under Tube) to 120 °C and press New sweep. Press Record the curve and export it to a second copy of the curve table. Press Clear, then mark and record the maxima and export them to a third copy of the peak table.

**Retarding voltage.** Press Clear, set Oven temperature back to 180 °C and Retarding voltage $$U_r$$ to 0.0 V, and press New sweep. Press Record the curve and export it to a third copy of the curve table.

## Data

**Current curve.**

| Reading | Gas and settings | Accelerating voltage $$U$$ (V) | Collector current $$I$$ (nA) |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

**Peaks.**

| Reading | Gas and settings | Peak order $$n$$ | Peak voltage $$U_n$$ (V) | Spacing to the previous peak (V) |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

## Analysis

1. Graph $$I$$ against $$U$$ for the 180 °C curve. At what voltage does the current first stop rising, and how many maxima do you see? Read the voltage of each maximum from your table and compare with the peaks you marked.
2. For each of the first three maxima of the 180 °C and 120 °C curves, divide the current at the minimum after it by the current at the maximum. In which tube are the dips deeper?
3. Graph $$U_n$$ against $$n$$ and fit a straight line. From the slope find $$\Delta E$$ in eV. Find the wavelength of the light the atoms give off and compare with the mercury line at 253.7 nm (the 6s6p ³P₁ level at 4.887 eV).
4. Fit the run with the higher contact potential. Which changed, the slope or the intercept, and by how much?
5. Fit the 120 °C peaks. Compare their slope with the 180 °C one. Why are the dips shallower in the colder tube?

## Questions

1. Is $$\Delta E$$ an excitation energy or the ionization energy (10.44 eV for mercury)? How do you know?
2. Look again at your curve with no retarding voltage, beside your choice in Before the lab 3. When an electron excites a mercury atom, does it disappear from the current or does it still arrive with less energy? Say how the curve tells you. Then say what this experiment shows that Bohr's model needs, and that a classical atom would not give.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

A maximum read from the current curve, sampled every 0.5 V, is good to about a quarter of a volt; marking it on the demo's finely sampled curve does much better. Each mark is still read from a noisy curve: estimate how far you could move a mark before the curve is clearly no longer at its maximum, and compare with the scatter of your points about the line. Neighboring spacings share a peak, so a single spacing is not more precise than the fit. Which uncertainty limits your $$\Delta E$$?

Give $$\Delta E$$ and the wavelength with their uncertainties from the fit, and say how many uncertainties your value is from the mercury line at 253.7 nm. For the run with the higher contact potential, say by how much the intercept changed compared with its uncertainty. For the 120 °C peaks, say whether the difference of the slopes is larger than the combined uncertainties.

## What to hand in

Prelab answers, the three current curves with their graphs, the peak tables with their graphs and fits, $$\Delta E$$ and the wavelength, the comparison of the runs, and answers to the questions (and to Uncertainty, if assigned). Identify simulated data.
