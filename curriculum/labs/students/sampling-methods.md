# How You Sample Matters: Five Methods and a Lurking Variable
Student laboratory · Statistics for physics

Textbook: OpenStax *Introductory Statistics 2e*, §§1.2 (Data, Sampling, and Variation in Data and Sampling), 1.4 (Experimental Design and Ethics) and 1.6 (Sampling Experiment). Access for free at https://openstax.org/details/books/introductory-statistics-2e.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/sampling-lab.html?ws=sampling-methods)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Simple random: pocket change; Stratified: 5 from each section; Cluster: two blocks of seats; Systematic: every 20th seat; Convenience: the ones by the door; Self selected: who chooses the videos?; Randomized: a coin decides; Means of skewed reaction times, n = 5; Pocket change: sums of n = 10; Uniform seconds: n = 2 makes a triangle; Bimodal commutes: n = 30; n = 1: the means are the population.

**Using the demo.**

- The picture is a lecture hall of 400 students, 16 rows of 25 seats, with the board at the front and the door at the back left. Each seat's color is that student's value (light few cents, dark many; the legend under the hall gives the values). The four sections of four rows, A to D, are the strata.
- **Sampling methods** (the first view): the **Sampling method** switch picks Simple random, Stratified, Cluster, Systematic or Convenience. **Draw a sample** takes one sample of 20 and rings the students picked; **Draw 100** takes 100 at once; **Play** draws them one at a time, then faster, up to the next 100. Each sample's mean x̄ drops as a dot into its method's row in the lower graph; the green line is the population mean μ.
- The Readouts give **Samples drawn**, **This sample's mean x̄**, **Population mean μ**, **Mean of the x̄'s**, **Bias, mean of x̄'s − μ** and **Spread, s of the x̄'s** for the method chosen. **Reset** clears every method's samples.
- **Experiment** (the second view): the same 400 students in a study of review videos. **Self selected** lets each student choose; **Randomized** lets a coin decide. **Run the study** forms the two groups once (orange watched, gray did not); **Run it 100 times** repeats it. **True effect of the videos** is what the videos really add to a score. **Show study hours** shades each seat by the student's weekly study hours.
- **Record reading** stores one row for each method (or each design) that has samples; **Export to worksheet** fills Table 1 (methods) or Table 2 (the study); **Clear** empties the Readings list.
- Everything is simulated, from a seeded random number generator: the same draw set (1, in the Lab section) gives the same hall and the same samples every time. No real students were measured.

</details>

## Goal

Take many samples of 20 from the same population by five methods and measure each method's bias (does it center on the truth?) and spread (how far do its estimates scatter?). Then compare a self selected study with a randomized one and find the lurking variable that fools the first.

## Background

A **population** is everyone you want to know about; a **sample** is the part you actually measure. A **parameter** (the population mean μ) is a fixed number you usually do not know; a **statistic** (the sample mean x̄) is computed from the sample and changes from sample to sample. That change is **sampling variability**, and it is not a mistake: it is what any honest method gives.

The book's methods (§1.2), for a sample of 20 from 400:

- **Simple random sample:** every group of 20 is equally likely to be chosen (names out of a hat, or a random number generator).
- **Stratified sample:** split the population into groups that share something (strata: here the four sections of the hall) and take a simple random sample from each (5 from each section).
- **Cluster sample:** split the population into clusters (here 40 blocks of 10 neighboring seats), pick some clusters at random (2 here) and take everyone in them.
- **Systematic sample:** list everyone in order (seats 1 to 400, row by row), pick a random start among the first 20, then take every 20th.
- **Convenience sample:** take whoever is easy to reach (here 20 of the 50 students nearest the door).

Two words describe a method, not a single sample. **Bias** is how far the method's estimates are off on average: the mean of many x̄'s minus μ. **Spread** is how far its estimates scatter: the standard deviation s of many x̄'s. A good method has bias near zero and small spread. Taking more samples shows the bias more clearly, but never removes it.

How do you know whether a measured bias is real or just chance? The mean of 100 x̄'s has its own standard error, about s/√100 = s/10. A measured bias several times bigger than s/10 is real; one within about 2(s/10) could be chance.

For a simple random sample of n from a population of N, the spread of x̄ is $$\sigma_{\bar x} = \frac{\sigma}{\sqrt n}\sqrt{\frac{N-n}{N-1}}$$, where σ is the population standard deviation; the last factor (the finite population correction) is 0.976 for n = 20 and N = 400.

**Experiments** (§1.4). To test whether a treatment (watching review videos) changes a response (an exam score), you compare a group that got it with a group that did not. A **lurking variable** is something else that affects the response and also differs between the groups, so the difference you see is not all due to the treatment. When people choose their own group (**self selection**), whatever made them choose (here, how much they study) comes along. **Random assignment** makes the two groups alike on average in every variable, measured or not, so the only systematic difference left is the treatment.

