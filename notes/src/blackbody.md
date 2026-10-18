---
title: Blackbody Radiation
level: Intro astronomy (non-majors and majors); modern physics (Planck and the ultraviolet catastrophe)
time: 15 to 25 minutes
---
## What students should come away with

- A hotter body emits more at every wavelength. Two Planck curves never cross, so a cooler star is fainter per square meter at all wavelengths, red included.
- The peak moves to shorter wavelength as the temperature rises: λmax = b/T, with b = 2.898×10⁻³ m·K (Wien's law).
- The power per square meter grows as σT⁴, so the luminosity of a star, L = 4πR²σT⁴, depends on its size as well as its temperature.
- Star colors run red, orange, yellow, white, blue. The Sun peaks in the green yet looks white, and no star looks green, because the curve is broad.
- The classical Rayleigh-Jeans law matches only at long wavelengths. Planck's quanta, E = hf, are what turn the curve over at short wavelengths.

## Before class

Students need the idea of a spectrum and the order of the visible colors; wavelength in nm and μm helps. For majors, Stefan-Boltzmann and Wien can be introduced here. Turn on **Projector** so the readouts are legible. Both sliders are logarithmic. **Human body**, **Light bulb** and **Cosmic background** are not stars, so the **Luminosity** readout shows a dash until you move R.

## Running it in class

1. **Sun.** Ask Q1 before touching anything. Point out the peak near 502 nm, inside the visible band, and the **Visible share** of 43.8%. The disk in the strip below is nearly white, although the **Traditional color** readout says yellow.
2. **Drag the peak marker** to the left. Tick **Lock axes** first so the curve visibly grows. Doubling T from 5772 K to about 11,540 K halves the peak to 251 nm and multiplies the flux by 16.
3. **Betelgeuse**, then **Pin this curve**, then **Sun**. Switch **B** to **Log**: the Sun's curve lies above Betelgeuse's everywhere. Yet the **Luminosity** readout for Betelgeuse is about 87,000 L☉. Ask where that comes from (Q2).
4. **Sirius A** and **Rigel.** Both peak in the ultraviolet; the visible part is nearly flat for Sirius and tilts toward blue for Rigel. Read the **Why no green stars?** panel aloud and ask Q3.
5. **Human body** and **Light bulb.** The peak sits in the infrared. Only about 8% of a 2800 K filament's power is visible light. For the human body the **Visible share** readout is about 5×10⁻²¹ %: not zero, but far too small for any eye.
6. **Rayleigh-Jeans** (for majors and physics students). Turn the layer on at the Sun. It agrees at long wavelengths and runs off the top at short ones. Finish with **Cosmic background** (Q6).

## Questions

**Q1.** Predict: if the Sun's surface were twice as hot, what would happen to the wavelength of the peak, and to the power each square meter emits? Would the color change? Then drag the peak to check.

**Q2.** Betelgeuse has a surface temperature of 3600 K and a radius about 760 times the Sun's (T☉ = 5772 K). Find its peak wavelength, the power per square meter compared with the Sun's, and its luminosity in L☉. Explain how a star that is fainter per square meter can outshine the Sun.

**Q3.** The Sun's curve peaks near 500 nm, in the green. Why does the Sun not look green, and why does no temperature give a green star?

**Q4.** Use Wien's law to find the temperatures at which the peak sits at the red end of the visible band (750 nm) and at the violet end (380 nm). Check both by dragging the peak. Which of the preset stars peak inside the visible band?

**Q5.** In the Sun preset, turn on **Rayleigh-Jeans**. At what wavelengths do the two curves agree, and where do they disagree? What would the classical law predict for the total power, and what assumption did Planck add to fix it?

**Q6.** The cosmic background was released when the universe was about 1100 times smaller and hotter than today (it is 2.725 K now). What were its temperature and peak wavelength then? Set that temperature in the demo. What would that light have looked like to a human eye?

## Common misconceptions

- **"Red stars are hotter, because red means hot."** In everyday labels red means hot and blue means cold; for glowing bodies it is the reverse. Red stars are the coolest, blue the hottest.
- **"The Sun is yellow."** Its light is close to white. It looks yellow or orange near the horizon because the atmosphere scatters blue light out of the beam.
- **"A cooler star gives off more red light than a hotter one."** Per square meter, a hotter body gives more at every wavelength, red included. It just gives much more blue.
- **"A star's color tells you how bright it is."** Color gives T, and T gives the power per square meter. The luminosity also needs the radius, as Betelgeuse shows.
- **"Objects at room temperature do not radiate."** They do, near 10 μm, in the infrared. That is what thermal cameras record.

## Physics behind the demo

- The curve is Planck's law per unit wavelength, B_λ = (2hc²/λ⁵) / (e^(hc/λkT) − 1), plotted in W·m⁻²·sr⁻¹·nm⁻¹. The peak marker is Wien's law λmax = b/T.
- **Flux from the surface** is σT⁴; **Luminosity** is 4πR²σT⁴ in units of L☉ = 3.828×10²⁶ W, with R from the **Star radius R** slider (0.01 to 1000 R☉).
- **Visible share** is the integral of B_λ from 380 to 750 nm divided by σT⁴/π. It peaks at about 47% near 7000 K.
- The dashed **Rayleigh-Jeans** curve is 2ckT/λ⁴, the classical result for the same T.
- **Spectral class** uses fixed temperature ranges (M 2400 to 3700 K up to O above 30,000 K). Real classes are defined by absorption lines, which this ideal blackbody does not have; T is the effective temperature.
- Colors come from integrating the curve against an analytic fit to the CIE 1931 eye response, converted to sRGB with a D65 white point (6500 K shows as white) and scaled to full brightness. The screen and the eye's adaptation change what you actually see, so the swatches are a guide, not a measurement.
- The **Temperature T** slider runs from 300 to 50,000 K. The **Cosmic background** preset at 2.725 K sits below its range.

## Going further

- Homework: a star has T = 4000 K and L = 100 L☉. Find its radius from L = 4πR²σT⁴, then set both sliders and check the **Luminosity** readout. Where would it sit on an HR diagram?
- Lab connection: measure the spectrum of an incandescent bulb at two voltages with a handheld spectrometer and watch the peak shift.
- History: Planck introduced energy quanta in 1900 to fit the measured spectrum; the term "ultraviolet catastrophe" came later, from Ehrenfest.
