# Chladni Patterns and Plate Resonances
Student laboratory · Acoustics

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/chladni.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo** (the Presets chips)**:** First pattern; A cross; Rings on a circle; Sweep and listen; Square: classic star; High mode; Drumhead: rings; Drumhead overtones. The demo opens on First pattern: a 1.00 mm steel square on the wave driver at its center, Q = 50.

**Using the demo.**

- The picture is the plate seen from above with sand on it (**Sand**) or in **3D**, with the frequency response plot beside or below it; the red line on the plot is the drive frequency and can be dragged. **Sprinkle fresh sand** puts the sand back, and the brass drive post can be dragged to move the drive point.
- The function generator sets **Frequency f** with its **Coarse** and **Fine** knobs (fine, 1 cent a click), two sliders, **◀ Previous resonance** and **Next resonance ▶**, which jump to the exact peak, and **Sweep up** at 1 or 4 semitones per second. Keys on the picture: left and right arrows change f by one cent (ten with Shift), up and down jump between resonances.
- Set up the plate and driver: **Shape** (Square, Circle), **Metal** (Steel, Aluminum), **Thickness h** from 0.5 to 2 mm in 0.05 mm steps, **Drive point** (Center, Off center, Edge), **Driver** (Wave driver, Point force) with its **Driver setting x₀** or **Drive force F₀**, and **Modal Q (damping)** from 10 to 1000. Changing the shape, metal or thickness keeps the frequency where it is.
- Readouts: under Drive, the peak acceleration \|a\| on the plate in g, the grains on the plate, the post motion, the driver force and the **Nearest resonance**, with its mode label, how far f is detuned from it and its width f/Q; under Plate, the plate mass, its lowest flexural mode and the bending wavelength at f. The Display fold adds **Nodal lines** and **Where \|a\| &gt; g** overlays and switches the plot between **Response** and **Chladni's law**.
- **Record reading** stores the shape, metal, thickness, drive point, driver, Q, frequency, peak \|a\| and the nearest mode, which is named only when f is within f/Q of that resonance and is blank otherwise. **Export to worksheet** fills the Data table's columns in order: Scan (the row number with the drive point, driver and Q), Shape, Material, Thickness, Mode, Frequency; the sketch column is yours.
- **Metal plate \| Drumhead** switches to a Mylar drumhead 0.19 mm thick (polyester film, 1390 kg/m³) in a hoop 24 cm across, clamped at its rim, with a **Tension** slider from 200 to 4000 N/m and a drive by a loudspeaker under the whole head or a pad 2 cm across. It is an ideal membrane: no bending stiffness and no air. Its Nearest resonance gives the mode as $$(n, m)$$, $$n$$ nodal diameters and $$m$$ nodal circles counting the rim.

**What the demo models.**

