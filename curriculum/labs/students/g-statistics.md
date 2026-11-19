# Is g Really 9.81? Statistics on a Pendulum
Student laboratory · Physics I and Statistics for physics

Textbook: OpenStax *Introductory Statistics 2e*, §2.2 (histograms), §2.7 (spread), §§6.1 to 6.4 (the normal distribution), §8.2 (a t interval for a mean), §9.6 (testing a single mean) and §§10.1 and 10.5 (two means). Access for free at https://openstax.org/details/books/introductory-statistics-2e. The physics: OpenStax *University Physics*, Vol. 1, §15.4 (the pendulum).

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/measurement-uncertainty.html?ws=g-statistics)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Hand timing, one swing; Hand timing, 10 swings; Photogate; A range of lengths; Length read to the bottom of the bob; Big swings, 40°; Many timings: histogram. A setup sets the timer, the swings per timing, the length, the release angle and where the length is read; it does not clear your readings.

**Using the demo.**

- The cards under the picture hold the **Length L, as read on the meter stick** (slider, the L −1 cm, L +1 cm and L +20 cm buttons, or click its readout and type a value), the **Release angle θ₀**, the **Timer** (**Hand stopwatch** or **Photogate**), the **Swings per timing N** and where the length is read (**Center of the bob** or **Bottom of the bob**).
- **Repeat 10 times** and **Repeat 100 times** in the strip time the same swings 10 or 100 more times at once. Every timing is recorded as a row in Readings by itself.
- The **Histogram** graph shows the timings at the present setup: a histogram, the normal curve with the same mean and standard deviation, the number within ±s and ±2s of the mean, and a normal quantile plot below it. The Analysis section in the sidebar gives n, the mean period, s and s/√n under **This setup**, then **The shape of these timings**: the counts within ±s and ±2s, the correlation r of the quantile plot, and the mean ḡ and standard deviation s_g of g = 4π²L/T² worked out from each timing.

**What the demo models.**

- The pendulum is exact (a point bob, no drag, the true period at any angle), with g = 9.81 m/s², the free fall acceleration OpenStax *University Physics* uses and the value every demo on this site uses (`demos/lib/constants.js`).
- The timing errors are simulated, and labeled so. Each press of the hand stopwatch, at the start and at the stop, is early or late by a random amount drawn from a normal distribution with standard deviation 0.05 s; the display reads to 0.01 s. The photogate has no reaction time and reads to 0.001 s. Read to the bottom of the bob (diameter 6.0 cm), a length reading is 3.0 cm longer than the true length from the pivot to the bob's center.
- The random draws repeat when the page is opened again: the same steps give the same numbers. **New random draws** (under Lab) moves to another set.

</details>

## Goal

Use the tools of a statistics course on a physics measurement: check that 100 hand timings of a pendulum follow a normal distribution, give a confidence interval for g, test whether the data agree with g = 9.81 m/s², and use two sample tests to decide whether two ways of measuring give the same answer.

## Background

**A pendulum gives g.** For a small swing the period is $$T = 2\pi\sqrt{L/g}$$, so

$$g = \frac{4\pi^2 L}{T^2}.$$

With L = 1.000 m and g = 9.81 m/s² the period would be $$T_0 = 2\pi\sqrt{1.000/9.81} = 2.0061$$ s.

**Why hand timings scatter normally.** A hand timing is the true time plus the error of the stop press minus the error of the start press. Each press error is random, and the sum or difference of two normal errors is itself normal. A histogram of many timings should then look like a bell, and the **normal distribution** with the same mean and standard deviation should describe it: about 68.3 % of the timings within one standard deviation $$s$$ of the mean and about 95.4 % within $$2s$$. A **normal quantile plot** is a sharper check: put the timings in order and plot the i-th smallest against the z score a normal distribution would give it, $$z = \Phi^{-1}\big((i - \tfrac12)/n\big)$$. Normal data fall close to a straight line, of slope $$s$$; a curve or bent ends mean the data are skewed or have long tails.

**A t interval for the mean.** The standard deviation of the population is not known, so we estimate it with the sample's $$s$$ and use Student's t distribution with $$n - 1$$ degrees of freedom. A 95 % confidence interval for the mean period $$\mu_T$$ is

$$\bar T \pm t^* \frac{s}{\sqrt n},$$

