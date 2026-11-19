---
title: Hearing and the Ear
level: Algebra based intro physics (sound; OpenStax College Physics 2e 17.6 and 17.7, also the AP edition; University Physics 17.3); Acoustics; Medical Physics
time: 15 to 35 minutes
---
## What students should come away with

- The cochlea sorts sound by frequency. A tone makes a traveling wave on the basilar membrane that grows toward one place and dies just past it: high tones near the stiff, narrow base, low tones near the floppy, wide apex. Greenwood's map puts 1 kHz about 21 mm from the base, and each octave takes a few millimeters.
- Loudness is not intensity. The sound level β = 10 log(I/I₀), with I₀ = 10⁻¹² W/m², measures intensity; the loudness level in phons is the level of a 1 kHz tone that sounds just as loud. The equal loudness contours show how many decibels each frequency needs.
- The ear is most sensitive near 3 to 4 kHz, where the threshold of hearing dips below 0 dB, and far less sensitive to bass: a 50 Hz tone at 60 dB is only about 15 phons.
- Above about 40 phons, every 10 phons sounds about twice as loud (one sone at 40 phons). Twice as loud takes ten times the intensity.
- An audiogram plots hearing level against frequency. Noise wears out the hair cells near 4 kHz first and leaves a notch; age takes the highest frequencies first, more and more toward the top.

## Before class

Three views, chosen above the picture: **Cochlea** (Frequency f, Play the tone (quiet), Hair cells damaged by noise), **Loudness** (Frequency f and Sound level β on the equal loudness contours, Play this tone, Play 1 kHz, then this tone) and **Your audiogram** (Right ear or Left ear, Start the test, Heard them, Not heard, Play again, Subtract the normal threshold curve). The traveling wave is slowed so one cycle takes 1 s at every frequency. Blind, in the Lab fold, hides the place of the tone, the phons and sones and the hearing level bands. The sound is quiet by design: the demo never plays above 20 dB below full scale, and the audiogram needs headphones with the volume at about half and the box I am wearing headphones ticked. The audiogram is relative to the listener's own threshold at 1 kHz, not calibrated in dB HL and not a hearing test; the three preset audiograms are illustrative, not measurements.

## Running it in class

1. **1 kHz tone.** The opening setup. Press Play: the wave runs from the base toward the apex and peaks about 21 mm from the base. Then **Middle C (262 Hz)**, **Top of hearing (16 kHz)** and **Lowest pitch (20 Hz)** (Q1).
2. **4 kHz, where noise does damage.** Point at the damaged hair cells; keep this picture for step 6.
3. Switch to **Loudness.** **OpenStax example (a): 100 Hz at 80 dB**, **OpenStax example (b): 4 kHz at 70 phons** and **OpenStax example (c): 200 Hz at 60 dB** (Q2, Q3, Q4).
4. **Most sensitive: 3 to 4 kHz** (Q5), then **Quiet bass, 50 Hz** with Play 1 kHz, then this tone (Q6).
5. Switch to **Your audiogram.** **Normal hearing**, **Noise damage: the 4 kHz notch** and **Hearing loss with age** (Q7).
6. **Your own test** works best done alone, with headphones, in a quiet room: assign it rather than running it on the room's speakers.

## Questions

**Q1.** Greenwood's map gives the frequency at a fraction x of the basilar membrane's 35 mm length, measured from the apex: f = 165.4 (10^(2.1x) − 0.88) Hz. How far from the base does a 1 kHz tone peak? A 262 Hz tone? A 16 kHz tone? Do the octaves 250 to 500 Hz and 4 to 8 kHz take the same length of membrane?

**Q2.** OpenStax example (a): a 100 Hz tone at 80 dB. What is its intensity in W/m²? Read its loudness level in phons from the contours. The book's answer is 75 phons: why does the demo give a different value?

**Q3.** OpenStax example (b): what sound level at 4 kHz is as loud as 70 phons? Why is it a little less than 70 dB?

**Q4.** OpenStax example (c): a 200 Hz tone at 60 dB. Find its loudness level in phons, then the sound level of an 8 kHz tone that sounds just as loud.

