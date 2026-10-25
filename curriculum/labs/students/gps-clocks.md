# GPS Clocks and Relativity
Student laboratory · Physics I and Modern Physics

Textbook: OpenStax *University Physics*, Vol. 1, §13.7, and Vol. 3, §5.3. Access for free at https://openstax.org/details/books/university-physics-volume-1 and https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/gps-clocks.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Places in the demo:** Lab tower, 22.5 m; Space station, about 400 km; GPS, r = 26,560 km; Geostationary, r = 42,164 km. The second clock can also be put in a circular orbit, or at rest on a tower, at any distance r from Earth's center up to 50,000 km.

**Using the demo.**

- One clock stands on the ground at the equator; the second clock is in orbit or on a tower. The ground clock can turn with Earth or stand still.
- The readouts give each clock's speed, how much the second clock gains on the ground clock per day from gravity and from speed, the net gain per day, the fractional rate difference, and how far light travels in one day's gain. Gains below 0.01 μs are shown in picoseconds (1 ps = 10⁻⁶ μs).
- Run the clocks runs simulated time at one hour per second and shows how far the second clock has drifted ahead.
- Record reading stores the second clock's place, r, its speed and the three gains per day in μs/day to six significant figures. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides the rates and the gains per day. Nothing can be recorded while Blind is on.

**What the demo models.**

- Earth is a nonrotating spherical mass with GM = 3.986004 × 10¹⁴ m³/s². Each clock ticks, compared with a clock far away and at rest, at the rate $$\sqrt{1 - 2GM/(rc^2) - v^2/c^2}$$, where v is its speed in a frame that does not turn with Earth (the Schwarzschild field of general relativity, exact for a clock that moves along a circle about Earth's center).
- The ground clock sits on a sphere of radius 6371 km, at rest or carried round at the equator once per sidereal day (465 m/s). Earth's flattening, the shape of the sea level surface, eccentric orbits, and the Sun and Moon are left out. One day is 86,400 s.

</details>

## Goal

Measure how much a clock in orbit gains or loses each day against a clock on the ground, separate the effect of gravity from the effect of speed, and find the orbit where they cancel.

## Background

General relativity says a clock deeper in a gravitational field runs slower (§13.7): a clock higher up gains on one lower down. Special relativity says a moving clock runs slower (Vol. 3, §5.3). Both effects are tiny around Earth, so to an accuracy far better than the demo shows, the fraction by which a clock at distance r and speed v runs fast compared with a ground clock at distance R and speed $$v_g$$ is

$$\frac{\Delta f}{f} \approx \frac{GM}{c^2}\left(\frac{1}{R} - \frac{1}{r}\right) - \frac{v^2 - v_g^2}{2c^2}.$$

The first term is the gravity part and the second the speed part. Multiplying by one day gives the gain per day. In a circular orbit $$v^2 = GM/r$$, so both parts are straight lines against $$1/r$$:

$$\Delta t_\text{gravity} = \frac{GM}{c^2}\left(\frac{1}{R} - \frac{1}{r}\right)t_\text{day}, \qquad \Delta t_\text{speed} = -\frac{1}{2c^2}\left(\frac{GM}{r} - v_g^2\right)t_\text{day}.$$

A GPS receiver finds its distance from each satellite from the light travel time, so a clock error of $$\Delta t$$ is a distance error of $$c\,\Delta t$$.

## Before the lab

1. A clock sits on top of a tall tower. Which runs faster, it or a clock at the foot of the tower? Which effect decides?
2. Low orbits are fast and high orbits are slow. Predict whether the space station's clock gains or loses on the ground, and whether a GPS clock does.
3. From the Background, how should the slope of the speed part against $$1/r$$ compare with the slope of the gravity part?
4. A clock error of 1 μs gives what distance error in a GPS position?

## Safety

No physical apparatus is used.

## Procedure

**Orbit scan.** With the ground clock turning with Earth, put the second clock in a circular orbit and record a reading at the space station, GPS and geostationary radii and at about six more radii spread from 7000 km to 50,000 km. Send the readings to the worksheet.

**Ground clock at rest.** Clear the readings. Stop the ground clock turning and record orbits at about five radii from 7000 km to 20,000 km, including two on either side of the radius where the net gain is zero. Send them to a new copy of the table.

**Clocks on towers.** Clear the readings. With the ground clock turning again, put the second clock at rest on a tower and record readings at 22.5 m and at heights of about 100 km, 1000 km and 10,000 km. Send them to a third copy of the table.

**One day.** Put the second clock in the GPS orbit, set both clocks to zero and run them for one simulated day (24.0 h). Write down how far the second clock is ahead.

## Data

| Reading | Second clock | r (km) | Speed v (km/s) | Gravity part (μs/day) | Speed part (μs/day) | Net gain (μs/day) | 1/r (1/Mm) | v² (km²/s²) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

1 Mm = 1000 km = 10⁶ m. Fill in the last two columns yourself. Keep the three scans in separate copies of the table, and write the one day result in the notes.

## Analysis

1. Fit the gravity part against $$1/r$$ for the orbit scan. From the slope find $$GM/c^2$$ in meters and compare it with half of Earth's Schwarzschild radius $$2GM/c^2$$ shown in the demo. What does the intercept divided by the size of the slope give?
2. Fit the speed part against $$1/r$$ for the same scan. Compare its slope with the gravity part's slope, and explain the ratio from $$v^2 = GM/r$$.
3. Fit the speed part against $$v^2$$. From the slope find the speed of light.
4. Use your two fits to find the radius at which the net gain is zero, for the ground clock turning. Then use the ground clock at rest scan to find it again, and compare with $$r = 3R/2$$. Why does the ground clock's turning move it?
5. For the GPS orbit, how far would a position drift in one day if the clocks were not corrected? Compare your one day run with the net gain per day.
6. For the 22.5 m tower, find the fractional rate difference and compare it with $$gh/c^2$$, which Pound and Rebka measured in 1959 in a 22.5 m tower at Harvard. For the taller towers, why is the speed part not zero?

## Uncertainty

The gains are recorded to six significant figures and the radii are exact settings, so the scatter about your fits is only rounding; use the standard error of each slope. The straight lines in the Background drop terms of order $$(GM/Rc^2)^2$$, about 5 × 10⁻¹⁹, far below what the readouts show. The real GPS system has to allow for what the model leaves out: say which of Earth's flattening, the satellites' slightly eccentric orbits, or the Sun and Moon you expect to matter, and why.

## Questions

1. Why does a clock higher in Earth's gravity run faster?
2. The space station's clock loses time on the ground and a GPS clock gains. Explain in terms of the two effects.
3. GPS satellite clocks are built to tick at 10.22999999543 MHz on the ground so that in orbit they tick at 10.23 MHz as seen from Earth. Find the fractional offset and compare it with the net fractional rate difference from your GPS reading.
4. Earth's Schwarzschild radius is about 9 mm. What would it mean for Earth to be squeezed inside it?

## What to hand in

Prelab answers, the three table copies with their graphs and fits, $$GM/c^2$$ and $$c$$ with uncertainties, the radius where the effects cancel, the one day drift, the tower comparison and answers to the questions. Identify simulated data.
