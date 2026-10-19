# Spin Resonance — Electron g and Nuclear Gyromagnetic Ratios
Student laboratory · two 75-minute sessions · modern physics

[Open the Teltron-style bench](https://physicssteven.github.io/VirtualDemos/demos/spin-resonance.html)

## Purpose and preparation
Determine the electron g factor from DPPH, distinguish proton and fluorine resonance, and quantify how field calibration and temperature affect the result. Prerequisites: magnetic dipole energy, photon energy, linear regression and oscilloscope cursors. Use this as a prelab before the TEL.2560 apparatus or as a virtual substitute. For a substitute, label every observation as simulated. At the physical bench use the department's connection, calibration and operating instructions; virtual SENS settings do not calibrate a real oscillator.

Derive hν=gμ_B B and B=kν with g=h/(μ_B k). For nuclei define Γ=γ/(2π) in Hz/T, so ν=ΓB and Γ=1/k; distinguish Γ from angular γ. For PSR use B=B_Z+B_scan and B_Z=B20[1−β(t−20 °C)], β=7.5×10⁻⁴ °C⁻¹. Explain why a small scan field can locate resonance in a large permanent field.

## Measurement setup
Record the **Instrument seed**, sample, frequency range, thermometer and marked B20. Keep one seed for a complete dataset. Select **Blind** and leave **Show expected resonance** off. Clear prefilled readings. **Capture reading** saves your cursor measurement, not a true peak locator. The frequency meter reads probe frequency divided by 1000: convert the meter's kHz number to the actual MHz frequency, then to Hz for fitting. Record this conversion explicitly.

FAST: CH1 is 1 V at full scan, B_scan=Bmax·V_R/(1 V), or B_scan=Bmax·t_R/(40 ms). Bmax is 3.67 mT for ESR and 3.20 mT for PSR. In **Time A→B**, put A at the start of the rising ramp and B at the CH2 peak. Do not measure from the falling-edge trigger. **V cursor** is an alternative. For SLOW, run **SLOW RUN**, then place ruler lines at the start pulse and peak: t_R=Δx/(5 mm/s), B_scan=Bmax·t_R/(25 s).

## A. ESR on DPPH (45 minutes)
1. Select **ESR on DPPH**, MID and FAST. Raise **SENS screw** slowly until the peak is clear just below oscillator extinction. If the oscillator stops, back off. Describe the LED and signal change.
2. Locate the peak center by bracketing its top from both sides. Record actual frequency, cursor reading and a positioning bound. Capture a reading; deliberately reposition the cursor and repeat three times to assess placement sensitivity.
3. Repeat at LO and HI, readjusting SENS for each range. These are three distinct frequencies, not nine independent frequencies. Preserve the repeats and discuss shared calibration errors.
4. Hold the DPPH trace using **Hold CH2 trace**, switch to **ESR reference**, and record the comparison. Do not include a reference with no peak in the g fit.
5. At one range compare FAST time, FAST voltage and SLOW chart methods. Export table and trace CSV separately. Record method and units; do not combine raw milliseconds, volts and chart millimeters in one fit.
6. Fit B versus actual ν through the origin and with a free intercept in an external spreadsheet. Calculate g from each slope, residuals and uncertainty. Explain what an intercept can diagnose on the real bench.

| Sample/range | Meter and units | ν (Hz) | Method | Raw cursor reading | B_scan (T) | Placement bound (T) |
|---|---|---|---|---|---|---|
| | | | | | | |

Expand for three ranges, three placements per range and one cross-method comparison.

## B. PSR and sample comparison (45 minutes)
1. Select **PSR glycerine**. Record thermometer and B20 afresh, tune **FREQ control** to bring the peak onto the rising ramp, and adjust SENS below extinction. If out of range, try the neighboring range; a flat trace is not a zero field measurement.
2. Capture at least five distinct tuned frequencies whose peaks span the accessible scan, holding seed and temperature fixed. Record B_scan and calculate total B for each row. Fit total B versus ν, infer Γ_H, and report both Hz/T and angular γ in rad s⁻¹ T⁻¹. The small scan is a narrow baseline on a large field: compare an origin fit with the uncertainty of a free-intercept fit.
3. Use **Polystyrene vs glycerine** at an accessible proton frequency. Compare width and height at documented gain settings; measure FWHM by the half-height above the baseline. State whether different gain settings permit a quantitative amplitude comparison.
4. Select **Fluorine in PTFE**, tune on LO, and obtain at least three distinct frequencies. Keep H and F datasets separate; infer Γ_F and compare their required frequencies at a common total B.
5. Change thermometer by a recorded amount, retune the proton peak, and compare analysis with and without correcting B_Z. Keep this dataset separate from the fixed-temperature fit.

| Nucleus/sample | ν (Hz) | t (°C) | B20 (T) | B_scan (T) | B_total (T) | Width and uncertainty |
|---|---|---|---|---|---|---|
| | | | | | | |

## Uncertainty, interpretation and submission
Propagate timing or voltage placement into B_scan. Treat full-scale calibration and B20 as shared systematic quantities; taking repeated cursor readings does not reduce those errors. Use δB_Z from δB20, δt and β, and discuss why the large permanent-field uncertainty can dominate PSR. Propagate slope uncertainty to g or Γ; compare origin and free-intercept assumptions.

Submit raw CSV, conversions, both field-frequency fits, residuals, widths, a worked uncertainty calculation and conclusions. Explain why peak position identifies g/Γ but height does not; why ESR is relatively sensitive to the Earth's field; why PSR temperature correction matters; and why a broad line does not imply a different proton Γ.

The simulated Lorentzian widths, oscillator gain and noise are illustrative. Uniform fields, linear scan calibration and neglected chemical shielding/stray fields limit the model. A realistic-looking trace is not a measurement of a particular physical sample's linewidth.
