# Type I Errors, Type II Errors and Power
Student laboratory · Statistics for physics

Textbook: OpenStax *Introductory Statistics 2e*, §§9.1 to 9.6 (null and alternative hypotheses, outcomes and the Type I and Type II errors, the distribution needed for a test, rare events and the decision, full hypothesis test examples, tests of a single mean and a single proportion). Access for free at https://openstax.org/details/books/introductory-statistics-2e.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/hypothesis-tests.html?ws=errors-and-power)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Pendulum g: is it 9.81? (t test); Drop timer, σ known: is g low? (z test); Detector efficiency: above 80 %? (one proportion); A die: are sixes one in six? (one proportion); Two photogates, σ known: same period? (two means, z); Two stopwatch timers: same period? (two means, Welch t); Two detectors: same efficiency? (two proportions); New photogate: did it change the period? (matched pairs).

**Using the demo.**

- The top of the picture shows one sample (your study): the dots are the measured values, the triangle is their mean. Under it is the null distribution of the test statistic, the curve the statistic follows when H₀ is true. Your statistic is the pin; the p value is the shaded area beyond it. The gray bands are the rejection region at the significance level α.
- The four cards under the picture are the book's four steps: **Hypotheses**, **Distribution**, **p value**, **Decision and conclusion**.
- In **The test** card, choose the **Alternative** (Left tailed, Two tailed or Right tailed) and the **Significance level α** (0.10, 0.05 or 0.01). In **The study** card, **Sample size n** sets how many measurements each study takes, and **New draw** gives a new sample. In **The truth** card, the **True mean μ** slider sets what the simulation really draws from; the test never sees it. **Make H₀ true** sets the truth equal to the value H₀ names. You can click any slider's number and type a value.
- **Play** (top left of the picture) runs 1,000 studies like yours, each with new simulated data, in about five seconds. The histogram at the bottom left fills with their statistics; the colored ones rejected H₀. The line under the picture tallies **Studies**, **Rejected H₀** and **Fraction rejected** with its standard error. Changing α or the alternative recounts the same studies; changing n or the truth starts over.
- The bottom right is the power curve: the chance of rejecting H₀ against the true value, for this n and α (exact for z tests; for t tests worked out numerically). Each finished run adds a dot.
- **Record reading** stores the settings, your sample's statistic, p value and decision, and the tally of the studies run. **Export to worksheet** fills the Data tables below; **Clear** starts a new series. All data are simulated by the demo; the draws are seeded, so Draw 1 is the same for everyone.

</details>

## Goal

See what the significance level α really promises by running a thousand studies at once: how often a test rejects a true null hypothesis (Type I errors), and how often it catches a false one (power) as the size of the effect and the number of measurements change. Then carry out two complete tests the way the book does.

## Background

**A hypothesis test** starts from a null hypothesis H₀, a definite claim such as "this pendulum setup measures g = 9.81 m/s² on average", and an alternative Hₐ, what you suspect instead (μ ≠ 9.81, μ < 9.81 or μ > 9.81). You take a sample, compute a test statistic, and ask: if H₀ were true, how likely is a statistic at least this far from what H₀ predicts? That probability is the **p value**. If it is smaller than a level α chosen in advance, the sample is too rare to blame on chance and you **reject H₀**; otherwise you **do not reject H₀**. Not rejecting is not proving H₀ true: it only means the data are not strong enough evidence against it.

**The statistic.** For one mean with the population σ known, $$z = \frac{\bar{x} - \mu_0}{\sigma/\sqrt{n} }$$ follows the standard normal distribution when H₀ is true. With σ unknown, the test uses the sample standard deviation s instead, and $$t = \frac{\bar{x} - \mu_0}{s/\sqrt{n} }$$ follows Student's t distribution with df = n − 1. For one proportion, with x successes in n trials and p′ = x/n, $$z = \frac{p' - p_0}{\sqrt{p_0 q_0 / n} }, \quad q_0 = 1 - p_0,$$ is close to standard normal when $$np_0$$ and $$nq_0$$ are both more than 5.

**Two ways to be wrong.** Each test ends in one of four ways:

- H₀ is true and you reject it: a **Type I error**. Its probability is α.
- H₀ is true and you do not reject it: correct.
- H₀ is false and you do not reject it: a **Type II error**. Its probability is called β.
- H₀ is false and you reject it: correct. Its probability, 1 − β, is the **power** of the test.

The probability of a Type I error is α itself: when H₀ is true, the statistic lands in the rejection region a fraction α of the time, whatever the sample size. The probability β of a Type II error depends on how false H₀ is. A small true effect, a large spread or a small sample all make the statistic hard to tell from chance, so β is large and the **power** 1 − β is small. The power grows with the effect measured in standard errors, $$\frac{\mu - \mu_0}{\sigma/\sqrt{n} },$$ so to detect half the effect with the same power you need four times as many measurements.

**Counting with simulation.** If N studies are run and k of them reject H₀, the fraction f = k/N estimates the rejection probability with a standard error $$\sqrt{f(1 - f)/N}$$. With N = 1,000 and f near 0.05 that is about 0.007.

## Before the lab

1. A pendulum gives g from n = 10 timings with sample mean 9.83 m/s² and s = 0.06 m/s². Compute t for H₀: μ = 9.81 m/s². Is it larger or smaller than the two tailed critical value 2.262 for df = 9?
2. Of the two ways to be wrong, which error does a careful lab make if it reports "the setup is biased" when it is not? Which error does it make if it misses a real 0.02 m/s² bias?
3. Predict before you look: H₀ is true, α = 0.05, and 1,000 studies of n = 10 are run. About how many will reject H₀? If each study took n = 30 measurements instead, would that number go up, go down, or stay about the same? Write your guesses and one sentence of reasoning for each.

