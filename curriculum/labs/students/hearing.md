# Hearing: Decibels, Phons and the Cochlea
Student laboratory · Acoustics and Medical Physics; College Physics 2e and high school Physics

Textbook: OpenStax *College Physics 2e*, §17.3 (sound intensity and sound level) and §17.6 (hearing); the same sections in *College Physics for AP Courses 2e*. OpenStax *Physics* (high school), §14.2. In OpenStax *University Physics*: Vol. 1, §17.3. Access for free at https://openstax.org/details/books/college-physics-2e.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/hearing.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** in Cochlea, 1 kHz tone; Middle C (262 Hz); 4 kHz, where noise does damage; Top of hearing (16 kHz); Lowest pitch (20 Hz). In Loudness, OpenStax examples (a), (b) and (c); Most sensitive: 3 to 4 kHz; Quiet bass, 50 Hz. In Your audiogram, Normal hearing; Noise damage: the 4 kHz notch; Hearing loss with age; Your own test.

**Using the demo.**

- The buttons above the picture switch modes: **Cochlea**, **Loudness** and **Your audiogram**. Each mode has its own card beside the picture and its own setups under Setups.
- **Cochlea** draws the cochlea coiled, and below it the basilar membrane uncoiled into a straight strip 35 mm long, from the base (at the oval window) to the apex. **Play** runs the traveling wave, slowed so one cycle takes 1 s on the screen at every frequency. The **Frequency f** slider sets the tone; the Readouts give the period, the wavelength in air and the place of the peak, measured from the base and from the apex.
- **Loudness** draws sound level against frequency, with the equal loudness contours from 20 to 90 phons and the threshold of hearing. The **Frequency f** and **Sound level β** sliders move the dot that marks the tone. The Readouts give the intensity, the threshold of hearing at that frequency, the loudness level in phons, the loudness in sones and the level of a 1 kHz tone just as loud.
- **Your audiogram** shows hearing level against frequency, with worse hearing lower down. The three preset audiograms are illustrative, not measurements; the Readouts list the hearing level at each frequency and the average at 0.5, 1, 2 and 4 kHz.
- **Record reading** (under Readings) stores the current tone; **Export to worksheet** sends the readings to this page; **Clear** starts a new series, which goes into a new copy of the table.
- You don't need sound for this worksheet. The demo can play quiet tones, never louder than 20 dB below the full scale of your computer. **Your own test** is relative to your own threshold at 1 kHz and is not a hearing test; this worksheet does not use it.

**What the demo models.** The place of each tone on the basilar membrane comes from Greenwood's map for the human cochlea (Greenwood 1990). The loudness levels come from the equal loudness contours of the international standard ISO 226:2003, which are the median of young adults (18 to 25 years old) with normal hearing, listening to pure tones from in front. The shape of the traveling wave is drawn schematically, not computed from the mechanics of the membrane.

</details>

## Goal

Find where along the cochlea the ear sorts each frequency, measure how the loudness of a tone depends on both its intensity and its frequency, and read hearing loss from an audiogram.

## Background

**Intensity and sound level.** The intensity $$I$$ of a sound is the power it carries through each square meter, in W/m² (§17.3). The ear hears intensities from about $$10^{-12}$$ W/m² up to more than 1 W/m², a range of a trillion, so we describe intensity with a logarithmic scale, the sound level

$$\beta = 10\log_{10}\frac{I}{I_0}\ \text{dB}, \qquad I_0 = 10^{-12}\ \text{W/m}^2 .$$

Every 10 dB more is ten times the intensity, and 3 dB more is about twice the intensity, since $$10\log_{10}2 = 3.01$$. To go back from a level to an intensity, $$I = I_0\,10^{\beta/10}$$.

**Loudness depends on frequency.** Two tones with the same intensity do not sound equally loud if their frequencies differ (§17.6). The *loudness level* of a tone, in *phons*, is the sound level of a 1 kHz tone that sounds just as loud. So at 1 kHz the loudness level in phons equals the sound level in dB, by definition. Curves through all the tones that sound as loud as each other are the *equal loudness contours*: the 60 phon contour passes through 60 dB at 1 kHz, and through every other frequency at the level that sounds as loud as that. The lowest curve is the *threshold of hearing*, the quietest tone that can be heard. The ear is most sensitive between about 3 and 4 kHz, where the threshold dips below 0 dB, and much less sensitive to low frequencies. At low frequencies the contours also crowd together, so there loudness changes faster with level than it does at 1 kHz.

**How many times louder.** Above about 40 phons, a tone 10 phons higher sounds about twice as loud. The *loudness* $$N$$ in *sones* counts this: one sone is 40 phons, and

$$N = 2^{(L_N - 40)/10}\ \text{sones},$$

where $$L_N$$ is the loudness level in phons. Twice as loud needs about 10 dB more, which is ten times the intensity.

