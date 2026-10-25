# Heat Capacities of Gases
Student laboratory · Thermodynamics

Textbook: OpenStax *University Physics*, Vol. 2, §§2.3, 3.2 and 3.5. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/gas-heat-capacity.html?setup=argonV)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Argon, piston locked; Argon, piston free; Nitrogen; Mystery gas (these four use the Heat a gas view, the subject of this worksheet); Rüchardt's ball (the second worksheet).

**Using the demo.**

- The Heat a gas view has an ideal gas in a cylinder 10.0 cm across under a piston, starting at 20.00 °C and 101.325 kPa (1 atm). The walls insulate perfectly and hold no heat. An electric heater at the bottom delivers heat at a steady power, from 0.5 to 10 W.
- With the piston locked the volume cannot change. With it free the piston is weightless and frictionless under the atmosphere, so the pressure stays at 1 atm and the gas pushes the piston up as it warms.
- The molar heat capacities at constant volume are the textbook's (Table 2.3, at 25 °C), taken as constant over the range used here.
- The thermometer reads to 0.01 °C, the heat meter to 0.1 J, the piston height to 0.1 mm and the pressure to 0.001 kPa. The heater switches itself off at 200 °C.
- The speed buttons run the clock 1 or 5 times faster than real time; the meters always show the values in the experiment. The molecules drawn in the gas are a picture only.
- Record reading stores the gas, the amount, the piston setting, the time, the heat delivered, the temperature, the piston height, the volume and the pressure. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Changing the gas, the amount or the piston setting starts the heating again from 20 °C. New mystery gas picks another.
- Blind hides the graph, the energy split and the gas's heat capacities.

</details>

## Goal

Measure the molar heat capacities of a gas at constant volume and at constant pressure, show that they differ by $$R$$, and use them to tell what kind of molecule an unknown gas is made of.

## Background

Heat $$Q$$ that warms $$n$$ moles of gas by $$\Delta T$$ defines the molar heat capacity, $$Q = nC\,\Delta T$$. Its value depends on what else happens.

At **constant volume** the gas does no work, so all the heat raises its internal energy: $$Q = nC_V\,\Delta T$$ (§3.5).

At **constant pressure** the gas expands and does work $$W = P\,\Delta V = nR\,\Delta T$$ on the piston (§3.2), so more heat is needed for the same rise in temperature:

$$Q = nC_P\,\Delta T, \qquad C_P = C_V + R.$$

Equipartition (§2.3) predicts the internal energy per mole: $$\tfrac{3}{2}RT$$ for atoms that only move through space, $$\tfrac{5}{2}RT$$ for molecules that also tumble about two axes, and more again if they vibrate. So $$C_V = \tfrac{3}{2}R$$ for a monatomic gas and about $$\tfrac{5}{2}R$$ for a diatomic one. The ratio $$\gamma = C_P/C_V$$ is $$5/3$$ for a monatomic gas and $$7/5$$ for an ideal diatomic one.

## Before the lab

1. Predict the temperature rise when 100 J goes into 0.10 mol of argon with the piston locked.
2. Predict the rise for the same heat with the piston free. Which is smaller, and where does the rest of the heat go?
3. How much higher does the piston rise for each kelvin, for 0.10 mol of gas at 1 atm in a cylinder 10.0 cm across?
4. Predict $$C_V$$ and $$\gamma$$ for nitrogen, a diatomic gas.

## Safety

No hazards in the virtual lab. A real gas heated in a closed vessel builds up pressure; real apparatus has a relief valve.

## Procedure

**Argon, piston locked.** Start with the Argon, piston locked setup. Run the heater and record a reading about every 10 J of heat, up to about 200 J.

**Argon, piston free.** Send the readings to the worksheet and clear them, then pick Argon, piston free and repeat. Send this run to a new copy of the table.

**Nitrogen.** Send and clear, then repeat both piston settings for nitrogen, sending each run to its own copy of the table and clearing before the next.

**Mystery gas.** Send and clear, then pick Mystery gas and measure it with the piston locked and then free, sending each run to its own copy of the table.

## Data

| Reading | Gas and piston | Heat $$Q$$ (J) | Temperature $$T$$ (°C) | Volume $$V$$ (L) | Pressure $$P$$ (kPa) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

Record the gas, the amount $$n$$ and the heater power for each run.

## Analysis

1. Fit $$T$$ against $$Q$$ for each run. Each slope is $$1/(nC)$$; find $$C_V$$ and $$C_P$$ for argon and for nitrogen, and express each as a multiple of $$R$$.
2. Find $$C_P - C_V$$ for each gas and compare it with $$R = 8.314$$ J/(mol·K).
3. Find $$\gamma = C_P/C_V$$ for each gas and compare with the predictions in the Background.
4. For one free piston run, find the work done on the piston, $$P\,\Delta V$$, and the share of the heat it took.
5. Find $$C_V/R$$ for the mystery gas. Is it monatomic, diatomic or more complex? Compare with Table 2.3 and suggest which gas it might be.

## Uncertainty

The thermometer reads to 0.01 °C and the heat meter to 0.1 J, and the model has no noise, so the residuals of your fits show only rounding. Estimate the uncertainty of each slope from the fit, and carry it through to $$C_V$$, $$C_P$$ and their difference. A real cylinder and heater would soak up some heat; say whether that would make your heat capacities too large or too small.

## Questions

1. Why is $$C_P$$ larger than $$C_V$$ for every gas, but the difference the same for all of them?
2. Why does a diatomic gas need more heat per mole per kelvin than a monatomic one?
3. Carbon dioxide's $$C_V$$ is well above $$\tfrac{5}{2}R$$. What does that tell you about its molecules?
4. For solids and liquids, $$C_P$$ and $$C_V$$ are almost the same. Why?

## What to hand in

Prelab answers, the table copies with their graphs and fits, $$C_V$$, $$C_P$$, $$C_P - C_V$$ and $$\gamma$$ for each gas with uncertainties and comparisons, your identification of the mystery gas, and answers to the questions. Identify simulated data.