**Q5.** Read the Threshold of hearing at f at 3.5 kHz and at 100 Hz. How many times the intensity of a just audible 3.5 kHz tone does a 100 Hz tone need to be just heard? Take the ear canal as a tube 2.5 cm long, open at the outer end and closed by the eardrum, with sound at 343.2 m/s: what is its lowest resonance, and what does that explain?

**Q6.** A 1 kHz tone at 60 dB and a 50 Hz tone at 60 dB have the same intensity. How loud is each in phons? How many sones is the 1 kHz tone, and what sound level at 1 kHz sounds twice as loud? By what factor must the intensity grow?

**Q7.** Compare the three preset audiograms. Where is the noise damaged ear worst, and why does its hearing recover at 8 kHz while the aging ear's does not? Where on the basilar membrane are the hair cells that noise wears out first?

## Common misconceptions

- **"Decibels measure loudness."** They measure intensity on a log scale. How loud a tone sounds depends on its frequency too: phons do that job, and sones say how many times louder.
- **"Twice the intensity sounds twice as loud."** Twice the intensity is only 3 dB more. Twice as loud needs about 10 dB more, ten times the intensity.
- **"Each hair cell vibrates at its own frequency, like a piano string."** The basilar membrane carries a traveling wave; its stiffness and width change along it, so each frequency's wave peaks at one place.
- **"0 dB is silence."** 0 dB is the reference intensity, 10⁻¹² W/m², near the threshold at 1 kHz. Near 3.5 kHz most young listeners hear tones below 0 dB.
- **"Hearing loss means everything gets quieter."** It usually starts at high frequencies, so speech sounds muffled: the consonants (s, f, th) fade before the vowels.

## Physics behind the demo

Decibels: β = 10 log(I/I₀) with I₀ = 10⁻¹² W/m² from constants.js; sound at 343.2 m/s at 20 °C gives the wavelength readout. Cochlea: Greenwood's place map for the human cochlea (Greenwood 1990, J. Acoust. Soc. Am. 87, 2592), f = 165.4 (10^(2.1x) − 0.88) Hz with x the fraction from the apex and a length of 35 mm. The traveling wave is drawn schematically, its amplitude growing toward the tone's place and dying within about 3 mm past it, with its phase lagging more and more on the way, as Békésy observed; its shape is not computed from the mechanics. Damaged hair cells are drawn where the map puts 3 to 6 kHz.

Loudness: the equal loudness contours of ISO 226:2003 (pure tones, free field, listeners 18 to 25 years old), from its Table 1 and equations (1) and (2), for 20 to 90 phons and its threshold of hearing; between the standard's 29 frequencies the parameters are interpolated linearly in log f. Its two equations are not exact inverses: at 1 kHz they agree within 0.04 dB. OpenStax reads its examples from the older curves of Robinson and Dadson (1956), so at low frequencies its answers differ from ISO 226 by several phons. Sones: N = 2^((L_N − 40)/10), valid above about 40 phons.

Audiogram: hearing level in dB HL, 0 dB being the normal threshold at each frequency. Your own test cannot calibrate headphones, so thresholds are on the demo's own scale, plotted relative to the threshold at 1 kHz; Subtract the normal threshold curve also removes the ISO 226 threshold shape, which assumes flat headphones. The search is a simplified Hughson-Westlake method (down 10 dB after a tone is heard, up 5 dB after it is missed, two responses on the way up). The preset audiograms are illustrative, shaped like OpenStax College Physics 2e Figure 17.37. Bands of hearing level after Clark (1981).

## Going further

- Sweep the frequency in Cochlea and note the place every octave from 125 Hz to 16 kHz. Plot place against log f: above about 1 kHz each octave takes nearly the same length, so Greenwood's map is nearly a straight line there.
- Why does music played quietly sound thin? Use the 40 phon contour at 50 Hz and 1 kHz.
- A worker hears 85 dB for 8 hours a day. How many times the intensity of a 60 dB conversation is that?
- Why is the 4 kHz notch a sign of noise and not of age? Compare the two preset audiograms at 6 and 8 kHz.
