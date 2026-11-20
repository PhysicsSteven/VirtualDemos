# Millikan's Oil Drops: the Charge of the Electron
Student laboratory · Physics II and Modern Physics

Textbook: OpenStax *College Physics 2e*, §18.1 (static electricity and charge, conservation of charge) and §30.2 (discovery of the parts of the atom); the same sections in *College Physics for AP Courses 2e*. Access for free at https://openstax.org/details/books/college-physics-2e. In OpenStax *University Physics*: Vol. 2, §5.1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/millikan.html?setup=many)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Time a drop falling; Make a drop rise; Hold a drop still; Change a drop's charge; Many drops: charges in steps (the one this worksheet starts from); Thin air: drag slips; A tiny drop jiggles.

**Using the demo.**

- On the left is the apparatus: two round metal plates 7.60 mm apart, an atomizer that sprays oil drops in through a small hole in the top plate, a lamp and a telescope. On the right is the view through the telescope, 3.2 mm across, with lines every 0.5 mm, and below it a dot plot of the charges worked out so far.
- The bar above the picture holds **Play**, **Reset**, **Spray drops**, the plates (**Plates off**, **Top plate +**, **Top plate −**), the **Ionizing source** and the speed (×1, ×4, ×16 of real time). The Set up card holds the **Plate voltage V** slider (0 to 600 V), the timing distance, **Time the followed drop between the two orange lines** and the air.
- The circled drop is the one you follow: tap another drop, or press **Follow next drop** (or N), to change it. With the orange lines ticked, the demo times the followed drop exactly from one line to the other and shows the result under Timing ("Last time: ..."). **Record the time** puts that time in the drop's row of the Readings table. A time with the plates off goes in the fall column; a time with the plates on goes in the plates on column.
- The Readings table averages each drop's times and works out its fall speed $$v_f$$, its speed with the plates on $$v_E$$ (positive up), its radius $$r$$ and its charge $$q$$ in units of $$10^{-19}$$ C. **Export to worksheet** sends the table to the Data table below: drop, times, voltage, which plate is +, both speeds, $$r$$ and the size of $$q$$. It never sends $$q/e$$.
- In the Lab fold: **Blind** hides $$r$$, $$q$$ and the dotted lines at whole numbers of $$e$$; **Hide q/e and the lines at whole numbers of e** hides only the $$q/e$$ column and those lines, so you find $$e$$ yourself. The Readouts list the plate spacing, the air's viscosity $$\eta$$, its mean free path $$\lambda$$ and its density, and the oil's density.

**What the demo models.**

