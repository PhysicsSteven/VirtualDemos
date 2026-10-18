---
title: Lasers and Stimulated Emission
level: Modern physics
time: 20 to 30 minutes
---
## What students should come away with

- Light interacts with a two level atom in three ways: absorption, spontaneous emission (random direction and phase) and stimulated emission, which makes a copy of the incoming photon. Absorption and stimulated emission have the same coefficient, B₁₂ = B₂₁, so which wins depends only on whether N₁ or N₂ is larger.
- In thermal equilibrium N₂/N₁ = e^(−hν/kT) < 1 at every temperature, and pumping a two level atom can only bring N₂ up to N₁. Gain needs a population inversion, which needs a third or fourth level.
- A laser starts when the gain from the inversion balances the cavity losses. Above that threshold the inversion stays clamped at N_th and the extra pump power comes out as laser light, in a straight line against pump power.
- A four level laser (Nd:YAG) has an empty lower level; a three level laser (ruby) must first excite half its ions, so its threshold is far higher.
- The cavity allows only frequencies ν_q = qc/2L. The modes that fall inside the Doppler broadened gain curve, above threshold, are the ones that lase.

## Before class

Students should know E = hν, the Boltzmann factor and energy levels. There are four views, **Processes**, **Laser**, **Energy levels** and **Modes**; each preset opens the one it needs. The **Laser** view shows the cavity, a time trace, and output and inversion against pump power; the pump grip and the output mirror can be dragged. **Switch on again** restarts the laser with the pump just switched on.

## Running it in class

1. **Absorption vs stimulated emission.** Walk through the three panels: absorption, spontaneous emission in a random direction, and stimulated emission of a copy travelling with the incoming photon. Ask Q1 here.
2. **No laser without inversion.** Drag the **Temperature T** up to 10⁵ K and watch **Thermal N₂/N₁** approach 1 but never pass it. Then drag **Pump light, W/A₂₁**: the pumped two level atom also stays below 1 (Q2, Q3).
3. **Threshold.** In the **Laser** view, drag the operating point along the output curve. Below threshold the output is only spontaneous emission, far too small to see; above it the output rises in a straight line while **Inversion now, N/N_th** stays at 1 (Q4).
4. **Turning on: relaxation oscillations.** The pump switches on at t = 0. Ask the class why nothing happens for the first 170 µs (Q5). Then the light overshoots in a train of spikes that ring down to the steady output. Press **Switch on again** to repeat.
5. **Three level vs four level.** Ruby in the same cavity, with Nd:YAG dashed. Compare the threshold readouts, then open **Energy levels** to see why (Q6).
6. **Cavity modes of a He–Ne laser.** A 30 cm cavity has modes every 500 MHz inside a gain curve about 1.5 GHz wide. Drag the comb (**Fine change of L**) and watch modes hop in and out; then shorten **Mirror spacing L** (Q7).

## Questions

**Q1.** Predict: a beam of light at the transition frequency passes through a gas of two level atoms, half of them in the upper level and half in the lower. Does the beam get brighter, dimmer, or stay the same? What if 60% are in the upper level?

**Q2.** The He–Ne laser line is at 632.8 nm. Find the photon energy in eV and the ratio N₂/N₁ for neon atoms in thermal equilibrium at 300 K. At what temperature would N₂/N₁ = ½? Compare with the CO₂ line at 10.6 µm at 300 K. Check your values in **Processes**.

**Q3.** A two level atom is pumped with light at its own transition frequency. Explain why N₂ can approach N₁ but never exceed it, however strong the pump. What would the medium do to a weak probe beam when N₂ ≈ N₁?

**Q4.** In **Threshold**, the Nd:YAG laser starts at about 1.07 W of absorbed pump power and gives 0.58 W of output at 2.14 W absorbed. Find the slope efficiency, ΔP_out/ΔP_abs. Explain why it is less than 1, using the pump and laser wavelengths (808 and 1064 nm) and the two cavity losses: the output mirror (R = 0.95) and 2% internal loss per round trip. Why does the inversion stop growing above threshold?

**Q5.** In **Turning on: relaxation oscillations**, the pump is switched on at twice threshold and the first spike appears about 170 µs later. The upper level lifetime is 230 µs. Without lasing, the inversion would rise as N(t) ≈ N_∞(1 − e^(−t/τ)) toward N_∞ ≈ 2N_th. Estimate when it crosses threshold. Why does the light then overshoot instead of rising smoothly to its steady value?

**Q6.** In **Three level vs four level**, the threshold inversion for ruby is about 9% of all Cr³⁺ ions. What fraction of the ions must be in the upper level at threshold? Why does Nd:YAG need almost none of its ions excited, and why does that make its threshold pump power several times lower?

**Q7.** For the He–Ne cavity, find the mode spacing c/2L for L = 30 cm. With a gain curve 1.51 GHz wide (above threshold over its full width at half maximum), how many modes lase? How short must the cavity be for only one mode to fit? Check by changing **Mirror spacing L** and dragging **Fine change of L**.

## Common misconceptions

- **"Stimulated emission is a rare, special process."** It has the same coefficient as absorption; it is hidden only because the lower level is so much more populated.
- **"The laser photons come from the pump light."** The pump only fills the upper level. The laser photons are made by stimulated emission on another transition, at a longer wavelength.
- **"More pump power means more inversion."** Above threshold the inversion is clamped at N_th, and the extra power goes into the beam.

## Physics behind the demo

- **Processes:** one transition with equal degeneracies (B₁₂ = B₂₁); the thermal ratio is the Boltzmann factor, and stimulated over spontaneous, 1/(e^(hν/kT) − 1), uses the Planck energy density. The pumped atom obeys dN₂/dt = W(N₁ − N₂) − A₂₁N₂ with kT ≪ hν. Animations are not to scale.
- **Laser:** rate equations for the inversion N and the photon number q in one cavity mode of a uniform medium (no hole burning, no thermal effects); τ_c = t_rt/(−ln R − ln 0.98), N_th = 1/(Kτ_c), K = σc/(AL). Ideal four level Nd:YAG and three level ruby: pump bands and the Nd lower level empty instantly. 1 cm rod, 0.5 mm mode radius, 10 cm cavity, β = 10⁻⁹ of spontaneous emission into the mode. Real ruby lasers are flash pumped in pulses.
- The **Relaxation oscillation** readout is the linearized result about the steady state. The first large spikes in the trace are spaced more widely than its period (about 17 µs against 9.2 µs at twice threshold) and approach it only as they die down.
- **Modes:** ν_q = qc/2L; the gain is a Gaussian of the Doppler width for neon at 400 K. Mode heights are illustrative; mode competition, hole burning and the Lamb dip are left out.

## Going further

- History: Einstein introduced stimulated emission in 1916–1917; the ammonia maser ran in 1954 and Maiman's ruby laser, the first laser, in 1960.
