# Chladni Patterns and Plate Resonances
Student laboratory · Waves / Acoustics

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/chladni.html)

## Goal

Find the resonances of a vibrating plate, relate the observed sand patterns to nodal lines, and test how resonance frequency changes with plate thickness.

## Background

For an ideal thin isotropic plate, flexural rigidity is

$$D=\frac{Eh^3}{12(1-\nu^2)},$$

where $$E$$ is Young's modulus, $$h$$ is thickness and $$\nu$$ is Poisson's ratio. The natural frequencies scale as

$$f_j\propto\frac{h}{\ell^2}\sqrt{\frac{E}{\rho(1-\nu^2)}},$$

for a fixed mode, shape and boundary condition. The Chladni patterns form because sand tends to collect near lines of small vibration amplitude. The demo uses a thin-plate modal model with free edges and a driven point force; real grains and supports can change the observed pattern.

## Before the lab

1. Why does sand tend to collect near nodes rather than antinodes?
2. If thickness doubles while other plate properties remain fixed, what happens to a given mode's frequency?
3. Why must you compare the same mode when testing a frequency scaling law?

## Safety

For a real Chladni plate, secure the driver and plate, avoid touching vibrating edges, keep granular material away from eyes and electronics, and use hearing protection if sound levels require it.

## Procedure

**Resonance survey.** Choose one steel square plate with a fixed thickness and driver position. Find at least five distinct resonances. Record the resonance frequency and sketch each nodal pattern, noting whether the shape is a cross, ring, star or another pattern. Use the same driver and damping conditions throughout.

**Thickness comparison.** Choose two or more plate thicknesses while keeping shape, material and the same identifiable mode fixed. Measure the mode frequency for each thickness and test the predicted proportionality to $$h$$.

**Material comparison.** Compare steel and aluminum for the same shape, thickness and identifiable mode. Explain the direction of the change using rigidity and density, not just Young's modulus.

**Using the virtual apparatus.** Find each resonance by varying the drive frequency and observing a stable nodal pattern after the grains settle. Record the actual frequency at the response peak, not merely the nearest named preset. Keep the plate shape, driver position and damping unchanged during each scan. Use the frequency controls on the function generator. The model does not currently provide a worksheet measurement export for this experiment, so record the frequency and pattern observations in the Data table yourself.

## Data

| Scan | Shape | Material | Thickness $$h$$ (mm) | Mode/pattern | Frequency $$f$$ (Hz) | Nodal sketch or description |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |

Keep the mode identity and driver position with every comparison.

## Analysis

1. Organize resonance frequencies by mode and sketch their nodal patterns.
2. For one mode, plot $$f$$ against thickness and check whether a straight line through the origin is reasonable.
3. Compare material-dependent frequencies with the scaling $$\sqrt{E/[\rho(1-\nu^2)]}$$ for fixed thickness and geometry.
4. Explain how changing the driver location may make some modes difficult to excite without changing their natural frequencies.

## Uncertainty

Frequency tuning resolution, finite resonance width and ambiguous mode identification limit precision. A change in sand pattern is not automatically a new normal mode. Real plates also have uncertain thickness, support conditions and material constants. Treat simulated readings as model results rather than physical measurements.

## Questions

1. Can two different modes have nearly the same resonance frequency?
2. Why does a point driver placed on a node excite that mode poorly?
3. Why should nodal patterns not be used as direct maps of stress?
4. Which assumptions of the thin-plate model might fail for a thick plate?

## What to hand in

Prelab answers, a resonance table with sketches, thickness and material comparisons, uncertainty discussion and answers to the questions. Identify simulated data.
