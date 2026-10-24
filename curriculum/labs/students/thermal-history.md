# The Thermal History of the Universe
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §§11.6 and 11.7. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/early-universe.html?setup=thRecomb)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Proton pairs stop; Atoms form (these two use the Thermal history view, the subject of this worksheet); Glow at decoupling; Microwave sky today (the Microwave background view, used at the end of this worksheet); Hubble's law today; Half the size; Matter only universe (the Hubble's law worksheet); First three minutes (the Helium worksheet).

**Using the demo.**

- The Thermal history view plots the temperature $$T$$ of the radiation that fills the universe against the time since the Big Bang, both on logarithmic scales. The right axis gives the same temperature as the typical particle energy $$kT$$ in eV.
- Set the time with the slider (it moves in steps of a hundredth of a power of ten). The readouts give the time, $$T$$, $$kT$$, the redshift $$z$$, the scale factor, and the era as the book names it.
- The shaded bands are the book's eras, with its approximate times. The red lines mark the temperatures at which $$kT$$ equals the rest energy $$mc^2$$ of a particle.
- The graph below shows $$g_*$$, a count of how many kinds of particles share the energy at each time.
- The Microwave background view shows the spectrum of the radiation at any redshift, with today's spectrum and the COBE satellite's measurements.
- Record reading stores the time, $$T$$ and $$kT$$. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.
- Blind hides the lines at $$kT = mc^2$$ and, in the Microwave background view, the peak and the computed values.

</details>

## Goal

Follow the temperature of the universe from the first instant to today, find how it falls with time while radiation rules and while matter rules, and find when the universe became too cool to make each kind of particle.

## Background

As the universe expands, every wavelength of the radiation in it stretches by the same factor as distances. The radiation stays a blackbody, but cooler:

$$T = T_0\,(1 + z) = \frac{T_0}{a},$$

with $$T_0$$ = 2.7255 K today (§11.7). The typical energy of a particle at temperature $$T$$ is about $$kT$$, with $$k = 8.617 \times 10^{-5}$$ eV/K. A pair of particles of mass $$m$$ can be made from radiation only while $$kT$$ is comparable with $$mc^2$$ or more, so each kind of particle has a threshold temperature

$$T \approx \frac{mc^2}{k}.$$

Below it, the pairs annihilate and are not replaced.

How fast does $$T$$ fall with time? The Friedmann equation says the expansion rate is set by the energy density. While radiation dominates, $$a \propto t^{1/2}$$, and while matter dominates, $$a \propto t^{2/3}$$. So $$T$$ is a power law in $$t$$ in each era, with a different power.

About 380 000 years after the Big Bang the universe had cooled to about 3000 K, and electrons and nuclei combined into atoms. The universe became transparent, and the radiation of that moment, stretched by a factor of about 1100, is the cosmic microwave background we see today (§11.7).

## Before the lab

1. Find the threshold temperature $$T = mc^2/k$$ for protons ($$mc^2$$ = 938.3 MeV) and for electrons (0.511 MeV).
2. The book says photons decoupled at about 3000 K. What is $$kT$$ there in eV? Compare it with the 13.6 eV needed to ionize hydrogen.
3. Show that if $$a \propto t^{n}$$ then $$T \propto t^{-n}$$. What slope do you expect on a graph of $$\log_{10} T$$ against $$\log_{10} t$$ in the radiation era and in the matter era?
4. By what factor has the number of photons in each cubic centimeter fallen since decoupling at $$z$$ = 1090?

## Safety

No hazards in the virtual lab.

## Procedure

**The whole history.** In the Thermal history view, record a reading at $$t$$ = 10⁻⁴⁰ s and at every fifth power of ten after it up to 10¹⁰ s (10⁻³⁵ s, 10⁻³⁰ s, ...), then at every power of ten from 10¹¹ s to 10¹⁷ s, and finally at today (the right end of the slider).

**Landmarks.** Clear the readings and record at 1 s, at about 3 minutes (the slider step nearest 180 s), at the Proton pairs stop setup and at the Atoms form setup. Send these to a new copy of the table.

**Thresholds.** With the lines at $$kT = mc^2$$ showing, find the time at which the temperature falls to the electron's threshold and to the proton's, and write them down.

**The microwave background.** Switch to the Microwave background view. Read the peak frequency of the spectrum at $$z$$ = 1090 and at $$z$$ = 0 from the graph. Then turn Blind off and write down the peak wavelength, the photon density and the time since the Big Bang at both redshifts.

## Data

| Reading | Time t (s) | Temperature T (K) | kT (eV) | log₁₀ t | log₁₀ T |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. Fill the two log columns and plot $$\log_{10} T$$ against $$\log_{10} t$$ for the whole history. Find the slope from 10⁻⁴⁰ s to 10⁻²⁰ s and from 10¹⁴ s to 10¹⁶ s, and compare them with your predictions.
2. Between which of your readings does the slope change from one value to the other? Estimate the time and temperature at which matter took over from radiation.
3. Check $$T = T_0(1 + z)$$ at the Atoms form landmark, using the redshift the demo gives.
4. From your threshold times, how long after the Big Bang did protons and antiprotons stop being made? Electrons and positrons? Which of the book's eras are these in?
5. Compare the peak frequencies you read at $$z$$ = 1090 and $$z$$ = 0. Is their ratio $$1 + z$$? Compare the two photon densities with your answer to Before the lab question 4.

## Uncertainty

The book gives its eras with rough times, for example 10⁻⁴³ s for a temperature of 10³² K. Read the demo's time for 10³² K and compare. Which parts of the curve rest on physics tested in the laboratory, and which are extrapolations? (Accelerators reach energies of about 10⁴ GeV.)

## Questions

1. Why does the temperature fall a little more slowly than $$t^{-1/2}$$ around 10⁻⁵ s and around 1 s? (Look at the $$g_*$$ graph.)
2. At decoupling $$kT$$ is only about 0.26 eV, far less than 13.6 eV, yet the hydrogen was still ionized until then. Why? (There are more than a billion photons for every proton.)
3. Why do we see the microwave background in every direction, and why is it so close to a perfect blackbody?
4. What would the temperature of the background be when the universe is twice its present size?

## What to hand in

Prelab answers, the table copies with the graph and its two slopes, the threshold times, the microwave background readings, and answers to the questions. Identify simulated data.
