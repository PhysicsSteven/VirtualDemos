# CT Image Reconstruction: From Projections to an Image
Student laboratory · Medical Physics

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/ct-reconstruction.html?ws=mp-ct-reconstruction)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Head, filtered backprojection; Head, simple backprojection; Wire, simple backprojection; Wire, filtered: the point spread; Too few views; Only 120° of angles; Resolution rods, 1 mm bins; Resolution rods, 2 mm bins; Low dose water; Low dose, Hann filter. This worksheet uses the Wire, simple backprojection; Wire, filtered: the point spread; Too few views; Only 120° of angles; and Low dose water setups.

**Using the demo.**

- The picture has three panes. **Scanner** shows the X-ray tube and the detector on opposite sides of the phantom, the parallel rays between them, and the projection the detector measures in the view shown. **Sinogram** stacks every view's projection as one row, from the first angle at the top to the last at the bottom. **Image** is the reconstruction.
- **Scan** takes the views one after another, slowed down so you can watch: each view adds a row to the sinogram and a smear across the image. Once a scan is done, changing any control recomputes the whole scan at once; **Scan again** repeats it with new photon noise.
- The controls beside the picture choose the phantom, the reconstruction (**Simple backprojection** or **Filtered backprojection**, with the **Filter**), the scan (**Views**, **Angular range**, **Detector bin width**, **Photons per bin per view**, **Photon noise**) and how you look at the image (**Display window**, **Region of interest**, **Profile line height**). Click a slider's number to type an exact value.
- Above the image, **Reconstruction**, **Phantom** and **Difference** switch what the image pane shows; **+** and **−** zoom about its center and **Reset view** goes back. Click or drag on the sinogram to choose the view shown on the scanner and on the graph.
- The graph shows the **Projection** of the view shown (with the filtered projection), a **Profile** along the dashed line across the image, or the **Filter** against spatial frequency.
- **Record reading** stores the readouts (one row), or, while the graph shows Profile, the profile at evenly spaced points to the right of the image's center (one row each). Export to worksheet sends the readings to the Data tables. Clear starts a new series.

</details>

## Goal

Measure how backprojection without a filter blurs a point into 1/r; measure the point spread of filtered backprojection against the detector bin width and the filter; find how many views a scan needs; and measure how image noise depends on the number of photons.

## Background

A CT scanner sends a thin X-ray beam through the patient along many lines and measures how much of it gets through. Along a line $$L$$ through tissue of linear attenuation coefficient $$\mu(x, y)$$, the transmitted count is $$N = N_0 e^{-p}$$, with

$$p = \ln \frac{N_0}{N} = \int_L \mu \, dl,$$

the line integral, or projection. For a parallel set of lines at angle $$\theta$$, the line at offset $$s$$ is $$x \cos\theta + y \sin\theta = s$$, and $$p(s, \theta)$$ for all offsets is one view. Stacking the views from $$\theta = 0$$ to $$180°$$ (the lines then repeat) gives the sinogram: a single point at radius $$r$$ traces a sine curve $$s = r \cos(\theta - \phi)$$ through it, hence the name.

The simplest way back is to smear each view back across the image along its own lines and add them up, called backprojection:

$$b(x, y) = \Delta\theta \sum_k p(x \cos\theta_k + y \sin\theta_k, \theta_k).$$

Every line through a point gets the point's contribution, so a point object of strength $$A = \int\!\!\int \mu \, dx\,dy$$ (its $$\mu$$ times its area) comes back as

$$b(r) = \frac{A}{r},$$

where $$r$$ is the distance from the point. Each view puts the point's whole projection, $$A$$, on the one line through it; at a distance $$r$$ those lines sweep past at $$r$$ per radian of angle, so adding them up over $$180°$$ gives $$A/r$$. Simple backprojection is the true image blurred by $$1/r$$. In Fourier terms, $$1/r$$ blurring divides each spatial frequency $$f$$ by its magnitude $$\lvert f \rvert$$, so the cure is to multiply each projection's spectrum by $$\lvert f \rvert$$, the ramp filter, before backprojecting. That is filtered backprojection, and with a complete set of views it returns $$\mu$$ exactly, up to the detector's resolution.

Three things limit a real image. The **detector bins** have a width $$\Delta s$$; the finest pattern they can sample has a spatial frequency of $$1/(2\Delta s)$$ (the Nyquist frequency), and a point comes out with a width proportional to $$\Delta s$$. The **views** must be close enough together: an object of width $$D$$ sampled with bins $$\Delta s$$ needs about

$$K \approx \frac{\pi}{2} \frac{D}{\Delta s}$$

views over $$180°$$ (Kak and Slaney 1988), or streaks fan out from its edges. And the **photons** are counted: a count $$N$$ has a standard deviation $$\sqrt N$$, so each projection carries noise that the ramp filter amplifies at high frequencies. Windows such as the Hann filter roll the ramp off near the Nyquist frequency, lowering the noise at the price of a wider point spread.

Images are shown in CT numbers, $$H = 1000(\mu/\mu_w - 1)$$ in HU, with water at 0 and air at −1000. The demo's scanner is a simplification, stated in its Lab fold: parallel rays over a 25.6 cm field, one X-ray energy (60 keV, $$\mu_w = 0.2059$$ cm⁻¹), and Poisson photon counts.

