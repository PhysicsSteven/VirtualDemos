# The Central Limit Theorem: Means of Skewed Reaction Times
Student laboratory · Statistics for physics

Textbook: OpenStax *Introductory Statistics 2e*, §§7.1 (The Central Limit Theorem for Sample Means), 7.2 (The Central Limit Theorem for Sums), 7.3 (Using the Central Limit Theorem) and 7.4 (Central Limit Theorem, Pocket Change). Access for free at https://openstax.org/details/books/introductory-statistics-2e.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/sampling-lab.html?ws=central-limit-theorem)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Simple random: pocket change; Stratified: 5 from each section; Cluster: two blocks of seats; Systematic: every 20th seat; Convenience: the ones by the door; Self selected: who chooses the videos?; Randomized: a coin decides; Means of skewed reaction times, n = 5; Pocket change: sums of n = 10; Uniform seconds: n = 2 makes a triangle; Bimodal commutes: n = 30; n = 1: the means are the population.

**Using the demo.**

- This worksheet uses the **Central limit theorem** view. The hall at the left holds the population, 400 students; the histogram at the right is the whole population, with its mean μ and standard deviation σ. The population here is **Reaction times (ms), skewed**: a simulated ruler drop reaction time for each student, 150 ms plus an exponential wait, so most are near 200 ms and a few are much slower.
- Each sample draws n students **with replacement** (a student can be drawn twice), so the draws are independent. Type n in **Sample size n** (or use −1 and +1); a new n starts a new set of samples.
- **Draw a sample** draws one sample and rings its students; **Draw 1,000** and **Draw 10,000** draw that many at once; **Play** draws them one at a time, then faster, up to the next 1,000. The **Means \| Sums** switch chooses whether the lower histogram (and the readouts) show the sample means x̄ or the sample sums ΣX.
- The lower graph is the histogram of the means (or sums) with the normal curve the theorem predicts (teal) and its center (green). At the right, **Spread of the means against n** puts a dot at each n you have drawn 100 or more samples for, under the curve σ/√n.
- The Readouts give **Population μ** and **Population σ**, **Mean of the x̄'s**, **Spread, s of the x̄'s**, **Theorem: σ/√n**, **Skew of these** (the skewness of the means drawn), **Theorem: skew of population/√n**, and the share of the means **Within ±1 standard error** and **Within ±2 standard errors** of μ. With Sums chosen the same readouts are for the sums.
- **Record reading** stores n, 1/√n, √n and these readouts; **Export to worksheet** fills Table 1 (means) or Table 2 (sums); **Clear** empties the Readings list.
- Everything is simulated by a seeded random number generator (draw set 1 in the Lab section): the same n gives the same samples every time. No real reaction times were measured.

</details>

## Goal

Draw thousands of samples from a skewed population and measure how the spread and the shape of the sample mean change with n: check that the spread is σ/√n, find the n where a normal curve describes the means well, and do the same for sums.

## Background

Draw a sample of n values from a population with mean μ and standard deviation σ, and compute its mean x̄. Another sample gives another x̄. The **sampling distribution of x̄** is the distribution of all those x̄'s. The **central limit theorem** (§7.1) says that for independent draws:

- the mean of the x̄'s is μ (x̄ is unbiased);
- the standard deviation of the x̄'s is $$\sigma_{\bar x} = \frac{\sigma}{\sqrt n}$$, the **standard error of the mean**;
- for large enough n, the x̄'s follow a normal distribution, whatever the shape of the population.

The first two hold for every n; only the shape needs n to be large. The same holds for the **sum** of the sample, ΣX = n x̄ (§7.2): its mean is nμ and its standard deviation is $$\sqrt n\,\sigma$$. A sum spreads more as n grows; a mean spreads less.

How large is large enough? The book's rule of thumb is n of 30 or more, but it depends on the population. One measure of shape is the **skewness**: 0 for a symmetric distribution, positive for a long right tail. For independent draws the skewness of x̄ is the population's skewness divided by √n, so a skewed population needs a larger n. A normal distribution also has 68.3 % of its values within one standard deviation of its center and 95.4 % within two; you can check those shares, too.

Physics connection: averaging n repeated measurements cuts the random error by √n, which is why an average of 100 readings is ten times better than one. And a measurement that is the sum of many small independent effects (a timing error, the noise in a sensor) tends to be normal, which is why the normal curve is everywhere in the lab.

To use the theorem (§7.3), convert to z with the standard error: $$z = \frac{\bar x - \mu}{\sigma/\sqrt n}$$.

