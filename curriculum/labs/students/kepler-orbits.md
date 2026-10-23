# Measuring Orbits and Kepler's Third Law
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§13.1 and 13.3–13.5. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/kepler-orbits.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Earth; Mars; Mercury; Halley's comet; Circular orbit; Escape.

**Using the demo.**

- Drag the arrow tip to set speed and direction. Drag the hollow marker to move the launch point. The tip snaps to the gold circular and red escape circles; hold <kbd>Shift</kbd> to place it freely.
- Focus the orbit view, then use the arrow keys (<kbd>Shift</kbd> for small steps). <kbd>M</kbd> switches what they move, <kbd>+</kbd> and <kbd>−</kbd> zoom, <kbd>1</kbd> and <kbd>2</kbd> pick a ruler point, <kbd>F</kbd> fits the view, <kbd>Space</kbd> plays or pauses.
- The timer runs on simulated time, so it stops when the planet is paused. Reset puts the planet back at the launch point at t = 0. With Ruler on, click or drag in the view to place points 1 and 2 (the launch arrow is locked meanwhile). Zoom in for precise placement.
- Capture stores the timer and the ruler as displayed, with the star mass and the launch. The a column starts as half the ruler distance, which is the semi major axis when the points sit on perihelion and aphelion; edit it if you measured another way. The fit is T² = slope·a³ through the origin, using the rows with the present star mass.
- Each wedge is swept in the same time Δt. Areas (AU²) are summed from the integrated path, not from a formula; compare them with ½·h·Δt, where h = \|r × v\|.
- The star is held fixed and the planet's mass is neglected, so P² = a³/M exactly (a in AU, P in years, M in solar masses). Two planets do not pull on each other. The motion is integrated with velocity Verlet using a time symmetric step that shrinks near the star. A planet that comes within 0.005 AU (one solar radius) hits the star.

</details>

## Goal

Measure orbital size and period, infer the central mass and test how orbital speed changes around an ellipse.

## Background

For a light body orbiting central mass $$M$$ (§13.5),

$$T^2=\frac{4\pi^2}{GM}a^3.$$

Here $$a$$ is the semimajor axis, not the instantaneous distance from the star. For a bound orbit (§§13.3–13.4),

$$\frac{E}{m}=-\frac{GM}{2a},\qquad v^2=GM\left(\frac{2}{r}-\frac1a\right).$$

Angular-momentum conservation gives equal swept areas in equal times and faster motion near periapsis.

## Before the lab

1. How should the period change if $$a$$ doubles at fixed $$M$$?
2. Why is the star generally at a focus rather than the center of an ellipse?
3. What is the expected slope of $$T^2$$ against $$a^3$$, and how does it determine $$M$$?

## Safety

For an analogous real rotating apparatus, follow the instructor's speed limits and keep clear of moving masses. No physical apparatus is required for the orbital simulation.

## Procedure

**Third-law scan.** Make five distinct bound orbits around the same central mass. For each, measure the full major-axis length and time one complete revolution between passages of the same reference point in the same direction. Divide the measured major axis by two to obtain $$a$$.

**Eccentric orbit.** Choose one clear ellipse. Compare distances and speeds at periapsis and apoapsis, and compare areas swept in equal time intervals.

**Central mass.** Repeat a shorter size-period scan at a different $$M$$. Compare the fitted slopes and inferred mass ratio.

**Using the virtual apparatus.** Enable **Blind: hide predictions and answers**. Begin with **Earth**, **Mars**, **Mercury** and **Circular orbit**, then drag the launch point or velocity arrow to obtain additional distinct bound orbits. Use **Reset** between runs. Enable **Ruler**, placing its endpoints at opposite ends of the major axis; **Ruler point** lets the arrow keys move a selected endpoint. Use **Zero timer**, **Start timer** and **Stop timer** for one complete revolution. Press **Capture reading** and **Export to worksheet**. Its $$a$$ value is half your ruler distance, not a theoretical orbital element. Use **Third law** and **Your readings** for the comparison. Change **Star mass M** only between scans, recording whether **Keep the orbit's shape when M changes** is selected. Reveal **Foci and axis** and **Sweep wedges** after making your own measurements.

## Data

| Orbit | $$M$$ (solar masses) | Major-axis ruler distance (AU) | $$a$$ (AU) | $$T$$ (yr) | $$a^3$$ (AU³) | $$T^2$$ (yr²) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Add all orbits and keep the two central-mass scans separate. Record your reference crossing and timing method.

## Analysis

1. Fit $$T^2$$ against $$a^3$$. In the simulation's AU, year and solar-mass units, infer $$M = 1/\text{slope}$$.
2. Inspect intercept and residuals for timing or ruler-placement bias. Compare results using near-circular and eccentric orbits.
3. For the eccentric orbit, test $$r_p v_p = r_a v_a$$ and compare with the energy relation.
4. Compare fitted slopes at the two central masses. Explain why escape trajectories do not belong on this period plot.

## Uncertainty

Use ruler placement and time-crossing resolution. The fractional errors in $$a^3$$ and $$T^2$$ are approximately $$3\,\delta a/a$$ and $$2\,\delta T/T$$. Eccentric orbits make major-axis placement and timing near periapsis harder. Do not use the star-to-planet separation as a substitute for $$a$$, and do not count several revolutions as one.

## Questions

1. Why can an ellipse have the same period as a circle with the same $$a$$?
2. Why does the body speed up near the star without gaining total mechanical energy?
3. Why does increasing $$M$$ shorten the period at fixed $$a$$?
4. Which part of your measurement is most sensitive to eccentricity?

## What to hand in

Prelab answers, settings and CSV, both third-law fits, inferred masses with uncertainty, the eccentric-orbit comparison and answers to the questions. Identify simulated data.
