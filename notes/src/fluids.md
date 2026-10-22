---
title: Fluids: Pressure, Buoyancy and Flow
level: Intro mechanics (fluids)
time: 20 to 35 minutes
---
## What students should come away with

- In a liquid at rest the pressure depends only on depth, P = P₀ + ρgh. It pushes equally in every direction, whatever the shape of the container.
- The buoyant force is the extra push on the bottom of an object compared with the top: F_B = ρ_f V_sub g, the weight of the liquid displaced. A floater sinks until F_B equals its weight, so V_sub/V = ρ_obj/ρ_fluid; a sunk object weighs less by F_B.
- In steady flow the same volume passes every section, A₁v₁ = A₂v₂, so a narrow throat runs fast. Bernoulli, P + ½ρv² + ρgy = constant, then says the fast flow has the lower pressure.
- Water leaving a hole a depth h below the surface moves at v = √(2gh), as fast as if it had fallen freely from the surface (Torricelli).

## Before class

Students should know pressure as force per area and the work–energy theorem. The **Scene** buttons pick **Depth**, **Shapes**, **Barometer**, **Buoyancy**, **Venturi** and **Torricelli**; each preset loads a scene, and the **Liquid** buttons switch the liquid. You can drag the probe, the block, the spring scale, the water surface, the pipe throat and the hole, or use the sliders. **Show pressure as** switches **Absolute** and **Gauge**. Turn on **Projector** for the room.

For a lab, the **Readings** section has **Capture reading**, **Export CSV** and **Clear**; Capture works in **Depth** (depth ruler and pressure gauge), **Buoyancy** with **Spring scale** on (depth ruler, spring scale, scale reading in air) and **Venturi** (inlet speed, flow meter, both standpipes). The **Lab** section has **Blind: hide predictions and answers**, **Graph shows** (**Model** or **Your readings**, a least squares line with a residual strip), **Reduce motion** and **Show data table**. If the Venturi settings would drive the throat below the vapor pressure, a banner says the model is invalid (cavitation) instead of showing the numbers.

## Running it in class

1. **Pressure grows with depth.** The probe at 1.20 m reads 113.09 kPa absolute, 1.116 atm. Drag it sideways: nothing changes. Switch to **Gauge** and to **Mercury**: the ρgh part is 13.6 times larger. Ask Q2.
2. **Shapes** (scene button). Ask Q1 before you say anything about the vessels. At a fill height of 0.32 m all four bases feel 3.14 kPa and 15.8 N, though the vessels hold from 1.00 L to 7.27 L.
3. **Floating and sinking.** The 10 cm pine cube settles half under; the level rises 3.33 mm. Try **Steel** or **Ice**, or slide **Block density ρ_obj** through 1000 kg/m³. Then switch the liquid to **Oil** and **Mercury** (Q3). Press **Iceberg** to see 89.5% of the ice under seawater.
4. **Weighing in water (Archimedes).** Drag the spring scale down to lower the aluminum cube into the full overflow can. The scale falls from 26.48 N to 16.67 N as 1000 cm³ of water, weighing 9.81 N, runs into the beaker (Q4). Ask Q5 while it is submerged.
5. **Venturi tube.** Halving the diameter makes the throat flow 4 times faster, 3.20 m/s, and the throat standpipe stands 48.9 cm lower than the inlet one (Q6). Drag the throat grip to widen it back.
6. **Torricelli's tank.** The hole 0.30 m below the surface sends water out at 2.43 m/s, landing 0.917 m from the wall. With **Compare holes** on, ask the class to predict which hole throws farthest, then drag the hole (Q7).

## Questions

**Q1.** Predict: four vessels with the same 8 cm base are filled with water to the same height. One is a straight tube, one flares out wide, one narrows toward the top, one slants. Which base feels the largest force from the water? Then open **Shapes** and check.

**Q2.** A diver is 10.0 m below the surface of the sea (ρ = 1025 kg/m³). Find the absolute pressure on the diver, and how many atmospheres that is (P₀ = 101.3 kPa). Check with **Seawater**, the **Liquid depth** slider at 10 m and the probe at the bottom.

**Q3.** A pine cube 10.0 cm on a side has density 500 kg/m³. How far below the surface is its bottom when it floats in water? In vegetable oil (920 kg/m³)? In mercury (13 595 kg/m³)? Check each with the **Liquid** buttons and the **Fraction under now** readout.

**Q4.** An aluminum cube 10.0 cm on a side (2700 kg/m³) hangs from a spring scale. Find the scale reading in air and when the cube is fully under water, and the volume and weight of the water that spills into the beaker. Check with **Weighing in water (Archimedes)**.

**Q5.** Explain why: use the pressure on the top and bottom faces of the submerged cube to derive F_B = ρ_f V g. Then explain why the scale reading in Q4 stops changing once the cube is fully submerged, even as you lower it further. (Ignore the spill and the change of level.)

**Q6.** In **Venturi tube**, water enters a 6.0 cm pipe at 0.80 m/s and passes through a 3.0 cm throat. Find the speed in the throat, the pressure difference P₁ − P₂, and the difference in height of the two standpipes.

**Q7.** In **Torricelli's tank** the water stands H = 1.00 m above the floor and the hole is h = 0.30 m below the surface. Find the exit speed and how far from the wall the jet lands. At what other hole depth would it land at the same spot? Explain why the hole halfway down throws farthest, and check with **Compare holes**.

## Common misconceptions

- **"The wide vessel holds more water, so it presses harder on its base."** The pressure at the base depends only on depth, and every base has the same area, so the force is the same. In the flared vessel the slanted walls hold up the extra water; in the narrowing one the walls push down on it.
- **"Heavy things sink and light things float."** Density decides it, not weight. A large steel ship floats because its hull displaces a lot of water; a small lead block sinks.
- **"The buoyant force grows the deeper an object goes."** Both the top and bottom pressures grow with depth, and their difference stays ρ_f g times the height. For an incompressible liquid, F_B is the same at every depth once the object is fully under.
- **"Faster moving fluid pushes harder."** In steady flow the faster fluid is at lower pressure. The pressure difference is what speeds it up as it enters the throat.

## Physics behind the demo

- Hydrostatics: constant density (incompressible), g = 9.80665 m/s², standard air pressure P₀ = 101.325 kPa on the surface. The depth scale is to size; the tank width is schematic.
- Shapes: round open vessels with an 8 cm base (50.3 cm²); the narrowing one ends 2.4 cm across, the flared one 34 cm; every slice of the slanted tube is the same circle. Barometer: vacuum above the column, h = P/(ρg).
- Buoyancy: a cube in a tank of floor area 0.15 m², so the level rises by V_sub/A. Vertical motion only, with linear drag on the wet block (damping ratio ζ) and no added mass, so real blocks bob a little more slowly. The scale is read with the block hanging still.
- Venturi: ideal flow (incompressible, inviscid, steady), uniform speed across each section, horizontal pipe; each standpipe shows the gauge pressure at the axis. A real pipe also loses pressure to friction.
- Torricelli: a small hole with rounded edges in a wide tank kept full by a supply, so v = √(2gh) and the jet does not contract. The jet falls H − h, giving R = 2√(h(H − h)). Air drag is neglected.

## Going further

- The **Barometer** scene: at 101.3 kPa a mercury column stands 760 mm and a water column over 10 m, which is why Torricelli used mercury.
- Homework: a floating block bobs with k = ρ_f g A_block (ignoring the level change). Show that a 10 cm pine cube in water bobs with a period of about 0.45 s, and compare with the demo.
