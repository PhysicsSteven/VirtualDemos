# Radioactive Decay — Student Virtual Laboratory
**Simulation:** [Open Radioactive Decay](../../demos/radioactive-decay.html)  
**Duration:** 50–75 minutes · **Level:** introductory calculus-based physics  
**Research question:** How can half-life be estimated from a stochastic decay process?

## Learning objectives
1. State the assumptions of the model and identify measurable variables.
2. Gather a minimum of five observations from the simulation without copying theoretical readouts.
3. Fit or graph the governing relationship, estimate a physical parameter, and interpret discrepancies.

## Background
The reference model is **the physical model described in the simulation**.

\[E[N(t)] = N0*2^(-t/t_half)\]

**Important limitation:** These are expected fractions, not exact results of a finite random sample. Repeat trials and report variability.

## Apparatus and setup
Open the linked simulation. Record the model/preset, initial settings, units, and any toggles. Identify which controls adjust **Elapsed time in units of half-life** and which displays permit measuring **Number of surviving nuclei**. If a requested setting or measurement is not directly supported, document the limitation; do not invent data. Disable overlays that reveal the expected answer during measurement when possible.

## Procedure
1. Before running the simulation, sketch or state the expected relationship between the controlled and measured quantities.
2. Choose an initial configuration compatible with the assumptions above; record all fixed parameters.
3. Set the independent variable to the first of five values. Allow the system to settle or complete the relevant cycle; measure the response.
4. Repeat for four additional settings, keeping all other controls fixed. Record at least one repeated measurement where stochastic variation or manual measurement matters.
5. Export data if the simulation offers it; otherwise enter values in the table below.
6. Produce a labeled graph with units, a model fit, and residuals or percentage differences.
7. Enable theory overlays only after your first analysis and compare with the expected relationship.

## Data sheet
| Trial | Elapsed time in units of half-life | Number of surviving nuclei | Measurement method / uncertainty |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |

## Analysis
**Recommended graph/fit:** Plot ln(N/N0) against t; slope equals -ln(2)/t_half.

Calculate the physical quantity implied by the slope or fit parameters. Show units and at least one worked calculation. If the simulation is deterministic, estimate uncertainty from display resolution, cursor placement, or model sensitivity rather than inventing random error.

## Questions
1. Which assumptions were required for the reference equation?
2. What does the graph slope or fitted parameter mean physically?
3. Which display choices could bias your measurement?
4. Does the discrepancy indicate random uncertainty, numerical error, or a model limitation? Defend your classification.
5. What result would falsify your prediction?

## Extension
Compare variance across repeated runs with the binomial prediction N0 p(1-p).

## Submission
Submit the completed data sheet, labeled graph, parameter estimate with units, comparison to theory, and a 150–250-word conclusion. Cite the simulation version/commit if provided.
