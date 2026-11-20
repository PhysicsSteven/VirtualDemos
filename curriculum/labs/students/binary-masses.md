# Weighing Binary Stars
Student laboratory · Astronomy

Textbook: OpenStax *Astronomy 2e*, §18.2 (measuring stellar masses). Access for free at https://openstax.org/details/books/astronomy-2e. The physics behind it: OpenStax *University Physics*, Vol. 1, §13.5 (Kepler's laws) and §9.6 (center of mass), and Vol. 3, §5.7 (the Doppler effect for light). Access for free at https://openstax.org/details/books/university-physics-volume-1 and https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/exoplanets.html?ws=binary-masses)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Star and planet, with its own setups; Two stars, with Sun and red dwarf; Twin stars; Hot star, cool giant; Partial eclipses; Eccentric pair; Alpha Centauri A and B; Seesaw: 2 and 4 suns; Spectroscopic pair; and a Mystery system with its own button. This worksheet uses **Two stars**, which the link opens.

**Using the demo.**

- Two stars orbit their center of mass. The top view (or 3D) shows the orbit from above. Beside it is what a telescope sees, picked with the buttons **Eclipsing**, **Visual** (both stars seen apart on the sky) and **Spectroscopic** (the stars too close to see apart: only their combined spectrum). Below are the light curve and both stars' velocities along our line of sight.
- **Play** and **Pause** run time. To move in time, drag either graph, or click a graph and use the left and right arrow keys; Shift with an arrow key steps a twentieth of an orbit.
- **Weigh the stars** in the panel lists what the demo works out from the orbit. Work your own numbers first, then check them against it.
- **Record reading** stores the system and its measurements at the cursor's time. **Export to worksheet** sends the readings to the tables below; **Clear** starts a new series.
- The model: two stars in a Kepler orbit about their center of mass, with Newton's form of Kepler's third law. Alpha Centauri's orbit and masses are measured values (Akeson et al. 2021); the seesaw and spectroscopic pairs are made up. The spectroscopic view shows hydrogen's red line from each star, shifted by the Doppler effect.

</details>

## Goal

Weigh two stars that orbit each other: get their total mass from the size and period of the orbit, split it between them with the center of mass, and read the split again from the Doppler shifts of a pair too close to see apart.

## Background

**Orbits are scales.** You can't put a star on a scale, but you can watch something orbit it. The faster and tighter the orbit, the more mass pulls it around. For two stars, Kepler's third law with Newton's correction gives

$$M_1 + M_2 = \frac{a^3}{P^2},$$

with $$a$$ the average separation of the two stars in AU, $$P$$ the time for one orbit in years, and the masses in solar masses. Check it on the Earth and the Sun: $$a = 1$$, $$P = 1$$, so the total is 1 solar mass. This gives only the **total** mass.

**The seesaw.** Both stars orbit a point between them, the **center of mass**, like two children balanced on a seesaw. The heavier one sits closer to the middle: if star 1 is a distance $$a_1$$ from the center of mass and star 2 is $$a_2$$ from it,

$$M_1 a_1 = M_2 a_2,\qquad \frac{M_2}{M_1} = \frac{a_1}{a_2},\qquad a_1 + a_2 = a.$$

The two stars always sit on opposite sides of the center of mass and take the same time to go around, so the star on the bigger circle also moves faster. Their velocities are always opposite, in the same ratio: $$v_2 = -(M_1/M_2)\,v_1$$.

**Three kinds of binaries.** In a **visual binary** a telescope shows both stars, and over years we watch them go around; that gives $$a$$ and $$P$$. In a **spectroscopic binary** the stars are too close to see apart, but each star's spectral lines shift back and forth as it orbits, toward red as it moves away from us and toward blue as it comes toward us. A line of rest wavelength $$\lambda_0$$ seen at $$\lambda$$ gives the star's speed along our line of sight:

$$v = c\,\frac{\lambda - \lambda_0}{\lambda_0},\qquad c = 3.00\times10^5\ \text{km/s}.$$

The demo uses hydrogen's red line, $$\lambda_0 = 656.28$$ nm. In an **eclipsing binary** the stars pass in front of each other and the light dips, which gives their sizes.

On the main sequence, a star's luminosity follows its mass roughly as $$L \approx M^4$$ (solar units).

## Before the lab

1. Alpha Centauri A and B, the nearest stars like the Sun, orbit each other with an average separation of about 23 AU and a period of about 80 years. What is their total mass?
2. Two stars are 6 AU apart and orbit every 6 years. Star 1 is twice as far from the center of mass as star 2. Find the total mass, then each star's mass.
3. In a spectroscopic binary, hydrogen's 656.3 nm line from one star swings back and forth by 0.066 nm. How fast is that star moving toward and away from us?
4. In the pair of Before the lab 2, star 2 has twice the mass of star 1, and each pulls on the other. Which star moves on the bigger orbit and moves faster: the heavy one, the light one, or do they move the same? Some people reason that the heavy star pulls harder, so it must do more of the moving. Write your answer and one sentence of reasoning before you open the demo.

