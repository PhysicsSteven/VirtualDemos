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

- A uniform, linear dielectric ball with the dielectric constant of Table 8.1 of the textbook (the metal ball is a perfect conductor), and the rod's tip as a point charge on the line through the ball's center.
- The force is the exact solution for a ball and a point charge, summed over every multipole, not only the induced dipole. The balance converts force to mass with $$g = 9.81$$ m/s². The rest of the rod, the post and the balance are left out of the electrostatics.
- The molecules in the picture are drawn huge and their stretching is exaggerated. The marks around the ball show the bound surface charge (free charge on the metal ball).

</details>

## Goal

Measure the force with which a charged rod attracts a neutral insulating ball, find how it depends on the rod's charge, on the distance and on the material, and use it to find the dielectric constant of an unknown insulator.

## Background

A charged object attracts a neutral one, conductor or insulator. In a conductor, free electrons move to the near side. In an insulator no charge moves through the material, but each molecule is **polarized**: its electron cloud is pulled a little one way and its nuclei the other, or a polar molecule turns to line up with the field. The side of the ball facing a positive rod ends up with a thin layer of negative **bound charge** and the far side with an equal layer of positive bound charge. The ball stays neutral, but its negative side is closer to the rod, where the field is stronger, so the attraction wins. Turn the rod negative and every molecule turns round: the ball is attracted again.

How strongly a material polarizes is measured by its **dielectric constant** $$\kappa$$ (Table 8.1). A ball of radius $$a$$ in a uniform field $$E$$ gets a dipole moment

$$p = 4\pi\varepsilon_0\,a^3\,\frac{\kappa - 1}{\kappa + 2}\,E,$$

a standard result for a dielectric sphere, which we take as given. For a metal ball the factor $$(\kappa - 1)/(\kappa + 2)$$ becomes 1. The field of the rod's tip, a charge $$q$$ at distance $$D$$ from the ball's center, is $$E = kq/D^2$$. A dipole along a field that changes with distance feels a force $$p\,dE/dD$$, and $$dE/dD = -2kq/D^3$$, so the ball is pulled toward the rod with

$$F_{\text{dip}} = \frac{2kq^2a^3}{D^5}\,\frac{\kappa - 1}{\kappa + 2}.$$

Three things stand out: the force does not depend on the sign of $$q$$ and grows as $$q^2$$; it falls as $$1/D^5$$, far faster than Coulomb's $$1/D^2$$; and a material with a larger $$\kappa$$ is pulled harder, up to the limit of a metal. The formula is the first term of a series. When the ball is close to the rod the field changes noticeably across the ball, higher multipoles add to the pull, and the measured force is larger than $$F_{\text{dip}}$$.

The balance reads a mass. A pull $$F$$ upward lowers the reading by $$F/g$$, so with the reading $$m$$ in milligrams,

$$F = -m\,g,\qquad F\ (\mu\text{N}) = -9.81 \times m\ (\text{mg}).$$

**Apparatus constants.** Ball radius $$a = 2.00$$ cm, so $$D = a + s$$ for a gap $$s$$ between the rod's tip and the top of the ball. $$k = 8.988\times10^9$$ N·m²/C².

## Before the lab

1. Predict $$F_{\text{dip}}$$ for the polystyrene ball ($$\kappa = 2.56$$) with $$q = 20$$ nC and a gap of 2.0 cm. What balance reading does that correspond to?
2. By what factor does $$F_{\text{dip}}$$ fall when $$D$$ doubles? Compare with the force between two charges.
3. At +20 nC the rod pulls the neutral polystyrene ball toward it. Make the rod −20 nC at the same gap. Is the ball pulled as hard as before, less hard, not at all, or pushed away? Give your reason.

## Safety

High voltage sources used to charge real rods can give painful shocks; discharge rods to ground before handling and keep the source's current limited. An analytical balance is delicate: close the draft shield and never lean on the bench. The simulation has no hazards.

## Procedure

**Using the virtual apparatus.** Press Attracting a neutral insulator under Setups and turn on Blind: hide predictions and answers. With Charged rod lowered unticked (rod raised), check that the balance reads 0.00 mg, and press Tare the balance if not. For each reading set the sliders, wait for the settling ring on the balance to go out, then press Record reading. After each part press Export to worksheet, then Clear: Parts 1 and 2 go to the first data table and Part 3, with several balls, to the second.

**Part 1: the rod's charge.** Press the Polystyrene ball, tick Charged rod lowered, and set Gap from the rod tip to the ball to 2.0 cm. Record the balance reading with the Rod charge slider (1 nC steps) at +4, +8, +12, +16, +20 and −20 nC.

