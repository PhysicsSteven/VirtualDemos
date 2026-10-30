---
title: Inverse Square Force Lab
level: Intro mechanics and electricity (algebra or calculus based)
time: 15 to 25 minutes
---
## What students should come away with

- Newton's law of gravitation and Coulomb's law have the same shape: F is proportional to each body's mass (or charge) and to 1/r², with r measured between the centers.
- The two forces are always equal in size and opposite in direction, whatever the two masses or charges are (Newton's third law). The lighter body accelerates more only because a = F/m.
- Gravity between everyday masses is tiny; the electric force between the same particles is enormous by comparison.
- Plotting F against 1/r² gives a straight line through the origin, and its slope is Gm₁m₂ or kq₁q₂.

## Before class

Students should know what a force in newtons is and Newton's third law. Choose **Gravity**, **Coulomb** or **Coulomb, atomic scale** at the top of the picture, drag either ball along the ruler, and set the masses or charges in the card. **Record this distance** adds the distance and the force to the table under Recorded, and the plot switches between F against r and F against 1/r². **Blind** in **Lab** hides the force for predictions.

## Running it in class

1. **Two lead balls.** Ask Q1, then slide the right ball from 6.0 m (r = 3.0 m) to 9.0 m (r = 6.0 m): 1.85 × 10⁻⁶ N becomes 4.63 × 10⁻⁷ N.
2. **Double one mass.** Ask which ball feels the bigger pull (Q2). The two arrows stay equal.
3. **Unlike charges** and **Like charges.** Swap a sign: the arrows flip but keep their size (Q3).
4. Record five or six distances in one mode and switch the plot to F against 1/r² (Q4).
5. **Proton and electron.** Compare the electric force with gravity between the same two particles (Q5).

## Questions

**Q1.** Two 500 kg lead balls have their centers 3.0 m apart. Predict the gravitational force on each. Then predict it at 6.0 m and check both on the ruler.

**Q2.** Make one ball 1000 kg and keep the other at 500 kg, 3.0 m apart. Which ball feels the larger force? If the balls were free to move, which would accelerate more, and by what factor?

**Q3.** What equal charge would you have to put on each of two 500 kg balls so that their electric repulsion cancels their gravitational attraction? Does the answer depend on how far apart they are?

**Q4.** Record the force at five or more distances for one pair of charges and plot F against 1/r². What shape do you get, and what is the slope? Use the slope to find k for +2 μC and −2 μC.

**Q5.** A proton and an electron 52.9 pm apart (the Bohr radius) attract with 8.24 × 10⁻⁸ N. Find the gravitational attraction between the same two particles and the ratio of the two forces. What acceleration does the electric force give the electron?

**Q6.** In Gravity, turn on Same size for every mass. Does the force change? Why can two 1000 kg lead balls never pull on each other with more than about 2 × 10⁻⁴ N?

## Common misconceptions

- **"The bigger mass pulls harder."** Each body pulls the other with the same size of force. The big one simply accelerates less.
- **"Double the distance, half the force."** The force falls to a quarter: it goes as 1/r².
- **"r is the gap between the surfaces."** It is the distance between the centers.
- **"Gravity and electric forces are similar in strength because their laws look alike."** For a proton and an electron the electric force is about 10³⁹ times the gravitational one.

## Physics behind the demo

- F = Gm₁m₂/r² and F = kq₁q₂/r² exactly, with G = 6.674 30 × 10⁻¹¹ N·m²/kg² and k = 8.987 551 786 2 × 10⁹ N·m²/C² (CODATA 2022), e = 1.602 176 634 × 10⁻¹⁹ C exact. A uniform sphere acts as if all its mass were at its center, so r is between the centers.
- The masses are lead spheres, 11 340 kg/m³, so a sphere's radius grows as m^(1/3); Same size draws every mass as large as 1000 kg. The charges are points drawn as balls. The bodies may not overlap, and positions are read to 0.1 of the ruler's unit.
- The arrows are equal and opposite, with lengths that grow with log F so that forces from 10⁻¹⁰ N to 10³ N all show; the page says they are not to scale.
- Tests (curriculum/validation/test_force_lab.cjs): the constants, the four setups' forces, the inverse square and linear scalings, and the lead sphere radius.

## Going further

- Compare with The Cavendish Experiment, which measures G from the same force with 1.5 kg and 20 g lead spheres.
- In the Coulomb Sandbox, place two charges and compare the field of one at the other with F/q.
