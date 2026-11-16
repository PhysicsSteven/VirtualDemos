# Spherical Capacitors, Polarization and Breakdown
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§8.1, 8.4, 8.5 and 10.5. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/capacitors.html?ws=capacitors-spheres)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Pull apart, connected; Pull apart, isolated; Slide in a dielectric; Water dielectric; Series and parallel; Energy in the field; Spherical capacitor; Sparks in air; Puncture a solid.

**Using the demo.**

- Drag the grips on the picture: the top plate's grip for the **Separation d**, the side grip for the **Plate area A**, the slab for **Inserted x/s**, and the battery up or down for the **Battery voltage V<sub>b</sub>**; click the battery's switch to connect or isolate it. Keys on the picture: ↑ ↓ d, ← → x/s, Page Up/Down A, + − V<sub>b</sub>, M connect.
- Square plates of side $$s$$, so $$A = s^2$$. Changing A counts like sliding one plate sideways to change the overlap: your hand does the work.
- Record reading pauses the sweep and stores the settings and the values shown on screen, rounded as displayed: d, x/s, C, Q and V here, and also A, t, κ, the battery, E, U and the energies since Mark start in the CSV. Cells can be edited; rows stay through setup changes until Clear. Press C on the drawing to capture.
- The fit is a least squares line $$y = a + bx$$ with equal weights, through your captured rows only. The standard errors come from the scatter of the rows about the line; with ideal simulated values that scatter is only the display rounding.
- Blind hides the model curves in the C and U plot, the value of ε₀ and the formula in the header, κ on the material buttons and its slider, the plate and slab forces, σ and the fields inside the slab, the energy check, the energy in the field, the setup hints and the constants derived from your fit. The meters stay: C, Q, V, E, U and the energy bars.
- The energy density is $$u = \tfrac{1}{2}\kappa\varepsilon_0 E^2$$ (or $$\tfrac{1}{2}\mathbf{E}\cdot\mathbf{D}$$). In the ideal model the field is uniform in each region, so $$u$$ times the volume of each region, summed, gives exactly $$\tfrac{1}{2}CV^2$$.
- **Spherical** shows two concentric metal spheres in 3D, cut away so you can see the gap, or as a flat cross section. A high voltage supply charges the inner sphere through a 100 GΩ resistor while the outer sphere is joined to its other terminal; a meter reads the voltage $$V$$ across the spheres. Set the inner radius $$a$$, the outer radius $$b$$ and the supply voltage $$V_s$$ in the rail; Play runs time (real time, slowed 10× or 10× faster). Record reading stores $$a$$, $$b$$, $$C$$, $$V$$ and the voltage at the last spark.
- Breakdown: each material has a dielectric strength $$E_c$$ (OpenStax Table 8.1; where the book gives a range the low end is used). When the field at the inner sphere reaches $$E_c$$ a spark empties the capacitor. Air and oil insulate again; a solid is left with a burned channel that conducts. Real breakdown fields also depend on the gap, the surfaces and, for air, the pressure, humidity and the curvature of the electrode, so $$E_c$$ is a typical value. In the plate view, Measurements shows how close the field is to breaking down the air or the slab.
- Capacitor values step through the E6 series from 1 pF to 1 nF. Drag a plate on the drawing to change that capacitor, or the battery up and down to change V. The plate gap is drawn on a log scale.

**What the demo models.**

- Model: the readouts use the ideal parallel plate model with a uniform field and no fringing. The field lines, drawn in the front face of the plates, come from a numerical solution of Laplace's equation for this cross section (plates infinitely deep, inside an insulating box 5 cm beyond the plates, so no field line leaves it), so they show the fringing at the edges honestly; lines start in proportion to the free charge and a share $$1 - 1/\kappa$$ of them ends on the bound charge where they enter the slab, so line density matches E in the uniform regions (near the slab's ends it is only approximate). The few lines that leave the outer faces fade out away from the plates. The wires, the stand, the supply and the electrometer are not part of that solution; the electrometer is ideal and draws no charge, and the water tank's thin glass walls are ignored. All changes are slow (quasi static), the battery and wires are ideal, and the slab slides without friction.

</details>

## Goal

See how a dielectric polarizes at the molecular level, measure a spherical capacitor, and find the field at which air breaks down.

## Background

Capacitance relates charge magnitude to potential difference (§8.1):

$$C=\frac{Q}{V}.$$

A dielectric filling the whole gap multiplies the capacitance by $$\kappa$$ (§8.4). Its molecules polarize, and the bound charge this leaves on its faces cancels part of the field, so the field inside is $$E_0/\kappa$$, where $$E_0$$ is the field of the free charge alone.

For two concentric spheres of radii $$a < b$$ with a material of constant $$\kappa$$ between them, Gauss's law gives $$E = Q/(4\pi\varepsilon_0\kappa r^2)$$ in the gap (§8.1, Example 8.3), so

$$C=\frac{4\pi\varepsilon_0\kappa\, ab}{b-a},\qquad \frac{1}{C}=\frac{1}{4\pi\varepsilon_0\kappa}\left(\frac1a-\frac1b\right).$$

