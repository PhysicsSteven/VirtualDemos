---
title: Millikan Oil Drop
level: Intro E&M and Modern Physics (algebra based)
time: 25 to 45 minutes
---
## What students should come away with

- A tiny drop falling through air reaches a steady (terminal) speed almost at once, where air drag balances its weight less the buoyancy. Measuring that speed gives the drop's radius, because drag grows as r and weight as r³.
- With the plates on, the electric force qE joins in. Timing the same drop with the field on as well as off gives its charge without knowing its mass in advance.
- Every charge measured is a whole number times one smallest charge, e = 1.602 × 10⁻¹⁹ C. When a drop picks up an ion its charge jumps by exactly ±e.
- Real measurements scatter: Brownian motion jiggles the smallest drops and reaction time spoils hand timing. Timing each drop several times and averaging is part of the experiment.
- Stokes's law alone is not quite right for drops this small: the air is not a smooth fluid on the scale of the mean free path (about 67 nm), so drops slip and fall faster. The correction matters more in thin air.

## Before class

Students should know the forces on a falling object with drag, E = V/d between parallel plates and F = qE (OpenStax Vol 2 §5.1, §7.5). The bar above the picture starts the run, sprays drops in, switches the plates (off, top plate + or top plate −), turns on the ionizing source and sets the speed (×1, ×4, ×16 of real time). On the left is the apparatus, on the right the view through the telescope with lines every 0.5 mm, and below it a dot plot of the charges worked out so far. Tap a drop (or press **Follow next drop**, or N) to follow it. The Set up card sets the plate voltage, the timing distance and the air; **Time the followed drop between the two orange lines** times it exactly, or students can use the stopwatch in **Timing**. **Record the time** puts the last time in the drop's row of the **Readings** table, which works out v_f, v_E, r and q; **Record: held still at this V** is the balancing method. **Blind** in **Lab** hides r, q and the lines at whole numbers of e.

## Running it in class

1. **Time a drop falling.** Before starting, ask which drops will fall fastest (Q1). Time the followed drop two or three times with the plates off.
2. Work out its radius by hand from the fall speed and compare with the table (Q2).
3. **Make a drop rise.** Ask which way each drop will go when the top plate is made + (Q3); time the followed drop rising and read its charge.
4. **Hold a drop still.** Turn the voltage until the drop hovers and record it (Q4).
5. **Change a drop's charge.** Time the drop with the plates on, wait for it to pick up an ion, start a new row and time it again (Q5).
6. **Many drops: charges in steps.** Pool the class's charges in the dot plot (Q6).
7. **Thin air: drag slips.** Compare the charges with and without the slip correction (Q7).
8. **A tiny drop jiggles.** Time it five times over 0.5 mm and look at the spread (Q8).

## Questions

**Q1.** With the plates off, two drops of the same oil fall side by side, one with twice the radius of the other. Which falls faster, and by roughly how much? Check with the readings: what fall speeds would drops of radius 0.5 µm and 1.0 µm have at 23 °C?

**Q2.** A drop takes 23.4 s to fall 1.00 mm with the plates off. Find its radius from Stokes's law (η = 1.828 × 10⁻⁵ Pa·s, ρ_oil − ρ_air = 885 kg/m³), then correct it for slip with C = 1 + (λ/r)(1.155 + 0.471 e^(−0.596 r/λ)), λ = 67.3 nm, and compare with the table.

**Q3.** The top plate is made + at 450 V with the plates 7.60 mm apart. What is E, and which way does it point? Which drops now rise, which fall faster and which fall more slowly? The followed drop rises 1.00 mm in about 8.8 s after falling it in 23.4 s: what is its charge?

**Q4.** In **Hold a drop still**, find the voltage that holds the followed drop still and record it. From its fall speed find its weight less buoyancy m′g, and its charge from q = m′g d/V. Why is it hard to be sure the drop is exactly still?