## Before the lab

1. The convenience sample takes students near the door. Give one reason students who sit near the door might differ from the rest of the class in how much change they carry (or in some other value), and say which way that would bias the estimate.
2. A population has σ = 24 cents. What spread s of the x̄'s do you expect for simple random samples of 20 from 400 students (use the formula in Background)?
3. Predict before you look: rank the five methods from smallest spread to largest, and say which ones you expect to be biased. One sentence of reasoning for each choice you are unsure of.

## Procedure

**A. One sample by each method.** In the right panel, under Setups, press **Simple random: pocket change** (it opens the Sampling methods view with the population Coins in pockets). Press **Draw a sample** and look at who is ringed in the hall. Press each button of the **Sampling method** switch in turn (Stratified, Cluster, Systematic, Convenience) and press **Draw a sample** once for each. Write one line for each method describing where its 20 students sit.

**B. 100 samples by each method.** Press **Reset** (in the strip above the hall) so every method starts from zero. With **Simple random** chosen, press **Draw 100**. Then choose Stratified and press Draw 100; then Cluster, Systematic and Convenience, Draw 100 each. Each method now has exactly 100 samples (**Samples drawn** in the Readouts). Look at the five rows of dots in the lower graph. Press **Record reading** once: it records one row for each method. Press **Export to worksheet** (Table 1), then **Clear**.

**C. The self selected study.** Press the setup **Self selected: who chooses the videos?** (true effect 0: the videos do nothing). Press **Run the study** and look at the hall: orange students watched. Read **Difference, this study**. Press **Run it 100 times**. Then press **Randomized** in the switch beside Self selected and press **Run it 100 times** again. Press **Record reading** (one row for each design).

**D. A real effect.** Move **True effect of the videos** to 5 points and press **Record reading** again (the same studies, now with the videos adding 5 points to every score that watched). Export to worksheet (Table 2). Then tick **Show study hours** and look at the hall with the Self selected design: the inner dot of each seat is that student's study hours.

## Data

Table 1. 100 samples of 20 students by each method, from Coins in pockets (draw set 1).

| Reading | Method | Samples | Mean of the x̄'s (¢) | Population mean μ (¢) | Bias, mean of x̄'s − μ (¢) | Spread, s of the x̄'s (¢) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Table 2. The review video study, about 100 runs of each design (the single first run of the self selected study counts too).

| Reading | Design | True effect (points) | Runs | Mean difference (points) | Spread, s of the differences (points) | Mean study hours, watched (h) | Mean study hours, did not (h) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

## Analysis

1. For each method in Table 1, work out the standard error of its mean of 100 x̄'s, s/√100, and the ratio bias ÷ (s/10). Which methods have a bias more than 3 times their standard error?
2. Rank the five methods by spread (smallest first). Compare the simple random spread with the formula in Background, using the population σ from the Readouts (**Population σ**). By what percent do they differ?
3. Why does the cluster method spread more than simple random, although it also takes 20 students? Use what you saw in part A about where its students sit, and what neighbors in the hall have in common.
4. From Table 2 with true effect 0, what does each design say about the videos? Compare the mean study hours of the two groups in each design.
5. From Table 2 with true effect 5, how far is each design's mean difference from the true effect? Which design measures the effect of the videos, and which measures the effect of the videos plus something else?

## Uncertainty

Each method's mean of 100 x̄'s is itself uncertain by about s/10, so two methods whose means differ by less than about 2√(s₁² + s₂²)/10 cannot be told apart from 100 samples. Each spread s from 100 samples is uncertain by about s/√(2 · 99), roughly 7 %. The randomized study's mean difference is uncertain by its s/10 in the same way. None of this uncertainty is about the population: the hall's μ and σ are exact.

## Questions

1. Look back at your ranking in Before the lab 3. Which methods did you place correctly, and what surprised you?
2. A convenience sample had a small spread in Table 1. Explain to a classmate why a small spread does not make it a good method, using the words bias and spread.
3. A news story says "students who used the campus tutoring center earned grades a full letter higher." Name a lurking variable, say which way it pushes the comparison, and describe how you would design a study that could show whether tutoring itself raises grades.
4. The systematic method counts seats row by row with a step of 20, and each row has 25 seats. Suppose instead the rows had 20 seats, so that every 20th seat is the same seat number in every row (say, always an aisle seat). What could go wrong?

## What to hand in

Before the lab answers, Tables 1 and 2, your descriptions from part A, and your answers to the Analysis and Questions. Say that the data are simulated by the demo, not measured.
