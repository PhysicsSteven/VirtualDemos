# Measuring, Converting and Checking Units
Student activity · Physics I foundations

Textbook: OpenStax *University Physics*, Vol. 1, §§1.1–1.4. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/units.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Tabs in the demo:** Scale of things; Convert units; Dimensional analysis; Significant figures; Fermi estimates. This handout uses the first three; Significant figures and Fermi estimates go with the Estimating and Reporting handout.

**Using the demo.**

- The page opens on **Scale of things**. **Zoom through** flies from the observable universe down to one carbon atom in the DNA of your fingertip and on into a proton, with every object drawn at its true size and each power of ten taking the same scroll; **Ruler** is a logarithmic ruler of the same sizes, each tick ten times the one before, over about 42 powers of ten. Scroll or pinch on the picture, drag up and down, use the arrow keys, press **Fly in** or **Fly out**, move the **Width of the view** slider, or pick a stop under **Go to**.
- **Convert units**: choose a **Quantity** (length, speed, mass, energy or time), a **Value** and its units **from** and **to**. The chain shows each exact factor, so you can see which units cancel. There is no area quantity.
- **Dimensional analysis**: choose a **Question** (the period of a pendulum, a mass on a spring, the speed of a wave on a string, the period of a circular orbit, or the time to fall a height), set the **power of** each variable with its slider (−2 to 3 in steps of 0.5) until the dimensions [M L T] on the left match the answer's, then press **Show the answer**. Variables that do not appear in the answer get exponent 0.
- There is no Record or Export in this demo: the Data table is filled from your own measurements and working.
- Blind hides the results (the converted value, the dimension check, the rounded answer, the estimate and the object names on the ruler and in the zoom) so you can work first.

**What the demo models.**

- A conversion is a chain of factors through SI, each factor equal to 1: $$\text{value in new units} = \text{value}\times\frac{\text{SI units per old unit}}{\text{SI units per new unit}}.$$ The factors are the exact legal definitions, except where marked: 1 in = 0.0254 m, 1 ft = 0.3048 m, 1 mi = 1609.344 m, 1 lb = 0.45359237 kg, 1 cal = 4.184 J, 1 kWh = 3.6 × 10⁶ J, 1 h = 3600 s, 1 year = 31 557 600 s, and 1 km/h = 1000/3600 m/s.
- Dimensions are kept as the powers of M, L and T: a length is [0 1 0], a speed [0 1 −1], an acceleration [0 1 −2], a force [1 1 −2]. The demo guesses the answer is a product of powers of the chosen quantities and solves for the powers that make the dimensions match; a pure number in front (like 2π) cannot be found this way, so the answer states it separately.
- Sizes on the ruler and in the zoom are typical or approximate values, marked ≈ or about; ranges in nature are wide (a human hair is 20 to 180 μm). The named values come from the demo's Sources and approximations fold: proton radius 0.84075 fm (CODATA 2022), carbon 12 charge radius 2.4702 fm (Angeli and Marinova 2013), Mount Everest 8,849 m, planet positions for 23 October 2026 from the JPL approximate orbital elements, the Sun 26,670 ly from the centre of the Milky Way (GRAVITY 2019), the observable universe 8.8 × 10²⁶ m across; light travel distances use c = 299,792,458 m/s exactly. Nothing in this demo is a reading: it computes from exact factors and tabulated sizes.

</details>

Do the conversions and dimensional checks by hand first, then check the length and speed conversions in the demo's Convert units tab and compare the dimensions of familiar formulas in its Dimensional analysis tab; its Scale of things tab helps with the powers of ten sketch. It does not replace your own measurements.

## Goal

Turn an everyday measurement into a defensible physical statement. Use SI units, conversion factors and dimensions to check calculations before trusting a numerical answer.

## Background

A physical quantity combines a number and a unit. Changing the unit changes the number, not the physical length or time. Conversion factors equal one, so multiplying by them preserves the quantity. For example, the exact definitions 1 cm = 10⁻² m, 1 h = 3600 s and 1 in = 0.0254 m can be used without treating those definitions as measured uncertainties.

Dimensions describe the kind of quantity. Speed has dimension L/T, acceleration L/T² and energy ML²/T². Every term added in an equation must have the same dimensions. Dimensional agreement is necessary, but it cannot determine a dimensionless numerical coefficient by itself.

## Before the activity

1. Can two students report different numbers for the same length and both be correct?
2. What units should a graph of distance against time have on each axis and in its slope?
3. Why is adding a length to a time physically meaningless?

## Safety

Measure only objects or indoor distances you can reach safely. Do not climb, block a walkway or time motion near traffic.

## Procedure

**Ask a measurable question.** Choose a desk or another accessible object. Write one testable question about its size and one statement that is a preference rather than a physical measurement. Describe the system, quantity and measuring method.

**Measure a scale.** Estimate the object's length before measuring. Measure length and width in centimetres using a ruler or tape; record the tool markings and how you read the endpoints. Repeat one length from the opposite end. Calculate area in cm², then convert both lengths to metres and calculate area again. Check agreement after converting area to m². Sketch where this object fits relative to a millimetre and a kilometre on a powers of ten scale.

**Practice conversions.** Convert the supplied practice values 72.0 km/h to m/s, 250.0 cm² to m² and 2.50 in to metres. Show factors and cancellation. These are exercise inputs, not measurements of your object.

**Check an equation.** A cart starts at $$x_0$$ with speed $$v_0$$ and constant acceleration $$a$$. Check each proposed expression:

$$\begin{aligned} &\text{(a)} \quad x = x_0 + v_0 t + \frac{1}{2} a t^2 \\[6pt] &\text{(b)} \quad x = x_0 + v_0 + \frac{1}{2} a t^2 \\[6pt] &\text{(c)} \quad x = x_0 + 2 v_0 t + a t^2 \end{aligned}$$

Which can be rejected by dimensions alone? What further physical information is needed for the others?

No simulation is required. If a measuring tool is unavailable, ask the instructor for a clearly labeled supplied measurement set; do not invent observations and present them as real.

## Data

| Quantity/task | Estimate | Reading/input and unit | Tool resolution or supplied status | Conversion factors | SI result |
|---|---|---|---|---|---|
| Object length | | | | | |
| Object width | | | | | |
| Repeated length | | | | | |
| Calculated area | | | | | |
| Conversion practice | | | Supplied exercise | | |

## Analysis

1. Explain how the measuring instrument connects your numerical report to a standard unit. Distinguish repeatability from calibration.
2. Compare your estimate with the measured length using a ratio or percentage difference. Explain the scale of the discrepancy.
3. Show the two area calculations and explain why the length conversion factor must be squared for area.
4. Complete the dimensional checks. Explain why a dimensionally consistent equation may still be physically wrong.

## Uncertainty

Record the ruler's smallest marking, endpoint alignment and variation between readings. State a reasonable reading bound; do not automatically identify half a division with a statistical standard deviation. Converting exact units does not create new precision. For a rectangular area, uncertainty depends on both measured sides and any shared calibration error. Extra calculator digits are not extra measured information.

## Questions

1. How does a scientific prediction differ from a preference statement about the object?
2. Why is 1 cm² not equal to 10⁻² m²?
3. Can dimensional analysis distinguish $$v_0 t$$ from $$2 v_0 t$$?
4. What information would you need before deciding which of two conflicting rulers is more accurate?

## What to hand in

Preactivity answers, your measurable question and scale sketch, recorded observations with units, conversion work, dimensional checks, uncertainty discussion and question answers. Clearly distinguish supplied inputs from observations.
