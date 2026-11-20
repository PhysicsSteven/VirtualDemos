# The Chirp of Merging Black Holes
Student laboratory · Astronomy

Textbook: OpenStax *Astronomy 2e*, §24.7 (gravitational wave astronomy). Access for free at https://openstax.org/details/books/astronomy-2e. The physics behind it: OpenStax *University Physics*, Vol. 1, §13.7 (Einstein's theory of gravity). Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/gravitational-waves.html?ws=black-hole-chirp)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** GW150914: two black holes; Equal masses; Heavy pair, lower pitch; GW170817: two neutron stars (these use the Inspiral view); Arms stretching, How small? The peak, A wave the arms miss and Livingston first, 6.9 ms (the Detector view); The real signal and Weigh the black holes (the GW150914 data view); Gravity against light and If gravity were slower (the Race with light view). This worksheet uses **GW150914**, **Equal masses**, **Heavy pair, lower pitch**, **How small? The peak**, **Gravity against light** and **If gravity were slower**.

**Using the demo.**

- The Inspiral view shows two black holes orbiting each other, seen from above, and below it the wave they send out: its height is the strain h and its frequency climbs as the orbit shrinks. Play runs it in slow motion (the speed is shown on the picture).
- The sliders set the two masses, the distance and the frequency f₀ at which the picture starts. Click the mass readout above a slider to type a mass.
- The readouts give the chirp mass, the frequency at the last stable orbit, how long the pair takes to get there from f₀, the ringdown frequency of the final black hole and its mass. Frequencies are the ones LIGO would measure on Earth.
- The Detector view shows the wave passing LIGO Hanford, whose two arms are 3,994.5 m long; the Race with light view follows the gravitational waves and the gamma rays from the neutron star merger GW170817 to Earth.
- Record reading (Inspiral view) stores the masses and the frequencies, times and final mass. Export to worksheet sends the readings to the first Data table; Clear starts a new series, which goes into a new copy of the table.
- Blind (in Lab) hides the frequencies and results; leave it off for this worksheet.

</details>

## Goal

Measure how the pitch of two merging black holes depends on their mass, find how much mass turns into gravitational waves, and see how small and how fast those waves are when they reach Earth.

## Background

**Ripples in spacetime.** In Einstein's gravity, mass curves spacetime. Masses that swing around each other quickly send out ripples in that curvature, **gravitational waves**, which travel through space at the speed of light. A wave passing through stretches distances one way and squeezes them the other way by a tiny fraction called the **strain** h: a length L changes by

$$\Delta L = hL.$$

The LIGO detectors in Hanford, Washington and Livingston, Louisiana have arms 3,994.5 m long (about 4 km) and can measure a change far smaller than a proton, whose diameter is about $$1.68\times10^{-15}$$ m.

**The chirp.** Two black holes in orbit lose energy to the waves they send out, so they spiral closer together and orbit faster. The waves rise in frequency (twice the number of orbits per second) and in strength, a rising "chirp". The spiral ends at the **last stable orbit**, the closest orbit that can hold; inside it the two plunge together and merge. The new black hole then shakes off its lumps and "rings down" like a struck bell at its **ringdown frequency**.

**Bigger is lower.** A black hole's size grows in proportion to its mass M, so the last stable orbit of a heavier pair is wider and slower. Both the last stable orbit frequency and the ringdown frequency go as $$1/M$$: twice the mass, half the frequency. Big bells ring low, too.

**Mass into waves.** The final black hole has less mass than the two that went in. The difference $$\Delta m$$ left as gravitational wave energy, $$E = \Delta m\,c^2$$.

**The first detection.** On 14 September 2015 both LIGO detectors caught GW150914, two black holes of about 36 and 29 solar masses about 1.3 billion light years away. On 17 August 2017 they caught two neutron stars merging (GW170817), and 1.74 seconds later space telescopes caught a burst of gamma rays from the same spot, 130 million light years away.

The frequencies in the demo are the ones measured on Earth: the waves crossed an expanding universe, which stretched them by about 9%. That changes every frequency by the same factor and does not affect the comparisons in this lab.

$$c = 3.00\times10^8\ \text{m/s},\quad M_\odot = 1.988\times10^{30}\ \text{kg}.$$

## Before the lab

1. GW150914 changed the strain at Hanford by about $$h = 1.0\times10^{-21}$$. By how much did a 3,994.5 m arm change length? What fraction of a proton's diameter is that?
2. Suppose gravity traveled 0.1% slower than light. The waves from GW150914 traveled for 1.3 billion years. How much later than light would they have arrived?
3. Black holes of 36 and 29 solar masses merged into one of 62 solar masses. How much mass turned into gravitational waves? How much energy is that, in joules?
4. Two black holes of 80 solar masses each are a heavier pair than GW150914 (36 and 29). Predict whether the heavy pair's waves will reach a higher frequency at the last stable orbit than GW150914's, a lower one, or about the same. Write down your guess and one sentence of reasoning before you open the demo.

