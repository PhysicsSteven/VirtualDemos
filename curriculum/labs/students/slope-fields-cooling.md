# Slope Fields: Cooling Tea and a Growing Culture
Student laboratory · Calculus for physics

Textbook: OpenStax *Calculus*, Vol. 2, §§4.1 to 4.4 (differential equations, direction fields and Euler's method, separable equations, the logistic equation) and Vol. 1, §6.8 (exponential growth and decay). Access for free at https://openstax.org/details/books/calculus-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/slope-fields.html?ws=slope-fields-cooling)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Newton's cooling: a cup of coffee; Radioactive decay; A capacitor discharging (RC); A capacitor charging (RC); Falling with linear drag; A skydiver: quadratic drag; Logistic growth; Logistic growth with harvesting; Overdamped motion in a double well; dy/dt = t − y: isoclines; Euler's method and the number e; Mystery: a cooling cup; Mystery: a growing culture.

**Using the demo.**

- The box at the top takes the right side of dy/dt = f(t, y), written in t and y. The picture draws the slope field: a short line at each point with the slope f gives there. The y axis is labeled with what y stands for in each setup (a temperature, a voltage, a population).
- The orange dot is the start point (t₀, y₀). Type it in the **Start point** card (t₀ and y₀), drag the dot, or click the field to start a new curve there. The orange curve is the accurate solution through the start point; the dashed line with dots is Euler's method with the **Step size h** in the **Euler's method** card, taken in whole steps up to **Run to t**. **Play** draws Euler's steps one at a time; **Step** takes one.
- The Readouts show the equation, the start point and **Slope there, dy/dt** (the slope of the field at the start point), then Euler's last step: **Euler ends at t**, **Euler y there**, **Accurate y there** and **Error, Euler − accurate**.
- The strip at the right of the picture is the phase line, drawn when f depends on y only: arrows show whether y rises or falls, a filled dot is a stable equilibrium, an open dot an unstable one.
- The mystery setups hide the equation: the field is drawn from a model with values you do not know, picked at random when the page opens (or when you press **New mystery**). The cup's dots and the **Thermometer readings (simulated)** readout are readings every 5 minutes, simulated from the same model and rounded to 0.1 °C.
- **Record reading** stores the setup, the start point, the slope there, h, and Euler's last step with the accurate value and the error. **Export to worksheet** fills the Data tables below; **Clear** starts a new series.
- These are computed values, not measurements: the accurate solution is good to about ten significant figures.

</details>

## Goal

Read a differential equation from its slope field without seeing its formula: find the cooling constant and the room temperature of a cup of tea, and the carrying capacity and the point of fastest growth of a yeast culture. Then measure how Euler's error shrinks with the step size.

## Background

A first order differential equation $$\frac{dy}{dt} = f(t, y)$$ tells you the slope of the solution at every point (t, y), before anyone solves it. The slope field draws that slope as a short line at many points; a solution curve runs along the lines.

**Newton's law of cooling.** A cup at temperature T in a room at $$T_a$$ cools at a rate in proportion to how much warmer it is than the room:

$$\frac{dT}{dt} = -k\,(T - T_a) = -kT + kT_a .$$

The slope depends on T only, and it is a straight line in T: graphing the slope (vertical) against T (horizontal) gives slope $$-k$$ and intercept $$kT_a$$, and the slope is zero at $$T = T_a$$. That zero is an equilibrium, and it is stable: above it the cup cools, below it it warms. The solution is $$T = T_a + (T_0 - T_a)\,e^{-kt}$$ (Vol. 1 §6.8).

**Logistic growth.** A population P with growth rate r and carrying capacity K grows as

$$\frac{dP}{dt} = rP\left(1 - \frac{P}{K}\right) = rP - \frac{r}{K}P^2 .$$

Now the slope is a parabola in P. It is zero at P = 0 (unstable) and at P = K (stable), and largest halfway between, at P = K/2, where it equals rK/4. Every solution that starts between 0 and K is an S curve, steepest (its inflection point) where it crosses K/2, at time $$t^* = \frac{1}{r}\ln\!\left(\frac{K}{P_0} - 1\right)$$ for a start $$P_0$$ at t = 0.

**Euler's method** follows the field in straight steps of length h: $$y_{n+1} = y_n + h\,f(t_n, y_n)$$, $$t_{n+1} = t_n + h$$. Each step uses the slope at its start, so the method errs wherever the curve bends. At a fixed time the error of Euler's method is roughly in proportion to h: it is a first order method.

## Before the lab

1. A cup at 80 °C sits in a 20 °C room with k = 0.05 per minute. What is dT/dt? At what temperature is dT/dt zero?
2. For a culture with r = 0.4 per hour and K = 100, find dP/dt at P = 25, 50 and 100. At what P is the growth fastest?
3. Predict before you look: Euler's method with h = 5 min follows the coffee setup, dT/dt = −0.1(T − 20) from 90 °C, to t = 30 min. Will Euler's temperature at 30 min be above or below the accurate one? When h is halved, by about what factor will the error change? Write your guesses and one sentence of reasoning for each.

## Procedure

**A. The mystery cup.** In the right panel, under Setups, press **Mystery: a cooling cup**. Do not press **New mystery** after this, or the cup changes. In the **Start point** card under the picture, type t₀ = 0 and y₀ = 90 (press Enter or click away after typing), then press **Record reading** in the Readings section. Repeat with y₀ = 80, 70, 60, 50, 40 and 30, recording each time; **Slope there, dy/dt** in the Readouts is the slope you are reading. Press **Export to worksheet** (the readings go to Table 1), then **Clear**. Copy the 40 min value from the **Thermometer readings (simulated)** readout into your notes.

**B. Your model of the cup.** After you have done Analysis 1 (the fit of Table 1), type your model into the dy/dt = box, with your values of k and the room temperature, for example `-0.06(y - 22)`. The dots stay. Type t₀ = 0 and y₀ = 92 in the Start point card and 40 in **Run to t**, and read **Accurate y there** in the Readouts (your model's temperature at 40 min). Write it down beside the thermometer reading at 40 min. Press **Mystery: a cooling cup** again to bring the hidden field back.

**C. The mystery culture.** Press **Mystery: a growing culture**. In the Start point card type t₀ = 0 and y₀ = 10, and press **Record reading**. Repeat for y₀ = 30, 50, 70, 90, 110, 130, 150, 170 and 190. Export to worksheet (Table 2), then Clear. Look at the phase line: write down where its filled dot sits on the y axis.

**D. The culture's S curve.** Still on the mystery culture, type t₀ = 0 and y₀ = 5, and set **Step size h** to 0.5. Type **Run to t** = 2 and record a reading. Repeat for Run to t = 4, 6, 8, 10, 12, 14, 16, 18 and 20. Each row's accurate y is the culture at that time. Export to worksheet (Table 3), then Clear.

**E. Euler's step size.** Press **Newton's cooling: a cup of coffee** (h = 5 min, Run to t = 30). Press **Play** and watch the steps follow the field. Press **Record reading**. Press **Halve h** and record again; repeat until h = 0.625 min (four readings). Export to worksheet (Table 4).

## Data

Table 1. The mystery cup: the slope of the field at t = 0.

| Reading | Temperature y₀ (°C) | Slope dy/dt (°C/min) |
|---|---|---|
| | | |
| | | |
| | | |

Table 2. The mystery culture: the slope of the field at t = 0.

| Reading | Population y₀ (millions per mL) | Slope dy/dt (millions per mL per hour) |
|---|---|---|
| | | |
| | | |
| | | |

Table 3. The mystery culture from y₀ = 5 at t = 0.

| Reading | Time t (h) | Accurate y (millions per mL) |
|---|---|---|
| | | |
| | | |
| | | |

Table 4. The coffee, dT/dt = −0.1(T − 20) from 90 °C: Euler's method at the end of the run.

| Reading | Step size h (min) | Euler y (°C) | Accurate y (°C) | Error, Euler − accurate (°C) |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

## Analysis

1. Graph Table 1, the slope (vertical) against the temperature (horizontal), and fit a straight line. From its slope find k (in 1/min), and from where the line crosses zero find the room temperature $$T_a$$ (intercept divided by k). Check $$T_a$$ against where the phase line's dot sits.
2. From part B, how close is your model's temperature at 40 min to the thermometer reading at 40 min? If they differ by more than 0.2 °C, which of your two values (k or $$T_a$$) would you change, and which way?
3. Graph Table 2, the slope against the population, and fit a quadratic, $$y = a + bx + cx^2$$. Compare with $$rP - (r/K)P^2$$: find r from b, and K from b and c. At what population is the slope largest, and how large is it there? Compare K with where the phase line's dot sits, and the population of fastest growth with K/2.
4. Graph Table 3 (accurate y against t). Between which two times does the curve rise fastest? Compare with $$t^* = \frac{1}{r}\ln\!\left(\frac{K}{5} - 1\right)$$ from your r and K, and say what y the curve has there.
5. From Table 4, divide each error by the next one (h divided by 2 each time). What factor do you find, and what does it say about the order of Euler's method? For h = 5 min, work out the exact Euler value by hand: each step multiplies T − 20 by 1 − 0.1h, so six steps give $$20 + 70\,(0.5)^6$$. Does it match the demo?

## Uncertainty

Each slope you read in Tables 1 and 2 is exact for the hidden model, so the scatter about your fit is zero up to the rounding of the readout (six significant figures). Your values of k, $$T_a$$, r and K therefore come out close to the hidden ones; use the standard errors the fit gives for their uncertainty. The thermometer readings are rounded to 0.1 °C, so a model that stays within 0.05 °C of each dot agrees with them. In Table 4 the accurate value is good to about ten significant figures, far better than the errors you are measuring.

## Questions

1. Look back at your guess in Before the lab 3. Was Euler's temperature at 30 min above or below the accurate one, and did halving h change the error by the factor you guessed? Use the slope field to explain why every Euler step on a cooling curve errs the same way.
2. A real cup in a real room does not follow Newton's law exactly: it also cools by evaporation from the surface, which is fast when the tea is hot. If you read slopes from real data, how would your graph of slope against temperature differ from a straight line, and which way would it bend?
3. A falling object with drag in proportion to $$v^2$$ follows $$dv/dt = g(1 - (v/v_t)^2)$$. Without solving it, what is the terminal velocity, is it stable, and how would the graph of dv/dt against v compare with your Table 2 graph?

## What to hand in

Before the lab answers, the four data tables, the three graphs with their fits, your values of k, $$T_a$$, r and K, the comparison in part B, and your answers to the Analysis and Questions. Say that the data are computed by the demo, not measured.
