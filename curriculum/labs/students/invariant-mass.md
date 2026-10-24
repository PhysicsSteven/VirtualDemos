# Weighing a Particle You Cannot See
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §§11.2 and 11.4. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/particles.html?setup=lambdaV)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** A Λ decay (practice); Mystery V events (these two use the Detector view, the subject of this worksheet); Standard Model (the Particles view); Neutron decay; Making strange particles; Making an upsilon (the Reactions worksheet); A proton from quarks; Omega minus (the Quark model worksheet).

**Using the demo.**

- The Detector view shows simulated pictures from a liquid hydrogen bubble chamber, with a window 1 m across, in a uniform magnetic field into the page. A π⁻ beam enters from the left. Where one beam track stops, the reaction π⁻ + p → K⁰ + Λ⁰ took place; the neutral particles leave no tracks, and each may decay a few centimetres away into two charged particles that make a V.
- Fit a circle: choose Track + or Track −, then click three or more points along that track. A least squares circle is drawn through your points and its radius shown. More points spread along the track give a better fit. Undo point removes the last one.
- Measure an angle: click the vertex of the V, then a point on each track. Pick points close to the vertex, where each track still points along its starting direction.
- Zoom with the buttons or the mouse wheel and drag to move around. Arrow keys move a cross and Enter places a point there.
- Each event number always gives the same event. Bubble scatter moves each bubble at random by the chosen amount about the true path. Label the tracks names each track (for practice).
- Record reading stores the event, B, both radii and the opening angle. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides the momenta and invariant masses the demo works out from your measurements.

</details>

## Goal

Measure the curvature of the two tracks of a V in a bubble chamber and the angle between them, find each particle's momentum, and work out the mass of the neutral particle that decayed. Use that mass to tell a K⁰ from a Λ⁰.

## Background

A particle of charge $$q$$ and momentum $$p$$ moving at right angles to a magnetic field $$B$$ travels in a circle of radius $$r = p/(qB)$$, at any speed. For a particle of charge $$\pm e$$, with $$p$$ in GeV/c, $$B$$ in tesla and $$r$$ in metres, this is the book's Eq. 11.2:

$$p = 0.3\,B\,r.$$

The exact factor is 0.2998. In the units of this lab, $$p$$ in MeV/c and $$r$$ in centimetres, $$p = 2.998\,B\,r$$.

A neutral particle of mass $$M$$ that decays into two particles conserves energy and momentum. If the two have momenta $$p_1$$ and $$p_2$$ at an angle $$\theta$$ to each other, and masses $$m_1$$ and $$m_2$$, then $$E_i = \sqrt{p_i^2c^2 + m_i^2c^4}$$ and

$$M^2c^4 = (E_1 + E_2)^2 - \left(p_1^2 + p_2^2 + 2p_1p_2\cos\theta\right)c^2.$$

This **invariant mass** is the same in every frame (§11.4). The tracks give $$p_1$$, $$p_2$$ and $$\theta$$, but not $$m_1$$ and $$m_2$$: you have to guess which particles made them. Two neutral particles make V's in this chamber: the K⁰ (seen as the short lived K⁰_S) decays to π⁺ π⁻, and the Λ⁰ decays to p π⁻ (§11.2). Only the right guess gives the mass of a real particle.

Strangeness is kept by the strong interaction, so the strong reaction π⁻ + p makes strange particles in pairs (associated production). Each then decays by the weak interaction, which changes strangeness, so they live long enough (about 10⁻¹⁰ s) to fly a few centimetres.

## Before the lab

1. A positive track has a radius of curvature of 50.0 cm in a field of 1.5 T. Find its momentum in MeV/c.
2. A Λ⁰ at rest decays to a proton and a π⁻. Use conservation of energy and momentum, with the masses in the Particles view, to find the momentum of each. What radius would each track have in 1.5 T?
3. Show that the invariant mass formula above gives $$M = m_1 + m_2$$ when the two particles have no momentum relative to each other.
4. The beam is π⁻ at 1.20 GeV/c on protons at rest. Find the total energy available in the centre of mass frame, and check that it is enough to make a K⁰ and a Λ⁰.

## Safety

No hazards in the virtual lab.

## Procedure

**Practice event.** Start with the A Λ decay (practice) setup, which labels the tracks and has no bubble scatter. Fit a circle to the proton track and to the π⁻ track, with at least five points spread along each, and measure the opening angle at the vertex. Record a reading. Then clear the marks and measure the same event twice more, from scratch.

**Mystery events.** Clear the readings and pick Mystery V events (bubble scatter 0.3 mm, no labels). For events 1 to 12, measure every V you can find: both tracks and the opening angle. Note which event each V comes from; an event can have two V's, or one.

**A different field.** Set B = 1.0 T, go back to one of your mystery events, and measure its V again. Send this reading to a new copy of the table.

## Data

| Reading | Event | B (T) | r₊ (cm) | r₋ (cm) | Opening angle θ (°) | p₊ (MeV/c) | p₋ (MeV/c) | M if π⁺π⁻ (MeV/c²) | M if pπ⁻ (MeV/c²) | Parent |
|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |

r₊ and r₋ are the radii of the positive and negative tracks. For the masses, use 139.57 MeV/c² for a pion and 938.27 MeV/c² for a proton.

## Analysis

1. Work out $$p_+$$ and $$p_-$$ for every reading, then the invariant mass with each guess: π⁺π⁻, and p π⁻ (the positive track as the proton).
2. Plot the mass with the p π⁻ guess against the mass with the π⁺π⁻ guess. Describe the two clusters of points, and name the parent for each reading.
3. Find the mean and standard deviation of the Λ⁰ masses and of the K⁰ masses. Compare each mean with the Particle Data Group values, 1115.68 MeV/c² and 497.61 MeV/c².
4. In the Λ⁰ decays, which track carries more momentum, the proton or the pion? Explain why, using what you found in Before the lab question 2.
5. For one V, find the momentum of the parent, $$\sqrt{p_+^2 + p_-^2 + 2p_+p_-\cos\theta}$$. Then find its speed and the time it took to fly from the end of the beam track to the V, in its own frame.
6. Compare the field run with your reading of the same V at 1.5 T. What changed, and what did not?

## Uncertainty

Use the spread of your three measurements of the practice event to estimate the uncertainty in each radius and in the angle. How large an uncertainty in the Λ⁰ mass does that give? Which measurement matters most? Is the scatter of your mystery Λ⁰ masses about what you expected?

## Questions

1. Why do the two tracks of a V curve in opposite directions? Which way does a positive particle curve when the field points into the page?
2. Why does a K⁰ or a Λ⁰ leave no track, and how do you know it was there?
3. Why is the strange particle made in π⁻ + p always made with another strange particle?
4. A π⁺π⁻ guess for a Λ⁰ decay can, by chance, give a mass close to the K⁰ mass. What else in the picture could help you tell the two apart?
5. The Large Hadron Collider bends protons of 7 TeV/c with magnets of 8.33 T. Find the radius of their path, and compare it with the ring's circumference of 27 km.

## What to hand in

Prelab answers, the data table copies with your momenta and masses, the graph, your mean masses with their uncertainties, and answers to the questions. Identify simulated data.
