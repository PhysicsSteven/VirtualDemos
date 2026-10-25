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
3. In this model the molecules are hard disks, so they exert no force until they touch. If every speed is doubled, the molecules follow exactly the same paths in half the time. Use that to predict how $$D$$ depends on $$T$$ and on $$m$$ for a single gas.
4. In Through a small hole, 200 molecules 0.30 nm across at 300 K start in the left half (750 nm²) and leak through a hole 1.5 nm wide. Predict the slope of $$\ln(1 - 2n/N)$$ against $$t$$ for helium (4 u) and for argon (40 u), and their ratio.

## Safety

No hazards in the virtual lab.

## Procedure

**Mixing and spreading.** Choose Two gases mix, remove the divider, and let the run go to at least 400 ps. Pause, record the run from 0 to 400 ps and send it to the worksheet.

**Temperature.** Clear the readings. Set both gases to 150 K, remove the divider and record the run to 400 ps. Send it, clear, and repeat with both gases at 600 K and at 1000 K. Changing a gas closes the divider again.

**Light and heavy.** Clear the readings. Choose Light and heavy, remove the divider and record the run to 400 ps.

**Through a small hole.** Clear the readings. Choose Through a small hole (helium on the left, the right half empty), open the hole and record the run to 1000 ps. Send it and clear. Make gas A argon (40 u), open the hole again and record the run to 2000 ps, since argon leaks more slowly.

**Hot meets cold.** Choose Hot meets cold, remove the divider and watch the temperature on each side and the counts for a few hundred ps. Nothing to record.

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

1. For the Mixing and spreading run, graph the mean square displacement of A against $$t$$, and then of B. Find $$D$$ for each from the slope. Do the two gases agree? Compare them with the estimate $$\tfrac12\lambda\bar v$$ from Before the lab 2.
2. Where the graph bends at the start, how long does it take before the straight line fits? Compare that time with the mean free time $$\lambda/\bar v$$.
3. For diffusion along a box of length $$L$$ with walls at the ends, the share of gas A that has reached the right half is $$\tfrac12 - \tfrac{4}{\pi^2}e^{-t/\tau}$$ once $$t$$ is more than about $$\tau/4$$, with $$\tau = L^2/(\pi^2 D)$$. Find $$\tau$$ for $$L$$ = 50 nm from your $$D$$, predict $$n_\mathrm{A}$$ at $$t = \tau$$, and compare with your table.
4. Find $$D$$ for both gases at 150, 600 and 1000 K. The two gases are the same, so enter the mean of A and B at each temperature, and at 300 K, in the Diffusion coefficients table, and graph $$D$$ against √T. Is it a straight line through the origin? Compare with your prediction in Before the lab 3.
5. For Light and heavy, find $$D$$ for each gas (enter them in another copy of the Diffusion coefficients table) and their ratio. Is the ratio as large as $$\sqrt{m_\mathrm{B}/m_\mathrm{A}}$$? Explain why not, thinking about which molecules each one collides with.
6. For the two hole runs, fill in the last column ($$N_\mathrm{A}$$ = 200) and graph it against $$t$$. Compare each slope with your prediction in Before the lab 4, then find the ratio of the two slopes and compare it with Graham's law.

## Uncertainty

Each count and each mean square displacement averages over a hundred or two molecules, so a run is noisy, and the points of one run are not independent of each other: the standard error a fit reports is too small. In Two gases mix, A and B are the same gas, so the difference between their two values of $$D$$ in one run is a fair measure of the uncertainty of one value. Repeat the helium hole run twice more (each start places the molecules afresh) and use the spread of the three slopes as the uncertainty of one slope; assume the same relative spread for argon.

## Questions

1. Why does the mean square displacement grow as $$t^2$$ for the first few picoseconds and as $$t$$ later?
2. Graham's law needs the hole to be much smaller than the mean free path. Try a 6 nm hole with helium. Is the leak still $$n w\sqrt{k_B T/(2\pi m)}$$, and why might it not be?
3. Put 200 molecules of argon (40 u, 0.30 nm) in the right half as well, with helium on the left, and open the 1.5 nm hole. Does each gas still leak at the rate it had alone? What could the stream of helium coming through the hole do to argon molecules on their way in?
4. In Hot meets cold, both sides have the same number of molecules, so the hot side starts at the higher pressure. Describe what you saw happen to the counts and to the temperature on each side.
5. Helium leaks out of a party balloon much faster than air leaks in. Explain with Graham's law.
6. Uranium was once enriched by letting UF₆ gas diffuse through porous barriers. The masses of ²³⁵UF₆ and ²³⁸UF₆ are 349 u and 352 u. By what factor does one pass through a barrier change the ratio of the two, and why did the plants need over a thousand stages?

## What to hand in

Prelab answers, the table copies with their graphs and fits, your diffusion coefficients and slope ratios with uncertainties and comparisons, and answers to the questions. Identify simulated data.
