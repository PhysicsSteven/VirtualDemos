# Counting Statistics: Poisson Counts and Exponential Waits
Student laboratory · Modern Physics, Medical Physics and Statistics for physics

Textbook: OpenStax *Introductory Statistics 2e*, §4.6 (the Poisson distribution), §5.3 (the exponential distribution), §5.4 (continuous distribution lab) and §11.2 (goodness of fit). Access for free at https://openstax.org/details/books/introductory-statistics-2e. The physics: OpenStax *University Physics*, Vol. 3, §10.3 (radioactive decay).

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/radioactive-decay.html?view=count&ws=counting-statistics)

<details class="about" markdown="1">
<summary>About the demo</summary>

**The Counting view.** Press **Counting** in the row of views at the top of the picture (beside Many nuclei, Alpha decay and Beta decay). A cesium 137 source sits in front of a Geiger tube, and the counter counts for the same **Counting time Δt** again and again.

**Using the demo.**

- In the strip: **Play** counts in real time (**4×** and **16×** run faster): each count flashes a track into the tube, and the tapes under the counter mark when each count came in the present Δt and the four before it. **Count 100 times** counts for 100 more Δt at once. **Reset** clears the counts and starts the random draws of this draw set again.
- In the sidebar's **Counting** section: the **Count rate R** slider (counts per second), the **Counting time Δt** (1, 2, 5 or 10 s), then the readouts: **Counting times n**, **Expected mean μ = RΔt**, **Mean count x̄**, **Standard deviation s**, **√x̄**, **s²/x̄** and **χ² against the Poisson**, and a table of the counts against the Poisson distribution. Changing R or Δt clears the counts, since that is a new experiment.
- Below the table: the **Already waited t₀** slider and the waiting time readouts: **Mean wait**, **Expected mean wait 1/R**, **Standard deviation of the waits**, **Waits longer than t₀**, **Expected share e^(−Rt₀)** and **Mean time still to wait after t₀**.
- **Blind** hides the Poisson, normal and exponential predictions. **Record reading** stores R, Δt, μ, n, x̄, s, √x̄ and s²/x̄; **Export to worksheet** fills Table 1.

**What the demo models.**

- The source is long lived (cesium 137, half life 30 years), so during the lab its activity does not change: the count rate R is constant. Each wait between counts is drawn from the exponential distribution with mean 1/R, independently of the others. That is all the simulation does; the Poisson distribution of the counts follows from it.
- The counter has no dead time and there is no background; real counters miss counts that come too close together and also count cosmic rays. The data are simulated, and seeded: the same steps from a fresh page give the same counts.

</details>

## Goal

Find out how random counts behave: compare repeated counts from a steady source with the Poisson distribution, show that their standard deviation is the square root of their mean, compare the waits between counts with the exponential distribution, and see why a single count of N carries an uncertainty of $$\sqrt N$$.

## Background

**Counts are Poisson.** A radioactive source with a constant count rate R gives counts at random times, each one independent of the last. The number of counts X in a counting time Δt then follows the **Poisson distribution** with mean $$\mu = R\,\Delta t$$:

$$P(X = k) = \frac{\mu^k e^{-\mu}}{k!}, \qquad k = 0, 1, 2, \dots$$

Its standard deviation is $$\sigma = \sqrt{\mu}$$: the variance equals the mean. So for a Poisson sample, $$s^2/\bar x$$ should be close to 1 and $$s$$ close to $$\sqrt{\bar x}$$. For a small mean the distribution is lopsided (it cannot go below 0); for a large mean it is close to the **normal distribution** with the same mean and $$\sigma = \sqrt{\mu}$$.

**One count carries √N.** If you count only once and get N, your best estimate of the mean is N, and the spread you would see on repeating is about $$\sqrt N$$. Report $$N \pm \sqrt N$$. The relative uncertainty $$\sqrt N/N = 1/\sqrt N$$ shrinks as you count longer: 100 counts are good to 10 %, 10,000 to 1 %.

**Waits are exponential.** The time between one count and the next follows the **exponential distribution**, with density $$f(t) = R\,e^{-Rt}$$, mean $$1/R$$ and standard deviation also $$1/R$$. The share of waits longer than $$t_0$$ is $$P(T > t_0) = e^{-Rt_0}$$. The exponential is **memoryless**: if you have already waited $$t_0$$ without a count, the time still to wait has the same exponential distribution, with the same mean $$1/R$$, as if you had just started. A nucleus has no clock.

**Goodness of fit.** To test whether counts follow a given distribution, group the counts into cells, each expecting at least 5, and compute

$$\chi^2 = \sum \frac{(O - E)^2}{E},$$

with O the observed and E the expected number in each cell. If the counts follow the distribution, $$\chi^2$$ follows the chi square distribution with $$df = \text{cells} - 1$$ (μ is known here, not estimated); a large $$\chi^2$$ (a small p value) says they do not.

## Before the lab

1. A source gives on average 3 counts per second. In one second, which is more likely: 3 counts or 0 counts? Work both from the Poisson formula.
2. Predict before you look: you count that source for 1 s, 100 times. Sketch the histogram of the 100 counts. Will it be symmetric about 3?
3. You have waited 1 s for the next count from a source with R = 2 counts/s and nothing has come. Is the next count now due sooner than 0.5 s on average, or not? Write your guess and one sentence of reasoning.

## Procedure

Open the demo with the link above, or open Radioactive Decay and press **Counting** in the row of views. Each part starts from the values it names; changing R or Δt clears the counts.

