---
title: Hypothesis Tests
level: Statistics (OpenStax Introductory Statistics 2e 9.1 to 9.6 and 10.1 to 10.5) and physics labs that compare a measured value with a known one or two instruments with each other
time: 15 to 40 minutes
---
## What students should come away with

- A test follows four steps: the hypotheses (H₀ names a value, Hₐ says which way it might be wrong), the distribution of the statistic when H₀ is true, the p value, and a decision with a conclusion in words.
- The p value is the area of the null distribution at and beyond the sample's statistic, in the direction Hₐ points. It is not the chance that H₀ is true.
- Reject H₀ when p < α. Even when H₀ is true, a test at α = 0.05 rejects it in about 5 % of studies: Type I errors. When H₀ is false, the share of studies that reject it is the power, 1 − β; the rest are Type II errors.
- Power grows with the size of the effect, the sample size and α, and shrinks with the spread. A study that fails to reject has not shown H₀ is true.
- Which test depends on the data: z when σ is known, t with s when it is not, a proportion test for counts of successes, two sample tests (with Welch's df when the spreads differ), and matched pairs when each unit is measured twice.

## Before class

Nothing to install. Eight setups, each a lab question: **Pendulum g: is it 9.81? (t test)**, **Drop timer, σ known: is g low? (z test)**, **Detector efficiency: above 80 %? (one proportion)**, **A die: are sixes one in six? (one proportion)**, **Two photogates, σ known: same period? (two means, z)**, **Two stopwatch timers: same period? (two means, Welch t)**, **Two detectors: same efficiency? (two proportions)** and **New photogate: did it change the period? (matched pairs)**. The test card sets the tail (Left tailed, Two tailed, Right tailed) and α (0.10, 0.05, 0.01); the study card sets the Sample size n (and the Second sample size n₂), the Spread σ and New draw. The truth card holds the True value the simulation uses (the test never sees it), Make H₀ true, and Simulate the power curve. Play runs the number of Studies chosen (100, 1,000 or 10,000) and tallies how often the test rejects. Blind, in the Lab fold, hides the p value, the decision and the power curve. All data are simulated and seeded: Draw 1 is the same on every computer. The Handout and worksheet link opens the errors and power worksheet.

## Running it in class

1. **One study.** Open on **Pendulum g: is it 9.81? (t test)**. Walk through the four steps on the page and read the p value (Q1).
2. **A thousand studies with H₀ true.** Press Play and count the rejections; switch α (Q1).
3. **One tail.** **Drop timer, σ known: is g low? (z test)**: the truth is 9.79 m/s², so H₀ is false. Read the p value left tailed and two tailed, then press Play and compare the tally with the theory power (Q2).
4. **Proportions.** **Detector efficiency: above 80 %? (one proportion)** and **A die: are sixes one in six? (one proportion)** (Q3).
5. **Missing a real effect.** **Two photogates, σ known: same period? (two means, z)**: raise Sample size n and Second sample size n₂ until the power reaches 0.80 (Q4).
6. **Unequal spreads and pairs.** **Two stopwatch timers: same period? (two means, Welch t)**, **Two detectors: same efficiency? (two proportions)**, then **New photogate: did it change the period? (matched pairs)** (Q5, Q6).
7. **The power curve.** On any setup press Simulate the power curve and compare the dots with the theory curve (Q7).

## Questions

**Q1.** Ten pendulum timings give g with a spread the test does not know. Write H₀ and Hₐ for "is this pendulum's mean g 9.81 m/s²?". Draw 1 gives t = 0.600 with df = 9 and p = 0.5635: what is the decision, and the conclusion in words? The truth is 9.81, so H₀ is true: press Play for 1,000 studies. About how many should reject at α = 0.05? (Draw 1 gives 51.) Switch α to 0.10 and 0.01 with the same studies: why can a smaller α only reject fewer?

**Q2.** A drop timer has a known σ = 0.03 m/s², eight drops, and air drag could only make g low. Why is this a left tailed z test? Draw 1 gives z = −1.921. Find the p value left tailed (0.0274) and say what changes if the student had used a two tailed test (p = 0.0547). With the truth at 9.79 m/s², the theory power at α = 0.05 is 0.595: what share of 1,000 studies should reject, and what do we call the others?

**Q3.** The detector setup sends 150 particles; Draw 1 detects 132. Find p′, check np₀ and nq₀ for p₀ = 0.80, and find z (the demo gives 2.449 and p = 0.0072, right tailed). For the die, 18 sixes in 120 rolls give z = −0.490 and p = 0.6242: does the die look unfair? Why is the Type I error rate of a proportion test only close to α, not exactly α?

**Q4.** Two photogates time one pendulum ten times each, σ = 2.0 ms known for each. Gate 1 truly reads 1.5 ms long, yet Draw 1 gives z = 1.760 and p = 0.0784. Which error is that? The theory power is 0.389. Raise Sample size n and Second sample size n₂ together: at what n does the power first reach 0.80? (The demo gives 28 for each gate.)

**Q5.** Two students time one pendulum 12 and 8 times with spreads 0.08 s and 0.15 s. Why does the book not pool their variances here? Draw 1 gives t = 2.110 with Welch's df = 8.30 and p = 0.0666. Why is the df not a whole number? For the two detectors, Draw 1 gives z = 1.784 and p = 0.0744: what is the pooled proportion for?

**Q6.** Ten pendulums of very different lengths are each timed with the old and the new photogate. Why test the ten differences new − old (a one sample t test) instead of comparing the two sets of ten periods? Draw 1 gives t = 0.826, df = 9, p = 0.4301, although the new gate truly reads 2.0 ms long. How many pendulums give a power of 0.80? (The demo gives 20.)

**Q7.** Press Make H₀ true on any setup, then Simulate the power curve. Where does the curve cross the true value of H₀, and why is it α there? Why are the dots for the proportion and Welch setups allowed to sit a little off the theory curve?

## Common misconceptions

- **"The p value is the chance that H₀ is true."** It is the chance of a result at least this extreme if H₀ is true.
- **"Not rejecting H₀ proves it."** The two photogates differ by 1.5 ms and the test misses it most of the time at n = 10: absence of evidence is not evidence of absence.
- **"A significant result is an important one."** With a big enough sample, a tiny and useless difference becomes significant.
- **"α = 0.05 means 5 % of my conclusions are wrong."** It is the rate of false alarms among studies where H₀ is true; the share of wrong conclusions depends also on how often H₀ is false and on the power.
- **"Choose the tail after seeing the data."** The tail comes from the question, before the data: switching a two tailed test to one tail after the fact halves the p value dishonestly.

## How the demo works

- Every study is simulated from the True value and spread on the sliders (normal data, or successes with the true probability), with seeded random numbers; Play runs studies from its own seeded stream, so the same settings give the same tally.
- The statistics follow the book through the shared library (demos/lib/vdstats.js): z = (x̄ − μ₀)/(σ/√n); t = (x̄ − μ₀)/(s/√n) with df = n − 1; one proportion z = (p′ − p₀)/√(p₀q₀/n), the normal approximation; two means with σ known; the unpooled t with Welch's df; two proportions with the pooled proportion; matched pairs as a one sample t test on the differences.
- The theory power curve is exact for the z tests and uses the noncentral t (by numerical integration) for the one sample and matched pairs t tests. For proportions it uses the normal approximation, and for Welch's test it treats the statistic as a t with the df the true spreads give, so the simulated dots can sit a little off the curve.
- A simulated share f from N studies has a standard error √(f(1 − f)/N).
