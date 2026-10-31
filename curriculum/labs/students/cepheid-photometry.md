# Measuring a Cepheid on CCD Images
Student laboratory · Astronomy

Textbook: OpenStax *University Physics*, Vol. 3, §11.6 (the distance ladder behind the Hubble law). Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/distance-ladder.html?ws=cepheid-photometry&setup=phot)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** 1 Parallax; Spectroscopic parallax; Main sequence fitting; 2 Cepheids; Cepheid photometry; 3 Type Ia; 4 Hubble's law; Whole ladder. This worksheet uses **Cepheid photometry**.

**Using the demo.**

- Cepheid photometry shows one simulated CCD image per night of a Cepheid variable in the Large Magellanic Cloud, with three comparison stars of known V magnitude: C1 (13.85), C2 (14.62) and C3 (15.10). The Cepheid chips choose which of five Cepheids is in the field; the night slider and the Previous night and Next night buttons step through the nights.
- Two apertures sit on the image: one on the Cepheid and one on a comparison star. Drag either to another star; dropped, it centers itself on the star's light. The aperture radius slider sets the size of both.
- Each aperture adds up the counts of the pixels inside it and takes away the sky, measured as the median of a ring 3 to 8 px outside the aperture. The readouts give both net counts, the instrumental difference, the Cepheid's V, its uncertainty from the photon counts, the raw instrumental magnitude, and the night's seeing and sky.
- Record reading stores the night, its time, the comparison star, both net counts and the results. The light curve under the image draws your readings as you take them. Export to worksheet sends readings from several nights to the first data table below and readings at several aperture sizes on one night to the second. Clear starts a new series, which goes into a new copy of the table.
- The model: the images are simulated. Each star is a Gaussian blur of the night's seeing (2.2 to 4.0 px wide at half maximum) on a flat sky, dimmed by the night's thin cloud (transparency 60 to 100%), with photon noise and 5 electrons of read noise. No other star lies within 14 px of the Cepheid or a comparison star.

</details>

## Goal

Measure a Cepheid's brightness night by night from CCD images, build its light curve, find its period and mean magnitude, and use the Leavitt law to find the distance to the Large Magellanic Cloud.

## Background

**Differential photometry.** A CCD counts the light of each star. Clouds and seeing change from night to night, but they dim or blur every star in the image by the same factor, so the ratio of the Cepheid's counts $$N_V$$ to a comparison star's counts $$N_C$$ does not depend on them. With the comparison star's magnitude $$V_C$$ known,

$$V = V_C + \Delta m,\qquad \Delta m = -2.5\log_{10}\frac{N_V}{N_C}.$$

**Photon noise.** Counting $$N$$ photons has a random scatter of $$\sqrt{N}$$. With the sky and the read noise, the variance of a net count is $$\sigma^2 = N + n_{\text{pix}}(\text{sky} + 5^2)$$, and the uncertainty in a magnitude is about $$1.0857\,\sigma/N$$.

**Cepheids.** A Cepheid pulsates with a fixed period, a few days to months. Leavitt found that the longer the period, the more luminous the star. As this demo calibrates it (Benedict et al. 2007, from Hubble Space Telescope parallaxes of Milky Way Cepheids),

$$M_V = -2.43\,(\log_{10}P - 1) - 4.05,$$

with P in days. The mean apparent magnitude and $$M_V$$ give the distance modulus $$m - M = 5\log_{10}(d/10\ \text{pc})$$.

## Before the lab

1. On one night the Cepheid gives 5200 net counts and C1 ($$V = 13.85$$) gives 10 400. Find the Cepheid's V.
2. The next night thin cloud lets through only 70% of the light. What happens to $$N_V$$, $$N_C$$, $$\Delta m$$ and V?
3. A star gives 10 000 net counts with negligible sky. What is the uncertainty in its magnitude?
4. A Cepheid has a period of 11.4 days and a mean V of 14.30. Find $$M_V$$, the distance modulus and the distance in kpc.
5. A light curve is sampled once a night for 39 nights. About how many cycles of an 11 day Cepheid does that cover? Could a 0.9 day period be told apart from it with once a night sampling? (Think about what you would see.)

## Safety

No hazards in the virtual lab.

## Procedure

**Part 1. The light curve.** Choose Cepheid photometry and Cepheid C3, with the comparison aperture on C1. Record a reading on every night, from the first to the last. Send the readings to the worksheet.

**Part 2. A second comparison star.** Clear the readings. Move the comparison aperture to C2 and record readings on the first ten nights again. Send them; they go into a new copy of the first table.

**Part 3. The aperture size.** Clear the readings. Stay on one night, with the comparison aperture on C1, and record a reading at each aperture radius from 2 to 9 px. Send the readings; they fill the second table.

## Data

**The Cepheid, night by night.**

| Reading | Night | Time $$t$$ (d) | Comparison star | $$V_C$$ of the comparison | Cepheid net counts $$N_V$$ | Comparison net counts $$N_C$$ | $$\Delta m$$ | Cepheid $$V$$ | Uncertainty $$\sigma_V$$ | Raw instrumental magnitude | Seeing (px) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |

**One night, several apertures.**

| Reading | Aperture radius (px) | Cepheid net counts $$N_V$$ | Comparison net counts $$N_C$$ | $$\Delta m$$ | Cepheid $$V$$ | Uncertainty $$\sigma_V$$ |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

## Analysis

1. Graph V against t for Part 1 (put brighter, smaller V, upward if your graph allows, or note that it is upside down). Describe the shape of one cycle: is the rise as fast as the fall?
2. Find the period two ways: from the times of two maxima several cycles apart, divided by the number of cycles, and from a sine fit to V against t ($$P = 1/f$$). Which do you trust more, and why?
3. Find the mean V as the average of the fitted curve over one cycle (the sine fit's C), and from the brightest and faintest V.
4. Use the Leavitt law to find $$M_V$$, then the distance modulus and the distance to the Large Magellanic Cloud. Compare with the measured 49.6 kpc (Pietrzyński et al. 2019).
5. Graph the raw instrumental magnitude against t on the same nights. Why is it so much more ragged than V? Which nights were cloudy?
6. Compare the V values from C1 and from C2 on the same nights (Part 2). Do they agree within their uncertainties? Find the mean difference.
7. From Part 3, graph $$\sigma_V$$ against the aperture radius. Which radius gives the smallest uncertainty? Does V itself change with the radius? Explain both.

## Uncertainty

Compare the scatter of your V points about the fitted curve with the uncertainties $$\sigma_V$$ the demo gives. Estimate the uncertainty of the period from Analysis 2 and carry it, with the uncertainty of the mean V, into the distance. Remember that real Cepheids of one period also differ by about 0.1 mag in $$M_V$$, the width of the instability strip, so one Cepheid gives the distance only to about 5%.

## Questions

1. Why do astronomers measure a variable star against comparison stars in the same image instead of measuring it alone?
2. A comparison star that is itself slightly variable would do what to the light curve?
3. Why does a small aperture give a noisier V on a night of poor seeing?
4. The comparison stars' magnitudes come from a calibration against standard stars. If they were all 0.05 mag too faint, what would happen to your distance?
5. Why is one Cepheid's distance to the Large Magellanic Cloud less precise than the distance from many Cepheids in rung 2?

## What to hand in

Prelab answers, the table copies with their graphs and fits, the period and mean V with their uncertainties, the distance to the Large Magellanic Cloud with its uncertainty, the comparison of the two comparison stars and of the aperture sizes, and answers to the questions. Identify simulated data: the CCD images and the Cepheid's light curve are simulated.
