# Momentum Under a Steady Force
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §§5.8 and 5.9. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/relativistic-motion.html?setup=electronField)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Electron, steady force (the Steady force view, the subject of this worksheet); Rocket fires a probe, Rocket fires light and Mystery rocket (the velocity worksheet); Bertozzi's electrons and Mystery particle (the energy worksheet).

**Using the demo.**

- A charged particle starts from rest in a uniform electric field inside a long vacuum tube. The force on it, $$F = qE$$, is the same at every speed. You choose the particle (electron, muon, proton, deuteron, alpha particle) and the field, from 0.1 to 10 MV/m.
- The clock reads in nanoseconds and plays slowed down, so a run lasts about 12 s at 1×. Step moves the clock on by a fixed amount, shown under the controls; the run stops by itself. Changing the particle or the field starts again from rest.
- The readouts give the time and the distance from the start to five significant figures, and the speed in units of c to six decimal places. Rest energies are the CODATA 2022 values.
- The energy the particle radiates as it speeds up is left out; it is less than one part in 10¹⁰ of the work done.
- Record reading stores the particle, the field, the force, the time, the distance and the speed. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides the graph, Newton's prediction, the momentum and $$\gamma$$.

</details>

## Goal

Push a particle with a force that never changes, and find what grows in proportion to time: not the speed, but the relativistic momentum $$p = \gamma m v$$.

## Background

Newton's second law in its original form says force is the rate of change of momentum, $$F = dp/dt$$. It holds in relativity too (§5.8), but with the relativistic momentum

$$p = \gamma m v, \qquad \gamma = \frac{1}{\sqrt{1 - v^2/c^2}}.$$

A steady force from rest therefore gives $$p = Ft$$ exactly, so $$\gamma v$$ grows in proportion to time with slope $$F/m$$, while $$v$$ itself never reaches c. Newton's mechanics, with $$p = mv$$, would give $$v = Ft/m$$ without limit.

The work done by the force over the distance $$x$$ is $$Fx$$, and it becomes the kinetic energy $$K = (\gamma - 1)mc^2$$ (§5.9), so

$$\gamma = 1 + \frac{F}{mc^2}\,x .$$

A plot of $$\gamma$$ against $$x$$ is a straight line with intercept 1, and its slope gives the rest energy $$mc^2$$.

## Before the lab

1. Find the force on an electron in a field of 1.0 MV/m, and the time Newton's mechanics says it would take to reach c from rest.
2. Find $$\gamma$$ and $$\gamma v$$ for a speed of 0.946512c.
3. Show that if $$\gamma v = (F/m)t$$, then $$v = \dfrac{(F/m)t}{\sqrt{1 + (Ft/mc)^2}}$$, and that this is always less than c.
4. An electron has $$mc^2 = 0.511$$ MeV. Through what distance must a 1.0 MV/m field push it to give it $$\gamma = 3$$?
5. The 1.0 MV/m field pushes an electron from rest for 5 ns, then for another 5 ns. Compared with the first 5 ns, does the electron gain more speed, the same or less in the second 5 ns? And more momentum, the same or less? Answer both before you run it, with a reason for each.

## Safety

None for the virtual apparatus. Real accelerating fields of megavolts per meter are lethal and are kept inside shielded vacuum tubes.

## Procedure

**Electron.** Start with the Electron, steady force setup (electron, Field strength E at 1.0 MV/m). Press **Record reading** at t = 0, then press **Step** (0.5 ns a press, as the line under the controls says) and Record reading after each press, up to 10 ns (21 readings). Record reading stores the time, distance and speed. Press Export to worksheet before you clear the readings.

**Proton.** Press Clear, choose Proton in the **Particle** menu and set the **Field strength E** slider to 10.0 MV/m. Do the same: Step moves 100 ns a press here, so record at t = 0 and after every press until the run stops by itself (about 19 readings). Press Export to worksheet; this run goes into a new copy of the table.

Fill in the $$\gamma$$ and $$\gamma v$$ columns yourself from the speed.

## Data

| Reading | Particle | Field $$E$$ (MV/m) | Time $$t$$ (ns) | Distance $$x$$ (m) | Speed $$v$$ (c) | $$\gamma$$ | $$\gamma v$$ (c) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

## Analysis

1. Graph $$v$$ (vertical) against $$t$$ (horizontal) for the electron, the first copy of the table. Compare the early points with Newton's $$v = Ft/m$$. When would Newton's electron pass c?
2. Graph $$\gamma v$$ (vertical) against $$t$$ (horizontal) for the electron. Is it a straight line through the origin? From its slope and the force, find the electron's mass and compare with 9.109 × 10⁻³¹ kg.
3. Graph $$\gamma$$ (vertical) against $$x$$ (horizontal) for the electron. From the slope find the electron's rest energy $$mc^2$$ in MeV and compare with 0.511 MeV.
4. Do the same (Analysis 2 and 3) for the proton. Which needs more time to reach 0.9c in the same field, the electron or the proton, and why?

## Questions

1. The force stays the same all the way, yet the acceleration $$dv/dt$$ falls towards zero. Where does the work done by the force go?
2. In the same field, how does the momentum of the proton after 100 ns compare with the momentum of the electron after 100 ns? How do their speeds compare?
3. From your electron readings at 0, 5.0 and 10.0 ns, find the gain in speed and the gain in $$\gamma v$$ in each 5 ns, and set them beside your answers to Before the lab 5. Someone explains the result by saying the electron's mass grows as it speeds up, so the same force moves it less. Why is that wrong, and what does the textbook say instead (§5.8)? Explain the two gains from $$F = dp/dt$$.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The speed is given to six decimal places. Find how much an error of 0.000001c in $$v$$ changes $$\gamma$$ at $$v = 0.986$$c, and say which of your points limit the precision of the slopes. Give the electron's mass and rest energy and the proton's rest energy with uncertainties from the standard errors of the slopes, and say whether each agrees with the accepted value within them.

## With calculus

For courses that use calculus. This section is not counted in the 75 minutes; do it when your instructor assigns it.

1. Derive $$K = (\gamma - 1)mc^2$$. The work done from rest is $$W = \int F\,dx = \int \frac{dp}{dt}\,dx = \int_0^p v\,dp$$. Integrate by parts ($$\int v\,dp = pv - \int p\,dv$$) with $$p = \gamma m v$$, and show that $$W = (\gamma - 1)mc^2$$.
2. Show that $$d\gamma/dv = \gamma^3 v/c^2$$, then differentiate $$p = \gamma m v$$ with respect to time to show that $$F = \gamma^3 m\,dv/dt$$ for a force along the motion. From your electron rows at 4.5 ns and 5.5 ns, estimate $$dv/dt$$ at 5.0 ns (their difference in $$v$$ over 1.0 ns) and compare it with $$F/(\gamma^3 m)$$, using your slope from Analysis 2 for $$F/(mc)$$ and $$\gamma$$ from your 5.0 ns row.
3. Integrate $$v = \dfrac{(F/m)t}{\sqrt{1 + (Ft/mc)^2}}$$ from Before the lab 3 to find $$x(t)$$ from rest. Check your result against the distance in your 10.0 ns electron row, and show that it is the same as $$\gamma = 1 + Fx/mc^2$$.

## What to hand in

Prelab answers, the table copies with their graphs and fits, the electron's mass and rest energy and the proton's rest energy, and answers to the questions (and to Uncertainty and With calculus, if assigned). Identify simulated data.
