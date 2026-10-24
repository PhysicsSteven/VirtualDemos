# Estimating and Reporting a Physical Result
Student activity · Physics I foundations

Textbook: OpenStax *University Physics*, Vol. 1, §§1.5–1.7. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/units.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Tabs in the demo:** Scale of things; Convert units; Dimensional analysis; Significant figures; Fermi estimates. This handout uses the last two; the first three go with the Measuring, Converting and Checking Units handout. The page opens on Scale of things, so choose the tab you need.

**Using the demo.**

- **Significant figures**: enter two measurements as you would write them (the tab opens with 12.07 × 0.0350) and choose ×, ÷, + or −. The table gives each number's significant figures and decimal places, and the line below gives the calculator value, the rule applied (keep so many significant figures, or so many decimal places) and the rounded result. A decimal point makes trailing zeros significant; 1500 with no decimal point is ambiguous and is taken as 2 figures here.
- **Fermi estimates**: choose a **Question** (**Heartbeats**, **Walk the equator** or **Air per day**). Each factor has a low and a high value that you adjust to your own estimates; the demo opens with typical values, such as 60 to 100 heartbeats per minute and 70 to 90 years in a lifetime, and marks exact factors like 1440 minutes per day. The answer is the product, given as a range and to the nearest power of ten.
- There is no Record or Export in this demo: the Data table is filled from your own estimates and the supplied exercise.
- Blind hides the results (the rounded answer, the estimate and the other tabs' answers) so you can work first.

**What the demo models.**

- Multiplying or dividing: keep as many significant figures as the least precise factor. Adding or subtracting: keep as many decimal places as the least precise term. The calculator value is shown to 12 figures before the rule is applied, and a result with many figures is written as a power of ten (470 kept to 2 figures is written 4.7 × 10²).
- A Fermi estimate is the product of its factors: $$\text{low} = \prod_i \text{low}_i,\qquad \text{high} = \prod_i \text{high}_i,$$ and the order of magnitude is the power of ten nearest the geometric middle $$\sqrt{\text{low}\times\text{high}}$$. In the Walk the equator question the distance is 40,075 km and the speed and hours factors are entered as their reciprocals, since the question divides by them.
- The low and high values are assumptions you choose, not measurements; the demo does no sampling and reports no statistical interval. Nothing in this demo is a reading.

</details>

The demo's Fermi estimates tab works three other questions with low and high factors, and its Significant figures tab shows the rounding conventions for sums and products. Make your own estimate and roundings first, then compare the method.

## Goal

Build an order of magnitude estimate, distinguish uncertainty from rounding and present a solution that another student can check.

## Background

A useful estimate breaks a difficult question into factors that can be bounded. An answer is credible when its assumptions, units and sensitivity are visible. Significant figures communicate how a value is reported; they are not a complete uncertainty model. Keep extra digits during calculations, then round the final result to match a stated precision or uncertainty.

For a repeatable action performed by $$N$$ people at rate $$f$$,

$$\text{daily amount}=N\times f\times\text{amount per action}.$$

This equation is a model. It omits actions or people outside the chosen boundary and depends on whether the stated daily rate is realistic.

## Before the activity

1. Is an estimate useless if its exact answer is not known? Explain what could still make it testable.
2. Why should intermediate results usually keep more digits than the final answer?
3. Does writing three significant figures establish that a measurement is accurate to 1%?

## Safety

Use normal access to a classroom and measuring container. Do not waste drinking water, interrupt classes or collect identifying information about people.

## Procedure

**Fermi question.** Estimate the volume of drinking water used by one class in a day. State a boundary: enrolled students, attendance fraction, servings per attending student per day and volume per serving. Use public class information or an anonymous count where permitted; measure a reusable bottle's labeled volume or use an explicitly stated estimate. Record a low, central and high assumption for each factor. Do not collect personal consumption records.

**Bound the result.** Calculate central, low and high scenarios. Identify the factor that changes the answer most. The endpoint scenarios are assumptions, not automatically confidence intervals or independent error combinations. Propose one practical observation that would improve the weakest factor.

**Practice reporting.** Use the supplied exercise values $$L = 1.24 \pm 0.01\ \text{m}$$ and $$W = 0.83 \pm 0.01\ \text{m}$$. Calculate a rectangular area, a bound from the four endpoint combinations and a sensibly rounded final report. Also evaluate $$12.4 + 0.56$$ and $$3.20 \times 0.0450$$ with the usual classroom rounding conventions, explaining the different rules. Treat these as supplied inputs, not measurements you made.

**Solve and check.** For a hypothetical cart starting from rest with constant acceleration 0.80 m/s² over 2.5 m, estimate the travel time before calculating it. Write the knowns, unknown, model assumptions, governing relation, algebra, substitution and a units check and a limiting case check. Compare with your first estimate; do not erase an initial estimate just because it was imperfect.

No simulation is required. A disagreement between estimates is a reason to inspect assumptions, not to select whichever number has more digits.

## Data

| Factor or task | Meaning/unit | Low assumption/input | Central assumption/input | High assumption/input | Basis and limitation |
|---|---|---|---|---|---|
| Class size / attendance | | | | | |
| Servings per person per day | | | | | |
| Volume per serving | | | | | |
| Calculated daily volume | | | | | |
| Supplied reporting task | | | | | |

## Analysis

1. Show the factor model with units and your three scenarios. Explain whether an order of magnitude conclusion survives plausible changes in assumptions.
2. Change each uncertain factor separately while holding the others central. Rank the resulting changes; explain which observation you would make next.
3. Report the supplied area calculation with an explicit bound and sensible rounding. Explain why a bare significant figure rule does not capture that whole argument.
4. Present the cart solution as a sequence another student could audit. State a physical limit in which the answer should increase, decrease or fail to exist under your model.

## Uncertainty

Distinguish measured resolution, a guessed range, possible systematic bias and an actual statistical sample. A low/high scenario is not a 95% interval without a probability model. Correlated assumptions, such as attendance and serving frequency, can invalidate independent error formulas. Report fewer digits when your inputs are rough, and retain the assumptions needed to revise the estimate later.

## Questions

1. What makes an estimate physically defensible even when it has a broad range?
2. Why is rounding a result different from estimating its uncertainty?
3. What should you investigate if a numerical result has correct units but an implausible size?
4. Which part of your water use model would change if the question concerned a week instead of one class day?

## What to hand in

Preactivity answers, the stated boundary and assumptions, scenario/sensitivity calculations, the supplied reporting exercises, the cart solution and checks, uncertainty discussion and question answers. Separate supplied examples from observations and estimates.
