# Helium from the First Three Minutes
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §11.7. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/early-universe.html?setup=bbnStd)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** First three minutes (the Helium view, the subject of this worksheet); Hubble's law today; Half the size; Matter only universe (the Hubble's law worksheet); Proton pairs stop; Atoms form (the Thermal history worksheet); Glow at decoupling; Microwave sky today (the Microwave background view).

**Using the demo.**

- The Helium view follows a simulated sample of 2000 neutrons and protons from a hundredth of a second to a few hours after the Big Bang. Each dot is one nucleon: red for a proton, gray for a neutron, gold for one bound in helium 4.
- Until freeze out the neutrons and protons turn into each other fast enough to stay in equilibrium. You set the freeze out temperature $$kT_f$$, the neutron lifetime $$\tau$$, and the time $$t_D$$ from which deuterium survives and helium forms.
- Play runs the clock (or set the time with its slider). The meters show the time, $$kT$$ and the counts. Reset runs a new random sample.
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
5. Suppose the weak reactions had stopped earlier, while the universe was hotter: freeze out at $$kT_f$$ = 1.20 MeV instead of 0.80 MeV, with $$\tau$$ and $$t_D$$ unchanged. Would the universe end up with more helium, less, or about the same? Say why you think so.

## Safety

No hazards in the virtual lab.

## Procedure

**The standard run.** The link opens the First three minutes setup in the Helium view: the sliders Freeze out at kT_f = 0.80 MeV, Neutron lifetime τ = 878.4 s and Deuterium survives from t_D = 180 s, and the clock (Time t) at 0.01 s. Press Play and let the clock run past t_D (or to the end), then press Record reading (it works only once Time t is past t_D). Press Reset for a new random sample (the clock goes back to 0.01 s), Play again, and repeat until you have five readings. Press Export to worksheet, then Clear.

While the clock is past t_D, moving a setting slider updates the counts at once, so for the next three series you need not play again: set the value and press Record reading. After each series press Export to worksheet and then Clear; each series goes into its own copy of the table.

**Freeze out.** Record a reading for Freeze out at kT_f from 0.50 MeV to 1.20 MeV in steps of 0.10 MeV (click the slider; each arrow key press moves it 0.01 MeV), with the other two settings as in the standard run.

**Neutron lifetime.** Set kT_f back to 0.80 MeV. Record readings for Neutron lifetime τ = 600, 878.4 and 1200 s. Click the value beside the slider, type the lifetime and press Enter to set it exactly (or drag close and use the arrow keys, 0.1 s a press); the reading stores it.

**Deuterium.** Set τ back to 878.4 s and record readings for Deuterium survives from t_D = 60, 120, 180, 300, 450 and 600 s. Time t must be past each t_D, so let the clock run to the end first.

## Data

| Reading | Freeze out kT_f (MeV) | Lifetime τ (s) | Deuterium time t_D (s) | Neutrons at freeze out | Neutrons left at t_D | Helium nuclei | 1/kT_f (1/MeV) | ln(n/p) at freeze out | Helium mass fraction Y | ln(neutrons left) |
|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |

The sample always has 2000 nucleons, so a count of $$n$$ neutrons means $$n/p = n/(2000 - n)$$, and $$Y$$ is 4 × (helium nuclei)/2000.

## Analysis

1. From the five standard runs (the first copy of the table), fill the Y column and find the mean and standard deviation of $$Y$$, and compare the mean with your answer to Before the lab question 3.
2. For the freeze out readings, fill the 1/kT_f, ln(n/p) at freeze out (from Neutrons at freeze out) and Y columns, and plot $$\ln(n/p)$$ at freeze out (vertical) against $$1/kT_f$$ (horizontal). Find the slope, and compare it with $$-\Delta m c^2$$.
3. Plot $$Y$$ (vertical) against $$kT_f$$ (horizontal) from the freeze out copy. What freeze out temperature gives the observed primordial helium fraction, $$Y_p$$ = 0.245 ± 0.004?
4. Fill the Y column of the lifetime and deuterium copies, and plot $$Y$$ (vertical) against $$\tau$$ (horizontal) from the lifetime copy. Which of the three settings changes $$Y$$ the most over its range (compare the Y columns of the freeze out, lifetime and deuterium copies)? Explain why, using the decay law.
5. For the deuterium readings, fill the last column with $$\ln$$(neutrons left at $$t_D$$) and plot it (vertical) against $$t_D$$ (horizontal). Find the slope and the neutron lifetime from it.

## Uncertainty

Each run is a random sample of 2000 nucleons. Use the standard deviation from Analysis 1 to say how large a change in $$Y$$ you could detect with one run, and estimate how many nucleons you would need to measure $$Y$$ to ±0.004, as well as the astronomers do. (The spread of a count $$N$$ is about $$\sqrt N$$.)

## Questions

1. The observed helium fraction is the same in old stars and gas clouds all over the universe. Why is that strong evidence for the Big Bang?
2. Look back at Before the lab 5, and compare $$Y$$ at 1.20 MeV with $$Y$$ at 0.80 MeV in your freeze out copy. Explain what you see with the equilibrium ratio $$n/p = e^{-\Delta m c^2/kT}$$ and the formula for $$Y$$: what does the moment of freeze out lock in, and why does that decide how much helium forms minutes later?

## What to hand in

Prelab answers, the table copies with their graphs and slopes, your value of $$kT_f$$ for the observed helium, and answers to the questions. Identify simulated data.
