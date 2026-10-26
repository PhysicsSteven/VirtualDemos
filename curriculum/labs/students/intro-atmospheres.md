# Why Small, Hot Planets Lose Their Air
Student worksheet · Astro 2203

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/ideal-gas.html?ws=intro-atmospheres)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Relax to equilibrium; Hot vs cold; Compress; Dilute gas; Near absolute zero; Cold walls; Hot wall, cold wall; and four setups with two gases. This worksheet uses Relax to equilibrium.

**Using the demo.**

- The box holds a gas of molecules that fly around and bounce off each other and the walls. The histogram below the box counts how many molecules have each speed, with the curve the speeds settle into (the Maxwell-Boltzmann distribution).
- The Gas card chooses the gas (hydrogen H₂, helium, nitrogen N₂, argon or carbon dioxide CO₂) and sets the temperature. Choosing a gas starts it again at the temperature on the slider. Every gas is drawn as the same small disks; only the mass of a molecule changes.
- The gas in the box moves in two dimensions, flat on the screen. A real gas moves in three, which makes it a little faster at the same temperature, so the readouts give both: the rms speed in the box, and the rms speed of a real gas at the same temperature.
- Record reading stores the gas, the mass of one molecule, the temperature and the speeds. Export to worksheet sends the readings to the first Data table below; Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Find out how fast the molecules of a gas move, how that depends on the temperature and on the mass of the molecules, and use it to explain why the Moon and Mercury have no air, why Earth has lost its hydrogen and helium, and why Jupiter has kept everything.

## Background

**Temperature is speed.** The molecules of a gas are always moving, in every direction and at many different speeds. Temperature measures their average energy of motion: the hotter the gas, the faster the molecules. A typical speed is the **rms speed** (root mean square: square the speeds, average them, take the square root). For a real gas,

- rms speed = √(3kT ÷ m),

where T is the temperature in kelvins, m the mass of one molecule and k = 1.380649 × 10⁻²³ J/K, Boltzmann's constant. At the same temperature, light molecules move faster than heavy ones.

**Escape speed.** A molecule moving up faster than the escape speed of its planet leaves for good: 11.2 km/s for Earth, only 2.4 km/s for the Moon. The rms speed of every gas is far below that, but the speeds spread out, and a few molecules in the fast tail of the distribution always move several times faster than the rms speed. Over billions of years even these few drain a gas away if the escape speed is not high enough.

**The rule of thumb.** A planet keeps a gas for billions of years if its escape speed is at least 6 times the gas's rms speed (Freedman, Geller and Kaufmann, *Universe*, Box 7-2). Well below 6, the gas is lost.

## Before the lab

1. Which do you expect to move faster at room temperature, a hydrogen molecule (mass 2 u) or a carbon dioxide molecule (44 u)? About how many times faster? (u is the atomic mass unit.)
2. If a gas is heated from 300 K to 1200 K, four times the temperature, how many times faster does it move? Use the formula.
3. Guess: why does the Moon, at the same distance from the Sun as Earth, have no air?

## Safety

No hazards in the virtual lab.

## Procedure

**Part 1: hotter is faster.** Choose Relax to equilibrium, then Argon. Set the temperature to 100 K, choose Random (thermal) starting speeds, and let the gas run for a few seconds so the histogram settles onto the curve. Record a reading. Do the same at 300 K and 1000 K. Send the three readings to the worksheet, then clear them.

**Part 2: lighter is faster.** Set the temperature back to 300 K. Choose each gas in turn (hydrogen, helium, nitrogen, argon, carbon dioxide), let it settle for a few seconds, and record a reading. Watch the histogram spread out for the light gases. Send the five readings to the worksheet; they go into a second copy of the table.

**Part 3: who keeps what.** With your Part 2 readings, fill in the second table below. For each body and each gas, first find the gas's rms speed at that body's temperature: rms speed at T = rms speed at 300 K × √(T ÷ 300). Then divide the escape speed by it.

## Data

| Reading | Gas | Mass of one molecule (u) | Temperature T (K) | rms speed in the box, 2D (m/s) | rms speed of a real gas, √(3kT/m) (m/s) | 1 ÷ √(mass) (1/√u) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

### Escape speed ÷ rms speed

| Body | Escape speed (km/s) | Temperature (K) | H₂ | He | N₂ | CO₂ |
|---|---|---|---|---|---|---|
| Mercury, day side | 4.3 | 700 | | | | |
| Moon, day side | 2.4 | 390 | | | | |
| Earth | 11.2 | 288 | | | | |
| Mars | 5.0 | 208 | | | | |
| Jupiter | 59.5 | 163 | | | | |
| Titan (Saturn's moon) | 2.64 | 94 | | | | |

Escape speeds: NASA's planetary fact sheets; Titan's from its mass and radius in NASA's Saturnian satellite fact sheet. Temperatures: NASA's mean temperatures for Earth, Mars and Jupiter (Jupiter's where the pressure is 1 bar); the hottest day side for Mercury (NASA) and the Moon (the Diviner instrument, Williams and others 2017); Titan's surface from the Huygens probe (Fulchignoni and others 2005).

## Analysis

1. Part 1: divide the rms speed at 1000 K by the rms speed at 100 K. The temperature went up 10 times; how many times faster did the molecules get? Compare with √10.
2. Part 2: fill in the last column, 1 ÷ √(mass), in the second copy of the table. Graph the rms speed of a real gas against 1 ÷ √(mass). Is it a straight line through the origin? What does that tell you about how speed depends on mass?
3. Part 2: how many times faster than carbon dioxide does hydrogen move? Compare with your guess in Before the lab 1.
4. Part 3: using the rule of thumb (6 or more: kept; well below 6: lost), which gases can each body keep? Which bodies can keep none of them?
5. Jupiter and Earth both formed in the same cloud of gas, which was mostly hydrogen and helium. Use your table to explain why Jupiter is still mostly hydrogen and helium while Earth has almost none of either left.

## Uncertainty

In the box the molecules trade energy in every collision, but the total never changes, so the temperature and the rms speed stay fixed while each molecule's own speed changes all the time. Watch the histogram at 300 K: roughly what share of the molecules move faster than twice the rms speed in the box at any moment? Those fast few are the ones that escape from a real planet. The bigger uncertainty is in Part 3: give two reasons the temperatures in the table might not be the temperature where molecules actually escape.

## Questions

1. By the rule, Earth at 288 K keeps helium, yet Earth's air has almost none. Molecules escape from the very top of the atmosphere, where the thin air is heated by sunlight to about 1000 K (the U.S. Standard Atmosphere, 1976). Redo Earth's check for helium at 1000 K. What do you find?
2. Titan's escape speed is about the Moon's, yet Titan has a thick nitrogen atmosphere, thicker than Earth's. Use your table to explain how.
3. Mercury's numbers for carbon dioxide come out close to 6, yet Mercury has almost no atmosphere. Mercury is the planet closest to the Sun. What else might strip its gas away?
4. Mars can keep nitrogen and carbon dioxide by the rule, yet its air is very thin. Mars is small and has no global magnetic field to shield it from the solar wind. How might that explain it?

## What to hand in

Prelab answers, the two copies of the Data table with the Part 2 graph, the Escape speed ÷ rms speed table, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.
