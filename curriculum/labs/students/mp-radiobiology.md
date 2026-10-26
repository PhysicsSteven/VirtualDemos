# Radiobiology: Cell Survival and Fractionation
Student worksheet · Medical Physics

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/radiobiology.html?ws=mp-radiobiology)

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

Read and fit linear quadratic survival curves, measure how oxygen changes them, measure a survival curve yourself with a simulated clonogenic assay and find its α and β with uncertainties, compare fractionation schedules with BED and EQD2, and see when the proton RBE of 1.1 underestimates the effect.

## Background

**Cell survival.** A cell "survives" radiation if it can still divide without limit, which a clonogenic assay tests: a surviving cell grows into a colony of 50 or more cells. In the linear quadratic (LQ) model the surviving fraction after a dose $$D$$ given at once is $$S = e^{-\alpha D - \beta D^2}$$. The linear term is lethal damage from one track; the quadratic term is damage from two tracks that interact, which a cell can repair if the two arrive far enough apart in time. The ratio $$\alpha/\beta$$ is the dose at which the two terms kill equally. Tumors and early responding tissues usually have $$\alpha/\beta \approx 10$$ Gy, late responding normal tissues (spinal cord, lung, kidney, rectum) about 3 Gy (Hall and Giaccia). The surviving fraction at 2 Gy, SF2, is a common way to compare cell lines.

**Oxygen.** Oxygen fixes radiation damage that the cell could otherwise repair, so well oxygenated cells are more sensitive. The oxygen enhancement ratio is the ratio of the doses that give the same survival without and with oxygen, $$\mathrm{OER} = D_{hypoxic}/D_{air}$$; for low LET radiation it is about 2.5 to 3. Most of the effect is reached by about 20 mmHg, far below the 160 mmHg of air, but many tumors hold regions with less oxygen than that, and those cells resist radiation.

**The clonogenic assay.** Cells seeded without radiation do not all make colonies. The plating efficiency is $$\mathrm{PE} = $$ colonies / cells seeded, measured in unirradiated control flasks, and the surviving fraction after a dose $$D$$ is $$\mathrm{SF} = $$ colonies / (cells seeded × PE). Since a colony count is a count of independent events, its standard error is about the square root of the count.

**Fractionation.** If a dose is split into $$n$$ fractions of $$d$$ with full repair between them, each fraction has the same effect $$\alpha d + \beta d^2$$ and the effects add: $$E = n(\alpha d + \beta d^2)$$. The biologically effective dose $$\mathrm{BED} = E/\alpha = nd\left(1 + \frac{d}{\alpha/\beta}\right)$$ is the total dose that would have the same effect if given in very small fractions. The equivalent dose in 2 Gy fractions is $$\mathrm{EQD2} = \mathrm{BED}/(1 + 2/(\alpha/\beta))$$. A tissue with a small α/β is more sensitive to the size of each fraction.

**Proton RBE.** The relative biological effectiveness is the ratio of the photon dose to the proton dose that give the same effect. Clinics use 1.1 everywhere. Measured RBE rises with the linear energy transfer, which grows toward the end of the proton range, and rises as the dose per fraction falls and as the tissue's α/β falls (Paganetti 2014). The model in the demo (McNamara, Schuemann and Paganetti 2015) writes the proton α and β as $$\alpha_p = \mathrm{RBE}_{max}\,\alpha_x$$ and $$\sqrt{\beta_p} = \mathrm{RBE}_{min}\sqrt{\beta_x}$$, with RBE$$_{max}$$ and RBE$$_{min}$$ linear in LET$$_d$$.

## Before the lab

