---
title: Vectors and Relative Motion
level: PHYS 201
time: 15 to 30 minutes
---
## What students should come away with

- A vector has components: A = A_x î + A_y ĵ with A_x = |A| cos θ and A_y = |A| sin θ, θ measured counterclockwise from +x.
- Vectors add by components (head to tail, or the parallelogram); magnitudes add only when the vectors point the same way.
- A − B is A + (−B); drawn from a common tail it runs from B's head to A's head.
- The dot product is a number, A·B = |A||B| cos φ = A_xB_x + A_yB_y. The cross product's size is the parallelogram's area, |A||B| sin φ, and its direction is out of or into the page; B × A = −A × B.
- Velocities add the same way: v(boat, shore) = v(boat, water) + v(water, shore).
- Forces add the same way. On a force table the ring is centered when the forces on it add to zero; the force that balances a set of forces, their equilibrant, is minus their resultant.

## Running it in class

1. **Components.** A = (4, 3): |A| = 5.00, θ = 36.9°. Drag the tip into each quadrant and watch the signs and the angle.
2. **Adding.** (5, 1) + (−2, 4) = (3, 5), |R| = 5.83 against |A| + |B| = 9.57. Switch Draw B between Head to tail and From the origin.
3. **Subtracting.** (5, 2) − (2, 4) = (3, −2). Point out the faint copy of A − B from B's head to A's head.
4. **Dot and cross products.** (5, 1)·(2, 4) = 14 and (A × B)_z = 18, with φ = 52.1°. Make them perpendicular (dot product 0) and parallel (cross product 0).
5. **River crossing.** Boat 2.5 m/s straight across a 60 m river flowing at 1.5 m/s: 24 s, 36 m downstream. **Aim to land straight across**: 36.9° upstream, 30 s. Then tick **Slower near the banks**: the current is zero at each bank and 1.5 m/s mid river (average 1.0 m/s). Heading straight across now lands 24 m downstream along a curved path, and aiming 23.6° upstream lands straight across, swinging upstream near the banks and downstream mid river.
6. **Force table** (the lab; also `?setup=table`). String 1 holds 0.150 kg at 20°, string 2 holds 0.200 kg at 110°, string 3 starts at 0.100 kg at 230° and the ring is off center. Students find the equilibrant of strings 1 and 2 graphically (tick **Show the sum tip to tail**) and by components, then set string 3 by hand to check. The first two strings are 90° apart, so the answer is a 3, 4, 5 triangle: 0.250 kg at 253.1°. **Set string 3 to the equilibrant** does it for you, rounded to the nearest gram and degree. With **Pulley friction, up to the weight of** 1 g the ring stays centered from 0.249 to 0.251 kg at 253°, but only at 253° itself at 0.250 kg: the angle is the sharper test. Set the friction to 0 and the ring never centers at whole grams and degrees here, which is a good moment to talk about why a real table is tapped and why its result has an uncertainty. **Record this setup** and **Export to worksheet** send the masses, angles and whether the ring was centered to the force table worksheet. Use **Strings on the table** 4 for a second trial with three given forces.

## Questions

**Q1.** A = (−3, 4). Find |A| and its angle from +x. Which quadrant, and why does tan⁻¹(A_y/A_x) alone give the wrong angle?

**Q2.** Find A + B and A − B for A = (5, 1) and B = (−2, 4), and their magnitudes. Is |A + B| ever bigger than |A| + |B|?

**Q3.** For A = (5, 1) and B = (2, 4), find A·B, the angle between them, and (A × B)_z. Which one is the area of the parallelogram the two vectors make?

**Q4.** The river is 60 m wide and flows at 1.5 m/s; the boat goes 2.5 m/s relative to the water. (a) Heading straight across, how long does the crossing take and where does it land? (b) Which heading lands it straight across, and how long does that take? (c) What if the current were 3.0 m/s?

**Q5.** On the force table, string 1 holds 0.150 kg at 20° and string 2 holds 0.200 kg at 110°. Find the mass and angle for string 3 that centers the ring, (a) by components and (b) by noticing the angle between strings 1 and 2. Why is the answer's angle not simply halfway between theirs plus 180°?

**Q6.** With the pulleys' friction set to the weight of up to 1 g, the ring in Q5 stays centered for string 3 masses from 0.249 to 0.251 kg at 253°, but moving string 3 by one degree pushes it off center. Explain why the angle matters more than the mass here, and what this says about how to state the uncertainty of a force table result.

## Common misconceptions

- **"|A + B| = |A| + |B|."** Only for parallel vectors.
- **"The x component is always the cosine."** Only when θ is measured from +x.
- **"The equilibrant is the resultant."** It is the same size and points the opposite way: it is what has to be added to make the sum zero.
- **"Masses add, so 0.150 kg and 0.200 kg need 0.350 kg."** Forces add as vectors; here the two are perpendicular and need only 0.250 kg.
- **"Aiming straight across gets you across fastest and lands you opposite."** It is the fastest crossing, but the current carries you downstream.

## Physics behind the demo

- Exact vector algebra on a grid (tips snap to whole units, or tenths with Shift and the arrow keys). Angles are from +x, counterclockwise, 0 to 360°.
- River: the current is uniform, or (Slower near the banks) u(y) = 4u y(W − y)/W², zero at the banks with average 2u/3. The boat keeps its speed and heading relative to the water, so the crossing time is W/(v_b cos θ) either way and the drift is (average current − v_b sin θ) × time; the curved path x(t) is the exact integral. Ripples and leaves drift at the local current; the arrows at the left show the profile (4 m/s = 120 px). Arrows at the boat show 8 s of motion, using the current where the boat is.
- Force table: each string pulls the ring with tension mg along its angle (g = 9.81 m/s², massless strings, mass includes the hanger, angles counterclockwise from the 0° mark). The forces are computed with every string pointing at the pin; the ring's few millimetres of play only move the picture and set where the ring comes to rest when the pin is pulled. Pulley friction is modelled as each tension lying anywhere within mg ± f, f a chosen value set on the page (0 to the weight of 5 g); the ring is centered exactly when some choice of tensions in those ranges sums to zero, tested on the edges of the set of reachable sums (a zonotope). Arrows are drawn to scale, the table's radius being 5 N. Exported readings are labelled simulated.
