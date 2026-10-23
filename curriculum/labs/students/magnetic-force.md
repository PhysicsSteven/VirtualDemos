# Magnetic Motion and the Hall Effect
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§11.3, 11.6–11.7. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/magnetic-force.html)

## Goal

Measure a charged particle's orbit and period, then use Hall voltage to identify carrier sign and estimate carrier density.

## Background

A magnetic field exerts a force perpendicular to particle velocity (§11.3):

$$\mathbf F=q\mathbf v\times\mathbf B.$$

For nonrelativistic motion perpendicular to a uniform field,

$$r=\frac{mv}{|q|B},\qquad T=\frac{2\pi m}{|q|B}.$$

In a Hall strip (§11.6), charge builds up until the electric and magnetic forces on drifting carriers balance. For one carrier type,

$$|V_H|=\frac{I|B|}{n|q|t},$$

where $$t$$ is thickness along $$B$$. The voltage sign depends on carrier sign, field direction and which edge is connected to the positive meter lead.

## Before the lab

1. Predict the changes in $$r$$ and $$T$$ when $$v$$ doubles.
2. Why does a magnetic field alone leave the particle's speed unchanged?
3. Predict what reversing $$B$$ does to the Hall voltage while conventional current keeps the same direction.

## Safety

Follow the real apparatus limits for magnet current and Hall-sample current. Switch off before rewiring, keep magnetic materials away from the pole gap, and do not touch an energized electron-beam tube.

## Procedure

**Particle orbit.** Keep particle type and $$B$$ fixed. Take five speeds, measuring radius and the time for several complete turns. Repeat one speed with a different $$B$$. Use a perpendicular launch and no electric field.

**Hall strip.** Keep sample and thickness fixed. At $$I = 20\ \text{mA}$$, measure Hall voltage at $$B$$ magnitudes 0.10, 0.20, 0.30, 0.40 and 0.50 T. Reverse $$B$$ and repeat two points. Then keep $$B$$ fixed and vary $$I$$. Compare samples and repeat one setting at twice the thickness. Draw the current, field direction, top edge and bottom edge.

**Using the virtual apparatus.** Choose the circular proton setup and enable **Blind: hide predictions and answers**. Turn on **Show ruler**, select **Diameter** under **Ruler reads**, and drag both ruler ends onto opposite sides of the track. Use **Start timer**, **Stop timer**, **Reset timer** and **Turns timed** to measure several orbits. **Capture reading** stores your ruler/timer measurements; **Export to worksheet** sends them to the Data table. Plot **r against v** and **T against v**. Open **Hall effect in a strip** for the second part. Use **Current I**, **Field \|B\| at the strip**, **Thickness t (along B)** and **⊗ Into page** / **⊙ Out**. Blind gives anonymous samples; leave it on until you infer the carrier sign and density. The strip's voltmeter reads $$V_{\rm top} - V_{\rm bottom}$$. Hall readings are not included in Capture reading: record them by hand.

## Data

| Run/sample | $$v$$ (m/s) or $$I$$ (A) | $$B$$ direction and magnitude (T) | $$r$$ (m) or thickness $$t$$ (m) | Turns | Elapsed time (s) | $$T$$ (s) or $$V_H$$ (V) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Keep separate copies for the orbit and Hall measurements. Label the last column and state meter polarity.

## Analysis

1. Fit $$r$$ against $$v$$ and infer $$\lvert q\rvert/m$$ from the slope and $$B$$. Compare with the known particle ratio.
2. Plot $$T$$ against $$v$$. Compare your mean period with $$2\pi m/(\lvert q\rvert B)$$.
3. Plot $$V_H$$ against signed $$B_z$$, taking out of the page as positive. Use the current direction and meter polarity to derive the slope's sign before identifying carriers.
4. Infer $$n$$ from the slope magnitude $$I/(n\lvert q\rvert t)$$, taking $$\lvert q\rvert = e$$. Check the current and thickness scalings and reveal the sample labels afterward.

## Uncertainty

Estimate radius uncertainty from the ruler's screen resolution and placement. Timing several turns reduces the fractional error from starting and stopping; use simulation time rather than wall-clock time. Include current, field, thickness and voltage resolution in the Hall-density estimate. Record whether the data are simulated; repeated deterministic readings are not independent noisy experiments.

## Questions

1. Why does $$r$$ change with speed while the nonrelativistic period does not?
2. Why does reversing $$q$$ reverse curvature without changing the magnetic force's work?
3. Why can Hall voltage reveal carrier sign when an ordinary resistance measurement cannot?
4. Why is the Hall voltage larger for a thinner strip at fixed current?

## What to hand in

Prelab answers, orbit CSV, Hall data and polarity sketch, three graphs, inferred $$\lvert q\rvert/m$$ and $$n$$ with uncertainty, scaling checks and answers to the questions.