1. For $$S = e^{-\alpha D - \beta D^2}$$, find $$\frac{d \ln S}{dD}$$. What is the slope of ln $$S$$ at $$D = 0$$, and at what dose are the linear and quadratic parts of $$-\ln S$$ equal?
2. Show that the dose for a given effect $$E = \alpha D + \beta D^2$$ is $$D = \frac{-\alpha + \sqrt{\alpha^2 + 4\beta E}}{2\beta}$$. Use it to show that the OER tends to $$\alpha_{air}/\alpha_{hyp}$$ as $$D \to 0$$ and to $$\sqrt{\beta_{air}/\beta_{hyp}}$$ as $$D \to \infty$$.
3. Derive the BED and EQD2 formulas in the Background from $$E = n(\alpha d + \beta d^2)$$. Then show that the dose per fraction that gives a BED of $$B$$ in $$n$$ fractions is $$d = \frac{\alpha/\beta}{2}\left(\sqrt{1 + \frac{4B}{n\,(\alpha/\beta)}} - 1\right)$$.
4. A control flask gives $$c_0$$ colonies from $$N_0$$ cells, and a flask at dose $$D$$ gives $$c$$ colonies from $$N$$ cells. Write SF in terms of these and show that, if each count has a standard error of its square root, the relative standard error of SF is $$\sqrt{1/c + 1/c_0}$$. What does this say about how many colonies you want to count?
5. Using $$\alpha_p = \mathrm{RBE}_{max}\,\alpha_x$$ and $$\beta_p = \mathrm{RBE}_{min}^2\,\beta_x$$, set the photon effect at dose $$D_x$$ equal to the proton effect at dose $$D$$ and solve for $$\mathrm{RBE} = D_x/D$$. Show that RBE tends to RBE$$_{max}$$ at low dose and to RBE$$_{min}$$ at high dose.

## Safety

No hazards in the virtual lab. In a real radiobiology lab, irradiators are radiation hazards and cell culture needs sterile technique and the lab's biosafety rules.

## Procedure

**Part 1: survival curves.** In the Survival and oxygen view, choose V79 cells in air (160 mmHg). Record a reading at every whole dose from 0 to 10 Gy. Send the readings to the worksheet and clear them. Then do the same for T1 cells, and send those as a second copy of the table.

**Part 2: how much oxygen it takes.** Choose V79 cells and a dose of 4 Gy. Record a reading at an oxygen pressure of 0, 0.5, 1, 2, 4, 8, 16, 40, 100 and 160 mmHg. Send the readings to the worksheet (they go to the oxygen table) and clear them.

**Part 3: a clonogenic assay.** In the Clonogenic assay view, choose the mystery cell line with the code your instructor gives you (code 7 if none). Keep the experiment number. Plate the 0 Gy flasks with 200 cells each and record a reading. Then plate and record 1 Gy with 200 cells, 2 Gy with 400, 4 Gy with 1000, 6 Gy with 4000 and 8 Gy with 20 000 cells per flask. Send the readings to the worksheet and clear them.

**Part 4: fractionation.** In the Fractionation view, set a total of 60 Gy. Record a reading with 1, 2, 5, 10, 20, 30 and 40 fractions. Send the readings to the worksheet and clear them. Then set 60 Gy in 30 fractions, keep the late effect fixed, and record a reading with 1, 5, 10, 15, 20, 30 and 40 fractions; send those as a second copy of the table and clear them. Last, with the late effect no longer fixed, record 60 Gy in 20 fractions and 74 Gy in 37 fractions and send those as a third copy.

**Part 5: proton RBE.** In the Proton RBE view, set 2 Gy per fraction and $$(\alpha/\beta)_x$$ = 2 Gy. Record a reading at an LET$$_d$$ of 1, 2, 4, 6, 8, 10 and 12 keV/µm. Send them to the worksheet and clear them. Repeat with $$(\alpha/\beta)_x$$ = 10 Gy as a second copy. Then set LET$$_d$$ = 8 keV/µm and $$(\alpha/\beta)_x$$ = 2 Gy, record a reading at 0.5, 1, 2, 4 and 8 Gy per fraction, and send those as a third copy.

## Data

| Reading | Cells | Oxygen $$p$$ (mmHg) | Dose $$D$$ (Gy) | $$S$$ in air | ln $$S$$ in air | $$S$$ without oxygen | ln $$S$$ without oxygen | OER at $$D$$ |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

### Oxygen at a fixed dose

| Reading | Oxygen $$p$$ (mmHg) | Dose in air $$D$$ (Gy) | $$S$$ at $$p$$ | ln $$S$$ at $$p$$ | Dose ratio $$D_p/D_{air}$$ for the same survival |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

### Clonogenic assay (simulated counts)

| Reading | Cells | Dose $$D$$ (Gy) | Cells seeded per flask | Colonies, flask 1 | Colonies, flask 2 | Colonies, flask 3 | Mean colonies | Plating efficiency PE | Surviving fraction SF | Standard error of SF | ln SF | Standard error of ln SF |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | | |
| | | | | | | | | | | | | |
| | | | | | | | | | | | | |
| | | | | | | | | | | | | |
| | | | | | | | | | | | | |
| | | | | | | | | | | | | |

### Fractionation

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

