# Chain Reactions and the Critical Size
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §10.5. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/nuclear-reactions.html?setup=chSphere)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Bare ²³⁵U sphere; Generations (these two use the Chain reaction view, the subject of this worksheet); Rutherford 1919; Fission of ²³⁵U (the Nuclear Reactions worksheet); The Sun's core; D–T reactor (the Fusion worksheet); ¹³⁷Cs source; ⁹⁹ᵐTc patient (the Radiation Dose worksheet).

**Using the demo.**

- The Chain reaction view has two models. **Generations with factor k:** each neutron causes a fission with probability $$k/\bar\nu$$, and each fission releases a random number $$\nu$$ of neutrons, $$\bar\nu = 2.44$$ on average for slow neutrons in ²³⁵U. The picture is the family tree of the first neutrons of each generation; the graphs show the neutrons in each generation and the share of fissions giving each $$\nu$$.
- **Sphere of metal:** a bare sphere of pure ²³⁵U or ²³⁹Pu of radius $$R$$. The demo follows thousands of fast neutrons one at a time: each travels a random distance, then either causes a fission (its new neutrons start the next generation) or bounces off in a random direction, until it causes a fission or escapes through the surface. This is a simulation of a simplified teaching model; the About text gives its numbers.
- $$k$$ for a generation is the number of new neutrons divided by the number followed. Start runs it, One generation steps it, Start over begins a new run. The meters show $$k$$ for this generation, its mean over the generations after the fifth, and the share of neutrons that leaked out.
- Record reading (Sphere model) stores the material, $$R$$, the mass, the generations run, the mean $$k$$ with its uncertainty, and the share leaked. Export to worksheet sends the readings to the Data table below; Clear starts a new series, which goes into a new copy of the table. In the Generations model, read the numbers from the meters and the graph.
- Blind hides the model's constants, the theory curves and the result of a full calculation.

</details>

## Goal

Watch a chain reaction grow or die out, and find the radius and mass at which a bare sphere of fissile metal becomes critical.

## Background

Each fission of ²³⁵U releases about 200 MeV and two or three neutrons (§10.5). If on average each neutron leads to $$k$$ new neutrons, a generation of $$N$$ neutrons is followed by about $$kN$$, so after $$g$$ generations

$$N_g = N_0 k^g, \qquad \ln N_g = \ln N_0 + g\ln k.$$

The reaction dies out if $$k < 1$$ (subcritical), holds steady at $$k = 1$$ (critical) and grows if $$k > 1$$ (supercritical). In a lump of metal a neutron can be lost by escaping through the surface. Fissions happen throughout the volume, which grows as $$R^3$$, while escape happens through the surface, which grows as $$R^2$$; so a bigger sphere loses a smaller share, and above a critical radius $$k > 1$$. The mass of that sphere is the critical mass (§10.5).

## Before the lab

1. With $$k = 1.05$$, how many neutrons are there after 20 generations, starting from 1000? After 100? With $$k = 0.95$$?
2. In the demo's sphere model no neutron is captured, so every neutron that does not escape causes a fission. If a share $$L$$ of the neutrons escape, show that $$k = \bar\nu(1 - L)$$. What share must escape at the critical size if $$\bar\nu = 2.57$$?
3. A ²³⁵U sphere has density 18.9 g/cm³. What is its mass for $$R$$ = 8.0 cm?
4. Why does the surface to volume ratio of a sphere, $$3/R$$, matter here?

## Safety

No hazards in the virtual lab.

## Procedure

**Generations.** In the Generations model, start 1000 neutrons with $$k$$ = 0.95, 1.00 and 1.05 in turn. Run each for 20 generations and write the number of neutrons at generations 0, 5, 10, 15 and 20 in the second table. Then start 10 neutrons with $$k$$ = 1.00 several times and note what happens.

**Critical size of ²³⁵U.** In the Sphere model with ²³⁵U, 4000 neutrons per generation, run at least 30 generations at each radius from 6 cm to 11 cm in 1 cm steps, and record a reading at each. Then add readings 0.2 cm apart on each side of where $$k$$ crosses 1.

**Critical size of ²³⁹Pu.** Clear the readings, switch to ²³⁹Pu and repeat for radii from 3.5 cm to 6.5 cm in 0.5 cm steps, adding readings near where $$k$$ crosses 1.

## Data

| Reading | Material | Radius R (cm) | Mass M (kg) | Generations | k | Uncertainty in k | Leaked (%) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

| Generation | Neutrons, k = 0.95 | Neutrons, k = 1.00 | Neutrons, k = 1.05 |
|---|---|---|---|
| 0 | | | |
| 5 | | | |
| 10 | | | |
| 15 | | | |
| 20 | | | |

## Analysis

1. Plot $$\ln N$$ against generation for the three values of $$k$$. Find each slope and compare it with $$\ln k$$.
2. Plot $$k$$ against $$R$$ for ²³⁵U. Find the critical radius $$R_c$$ where $$k = 1$$ by interpolating between the two readings on either side, and the critical mass $$M_c$$.
3. Do the same for ²³⁹Pu. Which needs less metal, and why?
4. At the critical radius, compare the share of neutrons that leaked with $$1 - 1/\bar\nu$$ from Before the lab question 2.
5. A full calculation (MCNP6, quoted by M. B. Chadwick, 2021) gives bare critical masses of 46 kg for ²³⁵U and 10.2 kg for ²³⁹Pu. Compare your values and suggest which simplifications of the model matter.

## Uncertainty

Use the uncertainty in $$k$$ near the crossing and the slope $$dk/dR$$ of your graph to estimate the uncertainty in $$R_c$$, and from it the uncertainty in $$M_c$$ (note that $$M \propto R^3$$).

## Questions

1. With 10 neutrons and $$k = 1.00$$ the chain often dies out. Why, and why does that not happen with $$10^{20}$$ neutrons?
2. Fast neutrons cross the sphere in a few nanoseconds. About how long do 80 generations take, and how many fissions would $$k = 1.05$$ give in that time from one neutron? How much energy is that, at 200 MeV per fission?
3. Surrounding the sphere with a material that reflects neutrons lowers the critical mass. Why?
4. Two pieces, each below the critical mass, are brought together quickly. Explain from your graph why the combined piece can be supercritical.

## What to hand in

Prelab answers, both tables, the graphs of $$\ln N$$ against generation and of $$k$$ against $$R$$, your critical radii and masses with uncertainties, and answers to the questions. Identify simulated data.
