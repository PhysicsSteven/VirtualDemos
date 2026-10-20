# Franck–Hertz Experiment
Student laboratory · modern physics

[Open the virtual Franck–Hertz apparatus](https://physicssteven.github.io/VirtualDemos/demos/franck-hertz.html)

## Goal

Find the energy needed to excite a mercury atom by measuring the spacing between repeated peaks in the collector current.

## Background

Electrons accelerate through a vapor on their way to a collector. Most of the time they keep gaining energy. Once an electron has enough energy, it can excite an atom and lose a fixed amount of energy in the collision.

A small retarding voltage before the collector rejects electrons that arrive with too little energy. The current therefore falls when many electrons have just lost energy. As the accelerating voltage rises, the pattern repeats.

If neighboring peaks are separated by ΔU, the excitation energy is approximately

$$\Delta E=e\Delta U.$$

The first peak need not occur at ΔE/e. Contact potentials and the electrons' starting energies shift the whole pattern. We allow for an offset by fitting

$$U_n=a+n\Delta U.$$

The excited atom can release its energy as a photon with wavelength

$$\lambda=\frac{hc}{\Delta E}.$$

## Before the lab

1. Why is peak spacing more useful than the position of the first peak?
2. What role does the retarding voltage play?
3. If ΔU is measured in volts, how do you express ΔE in electron volts and in joules?

## Safety

The real apparatus has high voltage and a hot oven. Follow the department's warm-up and operating procedure. Do not touch the hot tube or change connections while powered. Do not open or attempt to repair a sealed mercury tube.

## Procedure

**Take a current curve.** Use the department's mercury-tube temperature and voltage settings. Let the oven stabilize, then sweep the accelerating voltage slowly while recording collector current. Keep temperature, contact potential and retarding voltage fixed during a sweep.

1. Find at least five consecutive clear maxima. Record each voltage and number the peaks in order.
2. Estimate a voltage interval within which you would place each maximum.
3. Acquire a second curve and repeat the measurements.
4. Change the contact potential if the apparatus allows it, and take a separate curve.
5. Compare the normal retarding voltage with zero retarding voltage.
6. Compare a cooler and a hotter vapor setting within the apparatus limits. Record how the current and peak visibility change.

**Using the virtual apparatus.** Start with **Mercury tube at 180 °C** and write down **Retarding voltage Ur** and **Contact potential Uc**. Press **New sweep** and let the curve finish. Select **Mark peaks**, keep **Snap to the nearest maximum** on, and click the maxima in order. Leave **Show lines at n·Eexc/e** off until analysis. Record the marked voltages by hand and save a screenshot; this demo has no CSV export. Use **Too cold: few collisions** and **Too hot: weak current** for the temperature comparison. If time allows, compare **Neon: glowing layers** too.

## Data

| Run and settings | Peak order n | Peak U (V) | Reading uncertainty (V) | Spacing to next peak (V) |
|---|---|---|---|---|
| | 1 | | | |
| | 2 | | | |
| | 3 | | | |
| | | | | |

Use at least five rows per mercury run. Keep changed settings in separate runs.

## Analysis

1. Calculate the neighboring peak spacings and their mean.
2. Plot peak voltage against peak order. Fit a line with an intercept. Use its slope to find ΔE and its uncertainty.
3. Repeat the fit without the first peak. Does the result change appreciably?
4. Calculate the photon wavelength and compare it with the mercury reference after recording your result.
5. Compare the slopes and intercepts of the different contact-potential runs. Then explain the changes caused by retarding voltage and temperature.

## Uncertainty

Use the peak-position intervals, variation between sweeps and the fit uncertainty to judge the precision of ΔU. Check how much the first peak changes the fitted slope. Adjacent spacings share a peak reading, so they are not all independent. The relative wavelength uncertainty is approximately the relative uncertainty in ΔU when h, c and e are treated as known.

## Questions

1. Why can an inelastic collision reduce the collected current even though the electron continues moving?
2. Why might the repeated peaks become much less clear when the retarding voltage is zero?
3. Why can both a very cold and a very hot mercury tube give poor results?
4. Does this experiment measure an excitation energy or an ionization energy? Explain.

## What to hand in

Prelab answers, current curves or screenshots, the peak table, the graph and fit, excitation energy and photon wavelength with uncertainty, the comparison runs, and answers to the questions. Identify any simulated data.
