---
title: Induced Electric Fields
level: PHYS 202
time: 15 to 20 minutes
---
## What students should come away with

- A changing magnetic flux makes an electric field, whether or not a wire is there. The EMF in a loop is the work per charge this field does around it: ε = ∮E·dl = −dΦ/dt (OpenStax Eq. 13.12).
- Around a long solenoid the induced field circles the axis. It grows as r inside, E = (r/2)|dB/dt|, and falls as 1/r outside, E = (R²/2r)|dB/dt|, even though B = 0 outside (OpenStax Example 13.8).
- The induced field is not conservative: ∮E·dl is not zero around a path that encloses changing flux, so it has no electric potential. Around a path that encloses no flux, ∮E·dl = 0 even though E is not zero on it.
- What matters is the rate of change: a steady current gives no induced field at all, however large B is.

## Before class

Students need Faraday's law with flux and Lenz's law. **Blind** hides the field arrows, the E graph, E on the path and ∮E·dl.

## Running it in class

1. **Example 13.8, path outside.** Pause at t = 0. B is out of the page and falling at 1.01 T/s. Ask: is there an electric field on the path, where B = 0? Turn Blind off: E = 3.35 mV/m counterclockwise, and ∮E·dl = 1.26 mV = −dΦ/dt.
2. **Make the path a copper ring.** The same field now drives charges around the ring. Lenz: the induced current is counterclockwise, the same way as the solenoid's own (falling) current.
3. **Path inside.** E is smaller nearer the axis. Drag the path's radius through R and watch the E graph: a peak at R.
4. **Path off to the side.** E on the path is clearly not zero, yet ∮E·dl = 0: no flux is enclosed.
5. **Path around part of it.** ∮E·dl still matches −dΦ/dt for the enclosed flux. Drag the path around.
6. **Steady current, then alternating current.** No E at all for steady current. With 60 Hz, E is largest when I passes through zero.

## Questions

**Q1.** A long solenoid of radius 2.0 cm with 2000 turns per meter carries I = (2.0 A)e^(−αt) with α = 200 s⁻¹. Find dB/dt inside at t = 0 and the induced field at 1.0 cm, 2.0 cm and 6.0 cm from the axis. Which way does it circle if B points out of the page?

**Q2.** For the same solenoid at t = 0, find the EMF around a circle of radius 6.0 cm and around a circle of radius 9.0 cm, both centered on the axis. Why are they equal, when E is smaller at 9.0 cm?

**Q3.** A circle of radius 2.0 cm lies entirely outside the solenoid. What is ∮E·dl around it? Is E zero on the circle? Reconcile your two answers.

**Q4.** Explain why no electric potential V can be defined for the induced field around the solenoid. (Hint: what would V be after one trip around a circle enclosing the solenoid?)

**Q5.** The solenoid now carries a 60 Hz current with amplitude 2.0 A. Find the largest induced field 6.0 cm from the axis. At what instants in a cycle is it largest, and at what instants is it zero?

## Common misconceptions

- **"There is no field outside a solenoid, so nothing happens there."** B is zero outside; the induced E is not.
- **"The EMF needs a wire."** The wire only lets the field push charges around; the field is there anyway.
- **"Induced E is like the field of charges."** It has no charges as sources, its lines close on themselves, and ∮E·dl ≠ 0.
- **"Big B means big induced E."** Only the rate of change of flux matters.

## Physics behind the demo

- Ideal long solenoid: B = μ₀nI inside, zero outside, uniform inside at each instant (the current changes slowly enough that the solenoid's own radiation and retardation can be ignored).
- E_φ = −(r/2) dB/dt for r < R and −(R²/2r) dB/dt for r > R, counterclockwise positive with B out of the page.
- ∮E·dl is added up numerically in 720 pieces around the path; Φ is B times the exact overlap area of the path and the solenoid. They agree to better than 1 part in 10⁵ in the tests.
- The field of current induced in the ring and the ring's resistance are left out.
