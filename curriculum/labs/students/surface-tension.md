# Surface Tension and Capillary Rise
Student worksheet · College Physics 2e

Textbook: OpenStax *College Physics 2e*, §11.8 (cohesion and adhesion in liquids: surface tension and capillary action); the same section in *College Physics for AP Courses 2e*. Access for free at https://openstax.org/details/books/college-physics-2e.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/surface-tension.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Used here:** the **Capillary tubes** experiment (chosen above the picture) and its setups **Water climbs thin tubes**, **Mercury sinks in glass**, **Water in a waxed tube** and **Glycerin: slow climb**.

**Using the demo.**

- The picture shows three glass tubes standing in a dish of liquid. Their radii are $$r$$, $$2r$$ and $$4r$$, where $$r$$ is set by the **Narrowest tube radius r** slider in the set up card. Beside them is a graph of height against $$1/r$$.
- The strip above the picture holds **Play**, **Reset** (this experiment back to its start) and **Time**, the speed of the run, from 1/100 speed to 100 times faster. The clock shows the time since the liquid touched the tubes.
- The set up card holds the **Liquid**, the **Tube wall**, the **Narrowest tube radius r** and **Set the contact angle myself**, which shows a **Contact angle θ** slider. Click a slider and use the arrow keys to set it exactly.
- The Readouts list the liquid's surface tension $$\gamma$$, the contact angle $$\theta$$, the density $$\rho$$ and the viscosity $$\eta$$, then for each tube its **Height now** and its **Predicted h**, and the time the narrowest tube takes to rise 90% of the way.
- **Record reading** (under Readings) stores one row for each of the three tubes: its radius, $$1/r$$ and the height now. **Export to worksheet** sends the readings to this page's Data table; **Clear** empties the Readings.
- **Blind: hide predictions and answers**, in the Lab fold, hides the Predicted h readouts and the time to 90%.

**What the demo models.** The height is $$h = 2\gamma\cos\theta/(\rho g r)$$ with $$g$$ = 9.81 m/s². Surface tensions are from Table 11.3 of the book, contact angles from Table 11.4, densities from Table 11.1 and viscosities from Table 12.1 (water is taken as 1000 kg/m³ at every temperature, as the book does). The liquid rises by viscous flow pushed by the surface's pull less the column's weight, so it slows as it nears its final height. Left out: the volume of the curved surface itself, the small fall of the level in the dish and the liquid's inertia. The formula holds for tubes much narrower than the capillary length $$\sqrt{\gamma/\rho g}$$, 2.72 mm for water. Tube widths are drawn wider than life; heights are to scale.

</details>

## Goal

Measure how high water climbs in glass tubes of different radii, show that the height goes as $$1/r$$, and find the surface tension of water from the slope. Then find how the contact angle decides whether a liquid climbs or sinks, and measure the contact angle of mercury on glass.

## Background

**Surface tension.** A molecule inside a liquid is pulled equally on all sides by its neighbors. A molecule at the surface has neighbors only below and beside it, so it is pulled inward, and making more surface takes work. The surface therefore acts like a stretched sheet. The **surface tension** $$\gamma$$ is the force with which the surface pulls on each meter of an edge, in N/m. It is also the energy stored in each square meter of surface, since a newton per meter is a joule per square meter. Water at 20 °C has $$\gamma$$ = 0.0728 N/m (§11.8, Table 11.3); soap lowers it to about 0.0370 N/m.

**Contact angle.** Where a liquid meets a solid wall, its surface meets the wall at a **contact angle** $$\theta$$, measured inside the liquid. If the molecules stick to the wall more strongly than to each other (adhesion stronger than cohesion), the liquid wets the wall and $$\theta$$ is less than 90°: water on clean glass has $$\theta$$ = 0°, and its surface curves up at the wall. If cohesion wins, $$\theta$$ is more than 90° and the surface bulges up in the middle: mercury on glass has 140°, water on paraffin wax 107° (Table 11.4).

**Capillary rise.** Stand a narrow tube of radius $$r$$ in the liquid. The surface touches the inside of the tube all the way round its rim, a length $$2\pi r$$, and pulls along itself, at the angle $$\theta$$ to the wall. Its upward part is

$$F = 2\pi r\,\gamma\cos\theta.$$

This force lifts a column of liquid of height $$h$$ until the column's weight, $$mg = \rho\,(\pi r^2 h)\,g$$, balances it. Setting the two equal gives

