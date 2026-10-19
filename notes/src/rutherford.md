---
title: Rutherford Scattering
level: Modern physics; PHYS 202 (Coulomb force)
time: 15 to 30 minutes
---
## What students should come away with

- A positive charge spread through the whole atom (Thomson's model) can only nudge an alpha particle; turning one straight back needs nearly all the charge in a tiny nucleus.
- The deflection of one alpha is set by its impact parameter b: smaller b, closer approach, larger angle, θ = 2 arctan(D/2b).
- The head on distance D = zZe²/(4πε₀K) is where all the kinetic energy has become Coulomb energy. It gives the scale of the whole problem and an upper bound on the size of the nucleus.
- Counts per solid angle fall as 1/sin⁴(θ/2), and the fraction turned past 90° tells you how small the target is.

## Before class

Students should know Coulomb's law and conservation of energy. Angular momentum helps for the closest approach readout but is not required. Open the demo once in projector mode so the preset buttons and the plot are large enough for the room.

## Running it in class

1. **Start with Plum pudding.** Ask the prediction question (Q1) before you press anything. Fire a beam. The spread after the whole foil is a fraction of a degree, and the rail shows that nothing comes back. Point out the "largest kick per atom" readout: it is tiny because inside a uniform ball of charge the force grows only in proportion to r.
2. **Switch to One alpha, gold.** Drag the handle on the incoming path to change b. Let students call out what happens as b shrinks. Stop at about b = 25 fm, where the alpha turns through about 61°.
3. **Head on.** At b = 0 the alpha stops at D = 29.6 fm and comes straight back. Compare D with the nuclear radius in the rail (about 7 fm for gold): the alpha never touches the nucleus, so only the Coulomb force acts.
4. **Geiger–Marsden beam.** Point out the scale break: the tracks are drawn on a femtometer scale, but the real screen is about a centimeter away, so each alpha lands at its final angle θ (the brief ray from the dashed circle), not where its track would cross the drawn screen. Let the counts build on the log plot. The points follow 1/sin⁴(θ/2) over four decades. Read off the fraction turned past 90° and compare with the expected value (b₉₀/b_max)².
5. **Aluminum, high energy** (if time allows). D is now about the same as the nuclear radius, so the alpha reaches the nucleus and the strong force acts. Pure Rutherford scattering fails at large angles; this is how the size of nuclei was first measured.

## Questions

**Q1.** Predict: in Thomson's plum pudding atom the positive charge fills the whole atom. If you fire alpha particles at a thin gold foil made of such atoms, will any come straight back? Why or why not?

**Q2.** An alpha particle passes a gold nucleus with impact parameter b. If b is cut in half, does the deflection angle double, more than double, or less than double? Check with the demo at b = 50 fm and b = 25 fm.

**Q3.** At the closest point of a head on collision the alpha is momentarily at rest. Use energy conservation to find the head on distance D for a 7.69 MeV alpha and a gold nucleus (Z = 79). Use e²/(4πε₀) = 1.440 MeV·fm.

**Q4.** Rutherford concluded that the gold nucleus is smaller than about 30 fm. What part of the experiment sets this bound, and why can it only be an upper bound?

**Q5.** Only alphas with b smaller than D/2 are turned past 90°. If the alpha energy is doubled, what happens to the fraction turned past 90°?

**Q6.** In the aluminum preset the measured counts at large angles fall below the Rutherford prediction. What is happening to those alphas, and what does it tell you about the aluminum nucleus?

## Common misconceptions

- **"The alpha hits the nucleus and bounces off."** For gold at these energies it never touches it: it turns around at least 29.6 fm away, about four nuclear radii, pushed only by the Coulomb force.
- **"Most alphas bounce back."** Almost all pass with a small deflection; only about one in tens of thousands is turned past 90° in a real foil. The surprise was that any came back at all.
- **"The plum pudding atom fails because it has the wrong total charge."** The total charge is the same in both models. What differs is how concentrated it is, which sets how strong the force can get.
- **"The alpha follows a straight line and then turns sharply."** The path is a smooth hyperbola, symmetric about the line through the point of closest approach.

## Physics behind the demo

- Each alpha follows the exact Coulomb (hyperbolic) orbit, θ = 2 arctan(D/2b), with the closest approach r_min = (D/2)(1 + √(1 + (2b/D)²)). Nonrelativistic mechanics is fine: v/c is at most about 0.074.
- The beam fires alphas at random b with uniform density over the beam's cross section. Counts are binned per steradian and compared with the Rutherford cross section, dσ/dΩ = (D/4)² / sin⁴(θ/2).
- The plum pudding atom is a uniform sphere of positive charge with point electrons ignored; the alpha takes a small random kick from each atom it crosses, and the kicks add like a random walk.
- An option lets the nucleus recoil (lab frame); with it off, the nucleus is fixed.
- The aluminum preset marks where the strong force would act (the alpha reaching the nuclear radius 1.2 A^⅓ fm). The demo does not model nuclear forces; it shows where the Rutherford formula stops applying.

## Going further

- Ask students to estimate the fraction of alphas turned past 90° by a foil of thickness t from n t π b₉₀², then compare with the rail's readout.
- Historical note: Geiger and Marsden's 1909 result (a few alphas reflected from a metal foil) came two years before Rutherford's 1911 explanation; their 1913 paper tested the 1/sin⁴(θ/2) law in detail.
