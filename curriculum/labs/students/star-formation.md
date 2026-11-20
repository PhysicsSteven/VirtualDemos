# From Cold Cloud to Star
Student laboratory · Astronomy

Textbook: OpenStax *Astronomy 2e*, §21.1 (star formation). Access for free at https://openstax.org/details/books/astronomy-2e. The physics behind it: OpenStax *University Physics*, Vol. 2, §2.1 (the ideal gas law, $$P = nkT$$), Vol. 1, §13.5 (Kepler's laws) and §11.3 (conservation of angular momentum). Access for free at https://openstax.org/details/books/university-physics-volume-1 and https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/star-birth.html?ws=star-formation)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Cold and dense, with A cold dense core: 10 K; The same core at 10,000 K; A giant molecular cloud; Warm thin gas between clouds. Protostar and disk, with A core turning once in 5 million years; Once a million years, to 100 AU. Ignition, with A star like the Sun; A red dwarf, 0.1 M☉; Right at the limit; A brown dwarf, 50 Jupiters; Jupiter.

**Using the demo.**

- The three buttons above the picture switch modes: **Cold and dense** (a cloud fighting its own pressure), **Protostar and disk** (a spinning core shrinking to the size of the Sun) and **Ignition** (a protostar shrinking until its core is hot enough for fusion, or not).
- **Play** runs the stage; the time scale is written at the bottom of the picture. The sliders set the cloud or the star. Click a slider's readout (the number beside its name) to type an exact value.
- The readouts list what the demo works out. **Blind** (in the Lab section) hides the answers, so you can work them out first.
- **Record reading** stores the setup and the readouts of the mode you are in. **Export to worksheet** sends the readings to the table for that mode below; **Clear** starts a new series.
- The model: the cloud is a uniform ball of cold molecular gas whose size follows the virial theorem, so it stands still exactly at the Jeans mass. The spinning core keeps its spin as it shrinks. The protostar is a simple model star whose core is held up by its hot gas and by its electrons; it gives a lightest star of 0.078 $$M_\odot$$, where detailed models give 0.075. The fragments, jets and cocoon are drawn schematically.

</details>

## Goal

Find out what it takes for a cloud of gas to become a star: how cold and dense it has to be to collapse, why the gas ends up spinning in a disk instead of falling straight in, and how much mass it needs to light up.

## Background

**Gravity against pressure.** A cloud of gas in space is in a tug of war. Its own gravity pulls it in; the pressure of its gas pushes it out. The pressure comes from molecules moving and bumping, so it depends on how many there are and how fast they move:

$$P = nkT,$$

where $$n$$ is the number of particles per cubic meter, $$T$$ the temperature in kelvins and $$k = 1.38\times10^{-23}$$ J/K. Two clouds of the same density push back in proportion to their temperatures: a 10 K cloud pushes back 1,000 times more weakly than a 10,000 K one.

**The Jeans mass.** For a given temperature and density there is a least mass that gravity can pull together, the **Jeans mass** $$M_J$$. A cloud heavier than $$M_J$$ collapses; a lighter one spreads out. Hotter gas pushes harder, so it needs more mass; denser gas is packed closer, so gravity wins with less:

$$M_J \propto \frac{T^{3/2}}{\sqrt{n}}.$$

Doubling the temperature makes the Jeans mass $$2^{3/2} = 2.83$$ times bigger. That is why stars form in the coldest, densest clouds in the Galaxy, at 10 to 20 K. As a cloud falls in it gets denser, its Jeans mass drops, and it breaks into pieces that each can become a star: stars are born in clusters.

**Shrinking and spinning.** A cloud core about 10,000 AU across ends up as a star about the size of the Sun, 0.0093 AU across. If it shrinks by a factor $$f$$, its volume shrinks by $$f^3$$, so its density goes up $$f^3$$ times. Any slow spin it had speeds up as it shrinks (a skater pulling in her arms): the time for one turn goes as the size squared,

$$P_\text{spin} = P_0\left(\frac{D}{D_0}\right)^2.$$

Gas spinning fast enough is held up in orbit, like a planet. Kepler's third law gives the time for one orbit at a distance $$r$$ from a star of mass $$M$$: $$P^2 = r^3/M$$, with $$P$$ in years, $$r$$ in AU and $$M$$ in solar masses. Where the spin period would be shorter than the orbit period, the gas cannot fall any farther; it settles into a **disk** around the young star. The disk is where planets form.

**Ignition.** A shrinking protostar heats up inside, the way any gas heats when squeezed. Hydrogen fusion needs very hot protons: about 10 million K in a star like the Sun, and about 3 million K in the lightest stars, which are far denser (the demo uses 3 million K). If the star is heavy enough, its core reaches that temperature, fusion turns on and it becomes a star. If not, its electrons refuse to be squeezed any further before the core is hot enough. It stops shrinking, never fuses hydrogen steadily, and cools forever: a **brown dwarf**. The dividing line is about $$0.08\ M_\odot$$. Jupiter has $$1/1{,}048$$ of the Sun's mass.

## Before the lab

1. Two clouds have the same density. One is 10 K, a molecular cloud; the other is 10,000 K, gas near a hot star. How do their pressures compare?
2. A cloud core 10,000 AU across collapses into a star the size of the Sun, 0.0093 AU across. By what factor does it shrink? By what factor does its density go up?
3. A cloud core 10,000 AU across turns once every million years. It collapses to a disk 100 AU across, keeping its spin. How long does one turn take now?
4. A cloud core of 10 $$M_\odot$$ at 10 K collapses. Now warm the same core to 10,000 K and keep its density the same. Some people expect the hot gas, with all its energy, to fall in even faster. Will the warm core collapse faster, collapse more slowly, or not collapse at all? Write your answer and one sentence of reasoning before you open the demo.

