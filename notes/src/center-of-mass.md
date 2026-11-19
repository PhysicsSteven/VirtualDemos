---
title: Center of Mass
level: PHYS 201
time: 15 to 25 minutes
---
## What students should come away with

- The center of mass is the mass weighted average position, x_cm = Σmᵢxᵢ/Σmᵢ, pulled toward the heavier masses.
- The center of mass moves as if all the mass were concentrated there and all the external forces acted on it: M a_cm = F_external. Internal forces, however violent, cannot change its motion.
- An exploding firework's pieces follow different parabolas, but their center of mass carries on along the original one until a piece hits the ground (a new external force).
- With no horizontal external force, walking on a boat cannot move the center of mass of you and the boat: the boat slides back by mL/(m + M).
- For calculus based courses: a flat plate's balance point comes from cutting it into strips. Each strip's mass sits at its own middle, so the sums of strip moments become M_y = σ∫x(f − g) dx and M_x = σ∫½(f² − g²) dx, and x̄ = M_y/M, ȳ = M_x/M. Pappus' theorem turns the balance point into volumes of revolution.

## Before class

Students need momentum conservation. In **Masses on a plate** drag the masses (keyboard: 1 to 4 to select, arrows to move); the slider sets the selected mass. In **Exploding firework** the firework is launched at 20 m/s and 60° and splits at the top; the dashed curve is the unexploded path. In **Walking on a boat** the person walks the 4.0 m boat from back to front. **Blind** hides the center of mass.

## Running it in class

1. **Plate.** Blind on: ask for the center of mass of 2.0 kg at (0.25, 0.30), 1.0 kg at (0.75, 0.45) and 1.0 kg at (0.60, 0.12). It is (0.463, 0.292) m. Double one mass and predict which way it moves.
2. **Firework.** Default split: equal halves thrown apart horizontally at 8 m/s. They land together at 28.25 and 42.37 m; their midpoint is 35.31 m, the unexploded range.
3. **Unequal pieces.** Front piece 0.3 of the mass: it flies farther, the heavy piece less, and the mass weighted average is still 35.31 m.
4. **Throw a piece upward.** Then the pieces land at different times and the center of mass leaves the parabola as soon as the first one lands: the ground's force is external.
5. **Boat.** 70 kg person, 150 kg boat: the boat moves back 1.27 m while the person walks 4.0 m along it; the center of mass stays at −0.636 m.
6. **Plate bounded by curves** (for calculus based courses; OpenStax Calculus Vol 1, 6.6). Open **Between y = x and y = x²**: a steel sheet 1 mm thick (σ = 7.85 kg/m²) cut to the region between the curves for 0 ≤ x ≤ 1 m. Blind on: ask where it balances, then drag the pin there and press **Release**. The side view shows it tipping toward the balance point unless the pin is within 1 mm of it. With 8 strips the sums give (0.5000, 0.4008) m; the integrals give A = 1/6 m², M = 1.308 kg, M_y = 0.6542 kg·m, M_x = 0.5233 kg·m and the balance point (0.5000, 0.4000) m, inside the plate just below the line y = x (Q6). **Semicircle** (radius 0.3 m) puts it at ȳ = 4r/(3π) = 0.1273 m, and **Triangle** at a third of each leg, (0.200, 0.133) m. Type your own curves too: the boxes take sqrt, sin, ln, pi and so on.
7. **Pappus.** Turn on **Spin it about an axis (Pappus)**. Spinning the semicircle about the x axis sweeps a sphere: 2πȳ·A = 0.1131 m³, the same as the washer method and (4/3)πr³ (Q7). Spinning the triangle about either axis sweeps a cone (Q8).

## Questions

**Q1.** Find the center of mass of the three masses in step 1.

**Q2.** Why does the center of mass of the firework's pieces follow the original parabola after the explosion?

**Q3.** The firework splits horizontally into a 0.3 piece and a 0.7 piece. With the explosion speed at 10 m/s the light piece lands 12.36 m beyond the unexploded landing point. Where does the heavy piece land?

**Q4.** Show that the boat moves back by mL/(m + M). How far does a 150 kg boat move when a 70 kg person walks 4.0 m along it?

**Q5.** What happens to the center of mass of the firework after the first piece lands, and why?

**Q6.** In **Between y = x and y = x²**, set up the integrals for the mass and the two moments and find the balance point. With 8 strips the strip sums put x̄ at exactly 0.5000 m but ȳ at 0.4008 m. Why is x̄ exact for any number of strips?

**Q7.** Use Pappus' theorem and the volume of a sphere to find the balance point of a semicircular plate of radius r, without integrating. Check it against **Semicircle** (r = 0.3 m).

**Q8.** In **Triangle** (legs 0.6 m along x and 0.4 m along y), find the balance point with strips, then use Pappus to find the volume of the cone swept about the x axis and about the y axis. Check both against (1/3)πR²h.

## Common misconceptions

- **"The center of mass is the middle of the object."** Only for symmetric mass distributions.
- **"An explosion changes where the system goes."** Internal forces come in third law pairs and cancel; only external forces change the center of mass motion.
- **"Walking forward on a boat doesn't move the boat."** Your push on the boat moves it backward; the total momentum stays zero.
- **"There must be mass at the center of mass."** A ring's center of mass is in empty space.

## Physics behind the demo

- Point masses on a massless 1.0 m × 0.6 m plate; positions to 0.01 m.
- The firework is a point that splits at the top of its flight into pieces with fractions f and 1 − f of the mass. The explosion gives them a relative speed u along the chosen direction with zero total momentum change: the front piece gains (1 − f)u, the back piece −fu. No air drag. Each piece stops when it reaches the ground.
- The boat floats with no water drag (real water would slowly stop it). The person walks at 1.0 m/s relative to the boat.
- Plate bounded by curves: a uniform steel sheet 1 mm thick, σ = (7850 kg/m³)(0.001 m) = 7.85 kg/m², between g(x) ≤ y ≤ f(x) for a ≤ x ≤ b, in meters. The strips are vertical, each taken at its middle x_i, with its mass at (x_i, (f + g)/2). The integrals use adaptive Simpson's rule. Pappus is checked against washers π∫(f² − g²) dx about the x axis and shells 2π∫x(f − g) dx about the y axis, and only for a plate on one side of the axis.
- On the pin the plate stays level when the balance point is within 1 mm of the pin (the size of its tip). Otherwise it tips about the line through the pin at right angles to the line to the balance point, θ'' = Mgd cos θ / I, with I worked out by integration and the products of inertia neglected, until it slides off at 30°. That takes about a tenth of a second, so this setup opens in slow motion (×⅒).
