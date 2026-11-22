# Reading Derivatives from a Graph
Student laboratory · Calculus for physics

Textbook: OpenStax *Calculus*, Vol. 1, §§3.2 to 3.4 (the derivative as a function, differentiation rules, derivatives as rates of change); OpenStax *University Physics*, Vol. 1, §§3.2 and 3.3 (instantaneous velocity and acceleration). Access for free at https://openstax.org/details/books/calculus-volume-1 and https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/derivatives.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** A cubic: peaks and an inflection; Sine: f″ = −f; The bell curve; A dropped ball: height, velocity, acceleration; A damped oscillation; A corner: \|x\|; The area under 1/x is ln x; and, under Secant to tangent, The secant becomes the tangent; A dropped ball: average and instantaneous velocity; Linear approximation: √x near 4; The Mean Value Theorem; and, under Newton's method, five setups on finding roots.

**Using the demo.**

- Type a function in the **f(x) =** box (x or t as the variable). The graph shows f as a solid orange curve, its first derivative f′ as a dashed green curve and its second derivative f″ as a dotted pink curve, all on the same axes. The check boxes under **Curves**, below the graph, turn each curve on or off.
- The point is the dashed vertical line with a dot on each curve. Drag it, tap the graph, or type a value in **Move the point to** at the top of **At the point** in the right panel. **At the point** shows x, f, f′ and f″ there, and under **Shape** whether f is rising or falling and which way it curves.
- The buttons in the bar above the graph switch modes: **Derivatives** (the curves), **Secant to tangent** (a secant line from x to x + h, with the **Step h** box and the **h ÷ 2**, **h ÷ 10** and **−h** buttons in its card below the graph) and **Newton's method**. A setup under Secant to tangent switches to that mode; a setup in the first group does not switch back, so press **Derivatives** yourself.
- **Blind**, under **Lab** at the bottom of the right panel, hides the derivative formulas and values, so you can sketch first.
- **Record reading** (in **Readings**) stores the setup, the point and f, f′, f″ and f″/f there; in Secant to tangent it stores h, the secant slope, the tangent slope f′ and their difference. **Export to worksheet** sends the rows to the matching Data table below; **Clear** starts a new series.

**What the demo computes.**

- The derivatives are worked out exactly, by the rules of calculus applied to the formula in the box, so the values are exact to the digits shown. The secant slope is computed from its formula in ordinary double precision.

</details>

## Goal

Predict the graphs of f′ and f″ from the graph of f alone, by its peaks, valleys, bends and corners; check the predictions in the demo; then read velocity and acceleration from the graph of a dropped ball's height and of a damped oscillation.

## Background

**The derivative is a slope.** The derivative f′(x) is the slope of the tangent line to the graph of f at x (OpenStax Vol. 1, §3.2). Read it off the graph of f point by point:

- Where f rises, f′ > 0; where f falls, f′ < 0. The steeper the graph, the larger the size of f′.
- At a smooth peak or valley the tangent is level, so **f′ = 0** there. The graph of f′ crosses the axis at each peak and valley of f.

**The second derivative is the bend.** f″ is the slope of f′. Where the graph of f curves upward (like a cup), f′ is increasing and **f″ > 0**; where it curves downward (like a cap), **f″ < 0**. At a peak f″ is usually negative, at a valley usually positive. A point where the graph changes from curving one way to curving the other is an **inflection point**: there f″ = 0 and f′ has its own peak or valley, so the graph of f is steepest (or least steep) there.

**A corner has no derivative.** The graph of $$\lvert x\rvert$$ is two straight lines that meet at a corner at x = 0. Its slope is −1 on the left and +1 on the right, so f′ jumps from −1 to +1 and has no value at the corner itself. A function has a derivative at a point only where its graph is smooth there.

**Motion.** For an object moving along a line, with position x(t), the velocity is the derivative of the position and the acceleration is the derivative of the velocity (University Physics §§3.2 and 3.3):

$$v = \frac{dx}{dt}, \qquad a = \frac{dv}{dt} = \frac{d^2x}{dt^2}.$$

The **average velocity** over a time interval from t to t + h is the slope of the secant line through the two points of the graph,

$$\bar v = \frac{x(t + h) - x(t)}{h},$$

and the instantaneous velocity v(t) is the limit of the average velocity as h shrinks to zero: the secant turns into the tangent.

A ball dropped from rest at height $$x_0$$, with no air drag, has $$x = x_0 - \tfrac12 g t^2$$, with g = 9.81 m/s².

**An oscillation.** A mass on a spring obeys Newton's second law, ma = −kx: the acceleration is in proportion to the position and opposite to it. Add a damper, which pushes against the motion with a force −cv, and

$$ma = -kx - cv .$$

## Before the lab

1. For f(x) = x³ − 3x, find f′(x) and f″(x) by hand. At which x is f′ = 0? Which of those points is a peak and which is a valley? At which x is f″ = 0, and what is the slope of f there?
2. Sketch the graph of $$f(x) = \lvert x\rvert$$ from −3 to 3, and under it, on the same x axis, your prediction of f′ and of f″. What happens to f′ at x = 0?
3. A ball is dropped from rest at 20 m. Write x(t), v(t) and a(t). At what time does it reach the ground? What is its average velocity from t = 1.0 s to 1.5 s?
4. Predict, before you open the demo: the setup **A damped oscillation** is f(t) = e^(−0.3t) cos(4t), and the demo's hint says the acceleration f″ "stays close to −16 times the position". You will record f″/f at t = 0, 0.4, 0.8, 1.2, 1.6 and 2.0 s. Will f″/f be within 10 % of −16 at every one of those times? If you expect some to be far off, say which kind of point (where f is large, small, rising, falling) and give one sentence of reasoning.

