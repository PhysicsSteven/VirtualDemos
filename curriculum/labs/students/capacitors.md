# Capacitance, Dielectrics and Stored Energy
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§8.1–8.4. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/capacitors.html)

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
- Capacitor values step through the E6 series from 1 pF to 1 nF. Drag a plate on the drawing to change that capacitor, or the battery up and down to change V. The plate gap is drawn on a log scale.

**What the demo models.**

- Model: the readouts use the ideal parallel plate model with a uniform field and no fringing. The field lines, drawn in the front face of the plates, come from a numerical solution of Laplace's equation for this cross section (plates infinitely deep, inside an insulating box 5 cm beyond the plates, so no field line leaves it), so they show the fringing at the edges honestly; lines start in proportion to the free charge and a share $$1 - 1/\kappa$$ of them ends on the bound charge where they enter the slab, so line density matches E in the uniform regions (near the slab's ends it is only approximate). The few lines that leave the outer faces fade out away from the plates. The wires, the stand, the supply and the electrometer are not part of that solution; the electrometer is ideal and draws no charge, and the water tank's thin glass walls are ignored. All changes are slow (quasi static), the battery and wires are ideal, and the slab slides without friction.

</details>

## Goal

Find how plate geometry and a dielectric change capacitance, then compare charge, voltage and energy with the battery connected and disconnected.

## Background

Capacitance relates charge magnitude to potential difference (§8.1):

$$C=\frac{Q}{V},\qquad C_0=\frac{\epsilon_0A}{d}.$$

A dielectric filling the whole gap gives $$C = \kappa C_0$$ (§8.4). Stored energy can be written in three equivalent forms (§8.3):

$$U=\frac{Q^2}{2C}=\frac12 CV^2=\frac12 QV.$$

Disconnecting the battery holds $$Q$$ fixed. Leaving it connected holds $$V$$ fixed. The same increase in capacitance can therefore change stored energy in opposite directions.

## Before the lab

1. Predict $$C$$, $$Q$$ and $$U$$ when $$d$$ doubles with the battery connected.
2. Repeat the prediction when the charged capacitor is disconnected first.
3. For three capacitors, explain why charge is equal in series but voltage is equal in parallel (§8.2).
4. Now put capacitors of 10, 22 and 47 pF in series across a 100 V battery. Which one has the largest voltage across it: the 10 pF, the 47 pF, or do all three share the 100 V equally? Explain.

## Safety

Discharge real capacitors through a suitable resistor before handling them. Observe polarity and voltage ratings. Move plates or dielectric pieces only under the instructor's approved procedure.

## Procedure

