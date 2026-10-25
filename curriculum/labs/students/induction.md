# Charging by Induction
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§5.1, 5.2 and 6.4. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/induction.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Using the demo.**

- Two metal spheres on insulating stands, A (radius 5 cm) and B, and a charged rod: glass rubbed with silk (positive) or rubber rubbed with fur (negative). Everything works by hand on the picture: drag the rod anywhere near the spheres, slide either sphere along the bench (pushed together, they touch), and touch a sphere with the ground wand to ground it. The color on each sphere and the marks around it change as you move things, and moving dots show electrons flowing through the contact, a wire or the ground lead (drawn slowed down). Each setup also has a sequence of steps (Next step, Start over) that moves the apparatus for you; changing anything yourself leaves the steps. Changing a control keeps the charges the spheres already have.
- The color on each sphere and the marks around it show the surface charge density; the readouts give the net charge on each sphere and its potential, as an electrometer would. Record reading stores the setup, the rod's charge and distance, B's radius, the gap, the connections, both net charges and $$R/(R+d)$$; Export to worksheet sends the readings here.
- Blind hides the net charges and potentials, leaving the marks. Keep it off for this lab.

**What the demo models.**

- Perfect conductors, the rod's charge as a point charge at its tip, $$k = 1/(4\pi\varepsilon_0)$$. A grounded sphere is held at zero potential; a sphere on its own stand keeps its net charge; joined spheres share one potential. The charges are found exactly with Kelvin's image charges at every position, including the pull of each sphere on the other's charge. Touching spheres are solved 0.5 mm apart. The bench, stands, wand and leads are left out of the electrostatics. The readouts also give the strongest field at each sphere's surface; above about $$3 \times 10^6\ \text{V/m}$$ air would spark.

</details>

## Goal

Charge a metal sphere without touching it, measure how the charge it gets depends on the rod's charge and distance, and compare with the image charge result. Compare charging by induction with charging by contact.

## Background

In a conductor, free electrons move until the field inside is zero, so a conductor in equilibrium is at one potential. A charged rod near a neutral sphere pulls charge of the opposite sign to the near side and pushes the same sign to the far side: the sphere is polarized but still neutral.

If the sphere is connected to ground while the rod is near, charge flows to or from the Earth until the sphere is at zero potential. For a lone sphere of radius $$R$$ with a point charge $$q$$ at distance $$D = R + d$$ from its center ($$d$$ from its surface), the sphere at zero potential carries exactly

$$Q = -q\,\frac{R}{D} = -q\,\frac{R}{R+d}.$$