**Part 2: distance.** With the polystyrene ball and Rod charge +20 nC, record the reading with Gap from the rod tip to the ball at 1.5, 2.0, 3.0, 5.0, 8.0 and 10.0 cm.

**Part 3: materials.** With +20 nC and a gap of 2.0 cm, record the reading for the Teflon, polystyrene, nylon, Pyrex glass, strontium titanate and metal balls, then for the Mystery insulator, all in one series: press each ball's button and Record reading, without pressing Clear in between.

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

1. For Part 1, graph $$F$$ against $$q^2$$. Is it a straight line through the origin? From the slope, find the force at 20 nC and compare it with your Before the lab prediction.
2. For Part 2, graph $$\ln F$$ against $$\ln D$$. Find the slope from the three readings with the largest gaps and from the three with the smallest. Which comes closer to −5, and why?
3. For each Part 2 reading, find $$F_{\text{dip}}$$ and the ratio $$F/F_{\text{dip}}$$. How close must the rod be for the dipole formula to be off by more than 10%?
4. For Part 3, graph $$F$$ against $$(\kappa - 1)/(\kappa + 2)$$ for the six known balls. Is the force nearly proportional to it? Why do strontium titanate and metal give almost the same force?
5. Use the Part 3 graph as a calibration: read off the Mystery insulator's $$(\kappa - 1)/(\kappa + 2)$$ from its force, by interpolating between its neighbors, and find its $$\kappa$$. Which material in Table 8.1 could it be?

## Questions

1. Your Part 1 balance readings at +20 and −20 nC settle Before the lab 3. What did they show? Explain it with the bound charge on the ball's two sides. Which way does a thin stream of water ($$\kappa = 80$$) bend near a positive rod, and near a negative one, and why? Suppose the ball also carried a small net charge: how would the readings at $$+q$$ and $$-q$$ then differ, and how could you combine them to separate the Coulomb force from the polarization force?

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The balance reads to 0.01 mg, about 0.1 µN. That is negligible for readings of tens of milligrams but large for the smallest ones (the far gaps of Part 2 and the small charges of Part 1), so weigh which points to trust in each fit. The geometry is exact in the model; on real apparatus the gap is hard to set to better than about a millimeter, and since $$F$$ varies roughly as $$1/D^5$$ a 1 mm error at $$D = 4$$ cm changes the force by about 12%. Real rods also carry their charge spread along their length, not at a point, and stray charge on the ball or post would add a Coulomb force that does depend on the sign of $$q$$. Since $$F_{\text{dip}}$$ goes as $$D^{-5}$$, a 1% error in $$D$$ gives about a 5% error in the force. Which pair of neighboring Part 2 readings is the least reliable, given the balance's resolution? How much would your Mystery insulator's $$\kappa$$ change if its force were off by 5 µN?

## With calculus

For courses that use calculus. This section is not counted in the 75 minutes; do it when your instructor assigns it.

1. An induced dipole $$p = \alpha E$$, with $$\alpha = 4\pi\varepsilon_0a^3(\kappa - 1)/(\kappa + 2)$$, has energy $$U = -\tfrac12\alpha E^2$$ in the rod's field. With $$E = kq/D^2$$, find the force $$F = -dU/dD$$ and show that it is the Background's $$F_{\text{dip}}$$, pulling the ball toward the rod. Then differentiate $$\ln F_{\text{dip}}$$ to show that the force goes as $$D^{-5}$$.
2. The local slope of the graph of $$\ln F$$ against $$\ln D$$, $$n = d(\ln F)/d(\ln D)$$, can be estimated between neighboring Part 2 readings as $$\ln(F_2/F_1)/\ln(D_2/D_1)$$. Work it out for each neighboring pair and list it against $$\sqrt{D_1D_2}$$. How does $$n$$ approach −5 as the ball moves away?
3. Invert $$x = (\kappa - 1)/(\kappa + 2)$$ to get $$\kappa(x)$$, and find $$d\kappa/dx$$. Using the slope $$\Delta F/\Delta x$$ between Pyrex glass and strontium titanate in your Part 3 table, estimate how much your Mystery insulator's $$\kappa$$ changes for each 1 µN change in its force.

## What to hand in

Answers to Before the lab, the data tables, the graphs with residuals and slopes, the ratios $$F/F_{\text{dip}}$$, your value of the Mystery insulator's $$\kappa$$, and answers to the questions (and to Uncertainty and With calculus, if assigned). Identify simulated data.
