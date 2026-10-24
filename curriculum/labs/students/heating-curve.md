# Heating Curve and Latent Heat
Student laboratory · Thermodynamics

Textbook: OpenStax *University Physics*, Vol. 2, §§1.4–1.5. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/states-of-matter.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Heat a crystal; Higher pressure; Cool a vapor (these three use the Atoms view, the subject of the second worksheet); Ice to steam; Boil ethanol (Beaker view).

**Using the demo.**

- The Beaker view heats a sample in an open beaker on a hot plate. The hot plate and beaker stand on a balance that has been tared, so it reads the mass of the sample only. A thermometer reads the sample's temperature to 0.1 °C and a timer reads the time to 1 s.
- The model is ideal: every joule from the heater goes into the sample, none into the glass or the room, and the sample is at one temperature throughout. The vapor leaves the open beaker, so the balance reading falls while the sample boils. Evaporation below the boiling point is left out.
- A covered beaker stands beside the open one: the same sample on the same hot plate, with a lid. Its vapor condenses on the lid and runs back, so its balance keeps reading the whole mass. The lid passes the heat on to the room, which the model leaves out, so the covered sample stays at the boiling point. You can hide it.
- The specific heats and latent heats are the textbook's (Tables 1.3 and 1.4), so your results can be checked against them.
- The speed buttons run the clock 5, 20 or 50 times faster than real time. The timer always shows the time in the experiment, so the speed does not change your results.
- Capture reading stores the time, temperature and balance reading shown. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Changing the substance, mass, heater power or starting temperature starts the run again from the beginning.
- Blind hides the heating curve under the picture, so you can make your own graph first.

</details>

## Goal

Measure the specific heats of ice and water and the latent heats of fusion and vaporization of water from a heating curve.

## Background

Heat $$Q$$ delivered at a constant power $$P$$ for a time $$t$$ is $$Q = Pt$$. While a sample of mass $$m$$ stays in one phase, its temperature rises (§1.4):

$$Q = mc\,\Delta T \quad\Rightarrow\quad \frac{dT}{dt} = \frac{P}{mc}.$$

During a phase change the temperature stays at the melting or boiling point while the heat changes the phase (§1.5):

$$Q = mL_\mathrm{f} \;\text{(melting)}, \qquad Q = mL_\mathrm{v} \;\text{(boiling)}.$$

While the sample boils away at a steady rate, the balance reading falls at

$$\left|\frac{dm}{dt}\right| = \frac{P}{L_\mathrm{v}}.$$

## Before the lab

1. Sketch the temperature against time for ice starting at −20 °C heated at a constant power until it has all boiled away. Label each part with what is in the beaker.
2. Which part of your sketch do you expect to last longest, and why?
3. Water's specific heat is about twice that of ice. Which sloping part of the curve is steeper, and by what factor?
4. Where does the heat go during a flat part of the curve, if the temperature does not change?

## Safety

A real hot plate and boiling water can burn. Use tongs or heat resistant gloves, never heat a closed container, and keep the balance away from spills.

## Procedure

**Ice to steam.** Start with the Ice to steam setup: 200 g of ice at −20 °C on a 500 W hot plate. Record time, temperature and balance reading about every 5 s while the ice warms, about every 20 s while it melts and while the water warms, and about every 50 s while it boils, until the beaker is empty. Write the stage (ice warming, melting, water warming, boiling) beside each reading.

**One copy of the table for each stage.** Send each stage to the worksheet before clearing, so each stage gets its own copy of the Data table: ice warming, melting, water warming and boiling. Include the readings at both ends of each stage.

**A second run.** Repeat the run with a different mass or heater power, and record only the times at which each stage begins and ends.

**Ethanol.** Boil 200 g of ethanol from 20 °C and measure its boiling point and latent heat of vaporization the same way.

## Data

| Reading | Time $$t$$ (s) | Temperature $$T$$ (°C) | Balance $$m$$ (g) | Stage |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

Record the substance, sample mass, heater power and starting temperature for each run.

## Analysis

1. Fit $$T$$ against $$t$$ for the ice warming stage. From the slope find the specific heat of ice, $$c = P/(m\,\text{slope})$$.
2. Do the same for the water warming stage and find the specific heat of water.
3. From the time the melting stage lasts, find the latent heat of fusion, $$L_\mathrm{f} = P\,\Delta t/m$$.
4. Fit the balance reading $$m$$ against $$t$$ for the boiling stage. From the slope find the latent heat of vaporization, $$L_\mathrm{v} = P/\lvert\text{slope}\rvert$$. Compare it with $$P\,\Delta t/m$$ from the time the boiling stage lasts.
5. Compare all four values with the textbook's Tables 1.3 and 1.4, as percentage differences.
6. Use your second run to check that the time each stage lasts is in proportion to $$m/P$$.

## Uncertainty

The timer reads to 1 s, the thermometer to 0.1 °C and the balance to 0.1 g; the model has no noise, so the residuals of your fits show only rounding. A stage's start and end are known only to within your spacing between readings, which limits the times in Analysis 3 and 4. In a real experiment heat lost to the beaker and the room makes every measured specific and latent heat come out too large; say which way each would move.

## Questions

1. In the Ice to steam run, melting takes eight times as long as warming the ice from −20 °C to 0 °C, yet the temperature does not change at all while it melts. Why does melting need so much heat?
2. Why does a burn from steam at 100 °C do more harm than one from the same mass of water at 100 °C?
3. Ethanol boils away much faster than the same mass of water on the same hot plate. Which property of ethanol does that measure?
4. In a real beaker some water evaporates well below 100 °C. How would that change the balance reading and your value of $$c$$ for water?
5. While the open beaker boils away, what does the covered beaker's balance read, and why? What does this say about where the mass of the open beaker went?

## What to hand in

Prelab answers, the run settings, the four table copies with their graphs and fits, the four measured values with uncertainties and comparisons, and answers to the questions. Identify simulated data.
