---
title: Electromagnetic Waves
level: PHYS 202; intro astronomy
time: 15 to 25 minutes
---
## What students should come away with

- In a plane wave in vacuum, E and B are at right angles to each other and to the direction of travel, they peak together (in phase), and |B| = |E|/c with c = 1/√(μ₀ε₀).
- Every electromagnetic wave travels at c, so λf = c from radio to gamma rays; only the frequency (or wavelength) differs.
- The wave carries energy along S = E × B/μ₀, which never reverses. Its average is the intensity I = ½cε₀E₀², shared equally between the electric and magnetic fields, and it pushes with pressure I/c (absorbed) or 2I/c (reflected).
- Polarization describes how E moves at one place: along a line, round a circle or an ellipse, set by the two components and their phase difference. An ideal polarizer passes cos²θ of linear light and half of circular light.
- Waves are made by accelerating charges. An oscillating dipole radiates most at right angles to its axis (I ∝ sin²θ) and nothing along it.
- Inside a metal pipe a wave must fit between the walls, so only certain patterns (modes) can travel, each only above its cutoff frequency, f_c = (c/2)√((m/a)² + (n/b)²). In a closed metal box the waves bounce both ways and the box rings only at certain frequencies, as a guitar string does.

## Before class

Students should know the cross product right hand rule and v = λf. Drag the 3D view to turn it (**Reset view** restores it). B is drawn as cB to share the E scale; in tesla it is 3 × 10⁸ times smaller.

## Running it in class

1. **Plane wave.** Ask Q1 first. Pause, and show E along x, B along y, S along z, with E and B peaking at the same places. Play again: S pulses but never points backward.
2. **Drag the marker on the spectrum** (or the **Frequency f** slider) from radio to gamma rays. The wavelength readout changes and λ × f stays c.
3. **Sunlight at Earth.** I = 1361 W/m² needs E₀ = 1.01 kV/m but only B₀ = 3.38 µT. Read the radiation pressure, 4.54 µPa absorbed (Q2).
4. **Visible light.** A 5 mW laser pointer in a 1 mm beam is about five times as intense as sunlight. Then **Radio**: 39.8 µW/m² at 10 km from a 50 kW station (Q3).
5. **Circular polarization.** At one place E keeps its length and turns. Check **Polarizer in the end on view** and turn the **Transmission axis φ**: the transmitted fraction stays at 0.500. Go back to **Linear** and turn it again (Q5).
6. **Antenna.** Loops of E pinch off near the dipole and move outward. Drag the **Direction θ from the dipole axis** slider: the intensity is sin²θ, zero along the axis, half at 45°.
7. **In a plane.** Long wires through the page carry alternating currents; metal you paint reflects. One wire: rings spread out and the probe's r⟨E²⟩ stays the same at every distance (energy spreads over circles, a 2D solution). Then **Two wires in phase** and **opposite phase** (beams steer with phase), **Wire in front of a metal sheet** (a λ/4 reflector), **A wide beam through two slits** (bright directions at sin θ = mλ/d: 0, 19.5°, 41.8°), and **A closed metal box** (E inside stays zero).
8. **Polarization in a plane.** Load **A wire grid polarizer** with E along the wires: almost nothing gets through (about 3% of the power in our runs). Switch to E in the page and about 80% passes. **A slit λ/4 wide** surprises students: with E along the slit next to nothing gets through, because the gap is narrower than λ/2, while E across the gap squeezes through and spreads out beyond it.
9. **Guides and cavities.** Ask Q7 and Q8. **X band guide, TE10** shows E straight across the short side and B in flat loops; drag the frequency on the strip below 6.56 GHz (or pick **Below cutoff**) and the wave stops travelling and dies away. **Cavity: TE101** rings at 8.885 GHz with E and B a quarter period apart; **A cube** has three modes at one frequency.

## Questions

**Q1.** Predict: in a traveling plane wave, at a place and time where E is at its maximum, is B there at its maximum, zero, or somewhere in between? Many students expect a quarter cycle shift, as between the energies in a mass on a spring. Decide, then pause the demo to check.

**Q2.** Sunlight at Earth has an intensity of 1361 W/m². Find E₀, B₀ and the radiation pressure on a perfectly absorbing surface facing the Sun. What force does sunlight exert on a perfectly reflecting solar sail of area 100 m²? Use c = 3.00 × 10⁸ m/s and ε₀ = 8.85 × 10⁻¹² F/m.

