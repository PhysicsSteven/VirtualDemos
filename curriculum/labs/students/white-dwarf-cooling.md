# White Dwarf Cooling
Student laboratory · Astronomy

Textbook: OpenStax *University Physics*, Vol. 2, §2.3 (heat capacity and equipartition: $$\tfrac{3}{2}kT$$ per particle) and Vol. 3, §6.1 (blackbody radiation and the Stefan–Boltzmann law). Access for free at https://openstax.org/details/books/university-physics-volume-2 and https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/white-dwarf-cooling.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Hot young white dwarf; Mestel cooling law; Crystallization begins; Heavier dwarfs crystallize first; Helium vs carbon/oxygen; Cosmic clock.

**Using the demo.**

- Three panels: the white dwarf's luminosity (or core temperature) against its cooling age, a slice through the star showing where its ions have frozen, and a schematic HR diagram of the kind Gaia measures. The age line, the dot on the HR diagram and the handle on the star's surface (its mass) can all be dragged. The cooling age is on a logarithmic scale.
- The star's structure is a zero temperature white dwarf held up by degenerate electrons, fixed as it cools. Its core is at one temperature $$T_c$$. A thin envelope insulates it and sets $$L \propto M T_c^{3.5}$$. There is no fusion: the star shines by losing the heat stored in its ions.
- The ions can be an ideal gas ($$\tfrac{3}{2}k$$ per ion) or a Coulomb liquid (more heat per ion). With freezing on, the ions crystallize where the coupling $$\Gamma$$ passes 175, and each ion that freezes can give up a latent heat of $$0.77\,kT$$.
- This is a textbook model. Its envelope is cruder than real ones, so its ages and the luminosity at which freezing starts are only indicative: read its trends, not its exact numbers. Neutrino cooling of very hot white dwarfs is left out.
- Record reading stores the mass, composition, model, cooling age, luminosity, core and surface temperatures, the solid fraction, and the star's radius, central density, the temperature at which its center freezes and when and where crystallization begins. Export to worksheet sends the readings to the first data table below, or to the second when the readings are at several masses; Clear starts a new series, which goes into a new copy of the table.

</details>

## Goal

Measure how a white dwarf, a star with no fuel, fades as it loses its stored heat, test Mestel's cooling law, and find the condition under which its core freezes into a crystal.

## Background

**Stored heat.** A white dwarf's core holds $$N$$ ions at temperature $$T_c$$. As an ideal gas they store $$U = \tfrac{3}{2}NkT_c$$. The electrons hold the star up, but because they are degenerate they store almost no heat.

**The envelope.** The heat leaks out through a thin outer layer whose opacity makes

$$L = C\,M\,T_c^{3.5},$$

for a constant $$C$$. With $$dU/dt = -L$$ this gives Mestel's cooling law: after the star has forgotten its starting temperature,

$$t = \frac{2}{5}\,\frac{U}{L}\quad\text{and}\quad L \propto t^{-7/5}.$$

**Freezing.** The ions repel each other. Their coupling compares the Coulomb energy of neighbors with their thermal energy:

$$\Gamma = \frac{\langle Z^{5/3}\rangle e^2}{4\pi\varepsilon_0\,a_e\,kT},\qquad a_e = \left(\frac{3\mu_e m_u}{4\pi\rho}\right)^{1/3},$$

where $$a_e$$ is the radius of the sphere holding one electron, $$\mu_e = 2$$ is the mass per electron in atomic mass units, and $$\langle Z^{5/3}\rangle = 25.03$$ for the demo's carbon/oxygen mix. The ions freeze where $$\Gamma$$ passes a critical value $$\Gamma_m$$. Since $$\Gamma \propto \rho^{1/3}/T$$, the center, where the density is highest, freezes first.

Constants: $$k = 1.3806\times10^{-23}$$ J/K, $$e^2/4\pi\varepsilon_0 = 2.3071\times10^{-28}$$ J·m, $$m_u = 1.6605\times10^{-27}$$ kg, $$L_\odot = 3.828\times10^{26}$$ W, $$\sigma = 5.670\times10^{-8}$$ W/(m²·K⁴), 1 yr $$= 3.156\times10^7$$ s.

## Before the lab

