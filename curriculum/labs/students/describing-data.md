# Describing a Data Set: Center, Spread and One Bad Timing
Student laboratory · Statistics for physics

Textbook: OpenStax *Introductory Statistics 2e*, §1.3 (Frequency, Frequency Tables, and Levels of Measurement) and §§2.1 to 2.7 (Stem-and-Leaf Graphs, Histograms, Measures of the Location of the Data, Box Plots, Measures of the Center of the Data, Skewness and the Mean, Median, and Mode, Measures of the Spread of the Data), with the chapter lab §2.8 (Descriptive Statistics). Access for free at https://openstax.org/details/books/introductory-statistics-2e.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/data-explorer.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** under Simulated lab readings, Pendulum: 25 hand timings; Lap times of a tiring runner; Decay counts in 10 s; Lab temperature (°C); and, under From the book, Hours worked per day (1.3); Exam scores (2.1); Distances to supermarkets (2.1); Soccer player heights (2.2); Consumer Price Index by month (2.2); Home prices (2.3); Emergency room ages (2.5); Baseball team ages (2.7).

**Using the demo.**

- The big picture draws one data set three ways on the same number line: a **Histogram** at the top, a **Dot plot** in the middle (one dot per value; equal values stack) and a **Box plot** at the bottom. The red dashed line is the median, the gold triangle under the dots is the mean x̄ (the balance point), and the gray dotted lines in the box plot are the outlier fences Q1 − 1.5 IQR and Q3 + 1.5 IQR. A red ring marks an outlier.
- Drag any dot left or right to change its value. The **Selected point** card under the graphs shows the chosen reading: **Reading #** picks one by its place in the list, **Smallest** and **Largest** pick the extremes, and typing in **Value** changes it exactly.
- **Bin width** and **Start**, in the bar above the picture, set the histogram's bars; you can also drag the **start** and **width** tabs under the histogram.
- Under the graphs: the **Time series** (each value against its place in the order taken), the **Stemplot**, the **Frequency table**, **Percentiles**, the **Level of measurement** and the data list itself, which you can edit.
- The Readouts list n, the **Mean x̄**, **Median**, **Mode**, **Standard deviation s**, **Smallest**, **Largest**, **Q1**, **Q3**, **IQR = Q3 − Q1**, the **Outlier fences**, the **Outliers (1.5 IQR rule)** and the **Skew**.
- **Reset** puts the data set back as it opened. **Record reading** stores the summary of the data on show; **Export to worksheet** sends the rows to Table 1, or to Table 2 when every row is the pendulum and at least one has an edited value; **Clear** starts a new series.
- The supermarket distances are copied from the book (§2.1). The pendulum timings are simulated by the demo, not measured, and the page says so: draw 1 is the set everyone sees on opening; do not press **New draw**.

</details>

## Goal

Summarize two data sets by their center, spread and shape, find their outliers by the book's 1.5 IQR rule, and then predict and measure how one bad pendulum timing moves the mean, the median, the standard deviation and the IQR.

## Background

**Center.** The **mean** of n values is $$\bar{x} = \dfrac{\sum x}{n}$$, the balance point of the dot plot. The **median** M is the middle value of the ordered data: the value in position (n + 1)/2, or the average of the two middle values when n is even. Half the data are at or below it.

**Location: quartiles.** The book's rule (§2.3, the same one a TI-83 or TI-84 uses): order the data and find the median. The **first quartile Q1** is the median of the lower half and the **third quartile Q3** the median of the upper half. When n is odd, the median itself belongs to neither half. For example, for 1, 3, 4, 6, 8, 9, 12 the median is 6, the lower half is 1, 3, 4, so Q1 = 3, and the upper half is 8, 9, 12, so Q3 = 9.

**Spread.** The **interquartile range** is IQR = Q3 − Q1, the width of the middle half of the data. The sample **standard deviation**

$$s = \sqrt{\dfrac{\sum (x - \bar{x})^2}{n - 1}}$$

is about the typical distance of a value from the mean (§2.7). A value's **z score**, $$z = (x - \bar{x})/s$$, says how many standard deviations it lies from the mean.

**Outliers.** By the book's rule, a value is a potential **outlier** if it is below the lower fence Q1 − 1.5 IQR or above the upper fence Q3 + 1.5 IQR. An outlier may be a mistake (a misread meter, a number copied wrong) or a real but unusual value; only the story behind the data can say which.

**Box plots.** A box plot (§2.4) draws the five number summary: a box from Q1 to Q3 with a line at the median, and whiskers out to the smallest and largest values.

**Shape and skew.** In a symmetric distribution the mean and the median are close. A long tail to the right (skewed right) usually pulls the mean above the median; a long tail to the left usually pulls it below (§2.6). This is a rule of thumb, not a law.

**Resistant measures.** One value moved far away changes the sum $$\sum x$$, so the mean moves by exactly (change in that value)/n, and it moves s even more, because s squares distances. The median, Q1 and Q3 depend only on which values sit in the middle positions, so a value that stays at the end of the ordered list does not move them at all. Measures that one wild value cannot drag far are called **resistant**.

**Simulated data.** The pendulum timings in this lab are simulated by the demo: 25 people each timing one swing of a pendulum whose true period is 2.000 s, with a random reaction time error. They behave like real hand timings but were not measured.