with $$t^* = 1.984$$ for 99 degrees of freedom ($$t^* = 2.262$$ for 9). Since $$g = 4\pi^2L/T^2$$ falls as T rises, the interval for g runs from $$4\pi^2 L/T_{\text{high}}^2$$ up to $$4\pi^2 L/T_{\text{low}}^2$$. We work with the periods, not with g, because it is the timings that are normal.

**A t test of one mean.** To test $$H_0: \mu_T = T_0$$ (the data agree with g = 9.81 m/s²) against $$H_a: \mu_T \ne T_0$$, compute

$$t = \frac{\bar T - T_0}{s/\sqrt n}$$

and the p value, the chance of a $$\lvert t \rvert$$ this large or larger if $$H_0$$ is true (two tails of the t distribution with $$n - 1$$ degrees of freedom; use a calculator's tcdf or a table). If $$p < \alpha = 0.05$$, reject $$H_0$$.

**Two means.** To compare two independent samples (two methods of measuring), test $$H_0: \mu_1 = \mu_2$$ with

$$t = \frac{\bar x_1 - \bar x_2}{\sqrt{s_1^2/n_1 + s_2^2/n_2}},$$

the book's unpooled (Welch) test. Its degrees of freedom are

$$df = \frac{\left(s_1^2/n_1 + s_2^2/n_2\right)^2}{\dfrac{(s_1^2/n_1)^2}{n_1 - 1} + \dfrac{(s_2^2/n_2)^2}{n_2 - 1}},$$

which a calculator's 2-SampTTest works out for you. If one sample has no spread at all ($$s_2 = 0$$), this is the same as a one sample test of $$\bar x_1$$ against $$\bar x_2$$, with $$df = n_1 - 1$$.

The mean $$\bar g$$ of the g worked out from each timing comes out a little above $$4\pi^2 L/\bar T^2$$, because $$4\pi^2L/T^2$$ bends: a short timing raises g more than a long one lowers it. Two methods that time the same way share this, so it cancels when you compare them.

A test can only find a difference that shows up in the data. A length read from the wrong place changes every value of g in the same way: no amount of repeating at one setup reveals it, but comparing two methods can.

## Before the lab

1. You time one swing of a pendulum by hand 100 times. Sketch what you expect the histogram of the timings to look like. About how many of the 100 do you expect within one standard deviation of the mean, and how many within two?
2. Predict before you measure: if the true g is 9.81 m/s², will a 95 % confidence interval for g from your 100 timings always contain 9.81? About how often will it miss?
3. A classmate reads every length to the bottom of the bob instead of the center. Will their 100 timings look any different from yours? Will a two sample test of their g against yours find the difference? Write your guesses and one sentence of reasoning for each.

## Safety

On a real bench, clamp the pivot firmly, keep the swing clear of people and equipment, and release the bob without a push.

## Procedure

Leave **Blind** (under Lab) unchecked. Every timing goes into Readings by itself.

**Part A: 100 timings and their shape (about 15 minutes).**

1. Under Setups, press **Many timings: histogram** (L = 1.000 m, θ₀ = 5°, Hand stopwatch, N = 1, Center of the bob; the graph switches to **Histogram**). Press **Repeat 100 times** once, so n = 100.
2. From the Analysis section, record in row A of the Summary table: n, the **Mean period T̄**, the **Standard deviation s**, the counts **Within ±s of the mean** and **Within ±2s of the mean**, the mean **ḡ** and **s_g** of g from each timing. Write down the **Normal quantile plot, correlation r** too.
3. Look at the histogram and the normal quantile plot and note how well the curve fits and whether the dots follow the line.
4. Press **Export to worksheet** (the 100 timings fill the Data table), then **Clear**.

**Part B: interval and test (no new data).** Work Analysis items 2 and 3 now, from row A.

**Part C: the photogate (about 5 minutes).** In **The timer** card under the picture, press **Photogate**. Press **Repeat 10 times**. Record row C of the Summary table: n, T̄ and s from Analysis (no shape counts or g needed). Then press **Hand stopwatch** again.

**Part D: the length read to the bottom of the bob (about 10 minutes).**

1. In **The meter stick** card press **Bottom of the bob**. The pendulum is the same 1.000 m from pivot to center, but read to the bottom it reads 3.0 cm longer: click the length readout beside **Length L, as read on the meter stick**, type 1.03 and press Enter (or press **L +1 cm** three times).
2. Check that the graph is still **Histogram** and that **Hand stopwatch** and N = 1 are pressed, then press **Repeat 100 times**.
3. Record row D of the Summary table as in Part A, step 2.

## Data

| Row | $$L$$ as read (m) | Timer | Swings $$N$$ | Time $$t$$ (s) | Period $$T = t/N$$ (s) | Length read to |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

The Part A export fills this table with 100 rows.

**Summary of each setup**

| Copy | Setup | $$n$$ | Mean $$\bar T$$ (s) | $$s$$ (s) | Within $$\pm s$$ | Within $$\pm 2s$$ | $$\bar g$$ (m/s²) | $$s_g$$ (m/s²) |
|---|---|---|---|---|---|---|---|---|
| A | Hand, center, L = 1.000 m | | | | | | | |
| C | Photogate, center, L = 1.000 m | | | | | | | |
| D | Hand, bottom, L = 1.030 m as read | | | | | | | |

## Analysis

1. Shape (row A). What percentage of your timings fall within ±s, and within ±2s? Compare with 68.3 % and 95.4 %. Is the histogram roughly symmetric and bell shaped, and do the dots of the quantile plot follow the line? Do the hand timings look normal?
2. A 95 % t interval (row A). Work out $$s/\sqrt n$$ and the interval $$\bar T \pm t^* s/\sqrt n$$ with $$t^* = 1.984$$, giving its lower and upper ends in seconds to four decimals. Then turn the two ends into an interval for g with $$g = 4\pi^2 L/T^2$$ (L = 1.000 m). Does it contain 9.81 m/s²?
3. A t test (row A). Test $$H_0: \mu_T = 2.0061$$ s (the period for g = 9.81 m/s²) against $$H_a: \mu_T \ne 2.0061$$ s. Give t, the degrees of freedom and the p value, and your decision at α = 0.05, in a sentence about g.
4. Hand against photogate (rows A and C). Is the hand stopwatch biased? Test whether the mean hand period differs from the photogate's period: work t with the formula in Background (the photogate's s is 0), its degrees of freedom and the p value. State your conclusion.
5. Center against bottom (rows A and D). The two copies timed the same pendulum. Work the two sample t statistic for $$\bar g$$ from A against $$\bar g$$ from D (use $$s_g$$ and n of each), the Welch degrees of freedom (or 99 to be safe) and the p value. Is the difference significant at α = 0.05? Compare the ratio of the two means of g with 1.030/1.000.
6. In Part D, did the timings themselves (T̄ and s) differ from Part A by more than chance? What does that tell you about whether repeating at one setup can ever reveal a misread length?

