# Orbital Resonances
Student worksheet · Astro 2203

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/resonances.html?ws=intro-resonances)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Asteroid belt: 3:1 resonance; 5:2 resonance; 2:1 resonance; Between the gaps; Hildas at 3:2; Whole belt. Kuiper belt: Pluto; Pluto's orbit, bad timing; Plutinos; Classical belt; Whole Kuiper belt. Finding Neptune: Uranus alone; Le Verrier's planet; The real Neptune; Hunt for it yourself.

**Using the demo.**

- There are three scenes. Asteroid belt follows asteroids pulled by the Sun and Jupiter; Kuiper belt follows icy bodies beyond Neptune pulled by the Sun and Neptune; Finding Neptune replays the sightings of Uranus from 1690 to 1846.
- In the first two scenes the large view shows the orbits, in 3D or flat from above. Each time the planet passes the body, a yellow dot marks the place on the body's orbit where it happened. "Turns with the planet" turns the picture with the planet, so the planet stays still and the pattern of the passes is easy to see.
- The card on the picture sets the body's starting distance from the Sun $$a$$ in astronomical units (AU; 1 AU is Earth's average distance from the Sun), the starting eccentricity $$e$$ (0 is a circle; the bigger $$e$$, the more stretched the orbit) and where it starts compared with the planet. It also shows the period ratio: how many times the body goes round for each turn of the planet, or the other way round beyond Neptune.
- Below the view, a bar chart shows the real numbers of known asteroids (or Kuiper belt objects) at each distance from the Sun, counted from the JPL Small Body Database, with the resonances marked. Each simulated body adds a dot at its starting distance, as high as the largest eccentricity it has reached. Click a bar to start a body at that distance. A second chart follows the body's eccentricity (asteroid belt) or its distance from Neptune (Kuiper belt) over time.
- An asteroid whose orbit stretches until it reaches in to Mars's orbit is taken out of the run, since a close pass by Mars or Earth would soon throw it off its path. A body that comes within the planet's own sphere of control (its Hill radius) is thrown out too.
- In Finding Neptune, the chart shows how far Uranus was seen from where the best possible orbit puts it, in arcseconds (″; 3600″ make one degree). Planet X is an extra planet you can add; its distance, mass and position change the fit right away.
- The real gaps in the asteroid belt took millions of years to clear, much too long to run here. The demo runs a few thousand years and shows the kicks that clear them.
- Record reading stores the setup, the starting distance, the period ratio, the time run and what happened. Export to worksheet sends the readings to the matching Data table below; Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Find out why the asteroid belt has empty lanes at certain distances from the Sun, why Pluto never hits Neptune even though their orbits cross, and how Neptune was found from its pull on Uranus before anyone saw it.

## Background

**Kepler's third law.** A planet farther from the Sun takes longer to go round. Measured in years and AU, the period $$P$$ and the average distance $$a$$ follow $$P^2 = a^3$$. Jupiter, at 5.20 AU, takes 11.86 years.

**Resonance.** An asteroid at 2.50 AU takes 3.95 years to go round, exactly one third of Jupiter's 11.86. Every time Jupiter goes round once, the asteroid goes round three times, so it passes Jupiter twice per Jupiter orbit, at two places on opposite sides of the Sun, and then at the same two places again and again. The tugs from those passes repeat the same pattern every time and so add up, like pushes on a swing given at the same points of every swing. The tugs add up, and the orbit grows more and more stretched. This is called a 3:1 resonance. An asteroid at most other distances meets Jupiter at a different place each time, and the tugs cancel out.

**The Kirkwood gaps.** In 1866 Daniel Kirkwood noticed that almost no asteroids have periods that are simple fractions of Jupiter's. Today more than a million asteroids are known, and the gaps are plain to see in a chart of their distances.

**The outer solar system.** Beyond Neptune is the Kuiper belt, a ring of icy bodies. Pluto goes round the Sun twice while Neptune goes round three times (a 3:2 resonance). Its orbit is stretched enough to come closer to the Sun than Neptune does.

**Finding Neptune.** Uranus was found in 1781. By 1821 astronomers could not make any orbit fit both the old sightings and the new ones. In 1846 Urbain Le Verrier worked out where an unseen planet must be to pull Uranus off course. Johann Galle pointed a telescope there on 1846 September 23 and found Neptune within one degree of the predicted spot.

## Before the lab

1. An asteroid in the 5:2 resonance goes round five times while Jupiter goes round twice. Jupiter takes 11.86 years. How long does the asteroid take to go round once?
2. When you push a child on a swing, why does it work best to push at the same point of every swing? What would happen if you pushed at a random point each time?
3. Pluto's orbit crosses Neptune's. Make a guess before you measure: could Pluto and Neptune ever collide?

## Safety

No hazards in the virtual lab.

## Procedure

**Part 1: kicks in the asteroid belt.** Choose the 3:1 resonance setup and run it. Watch where Jupiter passes the asteroid (the yellow dots) and what happens to the asteroid's orbit. When the run stops because the asteroid's orbit reaches Mars's, record a reading. Then do the same for the 5:2 resonance. For the 2:1 resonance, Between the gaps and Hildas at 3:2, run each for about 20,000 years and record a reading. Last, choose the 3:1 resonance again, move the starting distance to 2.55 AU, run for about 20,000 years and record a reading. Send the six readings to the worksheet, then clear them.

