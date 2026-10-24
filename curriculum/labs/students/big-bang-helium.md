# Helium from the First Three Minutes
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §11.7. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/early-universe.html?setup=bbnStd)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** First three minutes (the Helium view, the subject of this worksheet); Hubble's law today; Half the size; Matter only universe (the Hubble's law worksheet); Proton pairs stop; Atoms form (the Thermal history worksheet); Glow at decoupling; Microwave sky today (the Microwave background view).

**Using the demo.**

- The Helium view follows a simulated sample of 2000 neutrons and protons from a hundredth of a second to a few hours after the Big Bang. Each dot is one nucleon: red for a proton, grey for a neutron, gold for one bound in helium 4.
- Until freeze out the neutrons and protons turn into each other fast enough to stay in equilibrium. You set the freeze out temperature $$kT_f$$, the neutron lifetime $$\tau$$, and the time $$t_D$$ from which deuterium survives and helium forms.
- Play runs the clock (or set the time with its slider). The meters show the time, $$kT$$ and the counts. Start over runs a new random sample.
- The graph shows the neutron share $$n/(n + p)$$ of the sample against time.
- Record reading works once the clock is past $$t_D$$. It stores the three settings, the number of neutrons at freeze out, the number still there at $$t_D$$, and the number of helium nuclei made. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides the predicted ratios and helium fraction and the theory curves.

</details>

## Goal

Make the helium of the early universe, and find how the amount depends on when the neutrons stopped being made, on how fast free neutrons decay, and on when nuclei could first survive.

## Background

In the first second the universe was hot enough for weak reactions such as $$n + \nu_e \leftrightarrow p + e^-$$ to turn neutrons and protons into each other quickly. A neutron has $$\Delta m\,c^2$$ = 1.293 MeV more rest energy than a proton, so in equilibrium there are fewer neutrons:

$$\frac{n}{p} = e^{-\Delta m c^2/kT}.$$

As the universe cooled, these reactions became too slow to keep up. At freeze out, $$kT_f$$ ≈ 0.8 MeV about a second after the Big Bang, the ratio stopped changing, except that free neutrons decay ($$n \to p + e^- + \bar\nu_e$$) with a lifetime $$\tau$$ = 878.4 s:

$$n(t) = n_f\,e^{-(t - t_f)/\tau}.$$

Neutrons and protons can join into deuterium, but until a few minutes after the Big Bang the photons were energetic enough to break deuterium apart. Once deuterium survives, at $$t_D$$ ≈ 3 minutes, almost every remaining neutron ends up in helium 4, two neutrons with two protons (§11.7). Since a helium nucleus holds two neutrons and has four times a nucleon's mass, the share of the mass in helium is

$$Y = \frac{2\,(n/p)}{1 + n/p}.$$

The demo leaves out several things: freeze out really takes about a second, deuterium, helium 3 and lithium 7 also form in small amounts, and $$t_D$$ is set by hand.

## Before the lab

1. Find $$n/p$$ at freeze out for $$kT_f$$ = 0.8 MeV.
2. Freeze out happens about 1 s after the Big Bang and deuterium survives from 180 s. What fraction of the free neutrons survive the wait?
3. Use your answers to find $$n/p$$ at 180 s and the helium mass fraction $$Y$$.
4. If every neutron had ended up in helium straight away (no decay), what would $$Y$$ be?

## Safety

No hazards in the virtual lab.

## Procedure

**The standard run.** Start with the First three minutes setup ($$kT_f$$ = 0.80 MeV, $$\tau$$ = 878.4 s, $$t_D$$ = 180 s). Play it past $$t_D$$ and record a reading. Press Start over for a new random sample and repeat until you have five readings.

**Freeze out.** Clear the readings. Record a reading for $$kT_f$$ from 0.50 MeV to 1.20 MeV in steps of 0.10 MeV, with the other two settings as in the standard run.

**Neutron lifetime.** Clear the readings and set $$kT_f$$ back to 0.80 MeV. Record readings for $$\tau$$ = 600, 700, 800, 878.4, 1000 and 1200 s.

**Deuterium.** Clear the readings, set $$\tau$$ back to 878.4 s, and record readings for $$t_D$$ = 60, 120, 180, 300, 450 and 600 s.

## Data

| Reading | Freeze out kT_f (MeV) | Lifetime τ (s) | Deuterium time t_D (s) | Neutrons at freeze out | Neutrons left at t_D | Helium nuclei | 1/kT_f (1/MeV) | ln(n/p) at freeze out | Helium mass fraction Y |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

The sample always has 2000 nucleons, so a count of $$n$$ neutrons means $$n/p = n/(2000 - n)$$, and $$Y$$ is 4 × (helium nuclei)/2000.

## Analysis

1. From the five standard runs, find the mean and standard deviation of $$Y$$, and compare the mean with your answer to Before the lab question 3.
2. For the freeze out readings, fill the last three columns and plot $$\ln(n/p)$$ at freeze out against $$1/kT_f$$. Find the slope, and compare it with $$-\Delta m c^2$$.
3. Plot $$Y$$ against $$kT_f$$. What freeze out temperature gives the observed primordial helium fraction, $$Y_p$$ = 0.245 ± 0.004?
4. Plot $$Y$$ against $$\tau$$ and against $$t_D$$. Which setting changes $$Y$$ the most over its range? Explain why, using the decay law.
5. From the deuterium readings, plot $$\ln$$(neutrons left at $$t_D$$) against $$t_D$$. Find the slope and the neutron lifetime from it.

## Uncertainty

Each run is a random sample of 2000 nucleons. Use the standard deviation from Analysis 1 to say how large a change in $$Y$$ you could detect with one run, and estimate how many nucleons you would need to measure $$Y$$ to ±0.004, as well as the astronomers do. (The spread of a count $$N$$ is about $$\sqrt N$$.)

## Questions

1. Why are there fewer neutrons than protons at freeze out, and why does it matter that the neutron is heavier by only 1.293 MeV?
2. Measurements of the neutron lifetime by two methods disagree, 878 s from neutrons stored in a bottle and 888 s from neutrons in a beam. By how much would that change $$Y$$ in this model?
3. Why did the universe make so little of anything heavier than helium, when stars go on to make carbon and oxygen?
4. The observed helium fraction is the same in old stars and gas clouds all over the universe. Why is that strong evidence for the Big Bang?

## What to hand in

Prelab answers, the table copies with their graphs and slopes, your value of $$kT_f$$ for the observed helium, and answers to the questions. Identify simulated data.