## Before the lab

1. A tungsten wire 0.2 mm across has $$\mu = 71.66$$ cm⁻¹ at 60 keV (NIST). Compute its strength $$A = \mu \pi a^2$$ in cm, and the value of $$b$$ that simple backprojection should give 1 cm and 5 cm from it.
2. For a head 18.4 cm across scanned with 1 mm bins, how many views does the sampling rule ask for?
3. Part 4 scans a water phantom with 1,000,000 photons per bin per view and later with 10,000,000, ten times the dose. Before you open the demo, decide what the tenfold dose does to the noise in the image (the ROI SD): does it fall to about a tenth, to about a third, to about a half, or hardly change?

## Safety

No hazards in the virtual lab. A real CT scan gives a dose of ionizing radiation that grows with the number of photons: Part 4 is the reason scanners are tuned to use no more than an image needs.

## Procedure

**Part 1: Simple backprojection of a wire.** (1) Choose the Wire, simple backprojection setup (720 views, no photon noise) and press Scan. Wait for it to finish (about 8 s). (2) The graph shows Profile, along the line y = 0 through the wire. Press Record reading: it records the profile at x = 1, 2, … 12 cm, one row each. Press Export to worksheet before you clear the readings.

**Part 2: The point spread of filtered backprojection.** (1) Choose the Wire, filtered: the point spread setup (720 views, 1 mm bins, the Ramp filter, zoomed 16 times) and press Scan. (2) Switch the graph to Filter (Record reading stores the profile only while the graph shows Profile) and press Record reading: it records one row with the wire's FWHM. (3) Set **Detector bin width** to 0.5 mm and record; then 2 mm, 3 mm and 4 mm, recording each. Press Export to worksheet, then Clear. (4) Set Detector bin width back to 1 mm, choose the **Shepp–Logan** filter and record, then **Hann** and record. Look at how the three filters differ on the graph. Export these two readings too: they go into a second copy of the table.

**Part 3: How many views.** (1) Choose the Too few views setup (the head, 18 views, no photon noise) and press Scan. Look at the image, then press **Difference** above the image, then **Reconstruction** again. (2) Press Record reading (the graph shows Projection, so it records one row). (3) Set **Views** to 36 and record; then 72, 144, 288 and 576, recording each. (4) Choose Only 120° of angles, press Scan, and look at the image in the Wide window (nothing to record). Export the readings to the worksheet.

**Part 4: Noise and dose.** (1) Choose the Low dose water setup (the region of interest is the water at the center) and press Scan. Switch the graph to Projection and press Record reading. (2) Set **Photons per bin per view** to 100,000 and record; then 300,000, 3,000,000 and 10,000,000, recording each. Press Export to worksheet, then Clear. (3) Set it back to 1,000,000, choose the **Hann** filter, record, and export this reading into a second copy of the table.

## Data

| Reading | x (cm) | b (simple backprojection) | 1/x (1/cm) |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

| Reading | Filter | Bin width Δs (mm) | Wire FWHM (mm) | FWHM / Δs |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

| Reading | Views K | Views the sampling rule asks for | Error in uniform tissue, RMS (HU) |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

| Reading | Filter | Photons per bin per view N₀ | Relative dose | ROI mean (HU) | ROI SD (HU) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. Fill in the last column of the first table, graph b against 1/x and fit a straight line (with an intercept). Compare the slope with the strength A you computed before the lab, and use it to find the wire's μ (its diameter is 0.2 mm). Is the intercept zero within its standard error?
2. Fill in FWHM / Δs in the second table for the ramp filter. Graph the FWHM against Δs for the ramp readings and fit a straight line (with an intercept). What does the slope say about how the resolution scales? By how much does the Hann filter widen the point spread at 1 mm?
3. Graph the error against the number of views on log scales. Below the sampling rule, by what factor does the error fall each time the views double? Where does it stop improving, and how does that compare with the rule's number?
4. Graph the ROI SD against N₀ for the ramp readings on log scales and fit a straight line (a power law). Give the exponent with its standard error. How much did the Hann filter lower the noise at 1,000,000 photons?

## Uncertainty

The profile in Part 1 is noise free, but the views are discrete: past about 6 cm the 720 lines through the wire spread wider than a bin, so b at a single point can be off by a few percent. The FWHM is read from a noise free profile and is exact for the model. The noise in Part 4 is random: Scan again gives a new noise pattern, and the ROI SD changes by a few percent from scan to scan, which you can check by scanning twice.

## Questions

1. In Part 3, why do the streaks start at the skull's edges and run straight, and why does the 120° scan smear some edges but not others?
2. Before the lab 3 asked what ten times the photons does to the noise. Take the ROI SD at 1,000,000 and at 10,000,000 photons from your table, and set their ratio beside your prediction and beside the exponent from Analysis 4. Explain the exponent from the photon counting in the Background, and say how many times the dose it would take to halve the noise.

## What to hand in

Prelab answers, the four tables with their graphs and fits, the wire's μ from your fit, the scaling of the FWHM with bin width and of the noise with photons, and answers to the questions. Identify simulated data.
