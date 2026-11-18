# Habitable Zones and the Drake Equation
Student laboratory · Astronomy

Textbook: OpenStax *Astronomy 2e*, §30.1 to §30.4 (the cosmic context for life, astrobiology, searching for life beyond Earth, the search for extraterrestrial intelligence). Access for free at https://openstax.org/details/books/astronomy-2e. Light spreading over a sphere: OpenStax *University Physics*, Vol. 2, §16.3. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/life-in-the-universe.html?ws=habitable-zones)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Earth's history: Earth's history in one class; Earth's history in one year. Habitable zones: The Sun's habitable zone over time; A bright star dies young; A good bet: 0.8 solar masses; Proxima b, close in; TRAPPIST-1's seven planets. Drake equation: Class example, L = 1,000 years; Class example, L = 1 million years; An optimist's guess; Rare Earth.

**Using the demo.**

- **Earth's history**, **Habitable zones** and **Drake equation**, above the picture, switch modes. Each mode has its own setups.
- Earth's history squeezes Earth's 4.6 billion years onto a clock. Play sweeps the hand from Earth's birth to today, and the readouts give the time on the clock of each event.
- Habitable zones shows a star from above with its habitable zone in green and a planet. The **Star** menu picks the star; **Star's mass M** makes your own star; **Planet's distance d** moves the planet. For the Sun, **The Sun brightens as it ages** lets Play run the Sun's life forward. The time line under the picture compares the star's life with the 4 billion years complex life took on Earth.
- Drake equation has a slider for each factor. Play fills a simulated Galaxy with civilizations, each lasting L years, and stops by itself after 3 L. The graph under the picture shows how many are transmitting at each moment beside N.
- To type a value, click the number beside a slider, type it and press Enter.
- **Record reading** stores the readouts of the star and planet, or of the Drake equation and the Galaxy. **Export to worksheet** sends them to the data tables below. **Clear** starts a new series, which goes into the next table.
- The model uses the class's rules for stars like the Sun (stated in Background); Proxima Centauri and TRAPPIST-1 use their measured luminosities instead. The Galaxy and the places of its civilizations are simulated.

</details>

## Goal

Find where around a star a planet could have liquid water, find which stars live long enough for complex life, and use the Drake equation to estimate how many talking civilizations share our Galaxy and how far apart they would be.

## Background

**Life came early, and complex life late.** Earth formed 4.6 billion years ago (the class's round value; the measured age is 4.54). Microbes left traces about 3.5 billion years ago, soon after Earth cooled. Oxygen built up in the air about 2.4 billion years ago, animals spread about 540 million years ago, the dinosaurs died 66 million years ago, and our species appeared about 300,000 years ago. If all of Earth's history is squeezed onto a clock C long, something that happened $$t$$ years ago sits at

$$\text{time on the clock} = C\left(1 - \frac{t}{4.6\text{ billion years}}\right).$$

**The habitable zone.** Life as we know it needs liquid water. The habitable zone is the range of distances from a star where a planet with air like Earth's could keep liquid water on its surface. For the Sun it runs from 0.95 to 1.4 au (1 au is Earth's distance from the Sun). Starlight spreads out over a sphere, so its brightness falls as one over the distance squared. A star $$L$$ times as bright as the Sun gives Earth's sunlight $$\sqrt{L}$$ times farther out, so its zone is

$$\text{inner edge} = 0.95\sqrt{L}\ \text{au},\qquad \text{outer edge} = 1.4\sqrt{L}\ \text{au},$$

with $$L$$ in units of the Sun's luminosity.

**Bright stars die young.** For stars like the Sun, the class's rule is that a star of mass $$M$$ (in Suns) shines with $$L \approx M^4$$. A star's fuel goes as its mass and it burns it at the rate $$L$$, so its life as a steady, hydrogen burning star is about

$$t \approx 10\ \text{billion years} \times \frac{M}{L},$$

which with $$L = M^4$$ is $$10\ \text{billion years}/M^3$$. Complex life took about 4 billion years to appear on Earth. The Sun itself slowly brightens as it ages, so its habitable zone creeps outward.

**The Drake equation.** Frank Drake wrote the number of civilizations in our Galaxy that we could hear right now as a birth rate times how long each one lasts:

$$N = R_*\, f_p\, n_e\, f_l\, f_i\, f_c\, L.$$

$$R_*$$ is the number of new stars a year in the Milky Way, $$f_p$$ the share with planets, $$n_e$$ the number of habitable planets each, $$f_l$$ the share of those where life starts, $$f_i$$ the share of those that get intelligence, $$f_c$$ the share of those that transmit, and the years each civilization keeps transmitting, $$L$$. Only the first two are measured well; the rest are guesses.

**How far apart.** Spread $$N$$ civilizations evenly over the Galaxy's disk, 100,000 light years (ly) across. Each gets an area $$\pi(50{,}000\ \text{ly})^2/N$$ to itself, so neighbors are about

$$\text{spacing} = \sqrt{\frac{\pi\,(50{,}000\ \text{ly})^2}{N}}$$

apart. A radio message travels one light year a year, so a hello and its answer take twice the spacing in years.

## Before the lab

