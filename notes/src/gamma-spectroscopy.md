---
title: Gamma Spectroscopy
level: Modern physics lab (pre-lab for the NaI(Tl) spectrometer)
time: 30 to 45 minutes as a pre-lab; 15 minutes for steps 1 to 3 in lecture
---
## What students should come away with

- One gamma line does not give one peak. The photopeak (all the energy absorbed) sits above a Compton continuum ending at the Compton edge, 2E²/(mₑc² + 2E), and photons scattered back from behind the source make a backscatter peak near E/(1 + 2E/mₑc²): 477.3 and 184.3 keV for 661.7 keV.
- The spectrometer measures pulse height, not energy. The HV and amplifier gain set channels per keV; a fit E = a + b·ch through known lines turns channels into energy. Change the HV or gain and the calibration is gone.
- The resolution FWHM/E falls with energy, roughly as 1/√E, because the pulse height comes from a number of photoelectrons that grows in proportion to E.
- Count rates in a photopeak follow the solid angle (close to inverse square far from the crystal) and fall as e^(−(μ/ρ)ρx) through an absorber, with μ/ρ = 0.110 cm²/g for 662 keV photons in lead. At 122 keV μ/ρ grows steeply with Z (photoelectric absorption); at 662 keV it is nearly the same for Al, Fe, Cu, Mo and Sn (Compton scattering).
- An activity is best found against a reference standard of the same nuclide in the same geometry, A = A_std × (net rate)/(net rate of the standard).

## Before class

The demo is set up like the department's apparatus, ORTEC Experiment 3 (AN34): SPA38 detector (38 mm × 38 mm NaI(Tl)), 575A amplifier, EASY-MCA-2K with 2048 channels, the RSS8 source set (about 1 µCi each), the 5 µCi ¹³⁷Cs standard and the 20 µCi ⁵⁷Co source, the six metal foil sets and the RAS20 lead absorbers. The presets follow Experiments 3.1, 3.2, 3.3, 3.5, 3.7 and 3.9, all at the manual's gain (661.7 keV near channel 475 of 2048, 238 of 1024 in the manual). Students should know the photoelectric effect, the Compton formula E′ = E/(1 + (E/mₑc²)(1 − cos θ)), exponential attenuation and √N counting errors. Use the **×100** clock speed and a **Preset live** time to keep runs short. Every spectrum is Monte Carlo with Poisson noise, so results vary by a few percent from run to run; students should record every run with **Add to table**, as in the real lab. Each RSS8 source has a hidden true activity between 0.8 and 1.2 times its label, drawn once per visit; **Show true activity** reveals it after a measurement.

## Running it in class

1. **Compton edge and backscatter** (Exp. 3.3). It starts acquiring at once: press **Stop**, ask Q1, then let it run. Drag a region of interest across the photopeak (centroid near channel 475) and put the cursor on the Compton edge and the backscatter bump. Switch **Behind source** to **Lead brick**: the bump shrinks and lead x-rays appear near 75 keV.
2. **HV and gain setup.** Drag the HV knob or the **PMT high voltage** slider and watch the spectrum slide; read **Pulse height for 662 keV**. Ask Q2. After step 3, change sources with the **Source** menu, not the presets, so the HV, gain and calibration stay fixed.
3. **Energy calibration** (Exp. 3.1). Follow the preset hint: **Mark peak** on 661.7 keV, add the energy, switch to Co-60, **Clear**, acquire and mark 1173.2 and 1332.5 keV. Check the residuals on the **Calibration** plot and turn on the **keV** axis. Q3.
4. **Resolution against energy** (Exp. 3.4). Add photopeak rows for Cs-137, Co-60, Na-22, Mn-54 and Ba-133 (356 and 81 keV) and open the **Resolution** plot. Ask Q4 before showing the slope.
5. **Inverse square.** The Cs-137 standard (its activity is fixed), no absorber, one ROI on the photopeak. Acquire 60 s live at several distances (drag the source holder or the **Source to detector face, d** slider), **Add to table** each time, and open the **Distance** plot. Ask Q5 before the 20 cm run.
6. **Activity against the standard** (Exp. 3.5). Follow the preset hint: standard at 4 cm, then the RSS8 Cs-137 at the same distance and live time, and open the **Activity** plot. Q6.
7. **Absorption coefficient** (Exp. 3.7). The preset sets d = 5 cm and the ROI. Acquire, **Add to table**, add lead absorbers to the stack (the chips are mass thicknesses in mg/cm²), **Clear**, acquire again, until the rate is below a quarter. The **Attenuation** plot gives μ/ρ. Q7.
8. **Photoelectric absorption** (Exp. 3.9). The 20 µCi ⁵⁷Co source at 10 cm; choose a foil set and the **Number of foils**. Q8.
9. **Unknown source** (Exp. 3.2). The calibration is already loaded. Students measure each photopeak energy, compare with the Model section's line list and check a Compton edge before **Reveal**. Q9.

## Questions

**Q1.** Predict: ¹³⁷Cs gives off essentially one gamma ray, 661.7 keV (plus barium x-rays near 32 keV). Will the spectrum be a single narrow peak at 661.7 keV? Sketch it and say where counts below the peak come from.

**Q2.** At 900 V, coarse gain 10 and fine gain 1.39 the rail shows a pulse height of 2.30 V for 662 keV. The ADC's full scale is 10 V over 2048 channels. (a) About which channel holds the 662 keV photopeak? (b) Is the ⁶⁰Co sum peak at 2505.7 keV on scale at this gain? (c) Keeping the amplifier gain, what HV puts 2505.7 keV at full scale, given PMT gain ∝ V⁷? What does this say about HV stability?

