---
title: Lagrange Points
level: Intro astronomy; intro mechanics (rotating frames); upper level mechanics
time: 15 to 25 minutes
---
## What students should come away with

- In the frame that turns with two orbiting bodies, gravity from both and the centrifugal effect balance at five points. L1, L2 and L3 lie on the line through the bodies; L4 and L5 make equilateral triangles with them for any mass ratio.
- A Lagrange point is not where gravity vanishes: seen from the stars, an object there orbits with the smaller body's period.
- L1, L2 and L3 are saddles: offsets grow exponentially, so spacecraft there need regular corrections. L4 and L5 sit on hilltops of the effective potential, yet are stable for μ below Routh's 0.0385: the Coriolis effect turns a drift into a loop.
- In the rotating frame the Jacobi constant C = 2Ω − v² is conserved. Where 2Ω < C a particle would need negative v², so the zero velocity curve fences off regions it can never reach.

## Before class

Students should know Newton's gravity, circular orbits and Kepler's third law, and have met the centrifugal and Coriolis effects. Lengths are in a (the separation), times in P (the period). The stage shows effective potential contours, the five points (stable green, unstable red), the gold zero velocity curve and the shaded forbidden region. Click empty space to drop a particle at rest, or drag to throw it. Switch **Rotating** and **Inertial**, pick a system under **The two masses** or set **Mass ratio μ**. Turn on **Projector** for the room.

## Running it in class

1. **Jupiter's Trojans.** This is the opening setup: pause, ask Q1, then press **Reset** and play. A swarm of 140 test asteroids starts at rest near L4 and L5. None falls off; each swings around its point in a tadpole, about 150 years per swing.
2. **Tadpole orbit.** One particle starts at rest at 95° from Jupiter. It librates between about 40° and 95°, and its own zero velocity curve (C = 3.00051, just above 3) encloses a small forbidden island around L4 that the path circles.
3. **Horseshoe orbit.** A particle on a circular orbit 1% outside Jupiter's drifts backward, turns around before reaching Jupiter, and drifts the other way past L3. Ask Q6.
4. **Sun–Earth: JWST at L2.** Two planar orbits around L1 and L2, each about 0.004 AU across, last two or three loops and then leave. Read the e-folding times in the rail (23 d at L1, 23.4 d at L2) and ask Q4.
5. **Earth–Moon.** C is between C(L2) and C(L1): the particle wanders between Earth and the Moon through L1 but cannot get out past L2. Drag the gold curve (or **Jacobi constant C**) and read **Where a particle with this C can go** (Q5).
6. **Unstable L1.** μ = 0.1. Particles 10⁻⁵ a either side of L1 leave, one toward each mass; with μ above 0.0385 the one near L4 spirals away too. Ask Q3.

## Questions

**Q1.** Predict: on the contour map, L4 and L5 sit on top of hills of the effective potential, not in valleys. If you place an asteroid at rest a little way from L4, will it roll off the hill and leave? Then run **Jupiter's Trojans**.

**Q2.** For a small second mass, L1 and L2 lie about a(μ/3)^(1/3) from it (Hill's estimate). For the Sun and the Earth–Moon pair, μ = 3.04 × 10⁻⁶ and a = 1.496 × 10⁸ km. How far are L1 and L2 from Earth, and how does that compare with the Moon's distance, 384,400 km? Check with the rail.

**Q3.** L4 and L5 are stable only if μ < 0.0385. Which have stable L4 and L5: Sun–Jupiter (μ = 9.5 × 10⁻⁴), Earth–Moon (μ = 0.0122), Pluto–Charon (Charon is 0.122 times Pluto's mass)? Set each μ, read the rail, and drop a particle near L4 to check.

**Q4.** JWST orbits Sun–Earth L2, where the rail says offsets grow by a factor e every 23.4 days. If an error leaves it 1 km off its planned path, how long until the error is 1000 km if nothing is done? What does that say about how often it must correct its orbit?

**Q5.** Explain why a particle with Jacobi constant C larger than C(L1) can never cross from near Earth to near the Moon, though nothing physical blocks the way. Then use the **Earth–Moon** preset: lower C past C(L2) and throw a particle with that C. What new path opens?

**Q6.** In **Horseshoe orbit** the particle starts on a circular orbit of radius 1.01 a. Use Kepler's third law to explain why it drifts backward and estimate how many degrees it falls behind per Jupiter orbit. Why does it turn around before it reaches Jupiter?

## Common misconceptions

- **"A Lagrange point is where the two gravities cancel."** The forces balance only in the rotating frame, with the centrifugal effect included. In the inertial frame the net gravity is exactly the centripetal force for a circular orbit with the second body's period.
- **"Stable points must be at the bottom of a valley."** L4 and L5 are maxima of the effective potential, stable (for μ < 0.0385) only because the Coriolis effect bends a sliding particle into a loop.
- **"Trojans and spacecraft sit at the points."** Trojans librate in tadpoles around L4 and L5; spacecraft orbit L1 or L2 and correct every few weeks.
- **"The zero velocity curve is a path the particle follows."** It is the edge of the region the particle may visit.

## Physics behind the demo

- The circular restricted three body problem: two masses on circular orbits, a massless test particle in their plane. Units a = 1, G(m₁ + m₂) = 1, so n = 1 and P = 2π.
- Ω = ½(x² + y²) + ½μ(1 − μ) + (1 − μ)/r₁ + μ/r₂. Exact rotating frame equations, ẍ − 2ẏ = ∂Ω/∂x, ÿ + 2ẋ = ∂Ω/∂y (Coriolis included). C = 2Ω − v² is conserved; C(L1) > C(L2) > C(L3) > C(L4) = C(L5) = 3.
- L1, L2, L3 are roots of fifth degree equations (Newton's method). Stability, growth times and libration periods come from the linearized motion; Routh's criterion is μ < (1 − √(23/27))/2 = 0.03852.
- Orbits use an adaptive Dormand–Prince 5(4) integrator; **Drift since launch** checks it. The Sun–Earth m₂ is the Earth–Moon barycenter.
- Left out: other planets, the Sun's pull on the Moon, eccentric orbits, radiation pressure and motion out of the plane. Real L1 and L2 spacecraft fly three dimensional halo orbits; the planar Lyapunov orbits here are their flat relatives. Real Trojans have tilted, eccentric orbits.

## Going further

- Homework: show that at L4 (equal distances a from both masses) the net pull points at the center of mass with exactly the strength for a circle at Jupiter's period. Or derive Hill's estimate a(μ/3)^(1/3).
- Real examples: SOHO at Sun–Earth L1; JWST and Gaia at L2; Earth Trojans 2010 TK7 and 2020 XL5; Janus and Epimetheus, which swap orbits about every four years.
