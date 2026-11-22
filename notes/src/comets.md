---
title: Comets and Meteor Showers
level: Astronomy module (The Solar System, comets and meteors); GenEd, algebra only
time: 10 to 30 minutes
---
## What students should come away with

- A comet is a small icy body on a long, stretched orbit. Kepler's third law still holds: the period in years is a^1.5, with a the average of the closest and farthest distances in au.
- Inside about 3 au the Sun's heat turns the ice to gas, which carries dust off with it. Far from the Sun there is no tail at all.
- A comet has two tails. The ion tail is gas blown by the solar wind at about 400 km/s, so it points almost straight away from the Sun, even when the comet is leaving the Sun tail first. The dust tail is made of grains pushed gently by sunlight; each grain follows its own orbit, so the tail curves back along the comet's path.
- A comet leaves its dust spread along its orbit. Earth crosses that stream at the same point of its own orbit, and so on the same date, every year: that is a meteor shower. The meteors all seem to come from one point in the sky, the radiant, and their speed depends on whether Earth meets the stream head on or catches it from behind.

## Before class

Two modes, chosen above the picture. **Tails**: a comet from JPL's Small-Body Database (Halley, Encke, Swift-Tuttle, 67P, Hale-Bopp, NEOWISE) or Your own comet with Closest to the Sun q and Farthest from the Sun Q; Solar wind speed; time at 1 to 30 days a second. The picture is seen from above the comet's orbit, with the ion tail along the solar wind as the comet feels it and the dust as simulated grains under gravity weakened by sunlight. Setups: Halley: which way do the tails point?, Leaving the Sun: tail first, Hale-Bopp: a great comet, Encke: the shortest period, A comet from 1 to 50 au, From the Oort cloud. **Meteor showers**: the parent comet's orbit with a simulated stream of dust along it and Earth on its orbit; the date runs through the year; drag to turn the view. The sky inset shows simulated meteors from the radiant. Readouts give the computed shower date, radiant and entry speed beside the values the International Meteor Organization lists. Setups: Perseids in August, Geminids in December, Halley gives two showers, Leonids: head on, Draconids: catching up from behind.

## Running it in class

1. **Halley: which way do the tails point?** Ask Q1 before pressing Play. Play through perihelion.
2. **Leaving the Sun: tail first.** The ion tail now leads the comet. Ask Q2.
3. **A comet from 1 to 50 au**, then **From the Oort cloud**. Ask Q3 (the lesson's examples).
4. **Perseids in August.** Play through a year; the meteors start when Earth reaches the stream. Ask Q4.
5. **Leonids: head on** and **Draconids: catching up from behind.** Compare the entry speeds. Ask Q5.

## Questions

**Q1.** Halley's comet is moving across the picture near the Sun. Before you press Play, sketch where its two tails will point. Then press Play: which tail points straight away from the Sun, and which one curves?

**Q2.** As Halley leaves the Sun, its ion tail goes ahead of it. Why is a comet's tail not like the smoke trailing behind a moving train?

**Q3.** A comet comes as close as 1 au to the Sun and goes as far as 50 au. Find its average distance a and its period. A comet from the Oort cloud has a = 50,000 au: what is its period?

**Q4.** Why does a meteor shower come back on the same date every year, even though the comet that made it may be on the far side of its orbit?

**Q5.** The Leonids hit the air at about 71 km/s and the Draconids at about 20 km/s. Earth moves at about 30 km/s. Use the directions of Earth's motion and the stream's motion to explain the difference.

**Q6.** The dust grains in the demo are pushed by sunlight with a force β times the Sun's gravity, and β = 0.57 for a grain of radius 1 μm and density 1,000 kg/m³. What is β for a grain of radius 10 μm? Which grains end up farther from the comet?

## Common misconceptions

- "A comet's tail streams behind it like a flag." The ion tail points away from the Sun whatever way the comet moves; only the dust tail lags behind, and only partly.
- "Comets burn." Nothing burns: sunlight warms the ice, which turns straight to gas, and the gas glows because sunlight excites it.
- "Shooting stars are stars." They are grains of comet or asteroid dust, mostly smaller than a grain of sand, heated by hitting the air at tens of km/s.
- "A shower happens when the comet passes by." The comet can be anywhere; Earth meets the dust it left along its whole orbit.

## Physics behind the demo

The comet moves on a Kepler ellipse from JPL's elements (Small-Body Database, retrieved 2026-11-17), with Kepler's equation solved by Newton's method and its speed from vis viva, v² = GM(2/r − 1/a). The period in years is a^1.5 (a in au). The ion tail is drawn along the solar wind as seen from the comet, the wind's velocity minus the comet's (like rain seen from a moving car), so it tilts by atan(v across the wind ÷ v wind), at most a few degrees at 400 km/s; its length is drawn, not computed. Dust grains leave the nucleus inside 3 au at a rate that goes as 1/r² and then move under the Sun's gravity times (1 − β), where β = 3L/(16πGMcρs) for a grain that absorbs all the light it meets (Burns, Lamy and Soter 1979); each grain is stepped with velocity Verlet. In shower mode Earth moves on its orbit from JPL's approximate elements; the date of the shower is where the parent's orbit comes closest to Earth's; the radiant is the direction of the stream's velocity relative to Earth there, and the speed into the air is √(vg² + vesc²) with Earth's escape speed 11.19 km/s. The dust stream drawn is simulated: real streams are shaped by the planets and by when the dust left the comet.

## Going further

- Switch the shower to the Orionids and then the Eta Aquariids: Halley's orbit passes near Earth's orbit twice, so Halley gives two showers a year.
- With Your own comet, make the closest distance smaller and smaller: the dust tail grows as 1/r², and the comet moves fastest at perihelion.
- Compare the computed radiants with the IMO values in the readouts. Why might they differ by a few degrees? (The real orbits change as the planets pull on them.)
