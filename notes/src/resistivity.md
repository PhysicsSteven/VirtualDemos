---
title: Resistivity of a Wire
level: PHYS 202
time: 25 to 40 minutes
---
## What students should come away with

- Resistance depends on shape: R = ρL/A. Twice the length, twice the resistance; twice the diameter, a quarter.
- Resistivity ρ is the material's property; it differs by a factor of about 65 between nichrome and copper.
- Metal resistivity rises with temperature, ρ(T) = ρ₂₀[1 + α(T − 20 °C)]; some alloys (constantan) barely change.
- A four-wire measurement (current through the whole wire, voltage across the clips only) measures just the length between the clips.

## Before class

Students should know R = V/I. The wire runs along a 1.000 m rule. A constant current supply drives current through the whole wire; the voltmeter reads between the fixed clip at 0 and the sliding clip at L. Drag the clip or use ← →. The **Mystery wire** hides its ρ and α.

## Running it in class

1. **Nichrome, 0.405 mm.** At 0.2 A, slide the clip: V grows in proportion to L. R = V/I = 8.54 Ω per meter.
2. Change the gauge to 0.160 mm: R per meter rises to 54.7 Ω. Ask Q2 first.
3. **Copper** at the same gauge: only 0.130 Ω per meter; the voltmeter reads millivolts.
4. Heat the copper to 100 °C: about 31% more resistance. Do the same with **Constantan**: almost no change.
5. Lab: capture R at five lengths and fit R against L for ρ; then fix L and capture at five temperatures for α.

## Questions

**Q1.** At 0.2 A, the voltmeter reads 1.708 V across 1.000 m of 0.405 mm nichrome wire. Find R, then ρ.

**Q2.** Predict R per meter for the same nichrome at 0.160 mm diameter, and for copper at 0.405 mm. Check with the demo.

**Q3.** By what factor does the resistance of copper wire rise from 20 °C to 100 °C (α = 0.00393 /K)? Why is constantan used for precision resistors?

**Q4 (lab).** From your R against L fit, explain why ρ = slope × A. Why should the intercept be zero here, and what would a two-wire meter (one that also measures the leads and clip contacts) do to it?

**Q5 (lab).** With R measured at several temperatures at fixed L, show that α = slope / R(20 °C). Find ρ and α for the Mystery wire.

## Common misconceptions

- **"A thicker wire has more resistance because there is more metal."** More area means more paths side by side: less resistance.
- **"Resistance is a property of the material."** Resistivity is; resistance also depends on length and area.
- **"Current gets used up along the wire, so the voltage drop is uneven."** The current is the same everywhere along a single wire; V grows evenly with L.

## Physics behind the demo

- R = ρL/A with A = πd²/4, ρ(T) linear in T from handbook values at 20 °C: nichrome 1.10 × 10⁻⁶ Ω·m (α 0.0004 /K), constantan 4.9 × 10⁻⁷ Ω·m (α 0.00001 /K), copper 1.68 × 10⁻⁸ Ω·m (α 0.00393 /K). Real alloys vary by a few percent.
- Diameters are AWG 22, 26, 30 and 34 (0.644, 0.405, 0.255, 0.160 mm).
- Ideal four-wire measurement: the voltmeter draws no current and the clip and lead resistances do not enter; the supply holds I exactly. Heating of the wire by the current is ignored (the temperature is what you set).
- Readings: V to 4 significant figures, I as set.
