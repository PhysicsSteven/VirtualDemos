---
title: Magnetism from Relativity
level: PHYS 202 (magnetic force, fields of currents); modern physics (special relativity)
time: 15 to 30 minutes
---
## What students should come away with

- Whether a force is "electric" or "magnetic" depends on the observer. A charge moving beside a neutral wire carrying current feels a magnetic force in the lab; in the charge's own frame the wire is charged and the same push is electric.
- The wire becomes charged in the moving frame because each line of charge has its own rest frame density, multiplied by its own γ in whatever frame you look from. The ions and the electrons move at different speeds there, so they contract by different amounts.
- B does not disappear in the charge's frame: the wire still carries a current there. B simply cannot push a charge at rest. E and B are parts of one field, and E·B and E² − c²B² are the same for every observer.
- The forces agree once transformed: a sideways force is γᵤ times larger in the frame where the particle is at rest, F′ = γᵤF.
- In a real wire the drift speed is about 0.1 mm/s and γ − 1 is about 10⁻²⁶, yet the effect is the everyday magnetic force, because it acts on roughly 10²² conduction electrons per meter.

## Before class

Students should know B = μ₀I/(2πr), F = quB, E = λ/(2πε₀r), Faraday's law, length contraction and γ. The wire argument is Purcell's (Electricity and Magnetism, chapter 5). Use projector mode.

## Running it in class

1. **Wire, lab frame.** The ions sit still and the electrons drift at 0.5c, equally spaced, so the wire is neutral and E = 0 at the charge. The charge moves with the electrons and is pushed away from the wire by quB. Speeds are exaggerated (see the tag). Ask Q1 before switching.
2. **Charge's frame.** Switch the frame and watch the boost: the ions start moving and crowd together, the electrons stop and spread apart, and the strip shows the force shifting from a magnetic part to an electric part along the way. At the end the force is all electric and slightly larger (F′/F = γᵤ). Point to "B at q": still there, now 1.731 mT. Ask Q5.
3. **Back to Lab frame, then compare.** Compare the Both frames cards; have students check one number by hand (Q2).
4. **Fast charges.** Electrons at 0.8c, the charge at 0.6c the other way. Switch to Charge's frame: the electrons move at 0.946c, not 1.4c, and are now more crowded than the ions, so the wire turns negative and the charge is pulled in. Ask Q3.
5. **Real copper wire.** To scale in speed. Switch frames: nothing visible changes, yet the force stays 2.355×10⁻²⁸ N, now electric (Q4).
6. **Magnet and loop.** Einstein's 1905 opening example. In Magnet's frame the ring's charges are pushed by q(v × B); switch to Loop's frame and the same push is an induced E′ circling the axis. The two EMFs and −dΦ′/dt′ agree, and the plot traces the EMF as the magnet passes through. Ask Q8; then tell the class Einstein's point: the asymmetry is in the theory, not in the phenomena.
7. **Moving point charge** and **Field transformation** (if time allows). At 0.8c the field squeezes into a pancake. A pure B field seen from a moving frame gains an E field (Q7).

## Questions

**Q1.** Predict: in the lab the wire is neutral and the charge is pushed away by the magnetic force. Now ride along with the charge, so it is at rest. A charge at rest feels no magnetic force. Does it still get pushed away from the wire? If so, by what?

**Q2.** In Wire, lab frame: λ₀ = 1 μC/m, v = u = 0.5c, q = 1 nC, r = 2.0 cm. Find the net line charge λ′ of the wire in the charge's frame, the electric field there, and the force F′. Then find the lab force F = quB and the ratio F′/F. Check both with the demo.

**Q3.** In Fast charges the electrons drift at 0.8c and the charge moves at 0.6c the other way. A student says that in the charge's frame the electrons move at 1.4c. What is their speed there, and why does the wire end up negatively charged in that frame? Find λ′ in units of λ₀.

**Q4.** A copper wire with a 1 mm² cross section carries 1 A. Copper has 8.49×10²⁸ conduction electrons per m³. Find the drift speed, and the net line charge seen by an electron drifting along with the conduction electrons, λ′ = γλ₀v²/c². How much wire holds one extra elementary charge? Why does such a small imbalance still produce the ordinary force between two wires? Compare with the Real copper wire readouts.

**Q5.** In the charge's frame the demo still shows B at q, and it is larger than in the lab. Why is B not zero there, and why does it not push the charge? Is there any frame in which the field at the charge is purely electric? Use E² − c²B².

**Q6.** In Moving point charge at 0.8c, the field 1 m ahead of the charge is weaker than the Coulomb value, and the field 1 m to the side is stronger. Explain the pattern using length contraction, and predict both values at 0.95c before checking with the slider.

**Q7.** In Field transformation, frame S has only B = 1 mT along z. Frame S′ moves at 0.6c along x. Find E′ and B′, then check that E·B and E² − c²B² are the same in both frames.

**Q8.** In Magnet and loop at 1 m/s, put the ring level with the magnet's north face (2.0 cm from its center). The rail shows B across the axis at the ring, 77.04 mT. Find the EMF in the magnet's frame, then E′ and EMF′ in the loop's frame. Which way does the current go, seen from the north end?

## Common misconceptions

- **"The magnetic field vanishes in the charge's frame."** It does not: the wire still carries a current there, and B is γᵤ times larger. It just exerts no force on a charge at rest.
- **"Relativity is irrelevant at 0.1 mm/s."** The fractional effect is about 10⁻²⁶, but it multiplies an enormous charge density, 1.36×10⁴ C/m of electrons in a 1 mm² copper wire. Magnetism is a relativistic effect we see every day.
- **"The force is the same in every frame."** The sideways force is largest in the particle's rest frame and 1/γ of that in the lab.

## Physics behind the demo

- The wire is two infinitely long, thin lines of charge: ions with density +λ₀ at rest in the lab and electrons drifting at v with density −λ₀ in the lab. In a frame moving at f, ions have density γ_f λ₀ and electrons (λ₀/γᵥ)γ_w with w = (v − f)/(1 − vf/c²). Net: λ′ = γ_f λ₀ f v/c², the same as transforming the four vector (cλ, I). Fields E = λ/(2πε₀r), B = μ₀I/(2πr); force q(E + u × B).
- Ignored: the test charge's own field and radiation, the wire's resistance, and the small surface charges that drive current in a real circuit. Spacing of the drawn charges shows density; motion near c is slowed for the screen.
- Magnet and loop: a uniformly magnetized cylinder (current sheet K = M) from exact loop fields; EMF = ∮(v × B)·dl, EMF′ = ∮E′·dl with E′ = γ v × B, and −dΦ′/dt′.
- Point charge: the exact Heaviside field, B = v × E/c². Field transform: exact, E′⊥ = γ(E + v × B)⊥, B′⊥ = γ(B − v × E/c²)⊥.
