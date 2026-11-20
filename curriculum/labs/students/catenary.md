# Tension in a Hanging Chain
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§12.1 and 12.2 (the equilibrium conditions applied to a flexible chain; the catenary curve itself goes beyond the textbook). Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/catenary.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Hanging chain; Uneven supports; Chain vs parabola; Tension along the chain; Arch; Pull it tight.

**Using the demo.**

- Drag the two supports, or select one on the picture with the 1 or 2 key and move it with the arrow keys: each press moves it 0.05 m, or 0.50 m with Shift. The length slider sets the chain's length $$S$$, and dragging the grip at the bottom of the chain does the same. Moving a support keeps the length.
- The readouts give the span, the sag $$d$$ (the depth of the chain below the straight line through the supports, at its deepest), the constant $$a$$ of the curve, the horizontal part $$H$$ of the tension, and the tension at each support. The graph at the lower right shows the largest tension and $$H$$ against the sag for these supports.
- Two markers on the chain choose a piece of it, whose free body diagram is drawn at the lower left.
- Record reading stores the support positions, the length, $$\lambda$$, the sag and the forces (to 5 significant figures, lengths to 1 mm). Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table.

**What the demo models.**

- A perfectly flexible chain that does not stretch, with uniform mass per length $$\lambda$$, at rest, with $$g = 9.81\ \text{m/s}^2$$. The curve is the exact catenary through both supports with arc length $$S$$, found numerically to full machine precision; the links are drawn for looks only.
- A chain exactly as long as the distance between its supports would need an infinite tension, so the demo stops the length at that distance.

</details>

## Goal

Measure how the tension in a hanging chain depends on how far it sags, and test the rule that the tension at any point is set by that point's height.

## Background

Cut out the piece of chain between its lowest point and any other point. Only three forces act on it: a horizontal pull $$H$$ at the bottom, the pull $$T$$ of the rest of the chain along the chain at the top, and its weight $$\lambda g s$$, where $$s$$ is the length of the piece. Equilibrium (§12.1) gives

$$T_x = H,\qquad T_y = \lambda g\,s .$$

So the horizontal part of the tension is the same everywhere along the chain, and the vertical part grows with the length of chain below. The curve that does this is the **catenary** $$y = a\cosh(x/a)$$ (measured from a line a distance $$a$$ below the lowest point, the directrix), with $$H = \lambda g a$$. Along it the tension is

$$T = \sqrt{H^2 + T_y^2} = \lambda g\,y,$$

the weight per length times the height above the directrix. For any two points on one chain, then,

$$T_A - T_B = \lambda g\,(y_A - y_B).$$

For level supports a distance $$\Delta x$$ apart, a shallow chain (sag $$d$$ much less than $$\Delta x$$) is very nearly a parabola, and

$$H \approx \frac{\lambda g\,\Delta x^2}{8d}.$$

The tension grows without limit as the sag goes to zero. A fuller expansion gives $$H \approx \lambda g\left(\dfrac{\Delta x^2}{8d} + \dfrac{d}{6}\right)$$.

## Before the lab

1. Draw the free body diagram of the piece of chain between the lowest point and one support. Explain why the support must pull up with half the chain's weight when the supports are level.
2. A chain with $$\lambda = 2.0\ \text{kg/m}$$ hangs between level supports 8.0 m apart with a sag of 0.50 m. Estimate $$H$$ from the shallow chain formula.
3. Shorten the same chain from 8.50 m to 8.10 m, so it hangs straighter; 8.10 m of chain weighs about 159 N. At 8.10 m, do you expect the tension at each support to be less than the chain's weight, about equal to it or more than it? Could a strong enough pull make the chain hang perfectly straight?

## Safety

There is no physical apparatus. A real chain or cable under high tension can whip violently if it breaks: never stand in line with a loaded cable.

## Procedure

**Part 1: sag scan.** Press the **Hanging chain** setup: level supports 8.0 m apart and $$\lambda = 2.0\ \text{kg/m}$$. Tick **Blind** (under Display) so the vertical support forces, which Analysis 2 asks you to work out, stay hidden; readings still record. Set each chain length with the **Length S** slider: click the number beside it, type the length and press Enter (or drag close and fine tune with the arrow keys, 0.01 m a press). At each length press **Record reading** under Readings; it stores the support heights, the **Sag d**, **H, the same everywhere**, **T at A** and **T at B** readouts. Use lengths of 8.10, 8.20, 8.30, 8.40, 8.50, 9.00, 10.00 and 12.00 m. Press **Export to worksheet** to send the scan to the Data table, then press **Clear** under Readings.

