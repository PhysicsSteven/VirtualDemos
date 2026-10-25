---
title: Craters, Cooling and Surface Ages
level: Astro 2203 Topics 6, 7 and 8 (impacts and geology, the inner planets, Mars geology); Astronomy module
time: 10 to 45 minutes
---
## What students should come away with

- An impact crater is far wider than the asteroid that made it, 10 to 30 times, and grows more slowly than the asteroid: crater size goes about as L^0.78 for simple craters. Weaker gravity and a faster asteroid make a bigger crater.
- Craters change shape with size: simple bowls, then collapsed craters with a flat floor, terraces and a central peak, then basins with a ring of peaks. The size where bowls collapse goes as 1/g: about 3 km on Earth, about 19 km on the Moon.
- Older surfaces have more craters. Counting craters per km² and reading a calibrated clock dates a surface; the clock was calibrated with Apollo and Luna samples and is steep before about 3.5 Gyr, when impacts were far more frequent.
- A count of N craters is uncertain by about √N, and very old surfaces saturate: new craters erase old ones, so their counts give too young an age.
- Small worlds have more surface for each cubic kilometer of rock (area ÷ volume = 3/R), so they lose their heat sooner; their cold lid thickens fastest, and their volcanism stops first. The Moon went quiet billions of years ago, Mars more recently, Earth not at all.

## Before class

Three parts, chosen above the picture. **Make a crater**: target Moon, Mercury, Venus, Earth or Mars; asteroid ice, porous rock, dense rock or iron; diameter 10 m to 400 km on a log slider; speed 5 to 70 km/s; angle 15° to 90°; Drop it plays the impact (the transient bowl, then its collapse). The flat view shows the crater from above and in cross section with the asteroid to scale; the graph shows crater size against asteroid size with the two transitions. Presets: a 500 m asteroid on the Moon, Meteor Crater, Tycho, Copernicus, Chicxulub, Mead (Venus), Orientale, Caloris and Hellas (each lands within 5 % of the real crater, or at the basin's main ring for the three basins, which are beyond the law's fitted range). **Count craters**: five lunar and four Martian simulated surfaces and a Mystery; click to mark each crater at least as wide as the purple circle, with its center in the square; the graph is the crater clock for that crater size, with your count and the age it gives. Show the right count gives the demo's count and the surface's set age. **Cooling**: a Moon, a Mars and an Earth, the same rock and starting temperature; a time slider over 4.5 Gyr; graphs of the cold lid, the heat flow and the temperature inside. The Astro 2203 worksheets are intro-craters (Topic 6) and intro-mars-ages (Topic 8).

## Running it in class

1. **A 500 m asteroid (Moon).** Ask Q1. Drop it, then double the diameter a few times: the crater does not double.
2. **Copernicus**, then **Chicxulub**. The flat floor and central peak, then a ring of peaks. Ask Q2.
3. Count **Mare Tranquillitatis**, then **Highlands**. Ask Q3, then show the right count on the Highlands and compare the clock's expected count with the real one (saturation).
4. **Copernicus floor** and **Tycho floor**: few craters, young ages. Ask Q4 about counting uncertainty.
5. **Cooling**, Today, with the cold lid graph. Ask Q5.

## Questions

**Q1.** A 500 m rocky asteroid at 18 km/s makes an 11.7 km crater on the Moon. Without the demo, about how big a crater would a 1 km asteroid make if it stayed a simple bowl (D ∝ L^0.78)? What does the demo give, and why the difference?

**Q2.** Chicxulub is about 180 km wide and the same asteroid would make a bigger crater on the Moon. Why does gravity matter to the size of a crater?

**Q3.** Mare Tranquillitatis has about 0.011 craters wider than 1 km per km² and the highlands about 0.0019 craters wider than 8 km per km². Which is older? Why can't the two numbers be compared directly?

**Q4.** The Tycho floor gives 36 craters wider than 0.1 km on 100 km². How well does that fix its age, and what would make the age more certain?

