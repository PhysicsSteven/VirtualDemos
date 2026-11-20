---
title: Sampling Lab
level: Statistics (OpenStax Introductory Statistics 2e 1.2, 1.4 to 1.6 and 7.1 to 7.5) and physics labs that average repeated readings
time: 20 to 45 minutes
---
## What students should come away with

- How a sample is chosen matters more than how big it is. Simple random, stratified, cluster and systematic samples all center on the population mean; a convenience sample can be badly biased, and taking more samples the same way never fixes that.
- Stratified samples spread less than simple random ones of the same size; cluster samples spread more, because neighbors are alike.
- In a study where people choose for themselves, a lurking variable can make a treatment that does nothing look strong. Random assignment balances the lurking variable between the groups.
- The central limit theorem: the means of samples of n pile up in a normal curve centered on μ with spread σ/√n, whatever the shape of the population, once n is large enough. Sums center on nμ with spread √n σ. The more skewed the population, the larger n has to be.

## Before class

Nothing to install. A simulated lecture hall of 400 students, every one shown. Three modes: **Sampling methods** (Simple random, Stratified, Cluster, Systematic, Convenience; samples of 20), **Experiment** (Self selected or Randomized, the True effect of the videos and Show study hours) and **Central limit theorem** (Sample size n with −1 and +1, Means or Sums, Draw a sample, Draw 100, Draw 10,000). Population picks Coins in pockets (¢), skewed; Reaction times (ms), skewed; Seconds past the minute, uniform; or Commute times (min), bimodal. Draw set, in the Lab fold, seats a new population; set 1 is the one the worksheets use. Blind hides the population mean, the bias, the true effect and what the theorem predicts. Nothing here is real data. The Handouts and worksheets links open the sampling methods and central limit theorem worksheets.

## Running it in class

1. **Who gets picked.** Open on **Simple random: pocket change**. Press Play and watch the picked seats and the row of sample means (Q1).
2. **Five ways.** **Stratified: 5 from each section**, **Cluster: two blocks of seats**, **Systematic: every 20th seat** and **Convenience: the ones by the door**. Ask which will be biased before pressing Play (Q1, Q2).
3. Switch modes to **Experiment.** **Self selected: who chooses the videos?** Press Play, then tick Show study hours. Then **Randomized: a coin decides** (Q3).
4. Switch modes to **Central limit theorem.** **Means of skewed reaction times, n = 5**, then raise n (Q4).
5. **n = 1: the means are the population**, **Uniform seconds: n = 2 makes a triangle** and **Bimodal commutes: n = 30** (Q5).
6. **Pocket change: sums of n = 10** (Q6).

## Questions

**Q1.** In Draw set 1 the 400 pockets hold μ = 22.97 ¢ on average with σ = 23.85 ¢, and 116 students carry none. Is that population symmetric? Before pressing Play, rank the five methods by how much their sample means will spread, and say which one will be biased. Then press Play on each and check.

**Q2.** For simple random samples of 20 drawn without replacement from 400, the standard error of the mean is (σ/√n)·√((N − n)/(N − 1)) = 5.21 ¢. In the demo, stratified samples spread less (about 4 ¢) and cluster samples more (about 11 ¢). Explain both with the seating: larger values tend to sit toward the back and near the door. Convenience samples center near 49 ¢: why does drawing more of them not help?

**Q3.** The review videos do nothing (True effect of the videos 0 points). In the first self selected study, 163 students choose the videos and they score about 17 points higher than the rest. Tick Show study hours: the video group studies about 9.2 hours a week, the others about 3.4. Explain the difference in scores. In the first randomized study, 200 and 200, the difference is 1.4 points and the hours balance (5.74 and 5.75). What does random assignment buy?

**Q4.** Reaction times have μ = 241.2 ms, σ = 94.5 ms and a skewness of 1.84. Predict the spread and the skewness of the means for n = 5 (42.2 ms and 0.82) and n = 30 (17.2 ms and 0.34). Press Draw 10,000 at each n and compare. How large must n be before the histogram looks normal?

**Q5.** With n = 1 the "means" are single students: what must the histogram look like? Seconds past the minute are uniform from 0 to 60 s (σ = 17.57 s): why does the mean of two make a triangle, with spread 12.42 s? Commute times have two humps and no one commutes about 19 min, yet the means of 30 pile up there (μ = 19.2 min, spread 1.68 min). Why?

**Q6.** The book's pocket change lab (7.4), simulated: add up the change of 10 students. Predict the center nμ (229.7 ¢) and spread √n σ (75.4 ¢) of the sums. Why does the spread of a sum grow with n while the spread of a mean shrinks?

## Common misconceptions

- **"A bigger sample fixes a bad method."** A biased method gives a tight cluster of wrong answers; more samples only make them look more certain.
- **"Random means haphazard."** Asking whoever is handy is not random; a random sample gives every set of students the same chance.
- **"The central limit theorem makes the population normal."** The population keeps its shape; the means of samples become normal.
- **"The spread of the means is σ."** It is σ/√n: four times the sample, half the spread.
- **"If the treated group did better, the treatment worked."** Only with random assignment; otherwise the groups may differ in other ways, such as study hours.

## How the demo works

- Each population is 400 values drawn once from a seeded random number generator: pocket change (30 % carry none; the rest carry 1 plus a Poisson count with mean 2.5 of coins, each a penny, nickel, dime or quarter), reaction times (150 ms plus an exponential wait with mean 90 ms), seconds past the minute (uniform from 0 to 60) and commute times (45 % walkers near 28 min, 55 % drivers near 11 min). The values are seated so larger values tend to sit toward the back and near the door, which is what biases some methods.
- Sampling methods take 20 students without replacement: any 20; 5 at random from each of the four sections; two of the forty blocks of 10 seats; a random start among the first 20 seats and then every 20th seat; 20 of the 50 students nearest the door. Each method has its own stream of random numbers.
- The study: each student's weekly study hours and score without the videos (50 + 3 points an hour + a normal scatter with σ = 6) are simulated once. A student with h hours chooses the videos with probability 1/(1 + e^(−(h − 6)/1.5)); randomized puts exactly 200 in each group.
- The central limit theorem draws n students with replacement, so the spread of the mean is exactly σ/√n (σ by the population formula). The predicted skewness of the means is the population's divided by √n.
