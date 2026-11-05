---
title: Superfluid Helium
level: Intro thermodynamics or modern physics
time: 15 to 25 minutes
---
## What students should come away with

- Liquid helium 4 has a phase transition at 2.1768 K, the lambda point. Below it, helium II behaves as two interpenetrating fluids: a normal fluid that carries all the entropy and has viscosity, and a superfluid with neither.
- Evaporation cools a liquid: each mole that leaves takes its latent heat. Pumping on helium cools it to the lambda point and below, and the boiling stops at once because helium II conducts heat so well that no bubbles can form.
- The superfluid flows where the normal fluid cannot: through fine powder (the fountain effect), up walls as a film, and it stays still between turning disks.

## Before class

Students should know latent heat, vapor pressure and entropy. The demo has four experiments, every number from measured helium properties (Donnelly and Barenghi 1998): **Pump down** (a dewar of 100 g of helium at 4.22 K under a pump), **Fountain** (a tube with a powder plug and a heater), **Creeping film** (a beaker hanging in a 1.40 K bath) and **Spinning disks** (Andronikashvili's stack of 40 aluminum disks on a torsion fiber). Speed buttons run time faster.

## Running it in class

1. **Pump down through the lambda point.** Ask Q1. The temperature falls quickly at first, the bubbles stop at 2.1768 K, and the graph pauses there because the heat capacity peaks. With a 5.0 L/s pump and a 20 mW heat leak it takes about 2.3 minutes, and about 30 % of the liquid boils away (Q2).
2. **A bigger pump.** Four times the speed reaches the lambda point four times sooner and ends colder.
3. **Fountain.** At 1.40 K a 5.0 mK rise inside the tube holds a column 6.75 cm high; at 1.60 K and 10.0 mK it would hold 29.2 cm, so it spouts out of the 12 cm tube (Q3).
4. **Film.** The beaker empties itself at a steady rate (Q4): a straight line on the graph. Pushed down into the bath, an empty beaker fills itself.
5. **Spinning disks.** At 1.30 K the period is 20.47 s, almost the bare disks' 20.00 s. Record periods at several temperatures up to 2.2 K; the dots trace the normal fluid fraction (Q5).

## Questions

**Q1.** What happens to the bath's temperature and to the bubbles as the pump lowers the pressure? Predict what changes at 2.1768 K.

**Q2.** The latent heat is about 90 J/mol and the heat capacity about 10 J/(mol·K) on average between 4.22 K and 2.18 K. Estimate the fraction of the liquid that boils away to cool the rest to the lambda point, with no heat leak.

**Q3.** The fountain pressure is ΔP = ρSΔT, so the column it holds is h = SΔT/g. At 1.60 K, S = 281.5 J/(kg·K). How high a column does a 1.0 mK rise hold?

**Q4.** The film carries 7.5 × 10⁻⁵ cm³/s for each centimeter of rim. How fast does the level fall in a beaker 10 mm in inside radius, and how long does it take to drop 25 mm?

**Q5.** The helium between the disks has 1.048 times the bare disks' moment of inertia. If only the normal fluid turns with the disks, find ρn/ρ at 1.30 K from the period 20.47 s (bare disks 20.00 s), and predict the period above the lambda point.

## Common misconceptions

- **"Superfluid helium is just very cold, very thin liquid."** It is a different phase with a sharp transition and a heat capacity peak; the superfluid part has zero viscosity, not just a small one.
- **"The boiling stops because the pump stops working."** The pump keeps pumping and the liquid keeps evaporating, now only from the surface: helium II carries heat so well that no part of it gets warm enough to make a bubble.
- **"The film climbs because helium defies gravity."** All liquids that wet a wall form a film; in helium II the superfluid in the film flows without friction, so the film carries liquid over the rim to the lower level.
- **"Below the lambda point all the liquid is superfluid."** The superfluid fraction grows from zero at 2.1768 K to about 99 % at 1 K.

## Physics behind the demo

- Vapor pressure from the ITS-90 helium equations (BIPM), matching Donnelly and Barenghi Table 17.3 within 0.1 %. Entropy, heat capacity, latent heat, density and ρn/ρ are their tabulated values, with monotone cubic interpolation between rows (in ln S for the entropy).
- Pump down: the pump takes gas at room temperature, ṅ = SpP/(RT); the bath obeys nC dT/dt = Q − Lṅ, with a 20 mW heat leak. The bubbles are drawn to show boiling, not computed.
- Fountain: H. London's relation dP = ρS dT integrated over the temperature rise, with ρ taken constant (it varies by under 0.4 %).
- Film: the Rollin film transfer rate of 7.5 × 10⁻⁵ cm³/s per cm of the narrowest perimeter below 1.5 K (Daunt and Mendelssohn 1939), independent of the height difference; the film is drawn far thicker than its 30 nm.
- Spinning disks: the period is 2π√((I_disks + (ρn/ρ)I_He)/κ), with the fiber chosen to give 20.00 s for the bare disks.

## Going further

- Pair with **States of Matter** (phase changes and latent heat) and **Superconductors and the Meissner Effect** (another quantum state with zero resistance to flow).
- Why helium 3 needs a temperature a thousand times lower to become superfluid (its atoms are fermions and must pair first).
