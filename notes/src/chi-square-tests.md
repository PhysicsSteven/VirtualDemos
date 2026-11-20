---
title: Chi-Square Tests
level: Statistics (OpenStax Introductory Statistics 2e 3.4 and 11.1 to 11.8) and physics labs that test counts against a model (radioactive decay against Poisson, detector dead time, a timer's spread)
time: 15 to 40 minutes
---
## What students should come away with

- χ² = Σ (O − E)²/E adds up how far each observed count is from the count the hypothesis expects, scaled by that count. The demo draws each cell's share as a square.
- Goodness of fit compares one variable with a hypothesized distribution (df = categories − 1, less one more for each parameter estimated from the data). Independence asks whether two variables of one sample are related; homogeneity asks whether several samples share one distribution. Both use E = (row total)(column total)/(grand total) and df = (rows − 1)(columns − 1).
- The p value is the area under the chi square curve to the right of the statistic. The curve is an approximation for counts, good when every expected count is at least 5.
- A very small χ² can be suspicious too: data that fit too well.
- The test of a single variance, χ² = (n − 1)s²/σ₀², asks about a spread and needs normal data.

## Before class

Nothing to install. Four modes: **Goodness of fit**, **Independence**, **Homogeneity** and **Single variance**. Each simulated source has its own controls: Rolls and Chance of a six for the die; Intervals of 1 s, Count rate (per s) and Dead time for the counter; Throws for the die and coin; Timings n and Stopwatch spread σ for the stopwatch. The tail (Hₐ) and α are set for a single variance. New data draws another seeded data set. Simulate 1,000 (or Play) draws data sets where H₀ is true and fills a histogram of their statistics under the chi square curve. Two panels: The cells and The test. The setups include eight book examples (11.2, 11.3, 11.4, 11.6, 11.7, 11.8, 11.9 and 11.11), Mendel's peas, and simulated sources. Blind, in the Lab fold, hides χ², the p value and the decision. The Handout and worksheet link opens the chi square worksheet.

## Running it in class

1. **A loaded die.** Open on **A loaded die (simulated)** with Blind on: ask whether the bars give the loading away, then show χ². Raise Rolls to 300 (Q1). Then **A fair die (simulated)** and Simulate 1,000 (Q2).
2. **Mendel's peas** (Q3), then **Two coins (book Example 11.4)** and **Absent days (book Example 11.2)** (Q4).
3. **Physics counts.** **Decay counts against Poisson (simulated)**, then **A counter with dead time (simulated)** (Q5).
4. Switch modes to **Independence.** **Volunteer hours (book Example 11.6)** and **A die and a coin (simulated)** (Q6).
5. Switch modes to **Homogeneity.** **Living arrangements (book Example 11.8)** (Q7).
6. Switch modes to **Single variance.** **Post office lines (book Example 11.11)** and **Stopwatch timings (simulated)** (Q8).

## Questions

**Q1.** A die is loaded so a six comes up a quarter of the time (the other faces 0.15 each). H₀: the die is fair. With 60 rolls the expected count is 10 a face, df = 5 and the critical value at α = 0.05 is 11.07. Press New data several times: how often does the test catch the loading? (In 100,000 simulated sets of 60 rolls, about 22 % reject; with 300 rolls, about 83 %.) What does that say about small samples?

**Q2.** With a fair die, H₀ is true. About what share of data sets give p < 0.05? Press Simulate 1,000: the histogram of χ² should follow the chi square curve with df = 5. What are its mean and its standard deviation?

**Q3.** Mendel counted 315 round yellow, 108 round green, 101 wrinkled yellow and 32 wrinkled green seeds, 556 in all. Find the expected counts for 9 : 3 : 3 : 1 (312.75, 104.25, 104.25, 34.75), χ² (0.470), df and the p value (0.9254). Some have argued the fit is too close: how likely is a fit at least this good if his theory is right?

**Q4.** Two coins tossed 100 times give 20, 57 and 23 for two, one and no heads. Show that χ² = 2.14 with df = 2 (p = 0.3430). Sixty absences spread over five days as 15, 12, 9, 9 and 15 give χ² = 3 with df = 4 (p = 0.5578). What do you conclude in each case, in words?

**Q5.** A Geiger counter counts 100 intervals of 1 s at 4 counts a second. Why are the counts grouped so every expected count is at least 5, and why is df = groups − 2? A busy counter sees 25 arrivals a second and is blind for 20 ms after each count it records. Show that it records 25/(1 + 25 × 0.020) = 16.7 counts a second, about a third fewer. Why are its counts more even than a Poisson distribution allows, and does the test notice?

**Q6.** For 839 volunteers in three groups and three ranges of hours, H₀: hours are independent of the kind of volunteer. Find the expected count for community college students volunteering 1 to 3 hours (90.57). The book gives χ² = 12.99, df = 4, p = 0.0113. For a fair coin and a fair die thrown together 120 times, H₀ is true: what does the histogram of p values look like over many data sets?

**Q7.** 250 men and 300 women report where they live. Why is this a test of homogeneity, not independence, though the arithmetic is the same? The book gives χ² = 10.1287, df = 3, p = 0.0175. What do you conclude?

**Q8.** With a single line, 25 waiting times have s = 3.5 min against σ₀ = 7.2 min for separate lines. Find χ² = (n − 1)s²/σ₀² (5.67), df and the left tailed p value (0.000042). For twenty stopwatch timings and a maker's claim of σ₀ = 0.05 s, the right tailed critical value at α = 0.05 is 30.14. What would s = 0.07 s give (37.24), and what would you conclude?

## Common misconceptions

- **"A large χ² proves the die is loaded in a particular way."** It says the counts do not fit H₀; the cell squares show where.
- **"A small p is the only warning sign."** A p value very close to 1 (Mendel's 0.9254) can mean data that fit suspiciously well.
- **"Use the percentages."** χ² needs counts: the same percentages from ten times the data give ten times the χ².
- **"Independence and homogeneity are the same test."** The arithmetic is the same, but the sampling and the question differ: one sample cross classified, or several samples compared.
- **"Expected counts must be whole numbers."** They are averages over many samples, such as 312.75.

## How the demo works

- χ² = Σ (O − E)²/E over every cell; E = n·p for goodness of fit and (row total)(column total)/(grand total) for tables; a single variance uses (n − 1)s²/σ₀². The p value is the chi square curve's area beyond the statistic (the regularized incomplete gamma function in demos/lib/vdstats.js), as the book's calculator gives it.
- Small expected counts are flagged, and the decay counts are grouped so every expected count is at least 5, with one more degree of freedom lost to the estimated mean.
- The simulation needs no approximation: counts fall into the cells with the chances H₀ gives, and the simulated p value is the share of simulated statistics at or beyond the observed one.
- The simulated sources are seeded: a die with the chance of a six you set; a long lived source counted in 1 s intervals as a Poisson process, with a counter blind for its dead time after each recorded count; a fair die and coin; a stopwatch whose readings of a 2.006 s period (a 1.000 m pendulum) scatter normally with the set σ, rounded to 0.01 s.
- The book's data are from OpenStax Introductory Statistics 2e, chapter 11; Mendel's from Versuche über Pflanzen-Hybriden (1866).
- The rejection rates in Q1 were computed for these notes by simulating the loaded die directly (100,000 sets each), not read from the demo.
