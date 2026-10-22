---
title: Gravity Near Earth
level: PHYS 201
time: 10 to 20 minutes
---
## What students should come away with

- g = GM/r² with r measured from Earth's centre. Near the surface r ≈ R, so g barely changes with height: g ≈ g₀(1 − 2h/R).
- At the space station's height (about 400 km) gravity is still about 89% of its surface value. Astronauts float because they are in free fall, not because gravity is gone.
- Earth's rotation reduces the effective g by up to ω²R = 0.034 m/s² at the equator and tilts the plumb line slightly away from Earth's centre.
- The measured sea level g (9.780 at the equator to 9.832 at the poles) also reflects Earth's flattening, which a sphere misses.

## Before class

Students need Newton's law of gravitation. The left panel shows the planet with its axis vertical and a 1 kg mass at the chosen height and latitude, with arrows for gravity and the centrifugal term (drawn 100 times longer so it shows). The right panel plots GM/(R + h)² against height, with the near surface line. **Blind** hides g and the percentages for predictions.

## Running it in class

1. **Predict.** Turn on Blind. Ask what fraction of surface gravity acts at the space station's height. Typical guesses are zero or "a little". Then show 88.5%.
2. **Small heights.** Everest (8849 m): 9.7930 m/s², 0.28% less. The near surface line is accurate to 0.0006% here.
3. **Large heights.** At GPS orbit g is 0.57 m/s²; at geostationary orbit 0.22 m/s², and the orbit period there is one sidereal day.
4. **Latitude.** At sea level move from 0° to 90°: the effective g rises from 9.7864 to 9.8203 m/s² in the sphere model. Compare with the real Earth's 9.7803 and 9.8322 (WGS 84): the flattening adds more than the spin.
5. **Moon and Mars.** 1.62 and 3.73 m/s² at the surface.

## Questions

**Q1.** Show that for h ≪ R, g(h) ≈ g₀(1 − 2h/R). Use it to estimate g at the top of Everest.

**Q2.** Find g at 400 km. Why do astronauts on the space station float?

**Q3.** How much does Earth's rotation reduce g at the equator? At what latitude is the plumb line tilted most from the direction to Earth's centre?

**Q4.** A 1.000 kg mass on a spring scale reads 9.786 N at the equator and 9.820 N at the pole in the sphere model. The real values are about 9.780 and 9.832 N. What explains the difference?

**Q5.** At what height is g one quarter of its surface value?

## Common misconceptions

- **"There is no gravity in space."** At 400 km it is 89% of the surface value; orbiting objects are in free fall.
- **"g is the same everywhere on Earth."** It varies by about 0.5% between the equator and the poles, and slightly with height.
- **"g falls off linearly with height."** Only approximately, for h ≪ R; the true dependence is 1/r².

## Physics behind the demo

- A uniform sphere with GM = 3.986004418 × 10¹⁴ m³/s² and mean radius 6371 km (Moon 4.905 × 10¹² and 1737.4 km; Mars 4.283 × 10¹³ and 3389.5 km), turning at the sidereal rate.
- Effective g at rest on the ground or on a tower turning with the planet: gravity GM/r² toward the centre plus ω²r cos(latitude) outward from the axis. The plumb line tilt is largest near 45° (5.9 arcmin on Earth).
- The real Earth comparison uses the WGS 84 normal gravity formula at sea level (Somigliana): it includes both rotation and flattening.
- The GPS and geostationary presets set the orbit radius (26,560 km and 42,164 km), so the heights above the mean radius are 20,189 and 35,793 km. Geostationary altitude is usually quoted as 35,786 km above the equator, whose radius is 6378 km.
- The height slider runs on a square root scale so small heights are reachable.
