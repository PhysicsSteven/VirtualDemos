# Magnetism in Matter
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §12.7. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/magnetism-in-matter.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Aluminum core; Bismuth core; Liquid oxygen; Floating water; Iron, Example 12.10; Iron hysteresis loop.

**Using the demo.** A long solenoid with a core of one material. The Core material list has the materials of OpenStax Table 12.2 and a model iron. The Coil section sets the current (−1 to +1 A, in steps of 5 mA) and the turns per centimetre, and has Sweep the current (between +1 and −1 A, over and over), Demagnetize (iron only) and Clear the trace. The plot shows $$B$$ against $$B_0$$. Readouts give $$B_0$$, $$B$$ and $$B - B_0$$, the susceptibility of a linear material, and for iron the magnetization, the field left when the current last crossed zero, and the reverse current that last brought $$B$$ to zero. Blind hides $$B$$, $$B - B_0$$ and the plot.

**What the demo models.** The solenoid is long, so $$B_0 = \mu_0 nI$$ inside it, and a linear core gives $$B = (1 + \chi)B_0$$ with $$\chi$$ from OpenStax Table 12.2. Iron is not linear: it follows the Jiles and Atherton model of hysteresis with the saturation magnetization of iron, $$1.707\times10^6$$ A/m, and four values chosen so its first magnetization curve passes near OpenStax Figure 12.25 (1.41 T at the 0.20 A of Example 12.10, where the book reads 1.4 T). It is a model of a soft iron, not measured data. Simulated data.

</details>

## Goal

Measure the magnetic susceptibility of paramagnetic and diamagnetic materials, and follow the magnetization curve and hysteresis loop of iron.

## Background

A long solenoid with $$n$$ turns per metre and current $$I$$ has the field $$B_0 = \mu_0 nI$$ inside it. Filling it with a material changes the field to

$$B = (1 + \chi)B_0 = \mu B_0/\mu_0,$$

where $$\chi$$ is the material's magnetic susceptibility. In a paramagnet, atomic magnetic moments line up a little with the field and $$\chi$$ is small and positive (about $$10^{-5}$$ to $$10^{-3}$$). In a diamagnet, the field induces moments that oppose it and $$\chi$$ is small and negative (about $$-10^{-5}$$). The change $$B - B_0 = \chi B_0$$ is tiny for both. A ferromagnet such as iron has domains that line up with the field, and $$B$$ can be thousands of times $$B_0$$; but it is not proportional to $$B_0$$, it saturates, and it depends on the history. When the current is brought back to zero, iron keeps a field (the remanence), and a reverse current is needed to bring $$B$$ to zero (the coercive field).

## Before the lab

1. Find $$B_0$$ for 20 turns per centimetre and 1.00 A.
2. Aluminum has $$\chi = 2.2\times10^{-5}$$ and bismuth $$\chi = -1.7\times10^{-5}$$. Find $$B - B_0$$ for each in that solenoid.
3. OpenStax Example 12.10: with 20 turns per centimetre and 0.20 A, an iron core gives about 1.4 T. Find $$B_0$$ and the effective $$B/B_0 - 1$$.
4. Why can a single number $$\chi$$ not describe iron?

## Safety

Real solenoids carrying a few amperes get warm; let them cool before handling. Liquid oxygen supports violent burning and causes frostbite: it is handled only by trained staff.

## Procedure

**Part 1: linear materials.** With 20 turns per centimetre and 1.00 A, measure $$B$$ and $$B - B_0$$ with the coil empty and with each of aluminum, tungsten, liquid oxygen, copper, water and bismuth as the core.

**Part 2: field against current.** With a bismuth core, measure $$B - B_0$$ at currents from −1.00 to +1.00 A in steps of 0.50 A.

**Part 3: iron's first magnetization curve.** Start from unmagnetized iron (the iron preset, or Demagnetize). Raise the current in steps, never going back down, and measure $$B$$ at 0, 0.02, 0.05, 0.10, 0.20, 0.40, 0.70 and 1.00 A.

**Part 4: the hysteresis loop.** From 1.00 A, bring the current down to 0 and measure $$B$$, then make it negative in small steps until $$B$$ is zero and record that current. Go on to −1.00 A, then back up to 0 and record $$B$$ again.

**Using the virtual apparatus.** Iron remembers its history: only raise the current in Part 3, and only lower it in the first half of Part 4. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.

## Data

| Trial | Core | Turns per cm | Current $$I$$ (A) | $$B_0$$ (T) | $$B$$ (T) | $$B - B_0$$ (T) | Notes |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

## Analysis

1. For Part 1, find $$\chi = (B - B_0)/B_0$$ for each material and compare it with OpenStax Table 12.2. Sort them into paramagnets and diamagnets. Why does liquid oxygen have a much larger $$\chi$$ than aluminum?
2. For Part 2, graph $$B - B_0$$ against $$I$$. From the slope, find $$\chi$$ for bismuth, using $$\mu_0 n$$.
3. For Part 3, graph $$B$$ against $$B_0$$. Find $$B/B_0 - 1$$ at 0.20 A and compare it with Example 12.10. How does $$B/B_0$$ change as the current rises, and why does the curve level off?
4. For Part 4, give the remanence and the current that brings $$B$$ to zero, and the coercive field $$H_c = nI$$ in A/m. Is the model's iron a soft or a hard magnetic material?

## Uncertainty

The model has no noise. For paramagnets and diamagnets $$B - B_0$$ is about a hundred thousandth of $$B$$, so $$B$$ must be known to many figures to see it; a reading records $$B$$ to nine figures for that reason. A real measurement of $$\chi$$ uses the force on a sample in a varying field (a Gouy balance) instead. The iron is a model fitted to two points of a textbook figure; real irons vary greatly with purity and heat treatment.

## Questions

1. Why is every material diamagnetic, even those that end up paramagnetic overall?
2. Why do transformer cores use soft iron, while permanent magnets use hard magnetic materials?
3. A frog can be floated in a very strong magnetic field. Why does this need a field that changes strongly with height, and not just a strong field?

## What to hand in

Prelab answers, a Data table copy for each part, the graphs, your values of $$\chi$$, the remanence and coercive field, and answers to the questions. Identify simulated data.
