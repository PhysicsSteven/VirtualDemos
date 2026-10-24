---
title: Atoms in a Magnetic Field
level: Intro modern physics (atomic structure)
time: 20 to 35 minutes
---
## What students should come away with

- An orbiting electron is a current loop, so it has a magnetic moment. For any orbit the moment is tied to the angular momentum by μ = (e/2m_e) L, which makes μ_B = eħ/2m_e the natural unit.
- The direction of L, and so of μ, is quantized: L_z = m_l ħ with m_l = −l, …, +l. In a field B each m_l has its own energy U = m_l μ_B B, so a level with 2l + 1 states splits into 2l + 1.
- The Stern–Gerlach experiment shows the quantization directly: a beam of silver atoms splits into two spots, not a smear. Two is an even number, which no orbital angular momentum can give (2l + 1 is odd): the moment is the electron's spin, with s = 1/2 and g ≈ 2.
- Spectral lines split in a magnetic field (the Zeeman effect). With no spin in the levels, a line splits into three evenly spaced lines; with spin, the pattern is more complicated.

## Before class

Students should know the Bohr model (radius n²a₀, speed αc/n), the magnetic moment of a current loop μ = IA, and the quantum numbers n, l and m_l of the hydrogen atom. The demo has three views. **Orbit**: a Bohr orbit drawn as a current loop with its L and μ arrows, beside the quantum vector model (L on a cone about B) and a graph of the energy of each m_l level against B. **Stern–Gerlach**: atoms from an oven pass two slits, a magnet 3.50 cm long with a field gradient dB/dz and a drift space that can be set to zero, and stick to a glass screen; the lower panel shows the face of the screen and a count of atoms along z, with a cursor to measure positions. A velocity selector can pick one speed. **Zeeman effect**: a lamp between the poles of an electromagnet, the energy levels split into their m sublevels with every allowed transition, and the spectrum seen through a spectrometer that resolves 0.20 pm.

## Running it in class

1. **Orbit as a current loop.** Ask Q1, then step n from 1 to 6. The current falls fast (as 1/n³) but the area grows as n⁴, so μ = IA grows as n; μ/L stays at 8.794 × 10¹⁰ C/kg (Q2).
2. **3d electron in a field.** Five allowed directions of L. Step m_l and B and watch the fan of energy levels in the graph (Q3).
3. **Stern and Gerlach, 1922.** Ask what classical physics predicts before starting the beam (pick "Classical magnets" to show it). Silver gives two lips about 0.1 mm apart (Q4).
4. **Silver at one speed.** With the velocity selector at 600 m/s and the screen 20 cm past the magnet the spots are sharp. Step the gradient and measure the separation (Q5).
5. **Mystery atom.** Students count the spots, measure the spacing and find J and g (Q6).
6. **Zeeman: cadmium red line.** One line becomes three. Measure the spacing against B and get e/m_e (Q7). Then look along the field (the middle line disappears), and try the sodium D lines (Q8).

## Questions

**Q1.** In the Bohr model the n = 1 electron circles at r = 5.292 × 10⁻¹¹ m with speed 2.188 × 10⁶ m/s. Find the current it makes and the magnetic moment of the loop.

**Q2.** Show that for any circular orbit μ/L = e/(2m_e), whatever the radius and speed. What is μ for the Bohr orbit n, in units of μ_B = eħ/(2m_e)?

**Q3.** A 3d electron (l = 2) is in a field of 1.00 T. List the allowed values of L_z, the angles L can make with the field, and the energy shift of each state.

**Q4.** Silver atoms (one unpaired 5s electron, l = 0) leave an oven at 1320 K. Classical physics predicts what pattern on the screen? Quantum mechanics with only orbital angular momentum predicts what? What is seen, and what does it tell us?

**Q5.** With the velocity selector at 600 m/s, a gradient of 500 T/m, a magnet 3.50 cm long and a drift of 20.0 cm, predict the separation of the two silver spots. Take μ_z = ±1.001 μ_B and M = 107.87 u.

**Q6.** A mystery atom at 600 m/s (M = 55.845 u) makes nine evenly spaced spots 1.587 mm apart at 500 T/m with a 20 cm drift. Find J, μ_z of each spot and the g factor. Which atom and ground level fit?

**Q7.** In a 1.00 T field the cadmium line at 643.847 nm splits into three lines 19.35 pm apart. Use this to find μ_B and then e/m_e.

**Q8.** Why does the cadmium line split into three while each sodium D line splits into four or six?

## Common misconceptions

- **"The electron's moment points along its angular momentum."** The electron is negative, so μ points opposite to L.
- **"L can point along the field."** |L| = √(l(l+1)) ħ is always larger than the largest L_z = lħ, so L can never lie along the field; it sits on a cone.
- **"The magnet pulls the atoms toward it."** A uniform field only twists a magnet. It takes a field that changes across the beam (a gradient) to push the atoms up or down, which is why one pole is a knife edge.
- **"Silver's two spots are the two values of m_l."** Silver's outer electron has l = 0, so m_l = 0 only. The two spots come from spin.

## Physics behind the demo

- Orbit: Bohr's hydrogen with an infinitely heavy nucleus, r = n²a₀, v = αc/n, I = e/T = ev/(2πr), μ = Iπr² = evr/2 = (e/2m_e)L. With L = nħ, μ = nμ_B exactly. The quantum picture uses |L| = √(l(l+1)) ħ, L_z = m_l ħ, μ_z = −m_l μ_B and U = m_l μ_B B. The drawn precession is slowed down; the real Larmor frequency is eB/(4πm_e) = 14.0 GHz per tesla.
- Stern–Gerlach: inside the magnet the force μ_z dB/dz is constant, so an atom of speed v lands at z = (μ_z G/M)(L₁/v²)(L₁/2 + L₂). Each m_J sublevel has μ_z = −g_J m_J μ_B (Landé g with the electron's g = 2.00232) and the same population. Without the selector, speeds have weight v³ exp(−Mv²/2kT) (an effusive beam), and since z ∝ 1/v² the deposit peaks where v² = 6kT/M; with the selector every atom has the chosen speed. The field's variation along the slit, gravity, collisions and nuclear moments are left out.
- Zeeman: each level shifts by g m μ_B B; components with Δm = 0 (π) and ±1 (σ) appear with strengths from 3j symbols. Across the field π counts fully and σ half; along it π vanishes. With g = 1 in both levels all components fall on three wavelengths spaced λ²μ_B B/(hc). Wavelengths from the NIST Handbook (Cd 643.847 nm, Na 588.995 and 589.592 nm, in air) and NIST ASD (H Lyman α 121.567 nm). The spectrometer width (0.20 pm) is a chosen value.

## Going further

- Pair with **Spin Resonance**: flipping the spin moment found here costs g μ_B B, which a microwave photon supplies.
- Homework: hydrogen atoms (M = 1.008 u) at the same 600 m/s and 500 T/m deflect about 107 times further than silver. Why, and what would that do to the experiment?
