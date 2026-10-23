# Measuring Viscosity with a Falling Ball
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§6.4 and 14.7. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/viscometer.html)

## Goal

Determine a liquid's viscosity from falling-ball timings. Test how tube walls and the limits of Stokes' law affect the result.

## Background

For slow motion of a small sphere through a viscous liquid, Stokes drag is $$3\pi\eta d v$$, where $$d$$ is diameter and $$\eta$$ is dynamic viscosity. At terminal speed, weight minus buoyancy balances drag. In a very wide liquid,

$$v_\infty=\frac{(\rho_b-\rho_f)gd^2}{18\eta}.$$

Here $$\rho_b$$ and $$\rho_f$$ are ball and liquid densities. Tube walls slow the ball. For this virtual apparatus use $$\lambda = d/D$$, where $$D$$ is the tube's inside diameter, and the supplied model correction

$$\begin{gathered} K=\frac{1-0.75857\lambda^5}{D(\lambda)}, \qquad v_\infty\approx Kv, \\[4pt] D(\lambda)=1-2.1050\lambda+2.0865\lambda^3 \\ {}-1.7068\lambda^5+0.72603\lambda^6. \end{gathered}$$

A plot of $$Kv$$ against $$d^2$$ has slope $$c \approx (\rho_b-\rho_f)g/(18\eta)$$. Use SI units. Stokes' law requires a small Reynolds number, $$\mathrm{Re} = \rho_f v d/\eta$$, and a ball already near terminal speed at the timing marks. The wall correction is a slow-flow model; applying it at high $$\mathrm{Re}$$ does not repair the failure of Stokes' law.

## Before the lab

1. Why must buoyancy be subtracted from the ball's weight?
2. What happens to inferred viscosity if tube slowing is ignored?
3. How could a ball that is still accelerating between the marks bias a terminal-speed measurement?

## Safety

On a real bench, secure the tube, catch balls safely and wear the required eye protection. Avoid splashing liquids, clean spills promptly and follow the laboratory's handling and disposal instructions. Never drop a ball into a fragile tube without the approved apparatus.

## Procedure

**Slow-flow scan.** Measure ball and liquid densities, ball diameters and tube diameter. Time travel between marks 0.200 m apart after allowing enough distance for the ball to settle. In the simulation use glass balls in glycerol at diameters 1.0, 1.5, 2.0 and 2.5 mm. Begin with the 100 mm tube. Record every gate time and calculate $$v = 0.200/t$$.

**Wall check.** Repeat the same ball sizes in the 40 mm tube. Fit uncorrected $$v$$ against $$d^2$$ for each tube, then calculate $$K$$ for every row and fit $$Kv$$ against $$d^2$$ through the origin. Compare the viscosities before and after correction. Keep liquid and ball material unchanged.

**Model limits.** Record your estimates before revealing predictions. Use your inferred $$\eta$$ to estimate $$\mathrm{Re}$$ and retain only sufficiently slow-flow points; $$\mathrm{Re} \le 0.01$$ is a conservative criterion here. Try a larger ball and then a steel ball in water as diagnostic runs. Do not include these automatically in the viscosity fit. Explain what evidence suggests a failure of the slow-flow or terminal-speed assumptions.

**Unknown extension.** If assigned, measure a Mystery liquid with the same procedure. Use the displayed density and infer $$\eta$$, then recheck $$\mathrm{Re}$$. If the available ball sizes leave too few low-$$\mathrm{Re}$$ points, report that limitation rather than forcing a precise Stokes fit.

**Using the virtual apparatus.** Choose **Glycerol**, **Glass** and **100 mm** under **Tube inside diameter**. Enable **Blind: hide predictions and answers**. Set **Ball diameter d**, press **Take it out**, then **Drop the ball** and wait until both marks have been passed before **Capture reading**. Playback **×10** or **×100** shortens the wait without changing simulated gate seconds. Send each series with **Export to worksheet** before **Clear**; each series gets its own copy of the Data table. Repeat with **40 mm**. The built-in fit uses uncorrected speed and every matching row; calculate the wall-corrected fit yourself from CSV and exclude unsuitable points. After your estimate, turn Blind off to inspect $$\mathrm{Re}$$. For an unknown use **Mystery liquid: hide its viscosity** once and keep that realization: switching liquids or renewing Mystery changes the specimen and can mix incompatible rows if they are not cleared.

## Data

| Series | Liquid/ball | $$\rho_f$$ / $$\rho_b$$ (kg/m³) | $$D$$ (mm) | $$d$$ (mm) | $$t$$ (s) | $$v$$ (m/s) | $$K$$ | $$Kv$$ (m/s) | $$\mathrm{Re}$$ |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

Save separate slow-flow, tube-comparison and diagnostic runs. Record temperature; the virtual values represent 20 °C. State which rows you exclude and why.

## Analysis

1. Fit uncorrected $$v$$ against $$d^2$$ in each tube. Calculate the apparent viscosity and explain its tube dependence.
2. Fit $$Kv$$ against $$d^2$$ using the accepted low-$$\mathrm{Re}$$ points. Infer $$\eta$$ from the slope and compare the two tubes. Inspect residuals rather than judging agreement from the slope alone.
3. Calculate $$\mathrm{Re}$$ from your own inferred viscosity. If it invalidates the selected range, revise the fit or state that the approximation is inadequate.
4. Explain the large-ball/water diagnostic results. Separate wall effects, finite-$$\mathrm{Re}$$ drag and failure to reach terminal speed; a single anomalous time does not identify one cause uniquely.

## Uncertainty

The virtual gate time rounds to 0.01 s. Ball and tube diameters are specified model settings; on a real bench measure them carefully because diameter is squared and also enters $$K$$. For $$v = s/t$$, include mark-spacing and timing uncertainty. Propagate density, diameter and slope uncertainties into $$\eta$$ and assess the wall correction's model limitations. Temperature can strongly affect real viscosity. A fit with no injected noise still has rounding and approximation error; repeating an identical simulated state does not create independent precision.

## Questions

1. Why does a wider tube usually improve agreement with unbounded Stokes' law?
2. Why can a straight-looking graph still give a biased viscosity?
3. Why is a nylon ball in glycerol unsuitable for the same downward-fall procedure?
4. Why does multiplying speed by a wall factor not make a high-$$\mathrm{Re}$$ experiment a Stokes experiment?

## What to hand in

Prelab answers, settings and CSV files, raw and corrected fits with residuals, viscosity estimates and uncertainty, Reynolds-number checks and excluded-row reasoning, diagnostic observations, and answers to the questions. Identify simulated data.
