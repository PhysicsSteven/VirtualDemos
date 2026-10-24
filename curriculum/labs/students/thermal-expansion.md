# Thermal Expansion
Student laboratory · Thermodynamics

Textbook: OpenStax *University Physics*, Vol. 2, §1.3. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/temperature.html?setup=rod)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Rod in a water bath; Water near 4 °C (these two use the Expansion view, the subject of this worksheet); Hot metal, cool water; Mystery block; Gas thermometer; House wall in winter (the other three worksheets; a fifth worksheet, on cooling, uses the Cooling view).

**Using the demo.**

- **Rod and dial gauge.** A rod 1.000 m long at 20.0 °C lies in a water jacket, one end against a fixed block and the other against a dial gauge. The gauge reads the change in length from 20.0 °C, to 0.001 mm. The picture shows the rod's end moving 4000 times more than it does.
- The rod's length follows $$L = L_0[1 + \alpha(T - 20\ ^\circ\mathrm{C})]$$ with $$\alpha$$ from the textbook's Table 1.2, an average over ordinary temperatures, so the response is exactly linear here.
- **Flask and capillary.** 5.000 mL of liquid fills a Pyrex flask to the zero mark of a thin tube of bore 1.00 mm at 20.0 °C. The level in the tube, read to 0.1 mm, shows the liquid's expansion less the flask's.
- The liquids expand with $$\beta$$ from Table 1.2, except water, whose volume follows its measured density (Tanaka and others, *Metrologia* 2001, valid from 0 to 40 °C). The flask expands with $$\beta = 9\times10^{-6}$$ /°C (Pyrex, Table 1.2); the tube's own expansion is neglected.
- Each reading is taken after the sample has settled at the bath's temperature.
- Record reading stores the setup, material, bath temperature and the gauge or level reading. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- New mystery rod hides the rod's material. Blind hides the predictions in the readouts.

</details>

## Goal

Measure the coefficient of linear expansion of a metal rod, identify an unknown rod, and see how water's expansion differs from every other liquid's.

## Background

Most solids get longer when heated. Over ordinary temperature ranges the change in length is in proportion to the original length and to the change in temperature (§1.3):

$$\Delta L = \alpha L_0\,\Delta T.$$

A liquid's volume grows the same way, $$\Delta V = \beta V_0\,\Delta T$$. In a flask with a narrow tube, the liquid and the flask both expand; the level in the tube of cross section $$A$$ rises by

$$h = \frac{(\beta_\mathrm{liquid} - \beta_\mathrm{flask})\,V_0\,\Delta T}{A}.$$

Water is unusual: between 0 °C and about 4 °C it **shrinks** as it warms. Its density is greatest at 3.98 °C, so near there its $$\beta$$ is close to zero and below it is negative.

## Before the lab

1. Predict how much a 1.000 m aluminum rod ($$\alpha = 25\times10^{-6}$$ /°C) gets longer when warmed from 20 °C to 80 °C.
2. Sketch the gauge reading against bath temperature from 0 °C to 100 °C.
3. Find the cross section of a tube of bore 1.00 mm, and predict the level rise for 5.000 mL of ethyl alcohol ($$\beta = 1100\times10^{-6}$$ /°C) warmed by 10 °C.
4. Sketch how you expect the level of water in the tube to change as it is cooled from 20 °C to 0 °C.

## Safety

Hot water jackets and baths can scald, and glassware can crack when heated or cooled quickly. In a real lab change temperatures slowly and wear eye protection.

## Procedure

**The aluminum rod.** Start with the Rod in a water bath setup. Record the gauge reading at bath temperatures from 0 °C to 100 °C, about every 10 °C.

**Two more rods.** Clear the readings and repeat for two other rods from the list, each in its own copy of the table.

**Mystery rod.** Pick Mystery rod in the rod list and record at least five readings over the full range.

**Water near 4 °C.** Pick the Water near 4 °C setup and record the level every 1 °C from 0 °C to 10 °C and then every 5 °C up to 40 °C.

**Another liquid.** Repeat with ethyl alcohol or glycerin from 0 °C to 40 °C, every 5 °C.

## Data

| Reading | Setup and material | Temperature $$T$$ (°C) | Gauge or level reading (mm) | $$\Delta T$$ (°C) | $$\Delta L/L_0$$ or $$\Delta V/V_0$$ |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. Fit the gauge reading against $$T$$ for each rod. From the slope find $$\alpha = \text{slope}/L_0$$ and compare it with Table 1.2.
2. Find $$\alpha$$ for the mystery rod and name its material.
3. For the liquid, fit the level against $$T$$. From the slope find $$\beta_\mathrm{liquid} = \text{slope}\cdot A/V_0 + \beta_\mathrm{flask}$$ and compare it with Table 1.2.
4. For water, find the temperature at which the level is lowest. Explain why it is a little above 3.98 °C, the temperature at which water is densest.
5. Estimate water's $$\beta$$ near 30 °C from the slope of your level readings there, and compare it with the value in Table 1.2.

## Uncertainty

The gauge reads to 0.001 mm and the level to 0.1 mm, and the model has no noise. Find the relative uncertainty of a single gauge reading of about 1 mm and compare it with the scatter of your fit. In a real experiment the rod and the bath would not be at quite the same temperature; say how that would affect your $$\alpha$$.

## Questions

1. Why do bridges and railway lines have gaps or sliding joints?
2. A steel tape measure calibrated at 20 °C is used on a hot day. Does it read too long or too short?
3. Why does a lake freeze from the top down, and why does that matter for the fish?
4. Why is the flask's own expansion more important for the liquids with small $$\beta$$?

## What to hand in

Prelab answers, the table copies with their graphs and fits, your values of $$\alpha$$ and $$\beta$$ with uncertainties and comparisons, the mystery rod's material, the temperature of water's lowest level, and answers to the questions. Identify simulated data.
