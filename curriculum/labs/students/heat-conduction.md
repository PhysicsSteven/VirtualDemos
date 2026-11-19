# Heat Conduction Through Layers
Student laboratory · Thermodynamics

Textbook: OpenStax *University Physics*, Vol. 2, §1.6. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/temperature.html?setup=wall)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** House wall in winter (the Conduction view, the subject of this worksheet); Hot metal, cool water; Mystery block; Gas thermometer; Rod in a water bath; Water near 4 °C (the other three worksheets; a fifth worksheet, on cooling, uses the Cooling view).

**Using the demo.**

- The Conduction view shows steady heat flow: the temperatures on each side have been held long enough that nothing changes with time. Choose House wall, Window, Icebox or Rods in series, then change up to three layers' materials and thicknesses, the two temperatures and the air on each side. Each build has a fixed area: 1 m² for the wall and the window, 0.95 m² for the icebox, and rods 1.0 cm across.
- Each layer of thickness $$d$$ passes heat at $$P = kA\,\Delta T/d$$, with $$k$$ from the textbook's Table 1.5.
- Moving air on each side carries heat to and from the surface by convection. Its film resistance per unit area is the standard engineering value (ASHRAE): still indoor air 0.12 m²·°C/W, outdoor air in a 12 km/h wind 0.044, in a 24 km/h wind 0.030. "None" holds the surface at that side's temperature, like a stirred bath.
- "Air (still, conduction only)" is air that cannot move; a real air gap also passes heat by convection and radiation, so it insulates less. Radiation through the wall is not modeled.
- Drag the probe through the wall, or use the Probe position slider, to read the temperature at any depth, to 0.01 °C. The heat flow meter reads the total heat flow through the area.
- Record reading stores the build, its layers, the probe's position and temperature, and the heat flow. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides the predictions in the readouts.

</details>

## Goal

Measure how temperature falls through a layered wall, find each layer's share of the resistance, and see why insulation works.

## Background

Heat conducted through a slab of area $$A$$, thickness $$d$$ and thermal conductivity $$k$$, with a temperature difference $$\Delta T$$ across it, flows at (§1.6)

$$P = \frac{kA\,\Delta T}{d}.$$

Inside one material the temperature falls in a straight line, with a slope $$dT/dx = -P/(kA)$$, so it falls fastest through the material with the smallest $$k$$. Each layer resists the flow with $$R = d/k$$ per unit area (the "R factor"), and in a wall made of layers the same heat flows through each, so their resistances add:

$$P = \frac{A\,(T_\mathrm{in} - T_\mathrm{out})}{\sum R}, \qquad \Delta T_\mathrm{layer} = (T_\mathrm{in} - T_\mathrm{out})\,\frac{R_\mathrm{layer}}{\sum R}.$$

The thin films of air on each surface add their own resistances to the sum.

## Before the lab

1. Find $$R = d/k$$ for 13 mm of plasterboard, 90 mm of glass wool and 100 mm of brick, using Table 1.5.
2. Add the two air films (0.12 and 0.030 m²·°C/W) and predict the heat flow through 1 m² of this wall with 20 °C inside and −5 °C outside.
3. Which layer do you expect the temperature to fall across the most? Sketch $$T$$ against depth.
4. Two rods of equal size, steel and aluminum, are joined end to end between 100 °C and 20 °C. Aluminum conducts heat nearly three times as well as steel. Is the joint nearer 100 °C, nearer 20 °C, or at 60 °C, halfway? Give your reason.

## Safety

No hazards in the virtual lab. In a real one, the hot side of a conduction apparatus can burn.

## Procedure

**The house wall.** Press the House wall in winter button under Setups (Conduction view: 13 mm plasterboard, 90 mm glass wool, 100 mm brick). Move the probe with the Probe position slider or by dragging it; the Probe readout gives its temperature and depth, and each arrow key press moves it 0.1 % of the wall's thickness (about 0.2 mm). Press Record reading at the inside surface (0 mm), at each boundary between layers (13 and 103 mm, as near as the slider allows), at the outside surface (203 mm), and at two or three depths inside each layer. Each row also stores the Heat flow P.