The field is strongest at the inner sphere, $$E(a) = Vb/\big(a(b-a)\big)$$. A material breaks down when the field reaches its dielectric strength $$E_c$$ (§8.5), so the spheres hold at most $$V_c = E_c\,a(b-a)/b$$.

## Before the lab

1. Show that $$C = 4\pi\varepsilon_0 ab/(b-a)$$ becomes $$4\pi\varepsilon_0 a$$ when $$b \to \infty$$, and $$\varepsilon_0 (4\pi a^2)/d$$ when $$b = a + d$$ with $$d \ll a$$.
2. For a fixed outer radius $$b$$, find the inner radius $$a$$ that lets the spheres hold the largest voltage.

## Safety

Discharge real capacitors through a suitable resistor before handling them. Observe polarity and voltage ratings. Move plates or dielectric pieces only under the instructor's approved procedure.

## Procedure

**Inside the dielectric (§8.5).** In the One capacitor view, open the Inside the dielectric (molecular model) panel. Pick Water: polar and then Benzene: nonpolar, and set the Field of the free charge E₀ slider to about 10 kV/m, 100 kV/m and 1 MV/m, read $$\kappa$$, the field inside, the free and bound charge densities and the average dipole per molecule (for water also the average alignment, for benzene the shift of the electron cloud). These readings are not part of the Data table; record them in your answer to Analysis 1.

**Spherical capacitor.** Measure the capacitance of concentric spheres with air between them for at least six pairs of radii (the Spherical capacitor setup; Inner radius a and Outer radius b sliders; press Record reading for each pair): first change $$a$$ from 2 to 7 cm with $$b = 10.0$$ cm, then change $$b$$ with $$a = 3.0$$ cm. Any supply voltage below breakdown will do, because $$C$$ does not depend on $$V$$.

**Breakdown.** In the Sparks in air setup, with $$b = 10.0$$ cm and air in the gap, set $$a$$ to 2, 3, 4, 5, 6 and 7 cm in turn. For each, raise the Supply voltage V<sub>s</sub> slider until the gap sparks, wait for at least one spark, and press Record reading (it stores the voltage at the last spark). Then open Puncture a solid to put paper in a 1 mm gap and see what a spark does to a solid.

**Using the virtual apparatus.** Keep Blind on (tick Blind: hide predictions and answers under Lab) while you measure. For the molecular model, work in the One capacitor view and open the Inside the dielectric (molecular model) panel. For the spheres, switch modes to Spherical (Spherical capacitor setup) and send the radius scans and the breakdown scan to the worksheet as separate series: press Export to worksheet after each, then Clear, so they fill the Spheres table. Use Sparks in air for breakdown and Puncture a solid for the paper.

## Data

| Reading and material | $$a$$ (m) | $$b$$ (m) | $$C$$ (F) | Voltage at the last spark (V) | $$1/a - 1/b$$ (1/m) | $$a(b-a)/b$$ (m) | $$1/C$$ (1/F) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Use one copy for the radius scans and one for the breakdown scan. Fill in the last three columns yourself: $$1/a - 1/b$$ and $$1/C$$ on the radius scan rows, $$a(b-a)/b$$ on the breakdown rows.

## Analysis

1. For the dielectric readings, check that the field inside is $$E_0/\kappa$$ and that the bound charge density is $$(1 - 1/\kappa)$$ times the free charge density. How does the average dipole per molecule depend on $$E_0$$? Water's molecules line up only a few parts in a million on average, yet water has $$\kappa = 80.1$$. Explain how, and how benzene, whose molecules have no permanent dipole, is polarized instead.
2. Plot $$1/C$$ (vertical) against $$1/a - 1/b$$ (horizontal) for the radius scans. Infer $$\varepsilon_0$$ from the slope, which is $$1/(4\pi\varepsilon_0)$$ for air. Is the intercept consistent with zero?
3. Plot the spark voltage (vertical) against $$a(b-a)/b$$ (horizontal). The slope is the dielectric strength of air: compare it with the textbook value. Which $$a$$ held the highest voltage, and does that agree with your answer to Before the lab 2?

## Uncertainty

Include the radius setting resolution in the capacitance and spark voltage comparisons. For real spheres, fringing, misalignment and surface roughness can shift the slopes, and the breakdown field of air depends on humidity and the electrode surface. The virtual model is ideal; captured rounding and setting resolution are not random instrumental noise. State which values you measured and which you calculated.

## Questions

1. A dielectric carries no net charge. Why does it still reduce the field between the plates?
2. The field in the spheres' gap falls off as $$1/r^2$$, so it is strongest at the inner sphere. Why do lightning rods, high voltage terminals and the electrodes of a spark gap have the shapes they have?
3. Paper holds more than five times the field air does. Why is a paper capacitor still ruined by a single spark while an air gap is not?

## What to hand in

Prelab answers, settings and CSV, your readings from the molecular model with your Analysis 1 answer, the two sphere graphs with $$\varepsilon_0$$ and the dielectric strength of air, and answers to the questions. Identify simulated data.
