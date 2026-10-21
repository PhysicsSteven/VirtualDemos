# Speed of Light with a Rotating Mirror
Student laboratory · modern physics

[Open the virtual optical bench](https://physicssteven.github.io/VirtualDemos/demos/speed-of-light.html)

## Goal

Measure the speed of light by finding how far an image moves while a mirror rotates during the light's trip across the bench.

## Background

Light travels from the rotating mirror to a fixed mirror a distance D away and back. The trip takes

$$\Delta t=\frac{2D}{c}.$$

If the rotating mirror turns at f revolutions per second, its angular speed is ω = 2πf. It turns through Δθ = ωΔt while the light is away. Reflection doubles this small angle, so the returning beam shifts.

The imaging lens turns this into a displacement at the microscope:

$$\Delta s=\frac{4AD^2\omega}{c(D+B)}.$$

Here B is the distance from lens L2 to the rotating mirror, and A is the source to L2 distance. Focus requires

$$\frac{1}{f_2}=\frac{1}{A}+\frac{1}{D+B},\qquad f_2=252\ \mathrm{mm}.$$

We will plot image position against signed rotation frequency. The slope k gives

$$c=\frac{8\pi AD^2}{(D+B)|k|}.$$

## Before the lab

1. Why are there two factors of two in the displacement calculation?
2. Predict what happens to the image shift when the rotation speed doubles.
3. Why might clockwise and counterclockwise readings be better than measuring from rest alone?

## Safety

For the real apparatus, keep the laser beam away from eyes and reflective objects. Follow the department's alignment procedure. Keep hands and loose items clear of the motor and follow its operating limits.

## Procedure

**Set up and focus.** Use the apparatus manual's alignment sequence. Measure D and B. Measure A, or calculate it from the focus condition if that is your assigned method. Record which method you used. With the mirror at rest, center the microscope crosshair on the image and read the micrometer.

**Take readings.**
1. Run clockwise at about 400, 600, 800 and 1000 rev/s. At each speed, center the crosshair and record the actual speed meter and micrometer readings.
2. Repeat counterclockwise. Treat clockwise speeds as positive and counterclockwise speeds as negative in your graph.
3. Repeat the largest speed reading in each direction after moving the crosshair away and finding the center again.
4. Return to rest and check whether the original image position has changed.
5. If time allows, repeat four readings with a longer optical path. Recheck the focus and dimensions before calculating c.

**Using the virtual apparatus.** Start with **The bench at rest**, set D = 12.00 m and B = 0.500 m, record the **Bench seed**, select **Blind** and click **Clear**. Enter D, B and your calculated A in the analysis fields. Use the micrometer buttons to center the crosshair, then **Capture reading**. Select **CW** or **CCW** for each direction and use **Export CSV** at the end. Leave **Show the true image center** off. The **Slow motion** view helps explain the beam path; take measurements in **Normal** view.

## Data

| Trial | Direction | Signed f (rev/s) | Micrometer s (mm) | Reading uncertainty (mm) |
|---|---|---|---|---|
| 1 | rest | | | |
| 2 | CW | | | |
| 3 | CCW | | | |
| | | | | |

Add rows for every speed and repeat. Record A, B, D and their uncertainties above the table. Use a separate copy for a different geometry.

## Analysis

1. Convert the micrometer readings to meters. Plot s against signed f and fit a straight line with an intercept. Calculate c from its slope.
2. Compare the intercept with your reading at rest. Plot the residuals and look for a difference between the two directions.
3. Use one CW/CCW pair as a separate check:

$$c=\frac{8\pi AD^2(f_{\rm CW}+f_{\rm CCW})}{(D+B)|s_{\rm CW}-s_{\rm CCW}|}.$$

The two frequencies in this formula are positive magnitudes.

4. Compare your results with the accepted value and with their uncertainties. If you changed D, compare the observed shift with the full geometric prediction.

## Uncertainty

Estimate how precisely you can center the crosshair, and include variation in the speed reading. Use the slope uncertainty from the fit and the uncertainties in the bench dimensions. If you calculated A from D and B, those quantities are related: do not count their errors as three independent measurements. Explain which measurement contributes most to your result.

## Questions

1. What value of c would you obtain if you forgot that reflection doubles the mirror angle?
2. Why does a fixed micrometer zero offset cancel from a CW/CCW pair?
3. Why does increasing D not simply increase the shift as D squared?
4. What would a changing rest reading tell you about the experiment?

## What to hand in

Prelab answers, a labeled bench sketch, dimensions and data, CSV if available, the graph and fit, the pair calculation, c with uncertainty and percent error, and answers to the questions. Identify simulated data and give the seed.
