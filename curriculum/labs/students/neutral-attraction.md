# Attracting a Neutral Insulator
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §5.2 (polarization) and §8.5 (molecular model of a dielectric, Table 8.1). Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/induction.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Using the demo.**

- Choose Attracting a neutral insulator under Setups. A neutral ball of radius 2.00 cm sits on a 2.00 cm insulating post on the pan of an analytical balance. A charged rod hangs above it; lower it, set its charge, and set the gap from its tip to the top of the ball. Up and down arrows on the picture move the rod by 1 mm (Shift: 1 cm).
- The balance reads to 0.01 mg and is tared with the ball on the pan, so a pull upward on the ball makes the reading negative. The rod moves at a steady speed, and a small ring on the display means the balance is still settling. Tare sets the reading to zero with whatever is pulling on the ball at that moment.
- Record reading stores the ball, the rod's charge, the gap and the balance reading; Export to worksheet sends the readings here.
- Blind hides the force readouts and the arrow, leaving the balance. The Mystery insulator keeps its dielectric constant hidden, and choosing it again gives a new one.

**What the demo models.**

- A uniform, linear dielectric ball with the dielectric constant of Table 8.1 of the textbook (the metal ball is a perfect conductor), and the rod's tip as a point charge on the line through the ball's centre.
- The force is the exact solution for a ball and a point charge, summed over every multipole, not only the induced dipole. The balance converts force to mass with $$g = 9.81$$ m/s². The rest of the rod, the post and the balance are left out of the electrostatics.
- The molecules in the picture are drawn huge and their stretching is exaggerated. The marks around the ball show the bound surface charge (free charge on the metal ball).

</details>

## Goal

Measure the force with which a charged rod attracts a neutral insulating ball, find how it depends on the rod's charge, on the distance and on the material, and use it to find the dielectric constant of an unknown insulator.

## Background

A charged object attracts a neutral one, conductor or insulator. In a conductor, free electrons move to the near side. In an insulator no charge moves through the material, but each molecule is **polarized**: its electron cloud is pulled a little one way and its nuclei the other, or a polar molecule turns to line up with the field. The side of the ball facing a positive rod ends up with a thin layer of negative **bound charge** and the far side with an equal layer of positive bound charge. The ball stays neutral, but its negative side is closer to the rod, where the field is stronger, so the attraction wins. Turn the rod negative and every molecule turns round: the ball is attracted again.

How strongly a material polarizes is measured by its **dielectric constant** $$\kappa$$ (Table 8.1). A ball of radius $$a$$ in a uniform field $$E$$ gets a dipole moment

$$p = 4\pi\varepsilon_0\,a^3\,\frac{\kappa - 1}{\kappa + 2}\,E,$$

a standard result for a dielectric sphere, which we take as given. For a metal ball the factor $$(\kappa - 1)/(\kappa + 2)$$ becomes 1. The field of the rod's tip, a charge $$q$$ at distance $$D$$ from the ball's centre, is $$E = kq/D^2$$. A dipole along a field that changes with distance feels a force $$p\,dE/dD$$, and $$dE/dD = -2kq/D^3$$, so the ball is pulled toward the rod with

$$F_{\text{dip}} = \frac{2kq^2a^3}{D^5}\,\frac{\kappa - 1}{\kappa + 2}.$$

Three things stand out: the force does not depend on the sign of $$q$$ and grows as $$q^2$$; it falls as $$1/D^5$$, far faster than Coulomb's $$1/D^2$$; and a material with a larger $$\kappa$$ is pulled harder, up to the limit of a metal. The formula is the first term of a series. When the ball is close to the rod the field changes noticeably across the ball, higher multipoles add to the pull, and the measured force is larger than $$F_{\text{dip}}$$.

The balance reads a mass. A pull $$F$$ upward lowers the reading by $$F/g$$, so with the reading $$m$$ in milligrams,

$$F = -m\,g,\qquad F\ (\mu\text{N}) = -9.81 \times m\ (\text{mg}).$$

**Apparatus constants.** Ball radius $$a = 2.00$$ cm, so $$D = a + s$$ for a gap $$s$$ between the rod's tip and the top of the ball. $$k = 8.988\times10^9$$ N·m²/C².

## Before the lab

1. Predict $$F_{\text{dip}}$$ for the polystyrene ball ($$\kappa = 2.56$$) with $$q = 20$$ nC and a gap of 2.0 cm. What balance reading does that correspond to?
2. Explain in terms of the induced dipole why doubling the rod's charge multiplies the force by four, and why a negative rod attracts the ball just as strongly.
3. By what factor does $$F_{\text{dip}}$$ fall when $$D$$ doubles? Compare with the force between two charges.

