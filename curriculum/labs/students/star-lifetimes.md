# How Long Can a Star Shine?
Student laboratory · Astronomy

Textbook: OpenStax *Astronomy 2e*, §16.1 to §16.3 (the Sun's energy, mass and energy, the solar interior) and §22.1 (main sequence lifetimes). Access for free at https://openstax.org/details/books/astronomy-2e.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/inside-the-sun.html?ws=star-lifetimes)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** four modes, chosen above the picture. Thermostat: Squeeze the core, Puff it up, Fusion runs fast, Fusion runs slow, Lid on: a runaway. Fuel: The Sun, 2 M☉ at 16 L☉, Sirius A, A red dwarf. Light's long walk: Leaving a concert, The Sun with 0.5 mm steps, The real core. Neutrinos: The race out, The solar neutrino problem, If neutrinos never changed. This worksheet uses **Fuel** and **Thermostat**.

**Using the demo.**

- Fuel weighs four hydrogen atoms against one helium atom and turns the missing mass into energy with E = mc². The **Star mass** and **Luminosity** sliders set a star; click either readout above its slider to type an exact value. The readouts give the star's lifetime, the mass it turns into energy each second and the Sun's lifetime for comparison.
- Thermostat shows the Sun cut open. Each setup starts the core a little out of balance; **Play** runs it forward at 1 million years each second, and the graph shows the core's temperature and the fusion power. It stops by itself after 60 million years.
- Record reading (Fuel mode only) stores the setup's name, the mass, the luminosity and the lifetime. Export to worksheet sends the readings to the first data table. Clear starts a new series, which goes into a new copy of the table.
- The model: a star fuses the 10 % of its mass in its core, and 0.71 % of that mass becomes energy. The thermostat treats the whole Sun as a ball of ideal gas that keeps its shape as it grows or shrinks, with the light leaving held at today's value.

</details>

## Goal

Work out how long the Sun and other stars can shine on their hydrogen, find why the heaviest stars die first, and see what keeps the Sun's fusion from running away.

## Background

**Mass into energy.** Deep in the Sun's core, at about 15 million K, hydrogen nuclei fuse: four of them end up as one helium nucleus. A helium atom has 0.71 % less mass than the four hydrogen atoms that made it. That missing mass has become energy, as much as Einstein's

$$E = mc^2$$

gives, where $$c = 3.00\times10^8$$ m/s. Because $$c^2$$ is so large, a little mass is a lot of energy: one gram is $$9\times10^{13}$$ J, about what a large power plant makes in a day.

**Fuel and burn rate.** A star shines with its luminosity $$L$$, the energy it gives off each second; the Sun's is $$L_\odot = 3.83\times10^{26}$$ W. Only the core is hot enough to fuse, so a star like the Sun uses about 10 % of its mass $$M$$ before it runs out of hydrogen there. The energy it has to spend is then $$0.10 \times 0.0071 \times Mc^2$$, and spending it at the rate $$L$$ takes

$$t = \frac{0.10 \times 0.0071 \times M c^2}{L}.$$

The lifetime is the fuel divided by the burn rate, like a car's range is its fuel divided by how fast it uses it. In units of the Sun's mass ($$M_\odot = 1.99\times10^{30}$$ kg) and luminosity, this becomes $$t \approx 10$$ billion years $$\times (M/M_\odot)/(L/L_\odot)$$: a star's lifetime goes as the ratio $$M/L$$.

**Why a star stays steady.** The Sun's own gravity pulls all its gas inward, and the pressure of the hot gas pushes out. In the core the two balance, and fusion makes just as much energy each second as the surface sends off as light. The Sun has done this for 4.6 billion years with very little change. What happens if the balance is upset is the subject of the last part of this lab.

## Before the lab

1. A kilogram of hydrogen is fused into helium, and 0.71 % of its mass disappears. How much mass is that, and how much energy does it become? A 100 W light bulb uses 100 J each second; how long could this energy run one?
2. Use the lifetime formula in the Background to find the Sun's lifetime in seconds, then in years (one year is $$3.16\times10^7$$ s).
3. A star has 2 times the Sun's mass and 16 times its luminosity. Without the formula: how many times the fuel does it have, how many times faster does it burn it, and what is its lifetime compared with the Sun's?
4. Imagine the nuclear reactions in the Sun's core suddenly ran 1.5 times faster than they do now, at the same temperature. The core now makes more energy than the surface lets out. Once the Sun has settled down again, will its core be hotter than today, cooler than today, or the same? Write your guess and the reason for it before you open the demo.

## Safety

No hazards in the virtual lab.

## Procedure

**Part 1. Fuel.** Open the demo and choose **Fuel** above the picture.

1. Under Setups, press **The Sun**, then press **Record reading** in the Readings section of the sidebar. Do the same for **2 M☉ at 16 L☉**, **Sirius A** and **A red dwarf**.
2. Now make three stars of your own, set by the **Star mass** and **Luminosity** sliders (click the readout above each slider to type the value). Record a reading for each:
   - 0.80 M☉ at 0.40 L☉, a star a little lighter than the Sun;
   - 1.5 M☉ at 5.0 L☉;
   - 3.0 M☉ at 80 L☉, a hot blue white main sequence star.
3. Press **Export to worksheet**. The seven readings fill Table 1 below. Fill in the last column, $$M/L$$, for each row.

**Part 2. The thermostat.** Choose **Thermostat** above the picture.

1. Press **Fusion runs fast**. Before you press Play, copy the **Core size R/R₀**, **Central temperature** and **Fusion power** readouts into Table 2, on the row "start".
2. Press **Play** and watch the graph under the picture. When the run stops by itself (after 60 million years, about a minute), copy the same three readouts into the row "settled".
3. Do the same for **Fusion runs slow**.

Look at the two "fast" rows of Table 2 side by side. The reactions were made faster; read off whether the core ended up bigger or smaller than it started, and whether its central temperature went up or down. Note also where the fusion power ended up compared with the light leaving, 1.000 L☉.

## Data

**Table 1. Stars and their lifetimes.**

| Reading | Star | Mass M (M☉) | Luminosity L (L☉) | Lifetime t (billion years) | M/L (M☉ per L☉) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

**Table 2. The thermostat.**

| Setup | Moment | Core size R/R₀ | Central temperature (million K) | Fusion power (L☉) |
|---|---|---|---|---|
| Fusion runs fast | start | | | |
| Fusion runs fast | settled | | | |
| Fusion runs slow | start | | | |
| Fusion runs slow | settled | | | |

## Analysis

1. Graph the lifetime $$t$$ (vertical) against $$M/L$$ (horizontal) for all of Table 1 and fit a straight line. What is its slope, in billions of years per (M☉ per L☉)? Compare it with the Sun's lifetime and explain why they should agree.
2. From Table 1, how many times longer does the red dwarf live than the Sun?
3. The 3.0 M☉ star has three times the Sun's fuel. From Table 1, how many times shorter is its life than the Sun's? Use its luminosity to explain why.
4. The Sun is 4.6 billion years old. Using its lifetime from Table 1, what fraction of its hydrogen burning life has it used so far?

## Questions

1. Choose **Light's long walk** and press **The Sun, 0.5 mm steps**. Read the time the light takes to random walk out of the Sun (**Time, R²/(ℓc)**), and compare it with the 8.3 minutes it then takes to cross to Earth. Why does the trip out of the Sun take so much longer than the trip to Earth, when the Sun's radius is about 215 times smaller than the distance to Earth?
2. Heavy stars have more fuel, yet they die young. Explain this in one or two sentences, using the idea of fuel and burn rate.
3. Go back to your answer to Before the lab 4. Compare it with the "Fusion runs fast" rows of Table 2: did the core settle hotter or cooler than it started, and bigger or smaller? Explain in your own words how the extra energy changed the core, and why the faster reactions ended up making no more energy than before. Why does this make the Sun a steady star?

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The 10 % in the lifetime formula is a round rule: how much of a star's mass is fused before it leaves the main sequence depends on the star and on how much its core gas mixes with the gas around it. If a star fused 12 % instead of 10 %, by what factor would every lifetime in Table 1 change, and would the slope in Analysis 1 change too?

Give the slope and intercept of your Analysis 1 fit with their standard errors, and say whether the intercept is zero within its uncertainty.

## What to hand in

Prelab answers, both tables with the M/L column filled, the graph with its fit, the answers to the analysis section and to the questions (and to Uncertainty, if assigned). Identify simulated data: every reading in this lab comes from the demo's model.
