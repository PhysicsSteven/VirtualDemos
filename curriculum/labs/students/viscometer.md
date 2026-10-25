# Measuring Viscosity with a Falling Ball
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§6.4 and 14.7. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/viscometer.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Using the demo.**

- Capture stores the liquid, ball, tube and the gate time between the marks (0.01 s); $$v = (0.200\ \text{m})/t$$. Stokes' law predicts $$v \propto d^2$$, so plot $$v$$ against $$d^2$$ for one liquid, ball and tube: $$\eta = (\rho_b - \rho_f)g/(18\times\text{slope})$$. The fit uses the rows that match the current settings.
- Blind hides $$\eta$$, the Stokes prediction, the Reynolds number and the fitted $$\eta$$, leaving the timer and the densities. The Mystery liquid always hides its $$\eta$$.

**What the demo models.**

- Stokes: $$F = 6\pi\eta r v$$; $$v_t = 2(\rho_b - \rho_f)g r^2/(9\eta)$$
- Model: drag $$F = 6\pi\eta r v\times K(d/D)\times C_D\,N_R/24$$, with the standard drag curve of Clift, Grace and Weber (Oseen's $$1 + 3\,N_R/16$$ below $$N_R = 0.01$$; above $$N_R = 1.2\times10^4$$ the drag coefficient is held at its value there, within 3% of the curve for the fastest ball here) and Haberman and Sayre's wall factor $$K$$ for a sphere on the axis of a tube in slow flow (the $$K$$ you apply). At higher $$N_R$$ the walls matter less: the factor is weakened following Di Felice (1996), whose fit covers $$N_R$$ up to about 200. The ball's motion includes buoyancy and the added mass $$\tfrac{1}{2}\rho_f V$$. Densities in kg/m³: steel 7800, glass 2500, nylon 1140. Liquids at 20 °C: glycerol 1261 and $$\eta = 1.41$$ Pa·s; castor oil 961 and 0.986 Pa·s; motor oil (typical SAE 30) 875 and 0.29 Pa·s; water 998 and 1.00 mPa·s.

</details>

## Goal

Determine a liquid's viscosity from falling ball timings. Test how tube walls and the limits of Stokes' law affect the result.

## Background

For slow motion of a small sphere through a viscous liquid, Stokes drag is $$3\pi\eta d v$$, where $$d$$ is diameter and $$\eta$$ is dynamic viscosity. At terminal speed, weight minus buoyancy balances drag. In a very wide liquid,

$$v_\infty=\frac{(\rho_b-\rho_f)gd^2}{18\eta}.$$

Here $$\rho_b$$ and $$\rho_f$$ are ball and liquid densities. Tube walls slow the ball. For this virtual apparatus use $$\lambda = d/D$$, where $$D$$ is the tube's inside diameter, and the supplied model correction

$$\begin{gathered} K=\frac{1-0.75857\lambda^5}{D(\lambda)}, \qquad v_\infty\approx Kv, \\[4pt] D(\lambda)=1-2.1050\lambda+2.0865\lambda^3 \\ {}-1.7068\lambda^5+0.72603\lambda^6. \end{gathered}$$

A plot of $$Kv$$ against $$d^2$$ has slope $$c \approx (\rho_b-\rho_f)g/(18\eta)$$. Use SI units. Stokes' law requires a small Reynolds number, $$N_R = \rho_f v d/\eta$$, and a ball already near terminal speed at the timing marks. The wall correction is a slow flow model; applying it at high $$N_R$$ does not repair the failure of Stokes' law.

## Before the lab

1. Why must buoyancy be subtracted from the ball's weight?
2. What happens to inferred viscosity if tube slowing is ignored?
3. How could a ball that is still accelerating between the marks bias a terminal speed measurement?

## Safety

On a real bench, secure the tube, catch balls safely and wear the required eye protection. Avoid splashing liquids, clean spills promptly and follow the laboratory's handling and disposal instructions. Never drop a ball into a fragile tube without the approved apparatus.

## Procedure

**Slow flow scan.** Measure ball and liquid densities, ball diameters and tube diameter. Time travel between marks 0.200 m apart after allowing enough distance for the ball to settle. In the simulation use glass balls in glycerol at diameters 1.0, 1.5, 2.0 and 2.5 mm. Begin with the 100 mm tube. Record every gate time and calculate $$v = 0.200/t$$.

**Wall check.** Repeat the same ball sizes in the 40 mm tube. Fit uncorrected $$v$$ against $$d^2$$ for each tube, then calculate $$K$$ for every row and fit $$Kv$$ against $$d^2$$. Compare the viscosities before and after correction. Keep liquid and ball material unchanged.

**Model limits.** Record your estimates before revealing predictions. Use your inferred $$\eta$$ to estimate $$N_R$$ and retain only sufficiently slow flow points; $$N_R \le 0.01$$ is a conservative criterion here. As diagnostic runs, time a 6.0 mm glass ball in glycerol in the 40 mm tube and a 2.0 mm steel ball in water in the 100 mm tube, and send them to the worksheet as a third series. Do not include these automatically in the viscosity fit. Explain what evidence suggests a failure of the slow flow or terminal speed assumptions.

**Unknown extension.** If assigned, measure a Mystery liquid with the same procedure. Use the displayed density and infer $$\eta$$, then recheck $$N_R$$. If the available ball sizes leave too few points at low $$N_R$$, report that limitation rather than forcing a precise Stokes fit.

**Using the virtual apparatus.** Start with glass balls in glycerol and a tube of 100 mm inside diameter, with predictions hidden. Time the 0.200 m gate interval for ball diameters 1.0, 1.5, 2.0 and 2.5 mm, allowing each ball to pass both marks. Repeat the same series in a 40 mm tube. Faster playback may shorten the wait, but the recorded gate times remain physical seconds. Send each tube series to the worksheet before clearing, so each gets its own copy of the Data table. Calculate the wall correction and exclude points whose Reynolds number is too high yourself: the demo's own fit uses uncorrected speeds and all matching rows. Use larger balls or steel in water only to check the limits of the model. If assigned a mystery liquid, keep the same specimen throughout; choosing a new mystery realization can mix incompatible measurements.

## Data

| Series | Liquid/ball | $$\rho_f$$ / $$\rho_b$$ (kg/m³) | $$D$$ (mm) | $$d$$ (mm) | $$t$$ (s) | $$v$$ (m/s) | $$K$$ | $$Kv$$ (m/s) | $$N_R$$ |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

Save separate slow flow, tube comparison and diagnostic runs. Record temperature; the virtual values represent 20 °C. State which rows you exclude and why.

## Analysis

1. Fit uncorrected $$v$$ against $$d^2$$ in each tube. Calculate the apparent viscosity and explain its tube dependence.
2. Fit $$Kv$$ against $$d^2$$ using the accepted points at low $$N_R$$. Infer $$\eta$$ from the slope and compare the two tubes. Inspect residuals rather than judging agreement from the slope alone.
3. Calculate $$N_R$$ from your own inferred viscosity. If it invalidates the selected range, revise the fit or state that the approximation is inadequate.
4. Explain the results of the large ball and water diagnostics. Separate wall effects, drag at finite $$N_R$$ and failure to reach terminal speed; a single anomalous time does not identify one cause uniquely.

## Uncertainty

The virtual gate time rounds to 0.01 s. Ball and tube diameters are specified model settings; on a real bench measure them carefully because diameter is squared and also enters $$K$$. For $$v = s/t$$, include mark spacing and timing uncertainty. Propagate density, diameter and slope uncertainties into $$\eta$$ and assess the wall correction's model limitations. Temperature can strongly affect real viscosity. A fit with no injected noise still has rounding and approximation error; repeating an identical simulated state does not create independent precision.

## Questions

1. Why does a wider tube usually improve agreement with unbounded Stokes' law?
2. Why can a straight looking graph still give a biased viscosity?
3. Why is a nylon ball in glycerol unsuitable for the same downward fall procedure?
4. Why does multiplying speed by a wall factor not make an experiment at high $$N_R$$ a Stokes experiment?

## What to hand in

Prelab answers, settings and CSV files, raw and corrected fits with residuals, viscosity estimates and uncertainty, Reynolds number checks and excluded row reasoning, diagnostic observations, and answers to the questions. Identify simulated data.
