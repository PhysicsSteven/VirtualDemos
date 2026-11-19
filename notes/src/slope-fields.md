---
title: Slope Fields and Euler's Method
level: Calculus for physics (OpenStax Calculus Vol 2 4.1 to 4.5, Vol 1 6.8) and Physics I and II where a first order equation appears (drag, RC circuits, decay)
time: 15 to 30 minutes
---
## What students should come away with

- A first order differential equation dy/dt = f(t, y) gives the slope of the solution at every point, before anyone solves it. Drawing those slopes as short lines (the slope field) shows every solution at once: a solution curve runs along the lines.
- Euler's method is the slope field followed in straight steps: y ← y + h·f(t, y). Each step uses the slope at its start, so it strays from the curve wherever the curve bends; halving h roughly halves the error at a fixed time (first order).
- When f depends on y only, the long run can be read without solving: the zeros of f are equilibria, and the sign of f on each side says whether nearby solutions come back (stable) or run away (unstable). Terminal velocity, room temperature, a charged capacitor's battery voltage and a carrying capacity are all stable equilibria.

## Before class

Nothing to install. Projector mode makes the field and the labels readable from the back. Blind (Lab fold) hides the accurate solution, the error and the equilibria so students can sketch first. The box takes any right side in t and y; every setup can be edited in place (change k in the cooling law and watch the field turn).

## Running it in class

1. **Read the field.** Open on Newton's cooling. Before pressing anything, ask where coffee at 90 °C will be in an hour, and how you can tell from the lines alone. Then press Play: Euler's steps follow the field from the start point (Q1).
2. **Halve h.** Press Halve h twice and Play each time, reading Error, Euler − accurate at t = 30 min. Ask for a prediction first (Q1).
3. **Equilibria.** Press Falling with linear drag and A skydiver: quadratic drag. Both curves, from rest and from faster than terminal, close in on the dashed stable line. Ask what the phase line arrows mean physically (Q3).
4. **Two equilibria.** Press Logistic growth with harvesting. Click the field just above and just below 276.4 to start curves there (Q2).
5. **Isoclines.** Press dy/dt = t − y: isoclines. The isocline for slope 1 is itself a solution (Q4).
6. **The number e.** Press Euler's method and the number e and halve h a few times (Q5).

## Questions

**Q1.** Coffee at 90 °C in a 20 °C room follows dT/dt = −0.1(T − 20), t in minutes. With h = 5 min, Euler gives 21.09 °C at 30 min. Is that too hot or too cold, and why does every Euler step on this curve err the same way? Predict the error when h is halved, then check.

**Q2.** A fish population follows dP/dt = 0.5P(1 − P/1000) − 100 (100 fish taken each day). Find the equilibria and say which is stable. What happens to a population of 250? Of 300? What is the largest daily harvest that leaves a stable population, and why?

**Q3.** A skydiver falls with dv/dt = g(1 − (v/55)²), v in m/s down. Without solving, what is her terminal velocity, and is it stable? A skydiver who dives head down reaches 75 m/s and then turns belly down: describe what happens next, using the field.

**Q4.** For dy/dt = t − y, sketch the isoclines for slopes −1, 0, 1 and 2. Why is the isocline for slope 1 also a solution curve, and what does that tell you about every solution for large t?

**Q5.** For dy/dt = y, y(0) = 1, show that n Euler steps to t = 1 give (1 + 1/n)ⁿ. What does that tend to as n grows, and about how many steps are needed to get e right to three decimal places?

## Common misconceptions

- **"The short lines are the solution."** Each line is only a direction at one point; a solution is a curve that runs along the lines through a chosen start.
- **"Solution curves can cross."** For a smooth f, two solutions that met would have the same start point and so be the same curve; the field shows them squeezing together (toward a stable equilibrium) but never crossing.
- **"An equilibrium is where the curve stops."** A solution only approaches a stable equilibrium as t grows; it takes forever to reach it. Starting exactly on one, it stays.
- **"Euler's error is random."** Its sign follows from the bend of the curve: on a curve that bends up (cooling, decay) every step undershoots, so Euler falls below.
- **"The phase line works for every equation."** Only when f depends on y alone; for dy/dt = t − y the slope at a given y changes with t.

## How the demo works

- The box is read by the site's shared parser (demos/lib/vdmath.js), never run as code. Each field segment is drawn at the angle that slope has on the axes shown, so a slope of 1 is 45° only when the axes have the same scale.
- Euler takes as many whole steps of h as fit before Run to t, with t = t₀ + ih (never a running sum). The accurate solution is Dormand and Prince's adaptive fifth order Runge–Kutta pair at a relative tolerance of 10⁻¹⁰, landing exactly on Euler's step times; the tests check it against the closed forms of cooling, decay, RC charging and discharging, linear and quadratic drag, logistic growth, t − y and e^t to 10⁻⁸.
- Equilibria are the zeros of f(y) in the view, found by bisection (or by a golden section search on |f| where f touches zero without changing sign), and sorted stable, unstable or semistable by the sign of f just below and above. Isoclines are contours of f(t, y) by marching squares.
- The mystery setups draw k and the room temperature (cup), or the growth rate and carrying capacity (culture), at random. The cup's thermometer readings are simulated from its exact solution, rounded to 0.1 °C.
