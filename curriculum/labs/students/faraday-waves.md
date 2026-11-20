# Faraday Waves: Shaking a Liquid Into Patterns
Student laboratory · Acoustics

Textbook: OpenStax *University Physics*, Vol. 1, §§15.6, 15.7 and 16.1 to 16.6 (damped and driven oscillations, waves), with the surface waves and parametric drive below, which the book does not cover. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/chladni.html?ws=faraday-waves)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo** (the Presets chips that start with Liquid)**:** Liquid: Faraday squares (water 5 mm deep at 50 Hz, 1.9 times the onset); Liquid: stripes in thick oil (silicone oil, 100 cSt, 3 mm deep at 20 Hz); Liquid: hexagons (silicone oil, 10 cSt, 3 mm deep at 30 Hz); Liquid: eightfold pattern (silicone oil, 10 cSt, 10 mm deep at 25 Hz); Liquid: find the onset (water 2 mm deep in a square dish at 40 Hz, driven at 0.8 of the onset). The demo opens on a metal plate; any Liquid preset, or **Vibrating: Liquid layer**, puts a dish of liquid on the wave driver.

**Using the demo.**

- The picture is the liquid surface seen from above, lit from the side, with the dish's motion and the surface's own motion slowed by the factor f so you can follow them; the waves grow or die away in real time. The plot beside it (the Display fold, **Plot**) shows **Onset**, the dish acceleration Γ needed for waves at every drive frequency, or **Tongues**, which wavelengths grow at each Γ.
- The function generator sets **Frequency f** (8 to 160 Hz for a liquid) with its knobs and sliders; click the frequency readout to type an exact value. Set up the plate and driver: **Vibrating** (Metal plate, Drumhead, Liquid layer), **Shape** of the dish, **Liquid** (Water, Silicone oil, 10 cSt, Silicone oil, 100 cSt), **Liquid depth d** from 1 to 20 mm in 0.5 mm steps, and **Driver setting x₀**, which sets how hard the driver shakes the dish.
- Readouts: under Drive and surface, **Dish acceleration Γ = a/g**, **Onset Γ at this f**, the dish motion, the driver force and **Surface**, which says whether waves grow (and how fast, with their frequency, wavelength and pattern) or how far below onset you are; under Liquid, the liquid mass, **Free wave at f/2** (its frequency and wavelength) and **Damping and pattern**.
- **Record reading** stores the dish shape, the liquid, its depth, f, Γ, the onset Γ, the surface (flat, or the pattern), the surface frequency, the wavelength of the growing wave and that of the free wave. **Export to worksheet** fills the Data table in order: Reading (with the dish shape), Liquid, Depth, Drive f, Γ, Onset Γ_c, Surface, Surface frequency and Wavelength (the free wave's); the last three columns are yours to work out.

**What the demo models.**

- The dish rides on the driver as one rigid load. In the dish's frame gravity becomes $$g(1 + \Gamma\cos 2\pi f t)$$, so each surface wave of wavenumber $$k$$ obeys a damped Mathieu equation, $$\ddot a + 2\alpha\dot a + \left[\omega_0^2 + \Gamma g k\tanh(kd)\cos 2\pi f t\right]a = 0,$$ with $$\omega_0^2 = (gk + \sigma k^3/\rho)\tanh(kd)$$. The demo integrates it over one drive period (fourth order Runge–Kutta) and finds whether the wave grows from the Floquet multipliers. The onset $$\Gamma_c$$ is the least Γ at which any wave grows.
- Damping: the bulk viscous rate $$2\nu k^2$$ plus the boundary layer on the dish floor, $$k\sqrt{\nu\omega/2}/\sinh 2kd$$. The side walls, the meniscus and any film on the surface are left out; they all add damping, so measured onsets in water are often several times the demo's.
- Which pattern forms is a nonlinear question the linear model cannot answer. The demo follows a rule taken from experiments (Binks and van de Water 1997; Kudrolli and Gollub 1996; Chen and Viñals 1999), given in Background. The height of the pattern is a picture, not a calculation, and droplets thrown off well above onset are not modeled.
- Liquids: water at 20 °C, 998.2 kg/m³, 1.002 mPa·s (CRC Handbook), $$\sigma$$ = 72.8 mN/m (OpenStax College Physics 2e, Table 11.3); silicone oils at 25 °C (Dow XIAMETER PMX-200 data sheet): 10 cSt, 935 kg/m³, 20.1 mN/m; 100 cSt, 965 kg/m³, 20.9 mN/m. The readings are simulated: model results, not measurements.

</details>

## Goal

Find the drive needed to make a shaken liquid ripple, the frequency at which its surface moves, and how the waves' wavelength depends on frequency; from that dependence measure the surface tension of water and $$g$$, and see how depth and viscosity raise the onset and choose the pattern.

## Background

**Waves on a liquid.** A ripple on water is pulled flat by two things: gravity, which pulls the crests down, and surface tension $$\sigma$$, which pulls a curved surface flat like a stretched sheet. A wave of wavelength $$\lambda$$, wavenumber $$k = 2\pi/\lambda$$, on a layer of depth $$d$$ has angular frequency $$\omega$$ given by

$$\omega^2 = \left(gk + \frac{\sigma k^3}{\rho}\right)\tanh(kd).$$

When the layer is deeper than about two thirds of a wavelength ($$kd$$ above 4), $$\tanh(kd)$$ is 1 to better than 0.1 %, and dividing by $$k$$ gives a straight line in $$k^2$$:

$$\frac{\omega^2}{k} = g + \frac{\sigma}{\rho}\,k^2 .$$

Long waves are held flat mostly by gravity, short ones mostly by surface tension.

**Shaking the dish.** Shake a dish of liquid up and down at frequency $$f$$ with acceleration amplitude $$a$$, and write $$\Gamma = a/g$$. Seen from the dish, gravity swings between $$g(1 - \Gamma)$$ and $$g(1 + \Gamma)$$, $$f$$ times a second. The surface is never pushed sideways, yet above a threshold it breaks into standing waves: Faraday waves (Michael Faraday, 1831). The drive does not push the waves; it changes how strongly they are pulled back. This is parametric drive, the way a child pumps a swing by standing and squatting: standing at each end of the swing and squatting at the bottom pumps twice per swing. In the same way a surface wave is pumped hardest when gravity goes through two cycles while the wave goes through one, so the waves that grow first have angular frequency

$$\omega_0 = \tfrac12\,(2\pi f) = \pi f,$$

half the drive frequency (a subharmonic response). Their wavelength is the one the formula above gives for that $$\omega$$.

**Damping and the onset.** A wave loses energy to viscosity at the rate $$2\alpha$$, where the amplitude decay rate of a wave on a deep layer is $$\alpha = 2\nu k^2$$, with $$\nu$$ the kinematic viscosity (water, 1.004 mm²/s). It grows only when the pumping beats that loss. For weak damping ($$\alpha$$ much less than $$\omega_0$$) and a deep layer, the onset is

$$\Gamma_c \approx \frac{4\alpha}{\omega_0}\left(1 + \frac{\sigma k^2}{\rho g}\right).$$

A shallow layer adds a second loss, the drag of the dish floor on the moving liquid, so its onset is higher.

**Patterns.** Just above onset the surface picks a pattern. Experiments find a rule, which the demo follows: stripes when damping is strong ($$\alpha/\omega_0$$ above about 0.15); otherwise squares when surface tension supplies most of the pull (the capillary share $$s = \sigma k^2/(\rho g + \sigma k^2)$$ at least 0.48), hexagons for $$s$$ from 0.37 to 0.48, and an eightfold quasipattern, which never repeats, below 0.37.

## Before the lab

1. The dish is shaken up and down 40 times a second. Before you open the demo, predict how many times a second a point on the rippled surface rises and falls: 80, 40 or 20. Give your reason.
2. For water ($$\rho$$ = 998.2 kg/m³, $$\sigma$$ = 72.8 mN/m), at what wavelength do the two terms of $$g + (\sigma/\rho)k^2$$ equal each other? Are the ripples in a dish shaken at 40 Hz (wavelength about 12 mm) held flat more by gravity or by surface tension?
3. Silicone oil of 100 cSt has a kinematic viscosity about 100 times that of water. At the same wavelength, how does its damping rate $$\alpha = 2\nu k^2$$ compare with water's, and what do you expect that to do to the onset?

## Procedure

**A. Find the onset.** In the right panel, under Presets, press **Liquid: find the onset**: water 2 mm deep, shaken at 40 Hz at 0.8 of the onset. The surface stays flat and the **Surface** readout says how far below onset you are. Press **Record reading** in the Readings section. Now click the **Driver setting x₀** slider and press the right arrow key once; each step raises Γ by about 6 %. Wait a second and read **Surface**. Keep stepping until Surface says the waves grow, and record a reading at the last step below onset and the first step above it. So close to onset the waves grow very slowly (Surface gives the rate), so press the right arrow key five more times, wait for the pattern to grow, and record a fourth reading. Watch the dish and the surface (both are slowed by the factor f): count how many times the dish goes up and down while a crest rises and falls once. Press **Export to worksheet**, then **Clear**.

**B. Wavelength against frequency.** Under **Liquid**, choose **Water**, and drag **Liquid depth d** all the way right, to 20.0 mm. For each drive frequency in this list, click the frequency readout of the function generator, type the value and press Enter, then press **Record reading**: 20, 30, 40, 60, 80, 120 and 160 Hz. The Wavelength column takes the **Free wave at f/2** wavelength, the wave the drive pumps first; it does not depend on Γ. Export to worksheet, then Clear.

**C. Depth and viscosity.** Type 30 Hz into the frequency readout. With Water, set **Liquid depth d** to 1.0, 2.0, 5.0 and 20.0 mm in turn (click the slider, then use the arrow keys, 0.5 mm a step) and record a reading at each; the **Onset Γ at this f** readout goes in the Onset column, so Γ itself does not matter here. Then, at 20.0 mm, choose **Silicone oil, 10 cSt** and record, then **Silicone oil, 100 cSt** and record. Export to worksheet, then Clear.

**D. Patterns.** Press each of the four pattern presets in turn, **Liquid: Faraday squares**, **Liquid: stripes in thick oil**, **Liquid: hexagons** and **Liquid: eightfold pattern**, wait until the pattern has grown, and record a reading. Sketch one of the four patterns in the notes under the table. Export to worksheet.

## Data

| Reading | Liquid | Depth $$d$$ (mm) | Drive $$f$$ (Hz) | Γ | Onset $$\Gamma_c$$ | Surface | Surface frequency (Hz) | Wavelength $$\lambda$$ (mm) | $$k = 2\pi/\lambda$$ (1/m) | $$\omega^2/k$$ (m/s²) | $$k^2$$ (1/m²) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |
| | | | | | | | | | | | |

Parts A, B, C and D each get their own copy of this table. Work out the last three columns for part B, with $$\lambda$$ in meters and $$\omega = 2\pi \times$$ (surface frequency).

## Analysis

1. From part A, between which two values of Γ does the onset lie? Does the demo's Onset Γ_c fall between them? What is the surface frequency compared with the drive frequency?
2. Fill in $$k$$, $$\omega^2/k$$ and $$k^2$$ for part B. Graph $$\omega^2/k$$ (vertical) against $$k^2$$ (horizontal) and fit a straight line. From the intercept find $$g$$, and from the slope find $$\sigma$$ (take $$\rho$$ = 998.2 kg/m³), in mN/m. Compare them with 9.81 m/s² and 72.8 mN/m.
3. From part C, how many times higher is the onset in water 1.0 mm deep than 20.0 mm deep? For the 20.0 mm water reading, work out $$\alpha = 2\nu k^2$$ from its wavelength ($$\nu$$ = 1.004 × 10⁻⁶ m²/s), then the weak damping onset $$\Gamma_c \approx (4\alpha/\omega_0)(1 + \sigma k^2/\rho g)$$ with $$\omega_0 = \pi f$$, and compare it with the Onset column.
4. Still in part C, compare the onsets of the two oils with water's. Work out the weak damping estimate for the 100 cSt oil ($$\nu$$ = 100 × 10⁻⁶ m²/s, $$\rho$$ = 965 kg/m³, $$\sigma$$ = 20.9 mN/m) and its $$\alpha/\omega_0$$. Why is the estimate further from the demo's onset here than for water?
5. For each part D reading, find the capillary share $$s = \sigma k^2/(\rho g + \sigma k^2)$$ from its wavelength (water: $$\rho$$ = 998.2 kg/m³, $$\sigma$$ = 72.8 mN/m; 10 cSt oil: 935 kg/m³, 20.1 mN/m; 100 cSt oil: 965 kg/m³, 20.9 mN/m). Does the rule in Background predict the pattern you saw? For the stripes, read $$\alpha/\omega_0$$ from the **Damping and pattern** readout.

## Questions

1. Look back at Before the lab 1. How many times a second did the surface rise and fall at 40 Hz, and does that match your prediction? Use the swing in Background to explain why the surface moves at half the drive frequency.
2. Switch the **Plot** in the Display fold to **Tongues**. The lowest tongue sits at the wavelength of a wave at f/2, the next one at a wave at f. Why does the tongue at f/2 reach down to a lower Γ than the one at f?
3. A student repeats part C in a real lab with tap water at 30 Hz and finds the onset well above the demo's value. Name two things the demo leaves out that could explain it, and say which way each one moves the onset.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

In part A the onset is pinned only between two steps of x₀, about 6 % apart in Γ; use half that gap as its uncertainty. In part B use the standard errors of the slope and intercept that the fit gives to put an uncertainty on $$\sigma$$ and $$g$$; the depth of 20.0 mm makes $$\tanh(kd)$$ differ from 1 by less than 0.01 % even at 20 Hz. Every value here is computed by the demo, so the scatter is only rounding. In a real dish, the side walls, the meniscus and a trace of dirt on the water add damping, and measured onsets in water are often several times the demo's.

## What to hand in

Prelab answers, the four copies of the Data table with the last three columns worked for part B, the graph and fit, the calculations in Analysis, your pattern sketch and answers to the questions (and to Uncertainty, if assigned). Identify simulated data.
