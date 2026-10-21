# Acoustic Levitation
Student laboratory · acoustics

[Open Acoustic Levitation](https://physicssteven.github.io/VirtualDemos/demos/acoustic-levitation.html)

## Goal

Find how a standing sound wave holds a small bead, how the traps move with phase, and how much drive is needed to lift different materials.

## Background

Two sound waves traveling in opposite directions make a standing wave. A small dense bead is pushed toward a pressure node. Gravity pulls it slightly below that node until the upward acoustic force balances its weight.

For plane waves, neighboring pressure nodes are separated by

$$s=\frac{\lambda}{2}=\frac{c}{2f}.$$

Changing the relative phase moves the nodes. Near the center of the bowl array,

$$\Delta z=\frac{\Delta\phi}{2k_{\rm axis}}.$$

The phase is in radians. The effective axial wavenumber k_axis is smaller than 2π/λ because the sound arrives at an angle.

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

**Map the traps.** Use a small foam bead and a fixed drive. Locate at least five neighboring traps near the center and record their positions. Compare the spacing with c/(2f).

**Move a trap.** Follow one near center trap while increasing the relative phase through 0°, 30°, 60°, 90° and 120°. Record its position each time. Follow the same trap rather than switching to a neighbor.

**Change drive and material.** For foam, water and steel, compare four drive settings. Record whether a bead holds or falls and find a small interval between the last failing drive and the first holding drive. Repeat with a second small radius.

**Compare geometry.** Use one emitter and a reflector if available. Compare its trap spacing and required drive with the two bowls. Check whether changing source phase moves its standing wave pattern.

**Using the virtual apparatus.** Use **Slice**, **Pressure |p|**, **Potential U** and the trap table to read positions. After choosing each setup, set **Bead radius a** to 0.30 mm. Use **Stack of beads** for spacing and **Move with phase** for manual phase settings: press **Stop the sweep**, then set **Top bowl phase Δφ**. For materials use **Hold a bead**, **Water droplet** and **Too heavy: steel falls**. Record **Largest upward push Fmax**, weight and Fmax/W from the readouts. **Single emitter and reflector** supplies the last comparison. There is no Capture or CSV export, so save a manual table and screenshots.

## Data

| Setup / material | Radius (mm) | Drive (Vpp) | Phase (degrees) | Tracked trap z (mm) | Fmax/W | Holds or falls / notes |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Add rows for each phase, drive and material. Record adjacent trap positions and pressure node positions in the notes where needed.

## Analysis

1. Calculate the mean near center spacing and compare with the plane wave prediction.
2. Plot displacement of the tracked trap against phase in radians. Find k_axis from the slope, then compare π/k_axis with your measured spacing.
3. Plot Fmax/W against drive voltage squared for each material. Use the graph to estimate the threshold where the ratio reaches 1, and compare with the observed hold/fall bracket.
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
