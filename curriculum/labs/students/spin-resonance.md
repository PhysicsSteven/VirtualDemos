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
- **Record reading** stores the meter reading and your cursor or ruler reading, never the true field, and you can edit both. **Export to worksheet** sends the rows to the Data table below, with the scan and total fields worked out from your readings; **Export table CSV** saves them as a file; **Clear** starts a new series. The demo also plots $$B$$ against frequency with a least squares line (slope and intercept).
- Under Instrument: the seed fixes this bench's small offsets (the exact LO, MID and HI frequencies, $$B_{20}$$, the room temperature and the sensitivity thresholds) and its noise, so a class sharing a seed works on the same bench. Blind hides the expected answer and the accepted values. Show expected resonance is an instructor check.

**What the demo models.** The exact relations, the idealizations (a linear ramp, a uniform field, no stray fields), the line widths and the marginal oscillator model are listed in the demo's Model fold.

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
3. Hydrogen and fluorine nuclei both have spin $$\tfrac12$$. Decide before the lab whether, in the same magnet, fluorine's $$\Gamma$$ will equal hydrogen's, differ by a few percent, or differ by a large factor, and give the reason for your choice.

## Safety

None for the virtual apparatus. With real equipment, keep magnetic objects away from the permanent magnet and take care around its pole faces, change probe connections with the power off, and follow the department's instructions for handling samples.

## Procedure

Before you start, open the Instrument fold, write down the Instrument seed, check Blind, leave Show expected resonance unchecked, and press Clear under Readings. Send the electron, proton and fluorine readings to the worksheet separately, clearing in between, so that each series goes into its own copy of the Data table: press Export to worksheet at the end of each series, then Clear.

**Electron resonance.** Press the ESR on DPPH setup: DPPH (orange cap) in the electron probe, on MID, with FAST sweep.

1. On MID, make the absorption peak on CH2 clear with the SENS screw slider. The oscillator is most sensitive just below the point where it stops; raise SENS slowly until the CH2 signal LED reads dimming, and if the signal disappears, back off.
2. With Time A→B pressed (beside Measure with), drag cursor A onto the start of the rising CH1 ramp and cursor B onto the center of the CH2 peak; Cursors ΔT = B − A gives the time. The oscilloscope trigger, at the left edge, is not the start of the ramp, which begins about two divisions in. Read the Frequency meter (60.00 kHz means 60.00 MHz) and press Record reading.
3. On MID only, drag both cursors away, place them again from scratch and record a second reading.
4. Press LO above the picture and repeat steps 1 and 2, then the same on HI. SENS needs setting again on each range.
5. Under Sample in the probe, pick the empty reference (black cap), then water (white cap). Note what changes and what that tells you about where the peak comes from. Press Export to worksheet, then Clear.

**Nuclear resonance.** Press the PSR glycerine setup (glycerine, yellow cap, in the proton probe on MID). Under Zeeman magnet, write down $$B_{20}$$ (Marked on the shroud) and the Thermometer t reading, and leave the thermometer alone from here on. Move the FREQ control slider and watch the Frequency meter and CH2: find the lowest and highest meter readings at which the peak still sits on the ramp. Take readings (cursors A and B, then Record reading) at three frequencies spread across that range, then press Export to worksheet and Clear. Then press Fluorine in PTFE (PTFE, blue cap, on LO), take readings at two frequencies, one near each end of its range, in the same way, and press Export to worksheet.

## Data

| Sample | Range | Probe frequency ν (MHz) | Method | Time or voltage reading (units) | Temperature t (°C) | B₂₀ (mT) | Scan field B_scan (mT) | Total field B (mT) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

Add rows for all frequencies and repeat readings. Record the seed and the scan calibration above the table. In the virtual lab, Export to worksheet fills the table; the scan and total fields it gives are worked out from your own readings.

## Analysis

1. Convert each reading to scan field. FAST has a 40 ms ramp. Full scan is 3.67 mT for ESR and 3.20 mT for nuclear resonance.
2. Plot the ESR field against frequency in Hz. Fit a line and find $$g$$ from its slope. Is the intercept zero within its uncertainty, as a stray field free magnet would give?
3. For each nuclear reading, correct the permanent field for temperature and add the scan field. For hydrogen and for fluorine, find $$\Gamma = \nu/B$$ for each reading and average them. One band spans less than 1 % in frequency, so a fitted line with a free intercept fixes the slope only to 1 or 2 %, while the ratio is far better.

## Uncertainty

Estimate how far you could move a cursor while still calling it the peak center. Convert that interval to a field uncertainty. Include the scan calibration, the thermometer and the uncertainty in the permanent field if it is given. Repeated cursor placements help estimate reading scatter, but they do not remove an error shared by every field reading. Use your slope uncertainty to estimate the uncertainty in $$g$$, and the spread of your $$\nu/B$$ values for $$\Gamma$$.

## Questions

1. Were hydrogen and fluorine alike, as Before the lab 3 asked? Give your $$\Gamma_\mathrm{H}$$, $$\Gamma_\mathrm{F}$$ and their ratio. Both nuclei have spin $$\tfrac12$$, so what sets $$\Gamma$$? Why does the position of the peak measure it (and $$g$$ for the electron), while the height of the peak does not?

## What to hand in

Prelab answers, the data table copies, the field calculations, what the empty phial and water showed, the ESR graph, $$g$$ and the two $$\Gamma$$ values with uncertainty, and answers to the questions. Identify simulated data, and give the virtual seed.
