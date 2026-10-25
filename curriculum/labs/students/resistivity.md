# Measuring a Wire's Resistivity
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§9.1 to 9.4 and §9.6. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/resistivity.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Using the demo.**

- In the **Wire** view: drag the sliding clip to set the **Length between the clips L** (left and right arrows, 5 mm; Shift 5 cm), and turn the supply's knobs for the **Supply current I** (0.05 A a click) and the **Wire temperature** (5 °C a click). The slider and step buttons below set L exactly. The view opens in 3D (drag elsewhere to turn it, scroll to zoom, double click to go back); **Flat** shows the same bench drawn flat. In 3D the wire on the rule is drawn 5 times thicker than it is; the magnified piece is to scale.
- Above the wire is a 2.5 mm piece of it, magnified 200 times and shown in real time. Each dot stands for $$10^{17}$$ free electrons, spread evenly through the metal, so a wire with four times the area holds four times as many dots along the same length; the rings on its cut end are the four gauges to the same scale. The dots move at the drift speed and cross the ring at $$I/(e\times 10^{17})$$ per second whatever the gauge (to within about 1%, since the dots come in whole numbers). Random thermal motion carries no net current and is left out of this picture.
- The graph is the potential along the wire, measured from its far end. A steady current makes it fall evenly, so its slope is the field $$E = \rho I/A$$; the voltmeter reads the drop between its two clips.
- Choose **Inside the wire** above the picture to see the free electrons in a magnified piece of this wire. With **Follow the marked electron along the wire**, the view travels with the circled electron, so the ions stream past it: its zigzag is the random motion and its slow creep to the left is the drift.
- Choose **Cold stage** above the picture: a sample wire in a liquid helium cryostat, cooled from room temperature to 1 K while the four wire meters read it. The length and gauge are the ones set above; the current is the supply current.
- Capture stores L, the meter readings (V to 4 significant figures, I as set to 3), the gauge and the temperature. $$R$$ against $$L$$ uses rows at one temperature and gauge: $$\rho = \text{slope}\times A$$. $$R$$ against $$T$$ uses rows at one length and gauge: $$\alpha = \text{slope}/R(20\ °\text{C})$$.
- Blind hides ρ, α, the wire's resistance per meter, and ρ and α from the fits, leaving the meters, the rule and the settings. The Mystery wire always hides its own values. Inside the wire, Blind also hides $$J$$, $$v_d$$, the transit time, $$I/e$$, the expected count and the collision time; the count, the drift so far and the real time stay, so $$v_d$$ can be measured. In the Wire view, Blind hides the drift speed, the expected dot rate and the slope $$E$$ of the potential (the Mystery wire hides $$E$$ too).

**What the demo models.**

