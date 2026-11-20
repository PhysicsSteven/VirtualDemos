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
2. Predict the rise for the same heat with the piston free. Which is smaller, and where does the rest of the heat go? Last, compare the two kelvin for kelvin: with the piston free, does the argon gain more internal energy than with it locked, less, or an equal amount?
3. How much higher does the piston rise for each kelvin, for 0.10 mol of gas at 1 atm in a cylinder 10.0 cm across?
4. Predict $$C_V$$ and $$\gamma$$ for nitrogen, a diatomic gas.

## Safety

No hazards in the virtual lab. A real gas heated in a closed vessel builds up pressure; real apparatus has a relief valve.

## Procedure

**Argon, piston locked.** Press the Argon, piston locked button under Setups (0.10 mol, Heater power 2.0 W). Press Play at 1× and press Record reading about every 20 J on the Heat delivered Q meter, starting at 0 J, up to about 200 J (one reading every 10 s or so; pause with the Play button, which reads Pause while running, if you fall behind).

**Argon, piston free.** Press Export to worksheet and Clear, then press Argon, piston free and repeat. Press Export to worksheet to send this run to a new copy of the table.

**Nitrogen.** Press Clear, then press Nitrogen (it starts with the piston locked) and repeat. Export and Clear, then press Free: constant pressure under Piston and repeat, and export that run too. Each run goes to its own copy of the table.

**Mystery gas.** Press Clear, then press Mystery gas and measure it with the piston locked, export and Clear, then press Free: constant pressure and measure it again, and export. Switch the piston with the Piston buttons only: pressing the Mystery gas button again (or New mystery gas) picks a different gas.

## Data

| Reading | Gas and piston | Heat $$Q$$ (J) | Temperature $$T$$ (°C) | Volume $$V$$ (L) | Pressure $$P$$ (kPa) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

Record the gas, the Amount of gas n and the Heater power for each run.

## Analysis

1. Fit $$T$$ (vertical) against $$Q$$ (horizontal) for each run. Each slope is $$1/(nC)$$; find $$C_V$$ and $$C_P$$ for argon and for nitrogen, and express each as a multiple of $$R$$.
2. Find $$C_P - C_V$$ for each gas and compare it with $$R = 8.314$$ J/(mol·K).
3. Find $$\gamma = C_P/C_V$$ for each gas and compare with the predictions in the Background.
4. For the argon free piston run, find the work done on the piston, $$P\,\Delta V$$, from the first and last Volume V readings, and the share of the heat it took. Then find the rise in internal energy, $$\Delta U = Q - P\,\Delta V$$, per kelvin of warming, and set it beside $$Q/\Delta T$$ for the argon locked run.
5. Find $$C_V/R$$ for the mystery gas. Is it monatomic, diatomic or more complex? Compare with Table 2.3 and suggest which gas it might be.

## Questions

1. Carbon dioxide's $$C_V$$ is well above $$\tfrac{5}{2}R$$. What does that tell you about its molecules?
2. For solids and liquids, $$C_P$$ and $$C_V$$ are almost the same. Why?
3. Go back to the guess at the end of Before the lab 2. What did Analysis 4 show about the internal energy gained per kelvin with the piston locked and with it free? Use the first law and what equipartition says the internal energy of an ideal gas depends on to explain the result, and then say why $$C_P$$ is still larger than $$C_V$$.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The thermometer reads to 0.01 °C and the heat meter to 0.1 J, and the model has no noise, so the residuals of your fits show only rounding. Estimate the uncertainty of the two argon slopes from their fits, and carry it through to argon's $$C_V$$, $$C_P$$ and their difference. A real cylinder and heater would soak up some heat; say whether that would make your heat capacities too large or too small. Do the same for nitrogen and the mystery gas, and say whether each $$C_P - C_V$$ equals $$R$$ within its uncertainty.

## With calculus

For courses that use calculus. This section is not counted in the 75 minutes; do it when your instructor assigns it.

1. Write the first law for a small step, $$dQ = dU + P\,dV$$, where for an ideal gas $$dU = nC_V\,dT$$ whatever the volume does. At constant pressure, differentiate $$PV = nRT$$ to show that $$P\,dV = nR\,dT$$, and so $$C_P = \frac{1}{n}\frac{dQ}{dT} = C_V + R$$. Check the middle step with your argon free piston run: find $$dV/dT$$ from the first and last readings and compare $$P\,dV/dT$$ with $$nR$$.
2. The entropy a gas gains as it is heated is $$\Delta S = \int dQ/T$$, with $$T$$ in kelvin. For your argon locked run, work it out from the table: for each 20 J step take 20 J times the mean of $$1/T$$ at its two ends, and add the ten steps. Then put $$dQ = nC_V\,dT$$ into the integral to show that $$\Delta S = nC_V\ln(T_2/T_1)$$, and evaluate it with your $$C_V$$ from Analysis 1. Find $$\Delta S$$ for the argon free piston run the same way, with $$C_P$$. Both runs took in 200 J: which gained more entropy, and why?

## What to hand in

Prelab answers, the table copies with their graphs and fits, $$C_V$$, $$C_P$$, $$C_P - C_V$$ and $$\gamma$$ for each gas with comparisons, your identification of the mystery gas, and answers to the questions (and to Uncertainty and With calculus, if assigned). Identify simulated data.