## Safety

No hazards in the virtual lab.

## Procedure

**Part 1. Cold and dense.** The demo opens in **Cold and dense** with **A cold dense core: 10 K** chosen. Press **Record reading**. Now set the temperature: click the readout beside **Temperature T** and type 20, then press **Record reading**. Do the same for 40, 80 and 160 K. Each new temperature restarts the cloud; the density stays at 10,000 particles per cm³. That makes five readings. Press **Export to worksheet**: they go into Table 1.

Now watch two cores. Press **A cold dense core: 10 K**, then **Play**, and watch the cloud and the graph of its radius below it until it stops. Then press the setup **The same core at 10,000 K**: the same density and mass, a thousand times warmer. Write down its readouts **Pressure P = nkT**, **Jeans mass M_J**, **Cloud mass M/M_J** and **Who wins?**, then press **Play**. Write a sentence on what each cloud does.

**Part 2. Spin.** Press **Clear**. Switch to **Protostar and disk** and press the setup **A core turning once in 5 million years**: a core 10,000 AU across, of 1 $$M_\odot$$. The slider **Collapse so far** says how far it has shrunk toward the size of the Sun. Click its readout and type 0, then press **Record reading**. Do the same at 20, 30, 40, 50 and 60%. That makes six readings. Press **Export to worksheet**: they go into Table 2. Then press **Play** and watch the gas settle into a disk with two jets. Write down the readout **Disk edge, where spin holds the gas in orbit**.

**Part 3. Ignition.** Press **Clear**. Switch to **Ignition**. Press each setup in turn: **A star like the Sun**, **A red dwarf, 0.1 M☉**, **Right at the limit**, **A brown dwarf, 50 Jupiters** and **Jupiter**. For each, press **Play** and watch the core temperature on the graph until it stops, then press **Record reading**. Last, with Jupiter still chosen, click the readout beside **Fusion holds the star up once its core reaches**, type 5 and press **Record reading**. That makes six readings. Press **Export to worksheet**: they go into Table 3.

## Data

**Table 1. Cold and dense.** One reading at each temperature, all at 10,000 particles per cm³ and 10 $$M_\odot$$. Type T^1.5, which is $$T^{3/2}$$, yourself.

| Reading | Setup | T (K) | n (per cm³) | Pressure P (Pa) | Jeans mass M_J (M☉) | Cloud mass M/M_J | Who wins | T^1.5 |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

**Table 2. Spin.** A core 10,000 AU across turning once in 5,000,000 years, at six stages of its collapse. Type the shrink factor squared yourself.

| Reading | Size D (AU) | Shrink factor D₀/D | Spin period (yr) | Orbit period (yr) | Shrink factor squared |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

**Table 3. Ignition.** One reading for each setup, at the end of its run.

| Reading | Setup | M (M☉) | M (Jupiters) | Fusion at (million K) | Hottest its core could get (million K) | Becomes a star | Lightest star (M☉) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

## Analysis

1. Graph the Jeans mass (vertical) against T^1.5 (horizontal) for Table 1. Is it a straight line through the origin? Use your slope to predict the Jeans mass at 10,000 K (T^1.5 = 1,000,000), and compare it with the value you wrote down for the core at 10,000 K.
2. How many times bigger is the pressure of the core at 10,000 K (you wrote it down) than at 10 K (Table 1)? Compare with Before the lab 1.
3. In Table 2, divide the starting spin period, 5,000,000 years, by the spin period of each reading. Does it equal the shrink factor squared? Then find the two readings between which the spin period becomes shorter than the orbit period.
4. The disk edge you wrote down in Part 2 is a distance from the star. How wide is the disk across? Does it fall between the two sizes you found in Analysis 3?
5. From Table 3, which setups become stars? What is the lightest star at 3 million K, in solar masses and in Jupiter masses (divide by $$1/1{,}048$$, that is, multiply by 1,048)? When fusion needs 5 million K instead, does the lightest star get heavier or lighter? Why?

## Questions

1. Switch back to **Cold and dense** and press **A giant molecular cloud**. How many Jeans masses does it hold (**Cloud mass M/M_J**)? What does that mean for how many stars it can make, and why are stars born in clusters?
2. In **Protostar and disk**, the readout **Cocoon glow peaks at (Wien)** gives the wavelength where the dusty cocoon around the young star glows brightest. What is it, and in what part of the spectrum? Why do astronomers use infrared telescopes, such as the James Webb Space Telescope, to watch stars form?
3. In your own words, why can a brown dwarf never become a star, even if you wait a very long time?
4. Look back at your prediction in Before the lab 4. In Part 1, what did the 10 K core do, and what did the 10,000 K core do? Use the pressures and the values of $$M/M_J$$ you recorded to explain why heating a cloud works against its collapse, and say whether your prediction held up. Table 1 shows how quickly it happens: at which temperature does pressure already win?

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

Detailed models of the lightest stars put the dividing line at 0.075 $$M_\odot$$. By how many percent does the demo's lightest star at 3 million K differ from that? The lesson's round number, 0.08 $$M_\odot$$, is 80 Jupiters if Jupiter is taken as 1/1,000 of the Sun. By how many percent does that differ from your answer in Analysis 5?

Give the intercept of the Jeans mass line in Analysis 1 with its standard error, and say whether it is zero within that error.

## What to hand in

Answers to Before the lab, the three tables with the graph and its slope, the readouts and sentences you wrote in Parts 1 and 2, and your answers to Analysis and Questions (and to Uncertainty, if assigned). Identify simulated data: every reading in this lab is simulated.
