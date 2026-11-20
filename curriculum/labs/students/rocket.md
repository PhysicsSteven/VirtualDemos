# The Rocket Equation
Student laboratory · Physics I

Textbook: OpenStax *University Physics*, Vol. 1, §9.7. Access for free at https://openstax.org/details/books/university-physics-volume-1.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/rocket.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Using the demo.**

- Set the rocket's mass without fuel (dry mass), the fuel mass, the exhaust speed $$u$$ relative to the rocket and the burn rate, with or without gravity, then launch it. Graphs show the speed and the mass against time.
- Record reading works once the engine has stopped. It stores the settings, the burn time, $$\ln(m_0/m_\text{dry})$$, the time the rocket left the pad, and the speed and height at engine cutoff, as a flight computer would log them. Export to worksheet sends the readings here.
- Blind hides the rocket equation prediction, the speed at burnout readout, the height reached and the dashed predicted curves, leaving the clock, the settings, the mass, the thrust and the graphs.
- The animation is sped up so a whole flight takes about 25 s; the clock shows real time.

**What the demo models.**

- A constant burn rate $$b$$ and a constant exhaust speed $$u$$, so the thrust $$ub$$ is constant. No air. With gravity on, $$g = 9.81\ \text{m/s}^2$$ is held constant at every height (the demo warns when the flight goes high enough for this to matter), and the rocket sits on the pad until the thrust exceeds its weight.
- The speed comes from the exact solution of $$m\,dv/dt = ub - mg$$, not from a step by step calculation.

</details>

## Goal

Test the rocket equation: find how a rocket's final speed depends on how much of it is fuel and test that it scales with the exhaust speed (the slope of Part 1), show that the burn rate does not matter in deep space, and measure how much speed gravity takes away during a launch.

## Background

A rocket of mass $$m$$ ejects exhaust at speed $$u$$ relative to itself at a rate $$b = -dm/dt$$. In a short time the exhaust carries away momentum, and momentum conservation gives the thrust $$ub$$. With no external force,

$$m\frac{dv}{dt} = -u\frac{dm}{dt} \quad\Rightarrow\quad \Delta v = u\ln\frac{m_0}{m},$$

where $$m_0$$ is the mass at the start. When all the fuel is burned, $$m = m_\text{dry}$$, so the speed at engine cutoff is $$u\ln(m_0/m_\text{dry})$$. It depends on the mass ratio and on $$u$$, not on how fast the fuel is burned. A rocket can go faster than its own exhaust: that needs $$m_0/m_\text{dry} > e = 2.718$$.

Launched upwards from the ground in uniform gravity, $$m\,dv/dt = ub - mg$$. If the rocket lifts off at once and burns for a time $$t_b = m_\text{fuel}/b$$, its speed at cutoff is

$$v = u\ln\frac{m_0}{m_\text{dry}} - g\,t_b.$$

The term $$g\,t_b$$ is the gravity loss: the longer the burn, the more speed gravity takes. If the thrust $$ub$$ is less than the launch weight $$m_0 g$$, the rocket cannot lift off until enough fuel has burned that $$ub > mg$$.

## Before the lab

1. A rocket in deep space has $$m_\text{dry} = 1000\ \text{kg}$$, 9000 kg of fuel and $$u = 2500\ \text{m/s}$$. Calculate its speed when the fuel is gone.
2. Why can a rocket go faster than its exhaust? Explain with momentum, in words.
3. The same rocket burns its fuel at 200 kg/s. Calculate the thrust, the launch weight on Earth and the burn time. Does it lift off at once?
4. Predict how the speed at cutoff from the ground changes if the same fuel is burned twice as slowly.
5. In deep space, with no gravity, the same rocket burns its 9000 kg of fuel either at 50 kg/s or at 500 kg/s, ten times the thrust. Which burn ends at the higher speed, or do both end at the same speed?

## Safety

There is no physical apparatus. Real rocket motors, even model rocket motors, must be used only under the rules of a supervised club or range.

## Procedure

Tick **Blind: hide predictions and answers** before you start. For each flight press **Launch**, wait until the engine stops, then press **Record reading**; the demo fills every column of the Data table. To send a series, press **Export to worksheet**, then **Clear** before the next part.

**Part 1: fuel scan, deep space.** Press the **In deep space** preset (no gravity, dry mass 1000 kg, $$u = 2500\ \text{m/s}$$, burn rate 200 kg/s). Set the **Fuel mass** slider to 1000, 2000, 4000, 9000 and 19,000 kg in turn, and fly and record each. Export this series, then clear.

**Part 2: burn rate, deep space.** Press **In deep space** again (9000 kg of fuel), and set the **Burn rate** slider to 50, 200 and 500 kg/s in turn, flying and recording each. Export this series, then clear.

