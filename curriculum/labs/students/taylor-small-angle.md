# The Small Angle Approximation: How Small Is Small?
Student laboratory · Calculus for physics

Textbook: OpenStax *University Physics*, Vol. 1, §15.4 (pendulums); OpenStax *Calculus*, Vol. 1, §4.2 (linear approximations) and Vol. 2, §6.3 (Taylor and Maclaurin series). Access for free at https://openstax.org/details/books/university-physics-volume-1 and https://openstax.org/details/books/calculus-volume-2.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/taylor.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Pendulum: sin θ ≈ θ; Binomial; Relativistic kinetic energy; Gravity above Earth; Field of a dipole; eˣ near 0; ln(1 + x) near 0; 1/(1 + x²): poles at ±i; Linear approximation: √x near 4; and four Build setups.

**Using the demo.**

- The orange curve is the function f, the teal curve its Taylor polynomial Tₙ about the center a (the diamond on the axis). **Order n** sets the highest power kept; **+** and **−** step it by one. The polynomial and its exact coefficients are printed under the graph.
- **Probe θ** (the box above the graph) sets the angle the readouts use; you can also drag the dashed probe line. **At the probe** gives f, Tₙ, the error f − Tₙ and the relative error \|f − Tₙ\|/\|f\| in percent.
- The green column on the graph is where Tₙ is within the chosen tolerance (1% unless you change it under **Show**), and the **Convergence** readouts give its ends as **Tₙ within 1% of f**, in radians and degrees.
- **Record reading** stores n, θ, sin θ, Tₙ(θ) and the relative error. **Export to worksheet** sends the rows to Table 1 below.
- These are computed values, not measurements: the same settings always give the same numbers.