**Q3.** After setup you find the 661.657 keV centroid at channel 474.0 and the 1332.492 keV centroid at channel 951.8. (a) Find a and b in E = a + b·ch. (b) Predict the channel of the ⁵⁴Mn line at 834.848 keV and check it with the demo. (c) What would a one point calibration through the origin do to your energies?

**Q4.** The FWHM at 662 keV is 7.0%. (a) If the resolution came only from the statistics of the photoelectrons, what FWHM/E would you expect at 1332.5 keV and at 81.0 keV? (b) Explain why counting statistics give FWHM/E ∝ 1/√E. (c) Is k in the **Resolution** fit FWHM/E ∝ Eᵏ exactly −1/2? Why not?

**Q5.** Predict: with the 5 µCi standard at d = 10 cm the photopeak net rate is about 272 per second. What will it be at 20 cm by the inverse square law? Measure it. Why is the drop smaller than a factor of 4?

**Q6.** At 4 cm the standard (5.00 µCi ± 5%) gives a net photopeak rate of 1189 ± 5 per second and the RSS8 Cs-137 gives 221.6 ± 2.0 per second, both for 60 s live. (a) What is the activity of the RSS8 source, in µCi and in Bq? (b) Which uncertainty dominates, and would a longer run help? (c) Why must the two sources be at the same distance, and why does the method not need the detector's efficiency?

**Q7.** For 661.7 keV photons in lead, μ/ρ = 0.110 cm²/g (NIST XCOM). (a) What mass thickness of lead halves the photopeak rate? (b) What fraction of the rate is left behind the 1124, 2066 and 3448 mg/cm² absorbers stacked together? (c) Why use the net photopeak counts rather than all the counts in the spectrum?

**Q8.** At 122 keV, μ/ρ is 0.152 cm²/g for aluminum and 2.59 cm²/g for tantalum. (a) How many 0.005 in tantalum foils (ρ = 16.65 g/cm³) halve the 122 keV rate? (b) Can the ten 0.030 in aluminum foils halve it? (c) At 662 keV, μ/ρ is 0.075, 0.073, 0.073, 0.074 and 0.076 cm²/g for Al, Fe, Cu, Mo and Sn. Why is it nearly the same for all of them there, but not at 122 keV?

**Q9.** An unknown shows one clear photopeak, at 834 ± 1 keV, on a continuum that ends near 640 keV, with a small bump near 195 keV. Which source is it? Show that the 640 keV edge and the 195 keV bump belong to the same line.

## Common misconceptions

- **"Every peak is a gamma ray from the source."** The Compton edge, backscatter peak, lead and iodine x-rays, escape peaks and sum peaks all come from the detector and its surroundings. Only photopeaks mark source lines.
- **"Turning up the HV gives more counts."** It makes each pulse bigger, so the spectrum moves to higher channels. The photopeak area stays the same as long as the peak stays on scale.
- **"More channels means better resolution."** The FWHM in keV is set by the crystal and PMT; 2048 channels only spread the same peak over more bins than 1024.
- **"Lead stops gamma rays."** It attenuates them exponentially; 2 cm (22.7 g/cm²) still passes about 8% at 662 keV.

## Physics behind the demo

- Photons from a point source on the axis are followed through a bare cylindrical NaI crystal (38 mm × 38 mm by default; 2″ × 2″ and 3″ × 3″ also) with NIST XCOM cross sections: photoelectric absorption (iodine K x-rays can escape), Klein–Nishina Compton scattering on free electrons, and pair production. Electrons deposit their energy where they are made; coherent scattering in the crystal is left out. Lines are from ENSDF (NuDat 3); source decay is ignored.
- Backscatter is single Compton scattering in a thick backing 5 cm behind the source (a lower estimate). Absorbers follow the narrow beam law e^(−μx) (XCOM for Al, Fe, Cu, Pb; Hubbell and Seltzer for Mo, Sn, Ta, which reproduce Table 3.4 of the ORTEC manual); Mo, Sn, Ta and Pb absorbers give their K x-rays; scattering in absorbers, walls and table, and buildup, are not modeled. Coincidence summing is included for ⁶⁰Co and ²²Na; chance pileup is not.
- Resolution: Gaussian, FWHM/E = a/√E + 0.01, a set by the 662 keV slider; light output exactly proportional to energy. Electronics: pulse height 0.25 mV per keV × (V/900 V)⁷ × coarse × fine into a 10 V ADC with an 18 mV zero offset; nonparalyzable dead time τ = 8 µs (see it with the 20 µCi ⁵⁷Co source at d = 1 cm). EASY-MCA-2K: 2048 channels over 10 V. The room background is assumed.
- The crystal is bare (no can, reflector, photomultiplier or source holder) and electrons never escape or radiate, so the peak to total ratio comes out higher than on a real detector. For a 3″ × 3″ crystal at 10 cm it is 2 to 17% above Heath's measured values (IDO-16880, 1964), more at high energy: 0.568 against 0.536 at 662 keV, 0.328 against 0.280 at 1837 keV. For the 38 mm crystal the simulated ratio at 662 keV is 0.401 (2″ × 2″: 0.470); no published 38 mm value has been compared. Peak energies and spectral shapes are right; absolute efficiencies are not those of a particular detector, which is why activities are found against the standard.
