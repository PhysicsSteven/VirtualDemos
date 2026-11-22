---
title: Functions and Their Derivatives
level: Physics I (Vol 1 3.2, 3.3, 3.6) and any course that uses calculus; Calculus I (OpenStax Calculus Vol 1 2.1, 3.1, 4.2, 4.4, 4.9) for Secant to tangent and Newton's method
time: 10 to 25 minutes for each mode
---
## What students should come away with

- The derivative is the slope of the function at each point: where f rises, f′ is positive; where f has a peak or a valley, f′ crosses zero.
- The second derivative is the slope of the slope. Where f curves upward f″ is positive, where it curves downward f″ is negative, and an inflection point is where f″ changes sign.
- For motion, the same chain reads position, velocity, acceleration, jerk: the dropped ball has a straight line velocity and a constant acceleration.
- The integral runs the other way: F(x) is the area under f from a, and the slope of F is f again.
- The derivative is a limit: the secant slope [f(x + h) − f(x)]/h closes in on the tangent slope as h shrinks. For motion, the average velocity over a short time closes in on the instantaneous velocity.
- The tangent line is the best straight line near the point: its error shrinks like h², and the Mean Value Theorem says some tangent between two points is parallel to the secant through them.
- Newton's method rides tangents down to a root. Near a simple root the correct digits roughly double each step; from a bad start it can cycle, stop at a flat tangent or land on a different root.

## Before class

Nothing to install. Use Projector mode so the curves are thick enough to read. The box takes ordinary typing (2x, sin x, x^3, e^(-x^2/2)), and a pasted y = or f(x) = is fine. Blind mode in the Lab fold hides the derivative formulas and values, so students can sketch f′ before they see it.

## Running it in class

1. **A cubic.** Turn on Blind and leave only f showing. Ask students to sketch f′ on the same axes, then turn f′ on (Q1). Press Play: the tangent line slides along, and its slope is the value of f′ at the point.
2. **A dropped ball.** Switch to the dropped ball. The same three curves are now height, velocity and acceleration (Q2). Turn on f‴: the jerk is zero.
3. **Sine.** f″ is f upside down. Type sin(2x) and compare f″ with f (Q3); connect to a = −ω²x for a mass on a spring.
4. **A corner.** Ask for a prediction of f′ for |x| before showing it (Q4).
5. **The integral.** Use the 1/x setup: F from a = 1 is ln x. Then the bell curve with the integral on (Q5).
6. **Secant to tangent.** Switch modes to Secant to tangent with the first setup. Press Play: h halves every half second and the secant swings into the tangent, while the table of difference quotients closes in on f′(1) = 2 (Q6). Turn on the linear approximation and watch its error shrink like h².
7. **Average and instantaneous velocity.** The dropped ball setup reads the secant slope as an average velocity (Q7). Then the Mean Value Theorem setup, and |x| as the case where it fails (Q8).
8. **Newton's method.** Switch modes to Newton's method with √2. Press One step a few times and watch the correct digits column (Q9). Then the three failing starts: the cycle, the flat tangent and the jump to another root (Q10).

## Questions

**Q1.** For f(x) = x³ − 3x, find where f′ = 0 and use the sign of f″ there to say which point is a peak and which is a valley. Where is the inflection point? Check each answer by moving the point in the demo.

**Q2.** A ball is dropped from 20 m: h(t) = 20 − 4.905t² in meters, t in seconds. When does it land, and what is its velocity just before it lands? What are the second and third derivatives, and what do they mean physically?

**Q3.** Type sin(2x). What is f″ divided by f at any point? What would it be for sin(kx)? A mass on a spring has x(t) = A cos(ωt). What does this say about its acceleration?

**Q4.** Predict, then check: sketch f′ and f″ for f(x) = |x|. What happens at x = 0? The demo shows f″ = 0 everywhere; why can that not be the whole story at x = 0? (Hint: f′(1) − f′(−1) must equal the area under f″ from −1 to 1.)

**Q5.** For the bell curve e^(−x²/2), the integral from 0 levels off at 1.2533 as x grows. What is the area under the whole curve, from −∞ to ∞? Read F(1) from the demo with a = 0, and use it to find the fraction of the whole area that lies between x = −1 and x = 1. Where have you seen that fraction before?

**Q6.** For f(x) = x², show that the secant slope from x = 1 to 1 + h is exactly 2 + h. What is it for h = 0.1, and for h = −0.1? The tangent line at 1 is L = 1 + 2h: show that its error f(1 + h) − L is h², and compare with f″(1)/2.

**Q7.** The dropped ball has h(t) = 20 − 4.905t². Find its average velocity from t = 1 s to t = 1.5 s and its velocity at t = 1 s. At what time between 1 s and 1.5 s is its velocity equal to the average, and why is that time where it is?

**Q8.** For f(x) = x³ − 3x on [−2, 2], find the secant slope and every c between −2 and 2 where f′(c) equals it. Then try |x| on [−1, 2]: why is there no such c, and which condition of the Mean Value Theorem fails?

**Q9.** Use Newton's method on x² − 2 from x₀ = 1. Write x₁, x₂ and x₃ as fractions or to ten digits, and count their correct digits. Why do the correct digits roughly double with each step?

**Q10.** Explain each failing start: x³ − 2x + 2 from x₀ = 0, x³ − 3x from x₀ = 1, and sin x from x₀ = 1.5. For each, give a start that works.

## Common misconceptions

- **"Where f is biggest, f′ is biggest."** At a peak f′ is zero; f′ is largest where f is steepest.
- **"f″ < 0 means f is decreasing."** f″ says how the slope changes, not its sign. On the left of the cubic f rises (f′ > 0) while curving downward (f″ < 0).
- **"A negative acceleration means slowing down."** The dropped ball has a = −9.81 m/s² the whole way and speeds up, because its velocity is negative too.
- **"The integral is the area, so it cannot be negative."** F counts area below the axis, or to the left of a, as negative.
- **"A smaller h is always better."** In exact arithmetic it is, but a computer keeps about 16 digits: at h = 10⁻¹² most of the digits of f(x + h) − f(x) are rounding, and the difference quotient gets worse.
- **"Newton's method always finds the nearest root."** It follows the tangent, and a nearly flat tangent can throw it far away.

## How the demo works

- The box is read by a parser written for the page; nothing typed is run as code. Implied multiplication (2x, 3sin(x), (x+1)(x−1)), function powers (sin^2(x), sin^-1(x)) and absolute value bars are understood.
- Derivatives are symbolic and exact: the sum, product, power and chain rules, then like terms and factors are combined, so the formulas shown are the exact derivatives. Odd roots of negative numbers are real (∛x is defined for x < 0); even roots are not.
- The integral is numerical: adaptive Simpson's rule, to about nine significant figures. Where the area diverges (1/x across 0) it stops.
- A derivative is drawn only where f is defined, and a jump is left as a gap. Angles are in radians.
- Secant to tangent computes the difference quotient directly from f, so the table shows the real rounding at small h. The Mean Value points are found by stepping along f′ minus the secant slope and bisecting each change of sign; a jump in f′, as at a corner, is not counted, and on a straight line the readout says every c works.
- Newton's method takes x − f(x)/f′(x) with the exact f′. It stops when f′ = 0 (flat tangent), when a value repeats (cycle), or when a step no longer changes x in double precision. The correct digits are counted against the root the steps settle on.