**Q3.** The Radio setup is 10 km from a 50 kW transmitter that radiates evenly in all directions. Show that I = 39.8 µW/m² there and find E₀. What are I and E₀ at 20 km?

**Q4.** In a plane wave both E and B reverse direction every half period, yet the Poynting vector S = E × B/μ₀ always points along +z. Explain why. How often does |S| reach its peak?

**Q5.** Take the Plane wave setup (linear, E along x) and check Polarizer in the end on view. With the transmission axis at φ = 60°, what fraction of the intensity passes? At what φ does none pass? Now predict what happens for Circular polarization as you turn the polarizer, and check.

**Q6.** A broadcast antenna is a vertical oscillating dipole. Why does an airplane directly above it receive almost nothing, while a car on the horizon at the same distance receives a strong signal? At what angle from the vertical is the intensity half the maximum? If the frequency is doubled with the same dipole amplitude, by what factor does the radiated power change?
**Q7.** A standard X band waveguide (WR-90) is 22.86 mm by 10.16 mm inside. What is the cutoff frequency of its lowest mode, TE10? At 10 GHz, find the guide wavelength and the speeds of the pattern and of the energy. Which modes can travel at 14 GHz?

**Q8.** A cube 30 mm on a side is a closed metal cavity. What is its lowest resonant frequency, and why do three different modes share it?

## Common misconceptions

- **"E and B are a quarter cycle out of step, like the energies in an oscillator."** In a traveling plane wave in vacuum they are in phase. (Near an antenna, or in a standing wave, the phases differ.)
- **"Higher frequency light travels faster."** All frequencies travel at c in vacuum; λ adjusts.
- **"The magnetic field is the weak part of the wave and carries little energy."** B in tesla is small only because of the units. The energy density ½B²/μ₀ equals ½ε₀E² exactly.
- **"A polarizer at any angle blocks circular light partly, depending on the angle."** For circular light it passes half at every angle.

## Physics behind the demo

- The plane wave is exact for vacuum: E_x = E₀ cos ψ cos(kz − ωt), E_y = E₀ sin ψ cos(kz − ωt + δ), and B = ẑ × E/c. The readouts use CODATA 2022 values of μ₀ and ε₀; c = 1/√(μ₀ε₀) comes out as 299 792 458 m/s.
- Intensity I = ½cε₀E₀² with E₀ = √(E₀x² + E₀y²), so it holds for every polarization. ⟨u⟩ = I/c; pressure I/c absorbed and 2I/c reflected, for a surface facing the wave.
- The drawing always shows 2.5 wavelengths, with one period slowed to 2.5 s. Band edges are conventional; visible colors are approximate.
- Handedness uses the optics convention: right circular turns clockwise as you face the oncoming wave (δ = −90°). Engineers (IEEE) use the opposite name.
- The presets are idealized: real sunlight is unpolarized and spread over many wavelengths (the demo uses one 500 nm wave with the same mean intensity), and real radio stations aim most power toward the horizon.
- Antenna: exact fields of an oscillating point dipole (much shorter than λ), near field terms included. Lines are electric field lines; shading shows B, which points into or out of the page, multiplied by r. Radiated power P = p₀²ω⁴/(12πε₀c³). A real half wave antenna has a slightly narrower pattern than sin²θ.
- **Guides and cavities.** Exact modes of a perfectly conducting rectangular guide a × b and box a × b × d with vacuum inside (Jackson §§8.2 to 8.4 and 8.7; Pozar §§3.3 and 6.3): TE with B_z ∝ cos(mπx/a) cos(nπy/b), TM with E_z ∝ sin(mπx/a) sin(nπy/b), transverse fields from Maxwell's equations; β² = ω²/c² − k_c², so a mode travels only above f_c and below it dies away as e^(−κz). Group speed c√(1 − (f_c/f)²), phase speed c/√(1 − (f_c/f)²). The cavity rings at (c/2)√((m/a)² + (n/b)² + (p/d)²) with E and B a quarter period apart. The tests check all four Maxwell equations by finite differences for travelling, dying and standing modes, the boundary conditions on every wall, v_p v_g = c², the energy flowing at v_g and the cavity's energy sloshing between E and B. Wall losses are left out (stated).

## Going further

- History: in the 1860s Maxwell found that his equations predict waves traveling at 1/√(μ₀ε₀), close to the measured speed of light; Hertz produced and detected such waves with spark gap circuits in the late 1880s.