- Thin plate (Kirchhoff–Love) theory, $$D\nabla^4 w = -\rho h\,\frac{\partial^2 w}{\partial t^2},\qquad D = \frac{Eh^3}{12(1 - \nu^2)},$$ for small, linear motion of a flat, uniform, isotropic plate with every edge free. It is good while the bending wavelength is long compared with the thickness ($$kh$$ well below 1, shown under Plate).
- The plate is 24 cm across, as in common teaching kits: a 24 cm square or a circle of radius 12 cm. Steel: $$E = 200$$ GPa, $$\rho = 7850$$ kg/m³, $$\nu = 0.30$$; aluminum: $$E = 69$$ GPa, $$\rho = 2700$$ kg/m³, $$\nu = 0.33$$. Every frequency scales as $$f \propto \frac{h}{\ell^2}\sqrt{\frac{E}{\rho(1 - \nu^2)}}$$ with $$\ell$$ the side or the radius.
- Circle: the exact free edge solution, $$w = \left[J_n(\lambda r/a) + C\,I_n(\lambda r/a)\right]\cos n\theta,$$ with the frequency equation solved to 12 digits. Square: no closed form; Rayleigh–Ritz with Legendre polynomials up to degree 30 in x and in y (961 terms), converged to better than 1 part in a million for every mode shown.
- Two drives. **Point force** is an ideal force $$F_0\cos(2\pi f t)$$ on the free plate, so its peaks are the plate's own modes. **Wave driver** is a voice coil bolted to the plate: its coil pushes on its own moving mass $$m_d = 50$$ g (an estimate) and on the plate, so the plate with that mass at the post has its own resonances, between those of a free plate and those of a plate pinned at the post. Full drive is a coil force of 17 N and the post never moves more than 3.5 mm; these figures are estimates from PASCO's published amplitudes, not measurements.
- Damping: every mode has the same Q (50 in the presets, a model choice), so each peak has width $$f/Q$$, and the response is the sum over all computed modes. The sand's mass does not load the plate.
- Sand is a picture, not a granular simulation. Where the acceleration amplitude $$\lvert a\rvert$$ exceeds $$g = 9.81\ \text{m/s}^2$$ the plate throws a grain off once a cycle, and a drift toward smaller $$\lvert a\rvert$$ stands in for grains bouncing off the tilted, moving surface; where $$\lvert a\rvert < g$$ a grain stays put, and grains that pass the edge fall off. Air is not modeled, so very light powder, which real air currents carry to the antinodes, is not shown.
- The readings are simulated: model results, not measurements.

</details>

## Goal

Find the resonances of a vibrating plate, relate the observed sand patterns to nodal lines, and test how resonance frequency changes with plate thickness.

## Background

For an ideal thin isotropic plate, flexural rigidity is

$$D=\frac{Eh^3}{12(1-\nu^2)},$$

where $$E$$ is Young's modulus, $$h$$ is thickness and $$\nu$$ is Poisson's ratio. The natural frequencies scale as

$$f_j\propto\frac{h}{\ell^2}\sqrt{\frac{E}{\rho(1-\nu^2)}},$$

for a fixed mode, shape and boundary condition. The Chladni patterns form because sand tends to collect near lines of small vibration amplitude. The demo uses a thin plate modal model with free edges and a driven point force; real grains and supports can change the observed pattern.

**A drumhead.** A membrane with tension $$T$$ per unit length and mass $$\sigma$$ per unit area, clamped at the rim of a circle of radius $$a$$, has no stiffness of its own: the tension alone pulls it back. Its modes are

$$f_{nm} = \frac{j_{nm}}{2\pi a}\sqrt{\frac{T}{\sigma}},$$

where $$j_{nm}$$ is the $$m$$th zero of the Bessel function $$J_n$$; the mode has $$n$$ nodal diameters and $$m$$ nodal circles, counting the rim. The first zeros are $$j_{01} = 2.405$$, $$j_{11} = 3.832$$, $$j_{21} = 5.136$$, $$j_{02} = 5.520$$, $$j_{31} = 6.380$$, $$j_{12} = 7.016$$ (Abramowitz and Stegun, Table 9.5). They are not in whole number ratios.

## Before the lab

1. Why does sand tend to collect near nodes rather than antinodes?
2. If thickness doubles while other plate properties remain fixed, what happens to a given mode's frequency?
3. Why must you compare the same mode when testing a frequency scaling law?
4. A drumhead's tension is made four times larger. What happens to every one of its mode frequencies? What happens to their ratios?

## Safety

For a real Chladni plate, secure the driver and plate, avoid touching vibrating edges, keep granular material away from eyes and electronics, and use hearing protection if sound levels require it.

## Procedure

**Resonance survey.** Use a steel square plate 1.00 mm thick, driven at the center by the wave driver. Find the first five resonances. Record the resonance frequency and sketch each nodal pattern, noting whether the shape is a cross, ring, star or another pattern. Use the same driver and damping conditions throughout.