**Without insulation.** Press Export to worksheet and Clear, then set the Layer 2 Thickness slider (the glass wool) to 0 and repeat. Export these readings too.

**Window.** Press Clear, then press Window on the card. It opens as a single 4 mm pane: record a reading. Then make double glazing: set the Layer 2 Thickness (Air (still, conduction only)) to 12 mm and the Layer 3 Thickness (glass) to 4 mm, and record again. Export these readings.

**Rods in series.** Press Clear, then press Rods in series on the card (steel then aluminum, 250 mm each, 1.0 cm across, ends at 100 °C and 20 °C). Record about ten readings along the rods, including the joint at 250 mm, and export them.

## Data

| Reading | Build and layers | Position $$x$$ (mm) | Temperature $$T$$ (°C) | Heat flow $$P$$ (W) |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

## Analysis

1. For the house wall, fit $$T$$ (vertical) against $$x$$ (horizontal) inside each layer, using only the readings in that layer and on its two boundaries. Use each slope and the measured heat flow to find each layer's $$k = -P/(A\,\text{slope})$$ (with $$x$$ in meters and $$A$$ = 1 m²), and compare with Table 1.5.
2. Find the temperature drop across each layer and each air film, and compare each share with $$R/\sum R$$ from Before the lab.
3. By what factor did removing the insulation increase the heat flow? Explain using the resistances.
4. Compare the single and double windows. What gives double glazing most of its resistance?
5. For the rods, find the joint temperature and both slopes. Show that $$k_\mathrm{steel}\times\text{slope}_\mathrm{steel} = k_\mathrm{Al}\times\text{slope}_\mathrm{Al}$$.

## Uncertainty

The probe reads to 0.01 °C and the meter to several figures, and the model has no noise. Your positions are read to 0.1 mm; estimate what that does to a slope across the thinnest layer. Real walls have studs, gaps and moisture, and real air gaps pass heat by convection and radiation; say how each would change your heat flow.

## Questions

1. Why does the inside surface of a poorly insulated wall feel cold even when the room air is warm?
2. Wind makes a house lose heat faster. Which resistance does wind change, and why does it matter more for a window than for an insulated wall?
3. Where did the joint of your rods end up, next to your answer to Before the lab 4? The same heat flows through both rods; use $$P = kA\,\Delta T/d$$ and the equal products you found in Analysis 5 to explain why the joint sits where it does.

## With calculus

For courses that use calculus. This section is not counted in the 75 minutes; do it when your instructor assigns it.

1. The Background's formula is the steady form of Fourier's law, $$P = -kA\,dT/dx$$. For a flat slab $$A$$ is the same at every depth: integrate across thickness $$d$$ to get $$P = kA\,\Delta T/d$$ and show that $$T$$ falls in a straight line. Now take insulation around a pipe: a cylindrical shell of length $$L$$ from radius $$r_1$$ (at $$T_1$$) to $$r_2$$ (at $$T_2$$). The same $$P$$ crosses every cylinder of radius $$r$$, whose area is $$2\pi rL$$. Separate the variables and integrate to show that $$P = 2\pi kL(T_1 - T_2)/\ln(r_2/r_1)$$, and show that this becomes $$kA\,\Delta T/d$$ when the shell is thin, $$r_2 = r_1 + d$$ with $$d \ll r_1$$.
2. Use Fourier's law at a single depth. From your double glazing readings at 4.0, 10.0 and 16.0 mm, estimate $$dT/dx$$ in the air gap (the change in temperature over the change in depth), and with the heat flow reading find $$k$$ for still air; compare with Table 1.5. Do the same for the inside pane from your 0.0 and 4.0 mm readings, and say how precise that value of $$k$$ can be, given that the probe reads to 0.01 °C.

## What to hand in

Prelab answers, the table copies with their graphs and fits, your values of $$k$$ and the temperature drops with comparisons, the heat flows for each build, and answers to the questions (and to With calculus, if assigned). Identify simulated data.