1. Graph ln $$S$$ in air against $$D$$ for V79 and fit a quadratic, ln $$S = a + bD + cD^2$$. Find α and β with their standard errors from the coefficients. Is $$a$$ zero within its uncertainty, as it should be? Find α/β and SF2.
2. Do the same with ln $$S$$ without oxygen. From your four fitted values, find the OER at low and at high dose (Before the lab question 2) and compare them with the OER column. Does the OER of V79 rise or fall with dose? Does that of T1 (second copy of the table)?
3. From the oxygen table, the dose ratio is the OER at 0 mmHg and 1 in air. At about what oxygen pressure is it halfway between? Arterial blood carries about 95 mmHg and venous blood about 40 mmHg. Why does it matter for radiotherapy that a tumor has regions below about 10 mmHg, but hardly matters whether normal tissue sits at 40 or 95 mmHg?
4. From the assay table, check the plating efficiency and every surviving fraction and its standard error from the colony counts (Before the lab question 4). Graph ln SF against $$D$$ and fit a quadratic. Find α and β of the mystery line with their standard errors, and so α/β, SF2 and the dose $$D_{10}$$ that leaves 10 % surviving. Does the fit's intercept agree with zero?
5. Why does the procedure seed more cells at higher doses? Use the counts you would get at 8 Gy from only 200 cells to explain, with Before the lab question 4.
6. From the first fractionation table, graph EQD2 against $$n$$ for the three tissues. Which tissue's EQD2 changes most as the 60 Gy is split into fewer fractions, and why? What does that mean for giving a whole course in one or a few large fractions?
7. From the second fractionation table, with the late effect held fixed, how does the tumor's EQD2 (α/β 10 Gy) change with $$n$$? Use the Your tissue α/β control to find what α/β a tumor would need for fewer, larger fractions to cost it nothing. Explain the answer from the BED formula.
8. From the third table, compare 60 Gy in 20 fractions with 74 Gy in 37 for prostate cancer (α/β 1.5 Gy) and for late responding tissue (3 Gy). Why could a shorter course be at least as good for prostate cancer?
9. From the proton tables, graph RBE against LET$$_d$$ for $$(\alpha/\beta)_x$$ = 2 and 10 Gy and fit straight lines. Find the slopes with their standard errors. At what LET$$_d$$ does the RBE pass 1.1 for each tissue? Which tissue's RBE depends more strongly on LET, and why does the model make it so?
10. From the third proton table, graph RBE against the dose per fraction. Does the RBE head toward the RBE$$_{max}$$ and RBE$$_{min}$$ columns at the two ends? A distal edge with LET$$_d$$ = 8 keV/µm sits inside the brainstem and gets 1 Gy per fraction: what RBE weighted dose does it get per fraction, against what RBE 1.1 gives?

## Uncertainty

Only the assay readings carry random error here: the survival, fractionation and RBE readings come straight from the models, whose uncertainty is in their parameters. For each dose in the assay table, compare the spread of the three flask counts with the square root of their mean: do they agree, as they should for counting statistics alone? Then repeat the whole assay with two new experiments and refit. Do the three sets of α and β agree within the standard errors of your first fit? Real assays scatter more than Poisson counting, from clumps of cells, uneven plating and colonies that merge. Last, the α/β of prostate cancer is 1.5 Gy with a range of 0.8 to 2.2 Gy (Brenner and Hall 1999): find the EQD2 of 60 Gy in 20 fractions at both ends of that range, and say how much that uncertainty matters for the comparison in Analysis 8.

## Questions

1. Why are tumors and early responding tissues usually given α/β ≈ 10 Gy and late responding tissues ≈ 3 Gy? What property of the cells does a large α/β reflect?
2. Radiotherapy is usually given in 2 Gy fractions over six to seven weeks. The model in the demo ignores the time over which a course is given. What happens in a tumor during the weeks of a course that it leaves out, and would it favor shorter or longer courses?
3. Stereotactic treatments give 15 to 25 Gy in one to five fractions. Why is the linear quadratic model questioned at these doses per fraction, and what does the demo's curve with its quadratic term predict at very high dose?
4. Hypoxic tumor cells may reoxygenate between fractions as the better oxygenated cells die. Why does that favor fractionation?
5. Proton plans are often designed to stop the beam just before an organ at risk. Using your RBE results, explain why the clinic worries about the RBE at the end of the range, and why the constant 1.1 is still used.

## What to hand in

Prelab answers, every Data table with its graphs, the answers to the analysis and uncertainty sections, and answers to the questions. Identify simulated data: every assay count here is simulated.
