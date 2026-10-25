---
title: Resistivity of a Wire
level: PHYS 202
time: 25 to 40 minutes
---
## What students should come away with

- Resistance depends on shape: R = ρL/A. Twice the length, twice the resistance; twice the diameter, a quarter.
- Resistivity ρ is the material's property; it differs by a factor of about 65 between nichrome and copper.
- Metal resistivity rises with temperature, ρ(T) = ρ₂₀[1 + α(T − 20 °C)]; some alloys (constantan) barely change.
- A four wire measurement (current through the whole wire, voltage across the clips only) measures just the length between the clips.

## Before class

Students should know R = V/I. The wire runs along a 1.000 m rule. A constant current supply drives current through the whole wire; the voltmeter reads between the fixed clip at 0 and the sliding clip at L. Drag the clip or use ← →. The **Mystery wire** hides its ρ and α.

## Running it in class

1. **Nichrome, 0.405 mm.** At 0.2 A, slide the clip: V grows in proportion to L. R = V/I = 8.54 Ω per meter.
2. Change the gauge to 0.160 mm: R per meter rises to 54.7 Ω. Ask Q2 first.
   Watch the magnified piece above the wire as you change gauge (it opens in 3D; Flat draws the same bench). At 0.405 mm it holds 285 dots drifting at 0.110 mm/s; at 0.160 mm only 44, drifting 6.4 times faster at 0.702 mm/s, yet both cross the ring at about 12.5 per second: the same current, I/(e × 10¹⁷). The potential graph gets 6.4 times steeper (E = ρI/A), and the voltmeter reads its drop between the clips.
3. **Copper** at the same gauge: only 0.130 Ω per meter; the voltmeter reads millivolts.
4. Heat the copper to 100 °C: about 31% more resistance. Do the same with **Constantan**: almost no change.
5. Lab: capture R at five lengths and fit R against L for ρ; then fix L and capture at five temperatures for α.
6. **Inside the wire** (button above the picture). Copper, 0.405 mm, 0.2 A: a 4 nm × 2 nm region with all 203 free electrons in it. The random motion is fast and the drift is invisible; untick **Show random motion** and the whole electron sea creeps left, against the current. The drift is shown 10⁶ times slower than real and the random motion 10¹⁵ times slower; say out loud that the two are not on one scale. Read v_d = 1.14 × 10⁻⁴ m/s and the transit time L/v_d = 72.8 min for 0.500 m, then ask why the lamp comes on at once. Raise I or pick a thinner gauge and watch the drift speed up; switch to nichrome and the trail of the circled electron turns from long straight flights (copper, mean free path 39 nm) into a zigzag (0.58 nm). Tick **Follow the marked electron along the wire** and the view rides with the circled electron while the ions stream past. Ask Q6.

## Questions

**Q1.** At 0.2 A, the voltmeter reads 1.708 V across 1.000 m of 0.405 mm nichrome wire. Find R, then ρ.

**Q2.** Predict R per meter for the same nichrome at 0.160 mm diameter, and for copper at 0.405 mm. Check with the demo.

**Q3.** By what factor does the resistance of copper wire rise from 20 °C to 100 °C (α = 0.00393 /K)? Why is constantan used for precision resistors?

**Q4 (lab).** From your R against L fit, explain why ρ = slope × A. Why should the intercept be zero here, and what would a two wire meter (one that also measures the leads and clip contacts) do to it?

**Q5 (lab).** With R measured at several temperatures at fixed L, show that α = slope / R(20 °C). Find ρ and α for the Mystery wire.

**Q6.** Copper (n = 8.47 × 10²⁸ m⁻³), 0.405 mm diameter, 0.2 A. Find J and the drift speed v_d. How long does an electron take to drift the 0.500 m between the clips? In **Inside the wire**, run until a few dozen electrons have crossed the plane, then use the count, the real time and the 2 nm × 0.3 nm area of the region to estimate how many electrons per second pass through the whole wire. Compare with I/e. What changes if you use the 0.160 mm gauge?

