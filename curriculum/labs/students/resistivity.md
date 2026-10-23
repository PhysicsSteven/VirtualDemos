# Measuring a Wire's Resistivity
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§9.3–9.4. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/resistivity.html)

## Goal

Find an unknown wire's resistivity from voltage and current measurements. Test how resistance depends on length, diameter and temperature.

## Background

Resistance describes a particular piece of wire; resistivity describes its material at a specified temperature. For a uniform cylindrical wire,

$$R=\frac{V}{I}=\rho\frac{L}{A},\qquad A=\frac{\pi d^2}{4}.$$

At one temperature and diameter, a graph of $$R$$ against $$L$$ has slope $$\rho/A$$. Over a suitable temperature interval, a useful model is

$$R(T)=R_{20}[1+\alpha(T-20\,^{\circ}\mathrm C)].$$

If $$R = b + kT$$ with $$T$$ in degrees Celsius, then $$R_{20} = b + 20k$$ and $$\alpha = k/R_{20}$$. Temperature differences have the same numerical value in kelvins and Celsius degrees. This experiment assumes uniform temperature, a uniform cross section and negligible contact resistance. The virtual Mystery wire has synthetic material properties; identifying a real alloy is not the goal.

## Before the lab

1. Predict what happens to resistance if length doubles or diameter doubles.
2. Why would changing temperature during a length scan bias the result?
3. In an $$R$$-versus-$$T$$ fit, why is the intercept at 0 °C different from $$R_{20}$$?

## Safety

For a real wire bench, use the assigned current limit, switch off before moving connections and avoid touching a heated wire. Do not heat an unsupported wire or improvise a temperature bath. Follow the instructor's electrical and thermal safety procedures.

## Procedure

**Length scan.** Measure wire diameter and temperature. Use separate voltage-sensing contacts inside the current contacts when the real apparatus permits. At fixed temperature and current, measure $$V$$ and $$I$$ at six lengths from 0.10 to 1.00 m. Keep the same wire and diameter. Repeat one length at a second current to test whether $$V/I$$ is unchanged.

**Diameter comparison.** At the same temperature, repeat the length scan with a second diameter of the same material. Compare the slopes before calculating both resistivities. A change in resistance alone does not establish a change in material.

**Temperature scan.** Use one diameter and a fixed length. On a real bench, wait for thermal equilibrium before each reading. Record at least six temperatures over the instructor-approved range, including a reading at 20 °C. Fit $$R$$ against $$T$$ and infer $$\alpha$$. In the virtual apparatus, use 0, 20, 40, 60, 80 and 100 °C. This is a prescribed linear model, not a test of whether an actual alloy remains linear over every temperature range.

**Using the virtual apparatus.** Investigate the Mystery wire with predictions and answers hidden. Start with a 0.405 mm diameter, 0.20 A and 20 °C. Record readings at six lengths from 0.10 to 1.00 m and determine the slope of $$R$$ against $$L$$. Repeat the length scan with the 0.255 mm wire at the same current and temperature. For the temperature scan, keep that diameter and $$L = 0.500\ \text{m}$$ and measure at 0, 20, 40, 60, 80 and 100 °C; graph $$R$$ against $$T$$. Send each scan to the worksheet before clearing, so each gets its own copy of the Data table; the demo's fit uses only rows matching the current material, diameter and either temperature or length. The Mystery setting hides calculated material properties.

## Data

| Scan | Material | $$d$$ (mm) | $$T$$ (°C) | $$L$$ (m) | $$I$$ (A) | $$V$$ (V) | $$R = V/I$$ (Ω) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Copy this table for each scan. Record real meter ranges/resolutions and diameter measurements alongside it. Save the settings and CSV files.

## Analysis

1. Fit $$R$$ against $$L$$ for each diameter. Report slope, intercept and residuals; use the measured diameter to find $$\rho$$ at 20 °C.
2. Compare the slope ratio with the inverse squared diameter ratio. Compare the two inferred resistivities and the repeated-current check.
3. Fit $$R$$ against $$T$$. Calculate $$R_{20}$$ from the fitted line, then $$\alpha$$. Compare fitted $$R_{20}$$ with the direct 20 °C reading.
4. Explain what a nonzero length-fit intercept could mean on a real bench. Distinguish a possible lead/contact effect from random reading scatter.

## Uncertainty

The virtual voltmeter records four significant figures; current is the set value recorded to three significant figures. Length adjusts in 0.005 m steps and temperature in 5 °C steps. Those prescribed settings are exact within the model; adjustment steps are not independent random errors. On a real bench, use tool resolution, calibration and diameter variation. Area uncertainty is approximately twice the fractional diameter uncertainty. Propagate voltage/current uncertainty into $$R$$ and include slope and diameter uncertainty in $$\rho$$. For $$\alpha$$, the fitted slope and $$R_{20}$$ are correlated; a fit error alone does not include temperature calibration or model error. Do not invent scatter by repeatedly recording the same simulated state.

## Questions

1. How can two wires have different resistances but the same resistivity?
2. Why can a real wire's resistance change when supply current is raised, even if the material is locally ohmic?
3. Why is four-wire sensing useful for a low-resistance specimen?
4. Can a near-zero $$\alpha$$ prove that a material is a perfect conductor?

## What to hand in

Prelab answers, settings and data/CSV files, both length fits and the temperature fit with residuals, resistivity and temperature coefficient with uncertainty, the diameter/current comparisons, and answers to the questions. Identify simulated data.
