# Parallax: Measuring the Distance to a Star
Student worksheet · Astro 2203

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/distance-ladder.html?ws=intro-parallax)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** 1 Parallax; 2 Cepheids; 3 Type Ia; 4 Hubble's law; Whole ladder. This worksheet uses 1 Parallax.

**Using the demo.**

- On the left, a top view of Earth's orbit around the Sun with a nearby star above it; the angles are hugely exaggerated so you can see them. Drag Earth around its orbit, or play a year.
- On the right, what a telescope sees: a photo in January, a photo in July, and the two laid on top of each other. The nearby star sits in a different place against the far background stars in the two photos.
- Choose a real star (Proxima Centauri, Sirius, Vega) or Any distance, then set the distance with the slider. Choose the instrument: Ground (telescopes on the ground before the 1990s), Hipparcos (a satellite, 1989 to 1993) or Gaia (a satellite that measured from 2014 to 2025). Each can place a star only to within its position uncertainty, drawn as a dashed circle when it is big enough to see.
- Drag the two ends of the ruler in the overlaid photo onto the January and July images to measure the shift.
- Angles are in arcseconds (″) and milliarcseconds (mas): 1″ is 1/3600 of a degree, and 1 mas is 0.001″.
- Record reading stores the star, the instrument, the distance, the parallax, the January to July shift, your ruler's shift and the distance from it, and the distance uncertainty. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Measure the distance to nearby stars the way astronomers do, from the small shift in a star's position as Earth goes around the Sun, and find out how far this method can reach.

## Background

**Parallax.** Hold a finger up at arm's length and look at it with one eye, then the other: it jumps against the background. The closer the finger, the bigger the jump. Earth does the same thing for us on a much bigger scale: in January and July it is on opposite sides of the Sun, 2 AU apart, so a nearby star seems to shift against much more distant stars. Half of that shift is the star's **parallax**, p: the angle the radius of Earth's orbit (1 AU) makes when seen from the star.

**The parsec.** Astronomers define the distance at which p is exactly 1″ as one **parsec** (pc): 1 pc = 206 265 AU = 3.26 light years. Because the angles are tiny, the distance is simply

- distance in parsecs = 1 ÷ (parallax in arcseconds) = 1000 ÷ (parallax in mas).

A star twice as far has half the parallax.

**How far it works.** Every instrument can place a star only to within some small angle, its position uncertainty. When the parallax is not much bigger than that, the distance is poorly known. The share of the distance that is uncertain equals the share of the parallax that is uncertain: (uncertainty in p) ÷ p.

## Before the lab

1. Hold your thumb at arm's length and blink one eye, then the other. Now hold it halfway. Does it jump more or less? How does that match the rule "twice as far, half the parallax"?
2. A star has a parallax of 0.5″. How far is it in parsecs? In light years?
3. Guess: is the nearest star's parallax bigger or smaller than the size of the full Moon in the sky (about 1900″, just over half a degree)? By how much, roughly?

## Safety

No hazards in the virtual lab.

## Procedure

**Part 1: three nearby stars.** Choose Proxima Centauri and the Hipparcos instrument. Drag the two ends of the ruler onto the January and July images in the overlaid photo, then record a reading. Do the same for Sirius and for Vega.

**Part 2: twice as far, half the angle.** Choose Any distance, keep Hipparcos, and set the distance to 2, 5, 10, 20 and 50 pc in turn. Record a reading at each (you do not need the ruler here). Send all eight readings to the worksheet, then clear them.

**Part 3: how far can it reach?** Keep Any distance. Set the distance to 100 pc and record a reading with each instrument: Ground, Hipparcos and Gaia. Do the same at 1000 pc (1 kpc) and at 10 000 pc (10 kpc). Watch the photos and the warning under the readouts as you go. Send the nine readings to the worksheet.

## Data

| Reading | Star | Instrument | Distance d (pc) | Parallax p (mas) | January to July shift 2p (mas) | Your ruler's shift s (mas) | Distance from your ruler, 2000 ÷ s (pc) | Distance uncertainty (%) | 1 ÷ d (1/pc) |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

## Analysis

1. Part 1: compare the distance from your ruler with the demo's distance for each star. Change each distance into light years (1 pc = 3.26 light years). Proxima Centauri is the nearest star to the Sun: how long does its light take to reach us?
2. Part 2: fill in the last column, 1 ÷ d, for the eight readings of Part 1 and Part 2. Graph the parallax p (mas) against 1 ÷ d. Is it a straight line through the origin? What is its slope, and what does that number mean? (Hint: what parallax would a star at 1 pc have?)
3. Part 3: the uncertainty in p stays the same while p shrinks as 1 ÷ d, so the uncertainty in the distance grows in step with the distance: ten times farther, ten times the uncertainty. For each instrument, use one of your readings to work out the distance at which its uncertainty is 10 %. That is how far each instrument can reach with good distances.
4. The Sun is about 8 kpc from the center of our galaxy, and the galaxy's disk is about 30 kpc across. Which instrument can measure parallax distances across a good part of the galaxy? Can any of them reach another galaxy, such as Andromeda, about 2.5 million light years (770 kpc) away? What does this tell you about why astronomers need the other rungs of the distance ladder?

## Uncertainty

Your ruler's ends land a little to one side or the other of each image. Estimate how far off your ruler shift could be for Vega, in mas, and how much that changes the distance from your ruler. How does your ruler's uncertainty compare with the instrument's own position uncertainty?

## Questions

1. Why do astronomers compare photos taken six months apart, rather than one month apart?
2. Use your Part 1 readings to check your guess in Before the lab 3. How many times smaller than the full Moon is Proxima Centauri's parallax?
3. Ancient Greek astronomers looked for stellar parallax and saw none, and many took that as proof that Earth does not move. The first stellar parallax was measured only in 1838, by Friedrich Bessel, for the star 61 Cygni (about 0.3″). Using what you found, explain both why the Greeks saw none and what their mistake was.

## What to hand in

Prelab answers, the two copies of the Data table and the Part 2 graph, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.
