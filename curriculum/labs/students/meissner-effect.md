# The Meissner Effect and the Critical Field
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §9.8. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/superconductors.html?setup=warm)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Lead, field pushed out; Lead above T<sub>c</sub>; Perfect conductor; Critical field of tin; Mystery metal.

**Using the demo.**

- The sample is a sphere 10.00 mm across, in a cryostat inside a long solenoid. Choose the metal, the temperature (0.30 to 10.00 K, to 0.01 K) and the applied field (0 to 100 mT, to 0.05 mT). The number boxes under the sliders take exact values.
- The magnetometer reads the sphere's magnetic moment $$m$$ in mA·m², and the Hall probe the field just outside its equator. The picture draws the field lines at equal steps of magnetic flux, so where they crowd the field is strong.
- Critical temperatures and fields are from the textbook's Table 9.5, with $$B_c(T)$$ from its Equation 9.39. The sample is an ideal type I superconductor in equilibrium: its state depends only on $$T$$ and $$B$$, not on the order you change them. Real samples show some hysteresis.
- "Perfect conductor" is an imaginary metal whose only change below $$T_c$$ is zero resistance. It keeps whatever flux it held when it was cooled through $$T_c$$.
- The graph shows the applied field against temperature, with the critical field curve, or the moment against the applied field at the present temperature. The curves are hidden for the mystery metal and in Blind (Lab section).
- Record reading stores the sample, the temperature, the applied field, the moment and the equator field. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Show that a superconductor does more than lose its resistance: it pushes a magnetic field out. Then measure how the critical field depends on temperature, for lead and for a mystery metal.

## Background

Below its critical temperature $$T_c$$ a superconductor has zero resistance, and in a magnetic field weaker than its critical field $$B_c$$ the field inside it is zero: it is a perfect diamagnet. A sample cooled through $$T_c$$ in a field pushes that field out. This is the Meissner effect (§9.8). Zero resistance alone would not do this: with no resistance the induced emf around any loop in the metal must be zero, so by Faraday's law the flux through it cannot change, and a field present at cooling would stay trapped.

The critical field falls to zero at $$T_c$$ (§9.8, Equation 9.39):

$$B_c(T) = B_c(0)\left[1 - \left(\frac{T}{T_c}\right)^2\right].$$

A field above $$B_c$$ makes the metal normal again.

The field that is pushed out has to go around the sample, so it crowds at the sides. For a sphere in a uniform applied field $$B$$, the field just outside the equator is $$\tfrac{3}{2}B$$. The field therefore starts to get in when $$\tfrac{3}{2}B$$ reaches $$B_c$$, at $$B = \tfrac{2}{3}B_c$$, and the whole sphere is normal at $$B = B_c$$. While the field is pushed out, currents in the sphere's surface give it a magnetic moment opposite to the field,

$$m = -\frac{2\pi R^3}{\mu_0}\,B,$$

where $$R$$ is the sphere's radius. When the sphere is normal, its moment is zero.

## Before the lab

1. Use Table 9.5 ($$T_c = 7.2$$ K and $$B_c(0) = 0.080$$ T for lead) to find the critical field of lead at 4.20 K, in mT.
2. Predict the moment of the lead sphere ($$R = 5.00$$ mm) at 4.20 K in an applied field of 20.00 mT, and the field at its equator.
3. A sphere is cooled through $$T_c$$ in a field of 20 mT, then the applied field is switched off. Predict the field inside it if it is (a) a perfect conductor, (b) a superconductor.
4. Which graph of the critical field gives a straight line: $$B_c$$ against $$T$$, or $$B_c$$ against $$T^2$$? Write its slope and intercept in terms of $$T_c$$ and $$B_c(0)$$.

## Safety

No hazards in the virtual lab. In a real one, liquid helium and liquid nitrogen cause cold burns and can suffocate in a closed room as they boil off.

## Procedure

**Cooling in a field.** Click Lead above T<sub>c</sub> under Setups (9.00 K, 20.00 mT) and press Record reading. Type 7.10 and then 4.20 in turn in the number box under the Temperature T slider, pressing Record reading at each. Then type 0 in the box under Applied field B and record once more.

**A perfect conductor.** Press Export to worksheet, then Clear. Click Perfect conductor under Setups (it starts at 9.00 K and 20.00 mT) and repeat with 9.00 K, 4.20 K and zero field only. Look at the field lines at each step.

**Moment against field.** Export and Clear. Click Lead, field pushed out under Setups (lead, Superconductor, 4.20 K). Type applied fields from 0 to 60 mT in steps of 5 mT in the Applied field B box, with extra readings every 2.5 mT between 30 and 55 mT, and press Record reading at each. The run goes in three copies of the table, so each part can be fitted on its own: at the first field where the State readout says intermediate, press Export to worksheet and Clear before you record it; do the same at the first field where the moment reads 0 (State: normal metal).

**Critical field against temperature.** Export and Clear. For each of 1.00, 3.00, 5.00, 6.00 and 7.00 K (typed in the Temperature T box), change the Applied field B box in 0.05 mT steps to find the smallest field at which Magnetometer: moment m reads 0 and State reads normal metal, and press Record reading there.

**Mystery metal.** Export, Clear and click Mystery metal under Setups (choosing it again, or pressing New mystery sample, draws a new metal, so stay with one). First find roughly where its superconductivity ends: type 0.05 in the Applied field B box and raise the temperature until the moment reaches zero, which happens just below $$T_c$$. Then find its critical field, as for lead, at five temperatures spread evenly between 0.30 K and that temperature, recording each. Press Export to worksheet at the end.

## Data

| Reading | Sample | Temperature $$T$$ (K) | Applied field $$B$$ (mT) | Moment $$m$$ (mA·m²) | Field at the equator (mT) | $$T^2$$ (K²) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

## Analysis

1. Compare the last two readings (4.20 K in 20 mT, then in zero field) for the superconductor and the perfect conductor. Explain each moment and equator field from what the field lines did, and from your answer to Before the lab 3.
2. For the moment against field at 4.20 K, fit $$m$$ against $$B$$ over the straight part. Compare the slope with $$-2\pi R^3/\mu_0$$, and find the equator field there as a multiple of $$B$$.
3. Find the field where the straight part ends and the field where the moment reaches zero. Show that their ratio is 2/3, and read the equator field between the two. Explain these with the field lines.
4. Fill in the $$T^2$$ column for your critical field readings for lead and graph $$B_c$$ against $$T^2$$. From the fit, find $$B_c(0)$$ and $$T_c$$, and compare them with Table 9.5.
5. Do the same for the mystery metal. Which metal in Table 9.5 is it?

## Uncertainty

The field is set to 0.05 mT and the temperature to 0.01 K, and the instruments have no noise, so your critical fields are good to about half a field step. Estimate what that does to $$B_c(0)$$ and $$T_c$$ from your fit. Table 9.5 gives each metal to two or three figures, and real metals follow Equation 9.39 only to within a few percent; impurities, strain and the sample's shape all shift a measured transition.

## Questions

1. A small magnet floats above a superconducting disk. Use the Meissner effect to explain the force that holds it up.
2. A long lead wire of radius 0.50 mm is held at 4.20 K. The field at its surface is $$\mu_0 I/(2\pi r)$$. What is the largest current it can carry and stay superconducting?

## What to hand in

Prelab answers, the table copies with their graphs and fits, your comparison of the superconductor and the perfect conductor, $$B_c(0)$$ and $$T_c$$ for lead and the mystery metal with comparisons to Table 9.5, and answers to the questions. Identify simulated data.
