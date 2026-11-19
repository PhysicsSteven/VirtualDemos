---
title: Riemann Sums and Integrals
level: Calculus I and II (OpenStax Calculus Vol 1 5.1 to 5.4, 6.1, 6.5; Vol 2 3.6, 3.7) and Physics I (University Physics Vol 1 3.6, 7.1, 9.2)
time: 15 to 40 minutes
---
## What students should come away with

- A definite integral is the limit of sums of thin pieces: h times the height of each piece, added up. Every rule (left, right, midpoint, trapezoid, Simpson) closes in on the same number as n grows; they differ in how fast.
- The error of a rule falls as a power of 1/n, its order: 1 for left and right, 2 for midpoint and trapezoid, 4 for Simpson. On log axes that is a straight line of slope −p, and doubling n divides the error by 2ᵖ.
- Area below the axis counts as negative. The integral is the net signed area; the total area (∫|f|) is a different number, like displacement and distance.
- F(x), the area from a to x, has slope f(x) at every x: F′ = f, the Fundamental Theorem of Calculus. That is why an antiderivative evaluates a definite integral: F(b) − F(a).
- In physics an area under a graph is a quantity in its own right: work under F(x), impulse under F(t), charge under I(t), displacement under v(t), with units the product of the axes' units.

## Before class

Nothing to install. Projector mode enlarges the graphs and labels. Blind (Lab fold) hides the integral, the errors and the fitted slopes, so students can predict them first. The lower graph switches between Error against n, F(x), the area so far, and Area as b grows; Play does what that view is about (doubles n, sweeps x, or pushes b out).

## Running it in class

1. **Left and right.** The opening setup is e^(x/2) from 0 to 3 with four left rectangles. Ask whether the sum is too big or too small before showing the readouts, then switch to Right (Q1).
2. **Raise n.** Press Play: n doubles every 0.8 s and the ring on the lower graph walks down its line. Ask for the factor the error falls by each doubling for each rule; Error ratio, n to 2n reads it (Q2).
3. **Signed area.** Press Signed area: sin x. The hatched pieces count as negative. Drag b to 2π (Q3).
4. **Area under a force.** Press Work stretching a spring, then Impulse of a kick: the area has units, and the trapezoid and midpoint rules are exact for a straight line (Q4).
5. **F′ = f.** Press F′ = f: the area so far and Play. F climbs where f is positive and peaks where f crosses zero; the measured slope of F matches f(x) (Q5).
6. **Infinity.** Press 1/x² out to infinity, then 1/x out to infinity, and Play each (Q6). Charge from a discharging capacitor with the lower graph on Area as b grows shows all the charge, I₀RC, only in the limit.
7. **Data.** Press A measured force pulse: trapezoids. There is no formula, so there is no exact integral and no error to plot; the trapezoid sum is the answer (Q7).

## Questions

**Q1.** For e^(x/2) from 0 to 3 with n = 4, the left sum is 5.7392 and the right sum 8.3504. Which is too small, and why, from the shape of the curve? Without the demo, find the trapezoid sum from those two numbers.

**Q2.** Predict by what factor each rule's error falls when n doubles, if the orders are 1, 1, 2, 2 and 4. Then read Error ratio, n to 2n at n = 4 for each rule. Why does midpoint's error have the opposite sign to trapezoid's and about half its size?

**Q3.** For sin x from 0 to 3π/2 the integral is 1 but the total area is 3. Explain both numbers. Where must b be for the integral to be 0, and where is F(x) = ∫ from 0 to x of sin largest?

**Q4.** The spring setup gives W = 9.00 J. Find the left and right sums for n = 6 by hand. Why are the trapezoid and midpoint sums exactly 9.00 J for every n? For the kick, what is the ball's speed if its mass is 0.43 kg?

**Q5.** In the F′ = f setup, at what x values does F have its peaks and valleys, and what is f there? What does the slope of F tell you about f, and what does f tell you about F?

**Q6.** Both 1/x² and 1/x go to zero as x grows. Why does one have a finite area out to infinity and the other not? Give the area from 1 to b for each at b = 10, 100 and 1,000.

**Q7.** The table of readings gives J = 8.14 N·s by trapezoids. Why is there no exact value to compare with, and what would make the trapezoid estimate better?

## Common misconceptions

- **"The integral is the area, so it is never negative."** It is the signed area: pieces below the axis subtract. The total area is ∫|f|.
- **"More rectangles always fix it."** The left rule needs ten times the pieces for ten times the accuracy; Simpson's rule gets ten thousand times more accurate for the same tenfold increase.
- **"Simpson's rule is always fourth order."** Only for a smooth function: √x (infinite slope at 0) brings every rule down to order 1.5.
- **"An integral needs a formula."** A table of readings has an integral too; the trapezoid rule estimates it without any formula.
- **"If f goes to zero, the area out to infinity is finite."** 1/x goes to zero and its area still grows without bound, like ln b.

## How the demo works

- The box is read by the shared parser (demos/lib/vdmath.js); nothing typed is run as code. Each sum is computed exactly as its formula says, in double precision.
- The exact integral is F(b) − F(a) with F from the basic rules (powers, e^x, a^x, sin, cos, tan, sinh, cosh, ln, sec² and csc² of a linear inside), checked against a numerical value so a pole between a and b is caught. Where the basic rules give no antiderivative (the bell curve, x·e^x, |x|) the integral is computed by adaptive Simpson's rule with Richardson extrapolation, about 13 significant figures, and the readout says so.
- The slopes on the error graph are least squares fits of log |error| against log n over the largest n (up to 4096) whose error is still well above rounding.
- Area as b grows follows the area out to b = a + 10¹² and gives a limit only when the area has stopped changing to 10⁻⁹ of itself over the last two factors of ten in b.
- The force plate readings in the table setup are simulated, and labeled so in the box.