**Q7.** In **Cold stage**, cool the Lead sample (0.500 m, 0.405 mm, 0.2 A, residual resistance ratio 100). Read R at 293 K, at 77 K and just above 7.19 K. Why does R level off instead of heading to zero as the temperature falls, and what sets the level? What happens below 7.19 K? Repeat with a purity of 1000: which readings change and which do not? Finally cool YBCO: why did a superconductor above 77 K matter so much in 1986?

## Common misconceptions

- **"A thicker wire has more resistance because there is more metal."** More area means more paths side by side: less resistance.
- **"Resistance is a property of the material."** Resistivity is; resistance also depends on length and area.
- **"Current gets used up along the wire, so the voltage drop is uneven."** The current is the same everywhere along a single wire; V grows evenly with L.
- **"Electrons race through the wire at nearly the speed of light."** Their random speed is about 1.6 × 10⁶ m/s, but they go nowhere on average; the drift is about 0.1 mm/s. The signal is the change in field, which travels at a large fraction of c.

## Physics behind the demo

- Cold stage (OpenStax 9.6): Matthiessen's rule ρ = ρ₀ + ρ_ph(T), with ρ_ph from the Bloch–Grüneisen formula (Debye temperatures from Kittel) scaled to the handbook ρ at 293 K, and ρ₀ = ρ(293 K)/RRR. R = 0 below T_c (OpenStax Table 9.3), drawn as a sharp step. YBCO's normal state is a typical linear ρ = 2.5 × 10⁻⁶ Ω·m × T/300 K.

- R = ρL/A with A = πd²/4, ρ(T) linear in T from handbook values at 20 °C: nichrome 1.10 × 10⁻⁶ Ω·m (α 0.0004 /K), constantan 4.9 × 10⁻⁷ Ω·m (α 0.00001 /K), copper 1.68 × 10⁻⁸ Ω·m (α 0.00393 /K). Real alloys vary by a few percent.
- Diameters are AWG 22, 26, 30 and 34 (0.644, 0.405, 0.255, 0.160 mm).
- Ideal four wire measurement: the voltmeter draws no current and the clip and lead resistances do not enter; the supply holds I exactly. Heating of the wire by the current is ignored (the temperature is what you set).
- Readings: V to 4 significant figures, I as set.
- Inside the wire (OpenStax 9.1 and 9.2): v_d = I/(nqA), J = I/A = nqv_d, transit time L/v_d, electrons per second I/e. Copper uses the cited free electron density n = 8.47 × 10²⁸ m⁻³ (one per atom; pure copper at 8.96 g/cm³ gives 8.49 × 10²⁸). The alloys are estimates from composition and density with one free electron per atom assumed: nichrome (80% Ni, 20% Cr, 8.40 g/cm³) 8.84 × 10²⁸, constantan (55% Cu, 45% Ni, 8.90 g/cm³) 8.75 × 10²⁸ m⁻³. OpenStax Example 9.3 uses 8.80 g/cm³ for copper and so gets n = 8.34 × 10²⁸ m⁻³ and v_d = 4.54 × 10⁻⁴ m/s for 12 gauge at 20 A; with 8.47 × 10²⁸ the same wire gives 4.45 × 10⁻⁴ m/s. (The 12 gauge wire is not one of the demo's gauges; the tests check it.)
- The magnified region is 4 nm × 2 nm × 0.3 nm and holds every free electron in it (n × volume, about 200). The random speed is the Fermi speed of the free electron model, v_F = ħ(3π²n)^⅓/m (1.57 × 10⁶ m/s for copper); the electrons change to a new random 3D direction after a mean time τ = m/(ne²ρ) (Drude), which follows ρ(T): 2.5 × 10⁻¹⁴ s in copper and 3.6 × 10⁻¹⁶ s in nichrome. Ions are drawn on a square grid at the mean atomic spacing; copper's real lattice is face centered cubic. n is held fixed with temperature.
- Two time scales: the drift is shown 10⁶ times slower than real, the random motion 10¹⁵ times slower; v_d/v_F is about 10⁻¹⁰, so no single scale shows both. The plane counter counts electrons carried across by the drift only; random motion crosses both ways equally on average. Because the electrons sit at random positions, the count scatters about n v_d t × (2 nm × 0.3 nm) by roughly its square root, like any count; each time the drift carries the whole sea one region width (4 nm), every electron has crossed exactly once, so long runs agree well with I/e.
