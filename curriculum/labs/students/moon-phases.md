# Phases and the Lunar Month
Student laboratory · Astronomy

Textbook: OpenStax *University Physics* does not treat the Moon's phases directly. This lab uses circular orbits and angular speed (Vol. 1, §§10.1 and 13.4). Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/moon-phases.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** New moon; First quarter; Full moon; Waning crescent; Eclipse season; Sidereal vs synodic.

**Using the demo.**

- The large view looks down on Earth and the Moon from above the North Pole, with sunlight from the right. The side views show the Moon as seen from Earth (by a northern observer facing south) and the sky at the observer's local time.
- Drag the Moon around its orbit, or set the days since new moon, to move through the month. The demo opens playing.
- The readouts give the phase, the fraction of the Moon's disk that is lit, the days since new moon, the elongation (the Moon's angle from the Sun seen from Earth) and the times of moonrise, highest point and moonset.
- The eclipse view tilts the Moon's orbit by 5.145° to Earth's and shows the line of nodes, where the two orbits cross. It gives the angle of the line of nodes from the Sun line, the Sun's distance from the nearest node, the Moon's height above the ecliptic β, and whether an eclipse is possible. Next new and Next full step to the next new or full moon. The line of nodes turns westward once in 18.6 years.
- The model uses circular orbits at steady rates, and rise and set times for an observer on the equator at an equinox, with the Moon on the celestial equator. Real times can differ by an hour or more. Sizes and distances are not to scale.
- Record reading stores the time from the start, the days since new moon, the elongation (measured east of the Sun, 0° to 360°), the lit percentage, the three times in decimal hours, and, with the eclipse view on, the node angle, the Sun's distance from the node, β and the eclipse note. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Measure how the Moon's phase and the time it rises follow from its angle from the Sun, find the length of the lunar month, and find out why eclipses come in seasons about half a year apart.

## Background

**Phase.** The Sun always lights half of the Moon. What we see depends on the elongation $$E$$, the angle between the Moon and the Sun as seen from Earth. With the Sun very far away, the fraction of the Moon's disk that is lit is

$$f = \frac{1 - \cos E}{2}.$$

$$E = 0$$ is new moon, $$90°$$ east is first quarter, $$180°$$ is full moon and $$270°$$ (90° west) is third quarter.

**The month.** The Moon goes around Earth in the sidereal month $$P_{\text{sid}} = 27.32$$ d, measured against the stars. In that time Earth has moved part way around the Sun, so the Moon needs a little longer to line up with the Sun again. The time from new moon to new moon is the synodic month, $$P_{\text{syn}}$$. Since the elongation grows at the difference of the two angular speeds,

$$\frac{1}{P_{\text{syn}}} = \frac{1}{P_{\text{sid}}} - \frac{1}{P_{\text{year}}}.$$

**Rising.** The sky turns 15° per hour. In the demo's model the Sun rises at 06:00 and a Moon $$E$$ degrees east of the Sun rises $$E/(15°/\text{h})$$ later.

**Eclipses.** The Moon's orbit is tilted 5.145° to Earth's orbit (the ecliptic), so at most new and full moons the Moon passes above or below the Sun or Earth's shadow. An eclipse needs a new or full moon close to one of the nodes, where the two orbits cross. The Moon's height above the ecliptic is $$\beta = 5.145° \sin(E - \phi_N)$$, with $$\phi_N$$ the angle of the ascending node from the Sun line. In the demo a solar eclipse is possible when $$\lvert\beta\rvert < 1.48°$$ at new moon, an umbral lunar eclipse when $$\lvert\beta\rvert < 0.96°$$ at full moon, and a faint penumbral one when $$\lvert\beta\rvert < 1.50°$$.

## Before the lab

1. Find the lit fraction at elongations of 45°, 90°, 135° and 180°.
2. Use $$P_{\text{sid}} = 27.32$$ d and $$P_{\text{year}} = 365.26$$ d to find the synodic month.
3. At what time does a first quarter moon rise, stand highest and set? A full moon?
4. An eclipse season comes when the Sun is near one of the Moon's nodes, where its tilted orbit crosses the ecliptic. Once an eclipse season is over, how long until the Sun is back at that same node: exactly a year (365.26 d), more than a year, or less than a year? What would your answer mean for the dates of next year's eclipse seasons? What leads you to that answer?

