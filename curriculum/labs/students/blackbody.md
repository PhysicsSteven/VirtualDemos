# Blackbody Radiation — Student Virtual Laboratory
**Simulation:** [Open Blackbody Radiation](../../../demos/blackbody.html)  
**Duration:** 50–75 minutes · **Level:** introductory calculus based physics  
**Research question:** Can a thermal spectrum be used to determine temperature?

## Learning objectives
1. State the assumptions of the model and identify measurable variables.
2. Gather a minimum of five observations from the simulation without copying theoretical readouts.
3. Fit or graph the governing relationship, estimate a physical parameter, and interpret discrepancies.

## Background
The reference model is **the physical model described in the simulation**.

$$\lambda_{\rm peak}T = 2.897771955\times10^{6}\ \text{nm K}$$

**Important limitation:** The peak of $$B_\lambda$$ is not the same as the peak of $$B_\nu$$; state which spectral variable is used.

## Apparatus and setup
Open the linked simulation. Record the model/preset, initial settings, units, and any toggles. Identify which controls adjust **Temperature T in kelvin** and which displays permit measuring **Peak wavelength in nm**. If a requested setting or measurement is not directly supported, document the limitation; do not invent data. Disable overlays that reveal the expected answer during measurement when possible.

## Procedure
1. Before running the simulation, sketch or state the expected relationship between the controlled and measured quantities.
2. Choose an initial configuration compatible with the assumptions above; record all fixed parameters.
3. Set the independent variable to the first of five values. Allow the system to settle or complete the relevant cycle; measure the response.
4. Repeat for four additional settings, keeping all other controls fixed. Record at least one repeated measurement where stochastic variation or manual measurement matters.
5. Export data if the simulation offers it; otherwise enter values in the table below.
6. Produce a labeled graph with units, a model fit, and residuals or percentage differences.
7. Enable theory overlays only after your first analysis and compare with the expected relationship.

## Data sheet
| Trial | Temperature $$T$$ in kelvin | Peak wavelength in nm | Measurement method / uncertainty |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |

## Analysis
**Recommended graph/fit:** Plot $$\lambda_{\rm peak}$$ against $$1/T$$; the slope is Wien's displacement constant in nm K.

Calculate the physical quantity implied by the slope or fit parameters. Show units and at least one worked calculation. If the simulation is deterministic, estimate uncertainty from display resolution, cursor placement, or model sensitivity rather than inventing random error.

## Questions
1. Which assumptions were required for the reference equation?
2. What does the graph slope or fitted parameter mean physically?
3. Which display choices could bias your measurement?
4. Does the discrepancy indicate random uncertainty, numerical error, or a model limitation? Defend your classification.
5. What result would falsify your prediction?

## Extension
Integrate the spectral curve numerically and test the Stefan–Boltzmann $$T^4$$ scaling.

## Submission
Submit the completed data sheet, labeled graph, parameter estimate with units, comparison to theory, and a 150–250-word conclusion. Cite the simulation version/commit if provided.
