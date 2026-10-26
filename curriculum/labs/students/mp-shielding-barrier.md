# Shielding a PET Uptake Room
Student laboratory · Medical Physics

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/nuclear-reactions.html?setup=doPet)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** PET uptake room (this worksheet), in the Dose view; the reaction, fission, fusion and dose setups of the Modern Physics worksheets.

**Using the demo.**

- The source is a point emitting γ rays equally in all directions, with the line energies and photons per decay of ENSDF (NuDat 3). For ¹⁸F that is two 511 keV annihilation photons per positron, with positrons in 96.7% of decays. The dose rate is the photon energy flux times the soft tissue mass energy absorption coefficient (NIST SRD 126), with no attenuation in air. At 1 m it is 0.148 µSv/h per MBq, 3.7% above the dose rate constant of 0.143 µSv m²/(MBq h) that AAPM Task Group 108 recommends (Madsen et al., Med. Phys. 33, 4 (2006)).
- Narrow beam: the shield removes every photon that interacts, $$e^{-\mu x}$$ with μ from NIST. Broad beam, with buildup: the meter also counts photons scattered in the shield, and the transmission is TG-108's fit in Archer's form, $$T(x) = \left[(1 + \beta/\alpha)\,e^{\alpha\gamma x} - \beta/\alpha\right]^{-1/\gamma}$$, with lead α = 1.543 /cm, β = −0.4408 /cm, γ = 2.136, and concrete α = 0.1539 /cm, β = −0.1161 /cm, γ = 2.0752 for 2.25 g/cm³ (the 2.30 g/cm³ concrete of the demo is scaled by density). The buildup factor shown is $$b = T(x)/e^{-\mu x}$$. Broad beam data are given for ¹⁸F in lead and concrete only.
- The barrier section follows TG-108 for a wall of an uptake room: N patients a week, each in the room for t hours from injection, the source decaying meanwhile, a factor 0.64 because the patient's own body absorbs 36% of the photons, the design goal P for the area beyond the wall and its occupancy factor T, from NCRP Report 147 (2004). It gives the weekly dose with no wall, the transmission needed, and the lead and concrete that give it in broad and in narrow beam.
- Record reading stores the shield, both dose rates, the buildup factor and the barrier calculation. Export to worksheet sends the readings to the Data tables below; Clear starts a new series.

</details>

## Goal

Measure the broad beam transmission of 511 keV annihilation photons through lead and concrete, see how much buildup a narrow beam calculation misses, and design the wall of a PET uptake room to the NCRP design goals.

## Background

A patient injected with ¹⁸F FDG rests in an uptake room for about an hour while the tracer reaches the tissues, and is the room's source of 511 keV photons. Behind a thick shield, photons that scatter in the shield and still come out add to the dose, so the transmission of a broad beam is larger than $$e^{-\mu x}$$:

$$T(x) = b(x)\,e^{-\mu x}, \qquad b \ge 1 .$$

TG-108 gives broad beam transmission curves for 511 keV photons in lead, concrete and iron, fitted to Archer's form above.

The dose beyond the wall of an uptake room, per week and with no wall, is (TG-108, with its decay factor written as an integral)

$$D = 0.64\,N\,\Gamma\,\frac{A_0}{d^2}\int_0^{t_U} e^{-\lambda t}\,dt ,$$

with Γ the dose rate constant, A₀ the injected activity, d the distance from the patient to the point beyond the wall, and $$t_U$$ the uptake time. The wall must transmit at most

$$B = \frac{P}{T\,D},$$

where P is the design goal (0.1 mSv per week for a controlled area, 0.02 mSv per week for an uncontrolled one) and T is the occupancy factor of the space beyond (1 for an office, 1/5 for a corridor, 1/40 for a stairway).

## Before the lab

1. Do the integral and show that $$D = 0.64\,N\,\Gamma\,A_0\,t_U\,R_t/d^2$$ with $$R_t = 1.443\,(t_{1/2}/t_U)\left(1 - e^{-0.693\,t_U/t_{1/2}}\right)$$, TG-108's decay factor. Evaluate $$R_t$$ for $$t_U$$ = 1 h and $$t_{1/2}$$ = 109.77 min.
2. The setup has 40 patients a week, 555 MBq each, an uptake time of 1 h, the chair 2 m from the point beyond the wall, and an office beyond it (uncontrolled, T = 1). With Γ = 0.143 µSv m²/(MBq h), find the weekly dose with no wall and the transmission B the wall must have.
3. Invert Archer's form to show that $$x = \frac{1}{\alpha\gamma}\ln\frac{B^{-\gamma} + \beta/\alpha}{1 + \beta/\alpha}$$, and find the lead thickness for your B.
4. Show that Archer's T(x) falls as $$e^{-\alpha x}$$ for large x, and that its slope at x = 0 is $$-(\alpha + \beta)$$. Compare α and α + β for lead with the narrow beam μ = 1.777 /cm at 511 keV (NIST). What do the two comparisons say about the scattered photons in thin and thick shields?
5. From NIST, μ/ρ of lead is 0.1614 cm²/g at 500 keV and 0.1248 cm²/g at 600 keV. Interpolate log–log to 511 keV and check the μ above (ρ = 11.35 g/cm³).