**Part 2: where the gaps are.** For each row of the Gaps table, work out where the resonance should be from Kepler's third law, as in Analysis 1. Then find the gap in the bar chart of real asteroids and write down its distance from the Sun (click the shortest bar in the gap; the starting distance on the card shows its distance).

**Part 3: Pluto and Neptune.** Switch to the Kuiper belt and choose Pluto. Run it for about 20,000 years and record a reading. Then choose Pluto's orbit, bad timing: the same orbit, but starting in a different place compared with Neptune. Run it until the run stops and record a reading. Last, choose Classical belt, run it for about 20,000 years and record a reading. Send the three readings to the worksheet, then clear them.

**Part 4: finding Neptune.** Switch to Finding Neptune. Choose Uranus alone and record a reading, then Le Verrier's planet and record a reading. Then choose Hunt for it yourself and set planet X to 30 AU and 17 Earth masses. Record a reading with planet X at each of these positions on 1846 September 23: 270°, 300°, 315°, 330°, 345° and 360°. Last, choose The real Neptune and record a reading. Send the readings to the worksheet.

## Data

| Run | Setup | Starting distance $$a$$ (AU) | Period ratio $$P_{\text{Jupiter}}/P$$ | Years run | Largest eccentricity | Crossed Mars's orbit (year) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

### Gaps

| Resonance | Period ratio $$P_{\text{Jupiter}}/P$$ | Predicted $$a$$ (AU) | Gap in the real asteroids (AU) |
|---|---|---|---|
| 3:1 | 3 | | |
| 5:2 | 2.5 | | |
| 7:3 | 2.333 | | |
| 2:1 | 2 | | |

### Pluto and Neptune

| Run | Setup | Starting distance $$a$$ (AU) | Period ratio $$P/P_{\text{Neptune}}$$ | Years run | Closest to Neptune (AU) | Thrown out (year) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

### Finding Neptune

| Trial | Setup | Planet X distance (AU) | Planet X mass (Earths) | Planet X position on 1846 Sep 23 (°) | Leftover drift, rms (″) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. Fill in the Predicted $$a$$ column of the Gaps table. For a period ratio $$r$$, the asteroid's period is $$P = 11.86/r$$ years, and Kepler's third law gives its distance $$a = P^{2/3}$$ AU (on most calculators, type P ^ (2/3)). Compare each prediction with the gap in the real asteroids. How close are they?
2. In Part 1, which asteroids had their orbits stretched until they crossed Mars's orbit, and how long did it take? Which stayed calm?
3. In the 3:1 run, describe where on the asteroid's orbit Jupiter passed it. How is that different from the 2.55 AU run? Use your answer to Before the lab 2 to explain why one asteroid was thrown onto a Mars crossing orbit and the other was not.
4. The asteroid at 2.55 AU started only 0.05 AU from the one at 2.50 AU. Use the bar chart to say whether real asteroids are common at 2.55 AU.
5. The Hildas sit at Jupiter's 3:2 resonance, yet the bar chart shows a small crowd of them at 3.97 AU, not a gap. From your reading, how close did the Hilda asteroid come to Jupiter? Suggest why this resonance protects asteroids instead of clearing them.
6. Pluto's closest point to the Sun is 29.7 AU and Neptune's orbit is at 30.1 AU. From Part 3, how close did Pluto ever come to Neptune? What happened when the same orbit started with bad timing? Was your guess in Before the lab 3 right?
7. In Part 4, how big was the leftover drift with Uranus alone, and with the best planet X you found? At which position on 1846 September 23 was the drift smallest? Compare it with the position of the real Neptune (show the real Neptune, or choose The real Neptune setup).

## Uncertainty

The demo's orbits come from Newton's law of gravity, so a repeated run with the same settings gives exactly the same numbers. The uncertainty is in what the model leaves out: each asteroid feels only the Sun and one planet, all the orbits lie flat in one plane, and a run lasts thousands of years, not the hundreds of millions the real belt has had. Name one of these and say how it might change your Part 1 results. In Part 4, planet X moves on a fixed orbit and its pull on Jupiter and Saturn is left out, so even the real Neptune leaves a little drift. How big is it, compared with the drift with Uranus alone?

## Questions

1. Earth has about 1/318 of Jupiter's mass, and there is no gap in the asteroid belt at a resonance with Earth. Why not?
2. Saturn's rings also have gaps, the largest being the Cassini Division. Using what you saw here, what kind of object could clear a gap in a ring?
3. Le Verrier's planet was too far from the Sun and too heavy, yet Galle still found Neptune within a degree of the predicted spot. From your Part 4 trials, which property of planet X did the leftover drift depend on most?
4. Some astronomers think an undiscovered "Planet Nine" far beyond Neptune lines up the orbits of the most distant Kuiper belt objects. How is that idea like Le Verrier's hunt for Neptune?

## What to hand in

Prelab answers, the Data, Gaps, Pluto and Neptune, and Finding Neptune tables, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.
