# Eddy Current Braking: a Magnet in a Pipe
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §13.5, with Faraday's and Lenz's laws from §§13.1 and 13.2. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/eddy-currents.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Using the demo.**

- The same magnet is dropped down a copper pipe, an aluminum pipe and a plastic pipe, each 1.00 m long with a 9.5 mm inner radius, cut open so you can see the magnet and the currents induced in the walls. A graph shows each magnet's speed against time.
- The Set up card on the picture sets the magnet's strength (its magnetic dipole moment $$m$$), the wall thickness $$w$$ and the temperature of the pipes. It fades away during a drop and comes back when the drop ends or is paused. Changing a setting starts over.
- A timer under each pipe stops when its magnet reaches the bottom, to 0.01 s. The readouts give each pipe's conductivity $$\sigma$$ and, unless Blind is on, the drag constant, the terminal speed, the predicted fall time and the heat.
- Record reading works once the magnets have reached the bottom of the metal pipes. It stores one row for each metal pipe: the settings, the pipe's conductivity and its fall time. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- The drop runs in real time, so a magnet in a pipe cooled in liquid nitrogen takes about a minute and a half to reach the bottom.

**What the demo models.**

- The magnet is a 12.7 mm by 12.7 mm neodymium cylinder of mass 12.2 g, treated as a point dipole on the pipe's axis, and the wall is treated as thin compared with the pipe's radius. That gives a drag force in proportion to speed, $$F = kv$$, with $$k$$ from the formula below (Levin and coworkers, *Am. J. Phys.* 74, 815, 2006). A real magnet that nearly fills the pipe falls at the same order of speed, but not exactly this one. Air drag is ignored, and the magnet does not touch the wall.
- Conductivities at 20 °C: copper 59.6 MS/m and aluminum 37.7 MS/m. The resistivity changes linearly with temperature, reaching the measured values at liquid nitrogen temperature (−196 °C), where copper conducts 7.2 times and aluminum 8 times better than at 20 °C.

</details>

## Goal

Measure how the fall time of a magnet in a metal pipe depends on the pipe's conductivity and on the strength of the magnet, and explain the braking with Faraday's and Lenz's laws.

## Background

As the magnet falls, the magnetic flux through each ring of the pipe wall changes: it grows through the rings below the magnet and shrinks through the rings above. By Faraday's law each ring has an emf, and because the wall conducts, currents circulate around the pipe: **eddy currents** (§13.5). By Lenz's law they oppose the change, so the rings below push the magnet up and the rings above pull it up. The faster the magnet moves, the faster the flux changes and the larger the currents, so the force is in proportion to the speed:

$$F = kv,\qquad k = \frac{45\,\mu_0^2\,m^2\,\sigma\,w}{1024\,a^4},$$

where $$a$$ is the radius of the middle of the wall. The current in a ring is in proportion to $$\sigma$$ and to the emf (in proportion to $$m$$), and the force is that current in the magnet's field (again in proportion to $$m$$), which is why $$k$$ grows as $$\sigma m^2$$.

A magnet of mass $$M$$ released from rest reaches its terminal speed $$v_T = Mg/k$$ within a time of about $$\tau = M/k = v_T/g$$. When $$\tau$$ is much shorter than the fall, the fall time over a length $$L$$ is

$$t \approx \frac{L}{v_T} + \tau = \frac{Lk}{Mg} + \frac{M}{k}\ \approx\ \frac{Lk}{Mg}.$$

At terminal speed the magnet's kinetic energy no longer changes, so all of the gravitational potential energy it loses becomes heat in the pipe wall.

## Before the lab

1. Seen from above, which way does the current circulate in a ring of wall just below a magnet falling north pole down? In a ring just above it? Explain with Lenz's law.
2. A copper pipe gives a fall time of 12.6 s. Predict the fall time for an aluminum pipe of the same size, using the conductivities above.
3. Predict the fall time in the copper pipe if the magnet were half as strong.
4. Calculate the time for the magnet to fall 1.00 m through the plastic pipe.

## Safety

Strong neodymium magnets snap together hard enough to pinch skin and shatter. Keep them apart and away from electronics and cards. Liquid nitrogen causes severe cold burns: use it only with an instructor, gloves and eye protection.

## Procedure

Start with the magnet at 1.60 A·m² and the wall 1.6 mm thick. Let each drop run until both metal pipes' magnets reach the bottom before you record.

**Part 1: conductivity.** Drop the magnets with the pipes at 100, 60, 20, −20, −50, −100, −150 and −196 °C, recording each drop. Send the series to the worksheet, then clear the demo's readings.

**Part 2: magnet strength.** With the pipes at 20 °C, drop magnets of strength 0.80, 1.00, 1.20, 1.40, 1.60, 1.80 and 2.00 A·m², recording each drop. Send this series as a new copy of the table.

**Part 3: the plastic pipe and the wall.** Note the plastic pipe's fall time. Then, at 20 °C with the 1.60 A·m² magnet, note the copper pipe's fall time for walls 0.8 mm and 3.0 mm thick. Put these in the notes under your Part 2 table.

## Data

| Trial | Pipe | Temperature $$T$$ (°C) | Magnet $$m$$ (A·m²) | $$m^2$$ (A²·m⁴) | Wall $$w$$ (mm) | Conductivity $$\sigma$$ (MS/m) | Fall time $$t$$ (s) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

In Part 2, work out $$m^2$$ for the copper rows only and leave it blank for the aluminum rows, so that the graph uses the copper pipe alone.

## Analysis

1. Part 1: plot $$t$$ against $$\sigma$$ for all the rows, copper and aluminum together, and fit a line. Why do both metals fall on the same line?
2. Calculate the slope you expect, $$Lk/(Mg\sigma)$$, from the formula for $$k$$, with $$a = 10.3\ \text{mm}$$ (the middle of a 1.6 mm wall), and compare it with your fitted slope. Is the intercept consistent with the small $$\tau$$ term?
3. Part 2: plot $$t$$ against $$m^2$$ for the copper pipe and fit a line. Compare the slope with the prediction. Which rows lie furthest from the line, and why (think about $$\tau$$)?
4. For the copper pipe at 20 °C with the 1.60 A·m² magnet, find the terminal speed and $$\tau$$. Was it fair to treat the whole fall as being at terminal speed?
5. For the same drop, calculate the heat produced in the pipe. Where did that energy come from?
6. Part 3: compare the plastic pipe's time with your answer to Before the lab question 4. Did doubling the wall from 0.8 mm to 1.6 mm double the fall time? Use the formula for $$k$$ to explain what you found.

## Uncertainty

The timers read to 0.01 s, and the settings are exact, so a fit with small residuals confirms the model rather than testing it. The model itself is the larger limit: it treats the magnet as a point and the wall as thin, but here the wall is about a sixth of the radius and the magnet fills two thirds of the bore. Say which way a real magnet's fall time would likely differ. The conductivity between −50 °C and −196 °C comes from a straight line in resistivity between measured values, which is close for pure copper but not exact.

## Questions

1. Why is a copper pipe not attracted to a magnet that is held still inside it?
2. A copper pipe with a slit cut along its whole length: will the magnet fall faster or slower than in a whole pipe? Explain.
3. Eddy current brakes on trains and roller coasters cannot hold a vehicle at rest. Explain why, using your results.
4. Cooling the copper pipe in liquid nitrogen made the magnet fall about seven times more slowly. Why does a colder metal brake harder?

## What to hand in

Prelab answers, the two data tables with their graphs and fits, the slopes compared with the formula, the terminal speed, $$\tau$$ and heat for one drop, your Part 3 observations, and answers to the questions. Identify simulated data.
