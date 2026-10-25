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
- This is a picture of the idea: the disks are far bigger and fewer than real molecules, and time runs on the model's own clock. The speed buttons run it 1, 10 or 100 times faster.
- Record reading stores the share of time at every count, one row per count, for the run so far. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Start over puts the partition back with a fresh arrangement.

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

## Safety

No hazards in the virtual lab.

## Procedure

**Four molecules.** Start with the Four molecules setup. Remove the partition and let the gas run at 100× until at least 2000 s have passed on the clock. Record a reading.

**More molecules.** Send the reading to the worksheet and clear the readings, then repeat with 10 molecules, running for at least 5000 s.

**A hundred molecules.** Send the reading and clear the readings, then pick A hundred molecules, remove the partition and watch the count on the left. Run for at least 500 s, record a reading and send it.

## Data

| Count on the left $$n$$ | Time at $$n$$ (s) | Share of time | Ways $$\binom{N}{n}$$ | Predicted share $$\binom{N}{n}/2^N$$ |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

Record N and the time counted for each copy of the table.

## Analysis

1. Fill in the last two columns for each run.
2. Plot the measured share against the predicted share for each run. What slope and intercept do you expect, and what do you find?
3. For four molecules, compare the share of time with all on the left with $$1/16$$. For ten molecules, compare it with $$1/1024$$.
4. For 100 molecules, find the predicted share for $$n$$ = 40, 50 and 60. How does the spread of the counts compare with N?
5. Find the entropy change $$Nk\ln 2$$ for each run, and for one mole.

## Uncertainty

The shares come from a run of finite length, so they scatter about the predicted values. Start over with four molecules and record a reading after 200 s. Compare its scatter about the predicted shares with that of your 2000 s run; how does it change? Then watch a stretch of 300 s, count roughly how many separate times all four molecules gathered on the left, and use that count $$k$$ to estimate the relative uncertainty $$1/\sqrt{k}$$ of the share of time all four were on the left. How would the uncertainty change over the whole 2000 s?

## Questions

1. With four molecules the gas often gathers on the left by itself. Is the free expansion of four molecules irreversible?
2. The laws of motion work the same forwards and backwards in time. Why, then, does a gas spread out but never gather back?
3. A real gas has about $$10^{22}$$ molecules in a liter. Estimate how often all of them would be found in one half.
4. Why does the gas's temperature stay the same in a free expansion, even though its entropy rises?

## What to hand in

Prelab answers, the table copies with their graphs, the comparisons with the predicted shares, the entropy changes, and answers to the questions. Identify simulated data.
