# Attenuation of Ultrasound in Tissue
Student laboratory · Medical Physics

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/ultrasound.html?setup=atten)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Attenuation in muscle (this worksheet): muscle of adjustable depth over 3 cm of bone, with absorption on; the echo, layer and Doppler setups of the Acoustics worksheet.

**Using the demo.**

- The transducer sends three cycle pulses (full width at half maximum of the envelope) at 2, 3.5, 5 or 7.5 MHz. Each boundary sends back a share $$r = (Z_2 - Z_1)/(Z_2 + Z_1)$$ of the pressure, with speeds and acoustic impedances from OpenStax College Physics §17.7 (muscle 1590 m/s and 1.70 × 10⁶ kg/(m² s), bone 4080 m/s and 7.8 × 10⁶ kg/(m² s), the top of the book's range for bone).
- Absorption: on the way down and back each echo loses 2αd decibels in every layer above it, with α in dB/(cm MHz) at 1 MHz from Culjat et al., Ultrasound Med. Biol. 36, 861 (2010), Table 1: water 0.0022, blood 0.2, fat 0.48, muscle 1.09, cortical bone 6.9, and 0.54 as the soft tissue average. In tissue α is taken as proportional to f (in real tissue the power of f is near 1 but not exactly 1), in water as f²; the pulse is treated as one frequency. Beam spreading and echoes that bounce more than once are left out, so absorption is the only loss with depth. Simulated data, with no noise.
- The echo level readout is the envelope of the received signal at the cursor, in dB relative to the pulse sent. Time gain compensation (TGC) turns the display's gain up with time as $$10^{2\alpha_0 f z/20}$$, with $$z = (1540\ \mathrm{m/s})\,t/2$$, the depth a scanner assumes; it changes the trace on the screen, not the echo level readout.
- Record reading stores the setup, frequency, muscle depth, cursor time, echo level and TGC. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Measure the attenuation coefficient of muscle from the echo of a bone at several depths and frequencies, test that it is proportional to frequency, and see why scanners trade penetration for resolution.

## Background

A plane wave whose pressure amplitude falls as $$p(x) = p_0\,e^{-a x}$$ has intensity $$I \propto p^2$$ falling as $$e^{-2ax}$$. In decibels, the amplitude level falls by $$\alpha = 20\log_{10}(e)\,a = 8.686\,a$$ dB per unit length. In soft tissue α rises nearly in proportion to frequency, $$\alpha = \alpha_0 f$$, with $$\alpha_0$$ in dB/(cm MHz).

An echo from a boundary at depth d travels 2d through the tissue, so its level, relative to the pulse sent, is

$$L = 20\log_{10}\lvert r\rvert - 2\,\alpha_0 f\,d ,$$

a straight line in d with slope $$-2\alpha_0 f$$ and intercept set by the boundary's reflection.

## Before the lab

1. Starting from $$dp/dx = -a\,p$$, show that the intensity obeys $$dI/dx = -2aI$$, and that α in dB per length is 8.686a whether you work with amplitude (20 log₁₀) or intensity (10 log₁₀).
2. Find r for a muscle to bone boundary from the impedances above, and the intercept $$20\log_{10}\lvert r\rvert$$ in dB.
3. Make a guess first: through 10 cm of muscle, does the bone echo come back stronger at 2 MHz, stronger at 5 MHz, or about the same at both? Then predict the slope of L against d at 2 MHz and at 5 MHz for muscle (α₀ = 1.09 dB/(cm MHz)), and see whether it bears out your guess.
4. A scanner can detect echoes down to 60 dB below the pulse sent (its dynamic range here, chosen for the question). How deep can it see a strong reflector in average soft tissue (α₀ = 0.54) at 3.5 MHz and at 7.5 MHz?

## Safety

No hazards in the virtual lab. The energy absorbed in tissue heats it; scanners show a thermal index for this, and output limits keep it small.

## Procedure

The link opens the Attenuation in muscle setup (under Setups): muscle over bone, at 2 MHz, with Absorption in the tissue checked in the Lab section. The Set up card (Transducer frequency f₀ and the Muscle depth, transducer to the bone slider) fades away while the scanner runs, and Record reading works only while it runs, so for each reading: (1) press Stop the scanner; (2) set the Muscle depth slider, using the −1 mm and +1 mm buttons to land on a whole centimeter; (3) press Start the scanner; (4) put the cursor on the peak of the bone echo, by dragging on the scanner screen and then using the cursor step buttons (±0.1 µs, ±0.01 µs) until Echo level at the cursor, under Readouts, is largest (Zoom: 20 μs around the cursor helps); (5) press Record reading.

At 2 MHz record depths of 2, 6 and 10 cm, then press Export to worksheet and Clear. Choose 3.5 MHz under Transducer frequency f₀ and repeat, then 5 MHz, each series into its own copy of Table 1. At 7.5 MHz record depths of 2, 4 and 6 cm. Do not press the Setups button again between series: it resets the frequency, the depth and the cursor.

Then, at 3.5 MHz and 8 cm, try each Time gain compensation setting (the menu in the Lab section: off, 0.54 and 1.09) and watch the height of the bone echo on the trace (no reading needed).

## Data

Table 1. Bone echo level against muscle depth (one copy for each frequency).

| Reading | Setup and frequency | Muscle depth d (cm) | Cursor time t (µs) | Echo level L (dB) | TGC | Round trip 2d (cm) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Table 2. Slope against frequency (from your fits to Table 1).

| Frequency f (MHz) | Slope of L against d (dB/cm) | Standard error of the slope (dB/cm) | Intercept (dB) | α = −slope/2 (dB/cm) |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

## Analysis

1. For each copy of Table 1, graph L (vertical) against d (horizontal) and fit a line. Enter each slope, its standard error and the intercept in Table 2.
2. Compare the intercepts with $$20\log_{10}\lvert r\rvert$$ from Before the lab question 2.
3. Graph α (vertical) against f (horizontal) from Table 2 and fit a line. Is it a straight line through the origin? Find α₀ from the slope, with its standard error, and compare with 1.09 dB/(cm MHz).

## Uncertainty

The model has no noise, so the scatter about each line comes from where you placed the cursor and from rounding. Press +0.1 µs and then −0.1 µs twice (0.1 µs to either side of a peak) and see how much Echo level at the cursor drops; use that to estimate the uncertainty of each L, and say whether it is large enough to matter next to the standard errors from your fits. A real measurement of α in muscle carries far larger uncertainties: published values depend on the species, the temperature and the direction of the fibers.

## Questions

1. The TGC curve for 1.09 dB/(cm MHz) does not make the bone echo exactly the same height at every depth. Give the reason, from the About the demo notes.
2. Look back at your guess in Before the lab 3 and at your 10 cm readings at 2 and 5 MHz. Which echo was weaker, by how many decibels, and why, when the reflection at the bone is the same at both frequencies? What does that mean for a scanner's choice between penetration and resolution? Cortical bone's α₀ is 6.9 dB/(cm MHz): how much is lost going through 1 cm of skull and back at 2 MHz, and what does this mean for transcranial ultrasound?

## What to hand in

Prelab answers, all copies of Table 1 with their graphs, Table 2 with its graph, α₀ with its uncertainty, and answers to the questions. Identify simulated data.
