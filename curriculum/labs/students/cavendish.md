# The Cavendish Experiment: Measuring G
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §13.1 (Newton's law of universal gravitation and the Cavendish experiment) and §13.2 (gravitation near Earth's surface). Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/cavendish.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Using the demo.**

- The picture is a top view of a torsion balance, to scale except that the beam's turn is drawn 20 times larger. Two small lead spheres on a light beam hang from a thin fiber inside a glass case. Two large lead spheres sit outside the case on a frame that swivels to position A, position B, or away from the beam.
- A laser beside the scale shines on a mirror at the center of the beam, and the reflected spot lands on a scale 5.000 m away, shown magnified on the right. The strip chart below records the spot against time.
- The clock shows the real time of the experiment; ×10 and ×100 only make the wait shorter. One button runs the experiment until the spot reaches its next turning point and stops there. Start over puts the balance back, settled with the spheres in A, at t = 0.
- Record reading stores the position of the spheres, the time and the spot; Export to worksheet sends the readings here. Blind hides the twist, the forces, the resting positions and G.

**What the demo models.**

- Small spheres of 20.0 g and large spheres of 1.500 kg, of lead (11 340 kg/m³). The beam is massless and 100.0 mm between the small spheres' centers. In A and B each large sphere's center is 46.5 mm from the nearer small sphere's center.
- The torque is the exact sum over all four pairs of spheres, including the pull of each large sphere on the far small sphere, and it changes as the beam turns. The fiber gives an undamped period of 360.0 s, and air damping makes the swing die away by a factor of e every 720 s. G is the CODATA 2022 value.
- The spot is read to 1 mm and the clock to 1 s. There is no noise, drift or shaking from the building, which make the real experiment hard.

</details>

## Goal

Measure the universal gravitational constant G the way Henry Cavendish did in 1798: from the tiny twist that the pull of two large lead spheres gives a torsion balance, and from the period of the balance's swing. Then use G and the free fall acceleration to find the mass of the Earth.

## Background

Newton's law of gravitation says that two spheres of masses $$M$$ and $$m$$ with centers a distance $$r$$ apart attract each other with

$$F = \frac{GMm}{r^2}.$$

For laboratory masses this force is about a billionth of their weight, so it is measured with a **torsion balance**. A light beam of length $$2l$$ carries a small sphere of mass $$m$$ at each end and hangs from a thin fiber. When each large sphere is brought beside a small one, on opposite sides of the beam, both forces turn the beam the same way, with a torque $$\tau = 2Fl$$. The beam turns until the fiber's restoring torque $$\kappa\theta$$ balances it:

$$\kappa\theta = 2l\,\frac{GMm}{r^2}.$$

The torsion constant $$\kappa$$ of the fiber is found from the period of the beam's swing, as for any torsion pendulum: $$T = 2\pi\sqrt{I/\kappa}$$, with $$I = 2ml^2$$ for the two small spheres. The angle is found with a light lever: a mirror on the beam reflects a laser onto a scale a distance $$L$$ away. When the mirror turns by $$\theta$$ the reflected beam turns by $$2\theta$$, and the spot moves by $$L\tan 2\theta \approx 2L\theta$$. Swinging the large spheres from position A to position B reverses the torque, so the resting spot moves by $$\Delta S = 4L\theta$$. Putting these together, $$m$$ cancels:

$$G = \frac{\pi^2\, r^2\, l\, \Delta S}{M\, T^2\, L}.$$

This counts only the pull of each large sphere on the nearer small sphere. Each large sphere also pulls on the far small sphere, a distance $$\sqrt{r^2 + 4l^2}$$ away, with a small torque the other way. It takes back a fraction

$$\beta = \frac{r^3}{(r^2 + 4l^2)^{3/2}}$$

of the torque, so the corrected value is $$G_{\text{corr}} = G/(1 - \beta)$$.

The balance takes so long to settle that the resting positions are found from the swing itself. With damping, the turning points come alternately on either side of the resting position $$E$$, and each is closer to it by the same factor $$q$$: $$S_n = E + A(-q)^n$$. Three successive turning points then give $$E$$ exactly:

$$E = \frac{S_1 S_3 - S_2^2}{S_1 + S_3 - 2S_2}.$$

Once G is known, the mass of the Earth follows from the free fall acceleration at its surface, $$g = GM_E/R_E^2$$ (§13.2). This is why Cavendish's experiment was called weighing the Earth.