## Before the lab

1. For the data 2, 3, 3, 5, 7, 8, 30, find the median, Q1 and Q3 by the book's rule, then the IQR and the two outlier fences. Is 30 an outlier?
2. Find the mean of the same seven values. Is it above or below the median, and why?
3. Predict, before you open the demo: one of 25 pendulum timings near 2.0 s is copied wrong as 4.00 s instead of about 2.08 s. Write whether each of the mean, the median, s and the IQR will go up a lot, up a little, or stay the same, and estimate how much the mean will change.

## Safety

No hazards in the virtual lab.

## Procedure

**A. A book data set with an outlier.** Open the demo and press the setup **Distances to supermarkets (2.1)**, under From the book in the Setups list. Look at the dot plot and the stemplot and find the value that stands apart. Press **Record reading** (in the Readings box under the setups). Copy the **Outlier fences** readout into your notes for Analysis 1.

**B. Simulated pendulum timings.** Press the setup **Pendulum: 25 hand timings** (under Simulated lab readings). The tag beside its name must read "Simulated, draw 1" (it changes only if **New draw** was pressed; then reload the page and start again). Press **Record reading**. Write down the **Skew** readout for this set and for the supermarket distances (press that setup again to see it, then come back to the pendulum). Press **Export to worksheet** (the two rows go to Table 1), then **Clear**.

**C. One bad timing: predict, then check.** Still on the pendulum, press **Reset** (in the bar above the picture) so the data are as they opened, and press **Record reading**: this is the first row of Table 2. Open the **Lab** fold at the bottom of the side panel and tick **Blind**, which hides the statistics. In the **Selected point** card under the graphs, press **Largest**: the largest timing is ringed and its value shows in **Value**. Write it down. Type 4.00 in **Value**, replacing it. Look at the dot plot, then write your prediction of the new mean, median, s and IQR. Untick **Blind** and press **Record reading**. Type 6.00 in **Value** and record, then 8.00 and record. Press **Export to worksheet** (the four rows go to Table 2).

**D. Make the bad timing the smallest.** Still with the selected reading, type 0.50 in **Value**, as if someone stopped the watch early. Read the **Median**, **Q1** and **IQR** and compare them with the first row of Table 2. Write the three values in your notes for Questions 1.

## Data

Table 1. Summaries of the two data sets.

| Reading | Data set | n | Smallest | Q1 | Median | Q3 | Largest | Mean x̄ | s | Outliers |
|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | |
| | | | | | | | | | | |

Table 2. The pendulum timings with one timing changed.

| Reading | Largest timing (s) | Mean x̄ (s) | Median (s) | s (s) | IQR (s) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. For the supermarket distances, compute the IQR from Q1 and Q3 in Table 1 and the two fences Q1 − 1.5 IQR and Q3 + 1.5 IQR. Check them against the demo's **Outlier fences**, and say which distance is an outlier and why.
2. Draw a box plot of each data set from Table 1 (box from Q1 to Q3, median line, whiskers to the smallest and largest values), each on its own number line with a labeled scale. Mark the mean on each with a small triangle.
3. For each data set compare the mean with the median, and use the box plot and the Skew readout to say whether the distribution is roughly symmetric, skewed right or skewed left. For the distances, which is the better single number for a "typical" distance, the mean or the median? Explain.
4. Look back at Before the lab 3. Which of your four predictions were right? For the row with 4.00 s, compute the change in the mean you expect from Background, (4.00 − original largest)/25, and compare it with the change in Table 2.
5. Graph Table 2: the mean (vertical) against the largest timing (horizontal). Find the slope of the line and compare it with 1/n for n = 25. On the same axes or a second graph, plot s against the largest timing and describe how it grows.
6. For the reading at 4.00 s, find its z score using the mean and s from the first row of Table 2 (the clean data). Is it an outlier by the 1.5 IQR rule? Is it more than three standard deviations from the clean mean?

## Uncertainty

The supermarket distances are the book's numbers, so their summaries are exact. The pendulum timings are one simulated sample: another class (or **New draw**) would give a different mean, s and quartiles, by roughly s/√n ≈ 0.01 s for the mean. Your Table 2 is exact arithmetic on fixed data, so its straight line is not affected by scatter. Rounding in the readouts (two or four decimal places) limits how well your slope in Analysis 5 can match 1/25.

## Questions

1. In part D the bad timing moved to the low end. Did the median, Q1 or IQR change? Explain from the definitions why moving one value from one end of the ordered list to the other end can shift them by one position, while moving it farther out on the same side cannot.
2. The 12.3 km store and the 4.00 s timing are both outliers. Should either be removed from its data set? Give the reason in each case, using what you know about where each number came from.
3. A classmate reports the pendulum period as the mean and s of the 25 timings with the 4.00 s timing left in (the second row of Table 2). Write a better report of the typical period and its spread from the same 25 numbers, without deleting any, and say why you chose those measures.

## What to hand in

Before the lab answers, Tables 1 and 2, the two box plots, the graph of Table 2 with its slope, and your answers to the Analysis and Questions. Say that the pendulum timings are simulated by the demo and the distances are from OpenStax *Introductory Statistics 2e*, §2.1.
