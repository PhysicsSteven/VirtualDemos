# Charge to Mass Ratio of the Electron
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 2, §§11.3 and 11.7. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/e-over-m.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** No field: a straight beam; A circle; More voltage, bigger circle; More current, smaller circle; Tilt the tube: a helix; Measure e/m (this one fills the table with five simulated readings of its own, marked with an asterisk, so don't use it for your own data).

**Using the demo.**

- The apparatus is the PASCO SE-9629 e/m tube between a pair of Helmholtz coils, with the supplies and meters in front. The accelerating voltage $$U$$ (labelled V on the supply) runs from 100 to 200 V in 1 V steps, and the coil current $$I$$ from 0 to 3.5 A through both coils in series. The voltmeter and ammeter jitter a little, about 0.2 V and 2 mA, as real meters do.
- The tube turns in its socket by up to 30° either way. At any angle but 0° part of the velocity lies along the field and the beam winds into a helix.
- The coils have $$N = 130$$ turns each. Their mean radius $$a$$ is half the average of the inner and outer diameters of the winding. These open at 30.6 and 32.6 cm, which give the manual's $$a = 158$$ mm; measuring them yourself is a check. The demo shows $$B/I$$ at the centre and $$B$$ from the ammeter.
- Drag the 3D view to turn it and scroll to zoom (on a phone, two fingers); Reset view puts the camera back.
- The view below the coils looks through the front coil onto the mirrored scale behind the bulb. Whole scale, Zoom left and Zoom right choose how much of it you see. The eye moves along a rail in front of the tube, and the beam and its reflection line up only where the eye is straight in front of the beam. The two pointers L and R read in 0.5 mm steps; their readings are the distances from the centre of the scale.
- **Capture reading** stores the meter readings and your two pointer readings, never the true radius, and you can edit a row afterwards. **Export to worksheet** sends the rows to the Data table below: they fill the voltage, current and both radius columns (the scale reads in cm and is converted to mm), and the other columns are yours. **Clear** starts a new series. The demo works out $$e/m$$ for each row and fits a line too.
- Under Instrument: the seed (2718 when the page opens) fixes the meter jitter and the flicker of the beam, so a class sharing a seed sees the same numbers; New picks another. Blind hides the accepted value and the true radius. Field computed from the coils is on when the page opens; untick it for a perfectly uniform field. The earth's field can be added along the coil axis, adding to $$B$$ or opposing it. Show the true beam edges is an instructor check.

**What the demo models.**

- Each electron leaves the gun with kinetic energy $$eU$$ and moves under $$\vec F = -e\,\vec v\times\vec B$$. In a uniform field the path is a circle, $$r = mv/(eB)$$, so $$e/m = 2U/(B^2r^2)$$. The value of $$e/m$$ and $$\mu_0$$ are CODATA 2018 values.
- With the coil field on, $$B$$ is computed everywhere from the exact field of two circular loops (complete elliptic integrals), and the path from a step by step integration. Away from the centre the field is a little weaker, so circles come out a little larger than the centre field predicts, and $$e/m$$ worked out from the centre field comes out low: by about 0.1% for small circles, up to about 1% for a 5 cm circle.
- The earth's field option adds $$2\times10^{-5}$$ T along the coil axis, about the horizontal part of the earth's field in the southern US.
- Idealized: each coil is one loop at its mean radius, with the spacing equal to the radius (the Helmholtz condition); electrons are treated without relativity, which changes $$r$$ by about 0.01% at 200 V; the gun is a point 5 cm below the centre of a bulb 6.5 cm in radius; the scale is 8.5 cm behind the beam and the eye 30 cm in front of it. In a real tube the electrons lose a little energy in the anode and in collisions with the helium, which is not simulated. The meter jitter and the flicker of the beam edges (up to about 1 mm) are simulated. The moving dots show the direction of travel, not the speed.

</details>

## Goal

Measure $$e/m$$, the charge to mass ratio of the electron that J. J. Thomson first measured in 1897, by bending a beam of electrons into a circle with a known magnetic field and measuring the radius.

## Background

The electron gun accelerates electrons through a voltage $$U$$, so each electron gains kinetic energy $$eU$$:

$$\tfrac{1}{2}mv^2 = eU \quad\Rightarrow\quad v^2 = \frac{2eU}{m}$$

A pair of Helmholtz coils makes a nearly uniform field $$B$$ at right angles to the beam. The magnetic force $$evB$$ is always at right angles to the velocity, so it bends the beam into a circle of radius $$r$$ without changing its speed (§11.3):

$$evB = \frac{mv^2}{r}$$

Eliminate $$v$$ between the two equations:

$$\frac{e}{m} = \frac{2U}{B^2 r^2}$$

The field at the centre of the coils is

$$B = \left(\frac{4}{5}\right)^{3/2} \frac{\mu_0 N I}{R}$$

where $$I$$ is the current through the coils, $$N$$ the number of turns on each coil and $$R$$ the coil radius. For the PASCO SE-9629 apparatus, $$N = 130$$ and $$R = 158\ \text{mm}$$, which gives $$B = 0.7398\ \text{mT}$$ per ampere. With a different apparatus, take $$N$$ and $$R$$ from its label or manual.

The tube holds a little helium. Electrons excite the helium atoms they hit, and the glow marks the path of the beam. A mirrored scale behind the tube reads the radius.

## Before the lab

1. Show that $$e/m = 2U/(B^2 r^2)$$ follows from the two equations above.
2. If you double $$U$$ and keep $$I$$ fixed, what happens to $$r$$? If you double $$I$$ and keep $$U$$ fixed?
3. Why can this experiment measure only the ratio $$e/m$$ and not $$e$$ and $$m$$ separately?

## Safety

None for the virtual apparatus. On the real apparatus the accelerating voltage is high enough to hurt you: make and change connections only with both supplies off, and touch the tube only by its plastic base.

## Procedure

Before you start, note the instrument seed and turn on Blind, so the accepted value and the true radius are hidden.

**Get a circle.** With no current in the coils and about 190 V on the gun, the beam goes straight out. Raise the coil current slowly and watch the beam curve upward and close into a circle.

**Read the radius.** Move your eye until the beam covers its own reflection on the left side of the scale: your eye is then straight in front of the beam and there is no parallax. Read where the beam crosses the scale. Do the same on the right side. The radius $$r$$ is the average of the two readings.

**Take data.** Read the circle at seven settings: 100 V at 1.0 A, 110 V at 1.2 A, 120 V at 1.4 A, 150 V at 1.5 A, 170 V at 1.6 A, 190 V at 1.8 A and 200 V at 2.0 A. At each one record $$U$$ and $$I$$ as the meters show them (not the values you aimed for) and both radius readings. Keep the tube square to the field: a helix gives a smaller radius. Send the readings to the worksheet before you clear them.

**On the real apparatus.** Follow the cabling diagram in the manual. Turn every voltage and current control fully down, set the voltage range to 0 to 200 V, switch both supplies on and let the filament warm up for about five minutes. If the beam does not bend when the current rises, the coils are fighting each other: reverse one coil. If it bends downward, swap the two leads at the coil supply. If it makes a spiral, turn the tube in its socket until it makes a flat circle. Adjust the voltage until the beam is sharp and bright, and keep the whole circle inside the bulb.

## Data

| Trial | $$U$$ (V) | $$I$$ (A) | $$r$$ left (mm) | $$r$$ right (mm) | $$r$$ (mm) | $$B$$ (mT) | $$e/m$$ (C/kg) | % error | $$B^2r^2$$ ($$10^{-9}$$ T²m²) | $$2U$$ (V) |
|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |

## Analysis

1. For each trial, find $$B$$ from $$I$$ and then $$e/m = 2U/(B^2 r^2)$$. Compare each with the accepted value, $$1.75882\times10^{11}$$ C/kg (CODATA 2018).
2. Make a graph with $$B^2 r^2$$ on the horizontal axis and $$2U$$ on the vertical axis. According to the equation, the points lie on a straight line through the origin with slope $$e/m$$. Fit a line and report the slope as your best value of $$e/m$$. Only then compare with the demo's own fit.
3. Which is better, the average of the trials or the slope of the graph? Why?

## Uncertainty

$$e/m$$ depends on $$r$$ squared, so a 1% error in $$r$$ becomes a 2% error in $$e/m$$. The same is true of $$B$$, and so of $$I$$ and $$R$$. Estimate how precisely you can read each side of the circle (the beam has a width, and the virtual pointers move in 0.5 mm steps), and use that to estimate the uncertainty in $$e/m$$ for one trial.

## Questions

1. The magnetic force acts on the electrons the whole time. Why doesn't their speed change?
2. If the tube is turned so the beam is not quite at right angles to the field, the beam makes a spiral. Why? Would measuring the spiral as if it were a circle make $$e/m$$ too high or too low?
3. Electrons lose a little energy in collisions with the helium before they reach the circle. Does that make your measured $$e/m$$ too high or too low?
4. The earth's magnetic field also acts on the beam. How could you check whether it affects your result?

## What to hand in

Your prelab answers, the data table, the graph with its fit, your value of $$e/m$$ with its uncertainty and percent error, and answers to the questions. If any of your data came from the virtual apparatus, say so and give the instrument seed.
