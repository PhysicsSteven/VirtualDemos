---
title: Spacetime Diagrams
level: Modern physics
time: 20 to 35 minutes
---
## What students should come away with

- An event is a point (ct, x). Light travels on 45° lines in every frame; the light cone of an event separates what it can influence (its future cone) from what it cannot.
- A moving frame S′ has tilted axes: the ct′ axis is its worldline, and the x′ axis, its line of simultaneity, tilts toward the light line by the same angle, tan θ = β. So events simultaneous in S are not simultaneous in S′.
- Time dilation and length contraction follow from the Lorentz transformation and are reciprocal: each frame finds the other's clocks slow and rods short, because the frames disagree about which events are simultaneous.
- The interval Δs² = (cΔt)² − Δx² is the same in every frame. Timelike pairs have an order all observers agree on; spacelike pairs do not, so no signal can connect them.
- In the twin paradox the traveler's worldline is bent; the elapsed proper time along it is shorter. The turnaround, not the motion, breaks the symmetry.

## Before class

Students should know the postulates of special relativity and γ = 1/√(1 − β²); the Lorentz transformation is printed in the header. Units are years and light years, so c = 1 and light lines are at 45°. Each **Scenarios** button loads events and worldlines, with a hint. Click empty space to add an event, drag events to move them (they snap to quarter units), and toggle **Both frames** and **Moving frame's view** (or press M) to redraw the diagram in S′. The **Speed β = v/c** slider sets S′.

## Running it in class

1. **Light cone basics.** O and A are selected: A is in O's future cone, timelike, proper time 3.71 yr. To compare B or C with O, click O and then the other event (the readouts always compare the last two events clicked). B is spacelike from O, C is on O's cone (lightlike), D is in O's past. Drag A across the cone and watch **Separation** change.
2. **Relativity of simultaneity.** Ask Q1 first. A and B are simultaneous on the platform (ct = 0). The red dashed lines of simultaneity through A and B are parallel to the x′ axis and do not coincide: on the train B happens first. Slide β to 0 and back.
3. **Time dilation.** At R the rocket clock reads 4 yr while the lab says ct = 5 yr. Then press **Moving frame's view**: now the home ticks are spread out. Ask Q3.
4. **Length contraction.** A rod 5 ly long in S′ spans 4 ly when both ends are marked at one S time (blue) and 5 ly when marked at one S′ time (red). Ask Q4.
5. **Twin paradox.** Home ages 10 yr, the traveler 6 yr at β = 0.8. The traveler's purple lines of simultaneity jump from home time 1.8 yr to 8.2 yr at the turnaround. Try β = 0.6 (Q5).
6. **Causality.** A and B are spacelike. Slide β slowly through 0.25 and watch the order flip in the verdict. Then click A and C: timelike, and no β changes their order (Q6).

## Questions

**Q1.** Predict: lightning strikes the front and back of a moving train at the same time according to an observer on the platform, standing midway between the strikes. A passenger sits at the middle of the train. Does the passenger find that the strikes were simultaneous? If not, which came first? The passenger knows the speed of light and corrects for the travel time.

**Q2.** In **Relativity of simultaneity**, the strikes are A = (ct, x) = (0, −4 ly) and B = (0, +4 ly), and the train moves at β = 0.5. Use the Lorentz transformation to find ct′ for each strike. How long before A does B happen on the train? Check with the **In S′: (ct′, x′)** readout.

**Q3.** In **Time dilation** (β = 0.6) the rocket's clock reads 8 years after 10 years of lab time. Explain how the rocket crew can, at the same time, correctly say that the home clock runs slow. How much does the home clock advance during the crew's first 8 years, according to the crew? Use **Moving frame's view** to check.

**Q4.** In **Length contraction** the rod is 5 ly long in S′ and spans 4 ly in S. Which is the rod's "real" length? Explain, using the two marked segments, why measuring a moving rod depends on simultaneity.

**Q5.** In **Twin paradox**, set β = 0.6 with a 10 year trip on the home clock. How much does the traveler age? Using the traveler's lines of simultaneity, find the home times just before and just after the turnaround. Check with the **Traveling twin** readout and the label on the diagram.

**Q6.** In **Causality**, find Δs² for A = (1, −2) and B = (2, 2), and for A and C = (5, −1). Explain why the order of A and B can be reversed by an observer moving faster than 0.25c, but the order of A and C cannot be reversed by anyone. What would go wrong if a signal could travel from A to B?

**Q7.** Use the demo to check: select one event, note the **s² from origin** readout, then sweep β from −0.95 to 0.95. What happens to the event's coordinates in S′, and to s²? On the diagram, along what curve does the event appear to move in **Moving frame's view**?

## Common misconceptions

- **"Time dilation means the moving clock really runs slow."** Each frame finds the other's clock slow. Neither clock is faulty; they measure time along different worldlines, and comparing distant clocks needs a choice of simultaneity.
- **"The traveling twin is younger because acceleration slows clocks."** Here the turnaround is instantaneous and adds nothing to the traveler's clock. The bent worldline simply has less proper time; at the turn the traveler changes frames, and the home time the traveler calls "now" jumps.
- **"Length contraction is an optical illusion caused by light travel time."** Coordinates already correct for travel time; contraction comes from marking the two ends at events simultaneous in the observer's frame. Simultaneity itself depends on the frame.
- **"Every pair of events has a definite order."** Only timelike and lightlike pairs do; spacelike pairs can be in either order.

## Physics behind the demo

- Exact special relativity in one space dimension with c = 1: every coordinate comes from t′ = γ(t − βx), x′ = γ(x − βt). The S′ axes are drawn at tan θ = |β| from the S axes; **Moving frame's view** redraws everything with a boost by the rapidity tanh⁻¹β, so S′ axes become square and S axes tilt.
- For the last two events selected the rail gives Δs², the separation type and the proper time or proper distance. Clocks show proper time τ = ∫√(dt² − dx²), one tick per year on that clock.
- The faint hyperbolas are (ct)² − x² = ±1, ±4, ±9, …; a boost moves each event along its hyperbola, so the primed ticks look stretched.
- The twin turns around instantaneously at half the home time. Events snap to a grid of 0.25 in whichever frame the diagram is drawn.

## Going further

- Homework: a muon (proper lifetime 2.2 µs) moves at β = 0.995. Draw its worldline and find how far it travels in the lab before decaying; then describe the trip in the muon's frame.
