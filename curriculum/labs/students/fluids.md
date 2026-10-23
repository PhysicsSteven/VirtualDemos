# Pressure, Buoyancy and Flow
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§14.1–14.6. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/fluids.html)

## Goal

Infer liquid density from pressure, test Archimedes' principle and compare continuity with Bernoulli's equation.

## Background

At depth $$h$$ in a liquid of density $$\rho$$ (§14.1), gauge pressure is

$$P-P_{atm}=\rho gh.$$

The buoyant force equals the weight of displaced liquid (§14.4):

$$F_B=\rho gV_{displaced}.$$

For steady incompressible flow (§§14.5–14.6),

$$\begin{gathered} A_1v_1=A_2v_2, \\[4pt] P+\frac12\rho v^2+\rho gy=\text{constant}. \end{gathered}$$

A horizontal constriction trades pressure for flow speed when energy losses are negligible.

## Before the lab

1. What are the slope and intercept of gauge pressure against depth?
2. How can a spring scale reading determine buoyant force?
3. If a pipe's diameter halves at fixed flow rate, by what factor does its speed change?

## Safety

Keep water away from electrical equipment. Secure real pressure tubing and hanging masses, use a spill tray, and do not handle mercury without an approved laboratory procedure.

## Procedure

**Pressure.** Record gauge pressure at five depths in one liquid, then repeat in a second liquid. Also compare absolute and gauge pressure at one depth.

**Buoyancy.** Measure the weight of a fully submerged supported block at several volumes, or immerse one block in several liquids. Record its weight in air and apparent weight in the liquid. Exclude contact with the bottom.

**Flow.** Use a horizontal Venturi tube. Hold inlet diameter and inlet speed fixed; vary throat diameter through at least five settings. Record the two diameters, flow rate and pressure-head readings. Avoid settings where cavitation or an empty standpipe prevents the required pressure measurement.

**Using the virtual apparatus.** Turn on **Blind: hide predictions and answers**. Use **Pressure grows with depth** and vary **Probe depth**, reading the depth ruler and pressure gauge. Compare **Gauge** and **Absolute**. For buoyancy choose **Weighing in water (Archimedes)** and **Spring scale**; wait for a settled reading before capture. For flow choose **Venturi tube** and vary **Throat diameter D₂**, keeping **Pipe diameter D₁** and **Inlet speed v₁** fixed. Read **Flow meter Q**, **Standpipe h₁** and **Standpipe h₂**. Press **Capture reading** and **Export to worksheet** for each investigation; **Your readings** shows the measured-data plot.

## Data

| Investigation/liquid | Depth $$h$$ (m) or diameters $$D_1, D_2$$ (m) | Pressure (Pa) or head $$h_1, h_2$$ (m) | Block volume (m³) | Air weight (N) | Scale reading (N) | $$Q$$ (m³/s) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Keep a separate copy for each part and label unused columns. Convert kPa, cm and L/s to SI before calculating.

## Analysis

1. Fit gauge pressure against depth and infer $$\rho$$ from $$\text{slope}/g$$.
2. Calculate $$F_B = W_\text{air} - T$$. Compare with displaced-liquid weight and, for a floating block, the displaced fraction with $$\rho_\text{block}/\rho_\text{liquid}$$.
3. Infer $$v_1$$ and $$v_2$$ from $$Q/A$$. Calculate the pressure difference from Bernoulli and compare with $$\rho g(h_1 - h_2)$$.
4. Explain which assumptions would fail for viscous flow, strong turbulence or cavitation.

## Uncertainty

Propagate depth, diameter and scale resolution. Areas depend on diameter squared, and the dynamic-pressure term depends on speed squared. Small differences between large pressure heads can be poorly resolved. Distinguish measurement resolution from the ideal model's omission of viscous losses. Do not treat a cavitation warning as another ordinary steady-flow data point.

## Questions

1. Why does hydrostatic pressure depend on depth rather than vessel shape?
2. Why does a submerged block feel lighter without losing mass?
3. Why does faster flow through a horizontal throat have lower static pressure in this model?
4. Does a higher absolute pressure necessarily mean a larger pressure difference driving flow?

## What to hand in

Prelab answers, raw data/CSV, density fit, buoyancy and Venturi calculations, uncertainty and answers to the questions. Identify simulated data.
