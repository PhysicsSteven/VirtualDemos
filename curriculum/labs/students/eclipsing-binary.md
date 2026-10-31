# Eclipsing Binary Stars
Student laboratory · Astronomy

Textbook: OpenStax *University Physics*, Vol. 1, §§13.4 and 13.5 (orbits and Kepler's laws) and §9.6 (center of mass), and Vol. 3, §6.1 (blackbody radiation and the Stefan–Boltzmann law). Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/exoplanets.html?ws=eclipsing-binary)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Star and planet, with its own setups; Two stars, with Sun and red dwarf; Twin stars; Hot star, cool giant; Partial eclipses; Eccentric pair; and a Mystery system with its own button. This worksheet uses **Two stars**.

**Using the demo.**

- Two stars orbit their center of mass. The top view (or 3D) shows the orbit, what the telescope sees shows the two disks as they pass in front of each other, and below are the light curve and both stars' radial velocities. Drag a star or either graph to move in time.
- The light curve can show the full orbit, or zoom on the eclipse of star 1 (star 2 in front) or on the eclipse of star 2 (star 2 behind). Time is counted from the middle of the eclipse of star 1.
- The sliders set each star's mass, radius and temperature, the pair's velocity γ along our line of sight, and the orbit. Noise adds random scatter to every measurement.
- The mystery system hides everything but star 1's temperature (as its spectrum would give it) and adds noise.
- Record reading stores the time at the cursor, the brightness and both stars' velocities (with noise, the measurements nearest the cursor). Export to worksheet sends the readings to the data table below. Clear starts a new series, which goes into a new copy of the table.
- The model: two spherical stars in a Kepler orbit, each with one temperature over its surface, in bolometric light (every wavelength counted), with the same limb darkening. Tidal stretching, reflected light, gravity darkening and light travel time are ignored.

</details>

## Goal

Weigh and measure two stars: find their masses from their velocities, their radii from the timing of the eclipses, and the second star's temperature from the depth of an eclipse.

## Background

**Velocities and masses.** Both stars orbit the center of mass, so $$M_1 v_1 = -M_2 v_2$$ for their velocities relative to it, and the velocity semi amplitudes obey $$K_1/K_2 = M_2/M_1$$. The measured velocities also include the pair's own velocity γ. For a circular orbit seen edge on ($$i = 90°$$), the stars' relative speed is $$v = K_1 + K_2 = 2\pi a/P$$, and Kepler's third law $$G(M_1 + M_2)P^2 = 4\pi^2 a^3$$ gives

$$M_1 + M_2 = \frac{P(K_1 + K_2)^3}{2\pi G}.$$

If the orbit is tilted, the velocities give $$M\sin^3 i$$; eclipses happen only when $$i$$ is close to 90°, which is why eclipsing binaries give true masses.

**Radii from the contacts.** An eclipse has four contacts: first (the disks touch), second (the smaller disk is entirely in front of or behind the larger), third and fourth. For a central eclipse the smaller star crosses in a nearly straight line at the speed $$v$$, so

$$R_{\text{large}} + R_{\text{small}} = \tfrac12 v\,(t_4 - t_1),\qquad R_{\text{large}} - R_{\text{small}} = \tfrac12 v\,(t_3 - t_2).$$

**Light and temperature.** A star's luminosity is $$L = 4\pi R^2\sigma T^4$$. When the smaller star is completely hidden (a total eclipse), the brightness left is the larger star's share of the light, $$f = L_1/(L_1 + L_2)$$. When equal areas are hidden, the eclipse depths are in the ratio of the surface brightnesses, $$T^4$$.

$$G = 6.674\times10^{-11}\ \text{N m}^2/\text{kg}^2,\quad M_\odot = 1.989\times10^{30}\ \text{kg},\quad R_\odot = 6.957\times10^{8}\ \text{m}.$$

## Before the lab

1. Star 1 swings by $$K_1 = 45$$ km/s and star 2 by $$K_2 = 150$$ km/s. Which star is heavier, and what is $$M_2/M_1$$?
2. With $$P = 1.665$$ days and those values of K, find $$M_1 + M_2$$ in solar masses (assume $$i = 90°$$), then each mass.
3. From first to fourth contact an eclipse lasts 2.58 h, and from second to third 1.38 h. With $$v = K_1 + K_2$$, find both radii in solar radii.
4. In a total eclipse the brightness drops to 0.990 of its full value. Star 1 has $$T_1 = 5772$$ K and $$R_1 = 1.00\ R_\odot$$, star 2 $$R_2 = 0.30\ R_\odot$$. Find $$L_2/L_1$$ and $$T_2$$.
5. Two stars of equal size: one eclipse is 16 times deeper than the other. What is the ratio of their temperatures?

## Safety

No hazards in the virtual lab.

## Procedure

Use Two stars, without noise, for Parts 1 and 2.

**Part 1. Velocities.** Choose Sun and red dwarf. Record readings at about twelve times spread evenly over one orbit, including the times of both stars' largest velocities toward and away from us. Send them to the worksheet.

**Part 2. Eclipses.** Clear the readings. Zoom on the eclipse of star 1 and record readings at its first, second, third and fourth contacts and at its middle. Do the same for the eclipse of star 2. Send them to the worksheet; they go into a new copy of the table.

**Part 3. A mystery binary.** Clear the readings and make a mystery system. Repeat Parts 1 and 2 for it, sending each set of readings, before you reveal it.

## Data

**Readings.** One copy of the table for each series.

| Reading | Time $$t$$ (h) | Phase | Brightness | Star 1 velocity $$v_1$$ (km/s) | Star 2 velocity $$v_2$$ (km/s) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. Graph $$v_1$$ and $$v_2$$ against t for Part 1. Read the period, γ and both semi amplitudes $$K_1$$ and $$K_2$$.
2. Graph $$v_2$$ against $$v_1$$. Explain why the points lie on a straight line, and use its slope to find $$M_1/M_2$$. Where does the line cross $$v_1 = v_2$$, and what is that velocity?
3. Find $$M_1 + M_2$$, then $$M_1$$ and $$M_2$$.
4. From Part 2, find both radii from the contact times. Which eclipse is total and which is annular (the smaller star in front of the larger)?
5. Use the brightness at the middle of the total eclipse to find $$L_2/L_1$$, then $$T_2$$ from $$T_1$$ and the radii.
6. Compare the depths of the two eclipses. Which star's surface is brighter, and does that agree with your temperatures?
7. Do all of this for the mystery binary, then reveal it and find the percent error of each mass, radius and temperature.

## Uncertainty

For the Sun and red dwarf, compare your masses and radii with the slider values; the radii come out slightly large because the stars cross on a curved path, not a straight line, so say by how much. For the mystery binary, estimate how far each contact time could be off in the noise, and carry that into the radii; carry the scatter of the velocities into the masses.

## Questions

1. Why do we get true masses, not just $$M\sin^3 i$$, from an eclipsing binary?
2. Choose Partial eclipses. Why can't you find both radii from its contact times alone?
3. Choose Hot star, cool giant. Which eclipse is deeper, and why, though the cool star is larger?
4. Choose Eccentric pair. Why does the second eclipse not come half an orbit after the first, and why do the two eclipses last different times?
5. Choose Twin stars. Why are both eclipses exactly half the light deep?
6. Most stars' masses and radii that astronomers quote were measured this way. Why are eclipsing binaries so valuable for checking models of stars?

## What to hand in

Prelab answers, the table copies with their graphs, K₁, K₂, γ and the period, both masses, both radii and $$T_2$$ for both systems with their percent errors, and answers to the questions. Identify simulated data: every reading in this lab is simulated.
