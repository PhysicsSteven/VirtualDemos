# The Hall Effect
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§11.6–11.7. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/magnetic-force.html?ws=magnetic-force-hall)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Circular motion; Electron vs proton; E × B drift; Velocity selector; Mass spectrometer; Cyclotron; Magnetic bottle; Hall effect. This worksheet uses Hall effect; orbits and the bottle have their own worksheet, Orbits and the Magnetic Bottle.

**Using the demo.**

- The Hall effect setup starts the current at $$t = 0$$ and shows the edge charge building up; its voltmeter reads the voltage now, so wait until it stops changing.
- Record reading stores the settings as displayed and the voltage you read. Cells can be edited; rows stay through setup changes until Clear.
- Blind renames the samples and hides the carriers, $$n$$, $$R_H$$, $$v_d$$, the build up time and the path angle. The settings and the Hall voltmeter stay.

</details>

## Goal

Use Hall voltage to identify carrier sign and estimate carrier density.

## Background

A magnetic field exerts a force perpendicular to particle velocity (§11.3), so the moving charges in a conductor are pushed toward one edge:

$$\mathbf F=q\mathbf v\times\mathbf B.$$

In a Hall strip (§11.6), charge builds up until the electric and magnetic forces on drifting carriers balance. For one carrier type,

$$\lvert V_H\rvert=\frac{I\lvert B\rvert}{n\lvert q\rvert t},$$

where $$t$$ is thickness along $$B$$. The voltage sign depends on carrier sign, field direction and which edge is connected to the positive meter lead.

## Before the lab

1. Predict what reversing $$B$$ does to the Hall voltage while conventional current keeps the same direction.
2. A copper strip and a doped germanium strip, both 1 mm thick, carry the same current in the same field. Copper has about 10⁸ times as many free electrons per cubic meter as the germanium. Is copper's Hall voltage much larger than germanium's, about the same or much smaller? Give the reason for your choice.

## Safety

Follow the real apparatus limits for magnet current and Hall sample current. Switch off before rewiring, and keep magnetic materials away from the pole gap.

## Procedure

**Hall strip.** Choose the setup Hall effect, with Blind on, Sample A under Strip and Thickness t (along B) at 1 mm; keep them fixed. After each change wait until the Hall voltage now readout stops changing, then press Record reading. At Current I = 20 mA and ⊗ Into page, set the Field at the strip slider to 0.10, 0.20, 0.30, 0.40 and 0.50 T. Press ⊙ Out and repeat 0.20 and 0.40 T. Then, at 0.30 T into the page, set Current I to 10, 30 and 50 mA. Compare samples: at 20 mA and 0.30 T into the page, record Sample B and Sample C, then one of them at a thickness of 2 mm. Draw the current, field direction, top edge and bottom edge.

**Using the virtual apparatus.** Choose **Hall effect** and use **Current I**, **Field at the strip** (the field magnitude), **Thickness t (along B)** and **⊗ Into page** / **⊙ Out**. Blind gives anonymous samples; leave it on until you infer the carrier sign and density. **Hall voltage now, V<sub>top</sub> − V<sub>bottom</sub>** is the strip's voltmeter. **Record reading** stores the readouts shown and **Export to worksheet** sends the Hall rows to the Data table.

## Data

| Run/sample | $$v$$ (m/s) or $$I$$ (A) | $$B$$ direction and magnitude (T) | $$r$$ (m) or thickness $$t$$ (m) | Turns | Elapsed time (s) | $$T$$ (s) or $$V_H$$ (V) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Each Hall reading fills $$I$$, signed $$B_z$$ (out of the page positive), $$t$$ and $$V_H$$. Label the last column and state meter polarity.

## Analysis

1. Plot $$V_H$$ against signed $$B_z$$, taking out of the page as positive. Use the current direction and meter polarity to derive the slope's sign before identifying carriers.
2. Infer $$n$$ from the slope magnitude $$I/(n\lvert q\rvert t)$$, taking $$\lvert q\rvert = e$$. Check the current and thickness scalings and reveal the sample labels afterward.

## Uncertainty

Estimate the uncertainty in $$V_H$$ from the digits the Hall voltage now readout shows, and in $$B$$ and $$I$$ from the steps of their sliders. Read the voltage only after the build up has finished. Record that the data are simulated.

## Questions

1. Why can Hall voltage reveal carrier sign when an ordinary resistance measurement cannot?
2. Once the sample labels are revealed (Analysis 2), how does copper's Hall voltage at 20 mA and 0.30 T compare with germanium's, and does that bear out Before the lab 2? Use the balance of the electric and magnetic forces on the drifting carriers to explain the size of copper's Hall voltage.

## What to hand in

Prelab answers, Hall data and polarity sketch, the graph, inferred $$n$$ with uncertainty, scaling checks and answers to the questions.
