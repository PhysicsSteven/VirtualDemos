# Calibrating a Proton Beam: TRS-398 Step by Step
Student worksheet · Medical Physics

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/dosimetry.html?ws=mp-proton-calibration&setup=sat)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** ⁶⁰Co buildup; Equilibrium at depth; 0.5 MeV: a thin buildup; 4 MeV: a deep buildup; Saturation curve, protons; High dose per pulse; ⁶⁰Co: hardly any recombination; Calibrate a 150 MeV layer; 70 MeV: z_ref = 1 g/cm²; Where N_D,w comes from.

**Using the demo.**

- This worksheet uses the **Ion chamber** and **Calibration** views. The chamber is a 0.6 cm³ Farmer type thimble chamber in water.
- **Ion chamber** shows the chamber cut along its axis, with ion pairs drifting to the electrodes and the pairs lost to recombination, and a graph of the reading against the voltage (or $$1/M$$ against $$1/V$$). Each reading is one delivery of 1.000 Gy to water at 20.0 °C and 101.325 kPa.
- **Calibration** shows a water phantom under the beam with the chamber at the reference depth, an electrometer, a thermometer in the water and a barometer. Choose the beam, the proton energy and the chamber, set the voltage and polarity, and deliver the plan (100 MU) or, at the standards laboratory, irradiate for 2.000 min. The Calibration steps in the sidebar walk through the corrections; type a factor and Check it.
- Each reading carries simulated noise of 0.05 %, so repeat readings and use their mean. Changing the beam, energy or chamber starts a new session.
- Record reading stores the last reading. Export to worksheet sends Ion chamber readings to the first Data table and Calibration readings to the second; Clear starts a new series, which goes into a new copy of the table.
- The chamber is simulated from the same formulas you use, with TRS-398 (2000) key data, so a careful calibration gives back the dose the demo delivered. A real calibration uses the chamber's own certificate and the current TRS-398 Rev. 1 tables.

</details>

## Goal

Find a chamber's recombination correction from its saturation curve, and calibrate a 150 MeV scanned proton layer in absorbed dose to water following the steps of IAEA TRS-398, with an uncertainty budget.

## Background

**Bragg–Gray cavity theory.** A small air cavity in water that does not disturb the electron (or proton) fluence gets the dose $$D_{air}$$, and the water around it the dose $$D_w = D_{air}\, s_{w,air}\, p_Q$$, where $$s_{w,air}$$ is the ratio of the mass stopping powers of water and air for the particles crossing it and $$p_Q$$ corrects for the chamber's departures from an ideal cavity. The charge $$Q$$ collected from air of mass $$m$$ gives $$D_{air} = (Q/m)(W_{air}/e)$$, with $$W_{air}$$ the mean energy spent per ion pair.

**The TRS-398 formalism.** A standards laboratory gives the chamber a calibration coefficient $$N_{D,w,Q_0}$$ in ⁶⁰Co ($$Q_0$$). In the user's beam $$Q$$,

$$D_{w,Q} = M_Q\, N_{D,w,Q_0}\, k_{Q,Q_0}, \qquad M_Q = M_{raw}\, k_{TP}\, k_{pol}\, k_s\, k_{elec},$$

