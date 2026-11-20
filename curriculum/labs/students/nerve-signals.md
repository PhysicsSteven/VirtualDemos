# Nerve Signals and the ECG: Conduction Speed and the Heart's Axis
Student worksheet · Medical Physics and College Physics 2e

Textbook: OpenStax *College Physics 2e*, §20.7 (nerve conduction and electrocardiograms), with §19.1 (electric potential) and §21.6 (RC circuits); the same sections in *College Physics for AP Courses 2e*. Access for free at https://openstax.org/details/books/college-physics-2e.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/nerve-signals.html?setup=race)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Used here:** the Axon view with the setups Myelinated against bare, Thin bare fiber (C fiber), Below threshold, Squid giant axon and Myelin lost, and the Heart and ECG view with Normal heart, Left axis deviation and Right axis deviation. The Resting potential view is not used.

**Using the demo.**

- The bar above the picture holds **Play** (it becomes Pause while the demo runs), **Reset**, the slow motion menu (simulated time per real second, such as "1 s = 0.25 ms") and the three views: **Resting potential**, **Axon** and **Heart and ECG**.
- In the Axon view the picture shows an axon from the side with a stimulating electrode at its left end and two recording electrodes, A and B, above it. The membrane's color shows its voltage. Below it an oscilloscope draws the voltage at A and at B against time.
- The Set up card on the left holds **Myelinated** and **Bare**, the **Axon diameter d** slider (0.5 to 500 µm; a myelinated axon goes up to 20 µm), **Race a second axon of the other kind**, the **Kick ΔV at the left end** slider, and the **Electrode A at** and **Electrode B at** sliders, which give each electrode's distance from the left end in mm. You can also drag an electrode along the axon.
- Each electrode times the impulse when the voltage under it rises through 0 mV. The Readouts give **Electrode gap Δx (A to B)**, **Delay Δt** (the time from A to B) and **Speed Δx/Δt** for each axon. **Record reading** (under Readings) adds a row with the fiber, its diameter, Δx, Δt and the speed; in the Heart and ECG view a row holds the heart rate and the net QRS of leads I, II, III and aVF. **Export to worksheet** sends the rows to this worksheet, and **Clear** starts a new set.
- **Blind: hide predictions** (in the Lab fold) hides the threshold, the speed the model predicts for the axon and the heart's axis, so you measure them yourself.
- In the Heart and ECG view the picture shows a body with electrodes on the right arm, left arm and left leg (Einthoven's triangle), the heart's dipole turning inside it, and ECG paper running at 25 mm/s and 10 mm/mV. **Also show aVR, aVL and aVF** adds the augmented leads. The Readouts give **Lead I now**, **Lead II now** and **Lead III now**, and the **Net QRS, I · II · III**.

**What the demo models.**

- The membrane is the Hodgkin and Huxley (1952) squid membrane on a cable at 18.5 °C: sodium and potassium channels that open and close with the voltage, a capacitance of 1 µF/cm² and an axial resistivity of 35.4 Ω cm. The bare cable is cut into 600 short pieces and stepped in time by 0.004 ms; a myelinated one has 1 µm nodes and ten pieces per internode, stepped by 0.001 ms. Speeds are within 1 % of a much finer grid.
- Myelin: the axon is 0.7 of the fiber's outer diameter, each internode is 100 fiber diameters long, and every layer of myelin adds two membranes in series. The nodes carry five times the squid membrane's channel density, a chosen value.
- The model runs at 18.5 °C (the squid membrane does not fire at 37 °C), so its speeds are lower than those of human fibers at body temperature. How the speed grows with diameter is what to compare with real fibers.
- The heart is one electric dipole in the frontal plane (Einthoven's model). Its P, Q, R, S and T waves are pulses in time, each pointing its own way; the sizes and directions are a schematic choice that gives textbook shapes, not a recording. Every trace is simulated.

</details>

## Goal

Measure how fast a nerve impulse travels along an axon, with and without myelin, and how that speed depends on the axon's diameter. Then find the direction of the heart's electric dipole from an ECG.

## Background

**The resting membrane.** A nerve cell holds more potassium ions (K⁺) inside than outside and more sodium ions (Na⁺) outside than inside. Its membrane, about 8 nm thick, lets potassium leak through much more easily than sodium. Potassium ions leak out, leaving the inside negative, until the electric force on them balances their tendency to spread out. For one kind of ion with charge $$ze$$, the balance is reached at the Nernst potential

$$E = \frac{kT}{ze}\ln\frac{c_\text{out}}{c_\text{in}},$$

the voltage of the inside relative to the outside, where $$c_\text{out}$$ and $$c_\text{in}$$ are the concentrations, $$k$$ is Boltzmann's constant and $$T$$ the temperature in kelvins. At 37 °C, $$kT/e = 26.73$$ mV. A nerve cell rests near the potassium potential, a little above it because some sodium also leaks in: the demo's human nerve cell rests at −67 mV (§20.7 quotes −70 to −90 mV). The membrane is a capacitor: charge on its two faces holds this voltage.

**The action potential.** If a stimulus raises the voltage of a patch of membrane past a *threshold*, sodium channels open, sodium rushes in, and the inside turns positive within a millisecond. Then the sodium channels close, potassium channels open, and the voltage falls back to rest. This pulse is the action potential. It is *all or none*: a kick below threshold dies out, and any kick above it gives the same full pulse. For a few milliseconds after a pulse the membrane is *refractory* and cannot fire again.

**Conduction along an axon.** An axon is a long thin tube of membrane. Seen from the outside it is a poor cable: its inside conducts, but the membrane leaks, so a small kick of charge spreads only a short way before it leaks away, like charge on a long chain of resistors and capacitors. The action potential travels because each patch that fires charges the next patch past threshold. The impulse moves at a steady speed $$v$$, so the time for it to cover a distance $$\Delta x$$ is $$\Delta t = \Delta x / v$$. With two recording electrodes A and B a distance $$\Delta x$$ apart, $$v = \Delta x / \Delta t$$. A graph of $$\Delta x$$ against $$\Delta t$$ for several electrode gaps is a straight line through the origin with slope $$v$$. A gap in mm divided by a time in ms is a speed in m/s.

**Bare and myelinated axons.** For a bare axon, a thicker axon has a smaller resistance along its inside, so the charge from a firing patch reaches farther ahead, and the speed grows as the square root of the diameter $$d$$:

$$v_\text{bare} \propto \sqrt{d}, \qquad \text{so} \qquad v_\text{bare}^2 \propto d.$$

Squid escape from predators with a bare axon about half a millimeter thick. Vertebrate nerves instead wrap their axons in myelin, many layers of fatty membrane. Myelin is an insulator, and it cuts both the leak and the capacitance of the axon between the gaps in it (the nodes of Ranvier), so much less charge is needed to bring the next node to threshold. The impulse jumps from node to node. For a myelinated axon the speed grows in proportion to the diameter:

$$v_\text{myelinated} \propto d.$$

In multiple sclerosis the myelin is damaged, and the impulse slows or stops.

**The ECG.** As a wave of action potentials sweeps through the heart muscle, the heart acts like one electric dipole whose size and direction change during each beat. Electrodes on the right arm (RA), left arm (LA) and left leg (LL) form Einthoven's triangle. Each limb lead measures the component of the dipole along one side of the triangle. Measure angles from the patient's left (the direction of lead I, 0°) toward the feet (+90°):

- lead I (LA − RA) points along 0°, lead II (LL − RA) along +60°, and lead III (LL − LA) along +120°;
- at every instant, lead II = lead I + lead III (Einthoven's law), since the three voltages go around the triangle;
- the augmented lead aVF points straight down, along +90°.

Write the dipole's horizontal component as $$p_x$$ (toward the patient's left) and its vertical component as $$p_y$$ (toward the feet). Then lead I is $$p_x$$ and aVF is $$\tfrac{\sqrt3}{2}p_y$$. The biggest wave of each beat is the QRS complex. The *net QRS* of a lead is its largest value plus its smallest (most negative) value during the QRS: positive when the lead mostly points along the dipole during the QRS, negative when it mostly points against it. The *mean QRS axis* $$\theta$$ is the dipole's average direction during the QRS. From the net QRS in leads I and aVF,

$$\tan\theta = \frac{p_y}{p_x} = \frac{(2/\sqrt3)\,\text{aVF}}{\text{I}}.$$

Take $$\theta$$ between −90° and +90° when lead I is positive; when lead I is negative, add 180° to the arctangent. A normal axis lies between about −30° and +90°. An axis more negative than −30° is *left axis deviation*; one beyond +90° is *right axis deviation*.

## Before the lab

1. The demo's human nerve cell has K⁺ 5 mM outside and 140 mM inside. Find $$kT/e$$ at 37 °C from $$k = 1.380649\times10^{-23}$$ J/K and $$e = 1.602176634\times10^{-19}$$ C, then the potassium Nernst potential $$E_\text{K}$$. Why does the resting voltage, −67 mV, lie a little above $$E_\text{K}$$?
2. Predict: two axons 10 µm across, one myelinated and one bare, are kicked at the same moment. Which impulse reaches electrode B first, and by roughly what factor is it faster? Give your reason. (You will watch this in Part 1.)
3. If $$v_\text{bare} \propto \sqrt{d}$$, by what factor is a 20 µm bare axon faster than a 5 µm one? By what factor if both are myelinated, with $$v \propto d$$? What should you plot against $$d$$ to get a straight line for each kind?

## Safety

None for the virtual apparatus. A real ECG connects electrodes on a person's skin to an amplifier built and isolated for that use; never connect electrodes on a person to any other instrument.

## Procedure

**Set up.** Open the demo with the link above: it starts in the Axon view with the setup **Myelinated against bare**. Open **Lab** (under the Readings) and tick **Blind: hide predictions**. Leave Blind ticked until Part 6 says to untick it.

**Part 1. Myelinated against bare.** Write your prediction from Before the lab 2 if you have not. Press **Play** and watch the two impulses on the axons and on the oscilloscope. When both have passed electrode B, read **Speed Δx/Δt** for the myelinated and the bare axon in the Readouts and note them for Questions 1.

**Part 2. Distance and time on a myelinated axon.** Untick **Race a second axon of the other kind**, so only the myelinated 10 µm axon is left.

1. Set **Electrode A at** to about 8 mm and **Electrode B at** to about 16 mm (drag the sliders, or the electrodes in the picture).
2. Press **Reset**, then **Play**. When the Readouts show the **Delay Δt**, press **Record reading**.
3. Move only electrode B, to about 22, 28 and 33 mm, pressing **Reset**, **Play** and **Record reading** each time. You now have four rows.
4. Press **Export to worksheet**, put the readings in the Data table below, and then press **Clear** in the demo.

**Part 3. Distance and time on a bare axon.** Press **Bare** (in the Set up card). The electrodes stay where they were. Repeat Part 2 with B at about 16, 22, 28 and 33 mm, then Export to worksheet and Clear. The readings go into a second copy of the Data table.

**Part 4. Speed against diameter.** Press the setup **Thin bare fiber (C fiber)**: a bare axon 1 µm across, with the electrodes at 30 % and 70 % of its length.

1. Move the **Axon diameter d** slider to 2.0 µm (the arrow keys move it one step at a time). Press **Play**, and when the Delay appears press **Record reading**. The electrodes keep their places as fractions of the axon's length, so you need not move them.
2. Repeat at 5.0, 10, 15 and 20 µm. Export to worksheet (a third copy of the table) and Clear.
3. Press **Myelinated** and repeat at 2.0, 5.0, 10, 15 and 20 µm. Export to worksheet (a fourth copy) and Clear.

**Part 5. Threshold.** Press the setup **Below threshold**: a bare 10 µm axon given a kick of 10 mV. Press **Play** and watch the traces at A and B on the oscilloscope. Raise **Kick ΔV at the left end** by 1 mV at a time, pressing **Play** after each change, until an impulse reaches B. Note the smallest kick that fires and the peak voltage of the trace at B. Then set the kick to 40 mV, press **Play**, and note the peak at B again. Record nothing in this part; your notes go into Questions 3.

**Part 6. The heart's axis.** Switch to **Heart and ECG** (above the picture); the setup **Normal heart** opens. Keep Blind ticked.

1. Press **Play** and watch a few beats. Press **Pause**, then press **Step** (beside Play; each press moves the paper on by 0.02 s) until a wave is being drawn and **Lead II now** reads more than 0.1 mV. Copy **Lead I now**, **Lead II now** and **Lead III now** for Questions 4.
2. Press **Record reading**. Then press the setup **Left axis deviation** and **Record reading**, then **Right axis deviation** and **Record reading**.
3. Press **Export to worksheet**: the three rows go into the ECG table below. Type each row's setup name.
4. Untick **Blind**. Press each of the three setups again and copy the **Mean QRS axis** readout into the Axis set column.

## Data

One copy of this table for each of Parts 2, 3 and 4 (bare) and 4 (myelinated). The last column is yours, for the bare axons of Part 4.

| Reading | Fiber | $$d$$ (µm) | Electrode gap $$\Delta x$$ (mm) | Delay $$\Delta t$$ (ms) | Speed $$v$$ (m/s) | $$v^2$$ (m²/s²) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |

**ECG table** (Part 6). The net QRS columns come from the demo; the last two are yours.

| Reading | Setup | Heart rate (beats/min) | Net QRS, I (mV) | Net QRS, II (mV) | Net QRS, III (mV) | Net QRS, aVF (mV) | Axis from I and aVF (°) | Axis set (°) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

## Analysis

1. Graph $$\Delta x$$ (vertical) against $$\Delta t$$ (horizontal) for the myelinated axon of Part 2, with a straight line fit. What is the slope, in m/s? Is the intercept close to zero? Do the same for the bare axon of Part 3. How many times faster is the myelinated impulse? Compare with your prediction in Before the lab 2.
2. For the bare axons of Part 4, fill in the $$v^2$$ column. Graph $$v^2$$ against $$d$$ with a straight line fit. Give the slope and intercept. Is the intercept close to zero, as it must be if $$v_\text{bare} \propto \sqrt{d}$$? Use your fit to predict the speed of the squid's bare giant axon, 476 µm across.
3. For the myelinated axons of Part 4, graph $$v$$ against $$d$$ with a straight line fit. Give the slope (in m/s per µm) and the intercept. Is the intercept close to zero? Compare the ratio $$v(20\ \mu\text{m})/v(5\ \mu\text{m})$$ for each kind of axon with your answers to Before the lab 3.
4. With your fits from Analysis 2 and 3, how thick would a bare axon have to be to match the speed of a myelinated axon 10 µm across? How many times thicker is that?
5. For each row of the ECG table, work out the axis from lead I and aVF with the formula in the Background and fill in that column. By how many degrees does each differ from the axis set? Which setups show left or right axis deviation, and which leads have a net negative QRS in each?

## Questions

1. Part 1: which impulse reached B first, and what speeds did you read? How many times faster was the myelinated one, and how does that compare with your prediction and with your answer to Analysis 1? Explain why wrapping an axon in an insulator makes the impulse faster.
2. Press the setup **Squid giant axon** (Blind still on) and press **Play**. Read its speed. Compare it with your prediction from Analysis 2 and with the 18.8 m/s that Hodgkin and Huxley computed from their model and the 21.2 m/s they measured. Why does a squid need such a thick axon, and why are all the model's speeds lower than those of human nerve fibers?
3. Part 5: what was the smallest kick that sent an impulse to B? What happened at B to a smaller kick? Did the 40 mV kick give a taller impulse at B than the kick just above threshold? Explain what *all or none* means, using what the sodium channels do.
4. Part 6: give the three leads you copied at one instant. Does lead II equal lead I plus lead III? Why must that hold at every instant?
5. Switch back to **Axon** and press the setup **Myelin lost**, in which internodes 12 to 14 have lost their myelin. Press **Play**. What happens to the impulse there? Which disease does this model, and why does a patient lose sensation or movement?

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The demo times the impulse where the voltage at an electrode rises through 0 mV, between time steps of 0.004 ms (bare) or 0.001 ms (myelinated). The myelinated impulse jumps from node to node, so its arrival at an electrode depends a little on where in an internode the electrode sits (read the **Internode length** in the Readouts). Compare the scatter of your myelinated and bare points about their lines in Analysis 1 (look at the residuals). Which effect sets the uncertainty of each slope? Would wider electrode gaps help?

For each straight line fit in Analysis 1 to 3, give the slope and the intercept with their uncertainties, and say whether each intercept is zero within its uncertainty.

## What to hand in

Your answers to Before the lab, the four copies of the Data table with their graphs and fits, the ECG table, and your answers to Analysis and Questions (and to Uncertainty, if assigned). Say that your data came from the simulated apparatus.
