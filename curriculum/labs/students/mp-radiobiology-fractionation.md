# Radiobiology: Fractionation and Proton RBE
Student worksheet · Medical Physics

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/radiobiology.html?ws=mp-radiobiology-fractionation)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** V79 in air and without oxygen; OER at a high dose; A little oxygen goes a long way; Human kidney cells; A curve with a shoulder; Clonogenic assay of V79; A mystery cell line; 60 Gy in 30 fractions; 60 Gy at once; Five fractions, same late effect; Prostate in 20 fractions; Protons at low LET; End of range, low α/β; Smaller fractions, higher RBE.

**Using the demo.**

- The strip across the top switches between four views: Survival and oxygen, Clonogenic assay, Fractionation, and Proton RBE.
- **Survival and oxygen** draws the surviving fraction of a cell line against the dose of low LET radiation given at once, in air and without oxygen, with the α and β parts of the curve in air. Two cell lines are built in, V79 hamster lung cells and T1 human kidney cells, or you can set your own α and β. Below are the effect of oxygen against its pressure at the chosen dose, and the oxygen enhancement ratio against dose. Drag across the top chart, or type a dose, to read the curves.
- **Clonogenic assay** simulates the classic experiment: seed a known number of cells into each of three flasks, irradiate them, and count the colonies that grow. The counts carry the random scatter of counting (Poisson), so each experiment gives slightly different numbers; New experiment repeats the whole assay. A mystery cell line has hidden α, β and plating efficiency, set by its code.
- **Fractionation** splits a total dose into 1 to 40 equal fractions, five a week, and gives the biologically effective dose and the EQD2 for tumors and early responding tissue (α/β 10 Gy), late responding normal tissue (3 Gy), prostate cancer (1.5 Gy) and a tissue of your choosing. Keep the late effect fixed makes the total dose follow the number of fractions so that late responding tissue always gets the same effect.
- **Proton RBE** gives the relative biological effectiveness of protons against the dose averaged LET and the dose per fraction, from a published model fitted to cell experiments, and compares it with the constant 1.1 used in the clinic.
- Record reading stores the numbers for the view on show. Export to worksheet sends the readings to the matching Data table below; Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Compare fractionation schedules with BED and EQD2, and see when the proton RBE of 1.1 underestimates the effect.

## Background

**Cell survival.** In the linear quadratic (LQ) model the surviving fraction of cells after a dose $$D$$ given at once is $$S = e^{-\alpha D - \beta D^2}$$. The linear term is lethal damage from one track; the quadratic term is damage from two tracks that interact, which a cell can repair if the two arrive far enough apart in time. The ratio $$\alpha/\beta$$ is the dose at which the two terms kill equally. Tumors and early responding tissues usually have $$\alpha/\beta \approx 10$$ Gy, late responding normal tissues (spinal cord, lung, kidney, rectum) about 3 Gy (Hall and Giaccia).

**Fractionation.** If a dose is split into $$n$$ fractions of $$d$$ with full repair between them, each fraction has the same effect $$\alpha d + \beta d^2$$ and the effects add: $$E = n(\alpha d + \beta d^2)$$. The biologically effective dose $$\mathrm{BED} = E/\alpha = nd\left(1 + \frac{d}{\alpha/\beta}\right)$$ is the total dose that would have the same effect if given in very small fractions. The equivalent dose in 2 Gy fractions is $$\mathrm{EQD2} = \mathrm{BED}/(1 + 2/(\alpha/\beta))$$. A tissue with a small α/β is more sensitive to the size of each fraction.

**Proton RBE.** The relative biological effectiveness is the ratio of the photon dose to the proton dose that give the same effect. Clinics use 1.1 everywhere. Measured RBE rises with the linear energy transfer, which grows toward the end of the proton range, and rises as the dose per fraction falls and as the tissue's α/β falls (Paganetti 2014). The model in the demo (McNamara, Schuemann and Paganetti 2015) writes the proton α and β as $$\alpha_p = \mathrm{RBE}_{max}\,\alpha_x$$ and $$\sqrt{\beta_p} = \mathrm{RBE}_{min}\sqrt{\beta_x}$$, with RBE$$_{max}$$ and RBE$$_{min}$$ linear in LET$$_d$$.

## Before the lab

1. Derive the BED and EQD2 formulas in the Background from $$E = n(\alpha d + \beta d^2)$$. Then show that the dose per fraction that gives a BED of $$B$$ in $$n$$ fractions is $$d = \frac{\alpha/\beta}{2}\left(\sqrt{1 + \frac{4B}{n\,(\alpha/\beta)}} - 1\right)$$.
2. A hypofractionated course gives fewer, larger fractions. Hold the effect on late responding tissue (α/β 3 Gy) at that of 60 Gy in 30 fractions, and go from 30 fractions to 5. Does the tumor (α/β 10 Gy) get more effect, the same, or less? Explain your choice.

