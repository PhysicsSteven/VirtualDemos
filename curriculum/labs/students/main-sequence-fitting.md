# Distances from the Main Sequence
Student laboratory · Astronomy

Textbook: OpenStax *University Physics*, Vol. 3, §6.1 (blackbody radiation and the Stefan–Boltzmann law) and §11.6 (the distance ladder behind the Hubble law). Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/distance-ladder.html?ws=main-sequence-fitting&setup=ms)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** 1 Parallax; Spectroscopic parallax; Main sequence fitting; 2 Cepheids; Cepheid photometry; 3 Type Ia; 4 Hubble's law; Whole ladder. This worksheet uses **Main sequence fitting** and **Spectroscopic parallax**.

**Using the demo.**

- Both views stand on the same calibration: the real main sequence of the Hipparcos stars within 25 pc of the Sun, from the HYG database v3.8 (CC BY-SA 4.0). The ridge line is a quadratic fit of absolute magnitude M (V band) against the color index B − V to the main sequence stars, with stars more than three standard deviations off the line left out.
- Main sequence fitting: a cluster's stars are plotted as V against B − V. Drag the cluster up or down, or use the slider, to choose the shift m − M; the readouts give the distance for that shift, how many cluster stars are in the fit (B − V from 0.30 to 1.50), and the mean and the mean square of their offsets from the ridge line. Cluster A, B and C are simulated clusters at hidden distances; Mystery cluster makes a new one at random. Show the true distance reveals it.
- Spectroscopic parallax: ten real stars 40 to 100 pc away, classed as main sequence. The demo gives each star's spectral type and apparent magnitude V, and the mean absolute magnitude, its spread and the number of nearby stars of the same type. Show the parallax distance gives the Hipparcos distance to compare.
- Record reading stores the current cluster and shift, or the current star. Export to worksheet sends cluster readings to the first data table below and star readings to the second. Clear starts a new series, which goes into a new copy of the table.
- The model: the clusters are simulated, with a spread of 0.08 mag in V and 0.02 in B − V, and 30% of their stars unresolved pairs brighter by up to 0.75 mag. There is no dust (no reddening or extinction) and nothing fainter than V = 19.

</details>

## Goal

Find the distances to star clusters by sliding their main sequence onto the nearby stars' main sequence, and to single stars from their spectral type alone, and test both against known distances.

## Background

**Distance modulus.** Brightness falls as $$1/d^2$$, so a star's apparent magnitude m and absolute magnitude M (how bright it would look from 10 pc) differ by

$$m - M = 5\log_{10}\frac{d}{10\ \text{pc}},\qquad d = 10^{(m - M + 5)/5}\ \text{pc}.$$

**The main sequence.** A main sequence star's color (or its spectral type) sets its surface temperature, and for stars burning hydrogen in their cores the temperature also sets the luminosity. So on a plot of M against B − V the main sequence is a narrow band, and for nearby stars, whose distances we know from parallax, that band is calibrated.

**Main sequence fitting.** All the stars of a cluster are at nearly the same distance, so its main sequence has the same shape, shifted down by the cluster's $$m - M$$. The shift that puts the cluster's stars on the calibrated ridge line gives the distance. For a shift $$\mu$$, the offset of star $$i$$ from the line is

$$o_i(\mu) = V_i - \mu - M_{\text{ridge}}(B - V)_i .$$

**Spectroscopic parallax.** For one main sequence star, the spectral type gives M from the nearby stars of that type, and then $$m - M$$ gives the distance. The spread $$\sigma_M$$ of M among stars of one type limits the result: a spread of $$\sigma_M$$ in M is a fractional spread of about $$\frac{\ln 10}{5}\sigma_M = 0.46\,\sigma_M$$ in d.

## Before the lab

1. An unresolved pair of identical stars looks like one star twice as bright. How many magnitudes brighter is it than one of the stars? If you fitted a cluster's main sequence to such pairs alone, would the distance come out too large or too small, and by what factor? In a real cluster perhaps a third of the stars are pairs, mixed in among single stars of every color. Will its fitted distance come out about right, too large or too small? Say why.
2. Use the equation for $$o_i(\mu)$$ to show that the mean offset falls by exactly 1 for every 1 added to the shift, and that the mean square offset is a parabola in $$\mu$$ whose lowest point is where the mean offset is zero.
3. The nearby G0 V stars have a mean $$M = 4.55$$ with a spread of 0.4 mag. A G0 V star has $$V = 8.00$$. Find its spectroscopic distance and its uncertainty in percent.

