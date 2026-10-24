# Compton Scattering
Student laboratory · Modern Physics

Textbook: OpenStax *University Physics*, Vol. 3, §§6.3, 5.8 and 5.9. Access for free at https://openstax.org/details/books/university-physics-volume-3.

[Open the virtual apparatus](https://physicssteven.github.io/VirtualDemos/demos/compton.html)

<details class="about" markdown="1">
<summary>About the demo</summary>

**Setups in the demo:** Compton's 1923 experiment; Backscatter: biggest shift; Visible light: no visible shift; Gamma ray from cesium 137; Klein–Nishina: forward peaking; Compton edge.

**Using the demo.**

- A photon of energy $$E$$ scatters off a free electron at rest. You set the photon's energy (or pick a source: green laser, molybdenum Kα x rays at 71.07 pm, 511 keV, or the 661.657 keV gamma ray of cesium 137) and its scattering angle $$\theta$$, in 0.1° steps. You can also drag the scattered photon in the picture.
- The readouts act as two detectors: a spectrometer that reads the incoming and scattered wavelengths $$\lambda$$ and $$\lambda'$$ (5 significant figures), and an electron detector that reads the recoil electron's kinetic energy $$T$$ (4 significant figures) and its angle $$\phi$$ from the beam (0.01°).
- The kinematics are exact and relativistic. Real target electrons are bound and moving, which widens the shifted line; the demo leaves that out.
- Record reading stores the source, the photon energy and wavelength, the angle, $$\lambda'$$, $$T$$ and $$\phi$$. Export to worksheet sends the readings to the Data table below; Clear (under Readings) starts a new series, which goes into a new copy of the table.
- Blind (in the Model fold) hides the shift $$\Delta\lambda$$, the scattered energy, the electron's momentum and speed and the conservation check, so you work them out yourself.

</details>

## Goal

Measure how the wavelength of scattered x rays and gamma rays grows with the scattering angle, find the Compton wavelength and Planck's constant from it, and check that energy and momentum are conserved when the electron's relativistic momentum is used.

## Background

Compton (§6.3) treated an x ray as a photon of energy $$E = hc/\lambda$$ and momentum $$p = h/\lambda$$ colliding with a free electron at rest. Conservation of energy and of relativistic momentum (§§5.8, 5.9) give the shift of the scattered wavelength

$$\Delta\lambda = \lambda' - \lambda = \frac{h}{m_e c}\,(1 - \cos\theta),$$

where $$h/m_e c = \lambda_C$$ is the Compton wavelength of the electron. The shift does not depend on $$\lambda$$. A graph of $$\Delta\lambda$$ against $$1 - \cos\theta$$ is a straight line through the origin with slope $$\lambda_C$$.

The electron takes the energy the photon lost, $$T = E - E'$$ with $$E' = hc/\lambda'$$. Its momentum is $$p_e = \gamma m_e v$$, which in energy units is

$$p_e c = \sqrt{T^2 + 2Tm_ec^2}.$$

Along the beam and across it, the photon's momentum before must equal the sum of the scattered photon's and the electron's momenta. A handy constant: $$hc = 1239.84$$ keV·pm.

## Before the lab

1. Find the photon energy of molybdenum Kα x rays (71.07 pm) and of the cesium gamma ray (661.657 keV) in the other unit (energy or wavelength).
2. Using $$\lambda_C = 2.426$$ pm, predict the scattered wavelength of the molybdenum x rays at 90° and at 180°.
3. Why is the shift easy to see for x rays and impossible to see for visible light (532 nm)?
4. A 662 keV photon scatters straight back. Find $$\lambda'$$, $$E'$$ and the electron's kinetic energy.

## Safety

None for the virtual apparatus. Real x ray tubes and cesium 137 sources need shielding and a radiation safety course.

## Procedure

Turn Blind on.

**Molybdenum x rays.** Start with Compton's 1923 experiment. Record a reading at angles from 0° to 180° in 30° steps.

**Cesium gamma rays.** Clear the readings and pick the cesium 137 source. Record a reading at the same seven angles. Send this run to a new copy of the table.

## Data

| Reading | Angle $$\theta$$ (°) | $$1 - \cos\theta$$ | Scattered wavelength $$\lambda'$$ (pm) | Shift $$\Delta\lambda$$ (pm) | Electron energy $$T$$ (keV) | Electron angle $$\phi$$ (°) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |

## Analysis

1. Graph $$\Delta\lambda$$ against $$1 - \cos\theta$$ for each source. Is the intercept zero? Compare the two slopes with each other and with the accepted $$\lambda_C = 2.4263$$ pm.
2. From your slope find Planck's constant, $$h = \lambda_C m_e c$$, with $$m_e = 9.109 \times 10^{-31}$$ kg.
3. For the cesium gamma ray at 90°, find $$E' = hc/\lambda'$$ and check that $$E - E' = T$$.
4. For the same reading, find the electron's momentum $$p_e c$$ from $$T$$ and check momentum along the beam ($$E = E'\cos\theta + p_e c\cos\phi$$) and across it ($$E'\sin\theta = p_e c\sin\phi$$). Repeat the check with Newton's momentum, $$p_e c = \sqrt{2Tm_ec^2}$$. Which one balances?
5. What fraction of its energy does the photon lose at 180° for each source? Why does the gamma ray lose so much more?

## Uncertainty

The spectrometer gives $$\lambda'$$ to 5 significant figures (0.001 pm for the x rays, 0.0001 pm for gamma rays below 10 pm). How large an uncertainty does that put on each $$\Delta\lambda$$, and on your slope? Compare with the scatter of your residuals.

## Questions

1. Why does the shift not depend on the wavelength of the incoming photon, while the fraction of energy lost does?
2. Compton also saw an unshifted line at every angle. What scatters those photons, and why is their shift too small to see?
3. In what direction does the electron recoil when the photon scatters at a small angle? At 180°?
4. Why must the electron's momentum be $$\gamma m_e v$$ and not $$m_e v$$ in this calculation? At which source and angle does it matter most?

## What to hand in

Prelab answers, the table copies with their graphs and fits, $$\lambda_C$$ and $$h$$ with uncertainties, the conservation checks, and answers to the questions. Identify simulated data.
