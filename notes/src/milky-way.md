---
title: The Milky Way and Spiral Arms
level: Astronomy (galaxies; OpenStax Astronomy 2e chapter 25)
time: 25 to 35 minutes
---
## What students should come away with

- We see the Milky Way from inside its dusty disk, so counting stars along the disk (Herschel) puts us in the middle of whatever we can see. The globular clusters sit above and below the dust, and their swarm is centered far away toward Sagittarius: the Sun is about 26,000 light years from the center (Shapley, 1918).
- A distance from a standard candle, d = √(L/b), is only as good as the luminosity you assume and the dust you correct for. Shapley had the right idea and a wrong ruler, so his Galaxy came out about twice too big.
- The Galaxy has two populations: metal poor globular clusters in a big round halo (old, made first from nearly pristine gas) and metal rich stars and clusters in the disk and bulge (younger, made from gas earlier stars had enriched).
- The Sun goes around in about 220 million years, the galactic year, and its orbit weighs the mass inside it: M = v²r/G, the same as Kepler's M = a³/P².
- Stars all orbit at nearly the same speed, so a spiral arm made of the same stars would wind up in a few hundred million years. Real arms are a density wave, a traffic jam that stars drive through, lit by young blue stars that die before they leave it.

## Before class

Students should know the inverse square law for brightness (b = L/d²), that dust dims and reddens light, the idea of a standard candle, and Kepler's third law in the form M = a³/P² (a in AU, P in years, M in solar masses). The demo has four views. **Shapley's clusters**: 157 real globular clusters (Harris 1996, 2010 edition) on a map of the Galaxy seen from above or edge on, measured brightest first from their RR Lyrae stars, with the median center of the swarm and a sky map in galactic coordinates. **Two populations**: the clusters seen from the side, colored by metal share [Fe/H], with a histogram you can split. **Galactic year**: the Sun and a second star orbiting, with the measured rotation curve (Eilers et al. 2019) and a Kepler ghost. **Spiral arms**: a disk of simulated stars and gas where the arms are either the same stars or a density wave. The galaxy drawn behind the clusters and the stars in the arms view are simulated; the clusters are real.

## Running it in class

1. **Herschel's fog.** With the dust fog on, the stars we can see in the disk look the same in every direction. Turn it off: the clusters were above and below the dust all along.
2. **Where is the center?** Press Play and watch the clusters come in, brightest first. Stop at 20 and at the end (Q1, Q2).
3. **Shapley's ruler** (Q3). Then turn Correct for dust back on and set L to 50 L☉.
4. **Old means metal poor.** Read the counts and the median heights and distances on each side of the split (Q4).
5. **The Sun's lap** and **A star 40,000 ly out** (Q5, Q6). **Half the distance, same speed** (Q7).
6. **Arms that wind up**, then **Traffic jam** and **Riding with the arms** (Q8, Q9).

## Questions

**Q1.** Select NGC 104 (47 Tuc). Its RR Lyrae stars look 4.46 × 10⁻¹⁷ times as bright as the Sun does from 1 AU, and the dust in front of it has E(B−V) = 0.04. Assume each RR Lyrae star gives out 50 times the Sun's light. How far away is the cluster, before and after you correct for the dust? Compare with the catalog's 4.5 kpc.

**Q2.** In the Where is the center? setup, how many of the first 20 clusters lie in the half of the sky toward Sagittarius, and how far is the center of their swarm? After all 141, how many lie on that side and how far is the center? Why does the center move out as fainter clusters come in, and why does it end a little short of the modern 26,673 ly?

**Q3.** In Shapley's ruler, the dust correction is off and L = 80 L☉. Where does the center of the swarm land? Find it also with only one of the two mistakes (dust off with L = 50 L☉, then dust on with L = 80 L☉). Which mistake mattered more?

**Q4.** In Old means metal poor (split at [Fe/H] = −0.8), how many clusters are metal rich and how many metal poor, and what are each group's median height above the disk and median distance from the center? What does this say about which formed first?

**Q5.** The Sun is 8.178 kpc from the center and moves at 229 km/s. How long is the galactic year, and how many times has the Sun gone around since it formed 4.57 billion years ago?

**Q6.** The book's star is 40,000 ly from the center and moves at 230 km/s. Find its period, its orbit's size in AU, and the mass inside its orbit from M = a³/P². Compare with the mass inside the Sun's orbit. What does it mean that the outer orbit holds more?

**Q7.** In Half the distance, same speed, how do the two stars' laps compare? With the ghost on, how fast would a star at 40,000 ly move if all the mass were inside the Sun's orbit? What does the flat measured curve say?

**Q8.** In Arms that wind up, what is the pitch of the arms at the Sun after 500 million years and after 2 billion years? Real spiral arms are open, pitched 10° to 20°. What does that rule out?

**Q9.** In Traffic jam (pattern speed 25 km/s/kpc), where is corotation, and how often does the Sun meet an arm? In Riding with the arms (28 km/s/kpc), the Sun meets an arm much less often. Why? Why are the arms lined with young blue stars but not with old red ones?

## Common misconceptions

- **"The Sun is at the center of the Galaxy, since the Milky Way looks the same all around the sky."** Dust limits how far we see along the disk to a few thousand light years; the Galaxy is ten times bigger.
- **"Spiral arms are made of a fixed set of stars that turn with the galaxy."** They would wind up within a few galactic years. Stars pass through the arms.
- **"Arms have far more stars than the space between."** In the old stars they are only modestly denser; they stand out because the young, bright, short lived stars are made there.
- **"Stars far from the center orbit more slowly, like planets."** The measured rotation curve is nearly flat: the mass keeps growing outward, most of it unseen.

## Physics behind the demo

- **Clusters.** Harris (1996, 2010 edition): galactic l, b, distance from the Sun, [Fe/H] and E(B−V). Positions use R₀ = 8.178 kpc (GRAVITY 2019). The RR Lyrae luminosity is the catalog's M_V(HB) = 0.16[Fe/H] + 0.84, about 48 L☉ at [Fe/H] = −1.5; the student chooses an assumed L (50 L☉ is the book's value). A_V = 3.1 E(B−V). Clusters with E(B−V) > 1.5 count as found only in infrared. The swarm's center is the median of each coordinate. The survey order is brightest first, as seen through the dust.
- **Orbits.** Circular, t = 2πr/v; M = v²r/G = a³/P² (the two agree to 10⁻⁹). Rotation curve v = 229 − 1.7(R − 8.122) km/s from 5 to 25 kpc (Eilers et al. 2019); the ghost is v₀√(R₀/r).
- **Arms.** Stars on circles with v = 229 km/s × r/√(r² + 1 kpc²). Material arms start at 18° pitch and shear as tan i = 1/(1/tan i₀ + r t |dΩ/dr|). The density wave is a kinematic sketch: the pattern turns rigidly at Ω_p and each star slows by 1 + J g(θ) in an arm (g = 1 at its middle); it is not a self gravitating solution (Lin and Shu 1964). Corotation is where Ω(r) = Ω_p.