- $$k_{TP} = \dfrac{273.2 + T}{273.2 + 20}\cdot\dfrac{101.325}{P}$$ (T in °C, P in kPa) brings the air in the vented chamber back to the density of the calibration;
- $$k_{pol} = \dfrac{\lvert M_+\rvert + \lvert M_-\rvert}{2\lvert M\rvert}$$, with $$M$$ the reading at the polarity used;
- $$k_s$$ corrects for ions lost to recombination. In a pulsed beam (the synchrocyclotron's beam comes in pulses at 1 kHz), from readings $$M_1$$ at the normal voltage $$V_1$$ and $$M_2$$ at $$V_2$$: $$k_s = a_0 + a_1 (M_1/M_2) + a_2 (M_1/M_2)^2$$, with $$a_0 = 2.337$$, $$a_1 = -3.636$$, $$a_2 = 2.299$$ for $$V_1/V_2 = 2$$. In a continuous beam, $$k_s = \dfrac{(V_1/V_2)^2 - 1}{(V_1/V_2)^2 - M_1/M_2}$$;
- $$k_{elec} = 1$$ here (the electrometer is calibrated with the chamber).

**Beam quality factor for protons.** $$k_{Q,Q_0} = \dfrac{(s_{w,air})_Q\, (W_{air})_Q\, p_Q}{(s_{w,air})_{Q_0}\, (W_{air})_{Q_0}\, p_{Q_0}}$$, with $$p_Q = 1$$ in protons. TRS-398 (2000) gives

$$(s_{w,air})_Q = 1.137 - 4.3\times10^{-5}\, R_{res} + \frac{1.84\times10^{-3}}{R_{res}},$$

with the residual range $$R_{res} = R_p - z_{ref}$$ in g/cm², $$(W_{air})_Q = 34.23$$ eV, $$(s_{w,air})_{Q_0} = 1.133$$, $$(W_{air})_{Q_0} = 33.97$$ eV, and $$p_{Q_0}$$ = 0.982 for the PTW 30013 chamber (0.973 for the NE 2571, 0.972 for the IBA FC65-G). ICRU Report 90 raised $$(W_{air})_Q$$ for protons to 34.44 eV, and TRS-398 Rev. 1 (2024) recalculated every $$k_Q$$ with it.

**Reference conditions.** For a scanned proton layer TRS-398 Rev. 1 puts the reference depth at $$z_{ref} = 2$$ g/cm² when $$R_{res} \ge 5$$ g/cm² (1 g/cm² otherwise), in a 10 cm × 10 cm field. In the demo $$R_p$$ is the proton's CSDA range from NIST PSTAR (15.77 g/cm² at 150 MeV), a stated simplification.

**Recombination in a pulsed beam (Boag).** If a pulse frees $$n_0$$ ion pairs per unit volume, the fraction collected is $$f = \ln(1 + u)/u$$ with $$u \propto n_0 d^2/V$$ ($$d$$ the electrode gap, $$V$$ the voltage). For small $$u$$, $$1/f \approx 1 + u/2$$, so $$1/M$$ is a straight line in $$1/V$$ whose intercept at $$1/V = 0$$ is $$1/Q_{sat}$$, all the charge freed.

## Before the lab

1. Show from the ideal gas law that the mass of air in a vented chamber is proportional to $$P/T$$, and hence that $$k_{TP}$$ above corrects the reading to the reference air density. By what percentage does $$k_{TP}$$ change for a 1 °C change in water temperature? For a 1 kPa change in pressure?
2. Part 1 delivers the same 1 Gy at 400 V twice, once at 1.0 mGy per pulse and once at 8.0 mGy per pulse. Compared with the first run, does the chamber lose about the same share of its ions to recombination in the second, about eight times the share, or a smaller share? Give your reason.

## Safety

No hazards in the virtual lab. In a real treatment room, follow the center's procedures: nobody in the room during beam, the chamber voltage on and the chamber settled before the first reading, and the electrometer allowed to warm up.

## Procedure

**Part 1: the saturation curve.** Open the Saturation curve, protons setup (1.0 mGy per pulse, + polarity). Set the Chamber voltage slider (arrow keys move it 25 V a step) to 50, 100, 200, 400 and 500 V; at each press Deliver 1 Gy and read the charge, then Record reading. Press Export to worksheet, then Clear. Repeat with the High dose per pulse setup (8.0 mGy per pulse) and export those readings to a second copy of the first table.

**Part 2: calibrating a 150 MeV layer.** Open Calibrate a 150 MeV layer (PTW 30013). Press Deliver the plan: 100 MU and then Record reading, five times at 400 V with Polarity +; then three times at Polarity −, and three times at 200 V with Polarity +. Export them to the worksheet (the second table), then clear them. Copy the N_D,w certificate (simulated) readout into the factor table. Fill in the factor table as you work down the Calibration steps in the sidebar; type each factor there and press Check to test it.

**Part 3: a mystery machine.** Open the Lab fold and check Mystery machine: the output has drifted by an unknown amount (it starts a new session with a new room temperature and pressure). Repeat only the five deliveries at 400 V with Polarity + from Part 2 (use your Part 2 $$k_{pol}$$ and $$k_s$$, since only the output changed) and export the readings to a second copy of the second table.

## Data

| Reading | Voltage $$V$$ (V) | $$1/V$$ (1/kV) | Reading $$M$$ (nC) | $$1/M$$ (1/nC) |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |

### Calibration readings

| Reading | Beam | Voltage (V) | Polarity | Reading $$M$$ (nC) | Water temperature (°C) | Pressure (kPa) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |

### Factors for the 150 MeV calibration

| Quantity | Value | Relative standard uncertainty (%) | Where it comes from |
|---|---|---|---|
| Mean reading $$M_+$$ at +400 V (nC) | | | |
| $$k_{TP}$$ | | | |
| $$k_{pol}$$ | | | |
| $$k_s$$ | | | |
| $$N_{D,w,Q_0}$$ (Gy/nC) | | 0.6 | certificate (simulated) |
| $$k_{Q,Q_0}$$ | | 1.7 | TRS-398 data |
| $$D_w$$ for 100 MU (Gy) | | | |

## Analysis

1. Graph $$1/M$$ against $$1/V$$ (in 1/kV) for each copy of the first table and fit straight lines. Look at the residuals: where the points curve (at the higher dose per pulse), fit only 200 to 500 V. From each intercept find $$Q_{sat}$$ with its standard error, and then $$k_s = Q_{sat}/M$$ at 400 V.
2. From Part 2: complete the factor table and compute $$D_w$$ for the 100 MU plan and the dose per MU. Combine the relative uncertainties in quadrature (type A of $$M_+$$ from $$s/\sqrt{n}$$, $$k_{TP}$$ from the thermometer's and barometer's last digits taken as uniform, $$k_{pol}$$ and $$k_s$$ from their readings, $$N_{D,w}$$ and $$k_Q$$ as given). Which term dominates?
3. The plan expects 1.000 Gy at $$z_{ref}$$. Is the machine's output consistent with that within your expanded uncertainty ($$k = 2$$)?
4. From Part 3: by what percentage has the mystery machine's output drifted? Is the drift significant at $$k = 2$$? Which factors did you measure again in Part 3, and which did you carry over from Part 2?

## Uncertainty

Separate the uncertainty in Analysis 2 into what you could reduce with more readings or better instruments and what you could not.

## Questions

1. The Bragg–Gray conditions require the cavity not to disturb the charged particle fluence. Why is that easier to meet for a Farmer chamber in a 150 MeV proton beam than in a low energy photon beam?
2. A Farmer chamber is 2.3 cm long. Why do scanned proton beams usually use a plane parallel chamber close to the surface instead, and why is $$z_{ref}$$ so shallow?
3. From your two values of $$k_s$$ at 400 V in Analysis 1, what share of the freed charge did the chamber lose to recombination at 1.0 and at 8.0 mGy per pulse, and how does that sit with your answer to Before the lab 2? Explain the ratio of the two shares with Boag's $$u$$, and say whether you would expect it to equal the ratio of the doses per pulse exactly.

## What to hand in

Prelab answers, both copies of the first Data table with their graphs, the calibration readings for Parts 2 and 3, the factor table, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.
