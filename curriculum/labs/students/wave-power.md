# Power Carried by a Wave
Student laboratory · Acoustics

Textbook: OpenStax *University Physics*, Vol. 1, §16.4. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/wave-power.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Power against amplitude; Power against frequency; Power against tension; Mismatched absorber; Unknown string; One pulse: free and fixed ends.

**Using the demo.** The string runs from a mechanical wave driver to an absorber (a dashpot) and over a pulley to a hanger of slotted masses. The function generator sets the frequency and the driver's amplitude, and stays in view while the string vibrates. The string, the absorber and the length are on the Set up card; masses are added from the tray. The power meter reads the average power the absorber takes. Blind hides $$\mu$$, $$v$$ and the predicted power; the unknown string always hides its $$\mu$$.

**What the demo models.** The linear wave equation with no losses along the string, so the power is the same everywhere along it. The driver moves its end as $$A\cos 2\pi f t$$. The absorber pushes back with a force $$b$$ times its velocity. When $$b$$ equals the string's impedance $$Z = \sqrt{T\mu}$$ (Matched), no wave comes back, as if the string went on for ever; Too soft is $$b = Z/3$$ and Too stiff $$b = 3Z$$. For one pulse only, the end can also be Free (no absorber: a ring that slides on a smooth rod, $$b = 0$$) or Fixed (clamped, $$b \to \infty$$); Send one pulse raises the blade once and holds it, so the held blade is a fixed end too. $$T = mg$$ with $$g = 9.81\ \mathrm{m/s^2}$$, and $$m$$ includes the 50 g hanger. The meter is exact: simulated data with no noise.

</details>

## Goal

Measure how the power carried by a wave on a string depends on its amplitude, frequency and tension, and use the result to find the linear density of an unknown string.

## Background

A sinusoidal wave on a string of linear density $$\mu$$ under tension $$T$$ travels at $$v = \sqrt{T/\mu}$$. Its average energy per unit length is $$\tfrac12\mu A^2\omega^2$$, half kinetic and half potential, and it carries this energy along at speed $$v$$, so the average power is

$$P = \frac12\,\mu A^2\omega^2 v = \frac12\,A^2\omega^2\sqrt{T\mu},\qquad \omega = 2\pi f.$$

The power grows as $$A^2$$, as $$f^2$$ and as $$\sqrt{T}$$. A string that ends at an absorber matched to its impedance $$Z = \sqrt{T\mu}$$ takes all of this power, with nothing reflected. A mismatched end sends part of each wave back; the returning wave interferes with the outgoing one, and the power delivered then depends on the length of the string.

**One pulse at the end.** A pulse that reaches an end with a damping constant $$b$$ comes back with its height multiplied by

$$r = \frac{Z - b}{Z + b},$$

upright when $$r > 0$$ and upside down when $$r < 0$$, and with the share $$r^2$$ of its energy. A free end ($$b = 0$$) gives $$r = +1$$; a fixed end ($$b \to \infty$$) gives $$r = -1$$; a matched end gives $$r = 0$$.

## Before the lab

1. String B has $$\mu = 1.20$$ g/m and hangs 200 g (hanger included). Find $$T$$, $$v$$ and the power it carries at 20 Hz with $$A = 1.00$$ mm.
2. By what factor does the power change if $$A$$ is doubled? If $$f$$ is doubled? If the hanging mass is quadrupled?
3. Why does a graph of $$P$$ against $$A^2$$ give a straight line through the origin? What is its slope?
4. Why should the power at a matched end not depend on the length of the string? Now swap in an absorber that is too soft ($$b = Z/3$$), with the same driver amplitude and frequency. Will it take less power than the matched one at every length, more at every length, or more at some lengths and less at others?

## Safety

On a real string vibrator, keep fingers away from the driver while it runs, secure the pulley clamp, and keep feet clear of hanging masses. Turn the amplitude down before changing the frequency range.

## Procedure

