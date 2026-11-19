# One Way ANOVA: Gaps, Spreads and False Alarms
Student laboratory · Statistics for physics

Textbook: OpenStax *Introductory Statistics 2e*, §§13.1 to 13.5 (one way ANOVA, the F distribution and the F ratio, facts about the F distribution, the test of two variances, and the chapter's ANOVA lab). Access for free at https://openstax.org/details/books/introductory-statistics-2e.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/anova.html?ws=one-way-anova)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Three ways to time a pendulum; Four lab groups measure g; Five batches of 100 Ω resistors; Three fertilizers and plant growth; All means equal: false alarms; Two variances: is the new thermometer steadier?; Two variances: two stopwatch timers.

**Using the demo.**

- Each column of dots is one group's sample. The thick bar is the group's mean, and the bracket with two open circles marks one standard deviation s above and below it. The dashed line across is the grand mean of all the points. Thin gray lines join each point to its own group's mean (the within groups scatter); the thick colored lines join each group mean to the grand mean (the between groups differences).
- Drag a mean bar up or down, or drag an open circle to stretch or squeeze a group. Or use the sliders in the **Means and spreads** card: **Gap between means** spaces the group means evenly that far apart, and **Spread s within groups** gives every group that standard deviation. Click a slider's number to type a value. **Points per group n** and **Groups k** are in **The groups** card; **New draw** gives the groups new shapes.
- Beside the dots, two squares have the two mean squares as their areas: between groups and within groups. Their ratio is F. The ANOVA table under the picture lists SS, df, MS, F and the **p value**, with the decision at the **Significance level α** in **The test** card.
- **Play** runs 1,000 studies in which every group comes from populations with the same mean (H₀ true), and fills the histogram of their F values under the F curve. The line under it tallies **Null studies**, **False alarms** (F beyond the critical value) and the **Fraction**. Changing α recounts the same studies.
- **Two variances** (top of the picture, or the two variances setups) compares the spreads of two groups with F = s₁²/s₂².
- **Record reading** stores the settings, F, the p value and the tally of the null studies. **Export to worksheet** fills the Data tables below; **Clear** starts a new series. All data are simulated; Draw 1 is the same for everyone.

</details>

## Goal

See what the F ratio of a one way ANOVA measures: make the gaps between group means bigger and the scatter within groups smaller and watch F grow as a ratio of two variances. Then run many studies with every mean equal and count how often ANOVA raises a false alarm.

## Background

**The question.** You have k groups (three ways of timing a pendulum, five batches of resistors) with $$n_j$$ measurements each. Are the population means all equal? H₀: $$\mu_1 = \mu_2 = \cdots = \mu_k$$. Hₐ: not all the means are equal. Comparing the groups two at a time with t tests would raise the chance of a false alarm with every comparison; ANOVA asks the question once.

**Two estimates of one variance.** If H₀ is true and every group has the same population variance σ², there are two independent ways to estimate σ²:

- **Within groups.** Each group's own variance $$s_j^2$$ estimates σ², however far apart the means are. Pooled: $$MS_{within} = \frac{SS_{within} }{N - k}, \quad SS_{within} = \sum_j (n_j - 1)s_j^2,$$ with N the total number of points.
- **Between groups.** The group means scatter about the grand mean $$\bar{x}$$; if H₀ is true that scatter comes only from chance, and $$MS_{between} = \frac{SS_{between} }{k - 1}, \quad SS_{between} = \sum_j n_j(\bar{x}_j - \bar{x})^2,$$ also estimates σ². If the means really differ, $$MS_{between}$$ is larger.

**The F ratio.** $$F = MS_{between}/MS_{within}$$. When H₀ is true, F is near 1 and follows the F distribution with $$df_{num} = k - 1$$ and $$df_{denom} = N - k$$. The F distribution is never negative and is skewed to the right; its mean is $$df_{denom}/(df_{denom} - 2)$$, a little more than 1. The p value is the area to the right of your F, so ANOVA is always a right tailed test. ANOVA assumes each population is normal, the samples are independent, and the population variances are equal.

**Equal gaps.** For k = 3 groups of n points each, with means a gap d apart and every group's standard deviation s, $$SS_{between} = n\,(d^2 + 0 + d^2) = 2nd^2$$, so $$MS_{between} = nd^2$$ and $$MS_{within} = s^2$$:

$$F = \frac{n d^2}{s^2}.$$

**The test of two variances.** To ask whether two populations have the same variance, $$F = s_1^2 / s_2^2$$ with df $$n_1 - 1$$ and $$n_2 - 1$$. Values far above 1 or far below 1 are evidence the variances differ.

## Before the lab

1. Three groups of n = 8 have means 2002, 2006 and 2010 ms and each has s = 6 ms. Compute $$MS_{between}$$, $$MS_{within}$$ and F from the formulas above.
2. What are $$df_{num}$$ and $$df_{denom}$$ for k = 3 groups of 8? For 5 groups of 8?
3. Predict before you look: if you double the gap between the means and keep the spread, by what factor will F change? If you double the spread and keep the gap? And when every mean is equal and you run 1,000 studies at α = 0.05, about how many will give a false alarm? Write your guesses and one sentence of reasoning for each.

## Procedure

**A. The gap between means.** Press the setup **Three ways to time a pendulum** (k = 3, n = 8, spread s = 6 ms). In the **Means and spreads** card, set **Gap between means** to 0 (click its number and type 0) and press **Record reading** in the Readings section. Repeat with a gap of 2, 4, 6, 8 and 10 ms, recording each time. Watch the between groups square grow. Press **Export to worksheet** (Table 1), then **Clear**. In Table 1, fill the column Gap² for each row.

**B. The spread within groups.** Set **Gap between means** to 6 ms. Set **Spread s within groups** to 3 ms and record; repeat with 6, 9, 12 and 15 ms. Watch the within groups square grow. Export to worksheet (Table 2), then Clear. Fill the column 1/s² for each row.

**C. False alarms.** Press the setup **All means equal: false alarms** (every group mean equal, so H₀ is true). Press **Play** and wait for the 1,000 null studies to finish. With **Significance level α** at 0.10 record a reading; then choose 0.05 and record; then 0.01 and record. Then set α to 0.05, choose **Groups k** = 5, press **Play**, and record when it ends. Finally set **Groups k** = 3 and **Points per group n** = 4, press **Play**, and record when it ends. Export to worksheet (Table 3), then Clear.

**D. Two variances.** Press the setup **Two variances: is the new thermometer steadier?** (old thermometer s₁ = 0.2 °C, new s₂ = 0.1 °C, ten readings each, right tailed). Record a reading. Then set **Spread s₁ of group 1** to 0.15 °C and record again. Export to worksheet (Table 4).

## Data

Table 1. The gap between means, three groups of 8, spread 6 ms.

| Reading | Gap between means (ms) | Spread s (ms) | F | p value | Gap² (ms²) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

Table 2. The spread within groups, three groups of 8, gap 6 ms.

| Reading | Gap between means (ms) | Spread s (ms) | F | p value | 1/s² (1/ms²) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

Table 3. False alarms: 1,000 studies with every mean equal.

| Reading | Groups k | Points per group n | α | Studies | False alarms | Fraction |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Table 4. The test of two variances: old thermometer (group 1) against new (group 2).

| Reading | s₁ (°C) | s₂ (°C) | F | p value |
|---|---|---|---|---|
| | | | | |
| | | | | |

## Analysis

1. Graph Table 1: F (vertical) against Gap² (horizontal), and fit a straight line. What are its slope and intercept? Compare the slope with $$n/s^2$$ for n = 8 and s = 6 ms.
2. From Table 1, what is the smallest gap whose p value is below 0.05? Explain in one sentence why a gap of 2 ms is not enough evidence, even though the three sample means are really different.
3. Graph Table 2: F against 1/s², and fit a straight line. Compare its slope with $$nd^2$$ for d = 6 ms. In words: what does making each group noisier do to the evidence that the means differ?
4. For each row of Table 3, compute the standard error of the fraction, $$\sqrt{f(1 - f)/1000}$$, and say whether the fraction is within two standard errors of α. Did the number of groups or the number of points per group change the false alarm rate?
5. For Table 4, first row: write H₀ and Hₐ, check F = s₁²/s₂² by hand, give df, and state the decision and a conclusion in words at α = 0.05. Does the second row change the decision?

## Uncertainty

The F values and p values in Tables 1, 2 and 4 are exact for the samples drawn: each group is rescaled so its mean and standard deviation are exactly the values you set, so the formula $$F = nd^2/s^2$$ holds to the digits shown. The fractions in Table 3 come from 1,000 simulated studies and carry the counting uncertainty $$\sqrt{f(1 - f)/1000}$$, about 0.007 near 0.05. Two fractions that differ by less than about two of these are not really different.

## Questions

1. Look back at your predictions in Before the lab 3. Did doubling the gap change F by the factor you guessed? Did doubling the spread? Use the two squares in the picture to explain why.
2. A student compares the three timing methods two at a time with three t tests at α = 0.05, when in fact all three means are equal. Is the chance that at least one test falsely rejects more or less than 0.05? Why does one ANOVA avoid this?
3. ANOVA assumes the groups have equal variances. Before running an ANOVA on the stopwatch, phone app and photogate timings, which test from this worksheet could you use to check that assumption for two of the methods, and what would make you worry?

## What to hand in

Before the lab answers, the four data tables, the graphs of Tables 1 and 2 with their fits, and your answers to the Analysis and Questions. Say that the data are simulated by the demo, not measured.
