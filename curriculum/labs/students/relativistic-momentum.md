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

## Safety

None for the virtual apparatus. Real accelerating fields of megavolts per meter are lethal and are kept inside shielded vacuum tubes.

## Procedure

**Electron.** Start with the Electron, steady force setup (electron, 1.0 MV/m). Step the clock and record the time, distance and speed at every step, up to 10 ns.

**Proton.** Clear the readings, choose the proton and a field of 10.0 MV/m, and do the same, recording at least twelve times spread over the whole run. Send this run to a new copy of the table.

**Your choice.** Repeat for the alpha particle or the muon, at a field of your choice.

## Data

| Reading | Time $$t$$ (ns) | Distance $$x$$ (m) | Speed $$v$$ (c) | $$\gamma$$ | $$\gamma v$$ (c) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. Graph $$v$$ against $$t$$ for the electron. Compare the early points with Newton's $$v = Ft/m$$. When would Newton's electron pass c?
2. Graph $$\gamma v$$ against $$t$$. Is it a straight line through the origin? From its slope and the force, find the electron's mass and compare with 9.109 × 10⁻³¹ kg.
3. Graph $$\gamma$$ against $$x$$. From the slope find the electron's rest energy $$mc^2$$ in MeV and compare with 0.511 MeV.
4. Do the same for the proton and your third particle. Which particle needs the most time to reach 0.9c in the same field, and why?

## Uncertainty

The speed is given to six decimal places. Find how much an error of 0.000001c in $$v$$ changes $$\gamma$$ at $$v = 0.986$$c, and say which of your points limit the precision of the slopes.

## Questions

1. The force stays the same all the way, yet the acceleration $$dv/dt$$ falls towards zero. Where does the work done by the force go?
2. Why is it wrong to say that the particle's mass grows as it speeds up? What does the textbook say instead (§5.8)?
3. In the same field, how does the momentum of the proton after 100 ns compare with the momentum of the electron after 100 ns? How do their speeds compare?
4. Large accelerators give protons energies thousands of times their rest energy. What does that mean for their speed?

## What to hand in

Prelab answers, the table copies with their graphs and fits, the electron's mass and rest energy and your other particles' rest energies with uncertainties, and answers to the questions. Identify simulated data.