## Procedure

**A. Type I errors.** Press the setup **Pendulum g: is it 9.81? (t test)** in the right panel. It opens with the truth equal to 9.81 m/s² (H₀ is true), **Sample size n** = 10, **Two tailed** and α = 0.05. Press **Play** and wait for 1,000 studies to finish. Choose α = **0.10** in The test card and press **Record reading** in the Readings section; then α = **0.05** and record; then α = **0.01** and record. Now set **Sample size n** to 30 (click its number and type 30), press **Play** again, and record at α = 0.10, 0.05 and 0.01 the same way. Press **Export to worksheet** (Table 1), then **Clear**.

**B. Power against the effect.** Set **Sample size n** back to 10 and α to 0.05. In The truth card, set **True mean μ** to 9.81 (or press **Make H₀ true**), press **Play**, and record when the run ends. Repeat for a true mean of 9.83, 9.85, 9.87, 9.89 and 9.91 m/s² (click the slider's number to type each one), pressing **Play** and recording each time. Watch the histogram slide away from the null curve. Export to worksheet (Table 2), then Clear.

**C. Power against the sample size.** Set **True mean μ** to 9.85 m/s² and α to 0.05. For **Sample size n** = 5, 10, 20 and 40, press **Play** and record when the run ends. Export to worksheet (Table 3), then Clear.

**D. Two complete tests.** Press the setup **Drop timer, σ known: is g low? (z test)**. Do not press **New draw** (you need Draw 1). Press **Reset** under Play, so that no studies are tallied, then press **Record reading**. Copy into your notes the sample mean x̄ from the picture and the **Hypotheses** card. Then press **Detector efficiency: above 80 %? (one proportion)**, press **Reset**, record, and copy x and n from the picture. Export to worksheet (Table 4).

## Data

Table 1. Type I errors: the truth is 9.81 m/s², so H₀ is true.

| Reading | α | Sample size n | True effect (m/s²) | Studies | Rejections of H₀ | Fraction rejected |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Table 2. Power against the true effect, n = 10, α = 0.05, two tailed.

| Reading | α | Sample size n | True effect (m/s²) | Studies | Rejections of H₀ | Fraction rejected |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Table 3. Power against the sample size, true effect 0.04 m/s², α = 0.05.

| Reading | α | Sample size n | True effect (m/s²) | Studies | Rejections of H₀ | Fraction rejected |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Table 4. Two complete tests (Draw 1 of each setup).

| Reading | Setup | Test | Statistic | p value | Decision |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |

## Analysis

1. For each row of Table 1, compute the standard error of the fraction, $$\sqrt{f(1 - f)/N}$$ with N = 1,000. Is each fraction rejected within two standard errors of its α? Did going from n = 10 to n = 30 change the Type I error rate?
2. Graph Table 2: the fraction rejected (vertical) against the true effect (horizontal). Where does your curve start at an effect of 0, and why must it start there? Read from your graph the effect at which the power reaches 0.80. Compare your points with the demo's power curve for the same settings.
3. For each row of Table 2 with an effect greater than 0, write β = 1 − (fraction rejected), the probability of a Type II error. For a real bias of 0.02 m/s², how often would this experiment miss it?
4. Graph Table 3: the fraction rejected (vertical) against the sample size n (horizontal). In words, how does the power change as n grows? Use the standard error σ/√n to explain why four times as many measurements is what it takes to detect an effect half as large.
5. Write out the full test of the drop timer (Table 4, first row) in the book's four steps: the hypotheses; the distribution (which one, and why); the statistic, computed by hand from your x̄ with $$\mu_0 = 9.81$$ m/s², σ = 0.03 m/s² and n = 8, and checked against the demo; the p value; and the decision with a sentence of conclusion in words at α = 0.05. Would the decision change at α = 0.01?
6. Do the same for the detector efficiency (Table 4, second row): H₀: p = 0.80, Hₐ: p > 0.80. Compute p′ = x/n and z by hand, check that $$np_0$$ and $$nq_0$$ are more than 5, and state the decision and conclusion at α = 0.05.

## Uncertainty

Each fraction in Tables 1 to 3 comes from 1,000 simulated studies, so it carries the counting uncertainty $$\sqrt{f(1 - f)/1000}$$: about 0.007 near 0.05, and as much as 0.016 near 0.5. Two fractions that differ by less than about two of these are not really different. The proportion test is only approximately a z test (the count is a whole number and the normal curve is an approximation), so its Type I rate can sit slightly off α even with many studies. The statistics and p values of your own samples in Table 4 are exact for the data drawn.

## Questions

1. Look back at your prediction in Before the lab 3. How many of the 1,000 studies rejected a true H₀ at α = 0.05, and did taking 30 measurements instead of 10 change that? Explain why a larger sample does not lower the Type I error rate but does raise the power.
2. A lab group tests 20 different setups for bias at α = 0.05, and every setup is in fact unbiased. About how many will they report as biased? What does this say about reporting only the tests that came out significant?
3. Lowering α from 0.05 to 0.01 makes Type I errors rarer. Using Table 1 and the demo's power curve, what does it cost? Name one situation in a physics lab where you would accept that cost, and one where you would not.

## What to hand in

Before the lab answers, the four data tables, the graphs of Tables 2 and 3, the two complete tests in four steps, and your answers to the Analysis and Questions. Say that the data are simulated by the demo, not measured.
