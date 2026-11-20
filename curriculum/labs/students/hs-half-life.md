# Half Life and Radioactive Dating
Student worksheet · High school Physics and College Physics 2e

Textbook: OpenStax *Physics* (high school), §22.3, and OpenStax *College Physics 2e*, §31.5. Access for free at https://openstax.org/details/books/physics and https://openstax.org/details/books/college-physics-2e.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/radioactive-decay.html?setup=coin&ws=hs-half-life)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups used here:** Coin flip nuclei and Carbon 14 dating, chosen with the buttons under Setups.

**Using the demo.**

- The tray shows every nucleus of the sample. Parents are large balls; when one decays it turns into a smaller daughter ball and flashes. Choose 100, 400, 1600 or 10,000 nuclei under Nuclei.
- Time moves in steps. **Play** runs the steps, **Step** takes one step at a time and **20 steps** takes twenty at once. **Pause** stops the clock, and **Reset** starts a new sample at $$t = 0$$ with the same settings.
- In the coin flip setup every parent flips a fair coin at each step and decays on heads. For carbon 14 each step is 100 yr, and every parent decays in that step with the same small chance. Which nuclei go is decided by random numbers, so no two runs are the same.
- The middle plot shows the number of parents against time. The readouts under Measurements give the elapsed time $$t$$, the half lives elapsed and the fraction remaining.
- **Record reading** (under Readings) stores the setup, the number of nuclei at the start, the time and the number of parents left. **Export to worksheet** sends the readings to this page's Data table; **Clear** starts a new series, which goes into a new copy of the table.

**What the demo models.** Carbon 14 has a half life of 5700 yr, the current evaluated value. Many books give the older value 5730 yr; the difference is under 1 %.

</details>

## Goal

Watch a sample of unstable nuclei decay at random, count how many are left after each half life, and use the half life of carbon 14 to find the age of an old sample.

## Background

A radioactive nucleus decays at a random moment. Nobody can say when one particular nucleus will go, but in a large sample a fixed share decays in each stretch of time. The **half life** $$T_{1/2}$$ is the time for half the nuclei in a sample to decay.

Start with $$N_0$$ nuclei. After one half life about $$N_0/2$$ are left; after two half lives, half of that, $$N_0/4$$; after three, $$N_0/8$$. After $$n$$ half lives the number left is

$$N = \frac{N_0}{2^n}, \qquad n = \frac{t}{T_{1/2}}.$$

The sample never runs out in a fixed number of half lives: each half life takes away half of what is still there, not half of what you started with.

**Radioactive dating.** A living plant or animal keeps taking in carbon, and a fixed small share of that carbon is carbon 14. When it dies the intake stops, and its carbon 14 decays with a half life of 5700 yr. Measure the fraction of carbon 14 left, compared with a living sample, and you can count how many half lives have passed. For example, 25 % left means $$\tfrac14 = 1/2^2$$, so 2 half lives, or 11,400 yr. A fraction between two of these values, such as 30 %, lies between 1 and 2 half lives; read it off a graph of the fraction left against time. Rocks are dated the same way with longer lived nuclei, such as potassium 40, with a half life of 1.25 billion years.

## Before the lab

1. A sample has 400 nuclei with a half life of one step. How many do you expect after 1, 2, 3 and 4 steps?
2. A bone has $$\tfrac18$$ of the carbon 14 of a living bone. How many half lives have passed? How old is the bone?
3. A rock from the Moon has $$\tfrac1{8}$$ of the potassium 40 it had when it set. With a half life of 1.25 billion years, how old is the rock?
4. Look at the sample of 400 coin flip nuclei in item 1. Some people say that after two half lives the sample is all gone, since half goes in each half life. How many of the 400 do you think will be left after 2 steps, and after 8 steps? Will the number left ever reach zero? Write your guesses and the reason for them before you open the demo.

## Safety

No hazards in the virtual lab. Real radioactive sources are handled only by trained staff, with shielding and a dose badge.

## Procedure

The link at the top opens the demo with the Coin flip nuclei setup. The demo starts running as soon as it opens, and whenever you choose a setup or a number of nuclei, so before each series press **Pause** and then **Reset** to go back to $$t = 0$$.

