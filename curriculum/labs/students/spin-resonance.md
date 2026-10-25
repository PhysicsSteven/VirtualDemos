# Spin Resonance
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §8.3. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/spin-resonance.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** ESR on DPPH; ESR reference (the empty phial, with the DPPH trace held for comparison); PSR glycerine; Polystyrene vs glycerine; Fluorine in PTFE; Out of tune (the proton peak lies outside the scan until the frequency is tuned).

**Using the demo.**

- The bench is a spin resonance teaching kit: a console with a marginal oscillator and a frequency meter, a cell mount with scan coils, an electron probe (ESR), a proton probe (PSR) used with a permanent magnet, a thermometer and a two channel oscilloscope. Drag the 3D view to turn it and scroll to zoom (on a phone, two fingers); a flat drawing shows the same bench.
- ESR samples: DPPH (orange cap), an empty phial (black cap) and water (white cap). PSR samples: glycerine (yellow cap), a polystyrene rod (green), a PTFE rod (blue), the empty phial and water.
- The range selector picks LO, MID or HI. For ESR the three frequencies are fixed, near 45, 60 and 75 MHz; each bench differs from these by up to 3%, so read the meter. For PSR the frequency tunes across 11.5 to 12.5 MHz on LO, 12.5 to 13.5 on MID and 13.5 to 14.5 on HI. **The frequency meter shows the probe frequency divided by 1000:** a reading of 60.00 kHz means 60.00 MHz.
- The oscillator's sensitivity screw sets how close it runs to the point where it stops. It is most sensitive just below that point, where the red LED starts to dim and the noise rises; past it the oscillation stops and the signal is gone. The point is different on each range.
- FAST sweeps the scan field from zero to full scale in a 40 ms ramp, 20 times a second. CH1 shows the ramp (1 V at full scale) and CH2 the probe signal, where absorption is a peak. The oscilloscope triggers on the falling edge of CH1, so the ramp starts about two divisions in. Drag cursors A and B (or the V cursor on CH1) on the screen; Time A→B or V cursor chooses which one a capture records. Hold CH2 trace keeps a trace on screen for comparison, and Export traces CSV saves both channels.
- SLOW RUN makes one 25 s ramp, drawn by a chart recorder on paper moving at 5 mm/s. Drag the two ruler lines onto the start pulse and the peak; the reading is given in seconds.
- The Zeeman magnet's field at 20 °C, $$B_{20}$$, is marked on its shroud. The thermometer reading can be set from 15 to 30 °C; it opens at this bench's room temperature.
- **Capture reading** stores the meter reading and your cursor or ruler reading, never the true field, and you can edit both. **Export to worksheet** sends the rows to the Data table below, with the scan and total fields worked out from your readings; **Export table CSV** saves them as a file; **Clear** starts a new series. The demo also plots $$B$$ against frequency with a line through the origin.
- Under Instrument: the seed fixes this bench's small offsets (the exact LO, MID and HI frequencies, $$B_{20}$$, the room temperature and the sensitivity thresholds) and its noise, so a class sharing a seed works on the same bench. Blind hides the expected answer and the accepted values. Show expected resonance is an instructor check.

**What the demo models.**

- Exact: $$h\nu = g\mu_B B$$ with $$g = 2.0036$$ for DPPH; $$\nu = (\gamma/2\pi)B$$ with 42.577478 MHz/T for ¹H (free proton, CODATA 2022) and 40.0776 MHz/T for ¹⁹F (IUPAC 2001). $$h$$, $$\mu_B$$ and $$\mu_N$$ are CODATA values. Chemical shielding, tens of parts per million, is far below this instrument's resolution and is left out.
- Idealized: the scan current ramps exactly linearly (FAST: 40 ms ramp and 1 ms flyback, repeating at 20 Hz; SLOW: one 25 s ramp); the field is uniform over the sample; the scan field adds to the magnet's field; the earth's field and stray fields are left out; the probe coil is at right angles to the field. The flyback is too quick for the detector, so no peak is drawn there. The magnet follows the maker's temperature law, $$B_Z = B_{20}[1 - 7.5\times10^{-4}\,(t - 20\,^{\circ}\mathrm{C})]$$, with $$t$$ in °C.
- Modeled, not computed from first principles: the line shapes are Lorentzians in field with illustrative widths (full width at half maximum: DPPH 0.25 mT, glycerine and water 0.05 mT, polystyrene 0.25 mT, PTFE 0.20 mT, the plastic coil former 0.30 mT). Heights are chosen to resemble a real trace and grow with the number of spins in the coil; water is weaker than glycerine because its slow relaxation saturates.
- The marginal oscillator is a behavioral model: its gain grows as the sensitivity nears the stopping point, the LED dims above 85% of that point, and the noise rises with the gain and sharply just below it. The frequency meter jitters by one count. All noise is simulated.

</details>

## Goal

Find the electron's $$g$$ factor using DPPH. Then use the same idea to measure the resonance of hydrogen and fluorine nuclei.

## Background

An electron's spin gives it a magnetic moment (§8.3). In a magnetic field $$B$$ its two spin states, $$m_s = \pm\tfrac12$$, have energies $$\pm\tfrac12 g\mu_B B$$, so they are split by $$g\mu_B B$$. Radio waves of frequency $$\nu$$ are absorbed when the photon energy matches the splitting:

$$h\nu=g\mu_B B$$

Here $$\mu_B$$ is the Bohr magneton and $$g$$ is close to 2 for an electron spin. DPPH is a stable free radical with one unpaired electron per molecule, so it gives a strong electron spin resonance (ESR).

