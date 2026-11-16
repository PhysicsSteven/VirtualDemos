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
4. A box of argon at 300 K starts with every molecule moving at exactly the same speed, in random directions. The molecules then bump into each other and into the walls for a few seconds. What do you expect afterward: do they all still move at that one speed, have they spread out over a range of speeds, or have they all slowed down? Why?

## Safety

No hazards in the virtual lab.

## Procedure

**First: all at one speed.** Under Setups, choose Relax to equilibrium: it starts argon at 300 K with Equal speeds. Right away, read the Mean speed and rms speed readouts and look at the histogram. Let the gas run about 10 seconds, then read them again. Write them in your answer to Question 4.

**Part 1: hotter is faster.** Stay on Relax to equilibrium, with Argon chosen on the Gas card. Drag the Temperature slider until it reads 100 K (drag close, then click the slider and use the arrow keys), then press Random (thermal) (beside Equal speeds) and let the gas run about 5 seconds so the histogram settles onto the curve. Press Record reading. Do the same at 300 K and at 1000 K (the right end of the slider). Press Export to worksheet, then Clear.

**Part 2: lighter is faster.** Drag the Temperature slider back to 300 K. Press each gas button in turn (Hydrogen H₂, Helium, Nitrogen N₂, Argon, Carbon dioxide CO₂), let it run about 5 seconds, and press Record reading. Watch the speed axis stretch for the light gases: the histogram keeps its shape while the speeds it covers grow. Press Export to worksheet; the five readings go into a second copy of the table.

**Part 3: who keeps what.** With your Part 2 readings, fill in the second table below. For each body and each gas, first find the gas's rms speed at that body's temperature from its rms speed of a real gas at 300 K (Part 2): rms speed at T = rms speed at 300 K × √(T ÷ 300). Work out √(T ÷ 300) once for each body. Then change the escape speed to m/s (multiply km/s by 1000) and divide it by that rms speed. Write the result in the gas's column.

## Data

| Reading | Gas | Mass of one molecule (u) | Temperature T (K) | rms speed in the box, 2D (m/s) | rms speed of a real gas, √(3kT/m) (m/s) | 1 ÷ √(mass) (1/√u) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

### Escape speed ÷ rms speed

| Body | Escape speed (km/s) | Temperature (K) | H₂ | He | N₂ | CO₂ |
|---|---|---|---|---|---|---|
| Moon, day side | 2.4 | 390 | | | | |
| Earth | 11.2 | 288 | | | | |
| Jupiter | 59.5 | 163 | | | | |
| Titan (Saturn's moon) | 2.64 | 94 | | | | |

Escape speeds: NASA's planetary fact sheets; Titan's from its mass and radius in NASA's Saturnian satellite fact sheet. Temperatures: NASA's mean temperatures for Earth and Jupiter (Jupiter's where the pressure is 1 bar); the hottest day side for the Moon (the Diviner instrument, Williams and others 2017) and, in Question 3, Mercury (NASA); Titan's surface from the Huygens probe (Fulchignoni and others 2005).

## Analysis

1. Part 1: divide the rms speed at 1000 K by the rms speed at 100 K. The temperature went up 10 times; how many times faster did the molecules get? Compare with √10.
2. Part 2: fill in the last column, 1 ÷ √(mass), in the second copy of the table. Graph the rms speed of a real gas (up) against 1 ÷ √(mass) (across) for the five Part 2 readings. Is it a straight line through the origin? What does that tell you about how speed depends on mass?
3. Part 2: how many times faster than carbon dioxide does hydrogen move? Compare with your guess in Before the lab 1.
4. Part 3: using the rule of thumb (6 or more: kept; well below 6: lost), which gases can each body keep? Which bodies can keep none of them?
5. Jupiter and Earth both formed in the same cloud of gas, which was mostly hydrogen and helium. Use your table to explain why Jupiter is still mostly hydrogen and helium while Earth has almost none of either left.

## Uncertainty

In the box the molecules trade energy in every collision, but the total never changes, so the temperature and the rms speed stay fixed while each molecule's own speed changes all the time. Watch the histogram at 300 K: roughly what share of the molecules move faster than twice the rms speed in the box at any moment? Those fast few are the ones that escape from a real planet. The bigger uncertainty is in Part 3: give two reasons the temperatures in the table might not be the temperature where molecules actually escape.

## Questions

1. By the rule, Earth at 288 K keeps helium, yet Earth's air has almost none. Molecules escape from the very top of the atmosphere, where the thin air is heated by sunlight to about 1000 K (the U.S. Standard Atmosphere, 1976). Redo Earth's check for helium at 1000 K. What do you find?
2. Titan's escape speed is about the Moon's, yet Titan has a thick nitrogen atmosphere, thicker than Earth's. Use your table to explain how.
3. Worked out the same way as your table, Mercury's day side (escape speed 4.3 km/s, 700 K) gives a number close to 6 for carbon dioxide, and Mars can keep nitrogen and carbon dioxide by the rule, yet Mercury has almost no atmosphere and Mars's air is very thin. Mercury is the planet closest to the Sun; Mars is small and has no global magnetic field to shield it from the solar wind. What else might strip their gas away?
4. Before the lab 4 asked what collisions do to molecules that all start at one speed. What did the Mean speed, the rms speed and the histogram do in your first run? Collisions between molecules lose no energy: use that to explain why the rms speed stayed the same while the speeds spread out, and why that spread matters for the Background's rule of thumb.

## What to hand in

Prelab answers, the two copies of the Data table with the Part 2 graph, the Escape speed ÷ rms speed table, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.