1. Squeeze Earth's 4.6 billion years into a 75 minute class. At what minute of class does life appear (3.5 billion years ago)? When do the dinosaurs die (66 million years ago)? How many seconds before the end do the first humans (300,000 years ago) appear?
2. Where is the habitable zone of a star 16 times as bright as the Sun? Of a star a quarter as bright?
3. Use $$t \approx 10\ \text{billion years}/M^3$$ to find how long stars of 2, 1.5 and 0.8 solar masses live.
4. With $$R_* = 3$$ a year, $$f_p = 1$$, $$n_e = 0.1$$, $$f_l = 1$$, $$f_i = 0.01$$ and $$f_c = 0.5$$, how many new talking civilizations appear each year? What is $$N$$ for $$L = 1{,}000$$ years and for $$L = 1$$ million years?
5. You can point a telescope at a planet in the middle of the habitable zone of one of two stars: a star twice the Sun's mass, much brighter and hotter than the Sun, or a star 0.8 times the Sun's mass, dimmer and cooler. Which would you pick to search for animals or other complex life, and why? Write down your pick before you open the demo.

## Safety

No hazards in the virtual lab.

## Procedure

**Part 1. Earth's history.** The demo opens in Earth's history, with the setup **Earth's history in one class**. Press Play and watch the hand sweep through the class. Write down the minute of class the readouts give for the first signs of life, oxygen, animals and the dinosaurs, and the seconds before the end for the first humans. These go in Analysis 1; there is no reading to record.

**Part 2. Six stars.** Press **Habitable zones** above the picture and then the setup **The Sun's habitable zone over time**. Untick **The Sun brightens as it ages**, so the Sun keeps today's brightness, and press **Record reading**. Then choose each of these from the **Star** menu in turn and press **Record reading** for each: A star of 2 solar masses, A star of 1.5 solar masses, A star of 0.8 solar masses, Proxima Centauri (red dwarf) and TRAPPIST-1 (red dwarf). Each choice puts a planet in or near the zone; for Proxima Centauri it is the real planet Proxima b.

With the star of 2 solar masses on screen, compare the bar for the star's life on the time line under the picture with the mark for the 4 billion years complex life took on Earth. Its Lifetime is in your table.

**Part 3. The aging Sun.** Choose **The Sun** from the Star menu and tick **The Sun brightens as it ages**. Press Play. The Sun ages to the end of its life, 10 billion years, and the run stops by itself. Write down the **Earth leaves the zone at** readout, then press **Record reading**. Press **Export to worksheet**: the seven readings go into Table 1. Press **Clear**.

**Part 4. The Drake equation.** Press **Drake equation** above the picture and the setup **Class example, L = 1,000 years**. Press Play and wait until the run stops by itself, then press **Record reading**. Click the number beside **L: years they transmit**, type 10000 and press Enter; Play to the end and record. Do the same for L = 100000. Last, press the setup **Class example, L = 1 million years**, Play to the end and record. Press **Export to worksheet**: the four readings go into Table 2.

## Data

**Table 1. Stars and their habitable zones.** You work out the last column.

| Reading | Star | Sun's age (billion years) | Mass $$M$$ (Suns) | Luminosity $$L$$ (Suns) | Inner edge (au) | Outer edge (au) | Lifetime (billion years) | Planet at $$d$$ (au) | Temperature, no greenhouse (K) | In the zone? | $$\sqrt{L}$$ |
|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |

**Table 2. The Drake equation.** The Transmitting now column is from the simulated Galaxy at the end of the run.

| Reading | Years transmitting $$L$$ | Born a year, $$R_* f_p n_e f_l f_i f_c$$ | $$N$$ | Transmitting now (simulated) | Typical spacing (ly) | Hello and an answer (years) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

## Analysis

1. Compare the minutes you wrote in Part 1 with your answers to Before the lab 1. For how many minutes of the 75 minute class was life on Earth only single celled (from the first signs of life to the animals)?
2. Fill in the $$\sqrt{L}$$ column of Table 1. Graph the Inner edge (vertical) against $$\sqrt{L}$$ (horizontal) for all seven readings. What slope and intercept do you get, and what does the rule in Background say they should be?
3. For the Sun and the stars of 2, 1.5 and 0.8 solar masses, compare the Lifetime column with $$10/M^3$$ billion years. Which of these four stars live longer than the 4 billion years complex life took here?
4. Proxima Centauri and TRAPPIST-1 have measured luminosities. Work out $$M^4$$ for Proxima Centauri from its mass and compare it with its luminosity in the table. Is the $$L \approx M^4$$ rule good for a red dwarf?
5. From Part 3, how many billion years from now does Earth leave the Sun's habitable zone? (The Sun is 4.57 billion years old today.) Is the Sun's reading at 10 billion years still on your line from Analysis 2?
6. In Table 2, how many times bigger is $$N$$ when the years transmitting, $$L$$, are 1,000 times more? How many times smaller is the spacing? Show that the spacing changes by $$\sqrt{1{,}000}$$.

## Uncertainty

Each civilization in the simulated Galaxy is born at a random time, so the number transmitting at the end of a run scatters around $$N$$ by roughly $$\sqrt{N}$$. For each row of Table 2, is your Transmitting now value within $$\sqrt{N}$$ of $$N$$? The factors themselves are far less certain: if $$f_i$$ could be anything from 0.001 to 0.1, by how many times could $$N$$ change?

## Questions

1. Your Proxima b reading says whether it is in Proxima Centauri's habitable zone. Give two reasons a planet that close to a red dwarf could still be a hard place for life.
2. Suppose $$N = 100$$. How far apart are neighbors, and how long would a hello and its answer take? Compare that with how long people have had radio, about 100 years.
3. Look again at your pick in Before the lab 5. Use your Table 1 readings for the stars of 2 and 0.8 solar masses (their zones and lifetimes) and what you saw on the time line to say whether your pick holds up, and explain why a brighter star is not a better home for complex life.

## What to hand in

Prelab answers, the completed tables and the graph, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data: the star rules and measured values are cited in the demo, but the Galaxy and its civilizations are simulated.
