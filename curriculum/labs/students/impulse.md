# Impulse and Momentum
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§9.1–9.2. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/impulse.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Using the demo.**

- The motion detector gives the velocity before ($$v_1$$) and after ($$v_2$$) the bounce, to 0.001 m/s, positive toward the sensor. The area is the trapezoid sum of the sampled sensor readings. Record stores one row per run (bumper, mass, velocities, rate, area, peak force, contact time); Export to worksheet sends the rows to the Data table below, which can also save them as CSV; export a run's $$F(t)$$ to integrate it yourself.
- Blind hides the area, the momentum change and the peak force, leaving the graph, the velocities and the settings.

**What the demo models.**

- $$J = \int F\,dt = \Delta p = m(v_{\text{after}} - v_{\text{before}})$$
- Model: a frictionless cart; the bumper pushes with $$F = kx$$ while it is compressed, then unloads along a steeper line so the cart leaves with $$e$$ times its speed ($$e$$ is the coefficient of restitution). Each phase is simple harmonic, so $$F(t)$$ is exact. Stiff spring $$k = 4000$$ N/m, $$e = 0.90$$; soft spring $$k = 400$$ N/m, $$e = 0.90$$; clay $$k = 1500$$ N/m, $$e = 0.10$$. The sensor reads the force to 0.01 N at the chosen sample rate.

</details>

## Goal

Integrate a measured force pulse and compare its impulse with a cart's momentum change. Test how bumper stiffness and sensor sampling affect that comparison.

## Background

For a cart of fixed mass,

$$J_{\rm cart}=\int F_{\rm cart}\,dt=m(v_{\rm after}-v_{\rm before}).$$

Choose positive velocity toward the bumper. A rebounding cart has negative final velocity. The virtual force sensor reports the positive force exerted on the sensor, opposite to the force on the cart. Its positive area $$A$$ therefore corresponds to $$J_{\rm cart}=-A$$. For sampled data, calculate area using

$$A\approx\sum_i\frac{F_i+F_{i+1}}{2}(t_{i+1}-t_i).$$

A softer bumper can spread an impulse over more time without changing the momentum change, provided the before/after velocities stay the same. Impulse conservation does not imply kinetic energy conservation.

## Before the lab

1. A cart approaches with positive velocity and rebounds. What is the sign of its momentum change?
2. Why might a force sensor miss a narrow peak at a low sample rate?
3. What must remain fixed when comparing stiff and soft bumpers to test their impulse?

## Safety

On a real cart track, secure the sensor and bumper, catch the returning cart and keep fingers away from the collision point. Do not exceed the sensor's force limit or launch toward people.

## Procedure

**Force area comparison.** Measure cart mass and velocities immediately before and after contact. Record the force pulse at the highest available sample rate, including a baseline before and after the collision. Integrate the pulse numerically and compare signed cart impulse with momentum change. For the virtual main trial use $$m = 0.50\ \text{kg}$$ and approach speed 0.60 m/s.

**Bumper comparison.** Repeat with a soft spring at the same mass and approach speed. Compare area, peak force and contact duration. Then use clay and compare the rebound speed, momentum change and kinetic energy loss. Do not assume clay has the same restitution as either spring.

**Sampling check.** For the stiff spring, compare 200 Hz, 1 kHz and 10 kHz records of the same modeled collision. Integrate each exported file rather than reading the hidden area. Compare the estimates and their residuals from the velocity based momentum change. Do not assume error must decrease monotonically for every rounded data set.

**Using the virtual apparatus.** Compare a stiff spring, a soft spring and clay with a 0.50 kg cart approaching at 0.60 m/s. Begin with a 10 kHz sensor rate and predictions hidden. Record each completed collision and save its force against time data separately. Integrate the force trace yourself before consulting the calculated summary quantities: with predictions hidden, Export to worksheet leaves out the area and peak force, but each run's force against time file is complete. For the stiff spring, repeat the data comparison at 200 Hz and 1 kHz as well as 10 kHz; changing the rate resamples the same modeled collision rather than producing an independent noisy trial. Keep viewing speed distinct from the physical time axis, and preserve the record for each bumper and sampling rate for the final comparison.

## Data

| Bumper | $$m$$ (kg) | $$v_{\rm before}$$ (m/s) | $$v_{\rm after}$$ (m/s) | Rate (Hz) | Area $$A$$ (N s) | $$\Delta p$$ (kg m/s) | Peak (N) | Contact time (s) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

Save every force file, its settings and your integration method. Contact time is the pulse duration, not total approach and return time.

## Analysis

1. Plot $$F_{\rm sensor}$$ against time and integrate by the trapezoid rule. Show at least one interval calculation and your spreadsheet/code formula.
2. Compare $$-A$$ with $$m(v_{\rm after}-v_{\rm before})$$, including signs, units and a fractional residual based on $$\lvert\Delta p\rvert$$.
3. Compare stiff and soft pulse widths and peaks at matched velocities. Explain why equal areas need not mean equal peak forces.
4. For clay, calculate initial and final kinetic energies and compare energy loss with impulse. Explain why these are different quantities.
5. Quantify sample rate effects and discuss baseline, rounding and unresolved peak errors.

## Uncertainty

The virtual force readings round to 0.01 N and velocities to 0.001 m/s, without added random noise. Force CSV times round to 0.00001 s. On a real bench include sensor zero, calibration, mass, velocity measurement and sample spacing. A constant force zero error adds an area proportional to the chosen integration duration, so document the baseline window. Use sampling comparisons to assess integration sensitivity; repeated identical simulated files do not reduce uncertainty.

## Questions

1. Why does the sensor's positive area have the opposite sign from the cart's momentum change?
2. Why can padding reduce peak force while leaving impulse nearly unchanged?
3. Can an inelastic collision conserve momentum while losing kinetic energy?
4. Why does a higher sample rate not remove a force calibration error?

## What to hand in

Prelab answers, settings and force CSVs, labeled pulse plots, reproducible integrations, signed impulse/momentum comparisons, bumper and sampling comparisons, kinetic energy analysis, uncertainty and question answers. Identify simulated data.
