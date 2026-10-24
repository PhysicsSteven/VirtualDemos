# Where Does Electrical Energy Come From?
Student reading and data activity · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §8.5, with power from §7.4. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/energy-sources.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Charge a phone, about 15 Wh; Run a 1 kW heater for an hour; A household for a day, about 30 kWh; 1 kW nonstop for a year. The page opens at 30 kWh delivered as electricity.

**Using the demo.**

- The picture is a bar chart on a logarithmic scale (each grid line is ten times the last) of the mass of each source needed to deliver the chosen energy: uranium 235 (fissioned), natural gas, gasoline, food fat, coal, dry wood, sugar, TNT, a lithium ion battery, water falling through the dam and air through a wind turbine, sorted from least mass to most, each bar labelled with its mass.
- **Energy delivered** runs from 1 Wh to 10,000 MWh; the four chips set it to the examples above. **Delivered as electricity (heat engines convert only part of the heat)** is on when the page opens, with **Power station efficiency (heat to electricity)** from 20% to 60%, opening at 35%; with it off, the energy is delivered as heat and fuels need no engine.
- Under Renewables: **Dam height (water falls through)** from 10 to 300 m, **Wind speed** from 3 to 20 m/s and **Average sunlight on a panel, day and night** from 50 to 300 W/m² (opening at 100 m, 10 m/s and 200 W/m²).
- Readouts: Energy delivered in MJ; As heat from a heat engine; Uranium 235 vs coal, per kilogram; Solar panel area to collect it in one day; Gasoline volume (0.74 kg/L); Water volume through the dam.
- Blind hides the masses and areas and keeps the sources in a fixed order, so the class can rank them first. There is no Record or Export: the Data table in this handout is filled from the EIA table it cites, not from the demo.

**What the demo models.**

