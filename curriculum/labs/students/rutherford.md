# Rutherford Scattering
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §§6.4 and 10.1. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/rutherford.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** One alpha, gold; Geiger–Marsden beam; Head on; Plum pudding; Aluminum, high energy.

**Using the demo.**

- Alpha particles (charge $$+2e$$, kinetic energy $$K$$ from 1 to 10 MeV) are fired at a target of gold, silver, aluminum or an atomic number of your choice. With the nuclear atom each alpha follows the exact Coulomb hyperbola past one nucleus, which is held fixed; with the plum pudding atom it crosses a foil of Thomson atoms.
- One alpha mode fires a single alpha at the impact parameter $$b$$ you set and reads its deflection $$\theta$$.
- Beam mode fires alphas spread evenly over a disk of radius $$b_\mathrm{max}$$ (the beam radius) at up to 2000 per second, and counts them in 5° bins of $$\theta$$. The plot shows the counts per bin or per steradian. Each run is random, so two runs never give the same counts.
- The beam radius readout gives $$b_\mathrm{max}$$ and the smallest angle $$\theta$$ reached by alphas at the beam's edge. Bins below that angle are only partly filled, so Record reading leaves them out.
- Record reading stores one row for each 5° bin: the target, $$K$$, the number of alphas fired, $$b_\mathrm{max}$$, the bin's middle angle, its counts and its solid angle $$\Delta\Omega = 2\pi(\cos\theta_1 - \cos\theta_2)$$. Export to worksheet sends the readings to the Data table below; Clear (under Readings) starts a new series, which goes into a new copy of the table.
- Blind (under Projectile) hides the head on distance $$D$$, the closest approach, the expected counts, the fit to Rutherford and the Rutherford curve on the plot.
- Left out: the recoil of the nucleus (shown in a readout only), the strong force when an alpha reaches the nucleus, and the many small deflections by the electrons and distant nuclei of a real foil.

</details>

## Goal

Count alphas scattered by gold nuclei at angles from 15° to 180°, test Rutherford's prediction that the count per solid angle falls as $$1/\sin^4(\theta/2)$$, and find the charge of the nucleus from the size of the scattering.

## Background

Rutherford (1911) proposed that the positive charge of an atom sits in a tiny nucleus (§§6.4, 10.1). An alpha of kinetic energy $$K$$ heading straight for a nucleus of charge $$Ze$$ stops at the head on distance

$$D = \frac{zZe^2}{4\pi\varepsilon_0 K}, \qquad \frac{e^2}{4\pi\varepsilon_0} = 1.440\ \text{MeV·fm},\ z = 2 .$$

An alpha passing at impact parameter $$b$$ is turned through $$\theta$$ with $$\tan(\theta/2) = D/2b$$. If alphas arrive spread evenly over a disk of radius $$b_\mathrm{max}$$, the fraction turned into a small solid angle $$\Delta\Omega$$ at $$\theta$$ is $$(d\sigma/d\Omega)\,\Delta\Omega/\pi b_\mathrm{max}^2$$, with Rutherford's cross section

$$\frac{d\sigma}{d\Omega} = \frac{(D/4)^2}{\sin^4(\theta/2)} .$$

So for $$N_\mathrm{fired}$$ alphas the count $$N$$ in a bin of solid angle $$\Delta\Omega$$ obeys

$$\ln\frac{N}{\Delta\Omega} = \ln\frac{N_\mathrm{fired}\,D^2}{16\pi b_\mathrm{max}^2} - 4\ln\sin\frac{\theta}{2} .$$

A graph of $$\ln(N/\Delta\Omega)$$ against $$\ln\sin(\theta/2)$$ is a straight line of slope −4, and its intercept gives $$D$$, and from $$D$$ the charge $$Z$$.

## Before the lab

