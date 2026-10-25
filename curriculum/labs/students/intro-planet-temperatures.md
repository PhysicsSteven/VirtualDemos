# Planet Temperatures and Habitable Zones
Student worksheet · Astro 2203

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/planet-temperatures.html?ws=intro-planet-temperatures)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Mercury; Venus; Earth; The Moon; Mars; Earth under the young Sun; Proxima Centauri b; TRAPPIST-1 e.

**Using the demo.**

- The large view shows the star, its habitable zone in green (dark green for the conservative zone, light green for the optimistic one) and the planet on its orbit, in 3D or flat from above. Drag the planet in or out to change its distance from the star. The orbits of Mercury, Venus, Earth and Mars are drawn for comparison when the star is the Sun.
- The card on the picture sets the star (its luminosity, the total power it gives out, in units of the Sun's, and its surface temperature) and the planet: its distance in astronomical units (AU), its albedo (the share of starlight it reflects), how its heat is shared (over the whole planet, the day side only, or just the spot with the star straight overhead), its greenhouse and its escape speed. Click a number on the card to type an exact value.
- Beside it, the energy budget follows one square meter: the starlight coming in, the share reflected, the heat radiation from the ground, the share that escapes to space and the share the air sends back down. The thermometer shows the planet's temperature with no greenhouse, its surface temperature in the model, the measured temperature, and where water freezes and boils.
- The chart below shows either the temperature against distance from the star, with the habitable zone, or the speeds of gas molecules against temperature compared with each world's escape speed (Keeping an atmosphere).
- The greenhouse setting is one number, the share of the ground's heat radiation that escapes to space: 1 means no greenhouse. Each setup with air starts with the value that matches the measured temperature. The readouts say what kind of simple atmosphere would give it.
- Record reading stores the planet, the distance, the starlight, the albedo and the temperatures. Export to worksheet sends the readings to the first Data table below; Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Find out what sets a planet's temperature: how much starlight reaches it, how much it reflects, and how much heat its atmosphere traps. Then find where around a star a planet could keep liquid water, and why some worlds keep their air and others lose it.

## Background

**Starlight spreads out.** A star sends its light out in every direction. At distance $$d$$ the light is spread over a sphere of area $$4\pi d^2$$, so the starlight falling on each square meter, $$S$$, falls off as one over the distance squared: twice as far means one quarter as much. At Earth's distance from the Sun, 1 AU, it is about 1361 watts on each square meter.

**A planet's energy balance.** A planet absorbs the starlight it does not reflect, and it gives the energy back to space as heat radiation (infrared light). A warmer planet radiates more: the radiation from each square meter goes up as the fourth power of the temperature in kelvins. The planet warms or cools until the two match. With no atmosphere, that balance sets the temperature. A planet's albedo is the share of starlight it reflects: about 0.29 for Earth, 0.77 for cloud covered Venus.

**The greenhouse effect.** Gases such as carbon dioxide and water vapor let sunlight through but absorb much of the heat radiation coming up from the ground, and send part of it back down. The ground warms until enough heat gets out to balance the sunlight it absorbs. The demo describes the greenhouse with one number, $$e$$, the share of the ground's heat radiation that escapes to space. A planet with $$e = 1$$ has no greenhouse; a smaller $$e$$ means a warmer surface.

**The habitable zone** is the range of distances from a star where a planet like Earth, with enough carbon dioxide and water in its air, could keep liquid water on its surface. Its edges come from detailed climate models (Kopparapu and others, 2014), not from the simple balance in this demo. A dimmer star has its zone closer in.

**Keeping an atmosphere.** Gas molecules zip around faster when they are hot and when they are light. A planet keeps a gas for billions of years only if the planet's escape speed is more than about 6 times the typical speed of that gas's molecules.

## Before the lab

1. If Earth were twice as far from the Sun, how much starlight would each square meter get, compared with now? If it were half as far?
2. Venus is closer to the Sun than Earth. If neither planet had any air, which would you guess is colder? Venus's clouds reflect 77% of the sunlight; Earth reflects about 29%.
3. Guess which worlds keep an atmosphere more easily: big ones or small ones? Hot ones or cold ones?

## Safety

No hazards in the virtual lab.

## Procedure

**Part 1: starlight and distance.** Choose the Earth setup and switch the greenhouse off. Record a reading with Earth at 0.5, 0.75, 1, 1.5, 2 and 3 AU from the Sun (click the distance on the card to type it). Send the readings to the worksheet, then clear them.

**Part 2: worlds with no greenhouse.** Choose each of Mercury, Venus, Earth, the Moon and Mars in turn, switch the greenhouse off if it is on, and record a reading. Send the five readings to the worksheet, then clear them. (Mercury and the Moon turn so slowly that the setup looks at the spot with the Sun overhead.)

**Part 3: worlds with a greenhouse.** Choose Venus, Earth and Mars in turn and record a reading with the greenhouse on, as each setup starts. Write down the greenhouse number $$e$$ and what kind of atmosphere the readouts say it is like. Send the three readings to the worksheet.

**Part 4: habitable zones.** For each row of the Habitable zone table, choose the setup and copy the star's luminosity, the edges of the conservative habitable zone and the planet's distance from the readouts. The last row is the Sun with Mars: choose the Mars setup. For Earth under the young Sun, also write down the model surface temperature.

**Part 5: keeping an atmosphere.** Switch the chart to Keeping an atmosphere. Choose the Moon, Mercury, Mars and Earth in turn (each with its greenhouse as the setup starts), and copy the escape speed, the model temperature and the gases kept and lost from the readouts into the Keeping an atmosphere table.

## Data

| Reading | Planet | Distance $$d$$ (AU) | $$1/d^2$$ (1/AU²) | Starlight $$S$$ (W/m²) | Albedo | Temperature, no greenhouse (K) | Surface temperature in the model (K) | Measured temperature (K) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

### Habitable zone

| Star | Luminosity (Sun = 1) | Inner edge (AU) | Outer edge (AU) | Planet | Planet's distance (AU) | Inside the zone? |
|---|---|---|---|---|---|---|
| Sun | | | | Earth | | |
| Young Sun, 4 billion years ago | | | | Earth | | |
| Proxima Centauri | | | | Proxima Centauri b | | |
| TRAPPIST-1 | | | | TRAPPIST-1 e | | |
| Sun | | | | Mars | | |

### Keeping an atmosphere

| World | Escape speed (km/s) | Model temperature (K) | Gases kept | Gases lost |
|---|---|---|---|---|
| Moon | | | | |
| Mercury | | | | |
| Mars | | | | |
| Earth | | | | |

## Analysis

1. Graph the starlight $$S$$ against $$1/d^2$$ for Part 1. Is it a straight line? What is its slope, and what does the slope mean? (Hint: what is $$S$$ when $$1/d^2 = 1$$?)
2. From your Part 1 table, divide the starlight at 0.5 AU by the starlight at 1 AU, and the starlight at 1 AU by the starlight at 2 AU. Compare with your answer to Before the lab 1.
3. In Part 1, the temperature with no greenhouse falls as Earth moves out, but not as fast as the starlight. Divide Earth's temperature at 0.5 AU by its temperature at 2 AU. The distance changed 4 times; how many times did the temperature change?
4. For which worlds in Part 2 is the temperature with no greenhouse close to the measured temperature? What do those worlds have in common?
5. Compare Venus and Earth in Part 2. Which gets more starlight, and which would be colder with no greenhouse? Why? Was your guess in Before the lab 2 right?
6. For Venus, Earth and Mars, subtract the temperature with no greenhouse (Part 2) from the surface temperature (Part 3). This is the warming from each planet's greenhouse. Rank the three, and say what the readouts compared each one's atmosphere to.
7. From the Habitable zone table: which planets are inside their star's zone? Earth under the young Sun is inside its zone, yet its model surface temperature, with today's albedo and greenhouse, is below freezing. What would Earth have needed four billion years ago to keep liquid water?
8. From the Keeping an atmosphere table: which world keeps no gas at all, and which gas does Earth lose? Use the escape speeds and temperatures to explain both.

## Uncertainty

The demo computes its temperatures from a balance of energy, so a repeated reading gives exactly the same numbers. The uncertainty is in what the model leaves out and in the measured temperatures. Mars's surface swings from about 184 K at night to 242 K in the afternoon at the Viking 1 landing site, around an average of about 214 K. Using your Part 2 and Part 3 readings, explain why Mars's greenhouse warming is much less certain than Venus's.

## Questions

1. Mercury is closer to the Sun than Venus, yet Venus's surface is hotter than any place on Mercury. Use your readings to explain why.
2. Without its greenhouse, Earth would average about 255 K. What would that mean for the oceans? Is the greenhouse effect good or bad for Earth? (Think about Venus as well.)
3. Proxima Centauri b gets about 64% of the starlight Earth gets and sits inside its star's habitable zone. Does that tell us it has liquid water? Name two things about the planet that we would need to know.
4. Titan, Saturn's largest moon, has an escape speed of 2.64 km/s, close to the Moon's 2.38 km/s, yet it keeps a thick nitrogen atmosphere. Use the Keeping an atmosphere chart to explain how.

## What to hand in

Prelab answers, the three copies of the first Data table and its graph, the Habitable zone and Keeping an atmosphere tables, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.
