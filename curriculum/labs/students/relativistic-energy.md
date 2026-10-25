# Bertozzi's Electrons: Kinetic Energy Near c
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §§5.8 and 5.9. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/relativistic-motion.html?setup=bertozzi)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Bertozzi's electrons; Mystery particle (these two use the Electron flight view, the subject of this worksheet); Rocket fires a probe, Rocket fires light and Mystery rocket (the velocity worksheet); Electron, steady force (the momentum worksheet).

**Using the demo.**

- The apparatus follows W. Bertozzi's 1964 experiment (*Am. J. Phys.* 32, 551). An accelerator takes particles from rest through a potential difference $$V$$, from 0.01 to 10 000 MV. A particle of charge $$\pm e$$ gains kinetic energy $$K = eV$$, so $$K$$ in MeV equals $$V$$ in MV; an alpha particle (charge $$2e$$) gains twice as much.
- Two pickups 8.400 m apart time each bunch; the oscilloscope shows the two pulses and the time of flight is given to 0.01 ns.
- A magnet of field $$B$$ then bends the particles into a half circle onto a ruler, which reads the radius $$r$$ to 0.01 cm. The pictures of the bend and of the bunch are not to scale.
- Nothing slows the particles in the tube. Muons are timed as if none decayed in flight.
- Record reading stores the particle, the voltage, the field, the time of flight and the radius. It needs a bunch to have been fired. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- The mystery particle has a charge of magnitude $$e$$ and is chosen afresh each time the setup or New mystery particle is picked.
- Blind hides the graph and every value worked out from the measurements.

</details>

## Goal

Measure the speed of electrons accelerated through voltages from 10 kV to 20 MV, show that their kinetic energy is not $$\tfrac12 mv^2$$, and use the relativistic energy and momentum to identify an unknown particle.

## Background

If kinetic energy were $$\tfrac12 mv^2$$, an electron given $$K = eV$$ would have $$v^2 = 2K/m$$: doubling the voltage would double $$v^2$$, and 0.26 MV would already bring it to c. The relativistic kinetic energy is (§5.9)

$$K = (\gamma - 1)mc^2, \qquad \text{so} \qquad \gamma = 1 + \frac{K}{mc^2}.$$

A plot of $$\gamma$$ against $$K$$ is a straight line with intercept 1 and slope $$1/mc^2$$. The speed comes from the flight time, $$v = L/t$$ with $$L = 8.400$$ m, and $$\gamma = 1/\sqrt{1 - v^2/c^2}$$.

The magnet gives the momentum independently. A charge $$e$$ moving across a field $$B$$ goes round a circle of radius $$r = p/(eB)$$, with the relativistic momentum $$p = \gamma m v$$. In energy units,

$$pc = ecBr = 2.998\ \text{MeV} \times \frac{B}{1\ \text{T}} \times \frac{r}{1\ \text{cm}} .$$

The total energy $$E = K + mc^2$$ and the momentum satisfy $$E^2 = (pc)^2 + (mc^2)^2$$ (§5.9).

## Before the lab

1. For an electron ($$mc^2 = 0.511$$ MeV) accelerated through 1 MV, find $$\gamma$$, $$v$$ and the time to cover 8.400 m. What speed would $$\tfrac12 mv^2 = K$$ give?
2. How long does light take to cover 8.400 m? What is the shortest flight time any particle can show?
3. Show that $$pc = \sqrt{K^2 + 2Kmc^2}$$, and find the bend radius of a 1 MeV electron in a 0.050 T field.
4. A particle has $$\gamma = 1.5$$ after 500 MV. What is its rest energy?

## Safety

None for the virtual apparatus. Real electron beams of MeV energies produce X-rays and are run behind shielding.

## Procedure

**Electrons.** Start with the Bertozzi's electrons setup (electron, magnet at 0.05 T). Fire a bunch and record it at every voltage from 0.01 MV to 20 MV.

**Mystery particle.** Clear the readings and choose the Mystery particle setup (magnet at 0.50 T). Record it at every voltage from 50 MV to 10 000 MV. Send this run to a new copy of the table.

**A known heavy particle.** Do the same for the proton.

## Data

| Reading | Voltage $$V$$ (MV) | Flight time $$t$$ (ns) | Bend radius $$r$$ (cm) | Speed $$v$$ (c) | $$v^2$$ (c²) | $$\gamma$$ | $$pc$$ (MeV) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

## Analysis

1. Graph $$v^2$$ against $$V$$ for the electrons. Does it follow Newton's straight line $$v^2/c^2 = 2K/mc^2$$ at the lowest voltages? What happens above about 0.1 MV?
2. Graph $$\gamma$$ against $$V$$ for the electrons. Find $$mc^2$$ from the slope and compare with 0.511 MeV. Is the intercept 1?
3. For three electron readings (low, middle and high voltage), find $$E = K + mc^2$$ and check $$E^2 - (pc)^2$$ against $$(mc^2)^2$$.
4. Find the mystery particle's rest energy two ways: from the slope of $$\gamma$$ against $$V$$, and from the magnet alone, since $$(pc)^2 = K^2 + 2Kmc^2$$ gives $$mc^2 = \big((pc)^2 - K^2\big)/(2K)$$ for each reading. Which particle is it?
5. Bertozzi's fastest electrons had 15 MeV. Predict their flight time over 8.4 m and compare with your 10 and 20 MV readings.

## Uncertainty

The timer reads to 0.01 ns. For the 20 MV electrons, find how much an error of 0.01 ns changes $$v$$ and then $$\gamma$$, and explain why the time of flight is a poor way to find $$\gamma$$ for the fastest particles, while the bend radius is still good.

## Questions

1. Why can no amount of work bring an electron to c? Use $$K = (\gamma - 1)mc^2$$.
2. Above a few MeV the electrons' flight time hardly changes, while their momentum keeps growing. Explain how both can be true.
3. A proton and an electron are both accelerated through 1 MV. Which is faster, and which has more momentum?
4. In Bertozzi's experiment, the electrons stopped in an aluminum disk and warmed it; the heat confirmed that each electron carried $$K = eV$$. Why was that check needed, if the voltage was known?

## What to hand in

Prelab answers, the table copies with their graphs and fits, the electron and mystery rest energies with uncertainties and your identification, and answers to the questions. Identify simulated data.