## Safety

No hazards in the virtual lab.

## Procedure

**Part 1. Fitting a cluster.** The link opens **Main sequence fitting** with **Cluster A** chosen. Drag the cluster up or down on the plot, or move the **Shift m − M** slider, until its stars lie along the ridge line (the readout **Mean offset from the line** is then near 0). Then record readings at five shifts spread evenly over 0.8 magnitudes around it, for example every 0.2 mag from 0.4 below to 0.4 above. For each: (1) set the shift on the slider (drag close, then the arrow keys move it 0.01 at a time; the value shows beside the slider); (2) press **Record reading**. Press **Export to worksheet**, then **Clear**. Do the same for **Cluster B** (press its button); each cluster gets its own copy of the first table. Leave **Show the true distance** unpressed until you have fitted both clusters and the mystery cluster.

**Part 2. A mystery cluster.** Press **Mystery cluster** and fit it the same way (five shifts), then press **Export to worksheet** and **Clear**. Write down your distance, then press **Show the true distance** and write down the mystery cluster's **True distance (simulated)** too: pressing **Mystery cluster** again would draw a new cluster.

**Part 3. Spectroscopic parallax.** Press the **Spectroscopic parallax** setup at the top. Press each of the ten star buttons in turn. For each star, first write down its **Spectroscopic distance d**, then press **Show the parallax distance** (it stays shown for the next stars) and press **Record reading**. Press **Export to worksheet**; star readings fill the second table.

## Data

**Main sequence fitting.** One copy of the table per cluster.

| Reading | Cluster | Shift $$m - M$$ (mag) | Distance for this shift $$d$$ (pc) | Stars in the fit | Mean offset (mag) | Mean square offset (mag²) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

**Spectroscopic parallax.**

| Reading | Star | Spectral type | Apparent magnitude $$V$$ | B − V | Mean $$M$$ of this type (mag) | Spread of $$M$$ (mag) | Nearby stars of this type | $$m - M$$ (mag) | Spectroscopic distance (pc) | Uncertainty (%) | Parallax distance (pc) | Spectroscopic ÷ parallax |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | | |
| | | | | | | | | | | | | |
| | | | | | | | | | | | | |

## Analysis

1. For each cluster, graph the mean square offset (vertical) against the shift (across) and fit a quadratic, $$a + b\mu + c\mu^2$$. Find the shift at the lowest point, $$\mu = -b/(2c)$$, and the distance it gives.
2. Press **Cluster A** and **Cluster B** in turn to read each **True distance (simulated)**; for the mystery cluster, use the true distance you wrote down in Part 2. By how many percent is each of your distances off, and in which direction?
3. For the ten stars, graph the spectroscopic distance (vertical) against the parallax distance (across), with the line where they are equal. Find the median of the Spectroscopic ÷ parallax column.
4. Which star is furthest off? Suggest what about that star could fool the method.

## Uncertainty

For each cluster, estimate how far the shift can move before the mean square offset rises by its own value divided by the number of stars in the fit; that change in shift is roughly the standard error of the fitted shift. Turn it into a percentage uncertainty in distance and compare it with how far off the cluster's distance was.

## Questions

1. Real clusters lie behind dust, which dims and reddens their stars. Which way would ignoring the dimming move a fitted distance? Which way would ignoring the reddening move it?
2. Why is the calibration made from stars within 25 pc and not from stars within 200 pc?
3. The end of Before the lab 1 asked about a cluster in which only some of the stars are pairs. Which way were your three clusters off in Analysis 2, and is that what you expected? Explain the direction from the offsets $$o_i(\mu)$$ that the fit averages: what does a pair do to its own offset, and what do the single stars do?

## What to hand in

Prelab answers, the table copies with their graphs and fits, the fitted shift and distance of each cluster with its uncertainty and the true distances, the mystery cluster's distance, the comparison of the ten stars with the median ratio, and answers to the questions. Identify simulated data: the clusters are simulated; the nearby stars and the ten target stars are real catalog data.
