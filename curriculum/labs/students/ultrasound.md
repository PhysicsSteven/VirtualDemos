# Ultrasound Echoes and Doppler Flow
Student laboratory · Acoustics

Textbook: OpenStax *University Physics*, Vol. 1, §17.2 and §17.7; the tissue values are from OpenStax *College Physics*, §17.7. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/ultrasound.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Fat, muscle and bone; Speed of sound in water; Find the hidden cyst; Resolve a thin layer; Doppler: blood flow; Doppler: mystery flow.

**Using the demo.** A transducer sits on the skin above layers of tissue, or above an artery. The scanner screen shows the echo amplitude against time (0 to 200 μs, or a 20 μs zoom around the cursor showing the radio frequency trace), or the Doppler spectrum. A cursor reads the time or the frequency shift; drag it on the screen or use its slider and step buttons. The transducer frequency, the water depth, the beam angle and the blood speed are on the Set up card, which fades while the scanner runs. Blind hides the depths and speeds the demo works out; the hidden cyst and the mystery flow always hide theirs.

**What the demo models.** Speeds and acoustic impedances of air, water, blood, fat, muscle and bone from OpenStax *College Physics* §17.7 (bone's impedance varies from 5.7 to $$7.8\times10^6\ \mathrm{kg/(m^2\,s)}$$; the larger is chosen). A cyst is taken as water. Each pulse is three cycles long at half height (chosen). Each boundary sends back a fraction $$r = (Z_2 - Z_1)/(Z_2 + Z_1)$$ of the pressure, and the pulse loses $$1 - r^2$$ crossing each boundary above. Left out: echoes that bounce more than once, absorption in the tissue and the spreading of the beam. The scanner assumes 1540 m/s, as real scanners do. The Doppler shift is the exact $$f_0(c+u)/(c-u) - f_0$$ with $$u = v\cos\theta$$. No noise.

</details>

## Goal

Use echo times to find the speed of sound in water and the depths of boundaries inside the body, and use the Doppler shift of echoes from moving blood to find its speed.

## Background

A pulse sent into the body reflects partly at every boundary between two media. The echo from a boundary at depth $$D$$ returns after the round trip

$$t = \frac{2D}{c}\qquad\Longrightarrow\qquad D = \frac{ct}{2}.$$

A scanner does not know which tissues the pulse crossed, so it converts every echo time to depth with one assumed speed, 1540 m/s. Where the real speed differs, the depth it reports is off. The fraction of the pressure that reflects is

$$r = \frac{Z_2 - Z_1}{Z_2 + Z_1},\qquad Z = \rho c,$$

so boundaries between media of very different impedance (soft tissue and bone, or tissue and air) reflect strongly. A negative $$r$$ turns the echo upside down. A pulse of a few cycles lasts a few periods, so two echoes closer in time than about one pulse length run together; a higher frequency gives a shorter pulse and finer detail.

Blood moving with speed $$v$$ at angle $$\theta$$ to the beam has a speed $$u = v\cos\theta$$ along it. It hears the transducer's frequency $$f_0$$ shifted, and sends that back as a moving source, so the echo returns shifted by

$$\Delta f = f_0\frac{c+u}{c-u} - f_0 = \frac{2f_0u}{c-u} \approx \frac{2f_0 v\cos\theta}{c}\quad (u \ll c),$$

with $$c = 1570$$ m/s in blood.

## Before the lab

1. An echo from a boundary in water returns after 100 μs. How deep is the boundary ($$c = 1500$$ m/s)? How deep would a scanner assuming 1540 m/s say it is?
2. Find $$r$$ for a fat to muscle boundary and for a muscle to bone boundary, using $$Z = 1.34$$, $$1.70$$ and $$7.8\times10^6\ \mathrm{kg/(m^2\,s)}$$. Which echo is stronger?
3. A 3.5 MHz pulse is three cycles long. How long does it last? Two boundaries 1.0 mm apart in fat ($$c = 1450$$ m/s): how far apart in time are their echoes?
4. Blood moves at 0.50 m/s, at 60° to a 5.0 MHz beam. Estimate the Doppler shift.

## Safety

Diagnostic ultrasound is safe at the low intensities scanners use, but a real transducer is delicate: use coupling gel, do not drop it, and clean it after use. Follow the instructor's rules for any scanning of people.

## Procedure

**Part 1: speed of sound in water.** Measure the echo time from the air pocket under a tank of water at six or more water depths from 2 to 15 cm. Put the cursor on the middle (the peak) of each echo.

**Part 2: fat, muscle and bone.** Measure the time of each echo from the layers under the skin. Note which echoes are strong, which are weak and which come back upside down (zoom in to see the trace).

**Part 3: the hidden cyst.** Find the two weak echoes from a fluid filled cyst in the muscle, and measure their times. Keep the same cyst for the whole part: asking for a new one moves it.

**Part 4: a thin layer.** A 1.0 mm layer of fat lies in muscle. Find the lowest transducer frequency at which its two echoes appear as separate peaks, and record the two echo times at that frequency.

**Part 5: blood flow.** With the beam on an artery at 5 MHz and the blood moving at 0.50 m/s, all at one speed, measure the Doppler shift at three or more angles between 30° and 75°. Then measure the shift of the mystery flow at three or more angles; keep the same mystery flow for the whole scan.

**Using the virtual apparatus.** The setup cannot be changed while the scanner runs. Record each reading, and send each part to the worksheet before clearing, so each part gets its own copy of the Data table.

## Data

| Trial | Setup | Known depth (cm) | Echo time $$t$$ (μs) | Angle $$\theta$$ (°) | Doppler shift $$\Delta f$$ (Hz) | Notes |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |

## Analysis

1. Graph $$t$$ against the known depth for Part 1. The slope is $$2/c$$. Find the speed of sound in water with its uncertainty and compare it with 1500 m/s.
2. For Part 2, convert each echo time to a depth with 1540 m/s, as a scanner would. Compare with the true layers (1.5 cm of fat, 3.0 cm of muscle, 1.0 cm of bone). Why does the bone look much thinner than it is? Explain which echoes are strong and which are upside down using $$r$$.
3. For Part 3, find the depth and thickness of the cyst, using 1540 m/s for the muscle above it and 1500 m/s inside the cyst. How much would the thickness be off if you used 1540 m/s throughout?
4. For Part 4, compare the separation of the two echoes with the pulse length at each frequency you tried. Explain why the lowest frequency that separates them is the one it is.
5. For Part 5, find the blood speed from each shift and check that it does not depend on the angle. Find the mystery speed from each angle and its mean.

## Uncertainty

The model has no noise; the uncertainty is in placing the cursor on the middle of an echo or the peak of the spectrum, which you can judge by how far the cursor can move before the reading looks wrong. The spectrum's peak has a width of about 1/(20 ms) = 50 Hz from the length of the stretch of echo it is taken over. In a real body, absorption weakens deep echoes, the speed varies from tissue to tissue and person to person, multiple echoes add false images, and the beam angle is known only to a few degrees, which matters most near 90°.

## Questions

1. Why does a scanner need coupling gel between the transducer and the skin?
2. Why is ultrasound poor at imaging behind bone or gas?
3. Why do Doppler measurements avoid beam angles close to 90°?
4. In smooth (laminar) flow, the spectrum spreads from zero up to a largest shift. What does the largest shift tell you?

## What to hand in

Prelab answers, a Data table copy for each part, the graph and fit for Part 1, your depth calculations and the cyst's depth and thickness, the thin layer result, the blood speeds, and answers to the questions. Identify simulated data.
