# Diffusion and Osmosis: Random Walks, Osmotic Pressure and Red Cells
Student worksheet · College Physics 2e

Textbook: OpenStax *College Physics 2e*, §12.7 (molecular transport phenomena: diffusion, osmosis, and related processes); the same section in *College Physics for AP Courses 2e*. Access for free at https://openstax.org/details/books/college-physics-2e.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/osmosis.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Used here:** the **Diffusion**, **Osmosis in a U tube** and **Red blood cell** modes, chosen in the bar above the picture. The Capillary mode is not used.

**Using the demo.**

- The bar above the picture holds **Play**, **Reset**, the pace (1/4 pace, Normal pace, 4 times the pace) and the four modes. Under each mode, **Setups** lists ready made experiments; the **Set up** card on the picture holds that mode's sliders. Click a slider and use the arrow keys to move it one step at a time.
- **Diffusion, From a thin line:** simulated molecules start on the center line and each takes its own random walk. The clock under the title says how much time has passed and how much one second on the screen stands for. The readout **Spread now, simulated x_rms** is the root mean square distance of the molecules from the line, worked out from the molecules themselves.
- **Osmosis in a U tube:** two arms of water joined at the bottom by a membrane that lets water through but not the solute. Each arm starts filled 30 cm above the membrane. The **Piston pushing on the right** slider (steps of 0.05 kPa) pushes down on the right arm. The readout **Water now flows** says which way water is crossing the membrane at this moment.
- **Red blood cell:** red cells under a microscope in salt water. The **Salt outside** slider (grams of NaCl per 100 mL, steps of 0.01) and the chips under it set the solution; Play lets the cells take up or lose water until they stop. The readouts give the outside concentration in mOsm/L, the cell's **Volume now** and, after Play, its **Fate**.
- **Record reading** (under Readings) stores the present state. **Export to worksheet** sends the readings to the Data tables below: spreading readings go to Table 1, U tube readings to Table 2 and red cell readings to Table 3. **Clear** starts a new series, which goes into a new copy of its table.
- In the Lab fold, **Blind: hide predictions and answers** hides the readouts that give away what you are measuring.

**What the demo models.** Diffusion: each molecule takes a random step at every short time step, which is exactly diffusion with the constant $$D$$ of Table 12.2 (20 °C, 1 atm); the molecules are simulated, so every run is a little different. U tube: van ’t Hoff's law for dilute, ideal solutions, with $$R$$ = 8.314 J/(mol·K), water taken as 1000 kg/m³ and $$g$$ = 9.81 m/s². Red cell: the cell gains or loses water until the particles inside and outside are equally concentrated; 40 % of its volume is hemoglobin and other solids that take no part (a model value), and its membrane keeps its area of 135 µm².

</details>

## Goal

Measure how fast molecules spread by diffusion and find the diffusion constant $$D$$, measure the osmotic pressure of sugar and salt solutions and find $$R$$ from it, and find how a red blood cell's volume depends on the salt around it.

## Background

**Diffusion is a random walk.** A molecule in a liquid is hit billions of times a second by its neighbors, so it moves in a zigzag with no preferred direction. Start many molecules on one line and they spread out on both sides. Their typical distance from the line along one direction, the root mean square distance $$x_\text{rms}$$, grows as the square root of the time (§12.7):

$$x_\text{rms} = \sqrt{2Dt}.$$

$$D$$, the diffusion constant, depends on the molecule and what it moves through (Table 12.2). Squaring both sides,

$$x_\text{rms}^2 = 2D\,t,$$

so a graph of $$x_\text{rms}^2$$ against $$t$$ is a straight line through the origin with slope $$2D$$. Going twice as far takes four times as long. That is why diffusion is fast across a cell (a few micrometers) and slow across a cup of tea.

**Osmosis.** A *semipermeable* membrane lets water through but holds back larger dissolved molecules (the solute). If pure water is on one side and a solution on the other, water crosses into the solution: water moves toward the side with more dissolved particles. This flow can be stopped by pushing on the solution. The pressure that just stops it is the **osmotic pressure** $$\Pi$$. For a dilute solution, van ’t Hoff found

$$\Pi = i\,c\,R\,T,$$

where $$c$$ is the concentration in moles per cubic meter (1 mmol/L = 1 mol/m³), $$T$$ is the temperature in kelvins, $$R$$ = 8.314 J/(mol·K) is the gas constant, and $$i$$ is the number of particles each unit of solute makes in water: $$i$$ = 1 for sugar, which stays whole, and $$i$$ = 2 for table salt, NaCl, which splits into Na⁺ and Cl⁻. Osmotic pressure counts particles, not mass. With solute on both sides, only the difference in concentration counts. Pushing on the solution harder than $$\Pi$$ drives water out of it, through the membrane: **reverse osmosis**, the way drinking water is made from seawater.

In a U tube with no piston, water crosses until the solution side stands higher than the water side. The extra height $$\Delta h$$ pushes back with a pressure $$\rho g \Delta h$$, and the flow stops when that equals the osmotic pressure.