## Uncertainty

Sort what you found into the two kinds. Random error: the scatter of single timings (s), which a mean of n timings shrinks to the standard error $$s/\sqrt n$$; this is what the interval and the tests in Analysis measure. Systematic error: a bias every timing shares, such as a length read to the bottom of the bob or the small angle formula at a finite release angle; repeating at one setup never shrinks it, and only a comparison of setups or the physics reveals it. In two or three sentences, give the size of each kind in this lab, in m/s², from your rows A, C and D.

## Questions

1. The photogate's period, 2.007 s, gives g = 9.801 m/s², a little below 9.81 m/s², although there is no timing error at all. Use the release angle to explain why. Could your hand timed interval have detected a difference this small? Using $$s_g$$ from row A, roughly how many hand timings would it take for the standard error of g, $$s_g/\sqrt n$$, to be a third of that difference?
2. "We are 95 % confident that g lies in this interval." Explain what the 95 % means in terms of repeating the whole experiment many times.
3. Failing to reject $$H_0: g = 9.81$$ m/s² in Analysis 3 does not prove g = 9.81 m/s². Explain the difference, and give one way to make the test more sensitive.
4. A difference can be statistically significant and still physically unimportant, or physically important and not significant. Give one example of each from this lab.

## What to hand in

Prelab answers; the exported Data table (identified as simulated data); the Summary table; the interval for $$\mu_T$$ and for g; the three tests with t, df, p and a conclusion in words; and answers to the Analysis items and the Questions.
