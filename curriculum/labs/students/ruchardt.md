# Rüchardt's Ball: Measuring γ
Student laboratory · Thermodynamics

Textbook: OpenStax *University Physics*, Vol. 2, §§3.5 and 3.6, and Vol. 1, §15.1. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/gas-heat-capacity.html?setup=ruchardt)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Rüchardt's ball (the Rüchardt's ball view, the subject of this worksheet); Argon, piston locked; Argon, piston free; Nitrogen; Mystery gas (the Heat a gas worksheet).

**Using the demo.**

- A steel ball of mass 16.60 g fits a glass tube 16.00 mm across without friction or leaks. The tube stands on a flask of gas; you choose the gas and the flask's volume, from 2 to 20 L.
- At rest the gas is at the atmosphere's pressure (101.325 kPa) plus the ball's weight on the tube's cross section.
- A swing is too quick for heat to flow, so the gas is squeezed and stretched adiabatically. Friction and heat leaks make the swing die away with a time constant of 6 s (a chosen value); this lengthens the period by less than 0.1% for flasks up to 20 L.
- A photogate at the ball's rest position times each full swing, as the time between two downward passes. The ball's swing is drawn 3 times larger than life.
- Dry air uses $$\gamma = c_P/c_V = 1015/721$$ from the textbook's Table 1.3; the other gases use $$C_V$$ from Table 2.3.
- Record reading stores the gas, the flask volume, the ball's mass, the tube's diameter, the gas pressure and the period of the last swing. It needs at least one full swing timed. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides $$\gamma$$ and the predicted period.

</details>

## Goal

Find the ratio of heat capacities $$\gamma = C_P/C_V$$ for air and other gases from the period of a ball bouncing on a cushion of gas.

## Background

When the ball moves down a distance $$x$$, it squeezes the gas in the flask of volume $$V$$ by $$Ax$$, where $$A$$ is the tube's cross section. The swing is too fast for heat to flow, so the gas follows an adiabat (§3.6), $$PV^\gamma = \text{constant}$$. For a small squeeze this gives a pressure rise

$$\Delta P = -\gamma P\,\frac{\Delta V}{V} = \gamma P\,\frac{Ax}{V}.$$

The extra force $$A\,\Delta P$$ pushes the ball back like a spring of stiffness $$k = \gamma P A^2/V$$, so the ball oscillates in simple harmonic motion (Vol. 1, §15.1) with period

$$T = 2\pi\sqrt{\frac{m}{k}} = 2\pi\sqrt{\frac{mV}{\gamma P A^2}}, \qquad T^2 = \frac{4\pi^2 m}{\gamma P A^2}\,V.$$

Here $$P$$ is the gas pressure with the ball at rest, $$P = P_\mathrm{atm} + mg/A$$. A plot of $$T^2$$ against $$V$$ is a straight line through the origin, and its slope gives $$\gamma$$.

## Before the lab

1. Find the tube's cross section $$A$$ and the gas pressure $$P$$ under the ball.
2. Predict the period for a 10 L flask of dry air, with $$\gamma = 1.40$$.
3. If the flask's volume is made four times larger, what happens to the period?
4. Why would the period be longer if the gas were squeezed isothermally instead of adiabatically?
5. Suppose the 20 L flask held argon instead of dry air, with the same ball. Would the period be longer, shorter, or the same? Say which property of the gas you think decides it.

## Safety

A real Rüchardt apparatus uses a large glass flask under slight pressure. Handle it with care and keep the ball from falling out of the tube.

## Procedure

**Dry air.** (1) Press the Rüchardt's ball setup (dry air, 10 L). (2) Set the Flask volume V slider (1 L steps) to 2 L. Changing the volume or the gas stops the ball, so press Drop the ball each time. (3) When Swings timed shows 2 or more, press Record reading; it stores the Period of the last swing. (4) Repeat at 4, 6, 8 and so on to 20 L.

**Argon.** Press Export to worksheet, then Clear. Choose Argon, Ar from the Gas in the flask menu and repeat at five volumes, 4, 8, 12, 16 and 20 L. Press Export to worksheet, which sends this run to a new copy of the table.

**One more gas.** Press Clear, then do the same for Carbon dioxide, CO₂ or another gas from the menu, and press Export to worksheet.

## Data

| Reading | Gas | Flask volume $$V$$ (L) | Period $$T$$ (s) | $$T^2$$ (s²) |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

## Analysis

1. Fit $$T^2$$ against $$V$$ for each gas. Is the intercept zero within its uncertainty?
2. From each slope find $$\gamma = 4\pi^2 m/(P A^2\,\text{slope})$$. Remember to convert liters to cubic meters.
3. Compare your $$\gamma$$ for air with 1.40, and for argon with $$5/3$$.
4. From your $$\gamma$$ for each gas find $$C_V = R/(\gamma - 1)$$ and compare with Table 2.3.
5. Compare your $$\gamma$$ for air with $$7/5$$, the value for a diatomic gas. Air is mostly nitrogen and oxygen; should they agree?

## Uncertainty

The photogate times each swing to a tenth of a millisecond, and the model's only departure from the formula is its slow damping. Estimate how much the damping changes the period of a 20 L flask, and compare it with your fit's uncertainty. In a real apparatus the ball rubs on the tube and some gas leaks past it; say how each would affect the period and your $$\gamma$$.

## Questions

1. What would happen to the period if the ball were twice as heavy?
2. In 1929 Rüchardt timed only a few swings with a stopwatch. Why does a larger flask make the measurement easier?
3. Set your 20 L periods for dry air and argon beside your answer to Before the lab 5. Why does the period depend on $$\gamma$$, a property of the gas's heat capacities, when no heat flows, and why is argon's $$\gamma$$ different from air's?

## What to hand in

Prelab answers, the table copies with their graphs and fits, $$\gamma$$ and $$C_V$$ for each gas with uncertainties and comparisons, and answers to the questions. Identify simulated data.
