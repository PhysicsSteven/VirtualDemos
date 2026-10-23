# Finding the Elastic Properties of a Wire
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§12.3–12.4. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/stress-strain.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Using the demo.**

- Hang slotted masses from the tray under the wire; up and down arrows on the picture add or take off 0.1 kg (Shift: 1 kg).
- Capture stores the hanging mass and the dial gauge reading (to 0.001 mm), with the wire's diameter. The fit is a straight line of the load F = mg against ΔL; Y = slope × L / A. Use only loads below the yield point. The fit uses the rows from the wire now hanging; New wire starts afresh (the CSV keeps every row).
- Blind hides Young's modulus, the yield and breaking stresses, the stress and strain readouts, the material curve and Y from the fit, leaving the load, the diameter and the dial gauge. The Mystery metal is always blind about its own properties.

**What the demo models.**

- stress σ = F/A · strain ε = ΔL/L · Y = σ/ε (elastic)
- Model: an idealized stress against strain curve: straight to the yield stress, then hardening up to the tensile strength, breaking at the fracture strain; unloading follows a line parallel to the elastic one, leaving a permanent stretch. Values are typical for each metal; real samples vary. Necking, creep and the wire's own weight are ignored.

</details>

## Goal

Determine an unknown wire's Young's modulus from load and extension, then distinguish elastic stretching from permanent deformation.

## Background

A hanging load exerts force $$F = mg$$. For a wire of original length $$L$$ and diameter $$d$$,

$$A=\frac{\pi d^2}{4},\qquad \sigma=\frac{F}{A},\qquad
\epsilon=\frac{\Delta L}{L}.$$

Below yield, stress is proportional to strain: $$\sigma = Y\epsilon$$. Therefore a plot of $$F$$ against $$\Delta L$$ has slope $$YA/L$$, and

$$Y=\text{slope}\,\frac{L}{A}.$$

Use metres for extension when applying that formula. After yielding, unloading can leave a permanent extension. A wire that has already yielded is not the same initial specimen as a fresh wire. This model uses an idealized engineering stress–strain curve with smooth hardening; it does not model necking or every behavior of a real alloy. Bulk and shear moduli are outside this experiment.

## Before the lab

1. Predict how doubling diameter changes extension at the same load, length and material.
2. What are the units of the $$F$$-versus-$$\Delta L$$ slope and of Young's modulus?
3. How would you test whether a measured extension is elastic?

## Safety

A real stretched wire can snap. Use eye protection, secure the support, shield the wire and keep feet clear of hanging masses. Add loads gently and follow the instructor's load limit.

## Procedure

**Elastic measurements.** Measure the original length and diameter of a fresh wire. On real equipment, measure diameter at several positions and note the zero reading. Increase the load in small steps, recording mass and extension. Unload to check that the wire returns to its original length. Obtain at least six elastic points, including zero; do not include a point that leaves a permanent extension in your elastic fit.

**Diameter check.** Repeat the elastic measurements with a fresh wire of the same material but a second diameter. Compare the two fitted slopes and the moduli inferred from them. Keep each wire's data separate.

**Yielding.** Return to a fresh specimen at the first diameter. Increase the peak load, unload fully, and record the residual extension. Start with small loads, then use smaller increments near the first detectable permanent set. Bracket the onset between the largest peak load that returned to zero and the first that did not. Once it yields, do not use subsequent loading points as fresh-wire elastic data. Stop after detecting a clear permanent set; fracture is unnecessary.

**Using the virtual apparatus.** Investigate a fresh Mystery metal wire 2.000 m long and 0.60 mm in diameter. Measure loaded extension at 0, 1, 2, 3, 4 and 5 kg, then remove the load and check for residual extension. Repeat with a fresh 0.80 mm wire, keeping the specimens' measurements separate. For yielding, begin with another fresh 0.60 mm wire, increase the peak mass in small steps and fully unload after each peak. Record the residual extension by hand and bracket the first permanent set. A new wire starts a new fit in the demo but does not clear earlier readings, so send each specimen's series to the worksheet and clear before the next; each then gets its own copy of the Data table. Keep the material properties hidden until your modulus and yield estimates are recorded.

## Data

| Specimen/cycle | $$d$$ (mm) | $$L$$ (m) | Peak/load mass (kg) | Loaded $$\Delta L$$ (mm) | Unloaded $$\Delta L$$ (mm) | Elastic/set |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Save each elastic series separately. For yield cycles, pair each peak load with its subsequent unloaded reading.

## Analysis

1. Convert masses to forces and fit $$F$$ against $$\Delta L$$ for each elastic series. Report slope, intercept and residuals. Convert extension to metres before calculating $$Y$$, or explicitly convert a slope in N/mm to N/m.
2. Compare the two estimates of $$Y$$. Test whether the slope ratio agrees with the squared diameter ratio.
3. Convert the two peak loads bracketing permanent set to stresses. Report a yield-onset interval rather than an exact material constant from a coarse step.
4. Explain the difference between total extension under load and residual extension after unloading. Distinguish the operational detection threshold from an exact yield stress.

## Uncertainty

The virtual dial rounds to 0.001 mm. Diameter controls are specified settings in the ideal model; their 0.05 mm adjustment step is not random measurement error. For a real wire, estimate diameter uncertainty from the measuring tool and variation along the wire. Since $$A$$ depends on $$d^2$$, its fractional uncertainty is approximately twice that of diameter. Include length and slope uncertainty in $$Y$$. A tiny fit error does not eliminate calibration errors. For yielding, use load-step brackets and the smallest detectable residual extension; repeated exact simulation readings do not supply random scatter.

## Questions

1. Why do thicker wires have steeper $$F$$-versus-$$\Delta L$$ graphs but not necessarily larger Young's moduli?
2. Can a material be stiff yet have a low yield stress?
3. Why can an unloaded yielded wire remain longer even though its stress is zero?
4. Why should you avoid fitting one straight line through elastic and plastic loading points?

## What to hand in

Prelab answers, wire dimensions, a separate copy of the data table for each elastic series, both fits with residuals, Young's modulus estimates and uncertainty, the yield-onset bracket with unloading evidence, and answers to the questions. Identify simulated data.
