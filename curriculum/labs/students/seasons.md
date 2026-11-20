# Sunlight Through the Year
Student laboratory · Astronomy

Textbook: OpenStax *University Physics* does not treat the seasons directly. This lab uses Earth's elliptical orbit (Vol. 1, §13.5, Kepler's laws) and the idea of flux through a tilted surface (Vol. 2, §6.1). Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/seasons.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** June solstice; December solstice; Equinox; No tilt; Uranus like tilt; Arctic summer.

**Using the demo.**

- The top left view shows Earth on its orbit around the Sun, with its axis pointing the same way in space all year. Beside it, a closeup of Earth with sunlight from the left and the observer marked; below, the Sun's path across the observer's sky and a chart through the year.
- The date, the observer's latitude and the tilt of Earth's axis can all be changed. Drag Earth along its orbit or across the chart to change the date, and drag up or down on the closeup to move the observer. The demo opens on today's date at 32.5° N (Ruston, Louisiana) and plays.
- The readouts give the noon Sun's altitude, the length of the day, the Sun's declination, the distance from Earth to the Sun and the daily mean insolation: the sunlight per square meter of level ground, averaged over 24 hours, at the top of the atmosphere.
- The orbit has its real eccentricity, 0.0167, with Earth closest to the Sun on January 3. Stretch ellipse only changes the drawing. Day length uses the center of the Sun and leaves out refraction, so real days are a few minutes longer. The atmosphere, clouds and the heat stored by oceans and land are not modeled.
- Record reading stores the date, the day of the year, the latitude, the tilt and every readout, to more digits than the readouts show. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Find out how much of the change in sunlight through the year comes from Earth's changing distance to the Sun, and how much from the tilt of its axis.

## Background

**The Sun's declination.** Earth's axis is tilted by $$\varepsilon = 23.44°$$ from the perpendicular to its orbit and keeps pointing the same way in space. Seen from Earth, the Sun therefore moves north and south of the celestial equator through the year. Its angle from the equator, the declination $$\delta$$, runs from $$+\varepsilon$$ at the June solstice to $$-\varepsilon$$ at the December solstice.

**The noon Sun.** At latitude $$\varphi$$ the Sun at noon is at an altitude (angle above the horizon)

$$h_{\text{noon}} = 90° - \lvert\varphi - \delta\rvert.$$

**Day length.** The Sun is up for an hour angle $$\pm H_0$$ about noon, where

$$\cos H_0 = -\tan\varphi\,\tan\delta,$$

so the day lasts $$24\ \text{h} \times H_0/180°$$. If the right side is below $$-1$$, the Sun never sets (polar day); above $$+1$$, it never rises (polar night).

**Sunlight on the ground.** A beam of intensity $$S$$ falling on level ground at an angle $$\theta$$ from straight up delivers $$S\cos\theta$$ per square meter, just as flux through a tilted surface is $$EA\cos\theta$$. Averaging over a whole day at the top of the atmosphere gives the daily mean insolation

$$Q = \frac{S_0}{\pi}\left(\frac{1\ \text{AU}}{r}\right)^2\left(H_0\sin\varphi\sin\delta + \cos\varphi\cos\delta\sin H_0\right),$$

with $$H_0$$ in radians, $$S_0 = 1361$$ W/m² the sunlight at 1 AU and $$r$$ the distance to the Sun. The factor $$(1\ \text{AU}/r)^2$$ is the inverse square law; the bracket holds the tilt.

**The orbit.** Earth's orbit is an ellipse with eccentricity $$e = 0.0167$$, so $$r$$ runs from $$1 - e$$ to $$1 + e$$ AU.

## Before the lab

1. By what percentage is sunlight stronger at Earth's closest point to the Sun ($$1 - e$$ AU) than at its farthest ($$1 + e$$ AU)?
2. Find the length of the day at Ruston at the June solstice, in hours and minutes.
3. Show that at an equinox ($$\delta = 0$$) the daily mean insolation is $$Q = (S_0/\pi)(1\ \text{AU}/r)^2\cos\varphi$$, and find it at Ruston for $$r = 1$$ AU.
4. On the June solstice, which of these places gets the most sunlight per square meter of level ground over the whole day, at the top of the atmosphere: the equator, 45° N or the North Pole? Choose before you open the demo, and give a reason.