**A red cell is an osmometer.** The particles inside a red blood cell cannot cross its membrane, but water can. Concentration is often given as *osmolarity*, the moles of dissolved particles per liter, in mOsm/L: 0.9 % saline (0.9 g of NaCl in 100 mL) has the same osmolarity as the inside of a red cell, and is called *isotonic*. In a weaker (hypotonic) solution water flows in and the cell swells; in a stronger (hypertonic) one water flows out and the cell shrinks. Water moves until the inside is as concentrated as the outside. Since the number of particles inside stays the same, the water part of the cell's volume is inversely proportional to the outside concentration $$c$$. The rest, the hemoglobin and other solids, keeps its volume $$V_s$$ whatever the solution:

$$V = V_s + \frac{k}{c},$$

where $$k$$ is a constant for the cell. This is the Boyle and van ’t Hoff relation, used in biology labs to find the solid volume of cells: a graph of $$V$$ against $$1/c$$ is a straight line whose intercept is $$V_s$$. A red cell's membrane hardly stretches, so the cell can swell only until it becomes a sphere with the same surface area. Beyond that it bursts (hemolysis).

## Before the lab

1. Glucose in water has $$D = 6.7\times10^{-10}$$ m²/s. Find $$x_\text{rms}$$ after 1 s, 4 s and 16 s, in micrometers. By what factor does the spread grow each time the time is multiplied by 4?
2. Find the osmotic pressure of 1.00 mmol/L sugar water ($$i$$ = 1) at 20 °C, in kPa, and the height of a column of water (1000 kg/m³) that would press with the same pressure.
3. Show that 0.9 % saline (0.9 g of NaCl, 58.44 g/mol, in 100 mL) is about 308 mOsm/L. (Find the moles of NaCl per liter, then count two particles for each.)
4. Predict: a red blood cell is dropped into pure water. What happens to it? Does it keep swelling like a balloon until it bursts, or does something else happen? Write your prediction and your reason before you open the demo. (You will check it in Part 3.)

## Safety

No hazards in the virtual lab. In a real lab, keep blood and cell samples away from your skin and wear gloves; saline and sugar solutions are safe.

## Procedure

The link at the top opens the demo in Diffusion mode. Open **Lab** (below the Readings) and tick **Blind: hide predictions and answers**, and leave it ticked for the whole worksheet. After each part press **Export to worksheet** and then **Clear** (both under Readings), so each part goes into its own table.

**Part 1: spreading from a line.**

1. Under Setups press **Glucose spreads in water**. Leave the pace at Normal pace. Read the **Diffusion constant D** from the readouts and write it in the notes under Table 1.
2. Press **Play**. About every 4 s on the screen, press **Pause** (the same button), then **Record reading**, then **Play** again. Keep going until the run stops by itself (the spread has nearly filled the view): that gives 6 or 7 readings. Each reading stores the time $$t$$ and the simulated $$x_\text{rms}$$.
3. Press **Export to worksheet**, then **Clear**. The readings fill the first four columns of Table 1. Fill in the last column, $$x_\text{rms}^2$$, yourself.
4. Press **Hemoglobin: big and slow** under Setups and repeat steps 1 to 3. These readings go to a second copy of Table 1.

**Part 2: osmotic pressure.** Switch modes to **Osmosis in a U tube**. Press **Sugar water against pure water** under Setups: pure water on the left, 1.00 mmol/L sugar water on the right, at 20 °C.

1. Watch first. Press **Play** and watch which way the water moves and where the levels stop. When the run stops, read **Height difference now Δh** and write it in your answer to Analysis 4. Press **Reset**: the levels go back to equal.
2. Now find the osmotic pressure by pushing back. Leave the levels equal (do not press Play). Set **Right side concentration** to 0.50 mmol/L. Then raise **Piston pushing on the right** from 0, a step at a time with the arrow keys near the end, and watch **Water now flows**. It reads "left to right" while the piston is too weak. Stop at the first setting where it reads "right to left (reverse osmosis)" and press **Record reading**.
3. Repeat step 2 at 1.00, 1.50 and 2.00 mmol/L. Changing the concentration sets the levels equal again; the piston stays where it was, so raise it from there to the first setting where the flow turns.
4. Press **Export to worksheet**, then **Clear**: these four readings fill Table 2.
5. Under **Solute** choose **Salt (NaCl), i = 2**, move the piston back to 0, and repeat steps 2 and 3 at 0.50, 1.00 and 1.50 mmol/L. Export to worksheet and Clear: these go to a second copy of Table 2.

**Part 3: a red cell in salt water.** Switch modes to **Red blood cell**.

