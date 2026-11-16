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
- Record reading stores the time, temperature and balance reading shown. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
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
2. Which part of your sketch do you expect to last longest: warming the ice from −20 °C, melting it, warming the water from 0 °C to 100 °C, or boiling it away? Which comes second? Say why.
3. Water's specific heat is about twice that of ice. Which sloping part of the curve is steeper, and by what factor?
4. Where does the heat go during a flat part of the curve, if the temperature does not change?

## Safety

A real hot plate and boiling water can burn. Use tongs or heat resistant gloves, never heat a closed container, and keep the balance away from spills.

## Procedure

**Ice to steam.** (1) Press the Ice to steam setup (Beaker view): 200 g of ice at −20 °C on a 500 W hot plate. (2) Pick the 5× speed and press Play. Press Record reading while it runs (or press Play again to pause first) about every 5 s of timer time while the ice warms, about every 20 s while it melts and while the water warms, and about every 50 s while it boils, until the beaker is empty; switch to 20× or 50× for the long stages if you like, since the timer shows the experiment's time. (3) Write the stage (ice warming, melting, water warming, boiling) beside each reading in the Stage column.

**One copy of the table for each stage.** At the end of each stage, pause with Play, press Record reading, then Export to worksheet and Clear, and press Record reading once more before you play on. That puts the reading at each end of a stage in both copies, and gives four copies of the Data table: ice warming, melting, water warming and boiling.

**A second run.** Change Sample mass to 100 g (or Heater power to 1000 W), which starts the run again, and press Record reading only where melting and boiling begin and end: when the temperature reaches 0 °C, when it starts to rise above 0 °C, when it reaches 100 °C, and when the balance reads 0.

**Ethanol.** Press the Boil ethanol setup (200 g at 20 °C, 500 W) and record only its boiling stage: press Record reading about every 50 s from when the thermometer stops rising until the balance reads 0, then Export to worksheet. The flat part of its curve is its boiling point.

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
4. Fit the balance reading $$m$$ against $$t$$ for the boiling stage. From the slope find the latent heat of vaporization, $$L_\mathrm{v} = P/\lvert\text{slope}\rvert$$. Do the same for the ethanol run, and read its boiling point from the thermometer.
5. Compare all four values for water, and the ethanol boiling point and latent heat, with the textbook's Tables 1.3 and 1.4, as percentage differences.
6. Use your second run to check that the time melting lasts and the time boiling lasts are each in proportion to $$m/P$$.

## Uncertainty

The timer reads to 1 s, the thermometer to 0.1 °C and the balance to 0.1 g; the model has no noise, so the residuals of your fits show only rounding. A stage's start and end are known only to within your spacing between readings, which limits the time in Analysis 3. In a real experiment heat lost to the beaker and the room makes every measured specific and latent heat come out too large; say which way each would move.

## Questions

1. While the open beaker boils away, what does the covered beaker's balance read, and why? What does this say about where the mass of the open beaker went?
2. How long did each of the four stages of your first run last? Line them up against your order in Before the lab 2, and use $$Q = mc\,\Delta T$$ and $$Q = mL$$ to explain the order you measured. Then say why a burn from steam at 100 °C does more harm than one from the same mass of water at 100 °C.

## What to hand in

Prelab answers, the run settings, the table copies (four for water, one for ethanol) with their graphs and fits, the four measured values for water and the ethanol values with uncertainties and comparisons, and answers to the questions. Identify simulated data.
