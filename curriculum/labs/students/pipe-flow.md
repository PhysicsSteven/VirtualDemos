# Flow in a Pipe: Poiseuille's Law and Turbulence
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §14.7. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/viscometer.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Using the demo.**

- Choose Flow in a pipe under Experiment. Pick the liquid and the pipe, and set the flow with the outlet valve under the picture (up and down arrows on the picture change it by 1%, Shift by 10%).
- Start collecting swings the outlet over the measuring cylinder and starts the stopwatch; Stop collecting stops both. Empty the cylinder before the next reading. The stopwatch runs faster with ×10 or ×100, but its reading is always the real time.
- Capture stores the cylinder volume (to 1 mL), the stopwatch time (to 0.01 s), the pressure gauge (to 0.1 Pa) and what the dye is doing, with the liquid, pipe and valve setting.
- Blind hides the flow rate, speed, Reynolds number, regime and viscosity, leaving the cylinder, the stopwatch and the pressure gauge. The Mystery liquid keeps its viscosity hidden; choosing it again draws a new one.

**What the demo models.**

- Steady, fully developed flow in a smooth horizontal glass pipe, with taps 0.500 m apart far enough downstream of the inlet that the flow profile no longer changes.
- Pressure drop from the Darcy–Weisbach equation $$\Delta P = f\,(L/D)\,\rho v^2/2$$, with $$f = 64/N_R$$ below $$N_R = 2000$$ (exactly Poiseuille's law) and the smooth pipe friction factor of Blasius, $$f = 0.3164\,N_R^{-1/4}$$, above $$N_R = 3000$$. Between the two, where real flow flickers between laminar and turbulent, $$f$$ is interpolated.
- Water: $$\eta = 1.002$$ mPa·s at 20 °C and 0.653 mPa·s at 40 °C (Table 14.4 of the textbook). The dye's path shows the kind of flow; its eddies are drawn for illustration.

</details>

## Goal

Measure a liquid's viscosity from laminar flow through a pipe using Poiseuille's law, find the Reynolds number at which the flow stops being laminar, and see how the pressure drop changes once the flow is turbulent.

## Background

A viscous liquid needs a pressure difference to keep it moving through a pipe. For **laminar** flow (smooth layers sliding past each other, fastest on the axis and at rest at the wall) through a horizontal pipe of radius $$r$$ and length $$L$$, **Poiseuille's law** gives the flow rate

$$Q = \frac{(P_1 - P_2)\,\pi r^4}{8\eta L},\qquad\text{so}\qquad \Delta P = \frac{8\eta L}{\pi r^4}\,Q.$$

A graph of $$\Delta P$$ against $$Q$$ is a straight line through the origin with slope $$8\eta L/(\pi r^4)$$, the pipe's resistance. The $$r^4$$ is striking: halving the radius at the same pressure difference cuts the flow by a factor of 16.

Whether the flow stays laminar is decided by the **Reynolds number**, the ratio of the liquid's inertia to its viscous forces. For a pipe of diameter $$D = 2r$$ and mean speed $$v = Q/(\pi r^2)$$,

$$N_R = \frac{2\rho v r}{\eta} = \frac{\rho v D}{\eta}.$$

The textbook gives the rule for pipes: below about 2000 the flow is laminar, between about 2000 and 3000 it is unstable (laminar with bursts of turbulence), and above about 3000 it is **turbulent**, with eddies that mix the liquid across the pipe. Turbulent flow needs a larger pressure difference than Poiseuille's law predicts, and the pressure drop grows faster than $$Q$$: in a smooth pipe, roughly as $$Q^{1.75}$$. On a graph of $$\log\Delta P$$ against $$\log Q$$ the slope is the exponent, so it changes from 1 to about 1.75. Between two readings, $$n = \ln(\Delta P_2/\Delta P_1)/\ln(Q_2/Q_1)$$.

The flow rate is measured the oldest way: collect the outflow in a measuring cylinder for a timed interval, $$Q = V/t$$. The pressure drop between the taps is read from a differential gauge, and also shows as the difference in height $$\Delta h$$ of the liquid in two manometer tubes, $$\Delta P = \rho g\,\Delta h$$. A thin thread of dye injected on the axis shows the kind of flow, as in Osborne Reynolds's own experiment of 1883.

## Before the lab

1. The 10 mm pipe carries water at 20 °C ($$\rho = 998.2$$ kg/m³, $$\eta = 1.002\times10^{-3}$$ Pa·s). Find the flow rate in mL/s at which $$N_R = 2000$$.
2. Use Poiseuille's law to predict the pressure drop over 0.500 m at that flow rate. How high a column of water is that?
3. The 6 mm and 10 mm pipes carry the same small laminar flow. Predict the ratio of their pressure drops.

## Safety

A real constant head tank holds a lot of water above the bench: secure it, keep electrical equipment away from spills, and mop up at once. The dye is a food coloring, but treat any dye as staining. The simulation has no hazards.

## Procedure

**Part 1: laminar flow and Poiseuille's law.** Water at 20 °C in the 10 mm pipe, with the valve at 2, 4, 6, 8, 10, 12 and 14%.

**Part 2: through the transition to turbulence.** The same water and pipe, with the valve at 16, 18, 20, 22, 25, 30, 40, 60, 80 and 100%. Watch the dye closely between 14% and 25%.

**Part 3: the dependence on radius.** Water at 20 °C in the 6 mm pipe, with the valve at 2, 4, 6, 8 and 10%.

**Part 4: a mystery liquid.** Choose the Mystery liquid in the 10 mm pipe and take five laminar readings at small valve settings. Find its viscosity, predict the flow rate at which $$N_R = 2000$$, and then open the valve to that flow and watch the dye.

**Using the virtual apparatus.** Turn Blind on before you start each part. For each reading, set the valve, empty the cylinder, collect for a measured time long enough to give a few hundred millilitres (use ×10 for slow flows), stop, and capture the cylinder volume, the stopwatch time and the pressure drop. Note what the dye is doing each time. Send each part's readings to the worksheet, then clear them before the next part; each part gets its own copy of the Data table.

## Data

Tap spacing $$L = 0.500$$ m. Pipe radius $$r = 5.00$$ mm (10 mm pipe) or 3.00 mm (6 mm pipe).

| Reading | Liquid and pipe | Valve (%) | $$V$$ (mL) | $$t$$ (s) | $$\Delta P$$ (Pa) | $$Q = V/t$$ (mL/s) | $$v$$ (m/s) | $$N_R$$ | Dye |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

Use one copy of the table for each part.

## Analysis

1. For Part 1, fit $$\Delta P$$ against $$Q$$ (in m³/s) and find $$\eta$$ from the slope, $$\eta = \text{slope}\times\pi r^4/(8L)$$, with its uncertainty. Compare with 1.002 mPa·s.
2. For Parts 1 and 2, find $$N_R$$ for every reading. Between which readings does the dye first break up, and from which reading is it mixed across the whole pipe? Compare these Reynolds numbers with the textbook's 2000 and 3000.
3. Compare each Part 2 pressure drop with the Poiseuille prediction from your Part 1 slope. By what factor is the measured $$\Delta P$$ larger at the highest flow? Use pairs of readings to find the exponent $$n$$ in $$\Delta P\propto Q^n$$ for the lowest flows and for the highest.
4. For Part 3, fit $$\Delta P$$ against $$Q$$ and compare the slope with Part 1's. Does the ratio agree with $$(5.00/3.00)^4$$?
5. For Part 4, give the Mystery liquid's viscosity, your predicted flow rate at $$N_R = 2000$$, and what the dye did there.

## Uncertainty

The cylinder is read to 1 mL and the stopwatch to 0.01 s, so a reading of a few hundred millilitres over tens of seconds gives $$Q$$ to better than 1%; short collections at high flow rates are the least precise. The gauge reads to 0.1 Pa, which matters most for the smallest laminar pressure drops (a few pascals in Part 1). The pipe radius enters Poiseuille's law to the fourth power, so a 1% error in $$r$$ gives a 4% error in $$\eta$$: in a real experiment the bore is the measurement to make most carefully. The transition Reynolds numbers are not sharp constants; in real pipes they depend on how disturbed the inlet flow is.

## Questions

1. Why does the dye thread in laminar flow travel faster than the mean speed $$v$$? (Hint: where is the dye?)
2. Blood flow in the aorta reaches $$N_R$$ of a few thousand during each heartbeat. What could a doctor hear with a stethoscope that would not be there in laminar flow?
3. A clogged artery has 80% of its original radius. If the heart kept the same pressure difference across it, what fraction of the original laminar blood flow would get through?
4. Why does warm water reach the turbulent range at a smaller flow rate than cold water in the same pipe?
5. Turbulent flow needs a larger pressure difference for the same flow rate. Where does the extra energy go?

## What to hand in

Answers to Before the lab, a copy of the Data table for each part, the Poiseuille fits with residuals, the viscosities with uncertainties, the transition Reynolds numbers you observed, the exponents and the radius ratio, and answers to the questions. Identify simulated data.
