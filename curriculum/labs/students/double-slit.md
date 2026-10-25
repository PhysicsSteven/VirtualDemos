# Young's Double Slit
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 3, §§3.1 and 3.2 (with §4.3). Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/double-slit.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Light, red laser (the setup for this worksheet); Electrons (Jönsson 1961 style); Buckyballs (Arndt 1999 style, grating); One slit; Which slit detector on.

**Using the demo.**

- A source sends photons (or electrons, or C₆₀ molecules) one at a time through two slits of width $$a$$ whose centers are $$d$$ apart. Each one is detected at a single point on a screen a distance $$L$$ away. The histogram beside the screen counts the hits along $$y$$, the distance from the center of the screen.
- For photons you set the wavelength $$\lambda$$ (250 to 1000 nm), $$a$$, $$d$$ and $$L$$. Any change clears the screen, since old hits came from a different setup. Fit sets the screen range to suit the new pattern.
- Measure turns on two cursors, A and B, across the screen and the histogram, with their difference $$B - A$$. While they are on, the predicted pattern, its marks and the predicted curve are hidden.
- Record reading stores the setup, the number of hits and both cursor positions. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.

**What the demo models.** A monochromatic plane wave falls on the two slits, and the pattern on the screen is the paraxial Fresnel calculation, which becomes the textbook's far field formula when $$(d + a)^2/\lambda L$$ is small (the demo shows this number). Each hit is drawn at random from that pattern, so the histogram has the scatter of real counting data. Slits are drawn enlarged and $$L$$ is not to scale on the picture. Simulated data.

</details>

## Goal

Measure the spacing of the bright fringes of a double slit and show how it depends on the wavelength, the slit separation and the distance to the screen.

## Background

Light from the two slits reaches a point on the screen by paths that differ by $$d\sin\theta$$, where $$\theta$$ is the angle from the straight through direction. Where the difference is a whole number of wavelengths the two waves arrive in step and the screen is bright (§3.1):

$$d\sin\theta = m\lambda, \qquad m = 0, \pm 1, \pm 2, \ldots$$

and where it is a half number of wavelengths they cancel and the screen is dark. On a screen a distance $$L$$ away the $$m$$th bright fringe is at $$y_m = L\tan\theta_m$$. For small angles $$\sin\theta \approx \tan\theta \approx y/L$$, so $$y_m \approx m\lambda L/d$$ and neighboring bright fringes are evenly spaced (§3.2):

$$\Delta y = \frac{\lambda L}{d}.$$

Each slit also has a width $$a$$, and its own diffraction pattern multiplies the fringes (§4.3). That envelope is zero where $$a\sin\theta = \lambda$$, so roughly $$2d/a - 1$$ bright fringes fit inside the central envelope.

## Before the lab

1. Red light of 650 nm passes through two slits 0.25 mm apart onto a screen 1.00 m away. Predict the fringe spacing.
2. By what factor does the spacing change if the wavelength is halved? If $$d$$ is doubled? If $$L$$ is doubled?
3. How far apart are bright fringe $$-3$$ and bright fringe $$+3$$, in fringe spacings? Why is it better to measure across several fringes than between two neighbors?
4. The slits are 0.05 mm wide. How many bright fringes do you expect inside the central envelope, and where (in mm from the center) does the envelope first go to zero?

## Safety

There are no hazards in the simulation. A real laser can damage the eye: never look into the beam or its reflection from a shiny surface.

## Procedure

Start from the Light, red laser setup and turn on the measuring cursors. In each part, after you change a setting, fit the screen range, then let at least 2000 photons land so the fringes are clear. Put cursor A on the center of one bright fringe and cursor B on the center of another several fringes away (bright fringes $$-3$$ and $$+3$$ work well, unless fringe 3 is missing) and record a reading. Count the spacings between the two fringes; you will need that number.

**Part 1: fringe spacing against wavelength.** Keep $$a = 0.05$$ mm, $$d = 0.25$$ mm and $$L = 1.00$$ m. Measure at $$\lambda$$ = 400, 450, 500, 550, 600, 650 and 700 nm. Send the readings to the worksheet and clear them.

**Part 2: fringe spacing against slit separation.** At $$\lambda = 650$$ nm and $$L = 1.00$$ m, measure at $$d$$ = 0.15, 0.20, 0.25, 0.30, 0.40 and 0.50 mm. Send the readings and clear them.

**Part 3: fringe spacing against screen distance.** At $$\lambda = 650$$ nm and $$d = 0.25$$ mm, measure at $$L$$ = 0.50, 1.00, 1.50, 2.00 and 3.00 m. Send the readings.

**Part 4: the envelope.** Back at the Light, red laser setup, let about 5000 photons land and count the bright fringes inside the central envelope. Use a cursor to find where the envelope first goes dark.

## Data

| Reading | λ (nm) | a (mm) | d (mm) | L (m) | Hits | Cursor B − A (mm) | Spacings n | $$\Delta y$$ (mm) | 1/d (1/mm) | λL/d (mm) |
|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |

Fill in $$n$$, $$\Delta y = (B - A)/n$$, $$1/d$$ and $$\lambda L/d$$ yourself (with $$\lambda$$ in mm, $$\lambda L/d$$ comes out in mm when $$L$$ is also in mm).

## Analysis

1. For Part 1, graph $$\Delta y$$ against $$\lambda$$. Is it a straight line through the origin? What should the slope be? Compare the slope with $$L/d$$.
2. For Part 2, graph $$\Delta y$$ against $$1/d$$. Find the slope and compare it with $$\lambda L$$.
3. For Part 3, graph $$\Delta y$$ against $$L$$ and compare the slope with $$\lambda/d$$.
4. Put all three parts on one graph of $$\Delta y$$ against $$\lambda L/d$$ (in one table copy or by combining your results). What slope and intercept do you expect, and what do you find?
5. For Part 4, compare your count of bright fringes in the central envelope and the position of the first envelope zero with your predictions from Before the lab question 4.

## Uncertainty

You place each cursor by eye on a fringe built from a finite number of random hits, and the cursor moves in steps of 1/500 of the screen range. Estimate how far off each cursor could be, and propagate that through $$\Delta y = (B - A)/n$$. Explain why a larger $$n$$ gives a smaller uncertainty in $$\Delta y$$, and why more hits help. The single slit envelope also falls across each bright fringe, which pulls the fringe's peak slightly toward the center: would that make your $$\Delta y$$ too large or too small, and is it worse when $$d/a$$ is large or small? Which part of the experiment would a real laboratory find hardest to measure precisely?

## Questions

1. A single photon lands at one point. Where in the experiment is the interference?
2. Close one slit (the One slit setup does this for electrons). What happens to the fringes, and why can opening a second slit make some places on the screen darker?
3. With white light instead of a laser, what would the fringes look like? Which color is nearest the center in the first bright fringe?
4. Electrons accelerated through 50 kV have $$\lambda = 5.36$$ pm. With $$d = 1\ \mu\mathrm{m}$$ and $$L = 0.35$$ m, what fringe spacing do you expect? Check it with the Electrons setup.

## What to hand in

Prelab answers, a Data table copy for each part with its graph and fit, the combined graph against $$\lambda L/d$$, your Part 4 count, the uncertainty estimate and answers to the questions. Identify simulated data.
