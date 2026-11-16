# Radiobiology: Cell Survival, Oxygen and the Clonogenic Assay
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

Read and fit linear quadratic survival curves, measure how oxygen changes them, and measure a survival curve yourself with a simulated clonogenic assay and find its α and β with uncertainties.

## Background

**Cell survival.** A cell "survives" radiation if it can still divide without limit, which a clonogenic assay tests: a surviving cell grows into a colony of 50 or more cells. In the linear quadratic (LQ) model the surviving fraction after a dose $$D$$ given at once is $$S = e^{-\alpha D - \beta D^2}$$. The linear term is lethal damage from one track; the quadratic term is damage from two tracks that interact, which a cell can repair if the two arrive far enough apart in time. The ratio $$\alpha/\beta$$ is the dose at which the two terms kill equally. Tumors and early responding tissues usually have $$\alpha/\beta \approx 10$$ Gy, late responding normal tissues (spinal cord, lung, kidney, rectum) about 3 Gy (Hall and Giaccia). The surviving fraction at 2 Gy, SF2, is a common way to compare cell lines.

**Oxygen.** Oxygen fixes radiation damage that the cell could otherwise repair, so well oxygenated cells are more sensitive. The oxygen enhancement ratio is the ratio of the doses that give the same survival without and with oxygen, $$\mathrm{OER} = D_{hypoxic}/D_{air}$$; for low LET radiation it is about 2.5 to 3. Most of the effect is reached by about 20 mmHg, far below the 160 mmHg of air, but many tumors hold regions with less oxygen than that, and those cells resist radiation.

**The clonogenic assay.** Cells seeded without radiation do not all make colonies. The plating efficiency is $$\mathrm{PE} = $$ colonies / cells seeded, measured in unirradiated control flasks, and the surviving fraction after a dose $$D$$ is $$\mathrm{SF} = $$ colonies / (cells seeded × PE). Since a colony count is a count of independent events, its standard error is about the square root of the count.

## Before the lab

1. For $$S = e^{-\alpha D - \beta D^2}$$, find $$\frac{d \ln S}{dD}$$. What is the slope of ln $$S$$ at $$D = 0$$, and at what dose are the linear and quadratic parts of $$-\ln S$$ equal?
2. Show that the dose for a given effect $$E = \alpha D + \beta D^2$$ is $$D = \frac{-\alpha + \sqrt{\alpha^2 + 4\beta E}}{2\beta}$$. Use it to show that the OER tends to $$\alpha_{air}/\alpha_{hyp}$$ as $$D \to 0$$ and to $$\sqrt{\beta_{air}/\beta_{hyp}}$$ as $$D \to \infty$$.
3. A control flask gives $$c_0$$ colonies from $$N_0$$ cells, and a flask at dose $$D$$ gives $$c$$ colonies from $$N$$ cells. Write SF in terms of these and show that, if each count has a standard error of its square root, the relative standard error of SF is $$\sqrt{1/c + 1/c_0}$$. What does this say about how many colonies you want to count?
4. Decide before Part 1: for V79 cells, is the oxygen enhancement ratio at 1 Gy larger than, about equal to, or smaller than the OER at 10 Gy? Write down a reason.

## Safety

No hazards in the virtual lab. In a real radiobiology lab, irradiators are radiation hazards and cell culture needs sterile technique and the lab's biosafety rules.

## Procedure

**Part 1: survival curves.** In the Survival and oxygen view, choose V79 (hamster lung) in the cell line list and set Oxygen pO₂ to 160 mmHg (in air). Click the Dose D value, type each whole dose from 0 to 10 Gy, and press Record reading at each (one reading stores both the air and the no oxygen survival). Press Export to worksheet and Clear.

**Part 2: how much oxygen it takes.** Choose V79 (hamster lung) and set Dose D to 4 Gy. Click the Oxygen pO₂ value and type 0, 0.5, 1, 2, 4, 8, 16, 40, 100 and 160 mmHg in turn, recording a reading at each. Export the readings to the worksheet (they go to the oxygen table) and clear them.

**Part 3: a clonogenic assay.** In the Clonogenic assay view, choose A mystery cell line and set Mystery line code to the code your instructor gives you (code 7 if none). Do not press New experiment. Set Dose D to 0 Gy and Cells seeded per flask to 200, press Plate and count, and record a reading. Then do the same at 1 Gy with 200 cells, 2 Gy with 400, 4 Gy with 1000, 6 Gy with 4000 and 8 Gy with 20,000 cells per flask. Export the readings to the worksheet and clear them.

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

## Analysis

1. Graph ln $$S$$ in air against $$D$$ for V79. Use ln $$S$$ at 1 Gy and at 2 Gy in $$\ln S = -\alpha D - \beta D^2$$ (two equations) to find $$\alpha$$ and $$\beta$$, and so $$\alpha/\beta$$ and SF2.
2. Do the same with ln $$S$$ without oxygen. From your four values, find the OER at low and at high dose (Before the lab question 2) and compare them with the OER column.
3. From the oxygen table, the dose ratio is the OER at 0 mmHg and 1 in air. At about what oxygen pressure is it halfway between? Arterial blood carries about 95 mmHg and venous blood about 40 mmHg. Why does it matter for radiotherapy that a tumor has regions below about 10 mmHg, but hardly matters whether normal tissue sits at 40 or 95 mmHg?
4. From the assay table, check the plating efficiency and every surviving fraction and its standard error from the colony counts (Before the lab question 3). Graph ln SF against $$D$$ and fit a quadratic. Find α and β of the mystery line with their standard errors, and so α/β, SF2 and the dose $$D_{10}$$ that leaves 10 % surviving. Does the fit's intercept agree with zero?
5. Why does the procedure seed more cells at higher doses? Use the counts you would get at 8 Gy from only 200 cells to explain, with Before the lab question 3.

## Uncertainty

Only the assay readings carry random error here: the survival and oxygen readings come straight from the model, whose uncertainty is in its parameters. For each dose in the assay table, compare the spread of the three flask counts with the square root of their mean: do they agree, as they should for counting statistics alone? Real assays scatter more than Poisson counting, from clumps of cells, uneven plating and colonies that merge.

## Questions

1. Hypoxic cells in a tumor are the ones that tend to survive. Was your answer to Before the lab 4 right? Read the OER column at 1, 2 and 10 Gy, and explain from your α and β in air and without oxygen (Analyses 1 and 2) why the OER changes with dose the way it does. Which of these values matters most for a course given in 2 Gy fractions?

## What to hand in

Prelab answers, every Data table with its graphs, the answers to the analysis and uncertainty sections, and the answer to the question. Identify simulated data: every assay count here is simulated.