- Each drop is a sphere of oil (density 886 kg/m³, the light mineral oil of PASCO's teaching apparatus) in still air at 23 °C and 101.3 kPa. A drop this small reaches its terminal speed in about 10 µs, so every speed you time is a steady one.
- Drag is Stokes's law divided by the slip correction $$C$$ of Allen and Raabe (1982), fitted to Millikan's own oil drop data. Air viscosity comes from Sutherland's law and the mean free path is 67.3 nm at 23 °C and 1 atm. The field between the plates is uniform, $$E = V/d$$, and $$g = 9.81$$ m/s².
- Each drop also jiggles by Brownian motion, so repeated times of the same drop differ by a few percent. The sprayed drops are simulated: radii from 0.35 to 1.0 µm and charges of 1 to 12 times $$e$$, mostly negative. Left out: evaporation, convection in the air and the edges of the plates.

</details>

## Goal

Find the charge of ten oil drops from how fast they fall and rise between two charged plates, show that every charge is a whole number times one smallest charge, and measure that charge, $$e$$.

## Background

In 1909 Robert Millikan sprayed tiny oil drops between two horizontal metal plates and watched them through a telescope (§30.2). Spraying rubs electrons on or off the drops, so most of them carry a small charge. By timing a drop falling with the plates off and then rising with the plates on, he found its charge. He found that every charge was a whole number of one basic amount: charge is *quantized* (§18.1). This worksheet repeats his measurement.

**Falling with the plates off.** A drop of radius $$r$$ falling through air feels its weight $$mg$$ down, the buoyant force of the air up and air drag up. The weight less the buoyancy is

$$m'g = \tfrac{4}{3}\pi r^3 (\rho - \rho_\text{air})\, g,$$

where $$\rho$$ is the density of the oil and $$\rho_\text{air}$$ that of the air. For a slow, very small sphere the drag is Stokes's law, $$6\pi\eta r v$$, where $$\eta$$ is the viscosity of the air. The drop speeds up until the drag balances $$m'g$$ and then falls at a steady terminal speed $$v_f$$. These drops are so small that this takes about 10 µs, so the drop always moves at its terminal speed. Setting drag equal to $$m'g$$ and solving for $$r$$ gives

$$r_0 = \sqrt{\frac{9\,\eta\, v_f}{2\,(\rho - \rho_\text{air})\, g}}.$$

Notice that the drag grows as $$r$$ but the weight as $$r^3$$, so big drops fall faster than small ones.

**The slip correction.** These drops are less than a micrometer across, only about ten times the mean free path $$\lambda$$ of the air molecules (the average distance a molecule travels between collisions, 67.3 nm at 23 °C). Air is not a smooth fluid on that scale, so a drop slips between the molecules and falls a little faster than Stokes's law says. The drag is $$6\pi\eta r v / C$$, with the slip correction

$$C = 1 + \frac{\lambda}{r}\left(1.155 + 0.471\, e^{-0.596\, r/\lambda}\right)$$

(Allen and Raabe, 1982), which is between 1.08 and 1.23 for these drops. For a given fall speed the drop is therefore a little smaller than $$r_0$$: setting $$6\pi\eta r v_f / C$$ equal to $$m'g$$ gives $$r = r_0/\sqrt{C}$$. Since $$C$$ itself depends on $$r$$, work it out in two passes: find $$C$$ with $$r_0$$, then $$r = r_0/\sqrt{C}$$; find $$C$$ again with that $$r$$, then $$r = r_0/\sqrt{C}$$ once more. A third pass changes $$r$$ by less than 0.1 %.

**Rising with the plates on.** A voltage $$V$$ across plates a distance $$d$$ apart makes a uniform field $$E = V/d$$, pointing from the + plate to the − plate. A drop with charge $$q$$ feels a force $$qE$$. If that force points up and is larger than $$m'g$$, the drop rises at a steady speed $$v_E$$ where

$$qE = m'g + \frac{6\pi\eta r\, v_E}{C}.$$

Since $$m'g = 6\pi\eta r v_f / C$$ from the fall, the size of the charge is

$$q = \frac{6\pi\eta r\,(v_f + v_E)}{C\,E}.$$

With **Top plate +** the field points down, so a drop that rises carries negative charge (extra electrons). With **Top plate −** the field points up, and a drop that rises carries positive charge (electrons missing).

**Holding a drop still.** Millikan's first method: adjust $$V$$ until the drop hangs still. Then $$qE = m'g$$, so $$q = m'g\,d/V$$.

**Finding e.** If charge is quantized, every charge is $$q = ne$$ for a whole number $$n$$. To find $$n$$ without knowing $$e$$, divide every charge by the smallest one. If the ratios come out near whole numbers (1, 2, 3, ...), the smallest drop carries $$1e$$ and each ratio is that drop's $$n$$. If some ratios come out near 1.5 or 2.5, the smallest drop carries $$2e$$: double every ratio. Then each drop gives its own value of $$e = q/n$$, and a graph of $$q$$ against $$n$$ is a straight line through the origin with slope $$e$$.

## Before the lab

1. Show that setting the drag $$6\pi\eta r v_f$$ equal to $$m'g = \tfrac{4}{3}\pi r^3(\rho - \rho_\text{air})g$$ gives the formula for $$r_0$$ in the Background.
2. Predict: drop A has twice the radius of drop B, and both fall with the plates off. Which takes less time to fall 1.0 mm, and by roughly what factor? Give your reason. (You will check this with your own drops in Questions 1.)
3. With **Top plate +** at 500 V and the plates 7.60 mm apart, what is the field $$E$$, and which way does it point? A drop rises: is its charge positive or negative? What will the same drop do if you switch to **Top plate −**?

## Safety

None for the virtual apparatus. A real Millikan apparatus puts several hundred volts across the plates: switch the supply off before touching the plates or their leads.

## Procedure

**Set up.** Press the setup **Many drops: charges in steps** (the link above opens it). Set the speed in the bar above the picture to **×4**. Open **Lab** (below the Readings) and tick **Blind** and **Hide q/e and the lines at whole numbers of e**. Leave **Time the followed drop between the two orange lines** ticked (in the Set up card), with the timing distance at 1.0 mm, and leave Plate voltage V at 500 V for every drop.

**Drop 1: time it falling, then rising.** The circled drop is the one you follow.

1. Press **Plates off** and then **Play**. The drop falls. When it has crossed both orange lines, the time appears under Timing ("Last time: drop ..., ... s, down 1.00 mm, plates off"). Press **Record the time**.
2. Press **Top plate +**. If the drop turns and rises, wait until it has crossed both lines going up, then press **Record the time**. If instead it falls faster, press **Top plate −**: it then turns and rises. Record that time.
3. Press **Plates off** before the drop leaves the top of the view, so you don't lose it.

A time appears only when the drop crosses one line and then the other in the same setting. If the drop starts between the lines, let it pass one line first. The Readings table now has drop 1's row with its fall time, the voltage, which plate is + and its rise time, and its speeds $$v_f$$ and $$v_E$$.

**Work out drop 1 by hand.** With **Blind** still ticked, do Analysis 1 now: read $$\eta$$, $$\lambda$$, the air density and the oil density from the Readouts. Then untick **Blind** (leave the other box ticked) and compare your $$r$$ and $$q$$ with the table's.

**Drops 2 to 9.** Press **Follow next drop** (or tap a drop in the telescope) and time each drop once falling and once rising, as for drop 1, recording each time. A drop that is below the lower line already: time it rising first, then falling. Skip a drop (press **Follow next drop**) if it falls with either plate +, if it takes longer than about 30 s on the screen to cross, or if it leaves the view. When few drops are left in view, press **Spray drops** for eight more. Watch the dot plot under the telescope fill in as you go.

**Send the data.** Press **Export to worksheet** (under Readings): the nine rows fill the first nine columns of the Data table below. The $$n$$ and $$q/n$$ columns are yours.

**One more drop: hold it still.** Press the setup **Hold a drop still** (your readings stay; this setup switches to ×1 and turns the orange lines off). Tick **Time the followed drop between the two orange lines** again. Press **Plates off** and **Play**, and record the followed drop's fall time as before. Then press **Top plate +** and move the **Plate voltage V** slider down until the drop hangs still: it never stops jiggling, so aim for the voltage where it drifts neither up nor down over 10 s or so. Press **Record: held still at this V**. If the drop leaves the view, press **Reset** and start this drop again. Copy its row of the Readings table (fall time, holding voltage, $$v_f$$, $$r$$ and $$q$$) into your answer to Questions 2. Don't export again: this drop stays out of the Data table.

## Data

The $$q$$ column is the size of each charge, without its sign.

| Drop | Fall time $$t_f$$ (s) | Plate voltage $$V$$ (V) | Top plate | Rise time $$t_E$$ (s) | $$v_f$$ (µm/s) | $$v_E$$ (µm/s) | $$r$$ (µm) | $$q$$ (10⁻¹⁹ C) | $$n$$ | $$q/n$$ (10⁻¹⁹ C) |
|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |

## Analysis

1. Drop 1 by hand. From its times, find $$v_f = (1.00\ \text{mm})/t_f$$ and $$v_E = (1.00\ \text{mm})/t_E$$. Find $$r_0$$, then the slip correction and $$r$$ in two passes as the Background shows. Find $$E = V/d$$ with $$d = 7.60$$ mm, and then $$q$$. Show each step with its units. By what percentage do your $$r$$ and $$q$$ differ from the table's?
2. Find $$n$$ for every drop: divide each $$q$$ by the smallest $$q$$ in your table and round to the nearest whole number (doubling first if the ratios fall near halves, as the Background explains). Fill in the $$n$$ column and then $$q/n$$. List the ratios before rounding: how far is the worst one from a whole number?
3. Your value of $$e$$: the average of the $$q/n$$ column. By what percentage does it differ from the accepted value $$e = 1.602176634\times10^{-19}$$ C (exact, by the definition of the SI)?
4. Graph $$q$$ (vertical) against $$n$$ (horizontal) with a straight line fit. What are the slope and the intercept? Is the intercept near zero, as it must be if every charge is $$ne$$? Compare the slope with your answer to Analysis 3.

## Questions

1. Pick the drop with the largest and the one with the smallest radius in your table. What is the ratio of their fall speeds, and what is the ratio of their radii squared? Compare with your prediction in Before the lab 2, and explain the result with the balance of drag and $$m'g$$. Is the agreement exact? Which way does the slip correction push it (it is larger for smaller drops)?
2. The drop you held still: give its row from the Readings table, and work out $$q = m'g\,d/V$$ by hand from its $$r$$ and the voltage that held it still. Does it agree with the table? Divide its $$q$$ by your $$e$$: how far is it from a whole number? Why is it hard to find the holding voltage exactly, and why did Millikan come to prefer timing drops falling and rising?
3. Tick **Work out r and q with plain Stokes drag (no slip correction)** in Lab and read drop 1's $$q$$ again. By what percentage does it change? Would the charges of all your drops still bunch at whole numbers of one value? Would that value be $$e$$?
4. Does your data show that charge is quantized? Could all your charges also be whole numbers of $$e/2$$ or $$e/3$$? What would you need to rule that out (think of the ionizing source, which changes a drop's charge by a small amount at a time)?

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

Each time carries the Brownian jiggle of the drop. Estimate how far a drop of radius 0.5 µm wanders by Brownian motion in 25 s (about $$\sqrt{2Dt}$$, with $$D = 2.7\times10^{-11}$$ m²/s for this drop), and what percentage of the 1.00 mm timing distance that is. How does that compare with the scatter of your $$q/n$$ values? Which drops would you time more often to improve your $$e$$, and why? Give your value of $$e$$ with its standard error (the standard deviation of the $$q/n$$ values divided by the square root of the number of drops), and say how many standard errors it is from the accepted value $$e = 1.602176634\times10^{-19}$$ C. For the fit in Analysis 4, give the slope with its uncertainty, and say whether the intercept is zero within its uncertainty.

## What to hand in

Your answers to Before the lab, the Data table with its graph and fit, Analysis 1 worked by hand with units, your value of $$e$$, and answers to the questions (and to Uncertainty, if assigned). Say that your data came from the simulated apparatus.
