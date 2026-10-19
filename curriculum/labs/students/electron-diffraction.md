# Electron Diffraction from Graphite
Student laboratory · modern physics

[Open the virtual diffraction tube](https://physicssteven.github.io/VirtualDemos/demos/electron-diffraction.html)

## Goal

Use the rings made by an electron beam to measure two atomic plane spacings in graphite.

## Background

An electron accelerated through voltage V has momentum p and de Broglie wavelength λ = h/p. Including the small relativistic correction,

$$\lambda=\frac{h}{\sqrt{2meV\left(1+\frac{eV}{2mc^2}\right)}}.$$

The graphite contains many small crystals with different orientations. Some planes meet Bragg's condition:

$$2d\sin\theta=\lambda.$$

Scattered electrons leave at angle 2θ to the beam. Many crystal orientations produce a cone, and the cone makes a ring on the screen. Each of the two main rings comes from a different plane spacing d.

For small angles, the diameter D of a ring is approximately

$$D\approx\frac{2L\lambda}{d},$$

where L is the distance from graphite to the screen. Measuring D at several voltages lets us find d.

## Before the lab

1. What happens to the electron wavelength when the accelerating voltage increases?
2. Why does a powder or polycrystalline film make rings rather than isolated spots?
3. If you use an L that is too large, will your calculated d be too large or too small?

## Safety

The real tube uses high voltage and has a fragile glass bulb. Change connections with the power off. Follow the department's supply and handling instructions, and keep measuring tools from pressing on the glass.

## Procedure

**Measure the geometry.** Find L for the tube you are using and record its uncertainty. Do not copy a value from a different apparatus: handouts quote values from 125 to 135 mm. Record the screen radius R if using the curved-screen correction. Decide whether you are measuring a chord straight across the ring or an arc along the glass.

**Take readings.**
1. Set the accelerating voltage near 2.50 kV. Read the actual meter value.
2. Measure the inner and outer ring diameters. Use the center of each bright band and estimate how much the band width affects the reading.
3. Repeat near 3.00, 3.50, 4.00, 4.50 and 5.00 kV, within the physical tube's allowed range.
4. Measure one low-voltage and one high-voltage setting again after repositioning the measuring tool.
5. At one voltage, compare arc and chord readings if both tools are available.
6. Bring a magnet near the tube neck and reverse its pole. Describe what happens to the whole pattern. Move the magnet away before taking more diameter readings.

**Using the virtual apparatus.** Record the **Tube seed**, turn on **Blind**, click **Clear**, and leave **Show the true ring positions** off. Use **Ruler** for an arc or **Caliper** for a chord. At each voltage position both marks for **Inner D₁**, then both for **Outer D₂**, before clicking **Capture reading**. Use **Export CSV** at the end. The virtual geometry is L = 125 mm and R = 65 mm; enter these for the main analysis. Changing the analysis entries does not change the virtual tube. Keep the magnet at its maximum distance during measurements.

## Data

| Trial | Meter (kV) | Tool: arc or chord | D₁ (mm) | D₂ (mm) | Diameter uncertainty (mm) |
|---|---|---|---|---|---|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| | | | | | |

Add rows for all voltages and repeats. Record L, R and their uncertainties above the table.

## Analysis

1. Convert kV to V and calculate λ for each row. Plot each ring diameter against λ. Find d from the slope of the small-angle relation.
2. Recalculate using the spherical screen. For an arc, α = D/(2R); for a chord, α = asin[D/(2R)]. Then

$$\psi=\operatorname{atan2}\left(R\sin\alpha,\ R\cos\alpha+L-R\right),\qquad d=\frac{\lambda}{2\sin(\psi/2)}.$$

3. Use **Exact** and **Relativistic λ** to check your calculation. Compare the two inferred spacings and their ratio with the graphite values after finishing your measurements.
4. Analyze the same data with L = 130 and 135 mm. How much does the assumed geometry change d? Restore the measured L for your final result.

## Uncertainty

Estimate a diameter interval from the ring width and repeated placements. Include the voltage reading and the uncertainties in L and R. One useful check is to recalculate d at the upper and lower limits of these inputs. The same error in L affects every row, so more voltage settings do not remove it. Compare this geometry effect with the difference between the small-angle and exact results.

## Questions

1. Why do the rings get smaller as the voltage rises?
2. Why must arc and chord diameters be analyzed differently?
3. What does the magnet test tell you about the particles making the rings?
4. Why should you not assume the two rings are the first and second orders of one plane spacing?

## What to hand in

Prelab answers, geometry measurements, the data table and CSV, diameter plots and fits, both spacings with uncertainty, the L comparison, and answers to the questions. Label virtual data and give the seed.
