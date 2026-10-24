---
title: Spin Resonance
level: Modern physics lab
time: 20 to 40 minutes (a full lab period with the table and fit)
---
## What students should come away with

- A magnetic moment in a field B has energy levels split by ΔE = gμB (electron) or (γħ)B (nucleus). Radiation of frequency ν is absorbed only when hν matches that splitting: hν = gμ_B B.
- The experiment holds ν fixed and sweeps B. The absorption peak marks the one field where the resonance condition holds, so measuring that field at several frequencies gives a straight line B = kν through the origin with k = h/(gμ_B).
- For the same frequency, protons need a field about 660 times larger than electrons, because the proton's magnetic moment is that much smaller. That is why proton resonance needs the 300 mT Zeeman magnet while electron resonance needs only the scan coils.
- Different nuclei (¹H, ¹⁹F) have different gyromagnetic ratios, and the width of a line depends on the sample's surroundings: a liquid gives a narrow line, a solid a broad one.

## Before class

Students should know the energy of a magnetic dipole in a field, U = −μ·B, and E = hν. Run the demo once through the **ESR on DPPH** preset so you know where the cursors are, and pick an **Instrument seed** to give the class so everyone has the same instrument. Turn on **Blind** before projecting the readings table.

## Running it in class

1. **ESR on DPPH.** Ask Q1 before you show the peak. Raise the SENS screw slowly and point out the CH2 signal LED dimming: the peak is best just below the point where the oscillator stops. Put cursor A at the start of the ramp and B on the peak, and read Δt.
2. **ESR reference.** The empty black phial gives no peak. The held DPPH trace stays on the screen for comparison: the signal comes from the unpaired electrons in the sample.
3. **Change the range.** Switch to HI and LO. Ask the class to predict which way the peak moves before switching (Q2), then reset SENS for each range and capture all three readings. The live plot of B against ν and its slope give g.
4. **PSR glycerine.** Same physics with protons. The scan sweeps only 3.2 mT on top of about 300 mT, a 1 % window. Read the thermometer and B₂₀ on the magnet's shroud: the total field is B_Z + B_scan.
5. **Polystyrene vs glycerine.** Same number of hydrogen atoms per molecule, but a solid: the line is wider and lower.
6. **Fluorine in PTFE**, then **Out of tune**. PTFE has no hydrogen; the ¹⁹F line needs a frequency about 6 % lower, on LO. "Out of tune" makes the class do what the real lab demands: turn FREQ slowly until the peak moves onto the ramp.

## Questions

**Q1.** Predict: the probe frequency is held fixed while the scan coils sweep the field from 0 to 3.67 mT. Will the probe absorb power throughout the sweep, at many fields, or at one field only? What sets that field?

**Q2.** The Hz selector is moved from MID (about 60 MHz) to HI (about 75 MHz). Does the DPPH peak move earlier or later in the ramp? Explain from hν = gμ_B B, then check with the demo.

**Q3.** For DPPH (g = 2.0036) at exactly 60.0 MHz, find the resonance field B. In FAST mode (40 ms ramp, 3.67 mT full scale, 1 V on CH1 at full scale), what are V_R and t_R? On a SLOW chart record (25 s, 5 mm/s), how many millimeters from the start pulse is the peak?

**Q4.** At 60 MHz, compare the photon energy hν with kT at room temperature (293 K). What fraction more spins sit in the lower level than the upper one? Why does this make spin resonance a weak signal, and why do research instruments often cool the sample?

**Q5.** A student measures the glycerine peak at ν = 12.80 MHz with B_scan = 1.60 mT. The magnet is marked B₂₀ = 300.0 mT, and the thermometer reads 25 °C. Find the total field and γ/2π for the proton. How large an error in γ/2π comes from ignoring the temperature correction, and is it bigger or smaller than reading B_scan to ±0.05 mT?

**Q6.** Why does proton resonance need a field about 140 times larger than the scan coils, when the probe frequency is only about 5 times lower than for the electron? Use the measured gyromagnetic ratios.

**Q7.** In the real lab the earth's field (up to about 0.05 mT) adds to the scan field, and the demo leaves it out. How would it show up in a plot of B_scan against ν for DPPH, and why does it matter much more for ESR than for PSR? What does fitting a line with a free intercept, rather than one through the origin, buy you?

## Common misconceptions

- **"The sample absorbs at every frequency, just more at some."** Absorption happens only within a narrow band around hν = gμ_B B. Away from it the probe sees nothing, which is why an out of tune probe shows a flat trace.
- **"More SENS is always better."** The marginal oscillator is most sensitive just below the point where it stops oscillating; past that point the signal disappears entirely.
- **"The peak is the electron flipping, so its height measures g."** The position of the peak in field gives g. The height depends on the number of spins, the line width and the oscillator setting.
- **"Polystyrene has fewer hydrogens, so its peak is lower."** Per molecule it has the same 8 hydrogen atoms as glycerine, and only about a quarter fewer per cubic centimeter. The main reason the peak is lower is that it is wider: fixed neighbouring dipoles in a solid broaden the line, spreading the same absorption over a wider range of field.
- **"PTFE's peak is from protons."** PTFE contains no hydrogen; the resonance is from ¹⁹F nuclei, which have a different gyromagnetic ratio.

## Physics behind the demo

- ESR: hν = gμ_B B with g = 2.0036 for DPPH. PSR: ν = (γ/2π)B with 42.577478 MHz/T for ¹H (free proton, CODATA 2018) and 40.0776 MHz/T for ¹⁹F. Chemical shielding, tens of ppm, is below this instrument's resolution and neglected.
- The scan field ramps linearly from 0 to B_max (3.67 mT for ESR, 3.2 mT for PSR); CH1 reads 0 to 1 V in proportion. So B = V_R·B_max/1 V or B = (t_R/t)·B_max, with t = 40 ms (FAST) or 25 s (SLOW). For PSR the total field adds the magnet: B_Z = B₂₀[1 − (t − 20 °C)·7.5×10⁻⁴].
- Idealized: exact linear ramp, uniform field over the sample, no earth or stray fields, probe coil at right angles to the field.
- Modeled, not computed: the line shapes are Lorentzians with illustrative widths (0.25 mT DPPH, 0.05 mT glycerine and water, 0.25 mT polystyrene, 0.20 mT PTFE), with heights chosen to resemble a real trace. The marginal oscillator is a behavioural model of gain rising toward a threshold. All noise is simulated and set by the instrument seed, which also sets small offsets in the LO/MID/HI frequencies, B₂₀ and room temperature.

## Going further

- Have students fit the ESR data with and without the origin constraint and compare g. Then repeat on the real kit, where the earth's field and the orientation of the bench matter.
- The g factor of DPPH is close to the free electron value 2.0023; the small difference comes from spin–orbit coupling in the molecule. Proton g_I ≈ 5.586 shows the proton is not a point Dirac particle (which would have g = 2).
- Lab connection: the same ν ∝ B relation, with spatially varying fields, is the basis of MRI.
