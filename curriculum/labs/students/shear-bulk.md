# Shear and Bulk Moduli
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §12.3. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/stress-strain.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Using the demo.**

- Choose the Shear or Bulk test at the top of the panel. A slider under the picture sets the force on the load cell; up and down arrows on the picture change it by 0.5 kN (Shift: 5 kN).
- Shear: a 5.00 cm cube is bonded between two steel plates. The base is held and the top plate is pushed sideways; a displacement sensor reads how far the top plate moves, to 0.1 µm.
- Bulk: a press pushes a piston into a sealed steel cell with a 4.00 cm bore. A liquid fills the cell 10.00 cm deep, and a dial gauge reads how far the piston moves, to 0.001 mm. A metal sample is a 2.000 cm cube sitting in oil inside the cell, with a strain gauge on one face that reads the change in its edge length per unit length, to 0.1 microstrain (µε, one part in a million).
- Capture stores the force and the reading; the fit in the panel is a straight line of force against the reading for the sample now loaded.
- Blind hides the moduli, the stress and strain readouts and the material line, leaving the load cell and the displacement or strain readings. The Mystery metal and the Mystery liquid keep their moduli hidden.

**What the demo models.**

- Linear elastic samples with the shear and bulk moduli of OpenStax Vol. 1, Table 12.1 (approximate values). The Mystery metal is the same alloy as in the tension test.
- The block shears uniformly; bending of the block and give in the plates are ignored. The cell's walls are rigid, and the pressure rise in the cell is the piston force over the piston area.
- In the model $$\Delta V/V_0 = -\Delta p/B$$ holds exactly. Real liquids stiffen a little as the pressure rises, which the model leaves out. Stresses stay at or below 20 MPa.

</details>

## Goal

Measure the shear modulus of a solid and the bulk modulus of liquids and a solid, and compare how hard it is to change a material's shape with how hard it is to change its volume.

## Background

Young's modulus describes stretching. Two more elastic moduli describe the other ways a material can be deformed (§12.3).

**Shear.** Forces of size $$F_\parallel$$ act along two opposite faces of a block of height $$L_0$$ and face area $$A$$, in opposite directions. The top face slides a distance $$\Delta x$$ relative to the bottom. The shear stress and shear strain are

$$\text{shear stress} = \frac{F_\parallel}{A},\qquad \text{shear strain} = \frac{\Delta x}{L_0},$$

and in the elastic range their ratio is the **shear modulus**

$$S = \frac{F_\parallel/A}{\Delta x/L_0} = \frac{F_\parallel}{A}\,\frac{L_0}{\Delta x}.$$

A sheared block changes shape (its square side becomes a parallelogram) but not its volume. A graph of $$F_\parallel$$ against $$\Delta x$$ is a straight line through the origin with slope $$SA/L_0$$, so $$S = \text{slope}\times L_0/A$$.

**Bulk.** When the pressure all around an object rises by $$\Delta p$$, its volume $$V_0$$ falls by $$\lvert\Delta V\rvert$$. The bulk strain is $$\Delta V/V_0$$ and the **bulk modulus** is

$$B = -\frac{\Delta p}{\Delta V/V_0}.$$

The minus sign makes $$B$$ positive, since a rise in pressure makes $$\Delta V$$ negative. Its reciprocal $$k = 1/B$$ is the compressibility. Liquids and gases have a bulk modulus but no shear modulus, because they flow instead of holding a sheared shape.

In the cell, a piston of area $$A$$ pushed with force $$F$$ raises the pressure by $$\Delta p = F/A$$. For a liquid filling the cell to depth $$h_0$$ under the piston, the liquid's volume is $$Ah_0$$, and when the piston moves in by $$\Delta x$$ the volume falls by $$A\,\Delta x$$, so

$$\frac{\Delta V}{V_0} = -\frac{\Delta x}{h_0},\qquad B = \frac{F/A}{\Delta x/h_0} = \text{slope}\times\frac{h_0}{A},$$

where the slope is that of $$F$$ against $$\Delta x$$. For a cube of edge $$a_0$$ that shrinks to $$a_0(1 + \varepsilon)$$, with $$\varepsilon = \Delta a/a_0$$ the strain gauge reading (negative when the cube shrinks),

$$\frac{\Delta V}{V_0} = (1 + \varepsilon)^3 - 1 \approx 3\varepsilon,$$

since $$\varepsilon$$ is a few parts in ten thousand at most here and the terms in $$\varepsilon^2$$ and $$\varepsilon^3$$ are smaller still. Then $$B \approx (F/A)/(-3\varepsilon)$$, and a graph of $$F$$ against $$-\varepsilon$$ has slope $$3AB$$.

**Apparatus constants.** Shear block: $$L_0 = 5.00$$ cm, top face area $$A = 25.00\ \text{cm}^2$$. Bulk cell: bore 4.00 cm, so piston area $$A = \pi(2.00\ \text{cm})^2 = 12.566\ \text{cm}^2$$; liquid depth $$h_0 = 10.00$$ cm; metal cube $$a_0 = 2.000$$ cm.

## Before the lab

1. A force of 30.0 kN acts along the top of the shear block. Find the shear stress in MPa. If the block is aluminum ($$S = 2.5\times10^{10}$$ Pa), how far does the top move, in micrometers?
2. Find the pressure rise in the cell when the press pushes the piston with 20.0 kN. By what fraction does water ($$B = 2.2\times10^{9}$$ Pa) shrink, and how far does the piston move?
3. At the same pressure, how does the strain gauge reading on a steel cube ($$B = 1.6\times10^{11}$$ Pa) compare with the piston's fractional travel for water? Predict the ratio before you measure.

