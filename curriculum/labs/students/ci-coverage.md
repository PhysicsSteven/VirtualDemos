# What 95 % Confident Means: Counting Intervals That Catch the Truth
Student laboratory · Statistics for physics

Textbook: OpenStax *Introductory Statistics 2e*, §§8.1 (A Single Population Mean using the Normal Distribution), 8.2 (A Single Population Mean using the Student t Distribution), 8.3 (A Population Proportion), and the labs 8.4 to 8.6 (Confidence Interval: Home Costs, Place of Birth, Women's Heights). Access for free at https://openstax.org/details/books/introductory-statistics-2e.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/confidence-intervals.html?ws=ci-coverage)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** A pendulum's period: 95 % z intervals; 90, 95 or 99 %: the same samples; n = 4: t against z with s; Skewed decay times, t at n = 5; Heights, t intervals, n = 25; Width shrinks as 1/√n; Photons through a polarizer at 60°; A rare event, n = 15: plus four.

**Using the demo.**

- The pendulum population is a 1.000 m pendulum whose true period is T = 2π√(L/g) = 2.0061 s (g = 9.81 m/s²), timed by hand: each simulated timing is the true period plus a random error with σ = 0.080 s. The photon population: each photon passes a polarizer at angle θ with probability p = cos²θ (Malus's law).
- **Draw one** draws one sample of **Sample size n** values and builds its interval; **Draw 100** and **Draw 1,000** draw that many; **Play** draws them one at a time, then faster, up to the next 100. The latest sample's values are the dots at the top of the picture; below them each sample's interval is a line with its estimate marked, newest on top, against the green line at the true value. An interval that misses the true value is red.
- **Interval** chooses the formula: **z, σ known**; **z with s** (the sample's s in place of σ); **t with s**; and for a proportion **Normal approximation** or **Plus four**. With t chosen, **Also draw z with s (thin)** draws both intervals for every sample. **Confidence level (%)** takes a number, or press 90, 95 or 99.
- The samples are kept when you change the confidence level or the interval, so the same samples are recounted. A new n, population, angle or draw set starts new samples; **Reset** clears them.
- The Readouts give **Intervals drawn**, **Caught the truth** (how many, and the percent), **Mean width**, the **Critical value**, and for the latest sample its estimate, its error bound (EBM or EBP) and the interval itself.
- The lower graph shows the share that caught the truth as the intervals pile up, or (switch under the Readouts) **Width against n**: the mean width at each n you drew, under the curve 2zσ/√n.
- **Record reading** stores the interval, confidence level, n, the counts and the mean width (two rows when t and z with s are both drawn). **Export to worksheet** fills Table 1, or Table 2 when the readings are one interval and level at several n. **Clear** empties the Readings list.
- Everything is simulated from a seeded random number generator (draw set 1 in the Lab section). No real timings or photons were measured.

</details>

## Goal

Draw 100 samples at a time, build each one's confidence interval, and count how many catch the true value: at 90, 95 and 99 %, with z and with t at a small n, and for a proportion. Then measure how the width of an interval depends on n.

## Background

A **confidence interval** for a population mean μ is $$\bar x \pm \text{EBM}$$, where the **error bound for the mean** (§8.1) with σ known is

$$\text{EBM} = z_{\alpha/2}\,\frac{\sigma}{\sqrt n} .$$

Here CL = 1 − α is the confidence level and $$z_{\alpha/2}$$ is the z with an area α/2 above it: 1.645 for 90 %, 1.960 for 95 %, 2.576 for 99 %.

"95 % confident" is a statement about the method, not about one interval. Any one interval either contains μ or it does not. But if you repeat the whole process (draw a sample, build an interval) many times, about 95 % of the intervals will contain μ. Out of 100 intervals the number that do is a binomial count with mean 100 · CL and standard deviation $$\sqrt{100\,\text{CL}\,(1-\text{CL})}$$ (2.2 for 95 %), so 92 or 98 is perfectly normal.

When σ is not known you must use the sample's s instead. That adds uncertainty: s itself varies from sample to sample, and at small n it is often well below σ. W. S. Gosset (writing as "Student") found the right multiplier (§8.2): use t with n − 1 degrees of freedom,

$$\text{EBM} = t_{\alpha/2}\,\frac{s}{\sqrt n} .$$

For n = 4 at 95 %, t = 3.182, against z = 1.960. Using z with s at small n gives intervals that are too narrow and miss more often than the stated level. The t interval assumes the population is roughly normal; for a skewed population it needs a larger n.

For a **proportion** (§8.3) with x successes in n trials, p′ = x/n, q′ = 1 − p′, and

$$\text{EBP} = z_{\alpha/2}\sqrt{\frac{p'q'}{n}} ,$$

a normal approximation to the binomial that the book uses when np′ and nq′ are both above 5. When they are not, the book's **plus four** method helps: add two successes and two failures, so p′ = (x + 2)/(n + 4), and use n + 4 in EBP.

All these error bounds have √n in the denominator, so the width of an interval, 2 · EBM, goes as 1/√n: four times the sample for half the width.

## Before the lab

1. A pendulum is timed 10 times by a method with σ = 0.080 s known. Find EBM at 90, 95 and 99 %, and the width of each interval.
2. Of 100 intervals at 90 %, how many do you expect to catch the true value, and what range (mean ± 2 standard deviations of the binomial count) would not surprise you?
3. Predict before you look: with only n = 4 timings, will intervals built with z and the sample's s catch the truth more often, less often or about 95 % of the time? And with t? One sentence of reasoning.

## Procedure

**A. One set of samples, three confidence levels.** In the right panel, under Setups, press **A pendulum's period: 95 % z intervals** (z, σ known, n = 10). Press **Play** and watch about ten intervals join the stack, then press Play again to pause. Press **Reset**, then **Draw 100**. Press **Record reading** in the Readings section. Press **90** beside Confidence level and press Record reading; press **99** and press Record reading. (The 100 samples stay the same; only the intervals change.)

**B. Small n: t against z with s.** Press the setup **n = 4: t against z with s**. Press **Draw 100** and press **Record reading** (it records two rows: t with s and z with s). Then press **Draw 1,000** (1,100 samples in all) and press Record reading again.

**C. A proportion.** Press the setup **Photons through a polarizer at 60°** (p = 0.25, n = 50). Press Draw 100 and Record reading. Then press **A rare event, n = 15: plus four** (θ = 72°, Normal approximation). Press Draw 100 and Record reading. Press **Plus four** in the Interval switch and press Record reading (the same 100 samples). Press **Export to worksheet** (Table 1), then **Clear**.

**D. Width against n.** Press the setup **Width shrinks as 1/√n** (z, σ known, 95 %). For n = 10, 20, 40, 80, 160 and 320: type n in **Sample size n** (press Enter or click away), press **Draw 100** and press **Record reading**. Export to worksheet (Table 2). Then press **t with s** and read **Mean width** at n = 320, and type n = 10, press Draw 100 and read Mean width again.

## Data

Table 1. 100 intervals (or more) at a time: how many caught the true value.

| Reading | Interval | Confidence level (%) | n | Intervals | Caught the truth | Caught (%) | Mean width |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Table 2. The pendulum, z intervals with σ known at 95 %: width against n.

| Reading | n | 1/√n | Mean width (s) |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

## Analysis

1. For the three rows of part A, is each count within 2 binomial standard deviations of 100 · CL? (Work out the standard deviation for each level.)
2. From part A, divide the mean width at 99 % by the mean width at 95 %, and the mean width at 95 % by that at 90 %. Compare with the ratios of the z values in Background.
3. From part B, what share of the 1,100 intervals did t with s catch, and what share did z with s catch? For a normal population the share z with s catches at n = 4 is the area of the t distribution with 3 degrees of freedom between −1.960 and 1.960, which is 85.5 %. Is your z with s share within 2 binomial standard deviations of 85.5 %?
4. From part C, compare the normal approximation and plus four at n = 15. Which catches closer to 95 %? With p = 0.095 and n = 15, what is the expected number of successes np, and why does that make the book's condition (np′ and nq′ above 5) fail for almost every sample?
5. Graph Table 2, mean width (vertical) against 1/√n (horizontal), and fit a straight line. The width is $$2 z_{\alpha/2}\sigma/\sqrt n$$, so the slope should be 2 · 1.960 · σ. Find σ from your slope and compare with 0.080 s. What is the intercept?

## Uncertainty

A count of intervals that catch the truth is binomial: out of N intervals at level CL its standard deviation is $$\sqrt{N\,\text{CL}(1-\text{CL})}$$, so a share from 100 intervals is uncertain by about 2 percentage points at 95 % and from 1,100 by about 0.7. In part D every z interval with σ known has exactly the same width at a given n, so Table 2 has no scatter at all: the fit should be exact up to the rounding of the readout. The t widths you read at the end do scatter, because each depends on its sample's s.

## Questions

1. Look back at your prediction in Before the lab 3. Were you right about z with s and about t at n = 4? Explain why z with s misses more often, using what you can see in the stack (which intervals miss: the wide ones or the narrow ones?).
2. A classmate says: "My interval is 1.95 s to 2.07 s at 95 %, so there is a 95 % chance the true period is between 1.95 s and 2.07 s." Rewrite the sentence so that it is correct.
3. At the end of part D, the t intervals were wider than the z intervals at n = 10 but nearly the same at n = 320. Why?
4. You want a 95 % interval for a pendulum's period with an error bound of 0.010 s, by hand timing with σ = 0.080 s. How many timings do you need? (Solve EBM = zσ/√n for n, as the book does, and round up.)

## What to hand in

Before the lab answers, Tables 1 and 2, the graph of Table 2 with its fit, and your answers to the Analysis and Questions. Say that the data are simulated by the demo, not measured.