$$h = \frac{2\gamma\cos\theta}{\rho g r}.$$

The pull grows as the rim, $$r$$, but the weight as the area, $$r^2$$: half the radius, twice the height. When $$\theta$$ is more than 90°, $$\cos\theta$$ is negative, and the liquid in the tube is pushed down below the level outside ($$h$$ negative). At 90° nothing happens.

**A straight line.** For one liquid in one kind of tube, $$h = (2\gamma\cos\theta/\rho g)\times(1/r)$$, so a graph of $$h$$ against $$1/r$$ is a straight line through the origin with slope $$s$$:

$$s = \frac{2\gamma\cos\theta}{\rho g}.$$

With $$\theta$$ = 0° for water on glass, $$\gamma = \rho g s/2$$. Watch the units: with $$h$$ in mm and $$1/r$$ in mm⁻¹ the slope is in mm², and 1 mm² = 10⁻⁶ m².

**How fast it rises.** The column climbs because the surface pulls it, but the liquid has to flow up a narrow tube, and its viscosity $$\eta$$ resists that flow (§12.4). The final height does not depend on $$\eta$$; the time to get there does. The rise is fast at first and slows as the column nears its final height, since the net push, the surface's pull less the column's weight, shrinks to zero.

## Before the lab

1. Show that setting $$2\pi r\gamma\cos\theta$$ equal to the column's weight $$\rho\pi r^2 h g$$ gives $$h = 2\gamma\cos\theta/(\rho g r)$$. Then work out how high water at 20 °C ($$\gamma$$ = 0.0728 N/m, $$\theta$$ = 0°, $$\rho$$ = 1000 kg/m³) climbs in glass tubes of radius 0.25 mm, 0.50 mm and 1.00 mm. Give each in mm.
2. What slope do you expect for the graph of $$h$$ (mm) against $$1/r$$ (mm⁻¹) for water in glass? Give it in mm². What should the intercept be?
3. Predict: mercury ($$\gamma$$ = 0.465 N/m, $$\rho$$ = 13,600 kg/m³) meets glass at $$\theta$$ = 140°. In a glass tube of radius 0.25 mm, does it climb or sink, and how far? Is the effect bigger or smaller than water's in the same tube, and why? Sketch what you expect the surface of the mercury in the tube to look like. (You will check this in Part 3.)

## Safety

None for the virtual apparatus. Real mercury is toxic and its vapor is harmful: it is handled only in sealed apparatus. Glass capillary tubes are thin and break into sharp splinters.

## Procedure

**Set up.** Above the picture, **Capillary tubes** is chosen when the demo opens. Open **Lab** (under Readings) and tick **Blind: hide predictions and answers**, so the Predicted h readouts are hidden. Set **Time** (in the strip above the picture) to **10 times faster**.

**Part 1: height against radius.**

1. Press the setup **Water climbs thin tubes**: water at 20 °C in glass tubes of radius 0.25 mm, 0.50 mm and 1.00 mm. It sets Time back to 1/4 speed; set it to **10 times faster** again.
2. Press **Play**. Water climbs all three tubes. Wait until the run stops by itself (the button reads Play again): every column has then reached its final height. Press **Record reading**. Three rows appear, one per tube.
3. Set **Narrowest tube radius r** to 100 μm (the value beside the slider reads 100 μm; click the slider and use the arrow keys). Changing the radius resets the tubes. Press **Play**, wait until the run stops (about 11 s on the screen), and press **Record reading**.
4. Do the same with the radius set to 150 μm.
5. Press **Export to worksheet**: the nine rows fill Table 1 (reading, tube, $$r$$, $$1/r$$ and $$h$$).

**Part 2: height against contact angle.** Press the setup **Water climbs thin tubes** again (this puts the radius back to 0.25 mm), and set Time to **10 times faster**. Tick **Set the contact angle myself** in the set up card. For each angle 0°, 30°, 60°, 90°, 120° and 150°: set **Contact angle θ** (click the slider and use the arrow keys), press **Play**, wait until the run stops, and copy the readout **Height now, tube r (250 μm)** into Table 2, in mm (the readout switches between cm and mm). Work out $$\cos\theta$$ for each row. Don't record or export these: you type Table 2 yourself.

