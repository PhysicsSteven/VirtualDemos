---
title: Distribution Explorer
level: Statistics (OpenStax Introductory Statistics 2e 4.1, 4.3 to 4.6, 5.1 to 5.3, 6.1, 6.2, 8.2, 11.1, 13.2 and 13.3) and physics labs that model counts, waiting times, timings and meter resolution
time: 15 to 40 minutes
---
## What students should come away with

- A probability is an area under a density curve (continuous) or a sum of bars (discrete). For a discrete distribution the ends count: P(X ≤ 12) includes 12. For a continuous one a single value has probability zero.
- A percentile is the value with a given area to its left: the inverse of the cumulative distribution. A z score is a value measured in standard deviations from the mean.
- Each distribution has a story: the binomial counts successes in n independent tries, the hypergeometric draws without replacement, the geometric waits for the first success, the Poisson counts rare independent events, the exponential is the wait between them, the uniform spreads evenly, and the normal piles up around a mean.
- Approximations have limits: the normal approximates the binomial when np and nq are both at least 5 (with the continuity correction), the Poisson approximates it when p is small, and t approaches the normal as df grows.
- Random draws from a distribution fill a histogram that takes the shape of its curve.

## Before class

Nothing to install. Ten families on the switch: Binomial, Geometric, Hypergeometric, Poisson, Uniform, Exponential, Normal, Student t, Chi square and F, each with its sliders. The event is Between a and b, Left of b or Right of a, with a = and b = (or drag the edges); the calculator command the book would use is shown. Area to the left finds the percentile. Comparison boxes (for example Normal approximation, N(np, √(npq)) and Poisson with μ = np for a binomial, Standard normal N(0, 1) for t) draw a second curve. Play draws random values at 10/s, 100/s or 1,000/s into a histogram; Seed sets the draws. Setups come in three groups: From the book (ten examples), Compare (**t closes in on the normal as df grows**, **Binomial against normal and Poisson**, **The empirical rule: within 2σ**) and In the lab (**Decay counts in 10 s: Poisson**, **Waiting time between decays: exponential**, **Hand timed pendulum: normal**, **Rounding error of a meter: uniform**). Blind, in the Lab fold, hides the probability and the percentile.

## Running it in class

1. **An area.** Open on **Exam scores N(63, 5): P(X > 65) (6.2)**, Blind on. Ask for a guess, then show it; press Play to draw students (Q1).
2. **Discrete counts.** **Binomial B(20, 0.41): P(X ≤ 12) (4.3)** and **Hypergeometric: more than 4 men (4.5)** with the binomial comparison on (Q2).
3. **Big means look normal.** **Poisson P(147): P(X ≤ 160) (4.6)** with the normal comparison (Q3).
4. **t and the normal.** **t with df = 14: invT(0.975, 14) (8.2)**, then **t closes in on the normal as df grows**: drag df (Q4).
5. **Which approximation?** **Binomial against normal and Poisson** (Q5).
6. **The lab models.** **Decay counts in 10 s: Poisson** and **Waiting time between decays: exponential** (Q6), then **Hand timed pendulum: normal**, **The empirical rule: within 2σ** and **Rounding error of a meter: uniform** (Q7, Q8).

## Questions

**Q1.** Final exam scores are N(63, 5). Find the z score of 65 and P(X > 65); the book writes normalcdf(65, 1E99, 63, 5) = 0.3446. Press Play: why does the histogram match the curve better and better? About what share of the drawn students should score above 65?

**Q2.** 41 % of adult workers have a high school diploma but no further education; pick 20. Find the mean of X ~ B(20, 0.41) and P(X ≤ 12) = 0.9738. A committee of 7 is chosen from 18 women and 15 men: why is the number of men hypergeometric, not binomial? The demo gives P(X ≥ 5) = 0.1301; drawing with replacement would give 0.1589. Why does drawing without replacement make five or more men less likely?

**Q3.** An email user gets 147 emails a day on average. P(X ≤ 160) = 0.8666 for the Poisson; the normal with mean 147 and SD √147, with the continuity correction, gives 0.8672. Why is the normal so close here, and what is the continuity correction for?

**Q4.** For a 95 % interval with n = 15, invT(0.975, 14) = 2.145, against 1.96 for the normal. Why is t bigger? With df = 1, P(t > 2) = 0.1476 against 0.0228 for the normal. Drag df to 5, 10 and 30: the demo gives 0.0510, 0.0367 and 0.0273. When is it fair to use the normal instead of t?

**Q5.** For B(50, 0.1), P(3 ≤ X ≤ 7) = 0.7661. The normal approximation with the continuity correction gives 0.7614 and the Poisson with μ = np = 5 gives 0.7420. Which is closer here? Check the rule of thumb np ≥ 5 and nq ≥ 5. Move p down toward 0.02 and up toward 0.5: which approximation wins where?

**Q6.** A weak source gives 3.2 counts in 10 s on average. Find P(X ≥ 6) (0.1054): would a count of 6 be a sign that something is wrong? The wait between decays is exponential with m = 0.32 per second. Show that P(wait > 10 s) = e^(−3.2) = 0.0408, and explain why it equals the chance of zero counts in 10 s.

**Q7.** Hand timings of a 2.000 s period scatter normally with σ = 0.06 s. What is the chance a single timing lands within 0.1 s of the truth (0.9044)? Within one σ? Compare with the empirical rule: P(−2 < Z < 2) = 0.9545, and about 68 % and 99.7 % within one and three σ.

**Q8.** A meter that shows one decimal place hides an error spread evenly from −0.05 to 0.05 of the last unit. Show that the standard deviation is 0.1/√12 = 0.0289, and find the chance the error is less than 0.02 in size. Why is 0.0289, not 0.05, the standard uncertainty of a reading?

## Common misconceptions

- **"P(X < 12) and P(X ≤ 12) are the same."** Only for a continuous variable. For a count they differ by P(X = 12).
- **"The density is the probability."** For a continuous variable the height is a density; only areas are probabilities, and a density can be above 1.
- **"Every bell shaped histogram is normal."** The Poisson with mean 147 and t with large df look normal, but each has its own formula and its own tails.
- **"The normal approximation always works for a binomial."** It needs np and nq both large enough; with p near 0 the binomial is skewed.
- **"The exponential wait gets shorter the longer you have waited."** It has no memory: having waited 5 s changes nothing.

## How the demo works

- Every probability comes from the cumulative distribution functions in the shared library (demos/lib/vdstats.js): exact sums for the discrete families, and the error function, the incomplete beta function and the incomplete gamma function for the continuous ones, good to about ten significant figures. The command shown is the one the book writes for a TI-83 or TI-84, with 1E99 for an open end.
- Percentiles are invNorm and invT, or bisection on the cumulative distribution for the other continuous families; for a discrete one, the smallest x whose cumulative probability reaches the area.
- Draws are seeded and simulated from the definitions: successes counted trial by trial for the binomial and hypergeometric, the Poisson by multiplying uniform numbers (or by inversion for a large mean), and so on. The histogram is scaled so its bars have the same area as the curve.
- The normal approximation to a discrete distribution uses the continuity correction: P(a ≤ X ≤ b) is the normal area from a − 0.5 to b + 0.5.
