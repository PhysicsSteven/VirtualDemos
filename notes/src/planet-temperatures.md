---
title: Planet Temperatures and Habitable Zones
level: Astro 2203, Topics 5, 7 and 12 (no textbook section); Astronomy module, gravitation and orbits
time: 10 to 45 minutes
---
## What students should come away with

- Starlight spreads over a sphere, so the light on each square meter falls as 1/d²: half as far gives four times as much.
- A planet settles where the heat it radiates (σT⁴ from each square meter) balances the starlight it absorbs. Its temperature goes as the fourth root of the absorbed light: 16 times the light only doubles the temperature, and a planet four times as far out is half as hot.
- Albedo matters as much as distance: cloudy Venus gets 1.9 times Earth's sunlight but, with no greenhouse, would be colder than Earth (227 K against 255 K).
- The greenhouse effect is the difference between that balance and the measured surface: about 4 K on Mars, 33 K on Earth, 510 K on Venus. Without it Earth's oceans would freeze.
- The habitable zone is where an Earth like planet could keep liquid water given a suitable atmosphere; it moves in for a dimmer star and out for a brighter one. Being in it does not mean a planet has water.
- A world keeps a gas when its escape speed is more than about 6 times the gas's molecular speed: small or hot worlds lose their air, light gases go first.

## Before class

The demo opens on Earth. The large view shows the star, the habitable zone (conservative in dark green, optimistic in light green) and the planet on its orbit, in 3D or flat; drag the planet in or out. A card sets the star's luminosity and temperature and the planet's distance, albedo, how the heat is shared (whole planet, day side, or the point under the star), the greenhouse (e, the share of the ground's heat radiation that escapes to space; a check box turns it off) and the escape speed. Numbers on the card can be typed. The energy budget shows one square meter with a thermometer; the chart shows temperature against distance or, under Keeping an atmosphere, 6 v_rms of seven gases against temperature with the escape speeds of seven worlds. Presets: Mercury, Venus, Earth, the Moon, Mars, Earth under the young Sun, Proxima Centauri b, TRAPPIST-1 e. Each world with air starts with the e that matches its measured temperature. The student worksheet is the Astro 2203 intro worksheet.

## Running it in class

1. **Earth.** Ask Q1. Turn the greenhouse off: 255 K, below freezing. Turn it back on: 288 K, and the readouts compare the air to one layer absorbing 77 % of the heat radiation. Tick Show how sunlight spreads.
2. **Venus.** Ask Q2. Turn its greenhouse off (227 K, colder than Earth), then on: 737 K. Only 0.9 % of the ground's heat radiation escapes, like 111 opaque layers.
3. **The Moon** and **Mercury.** Ask Q3. They have no air: the point under the Sun reaches the balance, 382 K on the Moon (390 K measured) and 622 K on Mercury at its mean distance (590 to 725 K measured).
4. **Earth under the young Sun.** Ask Q4. The zone moves in, Earth stays inside it, yet with today's greenhouse it is 267 K.
5. **Proxima Centauri b** and **TRAPPIST-1 e**, then switch the chart to Keeping an atmosphere. Ask Q5.

## Questions

**Q1.** Earth absorbs 70.6 % of 1361 W/m² averaged over its whole surface. What temperature does the balance give, and why is the real Earth warmer?

**Q2.** Venus gets 2602 W/m² but reflects 77 % of it. Show that with no greenhouse it would be colder than Earth. What fraction of its ground's heat radiation must escape for its surface to be 737 K?

**Q3.** Why do the Moon and Mercury match the balance best at the point under the Sun, and the whole planet balance for Venus and Earth?

**Q4.** Four billion years ago the Sun was about 74 % as bright. How warm would today's Earth have been? Rocks show liquid water then; what must have been different?

**Q5.** The Moon and Titan have nearly the same escape speed (2.38 and 2.64 km/s). Why does Titan keep a thick nitrogen atmosphere and the Moon none?

## Common misconceptions

- **"Planets nearer the Sun are always hotter."** Venus is hotter than Mercury, and with no greenhouse it would be colder than Earth: albedo and the atmosphere matter as much as distance.
- **"The greenhouse effect is bad."** Without it Earth would average 255 K. The concern is changing it.
- **"The habitable zone is where the balance gives 273 to 373 K."** Earth's own balance temperature is 255 K. The zone's edges come from climate models that include the greenhouse of water and carbon dioxide.
- **"A planet in the habitable zone has water."** The zone says only where liquid water could be stable for a suitable atmosphere; the planet may have no air or no water.

## Physics behind the demo

- S = L/(4πd²) with L☉ = 3.828 × 10²⁶ W (IAU 2015 B3) and 1 AU = 1.495978707 × 10¹¹ m: 1361.0 W/m² at 1 AU, the fact sheets' solar irradiance.
- Balance: e σT⁴ = S(1 − a)/f with f = 4 (heat shared over the sphere), 2 (day side) or 1 (the point under the star), σ from CODATA 2022. With e = 1 it reproduces NASA's black body temperatures for Venus (226.6 K), Mars (209.8 K), the Moon (270.4 K), Mercury (439.6 K) and Jupiter (109.9 K) to 0.1 K; for Earth the fact sheet's 254.0 K goes with its older Bond albedo 0.306, and the current 0.294 gives 255.1 K.
- e is an effective value matched to the measured temperature (Venus 737 K, Earth 288 K, Mars about 214 K, all NASA fact sheets). The layer readings are exact for the gray models: one layer transparent to sunlight that absorbs a share ε of the heat radiation gives e = 1 − ε/2; N fully absorbing layers give e = 1/(N + 1). Real atmospheres also carry heat by convection and absorb some sunlight; real albedos change with clouds and ice. The demo states these on the page.
- Habitable zone: Kopparapu et al. 2014 (ApJL 787, L29), one Earth mass: S_eff = S_eff☉ + aT⋆ + bT⋆² + cT⋆³ + dT⋆⁴, T⋆ = T_eff − 5780 K, valid 2600 to 7200 K (TRAPPIST-1 at 2566 K uses 2600 K, stated); d = √(L/S_eff). For the Sun: conservative 0.951 to 1.676 AU, optimistic 0.750 to 1.768 AU.
- Air: 6 v_rms < v_esc with v_rms = √(3kT/m) (Freedman, Geller and Kaufmann, Universe, 10th ed., Box 7-2), using the temperature at the ground; escape happens at the top of the atmosphere, which on Earth is far hotter, so Earth loses helium although the rule at 288 K says it keeps it.
- Stars: Proxima Centauri 2900 K, log L = −2.82, b at 0.04848 AU (Suárez Mascareño et al. 2025); TRAPPIST-1 2566 K, log L = −3.26 (Piaulet-Ghorayeb et al. 2025), e at 0.02925 AU with 0.692 Earth masses and 0.920 Earth radii (Agol et al. 2021). The young Sun from Gough 1981, L = L☉/[1 + 0.4(1 − t/4.57 Gyr)].
- Checks: curriculum/validation/test_planet-temperatures.cjs.

## Going further

- Pair with **Blackbody Radiation** (Stefan–Boltzmann law and Wien's law) and with **Gas in a Box** for molecular speeds.
- With **Finding Exoplanets**, find a planet's distance from its period and put it in its star's zone.