## Safety

A real press stores energy in its frame and in the sample. Keep hands clear of the platens, use guards and stay below the rated load; in a pressure cell, pressurize only behind a shield and release slowly. Brittle samples such as glass or granite can crack suddenly. The simulation has no hazards.

## Procedure

Turn Blind on before you start, so the demo shows only the load cell and the displacement or strain reading. Use a fresh series for each sample: send it to the worksheet, then clear the readings before the next sample. Shear series go to the first data table and bulk series to the second.

**Part 1: shear.** In the Shear test, load an aluminum block from 0 to 50 kN in steps of 10 kN, recording the top plate's displacement at each force, then return to zero. Repeat with steel and with the Mystery metal.

**Part 2: bulk modulus of liquids.** In the Bulk test, fill the cell with water and raise the force from 0 to 24 kN in steps of 4 kN, recording the piston's travel. Repeat with acetone and with the Mystery liquid.

**Part 3: bulk modulus of a solid.** Put the steel cube in the cell and record the strain gauge reading at the same forces as in Part 2. Repeat with the Mystery metal cube.

When your fits are done and your moduli are recorded, turn Blind off and compare with the demo's values.

## Data

**Shear.** One copy of this table for each block. $$L_0 = 5.00$$ cm, $$A = 25.00\ \text{cm}^2$$.

| Reading | Block | $$F$$ (kN) | $$\Delta x$$ (µm) | Shear stress $$F/A$$ (MPa) | Shear strain $$\Delta x/L_0$$ (× 10⁻⁴) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

**Bulk.** One copy of this table for each liquid or cube. Piston area $$A = 12.566\ \text{cm}^2$$, $$h_0 = 10.00$$ cm, $$a_0 = 2.000$$ cm.

| Reading | Sample | $$F$$ (kN) | Piston $$\Delta x$$ (mm) | Strain gauge $$\varepsilon$$ (µε) | $$\Delta p = F/A$$ (MPa) | $$-\Delta V/V_0$$ (× 10⁻⁴) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |

For a liquid, $$-\Delta V/V_0 = \Delta x/h_0$$; for a cube, $$-\Delta V/V_0 = 1 - (1 + \varepsilon)^3$$.

## Analysis

1. For each block, fit $$F$$ against $$\Delta x$$ and find $$S = \text{slope}\times L_0/A$$, with its uncertainty from the slope's. Compare aluminum and steel with Table 12.1 of the textbook, and give the Mystery metal's shear modulus.
2. For each liquid, fit $$F$$ against $$\Delta x$$ and find $$B = \text{slope}\times h_0/A$$. Compare water and acetone with Table 12.1, and give the Mystery liquid's bulk modulus and its compressibility in 1/atm (1 atm = 101 325 Pa).
3. For each cube, fit $$F$$ against $$-\varepsilon$$ and find $$B = \text{slope}/(3A)$$ with $$\varepsilon$$ in plain numbers (1 µε = 10⁻⁶). Then, for the largest force, find $$B$$ from the exact $$\Delta V/V_0 = (1 + \varepsilon)^3 - 1$$ and show that the approximation $$3\varepsilon$$ changes $$B$$ by much less than your uncertainty.
4. Steel's Young's modulus is about $$2.0\times10^{11}$$ Pa. Put steel's $$Y$$, $$S$$ and $$B$$ in order. Which is easier for steel: changing its shape or changing its volume?
5. Compare water's bulk modulus with steel's. By what factor does the same pressure change water's volume more than steel's? Is it reasonable to treat water as incompressible in a hydraulic jack at a few megapascals?

## Uncertainty

The readings are exact model values rounded by the instruments: the load cell to 0.01 kN, the displacement sensor to 0.1 µm, the dial gauge to 0.001 mm and the strain gauge to 0.1 µε. The smallest readings (a stiff sample at a low force) have the largest relative rounding error, so judge which points limit your fit. The dimensions are exact in the model; on real apparatus the face area, the piston diameter and the column height each carry a measurement uncertainty, and the piston diameter enters the area squared. A real cell's walls also stretch a little under pressure, which a careful experiment corrects for with a sample of known modulus.

## Questions

1. Why does a sheared block keep its volume while a squeezed one does not?
2. Table 12.1 lists bulk moduli for liquids but no shear moduli. Why can't a liquid have a shear modulus?
3. A hydraulic system uses oil with $$B \approx 1.5\times10^{9}$$ Pa. Explain why air bubbles in the oil make the brake pedal feel spongy.
4. The deepest ocean pressure is about $$1.1\times10^{8}$$ Pa. Estimate the fractional change in the volume of water there, using the bulk modulus you measured. Why might the real change be a little smaller?
5. For an isotropic solid, $$Y$$, $$S$$ and $$B$$ are not independent: $$Y = 2S(1+\nu) = 3B(1-2\nu)$$, where $$\nu$$ is Poisson's ratio. The Mystery metal's Young's modulus from the tension test is $$1.1\times10^{11}$$ Pa. Use your $$S$$ to find $$\nu$$, then predict $$B$$ and compare with your Part 3 result.

## What to hand in

Answers to Before the lab, a copy of the shear table for each block and of the bulk table for each sample, the fits with residuals, the moduli with uncertainties and their comparison with Table 12.1, and answers to the questions. Identify simulated data.
