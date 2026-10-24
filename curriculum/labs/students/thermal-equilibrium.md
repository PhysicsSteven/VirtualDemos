# Thermal Equilibrium
Student laboratory · Thermodynamics

Textbook: OpenStax *University Physics*, Vol. 2, §§1.1, 1.4 and 1.6. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/temperature.html?setup=hotmetal)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Hot metal in water; Mystery metal (these two use the Equilibrium view, the subject of this worksheet); Gas thermometer; Rod in a water jacket; Water near 4 °C; House wall (the other three worksheets).

**Using the demo.**

- The Equilibrium view has two bodies, A and B, in a perfectly insulated box, joined by a bar 2.00 cm across. You choose each body's material, mass and starting temperature, and the bar's material and length.
- Heat flows through the bar at $$P = kA(T_A - T_B)/L$$, with the thermal conductivity $$k$$ from the textbook's Table 1.5. The bar's own heat capacity and the box's are neglected, so all the heat that leaves one body enters the other.
- Each body changes temperature as $$Q = mc\,\Delta T$$, with $$c$$ from Table 1.3. A liquid sits in a can whose heat capacity is neglected.
- The thermometers read to 0.01 °C and the clock to 1 s. The speed buttons run the clock 1, 10 or 60 times faster than real time; the clock always shows the time in the experiment.
- Record reading stores the time and both temperatures, with the settings. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Mystery metal hides the block's material and specific heat. New mystery metal picks another.
- Blind hides the graph and the predicted final temperature, so you can make your own.

</details>

## Goal

Watch two bodies come to thermal equilibrium, check that the heat one loses is the heat the other gains, and use that to find an unknown specific heat.

## Background

Two bodies in thermal contact exchange heat until they reach the same temperature; then nothing more changes. That shared temperature is **thermal equilibrium**, and the **zeroth law** says two bodies each in equilibrium with a third are in equilibrium with each other (§1.1). That is why a thermometer works.

With no heat lost to the surroundings, the heat body A gives up is the heat body B takes in (§1.4):

$$m_A c_A (T_{A0} - T_f) = m_B c_B (T_f - T_{B0}) \quad\Rightarrow\quad T_f = \frac{m_A c_A T_{A0} + m_B c_B T_{B0}}{m_A c_A + m_B c_B}.$$

Heat flows through the bar at a rate set by conduction (§1.6), $$P = kA\,(T_A - T_B)/L$$. As the difference shrinks, so does the flow, and the difference dies away exponentially:

$$T_A - T_B = (T_{A0} - T_{B0})\,e^{-t/\tau}, \qquad \frac{1}{\tau} = \frac{kA}{L}\left(\frac{1}{m_A c_A} + \frac{1}{m_B c_B}\right).$$

## Before the lab

1. A 0.50 kg aluminum block at 90 °C is joined to 0.25 kg of water at 20 °C. Without calculating, will the final temperature be nearer 90 °C or 20 °C? Why?
2. Use the textbook's specific heats to predict the final temperature.
3. Sketch both temperatures against time on one graph.
4. If the copper bar were twice as long, what would change: the final temperature, the time to get there, or both?

## Safety

Hot metal blocks and hot water can burn. In a real lab use tongs and an insulated container, and let samples cool before handling.

## Procedure

**Hot metal in water.** Start with the Hot metal in water setup. Run the clock and record both temperatures about every 20 s for the first two minutes and then about every 60 s until they agree to 0.01 °C. Send the readings to the worksheet.

**A longer bar.** Clear the readings, double the bar's length and repeat. Send this run to a new copy of the table.

**Mystery metal.** Pick the Mystery metal setup, run it to equilibrium and record the starting temperatures and the final temperature. Repeat with a different water mass or starting temperature to check your result.

## Data

| Reading | Time $$t$$ (s) | $$T_A$$ (°C) | $$T_B$$ (°C) | $$T_A - T_B$$ (°C) | $$\ln(T_A - T_B)$$ (difference in °C) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

Record each body's material, mass and starting temperature, and the bar's material and length, for each run.

## Analysis

1. Compare the final temperature of the Hot metal in water run with your prediction from Before the lab question 2.
2. Using your final temperature, work out the heat the aluminum lost and the heat the water gained. How well do they agree?
3. Fit $$\ln(T_A - T_B)$$ against $$t$$. From the slope find the time constant $$\tau$$, and compare it with $$\tau$$ worked out from the formula in the Background (the bar is 2.00 cm across).
4. Find $$\tau$$ for the longer bar the same way. By what factor did it change, and why?
5. From the mystery runs, find the mystery metal's specific heat, $$c = m_w c_w (T_f - T_{w0}) / [\,m\,(T_0 - T_f)\,]$$, and name the metal from Table 1.3.

## Uncertainty

The thermometers read to 0.01 °C. As the two temperatures close in, $$T_A - T_B$$ becomes small, so its relative uncertainty grows; say which readings you left out of the fit in Analysis 3 and why. For the mystery metal, propagate the 0.01 °C reading uncertainty through the formula for $$c$$. In a real lab, heat lost to the container and the air would make your $$c$$ come out wrong; say in which direction.

## Questions

1. The final temperature does not depend on the bar at all. Why not?
2. Water has the larger specific heat but the smaller mass here. Which body changed temperature more, and why?
3. A thermometer is put in a cup of coffee. Why must you wait before reading it, and what is the thermometer in equilibrium with when you do?
4. Why do coastal towns have milder temperature swings than inland towns?

## What to hand in

Prelab answers, the settings for each run, the table copies with their graphs and fits, the final temperatures, time constants and mystery specific heat with uncertainties and comparisons, and answers to the questions. Identify simulated data.
