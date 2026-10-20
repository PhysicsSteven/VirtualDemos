# Spin Resonance
Student laboratory · modern physics

[Open the virtual spin resonance apparatus](https://physicssteven.github.io/VirtualDemos/demos/spin-resonance.html)

## Goal

Find the electron's g factor using DPPH. Then use the same idea to compare resonance in hydrogen and fluorine nuclei.

## Background

A magnetic field splits the energy levels of a magnetic moment. The sample absorbs radio waves when the photon energy matches the separation:

$$h\nu=g\mu_B B$$

In the electron experiment, called ESR, we hold the frequency fixed and sweep the magnetic field. The absorption peak tells us the resonance field. A graph of B against frequency is a straight line. If its slope is k, then

$$g=\frac{h}{\mu_B k}.$$

For a nucleus, it is convenient to write the resonance condition as

$$\nu=\Gamma B,\qquad \Gamma=\frac{\gamma}{2\pi}.$$

Here Γ is measured in Hz/T. A plot of B against frequency has slope 1/Γ. The nuclear experiment needs a permanent magnet as well as the small scan field. Add the two fields before making this graph:

$$B=B_Z+B_{\rm scan},\qquad B_Z=B_{20}[1-\beta(t-20\,^{\circ}\mathrm C)].$$

The magnet's temperature coefficient is β = 7.5 × 10⁻⁴ °C⁻¹.

## Before the lab

1. What happens to the resonance field if the frequency doubles?
2. Why must the permanent magnet's field be included in the nuclear experiment?
3. If you plot B against frequency, how do you get g or Γ from the slope?

## Safety

For real equipment, follow the department's power and sample-handling instructions. Keep magnetic objects away from the permanent magnet and take care around its pole faces. Change probe connections with the power off.

## Procedure

**Electron resonance.** Put DPPH in the electron probe. Select MID and adjust SENS slowly until the absorption peak is clear. The oscillator works best just before it stops; if the signal disappears, back off SENS.

1. Put cursor A at the start of the rising field ramp and cursor B at the peak. Read the time between them. The oscilloscope trigger is not the start of the ramp.
2. Read the actual probe frequency. Reposition the cursors and repeat the reading twice.
3. Repeat on LO and HI. Adjust SENS again for each range.
4. At one frequency, check the field using CH1 voltage instead of time. CH1 reads 1 V at the end of the scan. If a chart recorder is available, compare one SLOW sweep too.
5. Replace DPPH with the empty reference. Describe what changes.

**Nuclear resonance.** Put glycerine in the nuclear probe. Record the magnet's B20 and the thermometer reading. Tune the frequency until a peak appears during the scan. Take at least five frequencies, keeping the temperature fixed. Compare the width with polystyrene. Then use PTFE on LO and take at least three fluorine readings. Keep the hydrogen and fluorine results separate.

**Using the virtual apparatus.** Record the **Instrument seed**, turn on **Blind**, leave **Show expected resonance** off and click **Clear**. Use **Time A→B** or **V cursor**, then **Capture reading**. For SLOW, press **SLOW RUN** and place the ruler lines on the start pulse and peak. Use **Export table CSV** when finished. The frequency meter shows the probe frequency divided by 1000: a reading of 60 kHz means a probe frequency of 60 MHz.

## Data

| Sample | Range | Probe ν (MHz) | Method | Time or voltage reading (units) | t (°C) | B20 (mT) | Bscan (mT) | Total B (mT) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

Add rows for all frequencies and repeat readings. Record the seed and scan calibration above the table.

## Analysis

1. Convert each reading to scan field. FAST has a 40 ms ramp; SLOW has a 25 s ramp and runs at 5 mm/s. Full scan is 3.67 mT for ESR and 3.20 mT for nuclear resonance.
2. Plot the ESR field against frequency in Hz. Fit a line through the origin and find g. Also try a free intercept. Does it change your result appreciably?
3. For each nuclear reading, correct the permanent field for temperature and add the scan field. Fit hydrogen and fluorine separately to find their Γ values.
4. Compare line widths above the signal baseline. Record SENS when comparing peak heights.

## Uncertainty

Estimate how far you could move a cursor while still calling it the peak center. Convert that interval to a field uncertainty. Include the scan calibration, thermometer and permanent-field uncertainties if provided. Repeated cursor placements help estimate reading scatter, but they do not remove an error shared by every field reading. Use your slope uncertainty to estimate uncertainty in g or Γ.

## Questions

1. Why does peak position tell you g, while peak height does not?
2. Why can glycerine and polystyrene have different widths but the same proton resonance relation?
3. How would a constant stray magnetic field affect the ESR graph?
4. Why does temperature matter more when measuring the small scan field on top of a large permanent field?

## What to hand in

Prelab answers, the data table and CSV, field calculations, the three fitted graphs, g and the two Γ values with uncertainty, and answers to the questions. State whether you used real or virtual equipment and give the virtual seed if applicable.
