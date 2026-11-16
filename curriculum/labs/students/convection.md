# Cooling by Convection and Radiation
Student laboratory · Thermodynamics

Textbook: OpenStax *University Physics*, Vol. 2, §1.6. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/temperature.html?view=cv)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** this worksheet uses the Cooling view (pick Cooling at the top of the picture). The setups in the sidebar belong to the other four worksheets.

**Using the demo.**

- A solid metal sphere hangs in a large room, with a thermocouple in it. Choose the metal, its surface (polished, or painted flat black), its diameter, its starting temperature, the room temperature and the speed of the air from a fan. Play runs the clock (it reads Pause while running); 300× speeds it up for slow runs. Changing any setting starts the run again from time zero.
- The sphere loses heat by convection to the air and by radiation to the room's walls, which are at the air's temperature. In still air, warm air rising off the sphere carries heat away (natural convection); the fan blows air across it (forced convection).
- The convection coefficient $$h$$ comes from standard engineering correlations for a sphere, not from a fixed number, so it changes a little as the sphere cools. The emissivities are 0.05 for the polished metal and 0.95 for the black paint.
- Record reading stores the time and the temperature, with the sphere, the air speed and the room temperature. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table. Record readings while the clock is paused or running.
- Blind hides the heat losses and the coefficients in the readouts.

</details>

## Goal

Measure how fast a hot object cools in still air and in a wind, find the convection coefficient, and find how much of the heat leaves by radiation.

## Background

A surface at temperature $$T$$ in air at $$T_\mathrm{air}$$ loses heat by convection at a rate

$$P_\mathrm{conv} = hA\,(T - T_\mathrm{air}),$$

where $$A$$ is the surface area and $$h$$, the convection coefficient (in W/(m²·°C)), depends on how fast the air moves past the surface. It also radiates to its surroundings at a net rate (§1.6)

$$P_\mathrm{rad} = e\sigma A\,(T^4 - T_\mathrm{air}^4),$$

with $$\sigma = 5.67\times10^{-8}$$ W/(m²·K⁴), temperatures in kelvin, and $$e$$ the emissivity. When $$T - T_\mathrm{air}$$ is small compared with the absolute temperature, this is close to $$h_\mathrm{rad}A\,(T - T_\mathrm{air})$$ with $$h_\mathrm{rad} = 4e\sigma T^3$$ ($$T$$ in kelvin, the mean of the two).

A small metal object has one temperature throughout, so its heat capacity $$mc$$ loses energy at the total rate:

$$mc\,\frac{dT}{dt} = -(h + h_\mathrm{rad})A\,(T - T_\mathrm{air}).$$

If the coefficients stay the same, the difference $$T - T_\mathrm{air}$$ dies away exponentially with time constant $$\tau = mc/[(h + h_\mathrm{rad})A]$$ (Newton's law of cooling). For a solid sphere of diameter $$D$$ and density $$\rho$$, $$m/A = \rho D/6$$, so

$$h + h_\mathrm{rad} = \frac{\rho c D}{6\tau}.$$

## Before the lab

1. A graph of what against what gives a straight line for Newton's law of cooling? What is its slope?
2. Find $$h_\mathrm{rad}$$ for a black surface ($$e = 0.95$$) at a mean temperature of 50 °C, and for a polished one ($$e = 0.05$$).
3. An aluminum sphere ($$\rho = 2.70\times10^3$$ kg/m³, $$c = 900$$ J/(kg·°C)) 5.0 cm across has $$h + h_\mathrm{rad} = 10$$ W/(m²·°C). Predict its time constant.

## Safety

No hazards in the virtual lab. In a real one, a sphere at 80 °C burns: handle it with tongs or gloves.

## Procedure

**Still air.** Press Cooling at the top of the picture. It opens with the sphere this run needs: Metal Aluminum, Surface Polished (ε = 0.05), Diameter 5.0 cm, Starting temperature 80 °C, Room temperature 20 °C and Fan: air speed 0 m/s. Press Record reading at t = 0, then Play at 60× and pause (the same button) each time the clock above the picture passes a multiple of 600 s, pressing Record reading each time, up to 3600 s. The row stores the time the clock shows and the temperature at that time, so the times need not be exact multiples.

**With the fan.** Press Export to worksheet and then Clear. Set Fan: air speed to 1.0 m/s (changing a setting starts the run again from t = 0). Record at t = 0 and about every 240 s up to 1200 s. Repeat at 4.0 m/s, pressing Export to worksheet and Clear after each run, so each run has its own copy of the table.

**Black sphere.** Set Surface to Black paint (ε = 0.95) and Fan: air speed to 0. Record at t = 0 and about every 600 s up to 3600 s, then Export to worksheet.

## Data

| Reading | Sphere and air | Time $$t$$ (s) | Temperature $$T$$ (°C) | $$T - T_\mathrm{air}$$ (°C) | $$\ln(T - T_\mathrm{air})$$ (difference in °C) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. Fill in the last two columns for every run and graph $$\ln(T - T_\mathrm{air})$$ (vertical) against $$t$$ (horizontal), one graph per table copy. Find $$\tau = -1/\text{slope}$$ from each.
2. For each run, find $$h + h_\mathrm{rad}$$ from $$\tau$$. For the polished sphere radiation is small; subtract $$h_\mathrm{rad}$$ for $$e = 0.05$$ and report $$h$$ for still air and each fan speed.
3. How does $$h$$ change with the air speed? Is it proportional to the speed, to its square root, or neither? Use your three values (0, 1.0 and 4.0 m/s).
4. Compare the black and polished spheres in still air. Find the radiation coefficient from the difference and compare it with $$4e\sigma T^3$$ for $$e = 0.95$$ at the run's mean temperature.
5. What fraction of the heat leaves by radiation from the black sphere in still air? For the 4.0 m/s wind, take $$h$$ from your polished 4.0 m/s run and $$h_\mathrm{rad}$$ for $$e = 0.95$$ at 36 °C, and find the fraction the same way.

## Uncertainty

The thermocouple reads to 0.01 °C with no noise or lag. Near the end of a run $$T - T_\mathrm{air}$$ is small, so its logarithm is the least certain point: estimate the effect of 0.01 °C at the last reading of each run. The model uses correlations for $$h$$ that fit real measurements to within about 10 to 20%, and a real fan's stream is turbulent, so treat your $$h$$ values as typical, not exact.

## Questions

1. A household "radiator" at 60 °C: does it heat a room mostly by radiation or by convection? Use your results.

## What to hand in

Prelab answers, the table copies with their graphs and fits, your values of $$\tau$$, $$h$$ and the radiation coefficient with comparisons, the radiation fractions, and the answer to the question. Identify simulated data.