## Safety

No hazards in the virtual lab.

## Procedure

**A. Sketch first: a cubic.** In the right panel, under Setups, press **A cubic: peaks and an inflection** (f(x) = x³ − 3x). Under **Curves**, below the graph, untick f′ and f″, so only f is drawn. Open **Lab** at the bottom of the right panel and tick **Blind**. Copy the graph of f from −3 to 3 into your notes, and under it, on the same x axis, sketch f′ and then f″ from the graph alone, marking where you predict f′ = 0 and f″ = 0. Then untick **Blind**, tick f′ and f″ again, and compare the curves with your sketch; note each difference for Analysis 1. Now type −2 in **Move the point to** (under At the point) and press Enter, then press **Record reading** in Readings. Do the same at x = −1, 0, 1 and 2.

**B. A corner.** Press **A corner: \|x\|**. Before you look at the green and pink curves, compare them with your sketch from Before the lab 2. Type −1 in **Move the point to** and record; then record at x = −0.01, 0.01 and 1. Press **Export to worksheet** (the readings from parts A and B go to Table 1), then **Clear**.

**C. A dropped ball: height, velocity and acceleration.** Press **A dropped ball: height, velocity, acceleration**. The variable is t in seconds and f(t) is the height in meters. Read the shape of the three curves: f is a parabola, f′ a straight line, f″ a level line. Type 0 in **Move the point to** and record; then record at t = 0.5, 1.0, 1.5 and 2.0 s. Export to worksheet (Table 2), then Clear.

**D. From average to instantaneous velocity.** Press **A dropped ball: average and instantaneous velocity**, under Secant to tangent. The demo switches to Secant to tangent, with the point at t = 1 s and **Step h** = 0.5 s; the red secant joins the heights at 1.0 s and 1.5 s, and its slope is the average velocity. Press **Record reading**. Then press **h ÷ 10** (in the Secant to tangent card below the graph) and record, and do that twice more, for h = 0.5, 0.05, 0.005 and 0.0005 s. Export to worksheet (Table 3), then Clear.

**E. A damped oscillation.** Press **Derivatives** in the bar above the graph (the setups in the first group do not switch back by themselves), then press **A damped oscillation**. f(t) is the position of a mass on a spring with a damper, in arbitrary units, and t is in seconds. Type 0 in **Move the point to** and record; then record at t = 0.4, 0.8, 1.2, 1.6 and 2.0 s. Export to worksheet (Table 4).

## Data

Table 1. The cubic and the corner.

| Reading | Setup | x | f(x) | f′(x) | f″(x) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

Table 2. The dropped ball.

| Reading | t (s) | Height x (m) | Velocity v = f′ (m/s) | Acceleration a = f″ (m/s²) |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

Table 3. Average velocity from t = 1 s to 1 s + h.

| Reading | h (s) | Average velocity (m/s) | Velocity at 1 s, f′(1) (m/s) | Average − instantaneous (m/s) |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

Table 4. The damped oscillation.

| Reading | t (s) | f(t) | f′(t) | f″(t) | f″/f |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. Compare your sketches from part A with the demo's curves and with Table 1. At which x does your sketch of f′ cross zero, and where does the demo's? What is the size of f′ at the inflection point, and how does that show up on the graph of f? Name one difference between your sketch and the demo, and what it taught you.
2. From Table 1, give f′ just left and just right of the corner of $$\lvert x\rvert$$ (x = −0.01 and 0.01). Explain why $$\lvert x\rvert$$ has no derivative at x = 0, and why f″ = 0 everywhere except at the corner.
3. Graph Table 2: velocity (vertical) against t (horizontal), with a straight line fit. What are the slope and intercept, and what do they mean physically?
4. For each row of Table 3, divide the last column (average − instantaneous) by h. What number do you get, and how is it related to the ball's acceleration? Use it to write the average velocity over [1 s, 1 s + h] as a formula in h, and check it against your answer to Before the lab 3.
5. Look back at your prediction in Before the lab 4. Which rows of Table 4 have f″/f within 10 % of −16, and which are far off? What do the far off rows have in common (look at the size of f compared with f′)? Explain what you observed using ma = −kx − cv from Background: divide by m, and use two rows of Table 4 to find k/m and c/m. Check your values on a third row.

## Uncertainty

The demo's derivatives are exact: they come from the rules of calculus applied to the formula, and the readings are rounded to seven significant figures. The secant slopes in Table 3 are computed in double precision; at h = 0.0005 s they are still good to about twelve significant figures, far more than you record. Your sketches carry the real uncertainty in this lab: say how far (in x) your predicted zero crossings of f′ and f″ were from the true ones.

## Questions

1. A car's position graph has a smooth peak at t = 4 s. What is its velocity at that moment, and what is the sign of its acceleration? Describe what the car is doing.
2. A ball bounces off a hard floor: its velocity jumps from −5 m/s to +5 m/s in a very short time. Sketch the height against time around the bounce. Which feature of the graph from this lab does the bounce look like, and what does it say about the acceleration (and the force from the floor) during the bounce?

## What to hand in

Before the lab answers, your sketches from parts A and B, Tables 1 to 4, the graph of Table 2 with its fit, and your answers to the Analysis and Questions. Say that the data are computed by the demo, not measured.
