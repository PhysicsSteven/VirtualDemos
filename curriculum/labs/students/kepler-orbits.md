# Kepler's Third Law
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§13.1 and 13.3–13.5. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/kepler-orbits.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Earth; Mars; Mercury; Halley's comet; Vesta; Ceres; Apophis; Pluto; Circular orbit; Escape; Bound and unbound; Sandbox.

**Using the demo.**

- Drag the arrow tip to set speed and direction. Drag the hollow marker to move the launch point. The tip snaps to the gold circular and red escape circles; hold <kbd>Shift</kbd> to place it freely.
- Focus the orbit view, then use the arrow keys (<kbd>Shift</kbd> for small steps). <kbd>M</kbd> switches what they move, <kbd>+</kbd> and <kbd>−</kbd> zoom, <kbd>1</kbd> and <kbd>2</kbd> pick a ruler point, <kbd>F</kbd> fits the view, <kbd>Space</kbd> plays or pauses.
- The timer runs on simulated time, so it stops when the planet is paused. Reset puts the planet back at the launch point at $$t = 0$$. With Ruler on, click or drag in the view to place points 1 and 2 (the launch arrow is locked meanwhile). Zoom in for precise placement.
- Record reading stores the timer and the ruler as displayed, with the star mass and the launch. The a column starts as half the ruler distance, which is the semi major axis when the points sit on perihelion and aphelion; edit it if you measured another way. The fit is a least squares line $$T^2 = \text{slope}\times a^3 + \text{intercept}$$, using the rows with the present star mass; the intercept should come out near zero.
- Each wedge is swept in the same time $$\Delta t$$. Areas (AU²) are summed from the integrated path, not from a formula; compare them with $$\tfrac{1}{2}h\,\Delta t$$, where $$h = \lvert\mathbf{r}\times\mathbf{v}\rvert$$.
- The star is held fixed and the planet's mass is neglected, so $$P^2 = a^3/M$$ exactly ($$a$$ in AU, $$P$$ in years, $$M$$ in solar masses). Two planets do not pull on each other. The motion is integrated with velocity Verlet using a time symmetric step that shrinks near the star. A planet that comes within 0.005 AU (one solar radius) hits the star.
- The Sandbox is for exploring on your own: drag stars, planets and moons from the tray into space. Unlike the other setups, nothing is held fixed: every body pulls on every other. Each starts on a circular orbit around the body that pulls on it hardest; drag the tip of its arrow to change its velocity, and watch the energy of the whole system as it runs. The Sandbox records no readings.

</details>

## Goal

Measure orbital size and period, infer the central mass and test how orbital speed changes around an ellipse.

## Background

For a light body orbiting central mass $$M$$ (§13.5),

$$T^2=\frac{4\pi^2}{GM}a^3.$$

Here $$a$$ is the semi major axis, not the instantaneous distance from the star. For a bound orbit (§§13.3–13.4),

$$\frac{E}{m}=-\frac{GM}{2a},\qquad v^2=GM\left(\frac{2}{r}-\frac1a\right).$$

Angular momentum conservation gives equal swept areas in equal times and faster motion near periapsis.

## Before the lab

1. How should the period change if $$a$$ doubles at fixed $$M$$?
2. Why is the star generally at a focus rather than the center of an ellipse?
3. What is the expected slope of $$T^2$$ against $$a^3$$, and how does it determine $$M$$?
4. Mercury's distance from the Sun runs from about 0.31 AU at its nearest point to about 0.47 AU at its farthest. How should its speed at the nearest point compare with its speed at the farthest: the same, larger or smaller? If they differ, by roughly what factor?

## Safety

For an analogous real rotating apparatus, follow the instructor's speed limits and keep clear of moving masses. No physical apparatus is required for the orbital simulation.

## Procedure

**Using the virtual apparatus.** Work with predictions and answers hidden: check **Blind: hide predictions and answers** (under Lab). The foci and axis and the swept wedges are drawn when the demo opens: uncheck **Foci and axis** (under Layers) and **Sweep wedges** (under Second law: equal areas) until your own measurements are done. For each orbit:

