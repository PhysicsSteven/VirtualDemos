# Orbits Near the Lagrange Points
Student laboratory · Astronomy

Textbook: OpenStax *University Physics*, Vol. 1, §§13.3 to 13.5 (gravitational potential energy, orbits and Kepler's laws) and §6.3 (centripetal force). Rotating frames go beyond the textbook; the Background gives what you need. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/lagrange-points.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Sun–Earth: JWST at L2; Earth–Moon; Jupiter's Trojans; Comet meets Jupiter; Horseshoe orbit; Unstable L1.

**Using the demo.**

- Two masses, $$m_1$$ and the smaller $$m_2$$, orbit their center of mass on circles. A test particle, too light to pull on them, moves in their plane. The picture can be drawn in the frame that turns with the two masses (the rotating frame) or centered on $$m_1$$.
- The map shows contours of the effective potential, the five Lagrange points (green when stable, red when not), and the zero velocity curve with the region a particle cannot reach shaded.
- Click empty space to drop a particle at rest, or drag to throw it. In 3D a drag turns the view; switch the drag to throwing (or hold Shift) to throw. Choose a real system or set the mass ratio $$\mu = m_2/(m_1 + m_2)$$ yourself.
- The rail lists each Lagrange point: its position, and either the period of small librations about it (stable) or the time for a small offset to grow by a factor $$e$$ (unstable). For the newest particle it gives the Jacobi constant $$C$$, how much $$C$$ has drifted in the calculation, and the two body orbit about $$m_1$$ that the particle would follow if $$m_2$$ vanished: perihelion, aphelion, period and Tisserand's parameter.
- Lengths are in units of the separation $$a$$ and times in units of the period $$P$$ of the two masses. The orbits are integrated with an adaptive Dormand–Prince method. Real L1 and L2 spacecraft fly three dimensional halo orbits, and real Trojans have tilted, eccentric orbits; both are left out.
- Record reading stores the system and $$\mu$$, the L1 and L2 distances from $$m_2$$, the L2 growth time, L4's stability with its libration period or growth time, the time $$t$$, and for the newest particle you placed (not a preset swarm) $$C$$, its drift and the two body orbit. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Find where the five Lagrange points sit and how stable they are as the mass ratio changes, and follow a comet that meets Jupiter to see what its encounters change and what they leave alone.

## Background

**The rotating frame.** In the frame that turns with the two masses at their angular speed $$n = 2\pi/P$$, a particle feels the gravity of both masses and the centrifugal effect, $$n^2 r$$ outward. Their combined potential energy per unit mass is $$-\Omega$$, with (in units $$a = 1$$, $$n = 1$$, $$G(m_1 + m_2) = 1$$)

$$\Omega = \tfrac12(x^2 + y^2) + \frac{1 - \mu}{r_1} + \frac{\mu}{r_2} + \tfrac12\mu(1 - \mu),$$

where $$r_1$$ and $$r_2$$ are the distances to the two masses. A moving particle also feels the Coriolis effect, which pushes sideways to its motion and does no work.

**The Lagrange points.** At five points the forces in the rotating frame balance, so a particle at rest there stays at rest. Seen from the stars it orbits with period $$P$$. L1, L2 and L3 lie on the line through the masses; L4 and L5 make equilateral triangles with them. For small $$\mu$$, L1 and L2 sit close to $$m_2$$, at about Hill's distance

$$r_H = a\left(\frac{\mu}{3}\right)^{1/3}.$$

**Stability.** L1, L2 and L3 are saddles: a small offset grows by a factor $$e$$ in a fixed time. For small $$\mu$$ the growth time at L1 and L2 tends to $$P/(2\pi\sqrt{1 + 2\sqrt7}) = 0.0635\,P$$. L4 and L5 are hilltops of the effective potential, yet the Coriolis effect turns a particle sliding off into a loop: they are stable when $$\mu < 0.03852$$ (Routh's limit). For small $$\mu$$ the slow libration about L4 has period

$$P_{\text{lib}} \approx P\sqrt{\frac{4}{27\mu}} = 0.385\,P\,\mu^{-1/2}.$$

**The Jacobi constant.** In the rotating frame the energy per unit mass $$\tfrac12 v^2 - \Omega$$ is conserved, since the Coriolis effect does no work. It is usually written as $$C = 2\Omega - v^2$$. Where $$2\Omega < C$$ the particle would need $$v^2 < 0$$: it can never go there. For a comet far from Jupiter, $$C$$ is close to Tisserand's parameter, $$T = a_J/a + 2\sqrt{(a/a_J)(1 - e^2)}$$, computed from the comet's two body orbit about the Sun (semimajor axis $$a$$, eccentricity $$e$$).

## Before the lab

1. Use Hill's distance to estimate how far L1 and L2 are from Earth in the Sun–Earth system ($$\mu = 3.04\times10^{-6}$$, $$a = 1.496\times10^8$$ km). Compare with the Moon's distance, 384,400 km.
2. Find the growth time at Sun–Earth L2 in days, from $$0.0635\,P$$ with $$P = 365.26$$ d. If JWST is 1 km off its planned path, how long until the error is 1000 km if nothing is done?
3. Estimate the period of small librations of Jupiter's Trojans about L4 ($$\mu = 9.54\times10^{-4}$$, $$P = 11.86$$ yr).
4. Which of these have stable L4 and L5 points: Sun–Jupiter, Earth–Moon ($$\mu = 0.0122$$), Pluto–Charon ($$\mu = 0.109$$)?

## Safety

No hazards in the virtual lab.

## Procedure

**The points against the mass ratio.** Set the mass ratio to each of $$\mu = 10^{-6}$$, $$10^{-5}$$, $$10^{-4}$$, $$10^{-3}$$, 0.01, 0.02, 0.03, 0.035, 0.04, 0.05 and 0.1, and record a reading at each. Send the readings to the worksheet before you clear them.

**A comet meets Jupiter.** Clear the readings and choose Comet meets Jupiter. It starts running at once, so pause it and press Reset to go back to $$t = 0$$, then record a reading at the start. Slow the time to 0.1 $$P$$ per second (Reset puts the setup's speed back) and let it run, pausing to record a reading as near as you can to $$t = 0.5$$, 1.0, 1.5, 2.0 and 2.5 $$P$$ (6 readings in all). Note when the comet passes close to Jupiter. Send these readings to the worksheet too.

## Data

| Reading | $$\mu$$ | L1 from $$m_2$$ ($$a$$) | L2 from $$m_2$$ ($$a$$) | L2 growth time ×e ($$P$$) | L4 | L4 libration period ($$P$$) | Time $$t$$ ($$P$$) | Jacobi constant $$C$$ | Perihelion ($$a$$) | Aphelion ($$a$$) | Orbital period ($$P$$) | Tisserand $$T$$ | $$(\mu/3)^{1/3}$$ | $$\mu^{-1/2}$$ |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | | | | |
| | | | | | | | | | | | | | | |
| | | | | | | | | | | | | | | |

## Analysis

1. Fill in $$(\mu/3)^{1/3}$$ for every mass ratio. Graph the L1 distance against it, and then the L2 distance. Which is closer to $$m_2$$? Compare the slope for the smallest four values of $$\mu$$ with Hill's estimate (make a copy of the table with just those rows).
2. How does the L2 growth time change with $$\mu$$? Compare its value at small $$\mu$$ with 0.0635 $$P$$, and find it in days for Sun–Earth.
3. Fill in $$\mu^{-1/2}$$ for the stable mass ratios and graph the L4 libration period against it, using only $$\mu \le 10^{-3}$$ (the copy from Analysis 1). Compare the slope with 0.385. Which mass ratios break the straight line, and why?
4. Between which two of your mass ratios does L4 become unstable? Compare with Routh's limit.
5. For the comet, describe how its perihelion, aphelion and orbital period changed. Convert the perihelion and aphelion to AU at the start and the end ($$a = 5.2038$$ AU). Did its energy about the Sun change?
6. How much did $$C$$ and Tisserand's $$T$$ change over the same time? Explain why $$C$$ is conserved when the comet's energy about the Sun is not.

## Uncertainty

The demo integrates the equations of motion numerically. Its own check is the drift of $$C$$, which should stay exactly constant: read $$\lvert\Delta C/C\rvert$$ for your last comet reading. How large is it compared with the changes in $$C$$ you would need to explain any of the changes in the comet's orbit? Tisserand's $$T$$ is only close to $$C$$: from your readings, how much does it vary, and why is it not exactly constant?

## Questions

1. A Lagrange point is often described as the place where the two gravities cancel. Explain why that is wrong for L4, where both masses pull the particle toward them.
2. L4 and L5 sit on hilltops of the effective potential. Explain how a particle placed near one can stay near it instead of rolling off.
3. JWST's orbit about Sun–Earth L2 is unstable, and the spacecraft corrects it about every three weeks. Use your growth time to explain why a correction every few weeks is enough, and why it is needed at all.
4. Explain why a particle with $$C$$ larger than $$C$$ at L1 can never cross from near Earth to near the Moon, though nothing blocks its way.
5. Comet 67P, visited by Rosetta, was moved onto its present orbit by a close pass of Jupiter in 1959. What would astronomers check, using Tisserand's parameter, to decide whether a comet seen after such a pass is the same comet seen before it?

## What to hand in

Prelab answers, the table copies with their graphs and fits, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.
