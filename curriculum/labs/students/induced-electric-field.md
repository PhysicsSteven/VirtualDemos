# Induced Electric Fields
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §13.4. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/induced-electric-field.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Example 13.8, path outside; Path inside; Path off to the side; Path around part of it; Steady current; Alternating current.

**Using the demo.** The end of a long solenoid seen along its axis, with a closed circular path around or beside it. Solenoid current chooses how the current changes (decaying, ramp up, alternating or steady) and sets $$I_0$$, the decay constant or rate, the turns per meter and the solenoid's radius; Play, Pause, Step and Reset control time. Closed path sets the path's radius and the distance of its center from the axis (or drag it); the path is followed counterclockwise, with $$B$$ out of the page positive. Readouts give the time, the current, $$B$$ and $$dB/dt$$ inside, the flux through the path and $$-d\Phi/dt$$, the circulation $$\oint\vec E\cdot d\vec l$$ added up around the path, and $$E$$ on a centered path. Blind hides the field arrows and plot, $$E$$ and the circulation.

**What the demo models.** An ideal long solenoid: $$B = \mu_0 nI$$ inside and zero outside, with the current changing slowly enough that $$B$$ is uniform inside at each instant. By symmetry the induced field circles the axis, with $$E = (r/2)\lvert dB/dt\rvert$$ inside and $$E = (R^2/2r)\lvert dB/dt\rvert$$ outside. The circulation is added up numerically in 720 pieces around the path, independently of the flux. Simulated data.

</details>

## Goal

Show that a changing magnetic field makes an electric field, even where the magnetic field itself is zero, and test Faraday's law, $$\oint\vec E\cdot d\vec l = -d\Phi/dt$$, for paths inside, outside and beside a solenoid.

## Background

Faraday's law says that around any closed path

$$\oint\vec E\cdot d\vec l = -\frac{d\Phi_m}{dt},$$

where $$\Phi_m$$ is the magnetic flux through the path. No wire is needed: the changing flux makes an electric field in empty space, and a wire placed on the path simply lets that field drive a current. For a long solenoid of radius $$R$$, with $$B = \mu_0 nI$$ inside and zero outside, the field circles the axis. On a centered circle of radius $$r$$, $$\oint\vec E\cdot d\vec l = 2\pi rE$$, so

$$E = \frac{r}{2}\left|\frac{dB}{dt}\right|\quad (r < R),\qquad E = \frac{R^2}{2r}\left|\frac{dB}{dt}\right|\quad (r > R).$$

Outside the solenoid $$B$$ is zero, but $$E$$ is not. For the decaying current $$I = I_0 e^{-\alpha t}$$, $$dB/dt = -\alpha\mu_0 nI_0 e^{-\alpha t}$$.

## Before the lab

1. OpenStax Example 13.8: $$R = 2.0$$ cm, $$n = 2000$$ turns per meter, $$I = (2.0\ \mathrm{A})e^{-\alpha t}$$ with $$\alpha = 200\ \mathrm{s^{-1}}$$. Find $$dB/dt$$ at $$t = 0$$.
2. Find $$E$$ at $$t = 0$$ at $$r = 1.0$$ cm (inside) and $$r = 6.0$$ cm (outside).
3. A circular path of radius 2.0 cm lies beside the solenoid, not around it. What is $$\oint\vec E\cdot d\vec l$$? Is $$E$$ zero on it?
4. Why is there no induced electric field when the current is steady, however large it is?
5. Two centered circular wire loops surround the solenoid of Before the lab 1, one of radius 3.0 cm and one of radius 9.0 cm. At $$t = 0$$, is the EMF around the 9.0 cm loop larger than, smaller than or the same as the EMF around the 3.0 cm loop? Why?

## Safety

A real solenoid switched off suddenly can induce a large voltage across its own terminals; a diode across the coil protects the circuit and the person switching it.

## Procedure

**Part 1: field against distance.** Choose the setup Example 13.8, path outside, press Pause, then Reset, so the Time t readout shows 0. Leave Path center, distance from the axis at 0 (centered). Set the Path radius slider to 0.5, 1.0, 2.0, 3.0, 4.0, 6.0 and 9.0 cm and press Record reading at each; $$E$$ goes in the $$E$$ on the path column and $$-d\Phi/dt$$ in its own column. Export to worksheet, then Clear.

**Part 2: paths that are not centered.** Still at $$t = 0$$, set Path radius to 2.0 cm and Path center, distance from the axis to 6.0, 2.5 and 1.0 cm, pressing Record reading at each; then set Path radius to 4.0 cm with the center 1.0 cm from the axis and record. The circulation goes in the $$\oint\vec E\cdot d\vec l$$ column (the $$E$$ column reads not the same all around for these paths). Export to worksheet, then Clear.

**Part 3: how fast the current changes.** Choose Example 13.8, path outside again (a centered 6.0 cm path), Pause and Reset. Set the Decay constant α slider to 20, 50, 100, 200, 500 and 2000 per second and press Record reading at each. Then press Steady under Solenoid current and record once more. Export to worksheet.

**Using the virtual apparatus.** The decay constant moves in steps on a log scale, so 50 and 500 per second come out as 50.1 and 501; record the value the demo shows. Pause, then Reset to stand at $$t = 0$$; while paused you can move the path freely. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.

## Data

| Trial | Current | Time $$t$$ (ms) | $$dB/dt$$ (T/s) | Path radius (cm) | Center from the axis (cm) | Flux $$\Phi$$ (Wb) | $$-d\Phi/dt$$ (V) | $$\oint\vec E\cdot d\vec l$$ (V) | $$E$$ on the path (V/m) |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

## Analysis

1. For Part 1, graph $$E$$ on the path (vertical) against Path radius (horizontal). Where is $$E$$ largest? For the paths inside, find the slope and compare it with $$\lvert dB/dt\rvert/2$$. For those outside, show that $$Er$$ is the same for each, and compare it with $$R^2\lvert dB/dt\rvert/2$$.
2. For Parts 1 and 2, compare $$\oint\vec E\cdot d\vec l$$ with $$-d\Phi/dt$$ for every path. Explain why the path beside the solenoid gives zero although $$E$$ is not zero on it.
3. For Part 3, graph $$E$$ on the path against the decay constant α (read it from the Current column). What does it show about what makes the electric field: the size of $$B$$, or how fast it changes?
4. Turn Blind off and look at the field arrows in Part 2. Why can the field outside the solenoid not be found from Faraday's law alone when the path is off center?

## Uncertainty

The model is exact; the circulation is added up numerically in 720 pieces, which agrees with $$-d\Phi/dt$$ to rounding error for centered paths and to a few parts in a million where the path crosses the solenoid's edge (the field has a kink there). A real solenoid is not infinitely long, so a little field leaks outside it near the ends, and a rapidly changing current also radiates; both are left out here.

## Questions

1. How does a transformer use the induced electric field?
2. What did Part 1 give for $$-d\Phi/dt$$ on the 3.0 and 9.0 cm paths, and how does that compare with your answer to Before the lab 5? Using where the flux is, explain why the two loops get the EMF they do, although $$E$$ is smaller on the larger loop. Then say why a nonzero $$\oint\vec E\cdot d\vec l$$ makes this field non conservative.

## What to hand in

Prelab answers, a Data table copy for each part, the graphs and fits, your comparisons of the circulation with $$-d\Phi/dt$$, and answers to the questions. Identify simulated data.
