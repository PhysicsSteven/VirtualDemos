# Electromagnetic Waves: Fields, Intensity and Pressure
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§16.1 to 16.5. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/em-waves.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Plane wave; Visible light; Sunlight at Earth; Circular polarization; Radio; Antenna.

**Using the demo.**

- Plane wave shows a wave traveling along $$z$$ in vacuum, with the electric field $$\vec E$$, the magnetic field $$\vec B$$ (drawn as $$c\vec B$$ so it shares the scale of $$\vec E$$) and the Poynting vector $$\vec S$$. The spectrum runs along the bottom.
- You set the frequency $$f$$ (from $$10^5$$ to $$10^{21}$$ Hz) and the amplitude $$E_0$$ of the electric field (from 0.001 V/m to 1 MV/m); both sliders are logarithmic. The polarization controls set the mix of $$x$$ and $$y$$ components.
- The readouts give the wavelength and period, the band, and under Energy and intensity: $$B_0$$, the intensity $$I$$, the mean energy density and the radiation pressure on a surface that absorbs the wave and on one that reflects it.
- Antenna shows the field of an oscillating dipole and its radiation pattern, with the relative intensity in a direction you choose.
- In a plane shows the field of long wires through the page (each carrying a current that goes up and down at one frequency) and of metal you paint, solved on a grid 20 cells to a wavelength, 10 λ by 6 λ. Its setups include One wire, Two wires in phase, Two wires, opposite phase and A wire grid polarizer; E along the wires or E in the page sets the polarization. The probe reads $$\langle E^2\rangle$$, the field squared averaged over the last full period (in the demo's units, the same for every setup), and its distance $$r$$ from the nearest wire in wavelengths. A reading there stores the setup, the polarization, how many periods have run, the probe's place, $$r$$, $$\langle E^2\rangle$$ and $$r\langle E^2\rangle$$; a series of In a plane readings goes to the In a plane table.
- Record reading stores the plane wave's frequency, wavelength, $$E_0$$, $$B_0$$, intensity and pressures (to six significant figures). Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.

**What the demo models.** An exact plane wave in vacuum, with $$c = 1/\sqrt{\mu_0\varepsilon_0}$$ from the CODATA 2022 values of $$\mu_0$$ and $$\varepsilon_0$$ (it differs from the exact $$c = 299\,792\,458$$ m/s by less than one part in $$10^{12}$$). The pressures are for a surface facing the wave. The antenna is an ideal point dipole, much shorter than the wavelength. The drawing is slowed so one period takes 2.5 s. Simulated data.

</details>

## Goal

Check the relations between the electric and magnetic fields of a light wave, its intensity and the pressure it exerts, find $$c$$ and $$\varepsilon_0$$ from them, and apply them to sunlight, a laser pointer and a radio station.

## Background

Maxwell's equations predict waves of $$\vec E$$ and $$\vec B$$ that travel in vacuum at $$c = 1/\sqrt{\mu_0\varepsilon_0}$$ (§16.1). In a plane wave the two fields are at right angles to each other and to the direction of travel, they oscillate in phase, and their sizes are in a fixed ratio (§16.2):

$$E = cB, \qquad \lambda f = c.$$

The wave carries energy. Its intensity, the average power per unit area, is (§16.3)

$$I = \tfrac{1}{2}c\varepsilon_0 E_0^2 = \frac{c B_0^2}{2\mu_0} = \frac{E_0 B_0}{2\mu_0},$$

and the average energy density is $$\langle u\rangle = \tfrac{1}{2}\varepsilon_0 E_0^2 = I/c$$. It also carries momentum: a surface that absorbs the wave feels a radiation pressure $$p = I/c$$, and one that reflects it feels $$p = 2I/c$$ (§16.4).

## Before the lab

1. Sunlight at Earth has an intensity of 1361 W/m². Find $$E_0$$ and $$B_0$$, and compare $$B_0$$ with Earth's magnetic field (about 50 μT).
2. Microwaves at 10 GHz and visible light at about $$5\times10^{14}$$ Hz, 50,000 times the frequency, both have $$E_0 = 1000$$ V/m. Does the visible light carry more intensity than the microwaves, less, or the same? Explain your guess.

## Safety

This is a virtual activity. In a real lab, never look into a laser beam, even a weak one, and keep away from the antennas of working transmitters.

## Procedure

**Part 1: one frequency.** Start from the Plane wave setup (10 GHz). Move the Amplitude E₀ slider (logarithmic) and press Record reading at five amplitudes $$E_0$$ spread between about 100 V/m and 1000 V/m (for example 100, 300, 500, 700 and 1000 V/m).

**Part 2: a different frequency.** Without clearing the readings, move the Frequency f slider (in Frequency and wavelength) to visible light (about $$5\times10^{14}$$ Hz) and record two more readings, at about 200 V/m and 1000 V/m. Press Export to worksheet and fill in the $$E_0^2$$ column.

**Part 3: real sources.** Press Clear in the Readings section. Pick the Sunlight at Earth, Visible light (a laser pointer) and Radio setups in turn and record one reading for each. Press Export to worksheet; they go into a new copy of the table. Fill in $$E_0^2$$.

**Part 4: an antenna.** Pick the Antenna setup. Set the Direction θ from the dipole axis slider (in the Antenna section) and read the Far field intensity readout, $$I(\theta)/I_{max}$$, at the angles $$\theta$$ = 0°, 30°, 45°, 60° and 90° from the dipole's axis, and write the values in your answer to Analysis 5.

**Part 5: waves in a plane.** Press Clear in the Readings section, press In a plane above the picture, and choose One wire and E along the wires. Let the waves run for at least 10 periods, so they fill the picture. Press the Probe tool and tap the picture straight out to the right of the wire until the Probe: distance r to the nearest wire readout shows each of $$r$$ = 1, 2, 3 and 4 λ, pressing Record reading at each. Then record at the probe's starting place in Two wires in phase (let the waves run 10 periods again after switching). Press Export to worksheet; this series goes to the In a plane table.

## Data

| Reading | Frequency $$f$$ (Hz) | Amplitude $$E_0$$ (V/m) | $$B_0$$ (T) | $$E_0^2$$ (V²/m²) | Intensity $$I$$ (W/m²) | Pressure, absorbed (Pa) | Pressure, reflected (Pa) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Use one copy of the table for Parts 1 and 2 together and one for Part 3, and say which setup each Part 3 row is.

**In a plane.** Part 5.

| Reading | Setup | E direction | Periods run | Distance from the nearest wire $$r$$ (λ) | ⟨E²⟩ | r⟨E²⟩ (λ) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

## Analysis

1. Graph $$B_0$$ (vertical) against $$E_0$$ (horizontal) for Parts 1 and 2. Is it a straight line through the origin? From the slope find $$c$$ and compare it with 2.998 × 10⁸ m/s.
2. Graph $$I$$ (vertical) against $$E_0^2$$ (horizontal). From the slope and your value of $$c$$ find $$\varepsilon_0$$, then $$\mu_0 = 1/(\varepsilon_0 c^2)$$, and compare both with the textbook's values.
3. For the sunlight row, how does the reflected pressure compare with the absorbed one? Use it to find the force of sunlight on a perfectly reflecting solar sail 1 km on a side. What would be the acceleration of a 1000 kg spacecraft from it?
4. For the laser pointer and the radio rows, compare $$E_0$$ with that of sunlight. Why can a 5 mW laser pointer be brighter than sunlight while a 50 kW station gives a field thousands of times weaker?
5. Write down your Part 4 readings and compare each with $$\sin^2\theta$$. In which direction does the antenna send nothing, and in which does it send the most?
6. Part 5: graph $$\langle E^2\rangle$$ against $$1/r$$ for the one wire readings. Is $$r\langle E^2\rangle$$ the same at every distance? Explain it with the energy a long wire sends out spreading over ever larger circles, and say how a point source's intensity would fall instead. Compare the two wires in phase with one wire at the same distance (read it off your graph; what factor do you expect when two equal waves arrive in step?).

## Questions

1. Put your 1000 V/m readings at 10 GHz and in visible light side by side: how do their $$I$$ and $$B_0$$ compare, and how does that square with Before the lab 2? Use $$I = \tfrac{1}{2}c\varepsilon_0 E_0^2$$ and $$E = cB$$ to say what the frequency does and does not change. Where do the visible light rows fall in Analysis 1, and why?

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The demo's values are exact for its model, so the scatter about your lines comes only from the rounding of the readings. Report the slope and intercept of the fits in Analysis 1 and 2 with their standard errors, and say whether your $$c$$ agrees with 2.998 × 10⁸ m/s within its standard error. Use the standard error of the slope in Analysis 1 to say to how many significant figures your $$c$$ is known. In a real measurement of radiation pressure (a Nichols radiometer), what effects would make the measured force differ from $$I/c$$?

## What to hand in

Prelab answers, both table copies with their graphs and fits, your values of $$c$$, $$\varepsilon_0$$ and $$\mu_0$$ with comparisons, the solar sail result, the antenna readings, the In a plane table with its graph, and answers to the questions (and to Uncertainty, if assigned). Identify simulated data.
