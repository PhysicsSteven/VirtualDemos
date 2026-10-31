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
4. Why should the power at a matched end not depend on the length of the string?
5. Find $$r$$ and the share of the energy sent back for a free end, the too soft absorber ($$b = Z/3$$), the matched one, the too stiff one ($$b = 3Z$$) and a fixed end.

## Safety

On a real string vibrator, keep fingers away from the driver while it runs, secure the pulley clamp, and keep feet clear of hanging masses. Turn the amplitude down before changing the frequency range.

## Procedure

**Part 1: amplitude.** String B, 1.20 m long, with 200 g hanging and a matched absorber, at 20 Hz. Hide the predictions. Measure the power at seven amplitudes from 0.50 to 5.00 mm.

**Part 2: frequency.** Same string, mass and length, at $$A = 1.00$$ mm. Measure the power at six frequencies from 10 to 60 Hz.

**Part 3: a mismatched end.** At 20 Hz and 1.00 mm, measure the power with the absorber too soft at five lengths from 1.20 to 1.40 m. Repeat the same lengths with the matched absorber. Keep both scans in one copy of the table, and type the length and the absorber in the Observation column of each row (the export does not include them).

**Part 4: tension.** At 20 Hz and 1.00 mm with the matched absorber, measure the power with at least five hanging masses from 50 g to 800 g.

**Part 5: unknown string.** An unknown string, 1.20 m, 200 g, matched, at 20 Hz: measure the power at six amplitudes from 0.50 to 3.00 mm. Keep the same unknown string for the whole scan.

**Part 6: one pulse.** Use the One pulse: free and fixed ends setup (String B, 1.60 m, 200 g, a 100 Hz blade swing of 3.00 mm). Send one pulse with each end in turn: free, too soft, matched, too stiff and fixed. Watch the pulse come back from the far end: is it upright, upside down, or does nothing come back, and how tall is it compared with the pulse that went out? Record what you see in the One pulse table.

**Using the virtual apparatus.** The meter reads only while the driver is running. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.

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

**One pulse.** Work out the second, third and last columns from the Background.

| End | $$b/Z$$ | Predicted $$r$$ | What comes back | Height back ÷ height sent | Share of the energy sent back |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. Graph $$P$$ against $$A^2$$ for Part 1. Is it a straight line through the origin? From the slope and $$\omega$$, find $$\sqrt{T\mu}$$ and then $$\mu$$ for String B. Compare with 1.20 g/m.
2. Graph $$P$$ against $$f^2$$ for Part 2. Find $$\mu$$ again from the slope.
3. For Part 3, compare the powers at each length with the soft and the matched absorber. Explain why the soft end's power depends on $$L$$ while the matched end's does not.
4. For Part 4, graph $$P$$ against $$\sqrt{T}$$. Is the power proportional to $$\sqrt{T}$$?
5. From Part 5, find the unknown string's $$\mu$$ from the slope of $$P$$ against $$A^2$$.
6. For Part 6, compare what came back from each end with the predicted $$r$$. Which end gives back all the energy upside down, which all of it upright, and which none?

## Uncertainty

The meter in the simulation is exact and the settings are exact, so the points lie on the predicted lines. Any departure from a straight line in your graphs is a real physical effect or a mistake in the table, not noise. On a real apparatus include the measurement of the driver's amplitude (hard to read at the 1 mm level), damping in the string itself, reflections at an imperfect absorber, the pulley's friction and the calibration of a real power or velocity sensor.

## Questions

1. Why does the power grow with the square of the amplitude?
2. Two strings have the same tension, and one has four times the linear density. At the same $$A$$ and $$f$$, which carries more power, and by how much?
3. Why does the absorber's matched value $$b = \sqrt{T\mu}$$ depend on both the tension and the density?
4. Where does the wave's energy go at the matched absorber? At a perfectly fixed end?
5. The pulse sent at a free end comes back upright, and the end itself swings twice as far as the pulse is tall. Why twice?

## What to hand in

Prelab answers, a Data table copy for each part, graphs with fits, your values of $$\mu$$ for String B and the unknown string, the comparison of mismatched and matched ends, the One pulse table, and answers to the questions. Identify simulated data.
