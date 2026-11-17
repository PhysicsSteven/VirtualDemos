---
title: The Sun: Surface and Cycle
level: Astronomy (the Sun; Stars and Galaxies Unit 1, Day 2)
time: 20 to 40 minutes
---
## What students should come away with

- The surface boils: granules are the tops of convection cells about 1,300 km across, hot gas rising in the middle and cooler gas sinking in the dark lanes, each living about 10 minutes.
- Sunspots are cooler, not black. A 4,000 K umbra gives (4000/5772)⁴ = 0.23 of the light of the surface per square meter (σT⁴), so it looks dark next to the surface; cut out and seen alone it would glow orange and outshine the full Moon.
- Spots are where strong magnetic fields (thousands of gauss) choke convection. The field splits spectral lines (the Zeeman effect), which is how we measure it.
- The Sun is not solid: the equator turns in about 24.5 days, gas at 60° in about 30 days. Field lines carried by the gas get wound up, which drives the cycle.
- The sunspot number rises and falls about every 11 years. In each cycle spots appear first near 30° latitude and later closer to the equator, making the butterfly diagram; the magnetic field flips each cycle, so the full magnetic cycle is about 22 years.
- A twisted field can snap and release a flare (light, arriving in 8.3 minutes) and a coronal mass ejection (gas, arriving one to several days later): space weather.

## Before class

