# Color Vision: Cones, Mixing and Filters
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 3, §2.5. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/color-vision.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Red + green + blue; Red + green; Red + blue; Green + blue; Pure yellow, 580 nm; Pure cyan, 490 nm; Red filter on a bulb; Green filter, photons; Narrow filter at 589 nm.

**Using the demo.**

- The eye has three kinds of cones, L, M and S, most sensitive to long, middle and short wavelengths. Each cone signal is the light's spectrum weighted by that cone's sensitivity and added up over all wavelengths. The sensitivities come from the CIE 1931 color matching functions turned into cone responses (the Hunt–Pointer–Estevez matrix), scaled so daylight white gives L = M = S = 1.
- Three lamps: red, green and blue lamps with narrow spectra at 630, 532 and 465 nm. All three at 100% give exactly daylight white. One wavelength: a single wavelength from 380 to 700 nm; 100% power at 555 nm is as bright as that white. Mix it from the three lamps finds the lamp powers with the same three cone signals, or says that one lamp would have to be negative. Bulb and filter: an incandescent bulb (a blackbody at 2856 K) or daylight, with an ideal filter that passes everything between its two edges and nothing else.
- Brightness Y is the light's luminance, 1 for the white of the three full lamps.
- Colored filters: one or two of red, green, blue, yellow, cyan and magenta can stand in front of any light. They are ideal band filters with edges at 500 and 600 nm (red passes above 600 nm, green 500 to 600 nm, blue below 500 nm, and yellow, cyan and magenta each pass two of those bands); two stacked filters multiply their transmissions. The Light column names them.
- Record reading stores the light, its wavelength (or the filter's center), the three cone signals and Y. Export to worksheet sends the readings to the Data table below; Clear starts a new series.

</details>

## Goal

Find out what decides the color we see, show that lights add, find two different lights that look the same, and measure how the eye's sensitivity changes across the spectrum.

## Background

The eye cannot measure a spectrum. It has three kinds of cones, and each kind gives one number, its signal:

$$L = \int S(\lambda)\,\bar l(\lambda)\,d\lambda, \qquad M = \int S(\lambda)\,\bar m(\lambda)\,d\lambda, \qquad S = \int S(\lambda)\,\bar s(\lambda)\,d\lambda,$$

where $$S(\lambda)$$ is the power per unit wavelength reaching the eye and $$\bar l$$, $$\bar m$$, $$\bar s$$ are the sensitivities. Every color we see is set by these three numbers. Because the integrals are linear, the signals of two lights shone together are the sums of their separate signals (additive mixing). Two lights with different spectra but the same three signals look identical; they are called metamers.

A filter multiplies the spectrum by its transmission, which is never more than 1, so it can only remove light.

## Before the lab

1. The red lamp alone gives L = 0.435, M = 0.161, S = 0.000, and the green lamp alone L = 0.543, M = 0.765, S = 0.032. Predict the three signals for red and green together. Both lamps at full power shine on the same spot: what color does it look, brown, yellow, or a mix in which you can still see red and green? Say how your signals lead you there.
2. Why can a light with signals L = 1, M = 1, S = 1 look white although it contains only three narrow bands of wavelengths?
3. A single wavelength at 580 nm excites L and M but almost no S. Which two lamps could make a light that looks the same?
4. A filter passes 600 to 700 nm. Will the light behind it be brighter or dimmer than the bare bulb? Could it ever look green?

## Safety

No hazards in the virtual lab.

## Procedure

**Adding lights.** Pick Three lamps above the drawing and set the Red lamp, Green lamp and Blue lamp sliders (0 turns a lamp off). Press Record reading for each lamp alone at 100%, for each pair at 100%, and for all three. Then record red alone at 50% and red and green both at 50%. For red and green together at 100%, look also at the bubble that shows the color seen (untick Blind: hide the color seen, if it is on) and write that color in your answer to Question 1. Press Export to worksheet, then Clear.

**The eye's sensitivity.** Pick One wavelength and set Power to 100%. Set the Wavelength λ slider (arrow keys move it 1 nm) and record a reading every 50 nm from 400 nm to 700 nm, and also at 555 nm. Press Export to worksheet, then Clear.

**Metamers.** Choose the Pure yellow, 580 nm setup and record a reading; press Mix it from the three lamps (above the drawing) and record the mix. Do the same for Pure cyan, 490 nm. Note the message the demo gives for each mix. Press Export to worksheet, then Clear.

**Filters.** Pick Bulb and filter, then Incandescent, with Filter in the beam unticked, and record a reading. Tick Filter in the beam, set Filter center to 650 nm, and record readings with the Filter width slider at 300, 200, 100, 50 and 20 nm. Then pick Daylight and record the 100 nm wide filter at 650 nm and at 530 nm. Press Export to worksheet, then Clear.

**Colored filters.** With the Daylight bulb and Filter in the beam unticked, record a reading with Colored filter set to None, then with each colored filter alone (the Colored filter menu below the light's controls): red, green, blue and yellow. Then stack two, using Second colored filter as well: yellow then cyan, and red then green. Last, pick Three lamps, light the red lamp alone at 100%, and record it with no filter and through the green filter. Press Export to worksheet.

## Data

Table 1. Lights and cone signals.

| Reading | Light | Wavelength or filter center (nm) | L | M | S | Brightness Y |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

## Analysis

1. For the lamps, check whether the signals of each pair are the sums of the signals of the two lamps alone, and whether halving the power halves every signal.
2. Plot Y (vertical) against wavelength (horizontal) for the single wavelengths. At what wavelength is the eye most sensitive? By what factor is 450 nm dimmer than 555 nm at the same power, and 650 nm?
3. On the same graph, or in a second one, plot L, M and S (vertical) against wavelength (horizontal). Which wavelengths excite two kinds of cones strongly at once?
4. Compare the cone signals of the 580 nm light and its lamp mix, and of the 490 nm light and its mix. Which pair are metamers, and why does the other fail?
5. For the filters, list Y against the filter width (the distance between the two edges named in the Light column). Explain how Y changes as the filter narrows, and why daylight through the red filter is dimmer than the incandescent bulb through it.
6. For the colored filters: is the sum of Y through the red, green and blue filters equal to Y with no filter? Compare the yellow filter with the red and green filters added. Compare yellow then cyan with the green filter alone, and explain why stacked filters multiply their transmissions while lamps add. Why does red then green, or the red lamp through the green filter, give nothing at all?

## Questions

1. What color did the red and green lamps make together, and what did you expect in Before the lab 1? Use the L, M and S of that reading to explain it. Why does mixing red and green paint give a dark brown instead?
2. Magenta appears in no rainbow. Use the cone signals of red + blue to explain why no single wavelength looks magenta.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The demo's numbers come from tabulated color matching functions and a model of the lamps, so they carry no random scatter. Name two things that would make real cone signals differ from these numbers for a real person (for example, how cone sensitivities vary between people).

## What to hand in

Prelab answers, the table copies with their graphs, the additivity check, the metamer comparison, the colored filter comparisons, and answers to the questions (and to Uncertainty, if assigned). Identify simulated data.
