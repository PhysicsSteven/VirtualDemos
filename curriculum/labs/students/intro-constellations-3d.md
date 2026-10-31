# Constellations in 3D
Student worksheet · Astro 2203

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/celestial-sphere.html?ws=intro-constellations-3d&outside=distances&con=UMa)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Using the demo.**

- This worksheet uses the Real distances switch on the left hand picture of The Sky and the Celestial Sphere. It places the stars of one constellation's figure at their real distances from the Sun, measured in light years (ly). One light year is the distance light travels in a year, about 9.46 trillion km.
- The menu beside the switch picks the constellation. In Ursa Major the figure drawn is the Big Dipper.
- From Earth shows the figure as it looks in our sky. From the side turns the view a quarter turn, with the Sun on the left, so you can see how far away each star is. You can also drag to turn the view and use the wheel to zoom. The dashed lines are lines of sight from the Sun, with a distance scale along them.
- Each dot is drawn as bright as the star would look from where the view is, so the dots change as you turn and zoom.
- The Real distances section beside the picture lists the stars of the figure, with their apparent magnitude V, distance and absolute magnitude M. Click a star or a row to select it.
- Record reading stores one row for every star of the figure. Export to worksheet sends the readings to the worksheet; Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Find out whether the stars of a constellation are really near each other in space, and use their distances to find how much light each star gives out.

## Background

**Constellations.** A constellation is a pattern of stars as seen from Earth. Its stars look close together on the sky because they lie in nearly the same direction from us, but they can be at very different distances.

**Distances.** The distances in the demo come from parallax: as Earth goes around the Sun, a nearby star seems to shift a tiny angle against far more distant stars. The Hipparcos satellite measured these angles for about 118 000 stars. The farther the star, the smaller the shift, so the distances of the farthest stars are the least certain.

**Magnitudes.** Astronomers measure how bright a star looks with its apparent magnitude V. Smaller numbers are brighter, and a difference of 5 magnitudes is a factor of exactly 100 in brightness. The absolute magnitude M is the magnitude the star would have if it were 10 parsecs (32.6 light years) away:

$$M = V - 5\log_{10}\left(\frac{d}{32.6\ \text{ly}}\right)$$

Because every star is compared at the same distance, M tells you how much light the star really gives out. The Sun's absolute magnitude in visible light is 4.81, so a star's visible light output compared with the Sun's is

$$\frac{L}{L_\odot} = 10^{\,0.4\,(4.81 - M)}$$

The demo counts only visible light (the V filter) and leaves out dust between the stars, which dims distant stars a little.

## Before the lab

1. Light spreads out as it travels, so its brightness falls off as the square of the distance. Two stars look equally bright, but one is 10 times farther away than the other. How many times more light does the farther star give out?
2. A star has V = 2.0. What is its absolute magnitude M if it is 32.6 ly away? If it is 326 ly away?
3. Make a guess before you measure: are the seven stars of the Big Dipper all at about the same distance from us?

## Safety

No hazards in the virtual lab.

## Procedure

**Part 1. The Big Dipper.** Switch the left hand picture to Real distances and choose Ursa Major. Look at the figure from Earth, then from the side, and sketch what you see from the side. Record a reading.

**Part 2. Orion.** Choose Orion, look at it from Earth and from the side, and sketch the side view. Record a reading.

**Part 3. Cassiopeia.** Choose Cassiopeia, look at it from Earth and from the side, and sketch the side view. Record a reading, then send the readings to the worksheet.

## Data

| Reading | Constellation | Star | Apparent magnitude V | Distance (ly) | Absolute magnitude M | Visible light (Sun = 1) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

## Analysis

1. For each constellation, which star is nearest and which is farthest? Divide the farthest distance by the nearest.
2. Which of the three constellations has its stars closest to being at the same distance? Was your guess in Before the lab 3 right?
3. Use the formula in the Background to work out M for Rigel from its V and distance. Compare with the demo's value.
4. Bellatrix and Alnilam in Orion look almost equally bright. Compare their distances. How many times more visible light does Alnilam give out than Bellatrix? Compare with what your answer to Before the lab 1 would predict from their distances alone.
5. Of all the stars you recorded, which gives out the most visible light, and how many times the Sun's is that? Which gives out the least?
6. In Cassiopeia, Caph and γ Cas look nearly equally bright. How many times farther away is γ Cas? How many times more visible light does it give out?
7. Describe what Orion looks like from the side. Would the figure of Orion look the same to someone living near a star 500 ly from Earth in a different direction?

## Uncertainty

A star's distance is 1 divided by its parallax: a parallax of 1 milliarcsecond (mas) means 1000 parsecs, or 3262 ly. Alnilam's parallax is about 1.65 mas. If that measurement could be off by 0.5 mas either way, what range of distances in light years could Alnilam have? How would that change its absolute magnitude and its visible light output? Why are the distances of the Big Dipper stars much more certain?

## Questions

1. Explain in your own words why the stars of a constellation are not a real group in space, even though they look like one.
2. The nearest star to the Sun, Proxima Centauri, is 4.2 ly away. Would the Big Dipper look very different from there? Use your distances to explain.
3. Rigel is a hot blue star that gives out much of its light as ultraviolet, which the V filter does not count. Is its total light output bigger or smaller than your visible light value?
4. Dust between the stars dims distant stars a little, and the demo leaves it out. Would including it make the farthest stars' absolute magnitudes brighter or fainter?

## What to hand in

Prelab answers, the side view sketches, the table, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.
