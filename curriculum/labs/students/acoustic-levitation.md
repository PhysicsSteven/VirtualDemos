# Acoustic Levitation
Student laboratory · Acoustics

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/acoustic-levitation.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Hold a bead; Stack of beads; Too heavy: steel falls; Move with phase; Water droplet; Single emitter and reflector. The demo opens on Stack of beads. Each setup puts the drive at 10 V, the phase at 0 and the bead radius at 0.75 mm, except that Too heavy: steel falls uses 12 V and Single emitter and reflector 20 V.

**Using the demo.**

- The picture is a 40 kHz levitator: two bowls of ultrasound speakers facing each other, or in the last setup one emitter over a flat reflector. The views above the picture are **3D field**, **Trap pockets**, **Slice** and **Flat**; on the Slice and Flat views the colors show **Pressure \|p\|** or **Potential U**. The handout uses Slice. The plot beside the picture is the trap potential U plus gravity along the axis, with the traps and the beads marked.
- Controls: **Drive voltage (peak to peak)**, 0 to 20 V in 0.1 V steps; **Top bowl phase Δφ**, −720° to 720° in 1° steps, with **Sweep the phase** (which reads **Stop the sweep** while the sweep runs) and **Phase to 0**; the bead material chips **Foam polystyrene, 30 kg/m³**, **Water, 998 kg/m³** and **Steel, 7850 kg/m³**; **Bead radius a**, 0.20 to 2.50 mm in 0.05 mm steps; **Fill the traps**, **Add a bead** and **Clear**. Dragging a trap ring on the picture up or down also moves the traps (it sets the phase), clicking a ring drops a bead in it, and the gold microphone can be dragged. In the single emitter setup the phase controls are disabled.
- Readouts under Trapping: the wavelength λ, the plane wave node spacing λ/2, the trap spacing at the center, the largest \|p\| on the axis, **Largest upward push F<sub>max</sub>**, **Weight less buoyancy W**, **F<sub>max</sub> / W**, **Holds above** (the drive at which this bead would hold) and **Beads held / fallen**, with a table of the traps on the axis near the center: position z, the offset trap − node and the depth ΔU. The status line above the picture says whether the bead holds or falls.
- **Record this setup** stores one row: setup and material, bead radius, drive, phase (left blank for one emitter, which has no phase control), the tracked trap, F<sub>max</sub>/W and holds or falls, with the traps near the center in the notes. The tracked trap is the one nearest the center on the first record, then the one nearest the last recorded position, so it follows one trap as the phase moves it.
- **Export to worksheet** fills the Data table's first seven columns in order: setup and material, radius, drive, phase, tracked trap z, F<sub>max</sub>/W, notes. The last column, the drive squared, is yours. Read the weight from the readouts.

**What the demo models.**

- Air at 20 °C and 1 atm: $$c = 331.3\sqrt{1 + 20/273.15}\ \text{m/s} = 343.2\ \text{m/s},\qquad \rho_0 = 1.204\ \text{kg/m}^3,$$ so at 40 kHz $$\lambda = c/f = 8.58\ \text{mm}$$ and the plane wave node spacing is $$\lambda/2 = 4.29\ \text{mm}$$.
- The levitator follows TinyLev (Marzo, Barnes and Drinkwater, 2017): 72 transducers of 10 mm diameter, 36 in each bowl in rings of 6, 12 and 18 on a sphere of radius 60 mm. Each is a piston in its far field, $$p = P_0 V\,D(\theta)\,\frac{e^{i(kd + \varphi)}}{d},$$ and the field is the sum over all 72 in free space: the bowls do not reflect sound and there is no nonlinear acoustics. Because the sound meets the axis at angles θ, the phase along the axis advances at $$k\langle\cos\theta\rangle$$ near the center, so the traps there are $$\lambda/(2\langle\cos\theta\rangle) = 4.76\ \text{mm}$$ apart, closing toward λ/2 away from the center, and a phase step moves them by $$\Delta z = \Delta\varphi/(2k_{\rm axis})$$. In the single emitter setup the reflector is rigid and infinite, replaced by the emitter's mirror image.
- Calibration, illustrative: $$P_0 = 0.30\ \text{Pa}\cdot\text{m}$$ per volt peak to peak, from the Murata MA40S4S data sheet. Real arrays fall short of this, so a real levitator needs more drive than shown here.
- Force: Gor'kov's potential for a small sphere, $$U = K_1\lvert p\rvert^2 - K_2\lvert\nabla p\rvert^2,\qquad K_1 = \frac{\pi a^3 f_1}{3\rho_0 c^2},\qquad K_2 = \frac{\pi a^3 f_2}{2\rho_0\omega^2},$$ with $$f_1 = 1 - \rho_0 c^2/K_p$$ and $$f_2 = 2(\rho_p - \rho_0)/(2\rho_p + \rho_0)$$. It holds for $$ka \ll 1$$ in an inviscid fluid; the page warns above $$a = \lambda/10$$ and calls the numbers unreliable above $$\lambda/5$$. Bulk moduli: foam 3 MPa (a rough figure), water 2.19 GPa, steel 160 GPa. A trap is a minimum of $$U + Wz$$ along the axis; its depth is the energy needed to lift the bead over the lower of the two barriers beside it.
- Beads are rigid spheres that move only along the axis and pass through each other, with $$\left(m + \tfrac12\rho_0 V\right)\frac{dv}{dt} = -\frac{dU}{dz} - W + \text{drag}$$ (Schiller and Naumann drag) and $$W$$ the weight less buoyancy. Acoustic streaming and heating are left out. Bead motion is shown 20 times slower than real.
- The readings are simulated: computed values from this model, not measurements.

