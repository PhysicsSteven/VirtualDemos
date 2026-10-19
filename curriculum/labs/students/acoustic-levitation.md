# Acoustic Levitation — Standing-Wave Traps and Force Scaling
Student laboratory · 90–110 minutes · acoustics for physics majors

[Open Acoustic Levitation](https://physicssteven.github.io/VirtualDemos/demos/acoustic-levitation.html)

## Objectives and prelab
Relate standing-wave phase to trap spacing and translation; test acoustic-force scaling with drive and bead size; explain gravitational sag and the small-sphere model. Prerequisites: wave phase, interference, forces from potentials and uncertainty. For a simpler course, supply the force scaling and omit the Gor'kov derivation, retaining measured thresholds, plots and interpretation.

For two counterpropagating plane waves derive pressure-node spacing λ/2 and shift Δz=Δφ/(2k). For converging bowls replace k with the effective axial phase gradient k_axis when comparing near-center nodes. Explain why a dense/stiff small sphere tends toward a pressure node and why gravity puts its stable position slightly below the acoustic minimum. With U_ac∝a³V_drive² and W∝a³, derive why Fmax/W is independent of radius within this model. Drive is peak to peak, not rms.

## Setup and data method
Use **Slice** or 3D, **Pressure |p|** and **Potential U** views, material/radius controls, phase and drive. **Hold a bead**, **Stack of beads**, **Move with phase**, **Water droplet**, **Too heavy: steel falls**, and **Single emitter and reflector** are the relevant presets. There is no Capture, CSV, seed or Blind here: record manual readouts, trap-table positions and screenshots with settings. Readout/model values are simulated predictions; do not call them independent force measurements. Do not measure ultrasonic frequency from the animation or audible surrogate.

Choose radius 0.30 mm for primary runs, check ka and the warning as radius increases. Keep the two-bowl geometry and phase fixed through the drive/material comparison. Use only near-center traps for local plane-wave estimates; label the trap or track its position continuously to avoid jumping to an adjacent trap.

## A. Spatial period and phase (25 minutes)
1. At 40 kHz and the stated air temperature calculate λ and the plane-wave spacing. With **Stack of beads**, record at least five adjacent near-center trap z values and their spacing. Distinguish pressure-node position from the gravity-shifted trap position using the table.
2. Choose **Move with phase**, stop **Sweep the phase**, and set phase manually through 0, 30, 60, 90 and 120°. Record the same continuously followed near-center trap; use the phase-zero position as reference. Fit Δz versus Δφ in radians and infer k_axis=1/(2·slope).
3. Compare local spacing π/k_axis with measured adjacent spacing and with λ/2. Discuss converging-wave geometry and why phase is periodic modulo 360° even though a continuously followed trap can move by one lattice spacing.

| Phase (degrees/rad) | Tracked trap z (mm) | Δz (mm) | Nearest pressure node (mm) | Drive/radius/material |
|---|---|---|---|---|
| | | | | |

## B. Drive, material and threshold (30 minutes)
At fixed phase and radius, use foam, water and steel. For each material record **Largest upward push Fmax**, buoyancy-corrected weight, ratioFmax/W and hold/fall behavior at four drives within the available 0–20 V range. Plot Fmax/W against V_drive² and test a zero intercept. Keep a manual settings table; do not estimate force from screen acceleration.

Find a bracket between the last failing and first holding drive by changing 0.1 V at a time and resetting/adding the bead as necessary. Compare the bracket with a threshold inferred from the ratio's V² law. Fmax>W is a necessary local force condition, not proof of an arbitrary trap's global stability; confirm a local minimum and observed holding. Repeat a safe small radius and a larger radius to test the modeled radius cancellation; mark any small-sphere warning and exclude that case from an accuracy claim.

| Material | Radius (mm) | Drive (Vpp) | Fmax (N) | W (N) | Fmax/W | Holds? | Threshold bracket |
|---|---|---|---|---|---|---|---|
| | | | | | | | |

## C. Gravity and geometry (25 minutes)
At 10 V compare foam and water **trap−node** near the center. For upward displacement z from a pressure node, a stable restoring model is F_ac≈−Fmax sin(2k_axis z); equilibrium with gravity gives z=−asin(W/Fmax)/(2k_axis). Evaluate it from the measured ratio and inferred k_axis, then compare with the table. Explain the sign and the loss of equilibrium as W/Fmax approaches 1.

Switch to **Single emitter and reflector**, find a foam threshold bracket, and compare spacing/threshold with the bowl array. Change the phase and explain whether relative standing-wave geometry moves. Optional: place the microphone at the center and sweep phase once while monitoring sound; the audible tone is a scaled-frequency pressure indicator, not 40 kHz audio or an absolute sound meter.

## Uncertainty, limitations and submission
Give position/readout bounds, finite phase increments and threshold brackets; vary the chosen center trap/window to assess local-wave approximation. Force readouts are computed from a specified potential, so a tight V² fit checks the implementation/model, not a calibrated real levitation force. The drive calibration is illustrative; omit claims that a physical array must lift a material at the same voltage.

Submit tables/plots, inferred axial wavenumber, threshold comparisons, sag calculation and a model-limit discussion. Gor'kov theory assumes a small sphere and linear inviscid acoustics; this demo omits acoustic streaming/heating, full bowl reflections and coupled bead interactions, constrains motion to the axis, and slows dynamics. Explain why extrapolating radius cancellation outside ka≪1 or treating simulated water droplets as perfectly rigid real spheres would be unjustified.
