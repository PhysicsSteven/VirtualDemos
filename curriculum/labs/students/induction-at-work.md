# Induction at Work
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §13.7 (and §13.1, §13.2). Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/induction-at-work.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Shake flashlight; Flashlight, light on; Graphics tablet; Tablet, pen held still; Card reader; Card, uneven swipe.

**Using the demo.** Three devices that work by induction. The shake flashlight slides a magnet back and forth through a coil; shakes per second and the stroke are set on the picture, and the Shake flashlight section starts and stops the shaking, empties the capacitor, chooses a 0.10 F or 0.47 F capacitor and switches the light on. Readouts give the EMF now and the largest in the last second, the charging current, the capacitor voltage, the light, and where the energy went: from your hand, into the capacitor, heat in the coil, lost in the diodes and given to the light. The graphics tablet follows a pen (drag it, or Draw a circle) from the EMFs in a grid of wires. The card reader swipes a magnetic stripe past a head and decodes the number on it. Blind hides the EMF plots, the capacitor voltage, the tablet's estimate of the pen and the decoded number.

**What the demo models.** Flashlight (chosen values): an NdFeB magnet ($$B_r = 1.3$$ T, 10 mm across, 20 mm long) treated as a point dipole, moving as $$z = A\sin 2\pi ft$$ through a 1000 turn coil of radius 12 mm and length 10 mm wound with 0.20 mm copper wire (40.3 Ω). A bridge rectifier (two diodes conducting, 0.30 V each) charges the capacitor; the light is a 2.6 V LED with 20 Ω in series. The EMF is $$-d\Phi/dt = -(d\Phi/dz)v$$. Tablet: a small pen magnet 5 mm above long wires 5 mm apart. Card: track 2 of a magnetic stripe, 75 bits per inch, F2F recording. Simulated data.

</details>

## Goal

Use Faraday's law to explain how a shake flashlight charges, measure how its EMF depends on how fast it is shaken, follow where the energy goes, and see how a graphics tablet and a card reader use induction.

## Background

A magnet moving through a coil of $$N$$ turns changes the flux through it, and induces the EMF

$$\varepsilon = -\frac{d\Phi}{dt} = -\frac{d\Phi}{dz}\,v.$$

The flux changes fastest as the magnet enters and leaves the coil, so the EMF comes in pulses that change sign, and their size is proportional to the magnet's speed $$v$$. Shaken as $$z = A\sin 2\pi ft$$, the magnet's top speed is $$2\pi fA$$. The pulses are rectified to charge a capacitor $$C$$ to a voltage $$V$$, storing $$\tfrac12 CV^2$$. Lenz's law says the induced current pushes back on the magnet, so your hand does work; that work becomes the capacitor's energy, heat in the coil's resistance, and losses in the diodes. Once the capacitor reaches the peak EMF less the diode drops, no more current flows.

A graphics tablet uses the same law: the moving pen magnet changes the flux through nearby wires, and comparing the EMFs locates it. A card reader's head sees an EMF pulse wherever the stripe's magnetization flips.

## Before the lab

1. The magnet is shaken 3 times a second with a stroke of 3.0 cm from the centre to each end. What is its top speed?
2. If the EMF peaks at 2.8 V at that rate, about what peak would you expect at 6 shakes per second? With a 1.5 cm stroke at 3 shakes per second?
3. How much energy does a 0.10 F capacitor store at 2.0 V? At 3.0 V?
4. Why does a graphics tablet of this kind lose the pen when it is held still?

## Safety

Strong neodymium magnets snap together hard enough to pinch skin and shatter; keep them apart and away from cards, phones and pacemakers.

## Procedure

**Part 1: the EMF and the shaking.** With a 3.0 cm stroke and the 0.10 F capacitor, record the largest EMF after a few seconds of shaking at 1, 2, 3, 4, 5 and 6 shakes per second. Then, at 3 shakes per second, record it for strokes of 1.0, 2.0, 3.0, 4.0 and 5.0 cm.

**Part 2: charging the capacitor.** Empty the 0.10 F capacitor and shake at 3 shakes per second with a 3.0 cm stroke. Record the readings every 10 s for 60 s (fast forward helps). Repeat with the 0.47 F capacitor.

**Part 3: the light.** Start with the 0.10 F capacitor at 3.0 V, the light on and no shaking (the Flashlight, light on setup). Record the readings every 2 s for 12 s. Then, with the light still on, shake at 3 per second for 30 s and record, and then at 6 per second for 30 s and record.

**Part 4: tablet and card reader.** Draw a circle with the pen, then hold it still, and describe what the tablet does each time. Swipe the card at 0.2, 0.5 and 1.5 m/s and with an uneven swipe; describe the pulses and whether the number is read. (These are not recorded in the table.)

**Using the virtual apparatus.** The time and the energies count from when the capacitor was last emptied. The largest EMF is the largest in the last second, so it is left blank for the first second after emptying. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.

## Data

| Trial | Shakes per second | Stroke (cm) | Capacitor (F) | Light | Time (s) | Largest EMF (V) | Capacitor voltage (V) | From your hand (J) | Into the capacitor (J) | Heat in the coil (J) | Lost in the diodes (J) | To the light (J) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | | |
| | | | | | | | | | | | | |
| | | | | | | | | | | | | |
| | | | | | | | | | | | | |
| | | | | | | | | | | | | |
| | | | | | | | | | | | | |

## Analysis

1. For Part 1, graph the largest EMF against the shakes per second, and against the stroke. Is it proportional to the top speed $$2\pi fA$$? Why might it not be exactly, for a short stroke?
2. For Part 2, graph the capacitor voltage against time for each capacitor. What voltage does it approach, and why? Check the energy balance: does the energy from your hand equal the sum of the rest?
3. For Part 2, what fraction of the energy from your hand ends up in the capacitor? Where does the rest go?
4. For Part 3, graph the capacitor voltage against time while the light runs alone. What voltage does it approach, and how long does the light current take to fall to a tenth of its starting value? Compare the energy given to the light with the drop in $$\tfrac12 CV^2$$. Explain from Part 2 why shaking at 3 per second cannot keep the light on, while 6 per second can.
5. For Part 4, explain each observation from Faraday's law: why the still pen vanishes, why a faster swipe gives taller pulses, and how the number can still be read from an uneven swipe.

## Uncertainty

The model is exact and has no noise; the largest EMF depends a little on when in the cycle it is read, so read it after a few seconds of steady shaking. The magnet is treated as a point dipole, which overstates the flux when it is inside the coil; the diodes are given a fixed 0.30 V drop, and the coil's inductance is left out. A real flashlight also loses energy to friction and to the magnet bouncing at the ends.

## Questions

1. Why does a shake flashlight need a capacitor (or battery) at all?
2. Why is it harder to shake the flashlight while it is charging than when the coil is disconnected?
3. A card swiped very slowly sometimes fails to read. Why?

## What to hand in

Prelab answers, a Data table copy for each part, the graphs, your energy balance, your descriptions for Part 4, and answers to the questions. Identify simulated data.
