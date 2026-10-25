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

1. Find the noon Sun's altitude at Ruston (32.5° N) at the June solstice and at the December solstice.
2. By what percentage is sunlight stronger at Earth's closest point to the Sun ($$1 - e$$ AU) than at its farthest ($$1 + e$$ AU)?
3. Find the length of the day at Ruston at the June solstice, in hours and minutes.
4. Show that at an equinox ($$\delta = 0$$) the daily mean insolation is $$Q = (S_0/\pi)(1\ \text{AU}/r)^2\cos\varphi$$, and find it at Ruston for $$r = 1$$ AU.

## Safety

No hazards in the virtual lab.

## Procedure

**Through the year at Ruston.** Pause the demo. At 32.5° N with the real tilt of 23.44°, record a reading on the 21st of each month, January to December (12 readings). Send the readings to the worksheet before you clear them.

**Distance alone.** Clear the readings and choose No tilt. At 32.5° N, record a reading on the 21st of each month again, then send them to the worksheet.

**Around the world at the June solstice.** Clear the readings and choose June solstice. Record a reading at every 15° of latitude from 90° S to 90° N (13 readings), without changing the date, then send them to the worksheet.

## Data

| Reading | Date | Day of the year | Latitude $$\varphi$$ (°) | Tilt $$\varepsilon$$ (°) | Declination $$\delta$$ (°) | Noon Sun altitude (°) | Day length (h) | Earth to Sun $$r$$ (AU) | Daily insolation $$Q$$ (W/m²) | $$(1\ \text{AU}/r)^2$$ |
|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |

## Analysis

1. For the year at Ruston, graph the noon Sun's altitude against the declination. Find the slope and intercept, and explain both from $$h_{\text{noon}} = 90° - \lvert\varphi - \delta\rvert$$.
2. Graph the day length against the day of the year. Which months have the longest and shortest days? Check one reading against $$\cos H_0 = -\tan\varphi\tan\delta$$.
3. For the year with no tilt, fill in the last column and graph $$Q$$ against $$(1\ \text{AU}/r)^2$$. What should the slope be, from Before the lab 4? Use your slope to find $$S_0$$.
4. Find the yearly swing in $$Q$$ at Ruston from each series, as ± percent of the middle value, $$\pm(Q_{\max} - Q_{\min})/(Q_{\max} + Q_{\min})$$. How many times bigger is the swing with the tilt than the swing from distance alone? On which dates is $$Q$$ largest in each series, and on which date is Earth closest to the Sun?
5. For the June solstice, graph the noon Sun's altitude against latitude. At which latitude is the Sun straight overhead at noon? Compare with the declination.
6. Still at the June solstice, at which latitudes does the Sun never set, and at which does it never rise? Relate those latitudes to $$\varepsilon$$.
7. Graph $$Q$$ against latitude at the June solstice. Where is the daily insolation largest? Explain how the North Pole can receive more sunlight per day than the equator, using the day length and the noon altitude at each.

## Uncertainty

The readouts come from exact formulas, so there is no scatter: repeat a reading and you get the same numbers. The uncertainty is in the model and in the date. Near an equinox, by how much does the declination change from one day to the next? Near a solstice? Which of your readings would change most if your date were one day off? Then list the effects the model leaves out (the Sun's size, refraction, the atmosphere) and say which way each would change the day length or the sunlight reaching the ground.

## Questions

1. Earth is closest to the Sun in early January. If distance caused the seasons, what season would Australia have in January? What does it actually have, and what does that tell you?
2. The longest day at Ruston is in June, but the warmest weather is usually in July and August. The demo shows sunlight, not temperature. What does the delay tell you about how the oceans and land store heat?
3. At an equinox, Ruston's daily insolation is only 84% of the equator's, though both have 12 hour days. Explain why with a flashlight shining on a tilted sheet of paper.
4. Mars has a tilt of 25.2° and an orbital eccentricity of 0.093. Find its yearly swing in sunlight from distance alone, as in Analysis 4. Would you expect the distance effect to matter more on Mars than on Earth?
5. Choose Uranus like tilt (98°). How far from the celestial equator can the Sun get now? Which latitudes have at least one day without sunset during the year?

## What to hand in

Prelab answers, the table copies with their graphs and fits, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.