(This is Kelvin's image charge: the field outside the grounded sphere is that of $$q$$ and a charge $$-qR/D$$ at distance $$R^2/D$$ from the center.) If the ground is disconnected first and the rod is then removed, the sphere keeps this charge, which spreads evenly over it. Removing the rod first lets the charge flow back, and the sphere ends up neutral.

Two touching spheres are one conductor. Separated in the rod's field, they keep equal and opposite charges. When a charged sphere touches a neutral one, charge flows until both are at the same potential. Joined by a long wire far apart, each sphere has $$V = kQ/R$$, so the charges share in the ratio of the radii; touching, each sphere's charge pushes on the other's and the shares are different.

## Before the lab

1. A positive rod is brought near a neutral sphere on an insulating stand. Sketch the charge on the sphere. Is there a net force on the sphere? Which way?
2. In charging by grounding, why must the ground be disconnected before the rod is taken away?
3. A rod carrying +10 nC has its tip 5 cm from the surface of a grounded sphere of radius 5 cm. Calculate the charge on the sphere.
4. Sphere A (5 cm) carries +10 nC; sphere B (3 cm) is neutral. They are joined by a long thin wire, far apart. Find the charge on each.

## Safety

On a real bench, a Van de Graaff or a charged rod can give a painful shock. Discharge spheres through a grounding rod, not your hand, and keep the apparatus away from electronics.

## Procedure

Keep Blind off: the readings are the net charges. Record each reading at the end of its sequence, with the rod removed unless the part says otherwise.

**Part 1: charging by grounding, rod distance.** In the grounding setup, with the rod at +10 nC, charge sphere A by grounding (bring the rod near, connect A to ground, disconnect the ground, take the rod away) for rod distances $$d$$ = 1, 2, 4, 6, 10, 15, 20 and 30 cm. Start the sequence over for each distance. Send these readings to the worksheet, then clear the demo's readings.

**Part 2: rod charge.** At $$d = 5\ \text{cm}$$, repeat the grounding sequence for rod charges of −20, −10, +5, +10 and +20 nC. Send this series, then clear. Then, at +10 nC, take the rod away before you disconnect the ground, and write what A ends up with in the table's notes.

**Part 3: two spheres by induction.** In the two sphere setup, charge A and B by induction (spheres touching, bring the rod near A, pull B away, take the rod away) with the rod at +10 nC and $$d$$ = 2, 5, 10 and 20 cm. Send this series, then clear.

**Part 4: sharing by contact.** In the contact setup, give A +10 nC with B neutral and apart. For B's radius = 1, 2, 3, 5, 7 and 10 cm, touch the spheres together, separate them again, and record. Start the sequence over before each new radius, since it resets the charges. Send this series, then clear.

**Part 5: joined far apart.** Repeat Part 4, but instead of touching, join the spheres while they are 40 cm apart (the connection is a thin wire whose own charge is neglected), then disconnect them. Send this series.

## Data

| Trial | Setup | Rod charge (nC) | $$d$$ (cm) | Radius of B (cm) | Gap (cm) | Connections | $$Q_A$$ (nC) | $$Q_B$$ (nC) | $$R/(R+d)$$ |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

Keep each part in its own copy of the table, labeled with the part.

## Analysis

1. Part 1: plot $$Q_A$$ against $$R/(R+d)$$ and fit a line. Compare the slope with $$-q$$ and the intercept with zero.
2. Part 2: plot $$Q_A$$ against the rod charge and fit a line. Compare the slope with $$-R/(R+d)$$. What did A end up with when the rod was removed first, and why?
3. Part 3: compare $$Q_A$$ and $$Q_B$$ for each distance. Is charge conserved? Compare $$\lvert Q_A\rvert$$ with the grounded sphere's charge at the same $$d$$ from Part 1, and explain the difference.
4. Parts 4 and 5: for each radius of B, calculate the fraction of the 10 nC that B ends up with. Plot it against $$R_B/(R_A + R_B)$$ for both parts. Which part follows the ratio of the radii? How does the other part differ when B is smaller than A, and when it is larger?

## Uncertainty

The demo's charges come from the exact image solution, and each reading is recorded to six significant figures, so rounding alone adds scatter of about $$10^{-5}$$ nC. Part 1 is not quite a lone sphere: B stays 40 cm away, neutral, and its pull changes $$Q_A$$ slightly. Estimate how big this effect is from your residuals. On a real bench, the rod is not a point charge, charge leaks away through humid air and the stands, and an electrometer itself has capacitance that takes some of the charge.

## Questions

1. Charging by induction gives the sphere a charge opposite to the rod's; charging by contact gives the same sign. Explain both with the movement of electrons.
2. Why does the grounded sphere's charge become smaller when the rod is farther away, and why is it always smaller in size than the rod's charge?
3. In Part 3, could you give A and B charges of the same sign by induction? Explain.
4. Why does a small sphere touching a large one end up with less than its share by radii?

## What to hand in

Prelab answers, the data tables, the fits for Parts 1 and 2 with their residuals compared with $$-q$$ and $$-R/(R+d)$$, the Part 2 note on the order of the steps, the Part 3 comparison, the Parts 4 and 5 graph, and answers to the questions. Identify simulated data.