- $$R = V/I$$; $$R = \rho L/A$$; $$\rho(T) = \rho_{20}\left[1 + \alpha(T - 20\ °\text{C})\right]$$
- $$I = nqAv_d$$; $$J = I/A = nqv_d$$; transit time $$= L/v_d$$
- Model: free electrons in a metal (OpenStax 9.2). The drift speed $$v_d = I/(nqA)$$ uses the free electron density $$n$$ above; $$n$$ does not change with temperature here (thermal expansion changes it by under 0.3%). The random speed is the Fermi speed $$v_F = \hbar(3\pi^2 n)^{1/3}/m$$ of the free electron model, and the mean time between collisions is $$\tau = m/(ne^2\rho)$$, so it follows $$\rho(T)$$. Electrons move in a 3D random direction and are drawn projected onto the page; ions are drawn on a square grid at the mean atomic spacing (copper's real lattice is face centered cubic). The region repeats at its edges, standing for a piece deep inside the wire. The counter counts electrons carried across the dashed plane by the drift; random motion carries electrons across both ways equally on average and is left out of the count. The electrons sit at random positions, so the count scatters about $$n v_d t\times(2\ \text{nm}\times 0.3\ \text{nm})$$ like any count; after the drift has carried the electrons one full region width (4 nm), every one has crossed exactly once.
- Model: normal metals follow Matthiessen's rule, $$\rho(T) = \rho_0 + \rho_{\text{ph}}(T)$$. The lattice part $$\rho_{\text{ph}}$$ uses the Bloch–Grüneisen formula with the Debye temperature $$\Theta$$ (Kittel, Table 5.1: Cu 343 K, Al 428 K, Sn 200 K, Pb 105 K), scaled so that $$\rho(293\ \text{K})$$ is the handbook value (Cu 1.68, Al 2.65, Sn 11.5, Pb 20.8 × 10⁻⁸ Ω·m); real curves differ from this one formula by up to tens of percent between about 10 K and 100 K. The residual part $$\rho_0 = \rho(293\ \text{K})/\text{RRR}$$ comes from impurities and defects and depends on the sample. Below the critical temperature (OpenStax Table 9.3: Al 1.20 K, Sn 3.72 K, Pb 7.19 K, YBa₂Cu₃O₇ 92 K) the resistance is exactly zero; the step is drawn sharp, while real transitions are from a millikelvin to about a kelvin wide. Copper does not become superconducting at any temperature reached so far. YBCO's normal state is drawn as $$\rho = 2.5\times10^{-6}\ \Omega\,\text{m}\times T/(300\ \text{K})$$, a typical value along its copper oxide planes; it varies from sample to sample. Thermal contraction is left out. The points are simulated readings, noise free.
- Model: $$R = \rho L/A$$ with $$\rho$$ linear in temperature; the voltmeter is ideal (four wire, so the clips and leads add nothing) and the current is set by a constant current supply. Resistivities are handbook values at 20 °C; real alloys vary by a few percent.

</details>

## Goal

Find an unknown wire's resistivity from voltage and current measurements. Test how resistance depends on length, diameter and temperature, and measure the drift speed of the electrons that carry the current.

## Background

Resistance describes a particular piece of wire; resistivity describes its material at a specified temperature. For a uniform cylindrical wire,

$$R=\frac{V}{I}=\rho\frac{L}{A},\qquad A=\frac{\pi d^2}{4}.$$

At one temperature and diameter, a graph of $$R$$ against $$L$$ has slope $$\rho/A$$. Over a suitable temperature interval, a useful model is

$$R(T)=R_{20}[1+\alpha(T-20\,^{\circ}\mathrm C)].$$

If $$R = b + kT$$ with $$T$$ in degrees Celsius, then $$R_{20} = b + 20k$$ and $$\alpha = k/R_{20}$$. Temperature differences have the same numerical value in kelvins and Celsius degrees. This experiment assumes uniform temperature, a uniform cross section and negligible contact resistance. The virtual Mystery wire has synthetic material properties; identifying a real alloy is not the goal.

**Current and drift (§§9.1, 9.2).** Current is the rate at which charge passes through a cross section, $$I = \Delta Q/\Delta t$$; one ampere is $$1/e = 6.24\times10^{18}$$ electrons per second. In a metal the charge is carried by free electrons, $$n$$ of them per cubic meter, which drift slowly against the current with speed $$v_d$$. In a time $$t$$ the electrons within a distance $$v_d t$$ of a cross section of area $$A$$ pass through it, $$nAv_dt$$ of them, so

$$I = nqAv_d,\qquad J = \frac{I}{A} = nqv_d.$$

The same current in a thinner wire needs faster drift. The electrons also move at random far faster (about $$10^6$$ m/s in copper), but that motion carries no net charge.

## Before the lab

1. Predict what happens to resistance if length doubles or diameter doubles.
2. Why would changing temperature during a length scan bias the result?
3. In a fit of $$R$$ against $$T$$, why is the intercept at 0 °C different from $$R_{20}$$?
4. Copper has $$n = 8.47\times10^{28}$$ free electrons per cubic meter. Find the drift speed for 1.00 A in a copper wire 0.405 mm across, and how long an electron takes to drift 1.00 m.

## Safety

For a real wire bench, use the assigned current limit, switch off before moving connections and avoid touching a heated wire. Do not heat an unsupported wire or improvise a temperature bath. Follow the instructor's electrical and thermal safety procedures.

## Procedure

**Length scan.** Measure wire diameter and temperature. Use separate voltage sensing contacts inside the current contacts when the real apparatus permits. At fixed temperature and current, measure $$V$$ and $$I$$ at six lengths from 0.10 to 1.00 m. Keep the same wire and diameter. Repeat one length at a second current to test whether $$V/I$$ is unchanged.

**Diameter comparison.** At the same temperature, repeat the length scan with a second diameter of the same material. Compare the slopes before calculating both resistivities. A change in resistance alone does not establish a change in material.

**Temperature scan.** Use one diameter and a fixed length. On a real bench, wait for thermal equilibrium before each reading. Record at least six temperatures over the instructor approved range, including a reading at 20 °C. Fit $$R$$ against $$T$$ and infer $$\alpha$$. In the virtual apparatus, use 0, 20, 40, 60, 80 and 100 °C. This is a prescribed linear model, not a test of whether an actual alloy remains linear over every temperature range.

**Cold stage (§9.6).** Choose Cold stage. Cool a copper sample from room temperature and note $$R/R(293\ \mathrm{K})$$ as it passes about 200, 77, 20 and 4.2 K, and the value it levels off at. Repeat at a lower and a higher sample purity. Then cool lead, tin, aluminum and YBCO, and find the temperature at which each one's resistance drops to zero. These readings are not part of the Data table; record them in your answer to Analysis 5.

**Current and drift.** Look inside a copper wire at 20 °C with the answers hidden. For each run, start the count from zero and let the electrons drift for 10 μs of real time, then record the net number that crossed the counting plane and how far the drift has carried them. Runs: the 0.405 mm wire at 0.20, 0.50 and 1.00 A, then 1.00 A in each of the other three gauges. Record these in the Current and drift table, not the Data table.

**Using the virtual apparatus.** Investigate the Mystery wire with predictions and answers hidden. Start with a 0.405 mm diameter, 0.20 A and 20 °C. Record readings at six lengths from 0.10 to 1.00 m and determine the slope of $$R$$ against $$L$$. Repeat the length scan with the 0.255 mm wire at the same current and temperature. For the temperature scan, keep that diameter and $$L = 0.500\ \text{m}$$ and measure at 0, 20, 40, 60, 80 and 100 °C; graph $$R$$ against $$T$$. Send each scan to the worksheet before clearing, so each gets its own copy of the Data table; the demo's fit uses only rows matching the current material, diameter and either temperature or length. The Mystery setting hides calculated material properties.

## Data

| Scan | Material | $$d$$ (mm) | $$T$$ (°C) | $$L$$ (m) | $$I$$ (A) | $$V$$ (V) | $$R = V/I$$ (Ω) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Copy this table for each scan. Record real meter ranges/resolutions and diameter measurements alongside it. Save the settings and CSV files.

**Current and drift.** Copper, $$n = 8.47\times10^{28}\ \mathrm{m^{-3}}$$, $$e = 1.602\times10^{-19}$$ C. The counting plane is $$2\ \mathrm{nm}\times0.3\ \mathrm{nm} = 0.6\ \mathrm{nm^2}$$. Work out the last four columns.

| Run | $$d$$ (mm) | $$I$$ (A) | Real time $$t$$ (μs) | Drift so far $$s$$ (nm) | Net crossings $$N$$ | $$v_d = s/t$$ (mm/s) | $$I/(neA)$$ (mm/s) | Expected $$N = n s\,(0.6\ \mathrm{nm^2})$$ | Time to drift 1.00 m (min) |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

## Analysis

1. Fit $$R$$ against $$L$$ for each diameter. Report slope, intercept and residuals; use the measured diameter to find $$\rho$$ at 20 °C.
2. Compare the slope ratio with the inverse squared diameter ratio. Compare the two inferred resistivities and the repeated current check.
3. Fit $$R$$ against $$T$$. Calculate $$R_{20}$$ from the fitted line, then $$\alpha$$. Compare fitted $$R_{20}$$ with the direct 20 °C reading.
4. Explain what a nonzero length fit intercept could mean on a real bench. Distinguish a possible lead/contact effect from random reading scatter.
5. For the cold stage, describe how copper's resistance changes as it cools and what sets the value it levels off at; compare that value with the purity setting. Give the critical temperature of lead, tin, aluminum and YBCO, and say which can be reached with liquid nitrogen (77 K) and which need liquid helium (4.2 K) or colder.

6. From the Current and drift table, show that $$v_d$$ is proportional to $$I$$ at one gauge and to $$1/d^2$$ at one current, and that it agrees with $$I/(neA)$$. Compare each count with the expected count, as a percentage. Why does a count of electrons scatter about its expected value, and how should the fractional scatter change with the size of the count?
7. Use the 1.00 A count in the 0.405 mm wire to estimate the number of electrons per second passing through the whole cross section, and compare it with $$I/e$$.

## Uncertainty

The virtual voltmeter records four significant figures; current is the set value recorded to three significant figures. Length adjusts in 0.005 m steps and temperature in 5 °C steps. Those prescribed settings are exact within the model; adjustment steps are not independent random errors. On a real bench, use tool resolution, calibration and diameter variation. Area uncertainty is approximately twice the fractional diameter uncertainty. Propagate voltage/current uncertainty into $$R$$ and include slope and diameter uncertainty in $$\rho$$. For $$\alpha$$, the fitted slope and $$R_{20}$$ are correlated; a fit error alone does not include temperature calibration or model error. Do not invent scatter by repeatedly recording the same simulated state.

## Questions

1. How can two wires have different resistances but the same resistivity?
2. Why can a real wire's resistance change when supply current is raised, even if the material is locally ohmic?
3. Why is four wire sensing useful for a low resistance specimen?
4. Can a near zero $$\alpha$$ prove that a material is a perfect conductor?
5. Why can the current in a superconducting magnet keep flowing for years with no power supply connected?
6. Electrons drift at well under a millimeter per second, yet a lamp lights the moment its switch closes. Why?

## What to hand in

Prelab answers, settings and data/CSV files, both length fits and the temperature fit with residuals, resistivity and temperature coefficient with uncertainty, the diameter/current comparisons, the Current and drift table, and answers to the questions. Identify simulated data.