## Safety

No hazards in the virtual lab.

## Procedure

The link opens the demo with **Two stars** pressed (at the top, next to **Star and planet**), playing the setup **Sun and red dwarf**. The setups are listed under **Systems** in the panel on the right.

**Part 1. Weigh four pairs.** Press the setup **Seesaw: 2 and 4 suns**. It opens in the **Visual** view: watch the two stars go around for a few orbits, and note which star is on the bigger circle and which moves faster. Press **Record reading** (in the Readings section of the panel). Then press **Alpha Centauri A and B**, **Spectroscopic pair** and **Sun and red dwarf** in turn, and press **Record reading** after each. That makes four readings. Press **Export to worksheet**: they go into Table 1, with the separation $$a$$, the period $$P$$ in years, and each star's distance from the center of mass, $$a_1$$ and $$a_2$$.

**Part 2. A spectroscopic pair.** Press **Clear**. Press **Spectroscopic pair**; it opens in the **Spectroscopic** view, with each star's line and its shift written on the spectrum. Press **Pause**. Drag across the velocity graph at the bottom (**Radial velocities**) to move in time, and watch the two lines in the spectrum move the opposite way from each other. Record readings (**Record reading**) at ten times spread over one orbit (the period is about 7.6 days, about 183 hours), including the two times when star 1's velocity curve is at its highest and at its lowest. Press **Export to worksheet**: they go into Table 2, with both stars' wavelengths $$\lambda_1$$ and $$\lambda_2$$ and their velocities $$v_1$$ and $$v_2$$.

## Data

**Table 1. Four pairs.** One reading for each setup. Type $$a^3/P^2$$ and $$a_1/a_2$$ yourself.

| Reading | System | a (AU) | P (yr) | a₁ (AU) | a₂ (AU) | a³/P² (M☉) | a₁/a₂ |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

**Table 2. The spectroscopic pair over one orbit.**

| Reading | t (h) | λ₁ (nm) | λ₂ (nm) | v₁ (km/s) | v₂ (km/s) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. For each pair in Table 1, check that $$a_1 + a_2 = a$$. The column $$a^3/P^2$$ is the total mass $$M_1 + M_2$$: compare the Seesaw and Alpha Centauri values with your answers to Before the lab 1 and 2.
2. Split each total with the seesaw. With $$q = a_1/a_2 = M_2/M_1$$, the masses are $$M_1 = (M_1 + M_2)/(1 + q)$$ and $$M_2 = q\,M_1$$. Find $$M_1$$ and $$M_2$$ for all four pairs. Which star is heavier in each, the one closer to the center of mass or the one farther from it?
3. Graph $$v_2$$ (vertical) against $$v_1$$ (horizontal) for all ten readings in Table 2. Is it a straight line through the origin? Find its slope. By the seesaw, the slope is $$-M_1/M_2$$: what mass ratio does it give, and does it agree with $$a_2/a_1$$ for the Spectroscopic pair in Table 1?
4. In Table 2, how far does $$\lambda_1$$ swing from 656.28 nm at most, and how fast is star 1 moving then? Compare with Before the lab 3 and with the largest $$v_1$$ in Table 2.

## Questions

1. Alpha Centauri takes about 80 years to go around, and the Spectroscopic pair about a week. Use $$a$$ from Table 1 to explain the difference, and why we can see one pair apart and not the other.
2. Use $$L \approx M^4$$ with your masses from Analysis 2 to estimate the luminosity of Alpha Centauri A and of B. Which is brighter, and by about what factor?
3. In the Sun and red dwarf pair, how far is the Sun's center from the center of mass, in AU? The Sun's radius is 0.00465 AU. Is the center of mass inside the Sun or outside it?
4. Look back at your prediction in Before the lab 4. In the Seesaw pair, which star was on the bigger circle and moved faster, and what do $$a_1$$ and $$a_2$$ in Table 1 and the slope of your graph say? Each star pulls on the other with a force of the same size; explain why the lighter star still does more of the moving.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The separation of a visual binary in AU comes from its angle on the sky times its distance from us, so a distance off by 2% makes $$a$$ off by 2%. By about how many percent is the total mass $$a^3/P^2$$ then off? Why does a small error in $$a$$ matter more than the same error in $$P$$?

## What to hand in

Answers to Before the lab, the two tables with the graph and its slope, and your answers to Analysis and Questions (and to Uncertainty, if assigned). Identify simulated data: every reading in this lab is simulated, except that Alpha Centauri's orbit and masses are measured values.
