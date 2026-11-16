# Pressure, Buoyancy and Flow
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§14.1–14.6. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/fluids.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Pressure grows with depth; Floating and sinking; Iceberg; Weighing in water (Archimedes); Mystery blocks: name the metal; Venturi tube; Torricelli's tank.

**Using the demo.**

- Pressure: drag the probe up and down, or set it exactly with the Probe depth slider on the Tank and probe card, and read the depth ruler and the pressure gauge. Gauge and Absolute switch what the gauge shows.
- Buoyancy: drag the block anywhere and let go; drag the grip on its corner to resize it. With the spring scale on, drag the scale up and down to lower the block into the liquid, and wait for the reading to settle.
- Flow: drag the grip on the throat wall to narrow or widen it, the grip on the inlet wall for $$D_1$$, the round grip on the arrow for the inlet speed and the first standpipe's level for the inlet pressure.
- Mystery blocks: five lettered metal cubes whose size and density are hidden. Weigh one on the spring scale, lower it into the full overflow can and read the water caught in the beaker (to 1 cm³).
- Two liquids (in the Barometer scene): pour a lighter liquid into one arm of a U tube of water or mercury and read the heights of both liquids above the interface. The mystery oil's density is hidden.
- Record reading stores the current readings; Export to worksheet sends them here. Blind hides the model graph, the formula line, the force arrows, the computed pressures and $$\Delta h$$ and the worked numbers in the hints; the instruments stay.

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
4. Water flows along a horizontal pipe into a narrow throat, where it moves faster. Is the pressure in the throat higher than, lower than or the same as in the wide part of the pipe?

## Safety

Keep water away from electrical equipment. Secure real pressure tubing and hanging masses, use a spill tray, and do not handle mercury without an approved laboratory procedure.

## Procedure

**Pressure.** Press the **Pressure grows with depth** setup, press **Gauge** so the gauge shows gauge pressure, and pick **Water** under Liquid. Set the probe with the **Probe depth** slider (drag close, then arrow keys, 0.01 m a press) and press **Record reading** under Readings at five depths spread over the liquid (for example 0.20, 0.60, 1.00, 1.40 and 1.80 m). Also compare absolute and gauge pressure at one depth: read the gauge after pressing **Absolute**, then **Gauge**.

**Flow.** Press the **Venturi tube** setup (a horizontal pipe). Hold **Pipe diameter D₁** and **Inlet speed v₁** fixed; set the **Throat diameter D₂** slider to at least five settings. At each, press **Record reading**: it stores the two diameters, the flow meter $$Q$$ and both standpipe heads $$h_1$$ and $$h_2$$. If the demo says No reading, widen the throat. Avoid settings where cavitation or an empty standpipe prevents the required pressure measurement.

**Using the virtual apparatus.** Tick **Blind: hide predictions and answers** (in the Lab fold); the instruments stay visible. For pressure, read the depth ruler and the gauge at each depth, and read both gauge and absolute pressure at one depth. For flow, keep the pipe diameter $$D_1$$ and the inlet speed $$v_1$$ fixed while you change the throat diameter $$D_2$$, and read the flow meter and both standpipes. Press **Export to worksheet** when you finish each investigation, then **Clear**, so each one gets its own copy of the Data table.

**Density by displacement.** Press the **Mystery blocks: name the metal** setup and use the blocks as it opens them (**New mystery set** changes every block). Tick **Spring scale** and **Overflow can**. For each of the blocks A to E (pick it with its letter button), drag the scale down until the block is completely under the water in the full overflow can, let the reading settle, and press **Record reading**: the row stores its weight in air, the scale reading and the water caught in the beaker. Export the five readings; they go to Table 2.

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

## Analysis

1. Fit gauge pressure against depth and infer $$\rho$$ from $$\text{slope}/g$$.
2. Infer $$v_1$$ and $$v_2$$ from $$Q/A$$. Calculate the pressure difference from Bernoulli and compare with $$\rho g(h_1 - h_2)$$.
3. Explain which assumptions would fail for viscous flow, strong turbulence or cavitation.
4. For each block in Table 2, find $$\rho = W/(gV)$$ and name the metal from the densities 1738 (magnesium), 2700 (aluminum), 4506 (titanium), 7140 (zinc), 7874 (iron), 8960 (copper), 10,490 (silver), 11,340 (lead) and 19,300 kg/m³ (gold). Then compare $$W - T$$ with the weight of the water caught, $$\rho_w g V$$.

## Uncertainty

Propagate depth, diameter and scale resolution. Areas depend on diameter squared, and the dynamic pressure term depends on speed squared. Small differences between large pressure heads can be poorly resolved. Distinguish measurement resolution from the ideal model's omission of viscous losses. Do not treat a cavitation warning as another ordinary steady flow data point. The beaker reads to 1 cm³ and the scale to 0.01 N, so the smallest block has the largest fractional uncertainty in its density.

## Questions

1. From your Flow readings, give the standpipe heads $$h_1$$ (wide part) and $$h_2$$ (throat) for your widest and narrowest throats. Which way did the pressure change in the throat, and is that what you expected in Before the lab 4? Use Bernoulli's equation, and Newton's second law for the water as it enters the throat, to explain it. Does a higher absolute pressure necessarily mean a larger pressure difference driving flow?

## What to hand in

Prelab answers, raw data/CSV, density fit, the Venturi calculations, the five metals, uncertainty and answers to the questions. Identify simulated data.
