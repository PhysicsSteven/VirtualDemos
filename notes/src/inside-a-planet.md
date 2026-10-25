---
title: Inside a Planet
level: Astro 2203, Topics 6, 7 and 8 (Earth and Moon, inner planets, Mars geology; no textbook section); Astronomy module, inside the planets
time: 15 to 45 minutes
---
## What students should come away with

- A planet's mean density, from its mass and radius, tells us whether it is denser inside than its surface rocks. Earth's 5514 kg/m³ against about 3300 kg/m³ for mantle rock says it has a dense core.
- The moment of inertia factor C/MR² tells how the mass is spread: 0.4 for a ball of even density, less when the mass is crowded toward the middle. With the mean density and a core radius it fixes a two layer planet's core and mantle densities.
- The mantle is solid but flows over millions of years. Heated from below and from inside, it convects. A cold, stiff lid either breaks into moving plates (Earth, where water weakens the rock) or stays one stagnant lid (Venus, Mars, Mercury, the Moon).
- A lid that moves lets heat out quickly; a stagnant lid traps it, so the inside runs hotter. Under a lid that never moves, a plume erupts at the same place for billions of years, which is how Olympus Mons grew so large.
- Crust floats on the mantle (isostasy): a block stands higher the thicker and lighter it is, with a root about 5 times deeper than its height. Continents stand 4.4 km above the ocean floor in the model, 4.5 km on Earth.

## Before class

The demo has three parts. **Layers** builds a planet from a core and a mantle of one density each, for Mercury, Venus, Earth, the Moon and Mars, with measured radii and mean densities (NASA NSSDCA), measured C/MR² values and core radii from seismology or gravity (cited in the demo). Each planet's setup fits the two densities to its mean density and C/MR²: Mars gives a core of 6580 and a mantle of 3440 kg/m³, Earth 12 507 and 4152 kg/m³. For Earth it also draws PREM, the layered model from seismic waves (Dziewonski and Anderson 1981). **Convection** runs a real 2D mantle convection model in half of a planet's mantle (infinite Prandtl number, Boussinesq, temperature dependent viscosity with a yield stress). It matches the constant viscosity community benchmark (Blankenbach et al. 1989, case 1a) to 0.2% in heat flow. Its limits are stated in the demo: 2D, 32 cells deep, Rayleigh numbers up to 10⁷ (Earth's mantle is about 10⁷ to 10⁹), and with a strongly varying viscosity the heat flow on this grid runs about 15% high (benchmark case 2a). **Floating crust** is Airy isostasy with average crust thicknesses (Huang et al. 2013) and densities (Christensen and Mooney 1995, PREM).

Setups: Earth: moving plates; Venus: one stiff lid; Venus: a lid that holds, then breaks; Mars: plumes that stay put; rock equally runny hot or cold; heated only from inside; the benchmark. The plates setup holds a stagnant lid for about 2800 Myr of model time before it first breaks; run it at 4 steps a frame. Mars in this 2D model settles into three or four fixed plumes, not the single Tharsis plume that 3D models with a stiff lower mantle give (Zhong and Zuber 2001); the setup says so.

## Running it in class

1. **Earth if it were rock all through.** Ask Q1. The model's mean density is 3300 kg/m³, C/MR² 0.4. Then Earth: core and mantle, with PREM shown.
2. **Mars.** Ask Q2. Drag the core radius from 0 to 2200 km: the mean density rises and C/MR² falls; both match the measured values at 1830 km, the radius InSight found.
3. **Moon: a tiny core.** Ask Q3.
4. **Earth: moving plates**, then **Venus: one stiff lid.** Ask Q4. Compare the orange surface arrows, the heat out and the mantle temperature.
5. **Venus: a lid that holds, then breaks.** The lid holds for about 3300 Myr, then breaks and the heat floods out.
6. **Mars: plumes that stay put.** Ask Q5.
7. **Floating crust**, then **A high plateau with a deep root.** Ask Q6.

## Questions

**Q1.** Earth's mean density is 5514 kg/m³ and its surface rocks are about 3300 kg/m³. What does that say about the inside? What would C/MR² be if it were rock all through?

**Q2.** Mars's C/MR² is 0.3644 and its mean density 3934 kg/m³. How do the two measurements, together, fix the size of its core?

**Q3.** The Moon's C/MR² is 0.3929. Why is it so close to 0.4? Why does the two layer fit give the Moon a core denser than iron?

**Q4.** Why does a planet with moving plates lose its heat faster than one with a stagnant lid? Which runs hotter inside?

**Q5.** Olympus Mons is about 22 km high, far taller than any volcano on Earth. Use the Mars setup to explain why.

**Q6.** A continent 34.4 km thick at 2835 kg/m³ floats on mantle of 3378 kg/m³. How high does it stand above the mantle's level, and how deep is its root? What happens to a plateau with crust 70 km thick?

## Common misconceptions

- **"The mantle is molten."** It is solid rock that flows very slowly, like a glacier; earthquake S waves pass through it. Only small pockets melt, near the surface, where the pressure drops.
- **"Continents float on liquid magma."** They float on solid mantle that flows over millions of years; the floating is isostasy, a balance of weight, not buoyancy in a liquid.
- **"A bigger core always means a denser planet."** The mean density depends on both the core's size and its density: Mars's core is less dense than iron because it holds light elements such as sulfur.