## Before the lab

1. The population has σ = 94.5 ms. What does the theorem predict for the spread of the means of samples of n = 4, 16 and 36?
2. If you graph the spread of the means (vertical) against 1/√n (horizontal), what shape should the graph have, and what should its slope and intercept be?
3. Predict before you look: the population's skewness is about 1.8. Below what n do you think the histogram of the means will still look clearly lopsided? Explain in one sentence.

## Procedure

**A. The population.** In the right panel, under Setups, press **Means of skewed reaction times, n = 5**. Look at the population histogram at the right of the hall and copy **Population μ** and **Population σ** from the Readouts.

**B. The means for n = 1 to 50.** Type 1 in **Sample size n** (press Enter or click away). Press **Draw 10,000** and look at the lower histogram. Press **Record reading** in the Readings section. Repeat for n = 2, 4, 8, 16, 25, 36 and 50: type n, press Draw 10,000, press Record reading. For n = 1 also copy **Theorem: skew of population/√n** (at n = 1 it is the population's own skewness). Press **Export to worksheet** (Table 1), then **Clear**.

**C. Watch the shape change.** Type n = 2 and press **Play**; watch the samples get ringed and the histogram fill. Then type n = 30 and press Play again. Write one sentence comparing the two histograms with the teal normal curve.

**D. The sums.** Press **Sums** in the Means \| Sums switch. For n = 1, 4, 16 and 36: type n, press **Draw 10,000**, press **Record reading**. Export to worksheet (Table 2).

## Data

Table 1. Means of samples of n reaction times, 10,000 samples at each n (draw set 1).

| Reading | n | 1/√n | Mean of the x̄'s (ms) | Spread, s of the x̄'s (ms) | Theorem σ/√n (ms) | Skew of the x̄'s | Within ±1 SE (%) | Within ±2 SE (%) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

Table 2. Sums of samples of n reaction times, 10,000 samples at each n.

| Reading | n | √n | Mean of the sums (ms) | Spread, s of the sums (ms) | Theorem √n σ (ms) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. Graph Table 1, the spread s of the x̄'s (vertical) against 1/√n (horizontal), and fit a straight line. Compare its slope with the population σ from part A (percent difference), and say whether its intercept is within two standard errors of zero.
2. For each n in Table 1, divide the measured spread by the theorem's σ/√n. How close to 1 are the ratios?
3. Graph the skew of the x̄'s against 1/√n and fit a straight line. The theorem predicts a line through the origin with slope equal to the population's skewness (from part B). How close is your slope?
4. Take "the normal fits" to mean: the skew of the means is below 0.3, and the share within ±2 SE is within 0.5 percentage points of 95.4 %. From Table 1, what is the smallest n that passes both? Compare with the book's rule of thumb, n of 30 or more.
5. Graph Table 2, the spread of the sums against √n, and fit a straight line. What should its slope be, and what is it?
6. Use the theorem: for samples of n = 25 reaction times, what is the probability that the sample mean is above 270 ms? Use μ, σ and the z formula in Background, and a normal table or calculator.

## Uncertainty

From 10,000 samples, each measured spread s is uncertain by roughly s/√(2 · 10,000), about 0.7 %, a little more for the most skewed small n; each share within ±2 SE is uncertain by about √(0.954 · 0.046/10,000) = 0.2 percentage points; and each skewness by about √(6/10,000) = 0.025 for nearly normal means (more at small n, where the tail is long). Use these to judge whether a measured value agrees with the theorem. The population's μ and σ are exact: they are computed from all 400 values.

## Questions

1. Look back at your prediction in Before the lab 3. At what n did the histogram stop looking lopsided to you, and how does that compare with the n you found in Analysis 4?
2. The spread of the means shrinks as n grows, and the spread of the sums grows. Explain both in words, using the fact that the sum is n times the mean.
3. A lab group averages 16 hand timings of a pendulum's period. Each timing is off by a random error with a standard deviation of 0.08 s, and the errors are skewed (people tend to stop the watch late). What is the standard error of their average, and why can they still use a normal curve for it?
4. The demo draws with replacement. If it drew 50 of the 400 students without replacement, the spread of the means would be smaller by the factor √((400 − 50)/(400 − 1)). By how much, and why does drawing without replacement help?

## What to hand in

Before the lab answers, Tables 1 and 2, the three graphs with their fits, your sentence from part C, and your answers to the Analysis and Questions. Say that the data are simulated by the demo, not measured.
