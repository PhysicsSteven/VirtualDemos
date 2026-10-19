# Charge to Mass Ratio of the Electron
Student laboratory · modern physics

[Open the virtual e/m apparatus](https://physicssteven.github.io/VirtualDemos/demos/e-over-m.html)

## Goal

Measure e/m, the charge to mass ratio of the electron, the way J. J. Thomson first did in 1897: bend a beam of electrons into a circle with a known magnetic field and measure the radius.

## Background

The electron gun accelerates electrons through a voltage U, so each electron gains kinetic energy eU:

$$\tfrac{1}{2}mv^2 = eU \quad\Rightarrow\quad v^2 = \frac{2eU}{m}$$

A pair of Helmholtz coils makes a nearly uniform field B at right angles to the beam. The magnetic force evB is always at right angles to the velocity, so it bends the beam into a circle of radius r without changing its speed:

$$evB = \frac{mv^2}{r}$$

Eliminate v between the two equations:

$$\frac{e}{m} = \frac{2U}{B^2 r^2}$$

The field at the center of the coils is

$$B = \left(\frac{4}{5}\right)^{3/2} \frac{\mu_0 N I}{R}$$

where I is the current through the coils, N the number of turns on each coil and R the coil radius. For the department's apparatus (PASCO SE-9629), N = 130 and R = 158 mm, which gives B = 7.40 × 10⁻⁴ T per ampere. If you use a different apparatus, take N and R from its label or manual.

The tube holds a little helium. Electrons excite the helium atoms they hit, and the glow marks the path of the beam.

## Before the lab

1. Show that e/m = 2U/(B²r²) follows from the two equations above.
2. If you double U and keep I fixed, what happens to r? If you double I and keep U fixed?
3. Why can this experiment measure only the ratio e/m and not e and m separately?

## Safety

The accelerating voltage is high enough to hurt you. Make and change connections only with both supplies off. Touch the tube only by its plastic base.

## Procedure

**Setup (real apparatus).** Follow the cabling diagram in the apparatus manual. Turn every voltage and current knob fully counterclockwise, set the voltage range to 0 to 200 V, and switch both supplies on. Wait about five minutes for the filament to warm up.

**Get a circle.**
1. Set the accelerating voltage to about 190 V. A straight beam should appear.
2. Raise the coil current slowly. The beam should curve upward and close into a circle.
   - If it does not bend, the coils are fighting each other: reverse one coil.
   - If it bends downward, swap the two leads at the 3.5 A output.
   - If it makes a spiral, turn the tube in its socket until it makes a flat circle.
3. Adjust the voltage until the beam is sharp and bright.

**Read the radius.** The mirrored scale is behind the tube. Move your head until the beam covers its own reflection in the mirror; then your eye is straight in front of the beam and there is no parallax. Read where the beam crosses the scale on the left side. Move your head and do the same on the right side. The radius r is the average of the two readings.

**Take data.** Record U from the voltmeter, I from the ammeter and both radius readings. Then change the voltage or the current and repeat. Take at least five settings, spread out as far as the tube allows (the whole circle must stay inside the bulb). Settings from 100 V at 1.0 A to 120 V at 1.4 A work well.

**Using the virtual apparatus.** The virtual apparatus models the same coils and tube. Write down the **Instrument seed** and turn on **Blind**. Click **Clear** to empty the table. Set the voltage and current with the sliders or the knobs, but record the values the meters show. To read a side, drag **Your eye, left or right** until the beam and its reflection line up, then drag pointer L (or R) onto the beam; **Zoom left** and **Zoom right** help. Click **Capture reading** for each setting and **Export CSV** at the end. The virtual scale reads in cm and the voltage is labelled V; convert to the units of the table.

## Data

| Trial | U (V) | I (A) | r left (mm) | r right (mm) | r (mm) | B (mT) | e/m (C/kg) | % error |
|---|---|---|---|---|---|---|---|---|
| 1 | | | | | | | | |
| 2 | | | | | | | | |
| 3 | | | | | | | | |
| 4 | | | | | | | | |
| 5 | | | | | | | | |

## Analysis

1. For each trial, find B from I and then e/m = 2U/(B²r²). Compare each with the accepted value, 1.76 × 10¹¹ C/kg.
2. Make a graph with B²r² on the horizontal axis and 2U on the vertical axis. According to the equation, the points lie on a straight line through the origin with slope e/m. Fit a line and report the slope as your best value of e/m.
3. Which is better, the average of the trials or the slope of the graph? Why?

## Uncertainty

e/m depends on r squared, so a 1% error in r becomes a 2% error in e/m. The same is true of B, and so of I and R. Estimate how precisely you can read each side of the circle (the beam has a width), and use that to estimate the uncertainty in e/m for one trial.

## Questions

1. The magnetic force acts on the electrons the whole time. Why doesn't their speed change?
2. If the tube is turned so the beam is not quite at right angles to the field, the beam makes a spiral. Why? Would measuring the spiral as if it were a circle make e/m too high or too low?
3. Electrons lose a little energy in collisions with the helium before they reach the circle. Does that make your measured e/m too high or too low?
4. The earth's magnetic field also acts on the beam. How could you check whether it affects your result?

## What to hand in

Your prelab answers, the data table, the graph with its fit, your value of e/m with its uncertainty and percent error, and answers to the questions. If any of your data came from the virtual apparatus, say so and give the instrument seed.