1. Check your prediction. Press **A red cell in pure water** under Setups and press **Play**. Watch the cell, then read **Volume now**, **Largest volume (a sphere of its area)** and **Fate**. Write what happened in Questions 3.
2. Now take readings. Set **Salt outside** to 0.60 % (drag the slider near, then use the arrow keys), press **Play**, and wait until the cell stops changing and the button reads Play again. Press **Record reading**.
3. Repeat step 2 at 0.75 %, 0.90 %, 1.20 %, 2.00 % and 3.00 % (the 0.9 % and 3 % chips set those two exactly).
4. Press **Export to worksheet**. The six readings fill Table 3. Fill in the last column, $$1000/c_\text{out}$$, yourself: with $$c_\text{out}$$ in mOsm/L, it is $$1/c_\text{out}$$ in liters per osmole.

## Data

**Table 1: spreading from a line.** Graph $$x_\text{rms}^2$$ (vertical) against $$t$$ (horizontal), one graph for each molecule.

| Reading | Molecule | $$t$$ (s) | $$x_\text{rms}$$ (µm) | $$x_\text{rms}^2$$ (µm²) |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |

**Table 2: the piston that turns the flow around.** Graph $$P$$ (vertical) against $$c$$ (horizontal), one graph for each solute.

| Reading | Solute | $$i$$ | Right side concentration $$c$$ (mmol/L) | Temperature (°C) | Piston where the flow turns, $$P$$ (kPa) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

**Table 3: a red cell in salt water.** Graph $$V$$ (vertical) against $$1000/c_\text{out}$$ (horizontal).

| Reading | Salt outside (% NaCl) | $$c_\text{out}$$ (mOsm/L) | Volume $$V$$ (µm³) | Fate | $$1000/c_\text{out}$$ (L/Osm) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. For each molecule, fit a straight line to $$x_\text{rms}^2$$ against $$t$$. The slope is $$2D$$ in µm²/s. Find $$D$$ in m²/s (1 µm² = 10⁻¹² m²) and compare it with the value the demo uses (the Diffusion constant D readout, in your notes): by what percentage do they differ? Is the intercept close to zero compared with your largest $$x_\text{rms}^2$$?
2. How many times larger is $$D$$ for glucose than for hemoglobin, from your two slopes? Hemoglobin molecules are much bigger than glucose molecules. Why would a bigger molecule spread more slowly?
3. For each solute, fit a straight line to $$P$$ against $$c$$. Van ’t Hoff's law says $$P = i R T\,c$$, so the slope is $$iRT$$ in kPa per mmol/L. Find $$R$$ from the sugar slope (with $$T$$ in kelvins, and 1 kPa per mmol/L = 1000 J/mol) and compare it with 8.314 J/(mol·K). Then find $$i$$ for salt: divide the salt slope by the sugar slope.
4. In Part 2 step 1 the levels stopped at a height difference $$\Delta h$$ (your reading). Find the pressure $$\rho g\Delta h$$, and compare it with the osmotic pressure of 1.00 mmol/L sugar water from your Before the lab 2. They differ: the water that crossed diluted the sugar. The right arm, filled 30 cm above the membrane, rose by $$\Delta h/2$$, so its concentration fell to $$c' = (1.00\ \text{mmol/L}) \times 30/(30 + \Delta h/2)$$ with $$\Delta h$$ in cm. Find $$c'$$ and $$RTc'$$. Does it match $$\rho g\Delta h$$?
5. Fit a straight line to $$V$$ against $$1000/c_\text{out}$$ in Table 3. What is the intercept, $$V_s$$? What fraction of the cell's normal volume (its volume in 0.9 % saline) is that?
6. In pure water the cell can swell only to the sphere its area allows (your reading in Part 3 step 1). Use your line to find the outside concentration at which the cell's volume reaches that sphere, in mOsm/L, and the saline strength that gives it: % NaCl = $$c_\text{out} \times 58.44 / 20{,}000$$. Then press the **0.45%** chip and Play: does the cell burst, as your answer says it should?

## Uncertainty

The molecules in Part 1 are simulated, 1600 of them, so $$x_\text{rms}^2$$ scatters by a few percent about $$2Dt$$; your readings also share the same molecules, so they scatter together. From the standard error of your slope, how well does your $$D$$ agree with the demo's value? In Part 2 each piston reading is up to one step (0.05 kPa) above the true osmotic pressure. Explain why that moves the intercept of your line but hardly changes its slope.

## Questions

1. From your $$D$$ for glucose, how long does it take glucose to spread 1 cm by diffusion alone? Give the answer in hours. Why do we stir sugar into tea?
2. In Part 2, which way did water move when the right side held sugar water: toward the side with more dissolved particles or fewer? Did the sugar move? Why does 1.00 mmol/L salt need a stronger push than 1.00 mmol/L sugar?
3. Your prediction (Before the lab 4) against what you saw in Part 3 step 1: what was the cell's volume when it burst, and why could it not swell further? Explain with the membrane's area and the largest volume that area can hold.
4. Intravenous drips use 0.9 % saline. Using your Table 3, explain what would happen to red cells if a drip were pure water, and what if it were 3 % saline.

## What to hand in

Your answers to Before the lab, the three Data tables with their graphs and fits, your answers to Analysis, Uncertainty and Questions. Say that your data came from the simulated apparatus.
