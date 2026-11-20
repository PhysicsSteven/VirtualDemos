# Linear Density of a String
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 1, §16.3 and §16.6. Access for free at https://openstax.org/details/books/university-physics-volume-1.

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

Here $$n$$ is the number of loops, $$L$$ is the vibrating length, $$\mu$$ is mass per unit length and $$m$$ is the **total suspended mass**, including the hanger. The simulated apparatus uses $$g=9.81\ \mathrm{m/s^2}$$ and a 50 g hanger. At fixed tension, the slope $$s$$ of $$f_n$$ against $$n$$ gives $$\mu=T/(2Ls)^2$$. At fixed frequency, $$T=\mu(2Lf/n)^2$$.

## Before the lab

1. How does the fundamental frequency change when tension is quadrupled?
2. Why must the hanger mass be included when calculating tension?
3. At fixed drive frequency, what happens to the number of loops as tension increases?
4. With the same string and the same 200 g hanging, the second resonance comes at about twice the frequency of the first. At the second resonance, does the wave travel along the string faster than at the first, slower, or at the same speed? What makes you think so?

## Safety

On a real vibrator and pulley bench, secure the pulley, check the string's load rating and keep feet clear of hanging masses. Turn off the driver before changing the string.

## Procedure

First open the Lab fold at the bottom of the side panel and tick Blind: hide μ and the predictions, so the Readouts panel does not give the resonance away.

**Frequency scan.** Press the Sweep the frequency, 200 g setup (String B, $$L$$ = 1.20 m, 200 g hanging with the hanger). Raise the Driver frequency f from 10 Hz with the Coarse knob or the +1 Hz button, watching the Largest amplitude readout; near a peak use +0.1 Hz and −0.1 Hz to find the frequency where it is largest. Find the first five resonances, $$n$$ = 1 to 5 (check Loops seen), and press Record reading at each. Press Export to worksheet, then Clear.

**Tension scan.** Press the Add masses at 60 Hz setup (String B, 1.20 m, only the 50 g hanger). Click slotted masses in the tray below the string to add them (Take off the last mass undoes one), and find the masses that give the patterns with 5, 4, 3 and 2 loops: go up in 10 g and 5 g pieces, then fine tune with 1 g and 2 g for the largest amplitude. Record each, then Export to worksheet and Clear.

**Unknown string.** Press the Unknown string, sweep setup and repeat the frequency scan for $$n$$ = 1 to 4, then Export. Work out its linear density before revealing its value: once your scan is sent, choosing a named string makes the demo state the unknown string's density. Do not choose a new unknown string during a scan, because that changes the specimen.

**Using the virtual apparatus.** Record reading stores the vibrating length, string, total suspended mass, tension, frequency and loop count for each resonance; if the loop count is wrong, correct $$n$$ in the demo's table before you export. Collect readings for one consistent scan and send them to the worksheet before clearing, so each scan has its own Data table.

## Data

| Scan | String | $$L$$ (m) | Total mass $$m$$ (kg) | $$T$$ (N) | Harmonic $$n$$ | $$1/n^2$$ | Frequency $$f$$ (Hz) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Keep the two scan types separate and state whether the string density was known or hidden.

## Analysis

1. For the frequency scan, graph $$f$$ (vertical) against $$n$$ (horizontal) and fit a straight line with a free intercept. Infer $$\mu$$ from the slope $$s$$, $$\mu = T/(2Ls)^2$$.
2. For the tension scan, graph $$T$$ (vertical) against $$1/n^2$$ (horizontal), fit a straight line, and infer $$\mu$$ independently from the slope, $$4L^2f^2\mu$$.
3. Compare the estimates, including units in kg/m and g/m, and check whether the inferred density changes when the tension or mode number changes.

## Questions

1. What causes a resonance peak to have finite width?
2. The wavelength is $$2L/n$$, so the wave speed is $$v = 2Lf/n$$. Work it out from the $$n$$ = 1 and $$n$$ = 2 rows of your frequency scan. Was your answer to Before the lab 4 right? Use $$f_n = (n/2L)\sqrt{T/\mu}$$ to explain what sets the speed of a wave on a string and why the frequency does not. Then name a physical change in a real string that would make the speed, and so the inferred density, depend on mode number.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

Record the frequency adjustment and mass increments. The simulation's set values are prescribed, not independent noisy measurements. For real equipment include the vibrating length measurement, mass calibration, pulley friction and uncertainty in locating resonance peaks. Do not turn adjustment increments into random error bars without justification. Give $$\mu$$ from each scan with its uncertainty from the standard error of the fit slope.

## What to hand in

Prelab answers, separate data tables for both scans, plots with fits, two density estimates, and answers to the questions (and to Uncertainty, if assigned). Identify simulated data.
