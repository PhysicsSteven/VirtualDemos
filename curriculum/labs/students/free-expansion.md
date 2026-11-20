# Free Expansion and the Arrow of Time
Student laboratory · Thermodynamics

Textbook: OpenStax *University Physics*, Vol. 2, §§4.1 and 4.7. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/entropy.html?setup=fe4)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Four molecules; A hundred molecules (these two use the Free expansion view, the subject of this worksheet); Small solids; Hot solid meets cold (the Einstein solids worksheet); A real engine; Beats Carnot?; Perfect engine; Perfect refrigerator (the Second law worksheet).

**Using the demo.**

- The Free expansion view has a model gas of N hard disks in an insulated box twice as wide as it is tall. A partition keeps them in the left half until you remove it. You choose N, from 2 to 200.
- The disks bounce off the walls and each other without losing energy, so the total kinetic energy, and the temperature, stay the same. Removing the partition does no work and lets no heat in or out.
- The shares of time are counted from the first moment the count on the left falls to half or less, so the first rush out of the left half is left out. The meters show the count on the left now, the share of the counted time that all the molecules have been on the left, and the time since the partition was removed.
- The graphs show the count on the left against time, and the share of time spent at each count. The dots on the second graph are the share of all left or right arrangements that put n on the left; Blind hides them.
- This is a picture of the idea: the disks are far bigger and fewer than real molecules, and time runs on the model's own clock. Because the disks take up room, arrangements crowded into one half come up a little less often than the count of arrangements says: with ten disks, all on the left about 0.0008 of the time rather than 1/1024. At 1× the model clock runs 0.5 s each second (the line above the stage says so); the speed buttons run it 1, 10 or 100 times faster.
- Record reading stores the share of time at every count, one row per count, for the run so far. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Reset puts the partition back with a fresh arrangement.

</details>

## Goal

See why a gas spreads through its container and never gathers back by itself, by counting the ways its molecules can be arranged.

## Background

In a **free expansion** a gas rushes into an empty space, with no work done and no heat exchanged. It is irreversible: the gas never collects itself back in half the box (§4.1).

Count the arrangements. Each of N molecules can be in the left or right half, so there are $$2^N$$ left or right arrangements, all equally likely once the gas has spread out. The number of them with exactly $$n$$ on the left is

$$\Omega(n) = \binom{N}{n} = \frac{N!}{n!\,(N-n)!},$$

so the share of the time spent with $$n$$ on the left is $$\Omega(n)/2^N$$. The arrangement with all N on the left is just one of $$2^N$$.

Entropy measures the number of ways, $$S = k\ln\Omega$$ (Boltzmann; beyond the book). Doubling the volume doubles the places each molecule can be, so the entropy rises by $$Nk\ln 2$$, which is $$nR\ln 2$$ for $$n$$ moles. That is the textbook's result for free expansion, $$\Delta S = nR\ln(V_2/V_1)$$ (§4.7, Example 4.8).

## Before the lab

1. List all the left or right arrangements of four molecules labeled a, b, c, d. How many have 0, 1, 2, 3 and 4 on the left?
2. What share of the time do you expect all four to be on the left?
3. What is the chance that all of 100 molecules are on the left at one moment?
4. Find the entropy change when one mole of gas expands freely to twice its volume.
5. A hundred molecules have spread through the whole box. Exactly 50 on the left is the most likely count. About what share of the time do you think the count on the left is exactly 50: nearly all of it, about half, about a quarter, or under one time in ten?

## Safety

No hazards in the virtual lab.

## Procedure

**Four molecules.** Press Free expansion at the top of the picture, then the Four molecules button under Setups. Press Remove the partition, press 100× and Play, and let the gas run until the Time since opened meter passes 2000 s. Press Record reading (it stores one row per count on the left).

**More molecules.** Press Export to worksheet and Clear. Set the Number of molecules N slider to 10, press Remove the partition and Play, and run for at least 5000 s. Record a reading.

**A hundred molecules.** Press Export to worksheet and Clear, then press the A hundred molecules button, press Remove the partition and Play, and watch the count on the left. Run for at least 500 s, press Record reading and Export to worksheet.

## Data

| Count on the left $$n$$ | Time at $$n$$ (s) | Share of time | Ways $$\binom{N}{n}$$ | Predicted share $$\binom{N}{n}/2^N$$ |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

