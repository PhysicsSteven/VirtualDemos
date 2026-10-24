# The Stern–Gerlach Experiment
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §§8.2 and 8.3. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/magnetic-moments.html?setup=sg1922)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Stern and Gerlach, 1922; Silver at one speed; Mystery atom (these three use the Stern–Gerlach view, the subject of this worksheet); Orbit as a current loop; 3d electron in a field (the orbital magnetic moment worksheet); Zeeman: cadmium red line (the Zeeman effect worksheet).

**Using the demo.**

- Atoms leave an oven through two slits that shape the beam into a ribbon 0.030 mm high and 0.80 mm long. They cross a magnet 3.50 cm long, drift a distance $$L_2$$ that you choose, and stick to a glass screen.
- The magnet's field changes steadily across the beam, at a gradient dB/dz that is the same everywhere in the gap.
- A hot oven fills every magnetic sublevel $$m_J$$ of the atom equally. Each sublevel has $$\mu_z = -g_J m_J \mu_\mathrm{B}$$, with $$g_J$$ from the Landé formula and the electron's g factor 2.00232. Ground levels are from the NIST Atomic Spectra Database, and masses are standard atomic weights.
- Without the velocity selector the atoms have the spread of speeds of an effusive beam, and the reading's speed is the one at which the deposit peaks, $$v^2 = 6kT/M$$. With the selector on, every atom has the speed you choose.
- Two of the atoms in the list are imagined, for comparison: an l = 1 atom with no spin, and classical magnets of moment $$\mu_\mathrm{B}$$ pointing every way.
- Not modelled: the field's change along the slit (which gave the 1922 spots their lip shape), collisions, gravity (a fall of a few micrometres at most at the worksheet's settings, 3 μm at 300 m/s with a 20 cm drift, the same for every spot) and the moment of the nucleus (about 1000 times smaller).
- The lower panel shows the face of the screen and the count of atoms along z. Drag the cursor, or use the arrow keys (Shift for bigger steps), to measure where the spots are.
- Record reading stores the atoms and their mass, the gradient, the oven temperature, the speed, the drift, the number of atoms on the screen and the cursor position, and also the spot positions unless Blind is on. Export to worksheet sends the readings to the Data table below. Clear starts a new series, which goes into a new copy of the table.
- Blind hides the computed spot positions; with it on you measure them with the cursor.

</details>

## Goal

Send a beam of silver atoms through a nonuniform magnetic field, see that it splits into two, use the deflection to measure the atom's magnetic moment, and work out the angular momentum and g factor of an unknown atom from the pattern on the screen.

## Background

A magnetic moment in a uniform field feels a torque but no net force. In a field whose strength changes along z, it feels a force along z (§8.3):

$$F_z = \mu_z\frac{dB}{dz} .$$

An atom of mass M and speed v spends a time $$L_1/v$$ in a magnet of length $$L_1$$, and then drifts a further $$L_2$$ to the screen. With a steady force inside the magnet, it lands a distance

$$z = \frac{\mu_z}{M}\frac{dB}{dz}\,\frac{L_1}{v^2}\left(\frac{L_1}{2} + L_2\right)$$

from where it would have landed with no field. In the demo $$L_1 = 3.50$$ cm.

Classically the moments point every way, so $$\mu_z$$ takes every value between $$-\mu$$ and $$+\mu$$ and the beam smears into one band. Quantum mechanically the component is quantized. An atom with total angular momentum quantum number J has $$2J + 1$$ sublevels, $$m_J = -J, \dots, +J$$, and

$$\mu_z = -g_J\,m_J\,\mu_\mathrm{B},$$

where $$g_J$$ is the atom's g factor. An orbital angular momentum alone gives $$2l + 1$$ spots, always an odd number. Silver's 47th electron is an s electron (l = 0), so silver has only the electron's spin, with $$s = \tfrac{1}{2}$$, $$m_s = \pm\tfrac{1}{2}$$ and $$g_s = 2.0023$$.

## Before the lab

1. Silver atoms (M = 107.87 u) at 600 m/s cross a gradient of 500 T/m, with $$L_2 = 20$$ cm. Predict how far from the centre each spot lands, taking $$\mu_z = \pm\mu_\mathrm{B}$$.
2. How many spots do you expect for an atom with J = 1/2? J = 2? J = 4? And for classical magnets?
3. Why must the field be nonuniform to separate the atoms?
4. Atoms in an oven at 1320 K have kT = 0.114 eV, while $$\mu_\mathrm{B}B$$ at 1 T is 0.058 meV. Why should the spots hold equal numbers of atoms?

## Safety

No hazards in the virtual lab. A real Stern–Gerlach apparatus has a hot oven and a vacuum chamber.

## Procedure

**The 1922 experiment.** Start with Stern and Gerlach, 1922, start the beam and let the screen fill. Sketch what you see. Then do the same for the two imagined atoms, the l = 1 atom with no spin and the classical magnets, and sketch those too.

**Deflection and field gradient.** Pick Silver at one speed and turn Blind on. For each gradient from 250 to 1500 T/m in steps of 250 T/m, run the beam until the spots are clear and record the position of the centre of the upper spot.

**Deflection and speed.** Clear the readings. At 500 T/m, record the centre of the upper spot for speeds of 300, 400, 600, 800, 1000 and 1500 m/s. Send this run to a new copy of the table.

**A mystery atom.** Clear again and pick Mystery atom. Count the spots, and record the centre of every spot, from the top to the bottom. Send this run to a third copy of the table.

## Data

| Reading | Atoms | Mass M (u) | Field gradient dB/dz (T/m) | Speed v (m/s) | Drift L₂ (cm) | Cursor z (mm) | 1/v² (s²/m²) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Fill in the last column yourself for the speed run.

## Analysis

1. Compare your sketches. Which pattern did silver make? What does an even number of spots rule out?
2. Graph z against the gradient for the upper spot of silver. Use the slope and the formula in the Background to find $$\mu_z$$, and express it in units of $$\mu_\mathrm{B}$$. Compare it with $$\tfrac{1}{2}g_s\mu_\mathrm{B}$$.
3. Graph z against $$1/v^2$$ for the speed run. Is it a straight line through the origin? Find $$\mu_z$$ again from its slope.
4. For the mystery atom, find J from the number of spots. Find the spacing between neighbouring spots, and from it the change in $$\mu_z$$ from one $$m_J$$ to the next. That change is $$g_J\mu_\mathrm{B}$$: find $$g_J$$.
5. Use the mystery atom's mass to name it. Look up its ground level in the NIST Atomic Spectra Database and check your J and $$g_J$$ against it.

## Uncertainty

The beam has a height of 0.030 mm and every atom at one speed lands in the same place, so each spot is about as wide as the slit. Estimate how well you can set the cursor on a spot's centre, and carry that through to $$\mu_z$$ and $$g_J$$. Without the selector, the spread of speeds smears the spots along z; say why that made the 1922 experiment hard to measure precisely.

## Questions

1. Silver has l = 0 for its outer electron, so it has no orbital moment. Where does its moment come from?
2. Two spots can't come from an orbital angular momentum. Why not?
3. Why do Stern–Gerlach experiments use neutral atoms rather than free electrons? Think about the force a magnetic field puts on a moving charge.
4. The nucleus of silver also has a magnetic moment, about 1000 times smaller than the electron's. What would it do to the spots?

## What to hand in

Prelab answers, your sketches, the three table copies with their graphs and fits, $$\mu_z$$ for silver from both runs with uncertainties, J, $$g_J$$ and the name of the mystery atom with your check against NIST, and answers to the questions. Identify simulated data.
