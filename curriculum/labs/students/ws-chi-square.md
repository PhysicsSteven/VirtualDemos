# Chi-Square Tests: A Loaded Die, Decay Counts and a Table
Student laboratory · Statistics for physics

Textbook: OpenStax *Introductory Statistics 2e*, §§11.1 (Facts About the Chi-Square Distribution), 11.2 (the goodness of fit test), 11.3 (Test of Independence), 11.7 (Lab 1, chi square goodness of fit) and 11.8 (Lab 2: Chi-Square Test of Independence). Access for free at https://openstax.org/details/books/introductory-statistics-2e.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/chi-square-tests.html?ws=ws-chi-square)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** A loaded die (simulated); A fair die (simulated); Mendel's peas; Decay counts against Poisson (simulated); A counter with dead time (simulated); Two coins (book Example 11.4); Absent days (book Example 11.2); Streaming services (book Example 11.3); Volunteer hours (book Example 11.6); Anxiety and need to succeed (book Example 11.7); A die and a coin (simulated); Living arrangements (book Example 11.8); Counselors (book Example 11.9); Post office lines (book Example 11.11); Stopwatch timings (simulated).

**Using the demo.**

- The upper graph shows each category, or cell, of the data: the filled bar is the observed count O, the outlined bar the count E expected if the null hypothesis H₀ is true, and the square under them has an area equal to that cell's contribution $$(O - E)^2/E$$. The bar at the right stacks the contributions into χ² and marks the critical value. The table under the graph lists the same numbers.
- The box beside it states H₀, explains the degrees of freedom df, checks the rule that every expected count should be at least 5, and gives the p value from the chi square curve and the decision at the significance level **α** (set in the bar above the graph).
- The lower graph is the chi square curve for this df, with the observed χ² marked and the p value shaded. **Play** draws simulated data sets in which H₀ is true at the rate in **Data sets a second**, **Step** draws one, and **Simulate 1,000** draws a thousand at once; their χ² values fill a histogram, and the fraction at or beyond the observed χ² is the **simulated p value**. **Reset** clears the simulated data sets.
- The bar above the graph holds each setup's controls: **Rolls** and **Chance of a six** for the die, **Intervals of 1 s**, **Count rate (per s)** and **Dead time** for the counter. Changing one draws the data again and clears the simulation. The simulated sources are seeded: **Draw set 1** (in the right panel, under About this setup) always gives the same data, and **New data** moves to the next draw set. Use draw set 1 throughout this worksheet.
- Readouts: **Total count n**, **Chi square χ²**, **Degrees of freedom df**, **p value**, **Critical value**, **Simulated data sets**, **Simulated p value** and **Smallest expected count** (and **Mean count per interval** for the counter).
- **Record reading** records one row per cell (O, E and the contribution); **Export to worksheet** sends them to the matching Data table below; **Clear** starts a new series. Press Clear after each export.
- The die and the counter are simulated by the demo, not real; the volunteer data are from the book's Example 11.6.

</details>

## Goal

Test whether data fit a model with the chi square statistic: a die that may be loaded, counts from a radioactive source against the Poisson distribution, and a table of two variables for independence; and check the chi square curve's p values against data sets simulated with the null hypothesis true.

## Background

**The chi square statistic.** Sort n observations into k categories. The null hypothesis H₀ gives each category a probability $$p_i$$, so it expects $$E_i = n\,p_i$$ in category i. The observed counts $$O_i$$ never match exactly; the statistic

$$\chi^2 = \sum \frac{(O_i - E_i)^2}{E_i}$$

adds up how far they miss, each miss measured against the size of its expected count (§11.2). If H₀ is true, χ² is small: each term is about 1 on average. If H₀ is false, the misses grow with n and χ² gets large.

**Degrees of freedom.** When H₀ is true and every expected count is large enough, χ² follows the chi square distribution with df degrees of freedom: a right skewed curve with mean df and standard deviation $$\sqrt{2\,df}$$ (§11.1). The df counts the cells that are free to vary. The k counts must add up to n, so once k − 1 of them are known the last is fixed: df = k − 1. Each parameter of the model estimated from the same data costs one more. For a table with r rows and c columns, the expected counts are $$E = (\text{row total})(\text{column total})/n$$, and with the row and column totals fixed only (r − 1)(c − 1) cells are free: df = (r − 1)(c − 1) (§11.3).

**The p value and the decision.** The p value is the area of the curve at and beyond the observed χ²: the chance that a data set with H₀ true gives a χ² at least this large. If p ≤ α (here α = 0.05), reject H₀. The test is always right tailed: a very small χ² is a fit too good to be true, not evidence against H₀. A rejection does not say how H₀ is wrong; the largest contributions show where.

**The rule of five.** The chi square curve is an approximation that works when every expected count is at least 5. When some are smaller, combine neighboring categories, or simulate the null distribution directly, as the demo does: draw many data sets from H₀, compute χ² for each, and count the fraction at least as large as yours.

**Counts from a radioactive source.** A long lived source gives off particles at random moments at a steady average rate. The number counted in a fixed interval then follows the Poisson distribution with mean μ:

$$P(x) = \frac{\mu^x e^{-\mu}}{x!}, \qquad x = 0, 1, 2, \ldots$$

with variance equal to its mean. The demo estimates μ from the data as the average count, so df = k − 1 − 1 = k − 2.

## Before the lab

