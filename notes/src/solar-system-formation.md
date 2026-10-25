---
title: Building a Solar System
level: Astro 2203
time: 30 to 45 minutes
---
## What students should come away with

- A collapsing cloud keeps its spin (angular momentum), so it spins faster as it shrinks. Gas cannot fall closer to the Sun than the distance where its spin keeps it in orbit, and gas falling from above and below meets in the middle: the cloud becomes a spinning disk. No spin, no disk.
- The disk is hot near the young Sun and cold far out. Rock and metal are solid almost everywhere; water ice only beyond the frost line, a few AU out. Beyond it there is about four times as much solid material.
- Planetesimals join into bodies that stop growing when they have swept up their own ring of the disk (the isolation mass): about a tenth of an Earth mass near 1 AU, a few Earth masses beyond the frost line. Cores of about 10 Earth masses pull in gas and become giants, but only if they form before the gas is gone, within a few million years.
- Radioactive aluminum 26 (half life 0.73 million years) melted the planetesimals that formed early and were large enough to keep the heat in; their iron sank to cores, the source of iron meteorites.

## Before class

Every stage is a stated model (the Lab section's "The model and its formulas" and the list below). **Blind** hides the predictions: the disk radius, the frost line and the isolation mass. Each stage runs on its own clock; To the end jumps to the end of a run. Readings from different stages go to different tables in the worksheet, so students clear the readings between stages.

## Running it in class

1. **Our solar nebula.** A cloud 5000 AU in radius turning once every 4 million years falls in within about 60 000 years. Follow the tracked parcel: it ends 39.1 AU from the Sun, going around once every 244 years, 16 000 times faster than the cloud turned. Switch to Flat: edge on, the disk is flat.
2. **Slow spin, Fast spin, No spin.** Four times slower spin, 16 times smaller disk; twice the spin, four times the disk. With no spin every parcel falls onto the Sun.
3. **Frost line, today's Sun.** Drag the probe outward and watch which solids appear: rock and metal from 0.044 AU, iron sulfide from 0.18 AU, water ice from 2.37 AU. Compare with the planets marked along the bottom.
4. **Frost line, bright young Sun.** Four times the light: every temperature rises by 4^(1/4) = 1.41 and the frost line moves twice as far out.
5. **Minimum mass disk.** Run it to the end in the Flat view: the rocky bodies stop just above the isolation mass curve, 0.1 to 0.3 Earth masses; beyond the frost line they reach several Earth masses, but none gets to 10 Earth masses while the gas lasts. Far out, growth is too slow even in 100 million years.
6. **Three times heavier disk** makes a giant beyond the frost line; **Gas gone early** (1 million years) does not.
7. **Iron cores.** Early planetesimal melts, then Late planetesimal stays solid and Small planetesimal stays solid; Vesta sized grows a core, as Vesta did.

## Questions

**Q1.** In Our solar nebula, use the readouts to find how many times faster the disk's edge goes around than the cloud did. Check it against (r₀/R_d)², and explain why they agree.

**Q2.** The demo's frost line for today's Sun is 2.37 AU. Use T = 280 K (r/1 AU)^(−1/2) to show where it comes from. Where would it be for a Sun 9 times as bright?

**Q3.** In the minimum mass disk, the solids at 1 AU are 7.1 g/cm². Use the isolation mass formula to find the largest body that grows there, and compare with Mars and Earth. What has to happen after the gas is gone to make Earth?

**Q4.** Why does the three times heavier disk make a giant, but the same disk with gas gone at 1 million years does not? What does that say about when Jupiter formed?

**Q5.** A 50 km planetesimal grows an iron core if it forms by 1.5 million years after the first solids, but not at 2.0. Use the aluminum 26 heat still to come to explain where the cut lies.

**Q6.** Why does a 3 km planetesimal formed at 0.5 million years stay cool, while a 50 km one formed at the same time melts?

## Common misconceptions

- **"The planets formed in order outward from the Sun, as the disk cooled."** The disk had its temperature profile all at once; what differs with distance is what can be solid and how fast bodies grow.
- **"The Sun's gravity flattens the disk."** Gravity alone would pull everything in; it is the spin, kept as the cloud shrinks, together with the collisions of gas falling from above and below, that makes a flat disk.
- **"The giant planets are big because they are far away."** They are big because beyond the frost line there was more solid material, so their cores reached the size needed to pull in gas before the gas disappeared.
- **"Rocky planets formed hot and molten because they were close to the Sun."** The heat that melted early planetesimals came from inside them (aluminum 26), and later from impacts.

## Physics behind the demo

- Constants: AU = 1.495978707 × 10¹¹ m and GM☉ = 1.3271244 × 10²⁰ m³/s² (IAU 2012 and 2015 resolutions), G = 6.67430 × 10⁻¹¹ (CODATA 2022), Earth's mass 5.9722 × 10²⁴ kg and today's planets from the NASA planetary fact sheets.
- **Collapse.** The infall model of Ulrich (1976, ApJ 210, 377): parcels fall freely in the pull of the young Sun, as if its mass were already at the center, from a cloud turning as one body. A parcel starting at radius r₀ and distance s from the axis crosses the midplane at the semi latus rectum of its orbit, (Ω₀ s r₀)²/GM, whatever its energy (checked in the tests). There its up and down motion is removed (gas from above meets gas from below), its spin about the axis j_z = Ω₀ s² is kept, and its motion toward or away from the Sun dies out over about an orbit, so it settles at j_z²/GM. The disk's edge is R_d = Ω₀² r₀⁴/GM. Parcels that would come within 0.05 AU join the Sun. The cloud's own gravity and pressure, magnetic braking and the disk's later spreading are left out. The default spin, once every 4 million years (1.6 × 10⁻¹⁴ s⁻¹), is within the range measured in dense cores (Goodman et al. 1993).
- **Disk.** Hayashi's (1981, Prog. Theor. Phys. Suppl. 70, 35) minimum mass solar nebula: T = 280 K (r/1 AU)^(−1/2) (L/L☉)^(1/4), the temperature of a dark grain in full sunlight; solids 7.1 g/cm² (r/1 AU)^(−3/2) inside the frost line and 30 beyond it; gas 1700. Condensation temperatures (half of each element in solids) at 10⁻⁴ bar from Lodders (2003, ApJ 591, 1220): Ca and Al oxides 1653 K, rock (Mg, as olivine) 1336 K, iron nickel metal 1334 K, iron sulfide 664 K, water ice 182 K, ammonia in water ice 123 K, methane in water ice 40 K. A real disk is hotter than this in its dense middle near the Sun, and the pressure shifts the condensation temperatures by tens of kelvins. Hayashi put his frost line at 2.7 AU (170 K); the demo's 182 K gives 2.37 AU.
- **Growth.** Oligarchic growth (Kokubo and Ida 2000, Icarus 143, 15; 2002, ApJ 581, 666): the big bodies end up about b = 10 mutual Hill radii apart, so each stops at M_iso = (2π a² b Σ)^(3/2) (2/3M☉)^(1/2), and the time to grow to mass M is T_grow = 1.7 × 10⁵ yr (M/10²⁶ g)^(1/3) (Σ₁/10 g cm⁻²)^(−1) (a/1 AU)². The demo starts with 900 planetesimals spaced evenly in log a from 0.35 to 36 AU, each holding the solids of its ring, and joins neighbors closer than 10 mutual Hill radii once the growth time to their joint mass has passed, keeping mass and angular momentum. Because whole bodies join, the final bodies are between 1 and 2 times M_iso (tested). A body that reaches 10 Earth masses (Mizuno 1980; Pollack et al. 1996) while the gas lasts is marked a giant; how much gas it gathers is not modeled, and neither are the later giant impacts, the giants' pull on their neighbors or migration. The gas lasting 1 to 10 million years spans what young clusters show (Haisch, Lada and Lada 2001).
- **Iron cores.** A ball of rock formed all at once at time t_f, heated by ²⁶Al and cooled by conduction to a surface held at 180 K; 40 shells, implicit time steps, enthalpy for the melting. Values from Johansen et al. (2023, A&A 671, A74): initial heating 3 × 10⁻⁷ W/kg falling as e^(−t/1.05 Myr), c = 1200 J/(kg·K), conductivity 4 W/(m·K), rock melting from 1661 K to 1982 K with 4 × 10⁵ J/kg; density 3300 kg/m³ assumed. The iron sinks once the center is half molten (1822 K). A big body keeps all its heat, so it forms a core if it forms before 1.05 Myr × ln(9.94/2.17) = 1.60 Myr. Left out: porous starting material (which conducts poorly and melts more easily), melt rising and stirring (a molten shell loses any further heat), ⁶⁰Fe and impacts, and growth over time. The iron core is drawn in Vesta's proportion (core radius 0.42 of the body's; Russell et al. 2012), scaled by how much of the body got half molten.
