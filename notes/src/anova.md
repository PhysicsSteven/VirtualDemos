---
title: One Way ANOVA
level: Statistics (OpenStax Introductory Statistics 2e 13.1 to 13.5) and physics labs that compare several groups or instruments (lab groups measuring g, batches of resistors, timing methods)
time: 15 to 30 minutes
---
## What students should come away with

- ANOVA asks whether several group means are all equal (H₀) or not all equal (Hₐ). It answers by comparing two variances: how far the group means sit from the grand mean (the mean square between groups) against how far the points sit from their own group's mean (the mean square within groups).
- F = MS_between/MS_within. When H₀ is true both estimate the same σ², so F is near 1; a large F says the means differ more than the scatter can explain. The p value is the area to the right of F under F(k − 1, N − k).
- For equally spaced means with equal groups, F grows as the square of the gap and as n, and falls as the square of the spread.
- Even with every mean equal, a test at α = 0.05 gives a false alarm in about 5 % of studies.
- The F test of two variances (13.4) compares spreads, not means: F = s₁²/s₂². It assumes normal data and is sensitive to that.

## Before class

Nothing to install. Two modes: **One way ANOVA** and **Two variances**. In One way ANOVA, The groups sets k (3, 4 or 5) and Points per group n; Gap between means and Spread s within groups set the picture, or drag each group's mean and spread in the picture. In Two variances, Spread s₂ of group 2 joins them and the tail is σ₁² < σ₂², σ₁² ≠ σ₂² or σ₁² > σ₂². α is 0.10, 0.05 or 0.01. Each group is rescaled to have exactly the mean and standard deviation set, so F does not depend on the draw; New draw changes only the shapes. Play runs the number of Studies chosen (100, 1,000 or 10,000) with every mean equal and builds the histogram of F. All data are simulated. Blind, in the Lab fold, hides F, the p value and the decision. The Handout and worksheet link opens the one way ANOVA worksheet.

## Running it in class

1. **Two squares.** Open on **Three ways to time a pendulum**. Point out the two squares, whose areas are the two mean squares. Ask whether the means differ before showing F (Q1).
2. **Drag a mean.** Drag one group's mean away, then shrink the spread: watch F (Q1).
3. **More groups.** **Four lab groups measure g** and **Five batches of 100 Ω resistors** (Q2).
4. **Small groups.** **Three fertilizers and plant growth** (Q3).
5. **False alarms.** **All means equal: false alarms**, then Play (Q4).
6. Switch modes to **Two variances.** **Two variances: is the new thermometer steadier?** and **Two variances: two stopwatch timers** (Q5, Q6).

## Questions

**Q1.** Three timing methods, eight timings each, means 4 ms apart and a spread of 6 ms within each. Show that MS_within = 36 ms² and MS_between = 128 ms², so F = 3.556, with df 2 and 21. The demo gives p = 0.0468. With equal gaps d and three groups, why is F = nd²/s²? About what gap puts p at exactly 0.05? (The demo gives 3.95 ms.)

**Q2.** Four lab groups find g six times each, with a gap of 0.03 m/s² and a spread of 0.05 m/s²: F = 3.600, df 3 and 20, p = 0.0315. Five batches of ten resistors, gap 0.4 Ω and spread 0.8 Ω: F = 6.25, df 4 and 45, p = 0.0004. Find the degrees of freedom yourself. Does a significant F tell you which group is off?

**Q3.** Five plants with each of three fertilizers, a gap of 3 cm and a spread of 4 cm, give F = 2.81 with df 2 and 12 and p = 0.0996. The critical F at α = 0.05 is 3.885. What would you need to change to make a real difference show up?

**Q4.** In All means equal: false alarms the three sample means are equal, so F = 0. Press Play: each study draws new groups whose population means are all equal. What share of the F values should land beyond the critical value at α = 0.05? The mean of F(2, 21) is 21/19 = 1.105: why is it near 1?

**Q5.** An old and a new thermometer each read a 20 °C bath ten times, with spreads of 0.2 °C and 0.1 °C. Find F = s₁²/s₂² and its df. The test is right tailed: why? The demo gives p = 0.0255. Is the new thermometer steadier?

**Q6.** Two students time a pendulum twelve times each, with spreads 0.08 s and 0.15 s. Find F (0.284) and its df. The two tailed p value is 0.0480 and the lower critical value 0.288. What do you conclude, and what does it mean for a two sample t test on their periods?

## Common misconceptions

- **"ANOVA compares variances, so it tests whether the spreads differ."** One way ANOVA tests means; it uses two estimates of the same variance to do it.
- **"A significant F says every mean differs."** It says not all are equal. Which ones differ needs another look.
- **"Running a t test on every pair is the same."** With many pairs, the chance of at least one false alarm grows well past α; ANOVA asks once.
- **"F near 1 means the means are equal."** It means the data give no evidence they differ; small groups can hide a real difference.
- **"The F test of two variances is safe for any data."** It leans on normal data much more than the t test does.

## How the demo works

- Each group's points are a seeded draw of n standard normal numbers, rescaled so the sample mean and sample standard deviation are exactly the values set. Dragging a mean slides the whole group; dragging a spread stretches it about its mean.
- One way ANOVA (13.1 to 13.3): SS_between = Σ nⱼ(x̄ⱼ − x̄)² with df k − 1; SS_within = Σ (nⱼ − 1)sⱼ² with df N − k; MS = SS/df and F = MS_between/MS_within. The p value is the area of F(k − 1, N − k) to the right of F, from the shared library (demos/lib/vdstats.js).
- Two variances (13.4): F = s₁²/s₂² with df n₁ − 1 and n₂ − 1.
- Play draws studies from normal populations that share one mean and one σ, so every F above the critical value is a Type I error.
