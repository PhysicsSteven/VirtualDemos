---
title: Diffusion and Osmosis
level: Algebra based intro physics (OpenStax College Physics 2e 12.7, also the AP edition); life science majors
time: 15 to 35 minutes
---
## What students should come away with

- Diffusion is many random walks. The spread grows as the square root of time, x_rms = √(2Dt), so going twice as far takes four times as long. Over a cell it is fast; over a centimeter it is slow.
- The diffusion constant D depends on the molecule and the medium: oxygen in air diffuses about 27,000 times faster than glucose in water, and a big protein like hemoglobin about ten times slower than glucose.
- Through a layer of thickness L, the flow levels off at J = DΔC/L: half as thick, twice the flow and a quarter of the time to cross.
- Osmosis: water crosses a membrane that holds back the solute, toward the side with more dissolved particles. The osmotic pressure of a dilute solution is Π = iMRT (van 't Hoff), counting particles, not mass: salt (i = 2) pushes twice as hard as sugar at the same molarity.
- Water flows until a pressure balances Π: a column of liquid in a U tube, the stiff membrane of a red cell (which bursts if it cannot), or the blood pressure in a capillary. Pushing harder than Π drives water the other way: reverse osmosis.

## Before class

Nothing to install. Four modes, chosen above the picture: **Diffusion** (From a thin line or Through a layer; the Molecule and medium from Table 12.2; the Width of the view), **Osmosis in a U tube** (the Solute, Right side concentration, Left side concentration, Temperature and the Piston pushing on the right), **Red blood cell** (Salt outside, grams per 100 mL) and **Capillary** (the blood pressures at the arterial and venous ends, the plasma protein pressure and the tissue fluid's pressures). Pace runs at 1/4, normal or 4 times. The molecules in Diffusion are a simulated random walk, labeled so; the curve beside them is the exact solution. Blind, in the Lab fold, hides predictions. Diffusion constants are those of OpenStax College Physics 2e Table 12.2.

## Running it in class

1. **Glucose spreads in water.** The opening setup. Press Play and watch the spread: the readouts give the simulated x_rms beside √(2Dt). Ask Q1.
2. **Oxygen in air: 27,000 times faster**, then **Hemoglobin: big and slow** (Q2).
3. **Oxygen through the tear layer**, then **Half as thick, a quarter of the time** (Q3).
4. Switch modes to **Osmosis in a U tube.** **Sugar water against pure water**: ask which way water moves before pressing Play, then Q4. **Salt: twice the particles** and **Solute on both sides**.
5. **Reverse osmosis: push harder** (Q5).
6. Switch modes to **Red blood cell.** **A red cell in pure water**: ask for a prediction, then **Half strength saline**, **Isotonic saline** and **Hypertonic saline** (Q6).
7. Switch modes to **Capillary.** **A capillary (OpenStax values)**, then **Too little plasma protein: edema**, **Heart failure: high venous pressure** and **After bleeding: low pressure** (Q7).

## Questions

**Q1.** Glucose in water has D = 6.7 × 10⁻¹⁰ m²/s. How far does a glucose molecule typically get in 1 s (x_rms)? How long does it take to spread 1 cm, and 2 cm? Why does doubling the distance take four times as long, and why do we stir sugar into tea?

**Q2.** Oxygen in air has D = 1.8 × 10⁻⁵ m²/s. How many times faster than glucose in water is that? How long would oxygen take to spread 1 m by diffusion alone? Why does a smell cross a room in seconds anyway? Hemoglobin in water has D = 6.9 × 10⁻¹¹ m²/s: why is it slower than glucose?

**Q3.** The cornea gets oxygen by diffusion through the tear layer, 0.500 mm thick (oxygen in water, D = 1.0 × 10⁻⁹ m²/s). Find the typical time to cross, x²/(2D), and the lag time L²/(6D) after which the flow through levels off. What happens to both and to the steady flow J = DC/L when the layer is half as thick?

**Q4.** Pure water is on the left and 1.00 mmol/L sugar water is on the right, at 20 °C. Find the osmotic pressure Π = MRT and the height of a column of water (1000 kg/m³) it could hold. Press Play: the levels stop at a smaller height difference. Why? With salt (i = 2) at the same molarity, what changes?

**Q5.** A piston pushes on the sugar water of Q4 with 4.00 kPa. Which way does water cross the membrane now, and what is the least piston pressure that stops water entering the sugar side at the start? Where is this used?

**Q6.** The inside of a red cell is isotonic with 0.9% saline. Using NaCl at 58.44 g/mol and i = 2, find the osmolarity of 0.9% saline in mOsm/L. The cell's area is 135 μm² and its volume 94 μm³, and its membrane hardly stretches: what is the largest volume it can reach? With 40% of its volume taking no part, find the volume it heads for in 0.45% and in 3% saline. Which one bursts?

**Q7.** In the OpenStax capillary the blood pressure is 35 mm Hg at the arterial end and 18 mm Hg at the venous end, and the plasma proteins pull with 25 mm Hg all along (tissue pressures zero). Find the net filtration at each end, the place along the capillary where there is no net flow, and the average over the length. What happens when the plasma protein pressure falls to 12 mm Hg?

## Common misconceptions

- **"Molecules diffuse at a steady speed."** Each one moves fast but changes direction at every collision: the spread grows as √t, not t, so a speed in meters per second means nothing for diffusion.
- **"Diffusion stops at equilibrium."** The molecules keep moving; only the net flow stops, because as many cross each way.
- **"In osmosis the solute moves."** The membrane holds the solute back; the water moves, from fewer dissolved particles to more.
- **"Osmotic pressure depends on the mass dissolved."** It counts particles: 1 mmol/L of salt gives two particles per unit and pushes about twice as hard as 1 mmol/L of sugar, whatever their masses.
- **"Cells in pure water swell like balloons."** A red cell's membrane barely stretches; it rounds up into a sphere of the same area and then bursts.
- **"Fluid in tissues is pumped out by the heart only."** The blood pressure pushes fluid out, and the plasma proteins draw it back; the balance of the two (Starling) decides, end by end.

## Physics behind the demo

Diffusion: each simulated molecule takes a random step along x at each short time Δt, drawn from a bell curve of width √(2DΔt), which is exactly diffusion with constant D (Table 12.2, at 20 °C and 1 atm). The spread then grows as x_rms = √(2Dt). In the layer, one side is held at concentration C and the other removes what arrives; the amount through is compared with Fick's law solved for a layer that starts empty (Crank, The Mathematics of Diffusion, eq. 4.24a), which settles to J = DC/L after the lag time L²/(6D). The molecules are spread up and down only to be seen.

U tube: van 't Hoff's law for dilute, ideal solutions, Π = iMRT, with R = 8.314 J/(mol K) from constants.js and the temperature in kelvins. Each arm starts 30 cm deep above the membrane; as water crosses, the right side is diluted and the left concentrated, and the flow stops when the osmotic pressure difference equals ρgΔh plus the piston's pressure. Real salt water gives a few percent less than i = 2. How fast water crosses depends on the membrane and is not modeled.

Red cell: an osmometer (Boyle and van 't Hoff), V/V₀ = b + (1 − b)c₀/c, with b = 0.4 a model value for the share taken by hemoglobin and other solids (measured values are near 0.3 to 0.45), area 135 μm² and volume 94 μm³ (Evans and Fung 1972). It bursts beyond the sphere of its area, A^1.5/(6√π) = 147 μm³, which happens below 158 mOsm/L outside. Salt is taken to stay outside; the shapes are drawn from the volume.

Capillary: Starling's balance, net filtration = (blood pressure − tissue fluid pressure) − (plasma protein pressure − tissue protein pressure), with the blood pressure falling in a straight line along the capillary. Values from OpenStax Anatomy and Physiology 2e 20.3 and Guyton and Hall, Textbook of Medical Physiology, ch. 16. 1 mm Hg = 133.322 Pa.

## Going further

- **Guyton's values** include the tissue fluid's own pressure and proteins: more leaves than returns. Where does the rest go?
- In the U tube, try Calcium chloride, i = 3. Raise the temperature: Π grows as T, in kelvins.
- Why does an intravenous drip use 0.9% saline and not pure water? What would 3% saline do to the cells?
- Set salt on the right at 1.00 mmol/L and find the least Piston pushing on the right that stops water crossing into it. Compare it with iMRT.