1. A 0.6 $$M_\odot$$ carbon/oxygen white dwarf holds $$5.24\times10^{55}$$ ions. At a core temperature of $$1.63\times10^7$$ K, how much heat do they store as an ideal gas? If its luminosity is $$5.36\times10^{-3}\ L_\odot$$, what age does Mestel's law give?
2. Start from $$\tfrac{3}{2}Nk\,dT_c/dt = -CMT_c^{3.5}$$ and show that late in life $$T_c \propto t^{-2/5}$$, $$L \propto t^{-7/5}$$ and $$t = \tfrac{2}{5}U/L$$.
3. If a white dwarf takes 1 Gyr to fade to some luminosity, how old is it when it is 10 times fainter?
4. Show that the temperature at which the center freezes is proportional to $$\rho_c^{1/3}$$, and find the constant in K per (g/cm³)^1/3 for $$\Gamma_m = 175$$.
5. A 0.6 $$M_\odot$$ white dwarf has a radius of 8841 km. Find its surface temperature when $$L = 3.3\times10^{-5}\ L_\odot$$.

## Safety

No hazards in the virtual lab.

## Procedure

**Mestel's law.** Choose Mestel cooling law and pause. Record readings at about seven cooling ages from 100 Myr to 10 Gyr, spread evenly on a logarithmic scale.

**Real ions.** Clear and choose Hot young white dwarf. Without changing the mass, record readings at the same seven cooling ages.

**Freezing and mass.** Clear and choose Heavier dwarfs crystallize first. Record a reading at each mass from 0.5 to 1.2 $$M_\odot$$ in steps of 0.1 $$M_\odot$$; the cooling age does not matter for this part.

## Data

| Reading | Model | Cooling age $$t$$ (yr) | Luminosity $$L$$ ($$L_\odot$$) | Core temperature $$T_c$$ (K) | Surface temperature $$T_{\text{eff}}$$ (K) | Solid (% of the mass) | log₁₀ $$t$$ | log₁₀ $$L$$ | log₁₀ $$T_c$$ |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |

**Freezing and mass.**

| Reading | Mass $$M$$ ($$M_\odot$$) | Radius $$R$$ (km) | Central density $$\rho_c$$ (g/cm³) | Center freezes at $$T_m$$ (K) | Crystallization begins at age (yr) | Surface temperature then (K) | Cube root of $$\rho_c$$ (g⅓/cm) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

## Analysis

1. For the Mestel series, fill in the log columns and graph log₁₀ $$L$$ against log₁₀ $$T_c$$. What is the slope, and what does it test?
2. Graph log₁₀ $$L$$ against log₁₀ $$t$$ for the Mestel series. Compare the slope with $$-7/5$$. Do the residuals show the early readings bending away from the line, and why would they?
3. For the Mestel reading at 1 Gyr, use the number of ions (prelab 1) to find $$U = \tfrac{3}{2}NkT_c$$ and Mestel's age $$\tfrac{2}{5}U/L$$. How close is it to the cooling age?
4. Compare the two series at the same ages. Which white dwarf is brighter at each age, and by what factor at 1 Gyr? Explain using the heat each kind of ion stores.
5. At which of your ages has the second white dwarf begun to freeze? Graph log₁₀ $$L$$ against log₁₀ $$t$$ for it and describe what freezing does to the slope.
6. For the freezing table, fill in the cube root of $$\rho_c$$ and graph $$T_m$$ against it. Is it a line through the origin? Use the slope and the Background formula to find $$\Gamma_m$$.
7. Which mass starts to crystallize first, and is it brighter or fainter than the others at that moment? Use $$\Gamma \propto \rho^{1/3}/T$$ to explain.

## Uncertainty

The readings are exact values of the model, so the fits' standard errors are tiny. The larger uncertainty is in the model. Its envelope makes a 0.6 $$M_\odot$$ white dwarf begin to crystallize near $$T_{\text{eff}} \approx 3900$$ K, where detailed models give about 6000 K. Estimate, from your Mestel series, how much the age of a white dwarf at a given luminosity changes if the real envelope makes it twice as bright at the same core temperature ($$C$$ doubled): which way, and by what factor?

## Questions

1. Predict, then check: two carbon/oxygen white dwarfs form together, one of 0.6 $$M_\odot$$ and one of 1.0 $$M_\odot$$. Which starts to crystallize first?
2. Latent heat makes a white dwarf take longer to fade, yet at any given core temperature it is exactly as bright as without latent heat. Explain both facts.
3. A helium white dwarf has 3.4 times as many ions as a carbon/oxygen one of the same mass. Choose Helium vs carbon/oxygen: why does it fade more slowly, and why does its center not freeze within the age of the universe?
4. Heavier white dwarfs are smaller. Use your radii to find how $$R$$ depends on $$M$$ for the lighter ones (try $$R \propto M^{n}$$). Why does it fall faster near 1.2 $$M_\odot$$?
5. Why is a population of white dwarfs a clock for the age of the Galaxy's disk? Choose Cosmic clock and drag the disk's age to see.

## What to hand in

Prelab answers, the table copies with their graphs and fits, the slopes and Mestel's age, $$\Gamma_m$$, and answers to the questions. Identify simulated data.