## Safety

High voltage sources used to charge real rods can give painful shocks; discharge rods to ground before handling and keep the source's current limited. An analytical balance is delicate: close the draft shield and never lean on the bench. The simulation has no hazards.

## Procedure

**Part 1: the rod's charge.** Use the polystyrene ball and a gap of 2.0 cm. Record the balance reading for rod charges of −20, −16, −12, −8, −4, +4, +8, +12, +16 and +20 nC.

**Part 2: distance.** With the polystyrene ball and +20 nC, record the reading at gaps of 1.5, 2.0, 3.0, 4.0, 5.0, 6.0, 8.0 and 10.0 cm.

**Part 3: materials.** With +20 nC and a gap of 2.0 cm, record the reading for the Teflon, polystyrene, nylon, Pyrex glass, strontium titanate and metal balls, then for the Mystery insulator, all in one series.

**Using the virtual apparatus.** Turn Blind on before you start. Check that the balance reads 0.00 mg with the rod raised, and tare it if not. Wait for the settling ring to go out before each reading. Send each part's readings to the worksheet, then clear them before the next part: Parts 1 and 2 go to the first data table and Part 3, with several balls, to the second.

## Data

**Charge and distance.** One copy of this table for each part. $$a = 2.00$$ cm.

| Reading | Ball | $$q$$ (nC) | Gap $$s$$ (cm) | Balance reading (mg) | $$F$$ (µN) | $$D = a + s$$ (cm) | $$q^2$$ (nC²) | $$\ln(D/1\ \text{cm})$$ | $$\ln(F/1\ \mu\text{N})$$ |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

**Materials.** One copy for Part 3. For metal, $$(\kappa - 1)/(\kappa + 2) = 1$$.

| Reading | Ball | $$q$$ (nC) | Gap $$s$$ (cm) | Balance reading (mg) | $$F$$ (µN) | $$\kappa$$ (Table 8.1) | $$(\kappa - 1)/(\kappa + 2)$$ |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

## Analysis

1. For Part 1, graph $$F$$ against $$q^2$$. Is it a straight line through the origin, and do positive and negative charges of the same size give the same force? From the slope, find the force at 20 nC and compare it with your Before the lab prediction.
2. For Part 2, graph $$\ln F$$ against $$\ln D$$. Find the slope from the three readings with the largest gaps and from the three with the smallest. Which comes closer to −5, and why?
3. For each Part 2 reading, find $$F_{\text{dip}}$$ and the ratio $$F/F_{\text{dip}}$$. How close must the rod be for the dipole formula to be off by more than 10%?
4. For Part 3, graph $$F$$ against $$(\kappa - 1)/(\kappa + 2)$$ for the six known balls. Is the force nearly proportional to it? Why do strontium titanate and metal give almost the same force?
5. Use the Part 3 graph as a calibration: read off the Mystery insulator's $$(\kappa - 1)/(\kappa + 2)$$ from its force, by interpolating between its neighbours, and find its $$\kappa$$. Which material in Table 8.1 could it be?

## Uncertainty

The balance reads to 0.01 mg, about 0.1 µN. That is negligible for readings of tens of milligrams but large for the smallest ones (the far gaps of Part 2 and the small charges of Part 1), so weigh which points to trust in each fit. The geometry is exact in the model; on real apparatus the gap is hard to set to better than about a millimetre, and since $$F$$ varies roughly as $$1/D^5$$ a 1 mm error at $$D = 4$$ cm changes the force by about 12%. Real rods also carry their charge spread along their length, not at a point, and stray charge on the ball or post would add a Coulomb force that does depend on the sign of $$q$$.

## Questions

1. A rubbed balloon sticks to a wall that has no net charge. Explain why, using what you measured.
2. Why does a metal ball behave like an insulator with a very large dielectric constant?
3. Water has $$\kappa = 80$$. Why does a thin stream of water bend toward a charged rod, and why does it bend the same way whichever sign the rod has?
4. If the force varied as $$1/D^2$$, a test far from the rod would find it easily. Use the $$1/D^5$$ law to explain why the attraction of neutral objects is noticed only at close range.
5. Suppose the ball also carried a small net charge. How would the balance reading then depend on the sign of the rod's charge? Show how readings with $$+q$$ and $$-q$$ can be combined to separate the Coulomb force from the polarization force.

## What to hand in

Answers to Before the lab, the data tables, the graphs with residuals and slopes, the ratios $$F/F_{\text{dip}}$$, your value of the Mystery insulator's $$\kappa$$, and answers to the questions. Identify simulated data.
