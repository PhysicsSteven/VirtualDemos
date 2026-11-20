# Numerical Methods: How Good Is a Computed Motion?
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§15.1, 15.2, 15.4 and 13.5. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/numerical-methods.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Spring, 50 steps a period; Spring, 10 steps a period; Pendulum from 90°; Pendulum from 170°; Orbit, e = 0.5; Comet orbit, e = 0.9.

**Using the demo.**

- The same system runs four times, once with each step rule (Euler, symplectic Euler, Verlet, RK4), and the exact motion is drawn dashed beside each copy. The exact motion is not stepped: it comes from the known solution (x = A cos ωt for the spring, Jacobi's elliptic function for the pendulum, Kepler's equation for the orbit).
- The spring is a 1.00 kg block on a 39.5 N/m spring, so its period is T = 1.000 s, pulled out A = 0.100 m. The pendulum is 1.00 m long; the orbit has a period of 1 year.
- **Steps per period N** sets the time step h = T/N. Moving it (or any control on the Set up card) starts the run again from t = 0. **+1 period** and **+10 periods** take exactly N or 10N steps at once and pause, so every reading is on a whole number of periods.
- The error is the distance between a method's point and the exact point at the same time, on the phase portrait (for the spring, √(Δx² + (Δv/ω)²) in meters). The Readouts table gives each rule's largest error since the run started, its energy error now, ΔE/E₀ = (E − E₀)/E₀, and the force evaluations it has used (RK4 uses four per step, the others one). The Error plot shows each rule's error at every moment.
- A run is stopped when its energy is off by a factor of 1,000; the table then says failed.
- Record reading stores one row: N, h, the time and the number of periods, and for each step rule its largest error, its error now, ΔE/E₀ now and its largest size so far, and its force evaluations. Export to worksheet sends the rows to the Data tables below (a series on whole periods at one N goes to Table 2, a pendulum series to Table 3); Clear starts a new series.
- Blind hides the demo's own plot of largest error against h and its fitted slopes, so you find the slopes yourself.
- These are computed values, not measurements: running the same settings again gives exactly the same numbers.

</details>

## Goal

Measure how fast the error of four numerical methods shrinks as the time step is made smaller, see which methods keep the energy and which let it drift, and learn to tell an error of the method from a real feature of the physics.

## Background

Newton's second law gives the acceleration a(x) from the position. A computer cannot follow the motion continuously: it steps from time t to t + h with a rule that turns the present position x and velocity v into new ones.

- **Euler:** $$x \leftarrow x + h v$$ and $$v \leftarrow v + h a(x)$$, both from the values at the start of the step.
- **Symplectic Euler** (Euler–Cromer): $$v \leftarrow v + h a(x)$$ first, then $$x \leftarrow x + h v$$ with the new v.
- **Verlet** (velocity Verlet): half a velocity kick $$\tfrac12 h a(x)$$, a full move $$x \leftarrow x + h v$$, then the other half kick with the acceleration at the new position.
- **RK4** (fourth order Runge–Kutta): four trial slopes per step, at the start, twice at the middle and at the end, averaged with weights 1 : 2 : 2 : 1.

Each rule makes a small error every step. Over a fixed stretch of time (one period) the error left over usually behaves like a power of the step,

$$\text{error} \approx C\,h^{p},$$

and p is the **order** of the method. Halving h divides the error by $$2^p$$. On log scales a power law is a straight line of slope p. From two runs with steps $$h_1$$ and $$h_2$$ and errors $$e_1$$ and $$e_2$$, the observed order is

$$p = \frac{\ln(e_1/e_2)}{\ln(h_1/h_2)}.$$

The power law only holds once h is small enough; at large h the next power of h still matters, so the observed order settles toward its true value as h shrinks. Euler and symplectic Euler are first order, Verlet second order and RK4 fourth order.

For a block on a spring, $$\omega = 2\pi/T$$ and one Euler step multiplies the energy by exactly $$1 + (\omega h)^2$$, so Euler's energy grows without limit. Symplectic Euler and Verlet keep the area of every patch of the phase portrait (they are *symplectic*), and as a result their energy wobbles within each period but does not drift, however long they run. RK4 is far more accurate per step but is not symplectic: its energy drifts slowly, a little more each period.

A large swing of a pendulum is described by $$\ddot\theta = -(g/L)\sin\theta$$, not by the small angle equation. Its period is longer than $$2\pi\sqrt{L/g}$$; from 90° it is 2.368 s for L = 1.00 m, 18% longer than 2.006 s (§15.4). That is physics, so it does not change when h changes. An error of the method does change with h, and shrinks as $$h^p$$.

The cost of a run is the number of force evaluations, the times a(x) is worked out: one per step for Euler, symplectic Euler and Verlet, four per step for RK4.

## Before the lab