**Q5.** A drop with one extra electron (r = 0.560 µm) rises at 12.0 µm/s with the top plate + at 400 V. It picks up an ion and now rises at 61.8 µm/s. What was its change in charge? What speed would one more electron give?

**Q6.** Pool the charges from several drops. Without being told e, how could you find the smallest charge from a list like 1.51, 3.20 and 4.41 × 10⁻¹⁹ C? What does the dot plot show?

**Q7.** In **Thin air: drag slips** the pressure is 45 kPa. What is the mean free path now? For a drop of radius 0.5 µm, compare the slip correction at 45 kPa and at 101 kPa. If you work out q with plain Stokes drag, by what factor is it wrong?

**Q8.** The tiny drop (r = 0.36 µm) takes about 30 s to fall 0.5 mm. How far does Brownian motion move it in that time (D = k_B T C / 6πηr)? What spread in the fall times does that give? Why does Millikan's method work better with larger drops, and what limits how large?

## Common misconceptions

- **"Heavier drops fall faster because gravity pulls harder."** All objects fall together in a vacuum; here drag sets a terminal speed, and since weight grows as r³ and drag as r, big drops' terminal speed is larger.
- **"The drop accelerates the whole way down."** It reaches its terminal speed in about 10 microseconds: every time you measure is at constant speed.
- **"A drop with charge on it always rises in the field."** It rises only if qE is larger than its weight less buoyancy and points up: the sign of the charge and of the plates both matter.
- **"The charges should come out exactly 1.602, 3.204, ..."** Individual timings scatter by several percent from Brownian motion and timing; the whole numbers emerge from many careful measurements.
- **"Millikan measured the mass of each drop directly."** He found it from the fall speed and the density of the oil, through the drag law.

## Physics behind the demo

- Plates 7.60 mm apart (typical teaching apparatus), uniform field E = V/d; oil density 886 kg/m³ (light mineral oil, PASCO's Millikan manual); g = 9.81 m/s².
- Air: viscosity from Sutherland's law (1.716 × 10⁻⁵ Pa·s at 0 °C, S = 110.4 K; 1.828 × 10⁻⁵ Pa·s at 23 °C), density from the ideal gas law (1.192 kg/m³ at 23 °C and 101.325 kPa), mean free path 67.3 nm at 23 °C and 1 atm scaled as (T/p)(1 + S/T)⁻¹.
- Drag 6πηrv/C with the slip correction of Allen and Raabe (1982), fitted to Millikan's own oil drop data: C = 1 + (λ/r)[1.155 + 0.471 exp(−0.596 r/λ)]; C = 1.156 at r = 0.5 µm, 1.078 at 1 µm.
- Each drop moves at its terminal velocity v = C(qE − m′g)/(6πηr) plus a Brownian step of standard deviation √(2DΔt) each way, D = k_B T C/(6πηr) (Einstein 1905). The drops' radii (0.35 to 1.0 µm) and charges (1 to 12 e, mostly negative) are drawn at random: simulated drops.
- The readings work out r from the mean fall speed by iterating r = √(9ηv_f / 2(ρ − ρ_air)gC(r)) and q = 6πηr(v_f + v_E)/(CE); held still, v_E = 0, which is q = m′gd/V.
- Left out (stated on the page): evaporation, the field's fringe near the hole, convection, image charges. The apparatus picture is not to scale; the telescope view is shown upright.
- Tests (curriculum/validation/test_millikan.cjs): the air values, the slip correction's limits, the force balance at terminal speed, the radius and charge recovered from the two speeds for every charge 1 to 12 e and both signs (and the balancing method), the C^(3/2) error without slip, and the Brownian spread against √(2DΔt).

## Going further

- e/m of the Electron: with e from here and e/m from that bench, the electron's mass.
- Electrostatics at Work: the ink jet printer and the precipitator steer charged drops and particles in the same way, and the precipitator uses the same slip correction.
- Brownian motion was itself measured this way: Millikan and Fletcher used the jiggling of oil drops to find Avogadro's number.
