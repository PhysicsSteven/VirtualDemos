# Gas Thermometer and Absolute Zero
Student laboratory · Thermodynamics

Textbook: OpenStax *University Physics*, Vol. 2, §§1.2 and 2.1. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/temperature.html?setup=gas)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Gas thermometer (the Thermometer view, the subject of this worksheet); Hot metal in water; Mystery metal; Rod in a water jacket; Water near 4 °C; House wall (the other three worksheets).

**Using the demo.**

- The Thermometer view has a glass bulb of fixed volume 1.000 L holding an ideal gas, joined to a pressure gauge that reads to 0.01 kPa. You choose the amount of gas, from 5 to 50 mmol, and the bath the bulb sits in.
- The baths are at 1 atm, on today's temperature scale (ITS-90): liquid nitrogen boils at −195.795 °C, dry ice sublimes at −78.464 °C, ice water is at 0.00 °C and water boils at 99.974 °C. Room air is 20 °C. The mystery bath is somewhere between 25 °C and 95 °C.
- The gas takes time to reach the bath's temperature (a time constant of 12 s), so wait until the gauge stops changing before you record.
- The model is an exactly ideal gas; the bulb's expansion and the gas in the tube to the gauge are neglected.
- Record reading stores the bath, its temperature (hidden for the mystery bath), the amount of gas, the time in the bath and the pressure. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides the predictions in the readouts.

</details>

## Goal

Calibrate a constant volume gas thermometer, find the temperature at which its pressure would fall to zero, and use it to measure an unknown temperature.

## Background

A gas held at constant volume has a pressure that rises in a straight line with temperature. The ideal gas law (§2.1) gives

$$P = \frac{nR}{V}\,T_\mathrm{K} = \frac{nR}{V}\,(T_\mathrm{C} + 273.15).$$

Plotted against the Celsius temperature, the line reaches $$P = 0$$ at $$T_\mathrm{C} = -273.15\ ^\circ$$C, whatever the amount of gas. That temperature is **absolute zero**, the zero of the Kelvin scale (§1.2). Gas thermometers at low pressure agree with each other whatever the gas, which is why the Kelvin scale can be defined this way.

## Before the lab

1. Sketch $$P$$ against $$T_\mathrm{C}$$ for a fixed amount of gas in a fixed volume. Where does the line cross the temperature axis?
2. How would the line change if the bulb held twice as much gas? Would the crossing point move?
3. Predict the gauge reading for 20 mmol in the 1.000 L bulb in ice water.
4. Why must you wait after moving the bulb to a new bath before reading the gauge?

## Safety

Liquid nitrogen and dry ice cause severe cold burns, and boiling water scalds. In a real lab wear eye protection and insulated gloves, and never seal liquid nitrogen or dry ice in a closed container.

## Procedure

**Calibrate.** Start with the Gas thermometer setup (20 mmol). Put the bulb in each of the five known baths in turn; wait for the gauge to settle and record a reading in each.

**More gas.** Clear the readings, change the amount of gas to 40 mmol and repeat the five baths. Send this run to a new copy of the table.

**Mystery bath.** Return to 20 mmol, put the bulb in the mystery bath and record the settled pressure.

## Data

| Reading | Bath | Bath temperature $$T$$ (°C) | Gas $$n$$ (mmol) | Pressure $$P$$ (kPa) |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

## Analysis

1. Fit $$P$$ against $$T$$ for each run. Find the temperature at which each line reaches $$P = 0$$, with its uncertainty from the fit, and compare both with −273.15 °C.
2. From each slope find $$R = (\text{slope})\,V/n$$ and compare it with 8.314 J/(mol·K).
3. Use your 20 mmol calibration line to find the mystery bath's temperature.
4. Convert all five known bath temperatures to kelvins and plot $$P$$ against $$T_\mathrm{K}$$. What should the intercept be?

## Uncertainty

The gauge reads to 0.01 kPa and the model has no noise, so the residuals of your fits show only rounding and whether you waited long enough. Estimate how far a reading taken too early (say 10 s after moving the bulb) is from the settled value. In a real gas thermometer the bulb expands a little when heated and the gas departs from the ideal gas law; say how each would bend your line.

## Questions

1. Why is it reasonable to call −273.15 °C the lowest possible temperature, even though no gas stays a gas that cold?
2. Both lines met the axis at the same temperature. What does the amount of gas change?
3. A real gas thermometer is extrapolated to zero gas density. Why does that make different gases agree?
4. What is the temperature of the boiling liquid nitrogen in kelvins and in degrees Fahrenheit?

## What to hand in

Prelab answers, both table copies with their graphs and fits, your values of absolute zero and $$R$$, the mystery bath temperature with its uncertainty, and answers to the questions. Identify simulated data.