**Q5.** Today the model's cold lid is 415 km on the Moon, 249 km on Mars and 103 km on Earth. Why, when all three started equally hot and are made of the same rock?

## Common misconceptions

- **"The crater is the size of the asteroid."** It is 10 to 30 times wider: the asteroid's energy, not its size, digs the crater, and an asteroid at 18 km/s carries over 40 times the energy of its own mass of TNT.
- **"Craters are volcanic."** Some were thought so until the 1960s; their shapes, their sizes from meters to basins, their rays and shocked minerals show impact.
- **"Impacts happen at a steady rate."** The rate has been about steady for the last 3 Gyr, but was far higher before about 3.5 Gyr ago; that is why the highlands are so crowded and the maria are not.
- **"The Moon is cold because it is far from the Sun."** It is the same distance from the Sun as Earth; it lost its internal heat because it is small.

## Physics behind the demo

- Crater size: Collins, Melosh and Marcus (2005), Meteoritics & Planetary Science 40, 817: D_tc = 1.161 (ρi/ρt)^(1/3) L^0.78 v^0.44 g^−0.22 (sin θ)^(1/3); simple craters D = 1.25 D_tc with the breccia lens depth relations (d ≈ 0.21 D); complex D = 1.17 D_tc^1.13 / D_c^0.13. D_c = 3.2 km on Earth, scaled as 1/g elsewhere (Pike 1980): 19.4 km on the Moon, 8.5 km on Mercury and Mars. Peak rings from 200 km on the Moon (Baker and others 2012), scaled the same way (87 km on Mars, against the smallest peak ring basin seen there, 101 km, Baker and others 2016). Complex depths: 0.4 km (D/1 km)^0.3 on Earth (Collins and others), 1.044 km (D/1 km)^0.301 on the Moon (Pike 1977), between them as (9.81/g)^0.533 elsewhere. Shapes are schematic. Left out: the air (which breaks up small asteroids at Venus and Earth: Venus has no craters under about 1.5 km, Schaber and others 1992), the planet's curvature, and the ejecta beyond the rim; basins hundreds of km wide are outside the law's fitted range.
- Crater clock: lunar N(1) = 5.44 × 10⁻¹⁴ (e^(6.93T) − 1) + 8.38 × 10⁻⁴ T per km² and the production function (Neukum, Ivanov and Hartmann 2001, Space Science Reviews 96, 55); Mars N(1) = 2.68 × 10⁻¹⁴ (e^(6.93T) − 1) + 4.13 × 10⁻⁴ T (Hartmann and Neukum 2001) with Ivanov's (2001) production function. Surfaces are simulated: craters at random places, sizes from the production function and times from the clock; a new crater erases every older, smaller crater whose center it covers. Young surfaces count back to their set age within √N (curriculum/validation/test_craters.cjs); the highlands at 4.3 Gyr keep about half their craters.
- Cooling: one mantle temperature per planet, ρcV dT/dt = ρVH(t) − Aq with q = k ΔT (ρgαΔT/(κηRa_c))^(1/3) (boundary layer theory, Turcotte and Schubert, Geodynamics), viscosity 10²¹ Pa·s at 1600 K with an activation energy of 300 kJ/mol, U, Th and K at bulk silicate Earth levels (McDonough and Sun 1995) with heat outputs and half lives from Turcotte and Schubert Table 4.2. The cold lid is the conductive layer k ΔT/q. Same rock and rule for all three, no core heat, no melting: the model gives the Moon 11 mW/m² today (Apollo measured 21 and 14), Mars 20 mW/m² (not yet measured), and Earth 50 mW/m² against a measured 92, because Earth's core and continental radioactivity are left out.

## Going further

- Pair with **Radioactive Decay** for the rock ages that calibrate the clock, and with **Planet Temperatures and Habitable Zones** for why the Moon and Mercury kept no air.
- Count real craters: LROC QuickMap (Moon) or Mars Trek show crater rims on real images; count a mare and a highland patch at the same size and compare with the demo.
- Try the Mystery surface: count, read the age, then show the right count.