1. Find $$D$$ for a 7.69 MeV alpha and a gold nucleus ($$Z = 79$$). Compare it with the radius of the gold nucleus, $$1.2\ \text{fm} \times 197^{1/3}$$.
2. At what impact parameter, in terms of $$D$$, is an alpha turned through 90°?
3. By what factor should the count per steradian at 30° exceed that at 150°?
4. Why does a uniform sphere of positive charge (Thomson's atom) never turn an alpha back?
5. Aimed to pass a gold nucleus at an impact parameter of 25 fm, a 7.69 MeV alpha is turned through about 61°. Aim a 3.85 MeV alpha, with half the energy, the same way. Is it turned through about 122°, through more than 61° but clearly less than 122°, through about the same 61°, or through less than 61°? Choose one and say why.

## Safety

None for the virtual apparatus. Real alpha sources are sealed and must not be touched or opened.

## Procedure

Check Blind (under Projectile) before you start.

**One alpha.** Press the One alpha, gold setup (Impact parameter b 25 fm, Kinetic energy K 7.69 MeV) and read the Deflection θ readout. Then bring the Kinetic energy K slider to 3.85 MeV (drag close, then use the arrow keys, which step 0.01 MeV) and read Deflection θ again. Write both angles in your answer to Question 2.

**Gold.** Press the Geiger–Marsden beam setup (gold, 7.69 MeV, Beam mode). Press Clear above the picture to zero the counts and drag the Rate slider to its highest, 2000 per second. Let the beam run until the Fired readout passes 200,000 (under two minutes), then press Pause. Write down Fired and the Beam radius b<sub>max</sub> readout, press Record reading (under Readings; it stores one row per 5° bin) and press Export to worksheet.

**Plum pudding.** Press the Plum pudding setup (it runs the beam and shows the Small angle range of the plot). After a few thousand alphas, write down the largest angle where the Counts against angle plot shows any counts, and the Turned past 90° readout.

**Aluminum.** Press the Aluminum, high energy setup, then Beam above the picture. On the Counts against angle plot, write down the angle where the shaded region labeled "alpha reaches the nucleus" begins.

## Data

| Reading | Target and beam | Angle θ (°) | Counts N | Solid angle ΔΩ (sr) | N/ΔΩ (1/sr) | ln sin(θ/2) | ln(N/ΔΩ) |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

## Analysis

1. For gold, fill the N/ΔΩ, ln sin(θ/2) and ln(N/ΔΩ) columns and graph $$\ln(N/\Delta\Omega)$$ (vertical) against $$\ln\sin(\theta/2)$$ (horizontal), leaving out bins with fewer than 10 counts. Give the slope with its uncertainty and compare with −4.
2. From the intercept find $$D$$ for gold, then $$Z$$. Compare with 79.
3. What did the plum pudding atom give? Would Geiger and Marsden have seen any alphas turned back?

## Uncertainty

The count in a bin fluctuates by about $$\sqrt{N}$$, so $$\ln N$$ is uncertain by about $$1/\sqrt{N}$$. Find that uncertainty for your bins near 20°, 90° and 160°, and compare with the residuals of your fits. Where do the residuals scatter most, and why? How does the counting statistics limit your value of $$Z$$?

## Questions

1. Why do so few alphas turn through large angles, when every one of them passes a nucleus?
2. How did your choice in Before the lab 5 compare with the two deflections you read at 25 fm? Explain the change from $$\tan(\theta/2) = D/2b$$ and what sets $$D$$. Then use the same reasoning to say why Rutherford's formula depends on $$Z^2$$ and $$1/K^2$$.
3. For aluminum at 10 MeV, alphas with small impact parameters reach the nucleus. How would the real counts at large angles differ from Rutherford's formula, and what did this tell physicists about the size of nuclei?
4. How does this experiment support the planetary picture of the atom that Bohr's model starts from, and what problem does that picture raise?

## What to hand in

Prelab answers, the table copy with its graph and fit, the slope, $$D$$ and $$Z$$ with uncertainties, the plum pudding and aluminum notes, and answers to the questions. Identify simulated data.
