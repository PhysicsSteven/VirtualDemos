# Einstein Solids: Why Heat Flows
Student laboratory · Thermodynamics

Textbook: OpenStax *University Physics*, Vol. 2, §§4.4, 4.6 and 4.7. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/entropy.html?setup=esSmall)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Small solids; Hot solid meets cold (these two use the Einstein solids view, the subject of this worksheet); Four molecules; A hundred molecules (the Free expansion worksheet); A real engine; Beats Carnot?; Perfect engine; Perfect refrigerator (the Second law worksheet).

**Using the demo.**

- Each solid is a set of identical quantum oscillators (an Einstein solid), and each oscillator holds a whole number of energy quanta $$\varepsilon$$. You choose the number of oscillators in solids A and B, from 2 to 300 each, the number of quanta q they share, from 0 to 400, and which solid holds them all at the start.
- Each exchange picks two oscillators at random, from either solid, and moves a quantum from the first to the second if the first has one. In the long run every arrangement of the quanta is equally likely.
- The squares are the oscillators, shaded by the quanta each holds. The meters show the quanta in A, the exchanges tried, and each solid's temperature in units of $$\varepsilon/k$$, from $$1/T = dS/dU$$.
- The graphs show the quanta in A against the number of exchanges, with a dashed line at the most likely value, and $$\ln\Omega$$ of each solid and of the pair against the quanta in A.
- The speed buttons try 30, 300 or 3000 exchanges a second.
- Record reading stores the solids' sizes, q, the exchanges tried and the quanta in each solid. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides the temperatures, the most likely value and the entropy graph.

</details>

## Goal

Count the ways two solids can share energy, and show that heat flows from hot to cold because that is overwhelmingly the most likely thing to happen.

## Background

An Einstein solid of $$N$$ oscillators holding $$q$$ quanta can arrange them in

$$\Omega(N, q) = \binom{q + N - 1}{q} = \frac{(q + N - 1)!}{q!\,(N - 1)!}$$

ways (Schroeder, *An Introduction to Thermal Physics*, §2.2; beyond the book). Two solids sharing $$q$$ quanta, with $$q_A$$ in A, can be arranged in $$\Omega_A(q_A)\,\Omega_B(q - q_A)$$ ways. If every arrangement is equally likely, the share of the time spent with $$q_A$$ in A is that number divided by the total, $$\Omega(N_A + N_B, q)$$.

With entropy $$S = k\ln\Omega$$, the most likely $$q_A$$ is where the total entropy is greatest. There $$dS_A/dU_A = dS_B/dU_B$$, and since $$1/T = dS/dU$$, the two temperatures are equal. Heat flowing from hot to cold raises the total entropy (§4.6), which is the second law in Clausius's form (§4.4). A solid with no energy has just one arrangement, so its entropy is zero, in line with the third law (§4.7).

## Before the lab

1. List the ways to put 2 quanta into 3 oscillators. Check your count with the formula.
2. For two solids of 3 oscillators each sharing 6 quanta, find $$\Omega_A$$, $$\Omega_B$$ and their product for $$q_A$$ = 0 to 6. Which $$q_A$$ is most likely?
3. Check that the products add up to $$\Omega(6, 6) = 462$$.
4. Solid A has 100 oscillators and B has 200, and all 150 quanta start in A. Once the exchanges have gone on a long time, about how many quanta will A hold most of the time: about 100, about 75, about 50, or still about 150? Say why.

## Safety

No hazards in the virtual lab.

## Procedure

**Small solids.** Press Einstein solids at the top of the picture, then the Small solids button under Setups (3 and 3 oscillators, 6 quanta, all in A). Press 100× (3000 exchanges a second) and Play, and press Record reading every few seconds until you have at least 40 readings.

**Hot solid meets cold.** Press Export to worksheet and Clear, then press the Hot solid meets cold button. Run at 1× (30 exchanges a second) and press Record reading about every 600 on the Exchanges tried meter for the first 3000 exchanges (pause with the Play button, which reads Pause while running, if you need to), then switch to 100× and record every few thousand until 30,000.

**Start in B.** Press Export to worksheet and Clear, then press Hot solid meets cold again, press All in B under Start with, and repeat the run. Export this run too.

## Data

| Reading | Exchanges tried | $$q_A$$ | $$q_B$$ | $$\Omega_A$$ | $$\Omega_B$$ | $$\Omega_A\,\Omega_B$$ |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Record $$N_A$$, $$N_B$$ and $$q$$ (the Oscillators in solid A, Oscillators in solid B and Quanta of energy q sliders) for each copy of the table. For the small solids, take $$\Omega_A$$ and $$\Omega_B$$ from your Before the lab question 2 list. For the large solids, write $$\ln\Omega$$ instead of $$\Omega$$; Analysis 3 needs it only for the first reading and a settled one.

## Analysis

1. For the small solids, count how many of your readings had each value of $$q_A$$, and compare the shares with your predictions from Before the lab question 2.
2. For Hot solid meets cold, plot $$q_A$$ (vertical) against the exchanges tried (horizontal). Where does it settle, and how long does that take?
3. Find $$\ln\Omega_A + \ln\Omega_B$$ at the start and at the settled value. By how much did the entropy, in units of $$k$$, rise?
4. Starting from B, where does $$q_A$$ settle? Compare with Analysis 2.

## Questions

1. Nothing in the rules says energy must flow from A to B. Why does it?
2. With small solids, energy sometimes flows back into A for a while. Why is that never seen for a cup of coffee?
3. Look at where $$q_A$$ settled in your two large solid runs and set it beside your guess in Before the lab 4. Then use $$\Omega_A\,\Omega_B$$ and $$1/T = dS/dU$$ to explain why $$q_A$$ settles there and not anywhere else, and say what the two solids have in common once it has.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

Even after settling, $$q_A$$ wobbles about its most likely value. Estimate the size of the wobble for the large solids from your graph, and compare it with $$q_A$$. How would the size of the wobble compared with $$q_A$$ change for solids a thousand times larger?

## What to hand in

Prelab answers, the table copies with their graphs, the counts and shares for the small solids, the entropy rise for the large ones, and answers to the questions (and to Uncertainty, if assigned). Identify simulated data.