## Safety

No hazards in the virtual lab.

## Procedure

**Through the year at Ruston.** Press **Pause** (the demo opens playing). Leave the **Observer latitude** slider at 32.5° N and **Axial tilt ε** at 23.44°, where they open. Set the **Date** slider to the 21st of February, April, June, August, October and December, and press **Record reading** at each (6 readings). The readout beside the slider shows the date and the day number: these 21sts are days 52, 111, 172, 233, 294 and 355. Click that readout and type the day number, or drag close and use the arrow keys, which step one day. Then press **Export to worksheet** and **Clear**.

**Distance alone.** Press the **No tilt** setup; it sets Axial tilt ε to 0° and keeps 32.5° N. Set the **Date** slider to the 21st of January, March, May, July, September and November (days 21, 80, 141, 202, 264 and 325), press **Record reading** at each (6 readings), then press **Export to worksheet** and **Clear**.

**Around the world at the June solstice.** Press the **June solstice** setup; it puts the tilt back to 23.44°. Without changing the date, set the **Observer latitude** slider to every 15° from 90° S to 90° N (−90°, −75° and so on up to +90°, south negative; 13 readings; click its readout to type a value) and press **Record reading** at each. Then press **Export to worksheet**.

## Data

| Reading | Date | Day of the year | Latitude $$\varphi$$ (°) | Tilt $$\varepsilon$$ (°) | Declination $$\delta$$ (°) | Noon Sun altitude (°) | Day length (h) | Earth to Sun $$r$$ (AU) | Daily insolation $$Q$$ (W/m²) | $$(1\ \text{AU}/r)^2$$ |
|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |

## Analysis

1. For the year at Ruston, graph the noon Sun's altitude (vertical) against the declination (across). Find the slope and intercept, and explain both from $$h_{\text{noon}} = 90° - \lvert\varphi - \delta\rvert$$.
2. From the Day length column for the year at Ruston, which of your dates have the longest and shortest days?
3. For the year with no tilt (the second copy of the table), fill in the last column from the Earth to Sun $$r$$ column and graph $$Q$$ (vertical) against $$(1\ \text{AU}/r)^2$$ (across). What should the slope be, from Before the lab 3? Use your slope to find $$S_0$$.
4. Find the yearly swing in $$Q$$ at Ruston from each series, as ± percent of the middle value, $$\pm(Q_{\max} - Q_{\min})/(Q_{\max} + Q_{\min})$$. How many times bigger is the swing with the tilt than the swing from distance alone? On which dates is $$Q$$ largest in each series, and on which date is Earth closest to the Sun?
5. For the June solstice (the third copy of the table), look at the noon Sun altitude (vertical) against latitude in the table. The altitude is largest at the readings on either side of the latitude where the Sun is straight overhead at noon. From the 15° N and 30° N readings and $$h_{\text{noon}} = 90° - \lvert\varphi - \delta\rvert$$, find that latitude. Compare with the declination.
6. Still at the June solstice, at which latitudes does the Sun never set, and at which does it never rise? Relate those latitudes to $$\varepsilon$$.
7. Graph $$Q$$ (vertical) against latitude (across) at the June solstice. Where is the daily insolation largest?

## Questions

1. The longest day at Ruston is in June, but the warmest weather is usually in July and August. The demo shows sunlight, not temperature. What does the delay tell you about how the oceans and land store heat?
2. Which of the three places in Before the lab 4 came out on top in your June solstice readings, and what was $$Q$$ at each? Use the day length and the noon altitude at each place, and the $$S\cos\theta$$ of the Background, to explain the order.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The readouts come from exact formulas, so there is no scatter: repeat a reading and you get the same numbers. The uncertainty is in the model and in the date. Near an equinox, by how much does the declination change from one day to the next? Near a solstice? Which of your readings would change most if your date were one day off?

Give the slope and intercept of your graph of $$Q$$ against $$(1\ \text{AU}/r)^2$$ with their standard errors, and say whether $$S_0$$ agrees with 1361 W/m² within its uncertainty.

## What to hand in

Prelab answers, the table copies with their graphs and fits, the answers to the analysis section and to the questions (and to Uncertainty, if assigned). Identify simulated data.