**Thickness comparison.** Change to the point force driver, which measures the plate's own frequencies (the wave driver's moving mass on the post shifts them). Pick one mode from the survey and measure its frequency at thicknesses of 0.50, 1.00, 1.50 and 2.00 mm. Then measure the same mode at 0.50 and 2.00 mm with the wave driver.

**Material comparison.** With the point force driver, compare steel and aluminum for the same mode at 1.00 mm. Explain the direction of the change using rigidity and density, not just Young's modulus.

**Drumhead.** Switch to the drumhead, circular, at 1000 N/m, pushed by the pad halfway out (the Drumhead overtones setup). Find the first six resonances from the lowest up and record each one's frequency and mode. Then drive it with the loudspeaker under the whole head (the Drumhead: rings setup) and measure the lowest resonance, mode $$(0, 1)$$, at tensions of 250, 500, 1000, 2000 and 4000 N/m. Send the drumhead readings to the worksheet before clearing: they go to the Drumhead table.

**Using the virtual apparatus.** Next resonance and Previous resonance jump to the exact peak; you can also tune by hand and watch the sand settle. Record a reading at each resonance: it records the plate, the drive and the frequency, and names the nearest mode when the frequency is within that resonance's width. Sketch the pattern yourself. Changing the shape, metal or thickness keeps the frequency, so find the resonance again after each change. Send each scan to the worksheet before clearing, so each scan gets its own copy of the Data table: the resonance survey, the point force thickness scan, the two wave driver readings and the material comparison are four copies, and the point force scan has its own graph.

## Data

| Scan | Shape | Material | Thickness $$h$$ (mm) | Mode/pattern | Frequency $$f$$ (Hz) | Nodal sketch or description |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |

Keep the mode identity and driver position with every comparison.

**Drumhead.** Work out the last three columns yourself.

| Reading | Drive | Tension $$T$$ (N/m) | Mode $$(n, m)$$ | Frequency $$f$$ (Hz) | $$f/f_{01}$$ | $$j_{nm}/j_{01}$$ | $$\sqrt{T}$$ $$(\mathrm{N/m})^{1/2}$$ |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

## Analysis

1. Organize resonance frequencies by mode and sketch their nodal patterns.
2. For one mode, plot $$f$$ against thickness for the point force driver and check whether a straight line through the origin is reasonable. Compare the wave driver's frequencies with it, and explain the difference using the driver's moving mass on the post. Why is the difference larger for the thin plate?
3. Compare how the frequencies depend on material with the scaling $$\sqrt{E/[\rho(1-\nu^2)]}$$ for fixed thickness and geometry.
4. Explain how changing the driver location may make some modes difficult to excite without changing their natural frequencies.
5. For the six drumhead modes at 1000 N/m, compare $$f/f_{01}$$ with $$j_{nm}/j_{01}$$. Are the overtones harmonics of $$f_{01}$$? Compare with the string, whose overtones are $$2f_1, 3f_1, \dots$$
6. Plot $$f_{01}$$ against $$\sqrt{T}$$ for the loudspeaker runs, with a free intercept. From the slope, $$j_{01}/(2\pi a\sqrt{\sigma})$$ with $$a = 0.12$$ m, find $$\sigma$$, and compare it with the Mylar's density times its thickness.

## Uncertainty

Frequency tuning resolution, finite resonance width and ambiguous mode identification limit precision. A change in sand pattern is not automatically a new normal mode. Real plates also have uncertain thickness, support conditions and material constants. Treat simulated readings as model results rather than physical measurements.

## Questions

1. Can two different modes have nearly the same resonance frequency?
2. Why does a point driver placed on a node excite that mode poorly?
3. Why should nodal patterns not be used as direct maps of stress?
4. Which assumptions of the thin plate model might fail for a thick plate?
5. Why can a loudspeaker under the whole drumhead drive only modes with no nodal diameter, while the pad halfway out drives the others too?

## What to hand in

Prelab answers, a resonance table with sketches, thickness and material comparisons, the Drumhead table with its graph and your $$\sigma$$, uncertainty discussion and answers to the questions. Identify simulated data.
