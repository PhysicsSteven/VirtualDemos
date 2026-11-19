---
title: Nerve Signals and the ECG
level: Algebra based intro physics (electric potential, RC circuits; OpenStax College Physics 2e 20.7, also the AP edition); Medical Physics
time: 20 to 40 minutes
---
## What students should come away with

- A cell's resting voltage comes from ions leaking through its membrane. Each ion alone would settle at its Nernst potential, E = (kT/ze) ln(c_out/c_in); at rest the membrane passes potassium far more easily than sodium, so the voltage sits near E_K, about −67 mV inside a human nerve cell.
- The membrane is a capacitor 8 nm thick, so even 70 mV is a field of millions of volts per meter.
- An axon is a leaky cable: a small kick of charge spreads and dies within a length constant λ. A kick past threshold opens sodium channels, and the action potential regenerates itself all the way along at full height: all or none. Just after, the membrane is refractory.
- Bare axons conduct at a speed that grows as √d, so a squid needs a giant axon half a millimeter thick. Myelin cuts the capacitance and the leak of the internodes, the impulse jumps from node to node, and the speed grows as d: a 10 μm myelinated axon beats a bare one more than ten times over.
- The heart acts as one electric dipole that turns during each beat. Each ECG limb lead is its component along one side of Einthoven's triangle, so lead II = lead I + lead III at every instant, and the net QRS in leads I and aVF gives the heart's mean electrical axis.

## Before class

