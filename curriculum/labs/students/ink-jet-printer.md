# Ink Jet Printer
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §7.6 (and §5.4, §7.5). Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/electrostatics-at-work.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Machines in the demo:** Van de Graaff generator; Ink jet printer; Smoke precipitator. This worksheet uses the printer.

**Using the demo.** A continuous ink jet: drops pass a charging electrode, then fly between two deflection plates and on to the paper. The Printer section sets the charge on each drop $$q$$, the plate voltage, the drop diameter and the drop speed. Fire one drop sends a single drop; Print PHYS works out the charge for each dot, as a printer's controller does. Drops with too little charge fly into the gutter; drops with too much hit a plate. A millimeter scale stands beside the paper. Blind hides the drop charge, $$q/m$$ and the deflections, but not the scale.

**What the demo models.** Plates 10.0 mm long and 2.0 mm apart, with the paper 15.0 mm past their end; the lower plate is at the voltage set and the upper one grounded, so the field points up and positive drops bend up. The field is uniform between the plates and zero outside them (no fringing). Each drop is a water sphere of density 1000 kg/m³ moving at a constant horizontal speed; gravity is included and air drag is left out (an isolated drop would lose about a third of its speed over this path; in a real stream the drops ride in each other's wake and lose much less). Drawn to scale, in slow motion. Simulated data.

</details>

## Goal

Find how far a charged ink drop is deflected on its way to the paper, test how the deflection depends on the charge, the plate voltage and the speed, and find the charge on a drop from where it lands.

## Background

A drop of mass $$m$$ and charge $$q$$ enters the space between the plates, where the field is $$E = V/d_{\text{gap}}$$, moving horizontally at speed $$v$$. It feels a constant sideways force $$qE$$, so like a projectile it follows a parabola while between the plates, which takes $$t_1 = L/v$$:

$$y_1 = \frac12\,\frac{qE}{m}\,t_1^2.$$

It leaves the plates moving sideways at $$(qE/m)\,t_1$$ and then flies straight for the time $$t_2 = D/v$$ to the paper, so the height at which it lands is

$$y = \frac{qE}{m}\,t_1\left(\frac{t_1}{2} + t_2\right) = \frac{qV}{m\,d_{\text{gap}}\,v^2}\,L\left(\frac{L}{2} + D\right),$$

less a small drop from gravity, $$\tfrac12 g(t_1 + t_2)^2$$. A drop of diameter $$d$$ has $$m = \rho\pi d^3/6$$. The height is proportional to $$q$$ and to $$V$$, and to $$1/v^2$$. Here $$L = 10.0$$ mm, $$d_{\text{gap}} = 2.0$$ mm and $$D = 15.0$$ mm.

## Before the lab

1. Find the mass of a 60 μm water drop and the field between the plates at 3000 V.
2. Find the height on the paper of a 60 μm drop carrying 0.15 pC, moving at 20 m/s, with 3000 V on the plates. How many electrons' worth of charge is that?
3. How far does gravity pull that drop down on its way to the paper? Why can a printer ignore it?
4. By what factor does the height change if the drop moves twice as fast? If its diameter doubles at the same charge?
5. Between the plates and the paper is a 15.0 mm gap with no electric field. A charged drop leaves the plates moving to the right and slanting upward. Across the gap, does it level off and fly horizontally, keep rising at the slant it left with, or curve back down toward its starting line? Why?

## Safety

Real continuous ink jet printers use kilovolts on the deflection plates; keep covers closed while they run. Ink and its solvents can irritate the skin and eyes.

## Procedure

The demo opens on the Van de Graaff generator: press Ink jet printer under Machine first.

**Part 1: charge.** In the Printer section set Drop diameter to 60 μm, Drop speed to 20 m/s and Deflection plate voltage to 3000 V. Set the Charge on each drop q slider to 0, 0.05, 0.10 and so on up to 0.40 pC (drag close, then use the arrow keys, which move it 0.01 pC); at each, press Fire one drop and then Record reading. The landing height goes in the Height on the paper column; it reads caught by the gutter or hits a plate for drops that never reach the paper. For the 0.15 pC drop, also read Height at the end of the plates in the readouts, next to Height on the paper, and write both in your answer to Question 2. Export to worksheet, then Clear.

**Part 2: plate voltage and speed.** With q at 0.15 pC on 60 μm drops and Drop speed at 20 m/s, set the Deflection plate voltage to 1000, 2000, 3000 and 4000 V and press Record reading at each. Then, at 3000 V, set the Drop speed to 10, 15, 20, 25 and 30 m/s and record at each. Export to worksheet, then Clear.

**Part 3: an unknown charge.** Set 60 μm, 20 m/s and 3000 V, and turn on Blind: hide predictions and answers. Have a partner set the drop charge without telling you; working alone, drag the Charge on each drop q slider somewhere in its middle without looking at it (Blind hides the q readout). Press Fire one drop, read where it lands on the millimeter scale beside the paper, press Record reading and type the height into the table. Repeat for two more charges.

**Using the virtual apparatus.** Blind leaves the charge and height cells blank for you to fill from the scale. Send each part to the worksheet before clearing, so each part gets its own copy of the Data table.

## Data

| Trial | Drop diameter (μm) | Drop speed $$v$$ (m/s) | Charge $$q$$ (pC) | Plate voltage $$V$$ (V) | Drop mass (ng) | Height on the paper $$y$$ (mm) | Gravity's part (μm) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

## Analysis

1. Graph $$y$$ (vertical) against $$q$$ (horizontal) for the Part 1 drops that reached the paper. Find the slope and compare it with the Background's formula. Which drops went into the gutter, and why? Work out the largest charge that does not hit a plate (it is beyond the charge slider's range).
2. For Part 2, graph $$y$$ against $$V$$: is it a straight line through the origin? For the speed rows, work out $$yv^2$$ for each: is it the same, as the Background predicts?
3. For Part 3, use your Part 1 line to find each unknown charge from its height, and the number of electrons it corresponds to. Then turn Blind off and check.
4. The Rayleigh limit for a 60 μm water drop is about 3.3 pC. How close do the printer's charges come to it?

## Questions

1. A printer makes a character by giving successive drops different charges. Why must the charge on each drop be controlled to better than about one percent?
2. Which of the three paths in Before the lab 5 do the two heights of the 0.15 pC drop fit? Explain from the forces on the drop after it leaves the plates why it lands where it does, and check the ratio of the two heights with $$L = 10.0$$ mm and $$D = 15.0$$ mm.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The model has no noise; in Parts 1 and 2 the heights are worked out exactly and shown to 1 μm. In Part 3 the height is read from the scale beside the paper, to about 0.05 mm, which sets the uncertainty in the charge you find. In a real printer, air drag slows the drops and depends on the drops ahead of them, the charge of each drop depends on its neighbors, and the plates' field fringes beyond their ends; printers correct for all of these with calibrated charge tables. Give each unknown charge in Analysis 3 with its uncertainty from the scale reading, and say whether the revealed value lies within it.

## What to hand in

Prelab answers, a Data table copy for each part, the graphs and fits, the unknown charges, and answers to the questions (and to Uncertainty, if assigned). Identify simulated data.