**Part 2: uneven supports.** Press the **Hanging chain** setup again (11.00 m of chain). Keep support A where it is and lower support B in steps of 0.50 m, from level to 2.50 m below A: click the chain picture, press 2 to select support B, then press Shift and the down arrow once for each 0.50 m step (this keeps B's horizontal position). Press **Record reading** at each of the six heights, level included, then **Export to worksheet**; the series goes into a new copy of the table.

## Data

| Reading | Length $$S$$ (m) | $$y_A$$ (m) | $$y_B$$ (m) | Sag $$d$$ (m) | $$H$$ (N) | $$T_A$$ (N) | $$T_B$$ (N) | $$1/d$$ (1/m) | $$y_A - y_B$$ (m) | $$T_A - T_B$$ (N) |
|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |

$$y_A$$ and $$y_B$$ are the heights of the supports. Work out the last three columns yourself. Record $$\lambda$$ and the span for each copy of the table.

## Analysis

1. Part 1: plot $$H$$ against $$1/d$$. Fit a line to the five shallowest rows (the largest $$1/d$$) and compare its slope with $$\lambda g\,\Delta x^2/8$$; the graph uses only rows with a number in both columns, so fill in $$1/d$$ for those five rows first. Then fill in the rest and look at where the deeper rows fall compared with that line, and explain the difference using the fuller expansion in the Background.
2. For one Part 1 row, find the vertical part of the tension at each support from $$T$$ and $$H$$. Check that together the supports hold up the whole weight of the chain, $$\lambda g S$$.
3. Part 2: plot $$T_A - T_B$$ against $$y_A - y_B$$ and fit a line. Compare the slope with $$\lambda g$$ and the intercept with zero.
4. In Part 2, did $$H$$ stay the same as support B was lowered? Within any one row, why must the horizontal parts of the pulls at the two supports be equal?

## Questions

1. Before the lab 3 asked how hard the supports pull on a chain that hangs nearly straight. Give your T at A readings at 8.50 m and 8.10 m from Part 1, each beside the chain's weight $$\lambda g S$$ at that length. Use the free body diagram from Before the lab 1 to explain why the supports pull as hard as they do when the sag is small, and whether any finite pull could make the chain perfectly straight. On a hot day a power line expands and sags further: what happens to the tension in it, and why do engineers leave some sag on purpose?

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

Report the slope of your Part 1 fit with its standard error. The recorded forces carry 5 significant figures and the sag is given to 1 mm, so rounding alone changes $$1/d$$ by at most about 0.1% for the shallowest row; compare that with the size of your residuals. The model's own approximations are what matter more for a real chain: real links stretch a little under load, have some stiffness at each joint, and are not exactly uniform. Say which way stretching would shift your Part 1 points at the smallest sags.

## With calculus

For courses that use calculus. This section is not counted in the 75 minutes; do it when your instructor assigns it.

1. For the piece from the lowest point to a point $$(x, y)$$, the Background gives $$T_y/T_x = \lambda gs/H$$, and that ratio is the chain's slope: $$dy/dx = s/a$$ with $$a = H/(\lambda g)$$. Show that $$y = a\cosh(x/a)$$ fits: find its slope and its arc length from the lowest point, $$s = \int_0^x\sqrt{1 + (dy/dx)^2}\,dx$$, and check that $$dy/dx = s/a$$ (use $$\cosh^2u - \sinh^2u = 1$$). Then show that $$T = \sqrt{H^2 + (\lambda gs)^2} = \lambda gy$$.
2. For a shallow chain $$ds \approx dx$$. Differentiate $$dy/dx = s/a$$ to get $$d^2y/dx^2 = (1/a)\,ds/dx \approx 1/a$$, integrate twice to show that the chain is nearly the parabola $$y = a + x^2/(2a)$$, find its sag between level supports $$\Delta x$$ apart, and derive $$H \approx \lambda g\,\Delta x^2/(8d)$$.
3. Use your Part 1 readings at 8.10 m and 12.00 m. From each $$H$$ find $$a = H/(\lambda g)$$, then predict from the catenary the length $$S = 2a\sinh(\Delta x/(2a))$$, the sag $$d = a[\cosh(\Delta x/(2a)) - 1]$$ and $$T_A = \lambda ga\cosh(\Delta x/(2a))$$, and from the parabola the sag $$\Delta x^2/(8a)$$. Compare each with your readings.

## What to hand in

Prelab answers, the two data tables with their graphs and fits, the slope of $$H$$ against $$1/d$$ compared with $$\lambda g\,\Delta x^2/8$$, the weight check, the slope of $$T_A - T_B$$ against $$y_A - y_B$$ compared with $$\lambda g$$, and answers to the questions (and to Uncertainty and With calculus, if assigned). Identify simulated data.
