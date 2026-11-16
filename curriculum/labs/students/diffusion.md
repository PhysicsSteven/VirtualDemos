# Diffusion and Graham's Law
Student laboratory · Thermodynamics

Textbook: OpenStax *University Physics*, Vol. 2, §§2.2 and 2.4. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/ideal-gas.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** this worksheet uses the four setups under "Two gases and a divider": Two gases mix; Light and heavy; Through a small hole; Hot meets cold. The setups above them belong to the Gas in a Box worksheet.

**Using the demo.**

- The box is 50 nm wide and 30 nm high, and the gas is two dimensional: its molecules are hard disks that move in one plane and bounce off each other and the walls without losing energy. Gas A (blue) starts in the left half and gas B (red) in the right half, behind a thin divider at the middle. For each gas you choose the mass (in atomic mass units u: helium 4, neon 20, argon 40, krypton 84, xenon 131), the diameter, the temperature and the number of molecules. Changing a gas starts again with the divider closed.
- Above the box, the divider can be closed, have a hole in the middle, or be removed. The moment you open it is time zero, and the clock, the counts and the graphs start there. One second on screen is 80 ps of the molecules' time.
- A molecule goes through the hole only if it fits, so the opening its center can use is the hole width minus the diameter. One that clips an edge of the hole bounces as off the divider.
- A molecule counts as being on the side its center is on. The **Mixing** graph shows the number of A molecules on the right and B molecules on the left; the dashed lines are half of each gas, where the counts end up when the gases are fully mixed.
- The **Spreading** graph shows each gas's mean square displacement, the average of $$(\Delta x)^2 + (\Delta y)^2$$ since time zero. A bounce off a wall or the divider is counted as if the molecule went on into a mirror image of the box. A box with mirror walls behaves exactly like an endless gas made of mirror copies of the box, so this is how far a molecule wanders in that endless gas, and the walls do not cap it. The **Speeds** graph shows each gas's speeds with the two dimensional Maxwell and Boltzmann curve at that gas's temperature.
- Record reading stores the present moment of the run. **Record the run** stores a row every 2, 5, 10, 20, 50 ps or more (the shortest step that gives at most 40 rows) from time zero to now; pause first if you want a round end time. Each row has the time, the counts on each side, both mean square displacements, the temperature on each side and the settings. Export to worksheet sends the readings to the Data table below, with the settings written once, in the first row; Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Watch two gases mix, measure how fast molecules spread (the diffusion coefficient), see how that depends on temperature and mass, and test Graham's law for gases leaking through a small hole.

## Background

A molecule in a gas moves in a straight line until it hits another, a distance called the mean free path (§2.2). In three dimensions $$\lambda = 1/(4\sqrt{2}\,\pi r^2 n)$$ with $$n$$ the number per volume. For disks of diameter $$d$$ moving in a plane, with $$n$$ the number per area, the same argument gives

$$\lambda = \frac{1}{2\sqrt{2}\,n d}.$$

After many collisions a molecule's path is a random walk. Its mean square displacement then grows in proportion to the time, and in two dimensions

$$\langle r^2 \rangle = 4Dt,$$

which defines the diffusion coefficient $$D$$. For the first few collisions the molecule still moves in nearly a straight line, so $$\langle r^2 \rangle$$ starts out growing as $$t^2$$. A rough kinetic theory estimate, steps of length $$\lambda$$ taken at the mean speed $$\bar v$$, is $$D \approx \tfrac12 \lambda \bar v$$ in two dimensions. The mean speed in two dimensions is

$$\bar v = \sqrt{\frac{\pi k_B T}{2m}}.$$

Lighter molecules move faster (§2.4). When a gas leaks through a hole much smaller than its mean free path (effusion), molecules cross one at a time and the rate is the number that happen to arrive at the opening. In two dimensions, through an opening of width $$w$$, that rate is $$n w \sqrt{k_B T/(2\pi m)}$$. At the same number density and temperature, the rates of two gases are in the ratio

$$\frac{\text{rate}_1}{\text{rate}_2} = \sqrt{\frac{m_2}{m_1}}$$

