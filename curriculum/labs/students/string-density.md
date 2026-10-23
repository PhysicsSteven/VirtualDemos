# Linear Density of a String
Student laboratory · Physics I / Acoustics

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/string-density.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Sweep the frequency, 200 g; Add masses at 60 Hz; Third harmonic; Unknown string, sweep; Unknown string, add masses.

**Using the demo.**

- Drag the vibrator along the table to set the length L (or focus it and use the arrow keys), or use the slider and step buttons for an exact value.
- Record stores $$L$$, $$m$$, $$T$$, $$f$$ and the number of loops $$n$$ (you can correct $$n$$ in the table). $$f$$ against $$n$$ at one mass: slope $$v/2L$$, so $$\mu = T/(4L^2\,\text{slope}^2)$$. $$T$$ against $$1/n^2$$ at one frequency: slope $$4L^2f^2\mu$$, so $$\mu = \text{slope}/(4L^2f^2)$$. Both lines should pass close to the origin.

</details>

## Goal

Determine the linear mass density of a vibrating string from its resonance frequencies and the tension supplied by hanging masses.

## Background

For a uniform string fixed at both ends,

$$f_n=\frac{n}{2L}\sqrt{\frac{T}{\mu}},\qquad T=mg.$$

Here $$n$$ is the number of loops, $$L$$ is the vibrating length, $$\mu$$ is mass per unit length and $$m$$ is the **total suspended mass**, including the hanger. The simulated apparatus uses $$g=9.80\ \mathrm{m/s^2}$$ and a 50 g hanger. At fixed tension, the slope $$s$$ of $$f_n$$ against $$n$$ gives $$\mu=T/(2Ls)^2$$. At fixed frequency, $$T=\mu(2Lf/n)^2$$.

## Before the lab

1. How does the fundamental frequency change when tension is quadrupled?
2. Why must the hanger mass be included when calculating tension?
3. At fixed drive frequency, what happens to the number of loops as tension increases?

## Safety

On a real vibrator and pulley bench, secure the pulley, check the string's load rating and keep feet clear of hanging masses. Turn off the driver before changing the string.

## Procedure

**Frequency scan.** Investigate one string at a fixed vibrating length and suspended mass. Identify the first five resonances by their number of loops. Record each frequency and the total hanging mass.

**Tension scan.** At a fixed drive frequency, change the suspended mass to find several standing wave patterns with different loop counts. Record total mass and $$n$$ for each. Keep the same string and length.

**Unknown string.** Repeat one scan with an unknown string and infer its linear density before revealing its value. Do not choose a new unknown string during a scan, because that changes the specimen.

**Using the virtual apparatus.** Record the vibrating length, string identity, total suspended mass and loop count for each resonance. A 50 g hanger contributes to the total mass even when no extra weights are added. Collect readings for one consistent scan and send them to the worksheet before clearing, so each scan has its own Data table. Use frequency against harmonic number for the frequency scan and tension against $$1/n^2$$ for the scan at fixed frequency.

## Data

| Scan | String | $$L$$ (m) | Total mass $$m$$ (kg) | $$T$$ (N) | Harmonic $$n$$ | $$1/n^2$$ | Frequency $$f$$ (Hz) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Keep the two scan types separate and state whether the string density was known or hidden.

## Analysis

1. Fit $$f$$ against $$n$$ at fixed tension. Infer $$\mu$$ from the slope.
2. At fixed frequency, plot $$T$$ against $$1/n^2$$ and infer $$\mu$$ independently.
3. Compare the estimates, including units in kg/m and g/m.
4. Check whether the inferred density changes when the tension or mode number changes.

## Uncertainty

Record the frequency adjustment and mass increments. The simulation's set values are prescribed, not independent noisy measurements. For real equipment include the vibrating length measurement, mass calibration, pulley friction and uncertainty in locating resonance peaks. Do not turn adjustment increments into random error bars without justification.

## Questions

1. Why is a vibrating string's fundamental frequency inversely proportional to length?
2. Why is the hanging mass not identical to the string tension in newtons?
3. What causes a resonance peak to have finite width?
4. What physical changes could make the inferred density depend on mode number?

## What to hand in

Prelab answers, separate data tables for both scans, plots with fits, two density estimates and uncertainty discussion, and answers to the questions. Identify simulated data.
