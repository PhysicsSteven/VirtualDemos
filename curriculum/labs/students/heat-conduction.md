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
4. Two rods of equal size, steel and aluminum, are joined end to end between 100 °C and 20 °C. Is the joint nearer 100 °C or 20 °C?

## Safety

No hazards in the virtual lab. In a real one, the hot side of a conduction apparatus can burn.

## Procedure

**The house wall.** Start with the House wall in winter setup. Record a reading at the inside surface, at each boundary between layers and at the outside surface, and two or three readings inside each layer.

**Without insulation.** Clear the readings, set the glass wool's thickness to 0 and repeat.

**Window.** Pick Window. Record the heat flow for a single 4 mm pane, then for double glazing: two 4 mm panes with 12 mm of still air between them.

**Rods in series.** Pick Rods in series (steel then aluminum, 250 mm each, 1.0 cm across, ends at 100 °C and 20 °C). Record about ten readings along the rods, including the joint.

## Data

| Reading | Build and layers | Position $$x$$ (mm) | Temperature $$T$$ (°C) | Heat flow $$P$$ (W) |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

## Analysis

1. For the house wall, fit $$T$$ against $$x$$ inside each layer. Use each slope and the measured heat flow to find each layer's $$k = -P/(A\,\text{slope})$$, and compare with Table 1.5.
2. Find the temperature drop across each layer and each air film, and compare each share with $$R/\sum R$$ from Before the lab.
3. By what factor did removing the insulation increase the heat flow? Explain using the resistances.
4. Compare the single and double windows. What gives double glazing most of its resistance?
5. For the rods, find the joint temperature and both slopes. Show that $$k_\mathrm{steel}\times\text{slope}_\mathrm{steel} = k_\mathrm{Al}\times\text{slope}_\mathrm{Al}$$, and say why.

## Uncertainty

The probe reads to 0.01 °C and the meter to several figures, and the model has no noise. Your positions are read to 0.1 mm; estimate what that does to a slope across the thinnest layer. Real walls have studs, gaps and moisture, and real air gaps pass heat by convection and radiation; say how each would change your heat flow.

## Questions

1. Why does the inside surface of a poorly insulated wall feel cold even when the room air is warm?
2. Wind makes a house lose heat faster. Which resistance does wind change, and why does it matter more for a window than for an insulated wall?
3. Down feathers and glass wool are mostly trapped air. Why do they insulate well?
4. A metal spoon and a wooden spoon have both sat in a hot pot for a while. Why does the metal one feel hotter at the handle?

## What to hand in

Prelab answers, the table copies with their graphs and fits, your values of $$k$$ and the temperature drops with comparisons, the heat flows for each build, and answers to the questions. Identify simulated data.
