# Sunspots and the Solar Cycle
Student laboratory · Astronomy

Textbook: OpenStax *Astronomy 2e*, §15.1 and §15.2 (the solar photosphere, sunspots and the solar cycle). Access for free at https://openstax.org/details/books/astronomy-2e.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/sun-surface.html?ws=sunspot-cycle)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** four modes, chosen above the picture. Spots: A sunspot, 4,000 K; A warmer spot, 4,500 K; A darker spot, 3,800 K; The spot alone in the sky; No field: no spot. Rotation: Equator against 60°; One year of winding; If the Sun were solid. Cycle: Cycle 19, the biggest; Cycle 24; Now, cycle 25; The 1870s. Space weather: four CMEs. This worksheet uses **Cycle** and **Spots**.

**Using the demo.**

- Cycle shows the butterfly diagram (where on the Sun spots appeared, 1874 to 2013) above the monthly sunspot number since 1749, with its smoothed curve. Each minimum of the smoothed curve is marked. Move the date by dragging in the picture or with the **Date** slider; with the slider's knob clicked, the left and right arrow keys move one month at a time. Click the Date readout to type a year, such as 1954.3.
- Spots shows a patch of the surface with a sunspot. The sliders set the umbra's temperature and size and its magnetic field; the check box **Cut the spot out and hang it in the night sky** shows how bright the spot alone would look from Earth.
- Record reading (Cycle mode only) stores the date, the cycle number, that month's sunspot number and the smoothed number. Export to worksheet sends the readings to the first data table. Clear starts a new series, which goes into a new copy of the table.
- The data: sunspot numbers from WDC-SILSO, Royal Observatory of Belgium (version 2.0); spot positions from the Royal Greenwich Observatory and NOAA. The minima are the lowest smoothed values within 5 years either side, and cycles are counted from the one that began in 1755.

</details>

## Goal

Measure the length of the solar cycle from 130 years of sunspot counts, predict when the next cycle begins, and find out how dark a sunspot really is.

## Background

**Sunspots.** The Sun's visible surface, the photosphere, is about 5,772 K. Sunspots are patches where bundles of strong magnetic field, thousands of times Earth's, break through the surface and choke off the boiling motions that carry heat up from below. The dark center of a spot, the umbra, is about 4,000 K (spots differ: the textbook quotes a typical 3,800 K, which the demo has as the setup **A darker spot, 3,800 K**). Each square meter of a hot surface gives off light in proportion to the fourth power of its temperature, so a cooler patch gives off

$$\frac{\text{light from the spot}}{\text{light from the surface}} = \left(\frac{T_\text{spot}}{T_\text{surface}}\right)^4$$

of the light of an equal area of normal surface. A spot is not cold: 4,000 K is hotter than a light bulb filament.

**Counting spots.** Astronomers have counted sunspots every day since the 1700s and combine the counts into a monthly sunspot number. Because the count jumps around from month to month, it is also averaged over 13 months, which gives a smooth curve. That curve rises and falls in the **solar cycle**: from a minimum with almost no spots, up to a maximum with a hundred or more, and down again. Cycles are numbered from the one that began in 1755; the cycle we are in now, cycle 25, began at the minimum of December 2019. The magnetic field of the Sun flips at every maximum, so it takes two cycles to get back where it started.

**A straight line from a cycle.** If every cycle lasted the same time $$P$$, the date of the minimum that starts cycle number $$n$$ would be

$$\text{date} = \text{(a starting date)} + P\,n,$$

a straight line with slope $$P$$ when the dates are graphed against the cycle numbers. Real cycles are not all the same length, so the points scatter about the line, and the slope is the average length.

## Before the lab

1. A sunspot's umbra is 4,500 K and the surrounding surface is 5,772 K. What fraction of the surface's light does each square meter of the spot give off?
2. The smoothed sunspot number of cycle 25 peaked in late 2024. If cycles last about 11 years, when do you expect the next maximum?
3. Cycle 13 began in 1890 and cycle 25 in 2019. What is the average length of the cycles in between?
4. In photographs a sunspot looks almost black. Suppose you could cut out a 4,000 K umbra and hang it alone in the night sky, at the Sun's distance. Would it look much fainter than the full Moon, about as bright, or brighter? Write your guess and why before you open the demo.

