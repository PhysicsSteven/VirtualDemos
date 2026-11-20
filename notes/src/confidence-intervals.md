---
title: Confidence Intervals
level: Statistics (OpenStax Introductory Statistics 2e 8.1 to 8.6) and physics labs that report a mean with its uncertainty (a pendulum's period, photon counting with a polarizer)
time: 15 to 35 minutes
---
## What students should come away with

- A 95 % confidence interval comes from a method that catches the true value in 95 % of samples. Any one interval either catches it or not; the 95 % is about the method, not about one interval.
- Higher confidence means wider intervals. The width shrinks as 1/√n: four times the sample, half the width.
- With σ unknown and a small sample, the interval needs t with n − 1 degrees of freedom. Putting s in place of σ with z makes intervals that are too narrow and miss too often.
- The t interval assumes a normal population; for a skewed one it needs a larger n.
- A proportion's interval p′ ± z√(p′q′/n) is a normal approximation; for a rare event and a small n it fails, and the plus four interval does much better.

## Before class

Nothing to install. Population picks Pendulum period, hand timed (s); Heights (cm), normal; Times between decays (s), skewed; or Photons through a polarizer: a proportion (with the Polarizer angle θ). Sample size n has −1 and +1. The interval is z, σ known; z with s; t with s; Normal approximation; or Plus four, and Also draw z with s (thin) adds a second interval for comparison. Confidence level (%) is 90, 95 or 99. Draw one, Draw 100, Draw 1,000 or Play stack the intervals under the true value; misses are drawn red. Two tabs: Capture rate as they pile up and Width against n. Draw set, in the Lab fold, starts new samples; Blind hides the true value and which intervals caught it. Every sample is simulated. The Handout and worksheet link opens the coverage worksheet.

## Running it in class

1. **Count the misses.** Open on **A pendulum's period: 95 % z intervals**. Ask what share will miss, then Draw 100 (Q1).
2. **Change the level.** **90, 95 or 99 %: the same samples**: Draw 100, then switch the level (Q2).
3. **Small samples.** **n = 4: t against z with s** (Q3).
4. **Skewed data.** **Skewed decay times, t at n = 5**, then raise n to 40 (Q4). **Heights, t intervals, n = 25** for a normal population.
5. **Width.** **Width shrinks as 1/√n** on the Width against n tab (Q5).
6. **A proportion.** **Photons through a polarizer at 60°**, then **A rare event, n = 15: plus four** (Q6, Q7).

## Questions

**Q1.** A 1.000 m pendulum has a true period T = 2π√(L/g) = 2.006 s. Each sample is ten hand timings with σ = 0.080 s known. Find the width 2zσ/√n of a 95 % z interval (0.0992 s). Before you Draw 100, how many intervals do you expect to miss? Are all samples of 100 going to give exactly 5? Does a red interval mean the student made a mistake?

**Q2.** With the same samples, the 90 % and 99 % intervals are 0.0832 s and 0.1303 s wide. Why does more confidence cost width? What would a 100 % interval look like?

**Q3.** With four timings and σ unknown, t with 3 degrees of freedom is 3.182, not 1.96. The z with s interval catches the truth only P(|T| ≤ 1.96) = 85.5 % of the time for df = 3. Why is s so often smaller than σ in a small sample, and why does the t interval fix it?

**Q4.** Times between decays are exponential with mean 2.00 s. In 20,000 simulated samples, t intervals at n = 5 catch the mean about 88 % of the time, and at n = 40 about 93 %. Why does a skewed population hurt the t interval, and why does a larger n help?

**Q5.** The width of a 95 % z interval for the pendulum is 0.0992 s at n = 10. Predict it at n = 40 and n = 160, then check on the Width against n tab (0.0496 s and 0.0248 s). How many timings would halve the n = 40 width again?

**Q6.** A photon passes a polarizer at 60° with probability cos² 60° = 0.25 (Malus's law). With 50 photons a sample, check np and nq. The normal approximation interval catches p about 94 % of the time in 20,000 samples: is that close enough to 95 %?

**Q7.** At 72° only p = 0.0955 of the photons pass. With n = 15, what is the chance a sample has no photons at all (0.222), and what interval does p′ = 0 give? The normal approximation catches p about 77 % of the time; plus four, about 95 %. What does plus four do, and why does it help?

## Common misconceptions

- **"There is a 95 % chance the true value is in this interval."** The true value is fixed; the method catches it 95 % of the time. A given interval either does or does not.
- **"95 % of the data lie in the interval."** The interval is for the mean (or proportion), not for single readings, which spread √n times wider.
- **"A wider interval is a worse measurement."** It is a more honest one at higher confidence; more data, not a smaller z, is the way to narrow it.
- **"z and t are interchangeable."** For small samples with s, z gives intervals that miss far too often.
- **"Zero successes means p = 0."** A sample of 15 with no photons is common at p = 0.0955; the normal interval of zero width is useless there.

## How the demo works

- Every sample is simulated with a seeded random number generator: the pendulum timings are T plus a normal error with σ = 0.080 s, with g = 9.81 m/s² from constants.js; heights normal with μ = 165.0 cm and σ = 7.0 cm; times between decays exponential with mean 2.00 s; each photon passes with probability cos²θ.
- The intervals follow the book: x̄ ± z(σ/√n); z with s; x̄ ± t(s/√n) with n − 1 degrees of freedom; p′ ± z√(p′q′/n); plus four, with two successes and two failures added. The critical values come from the exact normal and t distributions (demos/lib/vdstats.js).
- The samples are kept, so a new level or interval recounts the same samples; a new n, population, angle or draw set starts new ones. Each n has its own stream.
- On the Width against n tab, each dot is the mean width at that n, and the curve is 2zσ/√n (or 2z√(pq/n)).
- The capture rates over 20,000 samples quoted above were computed with the demo's own code (Draw set 1).
