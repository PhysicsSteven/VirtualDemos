# Speed of Light with a Rotating Mirror
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §§1.1 and 5.1. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/speed-of-light.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** The bench at rest; Spinning at 1000 rev/s; Slow motion: why the beam comes back crooked; CW then CCW; Longer path (D = 20 m); Measure c (this one fills the table with simulated readings for you, so don't use it for your own data).

**Using the demo.**

- The bench follows the common Foucault rotating mirror kit: a laser focused by lens L1 to a point S, a lens L2 ($$f_2 = 252$$ mm) a distance $$A$$ from S, a mirror MR turned by a motor a distance $$B$$ past L2, and a fixed mirror MF a distance $$D$$ from MR. A beam splitter sends the returning light to a measuring microscope.
- $$D$$ runs from 3 to 20 m and $$B$$ from 0.300 to 0.900 m. The bench keeps S focused on MF, so it sets $$A$$ from $$1/f_2 = 1/A + 1/(D + B)$$ and shows it.
- The motor turns clockwise (CW) or counterclockwise (CCW) at up to 1000 rev/s. Its speed meter jitters by about 0.15%, like a real one.
- You turn the micrometer in steps of 0.01 or 0.001 mm to put the crosshair on the middle of the spot. The spot jitters by about 2 µm. The rest position of the spot and both jitters come from the bench seed (Instrument fold); share the seed so a class works on the same bench.
- Capture reading stores the direction, the speed meter reading, your micrometer reading, $$D$$ and $$B$$. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind (Instrument fold) hides the true shift, the flight time, the mirror's turn, the value of $$c$$ from the demo's own fit and the accepted value.
- The light travels at $$c$$; air would slow it by 0.03%, far below what this method can resolve.

</details>

## Goal

Measure the speed of light by timing a round trip of 24 m with a mirror that turns about a thousand times a second.

## Background

Light from S passes L2, reflects off the turning mirror MR, travels to the fixed mirror MF and back, a round trip of $$2D$$ that takes

$$\Delta t = \frac{2D}{c} .$$

The mirror turns at $$f$$ revolutions per second, an angular speed $$\omega = 2\pi f$$, so it turns through $$\Delta\theta = \omega\,\Delta t$$ while the light is away. A mirror turned by $$\Delta\theta$$ turns the reflected beam by $$2\Delta\theta$$, so the light returns at a slight angle and L2 forms its image of S beside S. With the magnification of L2 the image moves by

$$\Delta s = \frac{4 A D^2 \omega}{c\,(D + B)} .$$

The shift grows in proportion to the signed speed (CW positive, CCW negative), so a graph of the micrometer reading $$s$$ against the signed speed $$f$$ is a straight line of slope

$$k = \frac{8\pi A D^2}{c\,(D + B)}, \qquad\text{so}\qquad c = \frac{8\pi A D^2}{(D + B)\,k} .$$

Its intercept is the reading at rest. The speed of light has been exact by definition since 1983: $$c$$ = 299 792 458 m/s (§1.1). Its being the same for every observer is the second postulate of relativity (§5.1).

## Before the lab

1. For $$D = 12.00$$ m, find the round trip time $$\Delta t$$, and the angle the mirror turns through during it at 1000 rev/s.
2. Use the focus condition to find $$A$$ for $$D = 12.00$$ m and $$B = 0.500$$ m.
3. Predict the image shift $$\Delta s$$ at 1000 rev/s for this bench. Why are there two factors of 2 in $$4AD^2\omega$$?
4. Why measure in both directions rather than only one direction and the rest position?

## Safety

None for the virtual apparatus. A real bench uses a laser: keep the beam below eye level and away from shiny objects. Keep hands clear of the motor.

## Procedure

Use the bench seed your instructor gives you (the demo starts with 2718), and turn Blind on.

**Rest position.** Start with The bench at rest ($$D = 12.00$$ m, $$B = 0.500$$ m). Write down $$A$$. Center the crosshair on the spot and capture the reading.

**Both directions.** Run the mirror clockwise at 250, 500, 750 and 1000 rev/s. At each speed center the crosshair on the spot and capture. Do the same counterclockwise, then send the readings to the worksheet before you clear them.

**Longer path.** Clear the readings, set $$D = 20.00$$ m with $$B = 0.500$$ m, and write down the new $$A$$. Capture the rest position and readings at 500 and 1000 rev/s in each direction. Send this run to a new copy of the table.

## Data

| Reading | Direction | Signed speed f (rev/s) | Micrometer reading s (mm) | D (m) | B (m) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. Graph $$s$$ against $$f$$ for the 12 m bench and fit a straight line. From the slope find $$c$$, with its uncertainty from the slope.
2. Compare the intercept with your reading at rest. Do the residuals show any difference between the two directions?
3. Use the CW and CCW readings at 1000 rev/s alone: $$c = \frac{4AD^2 \cdot 2\pi(f_\mathrm{CW} + f_\mathrm{CCW})}{(D + B)\,\lvert s_\mathrm{CW} - s_\mathrm{CCW} \rvert}$$, with both speeds as positive meter readings. Does it agree with the fit?
4. Find $$c$$ from the 20 m run. By what factor did the slope grow from 12 m to 20 m? Compare with the factor $$A D^2/(D + B)$$ predicts.
5. Compare your values of $$c$$ with the exact value. Which run gives the more precise result, and why?

## Uncertainty

How precisely can you center the crosshair, compared with the jitter of the spot? How does that compare with the largest shift you measured? Find the relative uncertainty of $$c$$ from the slope and say whether the meter's 0.15% jitter or your micrometer readings limit it. In a real lab the distances $$D$$, $$B$$ and $$A$$ would add to it.

## Questions

1. What value of $$c$$ would you get if you forgot that reflection doubles the angle?
2. Why does a constant error in the micrometer zero not affect $$c$$?
3. Making $$D$$ larger increases the shift, but not as $$D^2$$. Why not?
4. Foucault used this method in 1862 to show that light is slower in water than in air. What would the shift do if the 2D path were filled with water ($$n = 1.33$$)?
5. Why is $$c$$ now an exact number with no uncertainty? What does a measurement like this one determine instead?

## What to hand in

Prelab answers, the bench seed and dimensions, the table copies with their graphs and fits, $$c$$ from the fit and from the pair method with uncertainties, the comparison of the two paths, and answers to the questions. Identify simulated data.