## Safety

No hazards in the virtual lab.

## Procedure

**Part 1. The minima.** Open the demo and choose **Cycle** above the picture. The lower graph is the sunspot number, with the smoothed curve drawn bold and each minimum marked.

1. Find the minimum that starts cycle 13: click the **Date** readout, type 1890 and press Enter. Then click the knob of the **Date** slider and press the left and right arrow keys, one month at a time, until the **Smoothed** readout is as small as it gets. The **Cycle** readout should now say 13. Press **Record reading** in the Readings section of the sidebar.
2. Do the same for the minima that start cycles 15, 17, 19, 21, 23 and 25, near the years 1913, 1934, 1954, 1976, 1996 and 2019.
3. Press **Export to worksheet**. The seven readings fill Table 1 below.

**Part 2. The peaks.** Find the highest value of the smoothed curve in cycles 19, 24 and 25 (the setups **Cycle 19, the biggest**, **Cycle 24** and **Now, cycle 25** take you close; then step month by month). Type each peak's date and smoothed sunspot number into Table 2.

**Part 3. How dark is a spot?** Choose **Spots** above the picture and press **A sunspot, 4,000 K**. In Table 3, record the **Light per m², spot ÷ surface** readout. Then tick **Cut the spot out and hang it in the night sky** and record **Spot alone, seen from Earth** (its magnitude) and **Spot ÷ full Moon**. Set the **Spot temperature** to 4,500 K (click its readout to type it) and record the same three readouts on the second row.

The full Moon is magnitude −12.74, and in magnitudes a smaller number means brighter. Read Table 3 for the 4,000 K spot: is its magnitude above or below the Moon's, and how many times the Moon's light does it give?

## Data

**Table 1. Minima of the smoothed sunspot number.**

| Reading | Date | Date (year) | Cycle | Sunspot number that month | Smoothed sunspot number |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

**Table 2. Peaks.**

| Cycle | Date of the peak (year) | Peak smoothed sunspot number |
|---|---|---|
| 19 | | |
| 24 | | |
| 25 | | |

**Table 3. A sunspot alone.**

| Spot temperature (K) | Light per m², spot ÷ surface | Spot alone, magnitude | Spot ÷ full Moon |
|---|---|---|---|
| 4000 | | | |
| 4500 | | | |

## Analysis

1. Graph the date of each minimum, Date (year), (vertical) against the cycle number (horizontal) for Table 1 and fit a straight line. The slope is the average length of a cycle: what is it, in years?
2. Use your line to predict the date of the minimum that will start cycle 26 (put $$n = 26$$ into the line).
3. From Table 2, how many times higher was the peak of cycle 19 than the peak of cycle 24?
4. Use Table 3 to check your answer to Before the lab 1 for the 4,500 K spot.

## Uncertainty

Near a minimum the smoothed curve is nearly flat. Step through the months around one of your minima and find how many months the smoothed number stays within 1 of its lowest value. About how many years either way could you have picked for that minimum? Compare that with how far your points sit from the fitted line.

## Questions

1. Look at the cycle lengths in your table and the heights in Table 2. Is the solar cycle the same length and the same height every time? Why do you think astronomers have trouble predicting how strong the next cycle will be?
2. Go to the start of cycle 19 (1954) and move forward through the cycle, watching the butterfly diagram above the graph. Where on the Sun, in latitude, do the first spots of a new cycle appear, and where are the last ones?
3. Go back to your guess in Before the lab 4. Compare it with the 4,000 K row of Table 3. A spot gives off only a fraction of the surface's light per square meter, so why does it look black in photographs of the Sun, yet would outshine the full Moon on its own?

## What to hand in

Prelab answers, the three tables, the graph with its fit, the answers to the analysis and uncertainty sections, and answers to the questions. Table 1 and Table 2 are real measurements (WDC-SILSO); Table 3 comes from the demo's model.
