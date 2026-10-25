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

**Eclipses.** The Moon's orbit is tilted 5.145° to Earth's orbit (the ecliptic), so at most new and full moons the Moon passes above or below the Sun or Earth's shadow. An eclipse needs a new or full moon close to one of the nodes, where the two orbits cross. The Moon's height above the ecliptic is $$\beta = 5.145° \sin(E - \phi_N)$$, with $$\phi_N$$ the angle of the ascending node from the Sun line. In the demo a solar eclipse is possible when $$\lvert\beta\rvert < 1.48°$$ at new moon, an umbral lunar eclipse when $$\lvert\beta\rvert < 0.96°$$ at full moon, and a faint penumbral one when $$\lvert\beta\rvert < 1.53°$$.

## Before the lab

1. Find the lit fraction at elongations of 45°, 90°, 135° and 180°.
2. Use $$P_{\text{sid}} = 27.32$$ d and $$P_{\text{year}} = 365.26$$ d to find the synodic month.
3. By how many degrees does the elongation grow each day? By how many minutes does moonrise move later each day?
4. At what time does a first quarter moon rise, stand highest and set? A full moon?

## Safety

No hazards in the virtual lab.

## Procedure

**A month of phases.** Choose New moon. Record a reading every 2 days from 0 to 28 days since new moon (15 readings). Send the readings to the worksheet before you clear them.

**Eclipse seasons.** Clear the readings and choose Eclipse season. Record a reading at this new moon. Then step to the next full moon and record, to the next new moon and record, and so on, until you have 14 readings, then send them to the worksheet.

## Data

| Reading | Time from start (d) | Days since new moon | Elongation $$E$$ (°) | Illuminated (%) | Moonrise (h) | Highest (h) | Moonset (h) | Line of nodes from Sun line (°) | Sun to nearest node (°) | Moon above ecliptic $$\beta$$ (°) | Eclipse | $$100(1 - \cos E)/2$$ (%) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | | |
| | | | | | | | | | | | | |
| | | | | | | | | | | | | |

## Analysis

1. For the month of phases, graph the elongation against the days since new moon. From the slope, find the synodic month, and compare with Before the lab 2.
2. Fill in the last column for the month of phases and graph the illuminated percentage against it. What slope do you expect, and what do you get?
3. Moonrise wraps past midnight after third quarter. Add 24 h to the moonrise times that wrapped, then graph moonrise against the elongation. What do the slope and intercept mean? From your slope and Analysis 1, by how many minutes does moonrise move later each day?
4. For the eclipse seasons, list which new and full moons could give an eclipse, and of what kind. How far was the Sun from the nearest node at each?
5. The line of nodes angle jumps by 360° when it passes −180°. Subtract 360° from the angles after the jump, then graph the angle against the time from the start. From the slope, find how long it takes the Sun to come back to the same node (the eclipse year). How long is it between eclipse seasons?
6. Show that for every reading the size of $$\beta$$ is $$5.145° \sin d$$, where $$d$$ is the Sun's distance from the nearest node. Use this to find how close to a node the Sun must be for a solar eclipse to be possible at new moon, and for an umbral lunar eclipse at full moon.

## Uncertainty

The demo's readings are exact for its model, so repeating a reading gives the same numbers. The uncertainty is in the model. The real Moon's orbit is elliptical, so a real new moon can come up to about 14 hours early or late; rise times shift by an hour or more with latitude and the Moon's tilted orbit. Which of your results would change most for the real Moon: the synodic month averaged over many months, the moonrise times, or the dates of the eclipse seasons? Explain.

## Questions

1. A common idea is that the phases come from Earth's shadow falling on the Moon. If that were so, where would the Moon have to be to show a crescent? Where is it really when we see a crescent?
2. A friend says they saw a thin crescent moon high in the south at midnight. Could they be right? Use your moonrise and moonset times to decide.
3. Why does the Moon take longer to go from new moon to new moon than to go once around Earth against the stars? Draw Earth, the Moon and the Sun at two new moons a month apart.
4. Why is there not a solar eclipse at every new moon and a lunar eclipse at every full moon?
5. The eclipse year (346.6 d) is shorter than the year. Why do eclipse seasons arrive about 19 days earlier each year?

## What to hand in

Prelab answers, the table copies with their graphs and fits, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.
