# Impulse and Momentum
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§9.1–9.2. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/impulse.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Using the demo.**

- The motion detector gives the velocity before ($$v_1$$) and after ($$v_2$$) the bounce, to 0.001 m/s, positive toward the sensor. The area is the trapezoid sum of the sampled sensor readings. Record stores one row per run (bumper, mass, velocities, rate, area, peak force, contact time); Export to worksheet sends the rows to the Data table below, which can also save them as CSV; export a run's $$F(t)$$ to find the area yourself.
- Blind hides the area, the momentum change and the peak force, leaving the graph, the velocities and the settings.

**What the demo models.**

- $$J$$ = area under the $$F(t)$$ graph $$= \Delta p = m(v_{\text{after}} - v_{\text{before}})$$
- Model: a frictionless cart; the bumper pushes with $$F = kx$$ while it is compressed, then unloads along a steeper line so the cart leaves with $$e$$ times its speed ($$e$$ is the coefficient of restitution). Each phase is simple harmonic, so $$F(t)$$ is exact. Stiff spring $$k = 4000$$ N/m, $$e = 0.90$$; soft spring $$k = 400$$ N/m, $$e = 0.90$$; clay $$k = 1500$$ N/m, $$e = 0.10$$. The sensor reads the force to 0.01 N at the chosen sample rate.

</details>

## Goal

Find the area under a measured force pulse and compare this impulse with a cart's momentum change. Test how bumper stiffness and sensor sampling affect that comparison.

## Background

A steady force $$F$$ acting for a time $$\Delta t$$ gives an impulse $$J = F\,\Delta t$$, the area of a rectangle on a graph of force against time. A force that changes, like a bumper's push, gives an impulse equal to the area under its force against time graph: split the time into short intervals, and each one adds a thin strip of area. The impulse equals the change in the cart's momentum. For a cart of fixed mass,

$$J_{\rm cart}=\text{area under }F_{\rm cart}(t)=m(v_{\rm after}-v_{\rm before}).$$

Choose positive velocity toward the bumper. A rebounding cart has negative final velocity. The virtual force sensor reports the positive force exerted on the sensor, opposite to the force on the cart. Its positive area $$A$$ therefore corresponds to $$J_{\rm cart}=-A$$. For sampled data, treat each pair of neighboring readings as a trapezoid and add up their areas (a spreadsheet column and its sum):

$$A\approx\sum_i\frac{F_i+F_{i+1}}{2}(t_{i+1}-t_i).$$

Counting squares under a printed graph gives the same area more roughly.

A softer bumper can spread an impulse over more time without changing the momentum change, provided the before/after velocities stay the same. Impulse conservation does not imply kinetic energy conservation.

## Before the lab

1. A cart approaches with positive velocity and rebounds. What is the sign of its momentum change?
2. Why might a force sensor miss a narrow peak at a low sample rate?
3. What must remain fixed when comparing stiff and soft bumpers to test their impulse?
4. The same 0.50 kg cart hits the Stiff spring, then the Soft spring, at 0.60 m/s, and bounces back from each. Is the soft spring's impulse on the cart smaller than, the same as or larger than the stiff spring's?

## Safety

On a real cart track, secure the sensor and bumper, catch the returning cart and keep fingers away from the collision point. Do not exceed the sensor's force limit or launch toward people.

## Procedure

**Using the virtual apparatus.** Set **Cart mass m** to 0.50 kg and **Launch speed** to 0.60 m/s, and check **Blind: hide predictions and answers** (under Lab), so the area, momentum change and peak force stay hidden until you have found the area yourself; with Blind on, Export to worksheet leaves out the area and peak force, but each run's force against time file is complete. For each run: press the bumper button (under Bumper) and the rate button (under **Sensor sample rate**), press **Launch the cart**, wait for the bounce to finish (Velocity after v₂ and Contact time appear in the readouts), then press **Record reading** and **Export this run's F(t) CSV**, and press **Put it back** before the next run. The real time and ×1/20 buttons change only how fast the picture plays, not the time axis of the data. Five runs in all, listed below.

**Force area comparison.** Run 1: **Stiff spring** at **10 kHz**. The CSV holds the force pulse with a baseline before and after the collision. Find the area under the pulse by adding trapezoids (Analysis 1) and compare the signed cart impulse with the momentum change from the recorded $$v_{\rm before}$$ and $$v_{\rm after}$$.

