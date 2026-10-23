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

for a fixed mode, shape and boundary condition. The Chladni patterns form because sand tends to collect near lines of small vibration amplitude. The demo uses a thin plate modal model with free edges and a driven point force; real grains and supports can change the observed pattern.

## Before the lab

1. Why does sand tend to collect near nodes rather than antinodes?
2. If thickness doubles while other plate properties remain fixed, what happens to a given mode's frequency?
3. Why must you compare the same mode when testing a frequency scaling law?

## Safety

For a real Chladni plate, secure the driver and plate, avoid touching vibrating edges, keep granular material away from eyes and electronics, and use hearing protection if sound levels require it.

## Procedure

**Resonance survey.** Use a steel square plate 1.00 mm thick, driven at the center by the wave driver. Find the first five resonances. Record the resonance frequency and sketch each nodal pattern, noting whether the shape is a cross, ring, star or another pattern. Use the same driver and damping conditions throughout.

**Thickness comparison.** Change to the point force driver, which measures the plate's own frequencies (the wave driver's moving mass on the post shifts them). Pick one mode from the survey and measure its frequency at thicknesses of 0.50, 1.00, 1.50 and 2.00 mm. Then measure the same mode at 0.50 and 2.00 mm with the wave driver.

**Material comparison.** With the point force driver, compare steel and aluminum for the same mode at 1.00 mm. Explain the direction of the change using rigidity and density, not just Young's modulus.

**Using the virtual apparatus.** Next resonance and Previous resonance jump to the exact peak; you can also tune by hand and watch the sand settle. Record a reading at each resonance: it records the plate, the drive and the frequency, and names the nearest mode when the frequency is within that resonance's width. Sketch the pattern yourself. Changing the shape, metal or thickness keeps the frequency, so find the resonance again after each change. Send each scan to the worksheet before clearing, so each scan gets its own copy of the Data table.

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
2. For one mode, plot $$f$$ against thickness for the point force driver and check whether a straight line through the origin is reasonable. Compare the wave driver's frequencies with it, and explain the difference using the driver's moving mass on the post. Why is the difference larger for the thin plate?
3. Compare how the frequencies depend on material with the scaling $$\sqrt{E/[\rho(1-\nu^2)]}$$ for fixed thickness and geometry.
4. Explain how changing the driver location may make some modes difficult to excite without changing their natural frequencies.

## Uncertainty

Frequency tuning resolution, finite resonance width and ambiguous mode identification limit precision. A change in sand pattern is not automatically a new normal mode. Real plates also have uncertain thickness, support conditions and material constants. Treat simulated readings as model results rather than physical measurements.

## Questions

1. Can two different modes have nearly the same resonance frequency?
2. Why does a point driver placed on a node excite that mode poorly?
3. Why should nodal patterns not be used as direct maps of stress?
4. Which assumptions of the thin plate model might fail for a thick plate?

## What to hand in

Prelab answers, a resonance table with sketches, thickness and material comparisons, uncertainty discussion and answers to the questions. Identify simulated data.
