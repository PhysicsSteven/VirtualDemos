# Pressure, Buoyancy and Flow
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§14.1–14.6. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/fluids.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Pressure grows with depth; Floating and sinking; Iceberg; Weighing in water (Archimedes); Mystery blocks: name the metal; Venturi tube; Torricelli's tank.

**Using the demo.**

- Pressure: drag the probe up and down, or set the depth exactly on the Set up card, and read the depth ruler and the pressure gauge. Gauge and Absolute switch what the gauge shows.
- Buoyancy: drag the block anywhere and let go; drag the grip on its corner to resize it. With the spring scale on, drag the scale up and down to lower the block into the liquid, and wait for the reading to settle.
- Flow: drag the grip on the throat wall to narrow or widen it, the grip on the inlet wall for $$D_1$$, the round grip on the arrow for the inlet speed and the first standpipe's level for the inlet pressure.
- Mystery blocks: five lettered metal cubes whose size and density are hidden. Weigh one on the spring scale, lower it into the full overflow can and read the water caught in the beaker (to 1 cm³).
- Two liquids (in the Barometer scene): pour a lighter liquid into one arm of a U tube of water or mercury and read the heights of both liquids above the interface. The mystery oil's density is hidden.
- Capture reading stores the current readings; Export to worksheet sends them here. Blind hides the model graph, the formula line, the force arrows, the computed pressures and $$\Delta h$$ and the worked numbers in the hints; the instruments stay.

**What the demo models.**

- $$g = 9.81\ \text{m/s}^2$$ and standard air pressure $$P_0 = 101.325\ \text{kPa}$$ on every free surface. Liquids: water 1000, oil 920, seawater 1025 and mercury 13 595 kg/m³, all incompressible.
- Pressure: a liquid at rest, $$P = P_0 + \rho g d$$; the gauge reads to 10 Pa.
- Buoyancy: a cube in a tank 50 cm by 30 cm, pushed up by $$\rho_f V_{\rm sub} g$$, with a small linear drag so it settles; the spring scale reads the string tension.
- Flow: ideal flow (incompressible, inviscid, steady, uniform across each section) in a horizontal pipe; each open standpipe shows the gauge pressure at the pipe axis. If the throat pressure would fall below the liquid's vapor pressure (2339 Pa for water) the demo flags cavitation and the ideal result no longer describes a real flow.

</details>

## Goal

Infer liquid density from pressure, test Archimedes' principle and compare continuity with Bernoulli's equation.

## Background

At depth $$d$$ in a liquid of density $$\rho$$ (§14.1), the absolute pressure is the atmospheric pressure $$P_0$$ plus the gauge pressure $$\rho gd$$:

$$P=P_0+\rho gd.$$

The buoyant force equals the weight of displaced liquid, of density $$\rho_f$$ and volume $$V_{sub}$$, the submerged volume (§14.4):

$$F_B=\rho_f gV_{sub}.$$

For steady incompressible flow (§§14.5–14.6),

$$\begin{gathered} A_1v_1=A_2v_2, \\[4pt] P+\frac12\rho v^2+\rho gy=\text{constant}. \end{gathered}$$

A horizontal constriction trades pressure for flow speed when energy losses are negligible.

## Before the lab

1. What are the slope and intercept of gauge pressure against depth?
2. How can a spring scale reading determine buoyant force?
3. If a pipe's diameter halves at fixed flow rate, by what factor does its speed change?

## Safety

Keep water away from electrical equipment. Secure real pressure tubing and hanging masses, use a spill tray, and do not handle mercury without an approved laboratory procedure.

## Procedure

**Pressure.** Record gauge pressure at five depths in one liquid, then repeat in a second liquid. Also compare absolute and gauge pressure at one depth.

**Buoyancy.** Measure the weight of a fully submerged supported block at several volumes, or immerse one block in several liquids. Record its weight in air and apparent weight in the liquid. Exclude contact with the bottom.

**Flow.** Use a horizontal Venturi tube. Hold inlet diameter and inlet speed fixed; vary throat diameter through at least five settings. Record the two diameters, flow rate and pressure head readings. Avoid settings where cavitation or an empty standpipe prevents the required pressure measurement.