</details>

## Goal

Find how a standing sound wave holds a small bead, how the traps move with phase, and how much drive is needed to lift different materials.

## Background

Two sound waves traveling in opposite directions make a standing wave. A small dense bead is pushed toward a pressure node. Gravity pulls it slightly below that node until the upward acoustic force balances its weight.

For plane waves, neighboring pressure nodes are separated by

$$s=\frac{\lambda}{2}=\frac{c}{2f}.$$

Changing the relative phase moves the nodes. Near the center of the bowl array,

$$\Delta z=\frac{\Delta\phi}{2k_{\rm axis}}.$$

The phase is in radians. The effective axial wavenumber $$k_{\rm axis}$$ is smaller than $$2\pi/\lambda$$ because the sound arrives at an angle.

The acoustic force grows as the square of drive voltage. In the small sphere model, force and weight both grow with the bead's volume:

$$F_{\rm acoustic}\propto a^3V_{\rm drive}^2,\qquad W\propto a^3.$$

We will test these two scaling predictions.

## Before the lab

1. Predict how much the acoustic force changes if drive voltage doubles.
2. Why might bead radius cancel from the ratio of acoustic force to weight?
3. Does a bead have to sit exactly at the pressure node when gravity acts?

## Safety

For a real levitator, follow the department's drive and exposure limits. Keep fingers and loose objects clear of powered transducers. Switch off before adjusting hardware. Do not assume an inaudible source is off.

## Procedure

**Map the traps.** Use a small foam bead and a fixed drive. Locate at least five neighboring traps near the center and record their positions. Compare the spacing with $$c/(2f)$$.

**Move a trap.** Follow one near center trap while increasing the relative phase through 0°, 30°, 60°, 90° and 120°. Record its position each time. Follow the same trap rather than switching to a neighbor.

**Change drive and material.** For foam, water and steel, compare four drive settings. Record whether a bead holds or falls and find a small interval between the last failing drive and the first holding drive. Repeat with a second small radius.

**Compare geometry.** Use one emitter and a reflector if available. Compare its trap spacing and required drive with the two bowls. Check whether changing source phase moves its standing wave pattern.

**Using the virtual apparatus.** Use **Slice**, **Pressure \|p\|**, **Potential U** and the trap table to read positions. After choosing each setup, set **Bead radius a** to 0.30 mm. Use **Stack of beads** for spacing and **Move with phase** for manual phase settings: press **Stop the sweep**, then set **Top bowl phase Δφ**. For materials use **Hold a bead**, **Water droplet** and **Too heavy: steel falls**. Record **Largest upward push Fmax**, weight and $$F_{\rm max}/W$$ from the readouts. **Single emitter and reflector** supplies the last comparison; it has no phase control. **Record this setup** records one row; send each part to the worksheet before clearing, so each part gets its own copy of the Data table. In the drive and material part, send each material (both radii) as its own copy, so each material gets its own graph.

## Data

| Setup / material | Radius (mm) | Drive (Vpp) | Phase (degrees) | Tracked trap $$z$$ (mm) | $$F_{\rm max}/W$$ | Holds or falls / notes | Drive squared $$V^2$$ (V²) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Add rows for each phase, drive and material. Record adjacent trap positions and pressure node positions in the notes where needed. Fill in the drive squared yourself for the drive and material rows.

## Analysis

1. Calculate the mean near center spacing and compare with the plane wave prediction.
2. Plot the tracked trap position against phase. Convert the slope from millimeters per degree to millimeters per radian, find $$k_{\rm axis}$$ from it, then compare $$\pi/k_{\rm axis}$$ with your measured spacing.
3. For each material, plot $$F_{\rm max}/W$$ against the drive squared. Use the fitted line to estimate the drive at which the ratio reaches 1, and compare with the observed hold/fall bracket.
4. Compare the two bead radii. Does the modeled ratio of force to weight change?
5. Compare how far foam and water sit below the nearest pressure node. Explain the difference using force balance.

## Uncertainty

Give intervals for trap positions and the hold/fall threshold. Use the phase control increment when estimating the slope uncertainty. Repeat the position analysis with another nearby trap to see how much the result depends on location. Force readouts in the virtual lab are calculated values; keep those separate from quantities you locate yourself, such as trap positions and threshold brackets.

## Questions

1. Why does gravity move a stable bead below its pressure node?
2. Why do denser materials generally need more drive?
3. Why can changing the relative phase of two bowls move traps, while changing the phase of one emitter and its reflection does not?
4. Why might a large real bead fail the radius cancellation prediction?

## What to hand in

Prelab answers, data and screenshots, the spacing and phase graphs, drive squared plots, threshold and radius comparisons, uncertainty estimates, and answers to the questions. Identify which values were simulated readouts and which you located yourself.
