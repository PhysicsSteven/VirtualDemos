# Seeing Fine Detail: Telescopes and Radio Dishes
Student worksheet · Astro 2203

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/resolution.html?setup=telescope&ws=intro-resolution)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Laser through a pinhole; Two point sources; Headlights and the eye; Hubble and two stars; Camera lens; Mystery pinhole. This worksheet uses Hubble and two stars.

**Using the demo.**

- Two equally bright stars, 2.0 million light years away (as far as the Andromeda galaxy), are seen by a telescope with a perfect mirror. The picture shows the light the mirror focuses, and the graph shows the brightness along the line through both stars.
- The mirror's diameter, the wavelength (color) of the light and the distance between the stars can all be changed.
- The cursor is the orange line on the graph. It opens at the midpoint between the stars, and its readout gives the brightness there as a fraction of one star's peak (I/I₀).
- Angles are in microradians (µrad): 1 µrad is one millionth of a radian, about 0.2 seconds of arc. The width of a hair seen from 15 m away is about 5 µrad.
- Show each source alone draws each star's own pattern as a dashed curve. Blind hides the marks the demo draws for the limit.
- Record reading stores the setup, the wavelength, the mirror's diameter, the distance between the stars, the angle between them and the brightness at the cursor. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Find out how the size of a telescope's mirror and the wavelength of the light set the finest detail it can see, and why radio telescopes have to be enormous.

## Background

**Light spreads.** Light passing through any opening spreads out a little: this is **diffraction**. So even a perfect telescope does not focus a star to a point. It makes a small blurred disk with faint rings around it. The bigger the mirror compared with the wavelength of the light, the smaller the disk.

**Two stars.** When two stars are close together in the sky, their disks overlap. If the disks overlap too much, the two stars blur into one. Astronomers use a rule called **Rayleigh's criterion**: two stars are just seen as two when the brightness halfway between them dips to about 73.5% of the peaks. The smallest angle between two stars that a telescope can separate is then

$$\theta = 1.22\,\frac{\lambda}{D},$$

where $$\lambda$$ is the wavelength and $$D$$ the diameter of the mirror, both in meters, and the angle comes out in radians. A smaller angle means finer detail.

**Handy units.** With $$\lambda$$ in nanometers and $$D$$ in meters, 1.22 × λ ÷ D ÷ 1000 gives the angle in microradians. For example, 550 nm light and a 1 m mirror give 1.22 × 550 ÷ 1 ÷ 1000 = 0.671 µrad.

## Before the lab

1. Using the rule above, what is the smallest angle the Hubble Space Telescope (mirror 2.40 m across) can resolve in green light of 550 nm, in microradians?
2. If the mirror were twice as wide, what would happen to that angle? If the light had a shorter wavelength?
3. Radio waves are much longer than light waves. Predict: does a radio dish need to be larger or smaller than an optical mirror to see the same detail?

## Safety

No hazards in the virtual lab.

## Procedure

Keep the cursor at the midpoint between the stars (0 µrad) for every reading.

**Part 1. Mirror size.** Choose Hubble and two stars (550 nm, mirror 2.40 m). Move the stars closer together or farther apart until you find the smallest distance between them for which the brightness midway is 0.735 or less: there the two stars are just resolved. Record a reading. Do the same with mirrors of 0.50, 1.00, 4.00 and 10.0 m (each Keck telescope's mirror is 10 m across). Send the readings to the worksheet, then clear them.

**Part 2. Color.** Set the mirror back to 2.40 m. Find the smallest resolved distance between the stars in the same way for violet light (405 nm) and red light (650 nm), recording a reading for each. Send the readings to the worksheet.

## Data

| Reading | Setup | Wavelength λ (nm) | Mirror diameter D (m) | Distance between the stars (ly) | Angle between the stars (µrad) | Brightness midway I/I₀ | 1.22 λ/D (µrad) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Fill in the last column from the rule (λ in nm, D in m: 1.22 × λ ÷ D ÷ 1000).

## Analysis

1. For each reading, compare the angle between the stars you found with 1.22 λ/D. Do they agree? Why can your angle be a little bigger than the rule's, but not smaller?
2. Compare your Hubble reading at 550 nm with your answer to Before the lab 1.
3. Divide the smallest angle for the 1.00 m mirror by the one for the 10.0 m mirror. How does the ratio compare with the ratio of the diameters?
4. From Part 2, which color lets the telescope see finer detail, violet or red? Divide the two angles and compare with 650 ÷ 405.
5. A radio telescope 100 m across observes the radio waves hydrogen gas gives off, which have a wavelength of 21.1 cm (0.211 m). Use θ = 1.22 λ/D (λ and D in meters) to find its smallest resolvable angle in radians, then multiply by 1 000 000 to get microradians. How many times bigger (worse) is this than Hubble's angle at 550 nm?
6. How wide would a single radio dish have to be to see as fine detail at 21.1 cm as Hubble does at 550 nm? Give your answer in kilometers.

## Uncertainty

The distance between the stars moves in steps of 0.01 light year, so your smallest resolved distance can be off by up to one step. For the 10.0 m mirror, what fraction of your reading is one step? Is the uncertainty bigger for the large mirrors or the small ones? Real telescopes on the ground are also blurred by the moving air above them ("seeing"). Would that make the real smallest angle bigger or smaller than the demo's?

## Questions

1. Explain in your own words why a bigger mirror sees finer detail, and why it also collects more light. Which of the two effects depends on the wavelength?
2. Radio astronomers link many dishes spread over a large area, even over whole continents, and combine their signals. Using your answer to Analysis 6, explain why.
3. The pupil of your eye is about 7 mm (0.007 m) across at night. Using 550 nm light, what is the smallest angle your eye could resolve if it were perfect? Compare with Hubble.
4. The demo's mirror is perfect and above the air. Why do astronomers put telescopes in space or on high mountains?

## What to hand in

Prelab answers, the two table copies, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.