1. Set up the orbit (a setup button under Orbits, or drag the arrow tip to change the launch).
2. Ruler: check **Ruler** (under Measure) and click in the view to place point 1 and point 2 at opposite ends of the orbit, its nearest and farthest points from the star; zoom in (+) to place them precisely. **Point 1 to point 2** is the full major axis. Uncheck Ruler.
3. Timing: press **Pause**, then **Reset** (the planet goes back to the launch point), **Zero timer** and **Start timer**, then **Play**. When the planet comes back to the launch point, press **Pause**; the timer runs on simulated time, so it stops with the planet. The **Time speed** slider (under Time and star) opens at 0.03 yr/s, so a 1 year orbit takes about 33 s; for an orbit longer than about 2 years (such as Halley's comet or Pluto), raise Time speed first so one revolution takes under a minute. Slow it near the end if you overshoot.
4. Press **Record reading**. The $$a$$ recorded with each reading is half your ruler distance, not the demo's orbital element.

**Third law scan.** Make four distinct bound orbits around the same central mass: start from the **Earth**, **Mars** and **Mercury** setups, then change the launch (drag the arrow tip) to make a fourth bound orbit that differs clearly from these. For each, measure the full major axis length and time one complete revolution between passages of the same reference point (the launch point) in the same direction, as above. Press **Export to worksheet**, then **Clear**, so each scan gets its own copy of the Data table.

**Eccentric orbit.** Press the **Mercury** setup, a clear ellipse. Pause the planet as close as you can to its nearest and to its farthest point and write **Distance now r** and **Speed now** at each in the table's notes. Then check **Sweep wedges** and compare the areas swept in equal time intervals (the areas listed under Second law: equal areas).

**Central mass.** Check **Keep the orbit's shape when M changes**, so each orbit keeps its size and only the period changes. Change the **Star mass M** slider (under Time and star) to a new value, for example 2, only between scans. Then retime three of your orbits from the first scan at the new $$M$$ (the major axis keeps its size, so reuse your ruler distances and skip the ruler), and export them to a new copy of the table. Compare the fitted slopes and inferred mass ratio.

## Data

| Orbit | $$M$$ (solar masses) | Major axis ruler distance (AU) | $$a$$ (AU) | $$T$$ (yr) | $$a^3$$ (AU³) | $$T^2$$ (yr²) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Add all orbits and keep the two central mass scans separate. Record your reference crossing and timing method.

## Analysis

1. Fit $$T^2$$ against $$a^3$$. In the simulation's AU, year and solar mass units, infer $$M = 1/\text{slope}$$.
2. Inspect intercept and residuals for timing or ruler placement bias.
3. For the eccentric orbit, test $$r_p v_p = r_a v_a$$.
4. Compare fitted slopes at the two central masses. Explain why escape trajectories do not belong on this period plot.

## Uncertainty

Use ruler placement and time crossing resolution. The fractional errors in $$a^3$$ and $$T^2$$ are approximately $$3\,\delta a/a$$ and $$2\,\delta T/T$$. Eccentric orbits make major axis placement and timing near periapsis harder. Do not use the star to planet separation as a substitute for $$a$$, and do not count several revolutions as one.

## Questions

1. Why can an ellipse have the same period as a circle with the same $$a$$?
2. At Mercury's nearest and farthest points, what did **Distance now r** and **Speed now** read (from your table notes)? How do the two speeds compare with your guess in Before the lab 4, factor included? Use the equal swept areas to explain the ratio of the two speeds, and $$E = \frac12mv^2 - GMm/r$$ to explain why the planet speeds up near the star without gaining total mechanical energy.

## What to hand in

Prelab answers, settings and CSV, both third law fits, inferred masses with uncertainty, the eccentric orbit comparison and answers to the questions. Identify simulated data.
