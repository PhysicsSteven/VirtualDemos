# Photoelectric Effect — Measuring Planck's Constant
**Student edition · 75–90 minutes · calculus based introductory physics**  
[Open simulation](https://physicssteven.github.io/VirtualDemos/demos/photoelectric.html)

## Research question
Can measurements of stopping potential versus photon frequency recover Planck's constant independently of light intensity?

## Objectives
Calculate photon energy, work function and stopping potential; construct a linear fit to estimate $$h$$; distinguish photon flux from photon energy; identify limits of a simplified current–voltage model.

## Prelab
Derive $$eV_{\rm stop}=hf-\phi$$, with $$V_{\rm stop}$$ the **positive magnitude** of the negative retarding collector voltage. Explain why the slope of $$V_{\rm stop}$$ versus $$f$$ is $$h/e$$ and the intercept is $$-\phi/e$$. Convert a wavelength in nm to $$f$$ in Hz and $$E$$ in eV. Predict what happens to stopping voltage when power doubles at fixed wavelength.

## Controls and apparatus
The demo has **Measure h**, **Stopping voltage**, and **UV on zinc** presets, plus wavelength, light power, metal and collector voltage controls. **Record V₀** saves the positive magnitude of the negative collector voltage you set; it adds no random noise. First lower the collector voltage until the meter just reaches 0.00 nA. The demo warns if a recorded point still has current. **Export CSV** saves wavelength, frequency, stopping voltage magnitude, metal, power and meter reading. Wavelength steps are 1 nm, collector voltage steps are 0.01 V, and power is in µW. Turn off **Theory line and answers** during measurement to hide the theoretical endpoint and model curve.

## Part A — Threshold (15 min)
1. Select a metal with a low work function, such as Cs (2.14 eV). Hold power fixed.
2. Sweep wavelength from longer to shorter values until photoelectrons first appear. Record the threshold interval.
3. Calculate $$\lambda_{\rm threshold}=hc/\phi$$ and compare to the observed interval.
4. Change power at a wavelength below threshold. Explain why higher photon count does not create emission in the one photon model.

## Part B — Determine h (35 min)
1. Select **Cs** manually and press **Clear points**; keep Cs fixed. **Measure h** instead selects sodium and automatically adds six points using the same 0.01 V stopping search, so do not use it for a fresh Cs dataset. Turn off **Theory line and answers**.
2. Choose at least **eight** distinct wavelengths that are clearly above threshold (250, 275, 300, 325, 350, 400, 450 and 500 nm). Record actual wavelength, calculated frequency, and stopping potential magnitude. Avoid any wavelength that does not emit electrons.
3. For each wavelength, vary negative collector voltage until the displayed current first rounds to zero. Record the last nonzero and first zero settings as a bracket. Rounding to zero is not proof of exactly zero model current. If the interface gives the stopping voltage directly, record that value separately as a theory assisted check; do not silently treat it as independently measured.
4. Set the collector to the first zero current voltage in your bracket and press **Record V₀**. The recorded value is $$-V_{\rm collector}$$, without added noise. Repeat for each wavelength, then use **Export CSV**. Preserve the bracket endpoints in your manual table because they are not exported. Inspect the exported meter readings and discard or remeasure points recorded before zero current.
5. Plot $$V_{\rm stop}$$ (V) against $$f$$ (Hz). Fit $$V_{\rm stop}=mf+b$$. Compute $$h_{\rm fit}=e\cdot m$$ and $$\phi_{\rm fit}=-e\cdot b$$, reporting $$\phi$$ in eV. Compare with accepted $$h$$ and the chosen metal's displayed $$\phi$$.

| $$\lambda$$ (nm) | $$f$$ (Hz) | $$V_{\rm stop}$$ from $$I$$–$$V$$ (V) | $$V_{\rm stop}$$ recorded (V) | Estimated uncertainty (V) |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |

## Part C — Intensity versus stopping voltage (15 min)
At a fixed emitting wavelength, repeat the current–voltage measurement for three light power settings. Compare saturation current, stopping voltage and photon rate. Make a two column claim/evidence table distinguishing intensity effects from frequency effects.

## Model limitations
The source uses a simplified linear retarding voltage response,

$$I(V)=I_{\rm sat}\cdot\max\left(0,\ 1+\frac{V}{K_{\rm max}}\right)$$

for negative $$V$$, with $$K_{\rm max}$$ numerically in eV and $$V$$ in volts. This is not a universal experimental photocurrent curve; its shape depends on electron energy/angle distributions and electrode geometry. The endpoint (stopping voltage) remains a useful teaching model. Repeated recording at identical settings returns identical values. Resolution and the rounded current display, rather than random recording scatter, limit this measurement. Use each bracket midpoint for a separate estimate and its half width as a resolution bound; a rectangular uncertainty model gives standard uncertainty equal to the half width divided by $$\sqrt{3}$$. Treat the wavelength step consistently and discuss shared systematic effects. Do not estimate voltage uncertainty from repeat scatter alone.

For $$\lambda=400\ \text{nm}$$ on Cs, use three powers such as 20, 40 and 80 µW, return $$V$$ to 0 to read saturation current, then bracket stopping again. Record $$\lambda$$, power, $$I_{\rm sat}$$, last nonzero $$V$$ and first zero $$V$$.

## Questions
1. What is the physical meaning of a negative fitted intercept?
2. Why does frequency change the stopping potential but power does not?
3. How do uncertainties in $$\lambda$$ and $$V$$ propagate into $$h$$?
4. What experimental effects might broaden the apparent stopping point?
5. Why would using wavelengths below threshold spoil the regression?

## Submission
Threshold estimate, eight point data table, linear regression and residuals, $$h$$ and $$\phi$$ with units, intensity comparison, and limitations discussion.