**The cochlea sorts frequencies by place.** Sound passes through the ear canal and the eardrum to the three small bones of the middle ear, which push on the oval window of the cochlea, a coiled tube of fluid in the inner ear. Along the cochlea runs the *basilar membrane*, about 35 mm long, narrow and stiff at the base (near the oval window) and wide and floppy at the apex. A tone makes a wave that travels along the membrane from the base, grows to a peak at one place and dies out just past it. High tones peak near the base, low tones near the apex. Hair cells along the membrane send a signal to the nerve where the membrane moves the most, so each place reports one range of frequencies. Greenwood (1990) fitted the place map of the human cochlea as

$$f = 165.4\,\left(10^{2.1x} - 0.88\right)\ \text{Hz},$$

where $$x$$ is the fraction of the membrane's length measured from the apex (0 at the apex, 1 at the base). The distance of the peak from the base is $$35\ \text{mm} \times (1 - x)$$. Solving for $$x$$:

$$x = \frac{1}{2.1}\log_{10}\left(\frac{f}{165.4\ \text{Hz}} + 0.88\right).$$

Well above a few hundred hertz the 0.88 hardly matters, so the place is nearly a straight line in $$\log_{10} f$$: each doubling of the frequency (an *octave*) moves the peak the same distance along the membrane.

**The audiogram.** A hearing test plays tones at 250 Hz to 8 kHz and finds the quietest one heard at each frequency. The *hearing level*, in dB HL, is how far that threshold sits above the normal threshold at that frequency, so 0 dB HL is normal at every frequency, and the chart puts larger numbers (worse hearing) lower down. The average of the hearing levels at 0.5, 1, 2 and 4 kHz sorts hearing into bands (Clark 1981): normal up to 15 dB HL, slight loss 16 to 25, mild 26 to 40, moderate 41 to 55, moderately severe 56 to 70, severe 71 to 90, profound above 90. Years of loud noise wear out the hair cells that report about 4 kHz first, which leaves a notch in the audiogram there. Age wears out the hair cells at the base first, so the loss grows toward the highest frequencies.

## Before the lab

1. What is the intensity of a 60 dB sound, and of a 90 dB sound? How many times the intensity of the first is the second?
2. Use Greenwood's map to work out by hand how far from the base of the basilar membrane a 1 kHz tone peaks. Then, without working it out, say whether a 4 kHz tone peaks closer to the base or to the apex.
3. Predict: a 100 Hz tone and a 1 kHz tone both have a sound level of 60 dB, so they carry the same intensity. Which do you expect to sound louder? Guess the loudness level of the 100 Hz tone in phons, and give your reason. (You will check this in Part 2 and explain it in Questions 1.)

## Safety

The worksheet needs no sound. If you do play the demo's tones, use headphones or speakers at a comfortable volume, and stop if anything is uncomfortable.

## Procedure

The link at the top opens the demo in **Cochlea**. Readings from each part go to their own table: after each **Export to worksheet**, press **Clear** under Readings before you switch modes.

