# Measuring a Magnetic Field with a Current Balance
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§11.4–11.5 and 11.7. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/wire-force.html)

## Goal

Determine an unknown magnetic field from a balance reading. Test the dependence of magnetic force on current, wire length and angle, then connect that force to a current loop's torque.

## Background

A straight current-carrying wire in a uniform magnetic field experiences

$$\mathbf F_{\rm wire}=I\mathbf L\times\mathbf B,\qquad
|F_{\rm wire}|=|I|LB\sin\theta.$$

Here θ is the angle between the positive-current direction and the field. The magnet feels the opposite force. A balance supporting the magnet is zeroed at I = 0; its signed mass change gives the force inferred from the balance,

$$F_{\rm bal}=\Delta m\,g.$$

A negative reading means the magnet has become lighter. It does not mean the field magnitude is negative. With L and θ fixed, plot Fbal against signed current I. If its slope is k,

$$B=\frac{|k|}{L\sin\theta}.$$

Convert grams to kilograms and centimetres to metres. At θ = 0, the force vanishes, so this method cannot determine B. For a loop, the magnetic moment is NIAn̂ and torque magnitude is NIAB sin ψ, where ψ is the angle between the loop normal and B. This ψ is different from the straight-wire angle θ.

## Before the lab

1. What should happen to the balance reading when current is reversed?
2. Predict how the current-fit slope changes if the wire length doubles.
3. Why must the force on the magnet and the force on the wire be distinguished when interpreting the sign?

## Safety

On a real bench, zero the balance before energizing the wire and keep the wire from touching the magnet. Observe current limits and switch off before moving the conductor. Keep strong magnets away from sensitive devices and follow the laboratory's magnet precautions.

## Procedure

**Current scan.** Zero the balance with no current. Keep the field, angle and length fixed; use a wire perpendicular to B. Record the balance change for at least seven signed currents, including zero and both polarities. In the simulation use −3, −2, −1, 0, 1, 2 and 3 A, with length 4.0 cm. Fit signed balance force against signed current to infer B.

**Length and angle checks.** Repeat the current scan at 6.0 cm with the same magnet. Compare the slopes and inferred fields. Then fix I = 2.0 A and L = 4.0 cm and measure the balance change at 0°, 15°, 30°, 45°, 60°, 75° and 90°. Plot force against sin θ. Use the zero-angle point as a zero-force test, not as a field estimate.

**From force to torque.** Observe a current loop held at different orientations, or use the virtual loop setup. Sketch the opposite forces on two sides of the loop. Explain how zero net force can coexist with a turning effect. Release the loop and describe its equilibrium orientation. Use this as a short interpretation activity; the balance CSV does not measure loop torque.

**Using the virtual apparatus.** Choose **Current balance**, turn on **Mystery magnet: hide B** and **Blind: hide predictions and answers**, and set **Length of wire in the field L**. Change **Current I**, press **Capture reading**, and save with **Export CSV**. Export before **Clear** for each scan. Keep the same Mystery magnet throughout: switching it off and on chooses another field, and old rows are not separated by magnet. Choose **Wire at an angle to B** for the angle scan and set **Angle between the wire and B**. Preset changes can reset current and length, so check them again. For the final activity, choose **Loop: torque**, use **Release the loop** and **Hold the loop**, and record a sketch and observations separately. Mystery also hides the fitted B; Blind hides predictions for a known magnet.

## Data

| Scan | I (A) | L (cm) | θ (°) | Δm (g) | Fbal (N) | Observation |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Record the same magnet identifier for all scans and whether the balance was zeroed. Keep loop sketches separate from the balance data.

## Analysis

1. Fit Fbal against I at each length, including a free intercept. Calculate B and compare the two estimates. Interpret the slope sign using the drawn field and current directions.
2. Compare the measured slope ratio with the length ratio. Inspect residuals and discuss whether the zero-current reading supports the balance zero.
3. Fit Fbal against sin θ at fixed I and L. Infer B from the slope magnitude and compare with the current scans. Explain why near-zero angles make individual B estimates unreliable.
4. Use the loop force diagram to explain torque, equilibrium and the role of current direction. Keep wire angle and loop-normal angle distinct.

## Uncertainty

The virtual balance rounds to 0.01 g. Current, length and angle are prescribed settings, adjustable in steps of 0.1 A, 0.5 cm and 5°. Their step sizes describe available settings, not random scatter. On a real bench, include calibration, zero drift, field nonuniformity and uncertainty in the length actually inside the field. In B = |k|/(L sin θ), angle sensitivity grows as cot θ; use radians when propagating angle uncertainty. Near 90° the leading angle effect is second order. Repeat identical virtual states only to check consistency, not to create statistical precision.

## Questions

1. Why can reversing current make the magnet heavier instead of lighter?
2. Which force is represented by Δm g, and how is it related to the magnetic force on the wire?
3. Why can the field not be inferred from a parallel-wire measurement?
4. Does zero net magnetic force on a loop imply zero torque?

## What to hand in

Prelab answers, settings and CSV files, both current fits and the angle fit with residuals, field estimates with uncertainty, sign and length-scaling checks, the loop force sketch, and answers to the questions. Identify simulated data.