## Safety

No hazards in the virtual lab. In a real radiobiology lab, irradiators are radiation hazards and cell culture needs sterile technique and the lab's biosafety rules.

## Procedure

**Part 1: fractionation.** (1) In the Fractionation view, set Total dose to 60 Gy (click its value to type). Set Fractions n to 1, 2, 5, 10, 20, 30 and 40 in turn, recording a reading at each. Export the readings to the worksheet and clear them. (2) Set 60 Gy in 30 fractions, then check Keep the late effect fixed (the total dose now follows n). Set Fractions n to 1, 5, 10, 15, 20, 30 and 40, recording each; export those as a second copy of the table and clear them. (3) Uncheck Keep the late effect fixed and record 60 Gy in 20 fractions and 74 Gy in 37 fractions; export those as a third copy.

**Part 2: proton RBE.** (1) In the Proton RBE view, set Proton dose per fraction to 2 Gy and (α/β)ₓ for photons to 2 Gy (click each value to type). Set LET_d to 1, 2, 4, 6, 8, 10 and 12 keV/µm in turn, recording a reading at each. Export them to the worksheet and clear them. (2) Repeat with (α/β)ₓ for photons at 10 Gy, as a second copy.

## Data

| Reading | Fractions $$n$$ | Dose per fraction $$d$$ (Gy) | Total dose (Gy) | BED, α/β 10 Gy (Gy) | EQD2, α/β 10 Gy (Gy) | BED, α/β 3 Gy (Gy) | EQD2, α/β 3 Gy (Gy) | BED, α/β 1.5 Gy (Gy) | EQD2, α/β 1.5 Gy (Gy) | Late effect held at |
|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |

### Proton RBE

| Reading | LET$$_d$$ (keV/µm) | Proton dose $$D$$ (Gy) | $$(\alpha/\beta)_x$$ (Gy) | RBE$$_{max}$$ | RBE$$_{min}$$ | RBE | RBE weighted dose (Gy(RBE)) | With RBE 1.1 (Gy(RBE)) |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

## Analysis

1. From the first fractionation table, graph EQD2 against $$n$$ for the three tissues. Which tissue's EQD2 changes most as the 60 Gy is split into fewer fractions, and why? What does that mean for giving a whole course in one or a few large fractions?
2. From the second fractionation table, with the late effect held fixed, how does the tumor's EQD2 (α/β 10 Gy) change with $$n$$? Use the Your tissue α/β control to find what α/β a tumor would need for fewer, larger fractions to cost it nothing. Explain the answer from the BED formula.
3. From the third table, compare 60 Gy in 20 fractions with 74 Gy in 37 for prostate cancer (α/β 1.5 Gy) and for late responding tissue (3 Gy). Why could a shorter course be at least as good for prostate cancer?
4. From the proton tables, graph RBE against LET$$_d$$ for $$(\alpha/\beta)_x$$ = 2 and 10 Gy and fit straight lines. Find the slopes with their standard errors. At what LET$$_d$$ does the RBE pass 1.1 for each tissue? (For one of them every reading is already above 1.1: extend its line below your lowest LET.) Which tissue's RBE depends more strongly on LET, and why does the model make it so?

## Uncertainty

The fractionation and RBE readings come straight from the models, whose uncertainty is in their parameters. The α/β of prostate cancer is 1.5 Gy with a range of 0.8 to 2.2 Gy (Brenner and Hall 1999): find the EQD2 of 60 Gy in 20 fractions at both ends of that range, and say how much that uncertainty matters for the comparison in Analysis 3.

## Questions

1. Why are tumors and early responding tissues usually given α/β ≈ 10 Gy and late responding tissues ≈ 3 Gy? What property of the cells does a large α/β reflect?
2. Stereotactic treatments give 15 to 25 Gy in one to five fractions. Why is the linear quadratic model questioned at these doses per fraction, and what does the demo's curve with its quadratic term predict at very high dose?
3. Were you right in Before the lab 2? Give the tumor's EQD2 at 30 and at 5 fractions from your second fractionation table. That table assumes the late responding tissue gets the same dose per fraction as the tumor. In stereotactic treatment the nearby normal tissue gets only a share of the tumor's dose per fraction: use the BED formula to find how small that share must be before fewer, larger fractions give the tumor more effect for the same late effect.

## What to hand in

Prelab answers, every Data table with its graphs, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data.