**Bumper comparison.** Run 2: **Soft spring** at 10 kHz, same mass and launch speed. Compare area, peak force and contact time with run 1; once Analysis 1 gives you the two areas, write them, with the peak forces and contact times, in your answer to Question 1. Run 3: **Clay** at 10 kHz; compare the rebound speed, momentum change and kinetic energy loss. Do not assume clay has the same restitution as either spring.

**Sampling check.** Runs 4 and 5: press **Stiff spring**, launch once at 10 kHz, and after the bounce press **1 kHz**, then **200 Hz**; each press resamples the same modeled collision (not a new noisy trial). Record a reading and export the F(t) CSV at each rate. Find the area from each exported file rather than reading the hidden area, and compare each estimate and its residual from the velocity based momentum change. Do not assume error must decrease monotonically for every rounded data set.

When all five runs are recorded, press **Export to worksheet** to send the five rows to the Data table.

## Data

| Bumper | $$m$$ (kg) | $$v_{\rm before}$$ (m/s) | $$v_{\rm after}$$ (m/s) | Rate (Hz) | Area $$A$$ (N s) | $$\Delta p$$ (kg m/s) | Peak (N) | Contact time (s) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

Save every force file, its settings and how you found the area. Contact time is the pulse duration, not total approach and return time.

## Analysis

1. Plot $$F_{\rm sensor}$$ against time and find the area under it by adding trapezoids. Show at least one trapezoid calculation and your spreadsheet formula.
2. Compare $$-A$$ with $$m(v_{\rm after}-v_{\rm before})$$, including signs, units and a fractional residual based on $$\lvert\Delta p\rvert$$.
3. Compare stiff and soft pulse widths and peaks at matched velocities. Explain why equal areas need not mean equal peak forces.
4. For clay, calculate initial and final kinetic energies and compare energy loss with impulse. Explain why these are different quantities.
5. Quantify sample rate effects and discuss baseline, rounding and unresolved peak errors.

## Uncertainty

The virtual force readings round to 0.01 N and velocities to 0.001 m/s, without added random noise. Force CSV times round to 0.00001 s. On a real bench include sensor zero, calibration, mass, velocity measurement and sample spacing. A constant force zero error adds an area proportional to the length of the time window you add over, so document the baseline window. Use sampling comparisons to see how sensitive the area is to the sampling; repeated identical simulated files do not reduce uncertainty.

## Questions

1. Did the soft spring change the impulse, as Before the lab 4 asked? Give the areas, peak forces and contact times for runs 1 and 2, and use $$J_{\rm cart} = m(v_{\rm after} - v_{\rm before})$$ to explain why padding can reduce the peak force while leaving the impulse nearly unchanged.
2. Can an inelastic collision conserve momentum while losing kinetic energy?
3. Why does a higher sample rate not remove a force calibration error?

## With calculus

For courses that use calculus. This section is not counted in the 75 minutes; do it when your instructor assigns it.

1. While the spring is being compressed, the cart moves in simple harmonic motion: from the moment of contact the compression is $$x = (v_1/\omega)\sin(\omega t)$$ with $$\omega = \sqrt{k/m}$$. Differentiate it to check that the cart meets the spring at $$v_1$$. Then integrate $$F = kx$$ from $$t = 0$$ to the greatest compression, $$t = \pi/(2\omega)$$, and show that this impulse is $$mv_1$$, exactly enough to stop the cart. The unloading gives $$m\,e\,v_1$$ the same way; compare the total with your run 1 area.
2. Use $$dF/dt = k\,dx/dt$$ to show that the force is largest at the greatest compression and that the peak force is $$v_1\sqrt{km}$$. Work it out for the Stiff spring ($$k$$ = 4000 N/m) and the Soft spring ($$k$$ = 400 N/m) and compare with your peak readings for runs 1 and 2.
3. At the moment of contact $$x = 0$$ and $$dx/dt = v_1$$, so $$dF/dt = kv_1$$. From your run 1 force file, take the first nonzero reading and the reading 1 ms (ten samples) later, estimate $$dF/dt$$ as their difference over the time between them, and find $$k$$. Compare with 4000 N/m.

## What to hand in

Prelab answers, settings and force CSVs, labeled pulse plots, reproducible area sums, signed impulse/momentum comparisons, bumper and sampling comparisons, kinetic energy analysis, uncertainty and question answers (and With calculus answers, if assigned). Identify simulated data.