**Using the virtual apparatus.** Work with predictions and answers hidden; the instruments stay visible. For pressure, read the depth ruler and the gauge at each depth, and read both gauge and absolute pressure at one depth. For buoyancy, weigh the block on the spring scale in air and then fully under the liquid, and wait for the reading to settle before you record it. For flow, keep the pipe diameter $$D_1$$ and the inlet speed $$v_1$$ fixed while you change the throat diameter $$D_2$$, and read the flow meter and both standpipes. Send each investigation to the worksheet when you finish it, then clear the readings, so each one gets its own copy of the Data table.

**Density by displacement.** Use the mystery blocks as the demo opens them (a new set changes every block). For each of the five blocks, record its weight in air, then lower it until it is completely under the water in the full overflow can, let the reading settle, and record the scale reading and the water caught in the beaker. Send the five readings to the worksheet; they go to Table 2.

**Two liquids.** In a U tube of water, pour the mystery oil into one arm. For five depths of oil from about 5 cm to 25 cm, record the height of the oil and the height of the water, both measured from the interface between them. Record these in Table 3 by hand. The demo deals a new mystery oil each time the page opens, so finish this part in one sitting.

## Data

| Investigation/liquid | Depth $$h$$ (m) or diameters $$D_1, D_2$$ (m) | Pressure (Pa) or head $$h_1, h_2$$ (m) | Block volume (m³) | Air weight (N) | Scale reading (N) | $$Q$$ (m³/s) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Keep a separate copy for each part and label unused columns. Convert kPa, cm and L/s to SI before calculating.

**Table 2: density by displacement.**

| Block | Weight in air $$W$$ (N) | Scale reading in water $$T$$ (N) | Water caught $$V$$ (m³) | $$\rho = W/(gV)$$ (kg/m³) | Material | $$W - T$$ (N) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

**Table 3: two liquids in a U tube of water.**

| Reading | Poured liquid | Height above the interface $$h_1$$ (cm) | Water above the interface $$h_2$$ (cm) |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

## Analysis

1. Fit gauge pressure against depth and infer $$\rho$$ from $$\text{slope}/g$$.
2. Calculate $$F_B = W_\text{air} - T$$. Compare with displaced liquid weight and, for a floating block, the displaced fraction with $$\rho_\text{block}/\rho_\text{liquid}$$.
3. Infer $$v_1$$ and $$v_2$$ from $$Q/A$$. Calculate the pressure difference from Bernoulli and compare with $$\rho g(h_1 - h_2)$$.
4. Explain which assumptions would fail for viscous flow, strong turbulence or cavitation.
5. For each block in Table 2, find $$\rho = W/(gV)$$ and name the metal from the densities 1738 (magnesium), 2700 (aluminum), 4506 (titanium), 7140 (zinc), 7874 (iron), 8960 (copper), 10 490 (silver), 11 340 (lead) and 19 300 kg/m³ (gold). Then compare $$W - T$$ with the weight of the water caught, $$\rho_w g V$$.
6. Plot $$h_2$$ against $$h_1$$ from Table 3 and fit a line. From $$\rho_1 h_1 = \rho_w h_2$$ at the level of the interface, find the oil's density $$\rho_1$$ from the slope.

## Uncertainty

Propagate depth, diameter and scale resolution. Areas depend on diameter squared, and the dynamic pressure term depends on speed squared. Small differences between large pressure heads can be poorly resolved. Distinguish measurement resolution from the ideal model's omission of viscous losses. Do not treat a cavitation warning as another ordinary steady flow data point. The beaker reads to 1 cm³ and the scale to 0.01 N, so the smallest block has the largest fractional uncertainty in its density; the U tube heights read to 0.01 cm.

## Questions

1. Why does hydrostatic pressure depend on depth rather than vessel shape?
2. Why does a submerged block feel lighter without losing mass?
3. Why does faster flow through a horizontal throat have lower static pressure in this model?
4. Does a higher absolute pressure necessarily mean a larger pressure difference driving flow?
5. Two blocks of the same metal but different sizes are weighed this way. Which of W, V and ρ differ between them?

## What to hand in

Prelab answers, raw data/CSV, density fit, buoyancy and Venturi calculations, the five metals and the oil's density, uncertainty and answers to the questions. Identify simulated data.
