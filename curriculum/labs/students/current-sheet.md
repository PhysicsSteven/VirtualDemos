# Mapping the Field in a Current Carrying Sheet
Student laboratory · Physics II

Textbook: OpenStax *University Physics*, Vol. 2, §§7.5, 9.3. Access for free at https://openstax.org/details/books/university-physics-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/resistivity.html?view=sheet)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Using the demo.**

- The Current in a sheet view of the Resistivity of a Wire demo: a thin resistive sheet 24 cm by 16 cm, like the conducting paper of a field mapping lab, with two electrodes held at the battery's $$V$$ and at 0 V. Layouts: Two bars, Two dots, Bar and dot, Slot between dots, Silver ring, Narrow neck, and Strip L by W, where the length $$L$$ between the electrodes (2 to 22 cm) and the strip's width $$W$$ (2 to 16 cm) are set in whole centimeters and the rest of the sheet is cut away.
- Press the sheet with the probe to read the potential there; the arrow keys move it 2.5 mm (Shift 1 cm). Positions are measured from the sheet's left edge ($$x$$) and bottom edge ($$y$$). The meters show the current $$I$$ from the battery, $$R = V/I$$, and the field $$E$$ at the probe. Cut, Silver paint and Mend change the sheet where you drag.
- Two bars: the electrodes' inner edges are at $$x = 1.25$$ cm and $$x = 22.75$$ cm, $$L = 21.5$$ cm apart, and span the whole width $$W = 16$$ cm. Two dots: round electrodes about 2 cm across, centered at $$(6, 8)$$ cm and $$(18, 8)$$ cm.
- Capture stores the layout, the battery voltage, $$R_s$$, $$L$$ and $$W$$ (for Two bars and Strip L by W), the probe's position and potential, the field there and the current. Export to worksheet sends readings to the first Data table; a series in which every reading is a Strip L by W goes to the Resistance table.
- Blind hides the current, the resistance, the field and the colored map, leaving the probe's potential.

**What the demo models.**

- $$J = E/R_s$$ (current per unit width of the sheet); no charge piles up, so as much current leaves every bit of sheet as enters it, and none crosses an edge or a cut. $$R = V/I$$.
- Model: the sheet is a grid of squares 0.25 cm on a side; Kirchhoff's rule is solved at every square by conjugate gradients to $$10^{-10}$$ of $$V$$, so the map is exact for a sheet made of those squares. For a strip between full width electrodes it gives $$R = R_s L/W$$ exactly. Silver paint is modeled as $$10^4$$ times as conductive as the sheet. The probe reads the potential between square centers by linear interpolation. $$R_s$$ is a setting, not a measured paper. The readings are simulated and noise free.

</details>

## Goal

Map the equipotentials and the current in a thin resistive sheet for several electrode shapes, measure the electric field from the potential, and test how a sheet's resistance depends on its length and width.

## Background

**Field and potential (§7.5).** The electric field points from high to low potential and is perpendicular to the equipotentials. Along a line in the direction of the field,

$$E = -\frac{\Delta V}{\Delta x},$$

so where the equipotentials crowd together the field is strong. In a conducting sheet the field drives a current, and the current follows the field lines.

**Sheet resistance (§9.3).** A sheet of thickness $$t$$ and resistivity $$\rho$$ carries a current per unit width $$J = E/R_s$$, where $$R_s = \rho/t$$ is the sheet resistance in ohms per square. A strip of length $$L$$ and width $$W$$ between electrodes as wide as the strip has

$$R = \rho\frac{L}{Wt} = R_s\frac{L}{W}.$$

The strip is $$L/W$$ squares in series, and every square, large or small, has resistance $$R_s$$ between opposite edges. Because no current can leave the sheet through its edges, the current lines run along an edge and the equipotentials meet it at right angles. For other shapes, $$R$$ is still $$R_s$$ times a number fixed by the shape alone.

## Before the lab

1. A strip 12 cm long and 8 cm wide has $$R_s = 1000\ \Omega$$ per square. Find its resistance and the current at 10 V.
2. Two full width bars are 21.5 cm apart on a sheet 16 cm wide at 10 V, with the + bar's edge at $$x = 1.25$$ cm. Predict the potential at $$x = 12.00$$ cm, the field between the bars, and the current for $$R_s = 1000\ \Omega$$ per square.
3. Sketch what you expect the equipotentials and current lines to look like between two small round electrodes. Where should the field be strongest?

## Safety

On a real field mapping board, use the low voltage supply provided (a few volts to about 20 V), keep the probe leads from shorting the electrodes, and switch off before moving an electrode. Follow the instructor's electrical safety procedures.

## Procedure

Use a battery voltage of 10 V and $$R_s = 1000\ \Omega$$ per square throughout. Send each part's readings to the worksheet before clearing them, and clear before starting the next part.

