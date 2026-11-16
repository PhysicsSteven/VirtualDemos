# Kepler's Laws from Earth to Pluto
Student worksheet · Astro 2203

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/kepler-orbits.html?ws=intro-kepler)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Earth; Mars; Mercury; Halley's comet; Vesta; Ceres; Apophis; Pluto; Binary star; Circular orbit; Escape; Bound and unbound; Sandbox.

**Using the demo.**

- The view shows an object orbiting the Sun, drawn to scale, with its path traced behind it. Each setup starts the object on its real orbit: the planets, Pluto and the comet from standard values, and Vesta, Ceres and Apophis from their orbits in the JPL Small Body Database.
- The timer runs on simulated time, so it only counts while the demo is playing. Reset puts the object back where it started, with the clock at zero.
- With Ruler on, click or drag in the view to place points 1 and 2. The ruler gives each point's distance from the Sun and the distance between the points. Zoom in (scroll, or the + and − keys) to place a point precisely.
- Blind hides the demo's own values of the orbit's size, shape and period, so you measure them yourself. The timer and the ruler stay.
- Record reading stores the timer and both ruler distances with the name of the setup. Export to worksheet sends the readings to the Data table below.
- The Sun is held fixed and each object feels only the Sun's gravity, so the planets do not pull on each other.
- The Sandbox is for exploring on your own: drag stars, planets and moons from the tray into space. Unlike the other setups, nothing is held fixed: every body pulls on every other. Each starts on a circular orbit around the body that pulls on it hardest; drag the tip of its arrow to change its velocity, and watch the energy of the whole system as it runs. The Sandbox records no readings.

</details>

## Goal

Measure the orbits of planets, asteroids and a dwarf planet, and test Kepler's three laws of planetary motion with them.

## Background

Johannes Kepler worked out three rules for the planets in the early 1600s from Tycho Brahe's careful naked eye measurements of where the planets appeared in the sky.

**First law.** Each planet moves on an ellipse with the Sun at one focus, not at the center. The point of the orbit closest to the Sun is the **perihelion** and the farthest is the **aphelion**. Half the long axis of the ellipse is the **semi major axis** $$a$$, the average of the perihelion and aphelion distances:

$$a = \frac{r_p + r_a}{2}.$$

How stretched the ellipse is shows in its **eccentricity** $$e$$, which is 0 for a circle and close to 1 for a long thin ellipse:

$$e = \frac{r_a - r_p}{r_a + r_p}.$$

**Second law.** A line from the Sun to the planet sweeps out equal areas in equal times, so a planet moves fastest at perihelion and slowest at aphelion.

**Third law.** The square of the period is proportional to the cube of the semi major axis. With the period $$T$$ in years and $$a$$ in AU (1 AU is Earth's average distance from the Sun, about 150 million km), for anything orbiting the Sun

$$T^2 = a^3.$$

## Before the lab

1. Earth has $$a = 1$$ AU and $$T = 1$$ year. What period does the third law predict for an object with $$a = 4$$ AU?
2. An asteroid comes within 2 AU of the Sun at perihelion and goes out to 3 AU at aphelion. Find its semi major axis and its eccentricity.
3. Where on its orbit does a planet move fastest, and which of Kepler's laws tells you so?
4. Earth's orbit is an ellipse. Before you measure it, guess how much farther from the Sun Earth is at aphelion than at perihelion: about 3%, about 30%, or about twice as far? What is your guess based on?

## Safety

No hazards in the virtual lab.

## Procedure

**Set up.** Tick Blind: hide predictions and answers (in the Lab section), so the demo's own answers are hidden, and tick Ruler (in the Measure section).

**Measure each orbit.** Do the following for Earth, Mars, Vesta, Ceres and Pluto, in that order.

- Choose the setup, press Pause, then press Reset.
- Place ruler point 1 on the perihelion, the point of the orbit closest to the Sun, and point 2 on the aphelion, the farthest point. Each of these setups starts the object at its perihelion. With Ruler ticked, a click places the next point and dragging a point moves it; the readouts Point 1 to the star and Point 2 to the star give the two distances. To zoom in on one end: untick Ruler, drag empty space (away from the object and its arrow) to bring that end to the middle of the view, scroll or press + to zoom, then tick Ruler again and place or drag the point exactly onto the path. Fit shows the whole orbit again.
- Time one full orbit: press Zero timer, then Start timer, then Play. Press Pause when the object is back where it started, then Stop timer. The Timer readout gives the period in years.
- Press Record reading.

Press Export to worksheet to send all five readings. They fill the perihelion, aphelion and period columns; you fill the other columns in the Analysis.

## Data

| Object | Perihelion distance $$r_p$$ (AU) | Aphelion distance $$r_a$$ (AU) | Period $$T$$ (yr) | Semi major axis $$a$$ (AU) | Eccentricity $$e$$ | $$a^3$$ (AU³) | $$T^2$$ (yr²) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

## Analysis

1. Use your perihelion and aphelion distances to find $$a$$ and $$e$$ for each object, and fill in those columns.
2. Which object has the most eccentric orbit, and which the most nearly circular? Rank the five objects from smallest $$e$$ to largest.
3. Fill in the $$a^3$$ and $$T^2$$ columns and graph $$T^2$$ (vertical axis) against $$a^3$$ (horizontal axis). Pluto's point is so far out that the other four crowd together near zero, so also look at the graph with Log scales on, which spreads all five out. The third law says the points fall on a straight line through the origin with a slope of 1. What slope and intercept does your graph give?
4. Vesta and Ceres both orbit in the asteroid belt between Mars and Jupiter. Which one takes longer to go around the Sun, by how much, and why?
5. Neptune orbits the Sun at an average distance of 30.07 AU. Compare that with Pluto's perihelion distance. What does this tell you about the two orbits?
6. Untick Blind, choose Mars and then Pluto, and read the demo's Semi major axis a, Eccentricity e and Period P readouts for each. By what percentage does each of your values differ from the demo's?

## Uncertainty

Each ruler point is only as good as your placement, and the timer depends on when you paused. Which of your measurements do you think is least certain: a distance at the near end of a small orbit, a distance at the far end of a big one, or a period? How would zooming in, or timing several orbits and dividing, change it?

## Questions

1. From your Earth reading, how much farther from the Sun is the aphelion than the perihelion, as a percentage of the perihelion distance? Check it against your guess in Before the lab 4. Using your eccentricities, explain why Earth's orbit drawn to scale looks like a circle. Kepler found the first law by studying the orbit of Mars: explain why Mars showed that orbits are ellipses more clearly than Earth's orbit did.
2. A spacecraft going to Mars can coast on an orbit around the Sun whose perihelion is at Earth's orbit (1.00 AU) and whose aphelion is at Mars's orbit (1.52 AU). Find the semi major axis and period of that orbit. How many days does the trip from Earth to Mars, half of one orbit, take?
3. Jupiter's moons follow Kepler's laws around Jupiter. Would $$T^2 = a^3$$, with $$T$$ in years and $$a$$ in AU, give the right periods for them? Explain why or why not.

## What to hand in

Prelab answers, the completed Data table and graph, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.
