# The Hanging Chain: Tension and Sag
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

- A perfectly flexible chain that does not stretch, with uniform mass per length $$\lambda$$, at rest, with $$g = 9.80665\ \text{m/s}^2$$. The curve is the exact catenary through both supports with arc length $$S$$, found numerically to full machine precision; the links are drawn for looks only.
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
3. Support B is lowered while A stays put. Predict which support's tension will be larger, and why.
4. Why can no chain, however strong, be pulled perfectly straight between two supports?

## Safety

There is no physical apparatus. A real chain or cable under high tension can whip violently if it breaks: never stand in line with a loaded cable.

## Procedure

**Part 1: sag scan.** Use the Hanging chain setup: level supports 8.0 m apart and $$\lambda = 2.0\ \text{kg/m}$$. Record the sag, $$H$$ and the support tensions for chain lengths of 8.10, 8.20, 8.30, 8.40, 8.50, 8.75, 9.00, 9.50, 10.00, 11.00 and 12.00 m. Send the scan to the worksheet, then clear the demo's readings.

**Part 2: uneven supports.** Choose the Hanging chain setup again (11.00 m of chain). Keep support A where it is and lower support B in steps of 0.50 m, from level to 2.50 m below A, recording at each step. Send this series to the worksheet as a new copy of the table.

**Part 3: a piece of the chain.** In the Tension along the chain setup, choose three different pieces of the chain with the markers. For each, note the length of the piece, its weight and the horizontal and vertical parts of the pull at each end from the free body diagram readouts. Record these in the notes under your Part 2 table.

## Data

| Reading | Length $$S$$ (m) | $$y_A$$ (m) | $$y_B$$ (m) | Sag $$d$$ (m) | $$H$$ (N) | $$T_A$$ (N) | $$T_B$$ (N) | $$1/d$$ (1/m) | $$y_A - y_B$$ (m) | $$T_A - T_B$$ (N) |
|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |

$$y_A$$ and $$y_B$$ are the heights of the supports. Work out the last three columns yourself. Record $$\lambda$$ and the span for each copy of the table.

## Analysis

1. Part 1: plot $$H$$ against $$1/d$$. Fit a line to the five shallowest rows (the largest $$1/d$$) and compare its slope with $$\lambda g\,\Delta x^2/8$$. Then look at where the deeper rows fall compared with that line, and explain the difference using the fuller expansion in the Background.
2. For two Part 1 rows, find the vertical part of the tension at each support from $$T$$ and $$H$$. Check that together the supports hold up the whole weight of the chain, $$\lambda g S$$.
3. Part 2: plot $$T_A - T_B$$ against $$y_A - y_B$$ and fit a line. Compare the slope with $$\lambda g$$ and the intercept with zero.
4. In Part 2, did $$H$$ stay the same as support B was lowered? Within any one row, why must the horizontal parts of the pulls at the two supports be equal?
5. Part 3: for each piece, check that the horizontal parts of the two end pulls are equal and that the difference of their vertical parts equals the piece's weight.

## Uncertainty

The recorded forces carry 5 significant figures and the sag is given to 1 mm, so rounding alone changes $$1/d$$ by at most about 0.1% for the shallowest row; compare that with the size of your residuals. The model's own approximations are what matter more for a real chain: real links stretch a little under load, have some stiffness at each joint, and are not exactly uniform. Say which way stretching would shift your Part 1 points at the smallest sags.

## Questions

1. A suspension bridge's main cable carries a deck whose weight is spread evenly along the horizontal, not along the cable. Which shape does that cable take, and why is it so close to a catenary when the sag is small?
2. Turn the chain upside down and it becomes an arch in which every block pushes on its neighbours. Why must the ground at the base of an arch push inward as well as up?
3. If the chain were twice as heavy per metre, what would happen to its shape and to every force you recorded?
4. On a hot day a power line expands and sags further. What happens to the tension in it, and why do engineers leave some sag on purpose?

## What to hand in

Prelab answers, the two data tables with their graphs and fits, the slope of $$H$$ against $$1/d$$ compared with $$\lambda g\,\Delta x^2/8$$, the weight check, the slope of $$T_A - T_B$$ against $$y_A - y_B$$ compared with $$\lambda g$$, your Part 3 free body checks, and answers to the questions. Identify simulated data.