**Part 3: mercury and wax (predict, observe, explain).** With **Blind** still ticked, press the setup **Mercury sinks in glass** (the tick for your own angle is cleared: the angle is now the book's). Before pressing Play, look at your prediction in Before the lab 3. Press **Play** and watch the mercury and its surface in the narrowest tube. Copy **Height now, tube r (250 μm)** into Table 3, with $$\gamma$$ and $$\rho$$ from the Readouts. Then press the setup **Water in a waxed tube**, press **Play**, and do the same.

## Data

**Table 1: water at 20 °C in glass tubes, final heights.**

| Reading | Tube | $$r$$ (mm) | $$1/r$$ (mm⁻¹) | $$h$$ (mm) |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

**Table 2: water at 20 °C, tube of radius 0.25 mm, your own contact angle.**

| $$\theta$$ (°) | $$\cos\theta$$ | $$h$$, tube r (mm) |
|---|---|---|
| | | |
| | | |
| | | |

**Table 3: the contact angle from the height, tube of radius 0.25 mm.**

| Setup | $$\gamma$$ (N/m) | $$\rho$$ (kg/m³) | $$h$$, tube r (mm) | $$\cos\theta = \rho g r h/2\gamma$$ | $$\theta$$ (°) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |

## Analysis

1. Graph $$h$$ (vertical) against $$1/r$$ (horizontal) from Table 1, with a straight line fit. Give the slope with its uncertainty, in mm², and the intercept. Is the intercept zero within its uncertainty? Compare the slope with your answer to Before the lab 2.
2. Find the surface tension of water from your slope $$s$$: $$\gamma = \rho g s/2$$, with $$\rho$$ = 1000 kg/m³ and $$g$$ = 9.81 m/s². Convert the slope to m² first and show the units. By what percentage does your $$\gamma$$ differ from the book's 0.0728 N/m?
3. Graph $$h$$ against $$\cos\theta$$ from Table 2, with a straight line fit. What do the slope and intercept tell you? From the slope, find $$\gamma$$ again (now $$s = 2\gamma/\rho g r$$ with $$r$$ = 0.25 mm) and compare it with Analysis 2.
4. Fill in the last two columns of Table 3: find $$\cos\theta$$ from each height, with $$r$$ = 0.25 mm in meters and $$h$$ in meters, and then $$\theta$$. Compare each with Table 11.4 (mercury on glass 140°, water on paraffin 107°). How far off are you, and why (think of how many figures the height readout gives)?

## Uncertainty

The demo gives heights with no scatter. In a real lab you would read each height with a ruler to about ±0.5 mm, and know each tube's radius to about ±0.01 mm. For your 0.100 mm tube and your 1.00 mm tube, work out the percentage uncertainty in $$h$$ and in $$r$$. Which one limits each tube's value of $$\gamma$$? Which tubes would you trust most in a real measurement, and why? Then: the formula holds only for tubes much narrower than the capillary length, 2.72 mm for water. Which of your tubes is least well described by it?

## Questions

1. Mercury in glass (Part 3). Did it climb or sink, and by how much? Compare with your prediction in Before the lab 3. Explain with forces why it sinks, and describe the shape of its surface in the tube compared with water's. Why is the effect smaller than water's, though mercury's surface tension is more than six times larger?
2. Trees. A xylem tube in a tree has a radius of about 2.50 × 10⁻⁵ m. Use your slope from Analysis 1 (that is, $$h \times r$$ for water in glass) to find how high water can climb such a tube, and what radius would lift it 100 m, to the top of a redwood. Can capillary action alone lift water to the top of a tall tree?
3. Height and time. Untick **Blind** and press the setup **Water climbs thin tubes**: note the readout **Time to 90% of the way, tube r**. Then press **Glycerin: slow climb** (glycerin: $$\gamma$$ = 0.0631 N/m, $$\rho$$ = 1260 kg/m³, about 1500 times as viscous as water; Time runs 100 times faster). First work out how high glycerin climbs in the 0.25 mm tube, then press **Play** and check. Which property of the liquid sets the final height, and which sets how long it takes to get there?
4. Soap lowers water's surface tension to 0.0370 N/m; the demo keeps its density at 1000 kg/m³ and its contact angle on glass at 0°. Using your slope from Analysis 1, predict the height of soapy water in the 0.25 mm glass tube. Then press **Water climbs thin tubes**, choose **Soapy water** under **Liquid**, press **Play** and check. Does soap help or hinder water climbing a clean glass tube?

## What to hand in

Your answers to Before the lab, Tables 1 to 3, the two graphs with their fits, Analysis 2 worked with units, your value of $$\gamma$$, and answers to the Uncertainty and Questions sections. Say that your data came from the simulated apparatus.