**Part 1: amplitude.** Press the **Power against amplitude** setup (String B, 1.20 m long, 200 g hanging, matched absorber, 20 Hz). Tick **Blind: hide μ and the predictions**, then press **Start the vibrator**. Set four amplitudes, 1.00, 2.00, 3.00 and 5.00 mm, with the **Vibrator amplitude A** slider or the Amplitude knob (0.05 mm a click), and press **Record reading** at each.

**Part 2: frequency.** Press the **Power against frequency** setup (same string, mass and length, $$A = 1.00$$ mm, opens at 10 Hz). Record the power at 10, 20, 40 and 60 Hz, set with the **Driver frequency f** slider or the Coarse knob (1 Hz a click).

**Part 3: a mismatched end.** Press the **Mismatched absorber** setup (20 Hz, 1.00 mm, absorber **Too soft**, 1.20 m). Record the power at the lengths 1.20, 1.30 and 1.40 m, set with **Length L, vibrator to absorber** or the L +1 cm button on the Set up card (it hides while the vibrator runs, so stop the vibrator, change L, and start it again). Then press **Matched** on the Set up card and record the same lengths. Keep both scans in one copy of the table, and type the length and the absorber in the Observation column of each row (the export does not include them).

**Part 4: tension.** Press the **Power against tension** setup (20 Hz, 1.00 mm, matched, only the 50 g hanger). Record the power with at least five hanging masses from 50 g to 800 g, for example 50, 100, 200, 400 and 800 g in all (the hanger counts): click slotted masses in the tray to add them. The $$T$$ column shows the tension.

**Part 5: unknown string.** Press the **Unknown string** setup (1.20 m, 200 g, matched, 20 Hz) and record the power at 0.50, 1.00, 2.00 and 3.00 mm. Keep the same unknown string for the whole scan: do not press **New unknown string**.

**Using the virtual apparatus.** The power meter reads only while the vibrator is running (**Start the vibrator**). Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.

## Data

| Trial | $$f$$ (Hz) | $$A$$ (mm) | $$T$$ (N) | $$P$$ (mW) | $$A^2$$ (mm²) | $$f^2$$ (Hz²) | Observation |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Record the string, the absorber and the length for each copy of the table. For Part 4, type $$\sqrt{T}$$ (in $$\mathrm{N^{1/2}}$$) for each row in the Observation column, so you can graph against it.

## Analysis

1. Graph $$P$$ (vertical) against $$A^2$$ (horizontal) for Part 1. Is it a straight line through the origin? From the slope and $$\omega$$, find $$\sqrt{T\mu}$$ and then $$\mu$$ for String B. Compare with 1.20 g/m.
2. Graph $$P$$ (vertical) against $$f^2$$ (horizontal) for Part 2. Find $$\mu$$ again from the slope.
3. For Part 3, compare the powers at each length with the soft and the matched absorber.
4. For Part 4, graph $$P$$ (vertical) against $$\sqrt{T}$$ (horizontal, from the Observation column). Is the power proportional to $$\sqrt{T}$$?
5. From Part 5, find the unknown string's $$\mu$$ from the slope of $$P$$ against $$A^2$$.

## Questions

1. Why does the absorber's matched value $$b = \sqrt{T\mu}$$ depend on both the tension and the density?
2. Did the soft absorber in Part 3 do what you expected in Before the lab 4? Use your powers at 1.20, 1.30 and 1.40 m to say, and explain why the soft end's power depends on $$L$$ while the matched end's does not. If at some length the soft end takes more than the matched one, where does the extra power come from, given that the driver's amplitude is the same?

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The meter in the simulation is exact and the settings are exact, so the points lie on the predicted lines. Any departure from a straight line in your graphs is a real physical effect or a mistake in the table, not noise. On a real apparatus include the measurement of the driver's amplitude (hard to read at the 1 mm level), damping in the string itself, reflections at an imperfect absorber, the pulley's friction and the calibration of a real power or velocity sensor.

Give the slope of each fit with its standard error, and give each value of $$\mu$$ with its uncertainty.

## What to hand in

Prelab answers, a Data table copy for each part, graphs with fits, your values of $$\mu$$ for String B and the unknown string, the comparison of mismatched and matched ends, and answers to the questions (and to Uncertainty, if assigned). Identify simulated data.
