# Resonance Tube: Speed of Sound
Student laboratory · Acoustics

Textbook: OpenStax *University Physics*, Vol. 1, §§17.2 and 17.4. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/resonators.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo** (the Presets chips)**:** Resonance tube, find c; Open vs closed pipe; Pluck at the middle; Guitar string; Bottle, blow across it; Fill the bottle. This handout uses Resonance tube, find c, which the demo opens on: the **Pipes** view with **Resonance tube** chosen, 512 Hz, a 3.2 cm tube, Q = 30 and 20 °C.

**Using the demo.**

- The picture is a 1 m tube standing in water with a source over its open top. The pressure and the air displacement are drawn in the air column, and the level plot beside it shows the sound level against the water position: your swept trace and, unless Blind is on, the computed response and the true resonance positions. Captured readings are marked on the scale. With **Sound** on you hear a tone at f whose loudness follows the computed pressure in the tube, so it swells at each resonance.
- Controls on the card under the picture: **Source frequency f**, 250 to 1000 Hz in 1 Hz steps, with tuning fork chips at 256, 320, 384, 440 and 512 Hz; **Water surface below the top**, 2 to 98 cm in 1 mm steps (drag the water surface on the picture, or use the up and down arrows, Shift for 1 cm); **Tube inner diameter**, 2.0 to 6.0 cm; **Tube quality factor Q**, 10 to 80; and **Air temperature**, −10 to 40 °C in 0.5 °C steps.
- Readouts: **Speed of sound c** and the wavelength at the note under Air; under Resonance tube, the **Level in the tube** in dB, the **Nearest resonance** (its k and position), the **End correction 0.61a** and the **Spacing λ/2**.
- **Capture reading** (or Enter on the picture) stores the frequency, the water position as read on the scale, the temperature, the diameter and the seed, and numbers the reading k from the top at that frequency; k and L can be edited in the table, which also shows the spacing to the reading with the next lower k. The plot below the table is L against (2k − 1)/4f with a least squares line, and the fit readouts give c from the spacings, the slope c, the intercept −ΔL and ΔL/a, with their standard errors.
- **Export to worksheet** sends f, k, the read L and the spacing to the Data table's f, k, Captured/read L and Spacing columns; the bracket columns are yours to fill. **Export CSV** saves every column, including x = (2k − 1)/4f in milliseconds. The **Reading seed** (press **New** for another) fixes the reading scatter.
- **Blind** hides the computed response, the true resonance positions, the nearest resonance, the spacing λ/2 and the expected c and ΔL under the fit, and leaves the level, the trace, the readings and the fit.

**What the demo models.**

- Dry air: $$c = 331.3\sqrt{1 + \frac{t_{\rm C}}{273.15}}\ \text{m/s},$$ the ideal gas result $$\sqrt{\gamma RT/M}$$ with $$\gamma = 1.400$$ and $$M = 28.96$$ g/mol, which gives 331.3 m/s at 0 °C and 343.2 m/s at 20 °C. Humidity raises c slightly and is left out.
- One dimensional plane waves in a rigid tube. The water surface is rigid, and the open end reflects as if the tube were $$\Delta L = 0.6133a$$ longer (unflanged end, Levine and Schwinger 1948, valid for $$ka \ll 1$$), so the resonances are at $$L_k + \Delta L = (2k - 1)\frac{\lambda}{4},$$ successive ones $$\lambda/2$$ apart. For the 3.2 cm tube $$\Delta L = 0.98$$ cm.
- The level is the pressure amplitude at the water, with the source fixing the pressure at the effective open end: $$\frac{1}{\left|\cos\!\left(\tilde k\,(L + \Delta L)\right)\right|},\qquad \tilde k = \frac{2\pi f}{c}\left(1 - \frac{i}{2Q}\right),$$ with one quality factor Q for every resonance, a stand in for wall and radiation losses (real tubes have Q of tens). Its peaks sit about $$(L + \Delta L)/4Q^2$$ above the resonance positions, at most 0.25 mm at Q = 30 in a 1 m tube.
- The readings are simulated. Capture stores the water position you chose, never the true resonance, plus a small error that stands for reading the meniscus: Gaussian like scatter with $$\sigma = 1.5\ \text{mm}$$, fixed by the seed, so a class sharing a seed gets the same numbers for the same positions.

</details>

## Goal

Measure the speed of sound by finding the lengths at which an air column resonates. Use the same data to estimate the open end correction.

