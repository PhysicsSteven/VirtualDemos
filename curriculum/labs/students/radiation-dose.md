# Radiation Dose: Distance and Shielding
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §10.7. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/nuclear-reactions.html?setup=doCs)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** ¹³⁷Cs source; ⁹⁹ᵐTc patient (these two use the Dose view, the subject of this worksheet); Rutherford 1919; Fission of ²³⁵U (the Nuclear Reactions worksheet); Bare ²³⁵U sphere; Generations (the Critical Size worksheet); The Sun's core; D–T reactor (the Fusion worksheet).

**Using the demo.**

- The Dose view has a γ ray point source in an open lead pot, a shield of lead, concrete or water that can be put just in front of it, and a dose rate meter on a bench. Choose the source (¹³⁷Cs, ⁶⁰Co, ⁹⁹ᵐTc or ¹⁸F), its activity, the distance $$r$$ to the meter, the shield and its thickness $$x$$, and the time spent at the meter. The distance scale on the bench is logarithmic.
- The meter reads the equivalent dose rate in µSv/h at the meter. The readouts give the absorbed dose rate in tissue, the equivalent dose rate, the dose over the chosen time (allowing for the source decaying), and how many days of average United States background radiation that dose equals.
- The graphs show the dose rate against distance with no shield and against shield thickness at the present distance, with your recorded readings as dots and the model as a dashed line.
- Record reading stores the source, activity, distance, shield, thickness, dose rate, time and dose. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides the attenuation coefficient, the half value layer and the model lines.

</details>

## Goal

Measure how the dose rate from a γ ray source falls with distance and with shielding, find the attenuation coefficient and half value layer of a shield, and compare doses with natural background radiation.

## Background

The absorbed dose is the energy absorbed per kilogram of tissue, measured in grays (1 Gy = 1 J/kg; 1 rad = 0.01 Gy). Different radiations do different harm for the same absorbed dose, so the equivalent dose in sieverts is the absorbed dose times a weighting factor: 1 for γ rays and X-rays, about 1 for β particles, and up to 20 for α particles (§10.7). A point source emits its γ rays equally in all directions, so they spread over a sphere of area $$4\pi r^2$$ and the dose rate falls as $$1/r^2$$. A shield removes photons from a narrow beam exponentially,

$$\dot D = \dot D_0\, e^{-\mu x}, \qquad x_{1/2} = \frac{\ln 2}{\mu},$$

where $$\mu$$ is the attenuation coefficient and $$x_{1/2}$$ the half value layer, the thickness that halves the dose rate. Americans receive about 3.5 mSv a year from natural background and medical sources (§10.7).

## Before the lab

1. The dose rate at 1 m from a source is 80 µSv/h. What is it at 2 m, at 4 m and at 0.5 m?
2. A shield has a half value layer of 0.55 cm. What share of the dose rate gets through 1.1 cm, and through 5.5 cm?
3. A 50.0 kg person absorbs 1.00 J of γ rays. Find the absorbed dose in grays and rads and the equivalent dose in sieverts. What would the equivalent dose be if the same energy came from α particles?
4. Name three ways to reduce the dose you receive from a source.

## Safety

No hazards in the virtual lab. With real sources: keep your distance, keep your time short, and use shielding.

## Procedure

**Distance.** Start with the ¹³⁷Cs source setup (1 GBq, no shield). Record readings at distances of 0.5, 1, 2, 3, 4, 6 and 8 m.

**Lead.** Export and Clear the readings, return to 1 m and choose a lead shield. Record readings for thicknesses of 0, 0.5, 1.0, 1.5, 2.0, 3.0 and 4.0 cm.

**Concrete.** Export and Clear the readings, then repeat at 1 m with concrete, for thicknesses of 0, 5, 10, 15, 20 and 25 cm.

**A patient.** Export and Clear the readings, then pick the ⁹⁹ᵐTc patient setup. Record a reading at 1 m with no shield and with 10 and 20 cm of water (water stands in for the patient's own body). Note the dose over 8 hours for each.

## Data

| Reading | Source | Activity (MBq) | Distance r (m) | Shield | Thickness x (cm) | Dose rate (µSv/h) | 1/r² (1/m²) | ln(dose rate) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

Fill in the last two columns yourself, with the dose rate in µSv/h.

## Analysis

1. Plot the dose rate against $$1/r^2$$ for the distance readings. Is it a straight line through the origin? Find the slope, the dose rate at 1 m.
2. Plot $$\ln$$(dose rate) against $$x$$ for lead. Find $$\mu$$ from the slope and the half value layer $$x_{1/2}$$.
3. Do the same for concrete. Divide each $$\mu$$ by the density (lead 11.35 g/cm³, concrete 2.30 g/cm³) to get the mass attenuation coefficient $$\mu/\rho$$. Which stops more photons per gram, and which per centimeter?
4. For the ⁹⁹ᵐTc patient, compare the 8 hour dose at 1 m with the annual background of 3.5 mSv. How many days of background is it?

## Uncertainty

The meter shows three significant figures. How well does that fix the slope in Analysis 2? Use the spread of your points about the straight line to estimate the uncertainty in the half value layer.

## Questions

1. A worker can halve their dose by stepping back from 1 m to how far? By adding how much lead?
2. The model counts only photons that pass straight through the shield. In a real thick shield, photons scattered by the shield also reach the meter. Would the real dose rate be higher or lower than the model's?
3. α particles have a weighting factor of 20, yet α sources outside the body are not dangerous. Why, and when do they become dangerous?
4. Why is ⁹⁹ᵐTc, with its 6 hour half life and single 140 keV γ ray, so useful for medical imaging?

## What to hand in

Prelab answers, the data tables with your columns, the graphs for distance, lead and concrete, your values of μ and the half value layers, and answers to the questions. Identify simulated data.