## Safety

No hazards in the virtual lab. In a real PET suite the largest doses to staff come from drawing up and injecting the dose and from escorting the patient, not from the walls; lead syringe shields and distance do most of the work.

## Procedure

**Transmission.** In the PET uptake room setup (¹⁸F, 555 MBq, 2 m, broad beam), record readings with no lead, then 0.2, 0.5, 1, 1.5, 2, 2.5, 3 and 4 cm of lead. Export the readings; they go to Table 1. Clear them, choose concrete, and record readings with 0 to 30 cm in 5 cm steps. Export them, into a second copy of Table 1, and Clear.

**Barrier design.** With lead of any thickness, set the barrier inputs to the setup's values (40 patients a week, 1 h, offices, uncontrolled, patient absorption on) and record a reading. Then change one input at a time from these values, recording a reading for each: 80 patients a week; 1.5 h uptake; a corridor beyond the wall (T = 1/5); a controlled area beyond the wall; patient absorption off. Export the readings; they go to Table 2.

## Data

Table 1. Transmission of 511 keV photons, ¹⁸F at 2 m.

| Reading | Shield | Thickness x (cm) | Narrow beam rate (µSv/h) | Broad beam rate (µSv/h) | Buildup factor b | ln(T) broad | ln(T) narrow |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

Table 2. Barrier for the uptake room wall.

| Reading | Patients a week N | Uptake time (h) | Occupancy T | Design goal P (mSv/wk) | Patient absorption | Weekly dose, no wall (mSv) | Transmission needed B | Lead, broad beam (mm) | Lead, narrow beam (mm) |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

Work out ln(T) = ln(rate/rate at x = 0) for both beams in Table 1.

## Analysis

1. Graph ln(T) broad against x for lead. Fit a line to the points from 2 cm on, and compare its slope with α and with the narrow beam μ. Then fit the points from 0 to 0.5 cm and compare with α + β.
2. Graph the buildup factor against x for lead. How large is it at the thickness your wall needs? What error does a narrow beam design make there, in dose and in millimeters of lead?
3. Repeat Analysis 1 for concrete, and find the broad beam tenth value layer at large thickness, ln 10/α scaled to the demo's density. Compare with the narrow beam tenth value layer, ln 10/μ.
4. Check the first row of Table 2 against your Before the lab answers 2 and 3. Explain any difference in the weekly dose from the demo's dose rate constant.
5. Which input in Table 2 changes the lead needed the most per factor of change? From the logarithm in Before the lab question 3, show that doubling the patient load (halving B) adds a thickness that approaches ln 2/α once $$B^{-\gamma} \gg \beta/\alpha$$, and compare that limit with the extra lead your rows give for a doubled load. Why is the step larger for a thin wall?

## Uncertainty

The dose rate constant itself is uncertain by a few percent (this demo's value and TG-108's differ by 3.7%), and Archer's form is a fit to calculated transmission data, not an exact law. Find how much the lead thickness changes for a 5% change in B, from your inversion formula, and say whether that is significant next to the thickness of a commercial lead sheet (1/16 inch is 1.6 mm).

## Questions

1. TG-108's dose rate constant for a patient, 0.092 µSv m²/(MBq h), is 0.64 times the bare source value. Why is it smaller, and why might a design leave that factor out for the hot lab, where the activity is in a vial or syringe?
2. Concrete needs many more centimeters than lead for the same transmission, yet many PET suites use concrete or concrete block. Why? Compare the mass per unit area of your broad beam lead and concrete walls.
3. Why does the buildup factor grow with thickness, while the narrow beam calculation stays exact for a pencil beam aimed at a small detector?
4. NCRP 147's design goal for uncontrolled areas, 0.02 mSv per week, works out to 1 mSv a year. Compare with the 3.5 mSv a year natural background in the United States (OpenStax Vol 3 §10.7).
5. A ¹³⁷Cs source gives a 662 keV γ ray. Would the lead buildup factor at the same μx be larger or smaller than for 511 keV, and why can the demo not tell you?

## What to hand in

Prelab answers, both tables with their graphs and fits, your wall thickness with its uncertainty and the narrow beam error, and answers to the questions. Identify simulated data.