**Apparatus constants.** $$M = 1.500$$ kg, $$m = 20.0$$ g, $$l = 50.0$$ mm, $$r = 46.5$$ mm, $$L = 5.000$$ m. For the Earth, $$g = 9.81$$ m/s² and $$R_E = 6.37\times10^6$$ m.

## Before the lab

1. Find the force between a large and a small sphere at $$r = 46.5$$ mm, using $$G = 6.674\times10^{-11}$$ N·m²/kg². What fraction of the small sphere's weight is it?
2. The balance swings with a period of 360 s. Find $$\kappa$$, the angle $$\theta$$ the beam turns with the spheres in one position (ignoring the far spheres), and the shift $$\Delta S$$ of the resting spot from A to B.
3. Why does the reflected light turn by twice the angle the mirror turns? Why does a long distance $$L$$ to the scale help?

## Safety

Never look into a laser or its reflection from the mirror. The large spheres of a real balance are heavy: support them while swinging the frame, and keep fingers clear. Lead must be handled with gloves or followed by washing your hands. The simulation has no hazards.

## Procedure

**Part 1: resting in A.** Start with the balance settled with the large spheres in position A and the clock at zero. Record the spot.

**Part 2: swinging to B.** Swing the large spheres to position B. Record the time and the spot at each of the first seven turning points of the swing.

**Part 3: back to A.** Right after the seventh turning point, swing the large spheres back to position A. Record the time and the spot at each of the next seven turning points.

**Using the virtual apparatus.** Hide the predictions and answers before you start. Send the readings of Parts 1 and 2 to the worksheet together, then clear them before Part 3, so each gets its own copy of the Data table. Number the turning points of each part from 1.

## Data

| Reading | Spheres | $$t$$ (s) | Spot $$S$$ (cm) | Turning point $$n$$ | Resting spot from this and the next two turning points (cm) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. For Parts 2 and 3, graph $$t$$ against the turning point number $$n$$. Successive turning points are half a period apart. Find the period $$T$$ from each slope, and average.
2. For Part 2, find the resting spot in B from each set of three successive turning points, and average. Do the same for A from Part 3. Compare the resting spot in A with your Part 1 reading.
3. Find $$\Delta S$$, the angle $$\theta = \Delta S/(4L)$$, and G from the formula in the Background.
4. Find $$\beta$$ and the corrected $$G_{\text{corr}}$$. By what percentage does it differ from the accepted value, $$6.674\times10^{-11}$$ N·m²/kg²?
5. Use your $$G_{\text{corr}}$$ to find the mass of the Earth, and its average density. Compare the density with that of rock at the surface, about 3000 kg/m³. What does the difference tell you about the inside of the Earth?

## Uncertainty

The spot is read to 1 mm on a shift $$\Delta S$$ of a few centimeters, so a single reading carries an uncertainty of a few percent; using several sets of turning points brings it down. The clock reads to 1 s on a half period of about 180 s, and the slope of seven turning points does much better than that, but $$T$$ enters G squared. The formula leaves out the damping, which makes the swing about 0.3% slower than the undamped period, so G comes out about 0.6% low; you could correct for it from how fast the swing dies away. As the beam turns, the small spheres move closer to the large ones, so the pull grows: the beam turns about 0.7% further, but the square of the period grows by the same factor, and the two cancel in G as long as you use the period you measured. On real apparatus the biggest problems are air currents, temperature changes, shaking and the slow drift of the fiber, which is why Cavendish worked in a closed room and watched the balance through a telescope from outside.

## Questions

1. Why are the spheres made of lead, and why is the balance kept in a closed case?
2. Find the gravitational force between two people of 70 kg whose centers are 1.0 m apart. Why don't we notice it?
3. Explain why measuring G was enough to find the mass of the Earth, and why Newton could not do it.
4. If the large spheres were the same size but made of aluminum (2700 kg/m³), by what factor would $$\Delta S$$ change?
5. A thinner fiber makes the period twice as long. By what factor would $$\Delta S$$ change? Why does that help, and what does it cost?

## What to hand in

Answers to Before the lab, the Data tables, the graphs of $$t$$ against $$n$$ with their slopes, the resting spots and $$\Delta S$$, your values of G and $$G_{\text{corr}}$$ with the percentage difference, the mass and density of the Earth, and answers to the questions. Identify simulated data.