Record N and the Time counted meter for each copy of the table. Fill in the last two columns yourself: every row for four and ten molecules, and for a hundred molecules only the rows $$n$$ = 40, 45, 50, 55 and 60.

## Analysis

1. Fill in the last two columns: every row of the four and ten molecule runs, and the rows $$n$$ = 40, 45, 50, 55 and 60 of the hundred molecule run.
2. Plot the measured share (vertical) against the predicted share (horizontal) for each run (for 100 molecules, the five rows you filled in). What slope and intercept do you expect, and what do you find?
3. For four molecules, compare the share of time with all on the left with $$1/16$$. For ten molecules, compare it with $$1/1024$$.
4. For 100 molecules, compare your predicted shares at $$n$$ = 40, 45, 50, 55 and 60 with the measured shares. How does the spread of the counts compare with N?
5. Find the entropy change $$Nk\ln 2$$ for each run, and for one mole.

## Questions

1. With four molecules the gas often gathers on the left by itself. Is the free expansion of four molecules irreversible?
2. The laws of motion work the same forwards and backwards in time. Why, then, does a gas spread out but never gather back?
3. A real gas has about $$10^{22}$$ molecules in a liter. Estimate how often all of them would be found in one half.
4. Why does the gas's temperature stay the same in a free expansion, even though its entropy rises?
5. Find the row $$n$$ = 50 of your hundred molecule run and hold its share of time up against your guess in Before the lab 5. Explain why the share comes out as it does, using the number of ways $$\binom{N}{n}$$ for the counts near 50 and the spread you found in Analysis 4, and say what "evenly spread" can mean for a gas of a hundred molecules.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The shares come from a run of finite length, so they scatter about the predicted values. Press Four molecules, Remove the partition and Play, and record a reading when Time since opened passes 200 s. Compare its scatter about the predicted shares with that of your 2000 s run; how does it change? Then watch a stretch of 300 s at 10× (30 s of your time), count roughly how many separate times all four molecules gathered on the left, and use that count $$k$$ to estimate the relative uncertainty $$1/\sqrt{k}$$ of the share of time all four were on the left. How would the uncertainty change over the whole 2000 s?

Give the slope and intercept of each graph from Analysis 2 with their standard errors, and say whether each slope agrees with 1 and each intercept with 0 within them.

## With calculus

For courses that use calculus. This section is not counted in the 75 minutes; do it when your instructor assigns it.

1. No heat flows in a free expansion, yet the entropy rises, so $$\int dQ/T$$ along the free expansion itself does not give $$\Delta S$$. Entropy depends only on the state, so take the gas between the same two states along a reversible isotherm at $$T$$ instead. Use the first law ($$\Delta U = 0$$, so $$dQ = P\,dV$$) and $$PV = nRT$$ to integrate $$dS = dQ/T$$ from $$V_1$$ to $$V_2$$ and show that $$\Delta S = nR\ln(V_2/V_1)$$. Check that for N molecules and $$V_2 = 2V_1$$ this equals $$k\ln 2^N$$, the Background's count of arrangements.
2. For large N, treat $$n$$ as continuous. Use Stirling's approximation, $$\ln N! \approx N\ln N - N$$, to write $$\ln\Omega(n)$$, and differentiate it twice with respect to $$n$$: show that the first derivative is zero at $$n = N/2$$ and the second is $$-4/N$$ there. A Taylor expansion then gives $$\Omega(N/2 + x) \approx \Omega(N/2)\,e^{-2x^2/N}$$. For N = 100, predict the share at $$n$$ = 45 and at $$n$$ = 40 as fractions of the share at $$n$$ = 50, and compare with your hundred molecule run (use the mean of the 45 and 55 rows, and of the 40 and 60 rows). Then, since the shares add up to 1, use $$\int_{-\infty}^{\infty} e^{-ax^2}\,dx = \sqrt{\pi/a}$$ to predict the share at $$n$$ = 50 and compare it with $$\binom{100}{50}/2^{100}$$ and with your reading.

## What to hand in

Prelab answers, the table copies with their graphs, the comparisons with the predicted shares, the entropy changes, and answers to the questions (and to Uncertainty and With calculus, if assigned). Identify simulated data.
