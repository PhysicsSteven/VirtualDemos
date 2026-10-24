# Kundt's Tube
Student laboratory · Acoustics

Textbook: OpenStax *University Physics*, Vol. 1, §17.2 and §17.4. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/kundts-tube.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Steel rod, air; Steel rod, helium; Clamped at L/4; Brass rod, air; Unknown rod.

**Using the demo.** A metal rod held in a clamp stand rings when stroked; a disc on its end drives the gas in a glass tube closed by a plunger. A frequency counter shows the rod's frequency while it rings, and a loudness bar shows how strongly the gas column responds. The rod, its length, the clamp position, the gas and its temperature are on the Set up card, which fades while the rod rings. The rod is quiet until you stroke it. The plunger and the pointer are on the Tube card, which stays in view while the rod rings: drag them on the picture, or use their sliders and the 1 mm and 1 cm step buttons. A close up of 16 cm of tube around the pointer has a millimetre scale. Blind hides the speeds, the heap spacing and the nearest resonance; the unknown rod always hides its speed.

**What the demo models.** A thin rod with free ends: longitudinal waves travel at $$v_{\text{rod}} = \sqrt{E/\rho}$$, with typical handbook values of $$E$$ and $$\rho$$ (chosen; real alloys vary by several percent). The clamp holds a node, so the rod rings with $$n = 1$$ half wavelength in it when clamped at the middle and $$n = 2$$ when clamped $$L/4$$ from an end. The gas is ideal at 101325 Pa, driven by the disc as a piston, with a rigid plunger and a small chosen loss of 0.10 per metre in amplitude. The dust is a picture: it drifts toward the displacement nodes while the gas motion is strong enough. The counter shows $$f$$ to 1 Hz. Simulated data with no noise.

</details>

## Goal

Measure the speed of sound in a gas from the dust pattern in Kundt's tube, compare it with the speed of sound in the rod that drives it, and find the speed of sound in an unknown rod.

## Background

A rod with free ends, clamped at its middle, rings in its lowest longitudinal mode with half a wavelength along its length, $$\lambda_{\text{rod}} = 2L/n$$ with $$n = 1$$. Clamped a quarter of the way from one end it must have a node there, and rings with $$n = 2$$. Its frequency is

$$f = \frac{n\,v_{\text{rod}}}{2L},\qquad v_{\text{rod}} = \sqrt{\frac{E}{\rho}}.$$

The disc on the rod's end drives the gas in the tube at this same frequency. When the plunger is placed so that the gas column resonates, a standing wave forms in the gas. Light dust is thrown about where the gas moves most and settles in heaps at the displacement nodes, which are half a wavelength apart in the gas:

$$d = \frac{\lambda_{\text{gas}}}{2},\qquad v_{\text{gas}} = f\lambda_{\text{gas}} = 2df.$$

The frequency is the same in the rod and the gas, so the speeds are in the ratio of the wavelengths:

$$\frac{v_{\text{rod}}}{v_{\text{gas}}} = \frac{2L/n}{2d} = \frac{L}{nd}.$$

For an ideal gas, $$v_{\text{gas}} = \sqrt{\gamma RT/M}$$, so a measured $$v_{\text{gas}}$$ with a known $$M$$ and $$T$$ gives $$\gamma$$.

## Before the lab

1. A 1.00 m steel rod ($$E = 200$$ GPa, $$\rho = 7850\ \mathrm{kg/m^3}$$) is clamped at its middle. Find $$v_{\text{rod}}$$ and the frequency it rings at.
2. At that frequency, how far apart are the dust heaps in air at 20 °C ($$v = 343.2$$ m/s)? In helium ($$v = 1007$$ m/s)?
3. Why do the heaps form at displacement nodes and not at antinodes?
4. Why must the plunger be moved to a resonance before clear heaps form?

## Safety

On a real Kundt's tube, stroke the rod with a cloth or chamois dusted with rosin, keep the glass tube supported along its length, and wear eye protection when the rod rings loudly. Hold the rod only at the clamp.

## Procedure

**Part 1: steel rod in air.** With a 1.00 m steel rod clamped at its middle and air at 20 °C, hide the predictions, keep the rod ringing and adjust the plunger until the gas column resonates and the dust forms clear heaps. Find the centre of every heap along the tube and record each one, numbering the heaps from the disc. Record the counter frequency.

**Part 2: helium.** Repeat Part 1 with helium in the tube, at 20 °C.

**Part 3: clamped at L/4.** Repeat Part 1 in air with the steel rod clamped a quarter of its length from one end.

**Part 4: unknown rod.** With an unknown rod 1.00 m long, clamped at its middle, in air at 20 °C, find the heap spacing and the frequency.

**Using the virtual apparatus.** Changing the gas spreads the dust out again; after a change of rod, clamp or temperature the old heaps stay where they are until the tube is loud again (spread the dust yourself before you tune), and the counter shows $$f$$ only while the rod rings. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.

## Data

| Heap $$j$$ | $$x$$ (cm) | Rod | $$L_{\text{rod}}$$ (m) | Mode $$n$$ | $$f$$ (Hz) | Gas | $$T$$ (°C) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Record where the plunger was when the heaps formed.

## Analysis

1. For Part 1, graph $$x$$ against $$j$$. The slope is the heap spacing $$d$$. Find $$v_{\text{gas}} = 2df$$ with its uncertainty, and compare it with $$\sqrt{\gamma RT/M}$$ for air.
2. Find $$v_{\text{rod}}$$ for steel two ways: from $$2Lf/n$$, and from $$v_{\text{gas}}L/(nd)$$ using the theoretical speed in air. Compare both with $$\sqrt{E/\rho}$$.
3. From Part 2, find $$v$$ in helium and then $$\gamma$$ for helium, using $$M = 4.003$$ g/mol. Is it close to the monatomic value 5/3?
4. From Part 3, compare the heap spacing and the frequency with Part 1. Explain both changes using where the rod must have nodes.
5. From Part 4, find the speed of sound in the unknown rod by both methods. Which materials, if any, does it match?

## Uncertainty

In the simulation the heap positions are read to 1 mm and the counter to 1 Hz, and the model has no noise, so the scatter of the points about the line comes only from reading the heap centres. Using all the heaps in a fit gives $$d$$ much more precisely than any one pair. On a real tube add the width of the heaps, the fine ridges within them, end effects near the disc and plunger, the temperature of the gas and the rod's own temperature, and the counter or tuning fork calibration.

## Questions

1. Why is the frequency the same in the rod and in the gas, while the wavelengths differ?
2. Why are the heaps in helium farther apart than in air, at the same frequency?
3. What would happen to the heap spacing if the gas were warmed from 20 °C to 40 °C?
4. Why can a rod clamped at its middle not ring with $$n = 2$$?

## What to hand in

Prelab answers, a Data table copy for each part, the fit of $$x$$ against $$j$$ for each part, your values of $$v_{\text{gas}}$$, $$v_{\text{rod}}$$ and $$\gamma$$ with uncertainties, the unknown rod analysis, and answers to the questions. Identify simulated data.