Students should know electric potential, a capacitor and an RC time constant. Three views, chosen above the picture: **Resting potential** (Human nerve cell or Squid giant axon, Temperature, K⁺ outside, Sodium permeability P_Na/P_K), **Axon** (Myelinated or Bare, Axon diameter d, Myelin on internodes 12 to 14 Healthy, Thinned or Lost, Race a second axon of the other kind, Kick ΔV at the left end, Stimulate again, and Electrode A and B positions) and **Heart and ECG** (Heart rate, Mean QRS axis, Also show aVR, aVL and aVF, Trace the dipole's loop). A slow motion menu sets the simulated time per second, shown on the strip. Readings and the Speed against diameter graph collect one point per run. Blind, in the Lab fold, hides the threshold, the model's speed, the resting voltage and the heart's axis so students can predict first. Every trace is simulated by the model.

## Running it in class

1. **Myelinated against bare.** The opening setup: two 10 μm axons kicked at the same moment. Ask which one wins before pressing Play (Q5).
2. **Below threshold**, **Just above threshold** and **Two stimuli close together** (Q4).
3. **Thin bare fiber (C fiber)**, **Thick myelinated fiber** and **Squid giant axon**: record a reading after each run and watch the points on Speed against diameter (Q6).
4. **Thinned myelin** and **Myelin lost** (Q7).
5. Switch to **Resting potential.** **Human nerve cell at rest** and **Squid axon at rest** (Q1, Q3), then **High potassium outside** (Q2) and **Peak of the impulse**.
6. Switch to **Heart and ECG.** **Normal heart**: freeze it and check Einthoven's law on the leads. Then **Left axis deviation** and **Right axis deviation** with Blind on, and **Fast heart rate** and **Slow heart rate** (Q8).

## Questions

**Q1.** A human nerve cell at 37 °C has K⁺ 5 mM outside and 140 mM inside, and Na⁺ 145 mM outside and 12 mM inside. Find kT/e, then the Nernst potentials E_K and E_Na. The demo's resting voltage is about −67 mV: which one is it near, and why?

**Q2.** Potassium outside doubles from 5 mM to 10 mM (severe hyperkalemia). By how much does E_K rise? Does the resting voltage rise by the same amount? Why is this dangerous for nerve and heart cells?

**Q3.** The membrane is 8 nm thick. What electric field does a resting voltage of −67 mV put across it? Compare it with the field between two plates 1 cm apart joined to a 9 V battery.

**Q4.** A bare 10 μm axon is kicked with 10 mV and then with 16 mV. Describe what each kick does. Find the threshold to within 1 mV by changing the kick and pressing Reset and Play. Does a 40 mV kick give a bigger impulse than a 16 mV kick? Why does a second kick 2 ms after the first fail?

**Q5.** Two 10 μm axons, one myelinated and one bare, are kicked together. Predict which arrives first, then read the speed of each between electrodes A and B. How many times faster is the myelinated one? Explain why myelin, which is an insulator, makes the impulse faster.

**Q6.** In the model a bare axon's speed goes as √d and a myelinated one's as d. The bare 10 μm axon runs at 2.70 m/s and the myelinated one at 36.4 m/s. Predict the speed of a bare 1 μm axon, a myelinated 14 μm axon and the bare 476 μm squid axon, then measure them. Why does the squid need such a thick axon, and why are all the model's speeds lower than those of human fibers?

**Q7.** Press Thinned myelin: electrodes A and B sit on either side of internodes 12 to 14. Press Play and read the speed between them. Then move A to about 4 mm and B to about 12 mm, both on healthy myelin before the damage, and run it again. Where is the impulse slower, and why? With Myelin lost, what happens to the impulse at internode 12? Which disease does this model?

**Q8.** A normal heart at 72 beats per minute has its mean QRS axis at +60°. Freeze the trace at any instant and check that lead II = lead I + lead III. For the axis at −45°, which leads show a net positive QRS and which net negative? Find the axis from the net QRS in leads I and aVF. With R waves 0.40 s apart, what is the heart rate?

## Common misconceptions

- **"The nerve signal is current flowing along the axon like a wire."** The axon is a poor, leaky wire: a passive signal dies within about a millimeter. The impulse is regenerated at each place by ions crossing the membrane.
- **"A stronger stimulus gives a bigger action potential."** Above threshold every impulse has the same height; a stronger stimulus gives more impulses per second, not bigger ones.
- **"The resting voltage is set by the sodium potassium pump."** The pump keeps the concentrations up; the voltage comes from the ions leaking through the membrane, mostly potassium.
- **"Many ions cross to make the action potential."** Only a tiny fraction of the ions inside cross: charging a capacitor of about 1 μF/cm² by 100 mV takes very little charge.
- **"Myelin makes the signal faster by insulating it like a wire's coating."** It lowers the internodes' capacitance as well as their leak, so less charge is needed to bring the next node to threshold; the impulse is regenerated only at the nodes.
- **"The ECG measures the heartbeat's sound or pressure."** It measures voltages on the skin from the heart's electric dipole, which changes just before each contraction.

## Physics behind the demo

Resting potential: the Nernst potential of each ion and the Goldman-Hodgkin-Katz voltage, with k_B and e exact (2019 SI) and 0 °C = 273.15 K. Concentrations from Purves et al., Neuroscience, 6th ed. (2018), Table 2.1, with values chosen inside its ranges where it gives one (human Na⁺ inside 12 mM, Cl⁻ inside 10 mM; squid Cl⁻ inside 40 mM). Permeability ratios P_K : P_Na : P_Cl = 1 : 0.04 : 0.45 at rest and 1 : 20 : 0.45 at the peak (Hodgkin and Katz 1949). Membrane thickness 8 nm (OpenStax College Physics 2e 20.7).

Axon: the Hodgkin-Huxley membrane (Hodgkin and Huxley 1952) on a cable at 18.5 °C, with g_Na = 120, g_K = 36, g_L = 0.3 mS/cm², C_m = 1 μF/cm² and R_i = 35.4 Ω cm, stepped implicitly on 600 pieces (bare) or 1 μm nodes and ten pieces per internode (myelinated); speeds are within 1% of a much finer grid. For the 476 μm squid axon the demo gives 18.6 m/s; Hodgkin and Huxley computed 18.8 m/s and measured 21.2 m/s. Myelin: axon diameter 0.7 of the fiber's, internodes 100 fiber diameters long, lamellae 16 nm apart, each adding two membranes in series. The nodes carry five times the squid membrane's channel density, a chosen value. The model runs at 18.5 °C (the squid membrane fails to fire at 37 °C), so its speeds are lower than those of human fibers at body temperature; the slopes v ∝ √d and v ∝ d are what to compare.

Heart: one dipole in the frontal plane (Einthoven's model), with P, Q, R, S and T as pulses in time, each pointing its own way; the QRS is turned so its area points along the mean axis set, and the T wave moves with Bazett's rule, QT ∝ √RR. The sizes and directions are a schematic choice that gives textbook shapes, not a recording. The axis found from the net QRS deflections (largest plus smallest) in leads I and aVF is close to the set axis, not equal to it.

## Going further

- How thick would a bare axon have to be to keep up with a 10 μm myelinated one? Use v ∝ √d from the bare axons you timed; the answer is past the demo's 500 μm, thicker than the squid's.
- Raise the Temperature in Resting potential: kT/e grows in proportion to the kelvin temperature, and so does every Nernst potential.
- Use Trace the dipole's loop to show why lead aVR is upside down in a normal ECG.