## Safety

No hazards in the virtual lab.

## Procedure

Leave **Distance** at 410 Mpc and **Start at frequency f₀** at 20 Hz for the whole of Part 1 (each setup sets them so).

**Part 1. Six pairs.** The link opens the **GW150914: two black holes** setup in the Inspiral view. Press **Play** and watch the orbit shrink and the wave speed up (about half a minute in slow motion; the **Wave frequency f** readout climbs as it goes). Press **Record reading**. Then press **Equal masses** and record, and **Heavy pair, lower pitch** and record.

Now type the masses yourself: click the **Mass m₁** readout, type 10 and press Enter; do the same for **Mass m₂**. Record. Repeat for 20 + 20 and for 50 + 50 solar masses (six readings in all). Press **Export to worksheet**: the readings fill the first Data table.

Press **Heavy pair, lower pitch** again and press **Play**. Watch how high the **Wave frequency f** readout gets before the merger, and compare it with what you saw for GW150914. Your Last stable orbit readings for these two rows settle the guess you made in Before the lab 4.

**Part 2. How small, how fast.** Type each readout into the Readouts table.

- Press **How small? The peak** (the Detector view). Read **ΔL at the peak** and **Peak ΔL ÷ proton diameter**.
- Press **Gravity against light** (the Race with light view). Read **Travel time D/c**, **Measured gap** and **δ that the measured gap alone would allow**.
- Press **If gravity were slower** (δ = 10⁻³, that is 0.1% slower). Read **Extra lag of the waves, δD/c**.

## Data

**Six pairs.** One row for each reading.

| Reading | Pair | m₁ (M☉) | m₂ (M☉) | Total mass M (M☉) | Chirp mass (M☉) | Last stable orbit f (Hz) | Ringdown f (Hz) | Time from 20 Hz to the last stable orbit (ms) | Final black hole (M☉) | 1/M (1/M☉) |
|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |

**Readouts.**

| Readout | Value |
|---|---|
| ΔL at the peak (m) | |
| Peak ΔL ÷ proton diameter | |
| Travel time D/c | |
| Measured gap (s) | |
| δ that the measured gap alone would allow | |
| Extra lag with δ = 10⁻³ | |

## Analysis

1. Fill the 1/M column. Graph the last stable orbit frequency (vertical) against 1/M (horizontal) and fit a straight line. What are the slope and the intercept? Does the line pass through the origin, as $$f \propto 1/M$$ says it should?
2. Use your slope to predict the last stable orbit frequency for a pair of supermassive black holes with a total of one million solar masses. LIGO hears from about 10 Hz to a few thousand hertz. Could LIGO hear that pair?
3. For GW150914 and for the heavy pair, find the mass that turned into waves, $$M - M_\text{final}$$, and what percent of $$M$$ it is. Is it about the same percent for both?
4. Compare the time from 20 Hz to the last stable orbit for 10 + 10 and for 80 + 80 solar masses. Which pair spends longer in LIGO's band?

## Questions

1. The peak of GW150914 changed a LIGO arm by your ΔL at the peak. Compare it with Before the lab 1, which used the strain Hanford actually recorded. The simple formula in the demo overstates the peak by about 1.7 times, because the two black holes are no longer on slow, wide orbits at the end. The rest of the difference is the view: why would a pair tilted to us and off to one side of the sky give a smaller signal than one face on and straight overhead?
2. The gravitational waves from GW170817 arrived 1.74 s before the gamma rays, after 130 million years. Use your Readouts table: if gravity were 0.1% slower than light, how late would the waves have been? What does the measured gap say about the speed of gravity?
3. Return to your prediction in Before the lab 4. Using the Last stable orbit and Ringdown columns for GW150914 and the heavy pair, say whether the heavier pair ended higher or lower, by what factor, and how that factor compares with the ratio of their total masses. Explain it with the size of a black hole.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The frequencies are shown to 0.1 Hz (the ringdown to 1 Hz). For each row, multiply the last stable orbit frequency by M. By how many percent do your six products spread, and is that more or less than the rounding alone explains? Also report the slope and intercept of your fit with their uncertainties, and say whether the intercept is zero within its uncertainty.

## What to hand in

Prelab answers, both tables with the graph, its slope and intercept, and answers to the analysis and the questions (and to Uncertainty, if assigned). Identify simulated data: every reading comes from the model in the demo.