## Safety

No hazards in the virtual lab.

## Procedure

**A month of phases.** Press the **New moon** setup (it also pauses the demo) and press **Record reading**. Then move the **Days since new moon** slider to 2, 4, 6 and so on up to 28 d (click the value beside the slider, type it and press Enter; or drag close, then the arrow keys move it 0.01 d at a time) and press **Record reading** at each (15 readings). Then press **Export to worksheet** and **Clear**.

**Eclipse seasons.** Press the **Eclipse season** setup. It turns on the eclipse view (**Show tilted orbit and nodes**), which the last columns of the table need. Press **Record reading** at this new moon. Then press **Next full** and **Record reading**, **Next new** and **Record reading**, and so on in turn, until you have 14 readings. Press **Export to worksheet**: they go into a second copy of the table.

## Data

| Reading | Time from start (d) | Days since new moon | Elongation $$E$$ (°) | Illuminated (%) | Moonrise (h) | Highest (h) | Moonset (h) | Line of nodes from Sun line (°) | Sun to nearest node (°) | Moon above ecliptic $$\beta$$ (°) | Eclipse | $$100(1 - \cos E)/2$$ (%) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | | |
| | | | | | | | | | | | | |
| | | | | | | | | | | | | |

## Analysis

1. For the month of phases, graph the elongation (vertical) against the days since new moon (across). From the slope, find the synodic month, and compare with Before the lab 2.
2. Fill in the last column, $$100(1 - \cos E)/2$$, from the Elongation column for the month of phases, and graph the Illuminated (%) column (vertical) against it (across). What slope do you expect, and what do you get?
3. Moonrise wraps past midnight after third quarter. Add 24 h to the moonrise times that wrapped, then graph moonrise (vertical) against the elongation (across). What do the slope and intercept mean? From your slope and Analysis 1, by how many minutes does moonrise move later each day?
4. For the eclipse seasons (the second copy of the table), list which new and full moons could give an eclipse, and of what kind (the Eclipse column). How far was the Sun from the nearest node at each (the Sun to nearest node column)?
5. The line of nodes angle jumps by 360° when it passes −180°. Subtract 360° from the angles after the jump, then graph the angle (vertical) against the Time from start column (across). From the slope, find how long it takes the Sun to come back to the same node (the eclipse year).
6. Show that for three of your readings (one new moon, one full moon and one more) the size of $$\beta$$ is $$5.145° \sin d$$, where $$d$$ is the Sun's distance from the nearest node (the Sun to nearest node column; $$\beta$$ is in the Moon above ecliptic column). Use this to find how close to a node the Sun must be for a solar eclipse to be possible at new moon, and for an umbral lunar eclipse at full moon.

## Questions

1. A friend says they saw a thin crescent moon high in the south at midnight. Could they be right? Use your moonrise and moonset times to decide.
2. How did your answer to Before the lab 4 hold up against the eclipse year you found in Analysis 5? The Sun moves 360° along the ecliptic in 365.26 d: use your slope to find which way the line of nodes itself turns, and by how many degrees a year. How far apart are the eclipse seasons, and does each year's pair come earlier or later in the calendar than the year before?

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The demo's readings are exact for its model, so repeating a reading gives the same numbers. The uncertainty is in the model. The real Moon's orbit is elliptical, so a real new moon can come up to about 14 hours early or late; rise times shift by an hour or more with latitude and the Moon's tilted orbit. Which of your results would change most for the real Moon: the synodic month averaged over many months, the moonrise times, or the dates of the eclipse seasons? Explain.

Give each fitted slope and intercept with its standard error, and give the synodic month and the eclipse year with their uncertainties.

## What to hand in

Prelab answers, the table copies with their graphs and fits, the answers to the analysis section and to the questions (and to Uncertainty, if assigned). Identify simulated data.
