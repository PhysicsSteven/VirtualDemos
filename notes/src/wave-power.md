---
title: Energy and Power of a Wave
level: Acoustics module (OpenStax University Physics Vol 1, §16.4)
time: 25 to 40 minutes
---
## What students should come away with

- A wave carries energy along the string without carrying the string with it. The average power of a sinusoidal wave is P = ½ μ A² ω² v.
- Power goes as the square of the amplitude and the square of the frequency: double either and the power is four times as much.
- The string sets how fast the energy moves, v = √(T/μ). At the same A and f, more tension or a heavier string carries more power: P = ½ ω² A² √(Tμ).
- The energy per meter, ½ μ A² ω², is half kinetic and half potential, and P = (energy per meter) × v.
- An absorber matched to the string (b = √(Tμ)) takes every wave that reaches it, so the string acts as if it were endless. A mismatched end sends part of each wave back and the power depends on the length.

## Before class

Students need the traveling wave y = A sin(kx − ωt), ω = 2πf and v = √(T/μ) (OpenStax §16.3). The **Linear Density of a String** demo uses the same apparatus with a fixed end; this one replaces the fixed end with an absorber. **Blind** hides μ, v, λ, the predicted power and the energy per meter; the **Unknown string** hides μ for good (choosing another string shows it in the status line).

## Running it in class

1. **Power against amplitude.** String B, 200 g, 20 Hz. Start the vibrator and record the meter at A = 0.5, 1.0, 1.5, 2.0, 2.5 and 3.0 mm: 0.09578, 0.3831, 0.8620, 1.532, 2.394 and 3.448 mW. Plot P against A (a curve) and against A² (a line through the origin).
2. **Power against frequency.** Keep A = 1.00 mm and change f from 10 to 60 Hz. P against f² is a line through the origin. Point out that the wavelength changes too: count the waves on the string.
3. **Power against tension.** Add masses at 20 Hz and 1.00 mm: four times the load gives twice the power.
4. **Mismatched absorber.** Too soft: change L by a few centimeters and the meter swings between about a third and three times the matched power. Switch back to Matched and L stops mattering. This is why the lab needs a matched end.
5. **Unknown string.** Students get μ from the slope of P against A²: slope = ½ ω² √(Tμ).

## Questions

**Q1.** String B (μ = 1.20 g/m) carries 200 g, and the vibrator runs at 20.0 Hz with A = 1.00 mm. Find the tension, the wave speed and the power the wave carries. Use g = 9.81 m/s².

**Q2.** Starting from Q1, by what factor does the power change if (a) A is doubled, (b) f is doubled, (c) the hanging mass is made four times as large? Explain each from P = ½ μ A² ω² v.

**Q3.** At 20.0 Hz with 200 g on String B, a student records 0.09578, 0.3831, 0.8620, 1.532, 2.394 and 3.448 mW at A = 0.5 to 3.0 mm in 0.5 mm steps. Plot P against A² and find μ from the slope.

**Q4.** For the wave of Q1, find the average energy per meter of string and the energy in one wavelength. Show that the energy in one wavelength times f gives the power.

**Q5.** With a matched absorber the meter reading does not change when L changes. With the "too soft" absorber it does. Explain both.

**Q6.** String A (0.40 g/m) and String C (3.60 g/m) are run with the same tension, frequency and amplitude. Which carries more power, and by what factor?

## Common misconceptions

- **"A bigger wave moves faster, so it carries more power for that reason."** The speed is set by T and μ, not by A. The power grows with A² because each bit of string moves farther and faster.
- **"The string itself travels to the absorber."** Each bit of string only moves up and down; energy travels, not string.
- **"Higher frequency means a faster wave."** f changes λ, not v. Power grows with f² because the string moves faster at the same amplitude.
- **"The absorber's power depends on how long the string is."** Only when the end reflects. With a matched end no wave comes back and L does not matter.

## Physics behind the demo

- The string obeys μ y_tt = T y_xx with no losses along it. The vibrator end moves as A cos ωt. The far end is a massless end held by a dashpot: T y_x + b y_t = 0. The steady state is Y(x) = P e^{−ikx} + Q e^{ikx} with Q = P r e^{−2ikL}, r = (Z − b)/(Z + b) and Z = √(Tμ), solved exactly.
- The meter reads the dashpot's average power ½ b ω² |Y(L)|², which equals the power ½ Re[(−T Y′) conj(iωY)] carried across every point (checked in the tests). With b = Z this is ½ Z ω² A² = ½ μ A² ω² v exactly.
- Too soft and too stiff are b = Z/3 and b = 3Z, so |r| = 0.5 and a quarter of the power is sent back each time. Because the vibrator fixes the displacement of its end, the wave heading for the absorber has an amplitude between A/1.5 and A/0.5, and the absorber takes between P/3 and 3P, depending on L and f.
- T = mg with g = 9.81 m/s²; the pulley has no friction, the mass is at rest, and the short piece of string from the absorber to the pulley, its stretch and its sag are left out. Strings A, B and C have μ = 0.40, 1.20 and 3.60 g/m (chosen).
- The linear wave equation needs small slopes. The readout warns when the largest slope kA passes 0.2 (it can on String C with the hanger alone near 100 Hz and 5 mm). The steady state is shown at once. Simulated data with no noise.
