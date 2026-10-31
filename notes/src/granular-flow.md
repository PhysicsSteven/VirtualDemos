---
title: Granular Flow: Sorting and Landslides
level: Physics I (friction, drag, collisions), or any class as a demonstration
time: 10 to 20 minutes
---
## What students should come away with

- Sand, beads and gravel flow like a liquid when they are stirred, but rest like a solid when they are not; friction between grains decides the steepest slope a pile can hold (the angle of repose).
- Mixed sizes sort themselves whenever grains move past each other: small grains drop through the gaps that open under big ones, and cannot be pushed back up, so the big ones end up on top or outside.
- Sorting by size needs no difference in weight: a single big bead rises in a shaken box although it is the heaviest bead there.
- In a liquid, grains settle at a terminal speed set by their weight less the buoyancy against the drag; bigger and denser grains land first.

## Before class

Students should know what friction, a terminal speed and a coefficient of restitution are. **Start** runs the chosen setup (in the landslide it lifts the gate, in the sand picture it flips the frame); **Refill** puts the sand back. The card sets the apparatus and its drive (turning rate, shaking, lid speed, slope angle, liquid) and how the sand starts. The **Sand** panel sets up to five kinds of grain: number, diameter, size spread, color, roughness (friction μ), shape and material; changing the sand refills the apparatus. The graph tracks where each kind sits. **Blind** in **Lab** hides the predicted critical rate and settling speeds.

## Running it in class

1. **Drum: one size, two colors.** Run it first: the colors mix and stay mixed (Q1).
2. **Drum: two sizes.** Ask for a prediction, then run for about three turns and watch the graph (Q2).
3. **Shaken: Brazil nut.** Run it at Γ = 2.5, then at Γ below 1 (Q3).
4. **Landslide.** Open the gate; look at where the big stones end up. Then compare sand and glass beads on 25° (Q4).
5. **Sand picture.** Flip it and read the settling speeds (Q5, Q6).

## Questions

**Q1.** In the drum with one size and two colors, the colors mix and never separate again. In the drum with two sizes, the sizes separate. What is different about the two mixtures?

**Q2.** Predict where the small beads will end up in the turning drum: near the wall, near the surface, or in the middle of the bed. Run it and explain what you see in terms of the thin layer that flows down the surface.

**Q3.** The 12 mm bead in the shaken box is heavier than any grain of sand around it, yet it rises. Why does it rise, and why does nothing happen when Γ = A(2πf)²/g is below 1?

**Q4.** On a 25° slope, about a quarter of a pile of angular sand stays on the slope, but almost all of a pile of glass beads runs off. What does this tell you about the angles of repose of the two? Why do angular rocks make steeper piles than round pebbles?

**Q5.** In the sand picture with 75 % glycerol, the readouts give the settling speeds of the 2 mm and 4 mm grains. Is the ratio the 4 of Stokes's law (speed ∝ d²)? Use the Reynolds number to explain why not.

**Q6.** Turn the drum to 200 rpm. Use ω²R/g to explain why the beads ride round with the wall. Why do they still tumble at 130 rpm, although that is above the critical rate √(g/R)?

## Common misconceptions

- **"Heavy things sink."** In a shaken box the heaviest bead rises; size and the gaps between grains matter more than weight.
- **"Shaking or stirring always mixes."** It mixes grains that differ only in color; grains that differ in size or roughness sort.
- **"Sand is either a solid or a liquid."** It is both: it holds a slope up to its angle of repose and flows beyond it.

## Physics behind the demo

- A soft contact model (Cundall and Strack 1979): grains overlap slightly and push apart with a spring and a damper (coefficient of restitution about 0.5); sideways a spring resists sliding up to Coulomb's limit μFn; a rolling resistance torque models the corners of angular grains. The springs are far softer than glass so the time step can be longer; overlaps stay at a few percent of a diameter.
- In the drum, shaken box, shear box and landslide each grain is a disk 3 mm thick, so its weight goes as its area, as in a truly flat layer. In the sand picture each grain is a sphere settling with the Schiller and Naumann drag 3πηdv(1 + 0.15 Re^0.687) less buoyancy; the liquid moves with the frame as a solid body and its flow between the grains is left out.
- Tests (curriculum/validation/test_granular_flow.cjs): resting overlap mg/kn, restitution, a disk and a sphere sliding into rolling at 2/3 and 5/7 of their speed, settling speeds and Stokes's law, and seeded runs of every setup against what its text says.

## Going further

- Falling Ball Viscometer measures the Stokes drag of a single sphere, the law behind the sand picture.
- Forces and Friction shows static and kinetic friction on a single block; here thousands of contacts share it.
- Rosato et al., Phys. Rev. Lett. 58, 1038 (1987); Ottino and Khakhar, Annu. Rev. Fluid Mech. 32, 55 (2000).
