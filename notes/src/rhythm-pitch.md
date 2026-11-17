---
title: From Rhythm to Pitch
level: Acoustics, sound and music (intro, algebra)
time: 10 to 30 minutes
---
## What students should come away with

- A sound that repeats r times a second is heard as a rhythm when r is small and as a pitch of r hertz when r is large. The physics is the same on both sides; only the ear's way of reporting it changes, somewhere between about 10 and 30 repeats a second.
- Any repeating sound is a sum of sine waves at r, 2r, 3r and so on. The repetition rate sets the pitch; the shape of one repeat sets the harmonics' sizes, which is the timbre.
- When several sounds keep a fixed ratio of rates, the same ratio is a polyrhythm when slow and a musical interval or chord when fast: 3 : 2 is "three against two" and a perfect fifth, 4 : 5 : 6 is a major chord.
- Small whole number ratios share many low harmonics, which is why they sound smooth; a ratio like 16 : 15 shares almost none and sounds rough.

## Before class

The apparatus is Savart's toothed wheel: wheels on one axle, each with a thin card resting on its rim, so every tooth that passes the top flicks the card once. A wheel with n teeth turning Ω times a second hits n·Ω times a second. Because the wheels share the axle, their rates keep the ratio of their teeth at every speed. Speed up doubles the axle speed every second until the wheel with the fewest teeth plays 220 Hz (A3); Slow down brings it back. The strip shows two turns of the axle: one mark per click in each wheel's lane, dashed lines where two wheels hit together, and the sound pressure the clicks make. The frequency line runs from 0.5 to 5,000 hits a second with bands for rhythm, flutter and pitch and a piano keyboard; Harmonics of each wheel adds each wheel's harmonics and a dot wherever two wheels share one. Sound on plays exactly the clicks drawn; headphones or room speakers work best, since phone speakers lose notes below about 100 Hz.

## Running it in class

1. **One beat.** Press Play with Sound on and let the class tap along at 2 hits a second. Press Speed up and ask them to put a hand up when they can no longer count the clicks, and again when they hear a note. Ask Q1.
2. Pause at the top (220 Hz, A3) and point at the sound pressure trace: the same click, repeating every 4.5 ms. Ask Q2.
3. **Three against two: fifth.** Play it slow, clapping the two parts with two halves of the room, then Speed up. Ask Q3.
4. **4 : 5 : 6 major chord.** The three wheels hit together once a turn (the dashed lines). Speed up into A3, C♯4, E4. Turn on Harmonics of each wheel and point at the dots: the 5th harmonic of 220 Hz and the 4th of 275 Hz are both 1,100 Hz. Ask Q4.
5. **15 : 16 semitone clash.** Slow, the two drift in and out of step and line up every 8 s. Fast, a rough semitone with almost no dots. Ask Q5.
6. **Song: chords that change.** Slow, it is a drum pattern; Speed up and the same pattern is a tune over a bass and chords in A. Only the axle speed changes from bar to bar: 1, 4/3, 3/2, 1.

## Questions

**Q1.** Nothing about the clicks changed as the axle sped up except how often they came. Why do we hear separate beats at 5 a second and a note at 100 a second?

**Q2.** A 4 tooth wheel at 55 turns a second plays 220 Hz. How fast must a 6 tooth wheel turn to play the same note, and what would change about the sound?

**Q3.** Two wheels hit 2 and 3 times a second. How often do they hit together, and what is the musical interval when the axle is 100 times faster?

**Q4.** The 4 : 5 : 6 chord at 220 Hz repeats its whole pattern 55 times a second. Which note is that, and why can some listeners hear a faint low pitch there?

**Q5.** Why do the harmonics of 15 : 16 fail to line up within the first dozen, and what do two sine waves 15 Hz apart near 1,000 Hz sound like?

## Common misconceptions

- **"Pitch is a different kind of thing from rhythm."** Both are the repetition rate of a sound; the ear switches from counting to hearing a pitch at about 30 repeats a second.
- **"Pitch comes from a sine wave."** A train of clicks has no sine shape at all, yet it has a clear pitch at its repetition rate.
- **"A piano's intervals are the simple ratios."** Equal temperament makes every semitone 2^(1/12); its major third is 400 cents against 386.3 for 5 : 4, and only the octave is exact.
- **"Higher harmonics change the note."** They change the timbre; the note follows the repetition rate, which is also the spacing of the harmonics.

## Physics behind the demo

- Each tooth gives one click, e^(−t/τ) sin(2π f t) with τ = 1 ms and a different f (900 to 3,000 Hz) for each wheel, so the wheels sound different as a rhythm. Its spectrum is ω_c/|(1/τ + iω)² + ω_c²|, and a train of them r a second has lines at m r of size 2 a r |H(m r)|. The sound is made sample by sample from the axle angle, each click placed at its exact time between two samples, so it is periodic to rounding.
- Loudness: above 40 hits a second the clicks are played quieter, so the note's power summed over its harmonics below the Nyquist frequency (Parseval) stays what it is at 40 hits a second, from a low buzz up to C8; a 10 Hz high pass takes out the steady offset fast clicks pile up, as a loudspeaker would. Any wheel can reach 4,400 hits a second, just above the piano's top note. The page says so.
- The edges of rhythm (about 10 hits a second, the fastest beat listeners follow: J. London, Hearing in Time, 2nd ed., 2012) and of pitch (about 30 a second: D. Pressnitzer, R. D. Patterson and K. Krumbholz, J. Acoust. Soc. Am. 109, 2074, 2001) depend on the listener and the sound, so they are drawn as bands. 20 Hz, the usual lower limit of hearing, sits inside the flutter band.
- Notes are named in equal temperament with A4 = 440 Hz; the piano runs from A0 (27.5 Hz) to C8 (4,186 Hz). Intervals are named from the reduced ratio of teeth with octaves taken out.
- Tested in curriculum/validation/test_rhythm_pitch.cjs: hit counts, note names, interval cents, the click's spectrum against a numerical Fourier transform, the Fourier lines of a click train, the synth's click times, its 220 Hz tone and harmonics, the chord repeating once a turn, and the Song's bars.

## Going further

- Pair with **Timbre and Harmonics** for building a tone from its harmonics and the missing fundamental, and with **Standing Waves on a String** for beats between two close frequencies.
- Félix Savart built toothed wheels like these around 1830 to find the limits of hearing. Ask students how they would use the demo to find their own lowest pitch.
