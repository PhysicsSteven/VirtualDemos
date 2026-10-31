# Atwood's Machine: Measuring g
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §§5.3, 5.4, 5.6, 6.1 and 10.7. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/forces.html?ws=atwood)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Atwood's machine (the worksheet opens the demo in it). The other setups belong to the friction worksheet.

**Using the demo.**

- Two masses hang from one string over a pulley: m on the left, m₂ on the right. The string does not stretch and has no mass; the pulley has no mass and no friction. Each mass can be set from 1 to 20 kg (m) or up to 10 kg (m₂) in steps of 0.5 kg.
- **Release at the top mark** starts the masses from rest and times a run of 1.000 m (to 0.001 s). Capture stores m, m₂ and that time; $$a = 2d/t^2$$ is worked out from your time.
- The readouts give the tension and the acceleration. Blind hides every force size and the acceleration; the timer, the masses and the force directions stay.
- The demo uses $$g = 9.81\ \mathrm{m/s^2}$$. Your job is to measure it.

</details>

## Goal

Measure the acceleration due to gravity with an Atwood's machine, test how the acceleration depends on the difference and the sum of the two masses, and check the tension in the string.

## Background

Take the direction in which m₂ falls as positive for both masses (m rises as m₂ falls, since the string does not stretch). With tension T in the string, Newton's second law for each mass gives

$$\begin{gathered} m_2 g - T = m_2 a, \\[4pt] T - m g = m a. \end{gathered}$$

Adding the two equations removes T:

$$a = \frac{m_2 - m}{m + m_2}\,g, \qquad T = \frac{2\,m\,m_2}{m + m_2}\,g.$$

The acceleration is g times the fraction $$x = (m_2 - m)/(m + m_2)$$, so a graph of a against x is a straight line through the origin with slope g. Making the two masses nearly equal makes a small and the run slow enough to time well, which is why George Atwood built the machine in 1784 to study motion under gravity.

A run of distance d from rest takes time t, so $$a = 2d/t^2$$.

A real pulley turns, so some of the falling mass's work goes into its rotation. A pulley of moment of inertia I and radius r adds $$I/r^2$$ to the mass being accelerated (§10.7), and friction at its axle subtracts a force f from the driving force:

$$a = \frac{(m_2 - m)\,g - f}{m + m_2 + I/r^2}.$$

The virtual pulley has I = 0 and f = 0, so your fits test whether the apparatus is ideal.

## Before the lab

1. For m = 2.0 kg and m₂ = 2.5 kg, work out a, T and the time for a 1.000 m run from rest. Compare T with the two weights.
2. Draw a free body diagram for each mass while they move. Why is T not equal to m₂g?
3. If both masses are doubled, what happens to a? To T?

## Safety

On a real bench, put a pad under the falling mass, keep hands and feet out from under it and stop the masses before the lower one hits the floor. Keep the total mass well below the pulley's rated load.

## Procedure

**Part 1: acceleration against the mass fraction.** Keep m₂ the heavier mass so that it falls. Hold the total mass m + m₂ at 6.0 kg and time a 1.000 m run from rest for four splits: 2.5 and 3.5 kg, 2.0 and 4.0 kg, 1.5 and 4.5 kg, 1.0 and 5.0 kg. Then hold the total at 10.0 kg and time three more: 4.5 and 5.5 kg, 4.0 and 6.0 kg, 3.0 and 7.0 kg. Start each run from rest at the top mark; a setting changed during a run spoils that run. Send the seven runs to the worksheet together.

**Part 2: acceleration against the total mass.** Clear the readings first, so these runs start a new table. Keep the difference m₂ − m at 1.0 kg and time a 1.000 m run for five totals: 1.0 and 2.0 kg, 2.0 and 3.0 kg, 4.0 and 5.0 kg, 6.0 and 7.0 kg, 9.0 and 10.0 kg. Send the five runs to the worksheet.

**Part 3: tension.** Turn Blind off. For three of your runs, record the tension the demo reads while the masses move, and compare it with the two weights.

## Data

| Run | $$m$$ (kg) | $$m_2$$ (kg) | $$t$$ for 1.000 m (s) | $$a = 2d/t^2$$ (m/s²) | $$x = (m_2 - m)/(m + m_2)$$ |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

**Table 2: fixed difference, m₂ − m = 1.0 kg.**

| Run | $$m$$ (kg) | $$m_2$$ (kg) | $$t$$ for 1.000 m (s) | $$a = 2d/t^2$$ (m/s²) | $$m + m_2$$ (kg) | $$1/a$$ (s²/m) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

**Table 3: tension.**

| Run | $$m$$ (kg) | $$m_2$$ (kg) | Tension read $$T$$ (N) | $$2 m m_2 g/(m + m_2)$$ (N) | $$m g$$ (N) | $$m_2 g$$ (N) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

## Analysis

1. Plot a against x for Table 1, with a free intercept. Report g from the slope with its standard error, and the intercept with its standard error. Do the runs at 6.0 kg and 10.0 kg fall on the same line? What does that tell you about the total mass?
2. Plot 1/a against m + m₂ for Table 2. From the Background, 1/a = (m + m₂ + I/r²)/((m₂ − m) g) when f = 0. Find g from the slope and the pulley's I/r² from the intercept. Is the intercept zero within its uncertainty?
3. Compare each tension in Table 3 with the prediction. Explain why T lies between mg and m₂g.
4. Compare your two values of g with 9.81 m/s². Which part gives the smaller uncertainty, and why?

## Uncertainty

The timer rounds to 0.001 s and the run is 1.000 m. Since $$a = 2d/t^2$$, the fractional uncertainty in a is twice the fractional uncertainty in t, so the fast runs (large x) are the least precise. Find that fraction for your fastest and slowest runs and compare it with the scatter about your fit. Repeating an unchanged run in the simulation gives the same time, so the scatter here comes only from rounding; on a real bench, the reaction time of a hand timer would dominate.

## Questions

1. Why does an Atwood's machine measure g more easily than timing a mass dropped freely over the same 1.000 m?
2. A real pulley has I/r² = 0.20 kg. How much would that change a for 2.0 and 2.5 kg, and which of your graphs would show it?
3. Axle friction f = 0.50 N is added to an ideal pulley. Which graph would show it, and as what?
4. With m₂ much larger than m, what does a approach? With m₂ = m?

## What to hand in

Prelab answers, the three tables and the CSV, both graphs with fits and residuals, your two values of g with uncertainty, I/r² from Part 2, the tension comparison and answers to the questions. Identify simulated data.
