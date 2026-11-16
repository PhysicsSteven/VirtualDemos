# Ultrasound Echoes and Doppler Flow
Student laboratory · Acoustics

Textbook: OpenStax *University Physics*, Vol. 1, §17.2 and §17.7; the tissue values are from OpenStax *College Physics*, §17.7. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/ultrasound.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Fat, muscle and bone; Speed of sound in water; Find the hidden cyst; Resolve a thin layer; Doppler: blood flow; Doppler: mystery flow.

**Using the demo.** A transducer sits on the skin above layers of tissue, or above an artery. The scanner screen shows the echo amplitude against time (0 to 200 μs, or a 20 μs zoom around the cursor showing the radio frequency trace), or the Doppler spectrum. A cursor reads the time or the frequency shift; drag it on the screen or use its slider and step buttons. The transducer frequency, the water depth, the beam angle and the blood speed are on the Set up card, which fades while the scanner runs. The scanner is off until you start it. Blind hides the depths and speeds the demo works out; the hidden cyst and the mystery flow always hide theirs.

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
4. Blood moves at 0.50 m/s through a 5.0 MHz beam. Before you open the demo, decide whether its echo's Doppler shift is larger with the beam at 30° to the flow, larger at 70°, or the same at both. Say why.

## Safety

Diagnostic ultrasound is safe at the low intensities scanners use, but a real transducer is delicate: use coupling gel, do not drop it, and clean it after use. Follow the instructor's rules for any scanning of people.

## Procedure

**Part 1: speed of sound in water.** Press the **Speed of sound in water** setup, then **Start the scanner**. Measure the echo time from the air pocket at four water depths: 2, 6, 10 and 14 cm. For each depth, stop the scanner, set **Water depth, transducer to the air pocket** (drag, then −1 mm or +1 mm), start the scanner, and put the cursor on the middle (the peak) of the echo: drag it on the screen or use the **Cursor time** slider and its step buttons, with **Zoom: 20 μs around the cursor** to place it. Press **Record reading**; the water depth goes in the Known depth column.

**Part 2: fat, muscle and bone.** Press the **Fat, muscle and bone** setup and start the scanner. Record the time of each echo from the layers under the skin, one reading per echo. In the Notes column write which echoes are strong, which are weak and which come back upside down (zoom in to see the trace).

**Part 3: a thin layer.** Press the **Resolve a thin layer** setup (a 1.0 mm layer of fat in muscle, at 2 MHz) and start the scanner, with Zoom on. Try the transducer frequency buttons 2, 3.5, 5 and 7.5 MHz in turn (stop the scanner to change it), find the lowest at which the two echoes appear as separate peaks, and record the two echo times at that frequency.

**Part 4: blood flow.** Press the **Doppler: blood flow** setup (5 MHz, 0.50 m/s, **All blood at one speed**) and start the scanner. Measure the Doppler shift at two angles, 30° and 70°: stop the scanner, set **Angle θ between the beam and the flow** (or θ −1° and θ +1°), start it again, put the cursor on the peak of the spectrum with the **Cursor shift** slider, and record. Then press **Doppler: mystery flow** and measure its shift at the same two angles; keep the same mystery flow for the whole scan (do not press **New mystery flow**). If the peak is off the right of the spectrum, pick a wider spectrum range (10 kHz or 20 kHz).

**Using the virtual apparatus.** Before you measure, tick **Blind: hide the depths, speeds and predictions**. Once you have started the scanner yourself, the Set up card is hidden while it runs: stop the scanner to change the setup. **Record reading** stores the setup, depth, angle and the cursor's time or shift. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.

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

1. Graph $$t$$ (vertical) against the known depth (horizontal) for Part 1. The slope is $$2/c$$. Find the speed of sound in water with its uncertainty and compare it with 1500 m/s.
2. For Part 2, convert each echo time to a depth with 1540 m/s, as a scanner would. Compare with the true layers (1.5 cm of fat, 3.0 cm of muscle, 1.0 cm of bone). Why does the bone look much thinner than it is? Explain which echoes are strong and which are upside down using $$r$$.
3. For Part 3, compare the separation of the two echoes with the pulse length at each frequency you tried. Explain why the lowest frequency that separates them is the one it is.
4. For Part 4, find the blood speed from each shift. Find the mystery speed from each angle and its mean.

## Uncertainty

The model has no noise; the uncertainty is in placing the cursor on the middle of an echo or the peak of the spectrum, which you can judge by how far the cursor can move before the reading looks wrong. The spectrum's peak has a width of about 1/(20 ms) = 50 Hz from the length of the stretch of echo it is taken over. In a real body, absorption weakens deep echoes, the speed varies from tissue to tissue and person to person, multiple echoes add false images, and the beam angle is known only to a few degrees, which matters most near 90°.

## Questions

1. Why does a scanner need coupling gel between the transducer and the skin?
2. The same blood was measured at 30° and 70° in Part 4. How did the two shifts compare with your choice in Before the lab 4, and why does the angle change the shift but not the speed you work out from it? In smooth (laminar) flow the spectrum spreads from zero up to a largest shift: what does that largest shift tell you, and why must the angle be known to turn it into a speed?

## What to hand in

Prelab answers, a Data table copy for each part, the graph and fit for Part 1, your depth calculations, the thin layer result, the blood speeds, and answers to the questions. Identify simulated data.