**Geometry.** Use parallel plates with known area. With the battery connected (the Pull apart, connected setup), measure $$C$$, $$Q$$ and $$V$$ at five plate separations: set the Separation d slider (this stops the setup's sweep) and press Record reading at each. Begin near $$A = 144\ \text{cm}^2$$, $$d = 1.00\ \text{cm}$$ and $$V = 100\ \text{V}$$ in the simulation; use safe assigned values on a real bench. Repeat after charging and disconnecting the battery (the Pull apart, isolated setup, or Isolated under Battery). Calculate stored energy from your own measurements.

**Dielectric.** Begin with an empty gap (the Slide in a dielectric setup with Inserted x/s at 0). Insert a dielectric in five steps with the Inserted x/s slider, for example 0, 25, 50, 75 and 100 percent, while holding the gap fixed. Repeat connected and isolated (Connected or Isolated under Battery). Measure the inserted area fraction, capacitance and voltage. At full insertion, compare $$C/C_0$$ with $$\kappa$$.

**Combinations.** Open the Series and parallel setup (the Combinations view), set the C₁, C₂ and C₃ sliders and pick Series, Parallel or Mixed under Combination. Measure the equivalent capacitance and component voltages for 10, 22 and 47 pF capacitors in series, parallel and the mixed arrangement. Draw each circuit and calculate its predicted equivalent capacitance before measuring.

**Using the virtual apparatus.** Compare connected and isolated parallel plates, beginning near an area of 144 cm², a separation of 1.00 cm and a battery voltage of 100 V. Begin each geometry scan from a clearly recorded starting state and measure capacitance, charge and voltage at five separations, with predictions hidden (tick Blind: hide predictions and answers under Lab). Press Export to worksheet after each scan, then Clear, before changing the setup, so connected and isolated scans get their own copies of the Data table. For the dielectric scan, keep the gap fixed and measure five insertion fractions, again comparing connected and isolated plates. Analyze $$C$$ against $$1/d$$, $$C$$ against insertion fraction and $$V$$ against $$d$$ for the appropriate cases. Finally, compare series, parallel and mixed networks of 10, 22 and 47 pF capacitors. Record energy and work observations separately if they are not visible during blind measurement; reveal predictions only after completing your calculations.

## Data

| Run: connected/isolated/network | $$d$$ (m) | $$A$$ (m²) | Inserted fraction | $$C$$ (F) | $$Q$$ (C) | $$V$$ (V) | $$U$$ (J) | $$1/d$$ (1/m) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

Use a separate copy for each scan. Fill in the last column yourself for the two separation scans. For networks, put the component label in the first column and leave geometry columns blank.

## Analysis

1. Plot $$C$$ (vertical) against $$1/d$$ (horizontal) and infer $$\epsilon_0$$ from the slope and plate area. Treat this as a consistency test of the ideal model.
2. For the isolated scan, plot $$V$$ (vertical) against $$d$$ (horizontal) and explain its slope using $$Q = CV$$.
3. Plot $$C$$ (vertical) against inserted fraction (horizontal). Infer $$\kappa$$ from the fully filled and empty values. Do not use $$C = \kappa C_0$$ if an air gap remains beside the slab thickness.
4. Compare stored energy in connected and isolated scans. Use the battery work $$V\Delta Q$$ to explain the energy change in the connected case.
5. Test the series/parallel formulas and sum the component energies. The mixed arrangement has $$C_1$$ in series with the parallel pair $$C_2$$ and $$C_3$$.
## Uncertainty

Include plate area and gap resolution in the capacitance comparison. A small gap error can dominate $$C$$. For real plates, fringing and misalignment can shift the slope. The virtual model is ideal; captured rounding and setting resolution are not random instrumental noise. State which values you measured and which you calculated.

## Questions

1. Which capacitor in your series network had the largest voltage, and was that your answer to Before the lab 4? Use $$Q = CV$$ and the charge on each capacitor to explain why.

## With calculus

For courses that use calculus. This section is not counted in the 75 minutes; do it when your instructor assigns it.

1. Charge the capacitor a little at a time: moving $$dq$$ from one plate to the other against the voltage $$q/C$$ takes work $$(q/C)\,dq$$. Integrate from 0 to $$Q$$ to show that $$U = Q^2/(2C)$$. Then show that the same energy is the energy density $$\tfrac12\epsilon_0E^2$$ times the volume $$Ad$$ between the plates, and check this with $$E = V/d$$ from the first row of your isolated scan.
2. With the battery disconnected $$Q$$ stays fixed, so at separation $$x$$ the stored energy is $$U = Q^2x/(2\epsilon_0A)$$, and the force you must exert to pull the plates apart is $$F = dU/dx$$ (the work $$F\,dx$$ all goes into $$U$$). From your isolated scan, find $$dU/dd$$ from the first and last rows (their difference over the change in $$d$$), and compare it with $$Q^2/(2\epsilon_0A)$$.
3. With the battery connected $$V$$ stays fixed, and your connected scan shows $$U$$ falling as the plates separate, yet the plates still attract. Show that the battery's work $$V\,dQ$$ is $$2\,dU$$ here, so the work you do is $$F\,dx = dU - V\,dQ = -dU$$ and $$F = \epsilon_0AV^2/(2x^2)$$. Estimate $$-dU/dd$$ at 2.00 cm from your connected readings on either side of it (for example 1.50 and 2.50 cm), and compare with this $$F$$. Why is the estimate high?

## What to hand in

Prelab answers, settings and CSV, the geometry/dielectric graphs, inferred $$\epsilon_0$$ and $$\kappa$$ with uncertainty, network calculations, energy interpretation, and the answer to the question (and to With calculus, if assigned). Identify simulated data.