- 1 kWh = 3.6 MJ. The mass of a fuel or of uranium needed to deliver energy $$E$$ as electricity is $$m = \frac{E}{(\text{energy per kg})\,\eta},$$ with $$\eta$$ the power station efficiency; delivered as heat, or from a battery, $$m = E/(\text{energy per kg})$$.
- Typical energy per kilogram (higher heating values, which vary by sample): natural gas 55 MJ, gasoline 46 MJ, coal 27 MJ, dry wood 18 MJ, food fat 37.7 MJ and sugar 16.7 MJ (9 and 4 kcal/g), TNT 4.184 MJ (by definition), lithium ion cells 0.7 MJ (about 200 Wh/kg), uranium 235 fully fissioned 8.2 × 10⁷ MJ (200 MeV per fission, times Avogadro's number per 0.235 kg).
- Hydro: $$gh$$ per kilogram of water at 90% turbine efficiency, with $$g = 9.81\ \mathrm{m/s^2}$$. Wind: the kinetic energy $$\tfrac12 v^2$$ per kilogram of air through the rotor, at the Betz limit 16/27. Solar: $$A = \frac{E}{(\text{sunlight})\times 0.20\times 86400\ \text{s}}$$ for a panel of 20% efficiency over one day at the average sunlight you set (it depends on place and season).
- The demo's values are typical figures from its own table, not measurements, and it uses no generation statistics. The EIA figures in this handout (Electric Power Annual, Table 3.1.A, the 2024 row) come from the handout's Data table and the teaching snapshot, not from the demo.

</details>

## Goal

Use published energy data to compare electricity sources, distinguish energy from power and explain an energy conversion chain without confusing electricity with a primary resource.

## Background

Energy is transferred and transformed; a generator does not create it. Electricity is a secondary energy carrier. Fuel combustion, nuclear reactions, sunlight and moving water supply energy through different physical pathways.

$$\overline P=\frac{E}{\Delta t},\qquad \eta=\frac{E_{\rm useful}}{E_{\rm input}}.$$

One kWh is energy: 3.6 × 10⁶ J. One MWh is 1000 kWh. A source's annual generation share is its energy divided by the corresponding total, not its installed power divided by total energy. Generation data alone do not determine fuel efficiency, emissions, reliability or cost.

## Before the activity

1. Why is kWh a unit of energy rather than power?
2. How could two generators with equal rated power deliver different annual energies?
3. Why should electricity generation shares not be described as shares of all national energy use?

## Safety

This is a reading/calculation activity. Do not inspect live electrical equipment or take measurements at generating facilities.

## Procedure

**Read the sources.** Read OpenStax §8.5 and the EIA explanation of [electricity sources and technologies](https://www.eia.gov/energyexplained/electricity/electricity-in-the-us.php). Choose one fuel based and one non combustion pathway. Describe the stored or incoming energy, its intermediate transfers and electrical output. Distinguish renewable resources from storage technologies.

**Check the data boundary.** Use the fixed 2024 row of [EIA Electric Power Annual, Table 3.1.A](https://www.eia.gov/electricity/annual/html/epa_03_01_a.html), accessed 2026-10-22. The table below copies selected utility scale values in **thousand MWh**, not MWh. Total utility scale generation for that row is 4,308,634 thousand MWh. The exercise excludes small scale solar. Keep those boundaries even if a live page later adds another year. A machine readable copy is supplied in [the teaching snapshot](../../data/eia-electricity-2024.json).

**Calculate.** For each selected category, find its share of that total, energy in joules and average power over calendar year 2024. Use the actual number of hours in that leap year. Find the fraction represented by categories not listed here; do not force the selected rows to sum to 100%. The renewable category in the last row includes several technologies and is not a wind only measurement.

**Compare energy and power.** Explain why annual average output differs from nameplate capacity. Separately, analyze a hypothetical plant delivering 100 MW of electrical power at efficiency 35%: calculate its input power, rejected power and energy account over 24 hours. These hypothetical values are not measured efficiencies of any EIA category.

**Read critically.** In the full source table, pumped storage has negative net generation for this year. Explain how consuming electricity to store energy can produce a negative net account without violating energy conservation. Identify one environmental question and one supply reliability question that this annual generation table cannot answer by itself.

## Data

| Utility scale source or category | 2024 generation (thousand MWh) | Share (%) | Energy (J) | Annual average power (GW) |
|---|---|---|---|---|
| Coal | 652,156 | | | |
| Natural gas | 1,869,902 | | | |
| Nuclear | 781,865 | | | |
| Hydroelectric conventional | 242,896 | | | |
| Solar, utility scale | 219,834 | | | |
| Renewables excluding hydroelectric and solar | 513,733 | | | |

Source: EIA Table 3.1.A, 2024 annual utility scale row; reported figures are rounded in the source. These are published statistics, not simulated data or student measurements.

## Analysis

1. Show one complete share, joule conversion and average power calculation with units. Explain how you determined the year length.
2. Compare the selected shares and calculate the unlisted remainder. Explain why small scale solar must not be added to one numerator while retaining the utility scale denominator.
3. Draw and explain two energy conversion chains. For each, identify an energy transfer that does not reach the electrical output.
4. Complete the hypothetical plant's input, output and rejected energy account. State what additional evidence would be needed to estimate a real plant's efficiency or environmental impact.

## Uncertainty

The table is a dated statistical release with rounded values and may be revised. It is not a laboratory data set with a supplied independent error bar for every row. Do not invent confidence intervals. Distinguish source rounding, year/scope mismatch and uncertainty in an interpretation. Report appropriate significant figures; annual means conceal hourly and seasonal variation.

## Questions

1. Why is a battery or pumped storage reservoir an energy store rather than an original fuel source?
2. Why can a low carbon source still have environmental effects that this table does not quantify?
3. Why does average annual power fail to show whether supply is available during one particular hour?
4. What evidence would you need before claiming that a source's generation share proves it is the cheapest option?

## What to hand in

Preactivity answers, source/year/scope statement, completed table and calculations, two conversion chain diagrams, the hypothetical plant energy account, uncertainty discussion and question answers. Cite the EIA table and distinguish published data from hypothetical assumptions.