**Part 1: Two bars.** Measure the potential along the middle of the sheet, $$y = 8.00$$ cm, at $$x = 2, 4, 6, \ldots, 22$$ cm (eleven readings). Then measure it at $$x = 12.00$$ cm with $$y = 2.00$$ cm and $$y = 14.00$$ cm.

**Part 2: Two dots.** Measure the potential along the line joining the dots, $$y = 8.00$$ cm, at $$x = 8, 9, 10, \ldots, 16$$ cm. Then map two equipotentials: at each height $$y = 4.00$$, $$8.00$$ and $$12.00$$ cm, find the $$x$$ where the potential is $$7.00 \pm 0.01$$ V and where it is $$3.00 \pm 0.01$$ V, and record each point.

**Part 3: Shape and resistance.** Record one reading, with the probe at $$(9.00, 8.00)$$ cm, in each layout: Two bars, Narrow neck, Two dots, Slot between dots, Bar and dot and Silver ring.

**Part 4: Strips.** With Strip L by W, record a reading for $$W = 8$$ cm at $$L = 4, 8, 12, 16$$ and $$20$$ cm, then for $$L = 12$$ cm at $$W = 2, 4, 12$$ and $$16$$ cm. This series goes to the Resistance table.

## Data

| Reading | Layout | $$x$$ (cm) | $$y$$ (cm) | Potential $$V$$ (V) | Field $$E$$ (V/m) | Current $$I$$ (A) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Make one copy of this table for each of Parts 1 to 3.

**Resistance.** Work out the last two columns.

| Reading | $$L$$ (cm) | $$W$$ (cm) | Battery $$V$$ (V) | Current $$I$$ (A) | $$R = V/I$$ (Ω) | $$L/W$$ |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

## Analysis

1. Graph $$V$$ against $$x$$ for the eleven Part 1 readings along $$y = 8.00$$ cm. Report the slope and intercept, find $$E$$ from the slope and compare it with the demo's field reading and with $$V/L$$. Where does the line reach 10 V and 0 V? What do the readings at $$y = 2.00$$ and $$14.00$$ cm tell you about the shape of the equipotentials?
2. From the Part 1 field, find the current per unit width $$J = E/R_s$$ and the total current, $$J$$ times the sheet's width. Compare with the current reading and with your prediction.
3. On a sketch of the sheet, plot your Part 2 equipotential points and draw the 7 V and 3 V lines through them. Add several current lines. Compare the field at $$x = 8$$ cm and at $$x = 12$$ cm, found from neighboring Part 2 potentials, with the demo's field readings there. Where is the field strongest, and why?
4. Graph $$R$$ against $$L/W$$ for the Resistance table. Report the slope and intercept and compare the slope with $$R_s$$. Do strips with different $$L$$ and $$W$$ but the same $$L/W$$ have the same resistance?
5. From Part 3, find $$R/R_s$$, the resistance in squares, for each layout, and rank them. Explain why the narrow neck raises the resistance above the 1.344 squares of the two bars, and why the slot raises the two dots' resistance.
6. On an endless sheet, two round electrodes of radius $$a$$ with centers $$d$$ apart have $$R/R_s = \frac{1}{\pi}\cosh^{-1}\frac{d}{2a}$$. Evaluate it for the two dots, taking $$a = 1.1$$ cm (the dots are made of squares). Is the measured value higher or lower, and why does a sheet with edges give that? Most of the resistance between two small dots lies close to them: use your Part 2 potentials to say where.

## Uncertainty

The readings are simulated and noise free. The potential is reported to 1 mV and the field and current to four significant figures; an equipotential point found to $$\pm 0.01$$ V is located to about 0.1 mm where the field is 50 to 100 V/m. The sheet is a grid of 0.25 cm squares, so round electrodes and cut edges are made of squares and the map within a square or two of them is not that of a smooth shape. On a real board, include the voltmeter's resolution, the probe's contact area, and nonuniform paper: commercial conducting paper varies by several percent in $$R_s$$ across a sheet.

## Questions

1. Why do the equipotentials meet the insulating edges of the sheet, and the edges of a cut, at right angles?
2. A square of the sheet 1 cm on a side and one 10 cm on a side have the same resistance between opposite edges. Explain why.
3. Why must the voltmeter on a real field mapping board draw almost no current?
4. A silver painted region is nearly at one potential. Why, and how does it change the current in the sheet around it?
5. On a very large sheet, the equipotentials of two dots have the same shape as those of two long, oppositely charged rods in empty space. What do the two situations have in common that makes this so?

## What to hand in

Prelab answers, the three Data tables and the Resistance table (or the saved worksheet), the $$V$$ against $$x$$ and $$R$$ against $$L/W$$ graphs with their fits, the equipotential sketch for the two dots, the comparisons asked for in the Analysis, and answers to the questions. Identify simulated data.
