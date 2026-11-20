---
title: Data Explorer
level: Statistics (OpenStax Introductory Statistics 2e 1.3, 2.1 to 2.8, 6.3 and 6.4) and physics labs that repeat one measurement (hand timings, decay counts, temperature logs)
time: 15 to 35 minutes
---
## What students should come away with

- One data set can be drawn many ways: a frequency table, a stemplot, a dot plot, a histogram, a box plot and a time series. Each keeps something and throws something away; only the time series keeps the order the data were taken in.
- The mean and standard deviation chase an extreme value; the median and the IQR barely move. For skewed data or data with outliers, the median is the better center.
- The book's outlier rule: a value below Q1 − 1.5 IQR or above Q3 + 1.5 IQR.
- A histogram's shape depends on the start and the bin width as well as on the data.
- A z score says how many standard deviations a value sits from the mean; more than two is unusual.
- Levels of measurement matter: on an interval scale such as degrees Celsius, differences mean something but ratios do not.

## Before class

Nothing to install. Four simulated lab sets (**Pendulum: 25 hand timings**, **Lap times of a tiring runner**, **Decay counts in 10 s**, **Lab temperature (°C)**) and eight from the book (**Hours worked per day (1.3)**, **Exam scores (2.1)**, **Distances to supermarkets (2.1)**, **Soccer player heights (2.2)**, **Consumer Price Index by month (2.2)**, **Home prices (2.3)**, **Emergency room ages (2.5)**, **Baseball team ages (2.7)**). Drag any point and every graph and statistic follows. Bin width and Start set the histogram (or drag their tabs); the frequency table shows Each value or The histogram's classes; Modified box plot draws outliers apart. Each value has Reading #, Value, Smallest, Largest and Remove it. k-th percentile, k = finds a percentile. Your data are sets the level of measurement. The box under the graphs holds the data in the order taken: edit them or paste your own. New draw makes another simulated set. Blind, in the Lab fold, hides the statistics, the box plot and the mean and median marks. The Handout and worksheet link opens the describing data worksheet.

## Running it in class

1. **The opening timings.** **Pendulum: 25 hand timings**, Blind on. Ask for the mean, median and spread from the dot plot, then turn Blind off. Drag the rightmost dot far to the right (Q1).
2. **Skewed counts.** **Decay counts in 10 s**; switch the frequency table to Each value (Q2).
3. **The book's outliers.** **Exam scores (2.1)**, **Distances to supermarkets (2.1)** and **Home prices (2.3)** (Q3, Q4).
4. **Bins.** **Soccer player heights (2.2)**: drag Start and Bin width (Q5).
5. **Order matters.** **Lap times of a tiring runner** and **Lab temperature (°C)**: compare the histogram with the time series (Q6, Q7).
6. **z scores.** **Baseball team ages (2.7)** with Reading # (Q8).

## Questions

**Q1.** Draw 1 of the pendulum timings has mean 2.0072 s, median 2.02 s, s = 0.0553 s and IQR 0.085 s. Predict what happens to each when the largest timing, 2.08 s, is dragged to 4.00 s (someone counted two swings). Then drag it: the mean becomes 2.084 s and s 0.403 s. What happened to the median and the IQR, and is 4.00 s an outlier by the book's rule?

**Q2.** Forty counts of 10 s each from a weak source (simulated, mean 3.2 counts) have mean 3.425 and median 3. Why can counts not be symmetric here? Which way is the skew? The counts 7 and 8 sit above Q3 + 1.5 IQR = 6.25: are they mistakes, or just the long tail of the counts?

**Q3.** The book's 31 exam scores have mean 73.5 and median 73, and the skew is negative, yet the mean is above the median. What does that say about the rule "the mean is pulled toward the tail"? Drag the 33 down to 0: the mean drops to 72.5. In the supermarket distances, is 12.3 km an outlier? Drag it in to 7 km and list what changes.

**Q4.** The book's 13 home prices have median $488,800, Q1 $308,750 and Q3 $649,000. Find the IQR and the upper fence, and show that only $5,500,000 is an outlier. The mean is $865,015. Drag that home to $700,000: the mean becomes $495,785. Which center would you report for home prices, and why?

**Q5.** The book's 100 soccer heights start at 59.95 in with bars 2 in wide. Why start at 59.95 rather than 60? The class counts are 5, 3, 15, 40, 17, 12, 7 and 1: what share is under 65.95 in? Drag Bin width to 1 and to 4: did the data change, or only the picture?

**Q6.** The runner's 20 laps, in order, start at 88.3 s and end at 94.3 s (Draw 1). What does the histogram miss that the time series shows at once? Would the mean lap time be a good summary of this run?

**Q7.** The room warms from 20.3 °C to 21.2 °C over six hours (Draw 1). Set Your data are to interval. Is 22 °C "10 % hotter" than 20 °C? Convert both to kelvins and find the real ratio.

**Q8.** The book's 25 baseball ages have mean 30.68 and s = 6.09. Find the z scores of the youngest (21) and oldest (40) players. Is any player unusual by the two standard deviation rule?

## Common misconceptions

- **"The mean is the middle."** The median is the middle; the mean is the balance point and can sit far from the middle of skewed data.
- **"An outlier is a mistake."** It is a value to check. The decay counts' 7 and 8 are honest counts from the tail.
- **"The histogram shows the data."** It shows the data grouped; a different Start or Bin width can change its shape.
- **"Standard deviation is the average distance from the mean."** It is the square root of the average squared distance (dividing by n − 1 for a sample), so one far value counts heavily.
- **"Order does not matter."** For the tiring runner and the warming room, the trend in time is the main story.

## How the demo works

- Every statistic follows the book's rules through the shared library (demos/lib/vdstats.js): quartiles by the median of each half (the TI method), percentiles, the 1.5 IQR fences, the sample standard deviation with n − 1, and the skewness.
- A value on a bin boundary goes in the bar to its right, and the largest value is always counted. The default start is half a unit of the last decimal place below the smallest value, as the book does.
- The stemplot uses the smallest leaf unit that keeps the stems to 20 or fewer, cuts digits past the leaf unit (never rounds), and keeps empty stems.
- The book's data are from OpenStax Introductory Statistics 2e (CC BY 4.0), in the section named on each setup. The lab sets are simulated from seeded random numbers: pendulum timings of a 2.000 s period with σ = 0.06 s; laps of 88.0 s plus 0.35 s a lap with σ = 1.0 s; Poisson counts with mean 3.2; a room warming from 20.0 °C by 1.5 °C over six hours with σ = 0.15 °C.