Four modes, chosen above the picture. **Spots**: a patch of the surface 80,000 km across with drawn granulation (Play makes it boil, 1 s = 1 min) and a spot with sliders for the umbra's temperature, diameter and magnetic field; a checkbox cuts the spot out and hangs it in the night sky, with the camera set for it. Earth is drawn to scale. The graphs are the blackbody curves of the surface and the spot, and the spectrum along the spectrograph slit around the iron line at 630.25 nm, which splits inside the spot. Setups: A sunspot, 4,000 K; A warmer spot, 4,500 K (the lesson's); A darker spot, 3,800 K; The spot alone in the sky; No field: no spot. **Rotation**: the Sun from slightly above its equator, with field lines frozen into the gas and markers on one meridian; Play at 1 s = 5 days. The graph is the time for one turn against latitude, against the stars and as seen from Earth. Setups: Equator against 60°, One year of winding, If the Sun were solid. **Cycle**: the butterfly diagram from the Greenwich and NOAA records (1874 to 2013) above the sunspot number since 1749 (WDC-SILSO); drag in the picture or use the Date slider; minima are marked, and a small Sun shows spots in the bands recorded that month. Setups: Cycle 19, the biggest; Cycle 24; Now, cycle 25; The 1870s. **Space weather**: Play twists a magnetic loop until it snaps; the flash reaches Earth in 8.3 minutes, and the CME follows at the speed set by the slider (1 s = 1 h). Setups: A 1,000 km/s CME (the lesson's exercise), A slow CME, Carrington 1859, Halloween storms 2003.

## Running it in class

1. **A sunspot, 4,000 K.** Ask Q1, then **The spot alone in the sky**.
2. Still in Spots, watch the slit spectrum as the field slider moves. Ask Q2.
3. **Rotation, Equator against 60°.** Play for a month and a half. Ask Q3, then **One year of winding**.
4. **Cycle, Cycle 19**, then drag through the record. Ask Q4 and Q5.
5. **Space weather, A 1,000 km/s CME.** Ask Q6, then try **Carrington, 1859**.

## Questions

**Q1.** A sunspot umbra is 4,000 K and the surface 5,772 K. What fraction of the surface's light does each square meter of the spot give? Why does a spot look almost black in photographs, and what would it look like alone in the night sky?

**Q2.** The field in the umbra is 3,000 gauss. How many times Earth's field (about 0.5 gauss) is that? The iron line splits into two components; what happens to the gap when the field doubles?

**Q3.** The equator turns once in 24.47 days and gas at 60° in 30.22 days (against the stars). How long until the equator has gained one full turn on 60°? What happens to a magnetic field line that started straight from pole to pole?

**Q4.** Using the record, find the smoothed peaks of cycles 19, 24 and 25 and the dates of the last two minima. How long was cycle 24? Is the cycle the same length and the same height every time?

**Q5.** Look at the butterfly diagram through one cycle. Where do the first spots of a cycle appear, and where are the last? Why are there almost no spots near the poles or right at the equator?

**Q6.** A CME leaves the Sun at 1,000 km/s. How long does it take to reach Earth (1 au = 1.496 × 10⁸ km), and how much warning does the flare's light give?

## Common misconceptions

- **"Sunspots are holes, or black, or cold."** At 4,000 K a spot is hotter than the filament of an old light bulb (about 2,700 K); it is dark only next to the 5,772 K surface. The fourth power makes a 30 % drop in temperature a 77 % drop in light.
- **"The Sun is solid and turns like Earth."** It is gas; the equator laps the poles. Sunspots tracked at different latitudes showed this to Carrington in the 1860s.
- **"Sunspots are on the Sun's surface like stains."** They are where bundles of magnetic field come through the surface; they come and go in days to months.
- **"More sunspots make the Sun dimmer."** At solar maximum the Sun is slightly brighter (about 0.1 %), because bright faculae around spots outweigh the dark spots.
- **"A flare's light and its CME arrive together."** Light takes 8.3 minutes; the gas takes about one to four days.

## Physics behind the demo

- Spots: σT⁴ per square meter (Stefan–Boltzmann), T☉ = 5,772 K (IAU 2015 nominal), Wien peak b/T. Colors are blackbody colors through the CIE 1931 color matching functions (demos/lib/bbcolor.js), as a camera set for the surface records them. Granulation is drawn, not computed: cells about 1,300 km apart (Hirzberger and others 1997), centers 400 K hotter than the lanes, giving a visible brightness contrast near the observed 10 to 20 %. The penumbra is drawn at about 5,400 K; spots appear in the drawing only for fields of 1,000 gauss or more. The spot alone: (T/T☉)⁴ × (spot area ÷ disk area) of the Sun's light, Sun V = −26.76 (M_V = 4.81, Willmer 2018), full Moon −12.74; using the whole light for V makes a 4,000 K spot about half a magnitude too bright, still far brighter than the Moon.
- Zeeman: each σ component moves Δλ = gλ²eB/(4πm_e c) (normal pattern; π left out as for a field along the line of sight); Fe I 630.25 nm has g = 2.5, so 3,000 G gives 13.9 pm.
- Rotation: sidereal ω = 14.713 − 2.396 sin²φ − 1.787 sin⁴φ degrees per day from Doppler shifts (Snodgrass and Ulrich 1990); synodic periods with the sidereal year. Field lines are drawn frozen into the gas, each point turning at its own latitude's rate (the Babcock 1961 picture).
- Cycle: WDC-SILSO sunspot number version 2.0 (Royal Observatory of Belgium, CC BY-NC 4.0), monthly and 13 month smoothed, to mid 2026. Minima are the lowest smoothed values within 5 years either side; cycles counted from 1755. Butterfly: daily sunspot group areas and latitudes from the Royal Greenwich Observatory (1874 to 1976) and USAF/NOAA (1977 to 2013), compiled by D. Hathaway (NASA MSFC), averaged per 27.3 day rotation in 2° bands.
- Space weather: light 1 au/c = 499.0 s; CME at a steady speed, t = 1 au/v (real CMEs slow down or speed up in the solar wind). Carrington 1859: 17.6 h (Cliver and Svalgaard 2004). October 2003: about 19 h (Gopalswamy and others 2005). The picture is not to scale.

## Going further

- **Inside the Sun** for where the energy comes from and how it gets to the surface; **Star Slice** for the convection zone under the granules.
- NASA's Solar Dynamics Observatory and NOAA's Space Weather Prediction Center show today's Sun and today's sunspot number.