**Part 1: coin flip nuclei.** Choose **400** under Nuclei, then press Pause and Reset. Press **Record reading** under Readings (this is $$t = 0$$). Press **Step** once and record a reading, and repeat until 8 steps have passed (9 readings), or until every nucleus has decayed, if that comes first (the clock then stops). Watch the Parents count after 2 steps and after 8 steps: these are the numbers to compare with your guess in Before the lab 4. Press **Export to worksheet**, then **Clear**: the readings fill the Data table.

**Part 2: a bigger sample.** Choose **10,000** under Nuclei, press Pause and Reset, and repeat Part 1: record at $$t = 0$$ and after each step up to 8 steps. Press Export to worksheet, then Clear: these readings go to a second copy of the table.

**Part 3: carbon 14.** Press **Carbon 14 dating** under Setups, choose 10,000 under Nuclei, and press Pause and Reset. Record a reading at $$t = 0$$. Then press **20 steps** once (each press moves the clock 2000 yr) and record, and repeat until $$t$$ = 22,000 yr (12 readings). Press Export to worksheet: these readings go to a third copy of the table, and its graph is the one for Analysis 3.

For each reading, fill in the last two columns: the fraction left $$N/N_0$$, and the number of half lives that have passed, $$t/T_{1/2}$$ (one step for the coin flips, 5700 yr for carbon 14).

## Data

| Reading | Setup and $$N_0$$ | Time $$t$$ | Parents left $$N$$ | Fraction left $$N/N_0$$ | Half lives $$t/T_{1/2}$$ |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

The time unit is in the Setup column. Give $$N/N_0$$ to three decimal places and $$t/T_{1/2}$$ to two.

## Analysis

1. For the 400 coin flip nuclei, make a graph of the parents left $$N$$ (vertical) against the number of steps (horizontal), and draw a smooth curve through the points. On the same axes, mark the expected values $$400/2^n$$. How close are your counts to the expected values?
2. Compare the fraction left after 1, 2 and 3 steps for the 400 nuclei and for the 10,000 nuclei with $$\tfrac12$$, $$\tfrac14$$ and $$\tfrac18$$. Which sample comes closer? Why would a bigger sample do better?
3. For carbon 14, make a graph of the fraction left $$N/N_0$$ (vertical) against the time $$t$$ (horizontal), and draw a smooth curve through the points. From your curve, read the time at which the fraction left is 0.50, 0.25 and 0.125. How long is each step from one of these to the next? Compare with 5700 yr.
4. A piece of charcoal from an old campfire has 30.0 % of the carbon 14 of living wood. Use your graph from Analysis 3 to find its age. Between which two whole numbers of half lives does it lie?
5. A wooden tool has 60.0 % of the carbon 14 of living wood. Use the graph to find its age.

## Questions

1. Look back at your guesses in Before the lab 4. How many of the 400 nuclei were left after 2 steps and after 8 steps? Use the meaning of half life to explain why the sample was not gone after 2 half lives. The expected number $$N_0/2^n$$ halves again and again but never reaches zero; a real sample of 400 still runs out after some number of steps. Explain why, thinking about how many nuclei are left by then.
2. Carbon 14 dating is used for samples up to about 50,000 yr old. Find how many half lives that is and what fraction of the carbon 14 is left. Why is it hard to date a sample much older than that with carbon 14? Why is potassium 40 used for rocks billions of years old instead?

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

Each count comes from random decays, so a sample of $$N_0$$ nuclei scatters about the expected count by roughly $$\sqrt{N}$$, where $$N$$ is the expected number left. For 400 nuclei after 1 step, $$\sqrt{200} \approx 14$$, about 7 % of the count; for 10,000 nuclei, $$\sqrt{5000} \approx 71$$, under 1.5 %. Are the differences you found in Analysis 1 and 2 about this size? Reading a time off your hand drawn curve adds an uncertainty of its own: estimate it from how far apart your grid lines are.

## What to hand in

Prelab answers, the three copies of the Data table with the last two columns filled in, the two graphs, the ages from Analysis 4 and 5 with the half lives you read, and answers to the questions (and to Uncertainty, if assigned). Identify simulated data.