## Background

Water closes the bottom of the tube. At the water surface, air displacement is nearly zero. At the open top, pressure variation is nearly zero. The shortest resonating column is about a quarter wavelength long. Each next resonance adds half a wavelength.

The pressure node sits slightly beyond the open end, so

$$L_k+\Delta L=\frac{(2k-1)\lambda}{4},\qquad \lambda=\frac{c}{f}.$$

Here $$k = 1$$ is the first resonance, and $$\Delta L$$ is the end correction. Neighboring resonances therefore give

$$c=2f(L_{k+1}-L_k).$$

We can also fit all the measurements at once:

$$L_k=c\left(\frac{2k-1}{4f}\right)-\Delta L.$$

The graph's slope is $$c$$ and its intercept is $$-\Delta L$$.

## Before the lab

1. Why are successive resonances half a wavelength apart rather than a quarter wavelength apart?
2. Which is a displacement node: the water surface or the open end?
3. Why does using the spacing remove the need to know the end correction first?

## Safety

With real equipment, secure the glass tube and adjust the water slowly. Keep water away from electrical equipment. Use a comfortable sound level; loud sound is not needed to locate a resonance.

## Procedure

**Find resonances.** Record air temperature, tube inner diameter and the source frequency. Start with a short air column and lower the water slowly.

1. Find the first loud maximum. Approach it from each direction and record a short interval that brackets the loudest position.
2. Record the midpoint as your chosen length. Continue downward and find the next resonances.
3. Number them from the top. If you skip one, keep its order number in mind rather than calling the next peak the second.
4. Repeat the placements, typing the mode number $$k$$ for each repeated reading, then use a second source frequency without changing temperature or tube diameter.
5. Repeat two of the resonances at a second temperature, and compare how the peak width changes when the damping is changed.

**Using the virtual apparatus.** Choose **Resonance tube, find c**, set 20 °C, diameter 3.2 cm and 512 Hz, record the **Reading seed** and select **Blind**. Clear the readings. Move **Water surface below the top** to each maximum and press **Capture reading**. Correct the editable $$k$$ column if needed. Send the 512 Hz readings to the worksheet before clearing, then repeat at 640 Hz using **Source frequency f** and send those, so each frequency gets its own copy of the Data table. The captured length includes a small simulated meniscus reading error. Use the swept level trace as a visual guide if sound is unavailable.

## Data

| $$f$$ (Hz) | Resonance $$k$$ | Lower bracket $$L$$ (cm) | Upper bracket $$L$$ (cm) | Captured/read $$L$$ (cm) | Spacing (cm) |
|---|---|---|---|---|---|
| | 1 | | | | |
| | 2 | | | | |
| | 3 | | | | |
| | | | | | |

Record temperature, tube diameter and seed above the table. Use a separate copy when temperature changes.

## Analysis

1. Calculate $$c$$ from each neighboring spacing. If you skipped an order, divide by the number of order steps between the two readings.
2. Convert lengths to meters. Plot $$L$$ against $$x = (2k - 1)/(4f)$$, with $$x$$ in seconds. Fit a line and find $$c$$ and $$\Delta L$$. The CSV gives $$x$$ in milliseconds, so convert that column before interpreting the slope.
3. Compare $$\Delta L$$ with $$0.6133a$$, where $$a$$ is the tube's inner radius.
4. Compare your speed with the dry air prediction after finishing the measurement:

   $$c=331.3\sqrt{1+\frac{t_{\rm C}}{273.15}}\ \mathrm{m/s}.$$

5. For a temperature comparison, explain whether the positions and spacing moved in the expected direction.

## Uncertainty

Use your position brackets, repeated placements and the scatter of the fit to estimate uncertainty. Include the source frequency and temperature uncertainties if available. A common error in the ruler's zero cancels from spacing, but changes the fitted end correction. This is one reason the end correction is often less precise than the speed. Discuss whether broad resonance peaks made the center hard to locate.

## Questions

1. Why does the tube resonate only at certain lengths?
2. What happens to the first resonance length when the air gets warmer?
3. Why can a good slope still give a poor end correction?
4. How would mislabeling a skipped resonance affect your result?

## What to hand in

Prelab answers, the data table and CSV, spacing calculations, the fitted graph and residuals, $$c$$ and $$\Delta L$$ with uncertainty, the temperature comparison if taken, and answers to the questions. Identify simulated data and give the seed.
