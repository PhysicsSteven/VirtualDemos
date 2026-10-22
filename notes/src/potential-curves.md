---
title: Potential Energy Curves
level: Intro mechanics (calculus based); upper level classical mechanics
time: 20 to 30 minutes
---
## What students should come away with

- For motion in one dimension with energy conserved, the graph of U(x) and one horizontal line at E tell the whole story: K = E − U is the gap between them, the particle stays where U ≤ E, and it turns around where U = E.
- The force is F = −dU/dx: it points downhill on the graph and is largest where the curve is steepest, not where the particle is fastest.
- Equilibria are where dU/dx = 0. A minimum is stable, a maximum unstable, a flat stretch neutral. Near a minimum every well looks like a spring with k = U″, so small oscillations have ω₀ = √(U″/m).
- Only a parabola gives a period independent of amplitude. A well that widens faster than a parabola (pendulum, Lennard Jones) has a period that grows with energy, and the period diverges as E approaches a hilltop.
- In phase space each energy is one curve, v = ±√(2(E − U)/m); bound motion is a closed loop, and the separatrix through a hilltop separates trapped orbits from those that cross.

## Before class

Students should know work, kinetic energy and conservation of mechanical energy; the upper level questions use Taylor series and the period integral T = 2∫dx/v. Drag the dashed energy line to change E and drag the particle to choose a start; round grips on the curve reshape it. Keep **Particle on a line**: it is the exact motion, while **Ball on a track** is only an illustration. Under **Plot data**, **Show data table** lists the points behind the energy diagram, the phase space plot and the period curve; **Reduce motion** in **Display** pauses the particle and opens every setup paused.

## Running it in class

1. **Spring.** Point out the kinetic energy bar and the shaded forbidden regions. Raise E and ask Q1: the turning points move out, and the period curve stays flat at 0.9935 s.
2. **Roller coaster.** The car starts from rest at x = 8 m, 26 m up, with E = 127 kJ. Press **Pause** and ask where it will turn around and where it is fastest. It crosses the 25 m middle hill slowly and turns back on the last hill at x = 106 m. Show the neutral station between 22 and 32 m, then lower E below the middle hilltop (Q3).
3. **Double well.** Below the barrier the particle stays in the left well (Q4). Raise E toward the barrier top (1.00 J): the period shoots up. Turn on **Phase space** and find the gold separatrix.
4. **Molecule (Lennard Jones).** Argon atoms at E = −8.6 meV vibrate with period 1.425 ps, above the small oscillation value 1.26 ps. Drag E above 0: the molecule comes apart (Q5).
5. **Pendulum.** The start at 60° gives T/T₀ = 1.073. Raise E toward 2mgL = 19.6 J, then above it: the pendulum goes over the top (Q6).
6. **Draw your own.** Give the class Q7 and have them sketch a prediction before building it.

## Questions

**Q1.** Predict: on the Spring setup, if you raise E, what happens to the turning points, the speed at x = 0, and the period? Compare with the Pendulum at small and large swings, and explain the difference from the shapes of the two curves.

**Q2.** In the Spring setup, k = 20 N/m, m = 0.50 kg and E = 0.90 J. Find the turning points, the maximum speed, and the period. Check with the rail.

**Q3.** At a turning point the particle is momentarily at rest. Is it in equilibrium there? Use the roller coaster: compare a car at rest at its turning point on the last hill with a car at rest on the flat station. What is the force on each, and what happens next?

**Q4.** For the double well U = U₀[(x/a)² − 1]² with U₀ = 1.00 J, a = 0.80 m and m = 1.00 kg, find the equilibrium points and classify them. Expand U to second order about x = a to find the small oscillation period. Check with the equilibrium table.

**Q5.** For the Lennard Jones potential U = 4ε[(σ/r)¹² − (σ/r)⁶], show that the minimum is at r₀ = 2^(1/6)σ with U(r₀) = −ε, and that U″(r₀) = 72ε/r₀². With ε = 10.4 meV, σ = 0.340 nm and the reduced mass μ = 19.97 u, find the small oscillation period. Why does the period rise above this value at higher (still negative) E?

**Q6.** A pendulum has U = mgL(1 − cos θ). Explain from the shape of U why a 60° swing takes longer than a small one, and why the period grows without limit as E approaches 2mgL. What does the phase space picture look like for E just below, at, and just above 2mgL?

**Q7.** Describe a single well in which larger swings take less time than small ones. Then build it with Draw your own and check with the period curve.

## Common misconceptions

- **"The particle is fastest where the force on it is largest."** Speed is set by the gap E − U; force by the slope. At the bottom of a well the particle is fastest and the force is zero. At a turning point it is at rest and the force is largest.
- **"At a turning point the particle is in equilibrium because it is at rest."** Equilibrium needs dU/dx = 0. At a turning point on a slope the force is not zero, so the particle immediately moves back.
- **"The particle moves along the U(x) curve."** The particle moves along the x axis. The curve is a graph of energy, not a track.
- **"All oscillations are simple harmonic."** Only a parabolic well gives a period independent of amplitude. Small oscillations near any minimum are harmonic; large ones generally are not.
- **"A particle with E just above the barrier top crosses it quickly."** It crawls over the top, because K is nearly zero there; near the barrier energy the period becomes very long.

## Physics behind the demo

- The particle obeys m x″ = −dU/dx, integrated with velocity Verlet; the rail shows the energy drift, which stays tiny. The orbit period T = 2∫dx/v is computed between the turning points (U = E), and the simulation also times each cycle. For a pendulum going over the top, the readout is the time per full turn.
- Equilibria are the zeros of dU/dx, classified by the sign of U″. The harmonic fit is the parabola with the same U″ at a minimum, and ω₀ = √(U″/m).
- Setups: roller coaster U = mgh(x) for a 500 kg car on a made up profile; double well for 1 kg; Lennard Jones with argon values as relative motion with μ = m_Ar/2; pendulum with a 1 kg bob on a light rigid rod, coordinate θ and inertia mL²; Draw your own is a natural cubic spline, straight beyond the end points.
- Approximations: no friction or drag; classical motion only (no tunneling; a real Ar₂ molecule is quantum, with a zero point energy and only a few vibrational levels). The coaster is a particle moving along x in U(x); a real car on that track has the same turning points but takes longer on steep parts.

## Going further

- Homework: expand the pendulum period to T ≈ 2π√(L/g)(1 + θ₀²/16) and compare with T/T₀ = 1.073 at 60°.