The sample sits in the coil of a marginal oscillator at a fixed frequency. Scan coils sweep the field from zero to a full scale $$B_{\max}$$ on a linear ramp. When the field passes the resonance the sample absorbs energy from the coil, and the detected signal shows a peak. If the peak comes a time $$t_R$$ after the start of a ramp of length $$T$$, the field there is

$$B_{\rm scan} = \frac{t_R}{T}\,B_{\max}.$$

A graph of $$B$$ against frequency is a straight line through the origin. If its slope is $$k$$, then

$$g=\frac{h}{\mu_B k}.$$

Protons and fluorine nuclei have spin $$\tfrac12$$ too, with moments measured in nuclear magnetons $$\mu_N$$, about 1836 times smaller than $$\mu_B$$. Their resonance condition is written

$$\begin{gathered} \nu=\Gamma B, \\[4pt] \Gamma=\frac{\gamma}{2\pi}, \end{gathered}$$

where $$\Gamma$$ is measured in Hz/T. A plot of $$B$$ against frequency has slope $$1/\Gamma$$. At the same frequency a proton needs about 660 times the field an electron needs, so the nuclear experiment (PSR) puts the sample in a permanent magnet of about 300 mT and scans only a small field on top of it. Add the two fields before making this graph:

$$\begin{gathered} B=B_Z+B_{\rm scan}, \\[4pt] B_Z=B_{20}[1-\beta(t-20\,^{\circ}\mathrm C)]. \end{gathered}$$

$$B_{20}$$ is the magnet's field at 20 °C, $$t$$ the thermometer reading, and the magnet's temperature coefficient is $$\beta = 7.5\times10^{-4}\ {}^{\circ}\mathrm{C}^{-1}$$.

## Before the lab

1. What happens to the resonance field if the frequency doubles?
2. Why must the permanent magnet's field be included in the nuclear experiment?
3. If you plot $$B$$ against frequency, how do you get $$g$$ or $$\Gamma$$ from the slope?

## Safety

None for the virtual apparatus. With real equipment, keep magnetic objects away from the permanent magnet and take care around its pole faces, change probe connections with the power off, and follow the department's instructions for handling samples.

## Procedure

Before you start, note the instrument seed, turn on Blind, keep the expected resonance hidden and clear the table. Send the electron, proton and fluorine readings to the worksheet separately, clearing in between, so that each series goes into its own copy of the Data table.

**Electron resonance.** Put DPPH in the electron probe.

1. On MID, make the absorption peak clear. The oscillator is most sensitive just below the point where it stops; raise the sensitivity slowly, and if the signal disappears, back off.
2. Measure the time from the start of the rising field ramp to the center of the peak. The oscilloscope trigger is not the start of the ramp. Read the probe frequency from the meter, and capture the reading.
3. Place the cursors again from scratch and take a second reading.
4. Repeat on LO and HI. The sensitivity needs setting again on each range.
5. On MID, also measure the field from the CH1 voltage at the time of the peak. Then check that reading with one slow sweep, measuring on the chart record from the start pulse to the peak.
6. Replace the DPPH with the empty reference, then with water. Note what changes and what that tells you about where the peak comes from.

**Nuclear resonance.** Put glycerine in the proton probe on MID. Record $$B_{20}$$ and the thermometer reading. Tune the frequency until a peak appears during the scan, and find the range of frequencies over which it stays on the ramp. Take readings at five frequencies spread across that range, keeping the temperature fixed. Compare the width and height of the polystyrene peak with glycerine's at the same sensitivity. Then put PTFE in on LO and take readings at three frequencies spread across its range.

## Data

| Sample | Range | Probe frequency ν (MHz) | Method | Time or voltage reading (units) | Temperature t (°C) | B₂₀ (mT) | Scan field B_scan (mT) | Total field B (mT) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

Add rows for all frequencies and repeat readings. Record the seed and the scan calibration above the table. In the virtual lab, Export to worksheet fills the table; the scan and total fields it gives are worked out from your own readings.

## Analysis

1. Convert each reading to scan field. FAST has a 40 ms ramp; SLOW has a 25 s ramp, and the chart paper moves at 5 mm/s. Full scan is 3.67 mT for ESR and 3.20 mT for nuclear resonance. Compare the CH1 voltage and the slow sweep with the time readings on MID.
2. Plot the ESR field against frequency in Hz. Fit a line and find $$g$$ from its slope. Is the intercept zero within its uncertainty, as a stray field free magnet would give?
3. For each nuclear reading, correct the permanent field for temperature and add the scan field. Fit hydrogen and fluorine separately to find their $$\Gamma$$ values.
4. Compare line widths above the signal baseline. Record the sensitivity setting when comparing peak heights.

## Uncertainty

Estimate how far you could move a cursor while still calling it the peak center. Convert that interval to a field uncertainty. Include the scan calibration, the thermometer and the uncertainty in the permanent field if it is given. Repeated cursor placements help estimate reading scatter, but they do not remove an error shared by every field reading. Use your slope uncertainty to estimate the uncertainty in $$g$$ or $$\Gamma$$.

## Questions

1. Why does peak position tell you $$g$$, while peak height does not?
2. Why can glycerine and polystyrene have different widths but the same proton resonance relation?
3. How would a constant stray magnetic field affect the ESR graph?
4. Why does temperature matter more when measuring the small scan field on top of a large permanent field?

## What to hand in

Prelab answers, the data table copies, the field calculations and the slow sweep check, what the empty phial and water showed, the three fitted graphs, $$g$$ and the two $$\Gamma$$ values with uncertainty, and answers to the questions. Identify simulated data, and give the virtual seed.
