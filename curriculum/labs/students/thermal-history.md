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

About 380,000 years after the Big Bang the universe had cooled to about 3000 K, and electrons and nuclei combined into atoms. The universe became transparent, and the radiation of that moment, stretched by a factor of about 1100, is the cosmic microwave background we see today (§11.7).

## Before the lab

1. Find the threshold temperature $$T = mc^2/k$$ for protons ($$mc^2$$ = 938.3 MeV) and for electrons (0.511 MeV).
2. Photons decoupled at about 3000 K (the book's timeline says atoms form when the universe cools below 4000 K). Before you open the Microwave background view, decide in which part of the spectrum that radiation was brightest when it was set free: radio, microwave, infrared, visible or ultraviolet. Say how you decided.
3. Show that if $$a \propto t^{n}$$ then $$T \propto t^{-n}$$. What slope do you expect on a graph of $$\log_{10} T$$ against $$\log_{10} t$$ in the radiation era and in the matter era?
4. By what factor has the number of photons in each cubic centimeter fallen since decoupling at $$z$$ = 1090?

## Safety

No hazards in the virtual lab.

## Procedure

**The whole history.** Press Thermal history above the picture. Set the Time since the Big Bang t slider (drag close, then use the arrow keys) to $$t$$ = 10⁻⁴⁰ s and press Record reading (under Readings). Do the same at every fifth power of ten after it up to 10¹⁰ s (10⁻³⁵ s, 10⁻³⁰ s, ...), then at every power of ten from 10¹¹ s to 10¹⁷ s, and finally at today (the right end of the slider). Press Export to worksheet.

**Landmarks.** Press Clear (under Readings). Record at 1 s and at about 3 minutes (the slider step nearest 180 s). Then press the Proton pairs stop setup and record, and press the Atoms form setup, record, and write down its Redshift z readout for Analysis 3. Press Export to worksheet; these go into a new copy of the table.

**Thresholds.** Check Lines at kT = mc² under the slider. Move Time since the Big Bang t until the curve crosses the red line for the electron, so that the Temperature T readout equals that threshold, and write down the time; do the same for the proton.

**The microwave background.** Press Microwave background above the picture and check Blind (in the Lab fold). Set the Redshift z slider to 1090 and read the peak frequency of the spectrum from the graph, then do the same at $$z$$ = 0. Then uncheck Blind and, at both redshifts, write down the Peak wavelength λ_max (Wien) and Photons per cm³ readouts.

## Data

| Reading | Time t (s) | Temperature T (K) | kT (eV) | log₁₀ t | log₁₀ T |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

## Analysis

1. Fill the two log columns and plot $$\log_{10} T$$ (vertical) against $$\log_{10} t$$ (horizontal) for the whole history, the first copy of the table. Find the slope from 10⁻⁴⁰ s to 10⁻²⁰ s and from 10¹⁴ s to 10¹⁶ s, and compare them with your predictions.
2. Between which of your readings does the slope change from one value to the other? Estimate the time and temperature at which matter took over from radiation.
3. Check $$T = T_0(1 + z)$$ at the Atoms form landmark, using the redshift the demo gives.
4. From your threshold times, how long after the Big Bang did protons and antiprotons stop being made? Electrons and positrons? Which of the book's eras are these in?
5. Compare the peak frequencies you read at $$z$$ = 1090 and $$z$$ = 0. Is their ratio $$1 + z$$? Compare the two photon densities with your answer to Before the lab question 4.

## Uncertainty

The book gives its eras with rough times, for example 10⁻⁴³ s for a temperature of 10³² K. Read the demo's time for 10³² K from the graph (it is earlier than the slider reaches, but the curve is drawn back to 10⁻⁴⁵ s) and compare. Which parts of the curve rest on physics tested in the laboratory, and which are extrapolations? (Accelerators reach energies of about 10⁴ GeV.)

## Questions

1. Why does the temperature fall a little more slowly than $$t^{-1/2}$$ around 10⁻⁵ s and around 1 s? (Look at the $$g_*$$ graph.)
2. What did your Peak wavelength reading at $$z$$ = 1090 say about Before the lab 2? In which part of the spectrum was the radiation brightest when it was set free, and why do we receive it as microwaves? At decoupling $$kT$$ is only about 0.26 eV, far less than 13.6 eV, yet the hydrogen was still ionized until then. Why? (There are more than a billion photons for every proton.)

## What to hand in

Prelab answers, the table copies with the graph and its two slopes, the threshold times, the microwave background readings, and answers to the questions. Identify simulated data.
