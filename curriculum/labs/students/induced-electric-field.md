# Induced Electric Fields
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §13.4. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/induced-electric-field.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Example 13.8, path outside; Path inside; Path off to the side; Path around part of it; Steady current; Alternating current.

**Using the demo.** The end of a long solenoid seen along its axis, with a closed circular path around or beside it. Solenoid current chooses how the current changes (decaying, ramp up, alternating or steady) and sets $$I_0$$, the decay constant or rate, the turns per meter and the solenoid's radius; Pause, Play and Restart control time. Closed path sets the path's radius and the distance of its center from the axis (or drag it); the path is followed counterclockwise, with $$B$$ out of the page positive. Readouts give the time, the current, $$B$$ and $$dB/dt$$ inside, the flux through the path and $$-d\Phi/dt$$, the circulation $$\oint\vec E\cdot d\vec l$$ added up around the path, and $$E$$ on a centered path. Blind hides the field arrows and plot, $$E$$ and the circulation.

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

## Safety

A real solenoid switched off suddenly can induce a large voltage across its own terminals; a diode across the coil protects the circuit and the person switching it.

## Procedure

**Part 1: field against distance.** Use Example 13.8's values, with time paused at $$t = 0$$. With the path centered on the axis, measure $$E$$ and $$-d\Phi/dt$$ for path radii of 0.5, 1.0, 1.5, 2.0, 3.0, 4.0, 6.0 and 9.0 cm.

**Part 2: paths that are not centered.** Still at $$t = 0$$, measure the circulation and $$-d\Phi/dt$$ for a 2.0 cm path with its center 6.0 cm from the axis, 2.5 cm from the axis, and 1.0 cm from the axis, and for a 4.0 cm path centered 1.0 cm from the axis.

**Part 3: how fast the current changes.** With a centered 6.0 cm path at $$t = 0$$, measure $$E$$ for decay constants of 20, 50, 100, 200, 500 and 2000 per second. Then measure with a steady current.

**Using the virtual apparatus.** The decay constant moves in steps on a log scale, so 50 and 500 per second come out as 50.1 and 501; record the value the demo shows. Pause, then Restart to stand at $$t = 0$$; while paused you can move the path freely. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.

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

1. For Part 1, graph $$E$$ against the path radius. Where is $$E$$ largest? For the paths inside, find the slope and compare it with $$\lvert dB/dt\rvert/2$$. For those outside, show that $$Er$$ is the same for each, and compare it with $$R^2\lvert dB/dt\rvert/2$$.
2. For Parts 1 and 2, compare $$\oint\vec E\cdot d\vec l$$ with $$-d\Phi/dt$$ for every path. Explain why the path beside the solenoid gives zero although $$E$$ is not zero on it.
3. For Part 3, graph $$E$$ against the decay constant. What does it show about what makes the electric field: the size of $$B$$, or how fast it changes?
4. Turn Blind off and look at the field arrows in Part 2. Why can the field outside the solenoid not be found from Faraday's law alone when the path is off center?

## Uncertainty

The model is exact; the circulation is added up numerically in 720 pieces, which agrees with $$-d\Phi/dt$$ to rounding error for centered paths and to a few parts in a million where the path crosses the solenoid's edge (the field has a kink there). A real solenoid is not infinitely long, so a little field leaks outside it near the ends, and a rapidly changing current also radiates; both are left out here.

## Questions

1. A copper ring is placed around a solenoid, not touching it, outside where $$B = 0$$. Does a current flow in the ring when the solenoid current changes? Why?
2. Why is the induced electric field called non conservative?
3. How does a transformer use the induced electric field?

## What to hand in

Prelab answers, a Data table copy for each part, the graphs and fits, your comparisons of the circulation with $$-d\Phi/dt$$, and answers to the questions. Identify simulated data.