**Part A: counts at a small mean (about 20 minutes).**

1. Check **Blind** in the Counting section. Leave **Count rate R** at 3 counts/s and **Counting time Δt** at 1 s. Press **Play** and watch about 10 counting times: the counter fills, the count drops into the histogram, the tapes show when each count came. Press **Pause**.
2. Press **Reset** (in the strip), then **Count 100 times**, so n = 100. Compare the histogram with your sketch from Before the lab, item 2.
3. Uncheck **Blind**. Press **Record reading** (row 1 of Table 1).
4. Copy the table of counts against the Poisson (its **Count k**, **Observed** and **Poisson expected** columns) into Table 2, one row per cell. Write down the **χ² against the Poisson** readout.

**Part B: the spread against the mean (about 15 minutes).** For each line below, set **Count rate R** and **Counting time Δt**, press **Count 100 times** once, and press **Record reading**: R = 1 counts/s with Δt = 1 s; R = 4 counts/s with Δt = 1 s; R = 5 counts/s with Δt = 5 s; R = 10 counts/s with Δt = 10 s; R = 200 counts/s with Δt = 2 s. That gives rows 2 to 6 of Table 1, at μ = 1, 4, 25, 100 and 400. At μ = 400 compare the histogram with the dashed normal curve and the Poisson dots. Then press **Export to worksheet** and **Clear**.

**Part C: waiting times (about 15 minutes).**

1. Set **Count rate R** to 2 counts/s and **Counting time Δt** to 10 s, and press **Count 100 times**.
2. With **Already waited t₀** at 0, record in Table 3 the **Waits between counts** (in the t₀ = 0 row, as the waits longer than 0), the **Mean wait** and the **Standard deviation of the waits**.
3. Move **Already waited t₀** to 0.500 s (it reads 0.500 s = 1.0/R), then 1.000 s and 1.500 s. At each, record **Waits longer than t₀** (the number and the percentage) and the **Mean time still to wait after t₀**. Watch the red outline in the waits graph: it is the histogram of the time still to wait.

## Data

| Reading | $$R$$ (counts/s) | $$\Delta t$$ (s) | $$\mu = R\Delta t$$ | Counting times $$n$$ | Mean count $$\bar x$$ | $$s$$ | $$\sqrt{\bar x}$$ | $$s^2/\bar x$$ |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

Graph $$s$$ (y) against $$\sqrt{\bar x}$$ (x) and fit a straight line.

**Counts against the Poisson (Part A)**

| Count $$k$$ | Observed $$O$$ | Poisson expected $$E$$ | $$(O - E)^2/E$$ |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

**Waiting times (Part C, R = 2 counts/s)**

| $$t_0$$ (s) | Waits longer than $$t_0$$ | Share longer (%) | $$e^{-Rt_0}$$ (%) | Mean time still to wait (s) |
|---|---|---|---|---|
| 0 | | 100 | 100 | |
| 0.5 | | | | |
| 1.0 | | | | |
| 1.5 | | | | |

## Analysis

1. Part A: is the histogram of counts at μ = 3 symmetric? Compare $$\bar x$$ with μ = 3 (its standard error is $$\sqrt{3/100}$$ = 0.17), and $$s^2/\bar x$$ with 1. From n counts, $$s^2/\bar x$$ itself scatters by about $$\sqrt{2/(n-1)}$$, 0.14 for n = 100: how many of those is your value from 1?
2. Fill in the last column of Table 2 and add it up to get $$\chi^2$$. Check it against the demo's readout. With df = (number of cells) − 1, find the p value (a calculator's χ²cdf, or a table). Do the counts fit the Poisson distribution at α = 0.05?
3. From the fit of $$s$$ against $$\sqrt{\bar x}$$, give the slope and the intercept with their uncertainties. What do you expect for each if $$\sigma = \sqrt\mu$$? Do your values agree within their uncertainties? The fit takes its uncertainties from how far the points sit from the line, but each $$s$$ from 100 counts is itself uncertain by about $$s/\sqrt{2(n-1)}$$, 7 % of s: work that for your μ = 400 point, the one that sets the slope, and say whether the slope's distance from 1 is larger than 7 %.
4. At μ = 400 (Part B), how well does the normal curve describe the counts? At μ = 1? Explain the difference.
5. Part C: compare the mean wait with $$1/R$$ = 0.5 s, and the standard deviation of the waits with the mean wait. Fill in the $$e^{-Rt_0}$$ column and compare it with the shares you recorded.
6. Compare the mean time still to wait at t₀ = 0.5, 1.0 and 1.5 s with the mean wait at t₀ = 0. What does this show about the waits? Answer Before the lab item 3 again.

## Questions

1. You count a source once for 10 s and get 400 counts. Give the count rate with its uncertainty. How long would you have to count to know the rate to 1 %?
2. A sample gives 250 counts in a minute and the room's background alone gives 100 counts in a minute. What is the sample's own count, and its uncertainty? (Uncertainties of a difference add in quadrature.)
3. Why can a Poisson count never be described by a normal distribution when the mean is small, say 1? What is the chance of 0 counts then?
4. A Geiger counter needs 100 μs after each count before it can count again. At about what count rate would this begin to matter? Which of the results in this lab would it change first?

## What to hand in

Prelab answers; Table 1 (exported, identified as simulated data) with the graph and fit of $$s$$ against $$\sqrt{\bar x}$$; Tables 2 and 3; the χ² test with its p value and conclusion; and answers to the Analysis items and the Questions.
