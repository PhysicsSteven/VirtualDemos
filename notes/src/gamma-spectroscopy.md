---
title: Gamma Spectroscopy
level: Modern physics lab (pre-lab for the NaI(Tl) spectrometer)
time: 30 to 45 minutes as a pre-lab; 15 minutes for steps 1 to 3 in lecture
---
## What students should come away with

- One gamma line does not give one peak. The photopeak (all the energy absorbed) sits above a Compton continuum ending at the Compton edge, 2E²/(mₑc² + 2E), and photons scattered back from behind the source make a backscatter peak near E/(1 + 2E/mₑc²): 477.3 and 184.3 keV for 661.7 keV.
- The spectrometer measures pulse height, not energy. The HV and amplifier gain set channels per keV; a fit E = a + b·ch through known lines turns channels into energy. Change the HV or gain and the calibration is gone.
- The resolution FWHM/E falls with energy, roughly as 1/√E, because the pulse height comes from a number of photoelectrons that grows in proportion to E.
- Count rates in a photopeak follow the solid angle (close to inverse square far from the crystal) and fall as e^(−μx) through an absorber, with μ ≈ 1.25 cm⁻¹ for 662 keV photons in lead.

## Before class

Students should know the photoelectric effect, the Compton formula E′ = E/(1 + (E/mₑc²)(1 − cos θ)), exponential attenuation and √N counting errors. Use the **×100** clock speed and a **Preset live** time to keep runs short. Every spectrum is Monte Carlo with Poisson noise, so results vary by a few percent from run to run; students should record every run with **Add to table**, as in the real lab.

## Running it in class

1. **Cs-137: photopeak, Compton edge, backscatter.** It starts acquiring at once: press **Stop**, ask Q1, then let it run. Drag a region of interest across the photopeak (centroid near channel 340) and put the cursor on the Compton edge and the backscatter bump. Switch **Behind source** to **Lead brick**: the bump shrinks and lead x-rays appear near 75 keV.
2. **HV and gain setup.** Drag the HV knob or the **PMT high voltage** slider and watch the spectrum slide; read **Pulse height for 662 keV**. Ask Q2, then press **Co-60: two lines and a sum peak** (coarse gain 10). After step 3, change sources with the **Source** menu, not the presets, so the HV, gain and calibration stay fixed.
3. **Calibrate the detector.** Follow the preset hint: **Mark peak** on 661.7 keV, add the energy, switch to Co-60, **Clear**, acquire and mark 1173.2 and 1332.5 keV. Check the residuals on the **Calibration** plot and turn on the **keV** axis. Q3.
4. **Resolution against energy.** Add photopeak rows for Cs-137, Co-60, Na-22, Mn-54 and Ba-133 (356 and 81 keV) and open the **Resolution** plot. Ask Q4 before showing the slope.
5. **Inverse square.** Cs-137, no absorber, one ROI on the photopeak. Acquire 60 s live at several distances (drag the source holder or the **Source to detector face, d** slider), **Add to table** each time, and open the **Distance** plot. Ask Q5 before the 20 cm run.
6. **Lead attenuation.** The preset sets d = 10 cm and the ROI. Acquire, **Add to table**, add 2 mm of lead, **Clear**, acquire again, up to 20 mm. The **Attenuation** plot gives μ. Q6.
7. **Identify an unknown.** The calibration is already loaded. Students measure each photopeak energy, compare with the Model section's line list and check a Compton edge before **Reveal**. Q7.

## Questions

**Q1.** Predict: ¹³⁷Cs gives off essentially one gamma ray, 661.7 keV (plus barium x-rays near 32 keV). Will the spectrum be a single narrow peak at 661.7 keV? Sketch it and say where counts below the peak come from.

