# Tidal Forces
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §13.6. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/tides.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Total pull vs tidal pull; Two bulges; A day at the beach; Spring and neap; Moon closer (1/d³); Sun vs Moon.

**Using the demo.**

- The **Pull on Earth** view shows the Moon's pull at points around Earth, or the tidal pull (the pull at a point minus the pull at Earth's center). The Moon's distance runs from 40 to 120 Earth radii; today it is 60.34 Earth radii (384,400 km).
- Its readouts give the pull at Earth's center, the tidal acceleration along the Earth–Moon line from the formula $$2GM_\text{Moon}R_E/d^3$$, the exact values on the near and far sides, and the tidal acceleration across (at the sides).
- The **Ocean bulges** view shows an ocean covering the whole Earth, a city on the equator and the water level there over two days and over a month. Its readouts give the height of each body's tide, the city's water level, the day's range and when the next high tide comes. Time runs from the clock and the days since new moon.
- Record reading works in the Pull on Earth view. It stores the Moon's distance and the accelerations in μm/s² (1 μm/s² = 10⁻⁶ m/s²) to four significant figures. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table. Read the water levels in the Ocean bulges view from the panel.

**What the demo models.**

- Point masses, with G = 6.674 × 10⁻¹¹ N·m²/kg² (CODATA 2022) and standard astronomical values (the textbook's tables give them to three figures): M_Moon = 7.342 × 10²² kg, M_Sun = 1.989 × 10³⁰ kg, M_E = 5.972 × 10²⁴ kg, R_E = 6371 km, Moon 384,400 km and Sun 1.496 × 10⁸ km away. The exact pulls come from $$GM/r^2$$ at each point.
- The ocean is the equilibrium tide: the water surface follows the tidal pull at once, with height $$h = A(3\cos^2\theta - 1)/2$$ and $$A = (M/M_E)(R_E/d)^3 R_E$$, where $$\theta$$ is measured from the point under the Moon or Sun. It leaves out the water's own gravity, Earth's elastic stretch, continents and ocean basins, and the time the water takes to respond. The Moon and Sun move in circles in the plane of Earth's equator. The synodic month is 29.53 days.

</details>

## Goal

Measure how the Moon's pull and its tidal pull fall off with distance, see why the tide falls off faster, and compare the tides raised by the Moon and the Sun.

## Background

The Moon pulls every part of Earth toward it, but not equally: the near side is pulled more than the center, and the center more than the far side. Relative to Earth's center, the near side is pulled toward the Moon and the far side away from it, which stretches the oceans into two bulges (§13.6). Along the Earth–Moon line, the difference between the pull on the near side and the pull at the center is

$$a_\text{tidal} = GM\left[\frac{1}{(d - R_E)^2} - \frac{1}{d^2}\right] \approx \frac{2GMR_E}{d^3} \quad (R_E \ll d),$$

while the pull at the center is $$GM/d^2$$. So the tidal acceleration is the pull times $$2R_E/d$$, and it falls off as $$1/d^3$$. At the sides the tidal acceleration points toward Earth's center with half that size. If $$d$$ is measured in Earth radii, a graph of the pull against $$1/d^2$$ has slope $$GM/R_E^2$$, and a graph of the tidal acceleration against $$1/d^3$$ has slope $$2GM/R_E^2$$.

For an ocean that follows the tidal pull, the water stands highest under the body and opposite it, a height $$A$$ above the mean, and lowest at the sides, $$A/2$$ below it, so one body gives a daily range of $$1.5A$$. The Sun's tide adds to the Moon's at new and full moon (spring tides) and partly cancels it at the quarters (neap tides).

## Before the lab

1. If the Moon were half as far away, by what factor would its pull on Earth change? Its tidal pull?
2. The Sun pulls on Earth about 180 times as hard as the Moon does. Predict, with a reason, whether the Sun's tide is bigger or smaller than the Moon's.
3. Why are there two high tides a day and not one?
4. The near side and far side tidal accelerations are nearly equal. Which do you expect to be a little larger, and why?

## Safety

No physical apparatus is used. At a real shore, check tide tables before walking on tidal flats: the water can come in faster than you can walk.

## Procedure

**Distance scan.** With the Moon's pull on Earth shown, record a reading with the Moon at 40, 50, 60.34 (today), 70, 80, 90, 100 and 120 Earth radii. Send the readings to the worksheet.

**Sun and Moon.** Move the Moon back to today's distance and switch to the ocean bulges. Read the height of the Moon's tide and the Sun's tide. With the Sun's tide included, read the day's range at new moon (0 days), first quarter (7.38 days), full moon (14.77 days) and third quarter (22.15 days), and enter them in the second table.

**Timing.** With the Moon's tide alone, find the times of three successive high tides at the city and write down the intervals between them.

## Data

| Reading | Moon's distance d (Earth radii) | Pull at Earth's center (μm/s²) | Tidal pull, near side (μm/s²) | Tidal pull, far side (μm/s²) | Mean of near and far (μm/s²) | 1/d² (d in Earth radii) | 1/d³ (d in Earth radii) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Fill in the last three columns yourself.

| Days since new moon | Moon phase | Range today (m) |
|---|---|---|
| | | |
| | | |
| | | |
| | | |

Record the Moon's tide $$A_\text{Moon}$$, the Sun's tide $$A_\text{Sun}$$ and the times of the three high tides in the notes.

## Analysis

1. Fit the pull at Earth's center against $$1/d^2$$. From the slope find $$GM_\text{Moon}$$ and then the Moon's mass (use $$R_E$$ = 6371 km and $$G$$ from About the demo). Compare it with $$7.342 \times 10^{22}$$ kg.
2. Fit the mean of the near and far side tidal pulls against $$1/d^3$$. Compare the slope with twice the slope from Analysis 1, and explain why it should be twice.
3. At each distance, find the ratio of the near side to the far side tidal pull. Show that it is close to $$1 + 3R_E/d$$, and say why the near side is larger.
4. Using your data, by what factor did the pull and the tidal pull grow when the Moon came in from 60.34 to 40 Earth radii? Compare with $$(60.34/40)^2$$ and $$(60.34/40)^3$$.
5. Find $$A_\text{Sun}/A_\text{Moon}$$ from your readings and compare it with $$(M_\text{Sun}/M_\text{Moon})(d_\text{Moon}/d_\text{Sun})^3$$. Then find the ratio of the Sun's pull to the Moon's, $$(M_\text{Sun}/M_\text{Moon})(d_\text{Moon}/d_\text{Sun})^2$$. Explain how the Sun can pull harder but raise the smaller tide.
6. Compare your spring and neap ranges with $$1.5(A_\text{Moon} + A_\text{Sun})$$ and $$1.5(A_\text{Moon} - A_\text{Sun})$$.
7. From your timing, how long is it from one high tide to the next? Explain why it is not exactly 12 h.

## Uncertainty

The accelerations are recorded to four significant figures and the distances are exact settings, so the scatter about your fits comes from rounding; use the standard error of each slope. The formula $$2GMR_E/d^3$$ is the first term of a series in $$R_E/d$$; the mean of the near and far sides differs from it by about $$2(R_E/d)^2$$ of itself, which is 0.1% at 40 Earth radii. Say whether your fit can see that. The ocean model is an idealization: say which of its simplifications most limits it as a prediction of real tides.

## Questions

1. Why does the far side of Earth bulge away from the Moon?
2. The Sun pulls about 180 times as hard as the Moon. Why is its tide less than half the Moon's?
3. Why does high tide come about 50 minutes later each day?
4. Real tidal ranges run from a few centimeters to over 15 m, while the model gives under 1 m everywhere. What does the model leave out that can make real tides so much larger in some places?

## What to hand in

Prelab answers, both tables with the distance scan's graphs and fits, the Moon's mass with its uncertainty, the near and far side comparison, the Sun and Moon ratios, the spring and neap ranges, the tide timing and answers to the questions. Identify simulated data.