For Part C you also use the [Pendulums demo](https://physicssteven.github.io/VirtualDemos/demos/pendulum.html), Photogate lab scene. Its readouts give the exact period at the release angle, computed from the full equation of motion, and how much longer it is than the small angle period T₀ = 2π√(L/g).

</details>

## Goal

Find how far the small angle approximation sin θ ≈ θ, and its next better version θ − θ³/6, can be trusted to 1%, and then see what that means for the period of a real pendulum.

## Background

A pendulum of length L obeys $$\ddot\theta = -(g/L)\sin\theta$$. This equation has no solution in elementary functions. Near θ = 0 we replace sin θ by the first terms of its Taylor (Maclaurin) series,

$$\sin\theta = \theta - \frac{\theta^3}{3!} + \frac{\theta^5}{5!} - \cdots,$$

with θ in radians. Keeping only θ gives $$\ddot\theta = -(g/L)\theta$$, simple harmonic motion with the period $$T_0 = 2\pi\sqrt{L/g}$$, the same for every amplitude.

The Taylor polynomial of order n about a is $$T_n(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}(x-a)^k$$. For sin θ about 0 the even terms are zero, so $$T_1 = T_2 = \theta$$ and $$T_3 = T_4 = \theta - \theta^3/6$$. When the terms shrink quickly, the error is close to the first term left out. For θ alone that is θ³/6, so the relative error is about θ²/6; for θ − θ³/6 it is θ⁵/120, a relative error of about θ⁴/120. Lagrange's form of the remainder makes this exact: $$\lvert f(x) - T_n(x)\rvert \le M\,\lvert x-a\rvert^{n+1}/(n+1)!$$, where M is the largest $$\lvert f^{(n+1)}\rvert$$ between a and x.

A relative error that grows as $$\theta^p$$ is a straight line of slope p on a graph with log scales on both axes.

The period of a pendulum swinging out to θ₀ is longer than T₀. Its own series is

$$\frac{T}{T_0} = 1 + \frac{\theta_0^2}{16} + \frac{11\,\theta_0^4}{3072} + \cdots$$

(θ₀ in radians). The bob spends most of each swing at angles smaller than θ₀, where sin θ ≈ θ is better, which is why 16 appears here and not 6.

## Before the lab

1. Write the first three nonzero terms of the Maclaurin series of sin θ. Convert 1 rad and 0.1 rad to degrees.
2. Use the first term left out to estimate the angle (in radians and in degrees) at which sin θ ≈ θ is off by 1%. Do the same for sin θ ≈ θ − θ³/6.
3. Make a guess before you measure: at the angle where sin θ ≈ θ is off by 1% (about 14°), will the period of a real pendulum released from that angle be more than 1% longer than T₀, about 1% longer, or less than 1% longer? Write your guess and one sentence of reasoning.

## Safety

No hazards in the virtual lab.

## Procedure

**A. The first term, sin θ ≈ θ.** Open the Taylor Polynomials and Series demo and press the **Pendulum: sin θ ≈ θ** setup (Order n = 1). Type 0.1 in the **Probe θ** box and press Enter, then press **Record reading**. Repeat for θ = 0.2, 0.3, 0.4 and 0.5 rad. Read **Tₙ within 1% of f** in the Convergence readouts and write its upper end, in radians and degrees, in your answer to Analysis 2. Press **Export to worksheet** (the five n = 1 rows go to Table 1), then **Clear**.

**B. Two terms, θ − θ³/6.** Press **+** twice so that Order n = 3 (n = 2 adds nothing, since sin θ has no θ² term). Record readings at θ = 0.2, 0.4, 0.6, 0.8 and 1.0 rad the same way. Read **Tₙ within 1% of f** again. Press **Export to worksheet** again: the five n = 3 rows go to a second copy of Table 1, so each order gets its own graph and fit.

**C. The real pendulum.** Open the Pendulums demo (Photogate lab scene) and press the **Simple pendulum** setup (L = 1.00 m on Earth). Make sure **Blind** in its Lab fold is not ticked. Set **Release angle θ₀** to 14° and read **Exact period at θ₀** and **Longer than T₀ by** in its readouts. Repeat at 23°, 30°, 45° and 58°. Record each in Table 2, and record T₀ = 2π√(L/g) once.

## Data

Table 1. Taylor polynomials of sin θ about θ = 0.

| Reading | Order n | θ (rad) | sin θ | Tₙ(θ) | Relative error (%) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

Table 2. A pendulum with L = 1.00 m, from the Pendulums demo.

| Release angle θ₀ (°) | θ₀ (rad) | Exact period T (s) | Longer than T₀ by (%) | 100 θ₀²/16 (%) |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

## Analysis

1. Graph Table 1 with **Log scales** ticked: relative error (vertical) against θ (horizontal), the n = 1 copy and the n = 3 copy each on its own graph. Find the slope of each line between its first and last points and compare with the powers 2 and 4 from the Background.
2. Compare the 1% angles the demo gave in steps A and B with your estimates in Before the lab 2. Which estimate is closer, and why does the first term left out predict the n = 1 edge so well?
3. At θ = 0.5 rad, check Lagrange's bound for n = 3: here f⁽⁴⁾ = sin θ, so M = sin 0.5. Work out M(0.5)⁴/4! and compare it with the error \|sin 0.5 − T₃(0.5)\|: set Probe θ to 0.5 at Order n = 3 and read the error under **At the probe**.
4. Fill in the θ₀ (rad) and 100 θ₀²/16 columns of Table 2. How well does θ₀²/16 alone predict how much longer the period is, and where does it start to fall short?
5. From Table 2, estimate the release angle at which the period is 1% longer than T₀. How does it compare with the angle at which sin θ ≈ θ is off by 1%?

## Uncertainty

The numbers in both demos are computed, not measured: the same settings give the same digits. The limits here are the rounding of the readouts (four to six significant figures) and, in Table 2, that the release angle can only be set in whole degrees. Say how many significant figures your slopes in Analysis 1 deserve.

## Questions

1. Many textbooks say the small angle approximation is good below about 15°. Using your results, say what "good" means there: good for sin θ itself, or for the period, and to what percent?
2. Was your guess in Before the lab 3 right? Use Analysis 5 and the Background to explain why the period is less sensitive to the amplitude than sin θ is to θ.
3. A pendulum clock swings out to 5°. By what fraction is its period longer than T₀, and how many seconds a day would it lose if it were set by T₀?

## What to hand in

Before the lab answers, both data tables, the log–log graph of Table 1 with its slopes, and your answers to the Analysis and Questions. Say that the data are computed by the demos, not measured.
