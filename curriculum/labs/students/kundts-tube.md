# Kundt's Tube
Student laboratory · Acoustics

Textbook: OpenStax *University Physics*, Vol. 1, §17.2 and §17.4. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/kundts-tube.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Steel rod, air; Steel rod, helium; Clamped at L/4; Brass rod, air; Unknown rod.

**Using the demo.** A metal rod held in a clamp stand rings when stroked; a disc on its end drives the gas in a glass tube closed by a plunger. A frequency counter shows the rod's frequency while it rings, and a loudness bar shows how strongly the gas column responds. The rod, its length, the clamp position, the gas and its temperature are on the Set up card, which fades while the rod rings. The rod is quiet until you stroke it. The plunger and the pointer are on the Tube card, which stays in view while the rod rings: drag them on the picture, or use their sliders and the 1 mm and 1 cm step buttons. A close up of 16 cm of tube around the pointer has a millimeter scale. Blind hides the speeds, the heap spacing and the nearest resonance; the unknown rod always hides its speed.

**What the demo models.** A thin rod with free ends: longitudinal waves travel at $$v_{\text{rod}} = \sqrt{E/\rho}$$, with typical handbook values of $$E$$ and $$\rho$$ (chosen; real alloys vary by several percent). The clamp holds a node, so the rod rings with $$n = 1$$ half wavelength in it when clamped at the middle and $$n = 2$$ when clamped $$L/4$$ from an end. The gas is ideal at 101325 Pa, driven by the disc as a piston, with a rigid plunger and a small chosen loss of 0.10 per meter in amplitude. The dust is a picture: it drifts toward the displacement nodes while the gas motion is strong enough. The counter shows $$f$$ to 1 Hz. Simulated data with no noise.

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
2. How far apart are the dust heaps in air at 20 °C ($$v = 343.2$$ m/s) with this rod? Now the air is pumped out and the tube filled with helium ($$v = 1007$$ m/s), with the same rod. What do you expect the frequency counter and the heap spacing each to do: go up, go down or stay the same? Find the helium spacing that your choice implies.

## Safety

On a real Kundt's tube, stroke the rod with a cloth or chamois dusted with rosin, keep the glass tube supported along its length, and wear eye protection when the rod rings loudly. Hold the rod only at the clamp.

## Procedure

**Part 1: steel rod in air.** With a 1.00 m steel rod clamped at its middle and air at 20 °C, hide the predictions, keep the rod ringing and adjust the plunger until the gas column resonates and the dust forms clear heaps. Find the centers of the first six heaps from the disc (heaps 1 to 6) and record each one, numbering the heaps from the disc. Record the counter frequency.

**Part 2: helium.** Repeat Part 1 with helium in the tube, at 20 °C.

**Part 3: unknown rod.** With an unknown rod 1.00 m long, clamped at its middle, in air at 20 °C, tune the plunger as in Part 1, then record the centers of the first six heaps and the counter frequency. Keep the same unknown rod for the whole part: choosing a new one changes the rod.

**Using the virtual apparatus.** Before Part 1, tick **Blind: hide the speeds and the predictions** under Lab. For each part:

1. Choose the setup: **Steel rod, air** (Part 1), **Steel rod, helium** (Part 2) or **Unknown rod** (Part 3). The plunger starts 1 cm short of a resonance.
2. Press **Stroke the rod** and tick **Keep it ringing**. Move the plunger with **Plunger position ℓ (disc to plunger)** or its ℓ −1 cm, ℓ −1 mm, ℓ +1 mm and ℓ +1 cm buttons until **Loudest air motion in the tube** (under Readouts) is at its largest; the dust then forms heaps. Write the **Plunger ℓ** readout in the notes.
3. Put **Pointer x (from the disc)** on the middle of each of the first six heaps, from the disc outward (in helium only four fit in the tube; use the close up's millimeter scale and the 1 mm buttons), and press **Record this heap**. Each row gets the next heap number $$j$$ and the counter frequency $$f$$, so the counter needs no separate reading.
4. Press **Export to worksheet**, then **Clear**, so each part gets its own copy of the Data table.

Changing the gas spreads the dust out again; after a change of rod, clamp or temperature the old heaps stay where they are until the tube is loud again, so press **Spread the dust** before you tune. The counter shows $$f$$ only while the rod rings.

## Data

| Heap $$j$$ | $$x$$ (cm) | Rod | $$L_{\text{rod}}$$ (m) | Mode $$n$$ | $$f$$ (Hz) | Gas | $$T$$ (°C) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

For each part, write in that copy's notes where the plunger was when the heaps formed.

## Analysis

1. For Part 1, graph $$x$$ against $$j$$. The slope is the heap spacing $$d$$. Find $$v_{\text{gas}} = 2df$$ with its uncertainty, and compare it with $$\sqrt{\gamma RT/M}$$ for air.
2. Find $$v_{\text{rod}}$$ for steel from $$2Lf/n$$ and compare it with $$\sqrt{E/\rho}$$.
3. From Part 2, find $$v$$ in helium and then $$\gamma$$ for helium, using $$M = 4.003$$ g/mol. Is it close to the monatomic value 5/3?
4. From Part 3, find the speed of sound in the unknown rod by both methods. Which materials, if any, does it match?

## Uncertainty

In the simulation the heap positions are read to 1 mm and the counter to 1 Hz, and the model has no noise, so the scatter of the points about the line comes only from reading the heap centers. Using six heaps in a fit gives $$d$$ more precisely than any one pair. On a real tube add the width of the heaps, the fine ridges within them, end effects near the disc and plunger, the temperature of the gas and the rod's own temperature, and the counter or tuning fork calibration.

## Questions

1. Put your Part 1 and Part 2 counter readings and heap spacings beside your choices in Before the lab 2. Explain what you saw from where the frequency comes from and what sets the wavelength in the gas. Use the same reasoning to say what would happen to the heap spacing if the air were warmed from 20 °C to 40 °C.

## What to hand in

Prelab answers, a Data table copy for each part, the fit of $$x$$ against $$j$$ for each part, your values of $$v_{\text{gas}}$$, $$v_{\text{rod}}$$ and $$\gamma$$ with uncertainties, the unknown rod analysis, and answers to the questions. Identify simulated data.