**Q2.** At 900 V and coarse gain 20 the rail shows a pulse height of 3.31 V for 662 keV. The ADC's full scale is 10 V over 1024 channels. (a) About which channel holds the 662 keV photopeak? (b) Is the ⁶⁰Co sum peak at 2505.7 keV on scale at this gain? (c) Keeping gain 20, what HV puts 2505.7 keV at full scale, given PMT gain ∝ V⁷? What does this say about HV stability?

**Q3.** After setup you find the 661.657 keV centroid at channel 170.7 and the 1332.492 keV centroid at channel 342.5. (a) Find a and b in E = a + b·ch. (b) Predict the channel of the ⁵⁴Mn line at 834.848 keV and check it with the demo. (c) What would a one point calibration through the origin do to your energies?

**Q4.** The FWHM at 662 keV is 7.0%. (a) If the resolution came only from the statistics of the photoelectrons, what FWHM/E would you expect at 1332.5 keV and at 81.0 keV? (b) Explain why counting statistics give FWHM/E ∝ 1/√E. (c) Is k in the **Resolution** fit FWHM/E ∝ Eᵏ exactly −1/2? Why not?

**Q5.** Predict: at d = 10 cm the photopeak net rate is about 125 per second. What will it be at 20 cm by the inverse square law? Measure it. Why is the drop smaller than a factor of 4?

**Q6.** For 661.7 keV photons in lead, μ = 1.25 cm⁻¹ (NIST XCOM). (a) What thickness of lead halves the photopeak rate? (b) With 125 per second and no lead, what rate do you expect behind 20 mm? (c) Why use the net photopeak counts rather than all the counts in the spectrum?

**Q7.** An unknown shows one clear photopeak, at 834 ± 1 keV, on a continuum that ends near 640 keV, with a small bump near 195 keV. Which source is it? Show that the 640 keV edge and the 195 keV bump belong to the same line.

## Common misconceptions

- **"Every peak is a gamma ray from the source."** The Compton edge, backscatter peak, lead and iodine x-rays, escape peaks and sum peaks all come from the detector and its surroundings. Only photopeaks mark source lines.
- **"Turning up the HV gives more counts."** It makes each pulse bigger, so the spectrum moves to higher channels. The photopeak area stays the same as long as the peak stays on scale.
- **"More channels means better resolution."** The FWHM in keV is set by the crystal and PMT; 2048 channels only spread the same peak over more bins.
- **"Lead stops gamma rays."** It attenuates them exponentially; 2 cm still passes about 8% at 662 keV.

## Physics behind the demo

- Photons from a point source on the axis are followed through a cylindrical NaI crystal with NIST XCOM cross sections: photoelectric absorption (iodine K x-rays can escape), Klein–Nishina Compton scattering on free electrons, and pair production. Electrons deposit their energy where they are made; coherent scattering in the crystal is left out. Lines are from NuDat 3; source decay is ignored.
- Backscatter is single Compton scattering in a thick backing 5 cm behind the source (a lower estimate). Absorbers follow the narrow beam law e^(−μx); scattering in absorbers, walls and table, and buildup, are not modeled. Coincidence summing is included for ⁶⁰Co and ²²Na; chance pileup is not.
- Resolution: Gaussian, FWHM/E = a/√E + 0.01, a set by the 662 keV slider; light output exactly proportional to energy. Electronics: pulse height 0.25 mV per keV × (V/900 V)⁷ × coarse × fine into a 10 V ADC with an 18 mV zero offset; nonparalyzable dead time τ = 8 µs (see it with **100 µCi** at d = 1 cm). The room background is assumed.
- The crystal is bare (no can, reflector, photomultiplier or source holder) and electrons never escape or radiate, so the peak to total ratio comes out higher than on a real detector. For a 3″ × 3″ crystal at 10 cm it is 2 to 17% above Heath's measured values (IDO-16880, 1964), more at high energy: 0.568 against 0.536 at 662 keV, 0.328 against 0.280 at 1837 keV. Peak energies and spectral shapes are right; absolute efficiencies are not those of a particular detector.