1. A method's error is proportional to $$h^2$$. By what factor does the error fall when N goes from 50 to 100 steps per period? If the error were proportional to $$h^4$$?
2. For the spring with T = 1.000 s and N = 50, find ωh, the factor $$1 + (\omega h)^2$$ for one Euler step, and that factor raised to the 50th power. What is Euler's ΔE/E₀ after one period?
3. A computer run shows a pendulum let go from 90° taking 2.37 s for a swing and back. Would a smaller time step bring this closer to $$2\pi\sqrt{L/g}$$? Explain.
4. Guess before you run: RK4 is far more accurate per step than Verlet. Over 100 periods of the spring at 20 steps a period, which of the two will keep the energy closer to its start? Write your guess and one sentence of reasoning.

## Safety

No hazards in the virtual lab.

## Procedure

**A. Order of each method (spring).** Press the **Spring, 50 steps a period** setup. Open the **Lab** fold at the bottom of the sidebar and tick **Blind: hide the Error against h plot**. Leave all four step rules ticked on the Set up card. Set **Steps per period N** to 10 (the slider steps through set values; the number shows beside it). Press **+1 period** once, then **Record reading**. Repeat for N = 20, 50, 100, 200 and 500: moving the slider starts the run again, so press **+1 period** once each time before recording. At N = 50, also copy Euler's ΔE/E₀ from the Readouts table into your answer to Analysis 2. Press **Export to worksheet** (the readings go to Table 1), then **Clear**.

**B. Energy over many periods (spring).** Set **Steps per period N** to 20. Press **+1 period** and **Record reading**. Press **Reset**, then **+10 periods** and **Record reading** (10 periods). Press **+10 periods** twice more and record (30 periods). Press **+10 periods** seven more times and record (100 periods). Watch the **Energy error** plot (the button above the picture) as you go. Press **Export to worksheet** (Table 2), then **Clear**.

**C. Physics or method? (pendulum).** Press the **Pendulum from 90°** setup (N = 50). Read **Period T (exact)** in the Readouts. Press **+1 period** twice (2 periods) and **Record reading**. Set **Steps per period N** to 200, press **+1 period** twice and record; then N = 500 the same way. Watch the four bobs and the phase portrait at each N. Press **Export to worksheet** (Table 3).

## Data

Table 1. Spring, one period, each step rule's largest error.

| Reading | Steps per period N | Time step h (s) | Largest error, Euler (m) | Largest error, symplectic Euler (m) | Largest error, Verlet (m) | Largest error, RK4 (m) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

Table 2. Spring, N = 20: the largest size of ΔE/E₀ since the start.

| Reading | Periods | Largest energy error, Euler | Largest energy error, symplectic Euler | Largest energy error, Verlet | Largest energy error, RK4 |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

Table 3. Pendulum from 90°, two periods.

| Reading | Steps per period N | Periods | Largest error, Euler (rad) | Largest error, symplectic Euler (rad) | Largest error, Verlet (rad) | Largest error, RK4 (rad) | Largest energy error, Euler |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

## Analysis

1. Graph Table 1 with **Log scales** ticked, each step rule's largest error (vertical) against h (horizontal), choosing each error column in turn. Which methods give straight lines, and which bend, and where? Then for each method work out the observed order p between each pair of neighboring rows (five values per method). Compare the last value (N = 200 to 500) with the orders 1, 1, 2 and 4.
2. Compare Euler's ΔE/E₀ after one period at N = 50 with your Before the lab answer 2.
3. From your N = 500 row and the order of each method, find the number of steps per period Verlet and RK4 need for a largest error of 1 × 10⁻⁶ m in one period, and the force evaluations each then uses per period (N for Verlet, 4N for RK4). Which method reaches that accuracy for less work?
4. From Table 2, describe how each method's largest energy error changes from 1 to 100 periods. RK4's grows by about the same amount each period: find that amount, and estimate after how many periods RK4's energy error passes Verlet's.
5. From Table 3, which errors shrink as N grows, and by roughly what factor from N = 50 to N = 500? Is Euler's largest error consistent with first order there?
6. The exact period you read in step C is 18% longer than $$2\pi\sqrt{L/g}$$, and every method that stays on the dashed bob shows the same period at every N. Which features of the runs in step C are physics, and which are errors of a method? Give the evidence for each.

## Questions

1. Draw one Euler step for a block passing x = 0 at its top speed, and use the picture to explain why Euler always lands outside the exact circle on the phase portrait, so its energy grows.
2. A classmate's simulation of a satellite shows the orbit slowly growing over months. Describe two checks, with the demo's tools in mind, that tell whether this is real physics (a thrust, say) or the method.
3. Simulations of planets over millions of years and of molecules over millions of steps usually use Verlet, not RK4, even though RK4 is more accurate per step. Use your Table 2 to explain why, and say whether your guess in Before the lab 4 held.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The demo's numbers are not measurements: the same settings give the same digits every time, so there is no random scatter to average away. Differences between your observed orders and 1, 2 or 4 come from the departure from a single power law at large h, not from noise; they shrink as h does. At very small errors rounding sets a floor: double precision keeps about 16 significant digits, so RK4 at small h cannot be followed far below 10⁻¹². Say which rows you trust for each method's order and why.

## What to hand in

Before the lab answers, the three data tables, the log–log graph of Table 1, the observed orders, and your answers to the Analysis and Questions (and to Uncertainty, if assigned). Say that the data are computed by the demo, not measured.
