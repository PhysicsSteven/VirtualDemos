# The Orbital Magnetic Moment
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §§6.4, 8.1 and 8.2. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/magnetic-moments.html?setup=bohr)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Orbit as a current loop; 3d electron in a field (these two use the Orbit view, the subject of this worksheet); Stern and Gerlach, 1922; Silver at one speed; Mystery atom (the Stern–Gerlach worksheet); Zeeman: cadmium red line (the Zeeman effect worksheet).

**Using the demo.**

- The left half of the Orbit view is a hydrogen electron in Bohr's model, with the nucleus taken as infinitely heavy: radius $$r = n^2a_0$$ and speed $$v = \alpha c/n$$. It is drawn the same size for every n.
- The right half is the quantum picture for the same n with any allowed l and $$m_l$$: the orbital angular momentum $$\mathbf{L}$$ on its cone about the field, and the magnetic moment $$\boldsymbol{\mu}$$ pointing the other way. Spin is left out in this view.
- The cone turns slowly so you can see it. The real precession, at the Larmor frequency $$eB/(4\pi m_e)$$, is 14 GHz at 1 T.
- The graph under the picture shows the energy shift of each $$m_l$$ level against the field, up to 5 T.
- Constants are CODATA 2018 values.
- Record reading stores n, l, $$m_l$$ and B, the Bohr orbit's radius, speed, period, current, area, moment and angular momentum, and the quantum $$\lvert\mathbf{L}\rvert$$, $$L_z$$, angle to the field and energy shift U.
- Export to worksheet sends the readings to the Data table below. Clear starts a new series, which goes into a new copy of the table.
- Blind hides the computed moment, the angle and the energy on the picture.

</details>

## Goal

Treat the electron's orbit as a loop of current, show that its magnetic moment is proportional to its angular momentum with the same ratio for every orbit, and measure the Bohr magneton from the way the energy of an orbital state changes in a magnetic field.

## Background

An electron of charge $$-e$$ going round a circle of radius r at speed v passes any point once per period $$T = 2\pi r/v$$, so the orbit carries a current $$I = e/T$$. A current loop of area $$A = \pi r^2$$ has a magnetic moment $$\mu = IA$$ (§8.2). Its angular momentum is $$L = m_e v r$$, and

$$\mu = \frac{e}{2m_e}L .$$

The moment points opposite to $$\mathbf{L}$$ because the electron's charge is negative. In Bohr's model $$L = n\hbar$$, so $$\mu = n\mu_\mathrm{B}$$, with the Bohr magneton

$$\mu_\mathrm{B} = \frac{e\hbar}{2m_e} .$$

Quantum mechanics replaces Bohr's L (§8.1). An electron with orbital quantum number l has $$\lvert\mathbf{L}\rvert = \sqrt{l(l+1)}\,\hbar$$, and its component along any chosen axis z is $$L_z = m_l\hbar$$ with $$m_l = -l, \dots, +l$$. So $$\mu_z = -m_l\mu_\mathrm{B}$$, and in a field B along z the energy changes by

$$U = -\mu_z B = m_l\,\mu_\mathrm{B}\,B .$$

## Before the lab

1. For n = 1, $$r = 5.29 \times 10^{-11}$$ m and $$v = 2.19 \times 10^{6}$$ m/s. Find the period, the current and the moment, and compare the moment with $$\mu_\mathrm{B} = 9.27 \times 10^{-24}$$ J/T.
2. Show from $$I = e/T$$, $$A = \pi r^2$$ and $$L = m_e v r$$ that $$\mu/L = e/(2m_e)$$ for any circular orbit.
3. For l = 2, list the allowed values of $$m_l$$, find $$\lvert\mathbf{L}\rvert$$ in units of $$\hbar$$, and find the smallest angle $$\mathbf{L}$$ can make with the z axis.
4. Find the energy difference between neighbouring $$m_l$$ levels in a field of 1 T, in meV.

## Safety

No hazards in the virtual lab.

## Procedure

**Bohr orbits.** Start with Orbit as a current loop. Record a reading for each n from 1 to 6.

**Energy in a field.** Clear the readings and pick 3d electron in a field. With $$m_l = 2$$, record a reading for each field from 0 to 5 T in steps of 1 T. Send this run to a new copy of the table.

**All the levels.** Clear again. In a field of 5 T, record a reading for each allowed $$m_l$$ from −2 to 2. Send this run to a third copy of the table.

## Data

| Reading | n | l | m_l | Field B (T) | Current I (A) | Area A (m²) | Moment μ = IA (A·m²) | Bohr angular momentum L (J·s) | Energy shift U (meV) |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

The current, area and angular momentum columns are those of the Bohr orbit with the same n.

## Analysis

1. For the Bohr orbits, work out the moment $$\mu = IA$$ for each n. Graph μ against L and find the slope. Compare it with $$e/(2m_e)$$.
2. Graph μ against n for the same orbits. What does the slope give you? Compare it with the Bohr magneton.
3. For the $$m_l = 2$$ run, graph U against B. Use the slope to find $$\mu_\mathrm{B}$$ in meV/T and in J/T.
4. For the run at 5 T, graph U against $$m_l$$. How many levels are there, how far apart are they, and how does that spacing compare with $$\mu_\mathrm{B}B$$?
5. For each $$m_l$$ in the last run, find the angle between $$\mathbf{L}$$ and the field from $$\cos\theta = m_l/\sqrt{l(l+1)}$$. Check one value against the angle the demo shows with Blind off.

## Uncertainty

The model has no noise, and the readings carry six significant figures, so the scatter about your fits is only rounding. Use the standard errors of the slopes, and say how many significant figures your $$e/(2m_e)$$ and $$\mu_\mathrm{B}$$ deserve. In a real atom the electron's spin adds its own moment, about the same size; this view leaves it out.

## Questions

1. Why does $$\mu/L$$ come out the same for every orbit, whatever its size or speed?
2. Why can $$\mathbf{L}$$ never point exactly along the field, even for $$m_l = l$$?
3. Bohr's model gives the ground state of hydrogen $$L = \hbar$$, but quantum mechanics gives it l = 0 and no orbital moment at all. What kind of experiment could tell which is right? (The Stern–Gerlach worksheet does one.)
4. The precession of $$\mathbf{L}$$ about B runs at 14 GHz in a 1 T field. Why is the energy shift U the same whichever way round the cone $$\mathbf{L}$$ happens to be?

## What to hand in

Prelab answers, the three table copies with their graphs and fits, your values of $$e/(2m_e)$$ and $$\mu_\mathrm{B}$$ with uncertainties and comparisons, the angles from Analysis 5, and answers to the questions. Identify simulated data.
