# Riemann Sums: How Fast Does Each Rule Converge?
Student laboratory · Calculus for physics

Textbook: OpenStax *Calculus*, Vol. 1, §§5.1 and 5.2, and Vol. 2, §3.6 (Numerical Integration); OpenStax *University Physics*, Vol. 1, §9.2 (Impulse and Collisions). Access for free at https://openstax.org/details/books/calculus-volume-1 and https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/integrals.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Left and right sums on a rising curve; Signed area: sin x; Simpson is exact for a cubic; Area between √x and x²; F′ = f: the area so far; The bell curve: no formula for F; 1/x² out to infinity: area 1; 1/x out to infinity: no limit; and, under In physics, Work stretching a spring; Impulse of a kick; Charge from a discharging capacitor; Displacement and distance from velocity; A measured force pulse: trapezoids.

**Using the demo.**

- Type a function in the **f(x) =** box, or switch the box to **A data table** and type readings, one x, y pair a line. The upper graph shows the function and fills the area from **a** to **b** with the pieces of the chosen rule.
- In the bar above the graph, beside **Play** and **Reset**, the rule buttons (**Left**, **Right**, **Midpoint**, **Trapezoid**, **Simpson**) pick the rule, and **Pieces n** sets the number of pieces (type it in the box, or use −1, +1 and × 2; the slider under **The sum**, below the graphs, steps through set values). Simpson's rule needs n even; an odd n is raised by one, and the note under the slider says so. **Limits** sets a and b.
- The **Lower graph** buttons switch the graph under the picture: **Error against n** plots the size of each rule's error against n on log axes, with the slope of each rule's line in the key at the top right; **F(x), the area so far** and **Area as b grows** follow the area itself.
- Readouts: **Sum** (the rule's sum), **Integral** (the exact value, and under it how it was found), **Error, sum − integral**, and **Error ratio, n to 2n** (the error at n divided by the error at 2n).
- **Record reading** stores the setup, the rule, n, the sum, the integral and the error. **Export to worksheet** sends the rows to Table 1 (formula readings) or Table 2 (table readings, when every row is from a data table); **Clear** starts a new series.

**What the demo computes.**

- Each sum is computed exactly as its formula says. The exact integral is F(b) − F(a) from an antiderivative found by the basic rules; where there is none, it is computed numerically to about 13 significant figures, and the readout says so.
- The force plate readings in the table setup are simulated, and labeled so: computed values, not measurements.

</details>

## Goal

Measure how fast the left, midpoint, trapezoid and Simpson sums close in on an exact integral, find each rule's order from the slope of its error on log axes, and then use the trapezoid rule on a table of force readings to find the impulse of a kick.

## Background

**Riemann sums.** To find the area under f(x) from a to b, cut [a, b] into n pieces of width $$h = (b - a)/n$$, with edges $$x_i = a + ih$$. Each rule adds up h times a height for each piece:

- **Left:** $$L_n = h\,[f(x_0) + f(x_1) + \dots + f(x_{n-1})]$$, the height at the left edge of each piece.
- **Midpoint:** $$M_n = h\,[f(m_1) + \dots + f(m_n)]$$, the height at the middle $$m_i$$ of each piece.
- **Trapezoid:** $$T_n = \tfrac{h}{2}\,[f(x_0) + 2f(x_1) + \dots + 2f(x_{n-1}) + f(x_n)]$$, straight lines joining the points.
- **Simpson** (n even): $$S_n = \tfrac{h}{3}\,[f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + \dots + 4f(x_{n-1}) + f(x_n)]$$, a parabola through each pair of pieces.

As n grows, every one of these closes in on the definite integral $$\int_a^b f(x)\,dx$$. They differ in how fast.

**Order of a rule.** For a smooth function and large n, the error of a rule behaves like a power of 1/n,

$$\text{error} \approx \frac{C}{n^{p}},$$

and p is the **order** of the rule. Doubling n divides the error by $$2^p$$. Taking logarithms, $$\log\lvert\text{error}\rvert = \log\lvert C\rvert - p\log n$$: on log scales the error against n is a straight line of slope −p. From two readings with $$n_1$$ and $$n_2$$ and errors $$e_1$$ and $$e_2$$, the observed order is

$$p = \frac{\ln(\lvert e_1\rvert/\lvert e_2\rvert)}{\ln(n_2/n_1)}.$$

The leading errors are known (OpenStax Vol. 2, §3.6):

$$L_n - I \approx -\frac{(b-a)\,[f(b) - f(a)]}{2n},\qquad T_n - I \approx \frac{(b-a)^2\,[f'(b) - f'(a)]}{12\,n^2},\qquad M_n - I \approx -\frac{(b-a)^2\,[f'(b) - f'(a)]}{24\,n^2},$$

and Simpson's error falls as $$1/n^4$$. So the left rule is first order, midpoint and trapezoid second order, and Simpson fourth order. The midpoint error is half the trapezoid error and of opposite sign, which is why $$S_{2n} = (2M_n + T_n)/3$$ cancels both.

**An integral in physics.** A force F(t) that acts for a short time gives an object an **impulse**, the area under the force against time,

$$J = \int F\,dt,$$

in N·s, equal to the change in its momentum (University Physics §9.2). A force plate does not give a formula for F(t); it gives readings every millisecond. Between readings nothing is known, so the natural estimate joins the readings with straight lines: the trapezoid rule over the table,

$$J \approx \sum_i \tfrac12\,(F_i + F_{i+1})\,(t_{i+1} - t_i).$$

## Before the lab

1. The left rule is first order and Simpson's rule is fourth order. By what factor should each one's error fall when n goes from 4 to 16? From 16 to 64?
2. For f(x) = e^(x/2) from 0 to 3, find the exact integral $$I = \int_0^3 e^{x/2}\,dx$$ by hand, to five significant figures. Then use the leading error formulas in Background to predict the left error and the trapezoid error at n = 16.
3. Predict, before you open the demo: f(x) = e^(x/2) rises and bends upward. Will the left sum, the midpoint sum and the trapezoid sum be too large or too small? Give a reason for each from a sketch of one piece.
4. A ball of mass 0.43 kg at rest receives an impulse of 8.0 N·s. How fast does it leave?

## Safety

No hazards in the virtual lab.

## Procedure

**A. Errors against n.** Press the **Left and right sums on a rising curve** setup (f(x) = e^(x/2), a = 0, b = 3). Make sure the **Lower graph** is on **Error against n**. Press **Left** in the bar above the graph, type 4 in the **Pieces n** box and press **Record reading**. Type 16 and record, then 64 and record. Press **Export to worksheet** (the three readings go to Table 1), then **Clear**, so each rule gets its own copy of Table 1 and its own graph. Do the same three values of n with **Midpoint**, then **Trapezoid**, then **Simpson**, pressing **Export to worksheet** and **Clear** after each rule: twelve readings in four copies of Table 1. Before you record the first Simpson reading, write down whether the left, midpoint and trapezoid sums at n = 4 were too large or too small (the sign of **Error, sum − integral**) for Analysis 1.

**B. Read the slopes.** Still on the same setup, read the slope of each rule's line from the key at the top right of the lower graph (it is fitted over n up to 4096) and write the five slopes in Table 3. Press **Simpson**, set **Pieces n** to 4, and read **Error ratio, n to 2n**; do the same for **Left**.

**C. Impulse from a table of readings.** Press the **A measured force pulse: trapezoids** setup. The box now holds a table of simulated force plate readings, t in seconds and F in newtons, every 1 ms. With **Trapezoid** pressed, press **Record reading**; press **Left** and record. Now make the readings coarser: in the box, delete the lines for t = 0.001, 0.003, 0.005, 0.007 and 0.009, so six readings 2 ms apart are left. Press **Trapezoid** and record. Press **Export to worksheet** (the readings go to Table 2). Copy the eleven original readings (press the setup again to bring them back) into Table 4.

## Data

Table 1. f(x) = e^(x/2) from 0 to 3.

| Reading | Rule | n | Sum | Error, sum − integral | Size of the error |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

Table 2. Impulse of the force pulse from the table.

| Reading | Rule | Intervals | Impulse J (N·s) |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

Table 3. Slopes from the lower graph.

| Rule | Slope | Order p |
|---|---|---|
| Left | | |
| Right | | |
| Midpoint | | |
| Trapezoid | | |
| Simpson | | |

Table 4. The force plate readings.

| t (s) | F (N) |
|---|---|
| | |
| | |
| | |

## Analysis

1. Look back at Before the lab 3. Were the left, midpoint and trapezoid sums at n = 4 too large or too small, and does that match your prediction? Use a sketch of one piece of each rule on an upward bending, rising curve to explain what you observed.
2. Graph Table 1 with **Log scales** ticked: the size of the error (vertical) against n (horizontal), one rule at a time. For each rule work out the observed order p from n = 4 to 16 and from 16 to 64 with the formula in Background. Compare them with the slopes in Table 3 and with the orders 1, 2, 2 and 4.
3. Compare your left and trapezoid errors at n = 16 with your predictions from Before the lab 2. By what percentage does each differ from the leading error formula?
4. From your n = 64 rows and the order of each rule, estimate the n each of the left, trapezoid and Simpson rules would need for an error of $$1 \times 10^{-6}$$. Which rule reaches that accuracy with the fewest function values?
5. Check the trapezoid impulse in Table 2 by hand from Table 4: add the eleven readings with the trapezoid weights. Why do the trapezoid and left sums agree exactly for this table?
6. Your two trapezoid impulses use steps of 1 ms and 2 ms. Since the trapezoid rule is second order, the better estimate is $$J \approx (4J_{1\,\text{ms}} - J_{2\,\text{ms}})/3$$. Find it, and the speed it gives the 0.43 kg ball of Before the lab 4.

## Uncertainty

The demo's numbers are computed, not measured: the same settings give the same digits every time. Your observed orders differ from 1, 2, 2 and 4 only because the error is not yet a single power of 1/n at small n; that difference shrinks as n grows. At large n rounding sets a floor near $$10^{-13}$$ of the integral, which Simpson's rule reaches first. For the table, the uncertainty is the unknown force between readings: estimate it from the difference between your 1 ms and 2 ms trapezoid impulses, and say how many significant figures of J you trust.

## Questions

1. The midpoint sum uses one function value per piece, the same as the left sum, yet its error falls as $$1/n^2$$. Explain from a sketch why the errors on the two halves of a midpoint rectangle nearly cancel.
2. Press **Simpson is exact for a cubic**. Simpson's error stays at rounding level for every n. Explain from the way Simpson's rule fits the curve why it is exact for a cubic and not for e^(x/2).
3. A classmate samples a 2 ms long collision with a force sensor that reads every 1 ms. Using what you found in part C, explain why the impulse they compute could be badly off, and what reading rate you would ask for.

## What to hand in

Before the lab answers, Tables 1 to 4, the log–log graph of Table 1, the observed orders, and your answers to the Analysis and Questions. Say that the data are computed by the demo, not measured.