(Graham's law). With a hole between two halves of area $$A_\text{half}$$, a gas that starts with all $$N$$ of its molecules on one side has $$n(t)$$ on the far side with $$dn/dt = k\,[(N - n) - n]$$, where $$k = w\sqrt{k_B T/(2\pi m)}/A_\text{half}$$, so

$$\ln\left(1 - \frac{2n}{N}\right) = -2kt.$$

## Before the lab

1. Find the mean speed of argon (40 u) and of helium (4 u) molecules at 300 K in two dimensions, and their ratio.
2. In Two gases mix there are 300 disks 0.50 nm across in the 50 nm by 30 nm box. Find the mean free path, and the estimate $$\tfrac12\lambda\bar v$$ of $$D$$ for argon at 300 K.
3. In this model the molecules are hard disks, so they exert no force until they touch. If every speed is doubled, the molecules follow exactly the same paths in half the time. Use that to predict how $$D$$ depends on $$T$$ for a single gas. Then decide about Light and heavy, where helium (4 u) and argon (40 u) mix in one box at 300 K: will helium's $$D$$ come out $$\sqrt{10} = 3.16$$ times argon's, more than that, or less?
4. In Through a small hole, 200 molecules 0.30 nm across at 300 K start in the left half (750 nm²) and leak through a hole 1.5 nm wide. Predict the slope of $$\ln(1 - 2n/N)$$ against $$t$$ for helium (4 u) and for argon (40 u), and their ratio.

## Safety

No hazards in the virtual lab.

## Procedure

**Mixing and spreading.** Press the Two gases mix button (under Two gases and a divider), then press Removed in the Divider buttons above the box. Let the run go to at least 400 ps on the clock, press Pause, then press Record the run (it records from 0 ps to now) and Export to worksheet.

**Temperature.** Press Clear. Set the Temperature slider to 1000 K on both the Gas A, left half and Gas B, right half cards (changing a gas closes the divider again), press Removed, and record the run to 400 ps as before. Press Export to worksheet.

**Light and heavy.** Press Clear once the 1000 K run is exported. Press the Light and heavy button, press Removed, record the run to 400 ps and export it.

**Through a small hole.** Press Clear once the Light and heavy run is exported. Press the Through a small hole button (helium on the left, the right half empty, Hole width 1.5 nm), press Hole in the Divider buttons, and record the run to 1000 ps. Export it and Clear. Set the Mass slider on the Gas A card to 40 u (argon), press Hole again and record the run to 2000 ps, since argon leaks more slowly. Export it.

**Hot meets cold.** Press the Hot meets cold button and then Removed, and watch the temperature on each side and the counts (the Mixing graph) for a few hundred ps. Nothing to record; Question 1 asks what you saw.

## Data

| Reading | Divider and gases | Time $$t$$ (ps) | A on the right $$n_\mathrm{A}$$ | B on the left $$n_\mathrm{B}$$ | Mean square displacement of A (nm²) | Mean square displacement of B (nm²) | $$\ln(1 - 2n_\mathrm{A}/N_\mathrm{A})$$ |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

### Diffusion coefficients

| Run | Gas | Temperature $$T$$ (K) | Slope of mean square displacement against $$t$$ (nm²/ps) | $$D$$ = slope/4 (nm²/ps) | √T (√K) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. For the Mixing and spreading run, graph the mean square displacement of A (vertical) against $$t$$ (horizontal), and then of B. Fit the straight part and find $$D$$ = slope/4 for each. Do the two gases agree? Compare them with the estimate $$\tfrac12\lambda\bar v$$ from Before the lab 2.
2. Find $$D$$ for both gases at 1000 K from their table copy, as in Analysis 1. The two gases are the same, so enter the mean of A and B at 1000 K, and at 300 K from the Mixing and spreading run, in the Diffusion coefficients table. Find the ratio of $$D$$ at 1000 K to $$D$$ at 300 K and compare it with $$\sqrt{1000/300}$$, the prediction in Before the lab 3.
3. For Light and heavy, find $$D$$ for each gas (enter them in another copy of the Diffusion coefficients table) and their ratio. Compare the ratio with $$\sqrt{m_\mathrm{B}/m_\mathrm{A}}$$.
4. For the two hole runs, fill in the last column ($$N_\mathrm{A}$$ = 200) and graph it (vertical) against $$t$$ (horizontal). Compare each slope with your prediction in Before the lab 4, then find the ratio of the two slopes and compare it with Graham's law.

## Uncertainty

Each count and each mean square displacement averages over a hundred or two molecules, so a run is noisy, and the points of one run are not independent of each other: the standard error a fit reports is too small. In Two gases mix, A and B are the same gas, so the difference between their two values of $$D$$ in one run is a fair measure of the uncertainty of one value. Use the same relative uncertainty for each slope of the two hole runs, whose counts are as noisy as those of Two gases mix.

## Questions

1. In Hot meets cold, both sides have the same number of molecules, so the hot side starts at the higher pressure. Describe what you saw happen to the counts and to the temperature on each side.
2. How did Light and heavy treat your choice in Before the lab 3? Explain the ratio you found in Analysis 3 by thinking about which molecules a helium molecule and an argon molecule each collide with. Why are the two hole runs a different situation?

## What to hand in

Prelab answers, the table copies with their graphs and fits, your diffusion coefficients and slope ratios with uncertainties and comparisons, and the answers to the questions. Identify simulated data.
