---
title: Kepler's Laws
level: Intro astronomy (non-majors and majors); intro mechanics (gravitation, angular momentum, energy)
time: 20 to 30 minutes
---
## What students should come away with

- First law: a bound planet moves on an ellipse with the star at one focus, not at the center. A circle is the special case e = 0.
- Second law: the line from the star to the planet sweeps equal areas in equal times. This is conservation of angular momentum, so the planet is fastest at perihelion: v_p/v_a = r_a/r_p = (1 + e)/(1 − e).
- Third law: P² = a³/M, with P in years, a in AU and M in solar masses. The period depends only on the semi major axis and the star's mass, not on the eccentricity or the planet's mass.
- The launch speed decides the shape. At the circular speed √(GM/r) the orbit is a circle; at the escape speed √2 times larger the energy is zero, and faster launches give hyperbolas.

## Before class

Students should know what an ellipse, its foci and its semi major axis are; a string and two pins on a board is a quick reminder. Majors and physics students should know Newton's law of gravity and the idea of angular momentum. The demo opens on **Mercury** and plays. Turn on **Projector** for a large room. The arrow tip snaps to the gold circular speed circle and the red escape speed circle; hold **Shift** to place it freely. Focus the view and press **F** to fit the orbit. Under **Arrow keys move** you choose what the arrow keys move: **Arrow tip**, **Launch point**, **View** or **Ruler point** (**M** switches, **+** and **−** zoom).

For a lab, **Measure** has **Start timer** / **Stop timer**, **Zero timer** (simulated time) and **Ruler** (click two points in the view). **Readings** has **Capture reading**, **Export to worksheet** (sends the rows to the student worksheet's Data table) and **Clear**. **Lab** has **Blind: hide predictions and answers**, **Chart shows** (**Third law** or **Your readings**, T² against a³ with a fit through the origin and a residual strip), **Reduce motion** and **Show data table**.

## Running it in class

1. **Circular orbit.** The tip sits on the gold circle and the two foci merge at the star. Ask Q1, then focus the view and press the up arrow six times (+3.0 km/s) to launch at 1.1 times the circular speed. Students see the orbit grow outward from the launch point, which becomes perihelion.
2. **Earth**, then **Mars**, then **Mercury.** The empty focus moves away from the star as e grows: 0.017, 0.093, 0.206. With Mercury, watch the **Sweep wedges**: long and thin near aphelion, short and wide near perihelion, but the area readouts agree. Compare **Perihelion speed** and **Aphelion speed** (Q2).
3. **Halley's comet.** Launched at aphelion, 35 AU out, at 0.914 km/s. Play it: most of the 75 years are spent far out, and perihelion passes in a few months. Point at the dot on the **third law chart**: it falls on the same line as the planets.
4. **Star mass.** With **Keep the orbit's shape when M changes** on, raise the star mass to 2 M☉. The orbit stays the same; only the period changes (Q3). Return the slider to 1.00 M☉.
5. **Escape.** Launch at 1.2 times the escape speed: positive energy, a hyperbola, and a final speed v∞ (Q5).
6. **Race two planets.** Load **Circular orbit**, press **Keep as second planet**, then drag the arrow tip around the gold circle to point the launch in a new direction. Ask for a prediction, then play (Q6).

## Questions

**Q1.** Predict: a planet on a circular orbit at 1 AU gets a sudden push forward at one point, so it now moves at 1.1 times the circular speed. Does it move farther from the star or closer? Where on the new orbit is the point where it got the push? Will its period be longer or shorter than a year?

**Q2.** Mercury's distance from the Sun ranges from 0.3075 AU to 0.4667 AU. Use the second law, in the form r_p v_p = r_a v_a, to find the ratio of its perihelion and aphelion speeds. Check against the readouts.

**Q3.** Halley's comet has a semi major axis of 17.8 AU and e = 0.967. Find its period and its aphelion distance. If the same orbit went around a star of 2 M☉, what would the period be? Check both with the demo.

**Q4.** Explain why a planet must speed up as it falls toward perihelion and slow down as it climbs to aphelion. Give two explanations: one from the equal areas law, and one from energy.

**Q5.** At 1 AU from the Sun the circular speed is 29.8 km/s. Find the escape speed there. In the **Escape** preset the planet is launched at 1.2 times the escape speed. Use energy conservation to find its speed far from the Sun, and compare with the **Speed far away v∞** readout.

**Q6.** Two planets start at the same point, 1 AU from the star, with the same speed, 29.8 km/s, but one moves sideways (a circle) and the other is aimed partly outward. Predict which one returns to the starting point first. Then race them with **Keep as second planet** and explain the result with the third law.

## Common misconceptions

- **"The Sun is at the center of the ellipse."** It sits at one focus. The other focus is empty. For Earth they are so close together that the orbit looks like a circle centered on the Sun.
- **"Planets are closest to the Sun in summer."** Earth's eccentricity is small, and perihelion comes in early January. Distance does not set the seasons.
- **"A heavier planet orbits more slowly."** The planet's mass cancels out of the motion. Only the star's mass enters the third law.
- **"Planetary orbits are very elongated."** Most planets have small e; drawings in textbooks often exaggerate them. Comets are the elongated ones.
- **"To escape you have to point straight away from the star."** Escape depends on speed, not direction: any launch at or above √2 times the circular speed escapes, unless it hits the star.

## Physics behind the demo

- Units: AU, years and solar masses, so GM = 4π² M AU³/yr². Speeds are shown in km/s, with 1 AU/yr = 4.74 km/s.
- The star is fixed and the planet's mass is neglected, so P² = a³/M holds exactly. Planets do not pull on each other, and the star does not move around the common center of mass.
- The motion is integrated with velocity Verlet, with a time step that shrinks near the star. The **Energy drift** readout shows how well the integrator keeps the energy constant. The predicted orbit path, a and e come from the launch position and velocity through the energy ε = v²/2 − GM/r and the angular momentum h = |r × v|.
- The wedge areas are summed from the integrated path, not taken from a formula, and compared with ½·h·Δt.
- A path that comes within 0.005 AU (about one solar radius) of the star counts as a hit.

## Going further

- Homework: Newton's form of the third law, P² = 4π²a³/(G(M + m)), lets you weigh a star from a planet's orbit. Use it for an exoplanet with a = 0.05 AU and P = 4.2 days.
- History: Kepler found the first two laws from Tycho Brahe's observations of Mars and published them in 1609; the third law followed in 1619.
