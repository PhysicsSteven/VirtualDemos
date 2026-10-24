# Measuring the Hubble Constant
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §11.6. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/distance-ladder.html?setup=hub)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Rung 1, parallax; Rung 2, Cepheids; Rung 3, Type Ia supernovae; Rung 4, Hubble's law (the subject of this worksheet); the whole ladder.

**Using the demo.**

- The cosmic distance ladder is the chain of methods astronomers use to find distances: parallax for nearby stars calibrates Cepheid variables, Cepheids in nearby galaxies calibrate Type Ia supernovae, and supernovae reach galaxies far enough away to measure the expansion of the universe.
- Rung 4 is a Hubble diagram of 34 galaxies: 10 with Cepheid distances (7 to 40 Mpc) and 24 with supernova distances (40 to 420 Mpc). The data are illustrative, simulated with $$H_0 = 70$$ km/s/Mpc, random peculiar velocities of 250 km/s, and distance errors of 0.10 mag (about 5%) for Cepheids and 0.15 mag (about 7%) for supernovae.
- Click a galaxy to select it; its spectrum appears beside the diagram. Drag the comb of rest wavelengths (lab wavelengths in air: Ca II K 393.37 nm and H 396.85 nm, Hβ 486.13 nm, Mg b 517.3 nm, Na D 589.3 nm, Hα 656.28 nm and [N II] 658.35 nm) until it sits on the galaxy's lines; the readout says when the lines match. The arrow keys pick the next galaxy, and [ and ] move the comb.
- The readouts give the least squares fit $$v = H_0 d$$ through the origin for every galaxy in the fit, the Hubble time $$1/H_0$$, and the selected galaxy's distance and catalog redshift. Dragging a galaxy sideways changes its distance; Restore distances undoes that.
- The Calibration sliders set the Cepheid zero point $$a$$ (in the Leavitt law $$M = -2.43(\log P - 1) + a$$) and the supernova peak absolute magnitude. With the box ticked, the supernova calibration follows the Cepheids, as it does in real work.
- Record reading stores the selected galaxy's distance, your comb redshift (only when the lines match) and the calibration. Export to worksheet sends the readings to the Data table below; Clear (under Readings) starts a new series, which goes into a new copy of the table.

</details>

## Goal

Measure the redshifts of galaxies at known distances, show that their recession velocity is proportional to distance, find the Hubble constant $$H_0$$ and the Hubble time $$1/H_0$$, and see how an error in the bottom rungs of the distance ladder carries into $$H_0$$.

## Background

Light from a distant galaxy arrives with every spectral line shifted to a longer wavelength. The redshift is

$$z = \frac{\lambda_\mathrm{obs} - \lambda_\mathrm{rest} }{\lambda_\mathrm{rest} } ,$$

and the same $$z$$ applies to every line. For $$z$$ much less than 1 the recession velocity is $$v \approx cz$$, with $$c = 299\,792$$ km/s.

In 1929 Hubble found that farther galaxies recede faster. Hubble's law (§11.6) is

$$v = H_0\, d ,$$

where $$H_0$$ is the Hubble constant, in km/s per megaparsec (1 Mpc = $$3.0857 \times 10^{19}$$ km). Every galaxy recedes from every other, as the dots on an inflating balloon all move apart, so there is no centre to the expansion.

If every galaxy had always moved at its present speed, they were all together a time $$d/v = 1/H_0$$ ago. This Hubble time is a rough age for the universe. It is not exact, since the expansion rate has changed over time.

Each galaxy also has a peculiar velocity of a few hundred km/s from the pull of its neighbours, which adds scatter to the law. It matters most for nearby galaxies, whose recession velocities are small.

## Before the lab

1. A galaxy's Hα line (rest wavelength 656.28 nm) is observed at 677.0 nm. Find its redshift and recession velocity.
2. With $$H_0 = 70$$ km/s/Mpc, how far away is that galaxy?
3. Show that $$1/H_0$$ for $$H_0 = 70$$ km/s/Mpc is about 14 billion years (one year is $$3.156 \times 10^7$$ s).
4. If every distance in a Hubble diagram is 4.7% too large, what happens to the fitted $$H_0$$?

## Safety

No hazards in the virtual lab.

## Procedure

**Hubble diagram.** Start from the Hubble's law setup, with distances from both rungs and the standard calibration. Choose at least 12 galaxies spread over the whole range of distance, at least four of them with Cepheid distances. For each, measure its redshift by matching the comb of rest wavelengths to the lines in its spectrum, then record a reading.

**Calibration.** Export your readings and Clear them. Make the Cepheid calibration 0.10 mag brighter ($$a = -4.15$$), with the supernova calibration following it, and record the same galaxies again. Type their redshifts in from your first copy of the table.

## Data

| Reading | Galaxy | Distance indicator | Calibration a, M (mag) | Distance d (Mpc) | Distance uncertainty (%) | Your redshift z | Recession velocity v = cz (km/s) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Work out $$v = cz$$ for each galaxy.

## Analysis

1. Graph $$v$$ against $$d$$ for your first copy of the table. Is it a straight line through the origin? Find $$H_0$$ from the slope, with its uncertainty.
2. Find the Hubble time $$1/H_0$$ in billions of years, and compare it with the age of the universe in the standard cosmological model, 13.8 billion years.
3. Work out $$v/d$$ for each galaxy. Which galaxies scatter most about your line, in proportion to their velocity? Explain this with peculiar velocities.
4. Compare your $$H_0$$ with the demo's fit to all 34 galaxies. Why do they differ, and which is more trustworthy?
5. Fit your second copy. By what factor did $$H_0$$ change? Compare with the factor you expect from a calibration 0.10 mag brighter.
6. Measurements today give $$67.4 \pm 0.5$$ km/s/Mpc from the cosmic microwave background (Planck 2018) and $$73.0 \pm 1.0$$ km/s/Mpc from the Cepheid and supernova ladder (SH0ES, Riess et al. 2022). What shift in the Cepheid calibration, in magnitudes, would change an $$H_0$$ of 70 into 73? Why is so much effort spent on the parallaxes of nearby Cepheids?

## Uncertainty

Estimate how well you can match the comb, as an uncertainty in $$z$$, and convert it to km/s. Compare it with the 250 km/s peculiar velocities and with the distance uncertainties. Which source of error dominates for the nearest galaxy you measured, and which for the farthest?

## Questions

1. Every galaxy recedes from us, faster the farther it is. Why does this not mean we are at the centre of the universe?
2. Why can't the distance to a galaxy 300 Mpc away be found from parallax or from Cepheids? Which measurements does your $$H_0$$ depend on?
3. $$v = cz$$ is accurate only for small $$z$$. For your most distant galaxy, use the relativistic Doppler formula, $$v/c = [(1+z)^2 - 1]/[(1+z)^2 + 1]$$, and say by how much it differs from $$cz$$. (For distant galaxies the redshift comes from the stretching of space, and neither formula is exact.)
4. Why is the Hubble time $$1/H_0$$ not exactly the age of the universe?

## What to hand in

Prelab answers, both table copies, the Hubble diagram with its fit, $$H_0$$ and $$1/H_0$$ with uncertainties, the calibration comparison, and answers to the questions. Identify simulated data.
