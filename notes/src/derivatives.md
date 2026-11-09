---
title: Functions and Their Derivatives
level: Physics I (Vol 1 3.2, 3.3, 3.6) and any course that uses calculus
time: 10 to 25 minutes
---
## What students should come away with

- The derivative is the slope of the function at each point: where f rises, f′ is positive; where f has a peak or a valley, f′ crosses zero.
- The second derivative is the slope of the slope. Where f curves upward f″ is positive, where it curves downward f″ is negative, and an inflection point is where f″ changes sign.
- For motion, the same chain reads position, velocity, acceleration, jerk: the dropped ball has a straight line velocity and a constant acceleration.
- The integral runs the other way: F(x) is the area under f from a, and the slope of F is f again.

## Before class

Nothing to install. Use Projector mode so the curves are thick enough to read. The box takes ordinary typing (2x, sin x, x^3, e^(-x^2/2)), and a pasted y = or f(x) = is fine. Blind mode in the Lab fold hides the derivative formulas and values, so students can sketch f′ before they see it.

## Running it in class

1. **A cubic.** Turn on Blind and leave only f showing. Ask students to sketch f′ on the same axes, then turn f′ on (Q1). Press Play: the tangent line slides along, and its slope is the value of f′ at the point.
2. **A dropped ball.** Switch to the dropped ball. The same three curves are now height, velocity and acceleration (Q2). Turn on f‴: the jerk is zero.
3. **Sine.** f″ is f upside down. Type sin(2x) and compare f″ with f (Q3); connect to a = −ω²x for a mass on a spring.
4. **A corner.** Ask for a prediction of f′ for |x| before showing it (Q4).
5. **The integral.** Use the 1/x setup: F from a = 1 is ln x. Then the bell curve with the integral on (Q5).

## Questions

**Q1.** For f(x) = x³ − 3x, find where f′ = 0 and use the sign of f″ there to say which point is a peak and which is a valley. Where is the inflection point? Check each answer by moving the point in the demo.

**Q2.** A ball is dropped from 20 m: h(t) = 20 − 4.905t² in meters, t in seconds. When does it land, and what is its velocity just before it lands? What are the second and third derivatives, and what do they mean physically?

**Q3.** Type sin(2x). What is f″ divided by f at any point? What would it be for sin(kx)? A mass on a spring has x(t) = A cos(ωt). What does this say about its acceleration?

**Q4.** Predict, then check: sketch f′ and f″ for f(x) = |x|. What happens at x = 0? The demo shows f″ = 0 everywhere; why can that not be the whole story at x = 0? (Hint: f′(1) − f′(−1) must equal the area under f″ from −1 to 1.)

**Q5.** For the bell curve e^(−x²/2), the integral from 0 levels off at 1.2533 as x grows. What is the area under the whole curve, from −∞ to ∞? Read F(1) from the demo with a = 0, and use it to find the fraction of the whole area that lies between x = −1 and x = 1. Where have you seen that fraction before?

## Common misconceptions

- **"Where f is biggest, f′ is biggest."** At a peak f′ is zero; f′ is largest where f is steepest.
- **"f″ < 0 means f is decreasing."** f″ says how the slope changes, not its sign. On the left of the cubic f rises (f′ > 0) while curving downward (f″ < 0).
- **"A negative acceleration means slowing down."** The dropped ball has a = −9.81 m/s² the whole way and speeds up, because its velocity is negative too.
- **"The integral is the area, so it cannot be negative."** F counts area below the axis, or to the left of a, as negative.

## How the demo works

- The box is read by a parser written for the page; nothing typed is run as code. Implied multiplication (2x, 3sin(x), (x+1)(x−1)), function powers (sin^2(x), sin^-1(x)) and absolute value bars are understood.
- Derivatives are symbolic and exact: the sum, product, power and chain rules, then like terms and factors are combined, so the formulas shown are the exact derivatives. Odd roots of negative numbers are real (∛x is defined for x < 0); even roots are not.
- The integral is numerical: adaptive Simpson's rule, to about nine significant figures. Where the area diverges (1/x across 0) it stops.
- A derivative is drawn only where f is defined, and a jump is left as a gap. Angles are in radians.
