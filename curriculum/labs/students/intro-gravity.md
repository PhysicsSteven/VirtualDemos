# Gravity from the Ground to Orbit
Student worksheet · Astro 2203

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/gravity-near-earth.html?ws=intro-gravity)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Places in the demo:** Sea level; Top of Everest; Airliner, 11 km; Space station, about 400 km; GPS, r = 26,560 km; Geostationary, r = 42,164 km. Any other height from 0 to 40,000 km can be set, at any latitude, on Earth, the Moon or Mars.

**Using the demo.**

- A 1.000 kg mass hangs from a spring scale at the chosen height and latitude. If the height is above the ground, imagine the scale held up on a tall tower that turns with the planet. The picture shows the gravity arrow and a graph of g against height.
- The readouts give the distance from the planet's center r, the pull of gravity alone, and the scale reading g: what the scale feels once the planet's spin is included. At sea level on Earth they also give the real Earth's value from the standard formula for its shape (WGS 84).
- Record reading stores the planet, the height, the latitude, r and both values of g. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Each planet is a uniform sphere with its measured mass and mean radius (Earth 6371 km, the Moon 1737.4 km, Mars 3389.5 km), turning once a day. The real Earth is slightly flattened at the poles, which a sphere leaves out.

</details>

## Goal

Measure how Earth's gravity weakens as you go farther from its center, and compare the gravity on Earth, the Moon and Mars.

## Background

**Newton's law of gravity.** Every mass pulls on every other mass. The pull gets weaker with distance as the inverse square: twice as far from the center of a planet means one quarter of the pull, three times as far means one ninth. What counts is the distance from the planet's **center**, not from its surface: standing on the ground you are already one Earth radius, 6371 km, from the center.

**Weight and mass.** Your mass, the amount of matter in you, is the same everywhere. Your weight is the force of gravity on you, your mass times the local gravity g:

$$W = m\,g.$$

With m in kilograms and g in m/s², the weight comes out in newtons (N).

**Spin.** A scale on the ground turns with the planet once a day. A little of gravity's pull goes into carrying the scale around that circle, so the scale reads slightly less than gravity alone, most at the equator.

## Before the lab

1. If you moved to twice as far from Earth's center as the ground is, what fraction of the pull of gravity would be left?
2. The space station flies about 400 km above the ground, so it is 6371 + 400 = 6771 km from Earth's center. Using the inverse square law, what fraction of the gravity at the ground is left up there?
3. An astronaut has a mass of 70 kg on Earth. What is the astronaut's mass on the Moon? Will the astronaut's weight be the same?

## Safety

No hazards in the virtual lab.

## Procedure

**Climbing away from Earth.** Choose Earth, set the latitude to 0° (the equator) and keep the planet's rotation included. Record a reading at each of the six places: sea level, the top of Everest, an airliner, the space station, the GPS satellites and the geostationary satellites. Send the readings to the worksheet, then clear them.

**Other worlds.** At sea level and the equator, record a reading on Earth, on the Moon and on Mars. Send them to the worksheet.

## Data

| Reading | World | Height above the ground (km) | Distance from the center r (thousand km) | Gravity alone (m/s²) | Scale reading g (m/s²) | Weight of a 70 kg astronaut (N) | (6.371 / r)² |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

## Analysis

1. For each reading of the climb, find (6.371 / r)², the square of Earth's radius divided by the distance from the center, and fill in that column.
2. Graph gravity alone against (6.371 / r)². What kind of line do you get? Find the slope and intercept, and explain what the slope means. (Hint: what is (6.371 / r)² at the ground?)
3. What percentage of the gravity at sea level is left at the space station? Compare with your answer to Before the lab 2.
4. Gravity at the top of Everest and at an airliner's height is almost the same as at sea level. By what percentage is it smaller at the airliner's height?
5. Compare the scale reading with gravity alone at each height. At which place does the scale read almost zero? A satellite at that height goes around Earth exactly once a day, the same as the ground turns. What does that have to do with the scale reading?
6. For the other worlds, find the weight of a 70 kg astronaut on Earth, the Moon and Mars. How many times lighter is the astronaut on the Moon, and on Mars?

## Uncertainty

The demo computes its readouts from Newton's law, so a repeated reading gives the same numbers. At sea level on Earth, compare the demo's scale reading at the equator with the real Earth's value it shows (WGS 84). What does the demo leave out that could explain the difference?

## Questions

1. An astronaut on the space station floats around the cabin, yet you found that most of Earth's gravity is still there. Explain why the astronaut floats. (Hint: the station is moving sideways at about 7.7 km/s.)
2. If you can jump 0.5 m high on Earth, how high could you jump on the Moon with the same push? Use your scale readings, and the fact that the height of a jump goes as 1/g.
3. The Moon is 384,400 km from Earth's center, about 60.3 Earth radii. Use the inverse square law to find Earth's gravity at the Moon's distance. Newton compared this with how fast the Moon curves around Earth each month and found they agree: the same gravity that drops an apple holds the Moon in its orbit.
4. Mars has 0.107 times Earth's mass and 0.532 times its radius. Gravity at a planet's surface goes as its mass divided by its radius squared. Predict Mars's surface gravity as a fraction of Earth's, then compare with your measured readings.

## What to hand in

Prelab answers, the two table copies and the graph, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.