**Part 3: launch from the ground.** Press the **Launch from the ground** preset (gravity on, dry mass 1000 kg, fuel 9000 kg, $$u = 2500\ \text{m/s}$$). Set the **Burn rate** slider to 50, 100, 150, 200, 300 and 500 kg/s in turn, flying and recording each. Export this series, then clear.

**Part 4: too heavy at first.** Press the **Too heavy at first** preset (gravity on, dry mass 1000 kg, 18,000 kg of fuel, $$u = 2500\ \text{m/s}$$, burn rate 70 kg/s), launch it and watch the first part of the burn. Record the flight and export it; the time it left the pad goes in the Lift off at column.

## Data

| Trial | Gravity | $$m_\text{dry}$$ (kg) | $$m_\text{fuel}$$ (kg) | $$u$$ (m/s) | Burn rate (kg/s) | Burn time $$t_b$$ (s) | $$\ln(m_0/m_\text{dry})$$ | Lift off at (s) | $$v$$ at cutoff (m/s) | Height at cutoff (m) |
|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | |
| | | | | | | | | | | |
| | | | | | | | | | | |

Keep each part in its own copy of the table, labeled with the part.

## Analysis

1. Part 1: plot the speed at cutoff against $$\ln(m_0/m_\text{dry})$$ and fit a line. Compare the slope with $$u$$ and the intercept with zero. At which fuel mass did the rocket first end up faster than its exhaust?
2. Part 2: what does the burn rate change, and what does it not change?
3. Part 3: plot the speed at cutoff against the burn time and fit a line. Compare the slope with $$-g$$ and the intercept with $$u\ln(m_0/m_\text{dry})$$.
4. Part 4: how long did the rocket sit on the pad? Calculate when the thrust first exceeds the weight and compare. Use the rocket equation from the moment of lift off, $$v = u\ln(m_1/m_\text{dry}) - g(t_b - t_0)$$ with $$m_1$$ the mass at lift off, to predict the speed at cutoff and compare with your reading. How much speed did the fuel burned on the pad cost?

## Questions

1. In Part 3, the thrust is larger at the higher burn rates. Is the speed gained per kilogram of fuel larger too? Explain.
2. In Part 2, what speeds at cutoff did the 50 and 500 kg/s burns reach, and how long did each burn last? Were you right in Before the lab 5? Use the momentum argument in the Background to explain how the burn rate affects the final speed in deep space.

## Uncertainty

For courses that treat measurement uncertainty. This section is not counted in the 75 minutes; do it when your instructor assigns it.
{: .ws-assigned}

The virtual flight computer logs exact values from the model (the demo rounds them to six significant figures), so there is no measurement scatter: a fit with residuals at the rounding level confirms the model, it does not test it. On a real rocket the exhaust speed is not constant (it depends on the outside pressure), the burn rate varies, and air drag and the change of $$g$$ with height both matter. Name the largest of these for a launch from the ground and say which way it would shift your Part 3 points.

Give the slope and intercept of each fit with their standard errors, and say whether the Part 1 slope agrees with $$u$$ and the intercept with zero within them.

## With calculus

For courses that use calculus. This section is not counted in the 75 minutes; do it when your instructor assigns it.

1. With gravity, $$m\,dv/dt = ub - mg$$ with $$m = m_0 - bt$$. Divide by $$m$$, integrate from $$v = 0$$ at $$t = 0$$, and show that $$v(t) = u\ln\big(m_0/(m_0 - bt)\big) - gt$$. Put in $$t = t_b$$ to get the speed at cutoff in the Background. What does this assume about lift off?
2. In deep space, integrate $$v(t)$$ from 0 to $$t_b$$ to find the height at cutoff. (Change the variable to $$m$$, with $$dt = -dm/b$$, and use $$\int \ln(m_0/m)\,dm = m\ln(m_0/m) + m$$.) Show that $$x(t_b) = \frac{u}{b}\big[m_\text{fuel} - m_\text{dry}\ln(m_0/m_\text{dry})\big]$$ and check it against the Height at cutoff in your three Part 2 rows. Why does the height go as $$1/b$$ when the speed at cutoff does not depend on $$b$$ at all?
3. From the ground, gravity takes $$\tfrac12 g t_b^2$$ off that height. Check the result against your Part 3 rows at 50 and 500 kg/s.

## What to hand in

Prelab answers, the data tables (four parts), the fits with their residuals for Parts 1 and 3 compared with $$u$$, $$-g$$ and $$u\ln(m_0/m_\text{dry})$$, your Part 2 and Part 4 analyses, and answers to the questions (and to Uncertainty and With calculus, if assigned). Identify simulated data.
