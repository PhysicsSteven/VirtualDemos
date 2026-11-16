---
title: Numerical Methods for Motion
level: Physics I (Vol 1 13.5, 15.1, 15.2, 15.4) and any course where students write or use simulations
time: 15 to 30 minutes
---
## What students should come away with

- A computer does not solve F = ma; it steps from t to t + h with a rule. Every rule makes an error, and the error of a good rule shrinks as a known power of h, its order: 1 for Euler and symplectic Euler, 2 for Verlet, 4 for RK4.
- Accuracy per step is not the whole story. Euler's energy grows every step, symplectic Euler and Verlet keep it bounded forever, and RK4's drifts slowly, so over long runs Verlet can beat the "better" method.
- An error of the method changes when h changes; a feature of the physics does not. The pendulum's period from 90° is 18% longer than 2π√(L/g) at every step size, so it is physics.

## Before class

Nothing to install. Projector mode makes the four copies readable from the back. Blind (Lab fold) hides the Error against h plot so students can find the slopes themselves. The +1 period and +10 periods buttons take exactly N or 10N steps and pause, so every reading lands on a whole number of periods.

## Running it in class

1. **One period of a spring, 50 steps.** Press the Spring, 50 steps a period setup, then +1 period. Ask which copy is wrong before pointing to the readouts: Euler's block has spiraled out on the phase portrait (Q1).
2. **Halve the step.** Move Steps per period N to 100 and press +1 period again. Ask students to predict how much each error falls before they read the table (Q2).
3. **Long runs.** Set N to 20, show the Energy error plot, and press +10 periods several times. RK4's energy error climbs a little every period; Verlet's wobbles in place (Q3).
4. **Physics or method?** Press Pendulum from 90°. Read Period T (exact). Change N: the period of every copy that stays on the dashed bob does not move (Q4).
5. **A comet.** Press Comet orbit, e = 0.9: the step that is fine far from the Sun is far too large at perihelion (Q5).

## Questions

**Q1.** At N = 50, Euler's energy after one period of the spring is up by 119%, while the other three rules are within a fraction of a percent. One Euler step multiplies the energy by 1 + (ωh)². Use that to check the 119%, and explain from a sketch of one step on the phase portrait why Euler always lands outside the circle.

**Q2.** Predict: when N goes from 50 to 100, by what factor should each rule's largest error fall, if the orders are 1, 1, 2 and 4? Then check in the demo. Why does the observed order come out a little off for Euler at these N, and closer to its true value at larger N?

**Q3.** RK4 is far more accurate per step than Verlet. Over 100 periods at N = 20, which keeps the energy closer to its start, and why does that matter for a simulation of the solar system over a billion years?

**Q4.** A student's simulation of a pendulum let go from 90° gives a period of 2.37 s, not the 2.01 s of 2π√(L/g). Is the simulation wrong? Describe a test with the demo that tells an error of the method from a real effect.

**Q5.** In the comet orbit, which rule does worst, and where along the orbit does its error grow? Why would a simulation of a comet use a step that changes along the orbit?

## Common misconceptions

- **"The computer's answer is exact."** Every step rule makes an error each step; the demo shows its size beside the exact motion.
- **"A smaller step always fixes it."** The error falls as h to the order, so a first order rule needs ten times the steps for ten times the accuracy, and rounding sets a floor near 10⁻¹² for RK4.
- **"The most accurate method per step is best for every job."** RK4's energy drifts; Verlet's does not. For long runs of orbits or molecules a symplectic rule wins.
- **"Anything that changes when I change the program is a bug, anything that doesn't is right."** The pendulum's long period does not change with h because it is real physics; an error of the method always shrinks as h does.

## How the demo works

- The same system runs four times, once with each rule, from the same start. The exact motion is not stepped: x = A cos ωt for the spring, Jacobi's elliptic functions for the pendulum (via the arithmetic geometric mean), Kepler's equation solved by Newton's method for the orbit.
- Error is the distance from the exact point on the phase portrait (for the spring √(Δx² + (Δv/ω)²)); the convergence plot uses the largest error over the first period, because at a whole period some errors cancel and would make symplectic Euler look second order.
- Force evaluations count the work: one per step for Euler, symplectic Euler and Verlet (it reuses the end acceleration), four for RK4. A run whose energy is off by a factor of 1,000 is stopped and marked failed.
- These are computed values, not measurements: the same settings always give the same digits.
