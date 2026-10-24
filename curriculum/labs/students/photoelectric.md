# Photoelectric Effect: Measuring Planck's Constant
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §6.2. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/photoelectric.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Blue on sodium; Red light, no luck; Brighter, not faster; Stopping voltage; UV on zinc; Measure h (this one records six sodium points for you, so don't use it for your own data).

**Using the demo.**

- Light of one wavelength, from 100 to 800 nm in 1 nm steps, falls on a clean metal plate in a vacuum tube. The mercury line buttons pick the five lines of a mercury lamp (365, 405, 436, 546 and 577 nm). Light power runs from 0 to 100 µW.
- The metals and their work functions are cesium 2.14 eV, potassium 2.30 eV, sodium 2.28 eV, calcium 2.87 eV, zinc 4.33 eV, copper 4.70 eV and platinum 5.65 eV.
- The collector voltage $$V$$ runs from −6 to +4 V in 0.01 V steps; a negative voltage pushes electrons back towards the plate. The picoammeter reads to 0.01 nA below 10 nA (0.1 nA up to 100 nA), so near the stopping voltage it reads to 0.01 nA. One absorbed photon in a thousand frees an electron.
- The current falls in a straight line from its full value at $$V = 0$$ to zero at the stopping voltage. This simple shape is the model's choice; real tubes give a rounder curve, but the stopping voltage means the same thing.
- **Record V₀** saves the collector voltage you have set, as a positive stopping voltage, with the wavelength, frequency, metal, power and the meter reading. Lower the voltage until the meter just reads 0.00 nA first: it warns you if the current had not reached zero. **Export to worksheet** sends the points to the Data table below; **Clear points** starts a new series, which goes into a new copy of the table.
- Untick **Theory line and answers** (in the Layers fold) to hide the model's $$K_\mathrm{max}$$, $$V_0$$ and the fitted $$h$$ while you measure. The work function and threshold wavelength readouts stay visible; cover them while you find the threshold.

</details>

## Goal

Measure the stopping voltage of photoelectrons at several frequencies of light, and find Planck's constant and the work function of two metals from the slope and intercept.

## Background

Einstein's photon picture (§6.2): light of frequency $$f$$ arrives in photons of energy $$hf$$. A photon absorbed at the surface of a metal gives all its energy to one electron, which needs at least the work function $$\phi$$ to escape. The fastest electrons leave with

$$K_\mathrm{max} = hf - \phi .$$

A negative collector voltage makes the electrons climb a potential hill. The current stops when even the fastest cannot climb it, at the stopping voltage $$V_0$$ where $$eV_0 = K_\mathrm{max}$$, so

$$V_0 = \frac{h}{e}\,f - \frac{\phi}{e}.$$

A graph of $$V_0$$ against $$f$$ is a straight line with slope $$h/e$$ and intercept $$-\phi/e$$. No electrons leave at all below the threshold frequency $$f_0 = \phi/h$$, however bright the light. Brighter light sends more photons per second, so it raises the current but not $$V_0$$.

## Before the lab

1. Find the frequency and the photon energy (in eV) of light of wavelength 405 nm.
2. Predict the stopping voltage for cesium ($$\phi = 2.14$$ eV) at 405 nm.
3. Find the threshold wavelength for cesium and for zinc ($$\phi = 4.33$$ eV).
4. The light power is doubled at a fixed wavelength. What happens to the number of photons per second, the current at $$V = 0$$, and the stopping voltage?

## Safety

None for the virtual apparatus. A real mercury lamp gives off ultraviolet light: never look into it, and keep its shield in place.

## Procedure

Untick **Theory line and answers** before you start.

**Threshold.** With sodium, find the longest wavelength, to the nearest nanometre, at which any current flows. Then set a wavelength 20 nm longer and turn the power up to full: does any current flow? Write your findings in the answer boxes below Analysis 1.

**Cesium.** Choose cesium and a power of 40 µW. At 250 nm, 300 nm and each of the five mercury lines, lower the collector voltage until the meter just reads 0.00 nA, and record the stopping voltage. Note the last voltage that still gave a current too: the stopping voltage lies between the two.

**Zinc.** Clear the points and choose zinc. Do the same at 150, 175, 200, 225, 250 and 275 nm. Send this run to a new copy of the table.

**Brightness.** Clear the points, choose cesium at 405 nm, and find the stopping voltage at powers of 10, 40 and 100 µW. Note the current at $$V = 0$$ for each power as well. Send this run to a third copy of the table.

## Data

| Reading | Metal | Wavelength $$\lambda$$ (nm) | Frequency $$f$$ (10¹⁴ Hz) | Stopping voltage $$V_0$$ (V) | Meter at $$V_0$$ (nA) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. What threshold wavelength did you find for sodium, and what threshold frequency does it give? Compare with $$\phi/h$$ for sodium ($$\phi = 2.28$$ eV). What happened at full power beyond the threshold?
2. Graph $$V_0$$ against $$f$$ for cesium. From the slope find Planck's constant $$h$$, and from the intercept the work function $$\phi$$ in eV.
3. Do the same for zinc. Do the two metals give the same slope? Should they?
4. In the brightness run, how did the current at $$V = 0$$ and the stopping voltage depend on the power? What would a classical wave picture of light predict?

## Uncertainty

Each stopping voltage lies between the last voltage that gave a current and the first that gave none, 0.01 V apart. Estimate how this step limits the uncertainty of each $$V_0$$, and compare it with the scatter of your points about the line (the residuals). How does it limit your $$h$$?

## Questions

1. What does the negative intercept of the $$V_0$$ against $$f$$ graph mean physically?
2. Why does the frequency change the stopping voltage while the power does not?
3. Millikan set out in 1916 to disprove Einstein's equation and ended up measuring $$h$$ from it to within 0.5%. Why was the result so convincing?
4. Why would including a wavelength beyond the threshold spoil the straight line fit?

## What to hand in

Prelab answers, the threshold, the table copies with their graphs and fits, $$h$$ and both work functions with uncertainties, the brightness comparison, and answers to the questions. Identify simulated data.