1. A die is rolled 60 times to test H₀: the die is fair. Give the expected count of each face, the number of categories and df. Use the chi square table in the book's Appendix H (Tables) or the demo's Critical value to state the critical value of χ² at α = 0.05 for this df.
2. A table of 3 rows by 3 columns has a row total of 255, a column total of 298 and a grand total of 839 (the book's Example 11.6). Compute the expected count of the cell in that row and column under independence, and the df of the table.
3. Predict before you look: the demo's loaded die comes up six a quarter of the time instead of a sixth. With 60 rolls, will the test reject H₀ (p ≤ 0.05)? With 300 rolls? And will Poisson counts from a radioactive source pass the test? Write one sentence of reasoning for each.

## Procedure

**A. A loaded die, 60 rolls.** In the right panel, under Setups, press **A loaded die (simulated)**. Check that the right panel says Draw set 1 (if not, press **Reset all** at the top of the page and press the setup again). Rolls is 60 and Chance of a six is 0.25. Press **Record reading** in the Readings section, then **Export to worksheet** (the rows go to Table 1), then **Clear**. Press **Simulate 1,000** once: Simulated data sets reads 1,000. Copy **Chi square χ²**, **Degrees of freedom df**, **p value** and **Simulated p value** into Table 5.

**B. The same die, 300 rolls.** Set **Rolls** to 300 (the data are drawn again and the simulation clears). Record reading, Export to worksheet (Table 2) and Clear. Press **Simulate 1,000** once and copy the four readouts into Table 5.

**C. Decay counts.** Press **Decay counts against Poisson (simulated)**: 100 intervals of 1 s at 4 counts a second, no dead time. Copy **Mean count per interval**. Record reading, Export to worksheet (Table 3) and Clear. Press **Simulate 1,000** once and copy the four readouts into Table 5.

**D. A test of independence.** Press **Volunteer hours (book Example 11.6)**. These are the book's data, not simulated. Record reading, Export to worksheet (Table 4) and Clear. Press **Simulate 1,000** once and copy the four readouts into Table 5.

**E. A counter with dead time.** Press **A counter with dead time (simulated)**: 200 intervals at 25 arrivals a second, and the counter is blind for 20 ms after each count. Copy Mean count per interval, then press **Simulate 1,000** once and copy the four readouts into the last row of Table 5.

## Data

Table 1. A loaded die, 60 rolls, against a fair die.

| Face | Observed O | Expected E | (O − E)²/E |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

Table 2. The same die, 300 rolls.

| Face | Observed O | Expected E | (O − E)²/E |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

Table 3. Decay counts in 100 intervals of 1 s against a Poisson distribution.

| Counts in 1 s | Observed O | Expected E | (O − E)²/E |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

Table 4. Volunteer hours by kind of volunteer (book Example 11.6).

| Cell | Observed O | Expected E | (O − E)²/E |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

Table 5. The tests side by side (type these from the Readouts).

| Test | χ² | df | p from the curve | Simulated p |
|---|---|---|---|---|
| Loaded die, 60 rolls | | | | |
| Loaded die, 300 rolls | | | | |
| Decay counts | | | | |
| Volunteer hours | | | | |
| Counter with dead time | | | | |

## Analysis

1. Add the last column of Table 1 to get χ², and check it against Table 5. Which face contributes most? With df and the critical value from Before the lab 1, decide at α = 0.05 whether to reject H₀ (the die is fair).
2. Do the same for Table 2. The chance of a six did not change between parts A and B. Compute the ratio of the contributions of face 6, Table 2 over Table 1, and the ratio of the numbers of rolls. Explain why a larger sample makes the same loading easier to detect.
3. In Table 3, check that every expected count is at least 5, and explain why the lowest and highest counts are grouped into one category each. Count the categories k and confirm df = k − 2. Using Mean count per interval as μ, compute the Poisson P(4) and the expected count 100 P(4), and compare with the Expected E of the 4 row.
4. In Table 4, check one expected count with E = (row total)(column total)/n from Before the lab 2. Which cell contributes most to χ², and is its observed count above or below what independence expects? State the conclusion of the test in words.
5. For each row of Table 5, compute the difference between the simulated p and the p from the curve, and its standard error $$\sqrt{p(1 - p)/1000}$$ with p the curve's value. Is each difference within two standard errors? (When the curve's p is below 0.001, say whether the simulated p is 0 or close to it instead.)
6. For a counter with no dead time, the counts are Poisson with variance equal to the mean. With dead time τ, a counter offered a rate n records on average $$n/(1 + n\tau)$$ counts a second. Compute this for n = 25 s⁻¹ and τ = 0.020 s, and compare it with the Mean count per interval from part E. Does the test reject a Poisson distribution for this counter?

## Uncertainty

The die and the counter are simulated, so their data scatter only as random samples do; each new draw set gives a different χ² and p. Under H₀ the p value is itself random, spread evenly between 0 and 1, so a test at α = 0.05 rejects a true H₀ in about 1 data set in 20. A simulated p from 1,000 data sets has standard error $$\sqrt{p(1 - p)/1000}$$, at most about 0.016. The curve's p is an approximation that needs every expected count to be at least 5; the simulated p needs no such rule, but has its own sampling scatter.

## Questions

1. Look back at your predictions in Before the lab 3. Which were right? Use parts A and B to explain why "do not reject H₀" is not the same as "H₀ is true".
2. Mendel's peas: in the demo, press **Mendel's peas**. Mendel counted 315, 108, 101 and 32 seeds of four kinds and his theory predicts the ratio 9 : 3 : 3 : 1. The demo gives χ² = 0.47 with df = 3. What is unusual about such a small χ²? Use the p value to say how often a true model would fit this well or better.
3. A physics student counts a source for 100 intervals and finds χ² = 11.9 with df = 6 against a Poisson distribution. Does this show the source is not random? What would you do next?
4. Why does the test of independence use the observed row and column totals to compute the expected counts, and how does that set the df?

## What to hand in

Before the lab answers, Tables 1 to 5, your χ² sums, decisions and standard errors, and your answers to the Analysis and Questions. Say which data were simulated by the demo and cite the book's Example 11.6 for the volunteer data.