**Part 1: where each tone peaks.** Press **1 kHz tone** under Setups and press **Play**: watch the wave grow toward its peak and die out just past it. Read **Place of the peak, from the base** in the Readouts, and press **Record reading** (under Readings). Then set **Frequency f** (in the Tone card) to 2,000 Hz, 4,000 Hz and 8,000 Hz in turn, recording each: drag the slider close, then click it and use the arrow keys to land on the value. Last, press **Top of hearing (16 kHz)** under Setups and record. Press **Export to worksheet**: the five readings fill Table 1. Press **Clear**. Then set Frequency f to 500 Hz, 250 Hz and 125 Hz and write down the place of the peak from the base for each, for Analysis 2 (don't record these).

**Part 2: loudness against level.** Press **Loudness** above the picture to switch modes. In the Tone on the chart card, set **Frequency f** to 1,000 Hz and **Sound level β** to 50 dB (click a slider and use the arrow keys to set it exactly). Press Record reading. Do the same at 60, 70, 80 and 90 dB. Press Export to worksheet, then Clear: these fill Table 2. Now set Frequency f to 100 Hz and record at 50, 60, 70, 80 and 90 dB again. Press Export to worksheet, then Clear: these go to a second copy of Table 2. Look at the 100 Hz reading at 60 dB: this is the check of your prediction in Before the lab 3. (With headphones on, **Play 1 kHz, then this tone** plays a 1 kHz tone that should sound just as loud, then this one.) Fill in the Intensity column of both copies.

**Part 3: matching loudness.** Press **OpenStax example (c): 200 Hz at 60 dB** under Setups and write down its **Loudness level**. Then set Frequency f to 8,000 Hz and move Sound level β until the Loudness level is as close as it gets to the 200 Hz tone's. Write down that β. For the Uncertainty section, also write down the two settings of β whose loudness levels lie just below and just above the 200 Hz tone's, with their loudness levels. Last, press **Most sensitive: 3 to 4 kHz** and write down the **Threshold of hearing at f**; then set Frequency f to 100 Hz and write down the threshold there too.

**Part 4: audiograms.** Press **Your audiogram** above the picture. Open **Lab** (below the Readings) and tick **Blind**, so the Band readout stays hidden until you have worked it out. Press **Normal hearing** under Setups and copy the hearing level at each frequency (the Readouts list Right · 250 Hz to Right · 8 kHz; the left ear is the same) into Table 3. Do the same for **Noise damage: the 4 kHz notch** and **Hearing loss with age**. Don't use Your own test.

## Data

**Table 1: the place of the peak on the basilar membrane.** Fill in $$\log_{10} f$$ (with $$f$$ in Hz) for each row.

| Reading | $$f$$ (Hz) | $$\log_{10} f$$ | Place of the peak from the base (mm) | Wavelength in air $$\lambda$$ (m) |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |

**Table 2: loudness level against sound level.** The first copy is 1 kHz, the second 100 Hz. Fill in $$I = I_0\,10^{\beta/10}$$ for each row.

| Reading | $$f$$ (Hz) | Sound level $$\beta$$ (dB) | Intensity $$I$$ (W/m²) | Loudness level (phons) | Loudness (sones) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

**Table 3: the preset audiograms.** Hearing levels in dB HL, from the Readouts.

| $$f$$ (Hz) | Normal hearing | Noise damage | Hearing loss with age |
|---|---|---|---|
| 250 | | | |
| 500 | | | |
| 1000 | | | |
| 2000 | | | |
| 3000 | | | |
| 4000 | | | |
| 6000 | | | |
| 8000 | | | |

## Analysis

1. Graph the place of the peak (vertical) against $$\log_{10} f$$ (horizontal) for Table 1, with a straight line fit. What are the slope, with its uncertainty, and the intercept? The slope is the distance the peak moves when the frequency grows ten times: how far does it move for one octave (multiply by $$\log_{10} 2 = 0.301$$)? If the 0.88 in Greenwood's map were left out, the slope would be $$-35\ \text{mm}/2.1 = -16.7$$ mm: is your slope a little smaller or larger in size, and why?
2. Use your line from Analysis 1 to predict the place of the peak at 500 Hz, 250 Hz and 125 Hz, and compare with the places you wrote down in Part 1. Where does the line fail, and which way? Explain with Greenwood's map what happens to the place of low tones.
3. For the 1 kHz copy of Table 2, graph the loudness level (vertical) against the sound level $$\beta$$ (horizontal) with a straight line fit. What are the slope and the intercept, and why must they come out that way? From your loudness column, how many times louder is 70 dB than 60 dB, and how many times the intensity is it?
4. Make the same graph and fit for the 100 Hz copy. What is the slope? How many phons does the 100 Hz tone gain for each 10 dB, and how far below the 1 kHz tone's loudness level is it at 50 dB and at 90 dB? The 100 Hz reading at 80 dB is OpenStax's example (a): the book reads 75 phons from older curves (Robinson and Dadson, 1956). By how many phons do they differ?
5. Part 3: what sound level at 8 kHz sounds as loud as 200 Hz at 60 dB? How many times the intensity of one tone is the other's? From the two thresholds you wrote down, how many times the intensity of a just audible 3.5 kHz tone does a 100 Hz tone need to be heard at all?
6. For each audiogram in Table 3, work out the average hearing level at 0.5, 1, 2 and 4 kHz and the band it falls in. Then untick Blind and compare with the Band readout. Graph the noise damage audiogram (vertical) against frequency (horizontal): at which frequency is it worst, and does its band tell you how bad that is? At which frequency is the age audiogram worst?

## Uncertainty

Sound level β moves in whole decibels, so your match in Part 3 is good only to the nearest decibel. From the two settings of β whose loudness levels lie on either side of the 200 Hz tone's, find by linear interpolation the β (to 0.1 dB) that gives exactly the 200 Hz tone's loudness level. How far is it from your whole number match? The contours themselves are a median over many listeners: compare your interpolation error with the difference between ISO 226 and the older curves in Analysis 4. Which is the larger doubt about how loud a tone sounds to a real person?

## Questions

1. Compare your prediction in Before the lab 3 with the 100 Hz reading at 60 dB in Table 2. Explain, with the equal loudness contours and the threshold of hearing at 100 Hz, why a bass tone of the same intensity sounds so much quieter. Use your 100 Hz fit to explain why music played quietly sounds thin, with too little bass.
2. Model the ear canal as a tube 2.5 cm long, open at the outer end and closed by the eardrum, with sound at 343.2 m/s. What is its lowest resonant frequency? Which result of Part 3 does it explain?
3. Noise damages the hair cells that report about 4 kHz. How far from the base of the basilar membrane are they (Table 1)? From Table 3, why does hearing recover at 8 kHz in the noise damage audiogram but not in the age audiogram? (Think about which end of the membrane each one wears out first.)
4. A second machine, as loud as the first, is switched on beside a 70 dB machine. What is the new sound level? At 1 kHz, how many sones is that compared with one machine alone? Does twice the intensity sound twice as loud?

## What to hand in

Your answers to Before the lab, Tables 1 to 3 with their calculated columns and graphs, the fits of Analysis 1, 3 and 4, and answers to the Analysis, Uncertainty and Questions sections. Say that your data came from the simulated apparatus.
