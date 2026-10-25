---
title: Linear Density of a String
level: PHYS 202
time: 30 to 50 minutes (a full lab)
---
## What students should come away with

- A string fixed at both ends resonates only when a whole number of half wavelengths fits in its length: λₙ = 2L/n, so fₙ = (n/2L)√(T/μ).
- The wave speed on a string, v = √(T/μ), is set by the tension and the mass per meter, not by the frequency of the driver.
- The tension comes from the hanging mass, T = mg, and the pulley only turns its direction.
- Two ways to the same μ: at one mass, f against n is a straight line with slope v/2L; at one frequency, T against 1/n² is a straight line with slope 4L²f²μ. Both lines should pass close to the origin, which checks the model.
- A resonance has a width. How well you find the peak sets the precision of the result.

## Before class

Students need v = fλ and the idea of a standing wave on a string with fixed ends (nodes and antinodes, λ = 2L/n). The **Standing Waves** demo's **Harmonics of a string** setup is a good warm up. **Blind** hides μ, the wave speed, the predicted resonance and μ from the fit; the **Unknown string** hides them for good (choosing another string afterwards shows the unknown value in the status line).

## Running it in class

1. **Sweep the frequency, 200 g.** String B, L = 1.20 m, 200 g hanging (the 50 g hanger counts). Raise **Driver frequency f** with the slider, then use **−0.1 Hz** and **+0.1 Hz** to find the largest amplitude. Resonances near 16.8, 33.7, 50.5, 67.4 and 84.2 Hz, with 1 to 5 loops. **Record this reading** at each, then plot **f against n**.
2. **Third harmonic.** Three loops at 50.5 Hz. Point out that the vibrator end barely moves (0.50 mm) while the antinodes swing about 9 mm: the end is very nearly a node. Step 1 Hz away and the amplitude drops to about 0.3 of the peak; 0.1 Hz away it is still 95%.
3. **Add masses at 60 Hz.** Start with the hanger alone and use the **Add** buttons. Patterns of 7, 6, 5, 4, 3 and 2 loops appear near 52, 70, 101, 159, 282 and 634 g. The **Response** plot shows how sharp each peak is in mass. Plot **T against 1/n²**.
4. **Unknown string.** Students measure μ by either method and check it against a classmate who used the other one.

## Questions

**Q1.** String B (μ = 1.20 g/m) runs 1.20 m from the vibrator to the pulley, with 200 g hanging. Find the tension, the wave speed, the fundamental frequency and the frequency of the third harmonic. Use g = 9.81 m/s².

**Q2.** With 200 g hanging, a student finds resonances at 16.8, 33.7, 50.5, 67.4, 84.2 and 101.1 Hz, with 1 to 6 loops. Fit f against n and find μ from the slope. What should the intercept be, and why?

**Q3.** At 60.0 Hz, with L = 1.20 m, the same string shows 2, 3, 4, 5, 6 and 7 loops with 634, 282, 159, 101, 70 and 52 g hanging. Find T for each, fit T against 1/n² and find μ from the slope. Why does each extra loop need so much less mass?

**Q4.** The vibrator end moves 0.50 mm, yet the loops swing about 9 mm. Why is the vibrator end still treated as a node, and where does the large amplitude come from?

**Q5.** Each resonance in this demo is 0.60 Hz wide at half power. Near 50.5 Hz, how precisely can a student hope to find the peak, and what does that mean for the uncertainty in μ? Which method gives the smaller uncertainty in μ for the same care, and why?

**Q6.** A student forgets the 50 g hanger and uses only the slotted masses. How does that change the T against 1/n² plot and the μ from its slope? How does it change μ from f against n, done at one mass?

## Common misconceptions

- **"A faster driver makes faster waves."** The driver sets f; the string sets v. Raising f shortens λ until a different number of loops fits.
- **"More mass means more loops."** More tension means a faster wave and a longer wavelength at the same f, so fewer loops.
- **"The vibrator end is an antinode because it moves."** It moves very little; at resonance it is very nearly a node.
- **"Any frequency makes a standing wave."** Off resonance the string barely moves; only at fₙ does the small drive build up a large standing wave.

## Physics behind the demo

- The string obeys the wave equation with a small damping force in proportion to its velocity, μ y_tt + μγ y_t = T y_xx, with γ = 2π × 0.60 Hz (chosen) so each resonance is 0.60 Hz wide at half power. The vibrator end moves as a cos ωt with a = 0.50 mm (chosen); the pulley end is fixed. The steady state is solved exactly: Y(x) = a sin(κ(L − x))/sin(κL) with κ² = (ω² − iγω)/v².
- At resonance the antinode amplitude is a · 2ω₁/(πγ), about 8.9 mm for String B with 200 g; damping lowers each resonance by less than 0.05% above 10 Hz.
- T = mg with g = 9.81 m/s², a frictionless pulley and the mass at rest. The string past the pulley, its stretch under tension and its sag are left out. Strings A, B and C have μ = 0.40, 1.20 and 3.60 g/m (chosen); an unknown string has 0.50 to 3.00 g/m.
- The steady state is shown at once; a real string takes about 2/γ = 0.53 s (one time constant) to build up. The drawing exaggerates the sideways motion and slows it down as a strobe would. Simulated data with no noise.
