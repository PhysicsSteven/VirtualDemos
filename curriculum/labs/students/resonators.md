# Resonance Tube: Speed of Sound
Student laboratory · Acoustics

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/resonators.html)

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
5. If time allows, repeat selected resonances at a different temperature or compare how the peak width changes with damping.

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
